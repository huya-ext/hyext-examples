import React, { useState } from "react";
import { UI } from "@hyext/hy-ui";
import "./common.hycss";
const { View, Text, Button, ScrollView, Tip } = UI;

export const Example = () => {
  const [result, setResult] = useState("暂无数据");

  const showSuccessTip = () => {
    Tip.show("调用成功，请滑至底部查看调用结果！");
  };
  const showErrorTip = () => {
    showErrorTip();
    Tip.show("调用失败");
  };
  // 获取当前小程序初始化参数
  const handleGetInitialParam = () => {
    hyExt.env
      .getInitialParam()
      .then((initialParam) => {
        setResult(
          `env.getInitialParam调用成功：${JSON.stringify(initialParam)}`
        );
        showSuccessTip();
      })
      .catch((err) => {
        setResult(`env.getInitialParam调用失败：${err.msg}`);
        showErrorTip();
      });
  };
  // 获取小程序参数
  const handleGetExtInfo = () => {
    hyExt.env
      .getExtInfo()
      .then((extInfo) => {
        setResult(`env.getExtInfo调用成功：${JSON.stringify(extInfo)}`);
        showSuccessTip();
      })
      .catch((err) => {
        setResult(`env.getExtInfo调用失败：${err.msg}`);
        showErrorTip();
      });
  };
  // 获取宿主信息
  const handleGetHostInfo = () => {
    hyExt.env
      .getHostInfo()
      .then((hostInfo) => {
        setResult(`env.getHostInfo调用成功：${JSON.stringify(hostInfo)}`);
        showSuccessTip();
      })
      .catch((err) => {
        setResult(`env.getHostInfo调用失败：${err.msg}`);
        showErrorTip();
      });
  };
  // 获取用户信息
  const handleGetUserInfo = () => {
    hyExt.context
      .getUserInfo()
      .then((userInfo) => {
        setResult(`context.getUserInfo调用成功：${JSON.stringify(userInfo)}`);
        showSuccessTip();
      })
      .catch((err) => {
        setResult(`context.getUserInfo调用失败：${err.msg}`);
        showErrorTip();
      });
  };
  // 获取直播间信息
  const handleGetLiveInfo = () => {
    hyExt.context
      .getLiveInfo()
      .then((liveInfo) => {
        setResult(`context.getLiveInfo调用成功：${JSON.stringify(liveInfo)}`);
        showSuccessTip();
      })
      .catch((err) => {
        setResult(`context.getLiveInfo调用失败：${err.msg}`);
        showErrorTip();
      });
  };
  // 获取主播信息
  const handleGetStreamerInfo = () => {
    hyExt.context
      .getStreamerInfo()
      .then((streamerInfo) => {
        setResult(
          `context.getStreamerInfo调用成功：${JSON.stringify(streamerInfo)}`
        );
        showSuccessTip();
      })
      .catch((err) => {
        setResult(`context.getStreamerInfo调用失败：${err.msg}`);
        showErrorTip();
      });
  };
  // 获取周贡榜信息
  const handleGetWeekRank = () => {
    hyExt.context
      .getWeekRank()
      .then((rankItemList) => {
        setResult(
          `context.getWeekRank调用成功：${JSON.stringify(rankItemList)}`
        );
        showSuccessTip();
      })
      .catch((err) => {
        setResult(`context.getWeekRank调用失败：${err.msg}`);
        showErrorTip();
      });
  };
  // 获取粉丝榜信息
  const handleGetFansRank = () => {
    hyExt.context
      .getFansRank()
      .then((rankInfo) => {
        setResult(`context.getFansRank调用成功：${JSON.stringify(rankInfo)}`);
        showSuccessTip();
      })
      .catch((err) => {
        setResult(`context.getFansRank调用失败：${err.msg}`);
        showErrorTip();
      });
  };
  // 获取贵宾数据信息
  const handleGetVip = () => {
    hyExt.context
      .getVip()
      .then((vipItem) => {
        setResult(`context.getVip调用成功：${JSON.stringify(vipItem)}`);
        showSuccessTip();
      })
      .catch((err) => {
        setResult(`context.getVip调用失败：${err.msg}`);
        showErrorTip();
      });
  };

  return (
    <View className="container">
      <ScrollView showsVerticalScrollIndicator="false">
        <View className="section">
          <Text className="title">env.getInitialParam</Text>
          <Button className="button" onPress={() => handleGetInitialParam()}>
            获取初始化参数
          </Button>
        </View>
        <View className="section">
          <Text className="title">env.getExtInfo</Text>
          <Button className="button" onPress={() => handleGetExtInfo()}>
            获取小程序参数
          </Button>
        </View>
        <View className="section" style={{ marginBottom: 20 }}>
          <Text className="title">env.getHostInfo</Text>
          <Button className="button" onPress={() => handleGetHostInfo()}>
            获取宿主信息
          </Button>
        </View>
        <View className="section">
          <Text className="title">context.getUserInfo</Text>
          <Button className="button" onPress={() => handleGetUserInfo()}>
            获取用户信息
          </Button>
        </View>
        <View className="section">
          <Text className="title">context.getLiveInfo</Text>
          <Button className="button" onPress={() => handleGetLiveInfo()}>
            获取直播间信息
          </Button>
        </View>
        <View className="section">
          <Text className="title">context.getStreamerInfo</Text>
          <Button className="button" onPress={() => handleGetStreamerInfo()}>
            获取主播信息
          </Button>
        </View>
        <View className="section">
          <Text className="title">context.getWeekRank</Text>
          <Button className="button" onPress={() => handleGetWeekRank()}>
            获取周贡榜信息
          </Button>
        </View>
        <View className="section">
          <Text className="title">context.getFansRank</Text>
          <Button className="button" onPress={() => handleGetFansRank()}>
            获取粉丝榜信息
          </Button>
        </View>
        <View className="section">
          <Text className="title">context.getVip</Text>
          <Button className="button" onPress={() => handleGetVip()}>
            获取贵宾数据信息
          </Button>
        </View>

        <View className="section-result">
          <Text className="title">调用结果</Text>
          <Text>{result}</Text>
        </View>
      </ScrollView>
    </View>
  );
};
