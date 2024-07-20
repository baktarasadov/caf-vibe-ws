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
    key: "verifyEmail",
    value: function () {
      var _verifyEmail = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(request, response) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.authService.verifyEmail(request.body);
            case 2:
              data = _context2.sent;
              response.success({
                message: "Email verified successfully.",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.CREATED,
                data: new _dto_auth_dto__WEBPACK_IMPORTED_MODULE_5__.AuthDto(data)
              });
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function verifyEmail(_x3, _x4) {
        return _verifyEmail.apply(this, arguments);
      }
      return verifyEmail;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(request, response) {
        var user, accessToken;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.authService.login(request.body);
            case 2:
              user = _context3.sent;
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
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function login(_x5, _x6) {
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
authRouter.post("".concat(prefix, "/verify-email"), function (req, res) {
  return authController.verifyEmail(req, res);
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
    key: "verifyEmail",
    value: function () {
      var _verifyEmail = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(verificationDto) {
        var _existingUser$emailVe3;
        var code, email, existingUser, now, payload, token;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              code = verificationDto.code, email = verificationDto.email;
              _context2.next = 3;
              return this.userService.findByEmail(email);
            case 3:
              existingUser = _context2.sent;
              if (existingUser) {
                _context2.next = 6;
                break;
              }
              throw new _core_response_base_response__WEBPACK_IMPORTED_MODULE_7__.BaseResponse.error({
                message: "User with this email does not exist.",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_8__.StatusCodes.CONFLICT
              });
            case 6:
              if (!((_existingUser$emailVe3 = existingUser.emailVerification) !== null && _existingUser$emailVe3 !== void 0 && _existingUser$emailVe3.verified)) {
                _context2.next = 8;
                break;
              }
              throw new _core_response_base_response__WEBPACK_IMPORTED_MODULE_7__.BaseResponse.error({
                message: "Your email is already verified. Please login to continue.",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_8__.StatusCodes.BAD_REQUEST
              });
            case 8:
              if (!(existingUser.emailVerification.code !== code)) {
                _context2.next = 10;
                break;
              }
              throw new _core_response_base_response__WEBPACK_IMPORTED_MODULE_7__.BaseResponse.error({
                message: "Invalid verification code.",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_8__.StatusCodes.BAD_REQUEST
              });
            case 10:
              now = Date.now();
              if (!(existingUser.emailVerification.expiresAt < now)) {
                _context2.next = 19;
                break;
              }
              existingUser.emailVerification.code = (0,_common_helpers_verification__WEBPACK_IMPORTED_MODULE_5__.generateVerificationCode)();
              existingUser.emailVerification.expiresAt = (0,_common_helpers_verification__WEBPACK_IMPORTED_MODULE_5__.getVerificationCodeExpiry)(3);
              _context2.next = 16;
              return existingUser.save();
            case 16:
              _context2.next = 18;
              return this.emailService.sendVerificationEmail(existingUser.contact.email, existingUser.emailVerification.code);
            case 18:
              throw new _core_response_base_response__WEBPACK_IMPORTED_MODULE_7__.BaseResponse.error({
                message: "Verification code has expired. A new code has been sent to your email.",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_8__.StatusCodes.BAD_REQUEST
              });
            case 19:
              existingUser.emailVerification.verified = true;
              existingUser.emailVerification.code = undefined;
              existingUser.emailVerification.expiresAt = undefined;
              _context2.next = 24;
              return existingUser.save();
            case 24:
              payload = {
                sub: existingUser._id,
                email: email
              };
              _context2.next = 27;
              return this.createToken(payload);
            case 27:
              token = _context2.sent;
              return _context2.abrupt("return", {
                token: token,
                user: existingUser
              });
            case 29:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function verifyEmail(_x2) {
        return _verifyEmail.apply(this, arguments);
      }
      return verifyEmail;
    }()
  }, {
    key: "createToken",
    value: function () {
      var _createToken = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(payload) {
        var _config$jwt, accessSecret, accessExpiresIn, refreshSecret, refreshExpiresIn, accessToken, refreshToken;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _config$jwt = _core_config_jwt_config__WEBPACK_IMPORTED_MODULE_6__.config.jwt, accessSecret = _config$jwt.accessSecret, accessExpiresIn = _config$jwt.accessExpiresIn, refreshSecret = _config$jwt.refreshSecret, refreshExpiresIn = _config$jwt.refreshExpiresIn;
              _context3.next = 3;
              return (0,_common_helpers_generate_token__WEBPACK_IMPORTED_MODULE_4__.generateToken)(payload, accessSecret, accessExpiresIn);
            case 3:
              accessToken = _context3.sent;
              _context3.next = 6;
              return (0,_common_helpers_generate_token__WEBPACK_IMPORTED_MODULE_4__.generateToken)(payload, refreshSecret, refreshExpiresIn);
            case 6:
              refreshToken = _context3.sent;
              _context3.next = 9;
              return this.userService.update(payload.sub, {
                token: {
                  refresh: refreshToken
                }
              });
            case 9:
              return _context3.abrupt("return", {
                accessToken: accessToken,
                refreshToken: refreshToken
              });
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function createToken(_x3) {
        return _createToken.apply(this, arguments);
      }
      return createToken;
    }()
  }, {
    key: "verificationToken",
    value: function () {
      var _verificationToken = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4(payload) {
        var _config$jwt2, verificationExpiresIn, verificationSecret;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _config$jwt2 = _core_config_jwt_config__WEBPACK_IMPORTED_MODULE_6__.config.jwt, verificationExpiresIn = _config$jwt2.verificationExpiresIn, verificationSecret = _config$jwt2.verificationSecret;
              return _context4.abrupt("return", (0,_common_helpers_generate_token__WEBPACK_IMPORTED_MODULE_4__.generateToken)(payload, verificationSecret, verificationExpiresIn));
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function verificationToken(_x4) {
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
    type: String
  },
  expiresAt: {
    type: Date
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
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLENBQUFqQixJQUFBLEdBQUFpQixTQUFBLENBQUFoQixJQUFBO01BQUE7UUFBQWdCLFNBQUEsQ0FBQWhCLElBQUE7UUFBQSxPQUNPbVIsMEVBQWtCLENBQUMsQ0FBQztNQUFBO1FBQUFuUSxTQUFBLENBQUFoQixJQUFBO1FBQUEsT0FDcEJ5VCxtREFBSSxDQUFDLENBQUM7TUFBQTtRQUNaOEMsTUFBTSxDQUFDRSxNQUFNLENBQUNELElBQUksZUFBQWxYLDhFQUFBLGVBQUFDLHNFQUFBLENBQUUsU0FBQUUsUUFBQTtVQUFBLE9BQUFGLHNFQUFBLFVBQUFNLFNBQUFDLFFBQUE7WUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtjQUFBO2dCQUNsQnlSLE9BQU8sQ0FBQ0MsR0FBRyx3Q0FBQTNPLE1BQUEsQ0FBd0N5VCxJQUFJLENBQUUsQ0FBQztjQUFDO2NBQUE7Z0JBQUEsT0FBQTFXLFFBQUEsQ0FBQVMsSUFBQTtZQUFBO1VBQUEsR0FBQWQsT0FBQTtRQUFBLENBQzVELEdBQUM7TUFBQztNQUFBO1FBQUEsT0FBQXVCLFNBQUEsQ0FBQVQsSUFBQTtJQUFBO0VBQUEsR0FBQU0sUUFBQTtBQUFBLENBQ0osR0FBRSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvYXV0aC9hdXRoLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL2F1dGgvYXV0aC5kaS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvYXV0aC9hdXRoLnJvdXRlLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9hdXRoL2F1dGguc2VydmljZS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvYXV0aC9kdG8vYXV0aC5kdG8uanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL2F1dGgvZHRvL3Rva2VuLmR0by5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvZm9vdGVyL2R0by9mb290ZXIuZHRvLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9mb290ZXIvZm9vdGVyLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL2Zvb3Rlci9mb290ZXIuZGkuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL2Zvb3Rlci9mb290ZXIucmVwb3NpdG95LmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9mb290ZXIvZm9vdGVyLnJvdXRlLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9mb290ZXIvZm9vdGVyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL2Zvb3Rlci9tb2RlbC9mb290ZXIubW9kZWwuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL3JvbGUvbW9kZWwvcm9sZS5tb2RlbC5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvcm9sZS9yb2xlLmRpLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9yb2xlL3JvbGUucmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvcm9sZS9yb2xlLnNlZWRlci5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvdXNlci9kdG8vdXNlci5kdG8uanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL3VzZXIvbW9kZWwvZW1haWwtdmVyaWZpY2F0aW9uLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS91c2VyL21vZGVsL3VzZXIubW9kZWwuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL3VzZXIvdXNlci5kaS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvdXNlci91c2VyLnJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL3VzZXIvdXNlci5zZWVkZXIuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL3VzZXIvdXNlci5zZXJ2aWNlLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb21tb24vY29uc3RhbnRzL2FwaS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb21tb24vY29uc3RhbnRzL3JvbGUuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29tbW9uL2hlbHBlcnMvZ2VuZXJhdGUtdG9rZW4uanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29tbW9uL2hlbHBlcnMvaGFzaC1wYXNzd29yZC5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb21tb24vaGVscGVycy92ZXJpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29tbW9uL21vbmdvb3NlL3BsdWdpbnMvYXV0by1pbmNyZW1lbnQucGx1Z2luLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvbW1vbi9zY2hlbWEvZHRvL2NvbnRhY3QuZHRvLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvbW1vbi9zY2hlbWEvbW9kZWwvYXNzZXQtbW9kZWwuc2NoZW1hLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvbW1vbi9zY2hlbWEvbW9kZWwvY29udGFjdC1tb2RlbC5zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29yZS9jb25maWcvZGIuY29uZmlnLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvcmUvY29uZmlnL2Vudi5jb25maWcuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29yZS9jb25maWcvand0LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL2NvbmZpZy9tYWlsLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL2NvbmZpZy9zd2FnZ2VyLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL2RiL3NlZWQuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29yZS9kaS9kaS1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29yZS9kaS9kaS1nbG9iYWxzLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvcmUvbWlkZGxld2FyZS9iYXNlLXJlc3BvbnNlLm1pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29yZS9taWRkbGV3YXJlL2Vycm9yLWhhbmRsZXItbWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL3Jlc3BvbnNlL2Jhc2UtcmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvc2VydmljZXMvZW1haWwvZW1haWwuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9zaGFyZWQvZXJyb3ItcmVzcG9uc2UvZXJyb3ItcmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvc2hhcmVkL3JlcG9zaXRvcnkvYmFzZS5yZXBvc2l0b3J5LmpzIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvd3JhcE5hdGl2ZVN1cGVyXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiYmNyeXB0XCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJjb29raWUtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3MtYXN5bmMtZXJyb3JzXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzLXJhdGUtbGltaXRcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcImh0dHAtc3RhdHVzLWNvZGVzXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJub2RlbWFpbGVyXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJzd2FnZ2VyLWpzZG9jXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJzd2FnZ2VyLXVpLWV4cHJlc3NcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiY3J5cHRvXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImh0dHBcIiIsIndlYnBhY2s6Ly9jZi13cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jZi13cy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jZi13cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2Ytd3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jZi13cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NmLXdzLy4vc3JjL3NlcnZlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5pbXBvcnQgeyBBdXRoRHRvIH0gZnJvbSBcIi4vZHRvL2F1dGguZHRvXCI7XG5cbmV4cG9ydCBjbGFzcyBBdXRoQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKGF1dGhTZXJ2aWNlKSB7XG4gICAgdGhpcy5hdXRoU2VydmljZSA9IGF1dGhTZXJ2aWNlO1xuICB9XG5cbiAgYXN5bmMgcmVnaXN0ZXIocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLnJlZ2lzdGVyKHJlcXVlc3QuYm9keSk7XG5cbiAgICByZXNwb25zZS5zdWNjZXNzKHtcbiAgICAgIG1lc3NhZ2U6IFwiUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwuIFBsZWFzZSB2ZXJpZnkgeW91ciBlbWFpbC5cIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuQ1JFQVRFRCxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeUVtYWlsKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UudmVyaWZ5RW1haWwocmVxdWVzdC5ib2R5KTtcblxuICAgIHJlc3BvbnNlLnN1Y2Nlc3Moe1xuICAgICAgbWVzc2FnZTogXCJFbWFpbCB2ZXJpZmllZCBzdWNjZXNzZnVsbHkuXCIsXG4gICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLkNSRUFURUQsXG4gICAgICBkYXRhOiBuZXcgQXV0aER0byhkYXRhKSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGxvZ2luKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UubG9naW4ocmVxdWVzdC5ib2R5KTtcblxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gXCJcIjtcbiAgICAvLyBnZW5lcmF0ZVRva2VuKFxuICAgIC8vICAge1xuICAgIC8vICAgICBpZDogdXNlci5pZCxcbiAgICAvLyAgICAgbG9naW46IHVzZXIubG9naW4sXG4gICAgLy8gICAgIHJvbGU6IHVzZXIucm9sZSxcbiAgICAvLyAgICAgZW50aXR5OiBcIlVzZXJcIixcbiAgICAvLyAgIH0sXG4gICAgLy8gICBcIjJoXCIsXG4gICAgLy8gKTtcblxuICAgIHJlc3BvbnNlLnN1Y2Nlc3Moe1xuICAgICAgbWVzc2FnZTogXCJVc2VyIExvZ2luICBzdWNjZXNzXCIsXG4gICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk9LLFxuICAgICAgZGF0YTogbmV3IEF1dGhEdG8odXNlciwgYWNjZXNzVG9rZW4pLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiQC9jb3JlL2RpL2RpLWNvbnRhaW5lclwiO1xuaW1wb3J0IHsgRW1haWxTZXJ2aWNlIH0gZnJvbSBcIkAvc2VydmljZXMvZW1haWwvZW1haWwuc2VydmljZVwiO1xuXG5pbXBvcnQgeyB1c2VyRElLZXlzIH0gZnJvbSBcIi4uL3VzZXIvdXNlci5kaVwiO1xuaW1wb3J0IHsgQXV0aENvbnRyb2xsZXIgfSBmcm9tIFwiLi9hdXRoLmNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4vYXV0aC5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoRElLZXlzID0ge1xuICBjb250cm9sbGVyOiBcImF1dGgtY29udHJvbGxlclwiLFxuICBzZXJ2aWNlOiBcImF1dGgtc2VydmljZVwiLFxuICBlbWFpbFNlcnZpY2U6IFwiZW1haWwtc2VydmljZVwiLFxufTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKGF1dGhESUtleXMuZW1haWxTZXJ2aWNlLCBbXSwgKCkgPT4gbmV3IEVtYWlsU2VydmljZSgpKTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKFxuICBhdXRoRElLZXlzLnNlcnZpY2UsXG4gIFt1c2VyRElLZXlzLnNlcnZpY2UsIGF1dGhESUtleXMuZW1haWxTZXJ2aWNlXSxcbiAgKHVzZXJTZXJ2aWNlLCBlbWFpbFNlcnZpY2UpID0+IG5ldyBBdXRoU2VydmljZSh1c2VyU2VydmljZSwgZW1haWxTZXJ2aWNlKSxcbik7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgYXV0aERJS2V5cy5jb250cm9sbGVyLFxuICBbYXV0aERJS2V5cy5zZXJ2aWNlXSxcbiAgKGF1dGhTZXJ2aWNlKSA9PiBuZXcgQXV0aENvbnRyb2xsZXIoYXV0aFNlcnZpY2UpLFxuKTtcbiIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCJAL2NvcmUvZGkvZGktY29udGFpbmVyXCI7XG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuXG5pbXBvcnQgeyBhdXRoRElLZXlzIH0gZnJvbSBcIi4vYXV0aC5kaVwiO1xuXG5jb25zdCBhdXRoUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuY29uc3QgcHJlZml4ID0gXCIvYXV0aFwiO1xuXG5jb25zdCBhdXRoQ29udHJvbGxlciA9IGNvbnRhaW5lci5nZXQoYXV0aERJS2V5cy5jb250cm9sbGVyKTtcblxuYXV0aFJvdXRlci5wb3N0KGAke3ByZWZpeH0vbG9naW5gLCAocmVxLCByZXMpID0+XG4gIGF1dGhDb250cm9sbGVyLmxvZ2luKHJlcSwgcmVzKSxcbik7XG5cbmF1dGhSb3V0ZXIucG9zdChgJHtwcmVmaXh9L3ZlcmlmeS1lbWFpbGAsIChyZXEsIHJlcykgPT5cbiAgYXV0aENvbnRyb2xsZXIudmVyaWZ5RW1haWwocmVxLCByZXMpLFxuKTtcblxuYXV0aFJvdXRlci5wb3N0KGAke3ByZWZpeH0vcmVnaXN0ZXJgLCAocmVxLCByZXMpID0+XG4gIGF1dGhDb250cm9sbGVyLnJlZ2lzdGVyKHJlcSwgcmVzKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhSb3V0ZXI7XG4iLCJpbXBvcnQgeyBnZW5lcmF0ZVRva2VuIH0gZnJvbSBcIkAvY29tbW9uL2hlbHBlcnMvZ2VuZXJhdGUtdG9rZW5cIjtcbmltcG9ydCB7XG4gIGdlbmVyYXRlVmVyaWZpY2F0aW9uQ29kZSxcbiAgZ2V0VmVyaWZpY2F0aW9uQ29kZUV4cGlyeSxcbn0gZnJvbSBcIkAvY29tbW9uL2hlbHBlcnMvdmVyaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiQC9jb3JlL2NvbmZpZy9qd3QuY29uZmlnXCI7XG5pbXBvcnQgeyBCYXNlUmVzcG9uc2UgfSBmcm9tIFwiQC9jb3JlL3Jlc3BvbnNlL2Jhc2UtcmVzcG9uc2VcIjtcbmltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHVzZXJTZXJ2aWNlLCBlbWFpbFNlcnZpY2UpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlID0gdXNlclNlcnZpY2U7XG4gICAgdGhpcy5lbWFpbFNlcnZpY2UgPSBlbWFpbFNlcnZpY2U7XG4gIH1cblxuICBhc3luYyByZWdpc3RlcihhdXRoUmVnaXN0ZXJEdG8pIHtcbiAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmZpbmRCeUVtYWlsKFxuICAgICAgYXV0aFJlZ2lzdGVyRHRvLmNvbnRhY3QuZW1haWwsXG4gICAgKTtcblxuICAgIGlmIChleGlzdGluZ1VzZXIgJiYgZXhpc3RpbmdVc2VyLmVtYWlsVmVyaWZpY2F0aW9uPy52ZXJpZmllZCkge1xuICAgICAgdGhyb3cgbmV3IEJhc2VSZXNwb25zZS5lcnJvcih7XG4gICAgICAgIG1lc3NhZ2U6IFwiRW1haWwgaXMgYWxyZWFkeSBpbiB1c2VcIixcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5DT05GTElDVCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChleGlzdGluZ1VzZXIgJiYgIWV4aXN0aW5nVXNlci5lbWFpbFZlcmlmaWNhdGlvbj8udmVyaWZpZWQpIHtcbiAgICAgIGF3YWl0IHRoaXMudXNlclNlcnZpY2UuZGVsZXRlKGV4aXN0aW5nVXNlci5faWQpO1xuICAgIH1cblxuICAgIGNvbnN0IHZlcmlmaWNhdGlvbkNvZGUgPSBnZW5lcmF0ZVZlcmlmaWNhdGlvbkNvZGUoKTtcbiAgICBjb25zdCB2ZXJpZmljYXRpb25UaW1lID0gZ2V0VmVyaWZpY2F0aW9uQ29kZUV4cGlyeSgzKTtcblxuICAgIGF1dGhSZWdpc3RlckR0by5yb2xlID0gMjtcblxuICAgIGF1dGhSZWdpc3RlckR0by5lbWFpbFZlcmlmaWNhdGlvbiA9IHtcbiAgICAgIGNvZGU6IHZlcmlmaWNhdGlvbkNvZGUsXG4gICAgICBleHBpcmVzQXQ6IHZlcmlmaWNhdGlvblRpbWUsXG4gICAgICB2ZXJpZmllZDogZmFsc2UsXG4gICAgfTtcblxuICAgIGNvbnN0IHNhdmVkVXNlciA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuY3JlYXRlKGF1dGhSZWdpc3RlckR0byk7XG5cbiAgICBhd2FpdCB0aGlzLmVtYWlsU2VydmljZS5zZW5kVmVyaWZpY2F0aW9uRW1haWwoXG4gICAgICBzYXZlZFVzZXIuY29udGFjdC5lbWFpbCxcbiAgICAgIHNhdmVkVXNlci5lbWFpbFZlcmlmaWNhdGlvbi5jb2RlLFxuICAgICAgXCJIaSwgVGhpcyBFbWFpbCBWZXJpZmljYXRpb24gQ29kZVwiLFxuICAgICk7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlFbWFpbCh2ZXJpZmljYXRpb25EdG8pIHtcbiAgICBjb25zdCB7IGNvZGUsIGVtYWlsIH0gPSB2ZXJpZmljYXRpb25EdG87XG5cbiAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmZpbmRCeUVtYWlsKGVtYWlsKTtcblxuICAgIGlmICghZXhpc3RpbmdVc2VyKSB7XG4gICAgICB0aHJvdyBuZXcgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgICAgbWVzc2FnZTogXCJVc2VyIHdpdGggdGhpcyBlbWFpbCBkb2VzIG5vdCBleGlzdC5cIixcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5DT05GTElDVCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChleGlzdGluZ1VzZXIuZW1haWxWZXJpZmljYXRpb24/LnZlcmlmaWVkKSB7XG4gICAgICB0aHJvdyBuZXcgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgICAgbWVzc2FnZTogXCJZb3VyIGVtYWlsIGlzIGFscmVhZHkgdmVyaWZpZWQuIFBsZWFzZSBsb2dpbiB0byBjb250aW51ZS5cIixcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChleGlzdGluZ1VzZXIuZW1haWxWZXJpZmljYXRpb24uY29kZSAhPT0gY29kZSkge1xuICAgICAgdGhyb3cgbmV3IEJhc2VSZXNwb25zZS5lcnJvcih7XG4gICAgICAgIG1lc3NhZ2U6IFwiSW52YWxpZCB2ZXJpZmljYXRpb24gY29kZS5cIixcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyLmVtYWlsVmVyaWZpY2F0aW9uLmV4cGlyZXNBdCA8IG5vdykge1xuICAgICAgZXhpc3RpbmdVc2VyLmVtYWlsVmVyaWZpY2F0aW9uLmNvZGUgPSBnZW5lcmF0ZVZlcmlmaWNhdGlvbkNvZGUoKTtcbiAgICAgIGV4aXN0aW5nVXNlci5lbWFpbFZlcmlmaWNhdGlvbi5leHBpcmVzQXQgPSBnZXRWZXJpZmljYXRpb25Db2RlRXhwaXJ5KDMpO1xuXG4gICAgICBhd2FpdCBleGlzdGluZ1VzZXIuc2F2ZSgpO1xuXG4gICAgICBhd2FpdCB0aGlzLmVtYWlsU2VydmljZS5zZW5kVmVyaWZpY2F0aW9uRW1haWwoXG4gICAgICAgIGV4aXN0aW5nVXNlci5jb250YWN0LmVtYWlsLFxuICAgICAgICBleGlzdGluZ1VzZXIuZW1haWxWZXJpZmljYXRpb24uY29kZSxcbiAgICAgICk7XG5cbiAgICAgIHRocm93IG5ldyBCYXNlUmVzcG9uc2UuZXJyb3Ioe1xuICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgIFwiVmVyaWZpY2F0aW9uIGNvZGUgaGFzIGV4cGlyZWQuIEEgbmV3IGNvZGUgaGFzIGJlZW4gc2VudCB0byB5b3VyIGVtYWlsLlwiLFxuICAgICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNULFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhpc3RpbmdVc2VyLmVtYWlsVmVyaWZpY2F0aW9uLnZlcmlmaWVkID0gdHJ1ZTtcbiAgICBleGlzdGluZ1VzZXIuZW1haWxWZXJpZmljYXRpb24uY29kZSA9IHVuZGVmaW5lZDtcbiAgICBleGlzdGluZ1VzZXIuZW1haWxWZXJpZmljYXRpb24uZXhwaXJlc0F0ID0gdW5kZWZpbmVkO1xuXG4gICAgYXdhaXQgZXhpc3RpbmdVc2VyLnNhdmUoKTtcblxuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBzdWI6IGV4aXN0aW5nVXNlci5faWQsXG4gICAgICBlbWFpbCxcbiAgICB9O1xuXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLmNyZWF0ZVRva2VuKHBheWxvYWQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRva2VuLFxuICAgICAgdXNlcjogZXhpc3RpbmdVc2VyLFxuICAgIH07XG4gIH1cblxuICBhc3luYyBjcmVhdGVUb2tlbihwYXlsb2FkKSB7XG4gICAgY29uc3QgeyBhY2Nlc3NTZWNyZXQsIGFjY2Vzc0V4cGlyZXNJbiwgcmVmcmVzaFNlY3JldCwgcmVmcmVzaEV4cGlyZXNJbiB9ID1cbiAgICAgIGNvbmZpZy5qd3Q7XG5cbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGF3YWl0IGdlbmVyYXRlVG9rZW4oXG4gICAgICBwYXlsb2FkLFxuICAgICAgYWNjZXNzU2VjcmV0LFxuICAgICAgYWNjZXNzRXhwaXJlc0luLFxuICAgICk7XG5cbiAgICBjb25zdCByZWZyZXNoVG9rZW4gPSBhd2FpdCBnZW5lcmF0ZVRva2VuKFxuICAgICAgcGF5bG9hZCxcbiAgICAgIHJlZnJlc2hTZWNyZXQsXG4gICAgICByZWZyZXNoRXhwaXJlc0luLFxuICAgICk7XG5cbiAgICBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZShwYXlsb2FkLnN1Yiwge1xuICAgICAgdG9rZW46IHsgcmVmcmVzaDogcmVmcmVzaFRva2VuIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBhY2Nlc3NUb2tlbiwgcmVmcmVzaFRva2VuIH07XG4gIH1cblxuICBhc3luYyB2ZXJpZmljYXRpb25Ub2tlbihwYXlsb2FkKSB7XG4gICAgY29uc3QgeyB2ZXJpZmljYXRpb25FeHBpcmVzSW4sIHZlcmlmaWNhdGlvblNlY3JldCB9ID0gY29uZmlnLmp3dDtcblxuICAgIHJldHVybiBnZW5lcmF0ZVRva2VuKHBheWxvYWQsIHZlcmlmaWNhdGlvblNlY3JldCwgdmVyaWZpY2F0aW9uRXhwaXJlc0luKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVXNlckR0byB9IGZyb20gXCJAL2FwaS91c2VyL2R0by91c2VyLmR0b1wiO1xuXG5pbXBvcnQgeyBUb2tlbkR0byB9IGZyb20gXCIuL3Rva2VuLmR0b1wiO1xuXG5leHBvcnQgY2xhc3MgQXV0aER0byB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLnRva2VuID0gbmV3IFRva2VuRHRvKGRhdGEudG9rZW4pO1xuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyRHRvKGRhdGEudXNlcik7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUb2tlbkR0byB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLmFjY2VzcyA9IGRhdGEuYWNjZXNzVG9rZW47XG4gICAgdGhpcy5yZWZyZXNoID0gZGF0YS5yZWZyZXNoVG9rZW47XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBGb290ZXJEdG8ge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgY29udGFjdCxcbiAgICBsb2NhdGlvbixcbiAgICB0aXRsZSxcbiAgICBjb3B5cmlnaHQsXG4gICAgb3BlbmluZ0RheSxcbiAgICBvcGVuaW5nSG91cixcbiAgICBzb2NpYWxNZWRpYSxcbiAgfSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgY29udGFjdCxcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdGl0bGUsXG4gICAgICBjb3B5cmlnaHQsXG4gICAgICBvcGVuaW5nRGF5LFxuICAgICAgb3BlbmluZ0hvdXIsXG4gICAgICBzb2NpYWxNZWRpYSxcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcblxuaW1wb3J0IHsgRm9vdGVyRHRvIH0gZnJvbSBcIi4vZHRvL2Zvb3Rlci5kdG9cIjtcblxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihmb29vdGVyU2VydmljZSkge1xuICAgIHRoaXMuZm9vb3RlclNlcnZpY2UgPSBmb29vdGVyU2VydmljZTtcbiAgfVxuXG4gIGFzeW5jIGZpbmQocmVxLCByZXMpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5mb29vdGVyU2VydmljZS5maW5kKCk7XG5cbiAgICByZXMuc3VjY2Vzcyh7XG4gICAgICBtZXNzYWdlOiBcIkZpbmQgRm9vdGVyIHN1Y2Nlc3NmdWxseSFcIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuT0ssXG4gICAgICBkYXRhOiBkYXRhID8gbmV3IEZvb3RlckR0byhkYXRhKSA6IG51bGwsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCJAL2NvcmUvZGkvZGktY29udGFpbmVyXCI7XG5cbmltcG9ydCB7IEZvb3RlckNvbnRyb2xsZXIgfSBmcm9tIFwiLi9mb290ZXIuY29udHJvbGxlclwiO1xuaW1wb3J0IHsgRm9vdGVyUmVwb3NpdG9yeSB9IGZyb20gXCIuL2Zvb3Rlci5yZXBvc2l0b3lcIjtcbmltcG9ydCB7IEZvb3RlclNlcnZpY2UgfSBmcm9tIFwiLi9mb290ZXIuc2VydmljZVwiO1xuXG5leHBvcnQgY29uc3QgZm9vdGVyRElLZXlzID0ge1xuICBzZXJ2aWNlOiBcImZvb3Rlci1zZXJ2aWNlXCIsXG4gIHJlcG9zaXRvcnk6IFwiZm9vdGVyLXJlcG9zaXRvcnlcIixcbiAgY29udHJvbGxlcjogXCJmb290ZXItY29udHJvbGxlclwiLFxufTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKGZvb3RlckRJS2V5cy5yZXBvc2l0b3J5LCBbXSwgKCkgPT4gbmV3IEZvb3RlclJlcG9zaXRvcnkoKSk7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgZm9vdGVyRElLZXlzLnNlcnZpY2UsXG4gIFtmb290ZXJESUtleXMucmVwb3NpdG9yeV0sXG4gIChmb290ZXJSZXBvc2l0b3J5KSA9PiBuZXcgRm9vdGVyU2VydmljZShmb290ZXJSZXBvc2l0b3J5KSxcbik7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgZm9vdGVyRElLZXlzLmNvbnRyb2xsZXIsXG4gIFtmb290ZXJESUtleXMuc2VydmljZV0sXG4gIChmb290ZXJTZXJ2aWNlKSA9PiBuZXcgRm9vdGVyQ29udHJvbGxlcihmb290ZXJTZXJ2aWNlKSxcbik7XG4iLCJpbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gXCJAL3NoYXJlZC9yZXBvc2l0b3J5L2Jhc2UucmVwb3NpdG9yeVwiO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL21vZGVsL2Zvb3Rlci5tb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgRm9vdGVyUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoRm9vdGVyKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIkAvY29yZS9kaS9kaS1jb250YWluZXJcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5cbmltcG9ydCB7IGZvb3RlckRJS2V5cyB9IGZyb20gXCIuL2Zvb3Rlci5kaVwiO1xuXG5jb25zdCBwcmVmaXggPSBcIi9mb290ZXJzXCI7XG5cbmNvbnN0IGZvb3RlclJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbmNvbnN0IGZvb3RlckNvbnRyb2xsZXIgPSBjb250YWluZXIuZ2V0KGZvb3RlckRJS2V5cy5jb250cm9sbGVyKTtcblxuZm9vdGVyUm91dGVyLmdldChgJHtwcmVmaXh9YCwgKHJlcSwgcmVzKSA9PiBmb290ZXJDb250cm9sbGVyLmZpbmQocmVxLCByZXMpKTtcblxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyUm91dGVyO1xuIiwiaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIkAvY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5leHBvcnQgY2xhc3MgRm9vdGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGZvb3RlclJlcG9zaXRvcnksIHN0b3JhZ2VTZXJ2aWNlKSB7XG4gICAgdGhpcy5mb290ZXJSZXBvc2l0b3J5ID0gZm9vdGVyUmVwb3NpdG9yeTtcbiAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlID0gc3RvcmFnZVNlcnZpY2U7XG4gIH1cblxuICBhc3luYyBjcmVhdGUoZm9vdGVyRHRvLCBzb2NpYWxNZWRpYUljb25zKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZm9vdGVyUmVwb3NpdG9yeS5maW5kQWxsKCk7XG4gICAgbGV0IHVwbG9hZGVkc29jaWFsTWVkaWFJY29ucyA9IFtdO1xuXG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5DT05GTElDVCxcbiAgICAgICAgbWVzc2FnZTogXCJGb290ZXIgYWxyZWFkeSBleGlzdHMgIVwiLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHNvY2lhbE1lZGlhSWNvbnMgJiYgc29jaWFsTWVkaWFJY29ucy5sZW5ndGggPiAwKSB7XG4gICAgICB1cGxvYWRlZHNvY2lhbE1lZGlhSWNvbnMgPVxuICAgICAgICBhd2FpdCB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnVwbG9hZEZpbGVzKHNvY2lhbE1lZGlhSWNvbnMpO1xuICAgIH1cblxuICAgIGZvb3RlckR0by5zb2NpYWxNZWRpYSA9IHVwbG9hZGVkc29jaWFsTWVkaWFJY29ucztcblxuICAgIHJldHVybiB0aGlzLmZvb3RlclJlcG9zaXRvcnkuY3JlYXRlRm9vdGVyKGZvb3RlckR0byk7XG4gIH1cblxuICBhc3luYyBmaW5kKCkge1xuICAgIHJldHVybiB0aGlzLmZvb3RlclJlcG9zaXRvcnkuZmluZEFsbCgpWzBdO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlKGZvb3RlckR0bywgZmlsZXMpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5mb290ZXJSZXBvc2l0b3J5LmZpbmQoKVswXTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5OT1RfRk9VTkQsXG4gICAgICAgIG1lc3NhZ2U6IFwiRm9vdGVyIG5vdCBmb3VuZCAhXCIsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgYXNzZXRNb2RlbFNjaGVtYSB9IGZyb20gXCJAL2NvbW1vbi9zY2hlbWEvbW9kZWwvYXNzZXQtbW9kZWwuc2NoZW1hXCI7XG5pbXBvcnQgeyBjb250YWN0U2NoZW1hIH0gZnJvbSBcIkAvY29tbW9uL3NjaGVtYS9tb2RlbC9jb250YWN0LW1vZGVsLnNjaGVtYVwiO1xuaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBmb290ZXJTY2hlbWEgPSBuZXcgU2NoZW1hKFxuICB7XG4gICAgY29udGFjdDogY29udGFjdFNjaGVtYSxcbiAgICBsb2NhdGlvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBjb3B5cmlnaHQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgb3BlbmluZ0RheToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBvcGVuaW5nSG91cjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBzb2NpYWxNZWRpYTogW2Fzc2V0TW9kZWxTY2hlbWFdLFxuICB9LFxuICB7XG4gICAgY29sbGVjdGlvbjogXCJmb290ZXJcIixcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICB9LFxuKTtcblxuY29uc3QgRm9vdGVyID0gbW9uZ29vc2UubW9kZWwoXCJGb290ZXJcIiwgZm9vdGVyU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IGF1dG9JbmNyZW1lbnRQbHVnaW4gZnJvbSBcIkAvY29tbW9uL21vbmdvb3NlL3BsdWdpbnMvYXV0by1pbmNyZW1lbnQucGx1Z2luXCI7XG5pbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IHJvbGVTY2hlbWEgPSBuZXcgU2NoZW1hKFxuICB7XG4gICAgcm9sZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB0cmltOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBjb2xsZWN0aW9uOiBcInJvbGVzXCIsXG4gICAgdmVyc2lvbktleTogZmFsc2UsXG4gIH0sXG4pLnBsdWdpbihhdXRvSW5jcmVtZW50UGx1Z2luLCB7IGluY0ZpZWxkOiBcIl9pZFwiIH0pO1xuXG5jb25zdCBSb2xlID0gbW9uZ29vc2UubW9kZWwoXCJSb2xlXCIsIHJvbGVTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBSb2xlO1xuIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIkAvY29yZS9kaS9kaS1jb250YWluZXJcIjtcblxuaW1wb3J0IHsgUm9sZVJlcG9zaXRvcnkgfSBmcm9tIFwiLi9yb2xlLnJlcG9zaXRvcnlcIjtcbmltcG9ydCB7IFJvbGVTZWVkZXIgfSBmcm9tIFwiLi9yb2xlLnNlZWRlclwiO1xuXG5leHBvcnQgY29uc3Qgcm9sZURJS2V5cyA9IHtcbiAgcmVwb3NpdG9yeTogXCJyb2xlLXJlcG9zaXRvcnlcIixcbiAgc2VlZGVyOiBcInJvbGUtc2VlZGVyXCIsXG59O1xuXG5jb250YWluZXIucmVnaXN0ZXIocm9sZURJS2V5cy5yZXBvc2l0b3J5LCBbXSwgKCkgPT4gbmV3IFJvbGVSZXBvc2l0b3J5KCkpO1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIHJvbGVESUtleXMuc2VlZGVyLFxuICBbcm9sZURJS2V5cy5yZXBvc2l0b3J5XSxcbiAgKHJvbGVSZXBvc2l0b3J5KSA9PiBuZXcgUm9sZVNlZWRlcihyb2xlUmVwb3NpdG9yeSksXG4pO1xuIiwiaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tIFwiQC9zaGFyZWQvcmVwb3NpdG9yeS9iYXNlLnJlcG9zaXRvcnlcIjtcblxuaW1wb3J0IFJvbGUgZnJvbSBcIi4vbW9kZWwvcm9sZS5tb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgUm9sZVJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFJvbGUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyByb2xlcyB9IGZyb20gXCJAL2NvbW1vbi9jb25zdGFudHMvcm9sZVwiO1xuXG5leHBvcnQgY2xhc3MgUm9sZVNlZWRlciB7XG4gIGNvbnN0cnVjdG9yKHJvbGVSZXBvc2l0b3J5KSB7XG4gICAgdGhpcy5yb2xlUmVwb3NpdG9yeSA9IHJvbGVSZXBvc2l0b3J5O1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlUm9sZXMoKSB7XG4gICAgY29uc3QgZXhpc3RpbmdSb2xlcyA9IGF3YWl0IHRoaXMucm9sZVJlcG9zaXRvcnkuZmluZEFsbCgpO1xuICAgIGNvbnN0IGV4aXN0aW5nUm9sZU5hbWVzID0gZXhpc3RpbmdSb2xlcy5tYXAoKHJvbGUpID0+IHJvbGUucm9sZSk7XG5cbiAgICBjb25zdCByb2xlc1RvQ3JlYXRlID0gcm9sZXMuZmlsdGVyKFxuICAgICAgKHJvbGUpID0+ICFleGlzdGluZ1JvbGVOYW1lcy5pbmNsdWRlcyhyb2xlLnJvbGUpLFxuICAgICk7XG5cbiAgICBpZiAocm9sZXNUb0NyZWF0ZS5sZW5ndGggPiAwKSB7XG4gICAgICBhd2FpdCB0aGlzLnJvbGVSZXBvc2l0b3J5LmNyZWF0ZU1hbnkocm9sZXNUb0NyZWF0ZSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb250YWN0RHRvIH0gZnJvbSBcIkAvY29tbW9uL3NjaGVtYS9kdG8vY29udGFjdC5kdG9cIjtcblxuZXhwb3J0IGNsYXNzIFVzZXJEdG8ge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5mdWxsTmFtZSA9IGRhdGEuZnVsbE5hbWU7XG4gICAgdGhpcy5wcm9maWxlSW1hZ2UgPSBkYXRhLnByb2ZpbGVJbWFnZTtcbiAgICB0aGlzLnJvbGUgPSBkYXRhLnJvbGU7XG4gICAgdGhpcy5jb250YWN0ID0gbmV3IENvbnRhY3REdG8oZGF0YS5jb250YWN0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGVtYWlsVmVyaWZpY2F0aW9uU2NoZW1hID0gbmV3IFNjaGVtYShcbiAge1xuICAgIGNvZGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICAgIGV4cGlyZXNBdDoge1xuICAgICAgdHlwZTogRGF0ZSxcbiAgICB9LFxuICAgIHZlcmlmaWVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIF9pZDogZmFsc2UsXG4gIH0sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBlbWFpbFZlcmlmaWNhdGlvblNjaGVtYTtcbiIsImltcG9ydCB7IGNvbnRhY3RTY2hlbWEgfSBmcm9tIFwiQC9jb21tb24vc2NoZW1hL21vZGVsL2NvbnRhY3QtbW9kZWwuc2NoZW1hXCI7XG5pbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmltcG9ydCBlbWFpbFZlcmlmaWNhdGlvbiBmcm9tIFwiLi9lbWFpbC12ZXJpZmljYXRpb25cIjtcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoXG4gIHtcbiAgICBmdWxsTmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB0cmltOiB0cnVlLFxuICAgIH0sXG4gICAgcHJvZmlsZUltYWdlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgICBwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB0cmltOiB0cnVlIH0sXG4gICAgY29udGFjdDogY29udGFjdFNjaGVtYSxcbiAgICBlbWFpbFZlcmlmaWNhdGlvbjoge1xuICAgICAgdHlwZTogZW1haWxWZXJpZmljYXRpb24sXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgICBwYXNzd29yZFJlc2V0OiB7XG4gICAgICB0eXBlOiBlbWFpbFZlcmlmaWNhdGlvbixcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB9LFxuICAgIHJvbGU6IHsgdHlwZTogU2NoZW1hLlR5cGVzLk51bWJlciwgcmVmOiBcIlJvbGVcIiwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgfSxcbiAge1xuICAgIGNvbGxlY3Rpb246IFwidXNlcnNcIixcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICB9LFxuKTtcblxuY29uc3QgVXNlciA9IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCB1c2VyU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCJAL2NvcmUvZGkvZGktY29udGFpbmVyXCI7XG5cbmltcG9ydCB7IFVzZXJSZXBvc2l0b3J5IH0gZnJvbSBcIi4vdXNlci5yZXBvc2l0b3J5XCI7XG5pbXBvcnQgeyBVc2VyU2VlZGVyIH0gZnJvbSBcIi4vdXNlci5zZWVkZXJcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vdXNlci5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VyRElLZXlzID0ge1xuICBzZXJ2aWNlOiBcInVzZXItc2VydmljZVwiLFxuICByZXBvc2l0b3J5OiBcInVzZXItcmVwb3NpdG9yeVwiLFxuICBzZWVkZXI6IFwidXNlci1zZWVkZXJcIixcbn07XG5cbmNvbnRhaW5lci5yZWdpc3Rlcih1c2VyRElLZXlzLnJlcG9zaXRvcnksIFtdLCAoKSA9PiBuZXcgVXNlclJlcG9zaXRvcnkoKSk7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgdXNlckRJS2V5cy5zZWVkZXIsXG4gIFt1c2VyRElLZXlzLnJlcG9zaXRvcnldLFxuICAodXNlclJlcG9zaXRvcnkpID0+IG5ldyBVc2VyU2VlZGVyKHVzZXJSZXBvc2l0b3J5KSxcbik7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgdXNlckRJS2V5cy5zZXJ2aWNlLFxuICBbdXNlckRJS2V5cy5yZXBvc2l0b3J5XSxcbiAgKHVzZXJSZXBvc2l0b3J5KSA9PiBuZXcgVXNlclNlcnZpY2UodXNlclJlcG9zaXRvcnkpLFxuKTtcbiIsImltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSBcIkAvc2hhcmVkL3JlcG9zaXRvcnkvYmFzZS5yZXBvc2l0b3J5XCI7XG5cbmltcG9ydCBVc2VyIGZyb20gXCIuL21vZGVsL3VzZXIubW9kZWxcIjtcblxuZXhwb3J0IGNsYXNzIFVzZXJSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihVc2VyKTtcbiAgfVxufVxuIiwiaW1wb3J0IGhhc2hQYXNzd29yZCBmcm9tIFwiQC9jb21tb24vaGVscGVycy9oYXNoLXBhc3N3b3JkXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyU2VlZGVyIHtcbiAgY29uc3RydWN0b3IodXNlclJlcG9zaXRvcnksIHJvbGVSZXBvc2l0b3J5KSB7XG4gICAgdGhpcy51c2VyUmVwb3NpdG9yeSA9IHVzZXJSZXBvc2l0b3J5O1xuICAgIHRoaXMucm9sZVJlcG9zaXRvcnkgPSByb2xlUmVwb3NpdG9yeTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZUFkbWluKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnVzZXJSZXBvc2l0b3J5LmZpbmRPbmUoeyByb2xlOiAxIH0pO1xuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBjb25zdCBwYXNzd29yZCA9IGF3YWl0IGhhc2hQYXNzd29yZChcImJha3RhcmFkbWluXCIpO1xuXG4gICAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS5jcmVhdGUoe1xuICAgICAgICBlbWFpbDogXCJiYWt0YXJhZG1pbkBnbWFpbC5jb21cIixcbiAgICAgICAgZnVsbE5hbWU6IFwiYmFrdGFyIGFkbWluXCIsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgICByb2xlOiAxLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCBoYXNoUGFzc3dvcmQgZnJvbSBcIkAvY29tbW9uL2hlbHBlcnMvaGFzaC1wYXNzd29yZFwiO1xuaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIkAvY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcih1c2VyUmVwb3NpdG9yeSkge1xuICAgIHRoaXMudXNlclJlcG9zaXRvcnkgPSB1c2VyUmVwb3NpdG9yeTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZSh1c2VyRHRvKSB7XG4gICAgdXNlckR0by5wYXNzd29yZCA9IGF3YWl0IGhhc2hQYXNzd29yZCh1c2VyRHRvLnBhc3N3b3JkKTtcblxuICAgIHJldHVybiB0aGlzLnVzZXJSZXBvc2l0b3J5LmNyZWF0ZSh1c2VyRHRvKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRCeUVtYWlsKGVtYWlsKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlclJlcG9zaXRvcnkuZmluZE9uZSh7IFwiY29udGFjdC5lbWFpbFwiOiBlbWFpbCB9KTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRCeUlkKGlkKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMudXNlclJlcG9zaXRvcnkuZmluZEJ5SWQoaWQpO1xuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBCYXNlUmVzcG9uc2UuZXJyb3Ioe1xuICAgICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk5PVF9GT1VORCxcbiAgICAgICAgbWVzc2FnZTogXCJVc2VyIG5vdCBmb3VuZCFcIixcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlKGlkLCB1c2VyRHRvKSB7XG4gICAgYXdhaXQgdGhpcy5maW5kQnlJZChpZCk7XG5cbiAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS51cGRhdGUoaWQsIHVzZXJEdG8pO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlKGlkKSB7XG4gICAgYXdhaXQgdGhpcy5maW5kQnlJZChpZCk7XG5cbiAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS5kZWxldGUoaWQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBzd2FnZ2VyU3BlYywgc3dhZ2dlclVpIH0gZnJvbSBcIkAvY29yZS9jb25maWcvc3dhZ2dlci5jb25maWdcIjtcbmltcG9ydCBcIkAvY29yZS9kaS9kaS1nbG9iYWxzXCI7XG5pbXBvcnQgY29va2llUGFyc2VyIGZyb20gXCJjb29raWUtcGFyc2VyXCI7XG5pbXBvcnQgY29ycyBmcm9tIFwiY29yc1wiO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7IHJhdGVMaW1pdCB9IGZyb20gXCJleHByZXNzLXJhdGUtbGltaXRcIjtcblxuaW1wb3J0IGF1dGhSb3V0ZXIgZnJvbSBcIi4vYXBpL2F1dGgvYXV0aC5yb3V0ZVwiO1xuaW1wb3J0IGZvb3RlclJvdXRlciBmcm9tIFwiLi9hcGkvZm9vdGVyL2Zvb3Rlci5yb3V0ZVwiO1xuaW1wb3J0IHsgYXBpUHJlZml4IH0gZnJvbSBcIi4vY29tbW9uL2NvbnN0YW50cy9hcGlcIjtcbmltcG9ydCBiYXNlUmVzcG9uc2VNaWRkbGV3YXJlIGZyb20gXCIuL2NvcmUvbWlkZGxld2FyZS9iYXNlLXJlc3BvbnNlLm1pZGRsZXdhcmVcIjtcbmltcG9ydCBlcnJvckhhbmRsZXJNaWRkbGV3YXJlIGZyb20gXCIuL2NvcmUvbWlkZGxld2FyZS9lcnJvci1oYW5kbGVyLW1pZGRsZXdhcmVcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKFxuICByYXRlTGltaXQoe1xuICAgIHdpbmRvd01zOiAxMCAqIDYwICogMTAwMCxcbiAgICBsaW1pdDogMTAwLFxuICAgIHN0YW5kYXJkSGVhZGVyczogXCJkcmFmdC02XCIsXG4gICAgbGVnYWN5SGVhZGVyczogZmFsc2UsXG4gICAgbWVzc2FnZTogXCJUb28gbWFueSByZXF1ZXN0c1wiLFxuICB9KSxcbik7XG5hcHAuc2V0KFwidHJ1c3QgcHJveHlcIiwgMSk7XG5hcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcbmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG5hcHAudXNlKGNvcnMoKSk7XG5hcHAuZGlzYWJsZShcIngtcG93ZXJlZC1ieVwiKTtcbmFwcC51c2UoYmFzZVJlc3BvbnNlTWlkZGxld2FyZSk7XG5hcHAudXNlKFwiL2FwaS1kb2NzXCIsIHN3YWdnZXJVaS5zZXJ2ZSwgc3dhZ2dlclVpLnNldHVwKHN3YWdnZXJTcGVjKSk7XG5cbmFwcC51c2UoYXBpUHJlZml4LCBmb290ZXJSb3V0ZXIpO1xuYXBwLnVzZShhcGlQcmVmaXgsIGF1dGhSb3V0ZXIpO1xuXG5hcHAudXNlKGVycm9ySGFuZGxlck1pZGRsZXdhcmUpO1xuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIiwiZXhwb3J0IGNvbnN0IGFwaVByZWZpeCA9IFwiL2FwaS92MVwiO1xuIiwiZXhwb3J0IGNvbnN0IHJvbGVzID0gW3sgcm9sZTogXCJhZG1pblwiIH0sIHsgcm9sZTogXCJ1c2VyXCIgfV07XG4iLCJpbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlVG9rZW4gPSAocGF5bG9hZCwgc2VjcmV0LCB0aW1lKSA9PlxuICBqd3Quc2lnbihwYXlsb2FkLCBzZWNyZXQsIHtcbiAgICBleHBpcmVzSW46IHRpbWUsXG4gICAgYWxnb3JpdGhtOiBcIkhTNTEyXCIsXG4gIH0pO1xuIiwiaW1wb3J0ICogYXMgYmNyeXB0IGZyb20gXCJiY3J5cHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFzaFBhc3N3b3JkKHBhc3N3b3JkKSB7XG4gIGNvbnN0IHNhbHQgPSBhd2FpdCBiY3J5cHQuZ2VuU2FsdCgxMCk7XG5cbiAgcmV0dXJuIGJjcnlwdC5oYXNoKHBhc3N3b3JkLCBzYWx0KTtcbn1cbiIsImltcG9ydCBjcnlwdG8gZnJvbSBcImNyeXB0b1wiO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSB2ZXJpZmljYXRpb24gY29kZSB3aXRoIGEgc3BlY2lmaWMgbGVuZ3RoIHVzaW5nIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzLlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCAtIExlbmd0aCBvZiB0aGUgdmVyaWZpY2F0aW9uIGNvZGUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSAtIFRoZSBnZW5lcmF0ZWQgdmVyaWZpY2F0aW9uIGNvZGUuXG4gKi9cbmNvbnN0IGdlbmVyYXRlVmVyaWZpY2F0aW9uQ29kZSA9IChsZW5ndGggPSA2KSA9PiB7XG4gIGNvbnN0IGNoYXJhY3RlcnMgPVxuICAgIFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlcIjtcbiAgY29uc3QgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xuICBsZXQgcmVzdWx0ID0gXCJcIjtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gY3J5cHRvLnJhbmRvbUludChjaGFyYWN0ZXJzTGVuZ3RoKTtcbiAgICByZXN1bHQgKz0gY2hhcmFjdGVyc1tyYW5kb21JbmRleF07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgZ2V0VmVyaWZpY2F0aW9uQ29kZUV4cGlyeSA9IChtaW51dGVzKSA9PiBEYXRlLm5vdygpICsgbWludXRlcyAqIDYwMDAwO1xuXG5leHBvcnQgeyBnZW5lcmF0ZVZlcmlmaWNhdGlvbkNvZGUsIGdldFZlcmlmaWNhdGlvbkNvZGVFeHBpcnkgfTtcbiIsIi8qKlxuICogQGRlc2NyaXB0aW9uIE1vbmdvb3NlIHBsdWdpbiB0byBhdXRvIGluY3JlbWVudCBhIGZpZWxkXG4gKiBAcGFyYW0ge01vbmdvb3NlLlNjaGVtYX0gc2NoZW1hXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdXRvSW5jcmVtZW50UGx1Z2luKHNjaGVtYSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMuaW5jRmllbGQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2Ugc3BlY2lmeSBpbmNGaWVsZCFcIik7XG4gIH1cblxuICBsZXQgZmllbGRPcHRpb25zID0ge1xuICAgIHR5cGU6IE51bWJlcixcbiAgfTtcblxuICBpZiAob3B0aW9ucy5pbmNGaWVsZCAhPT0gXCJfaWRcIikge1xuICAgIGZpZWxkT3B0aW9ucyA9IHtcbiAgICAgIC4uLmZpZWxkT3B0aW9ucyxcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgc2NoZW1hLmFkZCh7XG4gICAgW29wdGlvbnMuaW5jRmllbGRdOiBmaWVsZE9wdGlvbnMsXG4gIH0pO1xuXG4gIHNjaGVtYS5wcmUoXCJzYXZlXCIsIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgaWYgKHRoaXMuaXNOZXcpIHtcbiAgICAgIHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgLmZpbmRPbmUoe30sIHt9LCB7IHNvcnQ6IHsgW29wdGlvbnMuaW5jRmllbGRdOiAtMSB9IH0pXG4gICAgICAgIC50aGVuKChsYXN0UmVjb3JkKSA9PiB7XG4gICAgICAgICAgdGhpc1tvcHRpb25zLmluY0ZpZWxkXSA9IGxhc3RSZWNvcmRcbiAgICAgICAgICAgID8gbGFzdFJlY29yZFtvcHRpb25zLmluY0ZpZWxkXSArIDFcbiAgICAgICAgICAgIDogMTtcblxuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIHNjaGVtYS5wcmUoXCJpbnNlcnRNYW55XCIsIGFzeW5jIGZ1bmN0aW9uIChuZXh0LCBkb2NzKSB7XG4gICAgY29uc3QgbGFzdFJlY29yZCA9IGF3YWl0IHRoaXMuZmluZE9uZShcbiAgICAgIHt9LFxuICAgICAge30sXG4gICAgICB7IHNvcnQ6IHsgW29wdGlvbnMuaW5jRmllbGRdOiAtMSB9IH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGxhc3RDb3VudCA9IGxhc3RSZWNvcmQgPyBsYXN0UmVjb3JkW29wdGlvbnMuaW5jRmllbGRdIDogMDtcblxuICAgIGRvY3MuZm9yRWFjaCgoZG9jLCBpbmRleCkgPT4ge1xuICAgICAgZG9jW29wdGlvbnMuaW5jRmllbGRdID0gbGFzdENvdW50ICsgaW5kZXggKyAxO1xuICAgIH0pO1xuXG4gICAgbmV4dCgpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBjbGFzcyBDb250YWN0RHRvIHtcbiAgY29uc3RydWN0b3IoeyBlbWFpbCwgcGhvbmVOdW1iZXIgfSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgZW1haWwsXG4gICAgICBwaG9uZU51bWJlcixcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgY29uc3QgYXNzZXRNb2RlbFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICBocmVmOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlOiB0cnVlLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICAgIHVybDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBwdWJsaWNJZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgICBzaXplOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIF9pZDogZmFsc2UsXG4gIH0sXG4pO1xuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgY29uc3QgY29udGFjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICBlbWFpbDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgcGhvbmVOdW1iZXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgX2lkOiBmYWxzZSxcbiAgfSxcbik7XG4iLCJpbXBvcnQgXCJAL2NvcmUvY29uZmlnL2Vudi5jb25maWdcIjtcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURiQ29ubmVjdGlvbigpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52LkNPTk5FQ1RJT05fU1RSSU5HKTtcbiAgICBjb25zb2xlLmxvZyhcIk1vbmdvREIgQ29ubmVjdGVkXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJNb25nb0RCIENvbm5lY3Rpb24gRXJyb3I6XCIsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcImRvdGVudlwiO1xuXG5jb25maWcoKTtcblxuY29uZmlnKHtcbiAgcGF0aDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiA/IFwiLmVudi5sb2NhbFwiIDogXCIuZW52XCIsXG4gIG92ZXJyaWRlOiB0cnVlLFxufSk7XG4iLCJleHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBqd3Q6IHtcbiAgICBhbGdvcml0aG06IHByb2Nlc3MuZW52LkpXVF9BTEdPUklUSE0sXG4gICAgYWNjZXNzU2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfQUNDRVNTX1NFQ1JFVCxcbiAgICBhY2Nlc3NFeHBpcmVzSW46IHByb2Nlc3MuZW52LkpXVF9BQ0NFU1NfRVhQSVJFU19JTixcbiAgICByZWZyZXNoU2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfUkVGUkVTSF9TRUNSRVQsXG4gICAgcmVmcmVzaEV4cGlyZXNJbjogcHJvY2Vzcy5lbnYuSldUX1JFRlJFU0hfRVhQSVJFU19JTixcbiAgICB2ZXJpZmljYXRpb25TZWNyZXQ6IHByb2Nlc3MuZW52LkpXVF9WRVJJRklDQVRJT05fU0VDUkVULFxuICAgIHZlcmlmaWNhdGlvbkV4cGlyZXNJbjogcHJvY2Vzcy5lbnYuSldUX1ZFUklGSUNBVElPTl9FWFBJUkVTX0lOLFxuICB9LFxufTtcbiIsImltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSBcIkAvc2hhcmVkL2Vycm9yLXJlc3BvbnNlL2Vycm9yLXJlc3BvbnNlXCI7XG5pbXBvcnQgbm9kZW1haWxlciBmcm9tIFwibm9kZW1haWxlclwiO1xuXG5leHBvcnQgY29uc3Qgc2VuZEVtYWlsID0gYXN5bmMgKG1haWxPcHRpb25zKSA9PiB7XG4gIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgIHNlcnZpY2U6IFwiZ21haWxcIixcbiAgICBhdXRoOiB7XG4gICAgICB1c2VyOiBwcm9jZXNzLmVudi5NQUlMX1VTRVIsXG4gICAgICBwYXNzOiBwcm9jZXNzLmVudi5NQUlMX1BBU1NXT1JELFxuICAgIH0sXG4gIH0pO1xuXG4gIHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zLCAoZXJyb3IsIGluZm8pID0+IHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHRocm93IG5ldyBBUElFcnJvcihcIkVtYWlsIEZhaWxlZCB0byBTZW5kIVwiLCA0MDMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgRW1haWwgc2VudDogJHtpbmZvLnJlc3BvbnNlfWApO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzICovXG5pbXBvcnQgc3dhZ2dlckpzZG9jIGZyb20gXCJzd2FnZ2VyLWpzZG9jXCI7XG5pbXBvcnQgc3dhZ2dlclVpIGZyb20gXCJzd2FnZ2VyLXVpLWV4cHJlc3NcIjtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgZGVmaW5pdGlvbjoge1xuICAgIG9wZW5hcGk6IFwiMy4wLjBcIixcbiAgICBpbmZvOiB7XG4gICAgICB0aXRsZTogXCJDQUYtVmliZSBDb2ZmZWUgU2hvcCBBUElcIixcbiAgICAgIHZlcnNpb246IFwiMS4wLjBcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkNBRi1WaWJlIENvZmZlZSBTaG9wIEFQSSBkb2N1bWVudGF0aW9uXCIsXG4gICAgfSxcbiAgICBzZXJ2ZXJzOiBbXG4gICAgICB7XG4gICAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjUwMDBcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgYXBpczogW1wiLi9zcmMvYXBpLyouanNcIl0sXG59O1xuXG5jb25zdCBzd2FnZ2VyU3BlYyA9IHN3YWdnZXJKc2RvYyhvcHRpb25zKTtcblxuZXhwb3J0IHsgc3dhZ2dlclNwZWMsIHN3YWdnZXJVaSB9O1xuIiwiaW1wb3J0IHsgcm9sZURJS2V5cyB9IGZyb20gXCJAL2FwaS9yb2xlL3JvbGUuZGlcIjtcbmltcG9ydCB7IFJvbGVTZWVkZXIgfSBmcm9tIFwiQC9hcGkvcm9sZS9yb2xlLnNlZWRlclwiO1xuaW1wb3J0IHsgdXNlckRJS2V5cyB9IGZyb20gXCJAL2FwaS91c2VyL3VzZXIuZGlcIjtcbmltcG9ydCB7IFVzZXJTZWVkZXIgfSBmcm9tIFwiQC9hcGkvdXNlci91c2VyLnNlZWRlclwiO1xuXG5pbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiLi4vZGkvZGktY29udGFpbmVyXCI7XG5cbmV4cG9ydCBjb25zdCBzZWVkID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB1c2VyU2VlZGVyID0gbmV3IFVzZXJTZWVkZXIoY29udGFpbmVyLmdldCh1c2VyRElLZXlzLnJlcG9zaXRvcnkpKTtcbiAgY29uc3Qgcm9sZVNlZWRlciA9IG5ldyBSb2xlU2VlZGVyKGNvbnRhaW5lci5nZXQocm9sZURJS2V5cy5yZXBvc2l0b3J5KSk7XG5cbiAgYXdhaXQgcm9sZVNlZWRlci5jcmVhdGVSb2xlcygpO1xuICBhd2FpdCBQcm9taXNlLmFsbChbdXNlclNlZWRlci5jcmVhdGVBZG1pbigpXSk7XG59O1xuIiwiLyoqXG4gKiBEZXBlbmRlbmN5IEluamVjdGlvbiBDb250YWluZXJcbiAqIEBjbGFzcyBEaUNvbnRhaW5lclxuICogQGRlc2NyaXB0aW9uIEEgc2ltcGxlIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGNvbnRhaW5lciB0aGF0IGFsbG93cyB5b3UgdG8gcmVnaXN0ZXJcbiAqIGFuZCBnZXQgZGVwZW5kZW5jaWVzXG4gKiBAZXhhbXBsZVxuICogY29uc3QgY29udGFpbmVyID0gbmV3IERpQ29udGFpbmVyKCk7XG4gKiBjb250YWluZXIucmVnaXN0ZXIoXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIiwgW10sICgpID0+IG5ldyBMYW5kaW5nUGFnZVJlcG9zaXRvcnkoKSk7XG4gKiBjb250YWluZXIucmVnaXN0ZXIoXG4gKiAgXCJMYW5kaW5nUGFnZVNlcnZpY2VcIixcbiAqICBbXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIl0sXG4gKiAgKGxhbmRpbmdQYWdlUmVwb3NpdG9yeSkgPT4gbmV3IExhbmRpbmdQYWdlU2VydmljZShsYW5kaW5nUGFnZVJlcG9zaXRvcnkpLFxuICogKTtcbiAqXG4gKiBjb25zdCBsYW5kaW5nUGFnZVNlcnZpY2UgPSBjb250YWluZXIuZ2V0KFwiTGFuZGluZ1BhZ2VTZXJ2aWNlXCIpO1xuICovXG5jbGFzcyBEaUNvbnRhaW5lciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGVwZW5kZW5jaWVzID0ge307XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBkZXBlbmRlbmN5XG4gICAqIEBwYXJhbSBuYW1lIC0gTmFtZSBvZiB0aGUgZGVwZW5kZW5jeSAoZXg6IFwiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCIpXG4gICAqIEBwYXJhbSBkZXBlbmRlbmNpZXMgLSBBcnJheSBvZiBkZXBlbmRlbmNpZXMgKGV4OiBbXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIl0pXG4gICAqIEBwYXJhbSBmdW5jIC0gRnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBkZXBlbmRlbmN5XG4gICAqL1xuICByZWdpc3RlcihuYW1lLCBkZXBlbmRlbmNpZXMsIGZ1bmMpIHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fFxuICAgICAgIUFycmF5LmlzQXJyYXkoZGVwZW5kZW5jaWVzKSB8fFxuICAgICAgdHlwZW9mIGZ1bmMgIT09IFwiZnVuY3Rpb25cIlxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhcmd1bWVudFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlcGVuZGVuY2llc1tuYW1lXSA9IHtcbiAgICAgIGRlcGVuZGVuY2llcyxcbiAgICAgIGZ1bmMsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBkZXBlbmRlbmN5XG4gICAqIEBwYXJhbSBuYW1lIC0gTmFtZSBvZiB0aGUgZGVwZW5kZW5jeSAoZXg6IFwiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCIpXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXQobmFtZSkge1xuICAgIGlmICghdGhpcy5kZXBlbmRlbmNpZXNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRGVwZW5kZW5jeSBub3QgZm91bmQ6ICR7bmFtZX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGRlcGVuZGVuY2llcywgZnVuYyB9ID0gdGhpcy5kZXBlbmRlbmNpZXNbbmFtZV07XG5cbiAgICBjb25zdCBkZXBlbmRlbmNpZXNJbnN0YW5jZXMgPSBkZXBlbmRlbmNpZXMubWFwKChkZXBlbmRlbmN5KSA9PlxuICAgICAgdGhpcy5nZXQoZGVwZW5kZW5jeSksXG4gICAgKTtcblxuICAgIHJldHVybiBmdW5jKC4uLmRlcGVuZGVuY2llc0luc3RhbmNlcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lciA9IG5ldyBEaUNvbnRhaW5lcigpO1xuIiwiaW1wb3J0IFwiQC9hcGkvdXNlci91c2VyLmRpXCI7XG5pbXBvcnQgXCJAL2FwaS9mb290ZXIvZm9vdGVyLmRpXCI7XG5pbXBvcnQgXCJAL2FwaS9yb2xlL3JvbGUuZGlcIjtcbmltcG9ydCBcIkAvYXBpL2F1dGgvYXV0aC5kaVwiO1xuIiwiaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcblxuaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIi4uL3Jlc3BvbnNlL2Jhc2UtcmVzcG9uc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmFzZVJlc3BvbnNlTWlkZGxld2FyZShyZXEsIHJlcywgbmV4dCkge1xuICByZXMuc3VjY2VzcyA9IChwcm9wcykgPT4ge1xuICAgIHJlc1xuICAgICAgLnN0YXR1cyhwcm9wcy5zdGF0dXMgfHwgU3RhdHVzQ29kZXMuT0spXG4gICAgICAuanNvbihCYXNlUmVzcG9uc2Uuc3VjY2Vzcyhwcm9wcykpO1xuICB9O1xuXG4gIHJlcy5lcnJvciA9IChwcm9wcykgPT4ge1xuICAgIHJlc1xuICAgICAgLnN0YXR1cyhwcm9wcy5zdGF0dXMgfHwgU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QpXG4gICAgICAuanNvbihCYXNlUmVzcG9uc2UuZXJyb3IocHJvcHMpKTtcbiAgfTtcblxuICBuZXh0KCk7XG59XG4iLCJpbXBvcnQgeyBCYXNlUmVzcG9uc2UgfSBmcm9tIFwiQC9jb3JlL3Jlc3BvbnNlL2Jhc2UtcmVzcG9uc2VcIjtcbmltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSBcIkAvc2hhcmVkL2Vycm9yLXJlc3BvbnNlL2Vycm9yLXJlc3BvbnNlXCI7XG5cbmNvbnN0IGVycm9ySGFuZGxlck1pZGRsZXdhcmUgPSAoZXJyb3IsIHJlcXVlc3QsIHJlc3BvbnNlLCBuZXh0KSA9PiB7XG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIEFQSUVycm9yKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyhlcnJvci5zdGF0dXNDb2RlIHx8IDQwMCkuanNvbih7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cblxuICBuZXh0KCk7XG5cbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgQmFzZVJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmVycm9yKGVycm9yKTtcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZS5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8IFwiSW50ZXJuYWwgU2VydmVyIEVycm9yIVwiLFxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVycm9ySGFuZGxlck1pZGRsZXdhcmU7XG4iLCJpbXBvcnQgeyBnZXRSZWFzb25QaHJhc2UsIFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBCYXNlUmVzcG9uc2Uge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5zdWNjZXNzID0gZGF0YS5zdWNjZXNzO1xuICAgIHRoaXMuc3RhdHVzID0gZGF0YS5zdGF0dXM7XG4gICAgdGhpcy5tZXNzYWdlID0gZGF0YS5tZXNzYWdlO1xuICAgIHRoaXMuZGF0YSA9IGRhdGEuZGF0YTtcbiAgICB0aGlzLmRldGFpbHMgPSBkYXRhLmRldGFpbHM7XG4gIH1cblxuICBzdGF0aWMgc3VjY2Vzcyh7IHN0YXR1cyA9IFN0YXR1c0NvZGVzLk9LLCBtZXNzYWdlLCBkYXRhIH0pIHtcbiAgICByZXR1cm4gbmV3IEJhc2VSZXNwb25zZSh7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgc3RhdHVzLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSB8fCBnZXRSZWFzb25QaHJhc2Uoc3RhdHVzKSxcbiAgICAgIGRhdGEsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZXJyb3IoeyBtZXNzYWdlLCBzdGF0dXMgPSBTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVCwgZGV0YWlscyA9IG51bGwgfSkge1xuICAgIHJldHVybiBuZXcgQmFzZVJlc3BvbnNlKHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgc3RhdHVzLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSB8fCBnZXRSZWFzb25QaHJhc2Uoc3RhdHVzKSxcbiAgICAgIGRldGFpbHMsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHNlbmRFbWFpbCB9IGZyb20gXCJAL2NvcmUvY29uZmlnL21haWwuY29uZmlnXCI7XG5cbmV4cG9ydCBjbGFzcyBFbWFpbFNlcnZpY2Uge1xuICBhc3luYyBzZW5kVmVyaWZpY2F0aW9uRW1haWwoZW1haWwsIGNvZGUsIHRpdGxlKSB7XG4gICAgcmV0dXJuIHNlbmRFbWFpbCh7XG4gICAgICBmcm9tOiBwcm9jZXNzLmVudi5NQUlMX0ZST00sXG4gICAgICB0bzogZW1haWwsXG4gICAgICBzdWJqZWN0OiB0aXRsZSxcbiAgICAgIHRleHQ6IGNvZGUsXG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBBUElFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgc3RhdHVzQ29kZSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBCYXNlUmVwb3NpdG9yeSB7XG4gIGNvbnN0cnVjdG9yKG1vZGVsKSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICB9XG5cbiAgY3JlYXRlKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5jcmVhdGUoZGF0YSk7XG4gIH1cblxuICB1cGRhdGUoaWQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kQnlJZEFuZFVwZGF0ZShpZCwgZGF0YSwge1xuICAgICAgbmV3OiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZEJ5SWRBbmREZWxldGUoaWQpO1xuICB9XG5cbiAgZmluZEJ5SWQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kQnlJZChpZCk7XG4gIH1cblxuICBmaW5kQWxsKCkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmQoKTtcbiAgfVxuXG4gIGZpbmRPbmUocXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kT25lKHF1ZXJ5KTtcbiAgfVxuXG4gIGZpbmQocXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kKHF1ZXJ5KTtcbiAgfVxuXG4gIGNvdW50KHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuY291bnREb2N1bWVudHMocXVlcnkpO1xuICB9XG5cbiAgYWdncmVnYXRlKHBpcGVsaW5lKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuYWdncmVnYXRlKHBpcGVsaW5lKTtcbiAgfVxuXG4gIGNyZWF0ZU1hbnkoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmluc2VydE1hbnkoZGF0YSk7XG4gIH1cblxuICB1cGRhdGVNYW55KHF1ZXJ5LCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwudXBkYXRlTWFueShxdWVyeSwgZGF0YSk7XG4gIH1cblxuICBidWxrV3JpdGUob3BlcmF0aW9ucykge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmJ1bGtXcml0ZShvcGVyYXRpb25zKTtcbiAgfVxuXG4gIGFzeW5jIHVwc2VydChxdWVyeSwgZGF0YSkge1xuICAgIGNvbnN0IGZpbmREYXRhID0gYXdhaXQgdGhpcy5maW5kT25lKHF1ZXJ5KTtcblxuICAgIGlmICghZmluZERhdGEpIHJldHVybiB0aGlzLmNyZWF0ZShkYXRhKTtcblxuICAgIHJldHVybiB0aGlzLnVwZGF0ZShmaW5kRGF0YS5faWQsIGRhdGEpO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvd3JhcE5hdGl2ZVN1cGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWUtcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1hc3luYy1lcnJvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1yYXRlLWxpbWl0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHAtc3RhdHVzLWNvZGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlbWFpbGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3YWdnZXItanNkb2NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dhZ2dlci11aS1leHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCJAL2NvcmUvY29uZmlnL2Vudi5jb25maWdcIjtcbmltcG9ydCBcImV4cHJlc3MtYXN5bmMtZXJyb3JzXCI7XG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXIgfSBmcm9tIFwiaHR0cFwiO1xuXG5pbXBvcnQgYXBwIGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IHsgY3JlYXRlRGJDb25uZWN0aW9uIH0gZnJvbSBcIi4vY29yZS9jb25maWcvZGIuY29uZmlnXCI7XG5pbXBvcnQgeyBzZWVkIH0gZnJvbSBcIi4vY29yZS9kYi9zZWVkXCI7XG5cbmNvbnN0IHNlcnZlciA9IGNyZWF0ZVNlcnZlcihhcHApO1xuY29uc3QgeyBQT1JUIH0gPSBwcm9jZXNzLmVudjtcblxuKGFzeW5jICgpID0+IHtcbiAgYXdhaXQgY3JlYXRlRGJDb25uZWN0aW9uKCk7XG4gIGF3YWl0IHNlZWQoKTtcbiAgc2VydmVyLmxpc3RlbihQT1JULCBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYFNlcnZlciBpcyBydW5uaW5nOiBodHRwOi8vbG9jYWxob3N0OiR7UE9SVH1gKTtcbiAgfSk7XG59KSgpO1xuIl0sIm5hbWVzIjpbIlN0YXR1c0NvZGVzIiwiQXV0aER0byIsIkF1dGhDb250cm9sbGVyIiwiYXV0aFNlcnZpY2UiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl9yZWdpc3RlciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwicmVxdWVzdCIsInJlc3BvbnNlIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsInJlZ2lzdGVyIiwiYm9keSIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwic3RhdHVzIiwiQ1JFQVRFRCIsInN0b3AiLCJfeCIsIl94MiIsImFwcGx5IiwiYXJndW1lbnRzIiwiX3ZlcmlmeUVtYWlsIiwiX2NhbGxlZTIiLCJkYXRhIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwidmVyaWZ5RW1haWwiLCJzZW50IiwiX3gzIiwiX3g0IiwiX2xvZ2luIiwiX2NhbGxlZTMiLCJ1c2VyIiwiYWNjZXNzVG9rZW4iLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJsb2dpbiIsIk9LIiwiX3g1IiwiX3g2IiwiY29udGFpbmVyIiwiRW1haWxTZXJ2aWNlIiwidXNlckRJS2V5cyIsIkF1dGhTZXJ2aWNlIiwiYXV0aERJS2V5cyIsImNvbnRyb2xsZXIiLCJzZXJ2aWNlIiwiZW1haWxTZXJ2aWNlIiwidXNlclNlcnZpY2UiLCJleHByZXNzIiwiYXV0aFJvdXRlciIsIlJvdXRlciIsInByZWZpeCIsImF1dGhDb250cm9sbGVyIiwiZ2V0IiwicG9zdCIsImNvbmNhdCIsInJlcSIsInJlcyIsImdlbmVyYXRlVG9rZW4iLCJnZW5lcmF0ZVZlcmlmaWNhdGlvbkNvZGUiLCJnZXRWZXJpZmljYXRpb25Db2RlRXhwaXJ5IiwiY29uZmlnIiwiQmFzZVJlc3BvbnNlIiwiYXV0aFJlZ2lzdGVyRHRvIiwiX2V4aXN0aW5nVXNlciRlbWFpbFZlIiwiX2V4aXN0aW5nVXNlciRlbWFpbFZlMiIsImV4aXN0aW5nVXNlciIsInZlcmlmaWNhdGlvbkNvZGUiLCJ2ZXJpZmljYXRpb25UaW1lIiwic2F2ZWRVc2VyIiwiZmluZEJ5RW1haWwiLCJjb250YWN0IiwiZW1haWwiLCJlbWFpbFZlcmlmaWNhdGlvbiIsInZlcmlmaWVkIiwiZXJyb3IiLCJDT05GTElDVCIsIl9pZCIsInJvbGUiLCJjb2RlIiwiZXhwaXJlc0F0IiwiY3JlYXRlIiwic2VuZFZlcmlmaWNhdGlvbkVtYWlsIiwidmVyaWZpY2F0aW9uRHRvIiwiX2V4aXN0aW5nVXNlciRlbWFpbFZlMyIsIm5vdyIsInBheWxvYWQiLCJ0b2tlbiIsIkJBRF9SRVFVRVNUIiwiRGF0ZSIsInNhdmUiLCJ1bmRlZmluZWQiLCJzdWIiLCJjcmVhdGVUb2tlbiIsImFicnVwdCIsIl9jcmVhdGVUb2tlbiIsIl9jb25maWckand0IiwiYWNjZXNzU2VjcmV0IiwiYWNjZXNzRXhwaXJlc0luIiwicmVmcmVzaFNlY3JldCIsInJlZnJlc2hFeHBpcmVzSW4iLCJyZWZyZXNoVG9rZW4iLCJqd3QiLCJ1cGRhdGUiLCJyZWZyZXNoIiwiX3ZlcmlmaWNhdGlvblRva2VuIiwiX2NhbGxlZTQiLCJfY29uZmlnJGp3dDIiLCJ2ZXJpZmljYXRpb25FeHBpcmVzSW4iLCJ2ZXJpZmljYXRpb25TZWNyZXQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJ2ZXJpZmljYXRpb25Ub2tlbiIsIlVzZXJEdG8iLCJUb2tlbkR0byIsImFjY2VzcyIsIkZvb3RlckR0byIsIl9yZWYiLCJsb2NhdGlvbiIsInRpdGxlIiwiY29weXJpZ2h0Iiwib3BlbmluZ0RheSIsIm9wZW5pbmdIb3VyIiwic29jaWFsTWVkaWEiLCJPYmplY3QiLCJhc3NpZ24iLCJGb290ZXJDb250cm9sbGVyIiwiZm9vb3RlclNlcnZpY2UiLCJfZmluZCIsImZpbmQiLCJGb290ZXJSZXBvc2l0b3J5IiwiRm9vdGVyU2VydmljZSIsImZvb3RlckRJS2V5cyIsInJlcG9zaXRvcnkiLCJmb290ZXJSZXBvc2l0b3J5IiwiZm9vdGVyU2VydmljZSIsIkJhc2VSZXBvc2l0b3J5IiwiRm9vdGVyIiwiX0Jhc2VSZXBvc2l0b3J5IiwiX2NhbGxTdXBlciIsIl9pbmhlcml0cyIsImZvb3RlclJvdXRlciIsImZvb3RlckNvbnRyb2xsZXIiLCJzdG9yYWdlU2VydmljZSIsIl9jcmVhdGUiLCJmb290ZXJEdG8iLCJzb2NpYWxNZWRpYUljb25zIiwidXBsb2FkZWRzb2NpYWxNZWRpYUljb25zIiwiZmluZEFsbCIsImxlbmd0aCIsInVwbG9hZEZpbGVzIiwiY3JlYXRlRm9vdGVyIiwiX3VwZGF0ZSIsImZpbGVzIiwiTk9UX0ZPVU5EIiwiYXNzZXRNb2RlbFNjaGVtYSIsImNvbnRhY3RTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsImZvb3RlclNjaGVtYSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImNvbGxlY3Rpb24iLCJ0aW1lc3RhbXBzIiwibW9kZWwiLCJhdXRvSW5jcmVtZW50UGx1Z2luIiwicm9sZVNjaGVtYSIsInVuaXF1ZSIsInRyaW0iLCJ2ZXJzaW9uS2V5IiwicGx1Z2luIiwiaW5jRmllbGQiLCJSb2xlIiwiUm9sZVJlcG9zaXRvcnkiLCJSb2xlU2VlZGVyIiwicm9sZURJS2V5cyIsInNlZWRlciIsInJvbGVSZXBvc2l0b3J5Iiwicm9sZXMiLCJfY3JlYXRlUm9sZXMiLCJleGlzdGluZ1JvbGVzIiwiZXhpc3RpbmdSb2xlTmFtZXMiLCJyb2xlc1RvQ3JlYXRlIiwibWFwIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJjcmVhdGVNYW55IiwiY3JlYXRlUm9sZXMiLCJDb250YWN0RHRvIiwiZnVsbE5hbWUiLCJwcm9maWxlSW1hZ2UiLCJlbWFpbFZlcmlmaWNhdGlvblNjaGVtYSIsIkJvb2xlYW4iLCJ1c2VyU2NoZW1hIiwicGFzc3dvcmQiLCJwYXNzd29yZFJlc2V0IiwiVHlwZXMiLCJOdW1iZXIiLCJyZWYiLCJVc2VyIiwiVXNlclJlcG9zaXRvcnkiLCJVc2VyU2VlZGVyIiwiVXNlclNlcnZpY2UiLCJ1c2VyUmVwb3NpdG9yeSIsImhhc2hQYXNzd29yZCIsIl9jcmVhdGVBZG1pbiIsImZpbmRPbmUiLCJjcmVhdGVBZG1pbiIsInVzZXJEdG8iLCJfZmluZEJ5RW1haWwiLCJfZmluZEJ5SWQiLCJpZCIsImZpbmRCeUlkIiwiX2RlbGV0ZTIiLCJfY2FsbGVlNSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsIl9kZWxldGUiLCJzd2FnZ2VyU3BlYyIsInN3YWdnZXJVaSIsImNvb2tpZVBhcnNlciIsImNvcnMiLCJyYXRlTGltaXQiLCJhcGlQcmVmaXgiLCJiYXNlUmVzcG9uc2VNaWRkbGV3YXJlIiwiZXJyb3JIYW5kbGVyTWlkZGxld2FyZSIsImFwcCIsInVzZSIsIndpbmRvd01zIiwibGltaXQiLCJzdGFuZGFyZEhlYWRlcnMiLCJsZWdhY3lIZWFkZXJzIiwic2V0IiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwianNvbiIsImRpc2FibGUiLCJzZXJ2ZSIsInNldHVwIiwic2VjcmV0IiwidGltZSIsInNpZ24iLCJleHBpcmVzSW4iLCJhbGdvcml0aG0iLCJiY3J5cHQiLCJfaGFzaFBhc3N3b3JkIiwic2FsdCIsImdlblNhbHQiLCJoYXNoIiwiY3J5cHRvIiwiY2hhcmFjdGVycyIsImNoYXJhY3RlcnNMZW5ndGgiLCJyZXN1bHQiLCJpIiwicmFuZG9tSW5kZXgiLCJyYW5kb21JbnQiLCJtaW51dGVzIiwic2NoZW1hIiwib3B0aW9ucyIsIkVycm9yIiwiZmllbGRPcHRpb25zIiwiX29iamVjdFNwcmVhZCIsImFkZCIsIl9kZWZpbmVQcm9wZXJ0eSIsInByZSIsIl90aGlzIiwiaXNOZXciLCJjb25zdHJ1Y3RvciIsInNvcnQiLCJ0aGVuIiwibGFzdFJlY29yZCIsImRvY3MiLCJsYXN0Q291bnQiLCJmb3JFYWNoIiwiZG9jIiwiaW5kZXgiLCJwaG9uZU51bWJlciIsImhyZWYiLCJyZXF1aXJlIiwidXJsIiwicHVibGljSWQiLCJzaXplIiwiY3JlYXRlRGJDb25uZWN0aW9uIiwiX2NyZWF0ZURiQ29ubmVjdGlvbiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiQ09OTkVDVElPTl9TVFJJTkciLCJjb25zb2xlIiwibG9nIiwidDAiLCJwYXRoIiwiTk9ERV9FTlYiLCJvdmVycmlkZSIsIkpXVF9BTEdPUklUSE0iLCJKV1RfQUNDRVNTX1NFQ1JFVCIsIkpXVF9BQ0NFU1NfRVhQSVJFU19JTiIsIkpXVF9SRUZSRVNIX1NFQ1JFVCIsIkpXVF9SRUZSRVNIX0VYUElSRVNfSU4iLCJKV1RfVkVSSUZJQ0FUSU9OX1NFQ1JFVCIsIkpXVF9WRVJJRklDQVRJT05fRVhQSVJFU19JTiIsIkFQSUVycm9yIiwibm9kZW1haWxlciIsInNlbmRFbWFpbCIsIm1haWxPcHRpb25zIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJhdXRoIiwiTUFJTF9VU0VSIiwicGFzcyIsIk1BSUxfUEFTU1dPUkQiLCJzZW5kTWFpbCIsImluZm8iLCJzd2FnZ2VySnNkb2MiLCJkZWZpbml0aW9uIiwib3BlbmFwaSIsInZlcnNpb24iLCJkZXNjcmlwdGlvbiIsInNlcnZlcnMiLCJhcGlzIiwic2VlZCIsInVzZXJTZWVkZXIiLCJyb2xlU2VlZGVyIiwiUHJvbWlzZSIsImFsbCIsIkRpQ29udGFpbmVyIiwiZGVwZW5kZW5jaWVzIiwibmFtZSIsImZ1bmMiLCJBcnJheSIsImlzQXJyYXkiLCJfdGhpcyRkZXBlbmRlbmNpZXMkbmEiLCJkZXBlbmRlbmNpZXNJbnN0YW5jZXMiLCJkZXBlbmRlbmN5IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicHJvcHMiLCJzdGF0dXNDb2RlIiwiZ2V0UmVhc29uUGhyYXNlIiwiZGV0YWlscyIsIl9yZWYkc3RhdHVzIiwiX3JlZjIiLCJfcmVmMiRzdGF0dXMiLCJfcmVmMiRkZXRhaWxzIiwiX3NlbmRWZXJpZmljYXRpb25FbWFpbCIsImZyb20iLCJNQUlMX0ZST00iLCJ0byIsInN1YmplY3QiLCJ0ZXh0IiwiX0Vycm9yIiwiX3dyYXBOYXRpdmVTdXBlciIsImZpbmRCeUlkQW5kVXBkYXRlIiwiZmluZEJ5SWRBbmREZWxldGUiLCJxdWVyeSIsImNvdW50IiwiY291bnREb2N1bWVudHMiLCJhZ2dyZWdhdGUiLCJwaXBlbGluZSIsImluc2VydE1hbnkiLCJ1cGRhdGVNYW55IiwiYnVsa1dyaXRlIiwib3BlcmF0aW9ucyIsIl91cHNlcnQiLCJmaW5kRGF0YSIsInVwc2VydCIsImNyZWF0ZVNlcnZlciIsInNlcnZlciIsIlBPUlQiLCJsaXN0ZW4iXSwic291cmNlUm9vdCI6IiJ9