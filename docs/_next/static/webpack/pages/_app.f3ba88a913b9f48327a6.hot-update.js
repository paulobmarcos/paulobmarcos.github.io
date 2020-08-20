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

  const progressRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const handleScroll = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {}, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    progressRef.current.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => {
      progressRef.current.removeEventListener('scroll', handleScroll, {
        passive: true
      });
    };
  }, [progressRef, handleScroll]);
  return __jsx("div", {
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.layout,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(_grain__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.grain,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.frame,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx("div", {
    ref: progressRef,
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.proress,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })), __jsx("div", {
    id: "layoutContent",
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), children));
};

_s(Layout, "/lJorzu9ywE/wCvZ6dtx5FV9yDY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3NoYXJlZC9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJwcm9ncmVzc1JlZiIsInVzZVJlZiIsImhhbmRsZVNjcm9sbCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0eWxlcyIsImxheW91dCIsImdyYWluIiwiZnJhbWUiLCJwcm9yZXNzIiwiYmFyIiwiY29udGVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUFBOztBQUMvQixRQUFNQyxXQUFXLEdBQUdDLG9EQUFNLEVBQTFCO0FBRUEsUUFBTUMsWUFBWSxHQUFHQyx5REFBVyxDQUFDLE1BQU0sQ0FFdEMsQ0FGK0IsRUFFN0IsRUFGNkIsQ0FBaEM7QUFJQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RKLGVBQVcsQ0FBQ0ssT0FBWixDQUFvQkMsZ0JBQXBCLENBQXFDLFFBQXJDLEVBQStDSixZQUEvQyxFQUE2RDtBQUFFSyxhQUFPLEVBQUU7QUFBWCxLQUE3RDtBQUVBLFdBQU8sTUFBTTtBQUNYUCxpQkFBVyxDQUFDSyxPQUFaLENBQW9CRyxtQkFBcEIsQ0FBd0MsUUFBeEMsRUFBa0ROLFlBQWxELEVBQWdFO0FBQUVLLGVBQU8sRUFBRTtBQUFYLE9BQWhFO0FBQ0QsS0FGRDtBQUdELEdBTlEsRUFNTixDQUFDUCxXQUFELEVBQWNFLFlBQWQsQ0FOTSxDQUFUO0FBUUEsU0FDRTtBQUFLLGFBQVMsRUFBR08seURBQU0sQ0FBQ0MsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOENBQUQ7QUFBTyxhQUFTLEVBQUdELHlEQUFNLENBQUNFLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFHRix5REFBTSxDQUFDRyxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFLLE9BQUcsRUFBR1osV0FBWDtBQUF5QixhQUFTLEVBQUdTLHlEQUFNLENBQUNJLE9BQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBR0oseURBQU0sQ0FBQ0ssR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSEYsRUFNRTtBQUFLLE1BQUUsRUFBQyxlQUFSO0FBQXdCLGFBQVMsRUFBR0wseURBQU0sQ0FBQ00sT0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUloQixRQUZKLENBTkYsQ0FERjtBQWFELENBNUJEOztHQUFNRCxNOztLQUFBQSxNO0FBOEJOQSxNQUFNLENBQUNrQixTQUFQLEdBQW1CO0FBQ2pCakIsVUFBUSxFQUFFa0IsaURBQVMsQ0FBQ0M7QUFESCxDQUFuQjtBQUllcEIscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mM2JhODhhOTEzYjlmNDgzMjdhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgR3JhaW4gZnJvbSAnLi4vZ3JhaW4nO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9oZWFkZXInO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGF5b3V0Lm1vZHVsZS5jc3MnO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHByb2dyZXNzUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuXG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByb2dyZXNzUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcHJvZ3Jlc3NSZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICB9O1xuICB9LCBbcHJvZ3Jlc3NSZWYsIGhhbmRsZVNjcm9sbF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMubGF5b3V0IH0+XG4gICAgICA8R3JhaW4gY2xhc3NOYW1lPXsgc3R5bGVzLmdyYWluIH0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmZyYW1lIH0gLz5cbiAgICAgIDxkaXYgcmVmPXsgcHJvZ3Jlc3NSZWYgfSBjbGFzc05hbWU9eyBzdHlsZXMucHJvcmVzcyB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5iYXIgfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGlkPVwibGF5b3V0Q29udGVudFwiIGNsYXNzTmFtZT17IHN0eWxlcy5jb250ZW50IH0+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkxheW91dC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==