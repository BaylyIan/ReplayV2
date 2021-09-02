"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./utils/context.js":
/*!**************************!*\
  !*** ./utils/context.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageContext\": function() { return /* binding */ PageContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/ayan/Desktop/reprep/ReplayV2/frontend/utils/context.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar PageContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n  user: {},\n  setUser: function setUser() {},\n  keyword: {},\n  setKeyword: function setKeyword() {},\n  token: {},\n  setToken: function setToken() {}\n});\n\nvar Provider = function Provider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      keyword = _useState2[0],\n      setKeyword = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      tokenCheck = _useState3[0],\n      setTokenCheck = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var userData = sessionStorage.getItem(\"user\");\n    setUser(JSON.parse(userData));\n\n    if (window.sessionStorage.getItem(\"token\")) {\n      setTokenCheck(true);\n    } else {\n      setTokenCheck(false);\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PageContext.Provider, {\n    value: {\n      user: user,\n      setUser: setUser,\n      keyword: keyword,\n      setKeyword: setKeyword,\n      tokenCheck: tokenCheck\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Provider, \"p3GURkJz2rtXSbN6hEIUS3C8Iws=\");\n\n_c = Provider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Provider);\n\nvar _c;\n\n$RefreshReg$(_c, \"Provider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUksV0FBVyxnQkFBR0Qsb0RBQWEsQ0FBQztBQUNyQ0UsRUFBQUEsSUFBSSxFQUFDLEVBRGdDO0FBRXJDQyxFQUFBQSxPQUFPLEVBQUMsbUJBQUksQ0FBRSxDQUZ1QjtBQUdyQ0MsRUFBQUEsT0FBTyxFQUFDLEVBSDZCO0FBSXJDQyxFQUFBQSxVQUFVLEVBQUMsc0JBQUksQ0FBRSxDQUpvQjtBQUtyQ0MsRUFBQUEsS0FBSyxFQUFDLEVBTCtCO0FBTXJDQyxFQUFBQSxRQUFRLEVBQUMsb0JBQUksQ0FBRTtBQU5zQixDQUFELENBQWpDOztBQVNQLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWdCO0FBQUE7O0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjOztBQUFBLGtCQUVMWCwrQ0FBUSxFQUZIO0FBQUEsTUFFdEJJLElBRnNCO0FBQUEsTUFFaEJDLE9BRmdCOztBQUFBLG1CQUdDTCwrQ0FBUSxDQUFDLEVBQUQsQ0FIVDtBQUFBLE1BR3RCTSxPQUhzQjtBQUFBLE1BR2JDLFVBSGE7O0FBQUEsbUJBSU9QLCtDQUFRLENBQUMsS0FBRCxDQUpmO0FBQUEsTUFJdEJZLFVBSnNCO0FBQUEsTUFJVkMsYUFKVTs7QUFNN0JaLEVBQUFBLGdEQUFTLENBQUMsWUFBSTtBQUNWLFFBQU1hLFFBQVEsR0FBR0MsY0FBYyxDQUFDQyxPQUFmLENBQXVCLE1BQXZCLENBQWpCO0FBQ0FYLElBQUFBLE9BQU8sQ0FBQ1ksSUFBSSxDQUFDQyxLQUFMLENBQVdKLFFBQVgsQ0FBRCxDQUFQOztBQUNBLFFBQUdLLE1BQU0sQ0FBQ0osY0FBUCxDQUFzQkMsT0FBdEIsQ0FBOEIsT0FBOUIsQ0FBSCxFQUEwQztBQUN0Q0gsTUFBQUEsYUFBYSxDQUFDLElBQUQsQ0FBYjtBQUNELEtBRkgsTUFFTztBQUNIQSxNQUFBQSxhQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0Q7QUFDTixHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUEsc0JBQ0ksOERBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQUNULE1BQUFBLElBQUksRUFBSkEsSUFBRDtBQUFPQyxNQUFBQSxPQUFPLEVBQVBBLE9BQVA7QUFBZ0JDLE1BQUFBLE9BQU8sRUFBUEEsT0FBaEI7QUFBeUJDLE1BQUFBLFVBQVUsRUFBVkEsVUFBekI7QUFBcUNLLE1BQUFBLFVBQVUsRUFBVkE7QUFBckMsS0FBN0I7QUFBQSxjQUNLRDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU1ILENBdEJEOztHQUFNRDs7S0FBQUE7QUF3Qk4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvY29udGV4dC5qcz83NDk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgUGFnZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgICB1c2VyOnt9LFxuICAgIHNldFVzZXI6KCk9Pnt9LFxuICAgIGtleXdvcmQ6e30sXG4gICAgc2V0S2V5d29yZDooKT0+e30sXG4gICAgdG9rZW46e30sXG4gICAgc2V0VG9rZW46KCk9Pnt9LFxufSlcblxuY29uc3QgUHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xuXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtrZXl3b3JkLCBzZXRLZXl3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFt0b2tlbkNoZWNrLCBzZXRUb2tlbkNoZWNrXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIFxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpO1xuICAgICAgICBzZXRVc2VyKEpTT04ucGFyc2UodXNlckRhdGEpKTsgXG4gICAgICAgIGlmKHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpe1xuICAgICAgICAgICAgc2V0VG9rZW5DaGVjayh0cnVlKVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2V0VG9rZW5DaGVjayhmYWxzZSlcbiAgICAgICAgICB9IFxuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3VzZXIsIHNldFVzZXIsIGtleXdvcmQsIHNldEtleXdvcmQsIHRva2VuQ2hlY2t9fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9QYWdlQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvdmlkZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjcmVhdGVDb250ZXh0IiwiUGFnZUNvbnRleHQiLCJ1c2VyIiwic2V0VXNlciIsImtleXdvcmQiLCJzZXRLZXl3b3JkIiwidG9rZW4iLCJzZXRUb2tlbiIsIlByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ0b2tlbkNoZWNrIiwic2V0VG9rZW5DaGVjayIsInVzZXJEYXRhIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwid2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/context.js\n");

/***/ })

});