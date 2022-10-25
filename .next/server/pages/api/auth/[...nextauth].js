"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth/next":
/*!*********************************!*\
  !*** external "next-auth/next" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./environment.ts":
/*!************************!*\
  !*** ./environment.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"production\": () => (/* binding */ production)\n/* harmony export */ });\nconst production = {\n    production: true,\n    baseUrl: \"https://locumstreet.fly.dev\",\n    Google_ClientID: \"34998620114-rah2h9r09ugdiinm5ehaekc8ijleu6ag.apps.googleusercontent.com\",\n    Google_SecretID: \"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\",\n    Facebook_ClientID: \"559742852486035\",\n    Facebook_SecretID: \"35686ce94d0c85f6ab91da3f7c1a18d6\",\n    BuyMeCoffee_Link: \"https://www.buymeacoffee.com/paanjoe\",\n    Metamask_ID: \"0xF70ccD734C779B0a852E3Ab3c2657D7a4a981462\",\n    JWT_SecretID: \"e302f64d73f4e8fa91177c47ccf95fa1\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9lbnZpcm9ubWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsVUFBVSxHQUFHO0lBQ3hCQSxVQUFVLEVBQUUsSUFBSTtJQUNoQkMsT0FBTyxFQUNMLDZCQUE2QjtJQUMvQkMsZUFBZSxFQUNiLHlFQUF5RTtJQUMzRUMsZUFBZSxFQUNiLHFDQUFxQztJQUN2Q0MsaUJBQWlCLEVBQ2YsaUJBQWlCO0lBQ25CQyxpQkFBaUIsRUFDZixrQ0FBa0M7SUFDcENDLGdCQUFnQixFQUNkLHNDQUFzQztJQUN4Q0MsV0FBVyxFQUNULDRDQUE0QztJQUM5Q0MsWUFBWSxFQUNWLGtDQUFrQztDQUNyQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtbmV4dGpzLXRhaWx3aW5kLXN0YXJ0ZXIvLi9lbnZpcm9ubWVudC50cz84NmQ0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9kdWN0aW9uID0ge1xuICBwcm9kdWN0aW9uOiB0cnVlLFxuICBiYXNlVXJsOiBcbiAgICAnaHR0cHM6Ly9sb2N1bXN0cmVldC5mbHkuZGV2JyxcbiAgR29vZ2xlX0NsaWVudElEOlxuICAgICczNDk5ODYyMDExNC1yYWgyaDlyMDl1Z2RpaW5tNWVoYWVrYzhpamxldTZhZy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbScsXG4gIEdvb2dsZV9TZWNyZXRJRDogXG4gICAgJ0dPQ1NQWC1FT1NlRkFrZ0xrR2l2dnFDZ2xGeS10bkpaaGh0JyxcbiAgRmFjZWJvb2tfQ2xpZW50SUQ6IFxuICAgICc1NTk3NDI4NTI0ODYwMzUnLFxuICBGYWNlYm9va19TZWNyZXRJRDogXG4gICAgJzM1Njg2Y2U5NGQwYzg1ZjZhYjkxZGEzZjdjMWExOGQ2JyxcbiAgQnV5TWVDb2ZmZWVfTGluazogXG4gICAgJ2h0dHBzOi8vd3d3LmJ1eW1lYWNvZmZlZS5jb20vcGFhbmpvZScsXG4gIE1ldGFtYXNrX0lEOiBcbiAgICAnMHhGNzBjY0Q3MzRDNzc5QjBhODUyRTNBYjNjMjY1N0Q3YTRhOTgxNDYyJyxcbiAgSldUX1NlY3JldElEOiBcbiAgICAnZTMwMmY2NGQ3M2Y0ZThmYTkxMTc3YzQ3Y2NmOTVmYTEnXG59O1xuIl0sIm5hbWVzIjpbInByb2R1Y3Rpb24iLCJiYXNlVXJsIiwiR29vZ2xlX0NsaWVudElEIiwiR29vZ2xlX1NlY3JldElEIiwiRmFjZWJvb2tfQ2xpZW50SUQiLCJGYWNlYm9va19TZWNyZXRJRCIsIkJ1eU1lQ29mZmVlX0xpbmsiLCJNZXRhbWFza19JRCIsIkpXVF9TZWNyZXRJRCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./environment.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environment */ \"(api)/./environment.ts\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth_next__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientID: _environment__WEBPACK_IMPORTED_MODULE_2__.production.Google_ClientID,\n            clientSecret: _environment__WEBPACK_IMPORTED_MODULE_2__.production.Google_SecretID\n        })\n    ],\n    secret: _environment__WEBPACK_IMPORTED_MODULE_2__.production.JWT_SecretID\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBc0M7QUFDa0I7QUFDSDtBQUdyRCxpRUFBZUEscURBQVEsQ0FBQztJQUNwQkcsU0FBUyxFQUFFO1FBQ1BGLGlFQUFjLENBQUM7WUFDWEcsUUFBUSxFQUFFRixvRUFBMEI7WUFDcENJLFlBQVksRUFBRUosb0VBQTBCO1NBQzNDLENBQUM7S0FDTDtJQUNETSxNQUFNLEVBQUVOLGlFQUF1QjtDQUNsQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtbmV4dGpzLXRhaWx3aW5kLXN0YXJ0ZXIvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz83OGFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoL25leHRcIjtcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcbmltcG9ydCB7IHByb2R1Y3Rpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9lbnZpcm9ubWVudCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICAgICAgICBjbGllbnRJRDogcHJvZHVjdGlvbi5Hb29nbGVfQ2xpZW50SUQsXG4gICAgICAgICAgICBjbGllbnRTZWNyZXQ6IHByb2R1Y3Rpb24uR29vZ2xlX1NlY3JldElEXG4gICAgICAgIH0pXG4gICAgXSxcbiAgICBzZWNyZXQ6IHByb2R1Y3Rpb24uSldUX1NlY3JldElEXG59KSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwicHJvZHVjdGlvbiIsInByb3ZpZGVycyIsImNsaWVudElEIiwiR29vZ2xlX0NsaWVudElEIiwiY2xpZW50U2VjcmV0IiwiR29vZ2xlX1NlY3JldElEIiwic2VjcmV0IiwiSldUX1NlY3JldElEIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();