webpackHotUpdate("static/development/pages/index.js",{

/***/ "./actions/projects/PostProj.js":
/*!**************************************!*\
  !*** ./actions/projects/PostProj.js ***!
  \**************************************/
/*! exports provided: PostProjLink, PostProjImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostProjLink", function() { return PostProjLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostProjImg", function() { return PostProjImg; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _database_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../database/projects */ "./database/projects.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
var _this = undefined,
    _jsxFileName = "/Users/WooChoi/Desktop/React.js/web-portfolio/actions/projects/PostProj.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var PostProjLink = function PostProjLink(_ref) {
  var _ref$project = _ref.project,
      project = _ref$project === void 0 ? "PROJECT TITLE" : _ref$project;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/proj/[project]",
    as: "/proj/".concat(project),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1148355745", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, project)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1148355745",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark],
    __self: _this
  }, ".title.__jsx-style-dynamic-selector{font-size:25px;font-weight:600;-webkit-text-decoration:none;text-decoration:none;color:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, ";box-shadow:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, " 0 0 10px 0;}.title.__jsx-style-dynamic-selector:hover{opacity:1;text-shadow:6px 6px ").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], ";}a.__jsx-style-dynamic-selector:visited{color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9hY3Rpb25zL3Byb2plY3RzL1Bvc3RQcm9qLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlPLEFBRzBCLEFBT0wsQUFJeUIsVUFIYyxLQVBqQyxnQkFDSyxJQVV2Qix3QkFIQSxzQkFOcUMsbUNBQ2dCLG1EQUNyRCIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL3dlYi1wb3J0Zm9saW8vYWN0aW9ucy9wcm9qZWN0cy9Qb3N0UHJvai5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuLi8uLi9kYXRhYmFzZS9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuZXhwb3J0IGNvbnN0IFBvc3RQcm9qTGluayA9ICh7IHByb2plY3QgPSBcIlBST0pFQ1QgVElUTEVcIiB9KSA9PiAoXG4gIDw+XG4gICAgPExpbmsgaHJlZj1cIi9wcm9qL1twcm9qZWN0XVwiIGFzPXtgL3Byb2ovJHtwcm9qZWN0fWB9PlxuICAgICAgPGEgY2xhc3NOYW1lPVwidGl0bGVcIj57cHJvamVjdH08L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMubGlua307XG4gICAgICAgICAgYm94LXNoYWRvdzogJHt0aGVtZS5jb2xvcnMubGlua30gMCAwIDEwcHggMDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGU6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDZweCA2cHggJHt0aGVtZS5jb2xvcnNbXCJwaW5rLWxpbmtcIl19O1xuICAgICAgICB9XG4gICAgICAgIGE6dmlzaXRlZCB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmRhcmt9O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGNvbnN0IFBvc3RQcm9qSW1nID0gKHsgcHJvamVjdCB9KSA9PiAoXG4gIDw+XG4gICAgPExpbmsgaHJlZj1cIi9wcm9qL1twcm9qZWN0XVwiIGFzPXtgL3Byb2ovJHtwcm9qZWN0fWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctLXdyYXBwZXJcIj5cbiAgICAgICAge3Byb2plY3RzLm1hcCgob2JqKSA9PiB7XG4gICAgICAgICAgaWYgKG9iai5wcm9qZWN0ID09PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAga2V5PXt1dWlkdjQoKX1cbiAgICAgICAgICAgICAgICBzcmM9e29iai5jb3Zlcn1cbiAgICAgICAgICAgICAgICBhbHQ9e2BwaWN0dXJlIG9mICR7b2JqLnByb2plY3R9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPkFib3V0IFByb2plY3Q8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAuaW1nLS13cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggZ3JheTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmltZy0td3JhcHBlcjpob3ZlciAub3ZlcmxheSB7XG4gICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAke3RoZW1lLmNvbG9yc1tcInBpbmstbGlua1wiXX07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgICB9XG4gICAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuMTVzIGVhc2U7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5saW5rfTtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvPlxuKTtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/actions/projects/PostProj.js */")));
};
var PostProjImg = function PostProjImg(_ref2) {
  var project = _ref2.project;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/proj/[project]",
    as: "/proj/".concat(project),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2157812680", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]) + " " + "img--wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, _database_projects__WEBPACK_IMPORTED_MODULE_4__["projects"].map(function (obj) {
    if (obj.project === project) {
      return __jsx("img", {
        key: Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])(),
        src: obj.cover,
        alt: "picture of ".concat(obj.project),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2157812680", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 15
        }
      });
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2157812680", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]) + " " + "overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2157812680", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]) + " " + "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "About Project")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2157812680",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link],
    __self: _this
  }, ".img--wrapper.__jsx-style-dynamic-selector{display:block;position:relative;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;box-shadow:1px 1px 5px gray;border-radius:5px;}.img--wrapper.__jsx-style-dynamic-selector:hover .overlay.__jsx-style-dynamic-selector{opacity:0.8;box-shadow:10px 10px ".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], ";border-radius:5px;}img.__jsx-style-dynamic-selector{object-position:50% 50%;}.overlay.__jsx-style-dynamic-selector{position:absolute;cursor:pointer;top:0;bottom:0;left:0;right:0;opacity:0;-webkit-transition:0.15s ease;transition:0.15s ease;background-color:white;}.text.__jsx-style-dynamic-selector{color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, ";font-size:30px;font-weight:500;position:absolute;top:50%;left:50%;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9hY3Rpb25zL3Byb2plY3RzL1Bvc3RQcm9qLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFETyxBQUd5QixBQVFGLEFBS1ksQUFHTixBQVdpQixZQWxCZSxFQVJoQyxJQWdCSCxNQUhqQixRQVpxQixDQWdCYixFQVVTLElBVE4sU0FDRixFQVNTLEtBUlIsT0FYVSxDQVlSLEdBUVEsT0FQSSxPQVp4QixJQW9CVSxRQUNDLFNBQ1Usd0JBOUJELEFBcUJLLGtCQXBCSyxLQXFCOUIsdUJBcEJvQixrQkFDcEIsS0E0QjBDLHVDQUNKLG1DQUNKLHlHQUNkLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL3dlYi1wb3J0Zm9saW8vYWN0aW9ucy9wcm9qZWN0cy9Qb3N0UHJvai5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuLi8uLi9kYXRhYmFzZS9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuZXhwb3J0IGNvbnN0IFBvc3RQcm9qTGluayA9ICh7IHByb2plY3QgPSBcIlBST0pFQ1QgVElUTEVcIiB9KSA9PiAoXG4gIDw+XG4gICAgPExpbmsgaHJlZj1cIi9wcm9qL1twcm9qZWN0XVwiIGFzPXtgL3Byb2ovJHtwcm9qZWN0fWB9PlxuICAgICAgPGEgY2xhc3NOYW1lPVwidGl0bGVcIj57cHJvamVjdH08L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMubGlua307XG4gICAgICAgICAgYm94LXNoYWRvdzogJHt0aGVtZS5jb2xvcnMubGlua30gMCAwIDEwcHggMDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGU6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDZweCA2cHggJHt0aGVtZS5jb2xvcnNbXCJwaW5rLWxpbmtcIl19O1xuICAgICAgICB9XG4gICAgICAgIGE6dmlzaXRlZCB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmRhcmt9O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGNvbnN0IFBvc3RQcm9qSW1nID0gKHsgcHJvamVjdCB9KSA9PiAoXG4gIDw+XG4gICAgPExpbmsgaHJlZj1cIi9wcm9qL1twcm9qZWN0XVwiIGFzPXtgL3Byb2ovJHtwcm9qZWN0fWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctLXdyYXBwZXJcIj5cbiAgICAgICAge3Byb2plY3RzLm1hcCgob2JqKSA9PiB7XG4gICAgICAgICAgaWYgKG9iai5wcm9qZWN0ID09PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAga2V5PXt1dWlkdjQoKX1cbiAgICAgICAgICAgICAgICBzcmM9e29iai5jb3Zlcn1cbiAgICAgICAgICAgICAgICBhbHQ9e2BwaWN0dXJlIG9mICR7b2JqLnByb2plY3R9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPkFib3V0IFByb2plY3Q8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAuaW1nLS13cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggZ3JheTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmltZy0td3JhcHBlcjpob3ZlciAub3ZlcmxheSB7XG4gICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAke3RoZW1lLmNvbG9yc1tcInBpbmstbGlua1wiXX07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgICB9XG4gICAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuMTVzIGVhc2U7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5saW5rfTtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvPlxuKTtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/actions/projects/PostProj.js */")));
};

/***/ })

})
//# sourceMappingURL=index.js.a6ddc664f6e31c8ebd20.hot-update.js.map