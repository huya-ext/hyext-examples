import { UI } from '@hyext/hy-ui'
import React, { useState } from 'react'
import './demo.hycss'

const { View, Text, Button } = UI

const Demo = (props) => {
  var [result, setResult] = useState('')

  // 引导当前观众送礼
  function handleLeadGift() {
    hyExt.context.leadGift().then(() => {
      /** 引导成功 */
      setResult('引导当前观众送礼leadGift引导成功')
    }).catch(err => {
      /** 引导失败 */
      setResult('引导当前观众送礼leadGift引导失败，原因是' + JSON.stringify(err))
    })
  }

  // 监听当前直播间礼物变化消息
  function handleOnGiftChange() {
    hyExt.context.onGiftChange({ sendNick: "huya_sendNick" }, (giftInfo) => {
      /** 监听礼物回调信息 */
      setResult('onGiftChange监听礼物回调信息:' + JSON.stringify(giftInfo))
    }).then(() => {
      /** 监听礼物成功 */
      setResult('onGiftChange监听礼物成功')
    }).catch(err => {
      /** 监听礼物失败 */
      setResult('onGiftChange监听礼物失败，原因是' + JSON.stringify(err))
    })
  }

  // 取消监听当前直播间礼物变化消息
  function handleOffGiftChange() {
    hyExt.context.offGiftChange().then(() => {
      /** 取消监听成功 */
      setResult('offGiftChange取消监听成功')
    }).catch(err => {
      /** 取消监听失败 */
      setResult('offGiftChange取消监听失败，原因是' + JSON.stringify(err))
    })
  }

  // 获取当前直播间礼物配置
  function handleGetGiftConf() {
    hyExt.context.getGiftConf().then(giftConfig => {
      /** 调用成功 */
      setResult('getGiftConf调用成功，获取当前直播间礼物配置（这里为了方便，只获取其一）：' + JSON.stringify(giftConfig[0]))
    }).catch(err => {
      /** 调用失败 */
      setResult('getGiftConf调用失败，原因是' + JSON.stringify(err))
    })
  }

  // 当前观众送礼
  function handleSendGift() {
    hyExt.context.sendGift({ giftId: 4, giftCount: 1 }).then(() => {
      /** 送礼成功 */
      setResult('sendGift送礼成功')
    }).catch(err => {
      /** 送礼失败 */
      setResult('sendGift送礼失败，原因是' + JSON.stringify(err))
    })
  }

  return (
    <View>
      <Button className='button' onPress={handleLeadGift}>引导当前观众送礼leadGift</Button>
      <Button className='button' onPress={handleOnGiftChange}>监听当前直播间礼物变化消息onGiftChange</Button>
      <Button className='button' onPress={handleOffGiftChange}>取消监听当前直播间礼物变化消息offGiftChange</Button>
      <Button className='button' onPress={handleGetGiftConf}>获取当前直播间礼物配置getGiftConf</Button>
      <Button className='button' onPress={handleSendGift}> 当前观众送礼sendGift</Button>
      <Text className='result'>结果是：{result}</Text>
    </View>
  )
}

export default Demo
