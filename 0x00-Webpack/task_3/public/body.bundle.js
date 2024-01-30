(self["webpackChunktask_3"] = self["webpackChunktask_3"] || []).push([["body"],{

/***/ "./modules/body/body.js":
/*!******************************!*\
  !*** ./modules/body/body.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _body_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body.css */ "./modules/body/body.css");
/* harmony import */ var _body_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_body_css__WEBPACK_IMPORTED_MODULE_0__);

const $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
const _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

$("body").append("<button>Click here to get started</button>");
$("body").append('<p id="count"><p>');

const updateCounter = () => {
  let times = $("#count").html() || 0;
  $("button").on("click", () => {
    times++;
    $("#count").html(`${times} clicks on the button`);
  });
};

_.debounce(updateCounter, 500);
updateCounter();


/***/ }),

/***/ "./modules/body/body.css":
/*!*******************************!*\
  !*** ./modules/body/body.css ***!
  \*******************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/css-loader/dist/cjs.js):\n\nSyntaxError\n\n(2:7) /alx-react/0x00-Webpack/task_3/modules/body/body.css Unknown word\n\n \u001b[90m 1 | \u001b[39m\n\u001b[1m\u001b[31m>\u001b[39m\u001b[22m\u001b[90m 2 | \u001b[39m      import API from \u001b[32m\"!../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\"\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m      \u001b[1m\u001b[31m^\u001b[39m\u001b[22m\n \u001b[90m 3 | \u001b[39m      import domAPI from \u001b[32m\"!../../node_modules/style-loader/dist/runtime/styleDomAPI.js\"\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 4 | \u001b[39m      import insertFn from \u001b[32m\"!../../node_modules/style-loader/dist/runtime/insertBySelector.js\"\u001b[39m\u001b[33m;\u001b[39m\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_lodash_lodash_js"], () => (__webpack_exec__("./modules/body/body.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW9CO0FBQ3BCLFVBQVUsbUJBQU8sQ0FBQyxvREFBUTtBQUMxQixVQUFVLG1CQUFPLENBQUMsK0NBQVE7O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQixHQUFHO0FBQ0g7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2tfMy8uL21vZHVsZXMvYm9keS9ib2R5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vYm9keS5jc3NcIjtcbmNvbnN0ICQgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuY29uc3QgXyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5cbiQoXCJib2R5XCIpLmFwcGVuZChcIjxidXR0b24+Q2xpY2sgaGVyZSB0byBnZXQgc3RhcnRlZDwvYnV0dG9uPlwiKTtcbiQoXCJib2R5XCIpLmFwcGVuZCgnPHAgaWQ9XCJjb3VudFwiPjxwPicpO1xuXG5jb25zdCB1cGRhdGVDb3VudGVyID0gKCkgPT4ge1xuICBsZXQgdGltZXMgPSAkKFwiI2NvdW50XCIpLmh0bWwoKSB8fCAwO1xuICAkKFwiYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRpbWVzKys7XG4gICAgJChcIiNjb3VudFwiKS5odG1sKGAke3RpbWVzfSBjbGlja3Mgb24gdGhlIGJ1dHRvbmApO1xuICB9KTtcbn07XG5cbl8uZGVib3VuY2UodXBkYXRlQ291bnRlciwgNTAwKTtcbnVwZGF0ZUNvdW50ZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==