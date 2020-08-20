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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./www/shared/utils/index.js");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Layout.module.css */ "./www/shared/components/layout/Layout.module.css");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_5__);
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
    Object(_utils__WEBPACK_IMPORTED_MODULE_4__["changeStyle"])(percentageRef.current, 'transform', "scaleY(".concat(percentage, ")"));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const content = contentRef.current;
    content.addEventListener('scroll', handleScroll, {
      passive: true
    });
    handleScroll();
    return () => {
      content.removeEventListener('scroll', handleScroll, {
        passive: true
      });
    };
  }, [handleScroll]);
  return __jsx("div", {
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.layout,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(_grain__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.grain,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.frame,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx("div", {
    ref: progressRef,
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.progress,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("div", {
    ref: percentageRef,
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.percentage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  })), __jsx("div", {
    id: "layoutContent",
    ref: contentRef,
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3NoYXJlZC9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJjb250ZW50UmVmIiwidXNlUmVmIiwicHJvZ3Jlc3NSZWYiLCJwZXJjZW50YWdlUmVmIiwiaGFuZGxlU2Nyb2xsIiwidXNlQ2FsbGJhY2siLCJjdXJyZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Iiwic2Nyb2xsVG9wIiwicGVyY2VudGFnZSIsImNoYW5nZVN0eWxlIiwidXNlRWZmZWN0IiwiY29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0eWxlcyIsImxheW91dCIsImdyYWluIiwiZnJhbWUiLCJwcm9ncmVzcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUFBOztBQUMvQixRQUFNQyxVQUFVLEdBQUdDLG9EQUFNLEVBQXpCO0FBQ0EsUUFBTUMsV0FBVyxHQUFHRCxvREFBTSxFQUExQjtBQUNBLFFBQU1FLGFBQWEsR0FBR0Ysb0RBQU0sRUFBNUI7QUFFQSxRQUFNRyxZQUFZLEdBQUdDLHlEQUFXLENBQUMsTUFBTTtBQUFBLGdDQUNhTCxVQUFVLENBQUNNLE9BRHhCO0FBQUEsVUFDN0JDLFlBRDZCLHVCQUM3QkEsWUFENkI7QUFBQSxVQUNmQyxZQURlLHVCQUNmQSxZQURlO0FBQUEsVUFDREMsU0FEQyx1QkFDREEsU0FEQztBQUVyQyxVQUFNQyxVQUFVLEdBQUcsQ0FBQ0gsWUFBWSxHQUFHRSxTQUFoQixJQUE2QkQsWUFBaEQ7QUFFQUcsOERBQVcsQ0FBQ1IsYUFBYSxDQUFDRyxPQUFmLEVBQXdCLFdBQXhCLG1CQUErQ0ksVUFBL0MsT0FBWDtBQUNELEdBTCtCLEVBSzdCLEVBTDZCLENBQWhDO0FBT0FFLHlEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLE9BQU8sR0FBR2IsVUFBVSxDQUFDTSxPQUEzQjtBQUVBTyxXQUFPLENBQUNDLGdCQUFSLENBQXlCLFFBQXpCLEVBQW1DVixZQUFuQyxFQUFpRDtBQUFFVyxhQUFPLEVBQUU7QUFBWCxLQUFqRDtBQUVBWCxnQkFBWTtBQUVaLFdBQU8sTUFBTTtBQUNYUyxhQUFPLENBQUNHLG1CQUFSLENBQTRCLFFBQTVCLEVBQXNDWixZQUF0QyxFQUFvRDtBQUFFVyxlQUFPLEVBQUU7QUFBWCxPQUFwRDtBQUNELEtBRkQ7QUFHRCxHQVZRLEVBVU4sQ0FBQ1gsWUFBRCxDQVZNLENBQVQ7QUFZQSxTQUNFO0FBQUssYUFBUyxFQUFHYSx5REFBTSxDQUFDQyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4Q0FBRDtBQUFPLGFBQVMsRUFBR0QseURBQU0sQ0FBQ0UsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUdGLHlEQUFNLENBQUNHLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUssT0FBRyxFQUFHbEIsV0FBWDtBQUF5QixhQUFTLEVBQUdlLHlEQUFNLENBQUNJLFFBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBR2xCLGFBQVg7QUFBMkIsYUFBUyxFQUFHYyx5REFBTSxDQUFDUCxVQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FIRixFQU1FO0FBQ0UsTUFBRSxFQUFDLGVBREw7QUFFRSxPQUFHLEVBQUdWLFVBRlI7QUFHRSxhQUFTLEVBQUdpQix5REFBTSxDQUFDSixPQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLSWQsUUFMSixDQU5GLENBREY7QUFnQkQsQ0F4Q0Q7O0dBQU1ELE07O0tBQUFBLE07QUEwQ05BLE1BQU0sQ0FBQ3dCLFNBQVAsR0FBbUI7QUFDakJ2QixVQUFRLEVBQUV3QixpREFBUyxDQUFDQztBQURILENBQW5CO0FBSWUxQixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmE1NWQ0YjAxNzVlZDIwM2U1ODI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgR3JhaW4gZnJvbSAnLi4vZ3JhaW4nO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9oZWFkZXInO1xuaW1wb3J0IHsgY2hhbmdlU3R5bGUgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MYXlvdXQubW9kdWxlLmNzcyc7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgY29udGVudFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBwcm9ncmVzc1JlZiA9IHVzZVJlZigpO1xuICBjb25zdCBwZXJjZW50YWdlUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHsgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQsIHNjcm9sbFRvcCB9ID0gY29udGVudFJlZi5jdXJyZW50O1xuICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAoY2xpZW50SGVpZ2h0ICsgc2Nyb2xsVG9wKSAvIHNjcm9sbEhlaWdodDtcblxuICAgIGNoYW5nZVN0eWxlKHBlcmNlbnRhZ2VSZWYuY3VycmVudCwgJ3RyYW5zZm9ybScsIGBzY2FsZVkoJHtwZXJjZW50YWdlfSlgKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRSZWYuY3VycmVudDtcblxuICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgICBoYW5kbGVTY3JvbGwoKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgIH07XG4gIH0sIFtoYW5kbGVTY3JvbGxdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmxheW91dCB9PlxuICAgICAgPEdyYWluIGNsYXNzTmFtZT17IHN0eWxlcy5ncmFpbiB9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5mcmFtZSB9IC8+XG4gICAgICA8ZGl2IHJlZj17IHByb2dyZXNzUmVmIH0gY2xhc3NOYW1lPXsgc3R5bGVzLnByb2dyZXNzIH0+XG4gICAgICAgIDxkaXYgcmVmPXsgcGVyY2VudGFnZVJlZiB9IGNsYXNzTmFtZT17IHN0eWxlcy5wZXJjZW50YWdlIH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBpZD1cImxheW91dENvbnRlbnRcIlxuICAgICAgICByZWY9eyBjb250ZW50UmVmIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgc3R5bGVzLmNvbnRlbnQgfT5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9