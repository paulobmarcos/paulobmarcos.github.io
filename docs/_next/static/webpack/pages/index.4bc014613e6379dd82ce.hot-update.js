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
/* harmony import */ var _shared_hooks_use_viewport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/hooks/use-viewport */ "./www/shared/hooks/use-viewport/index.js");
/* harmony import */ var _components_social_item_SocialItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/social-item/SocialItem */ "./www/pages/home/components/contacts/components/social-item/SocialItem.js");
/* harmony import */ var _Contacts_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Contacts.module.css */ "./www/pages/home/components/contacts/Contacts.module.css");
/* harmony import */ var _Contacts_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Contacts_module_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\paulo\\Desktop\\Work\\Projects\\Personal\\Web\\paulobmarcos\\www\\pages\\home\\components\\contacts\\Contacts.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Contacts = () => {
  _s();

  const _useViewport = Object(_shared_hooks_use_viewport__WEBPACK_IMPORTED_MODULE_3__["default"])(),
        width = _useViewport.width;

  const year = new Date().getFullYear();
  const subtitle = width > 600 ? 'Curious for more? Feel free to contact me.' : 'Let\'s get in touch.';
  const handleMouseMove = useCallback(event => {
    const scrollTop = layoutContentRef.current.scrollTop;
    const _boudingClientRectRef = boudingClientRectRef.current,
          minVisible = _boudingClientRectRef.minVisible,
          maxVisible = _boudingClientRectRef.maxVisible;

    if (scrollTop >= minVisible && scrollTop <= maxVisible) {
      const clientX = event.clientX,
            clientY = event.clientY;
      const _window = window,
            innerWidth = _window.innerWidth,
            innerHeight = _window.innerHeight;
      const tX = getRangeValue(clientX / innerWidth, -50, 50);
      const tY = getRangeValue(clientY / innerHeight, -50, 50);
      const rY = getRangeValue(clientX / innerWidth, -15, 15);
      const rX = getRangeValue(clientY / innerHeight, -10, 10);
      const translateText = "translate3d(".concat(tX, "px, ").concat(tY, "px, 0px)");
      const translateLogos = "translate3d(".concat(tX * 1.3, "px, ").concat(tY * 1.3, "px, 0px)");
      const rotateText = "rotateX(".concat(-rX, "deg) rotateY(").concat(rY, "deg) rotateZ(0deg)");
      const rotateLogos = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
      const scale3d = 'scale3d(1, 1, 1)';
      textRef.current.style.transform = "".concat(translateText, " ").concat(rotateText, " ").concat(scale3d);
      logosRef.current.style.transform = "".concat(translateLogos, " ").concat(rotateLogos, " ").concat(scale3d);
    }
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
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.contacts,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.background,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(_shared_components_text_reveal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Thank you!"), __jsx(_shared_components_text_reveal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle,
    revealDelay: 0.7,
    charTransitionDelay: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, subtitle), __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.social,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx(_components_social_item_SocialItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: _shared_components_icons__WEBPACK_IMPORTED_MODULE_2__["GithubIcon"],
    text: "Github",
    href: "https://github.com/paulobmarcos",
    transitionDelay: 1.2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }), __jsx(_components_social_item_SocialItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: _shared_components_icons__WEBPACK_IMPORTED_MODULE_2__["LinkedinIcon"],
    text: "Linkedin",
    href: "https://www.linkedin.com/in/paulobmarcos",
    transitionDelay: 1.3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }), __jsx(_components_social_item_SocialItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: _shared_components_icons__WEBPACK_IMPORTED_MODULE_2__["MailIcon"],
    text: "Email",
    href: "mailto:paulobmarcos@outlook.com",
    transitionDelay: 1.4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }), __jsx(_components_social_item_SocialItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    icon: _shared_components_icons__WEBPACK_IMPORTED_MODULE_2__["CvIcon"],
    text: "Curriculum",
    href: "https://drive.google.com/file/d/1lhgygYmEvFkEyK6rsjLaZ9d_6Y3NTopO/view?usp=sharing",
    transitionDelay: 1.5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: _Contacts_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.copyright,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx("span", {
    role: "img",
    "aria-label": "copyright",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, "Developed & designed by Paulo Marcos \xA9\uFE0F ", year)));
};

_s(Contacts, "Mtq3Sf//nenidq9OMS5ItbD9yFo=", false, function () {
  return [_shared_hooks_use_viewport__WEBPACK_IMPORTED_MODULE_3__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3BhZ2VzL2hvbWUvY29tcG9uZW50cy9jb250YWN0cy9Db250YWN0cy5qcyJdLCJuYW1lcyI6WyJDb250YWN0cyIsInVzZVZpZXdwb3J0Iiwid2lkdGgiLCJ5ZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwic3VidGl0bGUiLCJoYW5kbGVNb3VzZU1vdmUiLCJ1c2VDYWxsYmFjayIsImV2ZW50Iiwic2Nyb2xsVG9wIiwibGF5b3V0Q29udGVudFJlZiIsImN1cnJlbnQiLCJib3VkaW5nQ2xpZW50UmVjdFJlZiIsIm1pblZpc2libGUiLCJtYXhWaXNpYmxlIiwiY2xpZW50WCIsImNsaWVudFkiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ0WCIsImdldFJhbmdlVmFsdWUiLCJ0WSIsInJZIiwiclgiLCJ0cmFuc2xhdGVUZXh0IiwidHJhbnNsYXRlTG9nb3MiLCJyb3RhdGVUZXh0Iiwicm90YXRlTG9nb3MiLCJzY2FsZTNkIiwidGV4dFJlZiIsInN0eWxlIiwidHJhbnNmb3JtIiwibG9nb3NSZWYiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdHlsZXMiLCJjb250YWN0cyIsImJhY2tncm91bmQiLCJjb250ZW50IiwidGl0bGUiLCJzb2NpYWwiLCJHaXRodWJJY29uIiwiTGlua2VkaW5JY29uIiwiTWFpbEljb24iLCJDdkljb24iLCJjb3B5cmlnaHQiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxNQUFNO0FBQUE7O0FBQUEsdUJBQ0hDLDBFQUFXLEVBRFI7QUFBQSxRQUNiQyxLQURhLGdCQUNiQSxLQURhOztBQUVyQixRQUFNQyxJQUFJLEdBQUksSUFBSUMsSUFBSixFQUFELENBQWFDLFdBQWIs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U0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sUUFBSSxFQUFDLEtBQVg7QUFBaUIsa0JBQVcsV0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFBa0Y5QyxJQUFsRixDQURGLENBbkNGLENBREY7QUF5Q0QsQ0FqRkQ7O0dBQU1ILFE7VUFDY0Msa0U7OztLQURkRCxRO0FBbUZOQSxRQUFRLENBQUNrRCxTQUFULEdBQXFCLEVBQXJCO0FBRWVsRCx1RUFBZjtBQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRiYzAxNDYxM2U2Mzc5ZGQ4MmNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRleHRSZXZlYWwgZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvdGV4dC1yZXZlYWwnO1xuaW1wb3J0IHsgR2l0aHViSWNvbiwgTGlua2VkaW5JY29uLCBNYWlsSWNvbiwgQ3ZJY29uIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvaWNvbnMnO1xuaW1wb3J0IHVzZVZpZXdwb3J0IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9ob29rcy91c2Utdmlld3BvcnQnO1xuaW1wb3J0IFNvY2lhbEl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL3NvY2lhbC1pdGVtL1NvY2lhbEl0ZW0nO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29udGFjdHMubW9kdWxlLmNzcyc7XG5cbmNvbnN0IENvbnRhY3RzID0gKCkgPT4ge1xuICBjb25zdCB7IHdpZHRoIH0gPSB1c2VWaWV3cG9ydCgpO1xuICBjb25zdCB5ZWFyID0gKG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IHN1YnRpdGxlID0gd2lkdGggPiA2MDAgPyAnQ3VyaW91cyBmb3IgbW9yZT8gRmVlbCBmcmVlIHRvIGNvbnRhY3QgbWUuJyA6ICdMZXRcXCdzIGdldCBpbiB0b3VjaC4nO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgc2Nyb2xsVG9wIH0gPSBsYXlvdXRDb250ZW50UmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgeyBtaW5WaXNpYmxlLCBtYXhWaXNpYmxlIH0gPSBib3VkaW5nQ2xpZW50UmVjdFJlZi5jdXJyZW50O1xuXG4gICAgaWYgKHNjcm9sbFRvcCA+PSBtaW5WaXNpYmxlICYmIHNjcm9sbFRvcCA8PSBtYXhWaXNpYmxlKSB7XG4gICAgICBjb25zdCB7IGNsaWVudFgsIGNsaWVudFkgfSA9IGV2ZW50O1xuICAgICAgY29uc3QgeyBpbm5lcldpZHRoLCBpbm5lckhlaWdodCB9ID0gd2luZG93O1xuXG4gICAgICBjb25zdCB0WCA9IGdldFJhbmdlVmFsdWUoKGNsaWVudFggLyBpbm5lcldpZHRoKSwgLTUwLCA1MCk7XG4gICAgICBjb25zdCB0WSA9IGdldFJhbmdlVmFsdWUoKGNsaWVudFkgLyBpbm5lckhlaWdodCksIC01MCwgNTApO1xuXG4gICAgICBjb25zdCByWSA9IGdldFJhbmdlVmFsdWUoKGNsaWVudFggLyBpbm5lcldpZHRoKSwgLTE1LCAxNSk7XG4gICAgICBjb25zdCByWCA9IGdldFJhbmdlVmFsdWUoKGNsaWVudFkgLyBpbm5lckhlaWdodCksIC0xMCwgMTApO1xuXG4gICAgICBjb25zdCB0cmFuc2xhdGVUZXh0ID0gYHRyYW5zbGF0ZTNkKCR7dFh9cHgsICR7dFl9cHgsIDBweClgO1xuICAgICAgY29uc3QgdHJhbnNsYXRlTG9nb3MgPSBgdHJhbnNsYXRlM2QoJHt0WCAqIDEuM31weCwgJHt0WSAqIDEuM31weCwgMHB4KWA7XG5cbiAgICAgIGNvbnN0IHJvdGF0ZVRleHQgPSBgcm90YXRlWCgkey1yWH1kZWcpIHJvdGF0ZVkoJHtyWX1kZWcpIHJvdGF0ZVooMGRlZylgO1xuICAgICAgY29uc3Qgcm90YXRlTG9nb3MgPSAncm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyknO1xuXG4gICAgICBjb25zdCBzY2FsZTNkID0gJ3NjYWxlM2QoMSwgMSwgMSknO1xuXG4gICAgICB0ZXh0UmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYCR7dHJhbnNsYXRlVGV4dH0gJHtyb3RhdGVUZXh0fSAke3NjYWxlM2R9YDtcbiAgICAgIGxvZ29zUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYCR7dHJhbnNsYXRlTG9nb3N9ICR7cm90YXRlTG9nb3N9ICR7c2NhbGUzZH1gO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICB9O1xuICB9LCBbaGFuZGxlTW91c2VNb3ZlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiY29udGFjdHNcIiBjbGFzc05hbWU9eyBzdHlsZXMuY29udGFjdHMgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmJhY2tncm91bmQgfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuY29udGVudCB9PlxuICAgICAgICA8VGV4dFJldmVhbCBjbGFzc05hbWU9eyBzdHlsZXMudGl0bGUgfT5cbiAgICAgICAgICBUaGFuayB5b3UhXG4gICAgICAgIDwvVGV4dFJldmVhbD5cbiAgICAgICAgPFRleHRSZXZlYWxcbiAgICAgICAgICBjbGFzc05hbWU9eyBzdHlsZXMuc3VidGl0bGUgfVxuICAgICAgICAgIHJldmVhbERlbGF5PXsgMC43IH1cbiAgICAgICAgICBjaGFyVHJhbnNpdGlvbkRlbGF5PXsgMCB9PlxuICAgICAgICAgIHsgc3VidGl0bGUgfVxuICAgICAgICA8L1RleHRSZXZlYWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLnNvY2lhbCB9PlxuICAgICAgICAgIDxTb2NpYWxJdGVtXG4gICAgICAgICAgICBpY29uPXsgR2l0aHViSWNvbiB9XG4gICAgICAgICAgICB0ZXh0PVwiR2l0aHViXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcGF1bG9ibWFyY29zXCJcbiAgICAgICAgICAgIHRyYW5zaXRpb25EZWxheT17IDEuMiB9IC8+XG4gICAgICAgICAgPFNvY2lhbEl0ZW1cbiAgICAgICAgICAgIGljb249eyBMaW5rZWRpbkljb24gfVxuICAgICAgICAgICAgdGV4dD1cIkxpbmtlZGluXCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcGF1bG9ibWFyY29zXCJcbiAgICAgICAgICAgIHRyYW5zaXRpb25EZWxheT17IDEuMyB9IC8+XG4gICAgICAgICAgPFNvY2lhbEl0ZW1cbiAgICAgICAgICAgIGljb249eyBNYWlsSWNvbiB9XG4gICAgICAgICAgICB0ZXh0PVwiRW1haWxcIlxuICAgICAgICAgICAgaHJlZj1cIm1haWx0bzpwYXVsb2JtYXJjb3NAb3V0bG9vay5jb21cIlxuICAgICAgICAgICAgdHJhbnNpdGlvbkRlbGF5PXsgMS40IH0gLz5cbiAgICAgICAgICA8U29jaWFsSXRlbVxuICAgICAgICAgICAgaWNvbj17IEN2SWNvbiB9XG4gICAgICAgICAgICB0ZXh0PVwiQ3VycmljdWx1bVwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xbGhneWdZbUV2RmtFeUs2cnNqTGFaOWRfNlkzTlRvcE8vdmlldz91c3A9c2hhcmluZ1wiXG4gICAgICAgICAgICB0cmFuc2l0aW9uRGVsYXk9eyAxLjUgfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuY29weXJpZ2h0IH0+XG4gICAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwiY29weXJpZ2h0XCI+RGV2ZWxvcGVkICYgZGVzaWduZWQgYnkgUGF1bG8gTWFyY29zIMKp77iPIHsgeWVhciB9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Db250YWN0cy5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdHM7XG5cbi8qIMKp77iPIFBhdWxvIE1hcmNvcyB7IHllYXIgfSDimqEgTWFkZSB3aXRoIOKdpCBhbmQgUmVhY3QgKi9cbiJdLCJzb3VyY2VSb290IjoiIn0=