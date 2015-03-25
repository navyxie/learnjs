define("appmsg/iframe.js",[],function(){
"use strict";
function e(e){
var t=0;
e.contentDocument&&e.contentDocument.body.offsetHeight?t=e.contentDocument.body.offsetHeight:e.Document&&e.Document.body&&e.Document.body.scrollHeight?t=e.Document.body.scrollHeight:e.document&&e.document.body&&e.document.body.scrollHeight&&(t=e.document.body.scrollHeight);
var i=e.parentElement;
if(i&&(e.style.height=t+"px"),/MSIE\s(7|8)/.test(navigator.userAgent)&&e.contentWindow&&e.contentWindow.document){
var n=e.contentWindow.document.getElementsByTagName("html");
n&&n.length&&(n[0].style.overflow="hidden");
}
}
for(var t,i=document.getElementsByTagName("iframe"),n=document.getElementById("js_content"),o=document.getElementById("msg_page"),d=n?n.offsetWidth:o.offsetWidth,c=0,r=i.length;r>c;++c){
t=i[c];
var s=t.getAttribute("data-src"),m=t.className||"";
if(s&&(s.indexOf("newappmsgvote")>-1&&m.indexOf("js_editor_vote_card")>=0||0==s.indexOf("http://mp.weixin.qq.com/bizmall/appmsgcard")&&m.indexOf("card_iframe")>=0||s.indexOf("appmsgvote")>-1||s.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")>-1)){
if(s=s.replace(/^http:/,location.protocol),m.indexOf("card_iframe")>=0)t.setAttribute("src",s.replace("#wechat_redirect",["&uin=",uin,"&key=",key,"&pass_ticket=",pass_ticket,"&scene=",source,"&msgid=",appmsgid,"&msgidx=",itemidx||idx,"&version=",version,"&devicetype=",window.devicetype||""].join("")));else{
var a=s.indexOf("#wechat_redirect")>-1,l=["&uin=",uin,"&key=",key,"&pass_ticket=",pass_ticket].join(""),p=a?s.replace("#wechat_redirect",l):s+l;
t.setAttribute("src",p);
}
-1==s.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")&&!function(t){
t.onload=function(){
e(t);
};
}(t),t.appmsg_idx=c;
}
if(s&&s.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")>-1&&d>0){
var f=4*d/5,g=3*f/4;
t.width=f,t.height=g,t.style.setProperty&&(t.style.setProperty("width",f+"px","important"),
t.style.setProperty("height",g+"px","important"));
}
}
if(window.iframe_reload=function(){
for(var n=0,o=i.length;o>n;++n){
t=i[n];
var d=t.getAttribute("src");
d&&(d.indexOf("newappmsgvote")>-1||d.indexOf("appmsgvote")>-1)&&e(t);
}
},"getElementsByClassName"in document)for(var u,y=document.getElementsByClassName("video_iframe"),c=0;u=y.item(c++);)u.setAttribute("scrolling","no"),
u.style.overflow="hidden";
});