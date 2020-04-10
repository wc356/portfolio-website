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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3931265671", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark]]]) + " " + "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3931265671", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, project), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3931265671", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark]]]) + " " + "body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3931265671", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark]]]) + " " + "list",
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
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3931265671", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark]]]) + " " + "list-item",
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
    id: "3931265671",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark],
    __self: _this
  }, "a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;}.card.__jsx-style-dynamic-selector{display:block;width:180/16rem;min height:250px;padding:18px;border:solid 1px ".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, ";margin-right:15px;margin-bottom:15px;border-radius:5px;background-color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, ";color:white;}.card.__jsx-style-dynamic-selector:hover{color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, ";background-color:white;-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);}.card.__jsx-style-dynamic-selector:hover .list-item.__jsx-style-dynamic-selector{color:white;background-color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, ";-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);box-shadow:6px 6px ").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, ";}.body.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;text-align:right;padding-bottom:18px;}.list.__jsx-style-dynamic-selector{display:flex-box;width:100%;-webkit-transition:all 0.15s;transition:all 0.15s;}.list-item.__jsx-style-dynamic-selector{display:inline-block;background-color:white;box-shadow:6px 6px rgb(255,153,204);border-radius:0 10px 0 10px;color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, ";font-weight:400;margin-right:10px;margin-bottom:10px;padding:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9jb21wb25lbnRzL090aGVyUHJvamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ1MsQUFHa0MsQUFHUCxBQWFxQixBQUt2QixBQU1DLEFBT0ksQUFLSSxZQWpCeUIsRUFsQjlCLEdBK0JMLElBS1ksT0FKRixFQTlCUixLQVdVLFNBd0JlLEdBbEN6QixHQU5mLFFBaUI2QixBQUtBLEVBZm1CLGNBb0JsQyxJQVNkLEVBSzhCLE1BYlAsb0JBcEJILEVBa0NpQixnQkFqQ2hCLG1CQUNELEFBaUNGLFFBekJsQixBQUtrRCxRQXFCOUIsRUFqQzRCLGdCQWtDM0IsVUFoQkYsU0FpQkwsR0F0QmQsS0FNc0IsR0FsQlIsQ0FtQ2QsV0FsQ0EsS0FrQkEiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy93ZWItcG9ydGZvbGlvL2NvbXBvbmVudHMvT3RoZXJQcm9qZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuXG5pbXBvcnQgeyBvdGhlclByb2plY3RzIH0gZnJvbSBcIi4uL2RhdGFiYXNlL3Byb2plY3RzXCI7XG5cbmNvbnN0IE90aGVyUHJvamVjdCA9ICh7IHByb2plY3QgfSkgPT4ge1xuICBjb25zdCBbbGluaywgc2V0TGlua10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICByZXR1cm4gKFxuICAgIDxhXG4gICAgICBjbGFzc05hbWU9XCJjYXJkXCJcbiAgICAgIGhyZWY9e2xpbmt9XG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgcmVsPVwibm9mb2xsb3cgbm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgPlxuICAgICAgPGgzPntwcm9qZWN0fTwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICB7b3RoZXJQcm9qZWN0cy5tYXAoKHByb2opID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qLnByb2plY3QgPT09IHByb2plY3QpIHtcbiAgICAgICAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRMaW5rKHByb2oubGluayk7XG4gICAgICAgICAgICAgIH0sIFtsaW5rXSk7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9qLmRlc2NyaXB0aW9uLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e3V1aWR2NCgpfSBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDE4MC8xNnJlbTtcbiAgICAgICAgICAgIG1pblxuICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAke3RoZW1lLmNvbG9ycy5ncmF5fTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5kYXJrfTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmRhcmt9O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkOmhvdmVyIC5saXN0LWl0ZW0ge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuZGFya307XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiA2cHggNnB4ICR7dGhlbWUuY29sb3JzLmdyYXl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYm9keSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMThweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleC1ib3g7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3QtaXRlbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDZweCA2cHggcmdiKDI1NSwgMTUzLCAyMDQpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDAgMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5kYXJrfTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9hPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT3RoZXJQcm9qZWN0O1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/components/OtherProject.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (OtherProject);

/***/ })

})
//# sourceMappingURL=index.js.e735dceae059d642e11c.hot-update.js.map