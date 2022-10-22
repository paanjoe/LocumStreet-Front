"use strict";
exports.id = 968;
exports.ids = [968];
exports.modules = {

/***/ 6968:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_clsxm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1612);
/* harmony import */ var _components_links_UnstyledLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7466);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_clsxm__WEBPACK_IMPORTED_MODULE_2__, _components_links_UnstyledLink__WEBPACK_IMPORTED_MODULE_3__]);
([_lib_clsxm__WEBPACK_IMPORTED_MODULE_2__, _components_links_UnstyledLink__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




var ButtonVariant;
(function(ButtonVariant) {
    ButtonVariant[ButtonVariant["primary"] = 0] = "primary";
    ButtonVariant[ButtonVariant["outline"] = 1] = "outline";
    ButtonVariant[ButtonVariant["ghost"] = 2] = "ghost";
    ButtonVariant[ButtonVariant["light"] = 3] = "light";
    ButtonVariant[ButtonVariant["dark"] = 4] = "dark";
})(ButtonVariant || (ButtonVariant = {}));
const ButtonLink = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ children , className , variant ="primary" , isDarkBg =false , ...rest }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_links_UnstyledLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        ref: ref,
        ...rest,
        className: (0,_lib_clsxm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("inline-flex items-center rounded px-4 py-2 font-semibold", "focus:outline-none focus-visible:ring focus-visible:ring-primary-500", "shadow-sm", "transition-colors duration-75", //#region  //*=========== Variants ===========
        [
            variant === "primary" && [
                "bg-primary-500 text-white",
                "border border-primary-600",
                "hover:bg-primary-600 hover:text-white",
                "active:bg-primary-500",
                "disabled:bg-primary-400 disabled:hover:bg-primary-400", 
            ],
            variant === "outline" && [
                "text-primary-500",
                "border border-primary-500",
                "hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100",
                isDarkBg && "hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800", 
            ],
            variant === "ghost" && [
                "text-primary-500",
                "shadow-none",
                "hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100",
                isDarkBg && "hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800", 
            ],
            variant === "light" && [
                "bg-white text-dark ",
                "border border-gray-300",
                "hover:bg-gray-100 hover:text-dark",
                "active:bg-white/80 disabled:bg-gray-200", 
            ],
            variant === "dark" && [
                "bg-gray-900 text-white",
                "border border-gray-600",
                "hover:bg-gray-800 active:bg-gray-700 disabled:bg-gray-700", 
            ], 
        ], //#endregion  //*======== Variants ===========
        "disabled:cursor-not-allowed", className),
        children: children
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonLink);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;