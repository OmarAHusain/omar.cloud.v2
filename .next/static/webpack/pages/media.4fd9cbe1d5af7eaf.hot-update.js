"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/media",{

/***/ "./components/layouts/article.js":
/*!***************************************!*\
  !*** ./components/layouts/article.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\nvar variants = {\n    hidden: {\n        opacity: 0,\n        x: 0,\n        y: 20\n    },\n    enter: {\n        opacity: 1,\n        x: 0,\n        y: 0\n    },\n    exit: {\n        opacity: 0,\n        x: 0,\n        y: -20\n    }\n};\nvar Layout = function(param) {\n    var children = param.children, title = param.title;\n    var t = \"\".concat(title, \" - Omar | Cloud\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.article, {\n        initial: \"hidden\",\n        animate: \"enter\",\n        exit: \"exit\",\n        variants: variants,\n        transition: {\n            duration: 0.,\n            type: \"easeInOut\"\n        },\n        style: {\n            position: \"relative\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: t\n                        }, void 0, false, {\n                            fileName: \"/Users/Omar/Documents/GitHub/omarcloud-next-chakra/components/layouts/article.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"twitter:title\",\n                            content: t\n                        }, void 0, false, {\n                            fileName: \"/Users/Omar/Documents/GitHub/omarcloud-next-chakra/components/layouts/article.js\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            property: \"og:title\",\n                            content: t\n                        }, void 0, false, {\n                            fileName: \"/Users/Omar/Documents/GitHub/omarcloud-next-chakra/components/layouts/article.js\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Omar/Documents/GitHub/omarcloud-next-chakra/components/layouts/article.js\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, _this),\n                children\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/Omar/Documents/GitHub/omarcloud-next-chakra/components/layouts/article.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvYXJ0aWNsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBc0M7QUFDVjtBQUc1QixJQUFNRSxRQUFRLEdBQUc7SUFDZkMsTUFBTSxFQUFFO1FBQUVDLE9BQU8sRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxFQUFFO0tBQUU7SUFDbkNDLEtBQUssRUFBRTtRQUFFSCxPQUFPLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsQ0FBQztLQUFFO0lBQ2pDRSxJQUFJLEVBQUU7UUFBRUosT0FBTyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtLQUFFO0NBQ25DO0FBRUQsSUFBTUcsTUFBTSxHQUFHLGdCQUF5QjtRQUF0QkMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLEtBQUssU0FBTEEsS0FBSztJQUMvQixJQUFNQyxDQUFDLEdBQUcsRUFBQyxDQUFRLE1BQWUsQ0FBckJELEtBQUssRUFBQyxpQkFBZSxDQUFDO0lBQ25DLHFCQUNFLDhEQUFDWCx5REFBYztRQUNiYyxPQUFPLEVBQUMsUUFBUTtRQUNoQkMsT0FBTyxFQUFDLE9BQU87UUFDZlAsSUFBSSxFQUFDLE1BQU07UUFDWE4sUUFBUSxFQUFFQSxRQUFRO1FBQ2xCYyxVQUFVLEVBQUU7WUFBRUMsUUFBUSxFQUFFLEVBQUU7WUFBRUMsSUFBSSxFQUFFLFdBQVc7U0FBRTtRQUMvQ0MsS0FBSyxFQUFFO1lBQUVDLFFBQVEsRUFBRSxVQUFVO1NBQUU7a0JBRS9COztnQkFDR1QsS0FBSyxrQkFDSiw4REFBQ1Ysa0RBQUk7O3NDQUNILDhEQUFDVSxPQUFLO3NDQUFFQyxDQUFDOzs7OztpQ0FBUztzQ0FDbEIsOERBQUNTLE1BQUk7NEJBQUNDLElBQUksRUFBQyxlQUFlOzRCQUFDQyxPQUFPLEVBQUVYLENBQUM7Ozs7O2lDQUFJO3NDQUN6Qyw4REFBQ1MsTUFBSTs0QkFBQ0csUUFBUSxFQUFDLFVBQVU7NEJBQUNELE9BQU8sRUFBRVgsQ0FBQzs7Ozs7aUNBQUk7Ozs7Ozt5QkFDbkM7Z0JBRVJGLFFBQVE7O3dCQUdSOzs7OzthQUNZLENBQ2xCO0NBQ0Y7QUF6QktELEtBQUFBLE1BQU07QUEyQlosK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL2FydGljbGUuanM/ZWY3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5cbmNvbnN0IHZhcmlhbnRzID0ge1xuICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeDogMCwgeTogMjAgfSxcbiAgZW50ZXI6IHsgb3BhY2l0eTogMSwgeDogMCwgeTogMCB9LFxuICBleGl0OiB7IG9wYWNpdHk6IDAsIHg6IDAsIHk6IC0yMCB9XG59XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSB9KSA9PiB7XG4gIGNvbnN0IHQgPSBgJHt0aXRsZX0gLSBPbWFyIHwgQ2xvdWRgXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5hcnRpY2xlXG4gICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgIGFuaW1hdGU9XCJlbnRlclwiXG4gICAgICBleGl0PVwiZXhpdFwiXG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLiwgdHlwZTogJ2Vhc2VJbk91dCcgfX1cbiAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19XG4gICAgPlxuICAgICAgPD5cbiAgICAgICAge3RpdGxlICYmIChcbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT57dH08L3RpdGxlPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXt0fSAvPlxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3R9IC8+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG5cbiAgICAgICAgXG4gICAgICA8Lz5cbiAgICA8L21vdGlvbi5hcnRpY2xlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dCJdLCJuYW1lcyI6WyJtb3Rpb24iLCJIZWFkIiwidmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5IiwieCIsInkiLCJlbnRlciIsImV4aXQiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInRpdGxlIiwidCIsImFydGljbGUiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInR5cGUiLCJzdHlsZSIsInBvc2l0aW9uIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwicHJvcGVydHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layouts/article.js\n");

/***/ })

});