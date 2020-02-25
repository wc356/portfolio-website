webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/pages/blog.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // Add Post

var getPosts = function getPosts() {
  return [{
    id: "self-taught-challenges",
    title: "Challenges of a Self-Taught Developer"
  }, {
    id: "loops",
    title: "Looping through objects"
  }, {
    id: "reflections",
    title: "Current Reflections"
  }];
}; // PostLink Component


var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/p/[title]",
    as: "/p/".concat(post.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1261011492" + " " + "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, post.title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1261011492",
    __self: this
  }, ".nav-link.jsx-1261011492{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQk8sQUFHZ0Msa0RBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvYmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbi8vIEFkZCBQb3N0XG5jb25zdCBnZXRQb3N0cyA9ICgpID0+IFtcbiAge1xuICAgIGlkOiBcInNlbGYtdGF1Z2h0LWNoYWxsZW5nZXNcIixcbiAgICB0aXRsZTogXCJDaGFsbGVuZ2VzIG9mIGEgU2VsZi1UYXVnaHQgRGV2ZWxvcGVyXCJcbiAgfSxcbiAgeyBpZDogXCJsb29wc1wiLCB0aXRsZTogXCJMb29waW5nIHRocm91Z2ggb2JqZWN0c1wiIH0sXG4gIHsgaWQ6IFwicmVmbGVjdGlvbnNcIiwgdGl0bGU6IFwiQ3VycmVudCBSZWZsZWN0aW9uc1wiIH1cbl07XG5cbi8vIFBvc3RMaW5rIENvbXBvbmVudFxuY29uc3QgUG9zdExpbmsgPSAoeyBwb3N0IH0pID0+IChcbiAgPD5cbiAgICA8TGluayBocmVmPVwiL3AvW3RpdGxlXVwiIGFzPXtgL3AvJHtwb3N0LnRpdGxlfWB9PlxuICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj57cG9zdC50aXRsZX08L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAubmF2LWxpbmsge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICAgIDxoMT5UZWNoX0Jsb2c8L2gxPlxuICAgICAgICA8aDI+UG9zdHM8L2gyPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7Z2V0UG9zdHMoKS5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3N0XCIga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgICAgICA8UG9zdExpbmsga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sYXlvdXQge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDIzOSwgMjM5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleC1ib3g7XG4gICAgICAgICAgICB3aWR0aDogODAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogTGlnaHRHcmF5IDBweCAwcHggMTBweCAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/pages/blog.js */"));
};

function Blog() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1434468485" + " " + "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1434468485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Tech_Blog"), __jsx("h2", {
    className: "jsx-1434468485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Posts"), __jsx("section", {
    className: "jsx-1434468485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-1434468485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, getPosts().map(function (post) {
    return __jsx("li", {
      key: post.id,
      className: "jsx-1434468485" + " " + "post",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx(PostLink, {
      key: post.id,
      post: post,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1434468485",
    __self: this
  }, "h1.jsx-1434468485{font-size:50px;margin-bottom:50px;}h2.jsx-1434468485{font-family:Montserrat;margin-bottom:10px;font-size:40px;font-weight:400;}.layout.jsx-1434468485{padding-top:50px;padding-left:120px;line-height:1.5;background-color:rgb(239,239,239);}.nav-link.jsx-1434468485{-webkit-text-decoration:none;text-decoration:none;}.post.jsx-1434468485{display:flex-box;width:800px;background-color:white;padding:40px;margin-bottom:10px;box-shadow:LightGray 0px 0px 10px 0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q1MsQUFHNEIsQUFJUSxBQU1OLEFBTUksQUFHSixlQWxCRSxFQVVBLEFBU1AsTUFmTyxNQWdCSSxLQW5CekIsRUFVa0IsTUFORCxRQVdqQixFQUpzQyxBQVN2QixLQWZHLFFBZ0JHLFFBZnJCLFdBZ0J3QyxFQVZ4QyxvQ0FXQSIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL3BhZ2VzL2Jsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG4vLyBBZGQgUG9zdFxuY29uc3QgZ2V0UG9zdHMgPSAoKSA9PiBbXG4gIHtcbiAgICBpZDogXCJzZWxmLXRhdWdodC1jaGFsbGVuZ2VzXCIsXG4gICAgdGl0bGU6IFwiQ2hhbGxlbmdlcyBvZiBhIFNlbGYtVGF1Z2h0IERldmVsb3BlclwiXG4gIH0sXG4gIHsgaWQ6IFwibG9vcHNcIiwgdGl0bGU6IFwiTG9vcGluZyB0aHJvdWdoIG9iamVjdHNcIiB9LFxuICB7IGlkOiBcInJlZmxlY3Rpb25zXCIsIHRpdGxlOiBcIkN1cnJlbnQgUmVmbGVjdGlvbnNcIiB9XG5dO1xuXG4vLyBQb3N0TGluayBDb21wb25lbnRcbmNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXG4gIDw+XG4gICAgPExpbmsgaHJlZj1cIi9wL1t0aXRsZV1cIiBhcz17YC9wLyR7cG9zdC50aXRsZX1gfT5cbiAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+e3Bvc3QudGl0bGV9PC9hPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgICAgICA8aDE+VGVjaF9CbG9nPC9oMT5cbiAgICAgICAgPGgyPlBvc3RzPC9oMj5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2dldFBvc3RzKCkubWFwKHBvc3QgPT4gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9zdFwiIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICAgICAgPFBvc3RMaW5rIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGF5b3V0IHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMjBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXYtbGluayB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXgtYm94O1xuICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IExpZ2h0R3JheSAwcHggMHB4IDEwcHggMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/pages/blog.js */"));
}

/***/ })

})
//# sourceMappingURL=blog.js.3f3e758fb82f79d5e343.hot-update.js.map