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
  const handleScroll = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const _window = window,
          innerHeight = _window.innerHeight;
    const _contentRef$current = contentRef.current,
          scrollHeight = _contentRef$current.scrollHeight,
          scrollTop = _contentRef$current.scrollTop;
    const percentage = (innerHeight + scrollTop) * 100 / scrollHeight;
    console.log(scrollTop, innerHeight, scrollHeight);
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
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(_grain__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.grain,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.frame,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), __jsx("div", {
    ref: progressRef,
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.proress,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  })), __jsx("div", {
    id: "layoutContent",
    ref: contentRef,
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), children));
};

_s(Layout, "LtGo3pENt0+uIOe2E37maSSydsI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3NoYXJlZC9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJjb250ZW50UmVmIiwidXNlUmVmIiwicHJvZ3Jlc3NSZWYiLCJoYW5kbGVTY3JvbGwiLCJ1c2VDYWxsYmFjayIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiY3VycmVudCIsInNjcm9sbEhlaWdodCIsInNjcm9sbFRvcCIsInBlcmNlbnRhZ2UiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiY29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0eWxlcyIsImxheW91dCIsImdyYWluIiwiZnJhbWUiLCJwcm9yZXNzIiwiYmFyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQUE7O0FBQy9CLFFBQU1DLFVBQVUsR0FBR0Msb0RBQU0sRUFBekI7QUFDQSxRQUFNQyxXQUFXLEdBQUdELG9EQUFNLEVBQTFCO0FBRUEsUUFBTUUsWUFBWSxHQUFHQyx5REFBVyxDQUFDLE1BQU07QUFBQSxvQkFDYkMsTUFEYTtBQUFBLFVBQzdCQyxXQUQ2QixXQUM3QkEsV0FENkI7QUFBQSxnQ0FFRE4sVUFBVSxDQUFDTyxPQUZWO0FBQUEsVUFFN0JDLFlBRjZCLHVCQUU3QkEsWUFGNkI7QUFBQSxVQUVmQyxTQUZlLHVCQUVmQSxTQUZlO0FBSXJDLFVBQU1DLFVBQVUsR0FBSSxDQUFDSixXQUFXLEdBQUdHLFNBQWYsSUFBNEIsR0FBN0IsR0FBb0NELFlBQXZEO0FBRUFHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxTQUFaLEVBQXVCSCxXQUF2QixFQUFvQ0UsWUFBcEM7QUFDRCxHQVArQixFQU83QixFQVA2QixDQUFoQztBQVNBSyx5REFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyxPQUFPLEdBQUdkLFVBQVUsQ0FBQ08sT0FBM0I7QUFFQU8sV0FBTyxDQUFDQyxnQkFBUixDQUF5QixRQUF6QixFQUFtQ1osWUFBbkMsRUFBaUQ7QUFBRWEsYUFBTyxFQUFFO0FBQVgsS0FBakQ7QUFFQSxXQUFPLE1BQU07QUFDWEYsYUFBTyxDQUFDRyxtQkFBUixDQUE0QixRQUE1QixFQUFzQ2QsWUFBdEMsRUFBb0Q7QUFBRWEsZUFBTyxFQUFFO0FBQVgsT0FBcEQ7QUFDRCxLQUZEO0FBR0QsR0FSUSxFQVFOLENBQUNiLFlBQUQsQ0FSTSxDQUFUO0FBVUEsU0FDRTtBQUFLLGFBQVMsRUFBR2UseURBQU0sQ0FBQ0MsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOENBQUQ7QUFBTyxhQUFTLEVBQUdELHlEQUFNLENBQUNFLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFHRix5REFBTSxDQUFDRyxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFLLE9BQUcsRUFBR25CLFdBQVg7QUFBeUIsYUFBUyxFQUFHZ0IseURBQU0sQ0FBQ0ksT0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFHSix5REFBTSxDQUFDSyxHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FIRixFQU1FO0FBQ0UsTUFBRSxFQUFDLGVBREw7QUFFRSxPQUFHLEVBQUd2QixVQUZSO0FBR0UsYUFBUyxFQUFHa0IseURBQU0sQ0FBQ0osT0FIckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0lmLFFBTEosQ0FORixDQURGO0FBZ0JELENBdkNEOztHQUFNRCxNOztLQUFBQSxNO0FBeUNOQSxNQUFNLENBQUMwQixTQUFQLEdBQW1CO0FBQ2pCekIsVUFBUSxFQUFFMEIsaURBQVMsQ0FBQ0M7QUFESCxDQUFuQjtBQUllNUIscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zZjZmM2NlMDdlNjEwMDhjNjA3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEdyYWluIGZyb20gJy4uL2dyYWluJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xheW91dC5tb2R1bGUuY3NzJztcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IHByb2dyZXNzUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHsgaW5uZXJIZWlnaHQgfSA9IHdpbmRvdztcbiAgICBjb25zdCB7IHNjcm9sbEhlaWdodCwgc2Nyb2xsVG9wIH0gPSBjb250ZW50UmVmLmN1cnJlbnQ7XG5cbiAgICBjb25zdCBwZXJjZW50YWdlID0gKChpbm5lckhlaWdodCArIHNjcm9sbFRvcCkgKiAxMDApIC8gc2Nyb2xsSGVpZ2h0O1xuXG4gICAgY29uc29sZS5sb2coc2Nyb2xsVG9wLCBpbm5lckhlaWdodCwgc2Nyb2xsSGVpZ2h0KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRSZWYuY3VycmVudDtcblxuICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICB9O1xuICB9LCBbaGFuZGxlU2Nyb2xsXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5sYXlvdXQgfT5cbiAgICAgIDxHcmFpbiBjbGFzc05hbWU9eyBzdHlsZXMuZ3JhaW4gfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuZnJhbWUgfSAvPlxuICAgICAgPGRpdiByZWY9eyBwcm9ncmVzc1JlZiB9IGNsYXNzTmFtZT17IHN0eWxlcy5wcm9yZXNzIH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmJhciB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgaWQ9XCJsYXlvdXRDb250ZW50XCJcbiAgICAgICAgcmVmPXsgY29udGVudFJlZiB9XG4gICAgICAgIGNsYXNzTmFtZT17IHN0eWxlcy5jb250ZW50IH0+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkxheW91dC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==