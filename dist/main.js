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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/search.js */ \"./src/scripts/search.js\");\n/* harmony import */ var _scripts_textBox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/textBox.js */ \"./src/scripts/textBox.js\");\n// import Gpt from './scripts/gpt.js';\n\n\n//import getTranscript from './scripts/getTranscript.js'; //? refactor to use this\n\nconst title = document.querySelector('.container h1');\n\n// textBox();\n\n// Gpt();\n//!\n// fetch('http://localhost:5001/extract/r7zThgJAAPg')\n//   .then(response => response.text())\n//   .then(data => {\n//     console.log(\"transcript: \\n\", data);\n//     // call your function to process data\n//     textBox(data);\n//   })\n//   .catch(err => console.error('Error:', err));\n\n//? fetch(`http://localhost:5001/extract/r7zThgJAAPg`)\n//   .then(script => {\n//       // script.json()}) \n//       console.log(script, \"1\")\n//       // console.log(script.ok, \"2\")\n//       // console.log(script.fullText, \"2\")\n//     .then(data => { \n//       // console.log(\"full text here?\",data);\n//       console.log(\"full text here?\",data)})\n//     .then(data => { \n//         // title.classList.add('found')\n//         // console.log(data)\n//         // textBox(\"hello!\");\n//         textBox(data.fullText);\n//         // AiEditbar();\n//         console.log(\"transcript: \\n\", data.fullText);\n//   })\n\n//!works\n(0,_scripts_search_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(res => {\n  fetch(`http://localhost:5001/extract/${res[1]}`).then(response => response.text()).then(data => {\n    console.log(\"transcript: \\n\", data);\n    // call your function to process data\n    (0,_scripts_textBox_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\n  }).catch(err => {\n    console.error('Something went wrong with the fetch: ', err);\n  });\n}).catch(error => {\n  // catching search errors\n  console.error(\"something is wrong with the url message\", error);\n});\n\n//? refactor to use this\n// Search()\n//   .then(videoID => getTranscript(videoID[2]))\n//   .then(transcript => console.log(transcript))\n//   .catch(error => console.error(\"Error: \", error));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDeUM7QUFDRTtBQUMzQzs7QUFFQSxNQUFNRSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQzs7QUFFckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBSiw4REFBTSxDQUFDLENBQUMsQ0FBQ0ssSUFBSSxDQUFFQyxHQUFHLElBQUs7RUFDckJDLEtBQUssQ0FBRSxpQ0FBZ0NELEdBQUcsQ0FBQyxDQUFDLENBQUUsRUFBQyxDQUFDLENBQy9DRCxJQUFJLENBQUNHLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ2pDSixJQUFJLENBQUNLLElBQUksSUFBSTtJQUNaQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRUYsSUFBSSxDQUFDO0lBQ25DO0lBQ0FULCtEQUFPLENBQUNTLElBQUksQ0FBQztFQUNmLENBQUMsQ0FBQyxDQUNERyxLQUFLLENBQUNDLEdBQUcsSUFBSTtJQUNaSCxPQUFPLENBQUNJLEtBQUssQ0FBQyx1Q0FBdUMsRUFBRUQsR0FBRyxDQUFDO0VBQUEsQ0FBQyxDQUFDO0FBQ2pFLENBQUMsQ0FBQyxDQUNERCxLQUFLLENBQUVFLEtBQUssSUFBSztFQUFNO0VBQ3BCSixPQUFPLENBQUNJLEtBQUssQ0FBQyx5Q0FBeUMsRUFBRUEsS0FBSyxDQUFDO0FBQ25FLENBQUMsQ0FBQzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGV4dGlmeS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBHcHQgZnJvbSAnLi9zY3JpcHRzL2dwdC5qcyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vc2NyaXB0cy9zZWFyY2guanMnO1xuaW1wb3J0IHRleHRCb3ggZnJvbSAnLi9zY3JpcHRzL3RleHRCb3guanMnO1xuLy9pbXBvcnQgZ2V0VHJhbnNjcmlwdCBmcm9tICcuL3NjcmlwdHMvZ2V0VHJhbnNjcmlwdC5qcyc7IC8vPyByZWZhY3RvciB0byB1c2UgdGhpc1xuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXIgaDEnKVxuXG4vLyB0ZXh0Qm94KCk7XG5cbi8vIEdwdCgpO1xuLy8hXG4vLyBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAxL2V4dHJhY3Qvcjd6VGhnSkFBUGcnKVxuLy8gICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG4vLyAgIC50aGVuKGRhdGEgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKFwidHJhbnNjcmlwdDogXFxuXCIsIGRhdGEpO1xuLy8gICAgIC8vIGNhbGwgeW91ciBmdW5jdGlvbiB0byBwcm9jZXNzIGRhdGFcbi8vICAgICB0ZXh0Qm94KGRhdGEpO1xuLy8gICB9KVxuLy8gICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycikpO1xuXG5cbi8vPyBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo1MDAxL2V4dHJhY3Qvcjd6VGhnSkFBUGdgKVxuLy8gICAudGhlbihzY3JpcHQgPT4ge1xuLy8gICAgICAgLy8gc2NyaXB0Lmpzb24oKX0pIFxuLy8gICAgICAgY29uc29sZS5sb2coc2NyaXB0LCBcIjFcIilcbi8vICAgICAgIC8vIGNvbnNvbGUubG9nKHNjcmlwdC5vaywgXCIyXCIpXG4vLyAgICAgICAvLyBjb25zb2xlLmxvZyhzY3JpcHQuZnVsbFRleHQsIFwiMlwiKVxuLy8gICAgIC50aGVuKGRhdGEgPT4geyBcbi8vICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZnVsbCB0ZXh0IGhlcmU/XCIsZGF0YSk7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcImZ1bGwgdGV4dCBoZXJlP1wiLGRhdGEpfSlcbi8vICAgICAudGhlbihkYXRhID0+IHsgXG4vLyAgICAgICAgIC8vIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2ZvdW5kJylcbi8vICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbi8vICAgICAgICAgLy8gdGV4dEJveChcImhlbGxvIVwiKTtcbi8vICAgICAgICAgdGV4dEJveChkYXRhLmZ1bGxUZXh0KTtcbi8vICAgICAgICAgLy8gQWlFZGl0YmFyKCk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNjcmlwdDogXFxuXCIsIGRhdGEuZnVsbFRleHQpO1xuLy8gICB9KVxuXG4vLyF3b3Jrc1xuU2VhcmNoKCkudGhlbigocmVzKSA9PiB7XG4gIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDEvZXh0cmFjdC8ke3Jlc1sxXX1gKVxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG4gIC50aGVuKGRhdGEgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwidHJhbnNjcmlwdDogXFxuXCIsIGRhdGEpO1xuICAgIC8vIGNhbGwgeW91ciBmdW5jdGlvbiB0byBwcm9jZXNzIGRhdGFcbiAgICB0ZXh0Qm94KGRhdGEpO1xuICB9KVxuICAuY2F0Y2goZXJyID0+IHtcbiAgICBjb25zb2xlLmVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIHRoZSBmZXRjaDogJywgZXJyKX0pO1xufSlcbi5jYXRjaCgoZXJyb3IpID0+IHsgICAgIC8vIGNhdGNoaW5nIHNlYXJjaCBlcnJvcnNcbiAgICBjb25zb2xlLmVycm9yKFwic29tZXRoaW5nIGlzIHdyb25nIHdpdGggdGhlIHVybCBtZXNzYWdlXCIsIGVycm9yKTtcbn0pXG5cblxuLy8/IHJlZmFjdG9yIHRvIHVzZSB0aGlzXG4vLyBTZWFyY2goKVxuLy8gICAudGhlbih2aWRlb0lEID0+IGdldFRyYW5zY3JpcHQodmlkZW9JRFsyXSkpXG4vLyAgIC50aGVuKHRyYW5zY3JpcHQgPT4gY29uc29sZS5sb2codHJhbnNjcmlwdCkpXG4vLyAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6IFwiLCBlcnJvcikpO1xuIl0sIm5hbWVzIjpbIlNlYXJjaCIsInRleHRCb3giLCJ0aXRsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRoZW4iLCJyZXMiLCJmZXRjaCIsInJlc3BvbnNlIiwidGV4dCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/search.js":
/*!*******************************!*\
  !*** ./src/scripts/search.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction search() {\n  return new Promise((resolve, reject) => {\n    const searchForm = document.querySelector('.search-bar');\n    searchForm.addEventListener('submit', e => {\n      e.preventDefault();\n      // searchForm.classList.add('hidden');\n      const url = document.querySelector('.search-bar input').value;\n\n      // let videoId\n      let res;\n      if (url.includes('https://www.youtube.com/watch?v=')) {\n        const startIndex = url.indexOf(\"v=\") + 2;\n        const videoId = url.slice(startIndex);\n\n        // console.log(videoId, \"video id is\");\n\n        res = [url, videoId];\n\n        // const attentionBlock = document.querySelector('.container');\n        // attentionBlock.classList.active = true;\n\n        const outer = document.querySelector('.youtube-search');\n        const inner = document.querySelector('.search-bar');\n        outer.classList.add('hidden');\n        inner.classList.remove('search-bar');\n        outer.classList.remove('youtube-search');\n      } else {\n        res = \"not valid url\";\n        // videoId = \"not a valid url\"\n      }\n\n      resolve(res);\n      // resolve(videoId)\n    });\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (search);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zZWFyY2guanMiLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVNBLE1BQU1BLENBQUEsRUFBRTtFQUNiLE9BQU8sSUFBSUMsT0FBTyxDQUFDLENBQUNDLE9BQU8sRUFBRUMsTUFBTSxLQUFLO0lBQ3BDLE1BQU1DLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDO0lBRXhERixVQUFVLENBQUNHLGdCQUFnQixDQUFDLFFBQVEsRUFBR0MsQ0FBQyxJQUFLO01BQ3pDQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BQ2xCO01BQ0EsTUFBTUMsR0FBRyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDSyxLQUFLOztNQUU3RDtNQUNBLElBQUlDLEdBQUc7TUFDUCxJQUFJRixHQUFHLENBQUNHLFFBQVEsQ0FBQyxrQ0FBa0MsQ0FBQyxFQUFDO1FBR2pELE1BQU1DLFVBQVUsR0FBR0osR0FBRyxDQUFDSyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUN4QyxNQUFNQyxPQUFPLEdBQUdOLEdBQUcsQ0FBQ08sS0FBSyxDQUFDSCxVQUFVLENBQUM7O1FBRXJDOztRQUVBRixHQUFHLEdBQUcsQ0FBQ0YsR0FBRyxFQUFFTSxPQUFPLENBQUM7O1FBRXBCO1FBQ0E7O1FBRUEsTUFBTUUsS0FBSyxHQUFHYixRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztRQUN2RCxNQUFNYSxLQUFLLEdBQUdkLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUduRFksS0FBSyxDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBRSxRQUFTLENBQUM7UUFDL0JGLEtBQUssQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUUsWUFBYSxDQUFDO1FBQ3RDSixLQUFLLENBQUNFLFNBQVMsQ0FBQ0UsTUFBTSxDQUFFLGdCQUFpQixDQUFDO01BRTlDLENBQUMsTUFBSztRQUNGVixHQUFHLEdBQUcsZUFBZTtRQUNyQjtNQUNKOztNQUNBVixPQUFPLENBQUNVLEdBQUcsQ0FBQztNQUNaO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ047O0FBSUEsK0RBQWVaLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0aWZ5Ly4vc3JjL3NjcmlwdHMvc2VhcmNoLmpzPzlmMTYiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2VhcmNoKCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmFyJyk7XG5cbiAgICAgICAgc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gc2VhcmNoRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmFyIGlucHV0JykudmFsdWU7XG5cbiAgICAgICAgICAgIC8vIGxldCB2aWRlb0lkXG4gICAgICAgICAgICBsZXQgcmVzO1xuICAgICAgICAgICAgaWYgKHVybC5pbmNsdWRlcygnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0nKSl7XG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSB1cmwuaW5kZXhPZihcInY9XCIpICsgMjtcbiAgICAgICAgICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLnNsaWNlKHN0YXJ0SW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmlkZW9JZCwgXCJ2aWRlbyBpZCBpc1wiKTtcblxuICAgICAgICAgICAgICAgIHJlcyA9IFt1cmwsIHZpZGVvSWRdO1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgYXR0ZW50aW9uQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgLy8gYXR0ZW50aW9uQmxvY2suY2xhc3NMaXN0LmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy55b3V0dWJlLXNlYXJjaCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1iYXInKTtcblxuXG4gICAgICAgICAgICAgICAgb3V0ZXIuY2xhc3NMaXN0LmFkZCgoJ2hpZGRlbicpKTtcbiAgICAgICAgICAgICAgICBpbm5lci5jbGFzc0xpc3QucmVtb3ZlKCgnc2VhcmNoLWJhcicpKTtcbiAgICAgICAgICAgICAgICBvdXRlci5jbGFzc0xpc3QucmVtb3ZlKCgneW91dHViZS1zZWFyY2gnKSk7XG5cbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICByZXMgPSBcIm5vdCB2YWxpZCB1cmxcIjtcbiAgICAgICAgICAgICAgICAvLyB2aWRlb0lkID0gXCJub3QgYSB2YWxpZCB1cmxcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAgICAgLy8gcmVzb2x2ZSh2aWRlb0lkKVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDsiXSwibmFtZXMiOlsic2VhcmNoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZWFyY2hGb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVybCIsInZhbHVlIiwicmVzIiwiaW5jbHVkZXMiLCJzdGFydEluZGV4IiwiaW5kZXhPZiIsInZpZGVvSWQiLCJzbGljZSIsIm91dGVyIiwiaW5uZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/search.js\n");

/***/ }),

/***/ "./src/scripts/textBox.js":
/*!********************************!*\
  !*** ./src/scripts/textBox.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction textBox(text) {\n  const jsContainer = document.querySelector('.js-container');\n  let textBlock = document.createElement('div');\n  textBlock.classList.add('text-block');\n  jsContainer.append(textBlock);\n  // document.append(textBlock);\n\n  let title = document.createElement('div');\n  title.classList.add('title');\n  textBlock.append(title);\n  let scrollBox = document.createElement('div');\n  scrollBox.classList.add('scrollbox');\n  textBlock.append(scrollBox);\n  let heading = document.createElement('h2');\n  heading.innerHTML = \"Full Transcript:\";\n  title.append(heading);\n  let innerScroll = document.createElement('div');\n  innerScroll.classList.add('scrollbox-inner');\n  scrollBox.append(innerScroll);\n  let textBody = document.createElement('p');\n  textBody.innerHTML = `${text}`;\n  innerScroll.append(textBody);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (textBox);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90ZXh0Qm94LmpzIiwibWFwcGluZ3MiOiI7QUFDQSxTQUFTQSxPQUFPQSxDQUFDQyxJQUFJLEVBQUM7RUFFbEIsTUFBTUMsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUM7RUFFM0QsSUFBSUMsU0FBUyxHQUFHRixRQUFRLENBQUNHLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDN0NELFNBQVMsQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO0VBRXJDTixXQUFXLENBQUNPLE1BQU0sQ0FBQ0osU0FBUyxDQUFDO0VBQzdCOztFQUVBLElBQUlLLEtBQUssR0FBR1AsUUFBUSxDQUFDRyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3pDSSxLQUFLLENBQUNILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztFQUM1QkgsU0FBUyxDQUFDSSxNQUFNLENBQUNDLEtBQUssQ0FBQztFQUV2QixJQUFJQyxTQUFTLEdBQUdSLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM3Q0ssU0FBUyxDQUFDSixTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7RUFDcENILFNBQVMsQ0FBQ0ksTUFBTSxDQUFDRSxTQUFTLENBQUM7RUFHM0IsSUFBSUMsT0FBTyxHQUFHVCxRQUFRLENBQUNHLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDMUNNLE9BQU8sQ0FBQ0MsU0FBUyxHQUFHLGtCQUFrQjtFQUV0Q0gsS0FBSyxDQUFDRCxNQUFNLENBQUNHLE9BQU8sQ0FBQztFQUVyQixJQUFJRSxXQUFXLEdBQUdYLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLEtBQUssQ0FBQztFQUMvQ1EsV0FBVyxDQUFDUCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztFQUU1Q0csU0FBUyxDQUFDRixNQUFNLENBQUNLLFdBQVcsQ0FBQztFQUU3QixJQUFJQyxRQUFRLEdBQUdaLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUMxQ1MsUUFBUSxDQUFDRixTQUFTLEdBQUksR0FBRVosSUFBSyxFQUFDO0VBRTlCYSxXQUFXLENBQUNMLE1BQU0sQ0FBQ00sUUFBUSxDQUFDO0FBR2hDO0FBRUEsK0RBQWVmLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0aWZ5Ly4vc3JjL3NjcmlwdHMvdGV4dEJveC5qcz82NjM2Il0sInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gdGV4dEJveCh0ZXh0KXtcblxuICAgIGNvbnN0IGpzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWNvbnRhaW5lcicpO1xuICAgIFxuICAgIGxldCB0ZXh0QmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0QmxvY2suY2xhc3NMaXN0LmFkZCgndGV4dC1ibG9jaycpO1xuICAgIFxuICAgIGpzQ29udGFpbmVyLmFwcGVuZCh0ZXh0QmxvY2spO1xuICAgIC8vIGRvY3VtZW50LmFwcGVuZCh0ZXh0QmxvY2spO1xuICAgIFxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgdGV4dEJsb2NrLmFwcGVuZCh0aXRsZSlcblxuICAgIGxldCBzY3JvbGxCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY3JvbGxCb3guY2xhc3NMaXN0LmFkZCgnc2Nyb2xsYm94Jyk7XG4gICAgdGV4dEJsb2NrLmFwcGVuZChzY3JvbGxCb3gpO1xuICAgIFxuICAgIFxuICAgIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nLmlubmVySFRNTCA9IFwiRnVsbCBUcmFuc2NyaXB0OlwiO1xuICAgIFxuICAgIHRpdGxlLmFwcGVuZChoZWFkaW5nKTtcbiAgICBcbiAgICBsZXQgaW5uZXJTY3JvbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbm5lclNjcm9sbC5jbGFzc0xpc3QuYWRkKCdzY3JvbGxib3gtaW5uZXInKTtcbiAgICBcbiAgICBzY3JvbGxCb3guYXBwZW5kKGlubmVyU2Nyb2xsKTtcbiAgICBcbiAgICBsZXQgdGV4dEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dEJvZHkuaW5uZXJIVE1MID0gYCR7dGV4dH1gO1xuICAgIFxuICAgIGlubmVyU2Nyb2xsLmFwcGVuZCh0ZXh0Qm9keSk7XG5cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGV4dEJveDsiXSwibmFtZXMiOlsidGV4dEJveCIsInRleHQiLCJqc0NvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRCbG9jayIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmQiLCJ0aXRsZSIsInNjcm9sbEJveCIsImhlYWRpbmciLCJpbm5lckhUTUwiLCJpbm5lclNjcm9sbCIsInRleHRCb2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/textBox.js\n");

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