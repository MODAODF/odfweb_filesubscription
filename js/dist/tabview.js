!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/js/",e(e.s=77)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,e(46))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,e){var r=e(3),o=e(28),i=e(24);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(10);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),c=[];function a(t){for(var n=-1,e=0;e<c.length;e++)if(c[e].identifier===t){n=e;break}return n}function u(t,n){for(var e={},r=[],o=0;o<t.length;o++){var i=t[o],u=n.base?i[0]+n.base:i[0],s=e[u]||0,f="".concat(u," ").concat(s);e[u]=s+1;var l=a(f),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(c[l].references++,c[l].updater(p)):c.push({identifier:f,updater:g(p,n),references:1}),r.push(f)}return r}function s(t){var n=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){n.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(n);else{var c=i(t.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(n)}return n}var f,l=(f=[],function(t,n){return f[t]=n,f.filter(Boolean).join("\n")});function p(t,n,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(n,o);else{var i=document.createTextNode(o),c=t.childNodes;c[n]&&t.removeChild(c[n]),c.length?t.insertBefore(i,c[n]):t.appendChild(i)}}function d(t,n,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var v=null,h=0;function g(t,n){var e,r,o;if(n.singleton){var i=h++;e=v||(v=s(n)),r=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=s(n),r=d.bind(null,e,n),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var e=u(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<e.length;r++){var o=a(e[r]);c[o].references--}for(var i=u(t,n),s=0;s<e.length;s++){var f=a(e[s]);0===c[f].references&&(c[f].updater(),c.splice(f,1))}e=i}}}},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var a=0;a<t.length;a++){var u=[].concat(t[a]);r&&o[u[0]]||(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),n.push(u))}},n}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(0),o=e(4),i=e(2),c=e(15),a=e(29),u=e(48),s=u.get,f=u.enforce,l=String(String).split("String");(t.exports=function(t,n,e,a){var u,s=!!a&&!!a.unsafe,p=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),(u=f(e)).source||(u.source=l.join("string"==typeof n?n:""))),t!==r?(s?!d&&t[n]&&(p=!0):delete t[n],p?t[n]=e:o(t,n,e)):p?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a(this)}))},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(0),o=e(22).f,i=e(4),c=e(11),a=e(15),u=e(52),s=e(57);t.exports=function(t,n){var e,f,l,p,d,v=t.target,h=t.global,g=t.stat;if(e=h?r:g?r[v]||a(v,{}):(r[v]||{}).prototype)for(f in n){if(p=n[f],l=t.noTargetGet?(d=o(e,f))&&d.value:e[f],!s(h?f:v+(g?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,f,p,t)}}},function(t,n,e){var r=e(25),o=e(9);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(0),o=e(4);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(0),o=e(15),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(51),o=e(16);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.10.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r={};r[e(19)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,n,e){var r=e(0),o=e(17),i=e(2),c=e(30),a=e(39),u=e(66),s=o("wks"),f=r.Symbol,l=u?f:f&&f.withoutSetter||c;t.exports=function(t){return i(s,t)&&(a||"string"==typeof s[t])||(a&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},function(t,n,e){"use strict";var r=e(7),o=e.n(r)()((function(t){return t[1]}));o.push([t.i,"#fileSubscriptionTabView #mailBtn{color:red}\n",""]),n.a=o},,function(t,n,e){var r=e(3),o=e(23),i=e(24),c=e(14),a=e(26),u=e(2),s=e(27),f=Object.getOwnPropertyDescriptor;n.f=r?f:function(t,n){if(t=c(t),n=a(n,!0),s)try{return f(t,n)}catch(t){}if(u(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(1),o=e(8),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(10);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(3),o=e(1),i=e(47);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(3),o=e(27),i=e(5),c=e(26),a=Object.defineProperty;n.f=r?a:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(16),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n){t.exports={}},function(t,n,e){var r=e(54),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(2),o=e(14),i=e(34).indexOf,c=e(31);t.exports=function(t,n){var e,a=o(t),u=0,s=[];for(e in a)!r(c,e)&&r(a,e)&&s.push(e);for(;n.length>u;)r(a,e=n[u++])&&(~i(s,e)||s.push(e));return s}},function(t,n,e){var r=e(14),o=e(35),i=e(56),c=function(t){return function(n,e,c){var a,u=r(n),s=o(u.length),f=i(c,s);if(t&&e!=e){for(;s>f;)if((a=u[f++])!=a)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,e){var r=e(12),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(9);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(63),o=e(64),i=e(1);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(r?38===o:o>37&&o<41)}))},function(t,n,e){"use strict";var r=e(13),o=e(41);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,n,e){"use strict";var r,o,i=e(42),c=e(69),a=e(17),u=RegExp.prototype.exec,s=a("native-string-replace",String.prototype.replace),f=u,l=(r=/a/,o=/b*/g,u.call(r,"a"),u.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),p=c.UNSUPPORTED_Y||c.BROKEN_CARET,d=void 0!==/()??/.exec("")[1];(l||d||p)&&(f=function(t){var n,e,r,o,c=this,a=p&&c.sticky,f=i.call(c),v=c.source,h=0,g=t;return a&&(-1===(f=f.replace("y","")).indexOf("g")&&(f+="g"),g=String(t).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==t[c.lastIndex-1])&&(v="(?: "+v+")",g=" "+g,h++),e=new RegExp("^(?:"+v+")",f)),d&&(e=new RegExp("^"+v+"$(?!\\s)",f)),l&&(n=c.lastIndex),r=u.call(a?e:c,g),a?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=c.lastIndex,c.lastIndex+=r[0].length):c.lastIndex=0:l&&r&&(c.lastIndex=c.global?r.index+r[0].length:n),d&&r&&r.length>1&&s.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=f},function(t,n,e){"use strict";var r=e(5);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,e){"use strict";e(45),e(59),e(62),e(40),e(70),e(71),Object.defineProperty(n,"__esModule",{value:!0}),n.getRootUrl=n.generateFilePath=n.imagePath=n.generateUrl=n.generateOcsUrl=n.generateRemoteUrl=n.linkTo=void 0;n.linkTo=function(t,n){return r(t,"",n)};n.generateRemoteUrl=function(t){return window.location.protocol+"//"+window.location.host+function(t){return o()+"/remote.php/"+t}(t)};n.generateOcsUrl=function(t,n){return n=2!==n?1:2,window.location.protocol+"//"+window.location.host+o()+"/ocs/v"+n+".php/"+t+"/"};n.generateUrl=function(t,n,e){var r=Object.assign({escape:!0,noRewrite:!1},e||{}),i=function(t,n){return n=n||{},t.replace(/{([^{}]*)}/g,(function(t,e){var o=n[e];return r.escape?"string"==typeof o||"number"==typeof o?encodeURIComponent(o.toString()):encodeURIComponent(t):"string"==typeof o||"number"==typeof o?o.toString():t}))};return"/"!==t.charAt(0)&&(t="/"+t),!0!==OC.config.modRewriteWorking||r.noRewrite?o()+"/index.php"+i(t,n||{}):o()+i(t,n||{})};n.imagePath=function(t,n){return-1===n.indexOf(".")?r(t,"img",n+".svg"):r(t,"img",n)};var r=function(t,n,e){var r=-1!==OC.coreApps.indexOf(t),i=o();return"php"!==e.substring(e.length-3)||r?"php"===e.substring(e.length-3)||r?(i+="settings"!==t&&"core"!==t&&"search"!==t||"ajax"!==n?"/":"/index.php/",r||(i+="apps/"),""!==t&&(i+=t+="/"),n&&(i+=n+"/"),i+=e):(i=OC.appswebroots[t],n&&(i+="/"+n+"/"),"/"!==i.substring(i.length-1)&&(i+="/"),i+=e):(i+="/index.php/apps/"+t,"index.php"!==e&&(i+="/",n&&(i+=encodeURI(n+"/")),i+=e)),i};n.generateFilePath=r;var o=function(){return OC.webroot};n.getRootUrl=o},,function(t,n,e){"use strict";var r=e(13),o=e(34).indexOf,i=e(58),c=[].indexOf,a=!!c&&1/[1].indexOf(1,-0)<0,u=i("indexOf");r({target:"Array",proto:!0,forced:a||!u},{indexOf:function(t){return a?c.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(0),o=e(10),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,e){var r,o,i,c=e(49),a=e(0),u=e(10),s=e(4),f=e(2),l=e(16),p=e(50),d=e(31),v=a.WeakMap;if(c){var h=l.state||(l.state=new v),g=h.get,b=h.has,x=h.set;r=function(t,n){return n.facade=t,x.call(h,t,n),n},o=function(t){return g.call(h,t)||{}},i=function(t){return b.call(h,t)}}else{var y=p("state");d[y]=!0,r=function(t,n){return n.facade=t,s(t,y,n),n},o=function(t){return f(t,y)?t[y]:{}},i=function(t){return f(t,y)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!u(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(0),o=e(29),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(17),o=e(30),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports=!1},function(t,n,e){var r=e(2),o=e(53),i=e(22),c=e(28);t.exports=function(t,n){for(var e=o(n),a=c.f,u=i.f,s=0;s<e.length;s++){var f=e[s];r(t,f)||a(t,f,u(n,f))}}},function(t,n,e){var r=e(32),o=e(55),i=e(37),c=e(5);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(33),o=e(36).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(12),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n,e){var r=e(1),o=/#|\.prototype\./,i=function(t,n){var e=a[c(t)];return e==s||e!=u&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,n,e){"use strict";var r=e(1);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){var r=e(13),o=e(60);r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},function(t,n,e){"use strict";var r=e(3),o=e(1),i=e(61),c=e(37),a=e(23),u=e(38),s=e(25),f=Object.assign,l=Object.defineProperty;t.exports=!f||o((function(){if(r&&1!==f({b:1},f(l({},"a",{enumerable:!0,get:function(){l(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},n={},e=Symbol();return t[e]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),7!=f({},t)[e]||"abcdefghijklmnopqrst"!=i(f({},n)).join("")}))?function(t,n){for(var e=u(t),o=arguments.length,f=1,l=c.f,p=a.f;o>f;)for(var d,v=s(arguments[f++]),h=l?i(v).concat(l(v)):i(v),g=h.length,b=0;g>b;)d=h[b++],r&&!p.call(v,d)||(e[d]=v[d]);return e}:f},function(t,n,e){var r=e(33),o=e(36);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(18),o=e(11),i=e(67);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,n,e){var r=e(8),o=e(0);t.exports="process"==r(o.process)},function(t,n,e){var r,o,i=e(0),c=e(65),a=i.process,u=a&&a.versions,s=u&&u.v8;s?o=(r=s.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){var r=e(32);t.exports=r("navigator","userAgent")||""},function(t,n,e){var r=e(39);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){"use strict";var r=e(18),o=e(68);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,n,e){var r=e(18),o=e(8),i=e(19)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:c?o(n):"Object"==(r=o(n))&&"function"==typeof n.callee?"Arguments":r}},function(t,n,e){"use strict";var r=e(1);function o(t,n){return RegExp(t,n)}n.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),n.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,n,e){"use strict";var r=e(11),o=e(5),i=e(1),c=e(42),a=RegExp.prototype,u=a.toString,s=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f="toString"!=u.name;(s||f)&&r(RegExp.prototype,"toString",(function(){var t=o(this),n=String(t.source),e=t.flags;return"/"+n+"/"+String(void 0===e&&t instanceof RegExp&&!("flags"in a)?c.call(t):e)}),{unsafe:!0})},function(t,n,e){"use strict";var r=e(72),o=e(5),i=e(35),c=e(12),a=e(9),u=e(73),s=e(75),f=e(76),l=Math.max,p=Math.min;r("replace",2,(function(t,n,e,r){var d=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=r.REPLACE_KEEPS_$0,h=d?"$":"$0";return[function(e,r){var o=a(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,r):n.call(String(o),e,r)},function(t,r){if(!d&&v||"string"==typeof r&&-1===r.indexOf(h)){var a=e(n,t,this,r);if(a.done)return a.value}var g=o(t),b=String(this),x="function"==typeof r;x||(r=String(r));var y=g.global;if(y){var m=g.unicode;g.lastIndex=0}for(var S=[];;){var E=f(g,b);if(null===E)break;if(S.push(E),!y)break;""===String(E[0])&&(g.lastIndex=u(b,i(g.lastIndex),m))}for(var O,w="",j=0,_=0;_<S.length;_++){E=S[_];for(var R=String(E[0]),T=l(p(c(E.index),b.length),0),P=[],I=1;I<E.length;I++)P.push(void 0===(O=E[I])?O:String(O));var k=E.groups;if(x){var C=[R].concat(P,T,b);void 0!==k&&C.push(k);var A=String(r.apply(void 0,C))}else A=s(R,b,T,P,k,r);T>=j&&(w+=b.slice(j,T)+A,j=T+R.length)}return w+b.slice(j)}]}))},function(t,n,e){"use strict";e(40);var r=e(11),o=e(1),i=e(19),c=e(4),a=i("species"),u=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s="$0"==="a".replace(/./,"$0"),f=i("replace"),l=!!/./[f]&&""===/./[f]("a","$0"),p=!o((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,n,e,f){var d=i(t),v=!o((function(){var n={};return n[d]=function(){return 7},7!=""[t](n)})),h=v&&!o((function(){var n=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[a]=function(){return e},e.flags="",e[d]=/./[d]),e.exec=function(){return n=!0,null},e[d](""),!n}));if(!v||!h||"replace"===t&&(!u||!s||l)||"split"===t&&!p){var g=/./[d],b=e(d,""[t],(function(t,n,e,r,o){return n.exec===RegExp.prototype.exec?v&&!o?{done:!0,value:g.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:l}),x=b[0],y=b[1];r(String.prototype,t,x),r(RegExp.prototype,d,2==n?function(t,n){return y.call(t,this,n)}:function(t){return y.call(t,this)})}f&&c(RegExp.prototype[d],"sham",!0)}},function(t,n,e){"use strict";var r=e(74).charAt;t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},function(t,n,e){var r=e(12),o=e(9),i=function(t){return function(n,e){var i,c,a=String(o(n)),u=r(e),s=a.length;return u<0||u>=s?t?"":void 0:(i=a.charCodeAt(u))<55296||i>56319||u+1===s||(c=a.charCodeAt(u+1))<56320||c>57343?t?a.charAt(u):i:t?a.slice(u,u+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,e){var r=e(38),o=Math.floor,i="".replace,c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,a=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,n,e,u,s,f){var l=e+t.length,p=u.length,d=a;return void 0!==s&&(s=r(s),d=c),i.call(f,d,(function(r,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,e);case"'":return n.slice(l);case"<":c=s[i.slice(1,-1)];break;default:var a=+i;if(0===a)return r;if(a>p){var f=o(a/10);return 0===f?r:f<=p?void 0===u[f-1]?i.charAt(1):u[f-1]+i.charAt(1):r}c=u[a-1]}return void 0===c?"":c}))}},function(t,n,e){var r=e(8),o=e(41);t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var i=e.call(t,n);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(n,e,r){"use strict";r.r(e);var o,i=r(43),c=r(6),a=r.n(c),u=r(20),s={insert:"head",singleton:!1};a()(u.a,s),u.a.locals;o=OCA.Files.DetailTabView.extend({id:"fileSubscriptionTabView",className:"tab fileSubscriptionTabView",appId:"filesubscription",getLabel:function(){return t(this.appId,"subscription")},getIcon:function(){return"icon-mail"},template:function(){return'<div class="loading icon-loading-small"></div>\n\t\t\t  <div class="linksWrapper hidden"></div>'},_templates:{getLinkFail:function(){return"<div>無法取得分享連結</div>"},noLink:function(){return"<div>沒有分享連結</div>"},initList:function(){return"<div>已建立的外部分享連結：<ul></ul></div>"},$li:function(n,e){return"<li file-id=".concat(e.id," index=").concat(n,">\n\t\t\t\t\t<h5><b>分享連結(").concat(e.label,")</b></h5>\n\t\t\t\t\t<span>").concat(e.url,'</span>\n\t\t\t\t\t<button id="mailBtn" type="button">').concat(t(this.appId,"Send mail"),"</button>\n\t\t\t\t</li><hr>")}},render:function(){this.$el.html(this.template()),this._getShareLinks(),this.delegateEvents({"click #mailBtn":"_onSendMailEvent"})},_shareLinks:null,_renderShareLinksResult:function(t){var n=$(".linksWrapper"),e=this._templates;t&&t.ocs.data?t.ocs.data.length<1?n.html(e.noLink()):(n.html(e.initList()),this._shareLinks=t.ocs.data,this._shareLinks.forEach((function(t,r){if(t.share_type===OC.Share.SHARE_TYPE_LINK){var o=e.$li(r,t);n.find("ul").append(o)}}))):n.html(e.getLinkFail()),n.show()},_getShareLinks:function(){var t=this.getFileInfo(),n="".concat(t.attributes.path,"/").concat(t.attributes.name).replace("//","/"),e=Object(i.generateOcsUrl)("apps/files_sharing/api/v1/shares?format=json&path=".concat(encodeURIComponent(n)),2),r=this;$.ajax({url:e,type:"GET"}).done((function(){})).fail((function(t){console.debug("filesubscription _getShareLinks fail",t)})).always((function(t){$(r.$el).find(".loading").hide(),r._renderShareLinksResult(t)}))},_onSendMailEvent:function(t){var n=$(t.target).closest("li").attr("index"),e=this._shareLinks[n].url;$.ajax({url:OC.generateUrl("/apps/filesubscription/mail"),type:"POST",data:{shareLink:e}}).done((function(t){console.debug("_onSendMailEvent ajax Done")})).fail((function(t){console.debug("_onSendMailEvent ajax fail")})).always((function(){console.debug("_onSendMailEvent ajax always")}))}}),OCA.FileSubscription.TabView=o}]);