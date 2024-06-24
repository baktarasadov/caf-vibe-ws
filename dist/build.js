/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
app.use("/api-docs", _core_config_swagger_config__WEBPACK_IMPORTED_MODULE_0__.swaggerUi.serve, _core_config_swagger_config__WEBPACK_IMPORTED_MODULE_0__.swaggerUi.setup(_core_config_swagger_config__WEBPACK_IMPORTED_MODULE_0__.swaggerSpec));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var BaseRepository = /*#__PURE__*/function () {
  function BaseRepository(model) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BaseRepository);
    this.model = model;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BaseRepository, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7RUFBQSxPQUFBdkIsc0VBQUEsVUFBQXlCLFVBQUFDLFNBQUE7SUFBQSxrQkFBQUEsU0FBQSxDQUFBakIsSUFBQSxHQUFBaUIsU0FBQSxDQUFBaEIsSUFBQTtNQUFBO1FBQUFnQixTQUFBLENBQUFoQixJQUFBO1FBQUEsT0FDT29FLDBFQUFrQixDQUFDLENBQUM7TUFBQTtRQUFBcEQsU0FBQSxDQUFBaEIsSUFBQTtRQUFBLE9BQ3BCNEYsbURBQUksQ0FBQyxDQUFDO01BQUE7UUFDWmlDLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDRCxJQUFJLGVBQUF6SSw4RUFBQSxlQUFBQyxzRUFBQSxDQUFFLFNBQUFFLFFBQUE7VUFBQSxPQUFBRixzRUFBQSxVQUFBTyxTQUFBQyxRQUFBO1lBQUEsa0JBQUFBLFFBQUEsQ0FBQUMsSUFBQSxHQUFBRCxRQUFBLENBQUFFLElBQUE7Y0FBQTtnQkFDbEIwRSxPQUFPLENBQUNDLEdBQUcsd0NBQUE0QixNQUFBLENBQXdDdUIsSUFBSSxDQUFFLENBQUM7Y0FBQztjQUFBO2dCQUFBLE9BQUFoSSxRQUFBLENBQUFVLElBQUE7WUFBQTtVQUFBLEdBQUFoQixPQUFBO1FBQUEsQ0FDNUQsR0FBQztNQUFDO01BQUE7UUFBQSxPQUFBd0IsU0FBQSxDQUFBUixJQUFBO0lBQUE7RUFBQSxHQUFBSyxRQUFBO0FBQUEsQ0FDSixHQUFFLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9yb2xlL21vZGVsL3JvbGUubW9kZWwuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL3JvbGUvcm9sZS5kaS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvcm9sZS9yb2xlLnJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL3VzZXIvbW9kZWwvcGFzc3dvcmQtcmVzZXQuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL3VzZXIvbW9kZWwvcmVmcmVzaC10b2tlbi5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvdXNlci9tb2RlbC91c2VyLm1vZGVsLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS91c2VyL3VzZXIuZGkuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL3VzZXIvdXNlci5yZXBvc2l0b3J5LmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS91c2VyL3VzZXIuc2VlZGVyLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb21tb24vY29uc3RhbnRzL3JvbGUuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29tbW9uL2hlbHBlcnMvaGFzaC1wYXNzd29yZC5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb21tb24vbW9uZ29vc2UvcGx1Z2lucy9hdXRvLWluY3JlbWVudC5wbHVnaW4uanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29tbW9uL3NjaGVtYS9tb2RlbC9jb250YWN0LW1vZGVsLnNjaGVtYS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL2NvbmZpZy9kYi5jb25maWcuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29yZS9jb25maWcvZW52LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL2NvbmZpZy9zd2FnZ2VyLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL2RiL3NlZWQuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29yZS9kaS9kaS1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvc2hhcmVkL3JlcG9zaXRvcnkvYmFzZS5yZXBvc2l0b3J5LmpzIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcImNvb2tpZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcImNvcnNcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudlwiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzcy1yYXRlLWxpbWl0XCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJtb25nb29zZVwiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwic3dhZ2dlci1qc2RvY1wiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwic3dhZ2dlci11aS1leHByZXNzXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImh0dHBcIiIsIndlYnBhY2s6Ly9jZi13cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jZi13cy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jZi13cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2Ytd3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jZi13cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NmLXdzLy4vc3JjL3NlcnZlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0b0luY3JlbWVudFBsdWdpbiBmcm9tIFwiQC9jb21tb24vbW9uZ29vc2UvcGx1Z2lucy9hdXRvLWluY3JlbWVudC5wbHVnaW5cIjtcbmltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3Qgcm9sZVNjaGVtYSA9IG5ldyBTY2hlbWEoXG4gIHtcbiAgICByb2xlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB1bmlxdWU6IHRydWUsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHRyaW06IHRydWUsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGNvbGxlY3Rpb246IFwicm9sZXNcIixcbiAgICB2ZXJzaW9uS2V5OiBmYWxzZSxcbiAgfSxcbikucGx1Z2luKGF1dG9JbmNyZW1lbnRQbHVnaW4sIHsgaW5jRmllbGQ6IFwiX2lkXCIgfSk7XG5cbmNvbnN0IFJvbGUgPSBtb25nb29zZS5tb2RlbChcIlJvbGVcIiwgcm9sZVNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IFJvbGU7XG4iLCJpbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiQC9jb3JlL2RpL2RpLWNvbnRhaW5lclwiO1xuXG5pbXBvcnQgeyBSb2xlUmVwb3NpdG9yeSB9IGZyb20gXCIuL3JvbGUucmVwb3NpdG9yeVwiO1xuXG5leHBvcnQgY29uc3Qgcm9sZURJS2V5cyA9IHtcbiAgcmVwb3NpdG9yeTogXCJyb2xlLXJlcG9zaXRvcnlcIixcbn07XG5cbmNvbnRhaW5lci5yZWdpc3Rlcihyb2xlRElLZXlzLnJlcG9zaXRvcnksIFtdLCAoKSA9PiBuZXcgUm9sZVJlcG9zaXRvcnkoKSk7XG4iLCJpbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gXCJAL3NoYXJlZC9yZXBvc2l0b3J5L2Jhc2UucmVwb3NpdG9yeVwiO1xuXG5pbXBvcnQgUm9sZSBmcm9tIFwiLi9tb2RlbC9yb2xlLm1vZGVsXCI7XG5cbmV4cG9ydCBjbGFzcyBSb2xlUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUm9sZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgY29uc3QgcGFzc3dvcmRSZXNldFNjaGVtYSA9IG5ldyBTY2hlbWEoXG4gIHtcbiAgICBjb2RlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgIH0sXG4gICAgdGltZToge1xuICAgICAgdHlwZTogRGF0ZSxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIF9pZDogZmFsc2UsXG4gIH0sXG4pO1xuIiwiaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmV4cG9ydCBjb25zdCByZWZyZXNoVG9rZW5TY2hlbWEgPSBuZXcgU2NoZW1hKFxuICB7XG4gICAgdG9rZW46IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICAgIGNyZWF0ZWRBdDoge1xuICAgICAgdHlwZTogRGF0ZSxcbiAgICAgIGRlZmF1bHQ6IERhdGUubm93LFxuICAgICAgZXhwaXJlczogXCIxNWRcIixcbiAgICB9LFxuICB9LFxuICB7XG4gICAgX2lkOiBmYWxzZSxcbiAgfSxcbik7XG4iLCJpbXBvcnQgeyBjb250YWN0U2NoZW1hIH0gZnJvbSBcIkAvY29tbW9uL3NjaGVtYS9tb2RlbC9jb250YWN0LW1vZGVsLnNjaGVtYVwiO1xuaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5pbXBvcnQgeyBwYXNzd29yZFJlc2V0U2NoZW1hIH0gZnJvbSBcIi4vcGFzc3dvcmQtcmVzZXRcIjtcbmltcG9ydCB7IHJlZnJlc2hUb2tlblNjaGVtYSB9IGZyb20gXCIuL3JlZnJlc2gtdG9rZW5cIjtcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoXG4gIHtcbiAgICBlbWFpbDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgfSxcbiAgICBmdWxsTmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB0cmltOiB0cnVlLFxuICAgIH0sXG4gICAgcHJvZmlsZUltZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdHJpbTogdHJ1ZSB9LFxuICAgIGNvbnRhY3Q6IGNvbnRhY3RTY2hlbWEsXG4gICAgcmVmcmVzaFRva2VuOiByZWZyZXNoVG9rZW5TY2hlbWEsXG4gICAgcmVzZXQ6IHBhc3N3b3JkUmVzZXRTY2hlbWEsXG4gICAgcm9sZTogeyB0eXBlOiBTY2hlbWEuVHlwZXMuTnVtYmVyLCByZWY6IFwiUm9sZVwiLCByZXF1aXJlZDogdHJ1ZSB9LFxuICB9LFxuICB7XG4gICAgY29sbGVjdGlvbjogXCJ1c2Vyc1wiLFxuICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gIH0sXG4pO1xuXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWwoXCJVc2VyXCIsIHVzZXJTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIkAvY29yZS9kaS9kaS1jb250YWluZXJcIjtcblxuaW1wb3J0IHsgcm9sZURJS2V5cyB9IGZyb20gXCIuLi9yb2xlL3JvbGUuZGlcIjtcbmltcG9ydCB7IFVzZXJSZXBvc2l0b3J5IH0gZnJvbSBcIi4vdXNlci5yZXBvc2l0b3J5XCI7XG5pbXBvcnQgeyBVc2VyU2VlZGVyIH0gZnJvbSBcIi4vdXNlci5zZWVkZXJcIjtcblxuZXhwb3J0IGNvbnN0IHVzZXJESUtleXMgPSB7XG4gIHNlcnZpY2U6IFwidXNlci1zZXJ2aWNlXCIsXG4gIHJlcG9zaXRvcnk6IFwidXNlci1yZXBvc2l0b3J5XCIsXG4gIHNlZWRlcjogXCJ1c2VyLXNlZWRlclwiLFxufTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKHVzZXJESUtleXMucmVwb3NpdG9yeSwgW10sICgpID0+IG5ldyBVc2VyUmVwb3NpdG9yeSgpKTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKFxuICB1c2VyRElLZXlzLnNlZWRlcixcbiAgW3VzZXJESUtleXMucmVwb3NpdG9yeSwgcm9sZURJS2V5cy5yZXBvc2l0b3J5XSxcbiAgKHVzZXJSZXBvc2l0b3J5LCByb2xlUmVwb3NpdG9yeSkgPT5cbiAgICBuZXcgVXNlclNlZWRlcih1c2VyUmVwb3NpdG9yeSwgcm9sZVJlcG9zaXRvcnkpLFxuKTtcbiIsImltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSBcIkAvc2hhcmVkL3JlcG9zaXRvcnkvYmFzZS5yZXBvc2l0b3J5XCI7XG5cbmltcG9ydCBVc2VyIGZyb20gXCIuL21vZGVsL3VzZXIubW9kZWxcIjtcblxuZXhwb3J0IGNsYXNzIFVzZXJSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihVc2VyKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcm9sZXMgfSBmcm9tIFwiQC9jb21tb24vY29uc3RhbnRzL3JvbGVcIjtcbmltcG9ydCBoYXNoUGFzc3dvcmQgZnJvbSBcIkAvY29tbW9uL2hlbHBlcnMvaGFzaC1wYXNzd29yZFwiO1xuXG5leHBvcnQgY2xhc3MgVXNlclNlZWRlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXJSZXBvc2l0b3J5LCByb2xlUmVwb3NpdG9yeSkge1xuICAgIHRoaXMudXNlclJlcG9zaXRvcnkgPSB1c2VyUmVwb3NpdG9yeTtcbiAgICB0aGlzLnJvbGVSZXBvc2l0b3J5ID0gcm9sZVJlcG9zaXRvcnk7XG4gIH1cblxuICBhc3luYyBjcmVhdGVSb2xlKCkge1xuICAgIGNvbnN0IGV4aXN0aW5nUm9sZXMgPSBhd2FpdCB0aGlzLnJvbGVSZXBvc2l0b3J5LmZpbmRBbGwoKTtcbiAgICBjb25zdCBleGlzdGluZ1JvbGVOYW1lcyA9IGV4aXN0aW5nUm9sZXMubWFwKChyb2xlKSA9PiByb2xlLnJvbGUpO1xuXG4gICAgY29uc3Qgcm9sZXNUb0NyZWF0ZSA9IHJvbGVzLmZpbHRlcihcbiAgICAgIChyb2xlKSA9PiAhZXhpc3RpbmdSb2xlTmFtZXMuaW5jbHVkZXMocm9sZS5yb2xlKSxcbiAgICApO1xuXG4gICAgaWYgKHJvbGVzVG9DcmVhdGUubGVuZ3RoID4gMCkge1xuICAgICAgYXdhaXQgdGhpcy5yb2xlUmVwb3NpdG9yeS5jcmVhdGVNYW55KHJvbGVzVG9DcmVhdGUpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZUFkbWluKCkge1xuICAgIGF3YWl0IHRoaXMuY3JlYXRlUm9sZSgpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnVzZXJSZXBvc2l0b3J5LmZpbmRPbmUoeyByb2xlOiAxIH0pO1xuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBjb25zdCBwYXNzd29yZCA9IGF3YWl0IGhhc2hQYXNzd29yZChcImJha3RhcmFkbWluXCIpO1xuXG4gICAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS5jcmVhdGUoe1xuICAgICAgICBlbWFpbDogXCJiYWt0YXJhZG1pbkBnbWFpbC5jb21cIixcbiAgICAgICAgZnVsbE5hbWU6IFwiYmFrdGFyIGFkbWluXCIsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgICByb2xlOiAxLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCB7IHN3YWdnZXJTcGVjLCBzd2FnZ2VyVWkgfSBmcm9tIFwiQC9jb3JlL2NvbmZpZy9zd2FnZ2VyLmNvbmZpZ1wiO1xuaW1wb3J0IFwiQC9jb3JlL2RpL2RpLWdsb2JhbHNcIjtcbmltcG9ydCBjb29raWVQYXJzZXIgZnJvbSBcImNvb2tpZS1wYXJzZXJcIjtcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgcmF0ZUxpbWl0IH0gZnJvbSBcImV4cHJlc3MtcmF0ZS1saW1pdFwiO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoXG4gIHJhdGVMaW1pdCh7XG4gICAgd2luZG93TXM6IDEwICogNjAgKiAxMDAwLFxuICAgIGxpbWl0OiAxMDAsXG4gICAgc3RhbmRhcmRIZWFkZXJzOiBcImRyYWZ0LTZcIixcbiAgICBsZWdhY3lIZWFkZXJzOiBmYWxzZSxcbiAgICBtZXNzYWdlOiBcIlRvbyBtYW55IHJlcXVlc3RzXCIsXG4gIH0pLFxuKTtcbmFwcC5zZXQoXCJ0cnVzdCBwcm94eVwiLCAxKTtcbmFwcC51c2UoY29va2llUGFyc2VyKCkpO1xuYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcbmFwcC51c2UoY29ycygpKTtcbmFwcC5kaXNhYmxlKFwieC1wb3dlcmVkLWJ5XCIpO1xuYXBwLnVzZShcIi9hcGktZG9jc1wiLCBzd2FnZ2VyVWkuc2VydmUsIHN3YWdnZXJVaS5zZXR1cChzd2FnZ2VyU3BlYykpO1xuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIiwiZXhwb3J0IGNvbnN0IHJvbGVzID0gW3sgcm9sZTogXCJhZG1pblwiIH0sIHsgcm9sZTogXCJ1c2VyXCIgfV07XG4iLCJpbXBvcnQgKiBhcyBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYXNoUGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0KDEwKTtcblxuICByZXR1cm4gYmNyeXB0Lmhhc2gocGFzc3dvcmQsIHNhbHQpO1xufVxuIiwiLyoqXG4gKiBAZGVzY3JpcHRpb24gTW9uZ29vc2UgcGx1Z2luIHRvIGF1dG8gaW5jcmVtZW50IGEgZmllbGRcbiAqIEBwYXJhbSB7TW9uZ29vc2UuU2NoZW1hfSBzY2hlbWFcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dG9JbmNyZW1lbnRQbHVnaW4oc2NoZW1hLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucy5pbmNGaWVsZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBzcGVjaWZ5IGluY0ZpZWxkIVwiKTtcbiAgfVxuXG4gIGxldCBmaWVsZE9wdGlvbnMgPSB7XG4gICAgdHlwZTogTnVtYmVyLFxuICB9O1xuXG4gIGlmIChvcHRpb25zLmluY0ZpZWxkICE9PSBcIl9pZFwiKSB7XG4gICAgZmllbGRPcHRpb25zID0ge1xuICAgICAgLi4uZmllbGRPcHRpb25zLFxuICAgICAgdW5pcXVlOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICBzY2hlbWEuYWRkKHtcbiAgICBbb3B0aW9ucy5pbmNGaWVsZF06IGZpZWxkT3B0aW9ucyxcbiAgfSk7XG5cbiAgc2NoZW1hLnByZShcInNhdmVcIiwgZnVuY3Rpb24gKG5leHQpIHtcbiAgICBpZiAodGhpcy5pc05ldykge1xuICAgICAgdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICAuZmluZE9uZSh7fSwge30sIHsgc29ydDogeyBbb3B0aW9ucy5pbmNGaWVsZF06IC0xIH0gfSlcbiAgICAgICAgLnRoZW4oKGxhc3RSZWNvcmQpID0+IHtcbiAgICAgICAgICB0aGlzW29wdGlvbnMuaW5jRmllbGRdID0gbGFzdFJlY29yZFxuICAgICAgICAgICAgPyBsYXN0UmVjb3JkW29wdGlvbnMuaW5jRmllbGRdICsgMVxuICAgICAgICAgICAgOiAxO1xuXG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgc2NoZW1hLnByZShcImluc2VydE1hbnlcIiwgYXN5bmMgZnVuY3Rpb24gKG5leHQsIGRvY3MpIHtcbiAgICBjb25zdCBsYXN0UmVjb3JkID0gYXdhaXQgdGhpcy5maW5kT25lKFxuICAgICAge30sXG4gICAgICB7fSxcbiAgICAgIHsgc29ydDogeyBbb3B0aW9ucy5pbmNGaWVsZF06IC0xIH0gfSxcbiAgICApO1xuXG4gICAgY29uc3QgbGFzdENvdW50ID0gbGFzdFJlY29yZCA/IGxhc3RSZWNvcmRbb3B0aW9ucy5pbmNGaWVsZF0gOiAwO1xuXG4gICAgZG9jcy5mb3JFYWNoKChkb2MsIGluZGV4KSA9PiB7XG4gICAgICBkb2Nbb3B0aW9ucy5pbmNGaWVsZF0gPSBsYXN0Q291bnQgKyBpbmRleCArIDE7XG4gICAgfSk7XG5cbiAgICBuZXh0KCk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgY29uc3QgY29udGFjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICBlbWFpbDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdW5pcXVlOiB0cnVlLFxuICAgIH0sXG4gICAgcGhvbmVOdW1iZXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgX2lkOiBmYWxzZSxcbiAgfSxcbik7XG4iLCJpbXBvcnQgXCJAL2NvcmUvY29uZmlnL2Vudi5jb25maWdcIjtcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURiQ29ubmVjdGlvbigpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52LkNPTk5FQ1RJT05fU1RSSU5HKTtcbiAgICBjb25zb2xlLmxvZyhcIk1vbmdvREIgQ29ubmVjdGVkXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJNb25nb0RCIENvbm5lY3Rpb24gRXJyb3I6XCIsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcImRvdGVudlwiO1xuXG5jb25maWcoKTtcblxuY29uZmlnKHtcbiAgcGF0aDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiA/IFwiLmVudi5sb2NhbFwiIDogXCIuZW52XCIsXG4gIG92ZXJyaWRlOiB0cnVlLFxufSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCBzd2FnZ2VySnNkb2MgZnJvbSBcInN3YWdnZXItanNkb2NcIjtcbmltcG9ydCBzd2FnZ2VyVWkgZnJvbSBcInN3YWdnZXItdWktZXhwcmVzc1wiO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICBkZWZpbml0aW9uOiB7XG4gICAgb3BlbmFwaTogXCIzLjAuMFwiLFxuICAgIGluZm86IHtcbiAgICAgIHRpdGxlOiBcIkNBRi1WaWJlIENvZmZlZSBTaG9wIEFQSVwiLFxuICAgICAgdmVyc2lvbjogXCIxLjAuMFwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQ0FGLVZpYmUgQ29mZmVlIFNob3AgQVBJIGRvY3VtZW50YXRpb25cIixcbiAgICB9LFxuICAgIHNlcnZlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMFwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBhcGlzOiBbXCIuL3NyYy9hcGkvKi5qc1wiXSxcbn07XG5cbmNvbnN0IHN3YWdnZXJTcGVjID0gc3dhZ2dlckpzZG9jKG9wdGlvbnMpO1xuXG5leHBvcnQgeyBzd2FnZ2VyU3BlYywgc3dhZ2dlclVpIH07XG4iLCJpbXBvcnQgeyByb2xlRElLZXlzIH0gZnJvbSBcIkAvYXBpL3JvbGUvcm9sZS5kaVwiO1xuaW1wb3J0IHsgdXNlckRJS2V5cyB9IGZyb20gXCJAL2FwaS91c2VyL3VzZXIuZGlcIjtcbmltcG9ydCB7IFVzZXJTZWVkZXIgfSBmcm9tIFwiQC9hcGkvdXNlci91c2VyLnNlZWRlclwiO1xuXG5pbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiLi4vZGkvZGktY29udGFpbmVyXCI7XG5cbmV4cG9ydCBjb25zdCBzZWVkID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB1c2VyU2VlZGVyID0gbmV3IFVzZXJTZWVkZXIoXG4gICAgY29udGFpbmVyLmdldCh1c2VyRElLZXlzLnJlcG9zaXRvcnkpLFxuICAgIGNvbnRhaW5lci5nZXQocm9sZURJS2V5cy5yZXBvc2l0b3J5KSxcbiAgKTtcblxuICBhd2FpdCBQcm9taXNlLmFsbChbdXNlclNlZWRlci5jcmVhdGVBZG1pbigpXSk7XG59O1xuIiwiLyoqXG4gKiBEZXBlbmRlbmN5IEluamVjdGlvbiBDb250YWluZXJcbiAqIEBjbGFzcyBEaUNvbnRhaW5lclxuICogQGRlc2NyaXB0aW9uIEEgc2ltcGxlIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGNvbnRhaW5lciB0aGF0IGFsbG93cyB5b3UgdG8gcmVnaXN0ZXJcbiAqIGFuZCBnZXQgZGVwZW5kZW5jaWVzXG4gKiBAZXhhbXBsZVxuICogY29uc3QgY29udGFpbmVyID0gbmV3IERpQ29udGFpbmVyKCk7XG4gKiBjb250YWluZXIucmVnaXN0ZXIoXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIiwgW10sICgpID0+IG5ldyBMYW5kaW5nUGFnZVJlcG9zaXRvcnkoKSk7XG4gKiBjb250YWluZXIucmVnaXN0ZXIoXG4gKiAgXCJMYW5kaW5nUGFnZVNlcnZpY2VcIixcbiAqICBbXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIl0sXG4gKiAgKGxhbmRpbmdQYWdlUmVwb3NpdG9yeSkgPT4gbmV3IExhbmRpbmdQYWdlU2VydmljZShsYW5kaW5nUGFnZVJlcG9zaXRvcnkpLFxuICogKTtcbiAqXG4gKiBjb25zdCBsYW5kaW5nUGFnZVNlcnZpY2UgPSBjb250YWluZXIuZ2V0KFwiTGFuZGluZ1BhZ2VTZXJ2aWNlXCIpO1xuICovXG5jbGFzcyBEaUNvbnRhaW5lciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGVwZW5kZW5jaWVzID0ge307XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBkZXBlbmRlbmN5XG4gICAqIEBwYXJhbSBuYW1lIC0gTmFtZSBvZiB0aGUgZGVwZW5kZW5jeSAoZXg6IFwiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCIpXG4gICAqIEBwYXJhbSBkZXBlbmRlbmNpZXMgLSBBcnJheSBvZiBkZXBlbmRlbmNpZXMgKGV4OiBbXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIl0pXG4gICAqIEBwYXJhbSBmdW5jIC0gRnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBkZXBlbmRlbmN5XG4gICAqL1xuICByZWdpc3RlcihuYW1lLCBkZXBlbmRlbmNpZXMsIGZ1bmMpIHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fFxuICAgICAgIUFycmF5LmlzQXJyYXkoZGVwZW5kZW5jaWVzKSB8fFxuICAgICAgdHlwZW9mIGZ1bmMgIT09IFwiZnVuY3Rpb25cIlxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhcmd1bWVudFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlcGVuZGVuY2llc1tuYW1lXSA9IHtcbiAgICAgIGRlcGVuZGVuY2llcyxcbiAgICAgIGZ1bmMsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBkZXBlbmRlbmN5XG4gICAqIEBwYXJhbSBuYW1lIC0gTmFtZSBvZiB0aGUgZGVwZW5kZW5jeSAoZXg6IFwiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCIpXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXQobmFtZSkge1xuICAgIGlmICghdGhpcy5kZXBlbmRlbmNpZXNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRGVwZW5kZW5jeSBub3QgZm91bmQ6ICR7bmFtZX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGRlcGVuZGVuY2llcywgZnVuYyB9ID0gdGhpcy5kZXBlbmRlbmNpZXNbbmFtZV07XG5cbiAgICBjb25zdCBkZXBlbmRlbmNpZXNJbnN0YW5jZXMgPSBkZXBlbmRlbmNpZXMubWFwKChkZXBlbmRlbmN5KSA9PlxuICAgICAgdGhpcy5nZXQoZGVwZW5kZW5jeSksXG4gICAgKTtcblxuICAgIHJldHVybiBmdW5jKC4uLmRlcGVuZGVuY2llc0luc3RhbmNlcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lciA9IG5ldyBEaUNvbnRhaW5lcigpO1xuIiwiZXhwb3J0IGNsYXNzIEJhc2VSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IobW9kZWwpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIH1cblxuICBjcmVhdGUoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmNyZWF0ZShkYXRhKTtcbiAgfVxuXG4gIHVwZGF0ZShpZCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmRCeUlkQW5kVXBkYXRlKGlkLCBkYXRhLCB7XG4gICAgICBuZXc6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBkZWxldGUoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kQnlJZEFuZERlbGV0ZShpZCk7XG4gIH1cblxuICBmaW5kQnlJZChpZCkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmRCeUlkKGlkKTtcbiAgfVxuXG4gIGZpbmRBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZCgpO1xuICB9XG5cbiAgZmluZE9uZShxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmRPbmUocXVlcnkpO1xuICB9XG5cbiAgZmluZChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmQocXVlcnkpO1xuICB9XG5cbiAgY291bnQocXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5jb3VudERvY3VtZW50cyhxdWVyeSk7XG4gIH1cblxuICBhZ2dyZWdhdGUocGlwZWxpbmUpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5hZ2dyZWdhdGUocGlwZWxpbmUpO1xuICB9XG5cbiAgY3JlYXRlTWFueShkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuaW5zZXJ0TWFueShkYXRhKTtcbiAgfVxuXG4gIHVwZGF0ZU1hbnkocXVlcnksIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC51cGRhdGVNYW55KHF1ZXJ5LCBkYXRhKTtcbiAgfVxuXG4gIGJ1bGtXcml0ZShvcGVyYXRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuYnVsa1dyaXRlKG9wZXJhdGlvbnMpO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWUtcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1yYXRlLWxpbWl0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3YWdnZXItanNkb2NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dhZ2dlci11aS1leHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIkAvY29yZS9jb25maWcvZW52LmNvbmZpZ1wiO1xuaW1wb3J0IHsgY3JlYXRlU2VydmVyIH0gZnJvbSBcImh0dHBcIjtcblxuaW1wb3J0IGFwcCBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCB7IGNyZWF0ZURiQ29ubmVjdGlvbiB9IGZyb20gXCIuL2NvcmUvY29uZmlnL2RiLmNvbmZpZ1wiO1xuaW1wb3J0IHsgc2VlZCB9IGZyb20gXCIuL2NvcmUvZGIvc2VlZFwiO1xuXG5jb25zdCBzZXJ2ZXIgPSBjcmVhdGVTZXJ2ZXIoYXBwKTtcbmNvbnN0IHsgUE9SVCB9ID0gcHJvY2Vzcy5lbnY7XG5cbihhc3luYyAoKSA9PiB7XG4gIGF3YWl0IGNyZWF0ZURiQ29ubmVjdGlvbigpO1xuICBhd2FpdCBzZWVkKCk7XG4gIHNlcnZlci5saXN0ZW4oUE9SVCwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgaXMgcnVubmluZzogaHR0cDovL2xvY2FsaG9zdDoke1BPUlR9YCk7XG4gIH0pO1xufSkoKTtcbiJdLCJuYW1lcyI6WyJhdXRvSW5jcmVtZW50UGx1Z2luIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJyb2xlU2NoZW1hIiwicm9sZSIsInR5cGUiLCJTdHJpbmciLCJ1bmlxdWUiLCJyZXF1aXJlZCIsInRyaW0iLCJjb2xsZWN0aW9uIiwidmVyc2lvbktleSIsInBsdWdpbiIsImluY0ZpZWxkIiwiUm9sZSIsIm1vZGVsIiwiY29udGFpbmVyIiwiUm9sZVJlcG9zaXRvcnkiLCJyb2xlRElLZXlzIiwicmVwb3NpdG9yeSIsInJlZ2lzdGVyIiwiQmFzZVJlcG9zaXRvcnkiLCJfQmFzZVJlcG9zaXRvcnkiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwicGFzc3dvcmRSZXNldFNjaGVtYSIsImNvZGUiLCJ0aW1lIiwiRGF0ZSIsIl9pZCIsInJlZnJlc2hUb2tlblNjaGVtYSIsInRva2VuIiwiY3JlYXRlZEF0Iiwibm93IiwiZXhwaXJlcyIsImNvbnRhY3RTY2hlbWEiLCJ1c2VyU2NoZW1hIiwiZW1haWwiLCJpbmRleCIsImZ1bGxOYW1lIiwicHJvZmlsZUltZyIsInBhc3N3b3JkIiwiY29udGFjdCIsInJlZnJlc2hUb2tlbiIsInJlc2V0IiwiVHlwZXMiLCJOdW1iZXIiLCJyZWYiLCJ0aW1lc3RhbXBzIiwiVXNlciIsIlVzZXJSZXBvc2l0b3J5IiwiVXNlclNlZWRlciIsInVzZXJESUtleXMiLCJzZXJ2aWNlIiwic2VlZGVyIiwidXNlclJlcG9zaXRvcnkiLCJyb2xlUmVwb3NpdG9yeSIsInJvbGVzIiwiaGFzaFBhc3N3b3JkIiwia2V5IiwidmFsdWUiLCJfY3JlYXRlUm9sZSIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiZXhpc3RpbmdSb2xlcyIsImV4aXN0aW5nUm9sZU5hbWVzIiwicm9sZXNUb0NyZWF0ZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJmaW5kQWxsIiwic2VudCIsIm1hcCIsImZpbHRlciIsImluY2x1ZGVzIiwibGVuZ3RoIiwiY3JlYXRlTWFueSIsInN0b3AiLCJjcmVhdGVSb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfY3JlYXRlQWRtaW4iLCJfY2FsbGVlMiIsImRhdGEiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJmaW5kT25lIiwiYWJydXB0IiwiY3JlYXRlIiwiY3JlYXRlQWRtaW4iLCJzd2FnZ2VyU3BlYyIsInN3YWdnZXJVaSIsImNvb2tpZVBhcnNlciIsImNvcnMiLCJleHByZXNzIiwicmF0ZUxpbWl0IiwiYXBwIiwidXNlIiwid2luZG93TXMiLCJsaW1pdCIsInN0YW5kYXJkSGVhZGVycyIsImxlZ2FjeUhlYWRlcnMiLCJtZXNzYWdlIiwic2V0IiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwianNvbiIsImRpc2FibGUiLCJzZXJ2ZSIsInNldHVwIiwiYmNyeXB0IiwiX3giLCJfaGFzaFBhc3N3b3JkIiwic2FsdCIsImdlblNhbHQiLCJoYXNoIiwic2NoZW1hIiwib3B0aW9ucyIsIkVycm9yIiwiZmllbGRPcHRpb25zIiwiX29iamVjdFNwcmVhZCIsImFkZCIsIl9kZWZpbmVQcm9wZXJ0eSIsInByZSIsIl90aGlzIiwiaXNOZXciLCJjb25zdHJ1Y3RvciIsInNvcnQiLCJ0aGVuIiwibGFzdFJlY29yZCIsIl9yZWYiLCJkb2NzIiwibGFzdENvdW50IiwiZm9yRWFjaCIsImRvYyIsIl94MiIsInBob25lTnVtYmVyIiwiY3JlYXRlRGJDb25uZWN0aW9uIiwiX2NyZWF0ZURiQ29ubmVjdGlvbiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiQ09OTkVDVElPTl9TVFJJTkciLCJjb25zb2xlIiwibG9nIiwidDAiLCJlcnJvciIsImNvbmZpZyIsInBhdGgiLCJOT0RFX0VOViIsIm92ZXJyaWRlIiwic3dhZ2dlckpzZG9jIiwiZGVmaW5pdGlvbiIsIm9wZW5hcGkiLCJpbmZvIiwidGl0bGUiLCJ2ZXJzaW9uIiwiZGVzY3JpcHRpb24iLCJzZXJ2ZXJzIiwidXJsIiwiYXBpcyIsInNlZWQiLCJ1c2VyU2VlZGVyIiwiZ2V0IiwiUHJvbWlzZSIsImFsbCIsIkRpQ29udGFpbmVyIiwiZGVwZW5kZW5jaWVzIiwibmFtZSIsImZ1bmMiLCJBcnJheSIsImlzQXJyYXkiLCJjb25jYXQiLCJfdGhpcyRkZXBlbmRlbmNpZXMkbmEiLCJkZXBlbmRlbmNpZXNJbnN0YW5jZXMiLCJkZXBlbmRlbmN5IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwidXBkYXRlIiwiaWQiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsIl9kZWxldGUiLCJmaW5kQnlJZEFuZERlbGV0ZSIsImZpbmRCeUlkIiwiZmluZCIsInF1ZXJ5IiwiY291bnQiLCJjb3VudERvY3VtZW50cyIsImFnZ3JlZ2F0ZSIsInBpcGVsaW5lIiwiaW5zZXJ0TWFueSIsInVwZGF0ZU1hbnkiLCJidWxrV3JpdGUiLCJvcGVyYXRpb25zIiwiY3JlYXRlU2VydmVyIiwic2VydmVyIiwiUE9SVCIsImxpc3RlbiJdLCJzb3VyY2VSb290IjoiIn0=