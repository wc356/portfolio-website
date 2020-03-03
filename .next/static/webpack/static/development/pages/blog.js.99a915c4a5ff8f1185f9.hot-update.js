webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./actions/Post.js":
/*!*************************!*\
  !*** ./actions/Post.js ***!
  \*************************/
/*! exports provided: PostLink, PostImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostLink", function() { return PostLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostImg", function() { return PostImg; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var _public_images_expensify_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/images/expensify.png */ "./public/images/expensify.png");
/* harmony import */ var _public_images_expensify_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_images_expensify_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/actions/Post.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var PostLink = function PostLink(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? "PROJECT TITLE" : _ref$id;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/p/[id]",
    as: "/p/".concat(id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3307821390", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.light, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.light]]]) + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, id)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3307821390",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.light, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.light],
    __self: this
  }, ".title.__jsx-style-dynamic-selector{font-size:20px;font-weight:600;margin-bottom:20px;color:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.light, ";}a.__jsx-style-dynamic-selector:visited{color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.light, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vYWN0aW9ucy9Qb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVPLEFBRzBCLEFBTW9CLGVBTG5CLGdCQUNHLElBS3JCLGVBSnFDLG1DQUNyQyIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL2FjdGlvbnMvUG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgRXhwZW5zaWZ5UGljIGZyb20gXCIuLi9wdWJsaWMvaW1hZ2VzL2V4cGVuc2lmeS5wbmdcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGNvbnN0IFBvc3RMaW5rID0gKHsgaWQgPSBcIlBST0pFQ1QgVElUTEVcIiB9KSA9PiAoXG4gIDw+XG4gICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7aWR9YH0+XG4gICAgICA8YSBjbGFzc05hbWU9XCJ0aXRsZVwiPntpZH08L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpZ2h0fTtcbiAgICAgICAgfVxuICAgICAgICBhOnZpc2l0ZWQge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5saWdodH07XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC8+XG4pO1xuXG5leHBvcnQgY29uc3QgUG9zdEltZyA9ICh7IGlkIH0pID0+IChcbiAgPD5cbiAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtpZH1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLS13cmFwcGVyXCI+XG4gICAgICAgIDxpbWcgc3JjPXtFeHBlbnNpZnlQaWN9IGFsdD1cInBpY3R1cmUgb2YgcHJvamVjdCBFeHBlbnNpZnlcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLmltZy0td3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgaGVpZ2h0OiAzNDhweDtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmRhcmt9O1xuICAgICAgICB9XG4gICAgICAgIC5pbWctLXdyYXBwZXI6aG92ZXIgLm92ZXJsYXkge1xuICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8Lz5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/actions/Post.js */")));
};
var PostImg = function PostImg(_ref2) {
  var id = _ref2.id;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/p/[id]",
    as: "/p/".concat(id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["503807582", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "img--wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("img", {
    src: _public_images_expensify_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "picture of project Expensify",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["503807582", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["503807582", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "503807582",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark],
    __self: this
  }, ".img--wrapper.__jsx-style-dynamic-selector{display:block;position:relative;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}img.__jsx-style-dynamic-selector{width:100%;object-fit:cover;height:348px;object-position:50% 50%;}.overlay.__jsx-style-dynamic-selector{position:absolute;top:0;bottom:0;left:0;right:0;height:100%;width:100%;opacity:0;-webkit-transition:0.3s ease;transition:0.3s ease;background-color:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, ";}.img--wrapper.__jsx-style-dynamic-selector:hover .overlay.__jsx-style-dynamic-selector{opacity:0.8;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vYWN0aW9ucy9Qb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDTyxBQUd5QixBQU1ILEFBTU8sQUFZTixXQWpCSyxDQWtCbkIsRUF4Qm9CLElBWVosTUFDRyxJQU5JLElBTk0sQ0FhWixPQUNDLENBUGdCLE9BUVosWUFDRCxLQVJiLE1BU1ksVUFDVyw0Q0FqQkgsTUFrQjRCLFlBakJoRCxrQ0FrQkEiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9hY3Rpb25zL1Bvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IEV4cGVuc2lmeVBpYyBmcm9tIFwiLi4vcHVibGljL2ltYWdlcy9leHBlbnNpZnkucG5nXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBjb25zdCBQb3N0TGluayA9ICh7IGlkID0gXCJQUk9KRUNUIFRJVExFXCIgfSkgPT4gKFxuICA8PlxuICAgIDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke2lkfWB9PlxuICAgICAgPGEgY2xhc3NOYW1lPVwidGl0bGVcIj57aWR9PC9hPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5saWdodH07XG4gICAgICAgIH1cbiAgICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMubGlnaHR9O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGNvbnN0IFBvc3RJbWcgPSAoeyBpZCB9KSA9PiAoXG4gIDw+XG4gICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7aWR9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy0td3JhcHBlclwiPlxuICAgICAgICA8aW1nIHNyYz17RXhwZW5zaWZ5UGljfSBhbHQ9XCJwaWN0dXJlIG9mIHByb2plY3QgRXhwZW5zaWZ5XCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5pbWctLXdyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIGhlaWdodDogMzQ4cHg7XG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgICB9XG4gICAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5kYXJrfTtcbiAgICAgICAgfVxuICAgICAgICAuaW1nLS13cmFwcGVyOmhvdmVyIC5vdmVybGF5IHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC8+XG4pO1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/actions/Post.js */")));
};

/***/ })

})
//# sourceMappingURL=blog.js.99a915c4a5ff8f1185f9.hot-update.js.map