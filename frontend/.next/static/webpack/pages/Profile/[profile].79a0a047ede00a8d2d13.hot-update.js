"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Profile/[profile]",{

/***/ "./pages/Profile/[profile].js":
/*!************************************!*\
  !*** ./pages/Profile/[profile].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_ayan_Desktop_reprep_ReplayV2_frontend_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/context */ \"./utils/context.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/ayan/Desktop/reprep/ReplayV2/frontend/pages/Profile/[profile].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Profile = function Profile(_ref) {\n  _s();\n\n  (0,_Users_ayan_Desktop_reprep_ReplayV2_frontend_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref);\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_utils_context__WEBPACK_IMPORTED_MODULE_3__.PageContext),\n      user = _useContext.user,\n      keyword = _useContext.keyword;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n  var profile = router.query.profile;\n  console.log(profile, 'profile pars,'); //do token check to see if were viewing logged in user profile or another users rofile\n\n  sessionStorage.getItem('token', token);\n  console.log(token, 'token');\n\n  if (profile === \"no-user\") {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: {\n        backgroundColor: 'red'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: {\n        backgroundColor: 'green'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this);\n  }\n};\n\n_s(Profile, \"CrBhilkLEVnlp+Wrfi9MOIjEPBo=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];\n});\n\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\n\nvar _c;\n\n$RefreshReg$(_c, \"Profile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Qcm9maWxlL1twcm9maWxlXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxJQUFNTSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFTO0FBQUE7O0FBQUE7O0FBQUEsb0JBRUdILGlEQUFVLENBQUNDLHVEQUFELENBRmI7QUFBQSxNQUVmRyxJQUZlLGVBRWZBLElBRmU7QUFBQSxNQUVUQyxPQUZTLGVBRVRBLE9BRlM7O0FBR3ZCLE1BQU1DLE1BQU0sR0FBR0osc0RBQVMsRUFBeEI7QUFIdUIsTUFLZkssT0FMZSxHQUtIRCxNQUFNLENBQUNFLEtBTEosQ0FLZkQsT0FMZTtBQU92QkUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILE9BQVosRUFBcUIsZUFBckIsRUFQdUIsQ0FTdkI7O0FBRUFJLEVBQUFBLGNBQWMsQ0FBQ0MsT0FBZixDQUF1QixPQUF2QixFQUFnQ0MsS0FBaEM7QUFDQUosRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlHLEtBQVosRUFBbUIsT0FBbkI7O0FBRUEsTUFBR04sT0FBTyxLQUFLLFNBQWYsRUFBeUI7QUFDdkIsd0JBQ0U7QUFBSyxXQUFLLEVBQUU7QUFBQ08sUUFBQUEsZUFBZSxFQUFDO0FBQWpCO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBR0QsR0FKRCxNQUlLO0FBQ0gsd0JBQ0U7QUFBSyxXQUFLLEVBQUU7QUFBQ0EsUUFBQUEsZUFBZSxFQUFDO0FBQWpCO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBR0Q7QUFHRixDQXpCRDs7R0FBTVg7VUFHV0Q7OztLQUhYQztBQTJCTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Qcm9maWxlL1twcm9maWxlXS5qcz82N2Y2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnRleHRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBQcm9maWxlID0gKHsgfSkgPT4ge1xuXG4gIGNvbnN0IHsgdXNlciwga2V5d29yZCB9ID0gdXNlQ29udGV4dChQYWdlQ29udGV4dClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCB7IHByb2ZpbGUgfSA9IHJvdXRlci5xdWVyeTtcblxuICBjb25zb2xlLmxvZyhwcm9maWxlLCAncHJvZmlsZSBwYXJzLCcpXG5cbiAgLy9kbyB0b2tlbiBjaGVjayB0byBzZWUgaWYgd2VyZSB2aWV3aW5nIGxvZ2dlZCBpbiB1c2VyIHByb2ZpbGUgb3IgYW5vdGhlciB1c2VycyByb2ZpbGVcblxuICBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicsIHRva2VuKVxuICBjb25zb2xlLmxvZyh0b2tlbiwgJ3Rva2VuJylcblxuICBpZihwcm9maWxlID09PSBcIm5vLXVzZXJcIil7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J3JlZCd9fT48L2Rpdj5cbiAgICApXG4gIH1lbHNle1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOidncmVlbid9fT48L2Rpdj5cbiAgICApXG4gIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiUGFnZUNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJQcm9maWxlIiwidXNlciIsImtleXdvcmQiLCJyb3V0ZXIiLCJwcm9maWxlIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwidG9rZW4iLCJiYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Profile/[profile].js\n");

/***/ })

});