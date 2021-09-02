"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/Profile/[profile]";
exports.ids = ["pages/Profile/[profile]"];
exports.modules = {

/***/ "./pages/Profile/[profile].js":
/*!************************************!*\
  !*** ./pages/Profile/[profile].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/context */ \"./utils/context.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/ayan/Desktop/reprep/ReplayV2/frontend/pages/Profile/[profile].js\";\n\n\n\n\nconst Profile = ({}) => {\n  const {\n    user,\n    keyword,\n    loggedIn\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utils_context__WEBPACK_IMPORTED_MODULE_2__.PageContext);\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  const {\n    profile\n  } = router.query;\n  console.log(loggedIn, 'logg,'); //view own profile only when logged in\n  //viewing other profile while logged in\n  //path from nav bar will return prompt to signup if not logged in\n  //view other profiles while not logged in\n\n  var page = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Comp, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 14\n  }, undefined);\n\n  if (loggedIn) {\n    return {\n      page\n    };\n  } else {\n    //routed from clicking on someones profile){\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: {\n        display: 'flex',\n        width: '100%',\n        height: '100%',\n        backgroundColor: 'red'\n      },\n      children: \"This is th eexplore page\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, undefined);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Qcm9maWxlL1twcm9maWxlXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLE1BQU1NLE9BQU8sR0FBRyxDQUFDLEVBQUQsS0FBUztBQUV2QixRQUFNO0FBQUVDLElBQUFBLElBQUY7QUFBUUMsSUFBQUEsT0FBUjtBQUFpQkMsSUFBQUE7QUFBakIsTUFBOEJOLGlEQUFVLENBQUNDLHVEQUFELENBQTlDO0FBQ0EsUUFBTU0sTUFBTSxHQUFHTCxzREFBUyxFQUF4QjtBQUVBLFFBQU07QUFBRU0sSUFBQUE7QUFBRixNQUFjRCxNQUFNLENBQUNFLEtBQTNCO0FBRUFDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxRQUFaLEVBQXNCLE9BQXRCLEVBUHVCLENBU3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQUlNLElBQUksZ0JBQUcsOERBQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVg7O0FBSUEsTUFBR04sUUFBSCxFQUFZO0FBQ1YsV0FDRTtBQUFDTSxNQUFBQTtBQUFELEtBREY7QUFHRCxHQUpELE1BSUs7QUFBQztBQUNKLHdCQUNFO0FBQUssV0FBSyxFQUFFO0FBQUNDLFFBQUFBLE9BQU8sRUFBRSxNQUFWO0FBQWtCQyxRQUFBQSxLQUFLLEVBQUMsTUFBeEI7QUFBZ0NDLFFBQUFBLE1BQU0sRUFBQyxNQUF2QztBQUErQ0MsUUFBQUEsZUFBZSxFQUFDO0FBQS9ELE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFHRDtBQUVGLENBNUJEOztBQThCQSxpRUFBZWIsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlcGxheXYyLy4vcGFnZXMvUHJvZmlsZS9bcHJvZmlsZV0uanM/NjdmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gXCIuLi8uLi91dGlscy9jb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3QgUHJvZmlsZSA9ICh7IH0pID0+IHtcblxuICBjb25zdCB7IHVzZXIsIGtleXdvcmQsIGxvZ2dlZEluIH0gPSB1c2VDb250ZXh0KFBhZ2VDb250ZXh0KVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IHsgcHJvZmlsZSB9ID0gcm91dGVyLnF1ZXJ5XG5cbiAgY29uc29sZS5sb2cobG9nZ2VkSW4sICdsb2dnLCcpXG5cbiAgLy92aWV3IG93biBwcm9maWxlIG9ubHkgd2hlbiBsb2dnZWQgaW5cbiAgLy92aWV3aW5nIG90aGVyIHByb2ZpbGUgd2hpbGUgbG9nZ2VkIGluXG4gIC8vcGF0aCBmcm9tIG5hdiBiYXIgd2lsbCByZXR1cm4gcHJvbXB0IHRvIHNpZ251cCBpZiBub3QgbG9nZ2VkIGluXG4gIC8vdmlldyBvdGhlciBwcm9maWxlcyB3aGlsZSBub3QgbG9nZ2VkIGluXG5cbiAgdmFyIHBhZ2UgPSA8Q29tcCAvPlxuXG5cblxuICBpZihsb2dnZWRJbil7XG4gICAgcmV0dXJuIChcbiAgICAgIHtwYWdlfVxuICAgIClcbiAgfWVsc2V7Ly9yb3V0ZWQgZnJvbSBjbGlja2luZyBvbiBzb21lb25lcyBwcm9maWxlKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4Jywgd2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6J3JlZCd9fT5UaGlzIGlzIHRoIGVleHBsb3JlIHBhZ2U8L2Rpdj5cbiAgICApXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIlBhZ2VDb250ZXh0IiwidXNlUm91dGVyIiwiUHJvZmlsZSIsInVzZXIiLCJrZXl3b3JkIiwibG9nZ2VkSW4iLCJyb3V0ZXIiLCJwcm9maWxlIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwicGFnZSIsImRpc3BsYXkiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Profile/[profile].js\n");

/***/ }),

/***/ "./utils/context.js":
/*!**************************!*\
  !*** ./utils/context.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageContext\": () => (/* binding */ PageContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/ayan/Desktop/reprep/ReplayV2/frontend/utils/context.js\";\n\nconst PageContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n  user: {},\n  setUser: () => {},\n  keyword: {},\n  setKeyword: () => {},\n  loggedIn: {},\n  setLoggedIn: () => {}\n});\n\nconst Provider = ({\n  children\n}) => {\n  const {\n    0: user,\n    1: setUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n  const {\n    0: keyword,\n    1: setKeyword\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n  const {\n    0: loggedIn,\n    1: setLoggedIn\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const userData = sessionStorage.getItem(\"user\");\n    setUser(JSON.parse(userData));\n\n    if (window.sessionStorage.getItem(\"token\")) {\n      setLoggedIn(true);\n    } else {\n      setLoggedIn(false);\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PageContext.Provider, {\n    value: {\n      user,\n      setUser,\n      keyword,\n      setKeyword,\n      loggedIn,\n      setLoggedIn\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Provider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNSSxXQUFXLGdCQUFHRCxvREFBYSxDQUFDO0FBQ3JDRSxFQUFBQSxJQUFJLEVBQUMsRUFEZ0M7QUFFckNDLEVBQUFBLE9BQU8sRUFBQyxNQUFJLENBQUUsQ0FGdUI7QUFHckNDLEVBQUFBLE9BQU8sRUFBQyxFQUg2QjtBQUlyQ0MsRUFBQUEsVUFBVSxFQUFDLE1BQUksQ0FBRSxDQUpvQjtBQUtyQ0MsRUFBQUEsUUFBUSxFQUFDLEVBTDRCO0FBTXJDQyxFQUFBQSxXQUFXLEVBQUMsTUFBSSxDQUFFO0FBTm1CLENBQUQsQ0FBakM7O0FBU1AsTUFBTUMsUUFBUSxHQUFHLENBQUM7QUFBQ0MsRUFBQUE7QUFBRCxDQUFELEtBQWdCO0FBRTdCLFFBQU07QUFBQSxPQUFDUCxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkwsK0NBQVEsRUFBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ00sT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JQLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDUSxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQlQsK0NBQVEsQ0FBQyxLQUFELENBQXhDO0FBRUFDLEVBQUFBLGdEQUFTLENBQUMsTUFBSTtBQUNWLFVBQU1XLFFBQVEsR0FBR0MsY0FBYyxDQUFDQyxPQUFmLENBQXVCLE1BQXZCLENBQWpCO0FBQ0FULElBQUFBLE9BQU8sQ0FBQ1UsSUFBSSxDQUFDQyxLQUFMLENBQVdKLFFBQVgsQ0FBRCxDQUFQOztBQUNBLFFBQUdLLE1BQU0sQ0FBQ0osY0FBUCxDQUFzQkMsT0FBdEIsQ0FBOEIsT0FBOUIsQ0FBSCxFQUEwQztBQUN0Q0wsTUFBQUEsV0FBVyxDQUFDLElBQUQsQ0FBWDtBQUNELEtBRkgsTUFFTztBQUNIQSxNQUFBQSxXQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0Q7QUFDTixHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUEsc0JBQ0ksOERBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQUNMLE1BQUFBLElBQUQ7QUFBT0MsTUFBQUEsT0FBUDtBQUFnQkMsTUFBQUEsT0FBaEI7QUFBeUJDLE1BQUFBLFVBQXpCO0FBQXFDQyxNQUFBQSxRQUFyQztBQUErQ0MsTUFBQUE7QUFBL0MsS0FBN0I7QUFBQSxjQUNLRTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQU1ILENBdEJEOztBQXdCQSxpRUFBZUQsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlcGxheXYyLy4vdXRpbHMvY29udGV4dC5qcz83NDk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgUGFnZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgICB1c2VyOnt9LFxuICAgIHNldFVzZXI6KCk9Pnt9LFxuICAgIGtleXdvcmQ6e30sXG4gICAgc2V0S2V5d29yZDooKT0+e30sXG4gICAgbG9nZ2VkSW46e30sXG4gICAgc2V0TG9nZ2VkSW46KCk9Pnt9LFxufSlcblxuY29uc3QgUHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xuXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtrZXl3b3JkLCBzZXRLZXl3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtsb2dnZWRJbiwgc2V0TG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik7XG4gICAgICAgIHNldFVzZXIoSlNPTi5wYXJzZSh1c2VyRGF0YSkpOyBcbiAgICAgICAgaWYod2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSl7XG4gICAgICAgICAgICBzZXRMb2dnZWRJbih0cnVlKVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2V0TG9nZ2VkSW4oZmFsc2UpXG4gICAgICAgICAgfSBcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFnZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3t1c2VyLCBzZXRVc2VyLCBrZXl3b3JkLCBzZXRLZXl3b3JkLCBsb2dnZWRJbiwgc2V0TG9nZ2VkSW59fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9QYWdlQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvdmlkZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjcmVhdGVDb250ZXh0IiwiUGFnZUNvbnRleHQiLCJ1c2VyIiwic2V0VXNlciIsImtleXdvcmQiLCJzZXRLZXl3b3JkIiwibG9nZ2VkSW4iLCJzZXRMb2dnZWRJbiIsIlByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyRGF0YSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/context.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/Profile/[profile].js"));
module.exports = __webpack_exports__;

})();