define("biz_wap/utils/ajax.js",["biz_common/utils/url/parse.js"],function(e){
"use strict";
function t(e){
var t={};
return"undefined"!=typeof uin&&(t.uin=uin),"undefined"!=typeof key&&(t.key=key),
"undefined"!=typeof pass_ticket&&(t.pass_ticket=pass_ticket),o.join(e,t);
}
function n(e){
var n=(e.type||"GET").toUpperCase(),o=t(e.url),r="undefined"==typeof e.async?!0:e.async,s=new XMLHttpRequest,u=null,a=null;
if("object"==typeof e.data){
var i=e.data;
a=[];
for(var c in i)i.hasOwnProperty(c)&&a.push(c+"="+encodeURIComponent(i[c]));
a=a.join("&");
}else a="string"==typeof e.data?e.data:null;
s.open(n,o,r),s.onreadystatechange=function(){
3==s.readyState&&e.received&&e.received(s),4==s.readyState&&(s.status>=200&&s.status<400?e.success&&e.success(s.responseText):e.error&&e.error(s),
clearTimeout(u),e.complete&&e.complete(),e.complete=null);
},"POST"==n&&s.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),
s.setRequestHeader("X-Requested-With","XMLHttpRequest"),"undefined"!=typeof e.timeout&&(u=setTimeout(function(){
s.abort("timeout"),e.complete&&e.complete(),e.complete=null;
},e.timeout));
try{
s.send(a);
}catch(p){
e.error&&e.error();
}
}
var o=e("biz_common/utils/url/parse.js");
return n;
});