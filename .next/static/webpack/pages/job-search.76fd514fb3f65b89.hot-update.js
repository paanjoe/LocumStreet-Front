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
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ JobComponent; },\n/* harmony export */   "loadJobs": function() { return /* binding */ loadJobs; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ "./node_modules/@swc/helpers/src/_async_to_generator.mjs");\n/* harmony import */ var _Users_paanjoe_Desktop_Projects_LocumStreet_Front_End_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ "./node_modules/next/dist/compiled/regenerator-runtime/runtime.js");\n/* harmony import */ var _Users_paanjoe_Desktop_Projects_LocumStreet_Front_End_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_paanjoe_Desktop_Projects_LocumStreet_Front_End_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.mjs");\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar fetcher = function(url) {\n    return fetch(url).then(function(r) {\n        return r.json();\n    });\n};\nfunction JobComponent() {\n    _s();\n    // Using the hook\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])("/api/jobs", fetcher), data = ref.data, error = ref.error;\n    // Error and loading states\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n        children: "Request Failed"\n    }, void 0, false, {\n        fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n        lineNumber: 12,\n        columnNumber: 19\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n        children: "Loading..."\n    }, void 0, false, {\n        fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n        lineNumber: 13,\n        columnNumber: 19\n    }, this);\n    if (data) {\n        var contests = data.data;\n        console.log(data.data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n        className: "flex ",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {\n            className: "w-full border-transparent bg-white pb-8 text-gray-900",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {\n                href: "/job-details",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {\n                    className: "w-full px-6 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-50 hover:shadow",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n                        className: "flex flex-row",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n                                className: "basis-5/6",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {\n                                        className: "text-xl font-semibold",\n                                        children: "Job Name"\n                                    }, void 0, false, {\n                                        fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                        lineNumber: 29,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {\n                                        className: "mb-2 pr-5 text-sm",\n                                        children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n                                    }, void 0, false, {\n                                        fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                        lineNumber: 30,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n                                        className: "space-x-2",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {\n                                                className: "spacing-5 inline-block whitespace-nowrap rounded-md bg-violet-600 py-1 px-2.5 text-center align-baseline text-xs leading-none text-white",\n                                                children: "Full-Time"\n                                            }, void 0, false, {\n                                                fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                                lineNumber: 36,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {\n                                                className: "inline-block whitespace-nowrap rounded-md bg-cyan-500 py-1 px-2.5 text-center align-baseline text-xs leading-none text-white",\n                                                children: "Dentist"\n                                            }, void 0, false, {\n                                                fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                                lineNumber: 39,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {\n                                                className: "inline-block whitespace-nowrap rounded-md bg-indigo-600 py-1 px-2.5 text-center align-baseline text-xs leading-none text-white",\n                                                children: "Selangor"\n                                            }, void 0, false, {\n                                                fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                                lineNumber: 42,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {\n                                                className: "inline-block whitespace-nowrap rounded-md py-1 px-2.5 text-center align-baseline text-xs leading-none text-green-600",\n                                                children: "Posted: 19 Hours Ago"\n                                            }, void 0, false, {\n                                                fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                                lineNumber: 45,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                        lineNumber: 35,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                lineNumber: 28,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n                                className: "flex basis-1/6 items-center justify-center border-l-2 border-slate-100",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {\n                                    className: "inline-block whitespace-nowrap rounded-md bg-green-200 px-2.5 py-2.5 text-center align-baseline leading-none text-green-700",\n                                    children: "RM 1000"\n                                }, void 0, false, {\n                                    fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                    lineNumber: 51,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n};\n_s(JobComponent, "r2QYs02BSrn+Eu/1uMGZi8N+HnQ=", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_3__["default"]\n    ];\n});\n_c = JobComponent;\nfunction loadJobs() {\n    return _loadJobs.apply(this, arguments);\n}\nfunction _loadJobs() {\n    _loadJobs = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])(_Users_paanjoe_Desktop_Projects_LocumStreet_Front_End_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var res, data;\n        return _Users_paanjoe_Desktop_Projects_LocumStreet_Front_End_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch("/api/jobs");\n                case 2:\n                    res = _ctx.sent;\n                    _ctx.next = 5;\n                    return res.json();\n                case 5:\n                    data = _ctx.sent;\n                    return _ctx.abrupt("return", data);\n                case 7:\n                case "end":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _loadJobs.apply(this, arguments);\n}\nvar _c;\n$RefreshReg$(_c, "JobComponent");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9qb2JzL2pvYmNvbXBvbmVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBMEI7QUFFRDs7QUFFekIsSUFBTUUsT0FBTyxHQUFHLFNBQUNDLEdBQXNCO1dBQUtDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDLENBQUNFLElBQUksQ0FBQ0MsU0FBQUEsQ0FBQztlQUFJQSxDQUFDLENBQUNDLElBQUksRUFBRTtLQUFBLENBQUM7Q0FBQTtBQUUzRCxTQUFTQyxZQUFZLEdBQUc7O0lBQ3ZDLGlCQUFpQjtJQUNqQixJQUF3QlAsR0FBNEIsR0FBNUJBLCtDQUFNLENBQUMsV0FBVyxFQUFFQyxPQUFPLENBQUMsRUFBNUNPLElBQUksR0FBWVIsR0FBNEIsQ0FBNUNRLElBQUksRUFBRUMsS0FBSyxHQUFLVCxHQUE0QixDQUF0Q1MsS0FBSztJQUVuQiwyQkFBMkI7SUFDM0IsSUFBSUEsS0FBSyxFQUFFLHFCQUFPLDhEQUFDQyxLQUFHO2tCQUFDLGdCQUFjOzs7OztZQUFNLENBQUM7SUFDNUMsSUFBSSxDQUFDRixJQUFJLEVBQUUscUJBQU8sOERBQUNFLEtBQUc7a0JBQUMsWUFBVTs7Ozs7WUFBTSxDQUFDO0lBR3hDLElBQUdGLElBQUksRUFBQztRQUNOLElBQU1HLFFBQVEsR0FBSUgsSUFBSSxDQUFDQSxJQUFJO1FBQzNCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsSUFBSSxDQUFDQSxJQUFJLENBQUM7S0FDdkI7SUFFQyxxQkFDRSw4REFBQ0UsS0FBRztRQUFDSSxTQUFTLEVBQUMsT0FBTztrQkFDcEIsNEVBQUNDLElBQUU7WUFBQ0QsU0FBUyxFQUFDLHVEQUF1RDtzQkFFbkUsNEVBQUNFLEdBQUM7Z0JBQUNDLElBQUksRUFBQyxjQUFjOzBCQUNwQiw0RUFBQ0MsSUFBRTtvQkFBQ0osU0FBUyxFQUFDLHdHQUF5Rzs4QkFDckgsNEVBQUNKLEtBQUc7d0JBQUNJLFNBQVMsRUFBQyxlQUFlOzswQ0FDNUIsOERBQUNKLEtBQUc7Z0NBQUNJLFNBQVMsRUFBQyxXQUFXOztrREFDeEIsOERBQUNLLEdBQUM7d0NBQUNMLFNBQVMsRUFBQyx1QkFBdUI7a0RBQUMsVUFBUTs7Ozs7NENBQUk7a0RBQ2pELDhEQUFDSyxHQUFDO3dDQUFDTCxTQUFTLEVBQUMsbUJBQW1CO2tEQUFDLDBKQUlqQzs7Ozs7NENBQUk7a0RBQ0osOERBQUNKLEtBQUc7d0NBQUNJLFNBQVMsRUFBQyxXQUFXOzswREFDeEIsOERBQUNNLE1BQUk7Z0RBQUNOLFNBQVMsRUFBQywwSUFBMEk7MERBQUMsV0FFM0o7Ozs7O29EQUFPOzBEQUNQLDhEQUFDTSxNQUFJO2dEQUFDTixTQUFTLEVBQUMsOEhBQThIOzBEQUFDLFNBRS9JOzs7OztvREFBTzswREFDUCw4REFBQ00sTUFBSTtnREFBQ04sU0FBUyxFQUFDLGdJQUFnSTswREFBQyxVQUVqSjs7Ozs7b0RBQU87MERBQ1AsOERBQUNNLE1BQUk7Z0RBQUNOLFNBQVMsRUFBQyxzSEFBc0g7MERBQUMsc0JBRXZJOzs7OztvREFBTzs7Ozs7OzRDQUNIOzs7Ozs7b0NBQ0Y7MENBQ04sOERBQUNKLEtBQUc7Z0NBQUNJLFNBQVMsRUFBQyx3RUFBd0U7MENBQ3JGLDRFQUFDTSxNQUFJO29DQUFDTixTQUFTLEVBQUMsNkhBQTZIOzhDQUFDLFNBRTlJOzs7Ozt3Q0FBTzs7Ozs7b0NBQ0g7Ozs7Ozs0QkFDRjs7Ozs7d0JBQ0g7Ozs7O29CQUNIOzs7OztnQkFDRDs7Ozs7WUFDRCxDQUNOO0NBQ0g7R0F0RHVCUCxZQUFZOztRQUVaUCwyQ0FBTTs7O0FBRk5PLEtBQUFBLFlBQVk7QUEwRDdCLFNBQWVjLFFBQVE7V0FBUkEsU0FBUTtDQUk3QjtTQUpxQkEsU0FBUTtJQUFSQSxTQUFRLEdBQXZCLHdRQUEwQjtZQUN6QkMsR0FBRyxFQUNIZCxJQUFJOzs7OzsyQkFEUUwsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7b0JBQTlCbUIsR0FBRyxZQUEyQjs7MkJBQ2pCQSxHQUFHLENBQUNoQixJQUFJLEVBQUU7O29CQUF2QkUsSUFBSSxZQUFtQjtpREFDdEJBLElBQUk7Ozs7OztLQUNaO1dBSnFCYSxTQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2pvYnMvam9iY29tcG9uZW50LnRzeD8xYWQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJpQ2hhdENoZWNrTGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbmNvbnN0IGZldGNoZXIgPSAodXJsOiBSZXF1ZXN0SW5mbyB8IFVSTCkgPT4gZmV0Y2godXJsKS50aGVuKHIgPT4gci5qc29uKCkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEpvYkNvbXBvbmVudCgpIHtcbi8vIFVzaW5nIHRoZSBob29rXG5jb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoJy9hcGkvam9icycsIGZldGNoZXIpO1xuXG4vLyBFcnJvciBhbmQgbG9hZGluZyBzdGF0ZXNcbmlmIChlcnJvcikgcmV0dXJuIDxkaXY+UmVxdWVzdCBGYWlsZWQ8L2Rpdj47XG5pZiAoIWRhdGEpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG5cblxuaWYoZGF0YSl7XG4gIGNvbnN0IGNvbnRlc3RzICA9IGRhdGEuZGF0YTtcbiAgY29uc29sZS5sb2coZGF0YS5kYXRhKVxufVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggJz5cbiAgICAgIDx1bCBjbGFzc05hbWU9J3ctZnVsbCBib3JkZXItdHJhbnNwYXJlbnQgYmctd2hpdGUgcGItOCB0ZXh0LWdyYXktOTAwJz5cbiAgICAgICAgXG4gICAgICAgIDxhIGhyZWY9Jy9qb2ItZGV0YWlscyc+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0ndy1mdWxsIHB4LTYgcHktMiAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOnNjYWxlLTEwNSBob3ZlcjpiZy1ncmF5LTUwIGhvdmVyOnNoYWRvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYXNpcy01LzYnPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC14bCBmb250LXNlbWlib2xkJz5Kb2IgTmFtZTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21iLTIgcHItNSB0ZXh0LXNtJz5cbiAgICAgICAgICAgICAgICAgIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmRcbiAgICAgICAgICAgICAgICAgIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnlcbiAgICAgICAgICAgICAgICAgIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMuLi5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NwYWNlLXgtMic+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NwYWNpbmctNSBpbmxpbmUtYmxvY2sgd2hpdGVzcGFjZS1ub3dyYXAgcm91bmRlZC1tZCBiZy12aW9sZXQtNjAwIHB5LTEgcHgtMi41IHRleHQtY2VudGVyIGFsaWduLWJhc2VsaW5lIHRleHQteHMgbGVhZGluZy1ub25lIHRleHQtd2hpdGUnPlxuICAgICAgICAgICAgICAgICAgICBGdWxsLVRpbWVcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHdoaXRlc3BhY2Utbm93cmFwIHJvdW5kZWQtbWQgYmctY3lhbi01MDAgcHktMSBweC0yLjUgdGV4dC1jZW50ZXIgYWxpZ24tYmFzZWxpbmUgdGV4dC14cyBsZWFkaW5nLW5vbmUgdGV4dC13aGl0ZSc+XG4gICAgICAgICAgICAgICAgICAgIERlbnRpc3RcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHdoaXRlc3BhY2Utbm93cmFwIHJvdW5kZWQtbWQgYmctaW5kaWdvLTYwMCBweS0xIHB4LTIuNSB0ZXh0LWNlbnRlciBhbGlnbi1iYXNlbGluZSB0ZXh0LXhzIGxlYWRpbmctbm9uZSB0ZXh0LXdoaXRlJz5cbiAgICAgICAgICAgICAgICAgICAgU2VsYW5nb3JcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHdoaXRlc3BhY2Utbm93cmFwIHJvdW5kZWQtbWQgcHktMSBweC0yLjUgdGV4dC1jZW50ZXIgYWxpZ24tYmFzZWxpbmUgdGV4dC14cyBsZWFkaW5nLW5vbmUgdGV4dC1ncmVlbi02MDAnPlxuICAgICAgICAgICAgICAgICAgICBQb3N0ZWQ6IDE5IEhvdXJzIEFnb1xuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggYmFzaXMtMS82IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBib3JkZXItbC0yIGJvcmRlci1zbGF0ZS0xMDAnPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHdoaXRlc3BhY2Utbm93cmFwIHJvdW5kZWQtbWQgYmctZ3JlZW4tMjAwIHB4LTIuNSBweS0yLjUgdGV4dC1jZW50ZXIgYWxpZ24tYmFzZWxpbmUgbGVhZGluZy1ub25lIHRleHQtZ3JlZW4tNzAwJz5cbiAgICAgICAgICAgICAgICAgIFJNIDEwMDBcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC9hPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkSm9icygpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvam9icycpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU1dSIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwiSm9iQ29tcG9uZW50IiwiZGF0YSIsImVycm9yIiwiZGl2IiwiY29udGVzdHMiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NOYW1lIiwidWwiLCJhIiwiaHJlZiIsImxpIiwicCIsInNwYW4iLCJsb2FkSm9icyIsInJlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/jobs/jobcomponent.tsx\n'
        )
      );

      /***/
    },
});
