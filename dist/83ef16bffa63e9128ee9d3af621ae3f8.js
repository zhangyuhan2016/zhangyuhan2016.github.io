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
})({22:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/***
 * 背景动画块
 * 可配置大小范围，块的形状
 * */
var UpCard = function () {
  function UpCard() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$x = _ref.x,
        x = _ref$x === undefined ? 20 : _ref$x,
        _ref$size = _ref.size,
        size = _ref$size === undefined ? 80 : _ref$size,
        _ref$polygon = _ref.polygon,
        polygon = _ref$polygon === undefined ? 0.1 : _ref$polygon;

    _classCallCheck(this, UpCard);

    this.cardNumber = x; // 块的数量
    this.cardCss = []; // 块的样式集
    this.size = size; // 最大宽高
    this.polygon = polygon; // 出现多边形的概率
  }

  /* 初始化 */


  _createClass(UpCard, [{
    key: "created",
    value: function created() {
      var i = 0;
      while (i < this.cardNumber) {
        this.cardCss.splice(i, 1, this.randomCss());
        i++;
      }
      this.setTime(0);
    }

    /* 定时更新 */

  }, {
    key: "setTime",
    value: function setTime(n) {
      var _this = this;

      setTimeout(function () {
        _this.createCss();
        return _this.setTime(Math.random() * 10000 + 4000);
      }, n);
    }

    /* 更新CSS */

  }, {
    key: "createCss",
    value: function createCss() {
      for (var i = 0; i < Math.random() * this.cardNumber; i++) {
        this.cardCss.splice(Math.random() * this.cardNumber, 1, this.randomCss());
      }
    }

    /* 随机定义li的颜色,大小,距离,动画 */

  }, {
    key: "randomCss",
    value: function randomCss() {
      /* 随机数 */
      var radNum = function radNum(n) {
        return Math.floor(Math.random() * n + 1);
      };
      var opacity = Math.random() + 0.25;
      var width = radNum(this.size) + 'px';
      var height = width;
      var left = radNum(90) + '%';
      var anTime = radNum(30) + 3 + 's';
      var boxRa = radNum(50) + 3 + '%';
      var duration = radNum(5) + 1 + 's';
      var delay = radNum(3) + 's';
      var rgbBg = "rgba(" + radNum(255) + ", " + radNum(255) + ", " + radNum(255) + ", " + (Math.random() * 0.4 + 0.1) + ")";
      var an = "cubic-bezier(" + Math.random() + ", " + Math.random() + ", " + Math.random() + ", " + Math.random() + " )";
      var boo = '';
      var booBg = '';
      // 其他形状
      if (Math.random() < this.polygon) {
        rgbBg = '';
        boo = radNum(50) + 3 + 'px' + " solid transparent";
        booBg = "\n                " + (Math.random() * 10 > 6 ? "rgba(" + radNum(255) + ", " + radNum(255) + ", " + radNum(255) + ", " + (Math.random() * 0.3 + 0.1) + ")" : 'transparent') + "\n                " + (Math.random() * 10 > 8 ? "rgba(" + radNum(255) + ", " + radNum(255) + ", " + radNum(255) + ", " + (Math.random() * 0.3 + 0.1) + ")" : 'transparent') + "\n                " + (Math.random() * 10 > 6 ? "rgba(" + radNum(255) + ", " + radNum(255) + ", " + radNum(255) + ", " + (Math.random() * 0.3 + 0.1) + ")" : 'transparent') + "\n                " + (Math.random() * 10 > 1 ? "rgba(" + radNum(255) + ", " + radNum(255) + ", " + radNum(255) + ", " + (Math.random() * 0.3 + 0.1) + ")" : 'transparent') + "\n          ";
      }
      return {
        'width': width,
        'height': height,
        'left': left,
        'opacity': opacity,
        'animation-duration': anTime,
        'border-radius': boxRa,
        'transition-duration': duration,
        'background-color': rgbBg,
        'animation-delay': delay,
        'animation-timing-function': an,
        'border': boo,
        'border-color': booBg
      };
    }
  }]);

  return UpCard;
}();

exports.UpCard = UpCard;
/* 块动画背景 */
/** .wrapper {
  z-index: -1;
  background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
  opacity: 0.8;
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
.card {
    position: absolute;
    transition: all 0.6s;
    display: block;
    list-style: none;
    bottom: -200px;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0, 0.23, 0.94, 0.83);
    animation-name: lilili;
    animation-fill-mode: both;
  &:hover {
      animation-play-state: paused;
      transform: scale(1.2);
    }
  }
@keyframes lilili {
    to {
      bottom: 100%;
      transform: rotate(100deg);
    }
  }
}  **/
},{}],12:[function(require,module,exports) {
"use strict";

var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("@charset \"UTF-8\";\n/* line 61, stdin */\n.index {\n  min-width: 888px;\n  box-sizing: border-box;\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center; }\n  /* line 68, stdin */\n  .index .wrapper {\n    flex: 1;\n    box-sizing: border-box;\n    padding: 0 50px;\n    display: grid;\n    grid-column-gap: 10px;\n    grid-row-gap: 10px;\n    grid-template-columns: repeat(4, 1fr);\n    grid-auto-flow: row; }\n    /* line 77, stdin */\n    .index .wrapper > div {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: white;\n      background-color: #4bc3f4;\n      cursor: pointer;\n      padding: 25px 0;\n      font-size: 20px; }\n      /* line 86, stdin */\n      .index .wrapper > div:hover {\n        transition: all 0.6s;\n        transform: scale(0.98);\n        background-color: #00aeef; }\n\n/* line 96, stdin */\n.my-bg-card {\n  /* 块动画背景 */\n  z-index: -1;\n  background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);\n  opacity: 0.8;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow-y: hidden; }\n  /* line 107, stdin */\n  .my-bg-card .card {\n    position: absolute;\n    transition: all 0.6s;\n    display: block;\n    list-style: none;\n    bottom: -200px;\n    animation-iteration-count: infinite;\n    animation-timing-function: cubic-bezier(0, 0.23, 0.94, 0.83);\n    animation-name: lilili;\n    animation-fill-mode: both; }\n    /* line 117, stdin */\n    .my-bg-card .card:hover {\n      animation-play-state: paused;\n      transform: scale(1.2); }\n\n@keyframes lilili {\n  to {\n    bottom: 100%;\n    transform: rotate(100deg); } }");(function () {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _UpCard = require('../assets/js/UpCard');

  exports.default = {
    name: 'index',
    data: function data() {
      return {
        cards: new _UpCard.UpCard(),
        page: [{
          name: '公积金计算器',
          url: 'moneyCounter'
        }, {
          name: 'CSS 3D阴影',
          url: 'font3D'
        }, {
          name: '文字打印机效果',
          url: 'textPrint'
        }, {
          name: '扫雷',
          url: 'mine'
        }, {
          name: '仿picker (touch) ',
          url: 'picker'
        }, {
          name: '图中点字验证码',
          url: 'yzm'
        }, {
          name: '拖动验证码',
          url: 'dragYzm'
        }]
      };
    },
    created: function created() {
      this.cards.created();
    },
    beforeMount: function beforeMount() {},
    mounted: function mounted() {},
    beforeUpdate: function beforeUpdate() {},
    updated: function updated() {},
    beforeDestroy: function beforeDestroy() {},
    destroyed: function destroyed() {},
    methods: {} };
})();
if (module.exports.__esModule) module.exports = module.exports.default;
var __vue__options__ = typeof module.exports === "function" ? module.exports.options : module.exports;
if (__vue__options__.functional) {
  console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.");
}
__vue__options__.render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "index" }, [_c('div', { staticClass: "wrapper" }, _vm._l(_vm.page, function (item, index) {
    return _c('router-link', { key: index, attrs: { "tag": "div", "to": item.url } }, [_vm._v("\n            " + _vm._s(item.name) + "\n        ")]);
  })), _vm._v(" "), _c('div', { staticClass: "my-bg-card" }, _vm._l(_vm.cards.cardNumber, function (item, index) {
    return _c('li', { key: item, staticClass: "card", style: _vm.cards.cardCss[index], attrs: { "data-number": "item" } });
  }))]);
};
__vue__options__.staticRenderFns = [];
if (module.hot) {
  (function () {
    var hotAPI = require("vue-hot-reload-api");
    hotAPI.install(require("vue"), true);
    if (!hotAPI.compatible) return;
    module.hot.accept();
    module.hot.dispose(__vueify_style_dispose__);
    if (!module.hot.data) {
      hotAPI.createRecord("data-v-9786cd3a", __vue__options__);
    } else {
      hotAPI.rerender("data-v-9786cd3a", __vue__options__);
    }
  })();
}
},{"vueify/lib/insert-css":26,"../assets/js/UpCard":22,"vue-hot-reload-api":27,"vue":20}],0:[function(require,module,exports) {
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
},{}]},{},[0,12])