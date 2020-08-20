webpackHotUpdate_N_E("pages/index",{

/***/ "./www/pages/home/components/contacts/Contacts.js":
/*!********************************************************!*\
  !*** ./www/pages/home/components/contacts/Contacts.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _researchgate_react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @researchgate/react-intersection-observer */ "./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
/* harmony import */ var _shared_components_text_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/text-reveal */ "./www/shared/components/text-reveal/index.js");
/* harmony import */ var _shared_components_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/icons */ "./www/shared/components/icons/index.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/utils */ "./www/shared/utils/index.js");
/* harmony import */ var _shared_hooks_use_viewport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/hooks/use-viewport */ "./www/shared/hooks/use-viewport/index.js");
/* harmony import */ var _components_social_item_SocialItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/social-item/SocialItem */ "./www/pages/home/components/contacts/components/social-item/SocialItem.js");
/* harmony import */ var _Contacts_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Contacts.module.css */ "./www/pages/home/components/contacts/Contacts.module.css");
/* harmony import */ var _Contacts_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Contacts_module_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\paulo\\Desktop\\Work\\Projects\\Personal\\Web\\paulobmarcos\\www\\pages\\home\\components\\contacts\\Contacts.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Contacts = () => {
  _s();

  const _useViewport = Object(_shared_hooks_use_viewport__WEBPACK_IMPORTED_MODULE_5__["default"])(),
        width = _useViewport.width,
        checkTouchScreen = _useViewport.checkTouchScreen;

  const titleRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const subtitleRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const year = new Date().getFullYear();
  const subtitle = width > 600 ? 'Curious for more? Feel free to contact me.' : 'Let\'s get in touch.';
  const resetTransforms = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["changeStyle"])(titleRef.current, 'transform', 'none');
    Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["changeStyle"])(subtitleRef.current, 'transform', 'none');
  }, []);
  const handleMouseMove = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
    const clientX = event.clientX,
          clientY = event.clientY;
    const _window = window,
          innerWidth = _window.innerWidth,
          innerHeight = _window.innerHeight;

    if (!checkTouchScreen()) {
      const tX = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["getRangeValue"])(clientX / innerWidth, 30, -30);
      const tY = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["getRangeValue"])(clientY / innerHeight, 10, -10);
      const rY = 0;
      const rX = 0;
      const translateTitle = "translate3d(".concat(tX, "px, ").concat(tY, "px, 0px)");
      const translateSubtitle = "translate3d(".concat(tX * 0.7, "px, ").concat(tY * 0.7, "px, 0px)");
      const rotateTitle = "rotateX(".concat(-rX, "deg) rotateY(").concat(rY, "deg) rotateZ(0deg)");
      const rotateSubtitle = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
      const scale3d = 'scale3d(1, 1, 1)';
      Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["changeStyle"])(titleRef.current, 'transform', "".concat(translateTitle, " ").concat(rotateTitle, " ").concat(scale3d));
      Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["changeStyle"])(subtitleRef.current, 'transform', "".concat(translateSubtitle, " ").concat(rotateSubtitle, " ").concat(scale3d));
    } else {
      Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["changeStyle"])(titleRef.current, 'transform', 'none');
      Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["changeStyle"])(subtitleRef.current, 'transform', 'none');
    }
  }, [checkTouchScreen]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    checkTouchScreen() && resetTransforms();
    window.addEventListener('mousemove', handleMouseMove, {
      passive: true
    });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove, {
        passive: true
      });
    };
  }, [handleMouseMove, resetTransforms, checkTouchScreen]);
  return __jsx("div", {
    id: "contacts",
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.contacts,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.background,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }), __jsx(_researchgate_react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onChange: handleIntersectionChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("div", {
    ref: titleRef,
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx(_shared_components_text_reveal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "Thank you!")), __jsx("div", {
    ref: subtitleRef,
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.subtitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx(_shared_components_text_reveal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    revealDelay: 0.7,
    charTransitionDelay: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, subtitle)), __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.social,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx(_components_social_item_SocialItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: _shared_components_icons__WEBPACK_IMPORTED_MODULE_3__["GithubIcon"],
    text: "Github",
    href: "https://github.com/paulobmarcos",
    transitionDelay: 0.8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }), __jsx(_components_social_item_SocialItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: _shared_components_icons__WEBPACK_IMPORTED_MODULE_3__["LinkedinIcon"],
    text: "Linkedin",
    href: "https://www.linkedin.com/in/paulobmarcos",
    transitionDelay: 0.9,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }), __jsx(_components_social_item_SocialItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: _shared_components_icons__WEBPACK_IMPORTED_MODULE_3__["MailIcon"],
    text: "Email",
    href: "mailto:paulobmarcos@outlook.com",
    transitionDelay: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }), __jsx(_components_social_item_SocialItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: _shared_components_icons__WEBPACK_IMPORTED_MODULE_3__["CvIcon"],
    text: "Curriculum",
    href: "https://drive.google.com/file/d/1lhgygYmEvFkEyK6rsjLaZ9d_6Y3NTopO/view?usp=sharing",
    transitionDelay: 1.1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.copyright,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }, __jsx("span", {
    role: "img",
    "aria-label": "copyright",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, "Developed & designed by Paulo Marcos \xA9\uFE0F ", year)));
};

_s(Contacts, "j638QegprY0HtqPCX6tQlh6yGz0=", false, function () {
  return [_shared_hooks_use_viewport__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = Contacts;
Contacts.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Contacts);
/* ©️ Paulo Marcos { year } ⚡ Made with ❤ and React */

var _c;

$RefreshReg$(_c, "Contacts");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3BhZ2VzL2hvbWUvY29tcG9uZW50cy9jb250YWN0cy9Db250YWN0cy5qcyJdLCJuYW1lcyI6WyJDb250YWN0cyIsInVzZVZpZXdwb3J0Iiwid2lkdGgiLCJjaGVja1RvdWNoU2NyZWVuIiwidGl0bGVSZWYiLCJ1c2VSZWYiLCJzdWJ0aXRsZVJlZiIsInllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJzdWJ0aXRsZSIsInJlc2V0VHJhbnNmb3JtcyIsInVzZUNhbGxiYWNrIiwiY2hhbmdlU3R5bGUiLCJjdXJyZW50IiwiaGFuZGxlTW91c2VNb3ZlIiwiZXZlbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInRYIiwiZ2V0UmFuZ2VWYWx1ZSIsInRZIiwiclkiLCJyWCIsInRyYW5zbGF0ZVRpdGxlIiwidHJhbnNsYXRlU3VidGl0bGUiLCJyb3RhdGVUaXRsZSIsInJvdGF0ZVN1YnRpdGxlIiwic2NhbGUzZCIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0eWxlcyIsImNvbnRhY3RzIiwiYmFja2dyb3VuZCIsImhhbmRsZUludGVyc2VjdGlvbkNoYW5nZSIsImNvbnRlbnQiLCJ0aXRsZSIsInNvY2lhbCIsIkdpdGh1Ykljb24iLCJMaW5rZWRpbkljb24iLCJNYWlsSWNvbiIsIkN2SWNvbiIsImNvcHlyaWdodCIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLE1BQU07QUFBQTs7QUFBQSx1QkFDZUMsMEVBQVcsRUFEMUI7QUFBQSxRQUNiQyxLQURhLGdCQUNiQSxLQURhO0FBQUEsUUFDTkMsZ0JBRE0sZ0JBQ05BLGdCQURNOztBQUVyQixR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LFFBQUksRUFBR0MscUVBRFQ7QUFFRSxRQUFJLEVBQUMsVUFGUDtBQUdFLFFBQUksRUFBQywwQ0FIUDtBQUlFLG1CQUFlLEVBQUcsR0FKcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBV0UsTUFBQywwRUFBRDtBQUNFLFFBQUksRUFBR0MsaUVBRFQ7QUFFRSxRQUFJLEVBQUMsT0FGUDtBQUdFLFFBQUksRUFBQyxpQ0FIUDtBQUlFLG1CQUFlLEVBQUcsQ0FKcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBZ0JFLE1BQUMsMEVBQUQ7QUFDRSxRQUFJLEVBQUdDLCtEQURUO0FBRUUsUUFBSSxFQUFDLFlBRlA7QUFHRSxRQUFJLEVBQUMsb0ZBSFA7QUFJRSxtQkFBZSxFQUFHLEdBSnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkYsQ0FmRixDQURGLENBRkYsRUEwQ0U7QUFBSyxhQUFTLEVBQUdWLDJEQUFNLENBQUNXLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFFBQUksRUFBQyxLQUFYO0FBQWlCLGtCQUFXLFdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseURBQWtGeEMsSUFBbEYsQ0FERixDQTFDRixDQURGO0FBZ0RELENBbEdEOztHQUFNUCxRO1VBQ2dDQyxrRTs7O0tBRGhDRCxRO0FBb0dOQSxRQUFRLENBQUNnRCxTQUFULEdBQXFCLEVBQXJCO0FBRWVoRCx1RUFBZjtBQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhjNTVjMTJlZGI5M2M0YzRhMjc1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEludGVyc2VjdGlvbk9ic2VydmVyIGZyb20gJ0ByZXNlYXJjaGdhdGUvcmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcbmltcG9ydCBUZXh0UmV2ZWFsIGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3RleHQtcmV2ZWFsJztcbmltcG9ydCB7IEdpdGh1Ykljb24sIExpbmtlZGluSWNvbiwgTWFpbEljb24sIEN2SWNvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2ljb25zJztcbmltcG9ydCB7IGdldFJhbmdlVmFsdWUsIGNoYW5nZVN0eWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3V0aWxzJztcbmltcG9ydCB1c2VWaWV3cG9ydCBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvaG9va3MvdXNlLXZpZXdwb3J0JztcbmltcG9ydCBTb2NpYWxJdGVtIGZyb20gJy4vY29tcG9uZW50cy9zb2NpYWwtaXRlbS9Tb2NpYWxJdGVtJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbnRhY3RzLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBDb250YWN0cyA9ICgpID0+IHtcbiAgY29uc3QgeyB3aWR0aCwgY2hlY2tUb3VjaFNjcmVlbiB9ID0gdXNlVmlld3BvcnQoKTtcbiAgY29uc3QgdGl0bGVSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3Qgc3VidGl0bGVSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCB5ZWFyID0gKG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IHN1YnRpdGxlID0gd2lkdGggPiA2MDAgPyAnQ3VyaW91cyBmb3IgbW9yZT8gRmVlbCBmcmVlIHRvIGNvbnRhY3QgbWUuJyA6ICdMZXRcXCdzIGdldCBpbiB0b3VjaC4nO1xuXG4gIGNvbnN0IHJlc2V0VHJhbnNmb3JtcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjaGFuZ2VTdHlsZSh0aXRsZVJlZi5jdXJyZW50LCAndHJhbnNmb3JtJywgJ25vbmUnKTtcbiAgICBjaGFuZ2VTdHlsZShzdWJ0aXRsZVJlZi5jdXJyZW50LCAndHJhbnNmb3JtJywgJ25vbmUnKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQ7XG4gICAgY29uc3QgeyBpbm5lcldpZHRoLCBpbm5lckhlaWdodCB9ID0gd2luZG93O1xuXG4gICAgaWYgKCFjaGVja1RvdWNoU2NyZWVuKCkpIHtcbiAgICAgIGNvbnN0IHRYID0gZ2V0UmFuZ2VWYWx1ZSgoY2xpZW50WCAvIGlubmVyV2lkdGgpLCAzMCwgLTMwKTtcbiAgICAgIGNvbnN0IHRZID0gZ2V0UmFuZ2VWYWx1ZSgoY2xpZW50WSAvIGlubmVySGVpZ2h0KSwgMTAsIC0xMCk7XG5cbiAgICAgIGNvbnN0IHJZID0gMDtcbiAgICAgIGNvbnN0IHJYID0gMDtcblxuICAgICAgY29uc3QgdHJhbnNsYXRlVGl0bGUgPSBgdHJhbnNsYXRlM2QoJHt0WH1weCwgJHt0WX1weCwgMHB4KWA7XG4gICAgICBjb25zdCB0cmFuc2xhdGVTdWJ0aXRsZSA9IGB0cmFuc2xhdGUzZCgke3RYICogMC43fXB4LCAke3RZICogMC43fXB4LCAwcHgpYDtcblxuICAgICAgY29uc3Qgcm90YXRlVGl0bGUgPSBgcm90YXRlWCgkey1yWH1kZWcpIHJvdGF0ZVkoJHtyWX1kZWcpIHJvdGF0ZVooMGRlZylgO1xuICAgICAgY29uc3Qgcm90YXRlU3VidGl0bGUgPSAncm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyknO1xuXG4gICAgICBjb25zdCBzY2FsZTNkID0gJ3NjYWxlM2QoMSwgMSwgMSknO1xuXG4gICAgICBjaGFuZ2VTdHlsZSh0aXRsZVJlZi5jdXJyZW50LCAndHJhbnNmb3JtJywgYCR7dHJhbnNsYXRlVGl0bGV9ICR7cm90YXRlVGl0bGV9ICR7c2NhbGUzZH1gKTtcbiAgICAgIGNoYW5nZVN0eWxlKHN1YnRpdGxlUmVmLmN1cnJlbnQsICd0cmFuc2Zvcm0nLCBgJHt0cmFuc2xhdGVTdWJ0aXRsZX0gJHtyb3RhdGVTdWJ0aXRsZX0gJHtzY2FsZTNkfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFuZ2VTdHlsZSh0aXRsZVJlZi5jdXJyZW50LCAndHJhbnNmb3JtJywgJ25vbmUnKTtcbiAgICAgIGNoYW5nZVN0eWxlKHN1YnRpdGxlUmVmLmN1cnJlbnQsICd0cmFuc2Zvcm0nLCAnbm9uZScpO1xuICAgIH1cbiAgfSwgW2NoZWNrVG91Y2hTY3JlZW5dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrVG91Y2hTY3JlZW4oKSAmJiByZXNldFRyYW5zZm9ybXMoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgfTtcbiAgfSwgW2hhbmRsZU1vdXNlTW92ZSwgcmVzZXRUcmFuc2Zvcm1zLCBjaGVja1RvdWNoU2NyZWVuXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiY29udGFjdHNcIiBjbGFzc05hbWU9eyBzdHlsZXMuY29udGFjdHMgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmJhY2tncm91bmQgfSAvPlxuICAgICAgPEludGVyc2VjdGlvbk9ic2VydmVyIG9uQ2hhbmdlPXsgaGFuZGxlSW50ZXJzZWN0aW9uQ2hhbmdlIH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmNvbnRlbnQgfT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByZWY9eyB0aXRsZVJlZiB9XG4gICAgICAgICAgICBjbGFzc05hbWU9eyBzdHlsZXMudGl0bGUgfT5cbiAgICAgICAgICAgIDxUZXh0UmV2ZWFsPlRoYW5rIHlvdSE8L1RleHRSZXZlYWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcmVmPXsgc3VidGl0bGVSZWYgfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXsgc3R5bGVzLnN1YnRpdGxlIH0+XG4gICAgICAgICAgICA8VGV4dFJldmVhbFxuICAgICAgICAgICAgICByZXZlYWxEZWxheT17IDAuNyB9XG4gICAgICAgICAgICAgIGNoYXJUcmFuc2l0aW9uRGVsYXk9eyAwIH0+XG4gICAgICAgICAgICAgIHsgc3VidGl0bGUgfVxuICAgICAgICAgICAgPC9UZXh0UmV2ZWFsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLnNvY2lhbCB9PlxuICAgICAgICAgICAgPFNvY2lhbEl0ZW1cbiAgICAgICAgICAgICAgaWNvbj17IEdpdGh1Ykljb24gfVxuICAgICAgICAgICAgICB0ZXh0PVwiR2l0aHViXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9wYXVsb2JtYXJjb3NcIlxuICAgICAgICAgICAgICB0cmFuc2l0aW9uRGVsYXk9eyAwLjggfSAvPlxuICAgICAgICAgICAgPFNvY2lhbEl0ZW1cbiAgICAgICAgICAgICAgaWNvbj17IExpbmtlZGluSWNvbiB9XG4gICAgICAgICAgICAgIHRleHQ9XCJMaW5rZWRpblwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcGF1bG9ibWFyY29zXCJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbkRlbGF5PXsgMC45IH0gLz5cbiAgICAgICAgICAgIDxTb2NpYWxJdGVtXG4gICAgICAgICAgICAgIGljb249eyBNYWlsSWNvbiB9XG4gICAgICAgICAgICAgIHRleHQ9XCJFbWFpbFwiXG4gICAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86cGF1bG9ibWFyY29zQG91dGxvb2suY29tXCJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbkRlbGF5PXsgMSB9IC8+XG4gICAgICAgICAgICA8U29jaWFsSXRlbVxuICAgICAgICAgICAgICBpY29uPXsgQ3ZJY29uIH1cbiAgICAgICAgICAgICAgdGV4dD1cIkN1cnJpY3VsdW1cIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbGhneWdZbUV2RmtFeUs2cnNqTGFaOWRfNlkzTlRvcE8vdmlldz91c3A9c2hhcmluZ1wiXG4gICAgICAgICAgICAgIHRyYW5zaXRpb25EZWxheT17IDEuMSB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9JbnRlcnNlY3Rpb25PYnNlcnZlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmNvcHlyaWdodCB9PlxuICAgICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cImNvcHlyaWdodFwiPkRldmVsb3BlZCAmIGRlc2lnbmVkIGJ5IFBhdWxvIE1hcmNvcyDCqe+4jyB7IHllYXIgfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ29udGFjdHMucHJvcFR5cGVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RzO1xuXG4vKiDCqe+4jyBQYXVsbyBNYXJjb3MgeyB5ZWFyIH0g4pqhIE1hZGUgd2l0aCDinaQgYW5kIFJlYWN0ICovXG4iXSwic291cmNlUm9vdCI6IiJ9