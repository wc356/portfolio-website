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
    }, _data_storage_database__WEBPACK_IMPORTED_MODULE_3__["default"][id].technology.map(function (tech) {
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
    }, "ul.jsx-760878023{display:inline-block;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}li.jsx-760878023{display:inline-block;padding:8px;margin-right:10px;margin-bottom:10px;color:black;border:3px solid #65b2d8;border-radius:9px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdXLEFBR29DLEFBS0EscUJBSkYsQUFLUCxZQUNNLGtCQUNDLG1CQUNQLFlBQ2EsUUFSVixpQkFTRyxrQkFDcEIsc0JBVEEiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb3N0TGluaywgUG9zdEltZyB9IGZyb20gXCIuLi9hY3Rpb25zL1Bvc3RcIjtcbmltcG9ydCBkYXRhYmFzZSBmcm9tIFwiLi4vZGF0YV9zdG9yYWdlL2RhdGFiYXNlXCI7XG5cbmNvbnN0IENhcmQgPSAoeyBpZCwgcXVvdGUgPSBcIlFVT1RFXCIsIGRlc2NyaXB0aW9uID0gXCJERVNDUklQVElPTiBIRVJFXCIgfSkgPT4ge1xuICBjb25zdCByZW5kZXJEYXRhYmFzZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsPlxuICAgICAgICB7ZGF0YWJhc2VbaWRdLnRlY2hub2xvZ3kubWFwKHRlY2ggPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3RlY2h9Pnt0ZWNofTwvbGk+XG4gICAgICAgICkpfVxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM2NWIyZDg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC91bD5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICA8UG9zdEltZyBpZD17aWR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLS1kZXNjXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICA8UG9zdExpbmsgaWQ9e2lkfSAvPlxuICAgICAgICAgICAgPGgxPntxdW90ZX08L2gxPlxuICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaC13cmFwcGVyXCI+e3JlbmRlckRhdGFiYXNlKCl9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAzNXB4IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdpZHRoOiA1NSU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDExMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZC0tZGVzYyB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0LXdyYXBwZXIge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGVjaC13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMCA0MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IC0xMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Card.js */"));
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
  }, ".wrapper.jsx-1838297711{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:35px 0px;}.card.jsx-1838297711{display:block;height:350px;overflow:hidden;width:55%;border:1px solid gray;margin-left:110px;}.card--desc.jsx-1838297711{margin-left:0;width:45%;border:none;text-align:center;}.text-wrapper.jsx-1838297711{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;}.text.jsx-1838297711{position:relative;white-space:pre-line;height:100%;}.tech-wrapper.jsx-1838297711{display:block;position:absolute;bottom:0;padding:0 40px;width:100%;margin:-10px 0;}h1.jsx-1838297711{margin-bottom:20px;margin-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEUyxBQUcwQixBQUlDLEFBUUEsQUFNSyxBQUlELEFBS0osQUFRSyxjQTlCTixBQVFILEFBZVEsSUFMRyxDQWFMLEtBdEJKLEdBUkksS0F1QlAsR0FRWCxDQXRCb0IsR0FTTixFQU1HLEVBdkJMLFFBa0JaLEVBakJ3QixDQVF4QixFQWVhLFdBQ0ksT0EvQkUsQ0FRQyxPQXdCcEIsU0EvQkEsRUFRQSxBQVNjLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb3N0TGluaywgUG9zdEltZyB9IGZyb20gXCIuLi9hY3Rpb25zL1Bvc3RcIjtcbmltcG9ydCBkYXRhYmFzZSBmcm9tIFwiLi4vZGF0YV9zdG9yYWdlL2RhdGFiYXNlXCI7XG5cbmNvbnN0IENhcmQgPSAoeyBpZCwgcXVvdGUgPSBcIlFVT1RFXCIsIGRlc2NyaXB0aW9uID0gXCJERVNDUklQVElPTiBIRVJFXCIgfSkgPT4ge1xuICBjb25zdCByZW5kZXJEYXRhYmFzZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsPlxuICAgICAgICB7ZGF0YWJhc2VbaWRdLnRlY2hub2xvZ3kubWFwKHRlY2ggPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3RlY2h9Pnt0ZWNofTwvbGk+XG4gICAgICAgICkpfVxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM2NWIyZDg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC91bD5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICA8UG9zdEltZyBpZD17aWR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLS1kZXNjXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICA8UG9zdExpbmsgaWQ9e2lkfSAvPlxuICAgICAgICAgICAgPGgxPntxdW90ZX08L2gxPlxuICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaC13cmFwcGVyXCI+e3JlbmRlckRhdGFiYXNlKCl9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAzNXB4IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdpZHRoOiA1NSU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDExMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZC0tZGVzYyB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0LXdyYXBwZXIge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGVjaC13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMCA0MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IC0xMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Card.js */"));
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
    var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_data_storage_database__WEBPACK_IMPORTED_MODULE_4__["default"]);

    return keys.map(function (item) {
      return __jsx(_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: item,
        key: item,
        quote: _data_storage_database__WEBPACK_IMPORTED_MODULE_4__["default"][item].quote,
        description: _data_storage_database__WEBPACK_IMPORTED_MODULE_4__["default"][item].description,
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
  }, ".main.jsx-3263687078{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;}h1.jsx-3263687078{font-size:45px;margin-bottom:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9Qcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQlMsQUFHMEIsQUFLRSxlQUNJLG1CQUNyQix3Q0FOd0IsOEVBQ0osa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9Qcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcbmltcG9ydCBkYXRhYmFzZSBmcm9tIFwiLi4vZGF0YV9zdG9yYWdlL2RhdGFiYXNlXCI7XG5cbi8vIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMoZGF0YWJhc2UpO1xuLy8gY29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGRhdGFiYXNlKTtcblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IG1ha2VDYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhYmFzZSk7XG4gICAgcmV0dXJuIGtleXMubWFwKGl0ZW0gPT4gKFxuICAgICAgPENhcmRcbiAgICAgICAgaWQ9e2l0ZW19XG4gICAgICAgIGtleT17aXRlbX1cbiAgICAgICAgcXVvdGU9e2RhdGFiYXNlW2l0ZW1dLnF1b3RlfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZGF0YWJhc2VbaXRlbV0uZGVzY3JpcHRpb259XG4gICAgICAvPlxuICAgICkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlNlbGVjdGVkIFByb2plY3RzPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsPnttYWtlQ2FyZCgpfTwvdWw+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5tYWluIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Projects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./data_storage/database.js":
/*!**********************************!*\
  !*** ./data_storage/database.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  database: database,
  blogContent: blogContent
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Landing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Landing */ "./components/Landing.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/About */ "./components/About.js");
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Projects */ "./components/Projects.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Contact */ "./components/Contact.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






 // Render

/* harmony default export */ __webpack_exports__["default"] = (LandingPage = function LandingPage() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log("useEffect ran");
  });
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_components_Landing__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(_components_About__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(_components_Projects__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.221ba24d22ee7523cf6b.hot-update.js.map