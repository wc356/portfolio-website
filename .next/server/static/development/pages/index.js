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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _database_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../database/projects */ "./database/projects.js");
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/actions/projects/PostProj.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const PostProjLink = ({
  project = "PROJECT TITLE"
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/proj/[project]",
  as: `/proj/${project}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, __jsx("a", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2551411397", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}, project)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2551411397",
  dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark],
  __self: undefined
}, `.title.__jsx-style-dynamic-selector{font-size:25px;font-weight:600;-webkit-text-decoration:none;text-decoration:none;color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark};}.title.__jsx-style-dynamic-selector:hover{opacity:1;text-shadow:6px 6px ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"]};}a.__jsx-style-dynamic-selector:visited{color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vYWN0aW9ucy9wcm9qZWN0cy9Qb3N0UHJvai5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXTyxBQUcwQixBQU1MLEFBSXlCLFVBSGMsS0FOakMsZ0JBQ0ssSUFTdkIsd0JBSEEsc0JBTHFDLG1DQUNyQyIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL2FjdGlvbnMvcHJvamVjdHMvUG9zdFByb2ouanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGhlbWUgZnJvbSBcIi4uLy4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vZGF0YWJhc2UvcHJvamVjdHNcIjtcblxuZXhwb3J0IGNvbnN0IFBvc3RQcm9qTGluayA9ICh7IHByb2plY3QgPSBcIlBST0pFQ1QgVElUTEVcIiB9KSA9PiAoXG4gIDw+XG4gICAgPExpbmsgaHJlZj1cIi9wcm9qL1twcm9qZWN0XVwiIGFzPXtgL3Byb2ovJHtwcm9qZWN0fWB9PlxuICAgICAgPGEgY2xhc3NOYW1lPVwidGl0bGVcIj57cHJvamVjdH08L2E+XG4gICAgPC9MaW5rPlxuXG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5kYXJrfTtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGU6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDZweCA2cHggJHt0aGVtZS5jb2xvcnNbXCJwaW5rLWxpbmtcIl19O1xuICAgICAgICB9XG4gICAgICAgIGE6dmlzaXRlZCB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmRhcmt9O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvPlxuKTtcblxuLy8gTG9vcCBvdmVyIGVhY2ggUHJvamVjdE9iamVjdCBpbiBEYXRhYmFzZVxuLy8gaWYgUHJvamVjdE9iamVjdC5wcm9qZWN0ID09PSB0aGlzLnByb3AucHJvamVjdCwgdGhlbiBncmFi4oCU4oCUcHJvamVjdC5waWN0dXJlc1swXS5wYXRoO1xuXG5leHBvcnQgY29uc3QgUG9zdFByb2pJbWcgPSAoeyBwcm9qZWN0IH0pID0+IChcbiAgPD5cbiAgICA8TGluayBocmVmPVwiL3Byb2ovW3Byb2plY3RdXCIgYXM9e2AvcHJvai8ke3Byb2plY3R9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy0td3JhcHBlclwiPlxuICAgICAgICB7cHJvamVjdHMubWFwKChvYmopID0+IHtcbiAgICAgICAgICBpZiAob2JqLnByb2plY3QgPT09IHByb2plY3QpIHtcbiAgICAgICAgICAgIHJldHVybiA8aW1nIHNyYz17b2JqLmNvdmVyfSBhbHQ9e2BwaWN0dXJlIG9mICR7b2JqLnByb2plY3R9YH0gLz47XG4gICAgICAgICAgfVxuICAgICAgICB9KX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPkFib3V0IFByb2plY3Q8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuXG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5pbWctLXdyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCBncmF5O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAuaW1nLS13cmFwcGVyOmhvdmVyIC5vdmVybGF5IHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4ICR7dGhlbWUuY29sb3JzW1wicGluay1saW5rXCJdfTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4xNXMgZWFzZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpbmt9O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC8+XG4pO1xuIl19 */
/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/actions/projects/PostProj.js */`)); // Loop over each ProjectObject in Database
// if ProjectObject.project === this.prop.project, then grab——project.pictures[0].path;

const PostProjImg = ({
  project
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/proj/[project]",
  as: `/proj/${project}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }
}, __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2157812680", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]) + " " + "img--wrapper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 7
  }
}, _database_projects__WEBPACK_IMPORTED_MODULE_4__["projects"].map(obj => {
  if (obj.project === project) {
    return __jsx("img", {
      src: obj.cover,
      alt: `picture of ${obj.project}`,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2157812680", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 20
      }
    });
  }
}), __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2157812680", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]) + " " + "overlay",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }
}, __jsx("p", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2157812680", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link]]]) + " " + "text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 11
  }
}, "About Project")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2157812680",
  dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link],
  __self: undefined
}, `.img--wrapper.__jsx-style-dynamic-selector{display:block;position:relative;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;box-shadow:1px 1px 5px gray;border-radius:5px;}.img--wrapper.__jsx-style-dynamic-selector:hover .overlay.__jsx-style-dynamic-selector{opacity:0.8;box-shadow:10px 10px ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"]};border-radius:5px;}img.__jsx-style-dynamic-selector{object-position:50% 50%;}.overlay.__jsx-style-dynamic-selector{position:absolute;cursor:pointer;top:0;bottom:0;left:0;right:0;opacity:0;-webkit-transition:0.15s ease;transition:0.15s ease;background-color:white;}.text.__jsx-style-dynamic-selector{color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link};font-size:30px;font-weight:500;position:absolute;top:50%;left:50%;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vYWN0aW9ucy9wcm9qZWN0cy9Qb3N0UHJvai5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRE8sQUFHeUIsQUFRRixBQUtZLEFBR04sQUFXaUIsWUFsQmUsRUFSaEMsSUFnQkgsTUFIakIsUUFacUIsQ0FnQmIsRUFVUyxJQVROLFNBQ0YsRUFTUyxLQVJSLE9BWFUsQ0FZUixHQVFRLE9BUEksT0FaeEIsSUFvQlUsUUFDQyxTQUNVLHdCQTlCRCxBQXFCSyxrQkFwQkssS0FxQjlCLHVCQXBCb0Isa0JBQ3BCLEtBNEIwQyx1Q0FDSixtQ0FDSix5R0FDZCxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9hY3Rpb25zL3Byb2plY3RzL1Bvc3RQcm9qLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uLy4uL2RhdGFiYXNlL3Byb2plY3RzXCI7XG5cbmV4cG9ydCBjb25zdCBQb3N0UHJvakxpbmsgPSAoeyBwcm9qZWN0ID0gXCJQUk9KRUNUIFRJVExFXCIgfSkgPT4gKFxuICA8PlxuICAgIDxMaW5rIGhyZWY9XCIvcHJvai9bcHJvamVjdF1cIiBhcz17YC9wcm9qLyR7cHJvamVjdH1gfT5cbiAgICAgIDxhIGNsYXNzTmFtZT1cInRpdGxlXCI+e3Byb2plY3R9PC9hPlxuICAgIDwvTGluaz5cblxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZGFya307XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHRleHQtc2hhZG93OiA2cHggNnB4ICR7dGhlbWUuY29sb3JzW1wicGluay1saW5rXCJdfTtcbiAgICAgICAgfVxuICAgICAgICBhOnZpc2l0ZWQge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5kYXJrfTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8Lz5cbik7XG5cbi8vIExvb3Agb3ZlciBlYWNoIFByb2plY3RPYmplY3QgaW4gRGF0YWJhc2Vcbi8vIGlmIFByb2plY3RPYmplY3QucHJvamVjdCA9PT0gdGhpcy5wcm9wLnByb2plY3QsIHRoZW4gZ3JhYuKAlOKAlHByb2plY3QucGljdHVyZXNbMF0ucGF0aDtcblxuZXhwb3J0IGNvbnN0IFBvc3RQcm9qSW1nID0gKHsgcHJvamVjdCB9KSA9PiAoXG4gIDw+XG4gICAgPExpbmsgaHJlZj1cIi9wcm9qL1twcm9qZWN0XVwiIGFzPXtgL3Byb2ovJHtwcm9qZWN0fWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctLXdyYXBwZXJcIj5cbiAgICAgICAge3Byb2plY3RzLm1hcCgob2JqKSA9PiB7XG4gICAgICAgICAgaWYgKG9iai5wcm9qZWN0ID09PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gPGltZyBzcmM9e29iai5jb3Zlcn0gYWx0PXtgcGljdHVyZSBvZiAke29iai5wcm9qZWN0fWB9IC8+O1xuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5BYm91dCBQcm9qZWN0PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cblxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAuaW1nLS13cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggZ3JheTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmltZy0td3JhcHBlcjpob3ZlciAub3ZlcmxheSB7XG4gICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAke3RoZW1lLmNvbG9yc1tcInBpbmstbGlua1wiXX07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgICB9XG4gICAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuMTVzIGVhc2U7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5saW5rfTtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvPlxuKTtcbiJdfQ== */
/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/actions/projects/PostProj.js */`));

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
  className: "jsx-1762995951" + " " + "main",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }
}, __jsx("section", {
  className: "jsx-1762995951" + " " + "img-wrapper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "jsx-1762995951" + " " + "headshot",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}, __jsx("img", {
  src: _public_images_profile_pic_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  alt: "profile picture",
  className: "jsx-1762995951",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}))), __jsx("section", {
  className: "jsx-1762995951" + " " + "about-wrapper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "jsx-1762995951" + " " + "about",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}, __jsx("h1", {
  className: "jsx-1762995951" + " " + "title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}, "Think, design, code."), __jsx("p", {
  className: "jsx-1762995951" + " " + "body",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }
}, `
Woo Young Choi is an upcoming UI/UX Designer & Front-End
Web Developer based in New York, NY.

He has 1 year of professional experience working as a
designer in Alexandria, VA and is a certified LEED Green
Associate. Woo currently resides in Bergen County, NJ
where he devotes most of his time developing full-stack
web applications and front-end websites using ReactJS
as his preferred method.
          `))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1762995951",
  __self: undefined
}, ".main.jsx-1762995951{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:300px 100px;}.img-wrapper.jsx-1762995951{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;width:50%;}.headshot.jsx-1762995951{display:block;overflow:hidden;width:400px;height:100%;}img.jsx-1762995951{width:80%;}.about-wrapper.jsx-1762995951{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:50%;}.about.jsx-1762995951{font-size:18px;padding-left:10px;}.title.jsx-1762995951{font-size:45px;font-weight:300;}.body.jsx-1762995951{font-size:16px;line-height:35px;white-space:pre;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9BYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Qk8sQUFHOEIsQUFNTixBQU1DLEFBTUosQUFHRyxBQUlFLEFBSUEsQUFJQSxVQWRqQixJQU5rQixDQWFFLEFBSUYsQUFJQyxlQXBCTCxDQWlCZCxDQUlrQixDQVJsQixTQVpjLE1BcUJkLE1BcEJBLG9CQVR5QixBQWViLFVBQ1osU0F0QmUsMEVBQ2lCLE1BTVosa0JBQ1IsVUFDWixpRkFQcUIsbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9BYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgUHJvZmlsZVBpYyBmcm9tIFwiLi4vcHVibGljL2ltYWdlcy9wcm9maWxlX3BpYy5wbmdcIjtcblxuY29uc3QgQWJvdXQgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImltZy13cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRzaG90XCI+XG4gICAgICAgIDxpbWcgc3JjPXtQcm9maWxlUGljfSBhbHQ9XCJwcm9maWxlIHBpY3R1cmVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFib3V0LXdyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+VGhpbmssIGRlc2lnbiwgY29kZS48L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAge2BcbldvbyBZb3VuZyBDaG9pIGlzIGFuIHVwY29taW5nIFVJL1VYIERlc2lnbmVyICYgRnJvbnQtRW5kXG5XZWIgRGV2ZWxvcGVyIGJhc2VkIGluIE5ldyBZb3JrLCBOWS5cblxuSGUgaGFzIDEgeWVhciBvZiBwcm9mZXNzaW9uYWwgZXhwZXJpZW5jZSB3b3JraW5nIGFzIGFcbmRlc2lnbmVyIGluIEFsZXhhbmRyaWEsIFZBIGFuZCBpcyBhIGNlcnRpZmllZCBMRUVEIEdyZWVuXG5Bc3NvY2lhdGUuIFdvbyBjdXJyZW50bHkgcmVzaWRlcyBpbiBCZXJnZW4gQ291bnR5LCBOSlxud2hlcmUgaGUgZGV2b3RlcyBtb3N0IG9mIGhpcyB0aW1lIGRldmVsb3BpbmcgZnVsbC1zdGFja1xud2ViIGFwcGxpY2F0aW9ucyBhbmQgZnJvbnQtZW5kIHdlYnNpdGVzIHVzaW5nIFJlYWN0SlNcbmFzIGhpcyBwcmVmZXJyZWQgbWV0aG9kLlxuICAgICAgICAgIGB9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLm1haW4ge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgbWFyZ2luOiAzMDBweCAxMDBweDtcbiAgICAgICAgfVxuICAgICAgICAuaW1nLXdyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRzaG90IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICB9XG4gICAgICAgIC5hYm91dC13cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmFib3V0IHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/About.js */"));

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
/* harmony import */ var _actions_projects_PostProj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/projects/PostProj */ "./actions/projects/PostProj.js");
/* harmony import */ var _database_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../database/projects */ "./database/projects.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/components/Card.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Card = ({
  project,
  quote = "QUOTE",
  description = "DESCRIPTION HERE"
}) => {
  const renderProjects = () => {
    const techTree = _database_projects__WEBPACK_IMPORTED_MODULE_4__["projects"].map(proj => {
      if (proj.project === project) {
        return __jsx("ul", {
          key: Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])(),
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3668384634", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray]]]) + " " + "tech-list",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 11
          }
        }, proj.technology.map(tech => __jsx("li", {
          key: Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])(),
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3668384634", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray]]]) + " " + "tech",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 15
          }
        }, tech)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          id: "3668384634",
          dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray],
          __self: undefined
        }, `.tech-list.__jsx-style-dynamic-selector{display:inline-block;}.tech.__jsx-style-dynamic-selector{display:inline-block;background-color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black};box-shadow:13px 13px ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray};border-radius:0 10px 0 10px;color:white;font-weight:400;margin-right:10px;margin-bottom:10px;padding:8px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCZSxBQUd3QyxBQUdBLHFCQUZ2QixBQUdnRCw4Q0FDSSxrREFDdEIsNEJBQ2hCLFlBQ0ksZ0JBQ0Usa0JBQ0MsbUJBQ1AsWUFDZCIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL2NvbXBvbmVudHMvQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgeyBQb3N0UHJvakxpbmssIFBvc3RQcm9qSW1nIH0gZnJvbSBcIi4uL2FjdGlvbnMvcHJvamVjdHMvUG9zdFByb2pcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uL2RhdGFiYXNlL3Byb2plY3RzXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5jb25zdCBDYXJkID0gKHtcbiAgcHJvamVjdCxcbiAgcXVvdGUgPSBcIlFVT1RFXCIsXG4gIGRlc2NyaXB0aW9uID0gXCJERVNDUklQVElPTiBIRVJFXCIsXG59KSA9PiB7XG4gIGNvbnN0IHJlbmRlclByb2plY3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRlY2hUcmVlID0gcHJvamVjdHMubWFwKChwcm9qKSA9PiB7XG4gICAgICBpZiAocHJvai5wcm9qZWN0ID09PSBwcm9qZWN0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRlY2gtbGlzdFwiIGtleT17dXVpZHY0KCl9PlxuICAgICAgICAgICAge3Byb2oudGVjaG5vbG9neS5tYXAoKHRlY2gpID0+IChcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRlY2hcIiBrZXk9e3V1aWR2NCgpfT5cbiAgICAgICAgICAgICAgICB7dGVjaH1cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC50ZWNoLWxpc3Qge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGVjaCB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibGFja307XG4gICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxM3B4IDEzcHggJHt0aGVtZS5jb2xvcnMuZ3JheX07XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDEwcHggMCAxMHB4O1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0ZWNoVHJlZTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJjYXJkcy1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC0taW1nXCI+XG4gICAgICAgIDxQb3N0UHJvakltZyBwcm9qZWN0PXtwcm9qZWN0fSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtLWRlc2NcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgIDxQb3N0UHJvakxpbmsgcHJvamVjdD17cHJvamVjdH0gLz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJxdW90ZVwiPntxdW90ZX08L2gxPlxuICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2opID0+IHtcbiAgICAgICAgICAgICAgaWYgKHByb2oucHJvamVjdCA9PT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmstZ2l0aHViXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvai5saW5rfVxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9mb2xsb3cgbm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJpbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0MzguNTQ5IDQzOC41NDlcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aXRsZT5HaXRIdWI8L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00MDkuMTMyLDExNC41NzNjLTE5LjYwOC0zMy41OTYtNDYuMjA1LTYwLjE5NC03OS43OTgtNzkuOEMyOTUuNzM2LDE1LjE2NiwyNTkuMDU3LDUuMzY1LDIxOS4yNzEsNS4zNjUgYy0zOS43ODEsMC03Ni40NzIsOS44MDQtMTEwLjA2MywyOS40MDhjLTMzLjU5NiwxOS42MDUtNjAuMTkyLDQ2LjIwNC03OS44LDc5LjhDOS44MDMsMTQ4LjE2OCwwLDE4NC44NTQsMCwyMjQuNjMgYzAsNDcuNzgsMTMuOTQsOTAuNzQ1LDQxLjgyNywxMjguOTA2YzI3Ljg4NCwzOC4xNjQsNjMuOTA2LDY0LjU3MiwxMDguMDYzLDc5LjIyN2M1LjE0LDAuOTU0LDguOTQ1LDAuMjgzLDExLjQxOS0xLjk5NiBjMi40NzUtMi4yODIsMy43MTEtNS4xNCwzLjcxMS04LjU2MmMwLTAuNTcxLTAuMDQ5LTUuNzA4LTAuMTQ0LTE1LjQxN2MtMC4wOTgtOS43MDktMC4xNDQtMTguMTc5LTAuMTQ0LTI1LjQwNmwtNi41NjcsMS4xMzYgYy00LjE4NywwLjc2Ny05LjQ2OSwxLjA5Mi0xNS44NDYsMWMtNi4zNzQtMC4wODktMTIuOTkxLTAuNzU3LTE5Ljg0Mi0xLjk5OWMtNi44NTQtMS4yMzEtMTMuMjI5LTQuMDg2LTE5LjEzLTguNTU5IGMtNS44OTgtNC40NzMtMTAuMDg1LTEwLjMyOC0xMi41Ni0xNy41NTZsLTIuODU1LTYuNTdjLTEuOTAzLTQuMzc0LTQuODk5LTkuMjMzLTguOTkyLTE0LjU1OSBjLTQuMDkzLTUuMzMxLTguMjMyLTguOTQ1LTEyLjQxOS0xMC44NDhsLTEuOTk5LTEuNDMxYy0xLjMzMi0wLjk1MS0yLjU2OC0yLjA5OC0zLjcxMS0zLjQyOWMtMS4xNDItMS4zMzEtMS45OTctMi42NjMtMi41NjgtMy45OTcgYy0wLjU3Mi0xLjMzNS0wLjA5OC0yLjQzLDEuNDI3LTMuMjg5YzEuNTI1LTAuODU5LDQuMjgxLTEuMjc2LDguMjgtMS4yNzZsNS43MDgsMC44NTNjMy44MDcsMC43NjMsOC41MTYsMy4wNDIsMTQuMTMzLDYuODUxIGM1LjYxNCwzLjgwNiwxMC4yMjksOC43NTQsMTMuODQ2LDE0Ljg0MmM0LjM4LDcuODA2LDkuNjU3LDEzLjc1NCwxNS44NDYsMTcuODQ3YzYuMTg0LDQuMDkzLDEyLjQxOSw2LjEzNiwxOC42OTksNi4xMzYgYzYuMjgsMCwxMS43MDQtMC40NzYsMTYuMjc0LTEuNDIzYzQuNTY1LTAuOTUyLDguODQ4LTIuMzgzLDEyLjg0Ny00LjI4NWMxLjcxMy0xMi43NTgsNi4zNzctMjIuNTU5LDEzLjk4OC0yOS40MSBjLTEwLjg0OC0xLjE0LTIwLjYwMS0yLjg1Ny0yOS4yNjQtNS4xNGMtOC42NTgtMi4yODYtMTcuNjA1LTUuOTk2LTI2LjgzNS0xMS4xNGMtOS4yMzUtNS4xMzctMTYuODk2LTExLjUxNi0yMi45ODUtMTkuMTI2IGMtNi4wOS03LjYxNC0xMS4wODgtMTcuNjEtMTQuOTg3LTI5Ljk3OWMtMy45MDEtMTIuMzc0LTUuODUyLTI2LjY0OC01Ljg1Mi00Mi44MjZjMC0yMy4wMzUsNy41Mi00Mi42MzcsMjIuNTU3LTU4LjgxNyBjLTcuMDQ0LTE3LjMxOC02LjM3OS0zNi43MzIsMS45OTctNTguMjRjNS41Mi0xLjcxNSwxMy43MDYtMC40MjgsMjQuNTU0LDMuODUzYzEwLjg1LDQuMjgzLDE4Ljc5NCw3Ljk1MiwyMy44NCwxMC45OTQgYzUuMDQ2LDMuMDQxLDkuMDg5LDUuNjE4LDEyLjEzNSw3LjcwOGMxNy43MDUtNC45NDcsMzUuOTc2LTcuNDIxLDU0LjgxOC03LjQyMXMzNy4xMTcsMi40NzQsNTQuODIzLDcuNDIxbDEwLjg0OS02Ljg0OSBjNy40MTktNC41NywxNi4xOC04Ljc1OCwyNi4yNjItMTIuNTY1YzEwLjA4OC0zLjgwNSwxNy44MDItNC44NTMsMjMuMTM0LTMuMTM4YzguNTYyLDIxLjUwOSw5LjMyNSw0MC45MjIsMi4yNzksNTguMjQgYzE1LjAzNiwxNi4xOCwyMi41NTksMzUuNzg3LDIyLjU1OSw1OC44MTdjMCwxNi4xNzgtMS45NTgsMzAuNDk3LTUuODUzLDQyLjk2NmMtMy45LDEyLjQ3MS04Ljk0MSwyMi40NTctMTUuMTI1LDI5Ljk3OSBjLTYuMTkxLDcuNTIxLTEzLjkwMSwxMy44NS0yMy4xMzEsMTguOTg2Yy05LjIzMiw1LjE0LTE4LjE4Miw4Ljg1LTI2Ljg0LDExLjEzNmMtOC42NjIsMi4yODYtMTguNDE1LDQuMDA0LTI5LjI2Myw1LjE0NiBjOS44OTQsOC41NjIsMTQuODQyLDIyLjA3NywxNC44NDIsNDAuNTM5djYwLjIzN2MwLDMuNDIyLDEuMTksNi4yNzksMy41NzIsOC41NjJjMi4zNzksMi4yNzksNi4xMzYsMi45NSwxMS4yNzYsMS45OTUgYzQ0LjE2My0xNC42NTMsODAuMTg1LTQxLjA2MiwxMDguMDY4LTc5LjIyNmMyNy44OC0zOC4xNjEsNDEuODI1LTgxLjEyNiw0MS44MjUtMTI4LjkwNiBDNDM4LjUzNiwxODQuODUxLDQyOC43MjgsMTQ4LjE2OCw0MDkuMTMyLDExNC41NzN6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2gtd3JhcHBlclwiPntyZW5kZXJQcm9qZWN0cygpfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5jYXJkcy1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDM1cHggMHB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZC0taW1nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDExMHB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQtLWltZzpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpIHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZC0tZGVzYyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpbmstZ2l0aHViIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0LXdyYXBwZXIge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmJsYWNrfTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweCAxNXB4IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5xdW90ZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZWNoLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDQwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGZpbGw6ICR7dGhlbWUuY29sb3JzLmxpbmt9O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdmc6aG92ZXIge1xuICAgICAgICAgICAgZmlsbDogJHt0aGVtZS5jb2xvcnMucGlua307XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2xpPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdfQ== */
/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Card.js */`));
      }
    });
    return techTree;
  };

  return __jsx("li", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1474953318", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink]]]) + " " + "cards-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1474953318", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink]]]) + " " + "card--img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(_actions_projects_PostProj__WEBPACK_IMPORTED_MODULE_3__["PostProjImg"], {
    project: project,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1474953318", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink]]]) + " " + "card--desc",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1474953318", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink]]]) + " " + "text-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1474953318", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink]]]) + " " + "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx(_actions_projects_PostProj__WEBPACK_IMPORTED_MODULE_3__["PostProjLink"], {
    project: project,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }), __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1474953318", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink]]]) + " " + "quote",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, quote), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1474953318", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, description), _database_projects__WEBPACK_IMPORTED_MODULE_4__["projects"].map(proj => {
    if (proj.project === project) {
      return __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1474953318", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink]]]) + " " + "link-github",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 19
        }
      }, __jsx("a", {
        href: proj.link,
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1474953318", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink]]]),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }
      }, __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        role: "img",
        viewBox: "0 0 438.549 438.549",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1474953318", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink]]]),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 23
        }
      }, __jsx("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1474953318", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink]]]),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 25
        }
      }, "GitHub"), __jsx("path", {
        d: "M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1474953318", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink]]]),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 25
        }
      }))));
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1474953318", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink]]]) + " " + "tech-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, renderProjects())))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1474953318",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink],
    __self: undefined
  }, `.cards-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:35px 0px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.card--img.__jsx-style-dynamic-selector{display:block;margin-left:110px;-webkit-transition:all 0.15s;transition:all 0.15s;padding:10px;}.card--img.__jsx-style-dynamic-selector:hover{-webkit-transform:translateX(-10px) translateY(-10px);-ms-transform:translateX(-10px) translateY(-10px);transform:translateX(-10px) translateY(-10px);}.card--desc.__jsx-style-dynamic-selector{display:block;height:350px;margin-right:50px;text-align:center;background-color:white;border-top-right-radius:5px;border-bottom-right-radius:5px;width:40%;}.link-github.__jsx-style-dynamic-selector{margin-top:12px;}.text-wrapper.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;}.text.__jsx-style-dynamic-selector{position:relative;white-space:pre-line;height:100%;color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black};padding:0 15px 15px 15px;}.quote.__jsx-style-dynamic-selector{font-size:30px;font-weight:400;margin-bottom:10px;margin-top:25px;}.tech-wrapper.__jsx-style-dynamic-selector{display:block;position:absolute;padding:0 40px;width:100%;bottom:0px;}a.__jsx-style-dynamic-selector{display:inline-block;}svg.__jsx-style-dynamic-selector{height:30px;fill:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link};-webkit-transition:all 0.15s;transition:all 0.15s;}svg.__jsx-style-dynamic-selector:hover{fill:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFGUyxBQUcwQixBQU1DLEFBTWdDLEFBR2hDLEFBVUUsQUFHRyxBQUlELEFBT0gsQUFNRCxBQU9PLEFBR1QsQUFLc0IsWUFKQSxFQWpEaEIsQUFTTCxBQThCSyxDQU5GLENBZGxCLEVBT3VCLEdBb0J2QixNQXBDb0IsSUF3QkMsQ0FqQ0UsQUF1Q04sRUFjakIsS0EzQmMsTUFoQk0sQ0F1Q0csQ0FUVixHQU5LLENBUG1CLE9BY3hCLEtBOUJZLEdBd0J6QixHQU9BLEtBakRtQixRQVFKLElBV2UsQUFnQkgsS0FsQ0ksRUEyQmpCLEVBbkJkLENBZ0RBLFNBNUJBLE1BT0EsR0FoQmlDLCtCQUNyQixLQVRaLEtBVUEsMkRBcEJxQiw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9jb21wb25lbnRzL0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IHsgUG9zdFByb2pMaW5rLCBQb3N0UHJvakltZyB9IGZyb20gXCIuLi9hY3Rpb25zL3Byb2plY3RzL1Bvc3RQcm9qXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuLi9kYXRhYmFzZS9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuY29uc3QgQ2FyZCA9ICh7XG4gIHByb2plY3QsXG4gIHF1b3RlID0gXCJRVU9URVwiLFxuICBkZXNjcmlwdGlvbiA9IFwiREVTQ1JJUFRJT04gSEVSRVwiLFxufSkgPT4ge1xuICBjb25zdCByZW5kZXJQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBjb25zdCB0ZWNoVHJlZSA9IHByb2plY3RzLm1hcCgocHJvaikgPT4ge1xuICAgICAgaWYgKHByb2oucHJvamVjdCA9PT0gcHJvamVjdCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0ZWNoLWxpc3RcIiBrZXk9e3V1aWR2NCgpfT5cbiAgICAgICAgICAgIHtwcm9qLnRlY2hub2xvZ3kubWFwKCh0ZWNoKSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0ZWNoXCIga2V5PXt1dWlkdjQoKX0+XG4gICAgICAgICAgICAgICAge3RlY2h9XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAudGVjaC1saXN0IHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRlY2gge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYmxhY2t9O1xuICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMTNweCAxM3B4ICR7dGhlbWUuY29sb3JzLmdyYXl9O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDAgMTBweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGVjaFRyZWU7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPVwiY2FyZHMtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtLWltZ1wiPlxuICAgICAgICA8UG9zdFByb2pJbWcgcHJvamVjdD17cHJvamVjdH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLS1kZXNjXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICA8UG9zdFByb2pMaW5rIHByb2plY3Q9e3Byb2plY3R9IC8+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicXVvdGVcIj57cXVvdGV9PC9oMT5cbiAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChwcm9qLnByb2plY3QgPT09IHByb2plY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rLWdpdGh1YlwiPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3Byb2oubGlua31cbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vZm9sbG93IG5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDM4LjU0OSA0MzguNTQ5XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+R2l0SHViPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDA5LjEzMiwxMTQuNTczYy0xOS42MDgtMzMuNTk2LTQ2LjIwNS02MC4xOTQtNzkuNzk4LTc5LjhDMjk1LjczNiwxNS4xNjYsMjU5LjA1Nyw1LjM2NSwyMTkuMjcxLDUuMzY1IGMtMzkuNzgxLDAtNzYuNDcyLDkuODA0LTExMC4wNjMsMjkuNDA4Yy0zMy41OTYsMTkuNjA1LTYwLjE5Miw0Ni4yMDQtNzkuOCw3OS44QzkuODAzLDE0OC4xNjgsMCwxODQuODU0LDAsMjI0LjYzIGMwLDQ3Ljc4LDEzLjk0LDkwLjc0NSw0MS44MjcsMTI4LjkwNmMyNy44ODQsMzguMTY0LDYzLjkwNiw2NC41NzIsMTA4LjA2Myw3OS4yMjdjNS4xNCwwLjk1NCw4Ljk0NSwwLjI4MywxMS40MTktMS45OTYgYzIuNDc1LTIuMjgyLDMuNzExLTUuMTQsMy43MTEtOC41NjJjMC0wLjU3MS0wLjA0OS01LjcwOC0wLjE0NC0xNS40MTdjLTAuMDk4LTkuNzA5LTAuMTQ0LTE4LjE3OS0wLjE0NC0yNS40MDZsLTYuNTY3LDEuMTM2IGMtNC4xODcsMC43NjctOS40NjksMS4wOTItMTUuODQ2LDFjLTYuMzc0LTAuMDg5LTEyLjk5MS0wLjc1Ny0xOS44NDItMS45OTljLTYuODU0LTEuMjMxLTEzLjIyOS00LjA4Ni0xOS4xMy04LjU1OSBjLTUuODk4LTQuNDczLTEwLjA4NS0xMC4zMjgtMTIuNTYtMTcuNTU2bC0yLjg1NS02LjU3Yy0xLjkwMy00LjM3NC00Ljg5OS05LjIzMy04Ljk5Mi0xNC41NTkgYy00LjA5My01LjMzMS04LjIzMi04Ljk0NS0xMi40MTktMTAuODQ4bC0xLjk5OS0xLjQzMWMtMS4zMzItMC45NTEtMi41NjgtMi4wOTgtMy43MTEtMy40MjljLTEuMTQyLTEuMzMxLTEuOTk3LTIuNjYzLTIuNTY4LTMuOTk3IGMtMC41NzItMS4zMzUtMC4wOTgtMi40MywxLjQyNy0zLjI4OWMxLjUyNS0wLjg1OSw0LjI4MS0xLjI3Niw4LjI4LTEuMjc2bDUuNzA4LDAuODUzYzMuODA3LDAuNzYzLDguNTE2LDMuMDQyLDE0LjEzMyw2Ljg1MSBjNS42MTQsMy44MDYsMTAuMjI5LDguNzU0LDEzLjg0NiwxNC44NDJjNC4zOCw3LjgwNiw5LjY1NywxMy43NTQsMTUuODQ2LDE3Ljg0N2M2LjE4NCw0LjA5MywxMi40MTksNi4xMzYsMTguNjk5LDYuMTM2IGM2LjI4LDAsMTEuNzA0LTAuNDc2LDE2LjI3NC0xLjQyM2M0LjU2NS0wLjk1Miw4Ljg0OC0yLjM4MywxMi44NDctNC4yODVjMS43MTMtMTIuNzU4LDYuMzc3LTIyLjU1OSwxMy45ODgtMjkuNDEgYy0xMC44NDgtMS4xNC0yMC42MDEtMi44NTctMjkuMjY0LTUuMTRjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5Ni0yNi44MzUtMTEuMTRjLTkuMjM1LTUuMTM3LTE2Ljg5Ni0xMS41MTYtMjIuOTg1LTE5LjEyNiBjLTYuMDktNy42MTQtMTEuMDg4LTE3LjYxLTE0Ljk4Ny0yOS45NzljLTMuOTAxLTEyLjM3NC01Ljg1Mi0yNi42NDgtNS44NTItNDIuODI2YzAtMjMuMDM1LDcuNTItNDIuNjM3LDIyLjU1Ny01OC44MTcgYy03LjA0NC0xNy4zMTgtNi4zNzktMzYuNzMyLDEuOTk3LTU4LjI0YzUuNTItMS43MTUsMTMuNzA2LTAuNDI4LDI0LjU1NCwzLjg1M2MxMC44NSw0LjI4MywxOC43OTQsNy45NTIsMjMuODQsMTAuOTk0IGM1LjA0NiwzLjA0MSw5LjA4OSw1LjYxOCwxMi4xMzUsNy43MDhjMTcuNzA1LTQuOTQ3LDM1Ljk3Ni03LjQyMSw1NC44MTgtNy40MjFzMzcuMTE3LDIuNDc0LDU0LjgyMyw3LjQyMWwxMC44NDktNi44NDkgYzcuNDE5LTQuNTcsMTYuMTgtOC43NTgsMjYuMjYyLTEyLjU2NWMxMC4wODgtMy44MDUsMTcuODAyLTQuODUzLDIzLjEzNC0zLjEzOGM4LjU2MiwyMS41MDksOS4zMjUsNDAuOTIyLDIuMjc5LDU4LjI0IGMxNS4wMzYsMTYuMTgsMjIuNTU5LDM1Ljc4NywyMi41NTksNTguODE3YzAsMTYuMTc4LTEuOTU4LDMwLjQ5Ny01Ljg1Myw0Mi45NjZjLTMuOSwxMi40NzEtOC45NDEsMjIuNDU3LTE1LjEyNSwyOS45NzkgYy02LjE5MSw3LjUyMS0xMy45MDEsMTMuODUtMjMuMTMxLDE4Ljk4NmMtOS4yMzIsNS4xNC0xOC4xODIsOC44NS0yNi44NCwxMS4xMzZjLTguNjYyLDIuMjg2LTE4LjQxNSw0LjAwNC0yOS4yNjMsNS4xNDYgYzkuODk0LDguNTYyLDE0Ljg0MiwyMi4wNzcsMTQuODQyLDQwLjUzOXY2MC4yMzdjMCwzLjQyMiwxLjE5LDYuMjc5LDMuNTcyLDguNTYyYzIuMzc5LDIuMjc5LDYuMTM2LDIuOTUsMTEuMjc2LDEuOTk1IGM0NC4xNjMtMTQuNjUzLDgwLjE4NS00MS4wNjIsMTA4LjA2OC03OS4yMjZjMjcuODgtMzguMTYxLDQxLjgyNS04MS4xMjYsNDEuODI1LTEyOC45MDYgQzQzOC41MzYsMTg0Ljg1MSw0MjguNzI4LDE0OC4xNjgsNDA5LjEzMiwxMTQuNTczelwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWNoLXdyYXBwZXJcIj57cmVuZGVyUHJvamVjdHMoKX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY2FyZHMtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAzNXB4IDBweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQtLWltZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMTBweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkLS1pbWc6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KSB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQtLWRlc2Mge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saW5rLWdpdGh1YiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dC13cmFwcGVyIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibGFja307XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHggMTVweCAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucXVvdGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGVjaC13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcGFkZGluZzogMCA0MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBmaWxsOiAke3RoZW1lLmNvbG9ycy5saW5rfTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgICAgICAgICB9XG4gICAgICAgICAgc3ZnOmhvdmVyIHtcbiAgICAgICAgICAgIGZpbGw6ICR7dGhlbWUuY29sb3JzLnBpbmt9O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXX0= */
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
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/components/Contact.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Contact = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("section", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["686170943", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"]]]]) + " " + "contact",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["686170943", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"]]]]) + " " + "card",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}, __jsx("h1", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["686170943", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"]]]]) + " " + "title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}, "Any questions or comments?"), __jsx("p", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["686170943", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"]]]]) + " " + "body",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}, "Send your inquiries below"), __jsx("a", {
  href: "mailto:wychoi356@gmail.com",
  target: "_blank",
  rel: "nofollow noopener noreferrer",
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["686170943", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"]]]]) + " " + "btn",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}, "Let's Talk \uD83D\uDCAC"))), __jsx("footer", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["686170943", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"]]]]) + " " + "footer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }
}, __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["686170943", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"]]]]),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 7
  }
}, __jsx("p", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["686170943", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"]]]]) + " " + "footer-body",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }
}, "Designed & Built by Woo Young Choi"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "686170943",
  dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["link"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"], _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"]],
  __self: undefined
}, `.contact.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:20%;margin-bottom:10%;padding-left:18%;}.title.__jsx-style-dynamic-selector{color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["link"]};font-size:30px;margin-bottom:5px;text-shadow:-1px -1px ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"]}, -2px -2px ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"]}, -3px -3px ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"]}, -4px -4px ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"]}, -5px -5px ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"]}, -6px -6px ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"]};}.body.__jsx-style-dynamic-selector{color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black};}.btn.__jsx-style-dynamic-selector{display:block;width:15rem;text-align:center;font-size:15px;font-weight:600;padding:15px;margin-top:50px;border:none;background-color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark};color:white;border-radius:25px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;-webkit-text-decoration:none;text-decoration:none;}.btn.__jsx-style-dynamic-selector:hover{-webkit-transform:scale(1.08);-ms-transform:scale(1.08);transform:scale(1.08);background-color:pink;}.footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:20px;background-color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-l"]};background-image:linear-gradient( 0deg, ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark} 0%, ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors["pink-link"]} 74%, white 100% );height:25vh;}.footer-body.__jsx-style-dynamic-selector{color:white;font-size:18px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9Db250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCTyxBQUd3QixBQU1zQixBQVdBLEFBR3JCLEFBZVEsQUFJVCxBQWVELFlBQ0csRUFsQ0gsWUFDTSxDQWtDcEIsUUFqRGlCLEFBV2pCLFNBS2lCLE1BZkcsU0FnQkYsU0FWd0IsTUFiekIsQUF1Q1EsQ0FmVixHQVdTLFVBVk4sQ0F4QkUsV0FtQ3BCLElBVmMsR0F4QkssU0F5QjZCLFFBeEJoRCxzQ0F5QmMsV0FZTyxDQVhBLG1CQUNBLHlFQVdHLG9CQVZELGlDQWpCdkIsaUJBa0JBLFFBVWUsYUFDaUMsOENBTTdDLDBIQUNXLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9jb21wb25lbnRzL0NvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ29udGFjdCA9ICgpID0+IChcbiAgPD5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWN0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+QW55IHF1ZXN0aW9ucyBvciBjb21tZW50cz88L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJib2R5XCI+U2VuZCB5b3VyIGlucXVpcmllcyBiZWxvdzwvcD5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxuICAgICAgICAgIGhyZWY9XCJtYWlsdG86d3ljaG9pMzU2QGdtYWlsLmNvbVwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub2ZvbGxvdyBub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIExldCdzIFRhbGsg8J+SrFxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3Rlci1ib2R5XCI+RGVzaWduZWQgJiBCdWlsdCBieSBXb28gWW91bmcgQ2hvaTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuXG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5jb250YWN0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxOCU7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnNbXCJsaW5rXCJdfTtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggJHt0aGVtZS5jb2xvcnNbXCJwaW5rLWxcIl19LFxuICAgICAgICAgICAgLTJweCAtMnB4ICR7dGhlbWUuY29sb3JzW1wicGluay1sXCJdfSxcbiAgICAgICAgICAgIC0zcHggLTNweCAke3RoZW1lLmNvbG9yc1tcInBpbmstbFwiXX0sXG4gICAgICAgICAgICAtNHB4IC00cHggJHt0aGVtZS5jb2xvcnNbXCJwaW5rLWxcIl19LFxuICAgICAgICAgICAgLTVweCAtNXB4ICR7dGhlbWUuY29sb3JzW1wicGluay1sXCJdfSxcbiAgICAgICAgICAgIC02cHggLTZweCAke3RoZW1lLmNvbG9yc1tcInBpbmstbFwiXX07XG4gICAgICAgIH1cbiAgICAgICAgLmJvZHkge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5ibGFja307XG4gICAgICAgIH1cbiAgICAgICAgLmJ0biB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDE1cmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmRhcmt9O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5idG46aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzW1wicGluay1sXCJdfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAwZGVnLFxuICAgICAgICAgICAgJHt0aGVtZS5jb2xvcnMuZGFya30gMCUsXG4gICAgICAgICAgICAke3RoZW1lLmNvbG9yc1tcInBpbmstbGlua1wiXX0gNzQlLFxuICAgICAgICAgICAgd2hpdGUgMTAwJVxuICAgICAgICAgICk7XG4gICAgICAgICAgaGVpZ2h0OiAyNXZoO1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXItYm9keSB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG4iXX0= */
/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Contact.js */`));

/* harmony default export */ __webpack_exports__["default"] = (Contact);

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
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/components/Landing.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Landing = () => __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3413023013", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black]]]) + " " + "main",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx("section", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3413023013", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black]]]),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("h1", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3413023013", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black]]]) + " " + "title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }
}, "WOO YOUNG CHOI"), __jsx("p", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3413023013", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black]]]) + " " + "description",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}, "UI/UX & Front-end Developer")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3413023013",
  dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black],
  __self: undefined
}, `.main.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-height:100vh;text-align:center;}.title.__jsx-style-dynamic-selector{font-family:Futura;font-size:75px;font-weight:600;margin-bottom:25px;-webkit-animation:text-drop-__jsx-style-dynamic-selector 0.75s 1;animation:text-drop-__jsx-style-dynamic-selector 0.75s 1;}.description.__jsx-style-dynamic-selector{font-size:27px;font-weight:500;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black};}@-webkit-keyframes text-drop-__jsx-style-dynamic-selector{0%{opacity:0;margin-bottom:-200px;}}@keyframes text-drop-__jsx-style-dynamic-selector{0%{opacity:0;margin-bottom:-200px;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9MYW5kaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNPLEFBRzhCLEFBUUEsQUFPSixBQU9ILFVBQ1csS0FQUCxJQVBELFlBUUksQUFPbkIsR0FkZ0IsZ0JBQ0csbUJBQ1Msd0JBWGYsK0JBaUJzQixtQ0FDckMsUUFqQndCLHdCQVd4QixzREFWeUIsbUdBQ04saUJBQ0Msa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9MYW5kaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcblxuY29uc3QgTGFuZGluZyA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5XT08gWU9VTkcgQ0hPSTwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlVJL1VYICYgRnJvbnQtZW5kIERldmVsb3BlcjwvcD5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5tYWluIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogRnV0dXJhO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNzVweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgICAgYW5pbWF0aW9uOiB0ZXh0LWRyb3AgMC43NXMgMTtcbiAgICAgICAgfVxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmJsYWNrfTtcbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIHRleHQtZHJvcCB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0yMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nO1xuIl19 */
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
    className: "jsx-1976002531",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-1976002531" + " " + "layout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1976002531",
    __self: undefined
  }, "@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap\");*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}h1,h3,p,a,li,button{font-family:Montserrat;}a{-webkit-transition:all 0.15s;transition:all 0.15s;-webkit-text-decoration-skip-ink:auto;text-decoration-skip-ink:auto;}a:hover{-webkit-transform:translateY(-3px);-ms-transform:translateY(-3px);transform:translateY(-3px);}li{list-style:none;}img{object-fit:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUVMsQUFFcUcsQUFLbEUsQUFVQyxBQUdGLEFBSU0sQUFHWCxBQUdDLGdCQUZuQixDQUdBLEtBdkJXLENBVVgsUUFUWSxVQUNaLFNBV2dDLDJDQUloQyx5QkFIQSIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdiBmcm9tIFwiLi9OYXZcIjtcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxOYXYgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNTAwLDYwMCZkaXNwbGF5PXN3YXBcIik7XG5cbiAgICAgICAgICAqLFxuICAgICAgICAgICo6OmJlZm9yZSxcbiAgICAgICAgICAqOjphZnRlciB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEsXG4gICAgICAgICAgaDMsXG4gICAgICAgICAgcCxcbiAgICAgICAgICBhLFxuICAgICAgICAgIGxpLFxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXM7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Layout.js */"));
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
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2984171264", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "wrapper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, __jsx("div", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2984171264", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "flex",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}, __jsx("a", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2984171264", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "navlink",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 11
  }
}, "HOME")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/about",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}, __jsx("a", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2984171264", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "navlink navlink-B",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 11
  }
}, "ABOUT")))), __jsx(_SocialLinks__WEBPACK_IMPORTED_MODULE_4__["default"], {
  className: "social",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2984171264",
  dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark],
  __self: undefined
}, `.wrapper.__jsx-style-dynamic-selector{display:block;position:fixed;top:30vh;margin-left:15px;z-index:1;}.flex.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.navlink.__jsx-style-dynamic-selector{display:block;padding:10px 0;font-size:15px;font-weight:900;-webkit-text-decoration:none;text-decoration:none;margin:60px 0;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;text-align:center;background-color:rgba(255,255,255,0.5);padding:5px;border-radius:5px;}.navlink.__jsx-style-dynamic-selector:hover{-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);opacity:1;text-shadow:15px 15px ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark};}.navlink.__jsx-style-dynamic-selector:visited{color:black;}.navlink-B.__jsx-style-dynamic-selector:hover{text-shadow:-15px 15px ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJPLEFBR3lCLEFBT0QsQUFJQyxBQWNXLEFBS2IsQUFHd0MsWUFGdEQsRUE5QmlCLEFBV0EsZUFWTixBQVdNLFNBVkUsTUFXRCxRQW9CbEIsR0E5QlksS0FXVyxLQVZ2QixTQUd3QixhQWtCWixVQUN5QyxhQVhyQyxjQUNXLHdCQVczQixJQW5CQSwyREFTcUIsNkZBQ0Qsa0JBQ3dCLHVDQUM5QixZQUNNLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL2NvbXBvbmVudHMvTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBTb2NpYWxMaW5rcyBmcm9tIFwiLi9Tb2NpYWxMaW5rc1wiO1xuXG5jb25zdCBOYXYgPSAoKSA9PiAoXG4gIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZsaW5rXCI+SE9NRTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2bGluayBuYXZsaW5rLUJcIj5BQk9VVDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPFNvY2lhbExpbmtzIGNsYXNzTmFtZT1cInNvY2lhbFwiIC8+XG5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDMwdmg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuICAgICAgICAuZmxleCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZsaW5rIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogNjBweCAwO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5hdmxpbms6aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMTVweCAxNXB4ICR7dGhlbWUuY29sb3JzLmRhcmt9O1xuICAgICAgICB9XG4gICAgICAgIC5uYXZsaW5rOnZpc2l0ZWQge1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgICAgICAubmF2bGluay1COmhvdmVyIHtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogLTE1cHggMTVweCAke3RoZW1lLmNvbG9ycy5kYXJrfTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdfQ== */
/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Nav.js */`));

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/OtherProject.js":
/*!************************************!*\
  !*** ./components/OtherProject.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var _database_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database/projects */ "./database/projects.js");
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/components/OtherProject.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const OtherProject = ({
  project
}) => {
  const {
    0: link,
    1: setLink
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  return __jsx("a", {
    href: link,
    target: "_blank",
    rel: "nofollow noopener noreferrer",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["409244580", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["409244580", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, project), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["409244580", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["409244580", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, _database_projects__WEBPACK_IMPORTED_MODULE_3__["otherProjects"].map(proj => {
    if (proj.project === project) {
      Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
        setLink(proj.link);
      }, [link]);
      return proj.description.map(item => __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["409244580", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark]]]) + " " + "list-item",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 17
        }
      }, item));
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "409244580",
    dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark],
    __self: undefined
  }, `a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;}.card.__jsx-style-dynamic-selector{display:block;width:180px;height:250px;padding:18px;border:solid 1px ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray};margin-right:15px;margin-bottom:15px;border-radius:5px;background-color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark};color:white;}.card.__jsx-style-dynamic-selector:hover{color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark};background-color:white;-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);}.card.__jsx-style-dynamic-selector:hover .list-item.__jsx-style-dynamic-selector{color:white;background-color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark};-webkit-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px);box-shadow:6px 6px ${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.gray};}.body.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;text-align:right;padding-bottom:18px;}.list.__jsx-style-dynamic-selector{display:flex-box;width:100%;-webkit-transition:all 0.15s;transition:all 0.15s;}.list-item.__jsx-style-dynamic-selector{display:inline-block;background-color:white;box-shadow:6px 6px rgb(255,153,204);border-radius:0 10px 0 10px;color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.dark};font-weight:400;margin-right:10px;margin-bottom:10px;padding:5px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9PdGhlclByb2plY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NTLEFBR2tDLEFBR1AsQUFZcUIsQUFLdkIsQUFNQyxBQU9JLEFBS0ksWUFqQnlCLEVBakJsQyxHQThCRCxJQUtZLEtBbENWLEVBOEJRLE9BbkJFLElBVlYsS0FrQ3lCLE1BdkN4QyxFQU1nRCxNQVVuQixBQUtBLGdCQUtmLElBU2QsRUFLOEIsTUFiUCxZQXBCSCxVQWtDaUIsUUFqQ2hCLG1CQUNELFFBaUNGLFFBekJsQixBQUtrRCxFQVpGLE1BaUM1QixrQkFDQyxVQWhCRixTQWlCTCxHQWxDQSxBQVlkLEtBTXNCLElBaUJ0QixHQWxDQSxhQWtCQSIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL2NvbXBvbmVudHMvT3RoZXJQcm9qZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5cbmltcG9ydCB7IG90aGVyUHJvamVjdHMgfSBmcm9tIFwiLi4vZGF0YWJhc2UvcHJvamVjdHNcIjtcblxuY29uc3QgT3RoZXJQcm9qZWN0ID0gKHsgcHJvamVjdCB9KSA9PiB7XG4gIGNvbnN0IFtsaW5rLCBzZXRMaW5rXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPGFcbiAgICAgIGNsYXNzTmFtZT1cImNhcmRcIlxuICAgICAgaHJlZj17bGlua31cbiAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICByZWw9XCJub2ZvbGxvdyBub29wZW5lciBub3JlZmVycmVyXCJcbiAgICA+XG4gICAgICA8aDM+e3Byb2plY3R9PC9oMz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICAgIHtvdGhlclByb2plY3RzLm1hcCgocHJvaikgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2oucHJvamVjdCA9PT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldExpbmsocHJvai5saW5rKTtcbiAgICAgICAgICAgICAgfSwgW2xpbmtdKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb2ouZGVzY3JpcHRpb24ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPntpdGVtfTwvbGk+XG4gICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAke3RoZW1lLmNvbG9ycy5ncmF5fTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5kYXJrfTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmRhcmt9O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkOmhvdmVyIC5saXN0LWl0ZW0ge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuZGFya307XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiA2cHggNnB4ICR7dGhlbWUuY29sb3JzLmdyYXl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYm9keSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMThweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleC1ib3g7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3QtaXRlbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDZweCA2cHggcmdiKDI1NSwgMTUzLCAyMDQpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDAgMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5kYXJrfTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9hPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT3RoZXJQcm9qZWN0O1xuIl19 */
/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/OtherProject.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (OtherProject);

/***/ }),

/***/ "./components/OtherProjects.js":
/*!*************************************!*\
  !*** ./components/OtherProjects.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OtherProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OtherProject */ "./components/OtherProject.js");
/* harmony import */ var _database_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database/projects */ "./database/projects.js");
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/components/OtherProjects.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const OtherProjects = () => __jsx("div", {
  className: "jsx-138258946" + " " + "background",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }
}, __jsx("h1", {
  className: "jsx-138258946" + " " + "title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}, "Other Projects"), __jsx("div", {
  className: "jsx-138258946" + " " + "projects--wrapper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}, _database_projects__WEBPACK_IMPORTED_MODULE_3__["otherProjects"].map(({
  project: proj
}) => {
  return __jsx(_OtherProject__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: proj,
    project: proj,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 16
    }
  });
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "138258946",
  __self: undefined
}, ".background.jsx-138258946{background-color:rgb(239,239,239);padding:80px 0;}.title.jsx-138258946{text-align:center;font-size:45px;margin-bottom:80px;font-weight:400;}.projects--wrapper.jsx-138258946{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0 200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9PdGhlclByb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVPLEFBRytDLEFBSWxCLEFBTUwsa0JBTEUsZUFDSSxDQUxKLGVBQ2pCLEdBS2tCLGdCQUNsQixNQUdnQyxtSEFDUCw2R0FDSixxRUFDSix5REFDQyxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9jb21wb25lbnRzL090aGVyUHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBPdGhlclByb2plY3QgZnJvbSBcIi4vT3RoZXJQcm9qZWN0XCI7XG5pbXBvcnQgeyBvdGhlclByb2plY3RzIGFzIHNpZGVQcm9qZWN0cyB9IGZyb20gXCIuLi9kYXRhYmFzZS9wcm9qZWN0c1wiO1xuXG5jb25zdCBPdGhlclByb2plY3RzID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cbiAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5PdGhlciBQcm9qZWN0czwvaDE+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0cy0td3JhcHBlclwiPlxuICAgICAge3NpZGVQcm9qZWN0cy5tYXAoKHsgcHJvamVjdDogcHJvaiB9KSA9PiB7XG4gICAgICAgIHJldHVybiA8T3RoZXJQcm9qZWN0IGtleT17cHJvan0gcHJvamVjdD17cHJvan0gLz47XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMjM5LCAyMzkpO1xuICAgICAgICAgIHBhZGRpbmc6IDgwcHggMDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9qZWN0cy0td3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgcGFkZGluZzogMCAyMDBweDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE90aGVyUHJvamVjdHM7XG4iXX0= */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/OtherProjects.js */"));

/* harmony default export */ __webpack_exports__["default"] = (OtherProjects);

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
/* harmony import */ var _database_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database/projects */ "./database/projects.js");
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/components/Projects.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // const values = Object.values(projects);
// const entries = Object.entries(projects);

const Projects = () => {
  const makeCard = () => {
    const keys = Object.keys(_database_projects__WEBPACK_IMPORTED_MODULE_3__["projects"]);
    return keys.map(item => __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      project: _database_projects__WEBPACK_IMPORTED_MODULE_3__["projects"][item].project,
      key: item,
      quote: _database_projects__WEBPACK_IMPORTED_MODULE_3__["projects"][item].quote,
      description: _database_projects__WEBPACK_IMPORTED_MODULE_3__["projects"][item].description,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }
    }));
  };

  return __jsx("section", {
    id: "projects",
    className: "jsx-249886654" + " " + "layout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "jsx-249886654" + " " + "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, "Selected Projects"), __jsx("ul", {
    className: "jsx-249886654",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, makeCard()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "249886654",
    __self: undefined
  }, ".layout.jsx-249886654{text-align:center;}.title.jsx-249886654{font-size:45px;margin-bottom:50px;font-weight:400;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9Qcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QlMsQUFHK0IsQUFHSCxlQUNJLEdBSHJCLGdCQUlrQixnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL1dvb0Nob2kvRGVza3RvcC9SZWFjdC5qcy9ibG9nLXdvby9jb21wb25lbnRzL1Byb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vZGF0YWJhc2UvcHJvamVjdHNcIjtcblxuLy8gY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhwcm9qZWN0cyk7XG4vLyBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMocHJvamVjdHMpO1xuXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc3QgbWFrZUNhcmQgPSAoKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHByb2plY3RzKTtcbiAgICByZXR1cm4ga2V5cy5tYXAoKGl0ZW0pID0+IChcbiAgICAgIDxDYXJkXG4gICAgICAgIHByb2plY3Q9e3Byb2plY3RzW2l0ZW1dLnByb2plY3R9XG4gICAgICAgIGtleT17aXRlbX1cbiAgICAgICAgcXVvdGU9e3Byb2plY3RzW2l0ZW1dLnF1b3RlfVxuICAgICAgICBkZXNjcmlwdGlvbj17cHJvamVjdHNbaXRlbV0uZGVzY3JpcHRpb259XG4gICAgICAvPlxuICAgICkpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwicHJvamVjdHNcIiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlNlbGVjdGVkIFByb2plY3RzPC9oMT5cbiAgICAgIDx1bD57bWFrZUNhcmQoKX08L3VsPlxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5sYXlvdXQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiJdfQ== */\n/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/Projects.js */"));
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
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9Tb2NpYWxMaW5rcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlTyxBQUc2QixBQUdHLEFBR1QsQUFLc0IsWUFKQSxNQU5wQyxHQUdBLGFBUUEsWUFKdUIsa0RBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9Tb2NpYWxMaW5rcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IFNvY2lhbExpbmsgPSAoeyB0aXRsZSwgbGluaywgdmlld2JveCwgcGF0aCB9KSA9PiAoXG4gIDw+XG4gICAgPGxpPlxuICAgICAgPGEgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9mb2xsb3cgbm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiByb2xlPVwiaW1nXCIgdmlld0JveD17dmlld2JveH0+XG4gICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICAgIDxwYXRoIGQ9e3BhdGh9IC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9hPlxuICAgIDwvbGk+XG5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgbGkge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgZmlsbDogJHt0aGVtZS5jb2xvcnMubGlua307XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICAgICAgICB9XG4gICAgICAgIHN2Zzpob3ZlciB7XG4gICAgICAgICAgZmlsbDogJHt0aGVtZS5jb2xvcnMucGlua307XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC8+XG4pO1xuXG5jb25zdCBTb2NpYWxMaW5rcyA9ICgpID0+IChcbiAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgIDxTb2NpYWxMaW5rXG4gICAgICB0aXRsZT1cIkdpdEh1YlwiXG4gICAgICBsaW5rPVwiaHR0cHM6Ly9naXRodWIuY29tL3djMzU2XCJcbiAgICAgIHZpZXdib3g9XCIwIDAgNDM4LjU0OSA0MzguNTQ5XCJcbiAgICAgIHBhdGg9XCJNNDA5LjEzMiwxMTQuNTczYy0xOS42MDgtMzMuNTk2LTQ2LjIwNS02MC4xOTQtNzkuNzk4LTc5LjhDMjk1LjczNiwxNS4xNjYsMjU5LjA1Nyw1LjM2NSwyMTkuMjcxLDUuMzY1IGMtMzkuNzgxLDAtNzYuNDcyLDkuODA0LTExMC4wNjMsMjkuNDA4Yy0zMy41OTYsMTkuNjA1LTYwLjE5Miw0Ni4yMDQtNzkuOCw3OS44QzkuODAzLDE0OC4xNjgsMCwxODQuODU0LDAsMjI0LjYzIGMwLDQ3Ljc4LDEzLjk0LDkwLjc0NSw0MS44MjcsMTI4LjkwNmMyNy44ODQsMzguMTY0LDYzLjkwNiw2NC41NzIsMTA4LjA2Myw3OS4yMjdjNS4xNCwwLjk1NCw4Ljk0NSwwLjI4MywxMS40MTktMS45OTYgYzIuNDc1LTIuMjgyLDMuNzExLTUuMTQsMy43MTEtOC41NjJjMC0wLjU3MS0wLjA0OS01LjcwOC0wLjE0NC0xNS40MTdjLTAuMDk4LTkuNzA5LTAuMTQ0LTE4LjE3OS0wLjE0NC0yNS40MDZsLTYuNTY3LDEuMTM2IGMtNC4xODcsMC43NjctOS40NjksMS4wOTItMTUuODQ2LDFjLTYuMzc0LTAuMDg5LTEyLjk5MS0wLjc1Ny0xOS44NDItMS45OTljLTYuODU0LTEuMjMxLTEzLjIyOS00LjA4Ni0xOS4xMy04LjU1OSBjLTUuODk4LTQuNDczLTEwLjA4NS0xMC4zMjgtMTIuNTYtMTcuNTU2bC0yLjg1NS02LjU3Yy0xLjkwMy00LjM3NC00Ljg5OS05LjIzMy04Ljk5Mi0xNC41NTkgYy00LjA5My01LjMzMS04LjIzMi04Ljk0NS0xMi40MTktMTAuODQ4bC0xLjk5OS0xLjQzMWMtMS4zMzItMC45NTEtMi41NjgtMi4wOTgtMy43MTEtMy40MjljLTEuMTQyLTEuMzMxLTEuOTk3LTIuNjYzLTIuNTY4LTMuOTk3IGMtMC41NzItMS4zMzUtMC4wOTgtMi40MywxLjQyNy0zLjI4OWMxLjUyNS0wLjg1OSw0LjI4MS0xLjI3Niw4LjI4LTEuMjc2bDUuNzA4LDAuODUzYzMuODA3LDAuNzYzLDguNTE2LDMuMDQyLDE0LjEzMyw2Ljg1MSBjNS42MTQsMy44MDYsMTAuMjI5LDguNzU0LDEzLjg0NiwxNC44NDJjNC4zOCw3LjgwNiw5LjY1NywxMy43NTQsMTUuODQ2LDE3Ljg0N2M2LjE4NCw0LjA5MywxMi40MTksNi4xMzYsMTguNjk5LDYuMTM2IGM2LjI4LDAsMTEuNzA0LTAuNDc2LDE2LjI3NC0xLjQyM2M0LjU2NS0wLjk1Miw4Ljg0OC0yLjM4MywxMi44NDctNC4yODVjMS43MTMtMTIuNzU4LDYuMzc3LTIyLjU1OSwxMy45ODgtMjkuNDEgYy0xMC44NDgtMS4xNC0yMC42MDEtMi44NTctMjkuMjY0LTUuMTRjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5Ni0yNi44MzUtMTEuMTRjLTkuMjM1LTUuMTM3LTE2Ljg5Ni0xMS41MTYtMjIuOTg1LTE5LjEyNiBjLTYuMDktNy42MTQtMTEuMDg4LTE3LjYxLTE0Ljk4Ny0yOS45NzljLTMuOTAxLTEyLjM3NC01Ljg1Mi0yNi42NDgtNS44NTItNDIuODI2YzAtMjMuMDM1LDcuNTItNDIuNjM3LDIyLjU1Ny01OC44MTcgYy03LjA0NC0xNy4zMTgtNi4zNzktMzYuNzMyLDEuOTk3LTU4LjI0YzUuNTItMS43MTUsMTMuNzA2LTAuNDI4LDI0LjU1NCwzLjg1M2MxMC44NSw0LjI4MywxOC43OTQsNy45NTIsMjMuODQsMTAuOTk0IGM1LjA0NiwzLjA0MSw5LjA4OSw1LjYxOCwxMi4xMzUsNy43MDhjMTcuNzA1LTQuOTQ3LDM1Ljk3Ni03LjQyMSw1NC44MTgtNy40MjFzMzcuMTE3LDIuNDc0LDU0LjgyMyw3LjQyMWwxMC44NDktNi44NDkgYzcuNDE5LTQuNTcsMTYuMTgtOC43NTgsMjYuMjYyLTEyLjU2NWMxMC4wODgtMy44MDUsMTcuODAyLTQuODUzLDIzLjEzNC0zLjEzOGM4LjU2MiwyMS41MDksOS4zMjUsNDAuOTIyLDIuMjc5LDU4LjI0IGMxNS4wMzYsMTYuMTgsMjIuNTU5LDM1Ljc4NywyMi41NTksNTguODE3YzAsMTYuMTc4LTEuOTU4LDMwLjQ5Ny01Ljg1Myw0Mi45NjZjLTMuOSwxMi40NzEtOC45NDEsMjIuNDU3LTE1LjEyNSwyOS45NzkgYy02LjE5MSw3LjUyMS0xMy45MDEsMTMuODUtMjMuMTMxLDE4Ljk4NmMtOS4yMzIsNS4xNC0xOC4xODIsOC44NS0yNi44NCwxMS4xMzZjLTguNjYyLDIuMjg2LTE4LjQxNSw0LjAwNC0yOS4yNjMsNS4xNDYgYzkuODk0LDguNTYyLDE0Ljg0MiwyMi4wNzcsMTQuODQyLDQwLjUzOXY2MC4yMzdjMCwzLjQyMiwxLjE5LDYuMjc5LDMuNTcyLDguNTYyYzIuMzc5LDIuMjc5LDYuMTM2LDIuOTUsMTEuMjc2LDEuOTk1IGM0NC4xNjMtMTQuNjUzLDgwLjE4NS00MS4wNjIsMTA4LjA2OC03OS4yMjZjMjcuODgtMzguMTYxLDQxLjgyNS04MS4xMjYsNDEuODI1LTEyOC45MDYgQzQzOC41MzYsMTg0Ljg1MSw0MjguNzI4LDE0OC4xNjgsNDA5LjEzMiwxMTQuNTczelwiXG4gICAgLz5cbiAgICA8U29jaWFsTGlua1xuICAgICAgdGl0bGU9XCJMaW5rZWRJblwiXG4gICAgICBsaW5rPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3dvby15b3VuZy9cIlxuICAgICAgdmlld2JveD1cIjAgMCA0MzAuMTE3IDQzMC4xMTdcIlxuICAgICAgcGF0aD1cIk00MzAuMTE3LDI2MS41NDNWNDIwLjU2aC05Mi4xODhWMjcyLjE5M2MwLTM3LjI3MS0xMy4zMzQtNjIuNzA3LTQ2LjcwMy02Mi43MDcgYy0yNS40NzMsMC00MC42MzIsMTcuMTQyLTQ3LjMwMSwzMy43MjRjLTIuNDMyLDUuOTI4LTMuMDU4LDE0LjE3OS0zLjA1OCwyMi40NzdWNDIwLjU2aC05Mi4yMTljMCwwLDEuMjQyLTI1MS4yODUsMC0yNzcuMzJoOTIuMjEgdjM5LjMwOWMtMC4xODcsMC4yOTQtMC40MywwLjYxMS0wLjYwNiwwLjg5NmgwLjYwNnYtMC44OTZjMTIuMjUxLTE4Ljg2OSwzNC4xMy00NS44MjQsODMuMTAyLTQ1LjgyNCBDMzg0LjYzMywxMzYuNzI0LDQzMC4xMTcsMTc2LjM2MSw0MzAuMTE3LDI2MS41NDN6IE01Mi4xODMsOS41NThDMjAuNjM1LDkuNTU4LDAsMzAuMjUxLDAsNTcuNDYzIGMwLDI2LjYxOSwyMC4wMzgsNDcuOTQsNTAuOTU5LDQ3Ljk0aDAuNjE2YzMyLjE1OSwwLDUyLjE1OS0yMS4zMTcsNTIuMTU5LTQ3Ljk0QzEwMy4xMjgsMzAuMjUxLDgzLjczNCw5LjU1OCw1Mi4xODMsOS41NTh6IE01LjQ3Nyw0MjAuNTZoOTIuMTg0di0yNzcuMzJINS40NzdWNDIwLjU2elwiXG4gICAgLz5cbiAgICA8U29jaWFsTGlua1xuICAgICAgdGl0bGU9XCJDb2RlUGVuXCJcbiAgICAgIGxpbms9XCJodHRwczovL2NvZGVwZW4uaW8vd2MzNTZcIlxuICAgICAgdmlld2JveD1cIjAgMCAzMS42NjUgMzEuNjY1XCJcbiAgICAgIHBhdGg9XCJNMTYuODc4LDAuNDE1Yy0wLjg1NC0wLjU2NS0xLjk2OC0wLjU1Mi0yLjgwOSwwLjAzNEwxLjQ4NSw5LjIxNGMtMC42NzEsMC40NjgtMS4wNzEsMS4yMzMtMS4wNzEsMi4wNTJ2OS40NDQgYzAsMC44NCwwLjQyMSwxLjYyMywxLjEyMiwyLjA4NmwxMi43OSw4LjQ1NWMwLjgzNiwwLjU1MywxLjkyMiwwLjU1MywyLjc1OCwwbDEzLjA0NC04LjYxOGMwLjctMC40NjMsMS4xMjItMS4yNDYsMS4xMjItMi4wODYgdi05LjI3OWMwLTAuODM5LTAuNDIxLTEuNjIyLTEuMTIxLTIuMDg1TDE2Ljg3OCwwLjQxNXogTTI2LjYyMSwxMC42NDVsLTQuODIxLDMuMjM3bC00LjUyMS0zLjI4OEwxNy4yNSw0LjEyN0wyNi42MjEsMTAuNjQ1eiBNMTMuOTc5LDQuMTMzdjYuMzI5bC00LjYzMywzLjI0bC00LjYyMS0zLjA5OUwxMy45NzksNC4xMzN6IE0zLjQ1OCwxMy43MjJsMi45OTEsMi4wMDRsLTIuOTkxLDIuMDkzVjEzLjcyMnogTTE0LjA1OCwyNy4yMTUgbC05LjMzMS02LjI1OGw0LjY2MS0zLjI1OGw0LjY3LDMuMTMzVjI3LjIxNXogTTEyLjI4NiwxNS42NzRsMy4wMjEtMi4xMTNsMy41MTksMi4zMTNsLTMuMTE5LDIuMDk1TDEyLjI4NiwxNS42NzR6IE0xNy4zNTQsMjcuMjE1IFYyMC44M2w0LjQ2My0yLjk5MWw0LjgwNSwzLjE1OUwxNy4zNTQsMjcuMjE1eiBNMjcuOTU0LDE3LjkyN2wtMy4xNjgtMi4wODJsMy4xNjgtMi4xMjVWMTcuOTI3elwiXG4gICAgLz5cbiAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5cbiAgICAgIDxhIGNsYXNzTmFtZT1cImJsb2dcIj5CbG9nPC9hPlxuICAgIDwvTGluaz5cblxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICAubmF2YmFyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgcGFkZGluZzogOXB4O1xuICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICByaWdodDogMzBweDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5ibG9nIHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMubGlua307XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmJsb2c6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5waW5rfTtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L3VsPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU29jaWFsTGlua3M7XG4iXX0= */
/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/SocialLinks.js */`));

const SocialLinks = () => __jsx("ul", {
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["315187072", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink]]]) + " " + "navbar",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 3
  }
}, __jsx(SocialLink, {
  title: "GitHub",
  link: "https://github.com/wc356",
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
  link: "https://www.linkedin.com/in/woo-young/",
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
  link: "https://codepen.io/wc356",
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
  className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["315187072", [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink]]]) + " " + "blog",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 7
  }
}, "Blog")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "315187072",
  dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link, _styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink],
  __self: undefined
}, `.navbar.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;background-color:rgba(255,255,255,0.8);border-radius:7px;position:fixed;padding:9px;top:20px;right:30px;z-index:1;}.blog.__jsx-style-dynamic-selector{color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.link};font-weight:600;-webkit-text-decoration:none;text-decoration:none;}.blog.__jsx-style-dynamic-selector:hover{color:${_styles_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.pink};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Xb29DaG9pL0Rlc2t0b3AvUmVhY3QuanMvYmxvZy13b28vY29tcG9uZW50cy9Tb2NpYWxMaW5rcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RE8sQUFHd0IsQUFXc0IsQUFLQSxtQ0FKbkIsQUFLbEIsZ0JBSnVCLHVCQVpGLDJCQWFyQiwwQ0FaNEMsdUNBQ3hCLGtCQUNILGVBQ0gsWUFDSCxTQUNFLFdBQ0QsVUFDWiIsImZpbGUiOiIvVXNlcnMvV29vQ2hvaS9EZXNrdG9wL1JlYWN0LmpzL2Jsb2ctd29vL2NvbXBvbmVudHMvU29jaWFsTGlua3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBTb2NpYWxMaW5rID0gKHsgdGl0bGUsIGxpbmssIHZpZXdib3gsIHBhdGggfSkgPT4gKFxuICA8PlxuICAgIDxsaT5cbiAgICAgIDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93IG5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgcm9sZT1cImltZ1wiIHZpZXdCb3g9e3ZpZXdib3h9PlxuICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgICA8cGF0aCBkPXtwYXRofSAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYT5cbiAgICA8L2xpPlxuXG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIGZpbGw6ICR7dGhlbWUuY29sb3JzLmxpbmt9O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgICAgICAgfVxuICAgICAgICBzdmc6aG92ZXIge1xuICAgICAgICAgIGZpbGw6ICR7dGhlbWUuY29sb3JzLnBpbmt9O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvPlxuKTtcblxuY29uc3QgU29jaWFsTGlua3MgPSAoKSA9PiAoXG4gIDx1bCBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICA8U29jaWFsTGlua1xuICAgICAgdGl0bGU9XCJHaXRIdWJcIlxuICAgICAgbGluaz1cImh0dHBzOi8vZ2l0aHViLmNvbS93YzM1NlwiXG4gICAgICB2aWV3Ym94PVwiMCAwIDQzOC41NDkgNDM4LjU0OVwiXG4gICAgICBwYXRoPVwiTTQwOS4xMzIsMTE0LjU3M2MtMTkuNjA4LTMzLjU5Ni00Ni4yMDUtNjAuMTk0LTc5Ljc5OC03OS44QzI5NS43MzYsMTUuMTY2LDI1OS4wNTcsNS4zNjUsMjE5LjI3MSw1LjM2NSBjLTM5Ljc4MSwwLTc2LjQ3Miw5LjgwNC0xMTAuMDYzLDI5LjQwOGMtMzMuNTk2LDE5LjYwNS02MC4xOTIsNDYuMjA0LTc5LjgsNzkuOEM5LjgwMywxNDguMTY4LDAsMTg0Ljg1NCwwLDIyNC42MyBjMCw0Ny43OCwxMy45NCw5MC43NDUsNDEuODI3LDEyOC45MDZjMjcuODg0LDM4LjE2NCw2My45MDYsNjQuNTcyLDEwOC4wNjMsNzkuMjI3YzUuMTQsMC45NTQsOC45NDUsMC4yODMsMTEuNDE5LTEuOTk2IGMyLjQ3NS0yLjI4MiwzLjcxMS01LjE0LDMuNzExLTguNTYyYzAtMC41NzEtMC4wNDktNS43MDgtMC4xNDQtMTUuNDE3Yy0wLjA5OC05LjcwOS0wLjE0NC0xOC4xNzktMC4xNDQtMjUuNDA2bC02LjU2NywxLjEzNiBjLTQuMTg3LDAuNzY3LTkuNDY5LDEuMDkyLTE1Ljg0NiwxYy02LjM3NC0wLjA4OS0xMi45OTEtMC43NTctMTkuODQyLTEuOTk5Yy02Ljg1NC0xLjIzMS0xMy4yMjktNC4wODYtMTkuMTMtOC41NTkgYy01Ljg5OC00LjQ3My0xMC4wODUtMTAuMzI4LTEyLjU2LTE3LjU1NmwtMi44NTUtNi41N2MtMS45MDMtNC4zNzQtNC44OTktOS4yMzMtOC45OTItMTQuNTU5IGMtNC4wOTMtNS4zMzEtOC4yMzItOC45NDUtMTIuNDE5LTEwLjg0OGwtMS45OTktMS40MzFjLTEuMzMyLTAuOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5Yy0xLjE0Mi0xLjMzMS0xLjk5Ny0yLjY2My0yLjU2OC0zLjk5NyBjLTAuNTcyLTEuMzM1LTAuMDk4LTIuNDMsMS40MjctMy4yODljMS41MjUtMC44NTksNC4yODEtMS4yNzYsOC4yOC0xLjI3Nmw1LjcwOCwwLjg1M2MzLjgwNywwLjc2Myw4LjUxNiwzLjA0MiwxNC4xMzMsNi44NTEgYzUuNjE0LDMuODA2LDEwLjIyOSw4Ljc1NCwxMy44NDYsMTQuODQyYzQuMzgsNy44MDYsOS42NTcsMTMuNzU0LDE1Ljg0NiwxNy44NDdjNi4xODQsNC4wOTMsMTIuNDE5LDYuMTM2LDE4LjY5OSw2LjEzNiBjNi4yOCwwLDExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjNjNC41NjUtMC45NTIsOC44NDgtMi4zODMsMTIuODQ3LTQuMjg1YzEuNzEzLTEyLjc1OCw2LjM3Ny0yMi41NTksMTMuOTg4LTI5LjQxIGMtMTAuODQ4LTEuMTQtMjAuNjAxLTIuODU3LTI5LjI2NC01LjE0Yy04LjY1OC0yLjI4Ni0xNy42MDUtNS45OTYtMjYuODM1LTExLjE0Yy05LjIzNS01LjEzNy0xNi44OTYtMTEuNTE2LTIyLjk4NS0xOS4xMjYgYy02LjA5LTcuNjE0LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc5Yy0zLjkwMS0xMi4zNzQtNS44NTItMjYuNjQ4LTUuODUyLTQyLjgyNmMwLTIzLjAzNSw3LjUyLTQyLjYzNywyMi41NTctNTguODE3IGMtNy4wNDQtMTcuMzE4LTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNGM1LjUyLTEuNzE1LDEzLjcwNi0wLjQyOCwyNC41NTQsMy44NTNjMTAuODUsNC4yODMsMTguNzk0LDcuOTUyLDIzLjg0LDEwLjk5NCBjNS4wNDYsMy4wNDEsOS4wODksNS42MTgsMTIuMTM1LDcuNzA4YzE3LjcwNS00Ljk0NywzNS45NzYtNy40MjEsNTQuODE4LTcuNDIxczM3LjExNywyLjQ3NCw1NC44MjMsNy40MjFsMTAuODQ5LTYuODQ5IGM3LjQxOS00LjU3LDE2LjE4LTguNzU4LDI2LjI2Mi0xMi41NjVjMTAuMDg4LTMuODA1LDE3LjgwMi00Ljg1MywyMy4xMzQtMy4xMzhjOC41NjIsMjEuNTA5LDkuMzI1LDQwLjkyMiwyLjI3OSw1OC4yNCBjMTUuMDM2LDE2LjE4LDIyLjU1OSwzNS43ODcsMjIuNTU5LDU4LjgxN2MwLDE2LjE3OC0xLjk1OCwzMC40OTctNS44NTMsNDIuOTY2Yy0zLjksMTIuNDcxLTguOTQxLDIyLjQ1Ny0xNS4xMjUsMjkuOTc5IGMtNi4xOTEsNy41MjEtMTMuOTAxLDEzLjg1LTIzLjEzMSwxOC45ODZjLTkuMjMyLDUuMTQtMTguMTgyLDguODUtMjYuODQsMTEuMTM2Yy04LjY2MiwyLjI4Ni0xOC40MTUsNC4wMDQtMjkuMjYzLDUuMTQ2IGM5Ljg5NCw4LjU2MiwxNC44NDIsMjIuMDc3LDE0Ljg0Miw0MC41Mzl2NjAuMjM3YzAsMy40MjIsMS4xOSw2LjI3OSwzLjU3Miw4LjU2MmMyLjM3OSwyLjI3OSw2LjEzNiwyLjk1LDExLjI3NiwxLjk5NSBjNDQuMTYzLTE0LjY1Myw4MC4xODUtNDEuMDYyLDEwOC4wNjgtNzkuMjI2YzI3Ljg4LTM4LjE2MSw0MS44MjUtODEuMTI2LDQxLjgyNS0xMjguOTA2IEM0MzguNTM2LDE4NC44NTEsNDI4LjcyOCwxNDguMTY4LDQwOS4xMzIsMTE0LjU3M3pcIlxuICAgIC8+XG4gICAgPFNvY2lhbExpbmtcbiAgICAgIHRpdGxlPVwiTGlua2VkSW5cIlxuICAgICAgbGluaz1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi93b28teW91bmcvXCJcbiAgICAgIHZpZXdib3g9XCIwIDAgNDMwLjExNyA0MzAuMTE3XCJcbiAgICAgIHBhdGg9XCJNNDMwLjExNywyNjEuNTQzVjQyMC41NmgtOTIuMTg4VjI3Mi4xOTNjMC0zNy4yNzEtMTMuMzM0LTYyLjcwNy00Ni43MDMtNjIuNzA3IGMtMjUuNDczLDAtNDAuNjMyLDE3LjE0Mi00Ny4zMDEsMzMuNzI0Yy0yLjQzMiw1LjkyOC0zLjA1OCwxNC4xNzktMy4wNTgsMjIuNDc3VjQyMC41NmgtOTIuMjE5YzAsMCwxLjI0Mi0yNTEuMjg1LDAtMjc3LjMyaDkyLjIxIHYzOS4zMDljLTAuMTg3LDAuMjk0LTAuNDMsMC42MTEtMC42MDYsMC44OTZoMC42MDZ2LTAuODk2YzEyLjI1MS0xOC44NjksMzQuMTMtNDUuODI0LDgzLjEwMi00NS44MjQgQzM4NC42MzMsMTM2LjcyNCw0MzAuMTE3LDE3Ni4zNjEsNDMwLjExNywyNjEuNTQzeiBNNTIuMTgzLDkuNTU4QzIwLjYzNSw5LjU1OCwwLDMwLjI1MSwwLDU3LjQ2MyBjMCwyNi42MTksMjAuMDM4LDQ3Ljk0LDUwLjk1OSw0Ny45NGgwLjYxNmMzMi4xNTksMCw1Mi4xNTktMjEuMzE3LDUyLjE1OS00Ny45NEMxMDMuMTI4LDMwLjI1MSw4My43MzQsOS41NTgsNTIuMTgzLDkuNTU4eiBNNS40NzcsNDIwLjU2aDkyLjE4NHYtMjc3LjMySDUuNDc3VjQyMC41NnpcIlxuICAgIC8+XG4gICAgPFNvY2lhbExpbmtcbiAgICAgIHRpdGxlPVwiQ29kZVBlblwiXG4gICAgICBsaW5rPVwiaHR0cHM6Ly9jb2RlcGVuLmlvL3djMzU2XCJcbiAgICAgIHZpZXdib3g9XCIwIDAgMzEuNjY1IDMxLjY2NVwiXG4gICAgICBwYXRoPVwiTTE2Ljg3OCwwLjQxNWMtMC44NTQtMC41NjUtMS45NjgtMC41NTItMi44MDksMC4wMzRMMS40ODUsOS4yMTRjLTAuNjcxLDAuNDY4LTEuMDcxLDEuMjMzLTEuMDcxLDIuMDUydjkuNDQ0IGMwLDAuODQsMC40MjEsMS42MjMsMS4xMjIsMi4wODZsMTIuNzksOC40NTVjMC44MzYsMC41NTMsMS45MjIsMC41NTMsMi43NTgsMGwxMy4wNDQtOC42MThjMC43LTAuNDYzLDEuMTIyLTEuMjQ2LDEuMTIyLTIuMDg2IHYtOS4yNzljMC0wLjgzOS0wLjQyMS0xLjYyMi0xLjEyMS0yLjA4NUwxNi44NzgsMC40MTV6IE0yNi42MjEsMTAuNjQ1bC00LjgyMSwzLjIzN2wtNC41MjEtMy4yODhMMTcuMjUsNC4xMjdMMjYuNjIxLDEwLjY0NXogTTEzLjk3OSw0LjEzM3Y2LjMyOWwtNC42MzMsMy4yNGwtNC42MjEtMy4wOTlMMTMuOTc5LDQuMTMzeiBNMy40NTgsMTMuNzIybDIuOTkxLDIuMDA0bC0yLjk5MSwyLjA5M1YxMy43MjJ6IE0xNC4wNTgsMjcuMjE1IGwtOS4zMzEtNi4yNThsNC42NjEtMy4yNThsNC42NywzLjEzM1YyNy4yMTV6IE0xMi4yODYsMTUuNjc0bDMuMDIxLTIuMTEzbDMuNTE5LDIuMzEzbC0zLjExOSwyLjA5NUwxMi4yODYsMTUuNjc0eiBNMTcuMzU0LDI3LjIxNSBWMjAuODNsNC40NjMtMi45OTFsNC44MDUsMy4xNTlMMTcuMzU0LDI3LjIxNXogTTI3Ljk1NCwxNy45MjdsLTMuMTY4LTIuMDgybDMuMTY4LTIuMTI1VjE3LjkyN3pcIlxuICAgIC8+XG4gICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+XG4gICAgICA8YSBjbGFzc05hbWU9XCJibG9nXCI+QmxvZzwvYT5cbiAgICA8L0xpbms+XG5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgLm5hdmJhciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHBhZGRpbmc6IDlweDtcbiAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuICAgICAgICAuYmxvZyB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpbmt9O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5ibG9nOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucGlua307XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC91bD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNvY2lhbExpbmtzO1xuIl19 */
/*@ sourceURL=/Users/WooChoi/Desktop/React.js/blog-woo/components/SocialLinks.js */`));

/* harmony default export */ __webpack_exports__["default"] = (SocialLinks);

/***/ }),

/***/ "./database/projects.js":
/*!******************************!*\
  !*** ./database/projects.js ***!
  \******************************/
/*! exports provided: projects, otherProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects", function() { return projects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "otherProjects", function() { return otherProjects; });
const projects = [{
  project: "Web-Portfolio",
  quote: `Dynamic site with custom design & prototyping`,
  description: "Front-end website built with React and Next",
  link: "",
  technology: ["ReactJS", "NextJS", "styled-jsx", "dynamic pages | routing", "Adobe XD | prototyping", "Git"],
  body: [{
    OVERVIEW: "The website consists of two main parts—the portfolio page and the blog. The portfolio page is then broken down into five parts—landing, about me, selected projects, other projects, and contact. GitHub, LinkedIn, CodePen and the blog is located in the navigation bar located in the top right corner."
  }, {
    APPROACH: ["Design & Sketch", "Prototype with AdobeXD", "Implementation", "Styling", "Hosting"]
  }, {
    CHALLENGES: ["Learning a new Framework—NextJS", "Dynamic Routing, SSR, CSR", "Storing, managing and rendering data objects", "UI/UX"]
  }, {
    REFLECTIONS: ["I would take more time to study and outline my goals clearly to determine a better-suited tool for my needs. In retrospect, I would have been better off using GatsbyJS for this project as my purposes did not take much(if any) of the advantages NextJS's SSR offers. In choosing SSR, I was hard-stuck on hydration issues where the SSR did not match the CSR in the version of NextJS I have been working with (9.3.4)", "In the next phase of the project, I would consider making a CMS, as it would allow for better management and organization of content over time, and allows for better scaling as well.", "Bootstrapping would have been a great framework to implement and save time."]
  }],
  pictures: [{
    path: "/images/01_portfolio.gif",
    caption: "AdobeXD Prototyping"
  }, {
    path: "/images/02_portfolio.gif",
    caption: "Landing Page"
  }, {
    path: "/images/03_portfolio.gif",
    caption: "Blog"
  }],
  cover: "/images/02_portfolio.gif"
}, {
  project: "Expensify",
  quote: "Quickly Sort & Track your Expenses",
  description: "Full-stack web application built with React and Redux",
  link: "//github.com/wc356/react-expensify",
  technology: ["ReactJS", "Redux", "react-router", "Webpack", "Babel", "Jest", "Enzyme", "Firebase", "Heroku", "Git", "SCSS | SASS", "auth"],
  body: [{
    OVERVIEW: "The project largely consists of four main parts—the login page, dashboard, add expense page, and lastly the edit expense page."
  }, {
    APPROACH: ["Watch and Read Instructions", "Complete Challenges", "Search for Necessary Dependencies"]
  }, {
    CHALLENGES: ["Learning/Implementing Redux", "Testing with Jest", "Setting up Authentication"]
  }, {
    REFLECTIONS: ["Rather than using Heroku, I would consider alternative deploy methods because of the long initial loading time.", "Having access to any users' data, this project made me rethink about data privacy.", "How might I alter the project to better scale overtime? Increase in traffic, data, and mobile support?"]
  }],
  pictures: [{
    path: "/images/01_expensify.gif",
    caption: "Authorization | Google Login API"
  }, {
    path: "/images/02_expensify.gif",
    caption: "Dashboard & Add Expense"
  }, {
    path: "/images/03_expensify.gif",
    caption: "Sort & Filter Expenses"
  }],
  cover: "/images/03_expensify.gif"
}, {
  project: "Specula",
  quote: "Compare and Track Phone Specs",
  description: "Full-stack web application built with React",
  link: "//github.com/wc356/specula-v2",
  technology: ["ReactJS", "NextJS", "HTML", "CSS | SASS", "Adobe Indesign", "hosting", "Git"],
  body: [{
    OVERVIEW: "The website consists of two main parts—the phones dashboard page and add phone page. In the dashboard page, one can view a list of phones with their specifications—release date, price, brand, etc. By using the drop-down menu, one can sort the phones in order of price, release date, or brand. The add phone page allows the user to create their own phone and set the specifications to see how a new phone would compare to the existing line-up."
  }, {
    APPROACH: ["Design & Sketch", "Prototype with Indesign", "Implementation", "Styling", "Hosting"]
  }, {
    CHALLENGES: ["Dynamic Routing, SSR, CSR, and Hydration", "State management with Redux (failed due to latest NextJS version update & hydration issue) vs Context API", "Storing, managing and rendering data objects", "UI/UX"]
  }, {
    REFLECTIONS: ["I would consider using Bootstrap to lessen the time needed for styling basic objects, and to quickly develop a responsive design.", "Would like to refactor the styling files to be more efficient—with a components library to be made and imported and reused repeatedly instead of having to rewrite repetitive code."]
  }],
  pictures: [{
    path: "/images/01_specula.jpg",
    caption: "Adobe Indesign | visual study"
  }, {
    path: "/images/01_specula.gif",
    caption: "Dashboard & SortBy"
  }, {
    path: "/images/02_specula.gif",
    caption: "Add Phone Page"
  }, {
    path: "/images/03_specula.gif",
    caption: "Remove Phone & save to Local Storage"
  }],
  cover: "/images/01_specula.gif"
}, {
  project: "React-Tetris",
  quote: "This is where it all started.",
  description: "Original Tetris game built with React",
  link: "//github.com/wc356/React-tetris",
  technology: ["ReactJS", "create-react-app", "SCSS | SASS", "Git"],
  body: [{
    OVERVIEW: "The project consists of a single dashboard page where one can play Tetris. Each cell was made with an array filled with default values, which were then compared to the player's tetromino value to check for collisions. Custom hooks were implemented to set player's default position, set game status, set interval, and to update the stage when leveled up."
  }, {
    APPROACH: ["Understand the Game", "Set the stage—empty cells with array values", "Add game functionalities", "Optimization—memo, UI/UX"]
  }, {
    CHALLENGES: ["Identifying the edge cases—tetromino rotation, re-render optimization, etc.", "Understanding Custom Hooks setup and Array fill methods.", "Game Development versus Web Development—understanding the differences."]
  }, {
    REFLECTIONS: ['In the next iteration, I would like to implement "ghost blocks" feature, the player can see the block outcome before the fall.']
  }],
  pictures: [{
    path: "/images/01_tetris.gif",
    caption: "Start Game"
  }, {
    path: "/images/02_tetris.gif",
    caption: "Clear Lines & Increase Level"
  }],
  cover: "/images/02_tetris.gif"
}, {
  project: "Indecision",
  quote: "Get Things Done",
  description: "Front-end web application built with React",
  link: "react-indecision",
  technology: ["ReactJS", "Babel", "SCSS | SASS", "Git", "Webpack"],
  body: [{
    OVERVIEW: "The project is a simple and intuitive web application that randomly allows the user to get started on any task of his or her entries of tasks. The dashbboard page shows the list of entered tasks, and the input at the bottom allows user to add an option."
  }, {
    APPROACH: ["Separate into Components and Styles folder", "Styles into compartments—Base and Components"]
  }, {
    CHALLENGES: ["While the application itself may be simple, I wanted to focus on organizing files, styling and structuring to recommended practices. It took a bit of time trying to figure out how to organize things into the organized structure at first."]
  }, {
    REFLECTIONS: ["The project is a quick exercise and was good for getting some more practice into the basic functionalities of React."]
  }],
  pictures: [{
    path: "/images/01_indecision.gif",
    caption: "Add and select Task"
  }],
  cover: "/images/01_indecision.gif"
}];
const otherProjects = [{
  project: "Ravenous 🍟",
  link: "//github.com/wc356/react-ravenous",
  description: ["JavaScript", "ReactJS", "SASS", "HTML"]
}, {
  project: "To Do List ✅",
  link: "//github.com/wc356/ReactNative-Todo",
  description: ["JavaScript", "React Native", "SASS"]
}, {
  project: "Chorebot 🤖",
  link: "//github.com/wc356/chorebot",
  description: ["JavaScript", "SASS", "HTML"]
}, {
  project: "Tech-Web 👩🏻‍💻",
  link: "//github.com/wc356/CSS-Tech-Web",
  description: ["HTML", "CSS"]
}];

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
/* harmony import */ var _components_OtherProjects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/OtherProjects */ "./components/OtherProjects.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Contact */ "./components/Contact.js");
var _jsxFileName = "/Users/WooChoi/Desktop/React.js/blog-woo/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






 // Render

const LandingPage = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log("useEffect ran");
  });
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(_components_Landing__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx(_components_About__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(_components_Projects__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx(_components_OtherProjects__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

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

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/WooChoi/Desktop/React.js/blog-woo/pages/index.js */"./pages/index.js");


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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

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
//# sourceMappingURL=index.js.map