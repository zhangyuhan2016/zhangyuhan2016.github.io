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
})({20:[function(require,module,exports) {
"use strict";var t=require("vueify/lib/insert-css").insert('.weui-picker__bd{display:-webkit-box;display:flex;position:relative;background-color:#fff;height:238px;overflow:hidden}.weui-picker__group{-webkit-box-flex:1;flex:1;position:relative;height:100%}.weui-picker__mask{top:0;height:100%;margin:0 auto;background:linear-gradient(180deg,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6)),linear-gradient(0deg,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6));background-position:top,bottom;background-size:100% 102px;background-repeat:no-repeat;-webkit-transform:translateZ(0);transform:translateZ(0)}.weui-picker__indicator,.weui-picker__mask{position:absolute;left:0;width:100%;z-index:3}.weui-picker__indicator{height:34px;top:102px}.weui-picker__indicator:before{top:0;border-top:1px solid #e5e5e5;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-picker__indicator:after,.weui-picker__indicator:before{content:" ";position:absolute;left:0;right:0;height:1px;color:#e5e5e5}.weui-picker__indicator:after{bottom:0;border-bottom:1px solid #e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.weui-picker__content{position:absolute;top:0;left:0;width:100%;transition:all .3s}.weui-picker__item{padding:0;height:34px;line-height:34px;text-align:center;color:#000;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bg{width:100%;z-index:5000}.bg,.weui-mask{position:fixed;left:0;bottom:0}.weui-mask{z-index:1000;top:0;right:0;background:rgba(0,0,0,.6)}');Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={name:"picker",data:function(){return{picData:{default:0,data:["1","2","3","4","5","6","7","1","2","3","4","5","6","7","1","2","3","4","5","6","7"],height:34},pageData:{start:"",end:""}}},created:function(){},beforeMount:function(){},mounted:function(){this.createPicker()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{createPicker:function(){this.$refs.box.style.transform="translate3d(0px, "+(this.picData.default+3)*this.picData.height+"px, 0px)"},cIndex:function(t){},pMove:function(t){var e=this.$refs.box.style.transform.split("px,")[1]||0,i=Number(e)+(Number(t.targetTouches[0].pageY)-Number(this.pageData.start));this.pageData.start=t.targetTouches[0].pageY,this.$refs.box.style.transform="translate3d(0px, "+i+"px, 0px)",t.preventDefault()},pEnd:function(){var t=this.picData.data.length,e=this.$refs.box.style.transform.split("px,")[1]||0,i=Math.round(e/this.picData.height);i<4-t&&(i=4-t),i>3&&(i=3),this.$refs.box.style.transform="translate3d(0px, "+34*i+"px, 0px)"},pStart:function(t){this.pageData.start=t.targetTouches[0].pageY}}},module.exports.__esModule&&(module.exports=module.exports.default);var e="function"==typeof module.exports?module.exports.options:module.exports;e.render=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"weui-mask"}),t._v(" "),i("div",{staticClass:"bg"},[i("div",{staticClass:"weui-picker__bd"},[i("div",{staticClass:"weui-picker__group",on:{touchstart:t.pStart,touchmove:t.pMove,touchend:t.pEnd}},[i("div",{staticClass:"weui-picker__mask"}),t._v(" "),i("div",{staticClass:"weui-picker__indicator"}),t._v(" "),i("div",{ref:"box",staticClass:"weui-picker__content",staticStyle:{transform:"translate3d(0px, 0px, 0px)",transition:"all 0.3s"}},t._l(t.picData.data,function(e,r){return i("div",{key:r,ref:"a"+r,refInFor:!0,staticClass:"weui-picker__item",attrs:{id:"a"+r},on:{click:function(e){t.cIndex(r)}}},[t._v(t._s(e)+"\n                    ")])}))])])])])},e.staticRenderFns=[];
},{"vueify/lib/insert-css":15}]},{},[20])