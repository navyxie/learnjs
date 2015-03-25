define("appmsg/outer_link.js",["biz_common/dom/event.js"],function(e){
"use strict";
function n(e){
var n=e.container;
if(!n)return!1;
for(var i=n.getElementsByTagName("a")||[],r=0,o=i.length;o>r;++r)!function(n){
var r=i[n],o=r.getAttribute("href");
if(!o)return!1;
0!=o.indexOf("http://mp.weixin.qq.com")&&0!=o.indexOf("http://mp.weixin.qq.com");
var c=0,f=r.innerHTML;
/^[^<>]+$/.test(f)?c=1:/^<img[^>]*>$/.test(f)&&(c=2),!!e.changeHref&&(o=e.changeHref(o,c)),
t.on(r,"click",function(){
return location.href=o,!1;
},!0);
}(r);
}
var t=e("biz_common/dom/event.js");
return n;
});