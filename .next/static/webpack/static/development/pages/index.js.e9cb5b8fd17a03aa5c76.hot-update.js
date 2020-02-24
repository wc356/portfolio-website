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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _data_storage_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data_storage/database */ "./data_storage/database.js");


var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/components/Projects.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



var Projects = function Projects() {
  var makeCard = function makeCard() {
    var count = 0; // const keys = Object.keys(database);

    var values = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(_data_storage_database__WEBPACK_IMPORTED_MODULE_5__["default"]);

    var entries = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default()(_data_storage_database__WEBPACK_IMPORTED_MODULE_5__["default"]); // Return array of key-value pairs


    for (var i = 0; i < entries.length; i++) {
      count++;
      return __jsx(_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
        id: entries[0][0],
        quote: entries[0][1].quote,
        description: entries[0][1].description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      });
      console.log(entries[i], count); // for (let j = 0; j < entries[i].length; j++) {
      //   console.log(entries[i][j]);
      // }
    } // entries.forEach(function each(item) {
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
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1198468308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1198468308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Selected Projects")), __jsx("ul", {
    className: "jsx-1198468308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, makeCard()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1198468308",
    __self: this
  }, ".main.jsx-1198468308{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 120px;text-align:center;}h1.jsx-1198468308{font-size:45px;margin-bottom:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9Qcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRFMsQUFHMEIsQUFNRSxlQUNJLG1CQUNyQix3Q0FQd0IsOEVBQ1AsZUFDRyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9jb21wb25lbnRzL1Byb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xuaW1wb3J0IGRhdGFiYXNlIGZyb20gXCIuLi9kYXRhX3N0b3JhZ2UvZGF0YWJhc2VcIjtcblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IG1ha2VDYXJkID0gKCkgPT4ge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgLy8gY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGFiYXNlKTtcbiAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKGRhdGFiYXNlKTtcbiAgICBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoZGF0YWJhc2UpOyAvLyBSZXR1cm4gYXJyYXkgb2Yga2V5LXZhbHVlIHBhaXJzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb3VudCsrO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENhcmRcbiAgICAgICAgICBpZD17ZW50cmllc1swXVswXX1cbiAgICAgICAgICBxdW90ZT17ZW50cmllc1swXVsxXS5xdW90ZX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17ZW50cmllc1swXVsxXS5kZXNjcmlwdGlvbn1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhlbnRyaWVzW2ldLCBjb3VudCk7XG4gICAgICAvLyBmb3IgKGxldCBqID0gMDsgaiA8IGVudHJpZXNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coZW50cmllc1tpXVtqXSk7XG4gICAgICAvLyB9XG4gICAgfVxuXG4gICAgLy8gZW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uIGVhY2goaXRlbSkge1xuICAgIC8vICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAvLyAgICAgLy8gSWYgaXMgYXJyYXksIHJlcGVhdCBsb29wXG4gICAgLy8gICAgIGl0ZW0uZm9yRWFjaChlYWNoKTtcbiAgICAvLyAgICAgcmV0dXJuIChcbiAgICAvLyAgICAgICA8Q2FyZFxuICAgIC8vICAgICAgICAgaWQ9e2VudHJpZXNbMF1bMF19XG4gICAgLy8gICAgICAgICBxdW90ZT17ZW50cmllc1swXVsxXS5xdW90ZX1cbiAgICAvLyAgICAgICAgIGRlc2NyaXB0aW9uPXtlbnRyaWVzWzBdWzFdLmRlc2NyaXB0aW9ufVxuICAgIC8vICAgICAgIC8+XG4gICAgLy8gICAgICk7XG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcblxuICAgIC8vIGVudHJpZXMuZm9yRWFjaCgoKSA9PiB7XG4gICAgLy8gICByZXR1cm4gKFxuICAgIC8vICAgICA8Q2FyZFxuICAgIC8vICAgICAgIGlkPXtlbnRyaWVzWzBdWzBdfVxuICAgIC8vICAgICAgIHF1b3RlPXtlbnRyaWVzWzBdWzFdLnF1b3RlfVxuICAgIC8vICAgICAgIGRlc2NyaXB0aW9uPXtlbnRyaWVzWzBdWzFdLmRlc2NyaXB0aW9ufVxuICAgIC8vICAgICAvPlxuICAgIC8vICAgKTtcbiAgICAvLyB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5TZWxlY3RlZCBQcm9qZWN0czwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bD57bWFrZUNhcmQoKX08L3VsPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAubWFpbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Projects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.e9cb5b8fd17a03aa5c76.hot-update.js.map