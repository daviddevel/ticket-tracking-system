(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_user_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Tickets",
  data: function data() {
    return {
      createModal: false,
      list: null,
      total: 0,
      disabled: false,
      ticketId: null,
      ticket: {
        resolved: false,
        desc: null,
        type: null,
        priority: null
      },
      fields: [{
        key: "id",
        label: "ID"
      }, {
        key: "first_name",
        label: "First Name"
      }, {
        key: "last_name",
        label: "Last Name"
      }, {
        key: "email",
        label: "Email"
      }, {
        key: "role",
        label: "Role"
      }, {
        key: "action",
        label: "Actions"
      }],
      roleOptions: [{
        value: 1,
        text: "Admin"
      }, {
        value: 2,
        text: "QA"
      }, {
        value: 3,
        text: "RD"
      }]
    };
  },
  created: function created() {
    this.getList();
  },
  methods: {
    getList: function getList() {
      var _this = this;

      return axios__WEBPACK_IMPORTED_MODULE_1___default().get("users").then(function (res) {
        _this.list = res.data;
      });
    },
    clickEdit: function clickEdit(ticket) {
      this.ticket.resolved = ticket.resolved === 0 ? false : true;
      this.ticketId = ticket.id;
      this.ticket.type = ticket.type;
      this.ticket.priority = ticket.priority;
      this.ticket.desc = ticket.desc;
    },
    clickCreate: function clickCreate() {
      this.$refs["edit-modal"].show();
      this.createModal = true;
    },
    clickCancelEdit: function clickCancelEdit() {
      this.$refs["edit-modal"].hide();
    },
    cancelDelete: function cancelDelete() {
      this.$refs["edit-modal-2"].hide();
    },
    handleCreate: function handleCreate() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post("ticket/store", {
                  ticket: _this2.ticket
                });

              case 2:
                res = _context.sent;

                if (res.status = 200) {
                  _this2.createModal = false;

                  _this2.$refs["edit-modal"].hide();

                  _this2.$router.go();
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    handleEdit: function handleEdit() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().put("ticket/".concat(_this3.ticketId), {
                  ticket: _this3.ticket
                });

              case 2:
                res = _context2.sent;

                if (res.status = 200) {
                  _this3.$refs["edit-modal"].hide();

                  _this3.$router.go();
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    clickDelete: function clickDelete(ticket) {
      this.ticketId = ticket.id;
    },
    handleDelete: function handleDelete() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().delete("ticket/".concat(_this4.ticketId), {
                  ticket: _this4.ticket
                });

              case 2:
                res = _context3.sent;

                if (res.status = 200) {
                  _this4.$refs["edit-modal-2"].hide();

                  _this4.$router.go();
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/views/user/index.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/user/index.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_7d77de66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7d77de66& */ "./resources/js/views/user/index.vue?vue&type=template&id=7d77de66&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/user/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_7d77de66___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_7d77de66___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/user/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/user/index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/user/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/user/index.vue?vue&type=template&id=7d77de66&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/user/index.vue?vue&type=template&id=7d77de66& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7d77de66___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7d77de66___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7d77de66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=7d77de66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/index.vue?vue&type=template&id=7d77de66&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/index.vue?vue&type=template&id=7d77de66&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/user/index.vue?vue&type=template&id=7d77de66& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "card shadow mb-4" }, [
        _c(
          "div",
          { staticClass: "card-header py-3" },
          [
            _c(
              "b-row",
              [
                _c("b-col", [
                  _c(
                    "h6",
                    {
                      staticClass:
                        "m-2 float-left font-weight-bold text-primary",
                      staticStyle: { "font-size": "30px" }
                    },
                    [_vm._v("\n            User List\n          ")]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "b-col",
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "float-right",
                        attrs: { variant: "primary", size: "m" },
                        on: {
                          click: function($event) {
                            return _vm.clickCreate()
                          }
                        }
                      },
                      [_vm._v("\n            Create New\n          ")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c(
            "div",
            { staticClass: "table-responsive" },
            [
              _c("b-table", {
                attrs: {
                  items: _vm.list,
                  fields: _vm.fields,
                  responsive: "sm"
                },
                scopedSlots: _vm._u([
                  {
                    key: "cell(role)",
                    fn: function(row) {
                      return [
                        row.value === 1
                          ? _c("b-td", [_vm._v(_vm._s("Admin"))])
                          : row.value === 2
                          ? _c("b-td", [_vm._v(_vm._s("QA"))])
                          : _c("b-td", [_vm._v(_vm._s("RD"))])
                      ]
                    }
                  },
                  {
                    key: "cell(action)",
                    fn: function(row) {
                      return [
                        _c("b-td", [
                          _c(
                            "a",
                            {
                              directives: [
                                {
                                  name: "b-modal",
                                  rawName: "v-b-modal.modal-1",
                                  modifiers: { "modal-1": true }
                                }
                              ],
                              staticClass: "btn btn-success btn-circle",
                              on: {
                                click: function($event) {
                                  return _vm.clickEdit(row.item)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fas fa-edit" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              directives: [
                                {
                                  name: "b-modal",
                                  rawName: "v-b-modal.modal-2",
                                  modifiers: { "modal-2": true }
                                }
                              ],
                              staticClass: "btn btn-danger btn-circle",
                              on: {
                                click: function($event) {
                                  return _vm.clickDelete(row.item)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fas fa-trash" })]
                          )
                        ])
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-container",
        [
          _c(
            "b-modal",
            {
              ref: "edit-modal",
              attrs: { id: "modal-1", title: "Edit Ticket" },
              scopedSlots: _vm._u([
                {
                  key: "modal-footer",
                  fn: function() {
                    return [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "float-right",
                                  attrs: { variant: "primary", size: "sm" },
                                  on: {
                                    click: function($event) {
                                      return _vm.clickCancelEdit()
                                    }
                                  }
                                },
                                [_vm._v("\n              Cancel\n            ")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.createModal === false
                            ? _c(
                                "b-col",
                                [
                                  _c(
                                    "b-button",
                                    {
                                      staticClass: "float-right",
                                      attrs: { variant: "success", size: "sm" },
                                      on: {
                                        click: function($event) {
                                          return _vm.handleEdit()
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n              Edit\n            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            : _c(
                                "b-col",
                                [
                                  _c(
                                    "b-button",
                                    {
                                      staticClass: "float-right",
                                      attrs: { variant: "success", size: "sm" },
                                      on: {
                                        click: function($event) {
                                          return _vm.handleCreate()
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n              Create\n            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Type:",
                    "label-for": "nested-street",
                    "label-cols-sm": "3",
                    "label-align-sm": "right"
                  }
                },
                [
                  _c("b-form-select", {
                    attrs: { options: _vm.typeOptions },
                    model: {
                      value: _vm.ticket.type,
                      callback: function($$v) {
                        _vm.$set(_vm.ticket, "type", $$v)
                      },
                      expression: "ticket.type"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Priority:",
                    "label-for": "nested-street",
                    "label-cols-sm": "3",
                    "label-align-sm": "right"
                  }
                },
                [
                  _c("b-form-select", {
                    attrs: { options: _vm.priorityOptions },
                    model: {
                      value: _vm.ticket.priority,
                      callback: function($$v) {
                        _vm.$set(_vm.ticket, "priority", $$v)
                      },
                      expression: "ticket.priority"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Description:",
                    "label-for": "nested-state",
                    "label-cols-sm": "3",
                    "label-align-sm": "right"
                  }
                },
                [
                  _c("b-form-textarea", {
                    attrs: {
                      id: "textarea",
                      placeholder: "Description here...",
                      rows: "3",
                      "max-rows": "6"
                    },
                    model: {
                      value: _vm.ticket.desc,
                      callback: function($$v) {
                        _vm.$set(_vm.ticket, "desc", $$v)
                      },
                      expression: "ticket.desc"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Status:",
                    "label-for": "nested-state",
                    "label-cols-sm": "3",
                    "label-align-sm": "right"
                  }
                },
                [
                  _c("toggle-button", {
                    attrs: {
                      value: false,
                      color: "#3333ff",
                      sync: true,
                      labels: true
                    },
                    model: {
                      value: _vm.ticket.resolved,
                      callback: function($$v) {
                        _vm.$set(_vm.ticket, "resolved", $$v)
                      },
                      expression: "ticket.resolved"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-container",
        [
          _c(
            "b-modal",
            {
              ref: "edit-modal-2",
              attrs: { id: "modal-2", title: "Delete Ticket" },
              scopedSlots: _vm._u([
                {
                  key: "modal-footer",
                  fn: function() {
                    return [
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "float-right",
                                  attrs: { variant: "primary", size: "sm" },
                                  on: {
                                    click: function($event) {
                                      return _vm.cancelDelete()
                                    }
                                  }
                                },
                                [_vm._v("\n              Cancel\n            ")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "float-right",
                                  attrs: { variant: "danger", size: "sm" },
                                  on: {
                                    click: function($event) {
                                      return _vm.handleDelete()
                                    }
                                  }
                                },
                                [_vm._v("\n              Delete\n            ")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [
              _c("p", { staticClass: "my-4" }, [
                _vm._v(
                  "\n        You are about to delete ticket number " +
                    _vm._s(this.ticketId) +
                    ".\n      "
                )
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "my-4" }, [_vm._v("Are you sure ?")])
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);