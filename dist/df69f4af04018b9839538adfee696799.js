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
})({14:[function(require,module,exports) {
"use strict";

var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("/* line 2, stdin */\n.mine {\n  user-select: none;\n  box-sizing: border-box;\n  background-color: #aaa;\n  min-height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column; }\n  /* line 15, stdin */\n  .mine .game-box {\n    cursor: cell;\n    width: 342px;\n    height: 342px;\n    border: 8px solid #341a1a;\n    background-color: #808080;\n    display: grid;\n    padding: 8px;\n    grid-gap: 8px;\n    grid-template-columns: repeat(9, 1fr);\n    grid-template-rows: repeat(9, 1fr);\n    grid-auto-flow: row; }\n    /* line 27, stdin */\n    .mine .game-box.two {\n      width: 684px;\n      height: 684px;\n      grid-template-columns: repeat(18, 1fr);\n      grid-template-rows: repeat(18, 1fr); }\n    /* line 34, stdin */\n    .mine .game-box.three {\n      width: 1216px;\n      height: 1216px;\n      grid-template-columns: repeat(32, 1fr);\n      grid-template-rows: repeat(32, 1fr); }\n    /* line 41, stdin */\n    .mine .game-box .grid {\n      width: 30px;\n      height: 30px;\n      background-color: #c0c0c0;\n      box-sizing: border-box;\n      box-shadow: 0 0 10px 2px #7f7e7e;\n      position: relative; }\n      /* line 48, stdin */\n      .mine .game-box .grid::after {\n        content: \"\";\n        display: block;\n        position: absolute;\n        background-color: #c0c0c0;\n        width: 30px;\n        height: 30px;\n        top: 0;\n        left: 0; }\n      /* line 58, stdin */\n      .mine .game-box .grid.dian {\n        background-color: #f9f9f9; }\n        /* line 60, stdin */\n        .mine .game-box .grid.dian::after {\n          content: none; }\n      /* line 64, stdin */\n      .mine .game-box .grid .number {\n        display: block;\n        line-height: 30px;\n        text-align: center;\n        font-size: 24px;\n        font-weight: bold;\n        color: #00f; }\n        /* line 71, stdin */\n        .mine .game-box .grid .number.two {\n          color: #008000; }\n        /* line 74, stdin */\n        .mine .game-box .grid .number.three {\n          color: #ff0000; }\n        /* line 77, stdin */\n        .mine .game-box .grid .number.four {\n          color: #000080; }\n      /* line 82, stdin */\n      .mine .game-box .grid.tip {\n        background-size: 60px;\n        background-repeat: no-repeat;\n        background-position: -80px -40px; }\n        /* line 87, stdin */\n        .mine .game-box .grid.tip.l {\n          background-position-x: -30px;\n          background-position-y: -30px; }\n        /* line 91, stdin */\n        .mine .game-box .grid.tip.w {\n          background-position-x: 0;\n          background-position-y: -30px; }\n        /* line 95, stdin */\n        .mine .game-box .grid.tip.q {\n          background-position-x: 0;\n          background-position-y: 0; }\n          /* line 98, stdin */\n          .mine .game-box .grid.tip.q::after {\n            content: none; }\n  /* line 105, stdin */\n  .mine .game-number {\n    margin: 20px 0;\n    display: flex;\n    flex-direction: row;\n    align-items: center; }\n    /* line 111, stdin */\n    .mine .game-number .qi, .mine .game-number .time {\n      display: block;\n      min-width: 90px;\n      height: 45px;\n      line-height: 45px;\n      font-size: 30px;\n      border: 1px solid black;\n      text-align: center;\n      margin: 0 20px; }\n    /* line 124, stdin */\n    .mine .game-number button {\n      border-radius: 50%;\n      width: 3rem;\n      height: 3rem;\n      outline: none;\n      border: none;\n      box-shadow: 0 0 10px 3px #756f6f;\n      background: yellow;\n      color: #161616; }\n    /* line 134, stdin */\n    .mine .game-number select {\n      height: 3rem;\n      width: 5rem;\n      font-size: 18px;\n      text-align: center;\n      padding-left: 1rem; }");(function () {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  document.oncontextmenu = function () {
    return false;
  };
  exports.default = {
    name: 'mine',
    data: function data() {
      return {
        gNum: 9 * 9,
        lNum: 10,
        qNum: 10,
        lv: 0,
        oArr: [{ name: '初级', value: 0 }, { name: '中级', value: 1 }, { name: '高级', value: 2 }],
        gameGe: [],
        tableClass: {
          width: '0px'
        },
        show: false,
        gameTime: 0,
        t: '',
        tan: false,
        bang: [{ name: 'Win', time: '12s' }],
        te: false
      };
    },
    created: function created() {},
    beforeMount: function beforeMount() {},
    mounted: function mounted() {
      this.createGame();
    },
    beforeUpdate: function beforeUpdate() {},
    updated: function updated() {},
    beforeDestroy: function beforeDestroy() {},
    destroyed: function destroyed() {},
    methods: {
      changeLv: function changeLv() {
        switch (this.lv) {
          case 0:
            this.gNum = 9 * 9;
            this.lNum = 10;
            this.qNum = 10;
            break;
          case 1:
            this.gNum = 18 * 18;
            this.lNum = 40;
            this.qNum = 40;
            break;
          case 2:
            this.gNum = 32 * 32;
            this.lNum = 99;
            this.qNum = 99;
            break;
        }
        return this.createGame();
      },
      createGame: function createGame() {
        var _this2 = this;

        var number = document.querySelectorAll('.grid').length;
        for (var i = 0; i < number; i++) {
          document.querySelectorAll('.grid')[i].classList.remove('dian');
        }
        this.show = 0;
        this.gameGe = new Array();
        this.gameTime = 0;
        this.qNum = this.lNum;
        clearTimeout(this.t);
        this.te = false;
        var rNum = function rNum() {
          return Math.floor(Math.random() * _this2.gNum);
        };

        var lArray = new Array();
        for (var a = 0; a < this.lNum; a++) {
          var temp = rNum();
          if (!lArray.includes(temp)) {
            lArray.push(temp);
          } else {
            a--;
          }
        }

        for (var _a = 0; _a < this.gNum; _a++) {
          var _temp = lArray.indexOf(_a);
          var tempObj = {
            l: 0,
            d: 0,
            b: 0
          };
          if (_temp !== -1) {
            lArray.splice(_temp, 1);
            tempObj.l = 1;
          }
          this.gameGe.push(tempObj);
        }
        this.createShowNum();
      },
      createShowNum: function createShowNum() {
        var tempLength = this.gameGe.length;
        for (var a = 0; a < tempLength; a++) {
          var tempCNum = 0;
          var tempArr = this.x9(a, Math.sqrt(this.gNum), tempLength);
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = tempArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var obj = _step.value;

              if (this.gameGe[obj].l) {
                tempCNum++;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          this.gameGe[a].l === 1 ? this.gameGe[a].s = false : this.gameGe[a].s = tempCNum;
        }
      },
      x9: function x9(n, gNum, pStr) {
        var a = parseInt(n - gNum),
            b = parseInt(n + gNum);
        var tempArr = new Array();
        if (n % gNum === 0) {
          tempArr = [a, parseInt(a + 1), n, parseInt(n + 1), b, parseInt(b + 1)];
        } else if (n % gNum === parseInt(gNum - 1)) {
          tempArr = [parseInt(a - 1), a, parseInt(n - 1), n, parseInt(b - 1), b];
        } else {
          tempArr = [parseInt(a - 1), a, parseInt(a + 1), parseInt(n - 1), n, parseInt(n + 1), parseInt(b - 1), b, parseInt(b + 1)];
        }
        var arr = tempArr.filter(function (item) {
          return item >= 0 && item < parseInt(pStr);
        });
        return arr;
      },
      gameWin: function gameWin() {
        var qi = document.querySelectorAll('.q').length;
        var d = document.querySelectorAll('.dian').length;
        var boolean = parseInt(qi) === parseInt(this.lNum) && (parseInt(qi + d) === parseInt(this.gNum) || parseInt(qi + d) === parseInt(this.gNum - 1));
        if (boolean) {
          clearTimeout(this.t);
          var name = prompt('请输入您的大名', '');
          this.bang.push({ name: name === '' ? '匿名' : name, time: this.gameTime + 's' });
          this.createGame();
          this.bang.sort(function (v1, v2) {
            return parseInt(v1.time) - parseInt(v2.time);
          });
          this.tan = true;
        }
        return '';
      },
      gameOver: function gameOver() {
        var number = document.querySelectorAll('.grid').length;
        for (var i = 0; i < number; i++) {
          document.querySelectorAll('.grid')[i].classList.add('dian');
        }
        clearTimeout(this.t);
      },
      createTime: function createTime() {
        this.gameTime++;
        this.t = setTimeout(this.createTime, 1000);
      },
      test: function test(index, e) {
        var d = this.gameGe[index].d,
            b = this.gameGe[index].b,
            s = this.gameGe[index].s,
            l = this.gameGe[index].l;

        if (!this.te) {
          this.createTime();
          this.te = true;
        } else if (this.gameTime === 0) {
          this.te = false;
        }

        if (e.which === 1) {
          if (b) {
            return false;
          } else {
            if (s === 0) {
              var Tcc = function Tcc(arr) {
                var aLength = zeroArr.length;
                arr.forEach(function (item) {
                  _this.x9(item, Math.sqrt(_this.gNum), _this.gameGe.length).forEach(function (i) {
                    if (_this.gameGe[i].s === 0 && _this.gameGe[i].b === 0) {
                      if (!zeroArr.includes(i)) {
                        zeroArr.push(i);
                      }
                    } else if (_this.gameGe[i].s < 3 && _this.gameGe[i].b === 0) {
                      _this.gameGe[i].d = 1;
                    }
                  });
                });
                var bLength = zeroArr.length;
                if (bLength > aLength) {
                  Tcc(zeroArr);
                }
              };

              var zeroArr = new Array();
              zeroArr.push(index);
              var _this = this;
              Tcc(zeroArr);

              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {

                for (var _iterator2 = zeroArr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var _b = _step2.value;

                  this.gameGe[_b].d = 1;
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }
            }
            this.gameGe[index].d = 1;
            if (l === 1) {
              this.gameOver();
              return 0;
            }
          }
        } else if (e.which === 3) {
          if (!d) {
            var number = document.querySelectorAll('.q').length;
            if (this.gameGe[index].b) {
              this.gameGe[index].b = false;
              number -= 1;
            } else {
              if (number >= this.lNum) {
                return this.gameWin();
              }
              this.gameGe[index].b = true;
              number += 1;
            }
            this.qNum = this.lNum - number;
          }
        }
        return this.gameWin();
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
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "mine" }, [_c('div', { staticClass: "game-number" }, [_c('span', { staticClass: "qi" }, [_vm._v(_vm._s(_vm.qNum))]), _vm._v(" "), _c('button', { on: { "click": function click($event) {
        _vm.createGame();
      } } }, [_vm._v("重来")]), _vm._v(" "), _c('span', { staticClass: "time" }, [_vm._v(_vm._s(_vm.gameTime) + _vm._s(_vm.gameWin()))]), _vm._v(" "), _c('select', { directives: [{ name: "model", rawName: "v-model", value: _vm.lv, expression: "lv" }], on: { "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;return val;
        });_vm.lv = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.changeLv] } }, _vm._l(_vm.oArr, function (o) {
    return _c('option', { key: o.value, domProps: { "value": o.value } }, [_vm._v(_vm._s(o.name))]);
  }))]), _vm._v(" "), _c('div', { staticClass: "game-box", class: { two: _vm.lv === 1, three: _vm.lv === 2 } }, _vm._l(_vm.gameGe, function (g, index) {
    return _c('div', { key: g.id, staticClass: "grid background tip", class: { l: g.l, dian: g.d, q: g.b }, on: { "mousedown": function mousedown($event) {
          _vm.test(index, $event);
        } } }, [g.s && !g.b ? _c('span', { staticClass: "number", class: { two: g.s === 2, three: g.s === 3, four: g.s === 4 } }, [_vm._v(_vm._s(g.s))]) : _vm._e()]);
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
      hotAPI.createRecord("data-v-2162bb52", __vue__options__);
    } else {
      hotAPI.reload("data-v-2162bb52", __vue__options__);
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
},{}]},{},[0,14])