'use strict';
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self['webpackHotUpdate_N_E']('pages/job-search', {
  /***/ './src/components/jobs/jobcomponent.tsx':
    /*!**********************************************!*\
  !*** ./src/components/jobs/jobcomponent.tsx ***!
  \**********************************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        __webpack_require__.ts(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ JobComponent; },\n/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ "./node_modules/@swc/helpers/src/_async_to_generator.mjs");\n/* harmony import */ var _Users_paanjoe_Desktop_Projects_LocumStreet_Front_End_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ "./node_modules/next/dist/compiled/regenerator-runtime/runtime.js");\n/* harmony import */ var _Users_paanjoe_Desktop_Projects_LocumStreet_Front_End_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_paanjoe_Desktop_Projects_LocumStreet_Front_End_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction getStaticProps(context) {\n    return _getStaticProps.apply(this, arguments);\n}\nfunction _getStaticProps() {\n    _getStaticProps = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(_Users_paanjoe_Desktop_Projects_LocumStreet_Front_End_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(context) {\n        var res, data;\n        return _Users_paanjoe_Desktop_Projects_LocumStreet_Front_End_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch("/api/jobs");\n                case 2:\n                    res = _ctx.sent;\n                    _ctx.next = 5;\n                    return res.json();\n                case 5:\n                    data = _ctx.sent;\n                    if (data) {\n                        _ctx.next = 8;\n                        break;\n                    }\n                    return _ctx.abrupt("return", "Not Found");\n                case 8:\n                case "end":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _getStaticProps.apply(this, arguments);\n}\nfunction JobComponent() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n        className: "flex ",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {\n            className: "w-full border-transparent bg-white pb-8 text-gray-900",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {\n                href: "/job-details",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {\n                    className: "w-full px-6 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-50 hover:shadow",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n                        className: "flex flex-row",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n                                className: "basis-5/6",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {\n                                        className: "text-xl font-semibold",\n                                        children: "Job Name"\n                                    }, void 0, false, {\n                                        fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                        lineNumber: 19,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {\n                                        className: "mb-2 pr-5 text-sm",\n                                        children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n                                    }, void 0, false, {\n                                        fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                        lineNumber: 20,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n                                        className: "space-x-2",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {\n                                                className: "spacing-5 inline-block whitespace-nowrap rounded-md bg-violet-600 py-1 px-2.5 text-center align-baseline text-xs leading-none text-white",\n                                                children: "Full-Time"\n                                            }, void 0, false, {\n                                                fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                                lineNumber: 26,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {\n                                                className: "inline-block whitespace-nowrap rounded-md bg-cyan-500 py-1 px-2.5 text-center align-baseline text-xs leading-none text-white",\n                                                children: "Dentist"\n                                            }, void 0, false, {\n                                                fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                                lineNumber: 29,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {\n                                                className: "inline-block whitespace-nowrap rounded-md bg-indigo-600 py-1 px-2.5 text-center align-baseline text-xs leading-none text-white",\n                                                children: "Selangor"\n                                            }, void 0, false, {\n                                                fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                                lineNumber: 32,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {\n                                                className: "inline-block whitespace-nowrap rounded-md py-1 px-2.5 text-center align-baseline text-xs leading-none text-green-600",\n                                                children: "Posted: 19 Hours Ago"\n                                            }, void 0, false, {\n                                                fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                                lineNumber: 35,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                        lineNumber: 25,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                lineNumber: 18,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n                                className: "flex basis-1/6 items-center justify-center border-l-2 border-slate-100",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {\n                                    className: "inline-block whitespace-nowrap rounded-md bg-green-200 px-2.5 py-2.5 text-center align-baseline leading-none text-green-700",\n                                    children: "RM 1000"\n                                }, void 0, false, {\n                                    fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                    lineNumber: 41,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                    lineNumber: 16,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n};\n_c = JobComponent;\nvar _c;\n$RefreshReg$(_c, "JobComponent");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9qb2JzL2pvYmNvbXBvbmVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBOzs7QUFBTyxTQUFlQSxjQUFjLENBQUNDLE9BQU87V0FBdEJELGVBQWM7Q0FPbkM7U0FQcUJBLGVBQWM7SUFBZEEsZUFBYyxHQUE3QixzUUFBOEJDLE9BQU8sRUFBRTtZQUN0Q0MsR0FBRyxFQUNIQyxJQUFJOzs7OzsyQkFEUUMsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7b0JBQTlCRixHQUFHLFlBQTJCOzsyQkFDakJBLEdBQUcsQ0FBQ0csSUFBSSxFQUFFOztvQkFBdkJGLElBQUksWUFBbUI7d0JBRXpCQSxJQUFJOzs7O2lEQUNDLFdBQVc7Ozs7OztLQUVyQjtXQVBxQkgsZUFBYzs7QUFTckIsU0FBU00sWUFBWSxHQUFHO0lBQ3JDLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxPQUFPO2tCQUNwQiw0RUFBQ0MsSUFBRTtZQUFDRCxTQUFTLEVBQUMsdURBQXVEO3NCQUNuRSw0RUFBQ0UsR0FBQztnQkFBQ0MsSUFBSSxFQUFDLGNBQWM7MEJBQ3BCLDRFQUFDQyxJQUFFO29CQUFDSixTQUFTLEVBQUMsd0dBQXlHOzhCQUNySCw0RUFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLGVBQWU7OzBDQUM1Qiw4REFBQ0QsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLFdBQVc7O2tEQUN4Qiw4REFBQ0ssR0FBQzt3Q0FBQ0wsU0FBUyxFQUFDLHVCQUF1QjtrREFBQyxVQUFROzs7Ozs0Q0FBSTtrREFDakQsOERBQUNLLEdBQUM7d0NBQUNMLFNBQVMsRUFBQyxtQkFBbUI7a0RBQUMsMEpBSWpDOzs7Ozs0Q0FBSTtrREFDSiw4REFBQ0QsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLFdBQVc7OzBEQUN4Qiw4REFBQ00sTUFBSTtnREFBQ04sU0FBUyxFQUFDLDBJQUEwSTswREFBQyxXQUUzSjs7Ozs7b0RBQU87MERBQ1AsOERBQUNNLE1BQUk7Z0RBQUNOLFNBQVMsRUFBQyw4SEFBOEg7MERBQUMsU0FFL0k7Ozs7O29EQUFPOzBEQUNQLDhEQUFDTSxNQUFJO2dEQUFDTixTQUFTLEVBQUMsZ0lBQWdJOzBEQUFDLFVBRWpKOzs7OztvREFBTzswREFDUCw4REFBQ00sTUFBSTtnREFBQ04sU0FBUyxFQUFDLHNIQUFzSDswREFBQyxzQkFFdkk7Ozs7O29EQUFPOzs7Ozs7NENBQ0g7Ozs7OztvQ0FDRjswQ0FDTiw4REFBQ0QsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLHdFQUF3RTswQ0FDckYsNEVBQUNNLE1BQUk7b0NBQUNOLFNBQVMsRUFBQyw2SEFBNkg7OENBQUMsU0FFOUk7Ozs7O3dDQUFPOzs7OztvQ0FDSDs7Ozs7OzRCQUNGOzs7Ozt3QkFDSDs7Ozs7b0JBQ0g7Ozs7O2dCQUNEOzs7OztZQUNELENBQ047Q0FDSDtBQXhDdUJGLEtBQUFBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvam9icy9qb2Jjb21wb25lbnQudHN4PzFhZDkiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9qb2JzJyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGlmKCFkYXRhKSB7XG4gICAgcmV0dXJuICdOb3QgRm91bmQnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEpvYkNvbXBvbmVudCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCAnPlxuICAgICAgPHVsIGNsYXNzTmFtZT0ndy1mdWxsIGJvcmRlci10cmFuc3BhcmVudCBiZy13aGl0ZSBwYi04IHRleHQtZ3JheS05MDAnPlxuICAgICAgICA8YSBocmVmPScvam9iLWRldGFpbHMnPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3ctZnVsbCBweC02IHB5LTIgIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6YmctZ3JheS01MCBob3ZlcjpzaGFkb3cnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFzaXMtNS82Jz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQteGwgZm9udC1zZW1pYm9sZCc+Sm9iIE5hbWU8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtYi0yIHByLTUgdGV4dC1zbSc+XG4gICAgICAgICAgICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kXG4gICAgICAgICAgICAgICAgICB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5XG4gICAgICAgICAgICAgICAgICBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLi4uXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGFjZS14LTInPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzcGFjaW5nLTUgaW5saW5lLWJsb2NrIHdoaXRlc3BhY2Utbm93cmFwIHJvdW5kZWQtbWQgYmctdmlvbGV0LTYwMCBweS0xIHB4LTIuNSB0ZXh0LWNlbnRlciBhbGlnbi1iYXNlbGluZSB0ZXh0LXhzIGxlYWRpbmctbm9uZSB0ZXh0LXdoaXRlJz5cbiAgICAgICAgICAgICAgICAgICAgRnVsbC1UaW1lXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lubGluZS1ibG9jayB3aGl0ZXNwYWNlLW5vd3JhcCByb3VuZGVkLW1kIGJnLWN5YW4tNTAwIHB5LTEgcHgtMi41IHRleHQtY2VudGVyIGFsaWduLWJhc2VsaW5lIHRleHQteHMgbGVhZGluZy1ub25lIHRleHQtd2hpdGUnPlxuICAgICAgICAgICAgICAgICAgICBEZW50aXN0XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lubGluZS1ibG9jayB3aGl0ZXNwYWNlLW5vd3JhcCByb3VuZGVkLW1kIGJnLWluZGlnby02MDAgcHktMSBweC0yLjUgdGV4dC1jZW50ZXIgYWxpZ24tYmFzZWxpbmUgdGV4dC14cyBsZWFkaW5nLW5vbmUgdGV4dC13aGl0ZSc+XG4gICAgICAgICAgICAgICAgICAgIFNlbGFuZ29yXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lubGluZS1ibG9jayB3aGl0ZXNwYWNlLW5vd3JhcCByb3VuZGVkLW1kIHB5LTEgcHgtMi41IHRleHQtY2VudGVyIGFsaWduLWJhc2VsaW5lIHRleHQteHMgbGVhZGluZy1ub25lIHRleHQtZ3JlZW4tNjAwJz5cbiAgICAgICAgICAgICAgICAgICAgUG9zdGVkOiAxOSBIb3VycyBBZ29cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGJhc2lzLTEvNiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYm9yZGVyLWwtMiBib3JkZXItc2xhdGUtMTAwJz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lubGluZS1ibG9jayB3aGl0ZXNwYWNlLW5vd3JhcCByb3VuZGVkLW1kIGJnLWdyZWVuLTIwMCBweC0yLjUgcHktMi41IHRleHQtY2VudGVyIGFsaWduLWJhc2VsaW5lIGxlYWRpbmctbm9uZSB0ZXh0LWdyZWVuLTcwMCc+XG4gICAgICAgICAgICAgICAgICBSTSAxMDAwXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwicmVzIiwiZGF0YSIsImZldGNoIiwianNvbiIsIkpvYkNvbXBvbmVudCIsImRpdiIsImNsYXNzTmFtZSIsInVsIiwiYSIsImhyZWYiLCJsaSIsInAiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/jobs/jobcomponent.tsx\n'
        )
      );

      /***/
    },

  /***/ './node_modules/@swc/helpers/src/_async_to_generator.mjs':
    /*!***************************************************************!*\
  !*** ./node_modules/@swc/helpers/src/_async_to_generator.mjs ***!
  \***************************************************************/
    /***/ function (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) {
      eval(
        __webpack_require__.ts(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n      args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL3NyYy9fYXN5bmNfdG9fZ2VuZXJhdG9yLm1qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bzd2MvaGVscGVycy9zcmMvX2FzeW5jX3RvX2dlbmVyYXRvci5tanM/YThhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/src/_async_to_generator.mjs\n'
        )
      );

      /***/
    },
});
