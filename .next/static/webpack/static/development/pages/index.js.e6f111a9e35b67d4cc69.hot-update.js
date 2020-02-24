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
      className: "jsx-1814393323",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, _data_storage_database__WEBPACK_IMPORTED_MODULE_3__["default"][id].technology.map(function (tech) {
      return __jsx("li", {
        key: _data_storage_database__WEBPACK_IMPORTED_MODULE_3__["default"][id],
        className: "jsx-1814393323",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, tech);
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1814393323",
      __self: this
    }, "ul.jsx-1814393323{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}li.jsx-1814393323{display:-webkit-box;display:-webkit-flexbox;display:-ms-flexboxbox;display:flexbox;padding:8px;margin-right:10px;margin-bottom:10px;color:black;border:3px solid #65b2d8;border-radius:9px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdXLEFBRzRCLEFBS0csMEVBSkcsU0FLUCxZQUNNLGtCQUNDLG1CQUNQLFdBUEcsQ0FRVSx5QkFDUCxrQkFDcEIsYUFUQSIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL2NvbXBvbmVudHMvQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvc3RMaW5rLCBQb3N0SW1nIH0gZnJvbSBcIi4uL2FjdGlvbnMvUG9zdFwiO1xuaW1wb3J0IGRhdGFiYXNlIGZyb20gXCIuLi9kYXRhX3N0b3JhZ2UvZGF0YWJhc2VcIjtcblxuY29uc3QgQ2FyZCA9ICh7IGlkLCBxdW90ZSA9IFwiUVVPVEVcIiwgZGVzY3JpcHRpb24gPSBcIkRFU0NSSVBUSU9OIEhFUkVcIiB9KSA9PiB7XG4gIGNvbnN0IHJlbmRlckRhdGFiYXNlID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8dWw+XG4gICAgICAgIHtkYXRhYmFzZVtpZF0udGVjaG5vbG9neS5tYXAodGVjaCA9PiAoXG4gICAgICAgICAgPGxpIGtleT17ZGF0YWJhc2VbaWRdfT57dGVjaH08L2xpPlxuICAgICAgICApKX1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXhib3g7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM2NWIyZDg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC91bD5cbiAgICApO1xuICB9O1xuXG4gIC8vIHZhbHVlcy5mb3JFYWNoKGkgPT4ge1xuICAvLyAgIGkudGVjaG5vbG9neS5mb3JFYWNoKCgpID0+IHtcbiAgLy8gICAgIHJldHVybiA8bGk+e09iamVjdC52YWx1ZXMoaS50ZWNobm9sb2d5KX08L2xpPjtcbiAgLy8gICB9KTtcbiAgLy8gfSlcblxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgPFBvc3RJbWcgaWQ9e2lkfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC0tZGVzY1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgPFBvc3RMaW5rIGlkPXtpZH0gLz5cbiAgICAgICAgICAgIDxoMT57cXVvdGV9PC9oMT5cbiAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2gtd3JhcHBlclwiPntyZW5kZXJEYXRhYmFzZSgpfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMzVweCAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQtLWRlc2Mge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dC13cmFwcGVyIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCA2MHB4O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRlY2gtd3JhcHBlciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Card.js */"));
  }; // values.forEach(i => {
  //   i.technology.forEach(() => {
  //     return <li>{Object.values(i.technology)}</li>;
  //   });
  // })


  return __jsx("li", {
    className: "jsx-1482108203" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1482108203" + " " + "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_actions_Post__WEBPACK_IMPORTED_MODULE_2__["PostImg"], {
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1482108203" + " " + "card card--desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1482108203" + " " + "text-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1482108203" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_actions_Post__WEBPACK_IMPORTED_MODULE_2__["PostLink"], {
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("h1", {
    className: "jsx-1482108203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, quote), __jsx("p", {
    className: "jsx-1482108203",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, description), __jsx("div", {
    className: "jsx-1482108203" + " " + "tech-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, renderDatabase())))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1482108203",
    __self: this
  }, ".wrapper.jsx-1482108203{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:35px 0px;}.card.jsx-1482108203{display:block;height:350px;overflow:hidden;width:60%;border:1px solid gray;}.card--desc.jsx-1482108203{border:none;text-align:center;}.text-wrapper.jsx-1482108203{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.text.jsx-1482108203{padding:0px 60px;white-space:pre-line;height:100%;}h1.jsx-1482108203{margin-bottom:20px;margin-top:10px;}.tech-wrapper.jsx-1482108203{margin-top:30px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEUyxBQUcwQixBQUlDLEFBT0YsQUFJTyxBQUdGLEFBS0UsQUFJSCxZQWZFLEVBUEwsRUF1QkssQ0FURyxFQUtMLFFBbEJBLEdBT2xCLElBZ0JBLENBSkEsR0FMYyxLQWJGLE9BY1osR0Fid0IscUJBUEwsQ0FRbkIsZ0JBUEEsRUFjQSIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL2NvbXBvbmVudHMvQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvc3RMaW5rLCBQb3N0SW1nIH0gZnJvbSBcIi4uL2FjdGlvbnMvUG9zdFwiO1xuaW1wb3J0IGRhdGFiYXNlIGZyb20gXCIuLi9kYXRhX3N0b3JhZ2UvZGF0YWJhc2VcIjtcblxuY29uc3QgQ2FyZCA9ICh7IGlkLCBxdW90ZSA9IFwiUVVPVEVcIiwgZGVzY3JpcHRpb24gPSBcIkRFU0NSSVBUSU9OIEhFUkVcIiB9KSA9PiB7XG4gIGNvbnN0IHJlbmRlckRhdGFiYXNlID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8dWw+XG4gICAgICAgIHtkYXRhYmFzZVtpZF0udGVjaG5vbG9neS5tYXAodGVjaCA9PiAoXG4gICAgICAgICAgPGxpIGtleT17ZGF0YWJhc2VbaWRdfT57dGVjaH08L2xpPlxuICAgICAgICApKX1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXhib3g7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM2NWIyZDg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC91bD5cbiAgICApO1xuICB9O1xuXG4gIC8vIHZhbHVlcy5mb3JFYWNoKGkgPT4ge1xuICAvLyAgIGkudGVjaG5vbG9neS5mb3JFYWNoKCgpID0+IHtcbiAgLy8gICAgIHJldHVybiA8bGk+e09iamVjdC52YWx1ZXMoaS50ZWNobm9sb2d5KX08L2xpPjtcbiAgLy8gICB9KTtcbiAgLy8gfSlcblxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgPFBvc3RJbWcgaWQ9e2lkfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC0tZGVzY1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgPFBvc3RMaW5rIGlkPXtpZH0gLz5cbiAgICAgICAgICAgIDxoMT57cXVvdGV9PC9oMT5cbiAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2gtd3JhcHBlclwiPntyZW5kZXJEYXRhYmFzZSgpfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMzVweCAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQtLWRlc2Mge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dC13cmFwcGVyIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCA2MHB4O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRlY2gtd3JhcHBlciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Card.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.e6f111a9e35b67d4cc69.hot-update.js.map