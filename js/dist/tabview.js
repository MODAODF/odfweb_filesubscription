!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/js/",n(n.s=5)}([function(e,t,n){"use strict";var i,a=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function s(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},i=[],a=0;a<e.length;a++){var r=e[a],c=t.base?r[0]+t.base:r[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=s(u),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(o[d].references++,o[d].updater(f)):o.push({identifier:u,updater:v(f,t),references:1}),i.push(u)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var a=n.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var o=r(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,i){var a=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var r=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(r,o[t]):e.appendChild(r)}}function p(e,t,n){var i=n.css,a=n.media,r=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var b=null,h=0;function v(e,t){var n,i,a;if(t.singleton){var r=h++;n=b||(b=l(t)),i=f.bind(null,n,r,!1),a=f.bind(null,n,r,!0)}else n=l(t),i=p.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var a=s(n[i]);o[a].references--}for(var r=c(e,t),l=0;l<n.length;l++){var u=s(n[l]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=r}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(i)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(a[o]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);i&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";var i=n(1),a=n.n(i)()((function(e){return e[1]}));a.push([e.i,"#fileSubscriptionTabView .msg{color:#000;padding:3px}#fileSubscriptionTabView .msg.success{color:#fff;background-color:#47a447}#fileSubscriptionTabView .msg.error{color:#fff;background-color:#d2322d}\n",""]),t.a=a},,,function(e,n,i){"use strict";i.r(n);var a,r=i(0),o=i.n(r),s=i(2),c={insert:"head",singleton:!1};o()(s.a,c),s.a.locals;a=OCA.Files.DetailTabView.extend({id:"fileSubscriptionTabView",className:"tab fileSubscriptionTabView",appId:"filesubscription",getLabel:function(){return t(this.appId,"subscription")},getIcon:function(){return"icon-mail"},template:function(){return'<div class="loading icon-loading-small"></div>\n\t\t\t  <div class="linksWrapper hidden"></div>'},_sectionTemplates:{getLinkFail:function(){return"<div>無法取得分享連結</div>"},noLink:function(){return"<div>沒有分享連結</div>"},initList:function(){return"<div>已建立的外部分享連結：<ul></ul></div>"},$li:function(e,t){return OCA.FileSubscription.Templates["sidebar-tabview"]({share:e,subscr:t})}},render:function(){this.$el.html(this.template()),this._getInitData(),this.delegateEvents({"click #mailBtn":"_onSendMailEvent","change input[name=subscribable]":"_onSubscrSetting"})},_shareLinks:null,_renderInitData:function(e){var t=$(".linksWrapper"),n=this._sectionTemplates;if(e&&e.data)if(e.data.length<1)t.html(n.noLink());else for(var i in t.html(n.initList()),this._shareLinks=e.data.sharing,e.data){var a=e.data[i];a.subscription||(a.subscription={id:null,share_id:a.sharing.id,emails:null,enabled:1,message:"",time:null});var r=n.$li(a.sharing,a.subscription);t.find("ul").append(r)}else t.html(n.getLinkFail());t.show()},_getInitData:function(){var e=this.getFileInfo(),t="".concat(e.attributes.path,"/").concat(e.attributes.name).replace("//","/");$.ajax({context:this,url:OC.generateUrl("/apps/filesubscription?format=json&path=".concat(encodeURIComponent(t))),type:"GET"}).done((function(e){this._renderInitData({data:e})})).fail((function(e){console.debug("Get InitData fail",e),this._renderInitData({data:null})})).always((function(e){$(this.$el).find(".loading").hide()}))},_onSendMailEvent:function(e){var t=$(e.target).closest("li").attr("index"),n=this._shareLinks[t].url;$.ajax({url:OC.generateUrl("/apps/filesubscription/mail"),type:"POST",data:{shareLink:n}}).done((function(e){console.debug("_onSendMailEvent ajax Done")})).fail((function(e){console.debug("_onSendMailEvent ajax fail")})).always((function(){console.debug("_onSendMailEvent ajax always")}))},_onSubscrSetting:function(e){var t=$(e.target).closest("li").attr("share-id"),n=$("li[share-id=".concat(t,"]")),i=n.find(".msg"),a={status:"",data:{message:""}};$.ajax({context:this,url:OC.generateUrl("/apps/filesubscription/update/"+t),type:"POST",data:{shareId:t,setVal:{enabled:$("#subscribable".concat(t)).is(":checked")}},beforeSend:function(){n.children("input, button").attr("disabled","disabled"),OC.msg.startAction(i,"設定中...")}}).done((function(){a.data.message="設定完成",a.status="success"})).fail((function(e){a.data.message="設定失敗",console.debug("filesubscription Setting fail",e)})).always((function(){OC.msg.finishedAction(i,a),n.children("input, button").removeAttr("disabled")}))}}),OCA.FileSubscription.TabView=a}]);