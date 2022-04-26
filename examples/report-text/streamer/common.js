import React, { useState, useEffect } from "react";
import { UI } from "@hyext/hy-ui";

import "./common.hycss";

const { View, Text, Input, Button } = UI;

export const Example = () => {
  const [sendMessage, setSendMessage] = useState("");
  const [sendResult, setSendResult] = useState("暂无发送");

  const emitMessage = function () {
    hyExt.order
      .reportText({ text: sendMessage })
      .then((res) => {
        setSendResult("发起小程序文本秩序审核成功", res);
      })
      .catch((err) => {
        setSendResult("发起小程序文本秩序审核失败", err);
      });
  };

  return (
    <View className="container">
      <View className="section">
        <Input
          className="input"
          blurOnSubmit={false}
          placeholder="请输入需要秩序审核的文本"
          value={sendMessage}
          onChange={(v) => setSendMessage(v)}
        />
      </View>
      <View className="section">
        <Button className="button" onPress={() => emitMessage()}>
          文本秩序审核
        </Button>
      </View>
      <View className="section">
        <Text className="text">审核结果：{sendResult}</Text>
      </View>
    </View>
  );
};
