define("appmsg/review_image.js",["biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_common/utils/url/parse.js","appmsg/cdn_img_lib.js"],function(e){
"use strict";
function t(e,t){
r.invoke("imagePreview",{
current:e,
urls:t
});
}
function i(e){
var i=[],r=e.container;
r=r?r.getElementsByTagName("img"):[];
for(var n=0,p=r.length;p>n;n++){
var m=r.item(n),c=m.getAttribute("data-src")||m.getAttribute("src"),o=m.getAttribute("data-type");
if(c){
for(;-1!=c.indexOf("?tp=webp");)c=c.replace("?tp=webp","");
m.dataset&&m.dataset.s&&c.isCDN()&&(c=c.replace(/\/640$/,"/0"),c=c.replace(/\/640\?/,"/0?")),
c.isCDN()&&(c=s.addParam(c,"wxfrom","3",!0)),e.is_https_res&&(c=c.http2https()),
o&&(c=s.addParam(c,"wxtype",o,!0)),i.push(c),function(e){
a.on(m,"click",function(){
return t(e,i),!1;
});
}(c);
}
}
}
var a=e("biz_common/dom/event.js"),r=e("biz_wap/jsapi/core.js"),s=e("biz_common/utils/url/parse.js");
return e("appmsg/cdn_img_lib.js"),i;
});