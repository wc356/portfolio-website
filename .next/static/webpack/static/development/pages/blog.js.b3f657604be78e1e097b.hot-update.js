webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var _database_blog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../database/blog */ "./database/blog.js");
var _this = undefined,
    _jsxFileName = "/Users/WooChoi/Desktop/React.js/web-portfolio/pages/blog.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (function () {
  var addPosts = function addPosts() {
    var mapReverse = function mapReverse(arr, fn) {
      return arr.reduceRight(function (result, el) {
        result.push(fn(el));
        return result;
      }, []);
    };

    return mapReverse(_database_blog__WEBPACK_IMPORTED_MODULE_6__["default"], function (post) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        key: post.id,
        href: "/p/[title]",
        as: "/p/".concat(post.title),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 7
        }
      }, __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3486985114", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.black]]]) + " " + "card",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }
      }, __jsx("h1", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3486985114", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.black]]]) + " " + "title",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }
      }, post.title), __jsx("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3486985114", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.black]]]) + " " + "date",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }
      }, post.date), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "3486985114",
        dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.black],
        __self: _this
      }, ".card.__jsx-style-dynamic-selector{display:block;cursor:pointer;height:200px;width:200px;border:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.gray, " 1px solid;border-radius:8px;padding:20px;margin:10px;word-break:break-word;-webkit-transition:all 0.15s;transition:all 0.15s;background:white;}.card.__jsx-style-dynamic-selector:hover{border:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.dark, " 1px solid;-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);}.title.__jsx-style-dynamic-selector{color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.black, ";-webkit-text-decoration:none;text-decoration:none;font-size:16px;font-weight:600;}.date.__jsx-style-dynamic-selector{font-size:14px;margin-top:5px;color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.black, ";font-weight:400;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9wYWdlcy9ibG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCYSxBQUcrQixBQWFnQyxBQUlYLEFBTXBCLGNBdEJBLENBdUJBLGNBdEJGLENBdUJzQixLQVBkLE9BZlQsSUFXZSxRQVZtQixXQXNCOUIsZ0JBQ2xCLElBUmlCLGVBZEcsQUFlRixnQkFDbEIsRUFmZSxhQUNELFFBUWQsSUFQd0Isc0JBQ0Qsa0RBQ0osaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9wYWdlcy9ibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgYmxvZyBmcm9tIFwiLi4vZGF0YWJhc2UvYmxvZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IGFkZFBvc3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IG1hcFJldmVyc2UgPSAoYXJyLCBmbikgPT4ge1xuICAgICAgcmV0dXJuIGFyci5yZWR1Y2VSaWdodCgocmVzdWx0LCBlbCkgPT4ge1xuICAgICAgICByZXN1bHQucHVzaChmbihlbCkpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSwgW10pO1xuICAgIH07XG5cbiAgICByZXR1cm4gbWFwUmV2ZXJzZShibG9nLCAocG9zdCkgPT4gKFxuICAgICAgPExpbmsga2V5PXtwb3N0LmlkfSBocmVmPVwiL3AvW3RpdGxlXVwiIGFzPXtgL3AvJHtwb3N0LnRpdGxlfWB9PlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGF0ZVwiPntwb3N0LmRhdGV9PC9wPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogJHt0aGVtZS5jb2xvcnMuZ3JheX0gMXB4IHNvbGlkO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY2FyZDpob3ZlciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAke3RoZW1lLmNvbG9ycy5kYXJrfSAxcHggc29saWQ7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmJsYWNrfTtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmJsYWNrfTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L0xpbms+XG4gICAgKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNhcmRzXCI+e2FkZFBvc3RzKCl9PC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAubGF5b3V0IHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA3MHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgMGRlZyxcbiAgICAgICAgICAgICAgJHt0aGVtZS5jb2xvcnMuZGFya30gMCUsXG4gICAgICAgICAgICAgICR7dGhlbWUuY29sb3JzW1wicGluay1saW5rXCJdfSA4MCUsXG4gICAgICAgICAgICAgIHdoaXRlIDEwMCVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/pages/blog.js */"))));
    });
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4109862984", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors["pink-link"]]]]) + " " + "layout",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4109862984", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors["pink-link"]]]]) + " " + "cards",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, addPosts())), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4109862984",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors["pink-link"]],
    __self: _this
  }, ".layout.__jsx-style-dynamic-selector{padding-top:70px;padding-left:120px;padding-right:30px;min-height:100vh;background-image:linear-gradient( 0deg, ".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.dark, " 0%, ").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors["pink-link"], " 80%, white 100% );}.cards.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9wYWdlcy9ibG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFUyxBQUc4QixBQVlKLGlCQVhNLG1CQUNBLG1CQUNGLGlCQU1oQixFQUkwQix5R0FDWixhQUpqQiw0Q0FLQSIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL3dlYi1wb3J0Zm9saW8vcGFnZXMvYmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IGJsb2cgZnJvbSBcIi4uL2RhdGFiYXNlL2Jsb2dcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBhZGRQb3N0cyA9ICgpID0+IHtcbiAgICBjb25zdCBtYXBSZXZlcnNlID0gKGFyciwgZm4pID0+IHtcbiAgICAgIHJldHVybiBhcnIucmVkdWNlUmlnaHQoKHJlc3VsdCwgZWwpID0+IHtcbiAgICAgICAgcmVzdWx0LnB1c2goZm4oZWwpKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0sIFtdKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIG1hcFJldmVyc2UoYmxvZywgKHBvc3QpID0+IChcbiAgICAgIDxMaW5rIGtleT17cG9zdC5pZH0gaHJlZj1cIi9wL1t0aXRsZV1cIiBhcz17YC9wLyR7cG9zdC50aXRsZX1gfT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj57cG9zdC50aXRsZX08L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRhdGVcIj57cG9zdC5kYXRlfTwvcD5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6ICR7dGhlbWUuY29sb3JzLmdyYXl9IDFweCBzb2xpZDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogJHt0aGVtZS5jb2xvcnMuZGFya30gMXB4IHNvbGlkO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibGFja307XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5kYXRlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibGFja307XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2xpPlxuICAgICAgPC9MaW5rPlxuICAgICkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJjYXJkc1wiPnthZGRQb3N0cygpfTwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmxheW91dCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNzBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgIDBkZWcsXG4gICAgICAgICAgICAgICR7dGhlbWUuY29sb3JzLmRhcmt9IDAlLFxuICAgICAgICAgICAgICAke3RoZW1lLmNvbG9yc1tcInBpbmstbGlua1wiXX0gODAlLFxuICAgICAgICAgICAgICB3aGl0ZSAxMDAlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZHMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/pages/blog.js */")));
});

/***/ })

})
//# sourceMappingURL=blog.js.b3f657604be78e1e097b.hot-update.js.map