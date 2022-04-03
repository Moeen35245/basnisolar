"use strict";
exports.id = 168;
exports.ids = [168];
exports.modules = {

/***/ 3168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zx": () => (/* binding */ Button),
/* harmony export */   "Fd": () => (/* binding */ ButtonNav),
/* harmony export */   "NF": () => (/* binding */ ButtonFilter)
/* harmony export */ });
/* unused harmony exports ButtonForm, ButtonFilterMain */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__);



function Button() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: "/#footer",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: "flex items-center px-3 py-2 dark:bg-ired bg-inavy text-white rounded-md",
                children: [
                    "Contact us",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.MicrophoneIcon, {
                        className: "ml-1 h-5 w-5"
                    })
                ]
            })
        })
    }));
}
function ButtonNav() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: "flex-1 space-x-4 mt-5 flex sm:hidden items-center justify-center px-5 py-2 dark:bg-ired bg-inavy text-white rounded-md",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.PhoneIcon, {
                className: "ml-1 h-5 w-5"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "tel:+96170961709",
                children: "+96170961709"
            })
        ]
    }));
}
function ButtonForm() {
    return(/*#__PURE__*/ _jsxs("button", {
        className: "flex w-full justify-center items-center px-6 py-2 dark:bg-ired bg-inavy text-white rounded-md",
        children: [
            "Send",
            /*#__PURE__*/ _jsx(CheckIcon, {
                className: "ml-2 h-5 w-5"
            })
        ]
    }));
}
function ButtonFilter({ text , filterFadeOutHandler , filterData  }) {
    // console.log(ctxData.data);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        onClick: ()=>{
            filterFadeOutHandler();
            filterData(text);
        },
        className: `flex h-10 justify-center items-center px-3 mobile:px-6 py-2 dark:border-idark border-inavy  bg-white dark:bg-idarkBg border-2 rounded-full`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.CheckIcon, {
                className: `mr-2 h-5 w-5`
            }),
            text
        ]
    }));
}
function ButtonFilterMain() {
    return(/*#__PURE__*/ _jsxs("button", {
        className: "flex justify-evenly dark:border-idark border-inavy border-2 items-center px-6 py-2 bg-white dark:bg-idarkBg rounded-full",
        children: [
            /*#__PURE__*/ _jsx(FilterIcon, {
                className: "mr-2 h-5 w-5"
            }),
            "Filter"
        ]
    }));
}


/***/ })

};
;