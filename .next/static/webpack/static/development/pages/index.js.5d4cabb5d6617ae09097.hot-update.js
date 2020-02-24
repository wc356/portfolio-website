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
      className: "jsx-3079215999",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, _data_storage_database__WEBPACK_IMPORTED_MODULE_3__["default"][id].technology.map(function (tech) {
      return __jsx("li", {
        key: tech,
        className: "jsx-3079215999",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, tech);
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3079215999",
      __self: this
    }, "ul.jsx-3079215999{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}li.jsx-3079215999{display:block;padding:8px;margin-right:10px;margin-bottom:10px;color:black;border:3px solid #65b2d8;border-radius:9px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdXLEFBRzRCLEFBS0MsY0FDRixZQUNNLGtCQUNDLG1CQUNQLFdBUk8sQ0FTTSx5QkFDUCxrQkFDcEIseUJBVmlCLHlEQUNqQiIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL2NvbXBvbmVudHMvQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvc3RMaW5rLCBQb3N0SW1nIH0gZnJvbSBcIi4uL2FjdGlvbnMvUG9zdFwiO1xuaW1wb3J0IGRhdGFiYXNlIGZyb20gXCIuLi9kYXRhX3N0b3JhZ2UvZGF0YWJhc2VcIjtcblxuY29uc3QgQ2FyZCA9ICh7IGlkLCBxdW90ZSA9IFwiUVVPVEVcIiwgZGVzY3JpcHRpb24gPSBcIkRFU0NSSVBUSU9OIEhFUkVcIiB9KSA9PiB7XG4gIGNvbnN0IHJlbmRlckRhdGFiYXNlID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8dWw+XG4gICAgICAgIHtkYXRhYmFzZVtpZF0udGVjaG5vbG9neS5tYXAodGVjaCA9PiAoXG4gICAgICAgICAgPGxpIGtleT17dGVjaH0+e3RlY2h9PC9saT5cbiAgICAgICAgKSl9XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzY1YjJkODtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgIDxQb3N0SW1nIGlkPXtpZH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtLWRlc2NcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgIDxQb3N0TGluayBpZD17aWR9IC8+XG4gICAgICAgICAgICA8aDE+e3F1b3RlfTwvaDE+XG4gICAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWNoLXdyYXBwZXJcIj57cmVuZGVyRGF0YWJhc2UoKX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDM1cHggMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkLS1kZXNjIHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHQtd3JhcHBlciB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggNjBweDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGVjaC13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Card.js */"));
  };

  return __jsx("li", {
    className: "jsx-1228511054" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1228511054" + " " + "card",
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
    className: "jsx-1228511054" + " " + "card card--desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1228511054" + " " + "text-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1228511054" + " " + "text",
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
    className: "jsx-1228511054",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, quote), __jsx("p", {
    className: "jsx-1228511054",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, description), __jsx("div", {
    className: "jsx-1228511054" + " " + "tech-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, renderDatabase())))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1228511054",
    __self: this
  }, ".wrapper.jsx-1228511054{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:35px 0px;}.card.jsx-1228511054{display:block;height:350px;overflow:hidden;width:60%;border:1px solid gray;}.card--desc.jsx-1228511054{border:none;text-align:center;}.text-wrapper.jsx-1228511054{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;}.text.jsx-1228511054{padding:0px 60px;white-space:pre-line;height:100%;background-color:pink;}h1.jsx-1228511054{margin-bottom:20px;margin-top:10px;}.tech-wrapper.jsx-1228511054{display:block;position:relative;bottom:0;margin-top:30px;background-color:yellow;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEUyxBQUcwQixBQUlDLEFBT0YsQUFJTyxBQUlGLEFBTUUsQUFJTCxZQWpCSSxFQVBMLEFBeUJLLEdBVkcsRUFNTCxRQXBCQSxHQU9sQixFQWtCVyxHQUpYLEdBTmMsR0FXSSxFQXpCTixPQWVZLEdBZEEsSUF5QkUsZUFWMUIsRUF0Qm1CLENBUW5CLE1BeUJBLFVBaENBLEVBY2MsWUFDZCIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL2NvbXBvbmVudHMvQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvc3RMaW5rLCBQb3N0SW1nIH0gZnJvbSBcIi4uL2FjdGlvbnMvUG9zdFwiO1xuaW1wb3J0IGRhdGFiYXNlIGZyb20gXCIuLi9kYXRhX3N0b3JhZ2UvZGF0YWJhc2VcIjtcblxuY29uc3QgQ2FyZCA9ICh7IGlkLCBxdW90ZSA9IFwiUVVPVEVcIiwgZGVzY3JpcHRpb24gPSBcIkRFU0NSSVBUSU9OIEhFUkVcIiB9KSA9PiB7XG4gIGNvbnN0IHJlbmRlckRhdGFiYXNlID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8dWw+XG4gICAgICAgIHtkYXRhYmFzZVtpZF0udGVjaG5vbG9neS5tYXAodGVjaCA9PiAoXG4gICAgICAgICAgPGxpIGtleT17dGVjaH0+e3RlY2h9PC9saT5cbiAgICAgICAgKSl9XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzY1YjJkODtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgIDxQb3N0SW1nIGlkPXtpZH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtLWRlc2NcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgIDxQb3N0TGluayBpZD17aWR9IC8+XG4gICAgICAgICAgICA8aDE+e3F1b3RlfTwvaDE+XG4gICAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWNoLXdyYXBwZXJcIj57cmVuZGVyRGF0YWJhc2UoKX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDM1cHggMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkLS1kZXNjIHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHQtd3JhcHBlciB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggNjBweDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGVjaC13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Card.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.5d4cabb5d6617ae09097.hot-update.js.map