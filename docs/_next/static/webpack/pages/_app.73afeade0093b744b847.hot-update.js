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
    className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bar,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3NoYXJlZC9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJjb250ZW50UmVmIiwidXNlUmVmIiwicHJvZ3Jlc3NSZWYiLCJoYW5kbGVTY3JvbGwiLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJzY3JvbGxUb3AiLCJwZXJjZW50YWdlIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsImNvbnRlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdHlsZXMiLCJsYXlvdXQiLCJncmFpbiIsImZyYW1lIiwicHJvcmVzcyIsImJhciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUFBOztBQUMvQixRQUFNQyxVQUFVLEdBQUdDLG9EQUFNLEVBQXpCO0FBQ0EsUUFBTUMsV0FBVyxHQUFHRCxvREFBTSxFQUExQjtBQUVBLFFBQU1FLFlBQVksR0FBR0MseURBQVcsQ0FBQyxNQUFNO0FBQUEsZ0NBQ2FKLFVBQVUsQ0FBQ0ssT0FEeEI7QUFBQSxVQUM3QkMsWUFENkIsdUJBQzdCQSxZQUQ2QjtBQUFBLFVBQ2ZDLFlBRGUsdUJBQ2ZBLFlBRGU7QUFBQSxVQUNEQyxTQURDLHVCQUNEQSxTQURDO0FBR3JDLFVBQU1DLFVBQVUsR0FBRyxDQUFDSCxZQUFZLEdBQUdFLFNBQWhCLElBQTZCRCxZQUFoRDtBQUVBRyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsVUFBWjtBQUNELEdBTitCLEVBTTdCLEVBTjZCLENBQWhDO0FBUUFHLHlEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLE9BQU8sR0FBR2IsVUFBVSxDQUFDSyxPQUEzQjtBQUVBUSxXQUFPLENBQUNDLGdCQUFSLENBQXlCLFFBQXpCLEVBQW1DWCxZQUFuQyxFQUFpRDtBQUFFWSxhQUFPLEVBQUU7QUFBWCxLQUFqRDtBQUVBLFdBQU8sTUFBTTtBQUNYRixhQUFPLENBQUNHLG1CQUFSLENBQTRCLFFBQTVCLEVBQXNDYixZQUF0QyxFQUFvRDtBQUFFWSxlQUFPLEVBQUU7QUFBWCxPQUFwRDtBQUNELEtBRkQ7QUFHRCxHQVJRLEVBUU4sQ0FBQ1osWUFBRCxDQVJNLENBQVQ7QUFVQSxTQUNFO0FBQUssYUFBUyxFQUFHYyx5REFBTSxDQUFDQyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4Q0FBRDtBQUFPLGFBQVMsRUFBR0QseURBQU0sQ0FBQ0UsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUdGLHlEQUFNLENBQUNHLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUssT0FBRyxFQUFHbEIsV0FBWDtBQUF5QixhQUFTLEVBQUdlLHlEQUFNLENBQUNJLE9BQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBR0oseURBQU0sQ0FBQ0ssR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSEYsRUFNRTtBQUNFLE1BQUUsRUFBQyxlQURMO0FBRUUsT0FBRyxFQUFHdEIsVUFGUjtBQUdFLGFBQVMsRUFBR2lCLHlEQUFNLENBQUNKLE9BSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtJZCxRQUxKLENBTkYsQ0FERjtBQWdCRCxDQXRDRDs7R0FBTUQsTTs7S0FBQUEsTTtBQXdDTkEsTUFBTSxDQUFDeUIsU0FBUCxHQUFtQjtBQUNqQnhCLFVBQVEsRUFBRXlCLGlEQUFTLENBQUNDO0FBREgsQ0FBbkI7QUFJZTNCLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNzNhZmVhZGUwMDkzYjc0NGI4NDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBHcmFpbiBmcm9tICcuLi9ncmFpbic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlcic7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MYXlvdXQubW9kdWxlLmNzcyc7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgY29udGVudFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBwcm9ncmVzc1JlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCB7IGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0LCBzY3JvbGxUb3AgfSA9IGNvbnRlbnRSZWYuY3VycmVudDtcblxuICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAoY2xpZW50SGVpZ2h0ICsgc2Nyb2xsVG9wKSAvIHNjcm9sbEhlaWdodDtcblxuICAgIGNvbnNvbGUubG9nKHBlcmNlbnRhZ2UpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gY29udGVudFJlZi5jdXJyZW50O1xuXG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgIH07XG4gIH0sIFtoYW5kbGVTY3JvbGxdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmxheW91dCB9PlxuICAgICAgPEdyYWluIGNsYXNzTmFtZT17IHN0eWxlcy5ncmFpbiB9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5mcmFtZSB9IC8+XG4gICAgICA8ZGl2IHJlZj17IHByb2dyZXNzUmVmIH0gY2xhc3NOYW1lPXsgc3R5bGVzLnByb3Jlc3MgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuYmFyIH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBpZD1cImxheW91dENvbnRlbnRcIlxuICAgICAgICByZWY9eyBjb250ZW50UmVmIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgc3R5bGVzLmNvbnRlbnQgfT5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9