webpackHotUpdate("static/development/pages/proj/[project].js",{

/***/ "./pages/proj/[project].js":
/*!*********************************!*\
  !*** ./pages/proj/[project].js ***!
  \*********************************/
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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _database_projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../database/projects */ "./database/projects.js");
var _this = undefined,
    _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/pages/proj/[project].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (function () {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var title = router.query.project;

  var handleBody = function handleBody() {
    var body = _database_projects__WEBPACK_IMPORTED_MODULE_6__["projects"].map(function (proj) {
      if (proj.project === title) {
        return __jsx("div", {
          key: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(),
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3148686794", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3148686794", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "body",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }
        }, __jsx("section", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3148686794", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "overview",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 15
          }
        }, __jsx("h1", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3148686794", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 17
          }
        }, Object.keys(proj.body[0]), " \uD83D\uDDD2"), __jsx("p", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3148686794", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "indent",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 17
          }
        }, Object.values(proj.body[0]))), __jsx("section", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3148686794", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "approach",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }
        }, __jsx("h1", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3148686794", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 17
          }
        }, Object.keys(proj.body[1]), " \uD83D\uDCAC"), __jsx("ol", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3148686794", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "indent",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 17
          }
        }, proj.body[1]["APPROACH"].map(function (approach) {
          return __jsx("li", {
            key: approach,
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3148686794", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]),
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 21
            }
          }, approach);
        }))), __jsx("section", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3148686794", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "challenges",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }
        }, __jsx("h1", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3148686794", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }
        }, Object.keys(proj.body[2]), " \u2694\uFE0F"), __jsx("ul", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3148686794", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "indent",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 17
          }
        }, proj.body[2]["CHALLENGES"].map(function (challenge) {
          return __jsx("li", {
            key: challenge,
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3148686794", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]),
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 21
            }
          }, challenge);
        }))), __jsx("section", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3148686794", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "reflections",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }
        }, __jsx("h1", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3148686794", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 17
          }
        }, Object.keys(proj.body[3]), " \uD83D\uDCAD"), __jsx("p", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3148686794", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "indent",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 17
          }
        }, proj.body[3]["REFLECTIONS"][0]), __jsx("p", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3148686794", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "indent",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 17
          }
        }, proj.body[3]["REFLECTIONS"][1]), __jsx("p", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3148686794", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "indent",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 17
          }
        }, proj.body[3]["REFLECTIONS"][2])), __jsx("a", {
          onClick: function onClick() {
            window.history.back();
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3148686794", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "navlink",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }
        }, "BACK")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          id: "3148686794",
          dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link],
          __self: _this
        }, "h1.__jsx-style-dynamic-selector{font-size:25px;}.body.__jsx-style-dynamic-selector{white-space:pre-wrap;overflow-wrap:break-word;margin-top:30px;}.navlink.__jsx-style-dynamic-selector{display:inline-block;cursor:pointer;padding:10px;font-size:15px;font-weight:900;-webkit-text-decoration:none;text-decoration:none;color:white;background-color:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, ";border-radius:10px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;margin-top:20px;}.navlink.__jsx-style-dynamic-selector:hover{opacity:0.5;}.navlink.__jsx-style-dynamic-selector:visited{color:white;}span.__jsx-style-dynamic-selector{font-size:30px;font-weight:400;margin-right:5px;}li.__jsx-style-dynamic-selector{list-style:initial;margin-left:20px;}.indent.__jsx-style-dynamic-selector{padding:10px;padding-left:30px;}section.__jsx-style-dynamic-selector{margin-bottom:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvcHJvai9bcHJvamVjdF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURlLEFBR2tDLEFBR00sQUFLQSxBQWFULEFBR0EsQUFHRyxBQUtJLEFBSU4sQUFJTSxZQWxCckIsQUFHQSxDQVlvQixFQXBDcEIsQUEyQmtCLElBS0MsQUFRbkIsRUFyQzJCLEFBS1YsVUFvQkUsQUFTbkIsS0E1QmUsQUF3QmYsVUE3QmtCLEVBeUJsQixDQW5CaUIsYUFMakIsRUFNa0IsZ0JBQ0ssa0RBQ1QsWUFDa0MsOENBQzNCLG1CQUNBLDZGQUNILGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL3BhZ2VzL3Byb2ovW3Byb2plY3RdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuLi8uLi9kYXRhYmFzZS9wcm9qZWN0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB0aXRsZSA9IHJvdXRlci5xdWVyeS5wcm9qZWN0O1xuXG4gIGNvbnN0IGhhbmRsZUJvZHkgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IHByb2plY3RzLm1hcCgocHJvaikgPT4ge1xuICAgICAgaWYgKHByb2oucHJvamVjdCA9PT0gdGl0bGUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17dXVpZHY0KCl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm92ZXJ2aWV3XCI+XG4gICAgICAgICAgICAgICAgPGgxPntPYmplY3Qua2V5cyhwcm9qLmJvZHlbMF0pfSDwn5eSPC9oMT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmRlbnRcIj57T2JqZWN0LnZhbHVlcyhwcm9qLmJvZHlbMF0pfTwvcD5cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhcHByb2FjaFwiPlxuICAgICAgICAgICAgICAgIDxoMT57T2JqZWN0LmtleXMocHJvai5ib2R5WzFdKX0g8J+SrDwvaDE+XG4gICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImluZGVudFwiPlxuICAgICAgICAgICAgICAgICAge3Byb2ouYm9keVsxXVtcIkFQUFJPQUNIXCJdLm1hcCgoYXBwcm9hY2gpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YXBwcm9hY2h9PnthcHByb2FjaH08L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjaGFsbGVuZ2VzXCI+XG4gICAgICAgICAgICAgICAgPGgxPntPYmplY3Qua2V5cyhwcm9qLmJvZHlbMl0pfSDimpTvuI88L2gxPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpbmRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIHtwcm9qLmJvZHlbMl1bXCJDSEFMTEVOR0VTXCJdLm1hcCgoY2hhbGxlbmdlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NoYWxsZW5nZX0+e2NoYWxsZW5nZX08L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWZsZWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxoMT57T2JqZWN0LmtleXMocHJvai5ib2R5WzNdKX0g8J+SrTwvaDE+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5kZW50XCI+e3Byb2ouYm9keVszXVtcIlJFRkxFQ1RJT05TXCJdWzBdfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmRlbnRcIj57cHJvai5ib2R5WzNdW1wiUkVGTEVDVElPTlNcIl1bMV19PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluZGVudFwiPntwcm9qLmJvZHlbM11bXCJSRUZMRUNUSU9OU1wiXVsyXX08L3A+XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZsaW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEJBQ0tcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYm9keSB7XG4gICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hdmxpbmsge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5saW5rfTtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hdmxpbms6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubmF2bGluazp2aXNpdGVkIHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmluZGVudCB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYm9keTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHktd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChwcm9qLnByb2plY3QgPT09IHRpdGxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLWNhcm91c2VsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvai5waWN0dXJlcy5tYXAoKHBpYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3BpYy5wYXRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3BpYy5wYXRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXB0aW9uXCI+e3BpYy5jYXB0aW9ufTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPntoYW5kbGVCb2R5KCl9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmxheW91dCB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxuICAgICAgICAuc2Nyb2xsLWNhcm91c2VsIHtcbiAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgIHBhZGRpbmc6IDM1cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCBncmF5O1xuICAgICAgICB9XG4gICAgICAgIC5pbWdzIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgfVxuICAgICAgICAuZmxleCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5pbWcge1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAgICAgfVxuICAgICAgICAuY2FwdGlvbiB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmJsYWNrfTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHktd3JhcCB7XG4gICAgICAgICAgcGFkZGluZzogODBweCAxNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYm94LXNoYWRvdzogTGlnaHRHcmF5IDBweCAwcHggMTBweCAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnNbXCJwaW5rLWxcIl19O1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgIDBkZWcsXG4gICAgICAgICAgICAke3RoZW1lLmNvbG9ycy5kYXJrfSAwJSxcbiAgICAgICAgICAgICR7dGhlbWUuY29sb3JzW1wicGluay1saW5rXCJdfSA4MCUsXG4gICAgICAgICAgICB3aGl0ZSAxMDAlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICAuYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogNjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/pages/proj/[project].js */")));
      }
    });
    return body;
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1151773191", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"]]]]) + " " + "layout",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1151773191", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"]]]]) + " " + "body-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1151773191", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"]]]]) + " " + "body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1151773191", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"]]]]) + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, title), _database_projects__WEBPACK_IMPORTED_MODULE_6__["projects"].map(function (proj) {
    if (proj.project === title) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1151773191", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"]]]]) + " " + "scroll-carousel",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1151773191", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"]]]]) + " " + "imgs",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 23
        }
      }, proj.pictures.map(function (pic) {
        return __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1151773191", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"]]]]) + " " + "flex",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 29
          }
        }, __jsx("img", {
          key: pic.path,
          src: pic.path,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1151773191", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"]]]]) + " " + "img",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 31
          }
        }), __jsx("h3", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1151773191", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"]]]]) + " " + "caption",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 31
          }
        }, pic.caption));
      }))));
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1151773191", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"]]]]) + " " + "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, handleBody())))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1151773191",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"]],
    __self: _this
  }, ".layout.__jsx-style-dynamic-selector{line-height:1.5;min-height:100vh;}.scroll-carousel.__jsx-style-dynamic-selector{overflow:scroll;padding:35px;padding-right:5px;background-color:lightgray;box-shadow:inset 0 0 10px gray;}.imgs.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}.flex.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}.img.__jsx-style-dynamic-selector{object-fit:cover;margin-right:30px;}.caption.__jsx-style-dynamic-selector{color:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black, ";margin-top:10px;}.title.__jsx-style-dynamic-selector{display:block;text-align:center;font-size:50px;font-weight:500;padding:50px;}.body-wrap.__jsx-style-dynamic-selector{padding:80px 150px;height:100%;box-shadow:LightGray 0px 0px 10px 0px;background-color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], ";background-image:linear-gradient( 0deg, ").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, " 0%, ").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], " 80%, white 100% );}.body.__jsx-style-dynamic-selector{background:white;border-radius:15px;}.content.__jsx-style-dynamic-selector{padding:60px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvcHJvai9bcHJvamVjdF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0lrQixBQUcyQixBQUlBLEFBT0ksQUFHUCxBQU9JLEFBSWtCLEFBSXJCLEFBT0ssQUFZRixBQUlKLGFBQ2YsQ0F2Qm9CLEVBN0JELEFBSUosQ0FpQkssQUEyQkMsRUFaUCxVQS9CTSxFQWdDb0IsQ0FQdkIsQ0E3QmpCLEVBcUJBLEFBR2tCLENBd0JsQixXQTNDNkIsQUF5QlgsSUFMbEIsWUFNZSxNQU1pQyxLQS9CZixBQU9ULEVBbUJ4QiwwQkF0QkEsR0FIQSxVQW9DRyxxQ0E3QnNCLG1GQThCekIsZ0JBN0JxQiw2RkFDRCxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9wYWdlcy9wcm9qL1twcm9qZWN0XS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vZGF0YWJhc2UvcHJvamVjdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgdGl0bGUgPSByb3V0ZXIucXVlcnkucHJvamVjdDtcblxuICBjb25zdCBoYW5kbGVCb2R5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBwcm9qZWN0cy5tYXAoKHByb2opID0+IHtcbiAgICAgIGlmIChwcm9qLnByb2plY3QgPT09IHRpdGxlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3V1aWR2NCgpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJvdmVydmlld1wiPlxuICAgICAgICAgICAgICAgIDxoMT57T2JqZWN0LmtleXMocHJvai5ib2R5WzBdKX0g8J+XkjwvaDE+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5kZW50XCI+e09iamVjdC52YWx1ZXMocHJvai5ib2R5WzBdKX08L3A+XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXBwcm9hY2hcIj5cbiAgICAgICAgICAgICAgICA8aDE+e09iamVjdC5rZXlzKHByb2ouYm9keVsxXSl9IPCfkqw8L2gxPlxuICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJpbmRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIHtwcm9qLmJvZHlbMV1bXCJBUFBST0FDSFwiXS5tYXAoKGFwcHJvYWNoKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2FwcHJvYWNofT57YXBwcm9hY2h9PC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2hhbGxlbmdlc1wiPlxuICAgICAgICAgICAgICAgIDxoMT57T2JqZWN0LmtleXMocHJvai5ib2R5WzJdKX0g4pqU77iPPC9oMT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5kZW50XCI+XG4gICAgICAgICAgICAgICAgICB7cHJvai5ib2R5WzJdW1wiQ0hBTExFTkdFU1wiXS5tYXAoKGNoYWxsZW5nZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjaGFsbGVuZ2V9PntjaGFsbGVuZ2V9PC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVmbGVjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8aDE+e09iamVjdC5rZXlzKHByb2ouYm9keVszXSl9IPCfkq08L2gxPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluZGVudFwiPntwcm9qLmJvZHlbM11bXCJSRUZMRUNUSU9OU1wiXVswXX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5kZW50XCI+e3Byb2ouYm9keVszXVtcIlJFRkxFQ1RJT05TXCJdWzFdfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmRlbnRcIj57cHJvai5ib2R5WzNdW1wiUkVGTEVDVElPTlNcIl1bMl19PC9wPlxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2bGlua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBCQUNLXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJvZHkge1xuICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5uYXZsaW5rIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMubGlua307XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5uYXZsaW5rOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hdmxpbms6dmlzaXRlZCB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbmRlbnQge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGJvZHk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5LXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvaikgPT4ge1xuICAgICAgICAgICAgICBpZiAocHJvai5wcm9qZWN0ID09PSB0aXRsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbC1jYXJvdXNlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2oucGljdHVyZXMubWFwKChwaWMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwaWMucGF0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwaWMucGF0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FwdGlvblwiPntwaWMuY2FwdGlvbn08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj57aGFuZGxlQm9keSgpfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5sYXlvdXQge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIH1cbiAgICAgICAgLnNjcm9sbC1jYXJvdXNlbCB7XG4gICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICBwYWRkaW5nOiAzNXB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggZ3JheTtcbiAgICAgICAgfVxuICAgICAgICAuaW1ncyB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLmZsZXgge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuaW1nIHtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcHRpb24ge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibGFja307XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBwYWRkaW5nOiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5LXdyYXAge1xuICAgICAgICAgIHBhZGRpbmc6IDgwcHggMTUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IExpZ2h0R3JheSAwcHggMHB4IDEwcHggMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzW1wicGluay1sXCJdfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAwZGVnLFxuICAgICAgICAgICAgJHt0aGVtZS5jb2xvcnMuZGFya30gMCUsXG4gICAgICAgICAgICAke3RoZW1lLmNvbG9yc1tcInBpbmstbGlua1wiXX0gODAlLFxuICAgICAgICAgICAgd2hpdGUgMTAwJVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDYwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/pages/proj/[project].js */")));
});

/***/ })

})
//# sourceMappingURL=[project].js.34733264e311a74ba061.hot-update.js.map