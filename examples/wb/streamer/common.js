import { UI } from "@hyext/hy-ui";
import React, { useState, useEffect } from "react";
const { View, Text, Input, Button } = UI;
import "./common.hycss";

export const Example = () => {
  const [wb, setWb] = useState(false);
  const [wbData, setWbData] = useState(""); // 发送的数据
  const [wbMsg, setWbMsg] = useState(""); // 接受数据
  const [wbId, setWbId] = useState("");
  const [isSendSuccess, setIsSendSuccess] = useState(false);

  /**
   * 创建普通白板
   * SDK:hyExt.stream.createWB()
   */
  const createNormalWb = () => {
    hyExt.stream
      .createWB({
        width: 750,
        height: 1200,
        type: "NORMAL", // 普通白板
        wbName: "huya_wbName",
        offsetX: 100,
        offsetY: 100,
        canvasWidth: 500,
        canvasHeight: 600,
        x: 0,
        y: 0,
        force: true,
      })
      .then(({ wbId }) => {
        // 返回id
        setWbId(wbId);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  /**
   * 创建独立白板
   * SDK:hyExt.stream.createWB()
   */
  const createExtraWb = () => {
    hyExt.stream
      .createWB({
        width: 750,
        height: 1200,
        type: "EXTRA", // 普通白板
        wbName: "huya_wbName",
        offsetX: 100,
        offsetY: 100,
        canvasWidth: 500,
        canvasHeight: 600,
        x: 0,
        y: 0,
        force: true,
      })
      .then(({ wbId }) => {
        // 返回id
        setWbId(wbId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**
   * 向白板发送数据
   * SDK:hyExt.stream.sendToExtraWhiteBoard()
   */
  const sendToWb = () => {
    hyExt.stream
      .sendToExtraWhiteBoard({
        wbId,
        data: wbData,
      })
      .then((res) => {
        setIsSendSuccess(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    /**
     * 获取初始化参数
     * SDK：hyExt.env.getInitialParam()
     */
    hyExt.env.getInitialParam().then((param) => {
      // 包含wb参数 => 独立白板模式
      if (param.wb) {
        setWb(true); // 改变白板状态
      }
    });

    /**
     * 监听从原来小程序发送过来的独立白板数据
     * SDK：hyExt.stream.onExtraWhiteBoardMessage()
     */
    hyExt.stream.onExtraWhiteBoardMessage({
      // 接收到数据，刷新视图
      callback: (callbackWbMsg) => {
        setWbMsg(callbackWbMsg);
      },
    });
  });

  // 主播端面板内容
  const renderForm = () => {
    return (
      <View className="container">
        <View className="section">
          <Text>请在输入框输入数据</Text>
          <Input
            className="input"
            blurOnSubmit={false}
            placeholder="输入需要发送的数据"
            value={wbData}
            onChange={(value) => setWbData(value)}
          />
        </View>
        <View className="section">
          <Button className="button" onPress={() => sendToWb()}>
            发送数据
          </Button>
        </View>
        <View className="section">
          <Button className="button" onPress={() => createNormalWb()}>
            创建普通白板
          </Button>
        </View>
        <View className="section">
          <Button className="button" onPress={() => createExtraWb()}>
            创建独立白板
          </Button>
        </View>
        <View className="section">
          <Text className="text">
            发送结果：{isSendSuccess ? "发送成功" : "暂无发送"}
          </Text>
        </View>
      </View>
    );
  };

  // 主播端白板内容
  const renderWb = () => {
    return (
      <View className="wb">
        <Text className="data">白板里面接收到的数据:{wbMsg || "暂无接收"}</Text>
      </View>
    );
  };

  // 条件渲染
  return wb ? renderWb() : renderForm();
};

export default Example;
