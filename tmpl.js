define("biz_common/tmpl.js",[],function(){
"use strict";
var n=function(n,t){
var r=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+n.replace(/[\r\t\n]/g," ").split("<#").join("	").replace(/((^|#>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)#>/g,"',$1,'").split("	").join("');").split("#>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");
return r(t);
},t=function(t,r){
return n(document.getElementById(t).innerHTML,r);
};
return{
render:t,
tmpl:n
};
});