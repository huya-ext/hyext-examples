import { UI } from '@hyext/hy-ui'
import React, { useState } from 'react'
import './demo2.hycss'
const { View, Text, Button } = UI

export const DemoSecond = () => {
  let [result, setResult] = useState('');

  //获取当前主播订阅概况
  function handleGetSubscriberSummary() {
    hyExt.context.getSubscriberSummary().then(subscribeSummary => {
      const subscribeCount = subscribeSummary.subscribeCount;
      setResult('getSubscriberSummary获取成功，当前主播订阅人数为' + subscribeCount)
    }).catch(err => {
      /** 调用失败 */
      setResult('getSubscriberSummary获取失败' + err)
    })
  }

  //监听当前主播订阅变化消息
  function handleOnSubscriberChange() {
    var list = [];
    hyExt.context.onSubscriberChange({}, (subscriberList) => {
      /** 监听函数回调 */
      list = subscriberList
      setResult('当前的订阅用户列表为' + JSON.stringify(list))
    }).then(() => {
      /** 监听成功 */
      setResult('onSubscriberChange监听成功')
    }).catch(err => {
      /** 监听失败 */
      setResult('onSubscriberChange监听失败' + err)
    })
  }

  //取消监听当前主播订阅变化消息
  function handleOffSubscriberChange() {
    hyExt.context.offSubscriberChange().then(() => {
      /** 调用成功 */
      setResult('offSubscriberChange取消监听成功')
    }).catch(err => {
      /** 调用失败 */
      setResult('offSubscriberChange取消监听失败' + err)
    })
  }

  return (
    <View className="container">
      <Button type='info' onPress={handleGetSubscriberSummary}>getSubscriberSummary获取当前主播订阅概况</Button>
      <Button type='warning' onPress={handleOnSubscriberChange}>onSubscriberChange监听当前主播订阅变化消息</Button>
      <Button type='danger' onPress={handleOffSubscriberChange}>offSubscriberChange取消监听当前主播订阅变化消息</Button>
      <Text>{result}</Text>
    </View>
  )
}
