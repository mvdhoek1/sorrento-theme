/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js ***!
  \***************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* global __webpack_require__ */\nvar Refresh = __webpack_require__(/*! react-refresh/runtime */ \"./node_modules/react-refresh/runtime.js\");\n\n/**\n * Extracts exports from a webpack module object.\n * @param {string} moduleId A Webpack module ID.\n * @returns {*} An exports object from the module.\n */\nfunction getModuleExports(moduleId) {\n  if (typeof moduleId === 'undefined') {\n    // `moduleId` is unavailable, which indicates that this module is not in the cache,\n    // which means we won't be able to capture any exports,\n    // and thus they cannot be refreshed safely.\n    // These are likely runtime or dynamically generated modules.\n    return {};\n  }\n\n  var maybeModule = __webpack_require__.c[moduleId];\n  if (typeof maybeModule === 'undefined') {\n    // `moduleId` is available but the module in cache is unavailable,\n    // which indicates the module is somehow corrupted (e.g. broken Webpacak `module` globals).\n    // We will warn the user (as this is likely a mistake) and assume they cannot be refreshed.\n    console.warn('[React Refresh] Failed to get exports for module: ' + moduleId + '.');\n    return {};\n  }\n\n  var exportsOrPromise = maybeModule.exports;\n  if (typeof Promise !== 'undefined' && exportsOrPromise instanceof Promise) {\n    return exportsOrPromise.then(function (exports) {\n      return exports;\n    });\n  }\n  return exportsOrPromise;\n}\n\n/**\n * Calculates the signature of a React refresh boundary.\n * If this signature changes, it's unsafe to accept the boundary.\n *\n * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/907d6af22ac6ebe58572be418e9253a90665ecbd/packages/metro/src/lib/polyfills/require.js#L795-L816).\n * @param {*} moduleExports A Webpack module exports object.\n * @returns {string[]} A React refresh boundary signature array.\n */\nfunction getReactRefreshBoundarySignature(moduleExports) {\n  var signature = [];\n  signature.push(Refresh.getFamilyByType(moduleExports));\n\n  if (moduleExports == null || typeof moduleExports !== 'object') {\n    // Exit if we can't iterate over exports.\n    return signature;\n  }\n\n  for (var key in moduleExports) {\n    if (key === '__esModule') {\n      continue;\n    }\n\n    signature.push(key);\n    signature.push(Refresh.getFamilyByType(moduleExports[key]));\n  }\n\n  return signature;\n}\n\n/**\n * Creates a helper that performs a delayed React refresh.\n * @returns {function(function(): void): void} A debounced React refresh function.\n */\nfunction createDebounceUpdate() {\n  /**\n   * A cached setTimeout handler.\n   * @type {number | undefined}\n   */\n  var refreshTimeout;\n\n  /**\n   * Performs react refresh on a delay and clears the error overlay.\n   * @param {function(): void} callback\n   * @returns {void}\n   */\n  function enqueueUpdate(callback) {\n    if (typeof refreshTimeout === 'undefined') {\n      refreshTimeout = setTimeout(function () {\n        refreshTimeout = undefined;\n        Refresh.performReactRefresh();\n        callback();\n      }, 30);\n    }\n  }\n\n  return enqueueUpdate;\n}\n\n/**\n * Checks if all exports are likely a React component.\n *\n * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/febdba2383113c88296c61e28e4ef6a7f4939fda/packages/metro/src/lib/polyfills/require.js#L748-L774).\n * @param {*} moduleExports A Webpack module exports object.\n * @returns {boolean} Whether the exports are React component like.\n */\nfunction isReactRefreshBoundary(moduleExports) {\n  if (Refresh.isLikelyComponentType(moduleExports)) {\n    return true;\n  }\n  if (moduleExports === undefined || moduleExports === null || typeof moduleExports !== 'object') {\n    // Exit if we can't iterate over exports.\n    return false;\n  }\n\n  var hasExports = false;\n  var areAllExportsComponents = true;\n  for (var key in moduleExports) {\n    hasExports = true;\n\n    // This is the ES Module indicator flag\n    if (key === '__esModule') {\n      continue;\n    }\n\n    // We can (and have to) safely execute getters here,\n    // as Webpack manually assigns harmony exports to getters,\n    // without any side-effects attached.\n    // Ref: https://github.com/webpack/webpack/blob/b93048643fe74de2a6931755911da1212df55897/lib/MainTemplate.js#L281\n    var exportValue = moduleExports[key];\n    if (!Refresh.isLikelyComponentType(exportValue)) {\n      areAllExportsComponents = false;\n    }\n  }\n\n  return hasExports && areAllExportsComponents;\n}\n\n/**\n * Checks if exports are likely a React component and registers them.\n *\n * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/febdba2383113c88296c61e28e4ef6a7f4939fda/packages/metro/src/lib/polyfills/require.js#L818-L835).\n * @param {*} moduleExports A Webpack module exports object.\n * @param {string} moduleId A Webpack module ID.\n * @returns {void}\n */\nfunction registerExportsForReactRefresh(moduleExports, moduleId) {\n  if (Refresh.isLikelyComponentType(moduleExports)) {\n    // Register module.exports if it is likely a component\n    Refresh.register(moduleExports, moduleId + ' %exports%');\n  }\n\n  if (moduleExports === undefined || moduleExports === null || typeof moduleExports !== 'object') {\n    // Exit if we can't iterate over the exports.\n    return;\n  }\n\n  for (var key in moduleExports) {\n    // Skip registering the ES Module indicator\n    if (key === '__esModule') {\n      continue;\n    }\n\n    var exportValue = moduleExports[key];\n    if (Refresh.isLikelyComponentType(exportValue)) {\n      var typeID = moduleId + ' %exports% ' + key;\n      Refresh.register(exportValue, typeID);\n    }\n  }\n}\n\n/**\n * Compares previous and next module objects to check for mutated boundaries.\n *\n * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/907d6af22ac6ebe58572be418e9253a90665ecbd/packages/metro/src/lib/polyfills/require.js#L776-L792).\n * @param {*} prevExports The current Webpack module exports object.\n * @param {*} nextExports The next Webpack module exports object.\n * @returns {boolean} Whether the React refresh boundary should be invalidated.\n */\nfunction shouldInvalidateReactRefreshBoundary(prevExports, nextExports) {\n  var prevSignature = getReactRefreshBoundarySignature(prevExports);\n  var nextSignature = getReactRefreshBoundarySignature(nextExports);\n\n  if (prevSignature.length !== nextSignature.length) {\n    return true;\n  }\n\n  for (var i = 0; i < nextSignature.length; i += 1) {\n    if (prevSignature[i] !== nextSignature[i]) {\n      return true;\n    }\n  }\n\n  return false;\n}\n\nvar enqueueUpdate = createDebounceUpdate();\nfunction executeRuntime(moduleExports, moduleId, webpackHot, refreshOverlay, isTest) {\n  registerExportsForReactRefresh(moduleExports, moduleId);\n\n  if (webpackHot) {\n    var isHotUpdate = !!webpackHot.data;\n    var prevExports;\n    if (isHotUpdate) {\n      prevExports = webpackHot.data.prevExports;\n    }\n\n    if (isReactRefreshBoundary(moduleExports)) {\n      webpackHot.dispose(\n        /**\n         * A callback to performs a full refresh if React has unrecoverable errors,\n         * and also caches the to-be-disposed module.\n         * @param {*} data A hot module data object from Webpack HMR.\n         * @returns {void}\n         */\n        function hotDisposeCallback(data) {\n          // We have to mutate the data object to get data registered and cached\n          data.prevExports = moduleExports;\n        }\n      );\n      webpackHot.accept(\n        /**\n         * An error handler to allow self-recovering behaviours.\n         * @param {Error} error An error occurred during evaluation of a module.\n         * @returns {void}\n         */\n        function hotErrorHandler(error) {\n          if (typeof refreshOverlay !== 'undefined' && refreshOverlay) {\n            refreshOverlay.handleRuntimeError(error);\n          }\n\n          if (typeof isTest !== 'undefined' && isTest) {\n            if (window.onHotAcceptError) {\n              window.onHotAcceptError(error.message);\n            }\n          }\n\n          __webpack_require__.c[moduleId].hot.accept(hotErrorHandler);\n        }\n      );\n\n      if (isHotUpdate) {\n        if (\n          isReactRefreshBoundary(prevExports) &&\n          shouldInvalidateReactRefreshBoundary(prevExports, moduleExports)\n        ) {\n          webpackHot.invalidate();\n        } else {\n          enqueueUpdate(\n            /**\n             * A function to dismiss the error overlay after performing React refresh.\n             * @returns {void}\n             */\n            function updateCallback() {\n              if (typeof refreshOverlay !== 'undefined' && refreshOverlay) {\n                refreshOverlay.clearRuntimeErrors();\n              }\n            }\n          );\n        }\n      }\n    } else {\n      if (isHotUpdate && typeof prevExports !== 'undefined') {\n        webpackHot.invalidate();\n      }\n    }\n  }\n}\n\nmodule.exports = Object.freeze({\n  enqueueUpdate: enqueueUpdate,\n  executeRuntime: executeRuntime,\n  getModuleExports: getModuleExports,\n  isReactRefreshBoundary: isReactRefreshBoundary,\n  shouldInvalidateReactRefreshBoundary: shouldInvalidateReactRefreshBoundary,\n  registerExportsForReactRefresh: registerExportsForReactRefresh,\n});\n\n\n//# sourceURL=webpack://sage/./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/components/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/components/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.make = exports.controllers = void 0;\nlet controllers = [];\nexports.controllers = controllers;\nconst make = (options) => __awaiter(void 0, void 0, void 0, function* () {\n    if (options.indicator && !customElements.get(`bud-activity-indicator`)) {\n        yield Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./indicator/index.js */ \"./node_modules/@roots/bud-client/lib/components/indicator/index.js\"))).then((controller) => __awaiter(void 0, void 0, void 0, function* () { return yield controller.make(); }))\n            .then(controller => controllers.push(controller));\n    }\n    if (options.overlay && !customElements.get(`bud-error`)) {\n        yield Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./overlay/index.js */ \"./node_modules/@roots/bud-client/lib/components/overlay/index.js\"))).then((controller) => __awaiter(void 0, void 0, void 0, function* () { return yield controller.make(); }))\n            .then(controller => controllers.push(controller));\n    }\n    return controllers;\n});\nexports.make = make;\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/components/index.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/components/indicator/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/components/indicator/index.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.make = void 0;\nconst indicator_component_js_1 = __webpack_require__(/*! ./indicator.component.js */ \"./node_modules/@roots/bud-client/lib/components/indicator/indicator.component.js\");\nconst indicator_controller_js_1 = __webpack_require__(/*! ./indicator.controller.js */ \"./node_modules/@roots/bud-client/lib/components/indicator/indicator.controller.js\");\nconst make = () => __awaiter(void 0, void 0, void 0, function* () {\n    if (customElements.get(`bud-activity-indicator`))\n        return;\n    customElements.define(`bud-activity-indicator`, indicator_component_js_1.Component);\n    return new indicator_controller_js_1.Controller();\n});\nexports.make = make;\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/components/indicator/index.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/components/indicator/indicator.component.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/components/indicator/indicator.component.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Component = void 0;\nconst indicator_pulse_js_1 = __webpack_require__(/*! ./indicator.pulse.js */ \"./node_modules/@roots/bud-client/lib/components/indicator/indicator.pulse.js\");\n/**\n * Indicator web component\n * @public\n */\nclass Component extends HTMLElement {\n    /**\n     * Class constructor\n     * @public\n     */\n    constructor() {\n        super();\n        /**\n         * Component name\n         * @public\n         */\n        this.name = `bud-activity-indicator`;\n        /**\n         * Status indicator colors\n         * @public\n         */\n        this.colors = {\n            success: [4, 120, 87, 1],\n            error: [220, 38, 38, 1],\n            warn: [252, 211, 77, 1],\n            pending: [59, 130, 246, 1],\n        };\n        this.renderShadow();\n    }\n    /**\n     * Root div querySelector selector\n     * @public\n     */\n    get selector() {\n        return `.${this.name}`;\n    }\n    /**\n     * Get accessor: has errors\n     * @public\n     */\n    get hasErrors() {\n        return this.getAttribute(`has-errors`) == `true`;\n    }\n    /**\n     * Get accessor: has warnings\n     * @public\n     */\n    get hasWarnings() {\n        return this.getAttribute(`has-warnings`) == `true`;\n    }\n    /**\n     * Render status indicator\n     * @public\n     */\n    renderShadow() {\n        const container = document.createElement(`div`);\n        container.classList.add(this.name);\n        container.innerHTML = `\n    <style>\n    .bud-activity-indicator {\n      position: fixed;\n      width: 10px;\n      height: 10px;\n      left: 10px;\n      bottom: 10px;\n      z-index: 9999;\n      margin: 5px;\n      padding: 5px;\n      -webkit-transition:\n        all .6s ease-in-out,\n      transition:\n        all .6s ease-in-out;\n      animation-fill-mode: forwards;\n      pointer-events: none;\n      border-radius: 50%;\n      transform: scale(0);\n      opacity: 0;\n    }\n\n    .show {\n      opacity: 1;\n      background-color: rgba(255, 255, 255, 1);\n      transform: scale(1);\n      transition:\n        all .6s ease-in-out;\n    }\n\n    ${(0, indicator_pulse_js_1.pulse)(`success`, this.colors.success)}\n    ${(0, indicator_pulse_js_1.pulse)(`error`, this.colors.error)}\n    ${(0, indicator_pulse_js_1.pulse)(`warning`, this.colors.warn)}\n    ${(0, indicator_pulse_js_1.pulse)(`pending`, this.colors.pending)}\n\n    </style>\n    `;\n        this.attachShadow({ mode: `open` }).appendChild(container);\n    }\n    /**\n     * Show status indicator\n     * @public\n     */\n    show() {\n        this.hideTimeout && clearTimeout(this.hideTimeout);\n        this.shadowRoot.querySelector(this.selector).classList.add(`show`);\n    }\n    /**\n     * Hide status indicator\n     */\n    hide() {\n        this.hideTimeout = setTimeout(() => {\n            this.shadowRoot.querySelector(this.selector).classList.remove(`show`);\n        }, 2000);\n    }\n    /**\n     * Status is pending\n     * @public\n     */\n    onPending() {\n        this.show();\n        this.shadowRoot\n            .querySelector(this.selector)\n            .classList.remove(`error`, `warning`, `success`);\n        this.shadowRoot.querySelector(this.selector).classList.add(`pending`);\n        this.hide();\n    }\n    /**\n     * Status is success\n     * @public\n     */\n    onSuccess() {\n        this.show();\n        this.shadowRoot\n            .querySelector(this.selector)\n            .classList.remove(`error`, `warning`, `pending`);\n        this.shadowRoot.querySelector(this.selector).classList.add(`success`);\n        this.hide();\n    }\n    /**\n     * Status is error\n     * @public\n     */\n    onError() {\n        this.show();\n        this.shadowRoot\n            .querySelector(this.selector)\n            .classList.remove(`warning`, `success`, `pending`);\n        this.shadowRoot.querySelector(this.selector).classList.add(`error`);\n    }\n    /**\n     * Status is warning\n     * @public\n     */\n    onWarning() {\n        this.show();\n        this.shadowRoot\n            .querySelector(this.selector)\n            .classList.remove(`error`, `success`, `pending`);\n        this.shadowRoot.querySelector(this.selector).classList.add(`warning`);\n    }\n    static get observedAttributes() {\n        return [`has-errors`, `has-warnings`, `action`];\n    }\n    attributeChangedCallback() {\n        if (this.hasAttribute(`has-errors`))\n            return this.onError();\n        if (this.hasAttribute(`has-warnings`))\n            return this.onWarning();\n        if (!this.hasAttribute(`has-errors`) &&\n            !this.hasAttribute(`has-warnings`) &&\n            this.getAttribute(`action`) === `built`)\n            return this.onSuccess();\n        if (this.getAttribute(`action`) == `building` ||\n            this.getAttribute(`action`) == `sync`)\n            return this.onPending();\n    }\n}\nexports.Component = Component;\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/components/indicator/indicator.component.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/components/indicator/indicator.controller.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/components/indicator/indicator.controller.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Controller = void 0;\n/**\n * Activity indicator controller\n * @public\n */\nclass Controller {\n    /**\n     * Initialization\n     * @public\n     */\n    constructor() {\n        /**\n         * Active WHM payload\n         * @public\n         */\n        this.payload = null;\n        this.node = document.createElement(`bud-activity-indicator`);\n        this.update = this.update.bind(this);\n    }\n    /**\n     * Append `bud-error` element to the DOM\n     *\n     * @public\n     */\n    addNode() {\n        var _a;\n        if (document.body.querySelector(`bud-activity-indicator`)) {\n            if (typeof this.timer.unref === `function`)\n                this.timer.unref();\n            this.removeNode();\n        }\n        (_a = document.body) === null || _a === void 0 ? void 0 : _a.appendChild(this.node);\n        this.timer = setTimeout(this.removeNode, 3000);\n    }\n    /**\n     * Remove `bud-error` element from the DOM (if present)\n     *\n     * @public\n     */\n    removeNode() {\n        var _a;\n        (_a = document.body.querySelector(`bud-activity-indicator`)) === null || _a === void 0 ? void 0 : _a.remove();\n    }\n    /**\n     * Update activity indicator\n     * @public\n     */\n    update(payload) {\n        var _a, _b;\n        this.node.toggleAttribute(`has-errors`, ((_a = payload.errors) === null || _a === void 0 ? void 0 : _a.length) ? true : false);\n        this.node.toggleAttribute(`has-warnings`, ((_b = payload.warnings) === null || _b === void 0 ? void 0 : _b.length) ? true : false);\n        this.node.setAttribute(`action`, payload.action);\n        this.addNode();\n    }\n}\nexports.Controller = Controller;\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/components/indicator/indicator.controller.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/components/indicator/indicator.pulse.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/components/indicator/indicator.pulse.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.pulse = void 0;\n/**\n * CSS animation for reload indicator\n * @public\n */\nconst pulse = (name, color) => `\n  .${name} {\n    box-shadow: 0 0 0 0 rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]});\n    animation: ${name}__pulse 2s infinite;\n    transition: all 0.4s ease-in-out;\n  }\n\n  .${name}:not(.show) {\n    background-color: rgba(${color[0]}, ${color[1]}, ${color[2]}, 0);\n  }\n\n  .${name}.show {\n    background-color: rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]});\n  }\n\n  @keyframes ${name}__pulse {\n    0% {\n      transform: scale(0.95);\n      box-shadow: 0 0 0 0 rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.7);\n    }\n\n    70% {\n      transform: scale(1);\n      box-shadow: 0 0 0 10px rgba(${color[0]}, ${color[1]}, ${color[2]}, 0);\n    }\n\n    100% {\n      transform: scale(0.95);\n      box-shadow: 0 0 0 0 rgba(${color[0]}, ${color[1]}, ${color[2]}, 0);\n    }\n  }\n`;\nexports.pulse = pulse;\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/components/indicator/indicator.pulse.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/components/overlay/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/components/overlay/index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.make = void 0;\nconst overlay_component_js_1 = __webpack_require__(/*! ./overlay.component.js */ \"./node_modules/@roots/bud-client/lib/components/overlay/overlay.component.js\");\nconst overlay_controller_js_1 = __webpack_require__(/*! ./overlay.controller.js */ \"./node_modules/@roots/bud-client/lib/components/overlay/overlay.controller.js\");\nconst make = () => __awaiter(void 0, void 0, void 0, function* () {\n    if (customElements.get(`bud-error`))\n        return;\n    customElements.define(`bud-error`, overlay_component_js_1.Component);\n    return new overlay_controller_js_1.Controller();\n});\nexports.make = make;\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/components/overlay/index.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/components/overlay/overlay.component.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/components/overlay/overlay.component.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Component = void 0;\n/**\n * Component container\n *\n * @public\n */\nclass Component extends HTMLElement {\n    constructor() {\n        super();\n        this.name = `bud-overlay`;\n        this.renderShadow();\n    }\n    get message() {\n        return this.getAttribute(`message`);\n    }\n    renderShadow() {\n        const container = document.createElement(`div`);\n        container.classList.add(`overlay`);\n        container.innerHTML = `\n      <style>\n        .overlay {\n          width: 100vw;\n          backdrop-filter: blur(10px);\n          display: flex;\n          height: 100vh;\n          border-top: 2px solid transparent;\n          overflow-x: hidden;\n          overflow-y: scroll;\n          position: absolute;\n          top: -1000px;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          opacity: 0;\n          transition: opacity 0.2s ease-in-out, border 0.4s ease-in-out;\n          justify-content: center;\n        }\n\n        .visible {\n          position: fixed;\n          top: 0;\n          z-index: 9998;\n          opacity: 1;\n          border-top: 5px solid red;\n          transition: opacity 0.2s ease-in-out, border 0.4s ease-in-out;\n          max-width: 100vw;\n        }\n\n        .messages {\n          background-color: white;\n          border-radius: 5px;\n          filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));\n          display: flex;\n          align-self: center;\n          width: 800px;\n          max-width: 90vw;\n          margin-left: auto;\n          margin-right: auto;\n          flex-direction: column;\n          flex-wrap: wrap;\n          align-items: center;\n          align-content: center;\n          padding: 2rem 2rem 0rem 2rem;\n        }\n\n        .visible .messages > div {\n          position: relative;\n          top: 0;\n          opacity: 1;\n          transition: all: 0.2s ease-in-out;\n        }\n\n        .messages > div {\n          position: relative;\n          top: 20px;\n          opacity: 0;\n          transition: all: 0.2s ease-in-out;\n          align-items: center;\n          align-content: center;\n          color: rgba(0, 0, 0, 0.87);\n          flex-direction: column;\n          font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n          padding: 0rem 2rem 2rem 2rem;\n          width: 100%;\n          max-width:95vw;\n        }\n\n        .messages > div > pre {\n          font-weight: 300;\n          font-size: 0.8rem;\n          overflow-x: scroll;\n        }\n\n        pre {\n          background: #303030;\n          color: #f1f1f1;\n          padding: 10px 16px;\n          border-radius: 2px;\n          border-top: 4px solid #dd0303;\n          -moz-box-shadow: inset 0 0 10px #000;\n          box-shadow: inset 0 0 10px #000;\n          counter-reset: line;\n        }\n\n        pre span {\n          display: block;\n          line-height: 1.5rem;\n        }\n\n        pre span:before {\n          counter-increment: line;\n          content: counter(line);\n          display: inline-block;\n          border-right: 1px solid #ddd;\n          padding: 0 .5em;\n          margin-right: .5em;\n          color: #888;\n          width: 30px;\n        }\n      </style>\n      <div class=\"messages\"></div>\n    `;\n        this.attachShadow({ mode: `open` }).appendChild(container);\n    }\n    static get observedAttributes() {\n        return [`message`];\n    }\n    attributeChangedCallback() {\n        var _a, _b, _c;\n        if (!this.documentBodyStyle)\n            this.documentBodyStyle = (_a = document.body) === null || _a === void 0 ? void 0 : _a.style;\n        if (this.getAttribute(`message`)) {\n            document.body.style.overflow = `hidden`;\n            this.shadowRoot.querySelector(`.overlay`).classList.add(`visible`);\n            this.shadowRoot.querySelector(`.messages`).innerHTML =\n                this.getAttribute(`message`);\n            return;\n        }\n        if (((_b = this.documentBodyStyle) === null || _b === void 0 ? void 0 : _b.overflow) && ((_c = document === null || document === void 0 ? void 0 : document.body) === null || _c === void 0 ? void 0 : _c.style)) {\n            document.body.style.overflow = this.documentBodyStyle.overflow;\n        }\n        this.shadowRoot.querySelector(`.overlay`).classList.remove(`visible`);\n    }\n    connectedCallback() {\n        var _a;\n        if ((_a = document.body) === null || _a === void 0 ? void 0 : _a.style)\n            this.documentBodyStyle = document.body.style;\n    }\n}\nexports.Component = Component;\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/components/overlay/overlay.component.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/components/overlay/overlay.controller.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/components/overlay/overlay.controller.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Controller = void 0;\nconst strip_ansi_1 = __importDefault(__webpack_require__(/*! strip-ansi */ \"./node_modules/@roots/bud-client/node_modules/strip-ansi/index.js\"));\n/**\n * Overlay controller\n * @public\n */\nclass Controller {\n    /**\n     * Class constructor\n     *\n     * @public\n     */\n    constructor() {\n        this.update = this.update.bind(this);\n        this.element = document.createElement(`bud-error`);\n    }\n    /**\n     * Formatted error message\n     * @public\n     */\n    get message() {\n        var _a;\n        return (_a = this.payload.errors) === null || _a === void 0 ? void 0 : _a.reduce((a, c) => {\n            var _a;\n            return `${a}\n        <div>\n          <pre>${(_a = (0, strip_ansi_1.default)(c === null || c === void 0 ? void 0 : c.message)) !== null && _a !== void 0 ? _a : ``}</pre>\n        </div>`;\n        }, ``);\n    }\n    /**\n     * Append `bud-error` element to the DOM\n     *\n     * @public\n     */\n    createError() {\n        var _a;\n        !document.body.querySelector(`bud-error`) &&\n            ((_a = document.body) === null || _a === void 0 ? void 0 : _a.appendChild(this.element));\n    }\n    /**\n     * Remove `bud-error` element from the DOM (if present)\n     *\n     * @public\n     */\n    removeError() {\n        var _a;\n        (_a = document.body.querySelector(`bud-error`)) === null || _a === void 0 ? void 0 : _a.remove();\n    }\n    /**\n     * Update DOM\n     *\n     * @public\n     */\n    update(payload) {\n        var _a, _b;\n        this.payload = payload;\n        this.element.setAttribute(`message`, (_a = this.message) !== null && _a !== void 0 ? _a : ``);\n        if (((_b = this.payload.errors) === null || _b === void 0 ? void 0 : _b.length) > 0) {\n            return this.createError();\n        }\n        this.removeError();\n    }\n}\nexports.Controller = Controller;\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/components/overlay/overlay.controller.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/hmr/events.js":
/*!**********************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/hmr/events.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\n/* eslint-disable no-console */\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Events = void 0;\n/**\n * HMR EventSource\n *\n * @public\n */\nclass Events extends EventSource {\n    /**\n     * Class constructor\n     *\n     * @remarks\n     * Singleton interface, so this is private.\n     */\n    constructor(options) {\n        super(options.path);\n        this.options = options;\n        /**\n         * Messages\n         */\n        this.messages = new Set();\n        /**\n         * Registered listeners\n         * @public\n         */\n        this.listeners = new Set();\n        /**\n         * EventSource `onopen` handler\n         * @public\n         */\n        this.onopen = function (ev) {\n            return __awaiter(this, void 0, void 0, function* () {\n                console.log(`[bud] connected`);\n            });\n        };\n        /**\n         * EventSource `onmessage` handler\n         * @public\n         */\n        this.onmessage = function (payload) {\n            var _a, _b, _c, _d;\n            return __awaiter(this, void 0, void 0, function* () {\n                // @ts-ignore\n                if (!payload)\n                    return;\n                try {\n                    this.payload = JSON.parse(payload.data);\n                    ((_a = this.payload) === null || _a === void 0 ? void 0 : _a.action) === `reload` &&\n                        this.options.reload &&\n                        window.location.reload();\n                    if ((_b = this.payload) === null || _b === void 0 ? void 0 : _b.hash) {\n                        if (this.messages.has((_c = this.payload) === null || _c === void 0 ? void 0 : _c.hash))\n                            return;\n                        this.currentHash = (_d = this.payload) === null || _d === void 0 ? void 0 : _d.hash;\n                        this.messages.add(this.currentHash);\n                    }\n                    if (this.messages.size <= 1)\n                        return;\n                    yield Promise.all([...this.listeners].map((listener) => __awaiter(this, void 0, void 0, function* () { return yield listener(payload); })));\n                }\n                catch (error) { }\n            });\n        };\n        this.onopen = this.onopen.bind(this);\n        this.onmessage = this.onmessage.bind(this);\n        this.addMessageListener = this.addMessageListener.bind(this);\n    }\n    /**\n     * Singleton constructor\n     * @public\n     */\n    static make(options) {\n        if (!window.bud)\n            window.bud = { hmr: {} };\n        if (!window.bud.hmr[options.path]) {\n            window.bud.hmr[options.path] = new Events(options);\n        }\n        return window.bud.hmr[options.path];\n    }\n    /**\n     * EventSource `addMessageListener` handler\n     * @public\n     */\n    addMessageListener(callback) {\n        this.listeners.add(callback);\n        return this;\n    }\n}\nexports.Events = Events;\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/hmr/events.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/index.js?name=sage&indicator=true&overlay=true&reload=true":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/index.js?name=sage&indicator=true&overlay=true&reload=true ***!
  \*******************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var __resourceQuery = \"?name=sage&indicator=true&overlay=true&reload=true\";\n\n/* eslint-disable no-console */\n/* global __resourceQuery */\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./interface */ \"./node_modules/@roots/bud-client/lib/interface.js\");\nconst components = __importStar(__webpack_require__(/*! ./components/index.js */ \"./node_modules/@roots/bud-client/lib/components/index.js\"));\nconst events_js_1 = __webpack_require__(/*! ./hmr/events.js */ \"./node_modules/@roots/bud-client/lib/hmr/events.js\");\nconst clientOptions = __importStar(__webpack_require__(/*! ./options */ \"./node_modules/@roots/bud-client/lib/options.js\"));\n((queryString) => __awaiter(void 0, void 0, void 0, function* () {\n    /**\n     * Webpack hot interface\n     */\n    const webpackHot = module.hot;\n    /* Set client options from URL params */\n    const options = clientOptions.setFromParameters(queryString);\n    /**\n     * Returns true if environment supports HMR\n     */\n    if (typeof (window === null || window === void 0 ? void 0 : window.EventSource) === `undefined`) {\n        console.error(`[bud] hot module reload requires EventSource to work. https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools`);\n        return false;\n    }\n    /**\n     * Webpack HMR check handler\n     */\n    const check = () => __awaiter(void 0, void 0, void 0, function* () {\n        return webpackHot.status() === `idle` &&\n            (yield webpackHot.check(false).then((modules) => __awaiter(void 0, void 0, void 0, function* () {\n                modules && (yield update());\n            })));\n    });\n    /**\n     * Webpack HMR unaccepted module handler\n     */\n    const onUnacceptedOrDeclined = (info) => {\n        console.warn(`[${options.name}] ${info.type}`, info);\n        options.reload && window.location.reload();\n    };\n    /**\n     * Webpack HMR error handler\n     */\n    const onErrored = error => {\n        var _a, _b;\n        const message = `[${(_a = error === null || error === void 0 ? void 0 : error.moduleId) !== null && _a !== void 0 ? _a : options.name}] ${(_b = error === null || error === void 0 ? void 0 : error.error) !== null && _b !== void 0 ? _b : `error`}`;\n        console.error(message);\n        components.controllers.map(controller => controller.update({\n            type: `accept-errored`,\n            action: `built`,\n            errors: [{ message }],\n        }));\n    };\n    /**\n     * Webpack HMR update handler\n     */\n    const update = () => __awaiter(void 0, void 0, void 0, function* () {\n        webpackHot.status() === `ready` &&\n            (yield webpackHot.apply({\n                autoApply: false,\n                ignoreUnaccepted: true,\n                ignoreDeclined: true,\n                ignoreErrored: true,\n                onErrored,\n                onUnaccepted: onUnacceptedOrDeclined,\n                onDeclined: onUnacceptedOrDeclined,\n            }));\n    });\n    /* Instantiate eventSource */\n    const eventSource = events_js_1.Events.make(options);\n    /* Instantiate indicator, overlay */\n    yield components.make(options);\n    /* Instantiate HMR event source and register client listeners */\n    eventSource.addMessageListener((event) => __awaiter(void 0, void 0, void 0, function* () {\n        try {\n            const data = JSON.parse(event.data);\n            if (!data)\n                return;\n            if (data.action === `reload`)\n                window.location.reload();\n            components.controllers.map(controller => controller.update(data));\n            if (__webpack_require__.h() !== eventSource.currentHash)\n                yield check();\n        }\n        catch (error) { }\n    }));\n}))(__resourceQuery);\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/index.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/intercept.js":
/*!*********************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/intercept.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst intercept = (...args) => {\n    args.every(arg => typeof arg === `string`) &&\n        setInterval(() => [\n            [document.getElementsByTagName(`a`), `href`],\n            [document.getElementsByTagName(`link`), `href`],\n        ]\n            .map(([elements, attribute]) => [Array.from(elements), attribute])\n            .forEach(([elements, attribute]) => elements\n            .filter(el => el.hasAttribute(attribute))\n            .filter(el => !el.hasAttribute(`__bud_processed`))\n            .filter(el => el.getAttribute(attribute).startsWith(args[0]))\n            .map(el => {\n            const value = el.getAttribute(attribute).replace(...args);\n            el.setAttribute(attribute, value);\n            el.toggleAttribute(`__bud_processed`);\n        })), 1000);\n};\nexports[\"default\"] = intercept;\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/intercept.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/interface.js":
/*!*********************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/interface.js ***!
  \*********************************************************/
/***/ (function() {

eval("var __resourceQuery;\nvar __webpack_hash__;\nvar bud;\nvar module;\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/interface.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/options.js":
/*!*******************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/options.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.setFromParameters = exports.get = exports.data = void 0;\n/**\n * Client options\n * @public\n */\nlet data = {\n    [`default`]: {\n        timeout: 20 * 1000,\n        reload: true,\n        name: `default`,\n        debug: true,\n        log: true,\n        path: `/__bud/hmr`,\n        indicator: true,\n        overlay: true,\n    },\n};\nexports.data = data;\n/**\n * Get client option\n * @public\n */\nconst get = (name, key) => key ? data[name][key] : data[name];\nexports.get = get;\n/**\n * Set client data based on URL parameters\n */\nconst setFromParameters = (query) => {\n    let parsedParams = {};\n    new window.URLSearchParams(query).forEach((value, key) => {\n        parsedParams[key] =\n            value === `true` ? true : value === `false` ? false : value;\n    });\n    data[parsedParams.name] = Object.assign(Object.assign({}, data.default), parsedParams);\n    return data[parsedParams.name];\n};\nexports.setFromParameters = setFromParameters;\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/options.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/lib/proxy-click-interceptor.js?search=http%3A%2F%2Fsorrento.local%2F&replace=%2F":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@roots/bud-client/lib/proxy-click-interceptor.js?search=http%3A%2F%2Fsorrento.local%2F&replace=%2F ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("var __resourceQuery = \"?search=http%3A%2F%2Fsorrento.local%2F&replace=%2F\";\n\n/* eslint-disable no-console */\n/* global __resourceQuery */\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst intercept_1 = __importDefault(__webpack_require__(/*! ./intercept */ \"./node_modules/@roots/bud-client/lib/intercept.js\"));\nwindow.requestAnimationFrame(function ready() {\n    return __awaiter(this, void 0, void 0, function* () {\n        if (false)\n            {}\n        const params = new URLSearchParams(__resourceQuery);\n        if (!params || !params.has(`search`) || !params.has(`replace`))\n            return;\n        const search = decodeURI(params.get(`search`));\n        const replace = decodeURI(params.get(`replace`));\n        return document.body\n            ? (0, intercept_1.default)(search, replace)\n            : window.requestAnimationFrame(ready);\n    });\n});\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/lib/proxy-click-interceptor.js?");

/***/ }),

/***/ 537:
/*!**********************************!*\
  !*** ./resources/scripts/app.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _roots_sage_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @roots/sage/client */ \"./node_modules/@roots/sage/lib/client/index.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _import$meta$webpackH;\n\n\n/**\n * app.main\n */\n\nconst main = async err => {\n  if (err) {\n    // handle hmr errors\n    console.error(err);\n  } // application code\n\n};\n/**\n * Initialize\n *\n * @see https://webpack.js.org/api/hot-module-replacement\n */\n\n\n(0,_roots_sage_client__WEBPACK_IMPORTED_MODULE_0__.domReady)(main);\n(_import$meta$webpackH = module.hot) === null || _import$meta$webpackH === void 0 ? void 0 : _import$meta$webpackH.accept(main);\n\nvar $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nvar $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tvar errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tvar testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://sage/./resources/scripts/app.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/global-this.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/es/global-this.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es.global-this */ \"./node_modules/core-js-pure/modules/es.global-this.js\");\n\nmodule.exports = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/es/global-this.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/global-this.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/features/global-this.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// TODO: remove from `core-js@4`\n__webpack_require__(/*! ../modules/esnext.global-this */ \"./node_modules/core-js-pure/modules/esnext.global-this.js\");\n\nvar parent = __webpack_require__(/*! ../stable/global-this */ \"./node_modules/core-js-pure/stable/global-this.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/features/global-this.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/a-callable.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-callable.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar tryToString = __webpack_require__(/*! ../internals/try-to-string */ \"./node_modules/core-js-pure/internals/try-to-string.js\");\n\nvar TypeError = global.TypeError;\n\n// `Assert: IsCallable(argument) is true`\nmodule.exports = function (argument) {\n  if (isCallable(argument)) return argument;\n  throw TypeError(tryToString(argument) + ' is not a function');\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/a-callable.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/an-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/an-object.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nvar String = global.String;\nvar TypeError = global.TypeError;\n\n// `Assert: Type(argument) is Object`\nmodule.exports = function (argument) {\n  if (isObject(argument)) return argument;\n  throw TypeError(String(argument) + ' is not an object');\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/classof-raw.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/classof-raw.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\n\nvar toString = uncurryThis({}.toString);\nvar stringSlice = uncurryThis(''.slice);\n\nmodule.exports = function (it) {\n  return stringSlice(toString(it), 8, -1);\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-non-enumerable-property.js ***!
  \*******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-property-descriptor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-property-descriptor.js ***!
  \***************************************************************************/
/***/ (function(module) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/descriptors.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/descriptors.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\n// Detect IE8's incomplete defineProperty implementation\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;\n});\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/document-create-element.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/document-create-element.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-user-agent.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-user-agent.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('navigator', 'userAgent') || '';\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/engine-user-agent.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-v8-version.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-v8-version.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js-pure/internals/engine-user-agent.js\");\n\nvar process = global.process;\nvar Deno = global.Deno;\nvar versions = process && process.versions || Deno && Deno.version;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.');\n  // in old Chrome, versions of V8 isn't V8 = Chrome / 10\n  // but their correct versions are not interesting for us\n  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);\n}\n\n// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`\n// so check `userAgent` even if `.v8` exists, but 0\nif (!version && userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = +match[1];\n  }\n}\n\nmodule.exports = version;\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/engine-v8-version.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/export.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/export.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar apply = __webpack_require__(/*! ../internals/function-apply */ \"./node_modules/core-js-pure/internals/function-apply.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\").f);\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js-pure/internals/is-forced.js\");\nvar path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js-pure/internals/function-bind-context.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\n\nvar wrapConstructor = function (NativeConstructor) {\n  var Wrapper = function (a, b, c) {\n    if (this instanceof Wrapper) {\n      switch (arguments.length) {\n        case 0: return new NativeConstructor();\n        case 1: return new NativeConstructor(a);\n        case 2: return new NativeConstructor(a, b);\n      } return new NativeConstructor(a, b, c);\n    } return apply(NativeConstructor, this, arguments);\n  };\n  Wrapper.prototype = NativeConstructor.prototype;\n  return Wrapper;\n};\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n  options.name        - the .name of the function if it does not match the key\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var PROTO = options.proto;\n\n  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;\n\n  var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];\n  var targetPrototype = target.prototype;\n\n  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;\n  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;\n\n  for (key in source) {\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contains in native\n    USE_NATIVE = !FORCED && nativeSource && hasOwn(nativeSource, key);\n\n    targetProperty = target[key];\n\n    if (USE_NATIVE) if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(nativeSource, key);\n      nativeProperty = descriptor && descriptor.value;\n    } else nativeProperty = nativeSource[key];\n\n    // export native or implementation\n    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];\n\n    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;\n\n    // bind timers to global for call from export context\n    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);\n    // wrap global constructors for prevent changs in this version\n    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);\n    // make static versions for prototype methods\n    else if (PROTO && isCallable(sourceProperty)) resultProperty = uncurryThis(sourceProperty);\n    // default case\n    else resultProperty = sourceProperty;\n\n    // add a flag to not completely full polyfills\n    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(resultProperty, 'sham', true);\n    }\n\n    createNonEnumerableProperty(target, key, resultProperty);\n\n    if (PROTO) {\n      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';\n      if (!hasOwn(path, VIRTUAL_PROTOTYPE)) {\n        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});\n      }\n      // export virtual prototype methods\n      createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty);\n      // export real prototype methods\n      if (options.real && targetPrototype && !targetPrototype[key]) {\n        createNonEnumerableProperty(targetPrototype, key, sourceProperty);\n      }\n    }\n  }\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/export.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/fails.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/fails.js ***!
  \******************************************************/
/***/ (function(module) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/fails.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-apply.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-apply.js ***!
  \***************************************************************/
/***/ (function(module) {

eval("var FunctionPrototype = Function.prototype;\nvar apply = FunctionPrototype.apply;\nvar bind = FunctionPrototype.bind;\nvar call = FunctionPrototype.call;\n\n// eslint-disable-next-line es/no-reflect -- safe\nmodule.exports = typeof Reflect == 'object' && Reflect.apply || (bind ? call.bind(apply) : function () {\n  return call.apply(apply, arguments);\n});\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/function-apply.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-bind-context.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-bind-context.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js-pure/internals/a-callable.js\");\n\nvar bind = uncurryThis(uncurryThis.bind);\n\n// optional / simple context binding\nmodule.exports = function (fn, that) {\n  aCallable(fn);\n  return that === undefined ? fn : bind ? bind(fn, that) : function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/function-bind-context.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-call.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-call.js ***!
  \**************************************************************/
/***/ (function(module) {

eval("var call = Function.prototype.call;\n\nmodule.exports = call.bind ? call.bind(call) : function () {\n  return call.apply(call, arguments);\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/function-call.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-uncurry-this.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-uncurry-this.js ***!
  \**********************************************************************/
/***/ (function(module) {

eval("var FunctionPrototype = Function.prototype;\nvar bind = FunctionPrototype.bind;\nvar call = FunctionPrototype.call;\nvar callBind = bind && bind.bind(call);\n\nmodule.exports = bind ? function (fn) {\n  return fn && callBind(call, fn);\n} : function (fn) {\n  return fn && function () {\n    return call.apply(fn, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/function-uncurry-this.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-built-in.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-built-in.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\n\nvar aFunction = function (variable) {\n  return isCallable(variable) ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/get-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-method.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-method.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var aCallable = __webpack_require__(/*! ../internals/a-callable */ \"./node_modules/core-js-pure/internals/a-callable.js\");\n\n// `GetMethod` abstract operation\n// https://tc39.es/ecma262/#sec-getmethod\nmodule.exports = function (V, P) {\n  var func = V[P];\n  return func == null ? undefined : aCallable(func);\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/get-method.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/global.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/global.js ***!
  \*******************************************************/
/***/ (function(module) {

eval("var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line es/no-global-this -- safe\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  // eslint-disable-next-line no-restricted-globals -- safe\n  check(typeof self == 'object' && self) ||\n  check(typeof global == 'object' && global) ||\n  // eslint-disable-next-line no-new-func -- fallback\n  (function () { return this; })() || Function('return this')();\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/global.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/has-own-property.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/has-own-property.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\n\nvar hasOwnProperty = uncurryThis({}.hasOwnProperty);\n\n// `HasOwnProperty` abstract operation\n// https://tc39.es/ecma262/#sec-hasownproperty\nmodule.exports = Object.hasOwn || function hasOwn(it, key) {\n  return hasOwnProperty(toObject(it), key);\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/has-own-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/ie8-dom-define.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/ie8-dom-define.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js-pure/internals/document-create-element.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/indexed-object.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/indexed-object.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\n\nvar Object = global.Object;\nvar split = uncurryThis(''.split);\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-callable.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-callable.js ***!
  \************************************************************/
/***/ (function(module) {

eval("// `IsCallable` abstract operation\n// https://tc39.es/ecma262/#sec-iscallable\nmodule.exports = function (argument) {\n  return typeof argument == 'function';\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/is-callable.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-forced.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-forced.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : isCallable(detection) ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-object.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\n\nmodule.exports = function (it) {\n  return typeof it == 'object' ? it !== null : isCallable(it);\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-pure.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-pure.js ***!
  \********************************************************/
/***/ (function(module) {

eval("module.exports = true;\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-symbol.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-symbol.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ \"./node_modules/core-js-pure/internals/object-is-prototype-of.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js-pure/internals/use-symbol-as-uid.js\");\n\nvar Object = global.Object;\n\nmodule.exports = USE_SYMBOL_AS_UID ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  var $Symbol = getBuiltIn('Symbol');\n  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/is-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/native-symbol.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/native-symbol.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* eslint-disable es/no-symbol -- required for testing */\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js-pure/internals/engine-v8-version.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\n// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  var symbol = Symbol();\n  // Chrome 38 Symbol has incorrect toString conversion\n  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances\n  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||\n    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances\n    !Symbol.sham && V8_VERSION && V8_VERSION < 41;\n});\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/native-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-define-property.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-define-property.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js-pure/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js-pure/internals/to-property-key.js\");\n\nvar TypeError = global.TypeError;\n// eslint-disable-next-line es/no-object-defineproperty -- safe\nvar $defineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.es/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPropertyKey(P);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return $defineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js-pure/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ \"./node_modules/core-js-pure/internals/to-property-key.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js-pure/internals/ie8-dom-define.js\");\n\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPropertyKey(P);\n  if (IE8_DOM_DEFINE) try {\n    return $getOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-is-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-is-prototype-of.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\n\nmodule.exports = uncurryThis({}.isPrototypeOf);\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/object-is-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-property-is-enumerable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-property-is-enumerable.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\nvar $propertyIsEnumerable = {}.propertyIsEnumerable;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : $propertyIsEnumerable;\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/ordinary-to-primitive.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/ordinary-to-primitive.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar isCallable = __webpack_require__(/*! ../internals/is-callable */ \"./node_modules/core-js-pure/internals/is-callable.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nvar TypeError = global.TypeError;\n\n// `OrdinaryToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-ordinarytoprimitive\nmodule.exports = function (input, pref) {\n  var fn, val;\n  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;\n  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;\n  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/ordinary-to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/path.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/path.js ***!
  \*****************************************************/
/***/ (function(module) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/path.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/require-object-coercible.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/require-object-coercible.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\nvar TypeError = global.TypeError;\n\n// `RequireObjectCoercible` abstract operation\n// https://tc39.es/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/set-global.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-global.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\n// eslint-disable-next-line es/no-object-defineproperty -- safe\nvar defineProperty = Object.defineProperty;\n\nmodule.exports = function (key, value) {\n  try {\n    defineProperty(global, key, { value: value, configurable: true, writable: true });\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/set-global.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared-store.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared-store.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js-pure/internals/set-global.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\nmodule.exports = store;\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/shared-store.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js-pure/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.19.3',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/shared.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-indexed-object.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-indexed-object.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js-pure/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-object.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\n\nvar Object = global.Object;\n\n// `ToObject` abstract operation\n// https://tc39.es/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/to-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-primitive.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-primitive.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar call = __webpack_require__(/*! ../internals/function-call */ \"./node_modules/core-js-pure/internals/function-call.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js-pure/internals/is-symbol.js\");\nvar getMethod = __webpack_require__(/*! ../internals/get-method */ \"./node_modules/core-js-pure/internals/get-method.js\");\nvar ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ \"./node_modules/core-js-pure/internals/ordinary-to-primitive.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TypeError = global.TypeError;\nvar TO_PRIMITIVE = wellKnownSymbol('toPrimitive');\n\n// `ToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-toprimitive\nmodule.exports = function (input, pref) {\n  if (!isObject(input) || isSymbol(input)) return input;\n  var exoticToPrim = getMethod(input, TO_PRIMITIVE);\n  var result;\n  if (exoticToPrim) {\n    if (pref === undefined) pref = 'default';\n    result = call(exoticToPrim, input, pref);\n    if (!isObject(result) || isSymbol(result)) return result;\n    throw TypeError(\"Can't convert object to primitive value\");\n  }\n  if (pref === undefined) pref = 'number';\n  return ordinaryToPrimitive(input, pref);\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-property-key.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-property-key.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js-pure/internals/to-primitive.js\");\nvar isSymbol = __webpack_require__(/*! ../internals/is-symbol */ \"./node_modules/core-js-pure/internals/is-symbol.js\");\n\n// `ToPropertyKey` abstract operation\n// https://tc39.es/ecma262/#sec-topropertykey\nmodule.exports = function (argument) {\n  var key = toPrimitive(argument, 'string');\n  return isSymbol(key) ? key : key + '';\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/to-property-key.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/try-to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/try-to-string.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\nvar String = global.String;\n\nmodule.exports = function (argument) {\n  try {\n    return String(argument);\n  } catch (error) {\n    return 'Object';\n  }\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/try-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/uid.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/uid.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ \"./node_modules/core-js-pure/internals/function-uncurry-this.js\");\n\nvar id = 0;\nvar postfix = Math.random();\nvar toString = uncurryThis(1.0.toString);\n\nmodule.exports = function (key) {\n  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/uid.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/use-symbol-as-uid.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/use-symbol-as-uid.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* eslint-disable es/no-symbol -- required for testing */\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js-pure/internals/native-symbol.js\");\n\nmodule.exports = NATIVE_SYMBOL\n  && !Symbol.sham\n  && typeof Symbol.iterator == 'symbol';\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/use-symbol-as-uid.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/well-known-symbol.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/well-known-symbol.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js-pure/internals/shared.js\");\nvar hasOwn = __webpack_require__(/*! ../internals/has-own-property */ \"./node_modules/core-js-pure/internals/has-own-property.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js-pure/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js-pure/internals/native-symbol.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js-pure/internals/use-symbol-as-uid.js\");\n\nvar WellKnownSymbolsStore = shared('wks');\nvar Symbol = global.Symbol;\nvar symbolFor = Symbol && Symbol['for'];\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {\n    var description = 'Symbol.' + name;\n    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {\n      WellKnownSymbolsStore[name] = Symbol[name];\n    } else if (USE_SYMBOL_AS_UID && symbolFor) {\n      WellKnownSymbolsStore[name] = symbolFor(description);\n    } else {\n      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);\n    }\n  } return WellKnownSymbolsStore[name];\n};\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/internals/well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.global-this.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.global-this.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\n// `globalThis` object\n// https://tc39.es/ecma262/#sec-globalthis\n$({ global: true }, {\n  globalThis: global\n});\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/modules/es.global-this.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.global-this.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.global-this.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// TODO: Remove from `core-js@4`\n__webpack_require__(/*! ../modules/es.global-this */ \"./node_modules/core-js-pure/modules/es.global-this.js\");\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/modules/esnext.global-this.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/global-this.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/global-this.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../es/global-this */ \"./node_modules/core-js-pure/es/global-this.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack://sage/./node_modules/core-js-pure/stable/global-this.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??css!./node_modules/postcss-loader/dist/cjs.js??postcss!./resources/styles/app.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??css!./node_modules/postcss-loader/dist/cjs.js??postcss!./resources/styles/app.css ***!
  \********************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ \"./node_modules/css-loader/dist/runtime/sourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n! tailwindcss v3.1.8 | MIT License | https://tailwindcss.com\\n*//*\\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\\n*/\\n\\n*,\\n::before,\\n::after {\\n  box-sizing: border-box; /* 1 */\\n  border-width: 0; /* 2 */\\n  border-style: solid; /* 2 */\\n  border-color: #e5e7eb; /* 2 */\\n}\\n\\n::before,\\n::after {\\n  --tw-content: '';\\n}\\n\\n/*\\n1. Use a consistent sensible line-height in all browsers.\\n2. Prevent adjustments of font size after orientation changes in iOS.\\n3. Use a more readable tab size.\\n4. Use the user's configured `sans` font-family by default.\\n*/\\n\\nhtml {\\n  line-height: 1.5; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n  -moz-tab-size: 4; /* 3 */\\n  tab-size: 4; /* 3 */\\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, \\\"Noto Sans\\\", sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\", \\\"Noto Color Emoji\\\"; /* 4 */\\n}\\n\\n/*\\n1. Remove the margin in all browsers.\\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\\n*/\\n\\nbody {\\n  margin: 0; /* 1 */\\n  line-height: inherit; /* 2 */\\n}\\n\\n/*\\n1. Add the correct height in Firefox.\\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\\n3. Ensure horizontal rules are visible by default.\\n*/\\n\\nhr {\\n  height: 0; /* 1 */\\n  color: inherit; /* 2 */\\n  border-top-width: 1px; /* 3 */\\n}\\n\\n/*\\nAdd the correct text decoration in Chrome, Edge, and Safari.\\n*/\\n\\nabbr:where([title]) {\\n  text-decoration: underline;\\n  -webkit-text-decoration: underline dotted currentColor;\\n          text-decoration: underline dotted currentColor;\\n}\\n\\n/*\\nRemove the default font size and weight for headings.\\n*/\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  font-size: inherit;\\n  font-weight: inherit;\\n}\\n\\n/*\\nReset links to optimize for opt-in styling instead of opt-out.\\n*/\\n\\na {\\n  color: inherit;\\n  text-decoration: inherit;\\n}\\n\\n/*\\nAdd the correct font weight in Edge and Safari.\\n*/\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/*\\n1. Use the user's configured `mono` font family by default.\\n2. Correct the odd `em` font sizing in all browsers.\\n*/\\n\\ncode,\\nkbd,\\nsamp,\\npre {\\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \\\"Liberation Mono\\\", \\\"Courier New\\\", monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/*\\nAdd the correct font size in all browsers.\\n*/\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/*\\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\\n*/\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/*\\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\\n3. Remove gaps between table borders by default.\\n*/\\n\\ntable {\\n  text-indent: 0; /* 1 */\\n  border-color: inherit; /* 2 */\\n  border-collapse: collapse; /* 3 */\\n}\\n\\n/*\\n1. Change the font styles in all browsers.\\n2. Remove the margin in Firefox and Safari.\\n3. Remove default padding in all browsers.\\n*/\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  font-weight: inherit; /* 1 */\\n  line-height: inherit; /* 1 */\\n  color: inherit; /* 1 */\\n  margin: 0; /* 2 */\\n  padding: 0; /* 3 */\\n}\\n\\n/*\\nRemove the inheritance of text transform in Edge and Firefox.\\n*/\\n\\nbutton,\\nselect {\\n  text-transform: none;\\n}\\n\\n/*\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Remove default button styles.\\n*/\\n\\nbutton,\\n[type='button'],\\n[type='reset'],\\n[type='submit'] {\\n  -webkit-appearance: button; /* 1 */\\n  background-color: transparent; /* 2 */\\n  background-image: none; /* 2 */\\n}\\n\\n/*\\nUse the modern Firefox focus style for all focusable elements.\\n*/\\n\\n:-moz-focusring {\\n  outline: auto;\\n}\\n\\n/*\\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\\n*/\\n\\n:-moz-ui-invalid {\\n  box-shadow: none;\\n}\\n\\n/*\\nAdd the correct vertical alignment in Chrome and Firefox.\\n*/\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/*\\nCorrect the cursor style of increment and decrement buttons in Safari.\\n*/\\n\\n::-webkit-inner-spin-button,\\n::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/*\\n1. Correct the odd appearance in Chrome and Safari.\\n2. Correct the outline style in Safari.\\n*/\\n\\n[type='search'] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n\\n/*\\nRemove the inner padding in Chrome and Safari on macOS.\\n*/\\n\\n::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/*\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Change font properties to `inherit` in Safari.\\n*/\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/*\\nAdd the correct display in Chrome and Safari.\\n*/\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/*\\nRemoves the default spacing and border for appropriate elements.\\n*/\\n\\nblockquote,\\ndl,\\ndd,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\nhr,\\nfigure,\\np,\\npre {\\n  margin: 0;\\n}\\n\\nfieldset {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nlegend {\\n  padding: 0;\\n}\\n\\nol,\\nul,\\nmenu {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n/*\\nPrevent resizing textareas horizontally by default.\\n*/\\n\\ntextarea {\\n  resize: vertical;\\n}\\n\\n/*\\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\\n2. Set the default placeholder color to the user's configured gray 400 color.\\n*/\\n\\ninput::-moz-placeholder, textarea::-moz-placeholder {\\n  opacity: 1; /* 1 */\\n  color: #9ca3af; /* 2 */\\n}\\n\\ninput::placeholder,\\ntextarea::placeholder {\\n  opacity: 1; /* 1 */\\n  color: #9ca3af; /* 2 */\\n}\\n\\n/*\\nSet the default cursor for buttons.\\n*/\\n\\nbutton,\\n[role=\\\"button\\\"] {\\n  cursor: pointer;\\n}\\n\\n/*\\nMake sure disabled buttons don't get the pointer cursor.\\n*/\\n:disabled {\\n  cursor: default;\\n}\\n\\n/*\\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\\n   This can trigger a poorly considered lint error in some tools but is included by design.\\n*/\\n\\nimg,\\nsvg,\\nvideo,\\ncanvas,\\naudio,\\niframe,\\nembed,\\nobject {\\n  display: block; /* 1 */\\n  vertical-align: middle; /* 2 */\\n}\\n\\n/*\\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\\n*/\\n\\nimg,\\nvideo {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n*, ::before, ::after {\\n  --tw-border-spacing-x: 0;\\n  --tw-border-spacing-y: 0;\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x:  ;\\n  --tw-pan-y:  ;\\n  --tw-pinch-zoom:  ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal:  ;\\n  --tw-slashed-zero:  ;\\n  --tw-numeric-figure:  ;\\n  --tw-numeric-spacing:  ;\\n  --tw-numeric-fraction:  ;\\n  --tw-ring-inset:  ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\\n  --tw-blur:  ;\\n  --tw-brightness:  ;\\n  --tw-contrast:  ;\\n  --tw-grayscale:  ;\\n  --tw-hue-rotate:  ;\\n  --tw-invert:  ;\\n  --tw-saturate:  ;\\n  --tw-sepia:  ;\\n  --tw-drop-shadow:  ;\\n  --tw-backdrop-blur:  ;\\n  --tw-backdrop-brightness:  ;\\n  --tw-backdrop-contrast:  ;\\n  --tw-backdrop-grayscale:  ;\\n  --tw-backdrop-hue-rotate:  ;\\n  --tw-backdrop-invert:  ;\\n  --tw-backdrop-opacity:  ;\\n  --tw-backdrop-saturate:  ;\\n  --tw-backdrop-sepia:  ;\\n}\\n\\n::-webkit-backdrop {\\n  --tw-border-spacing-x: 0;\\n  --tw-border-spacing-y: 0;\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x:  ;\\n  --tw-pan-y:  ;\\n  --tw-pinch-zoom:  ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal:  ;\\n  --tw-slashed-zero:  ;\\n  --tw-numeric-figure:  ;\\n  --tw-numeric-spacing:  ;\\n  --tw-numeric-fraction:  ;\\n  --tw-ring-inset:  ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\\n  --tw-blur:  ;\\n  --tw-brightness:  ;\\n  --tw-contrast:  ;\\n  --tw-grayscale:  ;\\n  --tw-hue-rotate:  ;\\n  --tw-invert:  ;\\n  --tw-saturate:  ;\\n  --tw-sepia:  ;\\n  --tw-drop-shadow:  ;\\n  --tw-backdrop-blur:  ;\\n  --tw-backdrop-brightness:  ;\\n  --tw-backdrop-contrast:  ;\\n  --tw-backdrop-grayscale:  ;\\n  --tw-backdrop-hue-rotate:  ;\\n  --tw-backdrop-invert:  ;\\n  --tw-backdrop-opacity:  ;\\n  --tw-backdrop-saturate:  ;\\n  --tw-backdrop-sepia:  ;\\n}\\n\\n::backdrop {\\n  --tw-border-spacing-x: 0;\\n  --tw-border-spacing-y: 0;\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x:  ;\\n  --tw-pan-y:  ;\\n  --tw-pinch-zoom:  ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal:  ;\\n  --tw-slashed-zero:  ;\\n  --tw-numeric-figure:  ;\\n  --tw-numeric-spacing:  ;\\n  --tw-numeric-fraction:  ;\\n  --tw-ring-inset:  ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow: 0 0 rgba(0,0,0,0);\\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\\n  --tw-blur:  ;\\n  --tw-brightness:  ;\\n  --tw-contrast:  ;\\n  --tw-grayscale:  ;\\n  --tw-hue-rotate:  ;\\n  --tw-invert:  ;\\n  --tw-saturate:  ;\\n  --tw-sepia:  ;\\n  --tw-drop-shadow:  ;\\n  --tw-backdrop-blur:  ;\\n  --tw-backdrop-brightness:  ;\\n  --tw-backdrop-contrast:  ;\\n  --tw-backdrop-grayscale:  ;\\n  --tw-backdrop-hue-rotate:  ;\\n  --tw-backdrop-invert:  ;\\n  --tw-backdrop-opacity:  ;\\n  --tw-backdrop-saturate:  ;\\n  --tw-backdrop-sepia:  ;\\n}\\n.container {\\n  width: 100%;\\n}\\n@media (min-width: 640px) {\\n\\n  .container {\\n    max-width: 640px;\\n  }\\n}\\n@media (min-width: 768px) {\\n\\n  .container {\\n    max-width: 768px;\\n  }\\n}\\n@media (min-width: 1024px) {\\n\\n  .container {\\n    max-width: 1024px;\\n  }\\n}\\n@media (min-width: 1280px) {\\n\\n  .container {\\n    max-width: 1280px;\\n  }\\n}\\n@media (min-width: 1536px) {\\n\\n  .container {\\n    max-width: 1536px;\\n  }\\n}\\n.sr-only {\\n  position: absolute;\\n  width: 1px;\\n  height: 1px;\\n  padding: 0;\\n  margin: -1px;\\n  overflow: hidden;\\n  clip: rect(0, 0, 0, 0);\\n  white-space: nowrap;\\n  border-width: 0;\\n}\\n.static {\\n  position: static;\\n}\\n.block {\\n  display: block;\\n}\\n.contents {\\n  display: contents;\\n}\\n.bg-indigo-400 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(129, 140, 248, var(--tw-bg-opacity));\\n}\\n.bg-green-400 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(74, 222, 128, var(--tw-bg-opacity));\\n}\\n.bg-yellow-400 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(250, 204, 21, var(--tw-bg-opacity));\\n}\\n.bg-red-400 {\\n  --tw-bg-opacity: 1;\\n  background-color: rgba(248, 113, 113, var(--tw-bg-opacity));\\n}\\n.text-indigo-50 {\\n  --tw-text-opacity: 1;\\n  color: rgba(238, 242, 255, var(--tw-text-opacity));\\n}\\n.text-green-50 {\\n  --tw-text-opacity: 1;\\n  color: rgba(240, 253, 244, var(--tw-text-opacity));\\n}\\n.text-yellow-50 {\\n  --tw-text-opacity: 1;\\n  color: rgba(254, 252, 232, var(--tw-text-opacity));\\n}\\n.text-red-50 {\\n  --tw-text-opacity: 1;\\n  color: rgba(254, 242, 242, var(--tw-text-opacity));\\n}\\n.outline {\\n  outline-style: solid;\\n}\\n.filter {\\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\\n}\\n.focus\\\\:not-sr-only:focus {\\n  position: static;\\n  width: auto;\\n  height: auto;\\n  padding: 0;\\n  margin: 0;\\n  overflow: visible;\\n  clip: auto;\\n  white-space: normal;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://./node_modules/tailwindcss/base.css\",\"webpack://./node_modules/tailwindcss/components.css\",\"webpack://./node_modules/tailwindcss/utilities.css\",\"webpack://./resources/styles/app.css\",\"<no source>\"],\"names\":[],\"mappings\":\"AAAA;;CAAc,CAAd;;;CAAc;;AAAd;;;EAAA,sBAAc,EAAd,MAAc;EAAd,eAAc,EAAd,MAAc;EAAd,mBAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;AAAA;;AAAd;;EAAA,gBAAc;AAAA;;AAAd;;;;;CAAc;;AAAd;EAAA,gBAAc,EAAd,MAAc;EAAd,8BAAc,EAAd,MAAc;EAAd,gBAAc,EAAd,MAAc;EAAd,WAAc,EAAd,MAAc;EAAd,wRAAc,EAAd,MAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,SAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;AAAA;;AAAd;;;;CAAc;;AAAd;EAAA,SAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,0BAAc;EAAd,sDAAc;UAAd,8CAAc;AAAA;;AAAd;;CAAc;;AAAd;;;;;;EAAA,kBAAc;EAAd,oBAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,cAAc;EAAd,wBAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,mBAAc;AAAA;;AAAd;;;CAAc;;AAAd;;;;EAAA,+GAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,cAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,cAAc;EAAd,cAAc;EAAd,kBAAc;EAAd,wBAAc;AAAA;;AAAd;EAAA,eAAc;AAAA;;AAAd;EAAA,WAAc;AAAA;;AAAd;;;;CAAc;;AAAd;EAAA,cAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;EAAd,yBAAc,EAAd,MAAc;AAAA;;AAAd;;;;CAAc;;AAAd;;;;;EAAA,oBAAc,EAAd,MAAc;EAAd,eAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;EAAd,SAAc,EAAd,MAAc;EAAd,UAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,oBAAc;AAAA;;AAAd;;;CAAc;;AAAd;;;;EAAA,0BAAc,EAAd,MAAc;EAAd,6BAAc,EAAd,MAAc;EAAd,sBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,aAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,gBAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,wBAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,YAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,6BAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,wBAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,0BAAc,EAAd,MAAc;EAAd,aAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,kBAAc;AAAA;;AAAd;;CAAc;;AAAd;;;;;;;;;;;;;EAAA,SAAc;AAAA;;AAAd;EAAA,SAAc;EAAd,UAAc;AAAA;;AAAd;EAAA,UAAc;AAAA;;AAAd;;;EAAA,gBAAc;EAAd,SAAc;EAAd,UAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,gBAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,UAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;EAAA,UAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,eAAc;AAAA;;AAAd;;CAAc;AAAd;EAAA,eAAc;AAAA;;AAAd;;;;CAAc;;AAAd;;;;;;;;EAAA,cAAc,EAAd,MAAc;EAAd,sBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,eAAc;EAAd,YAAc;AAAA;;AAAd;EAAA,wBAAc;EAAd,wBAAc;EAAd,mBAAc;EAAd,mBAAc;EAAd,cAAc;EAAd,cAAc;EAAd,cAAc;EAAd,eAAc;EAAd,eAAc;EAAd,aAAc;EAAd,aAAc;EAAd,kBAAc;EAAd,sCAAc;EAAd,eAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,kBAAc;EAAd,2BAAc;EAAd,4BAAc;EAAd,wCAAc;EAAd,0CAAc;EAAd,mCAAc;EAAd,8BAAc;EAAd,sCAAc;EAAd,YAAc;EAAd,kBAAc;EAAd,gBAAc;EAAd,iBAAc;EAAd,kBAAc;EAAd,cAAc;EAAd,gBAAc;EAAd,aAAc;EAAd,mBAAc;EAAd,qBAAc;EAAd,2BAAc;EAAd,yBAAc;EAAd,0BAAc;EAAd,2BAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,yBAAc;EAAd;AAAc;;AAAd;EAAA,wBAAc;EAAd,wBAAc;EAAd,mBAAc;EAAd,mBAAc;EAAd,cAAc;EAAd,cAAc;EAAd,cAAc;EAAd,eAAc;EAAd,eAAc;EAAd,aAAc;EAAd,aAAc;EAAd,kBAAc;EAAd,sCAAc;EAAd,eAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,kBAAc;EAAd,2BAAc;EAAd,4BAAc;EAAd,wCAAc;EAAd,0CAAc;EAAd,mCAAc;EAAd,8BAAc;EAAd,sCAAc;EAAd,YAAc;EAAd,kBAAc;EAAd,gBAAc;EAAd,iBAAc;EAAd,kBAAc;EAAd,cAAc;EAAd,gBAAc;EAAd,aAAc;EAAd,mBAAc;EAAd,qBAAc;EAAd,2BAAc;EAAd,yBAAc;EAAd,0BAAc;EAAd,2BAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,yBAAc;EAAd;AAAc;;AAAd;EAAA,wBAAc;EAAd,wBAAc;EAAd,mBAAc;EAAd,mBAAc;EAAd,cAAc;EAAd,cAAc;EAAd,cAAc;EAAd,eAAc;EAAd,eAAc;EAAd,aAAc;EAAd,aAAc;EAAd,kBAAc;EAAd,sCAAc;EAAd,eAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,kBAAc;EAAd,2BAAc;EAAd,4BAAc;EAAd,wCAAc;EAAd,0CAAc;EAAd,mCAAc;EAAd,8BAAc;EAAd,sCAAc;EAAd,YAAc;EAAd,kBAAc;EAAd,gBAAc;EAAd,iBAAc;EAAd,kBAAc;EAAd,cAAc;EAAd,gBAAc;EAAd,aAAc;EAAd,mBAAc;EAAd,qBAAc;EAAd,2BAAc;EAAd,yBAAc;EAAd,0BAAc;EAAd,2BAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,yBAAc;EAAd;AAAc;ACAd;EAAA;AAAoB;AAApB;;EAAA;IAAA;EAAoB;AAAA;AAApB;;EAAA;IAAA;EAAoB;AAAA;AAApB;;EAAA;IAAA;EAAoB;AAAA;AAApB;;EAAA;IAAA;EAAoB;AAAA;AAApB;;EAAA;IAAA;EAAoB;AAAA;ACApB;EAAA,kBAAmB;EAAnB,UAAmB;EAAnB,WAAmB;EAAnB,UAAmB;EAAnB,YAAmB;EAAnB,gBAAmB;EAAnB,sBAAmB;EAAnB,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;ACAnB;EAAA,iBCAA;EDAA,YCAA;EDAA,aCAA;EDAA,WCAA;EDAA,UCAA;EDAA,kBCAA;EDAA,WCAA;EDAA;CCAA\",\"sourcesContent\":[\"@tailwind base;\\n\",\"@tailwind components;\\n\",\"@tailwind utilities;\\n\",\"@import 'tailwindcss/base';\\n@import 'tailwindcss/components';\\n@import 'tailwindcss/utilities';\\n\",null],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://sage/./resources/styles/app.css?./node_modules/css-loader/dist/cjs.js??css!./node_modules/postcss-loader/dist/cjs.js??postcss");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://sage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ (function(module) {

"use strict";
eval("\n\nmodule.exports = function (item) {\n  var content = item[1];\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (typeof btoa === \"function\") {\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    var sourceMapping = \"/*# \".concat(data, \" */\");\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || \"\").concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join(\"\\n\");\n  }\n\n  return [content].join(\"\\n\");\n};\n\n//# sourceURL=webpack://sage/./node_modules/css-loader/dist/runtime/sourceMaps.js?");

/***/ }),

/***/ "./node_modules/react-refresh/cjs/react-refresh-runtime.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-refresh/cjs/react-refresh-runtime.development.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("/**\n * @license React\n * react-refresh-runtime.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nif (true) {\n  (function() {\n'use strict';\n\n// ATTENTION\nvar REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');\nvar REACT_MEMO_TYPE = Symbol.for('react.memo');\n\nvar PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.\n// It's OK to reference families, but use WeakMap/Set for types.\n\nvar allFamiliesByID = new Map();\nvar allFamiliesByType = new PossiblyWeakMap();\nvar allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families\n// that have actually been edited here. This keeps checks fast.\n// $FlowIssue\n\nvar updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.\n// It is an array of [Family, NextType] tuples.\n\nvar pendingUpdates = []; // This is injected by the renderer via DevTools global hook.\n\nvar helpersByRendererID = new Map();\nvar helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.\n\nvar mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.\n\nvar failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.\n// It needs to be weak because we do this even for roots that failed to mount.\n// If there is no WeakMap, we won't attempt to do retrying.\n// $FlowIssue\n\nvar rootElements = // $FlowIssue\ntypeof WeakMap === 'function' ? new WeakMap() : null;\nvar isPerformingRefresh = false;\n\nfunction computeFullKey(signature) {\n  if (signature.fullKey !== null) {\n    return signature.fullKey;\n  }\n\n  var fullKey = signature.ownKey;\n  var hooks;\n\n  try {\n    hooks = signature.getCustomHooks();\n  } catch (err) {\n    // This can happen in an edge case, e.g. if expression like Foo.useSomething\n    // depends on Foo which is lazily initialized during rendering.\n    // In that case just assume we'll have to remount.\n    signature.forceReset = true;\n    signature.fullKey = fullKey;\n    return fullKey;\n  }\n\n  for (var i = 0; i < hooks.length; i++) {\n    var hook = hooks[i];\n\n    if (typeof hook !== 'function') {\n      // Something's wrong. Assume we need to remount.\n      signature.forceReset = true;\n      signature.fullKey = fullKey;\n      return fullKey;\n    }\n\n    var nestedHookSignature = allSignaturesByType.get(hook);\n\n    if (nestedHookSignature === undefined) {\n      // No signature means Hook wasn't in the source code, e.g. in a library.\n      // We'll skip it because we can assume it won't change during this session.\n      continue;\n    }\n\n    var nestedHookKey = computeFullKey(nestedHookSignature);\n\n    if (nestedHookSignature.forceReset) {\n      signature.forceReset = true;\n    }\n\n    fullKey += '\\n---\\n' + nestedHookKey;\n  }\n\n  signature.fullKey = fullKey;\n  return fullKey;\n}\n\nfunction haveEqualSignatures(prevType, nextType) {\n  var prevSignature = allSignaturesByType.get(prevType);\n  var nextSignature = allSignaturesByType.get(nextType);\n\n  if (prevSignature === undefined && nextSignature === undefined) {\n    return true;\n  }\n\n  if (prevSignature === undefined || nextSignature === undefined) {\n    return false;\n  }\n\n  if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) {\n    return false;\n  }\n\n  if (nextSignature.forceReset) {\n    return false;\n  }\n\n  return true;\n}\n\nfunction isReactClass(type) {\n  return type.prototype && type.prototype.isReactComponent;\n}\n\nfunction canPreserveStateBetween(prevType, nextType) {\n  if (isReactClass(prevType) || isReactClass(nextType)) {\n    return false;\n  }\n\n  if (haveEqualSignatures(prevType, nextType)) {\n    return true;\n  }\n\n  return false;\n}\n\nfunction resolveFamily(type) {\n  // Only check updated types to keep lookups fast.\n  return updatedFamiliesByType.get(type);\n} // If we didn't care about IE11, we could use new Map/Set(iterable).\n\n\nfunction cloneMap(map) {\n  var clone = new Map();\n  map.forEach(function (value, key) {\n    clone.set(key, value);\n  });\n  return clone;\n}\n\nfunction cloneSet(set) {\n  var clone = new Set();\n  set.forEach(function (value) {\n    clone.add(value);\n  });\n  return clone;\n} // This is a safety mechanism to protect against rogue getters and Proxies.\n\n\nfunction getProperty(object, property) {\n  try {\n    return object[property];\n  } catch (err) {\n    // Intentionally ignore.\n    return undefined;\n  }\n}\n\nfunction performReactRefresh() {\n\n  if (pendingUpdates.length === 0) {\n    return null;\n  }\n\n  if (isPerformingRefresh) {\n    return null;\n  }\n\n  isPerformingRefresh = true;\n\n  try {\n    var staleFamilies = new Set();\n    var updatedFamilies = new Set();\n    var updates = pendingUpdates;\n    pendingUpdates = [];\n    updates.forEach(function (_ref) {\n      var family = _ref[0],\n          nextType = _ref[1];\n      // Now that we got a real edit, we can create associations\n      // that will be read by the React reconciler.\n      var prevType = family.current;\n      updatedFamiliesByType.set(prevType, family);\n      updatedFamiliesByType.set(nextType, family);\n      family.current = nextType; // Determine whether this should be a re-render or a re-mount.\n\n      if (canPreserveStateBetween(prevType, nextType)) {\n        updatedFamilies.add(family);\n      } else {\n        staleFamilies.add(family);\n      }\n    }); // TODO: rename these fields to something more meaningful.\n\n    var update = {\n      updatedFamilies: updatedFamilies,\n      // Families that will re-render preserving state\n      staleFamilies: staleFamilies // Families that will be remounted\n\n    };\n    helpersByRendererID.forEach(function (helpers) {\n      // Even if there are no roots, set the handler on first update.\n      // This ensures that if *new* roots are mounted, they'll use the resolve handler.\n      helpers.setRefreshHandler(resolveFamily);\n    });\n    var didError = false;\n    var firstError = null; // We snapshot maps and sets that are mutated during commits.\n    // If we don't do this, there is a risk they will be mutated while\n    // we iterate over them. For example, trying to recover a failed root\n    // may cause another root to be added to the failed list -- an infinite loop.\n\n    var failedRootsSnapshot = cloneSet(failedRoots);\n    var mountedRootsSnapshot = cloneSet(mountedRoots);\n    var helpersByRootSnapshot = cloneMap(helpersByRoot);\n    failedRootsSnapshot.forEach(function (root) {\n      var helpers = helpersByRootSnapshot.get(root);\n\n      if (helpers === undefined) {\n        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');\n      }\n\n      if (!failedRoots.has(root)) {// No longer failed.\n      }\n\n      if (rootElements === null) {\n        return;\n      }\n\n      if (!rootElements.has(root)) {\n        return;\n      }\n\n      var element = rootElements.get(root);\n\n      try {\n        helpers.scheduleRoot(root, element);\n      } catch (err) {\n        if (!didError) {\n          didError = true;\n          firstError = err;\n        } // Keep trying other roots.\n\n      }\n    });\n    mountedRootsSnapshot.forEach(function (root) {\n      var helpers = helpersByRootSnapshot.get(root);\n\n      if (helpers === undefined) {\n        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');\n      }\n\n      if (!mountedRoots.has(root)) {// No longer mounted.\n      }\n\n      try {\n        helpers.scheduleRefresh(root, update);\n      } catch (err) {\n        if (!didError) {\n          didError = true;\n          firstError = err;\n        } // Keep trying other roots.\n\n      }\n    });\n\n    if (didError) {\n      throw firstError;\n    }\n\n    return update;\n  } finally {\n    isPerformingRefresh = false;\n  }\n}\nfunction register(type, id) {\n  {\n    if (type === null) {\n      return;\n    }\n\n    if (typeof type !== 'function' && typeof type !== 'object') {\n      return;\n    } // This can happen in an edge case, e.g. if we register\n    // return value of a HOC but it returns a cached component.\n    // Ignore anything but the first registration for each type.\n\n\n    if (allFamiliesByType.has(type)) {\n      return;\n    } // Create family or remember to update it.\n    // None of this bookkeeping affects reconciliation\n    // until the first performReactRefresh() call above.\n\n\n    var family = allFamiliesByID.get(id);\n\n    if (family === undefined) {\n      family = {\n        current: type\n      };\n      allFamiliesByID.set(id, family);\n    } else {\n      pendingUpdates.push([family, type]);\n    }\n\n    allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.\n\n    if (typeof type === 'object' && type !== null) {\n      switch (getProperty(type, '$$typeof')) {\n        case REACT_FORWARD_REF_TYPE:\n          register(type.render, id + '$render');\n          break;\n\n        case REACT_MEMO_TYPE:\n          register(type.type, id + '$type');\n          break;\n      }\n    }\n  }\n}\nfunction setSignature(type, key) {\n  var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;\n\n  {\n    if (!allSignaturesByType.has(type)) {\n      allSignaturesByType.set(type, {\n        forceReset: forceReset,\n        ownKey: key,\n        fullKey: null,\n        getCustomHooks: getCustomHooks || function () {\n          return [];\n        }\n      });\n    } // Visit inner types because we might not have signed them.\n\n\n    if (typeof type === 'object' && type !== null) {\n      switch (getProperty(type, '$$typeof')) {\n        case REACT_FORWARD_REF_TYPE:\n          setSignature(type.render, key, forceReset, getCustomHooks);\n          break;\n\n        case REACT_MEMO_TYPE:\n          setSignature(type.type, key, forceReset, getCustomHooks);\n          break;\n      }\n    }\n  }\n} // This is lazily called during first render for a type.\n// It captures Hook list at that time so inline requires don't break comparisons.\n\nfunction collectCustomHooksForSignature(type) {\n  {\n    var signature = allSignaturesByType.get(type);\n\n    if (signature !== undefined) {\n      computeFullKey(signature);\n    }\n  }\n}\nfunction getFamilyByID(id) {\n  {\n    return allFamiliesByID.get(id);\n  }\n}\nfunction getFamilyByType(type) {\n  {\n    return allFamiliesByType.get(type);\n  }\n}\nfunction findAffectedHostInstances(families) {\n  {\n    var affectedInstances = new Set();\n    mountedRoots.forEach(function (root) {\n      var helpers = helpersByRoot.get(root);\n\n      if (helpers === undefined) {\n        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');\n      }\n\n      var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);\n      instancesForRoot.forEach(function (inst) {\n        affectedInstances.add(inst);\n      });\n    });\n    return affectedInstances;\n  }\n}\nfunction injectIntoGlobalHook(globalObject) {\n  {\n    // For React Native, the global hook will be set up by require('react-devtools-core').\n    // That code will run before us. So we need to monkeypatch functions on existing hook.\n    // For React Web, the global hook will be set up by the extension.\n    // This will also run before us.\n    var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;\n\n    if (hook === undefined) {\n      // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.\n      // Note that in this case it's important that renderer code runs *after* this method call.\n      // Otherwise, the renderer will think that there is no global hook, and won't do the injection.\n      var nextID = 0;\n      globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {\n        renderers: new Map(),\n        supportsFiber: true,\n        inject: function (injected) {\n          return nextID++;\n        },\n        onScheduleFiberRoot: function (id, root, children) {},\n        onCommitFiberRoot: function (id, root, maybePriorityLevel, didError) {},\n        onCommitFiberUnmount: function () {}\n      };\n    }\n\n    if (hook.isDisabled) {\n      // This isn't a real property on the hook, but it can be set to opt out\n      // of DevTools integration and associated warnings and logs.\n      // Using console['warn'] to evade Babel and ESLint\n      console['warn']('Something has shimmed the React DevTools global hook (__REACT_DEVTOOLS_GLOBAL_HOOK__). ' + 'Fast Refresh is not compatible with this shim and will be disabled.');\n      return;\n    } // Here, we just want to get a reference to scheduleRefresh.\n\n\n    var oldInject = hook.inject;\n\n    hook.inject = function (injected) {\n      var id = oldInject.apply(this, arguments);\n\n      if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {\n        // This version supports React Refresh.\n        helpersByRendererID.set(id, injected);\n      }\n\n      return id;\n    }; // Do the same for any already injected roots.\n    // This is useful if ReactDOM has already been initialized.\n    // https://github.com/facebook/react/issues/17626\n\n\n    hook.renderers.forEach(function (injected, id) {\n      if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {\n        // This version supports React Refresh.\n        helpersByRendererID.set(id, injected);\n      }\n    }); // We also want to track currently mounted roots.\n\n    var oldOnCommitFiberRoot = hook.onCommitFiberRoot;\n\n    var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function () {};\n\n    hook.onScheduleFiberRoot = function (id, root, children) {\n      if (!isPerformingRefresh) {\n        // If it was intentionally scheduled, don't attempt to restore.\n        // This includes intentionally scheduled unmounts.\n        failedRoots.delete(root);\n\n        if (rootElements !== null) {\n          rootElements.set(root, children);\n        }\n      }\n\n      return oldOnScheduleFiberRoot.apply(this, arguments);\n    };\n\n    hook.onCommitFiberRoot = function (id, root, maybePriorityLevel, didError) {\n      var helpers = helpersByRendererID.get(id);\n\n      if (helpers !== undefined) {\n        helpersByRoot.set(root, helpers);\n        var current = root.current;\n        var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.\n        // This logic is copy-pasted from similar logic in the DevTools backend.\n        // If this breaks with some refactoring, you'll want to update DevTools too.\n\n        if (alternate !== null) {\n          var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null && mountedRoots.has(root);\n          var isMounted = current.memoizedState != null && current.memoizedState.element != null;\n\n          if (!wasMounted && isMounted) {\n            // Mount a new root.\n            mountedRoots.add(root);\n            failedRoots.delete(root);\n          } else if (wasMounted && isMounted) ; else if (wasMounted && !isMounted) {\n            // Unmount an existing root.\n            mountedRoots.delete(root);\n\n            if (didError) {\n              // We'll remount it on future edits.\n              failedRoots.add(root);\n            } else {\n              helpersByRoot.delete(root);\n            }\n          } else if (!wasMounted && !isMounted) {\n            if (didError) {\n              // We'll remount it on future edits.\n              failedRoots.add(root);\n            }\n          }\n        } else {\n          // Mount a new root.\n          mountedRoots.add(root);\n        }\n      } // Always call the decorated DevTools hook.\n\n\n      return oldOnCommitFiberRoot.apply(this, arguments);\n    };\n  }\n}\nfunction hasUnrecoverableErrors() {\n  // TODO: delete this after removing dependency in RN.\n  return false;\n} // Exposed for testing.\n\nfunction _getMountedRootCount() {\n  {\n    return mountedRoots.size;\n  }\n} // This is a wrapper over more primitive functions for setting signature.\n// Signatures let us decide whether the Hook order has changed on refresh.\n//\n// This function is intended to be used as a transform target, e.g.:\n// var _s = createSignatureFunctionForTransform()\n//\n// function Hello() {\n//   const [foo, setFoo] = useState(0);\n//   const value = useCustomHook();\n//   _s(); /* Call without arguments triggers collecting the custom Hook list.\n//          * This doesn't happen during the module evaluation because we\n//          * don't want to change the module order with inline requires.\n//          * Next calls are noops. */\n//   return <h1>Hi</h1>;\n// }\n//\n// /* Call with arguments attaches the signature to the type: */\n// _s(\n//   Hello,\n//   'useState{[foo, setFoo]}(0)',\n//   () => [useCustomHook], /* Lazy to avoid triggering inline requires */\n// );\n\nfunction createSignatureFunctionForTransform() {\n  {\n    var savedType;\n    var hasCustomHooks;\n    var didCollectHooks = false;\n    return function (type, key, forceReset, getCustomHooks) {\n      if (typeof key === 'string') {\n        // We're in the initial phase that associates signatures\n        // with the functions. Note this may be called multiple times\n        // in HOC chains like _s(hoc1(_s(hoc2(_s(actualFunction))))).\n        if (!savedType) {\n          // We're in the innermost call, so this is the actual type.\n          savedType = type;\n          hasCustomHooks = typeof getCustomHooks === 'function';\n        } // Set the signature for all types (even wrappers!) in case\n        // they have no signatures of their own. This is to prevent\n        // problems like https://github.com/facebook/react/issues/20417.\n\n\n        if (type != null && (typeof type === 'function' || typeof type === 'object')) {\n          setSignature(type, key, forceReset, getCustomHooks);\n        }\n\n        return type;\n      } else {\n        // We're in the _s() call without arguments, which means\n        // this is the time to collect custom Hook signatures.\n        // Only do this once. This path is hot and runs *inside* every render!\n        if (!didCollectHooks && hasCustomHooks) {\n          didCollectHooks = true;\n          collectCustomHooksForSignature(savedType);\n        }\n      }\n    };\n  }\n}\nfunction isLikelyComponentType(type) {\n  {\n    switch (typeof type) {\n      case 'function':\n        {\n          // First, deal with classes.\n          if (type.prototype != null) {\n            if (type.prototype.isReactComponent) {\n              // React class.\n              return true;\n            }\n\n            var ownNames = Object.getOwnPropertyNames(type.prototype);\n\n            if (ownNames.length > 1 || ownNames[0] !== 'constructor') {\n              // This looks like a class.\n              return false;\n            } // eslint-disable-next-line no-proto\n\n\n            if (type.prototype.__proto__ !== Object.prototype) {\n              // It has a superclass.\n              return false;\n            } // Pass through.\n            // This looks like a regular function with empty prototype.\n\n          } // For plain functions and arrows, use name as a heuristic.\n\n\n          var name = type.name || type.displayName;\n          return typeof name === 'string' && /^[A-Z]/.test(name);\n        }\n\n      case 'object':\n        {\n          if (type != null) {\n            switch (getProperty(type, '$$typeof')) {\n              case REACT_FORWARD_REF_TYPE:\n              case REACT_MEMO_TYPE:\n                // Definitely React components.\n                return true;\n\n              default:\n                return false;\n            }\n          }\n\n          return false;\n        }\n\n      default:\n        {\n          return false;\n        }\n    }\n  }\n}\n\nexports._getMountedRootCount = _getMountedRootCount;\nexports.collectCustomHooksForSignature = collectCustomHooksForSignature;\nexports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;\nexports.findAffectedHostInstances = findAffectedHostInstances;\nexports.getFamilyByID = getFamilyByID;\nexports.getFamilyByType = getFamilyByType;\nexports.hasUnrecoverableErrors = hasUnrecoverableErrors;\nexports.injectIntoGlobalHook = injectIntoGlobalHook;\nexports.isLikelyComponentType = isLikelyComponentType;\nexports.performReactRefresh = performReactRefresh;\nexports.register = register;\nexports.setSignature = setSignature;\n  })();\n}\n\n\n//# sourceURL=webpack://sage/./node_modules/react-refresh/cjs/react-refresh-runtime.development.js?");

/***/ }),

/***/ "./node_modules/react-refresh/runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react-refresh/runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react-refresh-runtime.development.js */ \"./node_modules/react-refresh/cjs/react-refresh-runtime.development.js\");\n}\n\n\n//# sourceURL=webpack://sage/./node_modules/react-refresh/runtime.js?");

/***/ }),

/***/ "./resources/styles/app.css":
/*!**********************************!*\
  !*** ./resources/styles/app.css ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??css!../../node_modules/postcss-loader/dist/cjs.js??postcss!./app.css */ \"./node_modules/css-loader/dist/cjs.js??css!./node_modules/postcss-loader/dist/cjs.js??postcss!./resources/styles/app.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_app_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_app_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_app_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_app_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_app_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../../node_modules/css-loader/dist/cjs.js??css!../../node_modules/postcss-loader/dist/cjs.js??postcss!./app.css */ \"./node_modules/css-loader/dist/cjs.js??css!./node_modules/postcss-loader/dist/cjs.js??postcss!./resources/styles/app.css\",\n      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??css!../../node_modules/postcss-loader/dist/cjs.js??postcss!./app.css */ \"./node_modules/css-loader/dist/cjs.js??css!./node_modules/postcss-loader/dist/cjs.js??postcss!./resources/styles/app.css\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_app_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_app_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_app_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_app_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_app_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_app_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_app_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_css_node_modules_postcss_loader_dist_cjs_js_postcss_app_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://sage/./resources/styles/app.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://sage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://sage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://sage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://sage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://sage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://sage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("/* global __react_refresh_library__ */\n\nconst safeThis = __webpack_require__(/*! core-js-pure/features/global-this */ \"./node_modules/core-js-pure/features/global-this.js\");\nconst RefreshRuntime = __webpack_require__(/*! react-refresh/runtime */ \"./node_modules/react-refresh/runtime.js\");\n\nif (true) {\n  if (typeof safeThis !== 'undefined') {\n    var $RefreshInjected$ = '__reactRefreshInjected';\n    // Namespace the injected flag (if necessary) for monorepo compatibility\n    if (false) {}\n\n    // Only inject the runtime if it hasn't been injected\n    if (!safeThis[$RefreshInjected$]) {\n      // Inject refresh runtime into global scope\n      RefreshRuntime.injectIntoGlobalHook(safeThis);\n\n      // Mark the runtime as injected to prevent double-injection\n      safeThis[$RefreshInjected$] = true;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://sage/./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/node_modules/ansi-regex/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@roots/bud-client/node_modules/ansi-regex/index.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ansiRegex; }\n/* harmony export */ });\nfunction ansiRegex({onlyFirst = false} = {}) {\n\tconst pattern = [\n\t    '[\\\\u001B\\\\u009B][[\\\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\\\d\\\\/#&.:=?%@~_]+)*|[a-zA-Z\\\\d]+(?:;[-a-zA-Z\\\\d\\\\/#&.:=?%@~_]*)*)?\\\\u0007)',\n\t\t'(?:(?:\\\\d{1,4}(?:;\\\\d{0,4})*)?[\\\\dA-PR-TZcf-ntqry=><~]))'\n\t].join('|');\n\n\treturn new RegExp(pattern, onlyFirst ? undefined : 'g');\n}\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/node_modules/ansi-regex/index.js?");

/***/ }),

/***/ "./node_modules/@roots/bud-client/node_modules/strip-ansi/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@roots/bud-client/node_modules/strip-ansi/index.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ stripAnsi; }\n/* harmony export */ });\n/* harmony import */ var ansi_regex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ansi-regex */ \"./node_modules/@roots/bud-client/node_modules/ansi-regex/index.js\");\n\n\nfunction stripAnsi(string) {\n\tif (typeof string !== 'string') {\n\t\tthrow new TypeError(`Expected a \\`string\\`, got \\`${typeof string}\\``);\n\t}\n\n\treturn string.replace((0,ansi_regex__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), '');\n}\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/bud-client/node_modules/strip-ansi/index.js?");

/***/ }),

/***/ 575:
/*!**********************************************************!*\
  !*** ./node_modules/@roots/sage/lib/client/dom-ready.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst domReady = onReady => {\n    window.requestAnimationFrame(async function check() {\n        document.body ? await onReady() : window.requestAnimationFrame(check);\n    });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (domReady);\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/sage/lib/client/dom-ready.js?");

/***/ }),

/***/ "./node_modules/@roots/sage/lib/client/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@roots/sage/lib/client/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domReady\": function() { return /* reexport safe */ _dom_ready_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; },\n/* harmony export */   \"lazy\": function() { return /* reexport safe */ _lazy_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _dom_ready_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-ready.js */ 575);\n/* harmony import */ var _lazy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lazy.js */ \"./node_modules/@roots/sage/lib/client/lazy.js\");\n\n\n\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/sage/lib/client/index.js?");

/***/ }),

/***/ "./node_modules/@roots/sage/lib/client/lazy.js":
/*!*****************************************************!*\
  !*** ./node_modules/@roots/sage/lib/client/lazy.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Default error handler\n *\n * @throws Error\n * @public\n */\nconst defaultErrorHandler = (err) => {\n    throw new Error(err);\n};\nconst lazy = async function lazy(module, handler, errorHandler) {\n    try {\n        const { default: request } = await module;\n        return await handler(request);\n    }\n    catch (err) {\n        const handle = errorHandler ? errorHandler : defaultErrorHandler;\n        handle(err);\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (lazy);\n\n\n//# sourceURL=webpack://sage/./node_modules/@roots/sage/lib/client/lazy.js?");

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
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
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	!function() {
/******/ 		__webpack_require__.hmrF = function() { return "app." + __webpack_require__.h() + ".hot-update.json"; };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	!function() {
/******/ 		__webpack_require__.h = function() { return "74f49b58da8c92196814"; }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "sage:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	!function() {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	!function() {
/******/ 		__webpack_require__.i.push(function(options) {
/******/ 			var originalFactory = options.factory;
/******/ 			options.factory = function (moduleObject, moduleExports, webpackRequire) {
/******/ 				__webpack_require__.$Refresh$.setup(options.id);
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					if (typeof Promise !== 'undefined' && moduleObject.exports instanceof Promise) {
/******/ 						options.module.exports = options.module.exports.then(
/******/ 							function(result) {
/******/ 								__webpack_require__.$Refresh$.cleanup(options.id);
/******/ 								return result;
/******/ 							},
/******/ 							function(reason) {
/******/ 								__webpack_require__.$Refresh$.cleanup(options.id);
/******/ 								return Promise.reject(reason);
/******/ 							}
/******/ 						);
/******/ 					} else {
/******/ 						__webpack_require__.$Refresh$.cleanup(options.id)
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		})
/******/ 		
/******/ 		__webpack_require__.$Refresh$ = {
/******/ 			register: function() { return undefined; },
/******/ 			signature: function() { return function(type) { return type; }; },
/******/ 			runtime: {
/******/ 				createSignatureFunctionForTransform: function() { return function(type) { return type; }; },
/******/ 				register: function() { return undefined; }
/******/ 			},
/******/ 			setup: function(currentModuleId) {
/******/ 				var prevModuleId = __webpack_require__.$Refresh$.moduleId;
/******/ 				var prevRegister = __webpack_require__.$Refresh$.register;
/******/ 				var prevSignature = __webpack_require__.$Refresh$.signature;
/******/ 				var prevCleanup = __webpack_require__.$Refresh$.cleanup;
/******/ 		
/******/ 				__webpack_require__.$Refresh$.moduleId = currentModuleId;
/******/ 		
/******/ 				__webpack_require__.$Refresh$.register = function(type, id) {
/******/ 					var typeId = currentModuleId + " " + id;
/******/ 					__webpack_require__.$Refresh$.runtime.register(type, typeId);
/******/ 				}
/******/ 		
/******/ 				__webpack_require__.$Refresh$.signature = function() { return __webpack_require__.$Refresh$.runtime.createSignatureFunctionForTransform(); };
/******/ 		
/******/ 				__webpack_require__.$Refresh$.cleanup = function(cleanupModuleId) {
/******/ 					if (currentModuleId === cleanupModuleId) {
/******/ 						__webpack_require__.$Refresh$.moduleId = prevModuleId;
/******/ 						__webpack_require__.$Refresh$.register = prevRegister;
/******/ 						__webpack_require__.$Refresh$.signature = prevSignature;
/******/ 						__webpack_require__.$Refresh$.cleanup = prevCleanup;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = function(event) {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatesage"] = function(chunkId, moreModules, runtime) {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
/******/ 	__webpack_require__("./node_modules/@roots/bud-client/lib/index.js?name=sage&indicator=true&overlay=true&reload=true");
/******/ 	__webpack_require__("./node_modules/@roots/bud-client/lib/proxy-click-interceptor.js?search=http%3A%2F%2Fsorrento.local%2F&replace=%2F");
/******/ 	__webpack_require__("./node_modules/react-refresh/runtime.js");
/******/ 	__webpack_require__(537);
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/styles/app.css");
/******/ 	
/******/ })()
;