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
}, {
  id: "GitHub Contribution Struggles",
  title: "My Thoughts on GitHub Contributions"
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  // Add Post
  var addPosts = function addPosts() {
    var posts = blogContent.map(function (post) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
        key: post.id,
        className: "jsx-3194844772" + " " + "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx(PostLink, {
        key: post.id,
        post: post,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "3194844772",
        __self: this
      }, ".post.jsx-3194844772{display:flex-box;width:800px;background-color:white;padding:40px;margin-bottom:10px;box-shadow:LightGray 0px 0px 10px 0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QlcsQUFHZ0MsaUJBQ0wsWUFDVyx1QkFDVixhQUNNLG1CQUNtQixzQ0FDeEMiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9wYWdlcy9ibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgYmxvZ0NvbnRlbnQgPSBbXG4gIHtcbiAgICBpZDogXCJzZWxmLXRhdWdodC1jaGFsbGVuZ2VzXCIsXG4gICAgdGl0bGU6IFwiQ2hhbGxlbmdlcyBvZiBhIFNlbGYtVGF1Z2h0IERldmVsb3BlclwiXG4gIH0sXG4gIHsgaWQ6IFwibG9vcHNcIiwgdGl0bGU6IFwiTG9vcGluZyB0aHJvdWdoIG9iamVjdHNcIiB9LFxuICB7IGlkOiBcInJlZmxlY3Rpb25zXCIsIHRpdGxlOiBcIkN1cnJlbnQgUmVmbGVjdGlvbnNcIiB9LFxuICB7XG4gICAgaWQ6IFwiR2l0SHViIENvbnRyaWJ1dGlvbiBTdHJ1Z2dsZXNcIixcbiAgICB0aXRsZTogXCJNeSBUaG91Z2h0cyBvbiBHaXRIdWIgQ29udHJpYnV0aW9uc1wiXG4gIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLy8gQWRkIFBvc3RcbiAgY29uc3QgYWRkUG9zdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9zdHMgPSBibG9nQ29udGVudC5tYXAocG9zdCA9PiAoXG4gICAgICA8PlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9zdFwiIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgPFBvc3RMaW5rIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLnBvc3Qge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4LWJveDtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogTGlnaHRHcmF5IDBweCAwcHggMTBweCAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvPlxuICAgICkpO1xuICAgIHJldHVybiBwb3N0cztcbiAgfTtcblxuICAvLyBQb3N0TGluayBDb21wb25lbnRcbiAgY29uc3QgUG9zdExpbmsgPSAoeyBwb3N0IH0pID0+IChcbiAgICA8PlxuICAgICAgPExpbmsgaHJlZj1cIi9wL1t0aXRsZV1cIiBhcz17YC9wLyR7cG9zdC50aXRsZX1gfT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj57cG9zdC50aXRsZX08L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5uYXYtbGluayB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgICAgICB7Y29uc29sZS5sb2codHlwZW9mIGFkZFBvc3RzKCkpfVxuICAgICAgICA8aDE+VGVjaF9CbG9nPC9oMT5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPHVsPnthZGRQb3N0cygpfTwvdWw+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxheW91dCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTIwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMjM5LCAyMzkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2LWxpbmsge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/pages/blog.js */"));
    });
    return posts;
  }; // PostLink Component


  var PostLink = function PostLink(_ref) {
    var post = _ref.post;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/p/[title]",
      as: "/p/".concat(post.title),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3216121869" + " " + "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, post.title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3216121869",
      __self: this
    }, ".nav-link.jsx-3216121869{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRFMsQUFHa0Msa0RBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvYmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IGJsb2dDb250ZW50ID0gW1xuICB7XG4gICAgaWQ6IFwic2VsZi10YXVnaHQtY2hhbGxlbmdlc1wiLFxuICAgIHRpdGxlOiBcIkNoYWxsZW5nZXMgb2YgYSBTZWxmLVRhdWdodCBEZXZlbG9wZXJcIlxuICB9LFxuICB7IGlkOiBcImxvb3BzXCIsIHRpdGxlOiBcIkxvb3BpbmcgdGhyb3VnaCBvYmplY3RzXCIgfSxcbiAgeyBpZDogXCJyZWZsZWN0aW9uc1wiLCB0aXRsZTogXCJDdXJyZW50IFJlZmxlY3Rpb25zXCIgfSxcbiAge1xuICAgIGlkOiBcIkdpdEh1YiBDb250cmlidXRpb24gU3RydWdnbGVzXCIsXG4gICAgdGl0bGU6IFwiTXkgVGhvdWdodHMgb24gR2l0SHViIENvbnRyaWJ1dGlvbnNcIlxuICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8vIEFkZCBQb3N0XG4gIGNvbnN0IGFkZFBvc3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvc3RzID0gYmxvZ0NvbnRlbnQubWFwKHBvc3QgPT4gKFxuICAgICAgPD5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvc3RcIiBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgIDxQb3N0TGluayBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5wb3N0IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleC1ib3g7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IExpZ2h0R3JheSAwcHggMHB4IDEwcHggMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8Lz5cbiAgICApKTtcbiAgICByZXR1cm4gcG9zdHM7XG4gIH07XG5cbiAgLy8gUG9zdExpbmsgQ29tcG9uZW50XG4gIGNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXG4gICAgPD5cbiAgICAgIDxMaW5rIGhyZWY9XCIvcC9bdGl0bGVdXCIgYXM9e2AvcC8ke3Bvc3QudGl0bGV9YH0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAubmF2LWxpbmsge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICAgICAge2NvbnNvbGUubG9nKHR5cGVvZiBhZGRQb3N0cygpKX1cbiAgICAgICAgPGgxPlRlY2hfQmxvZzwvaDE+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDx1bD57YWRkUG9zdHMoKX08L3VsPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sYXlvdXQge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDIzOSwgMjM5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/pages/blog.js */"));
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-453676728" + " " + "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, console.log(typeof addPosts()), __jsx("h1", {
    className: "jsx-453676728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Tech_Blog"), __jsx("section", {
    className: "jsx-453676728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-453676728",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, addPosts()))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "453676728",
    __self: this
  }, "h1.jsx-453676728{font-size:50px;font-weight:500;margin-bottom:30px;}.layout.jsx-453676728{padding-top:50px;padding-left:120px;line-height:1.5;background-color:rgb(239,239,239);}.nav-link.jsx-453676728{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRVMsQUFHNEIsQUFLRSxBQU1JLGVBVkwsRUFLRyxjQUpBLEtBS0gsY0FKbEIsQUFTQSxFQUpzQyxrQ0FDdEMiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9wYWdlcy9ibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgYmxvZ0NvbnRlbnQgPSBbXG4gIHtcbiAgICBpZDogXCJzZWxmLXRhdWdodC1jaGFsbGVuZ2VzXCIsXG4gICAgdGl0bGU6IFwiQ2hhbGxlbmdlcyBvZiBhIFNlbGYtVGF1Z2h0IERldmVsb3BlclwiXG4gIH0sXG4gIHsgaWQ6IFwibG9vcHNcIiwgdGl0bGU6IFwiTG9vcGluZyB0aHJvdWdoIG9iamVjdHNcIiB9LFxuICB7IGlkOiBcInJlZmxlY3Rpb25zXCIsIHRpdGxlOiBcIkN1cnJlbnQgUmVmbGVjdGlvbnNcIiB9LFxuICB7XG4gICAgaWQ6IFwiR2l0SHViIENvbnRyaWJ1dGlvbiBTdHJ1Z2dsZXNcIixcbiAgICB0aXRsZTogXCJNeSBUaG91Z2h0cyBvbiBHaXRIdWIgQ29udHJpYnV0aW9uc1wiXG4gIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLy8gQWRkIFBvc3RcbiAgY29uc3QgYWRkUG9zdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9zdHMgPSBibG9nQ29udGVudC5tYXAocG9zdCA9PiAoXG4gICAgICA8PlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9zdFwiIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgPFBvc3RMaW5rIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLnBvc3Qge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4LWJveDtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogTGlnaHRHcmF5IDBweCAwcHggMTBweCAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvPlxuICAgICkpO1xuICAgIHJldHVybiBwb3N0cztcbiAgfTtcblxuICAvLyBQb3N0TGluayBDb21wb25lbnRcbiAgY29uc3QgUG9zdExpbmsgPSAoeyBwb3N0IH0pID0+IChcbiAgICA8PlxuICAgICAgPExpbmsgaHJlZj1cIi9wL1t0aXRsZV1cIiBhcz17YC9wLyR7cG9zdC50aXRsZX1gfT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj57cG9zdC50aXRsZX08L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5uYXYtbGluayB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxuICAgICAgICB7Y29uc29sZS5sb2codHlwZW9mIGFkZFBvc3RzKCkpfVxuICAgICAgICA8aDE+VGVjaF9CbG9nPC9oMT5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPHVsPnthZGRQb3N0cygpfTwvdWw+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxheW91dCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTIwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMjM5LCAyMzkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmF2LWxpbmsge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/pages/blog.js */"));
});

/***/ })

})
//# sourceMappingURL=blog.js.cb5f99ba68e75b618a2d.hot-update.js.map