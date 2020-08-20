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
    visible: isVisible,
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
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx(_shared_components_text_reveal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    visible: isVisible,
    revealDelay: 0.7,
    charTransitionDelay: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, subtitle)), __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.social,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx(_components_social_item_SocialItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: _shared_components_icons__WEBPACK_IMPORTED_MODULE_3__["GithubIcon"],
    text: "Github",
    href: "https://github.com/paulobmarcos",
    isVisible: isVisible,
    transitionDelay: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }), __jsx(_components_social_item_SocialItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: _shared_components_icons__WEBPACK_IMPORTED_MODULE_3__["LinkedinIcon"],
    text: "Linkedin",
    href: "https://www.linkedin.com/in/paulobmarcos",
    isVisible: isVisible,
    transitionDelay: 1.2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }), __jsx(_components_social_item_SocialItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: _shared_components_icons__WEBPACK_IMPORTED_MODULE_3__["MailIcon"],
    text: "Email",
    href: "mailto:paulobmarcos@outlook.com",
    isVisible: isVisible,
    transitionDelay: 1.4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }), __jsx(_components_social_item_SocialItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: _shared_components_icons__WEBPACK_IMPORTED_MODULE_3__["CvIcon"],
    text: "Curriculum",
    href: "https://drive.google.com/file/d/1lhgygYmEvFkEyK6rsjLaZ9d_6Y3NTopO/view?usp=sharing",
    isVisible: isVisible,
    transitionDelay: 1.6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.copyright,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, __jsx("span", {
    role: "img",
    "aria-label": "copyright",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3BhZ2VzL2hvbWUvY29tcG9uZW50cy9jb250YWN0cy9Db250YWN0cy5qcyJdLCJuYW1lcyI6WyJDb250YWN0cyIsInVzZVZpZXdwb3J0Iiwid2lkdGgiLCJjaGVja1RvdWNoU2NyZWVuIiwidXNlU3RhdGUiLCJpc1Zpc2libGUiLCJzZXRWaXNpYmxlIiwidGl0bGVSZWYiLCJ1c2VSZWYiLCJzdWJ0aXRsZVJlZiIsInllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJzdWJ0aXRsZSIsInJlc2V0VHJhbnNmb3JtcyIsInVzZUNhbGxiYWNrIiwiY2hhbmdlU3R5bGUiLCJjdXJyZW50IiwiaGFuZGxlTW91c2VNb3ZlIiwiZXZlbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInRYIiwiZ2V0UmFuZ2VWYWx1ZSIsInRZIiwiclkiLCJyWCIsInRyYW5zbGF0ZVRpdGxlIiwidHJhbnNsYXRlU3VidGl0bGUiLCJyb3RhdGVUaXRsZSIsInJvdGF0ZVN1YnRpdGxlIiwic2NhbGUzZCIsImhhbmRsZUludGVyc2VjdGlvbkNoYW5nZSIsImlzSW50ZXJzZWN0aW5nIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGVzIiwiY29udGFjdHMiLCJiYWNrZ3JvdW5kIiwiY29udGVudCIsInRpdGxlIiwic29jaWFsIiwiR2l0aHViSWNvbiIsIkxpbmtlZGluSWNvbiIsIk1haWxJY29uIiwiQ3ZJY29uIiwiY29weXJpZ2h0IiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUFBOztBQUFBLHVCQUNlQywwRUFBVyxFQUQxQjtBQUFBLFFBQ2JDLEtB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a0JBQVcsV0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFBa0Z6QyxJQUFsRixDQURGLENBbERGLENBREY7QUF3REQsQ0EvR0Q7O0dBQU1WLFE7VUFDZ0NDLGtFOzs7S0FEaENELFE7QUFpSE5BLFFBQVEsQ0FBQ29ELFNBQVQsR0FBcUIsRUFBckI7QUFFZXBELHVFQUFmO0FBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGZhOTM5OTRkZDVlMTM4MjM1OTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEludGVyc2VjdGlvbk9ic2VydmVyIGZyb20gJ0ByZXNlYXJjaGdhdGUvcmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcbmltcG9ydCBUZXh0UmV2ZWFsIGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3RleHQtcmV2ZWFsJztcbmltcG9ydCB7IEdpdGh1Ykljb24sIExpbmtlZGluSWNvbiwgTWFpbEljb24sIEN2SWNvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2ljb25zJztcbmltcG9ydCB7IGdldFJhbmdlVmFsdWUsIGNoYW5nZVN0eWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3V0aWxzJztcbmltcG9ydCB1c2VWaWV3cG9ydCBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvaG9va3MvdXNlLXZpZXdwb3J0JztcbmltcG9ydCBTb2NpYWxJdGVtIGZyb20gJy4vY29tcG9uZW50cy9zb2NpYWwtaXRlbS9Tb2NpYWxJdGVtJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbnRhY3RzLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBDb250YWN0cyA9ICgpID0+IHtcbiAgY29uc3QgeyB3aWR0aCwgY2hlY2tUb3VjaFNjcmVlbiB9ID0gdXNlVmlld3BvcnQoKTtcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRpdGxlUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IHN1YnRpdGxlUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgeWVhciA9IChuZXcgRGF0ZSgpKS5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBzdWJ0aXRsZSA9IHdpZHRoID4gNjAwID8gJ0N1cmlvdXMgZm9yIG1vcmU/IEZlZWwgZnJlZSB0byBjb250YWN0IG1lLicgOiAnTGV0XFwncyBnZXQgaW4gdG91Y2guJztcblxuICBjb25zdCByZXNldFRyYW5zZm9ybXMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY2hhbmdlU3R5bGUodGl0bGVSZWYuY3VycmVudCwgJ3RyYW5zZm9ybScsICdub25lJyk7XG4gICAgY2hhbmdlU3R5bGUoc3VidGl0bGVSZWYuY3VycmVudCwgJ3RyYW5zZm9ybScsICdub25lJyk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGNsaWVudFgsIGNsaWVudFkgfSA9IGV2ZW50O1xuICAgIGNvbnN0IHsgaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQgfSA9IHdpbmRvdztcblxuICAgIGlmICghY2hlY2tUb3VjaFNjcmVlbigpKSB7XG4gICAgICBjb25zdCB0WCA9IGdldFJhbmdlVmFsdWUoKGNsaWVudFggLyBpbm5lcldpZHRoKSwgMzAsIC0zMCk7XG4gICAgICBjb25zdCB0WSA9IGdldFJhbmdlVmFsdWUoKGNsaWVudFkgLyBpbm5lckhlaWdodCksIDEwLCAtMTApO1xuXG4gICAgICBjb25zdCByWSA9IDA7XG4gICAgICBjb25zdCByWCA9IDA7XG5cbiAgICAgIGNvbnN0IHRyYW5zbGF0ZVRpdGxlID0gYHRyYW5zbGF0ZTNkKCR7dFh9cHgsICR7dFl9cHgsIDBweClgO1xuICAgICAgY29uc3QgdHJhbnNsYXRlU3VidGl0bGUgPSBgdHJhbnNsYXRlM2QoJHt0WCAqIDAuN31weCwgJHt0WSAqIDAuN31weCwgMHB4KWA7XG5cbiAgICAgIGNvbnN0IHJvdGF0ZVRpdGxlID0gYHJvdGF0ZVgoJHstclh9ZGVnKSByb3RhdGVZKCR7cll9ZGVnKSByb3RhdGVaKDBkZWcpYDtcbiAgICAgIGNvbnN0IHJvdGF0ZVN1YnRpdGxlID0gJ3JvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpJztcblxuICAgICAgY29uc3Qgc2NhbGUzZCA9ICdzY2FsZTNkKDEsIDEsIDEpJztcblxuICAgICAgY2hhbmdlU3R5bGUodGl0bGVSZWYuY3VycmVudCwgJ3RyYW5zZm9ybScsIGAke3RyYW5zbGF0ZVRpdGxlfSAke3JvdGF0ZVRpdGxlfSAke3NjYWxlM2R9YCk7XG4gICAgICBjaGFuZ2VTdHlsZShzdWJ0aXRsZVJlZi5jdXJyZW50LCAndHJhbnNmb3JtJywgYCR7dHJhbnNsYXRlU3VidGl0bGV9ICR7cm90YXRlU3VidGl0bGV9ICR7c2NhbGUzZH1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhbmdlU3R5bGUodGl0bGVSZWYuY3VycmVudCwgJ3RyYW5zZm9ybScsICdub25lJyk7XG4gICAgICBjaGFuZ2VTdHlsZShzdWJ0aXRsZVJlZi5jdXJyZW50LCAndHJhbnNmb3JtJywgJ25vbmUnKTtcbiAgICB9XG4gIH0sIFtjaGVja1RvdWNoU2NyZWVuXSk7XG5cbiAgY29uc3QgaGFuZGxlSW50ZXJzZWN0aW9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgc2V0VmlzaWJsZShldmVudC5pc0ludGVyc2VjdGluZyk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrVG91Y2hTY3JlZW4oKSAmJiByZXNldFRyYW5zZm9ybXMoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgfTtcbiAgfSwgW2hhbmRsZU1vdXNlTW92ZSwgcmVzZXRUcmFuc2Zvcm1zLCBjaGVja1RvdWNoU2NyZWVuXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiY29udGFjdHNcIiBjbGFzc05hbWU9eyBzdHlsZXMuY29udGFjdHMgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmJhY2tncm91bmQgfSAvPlxuICAgICAgPEludGVyc2VjdGlvbk9ic2VydmVyIG9uQ2hhbmdlPXsgaGFuZGxlSW50ZXJzZWN0aW9uQ2hhbmdlIH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmNvbnRlbnQgfT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByZWY9eyB0aXRsZVJlZiB9XG4gICAgICAgICAgICBjbGFzc05hbWU9eyBzdHlsZXMudGl0bGUgfT5cbiAgICAgICAgICAgIDxUZXh0UmV2ZWFsXG4gICAgICAgICAgICAgIHZpc2libGU9eyBpc1Zpc2libGUgfT5cbiAgICAgICAgICAgICAgVGhhbmsgeW91IVxuICAgICAgICAgICAgPC9UZXh0UmV2ZWFsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17IHN1YnRpdGxlUmVmIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17IHN0eWxlcy5zdWJ0aXRsZSB9PlxuICAgICAgICAgICAgPFRleHRSZXZlYWxcbiAgICAgICAgICAgICAgdmlzaWJsZT17IGlzVmlzaWJsZSB9XG4gICAgICAgICAgICAgIHJldmVhbERlbGF5PXsgMC43IH1cbiAgICAgICAgICAgICAgY2hhclRyYW5zaXRpb25EZWxheT17IDAgfT5cbiAgICAgICAgICAgICAgeyBzdWJ0aXRsZSB9XG4gICAgICAgICAgICA8L1RleHRSZXZlYWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuc29jaWFsIH0+XG4gICAgICAgICAgICA8U29jaWFsSXRlbVxuICAgICAgICAgICAgICBpY29uPXsgR2l0aHViSWNvbiB9XG4gICAgICAgICAgICAgIHRleHQ9XCJHaXRodWJcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3BhdWxvYm1hcmNvc1wiXG4gICAgICAgICAgICAgIGlzVmlzaWJsZT17IGlzVmlzaWJsZSB9XG4gICAgICAgICAgICAgIHRyYW5zaXRpb25EZWxheT17IDEgfSAvPlxuICAgICAgICAgICAgPFNvY2lhbEl0ZW1cbiAgICAgICAgICAgICAgaWNvbj17IExpbmtlZGluSWNvbiB9XG4gICAgICAgICAgICAgIHRleHQ9XCJMaW5rZWRpblwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcGF1bG9ibWFyY29zXCJcbiAgICAgICAgICAgICAgaXNWaXNpYmxlPXsgaXNWaXNpYmxlIH1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbkRlbGF5PXsgMS4yIH0gLz5cbiAgICAgICAgICAgIDxTb2NpYWxJdGVtXG4gICAgICAgICAgICAgIGljb249eyBNYWlsSWNvbiB9XG4gICAgICAgICAgICAgIHRleHQ9XCJFbWFpbFwiXG4gICAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86cGF1bG9ibWFyY29zQG91dGxvb2suY29tXCJcbiAgICAgICAgICAgICAgaXNWaXNpYmxlPXsgaXNWaXNpYmxlIH1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbkRlbGF5PXsgMS40IH0gLz5cbiAgICAgICAgICAgIDxTb2NpYWxJdGVtXG4gICAgICAgICAgICAgIGljb249eyBDdkljb24gfVxuICAgICAgICAgICAgICB0ZXh0PVwiQ3VycmljdWx1bVwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFsaGd5Z1ltRXZGa0V5SzZyc2pMYVo5ZF82WTNOVG9wTy92aWV3P3VzcD1zaGFyaW5nXCJcbiAgICAgICAgICAgICAgaXNWaXNpYmxlPXsgaXNWaXNpYmxlIH1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbkRlbGF5PXsgMS42IH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ludGVyc2VjdGlvbk9ic2VydmVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuY29weXJpZ2h0IH0+XG4gICAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwiY29weXJpZ2h0XCI+RGV2ZWxvcGVkICYgZGVzaWduZWQgYnkgUGF1bG8gTWFyY29zIMKp77iPIHsgeWVhciB9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Db250YWN0cy5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdHM7XG5cbi8qIMKp77iPIFBhdWxvIE1hcmNvcyB7IHllYXIgfSDimqEgTWFkZSB3aXRoIOKdpCBhbmQgUmVhY3QgKi9cbiJdLCJzb3VyY2VSb290IjoiIn0=