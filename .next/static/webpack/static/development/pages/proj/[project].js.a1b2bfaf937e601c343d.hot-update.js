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
        }, "h1.__jsx-style-dynamic-selector{font-size:25px;}.body.__jsx-style-dynamic-selector{white-space:pre-wrap;overflow-wrap:break-word;margin-top:30px;}.navlink.__jsx-style-dynamic-selector{display:inline-block;cursor:pointer;padding:10px;font-size:15px;font-weight:900;-webkit-text-decoration:none;text-decoration:none;color:white;background-color:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, ";border-radius:10px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;margin-top:20px;}.navlink.__jsx-style-dynamic-selector:hover{opacity:0.5;}.navlink.__jsx-style-dynamic-selector:visited{color:white;}span.__jsx-style-dynamic-selector{font-size:30px;font-weight:400;margin-right:5px;}li.__jsx-style-dynamic-selector{list-style:initial;margin-left:20px;}.indent.__jsx-style-dynamic-selector{padding:10px;padding-left:30px;}section.__jsx-style-dynamic-selector{margin-bottom:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvcHJvai9bcHJvamVjdF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURlLEFBR2tDLEFBR00sQUFLQSxBQWFULEFBR0EsQUFHRyxBQUtJLEFBSU4sQUFJTSxZQWxCckIsQUFHQSxDQVlvQixFQXBDcEIsQUEyQmtCLElBS0MsQUFRbkIsRUFyQzJCLEFBS1YsVUFvQkUsQUFTbkIsS0E1QmUsQUF3QmYsVUE3QmtCLEVBeUJsQixDQW5CaUIsYUFMakIsRUFNa0IsZ0JBQ0ssa0RBQ1QsWUFDa0MsOENBQzNCLG1CQUNBLDZGQUNILGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL3BhZ2VzL3Byb2ovW3Byb2plY3RdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuLi8uLi9kYXRhYmFzZS9wcm9qZWN0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB0aXRsZSA9IHJvdXRlci5xdWVyeS5wcm9qZWN0O1xuXG4gIGNvbnN0IGhhbmRsZUJvZHkgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IHByb2plY3RzLm1hcCgocHJvaikgPT4ge1xuICAgICAgaWYgKHByb2oucHJvamVjdCA9PT0gdGl0bGUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17dXVpZHY0KCl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm92ZXJ2aWV3XCI+XG4gICAgICAgICAgICAgICAgPGgxPntPYmplY3Qua2V5cyhwcm9qLmJvZHlbMF0pfSDwn5eSPC9oMT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmRlbnRcIj57T2JqZWN0LnZhbHVlcyhwcm9qLmJvZHlbMF0pfTwvcD5cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhcHByb2FjaFwiPlxuICAgICAgICAgICAgICAgIDxoMT57T2JqZWN0LmtleXMocHJvai5ib2R5WzFdKX0g8J+SrDwvaDE+XG4gICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImluZGVudFwiPlxuICAgICAgICAgICAgICAgICAge3Byb2ouYm9keVsxXVtcIkFQUFJPQUNIXCJdLm1hcCgoYXBwcm9hY2gpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YXBwcm9hY2h9PnthcHByb2FjaH08L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjaGFsbGVuZ2VzXCI+XG4gICAgICAgICAgICAgICAgPGgxPntPYmplY3Qua2V5cyhwcm9qLmJvZHlbMl0pfSDimpTvuI88L2gxPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpbmRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIHtwcm9qLmJvZHlbMl1bXCJDSEFMTEVOR0VTXCJdLm1hcCgoY2hhbGxlbmdlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NoYWxsZW5nZX0+e2NoYWxsZW5nZX08L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWZsZWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxoMT57T2JqZWN0LmtleXMocHJvai5ib2R5WzNdKX0g8J+SrTwvaDE+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5kZW50XCI+e3Byb2ouYm9keVszXVtcIlJFRkxFQ1RJT05TXCJdWzBdfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmRlbnRcIj57cHJvai5ib2R5WzNdW1wiUkVGTEVDVElPTlNcIl1bMV19PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluZGVudFwiPntwcm9qLmJvZHlbM11bXCJSRUZMRUNUSU9OU1wiXVsyXX08L3A+XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZsaW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEJBQ0tcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYm9keSB7XG4gICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hdmxpbmsge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5saW5rfTtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hdmxpbms6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubmF2bGluazp2aXNpdGVkIHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmluZGVudCB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYm9keTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHktd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChwcm9qLnByb2plY3QgPT09IHRpdGxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLWNhcm91c2VsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvai5waWN0dXJlcy5tYXAoKHBpYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3BpYy5wYXRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3BpYy5wYXRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzNzVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjYwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcHRpb25cIj57cGljLmNhcHRpb259PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e2hhbmRsZUJvZHkoKX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubGF5b3V0IHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICB9XG4gICAgICAgIC5zY3JvbGwtY2Fyb3VzZWwge1xuICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgcGFkZGluZzogMzVweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IGdyYXk7XG4gICAgICAgIH1cbiAgICAgICAgLmltZ3Mge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5mbGV4IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmltZyB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXB0aW9uIHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuYmxhY2t9O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAuYm9keS13cmFwIHtcbiAgICAgICAgICBwYWRkaW5nOiA4MHB4IDE1MHB4O1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBib3gtc2hhZG93OiBMaWdodEdyYXkgMHB4IDBweCAxMHB4IDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9yc1tcInBpbmstbFwiXX07XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgMGRlZyxcbiAgICAgICAgICAgICR7dGhlbWUuY29sb3JzLmRhcmt9IDAlLFxuICAgICAgICAgICAgJHt0aGVtZS5jb2xvcnNbXCJwaW5rLWxpbmtcIl19IDgwJSxcbiAgICAgICAgICAgIHdoaXRlIDEwMCVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiA2MHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/pages/proj/[project].js */")));
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1793564004", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"]]]]) + " " + "layout",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1793564004", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"]]]]) + " " + "body-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1793564004", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"]]]]) + " " + "body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1793564004", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"]]]]) + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, title), _database_projects__WEBPACK_IMPORTED_MODULE_6__["projects"].map(function (proj) {
    if (proj.project === title) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1793564004", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"]]]]) + " " + "scroll-carousel",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1793564004", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"]]]]) + " " + "imgs",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 23
        }
      }, proj.pictures.map(function (pic) {
        return __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1793564004", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"]]]]) + " " + "flex",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 29
          }
        }, __jsx("img", {
          key: pic.path,
          src: pic.path,
          height: "375",
          width: "600",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1793564004", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"]]]]) + " " + "img",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 31
          }
        }), __jsx("h3", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1793564004", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"]]]]) + " " + "caption",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 31
          }
        }, pic.caption));
      }))));
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1793564004", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"]]]]) + " " + "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, handleBody())))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1793564004",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"]],
    __self: _this
  }, ".layout.__jsx-style-dynamic-selector{line-height:1.5;min-height:100vh;}.scroll-carousel.__jsx-style-dynamic-selector{overflow:scroll;padding:35px;padding-right:5px;background-color:lightgray;box-shadow:inset 0 0 10px gray;}.imgs.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}.flex.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}.img.__jsx-style-dynamic-selector{margin-right:30px;}.caption.__jsx-style-dynamic-selector{color:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black, ";margin-top:10px;}.title.__jsx-style-dynamic-selector{display:block;text-align:center;font-size:50px;font-weight:500;padding:50px;}.body-wrap.__jsx-style-dynamic-selector{padding:80px 150px;height:100%;box-shadow:LightGray 0px 0px 10px 0px;background-color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], ";background-image:linear-gradient( 0deg, ").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, " 0%, ").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], " 80%, white 100% );}.body.__jsx-style-dynamic-selector{background:white;border-radius:15px;}.content.__jsx-style-dynamic-selector{padding:60px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvcHJvai9bcHJvamVjdF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUprQixBQUcyQixBQUlBLEFBT0ksQUFHUCxBQU9LLEFBR2lCLEFBSXJCLEFBT0ssQUFZRixBQUlKLGFBQ2YsQ0F2Qm9CLEVBNUJELEFBSUosQ0EyQ00sQ0ExQnJCLENBY2MsVUE5Qk0sRUErQm9CLENBUHZCLENBNUJqQixFQXVCa0IsQ0F3QmxCLFdBMUM2QixBQXdCWCxJQUxsQixZQU1lLE1BTWlDLEtBOUJmLEFBT1QsRUFrQnhCLDBCQXJCQSxHQUhBLFVBbUNHLHFDQTVCc0IsbUZBNkJ6QixnQkE1QnFCLDZGQUNELGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL3BhZ2VzL3Byb2ovW3Byb2plY3RdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuLi8uLi9kYXRhYmFzZS9wcm9qZWN0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB0aXRsZSA9IHJvdXRlci5xdWVyeS5wcm9qZWN0O1xuXG4gIGNvbnN0IGhhbmRsZUJvZHkgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IHByb2plY3RzLm1hcCgocHJvaikgPT4ge1xuICAgICAgaWYgKHByb2oucHJvamVjdCA9PT0gdGl0bGUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17dXVpZHY0KCl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm92ZXJ2aWV3XCI+XG4gICAgICAgICAgICAgICAgPGgxPntPYmplY3Qua2V5cyhwcm9qLmJvZHlbMF0pfSDwn5eSPC9oMT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmRlbnRcIj57T2JqZWN0LnZhbHVlcyhwcm9qLmJvZHlbMF0pfTwvcD5cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhcHByb2FjaFwiPlxuICAgICAgICAgICAgICAgIDxoMT57T2JqZWN0LmtleXMocHJvai5ib2R5WzFdKX0g8J+SrDwvaDE+XG4gICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImluZGVudFwiPlxuICAgICAgICAgICAgICAgICAge3Byb2ouYm9keVsxXVtcIkFQUFJPQUNIXCJdLm1hcCgoYXBwcm9hY2gpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YXBwcm9hY2h9PnthcHByb2FjaH08L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjaGFsbGVuZ2VzXCI+XG4gICAgICAgICAgICAgICAgPGgxPntPYmplY3Qua2V5cyhwcm9qLmJvZHlbMl0pfSDimpTvuI88L2gxPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpbmRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIHtwcm9qLmJvZHlbMl1bXCJDSEFMTEVOR0VTXCJdLm1hcCgoY2hhbGxlbmdlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NoYWxsZW5nZX0+e2NoYWxsZW5nZX08L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWZsZWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxoMT57T2JqZWN0LmtleXMocHJvai5ib2R5WzNdKX0g8J+SrTwvaDE+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5kZW50XCI+e3Byb2ouYm9keVszXVtcIlJFRkxFQ1RJT05TXCJdWzBdfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmRlbnRcIj57cHJvai5ib2R5WzNdW1wiUkVGTEVDVElPTlNcIl1bMV19PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImluZGVudFwiPntwcm9qLmJvZHlbM11bXCJSRUZMRUNUSU9OU1wiXVsyXX08L3A+XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZsaW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEJBQ0tcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYm9keSB7XG4gICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hdmxpbmsge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5saW5rfTtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hdmxpbms6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubmF2bGluazp2aXNpdGVkIHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmluZGVudCB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYm9keTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHktd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChwcm9qLnByb2plY3QgPT09IHRpdGxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLWNhcm91c2VsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvai5waWN0dXJlcy5tYXAoKHBpYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3BpYy5wYXRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3BpYy5wYXRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzNzVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjYwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcHRpb25cIj57cGljLmNhcHRpb259PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e2hhbmRsZUJvZHkoKX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubGF5b3V0IHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICB9XG4gICAgICAgIC5zY3JvbGwtY2Fyb3VzZWwge1xuICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgcGFkZGluZzogMzVweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IGdyYXk7XG4gICAgICAgIH1cbiAgICAgICAgLmltZ3Mge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5mbGV4IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmltZyB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXB0aW9uIHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuYmxhY2t9O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAuYm9keS13cmFwIHtcbiAgICAgICAgICBwYWRkaW5nOiA4MHB4IDE1MHB4O1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBib3gtc2hhZG93OiBMaWdodEdyYXkgMHB4IDBweCAxMHB4IDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9yc1tcInBpbmstbFwiXX07XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgMGRlZyxcbiAgICAgICAgICAgICR7dGhlbWUuY29sb3JzLmRhcmt9IDAlLFxuICAgICAgICAgICAgJHt0aGVtZS5jb2xvcnNbXCJwaW5rLWxpbmtcIl19IDgwJSxcbiAgICAgICAgICAgIHdoaXRlIDEwMCVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiA2MHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/pages/proj/[project].js */")));
});

/***/ })

})
//# sourceMappingURL=[project].js.a1b2bfaf937e601c343d.hot-update.js.map