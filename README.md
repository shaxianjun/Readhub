快应用出来有一段时间了，能够让9大手机厂商联盟创立的新生态，自然要去学习学习啦
大约两周时间开发了一个新闻阅读应用，感觉还算流畅。其实我更看重它的原生能力。
作为用户，能以最快最方便的方式给我提供需要的稳定服务就可以了。
也许快应用技术是真正可以实现用完即走的优秀体验，就看各大厂家的重视程度了。


# ReadHub-每天三分钟的科技新闻聚合阅读
该应用仅为个人兴趣所开发的 Readhub 第三方客户端，非无码科技官方产品。

### 1.应用预览
![](https://github.com/shaxianjun/Readhub/blob/master/file/video_to_gif.gif)


### 2.搭建环境

##### 第一步  clone源码

git clone https://github.com/shaxianjun/Readhub.git

##### 第二步  开始编译

npm run build

运行结果是
![](https://github.com/shaxianjun/Readhub/blob/master/file/npm-run-build-result.png)
表示编译通过

##### 第三步  终端生成二维码

npm run server
运行结果如下
![](https://github.com/shaxianjun/Readhub/blob/master/file/npm-run-server-result.png)

由于这里二维码无法扫描安装，具体原因未知，只能继续第四步

##### 第四步 通过浏览器生成二维码

输入http://localhost:12306/ 回车

![](https://github.com/shaxianjun/Readhub/blob/master/file/scan.png)


##### 第五步 使用手机的中安装的【快应用调试器】扫码安装

![](https://github.com/shaxianjun/Readhub/blob/master/file/debuger_app.jpg)


### 3.源码介绍

```
|____Home                     
| |____about/index.ux         关于Tab
| |____topic/index.ux         热门话题Tab 
| |____blockchain/index.ux    区块链Tab
| |____tech/index.ux          科技动态Tab
| |____common.ux              内容三个Tab的公共UI部分
| |____loading.ux             内容三个Tab的公共加载部分
| |____index.ux               首页

|____WebView                  
| |____index.ux               显示新闻详情

|____res
| |____css
| | |____common.css           css文件
| |____js
| | |____util.js              工具方法
| | |____regenerator.js       注入babel-runtime/regenerator，支持async
| | |____networkApi.js        网络配置
| |____image                  所有图片资源
|____app.ux                   APP文件（用于包括公用资源）
|____manifest.json            项目配置文件（如：应用描述、接口申明、页面路由等）

```


