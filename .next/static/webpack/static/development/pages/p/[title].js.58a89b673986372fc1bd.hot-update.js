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
var _this = undefined,
    _jsxFileName = "/Users/WooChoi/Desktop/React.js/web-portfolio/pages/p/[title].js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (function () {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var title = router.query.title;

  var handleBody = function handleBody() {
    return _database_blog__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (post) {
      if (post.title === title) {
        return __jsx("div", {
          key: Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])(),
          className: "jsx-2094004964" + " " + "container",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: "jsx-2094004964" + " " + "img-wrapper",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }
        }, __jsx("img", {
          src: post.picPath,
          height: "350",
          width: "600",
          className: "jsx-2094004964",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 15
          }
        })), __jsx("p", {
          key: post.id,
          className: "jsx-2094004964" + " " + "body",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }
        }, post.body), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          id: "2094004964",
          __self: _this
        }, "img.jsx-2094004964{height:auto;width:100%;}.container.jsx-2094004964{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.img-wrapper.jsx-2094004964{object-fit:cover;max-width:100%;}.body.jsx-2094004964{white-space:pre-wrap;overflow-wrap:break-word;margin:40px 0;}span.jsx-2094004964{font-size:30px;font-weight:400;margin-right:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9wYWdlcy9wL1t0aXRsZV0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJlLEFBRytCLEFBSUMsQUFLSSxBQUlJLEFBS04sWUFqQkosR0FrQkssRUFURCxJQUlVLEVBWjNCLFFBa0JtQixDQVRuQixjQUlnQixFQU1oQixZQUxBLGNBWHdCLDhFQUNILDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL3dlYi1wb3J0Zm9saW8vcGFnZXMvcC9bdGl0bGVdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBibG9nIGZyb20gXCIuLi8uLi9kYXRhYmFzZS9ibG9nXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uLy4uL3N0eWxlcy90aGVtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB0aXRsZSA9IHJvdXRlci5xdWVyeS50aXRsZTtcblxuICBjb25zdCBoYW5kbGVCb2R5ID0gKCkgPT5cbiAgICBibG9nLm1hcCgocG9zdCkgPT4ge1xuICAgICAgaWYgKHBvc3QudGl0bGUgPT09IHRpdGxlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBrZXk9e3V1aWR2NCgpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3QucGljUGF0aH0gaGVpZ2h0PVwiMzUwXCIgd2lkdGg9XCI2MDBcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJib2R5XCIga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgICAge3Bvc3QuYm9keX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmltZy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYm9keSB7XG4gICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiA0MHB4IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1sZWZ0XCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0blwiPkJBQ0s8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICB7aGFuZGxlQm9keSgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmJhY2tncm91bmQge1xuICAgICAgICAgIHBhZGRpbmc6IDUwcHggMjEwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgMGRlZyxcbiAgICAgICAgICAgICR7dGhlbWUuY29sb3JzLmRhcmt9IDAlLFxuICAgICAgICAgICAgJHt0aGVtZS5jb2xvcnNbXCJwaW5rLWxpbmtcIl19IDgwJSxcbiAgICAgICAgICAgIHdoaXRlIDEwMCVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuYmxhY2t9O1xuICAgICAgICAgIHBhZGRpbmc6IDYwcHggMTAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogTGlnaHRHcmF5IDBweCAwcHggMTBweCAwcHg7XG4gICAgICAgICAgbWluLXdpZHRoOiAzMHJlbTtcbiAgICAgICAgfVxuICAgICAgICAuYnRuIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmRhcmt9O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJ0bjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMucGlua307XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcbiAgICAgICAgfVxuICAgICAgICAuYnRuOnZpc2l0ZWQge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/pages/p/[title].js */"));
      }
    });
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1631398923", [_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.pink]]]) + " " + "align-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1631398923", [_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.pink]]]) + " " + "btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, "BACK"))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1631398923", [_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.pink]]]) + " " + "background",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1631398923", [_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.pink]]]) + " " + "body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1631398923", [_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.pink]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, title), handleBody())), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1631398923",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.pink],
    __self: _this
  }, "h1.__jsx-style-dynamic-selector{font-size:34px;font-weight:600;margin-bottom:40px;text-align:center;}.background.__jsx-style-dynamic-selector{padding:50px 210px;line-height:1.8;background-color:rgb(239,239,239);min-height:100vh;background-image:linear-gradient( 0deg, ".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, " 0%, ").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors["pink-link"], " 80%, white 100% );}.body.__jsx-style-dynamic-selector{background:white;color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.black, ";padding:60px 100px;height:100%;border-radius:10px;box-shadow:LightGray 0px 0px 10px 0px;min-width:30rem;}.btn.__jsx-style-dynamic-selector{display:block;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;padding:0.5rem;font-size:15px;font-weight:900;-webkit-text-decoration:none;text-decoration:none;color:white;background-color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, ";border-radius:10px;}.btn.__jsx-style-dynamic-selector:hover{background-color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.pink, ";-webkit-transform:scale(1.08);-ms-transform:scale(1.08);transform:scale(1.08);}.btn.__jsx-style-dynamic-selector:visited{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9wYWdlcy9wL1t0aXRsZV0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUVrQixBQUcwQixBQU1JLEFBWUYsQUFTSCxBQVdnQyxBQUlsQyxZQUNkLEVBZnFCLENBM0JILEVBa0JtQixFQVpuQixZQUxHLElBTWlCLFdBK0JkLElBcENKLEVBaUJDLGdCQWhCckIsQ0FLbUIsRUFZTCxZQUNPLEdBUGxCLGdCQVFxQyxLQU12QixlQUNBLEVBVWpCLGFBVGtCLEdBUEEsYUFRSyxHQVB2QiwrQ0FRYyxHQWpCZCxTQWtCZ0QsOENBQzNCLG1CQUNyQiIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL3dlYi1wb3J0Zm9saW8vcGFnZXMvcC9bdGl0bGVdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBibG9nIGZyb20gXCIuLi8uLi9kYXRhYmFzZS9ibG9nXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uLy4uL3N0eWxlcy90aGVtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB0aXRsZSA9IHJvdXRlci5xdWVyeS50aXRsZTtcblxuICBjb25zdCBoYW5kbGVCb2R5ID0gKCkgPT5cbiAgICBibG9nLm1hcCgocG9zdCkgPT4ge1xuICAgICAgaWYgKHBvc3QudGl0bGUgPT09IHRpdGxlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBrZXk9e3V1aWR2NCgpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3QucGljUGF0aH0gaGVpZ2h0PVwiMzUwXCIgd2lkdGg9XCI2MDBcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJib2R5XCIga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgICAge3Bvc3QuYm9keX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmltZy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYm9keSB7XG4gICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiA0MHB4IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnbi1sZWZ0XCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0blwiPkJBQ0s8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICB7aGFuZGxlQm9keSgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmJhY2tncm91bmQge1xuICAgICAgICAgIHBhZGRpbmc6IDUwcHggMjEwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgMGRlZyxcbiAgICAgICAgICAgICR7dGhlbWUuY29sb3JzLmRhcmt9IDAlLFxuICAgICAgICAgICAgJHt0aGVtZS5jb2xvcnNbXCJwaW5rLWxpbmtcIl19IDgwJSxcbiAgICAgICAgICAgIHdoaXRlIDEwMCVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuYmxhY2t9O1xuICAgICAgICAgIHBhZGRpbmc6IDYwcHggMTAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogTGlnaHRHcmF5IDBweCAwcHggMTBweCAwcHg7XG4gICAgICAgICAgbWluLXdpZHRoOiAzMHJlbTtcbiAgICAgICAgfVxuICAgICAgICAuYnRuIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmRhcmt9O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJ0bjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMucGlua307XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcbiAgICAgICAgfVxuICAgICAgICAuYnRuOnZpc2l0ZWQge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/pages/p/[title].js */")));
});

/***/ })

})
//# sourceMappingURL=[title].js.58a89b673986372fc1bd.hot-update.js.map