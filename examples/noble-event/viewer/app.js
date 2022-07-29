import { UI } from '@hyext/hy-ui'
import React, { Component } from 'react'
import Demo from '../src/demo'
import './app.hycss'

const { View, Text } = UI

class App extends Component {
  render() {
    return (
      <View className="container">
        <Demo></Demo>
      </View>
    )
  }
}

export default App
