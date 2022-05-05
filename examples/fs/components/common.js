import React, { useState } from "react";
import { UI } from "@hyext/hy-ui";
import "./common.hycss";
const { View, Text, Button, Image } = UI;

export const Example = () => {
  const [result, setResult] = useState("暂无数据");
  const [resultUrl, setResultUrl] = useState("");

  // 上传图片
  const handleUploadImg = () => {
    hyExt.fs
      .uploadImg()
      .then((imgInfo) => {
        const url = imgInfo.url;
        setResult(`hyExt.fs.uploadImg调用成功:${url}`);
        setResultUrl(url);
      })
      .catch((err) => {
        setResult(`hyExt.fs.uploadImg调用失败:${err?.msg}`);
      });
  };
  // 通用上传文件接口
  const handleUploadFile = () => {
    hyExt.fs
      .uploadFile()
      .then((imgInfo) => {
        const url = imgInfo.url;
        setResultUrl(url);
        setResult(`hyExt.fs.uploadFile调用成功:${url}`);
      })
      .catch((err) => {
        setResult(`hyExt.fs.uploadFile失败:${err?.msg}`);
      });
  };
  // 批量下载资源
  const handleDownloadBatchRes = () => {
    hyExt.fs
      .downloadBatchRes([
        {
          url: "http://t11834349a5461b9-gxrzxdvz.test.hyext.com/extImg/0b6cd7a1b9/edbb5e316927215b.png",
          md5: "edbb5e316927215b96069f639c83f417",
          unzip: false,
        },
      ])
      .then(() => {
        setResult("hyExt.fs.downloadBatchRes调用成功");
      })
      .catch((err) => {
        setResult(`hyExt.fs.downloadBatchRes:${err?.msg}`);
      });
  };
  // 判断本地资源是否存在
  const handleIsResExists = () => {
    hyExt.fs
      .isResExists({
        md5: "edbb5e316927215b96069f639c83f417",
        fileName: "edbb5e316927215b.png",
      })
      .then((resp) => {
        setResult(`hyExt.fs.isResExists调用成功:${resp?.isExists}`);
      })
      .catch((err) => {
        setResult(`hyExt.fs.isResExists调用失败:${err?.msg}`);
      });
  };
  // 删除本地文件资源
  const handleRemoveRes = () => {
    hyExt.fs
      .removeRes({
        md5: "edbb5e316927215b96069f639c83f417",
        unzip: false,
      })
      .then(() => {
        setResult("hyExt.fs.removeRes调用成功");
      })
      .catch((err) => {
        setResult(`hyExt.fs.removeRes调用失败:${err?.msg}`);
      });
  };

  return (
    <View className="container">
      <View className="section">
        <Text className="title">fs.uploadImg</Text>
        <Button className="button" onPress={() => handleUploadImg()}>
          调用
        </Button>
      </View>
      <View className="section">
        <Text className="title">fs.uploadFile</Text>
        <Button className="button" onPress={() => handleUploadFile()}>
          调用
        </Button>
      </View>
      <View className="section">
        <Text className="title">fs.downloadBatchRes</Text>
        <Button className="button" onPress={() => handleDownloadBatchRes()}>
          调用
        </Button>
      </View>
      <View className="section">
        <Text className="title">fs.isResExists</Text>
        <Button className="button" onPress={() => handleIsResExists()}>
          调用
        </Button>
      </View>
      <View className="section">
        <Text className="title">fs.removeRes</Text>
        <Button className="button" onPress={() => handleRemoveRes()}>
          调用
        </Button>
      </View>
      <View className="section">
        <Text className="title">调用结果</Text>
        <Text>{result}</Text>
      </View>
      <View className="section">
        {resultUrl ? <Image src={resultUrl} className="image" /> : null}
      </View>
    </View>
  );
};
