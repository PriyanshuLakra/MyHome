"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/blog/page",{

/***/ "(app-pages-browser)/./src/app/component/MainSection/HeroSection.jsx":
/*!*******************************************************!*\
  !*** ./src/app/component/MainSection/HeroSection.jsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HeroSection: function() { return /* binding */ HeroSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _HeroSectionContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeroSectionContent */ \"(app-pages-browser)/./src/app/component/MainSection/HeroSectionContent.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_assets_images_whatsapp_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../public/assets/images/whatsapp.svg */ \"(app-pages-browser)/./public/assets/images/whatsapp.svg\");\n/* harmony import */ var _public_assets_images_phone_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../public/assets/images/phone.svg */ \"(app-pages-browser)/./public/assets/images/phone.svg\");\n/* harmony import */ var _public_assets_images_message_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../public/assets/images/message.svg */ \"(app-pages-browser)/./public/assets/images/message.svg\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _store_slice_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/slice/slice */ \"(app-pages-browser)/./src/app/store/slice/slice.js\");\n/* harmony import */ var _Utils_CustomModal_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Utils/CustomModal/Modal */ \"(app-pages-browser)/./src/app/component/Utils/CustomModal/Modal.jsx\");\n/* __next_internal_client_entry_do_not_use__ HeroSection auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst HeroSection = (param)=>{\n    let { bannerimage, altText } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();\n    const style = \" cursor-pointer inline  z-[20] fixed  right-0 overflow-hidden  bg-white px-[10px] py-[7px]  rounded-l-[6px] shadow-xl flex items-center  w-[44px] h-[44px]\";\n    const handleButton = ()=>{\n        dispatch((0,_store_slice_slice__WEBPACK_IMPORTED_MODULE_7__.toggleModal)({\n            screen: _Utils_CustomModal_Modal__WEBPACK_IMPORTED_MODULE_8__.SCREENS.LEAD_POPUP,\n            visible: true\n        }));\n    };\n    function openLink() {\n        window.location.href = this;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" w-full relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: bannerimage,\n                    alt: altText,\n                    className: \" w-full h-[600px] object-cover object-bottom hidden\"\n                }, void 0, false, {\n                    fileName: \"/Users/sarthaklakra/Desktop/HARKIRAT  web development/Projects/blog/HB/src/app/component/MainSection/HeroSection.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroSectionContent__WEBPACK_IMPORTED_MODULE_2__.HeroSectionContent, {}, void 0, false, {\n                    fileName: \"/Users/sarthaklakra/Desktop/HARKIRAT  web development/Projects/blog/HB/src/app/component/MainSection/HeroSection.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sarthaklakra/Desktop/HARKIRAT  web development/Projects/blog/HB/src/app/component/MainSection/HeroSection.jsx\",\n            lineNumber: 31,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(HeroSection, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch\n    ];\n});\n_c = HeroSection;\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L01haW5TZWN0aW9uL0hlcm9TZWN0aW9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUN5QjtBQUNnQztBQUMzQjtBQUMwQztBQUNKO0FBQ0U7QUFDN0I7QUFDWTtBQUNEO0FBRTdDLE1BQU1TLGNBQWM7UUFBRSxFQUFDQyxXQUFXLEVBQUVDLE9BQU8sRUFBQzs7SUFDakQsTUFBTUMsV0FBV04sd0RBQVdBO0lBQzVCLE1BQU1PLFFBQVE7SUFFZCxNQUFNQyxlQUFlO1FBQ25CRixTQUNFTCwrREFBV0EsQ0FBQztZQUNWUSxRQUFRUCw2REFBT0EsQ0FBQ1EsVUFBVTtZQUMxQkMsU0FBUztRQUNYO0lBRUo7SUFFQSxTQUFTQztRQUNQQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRyxJQUFJO0lBQzdCO0lBRUEscUJBQ0M7a0JBQ0MsNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBSUMsS0FBS2Y7b0JBQWFnQixLQUFLZjtvQkFBU1ksV0FBVTs7Ozs7OzhCQWEvQyw4REFBQ3RCLG1FQUFrQkE7Ozs7Ozs7Ozs7OztBQUkzQixFQUFDO0dBckNZUTs7UUFDTUgsb0RBQVdBOzs7S0FEakJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50L01haW5TZWN0aW9uL0hlcm9TZWN0aW9uLmpzeD9iNGVkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSGVyb1NlY3Rpb25Db250ZW50IH0gZnJvbSAnLi9IZXJvU2VjdGlvbkNvbnRlbnQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB3aGF0c2FwcGljb24gZnJvbSBcIi4uLy4uLy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3doYXRzYXBwLnN2Z1wiXG5pbXBvcnQgcGhvbmVOb2ljb24gZnJvbSBcIi4uLy4uLy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3Bob25lLnN2Z1wiXG5pbXBvcnQgbWVzc2FnZWljb24gZnJvbSBcIi4uLy4uLy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL21lc3NhZ2Uuc3ZnXCJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyB0b2dnbGVNb2RhbCB9IGZyb20gJy4uLy4uL3N0b3JlL3NsaWNlL3NsaWNlJ1xuaW1wb3J0IHsgU0NSRUVOUyB9IGZyb20gJy4uL1V0aWxzL0N1c3RvbU1vZGFsL01vZGFsJ1xuXG5leHBvcnQgY29uc3QgSGVyb1NlY3Rpb24gPSAoIHtiYW5uZXJpbWFnZSwgYWx0VGV4dH0gKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgc3R5bGUgPSAnIGN1cnNvci1wb2ludGVyIGlubGluZSAgei1bMjBdIGZpeGVkICByaWdodC0wIG92ZXJmbG93LWhpZGRlbiAgYmctd2hpdGUgcHgtWzEwcHhdIHB5LVs3cHhdICByb3VuZGVkLWwtWzZweF0gc2hhZG93LXhsIGZsZXggaXRlbXMtY2VudGVyICB3LVs0NHB4XSBoLVs0NHB4XSdcblxuICBjb25zdCBoYW5kbGVCdXR0b24gPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgICB0b2dnbGVNb2RhbCh7XG4gICAgICAgIHNjcmVlbjogU0NSRUVOUy5MRUFEX1BPUFVQLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gb3BlbkxpbmsgKCl7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzXG4gIH1cblxuICByZXR1cm4gKFxuICAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgcmVsYXRpdmVcIj5cbiAgICAgICAgPGltZyBzcmM9e2Jhbm5lcmltYWdlfSBhbHQ9e2FsdFRleHR9IGNsYXNzTmFtZT0nIHctZnVsbCBoLVs2MDBweF0gb2JqZWN0LWNvdmVyIG9iamVjdC1ib3R0b20gaGlkZGVuJy8+XG4gICAgICB7LyogPHNwYW4gb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oJ2h0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPTE1NTUxMjM0NTY3JywgJ19ibGFuaycpfSBjbGFzc05hbWU9e2Ake3N0eWxlfSB0b3AtWzExOHB4XSBgfT4gIDxJbWFnZSBzcmM9e3doYXRzYXBwaWNvbn0gYWx0PSd3aGF0c2FwcCcgY2xhc3NOYW1lPScgdy1bMzBweF0gJy8+PC9zcGFuPlxuICAgICAgPHNwYW4gb25DbGljaz17b3BlbkxpbmsuYmluZCgndGVsOis5MSA5ODEwNDMxODgzJyl9IGNsYXNzTmFtZT17YCAke3N0eWxlfSB0b3AtWzE4MHB4XSBgfT4gIDxJbWFnZSBzcmM9e3Bob25lTm9pY29ufSBhbHQ9J2NvbnRhY3QnIGNsYXNzTmFtZT0nIHctWzIxcHhdICcvPjwvc3Bhbj5cbiAgICAgICAgKi99XG5cbnsvKiA8YSBocmVmPVwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9MTU1NTEyMzQ1NjdcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPXtgJHtzdHlsZX0gdG9wLVsxMThweF1gfT5cbiAgPEltYWdlIHNyYz17d2hhdHNhcHBpY29ufSBhbHQ9J3doYXRzYXBwJyBjbGFzc05hbWU9J3ctWzMwcHhdJyAvPlxuPC9hPlxuPGEgaHJlZj1cInRlbDorOTE5ODEwNDMxODgzXCIgY2xhc3NOYW1lPXtgJHtzdHlsZX0gdG9wLVsxODBweF1gfT5cbiAgPEltYWdlIHNyYz17cGhvbmVOb2ljb259IGFsdD0nY29udGFjdCcgY2xhc3NOYW1lPSd3LVsyMXB4XScgLz5cbjwvYT4gKi99XG5cbiAgICAgIHsvKiA8SW1hZ2Ugc3JjPXttZXNzYWdlaWNvbn0gYWx0PSdtZXNzYWdlJyAgb25DbGljaz17aGFuZGxlQnV0dG9ufSAgY2xhc3NOYW1lPScgY3Vyc29yLXBvaW50ZXIgYWJzb2x1dGUgcmlnaHQtWzIwcHhdIGJvdHRvbS1bMzBweF0gdy1bNTBweF0gaC1bNTBweF0nPjwvSW1hZ2U+ICovfVxuICAgICAgICA8SGVyb1NlY3Rpb25Db250ZW50IC8+XG4gICA8L2Rpdj5cbiAgIDwvPlxuICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiSGVyb1NlY3Rpb25Db250ZW50IiwiSW1hZ2UiLCJ3aGF0c2FwcGljb24iLCJwaG9uZU5vaWNvbiIsIm1lc3NhZ2VpY29uIiwidXNlRGlzcGF0Y2giLCJ0b2dnbGVNb2RhbCIsIlNDUkVFTlMiLCJIZXJvU2VjdGlvbiIsImJhbm5lcmltYWdlIiwiYWx0VGV4dCIsImRpc3BhdGNoIiwic3R5bGUiLCJoYW5kbGVCdXR0b24iLCJzY3JlZW4iLCJMRUFEX1BPUFVQIiwidmlzaWJsZSIsIm9wZW5MaW5rIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/MainSection/HeroSection.jsx\n"));

/***/ })

});