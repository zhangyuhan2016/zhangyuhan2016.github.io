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
})({18:[function(require,module,exports) {
"use strict";

var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("/* line 216, stdin */\n.yzm {\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: center; }\n\n/* line 222, stdin */\n.bg {\n  width: 100vw;\n  height: 300px;\n  position: relative;\n  overflow: hidden; }\n  /* line 227, stdin */\n  .bg .retry {\n    font-size: 40px;\n    position: absolute;\n    right: 0;\n    padding: 5px;\n    color: white;\n    z-index: 4; }\n  /* line 235, stdin */\n  .bg .y-img {\n    width: 100%;\n    height: 100%;\n    display: block;\n    z-index: 1; }\n  /* line 241, stdin */\n  .bg .b-card {\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: white;\n    box-shadow: inset 0 0 7px 3px #a5a5a5;\n    border-radius: 5px;\n    z-index: 2; }\n  /* line 250, stdin */\n  .bg .t-img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 3; }\n\n/* line 258, stdin */\n.h-card {\n  margin-top: 40px;\n  height: 40px;\n  line-height: 40px;\n  position: relative;\n  background-color: #E8E8E8; }\n  /* line 265, stdin */\n  .h-card .text {\n    text-align: center; }\n    /* line 267, stdin */\n    .h-card .text.err {\n      background-color: #da5a21;\n      color: white; }\n  /* line 272, stdin */\n  .h-card .card-bg {\n    display: flex;\n    flex-direction: row;\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin-left: -100%; }\n    /* line 279, stdin */\n    .h-card .card-bg .bg {\n      flex: 1;\n      background-color: rgba(0, 128, 0, 0.53);\n      height: 40px; }\n    /* line 284, stdin */\n    .h-card .card-bg .card {\n      width: 30px;\n      background-color: white;\n      height: 40px;\n      box-sizing: border-box;\n      border: 1px solid #ababab; }\n      /* line 290, stdin */\n      .h-card .card-bg .card.stop {\n        pointer-events: none; }\n      /* line 293, stdin */\n      .h-card .card-bg .card i {\n        font-size: 26px; }");(function () {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'yzm',
    data: function data() {
      return {
        clickText: '',
        canvasFlag: false,
        canvasNumber: 1,
        ClickData: [],
        fontData: [],
        imgArr: ['http://img.hb.aicdn.com/47829a3692500f8e765acc236a6f158a882e12675a062-TTD3D2_fw658', require('../assets/images/17.jpg')],
        useImg: 'http://img.hb.aicdn.com/47829a3692500f8e765acc236a6f158a882e12675a062-TTD3D2_fw658',
        slideCode: {
          imgURL: 'http://img.hb.aicdn.com/47829a3692500f8e765acc236a6f158a882e12675a062-TTD3D2_fw658',
          bgStyle: { height: '300px', width: '100%' },
          result: '',
          slideImg: {
            width: '100%',
            height: '',
            clip: '',
            'margin-left': ''
          },
          fixedBlock: {},
          slideBlock: {
            'margin-left': '-100%',
            'transition': '',
            cardW: '15',
            text: '拖动滑块进行验证'
          }
        },
        leftRange: 50,
        slideData: {
          'margin-left': '-100%',
          'transition': ''
        },
        initData: {
          top: '100px',
          left: '200px',
          width: '50px',
          height: '50px'
        },
        clipData: {
          width: '100%',
          height: '300px',
          clip: '',
          'margin-left': '-200px'
        }
      };
    },
    created: function created() {
      this.clipData.clip = 'rect(' + this.initData.top + ' ' + (parseFloat(this.initData.left) + parseFloat(this.initData.width)) + 'px ' + (parseFloat(this.initData.top) + parseFloat(this.initData.height)) + 'px ' + this.initData.left + ')';
      this.clipData['margin-left'] = '-' + this.initData.left;
    },
    beforeMount: function beforeMount() {},
    mounted: function mounted() {
      this.createSlideImg();
    },
    beforeUpdate: function beforeUpdate() {},
    updated: function updated() {},
    beforeDestroy: function beforeDestroy() {},
    destroyed: function destroyed() {},
    methods: {
      test: function test() {
        var tempNumber = this.leftRange > 50 ? this.leftRange - 50 : -(50 - this.leftRange);
        console.log(tempNumber);
        this.clipData['margin-left'] = parseInt(tempNumber) + parseFloat(this.clipData['margin-left']) + 'px';
      },
      tStart: function tStart(e) {
        this.slideData['transition'] = '';
      },
      tMove: function tMove(e) {
        this.slideData['margin-left'] = 'calc(-100% + ' + (e.targetTouches[0].pageX - 15) + 'px)';
        this.clipData['margin-left'] = -200 + e.targetTouches[0].pageX - 15 + 'px';
        console.log(this.slideData['margin-left'], this.clipData['margin-left']);
      },
      tEnd: function tEnd() {
        console.log('1');
        this.slideData['transition'] = 'all 0.3s';
        this.slideData['margin-left'] = '-100%';
      },
      slideStart: function slideStart(e) {
        this.slideCode.result = '';
        this.slideCode.slideBlock['transition'] = '';
        this.slideCode.slideBlock['margin-left'] = '-100%';
        this.createSlideImg();
      },
      slideMove: function slideMove(e) {
        var tempDis = e.targetTouches[0].pageX - parseFloat(this.slideCode.slideBlock.cardW);
        if (tempDis > this.slideCode.slideBlock.maxRange) {
          tempDis = this.slideCode.slideBlock.maxRange;
          return this.checkDis();
        }
        if (tempDis < 0) {
          tempDis = 0;
        }
        this.slideCode.slideBlock['margin-left'] = 'calc(-100% + ' + tempDis + 'px)';
        this.slideCode.slideImg['margin-left'] = parseFloat('-' + this.slideCode.fixedBlock.left) + tempDis + 'px';
      },
      slideEnd: function slideEnd() {
        this.checkDis();
      },
      retryCode: function retryCode() {
        this.slideCode.result = '';
        this.slideCode.slideBlock['transition'] = '';
        this.slideCode.slideBlock['margin-left'] = '-100%';
        this.useImg = this.getImgUrl();
        this.slideCode.imgURL = this.useImg;
      },
      checkDis: function checkDis() {
        var flag = Math.abs(parseFloat(this.slideCode.slideImg['margin-left'])) < this.slideCode.fault;
        this.slideCode.result = flag;
        if (flag) {
          this.slideCode.slideBlock['transition'] = 'all 0.3s';
          this.slideCode.slideBlock['margin-left'] = parseFloat(this.slideCode.slideBlock.cardW) * -2 + 'px';
        } else {
          this.slideCode.slideBlock['transition'] = 'all 0.3s';
          this.slideCode.slideBlock['margin-left'] = '-100%';
        }
      },
      addPx: function addPx(n) {
        return parseInt(n) + 'px';
      },
      createRanInit: function createRanInit(_ref) {
        var _ref$minX = _ref.minX,
            minX = _ref$minX === undefined ? '50' : _ref$minX,
            maxX = _ref.maxX,
            _ref$minY = _ref.minY,
            minY = _ref$minY === undefined ? '5' : _ref$minY,
            maxY = _ref.maxY,
            _ref$w = _ref.w,
            w = _ref$w === undefined ? '50' : _ref$w,
            _ref$h = _ref.h,
            h = _ref$h === undefined ? '50' : _ref$h;

        return {
          top: this.addPx(Math.random() * (maxY - h) + minY),
          left: this.addPx(Math.random() * (maxX - w) + minX),
          width: this.addPx(w),
          height: this.addPx(h)
        };
      },
      getImgUrl: function getImgUrl() {
        return this.imgArr[parseInt(Math.random() * this.imgArr.length)];
      },
      createSlideImg: function createSlideImg() {
        var bgHeight = this.$refs.codeBg.offsetHeight || '300px';
        var bgWidth = this.$refs.codeBg.offsetWidth || '400px';
        console.log('--bgHeight, bgWidth--', bgHeight, bgWidth);

        var fixedBlock = this.createRanInit({
          maxX: bgWidth,
          maxY: bgHeight
        });

        var slideImg = {
          width: '100%',
          height: this.addPx(bgHeight),
          clip: 'rect(' + fixedBlock.top + ' ' + (parseFloat(fixedBlock.left) + parseFloat(fixedBlock.width)) + 'px ' + (parseFloat(fixedBlock.top) + parseFloat(fixedBlock.height)) + 'px ' + fixedBlock.left + ')',
          'margin-left': '-' + fixedBlock.left
        };
        console.log('a', this.useImg);
        var data = {
          imgURL: this.useImg,
          fault: '5',
          result: '',
          bgStyle: {
            height: this.addPx(bgHeight),
            width: this.addPx(bgWidth)
          },
          slideImg: slideImg,
          fixedBlock: fixedBlock,
          slideBlock: {
            'margin-left': '-100%',
            'transition': '',
            cardW: '15',
            maxRange: bgWidth - 15 * 2
          }
        };
        this.slideCode = data;
        return data;
      }
    } };
})();
if (module.exports.__esModule) module.exports = module.exports.default;
var __vue__options__ = typeof module.exports === "function" ? module.exports.options : module.exports;
if (__vue__options__.functional) {
  console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.");
}
__vue__options__.render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "yzm" }, [_c('h2', [_vm._v("滑块验证")]), _vm._v(" "), _c('div', [_c('div', { ref: "codeBg", staticClass: "bg", style: _vm.slideCode.bgStyle }, [_c('i', { staticClass: "iconfont icon-refresh retry", on: { "click": _vm.retryCode } }), _vm._v(" "), _c('img', { staticClass: "y-img", attrs: { "src": _vm.slideCode.imgURL, "alt": "验证码" } }), _vm._v(" "), _c('img', { staticClass: "t-img", style: _vm.slideCode.slideImg, attrs: { "src": _vm.slideCode.imgURL, "alt": "验证码" } }), _vm._v(" "), _c('div', { staticClass: "b-card", style: _vm.slideCode.fixedBlock })]), _vm._v(" "), _c('div', { staticClass: "h-card" }, [_c('div', { staticClass: "text", class: { err: _vm.slideCode.result === false } }, [_vm._v("\n                " + _vm._s(_vm.slideCode.result === '' ? '请向右滑动进行验证' : _vm.slideCode.result === true ? '验证通过' : '验证失败') + "\n            ")]), _vm._v(" "), _c('div', { staticClass: "card-bg", style: _vm.slideCode.slideBlock }, [_c('div', { staticClass: "bg" }), _vm._v(" "), _c('div', { staticClass: "card", class: { stop: _vm.slideCode.result === true }, on: { "touchstart": _vm.slideStart, "touchmove": _vm.slideMove, "touchend": _vm.slideEnd } }, [_c('i', { directives: [{ name: "show", rawName: "v-show", value: _vm.slideCode.result === '', expression: "slideCode.result === ''" }], staticClass: "iconfont icon-right" }), _vm._v(" "), _c('i', { directives: [{ name: "show", rawName: "v-show", value: _vm.slideCode.result === false, expression: "slideCode.result === false" }], staticClass: "iconfont icon-refresh" }), _vm._v(" "), _c('i', { directives: [{ name: "show", rawName: "v-show", value: _vm.slideCode.result === true, expression: "slideCode.result === true" }], staticClass: "iconfont icon-duihao" })])])])])]);
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
      hotAPI.createRecord("data-v-30e8ee5c", __vue__options__);
    } else {
      hotAPI.rerender("data-v-30e8ee5c", __vue__options__);
    }
  })();
}
},{"vueify/lib/insert-css":26,"../assets/images/17.jpg":21,"vue-hot-reload-api":27,"vue":20}],0:[function(require,module,exports) {
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
},{}]},{},[0,18])