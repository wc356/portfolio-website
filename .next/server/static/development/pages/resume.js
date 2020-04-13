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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var _utils_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/analytics */ "./utils/analytics.js");
/* harmony import */ var react_meta_tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-meta-tags */ "react-meta-tags");
/* harmony import */ var react_meta_tags__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_meta_tags__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/web-portfolio/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Layout = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!window.GA_INITIALIZED) {
      Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_2__["initGA"])();
      window.GA_INITIALIZED = true;
    }

    Object(_utils_analytics__WEBPACK_IMPORTED_MODULE_2__["logPageView"])();
  }, []);
  return __jsx("div", {
    className: "jsx-1228749320",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(react_meta_tags__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-1228749320",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Woo Young Choi Portfolio \uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBB"), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    className: "jsx-1228749320",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  })), __jsx(_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-1228749320",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1228749320",
    __self: undefined
  }, "@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap\");*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}h1,h3,p,a,li,button{font-family:Montserrat;}a{-webkit-transition:all 0.15s;transition:all 0.15s;-webkit-text-decoration-skip-ink:auto;text-decoration-skip-ink:auto;}a:hover{-webkit-transform:translateY(-3px);-ms-transform:translateY(-3px);transform:translateY(-3px);}ul{list-style:none;}img{object-fit:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QlMsQUFFcUcsQUFLbEUsQUFVQyxBQUdGLEFBSU0sQUFHWCxBQUdDLGdCQUZuQixDQUdBLEtBdkJXLENBVVgsUUFUWSxVQUNaLFNBV2dDLDJDQUloQyx5QkFIQSIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL3dlYi1wb3J0Zm9saW8vY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpbml0R0EsIGxvZ1BhZ2VWaWV3IH0gZnJvbSBcIi4uL3V0aWxzL2FuYWx5dGljc1wiO1xuaW1wb3J0IE1ldGFUYWdzIGZyb20gXCJyZWFjdC1tZXRhLXRhZ3NcIjtcblxuaW1wb3J0IE5hdiBmcm9tIFwiLi9OYXZcIjtcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF3aW5kb3cuR0FfSU5JVElBTElaRUQpIHtcbiAgICAgIGluaXRHQSgpO1xuICAgICAgd2luZG93LkdBX0lOSVRJQUxJWkVEID0gdHJ1ZTtcbiAgICB9XG4gICAgbG9nUGFnZVZpZXcoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxNZXRhVGFncz5cbiAgICAgICAgPHRpdGxlPldvbyBZb3VuZyBDaG9pIFBvcnRmb2xpbyDwn5Go8J+Pu+KAjfCfkrs8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICA8L01ldGFUYWdzPlxuICAgICAgPE5hdiAvPlxuICAgICAgPGRpdj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw1MDAsNjAwJmRpc3BsYXk9c3dhcFwiKTtcblxuICAgICAgICAgICosXG4gICAgICAgICAgKjo6YmVmb3JlLFxuICAgICAgICAgICo6OmFmdGVyIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMSxcbiAgICAgICAgICBoMyxcbiAgICAgICAgICBwLFxuICAgICAgICAgIGEsXG4gICAgICAgICAgbGksXG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/components/Layout.js */"));
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
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/web-portfolio/components/Nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Nav = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1322457866", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "wrapper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}, __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1322457866", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "flex",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}, __jsx("a", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1322457866", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "navlink",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 11
  }
}, "HOME")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/resume",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}, __jsx("a", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1322457866", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "navlink navlink-B",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 11
  }
}, "RESUME")))), __jsx(_SocialLinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
  className: "social",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1322457866",
  dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark],
  __self: undefined
}, `.wrapper.__jsx-style-dynamic-selector{display:block;position:fixed;top:30vh;z-index:1;}.flex.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.navlink.__jsx-style-dynamic-selector{display:block;padding:10px 0;font-size:15px;font-weight:900;-webkit-text-decoration:none;text-decoration:none;margin:60px 0;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;text-align:center;background-color:rgba(255,255,255,0.5);padding:5px;border-radius:5px;color:black;}.navlink.__jsx-style-dynamic-selector:hover{-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);opacity:1;text-shadow:15px 15px ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark};}.navlink.__jsx-style-dynamic-selector:visited{color:black;}.navlink-B.__jsx-style-dynamic-selector:hover{text-shadow:-15px 15px ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark};}@media print{.wrapper.__jsx-style-dynamic-selector{display:none;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9jb21wb25lbnRzL05hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQk8sQUFHeUIsQUFNRCxBQUlDLEFBZVcsQUFLYixBQUd3QyxBQUlyQyxZQU5qQixDQU9FLENBckNlLEFBVUEsZUFUTixBQVVNLFNBVEwsTUFVTSxJQVRsQixJQThCQSxRQXBCdUIsY0FQQyxhQW1CWixVQUN5QyxhQVpyQyxjQUNXLHdCQVkzQixJQXBCQSwyREFTcUIsNkZBQ0Qsa0JBQ3dCLHVDQUM5QixZQUNNLGtCQUNOLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy93ZWItcG9ydGZvbGlvL2NvbXBvbmVudHMvTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBTb2NpYWxMaW5rcyBmcm9tIFwiLi9Tb2NpYWxMaW5rc1wiO1xuXG5jb25zdCBOYXYgPSAoKSA9PiAoXG4gIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZsaW5rXCI+SE9NRTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3Jlc3VtZVwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmxpbmsgbmF2bGluay1CXCI+UkVTVU1FPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8U29jaWFsTGlua3MgY2xhc3NOYW1lPVwic29jaWFsXCIgLz5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDMwdmg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuICAgICAgICAuZmxleCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZsaW5rIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogNjBweCAwO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZsaW5rOmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDE1cHggMTVweCAke3RoZW1lLmNvbG9ycy5kYXJrfTtcbiAgICAgICAgfVxuICAgICAgICAubmF2bGluazp2aXNpdGVkIHtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cbiAgICAgICAgLm5hdmxpbmstQjpob3ZlciB7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IC0xNXB4IDE1cHggJHt0aGVtZS5jb2xvcnMuZGFya307XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdfQ== */
/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/components/Nav.js */`));

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/Resume.js":
/*!******************************!*\
  !*** ./components/Resume.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database_resume__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database/resume */ "./database/resume.js");
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/web-portfolio/components/Resume.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Resume = () => {
  const values = Object.values(_database_resume__WEBPACK_IMPORTED_MODULE_3__["default"]);

  const renderExperience = expType => {
    const renderifLocationExist = exp => exp.location ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, ", ", __jsx("span", {
      className: "jsx-1259205619",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, exp.location), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1259205619",
      __self: undefined
    }, "span.jsx-1259205619{color:gray;font-weight:500;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9jb21wb25lbnRzL1Jlc3VtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjYSxBQUc0QixXQUNLLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL3dlYi1wb3J0Zm9saW8vY29tcG9uZW50cy9SZXN1bWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5pbXBvcnQgcmVzdW1lIGZyb20gXCIuLi9kYXRhYmFzZS9yZXN1bWVcIjtcblxuY29uc3QgUmVzdW1lID0gKCkgPT4ge1xuICBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKHJlc3VtZSk7XG5cbiAgY29uc3QgcmVuZGVyRXhwZXJpZW5jZSA9IChleHBUeXBlKSA9PiB7XG4gICAgY29uc3QgcmVuZGVyaWZMb2NhdGlvbkV4aXN0ID0gKGV4cCkgPT5cbiAgICAgIGV4cC5sb2NhdGlvbiA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICAsIDxzcGFuPntleHAubG9jYXRpb259PC9zcGFuPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgXCJcIlxuICAgICAgKTtcblxuICAgIGNvbnN0IHJlbmRlckdpdGh1YkxpbmsgPSAoZXhwLCBleHBUeXBlKSA9PiB7XG4gICAgICBzd2l0Y2ggKGV4cFR5cGUpIHtcbiAgICAgICAgY2FzZSBcInByb2Zlc3Npb25hbFwiOlxuICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICBjYXNlIFwicHJvamVjdFwiOlxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAte1wiIFwifVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2V4cC5saW5rWzFdfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9mb2xsb3cgbm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZXhwLmxpbmtbMF19XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYTo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIC8qIGFuaW1hdGlvbiAqL1xuICAgICAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiAwLjE1cztcbiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IDAuMTVzO1xuICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IDAuMTVzO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMTVzO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjE1cztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGE6aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgICAgICAgICAgICAgYVtocmVmXTo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCIoXCIgYXR0cihocmVmKSBcIilcIjtcbiAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8aDM+e2V4cFR5cGUudG9VcHBlckNhc2UoKX0gRVhQRVJJRU5DRTwvaDM+XG4gICAgICAgIHt2YWx1ZXNbM11bZXhwVHlwZV0ubWFwKChleHApID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3V1aWR2NCgpfSBjbGFzc05hbWU9XCJwcm9qZWN0XCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwcm9qZWN0LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIHtleHAudGl0bGV9XG4gICAgICAgICAgICAgICAge3JlbmRlcmlmTG9jYXRpb25FeGlzdChleHApfSB7cmVuZGVyR2l0aHViTGluayhleHAsIGV4cFR5cGUpfVxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8cD57ZXhwLnN1YlRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtleHAuZGVzY3JpcHRpb24ubWFwKChkZXNjKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXt1dWlkdjQoKX0+e2Rlc2N9PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3ZhbHVlc1s5XS5ib2R5fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2plY3Qge1xuICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyRWR1Y2F0aW9uID0gKCkgPT4gKFxuICAgIDw+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCI+RURVQ0FUSU9OPC9oMz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWR1Y2F0aW9uXCI+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICB7dmFsdWVzWzJdLnNjaG9vbCArIFwiIFwifVxuICAgICAgICAgIDxzcGFuPnt2YWx1ZXNbMl0ubG9jYXRpb259PC9zcGFuPlxuICAgICAgICA8L2gyPlxuICAgICAgICA8cD57dmFsdWVzWzJdLnN1YlRpdGxlfTwvcD5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHt2YWx1ZXNbMl0uZGVzY3JpcHRpb24ubWFwKChkZXNjKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXt1dWlkdjQoKX0+e2Rlc2N9PC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuaGlnaGxpZ2h0IHtcbiAgICAgICAgICAgIGNvbG9yOiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3ZhbHVlc1s5XS5ib2R5fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZWR1Y2F0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAxMHB4IDAgMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi13cmFwcGVyXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4tZG93bmxvYWRcIiBocmVmPXt2YWx1ZXNbMTBdWzFdfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAge3ZhbHVlc1sxMF1bMF19XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImxlZnQtY29sdW1uXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgIDxoMT57dmFsdWVzWzBdfTwvaDE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2Zlc3Npb25hbC1leHBcIj5cbiAgICAgICAgICAgICAgICB7cmVuZGVyRXhwZXJpZW5jZShcInByb2Zlc3Npb25hbFwiKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1leHBcIj57cmVuZGVyRXhwZXJpZW5jZShcInByb2plY3RcIil9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWR1Y2F0aW9uXCI+e3JlbmRlckVkdWNhdGlvbigpfTwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmlnaHQtY29sdW1uXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHt2YWx1ZXNbMV0ubGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dXVpZHY0KCl9IGNsYXNzTmFtZT1cImhvdmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtsaW5rWzFdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub2ZvbGxvdyBub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2xpbmtbMF19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIHt2YWx1ZXNbMV0ubm90TGlua3MubWFwKChub3RMaW5rKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXt1dWlkdjQoKX0+e25vdExpbmt9PC9wPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2hub2xvZ3kgc3Vic2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPlRFQ0hOT0xPR1k8L2gzPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIHt2YWx1ZXNbNF0ubWFwKCh0ZWNoKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3V1aWR2NCgpfT57dGVjaH08L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9ub3JzIHN1YnNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj5IT05PUlM8L2gzPlxuICAgICAgICAgICAgICAgIDxwPnt2YWx1ZXNbNV0udGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPnt2YWx1ZXNbNV0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5ndWFnZXMgc3Vic2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPkxBTkdVQUdFUzwvaDM+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAge3ZhbHVlc1s2XS5tYXAoKGxhbmcpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dXVpZHY0KCl9PntsYW5nfTwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRlcmVzdHMgc3Vic2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPklOVEVSRVNUUzwvaDM+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAge3ZhbHVlc1s3XS5tYXAoKGludCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt1dWlkdjQoKX0+e2ludH08L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9iYmllcyBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+SE9CQklFUzwvaDM+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAge3ZhbHVlc1s4XS5tYXAoKGhvYmJ5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3V1aWR2NCgpfT57aG9iYnl9PC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBjb2xvcjogJHt2YWx1ZXNbOV0uaGlnaGxpZ2h0fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogJHt2YWx1ZXNbOV0uaGlnaGxpZ2h0fTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpLCBwIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3ZhbHVlc1s5XS5ib2R5fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiA2cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnRuLXdyYXBwZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICAgICAgICAgIHRvcDogNHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ0bi1kb3dubG9hZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBsZWZ0OiAtMTByZW07XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt2YWx1ZXNbOV0uaGlnaGxpZ2h0fTtcbiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAuN3JlbSAwIC43cmVtO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogJHt2YWx1ZXNbOV0uaGlnaGxpZ2h0fSAwIDAgMTBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnRuLWRvd25sb2FkOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wYWdlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB6b29tOiAwLjc1O1xuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICR7dmFsdWVzWzldLmhpZ2hsaWdodH07XG4gICAgICAgICAgICBwYWRkaW5nOiA0LjNyZW07XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMS41M3JlbTtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJHt2YWx1ZXNbOV0uYm9yZGVyfTtcbiAgICAgICAgICAgIGJveC1zaGFkb3cgMTBweCAxMHB4IDEwcHggJHt2YWx1ZXNbOV0uc2hhZG93fTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNnJlbTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2Zlc3Npb25hbC1leHAge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDRyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wYWdlLWNvbnRlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxlZnQtY29sdW1uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmlnaHQtY29sdW1uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luOiA5cHggMCAyMHB4IDE1cHg7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1YnNlY3Rpb24ge1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgICAgICAgIC5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYWdlIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMS4ycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhZ2UtY29udGVudCB7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnRuLXdyYXBwZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJ0bi1kb3dubG9hZCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9mZXNzaW9uYWwtZXhwIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgICAgICAuYnRuLXdyYXBwZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9mZXNzaW9uYWwtZXhwIHtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDQ4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3Vic2VjdGlvbiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VtZTtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/components/Resume.js */")) : "";

    const renderGithubLink = (exp, expType) => {
      switch (expType) {
        case "professional":
          return "";

        case "project":
          return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "-", " ", __jsx("a", {
            href: exp.link[1],
            target: "_blank",
            rel: "nofollow noopener noreferrer",
            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["776407391", [values[9].highlight]]]),
            __self: undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }
          }, exp.link[0]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
            id: "776407391",
            dynamic: [values[9].highlight],
            __self: undefined
          }, `a.__jsx-style-dynamic-selector{display:inline-block;font-size:17px;-webkit-text-decoration:none;text-decoration:none;position:relative;-webkit-transition:all 0.15s;transition:all 0.15s;}a.__jsx-style-dynamic-selector::after{position:absolute;height:2px;width:100%;margin:0 auto;left:0;right:0;background:${values[9].highlight};content:"";bottom:0;-o-transition:0.15s;-ms-transition:0.15s;-moz-transition:0.15s;-webkit-transition:0.15s;-webkit-transition:0.15s;transition:0.15s;}a.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector::after{width:20%;background:red;}a.__jsx-style-dynamic-selector:visited{color:black;}@media print{a[href].__jsx-style-dynamic-selector::before{display:inline-block;color:gray;font-size:15px;font-weight:500;content:"(" attr(href) ")";white-space:nowrap;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9jb21wb25lbnRzL1Jlc3VtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ2lCLEFBRzBDLEFBT0gsQUFpQlIsQUFJRSxBQUlXLFVBUFIsRUFJakIsTUFyQmEsR0FQSSxBQWdDRixJQVBmLElBakJhLEdBeUJNLElBaENJLElBUVAsT0F5QkksT0F4QlgsT0FDQyxFQXdCcUIsTUF2QlcsaUJBVnRCLElBa0NHLGNBakNBLEtBVVYsQUF3QlgsV0F2QlMsU0FFVyxvQkFDQyxLQWJ2QixnQkFjd0Isc0JBQ0cseUJBQ1IsMENBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9jb21wb25lbnRzL1Jlc3VtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmltcG9ydCByZXN1bWUgZnJvbSBcIi4uL2RhdGFiYXNlL3Jlc3VtZVwiO1xuXG5jb25zdCBSZXN1bWUgPSAoKSA9PiB7XG4gIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMocmVzdW1lKTtcblxuICBjb25zdCByZW5kZXJFeHBlcmllbmNlID0gKGV4cFR5cGUpID0+IHtcbiAgICBjb25zdCByZW5kZXJpZkxvY2F0aW9uRXhpc3QgPSAoZXhwKSA9PlxuICAgICAgZXhwLmxvY2F0aW9uID8gKFxuICAgICAgICA8PlxuICAgICAgICAgICwgPHNwYW4+e2V4cC5sb2NhdGlvbn08L3NwYW4+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICBcIlwiXG4gICAgICApO1xuXG4gICAgY29uc3QgcmVuZGVyR2l0aHViTGluayA9IChleHAsIGV4cFR5cGUpID0+IHtcbiAgICAgIHN3aXRjaCAoZXhwVHlwZSkge1xuICAgICAgICBjYXNlIFwicHJvZmVzc2lvbmFsXCI6XG4gICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIGNhc2UgXCJwcm9qZWN0XCI6XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIC17XCIgXCJ9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17ZXhwLmxpbmtbMV19XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub2ZvbGxvdyBub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtleHAubGlua1swXX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBhOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dmFsdWVzWzldLmhpZ2hsaWdodH07XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgLyogYW5pbWF0aW9uICovXG4gICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IDAuMTVzO1xuICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogMC4xNXM7XG4gICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogMC4xNXM7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4xNXM7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMTVzO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYTpob3Zlcjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBhOnZpc2l0ZWQge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgICAgICAgICAgICAgICBhW2hyZWZdOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIihcIiBhdHRyKGhyZWYpIFwiKVwiO1xuICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxoMz57ZXhwVHlwZS50b1VwcGVyQ2FzZSgpfSBFWFBFUklFTkNFPC9oMz5cbiAgICAgICAge3ZhbHVlc1szXVtleHBUeXBlXS5tYXAoKGV4cCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17dXVpZHY0KCl9IGNsYXNzTmFtZT1cInByb2plY3RcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInByb2plY3QtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAge2V4cC50aXRsZX1cbiAgICAgICAgICAgICAgICB7cmVuZGVyaWZMb2NhdGlvbkV4aXN0KGV4cCl9IHtyZW5kZXJHaXRodWJMaW5rKGV4cCwgZXhwVHlwZSl9XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxwPntleHAuc3ViVGl0bGV9PC9wPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2V4cC5kZXNjcmlwdGlvbi5tYXAoKGRlc2MpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3V1aWR2NCgpfT57ZGVzY308L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgY29sb3I6ICR7dmFsdWVzWzldLmhpZ2hsaWdodH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgY29sb3I6ICR7dmFsdWVzWzldLmJvZHl9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJvamVjdCB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJFZHVjYXRpb24gPSAoKSA9PiAoXG4gICAgPD5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj5FRFVDQVRJT048L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZHVjYXRpb25cIj5cbiAgICAgICAgPGgyPlxuICAgICAgICAgIHt2YWx1ZXNbMl0uc2Nob29sICsgXCIgXCJ9XG4gICAgICAgICAgPHNwYW4+e3ZhbHVlc1syXS5sb2NhdGlvbn08L3NwYW4+XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwPnt2YWx1ZXNbMl0uc3ViVGl0bGV9PC9wPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3ZhbHVlc1syXS5kZXNjcmlwdGlvbi5tYXAoKGRlc2MpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3V1aWR2NCgpfT57ZGVzY308L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5oaWdobGlnaHQge1xuICAgICAgICAgICAgY29sb3I6ICR7dmFsdWVzWzldLmhpZ2hsaWdodH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgY29sb3I6ICR7dmFsdWVzWzldLmJvZHl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5lZHVjYXRpb24ge1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggMCAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi1kb3dubG9hZFwiIGhyZWY9e3ZhbHVlc1sxMF1bMV19IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICB7dmFsdWVzWzEwXVswXX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGVudFwiPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibGVmdC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgPGgxPnt2YWx1ZXNbMF19PC9oMT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmVzc2lvbmFsLWV4cFwiPlxuICAgICAgICAgICAgICAgIHtyZW5kZXJFeHBlcmllbmNlKFwicHJvZmVzc2lvbmFsXCIpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWV4cFwiPntyZW5kZXJFeHBlcmllbmNlKFwicHJvamVjdFwiKX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZHVjYXRpb25cIj57cmVuZGVyRWR1Y2F0aW9uKCl9PC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyaWdodC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAge3ZhbHVlc1sxXS5saW5rcy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt1dWlkdjQoKX0gY2xhc3NOYW1lPVwiaG92ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmtbMV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vZm9sbG93IG5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlua1swXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAge3ZhbHVlc1sxXS5ub3RMaW5rcy5tYXAoKG5vdExpbmspID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e3V1aWR2NCgpfT57bm90TGlua308L3A+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaG5vbG9neSBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+VEVDSE5PTE9HWTwvaDM+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAge3ZhbHVlc1s0XS5tYXAoKHRlY2gpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dXVpZHY0KCl9Pnt0ZWNofTwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob25vcnMgc3Vic2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPkhPTk9SUzwvaDM+XG4gICAgICAgICAgICAgICAgPHA+e3ZhbHVlc1s1XS50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgPHA+e3ZhbHVlc1s1XS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmd1YWdlcyBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+TEFOR1VBR0VTPC9oMz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICB7dmFsdWVzWzZdLm1hcCgobGFuZykgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt1dWlkdjQoKX0+e2xhbmd9PC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludGVyZXN0cyBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+SU5URVJFU1RTPC9oMz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICB7dmFsdWVzWzddLm1hcCgoaW50KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3V1aWR2NCgpfT57aW50fTwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob2JiaWVzIHN1YnNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj5IT0JCSUVTPC9oMz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICB7dmFsdWVzWzhdLm1hcCgoaG9iYnkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dXVpZHY0KCl9Pntob2JieX08L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGksIHAge1xuICAgICAgICAgICAgY29sb3I6ICR7dmFsdWVzWzldLmJvZHl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDZyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idG4td3JhcHBlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgICAgICAgICAgdG9wOiA0cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnRuLWRvd25sb2FkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGxlZnQ6IC0xMHJlbTtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIC43cmVtIDAgLjdyZW07XG4gICAgICAgICAgICBib3gtc2hhZG93OiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9IDAgMCAxMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idG4tZG93bmxvYWQ6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHpvb206IDAuNzU7XG4gICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC44NSk7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICR7dmFsdWVzWzldLmhpZ2hsaWdodH07XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiA3cHggc29saWQgJHt2YWx1ZXNbOV0uaGlnaGxpZ2h0fTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQuM3JlbTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxLjUzcmVtO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAke3ZhbHVlc1s5XS5ib3JkZXJ9O1xuICAgICAgICAgICAgYm94LXNoYWRvdyAxMHB4IDEwcHggMTBweCAke3ZhbHVlc1s5XS5zaGFkb3d9O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi42cmVtO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZmVzc2lvbmFsLWV4cCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBhZ2UtY29udGVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGVmdC1jb2x1bW4ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yaWdodC1jb2x1bW4ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDlweCAwIDIwcHggMTVweDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3Vic2VjdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgICAgICAgICAgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxLjJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFnZS1jb250ZW50IHtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5idG4td3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnRuLWRvd25sb2FkIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMnJlbSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2Zlc3Npb25hbC1leHAge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NnB4KSB7XG4gICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42NXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgICAgIC5idG4td3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFnZSB7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2Zlc3Npb25hbC1leHAge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdWJzZWN0aW9uIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdW1lO1xuIl19 */
/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/components/Resume.js */`));
      }
    };

    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1760692510", [values[9].highlight, values[9].body]]]),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }
    }, expType.toUpperCase(), " EXPERIENCE"), values[3][expType].map(exp => {
      return __jsx("div", {
        key: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1760692510", [values[9].highlight, values[9].body]]]) + " " + "project",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }
      }, __jsx("h2", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1760692510", [values[9].highlight, values[9].body]]]) + " " + "project-header",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 15
        }
      }, exp.title, renderifLocationExist(exp), " ", renderGithubLink(exp, expType)), __jsx("p", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1760692510", [values[9].highlight, values[9].body]]]),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 15
        }
      }, exp.subTitle), __jsx("ul", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1760692510", [values[9].highlight, values[9].body]]]),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 15
        }
      }, exp.description.map(desc => __jsx("li", {
        key: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1760692510", [values[9].highlight, values[9].body]]]),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 19
        }
      }, desc))));
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1760692510",
      dynamic: [values[9].highlight, values[9].body],
      __self: undefined
    }, `h3.__jsx-style-dynamic-selector{color:${values[9].highlight};}h2.__jsx-style-dynamic-selector{font-size:20px;}ul.__jsx-style-dynamic-selector{margin-left:15px;}li.__jsx-style-dynamic-selector{padding:5px;color:${values[9].body};}span.__jsx-style-dynamic-selector{font-size:17px;color:gray;}.project.__jsx-style-dynamic-selector{margin:10px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9jb21wb25lbnRzL1Jlc3VtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErR1csQUFHa0QsQUFHcEIsQUFHRSxBQUdMLEFBSUcsQUFJSCxZQVB1QixBQVFyQyxHQWRBLEFBVWEsRUFQYixTQVFBLFNBZEEsWUFVQSIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL3dlYi1wb3J0Zm9saW8vY29tcG9uZW50cy9SZXN1bWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5pbXBvcnQgcmVzdW1lIGZyb20gXCIuLi9kYXRhYmFzZS9yZXN1bWVcIjtcblxuY29uc3QgUmVzdW1lID0gKCkgPT4ge1xuICBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKHJlc3VtZSk7XG5cbiAgY29uc3QgcmVuZGVyRXhwZXJpZW5jZSA9IChleHBUeXBlKSA9PiB7XG4gICAgY29uc3QgcmVuZGVyaWZMb2NhdGlvbkV4aXN0ID0gKGV4cCkgPT5cbiAgICAgIGV4cC5sb2NhdGlvbiA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICAsIDxzcGFuPntleHAubG9jYXRpb259PC9zcGFuPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgXCJcIlxuICAgICAgKTtcblxuICAgIGNvbnN0IHJlbmRlckdpdGh1YkxpbmsgPSAoZXhwLCBleHBUeXBlKSA9PiB7XG4gICAgICBzd2l0Y2ggKGV4cFR5cGUpIHtcbiAgICAgICAgY2FzZSBcInByb2Zlc3Npb25hbFwiOlxuICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICBjYXNlIFwicHJvamVjdFwiOlxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAte1wiIFwifVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2V4cC5saW5rWzFdfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9mb2xsb3cgbm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZXhwLmxpbmtbMF19XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYTo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIC8qIGFuaW1hdGlvbiAqL1xuICAgICAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiAwLjE1cztcbiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IDAuMTVzO1xuICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IDAuMTVzO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMTVzO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjE1cztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGE6aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgICAgICAgICAgICAgYVtocmVmXTo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCIoXCIgYXR0cihocmVmKSBcIilcIjtcbiAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8aDM+e2V4cFR5cGUudG9VcHBlckNhc2UoKX0gRVhQRVJJRU5DRTwvaDM+XG4gICAgICAgIHt2YWx1ZXNbM11bZXhwVHlwZV0ubWFwKChleHApID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3V1aWR2NCgpfSBjbGFzc05hbWU9XCJwcm9qZWN0XCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwcm9qZWN0LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIHtleHAudGl0bGV9XG4gICAgICAgICAgICAgICAge3JlbmRlcmlmTG9jYXRpb25FeGlzdChleHApfSB7cmVuZGVyR2l0aHViTGluayhleHAsIGV4cFR5cGUpfVxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8cD57ZXhwLnN1YlRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtleHAuZGVzY3JpcHRpb24ubWFwKChkZXNjKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXt1dWlkdjQoKX0+e2Rlc2N9PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3ZhbHVlc1s5XS5ib2R5fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2plY3Qge1xuICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyRWR1Y2F0aW9uID0gKCkgPT4gKFxuICAgIDw+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCI+RURVQ0FUSU9OPC9oMz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWR1Y2F0aW9uXCI+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICB7dmFsdWVzWzJdLnNjaG9vbCArIFwiIFwifVxuICAgICAgICAgIDxzcGFuPnt2YWx1ZXNbMl0ubG9jYXRpb259PC9zcGFuPlxuICAgICAgICA8L2gyPlxuICAgICAgICA8cD57dmFsdWVzWzJdLnN1YlRpdGxlfTwvcD5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHt2YWx1ZXNbMl0uZGVzY3JpcHRpb24ubWFwKChkZXNjKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXt1dWlkdjQoKX0+e2Rlc2N9PC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuaGlnaGxpZ2h0IHtcbiAgICAgICAgICAgIGNvbG9yOiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3ZhbHVlc1s5XS5ib2R5fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZWR1Y2F0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAxMHB4IDAgMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi13cmFwcGVyXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4tZG93bmxvYWRcIiBocmVmPXt2YWx1ZXNbMTBdWzFdfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAge3ZhbHVlc1sxMF1bMF19XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImxlZnQtY29sdW1uXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPlxuICAgICAgICAgICAgICAgIDxoMT57dmFsdWVzWzBdfTwvaDE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2Zlc3Npb25hbC1leHBcIj5cbiAgICAgICAgICAgICAgICB7cmVuZGVyRXhwZXJpZW5jZShcInByb2Zlc3Npb25hbFwiKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1leHBcIj57cmVuZGVyRXhwZXJpZW5jZShcInByb2plY3RcIil9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWR1Y2F0aW9uXCI+e3JlbmRlckVkdWNhdGlvbigpfTwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmlnaHQtY29sdW1uXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHt2YWx1ZXNbMV0ubGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dXVpZHY0KCl9IGNsYXNzTmFtZT1cImhvdmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtsaW5rWzFdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub2ZvbGxvdyBub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2xpbmtbMF19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIHt2YWx1ZXNbMV0ubm90TGlua3MubWFwKChub3RMaW5rKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXt1dWlkdjQoKX0+e25vdExpbmt9PC9wPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2hub2xvZ3kgc3Vic2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPlRFQ0hOT0xPR1k8L2gzPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIHt2YWx1ZXNbNF0ubWFwKCh0ZWNoKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3V1aWR2NCgpfT57dGVjaH08L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9ub3JzIHN1YnNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj5IT05PUlM8L2gzPlxuICAgICAgICAgICAgICAgIDxwPnt2YWx1ZXNbNV0udGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPnt2YWx1ZXNbNV0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5ndWFnZXMgc3Vic2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPkxBTkdVQUdFUzwvaDM+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAge3ZhbHVlc1s2XS5tYXAoKGxhbmcpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dXVpZHY0KCl9PntsYW5nfTwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRlcmVzdHMgc3Vic2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPklOVEVSRVNUUzwvaDM+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAge3ZhbHVlc1s3XS5tYXAoKGludCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt1dWlkdjQoKX0+e2ludH08L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9iYmllcyBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+SE9CQklFUzwvaDM+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAge3ZhbHVlc1s4XS5tYXAoKGhvYmJ5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3V1aWR2NCgpfT57aG9iYnl9PC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBjb2xvcjogJHt2YWx1ZXNbOV0uaGlnaGxpZ2h0fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogJHt2YWx1ZXNbOV0uaGlnaGxpZ2h0fTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpLCBwIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3ZhbHVlc1s5XS5ib2R5fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiA2cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnRuLXdyYXBwZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICAgICAgICAgIHRvcDogNHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ0bi1kb3dubG9hZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBsZWZ0OiAtMTByZW07XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt2YWx1ZXNbOV0uaGlnaGxpZ2h0fTtcbiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAuN3JlbSAwIC43cmVtO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogJHt2YWx1ZXNbOV0uaGlnaGxpZ2h0fSAwIDAgMTBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnRuLWRvd25sb2FkOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wYWdlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB6b29tOiAwLjc1O1xuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICR7dmFsdWVzWzldLmhpZ2hsaWdodH07XG4gICAgICAgICAgICBwYWRkaW5nOiA0LjNyZW07XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMS41M3JlbTtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJHt2YWx1ZXNbOV0uYm9yZGVyfTtcbiAgICAgICAgICAgIGJveC1zaGFkb3cgMTBweCAxMHB4IDEwcHggJHt2YWx1ZXNbOV0uc2hhZG93fTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNnJlbTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2Zlc3Npb25hbC1leHAge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDRyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wYWdlLWNvbnRlbnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxlZnQtY29sdW1uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmlnaHQtY29sdW1uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luOiA5cHggMCAyMHB4IDE1cHg7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1YnNlY3Rpb24ge1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgICAgICAgIC5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYWdlIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMS4ycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhZ2UtY29udGVudCB7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnRuLXdyYXBwZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJ0bi1kb3dubG9hZCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9mZXNzaW9uYWwtZXhwIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgICAgICAuYnRuLXdyYXBwZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9mZXNzaW9uYWwtZXhwIHtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDQ4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3Vic2VjdGlvbiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VtZTtcbiJdfQ== */
/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/components/Resume.js */`));
  };

  const renderEducation = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2513404375", [values[9].highlight, values[9].body]]]) + " " + "highlight",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }
  }, "EDUCATION"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2513404375", [values[9].highlight, values[9].body]]]) + " " + "education",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2513404375", [values[9].highlight, values[9].body]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }, values[2].school + " ", __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2513404375", [values[9].highlight, values[9].body]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, values[2].location)), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2513404375", [values[9].highlight, values[9].body]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, values[2].subTitle), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2513404375", [values[9].highlight, values[9].body]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, values[2].description.map(desc => __jsx("li", {
    key: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2513404375", [values[9].highlight, values[9].body]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, desc)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2513404375",
    dynamic: [values[9].highlight, values[9].body],
    __self: undefined
  }, `.highlight.__jsx-style-dynamic-selector{color:${values[9].highlight};}span.__jsx-style-dynamic-selector{color:gray;font-weight:500;}ul.__jsx-style-dynamic-selector{margin-left:15px;}li.__jsx-style-dynamic-selector{color:${values[9].body};}h2.__jsx-style-dynamic-selector{font-size:20px;}.education.__jsx-style-dynamic-selector{margin:10px 10px 0 10px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9jb21wb25lbnRzL1Jlc3VtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwSlMsQUFHZ0QsQUFHeEIsQUFJTSxBQUdrQixBQUdwQixBQUdTLFdBWlIsSUFVbEIsRUFOQSxPQVNBLEdBWkEsUUFKQSxBQVVBIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9jb21wb25lbnRzL1Jlc3VtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmltcG9ydCByZXN1bWUgZnJvbSBcIi4uL2RhdGFiYXNlL3Jlc3VtZVwiO1xuXG5jb25zdCBSZXN1bWUgPSAoKSA9PiB7XG4gIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMocmVzdW1lKTtcblxuICBjb25zdCByZW5kZXJFeHBlcmllbmNlID0gKGV4cFR5cGUpID0+IHtcbiAgICBjb25zdCByZW5kZXJpZkxvY2F0aW9uRXhpc3QgPSAoZXhwKSA9PlxuICAgICAgZXhwLmxvY2F0aW9uID8gKFxuICAgICAgICA8PlxuICAgICAgICAgICwgPHNwYW4+e2V4cC5sb2NhdGlvbn08L3NwYW4+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICBcIlwiXG4gICAgICApO1xuXG4gICAgY29uc3QgcmVuZGVyR2l0aHViTGluayA9IChleHAsIGV4cFR5cGUpID0+IHtcbiAgICAgIHN3aXRjaCAoZXhwVHlwZSkge1xuICAgICAgICBjYXNlIFwicHJvZmVzc2lvbmFsXCI6XG4gICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIGNhc2UgXCJwcm9qZWN0XCI6XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIC17XCIgXCJ9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17ZXhwLmxpbmtbMV19XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub2ZvbGxvdyBub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtleHAubGlua1swXX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBhOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dmFsdWVzWzldLmhpZ2hsaWdodH07XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgLyogYW5pbWF0aW9uICovXG4gICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IDAuMTVzO1xuICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogMC4xNXM7XG4gICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogMC4xNXM7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4xNXM7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMTVzO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYTpob3Zlcjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBhOnZpc2l0ZWQge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgICAgICAgICAgICAgICBhW2hyZWZdOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIihcIiBhdHRyKGhyZWYpIFwiKVwiO1xuICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxoMz57ZXhwVHlwZS50b1VwcGVyQ2FzZSgpfSBFWFBFUklFTkNFPC9oMz5cbiAgICAgICAge3ZhbHVlc1szXVtleHBUeXBlXS5tYXAoKGV4cCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17dXVpZHY0KCl9IGNsYXNzTmFtZT1cInByb2plY3RcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInByb2plY3QtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAge2V4cC50aXRsZX1cbiAgICAgICAgICAgICAgICB7cmVuZGVyaWZMb2NhdGlvbkV4aXN0KGV4cCl9IHtyZW5kZXJHaXRodWJMaW5rKGV4cCwgZXhwVHlwZSl9XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxwPntleHAuc3ViVGl0bGV9PC9wPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2V4cC5kZXNjcmlwdGlvbi5tYXAoKGRlc2MpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3V1aWR2NCgpfT57ZGVzY308L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgY29sb3I6ICR7dmFsdWVzWzldLmhpZ2hsaWdodH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgY29sb3I6ICR7dmFsdWVzWzldLmJvZHl9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJvamVjdCB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJFZHVjYXRpb24gPSAoKSA9PiAoXG4gICAgPD5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj5FRFVDQVRJT048L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZHVjYXRpb25cIj5cbiAgICAgICAgPGgyPlxuICAgICAgICAgIHt2YWx1ZXNbMl0uc2Nob29sICsgXCIgXCJ9XG4gICAgICAgICAgPHNwYW4+e3ZhbHVlc1syXS5sb2NhdGlvbn08L3NwYW4+XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwPnt2YWx1ZXNbMl0uc3ViVGl0bGV9PC9wPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3ZhbHVlc1syXS5kZXNjcmlwdGlvbi5tYXAoKGRlc2MpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3V1aWR2NCgpfT57ZGVzY308L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5oaWdobGlnaHQge1xuICAgICAgICAgICAgY29sb3I6ICR7dmFsdWVzWzldLmhpZ2hsaWdodH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgY29sb3I6ICR7dmFsdWVzWzldLmJvZHl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5lZHVjYXRpb24ge1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggMCAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi1kb3dubG9hZFwiIGhyZWY9e3ZhbHVlc1sxMF1bMV19IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICB7dmFsdWVzWzEwXVswXX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGVudFwiPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibGVmdC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgPGgxPnt2YWx1ZXNbMF19PC9oMT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmVzc2lvbmFsLWV4cFwiPlxuICAgICAgICAgICAgICAgIHtyZW5kZXJFeHBlcmllbmNlKFwicHJvZmVzc2lvbmFsXCIpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWV4cFwiPntyZW5kZXJFeHBlcmllbmNlKFwicHJvamVjdFwiKX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZHVjYXRpb25cIj57cmVuZGVyRWR1Y2F0aW9uKCl9PC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyaWdodC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAge3ZhbHVlc1sxXS5saW5rcy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt1dWlkdjQoKX0gY2xhc3NOYW1lPVwiaG92ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmtbMV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vZm9sbG93IG5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlua1swXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAge3ZhbHVlc1sxXS5ub3RMaW5rcy5tYXAoKG5vdExpbmspID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e3V1aWR2NCgpfT57bm90TGlua308L3A+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaG5vbG9neSBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+VEVDSE5PTE9HWTwvaDM+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAge3ZhbHVlc1s0XS5tYXAoKHRlY2gpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dXVpZHY0KCl9Pnt0ZWNofTwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob25vcnMgc3Vic2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPkhPTk9SUzwvaDM+XG4gICAgICAgICAgICAgICAgPHA+e3ZhbHVlc1s1XS50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgPHA+e3ZhbHVlc1s1XS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmd1YWdlcyBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+TEFOR1VBR0VTPC9oMz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICB7dmFsdWVzWzZdLm1hcCgobGFuZykgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt1dWlkdjQoKX0+e2xhbmd9PC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludGVyZXN0cyBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+SU5URVJFU1RTPC9oMz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICB7dmFsdWVzWzddLm1hcCgoaW50KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3V1aWR2NCgpfT57aW50fTwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob2JiaWVzIHN1YnNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj5IT0JCSUVTPC9oMz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICB7dmFsdWVzWzhdLm1hcCgoaG9iYnkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dXVpZHY0KCl9Pntob2JieX08L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGksIHAge1xuICAgICAgICAgICAgY29sb3I6ICR7dmFsdWVzWzldLmJvZHl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDZyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idG4td3JhcHBlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgICAgICAgICAgdG9wOiA0cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnRuLWRvd25sb2FkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGxlZnQ6IC0xMHJlbTtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIC43cmVtIDAgLjdyZW07XG4gICAgICAgICAgICBib3gtc2hhZG93OiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9IDAgMCAxMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idG4tZG93bmxvYWQ6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHpvb206IDAuNzU7XG4gICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC44NSk7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICR7dmFsdWVzWzldLmhpZ2hsaWdodH07XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiA3cHggc29saWQgJHt2YWx1ZXNbOV0uaGlnaGxpZ2h0fTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQuM3JlbTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxLjUzcmVtO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAke3ZhbHVlc1s5XS5ib3JkZXJ9O1xuICAgICAgICAgICAgYm94LXNoYWRvdyAxMHB4IDEwcHggMTBweCAke3ZhbHVlc1s5XS5zaGFkb3d9O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi42cmVtO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZmVzc2lvbmFsLWV4cCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBhZ2UtY29udGVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGVmdC1jb2x1bW4ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yaWdodC1jb2x1bW4ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDlweCAwIDIwcHggMTVweDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3Vic2VjdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgICAgICAgICAgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxLjJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFnZS1jb250ZW50IHtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5idG4td3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnRuLWRvd25sb2FkIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMnJlbSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2Zlc3Npb25hbC1leHAge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NnB4KSB7XG4gICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42NXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgICAgIC5idG4td3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFnZSB7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2Zlc3Npb25hbC1leHAge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdWJzZWN0aW9uIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdW1lO1xuIl19 */
/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/components/Resume.js */`));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]) + " " + "background",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]) + " " + "page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]) + " " + "btn-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: values[10][1],
    target: "_blank",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]) + " " + "btn-download",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  }, values[10][0])), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]) + " " + "page-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 11
    }
  }, __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]) + " " + "left-column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]) + " " + "name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 15
    }
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 17
    }
  }, values[0])), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]) + " " + "professional-exp",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 15
    }
  }, renderExperience("professional")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]) + " " + "project-exp",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 15
    }
  }, renderExperience("project")), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]) + " " + "education",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 15
    }
  }, renderEducation())), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]) + " " + "right-column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]) + " " + "contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 17
    }
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 19
    }
  }, values[1].links.map(link => __jsx("li", {
    key: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]) + " " + "hover",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: link[1],
    target: "_blank",
    rel: "nofollow noopener noreferrer",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 25
    }
  }, link[0]))), values[1].notLinks.map(notLink => __jsx("p", {
    key: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 23
    }
  }, notLink))))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]) + " " + "technology subsection",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]) + " " + "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 17
    }
  }, "TECHNOLOGY"), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 17
    }
  }, values[4].map(tech => __jsx("li", {
    key: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 21
    }
  }, tech)))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]) + " " + "honors subsection",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]) + " " + "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 17
    }
  }, "HONORS"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 17
    }
  }, values[5].title), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 17
    }
  }, values[5].description)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]) + " " + "languages subsection",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]) + " " + "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 17
    }
  }, "LANGUAGES"), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 17
    }
  }, values[6].map(lang => __jsx("li", {
    key: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 21
    }
  }, lang)))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]) + " " + "interests subsection",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]) + " " + "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 17
    }
  }, "INTERESTS"), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 17
    }
  }, values[7].map(int => __jsx("li", {
    key: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 21
    }
  }, int)))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]) + " " + "hobbies subsection",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]) + " " + "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 17
    }
  }, "HOBBIES"), __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 17
    }
  }, values[8].map(hobby => __jsx("li", {
    key: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3835992159", [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 21
    }
  }, hobby)))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3835992159",
    dynamic: [values[9].highlight, values[9].highlight, values[9].body, values[9].highlight, values[9].highlight, values[9].highlight, values[9].highlight, values[9].border, values[9].shadow],
    __self: undefined
  }, `h3.__jsx-style-dynamic-selector{color:${values[9].highlight};}a.__jsx-style-dynamic-selector{color:${values[9].highlight};-webkit-text-decoration:none;text-decoration:none;font-weight:500;}li.__jsx-style-dynamic-selector,p.__jsx-style-dynamic-selector{color:${values[9].body};}span.__jsx-style-dynamic-selector{color:gray;font-size:20px;}.background.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;padding:6rem;}.btn-wrapper.__jsx-style-dynamic-selector{position:-webkit-sticky;position:sticky;position:-webkit-sticky;top:4rem;}.btn-download.__jsx-style-dynamic-selector{display:inline-block;position:relative;left:-10rem;white-space:nowrap;color:white;background-color:${values[9].highlight};padding:.5rem;border-radius:0 .7rem 0 .7rem;box-shadow:${values[9].highlight} 0 0 10px 0;}.btn-download.__jsx-style-dynamic-selector:hover{background-color:pink;}.page.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;zoom:0.75;-moz-transform:scale(0.85);-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-top:7px solid ${values[9].highlight};border-bottom:7px solid ${values[9].highlight};padding:4.3rem;padding-top:1.53rem;max-width:1000px;line-height:1.8;border-left:1px solid ${values[9].border};box-shadow:10px 10px 10px ${values[9].shadow};height:100%;}.name.__jsx-style-dynamic-selector{display:block;font-size:2.6rem;padding-top:1rem;white-space:nowrap;}.professional-exp.__jsx-style-dynamic-selector{padding-top:4rem;}.page-content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;}.left-column.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.right-column.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.contact.__jsx-style-dynamic-selector{font-size:14px;margin:9px 0 20px 15px;white-space:nowrap;}a.__jsx-style-dynamic-selector{display:block;-webkit-transition:all 0.15s;transition:all 0.15s;}a.__jsx-style-dynamic-selector:hover{-webkit-transform:translateY(-3px);-ms-transform:translateY(-3px);transform:translateY(-3px);}.subsection.__jsx-style-dynamic-selector{padding:15px;}.title.__jsx-style-dynamic-selector{margin-bottom:10px;}@media only screen and (max-width:900px){.background.__jsx-style-dynamic-selector{padding:0;}.page.__jsx-style-dynamic-selector{padding:1.2rem;}.page-content.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.btn-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.btn-download.__jsx-style-dynamic-selector{position:static;}.name.__jsx-style-dynamic-selector{padding:2rem 0;}.professional-exp.__jsx-style-dynamic-selector{padding:0;}}@media only screen and (max-width:376px){.name.__jsx-style-dynamic-selector{font-size:1.65rem;}}@media print{.btn-wrapper.__jsx-style-dynamic-selector{display:none;}.background.__jsx-style-dynamic-selector{padding:0;}.page.__jsx-style-dynamic-selector{border-left:none;box-shadow:none;line-height:1.5;}.professional-exp.__jsx-style-dynamic-selector{padding-top:48px;}.subsection.__jsx-style-dynamic-selector{padding:10px;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9jb21wb25lbnRzL1Jlc3VtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzUVMsQUFHZ0QsQUFHQSxBQUtBLEFBR3hCLEFBSUUsQUFPRyxBQUtLLEFBV0MsQUFHVCxBQWVDLEFBTUcsQUFHSixBQUlBLEFBTUEsQUFNRSxBQUtELEFBSWEsQUFHZCxBQUdNLEFBSVAsQUFHSyxBQUdPLEFBR1QsQUFJRyxBQUdELEFBR0wsQUFLUSxBQUtMLEFBR0gsQUFHTyxBQUtBLEFBR0osVUExQ2YsQUFtQkEsQUFhQSxDQXpIZSxFQWtGakIsQUFvQ0UsQUFjQSxDQXZGaUIsQUE4QkksQ0FMRSxBQXNCdkIsQUFhQSxDQUhBLENBbkRGLEFBeUVvQixBQUtsQixDQWhCQSxDQTVCRixFQXJFb0IsQ0FXcEIsSUExQkEsS0E2Q21CLEVBK0VDLEVBeElwQixBQUd1QixBQUt2QixHQTBFcUIsQ0F0RFAsQ0FOWSxRQW9DTCxDQStFbkIsRUE1R21CLE1Bc0RyQixPQTVEVyxBQWdFWCxHQTVCQSxHQTdCYyxHQU5kLENBVHdCLEFBMEJaLEFBd0JFLEFBSUksQUFNQSxBQWtDVyxJQUgzQixJQTNFOEMsRUFXbkIsQ0F0Q1gsQ0E4RGxCLElBSXdCLEFBTUEsR0FjeEIsUUFyRkEsVUFzQ3dCLGlCQVhSLGNBQ2dCLFVBakJYLGdCQXVEVSxBQU1DLEdBaUM5QixDQTVFbUQsaUJBVUQsa0NBVHBELGdCQVV1RCxNQTVCMUMsV0FDRSxhQUNmLGNBMkRBLFFBTkEsQ0ExQmlCLGVBQ0ssb0JBQ0gsaUJBQ0QsZ0JBQ21DLG1EQUNHLHVEQUMxQyxZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9jb21wb25lbnRzL1Jlc3VtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmltcG9ydCByZXN1bWUgZnJvbSBcIi4uL2RhdGFiYXNlL3Jlc3VtZVwiO1xuXG5jb25zdCBSZXN1bWUgPSAoKSA9PiB7XG4gIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMocmVzdW1lKTtcblxuICBjb25zdCByZW5kZXJFeHBlcmllbmNlID0gKGV4cFR5cGUpID0+IHtcbiAgICBjb25zdCByZW5kZXJpZkxvY2F0aW9uRXhpc3QgPSAoZXhwKSA9PlxuICAgICAgZXhwLmxvY2F0aW9uID8gKFxuICAgICAgICA8PlxuICAgICAgICAgICwgPHNwYW4+e2V4cC5sb2NhdGlvbn08L3NwYW4+XG4gICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICBcIlwiXG4gICAgICApO1xuXG4gICAgY29uc3QgcmVuZGVyR2l0aHViTGluayA9IChleHAsIGV4cFR5cGUpID0+IHtcbiAgICAgIHN3aXRjaCAoZXhwVHlwZSkge1xuICAgICAgICBjYXNlIFwicHJvZmVzc2lvbmFsXCI6XG4gICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIGNhc2UgXCJwcm9qZWN0XCI6XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIC17XCIgXCJ9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17ZXhwLmxpbmtbMV19XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub2ZvbGxvdyBub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtleHAubGlua1swXX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBhOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dmFsdWVzWzldLmhpZ2hsaWdodH07XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgLyogYW5pbWF0aW9uICovXG4gICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IDAuMTVzO1xuICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogMC4xNXM7XG4gICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogMC4xNXM7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4xNXM7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMTVzO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYTpob3Zlcjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBhOnZpc2l0ZWQge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgICAgICAgICAgICAgICBhW2hyZWZdOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIihcIiBhdHRyKGhyZWYpIFwiKVwiO1xuICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxoMz57ZXhwVHlwZS50b1VwcGVyQ2FzZSgpfSBFWFBFUklFTkNFPC9oMz5cbiAgICAgICAge3ZhbHVlc1szXVtleHBUeXBlXS5tYXAoKGV4cCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17dXVpZHY0KCl9IGNsYXNzTmFtZT1cInByb2plY3RcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInByb2plY3QtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAge2V4cC50aXRsZX1cbiAgICAgICAgICAgICAgICB7cmVuZGVyaWZMb2NhdGlvbkV4aXN0KGV4cCl9IHtyZW5kZXJHaXRodWJMaW5rKGV4cCwgZXhwVHlwZSl9XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxwPntleHAuc3ViVGl0bGV9PC9wPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2V4cC5kZXNjcmlwdGlvbi5tYXAoKGRlc2MpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3V1aWR2NCgpfT57ZGVzY308L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgY29sb3I6ICR7dmFsdWVzWzldLmhpZ2hsaWdodH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgY29sb3I6ICR7dmFsdWVzWzldLmJvZHl9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJvamVjdCB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJFZHVjYXRpb24gPSAoKSA9PiAoXG4gICAgPD5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj5FRFVDQVRJT048L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZHVjYXRpb25cIj5cbiAgICAgICAgPGgyPlxuICAgICAgICAgIHt2YWx1ZXNbMl0uc2Nob29sICsgXCIgXCJ9XG4gICAgICAgICAgPHNwYW4+e3ZhbHVlc1syXS5sb2NhdGlvbn08L3NwYW4+XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwPnt2YWx1ZXNbMl0uc3ViVGl0bGV9PC9wPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3ZhbHVlc1syXS5kZXNjcmlwdGlvbi5tYXAoKGRlc2MpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3V1aWR2NCgpfT57ZGVzY308L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5oaWdobGlnaHQge1xuICAgICAgICAgICAgY29sb3I6ICR7dmFsdWVzWzldLmhpZ2hsaWdodH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgY29sb3I6ICR7dmFsdWVzWzldLmJvZHl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5lZHVjYXRpb24ge1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggMCAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi1kb3dubG9hZFwiIGhyZWY9e3ZhbHVlc1sxMF1bMV19IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICB7dmFsdWVzWzEwXVswXX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGVudFwiPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibGVmdC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgPGgxPnt2YWx1ZXNbMF19PC9oMT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmVzc2lvbmFsLWV4cFwiPlxuICAgICAgICAgICAgICAgIHtyZW5kZXJFeHBlcmllbmNlKFwicHJvZmVzc2lvbmFsXCIpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWV4cFwiPntyZW5kZXJFeHBlcmllbmNlKFwicHJvamVjdFwiKX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZHVjYXRpb25cIj57cmVuZGVyRWR1Y2F0aW9uKCl9PC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyaWdodC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAge3ZhbHVlc1sxXS5saW5rcy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt1dWlkdjQoKX0gY2xhc3NOYW1lPVwiaG92ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmtbMV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vZm9sbG93IG5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlua1swXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAge3ZhbHVlc1sxXS5ub3RMaW5rcy5tYXAoKG5vdExpbmspID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e3V1aWR2NCgpfT57bm90TGlua308L3A+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaG5vbG9neSBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+VEVDSE5PTE9HWTwvaDM+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAge3ZhbHVlc1s0XS5tYXAoKHRlY2gpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dXVpZHY0KCl9Pnt0ZWNofTwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob25vcnMgc3Vic2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPkhPTk9SUzwvaDM+XG4gICAgICAgICAgICAgICAgPHA+e3ZhbHVlc1s1XS50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgPHA+e3ZhbHVlc1s1XS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmd1YWdlcyBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+TEFOR1VBR0VTPC9oMz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICB7dmFsdWVzWzZdLm1hcCgobGFuZykgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt1dWlkdjQoKX0+e2xhbmd9PC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludGVyZXN0cyBzdWJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+SU5URVJFU1RTPC9oMz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICB7dmFsdWVzWzddLm1hcCgoaW50KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3V1aWR2NCgpfT57aW50fTwvbGk+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob2JiaWVzIHN1YnNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj5IT0JCSUVTPC9oMz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICB7dmFsdWVzWzhdLm1hcCgoaG9iYnkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dXVpZHY0KCl9Pntob2JieX08L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGksIHAge1xuICAgICAgICAgICAgY29sb3I6ICR7dmFsdWVzWzldLmJvZHl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDZyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idG4td3JhcHBlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgICAgICAgICAgdG9wOiA0cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnRuLWRvd25sb2FkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGxlZnQ6IC0xMHJlbTtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9O1xuICAgICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIC43cmVtIDAgLjdyZW07XG4gICAgICAgICAgICBib3gtc2hhZG93OiAke3ZhbHVlc1s5XS5oaWdobGlnaHR9IDAgMCAxMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idG4tZG93bmxvYWQ6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHpvb206IDAuNzU7XG4gICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC44NSk7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICR7dmFsdWVzWzldLmhpZ2hsaWdodH07XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiA3cHggc29saWQgJHt2YWx1ZXNbOV0uaGlnaGxpZ2h0fTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQuM3JlbTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxLjUzcmVtO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAke3ZhbHVlc1s5XS5ib3JkZXJ9O1xuICAgICAgICAgICAgYm94LXNoYWRvdyAxMHB4IDEwcHggMTBweCAke3ZhbHVlc1s5XS5zaGFkb3d9O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi42cmVtO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZmVzc2lvbmFsLWV4cCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBhZ2UtY29udGVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGVmdC1jb2x1bW4ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yaWdodC1jb2x1bW4ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDlweCAwIDIwcHggMTVweDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3Vic2VjdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgICAgICAgICAgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxLjJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFnZS1jb250ZW50IHtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5idG4td3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnRuLWRvd25sb2FkIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMnJlbSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2Zlc3Npb25hbC1leHAge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NnB4KSB7XG4gICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42NXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIHByaW50IHtcbiAgICAgICAgICAgIC5idG4td3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFnZSB7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2Zlc3Npb25hbC1leHAge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdWJzZWN0aW9uIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdW1lO1xuIl19 */
/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/components/Resume.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (Resume);

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
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/web-portfolio/components/SocialLinks.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const SocialLink = ({
  title,
  link,
  viewbox,
  path
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["594371106", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink]]]),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx("a", {
  href: link,
  target: "_blank",
  rel: "nofollow noopener noreferrer",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["594371106", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink]]]),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}, __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  viewBox: viewbox,
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["594371106", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink]]]),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}, __jsx("title", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["594371106", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink]]]),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 11
  }
}, title), __jsx("path", {
  d: path,
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["594371106", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink]]]),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 11
  }
})))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "594371106",
  dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink],
  __self: undefined
}, `li.__jsx-style-dynamic-selector{margin-right:20px;}a.__jsx-style-dynamic-selector{display:inline-block;}svg.__jsx-style-dynamic-selector{height:20px;fill:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link};-webkit-transition:all 0.15s;transition:all 0.15s;}svg.__jsx-style-dynamic-selector:hover{fill:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9jb21wb25lbnRzL1NvY2lhbExpbmtzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVPLEFBRzZCLEFBR0csQUFHVCxBQUtzQixZQUpBLE1BTnBDLEdBR0EsYUFRQSxZQUp1QixrREFDdkIiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy93ZWItcG9ydGZvbGlvL2NvbXBvbmVudHMvU29jaWFsTGlua3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBTb2NpYWxMaW5rID0gKHsgdGl0bGUsIGxpbmssIHZpZXdib3gsIHBhdGggfSkgPT4gKFxuICA8PlxuICAgIDxsaT5cbiAgICAgIDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93IG5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgcm9sZT1cImltZ1wiIHZpZXdCb3g9e3ZpZXdib3h9PlxuICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgICA8cGF0aCBkPXtwYXRofSAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYT5cbiAgICA8L2xpPlxuXG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIGZpbGw6ICR7dGhlbWUuY29sb3JzLmxpbmt9O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgICAgICAgfVxuICAgICAgICBzdmc6aG92ZXIge1xuICAgICAgICAgIGZpbGw6ICR7dGhlbWUuY29sb3JzLnBpbmt9O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvPlxuKTtcblxuY29uc3QgU29jaWFsTGlua3MgPSAoKSA9PiAoXG4gIDx1bCBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICA8U29jaWFsTGlua1xuICAgICAgdGl0bGU9XCJHaXRIdWJcIlxuICAgICAgbGluaz1cIi8vZ2l0aHViLmNvbS93YzM1NlwiXG4gICAgICB2aWV3Ym94PVwiMCAwIDQzOC41NDkgNDM4LjU0OVwiXG4gICAgICBwYXRoPVwiTTQwOS4xMzIsMTE0LjU3M2MtMTkuNjA4LTMzLjU5Ni00Ni4yMDUtNjAuMTk0LTc5Ljc5OC03OS44QzI5NS43MzYsMTUuMTY2LDI1OS4wNTcsNS4zNjUsMjE5LjI3MSw1LjM2NSBjLTM5Ljc4MSwwLTc2LjQ3Miw5LjgwNC0xMTAuMDYzLDI5LjQwOGMtMzMuNTk2LDE5LjYwNS02MC4xOTIsNDYuMjA0LTc5LjgsNzkuOEM5LjgwMywxNDguMTY4LDAsMTg0Ljg1NCwwLDIyNC42MyBjMCw0Ny43OCwxMy45NCw5MC43NDUsNDEuODI3LDEyOC45MDZjMjcuODg0LDM4LjE2NCw2My45MDYsNjQuNTcyLDEwOC4wNjMsNzkuMjI3YzUuMTQsMC45NTQsOC45NDUsMC4yODMsMTEuNDE5LTEuOTk2IGMyLjQ3NS0yLjI4MiwzLjcxMS01LjE0LDMuNzExLTguNTYyYzAtMC41NzEtMC4wNDktNS43MDgtMC4xNDQtMTUuNDE3Yy0wLjA5OC05LjcwOS0wLjE0NC0xOC4xNzktMC4xNDQtMjUuNDA2bC02LjU2NywxLjEzNiBjLTQuMTg3LDAuNzY3LTkuNDY5LDEuMDkyLTE1Ljg0NiwxYy02LjM3NC0wLjA4OS0xMi45OTEtMC43NTctMTkuODQyLTEuOTk5Yy02Ljg1NC0xLjIzMS0xMy4yMjktNC4wODYtMTkuMTMtOC41NTkgYy01Ljg5OC00LjQ3My0xMC4wODUtMTAuMzI4LTEyLjU2LTE3LjU1NmwtMi44NTUtNi41N2MtMS45MDMtNC4zNzQtNC44OTktOS4yMzMtOC45OTItMTQuNTU5IGMtNC4wOTMtNS4zMzEtOC4yMzItOC45NDUtMTIuNDE5LTEwLjg0OGwtMS45OTktMS40MzFjLTEuMzMyLTAuOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5Yy0xLjE0Mi0xLjMzMS0xLjk5Ny0yLjY2My0yLjU2OC0zLjk5NyBjLTAuNTcyLTEuMzM1LTAuMDk4LTIuNDMsMS40MjctMy4yODljMS41MjUtMC44NTksNC4yODEtMS4yNzYsOC4yOC0xLjI3Nmw1LjcwOCwwLjg1M2MzLjgwNywwLjc2Myw4LjUxNiwzLjA0MiwxNC4xMzMsNi44NTEgYzUuNjE0LDMuODA2LDEwLjIyOSw4Ljc1NCwxMy44NDYsMTQuODQyYzQuMzgsNy44MDYsOS42NTcsMTMuNzU0LDE1Ljg0NiwxNy44NDdjNi4xODQsNC4wOTMsMTIuNDE5LDYuMTM2LDE4LjY5OSw2LjEzNiBjNi4yOCwwLDExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjNjNC41NjUtMC45NTIsOC44NDgtMi4zODMsMTIuODQ3LTQuMjg1YzEuNzEzLTEyLjc1OCw2LjM3Ny0yMi41NTksMTMuOTg4LTI5LjQxIGMtMTAuODQ4LTEuMTQtMjAuNjAxLTIuODU3LTI5LjI2NC01LjE0Yy04LjY1OC0yLjI4Ni0xNy42MDUtNS45OTYtMjYuODM1LTExLjE0Yy05LjIzNS01LjEzNy0xNi44OTYtMTEuNTE2LTIyLjk4NS0xOS4xMjYgYy02LjA5LTcuNjE0LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc5Yy0zLjkwMS0xMi4zNzQtNS44NTItMjYuNjQ4LTUuODUyLTQyLjgyNmMwLTIzLjAzNSw3LjUyLTQyLjYzNywyMi41NTctNTguODE3IGMtNy4wNDQtMTcuMzE4LTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNGM1LjUyLTEuNzE1LDEzLjcwNi0wLjQyOCwyNC41NTQsMy44NTNjMTAuODUsNC4yODMsMTguNzk0LDcuOTUyLDIzLjg0LDEwLjk5NCBjNS4wNDYsMy4wNDEsOS4wODksNS42MTgsMTIuMTM1LDcuNzA4YzE3LjcwNS00Ljk0NywzNS45NzYtNy40MjEsNTQuODE4LTcuNDIxczM3LjExNywyLjQ3NCw1NC44MjMsNy40MjFsMTAuODQ5LTYuODQ5IGM3LjQxOS00LjU3LDE2LjE4LTguNzU4LDI2LjI2Mi0xMi41NjVjMTAuMDg4LTMuODA1LDE3LjgwMi00Ljg1MywyMy4xMzQtMy4xMzhjOC41NjIsMjEuNTA5LDkuMzI1LDQwLjkyMiwyLjI3OSw1OC4yNCBjMTUuMDM2LDE2LjE4LDIyLjU1OSwzNS43ODcsMjIuNTU5LDU4LjgxN2MwLDE2LjE3OC0xLjk1OCwzMC40OTctNS44NTMsNDIuOTY2Yy0zLjksMTIuNDcxLTguOTQxLDIyLjQ1Ny0xNS4xMjUsMjkuOTc5IGMtNi4xOTEsNy41MjEtMTMuOTAxLDEzLjg1LTIzLjEzMSwxOC45ODZjLTkuMjMyLDUuMTQtMTguMTgyLDguODUtMjYuODQsMTEuMTM2Yy04LjY2MiwyLjI4Ni0xOC40MTUsNC4wMDQtMjkuMjYzLDUuMTQ2IGM5Ljg5NCw4LjU2MiwxNC44NDIsMjIuMDc3LDE0Ljg0Miw0MC41Mzl2NjAuMjM3YzAsMy40MjIsMS4xOSw2LjI3OSwzLjU3Miw4LjU2MmMyLjM3OSwyLjI3OSw2LjEzNiwyLjk1LDExLjI3NiwxLjk5NSBjNDQuMTYzLTE0LjY1Myw4MC4xODUtNDEuMDYyLDEwOC4wNjgtNzkuMjI2YzI3Ljg4LTM4LjE2MSw0MS44MjUtODEuMTI2LDQxLjgyNS0xMjguOTA2IEM0MzguNTM2LDE4NC44NTEsNDI4LjcyOCwxNDguMTY4LDQwOS4xMzIsMTE0LjU3M3pcIlxuICAgIC8+XG4gICAgPFNvY2lhbExpbmtcbiAgICAgIHRpdGxlPVwiTGlua2VkSW5cIlxuICAgICAgbGluaz1cIi8vd3d3LmxpbmtlZGluLmNvbS9pbi93b28teW91bmcvXCJcbiAgICAgIHZpZXdib3g9XCIwIDAgNDMwLjExNyA0MzAuMTE3XCJcbiAgICAgIHBhdGg9XCJNNDMwLjExNywyNjEuNTQzVjQyMC41NmgtOTIuMTg4VjI3Mi4xOTNjMC0zNy4yNzEtMTMuMzM0LTYyLjcwNy00Ni43MDMtNjIuNzA3IGMtMjUuNDczLDAtNDAuNjMyLDE3LjE0Mi00Ny4zMDEsMzMuNzI0Yy0yLjQzMiw1LjkyOC0zLjA1OCwxNC4xNzktMy4wNTgsMjIuNDc3VjQyMC41NmgtOTIuMjE5YzAsMCwxLjI0Mi0yNTEuMjg1LDAtMjc3LjMyaDkyLjIxIHYzOS4zMDljLTAuMTg3LDAuMjk0LTAuNDMsMC42MTEtMC42MDYsMC44OTZoMC42MDZ2LTAuODk2YzEyLjI1MS0xOC44NjksMzQuMTMtNDUuODI0LDgzLjEwMi00NS44MjQgQzM4NC42MzMsMTM2LjcyNCw0MzAuMTE3LDE3Ni4zNjEsNDMwLjExNywyNjEuNTQzeiBNNTIuMTgzLDkuNTU4QzIwLjYzNSw5LjU1OCwwLDMwLjI1MSwwLDU3LjQ2MyBjMCwyNi42MTksMjAuMDM4LDQ3Ljk0LDUwLjk1OSw0Ny45NGgwLjYxNmMzMi4xNTksMCw1Mi4xNTktMjEuMzE3LDUyLjE1OS00Ny45NEMxMDMuMTI4LDMwLjI1MSw4My43MzQsOS41NTgsNTIuMTgzLDkuNTU4eiBNNS40NzcsNDIwLjU2aDkyLjE4NHYtMjc3LjMySDUuNDc3VjQyMC41NnpcIlxuICAgIC8+XG4gICAgPFNvY2lhbExpbmtcbiAgICAgIHRpdGxlPVwiQ29kZVBlblwiXG4gICAgICBsaW5rPVwiLy9jb2RlcGVuLmlvL3djMzU2XCJcbiAgICAgIHZpZXdib3g9XCIwIDAgMzEuNjY1IDMxLjY2NVwiXG4gICAgICBwYXRoPVwiTTE2Ljg3OCwwLjQxNWMtMC44NTQtMC41NjUtMS45NjgtMC41NTItMi44MDksMC4wMzRMMS40ODUsOS4yMTRjLTAuNjcxLDAuNDY4LTEuMDcxLDEuMjMzLTEuMDcxLDIuMDUydjkuNDQ0IGMwLDAuODQsMC40MjEsMS42MjMsMS4xMjIsMi4wODZsMTIuNzksOC40NTVjMC44MzYsMC41NTMsMS45MjIsMC41NTMsMi43NTgsMGwxMy4wNDQtOC42MThjMC43LTAuNDYzLDEuMTIyLTEuMjQ2LDEuMTIyLTIuMDg2IHYtOS4yNzljMC0wLjgzOS0wLjQyMS0xLjYyMi0xLjEyMS0yLjA4NUwxNi44NzgsMC40MTV6IE0yNi42MjEsMTAuNjQ1bC00LjgyMSwzLjIzN2wtNC41MjEtMy4yODhMMTcuMjUsNC4xMjdMMjYuNjIxLDEwLjY0NXogTTEzLjk3OSw0LjEzM3Y2LjMyOWwtNC42MzMsMy4yNGwtNC42MjEtMy4wOTlMMTMuOTc5LDQuMTMzeiBNMy40NTgsMTMuNzIybDIuOTkxLDIuMDA0bC0yLjk5MSwyLjA5M1YxMy43MjJ6IE0xNC4wNTgsMjcuMjE1IGwtOS4zMzEtNi4yNThsNC42NjEtMy4yNThsNC42NywzLjEzM1YyNy4yMTV6IE0xMi4yODYsMTUuNjc0bDMuMDIxLTIuMTEzbDMuNTE5LDIuMzEzbC0zLjExOSwyLjA5NUwxMi4yODYsMTUuNjc0eiBNMTcuMzU0LDI3LjIxNSBWMjAuODNsNC40NjMtMi45OTFsNC44MDUsMy4xNTlMMTcuMzU0LDI3LjIxNXogTTI3Ljk1NCwxNy45MjdsLTMuMTY4LTIuMDgybDMuMTY4LTIuMTI1VjE3LjkyN3pcIlxuICAgIC8+XG4gICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+XG4gICAgICA8YSBjbGFzc05hbWU9XCJibG9nXCI+QmxvZzwvYT5cbiAgICA8L0xpbms+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5uYXZiYXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgIHJpZ2h0OiAzMHB4O1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cbiAgICAgICAgLmJsb2cge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5saW5rfTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuYmxvZzpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnBpbmt9O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgICAgLm5hdmJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L3VsPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU29jaWFsTGlua3M7XG4iXX0= */
/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/components/SocialLinks.js */`));

const SocialLinks = () => __jsx("ul", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1551433030", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink]]]) + " " + "navbar",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 3
  }
}, __jsx(SocialLink, {
  title: "GitHub",
  link: "//github.com/wc356",
  viewbox: "0 0 438.549 438.549",
  path: "M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }
}), __jsx(SocialLink, {
  title: "LinkedIn",
  link: "//www.linkedin.com/in/woo-young/",
  viewbox: "0 0 430.117 430.117",
  path: "M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }
}), __jsx(SocialLink, {
  title: "CodePen",
  link: "//codepen.io/wc356",
  viewbox: "0 0 31.665 31.665",
  path: "M16.878,0.415c-0.854-0.565-1.968-0.552-2.809,0.034L1.485,9.214c-0.671,0.468-1.071,1.233-1.071,2.052v9.444 c0,0.84,0.421,1.623,1.122,2.086l12.79,8.455c0.836,0.553,1.922,0.553,2.758,0l13.044-8.618c0.7-0.463,1.122-1.246,1.122-2.086 v-9.279c0-0.839-0.421-1.622-1.121-2.085L16.878,0.415z M26.621,10.645l-4.821,3.237l-4.521-3.288L17.25,4.127L26.621,10.645z M13.979,4.133v6.329l-4.633,3.24l-4.621-3.099L13.979,4.133z M3.458,13.722l2.991,2.004l-2.991,2.093V13.722z M14.058,27.215 l-9.331-6.258l4.661-3.258l4.67,3.133V27.215z M12.286,15.674l3.021-2.113l3.519,2.313l-3.119,2.095L12.286,15.674z M17.354,27.215 V20.83l4.463-2.991l4.805,3.159L17.354,27.215z M27.954,17.927l-3.168-2.082l3.168-2.125V17.927z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }
}), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/blog",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }
}, __jsx("a", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1551433030", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink]]]) + " " + "blog",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 7
  }
}, "Blog")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1551433030",
  dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink],
  __self: undefined
}, `.navbar.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;background-color:rgba(255,255,255,0.8);border-radius:7px;position:fixed;padding:8px;top:20px;right:30px;z-index:1;}.blog.__jsx-style-dynamic-selector{color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link};font-weight:600;-webkit-text-decoration:none;text-decoration:none;}.blog.__jsx-style-dynamic-selector:hover{color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink};}@media print{.navbar.__jsx-style-dynamic-selector{display:none;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvd2ViLXBvcnRmb2xpby9jb21wb25lbnRzL1NvY2lhbExpbmtzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJETyxBQUd3QixBQVdzQixBQUtBLEFBSXBCLGFBQ2Ysc0JBVGdCLEFBS2xCLGdCQUp1Qix1QkFaRiwyQkFhckIsMENBWjRDLHVDQUN4QixrQkFDSCxlQUNILFlBQ0gsU0FDRSxXQUNELFVBQ1oiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy93ZWItcG9ydGZvbGlvL2NvbXBvbmVudHMvU29jaWFsTGlua3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBTb2NpYWxMaW5rID0gKHsgdGl0bGUsIGxpbmssIHZpZXdib3gsIHBhdGggfSkgPT4gKFxuICA8PlxuICAgIDxsaT5cbiAgICAgIDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93IG5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgcm9sZT1cImltZ1wiIHZpZXdCb3g9e3ZpZXdib3h9PlxuICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgICA8cGF0aCBkPXtwYXRofSAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYT5cbiAgICA8L2xpPlxuXG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIGZpbGw6ICR7dGhlbWUuY29sb3JzLmxpbmt9O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgICAgICAgfVxuICAgICAgICBzdmc6aG92ZXIge1xuICAgICAgICAgIGZpbGw6ICR7dGhlbWUuY29sb3JzLnBpbmt9O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvPlxuKTtcblxuY29uc3QgU29jaWFsTGlua3MgPSAoKSA9PiAoXG4gIDx1bCBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICA8U29jaWFsTGlua1xuICAgICAgdGl0bGU9XCJHaXRIdWJcIlxuICAgICAgbGluaz1cIi8vZ2l0aHViLmNvbS93YzM1NlwiXG4gICAgICB2aWV3Ym94PVwiMCAwIDQzOC41NDkgNDM4LjU0OVwiXG4gICAgICBwYXRoPVwiTTQwOS4xMzIsMTE0LjU3M2MtMTkuNjA4LTMzLjU5Ni00Ni4yMDUtNjAuMTk0LTc5Ljc5OC03OS44QzI5NS43MzYsMTUuMTY2LDI1OS4wNTcsNS4zNjUsMjE5LjI3MSw1LjM2NSBjLTM5Ljc4MSwwLTc2LjQ3Miw5LjgwNC0xMTAuMDYzLDI5LjQwOGMtMzMuNTk2LDE5LjYwNS02MC4xOTIsNDYuMjA0LTc5LjgsNzkuOEM5LjgwMywxNDguMTY4LDAsMTg0Ljg1NCwwLDIyNC42MyBjMCw0Ny43OCwxMy45NCw5MC43NDUsNDEuODI3LDEyOC45MDZjMjcuODg0LDM4LjE2NCw2My45MDYsNjQuNTcyLDEwOC4wNjMsNzkuMjI3YzUuMTQsMC45NTQsOC45NDUsMC4yODMsMTEuNDE5LTEuOTk2IGMyLjQ3NS0yLjI4MiwzLjcxMS01LjE0LDMuNzExLTguNTYyYzAtMC41NzEtMC4wNDktNS43MDgtMC4xNDQtMTUuNDE3Yy0wLjA5OC05LjcwOS0wLjE0NC0xOC4xNzktMC4xNDQtMjUuNDA2bC02LjU2NywxLjEzNiBjLTQuMTg3LDAuNzY3LTkuNDY5LDEuMDkyLTE1Ljg0NiwxYy02LjM3NC0wLjA4OS0xMi45OTEtMC43NTctMTkuODQyLTEuOTk5Yy02Ljg1NC0xLjIzMS0xMy4yMjktNC4wODYtMTkuMTMtOC41NTkgYy01Ljg5OC00LjQ3My0xMC4wODUtMTAuMzI4LTEyLjU2LTE3LjU1NmwtMi44NTUtNi41N2MtMS45MDMtNC4zNzQtNC44OTktOS4yMzMtOC45OTItMTQuNTU5IGMtNC4wOTMtNS4zMzEtOC4yMzItOC45NDUtMTIuNDE5LTEwLjg0OGwtMS45OTktMS40MzFjLTEuMzMyLTAuOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5Yy0xLjE0Mi0xLjMzMS0xLjk5Ny0yLjY2My0yLjU2OC0zLjk5NyBjLTAuNTcyLTEuMzM1LTAuMDk4LTIuNDMsMS40MjctMy4yODljMS41MjUtMC44NTksNC4yODEtMS4yNzYsOC4yOC0xLjI3Nmw1LjcwOCwwLjg1M2MzLjgwNywwLjc2Myw4LjUxNiwzLjA0MiwxNC4xMzMsNi44NTEgYzUuNjE0LDMuODA2LDEwLjIyOSw4Ljc1NCwxMy44NDYsMTQuODQyYzQuMzgsNy44MDYsOS42NTcsMTMuNzU0LDE1Ljg0NiwxNy44NDdjNi4xODQsNC4wOTMsMTIuNDE5LDYuMTM2LDE4LjY5OSw2LjEzNiBjNi4yOCwwLDExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjNjNC41NjUtMC45NTIsOC44NDgtMi4zODMsMTIuODQ3LTQuMjg1YzEuNzEzLTEyLjc1OCw2LjM3Ny0yMi41NTksMTMuOTg4LTI5LjQxIGMtMTAuODQ4LTEuMTQtMjAuNjAxLTIuODU3LTI5LjI2NC01LjE0Yy04LjY1OC0yLjI4Ni0xNy42MDUtNS45OTYtMjYuODM1LTExLjE0Yy05LjIzNS01LjEzNy0xNi44OTYtMTEuNTE2LTIyLjk4NS0xOS4xMjYgYy02LjA5LTcuNjE0LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc5Yy0zLjkwMS0xMi4zNzQtNS44NTItMjYuNjQ4LTUuODUyLTQyLjgyNmMwLTIzLjAzNSw3LjUyLTQyLjYzNywyMi41NTctNTguODE3IGMtNy4wNDQtMTcuMzE4LTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNGM1LjUyLTEuNzE1LDEzLjcwNi0wLjQyOCwyNC41NTQsMy44NTNjMTAuODUsNC4yODMsMTguNzk0LDcuOTUyLDIzLjg0LDEwLjk5NCBjNS4wNDYsMy4wNDEsOS4wODksNS42MTgsMTIuMTM1LDcuNzA4YzE3LjcwNS00Ljk0NywzNS45NzYtNy40MjEsNTQuODE4LTcuNDIxczM3LjExNywyLjQ3NCw1NC44MjMsNy40MjFsMTAuODQ5LTYuODQ5IGM3LjQxOS00LjU3LDE2LjE4LTguNzU4LDI2LjI2Mi0xMi41NjVjMTAuMDg4LTMuODA1LDE3LjgwMi00Ljg1MywyMy4xMzQtMy4xMzhjOC41NjIsMjEuNTA5LDkuMzI1LDQwLjkyMiwyLjI3OSw1OC4yNCBjMTUuMDM2LDE2LjE4LDIyLjU1OSwzNS43ODcsMjIuNTU5LDU4LjgxN2MwLDE2LjE3OC0xLjk1OCwzMC40OTctNS44NTMsNDIuOTY2Yy0zLjksMTIuNDcxLTguOTQxLDIyLjQ1Ny0xNS4xMjUsMjkuOTc5IGMtNi4xOTEsNy41MjEtMTMuOTAxLDEzLjg1LTIzLjEzMSwxOC45ODZjLTkuMjMyLDUuMTQtMTguMTgyLDguODUtMjYuODQsMTEuMTM2Yy04LjY2MiwyLjI4Ni0xOC40MTUsNC4wMDQtMjkuMjYzLDUuMTQ2IGM5Ljg5NCw4LjU2MiwxNC44NDIsMjIuMDc3LDE0Ljg0Miw0MC41Mzl2NjAuMjM3YzAsMy40MjIsMS4xOSw2LjI3OSwzLjU3Miw4LjU2MmMyLjM3OSwyLjI3OSw2LjEzNiwyLjk1LDExLjI3NiwxLjk5NSBjNDQuMTYzLTE0LjY1Myw4MC4xODUtNDEuMDYyLDEwOC4wNjgtNzkuMjI2YzI3Ljg4LTM4LjE2MSw0MS44MjUtODEuMTI2LDQxLjgyNS0xMjguOTA2IEM0MzguNTM2LDE4NC44NTEsNDI4LjcyOCwxNDguMTY4LDQwOS4xMzIsMTE0LjU3M3pcIlxuICAgIC8+XG4gICAgPFNvY2lhbExpbmtcbiAgICAgIHRpdGxlPVwiTGlua2VkSW5cIlxuICAgICAgbGluaz1cIi8vd3d3LmxpbmtlZGluLmNvbS9pbi93b28teW91bmcvXCJcbiAgICAgIHZpZXdib3g9XCIwIDAgNDMwLjExNyA0MzAuMTE3XCJcbiAgICAgIHBhdGg9XCJNNDMwLjExNywyNjEuNTQzVjQyMC41NmgtOTIuMTg4VjI3Mi4xOTNjMC0zNy4yNzEtMTMuMzM0LTYyLjcwNy00Ni43MDMtNjIuNzA3IGMtMjUuNDczLDAtNDAuNjMyLDE3LjE0Mi00Ny4zMDEsMzMuNzI0Yy0yLjQzMiw1LjkyOC0zLjA1OCwxNC4xNzktMy4wNTgsMjIuNDc3VjQyMC41NmgtOTIuMjE5YzAsMCwxLjI0Mi0yNTEuMjg1LDAtMjc3LjMyaDkyLjIxIHYzOS4zMDljLTAuMTg3LDAuMjk0LTAuNDMsMC42MTEtMC42MDYsMC44OTZoMC42MDZ2LTAuODk2YzEyLjI1MS0xOC44NjksMzQuMTMtNDUuODI0LDgzLjEwMi00NS44MjQgQzM4NC42MzMsMTM2LjcyNCw0MzAuMTE3LDE3Ni4zNjEsNDMwLjExNywyNjEuNTQzeiBNNTIuMTgzLDkuNTU4QzIwLjYzNSw5LjU1OCwwLDMwLjI1MSwwLDU3LjQ2MyBjMCwyNi42MTksMjAuMDM4LDQ3Ljk0LDUwLjk1OSw0Ny45NGgwLjYxNmMzMi4xNTksMCw1Mi4xNTktMjEuMzE3LDUyLjE1OS00Ny45NEMxMDMuMTI4LDMwLjI1MSw4My43MzQsOS41NTgsNTIuMTgzLDkuNTU4eiBNNS40NzcsNDIwLjU2aDkyLjE4NHYtMjc3LjMySDUuNDc3VjQyMC41NnpcIlxuICAgIC8+XG4gICAgPFNvY2lhbExpbmtcbiAgICAgIHRpdGxlPVwiQ29kZVBlblwiXG4gICAgICBsaW5rPVwiLy9jb2RlcGVuLmlvL3djMzU2XCJcbiAgICAgIHZpZXdib3g9XCIwIDAgMzEuNjY1IDMxLjY2NVwiXG4gICAgICBwYXRoPVwiTTE2Ljg3OCwwLjQxNWMtMC44NTQtMC41NjUtMS45NjgtMC41NTItMi44MDksMC4wMzRMMS40ODUsOS4yMTRjLTAuNjcxLDAuNDY4LTEuMDcxLDEuMjMzLTEuMDcxLDIuMDUydjkuNDQ0IGMwLDAuODQsMC40MjEsMS42MjMsMS4xMjIsMi4wODZsMTIuNzksOC40NTVjMC44MzYsMC41NTMsMS45MjIsMC41NTMsMi43NTgsMGwxMy4wNDQtOC42MThjMC43LTAuNDYzLDEuMTIyLTEuMjQ2LDEuMTIyLTIuMDg2IHYtOS4yNzljMC0wLjgzOS0wLjQyMS0xLjYyMi0xLjEyMS0yLjA4NUwxNi44NzgsMC40MTV6IE0yNi42MjEsMTAuNjQ1bC00LjgyMSwzLjIzN2wtNC41MjEtMy4yODhMMTcuMjUsNC4xMjdMMjYuNjIxLDEwLjY0NXogTTEzLjk3OSw0LjEzM3Y2LjMyOWwtNC42MzMsMy4yNGwtNC42MjEtMy4wOTlMMTMuOTc5LDQuMTMzeiBNMy40NTgsMTMuNzIybDIuOTkxLDIuMDA0bC0yLjk5MSwyLjA5M1YxMy43MjJ6IE0xNC4wNTgsMjcuMjE1IGwtOS4zMzEtNi4yNThsNC42NjEtMy4yNThsNC42NywzLjEzM1YyNy4yMTV6IE0xMi4yODYsMTUuNjc0bDMuMDIxLTIuMTEzbDMuNTE5LDIuMzEzbC0zLjExOSwyLjA5NUwxMi4yODYsMTUuNjc0eiBNMTcuMzU0LDI3LjIxNSBWMjAuODNsNC40NjMtMi45OTFsNC44MDUsMy4xNTlMMTcuMzU0LDI3LjIxNXogTTI3Ljk1NCwxNy45MjdsLTMuMTY4LTIuMDgybDMuMTY4LTIuMTI1VjE3LjkyN3pcIlxuICAgIC8+XG4gICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+XG4gICAgICA8YSBjbGFzc05hbWU9XCJibG9nXCI+QmxvZzwvYT5cbiAgICA8L0xpbms+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5uYXZiYXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgIHJpZ2h0OiAzMHB4O1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cbiAgICAgICAgLmJsb2cge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5saW5rfTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuYmxvZzpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnBpbmt9O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgICAgLm5hdmJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L3VsPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU29jaWFsTGlua3M7XG4iXX0= */
/*@ sourceURL=/Users/WooChoi/Desktop/React.js/web-portfolio/components/SocialLinks.js */`));

/* harmony default export */ __webpack_exports__["default"] = (SocialLinks);

/***/ }),

/***/ "./database/resume.js":
/*!****************************!*\
  !*** ./database/resume.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Woo Young Choi",
  contact: {
    links: [["wooyoungchoi.dev", "//wooyoungchoi.dev"], ["wychoi356@gmail.com", "mailto:wychoi356@gmail.com"], ["linkedin.com/in/woo-young", "//linkedin.com/in/woo-young/"], ["github.com/wc356", "//github.com/wc356"]],
    notLinks: ["201 820 7277"]
  },
  education: {
    school: "Cornell University,",
    location: "Ithaca NY",
    subTitle: "Bachelor of Science in Landscape Architecture August 2014 - May 2018",
    description: ["Design Team at United Nations Association of Cornell University", "Volunteer at Friends of Tiger Glen Garden"]
  },
  experience: {
    professional: [{
      title: "Parker Rodriguez Inc",
      location: "Alexandria VA - Designer",
      subTitle: "June 2018 - June 2019",
      description: ["Assisted in CAD, 3D modeling/rendering, putting together Construction Documents and layouts"],
      link: ["see Github", "URL here"]
    }],
    project: [{
      title: "Web-Portfolio",
      location: "",
      subTitle: "",
      description: ["ReactJS, NextJS, styled-jsx, dynamic pages | routing, SCSS | SASS, Adobe XD | prototyping, Git", "Front-end dynamic website with dynamically rendered content to serve as a personal website"],
      link: ["see Github", "//github.com/wc356/portfolio-website"]
    }, {
      title: "Expensify",
      location: "",
      subTitle: "",
      description: ["ReactJS, Redux, react-router, webpack, Babel, Jest, Enzyme, Firebase, Heroku, SCSS | SASS, authorization, Git", "Full-stack web application for storing and managing expenses—sort by date range, amount and filter through keywords"],
      link: ["see Github", "//github.com/wc356/react-expensify"]
    }, {
      title: "Specula",
      location: "",
      subTitle: "",
      description: ["ReactJS, NextJS, styled-jsx, Context API, SSR/CSR Dynamic Pages and Routing, React Hooks, Local Storage, Git", "Front-end web application for quickly comparing cellular phones—sort by release date, price, brand and filter using keywords"],
      link: ["see Github", "//github.com/wc356/specula-v2"]
    }, {
      title: "React-Tetris",
      location: "",
      subTitle: "",
      description: ["ReactJS, SCSS | SASS, Git, Custom Hooks", "Front-end Original Tetris game"],
      link: ["see Github", "//github.com/wc356/React-tetris"]
    }, {
      title: "Indecision",
      location: "",
      subTitle: "",
      description: ["ReactJS, SCSS | SASS, Git, Babel, Webpack", "Front-end web application that randomly allows the user to get started on any task of his or her entries of tasks"],
      link: ["see Github", "//github.com/wc356/react-indecision"]
    }]
  },
  technology: ["HTML/CSS/SASS", "JavaScript ES6", "Python", "ReactJS | Hooks | Context", "React Native", "Redux", "Bootstrap", "Visual Studio", "Git", "npm | yarn", "Adobe XD | Photoshop | Indesign | Illustrator", "AutoCAD"],
  honors: {
    title: "Cornell CALS Dean's List - 4 Semesters",
    description: "Fall 2016, Spring 2016, Fall 2017, Spring 2018"
  },
  languages: ["English - Fluent", "Korean - Native"],
  interests: ["Full-stack Development", "UI/UX & Design"],
  hobbies: ["Learning new coding language", "Side Projects", "Reading"],
  colors: {
    highlight: "#561eff",
    title: "black",
    body: "#444",
    border: "#d8d5f7",
    shadow: "#d8d5f7"
  },
  download: ["Download", "/images/Choi_resume.pdf"]
});

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

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

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
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

        this.prefetch({
          priority: true
        });
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


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

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

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
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


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

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
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
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


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
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

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

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
    this.isFallback = isFallback;

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
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
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
      }

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

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

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
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
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

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
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
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
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
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
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
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

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
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/resume.js":
/*!*************************!*\
  !*** ./pages/resume.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Resume__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Resume */ "./components/Resume.js");
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/web-portfolio/pages/resume.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }
}, __jsx(_components_Resume__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
})));

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
    dark: "#695af5",
    black: "#444444",
    gray: "#d8d5f7",
    pink: "#FF99CC",
    "pink-l": "#ffdeee",
    "pink-link": "rgba(255, 153, 204, 0.5)"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./utils/analytics.js":
/*!****************************!*\
  !*** ./utils/analytics.js ***!
  \****************************/
/*! exports provided: initGA, logPageView, logEvent, logException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGA", function() { return initGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logPageView", function() { return logPageView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logEvent", function() { return logEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logException", function() { return logException; });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);

const initGA = () => {
  console.log("GA init");
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.initialize("UA-163343549-1");
};
const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`);
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.set({
    page: window.location.pathname
  });
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.pageview(window.location.pathname);
};
const logEvent = (category = "", action = "") => {
  if (category && action) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.event({
      category,
      action
    });
  }
};
const logException = (description = "", fatal = false) => {
  if (description) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.exception({
      description,
      fatal
    });
  }
};

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/resume.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/WooChoi/Desktop/React.js/web-portfolio/pages/resume.js */"./pages/resume.js");


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

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-meta-tags":
/*!**********************************!*\
  !*** external "react-meta-tags" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-meta-tags");

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

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=resume.js.map