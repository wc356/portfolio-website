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
      className: "jsx-653526498",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, _data_storage_database__WEBPACK_IMPORTED_MODULE_3__["default"][id].technology.map(function (tech) {
      return __jsx("li", {
        key: tech,
        className: "jsx-653526498",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, tech);
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "653526498",
      __self: this
    }, "ul.jsx-653526498{display:inline-block;-webkit-align-items:normal;-webkit-box-align:normal;-ms-flex-align:normal;align-items:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}li.jsx-653526498{display:inline-block;padding:8px;margin-right:10px;margin-bottom:10px;color:black;border:3px solid #65b2d8;border-radius:9px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdXLEFBR29DLEFBTUEscUJBTEYsQUFNUCxZQUNNLGtCQUNDLG1CQUNQLFlBQ2EseUJBQ1AsT0FWQyxXQVdyQiwwREFWaUIseURBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9DYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9zdExpbmssIFBvc3RJbWcgfSBmcm9tIFwiLi4vYWN0aW9ucy9Qb3N0XCI7XG5pbXBvcnQgZGF0YWJhc2UgZnJvbSBcIi4uL2RhdGFfc3RvcmFnZS9kYXRhYmFzZVwiO1xuXG5jb25zdCBDYXJkID0gKHsgaWQsIHF1b3RlID0gXCJRVU9URVwiLCBkZXNjcmlwdGlvbiA9IFwiREVTQ1JJUFRJT04gSEVSRVwiIH0pID0+IHtcbiAgY29uc3QgcmVuZGVyRGF0YWJhc2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bD5cbiAgICAgICAge2RhdGFiYXNlW2lkXS50ZWNobm9sb2d5Lm1hcCh0ZWNoID0+IChcbiAgICAgICAgICA8bGkga2V5PXt0ZWNofT57dGVjaH08L2xpPlxuICAgICAgICApKX1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBub3JtYWw7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjNjViMmQ4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgPFBvc3RJbWcgaWQ9e2lkfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC0tZGVzY1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgPFBvc3RMaW5rIGlkPXtpZH0gLz5cbiAgICAgICAgICAgIDxoMT57cXVvdGV9PC9oMT5cbiAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2gtd3JhcHBlclwiPntyZW5kZXJEYXRhYmFzZSgpfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMzVweCAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQtLWRlc2Mge1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHQtd3JhcHBlciB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZWNoLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogLTEwcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2xpPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Card.js */"));
  };

  return __jsx("li", {
    className: "jsx-3710832110" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3710832110" + " " + "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_actions_Post__WEBPACK_IMPORTED_MODULE_2__["PostImg"], {
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3710832110" + " " + "card card--desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3710832110" + " " + "text-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3710832110" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_actions_Post__WEBPACK_IMPORTED_MODULE_2__["PostLink"], {
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("h1", {
    className: "jsx-3710832110",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, quote), __jsx("p", {
    className: "jsx-3710832110",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, description), __jsx("div", {
    className: "jsx-3710832110" + " " + "tech-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, renderDatabase())))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3710832110",
    __self: this
  }, ".wrapper.jsx-3710832110{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:35px 0px;}.card.jsx-3710832110{display:block;height:350px;overflow:hidden;width:60%;border:1px solid gray;}.card--desc.jsx-3710832110{width:40%;border:none;text-align:center;}.text-wrapper.jsx-3710832110{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;}.text.jsx-3710832110{position:relative;white-space:pre-line;height:100%;}.tech-wrapper.jsx-3710832110{display:block;position:absolute;bottom:0;padding:0 30px;width:100%;margin:-10px 0;}h1.jsx-3710832110{margin-bottom:20px;margin-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEUyxBQUcwQixBQUlDLEFBT0osQUFLUyxBQUlELEFBS0osQUFRSyxVQXJCUCxJQVBDLEFBcUJLLElBTEcsQ0FhTCxHQXJCRSxLQVBGLEtBcUJQLEdBUVgsSUFiYyxDQVJkLENBY2lCLEVBckJMLFFBZ0JaLEVBZndCLEdBcUJYLFdBQ0ksT0E3QkUsQ0FRbkIsT0FzQkEsU0E3QkEsRUFlYyxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9DYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9zdExpbmssIFBvc3RJbWcgfSBmcm9tIFwiLi4vYWN0aW9ucy9Qb3N0XCI7XG5pbXBvcnQgZGF0YWJhc2UgZnJvbSBcIi4uL2RhdGFfc3RvcmFnZS9kYXRhYmFzZVwiO1xuXG5jb25zdCBDYXJkID0gKHsgaWQsIHF1b3RlID0gXCJRVU9URVwiLCBkZXNjcmlwdGlvbiA9IFwiREVTQ1JJUFRJT04gSEVSRVwiIH0pID0+IHtcbiAgY29uc3QgcmVuZGVyRGF0YWJhc2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bD5cbiAgICAgICAge2RhdGFiYXNlW2lkXS50ZWNobm9sb2d5Lm1hcCh0ZWNoID0+IChcbiAgICAgICAgICA8bGkga2V5PXt0ZWNofT57dGVjaH08L2xpPlxuICAgICAgICApKX1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBub3JtYWw7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjNjViMmQ4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgPFBvc3RJbWcgaWQ9e2lkfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC0tZGVzY1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgPFBvc3RMaW5rIGlkPXtpZH0gLz5cbiAgICAgICAgICAgIDxoMT57cXVvdGV9PC9oMT5cbiAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2gtd3JhcHBlclwiPntyZW5kZXJEYXRhYmFzZSgpfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMzVweCAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQtLWRlc2Mge1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHQtd3JhcHBlciB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZWNoLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogLTEwcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2xpPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Card.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.f3886c116165e6a1a3b9.hot-update.js.map