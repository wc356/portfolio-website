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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3390363248", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark]]]) + " " + "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3390363248", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, project), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3390363248", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark]]]) + " " + "body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3390363248", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark]]]) + " " + "list",
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
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3390363248", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark]]]) + " " + "list-item",
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
    id: "3390363248",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark],
    __self: _this
  }, "a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;}.card.__jsx-style-dynamic-selector{display:block;width:11.25rem;height:250px;padding:1.125rem;border:solid 1px ".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, ";margin-right:15px;margin-bottom:15px;border-radius:5px;background-color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, ";color:white;}.card.__jsx-style-dynamic-selector:hover{color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, ";background-color:white;-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);}.card.__jsx-style-dynamic-selector:hover .list-item.__jsx-style-dynamic-selector{color:white;background-color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, ";-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);box-shadow:6px 6px ").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, ";}.body.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;text-align:right;padding-bottom:18px;}.list.__jsx-style-dynamic-selector{display:flex-box;width:100%;-webkit-transition:all 0.15s;transition:all 0.15s;}.list-item.__jsx-style-dynamic-selector{display:inline-block;background-color:white;box-shadow:6px 6px rgb(255,153,204);border-radius:0 10px 0 10px;color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, ";font-weight:400;margin-right:10px;margin-bottom:10px;padding:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9jb21wb25lbnRzL090aGVyUHJvamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ1MsQUFHa0MsQUFHUCxBQVlxQixBQUt2QixBQU1DLEFBT0ksQUFLSSxZQWpCeUIsRUFqQi9CLEdBOEJKLElBS1ksT0FKRixDQTlCUixNQVdVLE9BVk4sRUFrQ3FCLE1BdkN4QyxRQWdCNkIsQUFLQSxDQWZtQixlQW9CbEMsSUFTZCxFQUs4QixNQWJQLG1CQXBCSCxHQWtDaUIsZUFqQ2hCLG1CQUNELENBaUNGLFFBekJsQixBQUtrRCxRQXFCOUIsQ0FqQzRCLGlCQWtDM0IsVUFoQkYsU0FpQkwsR0F0QmQsS0FNc0IsRUFsQlIsRUFtQ2QsVUFsQ0EsTUFrQkEiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy93ZWItcG9ydGZvbGlvL2NvbXBvbmVudHMvT3RoZXJQcm9qZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuXG5pbXBvcnQgeyBvdGhlclByb2plY3RzIH0gZnJvbSBcIi4uL2RhdGFiYXNlL3Byb2plY3RzXCI7XG5cbmNvbnN0IE90aGVyUHJvamVjdCA9ICh7IHByb2plY3QgfSkgPT4ge1xuICBjb25zdCBbbGluaywgc2V0TGlua10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICByZXR1cm4gKFxuICAgIDxhXG4gICAgICBjbGFzc05hbWU9XCJjYXJkXCJcbiAgICAgIGhyZWY9e2xpbmt9XG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgcmVsPVwibm9mb2xsb3cgbm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgPlxuICAgICAgPGgzPntwcm9qZWN0fTwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICB7b3RoZXJQcm9qZWN0cy5tYXAoKHByb2opID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qLnByb2plY3QgPT09IHByb2plY3QpIHtcbiAgICAgICAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRMaW5rKHByb2oubGluayk7XG4gICAgICAgICAgICAgIH0sIFtsaW5rXSk7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9qLmRlc2NyaXB0aW9uLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e3V1aWR2NCgpfSBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDExLjI1cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuMTI1cmVtO1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggJHt0aGVtZS5jb2xvcnMuZ3JheX07XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuZGFya307XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5kYXJrfTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZDpob3ZlciAubGlzdC1pdGVtIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmRhcmt9O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogNnB4IDZweCAke3RoZW1lLmNvbG9ycy5ncmF5fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJvZHkge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saXN0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXgtYm94O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saXN0LWl0ZW0ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiA2cHggNnB4IHJnYigyNTUsIDE1MywgMjA0KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAwIDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZGFya307XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvYT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE90aGVyUHJvamVjdDtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/components/OtherProject.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (OtherProject);

/***/ })

})
//# sourceMappingURL=index.js.2b36877bf969f32732af.hot-update.js.map