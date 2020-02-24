webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Projects.js":
/*!********************************!*\
  !*** ./components/Projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2__);
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
    // const keys = Object.keys(database);
    var values = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2___default()(_data_storage_database__WEBPACK_IMPORTED_MODULE_6__["default"]);

    var entries = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(_data_storage_database__WEBPACK_IMPORTED_MODULE_6__["default"]); // Return array of key-value pairs


    console.log(entries[0][1].quote);
    entries.forEach(function each(item) {
      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(item)) {
        // If is array, repeat loop
        item.forEach(each);
        return __jsx(_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
          id: entries[0][0],
          quote: entries[0][1].quote,
          description: entries[0][1].description,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        });
      } else {
        console.log(item);
      }
    }); // entries.forEach(() => {
    //   return (
    //     <Card
    //       id={entries[0][0]}
    //       quote={entries[0][1].quote}
    //       description={entries[0][1].description}
    //     />
    //   );
    // });
  };

  return __jsx("section", {
    className: "jsx-1198468308" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1198468308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1198468308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Selected Projects")), __jsx("ul", {
    className: "jsx-1198468308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, makeCard()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1198468308",
    __self: this
  }, ".main.jsx-1198468308{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 120px;text-align:center;}h1.jsx-1198468308{font-size:45px;margin-bottom:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9Qcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ1MsQUFHMEIsQUFNRSxlQUNJLG1CQUNyQix3Q0FQd0IsOEVBQ1AsZUFDRyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9jb21wb25lbnRzL1Byb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xuaW1wb3J0IGRhdGFiYXNlIGZyb20gXCIuLi9kYXRhX3N0b3JhZ2UvZGF0YWJhc2VcIjtcblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IG1ha2VDYXJkID0gKCkgPT4ge1xuICAgIC8vIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhYmFzZSk7XG4gICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXRhYmFzZSk7XG4gICAgY29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGRhdGFiYXNlKTsgLy8gUmV0dXJuIGFycmF5IG9mIGtleS12YWx1ZSBwYWlyc1xuICAgIGNvbnNvbGUubG9nKGVudHJpZXNbMF1bMV0ucXVvdGUpO1xuICAgIGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbiBlYWNoKGl0ZW0pIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgICAgIC8vIElmIGlzIGFycmF5LCByZXBlYXQgbG9vcFxuICAgICAgICBpdGVtLmZvckVhY2goZWFjaCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIGlkPXtlbnRyaWVzWzBdWzBdfVxuICAgICAgICAgICAgcXVvdGU9e2VudHJpZXNbMF1bMV0ucXVvdGV9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17ZW50cmllc1swXVsxXS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gZW50cmllcy5mb3JFYWNoKCgpID0+IHtcbiAgICAvLyAgIHJldHVybiAoXG4gICAgLy8gICAgIDxDYXJkXG4gICAgLy8gICAgICAgaWQ9e2VudHJpZXNbMF1bMF19XG4gICAgLy8gICAgICAgcXVvdGU9e2VudHJpZXNbMF1bMV0ucXVvdGV9XG4gICAgLy8gICAgICAgZGVzY3JpcHRpb249e2VudHJpZXNbMF1bMV0uZGVzY3JpcHRpb259XG4gICAgLy8gICAgIC8+XG4gICAgLy8gICApO1xuICAgIC8vIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlNlbGVjdGVkIFByb2plY3RzPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsPnttYWtlQ2FyZCgpfTwvdWw+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5tYWluIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDEyMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Projects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.83409289302abca4971e.hot-update.js.map