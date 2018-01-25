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
})({17:[function(require,module,exports) {
"use strict";

var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("/* line 82, stdin */\n.weui-picker__bd {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  position: relative;\n  background-color: #fff;\n  height: 238px;\n  overflow: hidden; }\n\n/* line 92, stdin */\n.weui-picker__group {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n  position: relative;\n  height: 100%; }\n\n/* line 100, stdin */\n.weui-picker__mask {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  z-index: 3;\n  background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), -webkit-linear-gradient(bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));\n  background-position: top, bottom;\n  background-size: 100% 102px;\n  background-repeat: no-repeat;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0); }\n\n/* line 117, stdin */\n.weui-picker__indicator {\n  width: 100%;\n  height: 34px;\n  position: absolute;\n  left: 0;\n  top: 102px;\n  z-index: 3; }\n\n/* line 126, stdin */\n.weui-picker__indicator:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #E5E5E5;\n  color: #E5E5E5;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5); }\n\n/* line 141, stdin */\n.weui-picker__indicator:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #E5E5E5;\n  color: #E5E5E5;\n  -webkit-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n  transform: scaleY(0.5); }\n\n/* line 156, stdin */\n.weui-picker__content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  transition: all 0.3s; }\n\n/* line 164, stdin */\n.weui-picker__item {\n  padding: 0;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  color: #000;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n/* line 175, stdin */\n.bg {\n  position: fixed;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  z-index: 5000; }\n\n/* line 183, stdin */\n.weui-mask {\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6); }");(function () {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'picker',
    data: function data() {
      return {
        picData: {
          default: 0,
          data: ['1', '2', '3', '4', '5', '6', '7', '1', '2', '3', '4', '5', '6', '7', '1', '2', '3', '4', '5', '6', '7'],
          height: 34
        },
        pageData: {
          start: '',
          end: ''
        }
      };
    },
    created: function created() {},
    beforeMount: function beforeMount() {},
    mounted: function mounted() {
      this.createPicker();
    },
    beforeUpdate: function beforeUpdate() {},
    updated: function updated() {},
    beforeDestroy: function beforeDestroy() {},
    destroyed: function destroyed() {},
    methods: {
      createPicker: function createPicker() {
        this.$refs.box.style.transform = 'translate3d(0px, ' + (this.picData.default + 3) * this.picData.height + 'px, 0px)';
      },
      cIndex: function cIndex(i) {
        console.log('--i--', i);
      },
      pMove: function pMove(e) {
        var oldHeight = this.$refs.box.style.transform.split('px,')[1] || 0;
        var tempHeight = Number(oldHeight) + (Number(e.targetTouches[0].pageY) - Number(this.pageData.start));
        this.pageData.start = e.targetTouches[0].pageY;
        this.$refs.box.style.transform = 'translate3d(0px, ' + tempHeight + 'px, 0px)';
        e.preventDefault();
      },
      pEnd: function pEnd() {
        var Boxlength = this.picData.data.length;
        var oldHeight = this.$refs.box.style.transform.split('px,')[1] || 0;
        var index = Math.round(oldHeight / this.picData.height);
        if (index < -Boxlength + 4) {
          index = -Boxlength + 4;
        }
        if (index > 3) {
          index = 3;
        }
        this.$refs.box.style.transform = 'translate3d(0px, ' + index * 34 + 'px, 0px)';
      },
      pStart: function pStart(e) {
        this.pageData.start = e.targetTouches[0].pageY;
      }
    } };
})();
if (module.exports.__esModule) module.exports = module.exports.default;
var __vue__options__ = typeof module.exports === "function" ? module.exports.options : module.exports;
if (__vue__options__.functional) {
  console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.");
}
__vue__options__.render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('div', { staticClass: "weui-mask" }), _vm._v(" "), _c('div', { staticClass: "bg" }, [_c('div', { staticClass: "weui-picker__bd" }, [_c('div', { staticClass: "weui-picker__group", on: { "touchstart": _vm.pStart, "touchmove": _vm.pMove, "touchend": _vm.pEnd } }, [_c('div', { staticClass: "weui-picker__mask" }), _vm._v(" "), _c('div', { staticClass: "weui-picker__indicator" }), _vm._v(" "), _c('div', { ref: "box", staticClass: "weui-picker__content", staticStyle: { "transform": "translate3d(0px, 0px, 0px)", "transition": "all 0.3s" } }, _vm._l(_vm.picData.data, function (item, index) {
    return _c('div', { key: index, ref: 'a' + index, refInFor: true, staticClass: "weui-picker__item", attrs: { "id": 'a' + index }, on: { "click": function click($event) {
          _vm.cIndex(index);
        } } }, [_vm._v(_vm._s(item) + "\n                    ")]);
  }))])])])]);
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
      hotAPI.createRecord("data-v-54b82c4d", __vue__options__);
    } else {
      hotAPI.rerender("data-v-54b82c4d", __vue__options__);
    }
  })();
}
},{"vueify/lib/insert-css":26,"vue-hot-reload-api":27,"vue":20}],0:[function(require,module,exports) {
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
},{}]},{},[0,17])