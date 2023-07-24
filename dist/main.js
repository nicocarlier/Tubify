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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/search.js */ \"./src/scripts/search.js\");\n// import Gpt from './scripts/gpt.js';\n\n//import getTranscript from './scripts/getTranscript.js'; //? refactor to use this\n\n//!works\n(0,_scripts_search_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(vidId => {\n  fetch(`http://localhost:5001/transcript/${vidId}`).then(transcript => transcript.json()) // You need to parse the response as JSON\n  .then(data => {\n    console.log(data.fullText);\n  }).catch(err => {\n    console.error('Error: ', err);\n  });\n}).catch(error => {\n  console.error(\"something is wrong with the url message\", error);\n});\n\n//? refactor to use this\n// Search()\n//   .then(videoID => getTranscript(videoID[2]))\n//   .then(transcript => console.log(transcript))\n//   .catch(error => console.error(\"Error: \", error));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUN5QztBQUN6Qzs7QUFFQTtBQUNBQSw4REFBTSxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFFQyxLQUFLLElBQUs7RUFDckJDLEtBQUssQ0FBRSxvQ0FBbUNELEtBQU0sRUFBQyxDQUFDLENBQ2pERCxJQUFJLENBQUNHLFVBQVUsSUFBSUEsVUFBVSxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFBQSxDQUN0Q0osSUFBSSxDQUFDSyxJQUFJLElBQUk7SUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQ0csUUFBUSxDQUFDO0VBQzVDLENBQUMsQ0FBQyxDQUNEQyxLQUFLLENBQUNDLEdBQUcsSUFBSTtJQUNaSixPQUFPLENBQUNLLEtBQUssQ0FBQyxTQUFTLEVBQUVELEdBQUcsQ0FBQztFQUMvQixDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQ0QsS0FBSyxDQUFFRSxLQUFLLElBQUs7RUFDaEJMLE9BQU8sQ0FBQ0ssS0FBSyxDQUFDLHlDQUF5QyxFQUFFQSxLQUFLLENBQUM7QUFDbkUsQ0FBQyxDQUFDOztBQUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0aWZ5Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEdwdCBmcm9tICcuL3NjcmlwdHMvZ3B0LmpzJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9zY3JpcHRzL3NlYXJjaC5qcyc7XG4vL2ltcG9ydCBnZXRUcmFuc2NyaXB0IGZyb20gJy4vc2NyaXB0cy9nZXRUcmFuc2NyaXB0LmpzJzsgLy8/IHJlZmFjdG9yIHRvIHVzZSB0aGlzXG5cbi8vIXdvcmtzXG5TZWFyY2goKS50aGVuKCh2aWRJZCkgPT4ge1xuICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDEvdHJhbnNjcmlwdC8ke3ZpZElkfWApXG4gICAgLnRoZW4odHJhbnNjcmlwdCA9PiB0cmFuc2NyaXB0Lmpzb24oKSkgLy8gWW91IG5lZWQgdG8gcGFyc2UgdGhlIHJlc3BvbnNlIGFzIEpTT05cbiAgICAudGhlbihkYXRhID0+IHsgY29uc29sZS5sb2coZGF0YS5mdWxsVGV4dCk7XG4gIH0pXG4gIC5jYXRjaChlcnIgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiAnLCBlcnIpO1xuICB9KTtcbn0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJzb21ldGhpbmcgaXMgd3Jvbmcgd2l0aCB0aGUgdXJsIG1lc3NhZ2VcIiwgZXJyb3IpO1xufSlcblxuXG4vLz8gcmVmYWN0b3IgdG8gdXNlIHRoaXNcbi8vIFNlYXJjaCgpXG4vLyAgIC50aGVuKHZpZGVvSUQgPT4gZ2V0VHJhbnNjcmlwdCh2aWRlb0lEWzJdKSlcbi8vICAgLnRoZW4odHJhbnNjcmlwdCA9PiBjb25zb2xlLmxvZyh0cmFuc2NyaXB0KSlcbi8vICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjogXCIsIGVycm9yKSk7XG4iXSwibmFtZXMiOlsiU2VhcmNoIiwidGhlbiIsInZpZElkIiwiZmV0Y2giLCJ0cmFuc2NyaXB0IiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZnVsbFRleHQiLCJjYXRjaCIsImVyciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/search.js":
/*!*******************************!*\
  !*** ./src/scripts/search.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction search() {\n  return new Promise((resolve, reject) => {\n    const searchForm = document.querySelector('.search-bar');\n    searchForm.addEventListener('submit', e => {\n      e.preventDefault();\n      // searchForm.classList.add('hidden');\n      let url = document.querySelector('.search-bar input').value;\n      let res;\n      if (url.includes('https://www.youtube.com/watch?v=')) {\n        const startIndex = url.indexOf(\"v=\") + 2;\n        const videoId = url.slice(startIndex);\n        res = videoId; // can make an object\n\n        const outer = document.querySelector('.youtube-search');\n\n        // outer.classList.add(('hidden'));\n        outer.remove();\n      } else {\n        res = \"not valid url\";\n      }\n      resolve(res);\n    });\n  });\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (search);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zZWFyY2guanMiLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVNBLE1BQU1BLENBQUEsRUFBRTtFQUNiLE9BQU8sSUFBSUMsT0FBTyxDQUFDLENBQUNDLE9BQU8sRUFBRUMsTUFBTSxLQUFLO0lBQ3BDLE1BQU1DLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDO0lBRXhERixVQUFVLENBQUNHLGdCQUFnQixDQUFDLFFBQVEsRUFBR0MsQ0FBQyxJQUFLO01BQ3pDQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BQ2xCO01BQ0EsSUFBSUMsR0FBRyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDSyxLQUFLO01BRTNELElBQUlDLEdBQUc7TUFDUCxJQUFJRixHQUFHLENBQUNHLFFBQVEsQ0FBQyxrQ0FBa0MsQ0FBQyxFQUFDO1FBRWpELE1BQU1DLFVBQVUsR0FBR0osR0FBRyxDQUFDSyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUN4QyxNQUFNQyxPQUFPLEdBQUdOLEdBQUcsQ0FBQ08sS0FBSyxDQUFDSCxVQUFVLENBQUM7UUFDckNGLEdBQUcsR0FBR0ksT0FBTyxDQUFDLENBQUM7O1FBR2YsTUFBTUUsS0FBSyxHQUFHYixRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQzs7UUFFdkQ7UUFDQVksS0FBSyxDQUFDQyxNQUFNLENBQUMsQ0FBQztNQUVsQixDQUFDLE1BQUs7UUFDRlAsR0FBRyxHQUFHLGVBQWU7TUFDekI7TUFDQVYsT0FBTyxDQUFDVSxHQUFHLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ047QUFJQSwrREFBZVosTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3RleHRpZnkvLi9zcmMvc2NyaXB0cy9zZWFyY2guanM/OWYxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzZWFyY2goKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1iYXInKTtcblxuICAgICAgICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBzZWFyY2hGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgbGV0IHVybCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmFyIGlucHV0JykudmFsdWU7XG5cbiAgICAgICAgICAgIGxldCByZXM7XG4gICAgICAgICAgICBpZiAodXJsLmluY2x1ZGVzKCdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PScpKXtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSB1cmwuaW5kZXhPZihcInY9XCIpICsgMjtcbiAgICAgICAgICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLnNsaWNlKHN0YXJ0SW5kZXgpO1xuICAgICAgICAgICAgICAgIHJlcyA9IHZpZGVvSWQ7IC8vIGNhbiBtYWtlIGFuIG9iamVjdFxuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy55b3V0dWJlLXNlYXJjaCcpO1xuXG4gICAgICAgICAgICAgICAgLy8gb3V0ZXIuY2xhc3NMaXN0LmFkZCgoJ2hpZGRlbicpKTtcbiAgICAgICAgICAgICAgICBvdXRlci5yZW1vdmUoKTtcblxuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcyA9IFwibm90IHZhbGlkIHVybFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDsiXSwibmFtZXMiOlsic2VhcmNoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZWFyY2hGb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVybCIsInZhbHVlIiwicmVzIiwiaW5jbHVkZXMiLCJzdGFydEluZGV4IiwiaW5kZXhPZiIsInZpZGVvSWQiLCJzbGljZSIsIm91dGVyIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/search.js\n");

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