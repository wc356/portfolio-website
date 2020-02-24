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
    // keys.forEach(key => {
    //   arr.push(database[key]);
    // });


    console.log(keys, values); // return (
    //   <Card
    //         id={entries[0][0]}
    //         quote={entries[0][1].quote}
    //         description={entries[0][1].description}
    //       />
    // )
    // let ul = document.querySelector('.card');
    // let df = new DocumentFragment();
    // .forEach(proj => {
    // })
    // for (let i = 0; i < entries.length; i++) {
    //   count++;
    //   return (
    //     <Card
    //       id={entries[0][0]}
    //       quote={entries[0][1].quote}
    //       description={entries[0][1].description}
    //     />
    //   );
    // console.log(entries[i], count);
    // for (let j = 0; j < entries[i].length; j++) {
    //   console.log(entries[i][j]);
    // }
    // }
    // entries.forEach(function each(item) {
    //   if (Array.isArray(item)) {
    //     // If is array, repeat loop
    //     item.forEach(each);
    //     return (
    //       <Card
    //         id={entries[0][0]}
    //         quote={entries[0][1].quote}
    //         description={entries[0][1].description}
    //       />
    //     );
    //   } else {
    //     console.log(item);
    //   }
    // });
    // entries.forEach(() => {
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
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1198468308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1198468308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Selected Projects")), __jsx("ul", {
    className: "jsx-1198468308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, makeCard()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1198468308",
    __self: this
  }, ".main.jsx-1198468308{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 120px;text-align:center;}h1.jsx-1198468308{font-size:45px;margin-bottom:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9Qcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RVMsQUFHMEIsQUFNRSxlQUNJLG1CQUNyQix3Q0FQd0IsOEVBQ1AsZUFDRyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9jb21wb25lbnRzL1Byb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xuaW1wb3J0IGRhdGFiYXNlIGZyb20gXCIuLi9kYXRhX3N0b3JhZ2UvZGF0YWJhc2VcIjtcblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IG1ha2VDYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhYmFzZSk7XG4gICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXRhYmFzZSk7XG4gICAgY29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGRhdGFiYXNlKTsgLy8gUmV0dXJuIGFycmF5IG9mIGtleS12YWx1ZSBwYWlyc1xuXG4gICAgLy8ga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgLy8gICBhcnIucHVzaChkYXRhYmFzZVtrZXldKTtcbiAgICAvLyB9KTtcbiAgICBjb25zb2xlLmxvZyhrZXlzLCB2YWx1ZXMpO1xuXG4gICAgLy8gcmV0dXJuIChcbiAgICAvLyAgIDxDYXJkXG4gICAgLy8gICAgICAgICBpZD17ZW50cmllc1swXVswXX1cbiAgICAvLyAgICAgICAgIHF1b3RlPXtlbnRyaWVzWzBdWzFdLnF1b3RlfVxuICAgIC8vICAgICAgICAgZGVzY3JpcHRpb249e2VudHJpZXNbMF1bMV0uZGVzY3JpcHRpb259XG4gICAgLy8gICAgICAgLz5cbiAgICAvLyApXG4gICAgLy8gbGV0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQnKTtcbiAgICAvLyBsZXQgZGYgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIC8vIC5mb3JFYWNoKHByb2ogPT4ge1xuXG4gICAgLy8gfSlcblxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgY291bnQrKztcbiAgICAvLyAgIHJldHVybiAoXG4gICAgLy8gICAgIDxDYXJkXG4gICAgLy8gICAgICAgaWQ9e2VudHJpZXNbMF1bMF19XG4gICAgLy8gICAgICAgcXVvdGU9e2VudHJpZXNbMF1bMV0ucXVvdGV9XG4gICAgLy8gICAgICAgZGVzY3JpcHRpb249e2VudHJpZXNbMF1bMV0uZGVzY3JpcHRpb259XG4gICAgLy8gICAgIC8+XG4gICAgLy8gICApO1xuXG4gICAgLy8gY29uc29sZS5sb2coZW50cmllc1tpXSwgY291bnQpO1xuICAgIC8vIGZvciAobGV0IGogPSAwOyBqIDwgZW50cmllc1tpXS5sZW5ndGg7IGorKykge1xuICAgIC8vICAgY29uc29sZS5sb2coZW50cmllc1tpXVtqXSk7XG4gICAgLy8gfVxuICAgIC8vIH1cblxuICAgIC8vIGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbiBlYWNoKGl0ZW0pIHtcbiAgICAvLyAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgLy8gICAgIC8vIElmIGlzIGFycmF5LCByZXBlYXQgbG9vcFxuICAgIC8vICAgICBpdGVtLmZvckVhY2goZWFjaCk7XG4gICAgLy8gICAgIHJldHVybiAoXG4gICAgLy8gICAgICAgPENhcmRcbiAgICAvLyAgICAgICAgIGlkPXtlbnRyaWVzWzBdWzBdfVxuICAgIC8vICAgICAgICAgcXVvdGU9e2VudHJpZXNbMF1bMV0ucXVvdGV9XG4gICAgLy8gICAgICAgICBkZXNjcmlwdGlvbj17ZW50cmllc1swXVsxXS5kZXNjcmlwdGlvbn1cbiAgICAvLyAgICAgICAvPlxuICAgIC8vICAgICApO1xuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG5cbiAgICAvLyBlbnRyaWVzLmZvckVhY2goKCkgPT4ge1xuICAgIC8vICAgcmV0dXJuIChcbiAgICAvLyAgICAgPENhcmRcbiAgICAvLyAgICAgICBpZD17ZW50cmllc1swXVswXX1cbiAgICAvLyAgICAgICBxdW90ZT17ZW50cmllc1swXVsxXS5xdW90ZX1cbiAgICAvLyAgICAgICBkZXNjcmlwdGlvbj17ZW50cmllc1swXVsxXS5kZXNjcmlwdGlvbn1cbiAgICAvLyAgICAgLz5cbiAgICAvLyAgICk7XG4gICAgLy8gfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+U2VsZWN0ZWQgUHJvamVjdHM8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWw+e21ha2VDYXJkKCl9PC91bD5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm1haW4ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBtYXJnaW46IDAgMTIwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Projects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/entries.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/entries */ "./node_modules/core-js/library/fn/object/entries.js");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/entries.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/entries.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.entries */ "./node_modules/core-js/library/modules/es7.object.entries.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.entries;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.object.entries.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.object.entries.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var $entries = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/library/modules/_object-to-array.js")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ })

})
//# sourceMappingURL=index.js.82722a491c0b0c7f4ec3.hot-update.js.map