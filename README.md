## 虎牙小程序场景示例

本仓库为[虎牙开放平台场景文档](https://dev.huya.com/docs/miniapp/dev/scenario/)中的完整示例代码，按照功能模块的形式为大家介绍虎牙小程序具体能为主播和观众做什么事情，完整描述请移步[虎牙开放平台场景文档](https://dev.huya.com/docs/miniapp/dev/scenario/)。

### 程序功能

介绍小程序开发时涉及到的一些工具类或者交互类的操作，包括生命周期、入口控制、消息通道等

- [小程序入口控制](https://github.com/huya-ext/hyext-examples/tree/master/examples/streamer-control)：介绍如何通过主播端小程序或者小程序API控制观众端面板交互类型小程序的入口；

- [生命周期](https://github.com/huya-ext/hyext-examples/tree/master/examples/life-circle)：介绍如何监听虎牙小程序的生命周期；

- **小程序消息**：介绍如何使用小程序消息通道，在主播端小程序下发消息给观众端小程序以及 在观众端小程序反馈消息给主播端小程序；
  - [通过SDk通信的示例小程序](https://github.com/huya-ext/hyext-examples/tree/master/examples/observer-event-sdk-version)
  - [Express版本的业务服务器](https://github.com/huya-ext/hyext-examples/tree/master/examples/observer-event-api-version/express-server)
  - [通过API通信的示例小程序](https://github.com/huya-ext/hyext-examples/tree/master/examples/observer-event-api-version/observer-event-miniapp)

- **网络库**：介绍如何使用网络库向业务服务器发送请求，以及在业务服务器处理并转发接收到的请求；
  - [Express版本的业务服务器](https://github.com/huya-ext/hyext-examples/tree/master/examples/request/express-server)
  - [网络库示例小程序](https://github.com/huya-ext/hyext-examples/tree/master/examples/request/request-miniapp)

- [文本的秩序审核](https://github.com/huya-ext/hyext-examples/tree/master/examples/report-text)：介绍如何监听虎牙小程序的秩序审核，属于虎牙小程序内容规范的一部分；

- [KV存储](https://github.com/huya-ext/hyext-examples/tree/master/examples/kv-storage)：介绍虎牙小程序的KV存储，每个小程序都可以有自己的本地缓存；

- [文件处理](https://github.com/huya-ext/hyext-examples/tree/master/examples/fs)：介绍虎牙小程序的文件处理，实现对虎牙云托管对象存储的管理；

- **浮窗**：介绍小程序浮窗，如何使用小程序浮窗以及将已有的面板类型小程序改造成浮窗类型小程序；
  - [新建的浮窗示例小程序](https://github.com/huya-ext/hyext-examples/tree/master/examples/popup)
  - [改造前的看天气小程序](https://github.com/huya-ext/miniapp/tree/master/examples/weather-view)
  - [改造后的看天气浮窗小程序](https://github.com/huya-ext/miniapp/tree/master/examples/weather-view-popup-version)

- [本地小程序控制](https://github.com/huya-ext/hyext-examples/tree/master/examples/local-control)：介绍本地小程序控制，控制浮窗是否加载、面板是否可见以及面板入口是否可见。

- 小程序邀请：针对小程序平台上部分主播对抗类的小程序，平台提供了一套SDK接口，让开发者可方便的实现主播与主播之间的邀请功能。详情请移步至[小程序邀请（场景）](https://dev.huya.com/docs/miniapp/dev/scenario/invite/)。


### 宿主相关

介绍小程序业务如何获取当前的宿主信息和监听宿主消息，例如获取当前用户信息、直播间信息等

- [宿主信息](https://github.com/huya-ext/hyext-examples/tree/master/examples/host-info)：本章节介绍虎牙小程序的宿主信息，包含了环境信息和直播间信息。通常会根据真实业务需求在小程序中展示需要的宿主信息 和 作为基础信息来配合其他SDK的使用。



### 直播相关

介绍小程序结合直播业务的手段，例如订阅、礼物、弹幕和一些直播事件的监听等




### 内容生产

介绍小程序在主播端（PC客户端主播侧/虎牙助手APP）如何加工视频流

- [主播端白板](https://dev.huya.com/docs/miniapp/dev/scenario/wb/)：介绍如何创建和使用主播端白板，以及向观众端展示在主播端创建的白板信息。



### AI识别

介绍小程序在主播端（PC客户端主播侧/虎牙助手APP）的一些AI识别功能，例如人脸、手势、骨骼等




### 终端能力

介绍小程序在特定终端提供的能力，例如PC客户端支持的一些外部EXE能力等

- [外部EXE能力](https://dev.huya.com/docs/miniapp/dev/scenario/exe/)：介绍如何使用外部EXE能力。


### 生态相关

介绍小程序在生态上面的一些能力，包括主播付费、自定义上报数据等





### 视频相关

介绍小程序对直播间视频/播放器的一些操作能力，例如播放点播视频、获取直播流当前的帧信息等



