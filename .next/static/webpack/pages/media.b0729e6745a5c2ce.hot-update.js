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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Socials = function(param) {\n    var href = param.href, name = param.name, logo = param.logo, color = param.color;\n    _s();\n    var outline = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"gray200\", \"whiteAlpha.800\");\n    var filler = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(\"whiteAlpha.800\", \"gray200\");\n    if (condition) {}\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        flexShrink: 0,\n        mt: {\n            base: 4,\n            md: 0\n        },\n        ml: {\n            md: 6\n        },\n        textAlign: \"center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {\n            href: href,\n            target: \"_blank\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                variant: \"solid\",\n                colorScheme: color,\n                leftIcon: logo,\n                size: \"lg\",\n                width: \"150px\",\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/Omar/Documents/GitHub/omarcloud-next-chakra/components/socials.js\",\n                lineNumber: 24,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/Omar/Documents/GitHub/omarcloud-next-chakra/components/socials.js\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/Omar/Documents/GitHub/omarcloud-next-chakra/components/socials.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, _this);\n};\n_s(Socials, \"s0OYOi4PhqDWZZpQ9XOl/1ikb9g=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue\n    ];\n});\n_c = Socials;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Socials);\n{}var _c;\n$RefreshReg$(_c, \"Socials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NvY2lhbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUswQjs7QUFFMUIsSUFBTUksT0FBTyxHQUFHLGdCQUErQjtRQUE3QkMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsS0FBSyxTQUFMQSxLQUFLOztJQUVyQyxJQUFNQyxPQUFPLEdBQUdOLG1FQUFpQixDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQztJQUM5RCxJQUFNTyxNQUFNLEdBQUdQLG1FQUFpQixDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQztJQUM3RCxJQUFJUSxTQUFTLEVBQUUsRUFFZDtJQUNELHFCQUVJLDhEQUFDWCxpREFBRztRQUNBWSxVQUFVLEVBQUUsQ0FBQztRQUNiQyxFQUFFLEVBQUU7WUFBRUMsSUFBSSxFQUFFLENBQUM7WUFBRUMsRUFBRSxFQUFDLENBQUM7U0FBRTtRQUNyQkMsRUFBRSxFQUFFO1lBQUVELEVBQUUsRUFBRSxDQUFDO1NBQUU7UUFDYkUsU0FBUyxFQUFDLFFBQVE7a0JBRWxCLDRFQUFDaEIsa0RBQUk7WUFBQ0ksSUFBSSxFQUFFQSxJQUFJO1lBQUVhLE1BQU0sRUFBQyxRQUFRO3NCQUM3Qiw0RUFBQ2hCLG9EQUFNO2dCQUNIaUIsT0FBTyxFQUFDLE9BQU87Z0JBQ2ZDLFdBQVcsRUFBRVosS0FBSztnQkFDbEJhLFFBQVEsRUFBRWQsSUFBSTtnQkFDZGUsSUFBSSxFQUFDLElBQUk7Z0JBQ1RDLEtBQUssRUFBQyxPQUFPOzBCQUVaakIsSUFBSTs7Ozs7cUJBQ0E7Ozs7O2lCQUNOOzs7OzthQUNMLENBQ1Q7Q0FDSjtHQTVCS0YsT0FBTzs7UUFFT0QsK0RBQWlCO1FBQ2xCQSwrREFBaUI7OztBQUg5QkMsS0FBQUEsT0FBTztBQThCYiwrREFBZUEsT0FBTztBQUV0QixFQStCVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NvY2lhbHMuanM/OTMyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBcbiAgICBCb3gsXG4gICAgTGluayxcbiAgICBCdXR0b24sIFxuICAgIHVzZUNvbG9yTW9kZVZhbHVlIFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5jb25zdCBTb2NpYWxzID0gKHtocmVmLCBuYW1lLCBsb2dvLCBjb2xvcn0pID0+IHtcblxuICAgIGNvbnN0IG91dGxpbmUgPSB1c2VDb2xvck1vZGVWYWx1ZSgnZ3JheTIwMCcsICd3aGl0ZUFscGhhLjgwMCcpXG4gICAgY29uc3QgZmlsbGVyID0gdXNlQ29sb3JNb2RlVmFsdWUoJ3doaXRlQWxwaGEuODAwJywgJ2dyYXkyMDAnKVxuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgICAgXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIFxuICAgICAgICA8Qm94XG4gICAgICAgICAgICBmbGV4U2hyaW5rPXswfVxuICAgICAgICAgICAgbXQ9e3sgYmFzZTogNCwgbWQ6MCB9fVxuICAgICAgICAgICAgbWw9e3sgbWQ6IDYgfX1cbiAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgID4gICBcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNvbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9e2NvbG9yfVxuICAgICAgICAgICAgICAgICAgICBsZWZ0SWNvbj17bG9nb31cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT0nbGcnXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTUwcHhcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU29jaWFsc1xuXG57LyogPEJveFxuICAgIGZsZXhTaHJpbms9ezB9XG4gICAgbXQ9e3sgYmFzZTogNCwgbWQ6MCB9fVxuICAgIG1sPXt7IG1kOiA2IH19XG4gICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbj5cbiAgICA8TGluayBocmVmPXtocmVmfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgPEJveFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I9e291dGxpbmV9XG4gICAgICAgICAgICBiZz17ZmlsbGVyfVxuICAgICAgICAgICAgYm9yZGVyV2lkdGg9ezJ9XG4gICAgICAgICAgICBib3JkZXJTdHlsZT1cInNvbGlkXCJcbiAgICAgICAgICAgIHc9XCIyMDBweFwiXG4gICAgICAgICAgICBoPVwiNTBweFwiXG4gICAgICAgICAgICBkaXNwbGF5PVwiaW5saW5lLWJsb2NrXCJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cImZ1bGxcIlxuICAgICAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxuICAgICAgICA+XG4gICAgICAgICAgICA8Q29udGFpbmVyIFxuICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCIgXG4gICAgICAgICAgICAgICAgcD17Mn0gXG4gICAgICAgICAgICAgICAgbWF4Vz1cImNvbnRhaW5lci5tZFwiIFxuICAgICAgICAgICAgICAgIHdyYXA9XCJ3cmFwXCIgXG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIiBcbiAgICAgICAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xvZ299XG4gICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9Cb3g+XG4gICAgPC9MaW5rPlxuPC9Cb3g+ICovfSJdLCJuYW1lcyI6WyJCb3giLCJMaW5rIiwiQnV0dG9uIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJTb2NpYWxzIiwiaHJlZiIsIm5hbWUiLCJsb2dvIiwiY29sb3IiLCJvdXRsaW5lIiwiZmlsbGVyIiwiY29uZGl0aW9uIiwiZmxleFNocmluayIsIm10IiwiYmFzZSIsIm1kIiwibWwiLCJ0ZXh0QWxpZ24iLCJ0YXJnZXQiLCJ2YXJpYW50IiwiY29sb3JTY2hlbWUiLCJsZWZ0SWNvbiIsInNpemUiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/socials.js\n");

/***/ })

});