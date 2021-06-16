(function() {
  var template = Handlebars.template, templates = OCA.FileSubscription.Templates = OCA.FileSubscription.Templates || {};
templates['sharedfile-header'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"subscription-icon\" class=\"icon-mail\"></div>\n\n<div id=\"subscription-content\" class=\"popovermenu hidden\">\n    <div class=\"content\">\n        <h3>SUBSCRIBE</h3>\n        <em>Subscrib this file to get the new version of the file and modification instructions.</em>\n        <form id=\"subscription-mail\">\n            <input id=\"submit-mail\" type=\"submit\" class=\"hidden\">\n            <input type=\"email\" name=\"email\" placeholder=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"placeholder") || (depth0 != null ? lookupProperty(depth0,"placeholder") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":9,"column":58},"end":{"line":9,"column":73}}}) : helper)))
    + "\">\n            <label for=\"submit-mail\" class=\"icon-confirm\"></label>\n        </form>\n        <div><a id=\"unsubscr\">unsubscribe</a></div>\n        <div><span class=\"msg hidden\"></span></div>\n    </div>\n</div>\n";
},"useData":true});
templates['sidebar-invaildItem'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                (<span>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"labelName") || (depth0 != null ? lookupProperty(depth0,"labelName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"labelName","hash":{},"data":data,"loc":{"start":{"line":8,"column":23},"end":{"line":8,"column":36}}}) : helper)))
    + "</span>)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n    <div class=\"itemEntry\">\n        <div class=\"entryAvatar entryAvatarInvaild icon icon-public-white\"></div>\n        <div class=\"entryDesc\">\n            <h5><b>分享連結"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"shareId") || (depth0 != null ? lookupProperty(depth0,"shareId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"shareId","hash":{},"data":data,"loc":{"start":{"line":6,"column":23},"end":{"line":6,"column":34}}}) : helper)))
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"labelName") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":16},"end":{"line":9,"column":23}}})) != null ? stack1 : "")
    + "            </b></h5>\n            <div>分享連結已刪除</div>\n        </div>\n        <button class=\"entryEdit icon icon-caret-dark rotate\"></button>\n    </div>\n\n    <ul>\n\n        <li>\n            <div>此分享連已刪除，可下載通知說明紀錄或刪除訂閱。</div>\n            <div><span class=\"msg hidden\"></span></div>\n            <div>\n                <button class=\"downloadLog\" type=\"button\">下載通知紀錄</button>\n            </div>\n            <div><button class=\"deleteLog\" type=\"button\">刪除訂閱</button></div>\n        </li>\n\n    </ul>\n";
},"useData":true});
templates['sidebar-vaildItem'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                (<span>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"labelName") || (depth0 != null ? lookupProperty(depth0,"labelName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"labelName","hash":{},"data":data,"loc":{"start":{"line":8,"column":23},"end":{"line":8,"column":36}}}) : helper)))
    + "</span>)\n";
},"3":function(container,depth0,helpers,partials,data) {
    return " checked ";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <em class=\"lasttime\">上次更新於 "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"lastMessageTime") || (depth0 != null ? lookupProperty(depth0,"lastMessageTime") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"lastMessageTime","hash":{},"data":data,"loc":{"start":{"line":33,"column":43},"end":{"line":33,"column":62}}}) : helper)))
    + "</em>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <em>上次傳送於 <span>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"lastEmailTime") || (depth0 != null ? lookupProperty(depth0,"lastEmailTime") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"lastEmailTime","hash":{},"data":data,"loc":{"start":{"line":48,"column":32},"end":{"line":48,"column":49}}}) : helper)))
    + "</span></em>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"lasttime\"><em>上次取消於 <span>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"lastCancelTime") || (depth0 != null ? lookupProperty(depth0,"lastCancelTime") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"lastCancelTime","hash":{},"data":data,"loc":{"start":{"line":62,"column":50},"end":{"line":62,"column":68}}}) : helper)))
    + "</span></em></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n    <div class=\"itemEntry\">\n        <div class=\"entryAvatar "
    + alias4(((helper = (helper = lookupProperty(helpers,"entryAvatarCssClass") || (depth0 != null ? lookupProperty(depth0,"entryAvatarCssClass") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"entryAvatarCssClass","hash":{},"data":data,"loc":{"start":{"line":4,"column":32},"end":{"line":4,"column":55}}}) : helper)))
    + " icon icon-public-white\"></div>\n        <div class=\"entryDesc\">\n            <h5><b>分享連結"
    + alias4(((helper = (helper = lookupProperty(helpers,"shareId") || (depth0 != null ? lookupProperty(depth0,"shareId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shareId","hash":{},"data":data,"loc":{"start":{"line":6,"column":23},"end":{"line":6,"column":34}}}) : helper)))
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"labelName") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":16},"end":{"line":9,"column":23}}})) != null ? stack1 : "")
    + "            </b></h5>\n            <div><span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"entryEnableString") || (depth0 != null ? lookupProperty(depth0,"entryEnableString") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"entryEnableString","hash":{},"data":data,"loc":{"start":{"line":11,"column":23},"end":{"line":11,"column":44}}}) : helper)))
    + "訂閱</span> | <span>訂閱人數("
    + alias4(((helper = (helper = lookupProperty(helpers,"subscriberNum") || (depth0 != null ? lookupProperty(depth0,"subscriberNum") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subscriberNum","hash":{},"data":data,"loc":{"start":{"line":11,"column":67},"end":{"line":11,"column":84}}}) : helper)))
    + ")</span></div>\n        </div>\n        <button class=\"entryEdit icon icon-caret-dark rotate\"></button>\n    </div>\n\n    <ul>\n        <li>\n            <input type=\"checkbox\" class=\"checkbox\" name=\"subscribable\" id=\"subscribable"
    + alias4(((helper = (helper = lookupProperty(helpers,"shareId") || (depth0 != null ? lookupProperty(depth0,"shareId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shareId","hash":{},"data":data,"loc":{"start":{"line":18,"column":88},"end":{"line":18,"column":99}}}) : helper)))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":101},"end":{"line":18,"column":134}}})) != null ? stack1 : "")
    + ">\n            <label for=\"subscribable"
    + alias4(((helper = (helper = lookupProperty(helpers,"shareId") || (depth0 != null ? lookupProperty(depth0,"shareId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shareId","hash":{},"data":data,"loc":{"start":{"line":19,"column":36},"end":{"line":19,"column":47}}}) : helper)))
    + "\">開放訂閱</label>\n            <span class=\"msg hidden\"></span>\n        </li>\n\n        <li>\n            <div>\n                <div class=\"icon icon-edit\"></div>\n                <span>訂閱通知說明</span>\n                <span class=\"msg hidden\"></span>\n            </div>\n            <div><em>此說明即為訂閱郵件內文。</em></div>\n            <textarea name=\"versionDescr\" id=\"versionDescr"
    + alias4(((helper = (helper = lookupProperty(helpers,"shareId") || (depth0 != null ? lookupProperty(depth0,"shareId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shareId","hash":{},"data":data,"loc":{"start":{"line":30,"column":58},"end":{"line":30,"column":69}}}) : helper)))
    + "\" rows=\"5\" wrap=\"hard\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"message") || (depth0 != null ? lookupProperty(depth0,"message") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"message","hash":{},"data":data,"loc":{"start":{"line":30,"column":92},"end":{"line":30,"column":103}}}) : helper)))
    + "</textarea>\n            <div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"lastMessageTime") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":16},"end":{"line":34,"column":23}}})) != null ? stack1 : "")
    + "                <button class=\"setDescr\" type=\"button\">儲存</button>\n            </div>\n        </li>\n\n        <li>\n            <div>\n                <div class=\"icon icon-mail\"></div>\n                <span>訂閱郵件</span>\n                <span class=\"msg hidden\"></span>\n            </div>\n            <button class=\"sendSubscrMail\" type=\"button\">傳送訂閱郵件("
    + alias4(((helper = (helper = lookupProperty(helpers,"subscriberNum") || (depth0 != null ? lookupProperty(depth0,"subscriberNum") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subscriberNum","hash":{},"data":data,"loc":{"start":{"line":45,"column":64},"end":{"line":45,"column":81}}}) : helper)))
    + ")</button>\n            <div class=\"lasttime\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"lastEmailTime") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":16},"end":{"line":49,"column":23}}})) != null ? stack1 : "")
    + "            </div>\n        </li>\n\n        <li>\n            <div>\n                <div class=\"icon icon-delete\"></div>\n                <span>取消訂閱</span>\n                <span class=\"msg hidden\"></span>\n            </div>\n            <button class=\"cancelSubscr\" type=\"button\">取消訂閱者("
    + alias4(((helper = (helper = lookupProperty(helpers,"subscriberNum") || (depth0 != null ? lookupProperty(depth0,"subscriberNum") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subscriberNum","hash":{},"data":data,"loc":{"start":{"line":59,"column":61},"end":{"line":59,"column":78}}}) : helper)))
    + ")</button>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"lastCancelTime") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":61,"column":12},"end":{"line":63,"column":19}}})) != null ? stack1 : "")
    + "        </li>\n    </ul>\n";
},"useData":true});
})();