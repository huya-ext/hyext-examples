import { UI } from '@hyext/hy-ui'
import React, { Component } from 'react'
import './app.hycss'
import { DemoSecond } from '../src/components/demo2'
const { View } = UI

class App extends Component {
  render() {
    return (
      <View className="container">
        <DemoSecond></DemoSecond>
      </View>
    )
  }
}

export default App
