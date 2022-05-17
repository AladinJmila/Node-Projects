/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_navbar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(145);
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_navbar_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n  max-height: 100vh;\r\n  overflow: hidden;\r\n}\r\n\r\nbody {\r\n  background-color: #0d1117;\r\n  color: #f0f6fc;\r\n  font-size: 14px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.navbar {\r\n  background-color: #161b22;\r\n  width: 100%;\r\n  height: 60px;\r\n  border-bottom: #535b64 solid 2px;\r\n  padding: 0 100px;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.brand {\r\n  border: none;\r\n  background-color: transparent;\r\n  color: #f0f6fc;\r\n  padding: 0;\r\n}\r\n\r\n.navbar ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.navbar li {\r\n  margin-left: 30px;\r\n  cursor: pointer;\r\n  border-bottom: 3px solid transparent;\r\n  -webkit-transition: all 0.2s ease-in;\r\n  transition: all 0.2s ease-in;\r\n}\r\n\r\n.navbar li:hover {\r\n  border-bottom: 3px solid #f0f6fc;\r\n}\r\n\r\n.tutorials-container {\r\n  padding: 80px;\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(6, 1fr);\r\n  grid-template-rows: 260px;\r\n  grid-gap: 40px;\r\n  gap: 40px;\r\n  justify-items: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  overflow: auto;\r\n}\r\n\r\n.tutorial-progress {\r\n  position: relative;\r\n  width: 230px;\r\n  height: 230px;\r\n  border-radius: 50%;\r\n  background: conic-gradient(\r\n    #8b949e 0%,\r\n    #8b949e 60%,\r\n    #1f242c 60%,\r\n    #1f242c 100%\r\n  );\r\n  cursor: pointer;\r\n}\r\n\r\n.tutorial-progress::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 230px;\r\n  height: 230px;\r\n  border-radius: 50%;\r\n  top: 0px;\r\n  left: 0px;\r\n  border: #2b333e solid 2px;\r\n}\r\n\r\n.tutorial {\r\n  position: relative;\r\n  width: 210px;\r\n  height: 210px;\r\n  border-radius: 50%;\r\n  top: 10px;\r\n  left: 10px;\r\n  background-color: #161b22;\r\n  border: #0d1117 solid 15px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n\r\n.tutorial::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 180px;\r\n  height: 180px;\r\n  border-radius: 50%;\r\n  top: 0px;\r\n  left: 0px;\r\n  border: #2b333e solid 2px;\r\n}\r\n\r\n.tutorial-title {\r\n  letter-spacing: 4;\r\n  font-size: 1.8em;\r\n}\r\n\r\n.tutorial-add {\r\n  position: relative;\r\n  width: 200px;\r\n  height: 200px;\r\n  border-radius: 50%;\r\n  top: 10px;\r\n  left: 10px;\r\n  border: #2b333e dashed 3px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.tutorial-add::before {\r\n  content: '';\r\n  width: 120px;\r\n  border-top: 6px #8b949e solid;\r\n  -webkit-transform: translate(2px, -3px);\r\n          transform: translate(2px, -3px);\r\n}\r\n\r\n.tutorial-add::after {\r\n  content: '';\r\n  height: 120px;\r\n  border-left: 6px #8b949e solid;\r\n  -webkit-transform: translateX(-61px);\r\n          transform: translateX(-61px);\r\n}\r\n\r\n.content {\r\n  display: grid;\r\n  grid-template-columns: 2fr 8fr 2fr;\r\n  height: 100%;\r\n}\r\n\r\n.groups-nav {\r\n  background-color: #161b22;\r\n  min-width: 250px;\r\n  height: 100%;\r\n  border-right: #535b64 solid 2px;\r\n}\r\n\r\n.features-nav {\r\n  background-color: #161b22;\r\n  min-width: 250px;\r\n  height: 100%;\r\n  border-left: #535b64 solid 2px;\r\n}\r\n\r\n.slides-viewer {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.slides-progress {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  width: 100%;\r\n  max-height: 60px;\r\n  background-color: #161b22;\r\n  padding: 18px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.progress-disc {\r\n  width: 24px;\r\n  height: 24px;\r\n  border-radius: 50%;\r\n  background-color: #39404b;\r\n  margin-right: 40px;\r\n}\r\n\r\n.progress-disc:not(:last-of-type)::after {\r\n  content: '';\r\n  display: inline-block;\r\n  border-bottom: 2px #39404b solid;\r\n  width: 40px;\r\n  -webkit-transform: translate(24px, 12px);\r\n          transform: translate(24px, 12px);\r\n}\r\n\r\n.slide-controls {\r\n  position: absolute;\r\n  bottom: 56px;\r\n  width: 100%;\r\n  height: 56px;\r\n  background-color: #161b22;\r\n  opacity: 0;\r\n  -webkit-transition: opacity 0.2s ease-in;\r\n  transition: opacity 0.2s ease-in;\r\n}\r\n\r\n.canvas {\r\n  width: 100%;\r\n  height: 100%;\r\n  /* background: url('https://images.unsplash.com/photo-1651667768708-634a231b3208?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'); */\r\n  background: url('https://images.unsplash.com/photo-1651668284801-79678d3cdf70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80');\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  /* background-position: center; */\r\n  background-position: top;\r\n}\r\n\r\n.slides-viewer:hover .slide-controls {\r\n  opacity: 1;\r\n}\r\n\r\n/* Media Queries */\r\n@media screen and (max-width: 1536px) {\r\n  .tutorials-container {\r\n    padding: 80px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n  .tutorials-container {\r\n    padding: 80px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 960px) {\r\n  .navbar {\r\n    padding: 0 50px;\r\n  }\r\n\r\n  .tutorials-container {\r\n    padding: 80px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 620px) {\r\n  .navbar {\r\n    padding: 0 20px;\r\n    font-size: 1.3em;\r\n  }\r\n\r\n  .navbar li {\r\n    margin-left: 10px;\r\n  }\r\n\r\n  .tutorials-container {\r\n    padding: 80px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-columns: repeat(1, 1fr);\r\n  }\r\n}\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 81:
/***/ (function(module) {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 379:
/***/ (function(module) {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ (function(module) {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ (function(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ (function(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ (function(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/main.css
var main = __webpack_require__(769);
;// CONCATENATED MODULE: ./src/main.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(main/* default */.Z, options);




       /* harmony default export */ var src_main = (main/* default */.Z && main/* default.locals */.Z.locals ? main/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/main.js
// import populateSidebar from './UI/sidebarRender';
// import injectLevelTow from './UI/mediaRender';
// import saveMedia from './media/mediaHandler';
 // const hideBtn = document.getElementById('hide-sidebar');
// const sidebarEl = document.getElementById('sidebar');
// hideBtn.addEventListener('click', () => {
//   sidebarEl.classList.toggle('hide');
// });
// populateSidebar();
// injectLevelTow();
// saveMedia();
}();
/******/ })()
;