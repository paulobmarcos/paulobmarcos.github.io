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
  const isTouch = matchMedia('(any-pointer:none)').matches;
  console.log({
    isTouch
  });
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
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.background,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("div", {
    ref: titleRef,
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(_shared_components_text_reveal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, "Thank you!")), __jsx("div", {
    ref: subtitleRef,
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.subtitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx(_shared_components_text_reveal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    revealDelay: 0.7,
    charTransitionDelay: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, subtitle)), __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.social,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
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
      lineNumber: 71,
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
      lineNumber: 76,
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
      lineNumber: 81,
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
      lineNumber: 86,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.copyright,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx("span", {
    role: "img",
    "aria-label": "copyright",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3BhZ2VzL2hvbWUvY29tcG9uZW50cy9jb250YWN0cy9Db250YWN0cy5qcyJdLCJuYW1lcyI6WyJDb250YWN0cyIsInVzZVZpZXdwb3J0Iiwid2lkdGgiLCJ0aXRsZVJlZiIsInVzZVJlZiIsInN1YnRpdGxlUmVmIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsInN1YnRpdGxlIiwiaXNUb3VjaCIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiY29uc29sZSIsImxvZyIsImhhbmRsZU1vdXNlTW92ZSIsInVzZUNhbGxiYWNrIiwiZXZlbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInRYIiwiZ2V0UmFuZ2VWYWx1ZSIsInRZIiwiclkiLCJyWCIsInRyYW5zbGF0ZVRpdGxlIiwidHJhbnNsYXRlU3VidGl0bGUiLCJyb3RhdGVUaXRsZSIsInJvdGF0ZVN1YnRpdGxlIiwic2NhbGUzZCIsImN1cnJlbnQiLCJzdHlsZSIsInRyYW5zZm9ybSIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0eWxlcyIsImNvbnRhY3RzIiwiYmFja2dyb3VuZCIsImNvbnRlbnQiLCJ0aXRsZSIsInNvY2lhbCIsIkdpdGh1Ykljb24iLCJMaW5rZWRpbkljb24iLCJNYWlsSWNvbiIsIkN2SWNvbiIsImNvcHlyaWdodCIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLE1BQU07QUFBQTs7QUFBQSx1QkFDSEMsMEVBQVcsRUFEUjtBQUFBLFFBQ2JDLEtBRGEsZ0JBQ2JBLEtBRGE7O0FBRXJCLFFBQU1DLFFBQVEsR0FBR0Msb0RBQU0sRUFBdkI7QUFDQSxRQUFNQyxXQUFXLEdB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QUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sUUFBSSxFQUFDLEtBQVg7QUFBaUIsa0JBQVcsV0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFBa0Y1QyxJQUFsRixDQURGLENBeENGLENBREY7QUE4Q0QsQ0F4RkQ7O0dBQU1OLFE7VUFDY0Msa0U7OztLQURkRCxRO0FBMEZOQSxRQUFRLENBQUNtRCxTQUFULEdBQXFCLEVBQXJCO0FBRWVuRCx1RUFBZjtBQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhkNzlkYzc5ODYwNjg5ZTRmZjdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRleHRSZXZlYWwgZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvdGV4dC1yZXZlYWwnO1xuaW1wb3J0IHsgR2l0aHViSWNvbiwgTGlua2VkaW5JY29uLCBNYWlsSWNvbiwgQ3ZJY29uIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbnMnO1xuaW1wb3J0IHsgZ2V0UmFuZ2VWYWx1ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC91dGlscyc7XG5pbXBvcnQgdXNlVmlld3BvcnQgZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2hvb2tzL3VzZS12aWV3cG9ydCc7XG5pbXBvcnQgU29jaWFsSXRlbSBmcm9tICcuL2NvbXBvbmVudHMvc29jaWFsLWl0ZW0vU29jaWFsSXRlbSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250YWN0cy5tb2R1bGUuY3NzJztcblxuY29uc3QgQ29udGFjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgd2lkdGggfSA9IHVzZVZpZXdwb3J0KCk7XG4gIGNvbnN0IHRpdGxlUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IHN1YnRpdGxlUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgeWVhciA9IChuZXcgRGF0ZSgpKS5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBzdWJ0aXRsZSA9IHdpZHRoID4gNjAwID8gJ0N1cmlvdXMgZm9yIG1vcmU/IEZlZWwgZnJlZSB0byBjb250YWN0IG1lLicgOiAnTGV0XFwncyBnZXQgaW4gdG91Y2guJztcblxuICBjb25zdCBpc1RvdWNoID0gbWF0Y2hNZWRpYSgnKGFueS1wb2ludGVyOm5vbmUpJykubWF0Y2hlcztcblxuICBjb25zb2xlLmxvZyh7IGlzVG91Y2ggfSk7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBjbGllbnRYLCBjbGllbnRZIH0gPSBldmVudDtcbiAgICBjb25zdCB7IGlubmVyV2lkdGgsIGlubmVySGVpZ2h0IH0gPSB3aW5kb3c7XG5cbiAgICBjb25zdCB0WCA9IGdldFJhbmdlVmFsdWUoKGNsaWVudFggLyBpbm5lcldpZHRoKSwgMzAsIC0zMCk7XG4gICAgY29uc3QgdFkgPSBnZXRSYW5nZVZhbHVlKChjbGllbnRZIC8gaW5uZXJIZWlnaHQpLCAxMCwgLTEwKTtcblxuICAgIGNvbnN0IHJZID0gMDtcbiAgICBjb25zdCByWCA9IDA7XG5cbiAgICBjb25zdCB0cmFuc2xhdGVUaXRsZSA9IGB0cmFuc2xhdGUzZCgke3RYfXB4LCAke3RZfXB4LCAwcHgpYDtcbiAgICBjb25zdCB0cmFuc2xhdGVTdWJ0aXRsZSA9IGB0cmFuc2xhdGUzZCgke3RYICogMC43fXB4LCAke3RZICogMC43fXB4LCAwcHgpYDtcblxuICAgIGNvbnN0IHJvdGF0ZVRpdGxlID0gYHJvdGF0ZVgoJHstclh9ZGVnKSByb3RhdGVZKCR7cll9ZGVnKSByb3RhdGVaKDBkZWcpYDtcbiAgICBjb25zdCByb3RhdGVTdWJ0aXRsZSA9ICdyb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKSc7XG5cbiAgICBjb25zdCBzY2FsZTNkID0gJ3NjYWxlM2QoMSwgMSwgMSknO1xuXG4gICAgdGl0bGVSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgJHt0cmFuc2xhdGVUaXRsZX0gJHtyb3RhdGVUaXRsZX0gJHtzY2FsZTNkfWA7XG4gICAgc3VidGl0bGVSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgJHt0cmFuc2xhdGVTdWJ0aXRsZX0gJHtyb3RhdGVTdWJ0aXRsZX0gJHtzY2FsZTNkfWA7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgfTtcbiAgfSwgW2hhbmRsZU1vdXNlTW92ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImNvbnRhY3RzXCIgY2xhc3NOYW1lPXsgc3R5bGVzLmNvbnRhY3RzIH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5iYWNrZ3JvdW5kIH0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmNvbnRlbnQgfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJlZj17IHRpdGxlUmVmIH1cbiAgICAgICAgICBjbGFzc05hbWU9eyBzdHlsZXMudGl0bGUgfT5cbiAgICAgICAgICA8VGV4dFJldmVhbD5UaGFuayB5b3UhPC9UZXh0UmV2ZWFsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJlZj17IHN1YnRpdGxlUmVmIH1cbiAgICAgICAgICBjbGFzc05hbWU9eyBzdHlsZXMuc3VidGl0bGUgfT5cbiAgICAgICAgICA8VGV4dFJldmVhbFxuICAgICAgICAgICAgcmV2ZWFsRGVsYXk9eyAwLjcgfVxuICAgICAgICAgICAgY2hhclRyYW5zaXRpb25EZWxheT17IDAgfT5cbiAgICAgICAgICAgIHsgc3VidGl0bGUgfVxuICAgICAgICAgIDwvVGV4dFJldmVhbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLnNvY2lhbCB9PlxuICAgICAgICAgIDxTb2NpYWxJdGVtXG4gICAgICAgICAgICBpY29uPXsgR2l0aHViSWNvbiB9XG4gICAgICAgICAgICB0ZXh0PVwiR2l0aHViXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcGF1bG9ibWFyY29zXCJcbiAgICAgICAgICAgIHRyYW5zaXRpb25EZWxheT17IDEuMiB9IC8+XG4gICAgICAgICAgPFNvY2lhbEl0ZW1cbiAgICAgICAgICAgIGljb249eyBMaW5rZWRpbkljb24gfVxuICAgICAgICAgICAgdGV4dD1cIkxpbmtlZGluXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcGF1bG9ibWFyY29zXCJcbiAgICAgICAgICAgIHRyYW5zaXRpb25EZWxheT17IDEuMyB9IC8+XG4gICAgICAgICAgPFNvY2lhbEl0ZW1cbiAgICAgICAgICAgIGljb249eyBNYWlsSWNvbiB9XG4gICAgICAgICAgICB0ZXh0PVwiRW1haWxcIlxuICAgICAgICAgICAgaHJlZj1cIm1haWx0bzpwYXVsb2JtYXJjb3NAb3V0bG9vay5jb21cIlxuICAgICAgICAgICAgdHJhbnNpdGlvbkRlbGF5PXsgMS40IH0gLz5cbiAgICAgICAgICA8U29jaWFsSXRlbVxuICAgICAgICAgICAgaWNvbj17IEN2SWNvbiB9XG4gICAgICAgICAgICB0ZXh0PVwiQ3VycmljdWx1bVwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbGhneWdZbUV2RmtFeUs2cnNqTGFaOWRfNlkzTlRvcE8vdmlldz91c3A9c2hhcmluZ1wiXG4gICAgICAgICAgICB0cmFuc2l0aW9uRGVsYXk9eyAxLjUgfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuY29weXJpZ2h0IH0+XG4gICAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwiY29weXJpZ2h0XCI+RGV2ZWxvcGVkICYgZGVzaWduZWQgYnkgUGF1bG8gTWFyY29zIMKp77iPIHsgeWVhciB9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Db250YWN0cy5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdHM7XG5cbi8qIMKp77iPIFBhdWxvIE1hcmNvcyB7IHllYXIgfSDimqEgTWFkZSB3aXRoIOKdpCBhbmQgUmVhY3QgKi9cbiJdLCJzb3VyY2VSb290IjoiIn0=