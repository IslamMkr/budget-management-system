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

/***/ "./src/database.ts":
/*!*************************!*\
  !*** ./src/database.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.addPartner = exports.addAgent = exports.getAllAgents = void 0;\r\nvar knex_1 = __webpack_require__(/*! knex */ \"knex\");\r\nvar Constants = __webpack_require__(/*! ./utils/constants */ \"./src/utils/constants.ts\");\r\nvar knexConfig = {\r\n    client: 'sqlite3',\r\n    connection: {\r\n        filename: 'database.sqlite3'\r\n    },\r\n    useNullAsDefault: true\r\n};\r\nvar database = (0, knex_1[\"default\"])(knexConfig);\r\n/**\r\n * Database operations\r\n */\r\nvar getAllAgents = function (event) {\r\n    database.select()\r\n        .from('agents')\r\n        .then(function (data) {\r\n        event.reply(Constants.DB_GET_ALL_AGENTS, data);\r\n    })[\"catch\"](function (err) {\r\n        console.error(err);\r\n    });\r\n};\r\nexports.getAllAgents = getAllAgents;\r\nvar addAgent = function (event, agent) {\r\n    database(Constants.DB_TABLE_AGENTS)\r\n        .insert(agent)\r\n        .then(function (_) {\r\n        event.reply(Constants.DB_ADD_AGENT, Constants.DB_OP_SUCCESS);\r\n    })[\"catch\"](function (err) {\r\n        event.reply(Constants.DB_ADD_AGENT, Constants.DB_OP_FAILURE);\r\n        console.error(err);\r\n    });\r\n};\r\nexports.addAgent = addAgent;\r\nvar addPartner = function (event, partner) {\r\n    database(Constants.DB_TABLE_PARTNERS)\r\n        .insert(partner)\r\n        .then(function (_) {\r\n        event.reply(Constants.DB_ADD_PARTNER, Constants.DB_OP_SUCCESS);\r\n    })[\"catch\"](function (err) {\r\n        event.reply(Constants.DB_ADD_PARTNER, Constants.DB_OP_FAILURE);\r\n        console.error(err);\r\n    });\r\n};\r\nexports.addPartner = addPartner;\r\n\n\n//# sourceURL=webpack://ismkr/./src/database.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar electron_1 = __webpack_require__(/*! electron */ \"electron\");\r\nvar Constants = __webpack_require__(/*! ./utils/constants */ \"./src/utils/constants.ts\");\r\nvar database = __webpack_require__(/*! ./database */ \"./src/database.ts\");\r\nvar _a = __webpack_require__(/*! electron */ \"electron\"), app = _a.app, BrowserWindow = _a.BrowserWindow;\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\n/**\r\n * Window creation\r\n */\r\nfunction createWindow() {\r\n    var win = new BrowserWindow({\r\n        width: 1080,\r\n        height: 780,\r\n        minWidth: 1080,\r\n        minHeight: 780,\r\n        resizable: true,\r\n        webPreferences: {\r\n            nodeIntegration: true,\r\n            contextIsolation: false,\r\n            preload: path.join(__dirname, 'preload.js')\r\n        }\r\n    });\r\n    win.loadFile('index.html');\r\n}\r\napp.whenReady().then(function () {\r\n    createWindow();\r\n    app.on('activate', function () {\r\n        if (BrowserWindow.getAllWindows().length === 0)\r\n            createWindow();\r\n    });\r\n});\r\napp.on('window-all-closed', function () {\r\n    if (process.platform !== 'darwin')\r\n        app.quit();\r\n});\r\n/**\r\n * DATABASE CALLS\r\n */\r\nelectron_1.ipcMain.on(Constants.DB_GET_ALL_AGENTS, function (event) {\r\n    database.getAllAgents(event);\r\n});\r\nelectron_1.ipcMain.on(Constants.DB_ADD_AGENT, function (event, agent) {\r\n    database.addAgent(event, agent);\r\n});\r\nelectron_1.ipcMain.on(Constants.DB_ADD_PARTNER, function (event, partner) {\r\n    database.addPartner(event, partner);\r\n});\r\n\n\n//# sourceURL=webpack://ismkr/./src/main.ts?");

/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.DB_OP_FAILURE = exports.DB_OP_SUCCESS = exports.DB_ADD_PARTNER = exports.DB_ADD_AGENT = exports.DB_GET_ALL_AGENTS = exports.DB_TABLE_PARTNERS = exports.DB_TABLE_AGENTS = exports.ADD_AGENT_WINDOW_CLOSE_REQUEST = void 0;\r\n/**\r\n * UI CONSTANTS\r\n */\r\nexports.ADD_AGENT_WINDOW_CLOSE_REQUEST = \"ADD_AGENT_WINDOW_CLOSE_REQUEST\";\r\n/**\r\n * DATABASE CONSTANTS\r\n */\r\n// TABLES\r\nexports.DB_TABLE_AGENTS = 'agents';\r\nexports.DB_TABLE_PARTNERS = 'partenaires';\r\n// OPERATIONS\r\nexports.DB_GET_ALL_AGENTS = \"DB_GET_ALL_AGENTS\";\r\nexports.DB_ADD_AGENT = 'DB_ADD_AGENT';\r\nexports.DB_ADD_PARTNER = \"DB_ADD_PARTNER\";\r\n// RESULTS\r\nexports.DB_OP_SUCCESS = \"DB_OP_SUCCESS\";\r\nexports.DB_OP_FAILURE = \"DB_OP_FAILURE\";\r\n\n\n//# sourceURL=webpack://ismkr/./src/utils/constants.ts?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("knex");

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