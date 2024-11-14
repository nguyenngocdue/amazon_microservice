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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"(app-pages-browser)/./src/config.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // State để lưu danh sách người dùng\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // State để hiển thị trạng thái loading\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // State để lưu lỗi nếu có\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Gọi API để lấy danh sách người dùng\n        const fetchUsers = async ()=>{\n            try {\n                const response = await fetch(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].endpoints.users.v1));\n                if (!response.ok) {\n                    throw new Error(\"Failed to fetch users\");\n                }\n                const data = await response.json(); // Chuyển đổi response thành JSON\n                setUsers(data); // Lưu danh sách người dùng vào state\n            } catch (err) {\n                setError(err.message); // Lưu lỗi nếu có\n            } finally{\n                setLoading(false); // Tắt trạng thái loading sau khi hoàn thành\n            }\n        };\n        fetchUsers(); // Gọi hàm fetchUsers\n    }, []); // Chỉ chạy một lần khi component được mount\n    // Hiển thị loading hoặc lỗi nếu có\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/usr/src/app/src/app/page.tsx\",\n        lineNumber: 32,\n        columnNumber: 23\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error\n        ]\n    }, void 0, true, {\n        fileName: \"/usr/src/app/src/app/page.tsx\",\n        lineNumber: 33,\n        columnNumber: 21\n    }, this);\n    // Render danh sách người dùng\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"HELLO\"\n            }, void 0, false, {\n                fileName: \"/usr/src/app/src/app/page.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"User List:\"\n            }, void 0, false, {\n                fileName: \"/usr/src/app/src/app/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: users.map((user, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            user.username,\n                            \" - \",\n                            user.email\n                        ]\n                    }, index, true, {\n                        fileName: \"/usr/src/app/src/app/page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/usr/src/app/src/app/page.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"vvG5G9m+JVa2SSWAm277lQVAKio=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUU0QztBQUNkO0FBRWYsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFLEdBQUcsb0NBQW9DO0lBQzVFLE1BQU0sQ0FBQ0ssU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQyxPQUFPLHVDQUF1QztJQUNyRixNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUMsT0FBTywwQkFBMEI7SUFFcEVELGdEQUFTQSxDQUFDO1FBQ1Isc0NBQXNDO1FBQ3RDLE1BQU1VLGFBQWE7WUFDakIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sR0FBNkIsT0FBMUJWLCtDQUFNQSxDQUFDVyxTQUFTLENBQUNULEtBQUssQ0FBQ1UsRUFBRTtnQkFDekQsSUFBSSxDQUFDSCxTQUFTSSxFQUFFLEVBQUU7b0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtnQkFDbEI7Z0JBQ0EsTUFBTUMsT0FBTyxNQUFNTixTQUFTTyxJQUFJLElBQUksaUNBQWlDO2dCQUNyRWIsU0FBU1ksT0FBTyxxQ0FBcUM7WUFDdkQsRUFBRSxPQUFPRSxLQUFLO2dCQUNaVixTQUFTVSxJQUFJQyxPQUFPLEdBQUcsaUJBQWlCO1lBQzFDLFNBQVU7Z0JBQ1JiLFdBQVcsUUFBUSw0Q0FBNEM7WUFDakU7UUFDRjtRQUVBRyxjQUFjLHFCQUFxQjtJQUNyQyxHQUFHLEVBQUUsR0FBRyw0Q0FBNEM7SUFFcEQsbUNBQW1DO0lBQ25DLElBQUlKLFNBQVMscUJBQU8sOERBQUNlO2tCQUFFOzs7Ozs7SUFDdkIsSUFBSWIsT0FBTyxxQkFBTyw4REFBQ2E7O1lBQUU7WUFBUWI7Ozs7Ozs7SUFFN0IsOEJBQThCO0lBQzlCLHFCQUNFOzswQkFDRSw4REFBQ2M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQ0VwQixNQUFNcUIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNoQiw4REFBQ0M7OzRCQUNFRixLQUFLRyxRQUFROzRCQUFDOzRCQUFJSCxLQUFLSSxLQUFLOzt1QkFEdEJIOzs7Ozs7Ozs7Ozs7QUFPbkI7R0EzQ3dCeEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi9jb25maWdcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTsgLy8gU3RhdGUgxJHhu4MgbMawdSBkYW5oIHPDoWNoIG5nxrDhu51pIGTDuW5nXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpOyAvLyBTdGF0ZSDEkeG7gyBoaeG7g24gdGjhu4sgdHLhuqFuZyB0aMOhaSBsb2FkaW5nXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7IC8vIFN0YXRlIMSR4buDIGzGsHUgbOG7l2kgbuG6v3UgY8OzXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBH4buNaSBBUEkgxJHhu4MgbOG6pXkgZGFuaCBzw6FjaCBuZ8aw4budaSBkw7luZ1xuICAgIGNvbnN0IGZldGNoVXNlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NvbmZpZy5lbmRwb2ludHMudXNlcnMudjF9YCk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdXNlcnNcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgLy8gQ2h1eeG7g24gxJHhu5VpIHJlc3BvbnNlIHRow6BuaCBKU09OXG4gICAgICAgIHNldFVzZXJzKGRhdGEpOyAvLyBMxrB1IGRhbmggc8OhY2ggbmfGsOG7nWkgZMO5bmcgdsOgbyBzdGF0ZVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlKTsgLy8gTMawdSBs4buXaSBu4bq/dSBjw7NcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpOyAvLyBU4bqvdCB0cuG6oW5nIHRow6FpIGxvYWRpbmcgc2F1IGtoaSBob8OgbiB0aMOgbmhcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hVc2VycygpOyAvLyBH4buNaSBow6BtIGZldGNoVXNlcnNcbiAgfSwgW10pOyAvLyBDaOG7iSBjaOG6oXkgbeG7mXQgbOG6p24ga2hpIGNvbXBvbmVudCDEkcaw4bujYyBtb3VudFxuXG4gIC8vIEhp4buDbiB0aOG7iyBsb2FkaW5nIGhv4bq3YyBs4buXaSBu4bq/dSBjw7NcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvcn08L3A+O1xuXG4gIC8vIFJlbmRlciBkYW5oIHPDoWNoIG5nxrDhu51pIGTDuW5nXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5IRUxMTzwvaDE+XG4gICAgICA8aDI+VXNlciBMaXN0OjwvaDI+XG4gICAgICA8dWw+XG4gICAgICAgIHt1c2Vycy5tYXAoKHVzZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAge3VzZXIudXNlcm5hbWV9IC0ge3VzZXIuZW1haWx9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY29uZmlnIiwiSG9tZSIsInVzZXJzIiwic2V0VXNlcnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaFVzZXJzIiwicmVzcG9uc2UiLCJmZXRjaCIsImVuZHBvaW50cyIsInYxIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwiZXJyIiwibWVzc2FnZSIsInAiLCJoMSIsImgyIiwidWwiLCJtYXAiLCJ1c2VyIiwiaW5kZXgiLCJsaSIsInVzZXJuYW1lIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});