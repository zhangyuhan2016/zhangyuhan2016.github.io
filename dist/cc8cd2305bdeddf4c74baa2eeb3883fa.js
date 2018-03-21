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
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function i(){e(this,i),this.i=0,this.index=0,this.data=[],this.Selector="Selector",this.temp="一个初始值"}return t(i,[{key:"add",value:function(){var t=this,e=this.temp;if(!(this.i<e.length))return this.i=0,setTimeout(function(){t.del()},2e3);var i=e.substring(0,++this.i);document.querySelector(this.Selector).innerText=i,setTimeout(function(){t.add()},200)}},{key:"del",value:function(){var t=this,e=document.querySelector(this.Selector).innerText;e.length?(document.querySelector(this.Selector).innerText=e.substring(0,e.length-1),setTimeout(function(){t.del()},200)):setTimeout(function(){t.main()},1e3)}},{key:"main",value:function(){if(!(this.index<this.data.length))return this.index=0,this.main();this.temp=this.data[this.index++],this.add()}},{key:"start",value:function(t,e){this.Selector=t,this.data=e,this.main()}}]),i}();exports.aText=i;
},{}],13:[function(require,module,exports) {
"use strict";var t=require("vueify/lib/insert-css").insert(".print-text{font-size:30px;color:#262626}.after{height:26px;display:block;margin-left:4px;width:4px;background:#f5f5f5;animation:myPrint 1s infinite ease-out}@keyframes myPrint{0%{background:hsla(0,0%,98%,0)}50%{background:#fafafa}to{background:hsla(0,0%,98%,0)}}.text-print{box-sizing:border-box;height:100vh;width:100vw;display:flex;align-items:center;justify-content:center;background-color:#e7e1d4}.text-print .center{min-width:20rem;height:30px;display:flex;flex-direction:row;align-items:center}");!function(){Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../assets/js/printText");exports.default={name:"text-print",data:function(){return{text:"把酒祝东风，且共从容，垂杨紫陌洛城东。总是当时携手处，游遍芳丛。聚散苦匆匆，此恨无穷。今年花胜去年红。可惜明年花更好，知与谁同".split(/[，|。]/),att:new t.aText}},created:function(){},beforeMount:function(){},mounted:function(){this.att.start(".print-text",this.text)},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){this.att=null},methods:{}}}(),module.exports.__esModule&&(module.exports=module.exports.default);var e="function"==typeof module.exports?module.exports.options:module.exports;e.render=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},e.staticRenderFns=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-print"},[n("div",{staticClass:"center"},[n("span",{staticClass:"print-text"}),t._v(" "),n("span",{staticClass:"after"})])])}];
},{"vueify/lib/insert-css":10,"../assets/js/printText":23}]},{},[13])