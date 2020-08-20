webpackHotUpdate_N_E("pages/index",{

/***/ "./www/pages/home/components/contacts/components/social-item/SocialItem.js":
/*!*********************************************************************************!*\
  !*** ./www/pages/home/components/contacts/components/social-item/SocialItem.js ***!
  \*********************************************************************************/
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
/* harmony import */ var _moxy_next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @moxy/next-link */ "./node_modules/@moxy/next-link/es/index.js");
/* harmony import */ var _SocialItem_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SocialItem.module.css */ "./www/pages/home/components/contacts/components/social-item/SocialItem.module.css");
/* harmony import */ var _SocialItem_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_SocialItem_module_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\paulo\\Desktop\\Work\\Projects\\Personal\\Web\\paulobmarcos\\www\\pages\\home\\components\\contacts\\components\\social-item\\SocialItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const SocialItem = ({
  className,
  icon,
  text,
  transitionDelay,
  href,
  isVisible
}) => {
  const Icon = icon;
  const itemClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()(_SocialItem_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.item, {
    [_SocialItem_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.visible]: isVisible,
    [_SocialItem_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.invisible]: !isVisible
  }, className);
  const itemStyle = {
    transitionDelay: "".concat(transitionDelay, "s")
  };
  return __jsx(_moxy_next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: itemClassName,
    style: itemStyle,
    external: true,
    newTab: true,
    href: href,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _SocialItem_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(Icon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, text)));
};

_c = SocialItem;
SocialItem.propTypes = {
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  transitionDelay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
SocialItem.defaultProps = {
  transitionDelay: 0
};
/* harmony default export */ __webpack_exports__["default"] = (SocialItem);

var _c;

$RefreshReg$(_c, "SocialItem");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3BhZ2VzL2hvbWUvY29tcG9uZW50cy9jb250YWN0cy9jb21wb25lbnRzL3NvY2lhbC1pdGVtL1NvY2lhbEl0ZW0uanMiXSwibmFtZXMiOlsiU29jaWFsSXRlbSIsImNsYXNzTmFtZSIsImljb24iLCJ0ZXh0IiwidHJhbnNpdGlvbkRlbGF5IiwiaHJlZiIsImlzVmlzaWJsZSIsIkljb24iLCJpdGVtQ2xhc3NOYW1lIiwiY2xhc3NOYW1lcyIsInN0eWxlcyIsIml0ZW0iLCJ2aXNpYmxlIiwiaW52aXNpYmxlIiwiaXRlbVN0eWxlIiwiY29udGVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJudW1iZXIiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLFVBQVUsR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUMsTUFBYjtBQUFtQkMsTUFBbkI7QUFBeUJDLGlCQUF6QjtBQUEwQ0MsTUFBMUM7QUFBZ0RDO0FBQWhELENBQUQsS0FBaUU7QUFDbEYsUUFBTUMsSUFBSSxHQUFHTCxJQUFiO0FBRUEsUUFBTU0sYUFBYSxHQUFHQyxpREFBVSxDQUFDQyw2REFBTSxDQUFDQyxJQUFSLEVBQWM7QUFDNUMsS0FBQ0QsNkRBQU0sQ0FBQ0UsT0FBUixHQUFrQk4sU0FEMEI7QUFFNUMsS0FBQ0ksNkRBQU0sQ0FBQ0csU0FBUixHQUFvQixDQUFDUDtBQUZ1QixHQUFkLEVBRzdCTCxTQUg2QixDQUFoQztBQUtBLFFBQU1hLFNBQVMsR0FBRztBQUNoQlYsbUJBQWUsWUFBS0EsZUFBTDtBQURDLEdBQWxCO0FBSUEsU0FDRSxNQUFDLHVEQUFEO0FBQ0UsYUFBUyxFQUFHSSxhQURkO0FBRUUsU0FBSyxFQUFHTSxTQUZWO0FBR0UsWUFBUSxNQUhWO0FBSUUsVUFBTSxNQUpSO0FBS0UsUUFBSSxFQUFHVCxJQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFLLGFBQVMsRUFBR0ssNkRBQU0sQ0FBQ0ssT0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtaLElBQUwsQ0FGRixDQU5GLENBREY7QUFhRCxDQXpCRDs7S0FBTUgsVTtBQTJCTkEsVUFBVSxDQUFDZ0IsU0FBWCxHQUF1QjtBQUNyQmQsTUFBSSxFQUFFZSxpREFBUyxDQUFDQyxHQUFWLENBQWNDLFVBREM7QUFFckJoQixNQUFJLEVBQUVjLGlEQUFTLENBQUNHLE1BQVYsQ0FBaUJELFVBRkY7QUFHckJsQixXQUFTLEVBQUVnQixpREFBUyxDQUFDRyxNQUhBO0FBSXJCaEIsaUJBQWUsRUFBRWEsaURBQVMsQ0FBQ0k7QUFKTixDQUF2QjtBQU9BckIsVUFBVSxDQUFDc0IsWUFBWCxHQUEwQjtBQUN4QmxCLGlCQUFlLEVBQUU7QUFETyxDQUExQjtBQUllSix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MmM0NDE1ZDlmZjhmMzg0OGE0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBJbnRlcnNlY3Rpb25PYnNlcnZlciBmcm9tICdAcmVzZWFyY2hnYXRlL3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnQG1veHkvbmV4dC1saW5rJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NvY2lhbEl0ZW0ubW9kdWxlLmNzcyc7XG5cbmNvbnN0IFNvY2lhbEl0ZW0gPSAoeyBjbGFzc05hbWUsIGljb24sIHRleHQsIHRyYW5zaXRpb25EZWxheSwgaHJlZiwgaXNWaXNpYmxlIH0pID0+IHtcbiAgY29uc3QgSWNvbiA9IGljb247XG5cbiAgY29uc3QgaXRlbUNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoc3R5bGVzLml0ZW0sIHtcbiAgICBbc3R5bGVzLnZpc2libGVdOiBpc1Zpc2libGUsXG4gICAgW3N0eWxlcy5pbnZpc2libGVdOiAhaXNWaXNpYmxlLFxuICB9LCBjbGFzc05hbWUpO1xuXG4gIGNvbnN0IGl0ZW1TdHlsZSA9IHtcbiAgICB0cmFuc2l0aW9uRGVsYXk6IGAke3RyYW5zaXRpb25EZWxheX1zYCxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxOZXh0TGlua1xuICAgICAgY2xhc3NOYW1lPXsgaXRlbUNsYXNzTmFtZSB9XG4gICAgICBzdHlsZT17IGl0ZW1TdHlsZSB9XG4gICAgICBleHRlcm5hbFxuICAgICAgbmV3VGFiXG4gICAgICBocmVmPXsgaHJlZiB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuY29udGVudCB9PlxuICAgICAgICA8SWNvbiAvPlxuICAgICAgICA8cD57IHRleHQgfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9OZXh0TGluaz5cbiAgKTtcbn07XG5cblNvY2lhbEl0ZW0ucHJvcFR5cGVzID0ge1xuICBpY29uOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0cmFuc2l0aW9uRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG59O1xuXG5Tb2NpYWxJdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgdHJhbnNpdGlvbkRlbGF5OiAwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU29jaWFsSXRlbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=