import { UI } from '@hyext/hy-ui'
import React, { Component } from 'react'
import './app.hycss'
import { DemoFirst } from '../src/components/demo1'
const { View } = UI

class App extends Component {
  render() {
    return (
      <View className="container"><DemoFirst></DemoFirst></View>
    )
  }
}

export default App
