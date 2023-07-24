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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/search.js */ \"./src/scripts/search.js\");\n/* harmony import */ var _scripts_textBox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/textBox.js */ \"./src/scripts/textBox.js\");\n// import Gpt from './scripts/gpt.js';\n\n\n//import getTranscript from './scripts/getTranscript.js'; //? refactor to use this\n\nconst title = document.querySelector('.container h1');\n\n// textBox();\n\n//!works\n(0,_scripts_search_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(res => {\n  console.log(\"video ID is: \", res[1]);\n  fetch(`http://localhost:5001/transcript/${res[1]}`).then(transcript => transcript.json()) // You need to parse the response as JSON\n  // .then(data => { console.log(data.fullText);\n  .then(data => {\n    title.classList.add('found');\n    (0,_scripts_textBox_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.fullText);\n    console.log(data.fullText);\n  }).catch(err => {\n    console.error('Error: ', err);\n  });\n}).catch(error => {\n  console.error(\"something is wrong with the url message\", error);\n});\n\n//? refactor to use this\n// Search()\n//   .then(videoID => getTranscript(videoID[2]))\n//   .then(transcript => console.log(transcript))\n//   .catch(error => console.error(\"Error: \", error));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDeUM7QUFDRTtBQUMzQzs7QUFFQSxNQUFNRSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQzs7QUFFckQ7O0FBRUE7QUFDQUosOERBQU0sQ0FBQyxDQUFDLENBQUNLLElBQUksQ0FBRUMsR0FBRyxJQUFLO0VBQ25CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLEVBQUVGLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQ0csS0FBSyxDQUFFLG9DQUFtQ0gsR0FBRyxDQUFDLENBQUMsQ0FBRSxFQUFDLENBQUMsQ0FDbERELElBQUksQ0FBQ0ssVUFBVSxJQUFJQSxVQUFVLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN2QztFQUFBLENBQ0NOLElBQUksQ0FBQ08sSUFBSSxJQUFJO0lBQ1ZWLEtBQUssQ0FBQ1csU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQzVCYiwrREFBTyxDQUFDVyxJQUFJLENBQUNHLFFBQVEsQ0FBQztJQUN0QlIsT0FBTyxDQUFDQyxHQUFHLENBQUNJLElBQUksQ0FBQ0csUUFBUSxDQUFDO0VBQ2hDLENBQUMsQ0FBQyxDQUNEQyxLQUFLLENBQUNDLEdBQUcsSUFBSTtJQUNaVixPQUFPLENBQUNXLEtBQUssQ0FBQyxTQUFTLEVBQUVELEdBQUcsQ0FBQztFQUMvQixDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQ0QsS0FBSyxDQUFFRSxLQUFLLElBQUs7RUFDaEJYLE9BQU8sQ0FBQ1csS0FBSyxDQUFDLHlDQUF5QyxFQUFFQSxLQUFLLENBQUM7QUFDbkUsQ0FBQyxDQUFDOztBQUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0aWZ5Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEdwdCBmcm9tICcuL3NjcmlwdHMvZ3B0LmpzJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9zY3JpcHRzL3NlYXJjaC5qcyc7XG5pbXBvcnQgdGV4dEJveCBmcm9tICcuL3NjcmlwdHMvdGV4dEJveC5qcyc7XG4vL2ltcG9ydCBnZXRUcmFuc2NyaXB0IGZyb20gJy4vc2NyaXB0cy9nZXRUcmFuc2NyaXB0LmpzJzsgLy8/IHJlZmFjdG9yIHRvIHVzZSB0aGlzXG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lciBoMScpXG5cbi8vIHRleHRCb3goKTtcblxuLy8hd29ya3NcblNlYXJjaCgpLnRoZW4oKHJlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwidmlkZW8gSUQgaXM6IFwiLCByZXNbMV0pXG4gICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMS90cmFuc2NyaXB0LyR7cmVzWzFdfWApXG4gICAgLnRoZW4odHJhbnNjcmlwdCA9PiB0cmFuc2NyaXB0Lmpzb24oKSkgLy8gWW91IG5lZWQgdG8gcGFyc2UgdGhlIHJlc3BvbnNlIGFzIEpTT05cbiAgICAvLyAudGhlbihkYXRhID0+IHsgY29uc29sZS5sb2coZGF0YS5mdWxsVGV4dCk7XG4gICAgLnRoZW4oZGF0YSA9PiB7IFxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdmb3VuZCcpXG4gICAgICAgIHRleHRCb3goZGF0YS5mdWxsVGV4dCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZnVsbFRleHQpO1xuICB9KVxuICAuY2F0Y2goZXJyID0+IHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvcjogJywgZXJyKTtcbiAgfSk7XG59KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFwic29tZXRoaW5nIGlzIHdyb25nIHdpdGggdGhlIHVybCBtZXNzYWdlXCIsIGVycm9yKTtcbn0pXG5cblxuLy8/IHJlZmFjdG9yIHRvIHVzZSB0aGlzXG4vLyBTZWFyY2goKVxuLy8gICAudGhlbih2aWRlb0lEID0+IGdldFRyYW5zY3JpcHQodmlkZW9JRFsyXSkpXG4vLyAgIC50aGVuKHRyYW5zY3JpcHQgPT4gY29uc29sZS5sb2codHJhbnNjcmlwdCkpXG4vLyAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6IFwiLCBlcnJvcikpO1xuIl0sIm5hbWVzIjpbIlNlYXJjaCIsInRleHRCb3giLCJ0aXRsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0cmFuc2NyaXB0IiwianNvbiIsImRhdGEiLCJjbGFzc0xpc3QiLCJhZGQiLCJmdWxsVGV4dCIsImNhdGNoIiwiZXJyIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/search.js":
/*!*******************************!*\
  !*** ./src/scripts/search.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction search() {\n  return new Promise((resolve, reject) => {\n    const searchForm = document.querySelector('.search-bar');\n    searchForm.addEventListener('submit', e => {\n      e.preventDefault();\n      // searchForm.classList.add('hidden');\n      const url = document.querySelector('.search-bar input').value;\n\n      // let videoId\n      let res;\n      if (url.includes('https://www.youtube.com/watch?v=')) {\n        const startIndex = url.indexOf(\"v=\") + 2;\n        const videoId = url.slice(startIndex);\n        console.log(videoId, \"video id is\");\n        res = [url, videoId];\n        const outer = document.querySelector('.youtube-search');\n\n        // outer.classList.add(('hidden'));\n        outer.remove();\n      } else {\n        res = \"not valid url\";\n        // videoId = \"not a valid url\"\n      }\n\n      resolve(res);\n      // resolve(videoId)\n    });\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (search);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zZWFyY2guanMiLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVNBLE1BQU1BLENBQUEsRUFBRTtFQUNiLE9BQU8sSUFBSUMsT0FBTyxDQUFDLENBQUNDLE9BQU8sRUFBRUMsTUFBTSxLQUFLO0lBQ3BDLE1BQU1DLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDO0lBRXhERixVQUFVLENBQUNHLGdCQUFnQixDQUFDLFFBQVEsRUFBR0MsQ0FBQyxJQUFLO01BQ3pDQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BQ2xCO01BQ0EsTUFBTUMsR0FBRyxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDSyxLQUFLOztNQUU3RDtNQUNBLElBQUlDLEdBQUc7TUFDUCxJQUFJRixHQUFHLENBQUNHLFFBQVEsQ0FBQyxrQ0FBa0MsQ0FBQyxFQUFDO1FBR2pELE1BQU1DLFVBQVUsR0FBR0osR0FBRyxDQUFDSyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUN4QyxNQUFNQyxPQUFPLEdBQUdOLEdBQUcsQ0FBQ08sS0FBSyxDQUFDSCxVQUFVLENBQUM7UUFFckNJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxPQUFPLEVBQUUsYUFBYSxDQUFDO1FBRW5DSixHQUFHLEdBQUcsQ0FBQ0YsR0FBRyxFQUFFTSxPQUFPLENBQUM7UUFJcEIsTUFBTUksS0FBSyxHQUFHZixRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQzs7UUFFdkQ7UUFDQWMsS0FBSyxDQUFDQyxNQUFNLENBQUMsQ0FBQztNQUVsQixDQUFDLE1BQUs7UUFDRlQsR0FBRyxHQUFHLGVBQWU7UUFDckI7TUFDSjs7TUFDQVYsT0FBTyxDQUFDVSxHQUFHLENBQUM7TUFDWjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUNOOztBQUlBLCtEQUFlWixNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGV4dGlmeS8uL3NyYy9zY3JpcHRzL3NlYXJjaC5qcz85ZjE2Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNlYXJjaCgpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJhcicpO1xuXG4gICAgICAgIHNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIHNlYXJjaEZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJhciBpbnB1dCcpLnZhbHVlO1xuXG4gICAgICAgICAgICAvLyBsZXQgdmlkZW9JZFxuICAgICAgICAgICAgbGV0IHJlcztcbiAgICAgICAgICAgIGlmICh1cmwuaW5jbHVkZXMoJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9Jykpe1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gdXJsLmluZGV4T2YoXCJ2PVwiKSArIDI7XG4gICAgICAgICAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5zbGljZShzdGFydEluZGV4KTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZpZGVvSWQsIFwidmlkZW8gaWQgaXNcIik7XG5cbiAgICAgICAgICAgICAgICByZXMgPSBbdXJsLCB2aWRlb0lkXTtcbiAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueW91dHViZS1zZWFyY2gnKTtcblxuICAgICAgICAgICAgICAgIC8vIG91dGVyLmNsYXNzTGlzdC5hZGQoKCdoaWRkZW4nKSk7XG4gICAgICAgICAgICAgICAgb3V0ZXIucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICByZXMgPSBcIm5vdCB2YWxpZCB1cmxcIjtcbiAgICAgICAgICAgICAgICAvLyB2aWRlb0lkID0gXCJub3QgYSB2YWxpZCB1cmxcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAgICAgLy8gcmVzb2x2ZSh2aWRlb0lkKVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDsiXSwibmFtZXMiOlsic2VhcmNoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZWFyY2hGb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVybCIsInZhbHVlIiwicmVzIiwiaW5jbHVkZXMiLCJzdGFydEluZGV4IiwiaW5kZXhPZiIsInZpZGVvSWQiLCJzbGljZSIsImNvbnNvbGUiLCJsb2ciLCJvdXRlciIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/search.js\n");

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