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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pageStyles/Home/style.js":
/*!**********************************!*\
  !*** ./pageStyles/Home/style.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ \"./styles/theme.js\");\n\n\n\nconst Container = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`\n    width:100%;\n    height:100%;\n    background-color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__.Theme.colors.medGrey};\n    display:flex;\n    align-items:Center;\n    justify-content:center;\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlU3R5bGVzL0hvbWUvc3R5bGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxNQUFNTSxTQUFTLEdBQUdOLDhEQUFXO0FBQ3BDO0FBQ0E7QUFDQSx1QkFBdUJLLCtEQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxDQVBPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVwbGF5djIvLi9wYWdlU3R5bGVzL0hvbWUvc3R5bGUuanM/MDJmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgU01BTEwsIE1FRCwgTEFSR0UsIFhMQVJHRX0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJ1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi9zdHlsZXMvdGhlbWUnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjoke1RoZW1lLmNvbG9ycy5tZWRHcmV5fTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgYWxpZ24taXRlbXM6Q2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG5gOyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJTTUFMTCIsIk1FRCIsIkxBUkdFIiwiWExBUkdFIiwiVGhlbWUiLCJDb250YWluZXIiLCJkaXYiLCJjb2xvcnMiLCJtZWRHcmV5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pageStyles/Home/style.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/context */ \"./utils/context.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _pageStyles_Home_style_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pageStyles/Home/style.js */ \"./pageStyles/Home/style.js\");\n\nvar _jsxFileName = \"/Users/ayan/Desktop/reprep/ReplayV2/frontend/pages/index.js\";\n\n\n\n\n //comps\n//utills\n\nfunction Home() {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n  const {\n    user,\n    keyword\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utils_context__WEBPACK_IMPORTED_MODULE_3__.PageContext); // console.log(user, 'user on page')\n\n  console.log(keyword, 'keyword');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pageStyles_Home_style_js__WEBPACK_IMPORTED_MODULE_5__.Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: \"This is the dashboard, and the page that will open when app is run\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), \"hello\"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FJQTtBQUdBOztBQUdlLFNBQVNXLElBQVQsR0FBZ0I7QUFFN0IsUUFBTUMsTUFBTSxHQUFHSCxzREFBUyxFQUF4QjtBQUVBLFFBQU07QUFBRUksSUFBQUEsSUFBRjtBQUFRQyxJQUFBQTtBQUFSLE1BQW9CWCxpREFBVSxDQUFDSyx1REFBRCxDQUFwQyxDQUo2QixDQU03Qjs7QUFDQU8sRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVosRUFBcUIsU0FBckI7QUFFQSxzQkFDRSw4REFBQyxnRUFBRDtBQUFBLDRCQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRCIsInNvdXJjZXMiOlsid2VicGFjazovL3JlcGxheXYyLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGVyLCBTd2l0Y2gsIFJvdXRlLCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSBcIi4uL3V0aWxzL2NvbnRleHRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi4vcGFnZVN0eWxlcy9Ib21lL3N0eWxlLmpzXCI7XG5cbi8vY29tcHNcblxuXG4vL3V0aWxsc1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCB7IHVzZXIsIGtleXdvcmQgfSA9IHVzZUNvbnRleHQoUGFnZUNvbnRleHQpXG5cbiAgLy8gY29uc29sZS5sb2codXNlciwgJ3VzZXIgb24gcGFnZScpXG4gIGNvbnNvbGUubG9nKGtleXdvcmQsICdrZXl3b3JkJylcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICB7LyogPHA+e3VzZXIubmFtZX08L3A+ICovfVxuICAgICAgPGRpdiA+VGhpcyBpcyB0aGUgZGFzaGJvYXJkLCBhbmQgdGhlIHBhZ2UgdGhhdCB3aWxsIG9wZW4gd2hlbiBhcHAgaXMgcnVuPC9kaXY+XG4gICAgICBoZWxsb1xuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJSb3V0ZXIiLCJTd2l0Y2giLCJSb3V0ZSIsIkxpbmsiLCJQYWdlQ29udGV4dCIsInVzZVJvdXRlciIsIkNvbnRhaW5lciIsIkhvbWUiLCJyb3V0ZXIiLCJ1c2VyIiwia2V5d29yZCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();