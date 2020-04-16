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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _database_blog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../database/blog */ "./database/blog.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.js");
var _this = undefined,
    _jsxFileName = "/Users/WooChoi/Desktop/React.js/web-portfolio/pages/p/[title].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







/* harmony default export */ __webpack_exports__["default"] = (function () {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var title = router.query.title;

  var handleBody = function handleBody() {
    return _database_blog__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (post) {
      if (post.title === title) {
        return __jsx("div", {
          key: Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])(),
          className: "jsx-129279553" + " " + "container",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: "jsx-129279553" + " " + "img-wrapper",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }
        }, __jsx("img", {
          src: post.picPath,
          className: "jsx-129279553",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 15
          }
        })), __jsx("p", {
          key: post.id,
          className: "jsx-129279553" + " " + "body",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }
        }, post.body), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          id: "129279553",
          __self: _this
        }, "img.jsx-129279553{height:auto;width:100%;}.container.jsx-129279553{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.img-wrapper.jsx-129279553{object-fit:cover;max-height:500px;max-width:100%;background-color:yellow;}.body.jsx-129279553{white-space:pre-wrap;overflow-wrap:break-word;margin:40px 0;}@media screen and (max-width:1024px){.background.jsx-129279553{padding:0;}.body.jsx-129279553{padding:0;margin:2rem 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9wYWdlcy9wL1t0aXRsZV0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJlLEFBRytCLEFBSUMsQUFLSSxBQU1JLEFBTVQsQUFHQSxVQUZaLEFBR2dCLEVBeEJMLEtBU00sSUFNUSxFQWQzQixDQXdCRSxVQWZlLFlBTUQsR0FMVSxXQU0xQixhQUxBLENBUndCLDhFQUNILDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL3dlYi1wb3J0Zm9saW8vcGFnZXMvcC9bdGl0bGVdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IGJsb2cgZnJvbSBcIi4uLy4uL2RhdGFiYXNlL2Jsb2dcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHRpdGxlID0gcm91dGVyLnF1ZXJ5LnRpdGxlO1xuXG4gIGNvbnN0IGhhbmRsZUJvZHkgPSAoKSA9PlxuICAgIGJsb2cubWFwKChwb3N0KSA9PiB7XG4gICAgICBpZiAocG9zdC50aXRsZSA9PT0gdGl0bGUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIGtleT17dXVpZHY0KCl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctd3JhcHBlclwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5waWNQYXRofSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJib2R5XCIga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgICAge3Bvc3QuYm9keX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmltZy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ib2R5IHtcbiAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDQwcHggMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgICAgICAgICAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMnJlbSAwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG5cIj5CQUNLPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICB7aGFuZGxlQm9keSgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmJhY2tncm91bmQge1xuICAgICAgICAgIHBhZGRpbmc6IDUwcHggMjEwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgMGRlZyxcbiAgICAgICAgICAgICR7dGhlbWUuY29sb3JzLmRhcmt9IDAlLFxuICAgICAgICAgICAgJHt0aGVtZS5jb2xvcnNbXCJwaW5rLWxpbmtcIl19IDgwJSxcbiAgICAgICAgICAgIHdoaXRlIDEwMCVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuYmxhY2t9O1xuICAgICAgICAgIHBhZGRpbmc6IDYwcHggMTAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogTGlnaHRHcmF5IDBweCAwcHggMTBweCAwcHg7XG4gICAgICAgICAgbWluLXdpZHRoOiAxMHJlbTtcbiAgICAgICAgfVxuICAgICAgICAuYnRuIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgbGVmdDogMTByZW07XG4gICAgICAgICAgdG9wOiAxMHJlbTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDEuNXJlbSAwIDEuNXJlbTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5kYXJrfTtcbiAgICAgICAgICBib3gtc2hhZG93OiAke3RoZW1lLmNvbG9ycy5kYXJrfSAwcHggMHB4IDEwcHggMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5idG46aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLnBpbmt9O1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XG4gICAgICAgIH1cbiAgICAgICAgLmJ0bjp2aXNpdGVkIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ib2R5IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNlbTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICBsZWZ0OiAwLjVlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMWVtIDAgMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/pages/p/[title].js */"));
      }
    });
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4145614120", [_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.pink]]]) + " " + "background",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4145614120", [_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.pink]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4145614120", [_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.pink]]]) + " " + "btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "BACK"))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4145614120", [_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.pink]]]) + " " + "body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4145614120", [_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.pink]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, title), handleBody())), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4145614120",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.pink],
    __self: _this
  }, "h1.__jsx-style-dynamic-selector{font-size:34px;font-weight:600;margin-bottom:40px;text-align:center;}.background.__jsx-style-dynamic-selector{padding:50px 210px;line-height:1.8;background-color:rgb(239,239,239);min-height:100vh;background-image:linear-gradient( 0deg, ".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, " 0%, ").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors["pink-link"], " 80%, white 100% );}.body.__jsx-style-dynamic-selector{background:white;color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.black, ";padding:60px 100px;height:100%;border-radius:10px;box-shadow:LightGray 0px 0px 10px 0px;min-width:10rem;}.btn.__jsx-style-dynamic-selector{display:block;position:fixed;left:10rem;top:10rem;border-radius:0 1.5rem 0 1.5rem;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;padding:1rem;font-size:15px;font-weight:900;-webkit-text-decoration:none;text-decoration:none;color:white;background-color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, ";box-shadow:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.dark, " 0px 0px 10px 0px;}.btn.__jsx-style-dynamic-selector:hover{background-color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.pink, ";-webkit-transform:scale(1.08);-ms-transform:scale(1.08);transform:scale(1.08);}.btn.__jsx-style-dynamic-selector:visited{color:white;}@media only screen and (max-width:992px){h1.__jsx-style-dynamic-selector{font-size:1.5rem;}.background.__jsx-style-dynamic-selector{padding:2em;}.body.__jsx-style-dynamic-selector{padding:3em;min-width:0;}.btn.__jsx-style-dynamic-selector{left:0.5em;padding:0.5rem;border-radius:0 1em 0 1em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9wYWdlcy9wL1t0aXRsZV0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkVrQixBQUcwQixBQU1JLEFBWUYsQUFTSCxBQWVnQyxBQUlsQyxBQUlPLEFBR0wsQUFHQSxBQUlELFdBQ0ksQ0FkbkIsQUFPRSxBQUdjLEVBN0JDLENBM0JDLEVBa0JtQixBQWdDbkMsRUE1Q2dCLEtBbURoQixFQUk0QixHQWpDakIsRUEzQlEsSUFNaUIsS0FzQjFCLE1BYVksSUF4Q0osQUE0QmMsRUFYYixBQTJDbkIsZ0JBM0RGLENBS21CLEVBWUwsV0FXTyxDQVZBLEdBUGxCLGdCQVFxQyxzQkFxQnhDLGdCQXBCa0IsZ0JBQ2xCLG1CQVFlLGFBQ0UsZUFDQyxHQW5CbEIsYUFvQnVCLGtEQUNULFlBQ2tDLDhDQUNXLHlEQUMzRCIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL3dlYi1wb3J0Zm9saW8vcGFnZXMvcC9bdGl0bGVdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IGJsb2cgZnJvbSBcIi4uLy4uL2RhdGFiYXNlL2Jsb2dcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHRpdGxlID0gcm91dGVyLnF1ZXJ5LnRpdGxlO1xuXG4gIGNvbnN0IGhhbmRsZUJvZHkgPSAoKSA9PlxuICAgIGJsb2cubWFwKChwb3N0KSA9PiB7XG4gICAgICBpZiAocG9zdC50aXRsZSA9PT0gdGl0bGUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIGtleT17dXVpZHY0KCl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctd3JhcHBlclwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5waWNQYXRofSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJib2R5XCIga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgICAge3Bvc3QuYm9keX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmltZy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ib2R5IHtcbiAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDQwcHggMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgICAgICAgICAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMnJlbSAwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG5cIj5CQUNLPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICB7aGFuZGxlQm9keSgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmJhY2tncm91bmQge1xuICAgICAgICAgIHBhZGRpbmc6IDUwcHggMjEwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgMGRlZyxcbiAgICAgICAgICAgICR7dGhlbWUuY29sb3JzLmRhcmt9IDAlLFxuICAgICAgICAgICAgJHt0aGVtZS5jb2xvcnNbXCJwaW5rLWxpbmtcIl19IDgwJSxcbiAgICAgICAgICAgIHdoaXRlIDEwMCVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuYmxhY2t9O1xuICAgICAgICAgIHBhZGRpbmc6IDYwcHggMTAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogTGlnaHRHcmF5IDBweCAwcHggMTBweCAwcHg7XG4gICAgICAgICAgbWluLXdpZHRoOiAxMHJlbTtcbiAgICAgICAgfVxuICAgICAgICAuYnRuIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgbGVmdDogMTByZW07XG4gICAgICAgICAgdG9wOiAxMHJlbTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDEuNXJlbSAwIDEuNXJlbTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5kYXJrfTtcbiAgICAgICAgICBib3gtc2hhZG93OiAke3RoZW1lLmNvbG9ycy5kYXJrfSAwcHggMHB4IDEwcHggMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5idG46aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLnBpbmt9O1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XG4gICAgICAgIH1cbiAgICAgICAgLmJ0bjp2aXNpdGVkIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ib2R5IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNlbTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICBsZWZ0OiAwLjVlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMWVtIDAgMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/pages/p/[title].js */")));
});

/***/ })

})
//# sourceMappingURL=[title].js.bb2ad4f0eafcf9ce815e.hot-update.js.map