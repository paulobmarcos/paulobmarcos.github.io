webpackHotUpdate_N_E("pages/index",{

/***/ "./www/pages/home/components/experience/Experience.js":
/*!************************************************************!*\
  !*** ./www/pages/home/components/experience/Experience.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/utils */ "./www/shared/utils/index.js");
/* harmony import */ var _shared_media_images_experience_mog_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/media/images/experience/mog.png */ "./www/shared/media/images/experience/mog.png");
/* harmony import */ var _shared_media_images_experience_moxy_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/media/images/experience/moxy.png */ "./www/shared/media/images/experience/moxy.png");
/* harmony import */ var _shared_media_images_experience_gyant_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/media/images/experience/gyant.png */ "./www/shared/media/images/experience/gyant.png");
/* harmony import */ var _shared_media_images_experience_triggerise_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/media/images/experience/triggerise.png */ "./www/shared/media/images/experience/triggerise.png");
/* harmony import */ var _Experience_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Experience.module.css */ "./www/pages/home/components/experience/Experience.module.css");
/* harmony import */ var _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Experience_module_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\paulo\\Desktop\\Work\\Projects\\Personal\\Web\\paulobmarcos\\www\\pages\\home\\components\\experience\\Experience.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const setUniverseTranslation = (universe, value) => Object(_shared_utils__WEBPACK_IMPORTED_MODULE_2__["changeStyle"])(universe, 'transform', "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, ".concat(value, ", 1)"));

const Experience = () => {
  _s();

  const contentRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const universeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const containerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const containerBoundingClientRectRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const layoutContentRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const handleScroll = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const _window = window,
          innerHeight = _window.innerHeight;
    const clientHeight = containerRef.current.clientHeight;
    const scrollTop = layoutContentRef.current.scrollTop;
    const top = containerBoundingClientRectRef.current.top;
    const universe = universeRef.current;
    const currentScroll = scrollTop - top;
    const phase0 = {
      initScroll: 0,
      endScroll: innerHeight * 0.75,
      minTranslate: 0,
      maxTranslate: innerHeight * 1500 / 1000
    };
    const phase1 = {
      initScroll: phase0.endScroll,
      endScroll: clientHeight - innerHeight * 1.5,
      minTranslate: phase0.maxTranslate,
      maxTranslate: innerHeight * 67500 / 1000
    };

    if (currentScroll < phase0.initScroll) {
      setUniverseTranslation(universe, 0);
    } else if (currentScroll >= phase0.initScroll && currentScroll < phase0.endScroll) {
      const percentage = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_2__["getRangePercentage"])(currentScroll, phase0.initScroll, phase0.endScroll, {
        clamp: true
      });
      const translate = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_2__["getRangeValue"])(percentage, phase0.minTranslate, phase0.maxTranslate, {
        clamp: true
      });

      for (let i = 1; i < universe.children.length; i += 1) {
        Object(_shared_utils__WEBPACK_IMPORTED_MODULE_2__["changeStyle"])(universe.children[i], 'opacity', 0);
      }

      setUniverseTranslation(universe, translate);
    } else if (currentScroll >= phase1.initScroll && currentScroll <= phase1.endScroll) {
      const percentage = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_2__["getRangePercentage"])(currentScroll, phase1.initScroll, phase1.endScroll, {
        clamp: true
      });
      const translate = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_2__["getRangeValue"])(percentage, phase1.minTranslate, phase1.maxTranslate, {
        clamp: true
      }); // Add opacity to far away galaxies

      for (let i = 1; i < universe.children.length; i += 1) {
        const galaxy = universe.children[i];
        const minRange = (i - 1) * 0.25 + 0.05;
        const maxRange = (i - 1) * 0.25 + 0.2;
        const opacity = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_2__["getRangePercentage"])(percentage, minRange, maxRange, {
          clamp: true
        });
        Object(_shared_utils__WEBPACK_IMPORTED_MODULE_2__["changeStyle"])(galaxy, 'opacity', opacity);
      }

      setUniverseTranslation(universe, translate);
    } else {
      setUniverseTranslation(universe, phase1.maxTranslate);
    }
  }, []);
  const handleResize = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const _containerRef$current = containerRef.current.getBoundingClientRect(),
          top = _containerRef$current.top;

    const layoutContent = document.getElementById('layoutContent');
    layoutContentRef.current = layoutContent;
    containerBoundingClientRectRef.current = {
      top: top + layoutContent.scrollTop
    };
    handleScroll();
  }, [handleScroll]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    handleResize();
    window.addEventListener('resize', handleResize, {
      passive: true
    });
    layoutContentRef.current.addEventListener('scroll', handleScroll, {
      passive: true
    }); // Safari Optimization

    if (_shared_utils__WEBPACK_IMPORTED_MODULE_2__["browsers"].isSafari()) {
      Object(_shared_utils__WEBPACK_IMPORTED_MODULE_2__["changeStyle"])(universeRef.current, 'transition', 'none');
    }

    return () => {
      window.removeEventListener('resize', handleResize, {
        passive: true
      });
      layoutContentRef.current.removeEventListener('scroll', handleScroll, {
        passive: true
      });
    };
  }, [handleScroll, handleResize]);
  return __jsx("div", {
    id: "experience",
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.experience,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.background,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }), __jsx("div", {
    ref: containerRef,
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, __jsx("div", {
    ref: contentRef,
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx("div", {
    ref: universeRef,
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.universe,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.galaxy, _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.intro),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.star,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, "Work"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.time,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, "Experience"))), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.galaxy, _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.mog),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.star,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, __jsx("img", {
    alt: "Mog Logo",
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.logo,
    src: _shared_media_images_experience_mog_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.time,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, "2015 to 2016"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, "Middleware"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, "RabbitMQ"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }, "C#"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, "Events"))), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.galaxy, _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.triggerise),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.star,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 15
    }
  }, __jsx("img", {
    alt: "Triggerise Logo",
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.logo,
    src: _shared_media_images_experience_triggerise_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.time,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, "2016 to 2017"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }, "Android"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }, "Web"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, "Social"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, "React"))), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.galaxy, _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.moxy),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.star,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, __jsx("img", {
    alt: "Moxy Logo",
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.logo,
    src: _shared_media_images_experience_moxy_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.time,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, "2017 to 2020"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, "React"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }, "Lead"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }, "Next.js"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }, "Node.js"))), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.galaxy, _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.gyant),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.star,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }, __jsx("img", {
    alt: "Gyant Logo",
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.logo,
    src: _shared_media_images_experience_gyant_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.time,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }, "Current"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }, "Microservices"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  }, "Node.js"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }, "Web"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }
  }, "Health")))))));
};

_s(Experience, "/ZroXPHFqpsJAD5lW2Wp4iWa6XI=");

_c = Experience;
Experience.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Experience);

var _c;

$RefreshReg$(_c, "Experience");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3BhZ2VzL2hvbWUvY29tcG9uZW50cy9leHBlcmllbmNlL0V4cGVyaWVuY2UuanMiXSwibmFtZXMiOlsic2V0VW5pdmVyc2VUcmFuc2xhdGlvbiIsInVuaXZlcnNlIiwidmFsdWUiLCJjaGFuZ2VTdHlsZSIsIkV4cGVyaWVuY2UiLCJjb250ZW50UmVmIiwidXNlUmVmIiwidW5pdmVyc2VSZWYiLCJjb250YWluZXJSZWYiLCJjb250YWluZXJCb3VuZGluZ0NsaWVudFJlY3RSZWYiLCJsYXlvdXRDb250ZW50UmVmIiwiaGFuZGxlU2Nyb2xsIiwidXNlQ2FsbGJhY2siLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsImN1cnJlbnQiLCJzY3JvbGxUb3AiLCJ0b3AiLCJjdXJyZW50U2Nyb2xsIiwicGhhc2UwIiwiaW5pdFNjcm9sbCIsImVuZFNjcm9sbCIsIm1pblRyYW5zbGF0ZSIsIm1heFRyYW5zbGF0ZSIsInBoYXNlMSIsInBlcmNlbnRhZ2UiLCJnZXRSYW5nZVBlcmNlbnRhZ2UiLCJjbGFtcCIsInRyYW5zbGF0ZSIsImdldFJhbmdlVmFsdWUiLCJpIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJnYWxheHkiLCJtaW5SYW5nZSIsIm1heFJhbmdlIiwib3BhY2l0eSIsImhhbmRsZVJlc2l6ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxheW91dENvbnRlbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJicm93c2VycyIsImlzU2FmYXJpIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0eWxlcyIsImV4cGVyaWVuY2UiLCJiYWNrZ3JvdW5kIiwiY29udGFpbmVyIiwiY29udGVudCIsImNsYXNzTmFtZXMiLCJpbnRybyIsInN0YXIiLCJ0aW1lIiwibW9nIiwibG9nbyIsIm1vZ0xvZ29VcmwiLCJwbGFuZXQiLCJ0cmlnZ2VyaXNlIiwidHJpZ2dlcmlzZUxvZ29VcmwiLCJtb3h5IiwibW94eUxvZ29VcmwiLCJneWFudCIsImd5YW50TG9nb1VybCIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLHNCQUFzQixHQUFHLENBQUNDLFFBQUQsRUFBV0MsS0FBWCxLQUM3QkMsaUVBQVcsQ0FBQ0YsUUFBRCxFQUFXLFdBQVgsK0RBQThFQyxLQUE5RSxVQURiOztBQUdBLE1BQU1FLFVBQVUsR0FBRyxNQUFNO0FBQUE7O0FBQ3ZCLFFBQU1DLFVBQVUsR0FBR0Msb0RBQU0sRUFBekI7QUFDQSxRQUFNQyxXQUFXLEdBQUdELG9EQUFNLEVBQTFCO0FBQ0EsUUFBTUUsWUFBWSxHQUFHRixvREFBTSxFQUEzQjtBQUNBLFFBQU1HLDhCQUE4QixHQUFHSCxvREFBTSxFQUE3QztBQUNBLFFBQU1JLGdCQUFnQixHQUFHSixvREFBTSxFQUEvQjtBQUVBLFFBQU1LLFlBQVksR0FBR0MseURBQVcsQ0FBQyxNQUFNO0FBQUEsb0JBQ2JDLE1BRGE7QUFBQSxVQUM3QkMsV0FENkIsV0FDN0JBLFdBRDZCO0FBQUEsVUFFN0JDLFlBRjZCLEdBRVpQLFlBQVksQ0FBQ1EsT0FGRCxDQUU3QkQsWUFGNkI7QUFBQSxVQUc3QkUsU0FINkIsR0FHZlAsZ0JBQWdCLENBQUNNLE9BSEYsQ0FHN0JDLFNBSDZCO0FBQUEsVUFJN0JDLEdBSjZCLEdBSXJCVCw4QkFBOEIsQ0FBQ08sT0FKVixDQUk3QkUsR0FKNkI7QUFLckMsVUFBTWpCLFFBQVEsR0FBR00sV0FBVyxDQUFDUyxPQUE3QjtBQUVBLFVBQU1HLGFBQWEsR0FBR0YsU0FBUyxHQUFHQyxHQUFsQztBQUVBLFVBQU1FLE1BQU0sR0FBRztBQUNiQyxnQkFBVSxFQUFFLENBREM7QUFFYkMsZUFBUyxFQUFFUixXQUFXLEdBQUcsSUFGWjtBQUdiUyxrQkFBWSxFQUFFLENBSEQ7QUFJYkMs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Q1ksTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLEVBS0U7QUFBSyxhQUFTLEVBQUdaLDZEQUFNLENBQUNZLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FMRixFQU1FO0FBQUssYUFBUyxFQUFHWiw2REFBTSxDQUFDWSxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsQ0FERixDQXJDRixDQURGLENBREYsQ0FGRixDQURGO0FBeURELENBbkpEOztHQUFNekQsVTs7S0FBQUEsVTtBQXFKTkEsVUFBVSxDQUFDZ0UsU0FBWCxHQUF1QixFQUF2QjtBQUVlaEUseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzM2ZjFjYTIzOTdiZGI4Mzg5MzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGNoYW5nZVN0eWxlLCBnZXRSYW5nZVBlcmNlbnRhZ2UsIGdldFJhbmdlVmFsdWUsIGJyb3dzZXJzIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3V0aWxzJztcblxuaW1wb3J0IG1vZ0xvZ29VcmwgZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL21lZGlhL2ltYWdlcy9leHBlcmllbmNlL21vZy5wbmcnO1xuaW1wb3J0IG1veHlMb2dvVXJsIGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9tZWRpYS9pbWFnZXMvZXhwZXJpZW5jZS9tb3h5LnBuZyc7XG5pbXBvcnQgZ3lhbnRMb2dvVXJsIGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9tZWRpYS9pbWFnZXMvZXhwZXJpZW5jZS9neWFudC5wbmcnO1xuaW1wb3J0IHRyaWdnZXJpc2VMb2dvVXJsIGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9tZWRpYS9pbWFnZXMvZXhwZXJpZW5jZS90cmlnZ2VyaXNlLnBuZyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9FeHBlcmllbmNlLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBzZXRVbml2ZXJzZVRyYW5zbGF0aW9uID0gKHVuaXZlcnNlLCB2YWx1ZSkgPT5cbiAgY2hhbmdlU3R5bGUodW5pdmVyc2UsICd0cmFuc2Zvcm0nLCBgbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMSwgJHt2YWx1ZX0sIDEpYCk7XG5cbmNvbnN0IEV4cGVyaWVuY2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgdW5pdmVyc2VSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGNvbnRhaW5lckJvdW5kaW5nQ2xpZW50UmVjdFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBsYXlvdXRDb250ZW50UmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHsgaW5uZXJIZWlnaHQgfSA9IHdpbmRvdztcbiAgICBjb25zdCB7IGNsaWVudEhlaWdodCB9ID0gY29udGFpbmVyUmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgeyBzY3JvbGxUb3AgfSA9IGxheW91dENvbnRlbnRSZWYuY3VycmVudDtcbiAgICBjb25zdCB7IHRvcCB9ID0gY29udGFpbmVyQm91bmRpbmdDbGllbnRSZWN0UmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgdW5pdmVyc2UgPSB1bml2ZXJzZVJlZi5jdXJyZW50O1xuXG4gICAgY29uc3QgY3VycmVudFNjcm9sbCA9IHNjcm9sbFRvcCAtIHRvcDtcblxuICAgIGNvbnN0IHBoYXNlMCA9IHtcbiAgICAgIGluaXRTY3JvbGw6IDAsXG4gICAgICBlbmRTY3JvbGw6IGlubmVySGVpZ2h0ICogMC43NSxcbiAgICAgIG1pblRyYW5zbGF0ZTogMCxcbiAgICAgIG1heFRyYW5zbGF0ZTogKGlubmVySGVpZ2h0ICogMTUwMCkgLyAxMDAwLFxuICAgIH07XG4gICAgY29uc3QgcGhhc2UxID0ge1xuICAgICAgaW5pdFNjcm9sbDogcGhhc2UwLmVuZFNjcm9sbCxcbiAgICAgIGVuZFNjcm9sbDogY2xpZW50SGVpZ2h0IC0gKGlubmVySGVpZ2h0ICogMS41KSxcbiAgICAgIG1pblRyYW5zbGF0ZTogcGhhc2UwLm1heFRyYW5zbGF0ZSxcbiAgICAgIG1heFRyYW5zbGF0ZTogKGlubmVySGVpZ2h0ICogNjc1MDApIC8gMTAwMCxcbiAgICB9O1xuXG4gICAgaWYgKGN1cnJlbnRTY3JvbGwgPCBwaGFzZTAuaW5pdFNjcm9sbCkge1xuICAgICAgc2V0VW5pdmVyc2VUcmFuc2xhdGlvbih1bml2ZXJzZSwgMCk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50U2Nyb2xsID49IHBoYXNlMC5pbml0U2Nyb2xsICYmIGN1cnJlbnRTY3JvbGwgPCBwaGFzZTAuZW5kU2Nyb2xsKSB7XG4gICAgICBjb25zdCBwZXJjZW50YWdlID0gZ2V0UmFuZ2VQZXJjZW50YWdlKGN1cnJlbnRTY3JvbGwsIHBoYXNlMC5pbml0U2Nyb2xsLCBwaGFzZTAuZW5kU2Nyb2xsLCB7IGNsYW1wOiB0cnVlIH0pO1xuICAgICAgY29uc3QgdHJhbnNsYXRlID0gZ2V0UmFuZ2VWYWx1ZShwZXJjZW50YWdlLCBwaGFzZTAubWluVHJhbnNsYXRlLCBwaGFzZTAubWF4VHJhbnNsYXRlLCB7IGNsYW1wOiB0cnVlIH0pO1xuXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHVuaXZlcnNlLmNoaWxkcmVuLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNoYW5nZVN0eWxlKHVuaXZlcnNlLmNoaWxkcmVuW2ldLCAnb3BhY2l0eScsIDApO1xuICAgICAgfVxuXG4gICAgICBzZXRVbml2ZXJzZVRyYW5zbGF0aW9uKHVuaXZlcnNlLCB0cmFuc2xhdGUpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudFNjcm9sbCA+PSBwaGFzZTEuaW5pdFNjcm9sbCAmJiBjdXJyZW50U2Nyb2xsIDw9IHBoYXNlMS5lbmRTY3JvbGwpIHtcbiAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBnZXRSYW5nZVBlcmNlbnRhZ2UoY3VycmVudFNjcm9sbCwgcGhhc2UxLmluaXRTY3JvbGwsIHBoYXNlMS5lbmRTY3JvbGwsIHsgY2xhbXA6IHRydWUgfSk7XG4gICAgICBjb25zdCB0cmFuc2xhdGUgPSBnZXRSYW5nZVZhbHVlKHBlcmNlbnRhZ2UsIHBoYXNlMS5taW5UcmFuc2xhdGUsIHBoYXNlMS5tYXhUcmFuc2xhdGUsIHsgY2xhbXA6IHRydWUgfSk7XG5cbiAgICAgIC8vIEFkZCBvcGFjaXR5IHRvIGZhciBhd2F5IGdhbGF4aWVzXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHVuaXZlcnNlLmNoaWxkcmVuLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGdhbGF4eSA9IHVuaXZlcnNlLmNoaWxkcmVuW2ldO1xuICAgICAgICBjb25zdCBtaW5SYW5nZSA9ICgoaSAtIDEpICogMC4yNSkgKyAwLjA1O1xuICAgICAgICBjb25zdCBtYXhSYW5nZSA9ICgoaSAtIDEpICogMC4yNSkgKyAwLjI7XG5cbiAgICAgICAgY29uc3Qgb3BhY2l0eSA9IGdldFJhbmdlUGVyY2VudGFnZShwZXJjZW50YWdlLCBtaW5SYW5nZSwgbWF4UmFuZ2UsIHsgY2xhbXA6IHRydWUgfSk7XG5cbiAgICAgICAgY2hhbmdlU3R5bGUoZ2FsYXh5LCAnb3BhY2l0eScsIG9wYWNpdHkpO1xuICAgICAgfVxuXG4gICAgICBzZXRVbml2ZXJzZVRyYW5zbGF0aW9uKHVuaXZlcnNlLCB0cmFuc2xhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRVbml2ZXJzZVRyYW5zbGF0aW9uKHVuaXZlcnNlLCBwaGFzZTEubWF4VHJhbnNsYXRlKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVSZXNpemUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgeyB0b3AgfSA9IGNvbnRhaW5lclJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGxheW91dENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5b3V0Q29udGVudCcpO1xuXG4gICAgbGF5b3V0Q29udGVudFJlZi5jdXJyZW50ID0gbGF5b3V0Q29udGVudDtcbiAgICBjb250YWluZXJCb3VuZGluZ0NsaWVudFJlY3RSZWYuY3VycmVudCA9IHtcbiAgICAgIHRvcDogdG9wICsgbGF5b3V0Q29udGVudC5zY3JvbGxUb3AsXG4gICAgfTtcblxuICAgIGhhbmRsZVNjcm9sbCgpO1xuICB9LCBbaGFuZGxlU2Nyb2xsXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBoYW5kbGVSZXNpemUoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICBsYXlvdXRDb250ZW50UmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgICAvLyBTYWZhcmkgT3B0aW1pemF0aW9uXG4gICAgaWYgKGJyb3dzZXJzLmlzU2FmYXJpKCkpIHtcbiAgICAgIGNoYW5nZVN0eWxlKHVuaXZlcnNlUmVmLmN1cnJlbnQsICd0cmFuc2l0aW9uJywgJ25vbmUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgbGF5b3V0Q29udGVudFJlZi5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgIH07XG4gIH0sIFtoYW5kbGVTY3JvbGwsIGhhbmRsZVJlc2l6ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImV4cGVyaWVuY2VcIiBjbGFzc05hbWU9eyBzdHlsZXMuZXhwZXJpZW5jZSB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuYmFja2dyb3VuZCB9IC8+XG4gICAgICA8ZGl2IHJlZj17IGNvbnRhaW5lclJlZiB9IGNsYXNzTmFtZT17IHN0eWxlcy5jb250YWluZXIgfT5cbiAgICAgICAgPGRpdiByZWY9eyBjb250ZW50UmVmIH0gY2xhc3NOYW1lPXsgc3R5bGVzLmNvbnRlbnQgfT5cbiAgICAgICAgICA8ZGl2IHJlZj17IHVuaXZlcnNlUmVmIH0gY2xhc3NOYW1lPXsgc3R5bGVzLnVuaXZlcnNlIH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzTmFtZXMoc3R5bGVzLmdhbGF4eSwgc3R5bGVzLmludHJvKSB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5zdGFyIH0+XG4gICAgICAgICAgICAgICAgPGRpdj5Xb3JrPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMudGltZSB9PkV4cGVyaWVuY2U8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NOYW1lcyhzdHlsZXMuZ2FsYXh5LCBzdHlsZXMubW9nKSB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5zdGFyIH0+XG4gICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJNb2cgTG9nb1wiIGNsYXNzTmFtZT17IHN0eWxlcy5sb2dvIH0gc3JjPXsgbW9nTG9nb1VybCB9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMudGltZSB9PjIwMTUgdG8gMjAxNjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLnBsYW5ldCB9Pk1pZGRsZXdhcmU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5wbGFuZXQgfT5SYWJiaXRNUTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLnBsYW5ldCB9PkMjPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMucGxhbmV0IH0+RXZlbnRzPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzTmFtZXMoc3R5bGVzLmdhbGF4eSwgc3R5bGVzLnRyaWdnZXJpc2UpIH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLnN0YXIgfT5cbiAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIlRyaWdnZXJpc2UgTG9nb1wiIGNsYXNzTmFtZT17IHN0eWxlcy5sb2dvIH0gc3JjPXsgdHJpZ2dlcmlzZUxvZ29VcmwgfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLnRpbWUgfT4yMDE2IHRvIDIwMTc8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5wbGFuZXQgfT5BbmRyb2lkPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMucGxhbmV0IH0+V2ViPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMucGxhbmV0IH0+U29jaWFsPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMucGxhbmV0IH0+UmVhY3Q8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NOYW1lcyhzdHlsZXMuZ2FsYXh5LCBzdHlsZXMubW94eSkgfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuc3RhciB9PlxuICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiTW94eSBMb2dvXCIgY2xhc3NOYW1lPXsgc3R5bGVzLmxvZ28gfSBzcmM9eyBtb3h5TG9nb1VybCB9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMudGltZSB9PjIwMTcgdG8gMjAyMDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLnBsYW5ldCB9PlJlYWN0PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMucGxhbmV0IH0+TGVhZDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLnBsYW5ldCB9Pk5leHQuanM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5wbGFuZXQgfT5Ob2RlLmpzPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzTmFtZXMoc3R5bGVzLmdhbGF4eSwgc3R5bGVzLmd5YW50KSB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5zdGFyIH0+XG4gICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJHeWFudCBMb2dvXCIgY2xhc3NOYW1lPXsgc3R5bGVzLmxvZ28gfSBzcmM9eyBneWFudExvZ29VcmwgfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLnRpbWUgfT5DdXJyZW50PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMucGxhbmV0IH0+TWljcm9zZXJ2aWNlczwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLnBsYW5ldCB9Pk5vZGUuanM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5wbGFuZXQgfT5XZWI8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5wbGFuZXQgfT5IZWFsdGg8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkV4cGVyaWVuY2UucHJvcFR5cGVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGVyaWVuY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9