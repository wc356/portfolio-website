webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_storage_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data_storage/database */ "./data_storage/database.js");
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/pages/blog.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;
// import Link from "next/link";





/* harmony default export */ __webpack_exports__["default"] = (function () {
  // Add Post
  var addPosts = function addPosts() {
    var posts = _data_storage_database__WEBPACK_IMPORTED_MODULE_5__["blogContent"].map(function (post) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/p/[title]",
        as: "/p/".concat(post.title),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx("li", {
        key: post.id,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1857407212", [_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.black]]]) + " " + "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx("h1", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1857407212", [_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.black]]]) + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, post.title), __jsx("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1857407212", [_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.black]]]) + " " + "date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "added Oct. 12 2019"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "1857407212",
        dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.black],
        __self: this
      }, ".card.__jsx-style-dynamic-selector{display:block;cursor:pointer;height:200px;width:200px;border:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.gray, " 1px solid;border-radius:10px;padding:20px;margin-bottom:10px;word-break:break-word;}.card.__jsx-style-dynamic-selector:hover{-webkit-transform:translateY(-7px);-ms-transform:translateY(-7px);transform:translateY(-7px);}.title.__jsx-style-dynamic-selector{color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.black, ";-webkit-text-decoration:none;text-decoration:none;font-size:16px;font-weight:600;}.date.__jsx-style-dynamic-selector{font-size:14px;margin-top:5px;color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.black, ";font-weight:400;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQlcsQUFHNkIsQUFXYSxBQUdRLEFBTXBCLGNBbkJBLENBb0JBLGNBbkJGLENBb0JzQixLQVBkLE9BWlQsWUFDa0MsV0FtQjlCLGdCQUNsQixJQVJpQixRQUpqQixPQVBxQixBQVlILGdCQUNsQixHQVplLGFBQ00sbUJBQ0csc0JBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvYmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBibG9nQ29udGVudCB9IGZyb20gXCIuLi9kYXRhX3N0b3JhZ2UvZGF0YWJhc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvLyBBZGQgUG9zdFxuICBjb25zdCBhZGRQb3N0cyA9ICgpID0+IHtcbiAgICBjb25zdCBwb3N0cyA9IGJsb2dDb250ZW50Lm1hcChwb3N0ID0+IChcbiAgICAgIDw+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcC9bdGl0bGVdXCIgYXM9e2AvcC8ke3Bvc3QudGl0bGV9YH0+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNhcmRcIiBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRhdGVcIj5hZGRlZCBPY3QuIDEyIDIwMTk8L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAke3RoZW1lLmNvbG9ycy5ncmF5fSAxcHggc29saWQ7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZDpob3ZlciB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtN3B4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibGFja307XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmJsYWNrfTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC8+XG4gICAgKSk7XG4gICAgcmV0dXJuIHBvc3RzO1xuICB9O1xuXG4gIC8vIExheW91dFxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2FyZHNcIj57YWRkUG9zdHMoKX08L3VsPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sYXlvdXQge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDcwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZHMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/pages/blog.js */")));
    });
    return posts;
  }; // Layout


  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2289541641" + " " + "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-2289541641",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-2289541641" + " " + "cards",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, addPosts()))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2289541641",
    __self: this
  }, "h1.jsx-2289541641{color:black;font-size:60px;font-weight:400;margin-bottom:20px;}.layout.jsx-2289541641{padding-top:70px;padding-left:120px;padding-right:30px;min-height:100vh;}.cards.jsx-2289541641{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:90px;border-radius:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RFMsQUFHeUIsQUFNSyxBQU1KLFlBWEUsS0FNSSxVQUxILFNBTUcsT0FMQSxZQU1GLE9BTG5CLFVBTUEsRUFHZ0MsbUhBQ2YseURBQ0csa0JBQ0MsbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvYmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBibG9nQ29udGVudCB9IGZyb20gXCIuLi9kYXRhX3N0b3JhZ2UvZGF0YWJhc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvLyBBZGQgUG9zdFxuICBjb25zdCBhZGRQb3N0cyA9ICgpID0+IHtcbiAgICBjb25zdCBwb3N0cyA9IGJsb2dDb250ZW50Lm1hcChwb3N0ID0+IChcbiAgICAgIDw+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcC9bdGl0bGVdXCIgYXM9e2AvcC8ke3Bvc3QudGl0bGV9YH0+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNhcmRcIiBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRhdGVcIj5hZGRlZCBPY3QuIDEyIDIwMTk8L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAke3RoZW1lLmNvbG9ycy5ncmF5fSAxcHggc29saWQ7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZDpob3ZlciB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtN3B4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibGFja307XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmJsYWNrfTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC8+XG4gICAgKSk7XG4gICAgcmV0dXJuIHBvc3RzO1xuICB9O1xuXG4gIC8vIExheW91dFxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2FyZHNcIj57YWRkUG9zdHMoKX08L3VsPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sYXlvdXQge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDcwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZHMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/pages/blog.js */"));
});

/***/ })

})
//# sourceMappingURL=blog.js.2d71e1993f232db2b71a.hot-update.js.map