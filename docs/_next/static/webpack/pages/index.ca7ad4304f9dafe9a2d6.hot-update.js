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
        width = _useViewport.width;

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
  }, []);
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

_s(Contacts, "ehI+d8k6bMEftznGSh1KJP5bL6Y=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3BhZ2VzL2hvbWUvY29tcG9uZW50cy9jb250YWN0cy9Db250YWN0cy5qcyJdLCJuYW1lcyI6WyJDb250YWN0cyIsInVzZVZpZXdwb3J0Iiwid2lkdGgiLCJ0aXRsZVJlZiIsInVzZVJlZiIsInN1YnRpdGxlUmVmIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsInN1YnRpdGxlIiwiaGFuZGxlTW91c2VNb3ZlIiwidXNlQ2FsbGJhY2siLCJldmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwidFgiLCJnZXRSYW5nZVZhbHVlIiwidFkiLCJyWSIsInJYIiwidHJhbnNsYXRlVGl0bGUiLCJ0cmFuc2xhdGVTdWJ0aXRsZSIsInJvdGF0ZVRpdGxlIiwicm90YXRlU3VidGl0bGUiLCJzY2FsZTNkIiwiY3VycmVudCIsInN0eWxlIiwidHJhbnNmb3JtIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGVzIiwiY29udGFjdHMiLCJiYWNrZ3JvdW5kIiwiY29udGVudCIsInRpdGxlIiwic29jaWFsIiwiR2l0aHViSWNvbiIsIkxpbmtlZGluSWNvbiIsIk1haWxJY29uIiwiQ3ZJY29uIiwiY29weXJpZ2h0IiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUFBOztBQUFBLHVCQUNIQywwRUFBVyxFQURSO0FBQUEsUUFDYkMsS0FEYSxnQkFDYkEsS0FEYTs7QUFFckIsUUFBTUMsUUFBUSxHQUFHQyxvREFBTSxFQUF2QjtBQUNBLFFBQU1DLFdBQVcsR0FBR0Qsb0RBQU0sRUFBMUI7QUFFQSxRQUFNRSxJQUFJLEdBQUksSUFBSUMsSUFBSixF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QyxrRTs7O0tBRGRELFE7QUFzRk5BLFFBQVEsQ0FBQzhDLFNBQVQsR0FBcUIsRUFBckI7QUFFZTlDLHVFQUFmO0FBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2E3YWQ0MzA0ZjlkYWZlOWEyZDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGV4dFJldmVhbCBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy90ZXh0LXJldmVhbCc7XG5pbXBvcnQgeyBHaXRodWJJY29uLCBMaW5rZWRpbkljb24sIE1haWxJY29uLCBDdkljb24gfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9pY29ucyc7XG5pbXBvcnQgeyBnZXRSYW5nZVZhbHVlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3V0aWxzJztcbmltcG9ydCB1c2VWaWV3cG9ydCBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvaG9va3MvdXNlLXZpZXdwb3J0JztcbmltcG9ydCBTb2NpYWxJdGVtIGZyb20gJy4vY29tcG9uZW50cy9zb2NpYWwtaXRlbS9Tb2NpYWxJdGVtJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbnRhY3RzLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBDb250YWN0cyA9ICgpID0+IHtcbiAgY29uc3QgeyB3aWR0aCB9ID0gdXNlVmlld3BvcnQoKTtcbiAgY29uc3QgdGl0bGVSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3Qgc3VidGl0bGVSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCB5ZWFyID0gKG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IHN1YnRpdGxlID0gd2lkdGggPiA2MDAgPyAnQ3VyaW91cyBmb3IgbW9yZT8gRmVlbCBmcmVlIHRvIGNvbnRhY3QgbWUuJyA6ICdMZXRcXCdzIGdldCBpbiB0b3VjaC4nO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQ7XG4gICAgY29uc3QgeyBpbm5lcldpZHRoLCBpbm5lckhlaWdodCB9ID0gd2luZG93O1xuXG4gICAgY29uc3QgdFggPSBnZXRSYW5nZVZhbHVlKChjbGllbnRYIC8gaW5uZXJXaWR0aCksIDMwLCAtMzApO1xuICAgIGNvbnN0IHRZID0gZ2V0UmFuZ2VWYWx1ZSgoY2xpZW50WSAvIGlubmVySGVpZ2h0KSwgMTAsIC0xMCk7XG5cbiAgICBjb25zdCByWSA9IDA7XG4gICAgY29uc3QgclggPSAwO1xuXG4gICAgY29uc3QgdHJhbnNsYXRlVGl0bGUgPSBgdHJhbnNsYXRlM2QoJHt0WH1weCwgJHt0WX1weCwgMHB4KWA7XG4gICAgY29uc3QgdHJhbnNsYXRlU3VidGl0bGUgPSBgdHJhbnNsYXRlM2QoJHt0WCAqIDAuN31weCwgJHt0WSAqIDAuN31weCwgMHB4KWA7XG5cbiAgICBjb25zdCByb3RhdGVUaXRsZSA9IGByb3RhdGVYKCR7LXJYfWRlZykgcm90YXRlWSgke3JZfWRlZykgcm90YXRlWigwZGVnKWA7XG4gICAgY29uc3Qgcm90YXRlU3VidGl0bGUgPSAncm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyknO1xuXG4gICAgY29uc3Qgc2NhbGUzZCA9ICdzY2FsZTNkKDEsIDEsIDEpJztcblxuICAgIHRpdGxlUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYCR7dHJhbnNsYXRlVGl0bGV9ICR7cm90YXRlVGl0bGV9ICR7c2NhbGUzZH1gO1xuICAgIHN1YnRpdGxlUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYCR7dHJhbnNsYXRlU3VidGl0bGV9ICR7cm90YXRlU3VidGl0bGV9ICR7c2NhbGUzZH1gO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgIH07XG4gIH0sIFtoYW5kbGVNb3VzZU1vdmVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJjb250YWN0c1wiIGNsYXNzTmFtZT17IHN0eWxlcy5jb250YWN0cyB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuYmFja2dyb3VuZCB9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5jb250ZW50IH0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICByZWY9eyB0aXRsZVJlZiB9XG4gICAgICAgICAgY2xhc3NOYW1lPXsgc3R5bGVzLnRpdGxlIH0+XG4gICAgICAgICAgPFRleHRSZXZlYWw+VGhhbmsgeW91ITwvVGV4dFJldmVhbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICByZWY9eyBzdWJ0aXRsZVJlZiB9XG4gICAgICAgICAgY2xhc3NOYW1lPXsgc3R5bGVzLnN1YnRpdGxlIH0+XG4gICAgICAgICAgPFRleHRSZXZlYWxcbiAgICAgICAgICAgIHJldmVhbERlbGF5PXsgMC43IH1cbiAgICAgICAgICAgIGNoYXJUcmFuc2l0aW9uRGVsYXk9eyAwIH0+XG4gICAgICAgICAgICB7IHN1YnRpdGxlIH1cbiAgICAgICAgICA8L1RleHRSZXZlYWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5zb2NpYWwgfT5cbiAgICAgICAgICA8U29jaWFsSXRlbVxuICAgICAgICAgICAgaWNvbj17IEdpdGh1Ykljb24gfVxuICAgICAgICAgICAgdGV4dD1cIkdpdGh1YlwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3BhdWxvYm1hcmNvc1wiXG4gICAgICAgICAgICB0cmFuc2l0aW9uRGVsYXk9eyAxLjIgfSAvPlxuICAgICAgICAgIDxTb2NpYWxJdGVtXG4gICAgICAgICAgICBpY29uPXsgTGlua2VkaW5JY29uIH1cbiAgICAgICAgICAgIHRleHQ9XCJMaW5rZWRpblwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3BhdWxvYm1hcmNvc1wiXG4gICAgICAgICAgICB0cmFuc2l0aW9uRGVsYXk9eyAxLjMgfSAvPlxuICAgICAgICAgIDxTb2NpYWxJdGVtXG4gICAgICAgICAgICBpY29uPXsgTWFpbEljb24gfVxuICAgICAgICAgICAgdGV4dD1cIkVtYWlsXCJcbiAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86cGF1bG9ibWFyY29zQG91dGxvb2suY29tXCJcbiAgICAgICAgICAgIHRyYW5zaXRpb25EZWxheT17IDEuNCB9IC8+XG4gICAgICAgICAgPFNvY2lhbEl0ZW1cbiAgICAgICAgICAgIGljb249eyBDdkljb24gfVxuICAgICAgICAgICAgdGV4dD1cIkN1cnJpY3VsdW1cIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMWxoZ3lnWW1FdkZrRXlLNnJzakxhWjlkXzZZM05Ub3BPL3ZpZXc/dXNwPXNoYXJpbmdcIlxuICAgICAgICAgICAgdHJhbnNpdGlvbkRlbGF5PXsgMS41IH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmNvcHlyaWdodCB9PlxuICAgICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cImNvcHlyaWdodFwiPkRldmVsb3BlZCAmIGRlc2lnbmVkIGJ5IFBhdWxvIE1hcmNvcyDCqe+4jyB7IHllYXIgfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ29udGFjdHMucHJvcFR5cGVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RzO1xuXG4vKiDCqe+4jyBQYXVsbyBNYXJjb3MgeyB5ZWFyIH0g4pqhIE1hZGUgd2l0aCDinaQgYW5kIFJlYWN0ICovXG4iXSwic291cmNlUm9vdCI6IiJ9