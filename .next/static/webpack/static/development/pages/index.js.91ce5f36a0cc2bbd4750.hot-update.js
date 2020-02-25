webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/Post */ "./actions/Post.js");
/* harmony import */ var _data_storage_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data_storage/database */ "./data_storage/database.js");
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/components/Card.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Card = function Card(_ref) {
  var id = _ref.id,
      _ref$quote = _ref.quote,
      quote = _ref$quote === void 0 ? "QUOTE" : _ref$quote,
      _ref$description = _ref.description,
      description = _ref$description === void 0 ? "DESCRIPTION HERE" : _ref$description;

  var renderDatabase = function renderDatabase() {
    return __jsx("ul", {
      className: "jsx-760878023",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, _data_storage_database__WEBPACK_IMPORTED_MODULE_3__["database"][id].technology.map(function (tech) {
      return __jsx("li", {
        key: tech,
        className: "jsx-760878023",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, tech);
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "760878023",
      __self: this
    }, "ul.jsx-760878023{display:inline-block;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}li.jsx-760878023{display:inline-block;padding:8px;margin-right:10px;margin-bottom:10px;color:black;border:3px solid #65b2d8;border-radius:9px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdXLEFBR29DLEFBS0EscUJBSkYsQUFLUCxZQUNNLGtCQUNDLG1CQUNQLFlBQ2EsUUFSVixpQkFTRyxrQkFDcEIsc0JBVEEiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb3N0TGluaywgUG9zdEltZyB9IGZyb20gXCIuLi9hY3Rpb25zL1Bvc3RcIjtcbmltcG9ydCB7IGRhdGFiYXNlIH0gZnJvbSBcIi4uL2RhdGFfc3RvcmFnZS9kYXRhYmFzZVwiO1xuXG5jb25zdCBDYXJkID0gKHsgaWQsIHF1b3RlID0gXCJRVU9URVwiLCBkZXNjcmlwdGlvbiA9IFwiREVTQ1JJUFRJT04gSEVSRVwiIH0pID0+IHtcbiAgY29uc3QgcmVuZGVyRGF0YWJhc2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bD5cbiAgICAgICAge2RhdGFiYXNlW2lkXS50ZWNobm9sb2d5Lm1hcCh0ZWNoID0+IChcbiAgICAgICAgICA8bGkga2V5PXt0ZWNofT57dGVjaH08L2xpPlxuICAgICAgICApKX1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjNjViMmQ4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgPFBvc3RJbWcgaWQ9e2lkfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC0tZGVzY1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgPFBvc3RMaW5rIGlkPXtpZH0gLz5cbiAgICAgICAgICAgIDxoMT57cXVvdGV9PC9oMT5cbiAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2gtd3JhcHBlclwiPntyZW5kZXJEYXRhYmFzZSgpfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMzVweCAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aWR0aDogNTUlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQtLWRlc2Mge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dC13cmFwcGVyIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRlY2gtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAtMTBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Card.js */"));
  };

  return __jsx("li", {
    className: "jsx-1838297711" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1838297711" + " " + "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_actions_Post__WEBPACK_IMPORTED_MODULE_2__["PostImg"], {
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1838297711" + " " + "card card--desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1838297711" + " " + "text-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1838297711" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_actions_Post__WEBPACK_IMPORTED_MODULE_2__["PostLink"], {
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("h1", {
    className: "jsx-1838297711",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, quote), __jsx("p", {
    className: "jsx-1838297711",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, description), __jsx("div", {
    className: "jsx-1838297711" + " " + "tech-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, renderDatabase())))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1838297711",
    __self: this
  }, ".wrapper.jsx-1838297711{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:35px 0px;}.card.jsx-1838297711{display:block;height:350px;overflow:hidden;width:55%;border:1px solid gray;margin-left:110px;}.card--desc.jsx-1838297711{margin-left:0;width:45%;border:none;text-align:center;}.text-wrapper.jsx-1838297711{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;}.text.jsx-1838297711{position:relative;white-space:pre-line;height:100%;}.tech-wrapper.jsx-1838297711{display:block;position:absolute;bottom:0;padding:0 40px;width:100%;margin:-10px 0;}h1.jsx-1838297711{margin-bottom:20px;margin-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEUyxBQUcwQixBQUlDLEFBUUEsQUFNSyxBQUlELEFBS0osQUFRSyxjQTlCTixBQVFILEFBZVEsSUFMRyxDQWFMLEtBdEJKLEdBUkksS0F1QlAsR0FRWCxDQXRCb0IsR0FTTixFQU1HLEVBdkJMLFFBa0JaLEVBakJ3QixDQVF4QixFQWVhLFdBQ0ksT0EvQkUsQ0FRQyxPQXdCcEIsU0EvQkEsRUFRQSxBQVNjLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb3N0TGluaywgUG9zdEltZyB9IGZyb20gXCIuLi9hY3Rpb25zL1Bvc3RcIjtcbmltcG9ydCB7IGRhdGFiYXNlIH0gZnJvbSBcIi4uL2RhdGFfc3RvcmFnZS9kYXRhYmFzZVwiO1xuXG5jb25zdCBDYXJkID0gKHsgaWQsIHF1b3RlID0gXCJRVU9URVwiLCBkZXNjcmlwdGlvbiA9IFwiREVTQ1JJUFRJT04gSEVSRVwiIH0pID0+IHtcbiAgY29uc3QgcmVuZGVyRGF0YWJhc2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bD5cbiAgICAgICAge2RhdGFiYXNlW2lkXS50ZWNobm9sb2d5Lm1hcCh0ZWNoID0+IChcbiAgICAgICAgICA8bGkga2V5PXt0ZWNofT57dGVjaH08L2xpPlxuICAgICAgICApKX1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjNjViMmQ4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgPFBvc3RJbWcgaWQ9e2lkfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC0tZGVzY1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgPFBvc3RMaW5rIGlkPXtpZH0gLz5cbiAgICAgICAgICAgIDxoMT57cXVvdGV9PC9oMT5cbiAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2gtd3JhcHBlclwiPntyZW5kZXJEYXRhYmFzZSgpfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMzVweCAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aWR0aDogNTUlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQtLWRlc2Mge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dC13cmFwcGVyIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRlY2gtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAtMTBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Card.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/Projects.js":
/*!********************************!*\
  !*** ./components/Projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _data_storage_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data_storage/database */ "./data_storage/database.js");

var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/components/Projects.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

 // const values = Object.values(database);
// const entries = Object.entries(database);

var Projects = function Projects() {
  var makeCard = function makeCard() {
    var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_data_storage_database__WEBPACK_IMPORTED_MODULE_4__["database"]);

    return keys.map(function (item) {
      return __jsx(_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: item,
        key: item,
        quote: _data_storage_database__WEBPACK_IMPORTED_MODULE_4__["database"][item].quote,
        description: _data_storage_database__WEBPACK_IMPORTED_MODULE_4__["database"][item].description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      });
    });
  };

  return __jsx("section", {
    className: "jsx-3263687078" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3263687078",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3263687078",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Selected Projects")), __jsx("ul", {
    className: "jsx-3263687078",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, makeCard()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3263687078",
    __self: this
  }, ".main.jsx-3263687078{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;}h1.jsx-3263687078{font-size:45px;margin-bottom:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9Qcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQlMsQUFHMEIsQUFLRSxlQUNJLG1CQUNyQix3Q0FOd0IsOEVBQ0osa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9Qcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcbmltcG9ydCB7IGRhdGFiYXNlIH0gZnJvbSBcIi4uL2RhdGFfc3RvcmFnZS9kYXRhYmFzZVwiO1xuXG4vLyBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKGRhdGFiYXNlKTtcbi8vIGNvbnN0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhkYXRhYmFzZSk7XG5cbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xuICBjb25zdCBtYWtlQ2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YWJhc2UpO1xuICAgIHJldHVybiBrZXlzLm1hcChpdGVtID0+IChcbiAgICAgIDxDYXJkXG4gICAgICAgIGlkPXtpdGVtfVxuICAgICAgICBrZXk9e2l0ZW19XG4gICAgICAgIHF1b3RlPXtkYXRhYmFzZVtpdGVtXS5xdW90ZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2RhdGFiYXNlW2l0ZW1dLmRlc2NyaXB0aW9ufVxuICAgICAgLz5cbiAgICApKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5TZWxlY3RlZCBQcm9qZWN0czwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bD57bWFrZUNhcmQoKX08L3VsPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAubWFpbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Projects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./data_storage/database.js":
/*!**********************************!*\
  !*** ./data_storage/database.js ***!
  \**********************************/
/*! exports provided: database, blogContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "database", function() { return database; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blogContent", function() { return blogContent; });
var database = {
  "Portfolio-Website": {
    quote: "Showcasing my works in progress!",
    description: "Front-end website built with React and NextJS",
    technology: ["react", "nextJS", "styled-jsx", "dynamic pages | routing", "adobe XD | prototyping", "git"]
  },
  Expensify: {
    quote: "Quickly Sort & Track your Expenses",
    description: "Full-stack web application built with React",
    technology: ["react", "redux", "react-router", "webpack", "babel", "jest", "enzyme", "firebase", "heroku", "git", "scss | sass", "auth"]
  },
  Specula: {
    quote: "Compare and Track Phone Specs",
    descripition: "Full-stack web application built with React",
    technology: ["HTML", "css | sass", "adobe Indesign", "hosting", "git"]
  },
  "React-Tetris": {
    quote: "This is where it all started.",
    description: "Original Tetris game built with React",
    technology: ["create-react-app", "scss | sass", "git"]
  },
  Indecision: {
    quote: "Get Things Done. Now.",
    description: "Front-end web application built with React",
    technology: ["react", "babel", "scss | sass", "git", "webpack"]
  }
};
var blogContent = [{
  id: "self-taught-challenges",
  title: "Challenges of a Self-Taught Developer",
  body: "\n        I feel as if coding is seen as \"sexy, sleek, and fun\" in today's\n        standards. With so many \"tech influencers\" on social media flexing\n        their amazing income, free meals, playing foosball during work, and\n        showing off their teslas. "
}, {
  id: "loops",
  title: "Looping through objects"
}, {
  id: "reflections",
  title: "Current Reflections"
}, {
  id: "GitHub Contribution Struggles",
  title: "My Thoughts on GitHub Contributions"
}];

/***/ })

})
//# sourceMappingURL=index.js.91ce5f36a0cc2bbd4750.hot-update.js.map