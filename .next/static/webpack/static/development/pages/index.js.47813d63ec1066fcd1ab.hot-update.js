webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/OtherProject.js":
/*!************************************!*\
  !*** ./components/OtherProject.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var _database_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../database/projects */ "./database/projects.js");
var _this = undefined,
    _jsxFileName = "/Users/WooChoi/Desktop/React.js/web-portfolio/components/OtherProject.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var OtherProject = function OtherProject(_ref) {
  var project = _ref.project;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      link = _useState[0],
      setLink = _useState[1];

  return __jsx("a", {
    href: link,
    target: "_blank",
    rel: "nofollow noopener noreferrer",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3889132890", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark]]]) + " " + "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3889132890", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, project), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3889132890", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark]]]) + " " + "body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3889132890", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark]]]) + " " + "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, _database_projects__WEBPACK_IMPORTED_MODULE_4__["otherProjects"].map(function (proj) {
    if (proj.project === project) {
      Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        setLink(proj.link);
      }, [link]);
      return proj.description.map(function (item) {
        return __jsx("li", {
          key: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3889132890", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark]]]) + " " + "list-item",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 17
          }
        }, item);
      });
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3889132890",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark],
    __self: _this
  }, "a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;}.card.__jsx-style-dynamic-selector{display:block;width:11.25rem;min-width:11.25rem;height:250px;padding:1.125rem;margin-right:15px;margin-bottom:15px;border-radius:0 1rem 0 1rem;border:solid 5px white;background-color:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, ";color:white;box-shadow:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, " 0px 0px 10px 0px;}.card.__jsx-style-dynamic-selector:hover{color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, ";background-color:white;-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);}.card.__jsx-style-dynamic-selector:hover .list-item.__jsx-style-dynamic-selector{color:white;background-color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, ";-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);box-shadow:6px 6px ").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, ";}.body.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;text-align:right;padding-bottom:18px;}.list.__jsx-style-dynamic-selector{display:flex-box;width:100%;-webkit-transition:all 0.15s;transition:all 0.15s;}.list-item.__jsx-style-dynamic-selector{display:inline-block;background-color:white;box-shadow:6px 6px rgb(255,153,204);border-radius:0 10px 0 10px;color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, ";font-weight:400;margin-right:10px;margin-bottom:10px;padding:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9jb21wb25lbnRzL090aGVyUHJvamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ1MsQUFHa0MsQUFHUCxBQWNxQixBQUt2QixBQU1DLEFBT0ksQUFLSSxZQWpCeUIsRUFuQi9CLEdBZ0NKLElBS1ksT0FKRixDQWhDRixNQWFJLFNBd0JlLElBcEN6QixFQUxmLFFBa0I2QixBQUtBLEdBakJWLGFBc0JMLElBckJNLEFBOEJwQixFQUs4QixNQWJQLFVBckJGLFlBbUNnQixPQWxDUCw0QkFDTCxBQWtDUCxRQXpCbEIsQUFLa0QsUUFxQjlCLE9BbEM0QixXQW1DM0IsVUFoQkYsU0FpQkwsR0F0QmQsS0FNc0IsSUFpQnRCLElBcENjLFlBQzZDLEFBbUIzRCx5REFsQkEiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy93ZWItcG9ydGZvbGlvL2NvbXBvbmVudHMvT3RoZXJQcm9qZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuXG5pbXBvcnQgeyBvdGhlclByb2plY3RzIH0gZnJvbSBcIi4uL2RhdGFiYXNlL3Byb2plY3RzXCI7XG5cbmNvbnN0IE90aGVyUHJvamVjdCA9ICh7IHByb2plY3QgfSkgPT4ge1xuICBjb25zdCBbbGluaywgc2V0TGlua10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICByZXR1cm4gKFxuICAgIDxhXG4gICAgICBjbGFzc05hbWU9XCJjYXJkXCJcbiAgICAgIGhyZWY9e2xpbmt9XG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgcmVsPVwibm9mb2xsb3cgbm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgPlxuICAgICAgPGgzPntwcm9qZWN0fTwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICB7b3RoZXJQcm9qZWN0cy5tYXAoKHByb2opID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qLnByb2plY3QgPT09IHByb2plY3QpIHtcbiAgICAgICAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRMaW5rKHByb2oubGluayk7XG4gICAgICAgICAgICAgIH0sIFtsaW5rXSk7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9qLmRlc2NyaXB0aW9uLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e3V1aWR2NCgpfSBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxMS4yNXJlbTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTEuMjVyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMS4xMjVyZW07XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAxcmVtIDAgMXJlbTtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgNXB4IHdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuZGFya307XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAke3RoZW1lLmNvbG9ycy5kYXJrfSAwcHggMHB4IDEwcHggMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZDpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZGFya307XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQ6aG92ZXIgLmxpc3QtaXRlbSB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5kYXJrfTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDZweCA2cHggJHt0aGVtZS5jb2xvcnMuZ3JheX07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ib2R5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4LWJveDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlzdC1pdGVtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogNnB4IDZweCByZ2IoMjU1LCAxNTMsIDIwNCk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDEwcHggMCAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmRhcmt9O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2E+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPdGhlclByb2plY3Q7XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/components/OtherProject.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (OtherProject);

/***/ })

})
//# sourceMappingURL=index.js.47813d63ec1066fcd1ab.hot-update.js.map