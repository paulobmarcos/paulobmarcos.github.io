webpackHotUpdate_N_E("pages/index",{

/***/ "./www/shared/hooks/use-viewport/useViewport.js":
/*!******************************************************!*\
  !*** ./www/shared/hooks/use-viewport/useViewport.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


const defaultViewport = {
  width: 1920,
  height: 1080,
  isSquare: false,
  isPortrait: false,
  isLandscape: true,
  isTouch: false
};

const useViewport = () => {
  _s();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultViewport),
        viewport = _useState[0],
        setViewport = _useState[1];

  const handleResize = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    const _window = window,
          innerWidth = _window.innerWidth,
          innerHeight = _window.innerHeight;
    setViewport(viewport => _objectSpread(_objectSpread({}, viewport), {}, {
      width: innerWidth,
      height: innerHeight,
      isSquare: innerWidth === innerHeight,
      isPortrait: innerWidth < innerHeight,
      isLandscape: innerWidth > innerHeight
    }));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.addEventListener('resize', handleResize, {
      passive: true
    });
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize, {
        passive: true
      });
    };
  }, [handleResize]);
  return viewport;
};

_s(useViewport, "nYyZs15uuqWoZ8kh+2c+0VBTzxg=");

/* harmony default export */ __webpack_exports__["default"] = (useViewport);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3NoYXJlZC9ob29rcy91c2Utdmlld3BvcnQvdXNlVmlld3BvcnQuanMiXSwibmFtZXMiOlsiZGVmYXVsdFZpZXdwb3J0Iiwid2lkdGgiLCJoZWlnaHQiLCJpc1NxdWFyZSIsImlzUG9ydHJhaXQiLCJpc0xhbmRzY2FwZSIsImlzVG91Y2giLCJ1c2VWaWV3cG9ydCIsInVzZVN0YXRlIiwidmlld3BvcnQiLCJzZXRWaWV3cG9ydCIsImhhbmRsZVJlc2l6ZSIsInVzZUNhbGxiYWNrIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxlQUFlLEdBQUc7QUFDdEJDLE9BQUssRUFBRSxJQURlO0FBRXRCQyxRQUFNLEVBQUUsSUFGYztBQUd0QkMsVUFBUSxFQUFFLEtBSFk7QUFJdEJDLFlBQVUsRUFBRSxLQUpVO0FBS3RCQyxhQUFXLEVBQUUsSUFMUztBQU10QkMsU0FBTyxFQUFFO0FBTmEsQ0FBeEI7O0FBU0EsTUFBTUMsV0FBVyxHQUFHLE1BQU07QUFBQTs7QUFBQSxvQkFDUUMsc0RBQVEsQ0FBQ1IsZUFBRCxDQURoQjtBQUFBLFFBQ2pCUyxRQURpQjtBQUFBLFFBQ1BDLFdBRE87O0FBR3hCLFFBQU1DLFlBQVksR0FBR0MseURBQVcsQ0FBQyxNQUFNO0FBQUEsb0JBQ0RDLE1BREM7QUFBQSxVQUM3QkMsVUFENkIsV0FDN0JBLFVBRDZCO0FBQUEsVUFDakJDLFdBRGlCLFdBQ2pCQSxXQURpQjtBQUdyQ0wsZUFBVyxDQUFFRCxRQUFELG9DQUNQQSxRQURPO0FBRVZSLFdBQUssRUFBRWEsVUFGRztBQUdWWixZQUFNLEVBQUVhLFdBSEU7QUFJVlosY0FBUSxFQUFFVyxVQUFVLEtBQUtDLFdBSmY7QUFLVlgsZ0JBQVUsRUFBRVUsVUFBVSxHQUFHQyxXQUxmO0FBTVZWLGlCQUFXLEVBQUVTLFVBQVUsR0FBR0M7QUFOaEIsTUFBRCxDQUFYO0FBUUQsR0FYK0IsRUFXN0IsRUFYNkIsQ0FBaEM7QUFhQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RILFVBQU0sQ0FBQ0ksZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NOLFlBQWxDLEVBQWdEO0FBQUVPLGFBQU8sRUFBRTtBQUFYLEtBQWhEO0FBRUFQLGdCQUFZO0FBRVosV0FBTyxNQUFNO0FBQ1hFLFlBQU0sQ0FBQ00sbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNSLFlBQXJDLEVBQW1EO0FBQUVPLGVBQU8sRUFBRTtBQUFYLE9BQW5EO0FBQ0QsS0FGRDtBQUdELEdBUlEsRUFRTixDQUFDUCxZQUFELENBUk0sQ0FBVDtBQVVBLFNBQU9GLFFBQVA7QUFDRCxDQTNCRDs7R0FBTUYsVzs7QUE2QlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVmNDgyM2I2ODY1NmUyMzkxYmNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgZGVmYXVsdFZpZXdwb3J0ID0ge1xuICB3aWR0aDogMTkyMCxcbiAgaGVpZ2h0OiAxMDgwLFxuICBpc1NxdWFyZTogZmFsc2UsXG4gIGlzUG9ydHJhaXQ6IGZhbHNlLFxuICBpc0xhbmRzY2FwZTogdHJ1ZSxcbiAgaXNUb3VjaDogZmFsc2UsXG59O1xuXG5jb25zdCB1c2VWaWV3cG9ydCA9ICgpID0+IHtcbiAgY29uc3QgW3ZpZXdwb3J0LCBzZXRWaWV3cG9ydF0gPSB1c2VTdGF0ZShkZWZhdWx0Vmlld3BvcnQpO1xuXG4gIGNvbnN0IGhhbmRsZVJlc2l6ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCB7IGlubmVyV2lkdGgsIGlubmVySGVpZ2h0IH0gPSB3aW5kb3c7XG5cbiAgICBzZXRWaWV3cG9ydCgodmlld3BvcnQpID0+ICh7XG4gICAgICAuLi52aWV3cG9ydCxcbiAgICAgIHdpZHRoOiBpbm5lcldpZHRoLFxuICAgICAgaGVpZ2h0OiBpbm5lckhlaWdodCxcbiAgICAgIGlzU3F1YXJlOiBpbm5lcldpZHRoID09PSBpbm5lckhlaWdodCxcbiAgICAgIGlzUG9ydHJhaXQ6IGlubmVyV2lkdGggPCBpbm5lckhlaWdodCxcbiAgICAgIGlzTGFuZHNjYXBlOiBpbm5lcldpZHRoID4gaW5uZXJIZWlnaHQsXG4gICAgfSkpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgICBoYW5kbGVSZXNpemUoKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgfTtcbiAgfSwgW2hhbmRsZVJlc2l6ZV0pO1xuXG4gIHJldHVybiB2aWV3cG9ydDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVZpZXdwb3J0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==