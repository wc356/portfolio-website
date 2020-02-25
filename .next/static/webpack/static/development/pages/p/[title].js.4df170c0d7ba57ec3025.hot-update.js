webpackHotUpdate("static/development/pages/p/[title].js",{

/***/ "./pages/p/[title].js":
/*!****************************!*\
  !*** ./pages/p/[title].js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _data_storage_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data_storage/database */ "./data_storage/database.js");
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/pages/p/[title].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// import Markdown from "react-markdown";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var handleBody = function handleBody() {
    var title = router.query.title;
    var body = _data_storage_database__WEBPACK_IMPORTED_MODULE_4__["blogContent"].map(function (post) {
      if (post.title === title) {
        return __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, post.body);
      }
    });
    return body;
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2759448775" + " " + "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2759448775",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, router.query.title), __jsx("p", {
    className: "jsx-2759448775",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, handleBody())), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2759448775",
    __self: this
  }, "h1.jsx-2759448775{font-size:40px;font-weight:400;margin:50px 0;}.layout.jsx-2759448775{padding:50px 230px;line-height:1.5;background-color:rgb(239,239,239);}p.jsx-2759448775{white-space:pre-wrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvcC9bdGl0bGVdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCa0IsQUFHMEIsQUFLSSxBQUtFLGVBVEwsSUFLQSxFQUtsQixVQVRnQixJQUtzQixVQUp0Qyx3QkFLQSIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL3BhZ2VzL3AvW3RpdGxlXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IGJsb2dDb250ZW50IH0gZnJvbSBcIi4uLy4uL2RhdGFfc3RvcmFnZS9kYXRhYmFzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZUJvZHkgPSAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSByb3V0ZXIucXVlcnkudGl0bGU7XG4gICAgY29uc3QgYm9keSA9IGJsb2dDb250ZW50Lm1hcChwb3N0ID0+IHtcbiAgICAgIGlmIChwb3N0LnRpdGxlID09PSB0aXRsZSkge1xuICAgICAgICByZXR1cm4gPHA+e3Bvc3QuYm9keX08L3A+O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBib2R5O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICAgIDxoMT57cm91dGVyLnF1ZXJ5LnRpdGxlfTwvaDE+XG4gICAgICAgIDxwPntoYW5kbGVCb2R5KCl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBtYXJnaW46IDUwcHggMDtcbiAgICAgICAgfVxuICAgICAgICAubGF5b3V0IHtcbiAgICAgICAgICBwYWRkaW5nOiA1MHB4IDIzMHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMjM5LCAyMzkpO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/pages/p/[title].js */"));
});

/***/ })

})
//# sourceMappingURL=[title].js.4df170c0d7ba57ec3025.hot-update.js.map