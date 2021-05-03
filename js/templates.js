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
    return " checked ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li share-id="
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"share") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + " >\n    <h5><b>分享連結 "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"share") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + " ("
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"share") : depth0)) != null ? lookupProperty(stack1,"label") : stack1), depth0))
    + ")</b></h5>\n\n    <input type=\"checkbox\" class=\"checkbox\" name=\"subscribable\" id=\"subscribable"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"share") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"subscr") : depth0)) != null ? lookupProperty(stack1,"enabled") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":94},"end":{"line":5,"column":133}}})) != null ? stack1 : "")
    + ">\n    <label for=\"subscribable"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"share") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\">開放訂閱</label>\n\n    <span>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"share") : depth0)) != null ? lookupProperty(stack1,"url") : stack1), depth0))
    + "</span>\n    <button id=\"mailBtn\" type=\"button\">SendMail</button>\n    <span class=\"msg hidden\"></span>\n\n</li><hr>\n";
},"useData":true});
})();