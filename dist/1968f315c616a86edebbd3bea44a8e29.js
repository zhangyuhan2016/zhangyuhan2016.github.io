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
})({19:[function(require,module,exports) {
"use strict";var t=require("vueify/lib/insert-css").insert(".yzm{box-sizing:border-box;text-align:center}.bg,.yzm{overflow:hidden}.bg{width:100vw;height:300px;position:relative}.bg .retry{font-size:40px;position:absolute;right:0;padding:5px;color:#fff;z-index:4}.bg .y-img{width:100%;height:100%;display:block;z-index:1}.bg .b-card{background-color:#fff;box-shadow:inset 0 0 7px 3px #a5a5a5;border-radius:5px;z-index:2}.bg .b-card,.bg .t-img{position:absolute;top:0;left:0}.bg .t-img{z-index:3}.h-card{margin-top:40px;height:40px;line-height:40px;position:relative;background-color:#e8e8e8}.h-card .text{text-align:center}.h-card .text.err{background-color:#da5a21;color:#fff}.h-card .card-bg{display:flex;flex-direction:row;position:absolute;top:0;left:0;margin-left:-100%}.h-card .card-bg .bg{flex:1;background-color:rgba(0,128,0,.53);height:40px}.h-card .card-bg .card{width:30px;background-color:#fff;height:40px;box-sizing:border-box;border:1px solid #ababab}.h-card .card-bg .card.stop{pointer-events:none}.h-card .card-bg .card i{font-size:26px}");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={name:"yzm",data:function(){return{clickText:"",canvasFlag:!1,canvasNumber:1,ClickData:[],fontData:[],imgArr:["http://img.hb.aicdn.com/47829a3692500f8e765acc236a6f158a882e12675a062-TTD3D2_fw658",require("../assets/images/17.jpg")],useImg:"http://img.hb.aicdn.com/47829a3692500f8e765acc236a6f158a882e12675a062-TTD3D2_fw658",slideCode:{imgURL:"http://img.hb.aicdn.com/47829a3692500f8e765acc236a6f158a882e12675a062-TTD3D2_fw658",bgStyle:{height:"300px",width:"100%"},result:"",slideImg:{width:"100%",height:"",clip:"","margin-left":""},fixedBlock:{},slideBlock:{"margin-left":"-100%",transition:"",cardW:"15",text:"拖动滑块进行验证"}},leftRange:50,slideData:{"margin-left":"-100%",transition:""},initData:{top:"100px",left:"200px",width:"50px",height:"50px"},clipData:{width:"100%",height:"300px",clip:"","margin-left":"-200px"}}},created:function(){this.clipData.clip="rect("+this.initData.top+" "+(parseFloat(this.initData.left)+parseFloat(this.initData.width))+"px "+(parseFloat(this.initData.top)+parseFloat(this.initData.height))+"px "+this.initData.left+")",this.clipData["margin-left"]="-"+this.initData.left},beforeMount:function(){},mounted:function(){this.createSlideImg()},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{test:function(){var t=this.leftRange>50?this.leftRange-50:-(50-this.leftRange);this.clipData["margin-left"]=parseInt(t)+parseFloat(this.clipData["margin-left"])+"px"},tStart:function(t){this.slideData.transition=""},tMove:function(t){this.slideData["margin-left"]="calc(-100% + "+(t.targetTouches[0].pageX-15)+"px)",this.clipData["margin-left"]=-200+t.targetTouches[0].pageX-15+"px"},tEnd:function(){this.slideData.transition="all 0.3s",this.slideData["margin-left"]="-100%"},slideStart:function(t){this.slideCode.result="",this.slideCode.slideBlock.transition="",this.slideCode.slideBlock["margin-left"]="-100%",this.createSlideImg()},slideMove:function(t){var e=t.targetTouches[0].pageX-parseFloat(this.slideCode.slideBlock.cardW);if(e>this.slideCode.slideBlock.maxRange)return e=this.slideCode.slideBlock.maxRange,this.checkDis();e<0&&(e=0),this.slideCode.slideBlock["margin-left"]="calc(-100% + "+e+"px)",this.slideCode.slideImg["margin-left"]=parseFloat("-"+this.slideCode.fixedBlock.left)+e+"px"},slideEnd:function(){this.checkDis()},retryCode:function(){this.slideCode.result="",this.slideCode.slideBlock.transition="",this.slideCode.slideBlock["margin-left"]="-100%",this.useImg=this.getImgUrl(),this.slideCode.imgURL=this.useImg},checkDis:function(){var t=Math.abs(parseFloat(this.slideCode.slideImg["margin-left"]))<this.slideCode.fault;this.slideCode.result=t,t?(this.slideCode.slideBlock.transition="all 0.3s",this.slideCode.slideBlock["margin-left"]=-2*parseFloat(this.slideCode.slideBlock.cardW)+"px"):(this.slideCode.slideBlock.transition="all 0.3s",this.slideCode.slideBlock["margin-left"]="-100%")},addPx:function(t){return parseInt(t)+"px"},createRanInit:function(t){var e=t.minX,i=void 0===e?"50":e,s=t.maxX,a=t.minY,d=void 0===a?"5":a,l=t.maxY,o=t.w,r=void 0===o?"50":o,n=t.h,c=void 0===n?"50":n;return{top:this.addPx(Math.random()*(l-c)+d),left:this.addPx(Math.random()*(s-r)+i),width:this.addPx(r),height:this.addPx(c)}},getImgUrl:function(){return this.imgArr[parseInt(Math.random()*this.imgArr.length)]},createSlideImg:function(){var t=this.$refs.codeBg.offsetHeight||"300px",e=this.$refs.codeBg.offsetWidth||"400px",i=this.createRanInit({maxX:e,maxY:t}),s={width:"100%",height:this.addPx(t),clip:"rect("+i.top+" "+(parseFloat(i.left)+parseFloat(i.width))+"px "+(parseFloat(i.top)+parseFloat(i.height))+"px "+i.left+")","margin-left":"-"+i.left},a={imgURL:this.useImg,fault:"5",result:"",bgStyle:{height:this.addPx(t),width:this.addPx(e)},slideImg:s,fixedBlock:i,slideBlock:{"margin-left":"-100%",transition:"",cardW:"15",maxRange:e-30}};return this.slideCode=a,a}}},module.exports.__esModule&&(module.exports=module.exports.default);var e="function"==typeof module.exports?module.exports.options:module.exports;e.render=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"yzm"},[i("h2",[t._v("滑块验证")]),t._v(" "),i("div",[i("div",{ref:"codeBg",staticClass:"bg",style:t.slideCode.bgStyle},[i("i",{staticClass:"iconfont icon-refresh retry",on:{click:t.retryCode}}),t._v(" "),i("img",{staticClass:"y-img",attrs:{src:t.slideCode.imgURL,alt:"验证码"}}),t._v(" "),i("img",{staticClass:"t-img",style:t.slideCode.slideImg,attrs:{src:t.slideCode.imgURL,alt:"验证码"}}),t._v(" "),i("div",{staticClass:"b-card",style:t.slideCode.fixedBlock})]),t._v(" "),i("div",{staticClass:"h-card"},[i("div",{staticClass:"text",class:{err:!1===t.slideCode.result}},[t._v("\n                "+t._s(""===t.slideCode.result?"请向右滑动进行验证":!0===t.slideCode.result?"验证通过":"验证失败")+"\n            ")]),t._v(" "),i("div",{staticClass:"card-bg",style:t.slideCode.slideBlock},[i("div",{staticClass:"bg"}),t._v(" "),i("div",{staticClass:"card",class:{stop:!0===t.slideCode.result},on:{touchstart:t.slideStart,touchmove:t.slideMove,touchend:t.slideEnd}},[i("i",{directives:[{name:"show",rawName:"v-show",value:""===t.slideCode.result,expression:"slideCode.result === ''"}],staticClass:"iconfont icon-right"}),t._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:!1===t.slideCode.result,expression:"slideCode.result === false"}],staticClass:"iconfont icon-refresh"}),t._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:!0===t.slideCode.result,expression:"slideCode.result === true"}],staticClass:"iconfont icon-duihao"})])])])])])},e.staticRenderFns=[];
},{"vueify/lib/insert-css":10,"../assets/images/17.jpg":22}]},{},[19])