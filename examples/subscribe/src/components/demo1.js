import { UI } from '@hyext/hy-ui'
import React, { useState } from 'react'
import './demo1.hycss'
const { View, Text, Button } = UI

export const DemoFirst = () => {
  let [result, setResult] = useState('');

  //引导当前观众订阅当前主播
  function handleLeadSubscribe() {
    hyExt.context.leadSubscribe().then(() => {
      /** 引导成功 */
      setResult('leadSubscribe引导成功')
    }).catch(err => {
      /** 引导失败 */
      setResult('leadSubscribe引导失败' + err)
    })
  }

  //获取当前观众订阅状态
  function handleGetSubscribeInfo() {
    hyExt.context.getSubscribeInfo().then(isSubscribed => {
      /** 获取成功 */
      setResult("getSubscribeInfo获取成功" + isSubscribed)
    }).catch(err => {
      /** 获取失败 */
      setResult('getSubscribeInfo获取失败' + err)
    })
  }


  return (
    <View className="container">
      <Button type='success' onPress={handleLeadSubscribe}>leadSubscribe引导当前观众订阅当前主播</Button>
      <Button type='primary' onPress={handleGetSubscribeInfo}>getSubscribeInfo获取当前观众订阅状态</Button>
      <Text>{result}</Text>
    </View>
  )

}