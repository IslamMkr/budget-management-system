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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar _a = __webpack_require__(/*! electron */ \"electron\"), app = _a.app, BrowserWindow = _a.BrowserWindow;\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nfunction createWindow() {\r\n    var win = new BrowserWindow({\r\n        width: 1080,\r\n        height: 780,\r\n        minWidth: 1080,\r\n        minHeight: 780,\r\n        resizable: true,\r\n        webPreferences: {\r\n            nodeIntegration: true,\r\n            contextIsolation: false,\r\n            preload: path.join(__dirname, 'preload.js')\r\n        }\r\n    });\r\n    win.loadFile('index.html');\r\n}\r\napp.whenReady().then(function () {\r\n    createWindow();\r\n    app.on('activate', function () {\r\n        if (BrowserWindow.getAllWindows().length === 0)\r\n            createWindow();\r\n    });\r\n});\r\napp.on('window-all-closed', function () {\r\n    if (process.platform !== 'darwin')\r\n        app.quit();\r\n});\r\n/**\r\n * DATABASE CALLS\r\n */\r\n// ipcMain.on(Constants.DB_GET_ALL_AGENTS, (event) => {\r\n//     database.getAllAgents(event)\r\n// })\r\n// ipcMain.on(Constants.DB_ADD_AGENT, (event, agent) => {\r\n//     database.addAgent(event, agent)\r\n// })\r\n// ipcMain.on(Constants.DB_ADD_PARTNER, (event, partner) => {\r\n//     database.addPartner(event, partner)\r\n// })\r\n\n\n//# sourceURL=webpack://ismkr/./src/main.ts?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;