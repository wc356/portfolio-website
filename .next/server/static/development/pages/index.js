module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var _public_images_expensify_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/images/expensify.png */ "./public/images/expensify.png");
/* harmony import */ var _public_images_expensify_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_images_expensify_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/actions/Post.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const PostLink = ({
  id = "PROJECT TITLE"
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
  href: "/p/[id]",
  as: `/p/${id}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("a", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2141343968", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, id)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2141343968",
  dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark],
  __self: undefined
}, `.title.__jsx-style-dynamic-selector{font-size:25px;font-weight:600;-webkit-text-decoration:none;text-decoration:none;color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark};}.title.__jsx-style-dynamic-selector:hover{opacity:1;text-shadow:4px 4px rgba(255,153,204,0.7);}a.__jsx-style-dynamic-selector:visited{color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vYWN0aW9ucy9Qb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVPLEFBRzBCLEFBTUwsQUFJeUIsVUFIVSxLQU43QixnQkFDSyxJQVN2QixpQkFIQSw2QkFMcUMsbUNBQ3JDIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vYWN0aW9ucy9Qb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBFeHBlbnNpZnlQaWMgZnJvbSBcIi4uL3B1YmxpYy9pbWFnZXMvZXhwZW5zaWZ5LnBuZ1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgY29uc3QgUG9zdExpbmsgPSAoeyBpZCA9IFwiUFJPSkVDVCBUSVRMRVwiIH0pID0+IChcbiAgPD5cbiAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtpZH1gfT5cbiAgICAgIDxhIGNsYXNzTmFtZT1cInRpdGxlXCI+e2lkfTwvYT5cbiAgICA8L0xpbms+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5kYXJrfTtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGU6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDRweCA0cHggcmdiYSgyNTUsIDE1MywgMjA0LCAwLjcpO1xuICAgICAgICB9XG4gICAgICAgIGE6dmlzaXRlZCB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmRhcmt9O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGNvbnN0IFBvc3RJbWcgPSAoeyBpZCB9KSA9PiAoXG4gIDw+XG4gICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7aWR9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy0td3JhcHBlclwiPlxuICAgICAgICA8aW1nIHNyYz17RXhwZW5zaWZ5UGljfSBhbHQ9XCJwaWN0dXJlIG9mIHByb2plY3QgRXhwZW5zaWZ5XCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPlNlZSBQcm9qZWN0PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLmltZy0td3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgaGVpZ2h0OiAzNDhweDtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAuaW1nLS13cmFwcGVyOmhvdmVyIC5vdmVybGF5IHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5saW5rfTtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvPlxuKTtcbiJdfQ== */
/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/actions/Post.js */`));
const PostImg = ({
  id
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
  href: "/p/[id]",
  as: `/p/${id}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1154048393", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]) + " " + "img--wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx("img", {
  src: _public_images_expensify_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  alt: "picture of project Expensify",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1154048393", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}), __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1154048393", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]) + " " + "overlay",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, __jsx("p", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1154048393", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]) + " " + "text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, "See Project")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1154048393",
  dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link],
  __self: undefined
}, `.img--wrapper.__jsx-style-dynamic-selector{display:block;position:relative;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}img.__jsx-style-dynamic-selector{width:100%;object-fit:cover;height:348px;object-position:50% 50%;}.overlay.__jsx-style-dynamic-selector{position:absolute;cursor:pointer;top:0;bottom:0;left:0;right:0;height:100%;width:100%;opacity:0;-webkit-transition:0.3s ease;transition:0.3s ease;background-color:white;}.img--wrapper.__jsx-style-dynamic-selector:hover .overlay.__jsx-style-dynamic-selector{opacity:0.6;}.text.__jsx-style-dynamic-selector{color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link};font-size:30px;font-weight:500;position:absolute;top:50%;left:50%;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vYWN0aW9ucy9Qb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDTyxBQUd5QixBQU1ILEFBTU8sQUFhTixBQUd1QixXQXJCbEIsQ0FtQm5CLEVBekJvQixJQVlILFVBTEYsSUFOTSxDQVliLEVBZVMsSUFkTixFQU5lLE9BT2pCLEVBY1MsS0FiUixRQUNJLEVBUmQsQ0FxQm9CLFNBWlAsU0FhSCxFQVpFLE1BYUQsSUFaWSxLQWFGLHdCQS9CRCxrQkFDcEIsR0FrQnlCLHVCQUN6Qix5QkFZMEMsdUNBQ0osbUNBQ0oseUdBQ2Qsa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vYWN0aW9ucy9Qb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBFeHBlbnNpZnlQaWMgZnJvbSBcIi4uL3B1YmxpYy9pbWFnZXMvZXhwZW5zaWZ5LnBuZ1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgY29uc3QgUG9zdExpbmsgPSAoeyBpZCA9IFwiUFJPSkVDVCBUSVRMRVwiIH0pID0+IChcbiAgPD5cbiAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtpZH1gfT5cbiAgICAgIDxhIGNsYXNzTmFtZT1cInRpdGxlXCI+e2lkfTwvYT5cbiAgICA8L0xpbms+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5kYXJrfTtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGU6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDRweCA0cHggcmdiYSgyNTUsIDE1MywgMjA0LCAwLjcpO1xuICAgICAgICB9XG4gICAgICAgIGE6dmlzaXRlZCB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmRhcmt9O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGNvbnN0IFBvc3RJbWcgPSAoeyBpZCB9KSA9PiAoXG4gIDw+XG4gICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7aWR9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy0td3JhcHBlclwiPlxuICAgICAgICA8aW1nIHNyYz17RXhwZW5zaWZ5UGljfSBhbHQ9XCJwaWN0dXJlIG9mIHByb2plY3QgRXhwZW5zaWZ5XCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPlNlZSBQcm9qZWN0PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLmltZy0td3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgaGVpZ2h0OiAzNDhweDtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAuaW1nLS13cmFwcGVyOmhvdmVyIC5vdmVybGF5IHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5saW5rfTtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvPlxuKTtcbiJdfQ== */
/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/actions/Post.js */`));

/***/ }),

/***/ "./components/About.js":
/*!*****************************!*\
  !*** ./components/About.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var _public_images_profile_pic_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/images/profile_pic.png */ "./public/images/profile_pic.png");
/* harmony import */ var _public_images_profile_pic_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_images_profile_pic_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/components/About.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const About = () => __jsx("div", {
  className: "jsx-2677604933" + " " + "main",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("section", {
  className: "jsx-2677604933" + " " + "img-wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2677604933" + " " + "img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("img", {
  src: _public_images_profile_pic_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  alt: "profile picture",
  className: "jsx-2677604933",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}))), __jsx("section", {
  className: "jsx-2677604933" + " " + "about-wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2677604933" + " " + "about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("h1", {
  className: "jsx-2677604933",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "Think, design, code."), __jsx("p", {
  className: "jsx-2677604933",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "Woo Young Choi is an upcoming UI/UX Designer & Front-End Web Developer based in New York, NY. Throughout his studio-based design education in Cornell University, Woo embraced the sublime notion of \u201Csimplicity\u201D and continues to explore its integration with two core web mediums\u2014design and code. He has 1 year of professional experience working as a designer in Alexandria, VA and is a certified LEED Green Associate. Woo currently resides in Cliffside Park, NJ, where he devotes most of his time developing Full-stack Web Applications and Front-end Websites using ReactJS as his preferred method."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2677604933",
  __self: undefined
}, ".main.jsx-2677604933{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:300px 100px;}.img-wrapper.jsx-2677604933{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;width:50%;}.img.jsx-2677604933{display:block;height:400px;min-width:400px;overflow:hidden;position:relative;text-align:center;}img.jsx-2677604933{height:100%;max-width:75%;object-fit:cover;object-position:50% 50%;width:450px;}.about-wrapper.jsx-2677604933{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:50%;}.about.jsx-2677604933{font-size:18px;padding-left:10px;}h1.jsx-2677604933{font-family:Montserrat;font-size:45px;text-align:left;margin-bottom:30px;}p.jsx-2677604933{font-family:Montserrat;font-size:16px;line-height:35px;padding-right:60px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9BYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQk8sQUFHOEIsQUFNTixBQU1DLEFBUUYsQUFRQyxBQUlFLEFBSVEsQUFNQSxZQXJCVCxFQVJELENBb0JLLFFBSUgsQUFNQSxHQXJCRSxDQVJELE1Bb0JsQixLQUlrQixBQU1DLEtBN0JELEFBUVEsV0FnQkwsQ0FNQSxJQTdCRCxRQVFOLE1BZ0JkLENBakN5QixBQXNCYixBQWlCWixHQTdCb0IsRUFRcEIsS0FLQSxTQTdCZSxFQWlCZix3RUFoQmdDLE1BTWQsZ0JBQ04sVUFDWixtRkFQcUIsbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9BYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgUHJvZmlsZVBpYyBmcm9tIFwiLi4vcHVibGljL2ltYWdlcy9wcm9maWxlX3BpYy5wbmdcIjtcblxuY29uc3QgQWJvdXQgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImltZy13cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiPlxuICAgICAgICA8aW1nIHNyYz17UHJvZmlsZVBpY30gYWx0PVwicHJvZmlsZSBwaWN0dXJlXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhYm91dC13cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0XCI+XG4gICAgICAgIDxoMT5UaGluaywgZGVzaWduLCBjb2RlLjwvaDE+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdvbyBZb3VuZyBDaG9pIGlzIGFuIHVwY29taW5nIFVJL1VYIERlc2lnbmVyICYgRnJvbnQtRW5kIFdlYiBEZXZlbG9wZXJcbiAgICAgICAgICBiYXNlZCBpbiBOZXcgWW9yaywgTlkuIFRocm91Z2hvdXQgaGlzIHN0dWRpby1iYXNlZCBkZXNpZ24gZWR1Y2F0aW9uIGluXG4gICAgICAgICAgQ29ybmVsbCBVbml2ZXJzaXR5LCBXb28gZW1icmFjZWQgdGhlIHN1YmxpbWUgbm90aW9uIG9mIOKAnHNpbXBsaWNpdHnigJ1cbiAgICAgICAgICBhbmQgY29udGludWVzIHRvIGV4cGxvcmUgaXRzIGludGVncmF0aW9uIHdpdGggdHdvIGNvcmUgd2ViXG4gICAgICAgICAgbWVkaXVtc+KAlGRlc2lnbiBhbmQgY29kZS4gSGUgaGFzIDEgeWVhciBvZiBwcm9mZXNzaW9uYWwgZXhwZXJpZW5jZVxuICAgICAgICAgIHdvcmtpbmcgYXMgYSBkZXNpZ25lciBpbiBBbGV4YW5kcmlhLCBWQSBhbmQgaXMgYSBjZXJ0aWZpZWQgTEVFRCBHcmVlblxuICAgICAgICAgIEFzc29jaWF0ZS4gV29vIGN1cnJlbnRseSByZXNpZGVzIGluIENsaWZmc2lkZSBQYXJrLCBOSiwgd2hlcmUgaGVcbiAgICAgICAgICBkZXZvdGVzIG1vc3Qgb2YgaGlzIHRpbWUgZGV2ZWxvcGluZyBGdWxsLXN0YWNrIFdlYiBBcHBsaWNhdGlvbnMgYW5kXG4gICAgICAgICAgRnJvbnQtZW5kIFdlYnNpdGVzIHVzaW5nIFJlYWN0SlMgYXMgaGlzIHByZWZlcnJlZCBtZXRob2QuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLm1haW4ge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgbWFyZ2luOiAzMDBweCAxMDBweDtcbiAgICAgICAgfVxuICAgICAgICAuaW1nLXdyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICB9XG4gICAgICAgIC5pbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiA3NSU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgICAgIHdpZHRoOiA0NTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hYm91dC13cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmFib3V0IHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/About.js */"));

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var _actions_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/Post */ "./actions/Post.js");
/* harmony import */ var _data_storage_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data_storage/database */ "./data_storage/database.js");
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/components/Card.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Card = ({
  id,
  quote = "QUOTE",
  description = "DESCRIPTION HERE"
}) => {
  const renderDatabase = () => {
    return __jsx("ul", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1581800655", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "tech-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: undefined
    }, _data_storage_database__WEBPACK_IMPORTED_MODULE_4__["database"][id].technology.map(tech => __jsx("li", {
      key: tech,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1581800655", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "tech",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: undefined
    }, tech)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1581800655",
      dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark],
      __self: undefined
    }, `.tech-list.__jsx-style-dynamic-selector{display:inline-block;}.tech.__jsx-style-dynamic-selector{display:inline-block;background-color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark};border-radius:0 10px 0 10px;color:white;font-weight:400;margin-right:10px;margin-bottom:10px;padding:8px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNXLEFBR29DLEFBR0EscUJBRnZCLEFBR2dELDhDQUNsQiw0QkFDaEIsWUFDSSxnQkFDRSxrQkFDQyxtQkFDUCxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9DYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCB7IFBvc3RMaW5rLCBQb3N0SW1nIH0gZnJvbSBcIi4uL2FjdGlvbnMvUG9zdFwiO1xuaW1wb3J0IHsgZGF0YWJhc2UgfSBmcm9tIFwiLi4vZGF0YV9zdG9yYWdlL2RhdGFiYXNlXCI7XG5cbmNvbnN0IENhcmQgPSAoeyBpZCwgcXVvdGUgPSBcIlFVT1RFXCIsIGRlc2NyaXB0aW9uID0gXCJERVNDUklQVElPTiBIRVJFXCIgfSkgPT4ge1xuICBjb25zdCByZW5kZXJEYXRhYmFzZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsIGNsYXNzTmFtZT1cInRlY2gtbGlzdFwiPlxuICAgICAgICB7ZGF0YWJhc2VbaWRdLnRlY2hub2xvZ3kubWFwKHRlY2ggPT4gKFxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0ZWNoXCIga2V5PXt0ZWNofT5cbiAgICAgICAgICAgIHt0ZWNofVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAudGVjaC1saXN0IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRlY2gge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmRhcmt9O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDEwcHggMCAxMHB4O1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPVwiY2FyZHMtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtLWltZ1wiPlxuICAgICAgICA8UG9zdEltZyBpZD17aWR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC0tZGVzY1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgPFBvc3RMaW5rIGlkPXtpZH0gLz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJxdW90ZVwiPntxdW90ZX08L2gxPlxuICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaC13cmFwcGVyXCI+e3JlbmRlckRhdGFiYXNlKCl9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5jYXJkcy1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDM1cHggMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZC0taW1nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggJHt0aGVtZS5jb2xvcnMuZ3JheX0gc29saWQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDU1JTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTEwcHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQtLWltZzpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXI6ICR7dGhlbWUuY29sb3JzLmRhcmt9IDFweCBzb2xpZDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQtLWRlc2Mge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHQtd3JhcHBlciB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuYmxhY2t9O1xuICAgICAgICAgICAgcGFkZGluZzogMjVweCAxNXB4IDE1cHggMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnF1b3RlIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRlY2gtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXX0= */
/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Card.js */`));
  };

  return __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1166973519", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black]]]) + " " + "cards-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1166973519", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black]]]) + " " + "card--img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(_actions_Post__WEBPACK_IMPORTED_MODULE_3__["PostImg"], {
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1166973519", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black]]]) + " " + "card--desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1166973519", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black]]]) + " " + "text-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1166973519", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black]]]) + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx(_actions_Post__WEBPACK_IMPORTED_MODULE_3__["PostLink"], {
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1166973519", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black]]]) + " " + "quote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, quote), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1166973519", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, description), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1166973519", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black]]]) + " " + "tech-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, renderDatabase())))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1166973519",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black],
    __self: undefined
  }, `.cards-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:35px 0px;}.card--img.__jsx-style-dynamic-selector{display:block;border:1px ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray} solid;height:350px;width:55%;overflow:hidden;margin-left:110px;-webkit-transition:all 0.2s;transition:all 0.2s;}.card--img.__jsx-style-dynamic-selector:hover{border:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark} 1px solid;-webkit-transform:translateY(-8px);-ms-transform:translateY(-8px);transform:translateY(-8px);}.card--desc.__jsx-style-dynamic-selector{display:block;height:350px;width:45%;margin-right:50px;text-align:center;}.text-wrapper.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;}.text.__jsx-style-dynamic-selector{position:relative;white-space:pre-line;height:100%;color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black};padding:25px 15px 15px 15px;}.quote.__jsx-style-dynamic-selector{font-weight:400;margin-bottom:10px;margin-top:25px;}.tech-wrapper.__jsx-style-dynamic-selector{display:block;position:absolute;padding:0 40px;width:100%;bottom:20px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEUyxBQUcwQixBQUlDLEFBU2dDLEFBSWhDLEFBT0ssQUFJRCxBQU9GLEFBS0YsY0FuQ2dDLEFBYWpDLEFBdUJLLEVBTEMsRUFQRSxTQVZYLEtBdUJLLEdBTEMsRUFqQkUsRUFVTixPQWhCZSxDQTZCaEIsSUFad0IsQUFPckMsSUFqQm9CLEdBdUJOLEVBdENDLFVBdUNmLEdBdENZLEFBZVosQ0FyQm1CLFNBT0QsR0F3QlksS0E5QjlCLEVBdUJjLE1BaEJNLE1BaUJwQixTQU9BLEdBdkJzQixzQkFLdEIsMEJBSkEiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IHsgUG9zdExpbmssIFBvc3RJbWcgfSBmcm9tIFwiLi4vYWN0aW9ucy9Qb3N0XCI7XG5pbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gXCIuLi9kYXRhX3N0b3JhZ2UvZGF0YWJhc2VcIjtcblxuY29uc3QgQ2FyZCA9ICh7IGlkLCBxdW90ZSA9IFwiUVVPVEVcIiwgZGVzY3JpcHRpb24gPSBcIkRFU0NSSVBUSU9OIEhFUkVcIiB9KSA9PiB7XG4gIGNvbnN0IHJlbmRlckRhdGFiYXNlID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8dWwgY2xhc3NOYW1lPVwidGVjaC1saXN0XCI+XG4gICAgICAgIHtkYXRhYmFzZVtpZF0udGVjaG5vbG9neS5tYXAodGVjaCA9PiAoXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRlY2hcIiBrZXk9e3RlY2h9PlxuICAgICAgICAgICAge3RlY2h9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC50ZWNoLWxpc3Qge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGVjaCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuZGFya307XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAwIDEwcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJjYXJkcy1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC0taW1nXCI+XG4gICAgICAgIDxQb3N0SW1nIGlkPXtpZH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLS1kZXNjXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICA8UG9zdExpbmsgaWQ9e2lkfSAvPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInF1b3RlXCI+e3F1b3RlfTwvaDE+XG4gICAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWNoLXdyYXBwZXJcIj57cmVuZGVyRGF0YWJhc2UoKX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmNhcmRzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMzVweCAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkLS1pbWcge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBib3JkZXI6IDFweCAke3RoZW1lLmNvbG9ycy5ncmF5fSBzb2xpZDtcbiAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNTUlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMTBweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZC0taW1nOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogJHt0aGVtZS5jb2xvcnMuZGFya30gMXB4IHNvbGlkO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZC0tZGVzYyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dC13cmFwcGVyIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibGFja307XG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDE1cHggMTVweCAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucXVvdGUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGVjaC13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcGFkZGluZzogMCA0MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2xpPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdfQ== */
/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Card.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/Contact.js":
/*!*******************************!*\
  !*** ./components/Contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/components/Contact.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Contact = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("section", {
  className: "jsx-3346580320" + " " + "contact",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3346580320" + " " + "contact--details",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("h1", {
  className: "jsx-3346580320",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "Contact"), __jsx("p", {
  className: "jsx-3346580320",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "Have any questions? Let's talk! I am always open for new opportunities and friendships!")), __jsx("button", {
  className: "jsx-3346580320" + " " + "btn",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "CALL TO ACTION")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3346580320",
  __self: undefined
}, ".contact.jsx-3346580320{display:block;text-align:center;margin-top:230px;margin-bottom:200px;}.btn.jsx-3346580320{font-size:15px;padding:10px;margin-top:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9Db250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFPLEFBR3lCLEFBTUMsY0FMRyxDQU1MLGFBQ0csSUFOQyxZQU9uQixLQU5zQixvQkFDdEIiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9jb21wb25lbnRzL0NvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb250YWN0ID0gKCkgPT4gKFxuICA8PlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhY3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC0tZGV0YWlsc1wiPlxuICAgICAgICA8aDE+Q29udGFjdDwvaDE+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEhhdmUgYW55IHF1ZXN0aW9ucz8gTGV0J3MgdGFsayEgSSBhbSBhbHdheXMgb3BlbiBmb3IgbmV3IG9wcG9ydHVuaXRpZXNcbiAgICAgICAgICBhbmQgZnJpZW5kc2hpcHMhXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIj5DQUxMIFRPIEFDVElPTjwvYnV0dG9uPlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMzBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcbiAgICAgICAgfVxuICAgICAgICAuYnRuIHtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Contact.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/components/Footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Footer = () => __jsx("footer", {
  className: "jsx-3014212234" + " " + "footer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3014212234" + " " + "designed-by",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("p", {
  className: "jsx-3014212234",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, "Designed & Built by Woo Young Choi")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3014212234",
  __self: undefined
}, ".footer.jsx-3014212234{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:20px;background-color:#000;}p.jsx-3014212234{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9Gb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS2dCLEFBR3NCLEFBUUQsWUFDZCw4REFSeUIsbUdBQ0osNkZBQ0csOEVBQ1QsYUFDUyxzQkFDeEIiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9jb21wb25lbnRzL0Zvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2lnbmVkLWJ5XCI+XG4gICAgICA8cD5EZXNpZ25lZCAmIEJ1aWx0IGJ5IFdvbyBZb3VuZyBDaG9pPC9wPlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5mb290ZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Zvb3Rlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Footer.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Landing.js":
/*!*******************************!*\
  !*** ./components/Landing.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/components/Landing.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Landing = () => __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1899846104", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black]]]) + " " + "main",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("section", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1899846104", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("h1", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1899846104", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "WOO YOUNG CHOI"), __jsx("p", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1899846104", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "UI/UX & Front-end Developer")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1899846104",
  dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black],
  __self: undefined
}, `.main.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-height:100vh;text-align:center;}h1.__jsx-style-dynamic-selector{font-family:Futura;font-size:80px;font-weight:600;margin-bottom:25px;color:black;}p.__jsx-style-dynamic-selector{font-size:27px;font-weight:500;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9MYW5kaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVPLEFBRzhCLEFBUUEsQUFPSixlQUNDLElBUEQsWUFRSSxHQVBILGdCQUNHLG1CQUNQLFlBQ2QsWUFaZSwrQkFpQnNCLG1DQUNyQyxRQWpCd0IsOEVBQ0MsbUdBQ04saUJBQ0Msa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9MYW5kaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgTGFuZGluZyA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDE+V09PIFlPVU5HIENIT0k8L2gxPlxuICAgICAgPHA+VUkvVVggJiBGcm9udC1lbmQgRGV2ZWxvcGVyPC9wPlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLm1haW4ge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IEZ1dHVyYTtcbiAgICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDI3cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibGFja307XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nO1xuIl19 */
/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Landing.js */`));

/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/components/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Layout = props => {
  return __jsx("div", {
    className: "jsx-2380570657",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx(_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2380570657" + " " + "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, props.children), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap');"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2380570657",
    __self: undefined
  }, "*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}h1,p,a,li{font-family:Montserrat;}a{-webkit-transition:all 0.15s;transition:all 0.15s;}a:hover{-webkit-transform:translateY(-3px);-ms-transform:translateY(-3px);transform:translateY(-3px);opacity:0.5;}li{list-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWVMsQUFLbUMsQUFRQyxBQUdGLEFBR00sQUFJWCxnQkFDbEIsTUFsQlcsQ0FRWCxRQVBZLFVBQ1osU0FTQSwyQ0FHYyxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2IGZyb20gXCIuL05hdlwiO1xuXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxOYXYgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgICAgPHN0eWxlPlxuICAgICAgICBAaW1wb3J0XG4gICAgICAgIHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDUwMCw2MDAmZGlzcGxheT1zd2FwJyk7XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgKixcbiAgICAgICAgICAqOjpiZWZvcmUsXG4gICAgICAgICAgKjo6YWZ0ZXIge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxLFxuICAgICAgICAgIHAsXG4gICAgICAgICAgYSxcbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SocialLinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SocialLinks */ "./components/SocialLinks.js");
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/components/Nav.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Nav = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2902637114", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]) + " " + "wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("a", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2902637114", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]) + " " + "navlink",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "HOME")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("a", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2902637114", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]) + " " + "navlink",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "ABOUT"))), __jsx(_SocialLinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
  className: "social",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2902637114",
  dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link],
  __self: undefined
}, `.wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-left:15px;position:fixed;text-align:center;top:45vh;z-index:1;}.navlink.__jsx-style-dynamic-selector{display:block;font-size:15px;font-weight:900;-webkit-text-decoration:none;text-decoration:none;margin:70px 0;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link};}.navlink.__jsx-style-dynamic-selector:visited{color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JPLEFBR3dCLEFBV0MsQUFVcUIsY0FUcEIsZUFDQyxNQVNsQixVQVJ1Qiw2QkFiQyxxQkFjUixjQUNXLDJDQWRaLGFBQ1UsK0JBY0osb0VBYkYsaUJBQ0YsUUFhb0IsT0FaakIsa0JBQ1QsU0FDQyxDQVdaLFNBVkEiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9jb21wb25lbnRzL05hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgU29jaWFsTGlua3MgZnJvbSBcIi4vU29jaWFsTGlua3NcIjtcblxuY29uc3QgTmF2ID0gKCkgPT4gKFxuICA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2bGlua1wiPkhPTUU8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmxpbmtcIj5BQk9VVDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgICA8U29jaWFsTGlua3MgY2xhc3NOYW1lPVwic29jaWFsXCIgLz5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdG9wOiA0NXZoO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cbiAgICAgICAgLm5hdmxpbmsge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDcwcHggMDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpbmt9O1xuICAgICAgICB9XG4gICAgICAgIC5uYXZsaW5rOnZpc2l0ZWQge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5saW5rfTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdfQ== */
/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Nav.js */`));

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/Projects.js":
/*!********************************!*\
  !*** ./components/Projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _data_storage_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data_storage/database */ "./data_storage/database.js");
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/components/Projects.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // const values = Object.values(database);
// const entries = Object.entries(database);

const Projects = () => {
  const makeCard = () => {
    const keys = Object.keys(_data_storage_database__WEBPACK_IMPORTED_MODULE_3__["database"]);
    return keys.map(item => __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: item,
      key: item,
      quote: _data_storage_database__WEBPACK_IMPORTED_MODULE_3__["database"][item].quote,
      description: _data_storage_database__WEBPACK_IMPORTED_MODULE_3__["database"][item].description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: undefined
    }));
  };

  return __jsx("section", {
    className: "jsx-249886654" + " " + "layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-249886654" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Selected Projects"), __jsx("ul", {
    className: "jsx-249886654",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, makeCard()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "249886654",
    __self: undefined
  }, ".layout.jsx-249886654{text-align:center;}.title.jsx-249886654{font-size:45px;margin-bottom:50px;font-weight:400;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9Qcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QlMsQUFHK0IsQUFHSCxlQUNJLEdBSHJCLGdCQUlrQixnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9jb21wb25lbnRzL1Byb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xuaW1wb3J0IHsgZGF0YWJhc2UgfSBmcm9tIFwiLi4vZGF0YV9zdG9yYWdlL2RhdGFiYXNlXCI7XG5cbi8vIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMoZGF0YWJhc2UpO1xuLy8gY29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGRhdGFiYXNlKTtcblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IG1ha2VDYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhYmFzZSk7XG4gICAgcmV0dXJuIGtleXMubWFwKGl0ZW0gPT4gKFxuICAgICAgPENhcmRcbiAgICAgICAgaWQ9e2l0ZW19XG4gICAgICAgIGtleT17aXRlbX1cbiAgICAgICAgcXVvdGU9e2RhdGFiYXNlW2l0ZW1dLnF1b3RlfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZGF0YWJhc2VbaXRlbV0uZGVzY3JpcHRpb259XG4gICAgICAvPlxuICAgICkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5TZWxlY3RlZCBQcm9qZWN0czwvaDE+XG4gICAgICA8dWw+e21ha2VDYXJkKCl9PC91bD5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmxheW91dCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Projects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./components/SocialLinks.js":
/*!***********************************!*\
  !*** ./components/SocialLinks.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/components/SocialLinks.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const SocialLink = ({
  title,
  link,
  viewbox,
  path
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1416194635", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("a", {
  href: link,
  target: "_blank",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1416194635", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  viewBox: viewbox,
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1416194635", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("title", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1416194635", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, title), __jsx("path", {
  d: path,
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1416194635", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
})))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1416194635",
  dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link],
  __self: undefined
}, `li.__jsx-style-dynamic-selector{margin-right:20px;}a.__jsx-style-dynamic-selector{display:inline-block;}svg.__jsx-style-dynamic-selector{height:20px;fill:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9Tb2NpYWxMaW5rcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjTyxBQUc2QixBQUdHLEFBR1QsWUFDc0IsTUFOcEMsR0FHQSx5QkFJQSIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL2NvbXBvbmVudHMvU29jaWFsTGlua3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBTb2NpYWxMaW5rID0gKHsgdGl0bGUsIGxpbmssIHZpZXdib3gsIHBhdGggfSkgPT4gKFxuICA8PlxuICAgIDxsaT5cbiAgICAgIDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiByb2xlPVwiaW1nXCIgdmlld0JveD17dmlld2JveH0+XG4gICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICAgIDxwYXRoIGQ9e3BhdGh9IC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9hPlxuICAgIDwvbGk+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIGZpbGw6ICR7dGhlbWUuY29sb3JzLmxpbmt9O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvPlxuKTtcblxuY29uc3QgU29jaWFsTGlua3MgPSAoKSA9PiAoXG4gIDx1bD5cbiAgICA8U29jaWFsTGlua1xuICAgICAgdGl0bGU9XCJHaXRIdWJcIlxuICAgICAgbGluaz1cImh0dHBzOi8vZ2l0aHViLmNvbS93YzM1NlwiXG4gICAgICB2aWV3Ym94PVwiMCAwIDQzOC41NDkgNDM4LjU0OVwiXG4gICAgICBwYXRoPVwiTTQwOS4xMzIsMTE0LjU3M2MtMTkuNjA4LTMzLjU5Ni00Ni4yMDUtNjAuMTk0LTc5Ljc5OC03OS44QzI5NS43MzYsMTUuMTY2LDI1OS4wNTcsNS4zNjUsMjE5LjI3MSw1LjM2NSBjLTM5Ljc4MSwwLTc2LjQ3Miw5LjgwNC0xMTAuMDYzLDI5LjQwOGMtMzMuNTk2LDE5LjYwNS02MC4xOTIsNDYuMjA0LTc5LjgsNzkuOEM5LjgwMywxNDguMTY4LDAsMTg0Ljg1NCwwLDIyNC42MyBjMCw0Ny43OCwxMy45NCw5MC43NDUsNDEuODI3LDEyOC45MDZjMjcuODg0LDM4LjE2NCw2My45MDYsNjQuNTcyLDEwOC4wNjMsNzkuMjI3YzUuMTQsMC45NTQsOC45NDUsMC4yODMsMTEuNDE5LTEuOTk2IGMyLjQ3NS0yLjI4MiwzLjcxMS01LjE0LDMuNzExLTguNTYyYzAtMC41NzEtMC4wNDktNS43MDgtMC4xNDQtMTUuNDE3Yy0wLjA5OC05LjcwOS0wLjE0NC0xOC4xNzktMC4xNDQtMjUuNDA2bC02LjU2NywxLjEzNiBjLTQuMTg3LDAuNzY3LTkuNDY5LDEuMDkyLTE1Ljg0NiwxYy02LjM3NC0wLjA4OS0xMi45OTEtMC43NTctMTkuODQyLTEuOTk5Yy02Ljg1NC0xLjIzMS0xMy4yMjktNC4wODYtMTkuMTMtOC41NTkgYy01Ljg5OC00LjQ3My0xMC4wODUtMTAuMzI4LTEyLjU2LTE3LjU1NmwtMi44NTUtNi41N2MtMS45MDMtNC4zNzQtNC44OTktOS4yMzMtOC45OTItMTQuNTU5IGMtNC4wOTMtNS4zMzEtOC4yMzItOC45NDUtMTIuNDE5LTEwLjg0OGwtMS45OTktMS40MzFjLTEuMzMyLTAuOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5Yy0xLjE0Mi0xLjMzMS0xLjk5Ny0yLjY2My0yLjU2OC0zLjk5NyBjLTAuNTcyLTEuMzM1LTAuMDk4LTIuNDMsMS40MjctMy4yODljMS41MjUtMC44NTksNC4yODEtMS4yNzYsOC4yOC0xLjI3Nmw1LjcwOCwwLjg1M2MzLjgwNywwLjc2Myw4LjUxNiwzLjA0MiwxNC4xMzMsNi44NTEgYzUuNjE0LDMuODA2LDEwLjIyOSw4Ljc1NCwxMy44NDYsMTQuODQyYzQuMzgsNy44MDYsOS42NTcsMTMuNzU0LDE1Ljg0NiwxNy44NDdjNi4xODQsNC4wOTMsMTIuNDE5LDYuMTM2LDE4LjY5OSw2LjEzNiBjNi4yOCwwLDExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjNjNC41NjUtMC45NTIsOC44NDgtMi4zODMsMTIuODQ3LTQuMjg1YzEuNzEzLTEyLjc1OCw2LjM3Ny0yMi41NTksMTMuOTg4LTI5LjQxIGMtMTAuODQ4LTEuMTQtMjAuNjAxLTIuODU3LTI5LjI2NC01LjE0Yy04LjY1OC0yLjI4Ni0xNy42MDUtNS45OTYtMjYuODM1LTExLjE0Yy05LjIzNS01LjEzNy0xNi44OTYtMTEuNTE2LTIyLjk4NS0xOS4xMjYgYy02LjA5LTcuNjE0LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc5Yy0zLjkwMS0xMi4zNzQtNS44NTItMjYuNjQ4LTUuODUyLTQyLjgyNmMwLTIzLjAzNSw3LjUyLTQyLjYzNywyMi41NTctNTguODE3IGMtNy4wNDQtMTcuMzE4LTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNGM1LjUyLTEuNzE1LDEzLjcwNi0wLjQyOCwyNC41NTQsMy44NTNjMTAuODUsNC4yODMsMTguNzk0LDcuOTUyLDIzLjg0LDEwLjk5NCBjNS4wNDYsMy4wNDEsOS4wODksNS42MTgsMTIuMTM1LDcuNzA4YzE3LjcwNS00Ljk0NywzNS45NzYtNy40MjEsNTQuODE4LTcuNDIxczM3LjExNywyLjQ3NCw1NC44MjMsNy40MjFsMTAuODQ5LTYuODQ5IGM3LjQxOS00LjU3LDE2LjE4LTguNzU4LDI2LjI2Mi0xMi41NjVjMTAuMDg4LTMuODA1LDE3LjgwMi00Ljg1MywyMy4xMzQtMy4xMzhjOC41NjIsMjEuNTA5LDkuMzI1LDQwLjkyMiwyLjI3OSw1OC4yNCBjMTUuMDM2LDE2LjE4LDIyLjU1OSwzNS43ODcsMjIuNTU5LDU4LjgxN2MwLDE2LjE3OC0xLjk1OCwzMC40OTctNS44NTMsNDIuOTY2Yy0zLjksMTIuNDcxLTguOTQxLDIyLjQ1Ny0xNS4xMjUsMjkuOTc5IGMtNi4xOTEsNy41MjEtMTMuOTAxLDEzLjg1LTIzLjEzMSwxOC45ODZjLTkuMjMyLDUuMTQtMTguMTgyLDguODUtMjYuODQsMTEuMTM2Yy04LjY2MiwyLjI4Ni0xOC40MTUsNC4wMDQtMjkuMjYzLDUuMTQ2IGM5Ljg5NCw4LjU2MiwxNC44NDIsMjIuMDc3LDE0Ljg0Miw0MC41Mzl2NjAuMjM3YzAsMy40MjIsMS4xOSw2LjI3OSwzLjU3Miw4LjU2MmMyLjM3OSwyLjI3OSw2LjEzNiwyLjk1LDExLjI3NiwxLjk5NSBjNDQuMTYzLTE0LjY1Myw4MC4xODUtNDEuMDYyLDEwOC4wNjgtNzkuMjI2YzI3Ljg4LTM4LjE2MSw0MS44MjUtODEuMTI2LDQxLjgyNS0xMjguOTA2IEM0MzguNTM2LDE4NC44NTEsNDI4LjcyOCwxNDguMTY4LDQwOS4xMzIsMTE0LjU3M3pcIlxuICAgIC8+XG4gICAgPFNvY2lhbExpbmtcbiAgICAgIHRpdGxlPVwiTGlua2VkSW5cIlxuICAgICAgbGluaz1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi93b28teW91bmcvXCJcbiAgICAgIHZpZXdib3g9XCIwIDAgNDMwLjExNyA0MzAuMTE3XCJcbiAgICAgIHBhdGg9XCJNNDMwLjExNywyNjEuNTQzVjQyMC41NmgtOTIuMTg4VjI3Mi4xOTNjMC0zNy4yNzEtMTMuMzM0LTYyLjcwNy00Ni43MDMtNjIuNzA3IGMtMjUuNDczLDAtNDAuNjMyLDE3LjE0Mi00Ny4zMDEsMzMuNzI0Yy0yLjQzMiw1LjkyOC0zLjA1OCwxNC4xNzktMy4wNTgsMjIuNDc3VjQyMC41NmgtOTIuMjE5YzAsMCwxLjI0Mi0yNTEuMjg1LDAtMjc3LjMyaDkyLjIxIHYzOS4zMDljLTAuMTg3LDAuMjk0LTAuNDMsMC42MTEtMC42MDYsMC44OTZoMC42MDZ2LTAuODk2YzEyLjI1MS0xOC44NjksMzQuMTMtNDUuODI0LDgzLjEwMi00NS44MjQgQzM4NC42MzMsMTM2LjcyNCw0MzAuMTE3LDE3Ni4zNjEsNDMwLjExNywyNjEuNTQzeiBNNTIuMTgzLDkuNTU4QzIwLjYzNSw5LjU1OCwwLDMwLjI1MSwwLDU3LjQ2MyBjMCwyNi42MTksMjAuMDM4LDQ3Ljk0LDUwLjk1OSw0Ny45NGgwLjYxNmMzMi4xNTksMCw1Mi4xNTktMjEuMzE3LDUyLjE1OS00Ny45NEMxMDMuMTI4LDMwLjI1MSw4My43MzQsOS41NTgsNTIuMTgzLDkuNTU4eiBNNS40NzcsNDIwLjU2aDkyLjE4NHYtMjc3LjMySDUuNDc3VjQyMC41NnpcIlxuICAgIC8+XG4gICAgPFNvY2lhbExpbmtcbiAgICAgIHRpdGxlPVwiQ29kZVBlblwiXG4gICAgICBsaW5rPVwiaHR0cHM6Ly9jb2RlcGVuLmlvL3djMzU2XCJcbiAgICAgIHZpZXdib3g9XCIwIDAgMzEuNjY1IDMxLjY2NVwiXG4gICAgICBwYXRoPVwiTTE2Ljg3OCwwLjQxNWMtMC44NTQtMC41NjUtMS45NjgtMC41NTItMi44MDksMC4wMzRMMS40ODUsOS4yMTRjLTAuNjcxLDAuNDY4LTEuMDcxLDEuMjMzLTEuMDcxLDIuMDUydjkuNDQ0IGMwLDAuODQsMC40MjEsMS42MjMsMS4xMjIsMi4wODZsMTIuNzksOC40NTVjMC44MzYsMC41NTMsMS45MjIsMC41NTMsMi43NTgsMGwxMy4wNDQtOC42MThjMC43LTAuNDYzLDEuMTIyLTEuMjQ2LDEuMTIyLTIuMDg2IHYtOS4yNzljMC0wLjgzOS0wLjQyMS0xLjYyMi0xLjEyMS0yLjA4NUwxNi44NzgsMC40MTV6IE0yNi42MjEsMTAuNjQ1bC00LjgyMSwzLjIzN2wtNC41MjEtMy4yODhMMTcuMjUsNC4xMjdMMjYuNjIxLDEwLjY0NXogTTEzLjk3OSw0LjEzM3Y2LjMyOWwtNC42MzMsMy4yNGwtNC42MjEtMy4wOTlMMTMuOTc5LDQuMTMzeiBNMy40NTgsMTMuNzIybDIuOTkxLDIuMDA0bC0yLjk5MSwyLjA5M1YxMy43MjJ6IE0xNC4wNTgsMjcuMjE1IGwtOS4zMzEtNi4yNThsNC42NjEtMy4yNThsNC42NywzLjEzM1YyNy4yMTV6IE0xMi4yODYsMTUuNjc0bDMuMDIxLTIuMTEzbDMuNTE5LDIuMzEzbC0zLjExOSwyLjA5NUwxMi4yODYsMTUuNjc0eiBNMTcuMzU0LDI3LjIxNSBWMjAuODNsNC40NjMtMi45OTFsNC44MDUsMy4xNTlMMTcuMzU0LDI3LjIxNXogTTI3Ljk1NCwxNy45MjdsLTMuMTY4LTIuMDgybDMuMTY4LTIuMTI1VjE3LjkyN3pcIlxuICAgIC8+XG4gICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+XG4gICAgICA8YSBjbGFzc05hbWU9XCJibG9nXCI+QmxvZzwvYT5cbiAgICA8L0xpbms+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgcGFkZGluZzogOXB4O1xuICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICByaWdodDogMzBweDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5ibG9nIHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMubGlua307XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC91bD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNvY2lhbExpbmtzO1xuIl19 */
/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/SocialLinks.js */`));

const SocialLinks = () => __jsx("ul", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2107919779", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx(SocialLink, {
  title: "GitHub",
  link: "https://github.com/wc356",
  viewbox: "0 0 438.549 438.549",
  path: "M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}), __jsx(SocialLink, {
  title: "LinkedIn",
  link: "https://www.linkedin.com/in/woo-young/",
  viewbox: "0 0 430.117 430.117",
  path: "M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}), __jsx(SocialLink, {
  title: "CodePen",
  link: "https://codepen.io/wc356",
  viewbox: "0 0 31.665 31.665",
  path: "M16.878,0.415c-0.854-0.565-1.968-0.552-2.809,0.034L1.485,9.214c-0.671,0.468-1.071,1.233-1.071,2.052v9.444 c0,0.84,0.421,1.623,1.122,2.086l12.79,8.455c0.836,0.553,1.922,0.553,2.758,0l13.044-8.618c0.7-0.463,1.122-1.246,1.122-2.086 v-9.279c0-0.839-0.421-1.622-1.121-2.085L16.878,0.415z M26.621,10.645l-4.821,3.237l-4.521-3.288L17.25,4.127L26.621,10.645z M13.979,4.133v6.329l-4.633,3.24l-4.621-3.099L13.979,4.133z M3.458,13.722l2.991,2.004l-2.991,2.093V13.722z M14.058,27.215 l-9.331-6.258l4.661-3.258l4.67,3.133V27.215z M12.286,15.674l3.021-2.113l3.519,2.313l-3.119,2.095L12.286,15.674z M17.354,27.215 V20.83l4.463-2.991l4.805,3.159L17.354,27.215z M27.954,17.927l-3.168-2.082l3.168-2.125V17.927z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/blog",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, __jsx("a", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2107919779", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]) + " " + "blog",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, "Blog")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2107919779",
  dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link],
  __self: undefined
}, `ul.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;background-color:rgba(255,255,255,0.8);border-radius:7px;position:fixed;padding:9px;top:20px;right:30px;z-index:1;}.blog.__jsx-style-dynamic-selector{color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link};font-weight:600;-webkit-text-decoration:none;text-decoration:none;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9Tb2NpYWxMaW5rcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRE8sQUFHd0IsQUFXc0IsbUNBQ25CLGdCQUNLLHVCQVpGLDJCQWFyQiwwQ0FaNEMsdUNBQ3hCLGtCQUNILGVBQ0gsWUFDSCxTQUNFLFdBQ0QsVUFDWiIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL2NvbXBvbmVudHMvU29jaWFsTGlua3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBTb2NpYWxMaW5rID0gKHsgdGl0bGUsIGxpbmssIHZpZXdib3gsIHBhdGggfSkgPT4gKFxuICA8PlxuICAgIDxsaT5cbiAgICAgIDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiByb2xlPVwiaW1nXCIgdmlld0JveD17dmlld2JveH0+XG4gICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICAgIDxwYXRoIGQ9e3BhdGh9IC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9hPlxuICAgIDwvbGk+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIGZpbGw6ICR7dGhlbWUuY29sb3JzLmxpbmt9O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvPlxuKTtcblxuY29uc3QgU29jaWFsTGlua3MgPSAoKSA9PiAoXG4gIDx1bD5cbiAgICA8U29jaWFsTGlua1xuICAgICAgdGl0bGU9XCJHaXRIdWJcIlxuICAgICAgbGluaz1cImh0dHBzOi8vZ2l0aHViLmNvbS93YzM1NlwiXG4gICAgICB2aWV3Ym94PVwiMCAwIDQzOC41NDkgNDM4LjU0OVwiXG4gICAgICBwYXRoPVwiTTQwOS4xMzIsMTE0LjU3M2MtMTkuNjA4LTMzLjU5Ni00Ni4yMDUtNjAuMTk0LTc5Ljc5OC03OS44QzI5NS43MzYsMTUuMTY2LDI1OS4wNTcsNS4zNjUsMjE5LjI3MSw1LjM2NSBjLTM5Ljc4MSwwLTc2LjQ3Miw5LjgwNC0xMTAuMDYzLDI5LjQwOGMtMzMuNTk2LDE5LjYwNS02MC4xOTIsNDYuMjA0LTc5LjgsNzkuOEM5LjgwMywxNDguMTY4LDAsMTg0Ljg1NCwwLDIyNC42MyBjMCw0Ny43OCwxMy45NCw5MC43NDUsNDEuODI3LDEyOC45MDZjMjcuODg0LDM4LjE2NCw2My45MDYsNjQuNTcyLDEwOC4wNjMsNzkuMjI3YzUuMTQsMC45NTQsOC45NDUsMC4yODMsMTEuNDE5LTEuOTk2IGMyLjQ3NS0yLjI4MiwzLjcxMS01LjE0LDMuNzExLTguNTYyYzAtMC41NzEtMC4wNDktNS43MDgtMC4xNDQtMTUuNDE3Yy0wLjA5OC05LjcwOS0wLjE0NC0xOC4xNzktMC4xNDQtMjUuNDA2bC02LjU2NywxLjEzNiBjLTQuMTg3LDAuNzY3LTkuNDY5LDEuMDkyLTE1Ljg0NiwxYy02LjM3NC0wLjA4OS0xMi45OTEtMC43NTctMTkuODQyLTEuOTk5Yy02Ljg1NC0xLjIzMS0xMy4yMjktNC4wODYtMTkuMTMtOC41NTkgYy01Ljg5OC00LjQ3My0xMC4wODUtMTAuMzI4LTEyLjU2LTE3LjU1NmwtMi44NTUtNi41N2MtMS45MDMtNC4zNzQtNC44OTktOS4yMzMtOC45OTItMTQuNTU5IGMtNC4wOTMtNS4zMzEtOC4yMzItOC45NDUtMTIuNDE5LTEwLjg0OGwtMS45OTktMS40MzFjLTEuMzMyLTAuOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5Yy0xLjE0Mi0xLjMzMS0xLjk5Ny0yLjY2My0yLjU2OC0zLjk5NyBjLTAuNTcyLTEuMzM1LTAuMDk4LTIuNDMsMS40MjctMy4yODljMS41MjUtMC44NTksNC4yODEtMS4yNzYsOC4yOC0xLjI3Nmw1LjcwOCwwLjg1M2MzLjgwNywwLjc2Myw4LjUxNiwzLjA0MiwxNC4xMzMsNi44NTEgYzUuNjE0LDMuODA2LDEwLjIyOSw4Ljc1NCwxMy44NDYsMTQuODQyYzQuMzgsNy44MDYsOS42NTcsMTMuNzU0LDE1Ljg0NiwxNy44NDdjNi4xODQsNC4wOTMsMTIuNDE5LDYuMTM2LDE4LjY5OSw2LjEzNiBjNi4yOCwwLDExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjNjNC41NjUtMC45NTIsOC44NDgtMi4zODMsMTIuODQ3LTQuMjg1YzEuNzEzLTEyLjc1OCw2LjM3Ny0yMi41NTksMTMuOTg4LTI5LjQxIGMtMTAuODQ4LTEuMTQtMjAuNjAxLTIuODU3LTI5LjI2NC01LjE0Yy04LjY1OC0yLjI4Ni0xNy42MDUtNS45OTYtMjYuODM1LTExLjE0Yy05LjIzNS01LjEzNy0xNi44OTYtMTEuNTE2LTIyLjk4NS0xOS4xMjYgYy02LjA5LTcuNjE0LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc5Yy0zLjkwMS0xMi4zNzQtNS44NTItMjYuNjQ4LTUuODUyLTQyLjgyNmMwLTIzLjAzNSw3LjUyLTQyLjYzNywyMi41NTctNTguODE3IGMtNy4wNDQtMTcuMzE4LTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNGM1LjUyLTEuNzE1LDEzLjcwNi0wLjQyOCwyNC41NTQsMy44NTNjMTAuODUsNC4yODMsMTguNzk0LDcuOTUyLDIzLjg0LDEwLjk5NCBjNS4wNDYsMy4wNDEsOS4wODksNS42MTgsMTIuMTM1LDcuNzA4YzE3LjcwNS00Ljk0NywzNS45NzYtNy40MjEsNTQuODE4LTcuNDIxczM3LjExNywyLjQ3NCw1NC44MjMsNy40MjFsMTAuODQ5LTYuODQ5IGM3LjQxOS00LjU3LDE2LjE4LTguNzU4LDI2LjI2Mi0xMi41NjVjMTAuMDg4LTMuODA1LDE3LjgwMi00Ljg1MywyMy4xMzQtMy4xMzhjOC41NjIsMjEuNTA5LDkuMzI1LDQwLjkyMiwyLjI3OSw1OC4yNCBjMTUuMDM2LDE2LjE4LDIyLjU1OSwzNS43ODcsMjIuNTU5LDU4LjgxN2MwLDE2LjE3OC0xLjk1OCwzMC40OTctNS44NTMsNDIuOTY2Yy0zLjksMTIuNDcxLTguOTQxLDIyLjQ1Ny0xNS4xMjUsMjkuOTc5IGMtNi4xOTEsNy41MjEtMTMuOTAxLDEzLjg1LTIzLjEzMSwxOC45ODZjLTkuMjMyLDUuMTQtMTguMTgyLDguODUtMjYuODQsMTEuMTM2Yy04LjY2MiwyLjI4Ni0xOC40MTUsNC4wMDQtMjkuMjYzLDUuMTQ2IGM5Ljg5NCw4LjU2MiwxNC44NDIsMjIuMDc3LDE0Ljg0Miw0MC41Mzl2NjAuMjM3YzAsMy40MjIsMS4xOSw2LjI3OSwzLjU3Miw4LjU2MmMyLjM3OSwyLjI3OSw2LjEzNiwyLjk1LDExLjI3NiwxLjk5NSBjNDQuMTYzLTE0LjY1Myw4MC4xODUtNDEuMDYyLDEwOC4wNjgtNzkuMjI2YzI3Ljg4LTM4LjE2MSw0MS44MjUtODEuMTI2LDQxLjgyNS0xMjguOTA2IEM0MzguNTM2LDE4NC44NTEsNDI4LjcyOCwxNDguMTY4LDQwOS4xMzIsMTE0LjU3M3pcIlxuICAgIC8+XG4gICAgPFNvY2lhbExpbmtcbiAgICAgIHRpdGxlPVwiTGlua2VkSW5cIlxuICAgICAgbGluaz1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi93b28teW91bmcvXCJcbiAgICAgIHZpZXdib3g9XCIwIDAgNDMwLjExNyA0MzAuMTE3XCJcbiAgICAgIHBhdGg9XCJNNDMwLjExNywyNjEuNTQzVjQyMC41NmgtOTIuMTg4VjI3Mi4xOTNjMC0zNy4yNzEtMTMuMzM0LTYyLjcwNy00Ni43MDMtNjIuNzA3IGMtMjUuNDczLDAtNDAuNjMyLDE3LjE0Mi00Ny4zMDEsMzMuNzI0Yy0yLjQzMiw1LjkyOC0zLjA1OCwxNC4xNzktMy4wNTgsMjIuNDc3VjQyMC41NmgtOTIuMjE5YzAsMCwxLjI0Mi0yNTEuMjg1LDAtMjc3LjMyaDkyLjIxIHYzOS4zMDljLTAuMTg3LDAuMjk0LTAuNDMsMC42MTEtMC42MDYsMC44OTZoMC42MDZ2LTAuODk2YzEyLjI1MS0xOC44NjksMzQuMTMtNDUuODI0LDgzLjEwMi00NS44MjQgQzM4NC42MzMsMTM2LjcyNCw0MzAuMTE3LDE3Ni4zNjEsNDMwLjExNywyNjEuNTQzeiBNNTIuMTgzLDkuNTU4QzIwLjYzNSw5LjU1OCwwLDMwLjI1MSwwLDU3LjQ2MyBjMCwyNi42MTksMjAuMDM4LDQ3Ljk0LDUwLjk1OSw0Ny45NGgwLjYxNmMzMi4xNTksMCw1Mi4xNTktMjEuMzE3LDUyLjE1OS00Ny45NEMxMDMuMTI4LDMwLjI1MSw4My43MzQsOS41NTgsNTIuMTgzLDkuNTU4eiBNNS40NzcsNDIwLjU2aDkyLjE4NHYtMjc3LjMySDUuNDc3VjQyMC41NnpcIlxuICAgIC8+XG4gICAgPFNvY2lhbExpbmtcbiAgICAgIHRpdGxlPVwiQ29kZVBlblwiXG4gICAgICBsaW5rPVwiaHR0cHM6Ly9jb2RlcGVuLmlvL3djMzU2XCJcbiAgICAgIHZpZXdib3g9XCIwIDAgMzEuNjY1IDMxLjY2NVwiXG4gICAgICBwYXRoPVwiTTE2Ljg3OCwwLjQxNWMtMC44NTQtMC41NjUtMS45NjgtMC41NTItMi44MDksMC4wMzRMMS40ODUsOS4yMTRjLTAuNjcxLDAuNDY4LTEuMDcxLDEuMjMzLTEuMDcxLDIuMDUydjkuNDQ0IGMwLDAuODQsMC40MjEsMS42MjMsMS4xMjIsMi4wODZsMTIuNzksOC40NTVjMC44MzYsMC41NTMsMS45MjIsMC41NTMsMi43NTgsMGwxMy4wNDQtOC42MThjMC43LTAuNDYzLDEuMTIyLTEuMjQ2LDEuMTIyLTIuMDg2IHYtOS4yNzljMC0wLjgzOS0wLjQyMS0xLjYyMi0xLjEyMS0yLjA4NUwxNi44NzgsMC40MTV6IE0yNi42MjEsMTAuNjQ1bC00LjgyMSwzLjIzN2wtNC41MjEtMy4yODhMMTcuMjUsNC4xMjdMMjYuNjIxLDEwLjY0NXogTTEzLjk3OSw0LjEzM3Y2LjMyOWwtNC42MzMsMy4yNGwtNC42MjEtMy4wOTlMMTMuOTc5LDQuMTMzeiBNMy40NTgsMTMuNzIybDIuOTkxLDIuMDA0bC0yLjk5MSwyLjA5M1YxMy43MjJ6IE0xNC4wNTgsMjcuMjE1IGwtOS4zMzEtNi4yNThsNC42NjEtMy4yNThsNC42NywzLjEzM1YyNy4yMTV6IE0xMi4yODYsMTUuNjc0bDMuMDIxLTIuMTEzbDMuNTE5LDIuMzEzbC0zLjExOSwyLjA5NUwxMi4yODYsMTUuNjc0eiBNMTcuMzU0LDI3LjIxNSBWMjAuODNsNC40NjMtMi45OTFsNC44MDUsMy4xNTlMMTcuMzU0LDI3LjIxNXogTTI3Ljk1NCwxNy45MjdsLTMuMTY4LTIuMDgybDMuMTY4LTIuMTI1VjE3LjkyN3pcIlxuICAgIC8+XG4gICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+XG4gICAgICA8YSBjbGFzc05hbWU9XCJibG9nXCI+QmxvZzwvYT5cbiAgICA8L0xpbms+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgcGFkZGluZzogOXB4O1xuICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICByaWdodDogMzBweDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5ibG9nIHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMubGlua307XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC91bD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNvY2lhbExpbmtzO1xuIl19 */
/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/SocialLinks.js */`));

/* harmony default export */ __webpack_exports__["default"] = (SocialLinks);

/***/ }),

/***/ "./data_storage/database.js":
/*!**********************************!*\
  !*** ./data_storage/database.js ***!
  \**********************************/
/*! exports provided: database, blogContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "database", function() { return database; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blogContent", function() { return blogContent; });
const database = {
  "Web-Portfolio": {
    quote: "Showcasing my works in progress!",
    description: "Front-end website built with React and Next",
    technology: ["React.js", "Next.js", "styled-jsx", "dynamic pages | routing", "Adobe XD | prototyping", "Git"]
  },
  Expensify: {
    quote: "Quickly Sort & Track your Expenses",
    description: "Full-stack web application built with React and Redux",
    technology: ["React.js", "Redux", "react-router", "Webpack", "Babel", "Jest", "Enzyme", "Firebase", "Heroku", "Git", "SCSS | SASS", "auth"]
  },
  Specula: {
    quote: "Compare and Track Phone Specs",
    descripition: "Full-stack web application built with React",
    technology: ["HTML", "CSS | SASS", "Adobe Indesign", "hosting", "Git"]
  },
  "React-Tetris": {
    quote: "This is where it all started.",
    description: "Original Tetris game built with React",
    technology: ["create-react-app", "SCSS | SASS", "Git"]
  },
  Indecision: {
    quote: "Get Things Done. Now.",
    description: "Front-end web application built with React",
    technology: ["React.js", "Babel", "SCSS | SASS", "Git", "Webpack"]
  }
};
const blogContent = [{
  id: "self-taught-challenges",
  title: "Challenges of a Self-Taught Developer",
  body: "With a plethora of educational resources available online and offline, self-taught developers have never had so much opportunity to jump into the tech field.\
      \n\nPersonally, my most current struggle has been—accepting sub-optimal solutions. I find that the more fluent I become in coding, the urge to want to optimize my projects overwhelm me. For example, I decided to scrap my sub-optimal, yet, finished code and spent extra 3 days to implement a loop structure over a JSON object. I decided that this loop format would better scale, and would be favorable for maintaining code base for myself.\
      \n\nWhile this may be a great practice/habit for those that code as their day job, as someone who needs to wrap up projects and finish a portfolio for job applications, this only means delaying the deadline further 🤦🏻‍♂️\
      \n\nAnd having experienced this occurence in a previous job as a designer, I could very well see a similar occurence happening as a software developer trying to weigh the priorities of—'optimized performance' versus 'deadline'.",
  picPath: "/images/the_office.jpg"
}, {
  id: "loops",
  title: "Looping through objects",
  body: `
        Why are loops so hard 🤦🏻‍♂️.
        `,
  picPath: "/images/the_office.jpg"
}, {
  id: "reflections",
  title: "Current Reflections",
  body: "TEXT",
  picPath: "/images/the_office.jpg"
}, {
  id: "self-discipline",
  title: "Realizing Self-Discipline",
  body: "TEXT",
  picPath: "/images/the_office.jpg"
}, {
  id: "persuasion",
  title: "How I persuaded My Parents 🤷🏻‍♂️",
  body: "TEXT",
  picPath: "/images/the_office.jpg"
}];

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Landing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Landing */ "./components/Landing.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/About */ "./components/About.js");
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Projects */ "./components/Projects.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Contact */ "./components/Contact.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






 // Render

const LandingPage = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log("useEffect ran");
  });
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(_components_Landing__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx(_components_About__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx(_components_Projects__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

/***/ }),

/***/ "./public/images/expensify.png":
/*!*************************************!*\
  !*** ./public/images/expensify.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/expensify-3b63e12aedecab22031f36520300eb79.png";

/***/ }),

/***/ "./public/images/profile_pic.png":
/*!***************************************!*\
  !*** ./public/images/profile_pic.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/profile_pic-104fe5c3838ce64a9ae40f681cd1a650.png";

/***/ }),

/***/ "./styles/theme.js":
/*!*************************!*\
  !*** ./styles/theme.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const theme = {
  colors: {
    link: "#561eff",
    dark: "rgb(105, 90, 245)",
    blue: "#1e90ff",
    black: "rgb(68, 68, 68)",
    gray: "rgb(216, 213, 247)",
    light: "#1eff8f",
    pink: "#FF99CC"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/WooChoi/Desktop/React.js/blog-woo/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map