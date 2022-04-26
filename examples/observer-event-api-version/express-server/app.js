const express = require("express");
const cors = require("cors");
const app = express();
const request = require("request");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

// 跨域处理
app.use(cors());
// 解析body内的数据
app.use(bodyParser.json());

app.use("/", async (req, res, next) => {
  /**
   * 从小程序观众端获得请求信息
   * 需要对authorization进行解密
   */
  const authorization = req.headers.authorization;
  // appSecret【填入自己专属的appSecret】
  const appSecret = "xxxxxxxxxxxxxxxxxxx";

  // 解析观众端的请求信息
  let decodeData = jwt.verify(authorization, appSecret);
  // 需要请求的数据
  const { iat, exp, appId, extId, profileId, roomId } = decodeData;
  const { event, message } = req.body;
  res.send("请求成功！");

  /**
   * 生成签名Authorization
   * 格式：Header.Payload.Signature
   */
  // 1. header：调用jwt.sign()方法之后会编码成"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"字符串（可在jwt.io验证）
  const header = {
    // alg属性表示签名的算法，字符串类型，默认是HS256（HMACSHA256）
    alg: "HS256",
    // typ属性表示token的类型，字符串类型，统一为JWT
    typ: "JWT",
  };

  // 2.Payload：实际需要传递的数据
  const payload = {
    iat, // token生成时间戳（秒）
    exp, // 过期时间戳（秒）
    appId, // 小程序开发者appid
    extId, // 小程序uuid
  };

  // 3. Signature(同上appSecret)【填入自己专属的appSecret】
  const signature = appSecret;

  // 4. 生成签名
  const Authorization = jwt.sign(header + "." + payload, signature);

  console.log("==============打印数据===============");
  console.log("req.body：", req.body);
  console.log("请求头解码后数据为：", decodeData);
  console.log("打印生成的数字签名：", Authorization);

  /**
   * 发送请求
   */
  await request(
    {
      url: `https://apiext.huya.com/message/deliverByProfileId?appId=${appId}&extId=${extId}`,
      method: "POST",
      headers: { Authorization },
      json: true,
      body: {
        profileId,
        roomId,
        event,
        message,
      },
    },
     (error, response, body) => {
      if (!error && response.statusCode == 200) {
        res.send("广播成功！");
      }
    }
  );
});

// 监听端口、启动程序
app.listen(3001, (err) => {
  if (err) throw err;
  console.log("http://localhost:3001");
  console.log("启动成功！");
});
