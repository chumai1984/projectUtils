!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.commonutils=e():t.commonutils=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o={equalValue:function(t,e){var r=Object.getOwnPropertyNames(t),u=Object.getOwnPropertyNames(e),a=!0;return r.length!==u.length?a=!1:r.map(function(r){"object"===n(t[r])?a=o.equalValue(t[r],e[r]):t[r]!==e[r]&&(a=!1)}),a},comprison:function(t){return function(e,r){var n=e[t]||0,o=r[t]||0;return n<o?-1:n>o?1:0}},deepClone:function(t,e){var r=void 0,n=void 0;for(r in n=JSON.stringify(t),n=JSON.parse(n),e=e||{},n)n.hasOwnProperty(r)&&(e[r]=n[r]);return n=null,e}};e.default=o},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=f(r(2)),o=f(r(3)),u=f(r(0)),a=f(r(4)),i=f(r(5)),c=f(r(6)),l=f(r(7));function f(t){return t&&t.__esModule?t:{default:t}}var s={array:n.default,date:o.default,obj:u.default,math:a.default,regular:i.default,other:c.default,storage:l.default,isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},isFunction:function(t){return"[object Function]"===Object.prototype.toString.call(t)},isBoolean:function(t){return"[object Boolean]"===Object.prototype.toString.call(t)},isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},isEmoptyObject:function(t){var e=!1;return Object.keys(t).length||(e=!0),e},isNumber:function(t){return"[object Number]"===Object.prototype.toString.call(t)},isString:function(t){return"[object String]"===Object.prototype.toString.call(t)}};e.default=s},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=r(0),a=(n=u)&&n.__esModule?n:{default:n};var i={unique:function(t,e){var r=[],n={};return t.map(function(t){var u=e?o(t[e])+t[e]:(void 0===t?"undefined":o(t))+t;1!==n[u]&&(r.push(t),n[u]=1)}),r},findValueInArray:function(t,e){var r=[];return t.map(function(t,n){"object"===(void 0===e?"undefined":o(e))?a.default.equalValue(t,e)&&r.push(n):e===t&&r.push(n)}),0===r.length?-1:1===r.length?r[0]:r},deleteValue:function(t,e){return t=t.filter(function(t){return"object"===(void 0===e?"undefined":o(e))?!1===a.default.equalValue(t,e):t!==e})}};e.default=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={format:function(t,e){var r=new Date(e)||new Date,n={"M+":r.getMonth()+1,"d+":r.getDate(),"h+":r.getHours()%12==0?12:r.getHours()%12,"H+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds(),"q+":Math.floor((r.getMonth()+3)/3),S:r.getMilliseconds()};for(var o in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(""+r.getFullYear()).substr(4-RegExp.$1.length))),n)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[o]:("00"+n[o]).substr((""+n[o]).length)));return t},nyr:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd";return n.format(e,t)},sfm:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hh:mm:ss";return n.format(e,t)}};e.default=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={add:function(t,e){var r,n,o,u;t=t||0,e=e||0;try{r=t.toString().split(".")[1].length}catch(t){r=0}try{n=e.toString().split(".")[1].length}catch(t){n=0}if(u=Math.abs(r-n),o=Math.pow(10,Math.max(r,n)),u>0){var a=Math.pow(10,u);r>n?(t=Number(t.toString().replace(".","")),e=Number(e.toString().replace(".",""))*a):(t=Number(t.toString().replace(".",""))*a,e=Number(e.toString().replace(".","")))}else t=Number(t.toString().replace(".","")),e=Number(e.toString().replace(".",""));return(t+e)/o},sub:function(t,e){var r,n,o;try{r=t.toString().split(".")[1].length}catch(t){r=0}try{n=e.toString().split(".")[1].length}catch(t){n=0}return o=Math.pow(10,Math.max(r,n)),parseFloat(((t*o-e*o)/o).toFixed(r>=n?r:n))},mul:function(t,e){t=t||0,e=e||0;var r=0,n=t.toString(),o=e.toString();try{r+=n.split(".")[1].length}catch(t){}try{r+=o.split(".")[1].length}catch(t){}return Number(n.replace(".",""))*Number(o.replace(".",""))/Math.pow(10,r)},div:function(t,e){t=t||0,e=e||0;var r=0,n=0;try{r=t.toString().split(".")[1].length}catch(t){}try{n=e.toString().split(".")[1].length}catch(t){}return Number(t.toString().replace(".",""))/Number(e.toString().replace(".",""))*Math.pow(10,n-r)},reduce:function(t,e){return t.reduce(function(t,r){return e(t,r)})},adds:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.reduce(e,n.add)},subs:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.reduce(e,n.sub)},muls:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.reduce(e,n.mul)},divs:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.reduce(e,n.div)}};e.default=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={email:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,phone:/^1[34578]{1}\d{9}$/,account:/^[a-zA-Z]\w{4,15}$/,password:/^[a-zA-Z].{5,17}$/,idCard:/(^\d{15}$)|(^\d{17}([0-9]|X)$)/,bankCard:/^\d{16,19}$/}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={formatMoney:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=arguments[2],n=arguments[3],o=arguments[4];t=(t+"").replace(/[^0-9+-Ee.]/g,""),o=o||"ceil";var u=isFinite(+t)?+t:0,a=isFinite(+e)?Math.abs(e):0,i=void 0===n?",":n,c=void 0===r?".":r,l="";l=(a?function(t,e){var r=Math.pow(10,e);return console.log(),""+parseFloat(Math[o](parseFloat((t*r).toFixed(2*e))).toFixed(2*e))/r}(u,a):""+Math.round(u)).split(".");for(var f=/(-?\d+)(\d{3})/;f.test(l[0]);)l[0]=l[0].replace(f,"$1"+i+"$2");return(l[1]||"").length<a&&(l[1]=l[1]||"",l[1]+=new Array(a-l[1].length+1).join("0")),l.join(c)},formatPhone:function(t){return t.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")}};e.default=n},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={getType:function(t){return Object.prototype.toString.call(t).match(/^\[object\s(.*)\]$/)[1]},setItem:function(t,e){"Object"!==n.getType(e)&&"Array"!==n.getType(e)||(e=JSON.stringify(e)),localStorage.setItem(t,e)},getItem:function(t,e){return null!==(e=localStorage.getItem(t))&&((e&&"{"===e.substring(0,1)||"["===e.substring(0,1))&&(e=JSON.parse(e)),e)},removeItem:function(t){n.getItem(t)&&localStorage.removeItem(t)},clear:function(){localStorage.clear()}};e.default=n}]).default});