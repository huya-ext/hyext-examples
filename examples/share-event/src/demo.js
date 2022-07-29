import { UI } from '@hyext/hy-ui'
import React, { useState } from 'react'
import './demo.hycss'

const { View, Text, Button } = UI

const Demo = (props) => {
  var [result, setResult] = useState('')

  // 监听分享直播间事件
  function handleOnShareLiveNotice() {
    hyExt.context.onShareLiveNotice({
      callback: (payload) => {
        /** 监听回调函数 */
        setResult('onShareLiveNotice监听回调函数，拿到的信息为' + JSON.stringify(payload))
      }
    }).then(() => {
      /** 调用成功 */
      setResult("onShareLiveNoticee调用成功")
    }).catch(err => {
      /** 调用失败 */
      setResult("onShareLiveNotice调用失败，原因是" + JSON.stringify(err))
    })
  }

  // 取消监听分享直播间事件
  function handleOffShareLiveNotice() {
    if (hyExt.context.offShareLiveNotice) {
      hyExt.context.offShareLiveNotice();
      setResult("offShareLiveNotice调用成功")
    } else {
      setResult("offShareLiveNotice调用失败")
    }

  }

  return (
    <View>
      <Button className='button' onPress={handleOnShareLiveNotice}>监听分享直播间事件onShareLiveNotice</Button>
      <Button className='button' onPress={handleOffShareLiveNotice}>取消监听分享直播间事件offShareLiveNotice</Button>
      <Text className='result'>结果是：{result}</Text>
    </View>
  )
}

export default Demo
