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

/***/ "./pageStyles/Profile/style.js":
/*!*************************************!*\
  !*** ./pageStyles/Profile/style.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Comp\": () => (/* binding */ Comp)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ \"./styles/theme.js\");\n\n\n\nconst Comp = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`\n    display:flex;\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlU3R5bGVzL1Byb2ZpbGUvc3R5bGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxNQUFNTSxJQUFJLEdBQUdOLDhEQUFXO0FBQy9CO0FBQ0EsQ0FGTyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlcGxheXYyLy4vcGFnZVN0eWxlcy9Qcm9maWxlL3N0eWxlLmpzPzA0ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IFNNQUxMLCBNRUQsIExBUkdFLCBYTEFSR0V9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cydcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3RoZW1lJ1xuXG5leHBvcnQgY29uc3QgQ29tcCA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTpmbGV4O1xuYDsiXSwibmFtZXMiOlsic3R5bGVkIiwiU01BTEwiLCJNRUQiLCJMQVJHRSIsIlhMQVJHRSIsIlRoZW1lIiwiQ29tcCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pageStyles/Profile/style.js\n");

/***/ }),

/***/ "./pages/Profile/[profile].js":
/*!************************************!*\
  !*** ./pages/Profile/[profile].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/context */ \"./utils/context.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _pageStyles_Profile_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pageStyles/Profile/style */ \"./pageStyles/Profile/style.js\");\n\nvar _jsxFileName = \"/Users/ayan/Desktop/reprep/ReplayV2/frontend/pages/Profile/[profile].js\";\n\n\n //comps \n\n\n\nconst Profile = ({}) => {\n  const {\n    user,\n    keyword,\n    loggedIn\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utils_context__WEBPACK_IMPORTED_MODULE_2__.PageContext);\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  const {\n    profile\n  } = router.query;\n  console.log(loggedIn, 'logg,'); //view own profile only when logged in\n  //viewing other profile while logged in\n  //path from nav bar will return prompt to signup if not logged in\n  //view other profiles while not logged in\n\n  var page = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pageStyles_Profile_style__WEBPACK_IMPORTED_MODULE_4__.Comp, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 14\n  }, undefined);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: \"hello my name is\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, undefined); // if(loggedIn){\n  //   return (\n  //     {page}\n  //   )\n  // }else{//routed from clicking on someones profile){\n  //   return (\n  //     <div style={{display: 'flex', width:'100%', height:'100%', backgroundColor:'red'}}>This is th profile page</div>\n  //   )\n  // }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Qcm9maWxlL1twcm9maWxlXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7Q0FHQTs7QUFDQTs7QUFFQSxNQUFNTyxPQUFPLEdBQUcsQ0FBQyxFQUFELEtBQVM7QUFFdkIsUUFBTTtBQUFFQyxJQUFBQSxJQUFGO0FBQVFDLElBQUFBLE9BQVI7QUFBaUJDLElBQUFBO0FBQWpCLE1BQThCUCxpREFBVSxDQUFDQyx1REFBRCxDQUE5QztBQUNBLFFBQU1PLE1BQU0sR0FBR04sc0RBQVMsRUFBeEI7QUFFQSxRQUFNO0FBQUVPLElBQUFBO0FBQUYsTUFBY0QsTUFBTSxDQUFDRSxLQUEzQjtBQUVBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsUUFBWixFQUFzQixPQUF0QixFQVB1QixDQVN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFJTSxJQUFJLGdCQUFHLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBWDs7QUFFQSxzQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBaEJ1QixDQXNCdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUQsQ0FoQ0Q7O0FBa0NBLGlFQUFlVCxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVwbGF5djIvLi9wYWdlcy9Qcm9maWxlL1twcm9maWxlXS5qcz82N2Y2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnRleHRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG4vL2NvbXBzIFxuaW1wb3J0IHsgQ29tcCB9IGZyb20gJy4uLy4uL3BhZ2VTdHlsZXMvUHJvZmlsZS9zdHlsZSc7XG5cbmNvbnN0IFByb2ZpbGUgPSAoeyB9KSA9PiB7XG5cbiAgY29uc3QgeyB1c2VyLCBrZXl3b3JkLCBsb2dnZWRJbiB9ID0gdXNlQ29udGV4dChQYWdlQ29udGV4dClcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCB7IHByb2ZpbGUgfSA9IHJvdXRlci5xdWVyeVxuXG4gIGNvbnNvbGUubG9nKGxvZ2dlZEluLCAnbG9nZywnKVxuXG4gIC8vdmlldyBvd24gcHJvZmlsZSBvbmx5IHdoZW4gbG9nZ2VkIGluXG4gIC8vdmlld2luZyBvdGhlciBwcm9maWxlIHdoaWxlIGxvZ2dlZCBpblxuICAvL3BhdGggZnJvbSBuYXYgYmFyIHdpbGwgcmV0dXJuIHByb21wdCB0byBzaWdudXAgaWYgbm90IGxvZ2dlZCBpblxuICAvL3ZpZXcgb3RoZXIgcHJvZmlsZXMgd2hpbGUgbm90IGxvZ2dlZCBpblxuXG4gIHZhciBwYWdlID0gPENvbXAgLz5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBoZWxsbyBteSBuYW1lIGlzIFxuICAgIDwvZGl2PlxuICApXG5cbiAgLy8gaWYobG9nZ2VkSW4pe1xuICAvLyAgIHJldHVybiAoXG4gIC8vICAgICB7cGFnZX1cbiAgLy8gICApXG4gIC8vIH1lbHNley8vcm91dGVkIGZyb20gY2xpY2tpbmcgb24gc29tZW9uZXMgcHJvZmlsZSl7XG4gIC8vICAgcmV0dXJuIChcbiAgLy8gICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIHdpZHRoOicxMDAlJywgaGVpZ2h0OicxMDAlJywgYmFja2dyb3VuZENvbG9yOidyZWQnfX0+VGhpcyBpcyB0aCBwcm9maWxlIHBhZ2U8L2Rpdj5cbiAgLy8gICApXG4gIC8vIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIlBhZ2VDb250ZXh0IiwidXNlUm91dGVyIiwiQ29tcCIsIlByb2ZpbGUiLCJ1c2VyIiwia2V5d29yZCIsImxvZ2dlZEluIiwicm91dGVyIiwicHJvZmlsZSIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Profile/[profile].js\n");

/***/ }),

/***/ "./styles/theme.js":
/*!*************************!*\
  !*** ./styles/theme.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Theme\": () => (/* binding */ Theme)\n/* harmony export */ });\nconst Theme = {\n  colors: {\n    orange: \"#F85F41\",\n    green: '#2CA58D',\n    black: \"#050505\",\n    white: \"#F7F7F7\",\n    lightGrey: \"#A1A1A1\",\n    medGrey: \"#1E1C21\",\n    darkGrey: \"#121212\"\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLEtBQUssR0FBRztBQUNqQkMsRUFBQUEsTUFBTSxFQUFFO0FBQ05DLElBQUFBLE1BQU0sRUFBRSxTQURGO0FBRU5DLElBQUFBLEtBQUssRUFBQyxTQUZBO0FBR05DLElBQUFBLEtBQUssRUFBRSxTQUhEO0FBSU5DLElBQUFBLEtBQUssRUFBRSxTQUpEO0FBS05DLElBQUFBLFNBQVMsRUFBQyxTQUxKO0FBTU5DLElBQUFBLE9BQU8sRUFBQyxTQU5GO0FBT05DLElBQUFBLFFBQVEsRUFBQztBQVBIO0FBRFMsQ0FBZCIsInNvdXJjZXMiOlsid2VicGFjazovL3JlcGxheXYyLy4vc3R5bGVzL3RoZW1lLmpzPzM1NTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFRoZW1lID0ge1xuICAgIGNvbG9yczoge1xuICAgICAgb3JhbmdlOiBcIiNGODVGNDFcIixcbiAgICAgIGdyZWVuOicjMkNBNThEJyxcbiAgICAgIGJsYWNrOiBcIiMwNTA1MDVcIixcbiAgICAgIHdoaXRlOiBcIiNGN0Y3RjdcIixcbiAgICAgIGxpZ2h0R3JleTpcIiNBMUExQTFcIixcbiAgICAgIG1lZEdyZXk6XCIjMUUxQzIxXCIsXG4gICAgICBkYXJrR3JleTpcIiMxMjEyMTJcIlxuICAgIH0sXG4gIH07XG4gICJdLCJuYW1lcyI6WyJUaGVtZSIsImNvbG9ycyIsIm9yYW5nZSIsImdyZWVuIiwiYmxhY2siLCJ3aGl0ZSIsImxpZ2h0R3JleSIsIm1lZEdyZXkiLCJkYXJrR3JleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/theme.js\n");

/***/ }),

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"XSMALL\": () => (/* binding */ XSMALL),\n/* harmony export */   \"SMALL\": () => (/* binding */ SMALL),\n/* harmony export */   \"MED\": () => (/* binding */ MED),\n/* harmony export */   \"LARGE\": () => (/* binding */ LARGE),\n/* harmony export */   \"XLARGE\": () => (/* binding */ XLARGE),\n/* harmony export */   \"MAXWIDTH\": () => (/* binding */ MAXWIDTH)\n/* harmony export */ });\n// media queries\nconst XSMALL = '375px';\nconst SMALL = '420px';\nconst MED = '797px';\nconst LARGE = '1024px';\nconst XLARGE = '1500px';\nconst MAXWIDTH = '1920px';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jb25zdGFudHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDTyxNQUFNQSxNQUFNLEdBQUcsT0FBZjtBQUNBLE1BQU1DLEtBQUssR0FBRyxPQUFkO0FBQ0EsTUFBTUMsR0FBRyxHQUFHLE9BQVo7QUFDQSxNQUFNQyxLQUFLLEdBQUcsUUFBZDtBQUNBLE1BQU1DLE1BQU0sR0FBRyxRQUFmO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFFBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVwbGF5djIvLi91dGlscy9jb25zdGFudHMuanM/YzMyMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtZWRpYSBxdWVyaWVzXG5leHBvcnQgY29uc3QgWFNNQUxMID0gJzM3NXB4JztcbmV4cG9ydCBjb25zdCBTTUFMTCA9ICc0MjBweCc7XG5leHBvcnQgY29uc3QgTUVEID0gJzc5N3B4JztcbmV4cG9ydCBjb25zdCBMQVJHRSA9ICcxMDI0cHgnO1xuZXhwb3J0IGNvbnN0IFhMQVJHRSA9ICcxNTAwcHgnO1xuZXhwb3J0IGNvbnN0IE1BWFdJRFRIID0gJzE5MjBweCc7Il0sIm5hbWVzIjpbIlhTTUFMTCIsIlNNQUxMIiwiTUVEIiwiTEFSR0UiLCJYTEFSR0UiLCJNQVhXSURUSCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/constants.js\n");

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

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

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