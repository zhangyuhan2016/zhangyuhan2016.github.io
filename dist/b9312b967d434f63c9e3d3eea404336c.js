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
})({11:[function(require,module,exports) {
"use strict";

var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("@charset \"UTF-8\";\n/**\r\n * Created by zhangyuhan on 2017/01/10.\r\n */\n/* line 4, src/assets/css/font3D.scss */\n.text-3d {\n  /*中间层（蓝色那个）*/\n  z-index: 2;\n  color: deepskyblue;\n  font-size: 8em;\n  position: relative; }\n  /* line 10, src/assets/css/font3D.scss */\n  .text-3d::before {\n    /*最高层（白色那个）*/\n    z-index: 3;\n    position: absolute;\n    content: attr(data-text);\n    /*获取value*/\n    color: #fafafa;\n    /*设置value的颜色*/\n    text-shadow: 3px 3px 10px #878787;\n    /*用来突出文本的阴影*/\n    transition: transform 0.3s;\n    /*定义过渡动画的属性名,时长*/\n    transform-origin: 0% 100%;\n    /*设置旋转的基准点*/ }\n  /* line 22, src/assets/css/font3D.scss */\n  .text-3d::after {\n    /*最底层*/\n    /*用于模拟阴影效果*/\n    z-index: 1;\n    position: absolute;\n    content: attr(data-text);\n    /*获取value*/\n    color: rgba(144, 144, 144, 0.3);\n    /*设置value的颜色(0.2等于透明度20%)*/\n    left: 0;\n    top: 0;\n    transition: transform 0.3s;\n    /*定义过渡动画的属性名,时长*/\n    transform-origin: 0% 50%;\n    /*设置旋转的基准点*/ }\n  /* line 35, src/assets/css/font3D.scss */\n  .text-3d:hover::before {\n    transform: rotateY(40deg); }\n  /* line 38, src/assets/css/font3D.scss */\n  .text-3d:hover::after {\n    transform: rotateX(20deg) rotateY(40deg); }\n  /* line 43, src/assets/css/font3D.scss */\n  .text-3d.right::before {\n    transform-origin: 50% 0; }\n  /* line 46, src/assets/css/font3D.scss */\n  .text-3d.right::after {\n    transform-origin: 100% 0; }\n\n/* line 56, stdin */\n.font-3D {\n  box-sizing: border-box; }");(function () {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'font-3D',
    data: function data() {
      return {
        textArr: [{
          text: '{'
        }, {
          text: 'C'
        }, {
          text: 'S'
        }, {
          text: 'S'
        }, {
          text: '}',
          right: true
        }, {
          text: '《'
        }, {
          text: '哈'
        }, {
          text: '》',
          right: true
        }, {
          text: '㊎'
        }, {
          text: '㊍'
        }, {
          text: '㊌'
        }, {
          text: '㊋'
        }, {
          text: '㊏'
        }]
      };
    },
    created: function created() {},
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
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "font-3D" }, [_c('div', { attrs: { "id": "show" } }, _vm._l(_vm.textArr, function (item, index) {
    return _c('span', { key: index, staticClass: "text-3d", class: { right: item.right }, attrs: { "data-text": item.text } }, [_vm._v(_vm._s(item.text))]);
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
      hotAPI.createRecord("data-v-34296c80", __vue__options__);
    } else {
      hotAPI.reload("data-v-34296c80", __vue__options__);
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
},{}]},{},[0,11])