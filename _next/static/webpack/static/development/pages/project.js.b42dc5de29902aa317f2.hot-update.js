webpackHotUpdate("static/development/pages/project.js",{

/***/ "./pages/project.js":
/*!**************************!*\
  !*** ./pages/project.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _content_output_summary_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../content/output/summary.json */ "./content/output/summary.json");
var _content_output_summary_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/output/summary.json */ "./content/output/summary.json", 1);
/* harmony import */ var _content_output_press_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../content/output/press.json */ "./content/output/press.json");
var _content_output_press_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/output/press.json */ "./content/output/press.json", 1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer */ "./pages/footer.js");











 // import {Router} from '../routes'




var Project =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Project, _React$Component);

  function Project() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Project);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Project).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Project, [{
    key: "render",
    value: function render() {
      var project = __webpack_require__("./content/output/projects sync recursive ^\\.\\/.*\\.json$")("./".concat(this.props.id, ".json"));

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("title", null, project.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "ui stackable grid",
        style: {
          marginTop: '20px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "one wide column"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "project",
        className: "ten wide column centered"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "breadcrumb",
        className: "ui breadcrumb"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "section",
        href: "/"
      }, "Ryo Suzuki"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "right angle icon divider"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "active section"
      }, project.name)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "title"
      }, project.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "meta"
      }, project.authors.map(function (author) {
        return author.includes('Ryo Suzuki') ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", null, author) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, author);
      }).reduce(function (prev, curr) {
        return [prev, ', ', curr];
      }), " \xA0 ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          color: 'gray'
        }
      }, project.note)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "meta"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: project.conference.url,
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, project.conference.fullname))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "meta"
      }, "Links: \xA0", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "ui inverted secondary button",
        href: '/publications/' + project.pdf,
        target: "_blank",
        style: {
          marginRight: '5px',
          display: project.pdf ? 'inline' : 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "far fa-file-pdf"
      }), "\xA0\xA0 PDF")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "ui inverted secondary button",
        href: '/publications/' + project.poster,
        target: "_blank",
        style: {
          marginRight: '5px',
          display: project.poster ? 'inline' : 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "far fa-file-pdf"
      }), "\xA0\xA0 Poster")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "ui inverted secondary button",
        href: '/publications/' + project.slide,
        target: "_blank",
        style: {
          marginRight: '5px',
          display: project.slide ? 'inline' : 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "far fa-file-pdf"
      }), "\xA0\xA0 Slide")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "ui inverted secondary button",
        href: project.video,
        target: "_blank",
        style: {
          marginRight: '5px',
          display: project.video ? 'inline' : 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-video"
      }), "\xA0\xA0 Video")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "ui inverted secondary button",
        href: project['short-video'],
        target: "_blank",
        style: {
          marginRight: '5px',
          display: project['short-video'] ? 'inline' : 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-video"
      }), "\xA0\xA0 30s Video")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "ui inverted secondary button",
        href: project.github,
        target: "_blank",
        style: {
          marginRight: '5px',
          display: project.github ? 'inline' : 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fab fa-github"
      }), "\xA0\xA0 GitHub")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "ui inverted secondary button",
        href: project['acm-dl'],
        target: "_blank",
        style: {
          marginRight: '5px',
          display: project['acm-dl'] ? 'inline' : 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-link"
      }), "\xA0\xA0 ACM DL")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "ui inverted secondary button",
        href: project['ieee'],
        target: "_blank",
        style: {
          marginRight: '5px',
          display: project['ieee'] ? 'inline' : 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-link"
      }), "\xA0\xA0 IEEE")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "ui inverted secondary button",
        href: project['talk'],
        target: "_blank",
        style: {
          marginRight: '5px',
          display: project['talk'] ? 'inline' : 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-chalkboard-teacher"
      }), "\xA0\xA0 Talk"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "video-container",
        style: {
          display: project.embed ? 'block' : 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("iframe", {
        className: "embed",
        width: "100%",
        height: "315",
        src: "".concat(project.embed, "?"),
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true,
        mozAllowFullScreen: true,
        msAllowFullScreen: true,
        oAllowFullScreen: true,
        webkitAllowFullScreen: true
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
        source: project.bodyContent,
        escapeHtml: false,
        linkTarget: "_blank"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "ui vertical segment"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", null, "Publication"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "ui placeholder segment"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, project.authors.join(', ').replace(/, ([^,]*)$/, ', and $1'), ". ", project.year, ". ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, project.title), ". ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", null, project.booktitle), ". ", project.publisher, ", ", project.pages, ".", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), "DOI: ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: project.doi,
        target: "_blank"
      }, project.doi))), project.related && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "ui placeholder segment"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, project.related.authors.join(', ').replace(/, ([^,]*)$/, ', and $1'), ". ", project.related.year, ". ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, project.related.title), ". ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", null, project.related.booktitle), ". ", project.related.publisher, ", ", project.related.pages, ".", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), "DOI: ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: project.related.doi,
        target: "_blank"
      }, project.related.doi))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), project.pageCount > 0 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "ui inverted secondary button",
        href: "/publications/".concat(project.pdf),
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "far fa-file-pdf"
      }), "\xA0\xA0 Download PDF")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "figures ui six column grid"
      }, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Array(project.pageCount)).map(function (v, i) {
        var id = i + 1 < 10 ? "0".concat(i + 1) : "".concat(i + 1);
        var src = "/static/projects/".concat(project.id, "/paper-original/paper-").concat(id, ".jpg");
        var min = "/static/projects/".concat(project.id, "/paper/paper-").concat(id, ".jpg");
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          className: "paper column",
          key: i,
          href: src,
          "data-lightbox": "lightbox"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: min
        }));
      })), project.related && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "ui inverted secondary button",
        href: "/publications/".concat(project.related.pdf),
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "far fa-file-pdf"
      }), "\xA0\xA0 Download PDF")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "figures ui six column grid"
      }, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Array(project.related.pageCount)).map(function (v, i) {
        var id = i + 1 < 10 ? "0".concat(i + 1) : "".concat(i + 1);
        var src = "/static/projects/".concat(project.id, "/paper-original/paper-").concat(project.related.suffix, "-").concat(id, ".jpg");
        var min = "/static/projects/".concat(project.id, "/paper/paper-").concat(project.related.suffix, "-").concat(id, ".jpg");
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          className: "paper column",
          key: i,
          href: src,
          "data-lightbox": "lightbox"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: min
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", null, "Slide"), project.slideCount > 0 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "ui inverted secondary button",
        href: "/publications/".concat(project.slide),
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "far fa-file-pdf"
      }), "\xA0\xA0 Download Slide PDF")), project.slideCount === 0 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "coming soon"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "figures ui six column grid"
      }, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(Array(project.slideCount)).map(function (v, i) {
        var id;

        if (project.slideCount < 100) {
          id = i + 1 < 10 ? "0".concat(i + 1) : "".concat(i + 1);
        }

        if (project.slideCount >= 100) {
          id = i + 1 < 10 ? "0".concat(i + 1) : "".concat(i + 1);
        }

        var src = "/static/projects/".concat(project.id, "/slide-original/slide-").concat(id, ".jpg");
        var min = "/static/projects/".concat(project.id, "/slide/slide-").concat(id, ".jpg");
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          className: "slide column",
          key: i,
          href: src,
          "data-lightbox": "lightbox"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: min
        }));
      })), _content_output_press_json__WEBPACK_IMPORTED_MODULE_11__.filter(function (item) {
        return item.tag == project.id;
      }).length > 0 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", null, "Selected Press Coverage"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "ui bulleted list"
      }, _content_output_press_json__WEBPACK_IMPORTED_MODULE_11__.filter(function (item) {
        return item.tag === project.id;
      }).map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "item",
          key: i
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          href: item.url,
          target: "_blank"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", null, item.media), " ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", null, item.title)));
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "one wide column"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_13__["default"], null));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req) {
        var id;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = req.query.id;
                return _context.abrupt("return", {
                  id: id
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Project;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ })

})
//# sourceMappingURL=project.js.b42dc5de29902aa317f2.hot-update.js.map