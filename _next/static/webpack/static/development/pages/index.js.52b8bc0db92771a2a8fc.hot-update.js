webpackHotUpdate("static/development/pages/index.js",{

/***/ "./content/output/experience.json":
/*!****************************************!*\
  !*** ./content/output/experience.json ***!
  \****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

module.exports = [{"period":"August, 2020 --- Current","role":"Assistant Professor","logo":"ucalgary.png","institute":{"name":"University of Calgary","url":"https://www.ucalgary.ca/"},"lab":{"name":"HCI Group","url":"https://ilab.cpsc.ucalgary.ca/"},"advisors":[{"name":"Assistant Professor","url":"https://science.ucalgary.ca/computer-science"}]},{"period":"August, 2015 --- August, 2020","role":"Research Assistnat","logo":"cu-boulder.png","institute":{"name":"CU Boulder","url":"https://colorado.edu"},"lab":{"name":"THING Lab","url":"https://www.colorado.edu/atlas/thing-lab"},"advisors":[{"name":"Daniel Lightinger","url":"http://leithinger.com/"},{"name":"Mark D. Gross","url":"http://mdgross.net/"},{"name":"Tom Yeh","url":"http://tomyeh.info/"}]},{"period":"May, 2020 --- August, 2020","role":"Research Intern","logo":"microsoft.png","institute":{"name":"Microsoft Research","url":"https://www.microsoft.com/en-us/research/"},"lab":{"name":"EPIC Group","url":"https://www.microsoft.com/en-us/research/group/epic/"},"advisors":[{"name":"Mar Gonzalez Franco","url":"https://www.microsoft.com/en-us/research/people/margon/"},{"name":"Eyal Ofek","url":"https://www.microsoft.com/en-us/research/people/eyalofek/"},{"name":"Mike Sinclair","url":"https://www.microsoft.com/en-us/research/people/sinclair/"},{"name":"Ken Hinckley","url":"https://www.microsoft.com/en-us/research/people/kenh/"}]},{"period":"May, 2019 --- August, 2019","role":"Research Intern","logo":"adobe.png","institute":{"name":"Adobe Research","url":"https://colorado.edu"},"lab":{"name":"Creative Intelligence Lab","url":"https://research.adobe.com/"},"advisors":[{"name":"Rubaiat Habib","url":"https://rubaiathabib.me/"},{"name":"Li-Yi Wei","url":"https://www.liyiwei.org/"},{"name":"Stephen Diverdi","url":"http://www.stephendiverdi.com/"},{"name":"Danny Kaufman","url":"http://dannykaufman.io/"}]},{"period":"December, 2017 --- October, 2018","role":"Visiting Researcher","logo":"ut.png","institute":{"name":"University of Tokyo","url":"https://colorado.edu"},"lab":{"name":"ERATO UIN","url":"http://www.jst.go.jp/erato/kawahara"},"advisors":[{"name":"Yasuaki Kakehi","url":"http://xlab.iii.u-tokyo.ac.jp/"},{"name":"Yoshihiro Kawahara","url":"http://www.akg.t.u-tokyo.ac.jp/"},{"name":"Ryuma Niiyama","url":"https://scholar.google.co.jp/citations?user=0NMf5sgAAAAJ&hl=en"}]},{"period":"May, 2016 --- August, 2016","role":"Research Intern","logo":"uc-berkeley.png","institute":{"name":"UC Berkeley","url":null},"lab":{"name":"BiD Lab","url":"http://bid.berkeley.edu/"},"advisors":[{"name":"Bjoern Hartmann","url":"http://people.eecs.berkeley.edu/~bjoern/"}]},{"period":"May, 2015 --- August, 2015","role":"Research Intern","logo":"stanford-2.png","institute":{"name":"Stanford University","url":"https://stanford.edu"},"lab":{"name":"HCI Group","url":"http://hci.stanford.edu/"},"advisors":[{"name":"Michael Bernstein","url":"http://hci.stanford.edu/msb/"}]},{"period":"October, 2014 --- May, 2015","role":"Research Assistant","logo":"ut.png","institute":{"name":"University of Tokyo","url":null},"lab":{"name":"IIS Lab","url":"http://iis-lab.org/"},"advisors":[{"name":"Koji Yatani","url":"http://iis-lab.org/member/koji-yatani/"}]},{"period":"December, 2014 --- March, 2015","role":"Research Intern","logo":"aist.png","institute":{"name":"AIST","url":null},"lab":{"name":"Media Interaction","url":"https://staff.aist.go.jp/m.goto/MIG/index-j.html"},"advisors":[{"name":"Jun Kato","url":"http://junkato.jp/"}]}];

/***/ }),

/***/ "./pages/experience.js":
/*!*****************************!*\
  !*** ./pages/experience.js ***!
  \*****************************/
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
/* harmony import */ var _content_output_experience_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../content/output/experience.json */ "./content/output/experience.json");
var _content_output_experience_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/output/experience.json */ "./content/output/experience.json", 1);









var Experience =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Experience, _React$Component);

  function Experience() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Experience);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Experience).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Experience, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "updates",
        className: "ui relaxed divided list"
      }, _content_output_experience_json__WEBPACK_IMPORTED_MODULE_7__.map(function (item, i) {
        var advisors = item.advisors || [];
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "item",
          style: {
            padding: '20px 0'
          }
        }, i == 0 && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Current Affiliation"), i == 1 && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Previous Affiliation"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ui mini image"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: "/static/images/".concat(item.logo)
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "middle aligned content"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "header"
        }, item.institute.name, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "description"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: item.lab.url,
          target: "_blank"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, item.lab.name)))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "content"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          style: {
            marginBottom: "-5px"
          }
        }, item.role), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ui list"
        }, advisors.map(function (advisor) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "item"
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
            href: advisor.url,
            target: "_blank"
          }, advisor.name));
        }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "extra",
          style: {
            marginLeft: '0px',
            marginTop: '5px'
          }
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "ui label"
        }, item.period)));
      }));
    }
  }]);

  return Experience;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Experience);

/***/ })

})
//# sourceMappingURL=index.js.52b8bc0db92771a2a8fc.hot-update.js.map