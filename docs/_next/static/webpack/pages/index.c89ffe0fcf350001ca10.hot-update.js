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
    transitionDelay: 0.8,
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
    transitionDelay: 0.9,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 96,
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
      lineNumber: 101,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.copyright,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, __jsx("span", {
    role: "img",
    "aria-label": "copyright",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3BhZ2VzL2hvbWUvY29tcG9uZW50cy9jb250YWN0cy9Db250YWN0cy5qcyJdLCJuYW1lcyI6WyJDb250YWN0cyIsInVzZVZpZXdwb3J0Iiwid2lkdGgiLCJjaGVja1RvdWNoU2NyZWVuIiwidXNlU3RhdGUiLCJpc1Zpc2libGUiLCJzZXRWaXNpYmxlIiwidGl0bGVSZWYiLCJ1c2VSZWYiLCJzdWJ0aXRsZVJlZiIsInllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJzdWJ0aXRsZSIsInJlc2V0VHJhbnNmb3JtcyIsInVzZUNhbGxiYWNrIiwiY2hhbmdlU3R5bGUiLCJjdXJyZW50IiwiaGFuZGxlTW91c2VNb3ZlIiwiZXZlbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInRYIiwiZ2V0UmFuZ2VWYWx1ZSIsInRZIiwiclkiLCJyWCIsInRyYW5zbGF0ZVRpdGxlIiwidHJhbnNsYXRlU3VidGl0bGUiLCJyb3RhdGVUaXRsZSIsInJvdGF0ZVN1YnRpdGxlIiwic2NhbGUzZCIsImhhbmRsZUludGVyc2VjdGlvbkNoYW5nZSIsImlzSW50ZXJzZWN0aW5nIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGVzIiwiY29udGFjdHMiLCJiYWNrZ3JvdW5kIiwiY29udGVudCIsInRpdGxlIiwic29jaWFsIiwiR2l0aHViSWNvbiIsIkxpbmtlZGluSWNvbiIsIk1haWxJY29uIiwiQ3ZJY29uIiwiY29weXJpZ2h0IiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUFBOztBQUFBLHVCQUNlQywwRUFBVyxFQUQxQjtBQUFBLFFBQ2JDLEtB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b0QsU0FBVCxHQUFxQixFQUFyQjtBQUVlcEQsdUVBQWY7QUFFQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jODlmZmUwZmNmMzUwMDAxY2ExMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgZnJvbSAnQHJlc2VhcmNoZ2F0ZS9yZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInO1xuaW1wb3J0IFRleHRSZXZlYWwgZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvdGV4dC1yZXZlYWwnO1xuaW1wb3J0IHsgR2l0aHViSWNvbiwgTGlua2VkaW5JY29uLCBNYWlsSWNvbiwgQ3ZJY29uIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbnMnO1xuaW1wb3J0IHsgZ2V0UmFuZ2VWYWx1ZSwgY2hhbmdlU3R5bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvdXRpbHMnO1xuaW1wb3J0IHVzZVZpZXdwb3J0IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9ob29rcy91c2Utdmlld3BvcnQnO1xuaW1wb3J0IFNvY2lhbEl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL3NvY2lhbC1pdGVtL1NvY2lhbEl0ZW0nO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29udGFjdHMubW9kdWxlLmNzcyc7XG5cbmNvbnN0IENvbnRhY3RzID0gKCkgPT4ge1xuICBjb25zdCB7IHdpZHRoLCBjaGVja1RvdWNoU2NyZWVuIH0gPSB1c2VWaWV3cG9ydCgpO1xuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdGl0bGVSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3Qgc3VidGl0bGVSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCB5ZWFyID0gKG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IHN1YnRpdGxlID0gd2lkdGggPiA2MDAgPyAnQ3VyaW91cyBmb3IgbW9yZT8gRmVlbCBmcmVlIHRvIGNvbnRhY3QgbWUuJyA6ICdMZXRcXCdzIGdldCBpbiB0b3VjaC4nO1xuXG4gIGNvbnN0IHJlc2V0VHJhbnNmb3JtcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjaGFuZ2VTdHlsZSh0aXRsZVJlZi5jdXJyZW50LCAndHJhbnNmb3JtJywgJ25vbmUnKTtcbiAgICBjaGFuZ2VTdHlsZShzdWJ0aXRsZVJlZi5jdXJyZW50LCAndHJhbnNmb3JtJywgJ25vbmUnKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQ7XG4gICAgY29uc3QgeyBpbm5lcldpZHRoLCBpbm5lckhlaWdodCB9ID0gd2luZG93O1xuXG4gICAgaWYgKCFjaGVja1RvdWNoU2NyZWVuKCkpIHtcbiAgICAgIGNvbnN0IHRYID0gZ2V0UmFuZ2VWYWx1ZSgoY2xpZW50WCAvIGlubmVyV2lkdGgpLCAzMCwgLTMwKTtcbiAgICAgIGNvbnN0IHRZID0gZ2V0UmFuZ2VWYWx1ZSgoY2xpZW50WSAvIGlubmVySGVpZ2h0KSwgMTAsIC0xMCk7XG5cbiAgICAgIGNvbnN0IHJZID0gMDtcbiAgICAgIGNvbnN0IHJYID0gMDtcblxuICAgICAgY29uc3QgdHJhbnNsYXRlVGl0bGUgPSBgdHJhbnNsYXRlM2QoJHt0WH1weCwgJHt0WX1weCwgMHB4KWA7XG4gICAgICBjb25zdCB0cmFuc2xhdGVTdWJ0aXRsZSA9IGB0cmFuc2xhdGUzZCgke3RYICogMC43fXB4LCAke3RZICogMC43fXB4LCAwcHgpYDtcblxuICAgICAgY29uc3Qgcm90YXRlVGl0bGUgPSBgcm90YXRlWCgkey1yWH1kZWcpIHJvdGF0ZVkoJHtyWX1kZWcpIHJvdGF0ZVooMGRlZylgO1xuICAgICAgY29uc3Qgcm90YXRlU3VidGl0bGUgPSAncm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyknO1xuXG4gICAgICBjb25zdCBzY2FsZTNkID0gJ3NjYWxlM2QoMSwgMSwgMSknO1xuXG4gICAgICBjaGFuZ2VTdHlsZSh0aXRsZVJlZi5jdXJyZW50LCAndHJhbnNmb3JtJywgYCR7dHJhbnNsYXRlVGl0bGV9ICR7cm90YXRlVGl0bGV9ICR7c2NhbGUzZH1gKTtcbiAgICAgIGNoYW5nZVN0eWxlKHN1YnRpdGxlUmVmLmN1cnJlbnQsICd0cmFuc2Zvcm0nLCBgJHt0cmFuc2xhdGVTdWJ0aXRsZX0gJHtyb3RhdGVTdWJ0aXRsZX0gJHtzY2FsZTNkfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFuZ2VTdHlsZSh0aXRsZVJlZi5jdXJyZW50LCAndHJhbnNmb3JtJywgJ25vbmUnKTtcbiAgICAgIGNoYW5nZVN0eWxlKHN1YnRpdGxlUmVmLmN1cnJlbnQsICd0cmFuc2Zvcm0nLCAnbm9uZScpO1xuICAgIH1cbiAgfSwgW2NoZWNrVG91Y2hTY3JlZW5dKTtcblxuICBjb25zdCBoYW5kbGVJbnRlcnNlY3Rpb25DaGFuZ2UgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICBzZXRWaXNpYmxlKGV2ZW50LmlzSW50ZXJzZWN0aW5nKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hlY2tUb3VjaFNjcmVlbigpICYmIHJlc2V0VHJhbnNmb3JtcygpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICB9O1xuICB9LCBbaGFuZGxlTW91c2VNb3ZlLCByZXNldFRyYW5zZm9ybXMsIGNoZWNrVG91Y2hTY3JlZW5dKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJjb250YWN0c1wiIGNsYXNzTmFtZT17IHN0eWxlcy5jb250YWN0cyB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuYmFja2dyb3VuZCB9IC8+XG4gICAgICA8SW50ZXJzZWN0aW9uT2JzZXJ2ZXIgb25DaGFuZ2U9eyBoYW5kbGVJbnRlcnNlY3Rpb25DaGFuZ2UgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuY29udGVudCB9PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17IHRpdGxlUmVmIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17IHN0eWxlcy50aXRsZSB9PlxuICAgICAgICAgICAgPFRleHRSZXZlYWw+VGhhbmsgeW91ITwvVGV4dFJldmVhbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByZWY9eyBzdWJ0aXRsZVJlZiB9XG4gICAgICAgICAgICBjbGFzc05hbWU9eyBzdHlsZXMuc3VidGl0bGUgfT5cbiAgICAgICAgICAgIDxUZXh0UmV2ZWFsXG4gICAgICAgICAgICAgIHJldmVhbERlbGF5PXsgMC43IH1cbiAgICAgICAgICAgICAgY2hhclRyYW5zaXRpb25EZWxheT17IDAgfT5cbiAgICAgICAgICAgICAgeyBzdWJ0aXRsZSB9XG4gICAgICAgICAgICA8L1RleHRSZXZlYWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuc29jaWFsIH0+XG4gICAgICAgICAgICA8U29jaWFsSXRlbVxuICAgICAgICAgICAgICBpY29uPXsgR2l0aHViSWNvbiB9XG4gICAgICAgICAgICAgIHRleHQ9XCJHaXRodWJcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3BhdWxvYm1hcmNvc1wiXG4gICAgICAgICAgICAgIHRyYW5zaXRpb25EZWxheT17IDAuOCB9IC8+XG4gICAgICAgICAgICA8U29jaWFsSXRlbVxuICAgICAgICAgICAgICBpY29uPXsgTGlua2VkaW5JY29uIH1cbiAgICAgICAgICAgICAgdGV4dD1cIkxpbmtlZGluXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9wYXVsb2JtYXJjb3NcIlxuICAgICAgICAgICAgICB0cmFuc2l0aW9uRGVsYXk9eyAwLjkgfSAvPlxuICAgICAgICAgICAgPFNvY2lhbEl0ZW1cbiAgICAgICAgICAgICAgaWNvbj17IE1haWxJY29uIH1cbiAgICAgICAgICAgICAgdGV4dD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgaHJlZj1cIm1haWx0bzpwYXVsb2JtYXJjb3NAb3V0bG9vay5jb21cIlxuICAgICAgICAgICAgICB0cmFuc2l0aW9uRGVsYXk9eyAxIH0gLz5cbiAgICAgICAgICAgIDxTb2NpYWxJdGVtXG4gICAgICAgICAgICAgIGljb249eyBDdkljb24gfVxuICAgICAgICAgICAgICB0ZXh0PVwiQ3VycmljdWx1bVwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFsaGd5Z1ltRXZGa0V5SzZyc2pMYVo5ZF82WTNOVG9wTy92aWV3P3VzcD1zaGFyaW5nXCJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbkRlbGF5PXsgMS4xIH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ludGVyc2VjdGlvbk9ic2VydmVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuY29weXJpZ2h0IH0+XG4gICAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwiY29weXJpZ2h0XCI+RGV2ZWxvcGVkICYgZGVzaWduZWQgYnkgUGF1bG8gTWFyY29zIMKp77iPIHsgeWVhciB9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Db250YWN0cy5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdHM7XG5cbi8qIMKp77iPIFBhdWxvIE1hcmNvcyB7IHllYXIgfSDimqEgTWFkZSB3aXRoIOKdpCBhbmQgUmVhY3QgKi9cbiJdLCJzb3VyY2VSb290IjoiIn0=