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
})({12:[function(require,module,exports) {
"use strict";var t=require("vueify/lib/insert-css").insert(".money-counter{box-sizing:border-box;font-size:14px}.money-counter .tip{font-size:16px;color:#a1a1a1;display:block;margin:10px 0}.money-counter .input{height:30px;display:flex;flex-direction:row;align-items:center;margin:10px 0}.money-counter .input>span{width:100px;display:block;text-align:center}.money-counter .input>input{width:100px;height:25px;text-align:center}");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={name:"money-counter",data:function(){return{pData:{user:{money:4500,remain:3500,ratio:.12},unit:{base:2650,ratio:.12,max:318,remain:318}}}},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{countMoney:function(){var t=this.pData.user.ratio*this.pData.unit.base,e=this.pData.unit.ratio*this.pData.unit.base;this.pData.unit.remain=e;var a=e;return a=e>=this.pData.unit.max?e-this.pData.unit.max:0,this.pData.user.money+" - ("+t+" + "+a+") = "+(this.pData.user.money-(t+a))}}},module.exports.__esModule&&(module.exports=module.exports.default);var e="function"==typeof module.exports?module.exports.options:module.exports;e.render=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"money-counter"},[a("h1",[t._v("公积金缴费计算")]),t._v(" "),a("div",[a("span",{staticClass:"tip"},[t._v("个人")]),t._v(" "),a("div",{staticClass:"input"},[a("span",[t._v("税前工资:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.pData.user.money,expression:"pData.user.money"}],attrs:{type:"number"},domProps:{value:t.pData.user.money},on:{input:function(e){e.target.composing||t.$set(t.pData.user,"money",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input"},[a("span",[t._v("缴费比例:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.pData.user.ratio,expression:"pData.user.ratio"}],attrs:{type:"number"},domProps:{value:t.pData.user.ratio},on:{input:function(e){e.target.composing||t.$set(t.pData.user,"ratio",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input"},[a("span",[t._v("税后工资:")]),t._v(" "),a("div",[t._v(t._s(t.countMoney()))])])]),t._v(" "),a("div",[a("span",{staticClass:"tip"},[t._v("单位")]),t._v(" "),a("div",{staticClass:"input"},[a("span",[t._v("公积金基数:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.pData.unit.base,expression:"pData.unit.base"}],attrs:{type:"number"},domProps:{value:t.pData.unit.base},on:{input:function(e){e.target.composing||t.$set(t.pData.unit,"base",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input"},[a("span",[t._v("缴费比例:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.pData.unit.ratio,expression:"pData.unit.ratio"}],attrs:{type:"number"},domProps:{value:t.pData.unit.ratio},on:{input:function(e){e.target.composing||t.$set(t.pData.unit,"ratio",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input"},[a("span",[t._v("最高缴费额度:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.pData.unit.max,expression:"pData.unit.max"}],attrs:{type:"number"},domProps:{value:t.pData.unit.max},on:{input:function(e){e.target.composing||t.$set(t.pData.unit,"max",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input"},[a("span",[t._v("应缴费额度:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.pData.unit.remain,expression:"pData.unit.remain"}],attrs:{type:"number"},domProps:{value:t.pData.unit.remain},on:{input:function(e){e.target.composing||t.$set(t.pData.unit,"remain",e.target.value)}}})])])])},e.staticRenderFns=[];
},{"vueify/lib/insert-css":25}]},{},[12])