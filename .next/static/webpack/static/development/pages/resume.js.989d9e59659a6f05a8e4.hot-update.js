webpackHotUpdate("static/development/pages/resume.js",{

/***/ "./components/Resume.js":
/*!******************************!*\
  !*** ./components/Resume.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _database_resume__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database/resume */ "./database/resume.js");
var _this = undefined,
    _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/components/Resume.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Resume = function Resume() {
  var values = Object.values(_database_resume__WEBPACK_IMPORTED_MODULE_3__["default"]);
  console.log(values);

  var renderExperience = function renderExperience(expType) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3796647623", [values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }
    }, expType.toUpperCase(), " EXPERIENCE"), values[3][expType].map(function (exp) {
      var locationExist = exp.location ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, ", ", __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3796647623", [values[9].highlight]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 15
        }
      }, exp.location)) : "";
      return __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3796647623", [values[9].highlight]]]) + " " + "project",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }
      }, __jsx("h2", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3796647623", [values[9].highlight]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }
      }, exp.title, locationExist), __jsx("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3796647623", [values[9].highlight]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }
      }, exp.subTitle), __jsx("ul", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3796647623", [values[9].highlight]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }
      }, exp.description.map(function (desc) {
        return __jsx("li", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3796647623", [values[9].highlight]]]),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 17
          }
        }, desc);
      })));
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3796647623",
      dynamic: [values[9].highlight],
      __self: _this
    }, "h3.__jsx-style-dynamic-selector{color:".concat(values[9].highlight, ";}h2.__jsx-style-dynamic-selector{font-size:20px;}ul.__jsx-style-dynamic-selector{margin-left:15px;}li.__jsx-style-dynamic-selector{padding:5px;}span.__jsx-style-dynamic-selector{font-size:17px;color:gray;}.project.__jsx-style-dynamic-selector{margin:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9SZXN1bWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NTLEFBR2dELEFBR3BCLEFBR0UsQUFHTCxBQUdHLEFBSUgsWUFOZCxBQU9BLEdBYkEsQUFTYSxFQU5iLFNBT0EsU0FiQSIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL2NvbXBvbmVudHMvUmVzdW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHJlc3VtZSBmcm9tIFwiLi4vZGF0YWJhc2UvcmVzdW1lXCI7XG5cbmNvbnN0IFJlc3VtZSA9ICgpID0+IHtcbiAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhyZXN1bWUpO1xuICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xuXG4gIGNvbnN0IHJlbmRlckV4cGVyaWVuY2UgPSAoZXhwVHlwZSkgPT4gKFxuICAgIDw+XG4gICAgICA8aDM+e2V4cFR5cGUudG9VcHBlckNhc2UoKX0gRVhQRVJJRU5DRTwvaDM+XG4gICAgICB7dmFsdWVzWzNdW2V4cFR5cGVdLm1hcCgoZXhwKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uRXhpc3QgPSBleHAubG9jYXRpb24gPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgICwgPHNwYW4+e2V4cC5sb2NhdGlvbn08L3NwYW4+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgXCJcIlxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdFwiPlxuICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICB7ZXhwLnRpdGxlfVxuICAgICAgICAgICAgICB7bG9jYXRpb25FeGlzdH1cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cD57ZXhwLnN1YlRpdGxlfTwvcD5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge2V4cC5kZXNjcmlwdGlvbi5tYXAoKGRlc2MpID0+IChcbiAgICAgICAgICAgICAgICA8bGk+e2Rlc2N9PC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9qZWN0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tbGF5b3V0XCI+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiTUFJTiBsZWZ0LWNvbHVtblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+XG4gICAgICAgICAgICAgIDxoMT57dmFsdWVzWzBdfTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmVzc2lvbmFsLWV4cCBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgIHtyZW5kZXJFeHBlcmllbmNlKFwicHJvZmVzc2lvbmFsXCIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtZXhwIHN1YnNlY3Rpb25cIj5cbiAgICAgICAgICAgICAge3JlbmRlckV4cGVyaWVuY2UoXCJwcm9qZWN0XCIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkdWNhdGlvbiBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxoMz5FRFVDQVRJT048L2gzPlxuICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAge3ZhbHVlc1syXS5zY2hvb2wgKyBcIiBcIn1cbiAgICAgICAgICAgICAgICA8c3Bhbj57dmFsdWVzWzJdLmxvY2F0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPHA+e3ZhbHVlc1syXS5zdWJUaXRsZX08L3A+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dmFsdWVzWzJdLmRlc2NyaXB0aW9uLm1hcCgoZGVzYykgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpPntkZXNjfTwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiIFNQRUNTIHJpZ2h0LWNvbHVtblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1pc0xpbmtcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICB7dmFsdWVzWzFdLmxpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bGlua30+e2xpbmt9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICB7dmFsdWVzWzFdLm5vdExpbmtzLm1hcCgobm90TGluaykgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8cD57bm90TGlua308L3A+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWNobm9sb2d5IHN1YnNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPGgzPlRFQ0hOT0xPR1k8L2gzPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3ZhbHVlc1s0XS5tYXAoKHRlY2gpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaT57dGVjaH08L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbm9ycyBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxoMz5IT05PUlM8L2gzPlxuICAgICAgICAgICAgICA8cD57dmFsdWVzWzVdLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgPHA+e3ZhbHVlc1s1XS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZ3VhZ2VzIHN1YnNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPGgzPkxBTkdVQUdFUzwvaDM+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dmFsdWVzWzZdLm1hcCgobGFuZykgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpPntsYW5nfTwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50ZXJlc3RzIHN1YnNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPGgzPklOVEVSRVNUUzwvaDM+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dmFsdWVzWzddLm1hcCgoaW50KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGk+e2ludH08L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvYmJpZXMgc3Vic2VjdGlvblwiPlxuICAgICAgICAgICAgICA8aDM+SE9CQklFUzwvaDM+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dmFsdWVzWzhdLm1hcCgoaG9iYnkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaT57aG9iYnl9PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgY29sb3I6ICR7dmFsdWVzWzldLmhpZ2hsaWdodH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICR7dmFsdWVzWzldLmhpZ2hsaWdodH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBib3JkZXItdG9wOiA3cHggc29saWQgJHt2YWx1ZXNbOV0uaGlnaGxpZ2h0fTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgICAgcGFkZGluZzogNzBweDtcbiAgICAgICAgICAgIHdpZHRoOiA5OTBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0M3B4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJvdHRvbS1sYXlvdXQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLk1BSU4ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGZsZXg6IDM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5TUEVDUyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luOiA5cHggMCAyMHB4IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdWJzZWN0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VtZTtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Resume.js */")));
  };

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "background",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "bottom-layout",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "MAIN left-column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, values[0])), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "professional-exp subsection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, renderExperience("professional")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "project-exp subsection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, renderExperience("project")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "education subsection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, "EDUCATION"), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, values[2].school + " ", __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, values[2].location)), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, values[2].subTitle), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, values[2].description.map(function (desc) {
    return __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 19
      }
    }, desc);
  })))), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + " SPECS right-column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "contact-isLink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, values[1].links.map(function (link) {
    return __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: link,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 23
      }
    }, link));
  }), values[1].notLinks.map(function (notLink) {
    return __jsx("p", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }
    }, notLink);
  })))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "technology subsection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }, "TECHNOLOGY"), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, values[4].map(function (tech) {
    return __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 19
      }
    }, tech);
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "honors subsection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  }, "HONORS"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, values[5].title), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, values[5].description)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "languages subsection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 15
    }
  }, "LANGUAGES"), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }, values[6].map(function (lang) {
    return __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 19
      }
    }, lang);
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "interests subsection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, "INTERESTS"), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 15
    }
  }, values[7].map(function (_int) {
    return __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 19
      }
    }, _int);
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "hobbies subsection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, "HOBBIES"), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }, values[8].map(function (hobby) {
    return __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2135787911", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 19
      }
    }, hobby);
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2135787911",
    dynamic: [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight],
    __self: _this
  }, "h3.__jsx-style-dynamic-selector{color:".concat(values[9].highlight, ";}a.__jsx-style-dynamic-selector{color:").concat(values[9].highlight, ";}span.__jsx-style-dynamic-selector{color:gray;font-size:20px;}.background.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.page.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-top:7px solid ").concat(values[9].highlight, ";border-bottom:7px solid ").concat(values[9].highlight, ";padding:70px;width:990px;line-height:1.8;}.name.__jsx-style-dynamic-selector{display:block;font-size:43px;margin-left: margin-bottom:30px;}.bottom-layout.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;}.MAIN.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;height:100%;-webkit-flex:3;-ms-flex:3;flex:3;}.SPECS.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;height:100%;-webkit-flex:1;-ms-flex:1;flex:1;}.contact.__jsx-style-dynamic-selector{font-size:14px;margin:9px 0 20px 15px;}.subsection.__jsx-style-dynamic-selector{padding:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9SZXN1bWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUpTLEFBR2dELEFBR0EsQUFHeEIsQUFJRSxBQUlBLEFBU0MsQUFNRCxBQUlBLEFBT0EsQUFPRSxBQUlGLFdBNUNFLEVBNkNqQixDQTVCaUIsQ0F3QlEsV0F4Q3pCLEdBa0JxQixNQXpCckIsQUFHQSxHQTZDQSx1QkF0QkEsYUFoQnlCLEFBSUQsQUFlVixBQUlVLEFBT0EsWUFWeEIsa0VBZm9ELEFBbUJyQixBQU9BLHFCQTlCL0IsNkJBS3VELHFEQUN4QyxhQUNELE9BaUJBLEFBT0EsS0F2QkksT0FpQlQsQUFPQSxTQXZCVCx3QkFpQkEsQUFPQSIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL2NvbXBvbmVudHMvUmVzdW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHJlc3VtZSBmcm9tIFwiLi4vZGF0YWJhc2UvcmVzdW1lXCI7XG5cbmNvbnN0IFJlc3VtZSA9ICgpID0+IHtcbiAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhyZXN1bWUpO1xuICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xuXG4gIGNvbnN0IHJlbmRlckV4cGVyaWVuY2UgPSAoZXhwVHlwZSkgPT4gKFxuICAgIDw+XG4gICAgICA8aDM+e2V4cFR5cGUudG9VcHBlckNhc2UoKX0gRVhQRVJJRU5DRTwvaDM+XG4gICAgICB7dmFsdWVzWzNdW2V4cFR5cGVdLm1hcCgoZXhwKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uRXhpc3QgPSBleHAubG9jYXRpb24gPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgICwgPHNwYW4+e2V4cC5sb2NhdGlvbn08L3NwYW4+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgXCJcIlxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdFwiPlxuICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICB7ZXhwLnRpdGxlfVxuICAgICAgICAgICAgICB7bG9jYXRpb25FeGlzdH1cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cD57ZXhwLnN1YlRpdGxlfTwvcD5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge2V4cC5kZXNjcmlwdGlvbi5tYXAoKGRlc2MpID0+IChcbiAgICAgICAgICAgICAgICA8bGk+e2Rlc2N9PC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9qZWN0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tbGF5b3V0XCI+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiTUFJTiBsZWZ0LWNvbHVtblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+XG4gICAgICAgICAgICAgIDxoMT57dmFsdWVzWzBdfTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmVzc2lvbmFsLWV4cCBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgIHtyZW5kZXJFeHBlcmllbmNlKFwicHJvZmVzc2lvbmFsXCIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtZXhwIHN1YnNlY3Rpb25cIj5cbiAgICAgICAgICAgICAge3JlbmRlckV4cGVyaWVuY2UoXCJwcm9qZWN0XCIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkdWNhdGlvbiBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxoMz5FRFVDQVRJT048L2gzPlxuICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAge3ZhbHVlc1syXS5zY2hvb2wgKyBcIiBcIn1cbiAgICAgICAgICAgICAgICA8c3Bhbj57dmFsdWVzWzJdLmxvY2F0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPHA+e3ZhbHVlc1syXS5zdWJUaXRsZX08L3A+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dmFsdWVzWzJdLmRlc2NyaXB0aW9uLm1hcCgoZGVzYykgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpPntkZXNjfTwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiIFNQRUNTIHJpZ2h0LWNvbHVtblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1pc0xpbmtcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICB7dmFsdWVzWzFdLmxpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bGlua30+e2xpbmt9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICB7dmFsdWVzWzFdLm5vdExpbmtzLm1hcCgobm90TGluaykgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8cD57bm90TGlua308L3A+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWNobm9sb2d5IHN1YnNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPGgzPlRFQ0hOT0xPR1k8L2gzPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3ZhbHVlc1s0XS5tYXAoKHRlY2gpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaT57dGVjaH08L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbm9ycyBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxoMz5IT05PUlM8L2gzPlxuICAgICAgICAgICAgICA8cD57dmFsdWVzWzVdLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgPHA+e3ZhbHVlc1s1XS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZ3VhZ2VzIHN1YnNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPGgzPkxBTkdVQUdFUzwvaDM+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dmFsdWVzWzZdLm1hcCgobGFuZykgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpPntsYW5nfTwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50ZXJlc3RzIHN1YnNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPGgzPklOVEVSRVNUUzwvaDM+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dmFsdWVzWzddLm1hcCgoaW50KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGk+e2ludH08L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvYmJpZXMgc3Vic2VjdGlvblwiPlxuICAgICAgICAgICAgICA8aDM+SE9CQklFUzwvaDM+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dmFsdWVzWzhdLm1hcCgoaG9iYnkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaT57aG9iYnl9PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgY29sb3I6ICR7dmFsdWVzWzldLmhpZ2hsaWdodH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICR7dmFsdWVzWzldLmhpZ2hsaWdodH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBib3JkZXItdG9wOiA3cHggc29saWQgJHt2YWx1ZXNbOV0uaGlnaGxpZ2h0fTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgICAgcGFkZGluZzogNzBweDtcbiAgICAgICAgICAgIHdpZHRoOiA5OTBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0M3B4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJvdHRvbS1sYXlvdXQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLk1BSU4ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGZsZXg6IDM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5TUEVDUyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luOiA5cHggMCAyMHB4IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdWJzZWN0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VtZTtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Resume.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Resume);

/***/ })

})
//# sourceMappingURL=resume.js.989d9e59659a6f05a8e4.hot-update.js.map