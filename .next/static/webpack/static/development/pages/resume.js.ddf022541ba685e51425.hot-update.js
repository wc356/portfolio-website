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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3137500292", [values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }
    }, expType.toUpperCase(), " EXPERIENCE"), values[3][expType].map(function (exp) {
      return __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3137500292", [values[9].highlight]]]) + " " + "project",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }
      }, __jsx("h2", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3137500292", [values[9].highlight]]]) + " " + "project-header",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }
      }, exp.title, locationExist(exp), renderGithubLink(exp, expType)), __jsx("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3137500292", [values[9].highlight]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }
      }, exp.subTitle), __jsx("ul", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3137500292", [values[9].highlight]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }
      }, exp.description.map(function (desc) {
        return __jsx("li", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3137500292", [values[9].highlight]]]),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 17
          }
        }, desc);
      })));
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3137500292",
      dynamic: [values[9].highlight],
      __self: _this
    }, "h3.__jsx-style-dynamic-selector{color:".concat(values[9].highlight, ";}h2.__jsx-style-dynamic-selector{font-size:20px;}ul.__jsx-style-dynamic-selector{margin-left:15px;}li.__jsx-style-dynamic-selector{padding:5px;}span.__jsx-style-dynamic-selector{font-size:17px;color:gray;}.project.__jsx-style-dynamic-selector{margin:15px;}.project-header.__jsx-style-dynamic-selector{display:inline-block;white-space:nowrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9SZXN1bWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURTLEFBR2dELEFBR3BCLEFBR0UsQUFHTCxBQUdHLEFBSUgsQUFHUyxZQVR2QixBQU9BLEdBYkEsQUFTYSxFQU5iLElBYXFCLEtBTnJCLFNBYkEsS0FvQkEiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9jb21wb25lbnRzL1Jlc3VtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCByZXN1bWUgZnJvbSBcIi4uL2RhdGFiYXNlL3Jlc3VtZVwiO1xuXG5jb25zdCBSZXN1bWUgPSAoKSA9PiB7XG4gIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMocmVzdW1lKTtcbiAgY29uc29sZS5sb2codmFsdWVzKTtcblxuICBjb25zdCBsb2NhdGlvbkV4aXN0ID0gKGV4cCkgPT5cbiAgICBleHAubG9jYXRpb24gPyAoXG4gICAgICA8PlxuICAgICAgICAsIDxzcGFuPntleHAubG9jYXRpb259PC9zcGFuPlxuICAgICAgPC8+XG4gICAgKSA6IChcbiAgICAgIFwiXCJcbiAgICApO1xuXG4gIGNvbnN0IHJlbmRlckdpdGh1YkxpbmsgPSAoZXhwLCBleHBUeXBlKSA9PiB7XG4gICAgc3dpdGNoIChleHBUeXBlKSB7XG4gICAgICBjYXNlIFwicHJvZmVzc2lvbmFsXCI6XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgY2FzZSBcInByb2plY3RcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8aDM+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAtIDxhIGhyZWY9e2V4cC5saW5rWzFdfT57ZXhwLmxpbmtbMF19PC9hPlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlckV4cGVyaWVuY2UgPSAoZXhwVHlwZSkgPT4gKFxuICAgIDw+XG4gICAgICA8aDM+e2V4cFR5cGUudG9VcHBlckNhc2UoKX0gRVhQRVJJRU5DRTwvaDM+XG4gICAgICB7dmFsdWVzWzNdW2V4cFR5cGVdLm1hcCgoZXhwKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHJvamVjdC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAge2V4cC50aXRsZX1cbiAgICAgICAgICAgICAge2xvY2F0aW9uRXhpc3QoZXhwKX1cbiAgICAgICAgICAgICAge3JlbmRlckdpdGh1YkxpbmsoZXhwLCBleHBUeXBlKX1cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cD57ZXhwLnN1YlRpdGxlfTwvcD5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge2V4cC5kZXNjcmlwdGlvbi5tYXAoKGRlc2MpID0+IChcbiAgICAgICAgICAgICAgICA8bGk+e2Rlc2N9PC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9qZWN0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2plY3QtaGVhZGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLWxheW91dFwiPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIk1BSU4gbGVmdC1jb2x1bW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPlxuICAgICAgICAgICAgICA8aDE+e3ZhbHVlc1swXX08L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2Zlc3Npb25hbC1leHAgc3Vic2VjdGlvblwiPlxuICAgICAgICAgICAgICB7cmVuZGVyRXhwZXJpZW5jZShcInByb2Zlc3Npb25hbFwiKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWV4cCBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgIHtyZW5kZXJFeHBlcmllbmNlKFwicHJvamVjdFwiKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZHVjYXRpb24gc3Vic2VjdGlvblwiPlxuICAgICAgICAgICAgICA8aDM+RURVQ0FUSU9OPC9oMz5cbiAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgIHt2YWx1ZXNbMl0uc2Nob29sICsgXCIgXCJ9XG4gICAgICAgICAgICAgICAgPHNwYW4+e3ZhbHVlc1syXS5sb2NhdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxwPnt2YWx1ZXNbMl0uc3ViVGl0bGV9PC9wPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3ZhbHVlc1syXS5kZXNjcmlwdGlvbi5tYXAoKGRlc2MpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaT57ZGVzY308L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIiBTUEVDUyByaWdodC1jb2x1bW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaXNMaW5rXCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAge3ZhbHVlc1sxXS5saW5rcy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmt9PntsaW5rfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAge3ZhbHVlc1sxXS5ub3RMaW5rcy5tYXAoKG5vdExpbmspID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHA+e25vdExpbmt9PC9wPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaG5vbG9neSBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxoMz5URUNITk9MT0dZPC9oMz5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt2YWx1ZXNbNF0ubWFwKCh0ZWNoKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGk+e3RlY2h9PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob25vcnMgc3Vic2VjdGlvblwiPlxuICAgICAgICAgICAgICA8aDM+SE9OT1JTPC9oMz5cbiAgICAgICAgICAgICAgPHA+e3ZhbHVlc1s1XS50aXRsZX08L3A+XG4gICAgICAgICAgICAgIDxwPnt2YWx1ZXNbNV0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmd1YWdlcyBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxoMz5MQU5HVUFHRVM8L2gzPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3ZhbHVlc1s2XS5tYXAoKGxhbmcpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaT57bGFuZ308L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludGVyZXN0cyBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxoMz5JTlRFUkVTVFM8L2gzPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3ZhbHVlc1s3XS5tYXAoKGludCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpPntpbnR9PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob2JiaWVzIHN1YnNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPGgzPkhPQkJJRVM8L2gzPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3ZhbHVlc1s4XS5tYXAoKGhvYmJ5KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGk+e2hvYmJ5fTwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGFnZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICR7dmFsdWVzWzldLmhpZ2hsaWdodH07XG4gICAgICAgICAgICBwYWRkaW5nOiA3MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDk5MHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDQzcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJvdHRvbS1sYXlvdXQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLk1BSU4ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGZsZXg6IDM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5TUEVDUyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luOiA5cHggMCAyMHB4IDE1cHg7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3Vic2VjdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN1bWU7XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Resume.js */")));
  };

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "background",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "bottom-layout",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "MAIN left-column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, values[0])), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "professional-exp subsection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, renderExperience("professional")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "project-exp subsection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, renderExperience("project")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "education subsection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }, "EDUCATION"), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, values[2].school + " ", __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, values[2].location)), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }, values[2].subTitle), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, values[2].description.map(function (desc) {
    return __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 19
      }
    }, desc);
  })))), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + " SPECS right-column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "contact-isLink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, values[1].links.map(function (link) {
    return __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: link,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 23
      }
    }, link));
  }), values[1].notLinks.map(function (notLink) {
    return __jsx("p", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 21
      }
    }, notLink);
  })))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "technology subsection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, "TECHNOLOGY"), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 15
    }
  }, values[4].map(function (tech) {
    return __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 19
      }
    }, tech);
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "honors subsection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, "HONORS"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }, values[5].title), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }, values[5].description)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "languages subsection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  }, "LANGUAGES"), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 15
    }
  }, values[6].map(function (lang) {
    return __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 19
      }
    }, lang);
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "interests subsection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }, "INTERESTS"), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 15
    }
  }, values[7].map(function (_int) {
    return __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 19
      }
    }, _int);
  }))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]) + " " + "hobbies subsection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 15
    }
  }, "HOBBIES"), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  }, values[8].map(function (hobby) {
    return __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3743133293", [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight]]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 19
      }
    }, hobby);
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3743133293",
    dynamic: [values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight],
    __self: _this
  }, "h3.__jsx-style-dynamic-selector{color:".concat(values[9].highlight, ";}a.__jsx-style-dynamic-selector{color:").concat(values[9].highlight, ";-webkit-text-decoration:none;text-decoration:none;font-weight:500;}span.__jsx-style-dynamic-selector{color:gray;font-size:20px;}.background.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.page.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-top:7px solid ").concat(values[9].highlight, ";border-bottom:7px solid ").concat(values[9].highlight, ";padding:70px;width:990px;line-height:1.8;}.name.__jsx-style-dynamic-selector{display:block;font-size:43px;margin-left: margin-bottom:30px;white-space:nowrap;}.bottom-layout.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;}.MAIN.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;height:100%;-webkit-flex:3;-ms-flex:3;flex:3;}.SPECS.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;height:100%;-webkit-flex:1;-ms-flex:1;flex:1;}.contact.__jsx-style-dynamic-selector{font-size:14px;margin:9px 0 20px 15px;white-space:nowrap;}.subsection.__jsx-style-dynamic-selector{padding:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9SZXN1bWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0tTLEFBR2dELEFBR0EsQUFLeEIsQUFJRSxBQUlBLEFBU0MsQUFPRCxBQUlBLEFBT0EsQUFPRSxBQUtGLFdBOUNFLEVBK0NqQixDQTlCaUIsQ0F5QlEsV0F6Q3pCLEdBa0JxQixNQTNCckIsQUFHdUIsR0FnREYsbUJBQ3JCLElBeEJxQixhQWhCSSxBQUlELEFBZ0JWLEFBSVUsQUFPQSxNQWR4QixLQXpCa0IsQ0E2QmxCLGVBNUJBLG1EQVlvRCxBQW9CckIsQUFPQSxxQkEvQi9CLDZCQUt1RCxxREFDeEMsYUFDRCxPQWtCQSxBQU9BLEtBeEJJLE9Ba0JULEFBT0EsU0F4QlQsd0JBa0JBLEFBT0EiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9jb21wb25lbnRzL1Jlc3VtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCByZXN1bWUgZnJvbSBcIi4uL2RhdGFiYXNlL3Jlc3VtZVwiO1xuXG5jb25zdCBSZXN1bWUgPSAoKSA9PiB7XG4gIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMocmVzdW1lKTtcbiAgY29uc29sZS5sb2codmFsdWVzKTtcblxuICBjb25zdCBsb2NhdGlvbkV4aXN0ID0gKGV4cCkgPT5cbiAgICBleHAubG9jYXRpb24gPyAoXG4gICAgICA8PlxuICAgICAgICAsIDxzcGFuPntleHAubG9jYXRpb259PC9zcGFuPlxuICAgICAgPC8+XG4gICAgKSA6IChcbiAgICAgIFwiXCJcbiAgICApO1xuXG4gIGNvbnN0IHJlbmRlckdpdGh1YkxpbmsgPSAoZXhwLCBleHBUeXBlKSA9PiB7XG4gICAgc3dpdGNoIChleHBUeXBlKSB7XG4gICAgICBjYXNlIFwicHJvZmVzc2lvbmFsXCI6XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgY2FzZSBcInByb2plY3RcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8aDM+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAtIDxhIGhyZWY9e2V4cC5saW5rWzFdfT57ZXhwLmxpbmtbMF19PC9hPlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlckV4cGVyaWVuY2UgPSAoZXhwVHlwZSkgPT4gKFxuICAgIDw+XG4gICAgICA8aDM+e2V4cFR5cGUudG9VcHBlckNhc2UoKX0gRVhQRVJJRU5DRTwvaDM+XG4gICAgICB7dmFsdWVzWzNdW2V4cFR5cGVdLm1hcCgoZXhwKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHJvamVjdC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAge2V4cC50aXRsZX1cbiAgICAgICAgICAgICAge2xvY2F0aW9uRXhpc3QoZXhwKX1cbiAgICAgICAgICAgICAge3JlbmRlckdpdGh1YkxpbmsoZXhwLCBleHBUeXBlKX1cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cD57ZXhwLnN1YlRpdGxlfTwvcD5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge2V4cC5kZXNjcmlwdGlvbi5tYXAoKGRlc2MpID0+IChcbiAgICAgICAgICAgICAgICA8bGk+e2Rlc2N9PC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9qZWN0IHtcbiAgICAgICAgICAgIG1hcmdpbjogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2plY3QtaGVhZGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLWxheW91dFwiPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIk1BSU4gbGVmdC1jb2x1bW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPlxuICAgICAgICAgICAgICA8aDE+e3ZhbHVlc1swXX08L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2Zlc3Npb25hbC1leHAgc3Vic2VjdGlvblwiPlxuICAgICAgICAgICAgICB7cmVuZGVyRXhwZXJpZW5jZShcInByb2Zlc3Npb25hbFwiKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWV4cCBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgIHtyZW5kZXJFeHBlcmllbmNlKFwicHJvamVjdFwiKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZHVjYXRpb24gc3Vic2VjdGlvblwiPlxuICAgICAgICAgICAgICA8aDM+RURVQ0FUSU9OPC9oMz5cbiAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgIHt2YWx1ZXNbMl0uc2Nob29sICsgXCIgXCJ9XG4gICAgICAgICAgICAgICAgPHNwYW4+e3ZhbHVlc1syXS5sb2NhdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxwPnt2YWx1ZXNbMl0uc3ViVGl0bGV9PC9wPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3ZhbHVlc1syXS5kZXNjcmlwdGlvbi5tYXAoKGRlc2MpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaT57ZGVzY308L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIiBTUEVDUyByaWdodC1jb2x1bW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaXNMaW5rXCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAge3ZhbHVlc1sxXS5saW5rcy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmt9PntsaW5rfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAge3ZhbHVlc1sxXS5ub3RMaW5rcy5tYXAoKG5vdExpbmspID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHA+e25vdExpbmt9PC9wPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaG5vbG9neSBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxoMz5URUNITk9MT0dZPC9oMz5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt2YWx1ZXNbNF0ubWFwKCh0ZWNoKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGk+e3RlY2h9PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob25vcnMgc3Vic2VjdGlvblwiPlxuICAgICAgICAgICAgICA8aDM+SE9OT1JTPC9oMz5cbiAgICAgICAgICAgICAgPHA+e3ZhbHVlc1s1XS50aXRsZX08L3A+XG4gICAgICAgICAgICAgIDxwPnt2YWx1ZXNbNV0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmd1YWdlcyBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxoMz5MQU5HVUFHRVM8L2gzPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3ZhbHVlc1s2XS5tYXAoKGxhbmcpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaT57bGFuZ308L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludGVyZXN0cyBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxoMz5JTlRFUkVTVFM8L2gzPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3ZhbHVlc1s3XS5tYXAoKGludCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpPntpbnR9PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob2JiaWVzIHN1YnNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPGgzPkhPQkJJRVM8L2gzPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3ZhbHVlc1s4XS5tYXAoKGhvYmJ5KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGk+e2hvYmJ5fTwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGFnZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICR7dmFsdWVzWzldLmhpZ2hsaWdodH07XG4gICAgICAgICAgICBwYWRkaW5nOiA3MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDk5MHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDQzcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJvdHRvbS1sYXlvdXQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLk1BSU4ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGZsZXg6IDM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5TUEVDUyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luOiA5cHggMCAyMHB4IDE1cHg7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3Vic2VjdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN1bWU7XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Resume.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Resume);

/***/ })

})
//# sourceMappingURL=resume.js.ddf022541ba685e51425.hot-update.js.map