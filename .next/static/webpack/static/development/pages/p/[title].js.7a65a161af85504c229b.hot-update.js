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
    var body = _data_storage_database__WEBPACK_IMPORTED_MODULE_4__["blogContent"].map(function (post) {
      return __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, post.body);
    });
    return body;
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3432834312" + " " + "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3432834312",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, router.query.title), __jsx("p", {
    className: "jsx-3432834312",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, handleBody())), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3432834312",
    __self: this
  }, "h1.jsx-3432834312{font-size:40px;font-weight:400;margin:50px 0;}.layout.jsx-3432834312{padding:50px 230px;line-height:1.5;background-color:rgb(239,239,239);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvcC9bdGl0bGVdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ca0IsQUFHMEIsQUFLSSxlQUpILElBS0EsWUFKRixJQUtzQixVQUp0Qyx3QkFLQSIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL3BhZ2VzL3AvW3RpdGxlXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IGJsb2dDb250ZW50IH0gZnJvbSBcIi4uLy4uL2RhdGFfc3RvcmFnZS9kYXRhYmFzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZUJvZHkgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGJsb2dDb250ZW50Lm1hcChwb3N0ID0+IDxwPntwb3N0LmJvZHl9PC9wPik7XG4gICAgcmV0dXJuIGJvZHk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICAgICAgPGgxPntyb3V0ZXIucXVlcnkudGl0bGV9PC9oMT5cbiAgICAgICAgPHA+e2hhbmRsZUJvZHkoKX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIG1hcmdpbjogNTBweCAwO1xuICAgICAgICB9XG4gICAgICAgIC5sYXlvdXQge1xuICAgICAgICAgIHBhZGRpbmc6IDUwcHggMjMwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/pages/p/[title].js */"));
});

/***/ })

})
//# sourceMappingURL=[title].js.7a65a161af85504c229b.hot-update.js.map