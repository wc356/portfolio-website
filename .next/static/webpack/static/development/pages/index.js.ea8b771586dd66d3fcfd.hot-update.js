webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Projects.js":
/*!********************************!*\
  !*** ./components/Projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _data_storage_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data_storage/database */ "./data_storage/database.js");



var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/components/Projects.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



var Projects = function Projects() {
  var makeCard = function makeCard() {
    var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(_data_storage_database__WEBPACK_IMPORTED_MODULE_6__["default"]);

    var values = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(_data_storage_database__WEBPACK_IMPORTED_MODULE_6__["default"]);

    var entries = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default()(_data_storage_database__WEBPACK_IMPORTED_MODULE_6__["default"]); // Return array of key-value pairs


    var arr = [];
    keys.forEach(function (key) {
      arr.push(_data_storage_database__WEBPACK_IMPORTED_MODULE_6__["default"][key]).unshift(key.stringify());
    });
    console.log(arr);
    return arr.map(function (item) {
      return __jsx(_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: item,
        key: item,
        quote: item.quote,
        description: item.description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      });
    });
    keys.map(function (item) {
      return __jsx(_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: item,
        key: item,
        quote: values.quote,
        description: values.description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      });
    });
  };

  return __jsx("section", {
    className: "jsx-1198468308" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1198468308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1198468308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Selected Projects")), __jsx("ul", {
    className: "jsx-1198468308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, makeCard()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1198468308",
    __self: this
  }, ".main.jsx-1198468308{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 120px;text-align:center;}h1.jsx-1198468308{font-size:45px;margin-bottom:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9Qcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q1MsQUFHMEIsQUFNRSxlQUNJLG1CQUNyQix3Q0FQd0IsOEVBQ1AsZUFDRyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9jb21wb25lbnRzL1Byb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xuaW1wb3J0IGRhdGFiYXNlIGZyb20gXCIuLi9kYXRhX3N0b3JhZ2UvZGF0YWJhc2VcIjtcblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IG1ha2VDYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhYmFzZSk7XG4gICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXRhYmFzZSk7XG4gICAgY29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGRhdGFiYXNlKTsgLy8gUmV0dXJuIGFycmF5IG9mIGtleS12YWx1ZSBwYWlyc1xuXG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgYXJyLnB1c2goZGF0YWJhc2Vba2V5XSkudW5zaGlmdChrZXkuc3RyaW5naWZ5KCkpO1xuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coYXJyKTtcbiAgICByZXR1cm4gYXJyLm1hcChpdGVtID0+IChcbiAgICAgIDxDYXJkXG4gICAgICAgIGlkPXtpdGVtfVxuICAgICAgICBrZXk9e2l0ZW19XG4gICAgICAgIHF1b3RlPXtpdGVtLnF1b3RlfVxuICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgIC8+XG4gICAgKSk7XG5cbiAgICBrZXlzLm1hcChpdGVtID0+IChcbiAgICAgIDxDYXJkXG4gICAgICAgIGlkPXtpdGVtfVxuICAgICAgICBrZXk9e2l0ZW19XG4gICAgICAgIHF1b3RlPXt2YWx1ZXMucXVvdGV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXt2YWx1ZXMuZGVzY3JpcHRpb259XG4gICAgICAvPlxuICAgICkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlNlbGVjdGVkIFByb2plY3RzPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsPnttYWtlQ2FyZCgpfTwvdWw+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5tYWluIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDEyMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Projects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.ea8b771586dd66d3fcfd.hot-update.js.map