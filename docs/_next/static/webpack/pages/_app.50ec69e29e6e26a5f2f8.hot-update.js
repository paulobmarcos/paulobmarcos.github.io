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
  const handleScroll = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const _window = window,
          innerHeight = _window.innerHeight;
    const _progressRef$current = progressRef.current,
          clientHeight = _progressRef$current.clientHeight,
          scrollTop = _progressRef$current.scrollTop;
    const percentage = (innerHeight + scrollTop) * 100 / clientHeight;
    console.log(percentage);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const progress = progressRef.current;
    progress.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => {
      progress.removeEventListener('scroll', handleScroll, {
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
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.proress,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  })), __jsx("div", {
    id: "layoutContent",
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
      lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3NoYXJlZC9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJwcm9ncmVzc1JlZiIsInVzZVJlZiIsImhhbmRsZVNjcm9sbCIsInVzZUNhbGxiYWNrIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJjdXJyZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsVG9wIiwicGVyY2VudGFnZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJwcm9ncmVzcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0eWxlcyIsImxheW91dCIsImdyYWluIiwiZnJhbWUiLCJwcm9yZXNzIiwiYmFyIiwiY29udGVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUFBOztBQUMvQixRQUFNQyxXQUFXLEdBQUdDLG9EQUFNLEVBQTFCO0FBRUEsUUFBTUMsWUFBWSxHQUFHQyx5REFBVyxDQUFDLE1BQU07QUFBQSxvQkFDYkMsTUFEYTtBQUFBLFVBQzdCQyxXQUQ2QixXQUM3QkEsV0FENkI7QUFBQSxpQ0FFREwsV0FBVyxDQUFDTSxPQUZYO0FBQUEsVUFFN0JDLFlBRjZCLHdCQUU3QkEsWUFGNkI7QUFBQSxVQUVmQyxTQUZlLHdCQUVmQSxTQUZlO0FBSXJDLFVBQU1DLFVBQVUsR0FBSSxDQUFDSixXQUFXLEdBQUdHLFNBQWYsSUFBNEIsR0FBN0IsR0FBb0NELFlBQXZEO0FBRUFHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixVQUFaO0FBQ0QsR0FQK0IsRUFPN0IsRUFQNkIsQ0FBaEM7QUFTQUcseURBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsUUFBUSxHQUFHYixXQUFXLENBQUNNLE9BQTdCO0FBRUFPLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0NaLFlBQXBDLEVBQWtEO0FBQUVhLGFBQU8sRUFBRTtBQUFYLEtBQWxEO0FBRUEsV0FBTyxNQUFNO0FBQ1hGLGNBQVEsQ0FBQ0csbUJBQVQsQ0FBNkIsUUFBN0IsRUFBdUNkLFlBQXZDLEVBQXFEO0FBQUVhLGVBQU8sRUFBRTtBQUFYLE9BQXJEO0FBQ0QsS0FGRDtBQUdELEdBUlEsRUFRTixDQUFDYixZQUFELENBUk0sQ0FBVDtBQVVBLFNBQ0U7QUFBSyxhQUFTLEVBQUdlLHlEQUFNLENBQUNDLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhDQUFEO0FBQU8sYUFBUyxFQUFHRCx5REFBTSxDQUFDRSxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBR0YseURBQU0sQ0FBQ0csS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBSyxPQUFHLEVBQUdwQixXQUFYO0FBQXlCLGFBQVMsRUFBR2lCLHlEQUFNLENBQUNJLE9BQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBR0oseURBQU0sQ0FBQ0ssR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSEYsRUFNRTtBQUFLLE1BQUUsRUFBQyxlQUFSO0FBQXdCLGFBQVMsRUFBR0wseURBQU0sQ0FBQ00sT0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUl4QixRQUZKLENBTkYsQ0FERjtBQWFELENBbkNEOztHQUFNRCxNOztLQUFBQSxNO0FBcUNOQSxNQUFNLENBQUMwQixTQUFQLEdBQW1CO0FBQ2pCekIsVUFBUSxFQUFFMEIsaURBQVMsQ0FBQ0M7QUFESCxDQUFuQjtBQUllNUIscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41MGVjNjllMjllNmUyNmE1ZjJmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgR3JhaW4gZnJvbSAnLi4vZ3JhaW4nO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9oZWFkZXInO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGF5b3V0Lm1vZHVsZS5jc3MnO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHByb2dyZXNzUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHsgaW5uZXJIZWlnaHQgfSA9IHdpbmRvdztcbiAgICBjb25zdCB7IGNsaWVudEhlaWdodCwgc2Nyb2xsVG9wIH0gPSBwcm9ncmVzc1JlZi5jdXJyZW50O1xuXG4gICAgY29uc3QgcGVyY2VudGFnZSA9ICgoaW5uZXJIZWlnaHQgKyBzY3JvbGxUb3ApICogMTAwKSAvIGNsaWVudEhlaWdodDtcblxuICAgIGNvbnNvbGUubG9nKHBlcmNlbnRhZ2UpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwcm9ncmVzcyA9IHByb2dyZXNzUmVmLmN1cnJlbnQ7XG5cbiAgICBwcm9ncmVzcy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBwcm9ncmVzcy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICB9O1xuICB9LCBbaGFuZGxlU2Nyb2xsXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5sYXlvdXQgfT5cbiAgICAgIDxHcmFpbiBjbGFzc05hbWU9eyBzdHlsZXMuZ3JhaW4gfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuZnJhbWUgfSAvPlxuICAgICAgPGRpdiByZWY9eyBwcm9ncmVzc1JlZiB9IGNsYXNzTmFtZT17IHN0eWxlcy5wcm9yZXNzIH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmJhciB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJsYXlvdXRDb250ZW50XCIgY2xhc3NOYW1lPXsgc3R5bGVzLmNvbnRlbnQgfT5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9