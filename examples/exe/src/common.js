import React from 'react'
import { UI } from '@hyext/hy-ui'
import { EventEmitter } from 'events'

import './common.hycss'

import config from './config'

const { View, Text, Button, Input, Tip } = UI

const Status = {
  INIT: '未启动',
  DOWNLOADING: '下载中',
  DOWNLOAD_SUCCESS: '下载成功',
  DOWNLOAD_FAIL: '下载失败',
  ENVING: '初始化中',
  ENV_SUCCESS: '初始化成功',
  ENV_FAIL: '初始化失败',
  LAUNCHING: '启动中',
  LAUNCH_SUCCESS: '启动成功',
  LAUNCH_FAIL: '启动失败'
}

const GAME_MESSAGE = 'gameMessage'

const bus = new EventEmitter()

const useLaunch = () => {
  const [progress, setProgress] = React.useState(0)
  const [status, setStatus] = React.useState(Status.INIT)
  const [statusMsg, setStatusMsg] = React.useState('')
  const [envProgress, setEnvProgress] = React.useState(0)

  // 监听EXE消息
  React.useEffect(() => {
    hyExt.exe.onGameMessage({
      callback: notice => {
        bus.emit(GAME_MESSAGE, notice)
      }
    })
    return () => {
      hyExt.exe.offGameMessage()
    }
  }, [])

  const doDownload = React.useCallback(() => new Promise((resolve, reject) => {
    // 设置状态
    setStatus(Status.DOWNLOADING)
    setProgress(0)
    // 调用下载接口下载EXE
    hyExt.fs.downloadBatchRes([{
      url: config.game_url,
      md5: config.game_md5,
      unzip: true,
      offline: false
    }]).then(() => {
      // 下载进度变化的处理函数
      const handler = ({ res, msg, url, md5, bytesLoaded, bytesTotal, path }) => {
        if (md5 === config.game_md5) {
          if (res === 0) {
            // 下载完成
            hyExt.context.off('downloadProgress', handler)
            setProgress(1)
            setStatus(Status.DOWNLOAD_SUCCESS)
            resolve()
          } else if (res === 1) {
            // 下载中
            setProgress(bytesLoaded / bytesTotal)
          } else {
            // 下载失败
            hyExt.context.off('downloadProgress', handler)
            setStatus(Status.DOWNLOAD_FAIL)
            reject(new Error(msg || '下载失败'))
          }
        }
      }
      // 监听下载进度变化
      hyExt.context.on('downloadProgress', handler)
    }, err => {
      setStatusMsg(err.message)
      setStatus(Status.DOWNLOAD_FAIL)
      reject(err)
    })
  }), [])

  const doInitGameEnv = React.useCallback(() => new Promise((resolve, reject) => {
    setStatus(Status.ENVING)
    setEnvProgress(0)
    // 初始化EXE环境，触发metashell下载过程
    hyExt.exe.initGameEnv()
    // 监听进度
    const handler = notice => {
      const { name, message } = notice
      if (name === 'GameEnvEvent') {
        const { res, progress } = JSON.parse(message)
        if (Number(res) === 1) {
          // 准备中
          setEnvProgress(progress)
        } else if (Number(res) === 0) {
          // 准备完毕
          bus.removeListener(GAME_MESSAGE, handler)
          setEnvProgress(1)
          setStatus(Status.ENV_SUCCESS)
          resolve()
        } else if (Number(res) === 2) {
          // 相关功能已被其他小程序占用
          bus.removeListener(GAME_MESSAGE, handler)
          setStatus(Status.ENV_FAIL)
          reject(new Error('相关功能已被其他小程序占用'))
        } else if (Number(res) === 3) {
          // 解压失败
          bus.removeListener(GAME_MESSAGE, handler)
          setStatus(Status.ENV_FAIL)
          reject(new Error('解压失败'))
        } else {
          // 其它异常
          bus.removeListener(GAME_MESSAGE, handler)
          setStatus(Status.ENV_FAIL)
          reject(new Error(`其它异常[${res}]`))
        }
      }
    }
    bus.addListener(GAME_MESSAGE, handler)
  }), [])

  const doLaunchGame = React.useCallback(async () => {
    // 设置状态
    setStatus(Status.LAUNCHING)
    try {
      // 调用接口启动
      await hyExt.exe.launchGame({
        processMode: 'local',
        md5: config.game_md5,
        exeName: config.game_exe_name,
      })
      setStatus(Status.LAUNCH_SUCCESS)
    } catch (err) {
      setStatus(Status.LAUNCH_FAIL)
      setStatusMsg(err.message)
    }
  }, [])

  const doStart = React.useCallback(async () => {
    try {
      // 下载
      await doDownload()
      // 初始化环境
      await doInitGameEnv()
      // 启动
      await doLaunchGame()
    } catch (err) {
      setStatusMsg(err.message)
    }
  }, [doDownload, doInitGameEnv, doLaunchGame])

  const doShutdown = React.useCallback(() => {
    hyExt.exe.shutdownGame().then(() => {
      Tip.show('关闭成功')
    }, err => {
      Tip.show(err.message || '关闭失败')
    })
  }, [])

  return [status, statusMsg, progress, envProgress, doStart, doShutdown]
}

const useMsg = (status) => {
  const [msg, setMsg] = React.useState('')

  const sendMsg = React.useCallback(() => {
    if (status !== Status.LAUNCH_SUCCESS) {
      Tip.show('请先启动EXE')
    } else {
      // 调用接口发送数据
      hyExt.exe.sendToGame({
        message: msg,
      }).then(() => {
        Tip.show(`发送[${msg}]成功`)
      }, err => {
        Tip.show(err.message || '发送失败')
      })
    }
  }, [msg, status])

  return [msg, setMsg, sendMsg]
}

const useReceiveMsg = () => {
  const [receiveMsg, setReceiveMsg] = React.useState('')

  // 监听数据
  React.useEffect(() => {
    const handler = notice => {
      setReceiveMsg(JSON.stringify(notice))
    }
    bus.addListener(GAME_MESSAGE, handler)
    return () => {
      bus.removeListener(GAME_MESSAGE, handler)
    }
  }, [])

  return [receiveMsg]
}

export const Example = () => {
  const [status, statusMsg, progress, envProgress, doStart, doShutdown] = useLaunch()
  const [msg, setMsg, sendMsg] = useMsg(status)
  const [receiveMsg] = useReceiveMsg(status)

  return (
    <View className='example'>
      <Text className='mb-20'>当前状态：{status}</Text>
      {
        status === Status.DOWNLOADING
          ? <Text className='mb-20'>下载进度：{progress.toFixed(2)}%</Text> :
          status === Status.ENVING
            ? <Text className='mb-20'>初始化进度：{envProgress.toFixed(2)}%</Text>
            : status === Status.DOWNLOAD_FAIL || status === Status.ENV_FAIL || status === Status.LAUNCH_FAIL
              ? <Text className='mb-20'>失败原因：{statusMsg}%</Text>
              : null
      }
      <Button className='mb-20' onPress={doStart}><Text>启动</Text></Button>
      <Input className='mb-20' value={msg} onChange={setMsg} />
      <Button className='mb-20' onPress={sendMsg}><Text>发送消息</Text></Button>
      <Text className='mb-20'>接受到消息：{receiveMsg}</Text>
      <Button className='mb-20' onPress={doShutdown}><Text>关闭</Text></Button>
    </View>
  )
}