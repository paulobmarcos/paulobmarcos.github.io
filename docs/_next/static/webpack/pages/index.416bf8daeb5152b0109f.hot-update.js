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
    });
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
      lineNumber: 101,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.background,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }), __jsx("div", {
    ref: containerRef,
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx("div", {
    ref: contentRef,
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, __jsx("div", {
    ref: universeRef,
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.universe,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.galaxy, _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.intro),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.star,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, "Work"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.time,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, "Experience"))), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.galaxy, _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.mog),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.star,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, __jsx("img", {
    alt: "Mog Logo",
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.logo,
    src: _shared_media_images_experience_mog_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.time,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, "2015 to 2016"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, "Middleware"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, "RabbitMQ"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, "C#"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, "Events"))), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.galaxy, _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.triggerise),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.star,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, __jsx("img", {
    alt: "Triggerise Logo",
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.logo,
    src: _shared_media_images_experience_triggerise_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.time,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, "2016 to 2017"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, "Android"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, "Web"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, "Social"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }, "React"))), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.galaxy, _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.moxy),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.star,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }, __jsx("img", {
    alt: "Moxy Logo",
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.logo,
    src: _shared_media_images_experience_moxy_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.time,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 17
    }
  }, "2017 to 2020"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, "React"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }, "Lead"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }, "Next.js"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, "Node.js"))), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.galaxy, _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.gyant),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.star,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  }, __jsx("img", {
    alt: "Gyant Logo",
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.logo,
    src: _shared_media_images_experience_gyant_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.time,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }, "Current"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }, "Microservices"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, "Node.js"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, "Web"), __jsx("div", {
    className: _Experience_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.planet,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3BhZ2VzL2hvbWUvY29tcG9uZW50cy9leHBlcmllbmNlL0V4cGVyaWVuY2UuanMiXSwibmFtZXMiOlsic2V0VW5pdmVyc2VUcmFuc2xhdGlvbiIsInVuaXZlcnNlIiwidmFsdWUiLCJjaGFuZ2VTdHlsZSIsIkV4cGVyaWVuY2UiLCJjb250ZW50UmVmIiwidXNlUmVmIiwidW5pdmVyc2VSZWYiLCJjb250YWluZXJSZWYiLCJjb250YWluZXJCb3VuZGluZ0NsaWVudFJlY3RSZWYiLCJsYXlvdXRDb250ZW50UmVmIiwiaGFuZGxlU2Nyb2xsIiwidXNlQ2FsbGJhY2siLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsImN1cnJlbnQiLCJzY3JvbGxUb3AiLCJ0b3AiLCJjdXJyZW50U2Nyb2xsIiwicGhhc2UwIiwiaW5pdFNjcm9sbCIsImVuZFNjcm9sbCIsIm1pblRyYW5zbGF0ZSIsIm1heFRyYW5zbGF0ZSIsInBoYXNlMSIsInBlcmNlbnRhZ2UiLCJnZXRSYW5nZVBlcmNlbnRhZ2UiLCJjbGFtcCIsInRyYW5zbGF0ZSIsImdldFJhbmdlVmFsdWUiLCJpIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJnYWxheHkiLCJtaW5SYW5nZSIsIm1heFJhbmdlIiwib3BhY2l0eSIsImhhbmRsZVJlc2l6ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxheW91dENvbnRlbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGVzIiwiZXhwZXJpZW5jZSIsImJhY2tncm91bmQiLCJjb250YWluZXIiLCJjb250ZW50IiwiY2xhc3NOYW1lcyIsImludHJvIiwic3RhciIsInRpbWUiLCJtb2ciLCJsb2dvIiwibW9nTG9nb1VybCIsInBsYW5ldCIsInRyaWdnZXJpc2UiLCJ0cmlnZ2VyaXNlTG9nb1Vy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RUFBR1osNkRBQU0sQ0FBQ1ksTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLENBREYsQ0FyQ0YsQ0FERixDQURGLENBRkYsQ0FERjtBQXlERCxDQTlJRDs7R0FBTXZELFU7O0tBQUFBLFU7QUFnSk5BLFVBQVUsQ0FBQzhELFNBQVgsR0FBdUIsRUFBdkI7QUFFZTlELHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQxNmJmOGRhZWI1MTUyYjAxMDlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBjaGFuZ2VTdHlsZSwgZ2V0UmFuZ2VQZXJjZW50YWdlLCBnZXRSYW5nZVZhbHVlLCBicm93c2VycyB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC91dGlscyc7XG5cbmltcG9ydCBtb2dMb2dvVXJsIGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9tZWRpYS9pbWFnZXMvZXhwZXJpZW5jZS9tb2cucG5nJztcbmltcG9ydCBtb3h5TG9nb1VybCBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvbWVkaWEvaW1hZ2VzL2V4cGVyaWVuY2UvbW94eS5wbmcnO1xuaW1wb3J0IGd5YW50TG9nb1VybCBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvbWVkaWEvaW1hZ2VzL2V4cGVyaWVuY2UvZ3lhbnQucG5nJztcbmltcG9ydCB0cmlnZ2VyaXNlTG9nb1VybCBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvbWVkaWEvaW1hZ2VzL2V4cGVyaWVuY2UvdHJpZ2dlcmlzZS5wbmcnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRXhwZXJpZW5jZS5tb2R1bGUuY3NzJztcblxuY29uc3Qgc2V0VW5pdmVyc2VUcmFuc2xhdGlvbiA9ICh1bml2ZXJzZSwgdmFsdWUpID0+XG4gIGNoYW5nZVN0eWxlKHVuaXZlcnNlLCAndHJhbnNmb3JtJywgYG1hdHJpeDNkKDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDEsICR7dmFsdWV9LCAxKWApO1xuXG5jb25zdCBFeHBlcmllbmNlID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IHVuaXZlcnNlUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBjb250YWluZXJCb3VuZGluZ0NsaWVudFJlY3RSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgbGF5b3V0Q29udGVudFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCB7IGlubmVySGVpZ2h0IH0gPSB3aW5kb3c7XG4gICAgY29uc3QgeyBjbGllbnRIZWlnaHQgfSA9IGNvbnRhaW5lclJlZi5jdXJyZW50O1xuICAgIGNvbnN0IHsgc2Nyb2xsVG9wIH0gPSBsYXlvdXRDb250ZW50UmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgeyB0b3AgfSA9IGNvbnRhaW5lckJvdW5kaW5nQ2xpZW50UmVjdFJlZi5jdXJyZW50O1xuICAgIGNvbnN0IHVuaXZlcnNlID0gdW5pdmVyc2VSZWYuY3VycmVudDtcblxuICAgIGNvbnN0IGN1cnJlbnRTY3JvbGwgPSBzY3JvbGxUb3AgLSB0b3A7XG5cbiAgICBjb25zdCBwaGFzZTAgPSB7XG4gICAgICBpbml0U2Nyb2xsOiAwLFxuICAgICAgZW5kU2Nyb2xsOiBpbm5lckhlaWdodCAqIDAuNzUsXG4gICAgICBtaW5UcmFuc2xhdGU6IDAsXG4gICAgICBtYXhUcmFuc2xhdGU6IChpbm5lckhlaWdodCAqIDE1MDApIC8gMTAwMCxcbiAgICB9O1xuICAgIGNvbnN0IHBoYXNlMSA9IHtcbiAgICAgIGluaXRTY3JvbGw6IHBoYXNlMC5lbmRTY3JvbGwsXG4gICAgICBlbmRTY3JvbGw6IGNsaWVudEhlaWdodCAtIChpbm5lckhlaWdodCAqIDEuNSksXG4gICAgICBtaW5UcmFuc2xhdGU6IHBoYXNlMC5tYXhUcmFuc2xhdGUsXG4gICAgICBtYXhUcmFuc2xhdGU6IChpbm5lckhlaWdodCAqIDY3NTAwKSAvIDEwMDAsXG4gICAgfTtcblxuICAgIGlmIChjdXJyZW50U2Nyb2xsIDwgcGhhc2UwLmluaXRTY3JvbGwpIHtcbiAgICAgIHNldFVuaXZlcnNlVHJhbnNsYXRpb24odW5pdmVyc2UsIDApO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudFNjcm9sbCA+PSBwaGFzZTAuaW5pdFNjcm9sbCAmJiBjdXJyZW50U2Nyb2xsIDwgcGhhc2UwLmVuZFNjcm9sbCkge1xuICAgICAgY29uc3QgcGVyY2VudGFnZSA9IGdldFJhbmdlUGVyY2VudGFnZShjdXJyZW50U2Nyb2xsLCBwaGFzZTAuaW5pdFNjcm9sbCwgcGhhc2UwLmVuZFNjcm9sbCwgeyBjbGFtcDogdHJ1ZSB9KTtcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IGdldFJhbmdlVmFsdWUocGVyY2VudGFnZSwgcGhhc2UwLm1pblRyYW5zbGF0ZSwgcGhhc2UwLm1heFRyYW5zbGF0ZSwgeyBjbGFtcDogdHJ1ZSB9KTtcblxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB1bml2ZXJzZS5jaGlsZHJlbi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjaGFuZ2VTdHlsZSh1bml2ZXJzZS5jaGlsZHJlbltpXSwgJ29wYWNpdHknLCAwKTtcbiAgICAgIH1cblxuICAgICAgc2V0VW5pdmVyc2VUcmFuc2xhdGlvbih1bml2ZXJzZSwgdHJhbnNsYXRlKTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRTY3JvbGwgPj0gcGhhc2UxLmluaXRTY3JvbGwgJiYgY3VycmVudFNjcm9sbCA8PSBwaGFzZTEuZW5kU2Nyb2xsKSB7XG4gICAgICBjb25zdCBwZXJjZW50YWdlID0gZ2V0UmFuZ2VQZXJjZW50YWdlKGN1cnJlbnRTY3JvbGwsIHBoYXNlMS5pbml0U2Nyb2xsLCBwaGFzZTEuZW5kU2Nyb2xsLCB7IGNsYW1wOiB0cnVlIH0pO1xuICAgICAgY29uc3QgdHJhbnNsYXRlID0gZ2V0UmFuZ2VWYWx1ZShwZXJjZW50YWdlLCBwaGFzZTEubWluVHJhbnNsYXRlLCBwaGFzZTEubWF4VHJhbnNsYXRlLCB7IGNsYW1wOiB0cnVlIH0pO1xuXG4gICAgICAvLyBBZGQgb3BhY2l0eSB0byBmYXIgYXdheSBnYWxheGllc1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB1bml2ZXJzZS5jaGlsZHJlbi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBnYWxheHkgPSB1bml2ZXJzZS5jaGlsZHJlbltpXTtcbiAgICAgICAgY29uc3QgbWluUmFuZ2UgPSAoKGkgLSAxKSAqIDAuMjUpICsgMC4wNTtcbiAgICAgICAgY29uc3QgbWF4UmFuZ2UgPSAoKGkgLSAxKSAqIDAuMjUpICsgMC4yO1xuXG4gICAgICAgIGNvbnN0IG9wYWNpdHkgPSBnZXRSYW5nZVBlcmNlbnRhZ2UocGVyY2VudGFnZSwgbWluUmFuZ2UsIG1heFJhbmdlLCB7IGNsYW1wOiB0cnVlIH0pO1xuXG4gICAgICAgIGNoYW5nZVN0eWxlKGdhbGF4eSwgJ29wYWNpdHknLCBvcGFjaXR5KTtcbiAgICAgIH1cblxuICAgICAgc2V0VW5pdmVyc2VUcmFuc2xhdGlvbih1bml2ZXJzZSwgdHJhbnNsYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VW5pdmVyc2VUcmFuc2xhdGlvbih1bml2ZXJzZSwgcGhhc2UxLm1heFRyYW5zbGF0ZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlUmVzaXplID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHsgdG9wIH0gPSBjb250YWluZXJSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBsYXlvdXRDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheW91dENvbnRlbnQnKTtcblxuICAgIGxheW91dENvbnRlbnRSZWYuY3VycmVudCA9IGxheW91dENvbnRlbnQ7XG4gICAgY29udGFpbmVyQm91bmRpbmdDbGllbnRSZWN0UmVmLmN1cnJlbnQgPSB7XG4gICAgICB0b3A6IHRvcCArIGxheW91dENvbnRlbnQuc2Nyb2xsVG9wLFxuICAgIH07XG5cbiAgICBoYW5kbGVTY3JvbGwoKTtcbiAgfSwgW2hhbmRsZVNjcm9sbF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGFuZGxlUmVzaXplKCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgbGF5b3V0Q29udGVudFJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgIGxheW91dENvbnRlbnRSZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICB9O1xuICB9LCBbaGFuZGxlU2Nyb2xsLCBoYW5kbGVSZXNpemVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJleHBlcmllbmNlXCIgY2xhc3NOYW1lPXsgc3R5bGVzLmV4cGVyaWVuY2UgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmJhY2tncm91bmQgfSAvPlxuICAgICAgPGRpdiByZWY9eyBjb250YWluZXJSZWYgfSBjbGFzc05hbWU9eyBzdHlsZXMuY29udGFpbmVyIH0+XG4gICAgICAgIDxkaXYgcmVmPXsgY29udGVudFJlZiB9IGNsYXNzTmFtZT17IHN0eWxlcy5jb250ZW50IH0+XG4gICAgICAgICAgPGRpdiByZWY9eyB1bml2ZXJzZVJlZiB9IGNsYXNzTmFtZT17IHN0eWxlcy51bml2ZXJzZSB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc05hbWVzKHN0eWxlcy5nYWxheHksIHN0eWxlcy5pbnRybykgfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuc3RhciB9PlxuICAgICAgICAgICAgICAgIDxkaXY+V29yazwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLnRpbWUgfT5FeHBlcmllbmNlPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzTmFtZXMoc3R5bGVzLmdhbGF4eSwgc3R5bGVzLm1vZykgfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuc3RhciB9PlxuICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiTW9nIExvZ29cIiBjbGFzc05hbWU9eyBzdHlsZXMubG9nbyB9IHNyYz17IG1vZ0xvZ29VcmwgfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLnRpbWUgfT4yMDE1IHRvIDIwMTY8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5wbGFuZXQgfT5NaWRkbGV3YXJlPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMucGxhbmV0IH0+UmFiYml0TVE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5wbGFuZXQgfT5DIzwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLnBsYW5ldCB9PkV2ZW50czwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc05hbWVzKHN0eWxlcy5nYWxheHksIHN0eWxlcy50cmlnZ2VyaXNlKSB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5zdGFyIH0+XG4gICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJUcmlnZ2VyaXNlIExvZ29cIiBjbGFzc05hbWU9eyBzdHlsZXMubG9nbyB9IHNyYz17IHRyaWdnZXJpc2VMb2dvVXJsIH0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy50aW1lIH0+MjAxNiB0byAyMDE3PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMucGxhbmV0IH0+QW5kcm9pZDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLnBsYW5ldCB9PldlYjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLnBsYW5ldCB9PlNvY2lhbDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLnBsYW5ldCB9PlJlYWN0PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzTmFtZXMoc3R5bGVzLmdhbGF4eSwgc3R5bGVzLm1veHkpIH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLnN0YXIgfT5cbiAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIk1veHkgTG9nb1wiIGNsYXNzTmFtZT17IHN0eWxlcy5sb2dvIH0gc3JjPXsgbW94eUxvZ29VcmwgfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLnRpbWUgfT4yMDE3IHRvIDIwMjA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5wbGFuZXQgfT5SZWFjdDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLnBsYW5ldCB9PkxlYWQ8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5wbGFuZXQgfT5OZXh0LmpzPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMucGxhbmV0IH0+Tm9kZS5qczwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc05hbWVzKHN0eWxlcy5nYWxheHksIHN0eWxlcy5neWFudCkgfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuc3RhciB9PlxuICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiR3lhbnQgTG9nb1wiIGNsYXNzTmFtZT17IHN0eWxlcy5sb2dvIH0gc3JjPXsgZ3lhbnRMb2dvVXJsIH0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy50aW1lIH0+Q3VycmVudDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLnBsYW5ldCB9Pk1pY3Jvc2VydmljZXM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5wbGFuZXQgfT5Ob2RlLmpzPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMucGxhbmV0IH0+V2ViPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMucGxhbmV0IH0+SGVhbHRoPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5FeHBlcmllbmNlLnByb3BUeXBlcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBlcmllbmNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==