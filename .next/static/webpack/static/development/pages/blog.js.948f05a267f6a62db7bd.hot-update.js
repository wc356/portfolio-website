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
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  // Add Post
  var addPosts = function addPosts() {
    blogContent.map(function (post) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
        key: post.id,
        className: "jsx-3194844772" + " " + "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx(PostLink, {
        key: post.id,
        post: post,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "3194844772",
        __self: this
      }, ".post.jsx-3194844772{display:flex-box;width:800px;background-color:white;padding:40px;margin-bottom:10px;box-shadow:LightGray 0px 0px 10px 0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQlcsQUFHZ0MsaUJBQ0wsWUFDVyx1QkFDVixhQUNNLG1CQUNtQixzQ0FDeEMiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9wYWdlcy9ibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgYmxvZ0NvbnRlbnQgPSBbXG4gIHtcbiAgICBpZDogXCJzZWxmLXRhdWdodC1jaGFsbGVuZ2VzXCIsXG4gICAgdGl0bGU6IFwiQ2hhbGxlbmdlcyBvZiBhIFNlbGYtVGF1Z2h0IERldmVsb3BlclwiXG4gIH0sXG4gIHsgaWQ6IFwibG9vcHNcIiwgdGl0bGU6IFwiTG9vcGluZyB0aHJvdWdoIG9iamVjdHNcIiB9LFxuICB7IGlkOiBcInJlZmxlY3Rpb25zXCIsIHRpdGxlOiBcIkN1cnJlbnQgUmVmbGVjdGlvbnNcIiB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8vIEFkZCBQb3N0XG4gIGNvbnN0IGFkZFBvc3RzID0gKCkgPT4ge1xuICAgIGJsb2dDb250ZW50Lm1hcChwb3N0ID0+IChcbiAgICAgIDw+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3N0XCIga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICA8UG9zdExpbmsga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAucG9zdCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXgtYm94O1xuICAgICAgICAgICAgICB3aWR0aDogODAwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiBMaWdodEdyYXkgMHB4IDBweCAxMHB4IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC8+XG4gICAgKSk7XG4gIH07XG5cbiAgLy8gUG9zdExpbmsgQ29tcG9uZW50XG4gIGNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXG4gICAgPD5cbiAgICAgIDxMaW5rIGhyZWY9XCIvcC9bdGl0bGVdXCIgYXM9e2AvcC8ke3Bvc3QudGl0bGV9YH0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAubmF2LWxpbmsge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICAgICAge2NvbnNvbGUubG9nKHR5cGVvZiBhZGRQb3N0cygpKX1cbiAgICAgICAgPGgxPlRlY2hfQmxvZzwvaDE+XG4gICAgICAgIDxoMj5Qb3N0czwvaDI+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDx1bD57YWRkUG9zdHMoKX08L3VsPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sYXlvdXQge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDIzOSwgMjM5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/pages/blog.js */"));
    });
  }; // PostLink Component


  var PostLink = function PostLink(_ref) {
    var post = _ref.post;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/p/[title]",
      as: "/p/".concat(post.title),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-3216121869" + " " + "nav-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, post.title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3216121869",
      __self: this
    }, ".nav-link.jsx-3216121869{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ1MsQUFHa0Msa0RBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvYmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IGJsb2dDb250ZW50ID0gW1xuICB7XG4gICAgaWQ6IFwic2VsZi10YXVnaHQtY2hhbGxlbmdlc1wiLFxuICAgIHRpdGxlOiBcIkNoYWxsZW5nZXMgb2YgYSBTZWxmLVRhdWdodCBEZXZlbG9wZXJcIlxuICB9LFxuICB7IGlkOiBcImxvb3BzXCIsIHRpdGxlOiBcIkxvb3BpbmcgdGhyb3VnaCBvYmplY3RzXCIgfSxcbiAgeyBpZDogXCJyZWZsZWN0aW9uc1wiLCB0aXRsZTogXCJDdXJyZW50IFJlZmxlY3Rpb25zXCIgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvLyBBZGQgUG9zdFxuICBjb25zdCBhZGRQb3N0cyA9ICgpID0+IHtcbiAgICBibG9nQ29udGVudC5tYXAocG9zdCA9PiAoXG4gICAgICA8PlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9zdFwiIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgPFBvc3RMaW5rIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLnBvc3Qge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4LWJveDtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogTGlnaHRHcmF5IDBweCAwcHggMTBweCAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvPlxuICAgICkpO1xuICB9O1xuXG4gIC8vIFBvc3RMaW5rIENvbXBvbmVudFxuICBjb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxuICAgIDw+XG4gICAgICA8TGluayBocmVmPVwiL3AvW3RpdGxlXVwiIGFzPXtgL3AvJHtwb3N0LnRpdGxlfWB9PlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPntwb3N0LnRpdGxlfTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICAgIHtjb25zb2xlLmxvZyh0eXBlb2YgYWRkUG9zdHMoKSl9XG4gICAgICAgIDxoMT5UZWNoX0Jsb2c8L2gxPlxuICAgICAgICA8aDI+UG9zdHM8L2gyPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8dWw+e2FkZFBvc3RzKCl9PC91bD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGF5b3V0IHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMjBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYXYtbGluayB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/pages/blog.js */"));
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3247215638" + " " + "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, console.log(typeof addPosts()), __jsx("h1", {
    className: "jsx-3247215638",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Tech_Blog"), __jsx("h2", {
    className: "jsx-3247215638",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Posts"), __jsx("section", {
    className: "jsx-3247215638",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-3247215638",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, addPosts()))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3247215638",
    __self: this
  }, "h1.jsx-3247215638{font-size:50px;font-weight:500;margin-bottom:50px;}h2.jsx-3247215638{font-family:Montserrat;margin-bottom:10px;font-size:40px;font-weight:400;}.layout.jsx-3247215638{padding-top:50px;padding-left:120px;line-height:1.5;background-color:rgb(239,239,239);}.nav-link.jsx-3247215638{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRFMsQUFHNEIsQUFLUSxBQU1OLEFBTUksZUFoQkwsRUFXRyxNQU5BLFFBSkEsS0FXSCxNQU5ELFFBSmpCLEFBZUEsRUFKc0MsS0FOcEIsZ0JBQ2xCLGFBTUEiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9wYWdlcy9ibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgYmxvZ0NvbnRlbnQgPSBbXG4gIHtcbiAgICBpZDogXCJzZWxmLXRhdWdodC1jaGFsbGVuZ2VzXCIsXG4gICAgdGl0bGU6IFwiQ2hhbGxlbmdlcyBvZiBhIFNlbGYtVGF1Z2h0IERldmVsb3BlclwiXG4gIH0sXG4gIHsgaWQ6IFwibG9vcHNcIiwgdGl0bGU6IFwiTG9vcGluZyB0aHJvdWdoIG9iamVjdHNcIiB9LFxuICB7IGlkOiBcInJlZmxlY3Rpb25zXCIsIHRpdGxlOiBcIkN1cnJlbnQgUmVmbGVjdGlvbnNcIiB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8vIEFkZCBQb3N0XG4gIGNvbnN0IGFkZFBvc3RzID0gKCkgPT4ge1xuICAgIGJsb2dDb250ZW50Lm1hcChwb3N0ID0+IChcbiAgICAgIDw+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3N0XCIga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICA8UG9zdExpbmsga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAucG9zdCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXgtYm94O1xuICAgICAgICAgICAgICB3aWR0aDogODAwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiBMaWdodEdyYXkgMHB4IDBweCAxMHB4IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC8+XG4gICAgKSk7XG4gIH07XG5cbiAgLy8gUG9zdExpbmsgQ29tcG9uZW50XG4gIGNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiAoXG4gICAgPD5cbiAgICAgIDxMaW5rIGhyZWY9XCIvcC9bdGl0bGVdXCIgYXM9e2AvcC8ke3Bvc3QudGl0bGV9YH0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAubmF2LWxpbmsge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICAgICAge2NvbnNvbGUubG9nKHR5cGVvZiBhZGRQb3N0cygpKX1cbiAgICAgICAgPGgxPlRlY2hfQmxvZzwvaDE+XG4gICAgICAgIDxoMj5Qb3N0czwvaDI+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDx1bD57YWRkUG9zdHMoKX08L3VsPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sYXlvdXQge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDIzOSwgMjM5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdi1saW5rIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/pages/blog.js */"));
});

/***/ })

})
//# sourceMappingURL=blog.js.948f05a267f6a62db7bd.hot-update.js.map