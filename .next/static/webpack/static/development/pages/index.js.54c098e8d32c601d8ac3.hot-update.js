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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3882060384", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark]]]) + " " + "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3882060384", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, project), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3882060384", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark]]]) + " " + "body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3882060384", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark]]]) + " " + "list",
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
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3882060384", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark]]]) + " " + "list-item",
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
    id: "3882060384",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark],
    __self: _this
  }, "a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;}.card.__jsx-style-dynamic-selector{display:block;width:11.25rem;min-width:11.25rem;height:250px;padding:1.125rem;margin-right:15px;margin-bottom:15px;border-radius:0 1rem 0 1rem;background-color:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, ";color:white;box-shadow:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, " 0px 0px 10px 0px;}.card.__jsx-style-dynamic-selector:hover{color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, ";background-color:white;-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);}.card.__jsx-style-dynamic-selector:hover .list-item.__jsx-style-dynamic-selector{color:white;background-color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, ";-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);box-shadow:6px 6px ").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, ";}.body.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;text-align:right;padding-bottom:18px;}.list.__jsx-style-dynamic-selector{display:flex-box;width:100%;-webkit-transition:all 0.15s;transition:all 0.15s;}.list-item.__jsx-style-dynamic-selector{display:inline-block;background-color:white;box-shadow:6px 6px rgb(255,153,204);border-radius:0 10px 0 10px;color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.dark, ";font-weight:400;margin-right:10px;margin-bottom:10px;padding:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9jb21wb25lbnRzL090aGVyUHJvamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ1MsQUFHa0MsQUFHUCxBQWNxQixBQUt2QixBQU1DLEFBT0ksQUFLSSxZQWpCeUIsRUFuQi9CLEdBZ0NKLElBS1ksT0FKRixDQWhDRixNQWFJLFNBd0JlLElBcEN6QixFQUxmLFFBa0I2QixBQUtBLEdBakJWLGFBc0JMLElBcEJNLEFBNkJwQixFQUs4QixNQWJQLFVBcEJGLFlBa0NnQixPQWpDUCw0QkFDa0IsQUFpQzlCLFFBekJsQixBQUtrRCxRQXFCOUIsa0JBQ0MsVUFoQkYsRUFsQkwsT0FtQ0EsR0F0QmQsRUFaMkQsR0FrQnJDLElBaUJ0QixnQkFoQkEsa0NBbEJBIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9jb21wb25lbnRzL090aGVyUHJvamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcblxuaW1wb3J0IHsgb3RoZXJQcm9qZWN0cyB9IGZyb20gXCIuLi9kYXRhYmFzZS9wcm9qZWN0c1wiO1xuXG5jb25zdCBPdGhlclByb2plY3QgPSAoeyBwcm9qZWN0IH0pID0+IHtcbiAgY29uc3QgW2xpbmssIHNldExpbmtdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8YVxuICAgICAgY2xhc3NOYW1lPVwiY2FyZFwiXG4gICAgICBocmVmPXtsaW5rfVxuICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgIHJlbD1cIm5vZm9sbG93IG5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgID5cbiAgICAgIDxoMz57cHJvamVjdH08L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgICAge290aGVyUHJvamVjdHMubWFwKChwcm9qKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvai5wcm9qZWN0ID09PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0TGluayhwcm9qLmxpbmspO1xuICAgICAgICAgICAgICB9LCBbbGlua10pO1xuICAgICAgICAgICAgICByZXR1cm4gcHJvai5kZXNjcmlwdGlvbi5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXt1dWlkdjQoKX0gY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTEuMjVyZW07XG4gICAgICAgICAgICBtaW4td2lkdGg6IDExLjI1cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuMTI1cmVtO1xuXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAxcmVtIDAgMXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmRhcmt9O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogJHt0aGVtZS5jb2xvcnMuZGFya30gMHB4IDBweCAxMHB4IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmRhcmt9O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkOmhvdmVyIC5saXN0LWl0ZW0ge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuZGFya307XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiA2cHggNnB4ICR7dGhlbWUuY29sb3JzLmdyYXl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYm9keSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMThweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleC1ib3g7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3QtaXRlbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDZweCA2cHggcmdiKDI1NSwgMTUzLCAyMDQpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDAgMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5kYXJrfTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9hPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT3RoZXJQcm9qZWN0O1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/components/OtherProject.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (OtherProject);

/***/ })

})
//# sourceMappingURL=index.js.54c098e8d32c601d8ac3.hot-update.js.map