"use strict";
(() => {
var exports = {};
exports.id = 345;
exports.ids = [345];
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

/***/ 5476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_products),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/reusable/Button.js
var Button = __webpack_require__(3168);
// EXTERNAL MODULE: ./lib/helper.js
var helper = __webpack_require__(4994);
;// CONCATENATED MODULE: ./components/products/Filter.js



function Filter({ state , filterFadeOutHandler , filterData  }) {
    let id1 = 0;
    let id2 = 0;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${state ? "hidden" : "block"} p-5 z-50 absolute top-10 left-[50%] -translate-x-1/2 w-[320px]  mobile:w-[400px] bg-white dark:bg-idark filter rounded-xl shadow-lg border border-iyellow dark:border-ired`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-wrap justify-evenly mb-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "space-y-2 p-2 ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-center",
                                children: "Compony"
                            }),
                            helper/* componies.map */.D.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(Button/* ButtonFilter */.NF, {
                                    filterData: filterData,
                                    filterFadeOutHandler: filterFadeOutHandler,
                                    text: item
                                }, id1++)
                            )
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "space-y-2 p-2 ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-center",
                                children: "Catagory"
                            }),
                            helper/* catagories.map */.p.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(Button/* ButtonFilter */.NF, {
                                    filterData: filterData,
                                    filterFadeOutHandler: filterFadeOutHandler,
                                    text: item
                                }, id2++)
                            )
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* ButtonFilter */.NF, {
                    filterData: filterData,
                    filterFadeOutHandler: filterFadeOutHandler,
                    text: "All"
                })
            })
        ]
    }));
}
/* harmony default export */ const products_Filter = (Filter);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(8768);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/products/Product.js







function Product({ id , compony , price , priceDisc , imgLink , description , warranty ,  }) {
    const { 0: isVisible , 1: setVisible  } = (0,external_react_.useState)(false);
    const { data: session , status  } = (0,react_.useSession)();
    const router = (0,router_.useRouter)();
    const clickHandler = ()=>{
        setVisible(true);
    };
    const leaveHandler = ()=>{
        setVisible(false);
    };
    const deleteHandler = async ()=>{
        const result = await fetch("/api/deleteItem", {
            method: "DELETE",
            body: JSON.stringify({
                id
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (result.status === 201) router.replace("/products");
    };
    if (!imgLink) imgLink = "/solarImage.webp";
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onMouseLeave: leaveHandler,
        className: "relative px-3 h-96 w-60 bg-white dark:bg-idarkBg shadow-lg rounded-lg",
        children: [
            status === "authenticated" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: clickHandler,
                className: "z-[49] flex items-center justify-center absolute top-2 rounded-full h-7 w-7 right-2 p-1 cursor-pointer dark:bg-ired bg-iyellow ",
                children: /*#__PURE__*/ jsx_runtime_.jsx(outline_.PencilIcon, {
                    className: "text-white h-5 w-5"
                })
            }),
            isVisible && status === "authenticated" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "shadow z-[49] flex flex-col items-center justify-center rounded-md border absolute top-10 right-2 text-inavy dark:text-white bg-white dark:bg-idark h-24 w-20",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "px-2 rounded py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-idarkBg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: `/products/${id}`,
                            children: "Edit"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        onClick: deleteHandler,
                        className: "px-2 rounded py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-idarkBg",
                        children: "Delete"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "z-20 px-2 text-white absolute top-3 left-0 h-8 w-36 dark:bg-ired bg-iyellow rounded-tr-full rounded-br-full",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "font-semibold text-lg",
                    children: compony
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "relative h-[60%]",
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    alt: "This bansi solar product",
                    src: imgLink,
                    objectFit: "contain",
                    layout: "fill"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-sm font-light mb-2",
                        children: warranty
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-sm font-semibold mb-2",
                        children: description
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "mr-auto dark:text-ired text-iyellow text-lg font-semibold",
                                children: [
                                    "Rs.",
                                    " " + priceDisc
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "text-lg font-light line-through",
                                children: [
                                    "Rs.",
                                    " " + price
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const products_Product = (Product); // Loom Solar Panel 10 watt - 12 volt for Mobile Charging

;// CONCATENATED MODULE: ./components/products/productlist.js





function Productlist({ data , filterData  }) {
    const { 0: isHide , 1: setHide  } = (0,external_react_.useState)(true);
    const filterFadeInHandler = ()=>{
        setHide(false);
    };
    const filterFadeOutHandler = ()=>{
        setHide(true);
    };
    if (!data) {
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Nothing In product"
            })
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(products_Filter, {
                filterData: filterData,
                filterFadeOutHandler: filterFadeOutHandler,
                state: isHide
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: filterFadeOutHandler,
                className: ` ${isHide ? "hidden" : "block"} absolute top-0 left-0 z-40 w-screen h-full`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-center items-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    onClick: filterFadeInHandler,
                    className: "flex justify-evenly mt-2 dark:border-idark border-inavy border-2 items-center px-6 py-2 bg-white dark:bg-idarkBg rounded-full",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(outline_.FilterIcon, {
                            className: "mr-2 h-5 w-5"
                        }),
                        "Filter"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `transition-all duration-150 filter ${!isHide && "blur-sm"} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center  mt-3 gap-4 px-5 `,
                children: data.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(products_Product, {
                        id: item.id,
                        compony: item.compony,
                        price: item.price,
                        priceDisc: item.priceDisc,
                        imgLink: item.imgLink,
                        description: item.description,
                        warranty: item.warranty
                    }, item.id)
                )
            })
        ]
    }));
}
/* harmony default export */ const productlist = (Productlist);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./lib/dbconnection.js + 1 modules
var dbconnection = __webpack_require__(203);
;// CONCATENATED MODULE: ./pages/products/index.js





function products({ data  }) {
    const { 0: currData , 1: setCurrData  } = (0,external_react_.useState)(data);
    function filterData(text) {
        const result = data.filter((item)=>{
            if (text === "All") return item.price != null;
            return item.catagory === text || item.compony === text;
        });
        setCurrData(result);
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Products"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description..",
                        content: "50w solar panles, 100w solar panles, 2000w solar panles and 500w solar panles"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Solar Panels, Solar Installation roof top solar panels"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/icon.png"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(productlist, {
                filterData: filterData,
                data: currData
            })
        ]
    }));
}
async function getServerSideProps() {
    const client = await (0,dbconnection/* connectToDatabase */.v)();
    const db = client.db();
    const productsCollection = db.collection("products");
    const data = await productsCollection.find({}).toArray();
    return {
        props: {
            data: data.map((item)=>({
                    id: item._id.toString(),
                    price: item.price,
                    priceDisc: item.DiscPrice,
                    imgLink: item.image,
                    description: item.description,
                    warranty: item.warranty,
                    compony: item.compony,
                    catagory: item.catagory
                })
            )
        }
    };
}
/* harmony default export */ const pages_products = (products);


/***/ }),

/***/ 8768:
/***/ ((module) => {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 1143:
/***/ ((module) => {

module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,676,664,675,168], () => (__webpack_exec__(5476)));
module.exports = __webpack_exports__;

})();