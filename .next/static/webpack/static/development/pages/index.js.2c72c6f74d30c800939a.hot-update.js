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
/* harmony import */ var _public_images_expensify_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/images/expensify.png */ "./public/images/expensify.png");
/* harmony import */ var _public_images_expensify_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_images_expensify_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _database_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../database/projects */ "./database/projects.js");
var _this = undefined,
    _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/actions/projects/PostProj.js";



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
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2551411397", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, project)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2551411397",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark],
    __self: _this
  }, ".title.__jsx-style-dynamic-selector{font-size:25px;font-weight:600;-webkit-text-decoration:none;text-decoration:none;color:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, ";}.title.__jsx-style-dynamic-selector:hover{opacity:1;text-shadow:6px 6px ").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], ";}a.__jsx-style-dynamic-selector:visited{color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vYWN0aW9ucy9wcm9qZWN0cy9Qb3N0UHJvai5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZTyxBQUcwQixBQU1MLEFBSXlCLFVBSGMsS0FOakMsZ0JBQ0ssSUFTdkIsd0JBSEEsc0JBTHFDLG1DQUNyQyIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL2FjdGlvbnMvcHJvamVjdHMvUG9zdFByb2ouanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGhlbWUgZnJvbSBcIi4uLy4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEV4cGVuc2lmeVBpYyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9leHBlbnNpZnkucG5nXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuLi8uLi9kYXRhYmFzZS9wcm9qZWN0c1wiO1xuXG5leHBvcnQgY29uc3QgUG9zdFByb2pMaW5rID0gKHsgcHJvamVjdCA9IFwiUFJPSkVDVCBUSVRMRVwiIH0pID0+IChcbiAgPD5cbiAgICA8TGluayBocmVmPVwiL3Byb2ovW3Byb2plY3RdXCIgYXM9e2AvcHJvai8ke3Byb2plY3R9YH0+XG4gICAgICA8YSBjbGFzc05hbWU9XCJ0aXRsZVwiPntwcm9qZWN0fTwvYT5cbiAgICA8L0xpbms+XG5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmRhcmt9O1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZTpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogNnB4IDZweCAke3RoZW1lLmNvbG9yc1tcInBpbmstbGlua1wiXX07XG4gICAgICAgIH1cbiAgICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZGFya307XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC8+XG4pO1xuXG4vLyBMb29wIG92ZXIgZWFjaCBQcm9qZWN0T2JqZWN0IGluIERhdGFiYXNlXG4vLyBpZiBQcm9qZWN0T2JqZWN0LnByb2plY3QgPT09IHRoaXMucHJvcC5wcm9qZWN0LCB0aGVuIGdyYWLigJTigJRwcm9qZWN0LnBpY3R1cmVzWzBdLnBhdGg7XG5cbmV4cG9ydCBjb25zdCBQb3N0UHJvakltZyA9ICh7IHByb2plY3QgfSkgPT4gKFxuICA8PlxuICAgIDxMaW5rIGhyZWY9XCIvcHJvai9bcHJvamVjdF1cIiBhcz17YC9wcm9qLyR7cHJvamVjdH1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLS13cmFwcGVyXCI+XG4gICAgICAgIHtwcm9qZWN0cy5tYXAoKG9iaikgPT4ge1xuICAgICAgICAgIGlmIChvYmoucHJvamVjdCA9PT0gcHJvamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIDxpbWcgc3JjPXtvYmouY292ZXJ9IGFsdD17YHBpY3R1cmUgb2YgJHtvYmoucHJvamVjdH1gfSAvPjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+U2VlIFByb2plY3Q8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuXG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgICB9XG4gICAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLmltZy0td3JhcHBlcjpob3ZlciAub3ZlcmxheSB7XG4gICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMubGlua307XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8Lz5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/actions/projects/PostProj.js */")));
}; // Loop over each ProjectObject in Database
// if ProjectObject.project === this.prop.project, then grab——project.pictures[0].path;

var PostProjImg = function PostProjImg(_ref2) {
  var project = _ref2.project;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/proj/[project]",
    as: "/proj/".concat(project),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2365989313", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]) + " " + "img--wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, _database_projects__WEBPACK_IMPORTED_MODULE_5__["projects"].map(function (obj) {
    if (obj.project === project) {
      return __jsx("img", {
        src: obj.cover,
        alt: "picture of ".concat(obj.project),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2365989313", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 20
        }
      });
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2365989313", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]) + " " + "overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2365989313", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]) + " " + "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "See Project")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2365989313",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link],
    __self: _this
  }, "img.__jsx-style-dynamic-selector{object-fit:cover;object-position:50% 50%;}.overlay.__jsx-style-dynamic-selector{position:absolute;cursor:pointer;top:0;bottom:0;left:0;right:0;height:100%;width:100%;opacity:0;-webkit-transition:0.3s ease;transition:0.3s ease;background-color:white;}.img--wrapper.__jsx-style-dynamic-selector:hover .overlay.__jsx-style-dynamic-selector{opacity:0.6;}.text.__jsx-style-dynamic-selector{color:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, ";font-size:30px;font-weight:500;position:absolute;top:50%;left:50%;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vYWN0aW9ucy9wcm9qZWN0cy9Qb3N0UHJvai5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRE8sQUFHNEIsQUFJQyxBQWFOLEFBR3VCLFlBRnJDLEtBakIwQixDQUlULGVBQ1QsRUFlUyxJQWROLEVBTFgsT0FNUyxFQWNTLEtBYlIsUUFDSSxHQWFNLFNBWlAsU0FhSCxFQVpFLE1BYUQsSUFaWSxLQWFGLDZDQVpJLHVCQUN6Qix5QkFZMEMsdUNBQ0osbUNBQ0oseUdBQ2Qsa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vYWN0aW9ucy9wcm9qZWN0cy9Qb3N0UHJvai5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgRXhwZW5zaWZ5UGljIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2V4cGVuc2lmeS5wbmdcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uLy4uL2RhdGFiYXNlL3Byb2plY3RzXCI7XG5cbmV4cG9ydCBjb25zdCBQb3N0UHJvakxpbmsgPSAoeyBwcm9qZWN0ID0gXCJQUk9KRUNUIFRJVExFXCIgfSkgPT4gKFxuICA8PlxuICAgIDxMaW5rIGhyZWY9XCIvcHJvai9bcHJvamVjdF1cIiBhcz17YC9wcm9qLyR7cHJvamVjdH1gfT5cbiAgICAgIDxhIGNsYXNzTmFtZT1cInRpdGxlXCI+e3Byb2plY3R9PC9hPlxuICAgIDwvTGluaz5cblxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZGFya307XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHRleHQtc2hhZG93OiA2cHggNnB4ICR7dGhlbWUuY29sb3JzW1wicGluay1saW5rXCJdfTtcbiAgICAgICAgfVxuICAgICAgICBhOnZpc2l0ZWQge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5kYXJrfTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8Lz5cbik7XG5cbi8vIExvb3Agb3ZlciBlYWNoIFByb2plY3RPYmplY3QgaW4gRGF0YWJhc2Vcbi8vIGlmIFByb2plY3RPYmplY3QucHJvamVjdCA9PT0gdGhpcy5wcm9wLnByb2plY3QsIHRoZW4gZ3JhYuKAlOKAlHByb2plY3QucGljdHVyZXNbMF0ucGF0aDtcblxuZXhwb3J0IGNvbnN0IFBvc3RQcm9qSW1nID0gKHsgcHJvamVjdCB9KSA9PiAoXG4gIDw+XG4gICAgPExpbmsgaHJlZj1cIi9wcm9qL1twcm9qZWN0XVwiIGFzPXtgL3Byb2ovJHtwcm9qZWN0fWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctLXdyYXBwZXJcIj5cbiAgICAgICAge3Byb2plY3RzLm1hcCgob2JqKSA9PiB7XG4gICAgICAgICAgaWYgKG9iai5wcm9qZWN0ID09PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gPGltZyBzcmM9e29iai5jb3Zlcn0gYWx0PXtgcGljdHVyZSBvZiAke29iai5wcm9qZWN0fWB9IC8+O1xuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5TZWUgUHJvamVjdDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAuaW1nLS13cmFwcGVyOmhvdmVyIC5vdmVybGF5IHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5saW5rfTtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvPlxuKTtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/actions/projects/PostProj.js */")));
};

/***/ })

})
//# sourceMappingURL=index.js.2c72c6f74d30c800939a.hot-update.js.map