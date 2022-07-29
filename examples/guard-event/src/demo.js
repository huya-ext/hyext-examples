import { UI } from '@hyext/hy-ui'
import React, { useState } from 'react'
import './demo.hycss'

const { View, Text, Button } = UI

const Demo = (props) => {
  var [result, setResult] = useState('')

  // 监听开通守护
  function handleOnOpenGuardianNotice() {
    hyExt.context.onOpenGuardianNotice({
      callback: (payload) => {
        /** 监听回调函数 */
        setResult('onOpenGuardianNotice监听回调函数，拿到的信息为' + JSON.stringify(payload))
      }
    }).then(() => {
      /** 调用成功 */
      setResult("onOpenGuardianNotice调用成功")
    }).catch(err => {
      /** 调用失败 */
      setResult("onOpenGuardianNotice调用失败，原因是" + JSON.stringify(err))
    })
  }

  // 关闭监听开通守护
  function handleOffOpenGuardianNotice() {
    hyExt.context.offOpenGuardianNotice().then(() => {
      /** 关闭成功 */
      setResult("offOpenGuardianNotice关闭成功")
    }).catch(err => {
      /** 关闭失败 */
      setResult("offOpenGuardianNotice关闭失败，原因是" + JSON.stringify(err))
    })
  }

  return (
    <View>
      <Button className='button' onPress={handleOnOpenGuardianNotice}>监听开通守护onOpenGuardianNotice</Button>
      <Button className='button' onPress={handleOffOpenGuardianNotice}>关闭监听开通守护offOpenGuardianNotice</Button>
      <Text className='result'>结果是：{result}</Text>
    </View>
  )
}

export default Demo
