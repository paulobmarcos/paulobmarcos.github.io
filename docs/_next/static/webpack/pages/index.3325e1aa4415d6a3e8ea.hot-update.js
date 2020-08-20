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
      isLandscape: innerWidth > innerHeight,
      isTouch: matchMedia('(any-pointer: coarse)').matches
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3NoYXJlZC9ob29rcy91c2Utdmlld3BvcnQvdXNlVmlld3BvcnQuanMiXSwibmFtZXMiOlsiZGVmYXVsdFZpZXdwb3J0Iiwid2lkdGgiLCJoZWlnaHQiLCJpc1NxdWFyZSIsImlzUG9ydHJhaXQiLCJpc0xhbmRzY2FwZSIsImlzVG91Y2giLCJ1c2VWaWV3cG9ydCIsInVzZVN0YXRlIiwidmlld3BvcnQiLCJzZXRWaWV3cG9ydCIsImhhbmRsZVJlc2l6ZSIsInVzZUNhbGxiYWNrIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLGVBQWUsR0FBRztBQUN0QkMsT0FBSyxFQUFFLElBRGU7QUFFdEJDLFFBQU0sRUFBRSxJQUZjO0FBR3RCQyxVQUFRLEVBQUUsS0FIWTtBQUl0QkMsWUFBVSxFQUFFLEtBSlU7QUFLdEJDLGFBQVcsRUFBRSxJQUxTO0FBTXRCQyxTQUFPLEVBQUU7QUFOYSxDQUF4Qjs7QUFTQSxNQUFNQyxXQUFXLEdBQUcsTUFBTTtBQUFBOztBQUFBLG9CQUNRQyxzREFBUSxDQUFDUixlQUFELENBRGhCO0FBQUEsUUFDakJTLFFBRGlCO0FBQUEsUUFDUEMsV0FETzs7QUFHeEIsUUFBTUMsWUFBWSxHQUFHQyx5REFBVyxDQUFDLE1BQU07QUFBQSxvQkFDREMsTUFEQztBQUFBLFVBQzdCQyxVQUQ2QixXQUM3QkEsVUFENkI7QUFBQSxVQUNqQkMsV0FEaUIsV0FDakJBLFdBRGlCO0FBR3JDTCxlQUFXLENBQUVELFFBQUQsb0NBQ1BBLFFBRE87QUFFVlIsV0FBSyxFQUFFYSxVQUZHO0FBR1ZaLFlBQU0sRUFBRWEsV0FIRTtBQUlWWixjQUFRLEVBQUVXLFVBQVUsS0FBS0MsV0FKZjtBQUtWWCxnQkFBVSxFQUFFVSxVQUFVLEdBQUdDLFdBTGY7QUFNVlYsaUJBQVcsRUFBRVMsVUFBVSxHQUFHQyxXQU5oQjtBQU9WVCxhQUFPLEVBQUVVLFVBQVUsQ0FBQyx1QkFBRCxDQUFWLENBQW9DQztBQVBuQyxNQUFELENBQVg7QUFTRCxHQVorQixFQVk3QixFQVo2QixDQUFoQztBQWNBQyx5REFBUyxDQUFDLE1BQU07QUFDZEwsVUFBTSxDQUFDTSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1IsWUFBbEMsRUFBZ0Q7QUFBRVMsYUFBTyxFQUFFO0FBQVgsS0FBaEQ7QUFFQVQsZ0JBQVk7QUFFWixXQUFPLE1BQU07QUFDWEUsWUFBTSxDQUFDUSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1YsWUFBckMsRUFBbUQ7QUFBRVMsZUFBTyxFQUFFO0FBQVgsT0FBbkQ7QUFDRCxLQUZEO0FBR0QsR0FSUSxFQVFOLENBQUNULFlBQUQsQ0FSTSxDQUFUO0FBVUEsU0FBT0YsUUFBUDtBQUNELENBNUJEOztHQUFNRixXOztBQThCU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzMyNWUxYWE0NDE1ZDZhM2U4ZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBkZWZhdWx0Vmlld3BvcnQgPSB7XG4gIHdpZHRoOiAxOTIwLFxuICBoZWlnaHQ6IDEwODAsXG4gIGlzU3F1YXJlOiBmYWxzZSxcbiAgaXNQb3J0cmFpdDogZmFsc2UsXG4gIGlzTGFuZHNjYXBlOiB0cnVlLFxuICBpc1RvdWNoOiBmYWxzZSxcbn07XG5cbmNvbnN0IHVzZVZpZXdwb3J0ID0gKCkgPT4ge1xuICBjb25zdCBbdmlld3BvcnQsIHNldFZpZXdwb3J0XSA9IHVzZVN0YXRlKGRlZmF1bHRWaWV3cG9ydCk7XG5cbiAgY29uc3QgaGFuZGxlUmVzaXplID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHsgaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQgfSA9IHdpbmRvdztcblxuICAgIHNldFZpZXdwb3J0KCh2aWV3cG9ydCkgPT4gKHtcbiAgICAgIC4uLnZpZXdwb3J0LFxuICAgICAgd2lkdGg6IGlubmVyV2lkdGgsXG4gICAgICBoZWlnaHQ6IGlubmVySGVpZ2h0LFxuICAgICAgaXNTcXVhcmU6IGlubmVyV2lkdGggPT09IGlubmVySGVpZ2h0LFxuICAgICAgaXNQb3J0cmFpdDogaW5uZXJXaWR0aCA8IGlubmVySGVpZ2h0LFxuICAgICAgaXNMYW5kc2NhcGU6IGlubmVyV2lkdGggPiBpbm5lckhlaWdodCxcbiAgICAgIGlzVG91Y2g6IG1hdGNoTWVkaWEoJyhhbnktcG9pbnRlcjogY29hcnNlKScpLm1hdGNoZXMsXG4gICAgfSkpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgICBoYW5kbGVSZXNpemUoKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgfTtcbiAgfSwgW2hhbmRsZVJlc2l6ZV0pO1xuXG4gIHJldHVybiB2aWV3cG9ydDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVZpZXdwb3J0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==