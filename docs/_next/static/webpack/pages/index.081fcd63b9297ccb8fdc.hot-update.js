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

  const year = new Date().getFullYear();
  const subtitle = width > 600 ? 'Curious for more? Feel free to contact me.' : 'Let\'s get in touch.';
  const handleMouseMove = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
    const clientX = event.clientX,
          clientY = event.clientY;
    const _window = window,
          innerWidth = _window.innerWidth,
          innerHeight = _window.innerHeight;
    const tX = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_3__["getRangeValue"])(clientX / innerWidth, -50, 50);
    const tY = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_3__["getRangeValue"])(clientY / innerHeight, -50, 50);
    const rY = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_3__["getRangeValue"])(clientX / innerWidth, -15, 15);
    const rX = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_3__["getRangeValue"])(clientY / innerHeight, -10, 10);
    const translateText = "translate3d(".concat(tX, "px, ").concat(tY, "px, 0px)");
    const translateLogos = "translate3d(".concat(tX * 1.3, "px, ").concat(tY * 1.3, "px, 0px)");
    const rotateText = "rotateX(".concat(-rX, "deg) rotateY(").concat(rY, "deg) rotateZ(0deg)");
    const rotateLogos = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
    const scale3d = 'scale3d(1, 1, 1)';
    textRef.current.style.transform = "".concat(translateText, " ").concat(rotateText, " ").concat(scale3d);
    logosRef.current.style.transform = "".concat(translateLogos, " ").concat(rotateLogos, " ").concat(scale3d);
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
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.background,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(_shared_components_text_reveal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, "Thank you!"), __jsx(_shared_components_text_reveal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.subtitle,
    revealDelay: 0.7,
    charTransitionDelay: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, subtitle), __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.social,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
      lineNumber: 59,
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
      lineNumber: 64,
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
      lineNumber: 69,
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
      lineNumber: 74,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.copyright,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx("span", {
    role: "img",
    "aria-label": "copyright",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, "Developed & designed by Paulo Marcos \xA9\uFE0F ", year)));
};

_s(Contacts, "Mtq3Sf//nenidq9OMS5ItbD9yFo=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3BhZ2VzL2hvbWUvY29tcG9uZW50cy9jb250YWN0cy9Db250YWN0cy5qcyJdLCJuYW1lcyI6WyJDb250YWN0cyIsInVzZVZpZXdwb3J0Iiwid2lkdGgiLCJ5ZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwic3VidGl0bGUiLCJoYW5kbGVNb3VzZU1vdmUiLCJ1c2VDYWxsYmFjayIsImV2ZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ0WCIsImdldFJhbmdlVmFsdWUiLCJ0WSIsInJZIiwiclgiLCJ0cmFuc2xhdGVUZXh0IiwidHJhbnNsYXRlTG9nb3MiLCJyb3RhdGVUZXh0Iiwicm90YXRlTG9nb3MiLCJzY2FsZTNkIiwidGV4dFJlZiIsImN1cnJlbnQiLCJzdHlsZSIsInRyYW5zZm9ybSIsImxvZ29zUmVmIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGVzIiwiY29udGFjdHMiLCJiYWNrZ3JvdW5kIiwiY29udGVudCIsInRpdGxlIiwic29jaWFsIiwiR2l0aHViSWNvbiIsIkxpbmtlZGluSWNvbiIsIk1haWxJY29uIiwiQ3ZJY29uIiwiY29weXJpZ2h0IiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUFBOztBQUFBLHVCQUNIQywwRUFBVyxFQURSO0FBQUEsUUFDYkMsS0FEYSxnQkFDYkEsS0FEYTs7QUFFckIsUUFBTUMsSUFBSSxHQUFJLElBQUlDLElBQUosRUFBRCxDQUFhQyxXQUFiLEVBQWI7QUFDQSxRQUFNQyxRQUFRLEdBQUdKLEtBQUssR0FBRyxHQUFSLEdBQWMsNENBQWQsR0FBNkQsc0JBQTlFO0FBRUEsUUFB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OTI5N2NjYjhmZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRleHRSZXZlYWwgZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvdGV4dC1yZXZlYWwnO1xuaW1wb3J0IHsgR2l0aHViSWNvbiwgTGlua2VkaW5JY29uLCBNYWlsSWNvbiwgQ3ZJY29uIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbnMnO1xuaW1wb3J0IHsgZ2V0UmFuZ2VWYWx1ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC91dGlscyc7XG5pbXBvcnQgdXNlVmlld3BvcnQgZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2hvb2tzL3VzZS12aWV3cG9ydCc7XG5pbXBvcnQgU29jaWFsSXRlbSBmcm9tICcuL2NvbXBvbmVudHMvc29jaWFsLWl0ZW0vU29jaWFsSXRlbSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250YWN0cy5tb2R1bGUuY3NzJztcblxuY29uc3QgQ29udGFjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgd2lkdGggfSA9IHVzZVZpZXdwb3J0KCk7XG4gIGNvbnN0IHllYXIgPSAobmV3IERhdGUoKSkuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3Qgc3VidGl0bGUgPSB3aWR0aCA+IDYwMCA/ICdDdXJpb3VzIGZvciBtb3JlPyBGZWVsIGZyZWUgdG8gY29udGFjdCBtZS4nIDogJ0xldFxcJ3MgZ2V0IGluIHRvdWNoLic7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBjbGllbnRYLCBjbGllbnRZIH0gPSBldmVudDtcbiAgICBjb25zdCB7IGlubmVyV2lkdGgsIGlubmVySGVpZ2h0IH0gPSB3aW5kb3c7XG5cbiAgICBjb25zdCB0WCA9IGdldFJhbmdlVmFsdWUoKGNsaWVudFggLyBpbm5lcldpZHRoKSwgLTUwLCA1MCk7XG4gICAgY29uc3QgdFkgPSBnZXRSYW5nZVZhbHVlKChjbGllbnRZIC8gaW5uZXJIZWlnaHQpLCAtNTAsIDUwKTtcblxuICAgIGNvbnN0IHJZID0gZ2V0UmFuZ2VWYWx1ZSgoY2xpZW50WCAvIGlubmVyV2lkdGgpLCAtMTUsIDE1KTtcbiAgICBjb25zdCByWCA9IGdldFJhbmdlVmFsdWUoKGNsaWVudFkgLyBpbm5lckhlaWdodCksIC0xMCwgMTApO1xuXG4gICAgY29uc3QgdHJhbnNsYXRlVGV4dCA9IGB0cmFuc2xhdGUzZCgke3RYfXB4LCAke3RZfXB4LCAwcHgpYDtcbiAgICBjb25zdCB0cmFuc2xhdGVMb2dvcyA9IGB0cmFuc2xhdGUzZCgke3RYICogMS4zfXB4LCAke3RZICogMS4zfXB4LCAwcHgpYDtcblxuICAgIGNvbnN0IHJvdGF0ZVRleHQgPSBgcm90YXRlWCgkey1yWH1kZWcpIHJvdGF0ZVkoJHtyWX1kZWcpIHJvdGF0ZVooMGRlZylgO1xuICAgIGNvbnN0IHJvdGF0ZUxvZ29zID0gJ3JvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpJztcblxuICAgIGNvbnN0IHNjYWxlM2QgPSAnc2NhbGUzZCgxLCAxLCAxKSc7XG5cbiAgICB0ZXh0UmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYCR7dHJhbnNsYXRlVGV4dH0gJHtyb3RhdGVUZXh0fSAke3NjYWxlM2R9YDtcbiAgICBsb2dvc1JlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGAke3RyYW5zbGF0ZUxvZ29zfSAke3JvdGF0ZUxvZ29zfSAke3NjYWxlM2R9YDtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICB9O1xuICB9LCBbaGFuZGxlTW91c2VNb3ZlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiY29udGFjdHNcIiBjbGFzc05hbWU9eyBzdHlsZXMuY29udGFjdHMgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmJhY2tncm91bmQgfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuY29udGVudCB9PlxuICAgICAgICA8VGV4dFJldmVhbCBjbGFzc05hbWU9eyBzdHlsZXMudGl0bGUgfT5cbiAgICAgICAgICBUaGFuayB5b3UhXG4gICAgICAgIDwvVGV4dFJldmVhbD5cbiAgICAgICAgPFRleHRSZXZlYWxcbiAgICAgICAgICBjbGFzc05hbWU9eyBzdHlsZXMuc3VidGl0bGUgfVxuICAgICAgICAgIHJldmVhbERlbGF5PXsgMC43IH1cbiAgICAgICAgICBjaGFyVHJhbnNpdGlvbkRlbGF5PXsgMCB9PlxuICAgICAgICAgIHsgc3VidGl0bGUgfVxuICAgICAgICA8L1RleHRSZXZlYWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLnNvY2lhbCB9PlxuICAgICAgICAgIDxTb2NpYWxJdGVtXG4gICAgICAgICAgICBpY29uPXsgR2l0aHViSWNvbiB9XG4gICAgICAgICAgICB0ZXh0PVwiR2l0aHViXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcGF1bG9ibWFyY29zXCJcbiAgICAgICAgICAgIHRyYW5zaXRpb25EZWxheT17IDEuMiB9IC8+XG4gICAgICAgICAgPFNvY2lhbEl0ZW1cbiAgICAgICAgICAgIGljb249eyBMaW5rZWRpbkljb24gfVxuICAgICAgICAgICAgdGV4dD1cIkxpbmtlZGluXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcGF1bG9ibWFyY29zXCJcbiAgICAgICAgICAgIHRyYW5zaXRpb25EZWxheT17IDEuMyB9IC8+XG4gICAgICAgICAgPFNvY2lhbEl0ZW1cbiAgICAgICAgICAgIGljb249eyBNYWlsSWNvbiB9XG4gICAgICAgICAgICB0ZXh0PVwiRW1haWxcIlxuICAgICAgICAgICAgaHJlZj1cIm1haWx0bzpwYXVsb2JtYXJjb3NAb3V0bG9vay5jb21cIlxuICAgICAgICAgICAgdHJhbnNpdGlvbkRlbGF5PXsgMS40IH0gLz5cbiAgICAgICAgICA8U29jaWFsSXRlbVxuICAgICAgICAgICAgaWNvbj17IEN2SWNvbiB9XG4gICAgICAgICAgICB0ZXh0PVwiQ3VycmljdWx1bVwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbGhneWdZbUV2RmtFeUs2cnNqTGFaOWRfNlkzTlRvcE8vdmlldz91c3A9c2hhcmluZ1wiXG4gICAgICAgICAgICB0cmFuc2l0aW9uRGVsYXk9eyAxLjUgfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuY29weXJpZ2h0IH0+XG4gICAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwiY29weXJpZ2h0XCI+RGV2ZWxvcGVkICYgZGVzaWduZWQgYnkgUGF1bG8gTWFyY29zIMKp77iPIHsgeWVhciB9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Db250YWN0cy5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdHM7XG5cbi8qIMKp77iPIFBhdWxvIE1hcmNvcyB7IHllYXIgfSDimqEgTWFkZSB3aXRoIOKdpCBhbmQgUmVhY3QgKi9cbiJdLCJzb3VyY2VSb290IjoiIn0=