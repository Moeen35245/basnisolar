"use strict";
(() => {
var exports = {};
exports.id = 30;
exports.ids = [30];
exports.modules = {

/***/ 203:
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

/***/ 4994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ componies),
/* harmony export */   "p": () => (/* binding */ catagories)
/* harmony export */ });
const componies = [
    "Loom",
    "Luminous",
    "Tata"
];
const catagories = [
    "Panel",
    "Batteries",
    "Invertors"
];


/***/ }),

/***/ 4908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _productedit_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "bson"
const external_bson_namespaceObject = require("bson");
// EXTERNAL MODULE: ./lib/dbconnection.js + 1 modules
var dbconnection = __webpack_require__(203);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@heroicons/react/solid"
var solid_ = __webpack_require__(1143);
// EXTERNAL MODULE: ./lib/helper.js
var helper = __webpack_require__(4994);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./pages/products/[productedit].js








// import AddsItem from "../../components/products/AddsItem";
function productedit({ data  }) {
    const { 0: priceValue , 1: setPriceValue  } = (0,external_react_.useState)(data.price);
    const { 0: DiscPriceValue , 1: setDiscPriceValue  } = (0,external_react_.useState)(data.priceDisc);
    const { 0: warrantyValue , 1: setWarrantyValue  } = (0,external_react_.useState)(data.warranty);
    const { 0: imageValue , 1: setImageValue  } = (0,external_react_.useState)(data.imgLink);
    const { 0: descreptionValue , 1: setDescriptionValue  } = (0,external_react_.useState)(data.description);
    const { 0: catagoryValue , 1: setCatagoryValue  } = (0,external_react_.useState)(data.catagory);
    const { 0: componyValue , 1: setComponyValue  } = (0,external_react_.useState)(data.compony);
    const router = (0,router_.useRouter)();
    const submitHandler = async (e)=>{
        e.preventDefault();
        const id = data.id;
        const response = await fetch("/api/updateItem", {
            method: "PATCH",
            body: JSON.stringify({
                id,
                priceValue,
                DiscPriceValue,
                warrantyValue,
                imageValue,
                descreptionValue,
                componyValue,
                catagoryValue
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.ok) router.replace("/products");
    };
    let id1 = 0, id2 = 0;
    return(// <AddsItem data={data} submitHandler={submitHandler} isEdit={true} />
    /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mt-5 border rounded-lg shadow-lg p-5 mx-auto max-w-[320px] dark:text-white",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            className: "mt-4 flex flex-col",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-4 ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "form-lable dark:text-white",
                            htmlFor: "Name",
                            children: "price"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-input focus:outline-none focus:shadow-outline",
                            id: "price",
                            type: "text",
                            placeholder: "price",
                            value: priceValue,
                            onChange: (e)=>setPriceValue(e.target.value)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "form-lable dark:text-white",
                            htmlFor: "Email",
                            children: "Discount Price"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-input focus:outline-none focus:shadow-outline",
                            id: "Discount",
                            type: "text",
                            placeholder: "Discount",
                            value: DiscPriceValue,
                            onChange: (e)=>setDiscPriceValue(e.target.value)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-4 ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "form-lable dark:text-white",
                            htmlFor: "Number",
                            children: "warranty"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-input focus:outline-none focus:shadow-outline",
                            id: "warranty",
                            type: "text",
                            placeholder: "warranty",
                            value: warrantyValue,
                            onChange: (e)=>setWarrantyValue(e.target.value)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-4 ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "form-lable dark:text-white",
                            htmlFor: "image",
                            children: "image"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-input focus:outline-none focus:shadow-outline",
                            id: "image",
                            type: "text",
                            placeholder: "image",
                            value: imageValue,
                            onChange: (e)=>setImageValue(e.target.value)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-4 ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "form-lable dark:text-white",
                            htmlFor: "discription",
                            children: "discription"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "form-input focus:outline-none focus:shadow-outline",
                            id: "discription",
                            type: "text",
                            placeholder: "discription",
                            value: descreptionValue,
                            onChange: (e)=>setDescriptionValue(e.target.value)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-4 ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "form-lable dark:text-white",
                            htmlFor: "compony",
                            children: "compony"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("select", {
                            className: "form-input ",
                            id: "compony",
                            type: "text",
                            placeholder: "compony",
                            value: componyValue,
                            onChange: (e)=>setComponyValue(e.target.value)
                            ,
                            children: helper/* componies.map */.D.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: item,
                                    children: item
                                }, id1++)
                            )
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-4 ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            className: "form-lable dark:text-white",
                            htmlFor: "catagory",
                            children: "catagory"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("select", {
                            className: "form-input ",
                            id: "catagory",
                            type: "text",
                            placeholder: "catagory",
                            value: catagoryValue,
                            onChange: (e)=>setCatagoryValue(e.target.value)
                            ,
                            children: helper/* catagories.map */.p.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: item,
                                    children: item
                                }, id2++)
                            )
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mb-4 ",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        onClick: submitHandler,
                        className: "flex w-full justify-center items-center px-6 py-2 dark:bg-ired bg-inavy text-white rounded-md",
                        children: [
                            "Edit",
                            /*#__PURE__*/ jsx_runtime_.jsx(solid_.PencilAltIcon, {
                                className: "ml-2 h-5 w-5"
                            })
                        ]
                    })
                })
            ]
        })
    }));
}
async function getServerSideProps(context) {
    const session = (0,react_.getSession)(context);
    if (!session) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }
    const id = context.params.productedit;
    const currId = new external_bson_namespaceObject.ObjectID(id);
    const client = await (0,dbconnection/* connectToDatabase */.v)();
    const db = client.db();
    const productsCollection = db.collection("products");
    const data = await productsCollection.findOne({
        _id: currId
    });
    return {
        props: {
            data: {
                id: data._id.toString(),
                price: data.price,
                priceDisc: data.DiscPrice,
                imgLink: data.image,
                description: data.description,
                warranty: data.warranty,
                compony: data.compony
            }
        }
    };
}
/* harmony default export */ const _productedit_ = (productedit);


/***/ }),

/***/ 1143:
/***/ ((module) => {

module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4908));
module.exports = __webpack_exports__;

})();