import { UI } from "@hyext/hy-ui";
import React, { Component } from "react";
import "./app.hycss";
import { Example } from "../components/common";

const { View } = UI;
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
    return (
      <View className="container">
        <Example />
      </View>
    );
  }
}

export default App;
