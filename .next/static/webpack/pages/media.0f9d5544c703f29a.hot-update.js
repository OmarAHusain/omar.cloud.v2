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

/***/ "./components/socials.js":
/*!*******************************!*\
  !*** ./components/socials.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Socials = function(param) {\n    var href = param.href, name = param.name, logo = param.logo;\n    _s();\n    var outline = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"gray200\", \"whiteAlpha.800\");\n    var filler = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"whiteAlpha.800\", \"gray200\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        flexShrink: 0,\n        mt: {\n            base: 4,\n            md: 0\n        },\n        ml: {\n            md: 6\n        },\n        textAlign: \"center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {\n            href: href,\n            target: \"_blank\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                variant: \"ghost\",\n                colorScheme: \"blue\",\n                leftIcon: logo,\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/Omar/Documents/GitHub/omarcloud-next-chakra/components/socials.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/Omar/Documents/GitHub/omarcloud-next-chakra/components/socials.js\",\n            lineNumber: 22,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/Omar/Documents/GitHub/omarcloud-next-chakra/components/socials.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, _this);\n};\n_s(Socials, \"s0OYOi4PhqDWZZpQ9XOl/1ikb9g=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue\n    ];\n});\n_c = Socials;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Socials);\n{}var _c;\n$RefreshReg$(_c, \"Socials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NvY2lhbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQU0wQjs7QUFFMUIsSUFBTUssT0FBTyxHQUFHLGdCQUF3QjtRQUF0QkMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxJQUFJLFNBQUpBLElBQUk7O0lBRTlCLElBQU1DLE9BQU8sR0FBR0wsbUVBQWlCLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDO0lBQzlELElBQU1NLE1BQU0sR0FBR04sbUVBQWlCLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDO0lBRTdELHFCQUVJLDhEQUFDSixpREFBRztRQUNSVyxVQUFVLEVBQUUsQ0FBQztRQUNiQyxFQUFFLEVBQUU7WUFBRUMsSUFBSSxFQUFFLENBQUM7WUFBRUMsRUFBRSxFQUFDLENBQUM7U0FBRTtRQUNyQkMsRUFBRSxFQUFFO1lBQUVELEVBQUUsRUFBRSxDQUFDO1NBQUU7UUFDYkUsU0FBUyxFQUFDLFFBQVE7a0JBRWQsNEVBQUNmLGtEQUFJO1lBQUNLLElBQUksRUFBRUEsSUFBSTtZQUFFVyxNQUFNLEVBQUMsUUFBUTtzQkFDN0IsNEVBQUNmLG9EQUFNO2dCQUNIZ0IsT0FBTyxFQUFDLE9BQU87Z0JBQ2ZDLFdBQVcsRUFBQyxNQUFNO2dCQUNsQkMsUUFBUSxFQUFFWixJQUFJOzBCQUViRCxJQUFJOzs7OztxQkFDQTs7Ozs7aUJBQ047Ozs7O2FBQ0QsQ0FDVDtDQUNKO0dBeEJLRixPQUFPOztRQUVPRCwrREFBaUI7UUFDbEJBLCtEQUFpQjs7O0FBSDlCQyxLQUFBQSxPQUFPO0FBMEJiLCtEQUFlQSxPQUFPO0FBRXRCLEVBK0JVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc29jaWFscy5qcz85MzI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFxuICAgIEJveCxcbiAgICBMaW5rLFxuICAgIEJ1dHRvbiwgXG4gICAgQ29udGFpbmVyLFxuICAgIHVzZUNvbG9yTW9kZVZhbHVlIFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5jb25zdCBTb2NpYWxzID0gKHtocmVmLCBuYW1lLCBsb2dvfSkgPT4ge1xuXG4gICAgY29uc3Qgb3V0bGluZSA9IHVzZUNvbG9yTW9kZVZhbHVlKCdncmF5MjAwJywgJ3doaXRlQWxwaGEuODAwJylcbiAgICBjb25zdCBmaWxsZXIgPSB1c2VDb2xvck1vZGVWYWx1ZSgnd2hpdGVBbHBoYS44MDAnLCAnZ3JheTIwMCcpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICBcbiAgICAgICAgPEJveFxuICAgIGZsZXhTaHJpbms9ezB9XG4gICAgbXQ9e3sgYmFzZTogNCwgbWQ6MCB9fVxuICAgIG1sPXt7IG1kOiA2IH19XG4gICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbj4gICBcbiAgICAgICAgPExpbmsgaHJlZj17aHJlZn0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcbiAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cImJsdWVcIlxuICAgICAgICAgICAgICAgIGxlZnRJY29uPXtsb2dvfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxzXG5cbnsvKiA8Qm94XG4gICAgZmxleFNocmluaz17MH1cbiAgICBtdD17eyBiYXNlOiA0LCBtZDowIH19XG4gICAgbWw9e3sgbWQ6IDYgfX1cbiAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuPlxuICAgIDxMaW5rIGhyZWY9e2hyZWZ9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgICBib3JkZXJDb2xvcj17b3V0bGluZX1cbiAgICAgICAgICAgIGJnPXtmaWxsZXJ9XG4gICAgICAgICAgICBib3JkZXJXaWR0aD17Mn1cbiAgICAgICAgICAgIGJvcmRlclN0eWxlPVwic29saWRcIlxuICAgICAgICAgICAgdz1cIjIwMHB4XCJcbiAgICAgICAgICAgIGg9XCI1MHB4XCJcbiAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIlxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiZnVsbFwiXG4gICAgICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxDb250YWluZXIgXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIiBcbiAgICAgICAgICAgICAgICBwPXsyfSBcbiAgICAgICAgICAgICAgICBtYXhXPVwiY29udGFpbmVyLm1kXCIgXG4gICAgICAgICAgICAgICAgd3JhcD1cIndyYXBcIiBcbiAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiIFxuICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bG9nb31cbiAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L0JveD5cbiAgICA8L0xpbms+XG48L0JveD4gKi99Il0sIm5hbWVzIjpbIkJveCIsIkxpbmsiLCJCdXR0b24iLCJDb250YWluZXIiLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIlNvY2lhbHMiLCJocmVmIiwibmFtZSIsImxvZ28iLCJvdXRsaW5lIiwiZmlsbGVyIiwiZmxleFNocmluayIsIm10IiwiYmFzZSIsIm1kIiwibWwiLCJ0ZXh0QWxpZ24iLCJ0YXJnZXQiLCJ2YXJpYW50IiwiY29sb3JTY2hlbWUiLCJsZWZ0SWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/socials.js\n");

/***/ })

});