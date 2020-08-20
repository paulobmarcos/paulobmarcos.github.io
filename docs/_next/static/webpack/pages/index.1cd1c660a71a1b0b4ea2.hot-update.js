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
      transitionDuration: "".concat(charTransitionDuration, "s"),
      transitionDelay: "".concat(revealDelay + index * charTransitionDelay, "s")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3NoYXJlZC9jb21wb25lbnRzL3RleHQtcmV2ZWFsL1RleHRSZXZlYWwuanMiXSwibmFtZXMiOlsiVGV4dFJldmVhbCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwicmV2ZWFsRGVsYXkiLCJjaGFyVHJhbnNpdGlvbkRlbGF5IiwiY2hhclRyYW5zaXRpb25EdXJhdGlvbiIsInZpc2libGUiLCJ0aW1lb3V0UmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJpc1Zpc2libGUiLCJzZXRWaXNpYmxlIiwiY2hhcnMiLCJzcGxpdCIsImNoYXJDbGFzc05hbWUiLCJjbGFzc05hbWVzIiwic3R5bGVzIiwiY2hhciIsImludmlzaWJsZSIsImhhbmRsZUludGVyc2VjdGlvbkNoYW5nZSIsInVzZUNhbGxiYWNrIiwiZXZlbnQiLCJpc0ludGVyc2VjdGluZyIsImNsZWFyVGltZW91dCIsImN1cnJlbnQiLCJzZXRUaW1lb3V0IiwicmVuZGVyQ2hhciIsImluZGV4Iiwic3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uRGVsYXkiLCJ0ZXh0UmV2ZWFsIiwibWFwIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImJvb2wiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsVUFBVSxHQUFHLENBQUM7QUFBRUMsVUFBRjtBQUFZQyxXQUFaO0FBQXVCQyxhQUF2QjtBQUFvQ0MscUJBQXBDO0FBQXlEQyx3QkFBekQ7QUFBaUZDO0FBQWpGLENBQUQsS0FBZ0c7QUFBQTs7QUFDakgsUUFBTUMsVUFBVSxHQUFHQyxvREFBTSxFQUF6Qjs7QUFEaUgsb0JBRWpGQyxzREFBUSxDQUFDLEtBQUQsQ0FGeUU7QUFBQSxRQUUxR0MsU0FGMEc7QUFBQSxRQUUvRkMsVUFGK0Y7O0FBSWpILFFBQU1DLEtBQUssR0FBR1gsUUFBUSxDQUFDWSxLQUFULENBQWUsRUFBZixDQUFkO0FBQ0EsUUFBTUMsYUFBYSxHQUFHQyxpREFBVSxDQUFDQyw2REFBTSxDQUFDQyxJQUFSLEVBQWM7QUFDNUMsS0FBQ0QsNkRBQU0sQ0FBQ1YsT0FBUixHQUFrQkksU0FEMEI7QUFFNUMsS0FBQ00sNkRBQU0sQ0FBQ0UsU0FBUixHQUFvQixDQUFDUjtBQUZ1QixHQUFkLENBQWhDO0FBS0EsUUFBTVMsd0JBQXdCLEdBQUdDLHlEQUFXLENBQUVDLEtBQUQsSUFBVztBQUFBLFVBQzlDQyxjQUQ4QyxHQUMzQkQsS0FEMkIsQ0FDOUNDLGNBRDhDO0FBR3REQyxnQkFBWSxDQUFDaEIsVUFBVSxDQUFDaUIsT0FBWixDQUFaOztBQUVBLFFBQUlGLGNBQUosRUFBb0I7QUFDbEJYLGdCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0QsS0FGRCxNQUVPO0FBQ0xKLGdCQUFVLENBQUNpQixPQUFYLEdBQXFCQyxVQUFVLENBQUMsTUFBTWQsVUFBVSxDQUFDLEtBQUQsQ0FBakIsRUFBMEIsSUFBMUIsQ0FBL0I7QUFDRDtBQUNGLEdBVjJDLEVBVXpDLEVBVnlDLENBQTVDOztBQVlBLFFBQU1lLFVBQVUsR0FBRyxDQUFDVCxJQUFELEVBQU9VLEtBQVAsS0FBaUI7QUFDbEMsVUFBTUMsS0FBSyxHQUFHO0FBQ1pDLHdCQUFrQixZQUFNeEIsc0JBQU4sTUFETjtBQUVaeUIscUJBQWUsWUFBTTNCLFdBQVcsR0FBSXdCLEtBQUssR0FBR3ZCLG1CQUE3QjtBQUZILEtBQWQ7QUFLQSxXQUNFO0FBQ0UsU0FBRyxFQUFHdUIsS0FEUjtBQUVFLG9CQUFhQSxLQUZmO0FBR0UsZUFBUyxFQUFHYixhQUhkO0FBSUUsV0FBSyxFQUFHYyxLQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLSVgsSUFMSixDQURGO0FBU0QsR0FmRDs7QUFpQkEsU0FDRSxNQUFDLGlGQUFEO0FBQXNCLFlBQVEsRUFBR0Usd0JBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBR0osaURBQVUsQ0FBQ0MsNkRBQU0sQ0FBQ2UsVUFBUixFQUFvQjdCLFNBQXBCLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSVUsS0FBSyxDQUFDb0IsR0FBTixDQUFVTixVQUFWLENBREosQ0FERixDQURGO0FBT0QsQ0E5Q0Q7O0dBQU0xQixVOztLQUFBQSxVO0FBZ0ROQSxVQUFVLENBQUNpQyxTQUFYLEdBQXVCO0FBQ3JCaEMsVUFBUSxFQUFFaUMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFETjtBQUVyQmxDLFdBQVMsRUFBRWdDLGlEQUFTLENBQUNDLE1BRkE7QUFHckJoQyxhQUFXLEVBQUUrQixpREFBUyxDQUFDRyxNQUhGO0FBSXJCakMscUJBQW1CLEVBQUU4QixpREFBUyxDQUFDRyxNQUpWO0FBS3JCaEMsd0JBQXNCLEVBQUU2QixpREFBUyxDQUFDRyxNQUxiO0FBTXJCL0IsU0FBTyxFQUFFNEIsaURBQVMsQ0FBQ0k7QUFORSxDQUF2QjtBQVNBdEMsVUFBVSxDQUFDdUMsWUFBWCxHQUEwQjtBQUN4QnBDLGFBQVcsRUFBRSxDQURXO0FBRXhCQyxxQkFBbUIsRUFBRSxJQUZHO0FBR3hCQyx3QkFBc0IsRUFBRSxHQUhBO0FBSXhCQyxTQUFPLEVBQUU7QUFKZSxDQUExQjtBQU9lTix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xY2QxYzY2MGE3MWExYjBiNGVhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEludGVyc2VjdGlvbk9ic2VydmVyIGZyb20gJ0ByZXNlYXJjaGdhdGUvcmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RleHRSZXZlYWwubW9kdWxlLmNzcyc7XG5cbmNvbnN0IFRleHRSZXZlYWwgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCByZXZlYWxEZWxheSwgY2hhclRyYW5zaXRpb25EZWxheSwgY2hhclRyYW5zaXRpb25EdXJhdGlvbiwgdmlzaWJsZSB9KSA9PiB7XG4gIGNvbnN0IHRpbWVvdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgY2hhcnMgPSBjaGlsZHJlbi5zcGxpdCgnJyk7XG4gIGNvbnN0IGNoYXJDbGFzc05hbWUgPSBjbGFzc05hbWVzKHN0eWxlcy5jaGFyLCB7XG4gICAgW3N0eWxlcy52aXNpYmxlXTogaXNWaXNpYmxlLFxuICAgIFtzdHlsZXMuaW52aXNpYmxlXTogIWlzVmlzaWJsZSxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlSW50ZXJzZWN0aW9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBpc0ludGVyc2VjdGluZyB9ID0gZXZlbnQ7XG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dFJlZi5jdXJyZW50KTtcblxuICAgIGlmIChpc0ludGVyc2VjdGluZykge1xuICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZW91dFJlZi5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKSwgNTAwMCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgcmVuZGVyQ2hhciA9IChjaGFyLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBgJHsgY2hhclRyYW5zaXRpb25EdXJhdGlvbiB9c2AsXG4gICAgICB0cmFuc2l0aW9uRGVsYXk6IGAkeyByZXZlYWxEZWxheSArIChpbmRleCAqIGNoYXJUcmFuc2l0aW9uRGVsYXkpIH1zYCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuXG4gICAgICAgIGtleT17IGluZGV4IH1cbiAgICAgICAgZGF0YS1pbmRleD17IGluZGV4IH1cbiAgICAgICAgY2xhc3NOYW1lPXsgY2hhckNsYXNzTmFtZSB9XG4gICAgICAgIHN0eWxlPXsgc3R5bGUgfT5cbiAgICAgICAgeyBjaGFyIH1cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEludGVyc2VjdGlvbk9ic2VydmVyIG9uQ2hhbmdlPXsgaGFuZGxlSW50ZXJzZWN0aW9uQ2hhbmdlIH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzTmFtZXMoc3R5bGVzLnRleHRSZXZlYWwsIGNsYXNzTmFtZSkgfT5cbiAgICAgICAgeyBjaGFycy5tYXAocmVuZGVyQ2hhcikgfVxuICAgICAgPC9kaXY+XG4gICAgPC9JbnRlcnNlY3Rpb25PYnNlcnZlcj5cbiAgKTtcbn07XG5cblRleHRSZXZlYWwucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJldmVhbERlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICBjaGFyVHJhbnNpdGlvbkRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICBjaGFyVHJhbnNpdGlvbkR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cblRleHRSZXZlYWwuZGVmYXVsdFByb3BzID0ge1xuICByZXZlYWxEZWxheTogMCxcbiAgY2hhclRyYW5zaXRpb25EZWxheTogMC4wNSxcbiAgY2hhclRyYW5zaXRpb25EdXJhdGlvbjogMC43LFxuICB2aXNpYmxlOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRSZXZlYWw7XG4iXSwic291cmNlUm9vdCI6IiJ9