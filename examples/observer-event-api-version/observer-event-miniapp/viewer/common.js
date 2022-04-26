import React, { useState, useEffect } from "react";
import { UI } from "@hyext/hy-ui";
import "./common.hycss";
const { View, Text } = UI;

export const Example = () => {
  const [receiveMessage, setReceiveMessage] = useState("暂无消息");
  useEffect(() => {
    hyExt.observer.on("message-push", (content) => setReceiveMessage(JSON.parse(content)));
  }, []);

  return (
    <View className="container">
      <Text>监听到的消息：{receiveMessage}</Text>
    </View>
  );
};
