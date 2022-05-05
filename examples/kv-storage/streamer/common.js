import React, { useState, useEffect } from "react";
import { UI } from "@hyext/hy-ui";
import "./common.hycss";
const { View, Text, Button, Input } = UI;

export const Example = () => {
  const [storageKey, setStorageKey] = useState("");
  const [storageValue, setStorageValue] = useState("");
  const [getValue, setGetValue] = useState("");
  const [removeKey, setRemoveKey] = useState("");
  const [keys, setKeys] = useState("暂无数据");
  const [result, setResult] = useState("暂无数据");

  useEffect(() => {
    hyExt.storage
      .getKeys()
      .then((key) => {
        setKeys(key == [] ? "暂无数据" : key?.join("，"));
      })
      .catch((err) => {
        setKeys("获取失败");
      });
  }, [result]);

  const handleSetItem = () => {
    hyExt.storage
      .setItem(storageKey, storageValue)
      .then(() => {
        setResult(storageKey + "设置成功");
      })
      .catch((err) => {
        setResult(storageKey + "设置失败，key不能为number类型。");
      });
  };

  const handleRemoveItem = () => {
    hyExt.storage
      .removeItem(removeKey)
      .then(() => {
        setResult(removeKey + "移除成功");
      })
      .catch((err) => {
        setResult(removeKey + "移除失败");
      });
  };

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
        <Text className="title">storage.setItem</Text>
        <View className="item">
          <Text className="inputText">key</Text>
          <Input
            className="input"
            blurOnSubmit={false}
            placeholder="存储的key"
            value={storageKey}
            onChange={(v) => setStorageKey(v)}
          />
        </View>
        <View className="item">
          <Text className="inputText">value</Text>
          <Input
            className="input"
            blurOnSubmit={false}
            placeholder="存储的值"
            value={storageValue}
            onChange={(v) => setStorageValue(v)}
          />
        </View>
        <Button className="button" onPress={() => handleSetItem()}>
          调用
        </Button>
      </View>
      <View className="section">
        <Text className="title">storage.removeItem</Text>
        <View className="item">
          <Text className="inputText">key</Text>
          <Input
            className="input"
            blurOnSubmit={false}
            placeholder="存储的key"
            value={removeKey}
            onChange={(v) => setRemoveKey(v)}
          />
        </View>
        <Button className="button" onPress={() => handleRemoveItem()}>
          调用
        </Button>
      </View>
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
        <Text className="title">存储的键集合</Text>
        <Text>{keys == [] ? "暂无数据" : keys }</Text>
      </View>
      <View className="section">
        <Text className="title">调用结果</Text>
        <Text>{result}</Text>
      </View>
    </View>
  );
};
