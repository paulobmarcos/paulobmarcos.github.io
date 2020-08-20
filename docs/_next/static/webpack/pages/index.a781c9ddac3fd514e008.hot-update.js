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
  charTransitionDuration: 0.7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3NoYXJlZC9jb21wb25lbnRzL3RleHQtcmV2ZWFsL1RleHRSZXZlYWwuanMiXSwibmFtZXMiOlsiVGV4dFJldmVhbCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwicmV2ZWFsRGVsYXkiLCJjaGFyVHJhbnNpdGlvbkRlbGF5IiwiY2hhclRyYW5zaXRpb25EdXJhdGlvbiIsInZpc2libGUiLCJ0aW1lb3V0UmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJpc1Zpc2libGUiLCJzZXRWaXNpYmxlIiwidmlzaWJpbGl0eSIsImNoYXJzIiwic3BsaXQiLCJjaGFyQ2xhc3NOYW1lIiwiY2xhc3NOYW1lcyIsInN0eWxlcyIsImNoYXIiLCJpbnZpc2libGUiLCJoYW5kbGVJbnRlcnNlY3Rpb25DaGFuZ2UiLCJ1c2VDYWxsYmFjayIsImV2ZW50IiwiaXNJbnRlcnNlY3RpbmciLCJjbGVhclRpbWVvdXQiLCJjdXJyZW50Iiwic2V0VGltZW91dCIsInJlbmRlckNoYXIiLCJpbmRleCIsInN0eWxlIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkRlbGF5IiwidGV4dFJldmVhbCIsIm1hcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJib29sIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLFVBQVUsR0FBRyxDQUFDO0FBQUVDLFVBQUY7QUFBWUMsV0FBWjtBQUF1QkMsYUFBdkI7QUFBb0NDLHFCQUFwQztBQUF5REMsd0JBQXpEO0FBQWlGQztBQUFqRixDQUFELEtBQWdHO0FBQUE7O0FBQ2pILFFBQU1DLFVBQVUsR0FBR0Msb0RBQU0sRUFBekI7O0FBRGlILG9CQUVqRkMsc0RBQVEsQ0FBQyxLQUFELENBRnlFO0FBQUEsUUFFMUdDLFNBRjBHO0FBQUEsUUFFL0ZDLFVBRitGOztBQUlqSCxRQUFNQyxVQUFVLEdBQUcsT0FBT04sT0FBUCxLQUFtQixXQUFuQixHQUFpQ0EsT0FBakMsR0FBMkNJLFNBQTlEO0FBRUEsUUFBTUcsS0FBSyxHQUFHWixRQUFRLENBQUNhLEtBQVQsQ0FBZSxFQUFmLENBQWQ7QUFDQSxRQUFNQyxhQUFhLEdBQUdDLGlEQUFVLENBQUNDLDZEQUFNLENBQUNDLElBQVIsRUFBYztBQUM1QyxLQUFDRCw2REFBTSxDQUFDWCxPQUFSLEdBQWtCTSxVQUQwQjtBQUU1QyxLQUFDSyw2REFBTSxDQUFDRSxTQUFSLEdBQW9CLENBQUNQO0FBRnVCLEdBQWQsQ0FBaEM7QUFLQSxRQUFNUSx3QkFBd0IsR0FBR0MseURBQVcsQ0FBRUMsS0FBRCxJQUFXO0FBQUEsVUFDOUNDLGNBRDhDLEdBQzNCRCxLQUQyQixDQUM5Q0MsY0FEOEM7QUFHdERDLGdCQUFZLENBQUNqQixVQUFVLENBQUNrQixPQUFaLENBQVo7O0FBRUEsUUFBSUYsY0FBSixFQUFvQjtBQUNsQlosZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDRCxLQUZELE1BRU87QUFDTEosZ0JBQVUsQ0FBQ2tCLE9BQVgsR0FBcUJDLFVBQVUsQ0FBQyxNQUFNZixVQUFVLENBQUMsS0FBRCxDQUFqQixFQUEwQixJQUExQixDQUEvQjtBQUNEO0FBQ0YsR0FWMkMsRUFVekMsRUFWeUMsQ0FBNUM7O0FBWUEsUUFBTWdCLFVBQVUsR0FBRyxDQUFDVCxJQUFELEVBQU9VLEtBQVAsS0FBaUI7QUFDbEMsVUFBTUMsS0FBSyxHQUFHO0FBQ1pDLHdCQUFrQixZQUFNekIsc0JBQU4sTUFETjtBQUVaMEIscUJBQWUsWUFBTTVCLFdBQVcsR0FBSXlCLEtBQUssR0FBR3hCLG1CQUE3QjtBQUZILEtBQWQ7QUFLQSxXQUNFO0FBQ0UsU0FBRyxFQUFHd0IsS0FEUjtBQUVFLG9CQUFhQSxLQUZmO0FBR0UsZUFBUyxFQUFHYixhQUhkO0FBSUUsV0FBSyxFQUFHYyxLQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLSVgsSUFMSixDQURGO0FBU0QsR0FmRDs7QUFpQkEsU0FDRSxNQUFDLGlGQUFEO0FBQXNCLFlBQVEsRUFBR0Usd0JBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBR0osaURBQVUsQ0FBQ0MsNkRBQU0sQ0FBQ2UsVUFBUixFQUFvQjlCLFNBQXBCLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSVcsS0FBSyxDQUFDb0IsR0FBTixDQUFVTixVQUFWLENBREosQ0FERixDQURGO0FBT0QsQ0FoREQ7O0dBQU0zQixVOztLQUFBQSxVO0FBa0ROQSxVQUFVLENBQUNrQyxTQUFYLEdBQXVCO0FBQ3JCakMsVUFBUSxFQUFFa0MsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFETjtBQUVyQm5DLFdBQVMsRUFBRWlDLGlEQUFTLENBQUNDLE1BRkE7QUFHckJqQyxhQUFXLEVBQUVnQyxpREFBUyxDQUFDRyxNQUhGO0FBSXJCbEMscUJBQW1CLEVBQUUrQixpREFBUyxDQUFDRyxNQUpWO0FBS3JCakMsd0JBQXNCLEVBQUU4QixpREFBUyxDQUFDRyxNQUxiO0FBTXJCaEMsU0FBTyxFQUFFNkIsaURBQVMsQ0FBQ0k7QUFORSxDQUF2QjtBQVNBdkMsVUFBVSxDQUFDd0MsWUFBWCxHQUEwQjtBQUN4QnJDLGFBQVcsRUFBRSxDQURXO0FBRXhCQyxxQkFBbUIsRUFBRSxJQUZHO0FBR3hCQyx3QkFBc0IsRUFBRTtBQUhBLENBQTFCO0FBTWVMLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE3ODFjOWRkYWMzZmQ1MTRlMDA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgZnJvbSAnQHJlc2VhcmNoZ2F0ZS9yZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGV4dFJldmVhbC5tb2R1bGUuY3NzJztcblxuY29uc3QgVGV4dFJldmVhbCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIHJldmVhbERlbGF5LCBjaGFyVHJhbnNpdGlvbkRlbGF5LCBjaGFyVHJhbnNpdGlvbkR1cmF0aW9uLCB2aXNpYmxlIH0pID0+IHtcbiAgY29uc3QgdGltZW91dFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB2aXNpYmlsaXR5ID0gdHlwZW9mIHZpc2libGUgIT09ICd1bmRlZmluZWQnID8gdmlzaWJsZSA6IGlzVmlzaWJsZTtcblxuICBjb25zdCBjaGFycyA9IGNoaWxkcmVuLnNwbGl0KCcnKTtcbiAgY29uc3QgY2hhckNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoc3R5bGVzLmNoYXIsIHtcbiAgICBbc3R5bGVzLnZpc2libGVdOiB2aXNpYmlsaXR5LFxuICAgIFtzdHlsZXMuaW52aXNpYmxlXTogIXZpc2liaWxpdHksXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUludGVyc2VjdGlvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgaXNJbnRlcnNlY3RpbmcgfSA9IGV2ZW50O1xuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRSZWYuY3VycmVudCk7XG5cbiAgICBpZiAoaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgIHNldFZpc2libGUodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4gc2V0VmlzaWJsZShmYWxzZSksIDUwMDApO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJlbmRlckNoYXIgPSAoY2hhciwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogYCR7IGNoYXJUcmFuc2l0aW9uRHVyYXRpb24gfXNgLFxuICAgICAgdHJhbnNpdGlvbkRlbGF5OiBgJHsgcmV2ZWFsRGVsYXkgKyAoaW5kZXggKiBjaGFyVHJhbnNpdGlvbkRlbGF5KSB9c2AsXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8c3BhblxuICAgICAgICBrZXk9eyBpbmRleCB9XG4gICAgICAgIGRhdGEtaW5kZXg9eyBpbmRleCB9XG4gICAgICAgIGNsYXNzTmFtZT17IGNoYXJDbGFzc05hbWUgfVxuICAgICAgICBzdHlsZT17IHN0eWxlIH0+XG4gICAgICAgIHsgY2hhciB9XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxJbnRlcnNlY3Rpb25PYnNlcnZlciBvbkNoYW5nZT17IGhhbmRsZUludGVyc2VjdGlvbkNoYW5nZSB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc05hbWVzKHN0eWxlcy50ZXh0UmV2ZWFsLCBjbGFzc05hbWUpIH0+XG4gICAgICAgIHsgY2hhcnMubWFwKHJlbmRlckNoYXIpIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvSW50ZXJzZWN0aW9uT2JzZXJ2ZXI+XG4gICk7XG59O1xuXG5UZXh0UmV2ZWFsLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXZlYWxEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgY2hhclRyYW5zaXRpb25EZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgY2hhclRyYW5zaXRpb25EdXJhdGlvbjogUHJvcFR5cGVzLm51bWJlcixcbiAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5UZXh0UmV2ZWFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgcmV2ZWFsRGVsYXk6IDAsXG4gIGNoYXJUcmFuc2l0aW9uRGVsYXk6IDAuMDUsXG4gIGNoYXJUcmFuc2l0aW9uRHVyYXRpb246IDAuNyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRSZXZlYWw7XG4iXSwic291cmNlUm9vdCI6IiJ9