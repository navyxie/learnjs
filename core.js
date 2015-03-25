define("biz_wap/jsapi/core.js",[],function(){
"use strict";
var e={
ready:function(e){
"undefined"!=typeof WeixinJSBridge&&WeixinJSBridge.invoke?e():document.addEventListener?document.addEventListener("WeixinJSBridgeReady",e,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",e),
document.attachEvent("onWeixinJSBridgeReady",e));
},
invoke:function(e,i,n){
this.ready(function(){
return"object"!=typeof WeixinJSBridge?(alert("请在微信中打开此链接！"),!1):void WeixinJSBridge.invoke(e,i,n);
});
},
call:function(e){
this.ready(function(){
return"object"!=typeof WeixinJSBridge?!1:void WeixinJSBridge.call(e);
});
},
on:function(e,i){
this.ready(function(){
return"object"==typeof WeixinJSBridge&&WeixinJSBridge.on?void WeixinJSBridge.on(e,i):!1;
});
}
};
return e;
});