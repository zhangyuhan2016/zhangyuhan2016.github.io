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
"use strict";var e=require("vueify/lib/insert-css").insert('.money-counter{box-sizing:border-box;font-family:Tahoma}.money-counter *{font-size:20px}.money-counter section{margin:10px 0}.money-counter .sb .name{width:8rem;text-align:center;display:inline-block}.money-counter .sb .money{width:6rem;text-align:right;display:inline-block}.money-counter .sb .money.all{width:10rem}.money-counter .sb .ratio{width:5rem;text-align:center;display:inline-block}.money-counter .sb .ratio:before{content:"("}.money-counter .sb .ratio:after{content:"%)";margin-left:-.7rem}.money-counter .sb input{width:3rem;border:0}.money-counter label{width:8rem;text-align:center;display:inline-block}.money-counter input{text-align:right;height:30px;width:100px}');Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={name:"money-counter",data:function(){return{income:{before:4500,after:0,other:0,us:{money:0,ratio:3}},sb:{base:3057.45,money:[],option:[{name:"养老保险",user:{money:0,ratio:8},org:{money:0,ratio:19}},{name:"医疗保险",user:{money:0,ratio:2},org:{money:0,ratio:8}},{name:"失业保险",user:{money:0,ratio:.3},org:{money:0,ratio:.7}},{name:"工伤保险",user:{money:0,ratio:0},org:{money:0,ratio:.5}},{name:"生育保险",user:{money:0,ratio:0},org:{money:0,ratio:1}}]},house:{base:3500,user:{money:0,ratio:12},org:{money:0,ratio:12}}}},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},computed:{sbMoney:function(){var e=[[],[]];this.sb.option.forEach(function(o){e[0].push(o.user.money),e[1].push(o.org.money)});var o=e.map(function(e){return e.reduce(function(e,o){return Number(e)+Number(o)})});this.income.us.money=this.income.before-o[0]-3500>0?((this.income.before-o[0]-3500)*this.income.us.ratio/100).toFixed(2):0;var t=o[0]+Number(this.house.user.money)+Number(this.income.us.money);return this.income.after=this.income.before-t-this.income.other,o[0]=t,o}},methods:{}},module.exports.__esModule&&(module.exports=module.exports.default);var o="function"==typeof module.exports?module.exports.options:module.exports;o.render=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"money-counter"},[t("h2",[e._v("五险一金计算器")]),e._v(" "),t("section",[t("label",[e._v("税前薪资")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.income.before,expression:"income.before"}],attrs:{type:"number"},domProps:{value:e.income.before},on:{input:function(o){o.target.composing||e.$set(e.income,"before",o.target.value)}}})]),e._v(" "),t("section",[t("label",[e._v("其他支出")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.income.other,expression:"income.other"}],attrs:{type:"number"},domProps:{value:e.income.other},on:{input:function(o){o.target.composing||e.$set(e.income,"other",o.target.value)}}})]),e._v(" "),t("section",[t("label",[e._v("税后薪资")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.income.after,expression:"income.after"}],attrs:{type:"number"},domProps:{value:e.income.after},on:{input:function(o){o.target.composing||e.$set(e.income,"after",o.target.value)}}})]),e._v(" "),t("section",[t("label",[e._v("社保基数")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.sb.base,expression:"sb.base"}],attrs:{type:"number"},domProps:{value:e.sb.base},on:{input:function(o){o.target.composing||e.$set(e.sb,"base",o.target.value)}}})]),e._v(" "),t("section",[t("label",[e._v("公积金基数")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.house.base,expression:"house.base"}],attrs:{type:"number"},domProps:{value:e.house.base},on:{input:function(o){o.target.composing||e.$set(e.house,"base",o.target.value)}}})]),e._v(" "),e._l(e.sb.option,function(o){return t("section",{staticClass:"sb"},[t("span",{staticClass:"name"},[e._v(e._s(o.name))]),e._v(" "),t("span",{staticClass:"money"},[e._v(e._s(o.user.money=(o.user.ratio/100*e.sb.base).toFixed(2)))]),e._v(" "),t("label",{staticClass:"ratio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:o.user.ratio,expression:"item.user.ratio"}],attrs:{type:"number"},domProps:{value:o.user.ratio},on:{input:function(t){t.target.composing||e.$set(o.user,"ratio",t.target.value)}}})]),e._v(" "),t("span",{staticClass:"money"},[e._v(e._s(o.org.money=(o.org.ratio/100*e.sb.base).toFixed(2)))]),e._v(" "),t("label",{staticClass:"ratio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:o.org.ratio,expression:"item.org.ratio"}],attrs:{type:"number"},domProps:{value:o.org.ratio},on:{input:function(t){t.target.composing||e.$set(o.org,"ratio",t.target.value)}}})])])}),e._v(" "),t("section",{staticClass:"sb"},[t("span",{staticClass:"name"},[e._v("公积金")]),e._v(" "),t("span",{staticClass:"money"},[e._v(e._s(e.house.user.money=(e.house.user.ratio/100*e.house.base).toFixed(2)))]),e._v(" "),t("label",{staticClass:"ratio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.house.user.ratio,expression:"house.user.ratio"}],attrs:{type:"number"},domProps:{value:e.house.user.ratio},on:{input:function(o){o.target.composing||e.$set(e.house.user,"ratio",o.target.value)}}})]),e._v(" "),t("span",{staticClass:"money"},[e._v(e._s(e.house.org.money=(e.house.org.ratio/100*e.house.base).toFixed(2)))]),e._v(" "),t("label",{staticClass:"ratio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.house.org.ratio,expression:"house.org.ratio"}],attrs:{type:"number"},domProps:{value:e.house.org.ratio},on:{input:function(o){o.target.composing||e.$set(e.house.org,"ratio",o.target.value)}}})])]),e._v(" "),t("section",{staticClass:"sb"},[t("span",{staticClass:"name"},[e._v("个税")]),e._v(" "),t("span",{staticClass:"money"},[e._v(e._s(e.income.us.money))]),e._v(" "),t("label",{staticClass:"ratio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.income.us.ratio,expression:"income.us.ratio"}],attrs:{type:"number"},domProps:{value:e.income.us.ratio},on:{input:function(o){o.target.composing||e.$set(e.income.us,"ratio",o.target.value)}}})])]),e._v(" "),t("section",{staticClass:"sb"},[t("span",{staticClass:"name"},[e._v("共计")]),e._v(" "),t("span",{staticClass:"money all"},[e._v(e._s(e.sbMoney[0]+" ("+(e.sbMoney[0]/e.income.before*100).toFixed(2)+"%)"))]),e._v(" "),t("span",{staticClass:"money all"},[e._v(e._s(e.sbMoney[1]+Number(e.house.org.money)))])])],2)},o.staticRenderFns=[];
},{"vueify/lib/insert-css":10}]},{},[14])