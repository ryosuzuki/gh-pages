webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/students.js":
/*!***************************!*\
  !*** ./pages/students.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _content_output_ilab_summary_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../content/output/ilab-summary.json */ "./content/output/ilab-summary.json");
var _content_output_ilab_summary_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/output/ilab-summary.json */ "./content/output/ilab-summary.json", 1);








var names = ['shivesh-jadon', 'neil-chulpongsatorn', 'marcus-friedel', 'adnan-karim', 'aditya-gunturu'];
var students = [];

for (var _i = 0, _names = names; _i < _names.length; _i++) {
  var name = _names[_i];
  var student = _content_output_ilab_summary_json__WEBPACK_IMPORTED_MODULE_7__.fileMap["content/output/people/".concat(name, ".json")];
  students.push(student);
}

var Students =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Students, _React$Component);

  function Students() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Students);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Students).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Students, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "students"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "Students"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ui horizontal list"
      }, students.map(function (student) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "item"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          className: "ui avatar image",
          src: "/images/avatar/small/tom.jpg"
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "content"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "header"
        }, student.name), "Top Contributor"));
      })));
    }
  }]);

  return Students;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Students);

/***/ })

})
//# sourceMappingURL=index.js.bf467ec7b5db23774035.hot-update.js.map