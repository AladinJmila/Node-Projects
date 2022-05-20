/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_customAudio_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(802);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(172), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_styles_customAudio_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --tone-1: #f0f6fc;\r\n  --tone-2t: rgba(240,246,252,0.58039);\r\n  --tone-3: #7d8794;\r\n  --tone-4: #535b64;\r\n  --tone-5: #161b22;\r\n  --tone-5t: rgba(22,27,34,0.55294);\r\n}\r\n\r\nhtml {\r\n  overflow: hidden;\r\n}\r\n\r\nbody {\r\n  background-color: #0d1117;\r\n  color: #f0f6fc;\r\n  color: var(--tone-1);\r\n  font-size: 14px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.fa {\r\n  cursor: pointer;\r\n}\r\n\r\n/* Navbar Styles */\r\n.navbar {\r\n  background-color: #161b22;\r\n  background-color: var(--tone-5);\r\n  width: 100%;\r\n  height: 60px;\r\n  border-bottom: #535b64 solid 2px;\r\n  border-bottom: var(--tone-4) solid 2px;\r\n  padding: 0 30px;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.brand {\r\n  border: none;\r\n  background-color: transparent;\r\n  color: #f0f6fc;\r\n  color: var(--tone-1);\r\n  padding: 0;\r\n}\r\n\r\n.navbar ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.navbar li {\r\n  margin-left: 30px;\r\n  cursor: pointer;\r\n  border-bottom: 3px solid transparent;\r\n  -webkit-transition: all 0.2s ease-in;\r\n  transition: all 0.2s ease-in;\r\n}\r\n\r\n.navbar li:hover {\r\n  border-bottom: 3px solid #f0f6fc;\r\n  border-bottom: 3px solid var(--tone-1);\r\n}\r\n\r\n.navbar li.active {\r\n  border-bottom: 3px solid #f0f6fc;\r\n  border-bottom: 3px solid var(--tone-1);\r\n}\r\n\r\n/* Home Styles */\r\n.tutorials-container {\r\n  padding: 80px;\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: repeat(6, 1fr);\r\n  grid-template-rows: 260px;\r\n  grid-gap: 40px;\r\n  gap: 40px;\r\n  justify-items: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  overflow: auto;\r\n}\r\n\r\n.tutorial-progress {\r\n  position: relative;\r\n  width: 230px;\r\n  height: 230px;\r\n  border-radius: 50%;\r\n  background: conic-gradient(\r\n    #8b949e 0%,\r\n    #8b949e 60%,\r\n    #1f242c 60%,\r\n    #1f242c 100%\r\n  );\r\n  cursor: pointer;\r\n}\r\n\r\n.tutorial-progress::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 230px;\r\n  height: 230px;\r\n  border-radius: 50%;\r\n  top: 0px;\r\n  left: 0px;\r\n  border: #2b333e solid 2px;\r\n}\r\n\r\n.tutorial {\r\n  position: relative;\r\n  width: 210px;\r\n  height: 210px;\r\n  border-radius: 50%;\r\n  top: 10px;\r\n  left: 10px;\r\n  background-color: #161b22;\r\n  background-color: var(--tone-5);\r\n  border: #0d1117 solid 15px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n\r\n.tutorial::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 180px;\r\n  height: 180px;\r\n  border-radius: 50%;\r\n  top: 0px;\r\n  left: 0px;\r\n  border: #2b333e solid 2px;\r\n}\r\n\r\n.tutorial-title {\r\n  letter-spacing: 4;\r\n  font-size: 1.8em;\r\n}\r\n\r\n.tutorial-add {\r\n  position: relative;\r\n  width: 200px;\r\n  height: 200px;\r\n  border-radius: 50%;\r\n  top: 10px;\r\n  left: 10px;\r\n  border: #2b333e dashed 3px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.tutorial-add::before {\r\n  content: '';\r\n  width: 120px;\r\n  border-top: 6px #8b949e solid;\r\n  -webkit-transform: translate(2px, -3px);\r\n          transform: translate(2px, -3px);\r\n}\r\n\r\n.tutorial-add::after {\r\n  content: '';\r\n  height: 120px;\r\n  border-left: 6px #8b949e solid;\r\n  -webkit-transform: translateX(-61px);\r\n          transform: translateX(-61px);\r\n}\r\n\r\n/* Viewer Styles */\r\n.content {\r\n  display: grid;\r\n  grid-template-columns: 2fr 8fr 2fr;\r\n  height: 100%;\r\n}\r\n\r\n.groups {\r\n  background-color: #161b22;\r\n  background-color: var(--tone-5);\r\n  min-width: 250px;\r\n  height: 100%;\r\n  border-right: #535b64 solid 2px;\r\n  border-right: var(--tone-4) solid 2px;\r\n  padding: 16px;\r\n}\r\n\r\n.app-xref {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: space-evenly;\r\n      -ms-flex-pack: space-evenly;\r\n          justify-content: space-evenly;\r\n  margin-bottom: 20px;\r\n  border-bottom: 1px solid #535b64;\r\n  border-bottom: 1px solid var(--tone-4);\r\n  cursor: pointer;\r\n}\r\n\r\n.app-name {\r\n  color: #f0f6fc;\r\n  color: var(--tone-1);\r\n  font-size: 1.2em;\r\n}\r\n\r\n.app-xref p {\r\n  font-size: 0.9em;\r\n  width: 50px;\r\n  height: 50px;\r\n  margin-left: 10px;\r\n  padding: 4px;\r\n  display: block;\r\n  color: #7d8794;\r\n  color: var(--tone-3);\r\n  border: 2px dashed #7d8794;\r\n  border: 2px dashed var(--tone-3);\r\n  line-height: 1;\r\n  text-align: center;\r\n  letter-spacing: 2;\r\n}\r\n\r\n/* Groups Navigation */\r\n.groups-nav {\r\n  padding-left: 5px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.groups-nav a {\r\n  text-decoration: none;\r\n  display: block;\r\n  border: none;\r\n  background: none;\r\n  color: #6e7782;\r\n  font-size: 1.4em;\r\n  width: 100%;\r\n  text-align: left;\r\n  cursor: pointer;\r\n  outline: none;\r\n  padding-left: 10px;\r\n}\r\n\r\n.dropdown-btn {\r\n  display: block;\r\n  border: none;\r\n  background: none;\r\n  color: #6e7782;\r\n  font-size: 1.4em;\r\n  width: 100%;\r\n  text-align: left;\r\n  cursor: pointer;\r\n  outline: none;\r\n  border-bottom: 1px solid #535b64;\r\n  border-bottom: 1px solid var(--tone-4);\r\n}\r\n\r\n.dropdown-btn > i {\r\n  float: right;\r\n  padding-right: 10px;\r\n  padding-top: 4px;\r\n}\r\n\r\n.groups-nav a:hover,\r\n.dropdown-btn:hover {\r\n  color: #f0f6fc;\r\n  color: var(--tone-1);\r\n}\r\n\r\n.dropdown-container {\r\n  display: none;\r\n}\r\n\r\n.dropdown-btn.active {\r\n  color: #161b22;\r\n  color: var(--tone-5);\r\n  background-color: #f0f6fc;\r\n  background-color: var(--tone-1);\r\n}\r\n\r\n.dropdown-btn.active:hover {\r\n  color: #161b22;\r\n  color: var(--tone-5);\r\n}\r\n\r\n.features {\r\n  background-color: #161b22;\r\n  background-color: var(--tone-5);\r\n  min-width: 250px;\r\n  height: 100%;\r\n  border-left: #535b64 solid 2px;\r\n  border-left: var(--tone-4) solid 2px;\r\n  padding: 16px;\r\n}\r\n\r\n/* Common Navigation Styles */\r\n.add-group-feature {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  border: 2px dashed #7d8794;\r\n  border: 2px dashed var(--tone-3);\r\n  padding: 4px;\r\n  margin-top: 24px;\r\n}\r\n\r\n.group-feature-name {\r\n  background-color: transparent;\r\n  color: #f0f6fc;\r\n  color: var(--tone-1);\r\n  border: none;\r\n  width: 100%;\r\n  border-right: 1px solid #7d8794;\r\n  border-right: 1px solid var(--tone-3);\r\n  margin-right: 4px;\r\n  font-size: 1.2em;\r\n}\r\n\r\n.group-feature-name::-webkit-input-placeholder {\r\n  color: rgba(240,246,252,0.58039);\r\n  color: var(--tone-2t);\r\n}\r\n\r\n.group-feature-name::-moz-placeholder {\r\n  color: rgba(240,246,252,0.58039);\r\n  color: var(--tone-2t);\r\n}\r\n\r\n.group-feature-name:-ms-input-placeholder {\r\n  color: rgba(240,246,252,0.58039);\r\n  color: var(--tone-2t);\r\n}\r\n\r\n.group-feature-name::-ms-input-placeholder {\r\n  color: rgba(240,246,252,0.58039);\r\n  color: var(--tone-2t);\r\n}\r\n\r\n.group-feature-name::placeholder {\r\n  color: rgba(240,246,252,0.58039);\r\n  color: var(--tone-2t);\r\n}\r\n\r\n.add-group-feature-btn {\r\n  border: none;\r\n  color: #f0f6fc;\r\n  color: var(--tone-1);\r\n  background-color: transparent;\r\n}\r\n\r\n/* Slides Viewer */\r\n.slides-viewer {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n\r\n/* Slides Header */\r\n.slides-header {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  background-color: #161b22;\r\n  background-color: var(--tone-5);\r\n}\r\n\r\n.slides-progress {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  width: 100%;\r\n  height: 56px;\r\n  padding: 18px;\r\n}\r\n\r\n.prograss-frag {\r\n  width: 100%;\r\n}\r\n\r\n.progress-bar {\r\n  z-index: -10;\r\n  height: 4px;\r\n  background-color: #39404b;\r\n  -webkit-transform: translateY(8px);\r\n          transform: translateY(8px);\r\n}\r\n\r\n.prograss-frag:first-of-type::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 16px;\r\n  height: 24px;\r\n  width: 4px;\r\n  background-color: #8b949e;\r\n}\r\n\r\n.progress-disc {\r\n  width: 24px;\r\n  height: 24px;\r\n  border-radius: 50%;\r\n  background-color: #39404b;\r\n  float: right;\r\n  -webkit-transform: translateY(-6px);\r\n          transform: translateY(-6px);\r\n}\r\n\r\n.prograss-frag:last-of-type .progress-disc {\r\n  background-color: #45a369;\r\n}\r\n\r\n.add-slide {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.inheader-slide-id {\r\n  color: #f0f6fc;\r\n  color: var(--tone-1);\r\n  background-color: rgba(22,27,34,0.55294);\r\n  background-color: var(--tone-5t);\r\n  border: none;\r\n  min-width: 220px;\r\n  height: 32px;\r\n  padding: 2px 8px;\r\n  border-radius: 16px;\r\n  margin-right: 18px;\r\n  -webkit-box-shadow: 0 0 3px 2px rgba(240,246,252,0.58039);\r\n          box-shadow: 0 0 3px 2px rgba(240,246,252,0.58039);\r\n  -webkit-box-shadow: 0 0 3px 2px var(--tone-2t);\r\n          box-shadow: 0 0 3px 2px var(--tone-2t);\r\n}\r\n\r\n.inheader-slide-id::-webkit-input-placeholder {\r\n  color: rgba(240,246,252,0.58039);\r\n  color: var(--tone-2t);\r\n  text-align: center;\r\n  -webkit-transform: translateX(-14px);\r\n          transform: translateX(-14px);\r\n  font-size: 1.1em;\r\n}\r\n\r\n.inheader-slide-id::-moz-placeholder {\r\n  color: rgba(240,246,252,0.58039);\r\n  color: var(--tone-2t);\r\n  text-align: center;\r\n  transform: translateX(-14px);\r\n  font-size: 1.1em;\r\n}\r\n\r\n.inheader-slide-id:-ms-input-placeholder {\r\n  color: rgba(240,246,252,0.58039);\r\n  color: var(--tone-2t);\r\n  text-align: center;\r\n  transform: translateX(-14px);\r\n  font-size: 1.1em;\r\n}\r\n\r\n.inheader-slide-id::-ms-input-placeholder {\r\n  color: rgba(240,246,252,0.58039);\r\n  color: var(--tone-2t);\r\n  text-align: center;\r\n  transform: translateX(-14px);\r\n  font-size: 1.1em;\r\n}\r\n\r\n.inheader-slide-id::placeholder {\r\n  color: rgba(240,246,252,0.58039);\r\n  color: var(--tone-2t);\r\n  text-align: center;\r\n  -webkit-transform: translateX(-14px);\r\n          transform: translateX(-14px);\r\n  font-size: 1.1em;\r\n}\r\n\r\n.add-slide-btn {\r\n  height: 28px;\r\n  width: 28px;\r\n  border-radius: 50%;\r\n  border: none;\r\n  position: absolute;\r\n  right: 20px;\r\n  top: 14px;\r\n}\r\n\r\n/* Slides Body */\r\n.slides-body {\r\n  position: relative;\r\n  width: 100%;\r\n  height: calc(100vh - 111px);\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.incanvas-slide-id {\r\n  position: absolute;\r\n  right: 40px;\r\n  top: 20px;\r\n  color: #f0f6fc;\r\n  color: var(--tone-1);\r\n  background-color: rgba(22,27,34,0.55294);\r\n  background-color: var(--tone-5t);\r\n  border: none;\r\n  min-width: 190px;\r\n  text-align: center;\r\n  padding: 2px 4px;\r\n}\r\n\r\n.canvas {\r\n  /* width: 100%; */\r\n  width: 560px;\r\n  /* height: 100%; */\r\n  height: 360px;\r\n  /* background: url('https://images.unsplash.com/photo-1651667768708-634a231b3208?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'); */\r\n  /* background: url('https://images.unsplash.com/photo-1651668284801-79678d3cdf70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'); */\r\n  /* background-repeat: no-repeat; */\r\n  /* background-size: contain; */\r\n  /* background-position: center; */\r\n  /* background-position: top; */\r\n}\r\n\r\n.slide-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: contain;\r\n  background-position: center;\r\n}\r\n\r\n.slide-controls {\r\n  -webkit-transform: translateY(-60px);\r\n          transform: translateY(-60px);\r\n  width: 100%;\r\n  height: 60px;\r\n  background-color: rgba(22,27,34,0.52157);\r\n  opacity: 0;\r\n  -webkit-transition: opacity 0.2s ease-in;\r\n  transition: opacity 0.2s ease-in;\r\n  display: grid;\r\n  grid-template-columns: 2fr 10fr 2fr;\r\n  justify-items: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.slide-controls.show {\r\n  opacity: 1;\r\n}\r\n\r\n.slides-viewer:hover .slide-controls {\r\n  opacity: 1;\r\n}\r\n\r\n.slide-controls-btn {\r\n  border: none;\r\n  background-color: transparent;\r\n  color: #f0f6fc;\r\n  color: var(--tone-1);\r\n  height: 30px;\r\n  width: 110px;\r\n  border-radius: 15px;\r\n  -webkit-box-shadow: 0 0 3px 2px rgba(240,246,252,0.58039);\r\n          box-shadow: 0 0 3px 2px rgba(240,246,252,0.58039);\r\n  -webkit-box-shadow: 0 0 3px 2px var(--tone-2t);\r\n          box-shadow: 0 0 3px 2px var(--tone-2t);\r\n  font-size: 1.2em;\r\n  text-align: center;\r\n  -webkit-transform: translateY(-2px);\r\n          transform: translateY(-2px);\r\n}\r\n\r\n/* Media Queries */\r\n@media screen and (max-width: 1536px) {\r\n  .tutorials-container {\r\n    padding: 80px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n  .tutorials-container {\r\n    padding: 80px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 960px) {\r\n  .tutorials-container {\r\n    padding: 80px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 620px) {\r\n  .navbar {\r\n    padding: 0 20px;\r\n    font-size: 1.3em;\r\n  }\r\n\r\n  .navbar li {\r\n    margin-left: 10px;\r\n  }\r\n\r\n  .tutorials-container {\r\n    padding: 80px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-columns: repeat(1, 1fr);\r\n  }\r\n}\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".audio-player {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: 1fr 9fr 1fr;\r\n  align-items: center;\r\n  justify-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.timeline {\r\n  -webkit-appearance: none;\r\n  width: 100%;\r\n  height: 4px;\r\n  transform: translateY(-2px);\r\n  background-color: #616d79;\r\n  background-size: 0% 100%;\r\n  background-image: linear-gradient(#f0f6fc, #f0f6fc);\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.timeline::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  width: 1em;\r\n  height: 1em;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  opacity: 0;\r\n  transition: all 0.1s;\r\n  background-color: #6d87a1;\r\n}\r\n\r\n.timeline::-webkit-slider-thumb:hover {\r\n  background-color: #98cbff;\r\n}\r\n\r\n.timeline:hover::-webkit-slider-thumb {\r\n  opacity: 1;\r\n}\r\n\r\n.timeline::-webkit-slider-runnable-track {\r\n  -webkit-appearance: none;\r\n  box-shadow: none;\r\n  border: none;\r\n  background: transparent;\r\n}\r\n\r\n#compress-btn {\r\n  display: none;\r\n}\r\n", ""]);
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

/***/ 667:
/***/ (function(module) {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ }),

/***/ 172:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ba899be694a74bda9298.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
;// CONCATENATED MODULE: ./src/UI/UIActions.js
function UIActions() {
  var dropDownBtns = document.querySelectorAll('.dropdown-btn');
  dropDownBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      this.classList.toggle('active');
      var dropdownContent = this.nextElementSibling;
      dropdownContent.style.display === 'block' ? dropdownContent.style.display = 'none' : dropdownContent.style.display = 'block';
    });
  });
}
;// CONCATENATED MODULE: ./src/UI/slidesPlayer.js
function audioPlayer(state) {
  var playBtn = document.getElementById('play-btn');
  var audio = document.querySelector('audio');
  var canvas = document.getElementById('canvas');
  var slideImg = document.getElementById('slide-img');
  var playIcon = "<i id='play-btn' class='fa fa-play'></i>";
  var pauseIcon = "<i id='play-btn' class='fa fa-pause'></i>";

  function playSlide() {
    if (audio.paused) {
      audio.play();
      playBtn.innerHTML = pauseIcon;
    } else {
      audio.pause();
      playBtn.innerHTML = playIcon;
    }
  }

  playBtn.addEventListener('click', playSlide);
  slideImg.addEventListener('click', playSlide);

  audio.onended = function () {
    return playBtn.innerHTML = playBtn;
  };

  var timeline = document.querySelector('.timeline');

  audio.ontimeupdate = function () {
    var percentagePosition = 100 * audio.currentTime / audio.duration;
    timeline.style.backgroundSize = "".concat(percentagePosition, "% 100%");
    timeline.value = percentagePosition;
  };

  var expandBtn = document.getElementById('expand-btn');
  var compressBtn = document.getElementById('compress-btn');
  var elem = document.documentElement;
  var contentEl = document.querySelector('.content');
  var controlsEl = document.querySelector('.slide-controls');
  var navbarEl = document.querySelector('.navbar');
  var groupsEl = document.querySelector('.groups');
  var featuresEl = document.querySelector('.features');
  expandBtn.addEventListener('click', function () {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }

    expandBtn.style.display = 'none';
    compressBtn.style.display = 'block';
    contentEl.style.display = 'block';
    navbarEl.style.display = 'none';
    groupsEl.style.display = 'none';
    featuresEl.style.display = 'none';
    controlsEl.style.transform = 'translateY(0)';
  });
  compressBtn.addEventListener('click', function () {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }

    compressBtn.style.display = 'none';
    expandBtn.style.display = 'block';
    contentEl.style.display = 'grid';
    navbarEl.style.display = 'flex';
    groupsEl.style.display = 'block';
    featuresEl.style.display = 'block';
    controlsEl.style.transform = 'translateY(-56px)';
  });

  if (state.mode === 'viewer') {
    expandBtn.style.display = 'block';
    slideImg.style.display = 'block';
    canvas.style.display = 'none';
    controlsEl.classList.remove('show');
  } else {
    expandBtn.style.display = 'none';
    slideImg.style.display = 'none';
    canvas.style.display = 'block';
    controlsEl.classList.add('show');
  }
}
;// CONCATENATED MODULE: ./src/UI/slidesSketcher.js
function slidesSketcher(state) {
  var slidesBody = document.querySelector('.slides-body');
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var mousedown = false;
  var imageObj = new Image();

  function resizeCanvas() {
    canvas.setAttribute('height', slidesBody.clientHeight);
    canvas.setAttribute('width', slidesBody.clientWidth);
    canvas.style.height = slidesBody.clientHeight;
    canvas.style.width = slidesBody.clientWidth;
  }

  resizeCanvas();

  function scaleToFit(img) {
    var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
    var x = canvas.width / 2 - img.width / 2 * scale;
    var y = canvas.height / 2 - img.height / 2 * scale;
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  }

  imageObj.src = '/images/sakura.jpg';

  imageObj.onload = function () {
    scaleToFit(this);
  };

  var clicks = [];

  function drawRectangle() {
    ctx.beginPath();
    ctx.rect(clicks[0].x, clicks[0].y, clicks[1].x - clicks[0].x, clicks[1].y - clicks[0].y);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;
    ctx.stroke();
  }

  function redraw() {
    canvas.width = canvas.width;
    scaleToFit(imageObj);
    drawRectangle();
  }

  canvas.addEventListener('mousedown', function (e) {
    clicks[0] = {
      x: e.offsetX,
      y: e.offsetY
    };
    mousedown = true;
  });
  canvas.addEventListener('mousemove', function (e) {
    if (mousedown) {
      clicks[1] = {
        x: e.offsetX,
        y: e.offsetY
      };
      redraw();
    }
  });
  canvas.addEventListener('mouseup', function (e) {
    mousedown = false;
    clicks[1] = {
      x: e.offsetX,
      y: e.offsetY
    }; // console.log(canvas.toDataURL('image/jpeg', 1.0));
  });
  canvas.addEventListener('mouseleave', function () {
    mousedown = false;
  });
}
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





var state = {
  // mode: 'viewer',
  mode: 'editor'
};
var viewerBtn = document.getElementById('viewer-btn');
var editorBtn = document.getElementById('editor-btn');
var navBtns = document.getElementById('nav-btns');

function resetNavBtnsStyle() {
  // console.log(navBtns.children);
  _toConsumableArray(navBtns.children).forEach(function (el) {
    return el.classList.remove('active');
  });
}

viewerBtn.addEventListener('click', function () {
  state.mode = 'viewer';
  audioPlayer(state);
  slidesSketcher(state);
  resetNavBtnsStyle();
  viewerBtn.classList.add('active');
});
editorBtn.addEventListener('click', function () {
  state.mode = 'editor';
  audioPlayer(state);
  slidesSketcher(state);
  resetNavBtnsStyle();
  editorBtn.classList.add('active');
});
UIActions();
audioPlayer(state);
slidesSketcher(state);
}();
/******/ })()
;