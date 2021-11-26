import React, { useState, useEffect } from 'react'
import { UI } from '@hyext/hy-ui'

import './common.hycss'

const { View, Text } = UI

export const Example = () => {
  const [appearCount, setAppearCount] = useState(0)
  const [disappearCount, setDisappearCount] = useState(0)
  const [enterForegroundCount, setEnterForegroundCount] = useState(0)
  const [leaveForegroundCount, setLeaveForegroundCount] = useState(0)

  useEffect(() => {
    hyExt.onAppear(() => setAppearCount(c => c + 1))
    hyExt.onDisappear(() => setDisappearCount(c => c + 1))
    hyExt.onEnterForeground(() => setEnterForegroundCount(c => c + 1))
    hyExt.onLeaveForeground(() => setLeaveForegroundCount(c => c + 1))
  }, [])

  return (
    <View className='example'>
      <Text>显示次数: {appearCount}</Text>
      <Text>隐藏次数: {disappearCount}</Text>
      <Text>进入前台次数: {enterForegroundCount}</Text>
      <Text>离开前台次数: {leaveForegroundCount}</Text>
    </View>
  )
}