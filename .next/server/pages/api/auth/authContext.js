"use strict";
(() => {
var exports = {};
exports.id = 273;
exports.ids = [273];
exports.modules = {

/***/ 3895:
/***/ ((module) => {

module.exports = import("pocketbase");;

/***/ }),

/***/ 4976:
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
    // Try check the method
    const method = req.method;
    // Get the login method from the body
    const loginMethod = "google";
    // Get API URL
    const baseUrl = process.env.baseUrl;
    // Init back-end
    const client = new pocketbase__WEBPACK_IMPORTED_MODULE_0__["default"](baseUrl);
    // Set Redirect page to /redirect
    const redirectUrl = process.env.OAuth_Redirect_URL;
    // Make sure the api calls method is valid
    switch(method){
        case "GET":
            // Now we want to identify which loginMethod we want to use to authenticate
            switch(loginMethod){
                case "google" || 0:
                    try {
                        const getOauthList = await await (await client.users.listAuthMethods()).authProviders;
                        const provider = getOauthList.find((providerObj)=>{
                            return providerObj.name = loginMethod;
                        });
                        const loginURL = provider?.authUrl + redirectUrl;
                        return res.status(200).json(loginURL);
                    } catch (err) {
                        return res.status(400).json(err);
                    }
                default:
                    return res.status(405).json("There was some issue in authenticating. Please try again.");
            }
        default:
            res.setHeader("Allow", [
                "GET"
            ]);
            return res.status(405).json(`Method ${method} not allowed.`);
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
var __webpack_exports__ = (__webpack_exec__(4976));
module.exports = __webpack_exports__;

})();