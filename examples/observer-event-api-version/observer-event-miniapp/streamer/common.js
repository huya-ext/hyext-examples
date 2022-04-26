import React, { useState } from "react";
import { UI } from "@hyext/hy-ui";
import "./common.hycss";

const { View, Text, Input, Button } = UI;

export const Example = () => {
  const [sendMessage, setSendMessage] = useState("");
  const [sendResult, setSendResult] = useState("暂无发送");

  const requestServer = function () {
    hyExt
      .request({
        url: "http://localhost:3001",
        method: "POST",
        data: { event: "message-push", message: sendMessage },
        dataType: "text",
        isDirect: true,
        header: { "y-header": "foo" },
      })
      .then((res) => {
        setSendResult("向业务服务器发送数据成功！", res);
      })
      .catch((err) => {
        setSendResult("向业务服务器发送数据失败！", err);
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
        <Button className="button" onPress={() => requestServer()}>
          发送数据至主播端
        </Button>
      </View>
      <Text className="text">发送结果：{sendResult}</Text>
    </View>
  );
};
