"use strict";
(() => {
var exports = {};
exports.id = 8;
exports.ids = [8];
exports.modules = {

/***/ 8054:
/***/ ((module) => {

module.exports = require("bson");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

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

/***/ 4324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_dbconnection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9997);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8054);
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bson__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({
        req
    });
    if (!session) {
        res.status(404).json({
            message: "you are not admin"
        });
        return;
    }
    if (req.method === "PATCH") {
        const data = req.body;
        const { id , priceValue , DiscPriceValue , warrantyValue , imageValue , descreptionValue , componyValue , catagoryValue ,  } = data;
        const currId = new bson__WEBPACK_IMPORTED_MODULE_2__.ObjectID(id);
        const client = await (0,_lib_dbconnection__WEBPACK_IMPORTED_MODULE_0__/* .connectToDatabase */ .v)();
        const db = client.db();
        const productCollection = db.collection("products");
        const result = await productCollection.updateOne({
            _id: currId
        }, {
            $set: {
                price: priceValue,
                DiscPrice: DiscPriceValue,
                warranty: warrantyValue,
                image: imageValue,
                description: descreptionValue,
                compony: componyValue,
                catagory: catagoryValue
            }
        });
        client.close();
        res.status(201).json({
            message: "Item updated"
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
var __webpack_exports__ = (__webpack_exec__(4324));
module.exports = __webpack_exports__;

})();