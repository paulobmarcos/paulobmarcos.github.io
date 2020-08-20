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

  const visibility = typeof visible !== 'undefined' ? visible : isVisible;
  const chars = children.split('');
  const charClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()(_TextReveal_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.char, {
    [_TextReveal_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.visible]: visibility,
    [_TextReveal_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.invisible]: !visibility
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
        lineNumber: 39,
        columnNumber: 7
      }
    }, char);
  };

  return __jsx(_researchgate_react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onChange: handleIntersectionChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_TextReveal_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.textReveal, className),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3NoYXJlZC9jb21wb25lbnRzL3RleHQtcmV2ZWFsL1RleHRSZXZlYWwuanMiXSwibmFtZXMiOlsiVGV4dFJldmVhbCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwicmV2ZWFsRGVsYXkiLCJjaGFyVHJhbnNpdGlvbkRlbGF5IiwiY2hhclRyYW5zaXRpb25EdXJhdGlvbiIsInZpc2libGUiLCJ0aW1lb3V0UmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJpc1Zpc2libGUiLCJzZXRWaXNpYmxlIiwidmlzaWJpbGl0eSIsImNoYXJzIiwic3BsaXQiLCJjaGFyQ2xhc3NOYW1lIiwiY2xhc3NOYW1lcyIsInN0eWxlcyIsImNoYXIiLCJpbnZpc2libGUiLCJoYW5kbGVJbnRlcnNlY3Rpb25DaGFuZ2UiLCJ1c2VDYWxsYmFjayIsImV2ZW50IiwiaXNJbnRlcnNlY3RpbmciLCJjbGVhclRpbWVvdXQiLCJjdXJyZW50Iiwic2V0VGltZW91dCIsInJlbmRlckNoYXIiLCJpbmRleCIsInN0eWxlIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkRlbGF5IiwidGV4dFJldmVhbCIsIm1hcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJib29sIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLFVBQVUsR0FBRyxDQUFDO0FBQUVDLFVBQUY7QUFBWUMsV0FBWjtBQUF1QkMsYUFBdkI7QUFBb0NDLHFCQUFwQztBQUF5REMsd0JBQXpEO0FBQWlGQztBQUFqRixDQUFELEtBQWdHO0FBQUE7O0FBQ2pILFFBQU1DLFVBQVUsR0FBR0Msb0RBQU0sRUFBekI7O0FBRGlILG9CQUVqRkMsc0RBQVEsQ0FBQyxLQUFELENBRnlFO0FBQUEsUUFFMUdDLFNBRjBHO0FBQUEsUUFFL0ZDLFVBRitGOztBQUlqSCxRQUFNQyxVQUFVLEdBQUcsT0FBT04sT0FBUCxLQUFtQixXQUFuQixHQUFpQ0EsT0FBakMsR0FBMkNJLFNBQTlEO0FBRUEsUUFBTUcsS0FBSyxHQUFHWixRQUFRLENBQUNhLEtBQVQsQ0FBZSxFQUFmLENBQWQ7QUFDQSxRQUFNQyxhQUFhLEdBQUdDLGlEQUFVLENBQUNDLDZEQUFNLENBQUNDLElBQVIsRUFBYztBQUM1QyxLQUFDRCw2REFBTSxDQUFDWCxPQUFSLEdBQWtCTSxVQUQwQjtBQUU1QyxLQUFDSyw2REFBTSxDQUFDRSxTQUFSLEdBQW9CLENBQUNQO0FBRnVCLEdBQWQsQ0FBaEM7QUFLQSxRQUFNUSx3QkFBd0IsR0FBR0MseURBQVcsQ0FBRUMsS0FBRCxJQUFXO0FBQUEsVUFDOUNDLGNBRDhDLEdBQzNCRCxLQUQyQixDQUM5Q0MsY0FEOEM7QUFHdERDLGdCQUFZLENBQUNqQixVQUFVLENBQUNrQixPQUFaLENBQVo7O0FBRUEsUUFBSUYsY0FBSixFQUFvQjtBQUNsQlosZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDRCxLQUZELE1BRU87QUFDTEosZ0JBQVUsQ0FBQ2tCLE9BQVgsR0FBcUJDLFVBQVUsQ0FBQyxNQUFNZixVQUFVLENBQUMsS0FBRCxDQUFqQixFQUEwQixJQUExQixDQUEvQjtBQUNEO0FBQ0YsR0FWMkMsRUFVekMsRUFWeUMsQ0FBNUM7O0FBWUEsUUFBTWdCLFVBQVUsR0FBRyxDQUFDVCxJQUFELEVBQU9VLEtBQVAsS0FBaUI7QUFDbEMsVUFBTUMsS0FBSyxHQUFHO0FBQ1pDLHdCQUFrQixZQUFNekIsc0JBQU4sTUFETjtBQUVaMEIscUJBQWUsWUFBTTVCLFdBQVcsR0FBSXlCLEtBQUssR0FBR3hCLG1CQUE3QjtBQUZILEtBQWQ7QUFLQSxXQUNFO0FBQ0UsU0FBRyxFQUFHd0IsS0FEUjtBQUVFLG9CQUFhQSxLQUZmO0FBR0UsZUFBUyxFQUFHYixhQUhkO0FBSUUsV0FBSyxFQUFHYyxLQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLSVgsSUFMSixDQURGO0FBU0QsR0FmRDs7QUFpQkEsU0FDRSxNQUFDLGlGQUFEO0FBQXNCLFlBQVEsRUFBR0Usd0JBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBR0osaURBQVUsQ0FBQ0MsNkRBQU0sQ0FBQ2UsVUFBUixFQUFvQjlCLFNBQXBCLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSVcsS0FBSyxDQUFDb0IsR0FBTixDQUFVTixVQUFWLENBREosQ0FERixDQURGO0FBT0QsQ0FoREQ7O0dBQU0zQixVOztLQUFBQSxVO0FBa0ROQSxVQUFVLENBQUNrQyxTQUFYLEdBQXVCO0FBQ3JCakMsVUFBUSxFQUFFa0MsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFETjtBQUVyQm5DLFdBQVMsRUFBRWlDLGlEQUFTLENBQUNDLE1BRkE7QUFHckJqQyxhQUFXLEVBQUVnQyxpREFBUyxDQUFDRyxNQUhGO0FBSXJCbEMscUJBQW1CLEVBQUUrQixpREFBUyxDQUFDRyxNQUpWO0FBS3JCakMsd0JBQXNCLEVBQUU4QixpREFBUyxDQUFDRyxNQUxiO0FBTXJCaEMsU0FBTyxFQUFFNkIsaURBQVMsQ0FBQ0k7QUFORSxDQUF2QjtBQVNBdkMsVUFBVSxDQUFDd0MsWUFBWCxHQUEwQjtBQUN4QnJDLGFBQVcsRUFBRSxDQURXO0FBRXhCQyxxQkFBbUIsRUFBRSxJQUZHO0FBR3hCQyx3QkFBc0IsRUFBRSxHQUhBO0FBSXhCQyxTQUFPLEVBQUU7QUFKZSxDQUExQjtBQU9lTix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41NmQxNjY4ZDA5OGJiMzQyNzE1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEludGVyc2VjdGlvbk9ic2VydmVyIGZyb20gJ0ByZXNlYXJjaGdhdGUvcmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RleHRSZXZlYWwubW9kdWxlLmNzcyc7XG5cbmNvbnN0IFRleHRSZXZlYWwgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCByZXZlYWxEZWxheSwgY2hhclRyYW5zaXRpb25EZWxheSwgY2hhclRyYW5zaXRpb25EdXJhdGlvbiwgdmlzaWJsZSB9KSA9PiB7XG4gIGNvbnN0IHRpbWVvdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdmlzaWJpbGl0eSA9IHR5cGVvZiB2aXNpYmxlICE9PSAndW5kZWZpbmVkJyA/IHZpc2libGUgOiBpc1Zpc2libGU7XG5cbiAgY29uc3QgY2hhcnMgPSBjaGlsZHJlbi5zcGxpdCgnJyk7XG4gIGNvbnN0IGNoYXJDbGFzc05hbWUgPSBjbGFzc05hbWVzKHN0eWxlcy5jaGFyLCB7XG4gICAgW3N0eWxlcy52aXNpYmxlXTogdmlzaWJpbGl0eSxcbiAgICBbc3R5bGVzLmludmlzaWJsZV06ICF2aXNpYmlsaXR5LFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVJbnRlcnNlY3Rpb25DaGFuZ2UgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGlzSW50ZXJzZWN0aW5nIH0gPSBldmVudDtcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0UmVmLmN1cnJlbnQpO1xuXG4gICAgaWYgKGlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICBzZXRWaXNpYmxlKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aW1lb3V0UmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHNldFZpc2libGUoZmFsc2UpLCA1MDAwKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCByZW5kZXJDaGFyID0gKGNoYXIsIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IGAkeyBjaGFyVHJhbnNpdGlvbkR1cmF0aW9uIH1zYCxcbiAgICAgIHRyYW5zaXRpb25EZWxheTogYCR7IHJldmVhbERlbGF5ICsgKGluZGV4ICogY2hhclRyYW5zaXRpb25EZWxheSkgfXNgLFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW5cbiAgICAgICAga2V5PXsgaW5kZXggfVxuICAgICAgICBkYXRhLWluZGV4PXsgaW5kZXggfVxuICAgICAgICBjbGFzc05hbWU9eyBjaGFyQ2xhc3NOYW1lIH1cbiAgICAgICAgc3R5bGU9eyBzdHlsZSB9PlxuICAgICAgICB7IGNoYXIgfVxuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8SW50ZXJzZWN0aW9uT2JzZXJ2ZXIgb25DaGFuZ2U9eyBoYW5kbGVJbnRlcnNlY3Rpb25DaGFuZ2UgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NOYW1lcyhzdHlsZXMudGV4dFJldmVhbCwgY2xhc3NOYW1lKSB9PlxuICAgICAgICB7IGNoYXJzLm1hcChyZW5kZXJDaGFyKSB9XG4gICAgICA8L2Rpdj5cbiAgICA8L0ludGVyc2VjdGlvbk9ic2VydmVyPlxuICApO1xufTtcblxuVGV4dFJldmVhbC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmV2ZWFsRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNoYXJUcmFuc2l0aW9uRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNoYXJUcmFuc2l0aW9uRHVyYXRpb246IFByb3BUeXBlcy5udW1iZXIsXG4gIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxufTtcblxuVGV4dFJldmVhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIHJldmVhbERlbGF5OiAwLFxuICBjaGFyVHJhbnNpdGlvbkRlbGF5OiAwLjA1LFxuICBjaGFyVHJhbnNpdGlvbkR1cmF0aW9uOiAwLjcsXG4gIHZpc2libGU6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dFJldmVhbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=