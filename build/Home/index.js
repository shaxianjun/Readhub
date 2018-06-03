(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	__webpack_require__(12)
	__webpack_require__(15)
	__webpack_require__(18)
	var $app_template$ = __webpack_require__(22)
	var $app_style$ = __webpack_require__(23)
	var $app_script$ = __webpack_require__(24)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2)
	__webpack_require__(6)
	var $app_template$ = __webpack_require__(10)
	var $app_script$ = __webpack_require__(11)
	
	$app_define$('@app-component/topic', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	})


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(3)
	var $app_style$ = __webpack_require__(4)
	var $app_script$ = __webpack_require__(5)
	
	$app_define$('@app-component/common-view', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "list",
	  "attr": {},
	  "classList": [
	    "list_view"
	  ],
	  "children": [
	    {
	      "type": "block",
	      "attr": {},
	      "repeat": {
	        "exp": function () {return this.dataList},
	        "key": "index",
	        "value": "item"
	      },
	      "children": [
	        {
	          "type": "list-item",
	          "attr": {
	            "type": "product"
	          },
	          "classList": [
	            "list_content_item"
	          ],
	          "events": {
	            "click": function (evt) {this.goWebView(this.item,evt)}
	          },
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "content_wrap"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.item.title}
	                  },
	                  "classList": [
	                    "name"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.item.summary}
	                  },
	                  "classList": [
	                    "summary"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "site-date"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.item.siteName}
	                      },
	                      "classList": [
	                        "siteName"
	                      ],
	                      "shown": function () {return this.item.siteName}
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.item.publishDate}
	                      },
	                      "classList": [
	                        "publishDate"
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "divider"
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "list-item",
	          "attr": {
	            "type": "load_more"
	          },
	          "classList": [
	            "bottom_load_more"
	          ],
	          "shown": function () {return this.index==(this.dataList.length-1)},
	          "children": [
	            {
	              "type": "progress",
	              "attr": {
	                "type": "circular"
	              }
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": "加载更多"
	              },
	              "classList": [
	                "load_more_text"
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
	  ".list_view": {
	    "flexDirection": "column",
	    "alignItems": "center",
	    "paddingLeft": "20px",
	    "paddingRight": "20px",
	    "columns": 1
	  },
	  ".list_content_item": {
	    "paddingTop": "20px"
	  },
	  ".content_wrap": {
	    "width": "100%",
	    "flexDirection": "column"
	  },
	  ".name": {
	    "width": "100%",
	    "lines": 2,
	    "marginBottom": "10px",
	    "fontSize": "36px",
	    "color": "rgb(0,0,0)",
	    "flexDirection": "column"
	  },
	  ".summary": {
	    "lines": 3,
	    "fontSize": "30px",
	    "textOverflow": "ellipsis",
	    "marginBottom": "15px",
	    "color": "rgb(115,115,115)"
	  },
	  ".siteName": {
	    "fontSize": "18px",
	    "marginBottom": "10px",
	    "marginRight": "30px",
	    "color": "rgb(153,153,153)"
	  },
	  ".publishDate": {
	    "fontSize": "18px",
	    "marginBottom": "10px",
	    "marginRight": "30px",
	    "color": "rgb(153,153,153)"
	  },
	  ".divider": {
	    "width": "100%",
	    "height": "1.5px",
	    "backgroundColor": "rgb(230,230,230)"
	  },
	  ".text-name": {
	    "fontSize": "45px"
	  },
	  ".site-date": {
	    "width": "100%",
	    "flexDirection": "row",
	    "marginBottom": "5px"
	  },
	  ".bottom_load_more": {
	    "justifyContent": "center",
	    "marginBottom": "20px",
	    "marginTop": "20px"
	  },
	  ".load_more_text": {
	    "marginLeft": "20px"
	  }
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['dataList', 'contentType'],
	  goWebView: function goWebView(item) {
	    console.log('shaxj_readhub contentType=' + this.contentType);
	
	    if (this.contentType == "topic") {
	      if (item.newsArray.length > 0) {
	        var firstData = item.newsArray[0];
	        console.log('shaxj_readhub url=' + firstData.mobileUrl);
	
	        this.$app.$def.router.push({
	          uri: '/WebView',
	          params: {
	            title: firstData.title,
	            url: firstData.mobileUrl
	          }
	        });
	      }
	    } else {
	      this.$app.$def.webview.loadUrl({
	        url: item.mobileUrl
	      });
	    }
	  }
	};}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(7)
	var $app_style$ = __webpack_require__(8)
	var $app_script$ = __webpack_require__(9)
	
	$app_define$('@app-component/loading', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {
	    "show": function () {return this.loadingShow}
	  },
	  "style": {
	    "width": "100%",
	    "height": "100%",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "flexDirection": "column"
	  },
	  "children": [
	    {
	      "type": "image",
	      "attr": {
	        "src": function () {return this.loadingImage}
	      },
	      "classList": [
	        "loading"
	      ]
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return this.getLoadingText()}
	      },
	      "style": {
	        "marginTop": "20px",
	        "color": "rgb(153,153,153)",
	        "fontSize": "30px"
	      }
	    }
	  ]
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  ".loading": {
	    "width": "100px",
	    "height": "100px",
	    "animationName": "loading",
	    "animationDuration": "2000ms",
	    "animationIterationCount": -1
	  },
	  "@KEYFRAMES": {
	    "loading": [
	      {
	        "transform": "{\"rotate\":\"0deg\"}",
	        "time": 0
	      },
	      {
	        "transform": "{\"rotate\":\"360deg\"}",
	        "time": 100
	      }
	    ]
	  }
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    props: ['loadingText', 'loadingImage', 'loadingShow'],
	    data: {},
	    getLoadingText: function getLoadingText() {
	        return this.loadingText + '  \u52A0\u8F7D\u4E2D...';
	    }
	};}

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "stack",
	  "attr": {},
	  "style": {
	    "width": "100%"
	  },
	  "children": [
	    {
	      "type": "refresh",
	      "attr": {
	        "refreshing": function () {return this.isLoadingNewData}
	      },
	      "events": {
	        "refresh": "pageRefresh"
	      },
	      "children": [
	        {
	          "type": "common-view",
	          "attr": {
	            "dataList": function () {return this.dataList},
	            "contentType": function () {return this.contentType}
	          },
	          "events": {
	            "scrollbottom": "listScrollBottom"
	          }
	        }
	      ]
	    },
	    {
	      "type": "loading",
	      "attr": {
	        "loadingText": function () {return this.tabName},
	        "loadingImage": "../res/image/loading.png",
	        "loadingShow": function () {return !this.isFirstLoadComplete}
	      }
	    }
	  ]
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	exports.default = {
	  props: ['tabName', 'contentType'],
	  data: {
	    isLoadingNewData: false,
	    isLoadingData: false,
	    isFirstLoadComplete: false,
	    dataList: [],
	    lastTimeStamp: 0
	  },
	  onInit: function onInit() {
	    this.asyncLoadData(0);
	  },
	  asyncLoadData: function () {
	    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(lastCursor) {
	      var fetchData, resList;
	      return regeneratorRuntime.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              this.isLoadingData = true;
	              fetchData = this.$app.$def.fetchData;
	              _context.next = 4;
	              return fetchData.asyncLoadData(this.contentType, lastCursor);
	
	            case 4:
	              resList = _context.sent;
	
	              this.renderList(resList, lastCursor);
	              this.isLoadingData = false;
	              this.isLoadingNewData = false;
	              this.isFirstLoadComplete = true;
	
	            case 9:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, this);
	    }));
	
	    function asyncLoadData(_x) {
	      return _ref.apply(this, arguments);
	    }
	
	    return asyncLoadData;
	  }(),
	  renderList: function renderList(resList, lastCursor) {
	    if (!resList || !resList.length) {
	      console.log('shaxj_readhub data fail.');
	    } else {
	      if (lastCursor == 0) {
	        this.dataList.splice(0, this.dataList.length);
	      }
	      this.dataList = this.dataList.concat(resList);
	      this.lastTimeStamp = this.dataList[this.dataList.length - 1].order;
	    }
	  },
	
	  listScrollBottom: function listScrollBottom() {
	    if (!this.isLoadingData) {
	      this.asyncLoadData(this.lastTimeStamp);
	    }
	  },
	
	  pageRefresh: function pageRefresh() {
	    if (!this.isLoadingData) {
	      this.isLoadingNewData = true;
	      this.asyncLoadData(0);
	    }
	  }
	};}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2)
	__webpack_require__(6)
	var $app_template$ = __webpack_require__(13)
	var $app_script$ = __webpack_require__(14)
	
	$app_define$('@app-component/tech', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	})


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "stack",
	  "attr": {},
	  "style": {
	    "width": "100%"
	  },
	  "children": [
	    {
	      "type": "refresh",
	      "attr": {
	        "refreshing": function () {return this.isLoadingNewData}
	      },
	      "events": {
	        "refresh": "pageRefresh"
	      },
	      "children": [
	        {
	          "type": "common-view",
	          "attr": {
	            "dataList": function () {return this.dataList},
	            "contentType": function () {return this.contentType}
	          },
	          "events": {
	            "scrollbottom": "listScrollBottom"
	          }
	        }
	      ]
	    },
	    {
	      "type": "loading",
	      "attr": {
	        "loadingText": function () {return this.tabName},
	        "loadingImage": "../res/image/loading.png",
	        "loadingShow": function () {return !this.isFirstLoadComplete}
	      }
	    }
	  ]
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	exports.default = {
	  props: ['tabName', 'contentType'],
	  data: {
	    isLoadingNewData: false,
	    isLoadingData: false,
	    isFirstLoadComplete: false,
	    dataList: [],
	    lastTimeStamp: 0
	  },
	  onInit: function onInit() {
	    this.asyncLoadData(0);
	  },
	  asyncLoadData: function () {
	    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(lastCursor) {
	      var fetchData, resList;
	      return regeneratorRuntime.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              this.isLoadingData = true;
	              fetchData = this.$app.$def.fetchData;
	              _context.next = 4;
	              return fetchData.asyncLoadData(this.contentType, lastCursor);
	
	            case 4:
	              resList = _context.sent;
	
	              this.renderList(resList, lastCursor);
	              this.isLoadingData = false;
	              this.isLoadingNewData = false;
	              this.isFirstLoadComplete = true;
	
	            case 9:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, this);
	    }));
	
	    function asyncLoadData(_x) {
	      return _ref.apply(this, arguments);
	    }
	
	    return asyncLoadData;
	  }(),
	  renderList: function renderList(resList, lastCursor) {
	    if (!resList || !resList.length) {
	      console.log('shaxj_readhub data fail.');
	    } else {
	      if (lastCursor == 0) {
	        this.dataList.splice(0, this.dataList.length);
	      }
	      this.dataList = this.dataList.concat(resList);
	      this.lastTimeStamp = this.dataList[this.dataList.length - 1].timeStamp;
	    }
	  },
	
	  listScrollBottom: function listScrollBottom() {
	    if (!this.isLoadingData) {
	      this.asyncLoadData(this.lastTimeStamp);
	    }
	  },
	
	  pageRefresh: function pageRefresh() {
	    if (!this.isLoadingData) {
	      this.isLoadingNewData = true;
	      this.asyncLoadData(0);
	    }
	  }
	};}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2)
	__webpack_require__(6)
	var $app_template$ = __webpack_require__(16)
	var $app_script$ = __webpack_require__(17)
	
	$app_define$('@app-component/blockchain', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	})


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "stack",
	  "attr": {},
	  "style": {
	    "width": "100%"
	  },
	  "children": [
	    {
	      "type": "refresh",
	      "attr": {
	        "refreshing": function () {return this.isLoadingNewData}
	      },
	      "events": {
	        "refresh": "pageRefresh"
	      },
	      "children": [
	        {
	          "type": "common-view",
	          "attr": {
	            "dataList": function () {return this.dataList},
	            "contentType": function () {return this.contentType}
	          },
	          "events": {
	            "scrollbottom": "listScrollBottom"
	          }
	        }
	      ]
	    },
	    {
	      "type": "loading",
	      "attr": {
	        "loadingText": function () {return this.tabName},
	        "loadingImage": "../res/image/loading.png",
	        "loadingShow": function () {return !this.isFirstLoadComplete}
	      }
	    }
	  ]
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	exports.default = {
	  props: ['tabName'],
	  data: {
	    isLoadingNewData: false,
	    isLoadingData: false,
	    isFirstLoadComplete: false,
	    dataList: [],
	    lastTimeStamp: 0
	  },
	  onInit: function onInit() {
	    this.asyncLoadData(0);
	  },
	  asyncLoadData: function () {
	    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(lastCursor) {
	      var fetchData, resList;
	      return regeneratorRuntime.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              this.isLoadingData = true;
	              fetchData = this.$app.$def.fetchData;
	              _context.next = 4;
	              return fetchData.asyncLoadData("blockchain", lastCursor);
	
	            case 4:
	              resList = _context.sent;
	
	              this.renderList(resList, lastCursor);
	              this.isLoadingData = false;
	              this.isLoadingNewData = false;
	              this.isFirstLoadComplete = true;
	
	            case 9:
	            case "end":
	              return _context.stop();
	          }
	        }
	      }, _callee, this);
	    }));
	
	    function asyncLoadData(_x) {
	      return _ref.apply(this, arguments);
	    }
	
	    return asyncLoadData;
	  }(),
	  renderList: function renderList(resList, lastCursor) {
	    if (!resList || !resList.length) {
	      console.log("shaxj_readhub data fail.");
	    } else {
	      if (lastCursor == 0) {
	        this.dataList.splice(0, this.dataList.length);
	      }
	      this.dataList = this.dataList.concat(resList);
	      this.lastTimeStamp = this.dataList[this.dataList.length - 1].timeStamp;
	    }
	  },
	
	  listScrollBottom: function listScrollBottom() {
	    if (!this.isLoadingData) {
	      this.asyncLoadData(this.lastTimeStamp);
	    }
	  },
	
	  pageRefresh: function pageRefresh() {
	    if (!this.isLoadingData) {
	      this.isLoadingNewData = true;
	      this.asyncLoadData(0);
	    }
	  }
	};}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(19)
	var $app_style$ = __webpack_require__(20)
	var $app_script$ = __webpack_require__(21)
	
	$app_define$('@app-component/about', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "demo-page"
	  ],
	  "children": [
	    {
	      "type": "image",
	      "attr": {
	        "id": "icon",
	        "src": function () {return this.icon}
	      },
	      "id": "icon"
	    },
	    {
	      "type": "text",
	      "attr": {
	        "id": "name",
	        "value": function () {return this.name}
	      },
	      "id": "name"
	    },
	    {
	      "type": "text",
	      "attr": {
	        "id": "desc",
	        "value": function () {return this.desc}
	      },
	      "id": "desc"
	    },
	    {
	      "type": "text",
	      "attr": {
	        "id": "main_page"
	      },
	      "id": "main_page",
	      "children": [
	        {
	          "type": "span",
	          "attr": {
	            "value": "Readhub: "
	          }
	        },
	        {
	          "type": "a",
	          "attr": {
	            "href": "https://readhub.me",
	            "value": "https://readhub.me"
	          }
	        }
	      ]
	    },
	    {
	      "type": "text",
	      "attr": {
	        "id": "dev_email"
	      },
	      "id": "dev_email",
	      "children": [
	        {
	          "type": "span",
	          "attr": {
	            "value": "开发者邮箱: "
	          }
	        },
	        {
	          "type": "a",
	          "attr": {
	            "href": "shaxianjunstu@163.com",
	            "value": "shaxianjunstu@163.com"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {
	        "id": "tags"
	      },
	      "id": "tags",
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "快应用"
	          },
	          "classList": [
	            "tag"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "|"
	          },
	          "classList": [
	            "gap"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "无安装"
	          },
	          "classList": [
	            "tag"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "|"
	          },
	          "classList": [
	            "gap"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "体积小"
	          },
	          "classList": [
	            "tag"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "|"
	          },
	          "classList": [
	            "gap"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "一步直达"
	          },
	          "classList": [
	            "tag"
	          ]
	        }
	      ]
	    },
	    {
	      "type": "input",
	      "attr": {
	        "type": "button",
	        "value": "创建快捷方式"
	      },
	      "classList": [
	        "btn"
	      ],
	      "events": {
	        "click": "createShortcut"
	      }
	    }
	  ]
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = {
	  ".demo-page": {
	    "flexDirection": "column",
	    "alignItems": "center"
	  },
	  "#icon": {
	    "marginTop": "90px",
	    "width": "150px",
	    "height": "150px"
	  },
	  "#name": {
	    "marginTop": "20px",
	    "fontSize": "36px",
	    "color": "#000000"
	  },
	  "#tags": {
	    "width": "100%",
	    "alignItems": "center",
	    "marginTop": "200px"
	  },
	  ".tag": {
	    "paddingLeft": "50px",
	    "paddingRight": "35px",
	    "fontSize": "28px",
	    "color": "#2a9700"
	  },
	  ".gap": {
	    "fontSize": "22px",
	    "color": "#b2b2b2"
	  },
	  "#desc": {
	    "width": "95%",
	    "marginLeft": "25px",
	    "marginRight": "25px",
	    "marginTop": "40px",
	    "fontSize": "40px",
	    "color": "#8d8d8d"
	  },
	  "#main_page": {
	    "width": "95%",
	    "marginLeft": "25px",
	    "marginRight": "25px",
	    "marginTop": "40px",
	    "fontSize": "40px",
	    "color": "#8d8d8d"
	  },
	  "#dev_email": {
	    "width": "95%",
	    "marginLeft": "25px",
	    "marginRight": "25px",
	    "marginTop": "40px",
	    "fontSize": "40px",
	    "color": "#8d8d8d"
	  },
	  "a": {
	    "color": "#0269c8"
	  },
	  ".btn": {
	    "width": "550px",
	    "height": "86px",
	    "marginTop": "75px",
	    "borderRadius": "43px",
	    "backgroundColor": "#09ba07",
	    "fontSize": "30px",
	    "color": "#ffffff"
	  }
	}

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: {
	    desc: '该应用仅为个人兴趣所开发的 Readhub 第三方客户端，非无码科技官方产品。应用内所有资讯内容均来自无码科技产品 Readhub',
	    icon: '/image/logo.png',
	    name: 'Readhub'
	  },
	  onInit: function onInit() {},
	  createShortcut: function createShortcut() {
	    this.$app.createShortcut();
	  }
	};}

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {
	    "id": "home"
	  },
	  "id": "home",
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "flexible-tabs"
	      ],
	      "children": [
	        {
	          "type": "tabs",
	          "attr": {
	            "index": function () {return this.currentIndex}
	          },
	          "events": {
	            "change": "changeTabactive"
	          },
	          "children": [
	            {
	              "type": "tab-content",
	              "attr": {},
	              "classList": [
	                "flexible-tab-content"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "tab-content-section"
	                  ],
	                  "children": [
	                    {
	                      "type": "topic",
	                      "attr": {
	                        "currentIndex": function () {return this.currentIndex},
	                        "show": "currentIndex===0",
	                        "tabName": function () {return this.tabList[0].name},
	                        "contentType": function () {return this.tabList[0].contentType}
	                      },
	                      "shown": function () {return this.renderTabContent(0)}
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "tab-content-section"
	                  ],
	                  "children": [
	                    {
	                      "type": "tech",
	                      "attr": {
	                        "currentIndex": function () {return this.currentIndex},
	                        "show": "currentIndex===1",
	                        "tabName": function () {return this.tabList[1].name},
	                        "contentType": function () {return this.tabList[1].contentType}
	                      },
	                      "shown": function () {return this.renderTabContent(1)}
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "tab-content-section"
	                  ],
	                  "children": [
	                    {
	                      "type": "blockchain",
	                      "attr": {
	                        "currentIndex": function () {return this.currentIndex},
	                        "show": "currentIndex===2",
	                        "tabName": function () {return this.tabList[2].name},
	                        "contentType": function () {return this.tabList[2].contentType}
	                      },
	                      "shown": function () {return this.renderTabContent(2)}
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "tab-content-section"
	                  ],
	                  "children": [
	                    {
	                      "type": "about",
	                      "attr": {
	                        "currentIndex": function () {return this.currentIndex},
	                        "show": "currentIndex===3",
	                        "tabName": function () {return this.tabList[3].name},
	                        "contentType": function () {return this.tabList[3].contentType}
	                      },
	                      "shown": function () {return this.renderTabContent(3)}
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "tab-bar",
	              "attr": {},
	              "classList": [
	                "flexible-tabbar"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "tab-item"
	                  ],
	                  "repeat": {
	                    "exp": function () {return this.tabList},
	                    "key": "index",
	                    "value": "item"
	                  },
	                  "events": {
	                    "click": function (evt) {this.clickTabBar(this.index,evt)}
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "attr": {
	                        "src": function () {return (this.index==this.currentIndex)?this.item.icon_selected:this.item.icon}
	                      },
	                      "classList": [
	                        "tab-icon"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.item.name}
	                      },
	                      "classList": function () {return [(this.index==this.currentIndex)?'selected':'normal']}
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = {
	  "#home": {
	    "fontSize": "16px"
	  },
	  "#home .flexible-tabs": {
	    "display": "flex",
	    "flexDirection": "column",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "id",
	          "i": false,
	          "a": "equals",
	          "v": "home"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tabs"
	        }
	      ]
	    }
	  },
	  "#home .flexible-tabbar": {
	    "display": "flex",
	    "borderTopWidth": "1px",
	    "borderTopColor": "#eeeeee",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "id",
	          "i": false,
	          "a": "equals",
	          "v": "home"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tabbar"
	        }
	      ]
	    }
	  },
	  "#home .tab-item": {
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "id",
	          "i": false,
	          "a": "equals",
	          "v": "home"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tab-item"
	        }
	      ]
	    }
	  },
	  "#home .tab-icon": {
	    "width": "50px",
	    "height": "50px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "id",
	          "i": false,
	          "a": "equals",
	          "v": "home"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tab-icon"
	        }
	      ]
	    }
	  },
	  "#home tab-bar": {
	    "height": "120px",
	    "borderTopColor": "#dbdbdb",
	    "borderTopWidth": "1px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "id",
	          "i": false,
	          "a": "equals",
	          "v": "home"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "tab-bar"
	        }
	      ]
	    }
	  },
	  "#home .normal": {
	    "color": "#aaacb3",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "id",
	          "i": false,
	          "a": "equals",
	          "v": "home"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "normal"
	        }
	      ]
	    }
	  },
	  "#home .selected": {
	    "color": "#657c89",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "id",
	          "i": false,
	          "a": "equals",
	          "v": "home"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "selected"
	        }
	      ]
	    }
	  }
	}

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = {
	  data: {
	    tabList: [{
	      name: '热门话题',
	      icon: '/res/image/ic_topic.png',
	      icon_selected: '/res/image/ic_topic_selected.png',
	      contentType: 'topic'
	    }, {
	      name: '科技动态',
	      icon: '/res/image/ic_tech.png',
	      icon_selected: '/res/image/ic_tech_selected.png',
	      contentType: 'news'
	    }, {
	      name: '区块链快讯',
	      icon: '/res/image/ic_block_chain.png',
	      icon_selected: '/res/image/ic_block_chain_selected.png',
	      contentType: 'blockchain'
	    }, {
	      name: '关于',
	      icon: '/res/image/ic_about.png',
	      icon_selected: '/res/image/ic_about_selected.png',
	      contentType: 'about'
	    }],
	    currentIndex: 0
	  },
	  onInit: function onInit() {
	    this.changeTabIndex(0);
	  },
	  onReady: function onReady() {},
	  onShow: function onShow() {},
	  changeTabIndex: function changeTabIndex(index) {
	    var item = Object.assign({}, this.tabList[index]);
	    item.render = true;
	    this.tabList.splice(index, 1, item);
	  },
	  changeTabactive: function changeTabactive(evt) {
	    this.currentIndex = evt.index;
	    this.changeTabIndex(evt.index);
	  },
	  renderTabContent: function renderTabContent(index) {
	    return !!this.tabList[index].render;
	  },
	  clickTabBar: function clickTabBar(index) {
	    this.currentIndex = index;
	  }
	};
	
	
	var moduleOwn = exports.default || module.exports;
	var accessors = ['public', 'protected', 'private'];
	
	if (moduleOwn.data && accessors.some(function (acc) {
	  return moduleOwn[acc];
	})) {
	  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
	} else if (!moduleOwn.data) {
	  moduleOwn.data = {};
	  moduleOwn._descriptor = {};
	  accessors.forEach(function (acc) {
	    var accType = _typeof(moduleOwn[acc]);
	    if (accType === 'object') {
	      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
	      for (var name in moduleOwn[acc]) {
	        moduleOwn._descriptor[name] = { access: acc };
	      }
	    } else if (accType === 'function') {
	      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
	    }
	  });
	}}

/***/ }
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map