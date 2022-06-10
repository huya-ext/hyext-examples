import React, { useState, useEffect } from 'react'
import { UI } from '@hyext/hy-ui'

import './common.hycss'

const { View, Text, Button } = UI

export const Example = () => {
  const [showResult, setShowResult] = useState('未开始')
  const [hideResult, setHideResult] = useState('未开始')
  const [loadResult, setLoadesult] = useState('未开始')
  const [unloadResult, setUnloadResult] = useState('未开始')

  const showEntrance = async () => {
    try {
      setShowResult('处理中')
      await hyExt.action.showEntrance({
        extTypes: 'web_video_com,app_panel'
      })
      setShowResult('成功')
    } catch (err) {
      setShowResult(`失败：${err.message}`)
    }
  }
  const hideEntrance = async () => {
    setHideResult('处理中')
    try {
      await hyExt.action.hideEntrance({
        extTypes: 'web_video_com,app_panel'
      })
      setHideResult('成功')
    } catch (err) {
      setHideResult(`失败：${err.message}`)
    }
  }
  const loadPopup = async () => {
    try {
      setLoadesult('处理中')
      await hyExt.backend.commonOperate({
        key: 'controlPanelLoad',
        param: {
          extTypes: 'web_popup',
          visible: true,
        },
      })
      setLoadesult('成功')
    } catch (err) {
      setLoadesult(`失败：${err.message}`)
    }
  }
  const unloadPopup = async () => {
    try {
      setUnloadResult('处理中')
      await hyExt.backend.commonOperate({
        key: 'controlPanelLoad',
        param: {
          extTypes: 'web_popup',
          visible: false,
        },
      })
      setUnloadResult('成功')
    } catch (err) {
      setUnloadResult(`失败：${err.message}`)
    }
  }
  return (
    <View className='example'>
      <Button onPress={showEntrance}><Text>显示入口</Text></Button>
      <Text>显示入口结果：{showResult}</Text>
      <Button onPress={hideEntrance}><Text>隐藏入口</Text></Button>
      <Text>隐藏入口结果：{hideResult}</Text>
      <Button onPress={loadPopup}><Text>加载浮窗</Text></Button>
      <Text>加载浮窗结果：{loadResult}</Text>
      <Button onPress={unloadPopup}><Text>卸载浮窗</Text></Button>
      <Text>卸载浮窗结果：{unloadResult}</Text>
    </View>
  )
}