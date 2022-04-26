import { UI } from "@hyext/hy-ui";
import React, { Component } from "react";
import { Example } from "./common";
import "./app.hycss";

const { View } = UI;
class App extends Component {
  render() {
    return (
      <View className="container">
        <Example />
      </View>
    );
  }
}

export default App;
