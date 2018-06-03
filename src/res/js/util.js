/**
 * 显示菜单
 */
function showMenu () {
  var prompt = require('@system.prompt');
  var router = require('@system.router');
  var appInfo = require('@system.app').getInfo()
  prompt.showContextMenu({
    itemList: ['保存桌面', '关于', '取消'],
    success: function (ret) {
      switch (ret.index) {
        case 0:
          // 保存桌面
          createShortcut();
          break;
        case 1:
          // 关于
          router.push({
            uri: '/About',
            params: { name: appInfo.name, icon: appInfo.icon }
          })
          break;
        case 2:
          // 取消
          break;
        default:
          prompt.showToast({ message: 'error' })
      }
    }
  })
}

/**
 * 创建桌面图标
 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
 */
function createShortcut () {
  var prompt = require('@system.prompt');
  var shortcut = require('@system.shortcut');
  shortcut.hasInstalled({
    success: function (ret) {
      if (ret) {
        prompt.showToast({ message: '已创建桌面图标' })
      } else {
        shortcut.install({
          success: function () {
            prompt.showToast({ message: '成功创建桌面图标' })
          },
          fail: function (errmsg, errcode) {
            prompt.showToast({ message: 'error: ' + errcode + '---' + errmsg })
          }
        })
      }
    }
  })
}

function convertTime (dateTimeStamp) {
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
}

export default {
  showMenu,
  createShortcut,
  convertTime,
}
