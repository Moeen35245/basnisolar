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

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// import { MongoClient } from \"mongodb\";\n// export const connectToDatabase = async () => {\n//   const client = await MongoClient.connect(`${process.env.MONGO_URL}`);\n//   return client;\n// };\n/* This is a database connection function*/ \nconst connection = {}; /* creating connection object */ \nasync function connectToDatabase() {\n    if (connection.isConnected) {\n        return;\n    }\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URL, {\n        useNewUrlParser: true,\n        useUnifiedTopology: true,\n        bufferCommands: false\n    });\n    connection.isConnected = db.connections[0].readyState;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToDatabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZGJjb25uZWN0aW9uLmpzPzBhMDguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsRUFBeUM7QUFFekMsRUFBaUQ7QUFDakQsRUFBMEU7QUFFMUUsRUFBbUI7QUFDbkIsRUFBSztBQUVMLEVBQTJDLDBDQUNaO0FBRS9CLEtBQUssQ0FBQ0MsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFFLENBQWdDO2VBRXhDQyxpQkFBaUIsR0FBRyxDQUFDO0lBQ2xDLEVBQUUsRUFBRUQsVUFBVSxDQUFDRSxXQUFXLEVBQUUsQ0FBQztRQUMzQixNQUFNO0lBQ1IsQ0FBQztJQUVELEtBQUssQ0FBQ0MsRUFBRSxHQUFHLEtBQUssQ0FBQ0osdURBQWdCLENBQUNNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTLEVBQUUsQ0FBQztRQUN4REMsZUFBZSxFQUFFLElBQUk7UUFDckJDLGtCQUFrQixFQUFFLElBQUk7UUFDeEJDLGNBQWMsRUFBRSxLQUFLO0lBQ3ZCLENBQUM7SUFFRFYsVUFBVSxDQUFDRSxXQUFXLEdBQUdDLEVBQUUsQ0FBQ1EsV0FBVyxDQUFDLENBQUMsRUFBRUMsVUFBVTtBQUN2RCxDQUFDO0FBRUQsaUVBQWVYLGlCQUFpQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHNhNDUwLy4vbGliL2RiY29ubmVjdGlvbi5qcz9hMDU2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuLy8gZXhwb3J0IGNvbnN0IGNvbm5lY3RUb0RhdGFiYXNlID0gYXN5bmMgKCkgPT4ge1xuLy8gICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KGAke3Byb2Nlc3MuZW52Lk1PTkdPX1VSTH1gKTtcblxuLy8gICByZXR1cm4gY2xpZW50O1xuLy8gfTtcblxuLyogVGhpcyBpcyBhIGRhdGFiYXNlIGNvbm5lY3Rpb24gZnVuY3Rpb24qL1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBjb25uZWN0aW9uID0ge307IC8qIGNyZWF0aW5nIGNvbm5lY3Rpb24gb2JqZWN0ICovXG5cbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xuICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkwsIHtcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcbiAgfSk7XG5cbiAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb0RhdGFiYXNlO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdGlvbiIsImNvbm5lY3RUb0RhdGFiYXNlIiwiaXNDb25uZWN0ZWQiLCJkYiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJMIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiYnVmZmVyQ29tbWFuZHMiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/dbconnection.js?0a08\n");

/***/ }),

/***/ "./models/Admin.js":
/*!*************************!*\
  !*** ./models/Admin.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n/* PetSchema will correspond to a collection in your MongoDB database. */ const AdminSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a email\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a password\"\n        ]\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Admin) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Admin\", AdminSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvQWRtaW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLEVBQXlFLHdFQUN6RSxLQUFLLENBQUNDLFdBQVcsR0FBRyxHQUFHLENBQUNELHdEQUFlLENBQUMsQ0FBQztJQUN2Q0csS0FBSyxFQUFFLENBQUM7UUFDTkMsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxDQUFDO1lBQUEsSUFBSTtZQUFFLENBQXdCO1FBQUEsQ0FBQztJQUM1QyxDQUFDO0lBQ0RDLFFBQVEsRUFBRSxDQUFDO1FBQ1RILElBQUksRUFBRUMsTUFBTTtRQUNaQyxRQUFRLEVBQUUsQ0FBQztZQUFBLElBQUk7WUFBRSxDQUEyQjtRQUFBLENBQUM7SUFDL0MsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZU4sOERBQXFCLElBQUlBLHFEQUFjLENBQUMsQ0FBTyxRQUFFQyxXQUFXLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RzYTQ1MC8uL21vZGVscy9BZG1pbi5qcz9hODM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuLyogUGV0U2NoZW1hIHdpbGwgY29ycmVzcG9uZCB0byBhIGNvbGxlY3Rpb24gaW4geW91ciBNb25nb0RCIGRhdGFiYXNlLiAqL1xuY29uc3QgQWRtaW5TY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgZW1haWw6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBwcm92aWRlIGEgZW1haWxcIl0sXG4gIH0sXG4gIHBhc3N3b3JkOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgcHJvdmlkZSBhIHBhc3N3b3JkXCJdLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5BZG1pbiB8fCBtb25nb29zZS5tb2RlbChcIkFkbWluXCIsIEFkbWluU2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIkFkbWluU2NoZW1hIiwiU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJwYXNzd29yZCIsIm1vZGVscyIsIkFkbWluIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/Admin.js\n");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/bcrypt */ \"./lib/bcrypt.js\");\n/* harmony import */ var _lib_dbconnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/dbconnection */ \"./lib/dbconnection.js?0a08\");\n/* harmony import */ var _models_Admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/Admin */ \"./models/Admin.js\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    session: {\n        jwt: true\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            async authorize (credentials) {\n                await (0,_lib_dbconnection__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                const user = await _models_Admin__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                    email: credentials.email\n                });\n                if (!user) {\n                    throw new Error(\"User not found\");\n                }\n                const isValid = await (0,_lib_bcrypt__WEBPACK_IMPORTED_MODULE_2__.verifypassword)(credentials.password, user.password);\n                if (!isValid) {\n                    throw new Error(\"Invalid password\");\n                }\n                return user;\n            }\n        }), \n    ],\n    secret: process.env.NEXTAUTH_SECRET\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ2lDO0FBQ2I7QUFDSztBQUNoQjtBQUV6QyxpRUFBZUEsZ0RBQVEsQ0FBQyxDQUFDO0lBQ3ZCSyxPQUFPLEVBQUUsQ0FBQztRQUNSQyxHQUFHLEVBQUUsSUFBSTtJQUNYLENBQUM7SUFDREMsU0FBUyxFQUFFLENBQUM7UUFDVk4sc0VBQW1CLENBQUMsQ0FBQztrQkFDYk8sU0FBUyxFQUFDQyxXQUFXLEVBQUUsQ0FBQztnQkFDNUIsS0FBSyxDQUFDTiw2REFBaUI7Z0JBRXZCLEtBQUssQ0FBQ08sSUFBSSxHQUFHLEtBQUssQ0FBQ04sNkRBQWEsQ0FBQyxDQUFDO29CQUNoQ1EsS0FBSyxFQUFFSCxXQUFXLENBQUNHLEtBQUs7Z0JBQzFCLENBQUM7Z0JBRUQsRUFBRSxHQUFHRixJQUFJLEVBQUUsQ0FBQztvQkFDVixLQUFLLENBQUMsR0FBRyxDQUFDRyxLQUFLLENBQUMsQ0FBZ0I7Z0JBQ2xDLENBQUM7Z0JBRUQsS0FBSyxDQUFDQyxPQUFPLEdBQUcsS0FBSyxDQUFDWiwyREFBYyxDQUNsQ08sV0FBVyxDQUFDTSxRQUFRLEVBQ3BCTCxJQUFJLENBQUNLLFFBQVE7Z0JBRWYsRUFBRSxHQUFHRCxPQUFPLEVBQUUsQ0FBQztvQkFDYixLQUFLLENBQUMsR0FBRyxDQUFDRCxLQUFLLENBQUMsQ0FBa0I7Z0JBQ3BDLENBQUM7Z0JBRUQsTUFBTSxDQUFDSCxJQUFJO1lBQ2IsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBQ0RNLE1BQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGVBQWU7QUFDckMsQ0FBQyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kc2E0NTAvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5pbXBvcnQgeyB2ZXJpZnlwYXNzd29yZCB9IGZyb20gXCIuLi8uLi8uLi9saWIvYmNyeXB0XCI7XG5pbXBvcnQgY29ubmVjdFRvRGF0YWJhc2UgZnJvbSBcIi4uLy4uLy4uL2xpYi9kYmNvbm5lY3Rpb25cIjtcbmltcG9ydCBBZG1pbiBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL0FkbWluXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgc2Vzc2lvbjoge1xuICAgIGp3dDogdHJ1ZSxcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgQWRtaW4uZmluZE9uZSh7XG4gICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVc2VyIG5vdCBmb3VuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSBhd2FpdCB2ZXJpZnlwYXNzd29yZChcbiAgICAgICAgICBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgICAgICB1c2VyLnBhc3N3b3JkXG4gICAgICAgICk7XG4gICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGFzc3dvcmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxufSk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwidmVyaWZ5cGFzc3dvcmQiLCJjb25uZWN0VG9EYXRhYmFzZSIsIkFkbWluIiwic2Vzc2lvbiIsImp3dCIsInByb3ZpZGVycyIsImF1dGhvcml6ZSIsImNyZWRlbnRpYWxzIiwidXNlciIsImZpbmRPbmUiLCJlbWFpbCIsIkVycm9yIiwiaXNWYWxpZCIsInBhc3N3b3JkIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

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