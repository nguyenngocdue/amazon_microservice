"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"(app-pages-browser)/./src/config.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // State để lưu danh sách người dùng\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // State để hiển thị trạng thái loading\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // State để lưu lỗi nếu có\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Gọi API để lấy danh sách người dùng\n        const fetchUsers = async ()=>{\n            try {\n                const response = await fetch(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].backendApiUrl, \"/users\"));\n                if (!response.ok) {\n                    throw new Error(\"Failed to fetch users\");\n                }\n                const data = await response.json(); // Chuyển đổi response thành JSON\n                setUsers(data); // Lưu danh sách người dùng vào state\n            } catch (err) {\n                setError(err.message); // Lưu lỗi nếu có\n            } finally{\n                setLoading(false); // Tắt trạng thái loading sau khi hoàn thành\n            }\n        };\n        fetchUsers(); // Gọi hàm fetchUsers\n    }, []); // Chỉ chạy một lần khi component được mount\n    // Hiển thị loading hoặc lỗi nếu có\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/usr/src/app/src/app/page.tsx\",\n        lineNumber: 32,\n        columnNumber: 23\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error\n        ]\n    }, void 0, true, {\n        fileName: \"/usr/src/app/src/app/page.tsx\",\n        lineNumber: 33,\n        columnNumber: 21\n    }, this);\n    // Render danh sách người dùng\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"HELLO\"\n            }, void 0, false, {\n                fileName: \"/usr/src/app/src/app/page.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"User List:\"\n            }, void 0, false, {\n                fileName: \"/usr/src/app/src/app/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: users.map((user, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            user.username,\n                            \" - \",\n                            user.email\n                        ]\n                    }, index, true, {\n                        fileName: \"/usr/src/app/src/app/page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/usr/src/app/src/app/page.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"vvG5G9m+JVa2SSWAm277lQVAKio=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUU0QztBQUNkO0FBRWYsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFLEdBQUcsb0NBQW9DO0lBQzVFLE1BQU0sQ0FBQ0ssU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQyxPQUFPLHVDQUF1QztJQUNyRixNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUMsT0FBTywwQkFBMEI7SUFFcEVELGdEQUFTQSxDQUFDO1FBQ1Isc0NBQXNDO1FBQ3RDLE1BQU1VLGFBQWE7WUFDakIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sR0FBd0IsT0FBckJWLCtDQUFNQSxDQUFDVyxhQUFhLEVBQUM7Z0JBQ3JELElBQUksQ0FBQ0YsU0FBU0csRUFBRSxFQUFFO29CQUNoQixNQUFNLElBQUlDLE1BQU07Z0JBQ2xCO2dCQUNBLE1BQU1DLE9BQU8sTUFBTUwsU0FBU00sSUFBSSxJQUFJLGlDQUFpQztnQkFDckVaLFNBQVNXLE9BQU8scUNBQXFDO1lBQ3ZELEVBQUUsT0FBT0UsS0FBSztnQkFDWlQsU0FBU1MsSUFBSUMsT0FBTyxHQUFHLGlCQUFpQjtZQUMxQyxTQUFVO2dCQUNSWixXQUFXLFFBQVEsNENBQTRDO1lBQ2pFO1FBQ0Y7UUFFQUcsY0FBYyxxQkFBcUI7SUFDckMsR0FBRyxFQUFFLEdBQUcsNENBQTRDO0lBRXBELG1DQUFtQztJQUNuQyxJQUFJSixTQUFTLHFCQUFPLDhEQUFDYztrQkFBRTs7Ozs7O0lBQ3ZCLElBQUlaLE9BQU8scUJBQU8sOERBQUNZOztZQUFFO1lBQVFaOzs7Ozs7O0lBRTdCLDhCQUE4QjtJQUM5QixxQkFDRTs7MEJBQ0UsOERBQUNhOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUNFbkIsTUFBTW9CLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDaEIsOERBQUNDOzs0QkFDRUYsS0FBS0csUUFBUTs0QkFBQzs0QkFBSUgsS0FBS0ksS0FBSzs7dUJBRHRCSDs7Ozs7Ozs7Ozs7O0FBT25CO0dBM0N3QnZCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXSk7IC8vIFN0YXRlIMSR4buDIGzGsHUgZGFuaCBzw6FjaCBuZ8aw4budaSBkw7luZ1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTsgLy8gU3RhdGUgxJHhu4MgaGnhu4NuIHRo4buLIHRy4bqhbmcgdGjDoWkgbG9hZGluZ1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpOyAvLyBTdGF0ZSDEkeG7gyBsxrB1IGzhu5dpIG7hur91IGPDs1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gR+G7jWkgQVBJIMSR4buDIGzhuqV5IGRhbmggc8OhY2ggbmfGsOG7nWkgZMO5bmdcbiAgICBjb25zdCBmZXRjaFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjb25maWcuYmFja2VuZEFwaVVybH0vdXNlcnNgKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1c2Vyc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyAvLyBDaHV54buDbiDEkeG7lWkgcmVzcG9uc2UgdGjDoG5oIEpTT05cbiAgICAgICAgc2V0VXNlcnMoZGF0YSk7IC8vIEzGsHUgZGFuaCBzw6FjaCBuZ8aw4budaSBkw7luZyB2w6BvIHN0YXRlXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpOyAvLyBMxrB1IGzhu5dpIG7hur91IGPDs1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7IC8vIFThuq90IHRy4bqhbmcgdGjDoWkgbG9hZGluZyBzYXUga2hpIGhvw6BuIHRow6BuaFxuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaFVzZXJzKCk7IC8vIEfhu41pIGjDoG0gZmV0Y2hVc2Vyc1xuICB9LCBbXSk7IC8vIENo4buJIGNo4bqheSBt4buZdCBs4bqnbiBraGkgY29tcG9uZW50IMSRxrDhu6NjIG1vdW50XG5cbiAgLy8gSGnhu4NuIHRo4buLIGxvYWRpbmcgaG/hurdjIGzhu5dpIG7hur91IGPDs1xuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yfTwvcD47XG5cbiAgLy8gUmVuZGVyIGRhbmggc8OhY2ggbmfGsOG7nWkgZMO5bmdcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPkhFTExPPC9oMT5cbiAgICAgIDxoMj5Vc2VyIExpc3Q6PC9oMj5cbiAgICAgIDx1bD5cbiAgICAgICAge3VzZXJzLm1hcCgodXNlciwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICB7dXNlci51c2VybmFtZX0gLSB7dXNlci5lbWFpbH1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjb25maWciLCJIb21lIiwidXNlcnMiLCJzZXRVc2VycyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoVXNlcnMiLCJyZXNwb25zZSIsImZldGNoIiwiYmFja2VuZEFwaVVybCIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsImVyciIsIm1lc3NhZ2UiLCJwIiwiaDEiLCJoMiIsInVsIiwibWFwIiwidXNlciIsImluZGV4IiwibGkiLCJ1c2VybmFtZSIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n// config.js\nconst config = {\n    backendApiUrl: \"http://localhost:4302\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb25maWcuanMiLCJtYXBwaW5ncyI6IjtBQUFBLFlBQVk7QUFDWixNQUFNQSxTQUFTO0lBQ1hDLGVBQWU7QUFDakI7QUFFQSwrREFBZUQsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29uZmlnLmpzPzI0YTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uZmlnLmpzXG5jb25zdCBjb25maWcgPSB7XG4gICAgYmFja2VuZEFwaVVybDogXCJodHRwOi8vbG9jYWxob3N0OjQzMDJcIixcbiAgfTtcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiAgIl0sIm5hbWVzIjpbImNvbmZpZyIsImJhY2tlbmRBcGlVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/config.js\n"));

/***/ })

});