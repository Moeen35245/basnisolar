"use strict";
(() => {
var exports = {};
exports.id = 795;
exports.ids = [795];
exports.modules = {

/***/ 9997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v": () => (/* binding */ connectToDatabase)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./lib/dbconnection.js

const connectToDatabase = async ()=>{
    const client = await external_mongodb_namespaceObject.MongoClient.connect(`${process.env.MONGO_URL}`);
    return client;
};


/***/ }),

/***/ 3844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_dbconnection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9997);

/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        const { eName , eEmail , ePhone , eAddress , eMessage  } = data;
        const client = await (0,_lib_dbconnection__WEBPACK_IMPORTED_MODULE_0__/* .connectToDatabase */ .v)();
        const db = client.db();
        const userCollection = db.collection("form");
        const result = await userCollection.insertOne({
            name: eName,
            email: eEmail,
            phone: ePhone,
            address: eAddress,
            message: eMessage
        });
        client.close();
        res.status(201).json({
            message: "Item added"
        });
    } else res.status(403).json({
        message: "Please use a appropriate method"
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3844));
module.exports = __webpack_exports__;

})();