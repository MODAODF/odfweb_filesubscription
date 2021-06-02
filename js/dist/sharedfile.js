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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sharedfile.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/sharedfile.scss":
/*!*****************************!*\
  !*** ./css/sharedfile.scss ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sharedfile_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./sharedfile.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/sharedfile.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sharedfile_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_sharedfile_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/sharedfile.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/sharedfile.scss ***!
  \**********************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "#subscription-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 100%;\n  cursor: pointer;\n  opacity: 0.6;\n  padding: 0;\n  margin: 0; }\n\n#subscription-content .content {\n  padding: 1rem;\n  min-width: 220px; }\n  #subscription-content .content > h3 {\n    font-weight: bold;\n    text-align: center; }\n  #subscription-content .content em {\n    display: block;\n    line-height: 19px;\n    font-size: 12px; }\n  #subscription-content .content form#subscription-mail {\n    margin: 1rem 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex: 1 1 auto; }\n    #subscription-content .content form#subscription-mail input[type=email] {\n      width: 100%;\n      border-color: var(--color-border-dark); }\n      #subscription-content .content form#subscription-mail input[type=email] + label.icon-confirm {\n        border-color: var(--color-border-dark) !important;\n        border-left-color: transparent !important;\n        border-style: solid;\n        border-width: 1px;\n        border-top-left-radius: 0 !important;\n        border-bottom-left-radius: 0 !important; }\n      #subscription-content .content form#subscription-mail input[type=email]:focus:invalid {\n        border-color: crimson; }\n        #subscription-content .content form#subscription-mail input[type=email]:focus:invalid + label.icon-confirm {\n          border-color: crimson !important;\n          border-left-color: transparent !important;\n          border-style: solid;\n          border-width: 1px;\n          border-top-left-radius: 0 !important;\n          border-bottom-left-radius: 0 !important; }\n      #subscription-content .content form#subscription-mail input[type=email]:focus:valid {\n        border-color: cornflowerblue; }\n        #subscription-content .content form#subscription-mail input[type=email]:focus:valid + label.icon-confirm {\n          border-color: cornflowerblue !important;\n          border-left-color: transparent !important;\n          border-style: solid;\n          border-width: 1px;\n          border-top-left-radius: 0 !important;\n          border-bottom-left-radius: 0 !important; }\n      #subscription-content .content form#subscription-mail input[type=email]:hover {\n        border-color: darkgray; }\n        #subscription-content .content form#subscription-mail input[type=email]:hover + label.icon-confirm {\n          border-color: darkgray !important;\n          border-left-color: transparent !important;\n          border-style: solid;\n          border-width: 1px;\n          border-top-left-radius: 0 !important;\n          border-bottom-left-radius: 0 !important; }\n      #subscription-content .content form#subscription-mail input[type=email]:active {\n        border-color: black; }\n        #subscription-content .content form#subscription-mail input[type=email]:active + label.icon-confirm {\n          border-color: black !important;\n          border-left-color: transparent !important;\n          border-style: solid;\n          border-width: 1px;\n          border-top-left-radius: 0 !important;\n          border-bottom-left-radius: 0 !important; }\n    #subscription-content .content form#subscription-mail label.icon-confirm {\n      box-sizing: border-box; }\n      #subscription-content .content form#subscription-mail label.icon-confirm:hover {\n        background-position-x: 60%; }\n      #subscription-content .content form#subscription-mail label.icon-confirm:active {\n        background-position-y: 55%; }\n\n#subscription-content .msg {\n  color: #000;\n  padding: 3px; }\n  #subscription-content .msg.success {\n    color: #fff;\n    background-color: #47a447; }\n  #subscription-content .msg.error {\n    color: #fff;\n    background-color: #d2322d; }\n", "",{"version":3,"sources":["webpack://./css/sharedfile.scss"],"names":[],"mappings":"AAAA;EACI,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,UAAU;EACV,SAAS,EAAA;;AAGb;EAEQ,aAAa;EACb,gBAAgB,EAAA;EAHxB;IAMY,iBAAiB;IACjB,kBAAkB,EAAA;EAP9B;IAUY,cAAc;IACd,iBAAiB;IACjB,eAAe,EAAA;EAZ3B;IAeY,cAAc;IACd,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,cAAc,EAAA;IAnB1B;MAkCgB,WAAW;MAZX,sCAa6C,EAAA;MAnC7D;QAwBoB,iDAA+B;QAC/B,yCAAyC;QACzC,mBAAmB;QACnB,iBAAiB;QACjB,oCAAoC;QACpC,uCAAuC,EAAA;MA7B3D;QAsBgB,qBAe8C,EAAA;QArC9D;UAwBoB,gCAA+B;UAC/B,yCAAyC;UACzC,mBAAmB;UACnB,iBAAiB;UACjB,oCAAoC;UACpC,uCAAuC,EAAA;MA7B3D;QAsBgB,4BAgBmD,EAAA;QAtCnE;UAwBoB,uCAA+B;UAC/B,yCAAyC;UACzC,mBAAmB;UACnB,iBAAiB;UACjB,oCAAoC;UACpC,uCAAuC,EAAA;MA7B3D;QAsBgB,sBAiBuC,EAAA;QAvCvD;UAwBoB,iCAA+B;UAC/B,yCAAyC;UACzC,mBAAmB;UACnB,iBAAiB;UACjB,oCAAoC;UACpC,uCAAuC,EAAA;MA7B3D;QAsBgB,mBAkBqC,EAAA;QAxCrD;UAwBoB,8BAA+B;UAC/B,yCAAyC;UACzC,mBAAmB;UACnB,iBAAiB;UACjB,oCAAoC;UACpC,uCAAuC,EAAA;IA7B3D;MA4CgB,sBAAsB,EAAA;MA5CtC;QA8CoB,0BACJ,EAAA;MA/ChB;QAiDoB,0BACJ,EAAA;;AAMhB;EACI,WAAW;EACX,YAAY,EAAA;EAFhB;IAIQ,WAAW;IACX,yBAAyB,EAAA;EALjC;IAQQ,WAAW;IACX,yBAAyB,EAAA","sourcesContent":["#subscription-icon {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 50px;\n    height: 100%;\n    cursor: pointer;\n    opacity: 0.6;\n    padding: 0;\n    margin: 0;\n}\n\n#subscription-content {\n    .content {\n        padding: 1rem;\n        min-width: 220px;\n\n        & > h3 {\n            font-weight: bold;\n            text-align: center;\n        }\n        em {\n            display: block;\n            line-height: 19px;\n            font-size: 12px;\n        }\n        form#subscription-mail {\n            margin: 1rem 0;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            flex: 1 1 auto;\n\n            @mixin borderStyle($color) {\n                border-color: $color;\n                & + label.icon-confirm {\n                    border-color: $color !important;\n                    border-left-color: transparent !important;\n                    border-style: solid;\n                    border-width: 1px;\n                    border-top-left-radius: 0 !important;\n                    border-bottom-left-radius: 0 !important;\n                }\n            }\n\n            input[type=email] {\n                width: 100%;\n                @include borderStyle(var(--color-border-dark));\n\n                &:focus:invalid { @include borderStyle(crimson); }\n                &:focus:valid { @include borderStyle(cornflowerblue); }\n                &:hover { @include borderStyle(darkgray); }\n                &:active { @include borderStyle(black); }\n            }\n\n            label.icon-confirm {\n                box-sizing: border-box;\n                &:hover {\n                    background-position-x: 60%\n                }\n                &:active {\n                    background-position-y: 55%\n                }\n            }\n        }\n    }\n}\n\n#subscription-content .msg {\n    color: #000;\n    padding: 3px;\n    &.success {\n        color: #fff;\n        background-color: #47a447;\n    }\n    &.error {\n        color: #fff;\n        background-color: #d2322d;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/sharedfile.js":
/*!***************************!*\
  !*** ./src/sharedfile.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_sharedfile_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/sharedfile.scss */ "./css/sharedfile.scss");
// import { generateOcsUrl } from '@nextcloud/router'

var SharedFile = {
  sharingToken: $('#sharingToken').val(),
  init: function init() {
    // 取得此分享連結是否啟用訂閱
    $.ajax({
      context: this,
      url: OC.generateUrl('/apps/filesubscription/subscribe/state/' + this.sharingToken),
      type: 'GET'
    }).done(function (res) {
      if (res) this.renderHeader();
    }).fail(function (e) {
      console.debug('filesubscription _isSubscribable fail()', e);
    });
  },
  renderHeader: function renderHeader() {
    var headerRight = document.querySelector('#header .header-right');

    if (!document.getElementById('filesubscription-header')) {
      var newHeader = document.createElement('div');
      newHeader.id = 'filesubscription-header';
      headerRight.insertBefore(newHeader, headerRight.firstChild); // header content

      var content = OCA.FileSubscription.Templates['sharedfile-header']({
        placeholder: 'Enter your email'
      });
      $('#filesubscription-header').append(content);
      $('#subscription-icon').on('click', this._onOpenEvent.bind(this));
      $('form#subscription-mail').on('submit', this._onConfirmEvent.bind(this));
    }
  },
  _onOpenEvent: function _onOpenEvent(e) {
    e.stopPropagation();
    $('#subscription-content').toggle();
  },
  _onConfirmEvent: function _onConfirmEvent(e) {
    e.stopPropagation();
    e.preventDefault();
    var msgEl = $('#subscription-content .msg');
    var msgResponse = {
      status: '',
      data: {
        message: ''
      }
    };
    var token = this.sharingToken;
    var mailAddr = $('form#subscription-mail input[name="email"]').val();
    $.ajax({
      url: OC.generateUrl('/apps/filesubscription/subscribe'),
      type: 'POST',
      data: {
        token: token,
        mailAddr: mailAddr
      },
      beforeSend: function beforeSend() {
        $('form#subscription-mail input').attr('disabled', 'disabled');
        OC.msg.startAction(msgEl, '處理中...');
      }
    }).done(function () {
      msgResponse.data.message = '訂閱成功';
      msgResponse.status = 'success';
      $('form#subscription-mail input[name="email"]').val('');
    }).fail(function (e) {
      msgResponse.data.message = '無法訂閱';
      console.debug('filesubscription _onConfirmEvent fail()', e);
    }).always(function (resp) {
      OC.msg.finishedAction(msgEl, msgResponse);
      $('form#subscription-mail input').removeAttr('disabled');
    });
  }
};
if (!OCA.FileSubscription) OCA.FileSubscription = {};
OCA.FileSubscription.Templates = {};
OCA.FileSubscription.SharedFile = SharedFile;
window.addEventListener('DOMContentLoaded', function () {
  var isPublic = document.getElementById('isPublic') && document.getElementById('isPublic').value === '1';
  if (isPublic) OCA.FileSubscription.SharedFile.init();
});

/***/ })

/******/ });
//# sourceMappingURL=sharedfile.js.map