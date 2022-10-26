"use strict";
(() => {
var exports = {};
exports.id = 183;
exports.ids = [183];
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
    Facebook_SecretID: "35686ce94d0c85f6ab91da3f7c1a18d6",
    BuyMeCoffee_Link: "https://www.buymeacoffee.com/paanjoe",
    Metamask_ID: "0xF70ccD734C779B0a852E3Ab3c2657D7a4a981462",
    JWT_SecretID: "e302f64d73f4e8fa91177c47ccf95fa1",
    OAuth_Redirect_URL: "http://localhost:3000"
};


/***/ }),

/***/ 9365:
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
    switch(method){
        // We want to get record based on Query
        case "GET":
            try {
                const records = await client.records.getOne("profiles", `${req.query.id}`, {
                    sort: "-created",
                    expand: "jobOwnerID"
                });
                return res.status(200).json(records);
            } catch (err) {
                return res.status(400).json(err);
            }
        // We want to update the record as per id
        case "PUT":
            try {
                const update = await req.body;
                const record = await client.records.update("profiles", `${req.query.id}`, update);
                return res.status(200).json({
                    success: true,
                    data: record
                });
            } catch (err1) {
                return res.status(400).json(err1);
            }
        // We want to delete the record as per id
        case "DELETE":
            try {
                const remove = await req.body;
                const record1 = await client.records.delete("profiles", `${req.query.id}`, remove);
                return res.status(200).json({
                    success: true,
                    data: req.query.id
                });
            } catch (err2) {
                return res.status(400).json(err2);
            }
        // If something went wrong / Wrong operation request
        default:
            res.setHeader("Allow", [
                "GET",
                "PUT",
                "DELETE"
            ]);
            return res.status(405).json(`Method ${method} Not Allowed`);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9365));
module.exports = __webpack_exports__;

})();