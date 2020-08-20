webpackHotUpdate_N_E("pages/index",{

/***/ "./www/shared/utils/browsers.js":
/*!**************************************!*\
  !*** ./www/shared/utils/browsers.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* eslint-disable */
// CODE FROM: https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
// Opera 8.0+
var isOpera = () => !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0; // Firefox 1.0+


var isFirefox = () => typeof InstallTrigger !== 'undefined'; // Safari 3.0+ "[object HTMLElementConstructor]" 


var isSafari = () => /constructor/i.test(window.HTMLElement) || function (p) {
  return p.toString() === "[object SafariRemoteNotification]";
}(!window['safari'] || typeof safari !== 'undefined' && safari.pushNotification); // Internet Explorer 6-11


var isIE = () =>
/*@cc_on!@*/
 false || !!document.documentMode; // Edge 20+


var isEdge = () => !isIE && !!window.StyleMedia; // Chrome 1 - 79


var isChrome = () => !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime); // Edge (based on chromium) detection


var isEdgeChromium = () => isChrome && navigator.userAgent.indexOf("Edg") != -1; // Blink engine detection


var isBlink = () => (isChrome || isOpera) && !!window.CSS;

const browser = {
  isOpera,
  isFirefox,
  isSafari,
  isIE,
  isEdge,
  isChrome,
  isEdgeChromium,
  isBlink
};
/* harmony default export */ __webpack_exports__["default"] = (browser);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./www/shared/utils/index.js":
/*!***********************************!*\
  !*** ./www/shared/utils/index.js ***!
  \***********************************/
/*! exports provided: getRangePercentage, getRangeValue, browsers, changeStyle, useForceUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _get_range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-range */ "./www/shared/utils/get-range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRangePercentage", function() { return _get_range__WEBPACK_IMPORTED_MODULE_0__["getRangePercentage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRangeValue", function() { return _get_range__WEBPACK_IMPORTED_MODULE_0__["getRangeValue"]; });

/* harmony import */ var _browsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browsers */ "./www/shared/utils/browsers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "browsers", function() { return _browsers__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _change_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-style */ "./www/shared/utils/change-style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changeStyle", function() { return _change_style__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _useForceUpdate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useForceUpdate */ "./www/shared/utils/useForceUpdate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useForceUpdate", function() { return _useForceUpdate__WEBPACK_IMPORTED_MODULE_3__["default"]; });






;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3NoYXJlZC91dGlscy9icm93c2Vycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3NoYXJlZC91dGlscy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpc09wZXJhIiwid2luZG93Iiwib3ByIiwiYWRkb25zIiwib3BlcmEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwiaXNGaXJlZm94IiwiSW5zdGFsbFRyaWdnZXIiLCJpc1NhZmFyaSIsInRlc3QiLCJIVE1MRWxlbWVudCIsInAiLCJ0b1N0cmluZyIsInNhZmFyaSIsInB1c2hOb3RpZmljYXRpb24iLCJpc0lFIiwiZG9jdW1lbnQiLCJkb2N1bWVudE1vZGUiLCJpc0VkZ2UiLCJTdHlsZU1lZGlhIiwiaXNDaHJvbWUiLCJjaHJvbWUiLCJ3ZWJzdG9yZSIsInJ1bnRpbWUiLCJpc0VkZ2VDaHJvbWl1bSIsImlzQmxpbmsiLCJDU1MiLCJicm93c2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQSxJQUFJQSxPQUFPLEdBQUcsTUFBTyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsR0FBVCxJQUFnQixDQUFDLENBQUNBLEdBQUcsQ0FBQ0MsTUFBdkIsSUFBa0MsQ0FBQyxDQUFDRixNQUFNLENBQUNHLEtBQTNDLElBQW9EQyxTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLE9BQXBCLENBQTRCLE9BQTVCLEtBQXdDLENBQWhILEMsQ0FFQTs7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHLE1BQU0sT0FBT0MsY0FBUCxLQUEwQixXQUFoRCxDLENBRUE7OztBQUNBLElBQUlDLFFBQVEsR0FBRyxNQUFNLGVBQWVDLElBQWYsQ0FBb0JWLE1BQU0sQ0FBQ1csV0FBM0IsS0FBNEMsVUFBVUMsQ0FBVixFQUFhO0FBQUUsU0FBT0EsQ0FBQyxDQUFDQyxRQUFGLE9BQWlCLG1DQUF4QjtBQUE4RCxDQUE5RSxDQUFnRixDQUFDYixNQUFNLENBQUMsUUFBRCxDQUFQLElBQXNCLE9BQU9jLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUNBLE1BQU0sQ0FBQ0MsZ0JBQTlJLENBQWhFLEMsQ0FFQTs7O0FBQ0EsSUFBSUMsSUFBSSxHQUFHO0FBQU07QUFBWSxNQUFLLElBQUksQ0FBQyxDQUFDQyxRQUFRLENBQUNDLFlBQWpELEMsQ0FFQTs7O0FBQ0EsSUFBSUMsTUFBTSxHQUFHLE1BQU0sQ0FBQ0gsSUFBRCxJQUFTLENBQUMsQ0FBQ2hCLE1BQU0sQ0FBQ29CLFVBQXJDLEMsQ0FFQTs7O0FBQ0EsSUFBSUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDckIsTUFBTSxDQUFDc0IsTUFBVCxLQUFvQixDQUFDLENBQUN0QixNQUFNLENBQUNzQixNQUFQLENBQWNDLFFBQWhCLElBQTRCLENBQUMsQ0FBQ3ZCLE1BQU0sQ0FBQ3NCLE1BQVAsQ0FBY0UsT0FBaEUsQ0FBckIsQyxDQUVBOzs7QUFDQSxJQUFJQyxjQUFjLEdBQUcsTUFBTUosUUFBUSxJQUFLakIsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxPQUFwQixDQUE0QixLQUE1QixLQUFzQyxDQUFDLENBQS9FLEMsQ0FFQTs7O0FBQ0EsSUFBSW9CLE9BQU8sR0FBRyxNQUFNLENBQUNMLFFBQVEsSUFBSXRCLE9BQWIsS0FBeUIsQ0FBQyxDQUFDQyxNQUFNLENBQUMyQixHQUF0RDs7QUFHQSxNQUFNQyxPQUFPLEdBQUc7QUFDWjdCLFNBRFk7QUFFWlEsV0FGWTtBQUdaRSxVQUhZO0FBSVpPLE1BSlk7QUFLWkcsUUFMWTtBQU1aRSxVQU5ZO0FBT1pJLGdCQVBZO0FBUVpDO0FBUlksQ0FBaEI7QUFXZUUsc0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMjI5OTgzODI4ODQxYzNmNWIwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIENPREUgRlJPTTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvOTg0NzU4MC9ob3ctdG8tZGV0ZWN0LXNhZmFyaS1jaHJvbWUtaWUtZmlyZWZveC1hbmQtb3BlcmEtYnJvd3NlclxuXG4vLyBPcGVyYSA4LjArXG52YXIgaXNPcGVyYSA9ICgpID0+ICghIXdpbmRvdy5vcHIgJiYgISFvcHIuYWRkb25zKSB8fCAhIXdpbmRvdy5vcGVyYSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJyBPUFIvJykgPj0gMDtcblxuLy8gRmlyZWZveCAxLjArXG52YXIgaXNGaXJlZm94ID0gKCkgPT4gdHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJztcblxuLy8gU2FmYXJpIDMuMCsgXCJbb2JqZWN0IEhUTUxFbGVtZW50Q29uc3RydWN0b3JdXCIgXG52YXIgaXNTYWZhcmkgPSAoKSA9PiAvY29uc3RydWN0b3IvaS50ZXN0KHdpbmRvdy5IVE1MRWxlbWVudCkgfHwgKGZ1bmN0aW9uIChwKSB7IHJldHVybiBwLnRvU3RyaW5nKCkgPT09IFwiW29iamVjdCBTYWZhcmlSZW1vdGVOb3RpZmljYXRpb25dXCI7IH0pKCF3aW5kb3dbJ3NhZmFyaSddIHx8ICh0eXBlb2Ygc2FmYXJpICE9PSAndW5kZWZpbmVkJyAmJiBzYWZhcmkucHVzaE5vdGlmaWNhdGlvbikpO1xuXG4vLyBJbnRlcm5ldCBFeHBsb3JlciA2LTExXG52YXIgaXNJRSA9ICgpID0+IC8qQGNjX29uIUAqL2ZhbHNlIHx8ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xuXG4vLyBFZGdlIDIwK1xudmFyIGlzRWRnZSA9ICgpID0+ICFpc0lFICYmICEhd2luZG93LlN0eWxlTWVkaWE7XG5cbi8vIENocm9tZSAxIC0gNzlcbnZhciBpc0Nocm9tZSA9ICgpID0+ICEhd2luZG93LmNocm9tZSAmJiAoISF3aW5kb3cuY2hyb21lLndlYnN0b3JlIHx8ICEhd2luZG93LmNocm9tZS5ydW50aW1lKTtcblxuLy8gRWRnZSAoYmFzZWQgb24gY2hyb21pdW0pIGRldGVjdGlvblxudmFyIGlzRWRnZUNocm9taXVtID0gKCkgPT4gaXNDaHJvbWUgJiYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkVkZ1wiKSAhPSAtMSk7XG5cbi8vIEJsaW5rIGVuZ2luZSBkZXRlY3Rpb25cbnZhciBpc0JsaW5rID0gKCkgPT4gKGlzQ2hyb21lIHx8IGlzT3BlcmEpICYmICEhd2luZG93LkNTUztcblxuXG5jb25zdCBicm93c2VyID0ge1xuICAgIGlzT3BlcmEsXG4gICAgaXNGaXJlZm94LFxuICAgIGlzU2FmYXJpLFxuICAgIGlzSUUsXG4gICAgaXNFZGdlLFxuICAgIGlzQ2hyb21lLFxuICAgIGlzRWRnZUNocm9taXVtLFxuICAgIGlzQmxpbmssXG59O1xuXG5leHBvcnQgZGVmYXVsdCBicm93c2VyO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9nZXQtcmFuZ2UnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGJyb3dzZXJzIH0gZnJvbSAnLi9icm93c2Vycyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNoYW5nZVN0eWxlIH0gZnJvbSAnLi9jaGFuZ2Utc3R5bGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VGb3JjZVVwZGF0ZSB9IGZyb20gJy4vdXNlRm9yY2VVcGRhdGUnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==