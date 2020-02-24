webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Projects.js":
/*!********************************!*\
  !*** ./components/Projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
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
    var count = 0; // const keys = Object.keys(database);

    var values = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2___default()(_data_storage_database__WEBPACK_IMPORTED_MODULE_6__["default"]);

    var entries = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(_data_storage_database__WEBPACK_IMPORTED_MODULE_6__["default"]); // Return array of key-value pairs


    for (var _i = 0, _Object$entries2 = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(_data_storage_database__WEBPACK_IMPORTED_MODULE_6__["default"]); _i < _Object$entries2.length; _i++) {
      var _Object$entries2$_i = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$entries2[_i], 2),
          key = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];

      console.log("Key => ".concat(key, " | Value => ").concat(value));
    } // for (let i = 0; i < entries.length; i++) {
    //   count++;
    //   return (
    //     <Card
    //       id={entries[0][0]}
    //       quote={entries[0][1].quote}
    //       description={entries[0][1].description}
    //     />
    //   );


    console.log(entries[i], count); // for (let j = 0; j < entries[i].length; j++) {
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
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1198468308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1198468308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Selected Projects")), __jsx("ul", {
    className: "jsx-1198468308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, makeCard()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1198468308",
    __self: this
  }, ".main.jsx-1198468308{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 120px;text-align:center;}h1.jsx-1198468308{font-size:45px;margin-bottom:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9Qcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRVMsQUFHMEIsQUFNRSxlQUNJLG1CQUNyQix3Q0FQd0IsOEVBQ1AsZUFDRyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9jb21wb25lbnRzL1Byb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xuaW1wb3J0IGRhdGFiYXNlIGZyb20gXCIuLi9kYXRhX3N0b3JhZ2UvZGF0YWJhc2VcIjtcblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IG1ha2VDYXJkID0gKCkgPT4ge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgLy8gY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGFiYXNlKTtcbiAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKGRhdGFiYXNlKTtcbiAgICBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoZGF0YWJhc2UpOyAvLyBSZXR1cm4gYXJyYXkgb2Yga2V5LXZhbHVlIHBhaXJzXG5cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkYXRhYmFzZSkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBLZXkgPT4gJHtrZXl9IHwgVmFsdWUgPT4gJHt2YWx1ZX1gKTtcbiAgICB9XG5cbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgIGNvdW50Kys7XG4gICAgLy8gICByZXR1cm4gKFxuICAgIC8vICAgICA8Q2FyZFxuICAgIC8vICAgICAgIGlkPXtlbnRyaWVzWzBdWzBdfVxuICAgIC8vICAgICAgIHF1b3RlPXtlbnRyaWVzWzBdWzFdLnF1b3RlfVxuICAgIC8vICAgICAgIGRlc2NyaXB0aW9uPXtlbnRyaWVzWzBdWzFdLmRlc2NyaXB0aW9ufVxuICAgIC8vICAgICAvPlxuICAgIC8vICAgKTtcblxuICAgIGNvbnNvbGUubG9nKGVudHJpZXNbaV0sIGNvdW50KTtcbiAgICAvLyBmb3IgKGxldCBqID0gMDsgaiA8IGVudHJpZXNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGVudHJpZXNbaV1bal0pO1xuICAgIC8vIH1cbiAgICAvLyB9XG5cbiAgICAvLyBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24gZWFjaChpdGVtKSB7XG4gICAgLy8gICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgIC8vICAgICAvLyBJZiBpcyBhcnJheSwgcmVwZWF0IGxvb3BcbiAgICAvLyAgICAgaXRlbS5mb3JFYWNoKGVhY2gpO1xuICAgIC8vICAgICByZXR1cm4gKFxuICAgIC8vICAgICAgIDxDYXJkXG4gICAgLy8gICAgICAgICBpZD17ZW50cmllc1swXVswXX1cbiAgICAvLyAgICAgICAgIHF1b3RlPXtlbnRyaWVzWzBdWzFdLnF1b3RlfVxuICAgIC8vICAgICAgICAgZGVzY3JpcHRpb249e2VudHJpZXNbMF1bMV0uZGVzY3JpcHRpb259XG4gICAgLy8gICAgICAgLz5cbiAgICAvLyAgICAgKTtcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuXG4gICAgLy8gZW50cmllcy5mb3JFYWNoKCgpID0+IHtcbiAgICAvLyAgIHJldHVybiAoXG4gICAgLy8gICAgIDxDYXJkXG4gICAgLy8gICAgICAgaWQ9e2VudHJpZXNbMF1bMF19XG4gICAgLy8gICAgICAgcXVvdGU9e2VudHJpZXNbMF1bMV0ucXVvdGV9XG4gICAgLy8gICAgICAgZGVzY3JpcHRpb249e2VudHJpZXNbMF1bMV0uZGVzY3JpcHRpb259XG4gICAgLy8gICAgIC8+XG4gICAgLy8gICApO1xuICAgIC8vIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlNlbGVjdGVkIFByb2plY3RzPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsPnttYWtlQ2FyZCgpfTwvdWw+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5tYWluIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDEyMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Projects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArrayLimit(arr, i) {
  if (!(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(arr)) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ })

})
//# sourceMappingURL=index.js.21cff28e9649d67cce35.hot-update.js.map