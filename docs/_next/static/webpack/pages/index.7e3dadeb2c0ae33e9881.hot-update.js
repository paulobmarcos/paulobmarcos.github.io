webpackHotUpdate_N_E("pages/index",{

/***/ "./www/pages/home/components/hero/components/portrait/Portrait.js":
/*!************************************************************************!*\
  !*** ./www/pages/home/components/hero/components/portrait/Portrait.js ***!
  \************************************************************************/
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
/* harmony import */ var _shared_media_images_glow_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/media/images/glow.png */ "./www/shared/media/images/glow.png");
/* harmony import */ var _shared_media_images_paulo_head_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/media/images/paulo-head.png */ "./www/shared/media/images/paulo-head.png");
/* harmony import */ var _shared_media_images_paulo_body_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/media/images/paulo-body.png */ "./www/shared/media/images/paulo-body.png");
/* harmony import */ var _shared_media_images_paulomoji_paulomoji_base_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../shared/media/images/paulomoji/paulomoji-base.png */ "./www/shared/media/images/paulomoji/paulomoji-base.png");
/* harmony import */ var _shared_media_images_paulomoji_paulomoji_expertise_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/media/images/paulomoji/paulomoji-expertise.png */ "./www/shared/media/images/paulomoji/paulomoji-expertise.png");
/* harmony import */ var _shared_media_images_paulomoji_paulomoji_experience_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/media/images/paulomoji/paulomoji-experience.png */ "./www/shared/media/images/paulomoji/paulomoji-experience.png");
/* harmony import */ var _shared_media_images_paulomoji_paulomoji_portfolio_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/media/images/paulomoji/paulomoji-portfolio.png */ "./www/shared/media/images/paulomoji/paulomoji-portfolio.png");
/* harmony import */ var _shared_media_images_paulomoji_paulomoji_contacts_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../shared/media/images/paulomoji/paulomoji-contacts.png */ "./www/shared/media/images/paulomoji/paulomoji-contacts.png");
/* harmony import */ var _Portrait_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Portrait.module.css */ "./www/pages/home/components/hero/components/portrait/Portrait.module.css");
/* harmony import */ var _Portrait_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Portrait_module_css__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\paulo\\Desktop\\Work\\Projects\\Personal\\Web\\paulobmarcos\\www\\pages\\home\\components\\hero\\components\\portrait\\Portrait.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const EMOJI = {
  BASE: 'base',
  PAULO: 'paulo',
  EXPERTISE: 'expertise',
  EXPERIENCE: 'experience',
  PORTFOLIO: 'portfolio',
  CONTACTS: 'contacts'
};

const Portrait = ({
  className
}) => {
  _s();

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(EMOJI.BASE),
        currentEmoji = _useState[0],
        setCurrentEmoji = _useState[1];

  const handleLinkMouseOver = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
    const type = event.target.dataset.headerlink;
    setCurrentEmoji(type);
  }, []);
  const handleLinkMouseLeave = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setCurrentEmoji(EMOJI.BASE);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const cleaners = [];
    Object.values(EMOJI).forEach(type => {
      const link = document.querySelector("[data-headerlink=\"".concat(type, "\"]"));

      if (link) {
        link.addEventListener('mouseover', handleLinkMouseOver);
        link.addEventListener('mouseleave', handleLinkMouseLeave);
        cleaners.push(() => link.removeEventListener('mouseover', handleLinkMouseOver));
        cleaners.push(() => link.removeEventListener('mouseleave', handleLinkMouseLeave));
      }
    });
    return () => cleaners.forEach(cleaner => cleaner());
  }, [handleLinkMouseOver, handleLinkMouseLeave]);
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Portrait_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.portrait, className),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx("img", {
    alt: "Glow",
    src: _shared_media_images_glow_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    className: _Portrait_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.glow,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }), __jsx("img", {
    alt: "Paulo Body",
    src: _shared_media_images_paulo_body_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    className: _Portrait_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.body,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }), __jsx("img", {
    alt: "Paulo Head",
    src: _shared_media_images_paulo_head_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Portrait_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.head, {
      [_Portrait_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.active]: currentEmoji === EMOJI.PAULO
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }), __jsx("img", {
    alt: "Paulo Emoji Base",
    src: _shared_media_images_paulomoji_paulomoji_base_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Portrait_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.paulomoji, _Portrait_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.base, {
      [_Portrait_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.active]: currentEmoji === EMOJI.BASE
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), __jsx("img", {
    alt: "Paulo Emoji Expertise",
    src: _shared_media_images_paulomoji_paulomoji_expertise_png__WEBPACK_IMPORTED_MODULE_7__["default"],
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Portrait_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.paulomoji, _Portrait_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.expertise, {
      [_Portrait_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.active]: currentEmoji === EMOJI.EXPERTISE
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }), __jsx("img", {
    alt: "Paulo Emoji Experience",
    src: _shared_media_images_paulomoji_paulomoji_experience_png__WEBPACK_IMPORTED_MODULE_8__["default"],
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Portrait_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.paulomoji, _Portrait_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.experience, {
      [_Portrait_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.active]: currentEmoji === EMOJI.EXPERIENCE
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }), __jsx("img", {
    alt: "Paulo Emoji Portfolio",
    src: _shared_media_images_paulomoji_paulomoji_portfolio_png__WEBPACK_IMPORTED_MODULE_9__["default"],
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Portrait_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.paulomoji, _Portrait_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.portfolio, {
      [_Portrait_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.active]: currentEmoji === EMOJI.PORTFOLIO
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }), __jsx("img", {
    alt: "Paulo Emoji Contacts",
    src: _shared_media_images_paulomoji_paulomoji_contacts_png__WEBPACK_IMPORTED_MODULE_10__["default"],
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Portrait_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.paulomoji, _Portrait_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.contacts, {
      [_Portrait_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.active]: currentEmoji === EMOJI.CONTACTS
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }));
};

_s(Portrait, "5O2Axbdz8IYbu3oc/Mium1hmk9A=");

_c = Portrait;
Portrait.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Portrait);

var _c;

$RefreshReg$(_c, "Portrait");

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

/***/ }),

/***/ "./www/shared/media/images/glow.png":
/*!******************************************!*\
  !*** ./www/shared/media/images/glow.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/_next/static/chunks/media/images/glow.png");

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3BhZ2VzL2hvbWUvY29tcG9uZW50cy9oZXJvL2NvbXBvbmVudHMvcG9ydHJhaXQvUG9ydHJhaXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3d3dy9zaGFyZWQvbWVkaWEvaW1hZ2VzL2dsb3cucG5nIl0sIm5hbWVzIjpbIkVNT0pJIiwiQkFTRSIsIlBBVUxPIiwiRVhQRVJUSVNFIiwiRVhQRVJJRU5DRSIsIlBPUlRGT0xJTyIsIkNPTlRBQ1RTIiwiUG9ydHJhaXQiLCJjbGFzc05hbWUiLCJ1c2VTdGF0ZSIsImN1cnJlbnRFbW9qaSIsInNldEN1cnJlbnRFbW9qaSIsImhhbmRsZUxpbmtNb3VzZU92ZXIiLCJ1c2VDYWxsYmFjayIsImV2ZW50IiwidHlwZSIsInRhcmdldCIsImRhdGFzZXQiLCJoZWFkZXJsaW5rIiwiaGFuZGxlTGlua01vdXNlTGVhdmUiLCJ1c2VFZmZlY3QiLCJjbGVhbmVycyIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJsaW5rIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInB1c2giLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xlYW5lciIsImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJwb3J0cmFpdCIsImdsb3dTcmMiLCJnbG93IiwicGF1bG9Cb2R5U3JjIiwiYm9keSIsInBhdWxvSGVhZFNyYyIsImhlYWQiLCJhY3RpdmUiLCJwYXVsb21vamlCYXNlU3JjIiwicGF1bG9tb2ppIiwiYmFzZSIsInBhdWxvbW9qaUV4cGVydGlzZVNyYyIsImV4cGVydGlzZSIsInBhdWxvbW9qaUV4cGVyaWVuY2VTcmMiLCJleHBlcmllbmNlIiwicGF1bG9tb2ppUG9ydGZvbGlvU3JjIiwicG9ydGZvbGlvIiwicGF1bG9tb2ppQ29udGFjdHNTcmMiLCJjb250YWN0cyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7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WUFBWSxLQUFLVixLQUFLLENBQUNLO0FBQTFDLEtBQXJDLENBSHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkYsRUFvQkU7QUFDRSxPQUFHLEVBQUMsc0JBRE47QUFFRSxPQUFHLEVBQUc4Qyw4RkFGUjtBQUdFLGFBQVMsRUFBR25CLGlEQUFVLENBQUNDLDREQUFNLENBQUNVLFNBQVIsRUFBbUJWLDREQUFNLENBQUNtQixRQUExQixFQUFvQztBQUFFLE9BQUNuQiw0REFBTSxDQUFDUSxNQUFSLEdBQWlCL0IsWUFBWSxLQUFLVixLQUFLLENBQUNNO0FBQTFDLEtBQXBDLENBSHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwQkYsQ0FERjtBQTJCRCxDQTFERDs7R0FBTUMsUTs7S0FBQUEsUTtBQTRETkEsUUFBUSxDQUFDOEMsU0FBVCxHQUFxQjtBQUNuQjdDLFdBQVMsRUFBRThDLGlEQUFTLENBQUNDO0FBREYsQ0FBckI7QUFJZWhELHVFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQWUsMkdBQTRDLEUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2UzZGFkZWIyYzBhZTMzZTk4ODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IGdsb3dTcmMgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2hhcmVkL21lZGlhL2ltYWdlcy9nbG93LnBuZyc7XG5pbXBvcnQgcGF1bG9IZWFkU3JjIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9tZWRpYS9pbWFnZXMvcGF1bG8taGVhZC5wbmcnO1xuaW1wb3J0IHBhdWxvQm9keVNyYyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zaGFyZWQvbWVkaWEvaW1hZ2VzL3BhdWxvLWJvZHkucG5nJztcbmltcG9ydCBwYXVsb21vamlCYXNlU3JjIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9tZWRpYS9pbWFnZXMvcGF1bG9tb2ppL3BhdWxvbW9qaS1iYXNlLnBuZyc7XG5pbXBvcnQgcGF1bG9tb2ppRXhwZXJ0aXNlU3JjIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9tZWRpYS9pbWFnZXMvcGF1bG9tb2ppL3BhdWxvbW9qaS1leHBlcnRpc2UucG5nJztcbmltcG9ydCBwYXVsb21vamlFeHBlcmllbmNlU3JjIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9tZWRpYS9pbWFnZXMvcGF1bG9tb2ppL3BhdWxvbW9qaS1leHBlcmllbmNlLnBuZyc7XG5pbXBvcnQgcGF1bG9tb2ppUG9ydGZvbGlvU3JjIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9tZWRpYS9pbWFnZXMvcGF1bG9tb2ppL3BhdWxvbW9qaS1wb3J0Zm9saW8ucG5nJztcbmltcG9ydCBwYXVsb21vamlDb250YWN0c1NyYyBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zaGFyZWQvbWVkaWEvaW1hZ2VzL3BhdWxvbW9qaS9wYXVsb21vamktY29udGFjdHMucG5nJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1BvcnRyYWl0Lm1vZHVsZS5jc3MnO1xuXG5jb25zdCBFTU9KSSA9IHtcbiAgQkFTRTogJ2Jhc2UnLFxuICBQQVVMTzogJ3BhdWxvJyxcbiAgRVhQRVJUSVNFOiAnZXhwZXJ0aXNlJyxcbiAgRVhQRVJJRU5DRTogJ2V4cGVyaWVuY2UnLFxuICBQT1JURk9MSU86ICdwb3J0Zm9saW8nLFxuICBDT05UQUNUUzogJ2NvbnRhY3RzJyxcbn07XG5cbmNvbnN0IFBvcnRyYWl0ID0gKHsgY2xhc3NOYW1lIH0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnRFbW9qaSwgc2V0Q3VycmVudEVtb2ppXSA9IHVzZVN0YXRlKEVNT0pJLkJBU0UpO1xuXG4gIGNvbnN0IGhhbmRsZUxpbmtNb3VzZU92ZXIgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0eXBlID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuaGVhZGVybGluaztcblxuICAgIHNldEN1cnJlbnRFbW9qaSh0eXBlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUxpbmtNb3VzZUxlYXZlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEN1cnJlbnRFbW9qaShFTU9KSS5CQVNFKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2xlYW5lcnMgPSBbXTtcblxuICAgIE9iamVjdC52YWx1ZXMoRU1PSkkpLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1oZWFkZXJsaW5rPVwiJHt0eXBlfVwiXWApO1xuXG4gICAgICBpZiAobGluaykge1xuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZUxpbmtNb3VzZU92ZXIpO1xuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBoYW5kbGVMaW5rTW91c2VMZWF2ZSk7XG5cbiAgICAgICAgY2xlYW5lcnMucHVzaCgoKSA9PiBsaW5rLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZUxpbmtNb3VzZU92ZXIpKTtcbiAgICAgICAgY2xlYW5lcnMucHVzaCgoKSA9PiBsaW5rLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBoYW5kbGVMaW5rTW91c2VMZWF2ZSkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFuZXJzLmZvckVhY2goKGNsZWFuZXIpID0+IGNsZWFuZXIoKSk7XG4gIH0sIFtoYW5kbGVMaW5rTW91c2VPdmVyLCBoYW5kbGVMaW5rTW91c2VMZWF2ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc05hbWVzKHN0eWxlcy5wb3J0cmFpdCwgY2xhc3NOYW1lKSB9PlxuICAgICAgPGltZyBhbHQ9XCJHbG93XCIgc3JjPXsgZ2xvd1NyYyB9IGNsYXNzTmFtZT17IHN0eWxlcy5nbG93IH0gLz5cbiAgICAgIDxpbWcgYWx0PVwiUGF1bG8gQm9keVwiIHNyYz17IHBhdWxvQm9keVNyYyB9IGNsYXNzTmFtZT17IHN0eWxlcy5ib2R5IH0gLz5cbiAgICAgIDxpbWcgYWx0PVwiUGF1bG8gSGVhZFwiIHNyYz17IHBhdWxvSGVhZFNyYyB9IGNsYXNzTmFtZT17IGNsYXNzTmFtZXMoc3R5bGVzLmhlYWQsIHsgW3N0eWxlcy5hY3RpdmVdOiBjdXJyZW50RW1vamkgPT09IEVNT0pJLlBBVUxPIH0pIH0gLz5cbiAgICAgIDxpbWdcbiAgICAgICAgYWx0PVwiUGF1bG8gRW1vamkgQmFzZVwiXG4gICAgICAgIHNyYz17IHBhdWxvbW9qaUJhc2VTcmMgfVxuICAgICAgICBjbGFzc05hbWU9eyBjbGFzc05hbWVzKHN0eWxlcy5wYXVsb21vamksIHN0eWxlcy5iYXNlLCB7IFtzdHlsZXMuYWN0aXZlXTogY3VycmVudEVtb2ppID09PSBFTU9KSS5CQVNFIH0pIH0gLz5cbiAgICAgIDxpbWdcbiAgICAgICAgYWx0PVwiUGF1bG8gRW1vamkgRXhwZXJ0aXNlXCJcbiAgICAgICAgc3JjPXsgcGF1bG9tb2ppRXhwZXJ0aXNlU3JjIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgY2xhc3NOYW1lcyhzdHlsZXMucGF1bG9tb2ppLCBzdHlsZXMuZXhwZXJ0aXNlLCB7IFtzdHlsZXMuYWN0aXZlXTogY3VycmVudEVtb2ppID09PSBFTU9KSS5FWFBFUlRJU0UgfSkgfSAvPlxuICAgICAgPGltZ1xuICAgICAgICBhbHQ9XCJQYXVsbyBFbW9qaSBFeHBlcmllbmNlXCJcbiAgICAgICAgc3JjPXsgcGF1bG9tb2ppRXhwZXJpZW5jZVNyYyB9XG4gICAgICAgIGNsYXNzTmFtZT17IGNsYXNzTmFtZXMoc3R5bGVzLnBhdWxvbW9qaSwgc3R5bGVzLmV4cGVyaWVuY2UsIHsgW3N0eWxlcy5hY3RpdmVdOiBjdXJyZW50RW1vamkgPT09IEVNT0pJLkVYUEVSSUVOQ0UgfSkgfSAvPlxuICAgICAgPGltZ1xuICAgICAgICBhbHQ9XCJQYXVsbyBFbW9qaSBQb3J0Zm9saW9cIlxuICAgICAgICBzcmM9eyBwYXVsb21vamlQb3J0Zm9saW9TcmMgfVxuICAgICAgICBjbGFzc05hbWU9eyBjbGFzc05hbWVzKHN0eWxlcy5wYXVsb21vamksIHN0eWxlcy5wb3J0Zm9saW8sIHsgW3N0eWxlcy5hY3RpdmVdOiBjdXJyZW50RW1vamkgPT09IEVNT0pJLlBPUlRGT0xJTyB9KSB9IC8+XG4gICAgICA8aW1nXG4gICAgICAgIGFsdD1cIlBhdWxvIEVtb2ppIENvbnRhY3RzXCJcbiAgICAgICAgc3JjPXsgcGF1bG9tb2ppQ29udGFjdHNTcmMgfVxuICAgICAgICBjbGFzc05hbWU9eyBjbGFzc05hbWVzKHN0eWxlcy5wYXVsb21vamksIHN0eWxlcy5jb250YWN0cywgeyBbc3R5bGVzLmFjdGl2ZV06IGN1cnJlbnRFbW9qaSA9PT0gRU1PSkkuQ09OVEFDVFMgfSkgfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUG9ydHJhaXQucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3J0cmFpdDtcbiIsImV4cG9ydCBkZWZhdWx0IFwiL19uZXh0L3N0YXRpYy9jaHVua3MvbWVkaWEvaW1hZ2VzL2dsb3cucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==