define("biz_common/utils/cookie.js",[],function(){
"use strict";
var e={
get:function(e){
if(""==e)return"";
var t=new RegExp(e+"=([^;]*)"),n=document.cookie.match(t);
return n&&n[1]||"";
},
set:function(e,t){
var n=new Date;
n.setDate(n.getDate()+1);
var r=n.toGMTString();
return document.cookie=e+"="+t+";expires="+r,!0;
}
};
return e;
});