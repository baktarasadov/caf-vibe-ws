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
        var user;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.authService.login(request.body);
            case 2:
              user = _context3.sent;
              response.success({
                message: "User Login successful",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.OK,
                data: new _dto_auth_dto__WEBPACK_IMPORTED_MODULE_5__.AuthDto(user)
              });
            case 4:
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
/* harmony import */ var _common_helpers_hash_password__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/helpers/hash-password */ "./src/common/helpers/hash-password.js");
/* harmony import */ var _common_helpers_verification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/common/helpers/verification */ "./src/common/helpers/verification.js");
/* harmony import */ var _core_config_jwt_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/core/config/jwt.config */ "./src/core/config/jwt.config.js");
/* harmony import */ var _core_response_base_response__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/core/response/base-response */ "./src/core/response/base-response.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_9__);










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
              throw new _core_response_base_response__WEBPACK_IMPORTED_MODULE_8__.BaseResponse.error({
                message: "Email is already in use",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_9__.StatusCodes.CONFLICT
              });
            case 5:
              if (!(existingUser && !((_existingUser$emailVe2 = existingUser.emailVerification) !== null && _existingUser$emailVe2 !== void 0 && _existingUser$emailVe2.verified))) {
                _context.next = 8;
                break;
              }
              _context.next = 8;
              return this.userService["delete"](existingUser._id);
            case 8:
              verificationCode = (0,_common_helpers_verification__WEBPACK_IMPORTED_MODULE_6__.generateVerificationCode)();
              verificationTime = (0,_common_helpers_verification__WEBPACK_IMPORTED_MODULE_6__.getVerificationCodeExpiry)(3);
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
    key: "login",
    value: function () {
      var _login = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(authloginDto) {
        var email, password, existingUser, payload, token;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              email = authloginDto.email, password = authloginDto.password;
              _context2.next = 3;
              return this.userService.findByEmail(email);
            case 3:
              existingUser = _context2.sent;
              _context2.t0 = !existingUser;
              if (_context2.t0) {
                _context2.next = 9;
                break;
              }
              _context2.next = 8;
              return (0,_common_helpers_hash_password__WEBPACK_IMPORTED_MODULE_5__.comparePassword)(password, existingUser.password);
            case 8:
              _context2.t0 = !_context2.sent;
            case 9:
              if (!_context2.t0) {
                _context2.next = 11;
                break;
              }
              throw new _core_response_base_response__WEBPACK_IMPORTED_MODULE_8__.BaseResponse.error({
                message: "Email or Password is incorrect.",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_9__.StatusCodes.UNAUTHORIZED
              });
            case 11:
              payload = {
                sub: existingUser._id,
                email: email
              };
              _context2.next = 14;
              return this.createToken(payload);
            case 14:
              token = _context2.sent;
              return _context2.abrupt("return", {
                user: existingUser,
                token: token
              });
            case 16:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function login(_x2) {
        return _login.apply(this, arguments);
      }
      return login;
    }()
  }, {
    key: "verifyEmail",
    value: function () {
      var _verifyEmail = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(verificationDto) {
        var _existingUser$emailVe3;
        var code, email, existingUser, now, payload, token;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              code = verificationDto.code, email = verificationDto.email;
              _context3.next = 3;
              return this.userService.findByEmail(email);
            case 3:
              existingUser = _context3.sent;
              if (existingUser) {
                _context3.next = 6;
                break;
              }
              throw new _core_response_base_response__WEBPACK_IMPORTED_MODULE_8__.BaseResponse.error({
                message: "User with this email does not exist.",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_9__.StatusCodes.CONFLICT
              });
            case 6:
              if (!((_existingUser$emailVe3 = existingUser.emailVerification) !== null && _existingUser$emailVe3 !== void 0 && _existingUser$emailVe3.verified)) {
                _context3.next = 8;
                break;
              }
              throw new _core_response_base_response__WEBPACK_IMPORTED_MODULE_8__.BaseResponse.error({
                message: "Your email is already verified. Please login to continue.",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_9__.StatusCodes.BAD_REQUEST
              });
            case 8:
              if (!(existingUser.emailVerification.code !== code)) {
                _context3.next = 10;
                break;
              }
              throw new _core_response_base_response__WEBPACK_IMPORTED_MODULE_8__.BaseResponse.error({
                message: "Invalid verification code.",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_9__.StatusCodes.BAD_REQUEST
              });
            case 10:
              now = Date.now();
              if (!(existingUser.emailVerification.expiresAt < now)) {
                _context3.next = 19;
                break;
              }
              existingUser.emailVerification.code = (0,_common_helpers_verification__WEBPACK_IMPORTED_MODULE_6__.generateVerificationCode)();
              existingUser.emailVerification.expiresAt = (0,_common_helpers_verification__WEBPACK_IMPORTED_MODULE_6__.getVerificationCodeExpiry)(3);
              _context3.next = 16;
              return existingUser.save();
            case 16:
              _context3.next = 18;
              return this.emailService.sendVerificationEmail(existingUser.contact.email, existingUser.emailVerification.code, "Hi, This Email Verification Code");
            case 18:
              throw new _core_response_base_response__WEBPACK_IMPORTED_MODULE_8__.BaseResponse.error({
                message: "Verification code has expired. A new code has been sent to your email.",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_9__.StatusCodes.BAD_REQUEST
              });
            case 19:
              existingUser.emailVerification.verified = true;
              existingUser.emailVerification.code = undefined;
              existingUser.emailVerification.expiresAt = undefined;
              _context3.next = 24;
              return existingUser.save();
            case 24:
              payload = {
                sub: existingUser._id,
                email: email
              };
              _context3.next = 27;
              return this.createToken(payload);
            case 27:
              token = _context3.sent;
              return _context3.abrupt("return", {
                token: token,
                user: existingUser
              });
            case 29:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function verifyEmail(_x3) {
        return _verifyEmail.apply(this, arguments);
      }
      return verifyEmail;
    }()
  }, {
    key: "createToken",
    value: function () {
      var _createToken = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4(payload) {
        var _config$jwt, accessSecret, accessExpiresIn, refreshSecret, refreshExpiresIn, accessToken, refreshToken;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _config$jwt = _core_config_jwt_config__WEBPACK_IMPORTED_MODULE_7__.config.jwt, accessSecret = _config$jwt.accessSecret, accessExpiresIn = _config$jwt.accessExpiresIn, refreshSecret = _config$jwt.refreshSecret, refreshExpiresIn = _config$jwt.refreshExpiresIn;
              _context4.next = 3;
              return (0,_common_helpers_generate_token__WEBPACK_IMPORTED_MODULE_4__.generateToken)(payload, accessSecret, accessExpiresIn);
            case 3:
              accessToken = _context4.sent;
              _context4.next = 6;
              return (0,_common_helpers_generate_token__WEBPACK_IMPORTED_MODULE_4__.generateToken)(payload, refreshSecret, refreshExpiresIn);
            case 6:
              refreshToken = _context4.sent;
              _context4.next = 9;
              return this.userService.update(payload.sub, {
                token: {
                  refresh: refreshToken
                }
              });
            case 9:
              return _context4.abrupt("return", {
                accessToken: accessToken,
                refreshToken: refreshToken
              });
            case 10:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function createToken(_x4) {
        return _createToken.apply(this, arguments);
      }
      return createToken;
    }()
  }, {
    key: "verificationToken",
    value: function () {
      var _verificationToken = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee5(payload) {
        var _config$jwt2, verificationExpiresIn, verificationSecret;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _config$jwt2 = _core_config_jwt_config__WEBPACK_IMPORTED_MODULE_7__.config.jwt, verificationExpiresIn = _config$jwt2.verificationExpiresIn, verificationSecret = _config$jwt2.verificationSecret;
              return _context5.abrupt("return", (0,_common_helpers_generate_token__WEBPACK_IMPORTED_MODULE_4__.generateToken)(payload, verificationSecret, verificationExpiresIn));
            case 2:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function verificationToken(_x5) {
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
/* harmony import */ var _email_verification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-verification */ "./src/api/user/model/email-verification.js");
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
                contact: {
                  email: "baktaradmin@gmail.com"
                },
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
              return (0,_common_helpers_hash_password__WEBPACK_IMPORTED_MODULE_4__.hashPassword)(userDto.password);
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
/* harmony export */   comparePassword: () => (/* binding */ comparePassword),
/* harmony export */   hashPassword: () => (/* binding */ hashPassword)
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
function comparePassword(_x2, _x3) {
  return _comparePassword.apply(this, arguments);
}
function _comparePassword() {
  _comparePassword = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(plainTextPassword, hashedPassword) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", bcrypt__WEBPACK_IMPORTED_MODULE_2__.compare(plainTextPassword, hashedPassword));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _comparePassword.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFFUDtBQUVsQyxJQUFNRSxjQUFjO0VBQ3pCLFNBQUFBLGVBQVlDLFdBQVcsRUFBRTtJQUFBQyw0RUFBQSxPQUFBRixjQUFBO0lBQ3ZCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQSxXQUFXO0VBQ2hDO0VBQUMsT0FBQUUseUVBQUEsQ0FBQUgsY0FBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUE7TUFBQSxJQUFBQyxTQUFBLEdBQUFDLDhFQUFBLGVBQUFDLHNFQUFBLENBRUQsU0FBQUUsUUFBZUMsT0FBTyxFQUFFQyxRQUFRO1FBQUEsT0FBQUosc0VBQUEsVUFBQU0sU0FBQUMsUUFBQTtVQUFBLGtCQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBRSxJQUFBO1lBQUE7Y0FBQUYsUUFBQSxDQUFBRSxJQUFBO2NBQUEsT0FDeEIsSUFBSSxDQUFDaEIsV0FBVyxDQUFDaUIsUUFBUSxDQUFDUCxPQUFPLENBQUNRLElBQUksQ0FBQztZQUFBO2NBRTdDUCxRQUFRLENBQUNRLE9BQU8sQ0FBQztnQkFDZkMsT0FBTyxFQUFFLG9EQUFvRDtnQkFDN0RDLE1BQU0sRUFBRXhCLDBEQUFXLENBQUN5QjtjQUN0QixDQUFDLENBQUM7WUFBQztZQUFBO2NBQUEsT0FBQVIsUUFBQSxDQUFBUyxJQUFBO1VBQUE7UUFBQSxHQUFBZCxPQUFBO01BQUEsQ0FDSjtNQUFBLFNBQUFRLFNBQUFPLEVBQUEsRUFBQUMsR0FBQTtRQUFBLE9BQUFwQixTQUFBLENBQUFxQixLQUFBLE9BQUFDLFNBQUE7TUFBQTtNQUFBLE9BQUFWLFFBQUE7SUFBQTtFQUFBO0lBQUFkLEdBQUE7SUFBQUMsS0FBQTtNQUFBLElBQUF3QixZQUFBLEdBQUF0Qiw4RUFBQSxlQUFBQyxzRUFBQSxDQUVELFNBQUFzQixTQUFrQm5CLE9BQU8sRUFBRUMsUUFBUTtRQUFBLElBQUFtQixJQUFBO1FBQUEsT0FBQXZCLHNFQUFBLFVBQUF3QixVQUFBQyxTQUFBO1VBQUEsa0JBQUFBLFNBQUEsQ0FBQWpCLElBQUEsR0FBQWlCLFNBQUEsQ0FBQWhCLElBQUE7WUFBQTtjQUFBZ0IsU0FBQSxDQUFBaEIsSUFBQTtjQUFBLE9BQ2QsSUFBSSxDQUFDaEIsV0FBVyxDQUFDaUMsV0FBVyxDQUFDdkIsT0FBTyxDQUFDUSxJQUFJLENBQUM7WUFBQTtjQUF2RFksSUFBSSxHQUFBRSxTQUFBLENBQUFFLElBQUE7Y0FFVnZCLFFBQVEsQ0FBQ1EsT0FBTyxDQUFDO2dCQUNmQyxPQUFPLEVBQUUsOEJBQThCO2dCQUN2Q0MsTUFBTSxFQUFFeEIsMERBQVcsQ0FBQ3lCLE9BQU87Z0JBQzNCUSxJQUFJLEVBQUUsSUFBSWhDLGtEQUFPLENBQUNnQyxJQUFJO2NBQ3hCLENBQUMsQ0FBQztZQUFDO1lBQUE7Y0FBQSxPQUFBRSxTQUFBLENBQUFULElBQUE7VUFBQTtRQUFBLEdBQUFNLFFBQUE7TUFBQSxDQUNKO01BQUEsU0FBQUksWUFBQUUsR0FBQSxFQUFBQyxHQUFBO1FBQUEsT0FBQVIsWUFBQSxDQUFBRixLQUFBLE9BQUFDLFNBQUE7TUFBQTtNQUFBLE9BQUFNLFdBQUE7SUFBQTtFQUFBO0lBQUE5QixHQUFBO0lBQUFDLEtBQUE7TUFBQSxJQUFBaUMsTUFBQSxHQUFBL0IsOEVBQUEsZUFBQUMsc0VBQUEsQ0FFRCxTQUFBK0IsU0FBWTVCLE9BQU8sRUFBRUMsUUFBUTtRQUFBLElBQUE0QixJQUFBO1FBQUEsT0FBQWhDLHNFQUFBLFVBQUFpQyxVQUFBQyxTQUFBO1VBQUEsa0JBQUFBLFNBQUEsQ0FBQTFCLElBQUEsR0FBQTBCLFNBQUEsQ0FBQXpCLElBQUE7WUFBQTtjQUFBeUIsU0FBQSxDQUFBekIsSUFBQTtjQUFBLE9BQ1IsSUFBSSxDQUFDaEIsV0FBVyxDQUFDMEMsS0FBSyxDQUFDaEMsT0FBTyxDQUFDUSxJQUFJLENBQUM7WUFBQTtjQUFqRHFCLElBQUksR0FBQUUsU0FBQSxDQUFBUCxJQUFBO2NBRVZ2QixRQUFRLENBQUNRLE9BQU8sQ0FBQztnQkFDZkMsT0FBTyxFQUFFLHVCQUF1QjtnQkFDaENDLE1BQU0sRUFBRXhCLDBEQUFXLENBQUM4QyxFQUFFO2dCQUN0QmIsSUFBSSxFQUFFLElBQUloQyxrREFBTyxDQUFDeUMsSUFBSTtjQUN4QixDQUFDLENBQUM7WUFBQztZQUFBO2NBQUEsT0FBQUUsU0FBQSxDQUFBbEIsSUFBQTtVQUFBO1FBQUEsR0FBQWUsUUFBQTtNQUFBLENBQ0o7TUFBQSxTQUFBSSxNQUFBRSxHQUFBLEVBQUFDLEdBQUE7UUFBQSxPQUFBUixNQUFBLENBQUFYLEtBQUEsT0FBQUMsU0FBQTtNQUFBO01BQUEsT0FBQWUsS0FBQTtJQUFBO0VBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDZ0Q7QUFDVztBQUVqQjtBQUNNO0FBQ047QUFFdEMsSUFBTVEsVUFBVSxHQUFHO0VBQ3hCQyxVQUFVLEVBQUUsaUJBQWlCO0VBQzdCQyxPQUFPLEVBQUUsY0FBYztFQUN2QkMsWUFBWSxFQUFFO0FBQ2hCLENBQUM7QUFFRFAsNERBQVMsQ0FBQzdCLFFBQVEsQ0FBQ2lDLFVBQVUsQ0FBQ0csWUFBWSxFQUFFLEVBQUUsRUFBRTtFQUFBLE9BQU0sSUFBSU4sdUVBQVksQ0FBQyxDQUFDO0FBQUEsRUFBQztBQUV6RUQsNERBQVMsQ0FBQzdCLFFBQVEsQ0FDaEJpQyxVQUFVLENBQUNFLE9BQU8sRUFDbEIsQ0FBQ0oscURBQVUsQ0FBQ0ksT0FBTyxFQUFFRixVQUFVLENBQUNHLFlBQVksQ0FBQyxFQUM3QyxVQUFDQyxXQUFXLEVBQUVELFlBQVk7RUFBQSxPQUFLLElBQUlKLHNEQUFXLENBQUNLLFdBQVcsRUFBRUQsWUFBWSxDQUFDO0FBQUEsQ0FDM0UsQ0FBQztBQUVEUCw0REFBUyxDQUFDN0IsUUFBUSxDQUNoQmlDLFVBQVUsQ0FBQ0MsVUFBVSxFQUNyQixDQUFDRCxVQUFVLENBQUNFLE9BQU8sQ0FBQyxFQUNwQixVQUFDcEQsV0FBVztFQUFBLE9BQUssSUFBSUQsNERBQWMsQ0FBQ0MsV0FBVyxDQUFDO0FBQUEsQ0FDbEQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJrRDtBQUNyQjtBQUVTO0FBRXZDLElBQU13RCxVQUFVLEdBQUdELHFEQUFjLENBQUMsQ0FBQztBQUVuQyxJQUFNRyxNQUFNLEdBQUcsT0FBTztBQUV0QixJQUFNQyxjQUFjLEdBQUdiLDREQUFTLENBQUNjLEdBQUcsQ0FBQ1YsZ0RBQVUsQ0FBQ0MsVUFBVSxDQUFDO0FBRTNESyxVQUFVLENBQUNLLElBQUksSUFBQUMsTUFBQSxDQUFJSixNQUFNLGFBQVUsVUFBQ0ssR0FBRyxFQUFFQyxHQUFHO0VBQUEsT0FDMUNMLGNBQWMsQ0FBQ2pCLEtBQUssQ0FBQ3FCLEdBQUcsRUFBRUMsR0FBRyxDQUFDO0FBQUEsQ0FDaEMsQ0FBQztBQUVEUixVQUFVLENBQUNLLElBQUksSUFBQUMsTUFBQSxDQUFJSixNQUFNLG9CQUFpQixVQUFDSyxHQUFHLEVBQUVDLEdBQUc7RUFBQSxPQUNqREwsY0FBYyxDQUFDMUIsV0FBVyxDQUFDOEIsR0FBRyxFQUFFQyxHQUFHLENBQUM7QUFBQSxDQUN0QyxDQUFDO0FBRURSLFVBQVUsQ0FBQ0ssSUFBSSxJQUFBQyxNQUFBLENBQUlKLE1BQU0sZ0JBQWEsVUFBQ0ssR0FBRyxFQUFFQyxHQUFHO0VBQUEsT0FDN0NMLGNBQWMsQ0FBQzFDLFFBQVEsQ0FBQzhDLEdBQUcsRUFBRUMsR0FBRyxDQUFDO0FBQUEsQ0FDbkMsQ0FBQztBQUVELGlFQUFlUixVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QnVDO0FBQ0M7QUFJMUI7QUFDVztBQUNXO0FBQ2I7QUFFekMsSUFBTVAsV0FBVztFQUN0QixTQUFBQSxZQUFZSyxXQUFXLEVBQUVELFlBQVksRUFBRTtJQUFBcEQsNEVBQUEsT0FBQWdELFdBQUE7SUFDckMsSUFBSSxDQUFDSyxXQUFXLEdBQUdBLFdBQVc7SUFDOUIsSUFBSSxDQUFDRCxZQUFZLEdBQUdBLFlBQVk7RUFDbEM7RUFBQyxPQUFBbkQseUVBQUEsQ0FBQStDLFdBQUE7SUFBQTlDLEdBQUE7SUFBQUMsS0FBQTtNQUFBLElBQUFDLFNBQUEsR0FBQUMsOEVBQUEsZUFBQUMsc0VBQUEsQ0FFRCxTQUFBRSxRQUFlOEQsZUFBZTtRQUFBLElBQUFDLHFCQUFBLEVBQUFDLHNCQUFBO1FBQUEsSUFBQUMsWUFBQSxFQUFBQyxnQkFBQSxFQUFBQyxnQkFBQSxFQUFBQyxTQUFBO1FBQUEsT0FBQXRFLHNFQUFBLFVBQUFNLFNBQUFDLFFBQUE7VUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtZQUFBO2NBQUFGLFFBQUEsQ0FBQUUsSUFBQTtjQUFBLE9BQ0QsSUFBSSxDQUFDc0MsV0FBVyxDQUFDd0IsV0FBVyxDQUNyRFAsZUFBZSxDQUFDUSxPQUFPLENBQUNDLEtBQzFCLENBQUM7WUFBQTtjQUZLTixZQUFZLEdBQUE1RCxRQUFBLENBQUFvQixJQUFBO2NBQUEsTUFJZHdDLFlBQVksS0FBQUYscUJBQUEsR0FBSUUsWUFBWSxDQUFDTyxpQkFBaUIsY0FBQVQscUJBQUEsZUFBOUJBLHFCQUFBLENBQWdDVSxRQUFRO2dCQUFBcEUsUUFBQSxDQUFBRSxJQUFBO2dCQUFBO2NBQUE7Y0FBQSxNQUNwRCxJQUFJc0Qsc0VBQVksQ0FBQ2EsS0FBSyxDQUFDO2dCQUMzQi9ELE9BQU8sRUFBRSx5QkFBeUI7Z0JBQ2xDQyxNQUFNLEVBQUV4QiwwREFBVyxDQUFDdUY7Y0FDdEIsQ0FBQyxDQUFDO1lBQUE7Y0FBQSxNQUdBVixZQUFZLElBQUksR0FBQUQsc0JBQUEsR0FBQ0MsWUFBWSxDQUFDTyxpQkFBaUIsY0FBQVIsc0JBQUEsZUFBOUJBLHNCQUFBLENBQWdDUyxRQUFRO2dCQUFBcEUsUUFBQSxDQUFBRSxJQUFBO2dCQUFBO2NBQUE7Y0FBQUYsUUFBQSxDQUFBRSxJQUFBO2NBQUEsT0FDckQsSUFBSSxDQUFDc0MsV0FBVyxVQUFPLENBQUNvQixZQUFZLENBQUNXLEdBQUcsQ0FBQztZQUFBO2NBRzNDVixnQkFBZ0IsR0FBR1Isc0ZBQXdCLENBQUMsQ0FBQztjQUM3Q1MsZ0JBQWdCLEdBQUdSLHVGQUF5QixDQUFDLENBQUMsQ0FBQztjQUVyREcsZUFBZSxDQUFDZSxJQUFJLEdBQUcsQ0FBQztjQUV4QmYsZUFBZSxDQUFDVSxpQkFBaUIsR0FBRztnQkFDbENNLElBQUksRUFBRVosZ0JBQWdCO2dCQUN0QmEsU0FBUyxFQUFFWixnQkFBZ0I7Z0JBQzNCTSxRQUFRLEVBQUU7Y0FDWixDQUFDO2NBQUNwRSxRQUFBLENBQUFFLElBQUE7Y0FBQSxPQUVzQixJQUFJLENBQUNzQyxXQUFXLENBQUNtQyxNQUFNLENBQUNsQixlQUFlLENBQUM7WUFBQTtjQUExRE0sU0FBUyxHQUFBL0QsUUFBQSxDQUFBb0IsSUFBQTtjQUFBcEIsUUFBQSxDQUFBRSxJQUFBO2NBQUEsT0FFVCxJQUFJLENBQUNxQyxZQUFZLENBQUNxQyxxQkFBcUIsQ0FDM0NiLFNBQVMsQ0FBQ0UsT0FBTyxDQUFDQyxLQUFLLEVBQ3ZCSCxTQUFTLENBQUNJLGlCQUFpQixDQUFDTSxJQUFJLEVBQ2hDLGtDQUNGLENBQUM7WUFBQTtZQUFBO2NBQUEsT0FBQXpFLFFBQUEsQ0FBQVMsSUFBQTtVQUFBO1FBQUEsR0FBQWQsT0FBQTtNQUFBLENBQ0Y7TUFBQSxTQUFBUSxTQUFBTyxFQUFBO1FBQUEsT0FBQW5CLFNBQUEsQ0FBQXFCLEtBQUEsT0FBQUMsU0FBQTtNQUFBO01BQUEsT0FBQVYsUUFBQTtJQUFBO0VBQUE7SUFBQWQsR0FBQTtJQUFBQyxLQUFBO01BQUEsSUFBQWlDLE1BQUEsR0FBQS9CLDhFQUFBLGVBQUFDLHNFQUFBLENBRUQsU0FBQXNCLFNBQVk4RCxZQUFZO1FBQUEsSUFBQVgsS0FBQSxFQUFBWSxRQUFBLEVBQUFsQixZQUFBLEVBQUFtQixPQUFBLEVBQUFDLEtBQUE7UUFBQSxPQUFBdkYsc0VBQUEsVUFBQXdCLFVBQUFDLFNBQUE7VUFBQSxrQkFBQUEsU0FBQSxDQUFBakIsSUFBQSxHQUFBaUIsU0FBQSxDQUFBaEIsSUFBQTtZQUFBO2NBQ2RnRSxLQUFLLEdBQWVXLFlBQVksQ0FBaENYLEtBQUssRUFBRVksUUFBUSxHQUFLRCxZQUFZLENBQXpCQyxRQUFRO2NBQUE1RCxTQUFBLENBQUFoQixJQUFBO2NBQUEsT0FFSSxJQUFJLENBQUNzQyxXQUFXLENBQUN3QixXQUFXLENBQUNFLEtBQUssQ0FBQztZQUFBO2NBQXhETixZQUFZLEdBQUExQyxTQUFBLENBQUFFLElBQUE7Y0FBQUYsU0FBQSxDQUFBK0QsRUFBQSxHQUdoQixDQUFDckIsWUFBWTtjQUFBLElBQUExQyxTQUFBLENBQUErRCxFQUFBO2dCQUFBL0QsU0FBQSxDQUFBaEIsSUFBQTtnQkFBQTtjQUFBO2NBQUFnQixTQUFBLENBQUFoQixJQUFBO2NBQUEsT0FDTGtELDhFQUFlLENBQUMwQixRQUFRLEVBQUVsQixZQUFZLENBQUNrQixRQUFRLENBQUM7WUFBQTtjQUFBNUQsU0FBQSxDQUFBK0QsRUFBQSxJQUFBL0QsU0FBQSxDQUFBRSxJQUFBO1lBQUE7Y0FBQSxLQUFBRixTQUFBLENBQUErRCxFQUFBO2dCQUFBL0QsU0FBQSxDQUFBaEIsSUFBQTtnQkFBQTtjQUFBO2NBQUEsTUFFbEQsSUFBSXNELHNFQUFZLENBQUNhLEtBQUssQ0FBQztnQkFDM0IvRCxPQUFPLEVBQUUsaUNBQWlDO2dCQUMxQ0MsTUFBTSxFQUFFeEIsMERBQVcsQ0FBQ21HO2NBQ3RCLENBQUMsQ0FBQztZQUFBO2NBR0VILE9BQU8sR0FBRztnQkFDZEksR0FBRyxFQUFFdkIsWUFBWSxDQUFDVyxHQUFHO2dCQUNyQkwsS0FBSyxFQUFMQTtjQUNGLENBQUM7Y0FBQWhELFNBQUEsQ0FBQWhCLElBQUE7Y0FBQSxPQUVtQixJQUFJLENBQUNrRixXQUFXLENBQUNMLE9BQU8sQ0FBQztZQUFBO2NBQXZDQyxLQUFLLEdBQUE5RCxTQUFBLENBQUFFLElBQUE7Y0FBQSxPQUFBRixTQUFBLENBQUFtRSxNQUFBLFdBRUo7Z0JBQUU1RCxJQUFJLEVBQUVtQyxZQUFZO2dCQUFFb0IsS0FBSyxFQUFMQTtjQUFNLENBQUM7WUFBQTtZQUFBO2NBQUEsT0FBQTlELFNBQUEsQ0FBQVQsSUFBQTtVQUFBO1FBQUEsR0FBQU0sUUFBQTtNQUFBLENBQ3JDO01BQUEsU0FBQWEsTUFBQWpCLEdBQUE7UUFBQSxPQUFBWSxNQUFBLENBQUFYLEtBQUEsT0FBQUMsU0FBQTtNQUFBO01BQUEsT0FBQWUsS0FBQTtJQUFBO0VBQUE7SUFBQXZDLEdBQUE7SUFBQUMsS0FBQTtNQUFBLElBQUF3QixZQUFBLEdBQUF0Qiw4RUFBQSxlQUFBQyxzRUFBQSxDQUVELFNBQUErQixTQUFrQjhELGVBQWU7UUFBQSxJQUFBQyxzQkFBQTtRQUFBLElBQUFkLElBQUEsRUFBQVAsS0FBQSxFQUFBTixZQUFBLEVBQUE0QixHQUFBLEVBQUFULE9BQUEsRUFBQUMsS0FBQTtRQUFBLE9BQUF2RixzRUFBQSxVQUFBaUMsVUFBQUMsU0FBQTtVQUFBLGtCQUFBQSxTQUFBLENBQUExQixJQUFBLEdBQUEwQixTQUFBLENBQUF6QixJQUFBO1lBQUE7Y0FDdkJ1RSxJQUFJLEdBQVlhLGVBQWUsQ0FBL0JiLElBQUksRUFBRVAsS0FBSyxHQUFLb0IsZUFBZSxDQUF6QnBCLEtBQUs7Y0FBQXZDLFNBQUEsQ0FBQXpCLElBQUE7Y0FBQSxPQUVRLElBQUksQ0FBQ3NDLFdBQVcsQ0FBQ3dCLFdBQVcsQ0FBQ0UsS0FBSyxDQUFDO1lBQUE7Y0FBeEROLFlBQVksR0FBQWpDLFNBQUEsQ0FBQVAsSUFBQTtjQUFBLElBRWJ3QyxZQUFZO2dCQUFBakMsU0FBQSxDQUFBekIsSUFBQTtnQkFBQTtjQUFBO2NBQUEsTUFDVCxJQUFJc0Qsc0VBQVksQ0FBQ2EsS0FBSyxDQUFDO2dCQUMzQi9ELE9BQU8sRUFBRSxzQ0FBc0M7Z0JBQy9DQyxNQUFNLEVBQUV4QiwwREFBVyxDQUFDdUY7Y0FDdEIsQ0FBQyxDQUFDO1lBQUE7Y0FBQSxPQUFBaUIsc0JBQUEsR0FHQTNCLFlBQVksQ0FBQ08saUJBQWlCLGNBQUFvQixzQkFBQSxlQUE5QkEsc0JBQUEsQ0FBZ0NuQixRQUFRO2dCQUFBekMsU0FBQSxDQUFBekIsSUFBQTtnQkFBQTtjQUFBO2NBQUEsTUFDcEMsSUFBSXNELHNFQUFZLENBQUNhLEtBQUssQ0FBQztnQkFDM0IvRCxPQUFPLEVBQUUsMkRBQTJEO2dCQUNwRUMsTUFBTSxFQUFFeEIsMERBQVcsQ0FBQzBHO2NBQ3RCLENBQUMsQ0FBQztZQUFBO2NBQUEsTUFHQTdCLFlBQVksQ0FBQ08saUJBQWlCLENBQUNNLElBQUksS0FBS0EsSUFBSTtnQkFBQTlDLFNBQUEsQ0FBQXpCLElBQUE7Z0JBQUE7Y0FBQTtjQUFBLE1BQ3hDLElBQUlzRCxzRUFBWSxDQUFDYSxLQUFLLENBQUM7Z0JBQzNCL0QsT0FBTyxFQUFFLDRCQUE0QjtnQkFDckNDLE1BQU0sRUFBRXhCLDBEQUFXLENBQUMwRztjQUN0QixDQUFDLENBQUM7WUFBQTtjQUdFRCxHQUFHLEdBQUdFLElBQUksQ0FBQ0YsR0FBRyxDQUFDLENBQUM7Y0FBQSxNQUVsQjVCLFlBQVksQ0FBQ08saUJBQWlCLENBQUNPLFNBQVMsR0FBR2MsR0FBRztnQkFBQTdELFNBQUEsQ0FBQXpCLElBQUE7Z0JBQUE7Y0FBQTtjQUNoRDBELFlBQVksQ0FBQ08saUJBQWlCLENBQUNNLElBQUksR0FBR3BCLHNGQUF3QixDQUFDLENBQUM7Y0FDaEVPLFlBQVksQ0FBQ08saUJBQWlCLENBQUNPLFNBQVMsR0FBR3BCLHVGQUF5QixDQUFDLENBQUMsQ0FBQztjQUFDM0IsU0FBQSxDQUFBekIsSUFBQTtjQUFBLE9BRWxFMEQsWUFBWSxDQUFDK0IsSUFBSSxDQUFDLENBQUM7WUFBQTtjQUFBaEUsU0FBQSxDQUFBekIsSUFBQTtjQUFBLE9BRW5CLElBQUksQ0FBQ3FDLFlBQVksQ0FBQ3FDLHFCQUFxQixDQUMzQ2hCLFlBQVksQ0FBQ0ssT0FBTyxDQUFDQyxLQUFLLEVBQzFCTixZQUFZLENBQUNPLGlCQUFpQixDQUFDTSxJQUFJLEVBQ25DLGtDQUNGLENBQUM7WUFBQTtjQUFBLE1BRUssSUFBSWpCLHNFQUFZLENBQUNhLEtBQUssQ0FBQztnQkFDM0IvRCxPQUFPLEVBQ0wsd0VBQXdFO2dCQUMxRUMsTUFBTSxFQUFFeEIsMERBQVcsQ0FBQzBHO2NBQ3RCLENBQUMsQ0FBQztZQUFBO2NBR0o3QixZQUFZLENBQUNPLGlCQUFpQixDQUFDQyxRQUFRLEdBQUcsSUFBSTtjQUM5Q1IsWUFBWSxDQUFDTyxpQkFBaUIsQ0FBQ00sSUFBSSxHQUFHbUIsU0FBUztjQUMvQ2hDLFlBQVksQ0FBQ08saUJBQWlCLENBQUNPLFNBQVMsR0FBR2tCLFNBQVM7Y0FBQ2pFLFNBQUEsQ0FBQXpCLElBQUE7Y0FBQSxPQUUvQzBELFlBQVksQ0FBQytCLElBQUksQ0FBQyxDQUFDO1lBQUE7Y0FFbkJaLE9BQU8sR0FBRztnQkFDZEksR0FBRyxFQUFFdkIsWUFBWSxDQUFDVyxHQUFHO2dCQUNyQkwsS0FBSyxFQUFMQTtjQUNGLENBQUM7Y0FBQXZDLFNBQUEsQ0FBQXpCLElBQUE7Y0FBQSxPQUVtQixJQUFJLENBQUNrRixXQUFXLENBQUNMLE9BQU8sQ0FBQztZQUFBO2NBQXZDQyxLQUFLLEdBQUFyRCxTQUFBLENBQUFQLElBQUE7Y0FBQSxPQUFBTyxTQUFBLENBQUEwRCxNQUFBLFdBRUo7Z0JBQ0xMLEtBQUssRUFBTEEsS0FBSztnQkFDTHZELElBQUksRUFBRW1DO2NBQ1IsQ0FBQztZQUFBO1lBQUE7Y0FBQSxPQUFBakMsU0FBQSxDQUFBbEIsSUFBQTtVQUFBO1FBQUEsR0FBQWUsUUFBQTtNQUFBLENBQ0Y7TUFBQSxTQUFBTCxZQUFBRSxHQUFBO1FBQUEsT0FBQVAsWUFBQSxDQUFBRixLQUFBLE9BQUFDLFNBQUE7TUFBQTtNQUFBLE9BQUFNLFdBQUE7SUFBQTtFQUFBO0lBQUE5QixHQUFBO0lBQUFDLEtBQUE7TUFBQSxJQUFBdUcsWUFBQSxHQUFBckcsOEVBQUEsZUFBQUMsc0VBQUEsQ0FFRCxTQUFBcUcsU0FBa0JmLE9BQU87UUFBQSxJQUFBZ0IsV0FBQSxFQUFBQyxZQUFBLEVBQUFDLGVBQUEsRUFBQUMsYUFBQSxFQUFBQyxnQkFBQSxFQUFBQyxXQUFBLEVBQUFDLFlBQUE7UUFBQSxPQUFBNUcsc0VBQUEsVUFBQTZHLFVBQUFDLFNBQUE7VUFBQSxrQkFBQUEsU0FBQSxDQUFBdEcsSUFBQSxHQUFBc0csU0FBQSxDQUFBckcsSUFBQTtZQUFBO2NBQUE2RixXQUFBLEdBRXJCeEMsMkRBQU0sQ0FBQ2lELEdBQUcsRUFESlIsWUFBWSxHQUFBRCxXQUFBLENBQVpDLFlBQVksRUFBRUMsZUFBZSxHQUFBRixXQUFBLENBQWZFLGVBQWUsRUFBRUMsYUFBYSxHQUFBSCxXQUFBLENBQWJHLGFBQWEsRUFBRUMsZ0JBQWdCLEdBQUFKLFdBQUEsQ0FBaEJJLGdCQUFnQjtjQUFBSSxTQUFBLENBQUFyRyxJQUFBO2NBQUEsT0FHNUNpRCw2RUFBYSxDQUNyQzRCLE9BQU8sRUFDUGlCLFlBQVksRUFDWkMsZUFDRixDQUFDO1lBQUE7Y0FKS0csV0FBVyxHQUFBRyxTQUFBLENBQUFuRixJQUFBO2NBQUFtRixTQUFBLENBQUFyRyxJQUFBO2NBQUEsT0FNVWlELDZFQUFhLENBQ3RDNEIsT0FBTyxFQUNQbUIsYUFBYSxFQUNiQyxnQkFDRixDQUFDO1lBQUE7Y0FKS0UsWUFBWSxHQUFBRSxTQUFBLENBQUFuRixJQUFBO2NBQUFtRixTQUFBLENBQUFyRyxJQUFBO2NBQUEsT0FNWixJQUFJLENBQUNzQyxXQUFXLENBQUNpRSxNQUFNLENBQUMxQixPQUFPLENBQUNJLEdBQUcsRUFBRTtnQkFDekNILEtBQUssRUFBRTtrQkFBRTBCLE9BQU8sRUFBRUw7Z0JBQWE7Y0FDakMsQ0FBQyxDQUFDO1lBQUE7Y0FBQSxPQUFBRSxTQUFBLENBQUFsQixNQUFBLFdBRUs7Z0JBQUVlLFdBQVcsRUFBWEEsV0FBVztnQkFBRUMsWUFBWSxFQUFaQTtjQUFhLENBQUM7WUFBQTtZQUFBO2NBQUEsT0FBQUUsU0FBQSxDQUFBOUYsSUFBQTtVQUFBO1FBQUEsR0FBQXFGLFFBQUE7TUFBQSxDQUNyQztNQUFBLFNBQUFWLFlBQUE5RCxHQUFBO1FBQUEsT0FBQXVFLFlBQUEsQ0FBQWpGLEtBQUEsT0FBQUMsU0FBQTtNQUFBO01BQUEsT0FBQXVFLFdBQUE7SUFBQTtFQUFBO0lBQUEvRixHQUFBO0lBQUFDLEtBQUE7TUFBQSxJQUFBcUgsa0JBQUEsR0FBQW5ILDhFQUFBLGVBQUFDLHNFQUFBLENBRUQsU0FBQW1ILFNBQXdCN0IsT0FBTztRQUFBLElBQUE4QixZQUFBLEVBQUFDLHFCQUFBLEVBQUFDLGtCQUFBO1FBQUEsT0FBQXRILHNFQUFBLFVBQUF1SCxVQUFBQyxTQUFBO1VBQUEsa0JBQUFBLFNBQUEsQ0FBQWhILElBQUEsR0FBQWdILFNBQUEsQ0FBQS9HLElBQUE7WUFBQTtjQUFBMkcsWUFBQSxHQUN5QnRELDJEQUFNLENBQUNpRCxHQUFHLEVBQXhETSxxQkFBcUIsR0FBQUQsWUFBQSxDQUFyQkMscUJBQXFCLEVBQUVDLGtCQUFrQixHQUFBRixZQUFBLENBQWxCRSxrQkFBa0I7Y0FBQSxPQUFBRSxTQUFBLENBQUE1QixNQUFBLFdBRTFDbEMsNkVBQWEsQ0FBQzRCLE9BQU8sRUFBRWdDLGtCQUFrQixFQUFFRCxxQkFBcUIsQ0FBQztZQUFBO1lBQUE7Y0FBQSxPQUFBRyxTQUFBLENBQUF4RyxJQUFBO1VBQUE7UUFBQSxHQUFBbUcsUUFBQTtNQUFBLENBQ3pFO01BQUEsU0FBQU0sa0JBQUFwRixHQUFBO1FBQUEsT0FBQTZFLGtCQUFBLENBQUEvRixLQUFBLE9BQUFDLFNBQUE7TUFBQTtNQUFBLE9BQUFxRyxpQkFBQTtJQUFBO0VBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFLK0M7QUFFWDtBQUVoQyxJQUFNbEksT0FBTyxnQkFBQUkseUVBQUEsQ0FDbEIsU0FBQUosUUFBWWdDLElBQUksRUFBRTtFQUFBN0IsNEVBQUEsT0FBQUgsT0FBQTtFQUNoQixJQUFJLENBQUNnRyxLQUFLLEdBQUcsSUFBSW9DLGdEQUFRLENBQUNwRyxJQUFJLENBQUNnRSxLQUFLLENBQUM7RUFDckMsSUFBSSxDQUFDdkQsSUFBSSxHQUFHLElBQUkwRiwyREFBTyxDQUFDbkcsSUFBSSxDQUFDUyxJQUFJLENBQUM7QUFDcEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSSSxJQUFNMkYsUUFBUSxnQkFBQWhJLHlFQUFBLENBQ25CLFNBQUFnSSxTQUFZcEcsSUFBSSxFQUFFO0VBQUE3Qiw0RUFBQSxPQUFBaUksUUFBQTtFQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBR3JHLElBQUksQ0FBQ29GLFdBQVc7RUFDOUIsSUFBSSxDQUFDTSxPQUFPLEdBQUcxRixJQUFJLENBQUNxRixZQUFZO0FBQ2xDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkksSUFBTWlCLFNBQVMsZ0JBQUFsSSx5RUFBQSxDQUNwQixTQUFBa0ksVUFBQUMsSUFBQSxFQVFHO0VBQUEsSUFQRHRELE9BQU8sR0FBQXNELElBQUEsQ0FBUHRELE9BQU87SUFDUHVELFFBQVEsR0FBQUQsSUFBQSxDQUFSQyxRQUFRO0lBQ1JDLEtBQUssR0FBQUYsSUFBQSxDQUFMRSxLQUFLO0lBQ0xDLFNBQVMsR0FBQUgsSUFBQSxDQUFURyxTQUFTO0lBQ1RDLFVBQVUsR0FBQUosSUFBQSxDQUFWSSxVQUFVO0lBQ1ZDLFdBQVcsR0FBQUwsSUFBQSxDQUFYSyxXQUFXO0lBQ1hDLFdBQVcsR0FBQU4sSUFBQSxDQUFYTSxXQUFXO0VBQUExSSw0RUFBQSxPQUFBbUksU0FBQTtFQUVYUSxNQUFNLENBQUNDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDbEI5RCxPQUFPLEVBQVBBLE9BQU87SUFDUHVELFFBQVEsRUFBUkEsUUFBUTtJQUNSQyxLQUFLLEVBQUxBLEtBQUs7SUFDTEMsU0FBUyxFQUFUQSxTQUFTO0lBQ1RDLFVBQVUsRUFBVkEsVUFBVTtJQUNWQyxXQUFXLEVBQVhBLFdBQVc7SUFDWEMsV0FBVyxFQUFYQTtFQUNGLENBQUMsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkI2QztBQUVIO0FBRXRDLElBQU1HLGdCQUFnQjtFQUMzQixTQUFBQSxpQkFBWUMsY0FBYyxFQUFFO0lBQUE5SSw0RUFBQSxPQUFBNkksZ0JBQUE7SUFDMUIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBLGNBQWM7RUFDdEM7RUFBQyxPQUFBN0kseUVBQUEsQ0FBQTRJLGdCQUFBO0lBQUEzSSxHQUFBO0lBQUFDLEtBQUE7TUFBQSxJQUFBNEksS0FBQSxHQUFBMUksOEVBQUEsZUFBQUMsc0VBQUEsQ0FFRCxTQUFBRSxRQUFXc0QsR0FBRyxFQUFFQyxHQUFHO1FBQUEsSUFBQWxDLElBQUE7UUFBQSxPQUFBdkIsc0VBQUEsVUFBQU0sU0FBQUMsUUFBQTtVQUFBLGtCQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBRSxJQUFBO1lBQUE7Y0FBQUYsUUFBQSxDQUFBRSxJQUFBO2NBQUEsT0FDRSxJQUFJLENBQUMrSCxjQUFjLENBQUNFLElBQUksQ0FBQyxDQUFDO1lBQUE7Y0FBdkNuSCxJQUFJLEdBQUFoQixRQUFBLENBQUFvQixJQUFBO2NBRVY4QixHQUFHLENBQUM3QyxPQUFPLENBQUM7Z0JBQ1ZDLE9BQU8sRUFBRSwyQkFBMkI7Z0JBQ3BDQyxNQUFNLEVBQUV4QiwwREFBVyxDQUFDOEMsRUFBRTtnQkFDdEJiLElBQUksRUFBRUEsSUFBSSxHQUFHLElBQUlzRyxzREFBUyxDQUFDdEcsSUFBSSxDQUFDLEdBQUc7Y0FDckMsQ0FBQyxDQUFDO1lBQUM7WUFBQTtjQUFBLE9BQUFoQixRQUFBLENBQUFTLElBQUE7VUFBQTtRQUFBLEdBQUFkLE9BQUE7TUFBQSxDQUNKO01BQUEsU0FBQXdJLEtBQUF6SCxFQUFBLEVBQUFDLEdBQUE7UUFBQSxPQUFBdUgsS0FBQSxDQUFBdEgsS0FBQSxPQUFBQyxTQUFBO01BQUE7TUFBQSxPQUFBc0gsSUFBQTtJQUFBO0VBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJnRDtBQUVJO0FBQ0Q7QUFDTDtBQUUxQyxJQUFNRyxZQUFZLEdBQUc7RUFDMUJoRyxPQUFPLEVBQUUsZ0JBQWdCO0VBQ3pCaUcsVUFBVSxFQUFFLG1CQUFtQjtFQUMvQmxHLFVBQVUsRUFBRTtBQUNkLENBQUM7QUFFREwsNERBQVMsQ0FBQzdCLFFBQVEsQ0FBQ21JLFlBQVksQ0FBQ0MsVUFBVSxFQUFFLEVBQUUsRUFBRTtFQUFBLE9BQU0sSUFBSUgsK0RBQWdCLENBQUMsQ0FBQztBQUFBLEVBQUM7QUFFN0VwRyw0REFBUyxDQUFDN0IsUUFBUSxDQUNoQm1JLFlBQVksQ0FBQ2hHLE9BQU8sRUFDcEIsQ0FBQ2dHLFlBQVksQ0FBQ0MsVUFBVSxDQUFDLEVBQ3pCLFVBQUNDLGdCQUFnQjtFQUFBLE9BQUssSUFBSUgsMERBQWEsQ0FBQ0csZ0JBQWdCLENBQUM7QUFBQSxDQUMzRCxDQUFDO0FBRUR4Ryw0REFBUyxDQUFDN0IsUUFBUSxDQUNoQm1JLFlBQVksQ0FBQ2pHLFVBQVUsRUFDdkIsQ0FBQ2lHLFlBQVksQ0FBQ2hHLE9BQU8sQ0FBQyxFQUN0QixVQUFDbUcsYUFBYTtFQUFBLE9BQUssSUFBSVQsZ0VBQWdCLENBQUNTLGFBQWEsQ0FBQztBQUFBLENBQ3hELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCb0U7QUFFM0I7QUFFbkMsSUFBTUwsZ0JBQWdCLDBCQUFBUSxlQUFBO0VBQzNCLFNBQUFSLGlCQUFBLEVBQWM7SUFBQWpKLDRFQUFBLE9BQUFpSixnQkFBQTtJQUFBLE9BQUFTLFVBQUEsT0FBQVQsZ0JBQUEsR0FDTk8sMkRBQU07RUFDZDtFQUFDRyxzRUFBQSxDQUFBVixnQkFBQSxFQUFBUSxlQUFBO0VBQUEsT0FBQXhKLHlFQUFBLENBQUFnSixnQkFBQTtBQUFBLEVBSG1DTSw4RUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkQ7QUFDckI7QUFFYTtBQUUzQyxJQUFNOUYsTUFBTSxHQUFHLFVBQVU7QUFFekIsSUFBTW1HLFlBQVksR0FBR3RHLHFEQUFjLENBQUMsQ0FBQztBQUVyQyxJQUFNdUcsZ0JBQWdCLEdBQUdoSCw0REFBUyxDQUFDYyxHQUFHLENBQUN3RixvREFBWSxDQUFDakcsVUFBVSxDQUFDO0FBRS9EMEcsWUFBWSxDQUFDakcsR0FBRyxJQUFBRSxNQUFBLENBQUlKLE1BQU0sR0FBSSxVQUFDSyxHQUFHLEVBQUVDLEdBQUc7RUFBQSxPQUFLOEYsZ0JBQWdCLENBQUNiLElBQUksQ0FBQ2xGLEdBQUcsRUFBRUMsR0FBRyxDQUFDO0FBQUEsRUFBQztBQUU1RSxpRUFBZTZGLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYmtDO0FBQ2I7QUFFekMsSUFBTVYsYUFBYTtFQUN4QixTQUFBQSxjQUFZRyxnQkFBZ0IsRUFBRVMsY0FBYyxFQUFFO0lBQUE5Siw0RUFBQSxPQUFBa0osYUFBQTtJQUM1QyxJQUFJLENBQUNHLGdCQUFnQixHQUFHQSxnQkFBZ0I7SUFDeEMsSUFBSSxDQUFDUyxjQUFjLEdBQUdBLGNBQWM7RUFDdEM7RUFBQyxPQUFBN0oseUVBQUEsQ0FBQWlKLGFBQUE7SUFBQWhKLEdBQUE7SUFBQUMsS0FBQTtNQUFBLElBQUE0SixPQUFBLEdBQUExSiw4RUFBQSxlQUFBQyxzRUFBQSxDQUVELFNBQUFFLFFBQWF3SixTQUFTLEVBQUVDLGdCQUFnQjtRQUFBLElBQUFwSSxJQUFBLEVBQUFxSSx3QkFBQTtRQUFBLE9BQUE1SixzRUFBQSxVQUFBTSxTQUFBQyxRQUFBO1VBQUEsa0JBQUFBLFFBQUEsQ0FBQUMsSUFBQSxHQUFBRCxRQUFBLENBQUFFLElBQUE7WUFBQTtjQUFBRixRQUFBLENBQUFFLElBQUE7Y0FBQSxPQUNuQixJQUFJLENBQUNzSSxnQkFBZ0IsQ0FBQ2MsT0FBTyxDQUFDLENBQUM7WUFBQTtjQUE1Q3RJLElBQUksR0FBQWhCLFFBQUEsQ0FBQW9CLElBQUE7Y0FDTmlJLHdCQUF3QixHQUFHLEVBQUU7Y0FBQSxNQUU3QnJJLElBQUksQ0FBQ3VJLE1BQU0sR0FBRyxDQUFDO2dCQUFBdkosUUFBQSxDQUFBRSxJQUFBO2dCQUFBO2NBQUE7Y0FBQSxNQUNYc0Qsc0VBQVksQ0FBQ2EsS0FBSyxDQUFDO2dCQUN2QjlELE1BQU0sRUFBRXhCLDBEQUFXLENBQUN1RixRQUFRO2dCQUM1QmhFLE9BQU8sRUFBRTtjQUNYLENBQUMsQ0FBQztZQUFBO2NBQUEsTUFHQThJLGdCQUFnQixJQUFJQSxnQkFBZ0IsQ0FBQ0csTUFBTSxHQUFHLENBQUM7Z0JBQUF2SixRQUFBLENBQUFFLElBQUE7Z0JBQUE7Y0FBQTtjQUFBRixRQUFBLENBQUFFLElBQUE7Y0FBQSxPQUV6QyxJQUFJLENBQUMrSSxjQUFjLENBQUNPLFdBQVcsQ0FBQ0osZ0JBQWdCLENBQUM7WUFBQTtjQUR6REMsd0JBQXdCLEdBQUFySixRQUFBLENBQUFvQixJQUFBO1lBQUE7Y0FJMUIrSCxTQUFTLENBQUN0QixXQUFXLEdBQUd3Qix3QkFBd0I7Y0FBQyxPQUFBckosUUFBQSxDQUFBcUYsTUFBQSxXQUUxQyxJQUFJLENBQUNtRCxnQkFBZ0IsQ0FBQ2lCLFlBQVksQ0FBQ04sU0FBUyxDQUFDO1lBQUE7WUFBQTtjQUFBLE9BQUFuSixRQUFBLENBQUFTLElBQUE7VUFBQTtRQUFBLEdBQUFkLE9BQUE7TUFBQSxDQUNyRDtNQUFBLFNBQUFnRixPQUFBakUsRUFBQSxFQUFBQyxHQUFBO1FBQUEsT0FBQXVJLE9BQUEsQ0FBQXRJLEtBQUEsT0FBQUMsU0FBQTtNQUFBO01BQUEsT0FBQThELE1BQUE7SUFBQTtFQUFBO0lBQUF0RixHQUFBO0lBQUFDLEtBQUE7TUFBQSxJQUFBNEksS0FBQSxHQUFBMUksOEVBQUEsZUFBQUMsc0VBQUEsQ0FFRCxTQUFBc0IsU0FBQTtRQUFBLE9BQUF0QixzRUFBQSxVQUFBd0IsVUFBQUMsU0FBQTtVQUFBLGtCQUFBQSxTQUFBLENBQUFqQixJQUFBLEdBQUFpQixTQUFBLENBQUFoQixJQUFBO1lBQUE7Y0FBQSxPQUFBZ0IsU0FBQSxDQUFBbUUsTUFBQSxXQUNTLElBQUksQ0FBQ21ELGdCQUFnQixDQUFDYyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFBO1lBQUE7Y0FBQSxPQUFBcEksU0FBQSxDQUFBVCxJQUFBO1VBQUE7UUFBQSxHQUFBTSxRQUFBO01BQUEsQ0FDMUM7TUFBQSxTQUFBb0gsS0FBQTtRQUFBLE9BQUFELEtBQUEsQ0FBQXRILEtBQUEsT0FBQUMsU0FBQTtNQUFBO01BQUEsT0FBQXNILElBQUE7SUFBQTtFQUFBO0lBQUE5SSxHQUFBO0lBQUFDLEtBQUE7TUFBQSxJQUFBb0ssT0FBQSxHQUFBbEssOEVBQUEsZUFBQUMsc0VBQUEsQ0FFRCxTQUFBK0IsU0FBYTJILFNBQVMsRUFBRVEsS0FBSztRQUFBLElBQUEzSSxJQUFBO1FBQUEsT0FBQXZCLHNFQUFBLFVBQUFpQyxVQUFBQyxTQUFBO1VBQUEsa0JBQUFBLFNBQUEsQ0FBQTFCLElBQUEsR0FBQTBCLFNBQUEsQ0FBQXpCLElBQUE7WUFBQTtjQUFBeUIsU0FBQSxDQUFBekIsSUFBQTtjQUFBLE9BQ1IsSUFBSSxDQUFDc0ksZ0JBQWdCLENBQUNMLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUE7Y0FBNUNuSCxJQUFJLEdBQUFXLFNBQUEsQ0FBQVAsSUFBQTtjQUFBLElBRUxKLElBQUk7Z0JBQUFXLFNBQUEsQ0FBQXpCLElBQUE7Z0JBQUE7Y0FBQTtjQUFBLE1BQ0RzRCxzRUFBWSxDQUFDYSxLQUFLLENBQUM7Z0JBQ3ZCOUQsTUFBTSxFQUFFeEIsMERBQVcsQ0FBQzZLLFNBQVM7Z0JBQzdCdEosT0FBTyxFQUFFO2NBQ1gsQ0FBQyxDQUFDO1lBQUE7Y0FBQSxPQUFBcUIsU0FBQSxDQUFBMEQsTUFBQSxXQUdHckUsSUFBSTtZQUFBO1lBQUE7Y0FBQSxPQUFBVyxTQUFBLENBQUFsQixJQUFBO1VBQUE7UUFBQSxHQUFBZSxRQUFBO01BQUEsQ0FDWjtNQUFBLFNBQUFpRixPQUFBcEYsR0FBQSxFQUFBQyxHQUFBO1FBQUEsT0FBQW9JLE9BQUEsQ0FBQTlJLEtBQUEsT0FBQUMsU0FBQTtNQUFBO01BQUEsT0FBQTRGLE1BQUE7SUFBQTtFQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDeUU7QUFDRDtBQUMvQjtBQUU1QyxJQUFNd0QsWUFBWSxHQUFHLElBQUlELDRDQUFNLENBQzdCO0VBQ0UvRixPQUFPLEVBQUU2RixvRkFBYTtFQUN0QnRDLFFBQVEsRUFBRTtJQUNSMEMsSUFBSSxFQUFFQyxNQUFNO0lBQ1pDLFFBQVEsRUFBRTtFQUNaLENBQUM7RUFDRDNDLEtBQUssRUFBRTtJQUNMeUMsSUFBSSxFQUFFQyxNQUFNO0lBQ1pDLFFBQVEsRUFBRTtFQUNaLENBQUM7RUFDRDFDLFNBQVMsRUFBRTtJQUNUd0MsSUFBSSxFQUFFQyxNQUFNO0lBQ1pDLFFBQVEsRUFBRTtFQUNaLENBQUM7RUFDRHpDLFVBQVUsRUFBRTtJQUNWdUMsSUFBSSxFQUFFQyxNQUFNO0lBQ1pDLFFBQVEsRUFBRTtFQUNaLENBQUM7RUFDRHhDLFdBQVcsRUFBRTtJQUNYc0MsSUFBSSxFQUFFQyxNQUFNO0lBQ1pDLFFBQVEsRUFBRTtFQUNaLENBQUM7RUFDRHZDLFdBQVcsRUFBRSxDQUFDZ0MscUZBQWdCO0FBQ2hDLENBQUMsRUFDRDtFQUNFUSxVQUFVLEVBQUUsUUFBUTtFQUNwQkMsVUFBVSxFQUFFO0FBQ2QsQ0FDRixDQUFDO0FBRUQsSUFBTTNCLE1BQU0sR0FBR29CLHFEQUFjLENBQUMsUUFBUSxFQUFFRSxZQUFZLENBQUM7QUFFckQsaUVBQWV0QixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDNkQ7QUFDdEM7QUFFNUMsSUFBTThCLFVBQVUsR0FBRyxJQUFJVCw0Q0FBTSxDQUMzQjtFQUNFeEYsSUFBSSxFQUFFO0lBQ0owRixJQUFJLEVBQUVDLE1BQU07SUFDWk8sTUFBTSxFQUFFLElBQUk7SUFDWk4sUUFBUSxFQUFFLElBQUk7SUFDZE8sSUFBSSxFQUFFO0VBQ1I7QUFDRixDQUFDLEVBQ0Q7RUFDRU4sVUFBVSxFQUFFLE9BQU87RUFDbkJPLFVBQVUsRUFBRTtBQUNkLENBQ0YsQ0FBQyxDQUFDQyxNQUFNLENBQUNMLHNGQUFtQixFQUFFO0VBQUVNLFFBQVEsRUFBRTtBQUFNLENBQUMsQ0FBQztBQUVsRCxJQUFNQyxJQUFJLEdBQUdoQixxREFBYyxDQUFDLE1BQU0sRUFBRVUsVUFBVSxDQUFDO0FBRS9DLGlFQUFlTSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCZ0M7QUFFQTtBQUNSO0FBRXBDLElBQU1HLFVBQVUsR0FBRztFQUN4QjNDLFVBQVUsRUFBRSxpQkFBaUI7RUFDN0I0QyxNQUFNLEVBQUU7QUFDVixDQUFDO0FBRURuSiw0REFBUyxDQUFDN0IsUUFBUSxDQUFDK0ssVUFBVSxDQUFDM0MsVUFBVSxFQUFFLEVBQUUsRUFBRTtFQUFBLE9BQU0sSUFBSXlDLDREQUFjLENBQUMsQ0FBQztBQUFBLEVBQUM7QUFFekVoSiw0REFBUyxDQUFDN0IsUUFBUSxDQUNoQitLLFVBQVUsQ0FBQ0MsTUFBTSxFQUNqQixDQUFDRCxVQUFVLENBQUMzQyxVQUFVLENBQUMsRUFDdkIsVUFBQzZDLGNBQWM7RUFBQSxPQUFLLElBQUlILG9EQUFVLENBQUNHLGNBQWMsQ0FBQztBQUFBLENBQ3BELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCb0U7QUFFL0I7QUFFL0IsSUFBTUosY0FBYywwQkFBQXBDLGVBQUE7RUFDekIsU0FBQW9DLGVBQUEsRUFBYztJQUFBN0wsNEVBQUEsT0FBQTZMLGNBQUE7SUFBQSxPQUFBbkMsVUFBQSxPQUFBbUMsY0FBQSxHQUNORCx5REFBSTtFQUNaO0VBQUNqQyxzRUFBQSxDQUFBa0MsY0FBQSxFQUFBcEMsZUFBQTtFQUFBLE9BQUF4Six5RUFBQSxDQUFBNEwsY0FBQTtBQUFBLEVBSGlDdEMsOEVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pGO0FBRXpDLElBQU11QyxVQUFVO0VBQ3JCLFNBQUFBLFdBQVlHLGNBQWMsRUFBRTtJQUFBak0sNEVBQUEsT0FBQThMLFVBQUE7SUFDMUIsSUFBSSxDQUFDRyxjQUFjLEdBQUdBLGNBQWM7RUFDdEM7RUFBQyxPQUFBaE0seUVBQUEsQ0FBQTZMLFVBQUE7SUFBQTVMLEdBQUE7SUFBQUMsS0FBQTtNQUFBLElBQUFnTSxZQUFBLEdBQUE5TCw4RUFBQSxlQUFBQyxzRUFBQSxDQUVELFNBQUFFLFFBQUE7UUFBQSxJQUFBNEwsYUFBQSxFQUFBQyxpQkFBQSxFQUFBQyxhQUFBO1FBQUEsT0FBQWhNLHNFQUFBLFVBQUFNLFNBQUFDLFFBQUE7VUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtZQUFBO2NBQUFGLFFBQUEsQ0FBQUUsSUFBQTtjQUFBLE9BQzhCLElBQUksQ0FBQ2tMLGNBQWMsQ0FBQzlCLE9BQU8sQ0FBQyxDQUFDO1lBQUE7Y0FBbkRpQyxhQUFhLEdBQUF2TCxRQUFBLENBQUFvQixJQUFBO2NBQ2JvSyxpQkFBaUIsR0FBR0QsYUFBYSxDQUFDRyxHQUFHLENBQUMsVUFBQ2xILElBQUk7Z0JBQUEsT0FBS0EsSUFBSSxDQUFDQSxJQUFJO2NBQUEsRUFBQztjQUUxRGlILGFBQWEsR0FBR0oseURBQUssQ0FBQ00sTUFBTSxDQUNoQyxVQUFDbkgsSUFBSTtnQkFBQSxPQUFLLENBQUNnSCxpQkFBaUIsQ0FBQ0ksUUFBUSxDQUFDcEgsSUFBSSxDQUFDQSxJQUFJLENBQUM7Y0FBQSxDQUNsRCxDQUFDO2NBQUEsTUFFR2lILGFBQWEsQ0FBQ2xDLE1BQU0sR0FBRyxDQUFDO2dCQUFBdkosUUFBQSxDQUFBRSxJQUFBO2dCQUFBO2NBQUE7Y0FBQUYsUUFBQSxDQUFBRSxJQUFBO2NBQUEsT0FDcEIsSUFBSSxDQUFDa0wsY0FBYyxDQUFDUyxVQUFVLENBQUNKLGFBQWEsQ0FBQztZQUFBO1lBQUE7Y0FBQSxPQUFBekwsUUFBQSxDQUFBUyxJQUFBO1VBQUE7UUFBQSxHQUFBZCxPQUFBO01BQUEsQ0FFdEQ7TUFBQSxTQUFBbU0sWUFBQTtRQUFBLE9BQUFSLFlBQUEsQ0FBQTFLLEtBQUEsT0FBQUMsU0FBQTtNQUFBO01BQUEsT0FBQWlMLFdBQUE7SUFBQTtFQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCMEQ7QUFFdEQsSUFBTTNFLE9BQU8sZ0JBQUEvSCx5RUFBQSxDQUNsQixTQUFBK0gsUUFBWW5HLElBQUksRUFBRTtFQUFBN0IsNEVBQUEsT0FBQWdJLE9BQUE7RUFDaEIsSUFBSSxDQUFDNkUsUUFBUSxHQUFHaEwsSUFBSSxDQUFDZ0wsUUFBUTtFQUM3QixJQUFJLENBQUNDLFlBQVksR0FBR2pMLElBQUksQ0FBQ2lMLFlBQVk7RUFDckMsSUFBSSxDQUFDekgsSUFBSSxHQUFHeEQsSUFBSSxDQUFDd0QsSUFBSTtFQUNyQixJQUFJLENBQUNQLE9BQU8sR0FBRyxJQUFJOEgsc0VBQVUsQ0FBQy9LLElBQUksQ0FBQ2lELE9BQU8sQ0FBQztBQUM3QyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDUitCO0FBRWxDLElBQU1pSSx1QkFBdUIsR0FBRyxJQUFJbEMsNENBQU0sQ0FDeEM7RUFDRXZGLElBQUksRUFBRTtJQUNKeUYsSUFBSSxFQUFFQztFQUNSLENBQUM7RUFDRHpGLFNBQVMsRUFBRTtJQUNUd0YsSUFBSSxFQUFFeEU7RUFDUixDQUFDO0VBQ0R0QixRQUFRLEVBQUU7SUFDUjhGLElBQUksRUFBRWlDLE9BQU87SUFDYixXQUFTO0VBQ1g7QUFDRixDQUFDLEVBQ0Q7RUFDRTVILEdBQUcsRUFBRTtBQUNQLENBQ0YsQ0FBQztBQUVELGlFQUFlMkgsdUJBQXVCOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJKO0FBRTNCLElBQU1FLGtCQUFrQixHQUFHLElBQUlwQyw0Q0FBTSxDQUMxQztFQUNFdEQsT0FBTyxFQUFFO0lBQ1B3RCxJQUFJLEVBQUVDO0VBQ1IsQ0FBQztFQUNEa0MsU0FBUyxFQUFFO0lBQ1RuQyxJQUFJLEVBQUV4RSxJQUFJO0lBQ1YsV0FBU0EsSUFBSSxDQUFDRixHQUFHO0lBQ2pCOEcsT0FBTyxFQUFFO0VBQ1g7QUFDRixDQUFDLEVBQ0Q7RUFDRS9ILEdBQUcsRUFBRTtBQUNQLENBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCMEU7QUFDL0I7QUFFUztBQUNBO0FBRXJELElBQU1nSSxVQUFVLEdBQUcsSUFBSXZDLDRDQUFNLENBQzNCO0VBQ0VnQyxRQUFRLEVBQUU7SUFDUjlCLElBQUksRUFBRUMsTUFBTTtJQUNaQyxRQUFRLEVBQUUsSUFBSTtJQUNkTyxJQUFJLEVBQUU7RUFDUixDQUFDO0VBQ0RzQixZQUFZLEVBQUU7SUFDWi9CLElBQUksRUFBRUM7RUFDUixDQUFDO0VBQ0RyRixRQUFRLEVBQUU7SUFBRW9GLElBQUksRUFBRUMsTUFBTTtJQUFFQyxRQUFRLEVBQUUsSUFBSTtJQUFFTyxJQUFJLEVBQUU7RUFBSyxDQUFDO0VBQ3REMUcsT0FBTyxFQUFFNkYsb0ZBQWE7RUFDdEI5RSxLQUFLLEVBQUVvSCw4REFBa0I7RUFDekJqSSxpQkFBaUIsRUFBRTtJQUNqQitGLElBQUksRUFBRS9GLDJEQUFpQjtJQUN2QmlHLFFBQVEsRUFBRTtFQUNaLENBQUM7RUFDRG9DLGFBQWEsRUFBRTtJQUNidEMsSUFBSSxFQUFFL0YsMkRBQWlCO0lBQ3ZCaUcsUUFBUSxFQUFFO0VBQ1osQ0FBQztFQUNENUYsSUFBSSxFQUFFO0lBQUUwRixJQUFJLEVBQUVGLDRDQUFNLENBQUN5QyxLQUFLLENBQUNDLE1BQU07SUFBRUMsR0FBRyxFQUFFLE1BQU07SUFBRXZDLFFBQVEsRUFBRTtFQUFLO0FBQ2pFLENBQUMsRUFDRDtFQUNFQyxVQUFVLEVBQUUsT0FBTztFQUNuQkMsVUFBVSxFQUFFO0FBQ2QsQ0FDRixDQUFDO0FBRUQsSUFBTXNDLElBQUksR0FBRzdDLHFEQUFjLENBQUMsTUFBTSxFQUFFd0MsVUFBVSxDQUFDO0FBRS9DLGlFQUFlSyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ2dDO0FBRUE7QUFDUjtBQUNFO0FBRXRDLElBQU0xSyxVQUFVLEdBQUc7RUFDeEJJLE9BQU8sRUFBRSxjQUFjO0VBQ3ZCaUcsVUFBVSxFQUFFLGlCQUFpQjtFQUM3QjRDLE1BQU0sRUFBRTtBQUNWLENBQUM7QUFFRG5KLDREQUFTLENBQUM3QixRQUFRLENBQUMrQixVQUFVLENBQUNxRyxVQUFVLEVBQUUsRUFBRSxFQUFFO0VBQUEsT0FBTSxJQUFJc0UsNERBQWMsQ0FBQyxDQUFDO0FBQUEsRUFBQztBQUV6RTdLLDREQUFTLENBQUM3QixRQUFRLENBQ2hCK0IsVUFBVSxDQUFDaUosTUFBTSxFQUNqQixDQUFDakosVUFBVSxDQUFDcUcsVUFBVSxDQUFDLEVBQ3ZCLFVBQUN5RSxjQUFjO0VBQUEsT0FBSyxJQUFJRixvREFBVSxDQUFDRSxjQUFjLENBQUM7QUFBQSxDQUNwRCxDQUFDO0FBRURoTCw0REFBUyxDQUFDN0IsUUFBUSxDQUNoQitCLFVBQVUsQ0FBQ0ksT0FBTyxFQUNsQixDQUFDSixVQUFVLENBQUNxRyxVQUFVLENBQUMsRUFDdkIsVUFBQ3lFLGNBQWM7RUFBQSxPQUFLLElBQUlELHNEQUFXLENBQUNDLGNBQWMsQ0FBQztBQUFBLENBQ3JELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCb0U7QUFFL0I7QUFFL0IsSUFBTUgsY0FBYywwQkFBQWpFLGVBQUE7RUFDekIsU0FBQWlFLGVBQUEsRUFBYztJQUFBMU4sNEVBQUEsT0FBQTBOLGNBQUE7SUFBQSxPQUFBaEUsVUFBQSxPQUFBZ0UsY0FBQSxHQUNORCx5REFBSTtFQUNaO0VBQUM5RCxzRUFBQSxDQUFBK0QsY0FBQSxFQUFBakUsZUFBQTtFQUFBLE9BQUF4Six5RUFBQSxDQUFBeU4sY0FBQTtBQUFBLEVBSGlDbkUsOEVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pRO0FBRW5ELElBQU1vRSxVQUFVO0VBQ3JCLFNBQUFBLFdBQVlFLGNBQWMsRUFBRTVCLGNBQWMsRUFBRTtJQUFBak0sNEVBQUEsT0FBQTJOLFVBQUE7SUFDMUMsSUFBSSxDQUFDRSxjQUFjLEdBQUdBLGNBQWM7SUFDcEMsSUFBSSxDQUFDNUIsY0FBYyxHQUFHQSxjQUFjO0VBQ3RDO0VBQUMsT0FBQWhNLHlFQUFBLENBQUEwTixVQUFBO0lBQUF6TixHQUFBO0lBQUFDLEtBQUE7TUFBQSxJQUFBNE4sWUFBQSxHQUFBMU4sOEVBQUEsZUFBQUMsc0VBQUEsQ0FFRCxTQUFBRSxRQUFBO1FBQUEsSUFBQXFCLElBQUEsRUFBQThELFFBQUE7UUFBQSxPQUFBckYsc0VBQUEsVUFBQU0sU0FBQUMsUUFBQTtVQUFBLGtCQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBRSxJQUFBO1lBQUE7Y0FBQUYsUUFBQSxDQUFBRSxJQUFBO2NBQUEsT0FDcUIsSUFBSSxDQUFDOE0sY0FBYyxDQUFDRyxPQUFPLENBQUM7Z0JBQUUzSSxJQUFJLEVBQUU7Y0FBRSxDQUFDLENBQUM7WUFBQTtjQUFyRHhELElBQUksR0FBQWhCLFFBQUEsQ0FBQW9CLElBQUE7Y0FBQSxJQUVMSixJQUFJO2dCQUFBaEIsUUFBQSxDQUFBRSxJQUFBO2dCQUFBO2NBQUE7Y0FBQUYsUUFBQSxDQUFBRSxJQUFBO2NBQUEsT0FDZ0IrTSx5RUFBWSxDQUFDLGFBQWEsQ0FBQztZQUFBO2NBQTVDbkksUUFBUSxHQUFBOUUsUUFBQSxDQUFBb0IsSUFBQTtjQUFBLE9BQUFwQixRQUFBLENBQUFxRixNQUFBLFdBRVAsSUFBSSxDQUFDMkgsY0FBYyxDQUFDckksTUFBTSxDQUFDO2dCQUNoQ1YsT0FBTyxFQUFFO2tCQUFFQyxLQUFLLEVBQUU7Z0JBQXdCLENBQUM7Z0JBQzNDOEgsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCbEgsUUFBUSxFQUFSQSxRQUFRO2dCQUNSTixJQUFJLEVBQUU7Y0FDUixDQUFDLENBQUM7WUFBQTtjQUFBLE9BQUF4RSxRQUFBLENBQUFxRixNQUFBLFdBR0csSUFBSTtZQUFBO1lBQUE7Y0FBQSxPQUFBckYsUUFBQSxDQUFBUyxJQUFBO1VBQUE7UUFBQSxHQUFBZCxPQUFBO01BQUEsQ0FDWjtNQUFBLFNBQUF5TixZQUFBO1FBQUEsT0FBQUYsWUFBQSxDQUFBdE0sS0FBQSxPQUFBQyxTQUFBO01BQUE7TUFBQSxPQUFBdU0sV0FBQTtJQUFBO0VBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkIyRDtBQUNEO0FBQ2I7QUFFekMsSUFBTUwsV0FBVztFQUN0QixTQUFBQSxZQUFZQyxjQUFjLEVBQUU7SUFBQTdOLDRFQUFBLE9BQUE0TixXQUFBO0lBQzFCLElBQUksQ0FBQ0MsY0FBYyxHQUFHQSxjQUFjO0VBQ3RDO0VBQUMsT0FBQTVOLHlFQUFBLENBQUEyTixXQUFBO0lBQUExTixHQUFBO0lBQUFDLEtBQUE7TUFBQSxJQUFBNEosT0FBQSxHQUFBMUosOEVBQUEsZUFBQUMsc0VBQUEsQ0FFRCxTQUFBRSxRQUFhME4sT0FBTztRQUFBLE9BQUE1TixzRUFBQSxVQUFBTSxTQUFBQyxRQUFBO1VBQUEsa0JBQUFBLFFBQUEsQ0FBQUMsSUFBQSxHQUFBRCxRQUFBLENBQUFFLElBQUE7WUFBQTtjQUFBRixRQUFBLENBQUFFLElBQUE7Y0FBQSxPQUNPK00sMkVBQVksQ0FBQ0ksT0FBTyxDQUFDdkksUUFBUSxDQUFDO1lBQUE7Y0FBdkR1SSxPQUFPLENBQUN2SSxRQUFRLEdBQUE5RSxRQUFBLENBQUFvQixJQUFBO2NBQUEsT0FBQXBCLFFBQUEsQ0FBQXFGLE1BQUEsV0FFVCxJQUFJLENBQUMySCxjQUFjLENBQUNySSxNQUFNLENBQUMwSSxPQUFPLENBQUM7WUFBQTtZQUFBO2NBQUEsT0FBQXJOLFFBQUEsQ0FBQVMsSUFBQTtVQUFBO1FBQUEsR0FBQWQsT0FBQTtNQUFBLENBQzNDO01BQUEsU0FBQWdGLE9BQUFqRSxFQUFBO1FBQUEsT0FBQXdJLE9BQUEsQ0FBQXRJLEtBQUEsT0FBQUMsU0FBQTtNQUFBO01BQUEsT0FBQThELE1BQUE7SUFBQTtFQUFBO0lBQUF0RixHQUFBO0lBQUFDLEtBQUE7TUFBQSxJQUFBZ08sWUFBQSxHQUFBOU4sOEVBQUEsZUFBQUMsc0VBQUEsQ0FFRCxTQUFBc0IsU0FBa0JtRCxLQUFLO1FBQUEsT0FBQXpFLHNFQUFBLFVBQUF3QixVQUFBQyxTQUFBO1VBQUEsa0JBQUFBLFNBQUEsQ0FBQWpCLElBQUEsR0FBQWlCLFNBQUEsQ0FBQWhCLElBQUE7WUFBQTtjQUFBLE9BQUFnQixTQUFBLENBQUFtRSxNQUFBLFdBQ2QsSUFBSSxDQUFDMkgsY0FBYyxDQUFDRyxPQUFPLENBQUM7Z0JBQUUsZUFBZSxFQUFFako7Y0FBTSxDQUFDLENBQUM7WUFBQTtZQUFBO2NBQUEsT0FBQWhELFNBQUEsQ0FBQVQsSUFBQTtVQUFBO1FBQUEsR0FBQU0sUUFBQTtNQUFBLENBQy9EO01BQUEsU0FBQWlELFlBQUFyRCxHQUFBO1FBQUEsT0FBQTJNLFlBQUEsQ0FBQTFNLEtBQUEsT0FBQUMsU0FBQTtNQUFBO01BQUEsT0FBQW1ELFdBQUE7SUFBQTtFQUFBO0lBQUEzRSxHQUFBO0lBQUFDLEtBQUE7TUFBQSxJQUFBaU8sU0FBQSxHQUFBL04sOEVBQUEsZUFBQUMsc0VBQUEsQ0FFRCxTQUFBK0IsU0FBZWdNLEVBQUU7UUFBQSxJQUFBeE0sSUFBQTtRQUFBLE9BQUF2QixzRUFBQSxVQUFBaUMsVUFBQUMsU0FBQTtVQUFBLGtCQUFBQSxTQUFBLENBQUExQixJQUFBLEdBQUEwQixTQUFBLENBQUF6QixJQUFBO1lBQUE7Y0FBQXlCLFNBQUEsQ0FBQXpCLElBQUE7Y0FBQSxPQUNJLElBQUksQ0FBQzhNLGNBQWMsQ0FBQ1MsUUFBUSxDQUFDRCxFQUFFLENBQUM7WUFBQTtjQUE3Q3hNLElBQUksR0FBQVcsU0FBQSxDQUFBUCxJQUFBO2NBQUEsSUFFTEosSUFBSTtnQkFBQVcsU0FBQSxDQUFBekIsSUFBQTtnQkFBQTtjQUFBO2NBQUEsTUFDRHNELHNFQUFZLENBQUNhLEtBQUssQ0FBQztnQkFDdkI5RCxNQUFNLEVBQUV4QiwwREFBVyxDQUFDNkssU0FBUztnQkFDN0J0SixPQUFPLEVBQUU7Y0FDWCxDQUFDLENBQUM7WUFBQTtjQUFBLE9BQUFxQixTQUFBLENBQUEwRCxNQUFBLFdBR0dyRSxJQUFJO1lBQUE7WUFBQTtjQUFBLE9BQUFXLFNBQUEsQ0FBQWxCLElBQUE7VUFBQTtRQUFBLEdBQUFlLFFBQUE7TUFBQSxDQUNaO01BQUEsU0FBQWlNLFNBQUFwTSxHQUFBO1FBQUEsT0FBQWtNLFNBQUEsQ0FBQTNNLEtBQUEsT0FBQUMsU0FBQTtNQUFBO01BQUEsT0FBQTRNLFFBQUE7SUFBQTtFQUFBO0lBQUFwTyxHQUFBO0lBQUFDLEtBQUE7TUFBQSxJQUFBb0ssT0FBQSxHQUFBbEssOEVBQUEsZUFBQUMsc0VBQUEsQ0FFRCxTQUFBcUcsU0FBYTBILEVBQUUsRUFBRUgsT0FBTztRQUFBLE9BQUE1TixzRUFBQSxVQUFBNkcsVUFBQUMsU0FBQTtVQUFBLGtCQUFBQSxTQUFBLENBQUF0RyxJQUFBLEdBQUFzRyxTQUFBLENBQUFyRyxJQUFBO1lBQUE7Y0FBQXFHLFNBQUEsQ0FBQXJHLElBQUE7Y0FBQSxPQUNoQixJQUFJLENBQUN1TixRQUFRLENBQUNELEVBQUUsQ0FBQztZQUFBO2NBQUEsT0FBQWpILFNBQUEsQ0FBQWxCLE1BQUEsV0FFaEIsSUFBSSxDQUFDMkgsY0FBYyxDQUFDdkcsTUFBTSxDQUFDK0csRUFBRSxFQUFFSCxPQUFPLENBQUM7WUFBQTtZQUFBO2NBQUEsT0FBQTlHLFNBQUEsQ0FBQTlGLElBQUE7VUFBQTtRQUFBLEdBQUFxRixRQUFBO01BQUEsQ0FDL0M7TUFBQSxTQUFBVyxPQUFBbkYsR0FBQSxFQUFBUSxHQUFBO1FBQUEsT0FBQTRILE9BQUEsQ0FBQTlJLEtBQUEsT0FBQUMsU0FBQTtNQUFBO01BQUEsT0FBQTRGLE1BQUE7SUFBQTtFQUFBO0lBQUFwSCxHQUFBO0lBQUFDLEtBQUE7TUFBQSxJQUFBb08sUUFBQSxHQUFBbE8sOEVBQUEsZUFBQUMsc0VBQUEsQ0FFRCxTQUFBbUgsU0FBYTRHLEVBQUU7UUFBQSxPQUFBL04sc0VBQUEsVUFBQXVILFVBQUFDLFNBQUE7VUFBQSxrQkFBQUEsU0FBQSxDQUFBaEgsSUFBQSxHQUFBZ0gsU0FBQSxDQUFBL0csSUFBQTtZQUFBO2NBQUErRyxTQUFBLENBQUEvRyxJQUFBO2NBQUEsT0FDUCxJQUFJLENBQUN1TixRQUFRLENBQUNELEVBQUUsQ0FBQztZQUFBO2NBQUEsT0FBQXZHLFNBQUEsQ0FBQTVCLE1BQUEsV0FFaEIsSUFBSSxDQUFDMkgsY0FBYyxVQUFPLENBQUNRLEVBQUUsQ0FBQztZQUFBO1lBQUE7Y0FBQSxPQUFBdkcsU0FBQSxDQUFBeEcsSUFBQTtVQUFBO1FBQUEsR0FBQW1HLFFBQUE7TUFBQSxDQUN0QztNQUFBLFNBQUErRyxRQUFBNUwsR0FBQTtRQUFBLE9BQUEyTCxRQUFBLENBQUE5TSxLQUFBLE9BQUFDLFNBQUE7TUFBQTtNQUFBLE9BQUE4TSxPQUFBO0lBQUE7RUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDbUU7QUFDeEM7QUFDVztBQUNqQjtBQUNNO0FBQ2lCO0FBRUE7QUFDTTtBQUNGO0FBQzZCO0FBQ0E7QUFFaEYsSUFBTVMsR0FBRyxHQUFHM0wsOENBQU8sQ0FBQyxDQUFDO0FBRXJCMkwsR0FBRyxDQUFDQyxHQUFHLENBQ0xMLDZEQUFTLENBQUM7RUFDUk0sUUFBUSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSTtFQUN4QkMsS0FBSyxFQUFFLEdBQUc7RUFDVkMsZUFBZSxFQUFFLFNBQVM7RUFDMUJDLGFBQWEsRUFBRSxLQUFLO0VBQ3BCbk8sT0FBTyxFQUFFO0FBQ1gsQ0FBQyxDQUNILENBQUM7QUFDRDhOLEdBQUcsQ0FBQ00sR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7QUFDekJOLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDUCxvREFBWSxDQUFDLENBQUMsQ0FBQztBQUN2Qk0sR0FBRyxDQUFDQyxHQUFHLENBQUM1TCx5REFBa0IsQ0FBQztFQUFFbU0sUUFBUSxFQUFFO0FBQUssQ0FBQyxDQUFDLENBQUM7QUFDL0NSLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDNUwsbURBQVksQ0FBQyxDQUFDLENBQUM7QUFDdkIyTCxHQUFHLENBQUNDLEdBQUcsQ0FBQ04sMkNBQUksQ0FBQyxDQUFDLENBQUM7QUFDZkssR0FBRyxDQUFDVSxPQUFPLENBQUMsY0FBYyxDQUFDO0FBQzNCVixHQUFHLENBQUNDLEdBQUcsQ0FBQ0gsaUZBQXNCLENBQUM7QUFDL0JFLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsRUFBRVIsa0VBQVMsQ0FBQ2tCLEtBQUssRUFBRWxCLGtFQUFTLENBQUNtQixLQUFLLENBQUNwQixvRUFBVyxDQUFDLENBQUM7QUFFbkVRLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDSiw0REFBUyxFQUFFbEYsZ0VBQVksQ0FBQztBQUNoQ3FGLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDSiw0REFBUyxFQUFFdkwsNERBQVUsQ0FBQztBQUU5QjBMLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDRixrRkFBc0IsQ0FBQztBQUMvQixpRUFBZUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7QUNyQ1gsSUFBTUgsU0FBUyxHQUFHLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0FDQTNCLElBQU01QyxLQUFLLEdBQUcsQ0FBQztFQUFFN0csSUFBSSxFQUFFO0FBQVEsQ0FBQyxFQUFFO0VBQUVBLElBQUksRUFBRTtBQUFPLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0EzQjtBQUV4QixJQUFNckIsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFJNEIsT0FBTyxFQUFFa0ssTUFBTSxFQUFFQyxJQUFJO0VBQUEsT0FDakQxSSx3REFBUSxDQUFDekIsT0FBTyxFQUFFa0ssTUFBTSxFQUFFO0lBQ3hCRyxTQUFTLEVBQUVGLElBQUk7SUFDZkcsU0FBUyxFQUFFO0VBQ2IsQ0FBQyxDQUFDO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjZCO0FBQUEsU0FFbEJwQyxZQUFZQSxDQUFBdk0sRUFBQTtFQUFBLE9BQUE2TyxhQUFBLENBQUEzTyxLQUFBLE9BQUFDLFNBQUE7QUFBQTtBQUFBLFNBQUEwTyxjQUFBO0VBQUFBLGFBQUEsR0FBQS9QLDhFQUFBLGVBQUFDLHNFQUFBLENBQTNCLFNBQUFFLFFBQTRCbUYsUUFBUTtJQUFBLElBQUEwSyxJQUFBO0lBQUEsT0FBQS9QLHNFQUFBLFVBQUFNLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BQ2ZvUCwyQ0FBYyxDQUFDLEVBQUUsQ0FBQztRQUFBO1VBQS9CRSxJQUFJLEdBQUF4UCxRQUFBLENBQUFvQixJQUFBO1VBQUEsT0FBQXBCLFFBQUEsQ0FBQXFGLE1BQUEsV0FFSGlLLHdDQUFXLENBQUN4SyxRQUFRLEVBQUUwSyxJQUFJLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQXhQLFFBQUEsQ0FBQVMsSUFBQTtNQUFBO0lBQUEsR0FBQWQsT0FBQTtFQUFBLENBQ25DO0VBQUEsT0FBQTRQLGFBQUEsQ0FBQTNPLEtBQUEsT0FBQUMsU0FBQTtBQUFBO0FBQUEsU0FFY3VDLGVBQWVBLENBQUF6QyxHQUFBLEVBQUFVLEdBQUE7RUFBQSxPQUFBc08sZ0JBQUEsQ0FBQS9PLEtBQUEsT0FBQUMsU0FBQTtBQUFBO0FBQUEsU0FBQThPLGlCQUFBO0VBQUFBLGdCQUFBLEdBQUFuUSw4RUFBQSxlQUFBQyxzRUFBQSxDQUE5QixTQUFBc0IsU0FBK0I2TyxpQkFBaUIsRUFBRUMsY0FBYztJQUFBLE9BQUFwUSxzRUFBQSxVQUFBd0IsVUFBQUMsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUFqQixJQUFBLEdBQUFpQixTQUFBLENBQUFoQixJQUFBO1FBQUE7VUFBQSxPQUFBZ0IsU0FBQSxDQUFBbUUsTUFBQSxXQUN2RGlLLDJDQUFjLENBQUNNLGlCQUFpQixFQUFFQyxjQUFjLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQTNPLFNBQUEsQ0FBQVQsSUFBQTtNQUFBO0lBQUEsR0FBQU0sUUFBQTtFQUFBLENBQ3pEO0VBQUEsT0FBQTRPLGdCQUFBLENBQUEvTyxLQUFBLE9BQUFDLFNBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVjJCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTXdDLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBd0JBLENBQUEsRUFBbUI7RUFBQSxJQUFma0csTUFBTSxHQUFBMUksU0FBQSxDQUFBMEksTUFBQSxRQUFBMUksU0FBQSxRQUFBK0UsU0FBQSxHQUFBL0UsU0FBQSxNQUFHLENBQUM7RUFDMUMsSUFBTW1QLFVBQVUsR0FDZCxnRUFBZ0U7RUFDbEUsSUFBTUMsZ0JBQWdCLEdBQUdELFVBQVUsQ0FBQ3pHLE1BQU07RUFDMUMsSUFBSTJHLE1BQU0sR0FBRyxFQUFFOztFQUVmO0VBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUc1RyxNQUFNLEVBQUU0RyxDQUFDLEVBQUUsRUFBRTtJQUMvQixJQUFNQyxXQUFXLEdBQUdMLHVEQUFnQixDQUFDRSxnQkFBZ0IsQ0FBQztJQUN0REMsTUFBTSxJQUFJRixVQUFVLENBQUNJLFdBQVcsQ0FBQztFQUNuQztFQUVBLE9BQU9GLE1BQU07QUFDZixDQUFDO0FBRUQsSUFBTTVNLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBeUJBLENBQUlnTixPQUFPO0VBQUEsT0FBSzVLLElBQUksQ0FBQ0YsR0FBRyxDQUFDLENBQUMsR0FBRzhLLE9BQU8sR0FBRyxLQUFLO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEIzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBUzlGLG1CQUFtQkEsQ0FBQytGLE1BQU0sRUFBRUMsT0FBTyxFQUFFO0VBQzNELElBQUksQ0FBQ0EsT0FBTyxDQUFDMUYsUUFBUSxFQUFFO0lBQ3JCLE1BQU0sSUFBSTJGLEtBQUssQ0FBQywwQkFBMEIsQ0FBQztFQUM3QztFQUVBLElBQUlDLFlBQVksR0FBRztJQUNqQnhHLElBQUksRUFBRXdDO0VBQ1IsQ0FBQztFQUVELElBQUk4RCxPQUFPLENBQUMxRixRQUFRLEtBQUssS0FBSyxFQUFFO0lBQzlCNEYsWUFBWSxHQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FDUEQsWUFBWTtNQUNmaEcsTUFBTSxFQUFFO0lBQUksRUFDYjtFQUNIO0VBRUE2RixNQUFNLENBQUNLLEdBQUcsQ0FBQUMsNEVBQUEsS0FDUEwsT0FBTyxDQUFDMUYsUUFBUSxFQUFHNEYsWUFBWSxDQUNqQyxDQUFDO0VBRUZILE1BQU0sQ0FBQ08sR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVNVEsSUFBSSxFQUFFO0lBQUEsSUFBQTZRLEtBQUE7SUFDakMsSUFBSSxJQUFJLENBQUNDLEtBQUssRUFBRTtNQUNkLElBQUksQ0FBQ0MsV0FBVyxDQUNiOUQsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQUUrRCxJQUFJLEVBQUFMLDRFQUFBLEtBQUtMLE9BQU8sQ0FBQzFGLFFBQVEsRUFBRyxDQUFDLENBQUM7TUFBRyxDQUFDLENBQUMsQ0FDckRxRyxJQUFJLENBQUMsVUFBQ0MsVUFBVSxFQUFLO1FBQ3BCTCxLQUFJLENBQUNQLE9BQU8sQ0FBQzFGLFFBQVEsQ0FBQyxHQUFHc0csVUFBVSxHQUMvQkEsVUFBVSxDQUFDWixPQUFPLENBQUMxRixRQUFRLENBQUMsR0FBRyxDQUFDLEdBQ2hDLENBQUM7UUFFTDVLLElBQUksQ0FBQyxDQUFDO01BQ1IsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxNQUFNO01BQ0xBLElBQUksQ0FBQyxDQUFDO0lBQ1I7RUFDRixDQUFDLENBQUM7RUFFRnFRLE1BQU0sQ0FBQ08sR0FBRyxDQUFDLFlBQVk7SUFBQSxJQUFBdkosSUFBQSxHQUFBL0gsOEVBQUEsZUFBQUMsc0VBQUEsQ0FBRSxTQUFBRSxRQUFnQk8sSUFBSSxFQUFFbVIsSUFBSTtNQUFBLElBQUFELFVBQUEsRUFBQUUsU0FBQTtNQUFBLE9BQUE3UixzRUFBQSxVQUFBTSxTQUFBQyxRQUFBO1FBQUEsa0JBQUFBLFFBQUEsQ0FBQUMsSUFBQSxHQUFBRCxRQUFBLENBQUFFLElBQUE7VUFBQTtZQUFBRixRQUFBLENBQUFFLElBQUE7WUFBQSxPQUN4QixJQUFJLENBQUNpTixPQUFPLENBQ25DLENBQUMsQ0FBQyxFQUNGLENBQUMsQ0FBQyxFQUNGO2NBQUUrRCxJQUFJLEVBQUFMLDRFQUFBLEtBQUtMLE9BQU8sQ0FBQzFGLFFBQVEsRUFBRyxDQUFDLENBQUM7WUFBRyxDQUNyQyxDQUFDO1VBQUE7WUFKS3NHLFVBQVUsR0FBQXBSLFFBQUEsQ0FBQW9CLElBQUE7WUFNVmtRLFNBQVMsR0FBR0YsVUFBVSxHQUFHQSxVQUFVLENBQUNaLE9BQU8sQ0FBQzFGLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFFL0R1RyxJQUFJLENBQUNFLE9BQU8sQ0FBQyxVQUFDQyxHQUFHLEVBQUVDLEtBQUssRUFBSztjQUMzQkQsR0FBRyxDQUFDaEIsT0FBTyxDQUFDMUYsUUFBUSxDQUFDLEdBQUd3RyxTQUFTLEdBQUdHLEtBQUssR0FBRyxDQUFDO1lBQy9DLENBQUMsQ0FBQztZQUVGdlIsSUFBSSxDQUFDLENBQUM7VUFBQztVQUFBO1lBQUEsT0FBQUYsUUFBQSxDQUFBUyxJQUFBO1FBQUE7TUFBQSxHQUFBZCxPQUFBO0lBQUEsQ0FDUjtJQUFBLGlCQUFBZSxFQUFBLEVBQUFDLEdBQUE7TUFBQSxPQUFBNEcsSUFBQSxDQUFBM0csS0FBQSxPQUFBQyxTQUFBO0lBQUE7RUFBQSxJQUFDO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERPLElBQU1rTCxVQUFVLGdCQUFBM00seUVBQUEsQ0FDckIsU0FBQTJNLFdBQUF4RSxJQUFBLEVBQW9DO0VBQUEsSUFBdEJyRCxLQUFLLEdBQUFxRCxJQUFBLENBQUxyRCxLQUFLO0lBQUV3TixXQUFXLEdBQUFuSyxJQUFBLENBQVhtSyxXQUFXO0VBQUF2Uyw0RUFBQSxPQUFBNE0sVUFBQTtFQUM5QmpFLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNsQjdELEtBQUssRUFBTEEsS0FBSztJQUNMd04sV0FBVyxFQUFYQTtFQUNGLENBQUMsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONkI7QUFFekIsSUFBTTdILGdCQUFnQixHQUFHLElBQUlFLHdEQUFlLENBQ2pEO0VBQ0U0SCxJQUFJLEVBQUU7SUFDSnpILElBQUksRUFBRUMsTUFBTTtJQUNaeUgsT0FBTyxFQUFFO0VBQ1gsQ0FBQztFQUNEbkssS0FBSyxFQUFFO0lBQ0x5QyxJQUFJLEVBQUVDO0VBQ1IsQ0FBQztFQUNEMEgsR0FBRyxFQUFFO0lBQ0gzSCxJQUFJLEVBQUVDLE1BQU07SUFDWkMsUUFBUSxFQUFFO0VBQ1osQ0FBQztFQUNEMEgsUUFBUSxFQUFFO0lBQ1I1SCxJQUFJLEVBQUVDLE1BQU07SUFDWkMsUUFBUSxFQUFFO0VBQ1osQ0FBQztFQUNERixJQUFJLEVBQUU7SUFDSkEsSUFBSSxFQUFFQztFQUNSLENBQUM7RUFDRDRILElBQUksRUFBRTtJQUNKN0gsSUFBSSxFQUFFd0M7RUFDUjtBQUNGLENBQUMsRUFDRDtFQUNFbkksR0FBRyxFQUFFO0FBQ1AsQ0FDRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0IrQjtBQUV6QixJQUFNdUYsYUFBYSxHQUFHLElBQUlDLHdEQUFlLENBQzlDO0VBQ0U3RixLQUFLLEVBQUU7SUFDTGdHLElBQUksRUFBRUMsTUFBTTtJQUNaUSxJQUFJLEVBQUUsSUFBSTtJQUNWUCxRQUFRLEVBQUU7RUFDWixDQUFDO0VBQ0RzSCxXQUFXLEVBQUU7SUFDWHhILElBQUksRUFBRUM7RUFDUjtBQUNGLENBQUMsRUFDRDtFQUNFNUYsR0FBRyxFQUFFO0FBQ1AsQ0FDRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCaUM7QUFDRjtBQUV6QixTQUFleU4sa0JBQWtCQSxDQUFBO0VBQUEsT0FBQUMsbUJBQUEsQ0FBQXJSLEtBQUEsT0FBQUMsU0FBQTtBQUFBO0FBUXZDLFNBQUFvUixvQkFBQTtFQUFBQSxtQkFBQSxHQUFBelMsOEVBQUEsZUFBQUMsc0VBQUEsQ0FSTSxTQUFBRSxRQUFBO0lBQUEsT0FBQUYsc0VBQUEsVUFBQU0sU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBRSxJQUFBO1FBQUE7VUFBQUYsUUFBQSxDQUFBQyxJQUFBO1VBQUFELFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BRUc2Six1REFBZ0IsQ0FBQ29JLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxpQkFBaUIsQ0FBQztRQUFBO1VBQ3JEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztVQUFDdlMsUUFBQSxDQUFBRSxJQUFBO1VBQUE7UUFBQTtVQUFBRixRQUFBLENBQUFDLElBQUE7VUFBQUQsUUFBQSxDQUFBaUYsRUFBQSxHQUFBakYsUUFBQTtVQUVqQ3NTLE9BQU8sQ0FBQ2pPLEtBQUssQ0FBQywyQkFBMkIsRUFBQXJFLFFBQUEsQ0FBQWlGLEVBQU8sQ0FBQztVQUFDLE1BQUFqRixRQUFBLENBQUFpRixFQUFBO1FBQUE7UUFBQTtVQUFBLE9BQUFqRixRQUFBLENBQUFTLElBQUE7TUFBQTtJQUFBLEdBQUFkLE9BQUE7RUFBQSxDQUdyRDtFQUFBLE9BQUFzUyxtQkFBQSxDQUFBclIsS0FBQSxPQUFBQyxTQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNYK0I7QUFFaEMwQyw4Q0FBTSxDQUFDLENBQUM7QUFFUkEsOENBQU0sQ0FBQztFQUNMaVAsSUFBSSxFQUFFTCxLQUFzQyxHQUFHLFlBQVksR0FBRyxDQUFNO0VBQ3BFTyxRQUFRLEVBQUU7QUFDWixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDUEssSUFBTW5QLE1BQU0sR0FBRztFQUNwQmlELEdBQUcsRUFBRTtJQUNINkksU0FBUyxFQUFFOEMsT0FBTyxDQUFDQyxHQUFHLENBQUNPLGFBQWE7SUFDcEMzTSxZQUFZLEVBQUVtTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsaUJBQWlCO0lBQzNDM00sZUFBZSxFQUFFa00sT0FBTyxDQUFDQyxHQUFHLENBQUNTLHFCQUFxQjtJQUNsRDNNLGFBQWEsRUFBRWlNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVSxrQkFBa0I7SUFDN0MzTSxnQkFBZ0IsRUFBRWdNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVyxzQkFBc0I7SUFDcERoTSxrQkFBa0IsRUFBRW9MLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWSx1QkFBdUI7SUFDdkRsTSxxQkFBcUIsRUFBRXFMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYTtFQUNyQztBQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmlFO0FBQzlCO0FBRTdCLElBQU1HLFNBQVM7RUFBQSxJQUFBN0wsSUFBQSxHQUFBL0gsOEVBQUEsZUFBQUMsc0VBQUEsQ0FBRyxTQUFBRSxRQUFPMFQsV0FBVztJQUFBLElBQUFDLFdBQUE7SUFBQSxPQUFBN1Qsc0VBQUEsVUFBQU0sU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBRSxJQUFBO1FBQUE7VUFDbkNvVCxXQUFXLEdBQUdILGlFQUEwQixDQUFDO1lBQzdDN1EsT0FBTyxFQUFFLE9BQU87WUFDaEJrUixJQUFJLEVBQUU7Y0FDSi9SLElBQUksRUFBRTBRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDcUIsU0FBUztjQUMzQkMsSUFBSSxFQUFFdkIsT0FBTyxDQUFDQyxHQUFHLENBQUN1QjtZQUNwQjtVQUNGLENBQUMsQ0FBQztVQUVGTCxXQUFXLENBQUNNLFFBQVEsQ0FBQ1AsV0FBVyxFQUFFLFVBQUNoUCxLQUFLLEVBQUV3UCxJQUFJLEVBQUs7WUFDakQsSUFBSXhQLEtBQUssRUFBRTtjQUNUaU8sT0FBTyxDQUFDQyxHQUFHLENBQUNsTyxLQUFLLENBQUM7Y0FDbEIsTUFBTSxJQUFJNk8sMkVBQVEsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUM7WUFDbEQsQ0FBQyxNQUFNO2NBQ0xaLE9BQU8sQ0FBQ0MsR0FBRyxnQkFBQXZQLE1BQUEsQ0FBZ0I2USxJQUFJLENBQUNoVSxRQUFRLENBQUUsQ0FBQztZQUM3QztVQUNGLENBQUMsQ0FBQztRQUFDO1FBQUE7VUFBQSxPQUFBRyxRQUFBLENBQUFTLElBQUE7TUFBQTtJQUFBLEdBQUFkLE9BQUE7RUFBQSxDQUNKO0VBQUEsZ0JBakJZeVQsU0FBU0EsQ0FBQTFTLEVBQUE7SUFBQSxPQUFBNkcsSUFBQSxDQUFBM0csS0FBQSxPQUFBQyxTQUFBO0VBQUE7QUFBQSxHQWlCckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkQ7QUFDeUM7QUFDRTtBQUUzQyxJQUFNMlAsT0FBTyxHQUFHO0VBQ2R1RCxVQUFVLEVBQUU7SUFDVkMsT0FBTyxFQUFFLE9BQU87SUFDaEJILElBQUksRUFBRTtNQUNKcE0sS0FBSyxFQUFFLDBCQUEwQjtNQUNqQ3dNLE9BQU8sRUFBRSxPQUFPO01BQ2hCQyxXQUFXLEVBQUU7SUFDZixDQUFDO0lBQ0RDLE9BQU8sRUFBRSxDQUNQO01BQ0V0QyxHQUFHLEVBQUU7SUFDUCxDQUFDO0VBRUwsQ0FBQztFQUNEdUMsSUFBSSxFQUFFLENBQUMsZ0JBQWdCO0FBQ3pCLENBQUM7QUFFRCxJQUFNeEcsV0FBVyxHQUFHa0csb0RBQVksQ0FBQ3RELE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQk87QUFDSTtBQUNKO0FBQ0k7QUFFTDtBQUV4QyxJQUFNNkQsSUFBSTtFQUFBLElBQUE5TSxJQUFBLEdBQUEvSCw4RUFBQSxlQUFBQyxzRUFBQSxDQUFHLFNBQUFFLFFBQUE7SUFBQSxJQUFBMlUsVUFBQSxFQUFBQyxVQUFBO0lBQUEsT0FBQTlVLHNFQUFBLFVBQUFNLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtRQUFBO1VBQ1pvVSxVQUFVLEdBQUcsSUFBSXhILDZEQUFVLENBQUM5Syx1REFBUyxDQUFDYyxHQUFHLENBQUNaLHlEQUFVLENBQUNxRyxVQUFVLENBQUMsQ0FBQztVQUNqRWdNLFVBQVUsR0FBRyxJQUFJdEosNkRBQVUsQ0FBQ2pKLHVEQUFTLENBQUNjLEdBQUcsQ0FBQ29JLHlEQUFVLENBQUMzQyxVQUFVLENBQUMsQ0FBQztVQUFBdkksUUFBQSxDQUFBRSxJQUFBO1VBQUEsT0FFakVxVSxVQUFVLENBQUN6SSxXQUFXLENBQUMsQ0FBQztRQUFBO1VBQUE5TCxRQUFBLENBQUFFLElBQUE7VUFBQSxPQUN4QnNVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUNILFVBQVUsQ0FBQ2xILFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBcE4sUUFBQSxDQUFBUyxJQUFBO01BQUE7SUFBQSxHQUFBZCxPQUFBO0VBQUEsQ0FDOUM7RUFBQSxnQkFOWTBVLElBQUlBLENBQUE7SUFBQSxPQUFBOU0sSUFBQSxDQUFBM0csS0FBQSxPQUFBQyxTQUFBO0VBQUE7QUFBQSxHQU1oQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBLElBZ0JNNlQsV0FBVztFQUNmLFNBQUFBLFlBQUEsRUFBYztJQUFBdlYsNEVBQUEsT0FBQXVWLFdBQUE7SUFDWixJQUFJLENBQUNDLFlBQVksR0FBRyxDQUFDLENBQUM7RUFDeEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTEUsT0FBQXZWLHlFQUFBLENBQUFzVixXQUFBO0lBQUFyVixHQUFBO0lBQUFDLEtBQUEsRUFNQSxTQUFBYSxTQUFTeVUsSUFBSSxFQUFFRCxZQUFZLEVBQUVFLElBQUksRUFBRTtNQUNqQyxJQUNFLE9BQU9ELElBQUksS0FBSyxRQUFRLElBQ3hCLENBQUNFLEtBQUssQ0FBQ0MsT0FBTyxDQUFDSixZQUFZLENBQUMsSUFDNUIsT0FBT0UsSUFBSSxLQUFLLFVBQVUsRUFDMUI7UUFDQSxNQUFNLElBQUlwRSxLQUFLLENBQUMsa0JBQWtCLENBQUM7TUFDckM7TUFFQSxJQUFJLENBQUNrRSxZQUFZLENBQUNDLElBQUksQ0FBQyxHQUFHO1FBQ3hCRCxZQUFZLEVBQVpBLFlBQVk7UUFDWkUsSUFBSSxFQUFKQTtNQUNGLENBQUM7SUFDSDs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQXhWLEdBQUE7SUFBQUMsS0FBQSxFQUtBLFNBQUF3RCxJQUFJOFIsSUFBSSxFQUFFO01BQUEsSUFBQTdELEtBQUE7TUFDUixJQUFJLENBQUMsSUFBSSxDQUFDNEQsWUFBWSxDQUFDQyxJQUFJLENBQUMsRUFBRTtRQUM1QixNQUFNLElBQUluRSxLQUFLLDBCQUFBek4sTUFBQSxDQUEwQjRSLElBQUksQ0FBRSxDQUFDO01BQ2xEO01BRUEsSUFBQUkscUJBQUEsR0FBK0IsSUFBSSxDQUFDTCxZQUFZLENBQUNDLElBQUksQ0FBQztRQUE5Q0QsWUFBWSxHQUFBSyxxQkFBQSxDQUFaTCxZQUFZO1FBQUVFLElBQUksR0FBQUcscUJBQUEsQ0FBSkgsSUFBSTtNQUUxQixJQUFNSSxxQkFBcUIsR0FBR04sWUFBWSxDQUFDakosR0FBRyxDQUFDLFVBQUN3SixVQUFVO1FBQUEsT0FDeERuRSxLQUFJLENBQUNqTyxHQUFHLENBQUNvUyxVQUFVLENBQUM7TUFBQSxDQUN0QixDQUFDO01BRUQsT0FBT0wsSUFBSSxDQUFBalUsS0FBQSxTQUFBdVUsK0VBQUEsQ0FBSUYscUJBQXFCLEVBQUM7SUFDdkM7RUFBQztBQUFBO0FBR0ksSUFBTWpULFNBQVMsR0FBRyxJQUFJMFMsV0FBVyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzlEZDtBQUNJO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZvQjtBQUVTO0FBRTFDLFNBQVN4RyxzQkFBc0JBLENBQUNqTCxHQUFHLEVBQUVDLEdBQUcsRUFBRWhELElBQUksRUFBRTtFQUM3RGdELEdBQUcsQ0FBQzdDLE9BQU8sR0FBRyxVQUFDK1UsS0FBSyxFQUFLO0lBQ3ZCbFMsR0FBRyxDQUNBM0MsTUFBTSxDQUFDNlUsS0FBSyxDQUFDN1UsTUFBTSxJQUFJeEIsMERBQVcsQ0FBQzhDLEVBQUUsQ0FBQyxDQUN0Q2dOLElBQUksQ0FBQ3JMLGlFQUFZLENBQUNuRCxPQUFPLENBQUMrVSxLQUFLLENBQUMsQ0FBQztFQUN0QyxDQUFDO0VBRURsUyxHQUFHLENBQUNtQixLQUFLLEdBQUcsVUFBQytRLEtBQUssRUFBSztJQUNyQmxTLEdBQUcsQ0FDQTNDLE1BQU0sQ0FBQzZVLEtBQUssQ0FBQzdVLE1BQU0sSUFBSXhCLDBEQUFXLENBQUMwRyxXQUFXLENBQUMsQ0FDL0NvSixJQUFJLENBQUNyTCxpRUFBWSxDQUFDYSxLQUFLLENBQUMrUSxLQUFLLENBQUMsQ0FBQztFQUNwQyxDQUFDO0VBRURsVixJQUFJLENBQUMsQ0FBQztBQUNSOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEI2RDtBQUNLO0FBRWxFLElBQU1pTyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXNCQSxDQUFJOUosS0FBSyxFQUFFekUsT0FBTyxFQUFFQyxRQUFRLEVBQUVLLElBQUksRUFBSztFQUNqRSxJQUFJbUUsS0FBSyxZQUFZNk8sMkVBQVEsRUFBRTtJQUM3QixPQUFPclQsUUFBUSxDQUFDVSxNQUFNLENBQUM4RCxLQUFLLENBQUNnUixVQUFVLElBQUksR0FBRyxDQUFDLENBQUN4RyxJQUFJLENBQUM7TUFDbkR4TyxPQUFPLEVBQUUsS0FBSztNQUNkQyxPQUFPLEVBQUUrRCxLQUFLLENBQUMvRDtJQUNqQixDQUFDLENBQUM7RUFDSjtFQUVBSixJQUFJLENBQUMsQ0FBQztFQUVOLElBQUltRSxLQUFLLFlBQVliLHNFQUFZLEVBQUU7SUFDakMsT0FBTzNELFFBQVEsQ0FBQ3dFLEtBQUssQ0FBQ0EsS0FBSyxDQUFDO0VBQzlCO0VBRUEsT0FBT3hFLFFBQVEsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDc08sSUFBSSxDQUFDO0lBQy9CeE8sT0FBTyxFQUFFLEtBQUs7SUFDZEMsT0FBTyxFQUFFK0QsS0FBSyxDQUFDL0QsT0FBTyxJQUFJO0VBQzVCLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxpRUFBZTZOLHNCQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCNEI7QUFFMUQsSUFBTTNLLFlBQVk7RUFDdkIsU0FBQUEsYUFBWXhDLElBQUksRUFBRTtJQUFBN0IsNEVBQUEsT0FBQXFFLFlBQUE7SUFDaEIsSUFBSSxDQUFDbkQsT0FBTyxHQUFHVyxJQUFJLENBQUNYLE9BQU87SUFDM0IsSUFBSSxDQUFDRSxNQUFNLEdBQUdTLElBQUksQ0FBQ1QsTUFBTTtJQUN6QixJQUFJLENBQUNELE9BQU8sR0FBR1UsSUFBSSxDQUFDVixPQUFPO0lBQzNCLElBQUksQ0FBQ1UsSUFBSSxHQUFHQSxJQUFJLENBQUNBLElBQUk7SUFDckIsSUFBSSxDQUFDdVUsT0FBTyxHQUFHdlUsSUFBSSxDQUFDdVUsT0FBTztFQUM3QjtFQUFDLE9BQUFuVyx5RUFBQSxDQUFBb0UsWUFBQTtJQUFBbkUsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWUsUUFBQWtILElBQUEsRUFBMkQ7TUFBQSxJQUFBaU8sV0FBQSxHQUFBak8sSUFBQSxDQUExQ2hILE1BQU07UUFBTkEsTUFBTSxHQUFBaVYsV0FBQSxjQUFHelcsMERBQVcsQ0FBQzhDLEVBQUUsR0FBQTJULFdBQUE7UUFBRWxWLE9BQU8sR0FBQWlILElBQUEsQ0FBUGpILE9BQU87UUFBRVUsSUFBSSxHQUFBdUcsSUFBQSxDQUFKdkcsSUFBSTtNQUNyRCxPQUFPLElBQUl3QyxZQUFZLENBQUM7UUFDdEJuRCxPQUFPLEVBQUUsSUFBSTtRQUNiRSxNQUFNLEVBQU5BLE1BQU07UUFDTkQsT0FBTyxFQUFFQSxPQUFPLElBQUlnVixrRUFBZSxDQUFDL1UsTUFBTSxDQUFDO1FBQzNDUyxJQUFJLEVBQUpBO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBM0IsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQStFLE1BQUFvUixLQUFBLEVBQTRFO01BQUEsSUFBN0RuVixPQUFPLEdBQUFtVixLQUFBLENBQVBuVixPQUFPO1FBQUFvVixZQUFBLEdBQUFELEtBQUEsQ0FBRWxWLE1BQU07UUFBTkEsTUFBTSxHQUFBbVYsWUFBQSxjQUFHM1csMERBQVcsQ0FBQzBHLFdBQVcsR0FBQWlRLFlBQUE7UUFBQUMsYUFBQSxHQUFBRixLQUFBLENBQUVGLE9BQU87UUFBUEEsT0FBTyxHQUFBSSxhQUFBLGNBQUcsSUFBSSxHQUFBQSxhQUFBO01BQ3RFLE9BQU8sSUFBSW5TLFlBQVksQ0FBQztRQUN0Qm5ELE9BQU8sRUFBRSxLQUFLO1FBQ2RFLE1BQU0sRUFBTkEsTUFBTTtRQUNORCxPQUFPLEVBQUVBLE9BQU8sSUFBSWdWLGtFQUFlLENBQUMvVSxNQUFNLENBQUM7UUFDM0NnVixPQUFPLEVBQVBBO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFBQztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQm1EO0FBRS9DLElBQU10VCxZQUFZO0VBQUEsU0FBQUEsYUFBQTtJQUFBOUMsNEVBQUEsT0FBQThDLFlBQUE7RUFBQTtFQUFBLE9BQUE3Qyx5RUFBQSxDQUFBNkMsWUFBQTtJQUFBNUMsR0FBQTtJQUFBQyxLQUFBO01BQUEsSUFBQXNXLHNCQUFBLEdBQUFwVyw4RUFBQSxlQUFBQyxzRUFBQSxDQUN2QixTQUFBRSxRQUE0QnVFLEtBQUssRUFBRU8sSUFBSSxFQUFFZ0QsS0FBSztRQUFBLE9BQUFoSSxzRUFBQSxVQUFBTSxTQUFBQyxRQUFBO1VBQUEsa0JBQUFBLFFBQUEsQ0FBQUMsSUFBQSxHQUFBRCxRQUFBLENBQUFFLElBQUE7WUFBQTtjQUFBLE9BQUFGLFFBQUEsQ0FBQXFGLE1BQUEsV0FDckMrTixtRUFBUyxDQUFDO2dCQUNmeUMsSUFBSSxFQUFFMUQsT0FBTyxDQUFDQyxHQUFHLENBQUMwRCxTQUFTO2dCQUMzQkMsRUFBRSxFQUFFN1IsS0FBSztnQkFDVDhSLE9BQU8sRUFBRXZPLEtBQUs7Z0JBQ2R3TyxJQUFJLEVBQUV4UjtjQUNSLENBQUMsQ0FBQztZQUFBO1lBQUE7Y0FBQSxPQUFBekUsUUFBQSxDQUFBUyxJQUFBO1VBQUE7UUFBQSxHQUFBZCxPQUFBO01BQUEsQ0FDSDtNQUFBLFNBQUFpRixzQkFBQWxFLEVBQUEsRUFBQUMsR0FBQSxFQUFBVSxHQUFBO1FBQUEsT0FBQXVVLHNCQUFBLENBQUFoVixLQUFBLE9BQUFDLFNBQUE7TUFBQTtNQUFBLE9BQUErRCxxQkFBQTtJQUFBO0VBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZJLElBQU1zTyxRQUFRLDBCQUFBZ0QsTUFBQTtFQUNuQixTQUFBaEQsU0FBWTVTLE9BQU8sRUFBRStVLFVBQVUsRUFBRTtJQUFBLElBQUF0RSxLQUFBO0lBQUE1Uiw0RUFBQSxPQUFBK1QsUUFBQTtJQUMvQm5DLEtBQUEsR0FBQWxJLFVBQUEsT0FBQXFLLFFBQUEsR0FBTTVTLE9BQU87SUFDYnlRLEtBQUEsQ0FBS3NFLFVBQVUsR0FBR0EsVUFBVTtJQUFDLE9BQUF0RSxLQUFBO0VBQy9CO0VBQUNqSSxzRUFBQSxDQUFBb0ssUUFBQSxFQUFBZ0QsTUFBQTtFQUFBLE9BQUE5Vyx5RUFBQSxDQUFBOFQsUUFBQTtBQUFBLGdCQUFBaUQsNkVBQUEsQ0FKMkIxRixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E1QixJQUFNL0gsY0FBYztFQUN6QixTQUFBQSxlQUFZNkIsS0FBSyxFQUFFO0lBQUFwTCw0RUFBQSxPQUFBdUosY0FBQTtJQUNqQixJQUFJLENBQUM2QixLQUFLLEdBQUdBLEtBQUs7RUFDcEI7RUFBQyxPQUFBbkwseUVBQUEsQ0FBQXNKLGNBQUE7SUFBQXJKLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFxRixPQUFPM0QsSUFBSSxFQUFFO01BQ1gsT0FBTyxJQUFJLENBQUN1SixLQUFLLENBQUM1RixNQUFNLENBQUMzRCxJQUFJLENBQUM7SUFDaEM7RUFBQztJQUFBM0IsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQW1ILE9BQU8rRyxFQUFFLEVBQUV4TSxJQUFJLEVBQUU7TUFDZixPQUFPLElBQUksQ0FBQ3VKLEtBQUssQ0FBQzZMLGlCQUFpQixDQUFDNUksRUFBRSxFQUFFeE0sSUFBSSxFQUFFO1FBQzVDLE9BQUs7TUFDUCxDQUFDLENBQUM7SUFDSjtFQUFDO0lBQUEzQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBcU8sUUFBT0gsRUFBRSxFQUFFO01BQ1QsT0FBTyxJQUFJLENBQUNqRCxLQUFLLENBQUM4TCxpQkFBaUIsQ0FBQzdJLEVBQUUsQ0FBQztJQUN6QztFQUFDO0lBQUFuTyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBbU8sU0FBU0QsRUFBRSxFQUFFO01BQ1gsT0FBTyxJQUFJLENBQUNqRCxLQUFLLENBQUNrRCxRQUFRLENBQUNELEVBQUUsQ0FBQztJQUNoQztFQUFDO0lBQUFuTyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBZ0ssUUFBQSxFQUFVO01BQ1IsT0FBTyxJQUFJLENBQUNpQixLQUFLLENBQUNwQyxJQUFJLENBQUMsQ0FBQztJQUMxQjtFQUFDO0lBQUE5SSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBNk4sUUFBUW1KLEtBQUssRUFBRTtNQUNiLE9BQU8sSUFBSSxDQUFDL0wsS0FBSyxDQUFDNEMsT0FBTyxDQUFDbUosS0FBSyxDQUFDO0lBQ2xDO0VBQUM7SUFBQWpYLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUE2SSxLQUFLbU8sS0FBSyxFQUFFO01BQ1YsT0FBTyxJQUFJLENBQUMvTCxLQUFLLENBQUNwQyxJQUFJLENBQUNtTyxLQUFLLENBQUM7SUFDL0I7RUFBQztJQUFBalgsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWlYLE1BQU1ELEtBQUssRUFBRTtNQUNYLE9BQU8sSUFBSSxDQUFDL0wsS0FBSyxDQUFDaU0sY0FBYyxDQUFDRixLQUFLLENBQUM7SUFDekM7RUFBQztJQUFBalgsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQW1YLFVBQVVDLFFBQVEsRUFBRTtNQUNsQixPQUFPLElBQUksQ0FBQ25NLEtBQUssQ0FBQ2tNLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDO0lBQ3ZDO0VBQUM7SUFBQXJYLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF1TSxXQUFXN0ssSUFBSSxFQUFFO01BQ2YsT0FBTyxJQUFJLENBQUN1SixLQUFLLENBQUNvTSxVQUFVLENBQUMzVixJQUFJLENBQUM7SUFDcEM7RUFBQztJQUFBM0IsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQXNYLFdBQVdOLEtBQUssRUFBRXRWLElBQUksRUFBRTtNQUN0QixPQUFPLElBQUksQ0FBQ3VKLEtBQUssQ0FBQ3FNLFVBQVUsQ0FBQ04sS0FBSyxFQUFFdFYsSUFBSSxDQUFDO0lBQzNDO0VBQUM7SUFBQTNCLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF1WCxVQUFVQyxVQUFVLEVBQUU7TUFDcEIsT0FBTyxJQUFJLENBQUN2TSxLQUFLLENBQUNzTSxTQUFTLENBQUNDLFVBQVUsQ0FBQztJQUN6QztFQUFDO0lBQUF6WCxHQUFBO0lBQUFDLEtBQUE7TUFBQSxJQUFBeVgsT0FBQSxHQUFBdlgsOEVBQUEsZUFBQUMsc0VBQUEsQ0FFRCxTQUFBRSxRQUFhMlcsS0FBSyxFQUFFdFYsSUFBSTtRQUFBLElBQUFnVyxRQUFBO1FBQUEsT0FBQXZYLHNFQUFBLFVBQUFNLFNBQUFDLFFBQUE7VUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtZQUFBO2NBQUFGLFFBQUEsQ0FBQUUsSUFBQTtjQUFBLE9BQ0MsSUFBSSxDQUFDaU4sT0FBTyxDQUFDbUosS0FBSyxDQUFDO1lBQUE7Y0FBcENVLFFBQVEsR0FBQWhYLFFBQUEsQ0FBQW9CLElBQUE7Y0FBQSxJQUVUNFYsUUFBUTtnQkFBQWhYLFFBQUEsQ0FBQUUsSUFBQTtnQkFBQTtjQUFBO2NBQUEsT0FBQUYsUUFBQSxDQUFBcUYsTUFBQSxXQUFTLElBQUksQ0FBQ1YsTUFBTSxDQUFDM0QsSUFBSSxDQUFDO1lBQUE7Y0FBQSxPQUFBaEIsUUFBQSxDQUFBcUYsTUFBQSxXQUVoQyxJQUFJLENBQUNvQixNQUFNLENBQUN1USxRQUFRLENBQUN6UyxHQUFHLEVBQUV2RCxJQUFJLENBQUM7WUFBQTtZQUFBO2NBQUEsT0FBQWhCLFFBQUEsQ0FBQVMsSUFBQTtVQUFBO1FBQUEsR0FBQWQsT0FBQTtNQUFBLENBQ3ZDO01BQUEsU0FBQXNYLE9BQUF2VyxFQUFBLEVBQUFDLEdBQUE7UUFBQSxPQUFBb1csT0FBQSxDQUFBblcsS0FBQSxPQUFBQyxTQUFBO01BQUE7TUFBQSxPQUFBb1csTUFBQTtJQUFBO0VBQUE7QUFBQTs7Ozs7Ozs7OztBQzdESDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOa0M7QUFDSjtBQUNNO0FBRVo7QUFDcUM7QUFDdkI7QUFFdEMsSUFBTUUsTUFBTSxHQUFHRCxrREFBWSxDQUFDOUksNENBQUcsQ0FBQztBQUNoQyxJQUFRZ0osSUFBSSxHQUFLakYsT0FBTyxDQUFDQyxHQUFHLENBQXBCZ0YsSUFBSTtBQUVaNVgsOEVBQUEsZUFBQUMsc0VBQUEsQ0FBQyxTQUFBc0IsU0FBQTtFQUFBLE9BQUF0QixzRUFBQSxVQUFBd0IsVUFBQUMsU0FBQTtJQUFBLGtCQUFBQSxTQUFBLENBQUFqQixJQUFBLEdBQUFpQixTQUFBLENBQUFoQixJQUFBO01BQUE7UUFBQWdCLFNBQUEsQ0FBQWhCLElBQUE7UUFBQSxPQUNPOFIsMEVBQWtCLENBQUMsQ0FBQztNQUFBO1FBQUE5USxTQUFBLENBQUFoQixJQUFBO1FBQUEsT0FDcEJtVSxtREFBSSxDQUFDLENBQUM7TUFBQTtRQUNaOEMsTUFBTSxDQUFDRSxNQUFNLENBQUNELElBQUksZUFBQTVYLDhFQUFBLGVBQUFDLHNFQUFBLENBQUUsU0FBQUUsUUFBQTtVQUFBLE9BQUFGLHNFQUFBLFVBQUFNLFNBQUFDLFFBQUE7WUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtjQUFBO2dCQUNsQm9TLE9BQU8sQ0FBQ0MsR0FBRyx3Q0FBQXZQLE1BQUEsQ0FBd0NvVSxJQUFJLENBQUUsQ0FBQztjQUFDO2NBQUE7Z0JBQUEsT0FBQXBYLFFBQUEsQ0FBQVMsSUFBQTtZQUFBO1VBQUEsR0FBQWQsT0FBQTtRQUFBLENBQzVELEdBQUM7TUFBQztNQUFBO1FBQUEsT0FBQXVCLFNBQUEsQ0FBQVQsSUFBQTtJQUFBO0VBQUEsR0FBQU0sUUFBQTtBQUFBLENBQ0osR0FBRSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvYXV0aC9hdXRoLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL2F1dGgvYXV0aC5kaS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvYXV0aC9hdXRoLnJvdXRlLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9hdXRoL2F1dGguc2VydmljZS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvYXV0aC9kdG8vYXV0aC5kdG8uanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL2F1dGgvZHRvL3Rva2VuLmR0by5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvZm9vdGVyL2R0by9mb290ZXIuZHRvLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9mb290ZXIvZm9vdGVyLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL2Zvb3Rlci9mb290ZXIuZGkuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL2Zvb3Rlci9mb290ZXIucmVwb3NpdG95LmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9mb290ZXIvZm9vdGVyLnJvdXRlLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9mb290ZXIvZm9vdGVyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL2Zvb3Rlci9tb2RlbC9mb290ZXIubW9kZWwuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL3JvbGUvbW9kZWwvcm9sZS5tb2RlbC5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvcm9sZS9yb2xlLmRpLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9yb2xlL3JvbGUucmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvcm9sZS9yb2xlLnNlZWRlci5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvdXNlci9kdG8vdXNlci5kdG8uanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL3VzZXIvbW9kZWwvZW1haWwtdmVyaWZpY2F0aW9uLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS91c2VyL21vZGVsL3JlZnJlc2gtdG9rZW4uanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL3VzZXIvbW9kZWwvdXNlci5tb2RlbC5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvdXNlci91c2VyLmRpLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS91c2VyL3VzZXIucmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvdXNlci91c2VyLnNlZWRlci5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvdXNlci91c2VyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvbW1vbi9jb25zdGFudHMvYXBpLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvbW1vbi9jb25zdGFudHMvcm9sZS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb21tb24vaGVscGVycy9nZW5lcmF0ZS10b2tlbi5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb21tb24vaGVscGVycy9oYXNoLXBhc3N3b3JkLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvbW1vbi9oZWxwZXJzL3ZlcmlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb21tb24vbW9uZ29vc2UvcGx1Z2lucy9hdXRvLWluY3JlbWVudC5wbHVnaW4uanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29tbW9uL3NjaGVtYS9kdG8vY29udGFjdC5kdG8uanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29tbW9uL3NjaGVtYS9tb2RlbC9hc3NldC1tb2RlbC5zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29tbW9uL3NjaGVtYS9tb2RlbC9jb250YWN0LW1vZGVsLnNjaGVtYS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL2NvbmZpZy9kYi5jb25maWcuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29yZS9jb25maWcvZW52LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL2NvbmZpZy9qd3QuY29uZmlnLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvcmUvY29uZmlnL21haWwuY29uZmlnLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvcmUvY29uZmlnL3N3YWdnZXIuY29uZmlnLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvcmUvZGIvc2VlZC5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL2RpL2RpLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL2RpL2RpLWdsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29yZS9taWRkbGV3YXJlL2Jhc2UtcmVzcG9uc2UubWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL21pZGRsZXdhcmUvZXJyb3ItaGFuZGxlci1taWRkbGV3YXJlLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvcmUvcmVzcG9uc2UvYmFzZS1yZXNwb25zZS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9zZXJ2aWNlcy9lbWFpbC9lbWFpbC5zZXJ2aWNlLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL3NoYXJlZC9lcnJvci1yZXNwb25zZS9lcnJvci1yZXNwb25zZS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9zaGFyZWQvcmVwb3NpdG9yeS9iYXNlLnJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwTmF0aXZlU3VwZXJcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcImNvb2tpZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcImNvcnNcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudlwiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzcy1hc3luYy1lcnJvcnNcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3MtcmF0ZS1saW1pdFwiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiaHR0cC1zdGF0dXMtY29kZXNcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIm5vZGVtYWlsZXJcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcInN3YWdnZXItanNkb2NcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcInN3YWdnZXItdWktZXhwcmVzc1wiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiaHR0cFwiIiwid2VicGFjazovL2NmLXdzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NmLXdzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NmLXdzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jZi13cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NmLXdzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvc2VydmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmltcG9ydCB7IEF1dGhEdG8gfSBmcm9tIFwiLi9kdG8vYXV0aC5kdG9cIjtcblxuZXhwb3J0IGNsYXNzIEF1dGhDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoYXV0aFNlcnZpY2UpIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlID0gYXV0aFNlcnZpY2U7XG4gIH1cblxuICBhc3luYyByZWdpc3RlcihyZXF1ZXN0LCByZXNwb25zZSkge1xuICAgIGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UucmVnaXN0ZXIocmVxdWVzdC5ib2R5KTtcblxuICAgIHJlc3BvbnNlLnN1Y2Nlc3Moe1xuICAgICAgbWVzc2FnZTogXCJSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bC4gUGxlYXNlIHZlcmlmeSB5b3VyIGVtYWlsLlwiLFxuICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5DUkVBVEVELFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5RW1haWwocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS52ZXJpZnlFbWFpbChyZXF1ZXN0LmJvZHkpO1xuXG4gICAgcmVzcG9uc2Uuc3VjY2Vzcyh7XG4gICAgICBtZXNzYWdlOiBcIkVtYWlsIHZlcmlmaWVkIHN1Y2Nlc3NmdWxseS5cIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuQ1JFQVRFRCxcbiAgICAgIGRhdGE6IG5ldyBBdXRoRHRvKGRhdGEpLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgbG9naW4ocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5sb2dpbihyZXF1ZXN0LmJvZHkpO1xuXG4gICAgcmVzcG9uc2Uuc3VjY2Vzcyh7XG4gICAgICBtZXNzYWdlOiBcIlVzZXIgTG9naW4gc3VjY2Vzc2Z1bFwiLFxuICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5PSyxcbiAgICAgIGRhdGE6IG5ldyBBdXRoRHRvKHVzZXIpLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiQC9jb3JlL2RpL2RpLWNvbnRhaW5lclwiO1xuaW1wb3J0IHsgRW1haWxTZXJ2aWNlIH0gZnJvbSBcIkAvc2VydmljZXMvZW1haWwvZW1haWwuc2VydmljZVwiO1xuXG5pbXBvcnQgeyB1c2VyRElLZXlzIH0gZnJvbSBcIi4uL3VzZXIvdXNlci5kaVwiO1xuaW1wb3J0IHsgQXV0aENvbnRyb2xsZXIgfSBmcm9tIFwiLi9hdXRoLmNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4vYXV0aC5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoRElLZXlzID0ge1xuICBjb250cm9sbGVyOiBcImF1dGgtY29udHJvbGxlclwiLFxuICBzZXJ2aWNlOiBcImF1dGgtc2VydmljZVwiLFxuICBlbWFpbFNlcnZpY2U6IFwiZW1haWwtc2VydmljZVwiLFxufTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKGF1dGhESUtleXMuZW1haWxTZXJ2aWNlLCBbXSwgKCkgPT4gbmV3IEVtYWlsU2VydmljZSgpKTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKFxuICBhdXRoRElLZXlzLnNlcnZpY2UsXG4gIFt1c2VyRElLZXlzLnNlcnZpY2UsIGF1dGhESUtleXMuZW1haWxTZXJ2aWNlXSxcbiAgKHVzZXJTZXJ2aWNlLCBlbWFpbFNlcnZpY2UpID0+IG5ldyBBdXRoU2VydmljZSh1c2VyU2VydmljZSwgZW1haWxTZXJ2aWNlKSxcbik7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgYXV0aERJS2V5cy5jb250cm9sbGVyLFxuICBbYXV0aERJS2V5cy5zZXJ2aWNlXSxcbiAgKGF1dGhTZXJ2aWNlKSA9PiBuZXcgQXV0aENvbnRyb2xsZXIoYXV0aFNlcnZpY2UpLFxuKTtcbiIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCJAL2NvcmUvZGkvZGktY29udGFpbmVyXCI7XG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuXG5pbXBvcnQgeyBhdXRoRElLZXlzIH0gZnJvbSBcIi4vYXV0aC5kaVwiO1xuXG5jb25zdCBhdXRoUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuY29uc3QgcHJlZml4ID0gXCIvYXV0aFwiO1xuXG5jb25zdCBhdXRoQ29udHJvbGxlciA9IGNvbnRhaW5lci5nZXQoYXV0aERJS2V5cy5jb250cm9sbGVyKTtcblxuYXV0aFJvdXRlci5wb3N0KGAke3ByZWZpeH0vbG9naW5gLCAocmVxLCByZXMpID0+XG4gIGF1dGhDb250cm9sbGVyLmxvZ2luKHJlcSwgcmVzKSxcbik7XG5cbmF1dGhSb3V0ZXIucG9zdChgJHtwcmVmaXh9L3ZlcmlmeS1lbWFpbGAsIChyZXEsIHJlcykgPT5cbiAgYXV0aENvbnRyb2xsZXIudmVyaWZ5RW1haWwocmVxLCByZXMpLFxuKTtcblxuYXV0aFJvdXRlci5wb3N0KGAke3ByZWZpeH0vcmVnaXN0ZXJgLCAocmVxLCByZXMpID0+XG4gIGF1dGhDb250cm9sbGVyLnJlZ2lzdGVyKHJlcSwgcmVzKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhSb3V0ZXI7XG4iLCJpbXBvcnQgeyBnZW5lcmF0ZVRva2VuIH0gZnJvbSBcIkAvY29tbW9uL2hlbHBlcnMvZ2VuZXJhdGUtdG9rZW5cIjtcbmltcG9ydCB7IGNvbXBhcmVQYXNzd29yZCB9IGZyb20gXCJAL2NvbW1vbi9oZWxwZXJzL2hhc2gtcGFzc3dvcmRcIjtcbmltcG9ydCB7XG4gIGdlbmVyYXRlVmVyaWZpY2F0aW9uQ29kZSxcbiAgZ2V0VmVyaWZpY2F0aW9uQ29kZUV4cGlyeSxcbn0gZnJvbSBcIkAvY29tbW9uL2hlbHBlcnMvdmVyaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiQC9jb3JlL2NvbmZpZy9qd3QuY29uZmlnXCI7XG5pbXBvcnQgeyBCYXNlUmVzcG9uc2UgfSBmcm9tIFwiQC9jb3JlL3Jlc3BvbnNlL2Jhc2UtcmVzcG9uc2VcIjtcbmltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHVzZXJTZXJ2aWNlLCBlbWFpbFNlcnZpY2UpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlID0gdXNlclNlcnZpY2U7XG4gICAgdGhpcy5lbWFpbFNlcnZpY2UgPSBlbWFpbFNlcnZpY2U7XG4gIH1cblxuICBhc3luYyByZWdpc3RlcihhdXRoUmVnaXN0ZXJEdG8pIHtcbiAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmZpbmRCeUVtYWlsKFxuICAgICAgYXV0aFJlZ2lzdGVyRHRvLmNvbnRhY3QuZW1haWwsXG4gICAgKTtcblxuICAgIGlmIChleGlzdGluZ1VzZXIgJiYgZXhpc3RpbmdVc2VyLmVtYWlsVmVyaWZpY2F0aW9uPy52ZXJpZmllZCkge1xuICAgICAgdGhyb3cgbmV3IEJhc2VSZXNwb25zZS5lcnJvcih7XG4gICAgICAgIG1lc3NhZ2U6IFwiRW1haWwgaXMgYWxyZWFkeSBpbiB1c2VcIixcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5DT05GTElDVCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChleGlzdGluZ1VzZXIgJiYgIWV4aXN0aW5nVXNlci5lbWFpbFZlcmlmaWNhdGlvbj8udmVyaWZpZWQpIHtcbiAgICAgIGF3YWl0IHRoaXMudXNlclNlcnZpY2UuZGVsZXRlKGV4aXN0aW5nVXNlci5faWQpO1xuICAgIH1cblxuICAgIGNvbnN0IHZlcmlmaWNhdGlvbkNvZGUgPSBnZW5lcmF0ZVZlcmlmaWNhdGlvbkNvZGUoKTtcbiAgICBjb25zdCB2ZXJpZmljYXRpb25UaW1lID0gZ2V0VmVyaWZpY2F0aW9uQ29kZUV4cGlyeSgzKTtcblxuICAgIGF1dGhSZWdpc3RlckR0by5yb2xlID0gMjtcblxuICAgIGF1dGhSZWdpc3RlckR0by5lbWFpbFZlcmlmaWNhdGlvbiA9IHtcbiAgICAgIGNvZGU6IHZlcmlmaWNhdGlvbkNvZGUsXG4gICAgICBleHBpcmVzQXQ6IHZlcmlmaWNhdGlvblRpbWUsXG4gICAgICB2ZXJpZmllZDogZmFsc2UsXG4gICAgfTtcblxuICAgIGNvbnN0IHNhdmVkVXNlciA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuY3JlYXRlKGF1dGhSZWdpc3RlckR0byk7XG5cbiAgICBhd2FpdCB0aGlzLmVtYWlsU2VydmljZS5zZW5kVmVyaWZpY2F0aW9uRW1haWwoXG4gICAgICBzYXZlZFVzZXIuY29udGFjdC5lbWFpbCxcbiAgICAgIHNhdmVkVXNlci5lbWFpbFZlcmlmaWNhdGlvbi5jb2RlLFxuICAgICAgXCJIaSwgVGhpcyBFbWFpbCBWZXJpZmljYXRpb24gQ29kZVwiLFxuICAgICk7XG4gIH1cblxuICBhc3luYyBsb2dpbihhdXRobG9naW5EdG8pIHtcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gYXV0aGxvZ2luRHRvO1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS5maW5kQnlFbWFpbChlbWFpbCk7XG5cbiAgICBpZiAoXG4gICAgICAhZXhpc3RpbmdVc2VyIHx8XG4gICAgICAhKGF3YWl0IGNvbXBhcmVQYXNzd29yZChwYXNzd29yZCwgZXhpc3RpbmdVc2VyLnBhc3N3b3JkKSlcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBCYXNlUmVzcG9uc2UuZXJyb3Ioe1xuICAgICAgICBtZXNzYWdlOiBcIkVtYWlsIG9yIFBhc3N3b3JkIGlzIGluY29ycmVjdC5cIixcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5VTkFVVEhPUklaRUQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgc3ViOiBleGlzdGluZ1VzZXIuX2lkLFxuICAgICAgZW1haWwsXG4gICAgfTtcblxuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5jcmVhdGVUb2tlbihwYXlsb2FkKTtcblxuICAgIHJldHVybiB7IHVzZXI6IGV4aXN0aW5nVXNlciwgdG9rZW4gfTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeUVtYWlsKHZlcmlmaWNhdGlvbkR0bykge1xuICAgIGNvbnN0IHsgY29kZSwgZW1haWwgfSA9IHZlcmlmaWNhdGlvbkR0bztcblxuICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuZmluZEJ5RW1haWwoZW1haWwpO1xuXG4gICAgaWYgKCFleGlzdGluZ1VzZXIpIHtcbiAgICAgIHRocm93IG5ldyBCYXNlUmVzcG9uc2UuZXJyb3Ioe1xuICAgICAgICBtZXNzYWdlOiBcIlVzZXIgd2l0aCB0aGlzIGVtYWlsIGRvZXMgbm90IGV4aXN0LlwiLFxuICAgICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLkNPTkZMSUNULFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGV4aXN0aW5nVXNlci5lbWFpbFZlcmlmaWNhdGlvbj8udmVyaWZpZWQpIHtcbiAgICAgIHRocm93IG5ldyBCYXNlUmVzcG9uc2UuZXJyb3Ioe1xuICAgICAgICBtZXNzYWdlOiBcIllvdXIgZW1haWwgaXMgYWxyZWFkeSB2ZXJpZmllZC4gUGxlYXNlIGxvZ2luIHRvIGNvbnRpbnVlLlwiLFxuICAgICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNULFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGV4aXN0aW5nVXNlci5lbWFpbFZlcmlmaWNhdGlvbi5jb2RlICE9PSBjb2RlKSB7XG4gICAgICB0aHJvdyBuZXcgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgICAgbWVzc2FnZTogXCJJbnZhbGlkIHZlcmlmaWNhdGlvbiBjb2RlLlwiLFxuICAgICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNULFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcblxuICAgIGlmIChleGlzdGluZ1VzZXIuZW1haWxWZXJpZmljYXRpb24uZXhwaXJlc0F0IDwgbm93KSB7XG4gICAgICBleGlzdGluZ1VzZXIuZW1haWxWZXJpZmljYXRpb24uY29kZSA9IGdlbmVyYXRlVmVyaWZpY2F0aW9uQ29kZSgpO1xuICAgICAgZXhpc3RpbmdVc2VyLmVtYWlsVmVyaWZpY2F0aW9uLmV4cGlyZXNBdCA9IGdldFZlcmlmaWNhdGlvbkNvZGVFeHBpcnkoMyk7XG5cbiAgICAgIGF3YWl0IGV4aXN0aW5nVXNlci5zYXZlKCk7XG5cbiAgICAgIGF3YWl0IHRoaXMuZW1haWxTZXJ2aWNlLnNlbmRWZXJpZmljYXRpb25FbWFpbChcbiAgICAgICAgZXhpc3RpbmdVc2VyLmNvbnRhY3QuZW1haWwsXG4gICAgICAgIGV4aXN0aW5nVXNlci5lbWFpbFZlcmlmaWNhdGlvbi5jb2RlLFxuICAgICAgICBcIkhpLCBUaGlzIEVtYWlsIFZlcmlmaWNhdGlvbiBDb2RlXCIsXG4gICAgICApO1xuXG4gICAgICB0aHJvdyBuZXcgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICBcIlZlcmlmaWNhdGlvbiBjb2RlIGhhcyBleHBpcmVkLiBBIG5ldyBjb2RlIGhhcyBiZWVuIHNlbnQgdG8geW91ciBlbWFpbC5cIixcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4aXN0aW5nVXNlci5lbWFpbFZlcmlmaWNhdGlvbi52ZXJpZmllZCA9IHRydWU7XG4gICAgZXhpc3RpbmdVc2VyLmVtYWlsVmVyaWZpY2F0aW9uLmNvZGUgPSB1bmRlZmluZWQ7XG4gICAgZXhpc3RpbmdVc2VyLmVtYWlsVmVyaWZpY2F0aW9uLmV4cGlyZXNBdCA9IHVuZGVmaW5lZDtcblxuICAgIGF3YWl0IGV4aXN0aW5nVXNlci5zYXZlKCk7XG5cbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgc3ViOiBleGlzdGluZ1VzZXIuX2lkLFxuICAgICAgZW1haWwsXG4gICAgfTtcblxuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5jcmVhdGVUb2tlbihwYXlsb2FkKTtcblxuICAgIHJldHVybiB7XG4gICAgICB0b2tlbixcbiAgICAgIHVzZXI6IGV4aXN0aW5nVXNlcixcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlVG9rZW4ocGF5bG9hZCkge1xuICAgIGNvbnN0IHsgYWNjZXNzU2VjcmV0LCBhY2Nlc3NFeHBpcmVzSW4sIHJlZnJlc2hTZWNyZXQsIHJlZnJlc2hFeHBpcmVzSW4gfSA9XG4gICAgICBjb25maWcuand0O1xuXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBhd2FpdCBnZW5lcmF0ZVRva2VuKFxuICAgICAgcGF5bG9hZCxcbiAgICAgIGFjY2Vzc1NlY3JldCxcbiAgICAgIGFjY2Vzc0V4cGlyZXNJbixcbiAgICApO1xuXG4gICAgY29uc3QgcmVmcmVzaFRva2VuID0gYXdhaXQgZ2VuZXJhdGVUb2tlbihcbiAgICAgIHBheWxvYWQsXG4gICAgICByZWZyZXNoU2VjcmV0LFxuICAgICAgcmVmcmVzaEV4cGlyZXNJbixcbiAgICApO1xuXG4gICAgYXdhaXQgdGhpcy51c2VyU2VydmljZS51cGRhdGUocGF5bG9hZC5zdWIsIHtcbiAgICAgIHRva2VuOiB7IHJlZnJlc2g6IHJlZnJlc2hUb2tlbiB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbiB9O1xuICB9XG5cbiAgYXN5bmMgdmVyaWZpY2F0aW9uVG9rZW4ocGF5bG9hZCkge1xuICAgIGNvbnN0IHsgdmVyaWZpY2F0aW9uRXhwaXJlc0luLCB2ZXJpZmljYXRpb25TZWNyZXQgfSA9IGNvbmZpZy5qd3Q7XG5cbiAgICByZXR1cm4gZ2VuZXJhdGVUb2tlbihwYXlsb2FkLCB2ZXJpZmljYXRpb25TZWNyZXQsIHZlcmlmaWNhdGlvbkV4cGlyZXNJbik7XG4gIH1cbn1cbiIsImltcG9ydCB7IFVzZXJEdG8gfSBmcm9tIFwiQC9hcGkvdXNlci9kdG8vdXNlci5kdG9cIjtcblxuaW1wb3J0IHsgVG9rZW5EdG8gfSBmcm9tIFwiLi90b2tlbi5kdG9cIjtcblxuZXhwb3J0IGNsYXNzIEF1dGhEdG8ge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy50b2tlbiA9IG5ldyBUb2tlbkR0byhkYXRhLnRva2VuKTtcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlckR0byhkYXRhLnVzZXIpO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVG9rZW5EdG8ge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5hY2Nlc3MgPSBkYXRhLmFjY2Vzc1Rva2VuO1xuICAgIHRoaXMucmVmcmVzaCA9IGRhdGEucmVmcmVzaFRva2VuO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRm9vdGVyRHRvIHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIGNvbnRhY3QsXG4gICAgbG9jYXRpb24sXG4gICAgdGl0bGUsXG4gICAgY29weXJpZ2h0LFxuICAgIG9wZW5pbmdEYXksXG4gICAgb3BlbmluZ0hvdXIsXG4gICAgc29jaWFsTWVkaWEsXG4gIH0pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgIGNvbnRhY3QsXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRpdGxlLFxuICAgICAgY29weXJpZ2h0LFxuICAgICAgb3BlbmluZ0RheSxcbiAgICAgIG9wZW5pbmdIb3VyLFxuICAgICAgc29jaWFsTWVkaWEsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmltcG9ydCB7IEZvb3RlckR0byB9IGZyb20gXCIuL2R0by9mb290ZXIuZHRvXCI7XG5cbmV4cG9ydCBjbGFzcyBGb290ZXJDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoZm9vb3RlclNlcnZpY2UpIHtcbiAgICB0aGlzLmZvb290ZXJTZXJ2aWNlID0gZm9vb3RlclNlcnZpY2U7XG4gIH1cblxuICBhc3luYyBmaW5kKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZm9vb3RlclNlcnZpY2UuZmluZCgpO1xuXG4gICAgcmVzLnN1Y2Nlc3Moe1xuICAgICAgbWVzc2FnZTogXCJGaW5kIEZvb3RlciBzdWNjZXNzZnVsbHkhXCIsXG4gICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk9LLFxuICAgICAgZGF0YTogZGF0YSA/IG5ldyBGb290ZXJEdG8oZGF0YSkgOiBudWxsLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiQC9jb3JlL2RpL2RpLWNvbnRhaW5lclwiO1xuXG5pbXBvcnQgeyBGb290ZXJDb250cm9sbGVyIH0gZnJvbSBcIi4vZm9vdGVyLmNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IEZvb3RlclJlcG9zaXRvcnkgfSBmcm9tIFwiLi9mb290ZXIucmVwb3NpdG95XCI7XG5pbXBvcnQgeyBGb290ZXJTZXJ2aWNlIH0gZnJvbSBcIi4vZm9vdGVyLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNvbnN0IGZvb3RlckRJS2V5cyA9IHtcbiAgc2VydmljZTogXCJmb290ZXItc2VydmljZVwiLFxuICByZXBvc2l0b3J5OiBcImZvb3Rlci1yZXBvc2l0b3J5XCIsXG4gIGNvbnRyb2xsZXI6IFwiZm9vdGVyLWNvbnRyb2xsZXJcIixcbn07XG5cbmNvbnRhaW5lci5yZWdpc3Rlcihmb290ZXJESUtleXMucmVwb3NpdG9yeSwgW10sICgpID0+IG5ldyBGb290ZXJSZXBvc2l0b3J5KCkpO1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIGZvb3RlckRJS2V5cy5zZXJ2aWNlLFxuICBbZm9vdGVyRElLZXlzLnJlcG9zaXRvcnldLFxuICAoZm9vdGVyUmVwb3NpdG9yeSkgPT4gbmV3IEZvb3RlclNlcnZpY2UoZm9vdGVyUmVwb3NpdG9yeSksXG4pO1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIGZvb3RlckRJS2V5cy5jb250cm9sbGVyLFxuICBbZm9vdGVyRElLZXlzLnNlcnZpY2VdLFxuICAoZm9vdGVyU2VydmljZSkgPT4gbmV3IEZvb3RlckNvbnRyb2xsZXIoZm9vdGVyU2VydmljZSksXG4pO1xuIiwiaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tIFwiQC9zaGFyZWQvcmVwb3NpdG9yeS9iYXNlLnJlcG9zaXRvcnlcIjtcblxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9tb2RlbC9mb290ZXIubW9kZWxcIjtcblxuZXhwb3J0IGNsYXNzIEZvb3RlclJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKEZvb3Rlcik7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCJAL2NvcmUvZGkvZGktY29udGFpbmVyXCI7XG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuXG5pbXBvcnQgeyBmb290ZXJESUtleXMgfSBmcm9tIFwiLi9mb290ZXIuZGlcIjtcblxuY29uc3QgcHJlZml4ID0gXCIvZm9vdGVyc1wiO1xuXG5jb25zdCBmb290ZXJSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5jb25zdCBmb290ZXJDb250cm9sbGVyID0gY29udGFpbmVyLmdldChmb290ZXJESUtleXMuY29udHJvbGxlcik7XG5cbmZvb3RlclJvdXRlci5nZXQoYCR7cHJlZml4fWAsIChyZXEsIHJlcykgPT4gZm9vdGVyQ29udHJvbGxlci5maW5kKHJlcSwgcmVzKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZvb3RlclJvdXRlcjtcbiIsImltcG9ydCB7IEJhc2VSZXNwb25zZSB9IGZyb20gXCJAL2NvcmUvcmVzcG9uc2UvYmFzZS1yZXNwb25zZVwiO1xuaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcblxuZXhwb3J0IGNsYXNzIEZvb3RlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihmb290ZXJSZXBvc2l0b3J5LCBzdG9yYWdlU2VydmljZSkge1xuICAgIHRoaXMuZm9vdGVyUmVwb3NpdG9yeSA9IGZvb3RlclJlcG9zaXRvcnk7XG4gICAgdGhpcy5zdG9yYWdlU2VydmljZSA9IHN0b3JhZ2VTZXJ2aWNlO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlKGZvb3RlckR0bywgc29jaWFsTWVkaWFJY29ucykge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmZvb3RlclJlcG9zaXRvcnkuZmluZEFsbCgpO1xuICAgIGxldCB1cGxvYWRlZHNvY2lhbE1lZGlhSWNvbnMgPSBbXTtcblxuICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IEJhc2VSZXNwb25zZS5lcnJvcih7XG4gICAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuQ09ORkxJQ1QsXG4gICAgICAgIG1lc3NhZ2U6IFwiRm9vdGVyIGFscmVhZHkgZXhpc3RzICFcIixcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzb2NpYWxNZWRpYUljb25zICYmIHNvY2lhbE1lZGlhSWNvbnMubGVuZ3RoID4gMCkge1xuICAgICAgdXBsb2FkZWRzb2NpYWxNZWRpYUljb25zID1cbiAgICAgICAgYXdhaXQgdGhpcy5zdG9yYWdlU2VydmljZS51cGxvYWRGaWxlcyhzb2NpYWxNZWRpYUljb25zKTtcbiAgICB9XG5cbiAgICBmb290ZXJEdG8uc29jaWFsTWVkaWEgPSB1cGxvYWRlZHNvY2lhbE1lZGlhSWNvbnM7XG5cbiAgICByZXR1cm4gdGhpcy5mb290ZXJSZXBvc2l0b3J5LmNyZWF0ZUZvb3Rlcihmb290ZXJEdG8pO1xuICB9XG5cbiAgYXN5bmMgZmluZCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb290ZXJSZXBvc2l0b3J5LmZpbmRBbGwoKVswXTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZShmb290ZXJEdG8sIGZpbGVzKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZm9vdGVyUmVwb3NpdG9yeS5maW5kKClbMF07XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IEJhc2VSZXNwb25zZS5lcnJvcih7XG4gICAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuTk9UX0ZPVU5ELFxuICAgICAgICBtZXNzYWdlOiBcIkZvb3RlciBub3QgZm91bmQgIVwiLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn1cbiIsImltcG9ydCB7IGFzc2V0TW9kZWxTY2hlbWEgfSBmcm9tIFwiQC9jb21tb24vc2NoZW1hL21vZGVsL2Fzc2V0LW1vZGVsLnNjaGVtYVwiO1xuaW1wb3J0IHsgY29udGFjdFNjaGVtYSB9IGZyb20gXCJAL2NvbW1vbi9zY2hlbWEvbW9kZWwvY29udGFjdC1tb2RlbC5zY2hlbWFcIjtcbmltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgZm9vdGVyU2NoZW1hID0gbmV3IFNjaGVtYShcbiAge1xuICAgIGNvbnRhY3Q6IGNvbnRhY3RTY2hlbWEsXG4gICAgbG9jYXRpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgY29weXJpZ2h0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIG9wZW5pbmdEYXk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgb3BlbmluZ0hvdXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgc29jaWFsTWVkaWE6IFthc3NldE1vZGVsU2NoZW1hXSxcbiAgfSxcbiAge1xuICAgIGNvbGxlY3Rpb246IFwiZm9vdGVyXCIsXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgfSxcbik7XG5cbmNvbnN0IEZvb3RlciA9IG1vbmdvb3NlLm1vZGVsKFwiRm9vdGVyXCIsIGZvb3RlclNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBhdXRvSW5jcmVtZW50UGx1Z2luIGZyb20gXCJAL2NvbW1vbi9tb25nb29zZS9wbHVnaW5zL2F1dG8taW5jcmVtZW50LnBsdWdpblwiO1xuaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCByb2xlU2NoZW1hID0gbmV3IFNjaGVtYShcbiAge1xuICAgIHJvbGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgY29sbGVjdGlvbjogXCJyb2xlc1wiLFxuICAgIHZlcnNpb25LZXk6IGZhbHNlLFxuICB9LFxuKS5wbHVnaW4oYXV0b0luY3JlbWVudFBsdWdpbiwgeyBpbmNGaWVsZDogXCJfaWRcIiB9KTtcblxuY29uc3QgUm9sZSA9IG1vbmdvb3NlLm1vZGVsKFwiUm9sZVwiLCByb2xlU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgUm9sZTtcbiIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCJAL2NvcmUvZGkvZGktY29udGFpbmVyXCI7XG5cbmltcG9ydCB7IFJvbGVSZXBvc2l0b3J5IH0gZnJvbSBcIi4vcm9sZS5yZXBvc2l0b3J5XCI7XG5pbXBvcnQgeyBSb2xlU2VlZGVyIH0gZnJvbSBcIi4vcm9sZS5zZWVkZXJcIjtcblxuZXhwb3J0IGNvbnN0IHJvbGVESUtleXMgPSB7XG4gIHJlcG9zaXRvcnk6IFwicm9sZS1yZXBvc2l0b3J5XCIsXG4gIHNlZWRlcjogXCJyb2xlLXNlZWRlclwiLFxufTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKHJvbGVESUtleXMucmVwb3NpdG9yeSwgW10sICgpID0+IG5ldyBSb2xlUmVwb3NpdG9yeSgpKTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKFxuICByb2xlRElLZXlzLnNlZWRlcixcbiAgW3JvbGVESUtleXMucmVwb3NpdG9yeV0sXG4gIChyb2xlUmVwb3NpdG9yeSkgPT4gbmV3IFJvbGVTZWVkZXIocm9sZVJlcG9zaXRvcnkpLFxuKTtcbiIsImltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSBcIkAvc2hhcmVkL3JlcG9zaXRvcnkvYmFzZS5yZXBvc2l0b3J5XCI7XG5cbmltcG9ydCBSb2xlIGZyb20gXCIuL21vZGVsL3JvbGUubW9kZWxcIjtcblxuZXhwb3J0IGNsYXNzIFJvbGVSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihSb2xlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcm9sZXMgfSBmcm9tIFwiQC9jb21tb24vY29uc3RhbnRzL3JvbGVcIjtcblxuZXhwb3J0IGNsYXNzIFJvbGVTZWVkZXIge1xuICBjb25zdHJ1Y3Rvcihyb2xlUmVwb3NpdG9yeSkge1xuICAgIHRoaXMucm9sZVJlcG9zaXRvcnkgPSByb2xlUmVwb3NpdG9yeTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVJvbGVzKCkge1xuICAgIGNvbnN0IGV4aXN0aW5nUm9sZXMgPSBhd2FpdCB0aGlzLnJvbGVSZXBvc2l0b3J5LmZpbmRBbGwoKTtcbiAgICBjb25zdCBleGlzdGluZ1JvbGVOYW1lcyA9IGV4aXN0aW5nUm9sZXMubWFwKChyb2xlKSA9PiByb2xlLnJvbGUpO1xuXG4gICAgY29uc3Qgcm9sZXNUb0NyZWF0ZSA9IHJvbGVzLmZpbHRlcihcbiAgICAgIChyb2xlKSA9PiAhZXhpc3RpbmdSb2xlTmFtZXMuaW5jbHVkZXMocm9sZS5yb2xlKSxcbiAgICApO1xuXG4gICAgaWYgKHJvbGVzVG9DcmVhdGUubGVuZ3RoID4gMCkge1xuICAgICAgYXdhaXQgdGhpcy5yb2xlUmVwb3NpdG9yeS5jcmVhdGVNYW55KHJvbGVzVG9DcmVhdGUpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGFjdER0byB9IGZyb20gXCJAL2NvbW1vbi9zY2hlbWEvZHRvL2NvbnRhY3QuZHRvXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyRHRvIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuZnVsbE5hbWUgPSBkYXRhLmZ1bGxOYW1lO1xuICAgIHRoaXMucHJvZmlsZUltYWdlID0gZGF0YS5wcm9maWxlSW1hZ2U7XG4gICAgdGhpcy5yb2xlID0gZGF0YS5yb2xlO1xuICAgIHRoaXMuY29udGFjdCA9IG5ldyBDb250YWN0RHRvKGRhdGEuY29udGFjdCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBlbWFpbFZlcmlmaWNhdGlvblNjaGVtYSA9IG5ldyBTY2hlbWEoXG4gIHtcbiAgICBjb2RlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgICBleHBpcmVzQXQ6IHtcbiAgICAgIHR5cGU6IERhdGUsXG4gICAgfSxcbiAgICB2ZXJpZmllZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBfaWQ6IGZhbHNlLFxuICB9LFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZW1haWxWZXJpZmljYXRpb25TY2hlbWE7XG4iLCJpbXBvcnQgeyBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGNvbnN0IHJlZnJlc2hUb2tlblNjaGVtYSA9IG5ldyBTY2hlbWEoXG4gIHtcbiAgICByZWZyZXNoOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgICBjcmVhdGVkQXQ6IHtcbiAgICAgIHR5cGU6IERhdGUsXG4gICAgICBkZWZhdWx0OiBEYXRlLm5vdyxcbiAgICAgIGV4cGlyZXM6IFwiMTVkXCIsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIF9pZDogZmFsc2UsXG4gIH0sXG4pO1xuIiwiaW1wb3J0IHsgY29udGFjdFNjaGVtYSB9IGZyb20gXCJAL2NvbW1vbi9zY2hlbWEvbW9kZWwvY29udGFjdC1tb2RlbC5zY2hlbWFcIjtcbmltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuaW1wb3J0IGVtYWlsVmVyaWZpY2F0aW9uIGZyb20gXCIuL2VtYWlsLXZlcmlmaWNhdGlvblwiO1xuaW1wb3J0IHsgcmVmcmVzaFRva2VuU2NoZW1hIH0gZnJvbSBcIi4vcmVmcmVzaC10b2tlblwiO1xuXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IFNjaGVtYShcbiAge1xuICAgIGZ1bGxOYW1lOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHRyaW06IHRydWUsXG4gICAgfSxcbiAgICBwcm9maWxlSW1hZ2U6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHRyaW06IHRydWUgfSxcbiAgICBjb250YWN0OiBjb250YWN0U2NoZW1hLFxuICAgIHRva2VuOiByZWZyZXNoVG9rZW5TY2hlbWEsXG4gICAgZW1haWxWZXJpZmljYXRpb246IHtcbiAgICAgIHR5cGU6IGVtYWlsVmVyaWZpY2F0aW9uLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgcGFzc3dvcmRSZXNldDoge1xuICAgICAgdHlwZTogZW1haWxWZXJpZmljYXRpb24sXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgICByb2xlOiB7IHR5cGU6IFNjaGVtYS5UeXBlcy5OdW1iZXIsIHJlZjogXCJSb2xlXCIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIH0sXG4gIHtcbiAgICBjb2xsZWN0aW9uOiBcInVzZXJzXCIsXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgfSxcbik7XG5cbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgdXNlclNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJpbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiQC9jb3JlL2RpL2RpLWNvbnRhaW5lclwiO1xuXG5pbXBvcnQgeyBVc2VyUmVwb3NpdG9yeSB9IGZyb20gXCIuL3VzZXIucmVwb3NpdG9yeVwiO1xuaW1wb3J0IHsgVXNlclNlZWRlciB9IGZyb20gXCIuL3VzZXIuc2VlZGVyXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL3VzZXIuc2VydmljZVwiO1xuXG5leHBvcnQgY29uc3QgdXNlckRJS2V5cyA9IHtcbiAgc2VydmljZTogXCJ1c2VyLXNlcnZpY2VcIixcbiAgcmVwb3NpdG9yeTogXCJ1c2VyLXJlcG9zaXRvcnlcIixcbiAgc2VlZGVyOiBcInVzZXItc2VlZGVyXCIsXG59O1xuXG5jb250YWluZXIucmVnaXN0ZXIodXNlckRJS2V5cy5yZXBvc2l0b3J5LCBbXSwgKCkgPT4gbmV3IFVzZXJSZXBvc2l0b3J5KCkpO1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIHVzZXJESUtleXMuc2VlZGVyLFxuICBbdXNlckRJS2V5cy5yZXBvc2l0b3J5XSxcbiAgKHVzZXJSZXBvc2l0b3J5KSA9PiBuZXcgVXNlclNlZWRlcih1c2VyUmVwb3NpdG9yeSksXG4pO1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIHVzZXJESUtleXMuc2VydmljZSxcbiAgW3VzZXJESUtleXMucmVwb3NpdG9yeV0sXG4gICh1c2VyUmVwb3NpdG9yeSkgPT4gbmV3IFVzZXJTZXJ2aWNlKHVzZXJSZXBvc2l0b3J5KSxcbik7XG4iLCJpbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gXCJAL3NoYXJlZC9yZXBvc2l0b3J5L2Jhc2UucmVwb3NpdG9yeVwiO1xuXG5pbXBvcnQgVXNlciBmcm9tIFwiLi9tb2RlbC91c2VyLm1vZGVsXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoVXNlcik7XG4gIH1cbn1cbiIsImltcG9ydCBoYXNoUGFzc3dvcmQgZnJvbSBcIkAvY29tbW9uL2hlbHBlcnMvaGFzaC1wYXNzd29yZFwiO1xuXG5leHBvcnQgY2xhc3MgVXNlclNlZWRlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXJSZXBvc2l0b3J5LCByb2xlUmVwb3NpdG9yeSkge1xuICAgIHRoaXMudXNlclJlcG9zaXRvcnkgPSB1c2VyUmVwb3NpdG9yeTtcbiAgICB0aGlzLnJvbGVSZXBvc2l0b3J5ID0gcm9sZVJlcG9zaXRvcnk7XG4gIH1cblxuICBhc3luYyBjcmVhdGVBZG1pbigpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy51c2VyUmVwb3NpdG9yeS5maW5kT25lKHsgcm9sZTogMSB9KTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgY29uc3QgcGFzc3dvcmQgPSBhd2FpdCBoYXNoUGFzc3dvcmQoXCJiYWt0YXJhZG1pblwiKTtcblxuICAgICAgcmV0dXJuIHRoaXMudXNlclJlcG9zaXRvcnkuY3JlYXRlKHtcbiAgICAgICAgY29udGFjdDogeyBlbWFpbDogXCJiYWt0YXJhZG1pbkBnbWFpbC5jb21cIiB9LFxuICAgICAgICBmdWxsTmFtZTogXCJiYWt0YXIgYWRtaW5cIixcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIHJvbGU6IDEsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaGFzaFBhc3N3b3JkIH0gZnJvbSBcIkAvY29tbW9uL2hlbHBlcnMvaGFzaC1wYXNzd29yZFwiO1xuaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIkAvY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcih1c2VyUmVwb3NpdG9yeSkge1xuICAgIHRoaXMudXNlclJlcG9zaXRvcnkgPSB1c2VyUmVwb3NpdG9yeTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZSh1c2VyRHRvKSB7XG4gICAgdXNlckR0by5wYXNzd29yZCA9IGF3YWl0IGhhc2hQYXNzd29yZCh1c2VyRHRvLnBhc3N3b3JkKTtcblxuICAgIHJldHVybiB0aGlzLnVzZXJSZXBvc2l0b3J5LmNyZWF0ZSh1c2VyRHRvKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRCeUVtYWlsKGVtYWlsKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlclJlcG9zaXRvcnkuZmluZE9uZSh7IFwiY29udGFjdC5lbWFpbFwiOiBlbWFpbCB9KTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRCeUlkKGlkKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMudXNlclJlcG9zaXRvcnkuZmluZEJ5SWQoaWQpO1xuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBCYXNlUmVzcG9uc2UuZXJyb3Ioe1xuICAgICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk5PVF9GT1VORCxcbiAgICAgICAgbWVzc2FnZTogXCJVc2VyIG5vdCBmb3VuZCFcIixcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlKGlkLCB1c2VyRHRvKSB7XG4gICAgYXdhaXQgdGhpcy5maW5kQnlJZChpZCk7XG5cbiAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS51cGRhdGUoaWQsIHVzZXJEdG8pO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlKGlkKSB7XG4gICAgYXdhaXQgdGhpcy5maW5kQnlJZChpZCk7XG5cbiAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS5kZWxldGUoaWQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBzd2FnZ2VyU3BlYywgc3dhZ2dlclVpIH0gZnJvbSBcIkAvY29yZS9jb25maWcvc3dhZ2dlci5jb25maWdcIjtcbmltcG9ydCBcIkAvY29yZS9kaS9kaS1nbG9iYWxzXCI7XG5pbXBvcnQgY29va2llUGFyc2VyIGZyb20gXCJjb29raWUtcGFyc2VyXCI7XG5pbXBvcnQgY29ycyBmcm9tIFwiY29yc1wiO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7IHJhdGVMaW1pdCB9IGZyb20gXCJleHByZXNzLXJhdGUtbGltaXRcIjtcblxuaW1wb3J0IGF1dGhSb3V0ZXIgZnJvbSBcIi4vYXBpL2F1dGgvYXV0aC5yb3V0ZVwiO1xuaW1wb3J0IGZvb3RlclJvdXRlciBmcm9tIFwiLi9hcGkvZm9vdGVyL2Zvb3Rlci5yb3V0ZVwiO1xuaW1wb3J0IHsgYXBpUHJlZml4IH0gZnJvbSBcIi4vY29tbW9uL2NvbnN0YW50cy9hcGlcIjtcbmltcG9ydCBiYXNlUmVzcG9uc2VNaWRkbGV3YXJlIGZyb20gXCIuL2NvcmUvbWlkZGxld2FyZS9iYXNlLXJlc3BvbnNlLm1pZGRsZXdhcmVcIjtcbmltcG9ydCBlcnJvckhhbmRsZXJNaWRkbGV3YXJlIGZyb20gXCIuL2NvcmUvbWlkZGxld2FyZS9lcnJvci1oYW5kbGVyLW1pZGRsZXdhcmVcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKFxuICByYXRlTGltaXQoe1xuICAgIHdpbmRvd01zOiAxMCAqIDYwICogMTAwMCxcbiAgICBsaW1pdDogMTAwLFxuICAgIHN0YW5kYXJkSGVhZGVyczogXCJkcmFmdC02XCIsXG4gICAgbGVnYWN5SGVhZGVyczogZmFsc2UsXG4gICAgbWVzc2FnZTogXCJUb28gbWFueSByZXF1ZXN0c1wiLFxuICB9KSxcbik7XG5hcHAuc2V0KFwidHJ1c3QgcHJveHlcIiwgMSk7XG5hcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcbmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG5hcHAudXNlKGNvcnMoKSk7XG5hcHAuZGlzYWJsZShcIngtcG93ZXJlZC1ieVwiKTtcbmFwcC51c2UoYmFzZVJlc3BvbnNlTWlkZGxld2FyZSk7XG5hcHAudXNlKFwiL2FwaS1kb2NzXCIsIHN3YWdnZXJVaS5zZXJ2ZSwgc3dhZ2dlclVpLnNldHVwKHN3YWdnZXJTcGVjKSk7XG5cbmFwcC51c2UoYXBpUHJlZml4LCBmb290ZXJSb3V0ZXIpO1xuYXBwLnVzZShhcGlQcmVmaXgsIGF1dGhSb3V0ZXIpO1xuXG5hcHAudXNlKGVycm9ySGFuZGxlck1pZGRsZXdhcmUpO1xuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIiwiZXhwb3J0IGNvbnN0IGFwaVByZWZpeCA9IFwiL2FwaS92MVwiO1xuIiwiZXhwb3J0IGNvbnN0IHJvbGVzID0gW3sgcm9sZTogXCJhZG1pblwiIH0sIHsgcm9sZTogXCJ1c2VyXCIgfV07XG4iLCJpbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlVG9rZW4gPSAocGF5bG9hZCwgc2VjcmV0LCB0aW1lKSA9PlxuICBqd3Quc2lnbihwYXlsb2FkLCBzZWNyZXQsIHtcbiAgICBleHBpcmVzSW46IHRpbWUsXG4gICAgYWxnb3JpdGhtOiBcIkhTNTEyXCIsXG4gIH0pO1xuIiwiaW1wb3J0ICogYXMgYmNyeXB0IGZyb20gXCJiY3J5cHRcIjtcblxuYXN5bmMgZnVuY3Rpb24gaGFzaFBhc3N3b3JkKHBhc3N3b3JkKSB7XG4gIGNvbnN0IHNhbHQgPSBhd2FpdCBiY3J5cHQuZ2VuU2FsdCgxMCk7XG5cbiAgcmV0dXJuIGJjcnlwdC5oYXNoKHBhc3N3b3JkLCBzYWx0KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29tcGFyZVBhc3N3b3JkKHBsYWluVGV4dFBhc3N3b3JkLCBoYXNoZWRQYXNzd29yZCkge1xuICByZXR1cm4gYmNyeXB0LmNvbXBhcmUocGxhaW5UZXh0UGFzc3dvcmQsIGhhc2hlZFBhc3N3b3JkKTtcbn1cblxuZXhwb3J0IHsgY29tcGFyZVBhc3N3b3JkLCBoYXNoUGFzc3dvcmQgfTtcbiIsImltcG9ydCBjcnlwdG8gZnJvbSBcImNyeXB0b1wiO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSB2ZXJpZmljYXRpb24gY29kZSB3aXRoIGEgc3BlY2lmaWMgbGVuZ3RoIHVzaW5nIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzLlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCAtIExlbmd0aCBvZiB0aGUgdmVyaWZpY2F0aW9uIGNvZGUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSAtIFRoZSBnZW5lcmF0ZWQgdmVyaWZpY2F0aW9uIGNvZGUuXG4gKi9cbmNvbnN0IGdlbmVyYXRlVmVyaWZpY2F0aW9uQ29kZSA9IChsZW5ndGggPSA2KSA9PiB7XG4gIGNvbnN0IGNoYXJhY3RlcnMgPVxuICAgIFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlcIjtcbiAgY29uc3QgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xuICBsZXQgcmVzdWx0ID0gXCJcIjtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gY3J5cHRvLnJhbmRvbUludChjaGFyYWN0ZXJzTGVuZ3RoKTtcbiAgICByZXN1bHQgKz0gY2hhcmFjdGVyc1tyYW5kb21JbmRleF07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgZ2V0VmVyaWZpY2F0aW9uQ29kZUV4cGlyeSA9IChtaW51dGVzKSA9PiBEYXRlLm5vdygpICsgbWludXRlcyAqIDYwMDAwO1xuXG5leHBvcnQgeyBnZW5lcmF0ZVZlcmlmaWNhdGlvbkNvZGUsIGdldFZlcmlmaWNhdGlvbkNvZGVFeHBpcnkgfTtcbiIsIi8qKlxuICogQGRlc2NyaXB0aW9uIE1vbmdvb3NlIHBsdWdpbiB0byBhdXRvIGluY3JlbWVudCBhIGZpZWxkXG4gKiBAcGFyYW0ge01vbmdvb3NlLlNjaGVtYX0gc2NoZW1hXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdXRvSW5jcmVtZW50UGx1Z2luKHNjaGVtYSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMuaW5jRmllbGQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2Ugc3BlY2lmeSBpbmNGaWVsZCFcIik7XG4gIH1cblxuICBsZXQgZmllbGRPcHRpb25zID0ge1xuICAgIHR5cGU6IE51bWJlcixcbiAgfTtcblxuICBpZiAob3B0aW9ucy5pbmNGaWVsZCAhPT0gXCJfaWRcIikge1xuICAgIGZpZWxkT3B0aW9ucyA9IHtcbiAgICAgIC4uLmZpZWxkT3B0aW9ucyxcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgc2NoZW1hLmFkZCh7XG4gICAgW29wdGlvbnMuaW5jRmllbGRdOiBmaWVsZE9wdGlvbnMsXG4gIH0pO1xuXG4gIHNjaGVtYS5wcmUoXCJzYXZlXCIsIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgaWYgKHRoaXMuaXNOZXcpIHtcbiAgICAgIHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgLmZpbmRPbmUoe30sIHt9LCB7IHNvcnQ6IHsgW29wdGlvbnMuaW5jRmllbGRdOiAtMSB9IH0pXG4gICAgICAgIC50aGVuKChsYXN0UmVjb3JkKSA9PiB7XG4gICAgICAgICAgdGhpc1tvcHRpb25zLmluY0ZpZWxkXSA9IGxhc3RSZWNvcmRcbiAgICAgICAgICAgID8gbGFzdFJlY29yZFtvcHRpb25zLmluY0ZpZWxkXSArIDFcbiAgICAgICAgICAgIDogMTtcblxuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIHNjaGVtYS5wcmUoXCJpbnNlcnRNYW55XCIsIGFzeW5jIGZ1bmN0aW9uIChuZXh0LCBkb2NzKSB7XG4gICAgY29uc3QgbGFzdFJlY29yZCA9IGF3YWl0IHRoaXMuZmluZE9uZShcbiAgICAgIHt9LFxuICAgICAge30sXG4gICAgICB7IHNvcnQ6IHsgW29wdGlvbnMuaW5jRmllbGRdOiAtMSB9IH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGxhc3RDb3VudCA9IGxhc3RSZWNvcmQgPyBsYXN0UmVjb3JkW29wdGlvbnMuaW5jRmllbGRdIDogMDtcblxuICAgIGRvY3MuZm9yRWFjaCgoZG9jLCBpbmRleCkgPT4ge1xuICAgICAgZG9jW29wdGlvbnMuaW5jRmllbGRdID0gbGFzdENvdW50ICsgaW5kZXggKyAxO1xuICAgIH0pO1xuXG4gICAgbmV4dCgpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBjbGFzcyBDb250YWN0RHRvIHtcbiAgY29uc3RydWN0b3IoeyBlbWFpbCwgcGhvbmVOdW1iZXIgfSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgZW1haWwsXG4gICAgICBwaG9uZU51bWJlcixcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgY29uc3QgYXNzZXRNb2RlbFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICBocmVmOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlOiB0cnVlLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICAgIHVybDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBwdWJsaWNJZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgICBzaXplOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIF9pZDogZmFsc2UsXG4gIH0sXG4pO1xuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgY29uc3QgY29udGFjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICBlbWFpbDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgcGhvbmVOdW1iZXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgX2lkOiBmYWxzZSxcbiAgfSxcbik7XG4iLCJpbXBvcnQgXCJAL2NvcmUvY29uZmlnL2Vudi5jb25maWdcIjtcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURiQ29ubmVjdGlvbigpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52LkNPTk5FQ1RJT05fU1RSSU5HKTtcbiAgICBjb25zb2xlLmxvZyhcIk1vbmdvREIgQ29ubmVjdGVkXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJNb25nb0RCIENvbm5lY3Rpb24gRXJyb3I6XCIsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcImRvdGVudlwiO1xuXG5jb25maWcoKTtcblxuY29uZmlnKHtcbiAgcGF0aDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiA/IFwiLmVudi5sb2NhbFwiIDogXCIuZW52XCIsXG4gIG92ZXJyaWRlOiB0cnVlLFxufSk7XG4iLCJleHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBqd3Q6IHtcbiAgICBhbGdvcml0aG06IHByb2Nlc3MuZW52LkpXVF9BTEdPUklUSE0sXG4gICAgYWNjZXNzU2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfQUNDRVNTX1NFQ1JFVCxcbiAgICBhY2Nlc3NFeHBpcmVzSW46IHByb2Nlc3MuZW52LkpXVF9BQ0NFU1NfRVhQSVJFU19JTixcbiAgICByZWZyZXNoU2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfUkVGUkVTSF9TRUNSRVQsXG4gICAgcmVmcmVzaEV4cGlyZXNJbjogcHJvY2Vzcy5lbnYuSldUX1JFRlJFU0hfRVhQSVJFU19JTixcbiAgICB2ZXJpZmljYXRpb25TZWNyZXQ6IHByb2Nlc3MuZW52LkpXVF9WRVJJRklDQVRJT05fU0VDUkVULFxuICAgIHZlcmlmaWNhdGlvbkV4cGlyZXNJbjogcHJvY2Vzcy5lbnYuSldUX1ZFUklGSUNBVElPTl9FWFBJUkVTX0lOLFxuICB9LFxufTtcbiIsImltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSBcIkAvc2hhcmVkL2Vycm9yLXJlc3BvbnNlL2Vycm9yLXJlc3BvbnNlXCI7XG5pbXBvcnQgbm9kZW1haWxlciBmcm9tIFwibm9kZW1haWxlclwiO1xuXG5leHBvcnQgY29uc3Qgc2VuZEVtYWlsID0gYXN5bmMgKG1haWxPcHRpb25zKSA9PiB7XG4gIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgIHNlcnZpY2U6IFwiZ21haWxcIixcbiAgICBhdXRoOiB7XG4gICAgICB1c2VyOiBwcm9jZXNzLmVudi5NQUlMX1VTRVIsXG4gICAgICBwYXNzOiBwcm9jZXNzLmVudi5NQUlMX1BBU1NXT1JELFxuICAgIH0sXG4gIH0pO1xuXG4gIHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zLCAoZXJyb3IsIGluZm8pID0+IHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHRocm93IG5ldyBBUElFcnJvcihcIkVtYWlsIEZhaWxlZCB0byBTZW5kIVwiLCA0MDMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgRW1haWwgc2VudDogJHtpbmZvLnJlc3BvbnNlfWApO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzICovXG5pbXBvcnQgc3dhZ2dlckpzZG9jIGZyb20gXCJzd2FnZ2VyLWpzZG9jXCI7XG5pbXBvcnQgc3dhZ2dlclVpIGZyb20gXCJzd2FnZ2VyLXVpLWV4cHJlc3NcIjtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgZGVmaW5pdGlvbjoge1xuICAgIG9wZW5hcGk6IFwiMy4wLjBcIixcbiAgICBpbmZvOiB7XG4gICAgICB0aXRsZTogXCJDQUYtVmliZSBDb2ZmZWUgU2hvcCBBUElcIixcbiAgICAgIHZlcnNpb246IFwiMS4wLjBcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkNBRi1WaWJlIENvZmZlZSBTaG9wIEFQSSBkb2N1bWVudGF0aW9uXCIsXG4gICAgfSxcbiAgICBzZXJ2ZXJzOiBbXG4gICAgICB7XG4gICAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjUwMDBcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgYXBpczogW1wiLi9zcmMvYXBpLyouanNcIl0sXG59O1xuXG5jb25zdCBzd2FnZ2VyU3BlYyA9IHN3YWdnZXJKc2RvYyhvcHRpb25zKTtcblxuZXhwb3J0IHsgc3dhZ2dlclNwZWMsIHN3YWdnZXJVaSB9O1xuIiwiaW1wb3J0IHsgcm9sZURJS2V5cyB9IGZyb20gXCJAL2FwaS9yb2xlL3JvbGUuZGlcIjtcbmltcG9ydCB7IFJvbGVTZWVkZXIgfSBmcm9tIFwiQC9hcGkvcm9sZS9yb2xlLnNlZWRlclwiO1xuaW1wb3J0IHsgdXNlckRJS2V5cyB9IGZyb20gXCJAL2FwaS91c2VyL3VzZXIuZGlcIjtcbmltcG9ydCB7IFVzZXJTZWVkZXIgfSBmcm9tIFwiQC9hcGkvdXNlci91c2VyLnNlZWRlclwiO1xuXG5pbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiLi4vZGkvZGktY29udGFpbmVyXCI7XG5cbmV4cG9ydCBjb25zdCBzZWVkID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB1c2VyU2VlZGVyID0gbmV3IFVzZXJTZWVkZXIoY29udGFpbmVyLmdldCh1c2VyRElLZXlzLnJlcG9zaXRvcnkpKTtcbiAgY29uc3Qgcm9sZVNlZWRlciA9IG5ldyBSb2xlU2VlZGVyKGNvbnRhaW5lci5nZXQocm9sZURJS2V5cy5yZXBvc2l0b3J5KSk7XG5cbiAgYXdhaXQgcm9sZVNlZWRlci5jcmVhdGVSb2xlcygpO1xuICBhd2FpdCBQcm9taXNlLmFsbChbdXNlclNlZWRlci5jcmVhdGVBZG1pbigpXSk7XG59O1xuIiwiLyoqXG4gKiBEZXBlbmRlbmN5IEluamVjdGlvbiBDb250YWluZXJcbiAqIEBjbGFzcyBEaUNvbnRhaW5lclxuICogQGRlc2NyaXB0aW9uIEEgc2ltcGxlIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGNvbnRhaW5lciB0aGF0IGFsbG93cyB5b3UgdG8gcmVnaXN0ZXJcbiAqIGFuZCBnZXQgZGVwZW5kZW5jaWVzXG4gKiBAZXhhbXBsZVxuICogY29uc3QgY29udGFpbmVyID0gbmV3IERpQ29udGFpbmVyKCk7XG4gKiBjb250YWluZXIucmVnaXN0ZXIoXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIiwgW10sICgpID0+IG5ldyBMYW5kaW5nUGFnZVJlcG9zaXRvcnkoKSk7XG4gKiBjb250YWluZXIucmVnaXN0ZXIoXG4gKiAgXCJMYW5kaW5nUGFnZVNlcnZpY2VcIixcbiAqICBbXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIl0sXG4gKiAgKGxhbmRpbmdQYWdlUmVwb3NpdG9yeSkgPT4gbmV3IExhbmRpbmdQYWdlU2VydmljZShsYW5kaW5nUGFnZVJlcG9zaXRvcnkpLFxuICogKTtcbiAqXG4gKiBjb25zdCBsYW5kaW5nUGFnZVNlcnZpY2UgPSBjb250YWluZXIuZ2V0KFwiTGFuZGluZ1BhZ2VTZXJ2aWNlXCIpO1xuICovXG5jbGFzcyBEaUNvbnRhaW5lciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGVwZW5kZW5jaWVzID0ge307XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBkZXBlbmRlbmN5XG4gICAqIEBwYXJhbSBuYW1lIC0gTmFtZSBvZiB0aGUgZGVwZW5kZW5jeSAoZXg6IFwiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCIpXG4gICAqIEBwYXJhbSBkZXBlbmRlbmNpZXMgLSBBcnJheSBvZiBkZXBlbmRlbmNpZXMgKGV4OiBbXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIl0pXG4gICAqIEBwYXJhbSBmdW5jIC0gRnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBkZXBlbmRlbmN5XG4gICAqL1xuICByZWdpc3RlcihuYW1lLCBkZXBlbmRlbmNpZXMsIGZ1bmMpIHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fFxuICAgICAgIUFycmF5LmlzQXJyYXkoZGVwZW5kZW5jaWVzKSB8fFxuICAgICAgdHlwZW9mIGZ1bmMgIT09IFwiZnVuY3Rpb25cIlxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhcmd1bWVudFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlcGVuZGVuY2llc1tuYW1lXSA9IHtcbiAgICAgIGRlcGVuZGVuY2llcyxcbiAgICAgIGZ1bmMsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBkZXBlbmRlbmN5XG4gICAqIEBwYXJhbSBuYW1lIC0gTmFtZSBvZiB0aGUgZGVwZW5kZW5jeSAoZXg6IFwiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCIpXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXQobmFtZSkge1xuICAgIGlmICghdGhpcy5kZXBlbmRlbmNpZXNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRGVwZW5kZW5jeSBub3QgZm91bmQ6ICR7bmFtZX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGRlcGVuZGVuY2llcywgZnVuYyB9ID0gdGhpcy5kZXBlbmRlbmNpZXNbbmFtZV07XG5cbiAgICBjb25zdCBkZXBlbmRlbmNpZXNJbnN0YW5jZXMgPSBkZXBlbmRlbmNpZXMubWFwKChkZXBlbmRlbmN5KSA9PlxuICAgICAgdGhpcy5nZXQoZGVwZW5kZW5jeSksXG4gICAgKTtcblxuICAgIHJldHVybiBmdW5jKC4uLmRlcGVuZGVuY2llc0luc3RhbmNlcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lciA9IG5ldyBEaUNvbnRhaW5lcigpO1xuIiwiaW1wb3J0IFwiQC9hcGkvdXNlci91c2VyLmRpXCI7XG5pbXBvcnQgXCJAL2FwaS9mb290ZXIvZm9vdGVyLmRpXCI7XG5pbXBvcnQgXCJAL2FwaS9yb2xlL3JvbGUuZGlcIjtcbmltcG9ydCBcIkAvYXBpL2F1dGgvYXV0aC5kaVwiO1xuIiwiaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcblxuaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIi4uL3Jlc3BvbnNlL2Jhc2UtcmVzcG9uc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmFzZVJlc3BvbnNlTWlkZGxld2FyZShyZXEsIHJlcywgbmV4dCkge1xuICByZXMuc3VjY2VzcyA9IChwcm9wcykgPT4ge1xuICAgIHJlc1xuICAgICAgLnN0YXR1cyhwcm9wcy5zdGF0dXMgfHwgU3RhdHVzQ29kZXMuT0spXG4gICAgICAuanNvbihCYXNlUmVzcG9uc2Uuc3VjY2Vzcyhwcm9wcykpO1xuICB9O1xuXG4gIHJlcy5lcnJvciA9IChwcm9wcykgPT4ge1xuICAgIHJlc1xuICAgICAgLnN0YXR1cyhwcm9wcy5zdGF0dXMgfHwgU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QpXG4gICAgICAuanNvbihCYXNlUmVzcG9uc2UuZXJyb3IocHJvcHMpKTtcbiAgfTtcblxuICBuZXh0KCk7XG59XG4iLCJpbXBvcnQgeyBCYXNlUmVzcG9uc2UgfSBmcm9tIFwiQC9jb3JlL3Jlc3BvbnNlL2Jhc2UtcmVzcG9uc2VcIjtcbmltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSBcIkAvc2hhcmVkL2Vycm9yLXJlc3BvbnNlL2Vycm9yLXJlc3BvbnNlXCI7XG5cbmNvbnN0IGVycm9ySGFuZGxlck1pZGRsZXdhcmUgPSAoZXJyb3IsIHJlcXVlc3QsIHJlc3BvbnNlLCBuZXh0KSA9PiB7XG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIEFQSUVycm9yKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyhlcnJvci5zdGF0dXNDb2RlIHx8IDQwMCkuanNvbih7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cblxuICBuZXh0KCk7XG5cbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgQmFzZVJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmVycm9yKGVycm9yKTtcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZS5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8IFwiSW50ZXJuYWwgU2VydmVyIEVycm9yIVwiLFxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVycm9ySGFuZGxlck1pZGRsZXdhcmU7XG4iLCJpbXBvcnQgeyBnZXRSZWFzb25QaHJhc2UsIFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBCYXNlUmVzcG9uc2Uge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5zdWNjZXNzID0gZGF0YS5zdWNjZXNzO1xuICAgIHRoaXMuc3RhdHVzID0gZGF0YS5zdGF0dXM7XG4gICAgdGhpcy5tZXNzYWdlID0gZGF0YS5tZXNzYWdlO1xuICAgIHRoaXMuZGF0YSA9IGRhdGEuZGF0YTtcbiAgICB0aGlzLmRldGFpbHMgPSBkYXRhLmRldGFpbHM7XG4gIH1cblxuICBzdGF0aWMgc3VjY2Vzcyh7IHN0YXR1cyA9IFN0YXR1c0NvZGVzLk9LLCBtZXNzYWdlLCBkYXRhIH0pIHtcbiAgICByZXR1cm4gbmV3IEJhc2VSZXNwb25zZSh7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgc3RhdHVzLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSB8fCBnZXRSZWFzb25QaHJhc2Uoc3RhdHVzKSxcbiAgICAgIGRhdGEsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZXJyb3IoeyBtZXNzYWdlLCBzdGF0dXMgPSBTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVCwgZGV0YWlscyA9IG51bGwgfSkge1xuICAgIHJldHVybiBuZXcgQmFzZVJlc3BvbnNlKHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgc3RhdHVzLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSB8fCBnZXRSZWFzb25QaHJhc2Uoc3RhdHVzKSxcbiAgICAgIGRldGFpbHMsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHNlbmRFbWFpbCB9IGZyb20gXCJAL2NvcmUvY29uZmlnL21haWwuY29uZmlnXCI7XG5cbmV4cG9ydCBjbGFzcyBFbWFpbFNlcnZpY2Uge1xuICBhc3luYyBzZW5kVmVyaWZpY2F0aW9uRW1haWwoZW1haWwsIGNvZGUsIHRpdGxlKSB7XG4gICAgcmV0dXJuIHNlbmRFbWFpbCh7XG4gICAgICBmcm9tOiBwcm9jZXNzLmVudi5NQUlMX0ZST00sXG4gICAgICB0bzogZW1haWwsXG4gICAgICBzdWJqZWN0OiB0aXRsZSxcbiAgICAgIHRleHQ6IGNvZGUsXG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBBUElFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgc3RhdHVzQ29kZSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBCYXNlUmVwb3NpdG9yeSB7XG4gIGNvbnN0cnVjdG9yKG1vZGVsKSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICB9XG5cbiAgY3JlYXRlKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5jcmVhdGUoZGF0YSk7XG4gIH1cblxuICB1cGRhdGUoaWQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kQnlJZEFuZFVwZGF0ZShpZCwgZGF0YSwge1xuICAgICAgbmV3OiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZEJ5SWRBbmREZWxldGUoaWQpO1xuICB9XG5cbiAgZmluZEJ5SWQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kQnlJZChpZCk7XG4gIH1cblxuICBmaW5kQWxsKCkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmQoKTtcbiAgfVxuXG4gIGZpbmRPbmUocXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kT25lKHF1ZXJ5KTtcbiAgfVxuXG4gIGZpbmQocXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kKHF1ZXJ5KTtcbiAgfVxuXG4gIGNvdW50KHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuY291bnREb2N1bWVudHMocXVlcnkpO1xuICB9XG5cbiAgYWdncmVnYXRlKHBpcGVsaW5lKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuYWdncmVnYXRlKHBpcGVsaW5lKTtcbiAgfVxuXG4gIGNyZWF0ZU1hbnkoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmluc2VydE1hbnkoZGF0YSk7XG4gIH1cblxuICB1cGRhdGVNYW55KHF1ZXJ5LCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwudXBkYXRlTWFueShxdWVyeSwgZGF0YSk7XG4gIH1cblxuICBidWxrV3JpdGUob3BlcmF0aW9ucykge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmJ1bGtXcml0ZShvcGVyYXRpb25zKTtcbiAgfVxuXG4gIGFzeW5jIHVwc2VydChxdWVyeSwgZGF0YSkge1xuICAgIGNvbnN0IGZpbmREYXRhID0gYXdhaXQgdGhpcy5maW5kT25lKHF1ZXJ5KTtcblxuICAgIGlmICghZmluZERhdGEpIHJldHVybiB0aGlzLmNyZWF0ZShkYXRhKTtcblxuICAgIHJldHVybiB0aGlzLnVwZGF0ZShmaW5kRGF0YS5faWQsIGRhdGEpO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvd3JhcE5hdGl2ZVN1cGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWUtcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1hc3luYy1lcnJvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1yYXRlLWxpbWl0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHAtc3RhdHVzLWNvZGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlbWFpbGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3YWdnZXItanNkb2NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dhZ2dlci11aS1leHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCJAL2NvcmUvY29uZmlnL2Vudi5jb25maWdcIjtcbmltcG9ydCBcImV4cHJlc3MtYXN5bmMtZXJyb3JzXCI7XG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXIgfSBmcm9tIFwiaHR0cFwiO1xuXG5pbXBvcnQgYXBwIGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IHsgY3JlYXRlRGJDb25uZWN0aW9uIH0gZnJvbSBcIi4vY29yZS9jb25maWcvZGIuY29uZmlnXCI7XG5pbXBvcnQgeyBzZWVkIH0gZnJvbSBcIi4vY29yZS9kYi9zZWVkXCI7XG5cbmNvbnN0IHNlcnZlciA9IGNyZWF0ZVNlcnZlcihhcHApO1xuY29uc3QgeyBQT1JUIH0gPSBwcm9jZXNzLmVudjtcblxuKGFzeW5jICgpID0+IHtcbiAgYXdhaXQgY3JlYXRlRGJDb25uZWN0aW9uKCk7XG4gIGF3YWl0IHNlZWQoKTtcbiAgc2VydmVyLmxpc3RlbihQT1JULCBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYFNlcnZlciBpcyBydW5uaW5nOiBodHRwOi8vbG9jYWxob3N0OiR7UE9SVH1gKTtcbiAgfSk7XG59KSgpO1xuIl0sIm5hbWVzIjpbIlN0YXR1c0NvZGVzIiwiQXV0aER0byIsIkF1dGhDb250cm9sbGVyIiwiYXV0aFNlcnZpY2UiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl9yZWdpc3RlciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwicmVxdWVzdCIsInJlc3BvbnNlIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsInJlZ2lzdGVyIiwiYm9keSIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwic3RhdHVzIiwiQ1JFQVRFRCIsInN0b3AiLCJfeCIsIl94MiIsImFwcGx5IiwiYXJndW1lbnRzIiwiX3ZlcmlmeUVtYWlsIiwiX2NhbGxlZTIiLCJkYXRhIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwidmVyaWZ5RW1haWwiLCJzZW50IiwiX3gzIiwiX3g0IiwiX2xvZ2luIiwiX2NhbGxlZTMiLCJ1c2VyIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwibG9naW4iLCJPSyIsIl94NSIsIl94NiIsImNvbnRhaW5lciIsIkVtYWlsU2VydmljZSIsInVzZXJESUtleXMiLCJBdXRoU2VydmljZSIsImF1dGhESUtleXMiLCJjb250cm9sbGVyIiwic2VydmljZSIsImVtYWlsU2VydmljZSIsInVzZXJTZXJ2aWNlIiwiZXhwcmVzcyIsImF1dGhSb3V0ZXIiLCJSb3V0ZXIiLCJwcmVmaXgiLCJhdXRoQ29udHJvbGxlciIsImdldCIsInBvc3QiLCJjb25jYXQiLCJyZXEiLCJyZXMiLCJnZW5lcmF0ZVRva2VuIiwiY29tcGFyZVBhc3N3b3JkIiwiZ2VuZXJhdGVWZXJpZmljYXRpb25Db2RlIiwiZ2V0VmVyaWZpY2F0aW9uQ29kZUV4cGlyeSIsImNvbmZpZyIsIkJhc2VSZXNwb25zZSIsImF1dGhSZWdpc3RlckR0byIsIl9leGlzdGluZ1VzZXIkZW1haWxWZSIsIl9leGlzdGluZ1VzZXIkZW1haWxWZTIiLCJleGlzdGluZ1VzZXIiLCJ2ZXJpZmljYXRpb25Db2RlIiwidmVyaWZpY2F0aW9uVGltZSIsInNhdmVkVXNlciIsImZpbmRCeUVtYWlsIiwiY29udGFjdCIsImVtYWlsIiwiZW1haWxWZXJpZmljYXRpb24iLCJ2ZXJpZmllZCIsImVycm9yIiwiQ09ORkxJQ1QiLCJfaWQiLCJyb2xlIiwiY29kZSIsImV4cGlyZXNBdCIsImNyZWF0ZSIsInNlbmRWZXJpZmljYXRpb25FbWFpbCIsImF1dGhsb2dpbkR0byIsInBhc3N3b3JkIiwicGF5bG9hZCIsInRva2VuIiwidDAiLCJVTkFVVEhPUklaRUQiLCJzdWIiLCJjcmVhdGVUb2tlbiIsImFicnVwdCIsInZlcmlmaWNhdGlvbkR0byIsIl9leGlzdGluZ1VzZXIkZW1haWxWZTMiLCJub3ciLCJCQURfUkVRVUVTVCIsIkRhdGUiLCJzYXZlIiwidW5kZWZpbmVkIiwiX2NyZWF0ZVRva2VuIiwiX2NhbGxlZTQiLCJfY29uZmlnJGp3dCIsImFjY2Vzc1NlY3JldCIsImFjY2Vzc0V4cGlyZXNJbiIsInJlZnJlc2hTZWNyZXQiLCJyZWZyZXNoRXhwaXJlc0luIiwiYWNjZXNzVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJqd3QiLCJ1cGRhdGUiLCJyZWZyZXNoIiwiX3ZlcmlmaWNhdGlvblRva2VuIiwiX2NhbGxlZTUiLCJfY29uZmlnJGp3dDIiLCJ2ZXJpZmljYXRpb25FeHBpcmVzSW4iLCJ2ZXJpZmljYXRpb25TZWNyZXQiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJ2ZXJpZmljYXRpb25Ub2tlbiIsIlVzZXJEdG8iLCJUb2tlbkR0byIsImFjY2VzcyIsIkZvb3RlckR0byIsIl9yZWYiLCJsb2NhdGlvbiIsInRpdGxlIiwiY29weXJpZ2h0Iiwib3BlbmluZ0RheSIsIm9wZW5pbmdIb3VyIiwic29jaWFsTWVkaWEiLCJPYmplY3QiLCJhc3NpZ24iLCJGb290ZXJDb250cm9sbGVyIiwiZm9vb3RlclNlcnZpY2UiLCJfZmluZCIsImZpbmQiLCJGb290ZXJSZXBvc2l0b3J5IiwiRm9vdGVyU2VydmljZSIsImZvb3RlckRJS2V5cyIsInJlcG9zaXRvcnkiLCJmb290ZXJSZXBvc2l0b3J5IiwiZm9vdGVyU2VydmljZSIsIkJhc2VSZXBvc2l0b3J5IiwiRm9vdGVyIiwiX0Jhc2VSZXBvc2l0b3J5IiwiX2NhbGxTdXBlciIsIl9pbmhlcml0cyIsImZvb3RlclJvdXRlciIsImZvb3RlckNvbnRyb2xsZXIiLCJzdG9yYWdlU2VydmljZSIsIl9jcmVhdGUiLCJmb290ZXJEdG8iLCJzb2NpYWxNZWRpYUljb25zIiwidXBsb2FkZWRzb2NpYWxNZWRpYUljb25zIiwiZmluZEFsbCIsImxlbmd0aCIsInVwbG9hZEZpbGVzIiwiY3JlYXRlRm9vdGVyIiwiX3VwZGF0ZSIsImZpbGVzIiwiTk9UX0ZPVU5EIiwiYXNzZXRNb2RlbFNjaGVtYSIsImNvbnRhY3RTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsImZvb3RlclNjaGVtYSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImNvbGxlY3Rpb24iLCJ0aW1lc3RhbXBzIiwibW9kZWwiLCJhdXRvSW5jcmVtZW50UGx1Z2luIiwicm9sZVNjaGVtYSIsInVuaXF1ZSIsInRyaW0iLCJ2ZXJzaW9uS2V5IiwicGx1Z2luIiwiaW5jRmllbGQiLCJSb2xlIiwiUm9sZVJlcG9zaXRvcnkiLCJSb2xlU2VlZGVyIiwicm9sZURJS2V5cyIsInNlZWRlciIsInJvbGVSZXBvc2l0b3J5Iiwicm9sZXMiLCJfY3JlYXRlUm9sZXMiLCJleGlzdGluZ1JvbGVzIiwiZXhpc3RpbmdSb2xlTmFtZXMiLCJyb2xlc1RvQ3JlYXRlIiwibWFwIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJjcmVhdGVNYW55IiwiY3JlYXRlUm9sZXMiLCJDb250YWN0RHRvIiwiZnVsbE5hbWUiLCJwcm9maWxlSW1hZ2UiLCJlbWFpbFZlcmlmaWNhdGlvblNjaGVtYSIsIkJvb2xlYW4iLCJyZWZyZXNoVG9rZW5TY2hlbWEiLCJjcmVhdGVkQXQiLCJleHBpcmVzIiwidXNlclNjaGVtYSIsInBhc3N3b3JkUmVzZXQiLCJUeXBlcyIsIk51bWJlciIsInJlZiIsIlVzZXIiLCJVc2VyUmVwb3NpdG9yeSIsIlVzZXJTZWVkZXIiLCJVc2VyU2VydmljZSIsInVzZXJSZXBvc2l0b3J5IiwiaGFzaFBhc3N3b3JkIiwiX2NyZWF0ZUFkbWluIiwiZmluZE9uZSIsImNyZWF0ZUFkbWluIiwidXNlckR0byIsIl9maW5kQnlFbWFpbCIsIl9maW5kQnlJZCIsImlkIiwiZmluZEJ5SWQiLCJfZGVsZXRlMiIsIl9kZWxldGUiLCJzd2FnZ2VyU3BlYyIsInN3YWdnZXJVaSIsImNvb2tpZVBhcnNlciIsImNvcnMiLCJyYXRlTGltaXQiLCJhcGlQcmVmaXgiLCJiYXNlUmVzcG9uc2VNaWRkbGV3YXJlIiwiZXJyb3JIYW5kbGVyTWlkZGxld2FyZSIsImFwcCIsInVzZSIsIndpbmRvd01zIiwibGltaXQiLCJzdGFuZGFyZEhlYWRlcnMiLCJsZWdhY3lIZWFkZXJzIiwic2V0IiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwianNvbiIsImRpc2FibGUiLCJzZXJ2ZSIsInNldHVwIiwic2VjcmV0IiwidGltZSIsInNpZ24iLCJleHBpcmVzSW4iLCJhbGdvcml0aG0iLCJiY3J5cHQiLCJfaGFzaFBhc3N3b3JkIiwic2FsdCIsImdlblNhbHQiLCJoYXNoIiwiX2NvbXBhcmVQYXNzd29yZCIsInBsYWluVGV4dFBhc3N3b3JkIiwiaGFzaGVkUGFzc3dvcmQiLCJjb21wYXJlIiwiY3J5cHRvIiwiY2hhcmFjdGVycyIsImNoYXJhY3RlcnNMZW5ndGgiLCJyZXN1bHQiLCJpIiwicmFuZG9tSW5kZXgiLCJyYW5kb21JbnQiLCJtaW51dGVzIiwic2NoZW1hIiwib3B0aW9ucyIsIkVycm9yIiwiZmllbGRPcHRpb25zIiwiX29iamVjdFNwcmVhZCIsImFkZCIsIl9kZWZpbmVQcm9wZXJ0eSIsInByZSIsIl90aGlzIiwiaXNOZXciLCJjb25zdHJ1Y3RvciIsInNvcnQiLCJ0aGVuIiwibGFzdFJlY29yZCIsImRvY3MiLCJsYXN0Q291bnQiLCJmb3JFYWNoIiwiZG9jIiwiaW5kZXgiLCJwaG9uZU51bWJlciIsImhyZWYiLCJyZXF1aXJlIiwidXJsIiwicHVibGljSWQiLCJzaXplIiwiY3JlYXRlRGJDb25uZWN0aW9uIiwiX2NyZWF0ZURiQ29ubmVjdGlvbiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiQ09OTkVDVElPTl9TVFJJTkciLCJjb25zb2xlIiwibG9nIiwicGF0aCIsIk5PREVfRU5WIiwib3ZlcnJpZGUiLCJKV1RfQUxHT1JJVEhNIiwiSldUX0FDQ0VTU19TRUNSRVQiLCJKV1RfQUNDRVNTX0VYUElSRVNfSU4iLCJKV1RfUkVGUkVTSF9TRUNSRVQiLCJKV1RfUkVGUkVTSF9FWFBJUkVTX0lOIiwiSldUX1ZFUklGSUNBVElPTl9TRUNSRVQiLCJKV1RfVkVSSUZJQ0FUSU9OX0VYUElSRVNfSU4iLCJBUElFcnJvciIsIm5vZGVtYWlsZXIiLCJzZW5kRW1haWwiLCJtYWlsT3B0aW9ucyIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0IiwiYXV0aCIsIk1BSUxfVVNFUiIsInBhc3MiLCJNQUlMX1BBU1NXT1JEIiwic2VuZE1haWwiLCJpbmZvIiwic3dhZ2dlckpzZG9jIiwiZGVmaW5pdGlvbiIsIm9wZW5hcGkiLCJ2ZXJzaW9uIiwiZGVzY3JpcHRpb24iLCJzZXJ2ZXJzIiwiYXBpcyIsInNlZWQiLCJ1c2VyU2VlZGVyIiwicm9sZVNlZWRlciIsIlByb21pc2UiLCJhbGwiLCJEaUNvbnRhaW5lciIsImRlcGVuZGVuY2llcyIsIm5hbWUiLCJmdW5jIiwiQXJyYXkiLCJpc0FycmF5IiwiX3RoaXMkZGVwZW5kZW5jaWVzJG5hIiwiZGVwZW5kZW5jaWVzSW5zdGFuY2VzIiwiZGVwZW5kZW5jeSIsIl90b0NvbnN1bWFibGVBcnJheSIsInByb3BzIiwic3RhdHVzQ29kZSIsImdldFJlYXNvblBocmFzZSIsImRldGFpbHMiLCJfcmVmJHN0YXR1cyIsIl9yZWYyIiwiX3JlZjIkc3RhdHVzIiwiX3JlZjIkZGV0YWlscyIsIl9zZW5kVmVyaWZpY2F0aW9uRW1haWwiLCJmcm9tIiwiTUFJTF9GUk9NIiwidG8iLCJzdWJqZWN0IiwidGV4dCIsIl9FcnJvciIsIl93cmFwTmF0aXZlU3VwZXIiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsImZpbmRCeUlkQW5kRGVsZXRlIiwicXVlcnkiLCJjb3VudCIsImNvdW50RG9jdW1lbnRzIiwiYWdncmVnYXRlIiwicGlwZWxpbmUiLCJpbnNlcnRNYW55IiwidXBkYXRlTWFueSIsImJ1bGtXcml0ZSIsIm9wZXJhdGlvbnMiLCJfdXBzZXJ0IiwiZmluZERhdGEiLCJ1cHNlcnQiLCJjcmVhdGVTZXJ2ZXIiLCJzZXJ2ZXIiLCJQT1JUIiwibGlzdGVuIl0sInNvdXJjZVJvb3QiOiIifQ==