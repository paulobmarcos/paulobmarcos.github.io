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
  checkTouchScreen: () => false
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
      checkTouchScreen: () => matchMedia('(any-pointer: coarse)').matches
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3NoYXJlZC9ob29rcy91c2Utdmlld3BvcnQvdXNlVmlld3BvcnQuanMiXSwibmFtZXMiOlsiZGVmYXVsdFZpZXdwb3J0Iiwid2lkdGgiLCJoZWlnaHQiLCJpc1NxdWFyZSIsImlzUG9ydHJhaXQiLCJpc0xhbmRzY2FwZSIsImNoZWNrVG91Y2hTY3JlZW4iLCJ1c2VWaWV3cG9ydCIsInVzZVN0YXRlIiwidmlld3BvcnQiLCJzZXRWaWV3cG9ydCIsImhhbmRsZVJlc2l6ZSIsInVzZUNhbGxiYWNrIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLGVBQWUsR0FBRztBQUN0QkMsT0FBSyxFQUFFLElBRGU7QUFFdEJDLFFBQU0sRUFBRSxJQUZjO0FBR3RCQyxVQUFRLEVBQUUsS0FIWTtBQUl0QkMsWUFBVSxFQUFFLEtBSlU7QUFLdEJDLGFBQVcsRUFBRSxJQUxTO0FBTXRCQyxrQkFBZ0IsRUFBRSxNQUFNO0FBTkYsQ0FBeEI7O0FBU0EsTUFBTUMsV0FBVyxHQUFHLE1BQU07QUFBQTs7QUFBQSxvQkFDUUMsc0RBQVEsQ0FBQ1IsZUFBRCxDQURoQjtBQUFBLFFBQ2pCUyxRQURpQjtBQUFBLFFBQ1BDLFdBRE87O0FBR3hCLFFBQU1DLFlBQVksR0FBR0MseURBQVcsQ0FBQyxNQUFNO0FBQUEsb0JBQ0RDLE1BREM7QUFBQSxVQUM3QkMsVUFENkIsV0FDN0JBLFVBRDZCO0FBQUEsVUFDakJDLFdBRGlCLFdBQ2pCQSxXQURpQjtBQUdyQ0wsZUFBVyxDQUFFRCxRQUFELG9DQUNQQSxRQURPO0FBRVZSLFdBQUssRUFBRWEsVUFGRztBQUdWWixZQUFNLEVBQUVhLFdBSEU7QUFJVlosY0FBUSxFQUFFVyxVQUFVLEtBQUtDLFdBSmY7QUFLVlgsZ0JBQVUsRUFBRVUsVUFBVSxHQUFHQyxXQUxmO0FBTVZWLGlCQUFXLEVBQUVTLFVBQVUsR0FBR0MsV0FOaEI7QUFPVlQsc0JBQWdCLEVBQUUsTUFBTVUsVUFBVSxDQUFDLHVCQUFELENBQVYsQ0FBb0NDO0FBUGxELE1BQUQsQ0FBWDtBQVNELEdBWitCLEVBWTdCLEVBWjZCLENBQWhDO0FBY0FDLHlEQUFTLENBQUMsTUFBTTtBQUNkTCxVQUFNLENBQUNNLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDUixZQUFsQyxFQUFnRDtBQUFFUyxhQUFPLEVBQUU7QUFBWCxLQUFoRDtBQUVBVCxnQkFBWTtBQUVaLFdBQU8sTUFBTTtBQUNYRSxZQUFNLENBQUNRLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDVixZQUFyQyxFQUFtRDtBQUFFUyxlQUFPLEVBQUU7QUFBWCxPQUFuRDtBQUNELEtBRkQ7QUFHRCxHQVJRLEVBUU4sQ0FBQ1QsWUFBRCxDQVJNLENBQVQ7QUFVQSxTQUFPRixRQUFQO0FBQ0QsQ0E1QkQ7O0dBQU1GLFc7O0FBOEJTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43ZDhjNDYyNjM2MDYwMDliYzM3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGRlZmF1bHRWaWV3cG9ydCA9IHtcbiAgd2lkdGg6IDE5MjAsXG4gIGhlaWdodDogMTA4MCxcbiAgaXNTcXVhcmU6IGZhbHNlLFxuICBpc1BvcnRyYWl0OiBmYWxzZSxcbiAgaXNMYW5kc2NhcGU6IHRydWUsXG4gIGNoZWNrVG91Y2hTY3JlZW46ICgpID0+IGZhbHNlLFxufTtcblxuY29uc3QgdXNlVmlld3BvcnQgPSAoKSA9PiB7XG4gIGNvbnN0IFt2aWV3cG9ydCwgc2V0Vmlld3BvcnRdID0gdXNlU3RhdGUoZGVmYXVsdFZpZXdwb3J0KTtcblxuICBjb25zdCBoYW5kbGVSZXNpemUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgeyBpbm5lcldpZHRoLCBpbm5lckhlaWdodCB9ID0gd2luZG93O1xuXG4gICAgc2V0Vmlld3BvcnQoKHZpZXdwb3J0KSA9PiAoe1xuICAgICAgLi4udmlld3BvcnQsXG4gICAgICB3aWR0aDogaW5uZXJXaWR0aCxcbiAgICAgIGhlaWdodDogaW5uZXJIZWlnaHQsXG4gICAgICBpc1NxdWFyZTogaW5uZXJXaWR0aCA9PT0gaW5uZXJIZWlnaHQsXG4gICAgICBpc1BvcnRyYWl0OiBpbm5lcldpZHRoIDwgaW5uZXJIZWlnaHQsXG4gICAgICBpc0xhbmRzY2FwZTogaW5uZXJXaWR0aCA+IGlubmVySGVpZ2h0LFxuICAgICAgY2hlY2tUb3VjaFNjcmVlbjogKCkgPT4gbWF0Y2hNZWRpYSgnKGFueS1wb2ludGVyOiBjb2Fyc2UpJykubWF0Y2hlcyxcbiAgICB9KSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICAgIGhhbmRsZVJlc2l6ZSgpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICB9O1xuICB9LCBbaGFuZGxlUmVzaXplXSk7XG5cbiAgcmV0dXJuIHZpZXdwb3J0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlVmlld3BvcnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9