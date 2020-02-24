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



var Projects = function Projects() {
  var makeCard = function makeCard() {
    var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_data_storage_database__WEBPACK_IMPORTED_MODULE_4__["default"]); // const values = Object.values(database);
    // const entries = Object.entries(database); // Return array of key-value pairs


    var arr = [];
    keys.forEach(function (key) {
      arr.push(_data_storage_database__WEBPACK_IMPORTED_MODULE_4__["default"][key]);
    });
    console.log(arr); // let ul = document.querySelector('.card');
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
      lineNumber: 66
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1198468308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1198468308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Selected Projects")), __jsx("ul", {
    className: "jsx-1198468308" + " " + "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, makeCard()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1198468308",
    __self: this
  }, ".main.jsx-1198468308{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0 120px;text-align:center;}h1.jsx-1198468308{font-size:45px;margin-bottom:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9Qcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RVMsQUFHMEIsQUFNRSxlQUNJLG1CQUNyQix3Q0FQd0IsOEVBQ1AsZUFDRyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9jb21wb25lbnRzL1Byb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xuaW1wb3J0IGRhdGFiYXNlIGZyb20gXCIuLi9kYXRhX3N0b3JhZ2UvZGF0YWJhc2VcIjtcblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IG1ha2VDYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhYmFzZSk7XG4gICAgLy8gY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXRhYmFzZSk7XG4gICAgLy8gY29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGRhdGFiYXNlKTsgLy8gUmV0dXJuIGFycmF5IG9mIGtleS12YWx1ZSBwYWlyc1xuICAgIGxldCBhcnIgPSBbXTtcblxuICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgYXJyLnB1c2goZGF0YWJhc2Vba2V5XSk7XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhhcnIpO1xuICAgIC8vIGxldCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJyk7XG4gICAgLy8gbGV0IGRmID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAvLyAuZm9yRWFjaChwcm9qID0+IHtcblxuICAgIC8vIH0pXG5cbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgIGNvdW50Kys7XG4gICAgLy8gICByZXR1cm4gKFxuICAgIC8vICAgICA8Q2FyZFxuICAgIC8vICAgICAgIGlkPXtlbnRyaWVzWzBdWzBdfVxuICAgIC8vICAgICAgIHF1b3RlPXtlbnRyaWVzWzBdWzFdLnF1b3RlfVxuICAgIC8vICAgICAgIGRlc2NyaXB0aW9uPXtlbnRyaWVzWzBdWzFdLmRlc2NyaXB0aW9ufVxuICAgIC8vICAgICAvPlxuICAgIC8vICAgKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGVudHJpZXNbaV0sIGNvdW50KTtcbiAgICAvLyBmb3IgKGxldCBqID0gMDsgaiA8IGVudHJpZXNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGVudHJpZXNbaV1bal0pO1xuICAgIC8vIH1cbiAgICAvLyB9XG5cbiAgICAvLyBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24gZWFjaChpdGVtKSB7XG4gICAgLy8gICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgIC8vICAgICAvLyBJZiBpcyBhcnJheSwgcmVwZWF0IGxvb3BcbiAgICAvLyAgICAgaXRlbS5mb3JFYWNoKGVhY2gpO1xuICAgIC8vICAgICByZXR1cm4gKFxuICAgIC8vICAgICAgIDxDYXJkXG4gICAgLy8gICAgICAgICBpZD17ZW50cmllc1swXVswXX1cbiAgICAvLyAgICAgICAgIHF1b3RlPXtlbnRyaWVzWzBdWzFdLnF1b3RlfVxuICAgIC8vICAgICAgICAgZGVzY3JpcHRpb249e2VudHJpZXNbMF1bMV0uZGVzY3JpcHRpb259XG4gICAgLy8gICAgICAgLz5cbiAgICAvLyAgICAgKTtcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuXG4gICAgLy8gZW50cmllcy5mb3JFYWNoKCgpID0+IHtcbiAgICAvLyAgIHJldHVybiAoXG4gICAgLy8gICAgIDxDYXJkXG4gICAgLy8gICAgICAgaWQ9e2VudHJpZXNbMF1bMF19XG4gICAgLy8gICAgICAgcXVvdGU9e2VudHJpZXNbMF1bMV0ucXVvdGV9XG4gICAgLy8gICAgICAgZGVzY3JpcHRpb249e2VudHJpZXNbMF1bMV0uZGVzY3JpcHRpb259XG4gICAgLy8gICAgIC8+XG4gICAgLy8gICApO1xuICAgIC8vIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlNlbGVjdGVkIFByb2plY3RzPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImNhcmRcIj57bWFrZUNhcmQoKX08L3VsPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAubWFpbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Projects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js":
false,

/***/ "./node_modules/core-js/library/fn/object/entries.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.object.entries.js":
false

})
//# sourceMappingURL=index.js.dc9f815aee3efa433f77.hot-update.js.map