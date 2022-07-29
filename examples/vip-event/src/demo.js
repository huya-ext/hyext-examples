import { UI } from '@hyext/hy-ui'
import React, { useState } from 'react'
import './demo.hycss'

const { View, Text, Button } = UI

const Demo = (props) => {
  var [result, setResult] = useState('')

  // 监听高级用户进场
  function handleOnVipEnterBannerNotice() {
    hyExt.context.onVipEnterBannerNotice({
      callback: (payload) => {
        /** 监听回调函数 */
        setResult('onVipEnterBannerNotice监听回调函数，拿到的信息为' + JSON.stringify(payload))
      }
    }).then(() => {
      /** 调用成功 */
      setResult("onVipEnterBannerNotice调用成功")
    }).catch(err => {
      /** 调用失败 */
      setResult("onVipEnterBannerNotice调用失败，原因是" + JSON.stringify(err))
    })
  }

  // 取消监听高级用户进场
  function handleOffVipEnterBannerNotice() {
    hyExt.context.offVipEnterBannerNotice().then(() => {
      /** 关闭成功 */
      setResult("offVipEnterBannerNotice关闭成功")
    }).catch(err => {
      /** 关闭失败 */
      setResult("offVipEnterBannerNotice关闭失败，原因是" + JSON.stringify(err))
    })
  }

  return (
    <View>
      <Button className='button' onPress={handleOnVipEnterBannerNotice}>监听高级用户进场onVipEnterBannerNotice</Button>
      <Button className='button' onPress={handleOffVipEnterBannerNotice}>关闭监听高级用户进场offVipEnterBannerNotice</Button>
      <Text className='result'>结果是：{result}</Text>
    </View>
  )
}

export default Demo
