define("biz_common/dom/event.js",[],function(){
"use strict";
function t(t,n,o){
i.isPc||i.isWp?e(t,"click",n,o):e(t,"touchend",function(t){
var e=t.changedTouches[0];
if(Math.abs(i.y-e.clientY)<=5&&Math.abs(i.x-e.clientX)<=5){
var o=n.call(this,t);
return o===!1&&(t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()),
o;
}
},o);
}
function e(t,e,n,o){
if("input"==e&&i.isPc,t){
if(t==window&&"load"==e&&/complete|loaded/.test(document.readyState))return void n({
type:"load"
});
var a=function(t){
var e=n(t);
return e===!1&&(t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()),
e;
};
return n[e+"_handler"]=a,t.addEventListener?void t.addEventListener(e,a,!!o):t.attachEvent?void t.attachEvent("on"+e,a,!!o):void 0;
}
}
function n(t,e,n,o){
if(t){
var i=n[e+"_handler"]||n;
return t.removeEventListener?void t.removeEventListener(e,i,!!o):t.detachEvent?void t.detachEvent("on"+e,i,!!o):void 0;
}
}
var o=navigator.userAgent,i={
isPc:/(WindowsNT)|(Windows NT)|(Macintosh)/i.test(navigator.userAgent),
isWp:/Windows\sPhone/i.test(o)
};
return i.isPc||e(document,"touchstart",function(t){
var e=t.changedTouches[0];
i.x=e.clientX,i.y=e.clientY;
}),{
on:e,
off:n,
tap:t
};
});