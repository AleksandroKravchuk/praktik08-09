parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"VyAM":[function(require,module,exports) {

},{"./material-icons.woff2":[["material-icons.dce8adde.woff2","jrbM"],"jrbM"],"./material-icons.woff":[["material-icons.0fe0d993.woff","Yvfm"],"Yvfm"],"./material-icons-outlined.woff2":[["material-icons-outlined.4a450910.woff2","pntH"],"pntH"],"./material-icons-outlined.woff":[["material-icons-outlined.1ae85e34.woff","eioR"],"eioR"],"./material-icons-round.woff2":[["material-icons-round.9ee12ec2.woff2","RIaD"],"RIaD"],"./material-icons-round.woff":[["material-icons-round.674f5bd8.woff","LHs7"],"LHs7"],"./material-icons-sharp.woff2":[["material-icons-sharp.ed70e1d2.woff2","C7Xf"],"C7Xf"],"./material-icons-sharp.woff":[["material-icons-sharp.cf601ecc.woff","IyUV"],"IyUV"],"./material-icons-two-tone.woff2":[["material-icons-two-tone.d9560466.woff2","jmQe"],"jmQe"],"./material-icons-two-tone.woff":[["material-icons-two-tone.95d18c6d.woff","FyI7"],"FyI7"]}],"clu1":[function(require,module,exports) {

},{}],"qJUB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getRefs=void 0;const e=()=>({formSearch:document.querySelector(".js-search"),modalForm:document.querySelector(".js-modal-form"),contactsList:document.querySelector(".js-contacts-list")});exports.getRefs=e;
},{}],"Focm":[function(require,module,exports) {
"use strict";require("material-icons/iconfont/material-icons.css"),require("./sass/main.scss");var e=require("./js/getRefs");const{formSearch:t,modalForm:s,contactsList:a}=(0,e.getRefs)();s.addEventListener("submit",e=>{e.preventDefault();const{name:t,phone:a,email:i}=e.target,r=t.value.trim(),n=a.value.trim(),l=i.value.trim();if(!r||!n||!l)return void alert("Please fill in all fields");const o={};o.name=r,o.phone=n,o.email=l;localStorage.setItem("contacts",JSON.stringify(o));console.log(o),s.reset()});
},{"material-icons/iconfont/material-icons.css":"VyAM","./sass/main.scss":"clu1","./js/getRefs":"qJUB"}]},{},["Focm"], null)
//# sourceMappingURL=/praktik08-09/src.d5ab2ccb.js.map