webpackHotUpdate("static/development/pages/login.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);




function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  {\n    username @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var GET_USER = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Query"], {
    query: GET_USER
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading,
        error = _ref.error;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("header", {
      className: "jsx-3057473546"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("nav", {
      className: "jsx-3057473546"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
      className: "jsx-3057473546"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      className: "jsx-3057473546"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      className: "jsx-3057473546"
    }, "Home"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      className: "jsx-3057473546"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/login"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      className: "jsx-3057473546"
    }, "Login"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      className: "jsx-3057473546"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/signup"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      className: "jsx-3057473546"
    }, "Signup"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      className: "jsx-3057473546"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      className: "jsx-3057473546"
    }, "logout user")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3057473546"
    }, "ul.jsx-3057473546{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style:none;margin-left:0;padding-left:0;}li.jsx-3057473546{margin-right:1rem;}li.jsx-3057473546:first-child{margin-left:auto;}a.jsx-3057473546{color:#fff;-webkit-text-decoration:none;text-decoration:none;}header.jsx-3057473546{padding:0.2rem;color:#fff;background-color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW1hbnRvbmlzL3dlYnNpdGVzL0hhc3VyYU5leHQvYXBwL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDc0IsQUFHNEIsQUFPSyxBQUlELEFBSU4sQUFLSSxXQUpNLElBS1YsRUFUYixDQUpBLFFBY3dCLHNCQUN4QixhQU5BLGFBaEJrQixnQkFDRixjQUNDLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9zYW1hbnRvbmlzL3dlYnNpdGVzL0hhc3VyYU5leHQvYXBwL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuXG5jb25zdCBHRVRfVVNFUiA9IGdxbGBcbiAge1xuICAgIHVzZXJuYW1lIEBjbGllbnRcbiAgfVxuYDtcbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPFF1ZXJ5IHF1ZXJ5PXtHRVRfVVNFUn0+XG4gICAgeyh7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0pID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICA8YT5Ib21lPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgIDxhPkxvZ2luPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cbiAgICAgICAgICAgICAgICAgIDxhPlNpZ251cDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPmxvZ291dCB1c2VyPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxpOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjJyZW07XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICApO1xuICAgIH19XG4gIDwvUXVlcnk+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/Users/samantonis/websites/HasuraNext/app/components/header.js */"));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=login.js.88eb4aa6d7178634446e.hot-update.js.map