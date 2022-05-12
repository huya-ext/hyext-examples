import { UI } from "@hyext/hy-ui";
import React, { Component } from "react";
import "./app.hycss";

import { Example } from "../components/common";

const { View } = UI;

class App extends Component {
  componentDidMount() {
    hyExt.panel.setLayout({
      x: 0.1,
      y: 0.1,
      width: 0.8,
      height: 0.8,
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
