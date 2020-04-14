webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Projects.js":
/*!********************************!*\
  !*** ./components/Projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _database_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database/projects */ "./database/projects.js");
var _this = undefined,
    _jsxFileName = "/Users/WooChoi/Desktop/React.js/web-portfolio/components/Projects.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Projects = function Projects() {
  var makeCard = function makeCard() {
    var keepsHisWord = true;
    promise1 = new Promise(function (resolve, reject) {
      if (keepsHisWord) {
        resolve("The man likes to keep his word");
      } else {
        reject("The man doesn't want to keep his word");
      }
    });
    console.log(promise1);
    var keys = Object.keys(_database_projects__WEBPACK_IMPORTED_MODULE_3__["projects"]);
    return keys.map(function (item) {
      return __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
        project: _database_projects__WEBPACK_IMPORTED_MODULE_3__["projects"][item].project,
        key: item,
        quote: _database_projects__WEBPACK_IMPORTED_MODULE_3__["projects"][item].quote,
        description: _database_projects__WEBPACK_IMPORTED_MODULE_3__["projects"][item].description,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 7
        }
      });
    });
  };

  return __jsx("section", {
    className: "jsx-217116450" + " " + "projects",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "jsx-217116450" + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "Selected Projects"), makeCard(), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "217116450",
    __self: _this
  }, ".projects.jsx-217116450{text-align:center;}.title.jsx-217116450{font-size:45px;margin-bottom:50px;font-weight:400;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9jb21wb25lbnRzL1Byb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCUyxBQUcrQixBQUdILGVBQ0ksR0FIckIsZ0JBSWtCLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL3dlYi1wb3J0Zm9saW8vY29tcG9uZW50cy9Qcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uL2RhdGFiYXNlL3Byb2plY3RzXCI7XG5cbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xuICBjb25zdCBtYWtlQ2FyZCA9ICgpID0+IHtcbiAgICBsZXQga2VlcHNIaXNXb3JkID0gdHJ1ZTtcbiAgICBwcm9taXNlMSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChrZWVwc0hpc1dvcmQpIHtcbiAgICAgICAgcmVzb2x2ZShcIlRoZSBtYW4gbGlrZXMgdG8ga2VlcCBoaXMgd29yZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdChcIlRoZSBtYW4gZG9lc24ndCB3YW50IHRvIGtlZXAgaGlzIHdvcmRcIik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocHJvbWlzZTEpO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwcm9qZWN0cyk7XG4gICAgcmV0dXJuIGtleXMubWFwKChpdGVtKSA9PiAoXG4gICAgICA8Q2FyZFxuICAgICAgICBwcm9qZWN0PXtwcm9qZWN0c1tpdGVtXS5wcm9qZWN0fVxuICAgICAgICBrZXk9e2l0ZW19XG4gICAgICAgIHF1b3RlPXtwcm9qZWN0c1tpdGVtXS5xdW90ZX1cbiAgICAgICAgZGVzY3JpcHRpb249e3Byb2plY3RzW2l0ZW1dLmRlc2NyaXB0aW9ufVxuICAgICAgLz5cbiAgICApKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9qZWN0c1wiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+U2VsZWN0ZWQgUHJvamVjdHM8L2gxPlxuICAgICAge21ha2VDYXJkKCl9XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5wcm9qZWN0cyB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/components/Projects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.31e1ebaf2a9af5bea730.hot-update.js.map