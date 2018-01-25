// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped, ModuleConfig) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(ModuleConfig);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({23:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 1. 准备画布背景
 *  0. 清空画布
 *  1. 获取画布大小
 *  2. 获取背景
 * 2. 绘制文字(坐标,css,文字)
 *  0. 获取文字
 *  1. 获取css
 *  2. 获取坐标
 *  3. 绘制
 *  4. 绘制干扰字符
 *  -------
 * 3. 判断用户操作
 *  0. 判断点击数量
 *  1. 判断点击位置
 * 4. 用户操作
 *  0. 添加标识
 *  1. 刷新验证码
 *
 *  防止坐标重复的方法
 *    0. 先提取一个有所有坐标的数组 (X)
 *    1. 随机,迭代与抽取出的坐标比较 (*)
 **/
var DrawCode = function () {
  function DrawCode() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$selector = _ref.selector,
        selector = _ref$selector === undefined ? 'yzm-canvas' : _ref$selector,
        _ref$imgURL = _ref.imgURL,
        imgURL = _ref$imgURL === undefined ? require('../images/17.jpg') : _ref$imgURL,
        _ref$text = _ref.text,
        text = _ref$text === undefined ? ['负荆请罪', '清醉'] : _ref$text,
        _ref$prob = _ref.prob,
        prob = _ref$prob === undefined ? '0.85' : _ref$prob,
        _ref$scope = _ref.scope,
        scope = _ref$scope === undefined ? '72' : _ref$scope,
        _ref$style = _ref.style,
        style = _ref$style === undefined ? {
      width: '280px',
      height: '200px',
      font: 'oblique small-caps bold 72px Arial',
      color: 'white'
    } : _ref$style;

    _classCallCheck(this, DrawCode);

    this.ctx = document.getElementById(selector).getContext('2d');
    this.imgURL = imgURL;
    this.text = [].concat(_toConsumableArray(text[0]));
    this.mix = [].concat(_toConsumableArray(text[1]));
    this.prob = prob;
    this.width = parseInt(style.width) * 2;
    this.height = parseInt(style.height) * 2;
    this.font = style.font;
    this.color = style.color;
    this.fontData = [];
    this.scope = parseInt(scope);
  }

  _createClass(DrawCode, [{
    key: "getRanXY",
    value: function getRanXY() {
      var _this = this;

      var x = parseInt(Math.random() * (this.width - this.scope));
      var y = parseInt(Math.random() * (this.height - this.scope));
      var flag = this.fontData.some(function (value) {
        var booleanX = value.x <= x && x <= parseInt(value.x) + _this.scope;
        var booleanY = value.y <= y && y <= parseInt(value.y) + _this.scope;
        return booleanX || booleanY;
      });
      if (flag) {
        return this.getRanXY();
      } else {
        return { x: x, y: y };
      }
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      var img = new Image();
      img.onload = function () {
        _this2.ctx.drawImage(img, 0, 0, _this2.width, _this2.height);
        _this2.ctx.font = _this2.font;
        _this2.ctx.fillStyle = _this2.color;
        _this2.ctx.textAlign = 'start';
        _this2.ctx.textBaseline = 'top';
        for (var i in _this2.text) {
          var tempXY = _this2.getRanXY();
          _this2.ctx.fillText(_this2.text[i], tempXY.x, tempXY.y);
          _this2.fontData.push(tempXY);
        }
        if (Math.random() > _this2.prob) {
          var _tempXY = _this2.getRanXY();
          _this2.ctx.fillText(_this2.mix[parseInt(Math.random() * _this2.mix.length)], _tempXY.x, _tempXY.y);
        }
      };
      img.src = this.imgURL;
    }
  }]);

  return DrawCode;
}();

exports.default = DrawCode;
},{"../images/17.jpg":21}],16:[function(require,module,exports) {
"use strict";

var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("@charset \"UTF-8\";\n/* click-box */\n/* line 143, stdin */\n.yzm-img .card {\n  width: 50px;\n  height: 50px;\n  background-color: gold;\n  position: relative; }\n  /* line 148, stdin */\n  .yzm-img .card::before {\n    content: \"\";\n    display: block;\n    left: 50%;\n    width: 20px;\n    height: 20px;\n    border-radius: 50% 50% 0 0;\n    background-color: black;\n    top: -10px;\n    margin-left: -10px;\n    position: absolute; }\n  /* line 160, stdin */\n  .yzm-img .card::after {\n    content: \"\";\n    display: block;\n    left: 50%;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    position: absolute;\n    background-color: red;\n    bottom: -10px;\n    margin-left: -10px; }\n\n/* line 175, stdin */\n.checkCode {\n  /* 基本参数设置 */\n  /* 验证成功 */\n  /* 禁止复制 */\n  width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  min-height: 50px;\n  margin: 7.5px 0;\n  position: relative; }\n  /* line 182, stdin */\n  .checkCode.success > .content {\n    border: 1px solid #42DD18;\n    color: #42DD18;\n    pointer-events: none; }\n    /* line 186, stdin */\n    .checkCode.success > .content .anime .one::before {\n      background-color: #42DD18; }\n  /* line 192, stdin */\n  .checkCode * {\n    user-select: none; }\n  /* line 203, stdin */\n  .checkCode > .title {\n    padding: 0 15px; }\n  /* line 206, stdin */\n  .checkCode > .content {\n    max-width: 200px;\n    border: 1px solid #e7e7e7;\n    flex: 1;\n    height: 50px;\n    margin-right: 15px;\n    display: flex;\n    flex-direction: row;\n    align-items: center; }\n    /* line 215, stdin */\n    .checkCode > .content .anime {\n      min-width: 50px;\n      margin-left: 15px; }\n      /* line 219, stdin */\n      .checkCode > .content .anime .one {\n        display: block;\n        width: 36px;\n        height: 36px;\n        border-radius: 50%;\n        background-color: #DEE9FA;\n        position: relative;\n        animation: zoomIn 1.2s infinite alternate ease-in;\n        transition: all 1.2s; }\n\n@keyframes zoomIn {\n  to {\n    transform: scale(0.6); } }\n\n@keyframes zoomOut {\n  to {\n    transform: scale(1.5); } }\n        /* line 238, stdin */\n        .checkCode > .content .anime .one::before {\n          content: \"\";\n          display: block;\n          position: absolute;\n          width: 12px;\n          height: 12px;\n          border-radius: 50%;\n          background-color: #5D91F4;\n          left: 12px;\n          top: 12px;\n          animation: zoomOut 2.4s infinite alternate 1s ease-in; }\n  /* line 253, stdin */\n  .checkCode .dialog-bg {\n    position: fixed;\n    left: 0;\n    top: 0;\n    height: 100vh;\n    width: 100vw;\n    z-index: 4; }\n  /* line 261, stdin */\n  .checkCode .dialog {\n    min-width: 320px;\n    min-height: 200px;\n    position: absolute;\n    border: 1px solid #e6e6e6;\n    background-color: white;\n    z-index: 5;\n    top: 50px;\n    margin-left: 145px;\n    margin-top: -35px; }\n    /* line 274, stdin */\n    .checkCode .dialog::before {\n      content: \"\";\n      height: 0px;\n      width: 0px;\n      position: absolute;\n      left: -17px;\n      top: 5px;\n      z-index: 0;\n      border-left: 8px solid transparent;\n      border-top: 8px solid transparent;\n      border-bottom: 8px solid transparent;\n      border-right: 8px solid rgba(63, 63, 63, 0.1); }\n    /* line 287, stdin */\n    .checkCode .dialog::after {\n      content: \"\";\n      height: 0px;\n      width: 0px;\n      position: absolute;\n      left: -14px;\n      top: 5px;\n      z-index: 1;\n      border-left: 8px solid transparent;\n      border-top: 8px solid transparent;\n      border-bottom: 8px solid transparent;\n      border-right: 8px solid white; }\n    @media screen and (max-width: 480px) {\n      /* line 301, stdin */\n      .checkCode .dialog {\n        left: calc(50% - 160px);\n        margin: 0;\n        top: 70px; }\n        /* line 305, stdin */\n        .checkCode .dialog::before {\n          left: auto;\n          top: -17px;\n          transform: rotateZ(90deg); }\n        /* line 310, stdin */\n        .checkCode .dialog::after {\n          left: auto;\n          top: -15px;\n          transform: rotateZ(90deg); } }\n  /* line 318, stdin */\n  .checkCode .l-box {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; }\n    /* line 323, stdin */\n    .checkCode .l-box canvas {\n      border: 1px solid #e6e6e6; }\n    /* line 326, stdin */\n    .checkCode .l-box .warn {\n      color: #ff8a00; }\n    /* line 329, stdin */\n    .checkCode .l-box .title {\n      height: 50px;\n      line-height: 50px;\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n      /* line 335, stdin */\n      .checkCode .l-box .title .card-bg {\n        border: 1px solid #e6e6e6;\n        box-sizing: border-box;\n        height: 30px;\n        line-height: 30px;\n        background-color: deepskyblue;\n        color: white;\n        font-weight: bold;\n        margin: 0 10px;\n        padding: 0 10px;\n        letter-spacing: 4px; }\n    /* line 351, stdin */\n    .checkCode .l-box .footer {\n      margin: 5px 0;\n      width: 100%;\n      height: 40px;\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: space-around; }\n      /* line 359, stdin */\n      .checkCode .l-box .footer i {\n        font-size: 30px;\n        color: #b3b3b3; }\n      /* line 363, stdin */\n      .checkCode .l-box .footer button {\n        height: 40px;\n        width: 100px;\n        color: white;\n        background-color: deepskyblue;\n        border: 0;\n        font-size: 18px; }\n  /* line 373, stdin */\n  .checkCode .tip {\n    position: relative; }\n    /* line 376, stdin */\n    .checkCode .tip:hover::after {\n      content: attr(data-tip); }\n    /* line 380, stdin */\n    .checkCode .tip::after {\n      display: block;\n      position: absolute;\n      font-size: 16px;\n      min-width: 50px;\n      background: white;\n      border: 1px solid #e6e6e6;\n      margin-top: -60px;\n      margin-left: -25px;\n      white-space: nowrap;\n      padding: 3px; }\n  /* line 394, stdin */\n  .checkCode .number {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    color: white;\n    text-align: center;\n    line-height: 30px;\n    position: absolute;\n    background: #007cff;\n    box-shadow: 0 0 2px 1px white; }\n    /* line 404, stdin */\n    .checkCode .number::before {\n      content: attr(data-index);\n      font-size: 20px; }");(function () {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _drawCode = require('../assets/js/drawCode');

  var _drawCode2 = _interopRequireDefault(_drawCode);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  exports.default = {
    name: 'checkCode',
    data: function data() {
      return {
        checkData: {
          title: '验证码',
          text: ['点击进行验证', '正在验证', '验证成功'],
          popShow: false,
          cData: {
            flag: false,
            text: '默认成语',
            tipStatus: true,
            tip: ['请按顺序点击图中文字', '验证错误,请重新验证'],
            style: {
              width: '280px',
              height: '200px'
            },
            clickData: [],
            fontData: []
          }
        }
      };
    },
    created: function created() {},
    beforeMount: function beforeMount() {},
    mounted: function mounted() {},
    beforeUpdate: function beforeUpdate() {},
    updated: function updated() {},
    beforeDestroy: function beforeDestroy() {},
    destroyed: function destroyed() {},
    methods: {
      showCode: function showCode() {
        if (this.checkData.cData.flag) {
          return false;
        }
        this.checkData.popShow = true;
        return this.reFont();
      },
      closeCode: function closeCode() {
        this.checkData.popShow = false;
      },
      addNumber: function addNumber(e) {
        this.checkData.cData.tipStatus = true;
        if (this.checkData.cData.clickData.length >= 4) {
          return false;
        }
        var x = e.offsetX;
        var y = e.offsetY;
        this.checkData.cData.clickData.push({ x: x, y: y });
        if (this.checkData.cData.clickData.length === 4) {
          return this.checkCfData();
        }
      },
      removeNumber: function removeNumber(i) {
        this.checkData.cData.clickData.splice(i);
      },
      drawFont: function drawFont(data) {
        var temp = new _drawCode2.default(data);
        temp.start();
        this.checkData.cData.fontData = temp.fontData;
        this.checkData.cData.scope = temp.scope;
        this.checkData.cData.text = temp.text.join('');
      },
      reFont: function reFont(flag) {
        var tempStr = [['狡兔三窟', '免库'], ['长袖善舞', '柚'], ['匪夷所思', '篚'], ['飞扬跋扈', '杨拔'], ['多事之秋', '是又']];
        this.checkData.cData.clickData = [];
        this.checkData.cData.flag = false;
        if (flag !== true) {
          this.checkData.cData.tipStatus = true;
        } else {
          this.checkData.cData.tipStatus = false;
        }
        this.drawFont({
          text: tempStr[parseInt(Math.random() * tempStr.length)]
        });
      },
      checkCfData: function checkCfData() {
        var _this = this;

        if (this.checkData.cData.clickData.length !== 4) {
          this.checkData.cData.flag = false;
          return false;
        }
        var flag = this.checkData.cData.fontData.map(function (v) {
          return {
            x: v.x / 2,
            y: v.y / 2
          };
        }).every(function (value, index) {
          var booleanX = value.x <= _this.checkData.cData.clickData[index].x && _this.checkData.cData.clickData[index].x <= parseInt(value.x) + _this.checkData.cData.scope / 2;
          var booleanY = value.y <= _this.checkData.cData.clickData[index].y && _this.checkData.cData.clickData[index].y <= parseInt(value.y) + _this.checkData.cData.scope / 2;
          return booleanX || booleanY;
        });
        this.checkData.cData.flag = flag;
        if (flag) {
          this.checkData.popShow = false;
        } else {
          this.checkData.cData.tipStatus = false;
          return this.reFont(true);
        }
      }
    } };
})();
if (module.exports.__esModule) module.exports = module.exports.default;
var __vue__options__ = typeof module.exports === "function" ? module.exports.options : module.exports;
if (__vue__options__.functional) {
  console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.");
}
__vue__options__.render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "checkCode", class: { success: _vm.checkData.cData.flag } }, [_c('span', { staticClass: "title" }, [_vm._v(_vm._s(_vm.checkData.title))]), _vm._v(" "), _c('div', { staticClass: "content", on: { "click": _vm.showCode } }, [_vm._m(0), _vm._v(" "), _c('div', { directives: [{ name: "show", rawName: "v-show", value: !_vm.checkData.popShow && !_vm.checkData.cData.flag, expression: "!checkData.popShow && !checkData.cData.flag" }] }, [_vm._v(_vm._s(_vm.checkData.text[0]))]), _vm._v(" "), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.checkData.popShow && !_vm.checkData.cData.flag, expression: "checkData.popShow && !checkData.cData.flag" }] }, [_vm._v(_vm._s(_vm.checkData.text[1]))]), _vm._v(" "), _c('div', { directives: [{ name: "show", rawName: "v-show", value: !_vm.checkData.popShow && _vm.checkData.cData.flag, expression: "!checkData.popShow && checkData.cData.flag" }] }, [_vm._v(_vm._s(_vm.checkData.text[2]))])]), _vm._v(" "), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.checkData.popShow, expression: "checkData.popShow" }], staticClass: "dialog-bg", on: { "click": function click($event) {
        if ($event.target !== $event.currentTarget) {
          return null;
        }$event.stopPropagation();_vm.closeCode($event);
      } } }), _vm._v(" "), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.checkData.popShow && !_vm.checkData.cData.flag, expression: "checkData.popShow && !checkData.cData.flag" }], staticClass: "dialog l-box" }, [_c('div', { staticClass: "title" }, [_vm.checkData.cData.tipStatus ? _c('span', [_vm._v(_vm._s(_vm.checkData.cData.tip[0]))]) : _c('span', { staticClass: "warn" }, [_vm._v(_vm._s(_vm.checkData.cData.tip[1]))]), _vm._v(" "), _c('span', { staticClass: "card-bg" }, [_vm._v(_vm._s(_vm.checkData.cData.text))])]), _vm._v(" "), _c('div', { staticClass: "content" }, [_c('canvas', { style: _vm.checkData.cData.style, attrs: { "id": "yzm-canvas", "width": parseInt(_vm.checkData.cData.style.width) * 2 + 'px', "height": parseInt(_vm.checkData.cData.style.height) * 2 + 'px' }, on: { "click": _vm.addNumber } }), _vm._v(" "), _vm._l(_vm.checkData.cData.clickData, function (item, index) {
    return _c('div', { key: index, staticClass: "number", style: { left: item.x + 'px', top: item.y + 35 + 'px' }, attrs: { "data-index": index + 1 }, on: { "click": function click($event) {
          _vm.removeNumber(index);
        } } });
  })], 2), _vm._v(" "), _c('div', { staticClass: "footer" }, [_c('i', { staticClass: "iconfont icon-refresh tip", attrs: { "data-tip": "刷新验证码" }, on: { "click": _vm.reFont } }), _vm._v(" "), _c('button', { on: { "click": _vm.checkCfData } }, [_vm._v("验证")])])])]);
};
__vue__options__.staticRenderFns = [function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "anime" }, [_c('div', { staticClass: "one" })]);
}];
if (module.hot) {
  (function () {
    var hotAPI = require("vue-hot-reload-api");
    hotAPI.install(require("vue"), true);
    if (!hotAPI.compatible) return;
    module.hot.accept();
    module.hot.dispose(__vueify_style_dispose__);
    if (!module.hot.data) {
      hotAPI.createRecord("data-v-ce8a5986", __vue__options__);
    } else {
      hotAPI.reload("data-v-ce8a5986", __vue__options__);
    }
  })();
}
},{"vueify/lib/insert-css":26,"../assets/js/drawCode":23,"vue-hot-reload-api":27,"vue":20}],0:[function(require,module,exports) {
var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module(config) {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    },
    data: config && config.hot
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var ws = new WebSocket('ws://localhost:64091/');
  ws.onmessage = function(event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        window.location.reload();
      }
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id, undefined, {
    hot: true
  });

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id)
  });
}
},{}]},{},[0,16])