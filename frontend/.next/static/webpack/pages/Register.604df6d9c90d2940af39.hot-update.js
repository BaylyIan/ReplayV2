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

/***/ "./components/Form/index.js":
/*!**********************************!*\
  !*** ./components/Form/index.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/theme */ \"./styles/theme.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Input */ \"./components/Input/index.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Button */ \"./components/Button/index.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ \"./components/Form/style.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/ayan/Desktop/reprep/ReplayV2/frontend/components/Form/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n //utills\n\n\n //comps\n\n\n\n //icons\n\n\n\nvar Form = function Form(_ref) {\n  _s();\n\n  var toggle = _ref.toggle,\n      onChangeToggle = _ref.onChangeToggle,\n      onSubmit = _ref.onSubmit;\n\n  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_7__.Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_7__.Toggle, {\n      toggle: toggle,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        onClick: onChangeToggle,\n        children: \"Sign in\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        onClick: onChangeToggle,\n        children: \"Sign up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      onSubmit: handleSubmit(onSubmit),\n      children: [!toggle ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input__WEBPACK_IMPORTED_MODULE_5__.default, {\n        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdPerson, {\n          size: 20,\n          fill: _styles_theme__WEBPACK_IMPORTED_MODULE_3__.Theme.colors.lightGrey\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 27\n        }, _this),\n        placeholder: 'Username',\n        register: register,\n        label: \"username\",\n        required: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 28\n      }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input__WEBPACK_IMPORTED_MODULE_5__.default, {\n        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdMail, {\n          size: 20,\n          fill: _styles_theme__WEBPACK_IMPORTED_MODULE_3__.Theme.colors.lightGrey\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 27\n        }, _this),\n        placeholder: 'Email',\n        register: register,\n        label: \"email\",\n        required: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input__WEBPACK_IMPORTED_MODULE_5__.default, {\n        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdLock, {\n          size: 20,\n          fill: _styles_theme__WEBPACK_IMPORTED_MODULE_3__.Theme.colors.lightGrey\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 27\n        }, _this),\n        placeholder: 'Password',\n        register: register,\n        label: \"password\",\n        required: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_6__.default, {\n        text: toggle ? 'login' : 'Signup',\n        type: \"submit\",\n        width: '100%'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Form, \"iyH731LTjAbxnbpM16EGorBPneQ=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm];\n});\n\n_c = Form;\nForm.defaultProps = {\n  onSubmit: function onSubmit() {}\n};\nForm.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\nvar _c;\n\n$RefreshReg$(_c, \"Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm0vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBO0NBR0E7O0FBQ0E7QUFDQTtDQUdBOztBQUNBOztBQUVBLElBQU1ZLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQTBDO0FBQUE7O0FBQUEsTUFBdkNDLE1BQXVDLFFBQXZDQSxNQUF1QztBQUFBLE1BQS9CQyxjQUErQixRQUEvQkEsY0FBK0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsaUJBRVJYLHdEQUFPLEVBRkM7QUFBQSxNQUUzQ1ksUUFGMkMsWUFFM0NBLFFBRjJDO0FBQUEsTUFFakNDLFlBRmlDLFlBRWpDQSxZQUZpQztBQUFBLE1BRW5CQyxNQUZtQixZQUVuQkEsTUFGbUI7O0FBSW5ELHNCQUNJLDhEQUFDLDZDQUFEO0FBQUEsNEJBQ0ksOERBQUMsMENBQUQ7QUFBUSxZQUFNLEVBQUVMLE1BQWhCO0FBQUEsOEJBQ0k7QUFBRyxlQUFPLEVBQUVDLGNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUcsZUFBTyxFQUFFQSxjQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFLSTtBQUFNLGNBQVEsRUFBRUcsWUFBWSxDQUFDRixRQUFELENBQTVCO0FBQUEsaUJBQ0ssQ0FBQ0YsTUFBRCxnQkFBVSw4REFBQywyQ0FBRDtBQUNQLFlBQUksZUFBRSw4REFBQyxvREFBRDtBQUFVLGNBQUksRUFBRSxFQUFoQjtBQUFvQixjQUFJLEVBQUVWLGlFQUFzQmlCO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREM7QUFFUCxtQkFBVyxFQUFFLFVBRk47QUFHUCxnQkFBUSxFQUFFSixRQUhIO0FBSVAsYUFBSyxFQUFDLFVBSkM7QUFLUCxnQkFBUTtBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVixHQU1JLElBUFQsZUFTSSw4REFBQywyQ0FBRDtBQUNJLFlBQUksZUFBRSw4REFBQyxrREFBRDtBQUFRLGNBQUksRUFBRSxFQUFkO0FBQWtCLGNBQUksRUFBRWIsaUVBQXNCaUI7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVjtBQUVJLG1CQUFXLEVBQUUsT0FGakI7QUFHSSxnQkFBUSxFQUFFSixRQUhkO0FBSUksYUFBSyxFQUFDLE9BSlY7QUFLSSxnQkFBUTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUSixlQWlCSSw4REFBQywyQ0FBRDtBQUNJLFlBQUksZUFBRSw4REFBQyxrREFBRDtBQUFRLGNBQUksRUFBRSxFQUFkO0FBQWtCLGNBQUksRUFBRWIsaUVBQXNCaUI7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVjtBQUVJLG1CQUFXLEVBQUUsVUFGakI7QUFHSSxnQkFBUSxFQUFFSixRQUhkO0FBSUksYUFBSyxFQUFDLFVBSlY7QUFLSSxnQkFBUTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQkosZUF5QkksOERBQUMsNENBQUQ7QUFBUSxZQUFJLEVBQUVILE1BQU0sR0FBRyxPQUFILEdBQWEsUUFBakM7QUFBMkMsWUFBSSxFQUFDLFFBQWhEO0FBQXlELGFBQUssRUFBRTtBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBekJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBb0NILENBeENEOztHQUFNRDtVQUV5Q1I7OztLQUZ6Q1E7QUEwQ05BLElBQUksQ0FBQ1MsWUFBTCxHQUFvQjtBQUNoQk4sRUFBQUEsUUFBUSxFQUFDLG9CQUFJLENBQUU7QUFEQyxDQUFwQjtBQUlBSCxJQUFJLENBQUNVLFNBQUwsR0FBaUIsRUFBakI7QUFJQSwrREFBZVYsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvcm0vaW5kZXguanM/YWE4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vL3V0aWxsc1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi9zdHlsZXMvdGhlbWUnO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcblxuLy9jb21wc1xuaW1wb3J0IElucHV0IGZyb20gJy4uL0lucHV0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nXG5pbXBvcnQgeyBDb250YWluZXIsIFRvZ2dsZSB9IGZyb20gJy4vc3R5bGUnXG5cbi8vaWNvbnNcbmltcG9ydCB7IE1kTWFpbCwgTWRMb2NrLCBNZFBlcnNvbiB9IGZyb20gJ3JlYWN0LWljb25zL21kJ1xuXG5jb25zdCBGb3JtID0gKHsgdG9nZ2xlLCBvbkNoYW5nZVRvZ2dsZSwgb25TdWJtaXQgfSkgPT4ge1xuXG4gICAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnMgfSA9IHVzZUZvcm0oKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICA8VG9nZ2xlIHRvZ2dsZT17dG9nZ2xlfT5cbiAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXtvbkNoYW5nZVRvZ2dsZX0+U2lnbiBpbjwvcD5cbiAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXtvbkNoYW5nZVRvZ2dsZX0+U2lnbiB1cDwvcD5cbiAgICAgICAgICAgIDwvVG9nZ2xlPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICAgICAgICAgIHshdG9nZ2xlID8gPElucHV0XG4gICAgICAgICAgICAgICAgICAgIGljb249ezxNZFBlcnNvbiBzaXplPXsyMH0gZmlsbD17VGhlbWUuY29sb3JzLmxpZ2h0R3JleX0gLz59XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnVXNlcm5hbWUnfVxuICAgICAgICAgICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+IDogbnVsbH1cbiAgICAgICAgICAgICAgICB7Lyoge2Vycm9ycy51c2VybmFtZSAmJiA8RXJyb3I+VGhpcyBpcyByZXF1aXJlZCE8L0Vycm9yPn0gKi99XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIGljb249ezxNZE1haWwgc2l6ZT17MjB9IGZpbGw9e1RoZW1lLmNvbG9ycy5saWdodEdyZXl9IC8+fVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J0VtYWlsJ31cbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHsvKiB7ZXJyb3JzLmVtYWlsICYmIDxFcnJvcj5UaGlzIGlzIHJlcXVpcmVkITwvRXJyb3I+fSAqL31cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWNvbj17PE1kTG9jayBzaXplPXsyMH0gZmlsbD17VGhlbWUuY29sb3JzLmxpZ2h0R3JleX0gLz59XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnUGFzc3dvcmQnfVxuICAgICAgICAgICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgey8qIHtlcnJvcnMucGFzc3dvcmQgJiYgPEVycm9yPlRoaXMgaXMgcmVxdWlyZWQhPC9FcnJvcj59ICovfVxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD17dG9nZ2xlID8gJ2xvZ2luJyA6ICdTaWdudXAnfSB0eXBlPSdzdWJtaXQnIHdpZHRoPXsnMTAwJSd9Lz5cbiAgICAgICAgICAgICAgICB7LyogPGlucHV0IHR5cGU9J3N1Ym1pdCcgLz4gKi99XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG59XG5cbkZvcm0uZGVmYXVsdFByb3BzID0ge1xuICAgIG9uU3VibWl0OigpPT57fVxufVxuXG5Gb3JtLnByb3BUeXBlcyA9IHtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUHJvcFR5cGVzIiwiVGhlbWUiLCJ1c2VGb3JtIiwiSW5wdXQiLCJCdXR0b24iLCJDb250YWluZXIiLCJUb2dnbGUiLCJNZE1haWwiLCJNZExvY2siLCJNZFBlcnNvbiIsIkZvcm0iLCJ0b2dnbGUiLCJvbkNoYW5nZVRvZ2dsZSIsIm9uU3VibWl0IiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJjb2xvcnMiLCJsaWdodEdyZXkiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Form/index.js\n");

/***/ })

});