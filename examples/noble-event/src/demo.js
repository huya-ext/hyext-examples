import { UI } from '@hyext/hy-ui'
import React, { useState } from 'react'
import './demo.hycss'

const { View, Text, Button } = UI

const Demo = (props) => {
  var [result, setResult] = useState('')

  // 监听开通贵族
  function handleOnOpenNobleNotice() {
    hyExt.context.onOpenNobleNotice({
      callback: (payload) => {
        /** 监听回调函数 */
        setResult('onOpenNobleNotice监听回调函数，拿到的信息为' + JSON.stringify(payload))
      }
    }).then(() => {
      /** 调用成功 */
      setResult("onOpenNobleNotice调用成功")
    }).catch(err => {
      /** 调用失败 */
      setResult("onOpenNobleNotice调用失败，原因是" + JSON.stringify(err))
    })
  }

  // 关闭监听开通贵族
  function handleOffOpenNobleNotice() {
    hyExt.context.offOpenNobleNotice().then(() => {
      /** 关闭成功 */
      setResult("offOpenNobleNotice关闭成功")
    }).catch(err => {
      /** 关闭失败 */
      setResult("offOpenNobleNotice关闭失败，原因是" + JSON.stringify(err))
    })
  }

  return (
    <View>
      <Button className='button' onPress={handleOnOpenNobleNotice}>监听开通贵族onOpenNobleNotice</Button>
      <Button className='button' onPress={handleOffOpenNobleNotice}>关闭监听开通贵族offOpenNobleNotice</Button>
      <Text className='result'>结果是：{result}</Text>
    </View>
  )
}

export default Demo
