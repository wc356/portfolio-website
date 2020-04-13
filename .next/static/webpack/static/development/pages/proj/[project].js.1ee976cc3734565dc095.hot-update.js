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
    _jsxFileName = "/Users/WooChoi/Desktop/React.js/web-portfolio/pages/proj/[project].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (function () {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var title = router.query.project;

  var handleBody = function handleBody() {
    var body = _database_projects__WEBPACK_IMPORTED_MODULE_6__["projects"].map(function (proj) {
      if (proj.project === title) {
        return __jsx("div", {
          key: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(),
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977572397", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977572397", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "link-wrapper",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }
        }, proj.links.map(function (link) {
          return __jsx("a", {
            key: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(),
            href: link.src,
            target: "_blank",
            rel: "nofollow noopener noreferrer",
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977572397", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "link",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 17
            }
          }, __jsx("p", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977572397", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]),
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 19
            }
          }, link.text));
        })), __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977572397", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "body",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }
        }, __jsx("section", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977572397", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "overview",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }
        }, __jsx("h1", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977572397", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 17
          }
        }, "\uD83D\uDDD2 ", Object.keys(proj.body[0]), " \uD83D\uDDD2"), __jsx("p", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977572397", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "indent",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 17
          }
        }, Object.values(proj.body[0]))), __jsx("section", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977572397", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "approach",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }
        }, __jsx("h1", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977572397", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 17
          }
        }, "\uD83D\uDCAC ", Object.keys(proj.body[1]), " \uD83D\uDCAC"), __jsx("ol", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977572397", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "indent",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 17
          }
        }, proj.body[1]["APPROACH"].map(function (approach) {
          return __jsx("li", {
            key: approach,
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977572397", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]),
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 21
            }
          }, approach);
        }))), __jsx("section", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977572397", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "challenges",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 15
          }
        }, __jsx("h1", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977572397", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 17
          }
        }, "\u2694\uFE0F ", Object.keys(proj.body[2]), " \u2694\uFE0F"), __jsx("ul", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977572397", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "indent",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 17
          }
        }, proj.body[2]["CHALLENGES"].map(function (challenge) {
          return __jsx("li", {
            key: challenge,
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977572397", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]),
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 21
            }
          }, challenge);
        }))), __jsx("section", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977572397", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "reflections",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }
        }, __jsx("h1", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977572397", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 17
          }
        }, "\uD83D\uDCAD ", Object.keys(proj.body[3]), " \uD83D\uDCAD"), proj.body[3]["REFLECTIONS"].map(function (reflection) {
          return __jsx("p", {
            key: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(),
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977572397", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "indent",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 19
            }
          }, reflection);
        })), __jsx("a", {
          onClick: function onClick() {
            window.history.back();
          },
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1977572397", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "navlink",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 15
          }
        }, "BACK")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          id: "1977572397",
          dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link],
          __self: _this
        }, "a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;}h1.__jsx-style-dynamic-selector{font-size:25px;}p.__jsx-style-dynamic-selector{padding:10px;}.body.__jsx-style-dynamic-selector{white-space:pre-wrap;overflow-wrap:break-word;margin-top:30px;}.navlink.__jsx-style-dynamic-selector{display:inline-block;cursor:pointer;padding:10px;font-size:15px;font-weight:900;color:white;background-color:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, ";border-radius:10px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;margin-top:20px;}.navlink.__jsx-style-dynamic-selector:hover{opacity:0.5;}.navlink.__jsx-style-dynamic-selector:visited{color:white;}span.__jsx-style-dynamic-selector{font-size:30px;font-weight:400;margin-right:5px;}ul.__jsx-style-dynamic-selector,ol.__jsx-style-dynamic-selector{margin-left:20px;padding:10px 0;}ul.__jsx-style-dynamic-selector{list-style-type:disc;}.indent.__jsx-style-dynamic-selector{padding-left:30px;}.link-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin-bottom:25px;padding:15px;}.link.__jsx-style-dynamic-selector{display:block;text-align:center;white-space:nowrap;padding:10px;background-color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, ";border-radius:2rem;color:white;font-weight:500;width:9rem;}.link.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.08);-ms-transform:scale(1.08);transform:scale(1.08);background-color:pink;}@media only screen and (max-width:700px){.indent.__jsx-style-dynamic-selector{padding-left:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9wYWdlcy9wcm9qL1twcm9qZWN0XS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRWUsQUFHd0MsQUFHTixBQUdGLEFBR1EsQUFLQSxBQVlULEFBR0EsQUFHRyxBQU1FLEFBSUksQUFHSCxBQUdMLEFBTUMsQUFXUSxBQUtMLFlBM0NuQixBQUdBLENBdkJBLENBZ0RvQixDQW5EcEIsQUE2QmtCLEFBc0NoQixFQWhDZSxDQU9qQixHQXBDMkIsQUFLVixBQTRCakIsVUFUbUIsQ0FNbkIsQUFnQnFCLElBeENOLFVBTEcsRUF3QmxCLENBbEJpQixDQWhCakIsQ0F3RGUsV0E3Q2YsRUFNa0IsQUF3QzhCLFVBVGpCLElBaUJQLEVBL0NWLFlBQ2tDLFFBK0NoRCxVQVJxQixtQkFDUCxTQXZDTyxHQXdDSCxnQkF2Q0csQUF3Q1IsV0FDYiw2QkFicUIsbUJBQ04sYUFDZixxQkE3QmtCLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL3dlYi1wb3J0Zm9saW8vcGFnZXMvcHJvai9bcHJvamVjdF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vZGF0YWJhc2UvcHJvamVjdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgdGl0bGUgPSByb3V0ZXIucXVlcnkucHJvamVjdDtcblxuICBjb25zdCBoYW5kbGVCb2R5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBwcm9qZWN0cy5tYXAoKHByb2opID0+IHtcbiAgICAgIGlmIChwcm9qLnByb2plY3QgPT09IHRpdGxlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3V1aWR2NCgpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluay13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIHtwcm9qLmxpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBrZXk9e3V1aWR2NCgpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICBocmVmPXtsaW5rLnNyY31cbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWw9XCJub2ZvbGxvdyBub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cD57bGluay50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwib3ZlcnZpZXdcIj5cbiAgICAgICAgICAgICAgICA8aDE+8J+XkiB7T2JqZWN0LmtleXMocHJvai5ib2R5WzBdKX0g8J+XkjwvaDE+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5kZW50XCI+e09iamVjdC52YWx1ZXMocHJvai5ib2R5WzBdKX08L3A+XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXBwcm9hY2hcIj5cbiAgICAgICAgICAgICAgICA8aDE+8J+SrCB7T2JqZWN0LmtleXMocHJvai5ib2R5WzFdKX0g8J+SrDwvaDE+XG4gICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImluZGVudFwiPlxuICAgICAgICAgICAgICAgICAge3Byb2ouYm9keVsxXVtcIkFQUFJPQUNIXCJdLm1hcCgoYXBwcm9hY2gpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YXBwcm9hY2h9PnthcHByb2FjaH08L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjaGFsbGVuZ2VzXCI+XG4gICAgICAgICAgICAgICAgPGgxPuKalO+4jyB7T2JqZWN0LmtleXMocHJvai5ib2R5WzJdKX0g4pqU77iPPC9oMT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5kZW50XCI+XG4gICAgICAgICAgICAgICAgICB7cHJvai5ib2R5WzJdW1wiQ0hBTExFTkdFU1wiXS5tYXAoKGNoYWxsZW5nZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjaGFsbGVuZ2V9PntjaGFsbGVuZ2V9PC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVmbGVjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8aDE+8J+SrSB7T2JqZWN0LmtleXMocHJvai5ib2R5WzNdKX0g8J+SrTwvaDE+XG4gICAgICAgICAgICAgICAge3Byb2ouYm9keVszXVtcIlJFRkxFQ1RJT05TXCJdLm1hcCgocmVmbGVjdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgPHAga2V5PXt1dWlkdjQoKX0gY2xhc3NOYW1lPVwiaW5kZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIHtyZWZsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2bGlua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBCQUNLXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJvZHkge1xuICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5uYXZsaW5rIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMubGlua307XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5uYXZsaW5rOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hdmxpbms6dmlzaXRlZCB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bCxcbiAgICAgICAgICAgICAgICBvbCB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5kZW50IHtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxpbmstd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxpbmsge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpbmt9O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogOXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxpbms6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAgICAgICAgIC5pbmRlbnQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYm9keTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHktd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChwcm9qLnByb2plY3QgPT09IHRpdGxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt1dWlkdjQoKX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLWNhcm91c2VsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvai5waWN0dXJlcy5tYXAoKHBpYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt1dWlkdjQoKX0gY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3V1aWR2NCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3BpYy5wYXRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzNzVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjYwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcHRpb25cIj57cGljLmNhcHRpb259PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e2hhbmRsZUJvZHkoKX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmxheW91dCB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNztcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxuICAgICAgICAuYm9keS13cmFwIHtcbiAgICAgICAgICBwYWRkaW5nOiA4MHB4IDE1MHB4O1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBib3gtc2hhZG93OiBMaWdodEdyYXkgMHB4IDBweCAxMHB4IDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9yc1tcInBpbmstbFwiXX07XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgMGRlZyxcbiAgICAgICAgICAgICR7dGhlbWUuY29sb3JzLmRhcmt9IDAlLFxuICAgICAgICAgICAgJHt0aGVtZS5jb2xvcnNbXCJwaW5rLWxpbmtcIl19IDgwJSxcbiAgICAgICAgICAgIHdoaXRlIDEwMCVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5zY3JvbGwtY2Fyb3VzZWwge1xuICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgcGFkZGluZzogMzVweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IGdyYXk7XG4gICAgICAgIH1cbiAgICAgICAgLmltZ3Mge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5mbGV4IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmltZyB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXB0aW9uIHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuYmxhY2t9O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMy43NXJlbTtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgICAgLmJvZHktd3JhcCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYm9keSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/pages/proj/[project].js */")));
      }
    });
    return body;
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1269465859", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black]]]) + " " + "layout",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1269465859", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black]]]) + " " + "body-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1269465859", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black]]]) + " " + "body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1269465859", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black]]]) + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }, title), _database_projects__WEBPACK_IMPORTED_MODULE_6__["projects"].map(function (proj) {
    if (proj.project === title) {
      return __jsx("div", {
        key: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1269465859", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1269465859", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black]]]) + " " + "scroll-carousel",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1269465859", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black]]]) + " " + "imgs",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 23
        }
      }, proj.pictures.map(function (pic) {
        return __jsx("div", {
          key: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(),
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1269465859", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black]]]) + " " + "flex",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 29
          }
        }, __jsx("img", {
          key: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(),
          src: pic.path,
          height: "375",
          width: "600",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1269465859", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black]]]) + " " + "img",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 31
          }
        }), __jsx("h3", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1269465859", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black]]]) + " " + "caption",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 31
          }
        }, pic.caption));
      }))));
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1269465859", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black]]]) + " " + "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }
  }, handleBody())))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1269465859",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black],
    __self: _this
  }, ".layout.__jsx-style-dynamic-selector{line-height:1.7;min-height:100vh;}.body-wrap.__jsx-style-dynamic-selector{padding:80px 150px;height:100%;box-shadow:LightGray 0px 0px 10px 0px;background-color:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], ";background-image:linear-gradient( 0deg, ").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, " 0%, ").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], " 80%, white 100% );}.body.__jsx-style-dynamic-selector{background:white;border-radius:15px;}.scroll-carousel.__jsx-style-dynamic-selector{overflow:scroll;padding:35px;padding-right:5px;background-color:lightgray;box-shadow:inset 0 0 10px gray;}.imgs.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}.flex.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}.img.__jsx-style-dynamic-selector{margin-right:30px;}.caption.__jsx-style-dynamic-selector{color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black, ";margin-top:10px;}.title.__jsx-style-dynamic-selector{display:block;text-align:center;font-size:50px;font-weight:500;padding:50px;}.content.__jsx-style-dynamic-selector{padding:3.75rem;}@media only screen and (max-width:700px){.body-wrap.__jsx-style-dynamic-selector{padding:0;}.body.__jsx-style-dynamic-selector{border-radius:0;}.content.__jsx-style-dynamic-selector{padding:1.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9wYWdlcy9wcm9qL1twcm9qZWN0XS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4TGtCLEFBRzJCLEFBSUcsQUFZRixBQUlELEFBT0ksQUFHUCxBQU9LLEFBR2lCLEFBSXJCLEFBT0UsQUFJSixBQUdNLEFBR0QsVUFMakIsSUFYa0IsQ0FpQkgsQ0E3REUsQUFvQkosQUErQmYsQUFPRSxDQTFDbUIsQ0FxQnJCLENBakNjLFVBaUJNLEVBaEJvQixDQXdDdkIsQ0E1Q2pCLEVBdUNrQixDQXZCbEIsV0FLNkIsQUF3QlgsSUFMbEIsWUFNZSxNQXpDaUMsS0FpQmYsQUFPVCxFQWtCeEIsYUFjRSxhQW5DRixHQUhBLFVBWkcscUNBbUJzQixtRkFsQnpCLGdCQW1CcUIsNkZBQ0Qsa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9wYWdlcy9wcm9qL1twcm9qZWN0XS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuLi8uLi9kYXRhYmFzZS9wcm9qZWN0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB0aXRsZSA9IHJvdXRlci5xdWVyeS5wcm9qZWN0O1xuXG4gIGNvbnN0IGhhbmRsZUJvZHkgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IHByb2plY3RzLm1hcCgocHJvaikgPT4ge1xuICAgICAgaWYgKHByb2oucHJvamVjdCA9PT0gdGl0bGUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17dXVpZHY0KCl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAge3Byb2oubGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGtleT17dXVpZHY0KCl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsuc3JjfVxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vZm9sbG93IG5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwPntsaW5rLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJvdmVydmlld1wiPlxuICAgICAgICAgICAgICAgIDxoMT7wn5eSIHtPYmplY3Qua2V5cyhwcm9qLmJvZHlbMF0pfSDwn5eSPC9oMT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmRlbnRcIj57T2JqZWN0LnZhbHVlcyhwcm9qLmJvZHlbMF0pfTwvcD5cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhcHByb2FjaFwiPlxuICAgICAgICAgICAgICAgIDxoMT7wn5KsIHtPYmplY3Qua2V5cyhwcm9qLmJvZHlbMV0pfSDwn5KsPC9oMT5cbiAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwiaW5kZW50XCI+XG4gICAgICAgICAgICAgICAgICB7cHJvai5ib2R5WzFdW1wiQVBQUk9BQ0hcIl0ubWFwKChhcHByb2FjaCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXthcHByb2FjaH0+e2FwcHJvYWNofTwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNoYWxsZW5nZXNcIj5cbiAgICAgICAgICAgICAgICA8aDE+4pqU77iPIHtPYmplY3Qua2V5cyhwcm9qLmJvZHlbMl0pfSDimpTvuI88L2gxPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpbmRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIHtwcm9qLmJvZHlbMl1bXCJDSEFMTEVOR0VTXCJdLm1hcCgoY2hhbGxlbmdlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NoYWxsZW5nZX0+e2NoYWxsZW5nZX08L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWZsZWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxoMT7wn5KtIHtPYmplY3Qua2V5cyhwcm9qLmJvZHlbM10pfSDwn5KtPC9oMT5cbiAgICAgICAgICAgICAgICB7cHJvai5ib2R5WzNdW1wiUkVGTEVDVElPTlNcIl0ubWFwKChyZWZsZWN0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8cCBrZXk9e3V1aWR2NCgpfSBjbGFzc05hbWU9XCJpbmRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAge3JlZmxlY3Rpb259XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZsaW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEJBQ0tcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYm9keSB7XG4gICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hdmxpbmsge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5saW5rfTtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hdmxpbms6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubmF2bGluazp2aXNpdGVkIHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVsLFxuICAgICAgICAgICAgICAgIG9sIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbmRlbnQge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubGluay13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubGluayB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMubGlua307XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA5cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubGluazpob3ZlciB7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICAgICAgICAgICAgICAgLmluZGVudCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBib2R5O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keS13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2opID0+IHtcbiAgICAgICAgICAgICAgaWYgKHByb2oucHJvamVjdCA9PT0gdGl0bGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3V1aWR2NCgpfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGwtY2Fyb3VzZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qLnBpY3R1cmVzLm1hcCgocGljKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3V1aWR2NCgpfSBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dXVpZHY0KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cGljLnBhdGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjM3NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FwdGlvblwiPntwaWMuY2FwdGlvbn08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj57aGFuZGxlQm9keSgpfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubGF5b3V0IHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS43O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5LXdyYXAge1xuICAgICAgICAgIHBhZGRpbmc6IDgwcHggMTUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IExpZ2h0R3JheSAwcHggMHB4IDEwcHggMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzW1wicGluay1sXCJdfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAwZGVnLFxuICAgICAgICAgICAgJHt0aGVtZS5jb2xvcnMuZGFya30gMCUsXG4gICAgICAgICAgICAke3RoZW1lLmNvbG9yc1tcInBpbmstbGlua1wiXX0gODAlLFxuICAgICAgICAgICAgd2hpdGUgMTAwJVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNjcm9sbC1jYXJvdXNlbCB7XG4gICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICBwYWRkaW5nOiAzNXB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggZ3JheTtcbiAgICAgICAgfVxuICAgICAgICAuaW1ncyB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLmZsZXgge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuaW1nIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcHRpb24ge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibGFja307XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBwYWRkaW5nOiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAzLjc1cmVtO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAuYm9keS13cmFwIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ib2R5IHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/pages/proj/[project].js */")));
});

/***/ })

})
//# sourceMappingURL=[project].js.1ee976cc3734565dc095.hot-update.js.map