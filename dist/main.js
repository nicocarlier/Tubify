/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/search.js */ \"./src/scripts/search.js\");\n// import Gpt from './scripts/gpt.js';\n\n\n(0,_scripts_search_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(res => {\n  console.log(res);\n}).catch(error => {\n  console.error(error);\n});\n\n// const backendPort = 5001;\n// const container = document.querySelector('.js-container');\n\n// Search()\n\n// console.log(Search())\n\n//runpy with the id\n\n// Gpt(backendPort)//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFeUM7QUFFekNBLDhEQUFNLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUVDLEdBQUcsSUFBSztFQUNuQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQztBQUNwQixDQUFDLENBQUMsQ0FBQ0csS0FBSyxDQUFFQyxLQUFLLElBQUs7RUFDaEJILE9BQU8sQ0FBQ0csS0FBSyxDQUFDQSxLQUFLLENBQUM7QUFDeEIsQ0FBQyxDQUFDOztBQUdGO0FBQ0E7O0FBR0E7O0FBRUE7O0FBSUE7O0FBSUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0aWZ5Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEdwdCBmcm9tICcuL3NjcmlwdHMvZ3B0LmpzJztcblxuaW1wb3J0IFNlYXJjaCBmcm9tICcuL3NjcmlwdHMvc2VhcmNoLmpzJztcblxuU2VhcmNoKCkudGhlbigocmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVzKTtcbn0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xufSk7XG5cblxuLy8gY29uc3QgYmFja2VuZFBvcnQgPSA1MDAxO1xuLy8gY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWNvbnRhaW5lcicpO1xuXG5cbi8vIFNlYXJjaCgpXG5cbi8vIGNvbnNvbGUubG9nKFNlYXJjaCgpKVxuXG5cblxuLy9ydW5weSB3aXRoIHRoZSBpZFxuXG5cblxuLy8gR3B0KGJhY2tlbmRQb3J0KVxuXG5cbiJdLCJuYW1lcyI6WyJTZWFyY2giLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/search.js":
/*!*******************************!*\
  !*** ./src/scripts/search.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction search() {\n  return new Promise((resolve, reject) => {\n    const searchForm = document.querySelector('.search-bar');\n    searchForm.addEventListener('submit', e => {\n      e.preventDefault();\n      // searchForm.classList.add('hidden');\n      let url = document.querySelector('.search-bar input').value;\n      let res;\n      if (url.includes('https://www.youtube.com/watch?v=')) {\n        const startIndex = url.indexOf(\"v=\") + 2;\n        const videoId = url.slice(startIndex);\n        res = [url, videoId]; // can make an object\n\n        const outer = document.querySelector('.youtube-search');\n        outer.classList.add('hidden');\n        // youtube-search\n      } else {\n        res = \"not valid url\";\n      }\n      resolve(res);\n    });\n  });\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (search);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zZWFyY2guanMiLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVNBLE1BQU1BLENBQUEsRUFBRTtFQUNiLE9BQU8sSUFBSUMsT0FBTyxDQUFDLENBQUNDLE9BQU8sRUFBRUMsTUFBTSxLQUFLO0lBQ3BDLE1BQU1DLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDO0lBRXhERixVQUFVLENBQUNHLGdCQUFnQixDQUFDLFFBQVEsRUFBR0MsQ0FBQyxJQUFLO01BQ3pDQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BQ2xCO01BQ0EsSUFBSUMsR0FBRyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDSyxLQUFLO01BRTNELElBQUlDLEdBQUc7TUFDUCxJQUFJRixHQUFHLENBQUNHLFFBQVEsQ0FBQyxrQ0FBa0MsQ0FBQyxFQUFDO1FBRWpELE1BQU1DLFVBQVUsR0FBR0osR0FBRyxDQUFDSyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUN4QyxNQUFNQyxPQUFPLEdBQUdOLEdBQUcsQ0FBQ08sS0FBSyxDQUFDSCxVQUFVLENBQUM7UUFDckNGLEdBQUcsR0FBRyxDQUFDRixHQUFHLEVBQUVNLE9BQU8sQ0FBQyxDQUFDLENBQUM7O1FBR3RCLE1BQU1FLEtBQUssR0FBR2IsUUFBUSxDQUFDQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7UUFDdkRZLEtBQUssQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUUsUUFBUyxDQUFDO1FBQy9CO01BRUosQ0FBQyxNQUFLO1FBQ0ZSLEdBQUcsR0FBRyxlQUFlO01BQ3pCO01BQ0FWLE9BQU8sQ0FBQ1UsR0FBRyxDQUFDO0lBQ2hCLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUNOO0FBSUEsK0RBQWVaLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0aWZ5Ly4vc3JjL3NjcmlwdHMvc2VhcmNoLmpzPzlmMTYiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2VhcmNoKCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmFyJyk7XG5cbiAgICAgICAgc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gc2VhcmNoRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGxldCB1cmwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJhciBpbnB1dCcpLnZhbHVlO1xuXG4gICAgICAgICAgICBsZXQgcmVzO1xuICAgICAgICAgICAgaWYgKHVybC5pbmNsdWRlcygnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0nKSl7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gdXJsLmluZGV4T2YoXCJ2PVwiKSArIDI7XG4gICAgICAgICAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5zbGljZShzdGFydEluZGV4KTtcbiAgICAgICAgICAgICAgICByZXMgPSBbdXJsLCB2aWRlb0lkXTsgLy8gY2FuIG1ha2UgYW4gb2JqZWN0XG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IG91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnlvdXR1YmUtc2VhcmNoJyk7XG4gICAgICAgICAgICAgICAgb3V0ZXIuY2xhc3NMaXN0LmFkZCgoJ2hpZGRlbicpKTtcbiAgICAgICAgICAgICAgICAvLyB5b3V0dWJlLXNlYXJjaFxuXG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzID0gXCJub3QgdmFsaWQgdXJsXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoOyJdLCJuYW1lcyI6WyJzZWFyY2giLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNlYXJjaEZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXJsIiwidmFsdWUiLCJyZXMiLCJpbmNsdWRlcyIsInN0YXJ0SW5kZXgiLCJpbmRleE9mIiwidmlkZW9JZCIsInNsaWNlIiwib3V0ZXIiLCJjbGFzc0xpc3QiLCJhZGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/search.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0aWZ5Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;