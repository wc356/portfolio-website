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
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["562246246", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["562246246", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "link-wrapper",
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
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["562246246", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "link",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 17
            }
          }, __jsx("p", {
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["562246246", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]),
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 19
            }
          }, link.text));
        })), __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["562246246", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "body",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }
        }, __jsx("section", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["562246246", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "overview",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }
        }, __jsx("h1", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["562246246", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "subtitle",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 17
          }
        }, "\uD83D\uDDD2 ", Object.keys(proj.body[0]), " \uD83D\uDDD2"), __jsx("p", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["562246246", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "indent",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 17
          }
        }, Object.values(proj.body[0]))), __jsx("section", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["562246246", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "approach",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }
        }, __jsx("h1", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["562246246", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "subtitle",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 17
          }
        }, "\uD83D\uDCAC ", Object.keys(proj.body[1]), " \uD83D\uDCAC"), __jsx("ol", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["562246246", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "indent",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 17
          }
        }, proj.body[1]["APPROACH"].map(function (approach) {
          return __jsx("li", {
            key: approach,
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["562246246", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]),
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 21
            }
          }, approach);
        }))), __jsx("section", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["562246246", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "challenges",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 15
          }
        }, __jsx("h1", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["562246246", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "subtitle",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 17
          }
        }, "\u2694\uFE0F ", Object.keys(proj.body[2]), " \u2694\uFE0F"), __jsx("ul", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["562246246", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "indent",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 17
          }
        }, proj.body[2]["CHALLENGES"].map(function (challenge) {
          return __jsx("li", {
            key: challenge,
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["562246246", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]),
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 21
            }
          }, challenge);
        }))), __jsx("section", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["562246246", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "reflections",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }
        }, __jsx("h1", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["562246246", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "subtitle",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 17
          }
        }, "\uD83D\uDCAD ", Object.keys(proj.body[3]), " \uD83D\uDCAD"), proj.body[3]["REFLECTIONS"].map(function (reflection) {
          return __jsx("p", {
            key: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(),
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["562246246", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "indent",
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
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["562246246", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link]]]) + " " + "navlink",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 15
          }
        }, "BACK")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          id: "562246246",
          dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link],
          __self: _this
        }, "a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;}h1.__jsx-style-dynamic-selector{font-size:25px;}p.__jsx-style-dynamic-selector{padding:10px;}.body.__jsx-style-dynamic-selector{white-space:pre-wrap;overflow-wrap:break-word;margin-top:30px;}.navlink.__jsx-style-dynamic-selector{display:inline-block;cursor:pointer;padding:10px;font-size:15px;font-weight:900;color:white;background-color:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, ";border-radius:10px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;margin-top:20px;}.navlink.__jsx-style-dynamic-selector:hover{opacity:0.5;}.navlink.__jsx-style-dynamic-selector:visited{color:white;}span.__jsx-style-dynamic-selector{font-size:30px;font-weight:400;margin-right:5px;}ul.__jsx-style-dynamic-selector,ol.__jsx-style-dynamic-selector{margin-left:20px;padding:10px 0;}ul.__jsx-style-dynamic-selector{list-style-type:disc;}.indent.__jsx-style-dynamic-selector{padding-left:30px;}.link-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin-bottom:25px;padding:15px;}.link.__jsx-style-dynamic-selector{display:block;text-align:center;white-space:nowrap;padding:10px;background-color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.link, ";border-radius:2rem;color:white;font-weight:500;width:9rem;}.link.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.08);-ms-transform:scale(1.08);transform:scale(1.08);background-color:pink;}section.__jsx-style-dynamic-selector{padding:0.5rem 0;}@media only screen and (max-width:700px){.indent.__jsx-style-dynamic-selector{padding-left:0;}.link-wrapper.__jsx-style-dynamic-selector{padding:0;}.subtitle.__jsx-style-dynamic-selector{text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9wYWdlcy9wcm9qL1twcm9qZWN0XS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRWUsQUFHd0MsQUFHTixBQUdGLEFBR1EsQUFLQSxBQVlULEFBR0EsQUFHRyxBQU1FLEFBSUksQUFHSCxBQUdMLEFBTUMsQUFXUSxBQUlMLEFBSUEsQUFHTCxBQUdRLFVBRnBCLEVBbERGLEFBR0EsQ0F2QkEsQ0FnRG9CLENBbkRwQixBQTZCa0IsQUF5Q2hCLEVBbkNlLEFBK0JqQixDQXhCQSxBQWtDRSxHQXRFeUIsQUFLVixBQTRCakIsVUFUbUIsQ0FNbkIsQUFnQnFCLElBeENOLFVBTEcsRUF3QmxCLENBbEJpQixDQWhCakIsQ0F3RGUsV0E3Q2YsRUFNa0IsQUF3QzhCLFVBVGpCLElBaUJQLEVBL0NWLFlBQ2tDLFFBK0NoRCxVQVJxQixtQkFDUCxTQXZDTyxHQXdDSCxnQkF2Q0csQUF3Q1IsV0FDYiw2QkFicUIsbUJBQ04sYUFDZixxQkE3QmtCLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL3dlYi1wb3J0Zm9saW8vcGFnZXMvcHJvai9bcHJvamVjdF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vZGF0YWJhc2UvcHJvamVjdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgdGl0bGUgPSByb3V0ZXIucXVlcnkucHJvamVjdDtcblxuICBjb25zdCBoYW5kbGVCb2R5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBwcm9qZWN0cy5tYXAoKHByb2opID0+IHtcbiAgICAgIGlmIChwcm9qLnByb2plY3QgPT09IHRpdGxlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3V1aWR2NCgpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluay13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIHtwcm9qLmxpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBrZXk9e3V1aWR2NCgpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICBocmVmPXtsaW5rLnNyY31cbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWw9XCJub2ZvbGxvdyBub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cD57bGluay50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwib3ZlcnZpZXdcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic3VidGl0bGVcIj7wn5eSIHtPYmplY3Qua2V5cyhwcm9qLmJvZHlbMF0pfSDwn5eSPC9oMT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmRlbnRcIj57T2JqZWN0LnZhbHVlcyhwcm9qLmJvZHlbMF0pfTwvcD5cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhcHByb2FjaFwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPvCfkqwge09iamVjdC5rZXlzKHByb2ouYm9keVsxXSl9IPCfkqw8L2gxPlxuICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJpbmRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIHtwcm9qLmJvZHlbMV1bXCJBUFBST0FDSFwiXS5tYXAoKGFwcHJvYWNoKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2FwcHJvYWNofT57YXBwcm9hY2h9PC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2hhbGxlbmdlc1wiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPuKalO+4jyB7T2JqZWN0LmtleXMocHJvai5ib2R5WzJdKX0g4pqU77iPPC9oMT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5kZW50XCI+XG4gICAgICAgICAgICAgICAgICB7cHJvai5ib2R5WzJdW1wiQ0hBTExFTkdFU1wiXS5tYXAoKGNoYWxsZW5nZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjaGFsbGVuZ2V9PntjaGFsbGVuZ2V9PC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVmbGVjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic3VidGl0bGVcIj7wn5KtIHtPYmplY3Qua2V5cyhwcm9qLmJvZHlbM10pfSDwn5KtPC9oMT5cbiAgICAgICAgICAgICAgICB7cHJvai5ib2R5WzNdW1wiUkVGTEVDVElPTlNcIl0ubWFwKChyZWZsZWN0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8cCBrZXk9e3V1aWR2NCgpfSBjbGFzc05hbWU9XCJpbmRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAge3JlZmxlY3Rpb259XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZsaW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEJBQ0tcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJvZHkge1xuICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5uYXZsaW5rIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMubGlua307XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5uYXZsaW5rOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hdmxpbms6dmlzaXRlZCB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bCxcbiAgICAgICAgICAgICAgICBvbCB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5kZW50IHtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxpbmstd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxpbmsge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpbmt9O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogOXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxpbms6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAgICAgICAgIC5pbmRlbnQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAubGluay13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBib2R5O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keS13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2opID0+IHtcbiAgICAgICAgICAgICAgaWYgKHByb2oucHJvamVjdCA9PT0gdGl0bGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3V1aWR2NCgpfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGwtY2Fyb3VzZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qLnBpY3R1cmVzLm1hcCgocGljKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3V1aWR2NCgpfSBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dXVpZHY0KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cGljLnBhdGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjM3NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FwdGlvblwiPntwaWMuY2FwdGlvbn08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj57aGFuZGxlQm9keSgpfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubGF5b3V0IHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS43O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5LXdyYXAge1xuICAgICAgICAgIHBhZGRpbmc6IDgwcHggMTUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IExpZ2h0R3JheSAwcHggMHB4IDEwcHggMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzW1wicGluay1sXCJdfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAwZGVnLFxuICAgICAgICAgICAgJHt0aGVtZS5jb2xvcnMuZGFya30gMCUsXG4gICAgICAgICAgICAke3RoZW1lLmNvbG9yc1tcInBpbmstbGlua1wiXX0gODAlLFxuICAgICAgICAgICAgd2hpdGUgMTAwJVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNjcm9sbC1jYXJvdXNlbCB7XG4gICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICBwYWRkaW5nOiAzNXB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggZ3JheTtcbiAgICAgICAgfVxuICAgICAgICAuaW1ncyB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLmZsZXgge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuaW1nIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcHRpb24ge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibGFja307XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBwYWRkaW5nOiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAzLjc1cmVtO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAuYm9keS13cmFwIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ib2R5IHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zY3JvbGwtY2Fyb3VzZWwge1xuICAgICAgICAgICAgem9vbTogMC43NTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/pages/proj/[project].js */")));
      }
    });
    return body;
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3873196357", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black]]]) + " " + "layout",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3873196357", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black]]]) + " " + "body-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3873196357", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black]]]) + " " + "body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3873196357", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black]]]) + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }, title), _database_projects__WEBPACK_IMPORTED_MODULE_6__["projects"].map(function (proj) {
    if (proj.project === title) {
      return __jsx("div", {
        key: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3873196357", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3873196357", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black]]]) + " " + "scroll-carousel",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3873196357", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black]]]) + " " + "imgs",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 23
        }
      }, proj.pictures.map(function (pic) {
        return __jsx("div", {
          key: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(),
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3873196357", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black]]]) + " " + "flex",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 29
          }
        }, __jsx("img", {
          key: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(),
          src: pic.path,
          height: "375",
          width: "600",
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3873196357", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black]]]) + " " + "img",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 31
          }
        }), __jsx("h3", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3873196357", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black]]]) + " " + "caption",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 31
          }
        }, pic.caption));
      }))));
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3873196357", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black]]]) + " " + "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }, handleBody())))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3873196357",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black],
    __self: _this
  }, ".layout.__jsx-style-dynamic-selector{line-height:1.7;min-height:100vh;}.body-wrap.__jsx-style-dynamic-selector{padding:80px 150px;height:100%;box-shadow:LightGray 0px 0px 10px 0px;background-color:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-l"], ";background-image:linear-gradient( 0deg, ").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.dark, " 0%, ").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors["pink-link"], " 80%, white 100% );}.body.__jsx-style-dynamic-selector{background:white;border-radius:15px;}.scroll-carousel.__jsx-style-dynamic-selector{overflow:scroll;padding:35px;padding-right:5px;background-color:lightgray;box-shadow:inset 0 0 10px gray;}.imgs.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}.flex.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}.img.__jsx-style-dynamic-selector{margin-right:30px;}.caption.__jsx-style-dynamic-selector{color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black, ";margin-top:10px;}.title.__jsx-style-dynamic-selector{display:block;text-align:center;font-size:50px;font-weight:500;padding:50px;}.content.__jsx-style-dynamic-selector{padding:3.75rem;}@media only screen and (max-width:700px){.body-wrap.__jsx-style-dynamic-selector{padding:0;}.body.__jsx-style-dynamic-selector{border-radius:0;}.content.__jsx-style-dynamic-selector{padding:1.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.scroll-carousel.__jsx-style-dynamic-selector{zoom:0.75;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9wYWdlcy9wcm9qL1twcm9qZWN0XS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzTWtCLEFBRzJCLEFBSUcsQUFZRixBQUlELEFBT0ksQUFHUCxBQU9LLEFBR2lCLEFBSXJCLEFBT0UsQUFJSixBQUdNLEFBR0QsQUFJTCxVQVRaLEFBVUEsSUFyQmtCLENBaUJILENBN0RFLEFBb0JKLEFBK0JmLEFBT0UsQ0ExQ21CLENBcUJyQixDQWpDYyxVQWlCTSxFQWhCb0IsQ0F3Q3ZCLENBNUNqQixFQXVDa0IsQ0F2QmxCLFdBSzZCLEFBd0JYLElBTGxCLFlBTWUsTUF6Q2lDLEtBaUJmLEFBT1QsRUFrQnhCLGFBY0UsYUFuQ0YsR0FIQSxVQVpHLHFDQW1Cc0IsbUZBbEJ6QixnQkFtQnFCLDZGQUNELGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL3dlYi1wb3J0Zm9saW8vcGFnZXMvcHJvai9bcHJvamVjdF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vZGF0YWJhc2UvcHJvamVjdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgdGl0bGUgPSByb3V0ZXIucXVlcnkucHJvamVjdDtcblxuICBjb25zdCBoYW5kbGVCb2R5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBwcm9qZWN0cy5tYXAoKHByb2opID0+IHtcbiAgICAgIGlmIChwcm9qLnByb2plY3QgPT09IHRpdGxlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3V1aWR2NCgpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluay13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIHtwcm9qLmxpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBrZXk9e3V1aWR2NCgpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICBocmVmPXtsaW5rLnNyY31cbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWw9XCJub2ZvbGxvdyBub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cD57bGluay50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwib3ZlcnZpZXdcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic3VidGl0bGVcIj7wn5eSIHtPYmplY3Qua2V5cyhwcm9qLmJvZHlbMF0pfSDwn5eSPC9oMT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmRlbnRcIj57T2JqZWN0LnZhbHVlcyhwcm9qLmJvZHlbMF0pfTwvcD5cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhcHByb2FjaFwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPvCfkqwge09iamVjdC5rZXlzKHByb2ouYm9keVsxXSl9IPCfkqw8L2gxPlxuICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJpbmRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIHtwcm9qLmJvZHlbMV1bXCJBUFBST0FDSFwiXS5tYXAoKGFwcHJvYWNoKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2FwcHJvYWNofT57YXBwcm9hY2h9PC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2hhbGxlbmdlc1wiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPuKalO+4jyB7T2JqZWN0LmtleXMocHJvai5ib2R5WzJdKX0g4pqU77iPPC9oMT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaW5kZW50XCI+XG4gICAgICAgICAgICAgICAgICB7cHJvai5ib2R5WzJdW1wiQ0hBTExFTkdFU1wiXS5tYXAoKGNoYWxsZW5nZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjaGFsbGVuZ2V9PntjaGFsbGVuZ2V9PC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVmbGVjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic3VidGl0bGVcIj7wn5KtIHtPYmplY3Qua2V5cyhwcm9qLmJvZHlbM10pfSDwn5KtPC9oMT5cbiAgICAgICAgICAgICAgICB7cHJvai5ib2R5WzNdW1wiUkVGTEVDVElPTlNcIl0ubWFwKChyZWZsZWN0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8cCBrZXk9e3V1aWR2NCgpfSBjbGFzc05hbWU9XCJpbmRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAge3JlZmxlY3Rpb259XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZsaW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEJBQ0tcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJvZHkge1xuICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5uYXZsaW5rIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMubGlua307XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5uYXZsaW5rOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hdmxpbms6dmlzaXRlZCB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bCxcbiAgICAgICAgICAgICAgICBvbCB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5kZW50IHtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxpbmstd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxpbmsge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpbmt9O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogOXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxpbms6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAgICAgICAgIC5pbmRlbnQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAubGluay13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBib2R5O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keS13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2opID0+IHtcbiAgICAgICAgICAgICAgaWYgKHByb2oucHJvamVjdCA9PT0gdGl0bGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3V1aWR2NCgpfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGwtY2Fyb3VzZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qLnBpY3R1cmVzLm1hcCgocGljKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3V1aWR2NCgpfSBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dXVpZHY0KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cGljLnBhdGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjM3NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FwdGlvblwiPntwaWMuY2FwdGlvbn08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj57aGFuZGxlQm9keSgpfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubGF5b3V0IHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS43O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICB9XG4gICAgICAgIC5ib2R5LXdyYXAge1xuICAgICAgICAgIHBhZGRpbmc6IDgwcHggMTUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IExpZ2h0R3JheSAwcHggMHB4IDEwcHggMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzW1wicGluay1sXCJdfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAwZGVnLFxuICAgICAgICAgICAgJHt0aGVtZS5jb2xvcnMuZGFya30gMCUsXG4gICAgICAgICAgICAke3RoZW1lLmNvbG9yc1tcInBpbmstbGlua1wiXX0gODAlLFxuICAgICAgICAgICAgd2hpdGUgMTAwJVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNjcm9sbC1jYXJvdXNlbCB7XG4gICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICBwYWRkaW5nOiAzNXB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggZ3JheTtcbiAgICAgICAgfVxuICAgICAgICAuaW1ncyB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLmZsZXgge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuaW1nIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcHRpb24ge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibGFja307XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBwYWRkaW5nOiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAzLjc1cmVtO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAuYm9keS13cmFwIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ib2R5IHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zY3JvbGwtY2Fyb3VzZWwge1xuICAgICAgICAgICAgem9vbTogMC43NTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/pages/proj/[project].js */")));
});

/***/ })

})
//# sourceMappingURL=[project].js.8719675b6ed8d094ca1c.hot-update.js.map