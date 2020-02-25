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


var blogContent = [{
  id: "self-taught-challenges",
  title: "Challenges of a Self-Taught Developer"
}, {
  id: "loops",
  title: "Looping through objects"
}, {
  id: "reflections",
  title: "Current Reflections"
}]; // Add Post

var getPosts = function getPosts() {
  blogContent.map(function (post) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
      key: post.id,
      className: "jsx-1149011438" + " " + "post",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx(PostLink, {
      key: post.id,
      post: post,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1149011438",
      __self: this
    }, ".post.jsx-1149011438{display:flex-box;width:800px;background-color:white;padding:40px;margin-bottom:10px;box-shadow:LightGray 0px 0px 10px 0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQlMsQUFHOEIsaUJBQ0wsWUFDVyx1QkFDVixhQUNNLG1CQUNtQixzQ0FDeEMiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9wYWdlcy9ibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgYmxvZ0NvbnRlbnQgPSBbXG4gIHtcbiAgICBpZDogXCJzZWxmLXRhdWdodC1jaGFsbGVuZ2VzXCIsXG4gICAgdGl0bGU6IFwiQ2hhbGxlbmdlcyBvZiBhIFNlbGYtVGF1Z2h0IERldmVsb3BlclwiXG4gIH0sXG4gIHsgaWQ6IFwibG9vcHNcIiwgdGl0bGU6IFwiTG9vcGluZyB0aHJvdWdoIG9iamVjdHNcIiB9LFxuICB7IGlkOiBcInJlZmxlY3Rpb25zXCIsIHRpdGxlOiBcIkN1cnJlbnQgUmVmbGVjdGlvbnNcIiB9XG5dO1xuXG4vLyBBZGQgUG9zdFxuY29uc3QgZ2V0UG9zdHMgPSAoKSA9PiB7XG4gIGJsb2dDb250ZW50Lm1hcChwb3N0ID0+IChcbiAgICA8PlxuICAgICAgPGxpIGNsYXNzTmFtZT1cInBvc3RcIiBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICA8UG9zdExpbmsga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuICAgICAgPC9saT5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLnBvc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleC1ib3g7XG4gICAgICAgICAgICB3aWR0aDogODAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogTGlnaHRHcmF5IDBweCAwcHggMTBweCAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKSk7XG59O1xuXG4vLyBQb3N0TGluayBDb21wb25lbnRcbmNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXG4gIDw+XG4gICAgPExpbmsgaHJlZj1cIi9wL1t0aXRsZV1cIiBhcz17YC9wLyR7cG9zdC50aXRsZX1gfT5cbiAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+e3Bvc3QudGl0bGV9PC9hPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgICAgICA8aDE+VGVjaF9CbG9nPC9oMT5cbiAgICAgICAgPGgyPlBvc3RzPC9oMj5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPHVsPntnZXRQb3N0cygpfTwvdWw+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGF5b3V0IHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMjBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXYtbGluayB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/pages/blog.js */"));
  });
}; // PostLink Component


var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/p/[title]",
    as: "/p/".concat(post.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1261011492" + " " + "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, post.title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1261011492",
    __self: this
  }, ".nav-link.jsx-1261011492{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ08sQUFHZ0Msa0RBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvYmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IGJsb2dDb250ZW50ID0gW1xuICB7XG4gICAgaWQ6IFwic2VsZi10YXVnaHQtY2hhbGxlbmdlc1wiLFxuICAgIHRpdGxlOiBcIkNoYWxsZW5nZXMgb2YgYSBTZWxmLVRhdWdodCBEZXZlbG9wZXJcIlxuICB9LFxuICB7IGlkOiBcImxvb3BzXCIsIHRpdGxlOiBcIkxvb3BpbmcgdGhyb3VnaCBvYmplY3RzXCIgfSxcbiAgeyBpZDogXCJyZWZsZWN0aW9uc1wiLCB0aXRsZTogXCJDdXJyZW50IFJlZmxlY3Rpb25zXCIgfVxuXTtcblxuLy8gQWRkIFBvc3RcbmNvbnN0IGdldFBvc3RzID0gKCkgPT4ge1xuICBibG9nQ29udGVudC5tYXAocG9zdCA9PiAoXG4gICAgPD5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3N0XCIga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgPFBvc3RMaW5rIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cbiAgICAgIDwvbGk+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5wb3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXgtYm94O1xuICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IExpZ2h0R3JheSAwcHggMHB4IDEwcHggMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICkpO1xufTtcblxuLy8gUG9zdExpbmsgQ29tcG9uZW50XG5jb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxuICA8PlxuICAgIDxMaW5rIGhyZWY9XCIvcC9bdGl0bGVdXCIgYXM9e2AvcC8ke3Bvc3QudGl0bGV9YH0+XG4gICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPntwb3N0LnRpdGxlfTwvYT5cbiAgICA8L0xpbms+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5uYXYtbGluayB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICAgICAgPGgxPlRlY2hfQmxvZzwvaDE+XG4gICAgICAgIDxoMj5Qb3N0czwvaDI+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDx1bD57Z2V0UG9zdHMoKX08L3VsPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxheW91dCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTIwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMjM5LCAyMzkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2LWxpbmsge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/pages/blog.js */"));
};

function Blog() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-342022690" + " " + "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-342022690",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Tech_Blog"), __jsx("h2", {
    className: "jsx-342022690",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Posts"), __jsx("section", {
    className: "jsx-342022690",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-342022690",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, getPosts()))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "342022690",
    __self: this
  }, "h1.jsx-342022690{font-size:50px;margin-bottom:50px;}h2.jsx-342022690{font-family:Montserrat;margin-bottom:10px;font-size:40px;font-weight:400;}.layout.jsx-342022690{padding-top:50px;padding-left:120px;line-height:1.5;background-color:rgb(239,239,239);}.nav-link.jsx-342022690{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RFMsQUFHNEIsQUFJUSxBQU1OLEFBTUksZUFmRixFQVVBLE1BTkEsV0FIckIsRUFVa0IsTUFORCxRQVdqQixFQUpzQyxLQU5wQixnQkFDbEIsYUFNQSIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL3BhZ2VzL2Jsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBibG9nQ29udGVudCA9IFtcbiAge1xuICAgIGlkOiBcInNlbGYtdGF1Z2h0LWNoYWxsZW5nZXNcIixcbiAgICB0aXRsZTogXCJDaGFsbGVuZ2VzIG9mIGEgU2VsZi1UYXVnaHQgRGV2ZWxvcGVyXCJcbiAgfSxcbiAgeyBpZDogXCJsb29wc1wiLCB0aXRsZTogXCJMb29waW5nIHRocm91Z2ggb2JqZWN0c1wiIH0sXG4gIHsgaWQ6IFwicmVmbGVjdGlvbnNcIiwgdGl0bGU6IFwiQ3VycmVudCBSZWZsZWN0aW9uc1wiIH1cbl07XG5cbi8vIEFkZCBQb3N0XG5jb25zdCBnZXRQb3N0cyA9ICgpID0+IHtcbiAgYmxvZ0NvbnRlbnQubWFwKHBvc3QgPT4gKFxuICAgIDw+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwicG9zdFwiIGtleT17cG9zdC5pZH0+XG4gICAgICAgIDxQb3N0TGluayBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XG4gICAgICA8L2xpPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAucG9zdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4LWJveDtcbiAgICAgICAgICAgIHdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBMaWdodEdyYXkgMHB4IDBweCAxMHB4IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApKTtcbn07XG5cbi8vIFBvc3RMaW5rIENvbXBvbmVudFxuY29uc3QgUG9zdExpbmsgPSAoeyBwb3N0IH0pID0+IChcbiAgPD5cbiAgICA8TGluayBocmVmPVwiL3AvW3RpdGxlXVwiIGFzPXtgL3AvJHtwb3N0LnRpdGxlfWB9PlxuICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj57cG9zdC50aXRsZX08L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAubmF2LWxpbmsge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICAgIDxoMT5UZWNoX0Jsb2c8L2gxPlxuICAgICAgICA8aDI+UG9zdHM8L2gyPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8dWw+e2dldFBvc3RzKCl9PC91bD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sYXlvdXQge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDIzOSwgMjM5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/pages/blog.js */"));
}

/***/ })

})
//# sourceMappingURL=blog.js.07aca7468abcbf3c9dd1.hot-update.js.map