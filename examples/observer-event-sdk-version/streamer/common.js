import React, { useState, useEffect } from "react";
import { UI } from "@hyext/hy-ui";
import "./common.hycss";
const { View, Text, Input, Button } = UI;

export const Example = () => {
  const [sendMessage, setSendMessage] = useState("");
  const [sendResult, setSendResult] = useState("暂无发送");

  const emitMessage = function () {
    hyExt.observer
      .emit("message-push", `${JSON.stringify(sendMessage)}`)
      .then((res) => {
        setSendResult("向客户端小程序广播信息成功！");
      })
      .catch((err) => {
        setSendResult("内容包含敏感信息，请重新输入!");
      });
  };

  return (
    <View className="container">
      <View className="section">
        <Text>请在输入框输入数据</Text>
        <Input
          className="input"
          blurOnSubmit={false}
          placeholder="输入数据并发送"
          value={sendMessage}
          onChange={(v) => setSendMessage(v)}
        />
      </View>
      <View className="section">
        <Button className="button" onPress={() => emitMessage()}>
          发送数据至观众端
        </Button>
      </View>
      <Text className="text">发送结果：{sendResult}</Text>
    </View>
  );
};
