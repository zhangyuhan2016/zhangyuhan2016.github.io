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
})({22:[function(require,module,exports) {
"use strict";var e=require("vueify/lib/insert-css").insert('.mine{user-select:none;box-sizing:border-box;background-color:#aaa;min-height:100vh;width:100vw;display:flex;align-items:center;justify-content:center;flex-direction:column}.mine .game-box{cursor:cell;width:342px;height:342px;border:8px solid #341a1a;background-color:gray;display:grid;padding:8px;grid-gap:8px;grid-template-columns:repeat(9,1fr);grid-template-rows:repeat(9,1fr);grid-auto-flow:row}.mine .game-box.two{width:684px;height:684px;grid-template-columns:repeat(18,1fr);grid-template-rows:repeat(18,1fr)}.mine .game-box.three{width:1216px;height:1216px;grid-template-columns:repeat(32,1fr);grid-template-rows:repeat(32,1fr)}.mine .game-box .grid{width:30px;height:30px;background-color:silver;box-sizing:border-box;box-shadow:0 0 10px 2px #7f7e7e;position:relative}.mine .game-box .grid:after{content:"";display:block;position:absolute;background-color:silver;width:30px;height:30px;top:0;left:0}.mine .game-box .grid.dian{background-color:#f9f9f9}.mine .game-box .grid.dian:after{content:none}.mine .game-box .grid .number{display:block;line-height:30px;text-align:center;font-size:24px;font-weight:700;color:#00f}.mine .game-box .grid .number.two{color:green}.mine .game-box .grid .number.three{color:red}.mine .game-box .grid .number.four{color:navy}.mine .game-box .grid.tip{background-size:60px;background-repeat:no-repeat;background-position:-80px -40px}.mine .game-box .grid.tip.l{background-position-x:-30px;background-position-y:-30px}.mine .game-box .grid.tip.w{background-position-x:0;background-position-y:-30px}.mine .game-box .grid.tip.q{background-position-x:0;background-position-y:0}.mine .game-box .grid.tip.q:after{content:none}.mine .game-number{margin:20px 0;display:flex;flex-direction:row;align-items:center}.mine .game-number .qi,.mine .game-number .time{display:block;min-width:90px;height:45px;line-height:45px;font-size:30px;border:1px solid #000;text-align:center;margin:0 20px}.mine .game-number button{border-radius:50%;width:3rem;height:3rem;outline:none;border:none;box-shadow:0 0 10px 3px #756f6f;background:#ff0;color:#161616}.mine .game-number select{height:3rem;width:5rem;font-size:18px;text-align:center;padding-left:1rem}');Object.defineProperty(exports,"__esModule",{value:!0}),document.oncontextmenu=function(){return!1},exports.default={name:"mine",data:function(){return{gNum:81,lNum:10,qNum:10,lv:0,oArr:[{name:"初级",value:0},{name:"中级",value:1},{name:"高级",value:2}],gameGe:[],tableClass:{width:"0px"},show:!1,gameTime:0,t:"",tan:!1,bang:[{name:"Win",time:"12s"}],te:!1}},created:function(){},beforeMount:function(){},mounted:function(){this.createGame()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{changeLv:function(){switch(this.lv){case 0:this.gNum=81,this.lNum=10,this.qNum=10;break;case 1:this.gNum=324,this.lNum=40,this.qNum=40;break;case 2:this.gNum=1024,this.lNum=99,this.qNum=99}return this.createGame()},createGame:function(){for(var e=this,t=document.querySelectorAll(".grid").length,i=0;i<t;i++)document.querySelectorAll(".grid")[i].classList.remove("dian");this.show=0,this.gameGe=new Array,this.gameTime=0,this.qNum=this.lNum,clearTimeout(this.t),this.te=!1;for(var r=new Array,n=0;n<this.lNum;n++){var a=Math.floor(Math.random()*e.gNum);r.includes(a)?n--:r.push(a)}for(var o=0;o<this.gNum;o++){var s=r.indexOf(o),m={l:0,d:0,b:0};-1!==s&&(r.splice(s,1),m.l=1),this.gameGe.push(m)}this.createShowNum()},createShowNum:function(){for(var e=this.gameGe.length,t=0;t<e;t++){var i=0,r=this.x9(t,Math.sqrt(this.gNum),e),n=!0,a=!1,o=void 0;try{for(var s,m=r[Symbol.iterator]();!(n=(s=m.next()).done);n=!0){var l=s.value;this.gameGe[l].l&&i++}}catch(e){a=!0,o=e}finally{try{!n&&m.return&&m.return()}finally{if(a)throw o}}1===this.gameGe[t].l?this.gameGe[t].s=!1:this.gameGe[t].s=i}},x9:function(e,t,i){var r=parseInt(e-t),n=parseInt(e+t);return new Array,(e%t==0?[r,parseInt(r+1),e,parseInt(e+1),n,parseInt(n+1)]:e%t===parseInt(t-1)?[parseInt(r-1),r,parseInt(e-1),e,parseInt(n-1),n]:[parseInt(r-1),r,parseInt(r+1),parseInt(e-1),e,parseInt(e+1),parseInt(n-1),n,parseInt(n+1)]).filter(function(e){return e>=0&&e<parseInt(i)})},gameWin:function(){var e=document.querySelectorAll(".q").length,t=document.querySelectorAll(".dian").length;if(parseInt(e)===parseInt(this.lNum)&&(parseInt(e+t)===parseInt(this.gNum)||parseInt(e+t)===parseInt(this.gNum-1))){clearTimeout(this.t);var i=prompt("请输入您的大名","");this.bang.push({name:""===i?"匿名":i,time:this.gameTime+"s"}),this.createGame(),this.bang.sort(function(e,t){return parseInt(e.time)-parseInt(t.time)}),this.tan=!0}return""},gameOver:function(){for(var e=document.querySelectorAll(".grid").length,t=0;t<e;t++)document.querySelectorAll(".grid")[t].classList.add("dian");clearTimeout(this.t)},createTime:function(){this.gameTime++,this.t=setTimeout(this.createTime,1e3)},test:function(e,t){var i=this.gameGe[e].d,r=this.gameGe[e].b,n=this.gameGe[e].s,a=this.gameGe[e].l;if(this.te?0===this.gameTime&&(this.te=!1):(this.createTime(),this.te=!0),1===t.which){if(r)return!1;if(0===n){var o=new Array;o.push(e);var s=this;!function e(t){var i=o.length;t.forEach(function(e){s.x9(e,Math.sqrt(s.gNum),s.gameGe.length).forEach(function(e){0===s.gameGe[e].s&&0===s.gameGe[e].b?o.includes(e)||o.push(e):s.gameGe[e].s<3&&0===s.gameGe[e].b&&(s.gameGe[e].d=1)})}),o.length>i&&e(o)}(o);var m=!0,l=!1,u=void 0;try{for(var g,c=o[Symbol.iterator]();!(m=(g=c.next()).done);m=!0){var h=g.value;this.gameGe[h].d=1}}catch(e){l=!0,u=e}finally{try{!m&&c.return&&c.return()}finally{if(l)throw u}}}if(this.gameGe[e].d=1,1===a)return this.gameOver(),0}else if(3===t.which&&!i){var d=document.querySelectorAll(".q").length;if(this.gameGe[e].b)this.gameGe[e].b=!1,d-=1;else{if(d>=this.lNum)return this.gameWin();this.gameGe[e].b=!0,d+=1}this.qNum=this.lNum-d}return this.gameWin()}}},module.exports.__esModule&&(module.exports=module.exports.default);var t="function"==typeof module.exports?module.exports.options:module.exports;t.render=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"mine"},[i("div",{staticClass:"game-number"},[i("span",{staticClass:"qi"},[e._v(e._s(e.qNum))]),e._v(" "),i("button",{on:{click:function(t){e.createGame()}}},[e._v("重来")]),e._v(" "),i("span",{staticClass:"time"},[e._v(e._s(e.gameTime)+e._s(e.gameWin()))]),e._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:e.lv,expression:"lv"}],on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.lv=t.target.multiple?i:i[0]},e.changeLv]}},e._l(e.oArr,function(t){return i("option",{key:t.value,domProps:{value:t.value}},[e._v(e._s(t.name))])}))]),e._v(" "),i("div",{staticClass:"game-box",class:{two:1===e.lv,three:2===e.lv}},e._l(e.gameGe,function(t,r){return i("div",{key:t.id,staticClass:"grid background tip",class:{l:t.l,dian:t.d,q:t.b},on:{mousedown:function(t){e.test(r,t)}}},[t.s&&!t.b?i("span",{staticClass:"number",class:{two:2===t.s,three:3===t.s,four:4===t.s}},[e._v(e._s(t.s))]):e._e()])}))])},t.staticRenderFns=[];
},{"vueify/lib/insert-css":15}]},{},[22])