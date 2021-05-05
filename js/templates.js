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
    + "\">\n            <label for=\"submit-mail\" class=\"icon-confirm\"></label>\n        </form>\n        <div><span class=\"msg hidden\"></span></div>\n    </div>\n</div>\n";
},"useData":true});
templates['sidebar-tabview'] = template({"1":function(container,depth0,helpers,partials,data) {
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
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <em>上次更新於 "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"updateAt") || (depth0 != null ? lookupProperty(depth0,"updateAt") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"updateAt","hash":{},"data":data,"loc":{"start":{"line":19,"column":18},"end":{"line":19,"column":30}}}) : helper)))
    + "</em>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return " checked ";
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
    + ")</span></div>\n        </div>\n        <button class=\"entryEdit icon icon-caret-dark rotate\"></button>\n    </div>\n\n    <ul>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"updateAt") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":8},"end":{"line":20,"column":15}}})) != null ? stack1 : "")
    + "\n        <li>\n            <input type=\"checkbox\" class=\"checkbox\" name=\"subscribable\" id=\"subscribable"
    + alias4(((helper = (helper = lookupProperty(helpers,"shareId") || (depth0 != null ? lookupProperty(depth0,"shareId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shareId","hash":{},"data":data,"loc":{"start":{"line":23,"column":88},"end":{"line":23,"column":99}}}) : helper)))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":101},"end":{"line":23,"column":134}}})) != null ? stack1 : "")
    + ">\n            <label for=\"subscribable"
    + alias4(((helper = (helper = lookupProperty(helpers,"shareId") || (depth0 != null ? lookupProperty(depth0,"shareId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shareId","hash":{},"data":data,"loc":{"start":{"line":24,"column":36},"end":{"line":24,"column":47}}}) : helper)))
    + "\">開放訂閱</label>\n            <span class=\"msg hidden\"></span>\n        </li>\n\n        <li>\n            <div>\n                <div class=\"icon icon-edit\"></div>\n                <span>文件更新說明</span>\n                <span class=\"msg hidden\"></span>\n            </div>\n            <textarea name=\"versionDescr\" id=\"versionDescr"
    + alias4(((helper = (helper = lookupProperty(helpers,"shareId") || (depth0 != null ? lookupProperty(depth0,"shareId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shareId","hash":{},"data":data,"loc":{"start":{"line":34,"column":58},"end":{"line":34,"column":69}}}) : helper)))
    + "\" rows=\"5\" wrap=\"hard\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"message") || (depth0 != null ? lookupProperty(depth0,"message") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"message","hash":{},"data":data,"loc":{"start":{"line":34,"column":92},"end":{"line":34,"column":103}}}) : helper)))
    + "</textarea>\n            <div>\n                <em>此修改說明即為訂閱信件之內文。 </em>\n                <button class=\"setDescr\" type=\"button\">儲存</button>\n            </div>\n        </li>\n\n        <li>\n            <div>\n                <div class=\"icon icon-mail\"></div>\n                <span>訂閱郵件</span>\n                <span class=\"msg hidden\"></span>\n            </div>\n            <button class=\"mailBtn\" type=\"button\">傳送電子郵件("
    + alias4(((helper = (helper = lookupProperty(helpers,"subscriberNum") || (depth0 != null ? lookupProperty(depth0,"subscriberNum") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subscriberNum","hash":{},"data":data,"loc":{"start":{"line":47,"column":57},"end":{"line":47,"column":74}}}) : helper)))
    + ")</button>\n        </li>\n    </ul>\n";
},"useData":true});
})();