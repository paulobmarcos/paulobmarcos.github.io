webpackHotUpdate_N_E("pages/index",{

/***/ "./www/pages/home/components/portfolio/components/carousel/Carousel.js":
/*!*****************************************************************************!*\
  !*** ./www/pages/home/components/portfolio/components/carousel/Carousel.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toArray */ "./node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _moxy_next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @moxy/next-link */ "./node_modules/@moxy/next-link/es/index.js");
/* harmony import */ var _moxy_react_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @moxy/react-carousel */ "./node_modules/@moxy/react-carousel/es/index.js");
/* harmony import */ var _shared_components_text_reveal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../shared/components/text-reveal */ "./www/shared/components/text-reveal/index.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/utils */ "./www/shared/utils/index.js");
/* harmony import */ var _shared_hooks_use_viewport__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../shared/hooks/use-viewport */ "./www/shared/hooks/use-viewport/index.js");
/* harmony import */ var _Carousel_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Carousel.module.css */ "./www/pages/home/components/portfolio/components/carousel/Carousel.module.css");
/* harmony import */ var _Carousel_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Carousel_module_css__WEBPACK_IMPORTED_MODULE_10__);



var _jsxFileName = "C:\\Users\\paulo\\Desktop\\Work\\Projects\\Personal\\Web\\paulobmarcos\\www\\pages\\home\\components\\portfolio\\components\\carousel\\Carousel.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }











const getOffset = () => {
  if (false) {}

  if (window.innerHeight > window.innerWidth) {
    return Math.round(window.innerWidth * 0.1) - Math.round(window.innerWidth * 0.02);
  }

  return Math.round(window.innerWidth * 0.20) - 22;
};

const Carousel = ({
  items,
  onItemChange
}) => {
  _s();

  const _useViewport = Object(_shared_hooks_use_viewport__WEBPACK_IMPORTED_MODULE_9__["default"])(),
        isPortrait = _useViewport.isPortrait;

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
        offset = _useState[0],
        setOffset = _useState[1];

  const slidesRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])([]);
  const preventLinkRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const handleBeforeChange = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    preventLinkRef.current = true;
  }, []);
  const handleItemClick = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(event => {
    if (preventLinkRef.current) {
      event.preventDefault();
    }

    preventLinkRef.current = false;
  }, []);
  const handleMouseMove = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(event => {
    const clientX = event.clientX,
          clientY = event.clientY;
    const _window = window,
          innerWidth = _window.innerWidth,
          innerHeight = _window.innerHeight;
    const tX = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_8__["getRangeValue"])(clientX / innerWidth, -5, 5);
    const tY = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_8__["getRangeValue"])(clientY / innerHeight, -5, 5);
    const tZ = _shared_utils__WEBPACK_IMPORTED_MODULE_8__["browsers"].isSafari() ? 50 : 0;
    const rY = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_8__["getRangeValue"])(clientX / innerWidth, -8, 8);
    const rX = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_8__["getRangeValue"])(clientY / innerHeight, -8, 8);
    const translateBackground = "translate3d(".concat(tX, "px, ").concat(tY, "px, 0px)");
    const translateInfo = "translate3d(".concat(tX * 1.7, "px, calc(-50% + ").concat(tY * 1.7, "px), ").concat(tZ, "px)");
    const rotateBackground = "rotateX(".concat(-rX, "deg) rotateY(").concat(rY, "deg) rotateZ(0deg)");
    const rotateInfo = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
    const scale3d = 'scale3d(1, 1, 1)';

    const _slidesRef$current = Object(_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_1__["default"])(slidesRef.current),
          intro = _slidesRef$current[0],
          slides = _slidesRef$current.slice(1);

    var _iterator = _createForOfIteratorHelper(slides),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        const slide = _step.value;

        const _slide$children = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(slide.children, 2),
              background = _slide$children[0],
              info = _slide$children[1];

        if (slide.classList.contains('-current') && !isPortrait) {
          Object(_shared_utils__WEBPACK_IMPORTED_MODULE_8__["changeStyle"])(background, 'transform', "".concat(translateBackground, " ").concat(rotateBackground, " ").concat(scale3d));
          Object(_shared_utils__WEBPACK_IMPORTED_MODULE_8__["changeStyle"])(info, 'transform', "".concat(translateInfo, " ").concat(rotateInfo, " ").concat(scale3d));
        } else {
          Object(_shared_utils__WEBPACK_IMPORTED_MODULE_8__["changeStyle"])(background, 'transform', 'translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
          Object(_shared_utils__WEBPACK_IMPORTED_MODULE_8__["changeStyle"])(info, 'transform', "translate3d(0px, -50%, ".concat(tZ, "px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }, [isPortrait]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    window.addEventListener('mousemove', handleMouseMove, {
      passive: true
    });
    return () => window.removeEventListener('mousemove', handleMouseMove, {
      passive: true
    });
  }, [handleMouseMove]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    slidesRef.current = document.querySelectorAll('.rc-slide');
  }, [items]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setOffset(() => getOffset);
  }, []);
  const renderItem = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])((item, index) => __jsx(_moxy_next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: "".concat(item.title, "-").concat(index),
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.item,
    external: true,
    newTab: true,
    href: item.url //onClick={ handleItemClick }
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.background,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.image,
    style: {
      backgroundImage: "url(".concat(item.image, ")")
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.info,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, item.title), __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subtitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, item.subtitle))), [handleItemClick]);

  const renderIntro = () => __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.intro,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.subtitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, "Slide & Discover"), __jsx(_shared_components_text_reveal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, "Notourios"), __jsx(_shared_components_text_reveal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.title,
    revealDelay: 0.15,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, "Work")));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, isPortrait && renderIntro(), __jsx(_moxy_react_carousel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    draggable: true,
    disableNativeScroll: true,
    offset: offset,
    wrapperClassName: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.wrapper,
    carouselClassName: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.carousel,
    sliderClassName: _Carousel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.slider,
    beforeChange: handleBeforeChange,
    afterChange: onItemChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, !isPortrait && renderIntro(), items.map(renderItem)));
};

_s(Carousel, "UZops2IbjojEsox5zHPT1VuKEzc=", false, function () {
  return [_shared_hooks_use_viewport__WEBPACK_IMPORTED_MODULE_9__["default"]];
});

_c = Carousel;
Carousel.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,
  onItemChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Carousel);

var _c;

$RefreshReg$(_c, "Carousel");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3BhZ2VzL2hvbWUvY29tcG9uZW50cy9wb3J0Zm9saW8vY29tcG9uZW50cy9jYXJvdXNlbC9DYXJvdXNlbC5qcyJdLCJuYW1lcyI6WyJnZXRPZmZzZXQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJNYXRoIiwicm91bmQiLCJDYXJvdXNlbCIsIml0ZW1zIiwib25JdGVtQ2hhbmdlIiwidXNlVmlld3BvcnQiLCJpc1BvcnRyYWl0IiwidXNlU3RhdGUiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJzbGlkZXNSZWYiLCJ1c2VSZWYiLCJwcmV2ZW50TGlua1JlZiIsImhhbmRsZUJlZm9yZUNoYW5nZSIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsImhhbmRsZUl0ZW1DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVNb3VzZU1vdmUiLCJjbGllbnRYIiwiY2xpZW50WSIsInRYIiwiZ2V0UmFuZ2VWYWx1ZSIsInRZIiwidFoiLCJicm93c2VycyIsImlzU2FmYXJpIiwiclkiLCJyWCIsInRyYW5zbGF0ZUJhY2tncm91bmQiLCJ0cmFuc2xhdGVJbmZvIiwicm90YXRlQmFja2dyb3VuZCIsInJvdGF0ZUluZm8iLCJzY2FsZTNkIiwiaW50cm8iLCJzbGlkZXMiLCJzbGlkZSIsImNoaWxkcmVuIiwiYmFja2dyb3VuZCIsImluZm8iLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImNoYW5nZVN0eWxlIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVuZGVySXRlbSIsIml0ZW0iLCJpbmRleCIsInRpdGxlIiwic3R5bGVzIiwidXJsIiwiaW1hZ2UiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzdWJ0aXRsZSIsInJlbmRlckludHJvIiwiY29udGVudCIsIndyYXBwZXIiLCJjYXJvdXNlbCIsInNsaWRlciIsIm1hcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLE1BQU07QUFDdEIsYUFBbUMsRUFFbEM7O0FBRUQsTUFBSUMsTUFBTSxDQUFDQyxXQUFQLEdBQXFCRCxNQUFNLENBQUNFLFVBQWhDLEVBQTRDO0FBQzFDLFdBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixNQUFNLENBQUNFLFVBQVAsR0FBb0IsR0FBL0IsSUFBc0NDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixNQUFNLENBQUNFLFVBQVAsR0FBb0IsSUFBL0IsQ0FBN0M7QUFDRDs7QUFFRCxTQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osTUFBTSxDQUFDRSxVQUFQLEdBQW9CLElBQS9CLElBQXVDLEVBQTlDO0FBQ0QsQ0FWRDs7QUFZQSxNQUFNRyxRQUFRLEdBQUcsQ0FBQztBQUFFQyxPQUFGO0FBQVNDO0FBQVQsQ0FBRCxLQUE2QjtBQUFBOztBQUFBLHVCQUNyQkMsMEVBQVcsRUFEVTtBQUFBLFFBQ3BDQyxVQURvQyxnQkFDcENBLFVBRG9DOztBQUFBLG9CQUVoQkMsc0RBQVEsQ0FBQyxDQUFELENBRlE7QUFBQSxRQUVyQ0MsTUFGcUM7QUFBQSxRQUU3QkMsU0FGNkI7O0FBRzVDLFFBQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQyxFQUFELENBQXhCO0FBQ0EsUUFBTUMsY0FBYyxHQUFHRCxvREFBTSxDQUFDLEtBQUQsQ0FBN0I7QUFFQSxRQUFNRSxrQkFBa0IsR0FBR0MseURBQVcsQ0FBQyxNQUFNO0FBQzNDRixrQkFBYyxDQUFDRyxPQUFmLEdBQXlCLElBQXpCO0FBQ0QsR0FGcUMsRUFFbkMsRUFGbUMsQ0FBdEM7QUFJQSxRQUFNQyxlQUFlLEdBQUdGLHlEQUFX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REFBTSxDQUFDUyxNQU4zQjtBQU9FLGdCQUFZLEVBQUdsRCxrQkFQakI7QUFRRSxlQUFXLEVBQUdULFlBUmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTSSxDQUFDRSxVQUFELElBQWVxRCxXQUFXLEVBVDlCLEVBVUl4RCxLQUFLLENBQUM2RCxHQUFOLENBQVVkLFVBQVYsQ0FWSixDQUZGLENBREY7QUFpQkQsQ0E5R0Q7O0dBQU1oRCxRO1VBQ21CRyxrRTs7O0tBRG5CSCxRO0FBZ0hOQSxRQUFRLENBQUMrRCxTQUFULEdBQXFCO0FBQ25COUQsT0FBSyxFQUFFK0QsaURBQVMsQ0FBQ0MsS0FBVixDQUFnQkMsVUFESjtBQUVuQmhFLGNBQVksRUFBRThELGlEQUFTLENBQUNHO0FBRkwsQ0FBckI7QUFLZW5FLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVmYjRmNjFlODFiOTdjMTdmMjdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBOZXh0TGluayBmcm9tICdAbW94eS9uZXh0LWxpbmsnO1xuaW1wb3J0IE1veHlDYXJvdXNlbCBmcm9tICdAbW94eS9yZWFjdC1jYXJvdXNlbCc7XG5pbXBvcnQgVGV4dFJldmVhbCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy90ZXh0LXJldmVhbCc7XG5pbXBvcnQgeyBjaGFuZ2VTdHlsZSwgZ2V0UmFuZ2VWYWx1ZSwgYnJvd3NlcnMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zaGFyZWQvdXRpbHMnO1xuaW1wb3J0IHVzZVZpZXdwb3J0IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9ob29rcy91c2Utdmlld3BvcnQnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2Fyb3VzZWwubW9kdWxlLmNzcyc7XG5cbmNvbnN0IGdldE9mZnNldCA9ICgpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBpZiAod2luZG93LmlubmVySGVpZ2h0ID4gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJXaWR0aCAqIDAuMSkgLSBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lcldpZHRoICogMC4wMik7XG4gIH1cblxuICByZXR1cm4gTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJXaWR0aCAqIDAuMjApIC0gMjI7XG59XG5cbmNvbnN0IENhcm91c2VsID0gKHsgaXRlbXMsIG9uSXRlbUNoYW5nZSB9KSA9PiB7XG4gIGNvbnN0IHsgaXNQb3J0cmFpdCB9ID0gdXNlVmlld3BvcnQoKTtcbiAgY29uc3QgW29mZnNldCwgc2V0T2Zmc2V0XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBzbGlkZXNSZWYgPSB1c2VSZWYoW10pO1xuICBjb25zdCBwcmV2ZW50TGlua1JlZiA9IHVzZVJlZihmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQmVmb3JlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHByZXZlbnRMaW5rUmVmLmN1cnJlbnQgPSB0cnVlO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlSXRlbUNsaWNrID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgaWYgKHByZXZlbnRMaW5rUmVmLmN1cnJlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcHJldmVudExpbmtSZWYuY3VycmVudCA9IGZhbHNlO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBjbGllbnRYLCBjbGllbnRZIH0gPSBldmVudDtcbiAgICBjb25zdCB7IGlubmVyV2lkdGgsIGlubmVySGVpZ2h0IH0gPSB3aW5kb3c7XG5cbiAgICBjb25zdCB0WCA9IGdldFJhbmdlVmFsdWUoKGNsaWVudFggLyBpbm5lcldpZHRoKSwgLTUsIDUpO1xuICAgIGNvbnN0IHRZID0gZ2V0UmFuZ2VWYWx1ZSgoY2xpZW50WSAvIGlubmVySGVpZ2h0KSwgLTUsIDUpO1xuICAgIGNvbnN0IHRaID0gYnJvd3NlcnMuaXNTYWZhcmkoKSA/IDUwIDogMDtcblxuICAgIGNvbnN0IHJZID0gZ2V0UmFuZ2VWYWx1ZSgoY2xpZW50WCAvIGlubmVyV2lkdGgpLCAtOCwgOCk7XG4gICAgY29uc3QgclggPSBnZXRSYW5nZVZhbHVlKChjbGllbnRZIC8gaW5uZXJIZWlnaHQpLCAtOCwgOCk7XG5cbiAgICBjb25zdCB0cmFuc2xhdGVCYWNrZ3JvdW5kID0gYHRyYW5zbGF0ZTNkKCR7dFh9cHgsICR7dFl9cHgsIDBweClgO1xuICAgIGNvbnN0IHRyYW5zbGF0ZUluZm8gPSBgdHJhbnNsYXRlM2QoJHt0WCAqIDEuN31weCwgY2FsYygtNTAlICsgJHt0WSAqIDEuN31weCksICR7dFp9cHgpYDtcblxuICAgIGNvbnN0IHJvdGF0ZUJhY2tncm91bmQgPSBgcm90YXRlWCgkey1yWH1kZWcpIHJvdGF0ZVkoJHtyWX1kZWcpIHJvdGF0ZVooMGRlZylgO1xuICAgIGNvbnN0IHJvdGF0ZUluZm8gPSAncm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyknO1xuXG4gICAgY29uc3Qgc2NhbGUzZCA9ICdzY2FsZTNkKDEsIDEsIDEpJztcblxuICAgIGNvbnN0IFtpbnRybywgLi4uc2xpZGVzXSA9IHNsaWRlc1JlZi5jdXJyZW50O1xuXG4gICAgZm9yIChjb25zdCBzbGlkZSBvZiBzbGlkZXMpIHtcbiAgICAgIGNvbnN0IFtiYWNrZ3JvdW5kLCBpbmZvXSA9IHNsaWRlLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoc2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCctY3VycmVudCcpICYmICFpc1BvcnRyYWl0KSB7XG4gICAgICAgIGNoYW5nZVN0eWxlKGJhY2tncm91bmQsICd0cmFuc2Zvcm0nLCBgJHt0cmFuc2xhdGVCYWNrZ3JvdW5kfSAke3JvdGF0ZUJhY2tncm91bmR9ICR7c2NhbGUzZH1gKTtcbiAgICAgICAgY2hhbmdlU3R5bGUoaW5mbywgJ3RyYW5zZm9ybScsIGAke3RyYW5zbGF0ZUluZm99ICR7cm90YXRlSW5mb30gJHtzY2FsZTNkfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hhbmdlU3R5bGUoYmFja2dyb3VuZCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgc2NhbGUzZCgxLCAxLCAxKScpO1xuICAgICAgICBjaGFuZ2VTdHlsZShpbmZvLCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKDBweCwgLTUwJSwgJHt0Wn1weCkgcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHNjYWxlM2QoMSwgMSwgMSlgKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtpc1BvcnRyYWl0XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICB9LCBbaGFuZGxlTW91c2VNb3ZlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzbGlkZXNSZWYuY3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYy1zbGlkZScpO1xuICB9LCBbaXRlbXNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4geyBzZXRPZmZzZXQoKCkgPT4gZ2V0T2Zmc2V0KTsgfSwgW10pO1xuXG4gIGNvbnN0IHJlbmRlckl0ZW0gPSB1c2VDYWxsYmFjaygoaXRlbSwgaW5kZXgpID0+IChcbiAgICA8TmV4dExpbmtcbiAgICAgIGtleT17IGAke2l0ZW0udGl0bGV9LSR7aW5kZXh9YCB9XG4gICAgICBjbGFzc05hbWU9eyBzdHlsZXMuaXRlbSB9XG4gICAgICBleHRlcm5hbFxuICAgICAgbmV3VGFiXG4gICAgICBocmVmPXsgaXRlbS51cmwgfVxuICAgICAgLy9vbkNsaWNrPXsgaGFuZGxlSXRlbUNsaWNrIH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5iYWNrZ3JvdW5kIH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmltYWdlIH0gc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2l0ZW0uaW1hZ2V9KWAgfSB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmluZm8gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMudGl0bGUgfT57IGl0ZW0udGl0bGUgfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5zdWJ0aXRsZSB9PnsgaXRlbS5zdWJ0aXRsZSB9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L05leHRMaW5rPlxuICApLCBbaGFuZGxlSXRlbUNsaWNrXSk7XG5cbiAgY29uc3QgcmVuZGVySW50cm8gPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuaW50cm8gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmNvbnRlbnQgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuc3VidGl0bGUgfT5TbGlkZSAmIERpc2NvdmVyPC9kaXY+XG4gICAgICAgIDxUZXh0UmV2ZWFsIGNsYXNzTmFtZT17IHN0eWxlcy50aXRsZSB9Pk5vdG91cmlvczwvVGV4dFJldmVhbD5cbiAgICAgICAgPFRleHRSZXZlYWwgY2xhc3NOYW1lPXsgc3R5bGVzLnRpdGxlIH0gcmV2ZWFsRGVsYXk9eyAwLjE1IH0+V29yazwvVGV4dFJldmVhbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsgaXNQb3J0cmFpdCAmJiByZW5kZXJJbnRybygpIH1cbiAgICAgIDxNb3h5Q2Fyb3VzZWxcbiAgICAgICAgZHJhZ2dhYmxlXG4gICAgICAgIGRpc2FibGVOYXRpdmVTY3JvbGxcbiAgICAgICAgb2Zmc2V0PXsgb2Zmc2V0IH1cbiAgICAgICAgd3JhcHBlckNsYXNzTmFtZT17IHN0eWxlcy53cmFwcGVyIH1cbiAgICAgICAgY2Fyb3VzZWxDbGFzc05hbWU9eyBzdHlsZXMuY2Fyb3VzZWwgfVxuICAgICAgICBzbGlkZXJDbGFzc05hbWU9eyBzdHlsZXMuc2xpZGVyIH1cbiAgICAgICAgYmVmb3JlQ2hhbmdlPXsgaGFuZGxlQmVmb3JlQ2hhbmdlIH1cbiAgICAgICAgYWZ0ZXJDaGFuZ2U9eyBvbkl0ZW1DaGFuZ2UgfT5cbiAgICAgICAgeyAhaXNQb3J0cmFpdCAmJiByZW5kZXJJbnRybygpIH1cbiAgICAgICAgeyBpdGVtcy5tYXAocmVuZGVySXRlbSkgfVxuICAgICAgPC9Nb3h5Q2Fyb3VzZWw+XG4gICAgPC8+XG4gICk7XG59O1xuXG5DYXJvdXNlbC5wcm9wVHlwZXMgPSB7XG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgb25JdGVtQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==