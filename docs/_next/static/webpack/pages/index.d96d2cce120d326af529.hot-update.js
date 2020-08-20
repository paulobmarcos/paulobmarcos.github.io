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
/* harmony import */ var _shared_components_text_reveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/text-reveal */ "./www/shared/components/text-reveal/index.js");
/* harmony import */ var _shared_components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/icons */ "./www/shared/components/icons/index.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/utils */ "./www/shared/utils/index.js");
/* harmony import */ var _shared_hooks_use_viewport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/hooks/use-viewport */ "./www/shared/hooks/use-viewport/index.js");
/* harmony import */ var _components_social_item_SocialItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/social-item/SocialItem */ "./www/pages/home/components/contacts/components/social-item/SocialItem.js");
/* harmony import */ var _Contacts_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Contacts.module.css */ "./www/pages/home/components/contacts/Contacts.module.css");
/* harmony import */ var _Contacts_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Contacts_module_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\paulo\\Desktop\\Work\\Projects\\Personal\\Web\\paulobmarcos\\www\\pages\\home\\components\\contacts\\Contacts.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Contacts = () => {
  _s();

  const _useViewport = Object(_shared_hooks_use_viewport__WEBPACK_IMPORTED_MODULE_4__["default"])(),
        width = _useViewport.width,
        isTouch = _useViewport.isTouch;

  const titleRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const subtitleRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const year = new Date().getFullYear();
  const subtitle = width > 600 ? 'Curious for more? Feel free to contact me.' : 'Let\'s get in touch.';
  const handleMouseMove = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
    const clientX = event.clientX,
          clientY = event.clientY;
    const _window = window,
          innerWidth = _window.innerWidth,
          innerHeight = _window.innerHeight;
    const tX = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_3__["getRangeValue"])(clientX / innerWidth, 30, -30);
    const tY = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_3__["getRangeValue"])(clientY / innerHeight, 10, -10);
    const rY = 0;
    const rX = 0;
    const translateTitle = "translate3d(".concat(tX, "px, ").concat(tY, "px, 0px)");
    const translateSubtitle = "translate3d(".concat(tX * 0.7, "px, ").concat(tY * 0.7, "px, 0px)");
    const rotateTitle = "rotateX(".concat(-rX, "deg) rotateY(").concat(rY, "deg) rotateZ(0deg)");
    const rotateSubtitle = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
    const scale3d = 'scale3d(1, 1, 1)';
    titleRef.current.style.transform = "".concat(translateTitle, " ").concat(rotateTitle, " ").concat(scale3d);
    subtitleRef.current.style.transform = "".concat(translateSubtitle, " ").concat(rotateSubtitle, " ").concat(scale3d);
  }, [isTouch]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('mousemove', handleMouseMove, {
      passive: true
    });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove, {
        passive: true
      });
    };
  }, [handleMouseMove]);
  return __jsx("div", {
    id: "contacts",
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.contacts,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.background,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("div", {
    ref: titleRef,
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx(_shared_components_text_reveal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "Thank you!")), __jsx("div", {
    ref: subtitleRef,
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.subtitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(_shared_components_text_reveal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    revealDelay: 0.7,
    charTransitionDelay: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, subtitle)), __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.social,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx(_components_social_item_SocialItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    icon: _shared_components_icons__WEBPACK_IMPORTED_MODULE_2__["GithubIcon"],
    text: "Github",
    href: "https://github.com/paulobmarcos",
    transitionDelay: 1.2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }), __jsx(_components_social_item_SocialItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    icon: _shared_components_icons__WEBPACK_IMPORTED_MODULE_2__["LinkedinIcon"],
    text: "Linkedin",
    href: "https://www.linkedin.com/in/paulobmarcos",
    transitionDelay: 1.3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }), __jsx(_components_social_item_SocialItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    icon: _shared_components_icons__WEBPACK_IMPORTED_MODULE_2__["MailIcon"],
    text: "Email",
    href: "mailto:paulobmarcos@outlook.com",
    transitionDelay: 1.4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }), __jsx(_components_social_item_SocialItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    icon: _shared_components_icons__WEBPACK_IMPORTED_MODULE_2__["CvIcon"],
    text: "Curriculum",
    href: "https://drive.google.com/file/d/1lhgygYmEvFkEyK6rsjLaZ9d_6Y3NTopO/view?usp=sharing",
    transitionDelay: 1.5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.copyright,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx("span", {
    role: "img",
    "aria-label": "copyright",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, "Developed & designed by Paulo Marcos \xA9\uFE0F ", year)));
};

_s(Contacts, "io8xPGR79nO9SNWoQfklKbVYsZ0=", false, function () {
  return [_shared_hooks_use_viewport__WEBPACK_IMPORTED_MODULE_4__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3BhZ2VzL2hvbWUvY29tcG9uZW50cy9jb250YWN0cy9Db250YWN0cy5qcyJdLCJuYW1lcyI6WyJDb250YWN0cyIsInVzZVZpZXdwb3J0Iiwid2lkdGgiLCJpc1RvdWNoIiwidGl0bGVSZWYiLCJ1c2VSZWYiLCJzdWJ0aXRsZVJlZiIsInllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJzdWJ0aXRsZSIsImhhbmRsZU1vdXNlTW92ZSIsInVzZUNhbGxiYWNrIiwiZXZlbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInRYIiwiZ2V0UmFuZ2VWYWx1ZSIsInRZIiwiclkiLCJyWCIsInRyYW5zbGF0ZVRpdGxlIiwidHJhbnNsYXRlU3VidGl0bGUiLCJyb3RhdGVUaXRsZSIsInJvdGF0ZVN1YnRpdGxlIiwic2NhbGUzZCIsImN1cnJlbnQiLCJzdHlsZSIsInRyYW5zZm9ybSIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0eWxlcyIsImNvbnRhY3RzIiwiYmFja2dyb3VuZCIsImNvbnRlbnQiLCJ0aXRsZSIsInNvY2lhbCIsIkdpdGh1Ykljb24iLCJMaW5rZWRpbkljb24iLCJNYWlsSWNvbiIsIkN2SWNvbiIsImNvcHlyaWdodCIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLE1BQU07QUFBQTs7QUFBQSx1QkFDTUMsMEVBQVcsRUFEakI7QUFBQSxRQUNiQyxLQURhLGdCQUNiQSxLQURhO0FBQUEsUUFDTkMsT0FETSxnQkFDTkEsT0FETTs7QUFFckIsUUFBTUMsUUFBUSxHQUFHQyxvREFBTSxFQUF2QjtBQUNBLFFBQU1DLFdBQVcsR0FBR0Qsb0RBQU0s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a0Z2QyxJQUFsRixDQURGLENBeENGLENBREY7QUE4Q0QsQ0FwRkQ7O0dBQU1QLFE7VUFDdUJDLGtFOzs7S0FEdkJELFE7QUFzRk5BLFFBQVEsQ0FBQytDLFNBQVQsR0FBcUIsRUFBckI7QUFFZS9DLHVFQUFmO0FBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDk2ZDJjY2UxMjBkMzI2YWY1MjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGV4dFJldmVhbCBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy90ZXh0LXJldmVhbCc7XG5pbXBvcnQgeyBHaXRodWJJY29uLCBMaW5rZWRpbkljb24sIE1haWxJY29uLCBDdkljb24gfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9pY29ucyc7XG5pbXBvcnQgeyBnZXRSYW5nZVZhbHVlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3V0aWxzJztcbmltcG9ydCB1c2VWaWV3cG9ydCBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvaG9va3MvdXNlLXZpZXdwb3J0JztcbmltcG9ydCBTb2NpYWxJdGVtIGZyb20gJy4vY29tcG9uZW50cy9zb2NpYWwtaXRlbS9Tb2NpYWxJdGVtJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbnRhY3RzLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBDb250YWN0cyA9ICgpID0+IHtcbiAgY29uc3QgeyB3aWR0aCwgaXNUb3VjaCB9ID0gdXNlVmlld3BvcnQoKTtcbiAgY29uc3QgdGl0bGVSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3Qgc3VidGl0bGVSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCB5ZWFyID0gKG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IHN1YnRpdGxlID0gd2lkdGggPiA2MDAgPyAnQ3VyaW91cyBmb3IgbW9yZT8gRmVlbCBmcmVlIHRvIGNvbnRhY3QgbWUuJyA6ICdMZXRcXCdzIGdldCBpbiB0b3VjaC4nO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQ7XG4gICAgY29uc3QgeyBpbm5lcldpZHRoLCBpbm5lckhlaWdodCB9ID0gd2luZG93O1xuXG4gICAgY29uc3QgdFggPSBnZXRSYW5nZVZhbHVlKChjbGllbnRYIC8gaW5uZXJXaWR0aCksIDMwLCAtMzApO1xuICAgIGNvbnN0IHRZID0gZ2V0UmFuZ2VWYWx1ZSgoY2xpZW50WSAvIGlubmVySGVpZ2h0KSwgMTAsIC0xMCk7XG5cbiAgICBjb25zdCByWSA9IDA7XG4gICAgY29uc3QgclggPSAwO1xuXG4gICAgY29uc3QgdHJhbnNsYXRlVGl0bGUgPSBgdHJhbnNsYXRlM2QoJHt0WH1weCwgJHt0WX1weCwgMHB4KWA7XG4gICAgY29uc3QgdHJhbnNsYXRlU3VidGl0bGUgPSBgdHJhbnNsYXRlM2QoJHt0WCAqIDAuN31weCwgJHt0WSAqIDAuN31weCwgMHB4KWA7XG5cbiAgICBjb25zdCByb3RhdGVUaXRsZSA9IGByb3RhdGVYKCR7LXJYfWRlZykgcm90YXRlWSgke3JZfWRlZykgcm90YXRlWigwZGVnKWA7XG4gICAgY29uc3Qgcm90YXRlU3VidGl0bGUgPSAncm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyknO1xuXG4gICAgY29uc3Qgc2NhbGUzZCA9ICdzY2FsZTNkKDEsIDEsIDEpJztcblxuICAgIHRpdGxlUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYCR7dHJhbnNsYXRlVGl0bGV9ICR7cm90YXRlVGl0bGV9ICR7c2NhbGUzZH1gO1xuICAgIHN1YnRpdGxlUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYCR7dHJhbnNsYXRlU3VidGl0bGV9ICR7cm90YXRlU3VidGl0bGV9ICR7c2NhbGUzZH1gO1xuICB9LCBbaXNUb3VjaF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICB9O1xuICB9LCBbaGFuZGxlTW91c2VNb3ZlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiY29udGFjdHNcIiBjbGFzc05hbWU9eyBzdHlsZXMuY29udGFjdHMgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmJhY2tncm91bmQgfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuY29udGVudCB9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXsgdGl0bGVSZWYgfVxuICAgICAgICAgIGNsYXNzTmFtZT17IHN0eWxlcy50aXRsZSB9PlxuICAgICAgICAgIDxUZXh0UmV2ZWFsPlRoYW5rIHlvdSE8L1RleHRSZXZlYWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXsgc3VidGl0bGVSZWYgfVxuICAgICAgICAgIGNsYXNzTmFtZT17IHN0eWxlcy5zdWJ0aXRsZSB9PlxuICAgICAgICAgIDxUZXh0UmV2ZWFsXG4gICAgICAgICAgICByZXZlYWxEZWxheT17IDAuNyB9XG4gICAgICAgICAgICBjaGFyVHJhbnNpdGlvbkRlbGF5PXsgMCB9PlxuICAgICAgICAgICAgeyBzdWJ0aXRsZSB9XG4gICAgICAgICAgPC9UZXh0UmV2ZWFsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuc29jaWFsIH0+XG4gICAgICAgICAgPFNvY2lhbEl0ZW1cbiAgICAgICAgICAgIGljb249eyBHaXRodWJJY29uIH1cbiAgICAgICAgICAgIHRleHQ9XCJHaXRodWJcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9wYXVsb2JtYXJjb3NcIlxuICAgICAgICAgICAgdHJhbnNpdGlvbkRlbGF5PXsgMS4yIH0gLz5cbiAgICAgICAgICA8U29jaWFsSXRlbVxuICAgICAgICAgICAgaWNvbj17IExpbmtlZGluSWNvbiB9XG4gICAgICAgICAgICB0ZXh0PVwiTGlua2VkaW5cIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9wYXVsb2JtYXJjb3NcIlxuICAgICAgICAgICAgdHJhbnNpdGlvbkRlbGF5PXsgMS4zIH0gLz5cbiAgICAgICAgICA8U29jaWFsSXRlbVxuICAgICAgICAgICAgaWNvbj17IE1haWxJY29uIH1cbiAgICAgICAgICAgIHRleHQ9XCJFbWFpbFwiXG4gICAgICAgICAgICBocmVmPVwibWFpbHRvOnBhdWxvYm1hcmNvc0BvdXRsb29rLmNvbVwiXG4gICAgICAgICAgICB0cmFuc2l0aW9uRGVsYXk9eyAxLjQgfSAvPlxuICAgICAgICAgIDxTb2NpYWxJdGVtXG4gICAgICAgICAgICBpY29uPXsgQ3ZJY29uIH1cbiAgICAgICAgICAgIHRleHQ9XCJDdXJyaWN1bHVtXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFsaGd5Z1ltRXZGa0V5SzZyc2pMYVo5ZF82WTNOVG9wTy92aWV3P3VzcD1zaGFyaW5nXCJcbiAgICAgICAgICAgIHRyYW5zaXRpb25EZWxheT17IDEuNSB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5jb3B5cmlnaHQgfT5cbiAgICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJjb3B5cmlnaHRcIj5EZXZlbG9wZWQgJiBkZXNpZ25lZCBieSBQYXVsbyBNYXJjb3MgwqnvuI8geyB5ZWFyIH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkNvbnRhY3RzLnByb3BUeXBlcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0cztcblxuLyogwqnvuI8gUGF1bG8gTWFyY29zIHsgeWVhciB9IOKaoSBNYWRlIHdpdGgg4p2kIGFuZCBSZWFjdCAqL1xuIl0sInNvdXJjZVJvb3QiOiIifQ==