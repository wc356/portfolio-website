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
    }, "ul.jsx-760878023{display:inline-block;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}li.jsx-760878023{display:inline-block;padding:8px;margin-right:10px;margin-bottom:10px;color:black;border:3px solid #65b2d8;border-radius:9px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdXLEFBR29DLEFBS0EscUJBSkYsQUFLUCxZQUNNLGtCQUNDLG1CQUNQLFlBQ2EsUUFSVixpQkFTRyxrQkFDcEIsc0JBVEEiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb3N0TGluaywgUG9zdEltZyB9IGZyb20gXCIuLi9hY3Rpb25zL1Bvc3RcIjtcbmltcG9ydCBkYXRhYmFzZSBmcm9tIFwiLi4vZGF0YV9zdG9yYWdlL2RhdGFiYXNlXCI7XG5cbmNvbnN0IENhcmQgPSAoeyBpZCwgcXVvdGUgPSBcIlFVT1RFXCIsIGRlc2NyaXB0aW9uID0gXCJERVNDUklQVElPTiBIRVJFXCIgfSkgPT4ge1xuICBjb25zdCByZW5kZXJEYXRhYmFzZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsPlxuICAgICAgICB7ZGF0YWJhc2VbaWRdLnRlY2hub2xvZ3kubWFwKHRlY2ggPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3RlY2h9Pnt0ZWNofTwvbGk+XG4gICAgICAgICkpfVxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM2NWIyZDg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC91bD5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICA8UG9zdEltZyBpZD17aWR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLS1kZXNjXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICA8UG9zdExpbmsgaWQ9e2lkfSAvPlxuICAgICAgICAgICAgPGgxPntxdW90ZX08L2gxPlxuICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaC13cmFwcGVyXCI+e3JlbmRlckRhdGFiYXNlKCl9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAzNXB4IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZC0tZGVzYyB7XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dC13cmFwcGVyIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRlY2gtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAtMTBweCAwO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGxlZnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Card.js */"));
  };

  return __jsx("li", {
    className: "jsx-1356351491" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1356351491" + " " + "card",
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
    className: "jsx-1356351491" + " " + "card card--desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1356351491" + " " + "text-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1356351491" + " " + "text",
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
    className: "jsx-1356351491",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, quote), __jsx("p", {
    className: "jsx-1356351491",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, description), __jsx("div", {
    className: "jsx-1356351491" + " " + "tech-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, renderDatabase())))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1356351491",
    __self: this
  }, ".wrapper.jsx-1356351491{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:35px 0px;}.card.jsx-1356351491{display:block;height:350px;overflow:hidden;width:60%;border:1px solid gray;}.card--desc.jsx-1356351491{width:40%;border:none;text-align:center;}.text-wrapper.jsx-1356351491{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;}.text.jsx-1356351491{position:relative;white-space:pre-line;height:100%;}.tech-wrapper.jsx-1356351491{display:block;position:absolute;bottom:0;padding:0 30px;width:100%;margin:-10px 0;-webkit-align-items:left;-webkit-box-align:left;-ms-flex-align:left;align-items:left;}h1.jsx-1356351491{margin-bottom:20px;margin-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEUyxBQUcwQixBQUlDLEFBT0osQUFLUyxBQUlELEFBS0osQUFTSyxVQXRCUCxJQVBDLEFBcUJLLElBTEcsQ0FjTCxHQXRCRSxLQVBGLEtBcUJQLEdBU1gsSUFkYyxDQVJkLENBY2lCLEVBckJMLFFBZ0JaLEVBZndCLEdBcUJYLFdBQ0ksT0E3QkUsQ0FRbkIsT0FzQm1CLFNBN0JuQixFQWVjLFlBQ2QsOERBY0EiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb3N0TGluaywgUG9zdEltZyB9IGZyb20gXCIuLi9hY3Rpb25zL1Bvc3RcIjtcbmltcG9ydCBkYXRhYmFzZSBmcm9tIFwiLi4vZGF0YV9zdG9yYWdlL2RhdGFiYXNlXCI7XG5cbmNvbnN0IENhcmQgPSAoeyBpZCwgcXVvdGUgPSBcIlFVT1RFXCIsIGRlc2NyaXB0aW9uID0gXCJERVNDUklQVElPTiBIRVJFXCIgfSkgPT4ge1xuICBjb25zdCByZW5kZXJEYXRhYmFzZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsPlxuICAgICAgICB7ZGF0YWJhc2VbaWRdLnRlY2hub2xvZ3kubWFwKHRlY2ggPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3RlY2h9Pnt0ZWNofTwvbGk+XG4gICAgICAgICkpfVxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM2NWIyZDg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC91bD5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICA8UG9zdEltZyBpZD17aWR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLS1kZXNjXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICA8UG9zdExpbmsgaWQ9e2lkfSAvPlxuICAgICAgICAgICAgPGgxPntxdW90ZX08L2gxPlxuICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaC13cmFwcGVyXCI+e3JlbmRlckRhdGFiYXNlKCl9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAzNXB4IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZC0tZGVzYyB7XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dC13cmFwcGVyIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRlY2gtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAtMTBweCAwO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGxlZnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Card.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.4aeff444eeabf492b230.hot-update.js.map