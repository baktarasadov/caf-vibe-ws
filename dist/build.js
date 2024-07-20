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
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.authService.register(request.body);
            case 2:
              response.success({
                message: "Registration successful. Please verify your email.",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.CREATED
              });
            case 3:
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
/* harmony import */ var _services_email_email_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/email/email.service */ "./src/services/email/email.service.js");
/* harmony import */ var _user_user_di__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/user.di */ "./src/api/user/user.di.js");
/* harmony import */ var _auth_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.controller */ "./src/api/auth/auth.controller.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/api/auth/auth.service.js");





var authDIKeys = {
  controller: "auth-controller",
  service: "auth-service",
  emailService: "email-service"
};
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(authDIKeys.emailService, [], function () {
  return new _services_email_email_service__WEBPACK_IMPORTED_MODULE_1__.EmailService();
});
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(authDIKeys.service, [_user_user_di__WEBPACK_IMPORTED_MODULE_2__.userDIKeys.service, authDIKeys.emailService], function (userService, emailService) {
  return new _auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService(userService, emailService);
});
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(authDIKeys.controller, [authDIKeys.service], function (authService) {
  return new _auth_controller__WEBPACK_IMPORTED_MODULE_3__.AuthController(authService);
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
/* harmony import */ var _common_helpers_verification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/helpers/verification */ "./src/common/helpers/verification.js");
/* harmony import */ var _core_config_jwt_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/core/config/jwt.config */ "./src/core/config/jwt.config.js");
/* harmony import */ var _core_response_base_response__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/core/response/base-response */ "./src/core/response/base-response.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_8__);









var AuthService = /*#__PURE__*/function () {
  function AuthService(userService, emailService) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, AuthService);
    this.userService = userService;
    this.emailService = emailService;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(AuthService, [{
    key: "register",
    value: function () {
      var _register = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(authRegisterDto) {
        var _existingUser$emailVe, _existingUser$emailVe2;
        var existingUser, verificationCode, verificationTime, savedUser;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.userService.findByEmail(authRegisterDto.contact.email);
            case 2:
              existingUser = _context.sent;
              if (!(existingUser && (_existingUser$emailVe = existingUser.emailVerification) !== null && _existingUser$emailVe !== void 0 && _existingUser$emailVe.verified)) {
                _context.next = 5;
                break;
              }
              throw new _core_response_base_response__WEBPACK_IMPORTED_MODULE_7__.BaseResponse.error({
                message: "Email is already in use",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_8__.StatusCodes.CONFLICT
              });
            case 5:
              if (!(existingUser && !((_existingUser$emailVe2 = existingUser.emailVerification) !== null && _existingUser$emailVe2 !== void 0 && _existingUser$emailVe2.verified))) {
                _context.next = 8;
                break;
              }
              _context.next = 8;
              return this.userService["delete"](existingUser._id);
            case 8:
              verificationCode = (0,_common_helpers_verification__WEBPACK_IMPORTED_MODULE_5__.generateVerificationCode)();
              verificationTime = (0,_common_helpers_verification__WEBPACK_IMPORTED_MODULE_5__.getVerificationCodeExpiry)(3);
              authRegisterDto.role = 2;
              authRegisterDto.emailVerification = {
                code: verificationCode,
                expiresAt: verificationTime,
                verified: false
              };
              _context.next = 14;
              return this.userService.create(authRegisterDto);
            case 14:
              savedUser = _context.sent;
              _context.next = 17;
              return this.emailService.sendVerificationEmail(savedUser.contact.email, savedUser.emailVerification.code, "Hi, This Email Verification Code");
            case 17:
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
              _config$jwt = _core_config_jwt_config__WEBPACK_IMPORTED_MODULE_6__.config.jwt, accessSecret = _config$jwt.accessSecret, accessExpiresIn = _config$jwt.accessExpiresIn, refreshSecret = _config$jwt.refreshSecret, refreshExpiresIn = _config$jwt.refreshExpiresIn;
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
  }, {
    key: "verificationToken",
    value: function () {
      var _verificationToken = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(payload) {
        var _config$jwt2, verificationExpiresIn, verificationSecret;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _config$jwt2 = _core_config_jwt_config__WEBPACK_IMPORTED_MODULE_6__.config.jwt, verificationExpiresIn = _config$jwt2.verificationExpiresIn, verificationSecret = _config$jwt2.verificationSecret;
              return _context3.abrupt("return", (0,_common_helpers_generate_token__WEBPACK_IMPORTED_MODULE_4__.generateToken)(payload, verificationSecret, verificationExpiresIn));
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function verificationToken(_x3) {
        return _verificationToken.apply(this, arguments);
      }
      return verificationToken;
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

/***/ "./src/api/user/model/email-verification.js":
/*!**************************************************!*\
  !*** ./src/api/user/model/email-verification.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var emailVerificationSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
  code: {
    type: String,
    required: true
  },
  expiresAt: {
    type: Date,
    required: true
  },
  verified: {
    type: Boolean,
    "default": false
  }
}, {
  _id: false
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emailVerificationSchema);

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
/* harmony import */ var _email_verification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-verification */ "./src/api/user/model/email-verification.js");



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
  emailVerification: {
    type: _email_verification__WEBPACK_IMPORTED_MODULE_2__["default"],
    required: false
  },
  passwordReset: {
    type: _email_verification__WEBPACK_IMPORTED_MODULE_2__["default"],
    required: false
  },
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
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_6__);







var UserService = /*#__PURE__*/function () {
  function UserService(userRepository) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, UserService);
    this.userRepository = userRepository;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(UserService, [{
    key: "create",
    value: function () {
      var _create = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(userDto) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_common_helpers_hash_password__WEBPACK_IMPORTED_MODULE_4__["default"])(userDto.password);
            case 2:
              userDto.password = _context.sent;
              return _context.abrupt("return", this.userRepository.create(userDto));
            case 4:
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
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_6__.StatusCodes.NOT_FOUND,
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
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee5(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.findById(id);
            case 2:
              return _context5.abrupt("return", this.userRepository["delete"](id));
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function _delete(_x6) {
        return _delete2.apply(this, arguments);
      }
      return _delete;
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
/* harmony import */ var _api_auth_auth_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/auth/auth.route */ "./src/api/auth/auth.route.js");
/* harmony import */ var _api_footer_footer_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/footer/footer.route */ "./src/api/footer/footer.route.js");
/* harmony import */ var _common_constants_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/constants/api */ "./src/common/constants/api.js");
/* harmony import */ var _core_middleware_base_response_middleware__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/middleware/base-response.middleware */ "./src/core/middleware/base-response.middleware.js");
/* harmony import */ var _core_middleware_error_handler_middleware__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/middleware/error-handler-middleware */ "./src/core/middleware/error-handler-middleware.js");











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
app.use(_core_middleware_base_response_middleware__WEBPACK_IMPORTED_MODULE_9__["default"]);
app.use("/api-docs", _core_config_swagger_config__WEBPACK_IMPORTED_MODULE_0__.swaggerUi.serve, _core_config_swagger_config__WEBPACK_IMPORTED_MODULE_0__.swaggerUi.setup(_core_config_swagger_config__WEBPACK_IMPORTED_MODULE_0__.swaggerSpec));
app.use(_common_constants_api__WEBPACK_IMPORTED_MODULE_8__.apiPrefix, _api_footer_footer_route__WEBPACK_IMPORTED_MODULE_7__["default"]);
app.use(_common_constants_api__WEBPACK_IMPORTED_MODULE_8__.apiPrefix, _api_auth_auth_route__WEBPACK_IMPORTED_MODULE_6__["default"]);
app.use(_core_middleware_error_handler_middleware__WEBPACK_IMPORTED_MODULE_10__["default"]);
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

/***/ "./src/common/helpers/verification.js":
/*!********************************************!*\
  !*** ./src/common/helpers/verification.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateVerificationCode: () => (/* binding */ generateVerificationCode),
/* harmony export */   getVerificationCodeExpiry: () => (/* binding */ getVerificationCodeExpiry)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Generates a random verification code with a specific length using alphanumeric characters.
 * @param {number} length - Length of the verification code.
 * @returns {string} - The generated verification code.
 */
var generateVerificationCode = function generateVerificationCode() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  var result = "";

  // eslint-disable-next-line no-plusplus
  for (var i = 0; i < length; i++) {
    var randomIndex = crypto__WEBPACK_IMPORTED_MODULE_0___default().randomInt(charactersLength);
    result += characters[randomIndex];
  }
  return result;
};
var getVerificationCodeExpiry = function getVerificationCodeExpiry(minutes) {
  return Date.now() + minutes * 60000;
};


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
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
    verificationSecret: process.env.JWT_VERIFICATION_SECRET,
    verificationExpiresIn: process.env.JWT_VERIFICATION_EXPIRES_IN
  }
};

/***/ }),

/***/ "./src/core/config/mail.config.js":
/*!****************************************!*\
  !*** ./src/core/config/mail.config.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendEmail: () => (/* binding */ sendEmail)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_error_response_error_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/error-response/error-response */ "./src/shared/error-response/error-response.js");
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nodemailer */ "nodemailer");
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_3__);




var sendEmail = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(mailOptions) {
    var transporter;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          transporter = nodemailer__WEBPACK_IMPORTED_MODULE_3___default().createTransport({
            service: "gmail",
            auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASSWORD
            }
          });
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
              throw new _shared_error_response_error_response__WEBPACK_IMPORTED_MODULE_2__.APIError("Email Failed to Send!", 403);
            } else {
              console.log("Email sent: ".concat(info.response));
            }
          });
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function sendEmail(_x) {
    return _ref.apply(this, arguments);
  };
}();

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

/***/ "./src/services/email/email.service.js":
/*!*********************************************!*\
  !*** ./src/services/email/email.service.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailService: () => (/* binding */ EmailService)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_config_mail_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/config/mail.config */ "./src/core/config/mail.config.js");





var EmailService = /*#__PURE__*/function () {
  function EmailService() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, EmailService);
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(EmailService, [{
    key: "sendVerificationEmail",
    value: function () {
      var _sendVerificationEmail = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(email, code, title) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", (0,_core_config_mail_config__WEBPACK_IMPORTED_MODULE_4__.sendEmail)({
                from: process.env.MAIL_FROM,
                to: email,
                subject: title,
                text: code
              }));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function sendVerificationEmail(_x, _x2, _x3) {
        return _sendVerificationEmail.apply(this, arguments);
      }
      return sendVerificationEmail;
    }()
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

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

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

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

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
/* harmony import */ var express_async_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express-async-errors */ "express-async-errors");
/* harmony import */ var express_async_errors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express_async_errors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _core_config_db_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/config/db.config */ "./src/core/config/db.config.js");
/* harmony import */ var _core_db_seed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/db/seed */ "./src/core/db/seed.js");








var server = (0,http__WEBPACK_IMPORTED_MODULE_4__.createServer)(_app__WEBPACK_IMPORTED_MODULE_5__["default"]);
var PORT = process.env.PORT;
_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _context2.next = 2;
        return (0,_core_config_db_config__WEBPACK_IMPORTED_MODULE_6__.createDbConnection)();
      case 2:
        _context2.next = 4;
        return (0,_core_db_seed__WEBPACK_IMPORTED_MODULE_7__.seed)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBRSxDQUFDO2NBQUM7Y0FBQTtnQkFBQSxPQUFBclcsUUFBQSxDQUFBUyxJQUFBO1lBQUE7VUFBQSxHQUFBZCxPQUFBO1FBQUEsQ0FDNUQsR0FBQztNQUFDO01BQUE7UUFBQSxPQUFBd0IsU0FBQSxDQUFBVixJQUFBO0lBQUE7RUFBQSxHQUFBTSxRQUFBO0FBQUEsQ0FDSixHQUFFLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9hdXRoL2F1dGguY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvYXV0aC9hdXRoLmRpLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9hdXRoL2F1dGgucm91dGUuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL2F1dGgvYXV0aC5zZXJ2aWNlLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9hdXRoL2R0by9hdXRoLmR0by5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvYXV0aC9kdG8vdG9rZW4uZHRvLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9mb290ZXIvZHRvL2Zvb3Rlci5kdG8uanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL2Zvb3Rlci9mb290ZXIuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvZm9vdGVyL2Zvb3Rlci5kaS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvZm9vdGVyL2Zvb3Rlci5yZXBvc2l0b3kuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL2Zvb3Rlci9mb290ZXIucm91dGUuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL2Zvb3Rlci9mb290ZXIuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvZm9vdGVyL21vZGVsL2Zvb3Rlci5tb2RlbC5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvcm9sZS9tb2RlbC9yb2xlLm1vZGVsLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9yb2xlL3JvbGUuZGkuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL3JvbGUvcm9sZS5yZXBvc2l0b3J5LmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9yb2xlL3JvbGUuc2VlZGVyLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS91c2VyL2R0by91c2VyLmR0by5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvdXNlci9tb2RlbC9lbWFpbC12ZXJpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL3VzZXIvbW9kZWwvdXNlci5tb2RlbC5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvdXNlci91c2VyLmRpLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS91c2VyL3VzZXIucmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvdXNlci91c2VyLnNlZWRlci5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvdXNlci91c2VyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvbW1vbi9jb25zdGFudHMvYXBpLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvbW1vbi9jb25zdGFudHMvcm9sZS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb21tb24vaGVscGVycy9nZW5lcmF0ZS10b2tlbi5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb21tb24vaGVscGVycy9oYXNoLXBhc3N3b3JkLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvbW1vbi9oZWxwZXJzL3ZlcmlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb21tb24vbW9uZ29vc2UvcGx1Z2lucy9hdXRvLWluY3JlbWVudC5wbHVnaW4uanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29tbW9uL3NjaGVtYS9kdG8vY29udGFjdC5kdG8uanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29tbW9uL3NjaGVtYS9tb2RlbC9hc3NldC1tb2RlbC5zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29tbW9uL3NjaGVtYS9tb2RlbC9jb250YWN0LW1vZGVsLnNjaGVtYS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL2NvbmZpZy9kYi5jb25maWcuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29yZS9jb25maWcvZW52LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL2NvbmZpZy9qd3QuY29uZmlnLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvcmUvY29uZmlnL21haWwuY29uZmlnLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvcmUvY29uZmlnL3N3YWdnZXIuY29uZmlnLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvcmUvZGIvc2VlZC5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL2RpL2RpLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL2RpL2RpLWdsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29yZS9taWRkbGV3YXJlL2Jhc2UtcmVzcG9uc2UubWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL21pZGRsZXdhcmUvZXJyb3ItaGFuZGxlci1taWRkbGV3YXJlLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvcmUvcmVzcG9uc2UvYmFzZS1yZXNwb25zZS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9zZXJ2aWNlcy9lbWFpbC9lbWFpbC5zZXJ2aWNlLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL3NoYXJlZC9lcnJvci1yZXNwb25zZS9lcnJvci1yZXNwb25zZS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9zaGFyZWQvcmVwb3NpdG9yeS9iYXNlLnJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwTmF0aXZlU3VwZXJcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcImNvb2tpZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcImNvcnNcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudlwiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzcy1hc3luYy1lcnJvcnNcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3MtcmF0ZS1saW1pdFwiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiaHR0cC1zdGF0dXMtY29kZXNcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIm5vZGVtYWlsZXJcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcInN3YWdnZXItanNkb2NcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcInN3YWdnZXItdWktZXhwcmVzc1wiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiaHR0cFwiIiwid2VicGFjazovL2NmLXdzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NmLXdzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NmLXdzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jZi13cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NmLXdzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvc2VydmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmltcG9ydCB7IEF1dGhEdG8gfSBmcm9tIFwiLi9kdG8vYXV0aC5kdG9cIjtcblxuZXhwb3J0IGNsYXNzIEF1dGhDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoYXV0aFNlcnZpY2UpIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlID0gYXV0aFNlcnZpY2U7XG4gIH1cblxuICBhc3luYyByZWdpc3RlcihyZXF1ZXN0LCByZXNwb25zZSkge1xuICAgIGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UucmVnaXN0ZXIocmVxdWVzdC5ib2R5KTtcblxuICAgIHJlc3BvbnNlLnN1Y2Nlc3Moe1xuICAgICAgbWVzc2FnZTogXCJSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bC4gUGxlYXNlIHZlcmlmeSB5b3VyIGVtYWlsLlwiLFxuICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5DUkVBVEVELFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgbG9naW4ocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5sb2dpbihyZXF1ZXN0LmJvZHkpO1xuXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBcIlwiO1xuICAgIC8vIGdlbmVyYXRlVG9rZW4oXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGlkOiB1c2VyLmlkLFxuICAgIC8vICAgICBsb2dpbjogdXNlci5sb2dpbixcbiAgICAvLyAgICAgcm9sZTogdXNlci5yb2xlLFxuICAgIC8vICAgICBlbnRpdHk6IFwiVXNlclwiLFxuICAgIC8vICAgfSxcbiAgICAvLyAgIFwiMmhcIixcbiAgICAvLyApO1xuXG4gICAgcmVzcG9uc2Uuc3VjY2Vzcyh7XG4gICAgICBtZXNzYWdlOiBcIlVzZXIgTG9naW4gIHN1Y2Nlc3NcIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuT0ssXG4gICAgICBkYXRhOiBuZXcgQXV0aER0byh1c2VyLCBhY2Nlc3NUb2tlbiksXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCJAL2NvcmUvZGkvZGktY29udGFpbmVyXCI7XG5pbXBvcnQgeyBFbWFpbFNlcnZpY2UgfSBmcm9tIFwiQC9zZXJ2aWNlcy9lbWFpbC9lbWFpbC5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IHVzZXJESUtleXMgfSBmcm9tIFwiLi4vdXNlci91c2VyLmRpXCI7XG5pbXBvcnQgeyBBdXRoQ29udHJvbGxlciB9IGZyb20gXCIuL2F1dGguY29udHJvbGxlclwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi9hdXRoLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNvbnN0IGF1dGhESUtleXMgPSB7XG4gIGNvbnRyb2xsZXI6IFwiYXV0aC1jb250cm9sbGVyXCIsXG4gIHNlcnZpY2U6IFwiYXV0aC1zZXJ2aWNlXCIsXG4gIGVtYWlsU2VydmljZTogXCJlbWFpbC1zZXJ2aWNlXCIsXG59O1xuXG5jb250YWluZXIucmVnaXN0ZXIoYXV0aERJS2V5cy5lbWFpbFNlcnZpY2UsIFtdLCAoKSA9PiBuZXcgRW1haWxTZXJ2aWNlKCkpO1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIGF1dGhESUtleXMuc2VydmljZSxcbiAgW3VzZXJESUtleXMuc2VydmljZSwgYXV0aERJS2V5cy5lbWFpbFNlcnZpY2VdLFxuICAodXNlclNlcnZpY2UsIGVtYWlsU2VydmljZSkgPT4gbmV3IEF1dGhTZXJ2aWNlKHVzZXJTZXJ2aWNlLCBlbWFpbFNlcnZpY2UpLFxuKTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKFxuICBhdXRoRElLZXlzLmNvbnRyb2xsZXIsXG4gIFthdXRoRElLZXlzLnNlcnZpY2VdLFxuICAoYXV0aFNlcnZpY2UpID0+IG5ldyBBdXRoQ29udHJvbGxlcihhdXRoU2VydmljZSksXG4pO1xuIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIkAvY29yZS9kaS9kaS1jb250YWluZXJcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5cbmltcG9ydCB7IGF1dGhESUtleXMgfSBmcm9tIFwiLi9hdXRoLmRpXCI7XG5cbmNvbnN0IGF1dGhSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5jb25zdCBwcmVmaXggPSBcIi9hdXRoXCI7XG5cbmNvbnN0IGF1dGhDb250cm9sbGVyID0gY29udGFpbmVyLmdldChhdXRoRElLZXlzLmNvbnRyb2xsZXIpO1xuXG5hdXRoUm91dGVyLnBvc3QoYCR7cHJlZml4fS9sb2dpbmAsIChyZXEsIHJlcykgPT5cbiAgYXV0aENvbnRyb2xsZXIubG9naW4ocmVxLCByZXMpLFxuKTtcblxuYXV0aFJvdXRlci5wb3N0KGAke3ByZWZpeH0vcmVnaXN0ZXJgLCAocmVxLCByZXMpID0+XG4gIGF1dGhDb250cm9sbGVyLnJlZ2lzdGVyKHJlcSwgcmVzKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhSb3V0ZXI7XG4iLCJpbXBvcnQgeyBnZW5lcmF0ZVRva2VuIH0gZnJvbSBcIkAvY29tbW9uL2hlbHBlcnMvZ2VuZXJhdGUtdG9rZW5cIjtcbmltcG9ydCB7XG4gIGdlbmVyYXRlVmVyaWZpY2F0aW9uQ29kZSxcbiAgZ2V0VmVyaWZpY2F0aW9uQ29kZUV4cGlyeSxcbn0gZnJvbSBcIkAvY29tbW9uL2hlbHBlcnMvdmVyaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiQC9jb3JlL2NvbmZpZy9qd3QuY29uZmlnXCI7XG5pbXBvcnQgeyBCYXNlUmVzcG9uc2UgfSBmcm9tIFwiQC9jb3JlL3Jlc3BvbnNlL2Jhc2UtcmVzcG9uc2VcIjtcbmltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHVzZXJTZXJ2aWNlLCBlbWFpbFNlcnZpY2UpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlID0gdXNlclNlcnZpY2U7XG4gICAgdGhpcy5lbWFpbFNlcnZpY2UgPSBlbWFpbFNlcnZpY2U7XG4gIH1cblxuICBhc3luYyByZWdpc3RlcihhdXRoUmVnaXN0ZXJEdG8pIHtcbiAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmZpbmRCeUVtYWlsKFxuICAgICAgYXV0aFJlZ2lzdGVyRHRvLmNvbnRhY3QuZW1haWwsXG4gICAgKTtcblxuICAgIGlmIChleGlzdGluZ1VzZXIgJiYgZXhpc3RpbmdVc2VyLmVtYWlsVmVyaWZpY2F0aW9uPy52ZXJpZmllZCkge1xuICAgICAgdGhyb3cgbmV3IEJhc2VSZXNwb25zZS5lcnJvcih7XG4gICAgICAgIG1lc3NhZ2U6IFwiRW1haWwgaXMgYWxyZWFkeSBpbiB1c2VcIixcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5DT05GTElDVCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChleGlzdGluZ1VzZXIgJiYgIWV4aXN0aW5nVXNlci5lbWFpbFZlcmlmaWNhdGlvbj8udmVyaWZpZWQpIHtcbiAgICAgIGF3YWl0IHRoaXMudXNlclNlcnZpY2UuZGVsZXRlKGV4aXN0aW5nVXNlci5faWQpO1xuICAgIH1cblxuICAgIGNvbnN0IHZlcmlmaWNhdGlvbkNvZGUgPSBnZW5lcmF0ZVZlcmlmaWNhdGlvbkNvZGUoKTtcbiAgICBjb25zdCB2ZXJpZmljYXRpb25UaW1lID0gZ2V0VmVyaWZpY2F0aW9uQ29kZUV4cGlyeSgzKTtcblxuICAgIGF1dGhSZWdpc3RlckR0by5yb2xlID0gMjtcblxuICAgIGF1dGhSZWdpc3RlckR0by5lbWFpbFZlcmlmaWNhdGlvbiA9IHtcbiAgICAgIGNvZGU6IHZlcmlmaWNhdGlvbkNvZGUsXG4gICAgICBleHBpcmVzQXQ6IHZlcmlmaWNhdGlvblRpbWUsXG4gICAgICB2ZXJpZmllZDogZmFsc2UsXG4gICAgfTtcblxuICAgIGNvbnN0IHNhdmVkVXNlciA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuY3JlYXRlKGF1dGhSZWdpc3RlckR0byk7XG5cbiAgICBhd2FpdCB0aGlzLmVtYWlsU2VydmljZS5zZW5kVmVyaWZpY2F0aW9uRW1haWwoXG4gICAgICBzYXZlZFVzZXIuY29udGFjdC5lbWFpbCxcbiAgICAgIHNhdmVkVXNlci5lbWFpbFZlcmlmaWNhdGlvbi5jb2RlLFxuICAgICAgXCJIaSwgVGhpcyBFbWFpbCBWZXJpZmljYXRpb24gQ29kZVwiLFxuICAgICk7XG4gIH1cblxuICBhc3luYyBjcmVhdGVUb2tlbihwYXlsb2FkKSB7XG4gICAgY29uc3QgeyBhY2Nlc3NTZWNyZXQsIGFjY2Vzc0V4cGlyZXNJbiwgcmVmcmVzaFNlY3JldCwgcmVmcmVzaEV4cGlyZXNJbiB9ID1cbiAgICAgIGNvbmZpZy5qd3Q7XG5cbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGF3YWl0IGdlbmVyYXRlVG9rZW4oXG4gICAgICBwYXlsb2FkLFxuICAgICAgYWNjZXNzU2VjcmV0LFxuICAgICAgYWNjZXNzRXhwaXJlc0luLFxuICAgICk7XG5cbiAgICBjb25zdCByZWZyZXNoVG9rZW4gPSBhd2FpdCBnZW5lcmF0ZVRva2VuKFxuICAgICAgcGF5bG9hZCxcbiAgICAgIHJlZnJlc2hTZWNyZXQsXG4gICAgICByZWZyZXNoRXhwaXJlc0luLFxuICAgICk7XG5cbiAgICBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZShwYXlsb2FkLnN1Yiwge1xuICAgICAgdG9rZW46IHsgcmVmcmVzaDogcmVmcmVzaFRva2VuIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBhY2Nlc3NUb2tlbiwgcmVmcmVzaFRva2VuIH07XG4gIH1cblxuICBhc3luYyB2ZXJpZmljYXRpb25Ub2tlbihwYXlsb2FkKSB7XG4gICAgY29uc3QgeyB2ZXJpZmljYXRpb25FeHBpcmVzSW4sIHZlcmlmaWNhdGlvblNlY3JldCB9ID0gY29uZmlnLmp3dDtcblxuICAgIHJldHVybiBnZW5lcmF0ZVRva2VuKHBheWxvYWQsIHZlcmlmaWNhdGlvblNlY3JldCwgdmVyaWZpY2F0aW9uRXhwaXJlc0luKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVXNlckR0byB9IGZyb20gXCJAL2FwaS91c2VyL2R0by91c2VyLmR0b1wiO1xuXG5pbXBvcnQgeyBUb2tlbkR0byB9IGZyb20gXCIuL3Rva2VuLmR0b1wiO1xuXG5leHBvcnQgY2xhc3MgQXV0aER0byB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLnRva2VuID0gbmV3IFRva2VuRHRvKGRhdGEudG9rZW4pO1xuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyRHRvKGRhdGEudXNlcik7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUb2tlbkR0byB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLmFjY2VzcyA9IGRhdGEuYWNjZXNzVG9rZW47XG4gICAgdGhpcy5yZWZyZXNoID0gZGF0YS5yZWZyZXNoVG9rZW47XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBGb290ZXJEdG8ge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgY29udGFjdCxcbiAgICBsb2NhdGlvbixcbiAgICB0aXRsZSxcbiAgICBjb3B5cmlnaHQsXG4gICAgb3BlbmluZ0RheSxcbiAgICBvcGVuaW5nSG91cixcbiAgICBzb2NpYWxNZWRpYSxcbiAgfSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgY29udGFjdCxcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdGl0bGUsXG4gICAgICBjb3B5cmlnaHQsXG4gICAgICBvcGVuaW5nRGF5LFxuICAgICAgb3BlbmluZ0hvdXIsXG4gICAgICBzb2NpYWxNZWRpYSxcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcblxuaW1wb3J0IHsgRm9vdGVyRHRvIH0gZnJvbSBcIi4vZHRvL2Zvb3Rlci5kdG9cIjtcblxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihmb29vdGVyU2VydmljZSkge1xuICAgIHRoaXMuZm9vb3RlclNlcnZpY2UgPSBmb29vdGVyU2VydmljZTtcbiAgfVxuXG4gIGFzeW5jIGZpbmQocmVxLCByZXMpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5mb29vdGVyU2VydmljZS5maW5kKCk7XG5cbiAgICByZXMuc3VjY2Vzcyh7XG4gICAgICBtZXNzYWdlOiBcIkZpbmQgRm9vdGVyIHN1Y2Nlc3NmdWxseSFcIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuT0ssXG4gICAgICBkYXRhOiBkYXRhID8gbmV3IEZvb3RlckR0byhkYXRhKSA6IG51bGwsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCJAL2NvcmUvZGkvZGktY29udGFpbmVyXCI7XG5cbmltcG9ydCB7IEZvb3RlckNvbnRyb2xsZXIgfSBmcm9tIFwiLi9mb290ZXIuY29udHJvbGxlclwiO1xuaW1wb3J0IHsgRm9vdGVyUmVwb3NpdG9yeSB9IGZyb20gXCIuL2Zvb3Rlci5yZXBvc2l0b3lcIjtcbmltcG9ydCB7IEZvb3RlclNlcnZpY2UgfSBmcm9tIFwiLi9mb290ZXIuc2VydmljZVwiO1xuXG5leHBvcnQgY29uc3QgZm9vdGVyRElLZXlzID0ge1xuICBzZXJ2aWNlOiBcImZvb3Rlci1zZXJ2aWNlXCIsXG4gIHJlcG9zaXRvcnk6IFwiZm9vdGVyLXJlcG9zaXRvcnlcIixcbiAgY29udHJvbGxlcjogXCJmb290ZXItY29udHJvbGxlclwiLFxufTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKGZvb3RlckRJS2V5cy5yZXBvc2l0b3J5LCBbXSwgKCkgPT4gbmV3IEZvb3RlclJlcG9zaXRvcnkoKSk7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgZm9vdGVyRElLZXlzLnNlcnZpY2UsXG4gIFtmb290ZXJESUtleXMucmVwb3NpdG9yeV0sXG4gIChmb290ZXJSZXBvc2l0b3J5KSA9PiBuZXcgRm9vdGVyU2VydmljZShmb290ZXJSZXBvc2l0b3J5KSxcbik7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgZm9vdGVyRElLZXlzLmNvbnRyb2xsZXIsXG4gIFtmb290ZXJESUtleXMuc2VydmljZV0sXG4gIChmb290ZXJTZXJ2aWNlKSA9PiBuZXcgRm9vdGVyQ29udHJvbGxlcihmb290ZXJTZXJ2aWNlKSxcbik7XG4iLCJpbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gXCJAL3NoYXJlZC9yZXBvc2l0b3J5L2Jhc2UucmVwb3NpdG9yeVwiO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL21vZGVsL2Zvb3Rlci5tb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgRm9vdGVyUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoRm9vdGVyKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIkAvY29yZS9kaS9kaS1jb250YWluZXJcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5cbmltcG9ydCB7IGZvb3RlckRJS2V5cyB9IGZyb20gXCIuL2Zvb3Rlci5kaVwiO1xuXG5jb25zdCBwcmVmaXggPSBcIi9mb290ZXJzXCI7XG5cbmNvbnN0IGZvb3RlclJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbmNvbnN0IGZvb3RlckNvbnRyb2xsZXIgPSBjb250YWluZXIuZ2V0KGZvb3RlckRJS2V5cy5jb250cm9sbGVyKTtcblxuZm9vdGVyUm91dGVyLmdldChgJHtwcmVmaXh9YCwgKHJlcSwgcmVzKSA9PiBmb290ZXJDb250cm9sbGVyLmZpbmQocmVxLCByZXMpKTtcblxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyUm91dGVyO1xuIiwiaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIkAvY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5leHBvcnQgY2xhc3MgRm9vdGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGZvb3RlclJlcG9zaXRvcnksIHN0b3JhZ2VTZXJ2aWNlKSB7XG4gICAgdGhpcy5mb290ZXJSZXBvc2l0b3J5ID0gZm9vdGVyUmVwb3NpdG9yeTtcbiAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlID0gc3RvcmFnZVNlcnZpY2U7XG4gIH1cblxuICBhc3luYyBjcmVhdGUoZm9vdGVyRHRvLCBzb2NpYWxNZWRpYUljb25zKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZm9vdGVyUmVwb3NpdG9yeS5maW5kQWxsKCk7XG4gICAgbGV0IHVwbG9hZGVkc29jaWFsTWVkaWFJY29ucyA9IFtdO1xuXG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5DT05GTElDVCxcbiAgICAgICAgbWVzc2FnZTogXCJGb290ZXIgYWxyZWFkeSBleGlzdHMgIVwiLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHNvY2lhbE1lZGlhSWNvbnMgJiYgc29jaWFsTWVkaWFJY29ucy5sZW5ndGggPiAwKSB7XG4gICAgICB1cGxvYWRlZHNvY2lhbE1lZGlhSWNvbnMgPVxuICAgICAgICBhd2FpdCB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnVwbG9hZEZpbGVzKHNvY2lhbE1lZGlhSWNvbnMpO1xuICAgIH1cblxuICAgIGZvb3RlckR0by5zb2NpYWxNZWRpYSA9IHVwbG9hZGVkc29jaWFsTWVkaWFJY29ucztcblxuICAgIHJldHVybiB0aGlzLmZvb3RlclJlcG9zaXRvcnkuY3JlYXRlRm9vdGVyKGZvb3RlckR0byk7XG4gIH1cblxuICBhc3luYyBmaW5kKCkge1xuICAgIHJldHVybiB0aGlzLmZvb3RlclJlcG9zaXRvcnkuZmluZEFsbCgpWzBdO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlKGZvb3RlckR0bywgZmlsZXMpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5mb290ZXJSZXBvc2l0b3J5LmZpbmQoKVswXTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5OT1RfRk9VTkQsXG4gICAgICAgIG1lc3NhZ2U6IFwiRm9vdGVyIG5vdCBmb3VuZCAhXCIsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgYXNzZXRNb2RlbFNjaGVtYSB9IGZyb20gXCJAL2NvbW1vbi9zY2hlbWEvbW9kZWwvYXNzZXQtbW9kZWwuc2NoZW1hXCI7XG5pbXBvcnQgeyBjb250YWN0U2NoZW1hIH0gZnJvbSBcIkAvY29tbW9uL3NjaGVtYS9tb2RlbC9jb250YWN0LW1vZGVsLnNjaGVtYVwiO1xuaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBmb290ZXJTY2hlbWEgPSBuZXcgU2NoZW1hKFxuICB7XG4gICAgY29udGFjdDogY29udGFjdFNjaGVtYSxcbiAgICBsb2NhdGlvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBjb3B5cmlnaHQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgb3BlbmluZ0RheToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBvcGVuaW5nSG91cjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBzb2NpYWxNZWRpYTogW2Fzc2V0TW9kZWxTY2hlbWFdLFxuICB9LFxuICB7XG4gICAgY29sbGVjdGlvbjogXCJmb290ZXJcIixcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICB9LFxuKTtcblxuY29uc3QgRm9vdGVyID0gbW9uZ29vc2UubW9kZWwoXCJGb290ZXJcIiwgZm9vdGVyU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IGF1dG9JbmNyZW1lbnRQbHVnaW4gZnJvbSBcIkAvY29tbW9uL21vbmdvb3NlL3BsdWdpbnMvYXV0by1pbmNyZW1lbnQucGx1Z2luXCI7XG5pbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IHJvbGVTY2hlbWEgPSBuZXcgU2NoZW1hKFxuICB7XG4gICAgcm9sZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB0cmltOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBjb2xsZWN0aW9uOiBcInJvbGVzXCIsXG4gICAgdmVyc2lvbktleTogZmFsc2UsXG4gIH0sXG4pLnBsdWdpbihhdXRvSW5jcmVtZW50UGx1Z2luLCB7IGluY0ZpZWxkOiBcIl9pZFwiIH0pO1xuXG5jb25zdCBSb2xlID0gbW9uZ29vc2UubW9kZWwoXCJSb2xlXCIsIHJvbGVTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBSb2xlO1xuIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIkAvY29yZS9kaS9kaS1jb250YWluZXJcIjtcblxuaW1wb3J0IHsgUm9sZVJlcG9zaXRvcnkgfSBmcm9tIFwiLi9yb2xlLnJlcG9zaXRvcnlcIjtcbmltcG9ydCB7IFJvbGVTZWVkZXIgfSBmcm9tIFwiLi9yb2xlLnNlZWRlclwiO1xuXG5leHBvcnQgY29uc3Qgcm9sZURJS2V5cyA9IHtcbiAgcmVwb3NpdG9yeTogXCJyb2xlLXJlcG9zaXRvcnlcIixcbiAgc2VlZGVyOiBcInJvbGUtc2VlZGVyXCIsXG59O1xuXG5jb250YWluZXIucmVnaXN0ZXIocm9sZURJS2V5cy5yZXBvc2l0b3J5LCBbXSwgKCkgPT4gbmV3IFJvbGVSZXBvc2l0b3J5KCkpO1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIHJvbGVESUtleXMuc2VlZGVyLFxuICBbcm9sZURJS2V5cy5yZXBvc2l0b3J5XSxcbiAgKHJvbGVSZXBvc2l0b3J5KSA9PiBuZXcgUm9sZVNlZWRlcihyb2xlUmVwb3NpdG9yeSksXG4pO1xuIiwiaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tIFwiQC9zaGFyZWQvcmVwb3NpdG9yeS9iYXNlLnJlcG9zaXRvcnlcIjtcblxuaW1wb3J0IFJvbGUgZnJvbSBcIi4vbW9kZWwvcm9sZS5tb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgUm9sZVJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFJvbGUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyByb2xlcyB9IGZyb20gXCJAL2NvbW1vbi9jb25zdGFudHMvcm9sZVwiO1xuXG5leHBvcnQgY2xhc3MgUm9sZVNlZWRlciB7XG4gIGNvbnN0cnVjdG9yKHJvbGVSZXBvc2l0b3J5KSB7XG4gICAgdGhpcy5yb2xlUmVwb3NpdG9yeSA9IHJvbGVSZXBvc2l0b3J5O1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlUm9sZXMoKSB7XG4gICAgY29uc3QgZXhpc3RpbmdSb2xlcyA9IGF3YWl0IHRoaXMucm9sZVJlcG9zaXRvcnkuZmluZEFsbCgpO1xuICAgIGNvbnN0IGV4aXN0aW5nUm9sZU5hbWVzID0gZXhpc3RpbmdSb2xlcy5tYXAoKHJvbGUpID0+IHJvbGUucm9sZSk7XG5cbiAgICBjb25zdCByb2xlc1RvQ3JlYXRlID0gcm9sZXMuZmlsdGVyKFxuICAgICAgKHJvbGUpID0+ICFleGlzdGluZ1JvbGVOYW1lcy5pbmNsdWRlcyhyb2xlLnJvbGUpLFxuICAgICk7XG5cbiAgICBpZiAocm9sZXNUb0NyZWF0ZS5sZW5ndGggPiAwKSB7XG4gICAgICBhd2FpdCB0aGlzLnJvbGVSZXBvc2l0b3J5LmNyZWF0ZU1hbnkocm9sZXNUb0NyZWF0ZSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb250YWN0RHRvIH0gZnJvbSBcIkAvY29tbW9uL3NjaGVtYS9kdG8vY29udGFjdC5kdG9cIjtcblxuZXhwb3J0IGNsYXNzIFVzZXJEdG8ge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5mdWxsTmFtZSA9IGRhdGEuZnVsbE5hbWU7XG4gICAgdGhpcy5wcm9maWxlSW1hZ2UgPSBkYXRhLnByb2ZpbGVJbWFnZTtcbiAgICB0aGlzLnJvbGUgPSBkYXRhLnJvbGU7XG4gICAgdGhpcy5jb250YWN0ID0gbmV3IENvbnRhY3REdG8oZGF0YS5jb250YWN0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGVtYWlsVmVyaWZpY2F0aW9uU2NoZW1hID0gbmV3IFNjaGVtYShcbiAge1xuICAgIGNvZGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgZXhwaXJlc0F0OiB7XG4gICAgICB0eXBlOiBEYXRlLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICB2ZXJpZmllZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBfaWQ6IGZhbHNlLFxuICB9LFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZW1haWxWZXJpZmljYXRpb25TY2hlbWE7XG4iLCJpbXBvcnQgeyBjb250YWN0U2NoZW1hIH0gZnJvbSBcIkAvY29tbW9uL3NjaGVtYS9tb2RlbC9jb250YWN0LW1vZGVsLnNjaGVtYVwiO1xuaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5pbXBvcnQgZW1haWxWZXJpZmljYXRpb24gZnJvbSBcIi4vZW1haWwtdmVyaWZpY2F0aW9uXCI7XG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKFxuICB7XG4gICAgZnVsbE5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICB9LFxuICAgIHByb2ZpbGVJbWFnZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdHJpbTogdHJ1ZSB9LFxuICAgIGNvbnRhY3Q6IGNvbnRhY3RTY2hlbWEsXG4gICAgZW1haWxWZXJpZmljYXRpb246IHtcbiAgICAgIHR5cGU6IGVtYWlsVmVyaWZpY2F0aW9uLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgcGFzc3dvcmRSZXNldDoge1xuICAgICAgdHlwZTogZW1haWxWZXJpZmljYXRpb24sXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgICByb2xlOiB7IHR5cGU6IFNjaGVtYS5UeXBlcy5OdW1iZXIsIHJlZjogXCJSb2xlXCIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIH0sXG4gIHtcbiAgICBjb2xsZWN0aW9uOiBcInVzZXJzXCIsXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgfSxcbik7XG5cbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgdXNlclNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJpbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiQC9jb3JlL2RpL2RpLWNvbnRhaW5lclwiO1xuXG5pbXBvcnQgeyBVc2VyUmVwb3NpdG9yeSB9IGZyb20gXCIuL3VzZXIucmVwb3NpdG9yeVwiO1xuaW1wb3J0IHsgVXNlclNlZWRlciB9IGZyb20gXCIuL3VzZXIuc2VlZGVyXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL3VzZXIuc2VydmljZVwiO1xuXG5leHBvcnQgY29uc3QgdXNlckRJS2V5cyA9IHtcbiAgc2VydmljZTogXCJ1c2VyLXNlcnZpY2VcIixcbiAgcmVwb3NpdG9yeTogXCJ1c2VyLXJlcG9zaXRvcnlcIixcbiAgc2VlZGVyOiBcInVzZXItc2VlZGVyXCIsXG59O1xuXG5jb250YWluZXIucmVnaXN0ZXIodXNlckRJS2V5cy5yZXBvc2l0b3J5LCBbXSwgKCkgPT4gbmV3IFVzZXJSZXBvc2l0b3J5KCkpO1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIHVzZXJESUtleXMuc2VlZGVyLFxuICBbdXNlckRJS2V5cy5yZXBvc2l0b3J5XSxcbiAgKHVzZXJSZXBvc2l0b3J5KSA9PiBuZXcgVXNlclNlZWRlcih1c2VyUmVwb3NpdG9yeSksXG4pO1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIHVzZXJESUtleXMuc2VydmljZSxcbiAgW3VzZXJESUtleXMucmVwb3NpdG9yeV0sXG4gICh1c2VyUmVwb3NpdG9yeSkgPT4gbmV3IFVzZXJTZXJ2aWNlKHVzZXJSZXBvc2l0b3J5KSxcbik7XG4iLCJpbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gXCJAL3NoYXJlZC9yZXBvc2l0b3J5L2Jhc2UucmVwb3NpdG9yeVwiO1xuXG5pbXBvcnQgVXNlciBmcm9tIFwiLi9tb2RlbC91c2VyLm1vZGVsXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoVXNlcik7XG4gIH1cbn1cbiIsImltcG9ydCBoYXNoUGFzc3dvcmQgZnJvbSBcIkAvY29tbW9uL2hlbHBlcnMvaGFzaC1wYXNzd29yZFwiO1xuXG5leHBvcnQgY2xhc3MgVXNlclNlZWRlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXJSZXBvc2l0b3J5LCByb2xlUmVwb3NpdG9yeSkge1xuICAgIHRoaXMudXNlclJlcG9zaXRvcnkgPSB1c2VyUmVwb3NpdG9yeTtcbiAgICB0aGlzLnJvbGVSZXBvc2l0b3J5ID0gcm9sZVJlcG9zaXRvcnk7XG4gIH1cblxuICBhc3luYyBjcmVhdGVBZG1pbigpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy51c2VyUmVwb3NpdG9yeS5maW5kT25lKHsgcm9sZTogMSB9KTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgY29uc3QgcGFzc3dvcmQgPSBhd2FpdCBoYXNoUGFzc3dvcmQoXCJiYWt0YXJhZG1pblwiKTtcblxuICAgICAgcmV0dXJuIHRoaXMudXNlclJlcG9zaXRvcnkuY3JlYXRlKHtcbiAgICAgICAgZW1haWw6IFwiYmFrdGFyYWRtaW5AZ21haWwuY29tXCIsXG4gICAgICAgIGZ1bGxOYW1lOiBcImJha3RhciBhZG1pblwiLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgcm9sZTogMSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgaGFzaFBhc3N3b3JkIGZyb20gXCJAL2NvbW1vbi9oZWxwZXJzL2hhc2gtcGFzc3dvcmRcIjtcbmltcG9ydCB7IEJhc2VSZXNwb25zZSB9IGZyb20gXCJAL2NvcmUvcmVzcG9uc2UvYmFzZS1yZXNwb25zZVwiO1xuaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcblxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IodXNlclJlcG9zaXRvcnkpIHtcbiAgICB0aGlzLnVzZXJSZXBvc2l0b3J5ID0gdXNlclJlcG9zaXRvcnk7XG4gIH1cblxuICBhc3luYyBjcmVhdGUodXNlckR0bykge1xuICAgIHVzZXJEdG8ucGFzc3dvcmQgPSBhd2FpdCBoYXNoUGFzc3dvcmQodXNlckR0by5wYXNzd29yZCk7XG5cbiAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS5jcmVhdGUodXNlckR0byk7XG4gIH1cblxuICBhc3luYyBmaW5kQnlFbWFpbChlbWFpbCkge1xuICAgIHJldHVybiB0aGlzLnVzZXJSZXBvc2l0b3J5LmZpbmRPbmUoeyBcImNvbnRhY3QuZW1haWxcIjogZW1haWwgfSk7XG4gIH1cblxuICBhc3luYyBmaW5kQnlJZChpZCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnVzZXJSZXBvc2l0b3J5LmZpbmRCeUlkKGlkKTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5OT1RfRk9VTkQsXG4gICAgICAgIG1lc3NhZ2U6IFwiVXNlciBub3QgZm91bmQhXCIsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZShpZCwgdXNlckR0bykge1xuICAgIGF3YWl0IHRoaXMuZmluZEJ5SWQoaWQpO1xuXG4gICAgcmV0dXJuIHRoaXMudXNlclJlcG9zaXRvcnkudXBkYXRlKGlkLCB1c2VyRHRvKTtcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZShpZCkge1xuICAgIGF3YWl0IHRoaXMuZmluZEJ5SWQoaWQpO1xuXG4gICAgcmV0dXJuIHRoaXMudXNlclJlcG9zaXRvcnkuZGVsZXRlKGlkKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgc3dhZ2dlclNwZWMsIHN3YWdnZXJVaSB9IGZyb20gXCJAL2NvcmUvY29uZmlnL3N3YWdnZXIuY29uZmlnXCI7XG5pbXBvcnQgXCJAL2NvcmUvZGkvZGktZ2xvYmFsc1wiO1xuaW1wb3J0IGNvb2tpZVBhcnNlciBmcm9tIFwiY29va2llLXBhcnNlclwiO1xuaW1wb3J0IGNvcnMgZnJvbSBcImNvcnNcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyByYXRlTGltaXQgfSBmcm9tIFwiZXhwcmVzcy1yYXRlLWxpbWl0XCI7XG5cbmltcG9ydCBhdXRoUm91dGVyIGZyb20gXCIuL2FwaS9hdXRoL2F1dGgucm91dGVcIjtcbmltcG9ydCBmb290ZXJSb3V0ZXIgZnJvbSBcIi4vYXBpL2Zvb3Rlci9mb290ZXIucm91dGVcIjtcbmltcG9ydCB7IGFwaVByZWZpeCB9IGZyb20gXCIuL2NvbW1vbi9jb25zdGFudHMvYXBpXCI7XG5pbXBvcnQgYmFzZVJlc3BvbnNlTWlkZGxld2FyZSBmcm9tIFwiLi9jb3JlL21pZGRsZXdhcmUvYmFzZS1yZXNwb25zZS5taWRkbGV3YXJlXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyTWlkZGxld2FyZSBmcm9tIFwiLi9jb3JlL21pZGRsZXdhcmUvZXJyb3ItaGFuZGxlci1taWRkbGV3YXJlXCI7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShcbiAgcmF0ZUxpbWl0KHtcbiAgICB3aW5kb3dNczogMTAgKiA2MCAqIDEwMDAsXG4gICAgbGltaXQ6IDEwMCxcbiAgICBzdGFuZGFyZEhlYWRlcnM6IFwiZHJhZnQtNlwiLFxuICAgIGxlZ2FjeUhlYWRlcnM6IGZhbHNlLFxuICAgIG1lc3NhZ2U6IFwiVG9vIG1hbnkgcmVxdWVzdHNcIixcbiAgfSksXG4pO1xuYXBwLnNldChcInRydXN0IHByb3h5XCIsIDEpO1xuYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XG5hcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xuYXBwLnVzZShjb3JzKCkpO1xuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5hcHAudXNlKGJhc2VSZXNwb25zZU1pZGRsZXdhcmUpO1xuYXBwLnVzZShcIi9hcGktZG9jc1wiLCBzd2FnZ2VyVWkuc2VydmUsIHN3YWdnZXJVaS5zZXR1cChzd2FnZ2VyU3BlYykpO1xuXG5hcHAudXNlKGFwaVByZWZpeCwgZm9vdGVyUm91dGVyKTtcbmFwcC51c2UoYXBpUHJlZml4LCBhdXRoUm91dGVyKTtcblxuYXBwLnVzZShlcnJvckhhbmRsZXJNaWRkbGV3YXJlKTtcbmV4cG9ydCBkZWZhdWx0IGFwcDtcbiIsImV4cG9ydCBjb25zdCBhcGlQcmVmaXggPSBcIi9hcGkvdjFcIjtcbiIsImV4cG9ydCBjb25zdCByb2xlcyA9IFt7IHJvbGU6IFwiYWRtaW5cIiB9LCB7IHJvbGU6IFwidXNlclwiIH1dO1xuIiwiaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVRva2VuID0gKHBheWxvYWQsIHNlY3JldCwgdGltZSkgPT5cbiAgand0LnNpZ24ocGF5bG9hZCwgc2VjcmV0LCB7XG4gICAgZXhwaXJlc0luOiB0aW1lLFxuICAgIGFsZ29yaXRobTogXCJIUzUxMlwiLFxuICB9KTtcbiIsImltcG9ydCAqIGFzIGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhc2hQYXNzd29yZChwYXNzd29yZCkge1xuICBjb25zdCBzYWx0ID0gYXdhaXQgYmNyeXB0LmdlblNhbHQoMTApO1xuXG4gIHJldHVybiBiY3J5cHQuaGFzaChwYXNzd29yZCwgc2FsdCk7XG59XG4iLCJpbXBvcnQgY3J5cHRvIGZyb20gXCJjcnlwdG9cIjtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSByYW5kb20gdmVyaWZpY2F0aW9uIGNvZGUgd2l0aCBhIHNwZWNpZmljIGxlbmd0aCB1c2luZyBhbHBoYW51bWVyaWMgY2hhcmFjdGVycy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggLSBMZW5ndGggb2YgdGhlIHZlcmlmaWNhdGlvbiBjb2RlLlxuICogQHJldHVybnMge3N0cmluZ30gLSBUaGUgZ2VuZXJhdGVkIHZlcmlmaWNhdGlvbiBjb2RlLlxuICovXG5jb25zdCBnZW5lcmF0ZVZlcmlmaWNhdGlvbkNvZGUgPSAobGVuZ3RoID0gNSkgPT4ge1xuICBjb25zdCBjaGFyYWN0ZXJzID1cbiAgICBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5XCI7XG4gIGNvbnN0IGNoYXJhY3RlcnNMZW5ndGggPSBjaGFyYWN0ZXJzLmxlbmd0aDtcbiAgbGV0IHJlc3VsdCA9IFwiXCI7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByYW5kb21JbmRleCA9IGNyeXB0by5yYW5kb21JbnQoY2hhcmFjdGVyc0xlbmd0aCk7XG4gICAgcmVzdWx0ICs9IGNoYXJhY3RlcnNbcmFuZG9tSW5kZXhdO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGdldFZlcmlmaWNhdGlvbkNvZGVFeHBpcnkgPSAobWludXRlcykgPT4gRGF0ZS5ub3coKSArIG1pbnV0ZXMgKiA2MDAwMDtcblxuZXhwb3J0IHsgZ2VuZXJhdGVWZXJpZmljYXRpb25Db2RlLCBnZXRWZXJpZmljYXRpb25Db2RlRXhwaXJ5IH07XG4iLCIvKipcbiAqIEBkZXNjcmlwdGlvbiBNb25nb29zZSBwbHVnaW4gdG8gYXV0byBpbmNyZW1lbnQgYSBmaWVsZFxuICogQHBhcmFtIHtNb25nb29zZS5TY2hlbWF9IHNjaGVtYVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXV0b0luY3JlbWVudFBsdWdpbihzY2hlbWEsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zLmluY0ZpZWxkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHNwZWNpZnkgaW5jRmllbGQhXCIpO1xuICB9XG5cbiAgbGV0IGZpZWxkT3B0aW9ucyA9IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gIH07XG5cbiAgaWYgKG9wdGlvbnMuaW5jRmllbGQgIT09IFwiX2lkXCIpIHtcbiAgICBmaWVsZE9wdGlvbnMgPSB7XG4gICAgICAuLi5maWVsZE9wdGlvbnMsXG4gICAgICB1bmlxdWU6IHRydWUsXG4gICAgfTtcbiAgfVxuXG4gIHNjaGVtYS5hZGQoe1xuICAgIFtvcHRpb25zLmluY0ZpZWxkXTogZmllbGRPcHRpb25zLFxuICB9KTtcblxuICBzY2hlbWEucHJlKFwic2F2ZVwiLCBmdW5jdGlvbiAobmV4dCkge1xuICAgIGlmICh0aGlzLmlzTmV3KSB7XG4gICAgICB0aGlzLmNvbnN0cnVjdG9yXG4gICAgICAgIC5maW5kT25lKHt9LCB7fSwgeyBzb3J0OiB7IFtvcHRpb25zLmluY0ZpZWxkXTogLTEgfSB9KVxuICAgICAgICAudGhlbigobGFzdFJlY29yZCkgPT4ge1xuICAgICAgICAgIHRoaXNbb3B0aW9ucy5pbmNGaWVsZF0gPSBsYXN0UmVjb3JkXG4gICAgICAgICAgICA/IGxhc3RSZWNvcmRbb3B0aW9ucy5pbmNGaWVsZF0gKyAxXG4gICAgICAgICAgICA6IDE7XG5cbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9KTtcblxuICBzY2hlbWEucHJlKFwiaW5zZXJ0TWFueVwiLCBhc3luYyBmdW5jdGlvbiAobmV4dCwgZG9jcykge1xuICAgIGNvbnN0IGxhc3RSZWNvcmQgPSBhd2FpdCB0aGlzLmZpbmRPbmUoXG4gICAgICB7fSxcbiAgICAgIHt9LFxuICAgICAgeyBzb3J0OiB7IFtvcHRpb25zLmluY0ZpZWxkXTogLTEgfSB9LFxuICAgICk7XG5cbiAgICBjb25zdCBsYXN0Q291bnQgPSBsYXN0UmVjb3JkID8gbGFzdFJlY29yZFtvcHRpb25zLmluY0ZpZWxkXSA6IDA7XG5cbiAgICBkb2NzLmZvckVhY2goKGRvYywgaW5kZXgpID0+IHtcbiAgICAgIGRvY1tvcHRpb25zLmluY0ZpZWxkXSA9IGxhc3RDb3VudCArIGluZGV4ICsgMTtcbiAgICB9KTtcblxuICAgIG5leHQoKTtcbiAgfSk7XG59XG4iLCJleHBvcnQgY2xhc3MgQ29udGFjdER0byB7XG4gIGNvbnN0cnVjdG9yKHsgZW1haWwsIHBob25lTnVtYmVyIH0pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgIGVtYWlsLFxuICAgICAgcGhvbmVOdW1iZXIsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGNvbnN0IGFzc2V0TW9kZWxTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxuICB7XG4gICAgaHJlZjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZTogdHJ1ZSxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgICB1cmw6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgcHVibGljSWQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG4gICAgc2l6ZToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBfaWQ6IGZhbHNlLFxuICB9LFxuKTtcbiIsImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGNvbnN0IGNvbnRhY3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxuICB7XG4gICAgZW1haWw6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHRyaW06IHRydWUsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHBob25lTnVtYmVyOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIF9pZDogZmFsc2UsXG4gIH0sXG4pO1xuIiwiaW1wb3J0IFwiQC9jb3JlL2NvbmZpZy9lbnYuY29uZmlnXCI7XG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVEYkNvbm5lY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5DT05ORUNUSU9OX1NUUklORyk7XG4gICAgY29uc29sZS5sb2coXCJNb25nb0RCIENvbm5lY3RlZFwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiTW9uZ29EQiBDb25uZWN0aW9uIEVycm9yOlwiLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCJkb3RlbnZcIjtcblxuY29uZmlnKCk7XG5cbmNvbmZpZyh7XG4gIHBhdGg6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyBcIi5lbnYubG9jYWxcIiA6IFwiLmVudlwiLFxuICBvdmVycmlkZTogdHJ1ZSxcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgand0OiB7XG4gICAgYWxnb3JpdGhtOiBwcm9jZXNzLmVudi5KV1RfQUxHT1JJVEhNLFxuICAgIGFjY2Vzc1NlY3JldDogcHJvY2Vzcy5lbnYuSldUX0FDQ0VTU19TRUNSRVQsXG4gICAgYWNjZXNzRXhwaXJlc0luOiBwcm9jZXNzLmVudi5KV1RfQUNDRVNTX0VYUElSRVNfSU4sXG4gICAgcmVmcmVzaFNlY3JldDogcHJvY2Vzcy5lbnYuSldUX1JFRlJFU0hfU0VDUkVULFxuICAgIHJlZnJlc2hFeHBpcmVzSW46IHByb2Nlc3MuZW52LkpXVF9SRUZSRVNIX0VYUElSRVNfSU4sXG4gICAgdmVyaWZpY2F0aW9uU2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfVkVSSUZJQ0FUSU9OX1NFQ1JFVCxcbiAgICB2ZXJpZmljYXRpb25FeHBpcmVzSW46IHByb2Nlc3MuZW52LkpXVF9WRVJJRklDQVRJT05fRVhQSVJFU19JTixcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBBUElFcnJvciB9IGZyb20gXCJAL3NoYXJlZC9lcnJvci1yZXNwb25zZS9lcnJvci1yZXNwb25zZVwiO1xuaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSBcIm5vZGVtYWlsZXJcIjtcblxuZXhwb3J0IGNvbnN0IHNlbmRFbWFpbCA9IGFzeW5jIChtYWlsT3B0aW9ucykgPT4ge1xuICBjb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgICBzZXJ2aWNlOiBcImdtYWlsXCIsXG4gICAgYXV0aDoge1xuICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuTUFJTF9VU0VSLFxuICAgICAgcGFzczogcHJvY2Vzcy5lbnYuTUFJTF9QQVNTV09SRCxcbiAgICB9LFxuICB9KTtcblxuICB0cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucywgKGVycm9yLCBpbmZvKSA9PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB0aHJvdyBuZXcgQVBJRXJyb3IoXCJFbWFpbCBGYWlsZWQgdG8gU2VuZCFcIiwgNDAzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYEVtYWlsIHNlbnQ6ICR7aW5mby5yZXNwb25zZX1gKTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcyAqL1xuaW1wb3J0IHN3YWdnZXJKc2RvYyBmcm9tIFwic3dhZ2dlci1qc2RvY1wiO1xuaW1wb3J0IHN3YWdnZXJVaSBmcm9tIFwic3dhZ2dlci11aS1leHByZXNzXCI7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIGRlZmluaXRpb246IHtcbiAgICBvcGVuYXBpOiBcIjMuMC4wXCIsXG4gICAgaW5mbzoge1xuICAgICAgdGl0bGU6IFwiQ0FGLVZpYmUgQ29mZmVlIFNob3AgQVBJXCIsXG4gICAgICB2ZXJzaW9uOiBcIjEuMC4wXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJDQUYtVmliZSBDb2ZmZWUgU2hvcCBBUEkgZG9jdW1lbnRhdGlvblwiLFxuICAgIH0sXG4gICAgc2VydmVyczogW1xuICAgICAge1xuICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIGFwaXM6IFtcIi4vc3JjL2FwaS8qLmpzXCJdLFxufTtcblxuY29uc3Qgc3dhZ2dlclNwZWMgPSBzd2FnZ2VySnNkb2Mob3B0aW9ucyk7XG5cbmV4cG9ydCB7IHN3YWdnZXJTcGVjLCBzd2FnZ2VyVWkgfTtcbiIsImltcG9ydCB7IHJvbGVESUtleXMgfSBmcm9tIFwiQC9hcGkvcm9sZS9yb2xlLmRpXCI7XG5pbXBvcnQgeyBSb2xlU2VlZGVyIH0gZnJvbSBcIkAvYXBpL3JvbGUvcm9sZS5zZWVkZXJcIjtcbmltcG9ydCB7IHVzZXJESUtleXMgfSBmcm9tIFwiQC9hcGkvdXNlci91c2VyLmRpXCI7XG5pbXBvcnQgeyBVc2VyU2VlZGVyIH0gZnJvbSBcIkAvYXBpL3VzZXIvdXNlci5zZWVkZXJcIjtcblxuaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIi4uL2RpL2RpLWNvbnRhaW5lclwiO1xuXG5leHBvcnQgY29uc3Qgc2VlZCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdXNlclNlZWRlciA9IG5ldyBVc2VyU2VlZGVyKGNvbnRhaW5lci5nZXQodXNlckRJS2V5cy5yZXBvc2l0b3J5KSk7XG4gIGNvbnN0IHJvbGVTZWVkZXIgPSBuZXcgUm9sZVNlZWRlcihjb250YWluZXIuZ2V0KHJvbGVESUtleXMucmVwb3NpdG9yeSkpO1xuXG4gIGF3YWl0IHJvbGVTZWVkZXIuY3JlYXRlUm9sZXMoKTtcbiAgYXdhaXQgUHJvbWlzZS5hbGwoW3VzZXJTZWVkZXIuY3JlYXRlQWRtaW4oKV0pO1xufTtcbiIsIi8qKlxuICogRGVwZW5kZW5jeSBJbmplY3Rpb24gQ29udGFpbmVyXG4gKiBAY2xhc3MgRGlDb250YWluZXJcbiAqIEBkZXNjcmlwdGlvbiBBIHNpbXBsZSBkZXBlbmRlbmN5IGluamVjdGlvbiBjb250YWluZXIgdGhhdCBhbGxvd3MgeW91IHRvIHJlZ2lzdGVyXG4gKiBhbmQgZ2V0IGRlcGVuZGVuY2llc1xuICogQGV4YW1wbGVcbiAqIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBEaUNvbnRhaW5lcigpO1xuICogY29udGFpbmVyLnJlZ2lzdGVyKFwiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCIsIFtdLCAoKSA9PiBuZXcgTGFuZGluZ1BhZ2VSZXBvc2l0b3J5KCkpO1xuICogY29udGFpbmVyLnJlZ2lzdGVyKFxuICogIFwiTGFuZGluZ1BhZ2VTZXJ2aWNlXCIsXG4gKiAgW1wiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCJdLFxuICogIChsYW5kaW5nUGFnZVJlcG9zaXRvcnkpID0+IG5ldyBMYW5kaW5nUGFnZVNlcnZpY2UobGFuZGluZ1BhZ2VSZXBvc2l0b3J5KSxcbiAqICk7XG4gKlxuICogY29uc3QgbGFuZGluZ1BhZ2VTZXJ2aWNlID0gY29udGFpbmVyLmdldChcIkxhbmRpbmdQYWdlU2VydmljZVwiKTtcbiAqL1xuY2xhc3MgRGlDb250YWluZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRlcGVuZGVuY2llcyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgZGVwZW5kZW5jeVxuICAgKiBAcGFyYW0gbmFtZSAtIE5hbWUgb2YgdGhlIGRlcGVuZGVuY3kgKGV4OiBcIkxhbmRpbmdQYWdlUmVwb3NpdG9yeVwiKVxuICAgKiBAcGFyYW0gZGVwZW5kZW5jaWVzIC0gQXJyYXkgb2YgZGVwZW5kZW5jaWVzIChleDogW1wiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCJdKVxuICAgKiBAcGFyYW0gZnVuYyAtIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgZGVwZW5kZW5jeVxuICAgKi9cbiAgcmVnaXN0ZXIobmFtZSwgZGVwZW5kZW5jaWVzLCBmdW5jKSB7XG4gICAgaWYgKFxuICAgICAgdHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHxcbiAgICAgICFBcnJheS5pc0FycmF5KGRlcGVuZGVuY2llcykgfHxcbiAgICAgIHR5cGVvZiBmdW5jICE9PSBcImZ1bmN0aW9uXCJcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYXJndW1lbnRcIik7XG4gICAgfVxuXG4gICAgdGhpcy5kZXBlbmRlbmNpZXNbbmFtZV0gPSB7XG4gICAgICBkZXBlbmRlbmNpZXMsXG4gICAgICBmdW5jLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgZGVwZW5kZW5jeVxuICAgKiBAcGFyYW0gbmFtZSAtIE5hbWUgb2YgdGhlIGRlcGVuZGVuY3kgKGV4OiBcIkxhbmRpbmdQYWdlUmVwb3NpdG9yeVwiKVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0KG5hbWUpIHtcbiAgICBpZiAoIXRoaXMuZGVwZW5kZW5jaWVzW25hbWVdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYERlcGVuZGVuY3kgbm90IGZvdW5kOiAke25hbWV9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBkZXBlbmRlbmNpZXMsIGZ1bmMgfSA9IHRoaXMuZGVwZW5kZW5jaWVzW25hbWVdO1xuXG4gICAgY29uc3QgZGVwZW5kZW5jaWVzSW5zdGFuY2VzID0gZGVwZW5kZW5jaWVzLm1hcCgoZGVwZW5kZW5jeSkgPT5cbiAgICAgIHRoaXMuZ2V0KGRlcGVuZGVuY3kpLFxuICAgICk7XG5cbiAgICByZXR1cm4gZnVuYyguLi5kZXBlbmRlbmNpZXNJbnN0YW5jZXMpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjb250YWluZXIgPSBuZXcgRGlDb250YWluZXIoKTtcbiIsImltcG9ydCBcIkAvYXBpL3VzZXIvdXNlci5kaVwiO1xuaW1wb3J0IFwiQC9hcGkvZm9vdGVyL2Zvb3Rlci5kaVwiO1xuaW1wb3J0IFwiQC9hcGkvcm9sZS9yb2xlLmRpXCI7XG5pbXBvcnQgXCJAL2FwaS9hdXRoL2F1dGguZGlcIjtcbiIsImltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmltcG9ydCB7IEJhc2VSZXNwb25zZSB9IGZyb20gXCIuLi9yZXNwb25zZS9iYXNlLXJlc3BvbnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJhc2VSZXNwb25zZU1pZGRsZXdhcmUocmVxLCByZXMsIG5leHQpIHtcbiAgcmVzLnN1Y2Nlc3MgPSAocHJvcHMpID0+IHtcbiAgICByZXNcbiAgICAgIC5zdGF0dXMocHJvcHMuc3RhdHVzIHx8IFN0YXR1c0NvZGVzLk9LKVxuICAgICAgLmpzb24oQmFzZVJlc3BvbnNlLnN1Y2Nlc3MocHJvcHMpKTtcbiAgfTtcblxuICByZXMuZXJyb3IgPSAocHJvcHMpID0+IHtcbiAgICByZXNcbiAgICAgIC5zdGF0dXMocHJvcHMuc3RhdHVzIHx8IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNUKVxuICAgICAgLmpzb24oQmFzZVJlc3BvbnNlLmVycm9yKHByb3BzKSk7XG4gIH07XG5cbiAgbmV4dCgpO1xufVxuIiwiaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIkAvY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlXCI7XG5pbXBvcnQgeyBBUElFcnJvciB9IGZyb20gXCJAL3NoYXJlZC9lcnJvci1yZXNwb25zZS9lcnJvci1yZXNwb25zZVwiO1xuXG5jb25zdCBlcnJvckhhbmRsZXJNaWRkbGV3YXJlID0gKGVycm9yLCByZXF1ZXN0LCByZXNwb25zZSwgbmV4dCkgPT4ge1xuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBUElFcnJvcikge1xuICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoZXJyb3Iuc3RhdHVzQ29kZSB8fCA0MDApLmpzb24oe1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgIH0pO1xuICB9XG5cbiAgbmV4dCgpO1xuXG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIEJhc2VSZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZS5lcnJvcihlcnJvcik7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgc3VjY2VzczogZmFsc2UsXG4gICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBcIkludGVybmFsIFNlcnZlciBFcnJvciFcIixcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlcnJvckhhbmRsZXJNaWRkbGV3YXJlO1xuIiwiaW1wb3J0IHsgZ2V0UmVhc29uUGhyYXNlLCBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5leHBvcnQgY2xhc3MgQmFzZVJlc3BvbnNlIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuc3VjY2VzcyA9IGRhdGEuc3VjY2VzcztcbiAgICB0aGlzLnN0YXR1cyA9IGRhdGEuc3RhdHVzO1xuICAgIHRoaXMubWVzc2FnZSA9IGRhdGEubWVzc2FnZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhLmRhdGE7XG4gICAgdGhpcy5kZXRhaWxzID0gZGF0YS5kZXRhaWxzO1xuICB9XG5cbiAgc3RhdGljIHN1Y2Nlc3MoeyBzdGF0dXMgPSBTdGF0dXNDb2Rlcy5PSywgbWVzc2FnZSwgZGF0YSB9KSB7XG4gICAgcmV0dXJuIG5ldyBCYXNlUmVzcG9uc2Uoe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIHN0YXR1cyxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgfHwgZ2V0UmVhc29uUGhyYXNlKHN0YXR1cyksXG4gICAgICBkYXRhLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGVycm9yKHsgbWVzc2FnZSwgc3RhdHVzID0gU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QsIGRldGFpbHMgPSBudWxsIH0pIHtcbiAgICByZXR1cm4gbmV3IEJhc2VSZXNwb25zZSh7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIHN0YXR1cyxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgfHwgZ2V0UmVhc29uUGhyYXNlKHN0YXR1cyksXG4gICAgICBkZXRhaWxzLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBzZW5kRW1haWwgfSBmcm9tIFwiQC9jb3JlL2NvbmZpZy9tYWlsLmNvbmZpZ1wiO1xuXG5leHBvcnQgY2xhc3MgRW1haWxTZXJ2aWNlIHtcbiAgYXN5bmMgc2VuZFZlcmlmaWNhdGlvbkVtYWlsKGVtYWlsLCBjb2RlLCB0aXRsZSkge1xuICAgIHJldHVybiBzZW5kRW1haWwoe1xuICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuTUFJTF9GUk9NLFxuICAgICAgdG86IGVtYWlsLFxuICAgICAgc3ViamVjdDogdGl0bGUsXG4gICAgICB0ZXh0OiBjb2RlLFxuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQVBJRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHN0YXR1c0NvZGUpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQmFzZVJlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3Rvcihtb2RlbCkge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgfVxuXG4gIGNyZWF0ZShkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuY3JlYXRlKGRhdGEpO1xuICB9XG5cbiAgdXBkYXRlKGlkLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZEJ5SWRBbmRVcGRhdGUoaWQsIGRhdGEsIHtcbiAgICAgIG5ldzogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZShpZCkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmRCeUlkQW5kRGVsZXRlKGlkKTtcbiAgfVxuXG4gIGZpbmRCeUlkKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZEJ5SWQoaWQpO1xuICB9XG5cbiAgZmluZEFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kKCk7XG4gIH1cblxuICBmaW5kT25lKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZE9uZShxdWVyeSk7XG4gIH1cblxuICBmaW5kKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZChxdWVyeSk7XG4gIH1cblxuICBjb3VudChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmNvdW50RG9jdW1lbnRzKHF1ZXJ5KTtcbiAgfVxuXG4gIGFnZ3JlZ2F0ZShwaXBlbGluZSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmFnZ3JlZ2F0ZShwaXBlbGluZSk7XG4gIH1cblxuICBjcmVhdGVNYW55KGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5pbnNlcnRNYW55KGRhdGEpO1xuICB9XG5cbiAgdXBkYXRlTWFueShxdWVyeSwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLnVwZGF0ZU1hbnkocXVlcnksIGRhdGEpO1xuICB9XG5cbiAgYnVsa1dyaXRlKG9wZXJhdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5idWxrV3JpdGUob3BlcmF0aW9ucyk7XG4gIH1cblxuICBhc3luYyB1cHNlcnQocXVlcnksIGRhdGEpIHtcbiAgICBjb25zdCBmaW5kRGF0YSA9IGF3YWl0IHRoaXMuZmluZE9uZShxdWVyeSk7XG5cbiAgICBpZiAoIWZpbmREYXRhKSByZXR1cm4gdGhpcy5jcmVhdGUoZGF0YSk7XG5cbiAgICByZXR1cm4gdGhpcy51cGRhdGUoZmluZERhdGEuX2lkLCBkYXRhKTtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3dyYXBOYXRpdmVTdXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3MtYXN5bmMtZXJyb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3MtcmF0ZS1saW1pdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwLXN0YXR1cy1jb2Rlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZW1haWxlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2FnZ2VyLWpzZG9jXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3YWdnZXItdWktZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiQC9jb3JlL2NvbmZpZy9lbnYuY29uZmlnXCI7XG5pbXBvcnQgXCJleHByZXNzLWFzeW5jLWVycm9yc1wiO1xuaW1wb3J0IHsgY3JlYXRlU2VydmVyIH0gZnJvbSBcImh0dHBcIjtcblxuaW1wb3J0IGFwcCBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCB7IGNyZWF0ZURiQ29ubmVjdGlvbiB9IGZyb20gXCIuL2NvcmUvY29uZmlnL2RiLmNvbmZpZ1wiO1xuaW1wb3J0IHsgc2VlZCB9IGZyb20gXCIuL2NvcmUvZGIvc2VlZFwiO1xuXG5jb25zdCBzZXJ2ZXIgPSBjcmVhdGVTZXJ2ZXIoYXBwKTtcbmNvbnN0IHsgUE9SVCB9ID0gcHJvY2Vzcy5lbnY7XG5cbihhc3luYyAoKSA9PiB7XG4gIGF3YWl0IGNyZWF0ZURiQ29ubmVjdGlvbigpO1xuICBhd2FpdCBzZWVkKCk7XG4gIHNlcnZlci5saXN0ZW4oUE9SVCwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgaXMgcnVubmluZzogaHR0cDovL2xvY2FsaG9zdDoke1BPUlR9YCk7XG4gIH0pO1xufSkoKTtcbiJdLCJuYW1lcyI6WyJTdGF0dXNDb2RlcyIsIkF1dGhEdG8iLCJBdXRoQ29udHJvbGxlciIsImF1dGhTZXJ2aWNlIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJfcmVnaXN0ZXIiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsInJlcXVlc3QiLCJyZXNwb25zZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJyZWdpc3RlciIsImJvZHkiLCJzdWNjZXNzIiwibWVzc2FnZSIsInN0YXR1cyIsIkNSRUFURUQiLCJzdG9wIiwiX3giLCJfeDIiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9sb2dpbiIsIl9jYWxsZWUyIiwidXNlciIsImFjY2Vzc1Rva2VuIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwibG9naW4iLCJzZW50IiwiT0siLCJkYXRhIiwiX3gzIiwiX3g0IiwiY29udGFpbmVyIiwiRW1haWxTZXJ2aWNlIiwidXNlckRJS2V5cyIsIkF1dGhTZXJ2aWNlIiwiYXV0aERJS2V5cyIsImNvbnRyb2xsZXIiLCJzZXJ2aWNlIiwiZW1haWxTZXJ2aWNlIiwidXNlclNlcnZpY2UiLCJleHByZXNzIiwiYXV0aFJvdXRlciIsIlJvdXRlciIsInByZWZpeCIsImF1dGhDb250cm9sbGVyIiwiZ2V0IiwicG9zdCIsImNvbmNhdCIsInJlcSIsInJlcyIsImdlbmVyYXRlVG9rZW4iLCJnZW5lcmF0ZVZlcmlmaWNhdGlvbkNvZGUiLCJnZXRWZXJpZmljYXRpb25Db2RlRXhwaXJ5IiwiY29uZmlnIiwiQmFzZVJlc3BvbnNlIiwiYXV0aFJlZ2lzdGVyRHRvIiwiX2V4aXN0aW5nVXNlciRlbWFpbFZlIiwiX2V4aXN0aW5nVXNlciRlbWFpbFZlMiIsImV4aXN0aW5nVXNlciIsInZlcmlmaWNhdGlvbkNvZGUiLCJ2ZXJpZmljYXRpb25UaW1lIiwic2F2ZWRVc2VyIiwiZmluZEJ5RW1haWwiLCJjb250YWN0IiwiZW1haWwiLCJlbWFpbFZlcmlmaWNhdGlvbiIsInZlcmlmaWVkIiwiZXJyb3IiLCJDT05GTElDVCIsIl9pZCIsInJvbGUiLCJjb2RlIiwiZXhwaXJlc0F0IiwiY3JlYXRlIiwic2VuZFZlcmlmaWNhdGlvbkVtYWlsIiwiX2NyZWF0ZVRva2VuIiwicGF5bG9hZCIsIl9jb25maWckand0IiwiYWNjZXNzU2VjcmV0IiwiYWNjZXNzRXhwaXJlc0luIiwicmVmcmVzaFNlY3JldCIsInJlZnJlc2hFeHBpcmVzSW4iLCJyZWZyZXNoVG9rZW4iLCJqd3QiLCJ1cGRhdGUiLCJzdWIiLCJ0b2tlbiIsInJlZnJlc2giLCJhYnJ1cHQiLCJjcmVhdGVUb2tlbiIsIl92ZXJpZmljYXRpb25Ub2tlbiIsIl9jYWxsZWUzIiwiX2NvbmZpZyRqd3QyIiwidmVyaWZpY2F0aW9uRXhwaXJlc0luIiwidmVyaWZpY2F0aW9uU2VjcmV0IiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwidmVyaWZpY2F0aW9uVG9rZW4iLCJVc2VyRHRvIiwiVG9rZW5EdG8iLCJhY2Nlc3MiLCJGb290ZXJEdG8iLCJfcmVmIiwibG9jYXRpb24iLCJ0aXRsZSIsImNvcHlyaWdodCIsIm9wZW5pbmdEYXkiLCJvcGVuaW5nSG91ciIsInNvY2lhbE1lZGlhIiwiT2JqZWN0IiwiYXNzaWduIiwiRm9vdGVyQ29udHJvbGxlciIsImZvb290ZXJTZXJ2aWNlIiwiX2ZpbmQiLCJmaW5kIiwiRm9vdGVyUmVwb3NpdG9yeSIsIkZvb3RlclNlcnZpY2UiLCJmb290ZXJESUtleXMiLCJyZXBvc2l0b3J5IiwiZm9vdGVyUmVwb3NpdG9yeSIsImZvb3RlclNlcnZpY2UiLCJCYXNlUmVwb3NpdG9yeSIsIkZvb3RlciIsIl9CYXNlUmVwb3NpdG9yeSIsIl9jYWxsU3VwZXIiLCJfaW5oZXJpdHMiLCJmb290ZXJSb3V0ZXIiLCJmb290ZXJDb250cm9sbGVyIiwic3RvcmFnZVNlcnZpY2UiLCJfY3JlYXRlIiwiZm9vdGVyRHRvIiwic29jaWFsTWVkaWFJY29ucyIsInVwbG9hZGVkc29jaWFsTWVkaWFJY29ucyIsImZpbmRBbGwiLCJsZW5ndGgiLCJ1cGxvYWRGaWxlcyIsImNyZWF0ZUZvb3RlciIsIl91cGRhdGUiLCJmaWxlcyIsIk5PVF9GT1VORCIsImFzc2V0TW9kZWxTY2hlbWEiLCJjb250YWN0U2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJmb290ZXJTY2hlbWEiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJjb2xsZWN0aW9uIiwidGltZXN0YW1wcyIsIm1vZGVsIiwiYXV0b0luY3JlbWVudFBsdWdpbiIsInJvbGVTY2hlbWEiLCJ1bmlxdWUiLCJ0cmltIiwidmVyc2lvbktleSIsInBsdWdpbiIsImluY0ZpZWxkIiwiUm9sZSIsIlJvbGVSZXBvc2l0b3J5IiwiUm9sZVNlZWRlciIsInJvbGVESUtleXMiLCJzZWVkZXIiLCJyb2xlUmVwb3NpdG9yeSIsInJvbGVzIiwiX2NyZWF0ZVJvbGVzIiwiZXhpc3RpbmdSb2xlcyIsImV4aXN0aW5nUm9sZU5hbWVzIiwicm9sZXNUb0NyZWF0ZSIsIm1hcCIsImZpbHRlciIsImluY2x1ZGVzIiwiY3JlYXRlTWFueSIsImNyZWF0ZVJvbGVzIiwiQ29udGFjdER0byIsImZ1bGxOYW1lIiwicHJvZmlsZUltYWdlIiwiZW1haWxWZXJpZmljYXRpb25TY2hlbWEiLCJEYXRlIiwiQm9vbGVhbiIsInVzZXJTY2hlbWEiLCJwYXNzd29yZCIsInBhc3N3b3JkUmVzZXQiLCJUeXBlcyIsIk51bWJlciIsInJlZiIsIlVzZXIiLCJVc2VyUmVwb3NpdG9yeSIsIlVzZXJTZWVkZXIiLCJVc2VyU2VydmljZSIsInVzZXJSZXBvc2l0b3J5IiwiaGFzaFBhc3N3b3JkIiwiX2NyZWF0ZUFkbWluIiwiZmluZE9uZSIsImNyZWF0ZUFkbWluIiwidXNlckR0byIsIl9maW5kQnlFbWFpbCIsIl9maW5kQnlJZCIsImlkIiwiZmluZEJ5SWQiLCJfY2FsbGVlNCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsIl94NSIsIl9kZWxldGUyIiwiX2NhbGxlZTUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJfZGVsZXRlIiwiX3g2Iiwic3dhZ2dlclNwZWMiLCJzd2FnZ2VyVWkiLCJjb29raWVQYXJzZXIiLCJjb3JzIiwicmF0ZUxpbWl0IiwiYXBpUHJlZml4IiwiYmFzZVJlc3BvbnNlTWlkZGxld2FyZSIsImVycm9ySGFuZGxlck1pZGRsZXdhcmUiLCJhcHAiLCJ1c2UiLCJ3aW5kb3dNcyIsImxpbWl0Iiwic3RhbmRhcmRIZWFkZXJzIiwibGVnYWN5SGVhZGVycyIsInNldCIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImpzb24iLCJkaXNhYmxlIiwic2VydmUiLCJzZXR1cCIsInNlY3JldCIsInRpbWUiLCJzaWduIiwiZXhwaXJlc0luIiwiYWxnb3JpdGhtIiwiYmNyeXB0IiwiX2hhc2hQYXNzd29yZCIsInNhbHQiLCJnZW5TYWx0IiwiaGFzaCIsImNyeXB0byIsInVuZGVmaW5lZCIsImNoYXJhY3RlcnMiLCJjaGFyYWN0ZXJzTGVuZ3RoIiwicmVzdWx0IiwiaSIsInJhbmRvbUluZGV4IiwicmFuZG9tSW50IiwibWludXRlcyIsIm5vdyIsInNjaGVtYSIsIm9wdGlvbnMiLCJFcnJvciIsImZpZWxkT3B0aW9ucyIsIl9vYmplY3RTcHJlYWQiLCJhZGQiLCJfZGVmaW5lUHJvcGVydHkiLCJwcmUiLCJfdGhpcyIsImlzTmV3IiwiY29uc3RydWN0b3IiLCJzb3J0IiwidGhlbiIsImxhc3RSZWNvcmQiLCJkb2NzIiwibGFzdENvdW50IiwiZm9yRWFjaCIsImRvYyIsImluZGV4IiwicGhvbmVOdW1iZXIiLCJocmVmIiwicmVxdWlyZSIsInVybCIsInB1YmxpY0lkIiwic2l6ZSIsImNyZWF0ZURiQ29ubmVjdGlvbiIsIl9jcmVhdGVEYkNvbm5lY3Rpb24iLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIkNPTk5FQ1RJT05fU1RSSU5HIiwiY29uc29sZSIsImxvZyIsInQwIiwicGF0aCIsIk5PREVfRU5WIiwib3ZlcnJpZGUiLCJKV1RfQUxHT1JJVEhNIiwiSldUX0FDQ0VTU19TRUNSRVQiLCJKV1RfQUNDRVNTX0VYUElSRVNfSU4iLCJKV1RfUkVGUkVTSF9TRUNSRVQiLCJKV1RfUkVGUkVTSF9FWFBJUkVTX0lOIiwiSldUX1ZFUklGSUNBVElPTl9TRUNSRVQiLCJKV1RfVkVSSUZJQ0FUSU9OX0VYUElSRVNfSU4iLCJBUElFcnJvciIsIm5vZGVtYWlsZXIiLCJzZW5kRW1haWwiLCJtYWlsT3B0aW9ucyIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0IiwiYXV0aCIsIk1BSUxfVVNFUiIsInBhc3MiLCJNQUlMX1BBU1NXT1JEIiwic2VuZE1haWwiLCJpbmZvIiwic3dhZ2dlckpzZG9jIiwiZGVmaW5pdGlvbiIsIm9wZW5hcGkiLCJ2ZXJzaW9uIiwiZGVzY3JpcHRpb24iLCJzZXJ2ZXJzIiwiYXBpcyIsInNlZWQiLCJ1c2VyU2VlZGVyIiwicm9sZVNlZWRlciIsIlByb21pc2UiLCJhbGwiLCJEaUNvbnRhaW5lciIsImRlcGVuZGVuY2llcyIsIm5hbWUiLCJmdW5jIiwiQXJyYXkiLCJpc0FycmF5IiwiX3RoaXMkZGVwZW5kZW5jaWVzJG5hIiwiZGVwZW5kZW5jaWVzSW5zdGFuY2VzIiwiZGVwZW5kZW5jeSIsIl90b0NvbnN1bWFibGVBcnJheSIsInByb3BzIiwiQkFEX1JFUVVFU1QiLCJzdGF0dXNDb2RlIiwiZ2V0UmVhc29uUGhyYXNlIiwiZGV0YWlscyIsIl9yZWYkc3RhdHVzIiwiX3JlZjIiLCJfcmVmMiRzdGF0dXMiLCJfcmVmMiRkZXRhaWxzIiwiX3NlbmRWZXJpZmljYXRpb25FbWFpbCIsImZyb20iLCJNQUlMX0ZST00iLCJ0byIsInN1YmplY3QiLCJ0ZXh0IiwiX0Vycm9yIiwiX3dyYXBOYXRpdmVTdXBlciIsImZpbmRCeUlkQW5kVXBkYXRlIiwiZmluZEJ5SWRBbmREZWxldGUiLCJxdWVyeSIsImNvdW50IiwiY291bnREb2N1bWVudHMiLCJhZ2dyZWdhdGUiLCJwaXBlbGluZSIsImluc2VydE1hbnkiLCJ1cGRhdGVNYW55IiwiYnVsa1dyaXRlIiwib3BlcmF0aW9ucyIsIl91cHNlcnQiLCJmaW5kRGF0YSIsInVwc2VydCIsImNyZWF0ZVNlcnZlciIsInNlcnZlciIsIlBPUlQiLCJsaXN0ZW4iXSwic291cmNlUm9vdCI6IiJ9