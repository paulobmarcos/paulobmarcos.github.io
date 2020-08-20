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
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.proress,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3NoYXJlZC9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJjb250ZW50UmVmIiwidXNlUmVmIiwicHJvZ3Jlc3NSZWYiLCJwZXJjZW50YWdlUmVmIiwiaGFuZGxlU2Nyb2xsIiwidXNlQ2FsbGJhY2siLCJjdXJyZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Iiwic2Nyb2xsVG9wIiwicGVyY2VudGFnZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJjb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGVzIiwibGF5b3V0IiwiZ3JhaW4iLCJmcmFtZSIsInByb3Jlc3MiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFBQTs7QUFDL0IsUUFBTUMsVUFBVSxHQUFHQyxvREFBTSxFQUF6QjtBQUNBLFFBQU1DLFdBQVcsR0FBR0Qsb0RBQU0sRUFBMUI7QUFDQSxRQUFNRSxhQUFhLEdBQUdGLG9EQUFNLEVBQTVCO0FBRUEsUUFBTUcsWUFBWSxHQUFHQyx5REFBVyxDQUFDLE1BQU07QUFBQSxnQ0FDYUwsVUFBVSxDQUFDTSxPQUR4QjtBQUFBLFVBQzdCQyxZQUQ2Qix1QkFDN0JBLFlBRDZCO0FBQUEsVUFDZkMsWUFEZSx1QkFDZkEsWUFEZTtBQUFBLFVBQ0RDLFNBREMsdUJBQ0RBLFNBREM7QUFFckMsVUFBTUMsVUFBVSxHQUFHLENBQUNILFlBQVksR0FBR0UsU0FBaEIsSUFBNkJELFlBQWhEO0FBRUFHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixVQUFaO0FBQ0QsR0FMK0IsRUFLN0IsRUFMNkIsQ0FBaEM7QUFPQUcseURBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsT0FBTyxHQUFHZCxVQUFVLENBQUNNLE9BQTNCO0FBRUFRLFdBQU8sQ0FBQ0MsZ0JBQVIsQ0FBeUIsUUFBekIsRUFBbUNYLFlBQW5DLEVBQWlEO0FBQUVZLGFBQU8sRUFBRTtBQUFYLEtBQWpEO0FBRUEsV0FBTyxNQUFNO0FBQ1hGLGFBQU8sQ0FBQ0csbUJBQVIsQ0FBNEIsUUFBNUIsRUFBc0NiLFlBQXRDLEVBQW9EO0FBQUVZLGVBQU8sRUFBRTtBQUFYLE9BQXBEO0FBQ0QsS0FGRDtBQUdELEdBUlEsRUFRTixDQUFDWixZQUFELENBUk0sQ0FBVDtBQVVBLFNBQ0U7QUFBSyxhQUFTLEVBQUdjLHlEQUFNLENBQUNDLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhDQUFEO0FBQU8sYUFBUyxFQUFHRCx5REFBTSxDQUFDRSxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBR0YseURBQU0sQ0FBQ0csS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBSyxPQUFHLEVBQUduQixXQUFYO0FBQXlCLGFBQVMsRUFBR2dCLHlEQUFNLENBQUNJLE9BQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBR25CLGFBQVg7QUFBMkIsYUFBUyxFQUFHZSx5REFBTSxDQUFDUixVQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FIRixFQU1FO0FBQ0UsTUFBRSxFQUFDLGVBREw7QUFFRSxPQUFHLEVBQUdWLFVBRlI7QUFHRSxhQUFTLEVBQUdrQix5REFBTSxDQUFDSixPQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLSWYsUUFMSixDQU5GLENBREY7QUFnQkQsQ0F0Q0Q7O0dBQU1ELE07O0tBQUFBLE07QUF3Q05BLE1BQU0sQ0FBQ3lCLFNBQVAsR0FBbUI7QUFDakJ4QixVQUFRLEVBQUV5QixpREFBUyxDQUFDQztBQURILENBQW5CO0FBSWUzQixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjM5YWZlZTQzODg0MTcxNmQyYzk0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgR3JhaW4gZnJvbSAnLi4vZ3JhaW4nO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9oZWFkZXInO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGF5b3V0Lm1vZHVsZS5jc3MnO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgcHJvZ3Jlc3NSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgcGVyY2VudGFnZVJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCB7IGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0LCBzY3JvbGxUb3AgfSA9IGNvbnRlbnRSZWYuY3VycmVudDtcbiAgICBjb25zdCBwZXJjZW50YWdlID0gKGNsaWVudEhlaWdodCArIHNjcm9sbFRvcCkgLyBzY3JvbGxIZWlnaHQ7XG5cbiAgICBjb25zb2xlLmxvZyhwZXJjZW50YWdlKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRSZWYuY3VycmVudDtcblxuICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICB9O1xuICB9LCBbaGFuZGxlU2Nyb2xsXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5sYXlvdXQgfT5cbiAgICAgIDxHcmFpbiBjbGFzc05hbWU9eyBzdHlsZXMuZ3JhaW4gfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuZnJhbWUgfSAvPlxuICAgICAgPGRpdiByZWY9eyBwcm9ncmVzc1JlZiB9IGNsYXNzTmFtZT17IHN0eWxlcy5wcm9yZXNzIH0+XG4gICAgICAgIDxkaXYgcmVmPXsgcGVyY2VudGFnZVJlZiB9IGNsYXNzTmFtZT17IHN0eWxlcy5wZXJjZW50YWdlIH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBpZD1cImxheW91dENvbnRlbnRcIlxuICAgICAgICByZWY9eyBjb250ZW50UmVmIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgc3R5bGVzLmNvbnRlbnQgfT5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9