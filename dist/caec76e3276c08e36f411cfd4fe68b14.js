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
})({13:[function(require,module,exports) {
"use strict";

var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("/* line 85, stdin */\n.money-counter {\n  box-sizing: border-box;\n  font-size: 14px; }\n  /* line 88, stdin */\n  .money-counter .tip {\n    font-size: 16px;\n    color: #a1a1a1;\n    display: block;\n    margin: 10px 0; }\n  /* line 94, stdin */\n  .money-counter .input {\n    height: 30px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin: 10px 0; }\n    /* line 100, stdin */\n    .money-counter .input > span {\n      width: 100px;\n      display: block;\n      text-align: center; }\n    /* line 105, stdin */\n    .money-counter .input > input {\n      width: 100px;\n      height: 25px;\n      text-align: center; }");(function () {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'money-counter',
    data: function data() {
      return {
        pData: {
          user: {
            money: 4500,
            remain: 3500,
            ratio: 0.12
          },
          unit: {
            base: 2650,
            ratio: 0.12,
            max: 318,
            remain: 318
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
      countMoney: function countMoney() {
        var userMoney = this.pData.user.ratio * this.pData.unit.base;
        var unitMoney = this.pData.unit.ratio * this.pData.unit.base;
        this.pData.unit.remain = unitMoney;
        var tempMoney = unitMoney;
        if (unitMoney >= this.pData.unit.max) {
          tempMoney = unitMoney - this.pData.unit.max;
        } else {
          tempMoney = 0;
        }
        return this.pData.user.money + ' - (' + userMoney + ' + ' + tempMoney + ') = ' + (this.pData.user.money - (userMoney + tempMoney));
      }
    }
  };
})();
if (module.exports.__esModule) module.exports = module.exports.default;
var __vue__options__ = typeof module.exports === "function" ? module.exports.options : module.exports;
if (__vue__options__.functional) {
  console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.");
}
__vue__options__.render = function render() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "money-counter" }, [_c('h1', [_vm._v("公积金缴费计算")]), _vm._v(" "), _c('div', [_c('span', { staticClass: "tip" }, [_vm._v("个人")]), _vm._v(" "), _c('div', { staticClass: "input" }, [_c('span', [_vm._v("税前工资:")]), _vm._v(" "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.pData.user.money, expression: "pData.user.money" }], attrs: { "type": "number" }, domProps: { "value": _vm.pData.user.money }, on: { "input": function input($event) {
        if ($event.target.composing) {
          return;
        }_vm.$set(_vm.pData.user, "money", $event.target.value);
      } } })]), _vm._v(" "), _c('div', { staticClass: "input" }, [_c('span', [_vm._v("缴费比例:")]), _vm._v(" "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.pData.user.ratio, expression: "pData.user.ratio" }], attrs: { "type": "number" }, domProps: { "value": _vm.pData.user.ratio }, on: { "input": function input($event) {
        if ($event.target.composing) {
          return;
        }_vm.$set(_vm.pData.user, "ratio", $event.target.value);
      } } })]), _vm._v(" "), _c('div', { staticClass: "input" }, [_c('span', [_vm._v("税后工资:")]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.countMoney()))])])]), _vm._v(" "), _c('div', [_c('span', { staticClass: "tip" }, [_vm._v("单位")]), _vm._v(" "), _c('div', { staticClass: "input" }, [_c('span', [_vm._v("公积金基数:")]), _vm._v(" "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.pData.unit.base, expression: "pData.unit.base" }], attrs: { "type": "number" }, domProps: { "value": _vm.pData.unit.base }, on: { "input": function input($event) {
        if ($event.target.composing) {
          return;
        }_vm.$set(_vm.pData.unit, "base", $event.target.value);
      } } })]), _vm._v(" "), _c('div', { staticClass: "input" }, [_c('span', [_vm._v("缴费比例:")]), _vm._v(" "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.pData.unit.ratio, expression: "pData.unit.ratio" }], attrs: { "type": "number" }, domProps: { "value": _vm.pData.unit.ratio }, on: { "input": function input($event) {
        if ($event.target.composing) {
          return;
        }_vm.$set(_vm.pData.unit, "ratio", $event.target.value);
      } } })]), _vm._v(" "), _c('div', { staticClass: "input" }, [_c('span', [_vm._v("最高缴费额度:")]), _vm._v(" "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.pData.unit.max, expression: "pData.unit.max" }], attrs: { "type": "number" }, domProps: { "value": _vm.pData.unit.max }, on: { "input": function input($event) {
        if ($event.target.composing) {
          return;
        }_vm.$set(_vm.pData.unit, "max", $event.target.value);
      } } })]), _vm._v(" "), _c('div', { staticClass: "input" }, [_c('span', [_vm._v("应缴费额度:")]), _vm._v(" "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.pData.unit.remain, expression: "pData.unit.remain" }], attrs: { "type": "number" }, domProps: { "value": _vm.pData.unit.remain }, on: { "input": function input($event) {
        if ($event.target.composing) {
          return;
        }_vm.$set(_vm.pData.unit, "remain", $event.target.value);
      } } })])])]);
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
      hotAPI.createRecord("data-v-4e072b00", __vue__options__);
    } else {
      hotAPI.reload("data-v-4e072b00", __vue__options__);
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
},{}]},{},[0,13])