"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_ayan_Desktop_ReplayV2_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ayan_Desktop_ReplayV2_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_ayan_Desktop_ReplayV2_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_ayan_Desktop_ReplayV2_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var _pageStyles_Home_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pageStyles/Home/style */ \"./pageStyles/Home/style.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/ayan/Desktop/ReplayV2/frontend/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n    username: '',\n    pass: ''\n  }),\n      userData = _useState[0],\n      setUserData = _useState[1];\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_utils_context__WEBPACK_IMPORTED_MODULE_4__.PageContext),\n      setUser = _useContext.setUser;\n\n  var handleLogin = /*#__PURE__*/function () {\n    var _ref = (0,_Users_ayan_Desktop_ReplayV2_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_ayan_Desktop_ReplayV2_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n      var result, getUser, token, user;\n      return _Users_ayan_Desktop_ReplayV2_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return axios.post('https://localhost:4200/api/users/login', {\n                username: userData.username,\n                password: userData.pass\n              });\n\n            case 2:\n              result = _context2.sent;\n\n              getUser = /*#__PURE__*/function () {\n                var _ref3 = (0,_Users_ayan_Desktop_ReplayV2_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_ayan_Desktop_ReplayV2_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(_ref2) {\n                  var token, result;\n                  return _Users_ayan_Desktop_ReplayV2_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n                    while (1) {\n                      switch (_context.prev = _context.next) {\n                        case 0:\n                          token = _ref2.token;\n                          _context.next = 3;\n                          return axios.get('http://localhost:4200/api/profile', {\n                            token: token\n                          });\n\n                        case 3:\n                          result = _context.sent;\n                          return _context.abrupt(\"return\", result);\n\n                        case 5:\n                        case \"end\":\n                          return _context.stop();\n                      }\n                    }\n                  }, _callee);\n                }));\n\n                return function getUser(_x) {\n                  return _ref3.apply(this, arguments);\n                };\n              }();\n\n              if (resp.data.token) {\n                token = resp.data.token;\n                axios.defaults.headers.common['Authorization'] = token;\n                sessionStorage.setItem(\"token\", token);\n                console.log(\"identifier/token success\", resp.data);\n                user = getUser(token);\n                console.log(user, 'user'); //set user with context\n              } else {\n                console.log('error');\n              }\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function handleLogin() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pageStyles_Home_style__WEBPACK_IMPORTED_MODULE_5__.Main, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pageStyles_Home_style__WEBPACK_IMPORTED_MODULE_5__.Left, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"QzXByG6hedaS8j6bSS79NO48dOA=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVlLFNBQVNZLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFFR1gsK0NBQVEsQ0FBQztBQUN2Q1ksSUFBQUEsUUFBUSxFQUFDLEVBRDhCO0FBRXZDQyxJQUFBQSxJQUFJLEVBQUM7QUFGa0MsR0FBRCxDQUZYO0FBQUEsTUFFdEJDLFFBRnNCO0FBQUEsTUFFWkMsV0FGWTs7QUFBQSxvQkFPUmIsaURBQVUsQ0FBQ0ssdURBQUQsQ0FQRjtBQUFBLE1BT3JCUyxPQVBxQixlQU9yQkEsT0FQcUI7O0FBUzdCLE1BQU1DLFdBQVc7QUFBQSw2UkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNHQyxLQUFLLENBQUNDLElBQU4sQ0FBVyx3Q0FBWCxFQUFxRDtBQUN4RVAsZ0JBQUFBLFFBQVEsRUFBQ0UsUUFBUSxDQUFDRixRQURzRDtBQUV4RVEsZ0JBQUFBLFFBQVEsRUFBQ04sUUFBUSxDQUFDRDtBQUZzRCxlQUFyRCxDQURIOztBQUFBO0FBQ1pRLGNBQUFBLE1BRFk7O0FBTVpDLGNBQUFBLE9BTlk7QUFBQSwwU0FNRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUUMsMEJBQUFBLEtBQVIsU0FBUUEsS0FBUjtBQUFBO0FBQUEsaUNBQ09MLEtBQUssQ0FBQ00sR0FBTixDQUFVLG1DQUFWLEVBQStDO0FBQUNELDRCQUFBQSxLQUFLLEVBQUVBO0FBQVIsMkJBQS9DLENBRFA7O0FBQUE7QUFDUkYsMEJBQUFBLE1BRFE7QUFBQSwyREFFUEEsTUFGTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORTs7QUFBQSxnQ0FNWkMsT0FOWTtBQUFBO0FBQUE7QUFBQTs7QUFXbEIsa0JBQUdHLElBQUksQ0FBQ0MsSUFBTCxDQUFVSCxLQUFiLEVBQW9CO0FBQ1pBLGdCQUFBQSxLQURZLEdBQ0pFLElBQUksQ0FBQ0MsSUFBTCxDQUFVSCxLQUROO0FBRWxCTCxnQkFBQUEsS0FBSyxDQUFDUyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLE1BQXZCLENBQThCLGVBQTlCLElBQWlETixLQUFqRDtBQUNBTyxnQkFBQUEsY0FBYyxDQUFDQyxPQUFmLENBQXVCLE9BQXZCLEVBQWdDUixLQUFoQztBQUVBUyxnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQVosRUFBd0NSLElBQUksQ0FBQ0MsSUFBN0M7QUFDTVEsZ0JBQUFBLElBTlksR0FNTFosT0FBTyxDQUFDQyxLQUFELENBTkY7QUFPbEJTLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBWixFQUFrQixNQUFsQixFQVBrQixDQVFsQjtBQUVILGVBVkMsTUFVSztBQUNIRixnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNIOztBQXZCbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWGhCLFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBMEJBLHNCQUNFLDhEQUFDLHdEQUFEO0FBQUEsMkJBQ0UsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztHQTFDdUJOOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdXRlciwgU3dpdGNoLCBSb3V0ZSwgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gXCIuLi91dGlscy9jb250ZXh0XCI7XG5cbmltcG9ydCB7IE1haW4sIExlZnQgfSBmcm9tICcuLi9wYWdlU3R5bGVzL0hvbWUvc3R5bGUnXG5cbmltcG9ydCBqc0Nvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUoe1xuICAgIHVzZXJuYW1lOicnLFxuICAgIHBhc3M6JydcbiAgfSlcblxuICBjb25zdCB7IHNldFVzZXIgfSA9ICB1c2VDb250ZXh0KFBhZ2VDb250ZXh0KTtcblxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwczovL2xvY2FsaG9zdDo0MjAwL2FwaS91c2Vycy9sb2dpbicsIHtcbiAgICAgIHVzZXJuYW1lOnVzZXJEYXRhLnVzZXJuYW1lLFxuICAgICAgcGFzc3dvcmQ6dXNlckRhdGEucGFzc1xuICAgIH0pXG5cbiAgICBjb25zdCBnZXRVc2VyID0gYXN5bmMgKHt0b2tlbn0pID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo0MjAwL2FwaS9wcm9maWxlJywge3Rva2VuOiB0b2tlbn0pO1xuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIGlmKHJlc3AuZGF0YS50b2tlbikge1xuICAgICAgY29uc3QgdG9rZW4gPSByZXNwLmRhdGEudG9rZW47XG4gICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gdG9rZW47XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdG9rZW4pO1xuXG4gICAgICBjb25zb2xlLmxvZyhcImlkZW50aWZpZXIvdG9rZW4gc3VjY2Vzc1wiLCByZXNwLmRhdGEpO1xuICAgICAgY29uc3QgdXNlciA9IGdldFVzZXIodG9rZW4pXG4gICAgICBjb25zb2xlLmxvZyh1c2VyLCAndXNlcicpXG4gICAgICAvL3NldCB1c2VyIHdpdGggY29udGV4dFxuICAgICAgXG4gIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InKVxuICB9XG59XG5cbiAgcmV0dXJuIChcbiAgICA8TWFpbj5cbiAgICAgIDxMZWZ0PlxuXG4gICAgICA8L0xlZnQ+XG4gICAgPC9NYWluPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJSb3V0ZXIiLCJTd2l0Y2giLCJSb3V0ZSIsIkxpbmsiLCJQYWdlQ29udGV4dCIsIk1haW4iLCJMZWZ0IiwianNDb29raWUiLCJIb21lIiwidXNlcm5hbWUiLCJwYXNzIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsInNldFVzZXIiLCJoYW5kbGVMb2dpbiIsImF4aW9zIiwicG9zdCIsInBhc3N3b3JkIiwicmVzdWx0IiwiZ2V0VXNlciIsInRva2VuIiwiZ2V0IiwicmVzcCIsImRhdGEiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});