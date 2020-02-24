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
          lineNumber: 12
        },
        __self: this
      });
    });
  };

  return __jsx("section", {
    className: "jsx-1198468308" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1198468308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1198468308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Selected Projects")), __jsx("ul", {
    className: "jsx-1198468308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, makeCard()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1198468308",
    __self: this
  }, ".main.jsx-1198468308{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 120px;text-align:center;}h1.jsx-1198468308{font-size:45px;margin-bottom:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9Qcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQlMsQUFHMEIsQUFNRSxlQUNJLG1CQUNyQix3Q0FQd0IsOEVBQ1AsZUFDRyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9jb21wb25lbnRzL1Byb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xuaW1wb3J0IGRhdGFiYXNlIGZyb20gXCIuLi9kYXRhX3N0b3JhZ2UvZGF0YWJhc2VcIjtcblxuLy8gY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXRhYmFzZSk7XG4vLyBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoZGF0YWJhc2UpO1xuXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc3QgbWFrZUNhcmQgPSAoKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGFiYXNlKTtcblxuICAgIHJldHVybiBrZXlzLm1hcChpdGVtID0+IChcbiAgICAgIDxDYXJkXG4gICAgICAgIGlkPXtpdGVtfVxuICAgICAgICBrZXk9e2l0ZW19XG4gICAgICAgIHF1b3RlPXtkYXRhYmFzZVtpdGVtXS5xdW90ZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2RhdGFiYXNlW2l0ZW1dLmRlc2NyaXB0aW9ufVxuICAgICAgLz5cbiAgICApKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5TZWxlY3RlZCBQcm9qZWN0czwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bD57bWFrZUNhcmQoKX08L3VsPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAubWFpbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Projects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.9a6f93c830d86d38f980.hot-update.js.map