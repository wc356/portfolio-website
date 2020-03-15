webpackHotUpdate("static/development/pages/p/[title].js",{

/***/ "./pages/p/[title].js":
/*!****************************!*\
  !*** ./pages/p/[title].js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _database_blog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../database/blog */ "./database/blog.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.js");
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/pages/p/[title].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (function () {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var title = router.query.title;

  var handleBody = function handleBody() {
    var body = _database_blog__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (post) {
      if (post.title === title) {
        return __jsx("div", {
          key: Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])(),
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1283948428", [_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.pink]]]) + " " + "body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1283948428", [_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.pink]]]) + " " + "img",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, __jsx("img", {
          src: post.picPath,
          height: "350",
          width: "600",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1283948428", [_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.pink]]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        })), __jsx("p", {
          key: post.id,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1283948428", [_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.pink]]]) + " " + "body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, post.body), __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1283948428", [_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.pink]]]) + " " + "align-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/blog",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, __jsx("a", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1283948428", [_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.pink]]]) + " " + "navlink",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, "BACK"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          id: "1283948428",
          dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.pink],
          __self: this
        }, ".body.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.img.__jsx-style-dynamic-selector{display:block;}.body.__jsx-style-dynamic-selector{white-space:pre-wrap;overflow-wrap:break-word;margin:40px 0;}.align-left.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}.navlink.__jsx-style-dynamic-selector{display:block;width:70%;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;padding:10px;font-size:15px;font-weight:900;-webkit-text-decoration:none;text-decoration:none;color:white;background-color:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, ";border-radius:10px;}.navlink.__jsx-style-dynamic-selector:hover{background-color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.pink, ";-webkit-transform:scale(1.08);-ms-transform:scale(1.08);transform:scale(1.08);}.navlink.__jsx-style-dynamic-selector:visited{color:white;}span.__jsx-style-dynamic-selector{font-size:30px;font-weight:400;margin-right:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvcC9bdGl0bGVdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCZSxBQUdnQyxBQUtDLEFBR08sQUFLUixBQUlDLEFBWWdDLEFBSWxDLEFBR0csWUFGakIsRUE1QkEsQUFZWSxDQW1CTSxNQTVCUyxHQVVOLE9BbUJGLGVBNUJILEFBb0JRLEVBU3hCLFlBNUJBLGNBVndCLEFBYVgsV0FDYixnQ0FLZSxPQVdmLE1BVmlCLGVBQ0MsT0FwQkcsU0FxQkUsa0RBQ1QsWUFDa0Msc0JBdEJoRCx3QkF1QnFCLG1CQUNyQiIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL3BhZ2VzL3AvW3RpdGxlXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgYmxvZyBmcm9tIFwiLi4vLi4vZGF0YWJhc2UvYmxvZ1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi9zdHlsZXMvdGhlbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgdGl0bGUgPSByb3V0ZXIucXVlcnkudGl0bGU7XG5cbiAgY29uc3QgaGFuZGxlQm9keSA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gYmxvZy5tYXAocG9zdCA9PiB7XG4gICAgICBpZiAocG9zdC50aXRsZSA9PT0gdGl0bGUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIiBrZXk9e3V1aWR2NCgpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtwb3N0LnBpY1BhdGh9IGhlaWdodD1cIjM1MFwiIHdpZHRoPVwiNjAwXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYm9keVwiIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICAgIHtwb3N0LmJvZHl9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduLWxlZnRcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2bGlua1wiPkJBQ0s8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5ib2R5IHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmltZyB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJvZHkge1xuICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogNDBweCAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYWxpZ24tbGVmdCB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5uYXZsaW5rIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmRhcmt9O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hdmxpbms6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMucGlua307XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubmF2bGluazp2aXNpdGVkIHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYm9keTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAge2hhbmRsZUJvZHkoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxheW91dCB7XG4gICAgICAgICAgcGFkZGluZzogNTBweCAyMjVweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDIzOSwgMjM5KTtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxuICAgICAgICAuYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogNjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBib3gtc2hhZG93OiBMaWdodEdyYXkgMHB4IDBweCAxMHB4IDBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/pages/p/[title].js */")));
      }
    });
    return body;
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2826155858" + " " + "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2826155858" + " " + "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2826155858",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, title), handleBody())), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2826155858",
    __self: this
  }, "h1.jsx-2826155858{font-size:34px;font-weight:600;padding:10px;}.layout.jsx-2826155858{padding:50px 225px;line-height:1.5;background-color:rgb(239,239,239);min-height:100vh;}.body.jsx-2826155858{background:white;padding:60px;height:100%;border-radius:10px;box-shadow:LightGray 0px 0px 10px 0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvcC9bdGl0bGVdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGa0IsQUFHMEIsQUFLSSxBQU1GLGVBVkQsRUFXSCxFQU5HLFdBT0osQ0FYQyxJQUt1QixPQU9qQixFQVhyQixpQkFZd0MsUUFQckIsaUJBQ25CLGFBT0EiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9wYWdlcy9wL1t0aXRsZV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IGJsb2cgZnJvbSBcIi4uLy4uL2RhdGFiYXNlL2Jsb2dcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHRpdGxlID0gcm91dGVyLnF1ZXJ5LnRpdGxlO1xuXG4gIGNvbnN0IGhhbmRsZUJvZHkgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGJsb2cubWFwKHBvc3QgPT4ge1xuICAgICAgaWYgKHBvc3QudGl0bGUgPT09IHRpdGxlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCIga2V5PXt1dWlkdjQoKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5waWNQYXRofSBoZWlnaHQ9XCIzNTBcIiB3aWR0aD1cIjYwMFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJvZHlcIiBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICB7cG9zdC5ib2R5fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmxpbmtcIj5CQUNLPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAuYm9keSB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbWcge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ib2R5IHtcbiAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDQwcHggMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFsaWduLWxlZnQge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubmF2bGluayB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5kYXJrfTtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5uYXZsaW5rOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLnBpbmt9O1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hdmxpbms6dmlzaXRlZCB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGJvZHk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICAgIHtoYW5kbGVCb2R5KCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5sYXlvdXQge1xuICAgICAgICAgIHBhZGRpbmc6IDUwcHggMjI1cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDYwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogTGlnaHRHcmF5IDBweCAwcHggMTBweCAwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/pages/p/[title].js */"));
});

/***/ })

})
//# sourceMappingURL=[title].js.bdcfbbe3ca79f0970427.hot-update.js.map