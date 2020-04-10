webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var _database_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../database/projects */ "./database/projects.js");
/* harmony import */ var _actions_projects_PostProj__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/projects/PostProj */ "./actions/projects/PostProj.js");
var _this = undefined,
    _jsxFileName = "/Users/WooChoi/Desktop/React.js/web-portfolio/components/Card.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Card = function Card(_ref) {
  var project = _ref.project,
      _ref$quote = _ref.quote,
      quote = _ref$quote === void 0 ? "QUOTE" : _ref$quote,
      _ref$description = _ref.description,
      description = _ref$description === void 0 ? "DESCRIPTION HERE" : _ref$description;

  var renderProject = function renderProject() {
    return _database_projects__WEBPACK_IMPORTED_MODULE_4__["projects"].map(function (proj) {
      if (proj.project === project) {
        return __jsx("ul", {
          key: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1902575919", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray]]]),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 11
          }
        }, proj.technology.map(function (tech) {
          return __jsx("li", {
            key: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1902575919", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray]]]),
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }
          }, tech);
        }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          id: "1902575919",
          dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray],
          __self: _this
        }, "ul.__jsx-style-dynamic-selector{display:inline-block;}li.__jsx-style-dynamic-selector{display:inline-block;background-color:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.black, ";box-shadow:13px 13px ").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.gray, ";border-radius:0 10px 0 10px;color:white;font-weight:400;margin-right:10px;margin-bottom:10px;padding:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9jb21wb25lbnRzL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJlLEFBR3dDLEFBR0EscUJBRnZCLEFBR2dELDhDQUNJLGtEQUN0Qiw0QkFDaEIsWUFDSSxnQkFDRSxrQkFDQyxtQkFDUCxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vZGF0YWJhc2UvcHJvamVjdHNcIjtcbmltcG9ydCB7IFBvc3RQcm9qTGluaywgUG9zdFByb2pJbWcgfSBmcm9tIFwiLi4vYWN0aW9ucy9wcm9qZWN0cy9Qb3N0UHJvalwiO1xuXG5jb25zdCBDYXJkID0gKHtcbiAgcHJvamVjdCxcbiAgcXVvdGUgPSBcIlFVT1RFXCIsXG4gIGRlc2NyaXB0aW9uID0gXCJERVNDUklQVElPTiBIRVJFXCIsXG59KSA9PiB7XG4gIGNvbnN0IHJlbmRlclByb2plY3QgPSAoKSA9PlxuICAgIHByb2plY3RzLm1hcCgocHJvaikgPT4ge1xuICAgICAgaWYgKHByb2oucHJvamVjdCA9PT0gcHJvamVjdCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDx1bCBrZXk9e3V1aWR2NCgpfT5cbiAgICAgICAgICAgIHtwcm9qLnRlY2hub2xvZ3kubWFwKCh0ZWNoKSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3V1aWR2NCgpfT57dGVjaH08L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYmxhY2t9O1xuICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMTNweCAxM3B4ICR7dGhlbWUuY29sb3JzLmdyYXl9O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDAgMTBweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICBjb25zdCByZW5kZXJMaW5rcyA9ICgpID0+XG4gICAgcHJvamVjdHMubWFwKChwcm9qKSA9PiB7XG4gICAgICBpZiAocHJvai5wcm9qZWN0ID09PSBwcm9qZWN0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiIGtleT17dXVpZHY0KCl9PlxuICAgICAgICAgICAge3Byb2oubGlua3MubWFwKChsaW5rKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChsaW5rLnRleHQgPT09IFwiR2l0SHViXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAga2V5PXt1dWlkdjQoKX1cbiAgICAgICAgICAgICAgICAgICAgaHJlZj17bGluay5zcmN9XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vZm9sbG93IG5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0MzguNTQ5IDQzOC41NDlcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPntsaW5rLnRleHR9PC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQwOS4xMzIsMTE0LjU3M2MtMTkuNjA4LTMzLjU5Ni00Ni4yMDUtNjAuMTk0LTc5Ljc5OC03OS44QzI5NS43MzYsMTUuMTY2LDI1OS4wNTcsNS4zNjUsMjE5LjI3MSw1LjM2NSBjLTM5Ljc4MSwwLTc2LjQ3Miw5LjgwNC0xMTAuMDYzLDI5LjQwOGMtMzMuNTk2LDE5LjYwNS02MC4xOTIsNDYuMjA0LTc5LjgsNzkuOEM5LjgwMywxNDguMTY4LDAsMTg0Ljg1NCwwLDIyNC42MyBjMCw0Ny43OCwxMy45NCw5MC43NDUsNDEuODI3LDEyOC45MDZjMjcuODg0LDM4LjE2NCw2My45MDYsNjQuNTcyLDEwOC4wNjMsNzkuMjI3YzUuMTQsMC45NTQsOC45NDUsMC4yODMsMTEuNDE5LTEuOTk2IGMyLjQ3NS0yLjI4MiwzLjcxMS01LjE0LDMuNzExLTguNTYyYzAtMC41NzEtMC4wNDktNS43MDgtMC4xNDQtMTUuNDE3Yy0wLjA5OC05LjcwOS0wLjE0NC0xOC4xNzktMC4xNDQtMjUuNDA2bC02LjU2NywxLjEzNiBjLTQuMTg3LDAuNzY3LTkuNDY5LDEuMDkyLTE1Ljg0NiwxYy02LjM3NC0wLjA4OS0xMi45OTEtMC43NTctMTkuODQyLTEuOTk5Yy02Ljg1NC0xLjIzMS0xMy4yMjktNC4wODYtMTkuMTMtOC41NTkgYy01Ljg5OC00LjQ3My0xMC4wODUtMTAuMzI4LTEyLjU2LTE3LjU1NmwtMi44NTUtNi41N2MtMS45MDMtNC4zNzQtNC44OTktOS4yMzMtOC45OTItMTQuNTU5IGMtNC4wOTMtNS4zMzEtOC4yMzItOC45NDUtMTIuNDE5LTEwLjg0OGwtMS45OTktMS40MzFjLTEuMzMyLTAuOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5Yy0xLjE0Mi0xLjMzMS0xLjk5Ny0yLjY2My0yLjU2OC0zLjk5NyBjLTAuNTcyLTEuMzM1LTAuMDk4LTIuNDMsMS40MjctMy4yODljMS41MjUtMC44NTksNC4yODEtMS4yNzYsOC4yOC0xLjI3Nmw1LjcwOCwwLjg1M2MzLjgwNywwLjc2Myw4LjUxNiwzLjA0MiwxNC4xMzMsNi44NTEgYzUuNjE0LDMuODA2LDEwLjIyOSw4Ljc1NCwxMy44NDYsMTQuODQyYzQuMzgsNy44MDYsOS42NTcsMTMuNzU0LDE1Ljg0NiwxNy44NDdjNi4xODQsNC4wOTMsMTIuNDE5LDYuMTM2LDE4LjY5OSw2LjEzNiBjNi4yOCwwLDExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjNjNC41NjUtMC45NTIsOC44NDgtMi4zODMsMTIuODQ3LTQuMjg1YzEuNzEzLTEyLjc1OCw2LjM3Ny0yMi41NTksMTMuOTg4LTI5LjQxIGMtMTAuODQ4LTEuMTQtMjAuNjAxLTIuODU3LTI5LjI2NC01LjE0Yy04LjY1OC0yLjI4Ni0xNy42MDUtNS45OTYtMjYuODM1LTExLjE0Yy05LjIzNS01LjEzNy0xNi44OTYtMTEuNTE2LTIyLjk4NS0xOS4xMjYgYy02LjA5LTcuNjE0LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc5Yy0zLjkwMS0xMi4zNzQtNS44NTItMjYuNjQ4LTUuODUyLTQyLjgyNmMwLTIzLjAzNSw3LjUyLTQyLjYzNywyMi41NTctNTguODE3IGMtNy4wNDQtMTcuMzE4LTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNGM1LjUyLTEuNzE1LDEzLjcwNi0wLjQyOCwyNC41NTQsMy44NTNjMTAuODUsNC4yODMsMTguNzk0LDcuOTUyLDIzLjg0LDEwLjk5NCBjNS4wNDYsMy4wNDEsOS4wODksNS42MTgsMTIuMTM1LDcuNzA4YzE3LjcwNS00Ljk0NywzNS45NzYtNy40MjEsNTQuODE4LTcuNDIxczM3LjExNywyLjQ3NCw1NC44MjMsNy40MjFsMTAuODQ5LTYuODQ5IGM3LjQxOS00LjU3LDE2LjE4LTguNzU4LDI2LjI2Mi0xMi41NjVjMTAuMDg4LTMuODA1LDE3LjgwMi00Ljg1MywyMy4xMzQtMy4xMzhjOC41NjIsMjEuNTA5LDkuMzI1LDQwLjkyMiwyLjI3OSw1OC4yNCBjMTUuMDM2LDE2LjE4LDIyLjU1OSwzNS43ODcsMjIuNTU5LDU4LjgxN2MwLDE2LjE3OC0xLjk1OCwzMC40OTctNS44NTMsNDIuOTY2Yy0zLjksMTIuNDcxLTguOTQxLDIyLjQ1Ny0xNS4xMjUsMjkuOTc5IGMtNi4xOTEsNy41MjEtMTMuOTAxLDEzLjg1LTIzLjEzMSwxOC45ODZjLTkuMjMyLDUuMTQtMTguMTgyLDguODUtMjYuODQsMTEuMTM2Yy04LjY2MiwyLjI4Ni0xOC40MTUsNC4wMDQtMjkuMjYzLDUuMTQ2IGM5Ljg5NCw4LjU2MiwxNC44NDIsMjIuMDc3LDE0Ljg0Miw0MC41Mzl2NjAuMjM3YzAsMy40MjIsMS4xOSw2LjI3OSwzLjU3Miw4LjU2MmMyLjM3OSwyLjI3OSw2LjEzNiwyLjk1LDExLjI3NiwxLjk5NSBjNDQuMTYzLTE0LjY1Myw4MC4xODUtNDEuMDYyLDEwOC4wNjgtNzkuMjI2YzI3Ljg4LTM4LjE2MSw0MS44MjUtODEuMTI2LDQxLjgyNS0xMjguOTA2IEM0MzguNTM2LDE4NC44NTEsNDI4LjcyOCwxNDguMTY4LDQwOS4xMzIsMTE0LjU3M3pcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxuICAgICAgICAgICAgICAgICAgICBrZXk9e3V1aWR2NCgpfVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtsaW5rLnNyY31cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9mb2xsb3cgbm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwPntsaW5rLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuOHJlbTtcbiAgICAgICAgICAgICAgICAgIGZpbGw6ICR7dGhlbWUuY29sb3JzLmxpbmt9O1xuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdmc6aG92ZXIsXG4gICAgICAgICAgICAgICAgLmJ0bjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICBmaWxsOiAke3RoZW1lLmNvbG9ycy5waW5rfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxpbmtzIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjRyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5idG4ge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMubGlua307XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjRyZW07XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJjYXJkcy1jb250YWluZXJcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZC0taW1nXCI+XG4gICAgICAgICAgPFBvc3RQcm9qSW1nIHByb2plY3Q9e3Byb2plY3R9IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZC0tdGV4dFwiPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgIDxQb3N0UHJvakxpbmsgcHJvamVjdD17cHJvamVjdH0gLz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJxdW90ZVwiPntxdW90ZX08L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAge3JlbmRlckxpbmtzKCl9XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRlY2gtd3JhcHBlclwiPntyZW5kZXJQcm9qZWN0KCl9PC9zZWN0aW9uPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5jYXJkcy1jb250YWluZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAzNXB4IDBweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZC0taW1nIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkLS1pbWc6aG92ZXIge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpIHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQtLXRleHQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmJsYWNrfTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4IDE1cHggMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5xdW90ZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjNyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGVjaC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/components/Card.js */")));
      }
    });
  };

  var renderLinks = function renderLinks() {
    return _database_projects__WEBPACK_IMPORTED_MODULE_4__["projects"].map(function (proj) {
      if (proj.project === project) {
        return __jsx("div", {
          key: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3310949508", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.pink, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.link]]]) + " " + "links",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 11
          }
        }, proj.links.map(function (link) {
          if (link.text === "GitHub") {
            return __jsx("a", {
              key: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
              href: link.src,
              target: "_blank",
              rel: "nofollow noopener noreferrer",
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3310949508", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.pink, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.link]]]),
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 19
              }
            }, __jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              role: "img",
              viewBox: "0 0 438.549 438.549",
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3310949508", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.pink, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.link]]]),
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 21
              }
            }, __jsx("title", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3310949508", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.pink, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.link]]]),
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 23
              }
            }, link.text), __jsx("path", {
              d: "M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z",
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3310949508", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.pink, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.link]]]),
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 23
              }
            })));
          } else {
            return __jsx("a", {
              key: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
              href: link.src,
              target: "_blank",
              rel: "nofollow noopener noreferrer",
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3310949508", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.pink, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.link]]]) + " " + "btn",
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 19
              }
            }, __jsx("p", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3310949508", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.pink, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.link]]]),
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 21
              }
            }, link.text));
          }
        }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          id: "3310949508",
          dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.pink, _styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.link],
          __self: _this
        }, "a.__jsx-style-dynamic-selector{display:block;margin:0 10px;}svg.__jsx-style-dynamic-selector{height:1.8rem;fill:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.link, ";-webkit-transition:all 0.15s;transition:all 0.15s;}svg.__jsx-style-dynamic-selector:hover,.btn.__jsx-style-dynamic-selector:hover{fill:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.pink, ";}.links.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0.4rem;}.btn.__jsx-style-dynamic-selector{background-color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.link, ";color:white;-webkit-text-decoration:none;text-decoration:none;padding:0.4rem;border-radius:0.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9jb21wb25lbnRzL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0ZlLEFBR2lDLEFBSUEsQUFNb0IsQUFHckIsQUFNaUMsY0FsQmhDLEFBSW9CLGNBSHBDLE1BU0EsWUFTYyxFQWRTLFVBZUEsZ0JBUEUsd0JBUHpCLFVBZWlCLGVBQ00scUJBQ3ZCLDZCQVRxQiw2RkFDSixlQUNqQiIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL3dlYi1wb3J0Zm9saW8vY29tcG9uZW50cy9DYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uL2RhdGFiYXNlL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBQb3N0UHJvakxpbmssIFBvc3RQcm9qSW1nIH0gZnJvbSBcIi4uL2FjdGlvbnMvcHJvamVjdHMvUG9zdFByb2pcIjtcblxuY29uc3QgQ2FyZCA9ICh7XG4gIHByb2plY3QsXG4gIHF1b3RlID0gXCJRVU9URVwiLFxuICBkZXNjcmlwdGlvbiA9IFwiREVTQ1JJUFRJT04gSEVSRVwiLFxufSkgPT4ge1xuICBjb25zdCByZW5kZXJQcm9qZWN0ID0gKCkgPT5cbiAgICBwcm9qZWN0cy5tYXAoKHByb2opID0+IHtcbiAgICAgIGlmIChwcm9qLnByb2plY3QgPT09IHByb2plY3QpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8dWwga2V5PXt1dWlkdjQoKX0+XG4gICAgICAgICAgICB7cHJvai50ZWNobm9sb2d5Lm1hcCgodGVjaCkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXt1dWlkdjQoKX0+e3RlY2h9PC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmJsYWNrfTtcbiAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDEzcHggMTNweCAke3RoZW1lLmNvbG9ycy5ncmF5fTtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAwIDEwcHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgY29uc3QgcmVuZGVyTGlua3MgPSAoKSA9PlxuICAgIHByb2plY3RzLm1hcCgocHJvaikgPT4ge1xuICAgICAgaWYgKHByb2oucHJvamVjdCA9PT0gcHJvamVjdCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIiBrZXk9e3V1aWR2NCgpfT5cbiAgICAgICAgICAgIHtwcm9qLmxpbmtzLm1hcCgobGluaykgPT4ge1xuICAgICAgICAgICAgICBpZiAobGluay50ZXh0ID09PSBcIkdpdEh1YlwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGtleT17dXVpZHY0KCl9XG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsuc3JjfVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub2ZvbGxvdyBub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDM4LjU0OSA0MzguNTQ5XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT57bGluay50ZXh0fTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00MDkuMTMyLDExNC41NzNjLTE5LjYwOC0zMy41OTYtNDYuMjA1LTYwLjE5NC03OS43OTgtNzkuOEMyOTUuNzM2LDE1LjE2NiwyNTkuMDU3LDUuMzY1LDIxOS4yNzEsNS4zNjUgYy0zOS43ODEsMC03Ni40NzIsOS44MDQtMTEwLjA2MywyOS40MDhjLTMzLjU5NiwxOS42MDUtNjAuMTkyLDQ2LjIwNC03OS44LDc5LjhDOS44MDMsMTQ4LjE2OCwwLDE4NC44NTQsMCwyMjQuNjMgYzAsNDcuNzgsMTMuOTQsOTAuNzQ1LDQxLjgyNywxMjguOTA2YzI3Ljg4NCwzOC4xNjQsNjMuOTA2LDY0LjU3MiwxMDguMDYzLDc5LjIyN2M1LjE0LDAuOTU0LDguOTQ1LDAuMjgzLDExLjQxOS0xLjk5NiBjMi40NzUtMi4yODIsMy43MTEtNS4xNCwzLjcxMS04LjU2MmMwLTAuNTcxLTAuMDQ5LTUuNzA4LTAuMTQ0LTE1LjQxN2MtMC4wOTgtOS43MDktMC4xNDQtMTguMTc5LTAuMTQ0LTI1LjQwNmwtNi41NjcsMS4xMzYgYy00LjE4NywwLjc2Ny05LjQ2OSwxLjA5Mi0xNS44NDYsMWMtNi4zNzQtMC4wODktMTIuOTkxLTAuNzU3LTE5Ljg0Mi0xLjk5OWMtNi44NTQtMS4yMzEtMTMuMjI5LTQuMDg2LTE5LjEzLTguNTU5IGMtNS44OTgtNC40NzMtMTAuMDg1LTEwLjMyOC0xMi41Ni0xNy41NTZsLTIuODU1LTYuNTdjLTEuOTAzLTQuMzc0LTQuODk5LTkuMjMzLTguOTkyLTE0LjU1OSBjLTQuMDkzLTUuMzMxLTguMjMyLTguOTQ1LTEyLjQxOS0xMC44NDhsLTEuOTk5LTEuNDMxYy0xLjMzMi0wLjk1MS0yLjU2OC0yLjA5OC0zLjcxMS0zLjQyOWMtMS4xNDItMS4zMzEtMS45OTctMi42NjMtMi41NjgtMy45OTcgYy0wLjU3Mi0xLjMzNS0wLjA5OC0yLjQzLDEuNDI3LTMuMjg5YzEuNTI1LTAuODU5LDQuMjgxLTEuMjc2LDguMjgtMS4yNzZsNS43MDgsMC44NTNjMy44MDcsMC43NjMsOC41MTYsMy4wNDIsMTQuMTMzLDYuODUxIGM1LjYxNCwzLjgwNiwxMC4yMjksOC43NTQsMTMuODQ2LDE0Ljg0MmM0LjM4LDcuODA2LDkuNjU3LDEzLjc1NCwxNS44NDYsMTcuODQ3YzYuMTg0LDQuMDkzLDEyLjQxOSw2LjEzNiwxOC42OTksNi4xMzYgYzYuMjgsMCwxMS43MDQtMC40NzYsMTYuMjc0LTEuNDIzYzQuNTY1LTAuOTUyLDguODQ4LTIuMzgzLDEyLjg0Ny00LjI4NWMxLjcxMy0xMi43NTgsNi4zNzctMjIuNTU5LDEzLjk4OC0yOS40MSBjLTEwLjg0OC0xLjE0LTIwLjYwMS0yLjg1Ny0yOS4yNjQtNS4xNGMtOC42NTgtMi4yODYtMTcuNjA1LTUuOTk2LTI2LjgzNS0xMS4xNGMtOS4yMzUtNS4xMzctMTYuODk2LTExLjUxNi0yMi45ODUtMTkuMTI2IGMtNi4wOS03LjYxNC0xMS4wODgtMTcuNjEtMTQuOTg3LTI5Ljk3OWMtMy45MDEtMTIuMzc0LTUuODUyLTI2LjY0OC01Ljg1Mi00Mi44MjZjMC0yMy4wMzUsNy41Mi00Mi42MzcsMjIuNTU3LTU4LjgxNyBjLTcuMDQ0LTE3LjMxOC02LjM3OS0zNi43MzIsMS45OTctNTguMjRjNS41Mi0xLjcxNSwxMy43MDYtMC40MjgsMjQuNTU0LDMuODUzYzEwLjg1LDQuMjgzLDE4Ljc5NCw3Ljk1MiwyMy44NCwxMC45OTQgYzUuMDQ2LDMuMDQxLDkuMDg5LDUuNjE4LDEyLjEzNSw3LjcwOGMxNy43MDUtNC45NDcsMzUuOTc2LTcuNDIxLDU0LjgxOC03LjQyMXMzNy4xMTcsMi40NzQsNTQuODIzLDcuNDIxbDEwLjg0OS02Ljg0OSBjNy40MTktNC41NywxNi4xOC04Ljc1OCwyNi4yNjItMTIuNTY1YzEwLjA4OC0zLjgwNSwxNy44MDItNC44NTMsMjMuMTM0LTMuMTM4YzguNTYyLDIxLjUwOSw5LjMyNSw0MC45MjIsMi4yNzksNTguMjQgYzE1LjAzNiwxNi4xOCwyMi41NTksMzUuNzg3LDIyLjU1OSw1OC44MTdjMCwxNi4xNzgtMS45NTgsMzAuNDk3LTUuODUzLDQyLjk2NmMtMy45LDEyLjQ3MS04Ljk0MSwyMi40NTctMTUuMTI1LDI5Ljk3OSBjLTYuMTkxLDcuNTIxLTEzLjkwMSwxMy44NS0yMy4xMzEsMTguOTg2Yy05LjIzMiw1LjE0LTE4LjE4Miw4Ljg1LTI2Ljg0LDExLjEzNmMtOC42NjIsMi4yODYtMTguNDE1LDQuMDA0LTI5LjI2Myw1LjE0NiBjOS44OTQsOC41NjIsMTQuODQyLDIyLjA3NywxNC44NDIsNDAuNTM5djYwLjIzN2MwLDMuNDIyLDEuMTksNi4yNzksMy41NzIsOC41NjJjMi4zNzksMi4yNzksNi4xMzYsMi45NSwxMS4yNzYsMS45OTUgYzQ0LjE2My0xNC42NTMsODAuMTg1LTQxLjA2MiwxMDguMDY4LTc5LjIyNmMyNy44OC0zOC4xNjEsNDEuODI1LTgxLjEyNiw0MS44MjUtMTI4LjkwNiBDNDM4LjUzNiwxODQuODUxLDQyOC43MjgsMTQ4LjE2OCw0MDkuMTMyLDExNC41NzN6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuXCJcbiAgICAgICAgICAgICAgICAgICAga2V5PXt1dWlkdjQoKX1cbiAgICAgICAgICAgICAgICAgICAgaHJlZj17bGluay5zcmN9XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vZm9sbG93IG5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cD57bGluay50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjhyZW07XG4gICAgICAgICAgICAgICAgICBmaWxsOiAke3RoZW1lLmNvbG9ycy5saW5rfTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3ZnOmhvdmVyLFxuICAgICAgICAgICAgICAgIC5idG46aG92ZXIge1xuICAgICAgICAgICAgICAgICAgZmlsbDogJHt0aGVtZS5jb2xvcnMucGlua307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC40cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpbmt9O1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC40cmVtO1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwiY2FyZHMtY29udGFpbmVyXCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcmQtLWltZ1wiPlxuICAgICAgICAgIDxQb3N0UHJvakltZyBwcm9qZWN0PXtwcm9qZWN0fSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcmQtLXRleHRcIj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICA8UG9zdFByb2pMaW5rIHByb2plY3Q9e3Byb2plY3R9IC8+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicXVvdGVcIj57cXVvdGV9PC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIHtyZW5kZXJMaW5rcygpfVxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZWNoLXdyYXBwZXJcIj57cmVuZGVyUHJvamVjdCgpfTwvc2VjdGlvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuY2FyZHMtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMzVweCAwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQtLWltZyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZC0taW1nOmhvdmVyIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KSB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkLS10ZXh0IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogNTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibGFja307XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweCAxNXB4IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucXVvdGUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMC4zcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRlY2gtd3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDQwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/components/Card.js */")));
      }
    });
  };

  return __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["543188973", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.black]]]) + " " + "cards-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["543188973", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.black]]]) + " " + "card--img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx(_actions_projects_PostProj__WEBPACK_IMPORTED_MODULE_5__["PostProjImg"], {
    project: project,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  })), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["543188973", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.black]]]) + " " + "card--text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["543188973", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.black]]]) + " " + "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, __jsx(_actions_projects_PostProj__WEBPACK_IMPORTED_MODULE_5__["PostProjLink"], {
    project: project,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }), __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["543188973", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.black]]]) + " " + "quote",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, quote), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["543188973", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.black]]]) + " " + "description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, description), renderLinks()), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["543188973", [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.black]]]) + " " + "tech-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, renderProject())), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "543188973",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.black],
    __self: _this
  }, ".cards-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:35px 0px;padding-left:100px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.card--img.__jsx-style-dynamic-selector{display:block;-webkit-transition:all 0.15s;transition:all 0.15s;}.card--img.__jsx-style-dynamic-selector:hover{-webkit-transform:translateX(-10px) translateY(-10px);-ms-transform:translateX(-10px) translateY(-10px);transform:translateX(-10px) translateY(-10px);}.card--text.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;height:100%;min-width:500px;}.text.__jsx-style-dynamic-selector{position:relative;white-space:pre-line;height:100%;color:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.black, ";padding:0 15px 15px 15px;}.quote.__jsx-style-dynamic-selector{font-size:30px;font-weight:400;margin-bottom:0.5rem;margin-top:1.5rem;}.description.__jsx-style-dynamic-selector{padding:0.3rem;}.tech-wrapper.__jsx-style-dynamic-selector{display:block;padding:0 40px;width:100%;bottom:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9jb21wb25lbnRzL0NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0lXLEFBRzRCLEFBT0MsQUFJZ0MsQUFHakMsQUFPSyxBQU9ILEFBTUEsQUFHRCxjQTdCTyxBQThCTixDQVRDLEFBTWxCLEdBYnVCLFdBaUJWLEVBVFUsUUFQVCxDQWlCRCxXQWhCd0IsQUFpQnJDLENBVm9CLFlBdEJwQixNQXVCQSxJQS9CbUIsQUFjSyxZQVVHLEtBdkJOLG1CQUNVLENBdUIvQix1Q0FkQSxFQUlvQixrQkFDTixZQUNJLGdCQUNsQixtQ0FmcUIsNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vZGF0YWJhc2UvcHJvamVjdHNcIjtcbmltcG9ydCB7IFBvc3RQcm9qTGluaywgUG9zdFByb2pJbWcgfSBmcm9tIFwiLi4vYWN0aW9ucy9wcm9qZWN0cy9Qb3N0UHJvalwiO1xuXG5jb25zdCBDYXJkID0gKHtcbiAgcHJvamVjdCxcbiAgcXVvdGUgPSBcIlFVT1RFXCIsXG4gIGRlc2NyaXB0aW9uID0gXCJERVNDUklQVElPTiBIRVJFXCIsXG59KSA9PiB7XG4gIGNvbnN0IHJlbmRlclByb2plY3QgPSAoKSA9PlxuICAgIHByb2plY3RzLm1hcCgocHJvaikgPT4ge1xuICAgICAgaWYgKHByb2oucHJvamVjdCA9PT0gcHJvamVjdCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDx1bCBrZXk9e3V1aWR2NCgpfT5cbiAgICAgICAgICAgIHtwcm9qLnRlY2hub2xvZ3kubWFwKCh0ZWNoKSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3V1aWR2NCgpfT57dGVjaH08L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYmxhY2t9O1xuICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMTNweCAxM3B4ICR7dGhlbWUuY29sb3JzLmdyYXl9O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDAgMTBweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICBjb25zdCByZW5kZXJMaW5rcyA9ICgpID0+XG4gICAgcHJvamVjdHMubWFwKChwcm9qKSA9PiB7XG4gICAgICBpZiAocHJvai5wcm9qZWN0ID09PSBwcm9qZWN0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiIGtleT17dXVpZHY0KCl9PlxuICAgICAgICAgICAge3Byb2oubGlua3MubWFwKChsaW5rKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChsaW5rLnRleHQgPT09IFwiR2l0SHViXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAga2V5PXt1dWlkdjQoKX1cbiAgICAgICAgICAgICAgICAgICAgaHJlZj17bGluay5zcmN9XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vZm9sbG93IG5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0MzguNTQ5IDQzOC41NDlcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPntsaW5rLnRleHR9PC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQwOS4xMzIsMTE0LjU3M2MtMTkuNjA4LTMzLjU5Ni00Ni4yMDUtNjAuMTk0LTc5Ljc5OC03OS44QzI5NS43MzYsMTUuMTY2LDI1OS4wNTcsNS4zNjUsMjE5LjI3MSw1LjM2NSBjLTM5Ljc4MSwwLTc2LjQ3Miw5LjgwNC0xMTAuMDYzLDI5LjQwOGMtMzMuNTk2LDE5LjYwNS02MC4xOTIsNDYuMjA0LTc5LjgsNzkuOEM5LjgwMywxNDguMTY4LDAsMTg0Ljg1NCwwLDIyNC42MyBjMCw0Ny43OCwxMy45NCw5MC43NDUsNDEuODI3LDEyOC45MDZjMjcuODg0LDM4LjE2NCw2My45MDYsNjQuNTcyLDEwOC4wNjMsNzkuMjI3YzUuMTQsMC45NTQsOC45NDUsMC4yODMsMTEuNDE5LTEuOTk2IGMyLjQ3NS0yLjI4MiwzLjcxMS01LjE0LDMuNzExLTguNTYyYzAtMC41NzEtMC4wNDktNS43MDgtMC4xNDQtMTUuNDE3Yy0wLjA5OC05LjcwOS0wLjE0NC0xOC4xNzktMC4xNDQtMjUuNDA2bC02LjU2NywxLjEzNiBjLTQuMTg3LDAuNzY3LTkuNDY5LDEuMDkyLTE1Ljg0NiwxYy02LjM3NC0wLjA4OS0xMi45OTEtMC43NTctMTkuODQyLTEuOTk5Yy02Ljg1NC0xLjIzMS0xMy4yMjktNC4wODYtMTkuMTMtOC41NTkgYy01Ljg5OC00LjQ3My0xMC4wODUtMTAuMzI4LTEyLjU2LTE3LjU1NmwtMi44NTUtNi41N2MtMS45MDMtNC4zNzQtNC44OTktOS4yMzMtOC45OTItMTQuNTU5IGMtNC4wOTMtNS4zMzEtOC4yMzItOC45NDUtMTIuNDE5LTEwLjg0OGwtMS45OTktMS40MzFjLTEuMzMyLTAuOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5Yy0xLjE0Mi0xLjMzMS0xLjk5Ny0yLjY2My0yLjU2OC0zLjk5NyBjLTAuNTcyLTEuMzM1LTAuMDk4LTIuNDMsMS40MjctMy4yODljMS41MjUtMC44NTksNC4yODEtMS4yNzYsOC4yOC0xLjI3Nmw1LjcwOCwwLjg1M2MzLjgwNywwLjc2Myw4LjUxNiwzLjA0MiwxNC4xMzMsNi44NTEgYzUuNjE0LDMuODA2LDEwLjIyOSw4Ljc1NCwxMy44NDYsMTQuODQyYzQuMzgsNy44MDYsOS42NTcsMTMuNzU0LDE1Ljg0NiwxNy44NDdjNi4xODQsNC4wOTMsMTIuNDE5LDYuMTM2LDE4LjY5OSw2LjEzNiBjNi4yOCwwLDExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjNjNC41NjUtMC45NTIsOC44NDgtMi4zODMsMTIuODQ3LTQuMjg1YzEuNzEzLTEyLjc1OCw2LjM3Ny0yMi41NTksMTMuOTg4LTI5LjQxIGMtMTAuODQ4LTEuMTQtMjAuNjAxLTIuODU3LTI5LjI2NC01LjE0Yy04LjY1OC0yLjI4Ni0xNy42MDUtNS45OTYtMjYuODM1LTExLjE0Yy05LjIzNS01LjEzNy0xNi44OTYtMTEuNTE2LTIyLjk4NS0xOS4xMjYgYy02LjA5LTcuNjE0LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc5Yy0zLjkwMS0xMi4zNzQtNS44NTItMjYuNjQ4LTUuODUyLTQyLjgyNmMwLTIzLjAzNSw3LjUyLTQyLjYzNywyMi41NTctNTguODE3IGMtNy4wNDQtMTcuMzE4LTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNGM1LjUyLTEuNzE1LDEzLjcwNi0wLjQyOCwyNC41NTQsMy44NTNjMTAuODUsNC4yODMsMTguNzk0LDcuOTUyLDIzLjg0LDEwLjk5NCBjNS4wNDYsMy4wNDEsOS4wODksNS42MTgsMTIuMTM1LDcuNzA4YzE3LjcwNS00Ljk0NywzNS45NzYtNy40MjEsNTQuODE4LTcuNDIxczM3LjExNywyLjQ3NCw1NC44MjMsNy40MjFsMTAuODQ5LTYuODQ5IGM3LjQxOS00LjU3LDE2LjE4LTguNzU4LDI2LjI2Mi0xMi41NjVjMTAuMDg4LTMuODA1LDE3LjgwMi00Ljg1MywyMy4xMzQtMy4xMzhjOC41NjIsMjEuNTA5LDkuMzI1LDQwLjkyMiwyLjI3OSw1OC4yNCBjMTUuMDM2LDE2LjE4LDIyLjU1OSwzNS43ODcsMjIuNTU5LDU4LjgxN2MwLDE2LjE3OC0xLjk1OCwzMC40OTctNS44NTMsNDIuOTY2Yy0zLjksMTIuNDcxLTguOTQxLDIyLjQ1Ny0xNS4xMjUsMjkuOTc5IGMtNi4xOTEsNy41MjEtMTMuOTAxLDEzLjg1LTIzLjEzMSwxOC45ODZjLTkuMjMyLDUuMTQtMTguMTgyLDguODUtMjYuODQsMTEuMTM2Yy04LjY2MiwyLjI4Ni0xOC40MTUsNC4wMDQtMjkuMjYzLDUuMTQ2IGM5Ljg5NCw4LjU2MiwxNC44NDIsMjIuMDc3LDE0Ljg0Miw0MC41Mzl2NjAuMjM3YzAsMy40MjIsMS4xOSw2LjI3OSwzLjU3Miw4LjU2MmMyLjM3OSwyLjI3OSw2LjEzNiwyLjk1LDExLjI3NiwxLjk5NSBjNDQuMTYzLTE0LjY1Myw4MC4xODUtNDEuMDYyLDEwOC4wNjgtNzkuMjI2YzI3Ljg4LTM4LjE2MSw0MS44MjUtODEuMTI2LDQxLjgyNS0xMjguOTA2IEM0MzguNTM2LDE4NC44NTEsNDI4LjcyOCwxNDguMTY4LDQwOS4xMzIsMTE0LjU3M3pcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxuICAgICAgICAgICAgICAgICAgICBrZXk9e3V1aWR2NCgpfVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtsaW5rLnNyY31cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9mb2xsb3cgbm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwPntsaW5rLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuOHJlbTtcbiAgICAgICAgICAgICAgICAgIGZpbGw6ICR7dGhlbWUuY29sb3JzLmxpbmt9O1xuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdmc6aG92ZXIsXG4gICAgICAgICAgICAgICAgLmJ0bjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICBmaWxsOiAke3RoZW1lLmNvbG9ycy5waW5rfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxpbmtzIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjRyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5idG4ge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMubGlua307XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjRyZW07XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJjYXJkcy1jb250YWluZXJcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZC0taW1nXCI+XG4gICAgICAgICAgPFBvc3RQcm9qSW1nIHByb2plY3Q9e3Byb2plY3R9IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZC0tdGV4dFwiPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgIDxQb3N0UHJvakxpbmsgcHJvamVjdD17cHJvamVjdH0gLz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJxdW90ZVwiPntxdW90ZX08L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAge3JlbmRlckxpbmtzKCl9XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRlY2gtd3JhcHBlclwiPntyZW5kZXJQcm9qZWN0KCl9PC9zZWN0aW9uPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5jYXJkcy1jb250YWluZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAzNXB4IDBweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZC0taW1nIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkLS1pbWc6aG92ZXIge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpIHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQtLXRleHQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmJsYWNrfTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4IDE1cHggMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5xdW90ZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjNyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGVjaC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/components/Card.js */"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=index.js.d6a36d24d1552c14bcbb.hot-update.js.map