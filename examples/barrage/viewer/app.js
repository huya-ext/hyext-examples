import { UI } from '@hyext/hy-ui'
import React, { Component } from 'react'
import './app.hycss'
import { DemoFirst } from '../src/components/demo.js'
const { View, Text } = UI

class App extends Component {
  render() {
    return (
      <View className="container">
        <DemoFirst></DemoFirst>
      </View>
    )
  }
}

export default App
