"use strict";
(() => {
var exports = {};
exports.id = 860;
exports.ids = [860];
exports.modules = {

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

/***/ 7864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_dbconnection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9997);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({
        req
    });
    if (!session) {
        res.status(403).json({
            message: "you are not admin"
        });
        return;
    }
    if (req.method === "POST") {
        const data = req.body;
        const { ePrice , eDiscPrice , eWarranty , eImage , eDescription , eCompony , eCatagory ,  } = data;
        const client = await (0,_lib_dbconnection__WEBPACK_IMPORTED_MODULE_0__/* .connectToDatabase */ .v)();
        const db = client.db();
        const userCollection = db.collection("products");
        const result = await userCollection.insertOne({
            price: ePrice,
            DiscPrice: eDiscPrice,
            warranty: eWarranty,
            image: eImage,
            description: eDescription,
            compony: eCompony,
            catagory: eCatagory
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
var __webpack_exports__ = (__webpack_exec__(7864));
module.exports = __webpack_exports__;

})();