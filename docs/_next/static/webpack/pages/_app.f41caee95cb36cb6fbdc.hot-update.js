webpackHotUpdate_N_E("pages/_app",{

/***/ "./www/shared/components/layout/Layout.js":
/*!************************************************!*\
  !*** ./www/shared/components/layout/Layout.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grain */ "./www/shared/components/grain/index.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header */ "./www/shared/components/header/index.js");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layout.module.css */ "./www/shared/components/layout/Layout.module.css");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\paulo\\Desktop\\Work\\Projects\\Personal\\Web\\paulobmarcos\\www\\shared\\components\\layout\\Layout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Layout = ({
  children
}) => {
  _s();

  const contentRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const progressRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const percentageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const handleScroll = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const _contentRef$current = contentRef.current,
          clientHeight = _contentRef$current.clientHeight,
          scrollHeight = _contentRef$current.scrollHeight,
          scrollTop = _contentRef$current.scrollTop;
    const percentage = (clientHeight + scrollTop) / scrollHeight;
    console.log(percentage);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const content = contentRef.current;
    content.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => {
      content.removeEventListener('scroll', handleScroll, {
        passive: true
      });
    };
  }, [handleScroll]);
  return __jsx("div", {
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.layout,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(_grain__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.grain,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.frame,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx("div", {
    ref: progressRef,
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.progress,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("div", {
    ref: percentageRef,
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.percentage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  })), __jsx("div", {
    id: "layoutContent",
    ref: contentRef,
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), children));
};

_s(Layout, "APPHt3OMqZyUKJ6wmynoRSq6Xxg=");

_c = Layout;
Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3NoYXJlZC9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJjb250ZW50UmVmIiwidXNlUmVmIiwicHJvZ3Jlc3NSZWYiLCJwZXJjZW50YWdlUmVmIiwiaGFuZGxlU2Nyb2xsIiwidXNlQ2FsbGJhY2siLCJjdXJyZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Iiwic2Nyb2xsVG9wIiwicGVyY2VudGFnZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJjb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGVzIiwibGF5b3V0IiwiZ3JhaW4iLCJmcmFtZSIsInByb2dyZXNzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQUE7O0FBQy9CLFFBQU1DLFVBQVUsR0FBR0Msb0RBQU0sRUFBekI7QUFDQSxRQUFNQyxXQUFXLEdBQUdELG9EQUFNLEVBQTFCO0FBQ0EsUUFBTUUsYUFBYSxHQUFHRixvREFBTSxFQUE1QjtBQUVBLFFBQU1HLFlBQVksR0FBR0MseURBQVcsQ0FBQyxNQUFNO0FBQUEsZ0NBQ2FMLFVBQVUsQ0FBQ00sT0FEeEI7QUFBQSxVQUM3QkMsWUFENkIsdUJBQzdCQSxZQUQ2QjtBQUFBLFVBQ2ZDLFlBRGUsdUJBQ2ZBLFlBRGU7QUFBQSxVQUNEQyxTQURDLHVCQUNEQSxTQURDO0FBRXJDLFVBQU1DLFVBQVUsR0FBRyxDQUFDSCxZQUFZLEdBQUdFLFNBQWhCLElBQTZCRCxZQUFoRDtBQUVBRyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsVUFBWjtBQUNELEdBTCtCLEVBSzdCLEVBTDZCLENBQWhDO0FBT0FHLHlEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLE9BQU8sR0FBR2QsVUFBVSxDQUFDTSxPQUEzQjtBQUVBUSxXQUFPLENBQUNDLGdCQUFSLENBQXlCLFFBQXpCLEVBQW1DWCxZQUFuQyxFQUFpRDtBQUFFWSxhQUFPLEVBQUU7QUFBWCxLQUFqRDtBQUVBLFdBQU8sTUFBTTtBQUNYRixhQUFPLENBQUNHLG1CQUFSLENBQTRCLFFBQTVCLEVBQXNDYixZQUF0QyxFQUFvRDtBQUFFWSxlQUFPLEVBQUU7QUFBWCxPQUFwRDtBQUNELEtBRkQ7QUFHRCxHQVJRLEVBUU4sQ0FBQ1osWUFBRCxDQVJNLENBQVQ7QUFVQSxTQUNFO0FBQUssYUFBUyxFQUFHYyx5REFBTSxDQUFDQyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4Q0FBRDtBQUFPLGFBQVMsRUFBR0QseURBQU0sQ0FBQ0UsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUdGLHlEQUFNLENBQUNHLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUssT0FBRyxFQUFHbkIsV0FBWDtBQUF5QixhQUFTLEVBQUdnQix5REFBTSxDQUFDSSxRQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUduQixhQUFYO0FBQTJCLGFBQVMsRUFBR2UseURBQU0sQ0FBQ1IsVUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSEYsRUFNRTtBQUNFLE1BQUUsRUFBQyxlQURMO0FBRUUsT0FBRyxFQUFHVixVQUZSO0FBR0UsYUFBUyxFQUFHa0IseURBQU0sQ0FBQ0osT0FIckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0lmLFFBTEosQ0FORixDQURGO0FBZ0JELENBdENEOztHQUFNRCxNOztLQUFBQSxNO0FBd0NOQSxNQUFNLENBQUN5QixTQUFQLEdBQW1CO0FBQ2pCeEIsVUFBUSxFQUFFeUIsaURBQVMsQ0FBQ0M7QUFESCxDQUFuQjtBQUllM0IscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mNDFjYWVlOTVjYjM2Y2I2ZmJkYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEdyYWluIGZyb20gJy4uL2dyYWluJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xheW91dC5tb2R1bGUuY3NzJztcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IHByb2dyZXNzUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IHBlcmNlbnRhZ2VSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgeyBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgc2Nyb2xsVG9wIH0gPSBjb250ZW50UmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgcGVyY2VudGFnZSA9IChjbGllbnRIZWlnaHQgKyBzY3JvbGxUb3ApIC8gc2Nyb2xsSGVpZ2h0O1xuXG4gICAgY29uc29sZS5sb2cocGVyY2VudGFnZSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50UmVmLmN1cnJlbnQ7XG5cbiAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnRlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgfTtcbiAgfSwgW2hhbmRsZVNjcm9sbF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMubGF5b3V0IH0+XG4gICAgICA8R3JhaW4gY2xhc3NOYW1lPXsgc3R5bGVzLmdyYWluIH0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmZyYW1lIH0gLz5cbiAgICAgIDxkaXYgcmVmPXsgcHJvZ3Jlc3NSZWYgfSBjbGFzc05hbWU9eyBzdHlsZXMucHJvZ3Jlc3MgfT5cbiAgICAgICAgPGRpdiByZWY9eyBwZXJjZW50YWdlUmVmIH0gY2xhc3NOYW1lPXsgc3R5bGVzLnBlcmNlbnRhZ2UgfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGlkPVwibGF5b3V0Q29udGVudFwiXG4gICAgICAgIHJlZj17IGNvbnRlbnRSZWYgfVxuICAgICAgICBjbGFzc05hbWU9eyBzdHlsZXMuY29udGVudCB9PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5MYXlvdXQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=