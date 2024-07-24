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
  }, {
    key: "forgotPassword",
    value: function () {
      var _forgotPassword = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4(request, response) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.authService.forgotPassword(request.body);
            case 2:
              response.success({
                message: "Password reset email sent. Please check your inbox.",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.OK
              });
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function forgotPassword(_x7, _x8) {
        return _forgotPassword.apply(this, arguments);
      }
      return forgotPassword;
    }()
  }, {
    key: "resetCodeCheck",
    value: function () {
      var _resetCodeCheck = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee5(request, response) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.authService.resetCodeCheck(request.body);
            case 2:
              data = _context5.sent;
              response.success({
                message: "Reset code verified  successfully.",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.OK,
                data: new _dto_auth_dto__WEBPACK_IMPORTED_MODULE_5__.AuthDto(data)
              });
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function resetCodeCheck(_x9, _x10) {
        return _resetCodeCheck.apply(this, arguments);
      }
      return resetCodeCheck;
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
authRouter.post("".concat(prefix, "/forgot-password"), authController.forgotPassword);

// authRouter.post(`${prefix}/reset-code-check`, authController.resetCodeCheck);

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
/* harmony import */ var _common_helpers_hash_password__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/helpers/hash-password */ "./src/common/helpers/hash-password.js");
/* harmony import */ var _common_helpers_jwt_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/helpers/jwt-token */ "./src/common/helpers/jwt-token.js");
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
              return (0,_common_helpers_hash_password__WEBPACK_IMPORTED_MODULE_4__.comparePassword)(password, existingUser.password);
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
    key: "forgotPassword",
    value: function () {
      var _forgotPassword = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(email) {
        var _existingUser$existin;
        var existingUser;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.userService.findByEmail(email);
            case 2:
              existingUser = _context3.sent;
              if (!(!existingUser || !((_existingUser$existin = existingUser.existingUser.emailVerification) !== null && _existingUser$existin !== void 0 && _existingUser$existin.verified))) {
                _context3.next = 5;
                break;
              }
              throw new _core_response_base_response__WEBPACK_IMPORTED_MODULE_8__.BaseResponse.error({
                message: "User with this email does not exist.",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_9__.StatusCodes.NOT_FOUND
              });
            case 5:
              existingUser.passwordReset = {
                code: this.generateVerificationCode(),
                expiresAt: this.getVerificationCodeExpiry(5)
              };
              _context3.next = 8;
              return existingUser.save();
            case 8:
              _context3.next = 10;
              return this.emailService.sendVerificationEmail(existingUser.contact.email, existingUser.passwordReset.code, "Hi, This Reset Code");
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function forgotPassword(_x3) {
        return _forgotPassword.apply(this, arguments);
      }
      return forgotPassword;
    }()
  }, {
    key: "verifyEmail",
    value: function () {
      var _verifyEmail = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4(verificationDto) {
        var _existingUser$emailVe3;
        var code, email, existingUser, now, payload, token;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              code = verificationDto.code, email = verificationDto.email;
              _context4.next = 3;
              return this.userService.findByEmail(email);
            case 3:
              existingUser = _context4.sent;
              if (existingUser) {
                _context4.next = 6;
                break;
              }
              throw new _core_response_base_response__WEBPACK_IMPORTED_MODULE_8__.BaseResponse.error({
                message: "User with this email does not exist.",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_9__.StatusCodes.CONFLICT
              });
            case 6:
              if (!((_existingUser$emailVe3 = existingUser.emailVerification) !== null && _existingUser$emailVe3 !== void 0 && _existingUser$emailVe3.verified)) {
                _context4.next = 8;
                break;
              }
              throw new _core_response_base_response__WEBPACK_IMPORTED_MODULE_8__.BaseResponse.error({
                message: "Your email is already verified. Please login to continue.",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_9__.StatusCodes.BAD_REQUEST
              });
            case 8:
              if (!(existingUser.emailVerification.code !== code)) {
                _context4.next = 10;
                break;
              }
              throw new _core_response_base_response__WEBPACK_IMPORTED_MODULE_8__.BaseResponse.error({
                message: "Invalid verification code.",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_9__.StatusCodes.BAD_REQUEST
              });
            case 10:
              now = Date.now();
              if (!(existingUser.emailVerification.expiresAt < now)) {
                _context4.next = 19;
                break;
              }
              existingUser.emailVerification.code = (0,_common_helpers_verification__WEBPACK_IMPORTED_MODULE_6__.generateVerificationCode)();
              existingUser.emailVerification.expiresAt = (0,_common_helpers_verification__WEBPACK_IMPORTED_MODULE_6__.getVerificationCodeExpiry)(3);
              _context4.next = 16;
              return existingUser.save();
            case 16:
              _context4.next = 18;
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
              _context4.next = 24;
              return existingUser.save();
            case 24:
              payload = {
                sub: existingUser._id,
                email: email
              };
              _context4.next = 27;
              return this.createToken(payload);
            case 27:
              token = _context4.sent;
              return _context4.abrupt("return", {
                token: token,
                user: existingUser
              });
            case 29:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function verifyEmail(_x4) {
        return _verifyEmail.apply(this, arguments);
      }
      return verifyEmail;
    }()
  }, {
    key: "resetCodeCheck",
    value: function () {
      var _resetCodeCheck = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee5(resetCodeCheckDto) {
        var _existingUser$emailVe4;
        var email, code, existingUser, now, payload, token;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              email = resetCodeCheckDto.email, code = resetCodeCheckDto.code;
              _context5.next = 3;
              return this.userService.findByEmail(email);
            case 3:
              existingUser = _context5.sent;
              if (!(!existingUser || !((_existingUser$emailVe4 = existingUser.emailVerification) !== null && _existingUser$emailVe4 !== void 0 && _existingUser$emailVe4.verified))) {
                _context5.next = 6;
                break;
              }
              throw new Error("User with this email does not exist or is not verified.");
            case 6:
              if (!(existingUser.emailVerification.code !== code)) {
                _context5.next = 8;
                break;
              }
              throw new _core_response_base_response__WEBPACK_IMPORTED_MODULE_8__.BaseResponse.error({
                message: "Invalid reset code.",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_9__.StatusCodes.BAD_REQUEST
              });
            case 8:
              now = Date.now();
              if (!(existingUser.emailVerification.expiresAt < now)) {
                _context5.next = 17;
                break;
              }
              existingUser.emailVerification.code = (0,_common_helpers_verification__WEBPACK_IMPORTED_MODULE_6__.generateVerificationCode)();
              existingUser.emailVerification.expiresAt = (0,_common_helpers_verification__WEBPACK_IMPORTED_MODULE_6__.getVerificationCodeExpiry)(5);
              _context5.next = 14;
              return existingUser.save();
            case 14:
              _context5.next = 16;
              return this.emailService.sendVerificationEmail(existingUser.contact.email, existingUser.emailVerification.code, "Hi, This Reset Code");
            case 16:
              throw new _core_response_base_response__WEBPACK_IMPORTED_MODULE_8__.BaseResponse.error({
                message: "Reset code has expired. A new code has been sent to your email.",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_9__.StatusCodes.BAD_REQUEST
              });
            case 17:
              existingUser.emailVerification.code = undefined;
              existingUser.emailVerification.expiresAt = undefined;
              _context5.next = 21;
              return existingUser.save();
            case 21:
              payload = {
                sub: existingUser._id,
                email: email
              };
              _context5.next = 24;
              return this.verificationToken(payload);
            case 24:
              token = _context5.sent;
              return _context5.abrupt("return", {
                user: existingUser,
                token: token
              });
            case 26:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function resetCodeCheck(_x5) {
        return _resetCodeCheck.apply(this, arguments);
      }
      return resetCodeCheck;
    }()
  }, {
    key: "createToken",
    value: function () {
      var _createToken = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee6(payload) {
        var _config$jwt, accessSecret, accessExpiresIn, refreshSecret, refreshExpiresIn, accessToken, refreshToken;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _config$jwt = _core_config_jwt_config__WEBPACK_IMPORTED_MODULE_7__.config.jwt, accessSecret = _config$jwt.accessSecret, accessExpiresIn = _config$jwt.accessExpiresIn, refreshSecret = _config$jwt.refreshSecret, refreshExpiresIn = _config$jwt.refreshExpiresIn;
              _context6.next = 3;
              return (0,_common_helpers_jwt_token__WEBPACK_IMPORTED_MODULE_5__.generateToken)(payload, accessSecret, accessExpiresIn);
            case 3:
              accessToken = _context6.sent;
              _context6.next = 6;
              return (0,_common_helpers_jwt_token__WEBPACK_IMPORTED_MODULE_5__.generateToken)(payload, refreshSecret, refreshExpiresIn);
            case 6:
              refreshToken = _context6.sent;
              _context6.next = 9;
              return this.userService.update(payload.sub, {
                token: {
                  refresh: refreshToken
                }
              });
            case 9:
              return _context6.abrupt("return", {
                accessToken: accessToken,
                refreshToken: refreshToken
              });
            case 10:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function createToken(_x6) {
        return _createToken.apply(this, arguments);
      }
      return createToken;
    }()
  }, {
    key: "verificationToken",
    value: function () {
      var _verificationToken = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee7(payload) {
        var _config$jwt2, verificationExpiresIn, verificationSecret;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _config$jwt2 = _core_config_jwt_config__WEBPACK_IMPORTED_MODULE_7__.config.jwt, verificationExpiresIn = _config$jwt2.verificationExpiresIn, verificationSecret = _config$jwt2.verificationSecret;
              return _context7.abrupt("return", (0,_common_helpers_jwt_token__WEBPACK_IMPORTED_MODULE_5__.generateToken)(payload, verificationSecret, verificationExpiresIn));
            case 2:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      function verificationToken(_x7) {
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
              return this.foooterService.findAll()[0];
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
  }, {
    key: "create",
    value: function () {
      var _create = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(req, res) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.foooterService.create(req.body, req.file.socialMedia);
            case 2:
              data = _context2.sent;
              res.success({
                message: "Footer Created successfully!",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.OK,
                data: new _dto_footer_dto__WEBPACK_IMPORTED_MODULE_5__.FooterDto(data)
              });
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function create(_x3, _x4) {
        return _create.apply(this, arguments);
      }
      return create;
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
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! multer */ "multer");
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _footer_di__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.di */ "./src/api/footer/footer.di.js");




var upload = multer__WEBPACK_IMPORTED_MODULE_2___default()();
var prefix = "/footers";
var footerRouter = express__WEBPACK_IMPORTED_MODULE_1___default().Router();
var footerController = _core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.get(_footer_di__WEBPACK_IMPORTED_MODULE_3__.footerDIKeys.controller);
footerRouter.get("".concat(prefix), function (req, res) {
  return footerController.find(req, res);
});
footerRouter.post("".concat(prefix), upload.none(), function (req, res) {
  return footerController.create(req, res);
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
        var data, uploadedsocialMediaIcons, _JSON$parse, openingDay, closingDay, openingHour, closingHour;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.findAll();
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
              _JSON$parse = JSON.parse(footerDto.daySchedule), openingDay = _JSON$parse.openingDay, closingDay = _JSON$parse.closingDay, openingHour = _JSON$parse.openingHour, closingHour = _JSON$parse.closingHour;
              console.log(socialMediaIcons);
              console.log("uploadedsocialMediaIcons");
              if (!(socialMediaIcons && socialMediaIcons.length > 0)) {
                _context.next = 13;
                break;
              }
              _context.next = 12;
              return this.storageService.uploadFiles(socialMediaIcons);
            case 12:
              uploadedsocialMediaIcons = _context.sent;
            case 13:
              console.log(uploadedsocialMediaIcons);

              // footerDto.socialMedia = uploadedsocialMediaIcons;
              // footerDto.daySchedule.days = [openingDay, closingDay];
              // footerDto.daySchedule.hours = [openingHour, closingHour];

              console.log();
              return _context.abrupt("return", this.footerRepository.create({
                daySchedule: {
                  days: [openingDay, closingDay],
                  hours: [openingHour, closingHour]
                },
                location: "efwere",
                title: "sfwegw",
                copyright: "copyright",
                socialMedia: uploadedsocialMediaIcons
              }));
            case 16:
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
    key: "findAll",
    value: function () {
      var _findAll = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.footerRepository.findAll());
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function findAll() {
        return _findAll.apply(this, arguments);
      }
      return findAll;
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

/***/ "./src/api/footer/model/daily-schedule.model.js":
/*!******************************************************!*\
  !*** ./src/api/footer/model/daily-schedule.model.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dayScheduleSchema: () => (/* binding */ dayScheduleSchema)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var dayScheduleSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  days: {
    type: [String],
    required: true
  },
  hours: {
    type: [String],
    required: true
  }
}, {
  _id: false
});

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
/* harmony import */ var _daily_schedule_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./daily-schedule.model */ "./src/api/footer/model/daily-schedule.model.js");




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
  daySchedule: _daily_schedule_model__WEBPACK_IMPORTED_MODULE_3__.dayScheduleSchema,
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
  }, {
    key: "findByEmailOrThrow",
    value: function () {
      var _findByEmailOrThrow = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee6(email) {
        var user;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.findByEmail(email);
            case 2:
              user = _context6.sent;
              if (user) {
                _context6.next = 5;
                break;
              }
              throw new _core_response_base_response__WEBPACK_IMPORTED_MODULE_5__.BaseResponse.error({
                message: "User with this email does not exist.",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_6__.StatusCodes.NOT_FOUND
              });
            case 5:
              return _context6.abrupt("return", user);
            case 6:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function findByEmailOrThrow(_x7) {
        return _findByEmailOrThrow.apply(this, arguments);
      }
      return findByEmailOrThrow;
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

/***/ "./src/common/helpers/jwt-token.js":
/*!*****************************************!*\
  !*** ./src/common/helpers/jwt-token.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decodedToken: () => (/* binding */ decodedToken),
/* harmony export */   generateToken: () => (/* binding */ generateToken)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_response_base_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/response/base-response */ "./src/core/response/base-response.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);





var generateToken = function generateToken(payload, secret, time) {
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().sign(payload, secret, {
    expiresIn: time,
    algorithm: "HS512"
  });
};
var decodedToken = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(token, secret) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (token) {
            _context.next = 2;
            break;
          }
          throw new _core_response_base_response__WEBPACK_IMPORTED_MODULE_2__.BaseResponse.error({
            message: "No token provided",
            status: http_status_codes__WEBPACK_IMPORTED_MODULE_3__.StatusCodes.BAD_REQUEST
          });
        case 2:
          // eslint-disable-next-line prefer-destructuring
          token = token.split(" ")[1];
          if (token) {
            _context.next = 5;
            break;
          }
          throw new _core_response_base_response__WEBPACK_IMPORTED_MODULE_2__.BaseResponse.error({
            message: "Invalid token format",
            status: http_status_codes__WEBPACK_IMPORTED_MODULE_3__.StatusCodes.BAD_REQUEST
          });
        case 5:
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().verify(token, secret, function (err, decoded) {
              if (err) {
                reject(new _core_response_base_response__WEBPACK_IMPORTED_MODULE_2__.BaseResponse.error({
                  message: "Token verification failed",
                  status: http_status_codes__WEBPACK_IMPORTED_MODULE_3__.StatusCodes.UNAUTHORIZED
                }));
              } else {
                resolve(decoded);
              }
            });
          }));
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function decodedToken(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();


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

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksR0FBSzlFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFwQjZFLElBQUk7QUFFWm5hLDhFQUFBLGVBQUFDLHNFQUFBLENBQUMsU0FBQXNCLFNBQUE7RUFBQSxPQUFBdEIsc0VBQUEsVUFBQXdCLFVBQUFDLFNBQUE7SUFBQSxrQkFBQUEsU0FBQSxDQUFBakIsSUFBQSxHQUFBaUIsU0FBQSxDQUFBaEIsSUFBQTtNQUFBO1FBQUFnQixTQUFBLENBQUFoQixJQUFBO1FBQUEsT0FDT3dVLDBFQUFrQixDQUFDLENBQUM7TUFBQTtRQUFBeFQsU0FBQSxDQUFBaEIsSUFBQTtRQUFBLE9BQ3BCMlcsbURBQUksQ0FBQyxDQUFDO01BQUE7UUFDWjZDLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDRCxJQUFJLGVBQUFuYSw4RUFBQSxlQUFBQyxzRUFBQSxDQUFFLFNBQUFFLFFBQUE7VUFBQSxPQUFBRixzRUFBQSxVQUFBTSxTQUFBQyxRQUFBO1lBQUEsa0JBQUFBLFFBQUEsQ0FBQUMsSUFBQSxHQUFBRCxRQUFBLENBQUFFLElBQUE7Y0FBQTtnQkFDbEJvTCxPQUFPLENBQUNDLEdBQUcsd0NBQUF6SCxNQUFBLENBQXdDNlYsSUFBSSxDQUFFLENBQUM7Y0FBQztjQUFBO2dCQUFBLE9BQUEzWixRQUFBLENBQUFTLElBQUE7WUFBQTtVQUFBLEdBQUFkLE9BQUE7UUFBQSxDQUM1RCxHQUFDO01BQUM7TUFBQTtRQUFBLE9BQUF1QixTQUFBLENBQUFULElBQUE7SUFBQTtFQUFBLEdBQUFNLFFBQUE7QUFBQSxDQUNKLEdBQUUsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL2F1dGgvYXV0aC5jb250cm9sbGVyLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9hdXRoL2F1dGguZGkuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL2F1dGgvYXV0aC5yb3V0ZS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvYXV0aC9hdXRoLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL2F1dGgvZHRvL2F1dGguZHRvLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9hdXRoL2R0by90b2tlbi5kdG8uanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL2Zvb3Rlci9kdG8vZm9vdGVyLmR0by5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvZm9vdGVyL2Zvb3Rlci5jb250cm9sbGVyLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9mb290ZXIvZm9vdGVyLmRpLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9mb290ZXIvZm9vdGVyLnJlcG9zaXRveS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvZm9vdGVyL2Zvb3Rlci5yb3V0ZS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvZm9vdGVyL2Zvb3Rlci5zZXJ2aWNlLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9mb290ZXIvbW9kZWwvZGFpbHktc2NoZWR1bGUubW9kZWwuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL2Zvb3Rlci9tb2RlbC9mb290ZXIubW9kZWwuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL3JvbGUvbW9kZWwvcm9sZS5tb2RlbC5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvcm9sZS9yb2xlLmRpLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS9yb2xlL3JvbGUucmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvcm9sZS9yb2xlLnNlZWRlci5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvdXNlci9kdG8vdXNlci5kdG8uanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL3VzZXIvbW9kZWwvZW1haWwtdmVyaWZpY2F0aW9uLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS91c2VyL21vZGVsL3JlZnJlc2gtdG9rZW4uanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBpL3VzZXIvbW9kZWwvdXNlci5tb2RlbC5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvdXNlci91c2VyLmRpLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2FwaS91c2VyL3VzZXIucmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvdXNlci91c2VyLnNlZWRlci5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9hcGkvdXNlci91c2VyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvbW1vbi9jb25zdGFudHMvYXBpLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvbW1vbi9jb25zdGFudHMvcm9sZS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb21tb24vaGVscGVycy9oYXNoLXBhc3N3b3JkLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvbW1vbi9oZWxwZXJzL2p3dC10b2tlbi5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb21tb24vaGVscGVycy92ZXJpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29tbW9uL21vbmdvb3NlL3BsdWdpbnMvYXV0by1pbmNyZW1lbnQucGx1Z2luLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvbW1vbi9zY2hlbWEvZHRvL2NvbnRhY3QuZHRvLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvbW1vbi9zY2hlbWEvbW9kZWwvYXNzZXQtbW9kZWwuc2NoZW1hLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvbW1vbi9zY2hlbWEvbW9kZWwvY29udGFjdC1tb2RlbC5zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29yZS9jb25maWcvZGIuY29uZmlnLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvcmUvY29uZmlnL2Vudi5jb25maWcuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29yZS9jb25maWcvand0LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL2NvbmZpZy9tYWlsLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL2NvbmZpZy9zd2FnZ2VyLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL2RiL3NlZWQuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29yZS9kaS9kaS1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29yZS9kaS9kaS1nbG9iYWxzLmpzIiwid2VicGFjazovL2NmLXdzLy4vc3JjL2NvcmUvbWlkZGxld2FyZS9iYXNlLXJlc3BvbnNlLm1pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvY29yZS9taWRkbGV3YXJlL2Vycm9yLWhhbmRsZXItbWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9jb3JlL3Jlc3BvbnNlL2Jhc2UtcmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvc2VydmljZXMvZW1haWwvZW1haWwuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9jZi13cy8uL3NyYy9zaGFyZWQvZXJyb3ItcmVzcG9uc2UvZXJyb3ItcmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvc2hhcmVkL3JlcG9zaXRvcnkvYmFzZS5yZXBvc2l0b3J5LmpzIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvd3JhcE5hdGl2ZVN1cGVyXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiYmNyeXB0XCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJjb29raWUtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3MtYXN5bmMtZXJyb3JzXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzLXJhdGUtbGltaXRcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcImh0dHAtc3RhdHVzLWNvZGVzXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vY2Ytd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJtdWx0ZXJcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcIm5vZGVtYWlsZXJcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcInN3YWdnZXItanNkb2NcIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBjb21tb25qcyBcInN3YWdnZXItdWktZXhwcmVzc1wiIiwid2VicGFjazovL2NmLXdzL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly9jZi13cy9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiaHR0cFwiIiwid2VicGFjazovL2NmLXdzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NmLXdzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NmLXdzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jZi13cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NmLXdzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2Ytd3MvLi9zcmMvc2VydmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmltcG9ydCB7IEF1dGhEdG8gfSBmcm9tIFwiLi9kdG8vYXV0aC5kdG9cIjtcblxuZXhwb3J0IGNsYXNzIEF1dGhDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoYXV0aFNlcnZpY2UpIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlID0gYXV0aFNlcnZpY2U7XG4gIH1cblxuICBhc3luYyByZWdpc3RlcihyZXF1ZXN0LCByZXNwb25zZSkge1xuICAgIGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UucmVnaXN0ZXIocmVxdWVzdC5ib2R5KTtcblxuICAgIHJlc3BvbnNlLnN1Y2Nlc3Moe1xuICAgICAgbWVzc2FnZTogXCJSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bC4gUGxlYXNlIHZlcmlmeSB5b3VyIGVtYWlsLlwiLFxuICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5DUkVBVEVELFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5RW1haWwocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS52ZXJpZnlFbWFpbChyZXF1ZXN0LmJvZHkpO1xuXG4gICAgcmVzcG9uc2Uuc3VjY2Vzcyh7XG4gICAgICBtZXNzYWdlOiBcIkVtYWlsIHZlcmlmaWVkIHN1Y2Nlc3NmdWxseS5cIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuQ1JFQVRFRCxcbiAgICAgIGRhdGE6IG5ldyBBdXRoRHRvKGRhdGEpLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgbG9naW4ocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5sb2dpbihyZXF1ZXN0LmJvZHkpO1xuXG4gICAgcmVzcG9uc2Uuc3VjY2Vzcyh7XG4gICAgICBtZXNzYWdlOiBcIlVzZXIgTG9naW4gc3VjY2Vzc2Z1bFwiLFxuICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5PSyxcbiAgICAgIGRhdGE6IG5ldyBBdXRoRHRvKHVzZXIpLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZm9yZ290UGFzc3dvcmQocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmZvcmdvdFBhc3N3b3JkKHJlcXVlc3QuYm9keSk7XG5cbiAgICByZXNwb25zZS5zdWNjZXNzKHtcbiAgICAgIG1lc3NhZ2U6IFwiUGFzc3dvcmQgcmVzZXQgZW1haWwgc2VudC4gUGxlYXNlIGNoZWNrIHlvdXIgaW5ib3guXCIsXG4gICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk9LLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgcmVzZXRDb2RlQ2hlY2socmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5yZXNldENvZGVDaGVjayhyZXF1ZXN0LmJvZHkpO1xuXG4gICAgcmVzcG9uc2Uuc3VjY2Vzcyh7XG4gICAgICBtZXNzYWdlOiBcIlJlc2V0IGNvZGUgdmVyaWZpZWQgIHN1Y2Nlc3NmdWxseS5cIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuT0ssXG4gICAgICBkYXRhOiBuZXcgQXV0aER0byhkYXRhKSxcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIkAvY29yZS9kaS9kaS1jb250YWluZXJcIjtcbmltcG9ydCB7IEVtYWlsU2VydmljZSB9IGZyb20gXCJAL3NlcnZpY2VzL2VtYWlsL2VtYWlsLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgdXNlckRJS2V5cyB9IGZyb20gXCIuLi91c2VyL3VzZXIuZGlcIjtcbmltcG9ydCB7IEF1dGhDb250cm9sbGVyIH0gZnJvbSBcIi4vYXV0aC5jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuL2F1dGguc2VydmljZVwiO1xuXG5leHBvcnQgY29uc3QgYXV0aERJS2V5cyA9IHtcbiAgY29udHJvbGxlcjogXCJhdXRoLWNvbnRyb2xsZXJcIixcbiAgc2VydmljZTogXCJhdXRoLXNlcnZpY2VcIixcbiAgZW1haWxTZXJ2aWNlOiBcImVtYWlsLXNlcnZpY2VcIixcbn07XG5cbmNvbnRhaW5lci5yZWdpc3RlcihhdXRoRElLZXlzLmVtYWlsU2VydmljZSwgW10sICgpID0+IG5ldyBFbWFpbFNlcnZpY2UoKSk7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgYXV0aERJS2V5cy5zZXJ2aWNlLFxuICBbdXNlckRJS2V5cy5zZXJ2aWNlLCBhdXRoRElLZXlzLmVtYWlsU2VydmljZV0sXG4gICh1c2VyU2VydmljZSwgZW1haWxTZXJ2aWNlKSA9PiBuZXcgQXV0aFNlcnZpY2UodXNlclNlcnZpY2UsIGVtYWlsU2VydmljZSksXG4pO1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIGF1dGhESUtleXMuY29udHJvbGxlcixcbiAgW2F1dGhESUtleXMuc2VydmljZV0sXG4gIChhdXRoU2VydmljZSkgPT4gbmV3IEF1dGhDb250cm9sbGVyKGF1dGhTZXJ2aWNlKSxcbik7XG4iLCJpbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiQC9jb3JlL2RpL2RpLWNvbnRhaW5lclwiO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcblxuaW1wb3J0IHsgYXV0aERJS2V5cyB9IGZyb20gXCIuL2F1dGguZGlcIjtcblxuY29uc3QgYXV0aFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbmNvbnN0IHByZWZpeCA9IFwiL2F1dGhcIjtcblxuY29uc3QgYXV0aENvbnRyb2xsZXIgPSBjb250YWluZXIuZ2V0KGF1dGhESUtleXMuY29udHJvbGxlcik7XG5cbmF1dGhSb3V0ZXIucG9zdChgJHtwcmVmaXh9L2xvZ2luYCwgKHJlcSwgcmVzKSA9PlxuICBhdXRoQ29udHJvbGxlci5sb2dpbihyZXEsIHJlcyksXG4pO1xuXG5hdXRoUm91dGVyLnBvc3QoYCR7cHJlZml4fS92ZXJpZnktZW1haWxgLCAocmVxLCByZXMpID0+XG4gIGF1dGhDb250cm9sbGVyLnZlcmlmeUVtYWlsKHJlcSwgcmVzKSxcbik7XG5cbmF1dGhSb3V0ZXIucG9zdChgJHtwcmVmaXh9L3JlZ2lzdGVyYCwgKHJlcSwgcmVzKSA9PlxuICBhdXRoQ29udHJvbGxlci5yZWdpc3RlcihyZXEsIHJlcyksXG4pO1xuXG5hdXRoUm91dGVyLnBvc3QoYCR7cHJlZml4fS9mb3Jnb3QtcGFzc3dvcmRgLCBhdXRoQ29udHJvbGxlci5mb3Jnb3RQYXNzd29yZCk7XG5cbi8vIGF1dGhSb3V0ZXIucG9zdChgJHtwcmVmaXh9L3Jlc2V0LWNvZGUtY2hlY2tgLCBhdXRoQ29udHJvbGxlci5yZXNldENvZGVDaGVjayk7XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhSb3V0ZXI7XG4iLCJpbXBvcnQgeyBjb21wYXJlUGFzc3dvcmQgfSBmcm9tIFwiQC9jb21tb24vaGVscGVycy9oYXNoLXBhc3N3b3JkXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVRva2VuIH0gZnJvbSBcIkAvY29tbW9uL2hlbHBlcnMvand0LXRva2VuXCI7XG5pbXBvcnQge1xuICBnZW5lcmF0ZVZlcmlmaWNhdGlvbkNvZGUsXG4gIGdldFZlcmlmaWNhdGlvbkNvZGVFeHBpcnksXG59IGZyb20gXCJAL2NvbW1vbi9oZWxwZXJzL3ZlcmlmaWNhdGlvblwiO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIkAvY29yZS9jb25maWcvand0LmNvbmZpZ1wiO1xuaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIkAvY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcih1c2VyU2VydmljZSwgZW1haWxTZXJ2aWNlKSB7XG4gICAgdGhpcy51c2VyU2VydmljZSA9IHVzZXJTZXJ2aWNlO1xuICAgIHRoaXMuZW1haWxTZXJ2aWNlID0gZW1haWxTZXJ2aWNlO1xuICB9XG5cbiAgYXN5bmMgcmVnaXN0ZXIoYXV0aFJlZ2lzdGVyRHRvKSB7XG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS5maW5kQnlFbWFpbChcbiAgICAgIGF1dGhSZWdpc3RlckR0by5jb250YWN0LmVtYWlsLFxuICAgICk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyICYmIGV4aXN0aW5nVXNlci5lbWFpbFZlcmlmaWNhdGlvbj8udmVyaWZpZWQpIHtcbiAgICAgIHRocm93IG5ldyBCYXNlUmVzcG9uc2UuZXJyb3Ioe1xuICAgICAgICBtZXNzYWdlOiBcIkVtYWlsIGlzIGFscmVhZHkgaW4gdXNlXCIsXG4gICAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuQ09ORkxJQ1QsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyICYmICFleGlzdGluZ1VzZXIuZW1haWxWZXJpZmljYXRpb24/LnZlcmlmaWVkKSB7XG4gICAgICBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmRlbGV0ZShleGlzdGluZ1VzZXIuX2lkKTtcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJpZmljYXRpb25Db2RlID0gZ2VuZXJhdGVWZXJpZmljYXRpb25Db2RlKCk7XG4gICAgY29uc3QgdmVyaWZpY2F0aW9uVGltZSA9IGdldFZlcmlmaWNhdGlvbkNvZGVFeHBpcnkoMyk7XG5cbiAgICBhdXRoUmVnaXN0ZXJEdG8ucm9sZSA9IDI7XG5cbiAgICBhdXRoUmVnaXN0ZXJEdG8uZW1haWxWZXJpZmljYXRpb24gPSB7XG4gICAgICBjb2RlOiB2ZXJpZmljYXRpb25Db2RlLFxuICAgICAgZXhwaXJlc0F0OiB2ZXJpZmljYXRpb25UaW1lLFxuICAgICAgdmVyaWZpZWQ6IGZhbHNlLFxuICAgIH07XG5cbiAgICBjb25zdCBzYXZlZFVzZXIgPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmNyZWF0ZShhdXRoUmVnaXN0ZXJEdG8pO1xuXG4gICAgYXdhaXQgdGhpcy5lbWFpbFNlcnZpY2Uuc2VuZFZlcmlmaWNhdGlvbkVtYWlsKFxuICAgICAgc2F2ZWRVc2VyLmNvbnRhY3QuZW1haWwsXG4gICAgICBzYXZlZFVzZXIuZW1haWxWZXJpZmljYXRpb24uY29kZSxcbiAgICAgIFwiSGksIFRoaXMgRW1haWwgVmVyaWZpY2F0aW9uIENvZGVcIixcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgbG9naW4oYXV0aGxvZ2luRHRvKSB7XG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGF1dGhsb2dpbkR0bztcblxuICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuZmluZEJ5RW1haWwoZW1haWwpO1xuXG4gICAgaWYgKFxuICAgICAgIWV4aXN0aW5nVXNlciB8fFxuICAgICAgIShhd2FpdCBjb21wYXJlUGFzc3dvcmQocGFzc3dvcmQsIGV4aXN0aW5nVXNlci5wYXNzd29yZCkpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgICAgbWVzc2FnZTogXCJFbWFpbCBvciBQYXNzd29yZCBpcyBpbmNvcnJlY3QuXCIsXG4gICAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuVU5BVVRIT1JJWkVELFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIHN1YjogZXhpc3RpbmdVc2VyLl9pZCxcbiAgICAgIGVtYWlsLFxuICAgIH07XG5cbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRoaXMuY3JlYXRlVG9rZW4ocGF5bG9hZCk7XG5cbiAgICByZXR1cm4geyB1c2VyOiBleGlzdGluZ1VzZXIsIHRva2VuIH07XG4gIH1cblxuICBhc3luYyBmb3Jnb3RQYXNzd29yZChlbWFpbCkge1xuICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuZmluZEJ5RW1haWwoZW1haWwpO1xuXG4gICAgaWYgKFxuICAgICAgIWV4aXN0aW5nVXNlciB8fFxuICAgICAgIWV4aXN0aW5nVXNlci5leGlzdGluZ1VzZXIuZW1haWxWZXJpZmljYXRpb24/LnZlcmlmaWVkXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgICAgbWVzc2FnZTogXCJVc2VyIHdpdGggdGhpcyBlbWFpbCBkb2VzIG5vdCBleGlzdC5cIixcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5OT1RfRk9VTkQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBleGlzdGluZ1VzZXIucGFzc3dvcmRSZXNldCA9IHtcbiAgICAgIGNvZGU6IHRoaXMuZ2VuZXJhdGVWZXJpZmljYXRpb25Db2RlKCksXG4gICAgICBleHBpcmVzQXQ6IHRoaXMuZ2V0VmVyaWZpY2F0aW9uQ29kZUV4cGlyeSg1KSxcbiAgICB9O1xuXG4gICAgYXdhaXQgZXhpc3RpbmdVc2VyLnNhdmUoKTtcblxuICAgIGF3YWl0IHRoaXMuZW1haWxTZXJ2aWNlLnNlbmRWZXJpZmljYXRpb25FbWFpbChcbiAgICAgIGV4aXN0aW5nVXNlci5jb250YWN0LmVtYWlsLFxuICAgICAgZXhpc3RpbmdVc2VyLnBhc3N3b3JkUmVzZXQuY29kZSxcbiAgICAgIFwiSGksIFRoaXMgUmVzZXQgQ29kZVwiLFxuICAgICk7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlFbWFpbCh2ZXJpZmljYXRpb25EdG8pIHtcbiAgICBjb25zdCB7IGNvZGUsIGVtYWlsIH0gPSB2ZXJpZmljYXRpb25EdG87XG5cbiAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmZpbmRCeUVtYWlsKGVtYWlsKTtcblxuICAgIGlmICghZXhpc3RpbmdVc2VyKSB7XG4gICAgICB0aHJvdyBuZXcgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgICAgbWVzc2FnZTogXCJVc2VyIHdpdGggdGhpcyBlbWFpbCBkb2VzIG5vdCBleGlzdC5cIixcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5DT05GTElDVCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChleGlzdGluZ1VzZXIuZW1haWxWZXJpZmljYXRpb24/LnZlcmlmaWVkKSB7XG4gICAgICB0aHJvdyBuZXcgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgICAgbWVzc2FnZTogXCJZb3VyIGVtYWlsIGlzIGFscmVhZHkgdmVyaWZpZWQuIFBsZWFzZSBsb2dpbiB0byBjb250aW51ZS5cIixcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChleGlzdGluZ1VzZXIuZW1haWxWZXJpZmljYXRpb24uY29kZSAhPT0gY29kZSkge1xuICAgICAgdGhyb3cgbmV3IEJhc2VSZXNwb25zZS5lcnJvcih7XG4gICAgICAgIG1lc3NhZ2U6IFwiSW52YWxpZCB2ZXJpZmljYXRpb24gY29kZS5cIixcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyLmVtYWlsVmVyaWZpY2F0aW9uLmV4cGlyZXNBdCA8IG5vdykge1xuICAgICAgZXhpc3RpbmdVc2VyLmVtYWlsVmVyaWZpY2F0aW9uLmNvZGUgPSBnZW5lcmF0ZVZlcmlmaWNhdGlvbkNvZGUoKTtcbiAgICAgIGV4aXN0aW5nVXNlci5lbWFpbFZlcmlmaWNhdGlvbi5leHBpcmVzQXQgPSBnZXRWZXJpZmljYXRpb25Db2RlRXhwaXJ5KDMpO1xuXG4gICAgICBhd2FpdCBleGlzdGluZ1VzZXIuc2F2ZSgpO1xuXG4gICAgICBhd2FpdCB0aGlzLmVtYWlsU2VydmljZS5zZW5kVmVyaWZpY2F0aW9uRW1haWwoXG4gICAgICAgIGV4aXN0aW5nVXNlci5jb250YWN0LmVtYWlsLFxuICAgICAgICBleGlzdGluZ1VzZXIuZW1haWxWZXJpZmljYXRpb24uY29kZSxcbiAgICAgICAgXCJIaSwgVGhpcyBFbWFpbCBWZXJpZmljYXRpb24gQ29kZVwiLFxuICAgICAgKTtcblxuICAgICAgdGhyb3cgbmV3IEJhc2VSZXNwb25zZS5lcnJvcih7XG4gICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgXCJWZXJpZmljYXRpb24gY29kZSBoYXMgZXhwaXJlZC4gQSBuZXcgY29kZSBoYXMgYmVlbiBzZW50IHRvIHlvdXIgZW1haWwuXCIsXG4gICAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBleGlzdGluZ1VzZXIuZW1haWxWZXJpZmljYXRpb24udmVyaWZpZWQgPSB0cnVlO1xuICAgIGV4aXN0aW5nVXNlci5lbWFpbFZlcmlmaWNhdGlvbi5jb2RlID0gdW5kZWZpbmVkO1xuICAgIGV4aXN0aW5nVXNlci5lbWFpbFZlcmlmaWNhdGlvbi5leHBpcmVzQXQgPSB1bmRlZmluZWQ7XG5cbiAgICBhd2FpdCBleGlzdGluZ1VzZXIuc2F2ZSgpO1xuXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIHN1YjogZXhpc3RpbmdVc2VyLl9pZCxcbiAgICAgIGVtYWlsLFxuICAgIH07XG5cbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRoaXMuY3JlYXRlVG9rZW4ocGF5bG9hZCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdG9rZW4sXG4gICAgICB1c2VyOiBleGlzdGluZ1VzZXIsXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIHJlc2V0Q29kZUNoZWNrKHJlc2V0Q29kZUNoZWNrRHRvKSB7XG4gICAgY29uc3QgeyBlbWFpbCwgY29kZSB9ID0gcmVzZXRDb2RlQ2hlY2tEdG87XG5cbiAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmZpbmRCeUVtYWlsKGVtYWlsKTtcblxuICAgIGlmICghZXhpc3RpbmdVc2VyIHx8ICFleGlzdGluZ1VzZXIuZW1haWxWZXJpZmljYXRpb24/LnZlcmlmaWVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiVXNlciB3aXRoIHRoaXMgZW1haWwgZG9lcyBub3QgZXhpc3Qgb3IgaXMgbm90IHZlcmlmaWVkLlwiLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyLmVtYWlsVmVyaWZpY2F0aW9uLmNvZGUgIT09IGNvZGUpIHtcbiAgICAgIHRocm93IG5ldyBCYXNlUmVzcG9uc2UuZXJyb3Ioe1xuICAgICAgICBtZXNzYWdlOiBcIkludmFsaWQgcmVzZXQgY29kZS5cIixcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyLmVtYWlsVmVyaWZpY2F0aW9uLmV4cGlyZXNBdCA8IG5vdykge1xuICAgICAgZXhpc3RpbmdVc2VyLmVtYWlsVmVyaWZpY2F0aW9uLmNvZGUgPSBnZW5lcmF0ZVZlcmlmaWNhdGlvbkNvZGUoKTtcbiAgICAgIGV4aXN0aW5nVXNlci5lbWFpbFZlcmlmaWNhdGlvbi5leHBpcmVzQXQgPSBnZXRWZXJpZmljYXRpb25Db2RlRXhwaXJ5KDUpO1xuXG4gICAgICBhd2FpdCBleGlzdGluZ1VzZXIuc2F2ZSgpO1xuXG4gICAgICBhd2FpdCB0aGlzLmVtYWlsU2VydmljZS5zZW5kVmVyaWZpY2F0aW9uRW1haWwoXG4gICAgICAgIGV4aXN0aW5nVXNlci5jb250YWN0LmVtYWlsLFxuICAgICAgICBleGlzdGluZ1VzZXIuZW1haWxWZXJpZmljYXRpb24uY29kZSxcbiAgICAgICAgXCJIaSwgVGhpcyBSZXNldCBDb2RlXCIsXG4gICAgICApO1xuXG4gICAgICB0aHJvdyBuZXcgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICBcIlJlc2V0IGNvZGUgaGFzIGV4cGlyZWQuIEEgbmV3IGNvZGUgaGFzIGJlZW4gc2VudCB0byB5b3VyIGVtYWlsLlwiLFxuICAgICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNULFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhpc3RpbmdVc2VyLmVtYWlsVmVyaWZpY2F0aW9uLmNvZGUgPSB1bmRlZmluZWQ7XG4gICAgZXhpc3RpbmdVc2VyLmVtYWlsVmVyaWZpY2F0aW9uLmV4cGlyZXNBdCA9IHVuZGVmaW5lZDtcblxuICAgIGF3YWl0IGV4aXN0aW5nVXNlci5zYXZlKCk7XG5cbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgc3ViOiBleGlzdGluZ1VzZXIuX2lkLFxuICAgICAgZW1haWwsXG4gICAgfTtcblxuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy52ZXJpZmljYXRpb25Ub2tlbihwYXlsb2FkKTtcblxuICAgIHJldHVybiB7IHVzZXI6IGV4aXN0aW5nVXNlciwgdG9rZW4gfTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVRva2VuKHBheWxvYWQpIHtcbiAgICBjb25zdCB7IGFjY2Vzc1NlY3JldCwgYWNjZXNzRXhwaXJlc0luLCByZWZyZXNoU2VjcmV0LCByZWZyZXNoRXhwaXJlc0luIH0gPVxuICAgICAgY29uZmlnLmp3dDtcblxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gYXdhaXQgZ2VuZXJhdGVUb2tlbihcbiAgICAgIHBheWxvYWQsXG4gICAgICBhY2Nlc3NTZWNyZXQsXG4gICAgICBhY2Nlc3NFeHBpcmVzSW4sXG4gICAgKTtcblxuICAgIGNvbnN0IHJlZnJlc2hUb2tlbiA9IGF3YWl0IGdlbmVyYXRlVG9rZW4oXG4gICAgICBwYXlsb2FkLFxuICAgICAgcmVmcmVzaFNlY3JldCxcbiAgICAgIHJlZnJlc2hFeHBpcmVzSW4sXG4gICAgKTtcblxuICAgIGF3YWl0IHRoaXMudXNlclNlcnZpY2UudXBkYXRlKHBheWxvYWQuc3ViLCB7XG4gICAgICB0b2tlbjogeyByZWZyZXNoOiByZWZyZXNoVG9rZW4gfSxcbiAgICB9KTtcblxuICAgIHJldHVybiB7IGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4gfTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmaWNhdGlvblRva2VuKHBheWxvYWQpIHtcbiAgICBjb25zdCB7IHZlcmlmaWNhdGlvbkV4cGlyZXNJbiwgdmVyaWZpY2F0aW9uU2VjcmV0IH0gPSBjb25maWcuand0O1xuXG4gICAgcmV0dXJuIGdlbmVyYXRlVG9rZW4ocGF5bG9hZCwgdmVyaWZpY2F0aW9uU2VjcmV0LCB2ZXJpZmljYXRpb25FeHBpcmVzSW4pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBVc2VyRHRvIH0gZnJvbSBcIkAvYXBpL3VzZXIvZHRvL3VzZXIuZHRvXCI7XG5cbmltcG9ydCB7IFRva2VuRHRvIH0gZnJvbSBcIi4vdG9rZW4uZHRvXCI7XG5cbmV4cG9ydCBjbGFzcyBBdXRoRHRvIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMudG9rZW4gPSBuZXcgVG9rZW5EdG8oZGF0YS50b2tlbik7XG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXJEdG8oZGF0YS51c2VyKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFRva2VuRHRvIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuYWNjZXNzID0gZGF0YS5hY2Nlc3NUb2tlbjtcbiAgICB0aGlzLnJlZnJlc2ggPSBkYXRhLnJlZnJlc2hUb2tlbjtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEZvb3RlckR0byB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBjb250YWN0LFxuICAgIGxvY2F0aW9uLFxuICAgIHRpdGxlLFxuICAgIGNvcHlyaWdodCxcbiAgICBvcGVuaW5nRGF5LFxuICAgIG9wZW5pbmdIb3VyLFxuICAgIHNvY2lhbE1lZGlhLFxuICB9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICBjb250YWN0LFxuICAgICAgbG9jYXRpb24sXG4gICAgICB0aXRsZSxcbiAgICAgIGNvcHlyaWdodCxcbiAgICAgIG9wZW5pbmdEYXksXG4gICAgICBvcGVuaW5nSG91cixcbiAgICAgIHNvY2lhbE1lZGlhLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5pbXBvcnQgeyBGb290ZXJEdG8gfSBmcm9tIFwiLi9kdG8vZm9vdGVyLmR0b1wiO1xuXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKGZvb290ZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy5mb29vdGVyU2VydmljZSA9IGZvb290ZXJTZXJ2aWNlO1xuICB9XG5cbiAgYXN5bmMgZmluZChyZXEsIHJlcykge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmZvb290ZXJTZXJ2aWNlLmZpbmRBbGwoKVswXTtcblxuICAgIHJlcy5zdWNjZXNzKHtcbiAgICAgIG1lc3NhZ2U6IFwiRmluZCBGb290ZXIgc3VjY2Vzc2Z1bGx5IVwiLFxuICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5PSyxcbiAgICAgIGRhdGE6IGRhdGEgPyBuZXcgRm9vdGVyRHRvKGRhdGEpIDogbnVsbCxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZShyZXEsIHJlcykge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmZvb290ZXJTZXJ2aWNlLmNyZWF0ZShcbiAgICAgIHJlcS5ib2R5LFxuICAgICAgcmVxLmZpbGUuc29jaWFsTWVkaWEsXG4gICAgKTtcblxuICAgIHJlcy5zdWNjZXNzKHtcbiAgICAgIG1lc3NhZ2U6IFwiRm9vdGVyIENyZWF0ZWQgc3VjY2Vzc2Z1bGx5IVwiLFxuICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5PSyxcbiAgICAgIGRhdGE6IG5ldyBGb290ZXJEdG8oZGF0YSksXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCJAL2NvcmUvZGkvZGktY29udGFpbmVyXCI7XG5cbmltcG9ydCB7IEZvb3RlckNvbnRyb2xsZXIgfSBmcm9tIFwiLi9mb290ZXIuY29udHJvbGxlclwiO1xuaW1wb3J0IHsgRm9vdGVyUmVwb3NpdG9yeSB9IGZyb20gXCIuL2Zvb3Rlci5yZXBvc2l0b3lcIjtcbmltcG9ydCB7IEZvb3RlclNlcnZpY2UgfSBmcm9tIFwiLi9mb290ZXIuc2VydmljZVwiO1xuXG5leHBvcnQgY29uc3QgZm9vdGVyRElLZXlzID0ge1xuICBzZXJ2aWNlOiBcImZvb3Rlci1zZXJ2aWNlXCIsXG4gIHJlcG9zaXRvcnk6IFwiZm9vdGVyLXJlcG9zaXRvcnlcIixcbiAgY29udHJvbGxlcjogXCJmb290ZXItY29udHJvbGxlclwiLFxufTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKGZvb3RlckRJS2V5cy5yZXBvc2l0b3J5LCBbXSwgKCkgPT4gbmV3IEZvb3RlclJlcG9zaXRvcnkoKSk7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgZm9vdGVyRElLZXlzLnNlcnZpY2UsXG4gIFtmb290ZXJESUtleXMucmVwb3NpdG9yeV0sXG4gIChmb290ZXJSZXBvc2l0b3J5KSA9PiBuZXcgRm9vdGVyU2VydmljZShmb290ZXJSZXBvc2l0b3J5KSxcbik7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgZm9vdGVyRElLZXlzLmNvbnRyb2xsZXIsXG4gIFtmb290ZXJESUtleXMuc2VydmljZV0sXG4gIChmb290ZXJTZXJ2aWNlKSA9PiBuZXcgRm9vdGVyQ29udHJvbGxlcihmb290ZXJTZXJ2aWNlKSxcbik7XG4iLCJpbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gXCJAL3NoYXJlZC9yZXBvc2l0b3J5L2Jhc2UucmVwb3NpdG9yeVwiO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL21vZGVsL2Zvb3Rlci5tb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgRm9vdGVyUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoRm9vdGVyKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIkAvY29yZS9kaS9kaS1jb250YWluZXJcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgbXVsdGVyIGZyb20gXCJtdWx0ZXJcIjtcblxuaW1wb3J0IHsgZm9vdGVyRElLZXlzIH0gZnJvbSBcIi4vZm9vdGVyLmRpXCI7XG5cbmNvbnN0IHVwbG9hZCA9IG11bHRlcigpO1xuXG5jb25zdCBwcmVmaXggPSBcIi9mb290ZXJzXCI7XG5cbmNvbnN0IGZvb3RlclJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbmNvbnN0IGZvb3RlckNvbnRyb2xsZXIgPSBjb250YWluZXIuZ2V0KGZvb3RlckRJS2V5cy5jb250cm9sbGVyKTtcblxuZm9vdGVyUm91dGVyLmdldChgJHtwcmVmaXh9YCwgKHJlcSwgcmVzKSA9PiBmb290ZXJDb250cm9sbGVyLmZpbmQocmVxLCByZXMpKTtcbmZvb3RlclJvdXRlci5wb3N0KGAke3ByZWZpeH1gLCB1cGxvYWQubm9uZSgpLCAocmVxLCByZXMpID0+XG4gIGZvb3RlckNvbnRyb2xsZXIuY3JlYXRlKHJlcSwgcmVzKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZvb3RlclJvdXRlcjtcbiIsImltcG9ydCB7IEJhc2VSZXNwb25zZSB9IGZyb20gXCJAL2NvcmUvcmVzcG9uc2UvYmFzZS1yZXNwb25zZVwiO1xuaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcblxuZXhwb3J0IGNsYXNzIEZvb3RlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihmb290ZXJSZXBvc2l0b3J5LCBzdG9yYWdlU2VydmljZSkge1xuICAgIHRoaXMuZm9vdGVyUmVwb3NpdG9yeSA9IGZvb3RlclJlcG9zaXRvcnk7XG4gICAgdGhpcy5zdG9yYWdlU2VydmljZSA9IHN0b3JhZ2VTZXJ2aWNlO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlKGZvb3RlckR0bywgc29jaWFsTWVkaWFJY29ucykge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmZpbmRBbGwoKTtcbiAgICBsZXQgdXBsb2FkZWRzb2NpYWxNZWRpYUljb25zID0gW107XG5cbiAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBCYXNlUmVzcG9uc2UuZXJyb3Ioe1xuICAgICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLkNPTkZMSUNULFxuICAgICAgICBtZXNzYWdlOiBcIkZvb3RlciBhbHJlYWR5IGV4aXN0cyAhXCIsXG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgeyBvcGVuaW5nRGF5LCBjbG9zaW5nRGF5LCBvcGVuaW5nSG91ciwgY2xvc2luZ0hvdXIgfSA9IEpTT04ucGFyc2UoXG4gICAgICBmb290ZXJEdG8uZGF5U2NoZWR1bGUsXG4gICAgKTtcblxuICAgIGNvbnNvbGUubG9nKHNvY2lhbE1lZGlhSWNvbnMpO1xuICAgIGNvbnNvbGUubG9nKFwidXBsb2FkZWRzb2NpYWxNZWRpYUljb25zXCIpO1xuXG4gICAgaWYgKHNvY2lhbE1lZGlhSWNvbnMgJiYgc29jaWFsTWVkaWFJY29ucy5sZW5ndGggPiAwKSB7XG4gICAgICB1cGxvYWRlZHNvY2lhbE1lZGlhSWNvbnMgPVxuICAgICAgICBhd2FpdCB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnVwbG9hZEZpbGVzKHNvY2lhbE1lZGlhSWNvbnMpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKHVwbG9hZGVkc29jaWFsTWVkaWFJY29ucyk7XG5cbiAgICAvLyBmb290ZXJEdG8uc29jaWFsTWVkaWEgPSB1cGxvYWRlZHNvY2lhbE1lZGlhSWNvbnM7XG4gICAgLy8gZm9vdGVyRHRvLmRheVNjaGVkdWxlLmRheXMgPSBbb3BlbmluZ0RheSwgY2xvc2luZ0RheV07XG4gICAgLy8gZm9vdGVyRHRvLmRheVNjaGVkdWxlLmhvdXJzID0gW29wZW5pbmdIb3VyLCBjbG9zaW5nSG91cl07XG5cbiAgICBjb25zb2xlLmxvZygpO1xuXG4gICAgcmV0dXJuIHRoaXMuZm9vdGVyUmVwb3NpdG9yeS5jcmVhdGUoe1xuICAgICAgZGF5U2NoZWR1bGU6IHtcbiAgICAgICAgZGF5czogW29wZW5pbmdEYXksIGNsb3NpbmdEYXldLFxuICAgICAgICBob3VyczogW29wZW5pbmdIb3VyLCBjbG9zaW5nSG91cl0sXG4gICAgICB9LFxuICAgICAgbG9jYXRpb246IFwiZWZ3ZXJlXCIsXG4gICAgICB0aXRsZTogXCJzZndlZ3dcIixcbiAgICAgIGNvcHlyaWdodDogXCJjb3B5cmlnaHRcIixcbiAgICAgIHNvY2lhbE1lZGlhOiB1cGxvYWRlZHNvY2lhbE1lZGlhSWNvbnMsXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBmaW5kQWxsKCkge1xuICAgIHJldHVybiB0aGlzLmZvb3RlclJlcG9zaXRvcnkuZmluZEFsbCgpO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlKGZvb3RlckR0bywgZmlsZXMpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5mb290ZXJSZXBvc2l0b3J5LmZpbmQoKVswXTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5OT1RfRk9VTkQsXG4gICAgICAgIG1lc3NhZ2U6IFwiRm9vdGVyIG5vdCBmb3VuZCAhXCIsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufVxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgY29uc3QgZGF5U2NoZWR1bGVTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxuICB7XG4gICAgZGF5czoge1xuICAgICAgdHlwZTogW1N0cmluZ10sXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGhvdXJzOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nXSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBfaWQ6IGZhbHNlLFxuICB9LFxuKTtcbiIsImltcG9ydCB7IGFzc2V0TW9kZWxTY2hlbWEgfSBmcm9tIFwiQC9jb21tb24vc2NoZW1hL21vZGVsL2Fzc2V0LW1vZGVsLnNjaGVtYVwiO1xuaW1wb3J0IHsgY29udGFjdFNjaGVtYSB9IGZyb20gXCJAL2NvbW1vbi9zY2hlbWEvbW9kZWwvY29udGFjdC1tb2RlbC5zY2hlbWFcIjtcbmltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuaW1wb3J0IHsgZGF5U2NoZWR1bGVTY2hlbWEgfSBmcm9tIFwiLi9kYWlseS1zY2hlZHVsZS5tb2RlbFwiO1xuXG5jb25zdCBmb290ZXJTY2hlbWEgPSBuZXcgU2NoZW1hKFxuICB7XG4gICAgY29udGFjdDogY29udGFjdFNjaGVtYSxcbiAgICBsb2NhdGlvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBjb3B5cmlnaHQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgZGF5U2NoZWR1bGU6IGRheVNjaGVkdWxlU2NoZW1hLFxuICAgIHNvY2lhbE1lZGlhOiBbYXNzZXRNb2RlbFNjaGVtYV0sXG4gIH0sXG4gIHtcbiAgICBjb2xsZWN0aW9uOiBcImZvb3RlclwiLFxuICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gIH0sXG4pO1xuXG5jb25zdCBGb290ZXIgPSBtb25nb29zZS5tb2RlbChcIkZvb3RlclwiLCBmb290ZXJTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgYXV0b0luY3JlbWVudFBsdWdpbiBmcm9tIFwiQC9jb21tb24vbW9uZ29vc2UvcGx1Z2lucy9hdXRvLWluY3JlbWVudC5wbHVnaW5cIjtcbmltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3Qgcm9sZVNjaGVtYSA9IG5ldyBTY2hlbWEoXG4gIHtcbiAgICByb2xlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB1bmlxdWU6IHRydWUsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHRyaW06IHRydWUsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGNvbGxlY3Rpb246IFwicm9sZXNcIixcbiAgICB2ZXJzaW9uS2V5OiBmYWxzZSxcbiAgfSxcbikucGx1Z2luKGF1dG9JbmNyZW1lbnRQbHVnaW4sIHsgaW5jRmllbGQ6IFwiX2lkXCIgfSk7XG5cbmNvbnN0IFJvbGUgPSBtb25nb29zZS5tb2RlbChcIlJvbGVcIiwgcm9sZVNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IFJvbGU7XG4iLCJpbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiQC9jb3JlL2RpL2RpLWNvbnRhaW5lclwiO1xuXG5pbXBvcnQgeyBSb2xlUmVwb3NpdG9yeSB9IGZyb20gXCIuL3JvbGUucmVwb3NpdG9yeVwiO1xuaW1wb3J0IHsgUm9sZVNlZWRlciB9IGZyb20gXCIuL3JvbGUuc2VlZGVyXCI7XG5cbmV4cG9ydCBjb25zdCByb2xlRElLZXlzID0ge1xuICByZXBvc2l0b3J5OiBcInJvbGUtcmVwb3NpdG9yeVwiLFxuICBzZWVkZXI6IFwicm9sZS1zZWVkZXJcIixcbn07XG5cbmNvbnRhaW5lci5yZWdpc3Rlcihyb2xlRElLZXlzLnJlcG9zaXRvcnksIFtdLCAoKSA9PiBuZXcgUm9sZVJlcG9zaXRvcnkoKSk7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgcm9sZURJS2V5cy5zZWVkZXIsXG4gIFtyb2xlRElLZXlzLnJlcG9zaXRvcnldLFxuICAocm9sZVJlcG9zaXRvcnkpID0+IG5ldyBSb2xlU2VlZGVyKHJvbGVSZXBvc2l0b3J5KSxcbik7XG4iLCJpbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gXCJAL3NoYXJlZC9yZXBvc2l0b3J5L2Jhc2UucmVwb3NpdG9yeVwiO1xuXG5pbXBvcnQgUm9sZSBmcm9tIFwiLi9tb2RlbC9yb2xlLm1vZGVsXCI7XG5cbmV4cG9ydCBjbGFzcyBSb2xlUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUm9sZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHJvbGVzIH0gZnJvbSBcIkAvY29tbW9uL2NvbnN0YW50cy9yb2xlXCI7XG5cbmV4cG9ydCBjbGFzcyBSb2xlU2VlZGVyIHtcbiAgY29uc3RydWN0b3Iocm9sZVJlcG9zaXRvcnkpIHtcbiAgICB0aGlzLnJvbGVSZXBvc2l0b3J5ID0gcm9sZVJlcG9zaXRvcnk7XG4gIH1cblxuICBhc3luYyBjcmVhdGVSb2xlcygpIHtcbiAgICBjb25zdCBleGlzdGluZ1JvbGVzID0gYXdhaXQgdGhpcy5yb2xlUmVwb3NpdG9yeS5maW5kQWxsKCk7XG4gICAgY29uc3QgZXhpc3RpbmdSb2xlTmFtZXMgPSBleGlzdGluZ1JvbGVzLm1hcCgocm9sZSkgPT4gcm9sZS5yb2xlKTtcblxuICAgIGNvbnN0IHJvbGVzVG9DcmVhdGUgPSByb2xlcy5maWx0ZXIoXG4gICAgICAocm9sZSkgPT4gIWV4aXN0aW5nUm9sZU5hbWVzLmluY2x1ZGVzKHJvbGUucm9sZSksXG4gICAgKTtcblxuICAgIGlmIChyb2xlc1RvQ3JlYXRlLmxlbmd0aCA+IDApIHtcbiAgICAgIGF3YWl0IHRoaXMucm9sZVJlcG9zaXRvcnkuY3JlYXRlTWFueShyb2xlc1RvQ3JlYXRlKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnRhY3REdG8gfSBmcm9tIFwiQC9jb21tb24vc2NoZW1hL2R0by9jb250YWN0LmR0b1wiO1xuXG5leHBvcnQgY2xhc3MgVXNlckR0byB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLmZ1bGxOYW1lID0gZGF0YS5mdWxsTmFtZTtcbiAgICB0aGlzLnByb2ZpbGVJbWFnZSA9IGRhdGEucHJvZmlsZUltYWdlO1xuICAgIHRoaXMucm9sZSA9IGRhdGEucm9sZTtcbiAgICB0aGlzLmNvbnRhY3QgPSBuZXcgQ29udGFjdER0byhkYXRhLmNvbnRhY3QpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgZW1haWxWZXJpZmljYXRpb25TY2hlbWEgPSBuZXcgU2NoZW1hKFxuICB7XG4gICAgY29kZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG4gICAgZXhwaXJlc0F0OiB7XG4gICAgICB0eXBlOiBEYXRlLFxuICAgIH0sXG4gICAgdmVyaWZpZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgX2lkOiBmYWxzZSxcbiAgfSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGVtYWlsVmVyaWZpY2F0aW9uU2NoZW1hO1xuIiwiaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmV4cG9ydCBjb25zdCByZWZyZXNoVG9rZW5TY2hlbWEgPSBuZXcgU2NoZW1hKFxuICB7XG4gICAgcmVmcmVzaDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG4gICAgY3JlYXRlZEF0OiB7XG4gICAgICB0eXBlOiBEYXRlLFxuICAgICAgZGVmYXVsdDogRGF0ZS5ub3csXG4gICAgICBleHBpcmVzOiBcIjE1ZFwiLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBfaWQ6IGZhbHNlLFxuICB9LFxuKTtcbiIsImltcG9ydCB7IGNvbnRhY3RTY2hlbWEgfSBmcm9tIFwiQC9jb21tb24vc2NoZW1hL21vZGVsL2NvbnRhY3QtbW9kZWwuc2NoZW1hXCI7XG5pbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmltcG9ydCBlbWFpbFZlcmlmaWNhdGlvbiBmcm9tIFwiLi9lbWFpbC12ZXJpZmljYXRpb25cIjtcbmltcG9ydCB7IHJlZnJlc2hUb2tlblNjaGVtYSB9IGZyb20gXCIuL3JlZnJlc2gtdG9rZW5cIjtcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoXG4gIHtcbiAgICBmdWxsTmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB0cmltOiB0cnVlLFxuICAgIH0sXG4gICAgcHJvZmlsZUltYWdlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgICBwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB0cmltOiB0cnVlIH0sXG4gICAgY29udGFjdDogY29udGFjdFNjaGVtYSxcbiAgICB0b2tlbjogcmVmcmVzaFRva2VuU2NoZW1hLFxuICAgIGVtYWlsVmVyaWZpY2F0aW9uOiB7XG4gICAgICB0eXBlOiBlbWFpbFZlcmlmaWNhdGlvbixcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB9LFxuICAgIHJvbGU6IHsgdHlwZTogU2NoZW1hLlR5cGVzLk51bWJlciwgcmVmOiBcIlJvbGVcIiwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgfSxcbiAge1xuICAgIGNvbGxlY3Rpb246IFwidXNlcnNcIixcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICB9LFxuKTtcblxuY29uc3QgVXNlciA9IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCB1c2VyU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCJAL2NvcmUvZGkvZGktY29udGFpbmVyXCI7XG5cbmltcG9ydCB7IFVzZXJSZXBvc2l0b3J5IH0gZnJvbSBcIi4vdXNlci5yZXBvc2l0b3J5XCI7XG5pbXBvcnQgeyBVc2VyU2VlZGVyIH0gZnJvbSBcIi4vdXNlci5zZWVkZXJcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vdXNlci5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VyRElLZXlzID0ge1xuICBzZXJ2aWNlOiBcInVzZXItc2VydmljZVwiLFxuICByZXBvc2l0b3J5OiBcInVzZXItcmVwb3NpdG9yeVwiLFxuICBzZWVkZXI6IFwidXNlci1zZWVkZXJcIixcbn07XG5cbmNvbnRhaW5lci5yZWdpc3Rlcih1c2VyRElLZXlzLnJlcG9zaXRvcnksIFtdLCAoKSA9PiBuZXcgVXNlclJlcG9zaXRvcnkoKSk7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgdXNlckRJS2V5cy5zZWVkZXIsXG4gIFt1c2VyRElLZXlzLnJlcG9zaXRvcnldLFxuICAodXNlclJlcG9zaXRvcnkpID0+IG5ldyBVc2VyU2VlZGVyKHVzZXJSZXBvc2l0b3J5KSxcbik7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgdXNlckRJS2V5cy5zZXJ2aWNlLFxuICBbdXNlckRJS2V5cy5yZXBvc2l0b3J5XSxcbiAgKHVzZXJSZXBvc2l0b3J5KSA9PiBuZXcgVXNlclNlcnZpY2UodXNlclJlcG9zaXRvcnkpLFxuKTtcbiIsImltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSBcIkAvc2hhcmVkL3JlcG9zaXRvcnkvYmFzZS5yZXBvc2l0b3J5XCI7XG5cbmltcG9ydCBVc2VyIGZyb20gXCIuL21vZGVsL3VzZXIubW9kZWxcIjtcblxuZXhwb3J0IGNsYXNzIFVzZXJSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihVc2VyKTtcbiAgfVxufVxuIiwiaW1wb3J0IGhhc2hQYXNzd29yZCBmcm9tIFwiQC9jb21tb24vaGVscGVycy9oYXNoLXBhc3N3b3JkXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyU2VlZGVyIHtcbiAgY29uc3RydWN0b3IodXNlclJlcG9zaXRvcnksIHJvbGVSZXBvc2l0b3J5KSB7XG4gICAgdGhpcy51c2VyUmVwb3NpdG9yeSA9IHVzZXJSZXBvc2l0b3J5O1xuICAgIHRoaXMucm9sZVJlcG9zaXRvcnkgPSByb2xlUmVwb3NpdG9yeTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZUFkbWluKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnVzZXJSZXBvc2l0b3J5LmZpbmRPbmUoeyByb2xlOiAxIH0pO1xuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBjb25zdCBwYXNzd29yZCA9IGF3YWl0IGhhc2hQYXNzd29yZChcImJha3RhcmFkbWluXCIpO1xuXG4gICAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS5jcmVhdGUoe1xuICAgICAgICBjb250YWN0OiB7IGVtYWlsOiBcImJha3RhcmFkbWluQGdtYWlsLmNvbVwiIH0sXG4gICAgICAgIGZ1bGxOYW1lOiBcImJha3RhciBhZG1pblwiLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgcm9sZTogMSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgeyBoYXNoUGFzc3dvcmQgfSBmcm9tIFwiQC9jb21tb24vaGVscGVycy9oYXNoLXBhc3N3b3JkXCI7XG5pbXBvcnQgeyBCYXNlUmVzcG9uc2UgfSBmcm9tIFwiQC9jb3JlL3Jlc3BvbnNlL2Jhc2UtcmVzcG9uc2VcIjtcbmltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHVzZXJSZXBvc2l0b3J5KSB7XG4gICAgdGhpcy51c2VyUmVwb3NpdG9yeSA9IHVzZXJSZXBvc2l0b3J5O1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlKHVzZXJEdG8pIHtcbiAgICB1c2VyRHRvLnBhc3N3b3JkID0gYXdhaXQgaGFzaFBhc3N3b3JkKHVzZXJEdG8ucGFzc3dvcmQpO1xuXG4gICAgcmV0dXJuIHRoaXMudXNlclJlcG9zaXRvcnkuY3JlYXRlKHVzZXJEdG8pO1xuICB9XG5cbiAgYXN5bmMgZmluZEJ5RW1haWwoZW1haWwpIHtcbiAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS5maW5kT25lKHsgXCJjb250YWN0LmVtYWlsXCI6IGVtYWlsIH0pO1xuICB9XG5cbiAgYXN5bmMgZmluZEJ5SWQoaWQpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy51c2VyUmVwb3NpdG9yeS5maW5kQnlJZChpZCk7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IEJhc2VSZXNwb25zZS5lcnJvcih7XG4gICAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuTk9UX0ZPVU5ELFxuICAgICAgICBtZXNzYWdlOiBcIlVzZXIgbm90IGZvdW5kIVwiLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBhc3luYyB1cGRhdGUoaWQsIHVzZXJEdG8pIHtcbiAgICBhd2FpdCB0aGlzLmZpbmRCeUlkKGlkKTtcblxuICAgIHJldHVybiB0aGlzLnVzZXJSZXBvc2l0b3J5LnVwZGF0ZShpZCwgdXNlckR0byk7XG4gIH1cblxuICBhc3luYyBkZWxldGUoaWQpIHtcbiAgICBhd2FpdCB0aGlzLmZpbmRCeUlkKGlkKTtcblxuICAgIHJldHVybiB0aGlzLnVzZXJSZXBvc2l0b3J5LmRlbGV0ZShpZCk7XG4gIH1cblxuICBhc3luYyBmaW5kQnlFbWFpbE9yVGhyb3coZW1haWwpIHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5maW5kQnlFbWFpbChlbWFpbCk7XG5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHRocm93IG5ldyBCYXNlUmVzcG9uc2UuZXJyb3Ioe1xuICAgICAgICBtZXNzYWdlOiBcIlVzZXIgd2l0aCB0aGlzIGVtYWlsIGRvZXMgbm90IGV4aXN0LlwiLFxuICAgICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk5PVF9GT1VORCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB1c2VyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBzd2FnZ2VyU3BlYywgc3dhZ2dlclVpIH0gZnJvbSBcIkAvY29yZS9jb25maWcvc3dhZ2dlci5jb25maWdcIjtcbmltcG9ydCBcIkAvY29yZS9kaS9kaS1nbG9iYWxzXCI7XG5pbXBvcnQgY29va2llUGFyc2VyIGZyb20gXCJjb29raWUtcGFyc2VyXCI7XG5pbXBvcnQgY29ycyBmcm9tIFwiY29yc1wiO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7IHJhdGVMaW1pdCB9IGZyb20gXCJleHByZXNzLXJhdGUtbGltaXRcIjtcblxuaW1wb3J0IGF1dGhSb3V0ZXIgZnJvbSBcIi4vYXBpL2F1dGgvYXV0aC5yb3V0ZVwiO1xuaW1wb3J0IGZvb3RlclJvdXRlciBmcm9tIFwiLi9hcGkvZm9vdGVyL2Zvb3Rlci5yb3V0ZVwiO1xuaW1wb3J0IHsgYXBpUHJlZml4IH0gZnJvbSBcIi4vY29tbW9uL2NvbnN0YW50cy9hcGlcIjtcbmltcG9ydCBiYXNlUmVzcG9uc2VNaWRkbGV3YXJlIGZyb20gXCIuL2NvcmUvbWlkZGxld2FyZS9iYXNlLXJlc3BvbnNlLm1pZGRsZXdhcmVcIjtcbmltcG9ydCBlcnJvckhhbmRsZXJNaWRkbGV3YXJlIGZyb20gXCIuL2NvcmUvbWlkZGxld2FyZS9lcnJvci1oYW5kbGVyLW1pZGRsZXdhcmVcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKFxuICByYXRlTGltaXQoe1xuICAgIHdpbmRvd01zOiAxMCAqIDYwICogMTAwMCxcbiAgICBsaW1pdDogMTAwLFxuICAgIHN0YW5kYXJkSGVhZGVyczogXCJkcmFmdC02XCIsXG4gICAgbGVnYWN5SGVhZGVyczogZmFsc2UsXG4gICAgbWVzc2FnZTogXCJUb28gbWFueSByZXF1ZXN0c1wiLFxuICB9KSxcbik7XG5hcHAuc2V0KFwidHJ1c3QgcHJveHlcIiwgMSk7XG5hcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcbmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG5hcHAudXNlKGNvcnMoKSk7XG5hcHAuZGlzYWJsZShcIngtcG93ZXJlZC1ieVwiKTtcbmFwcC51c2UoYmFzZVJlc3BvbnNlTWlkZGxld2FyZSk7XG5hcHAudXNlKFwiL2FwaS1kb2NzXCIsIHN3YWdnZXJVaS5zZXJ2ZSwgc3dhZ2dlclVpLnNldHVwKHN3YWdnZXJTcGVjKSk7XG5cbmFwcC51c2UoYXBpUHJlZml4LCBmb290ZXJSb3V0ZXIpO1xuYXBwLnVzZShhcGlQcmVmaXgsIGF1dGhSb3V0ZXIpO1xuXG5hcHAudXNlKGVycm9ySGFuZGxlck1pZGRsZXdhcmUpO1xuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIiwiZXhwb3J0IGNvbnN0IGFwaVByZWZpeCA9IFwiL2FwaS92MVwiO1xuIiwiZXhwb3J0IGNvbnN0IHJvbGVzID0gW3sgcm9sZTogXCJhZG1pblwiIH0sIHsgcm9sZTogXCJ1c2VyXCIgfV07XG4iLCJpbXBvcnQgKiBhcyBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuXG5hc3luYyBmdW5jdGlvbiBoYXNoUGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0KDEwKTtcblxuICByZXR1cm4gYmNyeXB0Lmhhc2gocGFzc3dvcmQsIHNhbHQpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjb21wYXJlUGFzc3dvcmQocGxhaW5UZXh0UGFzc3dvcmQsIGhhc2hlZFBhc3N3b3JkKSB7XG4gIHJldHVybiBiY3J5cHQuY29tcGFyZShwbGFpblRleHRQYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpO1xufVxuXG5leHBvcnQgeyBjb21wYXJlUGFzc3dvcmQsIGhhc2hQYXNzd29yZCB9O1xuIiwiaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIkAvY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5cbmNvbnN0IGdlbmVyYXRlVG9rZW4gPSAocGF5bG9hZCwgc2VjcmV0LCB0aW1lKSA9PlxuICBqd3Quc2lnbihwYXlsb2FkLCBzZWNyZXQsIHtcbiAgICBleHBpcmVzSW46IHRpbWUsXG4gICAgYWxnb3JpdGhtOiBcIkhTNTEyXCIsXG4gIH0pO1xuXG5jb25zdCBkZWNvZGVkVG9rZW4gPSBhc3luYyAodG9rZW4sIHNlY3JldCkgPT4ge1xuICBpZiAoIXRva2VuKSB7XG4gICAgdGhyb3cgbmV3IEJhc2VSZXNwb25zZS5lcnJvcih7XG4gICAgICBtZXNzYWdlOiBcIk5vIHRva2VuIHByb3ZpZGVkXCIsXG4gICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNULFxuICAgIH0pO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gIHRva2VuID0gdG9rZW4uc3BsaXQoXCIgXCIpWzFdO1xuXG4gIGlmICghdG9rZW4pIHtcbiAgICB0aHJvdyBuZXcgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgIG1lc3NhZ2U6IFwiSW52YWxpZCB0b2tlbiBmb3JtYXRcIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGp3dC52ZXJpZnkodG9rZW4sIHNlY3JldCwgKGVyciwgZGVjb2RlZCkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZWplY3QoXG4gICAgICAgICAgbmV3IEJhc2VSZXNwb25zZS5lcnJvcih7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIlRva2VuIHZlcmlmaWNhdGlvbiBmYWlsZWRcIixcbiAgICAgICAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuVU5BVVRIT1JJWkVELFxuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShkZWNvZGVkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBkZWNvZGVkVG9rZW4sIGdlbmVyYXRlVG9rZW4gfTtcbiIsImltcG9ydCBjcnlwdG8gZnJvbSBcImNyeXB0b1wiO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSB2ZXJpZmljYXRpb24gY29kZSB3aXRoIGEgc3BlY2lmaWMgbGVuZ3RoIHVzaW5nIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzLlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCAtIExlbmd0aCBvZiB0aGUgdmVyaWZpY2F0aW9uIGNvZGUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSAtIFRoZSBnZW5lcmF0ZWQgdmVyaWZpY2F0aW9uIGNvZGUuXG4gKi9cbmNvbnN0IGdlbmVyYXRlVmVyaWZpY2F0aW9uQ29kZSA9IChsZW5ndGggPSA2KSA9PiB7XG4gIGNvbnN0IGNoYXJhY3RlcnMgPVxuICAgIFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlcIjtcbiAgY29uc3QgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xuICBsZXQgcmVzdWx0ID0gXCJcIjtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gY3J5cHRvLnJhbmRvbUludChjaGFyYWN0ZXJzTGVuZ3RoKTtcbiAgICByZXN1bHQgKz0gY2hhcmFjdGVyc1tyYW5kb21JbmRleF07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgZ2V0VmVyaWZpY2F0aW9uQ29kZUV4cGlyeSA9IChtaW51dGVzKSA9PiBEYXRlLm5vdygpICsgbWludXRlcyAqIDYwMDAwO1xuXG5leHBvcnQgeyBnZW5lcmF0ZVZlcmlmaWNhdGlvbkNvZGUsIGdldFZlcmlmaWNhdGlvbkNvZGVFeHBpcnkgfTtcbiIsIi8qKlxuICogQGRlc2NyaXB0aW9uIE1vbmdvb3NlIHBsdWdpbiB0byBhdXRvIGluY3JlbWVudCBhIGZpZWxkXG4gKiBAcGFyYW0ge01vbmdvb3NlLlNjaGVtYX0gc2NoZW1hXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdXRvSW5jcmVtZW50UGx1Z2luKHNjaGVtYSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMuaW5jRmllbGQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2Ugc3BlY2lmeSBpbmNGaWVsZCFcIik7XG4gIH1cblxuICBsZXQgZmllbGRPcHRpb25zID0ge1xuICAgIHR5cGU6IE51bWJlcixcbiAgfTtcblxuICBpZiAob3B0aW9ucy5pbmNGaWVsZCAhPT0gXCJfaWRcIikge1xuICAgIGZpZWxkT3B0aW9ucyA9IHtcbiAgICAgIC4uLmZpZWxkT3B0aW9ucyxcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgc2NoZW1hLmFkZCh7XG4gICAgW29wdGlvbnMuaW5jRmllbGRdOiBmaWVsZE9wdGlvbnMsXG4gIH0pO1xuXG4gIHNjaGVtYS5wcmUoXCJzYXZlXCIsIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgaWYgKHRoaXMuaXNOZXcpIHtcbiAgICAgIHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgLmZpbmRPbmUoe30sIHt9LCB7IHNvcnQ6IHsgW29wdGlvbnMuaW5jRmllbGRdOiAtMSB9IH0pXG4gICAgICAgIC50aGVuKChsYXN0UmVjb3JkKSA9PiB7XG4gICAgICAgICAgdGhpc1tvcHRpb25zLmluY0ZpZWxkXSA9IGxhc3RSZWNvcmRcbiAgICAgICAgICAgID8gbGFzdFJlY29yZFtvcHRpb25zLmluY0ZpZWxkXSArIDFcbiAgICAgICAgICAgIDogMTtcblxuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIHNjaGVtYS5wcmUoXCJpbnNlcnRNYW55XCIsIGFzeW5jIGZ1bmN0aW9uIChuZXh0LCBkb2NzKSB7XG4gICAgY29uc3QgbGFzdFJlY29yZCA9IGF3YWl0IHRoaXMuZmluZE9uZShcbiAgICAgIHt9LFxuICAgICAge30sXG4gICAgICB7IHNvcnQ6IHsgW29wdGlvbnMuaW5jRmllbGRdOiAtMSB9IH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGxhc3RDb3VudCA9IGxhc3RSZWNvcmQgPyBsYXN0UmVjb3JkW29wdGlvbnMuaW5jRmllbGRdIDogMDtcblxuICAgIGRvY3MuZm9yRWFjaCgoZG9jLCBpbmRleCkgPT4ge1xuICAgICAgZG9jW29wdGlvbnMuaW5jRmllbGRdID0gbGFzdENvdW50ICsgaW5kZXggKyAxO1xuICAgIH0pO1xuXG4gICAgbmV4dCgpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBjbGFzcyBDb250YWN0RHRvIHtcbiAgY29uc3RydWN0b3IoeyBlbWFpbCwgcGhvbmVOdW1iZXIgfSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgZW1haWwsXG4gICAgICBwaG9uZU51bWJlcixcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgY29uc3QgYXNzZXRNb2RlbFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICBocmVmOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlOiB0cnVlLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICAgIHVybDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBwdWJsaWNJZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgICBzaXplOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIF9pZDogZmFsc2UsXG4gIH0sXG4pO1xuIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgY29uc3QgY29udGFjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICBlbWFpbDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgcGhvbmVOdW1iZXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgX2lkOiBmYWxzZSxcbiAgfSxcbik7XG4iLCJpbXBvcnQgXCJAL2NvcmUvY29uZmlnL2Vudi5jb25maWdcIjtcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURiQ29ubmVjdGlvbigpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52LkNPTk5FQ1RJT05fU1RSSU5HKTtcbiAgICBjb25zb2xlLmxvZyhcIk1vbmdvREIgQ29ubmVjdGVkXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJNb25nb0RCIENvbm5lY3Rpb24gRXJyb3I6XCIsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcImRvdGVudlwiO1xuXG5jb25maWcoKTtcblxuY29uZmlnKHtcbiAgcGF0aDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiA/IFwiLmVudi5sb2NhbFwiIDogXCIuZW52XCIsXG4gIG92ZXJyaWRlOiB0cnVlLFxufSk7XG4iLCJleHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBqd3Q6IHtcbiAgICBhbGdvcml0aG06IHByb2Nlc3MuZW52LkpXVF9BTEdPUklUSE0sXG4gICAgYWNjZXNzU2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfQUNDRVNTX1NFQ1JFVCxcbiAgICBhY2Nlc3NFeHBpcmVzSW46IHByb2Nlc3MuZW52LkpXVF9BQ0NFU1NfRVhQSVJFU19JTixcbiAgICByZWZyZXNoU2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfUkVGUkVTSF9TRUNSRVQsXG4gICAgcmVmcmVzaEV4cGlyZXNJbjogcHJvY2Vzcy5lbnYuSldUX1JFRlJFU0hfRVhQSVJFU19JTixcbiAgICB2ZXJpZmljYXRpb25TZWNyZXQ6IHByb2Nlc3MuZW52LkpXVF9WRVJJRklDQVRJT05fU0VDUkVULFxuICAgIHZlcmlmaWNhdGlvbkV4cGlyZXNJbjogcHJvY2Vzcy5lbnYuSldUX1ZFUklGSUNBVElPTl9FWFBJUkVTX0lOLFxuICB9LFxufTtcbiIsImltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSBcIkAvc2hhcmVkL2Vycm9yLXJlc3BvbnNlL2Vycm9yLXJlc3BvbnNlXCI7XG5pbXBvcnQgbm9kZW1haWxlciBmcm9tIFwibm9kZW1haWxlclwiO1xuXG5leHBvcnQgY29uc3Qgc2VuZEVtYWlsID0gYXN5bmMgKG1haWxPcHRpb25zKSA9PiB7XG4gIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgIHNlcnZpY2U6IFwiZ21haWxcIixcbiAgICBhdXRoOiB7XG4gICAgICB1c2VyOiBwcm9jZXNzLmVudi5NQUlMX1VTRVIsXG4gICAgICBwYXNzOiBwcm9jZXNzLmVudi5NQUlMX1BBU1NXT1JELFxuICAgIH0sXG4gIH0pO1xuXG4gIHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxPcHRpb25zLCAoZXJyb3IsIGluZm8pID0+IHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHRocm93IG5ldyBBUElFcnJvcihcIkVtYWlsIEZhaWxlZCB0byBTZW5kIVwiLCA0MDMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgRW1haWwgc2VudDogJHtpbmZvLnJlc3BvbnNlfWApO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzICovXG5pbXBvcnQgc3dhZ2dlckpzZG9jIGZyb20gXCJzd2FnZ2VyLWpzZG9jXCI7XG5pbXBvcnQgc3dhZ2dlclVpIGZyb20gXCJzd2FnZ2VyLXVpLWV4cHJlc3NcIjtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgZGVmaW5pdGlvbjoge1xuICAgIG9wZW5hcGk6IFwiMy4wLjBcIixcbiAgICBpbmZvOiB7XG4gICAgICB0aXRsZTogXCJDQUYtVmliZSBDb2ZmZWUgU2hvcCBBUElcIixcbiAgICAgIHZlcnNpb246IFwiMS4wLjBcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkNBRi1WaWJlIENvZmZlZSBTaG9wIEFQSSBkb2N1bWVudGF0aW9uXCIsXG4gICAgfSxcbiAgICBzZXJ2ZXJzOiBbXG4gICAgICB7XG4gICAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjUwMDBcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgYXBpczogW1wiLi9zcmMvYXBpLyouanNcIl0sXG59O1xuXG5jb25zdCBzd2FnZ2VyU3BlYyA9IHN3YWdnZXJKc2RvYyhvcHRpb25zKTtcblxuZXhwb3J0IHsgc3dhZ2dlclNwZWMsIHN3YWdnZXJVaSB9O1xuIiwiaW1wb3J0IHsgcm9sZURJS2V5cyB9IGZyb20gXCJAL2FwaS9yb2xlL3JvbGUuZGlcIjtcbmltcG9ydCB7IFJvbGVTZWVkZXIgfSBmcm9tIFwiQC9hcGkvcm9sZS9yb2xlLnNlZWRlclwiO1xuaW1wb3J0IHsgdXNlckRJS2V5cyB9IGZyb20gXCJAL2FwaS91c2VyL3VzZXIuZGlcIjtcbmltcG9ydCB7IFVzZXJTZWVkZXIgfSBmcm9tIFwiQC9hcGkvdXNlci91c2VyLnNlZWRlclwiO1xuXG5pbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiLi4vZGkvZGktY29udGFpbmVyXCI7XG5cbmV4cG9ydCBjb25zdCBzZWVkID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB1c2VyU2VlZGVyID0gbmV3IFVzZXJTZWVkZXIoY29udGFpbmVyLmdldCh1c2VyRElLZXlzLnJlcG9zaXRvcnkpKTtcbiAgY29uc3Qgcm9sZVNlZWRlciA9IG5ldyBSb2xlU2VlZGVyKGNvbnRhaW5lci5nZXQocm9sZURJS2V5cy5yZXBvc2l0b3J5KSk7XG5cbiAgYXdhaXQgcm9sZVNlZWRlci5jcmVhdGVSb2xlcygpO1xuICBhd2FpdCBQcm9taXNlLmFsbChbdXNlclNlZWRlci5jcmVhdGVBZG1pbigpXSk7XG59O1xuIiwiLyoqXG4gKiBEZXBlbmRlbmN5IEluamVjdGlvbiBDb250YWluZXJcbiAqIEBjbGFzcyBEaUNvbnRhaW5lclxuICogQGRlc2NyaXB0aW9uIEEgc2ltcGxlIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGNvbnRhaW5lciB0aGF0IGFsbG93cyB5b3UgdG8gcmVnaXN0ZXJcbiAqIGFuZCBnZXQgZGVwZW5kZW5jaWVzXG4gKiBAZXhhbXBsZVxuICogY29uc3QgY29udGFpbmVyID0gbmV3IERpQ29udGFpbmVyKCk7XG4gKiBjb250YWluZXIucmVnaXN0ZXIoXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIiwgW10sICgpID0+IG5ldyBMYW5kaW5nUGFnZVJlcG9zaXRvcnkoKSk7XG4gKiBjb250YWluZXIucmVnaXN0ZXIoXG4gKiAgXCJMYW5kaW5nUGFnZVNlcnZpY2VcIixcbiAqICBbXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIl0sXG4gKiAgKGxhbmRpbmdQYWdlUmVwb3NpdG9yeSkgPT4gbmV3IExhbmRpbmdQYWdlU2VydmljZShsYW5kaW5nUGFnZVJlcG9zaXRvcnkpLFxuICogKTtcbiAqXG4gKiBjb25zdCBsYW5kaW5nUGFnZVNlcnZpY2UgPSBjb250YWluZXIuZ2V0KFwiTGFuZGluZ1BhZ2VTZXJ2aWNlXCIpO1xuICovXG5jbGFzcyBEaUNvbnRhaW5lciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGVwZW5kZW5jaWVzID0ge307XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBkZXBlbmRlbmN5XG4gICAqIEBwYXJhbSBuYW1lIC0gTmFtZSBvZiB0aGUgZGVwZW5kZW5jeSAoZXg6IFwiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCIpXG4gICAqIEBwYXJhbSBkZXBlbmRlbmNpZXMgLSBBcnJheSBvZiBkZXBlbmRlbmNpZXMgKGV4OiBbXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIl0pXG4gICAqIEBwYXJhbSBmdW5jIC0gRnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBkZXBlbmRlbmN5XG4gICAqL1xuICByZWdpc3RlcihuYW1lLCBkZXBlbmRlbmNpZXMsIGZ1bmMpIHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fFxuICAgICAgIUFycmF5LmlzQXJyYXkoZGVwZW5kZW5jaWVzKSB8fFxuICAgICAgdHlwZW9mIGZ1bmMgIT09IFwiZnVuY3Rpb25cIlxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhcmd1bWVudFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlcGVuZGVuY2llc1tuYW1lXSA9IHtcbiAgICAgIGRlcGVuZGVuY2llcyxcbiAgICAgIGZ1bmMsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBkZXBlbmRlbmN5XG4gICAqIEBwYXJhbSBuYW1lIC0gTmFtZSBvZiB0aGUgZGVwZW5kZW5jeSAoZXg6IFwiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCIpXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXQobmFtZSkge1xuICAgIGlmICghdGhpcy5kZXBlbmRlbmNpZXNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRGVwZW5kZW5jeSBub3QgZm91bmQ6ICR7bmFtZX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGRlcGVuZGVuY2llcywgZnVuYyB9ID0gdGhpcy5kZXBlbmRlbmNpZXNbbmFtZV07XG5cbiAgICBjb25zdCBkZXBlbmRlbmNpZXNJbnN0YW5jZXMgPSBkZXBlbmRlbmNpZXMubWFwKChkZXBlbmRlbmN5KSA9PlxuICAgICAgdGhpcy5nZXQoZGVwZW5kZW5jeSksXG4gICAgKTtcblxuICAgIHJldHVybiBmdW5jKC4uLmRlcGVuZGVuY2llc0luc3RhbmNlcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lciA9IG5ldyBEaUNvbnRhaW5lcigpO1xuIiwiaW1wb3J0IFwiQC9hcGkvdXNlci91c2VyLmRpXCI7XG5pbXBvcnQgXCJAL2FwaS9mb290ZXIvZm9vdGVyLmRpXCI7XG5pbXBvcnQgXCJAL2FwaS9yb2xlL3JvbGUuZGlcIjtcbmltcG9ydCBcIkAvYXBpL2F1dGgvYXV0aC5kaVwiO1xuIiwiaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcblxuaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIi4uL3Jlc3BvbnNlL2Jhc2UtcmVzcG9uc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmFzZVJlc3BvbnNlTWlkZGxld2FyZShyZXEsIHJlcywgbmV4dCkge1xuICByZXMuc3VjY2VzcyA9IChwcm9wcykgPT4ge1xuICAgIHJlc1xuICAgICAgLnN0YXR1cyhwcm9wcy5zdGF0dXMgfHwgU3RhdHVzQ29kZXMuT0spXG4gICAgICAuanNvbihCYXNlUmVzcG9uc2Uuc3VjY2Vzcyhwcm9wcykpO1xuICB9O1xuXG4gIHJlcy5lcnJvciA9IChwcm9wcykgPT4ge1xuICAgIHJlc1xuICAgICAgLnN0YXR1cyhwcm9wcy5zdGF0dXMgfHwgU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QpXG4gICAgICAuanNvbihCYXNlUmVzcG9uc2UuZXJyb3IocHJvcHMpKTtcbiAgfTtcblxuICBuZXh0KCk7XG59XG4iLCJpbXBvcnQgeyBCYXNlUmVzcG9uc2UgfSBmcm9tIFwiQC9jb3JlL3Jlc3BvbnNlL2Jhc2UtcmVzcG9uc2VcIjtcbmltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSBcIkAvc2hhcmVkL2Vycm9yLXJlc3BvbnNlL2Vycm9yLXJlc3BvbnNlXCI7XG5cbmNvbnN0IGVycm9ySGFuZGxlck1pZGRsZXdhcmUgPSAoZXJyb3IsIHJlcXVlc3QsIHJlc3BvbnNlLCBuZXh0KSA9PiB7XG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIEFQSUVycm9yKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyhlcnJvci5zdGF0dXNDb2RlIHx8IDQwMCkuanNvbih7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cblxuICBuZXh0KCk7XG5cbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgQmFzZVJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmVycm9yKGVycm9yKTtcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZS5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8IFwiSW50ZXJuYWwgU2VydmVyIEVycm9yIVwiLFxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVycm9ySGFuZGxlck1pZGRsZXdhcmU7XG4iLCJpbXBvcnQgeyBnZXRSZWFzb25QaHJhc2UsIFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBCYXNlUmVzcG9uc2Uge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5zdWNjZXNzID0gZGF0YS5zdWNjZXNzO1xuICAgIHRoaXMuc3RhdHVzID0gZGF0YS5zdGF0dXM7XG4gICAgdGhpcy5tZXNzYWdlID0gZGF0YS5tZXNzYWdlO1xuICAgIHRoaXMuZGF0YSA9IGRhdGEuZGF0YTtcbiAgICB0aGlzLmRldGFpbHMgPSBkYXRhLmRldGFpbHM7XG4gIH1cblxuICBzdGF0aWMgc3VjY2Vzcyh7IHN0YXR1cyA9IFN0YXR1c0NvZGVzLk9LLCBtZXNzYWdlLCBkYXRhIH0pIHtcbiAgICByZXR1cm4gbmV3IEJhc2VSZXNwb25zZSh7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgc3RhdHVzLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSB8fCBnZXRSZWFzb25QaHJhc2Uoc3RhdHVzKSxcbiAgICAgIGRhdGEsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZXJyb3IoeyBtZXNzYWdlLCBzdGF0dXMgPSBTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVCwgZGV0YWlscyA9IG51bGwgfSkge1xuICAgIHJldHVybiBuZXcgQmFzZVJlc3BvbnNlKHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgc3RhdHVzLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSB8fCBnZXRSZWFzb25QaHJhc2Uoc3RhdHVzKSxcbiAgICAgIGRldGFpbHMsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHNlbmRFbWFpbCB9IGZyb20gXCJAL2NvcmUvY29uZmlnL21haWwuY29uZmlnXCI7XG5cbmV4cG9ydCBjbGFzcyBFbWFpbFNlcnZpY2Uge1xuICBhc3luYyBzZW5kVmVyaWZpY2F0aW9uRW1haWwoZW1haWwsIGNvZGUsIHRpdGxlKSB7XG4gICAgcmV0dXJuIHNlbmRFbWFpbCh7XG4gICAgICBmcm9tOiBwcm9jZXNzLmVudi5NQUlMX0ZST00sXG4gICAgICB0bzogZW1haWwsXG4gICAgICBzdWJqZWN0OiB0aXRsZSxcbiAgICAgIHRleHQ6IGNvZGUsXG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBBUElFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgc3RhdHVzQ29kZSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBCYXNlUmVwb3NpdG9yeSB7XG4gIGNvbnN0cnVjdG9yKG1vZGVsKSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICB9XG5cbiAgY3JlYXRlKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5jcmVhdGUoZGF0YSk7XG4gIH1cblxuICB1cGRhdGUoaWQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kQnlJZEFuZFVwZGF0ZShpZCwgZGF0YSwge1xuICAgICAgbmV3OiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZEJ5SWRBbmREZWxldGUoaWQpO1xuICB9XG5cbiAgZmluZEJ5SWQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kQnlJZChpZCk7XG4gIH1cblxuICBmaW5kQWxsKCkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmQoKTtcbiAgfVxuXG4gIGZpbmRPbmUocXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kT25lKHF1ZXJ5KTtcbiAgfVxuXG4gIGZpbmQocXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kKHF1ZXJ5KTtcbiAgfVxuXG4gIGNvdW50KHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuY291bnREb2N1bWVudHMocXVlcnkpO1xuICB9XG5cbiAgYWdncmVnYXRlKHBpcGVsaW5lKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuYWdncmVnYXRlKHBpcGVsaW5lKTtcbiAgfVxuXG4gIGNyZWF0ZU1hbnkoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmluc2VydE1hbnkoZGF0YSk7XG4gIH1cblxuICB1cGRhdGVNYW55KHF1ZXJ5LCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwudXBkYXRlTWFueShxdWVyeSwgZGF0YSk7XG4gIH1cblxuICBidWxrV3JpdGUob3BlcmF0aW9ucykge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmJ1bGtXcml0ZShvcGVyYXRpb25zKTtcbiAgfVxuXG4gIGFzeW5jIHVwc2VydChxdWVyeSwgZGF0YSkge1xuICAgIGNvbnN0IGZpbmREYXRhID0gYXdhaXQgdGhpcy5maW5kT25lKHF1ZXJ5KTtcblxuICAgIGlmICghZmluZERhdGEpIHJldHVybiB0aGlzLmNyZWF0ZShkYXRhKTtcblxuICAgIHJldHVybiB0aGlzLnVwZGF0ZShmaW5kRGF0YS5faWQsIGRhdGEpO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvd3JhcE5hdGl2ZVN1cGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWUtcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1hc3luYy1lcnJvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1yYXRlLWxpbWl0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHAtc3RhdHVzLWNvZGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtdWx0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZW1haWxlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2FnZ2VyLWpzZG9jXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3YWdnZXItdWktZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiQC9jb3JlL2NvbmZpZy9lbnYuY29uZmlnXCI7XG5pbXBvcnQgXCJleHByZXNzLWFzeW5jLWVycm9yc1wiO1xuaW1wb3J0IHsgY3JlYXRlU2VydmVyIH0gZnJvbSBcImh0dHBcIjtcblxuaW1wb3J0IGFwcCBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCB7IGNyZWF0ZURiQ29ubmVjdGlvbiB9IGZyb20gXCIuL2NvcmUvY29uZmlnL2RiLmNvbmZpZ1wiO1xuaW1wb3J0IHsgc2VlZCB9IGZyb20gXCIuL2NvcmUvZGIvc2VlZFwiO1xuXG5jb25zdCBzZXJ2ZXIgPSBjcmVhdGVTZXJ2ZXIoYXBwKTtcbmNvbnN0IHsgUE9SVCB9ID0gcHJvY2Vzcy5lbnY7XG5cbihhc3luYyAoKSA9PiB7XG4gIGF3YWl0IGNyZWF0ZURiQ29ubmVjdGlvbigpO1xuICBhd2FpdCBzZWVkKCk7XG4gIHNlcnZlci5saXN0ZW4oUE9SVCwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgaXMgcnVubmluZzogaHR0cDovL2xvY2FsaG9zdDoke1BPUlR9YCk7XG4gIH0pO1xufSkoKTtcbiJdLCJuYW1lcyI6WyJTdGF0dXNDb2RlcyIsIkF1dGhEdG8iLCJBdXRoQ29udHJvbGxlciIsImF1dGhTZXJ2aWNlIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJfcmVnaXN0ZXIiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsInJlcXVlc3QiLCJyZXNwb25zZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJyZWdpc3RlciIsImJvZHkiLCJzdWNjZXNzIiwibWVzc2FnZSIsInN0YXR1cyIsIkNSRUFURUQiLCJzdG9wIiwiX3giLCJfeDIiLCJhcHBseSIsImFyZ3VtZW50cyIsIl92ZXJpZnlFbWFpbCIsIl9jYWxsZWUyIiwiZGF0YSIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInZlcmlmeUVtYWlsIiwic2VudCIsIl94MyIsIl94NCIsIl9sb2dpbiIsIl9jYWxsZWUzIiwidXNlciIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImxvZ2luIiwiT0siLCJfeDUiLCJfeDYiLCJfZm9yZ290UGFzc3dvcmQiLCJfY2FsbGVlNCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsImZvcmdvdFBhc3N3b3JkIiwiX3g3IiwiX3g4IiwiX3Jlc2V0Q29kZUNoZWNrIiwiX2NhbGxlZTUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJyZXNldENvZGVDaGVjayIsIl94OSIsIl94MTAiLCJjb250YWluZXIiLCJFbWFpbFNlcnZpY2UiLCJ1c2VyRElLZXlzIiwiQXV0aFNlcnZpY2UiLCJhdXRoRElLZXlzIiwiY29udHJvbGxlciIsInNlcnZpY2UiLCJlbWFpbFNlcnZpY2UiLCJ1c2VyU2VydmljZSIsImV4cHJlc3MiLCJhdXRoUm91dGVyIiwiUm91dGVyIiwicHJlZml4IiwiYXV0aENvbnRyb2xsZXIiLCJnZXQiLCJwb3N0IiwiY29uY2F0IiwicmVxIiwicmVzIiwiY29tcGFyZVBhc3N3b3JkIiwiZ2VuZXJhdGVUb2tlbiIsImdlbmVyYXRlVmVyaWZpY2F0aW9uQ29kZSIsImdldFZlcmlmaWNhdGlvbkNvZGVFeHBpcnkiLCJjb25maWciLCJCYXNlUmVzcG9uc2UiLCJhdXRoUmVnaXN0ZXJEdG8iLCJfZXhpc3RpbmdVc2VyJGVtYWlsVmUiLCJfZXhpc3RpbmdVc2VyJGVtYWlsVmUyIiwiZXhpc3RpbmdVc2VyIiwidmVyaWZpY2F0aW9uQ29kZSIsInZlcmlmaWNhdGlvblRpbWUiLCJzYXZlZFVzZXIiLCJmaW5kQnlFbWFpbCIsImNvbnRhY3QiLCJlbWFpbCIsImVtYWlsVmVyaWZpY2F0aW9uIiwidmVyaWZpZWQiLCJlcnJvciIsIkNPTkZMSUNUIiwiX2lkIiwicm9sZSIsImNvZGUiLCJleHBpcmVzQXQiLCJjcmVhdGUiLCJzZW5kVmVyaWZpY2F0aW9uRW1haWwiLCJhdXRobG9naW5EdG8iLCJwYXNzd29yZCIsInBheWxvYWQiLCJ0b2tlbiIsInQwIiwiVU5BVVRIT1JJWkVEIiwic3ViIiwiY3JlYXRlVG9rZW4iLCJhYnJ1cHQiLCJfZXhpc3RpbmdVc2VyJGV4aXN0aW4iLCJOT1RfRk9VTkQiLCJwYXNzd29yZFJlc2V0Iiwic2F2ZSIsInZlcmlmaWNhdGlvbkR0byIsIl9leGlzdGluZ1VzZXIkZW1haWxWZTMiLCJub3ciLCJCQURfUkVRVUVTVCIsIkRhdGUiLCJ1bmRlZmluZWQiLCJyZXNldENvZGVDaGVja0R0byIsIl9leGlzdGluZ1VzZXIkZW1haWxWZTQiLCJFcnJvciIsInZlcmlmaWNhdGlvblRva2VuIiwiX2NyZWF0ZVRva2VuIiwiX2NhbGxlZTYiLCJfY29uZmlnJGp3dCIsImFjY2Vzc1NlY3JldCIsImFjY2Vzc0V4cGlyZXNJbiIsInJlZnJlc2hTZWNyZXQiLCJyZWZyZXNoRXhwaXJlc0luIiwiYWNjZXNzVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJqd3QiLCJ1cGRhdGUiLCJyZWZyZXNoIiwiX3ZlcmlmaWNhdGlvblRva2VuIiwiX2NhbGxlZTciLCJfY29uZmlnJGp3dDIiLCJ2ZXJpZmljYXRpb25FeHBpcmVzSW4iLCJ2ZXJpZmljYXRpb25TZWNyZXQiLCJfY2FsbGVlNyQiLCJfY29udGV4dDciLCJVc2VyRHRvIiwiVG9rZW5EdG8iLCJhY2Nlc3MiLCJGb290ZXJEdG8iLCJfcmVmIiwibG9jYXRpb24iLCJ0aXRsZSIsImNvcHlyaWdodCIsIm9wZW5pbmdEYXkiLCJvcGVuaW5nSG91ciIsInNvY2lhbE1lZGlhIiwiT2JqZWN0IiwiYXNzaWduIiwiRm9vdGVyQ29udHJvbGxlciIsImZvb290ZXJTZXJ2aWNlIiwiX2ZpbmQiLCJmaW5kQWxsIiwiZmluZCIsIl9jcmVhdGUiLCJmaWxlIiwiRm9vdGVyUmVwb3NpdG9yeSIsIkZvb3RlclNlcnZpY2UiLCJmb290ZXJESUtleXMiLCJyZXBvc2l0b3J5IiwiZm9vdGVyUmVwb3NpdG9yeSIsImZvb3RlclNlcnZpY2UiLCJCYXNlUmVwb3NpdG9yeSIsIkZvb3RlciIsIl9CYXNlUmVwb3NpdG9yeSIsIl9jYWxsU3VwZXIiLCJfaW5oZXJpdHMiLCJtdWx0ZXIiLCJ1cGxvYWQiLCJmb290ZXJSb3V0ZXIiLCJmb290ZXJDb250cm9sbGVyIiwibm9uZSIsInN0b3JhZ2VTZXJ2aWNlIiwiZm9vdGVyRHRvIiwic29jaWFsTWVkaWFJY29ucyIsInVwbG9hZGVkc29jaWFsTWVkaWFJY29ucyIsIl9KU09OJHBhcnNlIiwiY2xvc2luZ0RheSIsImNsb3NpbmdIb3VyIiwibGVuZ3RoIiwiSlNPTiIsInBhcnNlIiwiZGF5U2NoZWR1bGUiLCJjb25zb2xlIiwibG9nIiwidXBsb2FkRmlsZXMiLCJkYXlzIiwiaG91cnMiLCJfZmluZEFsbCIsIl91cGRhdGUiLCJmaWxlcyIsIm1vbmdvb3NlIiwiZGF5U2NoZWR1bGVTY2hlbWEiLCJTY2hlbWEiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJhc3NldE1vZGVsU2NoZW1hIiwiY29udGFjdFNjaGVtYSIsImZvb3RlclNjaGVtYSIsImNvbGxlY3Rpb24iLCJ0aW1lc3RhbXBzIiwibW9kZWwiLCJhdXRvSW5jcmVtZW50UGx1Z2luIiwicm9sZVNjaGVtYSIsInVuaXF1ZSIsInRyaW0iLCJ2ZXJzaW9uS2V5IiwicGx1Z2luIiwiaW5jRmllbGQiLCJSb2xlIiwiUm9sZVJlcG9zaXRvcnkiLCJSb2xlU2VlZGVyIiwicm9sZURJS2V5cyIsInNlZWRlciIsInJvbGVSZXBvc2l0b3J5Iiwicm9sZXMiLCJfY3JlYXRlUm9sZXMiLCJleGlzdGluZ1JvbGVzIiwiZXhpc3RpbmdSb2xlTmFtZXMiLCJyb2xlc1RvQ3JlYXRlIiwibWFwIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJjcmVhdGVNYW55IiwiY3JlYXRlUm9sZXMiLCJDb250YWN0RHRvIiwiZnVsbE5hbWUiLCJwcm9maWxlSW1hZ2UiLCJlbWFpbFZlcmlmaWNhdGlvblNjaGVtYSIsIkJvb2xlYW4iLCJyZWZyZXNoVG9rZW5TY2hlbWEiLCJjcmVhdGVkQXQiLCJleHBpcmVzIiwidXNlclNjaGVtYSIsIlR5cGVzIiwiTnVtYmVyIiwicmVmIiwiVXNlciIsIlVzZXJSZXBvc2l0b3J5IiwiVXNlclNlZWRlciIsIlVzZXJTZXJ2aWNlIiwidXNlclJlcG9zaXRvcnkiLCJoYXNoUGFzc3dvcmQiLCJfY3JlYXRlQWRtaW4iLCJmaW5kT25lIiwiY3JlYXRlQWRtaW4iLCJ1c2VyRHRvIiwiX2ZpbmRCeUVtYWlsIiwiX2ZpbmRCeUlkIiwiaWQiLCJmaW5kQnlJZCIsIl9kZWxldGUyIiwiX2RlbGV0ZSIsIl9maW5kQnlFbWFpbE9yVGhyb3ciLCJmaW5kQnlFbWFpbE9yVGhyb3ciLCJzd2FnZ2VyU3BlYyIsInN3YWdnZXJVaSIsImNvb2tpZVBhcnNlciIsImNvcnMiLCJyYXRlTGltaXQiLCJhcGlQcmVmaXgiLCJiYXNlUmVzcG9uc2VNaWRkbGV3YXJlIiwiZXJyb3JIYW5kbGVyTWlkZGxld2FyZSIsImFwcCIsInVzZSIsIndpbmRvd01zIiwibGltaXQiLCJzdGFuZGFyZEhlYWRlcnMiLCJsZWdhY3lIZWFkZXJzIiwic2V0IiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwianNvbiIsImRpc2FibGUiLCJzZXJ2ZSIsInNldHVwIiwiYmNyeXB0IiwiX2hhc2hQYXNzd29yZCIsInNhbHQiLCJnZW5TYWx0IiwiaGFzaCIsIl9jb21wYXJlUGFzc3dvcmQiLCJwbGFpblRleHRQYXNzd29yZCIsImhhc2hlZFBhc3N3b3JkIiwiY29tcGFyZSIsInNlY3JldCIsInRpbWUiLCJzaWduIiwiZXhwaXJlc0luIiwiYWxnb3JpdGhtIiwiZGVjb2RlZFRva2VuIiwic3BsaXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInZlcmlmeSIsImVyciIsImRlY29kZWQiLCJjcnlwdG8iLCJjaGFyYWN0ZXJzIiwiY2hhcmFjdGVyc0xlbmd0aCIsInJlc3VsdCIsImkiLCJyYW5kb21JbmRleCIsInJhbmRvbUludCIsIm1pbnV0ZXMiLCJzY2hlbWEiLCJvcHRpb25zIiwiZmllbGRPcHRpb25zIiwiX29iamVjdFNwcmVhZCIsImFkZCIsIl9kZWZpbmVQcm9wZXJ0eSIsInByZSIsIl90aGlzIiwiaXNOZXciLCJjb25zdHJ1Y3RvciIsInNvcnQiLCJ0aGVuIiwibGFzdFJlY29yZCIsImRvY3MiLCJsYXN0Q291bnQiLCJmb3JFYWNoIiwiZG9jIiwiaW5kZXgiLCJwaG9uZU51bWJlciIsImhyZWYiLCJyZXF1aXJlIiwidXJsIiwicHVibGljSWQiLCJzaXplIiwiY3JlYXRlRGJDb25uZWN0aW9uIiwiX2NyZWF0ZURiQ29ubmVjdGlvbiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiQ09OTkVDVElPTl9TVFJJTkciLCJwYXRoIiwiTk9ERV9FTlYiLCJvdmVycmlkZSIsIkpXVF9BTEdPUklUSE0iLCJKV1RfQUNDRVNTX1NFQ1JFVCIsIkpXVF9BQ0NFU1NfRVhQSVJFU19JTiIsIkpXVF9SRUZSRVNIX1NFQ1JFVCIsIkpXVF9SRUZSRVNIX0VYUElSRVNfSU4iLCJKV1RfVkVSSUZJQ0FUSU9OX1NFQ1JFVCIsIkpXVF9WRVJJRklDQVRJT05fRVhQSVJFU19JTiIsIkFQSUVycm9yIiwibm9kZW1haWxlciIsInNlbmRFbWFpbCIsIm1haWxPcHRpb25zIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJhdXRoIiwiTUFJTF9VU0VSIiwicGFzcyIsIk1BSUxfUEFTU1dPUkQiLCJzZW5kTWFpbCIsImluZm8iLCJzd2FnZ2VySnNkb2MiLCJkZWZpbml0aW9uIiwib3BlbmFwaSIsInZlcnNpb24iLCJkZXNjcmlwdGlvbiIsInNlcnZlcnMiLCJhcGlzIiwic2VlZCIsInVzZXJTZWVkZXIiLCJyb2xlU2VlZGVyIiwiYWxsIiwiRGlDb250YWluZXIiLCJkZXBlbmRlbmNpZXMiLCJuYW1lIiwiZnVuYyIsIkFycmF5IiwiaXNBcnJheSIsIl90aGlzJGRlcGVuZGVuY2llcyRuYSIsImRlcGVuZGVuY2llc0luc3RhbmNlcyIsImRlcGVuZGVuY3kiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJwcm9wcyIsInN0YXR1c0NvZGUiLCJnZXRSZWFzb25QaHJhc2UiLCJkZXRhaWxzIiwiX3JlZiRzdGF0dXMiLCJfcmVmMiIsIl9yZWYyJHN0YXR1cyIsIl9yZWYyJGRldGFpbHMiLCJfc2VuZFZlcmlmaWNhdGlvbkVtYWlsIiwiZnJvbSIsIk1BSUxfRlJPTSIsInRvIiwic3ViamVjdCIsInRleHQiLCJfRXJyb3IiLCJfd3JhcE5hdGl2ZVN1cGVyIiwiZmluZEJ5SWRBbmRVcGRhdGUiLCJmaW5kQnlJZEFuZERlbGV0ZSIsInF1ZXJ5IiwiY291bnQiLCJjb3VudERvY3VtZW50cyIsImFnZ3JlZ2F0ZSIsInBpcGVsaW5lIiwiaW5zZXJ0TWFueSIsInVwZGF0ZU1hbnkiLCJidWxrV3JpdGUiLCJvcGVyYXRpb25zIiwiX3Vwc2VydCIsImZpbmREYXRhIiwidXBzZXJ0IiwiY3JlYXRlU2VydmVyIiwic2VydmVyIiwiUE9SVCIsImxpc3RlbiJdLCJzb3VyY2VSb290IjoiIn0=