define("appmsg/page_pos.js",["biz_common/utils/string/html.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_common/utils/cookie.js","appmsg/cdn_img_lib.js"],function(e){
"use strict";
function t(e){
for(var t=5381,n=0;n<e.length;n++)t=(t<<5)+t+e.charCodeAt(n),t&=2147483647;
return t;
}
function n(e,t){
if(e&&!(e.length<=0))for(var n,o,i,a=/http(s)?\:\/\/([^\/]*)(\?|\/)?/,m=0,l=e.length;l>m;++m)n=e[m],
n&&(o=n.getAttribute(t),o&&(i=o.match(a),i&&i[2]&&(r[i[2]]=!0)));
}
function o(){
r={},n(document.getElementsByTagName("a"),"href"),n(document.getElementsByTagName("link"),"href"),
n(document.getElementsByTagName("iframe"),"src"),n(document.getElementsByTagName("script"),"src"),
n(document.getElementsByTagName("img"),"src");
var e=[];
for(var t in r)r.hasOwnProperty(t)&&e.push(t);
return r={},e.join(",");
}
function i(){
var e,t=window.pageYOffset||document.documentElement.scrollTop,n=document.getElementById("js_content"),i=document.documentElement.clientHeight||window.innerHeight,a=document.body.scrollHeight,m=Math.ceil(a/i),r=(window.logs.read_height||t)+i,c=document.getElementById("js_toobar").offsetTop,g=n.getElementsByTagName("img")||[],s=Math.ceil(r/i)||1,_=document.getElementById("media"),f=50,w=0,u=0,h=0,p=0,v=r+f>c?1:0;
s>m&&(s=m);
var y=function(t){
if(t)for(var n=0,o=t.length;o>n;++n){
var i=t[n];
if(i){
w++;
var a=i.getAttribute("src"),m=i.getAttribute("data-type");
a&&0==a.indexOf("http")&&(u++,a.isCDN()&&(h++,-1!=a.indexOf("?tp=webp")&&p++),m&&(e["img_"+m+"_cnt"]=e["img_"+m+"_cnt"]||0,
e["img_"+m+"_cnt"]++));
}
}
e.download_cdn_webp_img_cnt=p||0,e.download_img_cnt=u||0,e.download_cdn_img_cnt=h||0;
},T=window.appmsgstat||{},b=window.logs.img||{},O=window.logs.pagetime||{},x=b.load||{},j=b.read||{},E=[],B=[],N=0,S=0,z=0;
for(var D in j)D&&0==D.indexOf("http")&&j.hasOwnProperty(D)&&B.push(D);
for(var D in x)D&&0==D.indexOf("http")&&x.hasOwnProperty(D)&&E.push(D);
for(var I=0,k=E.length;k>I;++I){
var M=E[I];
M&&M.isCDN()&&(-1!=M.indexOf("/0")&&N++,-1!=M.indexOf("/640")&&S++,-1!=M.indexOf("/300")&&z++);
}
var e={
__biz:biz,
title:msg_title.htmlDecode(),
mid:mid,
idx:idx,
read_cnt:T.read_num||0,
like_cnt:T.like_num||0,
screen_height:i,
screen_num:m,
video_cnt:window.logs.video_cnt||0,
img_cnt:w||0,
read_screen_num:s||0,
is_finished_read:v,
scene:source,
content_len:d.content_length||0,
start_time:page_begintime,
end_time:(new Date).getTime(),
img_640_cnt:S,
img_0_cnt:N,
img_300_cnt:z,
wtime:O.wtime||0,
ftime:O.ftime||0,
ptime:O.ptime||0
};
window.networkType&&"wifi"==window.networkType&&(e.wifi_all_imgs_cnt=E.length,e.wifi_read_imgs_cnt=B.length),
y(!!_&&_.getElementsByTagName("img")),y(g);
var Y=(new Date).getDay();
0!==user_uin&&Math.floor(user_uin/100)%7==Y&&(e.domain_list=o()),l({
url:"/mp/appmsgreport?action=page_time",
type:"POST",
data:e,
async:!1,
timeout:2e3
});
}
function a(e,t){
try{
localStorage.setItem(e,t);
}catch(n){
for(var o=localStorage.length-1;o>=0;){
var i=localStorage.key(o);
i.match(/^\d+$/)&&localStorage.removeItem(i),o--;
}
}
}
e("biz_common/utils/string/html.js");
{
var m=e("biz_common/dom/event.js"),l=e("biz_wap/utils/ajax.js");
e("biz_common/utils/cookie.js");
}
e("appmsg/cdn_img_lib.js");
var d={};
!function(){
var e=document.getElementsByTagName("html");
if(e&&1==!!e.length){
e=e[0].innerHTML;
var t=e.replace(/[\x00-\xff]/g,""),n=e.replace(/[^\x00-\xff]/g,"");
d.content_length=1*n.length+3*t.length+"<!DOCTYPE html><html></html>".length;
}
window.logs.pageinfo=d;
}();
var r={},c=null,g=0,s=msg_link.split("?").pop(),_=t(s);
window.localStorage&&(m.on(window,"load",function(){
g=1*localStorage.getItem(_);
var e=location.href.indexOf("scrolltodown")>-1?!0:!1,t=(document.getElementById("img-content"),
document.getElementById("js_cmt_area"));
if(e&&t&&t.offsetTop){
var n=t.offsetTop;
window.scrollTo(0,n-25);
}else window.scrollTo(0,g);
}),m.on(window,"unload",function(){
if(a(n,g),window._adRenderData&&"undefined"!=typeof JSON&&JSON.stringify){
var e=JSON.stringify(window._adRenderData),t=+new Date,n=[biz,sn,mid,idx].join("_");
localStorage.setItem("adinfo_"+n,e),localStorage.setItem("adinfo_time_"+n,t);
}
i();
}),window.logs.read_height=0,m.on(window,"scroll",function(){
var e=window.pageYOffset||document.documentElement.scrollTop;
window.logs.read_height=Math.max(window.logs.read_height,e),clearTimeout(c),c=setTimeout(function(){
g=window.pageYOffset,a(_,g);
},500);
}),m.on(document,"touchmove",function(){
var e=window.pageYOffset||document.documentElement.scrollTop;
window.logs.read_height=Math.max(window.logs.read_height,e),clearTimeout(c),c=setTimeout(function(){
g=window.pageYOffset,a(_,g);
},500);
}));
});