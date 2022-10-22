"use strict";
(() => {
var exports = {};
exports.id = 283;
exports.ids = [283];
exports.modules = {

/***/ 3895:
/***/ ((module) => {

module.exports = import("pocketbase");;

/***/ }),

/***/ 2092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ production)
/* harmony export */ });
const production = {
    production: true,
    baseUrl: "https://locumstreet.fly.dev",
    Google_ClientID: "34998620114-rah2h9r09ugdiinm5ehaekc8ijleu6ag.apps.googleusercontent.com",
    Google_SecretID: "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",
    Facebook_ClientID: "559742852486035",
    Facebook_SecretID: "35686ce94d0c85f6ab91da3f7c1a18d6"
};


/***/ }),

/***/ 2350:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pocketbase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3895);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2092);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pocketbase__WEBPACK_IMPORTED_MODULE_0__]);
pocketbase__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    // We want to add authorization for security
    // We want to know what is the request method
    const method = req.method;
    // We want to set our base API URL
    const baseUrl = _environment__WEBPACK_IMPORTED_MODULE_1__/* .production.baseUrl */ .C.baseUrl;
    // Initialize our back end apps
    const client = new pocketbase__WEBPACK_IMPORTED_MODULE_0__["default"](baseUrl);
    // Identify which operation should be executed
    switch(method){
        // We want to get all records
        case "GET":
            try {
                const records = await client.records.getFullList("profiles", 200, {
                    sort: "-created",
                    expand: "jobOwnerID"
                });
                return res.status(200).json(records);
            } catch (err) {
                return res.status(400).json(err);
            }
        // We want to create new records
        case "POST":
            try {
                const create = await req.body;
                const record = await client.records.create("profiles", create);
                return res.status(201).json({
                    success: true,
                    data: record
                });
            } catch (err1) {
                return res.status(400).json(err1);
            }
        // If something went wrong / header request not valid
        default:
            res.setHeader("Allow", [
                "GET",
                "POST"
            ]);
            return res.status(405).json(`Method ${method} Not Allowed`);
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2350));
module.exports = __webpack_exports__;

})();