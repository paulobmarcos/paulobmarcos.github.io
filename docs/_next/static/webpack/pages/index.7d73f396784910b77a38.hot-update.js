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

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
        isVisible = _useState[0],
        setVisible = _useState[1];

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
  const handleIntersectionChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
    setVisible(event.isIntersecting);
  }, []);
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
      lineNumber: 67,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.background,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }), __jsx(_researchgate_react_intersection_observer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onChange: handleIntersectionChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("div", {
    ref: titleRef,
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx(_shared_components_text_reveal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, "Thank you!")), __jsx("div", {
    ref: subtitleRef,
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.subtitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx(_shared_components_text_reveal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    revealDelay: 0.7,
    charTransitionDelay: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, subtitle)), __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.social,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx(_components_social_item_SocialItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: _shared_components_icons__WEBPACK_IMPORTED_MODULE_3__["GithubIcon"],
    text: "Github",
    href: "https://github.com/paulobmarcos",
    isVisible: isVisible,
    transitionDelay: 0.9,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }), __jsx(_components_social_item_SocialItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: _shared_components_icons__WEBPACK_IMPORTED_MODULE_3__["LinkedinIcon"],
    text: "Linkedin",
    href: "https://www.linkedin.com/in/paulobmarcos",
    isVisible: isVisible,
    transitionDelay: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }), __jsx(_components_social_item_SocialItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: _shared_components_icons__WEBPACK_IMPORTED_MODULE_3__["MailIcon"],
    text: "Email",
    href: "mailto:paulobmarcos@outlook.com",
    isVisible: isVisible,
    transitionDelay: 1.1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }), __jsx(_components_social_item_SocialItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: _shared_components_icons__WEBPACK_IMPORTED_MODULE_3__["CvIcon"],
    text: "Curriculum",
    href: "https://drive.google.com/file/d/1lhgygYmEvFkEyK6rsjLaZ9d_6Y3NTopO/view?usp=sharing",
    isVisible: isVisible,
    transitionDelay: 1.2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.copyright,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx("span", {
    role: "img",
    "aria-label": "copyright",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, "Developed & designed by Paulo Marcos \xA9\uFE0F ", year)));
};

_s(Contacts, "tDh5ZRQOhpSFErXJXt2XnpqnTTU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3BhZ2VzL2hvbWUvY29tcG9uZW50cy9jb250YWN0cy9Db250YWN0cy5qcyJdLCJuYW1lcyI6WyJDb250YWN0cyIsInVzZVZpZXdwb3J0Iiwid2lkdGgiLCJjaGVja1RvdWNoU2NyZWVuIiwidXNlU3RhdGUiLCJpc1Zpc2libGUiLCJzZXRWaXNpYmxlIiwidGl0bGVSZWYiLCJ1c2VSZWYiLCJzdWJ0aXRsZVJlZiIsInllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJzdWJ0aXRsZSIsInJlc2V0VHJhbnNmb3JtcyIsInVzZUNhbGxiYWNrIiwiY2hhbmdlU3R5bGUiLCJjdXJyZW50IiwiaGFuZGxlTW91c2VNb3ZlIiwiZXZlbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInRYIiwiZ2V0UmFuZ2VWYWx1ZSIsInRZIiwiclkiLCJyWCIsInRyYW5zbGF0ZVRpdGxlIiwidHJhbnNsYXRlU3VidGl0bGUiLCJyb3RhdGVUaXRsZSIsInJvdGF0ZVN1YnRpdGxlIiwic2NhbGUzZCIsImhhbmRsZUludGVyc2VjdGlvbkNoYW5nZSIsImlzSW50ZXJzZWN0aW5nIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGVzIiwiY29udGFjdHMiLCJiYWNrZ3JvdW5kIiwiY29udGVudCIsInRpdGxlIiwic29jaWFsIiwiR2l0aHViSWNvbiIsIkxpbmtlZGluSWNvbiIsIk1haWxJY29uIiwiQ3ZJY29uIiwiY29weXJpZ2h0IiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUFBOztBQUFBLHVCQUNlQywwRUFBVyxFQUQxQjtBQUFBLFFBQ2JDLEtB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QUEseURBQWtGekMsSUFBbEYsQ0FERixDQTlDRixDQURGO0FBb0RELENBM0dEOztHQUFNVixRO1VBQ2dDQyxrRTs7O0tBRGhDRCxRO0FBNkdOQSxRQUFRLENBQUNvRCxTQUFULEdBQXFCLEVBQXJCO0FBRWVwRCx1RUFBZjtBQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdkNzNmMzk2Nzg0OTEwYjc3YTM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbnRlcnNlY3Rpb25PYnNlcnZlciBmcm9tICdAcmVzZWFyY2hnYXRlL3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XG5pbXBvcnQgVGV4dFJldmVhbCBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy90ZXh0LXJldmVhbCc7XG5pbXBvcnQgeyBHaXRodWJJY29uLCBMaW5rZWRpbkljb24sIE1haWxJY29uLCBDdkljb24gfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9pY29ucyc7XG5pbXBvcnQgeyBnZXRSYW5nZVZhbHVlLCBjaGFuZ2VTdHlsZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC91dGlscyc7XG5pbXBvcnQgdXNlVmlld3BvcnQgZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2hvb2tzL3VzZS12aWV3cG9ydCc7XG5pbXBvcnQgU29jaWFsSXRlbSBmcm9tICcuL2NvbXBvbmVudHMvc29jaWFsLWl0ZW0vU29jaWFsSXRlbSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250YWN0cy5tb2R1bGUuY3NzJztcblxuY29uc3QgQ29udGFjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgd2lkdGgsIGNoZWNrVG91Y2hTY3JlZW4gfSA9IHVzZVZpZXdwb3J0KCk7XG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0aXRsZVJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBzdWJ0aXRsZVJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IHllYXIgPSAobmV3IERhdGUoKSkuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3Qgc3VidGl0bGUgPSB3aWR0aCA+IDYwMCA/ICdDdXJpb3VzIGZvciBtb3JlPyBGZWVsIGZyZWUgdG8gY29udGFjdCBtZS4nIDogJ0xldFxcJ3MgZ2V0IGluIHRvdWNoLic7XG5cbiAgY29uc3QgcmVzZXRUcmFuc2Zvcm1zID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNoYW5nZVN0eWxlKHRpdGxlUmVmLmN1cnJlbnQsICd0cmFuc2Zvcm0nLCAnbm9uZScpO1xuICAgIGNoYW5nZVN0eWxlKHN1YnRpdGxlUmVmLmN1cnJlbnQsICd0cmFuc2Zvcm0nLCAnbm9uZScpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBjbGllbnRYLCBjbGllbnRZIH0gPSBldmVudDtcbiAgICBjb25zdCB7IGlubmVyV2lkdGgsIGlubmVySGVpZ2h0IH0gPSB3aW5kb3c7XG5cbiAgICBpZiAoIWNoZWNrVG91Y2hTY3JlZW4oKSkge1xuICAgICAgY29uc3QgdFggPSBnZXRSYW5nZVZhbHVlKChjbGllbnRYIC8gaW5uZXJXaWR0aCksIDMwLCAtMzApO1xuICAgICAgY29uc3QgdFkgPSBnZXRSYW5nZVZhbHVlKChjbGllbnRZIC8gaW5uZXJIZWlnaHQpLCAxMCwgLTEwKTtcblxuICAgICAgY29uc3QgclkgPSAwO1xuICAgICAgY29uc3QgclggPSAwO1xuXG4gICAgICBjb25zdCB0cmFuc2xhdGVUaXRsZSA9IGB0cmFuc2xhdGUzZCgke3RYfXB4LCAke3RZfXB4LCAwcHgpYDtcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZVN1YnRpdGxlID0gYHRyYW5zbGF0ZTNkKCR7dFggKiAwLjd9cHgsICR7dFkgKiAwLjd9cHgsIDBweClgO1xuXG4gICAgICBjb25zdCByb3RhdGVUaXRsZSA9IGByb3RhdGVYKCR7LXJYfWRlZykgcm90YXRlWSgke3JZfWRlZykgcm90YXRlWigwZGVnKWA7XG4gICAgICBjb25zdCByb3RhdGVTdWJ0aXRsZSA9ICdyb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKSc7XG5cbiAgICAgIGNvbnN0IHNjYWxlM2QgPSAnc2NhbGUzZCgxLCAxLCAxKSc7XG5cbiAgICAgIGNoYW5nZVN0eWxlKHRpdGxlUmVmLmN1cnJlbnQsICd0cmFuc2Zvcm0nLCBgJHt0cmFuc2xhdGVUaXRsZX0gJHtyb3RhdGVUaXRsZX0gJHtzY2FsZTNkfWApO1xuICAgICAgY2hhbmdlU3R5bGUoc3VidGl0bGVSZWYuY3VycmVudCwgJ3RyYW5zZm9ybScsIGAke3RyYW5zbGF0ZVN1YnRpdGxlfSAke3JvdGF0ZVN1YnRpdGxlfSAke3NjYWxlM2R9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoYW5nZVN0eWxlKHRpdGxlUmVmLmN1cnJlbnQsICd0cmFuc2Zvcm0nLCAnbm9uZScpO1xuICAgICAgY2hhbmdlU3R5bGUoc3VidGl0bGVSZWYuY3VycmVudCwgJ3RyYW5zZm9ybScsICdub25lJyk7XG4gICAgfVxuICB9LCBbY2hlY2tUb3VjaFNjcmVlbl0pO1xuXG4gIGNvbnN0IGhhbmRsZUludGVyc2VjdGlvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIHNldFZpc2libGUoZXZlbnQuaXNJbnRlcnNlY3RpbmcpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja1RvdWNoU2NyZWVuKCkgJiYgcmVzZXRUcmFuc2Zvcm1zKCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgIH07XG4gIH0sIFtoYW5kbGVNb3VzZU1vdmUsIHJlc2V0VHJhbnNmb3JtcywgY2hlY2tUb3VjaFNjcmVlbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImNvbnRhY3RzXCIgY2xhc3NOYW1lPXsgc3R5bGVzLmNvbnRhY3RzIH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5iYWNrZ3JvdW5kIH0gLz5cbiAgICAgIDxJbnRlcnNlY3Rpb25PYnNlcnZlciBvbkNoYW5nZT17IGhhbmRsZUludGVyc2VjdGlvbkNoYW5nZSB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5jb250ZW50IH0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcmVmPXsgdGl0bGVSZWYgfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXsgc3R5bGVzLnRpdGxlIH0+XG4gICAgICAgICAgICA8VGV4dFJldmVhbD5UaGFuayB5b3UhPC9UZXh0UmV2ZWFsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17IHN1YnRpdGxlUmVmIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17IHN0eWxlcy5zdWJ0aXRsZSB9PlxuICAgICAgICAgICAgPFRleHRSZXZlYWxcbiAgICAgICAgICAgICAgcmV2ZWFsRGVsYXk9eyAwLjcgfVxuICAgICAgICAgICAgICBjaGFyVHJhbnNpdGlvbkRlbGF5PXsgMCB9PlxuICAgICAgICAgICAgICB7IHN1YnRpdGxlIH1cbiAgICAgICAgICAgIDwvVGV4dFJldmVhbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5zb2NpYWwgfT5cbiAgICAgICAgICAgIDxTb2NpYWxJdGVtXG4gICAgICAgICAgICAgIGljb249eyBHaXRodWJJY29uIH1cbiAgICAgICAgICAgICAgdGV4dD1cIkdpdGh1YlwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcGF1bG9ibWFyY29zXCJcbiAgICAgICAgICAgICAgaXNWaXNpYmxlPXsgaXNWaXNpYmxlIH1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbkRlbGF5PXsgMC45IH0gLz5cbiAgICAgICAgICAgIDxTb2NpYWxJdGVtXG4gICAgICAgICAgICAgIGljb249eyBMaW5rZWRpbkljb24gfVxuICAgICAgICAgICAgICB0ZXh0PVwiTGlua2VkaW5cIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3BhdWxvYm1hcmNvc1wiXG4gICAgICAgICAgICAgIGlzVmlzaWJsZT17IGlzVmlzaWJsZSB9XG4gICAgICAgICAgICAgIHRyYW5zaXRpb25EZWxheT17IDEgfSAvPlxuICAgICAgICAgICAgPFNvY2lhbEl0ZW1cbiAgICAgICAgICAgICAgaWNvbj17IE1haWxJY29uIH1cbiAgICAgICAgICAgICAgdGV4dD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgaHJlZj1cIm1haWx0bzpwYXVsb2JtYXJjb3NAb3V0bG9vay5jb21cIlxuICAgICAgICAgICAgICBpc1Zpc2libGU9eyBpc1Zpc2libGUgfVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uRGVsYXk9eyAxLjEgfSAvPlxuICAgICAgICAgICAgPFNvY2lhbEl0ZW1cbiAgICAgICAgICAgICAgaWNvbj17IEN2SWNvbiB9XG4gICAgICAgICAgICAgIHRleHQ9XCJDdXJyaWN1bHVtXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWxoZ3lnWW1FdkZrRXlLNnJzakxhWjlkXzZZM05Ub3BPL3ZpZXc/dXNwPXNoYXJpbmdcIlxuICAgICAgICAgICAgICBpc1Zpc2libGU9eyBpc1Zpc2libGUgfVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uRGVsYXk9eyAxLjIgfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvSW50ZXJzZWN0aW9uT2JzZXJ2ZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5jb3B5cmlnaHQgfT5cbiAgICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJjb3B5cmlnaHRcIj5EZXZlbG9wZWQgJiBkZXNpZ25lZCBieSBQYXVsbyBNYXJjb3MgwqnvuI8geyB5ZWFyIH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkNvbnRhY3RzLnByb3BUeXBlcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0cztcblxuLyogwqnvuI8gUGF1bG8gTWFyY29zIHsgeWVhciB9IOKaoSBNYWRlIHdpdGgg4p2kIGFuZCBSZWFjdCAqL1xuIl0sInNvdXJjZVJvb3QiOiIifQ==