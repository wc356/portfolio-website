webpackHotUpdate("static/development/pages/index.js",{

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
    className: "jsx-2623473219" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2623473219",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2623473219",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Selected Projects")), __jsx("ul", {
    className: "jsx-2623473219",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, makeCard()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2623473219",
    __self: this
  }, ".main.jsx-2623473219{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 90px;text-align:center;}h1.jsx-2623473219{font-size:45px;margin-bottom:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9Qcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQlMsQUFHMEIsQUFNRSxlQUNJLG1CQUNyQix3Q0FQd0IsOEVBQ1IsY0FDSSxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9jb21wb25lbnRzL1Byb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xuaW1wb3J0IGRhdGFiYXNlIGZyb20gXCIuLi9kYXRhX3N0b3JhZ2UvZGF0YWJhc2VcIjtcblxuLy8gY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXRhYmFzZSk7XG4vLyBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoZGF0YWJhc2UpO1xuXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc3QgbWFrZUNhcmQgPSAoKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGFiYXNlKTtcbiAgICByZXR1cm4ga2V5cy5tYXAoaXRlbSA9PiAoXG4gICAgICA8Q2FyZFxuICAgICAgICBpZD17aXRlbX1cbiAgICAgICAga2V5PXtpdGVtfVxuICAgICAgICBxdW90ZT17ZGF0YWJhc2VbaXRlbV0ucXVvdGV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtkYXRhYmFzZVtpdGVtXS5kZXNjcmlwdGlvbn1cbiAgICAgIC8+XG4gICAgKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+U2VsZWN0ZWQgUHJvamVjdHM8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWw+e21ha2VDYXJkKCl9PC91bD5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm1haW4ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBtYXJnaW46IDAgOTBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Projects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.1cf273f03dfb7123d376.hot-update.js.map