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
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/utils */ "./www/shared/utils/index.js");
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
  const resetTransforms = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["changeStyle"])(textRef.current, 'transform', 'none');
    Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["changeStyle"])(logosRef.current, 'transform', 'none');
  }, []);
  const handleMouseMove = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
    const scrollTop = layoutContentRef.current.scrollTop;
    const _boudingClientRectRef = boudingClientRectRef.current,
          minVisible = _boudingClientRectRef.minVisible,
          maxVisible = _boudingClientRectRef.maxVisible;

    if (!checkTouchScreen()) {
      if (scrollTop >= minVisible && scrollTop <= maxVisible) {
        const clientX = event.clientX,
              clientY = event.clientY;
        const _window = window,
              innerWidth = _window.innerWidth,
              innerHeight = _window.innerHeight;
        const tX = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["getRangeValue"])(clientX / innerWidth, -50, 50);
        const tY = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["getRangeValue"])(clientY / innerHeight, -50, 50);
        const rY = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["getRangeValue"])(clientX / innerWidth, -15, 15);
        const rX = Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["getRangeValue"])(clientY / innerHeight, -10, 10);
        const translateText = "translate3d(".concat(tX, "px, ").concat(tY, "px, 0px)");
        const translateLogos = "translate3d(".concat(tX * 1.3, "px, ").concat(tY * 1.3, "px, 0px)");
        const rotateText = "rotateX(".concat(-rX, "deg) rotateY(").concat(rY, "deg) rotateZ(0deg)");
        const rotateLogos = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
        const scale3d = 'scale3d(1, 1, 1)';
        Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["changeStyle"])(textRef.current, 'transform', "".concat(translateText, " ").concat(rotateText, " ").concat(scale3d));
        Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["changeStyle"])(logosRef.current, 'transform', "".concat(translateLogos, " ").concat(rotateLogos, " ").concat(scale3d));
      }
    } else {
      resetTransforms();
    }
  }, [checkTouchScreen, resetTransforms]);
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
    checkTouchScreen() && resetTransforms();
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
  }, [handleMouseMove, handleResize, checkTouchScreen, resetTransforms]);
  return __jsx(_shared_components_bounds__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.bounds,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.background,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "expertise",
    className: _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.expertise,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx("div", {
    ref: containerRef,
    className: _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx("div", {
    ref: textRef,
    className: _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, "Expertise & Proficiency"), __jsx("div", {
    className: _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, "React"), __jsx("div", {
    className: _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, "Next.js"), __jsx("div", {
    className: _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, "Redux"), __jsx("div", {
    className: _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, "Node.js")), __jsx("div", {
    ref: logosRef,
    className: _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.logos,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, __jsx("img", {
    alt: "React Logo",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.itemLogo, _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.react),
    src: _shared_media_images_react_3d_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }), __jsx("img", {
    alt: "Next Logo",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.itemLogo, _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.next),
    src: _shared_media_images_next_3d_png__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }), __jsx("img", {
    alt: "Redux Logo",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.itemLogo, _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.redux),
    src: _shared_media_images_redux_3d_png__WEBPACK_IMPORTED_MODULE_7__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }), __jsx("img", {
    alt: "Node Logo",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.itemLogo, _Expertise_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.node),
    src: _shared_media_images_node_3d_png__WEBPACK_IMPORTED_MODULE_8__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  })))));
};

_s(Expertise, "d9stz49s18CPX+uJ2j1nIuoR3Yw=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3d3L3BhZ2VzL2hvbWUvY29tcG9uZW50cy9leHBlcnRpc2UvRXhwZXJ0aXNlLmpzIl0sIm5hbWVzIjpbIkV4cGVydGlzZSIsInVzZVZpZXdwb3J0IiwiY2hlY2tUb3VjaFNjcmVlbiIsInRleHRSZWYiLCJ1c2VSZWYiLCJsb2dvc1JlZiIsImNvbnRhaW5lclJlZiIsImxheW91dENvbnRlbnRSZWYiLCJib3VkaW5nQ2xpZW50UmVjdFJlZiIsInJlc2V0VHJhbnNmb3JtcyIsInVzZUNhbGxiYWNrIiwiY2hhbmdlU3R5bGUiLCJjdXJyZW50IiwiaGFuZGxlTW91c2VNb3ZlIiwiZXZlbnQiLCJzY3JvbGxUb3AiLCJtaW5WaXNpYmxlIiwibWF4VmlzaWJsZSIsImNsaWVudFgiLCJjbGllbnRZIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwidFgiLCJnZXRSYW5nZVZhbHVlIiwidFkiLCJyWSIsInJYIiwidHJhbnNsYXRlVGV4dCIsInRyYW5zbGF0ZUxvZ29zIiwicm90YXRlVGV4dCIsInJvdGF0ZUxvZ29zIiwic2NhbGUzZCIsImhhbmRsZVJlc2l6ZSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJNYXRoIiwibWF4IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGVzIiwiYm91bmRzIiwiYmFja2dyb3VuZCIsImV4cGVydGlzZSIsImNvbnRhaW5lciIsInRleHQiLCJ0aXRsZSIsIml0ZW0iLCJsb2dvcyIsImNsYXNzTmFtZXMiLCJpdGVtTG9nbyIsInJlYWN0IiwicmVhY3QzZFVybCIsIm5leHQiLCJuZXh0M2RVcmwiLCJyZWR1eCIsInJlZHV4M2RVcmwiLCJub2RlIiwibm9kZTNkVXJsIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7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Q0QsQ0ExR0Q7O0dBQU0vRCxTO1VBQ3lCQyxrRTs7O0tBRHpCRCxTO0FBNEdOQSxTQUFTLENBQUNnRSxTQUFWLEdBQXNCLEVBQXRCO0FBRWVoRSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZTdiOWIyYzY5MTI4MWFhYjBmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEJvdW5kcyBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9ib3VuZHMnO1xuaW1wb3J0IHVzZVZpZXdwb3J0IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9ob29rcy91c2Utdmlld3BvcnQnO1xuaW1wb3J0IHsgY2hhbmdlU3R5bGUsIGdldFJhbmdlVmFsdWUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvdXRpbHMnO1xuXG5pbXBvcnQgcmVhY3QzZFVybCBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvbWVkaWEvaW1hZ2VzL3JlYWN0LTNkLnBuZyc7XG5pbXBvcnQgbmV4dDNkVXJsIGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9tZWRpYS9pbWFnZXMvbmV4dC0zZC5wbmcnO1xuaW1wb3J0IHJlZHV4M2RVcmwgZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL21lZGlhL2ltYWdlcy9yZWR1eC0zZC5wbmcnO1xuaW1wb3J0IG5vZGUzZFVybCBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvbWVkaWEvaW1hZ2VzL25vZGUtM2QucG5nJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0V4cGVydGlzZS5tb2R1bGUuY3NzJztcblxuY29uc3QgRXhwZXJ0aXNlID0gKCkgPT4ge1xuICBjb25zdCB7IGNoZWNrVG91Y2hTY3JlZW4gfSA9IHVzZVZpZXdwb3J0KCk7XG4gIGNvbnN0IHRleHRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgbG9nb3NSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGxheW91dENvbnRlbnRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgYm91ZGluZ0NsaWVudFJlY3RSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCByZXNldFRyYW5zZm9ybXMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY2hhbmdlU3R5bGUodGV4dFJlZi5jdXJyZW50LCAndHJhbnNmb3JtJywgJ25vbmUnKTtcbiAgICBjaGFuZ2VTdHlsZShsb2dvc1JlZi5jdXJyZW50LCAndHJhbnNmb3JtJywgJ25vbmUnKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgc2Nyb2xsVG9wIH0gPSBsYXlvdXRDb250ZW50UmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgeyBtaW5WaXNpYmxlLCBtYXhWaXNpYmxlIH0gPSBib3VkaW5nQ2xpZW50UmVjdFJlZi5jdXJyZW50O1xuXG4gICAgaWYgKCFjaGVja1RvdWNoU2NyZWVuKCkpIHtcbiAgICAgIGlmIChzY3JvbGxUb3AgPj0gbWluVmlzaWJsZSAmJiBzY3JvbGxUb3AgPD0gbWF4VmlzaWJsZSkge1xuICAgICAgICBjb25zdCB7IGNsaWVudFgsIGNsaWVudFkgfSA9IGV2ZW50O1xuICAgICAgICBjb25zdCB7IGlubmVyV2lkdGgsIGlubmVySGVpZ2h0IH0gPSB3aW5kb3c7XG5cbiAgICAgICAgY29uc3QgdFggPSBnZXRSYW5nZVZhbHVlKChjbGllbnRYIC8gaW5uZXJXaWR0aCksIC01MCwgNTApO1xuICAgICAgICBjb25zdCB0WSA9IGdldFJhbmdlVmFsdWUoKGNsaWVudFkgLyBpbm5lckhlaWdodCksIC01MCwgNTApO1xuXG4gICAgICAgIGNvbnN0IHJZID0gZ2V0UmFuZ2VWYWx1ZSgoY2xpZW50WCAvIGlubmVyV2lkdGgpLCAtMTUsIDE1KTtcbiAgICAgICAgY29uc3QgclggPSBnZXRSYW5nZVZhbHVlKChjbGllbnRZIC8gaW5uZXJIZWlnaHQpLCAtMTAsIDEwKTtcblxuICAgICAgICBjb25zdCB0cmFuc2xhdGVUZXh0ID0gYHRyYW5zbGF0ZTNkKCR7dFh9cHgsICR7dFl9cHgsIDBweClgO1xuICAgICAgICBjb25zdCB0cmFuc2xhdGVMb2dvcyA9IGB0cmFuc2xhdGUzZCgke3RYICogMS4zfXB4LCAke3RZICogMS4zfXB4LCAwcHgpYDtcblxuICAgICAgICBjb25zdCByb3RhdGVUZXh0ID0gYHJvdGF0ZVgoJHstclh9ZGVnKSByb3RhdGVZKCR7cll9ZGVnKSByb3RhdGVaKDBkZWcpYDtcbiAgICAgICAgY29uc3Qgcm90YXRlTG9nb3MgPSAncm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZyknO1xuXG4gICAgICAgIGNvbnN0IHNjYWxlM2QgPSAnc2NhbGUzZCgxLCAxLCAxKSc7XG5cbiAgICAgICAgY2hhbmdlU3R5bGUodGV4dFJlZi5jdXJyZW50LCAndHJhbnNmb3JtJywgYCR7dHJhbnNsYXRlVGV4dH0gJHtyb3RhdGVUZXh0fSAke3NjYWxlM2R9YCk7XG4gICAgICAgIGNoYW5nZVN0eWxlKGxvZ29zUmVmLmN1cnJlbnQsICd0cmFuc2Zvcm0nLCBgJHt0cmFuc2xhdGVMb2dvc30gJHtyb3RhdGVMb2dvc30gJHtzY2FsZTNkfWApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXNldFRyYW5zZm9ybXMoKTtcbiAgICB9XG4gIH0sIFtjaGVja1RvdWNoU2NyZWVuLCByZXNldFRyYW5zZm9ybXNdKTtcblxuICBjb25zdCBoYW5kbGVSZXNpemUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgeyBpbm5lckhlaWdodCB9ID0gd2luZG93O1xuICAgIGNvbnN0IHsgdG9wLCBib3R0b20gfSA9IGNvbnRhaW5lclJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgbGF5b3V0Q29udGVudFJlZi5jdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheW91dENvbnRlbnQnKTtcblxuICAgIGNvbnN0IHsgc2Nyb2xsVG9wIH0gPSBsYXlvdXRDb250ZW50UmVmLmN1cnJlbnQ7XG5cbiAgICBib3VkaW5nQ2xpZW50UmVjdFJlZi5jdXJyZW50ID0ge1xuICAgICAgbWluVmlzaWJsZTogTWF0aC5tYXgoKHRvcCArIHNjcm9sbFRvcCkgLSBpbm5lckhlaWdodCwgMCksXG4gICAgICBtYXhWaXNpYmxlOiBib3R0b20gKyBzY3JvbGxUb3AsXG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hlY2tUb3VjaFNjcmVlbigpICYmIHJlc2V0VHJhbnNmb3JtcygpO1xuXG4gICAgaGFuZGxlUmVzaXplKCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICB9O1xuICB9LCBbaGFuZGxlTW91c2VNb3ZlLCBoYW5kbGVSZXNpemUsIGNoZWNrVG91Y2hTY3JlZW4sIHJlc2V0VHJhbnNmb3Jtc10pO1xuXG4gIHJldHVybiAoXG4gICAgPEJvdW5kcyBjbGFzc05hbWU9eyBzdHlsZXMuYm91bmRzIH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5iYWNrZ3JvdW5kIH0gLz5cbiAgICAgIDxkaXYgaWQ9XCJleHBlcnRpc2VcIiBjbGFzc05hbWU9eyBzdHlsZXMuZXhwZXJ0aXNlIH0+XG4gICAgICAgIDxkaXYgcmVmPXsgY29udGFpbmVyUmVmIH0gY2xhc3NOYW1lPXsgc3R5bGVzLmNvbnRhaW5lciB9PlxuICAgICAgICAgIDxkaXYgcmVmPXsgdGV4dFJlZiB9IGNsYXNzTmFtZT17IHN0eWxlcy50ZXh0IH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy50aXRsZSB9PkV4cGVydGlzZSAmIFByb2ZpY2llbmN5PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5pdGVtIH0+UmVhY3Q8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLml0ZW0gfT5OZXh0LmpzPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5pdGVtIH0+UmVkdXg8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLml0ZW0gfT5Ob2RlLmpzPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiByZWY9eyBsb2dvc1JlZiB9IGNsYXNzTmFtZT17IHN0eWxlcy5sb2dvcyB9PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBhbHQ9XCJSZWFjdCBMb2dvXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgY2xhc3NOYW1lcyhzdHlsZXMuaXRlbUxvZ28sIHN0eWxlcy5yZWFjdCkgfVxuICAgICAgICAgICAgICBzcmM9eyByZWFjdDNkVXJsIH0gLz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgYWx0PVwiTmV4dCBMb2dvXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgY2xhc3NOYW1lcyhzdHlsZXMuaXRlbUxvZ28sIHN0eWxlcy5uZXh0KSB9XG4gICAgICAgICAgICAgIHNyYz17IG5leHQzZFVybCB9IC8+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGFsdD1cIlJlZHV4IExvZ29cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9eyBjbGFzc05hbWVzKHN0eWxlcy5pdGVtTG9nbywgc3R5bGVzLnJlZHV4KSB9XG4gICAgICAgICAgICAgIHNyYz17IHJlZHV4M2RVcmwgfSAvPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBhbHQ9XCJOb2RlIExvZ29cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9eyBjbGFzc05hbWVzKHN0eWxlcy5pdGVtTG9nbywgc3R5bGVzLm5vZGUpIH1cbiAgICAgICAgICAgICAgc3JjPXsgbm9kZTNkVXJsIH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0JvdW5kcz5cbiAgKTtcbn07XG5cbkV4cGVydGlzZS5wcm9wVHlwZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwZXJ0aXNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==