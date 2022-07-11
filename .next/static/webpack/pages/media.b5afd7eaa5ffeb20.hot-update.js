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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Socials = function(param) {\n    var href = param.href, name = param.name, logo = param.logo, color = param.color;\n    _s();\n    var outline = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"gray200\", \"whiteAlpha.800\");\n    var filler = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"whiteAlpha.800\", \"gray200\");\n    if (color === \"\") {\n        color = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"\", \"\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        flexShrink: 0,\n        mt: {\n            base: 4,\n            md: 0\n        },\n        ml: {\n            md: 6\n        },\n        textAlign: \"center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {\n            href: href,\n            target: \"_blank\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                variant: \"solid\",\n                colorScheme: color,\n                leftIcon: logo,\n                size: \"lg\",\n                width: \"150px\",\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/Omar/Documents/GitHub/omarcloud-next-chakra/components/socials.js\",\n                lineNumber: 24,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/Omar/Documents/GitHub/omarcloud-next-chakra/components/socials.js\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/Omar/Documents/GitHub/omarcloud-next-chakra/components/socials.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, _this);\n};\n_s(Socials, \"s0OYOi4PhqDWZZpQ9XOl/1ikb9g=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue\n    ];\n});\n_c = Socials;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Socials);\n{}var _c;\n$RefreshReg$(_c, \"Socials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NvY2lhbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUswQjs7QUFFMUIsSUFBTUksT0FBTyxHQUFHLGdCQUErQjtRQUE3QkMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsS0FBSyxTQUFMQSxLQUFLOztJQUVyQyxJQUFNQyxPQUFPLEdBQUdOLG1FQUFpQixDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQztJQUM5RCxJQUFNTyxNQUFNLEdBQUdQLG1FQUFpQixDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQztJQUM3RCxJQUFJSyxLQUFLLEtBQUssRUFBRSxFQUFFO1FBQ2RBLEtBQUssR0FBR0wsbUVBQWlCLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQztLQUNuQztJQUNELHFCQUVJLDhEQUFDSCxpREFBRztRQUNBVyxVQUFVLEVBQUUsQ0FBQztRQUNiQyxFQUFFLEVBQUU7WUFBRUMsSUFBSSxFQUFFLENBQUM7WUFBRUMsRUFBRSxFQUFDLENBQUM7U0FBRTtRQUNyQkMsRUFBRSxFQUFFO1lBQUVELEVBQUUsRUFBRSxDQUFDO1NBQUU7UUFDYkUsU0FBUyxFQUFDLFFBQVE7a0JBRWxCLDRFQUFDZixrREFBSTtZQUFDSSxJQUFJLEVBQUVBLElBQUk7WUFBRVksTUFBTSxFQUFDLFFBQVE7c0JBQzdCLDRFQUFDZixvREFBTTtnQkFDSGdCLE9BQU8sRUFBQyxPQUFPO2dCQUNmQyxXQUFXLEVBQUVYLEtBQUs7Z0JBQ2xCWSxRQUFRLEVBQUViLElBQUk7Z0JBQ2RjLElBQUksRUFBQyxJQUFJO2dCQUNUQyxLQUFLLEVBQUMsT0FBTzswQkFFWmhCLElBQUk7Ozs7O3FCQUNBOzs7OztpQkFDTjs7Ozs7YUFDTCxDQUNUO0NBQ0o7R0E1QktGLE9BQU87O1FBRU9ELCtEQUFpQjtRQUNsQkEsK0RBQWlCOzs7QUFIOUJDLEtBQUFBLE9BQU87QUE4QmIsK0RBQWVBLE9BQU87QUFFdEIsRUErQlUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zb2NpYWxzLmpzPzkzMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgXG4gICAgQm94LFxuICAgIExpbmssXG4gICAgQnV0dG9uLCBcbiAgICB1c2VDb2xvck1vZGVWYWx1ZSBcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuY29uc3QgU29jaWFscyA9ICh7aHJlZiwgbmFtZSwgbG9nbywgY29sb3J9KSA9PiB7XG5cbiAgICBjb25zdCBvdXRsaW5lID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkyMDAnLCAnd2hpdGVBbHBoYS44MDAnKVxuICAgIGNvbnN0IGZpbGxlciA9IHVzZUNvbG9yTW9kZVZhbHVlKCd3aGl0ZUFscGhhLjgwMCcsICdncmF5MjAwJylcbiAgICBpZiAoY29sb3IgPT09IFwiXCIpIHtcbiAgICAgICAgY29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZSgnJywnJylcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgXG4gICAgICAgIDxCb3hcbiAgICAgICAgICAgIGZsZXhTaHJpbms9ezB9XG4gICAgICAgICAgICBtdD17eyBiYXNlOiA0LCBtZDowIH19XG4gICAgICAgICAgICBtbD17eyBtZDogNiB9fVxuICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgPiAgIFxuICAgICAgICAgICAgPExpbmsgaHJlZj17aHJlZn0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic29saWRcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT17Y29sb3J9XG4gICAgICAgICAgICAgICAgICAgIGxlZnRJY29uPXtsb2dvfVxuICAgICAgICAgICAgICAgICAgICBzaXplPSdsZydcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNTBweFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxzXG5cbnsvKiA8Qm94XG4gICAgZmxleFNocmluaz17MH1cbiAgICBtdD17eyBiYXNlOiA0LCBtZDowIH19XG4gICAgbWw9e3sgbWQ6IDYgfX1cbiAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuPlxuICAgIDxMaW5rIGhyZWY9e2hyZWZ9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgICBib3JkZXJDb2xvcj17b3V0bGluZX1cbiAgICAgICAgICAgIGJnPXtmaWxsZXJ9XG4gICAgICAgICAgICBib3JkZXJXaWR0aD17Mn1cbiAgICAgICAgICAgIGJvcmRlclN0eWxlPVwic29saWRcIlxuICAgICAgICAgICAgdz1cIjIwMHB4XCJcbiAgICAgICAgICAgIGg9XCI1MHB4XCJcbiAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIlxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiZnVsbFwiXG4gICAgICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxDb250YWluZXIgXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIiBcbiAgICAgICAgICAgICAgICBwPXsyfSBcbiAgICAgICAgICAgICAgICBtYXhXPVwiY29udGFpbmVyLm1kXCIgXG4gICAgICAgICAgICAgICAgd3JhcD1cIndyYXBcIiBcbiAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiIFxuICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bG9nb31cbiAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L0JveD5cbiAgICA8L0xpbms+XG48L0JveD4gKi99Il0sIm5hbWVzIjpbIkJveCIsIkxpbmsiLCJCdXR0b24iLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIlNvY2lhbHMiLCJocmVmIiwibmFtZSIsImxvZ28iLCJjb2xvciIsIm91dGxpbmUiLCJmaWxsZXIiLCJmbGV4U2hyaW5rIiwibXQiLCJiYXNlIiwibWQiLCJtbCIsInRleHRBbGlnbiIsInRhcmdldCIsInZhcmlhbnQiLCJjb2xvclNjaGVtZSIsImxlZnRJY29uIiwic2l6ZSIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/socials.js\n");

/***/ })

});