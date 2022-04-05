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

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "./lib/bcrypt.js":
/*!***********************!*\
  !*** ./lib/bcrypt.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"verifypassword\": () => (/* binding */ verifypassword)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n\nconst verifypassword = async (password, hashedPassword)=>{\n    const isValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compare)(password, hashedPassword);\n    return isValid;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYmNyeXB0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrQztBQUUzQixLQUFLLENBQUNDLGNBQWMsVUFBVUMsUUFBUSxFQUFFQyxjQUFjLEdBQUssQ0FBQztJQUNqRSxLQUFLLENBQUNDLE9BQU8sR0FBRyxLQUFLLENBQUNKLGlEQUFPLENBQUNFLFFBQVEsRUFBRUMsY0FBYztJQUN0RCxNQUFNLENBQUNDLE9BQU87QUFDaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RzYTQ1MC8uL2xpYi9iY3J5cHQuanM/YzM3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcImJjcnlwdGpzXCI7XG5cbmV4cG9ydCBjb25zdCB2ZXJpZnlwYXNzd29yZCA9IGFzeW5jIChwYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpID0+IHtcbiAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGNvbXBhcmUocGFzc3dvcmQsIGhhc2hlZFBhc3N3b3JkKTtcbiAgcmV0dXJuIGlzVmFsaWQ7XG59O1xuIl0sIm5hbWVzIjpbImNvbXBhcmUiLCJ2ZXJpZnlwYXNzd29yZCIsInBhc3N3b3JkIiwiaGFzaGVkUGFzc3dvcmQiLCJpc1ZhbGlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/bcrypt.js\n");

/***/ }),

/***/ "./lib/dbconnection.js?0a08":
/*!*****************************!*\
  !*** ./lib/dbconnection.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectToDatabase = async ()=>{\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`${process.env.MONGO_URL}`);\n    return client;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZGJjb25uZWN0aW9uLmpzPzBhMDguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBRTlCLEtBQUssQ0FBQ0MsaUJBQWlCLGFBQWUsQ0FBQztJQUM1QyxLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNGLHdEQUFtQixJQUFJSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBUztJQUVqRSxNQUFNLENBQUNKLE1BQU07QUFDZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHNhNDUwLy4vbGliL2RiY29ubmVjdGlvbi5qcz9hMDU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuZXhwb3J0IGNvbnN0IGNvbm5lY3RUb0RhdGFiYXNlID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KGAke3Byb2Nlc3MuZW52Lk1PTkdPX1VSTH1gKTtcblxuICByZXR1cm4gY2xpZW50O1xufTtcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImNvbm5lY3RUb0RhdGFiYXNlIiwiY2xpZW50IiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/dbconnection.js?0a08\n");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/bcrypt */ \"./lib/bcrypt.js\");\n/* harmony import */ var _lib_dbconnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/dbconnection */ \"./lib/dbconnection.js?0a08\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    session: {\n        jwt: true\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            async authorize (credentials) {\n                const client = await (0,_lib_dbconnection__WEBPACK_IMPORTED_MODULE_3__.connectToDatabase)();\n                const db = client.db();\n                const usersCollection = db.collection(\"admin\");\n                const user = await usersCollection.findOne({\n                    email: credentials.email\n                });\n                if (!user) {\n                    client.close();\n                    throw new Error(\"User not found\");\n                }\n                const isValid = await (0,_lib_bcrypt__WEBPACK_IMPORTED_MODULE_2__.verifypassword)(credentials.password, user.password);\n                if (!isValid) {\n                    client.close();\n                    throw new Error(\"Invalid password\");\n                }\n                client.close();\n                return user;\n            }\n        }), \n    ],\n    secret: process.env.NEXTAUTH_SECRET\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFDaUM7QUFDYjtBQUNTO0FBRTdELGlFQUFlQSxnREFBUSxDQUFDLENBQUM7SUFDdkJJLE9BQU8sRUFBRSxDQUFDO1FBQ1JDLEdBQUcsRUFBRSxJQUFJO0lBQ1gsQ0FBQztJQUNEQyxTQUFTLEVBQUUsQ0FBQztRQUNWTCxzRUFBbUIsQ0FBQyxDQUFDO2tCQUNiTSxTQUFTLEVBQUNDLFdBQVcsRUFBRSxDQUFDO2dCQUM1QixLQUFLLENBQUNDLE1BQU0sR0FBRyxLQUFLLENBQUNOLG9FQUFpQjtnQkFDdEMsS0FBSyxDQUFDTyxFQUFFLEdBQUdELE1BQU0sQ0FBQ0MsRUFBRTtnQkFDcEIsS0FBSyxDQUFDQyxlQUFlLEdBQUdELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLENBQU87Z0JBQzdDLEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEtBQUssQ0FBQ0YsZUFBZSxDQUFDRyxPQUFPLENBQUMsQ0FBQztvQkFDMUNDLEtBQUssRUFBRVAsV0FBVyxDQUFDTyxLQUFLO2dCQUMxQixDQUFDO2dCQUVELEVBQUUsR0FBR0YsSUFBSSxFQUFFLENBQUM7b0JBQ1ZKLE1BQU0sQ0FBQ08sS0FBSztvQkFDWixLQUFLLENBQUMsR0FBRyxDQUFDQyxLQUFLLENBQUMsQ0FBZ0I7Z0JBQ2xDLENBQUM7Z0JBRUQsS0FBSyxDQUFDQyxPQUFPLEdBQUcsS0FBSyxDQUFDaEIsMkRBQWMsQ0FDbENNLFdBQVcsQ0FBQ1csUUFBUSxFQUNwQk4sSUFBSSxDQUFDTSxRQUFRO2dCQUVmLEVBQUUsR0FBR0QsT0FBTyxFQUFFLENBQUM7b0JBQ2JULE1BQU0sQ0FBQ08sS0FBSztvQkFDWixLQUFLLENBQUMsR0FBRyxDQUFDQyxLQUFLLENBQUMsQ0FBa0I7Z0JBQ3BDLENBQUM7Z0JBRURSLE1BQU0sQ0FBQ08sS0FBSztnQkFDWixNQUFNLENBQUNILElBQUk7WUFDYixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFDRE8sTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZUFBZTtBQUNyQyxDQUFDLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RzYTQ1MC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCB7IHZlcmlmeXBhc3N3b3JkIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9iY3J5cHRcIjtcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9kYmNvbm5lY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICBzZXNzaW9uOiB7XG4gICAgand0OiB0cnVlLFxuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICAgICAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICAgICAgICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwiYWRtaW5cIik7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb24uZmluZE9uZSh7XG4gICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICBjbGllbnQuY2xvc2UoKTtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIG5vdCBmb3VuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSBhd2FpdCB2ZXJpZnlwYXNzd29yZChcbiAgICAgICAgICBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgICAgICB1c2VyLnBhc3N3b3JkXG4gICAgICAgICk7XG4gICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgIGNsaWVudC5jbG9zZSgpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGFzc3dvcmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjbGllbnQuY2xvc2UoKTtcbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbn0pO1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsInZlcmlmeXBhc3N3b3JkIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJzZXNzaW9uIiwiand0IiwicHJvdmlkZXJzIiwiYXV0aG9yaXplIiwiY3JlZGVudGlhbHMiLCJjbGllbnQiLCJkYiIsInVzZXJzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJ1c2VyIiwiZmluZE9uZSIsImVtYWlsIiwiY2xvc2UiLCJFcnJvciIsImlzVmFsaWQiLCJwYXNzd29yZCIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();