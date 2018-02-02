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
"use strict";var t=require("vueify/lib/insert-css").insert(".text-3d{z-index:2;color:#00bfff;font-size:8em;position:relative}.text-3d:before{z-index:3;color:#fafafa;text-shadow:3px 3px 10px #878787;transform-origin:0 100%}.text-3d:after,.text-3d:before{position:absolute;content:attr(data-text);transition:transform .3s}.text-3d:after{z-index:1;color:hsla(0,0%,56%,.3);left:0;top:0;transform-origin:0 50%}.text-3d:hover:before{transform:rotateY(40deg)}.text-3d:hover:after{transform:rotateX(20deg) rotateY(40deg)}.text-3d.right:before{transform-origin:50% 0}.text-3d.right:after{transform-origin:100% 0}.font-3D{box-sizing:border-box}");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={name:"font-3D",data:function(){return{textArr:[{text:"{"},{text:"C"},{text:"S"},{text:"S"},{text:"}",right:!0},{text:"《"},{text:"哈"},{text:"》",right:!0},{text:"㊎"},{text:"㊍"},{text:"㊌"},{text:"㊋"},{text:"㊏"}]}},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{}},module.exports.__esModule&&(module.exports=module.exports.default);var e="function"==typeof module.exports?module.exports.options:module.exports;e.render=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"font-3D"},[r("div",{attrs:{id:"show"}},t._l(t.textArr,function(e,o){return r("span",{key:o,staticClass:"text-3d",class:{right:e.right},attrs:{"data-text":e.text}},[t._v(t._s(e.text))])}))])},e.staticRenderFns=[];
},{"vueify/lib/insert-css":25}]},{},[14])