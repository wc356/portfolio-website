webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_storage_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data_storage/database */ "./data_storage/database.js");
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/pages/blog.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;
// import Link from "next/link";






/* harmony default export */ __webpack_exports__["default"] = (function () {
  // Add Post
  var addPosts = function addPosts() {
    var posts = _data_storage_database__WEBPACK_IMPORTED_MODULE_6__["blogContent"].map(function (post) {
      return __jsx("li", {
        key: post.id,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["799426767", [_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.black]]]) + " " + "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/p/[title]",
        as: "/p/".concat(post.title),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["799426767", [_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.black]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, post.title)), __jsx("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["799426767", [_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.black]]]) + " " + "date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "added Oct. 12 2019"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "799426767",
        dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.black],
        __self: this
      }, ".post.__jsx-style-dynamic-selector{display:block;height:200px;width:200px;border:".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.gray, " 1px solid;border-radius:10px;padding:20px;margin-bottom:10px;word-break:break-word;}.__jsx-style-dynamic-selector,a.__jsx-style-dynamic-selector{color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.black, ";-webkit-text-decoration:none;text-decoration:none;font-size:16px;font-weight:600;}.__jsx-style-dynamic-selector,.date.__jsx-style-dynamic-selector{font-size:14px;margin-top:5px;color:").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.black, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQlcsQUFHNkIsQUFXcUIsQUFPcEIsY0FqQkYsQ0FrQkUsWUFqQkgsR0FrQnVCLEtBUmQsSUFUeUIsMEJBa0JoRCxvQkFqQnFCLEFBU0osZUFDQyxJQVRILFlBVWYsQ0FUcUIsbUJBQ0csc0JBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvYmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGJsb2dDb250ZW50IH0gZnJvbSBcIi4uL2RhdGFfc3RvcmFnZS9kYXRhYmFzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8vIEFkZCBQb3N0XG4gIGNvbnN0IGFkZFBvc3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvc3RzID0gYmxvZ0NvbnRlbnQubWFwKHBvc3QgPT4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT1cInBvc3RcIiBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICA8TGluayBocmVmPVwiL3AvW3RpdGxlXVwiIGFzPXtgL3AvJHtwb3N0LnRpdGxlfWB9PlxuICAgICAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkYXRlXCI+YWRkZWQgT2N0LiAxMiAyMDE5PC9wPlxuICAgICAgICB7LyogPFBvc3RMaW5rIHBvc3Q9e3Bvc3R9PjwvUG9zdExpbms+ICovfVxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAucG9zdCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogJHt0aGVtZS5jb2xvcnMuZ3JheX0gMXB4IHNvbGlkO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLFxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibGFja307XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLFxuICAgICAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmJsYWNrfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9saT5cbiAgICApKTtcbiAgICByZXR1cm4gcG9zdHM7XG4gIH07XG5cbiAgLy8gUG9zdExpbmsgQ29tcG9uZW50XG4gIC8vIGNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXG4gIC8vICAgPD5cbiAgLy8gICAgIDxMaW5rIGhyZWY9XCIvcC9bdGl0bGVdXCIgYXM9e2AvcC8ke3Bvc3QudGl0bGV9YH0+XG4gIC8vICAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgLy8gICAgIDwvTGluaz5cbiAgLy8gICAgIDxwIGNsYXNzTmFtZT1cImRhdGVcIj5hZGRlZCBPY3QuIDEyIDIwMTk8L3A+XG4gIC8vICAgICA8c3R5bGUganN4PlxuICAvLyAgICAgICB7YFxuICAvLyAgICAgICAgIGEge1xuICAvLyAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmJsYWNrfTtcbiAgLy8gICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgLy8gICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgLy8gICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICAgIC5kYXRlIHtcbiAgLy8gICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgLy8gICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgLy8gICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibGFja307XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICBgfVxuICAvLyAgICAgPC9zdHlsZT5cbiAgLy8gICA8Lz5cbiAgLy8gKTtcblxuICAvLyBMYXlvdXRcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNhcmRcIj57YWRkUG9zdHMoKX08L3VsPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sYXlvdXQge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDcwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/pages/blog.js */")));
    });
    return posts;
  }; // PostLink Component
  // const PostLink = ({ post }) => (
  //   <>
  //     <Link href="/p/[title]" as={`/p/${post.title}`}>
  //       <a>{post.title}</a>
  //     </Link>
  //     <p className="date">added Oct. 12 2019</p>
  //     <style jsx>
  //       {`
  //         a {
  //           color: ${theme.colors.black};
  //           text-decoration: none;
  //           font-size: 16px;
  //           font-weight: 600;
  //         }
  //         .date {
  //           font-size: 14px;
  //           margin-top: 5px;
  //           color: ${theme.colors.black};
  //         }
  //       `}
  //     </style>
  //   </>
  // );
  // Layout


  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2110271720" + " " + "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-2110271720",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-2110271720" + " " + "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, addPosts()))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2110271720",
    __self: this
  }, "h1.jsx-2110271720{color:black;font-size:60px;font-weight:400;margin-bottom:20px;}.layout.jsx-2110271720{padding-top:70px;padding-left:120px;padding-right:30px;min-height:100vh;}.card.jsx-2110271720{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:90px;border-radius:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRlMsQUFHeUIsQUFNSyxBQU1KLFlBWEUsS0FNSSxVQUxILFNBTUcsT0FMQSxZQU1GLE9BTG5CLFVBTUEsRUFHZ0MsbUhBQ2YseURBQ0csa0JBQ0MsbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvYmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGJsb2dDb250ZW50IH0gZnJvbSBcIi4uL2RhdGFfc3RvcmFnZS9kYXRhYmFzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8vIEFkZCBQb3N0XG4gIGNvbnN0IGFkZFBvc3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvc3RzID0gYmxvZ0NvbnRlbnQubWFwKHBvc3QgPT4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT1cInBvc3RcIiBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICA8TGluayBocmVmPVwiL3AvW3RpdGxlXVwiIGFzPXtgL3AvJHtwb3N0LnRpdGxlfWB9PlxuICAgICAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkYXRlXCI+YWRkZWQgT2N0LiAxMiAyMDE5PC9wPlxuICAgICAgICB7LyogPFBvc3RMaW5rIHBvc3Q9e3Bvc3R9PjwvUG9zdExpbms+ICovfVxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAucG9zdCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogJHt0aGVtZS5jb2xvcnMuZ3JheX0gMXB4IHNvbGlkO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLFxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibGFja307XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLFxuICAgICAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmJsYWNrfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9saT5cbiAgICApKTtcbiAgICByZXR1cm4gcG9zdHM7XG4gIH07XG5cbiAgLy8gUG9zdExpbmsgQ29tcG9uZW50XG4gIC8vIGNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXG4gIC8vICAgPD5cbiAgLy8gICAgIDxMaW5rIGhyZWY9XCIvcC9bdGl0bGVdXCIgYXM9e2AvcC8ke3Bvc3QudGl0bGV9YH0+XG4gIC8vICAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgLy8gICAgIDwvTGluaz5cbiAgLy8gICAgIDxwIGNsYXNzTmFtZT1cImRhdGVcIj5hZGRlZCBPY3QuIDEyIDIwMTk8L3A+XG4gIC8vICAgICA8c3R5bGUganN4PlxuICAvLyAgICAgICB7YFxuICAvLyAgICAgICAgIGEge1xuICAvLyAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmJsYWNrfTtcbiAgLy8gICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgLy8gICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgLy8gICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICAgIC5kYXRlIHtcbiAgLy8gICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgLy8gICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgLy8gICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibGFja307XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICBgfVxuICAvLyAgICAgPC9zdHlsZT5cbiAgLy8gICA8Lz5cbiAgLy8gKTtcblxuICAvLyBMYXlvdXRcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNhcmRcIj57YWRkUG9zdHMoKX08L3VsPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sYXlvdXQge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDcwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/pages/blog.js */"));
});

/***/ })

})
//# sourceMappingURL=blog.js.32d3d38f86ec25c3d9f4.hot-update.js.map