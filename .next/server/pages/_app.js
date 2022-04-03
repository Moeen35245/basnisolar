"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@badrap/bar-of-progress"
const bar_of_progress_namespaceObject = require("@badrap/bar-of-progress");
var bar_of_progress_default = /*#__PURE__*/__webpack_require__.n(bar_of_progress_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./public/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.8b536319.svg","height":80,"width":339});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/reusable/Button.js
var Button = __webpack_require__(3168);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@heroicons/react/solid"
var solid_ = __webpack_require__(1143);
;// CONCATENATED MODULE: external "next-themes"
const external_next_themes_namespaceObject = require("next-themes");
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./components/common/Navbar.js









function Navbar() {
    const { data: session , status  } = (0,react_.useSession)();
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const { theme , setTheme  } = (0,external_next_themes_namespaceObject.useTheme)();
    const navOpenHandler = ()=>{
        setIsOpen(!isOpen);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "relative px-5 py-3 flex dark:text-white bg-icream dark:bg-idark ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: navOpenHandler,
                className: "z-[51] md:hidden space-y-1 fixed top-4 right-3 cursor-pointer",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${isOpen && "rotate-90"} relative p-2 rounded-full transition-all duration-300 text-inavy  bg-white  shadow-xl shadow-red-50`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(solid_.MenuAlt4Icon, {
                        className: "h-5 w-5"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mx-auto flex flex-1 max-w-[1198px] ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative w-44",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                alt: "This basni solar logo",
                                src: logo,
                                objectFit: "contain",
                                className: "h-full object-contain"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: `z-[50] transition-all md:transition-none duration-300 shadow-xl delay-300 md:shadow-none fixed h-screen w-[85%] md:h-full md:w-fit dark:bg-idark bg-white md:bg-transparent top-0 right-0 md:static flex-col  justify-evenly  md:translate-x-0 md:flex-row flex ml-auto space-x-5 items-center  ${isOpen ? "translate-x-0" : "translate-x-full"}`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "ml-6 md:ml-0 p-2 rounded-full hover:dark:bg-idarkBg hover:bg-gray-100 cursor-pointer",
                                onClick: ()=>{
                                    setTheme(theme === "dark" ? "light" : "dark");
                                    navOpenHandler();
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(solid_.SunIcon, {
                                        className: `h-5 w-5 ${theme === "dark" ? "hidden" : "block"}`
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(solid_.MoonIcon, {
                                        className: `h-5 w-5 ${theme === "dark" ? "block" : "hidden"}`
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                onClick: navOpenHandler,
                                className: "p-2 rounded-md hover:dark:bg-idarkBg hover:bg-gray-100 cursor-pointer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                onClick: navOpenHandler,
                                className: "p-2 rounded-md hover:dark:bg-idarkBg hover:bg-gray-100 cursor-pointer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/products",
                                    children: "Products"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                onClick: navOpenHandler,
                                className: "p-2 rounded-md hover:dark:bg-idarkBg cursor-pointer hover:bg-gray-100",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/#about-us",
                                    children: "About us"
                                })
                            }),
                            status === "authenticated" && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                onClick: navOpenHandler,
                                className: "p-2 rounded-md hover:dark:bg-idarkBg cursor-pointer hover:bg-gray-100",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/admin",
                                    children: "Admin"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.zx, {})
                        ]
                    })
                ]
            })
        ]
    }));
}
/* harmony default export */ const common_Navbar = (Navbar);

;// CONCATENATED MODULE: ./pages/_app.js








const progress = new (bar_of_progress_default())({
    size: 4,
    color: "#FDB400",
    className: "z-50",
    delay: 100
});
router_default().events.on("routeChangeStart", progress.start);
router_default().events.on("routeChangeComplete", progress.finish);
router_default().events.on("routeChangeError", progress.finish);
function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.SessionProvider, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_next_themes_namespaceObject.ThemeProvider, {
            attribute: "class",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(common_Navbar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    }));
}
/* harmony default export */ const _app = (MyApp); /*
 colors: {
        icream: "#F8F7FF",
        iblue: "#3641B7",
        ired: "#FF5670",
        iyellow: "#FDB400",
        inavy: "#003049",
        igray: "#627193",
      },css
*/ 


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
var __webpack_exports__ = __webpack_require__.X(0, [190,676,664,675,168], () => (__webpack_exec__(637)));
module.exports = __webpack_exports__;

})();