webpackHotUpdate("static/development/pages/index.js",{

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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3442033898", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.light]]]) + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, id)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3442033898",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.light],
    __self: this
  }, ".title.__jsx-style-dynamic-selector{text-transform:uppercase;font-size:25px;font-weight:600;-webkit-text-decoration:none;text-decoration:none;color:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink, ";text-shadow:3px 3px ").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink, ";}.title.__jsx-style-dynamic-selector:hover{text-shadow:5px 5px ").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink, ";}a.__jsx-style-dynamic-selector:visited{color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.light, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vYWN0aW9ucy9Qb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVPLEFBR29DLEFBUXdCLEFBR2QseUJBVnBCLFVBV2pCLEtBVmtCLFNBT2xCLE9BTnVCLGtEQUNjLG1DQUNjLGlEQUNuRCIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL2FjdGlvbnMvUG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgRXhwZW5zaWZ5UGljIGZyb20gXCIuLi9wdWJsaWMvaW1hZ2VzL2V4cGVuc2lmeS5wbmdcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGNvbnN0IFBvc3RMaW5rID0gKHsgaWQgPSBcIlBST0pFQ1QgVElUTEVcIiB9KSA9PiAoXG4gIDw+XG4gICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7aWR9YH0+XG4gICAgICA8YSBjbGFzc05hbWU9XCJ0aXRsZVwiPntpZH08L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5waW5rfTtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCAke3RoZW1lLmNvbG9ycy5waW5rfTtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGU6aG92ZXIge1xuICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4ICR7dGhlbWUuY29sb3JzLnBpbmt9O1xuICAgICAgICB9XG4gICAgICAgIGE6dmlzaXRlZCB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpZ2h0fTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBjb25zdCBQb3N0SW1nID0gKHsgaWQgfSkgPT4gKFxuICA8PlxuICAgIDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke2lkfWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctLXdyYXBwZXJcIj5cbiAgICAgICAgPGltZyBzcmM9e0V4cGVuc2lmeVBpY30gYWx0PVwicGljdHVyZSBvZiBwcm9qZWN0IEV4cGVuc2lmeVwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5TSE9XIFBST0pFQ1Q8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAuaW1nLS13cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBoZWlnaHQ6IDM0OHB4O1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgICAgfVxuICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuZGFya307XG4gICAgICAgIH1cbiAgICAgICAgLmltZy0td3JhcHBlcjpob3ZlciAub3ZlcmxheSB7XG4gICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC8+XG4pO1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/actions/Post.js */")));
};
var PostImg = function PostImg(_ref2) {
  var id = _ref2.id;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/p/[id]",
    as: "/p/".concat(id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348412021", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "img--wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("img", {
    src: _public_images_expensify_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "picture of project Expensify",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348412021", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348412021", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1348412021", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "SHOW PROJECT")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1348412021",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark],
    __self: this
  }, ".img--wrapper.__jsx-style-dynamic-selector{display:block;position:relative;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}img.__jsx-style-dynamic-selector{width:100%;object-fit:cover;height:348px;object-position:50% 50%;}.overlay.__jsx-style-dynamic-selector{position:absolute;top:0;bottom:0;left:0;right:0;height:100%;width:100%;opacity:0;-webkit-transition:0.3s ease;transition:0.3s ease;background-color:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, ";}.img--wrapper.__jsx-style-dynamic-selector:hover .overlay.__jsx-style-dynamic-selector{opacity:0.6;}.text.__jsx-style-dynamic-selector{color:white;font-size:30px;font-weight:600;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vYWN0aW9ucy9Qb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDTyxBQUd5QixBQU1ILEFBTU8sQUFZTixBQUdBLFdBcEJLLENBa0JuQixBQUdpQixFQTNCRyxJQVlaLE1BQ0csR0FlTyxDQXJCSCxJQU5NLENBYVosT0FDQyxDQVBnQixFQXFCTixLQWJOLFlBQ0QsQ0FhSCxJQXJCVixJQXNCVyxFQWJDLE9BYzhCLEdBYm5CLG9DQWNlLFFBL0JsQixNQWtCNEIsWUFqQmhELFNBK0JrQyx5QkFibEMsZ0ZBY29CLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL2FjdGlvbnMvUG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgRXhwZW5zaWZ5UGljIGZyb20gXCIuLi9wdWJsaWMvaW1hZ2VzL2V4cGVuc2lmeS5wbmdcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGNvbnN0IFBvc3RMaW5rID0gKHsgaWQgPSBcIlBST0pFQ1QgVElUTEVcIiB9KSA9PiAoXG4gIDw+XG4gICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7aWR9YH0+XG4gICAgICA8YSBjbGFzc05hbWU9XCJ0aXRsZVwiPntpZH08L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5waW5rfTtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogM3B4IDNweCAke3RoZW1lLmNvbG9ycy5waW5rfTtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGU6aG92ZXIge1xuICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4ICR7dGhlbWUuY29sb3JzLnBpbmt9O1xuICAgICAgICB9XG4gICAgICAgIGE6dmlzaXRlZCB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpZ2h0fTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBjb25zdCBQb3N0SW1nID0gKHsgaWQgfSkgPT4gKFxuICA8PlxuICAgIDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke2lkfWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctLXdyYXBwZXJcIj5cbiAgICAgICAgPGltZyBzcmM9e0V4cGVuc2lmeVBpY30gYWx0PVwicGljdHVyZSBvZiBwcm9qZWN0IEV4cGVuc2lmeVwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5TSE9XIFBST0pFQ1Q8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAuaW1nLS13cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBoZWlnaHQ6IDM0OHB4O1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgICAgfVxuICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuZGFya307XG4gICAgICAgIH1cbiAgICAgICAgLmltZy0td3JhcHBlcjpob3ZlciAub3ZlcmxheSB7XG4gICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC8+XG4pO1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/actions/Post.js */")));
};

/***/ })

})
//# sourceMappingURL=index.js.2b70ff7e6a24ab1f3172.hot-update.js.map