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

  var locationExist = function locationExist(exp) {
    return exp.location ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, ", ", __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    }, exp.location)) : "";
  };

  var renderGithubLink = function renderGithubLink(exp, expType) {
    switch (expType) {
      case "professional":
        return "";

      case "project":
        return __jsx("h3", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 11
          }
        }, " ", "- ", __jsx("a", {
          href: exp.link[1],
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 15
          }
        }, exp.link[0]));
    }
  };

  var renderExperience = function renderExperience(expType) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3796647623", [values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }
    }, expType.toUpperCase(), " EXPERIENCE"), values[3][expType].map(function (exp) {
      return __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3796647623", [values[9].highlight]]]) + " " + "project",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }
      }, __jsx("h2", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3796647623", [values[9].highlight]]]) + " " + "project-header",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }
      }, exp.title, locationExist(exp), renderGithubLink(exp, expType)), __jsx("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3796647623", [values[9].highlight]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }
      }, exp.subTitle), __jsx("ul", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3796647623", [values[9].highlight]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }
      }, exp.description.map(function (desc) {
        return __jsx("li", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3796647623", [values[9].highlight]]]),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 17
          }
        }, desc);
      })));
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3796647623",
      dynamic: [values[9].highlight],
      __self: _this
    }, "h3.__jsx-style-dynamic-selector{color:".concat(values[9].highlight, ";}h2.__jsx-style-dynamic-selector{font-size:20px;}ul.__jsx-style-dynamic-selector{margin-left:15px;}li.__jsx-style-dynamic-selector{padding:5px;}span.__jsx-style-dynamic-selector{font-size:17px;color:gray;}.project.__jsx-style-dynamic-selector{margin:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9SZXN1bWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURTLEFBR2dELEFBR3BCLEFBR0UsQUFHTCxBQUdHLEFBSUgsWUFOZCxBQU9BLEdBYkEsQUFTYSxFQU5iLFNBT0EsU0FiQSIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL2NvbXBvbmVudHMvUmVzdW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHJlc3VtZSBmcm9tIFwiLi4vZGF0YWJhc2UvcmVzdW1lXCI7XG5cbmNvbnN0IFJlc3VtZSA9ICgpID0+IHtcbiAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhyZXN1bWUpO1xuICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xuXG4gIGNvbnN0IGxvY2F0aW9uRXhpc3QgPSAoZXhwKSA9PlxuICAgIGV4cC5sb2NhdGlvbiA/IChcbiAgICAgIDw+XG4gICAgICAgICwgPHNwYW4+e2V4cC5sb2NhdGlvbn08L3NwYW4+XG4gICAgICA8Lz5cbiAgICApIDogKFxuICAgICAgXCJcIlxuICAgICk7XG5cbiAgY29uc3QgcmVuZGVyR2l0aHViTGluayA9IChleHAsIGV4cFR5cGUpID0+IHtcbiAgICBzd2l0Y2ggKGV4cFR5cGUpIHtcbiAgICAgIGNhc2UgXCJwcm9mZXNzaW9uYWxcIjpcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICBjYXNlIFwicHJvamVjdFwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIC0gPGEgaHJlZj17ZXhwLmxpbmtbMV19PntleHAubGlua1swXX08L2E+XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyRXhwZXJpZW5jZSA9IChleHBUeXBlKSA9PiAoXG4gICAgPD5cbiAgICAgIDxoMz57ZXhwVHlwZS50b1VwcGVyQ2FzZSgpfSBFWFBFUklFTkNFPC9oMz5cbiAgICAgIHt2YWx1ZXNbM11bZXhwVHlwZV0ubWFwKChleHApID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwcm9qZWN0LWhlYWRlclwiPlxuICAgICAgICAgICAgICB7ZXhwLnRpdGxlfVxuICAgICAgICAgICAgICB7bG9jYXRpb25FeGlzdChleHApfVxuICAgICAgICAgICAgICB7cmVuZGVyR2l0aHViTGluayhleHAsIGV4cFR5cGUpfVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwPntleHAuc3ViVGl0bGV9PC9wPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7ZXhwLmRlc2NyaXB0aW9uLm1hcCgoZGVzYykgPT4gKFxuICAgICAgICAgICAgICAgIDxsaT57ZGVzY308L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgY29sb3I6ICR7dmFsdWVzWzldLmhpZ2hsaWdodH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2plY3Qge1xuICAgICAgICAgICAgbWFyZ2luOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS1sYXlvdXRcIj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJNQUlOIGxlZnQtY29sdW1uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgPGgxPnt2YWx1ZXNbMF19PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9mZXNzaW9uYWwtZXhwIHN1YnNlY3Rpb25cIj5cbiAgICAgICAgICAgICAge3JlbmRlckV4cGVyaWVuY2UoXCJwcm9mZXNzaW9uYWxcIil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1leHAgc3Vic2VjdGlvblwiPlxuICAgICAgICAgICAgICB7cmVuZGVyRXhwZXJpZW5jZShcInByb2plY3RcIil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWR1Y2F0aW9uIHN1YnNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPGgzPkVEVUNBVElPTjwvaDM+XG4gICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICB7dmFsdWVzWzJdLnNjaG9vbCArIFwiIFwifVxuICAgICAgICAgICAgICAgIDxzcGFuPnt2YWx1ZXNbMl0ubG9jYXRpb259PC9zcGFuPlxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8cD57dmFsdWVzWzJdLnN1YlRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt2YWx1ZXNbMl0uZGVzY3JpcHRpb24ubWFwKChkZXNjKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGk+e2Rlc2N9PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCIgU1BFQ1MgcmlnaHQtY29sdW1uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWlzTGlua1wiPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIHt2YWx1ZXNbMV0ubGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtsaW5rfT57bGlua308L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIHt2YWx1ZXNbMV0ubm90TGlua3MubWFwKChub3RMaW5rKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxwPntub3RMaW5rfTwvcD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2hub2xvZ3kgc3Vic2VjdGlvblwiPlxuICAgICAgICAgICAgICA8aDM+VEVDSE5PTE9HWTwvaDM+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dmFsdWVzWzRdLm1hcCgodGVjaCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpPnt0ZWNofTwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9ub3JzIHN1YnNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPGgzPkhPTk9SUzwvaDM+XG4gICAgICAgICAgICAgIDxwPnt2YWx1ZXNbNV0udGl0bGV9PC9wPlxuICAgICAgICAgICAgICA8cD57dmFsdWVzWzVdLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5ndWFnZXMgc3Vic2VjdGlvblwiPlxuICAgICAgICAgICAgICA8aDM+TEFOR1VBR0VTPC9oMz5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt2YWx1ZXNbNl0ubWFwKChsYW5nKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGk+e2xhbmd9PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRlcmVzdHMgc3Vic2VjdGlvblwiPlxuICAgICAgICAgICAgICA8aDM+SU5URVJFU1RTPC9oMz5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt2YWx1ZXNbN10ubWFwKChpbnQpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaT57aW50fTwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9iYmllcyBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxoMz5IT0JCSUVTPC9oMz5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt2YWx1ZXNbOF0ubWFwKChob2JieSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpPntob2JieX08L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBjb2xvcjogJHt2YWx1ZXNbOV0uaGlnaGxpZ2h0fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogJHt2YWx1ZXNbOV0uaGlnaGxpZ2h0fTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBib3JkZXItdG9wOiA3cHggc29saWQgJHt2YWx1ZXNbOV0uaGlnaGxpZ2h0fTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgICAgcGFkZGluZzogNzBweDtcbiAgICAgICAgICAgIHdpZHRoOiA5OTBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0M3B4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ib3R0b20tbGF5b3V0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5NQUlOIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBmbGV4OiAzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuU1BFQ1Mge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWN0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbjogOXB4IDAgMjBweCAxNXB4O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1YnNlY3Rpb24ge1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdW1lO1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Resume.js */")));
  };

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "background",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "bottom-layout",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "MAIN left-column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, values[0])), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "professional-exp subsection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, renderExperience("professional")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "project-exp subsection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, renderExperience("project")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "education subsection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, "EDUCATION"), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, values[2].school + " ", __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, values[2].location)), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, values[2].subTitle), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }, values[2].description.map(function (desc) {
    return __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 19
      }
    }, desc);
  })))), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + " SPECS right-column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "contact-isLink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, values[1].links.map(function (link) {
    return __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: link,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 23
      }
    }, link));
  }), values[1].notLinks.map(function (notLink) {
    return __jsx("p", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 21
      }
    }, notLink);
  })))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "technology subsection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, "TECHNOLOGY"), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }, values[4].map(function (tech) {
    return __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 19
      }
    }, tech);
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "honors subsection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  }, "HONORS"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }, values[5].title), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }, values[5].description)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "languages subsection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }, "LANGUAGES"), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }, values[6].map(function (lang) {
    return __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 19
      }
    }, lang);
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "interests subsection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }, "INTERESTS"), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }, values[7].map(function (_int) {
    return __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 19
      }
    }, _int);
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "hobbies subsection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 15
    }
  }, "HOBBIES"), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 15
    }
  }, values[8].map(function (hobby) {
    return __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 19
      }
    }, hobby);
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3743133293",
    dynamic: [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight],
    __self: _this
  }, "h3.__jsx-style-dynamic-selector{color:".concat(values[9].highlight, ";}a.__jsx-style-dynamic-selector{color:").concat(values[9].highlight, ";-webkit-text-decoration:none;text-decoration:none;font-weight:500;}span.__jsx-style-dynamic-selector{color:gray;font-size:20px;}.background.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.page.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-top:7px solid ").concat(values[9].highlight, ";border-bottom:7px solid ").concat(values[9].highlight, ";padding:70px;width:990px;line-height:1.8;}.name.__jsx-style-dynamic-selector{display:block;font-size:43px;margin-left: margin-bottom:30px;white-space:nowrap;}.bottom-layout.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;}.MAIN.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;height:100%;-webkit-flex:3;-ms-flex:3;flex:3;}.SPECS.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;height:100%;-webkit-flex:1;-ms-flex:1;flex:1;}.contact.__jsx-style-dynamic-selector{font-size:14px;margin:9px 0 20px 15px;white-space:nowrap;}.subsection.__jsx-style-dynamic-selector{padding:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9SZXN1bWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0tTLEFBR2dELEFBR0EsQUFLeEIsQUFJRSxBQUlBLEFBU0MsQUFPRCxBQUlBLEFBT0EsQUFPRSxBQUtGLFdBOUNFLEVBK0NqQixDQTlCaUIsQ0F5QlEsV0F6Q3pCLEdBa0JxQixNQTNCckIsQUFHdUIsR0FnREYsbUJBQ3JCLElBeEJxQixhQWhCSSxBQUlELEFBZ0JWLEFBSVUsQUFPQSxNQWR4QixLQXpCa0IsQ0E2QmxCLGVBNUJBLG1EQVlvRCxBQW9CckIsQUFPQSxxQkEvQi9CLDZCQUt1RCxxREFDeEMsYUFDRCxPQWtCQSxBQU9BLEtBeEJJLE9Ba0JULEFBT0EsU0F4QlQsd0JBa0JBLEFBT0EiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9jb21wb25lbnRzL1Jlc3VtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCByZXN1bWUgZnJvbSBcIi4uL2RhdGFiYXNlL3Jlc3VtZVwiO1xuXG5jb25zdCBSZXN1bWUgPSAoKSA9PiB7XG4gIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMocmVzdW1lKTtcbiAgY29uc29sZS5sb2codmFsdWVzKTtcblxuICBjb25zdCBsb2NhdGlvbkV4aXN0ID0gKGV4cCkgPT5cbiAgICBleHAubG9jYXRpb24gPyAoXG4gICAgICA8PlxuICAgICAgICAsIDxzcGFuPntleHAubG9jYXRpb259PC9zcGFuPlxuICAgICAgPC8+XG4gICAgKSA6IChcbiAgICAgIFwiXCJcbiAgICApO1xuXG4gIGNvbnN0IHJlbmRlckdpdGh1YkxpbmsgPSAoZXhwLCBleHBUeXBlKSA9PiB7XG4gICAgc3dpdGNoIChleHBUeXBlKSB7XG4gICAgICBjYXNlIFwicHJvZmVzc2lvbmFsXCI6XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgY2FzZSBcInByb2plY3RcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8aDM+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAtIDxhIGhyZWY9e2V4cC5saW5rWzFdfT57ZXhwLmxpbmtbMF19PC9hPlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlckV4cGVyaWVuY2UgPSAoZXhwVHlwZSkgPT4gKFxuICAgIDw+XG4gICAgICA8aDM+e2V4cFR5cGUudG9VcHBlckNhc2UoKX0gRVhQRVJJRU5DRTwvaDM+XG4gICAgICB7dmFsdWVzWzNdW2V4cFR5cGVdLm1hcCgoZXhwKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHJvamVjdC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAge2V4cC50aXRsZX1cbiAgICAgICAgICAgICAge2xvY2F0aW9uRXhpc3QoZXhwKX1cbiAgICAgICAgICAgICAge3JlbmRlckdpdGh1YkxpbmsoZXhwLCBleHBUeXBlKX1cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cD57ZXhwLnN1YlRpdGxlfTwvcD5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge2V4cC5kZXNjcmlwdGlvbi5tYXAoKGRlc2MpID0+IChcbiAgICAgICAgICAgICAgICA8bGk+e2Rlc2N9PC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9qZWN0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tbGF5b3V0XCI+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiTUFJTiBsZWZ0LWNvbHVtblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+XG4gICAgICAgICAgICAgIDxoMT57dmFsdWVzWzBdfTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmVzc2lvbmFsLWV4cCBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgIHtyZW5kZXJFeHBlcmllbmNlKFwicHJvZmVzc2lvbmFsXCIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtZXhwIHN1YnNlY3Rpb25cIj5cbiAgICAgICAgICAgICAge3JlbmRlckV4cGVyaWVuY2UoXCJwcm9qZWN0XCIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkdWNhdGlvbiBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxoMz5FRFVDQVRJT048L2gzPlxuICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAge3ZhbHVlc1syXS5zY2hvb2wgKyBcIiBcIn1cbiAgICAgICAgICAgICAgICA8c3Bhbj57dmFsdWVzWzJdLmxvY2F0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPHA+e3ZhbHVlc1syXS5zdWJUaXRsZX08L3A+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dmFsdWVzWzJdLmRlc2NyaXB0aW9uLm1hcCgoZGVzYykgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpPntkZXNjfTwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiIFNQRUNTIHJpZ2h0LWNvbHVtblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1pc0xpbmtcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICB7dmFsdWVzWzFdLmxpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bGlua30+e2xpbmt9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICB7dmFsdWVzWzFdLm5vdExpbmtzLm1hcCgobm90TGluaykgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8cD57bm90TGlua308L3A+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWNobm9sb2d5IHN1YnNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPGgzPlRFQ0hOT0xPR1k8L2gzPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3ZhbHVlc1s0XS5tYXAoKHRlY2gpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaT57dGVjaH08L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbm9ycyBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxoMz5IT05PUlM8L2gzPlxuICAgICAgICAgICAgICA8cD57dmFsdWVzWzVdLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgPHA+e3ZhbHVlc1s1XS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZ3VhZ2VzIHN1YnNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPGgzPkxBTkdVQUdFUzwvaDM+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dmFsdWVzWzZdLm1hcCgobGFuZykgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpPntsYW5nfTwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50ZXJlc3RzIHN1YnNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPGgzPklOVEVSRVNUUzwvaDM+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dmFsdWVzWzddLm1hcCgoaW50KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGk+e2ludH08L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvYmJpZXMgc3Vic2VjdGlvblwiPlxuICAgICAgICAgICAgICA8aDM+SE9CQklFUzwvaDM+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dmFsdWVzWzhdLm1hcCgoaG9iYnkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaT57aG9iYnl9PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgY29sb3I6ICR7dmFsdWVzWzldLmhpZ2hsaWdodH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICR7dmFsdWVzWzldLmhpZ2hsaWdodH07XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wYWdlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICR7dmFsdWVzWzldLmhpZ2hsaWdodH07XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiA3cHggc29saWQgJHt2YWx1ZXNbOV0uaGlnaGxpZ2h0fTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDcwcHg7XG4gICAgICAgICAgICB3aWR0aDogOTkwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDNweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYm90dG9tLWxheW91dCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuTUFJTiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZmxleDogMztcbiAgICAgICAgICB9XG4gICAgICAgICAgLlNQRUNTIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDlweCAwIDIwcHggMTVweDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdWJzZWN0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VtZTtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Resume.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Resume);

/***/ })

})
//# sourceMappingURL=resume.js.b40d6b4ca3b46456f34d.hot-update.js.map