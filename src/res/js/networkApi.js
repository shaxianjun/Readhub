
//Promise最大的好处是在异步执行的流程中，把执行代码和处理结果的代码清晰地分离了：
//Promise还可以做更多的事情，比如，有若干个异步任务，需要先做任务1，如果成功后再做任务2，任何任务失败则不再继续并执行错误处理函数
//setTimeout可以看成一个模拟网络等异步执行的函数
//除了串行执行若干异步任务外，Promise还可以并行执行异步任务。
//试想一个页面聊天系统，我们需要从两个不同的URL分别获得用户的个人信息和好友列表，这两个任务是可以并行执行的，用Promise.all()实现
//有些时候，多个异步任务是为了容错。比如，同时向两个URL读取用户的个人信息，只需要获得先返回的结果即可。这种情况下，用Promise.race()实现


//获取json数据的测试
//https://readhub.me/ 无码科技官网
//https://api.readhub.me/topic  热门话题
//https://api.readhub.me/technews  开发者资讯
//https://api.readhub.me/blockchain  区块链
//https://api.readhub.me/news    科技动态
//https://github.com/BryantPang/ReadHub




import nativeFetch from '@system.fetch'

const fetchData = {
  /**
   * 网络请求
   * @param options
   * @return {Promise}
   */
  async fetch(options) {
    const p1 = new Promise((resolve, reject) => {
      options.success = function (data, code) {
        console.log(`shaxj_readhub  fetch success`)
        resolve({ data, code })
      }
      options.fail = function (data, code) {
        console.log(`shaxj_readhub  fetch fail`)
        resolve({ data, code })
      }
      options.url = "https://api.readhub.me/" + options.url
      console.log(`shaxj_readhub url:${options.url}`)
      nativeFetch.fetch(options)
    })
    return p1
  },
  convertTime(dateTimeStamp) {
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var halfamonth = day * 15;
    var month = day * 30;

    var now = new Date().getTime();
    var diffValue = now - dateTimeStamp;

    if (diffValue < 0) { return; }
    var monthC = diffValue / month;
    var weekC = diffValue / (7 * day);
    var dayC = diffValue / day;
    var hourC = diffValue / hour;
    var minC = diffValue / minute;

    var result;

    if (monthC >= 1) {
      result = "" + parseInt(monthC) + "月前";
    }
    else if (weekC >= 1) {
      result = "" + parseInt(weekC) + "周前";
    }
    else if (dayC >= 1) {
      result = "" + parseInt(dayC) + "天前";
    }
    else if (hourC >= 1) {
      result = "" + parseInt(hourC) + "小时前";
    }
    else if (minC >= 1) {
      result = "" + parseInt(minC) + "分钟前";
    } else
      result = "刚刚";
    return result;
  },
  async asyncLoadData(type, lastCursor) {
    var urlParam
    if (lastCursor == 0) {
      urlParam = `${type}?pageSize=10`
    } else {
      urlParam = `${type}?lastCursor=${lastCursor}&pageSize=10`
    }

    const ret1 = await this.fetch({
      url: urlParam,
    })
    var dataJson = JSON.parse(ret1.data.data).data

    var jsonStr = JSON.stringify(dataJson)

    //转换时间格式
    for (var i = 0; i < dataJson.length; i++) {
      var stamp = new Date(dataJson[i].publishDate).getTime();
      dataJson[i].timeStamp = stamp;//增加一个时间戳用于加载更多
      dataJson[i].publishDate = this.convertTime(stamp);//转换时间格式 用于显示人性化的时间， 比如‘几天前’
    }
    return dataJson
  },
}

export default {
  fetchData
}
