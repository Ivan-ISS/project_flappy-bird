/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Footer: () => (/* binding */ Footer)\n/* harmony export */ });\n//import './footer.css';\r\n\r\nclass Footer {\r\n    render(children) {\r\n        let htmlFooter = `\r\n            <div class=\"footer\">\r\n                <div class=\"footer__container container-common\">\r\n                    ${children}\r\n                </div>\r\n            </div>\r\n        `;\r\n\r\n        return htmlFooter;\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://project_flappy-bird/./src/components/Footer/footer.js?");

/***/ }),

/***/ "./src/components/Header/header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: () => (/* binding */ Header)\n/* harmony export */ });\n//import './header.css';\r\n\r\nclass Header {\r\n    render(children) {\r\n        let htmlHeader = `\r\n            <div class=\"header\">\r\n                <div class=\"header__container container-common\">\r\n                    ${children}\r\n                </div>\r\n            </div>\r\n        `;\r\n\r\n        return htmlHeader;\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://project_flappy-bird/./src/components/Header/header.js?");

/***/ }),

/***/ "./src/components/Layout/layout.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/layout.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Layout: () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var _constants_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/root */ \"./src/constants/root.js\");\n/* harmony import */ var _Logo_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logo/logo */ \"./src/components/Logo/logo.js\");\n/* harmony import */ var _Header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/header */ \"./src/components/Header/header.js\");\n/* harmony import */ var _Main_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Main/main */ \"./src/components/Main/main.js\");\n/* harmony import */ var _Footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Footer/footer */ \"./src/components/Footer/footer.js\");\n//import './Layout.css';\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Layout {\r\n    constructor() {\r\n        this.logo = new _Logo_logo__WEBPACK_IMPORTED_MODULE_1__.Logo('src/assets/images/svg/logo.svg');\r\n        this.header = new _Header_header__WEBPACK_IMPORTED_MODULE_2__.Header();\r\n        this.footer = new _Footer_footer__WEBPACK_IMPORTED_MODULE_4__.Footer();\r\n        this.main = new _Main_main__WEBPACK_IMPORTED_MODULE_3__.Main();\r\n        // this.game = new Game();\r\n    }\r\n\r\n    render() {\r\n        const htmlLogo = this.logo.render();\r\n        const htmlHeader = this.header.render(htmlLogo);\r\n\r\n        // const htmlGame = this.game.render();\r\n        const htmlMain = this.main.render('htmlGame');\r\n\r\n        const htmlFooter = this.footer.render('Created by Sabelnikov IS');\r\n\r\n        const html = `<div class=\"layout\">${htmlHeader + htmlMain + htmlFooter}</div>`;\r\n\r\n        _constants_root__WEBPACK_IMPORTED_MODULE_0__.ROOT.innerHTML = html;\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://project_flappy-bird/./src/components/Layout/layout.js?");

/***/ }),

/***/ "./src/components/Logo/logo.js":
/*!*************************************!*\
  !*** ./src/components/Logo/logo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Logo: () => (/* binding */ Logo)\n/* harmony export */ });\n//import './logo.css';\r\n\r\nclass Logo {\r\n    constructor(src) {\r\n        this.src = src;\r\n    }\r\n\r\n    render() {\r\n        let htmlLogo = `\r\n            <div class=\"logo\">\r\n                <img class=\"logo__img\" src=\"${this.src}\" alt=\"logo\"/>\r\n            </div>\r\n        `;\r\n\r\n        return htmlLogo;\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://project_flappy-bird/./src/components/Logo/logo.js?");

/***/ }),

/***/ "./src/components/Main/main.js":
/*!*************************************!*\
  !*** ./src/components/Main/main.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Main: () => (/* binding */ Main)\n/* harmony export */ });\n//import './main.css';\r\n\r\nclass Main {\r\n    render(children) {\r\n        let htmlMain = `\r\n            <div class=\"main\">\r\n                <section class=\"main__game game\">\r\n                    <div class=\"game__container container-common\">\r\n                        ${children}\r\n                    </div>\r\n                </section>\r\n            </div>\r\n        `;\r\n\r\n        return htmlMain;\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://project_flappy-bird/./src/components/Main/main.js?");

/***/ }),

/***/ "./src/components/app.js":
/*!*******************************!*\
  !*** ./src/components/app.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   App: () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _Layout_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout/layout */ \"./src/components/Layout/layout.js\");\n\r\n\r\nclass App {\r\n    constructor() {\r\n        this.layout = new _Layout_layout__WEBPACK_IMPORTED_MODULE_0__.Layout();\r\n    }\r\n\r\n    launchApp() {\r\n        this.layout.render();\r\n        /* this.layout.game.prepare().then((res) => {\r\n            console.log('spriteSheet по итогу:', this.layout.game._spriteSheet);\r\n            console.log('spriteSheet по возвращаемому результату:', res);\r\n\r\n            this.layout.game.initGame();\r\n            this.layout.game.start();\r\n        }); */\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://project_flappy-bird/./src/components/app.js?");

/***/ }),

/***/ "./src/constants/root.js":
/*!*******************************!*\
  !*** ./src/constants/root.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ROOT: () => (/* binding */ ROOT)\n/* harmony export */ });\nconst ROOT = document.getElementById('root');\r\n\r\n\r\n\n\n//# sourceURL=webpack://project_flappy-bird/./src/constants/root.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app */ \"./src/components/app.js\");\n\r\n\r\nconst app = new _components_app__WEBPACK_IMPORTED_MODULE_0__.App();\r\n\r\napp.launchApp();\r\n\n\n//# sourceURL=webpack://project_flappy-bird/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;