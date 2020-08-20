webpackHotUpdate_N_E("pages/index",{

/***/ "./www/pages/home/components/expertise/Expertise.js":
/*!**********************************************************!*\
  !*** ./www/pages/home/components/expertise/Expertise.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_components_bounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/bounds */ "./www/shared/components/bounds/index.js");
/* harmony import */ var _shared_hooks_use_viewport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/hooks/use-viewport */ "./www/shared/hooks/use-viewport/index.js");
/* harmony import */ var _shared_utils_get_range__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/utils/get-range */ "./www/shared/utils/get-range.js");
/* harmony import */ var _shared_media_images_react_3d_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/media/images/react-3d.png */ "./www/shared/media/images/react-3d.png");
/* harmony import */ var _shared_media_images_next_3d_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/media/images/next-3d.png */ "./www/shared/media/images/next-3d.png");
/* harmony import */ var _shared_media_images_redux_3d_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/media/images/redux-3d.png */ "./www/shared/media/images/redux-3d.png");
/* harmony import */ var _shared_media_images_node_3d_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/media/images/node-3d.png */ "./www/shared/media/images/node-3d.png");
/* harmony import */ var _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Expertise.module.css */ "./www/pages/home/components/expertise/Expertise.module.css");
/* harmony import */ var _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Expertise_module_css__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\paulo\\Desktop\\Work\\Projects\\Personal\\Web\\paulobmarcos\\www\\pages\\home\\components\\expertise\\Expertise.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Expertise = () => {
  _s();

  const _useViewport = Object(_shared_hooks_use_viewport__WEBPACK_IMPORTED_MODULE_3__["default"])(),
        checkTouchScreen = _useViewport.checkTouchScreen;

  const textRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const logosRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const containerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const layoutContentRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const boudingClientRectRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const handleMouseMove = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
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
      const tX = Object(_shared_utils_get_range__WEBPACK_IMPORTED_MODULE_4__["getRangeValue"])(clientX / innerWidth, -50, 50);
      const tY = Object(_shared_utils_get_range__WEBPACK_IMPORTED_MODULE_4__["getRangeValue"])(clientY / innerHeight, -50, 50);
      const rY = Object(_shared_utils_get_range__WEBPACK_IMPORTED_MODULE_4__["getRangeValue"])(clientX / innerWidth, -15, 15);
      const rX = Object(_shared_utils_get_range__WEBPACK_IMPORTED_MODULE_4__["getRangeValue"])(clientY / innerHeight, -10, 10);
      const translateText = "translate3d(".concat(tX, "px, ").concat(tY, "px, 0px)");
      const translateLogos = "translate3d(".concat(tX * 1.3, "px, ").concat(tY * 1.3, "px, 0px)");
      const rotateText = "rotateX(".concat(-rX, "deg) rotateY(").concat(rY, "deg) rotateZ(0deg)");
      const rotateLogos = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
      const scale3d = 'scale3d(1, 1, 1)';
      textRef.current.style.transform = "".concat(translateText, " ").concat(rotateText, " ").concat(scale3d);
      logosRef.current.style.transform = "".concat(translateLogos, " ").concat(rotateLogos, " ").concat(scale3d);
    }
  }, []);
  const handleResize = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const _window2 = window,
          innerHeight = _window2.innerHeight;

    const _containerRef$current = containerRef.current.getBoundingClientRect(),
          top = _containerRef$current.top,
          bottom = _containerRef$current.bottom;

    layoutContentRef.current = document.getElementById('layoutContent');
    const scrollTop = layoutContentRef.current.scrollTop;
    boudingClientRectRef.current = {
      minVisible: Math.max(top + scrollTop - innerHeight, 0),
      maxVisible: bottom + scrollTop
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    handleResize();
    window.addEventListener('resize', handleResize, {
      passive: true
    });
    window.addEventListener('mousemove', handleMouseMove, {
      passive: true
    });
    return () => {
      window.addEventListener('resize', handleResize, {
        passive: true
      });
      window.removeEventListener('mousemove', handleMouseMove, {
        passive: true
      });
    };
  }, [handleMouseMove, handleResize]);
  return __jsx(_shared_components_bounds__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.bounds,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.background,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "expertise",
    className: _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.expertise,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx("div", {
    ref: containerRef,
    className: _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx("div", {
    ref: textRef,
    className: _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, "Expertise & Proficiency"), __jsx("div", {
    className: _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, "React"), __jsx("div", {
    className: _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "Next.js"), __jsx("div", {
    className: _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, "Redux"), __jsx("div", {
    className: _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, "Node.js")), __jsx("div", {
    ref: logosRef,
    className: _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.logos,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx("img", {
    alt: "React Logo",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.itemLogo, _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.react),
    src: _shared_media_images_react_3d_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }), __jsx("img", {
    alt: "Next Logo",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.itemLogo, _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.next),
    src: _shared_media_images_next_3d_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }), __jsx("img", {
    alt: "Redux Logo",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.itemLogo, _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.redux),
    src: _shared_media_images_redux_3d_png__WEBPACK_IMPORTED_MODULE_7__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }), __jsx("img", {
    alt: "Node Logo",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.itemLogo, _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.node),
    src: _shared_media_images_node_3d_png__WEBPACK_IMPORTED_MODULE_8__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  })))));
};

_s(Expertise, "Stdm5stEU2k5PyIRs8JMWcNx0YM=", false, function () {
  return [_shared_hooks_use_viewport__WEBPACK_IMPORTED_MODULE_3__["default"]];
});

_c = Expertise;
Expertise.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Expertise);

var _c;

$RefreshReg$(_c, "Expertise");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3BhZ2VzL2hvbWUvY29tcG9uZW50cy9leHBlcnRpc2UvRXhwZXJ0aXNlLmpzIl0sIm5hbWVzIjpbIkV4cGVydGlzZSIsInVzZVZpZXdwb3J0IiwiY2hlY2tUb3VjaFNjcmVlbiIsInRleHRSZWYiLCJ1c2VSZWYiLCJsb2dvc1JlZiIsImNvbnRhaW5lclJlZiIsImxheW91dENvbnRlbnRSZWYiLCJib3VkaW5nQ2xpZW50UmVjdFJlZiIsImhhbmRsZU1vdXNlTW92ZSIsInVzZUNhbGxiYWNrIiwiZXZlbnQiLCJzY3JvbGxUb3AiLCJjdXJyZW50IiwibWluVmlzaWJsZSIsIm1heFZpc2libGUiLCJjbGllbnRYIiwiY2xpZW50WSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInRYIiwiZ2V0UmFuZ2VWYWx1ZSIsInRZIiwiclkiLCJyWCIsInRyYW5zbGF0ZVRleHQiLCJ0cmFuc2xhdGVMb2dvcyIsInJvdGF0ZVRleHQiLCJyb3RhdGVMb2dvcyIsInNjYWxlM2QiLCJzdHlsZSIsInRyYW5zZm9ybSIsImhhbmRsZVJlc2l6ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJNYXRoIiwibWF4IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGVzIiwiYm91bmRzIiwiYmFja2dyb3VuZCIsImV4cGVydGlzZSIsImNvbnRhaW5lciIsInRleHQiLCJ0aXRsZSIsIml0ZW0iLCJsb2dvcyIsImNsYXNzTmFtZXMiLCJpdGVtTG9nbyIsInJlYWN0IiwicmVhY3QzZFVybCIsIm5leHQiLCJuZXh0M2RVcmwiLCJyZWR1eCIsInJlZHV4M2RVcmwiLCJub2RlIiwibm9kZTNkVXJsIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFBQTtBQUFBLElBREYsRUFLRTtBQUNFLE9BQUcsRUFBQyxXQUROO0FBRUUsYUFBUyxFQUFHSCxpREFBVSxDQUFDVCw0REFBTSxDQUFDVSxRQUFSLEVBQWtCViw0REFBTSxDQUFDYSxJQUF6QixDQUZ4QjtBQUdFLE9BQUcsRUFBR0Msd0VBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBU0U7QUFDRSxPQUFHLEVBQUMsWUFETjtBQUVFLGFBQVMsRUFBR0wsaURBQVUsQ0FBQ1QsNERBQU0sQ0FBQ1UsUUFBUixFQUFrQlYsNERBQU0sQ0FBQ2UsS0FBekIsQ0FGeEI7QUFHRSxPQUFHLEVBQUdDLHlFQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQWFFO0FBQ0UsT0FBRyxFQUFDLFdBRE47QUFFRSxhQUFTLEVBQUdQLGlEQUFVLENBQUNULDREQUFNLENBQUNVLFFBQVIsRUFBa0JWLDREQUFNLENBQUNpQixJQUF6QixDQUZ4QjtBQUdFLE9BQUcsRUFBR0Msd0VBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLENBUkYsQ0FERixDQUZGLENBREY7QUFrQ0QsQ0EvRkQ7O0dBQU0vRCxTO1VBQ3lCQyxrRTs7O0tBRHpCRCxTO0FBaUdOQSxTQUFTLENBQUNnRSxTQUFWLEdBQXNCLEVBQXRCO0FBRWVoRSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iZGFhNDYxZWJjNzRjMDU3ZTI3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEJvdW5kcyBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9ib3VuZHMnO1xuaW1wb3J0IHVzZVZpZXdwb3J0IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9ob29rcy91c2Utdmlld3BvcnQnO1xuaW1wb3J0IHsgZ2V0UmFuZ2VWYWx1ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC91dGlscy9nZXQtcmFuZ2UnO1xuXG5pbXBvcnQgcmVhY3QzZFVybCBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvbWVkaWEvaW1hZ2VzL3JlYWN0LTNkLnBuZyc7XG5pbXBvcnQgbmV4dDNkVXJsIGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9tZWRpYS9pbWFnZXMvbmV4dC0zZC5wbmcnO1xuaW1wb3J0IHJlZHV4M2RVcmwgZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL21lZGlhL2ltYWdlcy9yZWR1eC0zZC5wbmcnO1xuaW1wb3J0IG5vZGUzZFVybCBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvbWVkaWEvaW1hZ2VzL25vZGUtM2QucG5nJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0V4cGVydGlzZS5tb2R1bGUuY3NzJztcblxuY29uc3QgRXhwZXJ0aXNlID0gKCkgPT4ge1xuICBjb25zdCB7IGNoZWNrVG91Y2hTY3JlZW4gfSA9IHVzZVZpZXdwb3J0KCk7XG4gIGNvbnN0IHRleHRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgbG9nb3NSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGxheW91dENvbnRlbnRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgYm91ZGluZ0NsaWVudFJlY3RSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IHNjcm9sbFRvcCB9ID0gbGF5b3V0Q29udGVudFJlZi5jdXJyZW50O1xuICAgIGNvbnN0IHsgbWluVmlzaWJsZSwgbWF4VmlzaWJsZSB9ID0gYm91ZGluZ0NsaWVudFJlY3RSZWYuY3VycmVudDtcblxuICAgIGlmIChzY3JvbGxUb3AgPj0gbWluVmlzaWJsZSAmJiBzY3JvbGxUb3AgPD0gbWF4VmlzaWJsZSkge1xuICAgICAgY29uc3QgeyBjbGllbnRYLCBjbGllbnRZIH0gPSBldmVudDtcbiAgICAgIGNvbnN0IHsgaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQgfSA9IHdpbmRvdztcblxuICAgICAgY29uc3QgdFggPSBnZXRSYW5nZVZhbHVlKChjbGllbnRYIC8gaW5uZXJXaWR0aCksIC01MCwgNTApO1xuICAgICAgY29uc3QgdFkgPSBnZXRSYW5nZVZhbHVlKChjbGllbnRZIC8gaW5uZXJIZWlnaHQpLCAtNTAsIDUwKTtcblxuICAgICAgY29uc3QgclkgPSBnZXRSYW5nZVZhbHVlKChjbGllbnRYIC8gaW5uZXJXaWR0aCksIC0xNSwgMTUpO1xuICAgICAgY29uc3QgclggPSBnZXRSYW5nZVZhbHVlKChjbGllbnRZIC8gaW5uZXJIZWlnaHQpLCAtMTAsIDEwKTtcblxuICAgICAgY29uc3QgdHJhbnNsYXRlVGV4dCA9IGB0cmFuc2xhdGUzZCgke3RYfXB4LCAke3RZfXB4LCAwcHgpYDtcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZUxvZ29zID0gYHRyYW5zbGF0ZTNkKCR7dFggKiAxLjN9cHgsICR7dFkgKiAxLjN9cHgsIDBweClgO1xuXG4gICAgICBjb25zdCByb3RhdGVUZXh0ID0gYHJvdGF0ZVgoJHstclh9ZGVnKSByb3RhdGVZKCR7cll9ZGVnKSByb3RhdGVaKDBkZWcpYDtcbiAgICAgIGNvbnN0IHJvdGF0ZUxvZ29zID0gJ3JvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpJztcblxuICAgICAgY29uc3Qgc2NhbGUzZCA9ICdzY2FsZTNkKDEsIDEsIDEpJztcblxuICAgICAgdGV4dFJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGAke3RyYW5zbGF0ZVRleHR9ICR7cm90YXRlVGV4dH0gJHtzY2FsZTNkfWA7XG4gICAgICBsb2dvc1JlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGAke3RyYW5zbGF0ZUxvZ29zfSAke3JvdGF0ZUxvZ29zfSAke3NjYWxlM2R9YDtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVSZXNpemUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgeyBpbm5lckhlaWdodCB9ID0gd2luZG93O1xuICAgIGNvbnN0IHsgdG9wLCBib3R0b20gfSA9IGNvbnRhaW5lclJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgbGF5b3V0Q29udGVudFJlZi5jdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheW91dENvbnRlbnQnKTtcblxuICAgIGNvbnN0IHsgc2Nyb2xsVG9wIH0gPSBsYXlvdXRDb250ZW50UmVmLmN1cnJlbnQ7XG5cbiAgICBib3VkaW5nQ2xpZW50UmVjdFJlZi5jdXJyZW50ID0ge1xuICAgICAgbWluVmlzaWJsZTogTWF0aC5tYXgoKHRvcCArIHNjcm9sbFRvcCkgLSBpbm5lckhlaWdodCwgMCksXG4gICAgICBtYXhWaXNpYmxlOiBib3R0b20gKyBzY3JvbGxUb3AsXG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGFuZGxlUmVzaXplKCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICB9O1xuICB9LCBbaGFuZGxlTW91c2VNb3ZlLCBoYW5kbGVSZXNpemVdKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3VuZHMgY2xhc3NOYW1lPXsgc3R5bGVzLmJvdW5kcyB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuYmFja2dyb3VuZCB9IC8+XG4gICAgICA8ZGl2IGlkPVwiZXhwZXJ0aXNlXCIgY2xhc3NOYW1lPXsgc3R5bGVzLmV4cGVydGlzZSB9PlxuICAgICAgICA8ZGl2IHJlZj17IGNvbnRhaW5lclJlZiB9IGNsYXNzTmFtZT17IHN0eWxlcy5jb250YWluZXIgfT5cbiAgICAgICAgICA8ZGl2IHJlZj17IHRleHRSZWYgfSBjbGFzc05hbWU9eyBzdHlsZXMudGV4dCB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMudGl0bGUgfT5FeHBlcnRpc2UgJiBQcm9maWNpZW5jeTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuaXRlbSB9PlJlYWN0PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5pdGVtIH0+TmV4dC5qczwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXMuaXRlbSB9PlJlZHV4PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5pdGVtIH0+Tm9kZS5qczwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgcmVmPXsgbG9nb3NSZWYgfSBjbGFzc05hbWU9eyBzdHlsZXMubG9nb3MgfT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgYWx0PVwiUmVhY3QgTG9nb1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17IGNsYXNzTmFtZXMoc3R5bGVzLml0ZW1Mb2dvLCBzdHlsZXMucmVhY3QpIH1cbiAgICAgICAgICAgICAgc3JjPXsgcmVhY3QzZFVybCB9IC8+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGFsdD1cIk5leHQgTG9nb1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17IGNsYXNzTmFtZXMoc3R5bGVzLml0ZW1Mb2dvLCBzdHlsZXMubmV4dCkgfVxuICAgICAgICAgICAgICBzcmM9eyBuZXh0M2RVcmwgfSAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBhbHQ9XCJSZWR1eCBMb2dvXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgY2xhc3NOYW1lcyhzdHlsZXMuaXRlbUxvZ28sIHN0eWxlcy5yZWR1eCkgfVxuICAgICAgICAgICAgICBzcmM9eyByZWR1eDNkVXJsIH0gLz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgYWx0PVwiTm9kZSBMb2dvXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgY2xhc3NOYW1lcyhzdHlsZXMuaXRlbUxvZ28sIHN0eWxlcy5ub2RlKSB9XG4gICAgICAgICAgICAgIHNyYz17IG5vZGUzZFVybCB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9Cb3VuZHM+XG4gICk7XG59O1xuXG5FeHBlcnRpc2UucHJvcFR5cGVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IEV4cGVydGlzZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=