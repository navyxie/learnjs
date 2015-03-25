define("appmsg/async.js",["biz_common/utils/string/html.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_common/dom/class.js","biz_common/tmpl.js","appmsg/a.js","appmsg/like.js","appmsg/comment.js"],function(require,exports,module){
"use strict";
function saveCopy(e){
var a={};
for(var t in e)if(e.hasOwnProperty(t)){
var n=e[t],i=typeof n;
n="string"==i?n.htmlDecode():n,"object"==i&&(n=saveCopy(n)),a[t]=n;
}
return a;
}
function fillVedio(e){
if(vedio_iframes&&vedio_iframes.length>0)for(var a,t,n,i=0,r=vedio_iframes.length;r>i;++i)a=vedio_iframes[i],
t=a.iframe,n=a.src,e&&(n=n+"&encryptVer=6.0&platform=61001&cKey="+e),t.setAttribute("src",n);
}
function fillData(e){
var a=e.adRenderData||{
advertisement_num:0
};
if(!a.flag&&a.advertisement_num>0){
var t=a.advertisement_num,n=a.advertisement_info;
window.adDatas.num=t;
for(var i=0;t>i;++i){
var r=null,o=n[i];
if(o.biz_info=o.biz_info||{},o.app_info=o.app_info||{},o.pos_type=o.pos_type||0,
100==o.pt)r={
usename:o.biz_info.user_name,
pt:o.pt,
traceid:o.traceid,
adid:o.aid,
is_appmsg:!0
};else if(102==o.pt)r={
appname:o.app_info.app_name,
versioncode:o.app_info.version_code,
pkgname:o.app_info.apk_name,
androiddownurl:o.app_info.apk_url,
md5sum:o.app_info.app_md5,
signature:o.app_info.version_code,
rl:o.rl,
traceid:o.traceid,
pt:o.pt,
type:o.type,
adid:o.aid,
is_appmsg:!0
};else if(101==o.pt)r={
appname:o.app_info.app_name,
app_id:o.app_info.app_id,
icon_url:o.app_info.icon_url,
appinfo_url:o.app_info.appinfo_url,
rl:o.rl,
traceid:o.traceid,
pt:o.pt,
ticket:o.ticket,
type:o.type,
adid:o.aid,
is_appmsg:!0
};else if(103==o.pt||104==o.pt){
var d=o.app_info.down_count||0,s=o.app_info.app_size||0,m=o.app_info.app_name||"",p=o.app_info.category,_=["万","百万","亿"];
if(d>=1e4){
d/=1e4;
for(var l=0;d>=10&&2>l;)d/=100,l++;
d=d.toFixed(1)+_[l]+"次";
}else d=d.toFixed(1)+"次";
s>=1024?(s/=1024,s=s>=1024?(s/1024).toFixed(2)+"MB":s.toFixed(2)+"KB"):s=s.toFixed(2)+"B",
p=p?p[0]||"其他":"其他";
for(var c=["-","(",":",'"',"'","：","（","—","“","‘"],f=-1,g=0,u=c.length;u>g;++g){
var w=c[g],v=m.indexOf(w);
-1!=v&&(-1==f||f>v)&&(f=v);
}
-1!=f&&(m=m.substring(0,f)),o.app_info._down_count=d,o.app_info._app_size=s,o.app_info._category=p,
o.app_info.app_name=m,r={
appname:o.app_info.app_name,
app_id:o.app_info.app_id,
channel_id:o.app_info.channel_id,
rl:o.rl,
pkgname:o.app_info.apk_name,
androiddownurl:o.app_info.apk_url,
versioncode:o.app_info.version_code,
appinfo_url:o.app_info.appinfo_url,
traceid:o.traceid,
pt:o.pt,
ticket:o.ticket,
type:o.type,
adid:o.aid,
is_appmsg:!0
};
}
adDatas.ads["pos_"+o.pos_type]={
a_info:o,
adData:r
};
}
var y=function(e){
var a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
"undefined"!=typeof e&&(a=e);
10>=a&&(b.style.display="block",DomEvent.off(window,"scroll",y));
},h=document.getElementById("js_bottom_ad_area"),b=document.getElementById("js_top_ad_area"),I=adDatas.ads;
for(var k in I)if(0==k.indexOf("pos_")){
var r=I[k],o=!!r&&r.a_info;
if(r&&o)if(0==o.pos_type)h.innerHTML=TMPL.render("t_ad",o);else if(1==o.pos_type){
b.style.display="none",b.innerHTML=TMPL.render("t_ad",o),DomEvent.on(window,"scroll",y);
var j=0;
window.localStorage&&(j=1*localStorage.getItem(k)||0),window.scrollTo(0,j),y(j);
}
}
require("appmsg/a.js");
}
var x=e.appmsgstat||{};
window.appmsgstat||(window.appmsgstat=x),x.show&&(!function(){
var e=document.getElementById("js_read_area"),a=document.getElementById("like");
e.style.display="block",a.style.display="inline",x.liked&&Class.addClass(a,"praised"),
a.setAttribute("like",x.liked?"1":"0");
var t=document.getElementById("likeNum"),n=document.getElementById("readNum"),i=x.read_num,r=x.like_num;
i||(i=1),r||(r="赞"),parseInt(i)>1e5?i="100000+":"",parseInt(r)>1e5?r="100000+":"",
n&&(n.innerHTML=i),t&&(t.innerHTML=r);
}(),require("appmsg/like.js")),1==e.comment_enabled&&require("appmsg/comment.js"),
-1!=ua.indexOf("MicroMessenger")&&e.reward&&handleReward(e.reward);
}
function handleReward(e){
var a="&uin="+encodeURIComponent(window.uin)+"&key="+encodeURIComponent(window.key)+"&pass_ticket="+encodeURIComponent(window.pass_ticket),t=document.getElementById("js_reward_link");
t&&(t.href="https://mp.weixin.qq.com/bizmall/reward?__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&sn="+sn+"&timestamp="+e.timestamp+"&showwxpaytitle=1"+a),
reward_head_imgs=e.reward_head_imgs,self_head_img=e.self_head_img;
var n=renderReward(),i=document.getElementById("js_reward_area");
i&&(i.style.display="block",DomEvent.on(window,"scroll",reportReward));
var r=document.getElementById("js_reward_inner");
r&&n>0&&(r.style.display="block");
}
function renderReward(){
var e=document.getElementById("js_reward_list"),a="",t='<span class="reward_user_avatar radius_avatar"><img src="__src__" alt=""></span>',n=0;
if(e){
self_head_img&&(n++,a+=t.replace("__src__",self_head_img));
for(var i=0,r=reward_head_imgs.length;r>i&&(n++,a+=t.replace("__src__",reward_head_imgs[i]),
n!=getMaxHeadImg());++i);
n>getMaxHeadImg()/3&&(e.className+=" tl"),e.innerHTML=a;
}
return n;
}
function reportReward(){
var e=document.getElementById("js_reward_area"),a=window.pageYOffset||document.documentElement.scrollTop,t=e.offsetTop;
a+innerHeight>t&&(ajax({
type:"GET",
url:"/bizmall/reward?act=report&__biz="+biz+"&appmsgid="+mid+"&idx="+idx,
async:!0
}),DomEvent.off(window,"scroll",reportReward),reportReward=null);
}
function getAsyncData(){
var is_need_ticket="";
vedio_iframes&&vedio_iframes.length>0&&(is_need_ticket="&is_need_ticket=1");
var is_need_ad=1,_adInfo=null;
if(window.localStorage)try{
var key=[biz,sn,mid,idx].join("_");
_adInfo=localStorage.getItem("adinfo_"+key);
try{
_adInfo=eval("("+_adInfo+")");
}catch(e){
_adInfo=null;
}
var _adInfoSaveTime=1*localStorage.getItem("adinfo_time_"+key),_now=+new Date;
_adInfo&&18e4>_now-1*_adInfoSaveTime&&1*_adInfo.advertisement_num>0?is_need_ad=0:(localStorage.removeItem("adinfo_"+key),
localStorage.removeItem("adinfo_time_"+key));
}catch(e){
is_need_ad=1,_adInfo=null;
}
document.getElementsByClassName&&-1!=navigator.userAgent.indexOf("MicroMessenger")||(is_need_ad=0),
ajax({
url:"/mp/getappmsgext?__biz="+biz+"&mid="+mid+"&idx="+idx+"&scene="+source+"&title="+encodeURIComponent(msg_title.htmlDecode())+"&ct="+ct+"&devicetype="+devicetype.htmlDecode()+"&version="+version.htmlDecode()+"&f=json&r="+Math.random()+is_need_ticket+"&is_need_ad="+is_need_ad+"&comment_id="+comment_id+"&is_need_reward="+is_need_reward+"&reward_uin_count="+(is_need_reward?getMaxHeadImg():0),
type:"GET",
async:!1,
success:function(ret){
var tmpret=ret;
if(ret)try{
try{
ret=eval("("+tmpret+")");
}catch(e){
var img=new Image;
return void(img.src=("http://mp.weixin.qq.com/mp/jsreport?1=1&key=3&content=biz:"+biz+",mid:"+mid+",uin:"+uin+"[key3]"+encodeURIComponent(tmpret)+"&r="+Math.random()).substr(0,1024));
}
if(fillVedio(ret.appmsgticket?ret.appmsgticket.ticket:""),ret.ret)return;
var adRenderData={};
if(0==is_need_ad)adRenderData=_adInfo,adRenderData||(adRenderData={
advertisement_num:0
});else{
if(ret.advertisement_num>0&&ret.advertisement_info){
var d=ret.advertisement_info;
adRenderData.advertisement_info=saveCopy(d);
}
adRenderData.advertisement_num=ret.advertisement_num;
}
1==is_need_ad&&(window._adRenderData=adRenderData),fillData({
adRenderData:adRenderData,
appmsgstat:ret.appmsgstat,
comment_enabled:ret.comment_enabled,
reward:{
self_head_img:ret.self_head_img,
reward_head_imgs:ret.reward_head_imgs||[],
timestamp:ret.timestamp
}
});
}catch(e){
var img=new Image;
return img.src=("http://mp.weixin.qq.com/mp/jsreport?1=1&key=1&content=biz:"+biz+",mid:"+mid+",uin:"+uin+"[key1]"+encodeURIComponent(e.toString())+"&r="+Math.random()).substr(0,1024),
void(console&&console.error(e));
}
},
error:function(){
var e=new Image;
e.src="http://mp.weixin.qq.com/mp/jsreport?1=1&key=2&content=biz:"+biz+",mid:"+mid+",uin:"+uin+"[key2]ajax_err&r="+Math.random();
}
});
}
function getMaxHeadImg(){
return window.onresize=function(){
console.log("resized"),onResize(),(reward_head_imgs.length||self_head_img)&&renderReward();
},onResize();
}
function onResize(){
var e=window.innerWidth||document.documentElement.innerWidth,a=30,t=34,n=Math.floor(.9*(e-a)/t);
return document.getElementById("js_reward_inner")&&(document.getElementById("js_reward_inner").style.width=n*t+"px"),
getMaxHeadImg=function(){
return 3*n;
},3*n;
}
require("biz_common/utils/string/html.js");
var iswifi=!1,ua=navigator.userAgent,DomEvent=require("biz_common/dom/event.js"),offset=200,ajax=require("biz_wap/utils/ajax.js"),Class=require("biz_common/dom/class.js"),TMPL=require("biz_common/tmpl.js"),iframes=document.getElementsByTagName("iframe"),iframe,js_content=document.getElementById("js_content"),vedio_iframes=[],w=js_content.offsetWidth,h=3*w/4;
window.logs.video_cnt=0;
for(var i=0,len=iframes.length;len>i;++i){
iframe=iframes[i];
var src=iframe.getAttribute("data-src"),realsrc=iframe.getAttribute("src")||src;
!realsrc||0!=realsrc.indexOf("http://v.qq.com/iframe/player.html")&&0!=realsrc.indexOf("http://z.weishi.com/weixin/player.html")||(realsrc=realsrc.replace(/width=\d+/g,"width="+w),
realsrc=realsrc.replace(/height=\d+/g,"height="+h),0==realsrc.indexOf("http://v.qq.com/iframe/player.html")?vedio_iframes.push({
iframe:iframe,
src:realsrc
}):iframe.setAttribute("src",realsrc),iframe.width=w,iframe.height=h,iframe.style.setProperty&&(iframe.style.setProperty("width",w+"px","important"),
iframe.style.setProperty("height",h+"px","important")),window.logs.video_cnt++);
}
window.adDatas={
ads:{},
num:0
};
var reward_head_imgs=[],self_head_img=null;
if(window.adRenderData||window.appmsgstat)fillVedio(window.appmsgticket),fillData({
adRenderData:saveCopy(window.adRenderData||{
flag:!0
}),
appmsgstat:window.appmsgstat||{
flag:!0
}
});else{
var js_toobar=document.getElementById("js_toobar"),innerHeight=window.innerHeight||document.documentElement.clientHeight,onScroll=function(){
var e=window.pageYOffset||document.documentElement.scrollTop,a=js_toobar.offsetTop;
e+innerHeight+offset>=a&&(getAsyncData(),DomEvent.off(window,"scroll",onScroll));
};
iswifi?(DomEvent.on(window,"scroll",onScroll),onScroll()):getAsyncData();
}
});