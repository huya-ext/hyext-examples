import React from "react";
import { UI } from "@hyext/hy-ui";
import "./common.hycss";
const { View, Text, Button } = UI;

export const Example = () => {
  // 打开浮窗
  const openPopup = () => {
    hyExt.action
      .localControlPanelLoad({ extType: "web_popup", load: true })
      .then(() => {
        console.log("localControlPanelLoad浮窗打开成功");
      })
      .catch((err) => {
        console.log("localControlPanelLoad调用失败");
      });
  };
  // 关闭浮窗
  const closePopup = () => {
    hyExt.action
      .localControlPanelLoad({ extType: "web_popup", load: false })
      .then(() => {
        console.log("localControlPanelLoad浮窗关闭成功");
      })
      .catch((err) => {
        console.log("localControlPanelLoad调用失败", err);
      });
  };
  // 打开面板
  const openPanel = () => {
    hyExt.action
      .localControlPanelVisible({ extType: "web_video_com", visible: true })
      .then(() => {
        console.log("localControlPanelVisible面板打开成功");
      })
      .catch((err) => {
        console.log("localControlPanelVisible调用失败", err);
      });
  };
  // 关闭面板
  const closePanel = () => {
    hyExt.action
      .localControlPanelVisible({ extType: "web_video_com", visible: false })
      .then(() => {
        console.log("localControlPanelVisible面板关闭成功");
      })
      .catch((err) => {
        console.log("localControlPanelVisible关闭失败", err);
      });
  };
  // 打开面板入口
  const openPanelEntry = () => {
    hyExt.action
      .localControlEntrance({ extType: "web_video_com", visible: true })
      .then(() => {
        console.log("localControlEntrance面板入口打开成功");
      })
      .catch((err) => {
        console.log("localControlEntrance调用失败", err);
      });
  };
  // 关闭面板入口
  const closePanelEntry = () => {
    hyExt.action
      .localControlEntrance({ extType: "web_video_com", visible: false })
      .then(() => {
        console.log("localControlEntrance面板入口关闭成功");
      })
      .catch((err) => {
        console.log("localControlEntrance调用失败", err);
      });
  };

  return (
    <View className="container">
      <View className="section">
        <Text className="title">action.localControlPanelLoad</Text>
        <View className="button-wrapper">
          <Button className="button" onPress={() => openPopup()}>
            打开浮窗
          </Button>
          <Button className="button" onPress={() => closePopup()}>
            关闭浮窗
          </Button>
        </View>
      </View>
      <View className="section">
        <Text className="title">action.localControlPanelVisible</Text>
        <View className="button-wrapper">
          <Button className="button" onPress={() => openPanel()}>
            打开面板
          </Button>
          <Button className="button" onPress={() => closePanel()}>
            关闭面板
          </Button>
        </View>
      </View>
      <View className="section">
        <Text className="title">action.localControlEntrance</Text>
        <View className="button-wrapper">
          <Button className="button" onPress={() => openPanelEntry()}>
            打开入口
          </Button>
          <Button className="button" onPress={() => closePanelEntry()}>
            关闭入口
          </Button>
        </View>
      </View>
    </View>
  );
};
