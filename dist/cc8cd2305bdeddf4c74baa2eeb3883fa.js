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
})({24:[function(require,module,exports) {
/**
 * Created by zhangyuhan on 2017/01/10.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var aText = function () {
  function aText() {
    _classCallCheck(this, aText);

    this.i = 0;
    this.index = 0;
    this.data = [];
    this.Selector = 'Selector';
    this.temp = '一个初始值';
  }

  _createClass(aText, [{
    key: "add",
    value: function add() {
      var _this = this;

      var str = this.temp;
      if (this.i < str.length) {
        var a = str.substring(0, ++this.i);
        document.querySelector(this.Selector).innerText = a;
      } else {
        this.i = 0;
        return setTimeout(function () {
          _this.del();
        }, 2000);
      }
      setTimeout(function () {
        _this.add();
      }, 200);
    }
  }, {
    key: "del",
    value: function del() {
      var _this2 = this;

      var str = document.querySelector(this.Selector).innerText;
      if (str.length) {
        document.querySelector(this.Selector).innerText = str.substring(0, str.length - 1);
        setTimeout(function () {
          _this2.del();
        }, 200);
      } else {
        setTimeout(function () {
          _this2.main();
        }, 1000);
      }
    }
  }, {
    key: "main",
    value: function main() {
      if (this.index < this.data.length) {
        this.temp = this.data[this.index++];
        this.add();
      } else {
        this.index = 0;
        return this.main();
      }
    }
  }, {
    key: "start",
    value: function start(selector, data) {
      this.Selector = selector;
      this.data = data;
      this.main();
    }
  }]);

  return aText;
}();

exports.aText = aText;
},{}],15:[function(require,module,exports) {
"use strict";

var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("/* line 3, src/assets/css/text-print.scss */\n.print-text {\n  font-size: 30px;\n  color: #262626; }\n\n/* line 8, src/assets/css/text-print.scss */\n.after {\n  height: 26px;\n  display: block;\n  margin-left: 4px;\n  width: 4px;\n  background: #f5f5f5;\n  animation: myPrint 1s infinite ease-out; }\n\n@keyframes myPrint {\n  0% {\n    background: rgba(250, 250, 250, 0); }\n  50% {\n    background: #fafafa; }\n  100% {\n    background: rgba(250, 250, 250, 0); } }\n\n/* line 35, stdin */\n.text-print {\n  box-sizing: border-box;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #e7e1d4; }\n  /* line 43, stdin */\n  .text-print .center {\n    min-width: 20rem;\n    height: 30px;\n    display: flex;\n    flex-direction: row;\n    align-items: center; }");(function () {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _printText = require('../assets/js/printText');

  exports.default = {
    name: 'text-print',
    data: function data() {
      return {
        text: "\u628A\u9152\u795D\u4E1C\u98CE\uFF0C\u4E14\u5171\u4ECE\u5BB9\uFF0C\u5782\u6768\u7D2B\u964C\u6D1B\u57CE\u4E1C\u3002\u603B\u662F\u5F53\u65F6\u643A\u624B\u5904\uFF0C\u6E38\u904D\u82B3\u4E1B\u3002\u805A\u6563\u82E6\u5306\u5306\uFF0C\u6B64\u6068\u65E0\u7A77\u3002\u4ECA\u5E74\u82B1\u80DC\u53BB\u5E74\u7EA2\u3002\u53EF\u60DC\u660E\u5E74\u82B1\u66F4\u597D\uFF0C\u77E5\u4E0E\u8C01\u540C".split(/[，|。]/),
        att: new _printText.aText()
      };
    },
    created: function created() {},
    beforeMount: function beforeMount() {},
    mounted: function mounted() {
      this.att.start('.print-text', this.text);
    },
    beforeUpdate: function beforeUpdate() {},
    updated: function updated() {},
    beforeDestroy: function beforeDestroy() {},
    destroyed: function destroyed() {
      this.att = null;
    },
    methods: {} };
})();
if (module.exports.__esModule) module.exports = module.exports.default;
var __vue__options__ = typeof module.exports === "function" ? module.exports.options : module.exports;
if (__vue__options__.functional) {
  console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.");
}
__vue__options__.render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _vm._m(0);
};
__vue__options__.staticRenderFns = [function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "text-print" }, [_c('div', { staticClass: "center" }, [_c('span', { staticClass: "print-text" }), _vm._v(" "), _c('span', { staticClass: "after" })])]);
}];
if (module.hot) {
  (function () {
    var hotAPI = require("vue-hot-reload-api");
    hotAPI.install(require("vue"), true);
    if (!hotAPI.compatible) return;
    module.hot.accept();
    module.hot.dispose(__vueify_style_dispose__);
    if (!module.hot.data) {
      hotAPI.createRecord("data-v-cef6d268", __vue__options__);
    } else {
      hotAPI.reload("data-v-cef6d268", __vue__options__);
    }
  })();
}
},{"vueify/lib/insert-css":26,"../assets/js/printText":24,"vue-hot-reload-api":27,"vue":20}],0:[function(require,module,exports) {
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
},{}]},{},[0,15])