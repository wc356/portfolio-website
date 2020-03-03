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
  }, __jsx("h1", {
    className: "jsx-3263687078",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Selected Projects"), __jsx("ul", {
    className: "jsx-3263687078",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, makeCard()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3263687078",
    __self: this
  }, ".main.jsx-3263687078{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;}h1.jsx-3263687078{font-size:45px;margin-bottom:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9Qcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QlMsQUFHMEIsQUFLRSxlQUNJLG1CQUNyQix3Q0FOd0IsOEVBQ0osa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9Qcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcbmltcG9ydCB7IGRhdGFiYXNlIH0gZnJvbSBcIi4uL2RhdGFfc3RvcmFnZS9kYXRhYmFzZVwiO1xuXG4vLyBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKGRhdGFiYXNlKTtcbi8vIGNvbnN0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhkYXRhYmFzZSk7XG5cbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xuICBjb25zdCBtYWtlQ2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YWJhc2UpO1xuICAgIHJldHVybiBrZXlzLm1hcChpdGVtID0+IChcbiAgICAgIDxDYXJkXG4gICAgICAgIGlkPXtpdGVtfVxuICAgICAgICBrZXk9e2l0ZW19XG4gICAgICAgIHF1b3RlPXtkYXRhYmFzZVtpdGVtXS5xdW90ZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2RhdGFiYXNlW2l0ZW1dLmRlc2NyaXB0aW9ufVxuICAgICAgLz5cbiAgICApKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxoMT5TZWxlY3RlZCBQcm9qZWN0czwvaDE+XG4gICAgICA8dWw+e21ha2VDYXJkKCl9PC91bD5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm1haW4ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Projects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.10892cf1b9ad844b917c.hot-update.js.map