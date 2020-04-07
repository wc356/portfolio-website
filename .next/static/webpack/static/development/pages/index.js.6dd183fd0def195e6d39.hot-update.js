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
  }, ".title.__jsx-style-dynamic-selector{font-size:25px;font-weight:600;-webkit-text-decoration:none;text-decoration:none;color:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, ";}.title.__jsx-style-dynamic-selector:hover{opacity:1;text-shadow:6px 6px ").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], ";}a.__jsx-style-dynamic-selector:visited{color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vYWN0aW9ucy9wcm9qZWN0cy9Qb3N0UHJvai5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZTyxBQUcwQixBQU1MLEFBSXlCLFVBSGMsS0FOakMsZ0JBQ0ssSUFTdkIsd0JBSEEsc0JBTHFDLG1DQUNyQyIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL2FjdGlvbnMvcHJvamVjdHMvUG9zdFByb2ouanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGhlbWUgZnJvbSBcIi4uLy4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEV4cGVuc2lmeVBpYyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9leHBlbnNpZnkucG5nXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuLi8uLi9kYXRhYmFzZS9wcm9qZWN0c1wiO1xuXG5leHBvcnQgY29uc3QgUG9zdFByb2pMaW5rID0gKHsgcHJvamVjdCA9IFwiUFJPSkVDVCBUSVRMRVwiIH0pID0+IChcbiAgPD5cbiAgICA8TGluayBocmVmPVwiL3Byb2ovW3Byb2plY3RdXCIgYXM9e2AvcHJvai8ke3Byb2plY3R9YH0+XG4gICAgICA8YSBjbGFzc05hbWU9XCJ0aXRsZVwiPntwcm9qZWN0fTwvYT5cbiAgICA8L0xpbms+XG5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmRhcmt9O1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZTpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogNnB4IDZweCAke3RoZW1lLmNvbG9yc1tcInBpbmstbGlua1wiXX07XG4gICAgICAgIH1cbiAgICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZGFya307XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC8+XG4pO1xuXG4vLyBMb29wIG92ZXIgZWFjaCBQcm9qZWN0T2JqZWN0IGluIERhdGFiYXNlXG4vLyBpZiBQcm9qZWN0T2JqZWN0LnByb2plY3QgPT09IHRoaXMucHJvcC5wcm9qZWN0LCB0aGVuIGdyYWLigJTigJRwcm9qZWN0LnBpY3R1cmVzWzBdLnBhdGg7XG5cbmV4cG9ydCBjb25zdCBQb3N0UHJvakltZyA9ICh7IHByb2plY3QgfSkgPT4gKFxuICA8PlxuICAgIDxMaW5rIGhyZWY9XCIvcHJvai9bcHJvamVjdF1cIiBhcz17YC9wcm9qLyR7cHJvamVjdH1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLS13cmFwcGVyXCI+XG4gICAgICAgIHtwcm9qZWN0cy5tYXAoKG9iaikgPT4ge1xuICAgICAgICAgIGlmIChvYmoucHJvamVjdCA9PT0gcHJvamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIDxpbWcgc3JjPXtvYmouY292ZXJ9IGFsdD17YHBpY3R1cmUgb2YgJHtvYmoucHJvamVjdH1gfSAvPjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+U2VlIFByb2plY3Q8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuXG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5pbWctLXdyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgICAgfVxuICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5pbWctLXdyYXBwZXI6aG92ZXIgLm92ZXJsYXkge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgfVxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpbmt9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC8+XG4pO1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/actions/projects/PostProj.js */")));
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2520428675", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]) + " " + "img--wrapper",
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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2520428675", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 20
        }
      });
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2520428675", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]) + " " + "overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2520428675", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]) + " " + "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "See Project")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2520428675",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link],
    __self: _this
  }, ".img--wrapper.__jsx-style-dynamic-selector{display:block;position:relative;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}img.__jsx-style-dynamic-selector{width:100%;object-fit:cover;object-position:50% 50%;}.overlay.__jsx-style-dynamic-selector{position:absolute;cursor:pointer;top:0;bottom:0;left:0;right:0;height:100%;width:100%;opacity:0;-webkit-transition:0.3s ease;transition:0.3s ease;background-color:white;}.img--wrapper.__jsx-style-dynamic-selector:hover .overlay.__jsx-style-dynamic-selector{opacity:0.6;}.text.__jsx-style-dynamic-selector{color:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, ";font-size:30px;font-weight:500;position:absolute;top:50%;left:50%;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vYWN0aW9ucy9wcm9qZWN0cy9Qb3N0UHJvai5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRE8sQUFHeUIsQUFNSCxBQUtPLEFBYU4sQUFHdUIsV0FwQmxCLENBa0JuQixFQXhCb0IsSUFXSCxVQUpTLElBTkwsQ0FXYixFQWVTLElBZE4sU0FDRixFQWNTLEVBcEJsQixHQU9VLFFBQ0ksR0FhTSxTQVpQLFNBYUgsRUFaRSxNQWFELElBWlksS0FhRix3QkE5QkQsa0JBQ3BCLEdBaUJ5Qix1QkFDekIseUJBWTBDLHVDQUNKLG1DQUNKLHlHQUNkLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL2FjdGlvbnMvcHJvamVjdHMvUG9zdFByb2ouanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGhlbWUgZnJvbSBcIi4uLy4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEV4cGVuc2lmeVBpYyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9leHBlbnNpZnkucG5nXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuLi8uLi9kYXRhYmFzZS9wcm9qZWN0c1wiO1xuXG5leHBvcnQgY29uc3QgUG9zdFByb2pMaW5rID0gKHsgcHJvamVjdCA9IFwiUFJPSkVDVCBUSVRMRVwiIH0pID0+IChcbiAgPD5cbiAgICA8TGluayBocmVmPVwiL3Byb2ovW3Byb2plY3RdXCIgYXM9e2AvcHJvai8ke3Byb2plY3R9YH0+XG4gICAgICA8YSBjbGFzc05hbWU9XCJ0aXRsZVwiPntwcm9qZWN0fTwvYT5cbiAgICA8L0xpbms+XG5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmRhcmt9O1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZTpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogNnB4IDZweCAke3RoZW1lLmNvbG9yc1tcInBpbmstbGlua1wiXX07XG4gICAgICAgIH1cbiAgICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZGFya307XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC8+XG4pO1xuXG4vLyBMb29wIG92ZXIgZWFjaCBQcm9qZWN0T2JqZWN0IGluIERhdGFiYXNlXG4vLyBpZiBQcm9qZWN0T2JqZWN0LnByb2plY3QgPT09IHRoaXMucHJvcC5wcm9qZWN0LCB0aGVuIGdyYWLigJTigJRwcm9qZWN0LnBpY3R1cmVzWzBdLnBhdGg7XG5cbmV4cG9ydCBjb25zdCBQb3N0UHJvakltZyA9ICh7IHByb2plY3QgfSkgPT4gKFxuICA8PlxuICAgIDxMaW5rIGhyZWY9XCIvcHJvai9bcHJvamVjdF1cIiBhcz17YC9wcm9qLyR7cHJvamVjdH1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLS13cmFwcGVyXCI+XG4gICAgICAgIHtwcm9qZWN0cy5tYXAoKG9iaikgPT4ge1xuICAgICAgICAgIGlmIChvYmoucHJvamVjdCA9PT0gcHJvamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIDxpbWcgc3JjPXtvYmouY292ZXJ9IGFsdD17YHBpY3R1cmUgb2YgJHtvYmoucHJvamVjdH1gfSAvPjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+U2VlIFByb2plY3Q8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuXG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5pbWctLXdyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgICAgfVxuICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5pbWctLXdyYXBwZXI6aG92ZXIgLm92ZXJsYXkge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgfVxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpbmt9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC8+XG4pO1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/actions/projects/PostProj.js */")));
};

/***/ })

})
//# sourceMappingURL=index.js.6dd183fd0def195e6d39.hot-update.js.map