"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Register",{

/***/ "./pages/Register/index.js":
/*!*********************************!*\
  !*** ./pages/Register/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_ayan_Desktop_reprep_ReplayV2_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_ayan_Desktop_reprep_ReplayV2_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_ayan_Desktop_reprep_ReplayV2_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_ayan_Desktop_reprep_ReplayV2_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_ayan_Desktop_reprep_ReplayV2_frontend_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/context */ \"./utils/context.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _pageStyles_Register_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pageStyles/Register/style */ \"./pageStyles/Register/style.js\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Form */ \"./components/Form/index.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/ayan/Desktop/reprep/ReplayV2/frontend/pages/Register/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n //comps\n\n\n //utills\n\n\n\n\nvar Register = function Register(_ref) {\n  _s();\n\n  (0,_Users_ayan_Desktop_reprep_ReplayV2_frontend_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_3__.default)(_ref);\n\n  //check if user has been logged in recently, and either set toggle to true or bypass login entirely\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),\n      toggle = _useState[0],\n      setToggle = _useState[1]; //add user priviledges collumn in db to have basic user, admin, etc. \n\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_utils_context__WEBPACK_IMPORTED_MODULE_5__.PageContext),\n      setUser = _useContext.setUser;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_ayan_Desktop_reprep_ReplayV2_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_ayan_Desktop_reprep_ReplayV2_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {\n      var result, token, user, _result, _token;\n\n      return _Users_ayan_Desktop_reprep_ReplayV2_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.t0 = toggle;\n              _context.next = _context.t0 === true ? 4 : _context.t0 === false ? 18 : 30;\n              break;\n\n            case 4:\n              _context.next = 6;\n              return axios__WEBPACK_IMPORTED_MODULE_10___default().post('http://localhost:4200/api/users/login', {\n                email: e.email,\n                password: e.password\n              });\n\n            case 6:\n              result = _context.sent;\n              token = result.data.token;\n              sessionStorage.setItem('token', token);\n              js_cookie__WEBPACK_IMPORTED_MODULE_9__.default.set(\"token\", token);\n              (axios__WEBPACK_IMPORTED_MODULE_10___default().defaults.headers.common.Authorization) = \"Bearer \" + token;\n              _context.next = 13;\n              return axios__WEBPACK_IMPORTED_MODULE_10___default().get('http://localhost:4200/api/profile', {\n                token: token\n              });\n\n            case 13:\n              user = _context.sent;\n              sessionStorage.setItem(\"user\", JSON.stringify(user.data.result[0]));\n              setUser(JSON.parse(sessionStorage.user));\n              router.push(\"/\");\n              return _context.abrupt(\"break\", 30);\n\n            case 18:\n              _context.next = 20;\n              return axios__WEBPACK_IMPORTED_MODULE_10___default().post(\"http://localhost:4200/api/create_user\", {\n                name: e.username,\n                email: e.email,\n                password: e.password\n              });\n\n            case 20:\n              _result = _context.sent;\n              _token = _result.data.token;\n              sessionStorage.setItem('token', _token);\n              js_cookie__WEBPACK_IMPORTED_MODULE_9__.default.set(\"token\", _token);\n              (axios__WEBPACK_IMPORTED_MODULE_10___default().defaults.headers.common.Authorization) = \"Bearer \" + _token;\n              console.log(_result.data, 'token'); // const _user = await axios.get('http://localhost:4200/api/profile', { token: _token });\n\n              sessionStorage.setItem(\"user\", JSON.stringify(_user.data.result[0]));\n              setUser(JSON.parse(sessionStorage.user));\n              router.push(\"/\");\n              return _context.abrupt(\"break\", 30);\n\n            case 30:\n              _context.next = 35;\n              break;\n\n            case 32:\n              _context.prev = 32;\n              _context.t1 = _context[\"catch\"](0);\n              console.log(_context.t1);\n\n            case 35:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 32]]);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var handleChangeToggle = function handleChangeToggle() {\n    setToggle(!toggle);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pageStyles_Register_style__WEBPACK_IMPORTED_MODULE_7__.Main, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pageStyles_Register_style__WEBPACK_IMPORTED_MODULE_7__.Left, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pageStyles_Register_style__WEBPACK_IMPORTED_MODULE_7__.Right, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Form__WEBPACK_IMPORTED_MODULE_8__.default, {\n        toggle: toggle,\n        onChangeToggle: handleChangeToggle // onSubmit={(e)=>{handleSubmit(e)}}\n        ,\n        onSubmit: function onSubmit(e) {\n          handleSubmit(e);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Register, \"F17hepGykRUGhbOUQGur5K4pEHc=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];\n});\n\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\n\nvar _c;\n\n$RefreshReg$(_c, \"Register\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUNFLEtBQUwsQ0FBV1YsY0FBYyxDQUFDTyxJQUExQixDQUFELENBQVA7QUFFQWhCLGNBQUFBLE1BQU0sQ0FBQ29CLElBQVAsQ0FBWSxHQUFaO0FBM0NhOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUErQ2pCSyxjQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBL0NpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaekIsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFtREEsTUFBTTJCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUMvQjlCLElBQUFBLFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQVQ7QUFDRCxHQUZEOztBQUlBLHNCQUNFLDhEQUFDLDREQUFEO0FBQUEsNEJBQ0UsOERBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUsOERBQUMsNkRBQUQ7QUFBQSw2QkFDRSw4REFBQyxxREFBRDtBQUNFLGNBQU0sRUFBRUEsTUFEVjtBQUVFLHNCQUFjLEVBQUUrQixrQkFGbEIsQ0FHRTtBQUhGO0FBSUUsZ0JBQVEsRUFBRSxrQkFBQzFCLENBQUQsRUFBTztBQUNmRCxVQUFBQSxZQUFZLENBQUNDLENBQUQsQ0FBWjtBQUVEO0FBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlCRCxDQWhGRDs7R0FBTU47VUFNV1A7OztLQU5YTztBQWtGTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9SZWdpc3Rlci9pbmRleC5qcz80NGEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3V0ZXIsIFN3aXRjaCwgUm91dGUsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29udGV4dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG4vL2NvbXBzXG5pbXBvcnQgeyBNYWluLCBMZWZ0LCBSaWdodCB9IGZyb20gJy4uLy4uL3BhZ2VTdHlsZXMvUmVnaXN0ZXIvc3R5bGUnXG5pbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvcm0nXG5cbi8vdXRpbGxzXG5pbXBvcnQganNDb29raWUgZnJvbSAnanMtY29va2llJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFJlZ2lzdGVyID0gKHt9KSA9PiB7XG4gIC8vY2hlY2sgaWYgdXNlciBoYXMgYmVlbiBsb2dnZWQgaW4gcmVjZW50bHksIGFuZCBlaXRoZXIgc2V0IHRvZ2dsZSB0byB0cnVlIG9yIGJ5cGFzcyBsb2dpbiBlbnRpcmVseVxuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUodHJ1ZSlcblxuICAvL2FkZCB1c2VyIHByaXZpbGVkZ2VzIGNvbGx1bW4gaW4gZGIgdG8gaGF2ZSBiYXNpYyB1c2VyLCBhZG1pbiwgZXRjLiBcbiAgY29uc3QgeyBzZXRVc2VyIH0gPSB1c2VDb250ZXh0KFBhZ2VDb250ZXh0KTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzd2l0Y2ggKHRvZ2dsZSkge1xuICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgLy9sb2dpblxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDIwMC9hcGkvdXNlcnMvbG9naW4nLCB7XG4gICAgICAgICAgICBlbWFpbDogZS5lbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBlLnBhc3N3b3JkXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVzdWx0LmRhdGEudG9rZW5cbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcbiAgICAgICAgICBqc0Nvb2tpZS5zZXQoXCJ0b2tlblwiLCB0b2tlbik7XG4gICAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9IFwiQmVhcmVyIFwiICsgdG9rZW47XG5cbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjQyMDAvYXBpL3Byb2ZpbGUnLCB7IHRva2VuOiB0b2tlbiB9KTtcblxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIuZGF0YS5yZXN1bHRbMF0pKTtcbiAgICAgICAgICBzZXRVc2VyKEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UudXNlcikpXG5cbiAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICAvL3NpZ24gdXBcbiAgICAgICAgICBjb25zdCBfcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMC9hcGkvY3JlYXRlX3VzZXJcIiwge1xuICAgICAgICAgICAgbmFtZTogZS51c2VybmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiBlLmVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IGUucGFzc3dvcmQsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25zdCBfdG9rZW4gPSBfcmVzdWx0LmRhdGEudG9rZW5cbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIF90b2tlbik7XG4gICAgICAgICAganNDb29raWUuc2V0KFwidG9rZW5cIiwgX3Rva2VuKTtcbiAgICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gXCJCZWFyZXIgXCIgKyBfdG9rZW47XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhfcmVzdWx0LmRhdGEsICd0b2tlbicpXG5cbiAgICAgICAgICAvLyBjb25zdCBfdXNlciA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo0MjAwL2FwaS9wcm9maWxlJywgeyB0b2tlbjogX3Rva2VuIH0pO1xuXG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoX3VzZXIuZGF0YS5yZXN1bHRbMF0pKTtcbiAgICAgICAgICBzZXRVc2VyKEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UudXNlcikpXG5cbiAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlVG9nZ2xlID0gKCkgPT4ge1xuICAgIHNldFRvZ2dsZSghdG9nZ2xlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TWFpbj5cbiAgICAgIDxMZWZ0PlxuXG4gICAgICA8L0xlZnQ+XG4gICAgICA8UmlnaHQ+XG4gICAgICAgIDxGb3JtXG4gICAgICAgICAgdG9nZ2xlPXt0b2dnbGV9XG4gICAgICAgICAgb25DaGFuZ2VUb2dnbGU9e2hhbmRsZUNoYW5nZVRvZ2dsZX1cbiAgICAgICAgICAvLyBvblN1Ym1pdD17KGUpPT57aGFuZGxlU3VibWl0KGUpfX1cbiAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdChlKVxuXG4gICAgICAgICAgfX0gLz5cbiAgICAgIDwvUmlnaHQ+XG4gICAgPC9NYWluPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIlJvdXRlciIsIlN3aXRjaCIsIlJvdXRlIiwiTGluayIsIlBhZ2VDb250ZXh0IiwidXNlUm91dGVyIiwiTWFpbiIsIkxlZnQiLCJSaWdodCIsIkZvcm0iLCJqc0Nvb2tpZSIsImF4aW9zIiwiUmVnaXN0ZXIiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJzZXRVc2VyIiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwiZSIsInBvc3QiLCJlbWFpbCIsInBhc3N3b3JkIiwicmVzdWx0IiwidG9rZW4iLCJkYXRhIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwic2V0IiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiZ2V0IiwidXNlciIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsInB1c2giLCJuYW1lIiwidXNlcm5hbWUiLCJfcmVzdWx0IiwiX3Rva2VuIiwiY29uc29sZSIsImxvZyIsIl91c2VyIiwiaGFuZGxlQ2hhbmdlVG9nZ2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Register/index.js\n");

/***/ })

});