webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/students.js":
/*!***************************!*\
  !*** ./pages/students.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _content_output_students_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../content/output/students.json */ "./content/output/students.json");
var _content_output_students_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/output/students.json */ "./content/output/students.json", 1);









/*
import summary from '../content/output/ilab-summary.json'
const names = [
  'neil-chulpongsatorn',
  'marcus-friedel',
  'adnan-karim',
  'aditya-gunturu',
  'mehrad-faridan',
  'jian-liao',
  'zhijie-xia',
  'nishan-soni',
  'bheesha-kumari',
  'jarin-thundathil',
  'kevin-van',
  'melissa-hoang',
  'abhinav-pillai',
  'keiichi-ihara',
  'mille-skovhus-lunding',
  'rasmus-lunding',
  'ryota-gomi',
  'kyzyl-monteiro',
  'shivesh-jadon',
  'hiroki-kaimoto',
  'ritik-vatsal',
  'shrivatsa-mishra',
  'tian-xia',
  'christopher-rodriguez',
  'harrison-chen',
  'kaynen-mitchell',
  'manjot-khangura',
  'manuel-rodriguez',
]

let students = []
for (let name of names) {
  let student = summary.fileMap[`content/output/people/${name}.json`]
  student.id = name
  student.photo = `https://raw.githubusercontent.com/ucalgary-ilab/ilab-website/master/static/images/people/${name}.jpg`
  students.push(student)
}
*/

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(_content_output_students_json__WEBPACK_IMPORTED_MODULE_8__), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var student = _step.value;
    student.photo = "https://raw.githubusercontent.com/ucalgary-ilab/ilab-website/master/static/images/people/".concat(student.id, ".jpg");
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return != null) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var Students =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Students, _React$Component);

  function Students() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Students);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Students).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Students, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "renderLink",
    value: function renderLink(student, key) {
      if (!student[key]) {
        return '';
      }

      var title = student[key].split('/')[3];
      var href;
      var icon;

      switch (key) {
        case 'url':
          icon = 'fas fa-link fa-fw';
          break;

        case 'scholar':
          icon = 'fas fa-graduation-cap fa-fw';
          break;

        case 'twitter':
          icon = 'fab fa-twitter fa-fw';
          break;

        case 'facebook':
          icon = 'fab fa-facebook-square fa-fw';
          break;

        case 'github':
          icon = 'fab fa-github-alt fa-fw';
          break;

        case 'cv':
          icon = 'far fa-file fa-fw';
          break;

        case 'email':
          icon = 'far fa-envelope fa-fw';
          break;

        case 'linkedin':
          icon = 'fab fa-linkedin-in fa-fw';
          break;
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: student[key],
        target: "_blank",
        style: {
          fontSize: '1.2em'
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: icon
      })));
    }
  }, {
    key: "getTitle",
    value: function getTitle(student) {
      var type = student.type;

      if (type === 'alumni') {
        type = student.past;
      }

      switch (type) {
        case 'postdoc':
          student.title = 'Postdoc';
          break;

        case 'phd':
          student.title = 'PhD';
          break;

        case 'master':
          student.title = 'Master';
          break;

        case 'undergrad':
          student.title = 'Undergrad';
          break;

        case 'intern':
          student.title = 'Intern';
          break;

        case 'visiting':
          student.title = 'Visiting';
          break;
      }

      return student;
    }
  }, {
    key: "renderStudent",
    value: function renderStudent(student) {
      student = this.getTitle(student);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "card",
        href: "https://ilab.ucalgary.ca/people/".concat(student.id),
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "center aligned"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "image profile-container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "ui rounded profile image",
        src: student.photo
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "header"
      }, student.name, " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "meta"
      }, student.title, " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "meta"
      }, student.now))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "students"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", null, "Students"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", null, "Current Students"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "ui ten cards"
      }, _content_output_students_json__WEBPACK_IMPORTED_MODULE_8__.filter(function (student) {
        return student.type !== 'alumni';
      }).map(function (student) {
        return _this.renderStudent(student);
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", null, "Selected Alumni"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "ui ten cards"
      }, _content_output_students_json__WEBPACK_IMPORTED_MODULE_8__.filter(function (student) {
        return student.type === 'alumni';
      }).map(function (student) {
        return _this.renderStudent(student);
      })));
    }
  }]);

  return Students;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Students);

/***/ })

})
//# sourceMappingURL=index.js.d7a35ecf04c16b55db8a.hot-update.js.map