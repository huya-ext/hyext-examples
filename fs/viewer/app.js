import { UI } from "@hyext/hy-ui";
import React, { Component } from "react";
import "./app.hycss";
import { Example } from "../components/common";

const { View, Text } = UI;
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
