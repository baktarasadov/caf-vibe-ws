/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/footer/dto/footer.dto.js":
/*!******************************************!*\
  !*** ./src/api/footer/dto/footer.dto.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterDto: () => (/* binding */ FooterDto)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);


var FooterDto = /*#__PURE__*/_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(function FooterDto(_ref) {
  var contact = _ref.contact,
    location = _ref.location,
    title = _ref.title,
    copyright = _ref.copyright,
    openingDay = _ref.openingDay,
    openingHour = _ref.openingHour,
    socialMedia = _ref.socialMedia;
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, FooterDto);
  Object.assign(this, {
    contact: contact,
    location: location,
    title: title,
    copyright: copyright,
    openingDay: openingDay,
    openingHour: openingHour,
    socialMedia: socialMedia
  });
});

/***/ }),

/***/ "./src/api/footer/footer.controller.js":
/*!*********************************************!*\
  !*** ./src/api/footer/footer.controller.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterController: () => (/* binding */ FooterController)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dto_footer_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dto/footer.dto */ "./src/api/footer/dto/footer.dto.js");






var FooterController = /*#__PURE__*/function () {
  function FooterController(foooterService) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, FooterController);
    this.foooterService = foooterService;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(FooterController, [{
    key: "find",
    value: function () {
      var _find = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(req, res) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.foooterService.find();
            case 2:
              data = _context.sent;
              res.success({
                message: "Find Footer successfully!",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.OK,
                data: data ? new _dto_footer_dto__WEBPACK_IMPORTED_MODULE_5__.FooterDto(data) : null
              });
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function find(_x, _x2) {
        return _find.apply(this, arguments);
      }
      return find;
    }()
  }]);
}();

/***/ }),

/***/ "./src/api/footer/footer.di.js":
/*!*************************************!*\
  !*** ./src/api/footer/footer.di.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   footerDIKeys: () => (/* binding */ footerDIKeys)
/* harmony export */ });
/* harmony import */ var _core_di_di_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/di/di-container */ "./src/core/di/di-container.js");
/* harmony import */ var _footer_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.controller */ "./src/api/footer/footer.controller.js");
/* harmony import */ var _footer_repositoy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.repositoy */ "./src/api/footer/footer.repositoy.js");
/* harmony import */ var _footer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.service */ "./src/api/footer/footer.service.js");




var footerDIKeys = {
  service: "footer-service",
  repository: "footer-repository",
  controller: "footer-controller"
};
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(footerDIKeys.repository, [], function () {
  return new _footer_repositoy__WEBPACK_IMPORTED_MODULE_2__.FooterRepository();
});
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(footerDIKeys.service, [footerDIKeys.repository], function (footerRepository) {
  return new _footer_service__WEBPACK_IMPORTED_MODULE_3__.FooterService(footerRepository);
});
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(footerDIKeys.controller, [footerDIKeys.service], function (footerService) {
  return new _footer_controller__WEBPACK_IMPORTED_MODULE_1__.FooterController(footerService);
});

/***/ }),

/***/ "./src/api/footer/footer.repositoy.js":
/*!********************************************!*\
  !*** ./src/api/footer/footer.repositoy.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterRepository: () => (/* binding */ FooterRepository)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_repository_base_repository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/shared/repository/base.repository */ "./src/shared/repository/base.repository.js");
/* harmony import */ var _model_footer_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/footer.model */ "./src/api/footer/model/footer.model.js");





function _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }


var FooterRepository = /*#__PURE__*/function (_BaseRepository) {
  function FooterRepository() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, FooterRepository);
    return _callSuper(this, FooterRepository, [_model_footer_model__WEBPACK_IMPORTED_MODULE_6__["default"]]);
  }
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(FooterRepository, _BaseRepository);
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(FooterRepository);
}(_shared_repository_base_repository__WEBPACK_IMPORTED_MODULE_5__.BaseRepository);

/***/ }),

/***/ "./src/api/footer/footer.route.js":
/*!****************************************!*\
  !*** ./src/api/footer/footer.route.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_di_di_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/di/di-container */ "./src/core/di/di-container.js");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _footer_di__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.di */ "./src/api/footer/footer.di.js");



var prefix = "/footers";
var footerRouter = express__WEBPACK_IMPORTED_MODULE_1___default().Router();
var footerController = _core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.get(_footer_di__WEBPACK_IMPORTED_MODULE_2__.footerDIKeys.controller);
footerRouter.get("".concat(prefix), function (req, res) {
  return footerController.find(req, res);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerRouter);

/***/ }),

/***/ "./src/api/footer/footer.service.js":
/*!******************************************!*\
  !*** ./src/api/footer/footer.service.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterService: () => (/* binding */ FooterService)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_response_base_response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/response/base-response */ "./src/core/response/base-response.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_5__);






var FooterService = /*#__PURE__*/function () {
  function FooterService(footerRepository) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, FooterService);
    this.footerRepository = footerRepository;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(FooterService, [{
    key: "create",
    value: function create(footerDto, files) {}
  }, {
    key: "find",
    value: function () {
      var _find = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.footerRepository.findAll()[0]);
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function find() {
        return _find.apply(this, arguments);
      }
      return find;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(footerDto, files) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.footerRepository.find()[0];
            case 2:
              data = _context2.sent;
              if (data) {
                _context2.next = 5;
                break;
              }
              throw _core_response_base_response__WEBPACK_IMPORTED_MODULE_4__.BaseResponse.error({
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_5__.StatusCodes.NOT_FOUND,
                message: "Footer not found !"
              });
            case 5:
              return _context2.abrupt("return", data);
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function update(_x, _x2) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }]);
}();

/***/ }),

/***/ "./src/api/footer/model/footer.model.js":
/*!**********************************************!*\
  !*** ./src/api/footer/model/footer.model.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_schema_model_asset_model_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/common/schema/model/asset-model.schema */ "./src/common/schema/model/asset-model.schema.js");
/* harmony import */ var _common_schema_model_contact_model_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/common/schema/model/contact-model.schema */ "./src/common/schema/model/contact-model.schema.js");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);



var footerSchema = new mongoose__WEBPACK_IMPORTED_MODULE_2__.Schema({
  contact: _common_schema_model_contact_model_schema__WEBPACK_IMPORTED_MODULE_1__.contactSchema,
  location: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  copyright: {
    type: String,
    required: true
  },
  openingDay: {
    type: String,
    required: true
  },
  openingHour: {
    type: String,
    required: true
  },
  socialMedia: _common_schema_model_asset_model_schema__WEBPACK_IMPORTED_MODULE_0__.assetModelSchema
}, {
  collection: "footer",
  timestamps: true
});
var Footer = mongoose__WEBPACK_IMPORTED_MODULE_2___default().model("Footer", footerSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/api/role/model/role.model.js":
/*!******************************************!*\
  !*** ./src/api/role/model/role.model.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_mongoose_plugins_auto_increment_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/common/mongoose/plugins/auto-increment.plugin */ "./src/common/mongoose/plugins/auto-increment.plugin.js");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);


var roleSchema = new mongoose__WEBPACK_IMPORTED_MODULE_1__.Schema({
  role: {
    type: String,
    unique: true,
    required: true,
    trim: true
  }
}, {
  collection: "roles",
  versionKey: false
}).plugin(_common_mongoose_plugins_auto_increment_plugin__WEBPACK_IMPORTED_MODULE_0__["default"], {
  incField: "_id"
});
var Role = mongoose__WEBPACK_IMPORTED_MODULE_1___default().model("Role", roleSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Role);

/***/ }),

/***/ "./src/api/role/role.di.js":
/*!*********************************!*\
  !*** ./src/api/role/role.di.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   roleDIKeys: () => (/* binding */ roleDIKeys)
/* harmony export */ });
/* harmony import */ var _core_di_di_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/di/di-container */ "./src/core/di/di-container.js");
/* harmony import */ var _role_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role.repository */ "./src/api/role/role.repository.js");


var roleDIKeys = {
  repository: "role-repository"
};
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(roleDIKeys.repository, [], function () {
  return new _role_repository__WEBPACK_IMPORTED_MODULE_1__.RoleRepository();
});

/***/ }),

/***/ "./src/api/role/role.repository.js":
/*!*****************************************!*\
  !*** ./src/api/role/role.repository.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleRepository: () => (/* binding */ RoleRepository)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_repository_base_repository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/shared/repository/base.repository */ "./src/shared/repository/base.repository.js");
/* harmony import */ var _model_role_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/role.model */ "./src/api/role/model/role.model.js");





function _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }


var RoleRepository = /*#__PURE__*/function (_BaseRepository) {
  function RoleRepository() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, RoleRepository);
    return _callSuper(this, RoleRepository, [_model_role_model__WEBPACK_IMPORTED_MODULE_6__["default"]]);
  }
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(RoleRepository, _BaseRepository);
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(RoleRepository);
}(_shared_repository_base_repository__WEBPACK_IMPORTED_MODULE_5__.BaseRepository);

/***/ }),

/***/ "./src/api/user/model/password-reset.js":
/*!**********************************************!*\
  !*** ./src/api/user/model/password-reset.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   passwordResetSchema: () => (/* binding */ passwordResetSchema)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var passwordResetSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
  code: {
    type: String,
    "default": null
  },
  time: {
    type: Date,
    "default": null
  }
}, {
  _id: false
});

/***/ }),

/***/ "./src/api/user/model/refresh-token.js":
/*!*********************************************!*\
  !*** ./src/api/user/model/refresh-token.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   refreshTokenSchema: () => (/* binding */ refreshTokenSchema)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var refreshTokenSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
  token: {
    type: String
  },
  createdAt: {
    type: Date,
    "default": Date.now,
    expires: "15d"
  }
}, {
  _id: false
});

/***/ }),

/***/ "./src/api/user/model/user.model.js":
/*!******************************************!*\
  !*** ./src/api/user/model/user.model.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_schema_model_contact_model_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/common/schema/model/contact-model.schema */ "./src/common/schema/model/contact-model.schema.js");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _password_reset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-reset */ "./src/api/user/model/password-reset.js");
/* harmony import */ var _refresh_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./refresh-token */ "./src/api/user/model/refresh-token.js");




var userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_1__.Schema({
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    index: true
  },
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  profileImg: {
    type: String
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  contact: _common_schema_model_contact_model_schema__WEBPACK_IMPORTED_MODULE_0__.contactSchema,
  refreshToken: _refresh_token__WEBPACK_IMPORTED_MODULE_3__.refreshTokenSchema,
  reset: _password_reset__WEBPACK_IMPORTED_MODULE_2__.passwordResetSchema,
  role: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_1__.Schema.Types.Number,
    ref: "Role",
    required: true
  }
}, {
  collection: "users",
  timestamps: true
});
var User = mongoose__WEBPACK_IMPORTED_MODULE_1___default().model("User", userSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);

/***/ }),

/***/ "./src/api/user/user.di.js":
/*!*********************************!*\
  !*** ./src/api/user/user.di.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   userDIKeys: () => (/* binding */ userDIKeys)
/* harmony export */ });
/* harmony import */ var _core_di_di_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/di/di-container */ "./src/core/di/di-container.js");
/* harmony import */ var _role_role_di__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../role/role.di */ "./src/api/role/role.di.js");
/* harmony import */ var _user_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.repository */ "./src/api/user/user.repository.js");
/* harmony import */ var _user_seeder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.seeder */ "./src/api/user/user.seeder.js");




var userDIKeys = {
  service: "user-service",
  repository: "user-repository",
  seeder: "user-seeder"
};
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(userDIKeys.repository, [], function () {
  return new _user_repository__WEBPACK_IMPORTED_MODULE_2__.UserRepository();
});
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(userDIKeys.seeder, [userDIKeys.repository, _role_role_di__WEBPACK_IMPORTED_MODULE_1__.roleDIKeys.repository], function (userRepository, roleRepository) {
  return new _user_seeder__WEBPACK_IMPORTED_MODULE_3__.UserSeeder(userRepository, roleRepository);
});

/***/ }),

/***/ "./src/api/user/user.repository.js":
/*!*****************************************!*\
  !*** ./src/api/user/user.repository.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserRepository: () => (/* binding */ UserRepository)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_repository_base_repository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/shared/repository/base.repository */ "./src/shared/repository/base.repository.js");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/user.model */ "./src/api/user/model/user.model.js");





function _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }


var UserRepository = /*#__PURE__*/function (_BaseRepository) {
  function UserRepository() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, UserRepository);
    return _callSuper(this, UserRepository, [_model_user_model__WEBPACK_IMPORTED_MODULE_6__["default"]]);
  }
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(UserRepository, _BaseRepository);
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(UserRepository);
}(_shared_repository_base_repository__WEBPACK_IMPORTED_MODULE_5__.BaseRepository);

/***/ }),

/***/ "./src/api/user/user.seeder.js":
/*!*************************************!*\
  !*** ./src/api/user/user.seeder.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserSeeder: () => (/* binding */ UserSeeder)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_constants_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/constants/role */ "./src/common/constants/role.js");
/* harmony import */ var _common_helpers_hash_password__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/helpers/hash-password */ "./src/common/helpers/hash-password.js");






var UserSeeder = /*#__PURE__*/function () {
  function UserSeeder(userRepository, roleRepository) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, UserSeeder);
    this.userRepository = userRepository;
    this.roleRepository = roleRepository;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(UserSeeder, [{
    key: "createRole",
    value: function () {
      var _createRole = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
        var existingRoles, existingRoleNames, rolesToCreate;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.roleRepository.findAll();
            case 2:
              existingRoles = _context.sent;
              existingRoleNames = existingRoles.map(function (role) {
                return role.role;
              });
              rolesToCreate = _common_constants_role__WEBPACK_IMPORTED_MODULE_4__.roles.filter(function (role) {
                return !existingRoleNames.includes(role.role);
              });
              if (!(rolesToCreate.length > 0)) {
                _context.next = 8;
                break;
              }
              _context.next = 8;
              return this.roleRepository.createMany(rolesToCreate);
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createRole() {
        return _createRole.apply(this, arguments);
      }
      return createRole;
    }()
  }, {
    key: "createAdmin",
    value: function () {
      var _createAdmin = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
        var data, password;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.createRole();
            case 2:
              _context2.next = 4;
              return this.userRepository.findOne({
                role: 1
              });
            case 4:
              data = _context2.sent;
              if (data) {
                _context2.next = 10;
                break;
              }
              _context2.next = 8;
              return (0,_common_helpers_hash_password__WEBPACK_IMPORTED_MODULE_5__["default"])("baktaradmin");
            case 8:
              password = _context2.sent;
              return _context2.abrupt("return", this.userRepository.create({
                email: "baktaradmin@gmail.com",
                fullName: "baktar admin",
                password: password,
                role: 1
              }));
            case 10:
              return _context2.abrupt("return", null);
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createAdmin() {
        return _createAdmin.apply(this, arguments);
      }
      return createAdmin;
    }()
  }]);
}();

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_config_swagger_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/config/swagger.config */ "./src/core/config/swagger.config.js");
/* harmony import */ var _core_di_di_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/di/di-globals */ "./src/core/di/di-globals.js");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express-rate-limit */ "express-rate-limit");
/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express_rate_limit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_footer_footer_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/footer/footer.route */ "./src/api/footer/footer.route.js");
/* harmony import */ var _common_constants_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/constants/api */ "./src/common/constants/api.js");
/* harmony import */ var _core_middleware_base_response_middleware__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/middleware/base-response.middleware */ "./src/core/middleware/base-response.middleware.js");
/* harmony import */ var _core_middleware_error_handler_middleware__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/middleware/error-handler-middleware */ "./src/core/middleware/error-handler-middleware.js");










var app = express__WEBPACK_IMPORTED_MODULE_4___default()();
app.use((0,express_rate_limit__WEBPACK_IMPORTED_MODULE_5__.rateLimit)({
  windowMs: 10 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-6",
  legacyHeaders: false,
  message: "Too many requests"
}));
app.set("trust proxy", 1);
app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());
app.use(express__WEBPACK_IMPORTED_MODULE_4___default().urlencoded({
  extended: true
}));
app.use(express__WEBPACK_IMPORTED_MODULE_4___default().json());
app.use(cors__WEBPACK_IMPORTED_MODULE_3___default()());
app.disable("x-powered-by");
app.use(_core_middleware_base_response_middleware__WEBPACK_IMPORTED_MODULE_8__["default"]);
app.use("/api-docs", _core_config_swagger_config__WEBPACK_IMPORTED_MODULE_0__.swaggerUi.serve, _core_config_swagger_config__WEBPACK_IMPORTED_MODULE_0__.swaggerUi.setup(_core_config_swagger_config__WEBPACK_IMPORTED_MODULE_0__.swaggerSpec));
app.use(_common_constants_api__WEBPACK_IMPORTED_MODULE_7__.apiPrefix, _api_footer_footer_route__WEBPACK_IMPORTED_MODULE_6__["default"]);
app.use(_core_middleware_error_handler_middleware__WEBPACK_IMPORTED_MODULE_9__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

/***/ }),

/***/ "./src/common/constants/api.js":
/*!*************************************!*\
  !*** ./src/common/constants/api.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apiPrefix: () => (/* binding */ apiPrefix)
/* harmony export */ });
var apiPrefix = "/api/v1";

/***/ }),

/***/ "./src/common/constants/role.js":
/*!**************************************!*\
  !*** ./src/common/constants/role.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   roles: () => (/* binding */ roles)
/* harmony export */ });
var roles = [{
  role: "admin"
}, {
  role: "user"
}];

/***/ }),

/***/ "./src/common/helpers/hash-password.js":
/*!*********************************************!*\
  !*** ./src/common/helpers/hash-password.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hashPassword)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);



function hashPassword(_x) {
  return _hashPassword.apply(this, arguments);
}
function _hashPassword() {
  _hashPassword = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(password) {
    var salt;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return bcrypt__WEBPACK_IMPORTED_MODULE_2__.genSalt(10);
        case 2:
          salt = _context.sent;
          return _context.abrupt("return", bcrypt__WEBPACK_IMPORTED_MODULE_2__.hash(password, salt));
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _hashPassword.apply(this, arguments);
}

/***/ }),

/***/ "./src/common/mongoose/plugins/auto-increment.plugin.js":
/*!**************************************************************!*\
  !*** ./src/common/mongoose/plugins/auto-increment.plugin.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ autoIncrementPlugin)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * @description Mongoose plugin to auto increment a field
 * @param {Mongoose.Schema} schema
 * @param {Object} options
 */
function autoIncrementPlugin(schema, options) {
  if (!options.incField) {
    throw new Error("Please specify incField!");
  }
  var fieldOptions = {
    type: Number
  };
  if (options.incField !== "_id") {
    fieldOptions = _objectSpread(_objectSpread({}, fieldOptions), {}, {
      unique: true
    });
  }
  schema.add(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, options.incField, fieldOptions));
  schema.pre("save", function (next) {
    var _this = this;
    if (this.isNew) {
      this.constructor.findOne({}, {}, {
        sort: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, options.incField, -1)
      }).then(function (lastRecord) {
        _this[options.incField] = lastRecord ? lastRecord[options.incField] + 1 : 1;
        next();
      });
    } else {
      next();
    }
  });
  schema.pre("insertMany", /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(next, docs) {
      var lastRecord, lastCount;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this.findOne({}, {}, {
              sort: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, options.incField, -1)
            });
          case 2:
            lastRecord = _context.sent;
            lastCount = lastRecord ? lastRecord[options.incField] : 0;
            docs.forEach(function (doc, index) {
              doc[options.incField] = lastCount + index + 1;
            });
            next();
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee, this);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
}

/***/ }),

/***/ "./src/common/schema/model/asset-model.schema.js":
/*!*******************************************************!*\
  !*** ./src/common/schema/model/asset-model.schema.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assetModelSchema: () => (/* binding */ assetModelSchema)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var assetModelSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  href: {
    type: String,
    require: true
  },
  title: {
    type: String
  },
  url: {
    type: String,
    required: true
  },
  publicId: {
    type: String,
    required: true
  },
  type: {
    type: String
  },
  size: {
    type: Number
  }
}, {
  _id: false
});

/***/ }),

/***/ "./src/common/schema/model/contact-model.schema.js":
/*!*********************************************************!*\
  !*** ./src/common/schema/model/contact-model.schema.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactSchema: () => (/* binding */ contactSchema)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var contactSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  email: {
    type: String,
    unique: true
  },
  phoneNumber: {
    type: String
  }
}, {
  _id: false
});

/***/ }),

/***/ "./src/core/config/db.config.js":
/*!**************************************!*\
  !*** ./src/core/config/db.config.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDbConnection: () => (/* binding */ createDbConnection)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_config_env_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/config/env.config */ "./src/core/config/env.config.js");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);




function createDbConnection() {
  return _createDbConnection.apply(this, arguments);
}
function _createDbConnection() {
  _createDbConnection = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return mongoose__WEBPACK_IMPORTED_MODULE_3___default().connect(process.env.CONNECTION_STRING);
        case 3:
          console.log("MongoDB Connected");
          _context.next = 10;
          break;
        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error("MongoDB Connection Error:", _context.t0);
          throw _context.t0;
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 6]]);
  }));
  return _createDbConnection.apply(this, arguments);
}

/***/ }),

/***/ "./src/core/config/env.config.js":
/*!***************************************!*\
  !*** ./src/core/config/env.config.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);

(0,dotenv__WEBPACK_IMPORTED_MODULE_0__.config)();
(0,dotenv__WEBPACK_IMPORTED_MODULE_0__.config)({
  path:  true ? ".env.local" : 0,
  override: true
});

/***/ }),

/***/ "./src/core/config/swagger.config.js":
/*!*******************************************!*\
  !*** ./src/core/config/swagger.config.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   swaggerSpec: () => (/* binding */ swaggerSpec),
/* harmony export */   swaggerUi: () => (/* reexport default from dynamic */ swagger_ui_express__WEBPACK_IMPORTED_MODULE_1___default.a)
/* harmony export */ });
/* harmony import */ var swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swagger-jsdoc */ "swagger-jsdoc");
/* harmony import */ var swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swagger-ui-express */ "swagger-ui-express");
/* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swagger_ui_express__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable import/no-extraneous-dependencies */


var options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CAF-Vibe Coffee Shop API",
      version: "1.0.0",
      description: "CAF-Vibe Coffee Shop API documentation"
    },
    servers: [{
      url: "http://localhost:5000"
    }]
  },
  apis: ["./src/api/*.js"]
};
var swaggerSpec = swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0___default()(options);


/***/ }),

/***/ "./src/core/db/seed.js":
/*!*****************************!*\
  !*** ./src/core/db/seed.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   seed: () => (/* binding */ seed)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_role_role_di__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/role/role.di */ "./src/api/role/role.di.js");
/* harmony import */ var _api_user_user_di__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/user/user.di */ "./src/api/user/user.di.js");
/* harmony import */ var _api_user_user_seeder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/user/user.seeder */ "./src/api/user/user.seeder.js");
/* harmony import */ var _di_di_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../di/di-container */ "./src/core/di/di-container.js");






var seed = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var userSeeder;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          userSeeder = new _api_user_user_seeder__WEBPACK_IMPORTED_MODULE_4__.UserSeeder(_di_di_container__WEBPACK_IMPORTED_MODULE_5__.container.get(_api_user_user_di__WEBPACK_IMPORTED_MODULE_3__.userDIKeys.repository), _di_di_container__WEBPACK_IMPORTED_MODULE_5__.container.get(_api_role_role_di__WEBPACK_IMPORTED_MODULE_2__.roleDIKeys.repository));
          _context.next = 3;
          return Promise.all([userSeeder.createAdmin()]);
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function seed() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/core/di/di-container.js":
/*!*************************************!*\
  !*** ./src/core/di/di-container.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   container: () => (/* binding */ container)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Dependency Injection Container
 * @class DiContainer
 * @description A simple dependency injection container that allows you to register
 * and get dependencies
 * @example
 * const container = new DiContainer();
 * container.register("LandingPageRepository", [], () => new LandingPageRepository());
 * container.register(
 *  "LandingPageService",
 *  ["LandingPageRepository"],
 *  (landingPageRepository) => new LandingPageService(landingPageRepository),
 * );
 *
 * const landingPageService = container.get("LandingPageService");
 */
var DiContainer = /*#__PURE__*/function () {
  function DiContainer() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DiContainer);
    this.dependencies = {};
  }

  /**
   * Register a dependency
   * @param name - Name of the dependency (ex: "LandingPageRepository")
   * @param dependencies - Array of dependencies (ex: ["LandingPageRepository"])
   * @param func - Function that returns the dependency
   */
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(DiContainer, [{
    key: "register",
    value: function register(name, dependencies, func) {
      if (typeof name !== "string" || !Array.isArray(dependencies) || typeof func !== "function") {
        throw new Error("Invalid argument");
      }
      this.dependencies[name] = {
        dependencies: dependencies,
        func: func
      };
    }

    /**
     * Get a dependency
     * @param name - Name of the dependency (ex: "LandingPageRepository")
     * @return {*}
     */
  }, {
    key: "get",
    value: function get(name) {
      var _this = this;
      if (!this.dependencies[name]) {
        throw new Error("Dependency not found: ".concat(name));
      }
      var _this$dependencies$na = this.dependencies[name],
        dependencies = _this$dependencies$na.dependencies,
        func = _this$dependencies$na.func;
      var dependenciesInstances = dependencies.map(function (dependency) {
        return _this.get(dependency);
      });
      return func.apply(void 0, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(dependenciesInstances));
    }
  }]);
}();
var container = new DiContainer();

/***/ }),

/***/ "./src/core/di/di-globals.js":
/*!***********************************!*\
  !*** ./src/core/di/di-globals.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_user_user_di__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/user/user.di */ "./src/api/user/user.di.js");
/* harmony import */ var _api_footer_footer_di__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/footer/footer.di */ "./src/api/footer/footer.di.js");



/***/ }),

/***/ "./src/core/middleware/base-response.middleware.js":
/*!*********************************************************!*\
  !*** ./src/core/middleware/base-response.middleware.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ baseResponseMiddleware)
/* harmony export */ });
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _response_base_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../response/base-response */ "./src/core/response/base-response.js");


function baseResponseMiddleware(req, res, next) {
  res.success = function (props) {
    res.status(props.status || http_status_codes__WEBPACK_IMPORTED_MODULE_0__.StatusCodes.OK).json(_response_base_response__WEBPACK_IMPORTED_MODULE_1__.BaseResponse.success(props));
  };
  res.error = function (props) {
    res.status(props.status || http_status_codes__WEBPACK_IMPORTED_MODULE_0__.StatusCodes.BAD_REQUEST).json(_response_base_response__WEBPACK_IMPORTED_MODULE_1__.BaseResponse.error(props));
  };
  next();
}

/***/ }),

/***/ "./src/core/middleware/error-handler-middleware.js":
/*!*********************************************************!*\
  !*** ./src/core/middleware/error-handler-middleware.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_response_base_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/response/base-response */ "./src/core/response/base-response.js");
/* harmony import */ var _shared_error_response_error_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/error-response/error-response */ "./src/shared/error-response/error-response.js");


var errorHandlerMiddleware = function errorHandlerMiddleware(error, request, response, next) {
  if (error instanceof _shared_error_response_error_response__WEBPACK_IMPORTED_MODULE_1__.APIError) {
    return response.status(error.statusCode || 400).json({
      success: false,
      message: error.message
    });
  }
  next();
  if (error instanceof _core_response_base_response__WEBPACK_IMPORTED_MODULE_0__.BaseResponse) {
    return response.error(error);
  }
  return response.status(500).json({
    success: false,
    message: error.message || "Internal Server Error!"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (errorHandlerMiddleware);

/***/ }),

/***/ "./src/core/response/base-response.js":
/*!********************************************!*\
  !*** ./src/core/response/base-response.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseResponse: () => (/* binding */ BaseResponse)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_2__);



var BaseResponse = /*#__PURE__*/function () {
  function BaseResponse(data) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BaseResponse);
    this.success = data.success;
    this.status = data.status;
    this.message = data.message;
    this.data = data.data;
    this.details = data.details;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BaseResponse, null, [{
    key: "success",
    value: function success(_ref) {
      var _ref$status = _ref.status,
        status = _ref$status === void 0 ? http_status_codes__WEBPACK_IMPORTED_MODULE_2__.StatusCodes.OK : _ref$status,
        message = _ref.message,
        data = _ref.data;
      return new BaseResponse({
        success: true,
        status: status,
        message: message || (0,http_status_codes__WEBPACK_IMPORTED_MODULE_2__.getReasonPhrase)(status),
        data: data
      });
    }
  }, {
    key: "error",
    value: function error(_ref2) {
      var message = _ref2.message,
        _ref2$status = _ref2.status,
        status = _ref2$status === void 0 ? http_status_codes__WEBPACK_IMPORTED_MODULE_2__.StatusCodes.BAD_REQUEST : _ref2$status,
        _ref2$details = _ref2.details,
        details = _ref2$details === void 0 ? null : _ref2$details;
      return new BaseResponse({
        success: false,
        status: status,
        message: message || (0,http_status_codes__WEBPACK_IMPORTED_MODULE_2__.getReasonPhrase)(status),
        details: details
      });
    }
  }]);
}();

/***/ }),

/***/ "./src/shared/error-response/error-response.js":
/*!*****************************************************!*\
  !*** ./src/shared/error-response/error-response.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIError: () => (/* binding */ APIError)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "@babel/runtime/helpers/wrapNativeSuper");
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__);






function _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var APIError = /*#__PURE__*/function (_Error) {
  function APIError(message, statusCode) {
    var _this;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, APIError);
    _this = _callSuper(this, APIError, [message]);
    _this.statusCode = statusCode;
    return _this;
  }
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(APIError, _Error);
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(APIError);
}( /*#__PURE__*/_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5___default()(Error));

/***/ }),

/***/ "./src/shared/repository/base.repository.js":
/*!**************************************************!*\
  !*** ./src/shared/repository/base.repository.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseRepository: () => (/* binding */ BaseRepository)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);




var BaseRepository = /*#__PURE__*/function () {
  function BaseRepository(model) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BaseRepository);
    this.model = model;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(BaseRepository, [{
    key: "create",
    value: function create(data) {
      return this.model.create(data);
    }
  }, {
    key: "update",
    value: function update(id, data) {
      return this.model.findByIdAndUpdate(id, data, {
        "new": true
      });
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      return this.model.findByIdAndDelete(id);
    }
  }, {
    key: "findById",
    value: function findById(id) {
      return this.model.findById(id);
    }
  }, {
    key: "findAll",
    value: function findAll() {
      return this.model.find();
    }
  }, {
    key: "findOne",
    value: function findOne(query) {
      return this.model.findOne(query);
    }
  }, {
    key: "find",
    value: function find(query) {
      return this.model.find(query);
    }
  }, {
    key: "count",
    value: function count(query) {
      return this.model.countDocuments(query);
    }
  }, {
    key: "aggregate",
    value: function aggregate(pipeline) {
      return this.model.aggregate(pipeline);
    }
  }, {
    key: "createMany",
    value: function createMany(data) {
      return this.model.insertMany(data);
    }
  }, {
    key: "updateMany",
    value: function updateMany(query, data) {
      return this.model.updateMany(query, data);
    }
  }, {
    key: "bulkWrite",
    value: function bulkWrite(operations) {
      return this.model.bulkWrite(operations);
    }
  }, {
    key: "upsert",
    value: function () {
      var _upsert = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(query, data) {
        var findData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.findOne(query);
            case 2:
              findData = _context.sent;
              if (findData) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", this.create(data));
            case 5:
              return _context.abrupt("return", this.update(findData._id, data));
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function upsert(_x, _x2) {
        return _upsert.apply(this, arguments);
      }
      return upsert;
    }()
  }]);
}();

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),

/***/ "@babel/runtime/helpers/wrapNativeSuper":
/*!*********************************************************!*\
  !*** external "@babel/runtime/helpers/wrapNativeSuper" ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/wrapNativeSuper");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-rate-limit":
/*!*************************************!*\
  !*** external "express-rate-limit" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("express-rate-limit");

/***/ }),

/***/ "http-status-codes":
/*!************************************!*\
  !*** external "http-status-codes" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("http-status-codes");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "swagger-jsdoc":
/*!********************************!*\
  !*** external "swagger-jsdoc" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("swagger-jsdoc");

/***/ }),

/***/ "swagger-ui-express":
/*!*************************************!*\
  !*** external "swagger-ui-express" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("swagger-ui-express");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_config_env_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/config/env.config */ "./src/core/config/env.config.js");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _core_config_db_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/config/db.config */ "./src/core/config/db.config.js");
/* harmony import */ var _core_db_seed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/db/seed */ "./src/core/db/seed.js");







var server = (0,http__WEBPACK_IMPORTED_MODULE_3__.createServer)(_app__WEBPACK_IMPORTED_MODULE_4__["default"]);
var PORT = process.env.PORT;
_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _context2.next = 2;
        return (0,_core_config_db_config__WEBPACK_IMPORTED_MODULE_5__.createDbConnection)();
      case 2:
        _context2.next = 4;
        return (0,_core_db_seed__WEBPACK_IMPORTED_MODULE_6__.seed)();
      case 4:
        server.listen(PORT, /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                console.log("Server is running: http://localhost:".concat(PORT));
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        })));
      case 5:
      case "end":
        return _context2.stop();
    }
  }, _callee2);
}))();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxNQUFBLENBQXdDcU0sSUFBSSxDQUFFLENBQUM7Y0FBQztjQUFBO2dCQUFBLE9BQUF4TyxRQUFBLENBQUFTLElBQUE7WUFBQTtVQUFBLEdBQUFmLE9BQUE7UUFBQSxDQUM1RCxHQUFDO01BQUM7TUFBQTtRQUFBLE9BQUFtRCxTQUFBLENBQUFwQyxJQUFBO0lBQUE7RUFBQSxHQUFBa0MsUUFBQTtBQUFBLENBQ0osR0FBRSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvZm9vdGVyL2R0by9mb290ZXIuZHRvLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9mb290ZXIvZm9vdGVyLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL2Zvb3Rlci9mb290ZXIuZGkuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL2Zvb3Rlci9mb290ZXIucmVwb3NpdG95LmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9mb290ZXIvZm9vdGVyLnJvdXRlLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9mb290ZXIvZm9vdGVyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL2Zvb3Rlci9tb2RlbC9mb290ZXIubW9kZWwuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL3JvbGUvbW9kZWwvcm9sZS5tb2RlbC5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvcm9sZS9yb2xlLmRpLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9yb2xlL3JvbGUucmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvdXNlci9tb2RlbC9wYXNzd29yZC1yZXNldC5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvdXNlci9tb2RlbC9yZWZyZXNoLXRva2VuLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS91c2VyL21vZGVsL3VzZXIubW9kZWwuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL3VzZXIvdXNlci5kaS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvdXNlci91c2VyLnJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL3VzZXIvdXNlci5zZWVkZXIuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvbW1vbi9jb25zdGFudHMvYXBpLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvbW1vbi9jb25zdGFudHMvcm9sZS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb21tb24vaGVscGVycy9oYXNoLXBhc3N3b3JkLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvbW1vbi9tb25nb29zZS9wbHVnaW5zL2F1dG8taW5jcmVtZW50LnBsdWdpbi5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb21tb24vc2NoZW1hL21vZGVsL2Fzc2V0LW1vZGVsLnNjaGVtYS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb21tb24vc2NoZW1hL21vZGVsL2NvbnRhY3QtbW9kZWwuc2NoZW1hLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvcmUvY29uZmlnL2RiLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL2NvbmZpZy9lbnYuY29uZmlnLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvcmUvY29uZmlnL3N3YWdnZXIuY29uZmlnLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvcmUvZGIvc2VlZC5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL2RpL2RpLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL2RpL2RpLWdsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29yZS9taWRkbGV3YXJlL2Jhc2UtcmVzcG9uc2UubWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL21pZGRsZXdhcmUvZXJyb3ItaGFuZGxlci1taWRkbGV3YXJlLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvcmUvcmVzcG9uc2UvYmFzZS1yZXNwb25zZS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9zaGFyZWQvZXJyb3ItcmVzcG9uc2UvZXJyb3ItcmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvc2hhcmVkL3JlcG9zaXRvcnkvYmFzZS5yZXBvc2l0b3J5LmpzIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvd3JhcE5hdGl2ZVN1cGVyXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiYmNyeXB0XCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJjb29raWUtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3MtcmF0ZS1saW1pdFwiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiaHR0cC1zdGF0dXMtY29kZXNcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJzd2FnZ2VyLWpzZG9jXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJzd2FnZ2VyLXVpLWV4cHJlc3NcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiaHR0cFwiIiwid2VicGFjazovL2NmLXdzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NmLXdzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NmLXdzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jZi13cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NmLXdzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvc2VydmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBGb290ZXJEdG8ge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgY29udGFjdCxcbiAgICBsb2NhdGlvbixcbiAgICB0aXRsZSxcbiAgICBjb3B5cmlnaHQsXG4gICAgb3BlbmluZ0RheSxcbiAgICBvcGVuaW5nSG91cixcbiAgICBzb2NpYWxNZWRpYSxcbiAgfSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgY29udGFjdCxcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdGl0bGUsXG4gICAgICBjb3B5cmlnaHQsXG4gICAgICBvcGVuaW5nRGF5LFxuICAgICAgb3BlbmluZ0hvdXIsXG4gICAgICBzb2NpYWxNZWRpYSxcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcblxuaW1wb3J0IHsgRm9vdGVyRHRvIH0gZnJvbSBcIi4vZHRvL2Zvb3Rlci5kdG9cIjtcblxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihmb29vdGVyU2VydmljZSkge1xuICAgIHRoaXMuZm9vb3RlclNlcnZpY2UgPSBmb29vdGVyU2VydmljZTtcbiAgfVxuXG4gIGFzeW5jIGZpbmQocmVxLCByZXMpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5mb29vdGVyU2VydmljZS5maW5kKCk7XG5cbiAgICByZXMuc3VjY2Vzcyh7XG4gICAgICBtZXNzYWdlOiBcIkZpbmQgRm9vdGVyIHN1Y2Nlc3NmdWxseSFcIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuT0ssXG4gICAgICBkYXRhOiBkYXRhID8gbmV3IEZvb3RlckR0byhkYXRhKSA6IG51bGwsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCJAL2NvcmUvZGkvZGktY29udGFpbmVyXCI7XG5cbmltcG9ydCB7IEZvb3RlckNvbnRyb2xsZXIgfSBmcm9tIFwiLi9mb290ZXIuY29udHJvbGxlclwiO1xuaW1wb3J0IHsgRm9vdGVyUmVwb3NpdG9yeSB9IGZyb20gXCIuL2Zvb3Rlci5yZXBvc2l0b3lcIjtcbmltcG9ydCB7IEZvb3RlclNlcnZpY2UgfSBmcm9tIFwiLi9mb290ZXIuc2VydmljZVwiO1xuXG5leHBvcnQgY29uc3QgZm9vdGVyRElLZXlzID0ge1xuICBzZXJ2aWNlOiBcImZvb3Rlci1zZXJ2aWNlXCIsXG4gIHJlcG9zaXRvcnk6IFwiZm9vdGVyLXJlcG9zaXRvcnlcIixcbiAgY29udHJvbGxlcjogXCJmb290ZXItY29udHJvbGxlclwiLFxufTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKGZvb3RlckRJS2V5cy5yZXBvc2l0b3J5LCBbXSwgKCkgPT4gbmV3IEZvb3RlclJlcG9zaXRvcnkoKSk7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgZm9vdGVyRElLZXlzLnNlcnZpY2UsXG4gIFtmb290ZXJESUtleXMucmVwb3NpdG9yeV0sXG4gIChmb290ZXJSZXBvc2l0b3J5KSA9PiBuZXcgRm9vdGVyU2VydmljZShmb290ZXJSZXBvc2l0b3J5KSxcbik7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgZm9vdGVyRElLZXlzLmNvbnRyb2xsZXIsXG4gIFtmb290ZXJESUtleXMuc2VydmljZV0sXG4gIChmb290ZXJTZXJ2aWNlKSA9PiBuZXcgRm9vdGVyQ29udHJvbGxlcihmb290ZXJTZXJ2aWNlKSxcbik7XG4iLCJpbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gXCJAL3NoYXJlZC9yZXBvc2l0b3J5L2Jhc2UucmVwb3NpdG9yeVwiO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL21vZGVsL2Zvb3Rlci5tb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgRm9vdGVyUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoRm9vdGVyKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIkAvY29yZS9kaS9kaS1jb250YWluZXJcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5cbmltcG9ydCB7IGZvb3RlckRJS2V5cyB9IGZyb20gXCIuL2Zvb3Rlci5kaVwiO1xuXG5jb25zdCBwcmVmaXggPSBcIi9mb290ZXJzXCI7XG5cbmNvbnN0IGZvb3RlclJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbmNvbnN0IGZvb3RlckNvbnRyb2xsZXIgPSBjb250YWluZXIuZ2V0KGZvb3RlckRJS2V5cy5jb250cm9sbGVyKTtcblxuZm9vdGVyUm91dGVyLmdldChgJHtwcmVmaXh9YCwgKHJlcSwgcmVzKSA9PiBmb290ZXJDb250cm9sbGVyLmZpbmQocmVxLCByZXMpKTtcblxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyUm91dGVyO1xuIiwiaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIkAvY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5leHBvcnQgY2xhc3MgRm9vdGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGZvb3RlclJlcG9zaXRvcnkpIHtcbiAgICB0aGlzLmZvb3RlclJlcG9zaXRvcnkgPSBmb290ZXJSZXBvc2l0b3J5O1xuICB9XG5cbiAgY3JlYXRlKGZvb3RlckR0bywgZmlsZXMpIHt9XG5cbiAgYXN5bmMgZmluZCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb290ZXJSZXBvc2l0b3J5LmZpbmRBbGwoKVswXTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZShmb290ZXJEdG8sIGZpbGVzKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZm9vdGVyUmVwb3NpdG9yeS5maW5kKClbMF07XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IEJhc2VSZXNwb25zZS5lcnJvcih7XG4gICAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuTk9UX0ZPVU5ELFxuICAgICAgICBtZXNzYWdlOiBcIkZvb3RlciBub3QgZm91bmQgIVwiLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn1cbiIsImltcG9ydCB7IGFzc2V0TW9kZWxTY2hlbWEgfSBmcm9tIFwiQC9jb21tb24vc2NoZW1hL21vZGVsL2Fzc2V0LW1vZGVsLnNjaGVtYVwiO1xuaW1wb3J0IHsgY29udGFjdFNjaGVtYSB9IGZyb20gXCJAL2NvbW1vbi9zY2hlbWEvbW9kZWwvY29udGFjdC1tb2RlbC5zY2hlbWFcIjtcbmltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgZm9vdGVyU2NoZW1hID0gbmV3IFNjaGVtYShcbiAge1xuICAgIGNvbnRhY3Q6IGNvbnRhY3RTY2hlbWEsXG4gICAgbG9jYXRpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgY29weXJpZ2h0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIG9wZW5pbmdEYXk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgb3BlbmluZ0hvdXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgc29jaWFsTWVkaWE6IGFzc2V0TW9kZWxTY2hlbWEsXG4gIH0sXG4gIHtcbiAgICBjb2xsZWN0aW9uOiBcImZvb3RlclwiLFxuICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gIH0sXG4pO1xuXG5jb25zdCBGb290ZXIgPSBtb25nb29zZS5tb2RlbChcIkZvb3RlclwiLCBmb290ZXJTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgYXV0b0luY3JlbWVudFBsdWdpbiBmcm9tIFwiQC9jb21tb24vbW9uZ29vc2UvcGx1Z2lucy9hdXRvLWluY3JlbWVudC5wbHVnaW5cIjtcbmltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3Qgcm9sZVNjaGVtYSA9IG5ldyBTY2hlbWEoXG4gIHtcbiAgICByb2xlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB1bmlxdWU6IHRydWUsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHRyaW06IHRydWUsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGNvbGxlY3Rpb246IFwicm9sZXNcIixcbiAgICB2ZXJzaW9uS2V5OiBmYWxzZSxcbiAgfSxcbikucGx1Z2luKGF1dG9JbmNyZW1lbnRQbHVnaW4sIHsgaW5jRmllbGQ6IFwiX2lkXCIgfSk7XG5cbmNvbnN0IFJvbGUgPSBtb25nb29zZS5tb2RlbChcIlJvbGVcIiwgcm9sZVNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IFJvbGU7XG4iLCJpbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiQC9jb3JlL2RpL2RpLWNvbnRhaW5lclwiO1xuXG5pbXBvcnQgeyBSb2xlUmVwb3NpdG9yeSB9IGZyb20gXCIuL3JvbGUucmVwb3NpdG9yeVwiO1xuXG5leHBvcnQgY29uc3Qgcm9sZURJS2V5cyA9IHtcbiAgcmVwb3NpdG9yeTogXCJyb2xlLXJlcG9zaXRvcnlcIixcbn07XG5cbmNvbnRhaW5lci5yZWdpc3Rlcihyb2xlRElLZXlzLnJlcG9zaXRvcnksIFtdLCAoKSA9PiBuZXcgUm9sZVJlcG9zaXRvcnkoKSk7XG4iLCJpbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gXCJAL3NoYXJlZC9yZXBvc2l0b3J5L2Jhc2UucmVwb3NpdG9yeVwiO1xuXG5pbXBvcnQgUm9sZSBmcm9tIFwiLi9tb2RlbC9yb2xlLm1vZGVsXCI7XG5cbmV4cG9ydCBjbGFzcyBSb2xlUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUm9sZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgY29uc3QgcGFzc3dvcmRSZXNldFNjaGVtYSA9IG5ldyBTY2hlbWEoXG4gIHtcbiAgICBjb2RlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgIH0sXG4gICAgdGltZToge1xuICAgICAgdHlwZTogRGF0ZSxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIF9pZDogZmFsc2UsXG4gIH0sXG4pO1xuIiwiaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmV4cG9ydCBjb25zdCByZWZyZXNoVG9rZW5TY2hlbWEgPSBuZXcgU2NoZW1hKFxuICB7XG4gICAgdG9rZW46IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICAgIGNyZWF0ZWRBdDoge1xuICAgICAgdHlwZTogRGF0ZSxcbiAgICAgIGRlZmF1bHQ6IERhdGUubm93LFxuICAgICAgZXhwaXJlczogXCIxNWRcIixcbiAgICB9LFxuICB9LFxuICB7XG4gICAgX2lkOiBmYWxzZSxcbiAgfSxcbik7XG4iLCJpbXBvcnQgeyBjb250YWN0U2NoZW1hIH0gZnJvbSBcIkAvY29tbW9uL3NjaGVtYS9tb2RlbC9jb250YWN0LW1vZGVsLnNjaGVtYVwiO1xuaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5pbXBvcnQgeyBwYXNzd29yZFJlc2V0U2NoZW1hIH0gZnJvbSBcIi4vcGFzc3dvcmQtcmVzZXRcIjtcbmltcG9ydCB7IHJlZnJlc2hUb2tlblNjaGVtYSB9IGZyb20gXCIuL3JlZnJlc2gtdG9rZW5cIjtcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoXG4gIHtcbiAgICBlbWFpbDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgfSxcbiAgICBmdWxsTmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB0cmltOiB0cnVlLFxuICAgIH0sXG4gICAgcHJvZmlsZUltZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdHJpbTogdHJ1ZSB9LFxuICAgIGNvbnRhY3Q6IGNvbnRhY3RTY2hlbWEsXG4gICAgcmVmcmVzaFRva2VuOiByZWZyZXNoVG9rZW5TY2hlbWEsXG4gICAgcmVzZXQ6IHBhc3N3b3JkUmVzZXRTY2hlbWEsXG4gICAgcm9sZTogeyB0eXBlOiBTY2hlbWEuVHlwZXMuTnVtYmVyLCByZWY6IFwiUm9sZVwiLCByZXF1aXJlZDogdHJ1ZSB9LFxuICB9LFxuICB7XG4gICAgY29sbGVjdGlvbjogXCJ1c2Vyc1wiLFxuICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gIH0sXG4pO1xuXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWwoXCJVc2VyXCIsIHVzZXJTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIkAvY29yZS9kaS9kaS1jb250YWluZXJcIjtcblxuaW1wb3J0IHsgcm9sZURJS2V5cyB9IGZyb20gXCIuLi9yb2xlL3JvbGUuZGlcIjtcbmltcG9ydCB7IFVzZXJSZXBvc2l0b3J5IH0gZnJvbSBcIi4vdXNlci5yZXBvc2l0b3J5XCI7XG5pbXBvcnQgeyBVc2VyU2VlZGVyIH0gZnJvbSBcIi4vdXNlci5zZWVkZXJcIjtcblxuZXhwb3J0IGNvbnN0IHVzZXJESUtleXMgPSB7XG4gIHNlcnZpY2U6IFwidXNlci1zZXJ2aWNlXCIsXG4gIHJlcG9zaXRvcnk6IFwidXNlci1yZXBvc2l0b3J5XCIsXG4gIHNlZWRlcjogXCJ1c2VyLXNlZWRlclwiLFxufTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKHVzZXJESUtleXMucmVwb3NpdG9yeSwgW10sICgpID0+IG5ldyBVc2VyUmVwb3NpdG9yeSgpKTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKFxuICB1c2VyRElLZXlzLnNlZWRlcixcbiAgW3VzZXJESUtleXMucmVwb3NpdG9yeSwgcm9sZURJS2V5cy5yZXBvc2l0b3J5XSxcbiAgKHVzZXJSZXBvc2l0b3J5LCByb2xlUmVwb3NpdG9yeSkgPT5cbiAgICBuZXcgVXNlclNlZWRlcih1c2VyUmVwb3NpdG9yeSwgcm9sZVJlcG9zaXRvcnkpLFxuKTtcbiIsImltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSBcIkAvc2hhcmVkL3JlcG9zaXRvcnkvYmFzZS5yZXBvc2l0b3J5XCI7XG5cbmltcG9ydCBVc2VyIGZyb20gXCIuL21vZGVsL3VzZXIubW9kZWxcIjtcblxuZXhwb3J0IGNsYXNzIFVzZXJSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihVc2VyKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcm9sZXMgfSBmcm9tIFwiQC9jb21tb24vY29uc3RhbnRzL3JvbGVcIjtcbmltcG9ydCBoYXNoUGFzc3dvcmQgZnJvbSBcIkAvY29tbW9uL2hlbHBlcnMvaGFzaC1wYXNzd29yZFwiO1xuXG5leHBvcnQgY2xhc3MgVXNlclNlZWRlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXJSZXBvc2l0b3J5LCByb2xlUmVwb3NpdG9yeSkge1xuICAgIHRoaXMudXNlclJlcG9zaXRvcnkgPSB1c2VyUmVwb3NpdG9yeTtcbiAgICB0aGlzLnJvbGVSZXBvc2l0b3J5ID0gcm9sZVJlcG9zaXRvcnk7XG4gIH1cblxuICBhc3luYyBjcmVhdGVSb2xlKCkge1xuICAgIGNvbnN0IGV4aXN0aW5nUm9sZXMgPSBhd2FpdCB0aGlzLnJvbGVSZXBvc2l0b3J5LmZpbmRBbGwoKTtcbiAgICBjb25zdCBleGlzdGluZ1JvbGVOYW1lcyA9IGV4aXN0aW5nUm9sZXMubWFwKChyb2xlKSA9PiByb2xlLnJvbGUpO1xuXG4gICAgY29uc3Qgcm9sZXNUb0NyZWF0ZSA9IHJvbGVzLmZpbHRlcihcbiAgICAgIChyb2xlKSA9PiAhZXhpc3RpbmdSb2xlTmFtZXMuaW5jbHVkZXMocm9sZS5yb2xlKSxcbiAgICApO1xuXG4gICAgaWYgKHJvbGVzVG9DcmVhdGUubGVuZ3RoID4gMCkge1xuICAgICAgYXdhaXQgdGhpcy5yb2xlUmVwb3NpdG9yeS5jcmVhdGVNYW55KHJvbGVzVG9DcmVhdGUpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZUFkbWluKCkge1xuICAgIGF3YWl0IHRoaXMuY3JlYXRlUm9sZSgpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnVzZXJSZXBvc2l0b3J5LmZpbmRPbmUoeyByb2xlOiAxIH0pO1xuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBjb25zdCBwYXNzd29yZCA9IGF3YWl0IGhhc2hQYXNzd29yZChcImJha3RhcmFkbWluXCIpO1xuXG4gICAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS5jcmVhdGUoe1xuICAgICAgICBlbWFpbDogXCJiYWt0YXJhZG1pbkBnbWFpbC5jb21cIixcbiAgICAgICAgZnVsbE5hbWU6IFwiYmFrdGFyIGFkbWluXCIsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgICByb2xlOiAxLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCB7IHN3YWdnZXJTcGVjLCBzd2FnZ2VyVWkgfSBmcm9tIFwiQC9jb3JlL2NvbmZpZy9zd2FnZ2VyLmNvbmZpZ1wiO1xuaW1wb3J0IFwiQC9jb3JlL2RpL2RpLWdsb2JhbHNcIjtcbmltcG9ydCBjb29raWVQYXJzZXIgZnJvbSBcImNvb2tpZS1wYXJzZXJcIjtcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgcmF0ZUxpbWl0IH0gZnJvbSBcImV4cHJlc3MtcmF0ZS1saW1pdFwiO1xuXG5pbXBvcnQgZm9vdGVyUm91dGVyIGZyb20gXCIuL2FwaS9mb290ZXIvZm9vdGVyLnJvdXRlXCI7XG5pbXBvcnQgeyBhcGlQcmVmaXggfSBmcm9tIFwiLi9jb21tb24vY29uc3RhbnRzL2FwaVwiO1xuaW1wb3J0IGJhc2VSZXNwb25zZU1pZGRsZXdhcmUgZnJvbSBcIi4vY29yZS9taWRkbGV3YXJlL2Jhc2UtcmVzcG9uc2UubWlkZGxld2FyZVwiO1xuaW1wb3J0IGVycm9ySGFuZGxlck1pZGRsZXdhcmUgZnJvbSBcIi4vY29yZS9taWRkbGV3YXJlL2Vycm9yLWhhbmRsZXItbWlkZGxld2FyZVwiO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoXG4gIHJhdGVMaW1pdCh7XG4gICAgd2luZG93TXM6IDEwICogNjAgKiAxMDAwLFxuICAgIGxpbWl0OiAxMDAsXG4gICAgc3RhbmRhcmRIZWFkZXJzOiBcImRyYWZ0LTZcIixcbiAgICBsZWdhY3lIZWFkZXJzOiBmYWxzZSxcbiAgICBtZXNzYWdlOiBcIlRvbyBtYW55IHJlcXVlc3RzXCIsXG4gIH0pLFxuKTtcbmFwcC5zZXQoXCJ0cnVzdCBwcm94eVwiLCAxKTtcbmFwcC51c2UoY29va2llUGFyc2VyKCkpO1xuYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcbmFwcC51c2UoY29ycygpKTtcbmFwcC5kaXNhYmxlKFwieC1wb3dlcmVkLWJ5XCIpO1xuYXBwLnVzZShiYXNlUmVzcG9uc2VNaWRkbGV3YXJlKTtcbmFwcC51c2UoXCIvYXBpLWRvY3NcIiwgc3dhZ2dlclVpLnNlcnZlLCBzd2FnZ2VyVWkuc2V0dXAoc3dhZ2dlclNwZWMpKTtcblxuYXBwLnVzZShhcGlQcmVmaXgsIGZvb3RlclJvdXRlcik7XG5hcHAudXNlKGVycm9ySGFuZGxlck1pZGRsZXdhcmUpO1xuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIiwiZXhwb3J0IGNvbnN0IGFwaVByZWZpeCA9IFwiL2FwaS92MVwiO1xuIiwiZXhwb3J0IGNvbnN0IHJvbGVzID0gW3sgcm9sZTogXCJhZG1pblwiIH0sIHsgcm9sZTogXCJ1c2VyXCIgfV07XG4iLCJpbXBvcnQgKiBhcyBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYXNoUGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0KDEwKTtcblxuICByZXR1cm4gYmNyeXB0Lmhhc2gocGFzc3dvcmQsIHNhbHQpO1xufVxuIiwiLyoqXG4gKiBAZGVzY3JpcHRpb24gTW9uZ29vc2UgcGx1Z2luIHRvIGF1dG8gaW5jcmVtZW50IGEgZmllbGRcbiAqIEBwYXJhbSB7TW9uZ29vc2UuU2NoZW1hfSBzY2hlbWFcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dG9JbmNyZW1lbnRQbHVnaW4oc2NoZW1hLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucy5pbmNGaWVsZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBzcGVjaWZ5IGluY0ZpZWxkIVwiKTtcbiAgfVxuXG4gIGxldCBmaWVsZE9wdGlvbnMgPSB7XG4gICAgdHlwZTogTnVtYmVyLFxuICB9O1xuXG4gIGlmIChvcHRpb25zLmluY0ZpZWxkICE9PSBcIl9pZFwiKSB7XG4gICAgZmllbGRPcHRpb25zID0ge1xuICAgICAgLi4uZmllbGRPcHRpb25zLFxuICAgICAgdW5pcXVlOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICBzY2hlbWEuYWRkKHtcbiAgICBbb3B0aW9ucy5pbmNGaWVsZF06IGZpZWxkT3B0aW9ucyxcbiAgfSk7XG5cbiAgc2NoZW1hLnByZShcInNhdmVcIiwgZnVuY3Rpb24gKG5leHQpIHtcbiAgICBpZiAodGhpcy5pc05ldykge1xuICAgICAgdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICAuZmluZE9uZSh7fSwge30sIHsgc29ydDogeyBbb3B0aW9ucy5pbmNGaWVsZF06IC0xIH0gfSlcbiAgICAgICAgLnRoZW4oKGxhc3RSZWNvcmQpID0+IHtcbiAgICAgICAgICB0aGlzW29wdGlvbnMuaW5jRmllbGRdID0gbGFzdFJlY29yZFxuICAgICAgICAgICAgPyBsYXN0UmVjb3JkW29wdGlvbnMuaW5jRmllbGRdICsgMVxuICAgICAgICAgICAgOiAxO1xuXG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgc2NoZW1hLnByZShcImluc2VydE1hbnlcIiwgYXN5bmMgZnVuY3Rpb24gKG5leHQsIGRvY3MpIHtcbiAgICBjb25zdCBsYXN0UmVjb3JkID0gYXdhaXQgdGhpcy5maW5kT25lKFxuICAgICAge30sXG4gICAgICB7fSxcbiAgICAgIHsgc29ydDogeyBbb3B0aW9ucy5pbmNGaWVsZF06IC0xIH0gfSxcbiAgICApO1xuXG4gICAgY29uc3QgbGFzdENvdW50ID0gbGFzdFJlY29yZCA/IGxhc3RSZWNvcmRbb3B0aW9ucy5pbmNGaWVsZF0gOiAwO1xuXG4gICAgZG9jcy5mb3JFYWNoKChkb2MsIGluZGV4KSA9PiB7XG4gICAgICBkb2Nbb3B0aW9ucy5pbmNGaWVsZF0gPSBsYXN0Q291bnQgKyBpbmRleCArIDE7XG4gICAgfSk7XG5cbiAgICBuZXh0KCk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgY29uc3QgYXNzZXRNb2RlbFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICBocmVmOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlOiB0cnVlLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICAgIHVybDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBwdWJsaWNJZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgICBzaXplOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIF9pZDogZmFsc2UsXG4gIH0sXG4pO1xuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgY29uc3QgY29udGFjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICBlbWFpbDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdW5pcXVlOiB0cnVlLFxuICAgIH0sXG4gICAgcGhvbmVOdW1iZXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgX2lkOiBmYWxzZSxcbiAgfSxcbik7XG4iLCJpbXBvcnQgXCJAL2NvcmUvY29uZmlnL2Vudi5jb25maWdcIjtcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURiQ29ubmVjdGlvbigpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52LkNPTk5FQ1RJT05fU1RSSU5HKTtcbiAgICBjb25zb2xlLmxvZyhcIk1vbmdvREIgQ29ubmVjdGVkXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJNb25nb0RCIENvbm5lY3Rpb24gRXJyb3I6XCIsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcImRvdGVudlwiO1xuXG5jb25maWcoKTtcblxuY29uZmlnKHtcbiAgcGF0aDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiA/IFwiLmVudi5sb2NhbFwiIDogXCIuZW52XCIsXG4gIG92ZXJyaWRlOiB0cnVlLFxufSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCBzd2FnZ2VySnNkb2MgZnJvbSBcInN3YWdnZXItanNkb2NcIjtcbmltcG9ydCBzd2FnZ2VyVWkgZnJvbSBcInN3YWdnZXItdWktZXhwcmVzc1wiO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICBkZWZpbml0aW9uOiB7XG4gICAgb3BlbmFwaTogXCIzLjAuMFwiLFxuICAgIGluZm86IHtcbiAgICAgIHRpdGxlOiBcIkNBRi1WaWJlIENvZmZlZSBTaG9wIEFQSVwiLFxuICAgICAgdmVyc2lvbjogXCIxLjAuMFwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQ0FGLVZpYmUgQ29mZmVlIFNob3AgQVBJIGRvY3VtZW50YXRpb25cIixcbiAgICB9LFxuICAgIHNlcnZlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMFwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBhcGlzOiBbXCIuL3NyYy9hcGkvKi5qc1wiXSxcbn07XG5cbmNvbnN0IHN3YWdnZXJTcGVjID0gc3dhZ2dlckpzZG9jKG9wdGlvbnMpO1xuXG5leHBvcnQgeyBzd2FnZ2VyU3BlYywgc3dhZ2dlclVpIH07XG4iLCJpbXBvcnQgeyByb2xlRElLZXlzIH0gZnJvbSBcIkAvYXBpL3JvbGUvcm9sZS5kaVwiO1xuaW1wb3J0IHsgdXNlckRJS2V5cyB9IGZyb20gXCJAL2FwaS91c2VyL3VzZXIuZGlcIjtcbmltcG9ydCB7IFVzZXJTZWVkZXIgfSBmcm9tIFwiQC9hcGkvdXNlci91c2VyLnNlZWRlclwiO1xuXG5pbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiLi4vZGkvZGktY29udGFpbmVyXCI7XG5cbmV4cG9ydCBjb25zdCBzZWVkID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB1c2VyU2VlZGVyID0gbmV3IFVzZXJTZWVkZXIoXG4gICAgY29udGFpbmVyLmdldCh1c2VyRElLZXlzLnJlcG9zaXRvcnkpLFxuICAgIGNvbnRhaW5lci5nZXQocm9sZURJS2V5cy5yZXBvc2l0b3J5KSxcbiAgKTtcblxuICBhd2FpdCBQcm9taXNlLmFsbChbdXNlclNlZWRlci5jcmVhdGVBZG1pbigpXSk7XG59O1xuIiwiLyoqXG4gKiBEZXBlbmRlbmN5IEluamVjdGlvbiBDb250YWluZXJcbiAqIEBjbGFzcyBEaUNvbnRhaW5lclxuICogQGRlc2NyaXB0aW9uIEEgc2ltcGxlIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGNvbnRhaW5lciB0aGF0IGFsbG93cyB5b3UgdG8gcmVnaXN0ZXJcbiAqIGFuZCBnZXQgZGVwZW5kZW5jaWVzXG4gKiBAZXhhbXBsZVxuICogY29uc3QgY29udGFpbmVyID0gbmV3IERpQ29udGFpbmVyKCk7XG4gKiBjb250YWluZXIucmVnaXN0ZXIoXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIiwgW10sICgpID0+IG5ldyBMYW5kaW5nUGFnZVJlcG9zaXRvcnkoKSk7XG4gKiBjb250YWluZXIucmVnaXN0ZXIoXG4gKiAgXCJMYW5kaW5nUGFnZVNlcnZpY2VcIixcbiAqICBbXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIl0sXG4gKiAgKGxhbmRpbmdQYWdlUmVwb3NpdG9yeSkgPT4gbmV3IExhbmRpbmdQYWdlU2VydmljZShsYW5kaW5nUGFnZVJlcG9zaXRvcnkpLFxuICogKTtcbiAqXG4gKiBjb25zdCBsYW5kaW5nUGFnZVNlcnZpY2UgPSBjb250YWluZXIuZ2V0KFwiTGFuZGluZ1BhZ2VTZXJ2aWNlXCIpO1xuICovXG5jbGFzcyBEaUNvbnRhaW5lciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGVwZW5kZW5jaWVzID0ge307XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBkZXBlbmRlbmN5XG4gICAqIEBwYXJhbSBuYW1lIC0gTmFtZSBvZiB0aGUgZGVwZW5kZW5jeSAoZXg6IFwiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCIpXG4gICAqIEBwYXJhbSBkZXBlbmRlbmNpZXMgLSBBcnJheSBvZiBkZXBlbmRlbmNpZXMgKGV4OiBbXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIl0pXG4gICAqIEBwYXJhbSBmdW5jIC0gRnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBkZXBlbmRlbmN5XG4gICAqL1xuICByZWdpc3RlcihuYW1lLCBkZXBlbmRlbmNpZXMsIGZ1bmMpIHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fFxuICAgICAgIUFycmF5LmlzQXJyYXkoZGVwZW5kZW5jaWVzKSB8fFxuICAgICAgdHlwZW9mIGZ1bmMgIT09IFwiZnVuY3Rpb25cIlxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhcmd1bWVudFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlcGVuZGVuY2llc1tuYW1lXSA9IHtcbiAgICAgIGRlcGVuZGVuY2llcyxcbiAgICAgIGZ1bmMsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBkZXBlbmRlbmN5XG4gICAqIEBwYXJhbSBuYW1lIC0gTmFtZSBvZiB0aGUgZGVwZW5kZW5jeSAoZXg6IFwiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCIpXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXQobmFtZSkge1xuICAgIGlmICghdGhpcy5kZXBlbmRlbmNpZXNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRGVwZW5kZW5jeSBub3QgZm91bmQ6ICR7bmFtZX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGRlcGVuZGVuY2llcywgZnVuYyB9ID0gdGhpcy5kZXBlbmRlbmNpZXNbbmFtZV07XG5cbiAgICBjb25zdCBkZXBlbmRlbmNpZXNJbnN0YW5jZXMgPSBkZXBlbmRlbmNpZXMubWFwKChkZXBlbmRlbmN5KSA9PlxuICAgICAgdGhpcy5nZXQoZGVwZW5kZW5jeSksXG4gICAgKTtcblxuICAgIHJldHVybiBmdW5jKC4uLmRlcGVuZGVuY2llc0luc3RhbmNlcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lciA9IG5ldyBEaUNvbnRhaW5lcigpO1xuIiwiaW1wb3J0IFwiQC9hcGkvdXNlci91c2VyLmRpXCI7XG5pbXBvcnQgXCJAL2FwaS9mb290ZXIvZm9vdGVyLmRpXCI7XG4iLCJpbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5pbXBvcnQgeyBCYXNlUmVzcG9uc2UgfSBmcm9tIFwiLi4vcmVzcG9uc2UvYmFzZS1yZXNwb25zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiYXNlUmVzcG9uc2VNaWRkbGV3YXJlKHJlcSwgcmVzLCBuZXh0KSB7XG4gIHJlcy5zdWNjZXNzID0gKHByb3BzKSA9PiB7XG4gICAgcmVzXG4gICAgICAuc3RhdHVzKHByb3BzLnN0YXR1cyB8fCBTdGF0dXNDb2Rlcy5PSylcbiAgICAgIC5qc29uKEJhc2VSZXNwb25zZS5zdWNjZXNzKHByb3BzKSk7XG4gIH07XG5cbiAgcmVzLmVycm9yID0gKHByb3BzKSA9PiB7XG4gICAgcmVzXG4gICAgICAuc3RhdHVzKHByb3BzLnN0YXR1cyB8fCBTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVClcbiAgICAgIC5qc29uKEJhc2VSZXNwb25zZS5lcnJvcihwcm9wcykpO1xuICB9O1xuXG4gIG5leHQoKTtcbn1cbiIsImltcG9ydCB7IEJhc2VSZXNwb25zZSB9IGZyb20gXCJAL2NvcmUvcmVzcG9uc2UvYmFzZS1yZXNwb25zZVwiO1xuaW1wb3J0IHsgQVBJRXJyb3IgfSBmcm9tIFwiQC9zaGFyZWQvZXJyb3ItcmVzcG9uc2UvZXJyb3ItcmVzcG9uc2VcIjtcblxuY29uc3QgZXJyb3JIYW5kbGVyTWlkZGxld2FyZSA9IChlcnJvciwgcmVxdWVzdCwgcmVzcG9uc2UsIG5leHQpID0+IHtcbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgQVBJRXJyb3IpIHtcbiAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKGVycm9yLnN0YXR1c0NvZGUgfHwgNDAwKS5qc29uKHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICB9KTtcbiAgfVxuXG4gIG5leHQoKTtcblxuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBCYXNlUmVzcG9uc2UpIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuZXJyb3IoZXJyb3IpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyg1MDApLmpzb24oe1xuICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3IhXCIsXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXJyb3JIYW5kbGVyTWlkZGxld2FyZTtcbiIsImltcG9ydCB7IGdldFJlYXNvblBocmFzZSwgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcblxuZXhwb3J0IGNsYXNzIEJhc2VSZXNwb25zZSB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLnN1Y2Nlc3MgPSBkYXRhLnN1Y2Nlc3M7XG4gICAgdGhpcy5zdGF0dXMgPSBkYXRhLnN0YXR1cztcbiAgICB0aGlzLm1lc3NhZ2UgPSBkYXRhLm1lc3NhZ2U7XG4gICAgdGhpcy5kYXRhID0gZGF0YS5kYXRhO1xuICAgIHRoaXMuZGV0YWlscyA9IGRhdGEuZGV0YWlscztcbiAgfVxuXG4gIHN0YXRpYyBzdWNjZXNzKHsgc3RhdHVzID0gU3RhdHVzQ29kZXMuT0ssIG1lc3NhZ2UsIGRhdGEgfSkge1xuICAgIHJldHVybiBuZXcgQmFzZVJlc3BvbnNlKHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBzdGF0dXMsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlIHx8IGdldFJlYXNvblBocmFzZShzdGF0dXMpLFxuICAgICAgZGF0YSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBlcnJvcih7IG1lc3NhZ2UsIHN0YXR1cyA9IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNULCBkZXRhaWxzID0gbnVsbCB9KSB7XG4gICAgcmV0dXJuIG5ldyBCYXNlUmVzcG9uc2Uoe1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBzdGF0dXMsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlIHx8IGdldFJlYXNvblBocmFzZShzdGF0dXMpLFxuICAgICAgZGV0YWlscyxcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEFQSUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBzdGF0dXNDb2RlKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEJhc2VSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IobW9kZWwpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIH1cblxuICBjcmVhdGUoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmNyZWF0ZShkYXRhKTtcbiAgfVxuXG4gIHVwZGF0ZShpZCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmRCeUlkQW5kVXBkYXRlKGlkLCBkYXRhLCB7XG4gICAgICBuZXc6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBkZWxldGUoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kQnlJZEFuZERlbGV0ZShpZCk7XG4gIH1cblxuICBmaW5kQnlJZChpZCkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmRCeUlkKGlkKTtcbiAgfVxuXG4gIGZpbmRBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZCgpO1xuICB9XG5cbiAgZmluZE9uZShxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmRPbmUocXVlcnkpO1xuICB9XG5cbiAgZmluZChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmQocXVlcnkpO1xuICB9XG5cbiAgY291bnQocXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5jb3VudERvY3VtZW50cyhxdWVyeSk7XG4gIH1cblxuICBhZ2dyZWdhdGUocGlwZWxpbmUpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5hZ2dyZWdhdGUocGlwZWxpbmUpO1xuICB9XG5cbiAgY3JlYXRlTWFueShkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuaW5zZXJ0TWFueShkYXRhKTtcbiAgfVxuXG4gIHVwZGF0ZU1hbnkocXVlcnksIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC51cGRhdGVNYW55KHF1ZXJ5LCBkYXRhKTtcbiAgfVxuXG4gIGJ1bGtXcml0ZShvcGVyYXRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuYnVsa1dyaXRlKG9wZXJhdGlvbnMpO1xuICB9XG5cbiAgYXN5bmMgdXBzZXJ0KHF1ZXJ5LCBkYXRhKSB7XG4gICAgY29uc3QgZmluZERhdGEgPSBhd2FpdCB0aGlzLmZpbmRPbmUocXVlcnkpO1xuXG4gICAgaWYgKCFmaW5kRGF0YSkgcmV0dXJuIHRoaXMuY3JlYXRlKGRhdGEpO1xuXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKGZpbmREYXRhLl9pZCwgZGF0YSk7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwTmF0aXZlU3VwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXJhdGUtbGltaXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cC1zdGF0dXMtY29kZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dhZ2dlci1qc2RvY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2FnZ2VyLXVpLWV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiQC9jb3JlL2NvbmZpZy9lbnYuY29uZmlnXCI7XG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXIgfSBmcm9tIFwiaHR0cFwiO1xuXG5pbXBvcnQgYXBwIGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IHsgY3JlYXRlRGJDb25uZWN0aW9uIH0gZnJvbSBcIi4vY29yZS9jb25maWcvZGIuY29uZmlnXCI7XG5pbXBvcnQgeyBzZWVkIH0gZnJvbSBcIi4vY29yZS9kYi9zZWVkXCI7XG5cbmNvbnN0IHNlcnZlciA9IGNyZWF0ZVNlcnZlcihhcHApO1xuY29uc3QgeyBQT1JUIH0gPSBwcm9jZXNzLmVudjtcblxuKGFzeW5jICgpID0+IHtcbiAgYXdhaXQgY3JlYXRlRGJDb25uZWN0aW9uKCk7XG4gIGF3YWl0IHNlZWQoKTtcbiAgc2VydmVyLmxpc3RlbihQT1JULCBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYFNlcnZlciBpcyBydW5uaW5nOiBodHRwOi8vbG9jYWxob3N0OiR7UE9SVH1gKTtcbiAgfSk7XG59KSgpO1xuIl0sIm5hbWVzIjpbIkZvb3RlckR0byIsIl9jcmVhdGVDbGFzcyIsIl9yZWYiLCJjb250YWN0IiwibG9jYXRpb24iLCJ0aXRsZSIsImNvcHlyaWdodCIsIm9wZW5pbmdEYXkiLCJvcGVuaW5nSG91ciIsInNvY2lhbE1lZGlhIiwiX2NsYXNzQ2FsbENoZWNrIiwiT2JqZWN0IiwiYXNzaWduIiwiU3RhdHVzQ29kZXMiLCJGb290ZXJDb250cm9sbGVyIiwiZm9vb3RlclNlcnZpY2UiLCJrZXkiLCJ2YWx1ZSIsIl9maW5kIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJyZXEiLCJyZXMiLCJkYXRhIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImZpbmQiLCJzZW50Iiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJPSyIsInN0b3AiLCJfeCIsIl94MiIsImFwcGx5IiwiYXJndW1lbnRzIiwiY29udGFpbmVyIiwiRm9vdGVyUmVwb3NpdG9yeSIsIkZvb3RlclNlcnZpY2UiLCJmb290ZXJESUtleXMiLCJzZXJ2aWNlIiwicmVwb3NpdG9yeSIsImNvbnRyb2xsZXIiLCJyZWdpc3RlciIsImZvb3RlclJlcG9zaXRvcnkiLCJmb290ZXJTZXJ2aWNlIiwiQmFzZVJlcG9zaXRvcnkiLCJGb290ZXIiLCJfQmFzZVJlcG9zaXRvcnkiLCJfY2FsbFN1cGVyIiwiX2luaGVyaXRzIiwiZXhwcmVzcyIsInByZWZpeCIsImZvb3RlclJvdXRlciIsIlJvdXRlciIsImZvb3RlckNvbnRyb2xsZXIiLCJnZXQiLCJjb25jYXQiLCJCYXNlUmVzcG9uc2UiLCJjcmVhdGUiLCJmb290ZXJEdG8iLCJmaWxlcyIsImFicnVwdCIsImZpbmRBbGwiLCJfdXBkYXRlIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJlcnJvciIsIk5PVF9GT1VORCIsInVwZGF0ZSIsImFzc2V0TW9kZWxTY2hlbWEiLCJjb250YWN0U2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJmb290ZXJTY2hlbWEiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJjb2xsZWN0aW9uIiwidGltZXN0YW1wcyIsIm1vZGVsIiwiYXV0b0luY3JlbWVudFBsdWdpbiIsInJvbGVTY2hlbWEiLCJyb2xlIiwidW5pcXVlIiwidHJpbSIsInZlcnNpb25LZXkiLCJwbHVnaW4iLCJpbmNGaWVsZCIsIlJvbGUiLCJSb2xlUmVwb3NpdG9yeSIsInJvbGVESUtleXMiLCJwYXNzd29yZFJlc2V0U2NoZW1hIiwiY29kZSIsInRpbWUiLCJEYXRlIiwiX2lkIiwicmVmcmVzaFRva2VuU2NoZW1hIiwidG9rZW4iLCJjcmVhdGVkQXQiLCJub3ciLCJleHBpcmVzIiwidXNlclNjaGVtYSIsImVtYWlsIiwiaW5kZXgiLCJmdWxsTmFtZSIsInByb2ZpbGVJbWciLCJwYXNzd29yZCIsInJlZnJlc2hUb2tlbiIsInJlc2V0IiwiVHlwZXMiLCJOdW1iZXIiLCJyZWYiLCJVc2VyIiwiVXNlclJlcG9zaXRvcnkiLCJVc2VyU2VlZGVyIiwidXNlckRJS2V5cyIsInNlZWRlciIsInVzZXJSZXBvc2l0b3J5Iiwicm9sZVJlcG9zaXRvcnkiLCJyb2xlcyIsImhhc2hQYXNzd29yZCIsIl9jcmVhdGVSb2xlIiwiZXhpc3RpbmdSb2xlcyIsImV4aXN0aW5nUm9sZU5hbWVzIiwicm9sZXNUb0NyZWF0ZSIsIm1hcCIsImZpbHRlciIsImluY2x1ZGVzIiwibGVuZ3RoIiwiY3JlYXRlTWFueSIsImNyZWF0ZVJvbGUiLCJfY3JlYXRlQWRtaW4iLCJmaW5kT25lIiwiY3JlYXRlQWRtaW4iLCJzd2FnZ2VyU3BlYyIsInN3YWdnZXJVaSIsImNvb2tpZVBhcnNlciIsImNvcnMiLCJyYXRlTGltaXQiLCJhcGlQcmVmaXgiLCJiYXNlUmVzcG9uc2VNaWRkbGV3YXJlIiwiZXJyb3JIYW5kbGVyTWlkZGxld2FyZSIsImFwcCIsInVzZSIsIndpbmRvd01zIiwibGltaXQiLCJzdGFuZGFyZEhlYWRlcnMiLCJsZWdhY3lIZWFkZXJzIiwic2V0IiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwianNvbiIsImRpc2FibGUiLCJzZXJ2ZSIsInNldHVwIiwiYmNyeXB0IiwiX2hhc2hQYXNzd29yZCIsInNhbHQiLCJnZW5TYWx0IiwiaGFzaCIsInNjaGVtYSIsIm9wdGlvbnMiLCJFcnJvciIsImZpZWxkT3B0aW9ucyIsIl9vYmplY3RTcHJlYWQiLCJhZGQiLCJfZGVmaW5lUHJvcGVydHkiLCJwcmUiLCJfdGhpcyIsImlzTmV3IiwiY29uc3RydWN0b3IiLCJzb3J0IiwidGhlbiIsImxhc3RSZWNvcmQiLCJkb2NzIiwibGFzdENvdW50IiwiZm9yRWFjaCIsImRvYyIsImhyZWYiLCJyZXF1aXJlIiwidXJsIiwicHVibGljSWQiLCJzaXplIiwicGhvbmVOdW1iZXIiLCJjcmVhdGVEYkNvbm5lY3Rpb24iLCJfY3JlYXRlRGJDb25uZWN0aW9uIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJDT05ORUNUSU9OX1NUUklORyIsImNvbnNvbGUiLCJsb2ciLCJ0MCIsImNvbmZpZyIsInBhdGgiLCJOT0RFX0VOViIsIm92ZXJyaWRlIiwic3dhZ2dlckpzZG9jIiwiZGVmaW5pdGlvbiIsIm9wZW5hcGkiLCJpbmZvIiwidmVyc2lvbiIsImRlc2NyaXB0aW9uIiwic2VydmVycyIsImFwaXMiLCJzZWVkIiwidXNlclNlZWRlciIsIlByb21pc2UiLCJhbGwiLCJEaUNvbnRhaW5lciIsImRlcGVuZGVuY2llcyIsIm5hbWUiLCJmdW5jIiwiQXJyYXkiLCJpc0FycmF5IiwiX3RoaXMkZGVwZW5kZW5jaWVzJG5hIiwiZGVwZW5kZW5jaWVzSW5zdGFuY2VzIiwiZGVwZW5kZW5jeSIsIl90b0NvbnN1bWFibGVBcnJheSIsInByb3BzIiwiQkFEX1JFUVVFU1QiLCJBUElFcnJvciIsInJlcXVlc3QiLCJyZXNwb25zZSIsInN0YXR1c0NvZGUiLCJnZXRSZWFzb25QaHJhc2UiLCJkZXRhaWxzIiwiX3JlZiRzdGF0dXMiLCJfcmVmMiIsIl9yZWYyJHN0YXR1cyIsIl9yZWYyJGRldGFpbHMiLCJfRXJyb3IiLCJfd3JhcE5hdGl2ZVN1cGVyIiwiaWQiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsIl9kZWxldGUiLCJmaW5kQnlJZEFuZERlbGV0ZSIsImZpbmRCeUlkIiwicXVlcnkiLCJjb3VudCIsImNvdW50RG9jdW1lbnRzIiwiYWdncmVnYXRlIiwicGlwZWxpbmUiLCJpbnNlcnRNYW55IiwidXBkYXRlTWFueSIsImJ1bGtXcml0ZSIsIm9wZXJhdGlvbnMiLCJfdXBzZXJ0IiwiZmluZERhdGEiLCJ1cHNlcnQiLCJjcmVhdGVTZXJ2ZXIiLCJzZXJ2ZXIiLCJQT1JUIiwibGlzdGVuIl0sInNvdXJjZVJvb3QiOiIifQ==