import { UI } from '@hyext/hy-ui'
import React, { useState } from 'react'
import './demo.hycss'
const { View, Text, Button } = UI

export const DemoFirst = () => {
  let [result, setResult] = useState('');

  //引导当前用户发送弹幕
  function handleLeadBarrage() {
    hyExt.context.leadBarrage().then(() => {
      /** 引导成功 */
      setResult('leadBarrage引导成功')
    }).catch(err => {
      /** 引导失败 */
      setResult('leadBarrage引导失败' + err)
    })
  }

  //监听弹幕消息
  function handleOnBarrageChange() {
    var middle = '';
    hyExt.context.onBarrageChange({}, ({
      sendNick,
      senderAvatarUrl,
      senderGender,
      nobleLevel,
      fansLevel,
      content,
      unionId
    }) => {
      /** 监听弹幕回调消息 */
      middle = '' + sendNick + ' ' + senderAvatarUrl + ' ' + senderGender + ' ' + nobleLevel + ' ' + fansLevel + ' ' + content + ' ' + unionId;
      setResult('onBarrageChange调用成功' + middle)
    }).then(() => {
      /** 调用成功 */
      setResult('onBarrageChange调用成功' + middle)
    }).catch(err => {
      /** 调用失败 */
      setResult('onBarrageChange调用失败' + err)
    })
  }

  //取消监听弹幕消息
  function handleOffBarrageChange() {
    hyExt.context.offBarrageChange().then(() => {
      /** 取消监听成功 */
      setResult("offBarrageChange取消监听成功")
    }).catch(err => {
      /** 取消监听失败 */
      setResult('offBarrageChange取消监听失败 ' + err)
    })
  }

  return (
    <View className="container">
      <Button type='success' onPress={handleLeadBarrage}>leadBarrage引导当前用户发送弹幕</Button>
      <Button type='primary' onPress={handleOnBarrageChange}>onBarrageChange监听弹幕消息</Button>
      <Button type='info' onPress={handleOffBarrageChange}>offBarrageChange取消监听弹幕消息</Button>
      <View style={{ width: 300 }}>
        <Text >{result}</Text>
      </View>
    </View>
  )

}

