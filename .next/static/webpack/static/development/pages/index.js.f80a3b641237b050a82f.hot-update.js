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
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var _database_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database/projects */ "./database/projects.js");
var _this = undefined,
    _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/components/OtherProject.js";


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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["913999424", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["913999424", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, project), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["913999424", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["913999424", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["913999424", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, _database_projects__WEBPACK_IMPORTED_MODULE_3__["otherProjects"].map(function (proj) {
    if (proj.project === project) {
      Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        setLink(proj.link);
      }, [link]);
      return proj.description.map(function (item) {
        return __jsx("li", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["913999424", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "list-item",
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
    id: "913999424",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark],
    __self: _this
  }, "a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;}.card.__jsx-style-dynamic-selector{display:block;width:180px;height:250px;padding:18px;border:solid 1px ".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, ";margin-right:15px;margin-bottom:15px;border-radius:5px;background-color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, ";color:white;}.card.__jsx-style-dynamic-selector:hover{color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, ";background-color:white;-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);}.card.__jsx-style-dynamic-selector:hover .list-item.__jsx-style-dynamic-selector{color:white;background-color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, ";-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);box-shadow:6px 6px ").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, ";}.card.__jsx-style-dynamic-selector:hover .overlay.__jsx-style-dynamic-selector{opacity:1;}.overlay.__jsx-style-dynamic-selector{opacity:0;}.svg-wrapper.__jsx-style-dynamic-selector{position:absolute;width:50%;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);fill:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, ";}.text.__jsx-style-dynamic-selector{color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, ";font-size:30px;font-weight:500;position:absolute;top:50%;left:50%;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center;}.body.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;text-align:right;padding-bottom:18px;}.list.__jsx-style-dynamic-selector{display:flex-box;width:100%;-webkit-transition:all 0.15s;transition:all 0.15s;}.list-item.__jsx-style-dynamic-selector{display:inline-block;background-color:white;box-shadow:6px 6px rgb(255,153,204);border-radius:0 10px 0 10px;color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, ";font-weight:400;margin-right:10px;margin-bottom:10px;padding:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9PdGhlclByb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNTLEFBR2tDLEFBR1AsQUFZcUIsQUFLdkIsQUFNRixBQUdBLEFBR1EsQUFVaUIsQUFhdEIsQUFPSSxBQUtJLFVBeEN2QixBQUdBLEVBVGdELEVBakJsQyxHQTJERCxDQTlCRCxHQW1DYSxLQS9EVixFQTZCTCxBQThCYSxPQWhERSxBQTJCUixDQVJOLEdBN0JJLEtBK0R5QixDQWpDRSxLQW5DMUMsQUEyQ2tCLEVBckM4QixNQVVuQixBQUtBLFFBdUJULFFBV04sSUFTZCxFQUs4QixJQWpDUSxBQVM1QixFQVdhLE1BVlosTUF2Q1MsR0F3Q0MsT0F1QmdCLFFBOURoQixHQTZCYSxnQkE1QmQsUUE4REYsUUF0RGxCLEFBS2tELEVBWkYsTUE4RDVCLGtCQUNDLFVBaEJGLE9BVHVCLEVBMEI1QixHQS9EQSxBQVlkLEtBbUNzQixJQWlCdEIsR0EvREEsYUEwQm9DLEFBcUJwQyxTQVZzQyx5QkFWdEMsVUFXa0MseUdBQ2Qsa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9PdGhlclByb2plY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcblxuaW1wb3J0IHsgb3RoZXJQcm9qZWN0cyB9IGZyb20gXCIuLi9kYXRhYmFzZS9wcm9qZWN0c1wiO1xuXG5jb25zdCBPdGhlclByb2plY3QgPSAoeyBwcm9qZWN0IH0pID0+IHtcbiAgY29uc3QgW2xpbmssIHNldExpbmtdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8YVxuICAgICAgY2xhc3NOYW1lPVwiY2FyZFwiXG4gICAgICBocmVmPXtsaW5rfVxuICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgIHJlbD1cIm5vZm9sbG93IG5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgID5cbiAgICAgIDxoMz57cHJvamVjdH08L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICB7b3RoZXJQcm9qZWN0cy5tYXAoKHByb2opID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qLnByb2plY3QgPT09IHByb2plY3QpIHtcbiAgICAgICAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRMaW5rKHByb2oubGluayk7XG4gICAgICAgICAgICAgIH0sIFtsaW5rXSk7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9qLmRlc2NyaXB0aW9uLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj57aXRlbX08L2xpPlxuICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxOHB4O1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggJHt0aGVtZS5jb2xvcnMuZ3JheX07XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuZGFya307XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5kYXJrfTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZDpob3ZlciAubGlzdC1pdGVtIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmRhcmt9O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogNnB4IDZweCAke3RoZW1lLmNvbG9ycy5ncmF5fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQ6aG92ZXIgLm92ZXJsYXkge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN2Zy13cmFwcGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIGZpbGw6ICR7dGhlbWUuY29sb3JzLmdyYXl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMubGlua307XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYm9keSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMThweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleC1ib3g7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3QtaXRlbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDZweCA2cHggcmdiKDI1NSwgMTUzLCAyMDQpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDAgMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5kYXJrfTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9hPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT3RoZXJQcm9qZWN0O1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/OtherProject.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (OtherProject);

/***/ })

})
//# sourceMappingURL=index.js.f80a3b641237b050a82f.hot-update.js.map