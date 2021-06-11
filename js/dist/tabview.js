/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/tabview.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/tabview.scss":
/*!**************************!*\
  !*** ./css/tabview.scss ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tabview_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./tabview.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/tabview.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tabview_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tabview_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/tabview.scss":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/tabview.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#fileSubscriptionTabView {\n  /* utilize */ }\n  #fileSubscriptionTabView .icon {\n    display: inline-block; }\n  #fileSubscriptionTabView .msg {\n    color: #000;\n    font-size: 13px;\n    padding: 2px;\n    margin-left: 5px; }\n    #fileSubscriptionTabView .msg.success {\n      color: #fff;\n      background-color: #47a447; }\n    #fileSubscriptionTabView .msg.error {\n      color: #fff;\n      background-color: #d2322d; }\n  #fileSubscriptionTabView .lasttime {\n    font-size: 13px; }\n  #fileSubscriptionTabView .itemEntry {\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n    #fileSubscriptionTabView .itemEntry .entryAvatar, #fileSubscriptionTabView .itemEntry button {\n      width: 32px;\n      height: 32px;\n      border-radius: 50%; }\n    #fileSubscriptionTabView .itemEntry .entryAvatarClose {\n      background-color: #ef5350; }\n    #fileSubscriptionTabView .itemEntry .entryAvatarOpen {\n      background-color: #8bc34a; }\n    #fileSubscriptionTabView .itemEntry .entryDesc {\n      display: flex;\n      flex-direction: column;\n      padding: 8px;\n      line-height: 1.2em;\n      overflow: hidden; }\n      #fileSubscriptionTabView .itemEntry .entryDesc div {\n        font-size: 12.5px;\n        color: var(--color-text-maxcontrast); }\n    #fileSubscriptionTabView .itemEntry button.entryEdit {\n      background-color: inherit;\n      border: none;\n      margin-left: auto;\n      transition: all .05s ease-in-out; }\n      #fileSubscriptionTabView .itemEntry button.entryEdit:enabled:hover {\n        background-color: lightgrey; }\n      #fileSubscriptionTabView .itemEntry button.entryEdit.rotate {\n        transform: rotate(180deg); }\n  #fileSubscriptionTabView ul {\n    margin-left: 32px; }\n    #fileSubscriptionTabView ul::after {\n      content: \" \";\n      border-bottom: 2px solid #e0e0e0;\n      display: block;\n      margin: 30px 0;\n      position: relative; }\n    #fileSubscriptionTabView ul li {\n      margin-top: 25px; }\n      #fileSubscriptionTabView ul li > div:first-child {\n        display: flex;\n        align-items: center;\n        margin-bottom: 5px; }\n        #fileSubscriptionTabView ul li > div:first-child .icon {\n          margin-right: 10px; }\n    #fileSubscriptionTabView ul textarea {\n      width: 100%;\n      resize: vertical;\n      max-height: 400px; }\n      #fileSubscriptionTabView ul textarea ~ div {\n        display: flex;\n        justify-content: space-between;\n        align-items: center; }\n        #fileSubscriptionTabView ul textarea ~ div .setDescr {\n          justify-self: flex-end;\n          margin-left: auto; }\n", "",{"version":3,"sources":["webpack://./css/tabview.scss"],"names":[],"mappings":"AAAA;EAEI,YAAA,EAAa;EAFjB;IAIQ,qBAAqB,EAAA;EAJ7B;IAOQ,WAAW;IACX,eAAe;IACf,YAAY;IACZ,gBAAgB,EAAA;IAVxB;MAYY,WAAW;MACX,yBAAyB,EAAA;IAbrC;MAgBY,WAAW;MACX,yBAAyB,EAAA;EAjBrC;IAqBQ,eAAe,EAAA;EArBvB;IAyBQ,aAAa;IACb,mBAAmB;IACnB,8BAA8B,EAAA;IA3BtC;MA8BY,WAAW;MACX,YAAY;MACZ,kBAAkB,EAAA;IAhC9B;MAkC4B,yBAAyB,EAAA;IAlCrD;MAmC2B,yBAAyB,EAAA;IAnCpD;MAqCY,aAAa;MACb,sBAAsB;MACtB,YAAY;MACZ,kBAAkB;MAClB,gBAAgB,EAAA;MAzC5B;QA2CgB,iBAAiB;QACjB,oCAAoC,EAAA;IA5CpD;MAgDY,yBAAyB;MACzB,YAAY;MACZ,iBAAiB;MACjB,gCAAgC,EAAA;MAnD5C;QAoD8B,2BAA2B,EAAA;MApDzD;QAsDgB,yBAAyB,EAAA;EAtDzC;IA6DQ,iBAAiB,EAAA;IA7DzB;MA+DY,YAAY;MACZ,gCAAgC;MAChC,cAAc;MACd,cAAc;MACd,kBAAkB,EAAA;IAnE9B;MAuEY,gBAAgB,EAAA;MAvE5B;QAyEgB,aAAa;QACb,mBAAmB;QACnB,kBAAkB,EAAA;QA3ElC;UA6EoB,kBAAkB,EAAA;IA7EtC;MAmFY,WAAW;MACX,gBAAgB;MAChB,iBAAiB,EAAA;MArF7B;QAuFgB,aAAa;QACb,8BAA8B;QAC9B,mBAAmB,EAAA;QAzFnC;UA2FoB,sBAAsB;UACtB,iBAAiB,EAAA","sourcesContent":["#fileSubscriptionTabView {\n\n    /* utilize */\n    .icon {\n        display: inline-block;\n    }\n    .msg {\n        color: #000;\n        font-size: 13px;\n        padding: 2px;\n        margin-left: 5px;\n        &.success {\n            color: #fff;\n            background-color: #47a447;\n        }\n        &.error {\n            color: #fff;\n            background-color: #d2322d;\n        }\n    }\n    .lasttime {\n        font-size: 13px;\n    }\n\n    .itemEntry {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n\n        .entryAvatar, button {\n            width: 32px;\n            height: 32px;\n            border-radius: 50%;\n        }\n        .entryAvatarClose { background-color: #ef5350; }\n        .entryAvatarOpen { background-color: #8bc34a; }\n        .entryDesc {\n            display: flex;\n            flex-direction: column;\n            padding: 8px;\n            line-height: 1.2em;\n            overflow: hidden;\n            div {\n                font-size: 12.5px;\n                color: var(--color-text-maxcontrast);\n            }\n        }\n        button.entryEdit {\n            background-color: inherit;\n            border: none;\n            margin-left: auto;\n            transition: all .05s ease-in-out;\n            &:enabled:hover { background-color: lightgrey; }\n            &.rotate {\n                transform: rotate(180deg);\n            }\n        }\n    }\n\n    ul {\n        // display: none;\n        margin-left: 32px;\n        &::after {\n            content: \" \";\n            border-bottom: 2px solid #e0e0e0;\n            display: block;\n            margin: 30px 0;\n            position: relative;\n        }\n\n        li {\n            margin-top: 25px;\n            & > div:first-child {\n                display: flex;\n                align-items: center;\n                margin-bottom: 5px;\n                .icon {\n                    margin-right: 10px;\n                }\n            }\n        }\n\n        textarea {\n            width: 100%;\n            resize: vertical;\n            max-height: 400px;\n            & ~ div {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                .setDescr {\n                    justify-self: flex-end;\n                    margin-left: auto;\n                }\n            }\n\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/tabview.js":
/*!************************!*\
  !*** ./src/tabview.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_tabview_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/tabview.scss */ "./css/tabview.scss");
// import { generateOcsUrl } from '@nextcloud/router'


(function () {
  var TabView = OCA.Files.DetailTabView.extend({
    id: 'fileSubscriptionTabView',
    className: 'tab fileSubscriptionTabView',
    appId: 'filesubscription',
    getLabel: function getLabel() {
      return t(this.appId, 'subscription');
    },
    getIcon: function getIcon() {
      return 'icon-mail';
    },
    template: function template() {
      return "<div class=\"loading icon-loading-small\"></div>\n\t\t\t  <div class=\"linksWrapper hidden\"></div>";
    },
    _sectionTemplates: {
      getLinkFail: function getLinkFail() {
        return '<div>無法取得分享連結</div>';
      },
      noLink: function noLink() {
        return '<div>沒有分享連結</div>';
      },
      $item: function $item(id) {
        return "<div class=\"item\" share-id=".concat(id, "></div>");
      },
      $itemContent_vaild: function $itemContent_vaild(share, subscr) {
        var params = {
          shareId: share.id,
          labelName: share.label,
          isEnabled: subscr.enabled,
          // int
          entryAvatarCssClass: subscr.enabled ? 'entryAvatarOpen' : 'entryAvatarClose',
          entryEnableString: subscr.enabled ? '開放' : '關閉',
          message: subscr.message,
          subscriberNum: subscr.subscriberNum
        };

        if (subscr.last_message_time) {
          params['lastMessageTime'] = subscr.last_message_time; // Y-m-d H:i
        }

        if (subscr.last_email_time) {
          params['lastEmailTime'] = subscr.last_email_time; // Y-m-d H:i
        }

        if (subscr.last_cancel_time) {
          params['lastCancelTime'] = subscr.last_cancel_time; // Y-m-d H:i
        }

        return OCA.FileSubscription.Templates['sidebar-tabview'](params);
      },
      $itemContent_invaild: function $itemContent_invaild(subscr) {// return
      }
    },

    /**
     * Renders this details view
     */
    render: function render() {
      this.$el.html(this.template());

      this._getInitData(); // delegate all btn Events


      this.delegateEvents({
        'click button.entryEdit': '_onEntryEdit',
        'change input[name=subscribable]': '_onSubscrSetting',
        'click button.setDescr': '_onSubscrSetting',
        'click button.sendSubscrMail': '_onSendMailEvent',
        'click button.cancelSubscr': '_onCancelEvent'
      });
    },
    // 初始化資料：分享連結+訂閱資訊
    _getInitData: function _getInitData() {
      var file = this.getFileInfo();
      var fileId = file.attributes.id;
      var path = "".concat(file.attributes.path, "/").concat(file.attributes.name);
      $.ajax({
        context: this,
        url: OC.generateUrl("/apps/".concat(this.appId, "/")),
        type: 'POST',
        data: {
          fileId: fileId,
          path: JSON.stringify(path.replace('//', '/'))
        },
        beforeSend: function beforeSend() {
          $('.linksWrapper').hide();
          $(this.$el).find('.loading').show();
        }
      }).done(function (resp) {
        this._renderInitData({
          data: resp
        });
      }).fail(function (e) {
        console.debug('Get InitData fail', e);

        this._renderInitData({
          data: null
        });
      }).always(function (resp) {
        $(this.$el).find('.loading').hide();
      });
    },
    _renderInitData: function _renderInitData(obj) {
      var $wrapper = $('.linksWrapper');
      $('.linksWrapper').children().remove();
      var templates = this._sectionTemplates;
      if (!obj || !obj.data) $wrapper.html(templates.getLinkFail());else if (obj.data.length < 1) $wrapper.html(templates.noLink());else {
        for (var idx in obj.data) {
          var row = obj.data[idx];

          if (row.sharing) {
            var itemWrapper = templates.$item(row.subscription.share_id);
            var itemContent = templates.$itemContent_vaild(row.sharing, row.subscription);
            var selector = ".item[share-id=".concat(row.subscription.share_id, "]"); // 避免重複 render

            if ($(selector).length === 0) {
              $wrapper.append(itemWrapper);
            }

            if ($(selector).children().length === 0) {
              $(selector).append(itemContent);
              $(selector).find('button.entryEdit').click();
            }
          } else {// typeof row.sharing == 'undefined'
            // const itemWrapper = templates.$item(row.subscription.share_id)
            // const itemContent = templates.$itemContent_invaild(row.subscription)
            // const selector = `.item[share-id=${row.subscription.share_id}]`
          }
        }
      }
      $wrapper.show();
    },
    // Rerender 訂閱資訊
    _rerenderItemData: function _rerenderItemData(resp) {
      var $item = $("div.item[share-id=".concat(resp.share_id, "]"));
      var share = {
        id: resp.share_id,
        label: $item.find('.itemEntry h5 span').text()
      };
      var subscr = {
        enabled: resp.enabled,
        message: resp.message,
        subscriberNum: resp.subscriberNum,
        last_message_time: resp.last_message_time,
        last_email_time: resp.last_email_time,
        last_cancel_time: resp.last_cancel_time
      };
      $item.html(this._sectionTemplates.$itemContent_vaild(share, subscr));
    },
    // 顯示訂閱設定內容
    _onEntryEdit: function _onEntryEdit(e) {
      var shareId = $(e.target).closest('.item').attr('share-id');
      $(".item[share-id=".concat(shareId, "] ul")).toggle(500);
      $(".item[share-id=".concat(shareId, "] .entryEdit")).toggleClass('rotate');
      $(".item:not([share-id=".concat(shareId, "]) ul")).hide(500);
      $(".item:not([share-id=".concat(shareId, "]) .entryEdit")).removeClass('rotate');
    },
    // 寄訂閱信件
    _onSendMailEvent: function _onSendMailEvent(e) {
      var shareId = $(e.target).closest('.item').attr('share-id');
      var $formElements = $('.item[share-id]').find('button, input, textarea');
      var $msg = $(e.target).closest('li').find('.msg');
      var msgResponse = {
        status: '',
        data: {
          message: ''
        }
      };
      $.ajax({
        url: OC.generateUrl('/apps/filesubscription/mail/update'),
        type: 'POST',
        data: {
          shareId: shareId
        },
        beforeSend: function beforeSend() {
          $formElements.attr('disabled', 'disabled');
          OC.msg.startAction($msg, '傳送中...');
        }
      }).done(function (resp) {
        msgResponse.status = 'success';
        msgResponse.data.message = resp.data.message;
        var $timeDiv = $(".item[share-id=".concat(shareId, "]")).find('.sendSubscrMail ~ .lasttime');

        if ($timeDiv.find('em').length > 0) {
          $timeDiv.find('em > span').text(resp.data.lastEmailTime);
        } else {
          $timeDiv.append("<em>\u4E0A\u6B21\u50B3\u9001\u65BC <span>".concat(resp.data.lastEmailTime, "</span></em>"));
        }
      }).fail(function (e) {
        msgResponse.data.message = '郵件寄送失敗';
        console.debug('SendMail ajax fail', e);
      }).always(function () {
        OC.msg.finishedAction($msg, msgResponse);
        $formElements.removeAttr('disabled');
      });
    },
    // 設定變更
    _onSubscrSetting: function _onSubscrSetting(e) {
      var shareId = $(e.target).closest('.item').attr('share-id');
      var setVal = {
        enabled: $("#subscribable".concat(shareId)).is(':checked'),
        message: $("#versionDescr".concat(shareId)).val(),
        updateMessageTime: $(e.target).hasClass('setDescr')
      };
      var $formElements = $('.item[share-id]').find('button, input, textarea');
      var $msg = $(e.target).closest('li').find('.msg');
      var msgResponse = {
        status: '',
        data: {
          message: ''
        }
      };
      $.ajax({
        context: this,
        url: OC.generateUrl('/apps/filesubscription/update/' + shareId),
        type: 'POST',
        data: {
          shareId: shareId,
          setVal: setVal
        },
        beforeSend: function beforeSend() {
          $formElements.attr('disabled', 'disabled');
          OC.msg.startAction($msg, '設定中...');
        }
      }).done(function (resp) {
        this._rerenderItemData(resp);
      }).fail(function (e) {
        msgResponse.data.message = '設定失敗';
        console.debug('filesubscription Setting fail', e);
      }).always(function () {
        OC.msg.finishedAction($msg, msgResponse);
        $formElements.removeAttr('disabled');
      });
    },
    // 取消訂閱
    _onCancelEvent: function _onCancelEvent(e) {
      var $formElements = $('.item[share-id]').find('button, input, textarea');
      $formElements.attr('disabled', 'disabled');
      var self = this;

      var confirmed = function confirmed(confirm) {
        if (!confirm) {
          $formElements.removeAttr('disabled');
          return;
        }

        var $msg = $(e.target).closest('li').find('.msg');
        var msgResponse = {
          status: '',
          data: {
            message: ''
          }
        };
        $.ajax({
          context: self,
          url: OC.generateUrl('/apps/filesubscription/cancel'),
          type: 'POST',
          data: {
            shareId: $(e.target).closest('.item').attr('share-id')
          },
          beforeSend: function beforeSend() {
            OC.msg.startAction($msg, '取消中...');
          }
        }).done(function (resp) {
          self._rerenderItemData(resp);
        }).fail(function (resp) {
          msgResponse.data.message = '無法取消訂閱';

          if (typeof resp.responseJSON.message != 'undefined') {
            msgResponse.data.message += ': ';
            msgResponse.data.message += resp.responseJSON.message;
          }

          console.debug('Cancel ajax fail', resp);
        }).always(function () {
          OC.msg.finishedAction($msg, msgResponse);
          $formElements.removeAttr('disabled');
        });
      };

      OC.dialogs.confirm('系統將發送取消通知給訂閱者，並移除所有訂閱者', '確定清除訂閱？', confirmed);
    }
  });
  OCA.FileSubscription.TabView = TabView;
})();

/***/ })

/******/ });
//# sourceMappingURL=tabview.js.map