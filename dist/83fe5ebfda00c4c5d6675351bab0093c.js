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
})({10:[function(require,module,exports) {
var e=exports.cache={};function t(){}exports.insert=function(n){if(e[n])return t;e[n]=!0;var r=document.createElement("style");return r.setAttribute("type","text/css"),"textContent"in r?r.textContent=n:r.styleSheet.cssText=n,document.getElementsByTagName("head")[0].appendChild(r),function(){document.getElementsByTagName("head")[0].removeChild(r),e[n]=!1}};
},{}],20:[function(require,module,exports) {
"use strict";var t=require("vueify/lib/insert-css").insert(".get-password{box-sizing:border-box;background-color:#eaeaea;min-height:100vh;max-width:640px;padding:20px 10px;margin:0 auto;font-family:Arial}.get-password .tip p{font-size:18px;line-height:30px}.get-password .rule-setting .tip{font-size:16px;text-align:center}.get-password .rule-setting input{max-width:60px}.get-password .rule-setting>div,.get-password .setting>div{width:100%;display:flex;flex-direction:row;align-items:center;padding-bottom:20px}.get-password .rule-setting>div:first-child,.get-password .setting>div:first-child{padding-top:20px}.get-password .rule-setting>div>span,.get-password .setting>div>span{display:block;width:6rem;text-align:right;padding-right:40px;font-size:20px}.get-password .rule-setting>div>input,.get-password .rule-setting>div select,.get-password .setting>div>input,.get-password .setting>div select{flex:1;height:40px;text-align:center;font-size:18px;outline:none;border:0;box-shadow:inset 0 0 5px 2px #d1d1d1}.get-password .rule-setting>div>select,.get-password .setting>div>select{max-width:180px;padding-left:54px}.get-password .password{display:flex;width:100%;align-items:center;justify-content:center}.get-password .password textarea{width:90%;font-size:30px;line-height:50px;min-height:50px;box-sizing:border-box;padding:5px;background-color:#eaeaea;color:#000;font-weight:700}");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={name:"get-password",data:function(){return{password:"",setting:{key:"",ac:"",acType:"字符加密",type:[{name:"字符加密",rule:[{n:"最小码点",m:"33"},{n:"最大码点",m:"125"}]}]}}},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{toN:function(t){return Number.isNaN(Number(t))?Array.from(t).map(function(t){return Number.isNaN(Number(t))?t.codePointAt().toString()[0]:t}).join("").slice(0,15):t},createPassword:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"网站前俩位字母",e=t[0].codePointAt(),n=t[1].codePointAt(),i=this.toN(this.setting.key);if(e===n){var s=String(e)[0]+String(n)[0];e=parseInt(s+String(i)[s])}return(e+n)%2?e*i/n:n*i/e},createStr:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:33,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:125,i=t.length%2?t+"0":t,s=i.replace(/(.{2})/g,"$1^").split("^");s.length=i.length/2;var r="";return s.forEach(function(t){var i=parseInt(t),s=i;i<e&&(s=n-i),r+=String.fromCodePoint(parseInt(s))}),r},getPw:function(t){if(t&&2===this.setting.ac.length)return this.createStr(parseInt(this.createPassword(t)).toString(),this.setting.type[0].rule[0].m,this.setting.type[0].rule[1].m)}}},module.exports.__esModule&&(module.exports=module.exports.default);var e="function"==typeof module.exports?module.exports.options:module.exports;e.render=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"get-password"},[n("div",{staticClass:"setting"},[n("div",[n("span",[t._v("口令")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.setting.key,expression:"setting.key"}],attrs:{type:"password",placeholder:"天不知地不知你知的基础口令",maxlength:"15"},domProps:{value:t.setting.key},on:{input:function(e){e.target.composing||t.$set(t.setting,"key",e.target.value)}}})]),t._v(" "),n("div",[n("span",[t._v("网站缩写")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.setting.ac,expression:"setting.ac"}],attrs:{type:"text",placeholder:"两个字符",maxlength:"2"},domProps:{value:t.setting.ac},on:{input:function(e){e.target.composing||t.$set(t.setting,"ac",e.target.value)}}})]),t._v(" "),n("div",[n("span",[t._v("生成规则")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.setting.acType,expression:"setting.acType"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.setting,"acType",e.target.multiple?n:n[0])}}},[n("option",{attrs:{disabled:"",value:""}},[t._v("请选择")]),t._v(" "),t._l(t.setting.type,function(e,i){return n("option",{key:i},[t._v(t._s(e.name))])})],2)])]),t._v(" "),t._l(t.setting.type,function(e,i){return n("div",{directives:[{name:"show",rawName:"v-show",value:t.setting.acType===e.name,expression:"setting.acType === item.name"}],key:i,staticClass:"rule-setting"},[t._m(0,!0),t._v(" "),t._l(e.rule,function(e,i){return n("div",{key:i},[n("span",[t._v(t._s(e.n))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.m,expression:"a.m"}],attrs:{type:"text"},domProps:{value:e.m},on:{input:function(n){n.target.composing||t.$set(e,"m",n.target.value)}}})])})],2)}),t._v(" "),n("div",{staticClass:"password"},[n("textarea",{attrs:{placeholder:"标志位",disabled:""},domProps:{innerHTML:t._s(t.getPw(this.setting.ac))}})]),t._v(" "),t._m(1)],2)},e.staticRenderFns=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",{staticClass:"tip"},[this._v("设置")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tip"},[n("p",[t._v("\n        使用示例：\n        "),n("br"),t._v("口令: 一行白鹭上青天\n        "),n("br"),t._v("网站缩写: gg\n        "),n("br"),t._v("通过设置以上参数,会生成"),n("strong",[t._v("标志位")]),t._v(" "),n("br"),t._v("假如生成"),n("strong",[t._v("qDI_")]),t._v(" "),n("br"),t._v("把标志位放在密码的任意位置 "),n("br"),t._v("xxxxx(标志位): "),n("strong",[t._v("666888qDI_")]),t._v(" "),n("br"),n("br"),t._v("最大最小码点是匹配Unicode码点,33-125是字母加常见特殊符号,"),n("strong",[t._v("范围过小会导致密码不好输入")])])])}];
},{"vueify/lib/insert-css":10}]},{},[20])