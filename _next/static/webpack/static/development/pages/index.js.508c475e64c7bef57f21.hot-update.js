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








var names = ['shivesh-jadon', 'neil-chulpongsatorn', 'marcus-friedel', 'adnan-karim', 'aditya-gunturu', 'mehrad-faridan', 'jian-liao', 'zhijie-xia', 'nishan-soni', 'bheesha-kumari', 'jarin-thundathil'];
var types = [{
  key: 'faculty',
  title: 'Faculty'
}, {
  key: 'postdoc',
  title: 'Post Docs'
}, {
  key: 'phd',
  title: 'PhD Students'
}, {
  key: 'master',
  title: 'Masters Students'
}, {
  key: 'undergrad',
  title: 'Undergrad Students'
}, {
  key: 'visiting',
  title: 'Visiting Researchers'
}, {
  key: 'alumni',
  title: 'Alumni'
}];
var students = [];

for (var _i = 0, _names = names; _i < _names.length; _i++) {
  var name = _names[_i];
  var student = _content_output_ilab_summary_json__WEBPACK_IMPORTED_MODULE_7__.fileMap["content/output/people/".concat(name, ".json")];
  student.photo = "https://raw.githubusercontent.com/ucalgary-ilab/ilab-website/master/static/images/people/".concat(name, ".jpg");
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

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: student[key],
        target: "_blank",
        style: {
          fontSize: '1.2em'
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: icon
      })));
    }
  }, {
    key: "getTitle",
    value: function getTitle(student) {
      switch (student.type) {
        case 'postdoc':
          student.title = 'Postdocotral Fellow';
          break;

        case 'phd':
          student.title = 'PhD Student';
          break;

        case 'master':
          student.title = 'Master Student';
          break;

        case 'undergrad':
          student.title = 'Undergraduate Student';
          break;

        case 'visiting':
          student.title = 'Visiting Researcher';
          break;

        case 'alumni':
          switch (student.past) {
            case 'postdoc':
              student.title = 'Alumni (PostDoc)';
              break;

            case 'phd':
              student.title = 'Alumni (PhD)';
              break;

            case 'master':
              student.title = 'Alumni (Master)';
              break;

            case 'undergrad':
              student.title = 'Alumni (Undergrad)';
              break;

            case 'visiting':
              student.title = 'Alumni (Visiting)';
              break;
          }

          break;
      }

      return student;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "students"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "Students"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ui five cards"
      }, students.map(function (student) {
        student = _this.getTitle(student);
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "card"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "center aligned content"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "header"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          className: "ui small avatar image",
          src: student.photo
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "header"
        }, student.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "meta"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ui label"
        }, student.title)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "description"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ui horizontal small divided link list"
        }, ['cv', 'url', 'scholar', 'facebook', 'twitter', 'github', 'linkedin'].map(function (key) {
          return _this.renderLink(student, key);
        })))));
      })));
    }
  }]);

  return Students;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Students);

/***/ })

})
//# sourceMappingURL=index.js.508c475e64c7bef57f21.hot-update.js.map