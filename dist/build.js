/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/auth/auth.controller.js":
/*!*****************************************!*\
  !*** ./src/api/auth/auth.controller.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthController: () => (/* binding */ AuthController)
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
/* harmony import */ var _dto_auth_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dto/auth.dto */ "./src/api/auth/dto/auth.dto.js");






var AuthController = /*#__PURE__*/function () {
  function AuthController(authService) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, AuthController);
    this.authService = authService;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(AuthController, [{
    key: "register",
    value: function () {
      var _register = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(request, response) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.authService.register(request.body);
            case 2:
              data = _context.sent;
              response.success({
                message: "User register success",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.CREATED,
                data: new _dto_auth_dto__WEBPACK_IMPORTED_MODULE_5__.AuthDto(data)
              });
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function register(_x, _x2) {
        return _register.apply(this, arguments);
      }
      return register;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(request, response) {
        var user, accessToken;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.authService.login(request.body);
            case 2:
              user = _context2.sent;
              accessToken = ""; // generateToken(
              //   {
              //     id: user.id,
              //     login: user.login,
              //     role: user.role,
              //     entity: "User",
              //   },
              //   "2h",
              // );
              response.success({
                message: "User Login  success",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.OK,
                data: new _dto_auth_dto__WEBPACK_IMPORTED_MODULE_5__.AuthDto(user, accessToken)
              });
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function login(_x3, _x4) {
        return _login.apply(this, arguments);
      }
      return login;
    }()
  }]);
}();

/***/ }),

/***/ "./src/api/auth/auth.di.js":
/*!*********************************!*\
  !*** ./src/api/auth/auth.di.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authDIKeys: () => (/* binding */ authDIKeys)
/* harmony export */ });
/* harmony import */ var _core_di_di_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/di/di-container */ "./src/core/di/di-container.js");
/* harmony import */ var _user_user_di__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user.di */ "./src/api/user/user.di.js");
/* harmony import */ var _auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.controller */ "./src/api/auth/auth.controller.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/api/auth/auth.service.js");




var authDIKeys = {
  controller: "auth-controller",
  service: "auth-service"
};
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(authDIKeys.service, [_user_user_di__WEBPACK_IMPORTED_MODULE_1__.userDIKeys.service], function (userService) {
  return new _auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService(userService);
});
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(authDIKeys.controller, [authDIKeys.service], function (authService) {
  return new _auth_controller__WEBPACK_IMPORTED_MODULE_2__.AuthController(authService);
});

/***/ }),

/***/ "./src/api/auth/auth.route.js":
/*!************************************!*\
  !*** ./src/api/auth/auth.route.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_di_di_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/di/di-container */ "./src/core/di/di-container.js");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_di__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.di */ "./src/api/auth/auth.di.js");



var authRouter = express__WEBPACK_IMPORTED_MODULE_1___default().Router();
var prefix = "/auth";
var authController = _core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.get(_auth_di__WEBPACK_IMPORTED_MODULE_2__.authDIKeys.controller);
authRouter.post("".concat(prefix, "/login"), function (req, res) {
  return authController.login(req, res);
});
authRouter.post("".concat(prefix, "/register"), function (req, res) {
  return authController.register(req, res);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authRouter);

/***/ }),

/***/ "./src/api/auth/auth.service.js":
/*!**************************************!*\
  !*** ./src/api/auth/auth.service.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_helpers_generate_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/helpers/generate-token */ "./src/common/helpers/generate-token.js");
/* harmony import */ var _core_config_jwt_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/config/jwt.config */ "./src/core/config/jwt.config.js");






var AuthService = /*#__PURE__*/function () {
  function AuthService(userService) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, AuthService);
    this.userService = userService;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(AuthService, [{
    key: "register",
    value: function () {
      var _register = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(authRegisterDto) {
        var data, payload, token;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              authRegisterDto.role = 2;
              _context.next = 3;
              return this.userService.create(authRegisterDto);
            case 3:
              data = _context.sent;
              payload = {
                sub: data._id,
                email: data.contact.email
              };
              _context.next = 7;
              return this.createToken(payload);
            case 7:
              token = _context.sent;
              return _context.abrupt("return", {
                user: data,
                token: token
              });
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function register(_x) {
        return _register.apply(this, arguments);
      }
      return register;
    }()
  }, {
    key: "createToken",
    value: function () {
      var _createToken = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(payload) {
        var _config$jwt, accessSecret, accessExpiresIn, refreshSecret, refreshExpiresIn, accessToken, refreshToken;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _config$jwt = _core_config_jwt_config__WEBPACK_IMPORTED_MODULE_5__.config.jwt, accessSecret = _config$jwt.accessSecret, accessExpiresIn = _config$jwt.accessExpiresIn, refreshSecret = _config$jwt.refreshSecret, refreshExpiresIn = _config$jwt.refreshExpiresIn;
              _context2.next = 3;
              return (0,_common_helpers_generate_token__WEBPACK_IMPORTED_MODULE_4__.generateToken)(payload, accessSecret, accessExpiresIn);
            case 3:
              accessToken = _context2.sent;
              _context2.next = 6;
              return (0,_common_helpers_generate_token__WEBPACK_IMPORTED_MODULE_4__.generateToken)(payload, refreshSecret, refreshExpiresIn);
            case 6:
              refreshToken = _context2.sent;
              _context2.next = 9;
              return this.userService.update(payload.sub, {
                token: {
                  refresh: refreshToken
                }
              });
            case 9:
              return _context2.abrupt("return", {
                accessToken: accessToken,
                refreshToken: refreshToken
              });
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function createToken(_x2) {
        return _createToken.apply(this, arguments);
      }
      return createToken;
    }()
  }]);
}();

/***/ }),

/***/ "./src/api/auth/dto/auth.dto.js":
/*!**************************************!*\
  !*** ./src/api/auth/dto/auth.dto.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthDto: () => (/* binding */ AuthDto)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_user_dto_user_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/user/dto/user.dto */ "./src/api/user/dto/user.dto.js");
/* harmony import */ var _token_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token.dto */ "./src/api/auth/dto/token.dto.js");




var AuthDto = /*#__PURE__*/_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(function AuthDto(data) {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, AuthDto);
  this.token = new _token_dto__WEBPACK_IMPORTED_MODULE_3__.TokenDto(data.token);
  this.user = new _api_user_dto_user_dto__WEBPACK_IMPORTED_MODULE_2__.UserDto(data.user);
});

/***/ }),

/***/ "./src/api/auth/dto/token.dto.js":
/*!***************************************!*\
  !*** ./src/api/auth/dto/token.dto.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenDto: () => (/* binding */ TokenDto)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);


var TokenDto = /*#__PURE__*/_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(function TokenDto(data) {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TokenDto);
  this.access = data.accessToken;
  this.refresh = data.refreshToken;
});

/***/ }),

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
  function FooterService(footerRepository, storageService) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, FooterService);
    this.footerRepository = footerRepository;
    this.storageService = storageService;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(FooterService, [{
    key: "create",
    value: function () {
      var _create = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(footerDto, socialMediaIcons) {
        var data, uploadedsocialMediaIcons;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.footerRepository.findAll();
            case 2:
              data = _context.sent;
              uploadedsocialMediaIcons = [];
              if (!(data.length > 0)) {
                _context.next = 6;
                break;
              }
              throw _core_response_base_response__WEBPACK_IMPORTED_MODULE_4__.BaseResponse.error({
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_5__.StatusCodes.CONFLICT,
                message: "Footer already exists !"
              });
            case 6:
              if (!(socialMediaIcons && socialMediaIcons.length > 0)) {
                _context.next = 10;
                break;
              }
              _context.next = 9;
              return this.storageService.uploadFiles(socialMediaIcons);
            case 9:
              uploadedsocialMediaIcons = _context.sent;
            case 10:
              footerDto.socialMedia = uploadedsocialMediaIcons;
              return _context.abrupt("return", this.footerRepository.createFooter(footerDto));
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function create(_x, _x2) {
        return _create.apply(this, arguments);
      }
      return create;
    }()
  }, {
    key: "find",
    value: function () {
      var _find = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.footerRepository.findAll()[0]);
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function find() {
        return _find.apply(this, arguments);
      }
      return find;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(footerDto, files) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.footerRepository.find()[0];
            case 2:
              data = _context3.sent;
              if (data) {
                _context3.next = 5;
                break;
              }
              throw _core_response_base_response__WEBPACK_IMPORTED_MODULE_4__.BaseResponse.error({
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_5__.StatusCodes.NOT_FOUND,
                message: "Footer not found !"
              });
            case 5:
              return _context3.abrupt("return", data);
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function update(_x3, _x4) {
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
  socialMedia: [_common_schema_model_asset_model_schema__WEBPACK_IMPORTED_MODULE_0__.assetModelSchema]
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
/* harmony import */ var _role_seeder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role.seeder */ "./src/api/role/role.seeder.js");



var roleDIKeys = {
  repository: "role-repository",
  seeder: "role-seeder"
};
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(roleDIKeys.repository, [], function () {
  return new _role_repository__WEBPACK_IMPORTED_MODULE_1__.RoleRepository();
});
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(roleDIKeys.seeder, [roleDIKeys.repository], function (roleRepository) {
  return new _role_seeder__WEBPACK_IMPORTED_MODULE_2__.RoleSeeder(roleRepository);
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

/***/ "./src/api/role/role.seeder.js":
/*!*************************************!*\
  !*** ./src/api/role/role.seeder.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleSeeder: () => (/* binding */ RoleSeeder)
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





var RoleSeeder = /*#__PURE__*/function () {
  function RoleSeeder(roleRepository) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, RoleSeeder);
    this.roleRepository = roleRepository;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(RoleSeeder, [{
    key: "createRoles",
    value: function () {
      var _createRoles = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
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
      function createRoles() {
        return _createRoles.apply(this, arguments);
      }
      return createRoles;
    }()
  }]);
}();

/***/ }),

/***/ "./src/api/user/dto/user.dto.js":
/*!**************************************!*\
  !*** ./src/api/user/dto/user.dto.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserDto: () => (/* binding */ UserDto)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_schema_dto_contact_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/schema/dto/contact.dto */ "./src/common/schema/dto/contact.dto.js");



var UserDto = /*#__PURE__*/_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(function UserDto(data) {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, UserDto);
  this.fullName = data.fullName;
  this.profileImage = data.profileImage;
  this.role = data.role;
  this.contact = new _common_schema_dto_contact_dto__WEBPACK_IMPORTED_MODULE_2__.ContactDto(data.contact);
});

/***/ }),

/***/ "./src/api/user/model/password-reset-code.js":
/*!***************************************************!*\
  !*** ./src/api/user/model/password-reset-code.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   passwordResetCodeSchema: () => (/* binding */ passwordResetCodeSchema)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var passwordResetCodeSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
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
  refresh: {
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
/* harmony import */ var _password_reset_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-reset-code */ "./src/api/user/model/password-reset-code.js");
/* harmony import */ var _refresh_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./refresh-token */ "./src/api/user/model/refresh-token.js");




var userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_1__.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  profileImage: {
    type: String
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  contact: _common_schema_model_contact_model_schema__WEBPACK_IMPORTED_MODULE_0__.contactSchema,
  token: _refresh_token__WEBPACK_IMPORTED_MODULE_3__.refreshTokenSchema,
  passwordResetCodeSchema: _password_reset_code__WEBPACK_IMPORTED_MODULE_2__.passwordResetCodeSchema,
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
/* harmony import */ var _user_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.repository */ "./src/api/user/user.repository.js");
/* harmony import */ var _user_seeder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.seeder */ "./src/api/user/user.seeder.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/api/user/user.service.js");




var userDIKeys = {
  service: "user-service",
  repository: "user-repository",
  seeder: "user-seeder"
};
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(userDIKeys.repository, [], function () {
  return new _user_repository__WEBPACK_IMPORTED_MODULE_1__.UserRepository();
});
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(userDIKeys.seeder, [userDIKeys.repository], function (userRepository) {
  return new _user_seeder__WEBPACK_IMPORTED_MODULE_2__.UserSeeder(userRepository);
});
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(userDIKeys.service, [userDIKeys.repository], function (userRepository) {
  return new _user_service__WEBPACK_IMPORTED_MODULE_3__.UserService(userRepository);
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
/* harmony import */ var _common_helpers_hash_password__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/helpers/hash-password */ "./src/common/helpers/hash-password.js");





var UserSeeder = /*#__PURE__*/function () {
  function UserSeeder(userRepository, roleRepository) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, UserSeeder);
    this.userRepository = userRepository;
    this.roleRepository = roleRepository;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(UserSeeder, [{
    key: "createAdmin",
    value: function () {
      var _createAdmin = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
        var data, password;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.userRepository.findOne({
                role: 1
              });
            case 2:
              data = _context.sent;
              if (data) {
                _context.next = 8;
                break;
              }
              _context.next = 6;
              return (0,_common_helpers_hash_password__WEBPACK_IMPORTED_MODULE_4__["default"])("baktaradmin");
            case 6:
              password = _context.sent;
              return _context.abrupt("return", this.userRepository.create({
                email: "baktaradmin@gmail.com",
                fullName: "baktar admin",
                password: password,
                role: 1
              }));
            case 8:
              return _context.abrupt("return", null);
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createAdmin() {
        return _createAdmin.apply(this, arguments);
      }
      return createAdmin;
    }()
  }]);
}();

/***/ }),

/***/ "./src/api/user/user.service.js":
/*!**************************************!*\
  !*** ./src/api/user/user.service.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_helpers_hash_password__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/helpers/hash-password */ "./src/common/helpers/hash-password.js");
/* harmony import */ var _core_response_base_response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/response/base-response */ "./src/core/response/base-response.js");
/* harmony import */ var _shared_error_response_error_response__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/shared/error-response/error-response */ "./src/shared/error-response/error-response.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_7__);








var UserService = /*#__PURE__*/function () {
  function UserService(userRepository) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, UserService);
    this.userRepository = userRepository;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(UserService, [{
    key: "create",
    value: function () {
      var _create = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(userDto) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.findByEmail(userDto.contact.email);
            case 2:
              data = _context.sent;
              if (!data) {
                _context.next = 5;
                break;
              }
              throw new _shared_error_response_error_response__WEBPACK_IMPORTED_MODULE_6__.APIError("Email is already in use", http_status_codes__WEBPACK_IMPORTED_MODULE_7__.StatusCodes.CONFLICT);
            case 5:
              _context.next = 7;
              return (0,_common_helpers_hash_password__WEBPACK_IMPORTED_MODULE_4__["default"])(userDto.password);
            case 7:
              userDto.password = _context.sent;
              return _context.abrupt("return", this.userRepository.create(userDto));
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function create(_x) {
        return _create.apply(this, arguments);
      }
      return create;
    }()
  }, {
    key: "findByEmail",
    value: function () {
      var _findByEmail = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(email) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.userRepository.findOne({
                "contact.email": email
              }));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function findByEmail(_x2) {
        return _findByEmail.apply(this, arguments);
      }
      return findByEmail;
    }()
  }, {
    key: "findById",
    value: function () {
      var _findById = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(id) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.userRepository.findById(id);
            case 2:
              data = _context3.sent;
              if (data) {
                _context3.next = 5;
                break;
              }
              throw _core_response_base_response__WEBPACK_IMPORTED_MODULE_5__.BaseResponse.error({
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_7__.StatusCodes.NOT_FOUND,
                message: "User not found!"
              });
            case 5:
              return _context3.abrupt("return", data);
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function findById(_x3) {
        return _findById.apply(this, arguments);
      }
      return findById;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4(id, userDto) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.findById(id);
            case 2:
              return _context4.abrupt("return", this.userRepository.update(id, userDto));
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function update(_x4, _x5) {
        return _update.apply(this, arguments);
      }
      return update;
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
/* harmony import */ var express_async_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express-async-errors */ "express-async-errors");
/* harmony import */ var express_async_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_async_errors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_config_swagger_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/config/swagger.config */ "./src/core/config/swagger.config.js");
/* harmony import */ var _core_di_di_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/di/di-globals */ "./src/core/di/di-globals.js");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! express-rate-limit */ "express-rate-limit");
/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(express_rate_limit__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_auth_auth_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/auth/auth.route */ "./src/api/auth/auth.route.js");
/* harmony import */ var _api_footer_footer_route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api/footer/footer.route */ "./src/api/footer/footer.route.js");
/* harmony import */ var _common_constants_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/constants/api */ "./src/common/constants/api.js");
/* harmony import */ var _core_middleware_base_response_middleware__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/middleware/base-response.middleware */ "./src/core/middleware/base-response.middleware.js");
/* harmony import */ var _core_middleware_error_handler_middleware__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/middleware/error-handler-middleware */ "./src/core/middleware/error-handler-middleware.js");












var app = express__WEBPACK_IMPORTED_MODULE_5___default()();
app.use((0,express_rate_limit__WEBPACK_IMPORTED_MODULE_6__.rateLimit)({
  windowMs: 10 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-6",
  legacyHeaders: false,
  message: "Too many requests"
}));
app.set("trust proxy", 1);
app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()());
app.use(express__WEBPACK_IMPORTED_MODULE_5___default().urlencoded({
  extended: true
}));
app.use(express__WEBPACK_IMPORTED_MODULE_5___default().json());
app.use(cors__WEBPACK_IMPORTED_MODULE_4___default()());
app.disable("x-powered-by");
app.use(_core_middleware_base_response_middleware__WEBPACK_IMPORTED_MODULE_10__["default"]);
app.use("/api-docs", _core_config_swagger_config__WEBPACK_IMPORTED_MODULE_1__.swaggerUi.serve, _core_config_swagger_config__WEBPACK_IMPORTED_MODULE_1__.swaggerUi.setup(_core_config_swagger_config__WEBPACK_IMPORTED_MODULE_1__.swaggerSpec));
app.use(_common_constants_api__WEBPACK_IMPORTED_MODULE_9__.apiPrefix, _api_footer_footer_route__WEBPACK_IMPORTED_MODULE_8__["default"]);
app.use(_common_constants_api__WEBPACK_IMPORTED_MODULE_9__.apiPrefix, _api_auth_auth_route__WEBPACK_IMPORTED_MODULE_7__["default"]);
app.use(_core_middleware_error_handler_middleware__WEBPACK_IMPORTED_MODULE_11__["default"]);
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

/***/ "./src/common/helpers/generate-token.js":
/*!**********************************************!*\
  !*** ./src/common/helpers/generate-token.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateToken: () => (/* binding */ generateToken)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

var generateToken = function generateToken(payload, secret, time) {
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, secret, {
    expiresIn: time,
    algorithm: "HS512"
  });
};

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

/***/ "./src/common/schema/dto/contact.dto.js":
/*!**********************************************!*\
  !*** ./src/common/schema/dto/contact.dto.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactDto: () => (/* binding */ ContactDto)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);


var ContactDto = /*#__PURE__*/_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(function ContactDto(_ref) {
  var email = _ref.email,
    phoneNumber = _ref.phoneNumber;
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ContactDto);
  Object.assign(this, {
    email: email,
    phoneNumber: phoneNumber
  });
});

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
    trim: true,
    required: true
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

/***/ "./src/core/config/jwt.config.js":
/*!***************************************!*\
  !*** ./src/core/config/jwt.config.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config)
/* harmony export */ });
var config = {
  jwt: {
    algorithm: process.env.JWT_ALGORITHM,
    accessSecret: process.env.JWT_ACCESS_SECRET,
    accessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN
  }
};

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
/* harmony import */ var _api_role_role_seeder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/role/role.seeder */ "./src/api/role/role.seeder.js");
/* harmony import */ var _api_user_user_di__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/user/user.di */ "./src/api/user/user.di.js");
/* harmony import */ var _api_user_user_seeder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/user/user.seeder */ "./src/api/user/user.seeder.js");
/* harmony import */ var _di_di_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../di/di-container */ "./src/core/di/di-container.js");







var seed = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var userSeeder, roleSeeder;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          userSeeder = new _api_user_user_seeder__WEBPACK_IMPORTED_MODULE_5__.UserSeeder(_di_di_container__WEBPACK_IMPORTED_MODULE_6__.container.get(_api_user_user_di__WEBPACK_IMPORTED_MODULE_4__.userDIKeys.repository));
          roleSeeder = new _api_role_role_seeder__WEBPACK_IMPORTED_MODULE_3__.RoleSeeder(_di_di_container__WEBPACK_IMPORTED_MODULE_6__.container.get(_api_role_role_di__WEBPACK_IMPORTED_MODULE_2__.roleDIKeys.repository));
          _context.next = 4;
          return roleSeeder.createRoles();
        case 4:
          _context.next = 6;
          return Promise.all([userSeeder.createAdmin()]);
        case 6:
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
/* harmony import */ var _api_role_role_di__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/role/role.di */ "./src/api/role/role.di.js");
/* harmony import */ var _api_auth_auth_di__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/auth/auth.di */ "./src/api/auth/auth.di.js");





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

/***/ "express-async-errors":
/*!***************************************!*\
  !*** external "express-async-errors" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("express-async-errors");

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

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNFO0FBRVo7QUFDcUM7QUFDdkI7QUFFdEMsSUFBTUUsTUFBTSxHQUFHRCxrREFBWSxDQUFDakgsNENBQUcsQ0FBQztBQUNoQyxJQUFRbUgsSUFBSSxHQUFLakUsT0FBTyxDQUFDQyxHQUFHLENBQXBCZ0UsSUFBSTtBQUVaM1QsOEVBQUEsZUFBQUMsc0VBQUEsQ0FBQyxTQUFBd0IsU0FBQTtFQUFBLE9BQUF4QixzRUFBQSxVQUFBMkIsVUFBQUMsU0FBQTtJQUFBLGtCQUFBQSxTQUFBLENBQUFuQixJQUFBLEdBQUFtQixTQUFBLENBQUFsQixJQUFBO01BQUE7UUFBQWtCLFNBQUEsQ0FBQWxCLElBQUE7UUFBQSxPQUNPNE8sMEVBQWtCLENBQUMsQ0FBQztNQUFBO1FBQUExTixTQUFBLENBQUFsQixJQUFBO1FBQUEsT0FDcEJxUSxtREFBSSxDQUFDLENBQUM7TUFBQTtRQUNaMEMsTUFBTSxDQUFDRSxNQUFNLENBQUNELElBQUksZUFBQTNULDhFQUFBLGVBQUFDLHNFQUFBLENBQUUsU0FBQUUsUUFBQTtVQUFBLE9BQUFGLHNFQUFBLFVBQUFPLFNBQUFDLFFBQUE7WUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtjQUFBO2dCQUNsQmtQLE9BQU8sQ0FBQ0MsR0FBRyx3Q0FBQTlNLE1BQUEsQ0FBd0MyUSxJQUFJLENBQUUsQ0FBQztjQUFDO2NBQUE7Z0JBQUEsT0FBQWxULFFBQUEsQ0FBQVUsSUFBQTtZQUFBO1VBQUEsR0FBQWhCLE9BQUE7UUFBQSxDQUM1RCxHQUFDO01BQUM7TUFBQTtRQUFBLE9BQUEwQixTQUFBLENBQUFWLElBQUE7SUFBQTtFQUFBLEdBQUFNLFFBQUE7QUFBQSxDQUNKLEdBQUUsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL2F1dGgvYXV0aC5jb250cm9sbGVyLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9hdXRoL2F1dGguZGkuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL2F1dGgvYXV0aC5yb3V0ZS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvYXV0aC9hdXRoLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL2F1dGgvZHRvL2F1dGguZHRvLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9hdXRoL2R0by90b2tlbi5kdG8uanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL2Zvb3Rlci9kdG8vZm9vdGVyLmR0by5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvZm9vdGVyL2Zvb3Rlci5jb250cm9sbGVyLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9mb290ZXIvZm9vdGVyLmRpLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9mb290ZXIvZm9vdGVyLnJlcG9zaXRveS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvZm9vdGVyL2Zvb3Rlci5yb3V0ZS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvZm9vdGVyL2Zvb3Rlci5zZXJ2aWNlLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9mb290ZXIvbW9kZWwvZm9vdGVyLm1vZGVsLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9yb2xlL21vZGVsL3JvbGUubW9kZWwuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL3JvbGUvcm9sZS5kaS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvcm9sZS9yb2xlLnJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL3JvbGUvcm9sZS5zZWVkZXIuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL3VzZXIvZHRvL3VzZXIuZHRvLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS91c2VyL21vZGVsL3Bhc3N3b3JkLXJlc2V0LWNvZGUuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL3VzZXIvbW9kZWwvcmVmcmVzaC10b2tlbi5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvdXNlci9tb2RlbC91c2VyLm1vZGVsLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS91c2VyL3VzZXIuZGkuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL3VzZXIvdXNlci5yZXBvc2l0b3J5LmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS91c2VyL3VzZXIuc2VlZGVyLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS91c2VyL3VzZXIuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29tbW9uL2NvbnN0YW50cy9hcGkuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29tbW9uL2NvbnN0YW50cy9yb2xlLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvbW1vbi9oZWxwZXJzL2dlbmVyYXRlLXRva2VuLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvbW1vbi9oZWxwZXJzL2hhc2gtcGFzc3dvcmQuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29tbW9uL21vbmdvb3NlL3BsdWdpbnMvYXV0by1pbmNyZW1lbnQucGx1Z2luLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvbW1vbi9zY2hlbWEvZHRvL2NvbnRhY3QuZHRvLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvbW1vbi9zY2hlbWEvbW9kZWwvYXNzZXQtbW9kZWwuc2NoZW1hLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvbW1vbi9zY2hlbWEvbW9kZWwvY29udGFjdC1tb2RlbC5zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29yZS9jb25maWcvZGIuY29uZmlnLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvcmUvY29uZmlnL2Vudi5jb25maWcuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29yZS9jb25maWcvand0LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL2NvbmZpZy9zd2FnZ2VyLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL2RiL3NlZWQuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29yZS9kaS9kaS1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29yZS9kaS9kaS1nbG9iYWxzLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvcmUvbWlkZGxld2FyZS9iYXNlLXJlc3BvbnNlLm1pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29yZS9taWRkbGV3YXJlL2Vycm9yLWhhbmRsZXItbWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL3Jlc3BvbnNlL2Jhc2UtcmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvc2hhcmVkL2Vycm9yLXJlc3BvbnNlL2Vycm9yLXJlc3BvbnNlLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL3NoYXJlZC9yZXBvc2l0b3J5L2Jhc2UucmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZlwiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3dyYXBOYXRpdmVTdXBlclwiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcImJjcnlwdFwiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiY29va2llLXBhcnNlclwiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiY29yc1wiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzLWFzeW5jLWVycm9yc1wiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzcy1yYXRlLWxpbWl0XCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJodHRwLXN0YXR1cy1jb2Rlc1wiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJtb25nb29zZVwiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwic3dhZ2dlci1qc2RvY1wiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwic3dhZ2dlci11aS1leHByZXNzXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImh0dHBcIiIsIndlYnBhY2s6Ly9jZi13cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jZi13cy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jZi13cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2Ytd3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jZi13cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NmLXdzLy4vc3JjL3NlcnZlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5pbXBvcnQgeyBBdXRoRHRvIH0gZnJvbSBcIi4vZHRvL2F1dGguZHRvXCI7XG5cbmV4cG9ydCBjbGFzcyBBdXRoQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKGF1dGhTZXJ2aWNlKSB7XG4gICAgdGhpcy5hdXRoU2VydmljZSA9IGF1dGhTZXJ2aWNlO1xuICB9XG5cbiAgYXN5bmMgcmVnaXN0ZXIocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5yZWdpc3RlcihyZXF1ZXN0LmJvZHkpO1xuXG4gICAgcmVzcG9uc2Uuc3VjY2Vzcyh7XG4gICAgICBtZXNzYWdlOiBcIlVzZXIgcmVnaXN0ZXIgc3VjY2Vzc1wiLFxuICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5DUkVBVEVELFxuICAgICAgZGF0YTogbmV3IEF1dGhEdG8oZGF0YSksXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBsb2dpbihyZXF1ZXN0LCByZXNwb25zZSkge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHJlcXVlc3QuYm9keSk7XG5cbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IFwiXCI7XG4gICAgLy8gZ2VuZXJhdGVUb2tlbihcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgaWQ6IHVzZXIuaWQsXG4gICAgLy8gICAgIGxvZ2luOiB1c2VyLmxvZ2luLFxuICAgIC8vICAgICByb2xlOiB1c2VyLnJvbGUsXG4gICAgLy8gICAgIGVudGl0eTogXCJVc2VyXCIsXG4gICAgLy8gICB9LFxuICAgIC8vICAgXCIyaFwiLFxuICAgIC8vICk7XG5cbiAgICByZXNwb25zZS5zdWNjZXNzKHtcbiAgICAgIG1lc3NhZ2U6IFwiVXNlciBMb2dpbiAgc3VjY2Vzc1wiLFxuICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5PSyxcbiAgICAgIGRhdGE6IG5ldyBBdXRoRHRvKHVzZXIsIGFjY2Vzc1Rva2VuKSxcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIkAvY29yZS9kaS9kaS1jb250YWluZXJcIjtcblxuaW1wb3J0IHsgdXNlckRJS2V5cyB9IGZyb20gXCIuLi91c2VyL3VzZXIuZGlcIjtcbmltcG9ydCB7IEF1dGhDb250cm9sbGVyIH0gZnJvbSBcIi4vYXV0aC5jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuL2F1dGguc2VydmljZVwiO1xuXG5leHBvcnQgY29uc3QgYXV0aERJS2V5cyA9IHtcbiAgY29udHJvbGxlcjogXCJhdXRoLWNvbnRyb2xsZXJcIixcbiAgc2VydmljZTogXCJhdXRoLXNlcnZpY2VcIixcbn07XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgYXV0aERJS2V5cy5zZXJ2aWNlLFxuICBbdXNlckRJS2V5cy5zZXJ2aWNlXSxcbiAgKHVzZXJTZXJ2aWNlKSA9PiBuZXcgQXV0aFNlcnZpY2UodXNlclNlcnZpY2UpLFxuKTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKFxuICBhdXRoRElLZXlzLmNvbnRyb2xsZXIsXG4gIFthdXRoRElLZXlzLnNlcnZpY2VdLFxuICAoYXV0aFNlcnZpY2UpID0+IG5ldyBBdXRoQ29udHJvbGxlcihhdXRoU2VydmljZSksXG4pO1xuIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIkAvY29yZS9kaS9kaS1jb250YWluZXJcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5cbmltcG9ydCB7IGF1dGhESUtleXMgfSBmcm9tIFwiLi9hdXRoLmRpXCI7XG5cbmNvbnN0IGF1dGhSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5jb25zdCBwcmVmaXggPSBcIi9hdXRoXCI7XG5cbmNvbnN0IGF1dGhDb250cm9sbGVyID0gY29udGFpbmVyLmdldChhdXRoRElLZXlzLmNvbnRyb2xsZXIpO1xuXG5hdXRoUm91dGVyLnBvc3QoYCR7cHJlZml4fS9sb2dpbmAsIChyZXEsIHJlcykgPT5cbiAgYXV0aENvbnRyb2xsZXIubG9naW4ocmVxLCByZXMpLFxuKTtcblxuYXV0aFJvdXRlci5wb3N0KGAke3ByZWZpeH0vcmVnaXN0ZXJgLCAocmVxLCByZXMpID0+XG4gIGF1dGhDb250cm9sbGVyLnJlZ2lzdGVyKHJlcSwgcmVzKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhSb3V0ZXI7XG4iLCJpbXBvcnQgeyBnZW5lcmF0ZVRva2VuIH0gZnJvbSBcIkAvY29tbW9uL2hlbHBlcnMvZ2VuZXJhdGUtdG9rZW5cIjtcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCJAL2NvcmUvY29uZmlnL2p3dC5jb25maWdcIjtcblxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IodXNlclNlcnZpY2UpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlID0gdXNlclNlcnZpY2U7XG4gIH1cblxuICBhc3luYyByZWdpc3RlcihhdXRoUmVnaXN0ZXJEdG8pIHtcbiAgICBhdXRoUmVnaXN0ZXJEdG8ucm9sZSA9IDI7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuY3JlYXRlKGF1dGhSZWdpc3RlckR0byk7XG5cbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgc3ViOiBkYXRhLl9pZCxcbiAgICAgIGVtYWlsOiBkYXRhLmNvbnRhY3QuZW1haWwsXG4gICAgfTtcblxuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5jcmVhdGVUb2tlbihwYXlsb2FkKTtcblxuICAgIHJldHVybiB7IHVzZXI6IGRhdGEsIHRva2VuIH07XG4gIH1cblxuICBhc3luYyBjcmVhdGVUb2tlbihwYXlsb2FkKSB7XG4gICAgY29uc3QgeyBhY2Nlc3NTZWNyZXQsIGFjY2Vzc0V4cGlyZXNJbiwgcmVmcmVzaFNlY3JldCwgcmVmcmVzaEV4cGlyZXNJbiB9ID1cbiAgICAgIGNvbmZpZy5qd3Q7XG5cbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGF3YWl0IGdlbmVyYXRlVG9rZW4oXG4gICAgICBwYXlsb2FkLFxuICAgICAgYWNjZXNzU2VjcmV0LFxuICAgICAgYWNjZXNzRXhwaXJlc0luLFxuICAgICk7XG5cbiAgICBjb25zdCByZWZyZXNoVG9rZW4gPSBhd2FpdCBnZW5lcmF0ZVRva2VuKFxuICAgICAgcGF5bG9hZCxcbiAgICAgIHJlZnJlc2hTZWNyZXQsXG4gICAgICByZWZyZXNoRXhwaXJlc0luLFxuICAgICk7XG5cbiAgICBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZShwYXlsb2FkLnN1Yiwge1xuICAgICAgdG9rZW46IHsgcmVmcmVzaDogcmVmcmVzaFRva2VuIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBhY2Nlc3NUb2tlbiwgcmVmcmVzaFRva2VuIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IFVzZXJEdG8gfSBmcm9tIFwiQC9hcGkvdXNlci9kdG8vdXNlci5kdG9cIjtcblxuaW1wb3J0IHsgVG9rZW5EdG8gfSBmcm9tIFwiLi90b2tlbi5kdG9cIjtcblxuZXhwb3J0IGNsYXNzIEF1dGhEdG8ge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy50b2tlbiA9IG5ldyBUb2tlbkR0byhkYXRhLnRva2VuKTtcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlckR0byhkYXRhLnVzZXIpO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVG9rZW5EdG8ge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5hY2Nlc3MgPSBkYXRhLmFjY2Vzc1Rva2VuO1xuICAgIHRoaXMucmVmcmVzaCA9IGRhdGEucmVmcmVzaFRva2VuO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRm9vdGVyRHRvIHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIGNvbnRhY3QsXG4gICAgbG9jYXRpb24sXG4gICAgdGl0bGUsXG4gICAgY29weXJpZ2h0LFxuICAgIG9wZW5pbmdEYXksXG4gICAgb3BlbmluZ0hvdXIsXG4gICAgc29jaWFsTWVkaWEsXG4gIH0pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgIGNvbnRhY3QsXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRpdGxlLFxuICAgICAgY29weXJpZ2h0LFxuICAgICAgb3BlbmluZ0RheSxcbiAgICAgIG9wZW5pbmdIb3VyLFxuICAgICAgc29jaWFsTWVkaWEsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmltcG9ydCB7IEZvb3RlckR0byB9IGZyb20gXCIuL2R0by9mb290ZXIuZHRvXCI7XG5cbmV4cG9ydCBjbGFzcyBGb290ZXJDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoZm9vb3RlclNlcnZpY2UpIHtcbiAgICB0aGlzLmZvb290ZXJTZXJ2aWNlID0gZm9vb3RlclNlcnZpY2U7XG4gIH1cblxuICBhc3luYyBmaW5kKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZm9vb3RlclNlcnZpY2UuZmluZCgpO1xuXG4gICAgcmVzLnN1Y2Nlc3Moe1xuICAgICAgbWVzc2FnZTogXCJGaW5kIEZvb3RlciBzdWNjZXNzZnVsbHkhXCIsXG4gICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk9LLFxuICAgICAgZGF0YTogZGF0YSA/IG5ldyBGb290ZXJEdG8oZGF0YSkgOiBudWxsLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiQC9jb3JlL2RpL2RpLWNvbnRhaW5lclwiO1xuXG5pbXBvcnQgeyBGb290ZXJDb250cm9sbGVyIH0gZnJvbSBcIi4vZm9vdGVyLmNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IEZvb3RlclJlcG9zaXRvcnkgfSBmcm9tIFwiLi9mb290ZXIucmVwb3NpdG95XCI7XG5pbXBvcnQgeyBGb290ZXJTZXJ2aWNlIH0gZnJvbSBcIi4vZm9vdGVyLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNvbnN0IGZvb3RlckRJS2V5cyA9IHtcbiAgc2VydmljZTogXCJmb290ZXItc2VydmljZVwiLFxuICByZXBvc2l0b3J5OiBcImZvb3Rlci1yZXBvc2l0b3J5XCIsXG4gIGNvbnRyb2xsZXI6IFwiZm9vdGVyLWNvbnRyb2xsZXJcIixcbn07XG5cbmNvbnRhaW5lci5yZWdpc3Rlcihmb290ZXJESUtleXMucmVwb3NpdG9yeSwgW10sICgpID0+IG5ldyBGb290ZXJSZXBvc2l0b3J5KCkpO1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIGZvb3RlckRJS2V5cy5zZXJ2aWNlLFxuICBbZm9vdGVyRElLZXlzLnJlcG9zaXRvcnldLFxuICAoZm9vdGVyUmVwb3NpdG9yeSkgPT4gbmV3IEZvb3RlclNlcnZpY2UoZm9vdGVyUmVwb3NpdG9yeSksXG4pO1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIGZvb3RlckRJS2V5cy5jb250cm9sbGVyLFxuICBbZm9vdGVyRElLZXlzLnNlcnZpY2VdLFxuICAoZm9vdGVyU2VydmljZSkgPT4gbmV3IEZvb3RlckNvbnRyb2xsZXIoZm9vdGVyU2VydmljZSksXG4pO1xuIiwiaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tIFwiQC9zaGFyZWQvcmVwb3NpdG9yeS9iYXNlLnJlcG9zaXRvcnlcIjtcblxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9tb2RlbC9mb290ZXIubW9kZWxcIjtcblxuZXhwb3J0IGNsYXNzIEZvb3RlclJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKEZvb3Rlcik7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCJAL2NvcmUvZGkvZGktY29udGFpbmVyXCI7XG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuXG5pbXBvcnQgeyBmb290ZXJESUtleXMgfSBmcm9tIFwiLi9mb290ZXIuZGlcIjtcblxuY29uc3QgcHJlZml4ID0gXCIvZm9vdGVyc1wiO1xuXG5jb25zdCBmb290ZXJSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5jb25zdCBmb290ZXJDb250cm9sbGVyID0gY29udGFpbmVyLmdldChmb290ZXJESUtleXMuY29udHJvbGxlcik7XG5cbmZvb3RlclJvdXRlci5nZXQoYCR7cHJlZml4fWAsIChyZXEsIHJlcykgPT4gZm9vdGVyQ29udHJvbGxlci5maW5kKHJlcSwgcmVzKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZvb3RlclJvdXRlcjtcbiIsImltcG9ydCB7IEJhc2VSZXNwb25zZSB9IGZyb20gXCJAL2NvcmUvcmVzcG9uc2UvYmFzZS1yZXNwb25zZVwiO1xuaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcblxuZXhwb3J0IGNsYXNzIEZvb3RlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihmb290ZXJSZXBvc2l0b3J5LCBzdG9yYWdlU2VydmljZSkge1xuICAgIHRoaXMuZm9vdGVyUmVwb3NpdG9yeSA9IGZvb3RlclJlcG9zaXRvcnk7XG4gICAgdGhpcy5zdG9yYWdlU2VydmljZSA9IHN0b3JhZ2VTZXJ2aWNlO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlKGZvb3RlckR0bywgc29jaWFsTWVkaWFJY29ucykge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmZvb3RlclJlcG9zaXRvcnkuZmluZEFsbCgpO1xuICAgIGxldCB1cGxvYWRlZHNvY2lhbE1lZGlhSWNvbnMgPSBbXTtcblxuICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IEJhc2VSZXNwb25zZS5lcnJvcih7XG4gICAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuQ09ORkxJQ1QsXG4gICAgICAgIG1lc3NhZ2U6IFwiRm9vdGVyIGFscmVhZHkgZXhpc3RzICFcIixcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzb2NpYWxNZWRpYUljb25zICYmIHNvY2lhbE1lZGlhSWNvbnMubGVuZ3RoID4gMCkge1xuICAgICAgdXBsb2FkZWRzb2NpYWxNZWRpYUljb25zID1cbiAgICAgICAgYXdhaXQgdGhpcy5zdG9yYWdlU2VydmljZS51cGxvYWRGaWxlcyhzb2NpYWxNZWRpYUljb25zKTtcbiAgICB9XG5cbiAgICBmb290ZXJEdG8uc29jaWFsTWVkaWEgPSB1cGxvYWRlZHNvY2lhbE1lZGlhSWNvbnM7XG5cbiAgICByZXR1cm4gdGhpcy5mb290ZXJSZXBvc2l0b3J5LmNyZWF0ZUZvb3Rlcihmb290ZXJEdG8pO1xuICB9XG5cbiAgYXN5bmMgZmluZCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb290ZXJSZXBvc2l0b3J5LmZpbmRBbGwoKVswXTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZShmb290ZXJEdG8sIGZpbGVzKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZm9vdGVyUmVwb3NpdG9yeS5maW5kKClbMF07XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IEJhc2VSZXNwb25zZS5lcnJvcih7XG4gICAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuTk9UX0ZPVU5ELFxuICAgICAgICBtZXNzYWdlOiBcIkZvb3RlciBub3QgZm91bmQgIVwiLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn1cbiIsImltcG9ydCB7IGFzc2V0TW9kZWxTY2hlbWEgfSBmcm9tIFwiQC9jb21tb24vc2NoZW1hL21vZGVsL2Fzc2V0LW1vZGVsLnNjaGVtYVwiO1xuaW1wb3J0IHsgY29udGFjdFNjaGVtYSB9IGZyb20gXCJAL2NvbW1vbi9zY2hlbWEvbW9kZWwvY29udGFjdC1tb2RlbC5zY2hlbWFcIjtcbmltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgZm9vdGVyU2NoZW1hID0gbmV3IFNjaGVtYShcbiAge1xuICAgIGNvbnRhY3Q6IGNvbnRhY3RTY2hlbWEsXG4gICAgbG9jYXRpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgY29weXJpZ2h0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIG9wZW5pbmdEYXk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgb3BlbmluZ0hvdXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgc29jaWFsTWVkaWE6IFthc3NldE1vZGVsU2NoZW1hXSxcbiAgfSxcbiAge1xuICAgIGNvbGxlY3Rpb246IFwiZm9vdGVyXCIsXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgfSxcbik7XG5cbmNvbnN0IEZvb3RlciA9IG1vbmdvb3NlLm1vZGVsKFwiRm9vdGVyXCIsIGZvb3RlclNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBhdXRvSW5jcmVtZW50UGx1Z2luIGZyb20gXCJAL2NvbW1vbi9tb25nb29zZS9wbHVnaW5zL2F1dG8taW5jcmVtZW50LnBsdWdpblwiO1xuaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCByb2xlU2NoZW1hID0gbmV3IFNjaGVtYShcbiAge1xuICAgIHJvbGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgY29sbGVjdGlvbjogXCJyb2xlc1wiLFxuICAgIHZlcnNpb25LZXk6IGZhbHNlLFxuICB9LFxuKS5wbHVnaW4oYXV0b0luY3JlbWVudFBsdWdpbiwgeyBpbmNGaWVsZDogXCJfaWRcIiB9KTtcblxuY29uc3QgUm9sZSA9IG1vbmdvb3NlLm1vZGVsKFwiUm9sZVwiLCByb2xlU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgUm9sZTtcbiIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCJAL2NvcmUvZGkvZGktY29udGFpbmVyXCI7XG5cbmltcG9ydCB7IFJvbGVSZXBvc2l0b3J5IH0gZnJvbSBcIi4vcm9sZS5yZXBvc2l0b3J5XCI7XG5pbXBvcnQgeyBSb2xlU2VlZGVyIH0gZnJvbSBcIi4vcm9sZS5zZWVkZXJcIjtcblxuZXhwb3J0IGNvbnN0IHJvbGVESUtleXMgPSB7XG4gIHJlcG9zaXRvcnk6IFwicm9sZS1yZXBvc2l0b3J5XCIsXG4gIHNlZWRlcjogXCJyb2xlLXNlZWRlclwiLFxufTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKHJvbGVESUtleXMucmVwb3NpdG9yeSwgW10sICgpID0+IG5ldyBSb2xlUmVwb3NpdG9yeSgpKTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKFxuICByb2xlRElLZXlzLnNlZWRlcixcbiAgW3JvbGVESUtleXMucmVwb3NpdG9yeV0sXG4gIChyb2xlUmVwb3NpdG9yeSkgPT4gbmV3IFJvbGVTZWVkZXIocm9sZVJlcG9zaXRvcnkpLFxuKTtcbiIsImltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSBcIkAvc2hhcmVkL3JlcG9zaXRvcnkvYmFzZS5yZXBvc2l0b3J5XCI7XG5cbmltcG9ydCBSb2xlIGZyb20gXCIuL21vZGVsL3JvbGUubW9kZWxcIjtcblxuZXhwb3J0IGNsYXNzIFJvbGVSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihSb2xlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcm9sZXMgfSBmcm9tIFwiQC9jb21tb24vY29uc3RhbnRzL3JvbGVcIjtcblxuZXhwb3J0IGNsYXNzIFJvbGVTZWVkZXIge1xuICBjb25zdHJ1Y3Rvcihyb2xlUmVwb3NpdG9yeSkge1xuICAgIHRoaXMucm9sZVJlcG9zaXRvcnkgPSByb2xlUmVwb3NpdG9yeTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVJvbGVzKCkge1xuICAgIGNvbnN0IGV4aXN0aW5nUm9sZXMgPSBhd2FpdCB0aGlzLnJvbGVSZXBvc2l0b3J5LmZpbmRBbGwoKTtcbiAgICBjb25zdCBleGlzdGluZ1JvbGVOYW1lcyA9IGV4aXN0aW5nUm9sZXMubWFwKChyb2xlKSA9PiByb2xlLnJvbGUpO1xuXG4gICAgY29uc3Qgcm9sZXNUb0NyZWF0ZSA9IHJvbGVzLmZpbHRlcihcbiAgICAgIChyb2xlKSA9PiAhZXhpc3RpbmdSb2xlTmFtZXMuaW5jbHVkZXMocm9sZS5yb2xlKSxcbiAgICApO1xuXG4gICAgaWYgKHJvbGVzVG9DcmVhdGUubGVuZ3RoID4gMCkge1xuICAgICAgYXdhaXQgdGhpcy5yb2xlUmVwb3NpdG9yeS5jcmVhdGVNYW55KHJvbGVzVG9DcmVhdGUpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGFjdER0byB9IGZyb20gXCJAL2NvbW1vbi9zY2hlbWEvZHRvL2NvbnRhY3QuZHRvXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyRHRvIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuZnVsbE5hbWUgPSBkYXRhLmZ1bGxOYW1lO1xuICAgIHRoaXMucHJvZmlsZUltYWdlID0gZGF0YS5wcm9maWxlSW1hZ2U7XG4gICAgdGhpcy5yb2xlID0gZGF0YS5yb2xlO1xuICAgIHRoaXMuY29udGFjdCA9IG5ldyBDb250YWN0RHRvKGRhdGEuY29udGFjdCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgY29uc3QgcGFzc3dvcmRSZXNldENvZGVTY2hlbWEgPSBuZXcgU2NoZW1hKFxuICB7XG4gICAgY29kZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9LFxuICAgIHRpbWU6IHtcbiAgICAgIHR5cGU6IERhdGUsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBfaWQ6IGZhbHNlLFxuICB9LFxuKTtcbiIsImltcG9ydCB7IFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgY29uc3QgcmVmcmVzaFRva2VuU2NoZW1hID0gbmV3IFNjaGVtYShcbiAge1xuICAgIHJlZnJlc2g6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICAgIGNyZWF0ZWRBdDoge1xuICAgICAgdHlwZTogRGF0ZSxcbiAgICAgIGRlZmF1bHQ6IERhdGUubm93LFxuICAgICAgZXhwaXJlczogXCIxNWRcIixcbiAgICB9LFxuICB9LFxuICB7XG4gICAgX2lkOiBmYWxzZSxcbiAgfSxcbik7XG4iLCJpbXBvcnQgeyBjb250YWN0U2NoZW1hIH0gZnJvbSBcIkAvY29tbW9uL3NjaGVtYS9tb2RlbC9jb250YWN0LW1vZGVsLnNjaGVtYVwiO1xuaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5pbXBvcnQgeyBwYXNzd29yZFJlc2V0Q29kZVNjaGVtYSB9IGZyb20gXCIuL3Bhc3N3b3JkLXJlc2V0LWNvZGVcIjtcbmltcG9ydCB7IHJlZnJlc2hUb2tlblNjaGVtYSB9IGZyb20gXCIuL3JlZnJlc2gtdG9rZW5cIjtcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoXG4gIHtcbiAgICBmdWxsTmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB0cmltOiB0cnVlLFxuICAgIH0sXG4gICAgcHJvZmlsZUltYWdlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgICBwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB0cmltOiB0cnVlIH0sXG4gICAgY29udGFjdDogY29udGFjdFNjaGVtYSxcbiAgICB0b2tlbjogcmVmcmVzaFRva2VuU2NoZW1hLFxuICAgIHBhc3N3b3JkUmVzZXRDb2RlU2NoZW1hLFxuICAgIHJvbGU6IHsgdHlwZTogU2NoZW1hLlR5cGVzLk51bWJlciwgcmVmOiBcIlJvbGVcIiwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgfSxcbiAge1xuICAgIGNvbGxlY3Rpb246IFwidXNlcnNcIixcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICB9LFxuKTtcblxuY29uc3QgVXNlciA9IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCB1c2VyU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCJAL2NvcmUvZGkvZGktY29udGFpbmVyXCI7XG5cbmltcG9ydCB7IFVzZXJSZXBvc2l0b3J5IH0gZnJvbSBcIi4vdXNlci5yZXBvc2l0b3J5XCI7XG5pbXBvcnQgeyBVc2VyU2VlZGVyIH0gZnJvbSBcIi4vdXNlci5zZWVkZXJcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vdXNlci5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VyRElLZXlzID0ge1xuICBzZXJ2aWNlOiBcInVzZXItc2VydmljZVwiLFxuICByZXBvc2l0b3J5OiBcInVzZXItcmVwb3NpdG9yeVwiLFxuICBzZWVkZXI6IFwidXNlci1zZWVkZXJcIixcbn07XG5cbmNvbnRhaW5lci5yZWdpc3Rlcih1c2VyRElLZXlzLnJlcG9zaXRvcnksIFtdLCAoKSA9PiBuZXcgVXNlclJlcG9zaXRvcnkoKSk7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgdXNlckRJS2V5cy5zZWVkZXIsXG4gIFt1c2VyRElLZXlzLnJlcG9zaXRvcnldLFxuICAodXNlclJlcG9zaXRvcnkpID0+IG5ldyBVc2VyU2VlZGVyKHVzZXJSZXBvc2l0b3J5KSxcbik7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgdXNlckRJS2V5cy5zZXJ2aWNlLFxuICBbdXNlckRJS2V5cy5yZXBvc2l0b3J5XSxcbiAgKHVzZXJSZXBvc2l0b3J5KSA9PiBuZXcgVXNlclNlcnZpY2UodXNlclJlcG9zaXRvcnkpLFxuKTtcbiIsImltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSBcIkAvc2hhcmVkL3JlcG9zaXRvcnkvYmFzZS5yZXBvc2l0b3J5XCI7XG5cbmltcG9ydCBVc2VyIGZyb20gXCIuL21vZGVsL3VzZXIubW9kZWxcIjtcblxuZXhwb3J0IGNsYXNzIFVzZXJSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihVc2VyKTtcbiAgfVxufVxuIiwiaW1wb3J0IGhhc2hQYXNzd29yZCBmcm9tIFwiQC9jb21tb24vaGVscGVycy9oYXNoLXBhc3N3b3JkXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyU2VlZGVyIHtcbiAgY29uc3RydWN0b3IodXNlclJlcG9zaXRvcnksIHJvbGVSZXBvc2l0b3J5KSB7XG4gICAgdGhpcy51c2VyUmVwb3NpdG9yeSA9IHVzZXJSZXBvc2l0b3J5O1xuICAgIHRoaXMucm9sZVJlcG9zaXRvcnkgPSByb2xlUmVwb3NpdG9yeTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZUFkbWluKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnVzZXJSZXBvc2l0b3J5LmZpbmRPbmUoeyByb2xlOiAxIH0pO1xuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBjb25zdCBwYXNzd29yZCA9IGF3YWl0IGhhc2hQYXNzd29yZChcImJha3RhcmFkbWluXCIpO1xuXG4gICAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS5jcmVhdGUoe1xuICAgICAgICBlbWFpbDogXCJiYWt0YXJhZG1pbkBnbWFpbC5jb21cIixcbiAgICAgICAgZnVsbE5hbWU6IFwiYmFrdGFyIGFkbWluXCIsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgICByb2xlOiAxLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCBoYXNoUGFzc3dvcmQgZnJvbSBcIkAvY29tbW9uL2hlbHBlcnMvaGFzaC1wYXNzd29yZFwiO1xuaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIkAvY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlXCI7XG5pbXBvcnQgeyBBUElFcnJvciB9IGZyb20gXCJAL3NoYXJlZC9lcnJvci1yZXNwb25zZS9lcnJvci1yZXNwb25zZVwiO1xuaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcblxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IodXNlclJlcG9zaXRvcnkpIHtcbiAgICB0aGlzLnVzZXJSZXBvc2l0b3J5ID0gdXNlclJlcG9zaXRvcnk7XG4gIH1cblxuICBhc3luYyBjcmVhdGUodXNlckR0bykge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmZpbmRCeUVtYWlsKHVzZXJEdG8uY29udGFjdC5lbWFpbCk7XG5cbiAgICBpZiAoZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEFQSUVycm9yKFwiRW1haWwgaXMgYWxyZWFkeSBpbiB1c2VcIiwgU3RhdHVzQ29kZXMuQ09ORkxJQ1QpO1xuICAgIH1cblxuICAgIHVzZXJEdG8ucGFzc3dvcmQgPSBhd2FpdCBoYXNoUGFzc3dvcmQodXNlckR0by5wYXNzd29yZCk7XG5cbiAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS5jcmVhdGUodXNlckR0byk7XG4gIH1cblxuICBhc3luYyBmaW5kQnlFbWFpbChlbWFpbCkge1xuICAgIHJldHVybiB0aGlzLnVzZXJSZXBvc2l0b3J5LmZpbmRPbmUoeyBcImNvbnRhY3QuZW1haWxcIjogZW1haWwgfSk7XG4gIH1cblxuICBhc3luYyBmaW5kQnlJZChpZCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnVzZXJSZXBvc2l0b3J5LmZpbmRCeUlkKGlkKTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5OT1RfRk9VTkQsXG4gICAgICAgIG1lc3NhZ2U6IFwiVXNlciBub3QgZm91bmQhXCIsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZShpZCwgdXNlckR0bykge1xuICAgIGF3YWl0IHRoaXMuZmluZEJ5SWQoaWQpO1xuXG4gICAgcmV0dXJuIHRoaXMudXNlclJlcG9zaXRvcnkudXBkYXRlKGlkLCB1c2VyRHRvKTtcbiAgfVxufVxuIiwiaW1wb3J0IFwiZXhwcmVzcy1hc3luYy1lcnJvcnNcIjtcbmltcG9ydCB7IHN3YWdnZXJTcGVjLCBzd2FnZ2VyVWkgfSBmcm9tIFwiQC9jb3JlL2NvbmZpZy9zd2FnZ2VyLmNvbmZpZ1wiO1xuaW1wb3J0IFwiQC9jb3JlL2RpL2RpLWdsb2JhbHNcIjtcbmltcG9ydCBjb29raWVQYXJzZXIgZnJvbSBcImNvb2tpZS1wYXJzZXJcIjtcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgcmF0ZUxpbWl0IH0gZnJvbSBcImV4cHJlc3MtcmF0ZS1saW1pdFwiO1xuXG5pbXBvcnQgYXV0aFJvdXRlciBmcm9tIFwiLi9hcGkvYXV0aC9hdXRoLnJvdXRlXCI7XG5pbXBvcnQgZm9vdGVyUm91dGVyIGZyb20gXCIuL2FwaS9mb290ZXIvZm9vdGVyLnJvdXRlXCI7XG5pbXBvcnQgeyBhcGlQcmVmaXggfSBmcm9tIFwiLi9jb21tb24vY29uc3RhbnRzL2FwaVwiO1xuaW1wb3J0IGJhc2VSZXNwb25zZU1pZGRsZXdhcmUgZnJvbSBcIi4vY29yZS9taWRkbGV3YXJlL2Jhc2UtcmVzcG9uc2UubWlkZGxld2FyZVwiO1xuaW1wb3J0IGVycm9ySGFuZGxlck1pZGRsZXdhcmUgZnJvbSBcIi4vY29yZS9taWRkbGV3YXJlL2Vycm9yLWhhbmRsZXItbWlkZGxld2FyZVwiO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoXG4gIHJhdGVMaW1pdCh7XG4gICAgd2luZG93TXM6IDEwICogNjAgKiAxMDAwLFxuICAgIGxpbWl0OiAxMDAsXG4gICAgc3RhbmRhcmRIZWFkZXJzOiBcImRyYWZ0LTZcIixcbiAgICBsZWdhY3lIZWFkZXJzOiBmYWxzZSxcbiAgICBtZXNzYWdlOiBcIlRvbyBtYW55IHJlcXVlc3RzXCIsXG4gIH0pLFxuKTtcbmFwcC5zZXQoXCJ0cnVzdCBwcm94eVwiLCAxKTtcbmFwcC51c2UoY29va2llUGFyc2VyKCkpO1xuYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcbmFwcC51c2UoY29ycygpKTtcbmFwcC5kaXNhYmxlKFwieC1wb3dlcmVkLWJ5XCIpO1xuYXBwLnVzZShiYXNlUmVzcG9uc2VNaWRkbGV3YXJlKTtcbmFwcC51c2UoXCIvYXBpLWRvY3NcIiwgc3dhZ2dlclVpLnNlcnZlLCBzd2FnZ2VyVWkuc2V0dXAoc3dhZ2dlclNwZWMpKTtcblxuYXBwLnVzZShhcGlQcmVmaXgsIGZvb3RlclJvdXRlcik7XG5hcHAudXNlKGFwaVByZWZpeCwgYXV0aFJvdXRlcik7XG5cbmFwcC51c2UoZXJyb3JIYW5kbGVyTWlkZGxld2FyZSk7XG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iLCJleHBvcnQgY29uc3QgYXBpUHJlZml4ID0gXCIvYXBpL3YxXCI7XG4iLCJleHBvcnQgY29uc3Qgcm9sZXMgPSBbeyByb2xlOiBcImFkbWluXCIgfSwgeyByb2xlOiBcInVzZXJcIiB9XTtcbiIsImltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVUb2tlbiA9IChwYXlsb2FkLCBzZWNyZXQsIHRpbWUpID0+XG4gIGp3dC5zaWduKHBheWxvYWQsIHNlY3JldCwge1xuICAgIGV4cGlyZXNJbjogdGltZSxcbiAgICBhbGdvcml0aG06IFwiSFM1MTJcIixcbiAgfSk7XG4iLCJpbXBvcnQgKiBhcyBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYXNoUGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0KDEwKTtcblxuICByZXR1cm4gYmNyeXB0Lmhhc2gocGFzc3dvcmQsIHNhbHQpO1xufVxuIiwiLyoqXG4gKiBAZGVzY3JpcHRpb24gTW9uZ29vc2UgcGx1Z2luIHRvIGF1dG8gaW5jcmVtZW50IGEgZmllbGRcbiAqIEBwYXJhbSB7TW9uZ29vc2UuU2NoZW1hfSBzY2hlbWFcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dG9JbmNyZW1lbnRQbHVnaW4oc2NoZW1hLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucy5pbmNGaWVsZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBzcGVjaWZ5IGluY0ZpZWxkIVwiKTtcbiAgfVxuXG4gIGxldCBmaWVsZE9wdGlvbnMgPSB7XG4gICAgdHlwZTogTnVtYmVyLFxuICB9O1xuXG4gIGlmIChvcHRpb25zLmluY0ZpZWxkICE9PSBcIl9pZFwiKSB7XG4gICAgZmllbGRPcHRpb25zID0ge1xuICAgICAgLi4uZmllbGRPcHRpb25zLFxuICAgICAgdW5pcXVlOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICBzY2hlbWEuYWRkKHtcbiAgICBbb3B0aW9ucy5pbmNGaWVsZF06IGZpZWxkT3B0aW9ucyxcbiAgfSk7XG5cbiAgc2NoZW1hLnByZShcInNhdmVcIiwgZnVuY3Rpb24gKG5leHQpIHtcbiAgICBpZiAodGhpcy5pc05ldykge1xuICAgICAgdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICAuZmluZE9uZSh7fSwge30sIHsgc29ydDogeyBbb3B0aW9ucy5pbmNGaWVsZF06IC0xIH0gfSlcbiAgICAgICAgLnRoZW4oKGxhc3RSZWNvcmQpID0+IHtcbiAgICAgICAgICB0aGlzW29wdGlvbnMuaW5jRmllbGRdID0gbGFzdFJlY29yZFxuICAgICAgICAgICAgPyBsYXN0UmVjb3JkW29wdGlvbnMuaW5jRmllbGRdICsgMVxuICAgICAgICAgICAgOiAxO1xuXG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgc2NoZW1hLnByZShcImluc2VydE1hbnlcIiwgYXN5bmMgZnVuY3Rpb24gKG5leHQsIGRvY3MpIHtcbiAgICBjb25zdCBsYXN0UmVjb3JkID0gYXdhaXQgdGhpcy5maW5kT25lKFxuICAgICAge30sXG4gICAgICB7fSxcbiAgICAgIHsgc29ydDogeyBbb3B0aW9ucy5pbmNGaWVsZF06IC0xIH0gfSxcbiAgICApO1xuXG4gICAgY29uc3QgbGFzdENvdW50ID0gbGFzdFJlY29yZCA/IGxhc3RSZWNvcmRbb3B0aW9ucy5pbmNGaWVsZF0gOiAwO1xuXG4gICAgZG9jcy5mb3JFYWNoKChkb2MsIGluZGV4KSA9PiB7XG4gICAgICBkb2Nbb3B0aW9ucy5pbmNGaWVsZF0gPSBsYXN0Q291bnQgKyBpbmRleCArIDE7XG4gICAgfSk7XG5cbiAgICBuZXh0KCk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGNsYXNzIENvbnRhY3REdG8ge1xuICBjb25zdHJ1Y3Rvcih7IGVtYWlsLCBwaG9uZU51bWJlciB9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICBlbWFpbCxcbiAgICAgIHBob25lTnVtYmVyLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmV4cG9ydCBjb25zdCBhc3NldE1vZGVsU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAge1xuICAgIGhyZWY6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmU6IHRydWUsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG4gICAgdXJsOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHB1YmxpY0lkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICAgIHNpemU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICB9LFxuICB9LFxuICB7XG4gICAgX2lkOiBmYWxzZSxcbiAgfSxcbik7XG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmV4cG9ydCBjb25zdCBjb250YWN0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAge1xuICAgIGVtYWlsOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB0cmltOiB0cnVlLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBwaG9uZU51bWJlcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBfaWQ6IGZhbHNlLFxuICB9LFxuKTtcbiIsImltcG9ydCBcIkAvY29yZS9jb25maWcvZW52LmNvbmZpZ1wiO1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRGJDb25uZWN0aW9uKCkge1xuICB0cnkge1xuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuQ09OTkVDVElPTl9TVFJJTkcpO1xuICAgIGNvbnNvbGUubG9nKFwiTW9uZ29EQiBDb25uZWN0ZWRcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIk1vbmdvREIgQ29ubmVjdGlvbiBFcnJvcjpcIiwgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiZG90ZW52XCI7XG5cbmNvbmZpZygpO1xuXG5jb25maWcoe1xuICBwYXRoOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiID8gXCIuZW52LmxvY2FsXCIgOiBcIi5lbnZcIixcbiAgb3ZlcnJpZGU6IHRydWUsXG59KTtcbiIsImV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGp3dDoge1xuICAgIGFsZ29yaXRobTogcHJvY2Vzcy5lbnYuSldUX0FMR09SSVRITSxcbiAgICBhY2Nlc3NTZWNyZXQ6IHByb2Nlc3MuZW52LkpXVF9BQ0NFU1NfU0VDUkVULFxuICAgIGFjY2Vzc0V4cGlyZXNJbjogcHJvY2Vzcy5lbnYuSldUX0FDQ0VTU19FWFBJUkVTX0lOLFxuICAgIHJlZnJlc2hTZWNyZXQ6IHByb2Nlc3MuZW52LkpXVF9SRUZSRVNIX1NFQ1JFVCxcbiAgICByZWZyZXNoRXhwaXJlc0luOiBwcm9jZXNzLmVudi5KV1RfUkVGUkVTSF9FWFBJUkVTX0lOLFxuICB9LFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcyAqL1xuaW1wb3J0IHN3YWdnZXJKc2RvYyBmcm9tIFwic3dhZ2dlci1qc2RvY1wiO1xuaW1wb3J0IHN3YWdnZXJVaSBmcm9tIFwic3dhZ2dlci11aS1leHByZXNzXCI7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIGRlZmluaXRpb246IHtcbiAgICBvcGVuYXBpOiBcIjMuMC4wXCIsXG4gICAgaW5mbzoge1xuICAgICAgdGl0bGU6IFwiQ0FGLVZpYmUgQ29mZmVlIFNob3AgQVBJXCIsXG4gICAgICB2ZXJzaW9uOiBcIjEuMC4wXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJDQUYtVmliZSBDb2ZmZWUgU2hvcCBBUEkgZG9jdW1lbnRhdGlvblwiLFxuICAgIH0sXG4gICAgc2VydmVyczogW1xuICAgICAge1xuICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIGFwaXM6IFtcIi4vc3JjL2FwaS8qLmpzXCJdLFxufTtcblxuY29uc3Qgc3dhZ2dlclNwZWMgPSBzd2FnZ2VySnNkb2Mob3B0aW9ucyk7XG5cbmV4cG9ydCB7IHN3YWdnZXJTcGVjLCBzd2FnZ2VyVWkgfTtcbiIsImltcG9ydCB7IHJvbGVESUtleXMgfSBmcm9tIFwiQC9hcGkvcm9sZS9yb2xlLmRpXCI7XG5pbXBvcnQgeyBSb2xlU2VlZGVyIH0gZnJvbSBcIkAvYXBpL3JvbGUvcm9sZS5zZWVkZXJcIjtcbmltcG9ydCB7IHVzZXJESUtleXMgfSBmcm9tIFwiQC9hcGkvdXNlci91c2VyLmRpXCI7XG5pbXBvcnQgeyBVc2VyU2VlZGVyIH0gZnJvbSBcIkAvYXBpL3VzZXIvdXNlci5zZWVkZXJcIjtcblxuaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIi4uL2RpL2RpLWNvbnRhaW5lclwiO1xuXG5leHBvcnQgY29uc3Qgc2VlZCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdXNlclNlZWRlciA9IG5ldyBVc2VyU2VlZGVyKGNvbnRhaW5lci5nZXQodXNlckRJS2V5cy5yZXBvc2l0b3J5KSk7XG4gIGNvbnN0IHJvbGVTZWVkZXIgPSBuZXcgUm9sZVNlZWRlcihjb250YWluZXIuZ2V0KHJvbGVESUtleXMucmVwb3NpdG9yeSkpO1xuXG4gIGF3YWl0IHJvbGVTZWVkZXIuY3JlYXRlUm9sZXMoKTtcbiAgYXdhaXQgUHJvbWlzZS5hbGwoW3VzZXJTZWVkZXIuY3JlYXRlQWRtaW4oKV0pO1xufTtcbiIsIi8qKlxuICogRGVwZW5kZW5jeSBJbmplY3Rpb24gQ29udGFpbmVyXG4gKiBAY2xhc3MgRGlDb250YWluZXJcbiAqIEBkZXNjcmlwdGlvbiBBIHNpbXBsZSBkZXBlbmRlbmN5IGluamVjdGlvbiBjb250YWluZXIgdGhhdCBhbGxvd3MgeW91IHRvIHJlZ2lzdGVyXG4gKiBhbmQgZ2V0IGRlcGVuZGVuY2llc1xuICogQGV4YW1wbGVcbiAqIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBEaUNvbnRhaW5lcigpO1xuICogY29udGFpbmVyLnJlZ2lzdGVyKFwiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCIsIFtdLCAoKSA9PiBuZXcgTGFuZGluZ1BhZ2VSZXBvc2l0b3J5KCkpO1xuICogY29udGFpbmVyLnJlZ2lzdGVyKFxuICogIFwiTGFuZGluZ1BhZ2VTZXJ2aWNlXCIsXG4gKiAgW1wiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCJdLFxuICogIChsYW5kaW5nUGFnZVJlcG9zaXRvcnkpID0+IG5ldyBMYW5kaW5nUGFnZVNlcnZpY2UobGFuZGluZ1BhZ2VSZXBvc2l0b3J5KSxcbiAqICk7XG4gKlxuICogY29uc3QgbGFuZGluZ1BhZ2VTZXJ2aWNlID0gY29udGFpbmVyLmdldChcIkxhbmRpbmdQYWdlU2VydmljZVwiKTtcbiAqL1xuY2xhc3MgRGlDb250YWluZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRlcGVuZGVuY2llcyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgZGVwZW5kZW5jeVxuICAgKiBAcGFyYW0gbmFtZSAtIE5hbWUgb2YgdGhlIGRlcGVuZGVuY3kgKGV4OiBcIkxhbmRpbmdQYWdlUmVwb3NpdG9yeVwiKVxuICAgKiBAcGFyYW0gZGVwZW5kZW5jaWVzIC0gQXJyYXkgb2YgZGVwZW5kZW5jaWVzIChleDogW1wiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCJdKVxuICAgKiBAcGFyYW0gZnVuYyAtIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgZGVwZW5kZW5jeVxuICAgKi9cbiAgcmVnaXN0ZXIobmFtZSwgZGVwZW5kZW5jaWVzLCBmdW5jKSB7XG4gICAgaWYgKFxuICAgICAgdHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHxcbiAgICAgICFBcnJheS5pc0FycmF5KGRlcGVuZGVuY2llcykgfHxcbiAgICAgIHR5cGVvZiBmdW5jICE9PSBcImZ1bmN0aW9uXCJcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYXJndW1lbnRcIik7XG4gICAgfVxuXG4gICAgdGhpcy5kZXBlbmRlbmNpZXNbbmFtZV0gPSB7XG4gICAgICBkZXBlbmRlbmNpZXMsXG4gICAgICBmdW5jLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgZGVwZW5kZW5jeVxuICAgKiBAcGFyYW0gbmFtZSAtIE5hbWUgb2YgdGhlIGRlcGVuZGVuY3kgKGV4OiBcIkxhbmRpbmdQYWdlUmVwb3NpdG9yeVwiKVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0KG5hbWUpIHtcbiAgICBpZiAoIXRoaXMuZGVwZW5kZW5jaWVzW25hbWVdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYERlcGVuZGVuY3kgbm90IGZvdW5kOiAke25hbWV9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBkZXBlbmRlbmNpZXMsIGZ1bmMgfSA9IHRoaXMuZGVwZW5kZW5jaWVzW25hbWVdO1xuXG4gICAgY29uc3QgZGVwZW5kZW5jaWVzSW5zdGFuY2VzID0gZGVwZW5kZW5jaWVzLm1hcCgoZGVwZW5kZW5jeSkgPT5cbiAgICAgIHRoaXMuZ2V0KGRlcGVuZGVuY3kpLFxuICAgICk7XG5cbiAgICByZXR1cm4gZnVuYyguLi5kZXBlbmRlbmNpZXNJbnN0YW5jZXMpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjb250YWluZXIgPSBuZXcgRGlDb250YWluZXIoKTtcbiIsImltcG9ydCBcIkAvYXBpL3VzZXIvdXNlci5kaVwiO1xuaW1wb3J0IFwiQC9hcGkvZm9vdGVyL2Zvb3Rlci5kaVwiO1xuaW1wb3J0IFwiQC9hcGkvcm9sZS9yb2xlLmRpXCI7XG5pbXBvcnQgXCJAL2FwaS9hdXRoL2F1dGguZGlcIjtcbiIsImltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmltcG9ydCB7IEJhc2VSZXNwb25zZSB9IGZyb20gXCIuLi9yZXNwb25zZS9iYXNlLXJlc3BvbnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJhc2VSZXNwb25zZU1pZGRsZXdhcmUocmVxLCByZXMsIG5leHQpIHtcbiAgcmVzLnN1Y2Nlc3MgPSAocHJvcHMpID0+IHtcbiAgICByZXNcbiAgICAgIC5zdGF0dXMocHJvcHMuc3RhdHVzIHx8IFN0YXR1c0NvZGVzLk9LKVxuICAgICAgLmpzb24oQmFzZVJlc3BvbnNlLnN1Y2Nlc3MocHJvcHMpKTtcbiAgfTtcblxuICByZXMuZXJyb3IgPSAocHJvcHMpID0+IHtcbiAgICByZXNcbiAgICAgIC5zdGF0dXMocHJvcHMuc3RhdHVzIHx8IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNUKVxuICAgICAgLmpzb24oQmFzZVJlc3BvbnNlLmVycm9yKHByb3BzKSk7XG4gIH07XG5cbiAgbmV4dCgpO1xufVxuIiwiaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIkAvY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlXCI7XG5pbXBvcnQgeyBBUElFcnJvciB9IGZyb20gXCJAL3NoYXJlZC9lcnJvci1yZXNwb25zZS9lcnJvci1yZXNwb25zZVwiO1xuXG5jb25zdCBlcnJvckhhbmRsZXJNaWRkbGV3YXJlID0gKGVycm9yLCByZXF1ZXN0LCByZXNwb25zZSwgbmV4dCkgPT4ge1xuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBUElFcnJvcikge1xuICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoZXJyb3Iuc3RhdHVzQ29kZSB8fCA0MDApLmpzb24oe1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgIH0pO1xuICB9XG5cbiAgbmV4dCgpO1xuXG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIEJhc2VSZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZS5lcnJvcihlcnJvcik7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgc3VjY2VzczogZmFsc2UsXG4gICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBcIkludGVybmFsIFNlcnZlciBFcnJvciFcIixcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlcnJvckhhbmRsZXJNaWRkbGV3YXJlO1xuIiwiaW1wb3J0IHsgZ2V0UmVhc29uUGhyYXNlLCBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5leHBvcnQgY2xhc3MgQmFzZVJlc3BvbnNlIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuc3VjY2VzcyA9IGRhdGEuc3VjY2VzcztcbiAgICB0aGlzLnN0YXR1cyA9IGRhdGEuc3RhdHVzO1xuICAgIHRoaXMubWVzc2FnZSA9IGRhdGEubWVzc2FnZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhLmRhdGE7XG4gICAgdGhpcy5kZXRhaWxzID0gZGF0YS5kZXRhaWxzO1xuICB9XG5cbiAgc3RhdGljIHN1Y2Nlc3MoeyBzdGF0dXMgPSBTdGF0dXNDb2Rlcy5PSywgbWVzc2FnZSwgZGF0YSB9KSB7XG4gICAgcmV0dXJuIG5ldyBCYXNlUmVzcG9uc2Uoe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIHN0YXR1cyxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgfHwgZ2V0UmVhc29uUGhyYXNlKHN0YXR1cyksXG4gICAgICBkYXRhLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGVycm9yKHsgbWVzc2FnZSwgc3RhdHVzID0gU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QsIGRldGFpbHMgPSBudWxsIH0pIHtcbiAgICByZXR1cm4gbmV3IEJhc2VSZXNwb25zZSh7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIHN0YXR1cyxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgfHwgZ2V0UmVhc29uUGhyYXNlKHN0YXR1cyksXG4gICAgICBkZXRhaWxzLFxuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQVBJRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHN0YXR1c0NvZGUpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQmFzZVJlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3Rvcihtb2RlbCkge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgfVxuXG4gIGNyZWF0ZShkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuY3JlYXRlKGRhdGEpO1xuICB9XG5cbiAgdXBkYXRlKGlkLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZEJ5SWRBbmRVcGRhdGUoaWQsIGRhdGEsIHtcbiAgICAgIG5ldzogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZShpZCkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmRCeUlkQW5kRGVsZXRlKGlkKTtcbiAgfVxuXG4gIGZpbmRCeUlkKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZEJ5SWQoaWQpO1xuICB9XG5cbiAgZmluZEFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kKCk7XG4gIH1cblxuICBmaW5kT25lKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZE9uZShxdWVyeSk7XG4gIH1cblxuICBmaW5kKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZChxdWVyeSk7XG4gIH1cblxuICBjb3VudChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmNvdW50RG9jdW1lbnRzKHF1ZXJ5KTtcbiAgfVxuXG4gIGFnZ3JlZ2F0ZShwaXBlbGluZSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmFnZ3JlZ2F0ZShwaXBlbGluZSk7XG4gIH1cblxuICBjcmVhdGVNYW55KGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5pbnNlcnRNYW55KGRhdGEpO1xuICB9XG5cbiAgdXBkYXRlTWFueShxdWVyeSwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLnVwZGF0ZU1hbnkocXVlcnksIGRhdGEpO1xuICB9XG5cbiAgYnVsa1dyaXRlKG9wZXJhdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5idWxrV3JpdGUob3BlcmF0aW9ucyk7XG4gIH1cblxuICBhc3luYyB1cHNlcnQocXVlcnksIGRhdGEpIHtcbiAgICBjb25zdCBmaW5kRGF0YSA9IGF3YWl0IHRoaXMuZmluZE9uZShxdWVyeSk7XG5cbiAgICBpZiAoIWZpbmREYXRhKSByZXR1cm4gdGhpcy5jcmVhdGUoZGF0YSk7XG5cbiAgICByZXR1cm4gdGhpcy51cGRhdGUoZmluZERhdGEuX2lkLCBkYXRhKTtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3dyYXBOYXRpdmVTdXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3MtYXN5bmMtZXJyb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3MtcmF0ZS1saW1pdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwLXN0YXR1cy1jb2Rlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dhZ2dlci1qc2RvY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2FnZ2VyLXVpLWV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiQC9jb3JlL2NvbmZpZy9lbnYuY29uZmlnXCI7XG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXIgfSBmcm9tIFwiaHR0cFwiO1xuXG5pbXBvcnQgYXBwIGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IHsgY3JlYXRlRGJDb25uZWN0aW9uIH0gZnJvbSBcIi4vY29yZS9jb25maWcvZGIuY29uZmlnXCI7XG5pbXBvcnQgeyBzZWVkIH0gZnJvbSBcIi4vY29yZS9kYi9zZWVkXCI7XG5cbmNvbnN0IHNlcnZlciA9IGNyZWF0ZVNlcnZlcihhcHApO1xuY29uc3QgeyBQT1JUIH0gPSBwcm9jZXNzLmVudjtcblxuKGFzeW5jICgpID0+IHtcbiAgYXdhaXQgY3JlYXRlRGJDb25uZWN0aW9uKCk7XG4gIGF3YWl0IHNlZWQoKTtcbiAgc2VydmVyLmxpc3RlbihQT1JULCBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYFNlcnZlciBpcyBydW5uaW5nOiBodHRwOi8vbG9jYWxob3N0OiR7UE9SVH1gKTtcbiAgfSk7XG59KSgpO1xuIl0sIm5hbWVzIjpbIlN0YXR1c0NvZGVzIiwiQXV0aER0byIsIkF1dGhDb250cm9sbGVyIiwiYXV0aFNlcnZpY2UiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl9yZWdpc3RlciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiZGF0YSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJyZWdpc3RlciIsImJvZHkiLCJzZW50Iiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJDUkVBVEVEIiwic3RvcCIsIl94IiwiX3gyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfbG9naW4iLCJfY2FsbGVlMiIsInVzZXIiLCJhY2Nlc3NUb2tlbiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImxvZ2luIiwiT0siLCJfeDMiLCJfeDQiLCJjb250YWluZXIiLCJ1c2VyRElLZXlzIiwiQXV0aFNlcnZpY2UiLCJhdXRoRElLZXlzIiwiY29udHJvbGxlciIsInNlcnZpY2UiLCJ1c2VyU2VydmljZSIsImV4cHJlc3MiLCJhdXRoUm91dGVyIiwiUm91dGVyIiwicHJlZml4IiwiYXV0aENvbnRyb2xsZXIiLCJnZXQiLCJwb3N0IiwiY29uY2F0IiwicmVxIiwicmVzIiwiZ2VuZXJhdGVUb2tlbiIsImNvbmZpZyIsImF1dGhSZWdpc3RlckR0byIsInBheWxvYWQiLCJ0b2tlbiIsInJvbGUiLCJjcmVhdGUiLCJzdWIiLCJfaWQiLCJlbWFpbCIsImNvbnRhY3QiLCJjcmVhdGVUb2tlbiIsImFicnVwdCIsIl9jcmVhdGVUb2tlbiIsIl9jb25maWckand0IiwiYWNjZXNzU2VjcmV0IiwiYWNjZXNzRXhwaXJlc0luIiwicmVmcmVzaFNlY3JldCIsInJlZnJlc2hFeHBpcmVzSW4iLCJyZWZyZXNoVG9rZW4iLCJqd3QiLCJ1cGRhdGUiLCJyZWZyZXNoIiwiVXNlckR0byIsIlRva2VuRHRvIiwiYWNjZXNzIiwiRm9vdGVyRHRvIiwiX3JlZiIsImxvY2F0aW9uIiwidGl0bGUiLCJjb3B5cmlnaHQiLCJvcGVuaW5nRGF5Iiwib3BlbmluZ0hvdXIiLCJzb2NpYWxNZWRpYSIsIk9iamVjdCIsImFzc2lnbiIsIkZvb3RlckNvbnRyb2xsZXIiLCJmb29vdGVyU2VydmljZSIsIl9maW5kIiwiZmluZCIsIkZvb3RlclJlcG9zaXRvcnkiLCJGb290ZXJTZXJ2aWNlIiwiZm9vdGVyRElLZXlzIiwicmVwb3NpdG9yeSIsImZvb3RlclJlcG9zaXRvcnkiLCJmb290ZXJTZXJ2aWNlIiwiQmFzZVJlcG9zaXRvcnkiLCJGb290ZXIiLCJfQmFzZVJlcG9zaXRvcnkiLCJfY2FsbFN1cGVyIiwiX2luaGVyaXRzIiwiZm9vdGVyUm91dGVyIiwiZm9vdGVyQ29udHJvbGxlciIsIkJhc2VSZXNwb25zZSIsInN0b3JhZ2VTZXJ2aWNlIiwiX2NyZWF0ZSIsImZvb3RlckR0byIsInNvY2lhbE1lZGlhSWNvbnMiLCJ1cGxvYWRlZHNvY2lhbE1lZGlhSWNvbnMiLCJmaW5kQWxsIiwibGVuZ3RoIiwiZXJyb3IiLCJDT05GTElDVCIsInVwbG9hZEZpbGVzIiwiY3JlYXRlRm9vdGVyIiwiX3VwZGF0ZSIsIl9jYWxsZWUzIiwiZmlsZXMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJOT1RfRk9VTkQiLCJhc3NldE1vZGVsU2NoZW1hIiwiY29udGFjdFNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwiZm9vdGVyU2NoZW1hIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiY29sbGVjdGlvbiIsInRpbWVzdGFtcHMiLCJtb2RlbCIsImF1dG9JbmNyZW1lbnRQbHVnaW4iLCJyb2xlU2NoZW1hIiwidW5pcXVlIiwidHJpbSIsInZlcnNpb25LZXkiLCJwbHVnaW4iLCJpbmNGaWVsZCIsIlJvbGUiLCJSb2xlUmVwb3NpdG9yeSIsIlJvbGVTZWVkZXIiLCJyb2xlRElLZXlzIiwic2VlZGVyIiwicm9sZVJlcG9zaXRvcnkiLCJyb2xlcyIsIl9jcmVhdGVSb2xlcyIsImV4aXN0aW5nUm9sZXMiLCJleGlzdGluZ1JvbGVOYW1lcyIsInJvbGVzVG9DcmVhdGUiLCJtYXAiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsImNyZWF0ZU1hbnkiLCJjcmVhdGVSb2xlcyIsIkNvbnRhY3REdG8iLCJmdWxsTmFtZSIsInByb2ZpbGVJbWFnZSIsInBhc3N3b3JkUmVzZXRDb2RlU2NoZW1hIiwiY29kZSIsInRpbWUiLCJEYXRlIiwicmVmcmVzaFRva2VuU2NoZW1hIiwiY3JlYXRlZEF0Iiwibm93IiwiZXhwaXJlcyIsInVzZXJTY2hlbWEiLCJwYXNzd29yZCIsIlR5cGVzIiwiTnVtYmVyIiwicmVmIiwiVXNlciIsIlVzZXJSZXBvc2l0b3J5IiwiVXNlclNlZWRlciIsIlVzZXJTZXJ2aWNlIiwidXNlclJlcG9zaXRvcnkiLCJoYXNoUGFzc3dvcmQiLCJfY3JlYXRlQWRtaW4iLCJmaW5kT25lIiwiY3JlYXRlQWRtaW4iLCJBUElFcnJvciIsInVzZXJEdG8iLCJmaW5kQnlFbWFpbCIsIl9maW5kQnlFbWFpbCIsIl9maW5kQnlJZCIsImlkIiwiZmluZEJ5SWQiLCJfY2FsbGVlNCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsIl94NSIsInN3YWdnZXJTcGVjIiwic3dhZ2dlclVpIiwiY29va2llUGFyc2VyIiwiY29ycyIsInJhdGVMaW1pdCIsImFwaVByZWZpeCIsImJhc2VSZXNwb25zZU1pZGRsZXdhcmUiLCJlcnJvckhhbmRsZXJNaWRkbGV3YXJlIiwiYXBwIiwidXNlIiwid2luZG93TXMiLCJsaW1pdCIsInN0YW5kYXJkSGVhZGVycyIsImxlZ2FjeUhlYWRlcnMiLCJzZXQiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJqc29uIiwiZGlzYWJsZSIsInNlcnZlIiwic2V0dXAiLCJzZWNyZXQiLCJzaWduIiwiZXhwaXJlc0luIiwiYWxnb3JpdGhtIiwiYmNyeXB0IiwiX2hhc2hQYXNzd29yZCIsInNhbHQiLCJnZW5TYWx0IiwiaGFzaCIsInNjaGVtYSIsIm9wdGlvbnMiLCJFcnJvciIsImZpZWxkT3B0aW9ucyIsIl9vYmplY3RTcHJlYWQiLCJhZGQiLCJfZGVmaW5lUHJvcGVydHkiLCJwcmUiLCJfdGhpcyIsImlzTmV3IiwiY29uc3RydWN0b3IiLCJzb3J0IiwidGhlbiIsImxhc3RSZWNvcmQiLCJkb2NzIiwibGFzdENvdW50IiwiZm9yRWFjaCIsImRvYyIsImluZGV4IiwicGhvbmVOdW1iZXIiLCJocmVmIiwicmVxdWlyZSIsInVybCIsInB1YmxpY0lkIiwic2l6ZSIsImNyZWF0ZURiQ29ubmVjdGlvbiIsIl9jcmVhdGVEYkNvbm5lY3Rpb24iLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIkNPTk5FQ1RJT05fU1RSSU5HIiwiY29uc29sZSIsImxvZyIsInQwIiwicGF0aCIsIk5PREVfRU5WIiwib3ZlcnJpZGUiLCJKV1RfQUxHT1JJVEhNIiwiSldUX0FDQ0VTU19TRUNSRVQiLCJKV1RfQUNDRVNTX0VYUElSRVNfSU4iLCJKV1RfUkVGUkVTSF9TRUNSRVQiLCJKV1RfUkVGUkVTSF9FWFBJUkVTX0lOIiwic3dhZ2dlckpzZG9jIiwiZGVmaW5pdGlvbiIsIm9wZW5hcGkiLCJpbmZvIiwidmVyc2lvbiIsImRlc2NyaXB0aW9uIiwic2VydmVycyIsImFwaXMiLCJzZWVkIiwidXNlclNlZWRlciIsInJvbGVTZWVkZXIiLCJQcm9taXNlIiwiYWxsIiwiRGlDb250YWluZXIiLCJkZXBlbmRlbmNpZXMiLCJuYW1lIiwiZnVuYyIsIkFycmF5IiwiaXNBcnJheSIsIl90aGlzJGRlcGVuZGVuY2llcyRuYSIsImRlcGVuZGVuY2llc0luc3RhbmNlcyIsImRlcGVuZGVuY3kiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJwcm9wcyIsIkJBRF9SRVFVRVNUIiwic3RhdHVzQ29kZSIsImdldFJlYXNvblBocmFzZSIsImRldGFpbHMiLCJfcmVmJHN0YXR1cyIsIl9yZWYyIiwiX3JlZjIkc3RhdHVzIiwiX3JlZjIkZGV0YWlscyIsIl9FcnJvciIsIl93cmFwTmF0aXZlU3VwZXIiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsIl9kZWxldGUiLCJmaW5kQnlJZEFuZERlbGV0ZSIsInF1ZXJ5IiwiY291bnQiLCJjb3VudERvY3VtZW50cyIsImFnZ3JlZ2F0ZSIsInBpcGVsaW5lIiwiaW5zZXJ0TWFueSIsInVwZGF0ZU1hbnkiLCJidWxrV3JpdGUiLCJvcGVyYXRpb25zIiwiX3Vwc2VydCIsImZpbmREYXRhIiwidXBzZXJ0IiwiY3JlYXRlU2VydmVyIiwic2VydmVyIiwiUE9SVCIsImxpc3RlbiJdLCJzb3VyY2VSb290IjoiIn0=