import { UI } from '@hyext/hy-ui'
import React, { Component } from 'react'
import './app.hycss'

import Example from './common'

const { View, Text } = UI

class App extends Component {
  render () {
    return (
      <View style={{backgroundColor: "#bfc", position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}><Example /></View>
    )
  }
}

export default App
