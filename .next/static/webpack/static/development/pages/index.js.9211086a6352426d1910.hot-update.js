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
      project = _ref$project === void 0 ? "PROJECT TITLE" : _ref$project,
      ongoing = _ref.ongoing;
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["559161443", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, ongoing ? "ongoing" : ""]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, project)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "559161443",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, ongoing ? "ongoing" : ""],
    __self: _this
  }, "a.__jsx-style-dynamic-selector{display:inline-block;font-size:25px;font-weight:600;-webkit-text-decoration:none;text-decoration:none;color:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, ";}a.__jsx-style-dynamic-selector:hover{opacity:1;text-shadow:6px 6px ").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], ";}a.__jsx-style-dynamic-selector:visited{color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, ";}a.__jsx-style-dynamic-selector::after{content:'").concat(ongoing ? "ongoing" : "", "';position:absolute;bottom:95%;color:gray;font-weight:300;font-size:.9rem;text-shadow:none;}a.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector::after{-webkit-transition:all 0.15s;transition:all 0.15s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9hY3Rpb25zL3Byb2plY3RzL1Bvc3RQcm9qLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFPLEFBR2dDLEFBT1gsQUFJeUIsQUFHSSxBQVNsQixVQWY0QixXQVBsQyxjQVdqQixDQVZrQixHQWFFLFdBU3BCLEVBckJ1QixLQWFWLEVBUGIsU0FRYSxXQUNLLGdCQUNBLE9BZm1CLFNBZ0JsQixpQkFDbkIsU0FoQkEiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy93ZWItcG9ydGZvbGlvL2FjdGlvbnMvcHJvamVjdHMvUG9zdFByb2ouanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uLy4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vZGF0YWJhc2UvcHJvamVjdHNcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmV4cG9ydCBjb25zdCBQb3N0UHJvakxpbmsgPSAoeyBwcm9qZWN0ID0gXCJQUk9KRUNUIFRJVExFXCIsIG9uZ29pbmcgfSkgPT4gKFxuICA8PlxuICAgIDxMaW5rIGhyZWY9XCIvcHJvai9bcHJvamVjdF1cIiBhcz17YC9wcm9qLyR7cHJvamVjdH1gfT5cbiAgICAgIDxhPntwcm9qZWN0fTwvYT5cbiAgICA8L0xpbms+XG5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgYSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMubGlua307XG4gICAgICAgIH1cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogNnB4IDZweCAke3RoZW1lLmNvbG9yc1tcInBpbmstbGlua1wiXX07XG4gICAgICAgIH1cbiAgICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMubGlua307XG4gICAgICAgIH1cbiAgICAgICAgYTo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICcke29uZ29pbmcgPyBcIm9uZ29pbmdcIiA6IFwiXCJ9JztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiA5NSU7XG4gICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC8+XG4pO1xuXG5leHBvcnQgY29uc3QgUG9zdFByb2pJbWcgPSAoeyBwcm9qZWN0IH0pID0+IChcbiAgPD5cbiAgICA8TGluayBocmVmPVwiL3Byb2ovW3Byb2plY3RdXCIgYXM9e2AvcHJvai8ke3Byb2plY3R9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy0td3JhcHBlclwiPlxuICAgICAgICB7cHJvamVjdHMubWFwKChvYmopID0+IHtcbiAgICAgICAgICBpZiAob2JqLnByb2plY3QgPT09IHByb2plY3QpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBrZXk9e3V1aWR2NCgpfVxuICAgICAgICAgICAgICAgIHNyYz17b2JqLmNvdmVyfVxuICAgICAgICAgICAgICAgIGFsdD17YHBpY3R1cmUgb2YgJHtvYmoucHJvamVjdH1gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+QWJvdXQgUHJvamVjdDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5pbWctLXdyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCBncmF5O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAuaW1nLS13cmFwcGVyOmhvdmVyIC5vdmVybGF5IHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4ICR7dGhlbWUuY29sb3JzW1wicGluay1saW5rXCJdfTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4xNXMgZWFzZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpbmt9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8Lz5cbik7XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/actions/projects/PostProj.js */")));
};
var PostProjImg = function PostProjImg(_ref2) {
  var project = _ref2.project;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/proj/[project]",
    as: "/proj/".concat(project),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["322310369", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]) + " " + "img--wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, _database_projects__WEBPACK_IMPORTED_MODULE_4__["projects"].map(function (obj) {
    if (obj.project === project) {
      return __jsx("img", {
        key: Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])(),
        src: obj.cover,
        alt: "picture of ".concat(obj.project),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["322310369", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 15
        }
      });
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["322310369", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]) + " " + "overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["322310369", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]) + " " + "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, "About Project")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "322310369",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link],
    __self: _this
  }, ".img--wrapper.__jsx-style-dynamic-selector{display:block;position:relative;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;box-shadow:1px 1px 5px gray;border-radius:5px;}.img--wrapper.__jsx-style-dynamic-selector:hover .overlay.__jsx-style-dynamic-selector{opacity:0.8;box-shadow:10px 10px ".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], ";border-radius:5px;}img.__jsx-style-dynamic-selector{object-position:50% 50%;}.overlay.__jsx-style-dynamic-selector{position:absolute;cursor:pointer;top:0;bottom:0;left:0;right:0;opacity:0;-webkit-transition:0.15s ease;transition:0.15s ease;background-color:white;}.text.__jsx-style-dynamic-selector{color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, ";font-size:30px;font-weight:500;position:absolute;top:50%;left:50%;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center;}@media screen and (max-width:1024px){img.__jsx-style-dynamic-selector{width:100%;height:auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9hY3Rpb25zL3Byb2plY3RzL1Bvc3RQcm9qLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFTyxBQUd5QixBQVFGLEFBS1ksQUFHTixBQVdpQixBQWN0QixXQUNDLENBakNvQyxFQVJoQyxJQWdCSCxLQTBCZixDQTdCRixRQVpxQixDQWdCYixFQVVTLElBVE4sU0FDRixFQVNTLEtBUlIsT0FYVSxDQVlSLEdBUVEsT0FQSSxPQVp4QixJQW9CVSxRQUNDLFNBQ1Usd0JBOUJELEFBcUJLLGtCQXBCSyxLQXFCOUIsdUJBcEJvQixrQkFDcEIsS0E0QjBDLHVDQUNKLG1DQUNKLHlHQUNkLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL3dlYi1wb3J0Zm9saW8vYWN0aW9ucy9wcm9qZWN0cy9Qb3N0UHJvai5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuLi8uLi9kYXRhYmFzZS9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuZXhwb3J0IGNvbnN0IFBvc3RQcm9qTGluayA9ICh7IHByb2plY3QgPSBcIlBST0pFQ1QgVElUTEVcIiwgb25nb2luZyB9KSA9PiAoXG4gIDw+XG4gICAgPExpbmsgaHJlZj1cIi9wcm9qL1twcm9qZWN0XVwiIGFzPXtgL3Byb2ovJHtwcm9qZWN0fWB9PlxuICAgICAgPGE+e3Byb2plY3R9PC9hPlxuICAgIDwvTGluaz5cblxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5saW5rfTtcbiAgICAgICAgfVxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHRleHQtc2hhZG93OiA2cHggNnB4ICR7dGhlbWUuY29sb3JzW1wicGluay1saW5rXCJdfTtcbiAgICAgICAgfVxuICAgICAgICBhOnZpc2l0ZWQge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5saW5rfTtcbiAgICAgICAgfVxuICAgICAgICBhOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyR7b25nb2luZyA/IFwib25nb2luZ1wiIDogXCJcIn0nO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDk1JTtcbiAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYTpob3Zlcjo6YWZ0ZXIge1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBjb25zdCBQb3N0UHJvakltZyA9ICh7IHByb2plY3QgfSkgPT4gKFxuICA8PlxuICAgIDxMaW5rIGhyZWY9XCIvcHJvai9bcHJvamVjdF1cIiBhcz17YC9wcm9qLyR7cHJvamVjdH1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLS13cmFwcGVyXCI+XG4gICAgICAgIHtwcm9qZWN0cy5tYXAoKG9iaikgPT4ge1xuICAgICAgICAgIGlmIChvYmoucHJvamVjdCA9PT0gcHJvamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGtleT17dXVpZHY0KCl9XG4gICAgICAgICAgICAgICAgc3JjPXtvYmouY292ZXJ9XG4gICAgICAgICAgICAgICAgYWx0PXtgcGljdHVyZSBvZiAke29iai5wcm9qZWN0fWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5BYm91dCBQcm9qZWN0PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLmltZy0td3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IGdyYXk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbWctLXdyYXBwZXI6aG92ZXIgLm92ZXJsYXkge1xuICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggJHt0aGVtZS5jb2xvcnNbXCJwaW5rLWxpbmtcIl19O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgICAgfVxuICAgICAgICAub3ZlcmxheSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMubGlua307XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvPlxuKTtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/actions/projects/PostProj.js */")));
};

/***/ })

})
//# sourceMappingURL=index.js.9211086a6352426d1910.hot-update.js.map