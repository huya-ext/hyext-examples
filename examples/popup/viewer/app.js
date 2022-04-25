import { UI } from "@hyext/hy-ui";
import React, { Component } from "react";
import "./app.hycss";

const { View, Text } = UI;

class App extends Component {
  componentDidMount() {
    hyExt.panel.setLayout({
      x: 0.25,
      y: 0.25,
      width: 0.5,
      height: 0.5,
      visible: true,
      animate: false,
    });
  }
  render() {
    debugger
    return (
      <View className="container" style={{backgroundColor:'#97DBAE'}}>
        <Text>浮窗</Text>
      </View>
    );
  }
}

export default App;
