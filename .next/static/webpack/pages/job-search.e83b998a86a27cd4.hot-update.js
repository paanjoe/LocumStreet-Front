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
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ JobComponent; },\n/* harmony export */   "loadJobs": function() { return /* binding */ loadJobs; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ "./node_modules/@swc/helpers/src/_async_to_generator.mjs");\n/* harmony import */ var _Users_paanjoe_Desktop_Projects_LocumStreet_Front_End_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ "./node_modules/next/dist/compiled/regenerator-runtime/runtime.js");\n/* harmony import */ var _Users_paanjoe_Desktop_Projects_LocumStreet_Front_End_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_paanjoe_Desktop_Projects_LocumStreet_Front_End_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.mjs");\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar fetcher = function(url) {\n    return fetch(url).then(function(r) {\n        return r.json();\n    });\n};\nfunction JobComponent() {\n    _s();\n    // Using the hook\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_3__["default"])("/api/jobs", fetcher), data = ref.data, error = ref.error;\n    // Error and loading states\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n        children: "Request Failed"\n    }, void 0, false, {\n        fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n        lineNumber: 12,\n        columnNumber: 19\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n        children: "Loading..."\n    }, void 0, false, {\n        fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n        lineNumber: 13,\n        columnNumber: 19\n    }, this);\n    var contests = data.data.contests;\n    console.log(contests);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n        className: "flex ",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {\n            className: "w-full border-transparent bg-white pb-8 text-gray-900",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {\n                href: "/job-details",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {\n                    className: "w-full px-6 py-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-50 hover:shadow",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n                        className: "flex flex-row",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n                                className: "basis-5/6",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {\n                                        className: "text-xl font-semibold",\n                                        children: "Job Name"\n                                    }, void 0, false, {\n                                        fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                        lineNumber: 27,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {\n                                        className: "mb-2 pr-5 text-sm",\n                                        children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."\n                                    }, void 0, false, {\n                                        fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                        lineNumber: 28,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n                                        className: "space-x-2",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {\n                                                className: "spacing-5 inline-block whitespace-nowrap rounded-md bg-violet-600 py-1 px-2.5 text-center align-baseline text-xs leading-none text-white",\n                                                children: "Full-Time"\n                                            }, void 0, false, {\n                                                fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                                lineNumber: 34,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {\n                                                className: "inline-block whitespace-nowrap rounded-md bg-cyan-500 py-1 px-2.5 text-center align-baseline text-xs leading-none text-white",\n                                                children: "Dentist"\n                                            }, void 0, false, {\n                                                fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                                lineNumber: 37,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {\n                                                className: "inline-block whitespace-nowrap rounded-md bg-indigo-600 py-1 px-2.5 text-center align-baseline text-xs leading-none text-white",\n                                                children: "Selangor"\n                                            }, void 0, false, {\n                                                fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                                lineNumber: 40,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {\n                                                className: "inline-block whitespace-nowrap rounded-md py-1 px-2.5 text-center align-baseline text-xs leading-none text-green-600",\n                                                children: "Posted: 19 Hours Ago"\n                                            }, void 0, false, {\n                                                fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                                lineNumber: 43,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                        lineNumber: 33,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {\n                                className: "flex basis-1/6 items-center justify-center border-l-2 border-slate-100",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {\n                                    className: "inline-block whitespace-nowrap rounded-md bg-green-200 px-2.5 py-2.5 text-center align-baseline leading-none text-green-700",\n                                    children: "RM 1000"\n                                }, void 0, false, {\n                                    fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                    lineNumber: 49,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: "/Users/paanjoe/Desktop/Projects/LocumStreet/Front-End/src/components/jobs/jobcomponent.tsx",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n};\n_s(JobComponent, "r2QYs02BSrn+Eu/1uMGZi8N+HnQ=", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_3__["default"]\n    ];\n});\n_c = JobComponent;\nfunction loadJobs() {\n    return _loadJobs.apply(this, arguments);\n}\nfunction _loadJobs() {\n    _loadJobs = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])(_Users_paanjoe_Desktop_Projects_LocumStreet_Front_End_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var res, data;\n        return _Users_paanjoe_Desktop_Projects_LocumStreet_Front_End_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch("/api/jobs");\n                case 2:\n                    res = _ctx.sent;\n                    _ctx.next = 5;\n                    return res.json();\n                case 5:\n                    data = _ctx.sent;\n                    return _ctx.abrupt("return", data);\n                case 7:\n                case "end":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _loadJobs.apply(this, arguments);\n}\nvar _c;\n$RefreshReg$(_c, "JobComponent");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9qb2JzL2pvYmNvbXBvbmVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBMEI7QUFFRDs7QUFFekIsSUFBTUUsT0FBTyxHQUFHLFNBQUNDLEdBQXNCO1dBQUtDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDLENBQUNFLElBQUksQ0FBQ0MsU0FBQUEsQ0FBQztlQUFJQSxDQUFDLENBQUNDLElBQUksRUFBRTtLQUFBLENBQUM7Q0FBQTtBQUUzRCxTQUFTQyxZQUFZLEdBQUc7O0lBQ3ZDLGlCQUFpQjtJQUNqQixJQUF3QlAsR0FBNEIsR0FBNUJBLCtDQUFNLENBQUMsV0FBVyxFQUFFQyxPQUFPLENBQUMsRUFBNUNPLElBQUksR0FBWVIsR0FBNEIsQ0FBNUNRLElBQUksRUFBRUMsS0FBSyxHQUFLVCxHQUE0QixDQUF0Q1MsS0FBSztJQUVuQiwyQkFBMkI7SUFDM0IsSUFBSUEsS0FBSyxFQUFFLHFCQUFPLDhEQUFDQyxLQUFHO2tCQUFDLGdCQUFjOzs7OztZQUFNLENBQUM7SUFDNUMsSUFBSSxDQUFDRixJQUFJLEVBQUUscUJBQU8sOERBQUNFLEtBQUc7a0JBQUMsWUFBVTs7Ozs7WUFBTSxDQUFDO0lBR3RDLElBQU0sUUFBVSxHQUFLRixJQUFJLENBQUNBLElBQUksQ0FBdEJHLFFBQVE7SUFDaEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixRQUFRLENBQUM7SUFFckIscUJBQ0UsOERBQUNELEtBQUc7UUFBQ0ksU0FBUyxFQUFDLE9BQU87a0JBQ3BCLDRFQUFDQyxJQUFFO1lBQUNELFNBQVMsRUFBQyx1REFBdUQ7c0JBRW5FLDRFQUFDRSxHQUFDO2dCQUFDQyxJQUFJLEVBQUMsY0FBYzswQkFDcEIsNEVBQUNDLElBQUU7b0JBQUNKLFNBQVMsRUFBQyx3R0FBeUc7OEJBQ3JILDRFQUFDSixLQUFHO3dCQUFDSSxTQUFTLEVBQUMsZUFBZTs7MENBQzVCLDhEQUFDSixLQUFHO2dDQUFDSSxTQUFTLEVBQUMsV0FBVzs7a0RBQ3hCLDhEQUFDSyxHQUFDO3dDQUFDTCxTQUFTLEVBQUMsdUJBQXVCO2tEQUFDLFVBQVE7Ozs7OzRDQUFJO2tEQUNqRCw4REFBQ0ssR0FBQzt3Q0FBQ0wsU0FBUyxFQUFDLG1CQUFtQjtrREFBQywwSkFJakM7Ozs7OzRDQUFJO2tEQUNKLDhEQUFDSixLQUFHO3dDQUFDSSxTQUFTLEVBQUMsV0FBVzs7MERBQ3hCLDhEQUFDTSxNQUFJO2dEQUFDTixTQUFTLEVBQUMsMElBQTBJOzBEQUFDLFdBRTNKOzs7OztvREFBTzswREFDUCw4REFBQ00sTUFBSTtnREFBQ04sU0FBUyxFQUFDLDhIQUE4SDswREFBQyxTQUUvSTs7Ozs7b0RBQU87MERBQ1AsOERBQUNNLE1BQUk7Z0RBQUNOLFNBQVMsRUFBQyxnSUFBZ0k7MERBQUMsVUFFako7Ozs7O29EQUFPOzBEQUNQLDhEQUFDTSxNQUFJO2dEQUFDTixTQUFTLEVBQUMsc0hBQXNIOzBEQUFDLHNCQUV2STs7Ozs7b0RBQU87Ozs7Ozs0Q0FDSDs7Ozs7O29DQUNGOzBDQUNOLDhEQUFDSixLQUFHO2dDQUFDSSxTQUFTLEVBQUMsd0VBQXdFOzBDQUNyRiw0RUFBQ00sTUFBSTtvQ0FBQ04sU0FBUyxFQUFDLDZIQUE2SDs4Q0FBQyxTQUU5STs7Ozs7d0NBQU87Ozs7O29DQUNIOzs7Ozs7NEJBQ0Y7Ozs7O3dCQUNIOzs7OztvQkFDSDs7Ozs7Z0JBQ0Q7Ozs7O1lBQ0QsQ0FDTjtDQUNIO0dBcER1QlAsWUFBWTs7UUFFWlAsMkNBQU07OztBQUZOTyxLQUFBQSxZQUFZO0FBd0Q3QixTQUFlYyxRQUFRO1dBQVJBLFNBQVE7Q0FJN0I7U0FKcUJBLFNBQVE7SUFBUkEsU0FBUSxHQUF2Qix3UUFBMEI7WUFDekJDLEdBQUcsRUFDSGQsSUFBSTs7Ozs7MkJBRFFMLEtBQUssQ0FBQyxXQUFXLENBQUM7O29CQUE5Qm1CLEdBQUcsWUFBMkI7OzJCQUNqQkEsR0FBRyxDQUFDaEIsSUFBSSxFQUFFOztvQkFBdkJFLElBQUksWUFBbUI7aURBQ3RCQSxJQUFJOzs7Ozs7S0FDWjtXQUpxQmEsU0FBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9qb2JzL2pvYmNvbXBvbmVudC50c3g/MWFkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSaUNoYXRDaGVja0xpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuXG5jb25zdCBmZXRjaGVyID0gKHVybDogUmVxdWVzdEluZm8gfCBVUkwpID0+IGZldGNoKHVybCkudGhlbihyID0+IHIuanNvbigpKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBKb2JDb21wb25lbnQoKSB7XG4vLyBVc2luZyB0aGUgaG9va1xuY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKCcvYXBpL2pvYnMnLCBmZXRjaGVyKTtcblxuLy8gRXJyb3IgYW5kIGxvYWRpbmcgc3RhdGVzXG5pZiAoZXJyb3IpIHJldHVybiA8ZGl2PlJlcXVlc3QgRmFpbGVkPC9kaXY+O1xuaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXG5cbiAgY29uc3QgeyBjb250ZXN0cyB9ID0gZGF0YS5kYXRhO1xuICBjb25zb2xlLmxvZyhjb250ZXN0cylcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4ICc+XG4gICAgICA8dWwgY2xhc3NOYW1lPSd3LWZ1bGwgYm9yZGVyLXRyYW5zcGFyZW50IGJnLXdoaXRlIHBiLTggdGV4dC1ncmF5LTkwMCc+XG4gICAgICAgIFxuICAgICAgICA8YSBocmVmPScvam9iLWRldGFpbHMnPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3ctZnVsbCBweC02IHB5LTIgIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6YmctZ3JheS01MCBob3ZlcjpzaGFkb3cnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFzaXMtNS82Jz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQteGwgZm9udC1zZW1pYm9sZCc+Sm9iIE5hbWU8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtYi0yIHByLTUgdGV4dC1zbSc+XG4gICAgICAgICAgICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kXG4gICAgICAgICAgICAgICAgICB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5XG4gICAgICAgICAgICAgICAgICBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLi4uXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGFjZS14LTInPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzcGFjaW5nLTUgaW5saW5lLWJsb2NrIHdoaXRlc3BhY2Utbm93cmFwIHJvdW5kZWQtbWQgYmctdmlvbGV0LTYwMCBweS0xIHB4LTIuNSB0ZXh0LWNlbnRlciBhbGlnbi1iYXNlbGluZSB0ZXh0LXhzIGxlYWRpbmctbm9uZSB0ZXh0LXdoaXRlJz5cbiAgICAgICAgICAgICAgICAgICAgRnVsbC1UaW1lXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lubGluZS1ibG9jayB3aGl0ZXNwYWNlLW5vd3JhcCByb3VuZGVkLW1kIGJnLWN5YW4tNTAwIHB5LTEgcHgtMi41IHRleHQtY2VudGVyIGFsaWduLWJhc2VsaW5lIHRleHQteHMgbGVhZGluZy1ub25lIHRleHQtd2hpdGUnPlxuICAgICAgICAgICAgICAgICAgICBEZW50aXN0XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lubGluZS1ibG9jayB3aGl0ZXNwYWNlLW5vd3JhcCByb3VuZGVkLW1kIGJnLWluZGlnby02MDAgcHktMSBweC0yLjUgdGV4dC1jZW50ZXIgYWxpZ24tYmFzZWxpbmUgdGV4dC14cyBsZWFkaW5nLW5vbmUgdGV4dC13aGl0ZSc+XG4gICAgICAgICAgICAgICAgICAgIFNlbGFuZ29yXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lubGluZS1ibG9jayB3aGl0ZXNwYWNlLW5vd3JhcCByb3VuZGVkLW1kIHB5LTEgcHgtMi41IHRleHQtY2VudGVyIGFsaWduLWJhc2VsaW5lIHRleHQteHMgbGVhZGluZy1ub25lIHRleHQtZ3JlZW4tNjAwJz5cbiAgICAgICAgICAgICAgICAgICAgUG9zdGVkOiAxOSBIb3VycyBBZ29cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGJhc2lzLTEvNiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYm9yZGVyLWwtMiBib3JkZXItc2xhdGUtMTAwJz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lubGluZS1ibG9jayB3aGl0ZXNwYWNlLW5vd3JhcCByb3VuZGVkLW1kIGJnLWdyZWVuLTIwMCBweC0yLjUgcHktMi41IHRleHQtY2VudGVyIGFsaWduLWJhc2VsaW5lIGxlYWRpbmctbm9uZSB0ZXh0LWdyZWVuLTcwMCc+XG4gICAgICAgICAgICAgICAgICBSTSAxMDAwXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEpvYnMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2pvYnMnKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVNXUiIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsIkpvYkNvbXBvbmVudCIsImRhdGEiLCJlcnJvciIsImRpdiIsImNvbnRlc3RzIiwiY29uc29sZSIsImxvZyIsImNsYXNzTmFtZSIsInVsIiwiYSIsImhyZWYiLCJsaSIsInAiLCJzcGFuIiwibG9hZEpvYnMiLCJyZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/jobs/jobcomponent.tsx\n'
        )
      );

      /***/
    },
});
