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
})({28:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function e(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.selector,o=void 0===i?"yzm-canvas":i,a=t.imgURL,s=void 0===a?require("../images/17.jpg"):a,h=t.text,c=void 0===h?["负荆请罪","清醉"]:h,l=t.prob,f=void 0===l?"0.85":l,u=t.scope,p=void 0===u?"72":u,x=t.style,d=void 0===x?{width:"280px",height:"200px",font:"oblique small-caps bold 72px Arial",color:"white"}:x;n(this,r),this.ctx=document.getElementById(o).getContext("2d"),this.imgURL=s,this.text=[].concat(e(c[0])),this.mix=[].concat(e(c[1])),this.prob=f,this.width=2*parseInt(d.width),this.height=2*parseInt(d.height),this.font=d.font,this.color=d.color,this.fontData=[],this.scope=parseInt(p)}return t(r,[{key:"getRanXY",value:function(){var t=this,e=parseInt(Math.random()*(this.width-this.scope)),n=parseInt(Math.random()*(this.height-this.scope));return this.fontData.some(function(r){var i=r.x<=e&&e<=parseInt(r.x)+t.scope,o=r.y<=n&&n<=parseInt(r.y)+t.scope;return i||o})?this.getRanXY():{x:e,y:n}}},{key:"start",value:function(){var t=this,e=new Image;e.onload=function(){t.ctx.drawImage(e,0,0,t.width,t.height),t.ctx.font=t.font,t.ctx.fillStyle=t.color,t.ctx.textAlign="start",t.ctx.textBaseline="top";for(var n in t.text){var r=t.getRanXY();t.ctx.fillText(t.text[n],r.x,r.y),t.fontData.push(r)}if(Math.random()>t.prob){var i=t.getRanXY();t.ctx.fillText(t.mix[parseInt(Math.random()*t.mix.length)],i.x,i.y)}},e.src=this.imgURL}}]),r}();exports.default=r;
},{"../images/17.jpg":29}],18:[function(require,module,exports) {
"use strict";var t=require("vueify/lib/insert-css").insert('.yzm-img .card{width:50px;height:50px;background-color:gold;position:relative}.yzm-img .card:before{border-radius:50% 50% 0 0;background-color:#000;top:-10px}.yzm-img .card:after,.yzm-img .card:before{content:"";display:block;left:50%;width:20px;height:20px;margin-left:-10px;position:absolute}.yzm-img .card:after{border-radius:50%;background-color:red;bottom:-10px}.checkCode{width:100%;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;min-height:50px;margin:7.5px 0;position:relative}.checkCode.success>.content{border:1px solid #42dd18;color:#42dd18;pointer-events:none}.checkCode.success>.content .anime .one:before{background-color:#42dd18}.checkCode *{user-select:none}.checkCode>.title{padding:0 15px}.checkCode>.content{max-width:200px;border:1px solid #e7e7e7;flex:1;height:50px;margin-right:15px;display:flex;flex-direction:row;align-items:center}.checkCode>.content .anime{min-width:50px;margin-left:15px}.checkCode>.content .anime .one{display:block;width:36px;height:36px;border-radius:50%;background-color:#dee9fa;position:relative;animation:zoomIn 1.2s infinite alternate ease-in;transition:all 1.2s}@keyframes zoomIn{to{transform:scale(.6)}}@keyframes zoomOut{to{transform:scale(1.5)}}.checkCode>.content .anime .one:before{content:"";display:block;position:absolute;width:12px;height:12px;border-radius:50%;background-color:#5d91f4;left:12px;top:12px;animation:zoomOut 2.4s infinite alternate 1s ease-in}.checkCode .dialog-bg{position:fixed;left:0;top:0;height:100vh;width:100vw;z-index:4}.checkCode .dialog{min-width:320px;min-height:200px;position:absolute;border:1px solid #e6e6e6;background-color:#fff;z-index:5;top:50px;margin-left:145px;margin-top:-35px}.checkCode .dialog:before{left:-17px;z-index:0;border-right:8px solid rgba(63,63,63,.1)}.checkCode .dialog:after,.checkCode .dialog:before{content:"";height:0;width:0;position:absolute;top:5px;border-left:8px solid transparent;border-top:8px solid transparent;border-bottom:8px solid transparent}.checkCode .dialog:after{left:-14px;z-index:1;border-right:8px solid #fff}@media screen and (max-width:480px){.checkCode .dialog{left:calc(50% - 160px);margin:0;top:70px}.checkCode .dialog:before{left:auto;top:-17px;transform:rotate(90deg)}.checkCode .dialog:after{left:auto;top:-15px;transform:rotate(90deg)}}.checkCode .l-box{display:flex;flex-direction:column;justify-content:center;align-items:center}.checkCode .l-box canvas{border:1px solid #e6e6e6}.checkCode .l-box .warn{color:#ff8a00}.checkCode .l-box .title{height:50px;line-height:50px;display:flex;flex-direction:row;align-items:center}.checkCode .l-box .title .card-bg{border:1px solid #e6e6e6;box-sizing:border-box;height:30px;line-height:30px;background-color:#00bfff;color:#fff;font-weight:700;margin:0 10px;padding:0 10px;letter-spacing:4px}.checkCode .l-box .footer{margin:5px 0;width:100%;height:40px;display:flex;flex-direction:row;align-items:center;justify-content:space-around}.checkCode .l-box .footer i{font-size:30px;color:#b3b3b3}.checkCode .l-box .footer button{height:40px;width:100px;color:#fff;background-color:#00bfff;border:0;font-size:18px}.checkCode .tip{position:relative}.checkCode .tip:hover:after{content:attr(data-tip)}.checkCode .tip:after{display:block;position:absolute;font-size:16px;min-width:50px;background:#fff;border:1px solid #e6e6e6;margin-top:-60px;margin-left:-25px;white-space:nowrap;padding:3px}.checkCode .number{width:30px;height:30px;border-radius:50%;color:#fff;text-align:center;line-height:30px;position:absolute;background:#007cff;box-shadow:0 0 2px 1px #fff}.checkCode .number:before{content:attr(data-index);font-size:20px}');!function(){Object.defineProperty(exports,"__esModule",{value:!0});var t,e=require("../assets/js/drawCode"),a=(t=e)&&t.__esModule?t:{default:t};exports.default={name:"checkCode",data:function(){return{checkData:{title:"验证码",text:["点击进行验证","正在验证","验证成功"],popShow:!1,cData:{flag:!1,text:"默认成语",tipStatus:!0,tip:["请按顺序点击图中文字","验证错误,请重新验证"],style:{width:"280px",height:"200px"},clickData:[],fontData:[]}}}},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{showCode:function(){return!this.checkData.cData.flag&&(this.checkData.popShow=!0,this.reFont())},closeCode:function(){this.checkData.popShow=!1},addNumber:function(t){if(this.checkData.cData.tipStatus=!0,this.checkData.cData.clickData.length>=4)return!1;var e=t.offsetX,a=t.offsetY;return this.checkData.cData.clickData.push({x:e,y:a}),4===this.checkData.cData.clickData.length?this.checkCfData():void 0},removeNumber:function(t){this.checkData.cData.clickData.splice(t)},drawFont:function(t){var e=new a.default(t);e.start(),this.checkData.cData.fontData=e.fontData,this.checkData.cData.scope=e.scope,this.checkData.cData.text=e.text.join("")},reFont:function(t){var e=[["狡兔三窟","免库"],["长袖善舞","柚"],["匪夷所思","篚"],["飞扬跋扈","杨拔"],["多事之秋","是又"]];this.checkData.cData.clickData=[],this.checkData.cData.flag=!1,this.checkData.cData.tipStatus=!0!==t,this.drawFont({text:e[parseInt(Math.random()*e.length)]})},checkCfData:function(){var t=this;if(4!==this.checkData.cData.clickData.length)return this.checkData.cData.flag=!1,!1;var e=this.checkData.cData.fontData.map(function(t){return{x:t.x/2,y:t.y/2}}).every(function(e,a){var c=e.x<=t.checkData.cData.clickData[a].x&&t.checkData.cData.clickData[a].x<=parseInt(e.x)+t.checkData.cData.scope/2,o=e.y<=t.checkData.cData.clickData[a].y&&t.checkData.cData.clickData[a].y<=parseInt(e.y)+t.checkData.cData.scope/2;return c||o});if(this.checkData.cData.flag=e,!e)return this.checkData.cData.tipStatus=!1,this.reFont(!0);this.checkData.popShow=!1}}}}(),module.exports.__esModule&&(module.exports=module.exports.default);var e="function"==typeof module.exports?module.exports.options:module.exports;e.render=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"checkCode",class:{success:t.checkData.cData.flag}},[a("span",{staticClass:"title"},[t._v(t._s(t.checkData.title))]),t._v(" "),a("div",{staticClass:"content",on:{click:t.showCode}},[t._m(0),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.checkData.popShow&&!t.checkData.cData.flag,expression:"!checkData.popShow && !checkData.cData.flag"}]},[t._v(t._s(t.checkData.text[0]))]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.checkData.popShow&&!t.checkData.cData.flag,expression:"checkData.popShow && !checkData.cData.flag"}]},[t._v(t._s(t.checkData.text[1]))]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.checkData.popShow&&t.checkData.cData.flag,expression:"!checkData.popShow && checkData.cData.flag"}]},[t._v(t._s(t.checkData.text[2]))])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.checkData.popShow,expression:"checkData.popShow"}],staticClass:"dialog-bg",on:{click:function(e){if(e.target!==e.currentTarget)return null;e.stopPropagation(),t.closeCode(e)}}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.checkData.popShow&&!t.checkData.cData.flag,expression:"checkData.popShow && !checkData.cData.flag"}],staticClass:"dialog l-box"},[a("div",{staticClass:"title"},[t.checkData.cData.tipStatus?a("span",[t._v(t._s(t.checkData.cData.tip[0]))]):a("span",{staticClass:"warn"},[t._v(t._s(t.checkData.cData.tip[1]))]),t._v(" "),a("span",{staticClass:"card-bg"},[t._v(t._s(t.checkData.cData.text))])]),t._v(" "),a("div",{staticClass:"content"},[a("canvas",{style:t.checkData.cData.style,attrs:{id:"yzm-canvas",width:2*parseInt(t.checkData.cData.style.width)+"px",height:2*parseInt(t.checkData.cData.style.height)+"px"},on:{click:t.addNumber}}),t._v(" "),t._l(t.checkData.cData.clickData,function(e,c){return a("div",{key:c,staticClass:"number",style:{left:e.x+"px",top:e.y+35+"px"},attrs:{"data-index":c+1},on:{click:function(e){t.removeNumber(c)}}})})],2),t._v(" "),a("div",{staticClass:"footer"},[a("i",{staticClass:"iconfont icon-refresh tip",attrs:{"data-tip":"刷新验证码"},on:{click:t.reFont}}),t._v(" "),a("button",{on:{click:t.checkCfData}},[t._v("验证")])])])])},e.staticRenderFns=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"anime"},[e("div",{staticClass:"one"})])}];
},{"vueify/lib/insert-css":15,"../assets/js/drawCode":28}]},{},[18])