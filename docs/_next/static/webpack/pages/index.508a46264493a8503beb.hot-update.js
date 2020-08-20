webpackHotUpdate_N_E("pages/index",{

/***/ "./www/shared/components/text-reveal/TextReveal.js":
/*!*********************************************************!*\
  !*** ./www/shared/components/text-reveal/TextReveal.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _researchgate_react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @researchgate/react-intersection-observer */ "./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
/* harmony import */ var _TextReveal_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextReveal.module.css */ "./www/shared/components/text-reveal/TextReveal.module.css");
/* harmony import */ var _TextReveal_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TextReveal_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\paulo\\Desktop\\Work\\Projects\\Personal\\Web\\paulobmarcos\\www\\shared\\components\\text-reveal\\TextReveal.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const TextReveal = ({
  children,
  className,
  revealDelay,
  charTransitionDelay,
  charTransitionDuration,
  visible
}) => {
  _s();

  const timeoutRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
        isVisible = _useState[0],
        setVisible = _useState[1];

  const chars = children.split('');
  const charClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()(_TextReveal_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.char, {
    [_TextReveal_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.visible]: isVisible,
    [_TextReveal_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.invisible]: !isVisible
  });
  const handleIntersectionChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
    const isIntersecting = event.isIntersecting;
    clearTimeout(timeoutRef.current);

    if (isIntersecting) {
      setVisible(true);
    } else {
      timeoutRef.current = setTimeout(() => setVisible(false), 5000);
    }
  }, []);

  const renderChar = (char, index) => {
    const style = {
      /*transitionDuration: `${ charTransitionDuration }s`,
      transitionDelay: `${ revealDelay + (index * charTransitionDelay) }s`,*/
    };
    return __jsx("span", {
      key: index,
      "data-index": index,
      className: charClassName,
      style: style,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }
    }, char);
  };

  return __jsx(_researchgate_react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onChange: handleIntersectionChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_TextReveal_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.textReveal, className),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, chars.map(renderChar)));
};

_s(TextReveal, "Ylx5SKGv465c7tY/NeBRbTK/Ipk=");

_c = TextReveal;
TextReveal.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  revealDelay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  charTransitionDelay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  charTransitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
TextReveal.defaultProps = {
  revealDelay: 0,
  charTransitionDelay: 0.05,
  charTransitionDuration: 0.7,
  visible: false
};
/* harmony default export */ __webpack_exports__["default"] = (TextReveal);

var _c;

$RefreshReg$(_c, "TextReveal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3NoYXJlZC9jb21wb25lbnRzL3RleHQtcmV2ZWFsL1RleHRSZXZlYWwuanMiXSwibmFtZXMiOlsiVGV4dFJldmVhbCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwicmV2ZWFsRGVsYXkiLCJjaGFyVHJhbnNpdGlvbkRlbGF5IiwiY2hhclRyYW5zaXRpb25EdXJhdGlvbiIsInZpc2libGUiLCJ0aW1lb3V0UmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJpc1Zpc2libGUiLCJzZXRWaXNpYmxlIiwiY2hhcnMiLCJzcGxpdCIsImNoYXJDbGFzc05hbWUiLCJjbGFzc05hbWVzIiwic3R5bGVzIiwiY2hhciIsImludmlzaWJsZSIsImhhbmRsZUludGVyc2VjdGlvbkNoYW5nZSIsInVzZUNhbGxiYWNrIiwiZXZlbnQiLCJpc0ludGVyc2VjdGluZyIsImNsZWFyVGltZW91dCIsImN1cnJlbnQiLCJzZXRUaW1lb3V0IiwicmVuZGVyQ2hhciIsImluZGV4Iiwic3R5bGUiLCJ0ZXh0UmV2ZWFsIiwibWFwIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImJvb2wiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsVUFBVSxHQUFHLENBQUM7QUFBRUMsVUFBRjtBQUFZQyxXQUFaO0FBQXVCQyxhQUF2QjtBQUFvQ0MscUJBQXBDO0FBQXlEQyx3QkFBekQ7QUFBaUZDO0FBQWpGLENBQUQsS0FBZ0c7QUFBQTs7QUFDakgsUUFBTUMsVUFBVSxHQUFHQyxvREFBTSxFQUF6Qjs7QUFEaUgsb0JBRWpGQyxzREFBUSxDQUFDLEtBQUQsQ0FGeUU7QUFBQSxRQUUxR0MsU0FGMEc7QUFBQSxRQUUvRkMsVUFGK0Y7O0FBSWpILFFBQU1DLEtBQUssR0FBR1gsUUFBUSxDQUFDWSxLQUFULENBQWUsRUFBZixDQUFkO0FBQ0EsUUFBTUMsYUFBYSxHQUFHQyxpREFBVSxDQUFDQyw2REFBTSxDQUFDQyxJQUFSLEVBQWM7QUFDNUMsS0FBQ0QsNkRBQU0sQ0FBQ1YsT0FBUixHQUFrQkksU0FEMEI7QUFFNUMsS0FBQ00sNkRBQU0sQ0FBQ0UsU0FBUixHQUFvQixDQUFDUjtBQUZ1QixHQUFkLENBQWhDO0FBS0EsUUFBTVMsd0JBQXdCLEdBQUdDLHlEQUFXLENBQUVDLEtBQUQsSUFBVztBQUFBLFVBQzlDQyxjQUQ4QyxHQUMzQkQsS0FEMkIsQ0FDOUNDLGNBRDhDO0FBR3REQyxnQkFBWSxDQUFDaEIsVUFBVSxDQUFDaUIsT0FBWixDQUFaOztBQUVBLFFBQUlGLGNBQUosRUFBb0I7QUFDbEJYLGdCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0QsS0FGRCxNQUVPO0FBQ0xKLGdCQUFVLENBQUNpQixPQUFYLEdBQXFCQyxVQUFVLENBQUMsTUFBTWQsVUFBVSxDQUFDLEtBQUQsQ0FBakIsRUFBMEIsSUFBMUIsQ0FBL0I7QUFDRDtBQUNGLEdBVjJDLEVBVXpDLEVBVnlDLENBQTVDOztBQVlBLFFBQU1lLFVBQVUsR0FBRyxDQUFDVCxJQUFELEVBQU9VLEtBQVAsS0FBaUI7QUFDbEMsVUFBTUMsS0FBSyxHQUFHO0FBQ1o7O0FBRFksS0FBZDtBQUtBLFdBQ0U7QUFDRSxTQUFHLEVBQUdELEtBRFI7QUFFRSxvQkFBYUEsS0FGZjtBQUdFLGVBQVMsRUFBR2IsYUFIZDtBQUlFLFdBQUssRUFBR2MsS0FKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS0lYLElBTEosQ0FERjtBQVNELEdBZkQ7O0FBaUJBLFNBQ0UsTUFBQyxpRkFBRDtBQUFzQixZQUFRLEVBQUdFLHdCQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUdKLGlEQUFVLENBQUNDLDZEQUFNLENBQUNhLFVBQVIsRUFBb0IzQixTQUFwQixDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0lVLEtBQUssQ0FBQ2tCLEdBQU4sQ0FBVUosVUFBVixDQURKLENBREYsQ0FERjtBQU9ELENBOUNEOztHQUFNMUIsVTs7S0FBQUEsVTtBQWdETkEsVUFBVSxDQUFDK0IsU0FBWCxHQUF1QjtBQUNyQjlCLFVBQVEsRUFBRStCLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBRE47QUFFckJoQyxXQUFTLEVBQUU4QixpREFBUyxDQUFDQyxNQUZBO0FBR3JCOUIsYUFBVyxFQUFFNkIsaURBQVMsQ0FBQ0csTUFIRjtBQUlyQi9CLHFCQUFtQixFQUFFNEIsaURBQVMsQ0FBQ0csTUFKVjtBQUtyQjlCLHdCQUFzQixFQUFFMkIsaURBQVMsQ0FBQ0csTUFMYjtBQU1yQjdCLFNBQU8sRUFBRTBCLGlEQUFTLENBQUNJO0FBTkUsQ0FBdkI7QUFTQXBDLFVBQVUsQ0FBQ3FDLFlBQVgsR0FBMEI7QUFDeEJsQyxhQUFXLEVBQUUsQ0FEVztBQUV4QkMscUJBQW1CLEVBQUUsSUFGRztBQUd4QkMsd0JBQXNCLEVBQUUsR0FIQTtBQUl4QkMsU0FBTyxFQUFFO0FBSmUsQ0FBMUI7QUFPZU4seUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTA4YTQ2MjY0NDkzYTg1MDNiZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBJbnRlcnNlY3Rpb25PYnNlcnZlciBmcm9tICdAcmVzZWFyY2hnYXRlL3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZXh0UmV2ZWFsLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBUZXh0UmV2ZWFsID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgcmV2ZWFsRGVsYXksIGNoYXJUcmFuc2l0aW9uRGVsYXksIGNoYXJUcmFuc2l0aW9uRHVyYXRpb24sIHZpc2libGUgfSkgPT4ge1xuICBjb25zdCB0aW1lb3V0UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGNoYXJzID0gY2hpbGRyZW4uc3BsaXQoJycpO1xuICBjb25zdCBjaGFyQ2xhc3NOYW1lID0gY2xhc3NOYW1lcyhzdHlsZXMuY2hhciwge1xuICAgIFtzdHlsZXMudmlzaWJsZV06IGlzVmlzaWJsZSxcbiAgICBbc3R5bGVzLmludmlzaWJsZV06ICFpc1Zpc2libGUsXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUludGVyc2VjdGlvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgaXNJbnRlcnNlY3RpbmcgfSA9IGV2ZW50O1xuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRSZWYuY3VycmVudCk7XG5cbiAgICBpZiAoaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgIHNldFZpc2libGUodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4gc2V0VmlzaWJsZShmYWxzZSksIDUwMDApO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJlbmRlckNoYXIgPSAoY2hhciwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIC8qdHJhbnNpdGlvbkR1cmF0aW9uOiBgJHsgY2hhclRyYW5zaXRpb25EdXJhdGlvbiB9c2AsXG4gICAgICB0cmFuc2l0aW9uRGVsYXk6IGAkeyByZXZlYWxEZWxheSArIChpbmRleCAqIGNoYXJUcmFuc2l0aW9uRGVsYXkpIH1zYCwqL1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW5cbiAgICAgICAga2V5PXsgaW5kZXggfVxuICAgICAgICBkYXRhLWluZGV4PXsgaW5kZXggfVxuICAgICAgICBjbGFzc05hbWU9eyBjaGFyQ2xhc3NOYW1lIH1cbiAgICAgICAgc3R5bGU9eyBzdHlsZSB9PlxuICAgICAgICB7IGNoYXIgfVxuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8SW50ZXJzZWN0aW9uT2JzZXJ2ZXIgb25DaGFuZ2U9eyBoYW5kbGVJbnRlcnNlY3Rpb25DaGFuZ2UgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NOYW1lcyhzdHlsZXMudGV4dFJldmVhbCwgY2xhc3NOYW1lKSB9PlxuICAgICAgICB7IGNoYXJzLm1hcChyZW5kZXJDaGFyKSB9XG4gICAgICA8L2Rpdj5cbiAgICA8L0ludGVyc2VjdGlvbk9ic2VydmVyPlxuICApO1xufTtcblxuVGV4dFJldmVhbC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmV2ZWFsRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNoYXJUcmFuc2l0aW9uRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNoYXJUcmFuc2l0aW9uRHVyYXRpb246IFByb3BUeXBlcy5udW1iZXIsXG4gIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxufTtcblxuVGV4dFJldmVhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIHJldmVhbERlbGF5OiAwLFxuICBjaGFyVHJhbnNpdGlvbkRlbGF5OiAwLjA1LFxuICBjaGFyVHJhbnNpdGlvbkR1cmF0aW9uOiAwLjcsXG4gIHZpc2libGU6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dFJldmVhbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=