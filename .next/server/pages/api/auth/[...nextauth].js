"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
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

/***/ 4712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
;// CONCATENATED MODULE: external "bcryptjs"
const external_bcryptjs_namespaceObject = require("bcryptjs");
;// CONCATENATED MODULE: ./lib/bcrypt.js

const verifypassword = async (password, hashedPassword)=>{
    const isValid = await (0,external_bcryptjs_namespaceObject.compare)(password, hashedPassword);
    return isValid;
};

// EXTERNAL MODULE: ./lib/dbconnection.js + 1 modules
var dbconnection = __webpack_require__(9997);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js




/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    session: {
        jwt: true
    },
    providers: [
        credentials_default()({
            async authorize (credentials) {
                const client = await (0,dbconnection/* connectToDatabase */.v)();
                const db = client.db();
                const usersCollection = db.collection("admin");
                const user = await usersCollection.findOne({
                    email: credentials.email
                });
                if (!user) {
                    client.close();
                    throw new Error("User not found");
                }
                const isValid = await verifypassword(credentials.password, user.password);
                if (!isValid) {
                    client.close();
                    throw new Error("Invalid password");
                }
                client.close();
                return user;
            }
        }), 
    ]
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4712));
module.exports = __webpack_exports__;

})();