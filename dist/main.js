/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*::after,\n*::before {\n  box-sizing: border-box;\n}\n\n:root {\n  --cell-size: 100px;\n  --mark-size: calc((var(--cell-size) * 0.9));\n}\n\nbody {\n  margin: 0;\n}\n\n.board {\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  justify-content: center;\n  align-content: center;\n  justify-items: center;\n  align-items: center;\n  /* place-content: center;\n  place-items: center; */\n  cursor: pointer;\n}\n\n.cell {\n  width: var(--cell-size);\n  height: var(--cell-size);\n  border: 1px solid black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.cell:first-child,\n.cell:nth-child(2),\n.cell:nth-child(3) {\n  border-top: none;\n}\n\n.cell:nth-child(3n + 1) {\n  border-left: none;\n}\n\n.cell:nth-child(3n + 3) {\n  border-right: none;\n}\n\n.cell:last-child,\n.cell:nth-child(8),\n.cell:nth-child(7) {\n  border-bottom: none;\n}\n\n.cell.x,\n.cell.circle {\n  cursor: not-allowed;\n}\n\n.cell.x::before,\n.cell.x::after,\n.cell.cell.circle::before {\n  background-color: black;\n}\n\n.board.x .cell:not(.x):not(.circle):hover::before,\n.board.x .cell:not(.x):not(.circle):hover::after,\n.board.circle .cell:not(.x):not(.circle):hover::before {\n  background-color: lightgrey;\n}\n\n.cell.x::before,\n.cell.x::after,\n.board.x .cell:not(.x):not(.circle):hover::before,\n.board.x .cell:not(.x):not(.circle):hover::after {\n  content: \"\";\n  position: absolute;\n  width: calc(var(--mark-size) * 0.15);\n  height: var(--mark-size);\n}\n\n.cell.x::before,\n.board.x .cell:not(.x):not(.circle):hover::before {\n  transform: rotate(45deg);\n}\n\n.cell.x::after,\n.board.x .cell:not(.x):not(.circle):hover::after {\n  transform: rotate(-45deg);\n}\n\n.cell.circle::before,\n.cell.circle::after,\n.board.circle .cell:not(.x):not(.circle):hover::before,\n.board.circle .cell:not(.x):not(.circle):hover::after {\n  content: \"\";\n  position: absolute;\n  border-radius: 50%;\n}\n\n.cell.circle::before,\n.board.circle .cell:not(.x):not(.circle):hover::before {\n  width: var(--mark-size);\n  height: var(--mark-size);\n}\n\n.cell.circle::after,\n.board.circle .cell:not(.x):not(.circle):hover::after {\n  width: calc(var(--mark-size) * 0.7);\n  height: calc(var(--mark-size) * 0.7);\n  background-color: white;\n}\n\n.winning-message {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.9);\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 5rem;\n  flex-direction: column;\n}\n\n.winning-message button {\n  font-size: 3rem;\n  background-color: white;\n  border: 1px solid black;\n  padding: 0.25em 0.5em;\n  cursor: pointer;\n}\n\n.winning-message button:hover {\n  background-color: black;\n  color: white;\n  border-color: white;\n}\n\n.winning-message.show {\n  display: flex;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;EAEE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,2CAA2C;AAC7C;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sCAAsC;EACtC,uBAAuB;EACvB,qBAAqB;EACrB,qBAAqB;EACrB,mBAAmB;EACnB;wBACsB;EACtB,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,wBAAwB;EACxB,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;;;EAGE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;;EAGE,mBAAmB;AACrB;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE,uBAAuB;AACzB;;AAEA;;;EAGE,2BAA2B;AAC7B;;AAEA;;;;EAIE,WAAW;EACX,kBAAkB;EAClB,oCAAoC;EACpC,wBAAwB;AAC1B;;AAEA;;EAEE,wBAAwB;AAC1B;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA;;;;EAIE,WAAW;EACX,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;;EAEE,uBAAuB;EACvB,wBAAwB;AAC1B;;AAEA;;EAEE,mCAAmC;EACnC,oCAAoC;EACpC,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,oCAAoC;EACpC,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,uBAAuB;EACvB,uBAAuB;EACvB,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf","sourcesContent":["*::after,\n*::before {\n  box-sizing: border-box;\n}\n\n:root {\n  --cell-size: 100px;\n  --mark-size: calc((var(--cell-size) * 0.9));\n}\n\nbody {\n  margin: 0;\n}\n\n.board {\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  justify-content: center;\n  align-content: center;\n  justify-items: center;\n  align-items: center;\n  /* place-content: center;\n  place-items: center; */\n  cursor: pointer;\n}\n\n.cell {\n  width: var(--cell-size);\n  height: var(--cell-size);\n  border: 1px solid black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.cell:first-child,\n.cell:nth-child(2),\n.cell:nth-child(3) {\n  border-top: none;\n}\n\n.cell:nth-child(3n + 1) {\n  border-left: none;\n}\n\n.cell:nth-child(3n + 3) {\n  border-right: none;\n}\n\n.cell:last-child,\n.cell:nth-child(8),\n.cell:nth-child(7) {\n  border-bottom: none;\n}\n\n.cell.x,\n.cell.circle {\n  cursor: not-allowed;\n}\n\n.cell.x::before,\n.cell.x::after,\n.cell.cell.circle::before {\n  background-color: black;\n}\n\n.board.x .cell:not(.x):not(.circle):hover::before,\n.board.x .cell:not(.x):not(.circle):hover::after,\n.board.circle .cell:not(.x):not(.circle):hover::before {\n  background-color: lightgrey;\n}\n\n.cell.x::before,\n.cell.x::after,\n.board.x .cell:not(.x):not(.circle):hover::before,\n.board.x .cell:not(.x):not(.circle):hover::after {\n  content: \"\";\n  position: absolute;\n  width: calc(var(--mark-size) * 0.15);\n  height: var(--mark-size);\n}\n\n.cell.x::before,\n.board.x .cell:not(.x):not(.circle):hover::before {\n  transform: rotate(45deg);\n}\n\n.cell.x::after,\n.board.x .cell:not(.x):not(.circle):hover::after {\n  transform: rotate(-45deg);\n}\n\n.cell.circle::before,\n.cell.circle::after,\n.board.circle .cell:not(.x):not(.circle):hover::before,\n.board.circle .cell:not(.x):not(.circle):hover::after {\n  content: \"\";\n  position: absolute;\n  border-radius: 50%;\n}\n\n.cell.circle::before,\n.board.circle .cell:not(.x):not(.circle):hover::before {\n  width: var(--mark-size);\n  height: var(--mark-size);\n}\n\n.cell.circle::after,\n.board.circle .cell:not(.x):not(.circle):hover::after {\n  width: calc(var(--mark-size) * 0.7);\n  height: calc(var(--mark-size) * 0.7);\n  background-color: white;\n}\n\n.winning-message {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.9);\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 5rem;\n  flex-direction: column;\n}\n\n.winning-message button {\n  font-size: 3rem;\n  background-color: white;\n  border: 1px solid black;\n  padding: 0.25em 0.5em;\n  cursor: pointer;\n}\n\n.winning-message button:hover {\n  background-color: black;\n  color: white;\n  border-color: white;\n}\n\n.winning-message.show {\n  display: flex;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



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

/***/ "./src/checkWin.js":
/*!*************************!*\
  !*** ./src/checkWin.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkWin": () => (/* binding */ checkWin)
/* harmony export */ });
/* harmony import */ var _src_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/variables */ "./src/variables.js");



function checkWin(currentClass) {
    return _src_variables__WEBPACK_IMPORTED_MODULE_0__.WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return _src_variables__WEBPACK_IMPORTED_MODULE_0__.cellElements[index].classList.contains(currentClass)
        })
    })
}



/***/ }),

/***/ "./src/endgame.js":
/*!************************!*\
  !*** ./src/endgame.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "endgame": () => (/* binding */ endgame)
/* harmony export */ });
/* harmony import */ var _src_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/variables */ "./src/variables.js");
/* harmony import */ var _src_startGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/startGame */ "./src/startGame.js");




function endgame(draw) {
    if (draw) {
        _src_variables__WEBPACK_IMPORTED_MODULE_0__.winningMessageTextElement.innerText = 'Draw!'
    } else {
        _src_variables__WEBPACK_IMPORTED_MODULE_0__.winningMessageTextElement.innerText = `${_src_startGame__WEBPACK_IMPORTED_MODULE_1__.circleTurn ? "O's" : "X's"} Wins!`
    }
    _src_variables__WEBPACK_IMPORTED_MODULE_0__.winningMessageElement.classList.add('show')
}



/***/ }),

/***/ "./src/handleCLick.js":
/*!****************************!*\
  !*** ./src/handleCLick.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleClick": () => (/* binding */ handleClick)
/* harmony export */ });
/* harmony import */ var _src_startGame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/startGame.js */ "./src/startGame.js");
/* harmony import */ var _src_variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/variables.js */ "./src/variables.js");
/* harmony import */ var _src_placeMark_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/placeMark.js */ "./src/placeMark.js");
/* harmony import */ var _src_checkWin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/checkWin.js */ "./src/checkWin.js");
/* harmony import */ var _src_endgame_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/endgame.js */ "./src/endgame.js");
/* harmony import */ var _src_isdraw_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/isdraw.js */ "./src/isdraw.js");
/* harmony import */ var _setBoardHoverClass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setBoardHoverClass.js */ "./src/setBoardHoverClass.js");










function handleClick(e) {
    const cell = e.target
    const currentClass = _src_startGame_js__WEBPACK_IMPORTED_MODULE_0__.circleTurn ? _src_variables_js__WEBPACK_IMPORTED_MODULE_1__.CIRCLE_CLASS : _src_variables_js__WEBPACK_IMPORTED_MODULE_1__.X_CLASS
    ;(0,_src_placeMark_js__WEBPACK_IMPORTED_MODULE_2__.placeMark)(cell, currentClass)
    if ((0,_src_checkWin_js__WEBPACK_IMPORTED_MODULE_3__.checkWin)(currentClass)) {
        (0,_src_endgame_js__WEBPACK_IMPORTED_MODULE_4__.endgame)(false)
    } else if ((0,_src_isdraw_js__WEBPACK_IMPORTED_MODULE_5__.isDraw)()) {
        (0,_src_endgame_js__WEBPACK_IMPORTED_MODULE_4__.endgame)(true)
    } else {
        (0,_src_startGame_js__WEBPACK_IMPORTED_MODULE_0__.swapTurns)()
        ;(0,_setBoardHoverClass_js__WEBPACK_IMPORTED_MODULE_6__.setBoardHoverClass)()
    }
}





/***/ }),

/***/ "./src/isdraw.js":
/*!***********************!*\
  !*** ./src/isdraw.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDraw": () => (/* binding */ isDraw)
/* harmony export */ });
/* harmony import */ var _src_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/variables */ "./src/variables.js");




function isDraw() {
    return [..._src_variables__WEBPACK_IMPORTED_MODULE_0__.cellElements].every(cell => {
        return cell.classList.contains(_src_variables__WEBPACK_IMPORTED_MODULE_0__.X_CLASS) ||
            cell.classList.contains(_src_variables__WEBPACK_IMPORTED_MODULE_0__.CIRCLE_CLASS)
    })
}



/***/ }),

/***/ "./src/placeMark.js":
/*!**************************!*\
  !*** ./src/placeMark.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placeMark": () => (/* binding */ placeMark)
/* harmony export */ });
function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}



/***/ }),

/***/ "./src/setBoardHoverClass.js":
/*!***********************************!*\
  !*** ./src/setBoardHoverClass.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setBoardHoverClass": () => (/* binding */ setBoardHoverClass)
/* harmony export */ });
/* harmony import */ var _src_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/variables */ "./src/variables.js");
/* harmony import */ var _src_startGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/startGame */ "./src/startGame.js");





function setBoardHoverClass() {
    _src_variables__WEBPACK_IMPORTED_MODULE_0__.board.classList.remove(_src_variables__WEBPACK_IMPORTED_MODULE_0__.X_CLASS)
    _src_variables__WEBPACK_IMPORTED_MODULE_0__.board.classList.remove(_src_variables__WEBPACK_IMPORTED_MODULE_0__.CIRCLE_CLASS)
    if (_src_startGame__WEBPACK_IMPORTED_MODULE_1__.circleTurn) {
        _src_variables__WEBPACK_IMPORTED_MODULE_0__.board.classList.add(_src_variables__WEBPACK_IMPORTED_MODULE_0__.CIRCLE_CLASS)
    } else {
        _src_variables__WEBPACK_IMPORTED_MODULE_0__.board.classList.add(_src_variables__WEBPACK_IMPORTED_MODULE_0__.X_CLASS)
    }
}



/***/ }),

/***/ "./src/startGame.js":
/*!**************************!*\
  !*** ./src/startGame.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "circleTurn": () => (/* binding */ circleTurn),
/* harmony export */   "startGame": () => (/* binding */ startGame),
/* harmony export */   "swapTurns": () => (/* binding */ swapTurns)
/* harmony export */ });
/* harmony import */ var _src_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/variables */ "./src/variables.js");
/* harmony import */ var _src_handleCLick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/handleCLick */ "./src/handleCLick.js");
/* harmony import */ var _src_setBoardHoverClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/setBoardHoverClass */ "./src/setBoardHoverClass.js");
// import { circleTurn } from "../src/variables"







let circleTurn

function startGame() {
    circleTurn = false
    _src_variables__WEBPACK_IMPORTED_MODULE_0__.cellElements.forEach(cell => {
        cell.classList.remove(_src_variables__WEBPACK_IMPORTED_MODULE_0__.X_CLASS)
        cell.classList.remove(_src_variables__WEBPACK_IMPORTED_MODULE_0__.CIRCLE_CLASS)
        cell.removeEventListener('click', _src_handleCLick__WEBPACK_IMPORTED_MODULE_1__.handleClick)
        cell.addEventListener('click', _src_handleCLick__WEBPACK_IMPORTED_MODULE_1__.handleClick, { once: true })
    })
    ;(0,_src_setBoardHoverClass__WEBPACK_IMPORTED_MODULE_2__.setBoardHoverClass)()
    _src_variables__WEBPACK_IMPORTED_MODULE_0__.winningMessageElement.classList.remove('show')
}

function swapTurns() {
    circleTurn = !circleTurn
}



/***/ }),

/***/ "./src/variables.js":
/*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CIRCLE_CLASS": () => (/* binding */ CIRCLE_CLASS),
/* harmony export */   "WINNING_COMBINATIONS": () => (/* binding */ WINNING_COMBINATIONS),
/* harmony export */   "X_CLASS": () => (/* binding */ X_CLASS),
/* harmony export */   "board": () => (/* binding */ board),
/* harmony export */   "cellElements": () => (/* binding */ cellElements),
/* harmony export */   "restartButton": () => (/* binding */ restartButton),
/* harmony export */   "winningMessageElement": () => (/* binding */ winningMessageElement),
/* harmony export */   "winningMessageTextElement": () => (/* binding */ winningMessageTextElement)
/* harmony export */ });
const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]



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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/styles.css */ "./src/styles.css");
/* harmony import */ var _src_startGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/startGame */ "./src/startGame.js");
/* harmony import */ var _src_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/variables */ "./src/variables.js");




(0,_src_startGame__WEBPACK_IMPORTED_MODULE_1__.startGame)()

_src_variables__WEBPACK_IMPORTED_MODULE_2__.restartButton.addEventListener('click', _src_startGame__WEBPACK_IMPORTED_MODULE_1__.startGame)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxLQUFLO0FBQ0wsSUFBSSw0RUFBa0I7QUFDdEIsSUFBSSxrRkFBc0M7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ2hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBMEI7QUFDa0I7QUFDSTs7QUFFaEQseURBQVM7O0FBRVQsMEVBQThCLFVBQVUscURBQVMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvY2hlY2tXaW4uanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvZW5kZ2FtZS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9oYW5kbGVDTGljay5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9pc2RyYXcuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvcGxhY2VNYXJrLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL3NldEJvYXJkSG92ZXJDbGFzcy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9zdGFydEdhbWUuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvdmFyaWFibGVzLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tY2VsbC1zaXplOiAxMDBweDtcXG4gIC0tbWFyay1zaXplOiBjYWxjKCh2YXIoLS1jZWxsLXNpemUpICogMC45KSk7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7ICovXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jZWxsIHtcXG4gIHdpZHRoOiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1jZWxsLXNpemUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2VsbDpmaXJzdC1jaGlsZCxcXG4uY2VsbDpudGgtY2hpbGQoMiksXFxuLmNlbGw6bnRoLWNoaWxkKDMpIHtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxufVxcblxcbi5jZWxsOm50aC1jaGlsZCgzbiArIDEpIHtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbn1cXG5cXG4uY2VsbDpudGgtY2hpbGQoM24gKyAzKSB7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxufVxcblxcbi5jZWxsOmxhc3QtY2hpbGQsXFxuLmNlbGw6bnRoLWNoaWxkKDgpLFxcbi5jZWxsOm50aC1jaGlsZCg3KSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG4uY2VsbC54LFxcbi5jZWxsLmNpcmNsZSB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uY2VsbC54OjpiZWZvcmUsXFxuLmNlbGwueDo6YWZ0ZXIsXFxuLmNlbGwuY2VsbC5jaXJjbGU6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmJvYXJkLnggLmNlbGw6bm90KC54KTpub3QoLmNpcmNsZSk6aG92ZXI6OmJlZm9yZSxcXG4uYm9hcmQueCAuY2VsbDpub3QoLngpOm5vdCguY2lyY2xlKTpob3Zlcjo6YWZ0ZXIsXFxuLmJvYXJkLmNpcmNsZSAuY2VsbDpub3QoLngpOm5vdCguY2lyY2xlKTpob3Zlcjo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxuLmNlbGwueDo6YmVmb3JlLFxcbi5jZWxsLng6OmFmdGVyLFxcbi5ib2FyZC54IC5jZWxsOm5vdCgueCk6bm90KC5jaXJjbGUpOmhvdmVyOjpiZWZvcmUsXFxuLmJvYXJkLnggLmNlbGw6bm90KC54KTpub3QoLmNpcmNsZSk6aG92ZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tbWFyay1zaXplKSAqIDAuMTUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1tYXJrLXNpemUpO1xcbn1cXG5cXG4uY2VsbC54OjpiZWZvcmUsXFxuLmJvYXJkLnggLmNlbGw6bm90KC54KTpub3QoLmNpcmNsZSk6aG92ZXI6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5jZWxsLng6OmFmdGVyLFxcbi5ib2FyZC54IC5jZWxsOm5vdCgueCk6bm90KC5jaXJjbGUpOmhvdmVyOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG4uY2VsbC5jaXJjbGU6OmJlZm9yZSxcXG4uY2VsbC5jaXJjbGU6OmFmdGVyLFxcbi5ib2FyZC5jaXJjbGUgLmNlbGw6bm90KC54KTpub3QoLmNpcmNsZSk6aG92ZXI6OmJlZm9yZSxcXG4uYm9hcmQuY2lyY2xlIC5jZWxsOm5vdCgueCk6bm90KC5jaXJjbGUpOmhvdmVyOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmNlbGwuY2lyY2xlOjpiZWZvcmUsXFxuLmJvYXJkLmNpcmNsZSAuY2VsbDpub3QoLngpOm5vdCguY2lyY2xlKTpob3Zlcjo6YmVmb3JlIHtcXG4gIHdpZHRoOiB2YXIoLS1tYXJrLXNpemUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1tYXJrLXNpemUpO1xcbn1cXG5cXG4uY2VsbC5jaXJjbGU6OmFmdGVyLFxcbi5ib2FyZC5jaXJjbGUgLmNlbGw6bm90KC54KTpub3QoLmNpcmNsZSk6aG92ZXI6OmFmdGVyIHtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLW1hcmstc2l6ZSkgKiAwLjcpO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLW1hcmstc2l6ZSkgKiAwLjcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi53aW5uaW5nLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi53aW5uaW5nLW1lc3NhZ2UgYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAwLjI1ZW0gMC41ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi53aW5uaW5nLW1lc3NhZ2UgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLndpbm5pbmctbWVzc2FnZS5zaG93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CO3dCQUNzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBOzs7RUFHRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFLHVCQUF1QjtBQUN6Qjs7QUFFQTs7O0VBR0UsMkJBQTJCO0FBQzdCOztBQUVBOzs7O0VBSUUsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7Ozs7RUFJRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSx1QkFBdUI7RUFDdkIsd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFLG1DQUFtQztFQUNuQyxvQ0FBb0M7RUFDcEMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWNlbGwtc2l6ZTogMTAwcHg7XFxuICAtLW1hcmstc2l6ZTogY2FsYygodmFyKC0tY2VsbC1zaXplKSAqIDAuOSkpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgYXV0byk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyOyAqL1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2VsbCB7XFxuICB3aWR0aDogdmFyKC0tY2VsbC1zaXplKTtcXG4gIGhlaWdodDogdmFyKC0tY2VsbC1zaXplKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNlbGw6Zmlyc3QtY2hpbGQsXFxuLmNlbGw6bnRoLWNoaWxkKDIpLFxcbi5jZWxsOm50aC1jaGlsZCgzKSB7XFxuICBib3JkZXItdG9wOiBub25lO1xcbn1cXG5cXG4uY2VsbDpudGgtY2hpbGQoM24gKyAxKSB7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG59XFxuXFxuLmNlbGw6bnRoLWNoaWxkKDNuICsgMykge1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbn1cXG5cXG4uY2VsbDpsYXN0LWNoaWxkLFxcbi5jZWxsOm50aC1jaGlsZCg4KSxcXG4uY2VsbDpudGgtY2hpbGQoNykge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuLmNlbGwueCxcXG4uY2VsbC5jaXJjbGUge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLmNlbGwueDo6YmVmb3JlLFxcbi5jZWxsLng6OmFmdGVyLFxcbi5jZWxsLmNlbGwuY2lyY2xlOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5ib2FyZC54IC5jZWxsOm5vdCgueCk6bm90KC5jaXJjbGUpOmhvdmVyOjpiZWZvcmUsXFxuLmJvYXJkLnggLmNlbGw6bm90KC54KTpub3QoLmNpcmNsZSk6aG92ZXI6OmFmdGVyLFxcbi5ib2FyZC5jaXJjbGUgLmNlbGw6bm90KC54KTpub3QoLmNpcmNsZSk6aG92ZXI6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcblxcbi5jZWxsLng6OmJlZm9yZSxcXG4uY2VsbC54OjphZnRlcixcXG4uYm9hcmQueCAuY2VsbDpub3QoLngpOm5vdCguY2lyY2xlKTpob3Zlcjo6YmVmb3JlLFxcbi5ib2FyZC54IC5jZWxsOm5vdCgueCk6bm90KC5jaXJjbGUpOmhvdmVyOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLW1hcmstc2l6ZSkgKiAwLjE1KTtcXG4gIGhlaWdodDogdmFyKC0tbWFyay1zaXplKTtcXG59XFxuXFxuLmNlbGwueDo6YmVmb3JlLFxcbi5ib2FyZC54IC5jZWxsOm5vdCgueCk6bm90KC5jaXJjbGUpOmhvdmVyOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4uY2VsbC54OjphZnRlcixcXG4uYm9hcmQueCAuY2VsbDpub3QoLngpOm5vdCguY2lyY2xlKTpob3Zlcjo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuLmNlbGwuY2lyY2xlOjpiZWZvcmUsXFxuLmNlbGwuY2lyY2xlOjphZnRlcixcXG4uYm9hcmQuY2lyY2xlIC5jZWxsOm5vdCgueCk6bm90KC5jaXJjbGUpOmhvdmVyOjpiZWZvcmUsXFxuLmJvYXJkLmNpcmNsZSAuY2VsbDpub3QoLngpOm5vdCguY2lyY2xlKTpob3Zlcjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5jZWxsLmNpcmNsZTo6YmVmb3JlLFxcbi5ib2FyZC5jaXJjbGUgLmNlbGw6bm90KC54KTpub3QoLmNpcmNsZSk6aG92ZXI6OmJlZm9yZSB7XFxuICB3aWR0aDogdmFyKC0tbWFyay1zaXplKTtcXG4gIGhlaWdodDogdmFyKC0tbWFyay1zaXplKTtcXG59XFxuXFxuLmNlbGwuY2lyY2xlOjphZnRlcixcXG4uYm9hcmQuY2lyY2xlIC5jZWxsOm5vdCgueCk6bm90KC5jaXJjbGUpOmhvdmVyOjphZnRlciB7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1tYXJrLXNpemUpICogMC43KTtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1tYXJrLXNpemUpICogMC43KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ud2lubmluZy1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ud2lubmluZy1tZXNzYWdlIGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMC4yNWVtIDAuNWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ud2lubmluZy1tZXNzYWdlIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XFxufVxcblxcbi53aW5uaW5nLW1lc3NhZ2Uuc2hvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFdJTk5JTkdfQ09NQklOQVRJT05TIH0gZnJvbSBcIi4uL3NyYy92YXJpYWJsZXNcIlxuaW1wb3J0IHsgY2VsbEVsZW1lbnRzIH0gZnJvbSBcIi4uL3NyYy92YXJpYWJsZXNcIlxuXG5mdW5jdGlvbiBjaGVja1dpbihjdXJyZW50Q2xhc3MpIHtcbiAgICByZXR1cm4gV0lOTklOR19DT01CSU5BVElPTlMuc29tZShjb21iaW5hdGlvbiA9PiB7XG4gICAgICAgIHJldHVybiBjb21iaW5hdGlvbi5ldmVyeShpbmRleCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY2VsbEVsZW1lbnRzW2luZGV4XS5jbGFzc0xpc3QuY29udGFpbnMoY3VycmVudENsYXNzKVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCB7IGNoZWNrV2luIH0iLCJpbXBvcnQgeyB3aW5uaW5nTWVzc2FnZVRleHRFbGVtZW50IH0gZnJvbSBcIi4uL3NyYy92YXJpYWJsZXNcIlxuaW1wb3J0IHsgd2lubmluZ01lc3NhZ2VFbGVtZW50IH0gZnJvbSBcIi4uL3NyYy92YXJpYWJsZXNcIlxuaW1wb3J0IHsgY2lyY2xlVHVybiB9IGZyb20gXCIuLi9zcmMvc3RhcnRHYW1lXCJcblxuZnVuY3Rpb24gZW5kZ2FtZShkcmF3KSB7XG4gICAgaWYgKGRyYXcpIHtcbiAgICAgICAgd2lubmluZ01lc3NhZ2VUZXh0RWxlbWVudC5pbm5lclRleHQgPSAnRHJhdyEnXG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2lubmluZ01lc3NhZ2VUZXh0RWxlbWVudC5pbm5lclRleHQgPSBgJHtjaXJjbGVUdXJuID8gXCJPJ3NcIiA6IFwiWCdzXCJ9IFdpbnMhYFxuICAgIH1cbiAgICB3aW5uaW5nTWVzc2FnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hvdycpXG59XG5cbmV4cG9ydCB7IGVuZGdhbWUgfSIsImltcG9ydCB7IGNpcmNsZVR1cm4gfSBmcm9tIFwiLi4vc3JjL3N0YXJ0R2FtZS5qc1wiXG5pbXBvcnQgeyBDSVJDTEVfQ0xBU1MgfSBmcm9tIFwiLi4vc3JjL3ZhcmlhYmxlcy5qc1wiXG5pbXBvcnQgeyBYX0NMQVNTIH0gZnJvbSBcIi4uL3NyYy92YXJpYWJsZXMuanNcIlxuaW1wb3J0IHsgcGxhY2VNYXJrIH0gZnJvbSBcIi4uL3NyYy9wbGFjZU1hcmsuanNcIlxuaW1wb3J0IHsgY2hlY2tXaW4gfSBmcm9tIFwiLi4vc3JjL2NoZWNrV2luLmpzXCJcbmltcG9ydCB7IGVuZGdhbWUgfSBmcm9tIFwiLi4vc3JjL2VuZGdhbWUuanNcIlxuaW1wb3J0IHsgc3dhcFR1cm5zIH0gZnJvbSBcIi4uL3NyYy9zdGFydEdhbWUuanNcIlxuaW1wb3J0IHsgaXNEcmF3IH0gZnJvbSBcIi4uL3NyYy9pc2RyYXcuanNcIlxuaW1wb3J0IHsgc2V0Qm9hcmRIb3ZlckNsYXNzIH0gZnJvbSBcIi4vc2V0Qm9hcmRIb3ZlckNsYXNzLmpzXCJcblxuZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAgIGNvbnN0IGNlbGwgPSBlLnRhcmdldFxuICAgIGNvbnN0IGN1cnJlbnRDbGFzcyA9IGNpcmNsZVR1cm4gPyBDSVJDTEVfQ0xBU1MgOiBYX0NMQVNTXG4gICAgcGxhY2VNYXJrKGNlbGwsIGN1cnJlbnRDbGFzcylcbiAgICBpZiAoY2hlY2tXaW4oY3VycmVudENsYXNzKSkge1xuICAgICAgICBlbmRnYW1lKGZhbHNlKVxuICAgIH0gZWxzZSBpZiAoaXNEcmF3KCkpIHtcbiAgICAgICAgZW5kZ2FtZSh0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHN3YXBUdXJucygpXG4gICAgICAgIHNldEJvYXJkSG92ZXJDbGFzcygpXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IHsgaGFuZGxlQ2xpY2sgfSIsImltcG9ydCB7IGNlbGxFbGVtZW50cyB9IGZyb20gXCIuLi9zcmMvdmFyaWFibGVzXCJcbmltcG9ydCB7IFhfQ0xBU1MgfSBmcm9tIFwiLi4vc3JjL3ZhcmlhYmxlc1wiXG5pbXBvcnQgeyBDSVJDTEVfQ0xBU1MgfSBmcm9tIFwiLi4vc3JjL3ZhcmlhYmxlc1wiXG5cbmZ1bmN0aW9uIGlzRHJhdygpIHtcbiAgICByZXR1cm4gWy4uLmNlbGxFbGVtZW50c10uZXZlcnkoY2VsbCA9PiB7XG4gICAgICAgIHJldHVybiBjZWxsLmNsYXNzTGlzdC5jb250YWlucyhYX0NMQVNTKSB8fFxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoQ0lSQ0xFX0NMQVNTKVxuICAgIH0pXG59XG5cbmV4cG9ydCB7IGlzRHJhdyB9IiwiZnVuY3Rpb24gcGxhY2VNYXJrKGNlbGwsIGN1cnJlbnRDbGFzcykge1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChjdXJyZW50Q2xhc3MpXG59XG5cbmV4cG9ydCB7IHBsYWNlTWFyayB9IiwiaW1wb3J0IHsgYm9hcmQgfSBmcm9tIFwiLi4vc3JjL3ZhcmlhYmxlc1wiXG5pbXBvcnQgeyBYX0NMQVNTIH0gZnJvbSBcIi4uL3NyYy92YXJpYWJsZXNcIlxuaW1wb3J0IHsgQ0lSQ0xFX0NMQVNTIH0gZnJvbSBcIi4uL3NyYy92YXJpYWJsZXNcIlxuaW1wb3J0IHsgY2lyY2xlVHVybiB9IGZyb20gXCIuLi9zcmMvc3RhcnRHYW1lXCJcblxuZnVuY3Rpb24gc2V0Qm9hcmRIb3ZlckNsYXNzKCkge1xuICAgIGJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoWF9DTEFTUylcbiAgICBib2FyZC5jbGFzc0xpc3QucmVtb3ZlKENJUkNMRV9DTEFTUylcbiAgICBpZiAoY2lyY2xlVHVybikge1xuICAgICAgICBib2FyZC5jbGFzc0xpc3QuYWRkKENJUkNMRV9DTEFTUylcbiAgICB9IGVsc2Uge1xuICAgICAgICBib2FyZC5jbGFzc0xpc3QuYWRkKFhfQ0xBU1MpXG4gICAgfVxufVxuXG5leHBvcnQgeyBzZXRCb2FyZEhvdmVyQ2xhc3MgfSIsIi8vIGltcG9ydCB7IGNpcmNsZVR1cm4gfSBmcm9tIFwiLi4vc3JjL3ZhcmlhYmxlc1wiXG5pbXBvcnQgeyBjZWxsRWxlbWVudHMgfSBmcm9tIFwiLi4vc3JjL3ZhcmlhYmxlc1wiXG5pbXBvcnQgeyB3aW5uaW5nTWVzc2FnZUVsZW1lbnQgfSBmcm9tIFwiLi4vc3JjL3ZhcmlhYmxlc1wiXG5pbXBvcnQgeyBYX0NMQVNTIH0gZnJvbSBcIi4uL3NyYy92YXJpYWJsZXNcIlxuaW1wb3J0IHsgQ0lSQ0xFX0NMQVNTIH0gZnJvbSBcIi4uL3NyYy92YXJpYWJsZXNcIlxuaW1wb3J0IHsgaGFuZGxlQ2xpY2sgfSBmcm9tIFwiLi4vc3JjL2hhbmRsZUNMaWNrXCJcbmltcG9ydCB7IHNldEJvYXJkSG92ZXJDbGFzcyB9IGZyb20gXCIuLi9zcmMvc2V0Qm9hcmRIb3ZlckNsYXNzXCJcblxubGV0IGNpcmNsZVR1cm5cblxuZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgIGNpcmNsZVR1cm4gPSBmYWxzZVxuICAgIGNlbGxFbGVtZW50cy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoWF9DTEFTUylcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKENJUkNMRV9DTEFTUylcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKVxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2ssIHsgb25jZTogdHJ1ZSB9KVxuICAgIH0pXG4gICAgc2V0Qm9hcmRIb3ZlckNsYXNzKClcbiAgICB3aW5uaW5nTWVzc2FnZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXG59XG5cbmZ1bmN0aW9uIHN3YXBUdXJucygpIHtcbiAgICBjaXJjbGVUdXJuID0gIWNpcmNsZVR1cm5cbn1cblxuZXhwb3J0IHsgc3RhcnRHYW1lLCBjaXJjbGVUdXJuLCBzd2FwVHVybnN9IiwiY29uc3QgWF9DTEFTUyA9ICd4J1xuY29uc3QgQ0lSQ0xFX0NMQVNTID0gJ2NpcmNsZSdcbmNvbnN0IGNlbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNlbGxdJylcbmNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkJylcbmNvbnN0IHdpbm5pbmdNZXNzYWdlVGV4dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS13aW5uaW5nLW1lc3NhZ2UtdGV4dF0nKVxuY29uc3Qgd2lubmluZ01lc3NhZ2VFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbm5pbmdNZXNzYWdlJylcbmNvbnN0IHJlc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGFydEJ1dHRvbicpXG5jb25zdCBXSU5OSU5HX0NPTUJJTkFUSU9OUyA9IFtcbiAgICBbMCwgMSwgMl0sXG4gICAgWzMsIDQsIDVdLFxuICAgIFs2LCA3LCA4XSxcbiAgICBbMCwgMywgNl0sXG4gICAgWzEsIDQsIDddLFxuICAgIFsyLCA1LCA4XSxcbiAgICBbMCwgNCwgOF0sXG4gICAgWzIsIDQsIDZdXG5dXG5cbmV4cG9ydCB7IFhfQ0xBU1MsIENJUkNMRV9DTEFTUywgY2VsbEVsZW1lbnRzLCBib2FyZCwgd2lubmluZ01lc3NhZ2VUZXh0RWxlbWVudCwgd2lubmluZ01lc3NhZ2VFbGVtZW50LCByZXN0YXJ0QnV0dG9uLCBXSU5OSU5HX0NPTUJJTkFUSU9OUyB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9zcmMvc3R5bGVzLmNzcydcbmltcG9ydCB7IHN0YXJ0R2FtZSB9IGZyb20gJy4uL3NyYy9zdGFydEdhbWUnXG5pbXBvcnQgeyByZXN0YXJ0QnV0dG9uIH0gZnJvbSAnLi4vc3JjL3ZhcmlhYmxlcydcblxuc3RhcnRHYW1lKClcblxucmVzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=