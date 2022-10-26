"use strict";
(() => {
var exports = {};
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 3895:
/***/ ((module) => {

module.exports = import("pocketbase");;

/***/ }),

/***/ 7954:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pocketbase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3895);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pocketbase__WEBPACK_IMPORTED_MODULE_0__]);
pocketbase__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    // Get request method
    const method = req.method;
    // Load API URL
    const baseUrl = process.env.baseUrl;
    // Init client
    const client = new pocketbase__WEBPACK_IMPORTED_MODULE_0__["default"](baseUrl);
    // User object
    const user = {
        email: "test",
        password: "password",
        passwordConfirm: "test"
    };
    const tryLogin = await client.users.create(user);
    return res.status(200).json(tryLogin);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7954));
module.exports = __webpack_exports__;

})();