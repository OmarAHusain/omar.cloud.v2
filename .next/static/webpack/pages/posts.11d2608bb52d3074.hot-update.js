"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./components/layouts/article.js":
/*!***************************************!*\
  !*** ./components/layouts/article.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\nvar variants = {\n    hidden: {\n        opacity: 0,\n        x: 0,\n        y: 20\n    },\n    enter: {\n        opacity: 1,\n        x: 0,\n        y: 0\n    },\n    exit: {\n        opacity: 0,\n        x: -0,\n        y: 20\n    }\n};\nvar Layout = function(param) {\n    var children = param.children, title = param.title;\n    var t = \"\".concat(title, \" - Omar |\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.article, {\n        initial: \"hidden\",\n        animate: \"enter\",\n        exit: \"exit\",\n        variants: variants,\n        transition: {\n            duration: 0.4,\n            type: \"easeInOut\"\n        },\n        style: {\n            position: \"relative\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: t\n                        }, void 0, false, {\n                            fileName: \"/Users/Omar/Documents/GitHub/omarcloud-next-chakra/components/layouts/article.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"twitter:title\",\n                            content: t\n                        }, void 0, false, {\n                            fileName: \"/Users/Omar/Documents/GitHub/omarcloud-next-chakra/components/layouts/article.js\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            property: \"og:title\",\n                            content: t\n                        }, void 0, false, {\n                            fileName: \"/Users/Omar/Documents/GitHub/omarcloud-next-chakra/components/layouts/article.js\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Omar/Documents/GitHub/omarcloud-next-chakra/components/layouts/article.js\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, _this),\n                children\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/Omar/Documents/GitHub/omarcloud-next-chakra/components/layouts/article.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvYXJ0aWNsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBc0M7QUFDVjtBQUc1QixJQUFNRSxRQUFRLEdBQUc7SUFDZkMsTUFBTSxFQUFFO1FBQUVDLE9BQU8sRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxFQUFFO0tBQUU7SUFDbkNDLEtBQUssRUFBRTtRQUFFSCxPQUFPLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsQ0FBQztLQUFFO0lBQ2pDRSxJQUFJLEVBQUU7UUFBRUosT0FBTyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUFFQyxDQUFDLEVBQUUsRUFBRTtLQUFFO0NBQ25DO0FBRUQsSUFBTUcsTUFBTSxHQUFHLGdCQUF5QjtRQUF0QkMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLEtBQUssU0FBTEEsS0FBSztJQUMvQixJQUFNQyxDQUFDLEdBQUcsRUFBQyxDQUFRLE1BQVMsQ0FBZkQsS0FBSyxFQUFDLFdBQVMsQ0FBQztJQUM3QixxQkFDRSw4REFBQ1gseURBQWM7UUFDYmMsT0FBTyxFQUFDLFFBQVE7UUFDaEJDLE9BQU8sRUFBQyxPQUFPO1FBQ2ZQLElBQUksRUFBQyxNQUFNO1FBQ1hOLFFBQVEsRUFBRUEsUUFBUTtRQUNsQmMsVUFBVSxFQUFFO1lBQUVDLFFBQVEsRUFBRSxHQUFHO1lBQUVDLElBQUksRUFBRSxXQUFXO1NBQUU7UUFDaERDLEtBQUssRUFBRTtZQUFFQyxRQUFRLEVBQUUsVUFBVTtTQUFFO2tCQUUvQjs7Z0JBQ0dULEtBQUssa0JBQ0osOERBQUNWLGtEQUFJOztzQ0FDSCw4REFBQ1UsT0FBSztzQ0FBRUMsQ0FBQzs7Ozs7aUNBQVM7c0NBQ2xCLDhEQUFDUyxNQUFJOzRCQUFDQyxJQUFJLEVBQUMsZUFBZTs0QkFBQ0MsT0FBTyxFQUFFWCxDQUFDOzs7OztpQ0FBSTtzQ0FDekMsOERBQUNTLE1BQUk7NEJBQUNHLFFBQVEsRUFBQyxVQUFVOzRCQUFDRCxPQUFPLEVBQUVYLENBQUM7Ozs7O2lDQUFJOzs7Ozs7eUJBQ25DO2dCQUVSRixRQUFROzt3QkFHUjs7Ozs7YUFDWSxDQUNsQjtDQUNGO0FBekJLRCxLQUFBQSxNQUFNO0FBMkJaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0cy9hcnRpY2xlLmpzP2VmNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuXG5jb25zdCB2YXJpYW50cyA9IHtcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHg6IDAsIHk6IDIwIH0sXG4gIGVudGVyOiB7IG9wYWNpdHk6IDEsIHg6IDAsIHk6IDAgfSxcbiAgZXhpdDogeyBvcGFjaXR5OiAwLCB4OiAtMCwgeTogMjAgfVxufVxuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUgfSkgPT4ge1xuICBjb25zdCB0ID0gYCR7dGl0bGV9IC0gT21hciB8YFxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uYXJ0aWNsZVxuICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICBhbmltYXRlPVwiZW50ZXJcIlxuICAgICAgZXhpdD1cImV4aXRcIlxuICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC40LCB0eXBlOiAnZWFzZUluT3V0JyB9fVxuICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX1cbiAgICA+XG4gICAgICA8PlxuICAgICAgICB7dGl0bGUgJiYgKFxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPnt0fTwvdGl0bGU+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e3R9IC8+XG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17dH0gLz5cbiAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICl9XG4gICAgICAgIHtjaGlsZHJlbn1cblxuICAgICAgICBcbiAgICAgIDwvPlxuICAgIDwvbW90aW9uLmFydGljbGU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il0sIm5hbWVzIjpbIm1vdGlvbiIsIkhlYWQiLCJ2YXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJ4IiwieSIsImVudGVyIiwiZXhpdCIsIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJ0IiwiYXJ0aWNsZSIsImluaXRpYWwiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwidHlwZSIsInN0eWxlIiwicG9zaXRpb24iLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJwcm9wZXJ0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layouts/article.js\n");

/***/ })

});