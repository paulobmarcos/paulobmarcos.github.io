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
    const tZ = _shared_utils__WEBPACK_IMPORTED_MODULE_8__["browsers"].isSafari() ? 100 : 0;
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

  const renderIntro = introClassName => __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Carousel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.intro, introClassName),
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
  }, !isPortrait && renderIntro(_Carousel_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.bounce), items.map(renderItem)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3BhZ2VzL2hvbWUvY29tcG9uZW50cy9wb3J0Zm9saW8vY29tcG9uZW50cy9jYXJvdXNlbC9DYXJvdXNlbC5qcyJdLCJuYW1lcyI6WyJnZXRPZmZzZXQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJNYXRoIiwicm91bmQiLCJDYXJvdXNlbCIsIml0ZW1zIiwib25JdGVtQ2hhbmdlIiwidXNlVmlld3BvcnQiLCJpc1BvcnRyYWl0IiwidXNlU3RhdGUiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJzbGlkZXNSZWYiLCJ1c2VSZWYiLCJwcmV2ZW50TGlua1JlZiIsImhhbmRsZUJlZm9yZUNoYW5nZSIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsImhhbmRsZUl0ZW1DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVNb3VzZU1vdmUiLCJjbGllbnRYIiwiY2xpZW50WSIsInRYIiwiZ2V0UmFuZ2VWYWx1ZSIsInRZIiwidFoiLCJicm93c2VycyIsImlzU2FmYXJpIiwiclkiLCJyWCIsInRyYW5zbGF0ZUJhY2tncm91bmQiLCJ0cmFuc2xhdGVJbmZvIiwicm90YXRlQmFja2dyb3VuZCIsInJvdGF0ZUluZm8iLCJzY2FsZTNkIiwiaW50cm8iLCJzbGlkZXMiLCJzbGlkZSIsImNoaWxkcmVuIiwiYmFja2dyb3VuZCIsImluZm8iLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImNoYW5nZVN0eWxlIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVuZGVySXRlbSIsIml0ZW0iLCJpbmRleCIsInRpdGxlIiwic3R5bGVzIiwidXJsIiwiaW1hZ2UiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzdWJ0aXRsZSIsInJlbmRlckludHJvIiwiaW50cm9DbGFzc05hbWUiLCJjbGFzc05hbWVzIiwiY29udGVudCIsIndyYXBwZXIiLCJjYXJvdXNlbCIsInNsaWRlciIsImJvdW5jZSIsIm1hcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLE1BQU07QUFDdEIsYUFBbUMsRUFFbEM7O0FBRUQsTUFBSUMsTUFBTSxDQUFDQyxXQUFQLEdBQXFCRCxNQUFNLENBQUNFLFVBQWhDLEVBQTRDO0FBQzFDLFdBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixNQUFNLENBQUNFLFVBQVAsR0FBb0IsR0FBL0IsSUFBc0NDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixNQUFNLENBQUNFLFVBQVAsR0FBb0IsSUFBL0IsQ0FBN0M7QUFDRDs7QUFFRCxTQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osTUFBTSxDQUFDRSxVQUFQLEdBQW9CLElBQS9CLElBQXVDLEVBQTlDO0FBQ0QsQ0FWRDs7QUFZQSxNQUFNRyxRQUFRLEdBQUcsQ0FBQztBQUFFQyxPQUFGO0FBQVNDO0FBQVQsQ0FBRCxLQUE2QjtBQUFBOztBQUFBLHVCQUNyQkMsMEVBQVcsRUFEVTtBQUFBLFFBQ3BDQyxVQURvQyxnQkFDcENBLFVBRG9DOztBQUFBLG9CQUVoQkMsc0RBQVEsQ0FBQyxDQUFELENBRlE7QUFBQSxRQUVyQ0MsTUFGcUM7QUFBQSxRQUU3QkMsU0FGNkI7O0FBRzVDLFFBQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQyxFQUFELENBQXhCO0FBQ0EsUUFBTUMsY0FBYyxHQUFHRCxvREFBTSxDQUFDLEtBQUQsQ0FBN0I7QUFFQSxRQUFNRSxrQkFBa0IsR0FBR0MseURBQVcsQ0FBQyxNQUFNO0FBQzNDRixrQkFBYyxDQUFDRyxPQUFmLEdBQXlCLElBQXpCO0FBQ0QsR0FGcUMsRUFFbkMsRUFGbUMsQ0FBdEM7QUFJQSxRQUFNQyxlQUFlLEdBQUdGLHlEQUFXLENBQUVHLEtBQUQsSUFBVztBQUM3QyxRQUFJTCxjQUFjLENBQUNHLE9BQW5CLEVBQTRCO0FBQzFCRSxXQUFLLENBQUNDLGNBQU47QUFDRDs7QUFFRE4sa0JBQWMsQ0FBQ0csT0FBZixHQUF5QixLQUF6QjtBQUNELEdBTmtDLEVBTWhDLEVBTmdDLENBQW5DO0FBUUEsUUFBTUksZUFBZSxHQUFHTCx5REFBVyxDQUFFRyxLQUFELElBQVc7QUFBQSxVQUNyQ0csT0FEcUMsR0FDaEJILEtBRGdCLENBQ3JDRyxPQURxQztBQUFBLFVBQzVCQyxPQUQ0QixHQUNoQkosS0FEZ0IsQ0FDNUJJLE9BRDRCO0FBQUEsb0JBRVR4QixNQUZTO0FBQUEsVUFFckNFLFVBRnFDLFdBRXJDQSxVQUZxQztBQUFBLFVBRXpCRCxXQUZ5QixXQUV6QkEsV0FGeUI7QUFJN0MsVUFBTXdCLEVBQUUsR0FBR0MsbUVBQWEsQ0FBRUgsT0FBTyxHQUFHckIsVUFBWixFQUF5QixDQUFDLENBQTFCLEVBQTZCLENBQTdCLENBQXhCO0FBQ0EsVUFBTXlCLEVBQUUsR0FBR0QsbUVBQWEsQ0FBRUYsT0FBTyxHQUFHdkIsV0FBWixFQUEwQixDQUFDLENBQTNCLEVBQThCLENBQTlCLENBQXhCO0FBQ0EsVUFBTTJCLEVBQUUsR0FBR0Msc0RBQVEsQ0FBQ0MsUUFBVCxLQUFzQixHQUF0QixHQUE0QixDQUF2QztBQUVBLFVBQU1DLEVBQUUsR0FBR0wsbUVBQWEsQ0FBRUgsT0FBTyxHQUFHckIsVUFBWixFQUF5QixDQUFDLENBQTFCLEVBQTZCLENBQTdCLENBQXhCO0FBQ0EsVUFBTThCLEVBQUUsR0FBR04sbUVBQWEsQ0FBRUYsT0FBTyxHQUFHdkIsV0FBWixFQUEwQixDQUFDLENBQTNCLEVBQThCLENBQTlCLENBQXhCO0FBRUEsVUFBTWdDLG1CQUFtQix5QkFBa0JSLEVBQWxCLGlCQUEyQkUsRUFBM0IsYUFBekI7QUFDQSxVQUFNTyxhQUFhLHlCQUFrQlQsRUFBRSxHQUFHLEdBQXZCLDZCQUE2Q0UsRUFBRSxHQUFHLEdBQWxELGtCQUE2REMsRUFBN0QsUUFBbkI7QUFFQSxVQUFNTyxnQkFBZ0IscUJBQWMsQ0FBQ0gsRUFBZiwwQkFBaUNELEVBQWpDLHVCQUF0QjtBQUNBLFVBQU1LLFVBQVUsR0FBRywyQ0FBbkI7QUFFQSxVQUFNQyxPQUFPLEdBQUcsa0JBQWhCOztBQWpCNkMsa0hBbUJsQnhCLFNBQVMsQ0FBQ0ssT0FuQlE7QUFBQSxVQW1CdENvQixLQW5Cc0M7QUFBQSxVQW1CNUJDLE1BbkI0Qjs7QUFBQSwrQ0FxQnpCQSxNQXJCeUI7QUFBQTs7QUFBQTtBQXFCN0MsMERBQTRCO0FBQUEsY0FBakJDLEtBQWlCOztBQUFBLHlIQUNDQSxLQUFLLENBQUNDLFFBRFA7QUFBQSxjQUNuQkMsVUFEbUI7QUFBQSxjQUNQQyxJQURPOztBQUcxQixZQUFJSCxLQUFLLENBQUNJLFNBQU4sQ0FBZ0JDLFFBQWhCLENBQXlCLFVBQXpCLEtBQXdDLENBQUNwQyxVQUE3QyxFQUF5RDtBQUN2RHFDLDJFQUFXLENBQUNKLFVBQUQsRUFBYSxXQUFiLFlBQTZCVCxtQkFBN0IsY0FBb0RFLGdCQUFwRCxjQUF3RUUsT0FBeEUsRUFBWDtBQUNBUywyRUFBVyxDQUFDSCxJQUFELEVBQU8sV0FBUCxZQUF1QlQsYUFBdkIsY0FBd0NFLFVBQXhDLGNBQXNEQyxPQUF0RCxFQUFYO0FBQ0QsU0FIRCxNQUdPO0FBQ0xTLDJFQUFXLENBQUNKLFVBQUQsRUFBYSxXQUFiLEVBQTBCLHlFQUExQixDQUFYO0FBQ0FJLDJFQUFXLENBQUNILElBQUQsRUFBTyxXQUFQLG1DQUE4Q2YsRUFBOUMsc0RBQVg7QUFDRDtBQUNGO0FBL0I0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0M5QyxHQWhDa0MsRUFnQ2hDLENBQUNuQixVQUFELENBaENnQyxDQUFuQztBQWtDQXNDLHlEQUFTLENBQUMsTUFBTTtBQUNkL0MsVUFBTSxDQUFDZ0QsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUMxQixlQUFyQyxFQUFzRDtBQUFFMkIsYUFBTyxFQUFFO0FBQVgsS0FBdEQ7QUFFQSxXQUFPLE1BQU1qRCxNQUFNLENBQUNrRCxtQkFBUCxDQUEyQixXQUEzQixFQUF3QzVCLGVBQXhDLEVBQXlEO0FBQUUyQixhQUFPLEVBQUU7QUFBWCxLQUF6RCxDQUFiO0FBQ0QsR0FKUSxFQUlOLENBQUMzQixlQUFELENBSk0sQ0FBVDtBQU1BeUIseURBQVMsQ0FBQyxNQUFNO0FBQ2RsQyxhQUFTLENBQUNLLE9BQVYsR0FBb0JpQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLFdBQTFCLENBQXBCO0FBQ0QsR0FGUSxFQUVOLENBQUM5QyxLQUFELENBRk0sQ0FBVDtBQUlBeUMseURBQVMsQ0FBQyxNQUFNO0FBQUVuQyxhQUFTLENBQUMsTUFBTWIsU0FBUCxDQUFUO0FBQTZCLEdBQXRDLEVBQXdDLEVBQXhDLENBQVQ7QUFFQSxRQUFNc0QsVUFBVSxHQUFHcEMseURBQVcsQ0FBQyxDQUFDcUMsSUFBRCxFQUFPQyxLQUFQLEtBQzdCLE1BQUMsdURBQUQ7QUFDRSxPQUFHLFlBQU1ELElBQUksQ0FBQ0UsS0FBWCxjQUFvQkQsS0FBcEIsQ0FETDtBQUVFLGFBQVMsRUFBR0UsNERBQU0sQ0FBQ0gsSUFGckI7QUFHRSxZQUFRLE1BSFY7QUFJRSxVQUFNLE1BSlI7QUFLRSxRQUFJLEVBQUdBLElBQUksQ0FBQ0ksR0FMZCxDQU1FO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFO0FBQUssYUFBUyxFQUFHRCw0REFBTSxDQUFDZixVQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUdlLDREQUFNLENBQUNFLEtBQXhCO0FBQWdDLFNBQUssRUFBRztBQUFFQyxxQkFBZSxnQkFBU04sSUFBSSxDQUFDSyxLQUFkO0FBQWpCLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVJGLEVBV0U7QUFBSyxhQUFTLEVBQUdGLDREQUFNLENBQUNkLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBR2MsNERBQU0sQ0FBQ0QsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQ0YsSUFBSSxDQUFDRSxLQUF2QyxDQURGLEVBRUU7QUFBSyxhQUFTLEVBQUdDLDREQUFNLENBQUNJLFFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUNQLElBQUksQ0FBQ08sUUFBMUMsQ0FGRixDQVhGLENBRDRCLEVBaUIzQixDQUFDMUMsZUFBRCxDQWpCMkIsQ0FBOUI7O0FBbUJBLFFBQU0yQyxXQUFXLEdBQUlDLGNBQUQsSUFDbEI7QUFBSyxhQUFTLEVBQUdDLGlEQUFVLENBQUNQLDREQUFNLENBQUNuQixLQUFSLEVBQWV5QixjQUFmLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBR04sNERBQU0sQ0FBQ1EsT0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFHUiw0REFBTSxDQUFDSSxRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLEVBRUUsTUFBQyxzRUFBRDtBQUFZLGFBQVMsRUFBR0osNERBQU0sQ0FBQ0QsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixFQUdFLE1BQUMsc0VBQUQ7QUFBWSxhQUFTLEVBQUdDLDREQUFNLENBQUNELEtBQS9CO0FBQXVDLGVBQVcsRUFBRyxJQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsQ0FERixDQURGOztBQVVBLFNBQ0UsbUVBQ0kvQyxVQUFVLElBQUlxRCxXQUFXLEVBRDdCLEVBRUUsTUFBQyw0REFBRDtBQUNFLGFBQVMsTUFEWDtBQUVFLHVCQUFtQixNQUZyQjtBQUdFLFVBQU0sRUFBR25ELE1BSFg7QUFJRSxvQkFBZ0IsRUFBRzhDLDREQUFNLENBQUNTLE9BSjVCO0FBS0UscUJBQWlCLEVBQUdULDREQUFNLENBQUNVLFFBTDdCO0FBTUUsbUJBQWUsRUFBR1YsNERBQU0sQ0FBQ1csTUFOM0I7QUFPRSxnQkFBWSxFQUFHcEQsa0JBUGpCO0FBUUUsZUFBVyxFQUFHVCxZQVJoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0ksQ0FBQ0UsVUFBRCxJQUFlcUQsV0FBVyxDQUFDTCw0REFBTSxDQUFDWSxNQUFSLENBVDlCLEVBVUkvRCxLQUFLLENBQUNnRSxHQUFOLENBQVVqQixVQUFWLENBVkosQ0FGRixDQURGO0FBaUJELENBOUdEOztHQUFNaEQsUTtVQUNtQkcsa0U7OztLQURuQkgsUTtBQWdITkEsUUFBUSxDQUFDa0UsU0FBVCxHQUFxQjtBQUNuQmpFLE9BQUssRUFBRWtFLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0JDLFVBREo7QUFFbkJuRSxjQUFZLEVBQUVpRSxpREFBUyxDQUFDRztBQUZMLENBQXJCO0FBS2V0RSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMDEwY2U2MDQ4YzgwOGQ0NGFlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnQG1veHkvbmV4dC1saW5rJztcbmltcG9ydCBNb3h5Q2Fyb3VzZWwgZnJvbSAnQG1veHkvcmVhY3QtY2Fyb3VzZWwnO1xuaW1wb3J0IFRleHRSZXZlYWwgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvdGV4dC1yZXZlYWwnO1xuaW1wb3J0IHsgY2hhbmdlU3R5bGUsIGdldFJhbmdlVmFsdWUsIGJyb3dzZXJzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2hhcmVkL3V0aWxzJztcbmltcG9ydCB1c2VWaWV3cG9ydCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zaGFyZWQvaG9va3MvdXNlLXZpZXdwb3J0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Nhcm91c2VsLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBnZXRPZmZzZXQgPSAoKSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQod2luZG93LmlubmVyV2lkdGggKiAwLjEpIC0gTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJXaWR0aCAqIDAuMDIpO1xuICB9XG5cbiAgcmV0dXJuIE1hdGgucm91bmQod2luZG93LmlubmVyV2lkdGggKiAwLjIwKSAtIDIyO1xufVxuXG5jb25zdCBDYXJvdXNlbCA9ICh7IGl0ZW1zLCBvbkl0ZW1DaGFuZ2UgfSkgPT4ge1xuICBjb25zdCB7IGlzUG9ydHJhaXQgfSA9IHVzZVZpZXdwb3J0KCk7XG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3Qgc2xpZGVzUmVmID0gdXNlUmVmKFtdKTtcbiAgY29uc3QgcHJldmVudExpbmtSZWYgPSB1c2VSZWYoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUJlZm9yZUNoYW5nZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBwcmV2ZW50TGlua1JlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUl0ZW1DbGljayA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGlmIChwcmV2ZW50TGlua1JlZi5jdXJyZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHByZXZlbnRMaW5rUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQ7XG4gICAgY29uc3QgeyBpbm5lcldpZHRoLCBpbm5lckhlaWdodCB9ID0gd2luZG93O1xuXG4gICAgY29uc3QgdFggPSBnZXRSYW5nZVZhbHVlKChjbGllbnRYIC8gaW5uZXJXaWR0aCksIC01LCA1KTtcbiAgICBjb25zdCB0WSA9IGdldFJhbmdlVmFsdWUoKGNsaWVudFkgLyBpbm5lckhlaWdodCksIC01LCA1KTtcbiAgICBjb25zdCB0WiA9IGJyb3dzZXJzLmlzU2FmYXJpKCkgPyAxMDAgOiAwO1xuXG4gICAgY29uc3QgclkgPSBnZXRSYW5nZVZhbHVlKChjbGllbnRYIC8gaW5uZXJXaWR0aCksIC04LCA4KTtcbiAgICBjb25zdCByWCA9IGdldFJhbmdlVmFsdWUoKGNsaWVudFkgLyBpbm5lckhlaWdodCksIC04LCA4KTtcblxuICAgIGNvbnN0IHRyYW5zbGF0ZUJhY2tncm91bmQgPSBgdHJhbnNsYXRlM2QoJHt0WH1weCwgJHt0WX1weCwgMHB4KWA7XG4gICAgY29uc3QgdHJhbnNsYXRlSW5mbyA9IGB0cmFuc2xhdGUzZCgke3RYICogMS43fXB4LCBjYWxjKC01MCUgKyAke3RZICogMS43fXB4KSwgJHt0Wn1weClgO1xuXG4gICAgY29uc3Qgcm90YXRlQmFja2dyb3VuZCA9IGByb3RhdGVYKCR7LXJYfWRlZykgcm90YXRlWSgke3JZfWRlZykgcm90YXRlWigwZGVnKWA7XG4gICAgY29uc3Qgcm90YXRlSW5mbyA9ICdyb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKSc7XG5cbiAgICBjb25zdCBzY2FsZTNkID0gJ3NjYWxlM2QoMSwgMSwgMSknO1xuXG4gICAgY29uc3QgW2ludHJvLCAuLi5zbGlkZXNdID0gc2xpZGVzUmVmLmN1cnJlbnQ7XG5cbiAgICBmb3IgKGNvbnN0IHNsaWRlIG9mIHNsaWRlcykge1xuICAgICAgY29uc3QgW2JhY2tncm91bmQsIGluZm9dID0gc2xpZGUuY2hpbGRyZW47XG5cbiAgICAgIGlmIChzbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoJy1jdXJyZW50JykgJiYgIWlzUG9ydHJhaXQpIHtcbiAgICAgICAgY2hhbmdlU3R5bGUoYmFja2dyb3VuZCwgJ3RyYW5zZm9ybScsIGAke3RyYW5zbGF0ZUJhY2tncm91bmR9ICR7cm90YXRlQmFja2dyb3VuZH0gJHtzY2FsZTNkfWApO1xuICAgICAgICBjaGFuZ2VTdHlsZShpbmZvLCAndHJhbnNmb3JtJywgYCR7dHJhbnNsYXRlSW5mb30gJHtyb3RhdGVJbmZvfSAke3NjYWxlM2R9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFuZ2VTdHlsZShiYWNrZ3JvdW5kLCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSBzY2FsZTNkKDEsIDEsIDEpJyk7XG4gICAgICAgIGNoYW5nZVN0eWxlKGluZm8sICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoMHB4LCAtNTAlLCAke3RafXB4KSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgc2NhbGUzZCgxLCAxLCAxKWApO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2lzUG9ydHJhaXRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gIH0sIFtoYW5kbGVNb3VzZU1vdmVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNsaWRlc1JlZi5jdXJyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJjLXNsaWRlJyk7XG4gIH0sIFtpdGVtc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7IHNldE9mZnNldCgoKSA9PiBnZXRPZmZzZXQpOyB9LCBbXSk7XG5cbiAgY29uc3QgcmVuZGVySXRlbSA9IHVzZUNhbGxiYWNrKChpdGVtLCBpbmRleCkgPT4gKFxuICAgIDxOZXh0TGlua1xuICAgICAga2V5PXsgYCR7aXRlbS50aXRsZX0tJHtpbmRleH1gIH1cbiAgICAgIGNsYXNzTmFtZT17IHN0eWxlcy5pdGVtIH1cbiAgICAgIGV4dGVybmFsXG4gICAgICBuZXdUYWJcbiAgICAgIGhyZWY9eyBpdGVtLnVybCB9XG4gICAgICAvL29uQ2xpY2s9eyBoYW5kbGVJdGVtQ2xpY2sgfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmJhY2tncm91bmQgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuaW1hZ2UgfSBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aXRlbS5pbWFnZX0pYCB9IH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuaW5mbyB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy50aXRsZSB9PnsgaXRlbS50aXRsZSB9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLnN1YnRpdGxlIH0+eyBpdGVtLnN1YnRpdGxlIH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTmV4dExpbms+XG4gICksIFtoYW5kbGVJdGVtQ2xpY2tdKTtcblxuICBjb25zdCByZW5kZXJJbnRybyA9IChpbnRyb0NsYXNzTmFtZSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NOYW1lcyhzdHlsZXMuaW50cm8sIGludHJvQ2xhc3NOYW1lKSB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuY29udGVudCB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5zdWJ0aXRsZSB9PlNsaWRlICYgRGlzY292ZXI8L2Rpdj5cbiAgICAgICAgPFRleHRSZXZlYWwgY2xhc3NOYW1lPXsgc3R5bGVzLnRpdGxlIH0+Tm90b3VyaW9zPC9UZXh0UmV2ZWFsPlxuICAgICAgICA8VGV4dFJldmVhbCBjbGFzc05hbWU9eyBzdHlsZXMudGl0bGUgfSByZXZlYWxEZWxheT17IDAuMTUgfT5Xb3JrPC9UZXh0UmV2ZWFsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgeyBpc1BvcnRyYWl0ICYmIHJlbmRlckludHJvKCkgfVxuICAgICAgPE1veHlDYXJvdXNlbFxuICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgZGlzYWJsZU5hdGl2ZVNjcm9sbFxuICAgICAgICBvZmZzZXQ9eyBvZmZzZXQgfVxuICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lPXsgc3R5bGVzLndyYXBwZXIgfVxuICAgICAgICBjYXJvdXNlbENsYXNzTmFtZT17IHN0eWxlcy5jYXJvdXNlbCB9XG4gICAgICAgIHNsaWRlckNsYXNzTmFtZT17IHN0eWxlcy5zbGlkZXIgfVxuICAgICAgICBiZWZvcmVDaGFuZ2U9eyBoYW5kbGVCZWZvcmVDaGFuZ2UgfVxuICAgICAgICBhZnRlckNoYW5nZT17IG9uSXRlbUNoYW5nZSB9PlxuICAgICAgICB7ICFpc1BvcnRyYWl0ICYmIHJlbmRlckludHJvKHN0eWxlcy5ib3VuY2UpIH1cbiAgICAgICAgeyBpdGVtcy5tYXAocmVuZGVySXRlbSkgfVxuICAgICAgPC9Nb3h5Q2Fyb3VzZWw+XG4gICAgPC8+XG4gICk7XG59O1xuXG5DYXJvdXNlbC5wcm9wVHlwZXMgPSB7XG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgb25JdGVtQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==