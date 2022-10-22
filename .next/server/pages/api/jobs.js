'use strict';
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
  exports.id = 'pages/api/jobs';
  exports.ids = ['pages/api/jobs'];
  exports.modules = {
    /***/ pocketbase:
      /*!*****************************!*\
  !*** external "pocketbase" ***!
  \*****************************/
      /***/ (module) => {
        module.exports = import('pocketbase');

        /***/
      },

    /***/ '(api)/./environment.ts':
      /*!************************!*\
  !*** ./environment.ts ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "production": () => (/* binding */ production)\n/* harmony export */ });\nconst production = {\n    production: true,\n    baseUrl: "https://locumstreet.fly.dev",\n    Google_ClientID: "34998620114-rah2h9r09ugdiinm5ehaekc8ijleu6ag.apps.googleusercontent.com",\n    Google_SecretID: "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",\n    Facebook_ClientID: "559742852486035",\n    Facebook_SecretID: "35686ce94d0c85f6ab91da3f7c1a18d6"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9lbnZpcm9ubWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsVUFBVSxHQUFHO0lBQ3hCQSxVQUFVLEVBQUUsSUFBSTtJQUNoQkMsT0FBTyxFQUFFLDZCQUE2QjtJQUN0Q0MsZUFBZSxFQUFFLHlFQUF5RTtJQUMxRkMsZUFBZSxFQUFFLHFDQUFxQztJQUN0REMsaUJBQWlCLEVBQUUsaUJBQWlCO0lBQ3BDQyxpQkFBaUIsRUFBRSxrQ0FBa0M7Q0FDdEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLW5leHRqcy10YWlsd2luZC1zdGFydGVyLy4vZW52aXJvbm1lbnQudHM/ODZkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvZHVjdGlvbiA9IHtcbiAgcHJvZHVjdGlvbjogdHJ1ZSxcbiAgYmFzZVVybDogJ2h0dHBzOi8vbG9jdW1zdHJlZXQuZmx5LmRldicsXG4gIEdvb2dsZV9DbGllbnRJRDogJzM0OTk4NjIwMTE0LXJhaDJoOXIwOXVnZGlpbm01ZWhhZWtjOGlqbGV1NmFnLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJyxcbiAgR29vZ2xlX1NlY3JldElEOiAnR09DU1BYLUVPU2VGQWtnTGtHaXZ2cUNnbEZ5LXRuSlpoaHQnLFxuICBGYWNlYm9va19DbGllbnRJRDogJzU1OTc0Mjg1MjQ4NjAzNScsXG4gIEZhY2Vib29rX1NlY3JldElEOiAnMzU2ODZjZTk0ZDBjODVmNmFiOTFkYTNmN2MxYTE4ZDYnXG59O1xuIl0sIm5hbWVzIjpbInByb2R1Y3Rpb24iLCJiYXNlVXJsIiwiR29vZ2xlX0NsaWVudElEIiwiR29vZ2xlX1NlY3JldElEIiwiRmFjZWJvb2tfQ2xpZW50SUQiLCJGYWNlYm9va19TZWNyZXRJRCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./environment.ts\n'
        );

        /***/
      },

    /***/ '(api)/./src/pages/api/jobs.ts':
      /*!*******************************!*\
  !*** ./src/pages/api/jobs.ts ***!
  \*******************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pocketbase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pocketbase */ "pocketbase");\n/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environment */ "(api)/./environment.ts");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pocketbase__WEBPACK_IMPORTED_MODULE_0__]);\npocketbase__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    // We want to add authorization for security\n    // We want to know what is the request method\n    const method = req.method;\n    // We want to set our base API URL\n    const baseUrl = _environment__WEBPACK_IMPORTED_MODULE_1__.production.baseUrl;\n    // Initialize our back end apps\n    const client = new pocketbase__WEBPACK_IMPORTED_MODULE_0__["default"](baseUrl);\n    // Identify which operation should be executed\n    switch(method){\n        // Get All Records\n        case "GET":\n            try {\n                const records = await client.records.getFullList("jobs", 200, {\n                    sort: "-jobDatePosted",\n                    filter: "listingStatus != false",\n                    expand: "jobOwnerID, jobImageArr"\n                });\n                return res.status(200).json(records);\n            } catch (err) {\n                return res.status(400).json(err);\n            }\n        // Create New Records\n        case "POST":\n            try {\n                const create = await req.body;\n                const record = await client.records.create("jobs", create);\n                return res.status(201).json({\n                    success: true,\n                    data: record\n                });\n            } catch (err1) {\n                return res.status(400).json(err1);\n            }\n        // If something went wrong / header request not valid\n        default:\n            res.setHeader("Allow", [\n                "GET",\n                "POST"\n            ]);\n            return res.status(405).json(`Method ${method} Not Allowed`);\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2pvYnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ29DO0FBQ2M7QUFFbEQsNkJBQWUsMENBQWdCRSxHQUFtQixFQUFFQyxHQUFvQixFQUFFO0lBQ3hFLDRDQUE0QztJQUU1Qyw2Q0FBNkM7SUFDN0MsTUFBTUMsTUFBTSxHQUFHRixHQUFHLENBQUNFLE1BQU07SUFFekIsa0NBQWtDO0lBQ2xDLE1BQU1DLE9BQU8sR0FBR0osNERBQWtCO0lBRWxDLCtCQUErQjtJQUMvQixNQUFNSyxNQUFNLEdBQUcsSUFBSU4sa0RBQVUsQ0FBQ0ssT0FBTyxDQUFDO0lBRXRDLDhDQUE4QztJQUM5QyxPQUFRRCxNQUFNO1FBQ1osa0JBQWtCO1FBQ2xCLEtBQUssS0FBSztZQUNSLElBQUk7Z0JBQ0YsTUFBTUcsT0FBTyxHQUFHLE1BQU1ELE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxXQUFXLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtvQkFDNURDLElBQUksRUFBRSxnQkFBZ0I7b0JBQ3RCQyxNQUFNLEVBQUUsd0JBQXdCO29CQUNoQ0MsTUFBTSxFQUFFLHlCQUF5QjtpQkFDbEMsQ0FBQztnQkFDRixPQUFPUixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTixPQUFPLENBQUMsQ0FBQzthQUN0QyxDQUFDLE9BQU9PLEdBQUcsRUFBRTtnQkFDWixPQUFPWCxHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQzthQUNsQztRQUVILHFCQUFxQjtRQUNyQixLQUFLLE1BQU07WUFDVCxJQUFJO2dCQUNGLE1BQU1DLE1BQU0sR0FBRyxNQUFNYixHQUFHLENBQUNjLElBQUk7Z0JBQzdCLE1BQU1DLE1BQU0sR0FBRyxNQUFNWCxNQUFNLENBQUNDLE9BQU8sQ0FBQ1EsTUFBTSxDQUFDLE1BQU0sRUFBRUEsTUFBTSxDQUFDO2dCQUMxRCxPQUFPWixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFSyxPQUFPLEVBQUUsSUFBSTtvQkFBRUMsSUFBSSxFQUFFRixNQUFNO2lCQUFFLENBQUMsQ0FBQzthQUM5RCxDQUFDLE9BQU9ILElBQUcsRUFBRTtnQkFDWixPQUFPWCxHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDQyxJQUFHLENBQUMsQ0FBQzthQUNsQztRQUVILHFEQUFxRDtRQUNyRDtZQUNFWCxHQUFHLENBQUNpQixTQUFTLENBQUMsT0FBTyxFQUFFO2dCQUFDLEtBQUs7Z0JBQUUsTUFBTTthQUFDLENBQUMsQ0FBQztZQUN4QyxPQUFPakIsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRVQsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7S0FDL0Q7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLW5leHRqcy10YWlsd2luZC1zdGFydGVyLy4vc3JjL3BhZ2VzL2FwaS9qb2JzLnRzP2M2OTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IFBvY2tldEJhc2UgZnJvbSAncG9ja2V0YmFzZSc7XG5pbXBvcnQgeyBwcm9kdWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vZW52aXJvbm1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgLy8gV2Ugd2FudCB0byBhZGQgYXV0aG9yaXphdGlvbiBmb3Igc2VjdXJpdHlcblxuICAvLyBXZSB3YW50IHRvIGtub3cgd2hhdCBpcyB0aGUgcmVxdWVzdCBtZXRob2RcbiAgY29uc3QgbWV0aG9kID0gcmVxLm1ldGhvZDtcblxuICAvLyBXZSB3YW50IHRvIHNldCBvdXIgYmFzZSBBUEkgVVJMXG4gIGNvbnN0IGJhc2VVcmwgPSBwcm9kdWN0aW9uLmJhc2VVcmw7XG5cbiAgLy8gSW5pdGlhbGl6ZSBvdXIgYmFjayBlbmQgYXBwc1xuICBjb25zdCBjbGllbnQgPSBuZXcgUG9ja2V0QmFzZShiYXNlVXJsKTtcblxuICAvLyBJZGVudGlmeSB3aGljaCBvcGVyYXRpb24gc2hvdWxkIGJlIGV4ZWN1dGVkXG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgLy8gR2V0IEFsbCBSZWNvcmRzXG4gICAgY2FzZSAnR0VUJzpcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBjbGllbnQucmVjb3Jkcy5nZXRGdWxsTGlzdCgnam9icycsIDIwMCwge1xuICAgICAgICAgIHNvcnQ6ICctam9iRGF0ZVBvc3RlZCcsXG4gICAgICAgICAgZmlsdGVyOiAnbGlzdGluZ1N0YXR1cyAhPSBmYWxzZScsXG4gICAgICAgICAgZXhwYW5kOiAnam9iT3duZXJJRCwgam9iSW1hZ2VBcnInLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlY29yZHMpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihlcnIpO1xuICAgICAgfVxuXG4gICAgLy8gQ3JlYXRlIE5ldyBSZWNvcmRzXG4gICAgY2FzZSAnUE9TVCc6XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjcmVhdGUgPSBhd2FpdCByZXEuYm9keTtcbiAgICAgICAgY29uc3QgcmVjb3JkID0gYXdhaXQgY2xpZW50LnJlY29yZHMuY3JlYXRlKCdqb2JzJywgY3JlYXRlKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVjb3JkIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihlcnIpO1xuICAgICAgfVxuXG4gICAgLy8gSWYgc29tZXRoaW5nIHdlbnQgd3JvbmcgLyBoZWFkZXIgcmVxdWVzdCBub3QgdmFsaWRcbiAgICBkZWZhdWx0OlxuICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ0dFVCcsICdQT1NUJ10pO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKGBNZXRob2QgJHttZXRob2R9IE5vdCBBbGxvd2VkYCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQb2NrZXRCYXNlIiwicHJvZHVjdGlvbiIsInJlcSIsInJlcyIsIm1ldGhvZCIsImJhc2VVcmwiLCJjbGllbnQiLCJyZWNvcmRzIiwiZ2V0RnVsbExpc3QiLCJzb3J0IiwiZmlsdGVyIiwiZXhwYW5kIiwic3RhdHVzIiwianNvbiIsImVyciIsImNyZWF0ZSIsImJvZHkiLCJyZWNvcmQiLCJzdWNjZXNzIiwiZGF0YSIsInNldEhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/jobs.ts\n'
        );

        /***/
      },
  };
  // load runtime
  var __webpack_require__ = require('../../webpack-api-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_exec__('(api)/./src/pages/api/jobs.ts');
  module.exports = __webpack_exports__;
})();
