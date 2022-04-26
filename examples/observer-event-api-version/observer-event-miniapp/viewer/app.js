import { UI } from '@hyext/hy-ui'
import React, { Component } from 'react'
import './app.hycss'

// import { Example } from './common'
// ！！！注意这里的Example组件是替换为viewer文件夹下的common.js文件！！！
import { Example } from '../streamer/common'

const { View, Text } = UI

class App extends Component {
  render () {
    return (
      <View className="container"><Example /></View>
    )
  }
}

export default App
