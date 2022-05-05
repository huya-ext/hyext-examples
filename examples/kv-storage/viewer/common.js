import React, { useState, useEffect } from "react";
import { UI } from "@hyext/hy-ui";
import "./common.hycss";
const { View, Text, Button, Input } = UI;

export const Example = () => {
  const [getValue, setGetValue] = useState("");
  const [result, setResult] = useState("暂无数据");

  const handleGetItem = () => {
    hyExt.storage
      .getItem(getValue)
      .then((value) => {
        setResult(getValue + "获取成功，值为：" + value);
        setResult(`获取成功，{"${getValue}":"${value}"}`);
      })
      .catch((err) => {
        setResult(getValue + "获取失败");
      });
  };

  return (
    <View className="container">
      <View className="section">
        <Text className="title">storage.getItem</Text>
        <View className="item">
          <Text className="inputText">key</Text>
          <Input
            className="input"
            blurOnSubmit={false}
            placeholder="存储的key"
            value={getValue}
            onChange={(v) => setGetValue(v)}
          />
        </View>
        <Button className="button" onPress={() => handleGetItem()}>
          调用
        </Button>
      </View>
      <View className="section">
        <Text className="title">调用结果</Text>
        <Text>{result}</Text>
      </View>
    </View>
  );
};
