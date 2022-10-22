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
  exports.id = 'pages/api/job/[id]';
  exports.ids = ['pages/api/job/[id]'];
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
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "production": () => (/* binding */ production)\n/* harmony export */ });\nconst production = {\n    production: true,\n    baseUrl: "https://locumstreet.fly.dev"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9lbnZpcm9ubWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsVUFBVSxHQUFHO0lBQ3hCQSxVQUFVLEVBQUUsSUFBSTtJQUNoQkMsT0FBTyxFQUFFLDZCQUE2QjtDQUN2QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtbmV4dGpzLXRhaWx3aW5kLXN0YXJ0ZXIvLi9lbnZpcm9ubWVudC50cz84NmQ0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9kdWN0aW9uID0ge1xuICBwcm9kdWN0aW9uOiB0cnVlLFxuICBiYXNlVXJsOiAnaHR0cHM6Ly9sb2N1bXN0cmVldC5mbHkuZGV2Jyxcbn07XG4iXSwibmFtZXMiOlsicHJvZHVjdGlvbiIsImJhc2VVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./environment.ts\n'
        );

        /***/
      },

    /***/ '(api)/./src/pages/api/job/[id].ts':
      /*!***********************************!*\
  !*** ./src/pages/api/job/[id].ts ***!
  \***********************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pocketbase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pocketbase */ "pocketbase");\n/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environment */ "(api)/./environment.ts");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pocketbase__WEBPACK_IMPORTED_MODULE_0__]);\npocketbase__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    // We want to add authorization for security\n    // We want to know what is the request method\n    const method = req.method;\n    // We want to set our base API URL\n    const baseUrl = _environment__WEBPACK_IMPORTED_MODULE_1__.production.baseUrl;\n    // Initialize our back end apps\n    const client = new pocketbase__WEBPACK_IMPORTED_MODULE_0__["default"](baseUrl);\n    switch(method){\n        // We want to get record as per id\n        case "GET":\n            try {\n                const record = await client.records.getOne("jobs", `${req.query.id}`, {\n                    expand: "jobOwnerID, jobImageArr"\n                });\n                return res.status(200).json(record);\n            } catch (err) {\n                return res.status(400).json(err);\n            }\n        // We want to update record as per id\n        case "PUT":\n            try {\n                const update = await req.body;\n                const record1 = await client.records.update("jobs", `${req.query.id}`, update);\n                return res.status(200).json({\n                    success: true,\n                    data: record1\n                });\n            } catch (err1) {\n                return res.status(400).json(err1);\n            }\n        // We want to delete record as per id\n        case "DELETE":\n            try {\n                const remove = await req.body;\n                const record2 = await client.records.delete("jobs", `${req.query.id}`, remove);\n                return res.status(200).json({\n                    success: true,\n                    data: req.query.id\n                });\n            } catch (err2) {\n                return res.status(400).json(err2);\n            }\n        // If somehthing went wrong / Wrong operation command\n        default:\n            res.setHeader("Allow", [\n                "GET",\n                "PUT",\n                "DELETE"\n            ]);\n            return res.status(405).json(`Method ${method} Not Allowed`);\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVWLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0tBQy9EO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1uZXh0anMtdGFpbHdpbmQtc3RhcnRlci8uL3NyYy9wYWdlcy9hcGkvam9iL1tpZF0udHM/NzQ3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgUG9ja2V0QmFzZSBmcm9tICdwb2NrZXRiYXNlJztcbmltcG9ydCB7IHByb2R1Y3Rpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICAvLyBXZSB3YW50IHRvIGFkZCBhdXRob3JpemF0aW9uIGZvciBzZWN1cml0eVxuXG4gIC8vIFdlIHdhbnQgdG8ga25vdyB3aGF0IGlzIHRoZSByZXF1ZXN0IG1ldGhvZFxuICBjb25zdCBtZXRob2QgPSByZXEubWV0aG9kO1xuXG4gIC8vIFdlIHdhbnQgdG8gc2V0IG91ciBiYXNlIEFQSSBVUkxcbiAgY29uc3QgYmFzZVVybCA9IHByb2R1Y3Rpb24uYmFzZVVybDtcblxuICAvLyBJbml0aWFsaXplIG91ciBiYWNrIGVuZCBhcHBzXG4gIGNvbnN0IGNsaWVudCA9IG5ldyBQb2NrZXRCYXNlKGJhc2VVcmwpO1xuXG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgLy8gV2Ugd2FudCB0byBnZXQgcmVjb3JkIGFzIHBlciBpZFxuICAgIGNhc2UgJ0dFVCc6XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZWNvcmQgPSBhd2FpdCBjbGllbnQucmVjb3Jkcy5nZXRPbmUoJ2pvYnMnLCBgJHtyZXEucXVlcnkuaWR9YCwge1xuICAgICAgICAgIGV4cGFuZDogJ2pvYk93bmVySUQsIGpvYkltYWdlQXJyJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlY29yZCk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKGVycik7XG4gICAgICB9XG5cbiAgICAvLyBXZSB3YW50IHRvIHVwZGF0ZSByZWNvcmQgYXMgcGVyIGlkXG4gICAgY2FzZSAnUFVUJzpcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZSA9IGF3YWl0IHJlcS5ib2R5O1xuICAgICAgICBjb25zdCByZWNvcmQgPSBhd2FpdCBjbGllbnQucmVjb3Jkcy51cGRhdGUoXG4gICAgICAgICAgJ2pvYnMnLFxuICAgICAgICAgIGAke3JlcS5xdWVyeS5pZH1gLFxuICAgICAgICAgIHVwZGF0ZVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZWNvcmQgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKGVycik7XG4gICAgICB9XG5cbiAgICAvLyBXZSB3YW50IHRvIGRlbGV0ZSByZWNvcmQgYXMgcGVyIGlkXG4gICAgY2FzZSAnREVMRVRFJzpcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IGF3YWl0IHJlcS5ib2R5O1xuICAgICAgICBjb25zdCByZWNvcmQgPSBhd2FpdCBjbGllbnQucmVjb3Jkcy5kZWxldGUoXG4gICAgICAgICAgJ2pvYnMnLFxuICAgICAgICAgIGAke3JlcS5xdWVyeS5pZH1gLFxuICAgICAgICAgIHJlbW92ZVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXEucXVlcnkuaWQgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKGVycik7XG4gICAgICB9XG5cbiAgICAvLyBJZiBzb21laHRoaW5nIHdlbnQgd3JvbmcgLyBXcm9uZyBvcGVyYXRpb24gY29tbWFuZFxuICAgIGRlZmF1bHQ6XG4gICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJywgJ1BVVCcsICdERUxFVEUnXSk7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oYE1ldGhvZCAke21ldGhvZH0gTm90IEFsbG93ZWRgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlBvY2tldEJhc2UiLCJwcm9kdWN0aW9uIiwicmVxIiwicmVzIiwibWV0aG9kIiwiYmFzZVVybCIsImNsaWVudCIsInJlY29yZCIsInJlY29yZHMiLCJnZXRPbmUiLCJxdWVyeSIsImlkIiwiZXhwYW5kIiwic3RhdHVzIiwianNvbiIsImVyciIsInVwZGF0ZSIsImJvZHkiLCJzdWNjZXNzIiwiZGF0YSIsInJlbW92ZSIsImRlbGV0ZSIsInNldEhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/job/[id].ts\n'
        );

        /***/
      },
  };
  // load runtime
  var __webpack_require__ = require('../../../webpack-api-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_exec__(
    '(api)/./src/pages/api/job/[id].ts'
  );
  module.exports = __webpack_exports__;
})();
