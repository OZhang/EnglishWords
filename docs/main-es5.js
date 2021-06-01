function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <h1>{{ currentModule }}</h1>\r\n    <button mat-button (click)=\"previousModule()\">上一模块</button>\r\n    <button mat-button (click)=\"nextModule()\">下一模块</button>\r\n\r\n    <h3>{{ currentWordIndex + 1 }} / {{ totalWords }}</h3>\r\n    <div [ngClass]=\"{'disabled': isDisabled}\" style=\"width: 100%;\">\r\n        <app-words style=\"width: 100%;\" [English]=\"english\" [PhoneticSymbols]=\"phoneticSymbols\" [Chinese]=\"chinese\" [Answer]=\"answer\"\r\n            (answerChanged)=\"answerChanged($event)\">\r\n        </app-words>\r\n        <button mat-button (click)=\"previousWord()\">上一个</button>\r\n        <button mat-button (click)=\"nextWord()\">下一个</button>\r\n    </div>\r\n    <button mat-button *ngIf=\"isCompleted\" (click)=\"completed()\">完成</button>\r\n    <button mat-button *ngIf=\"wrongCount > 0\" (click)=\"reTest()\">重做错题</button>\r\n    <br>\r\n    <span *ngIf=\"correctCount > 0 || wrongCount > 0\">正确：{{ correctCount }}</span>\r\n    <span *ngIf=\"correctCount > 0 || wrongCount > 0\">错误：{{ wrongCount }}</span>\r\n    <br>\r\n    <ul *ngFor=\"let word of wrongWords\">\r\n        <li>\r\n            <p>{{ word.Chinese }}</p>\r\n            <p>{{ word.English }}</p>\r\n            <p class=\"wrongWord\">回答：{{ word.answer }}</p>\r\n        </li>\r\n    </ul>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/words/words.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/words/words.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsWordsWordsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"width: 100%;\" > \n    <h2>{{ Chinese }}</h2>\n    \n    <button mat-button (click)=\"speak()\">\n        <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">record_voice_over</mat-icon>\n    </button>\n    <mat-form-field style=\"width: 100%;\" >\n        <input matInput #myInput [(ngModel)]=\"answerInput\" style=\"width: 100%;\"\n        autocomplete=\"off\" (change)=\"changed($event.target.value)\" autofocus>\n    </mat-form-field>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrongWord {\n  color: red;\n}\n\n.container {\n  margin-left: 30px;\n  margin-top: 50px;\n  margin-right: 50px;\n  width: 600px;\n}\n\n.disabled {\n  pointer-events: none;\n  /* for \"disabled\" effect */\n  opacity: 0.5;\n  background: #CCC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXHRlc3RQcm9qZWN0c1xcYW5ndWxhclxcRW5nbGlzaFdvcmRzL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUVFLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cm9uZ1dvcmQge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA2MDBweDtcclxufVxyXG5cclxuLmRpc2FibGVkXHJcbntcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAvKiBmb3IgXCJkaXNhYmxlZFwiIGVmZmVjdCAqL1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBiYWNrZ3JvdW5kOiAjQ0NDO1xyXG59IiwiLndyb25nV29yZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICB3aWR0aDogNjAwcHg7XG59XG5cbi5kaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAvKiBmb3IgXCJkaXNhYmxlZFwiIGVmZmVjdCAqL1xuICBvcGFjaXR5OiAwLjU7XG4gIGJhY2tncm91bmQ6ICNDQ0M7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_get_words_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./service/get-words.service */
    "./src/app/service/get-words.service.ts");
    /* harmony import */


    var src_app_service_speech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/speech.service */
    "./src/app/service/speech.service.ts");
    /* harmony import */


    var _assets_json_72external_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../assets/json/72external.json */
    "./src/assets/json/72external.json");

    var _assets_json_72external_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../assets/json/72external.json */
    "./src/assets/json/72external.json", 1);
    /* harmony import */


    var _assets_json_M12_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../assets/json/M12.json */
    "./src/assets/json/M12.json");

    var _assets_json_M12_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../assets/json/M12.json */
    "./src/assets/json/M12.json", 1);
    /* harmony import */


    var _assets_json_7_1_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../assets/json/7_1.json */
    "./src/assets/json/7_1.json");

    var _assets_json_7_1_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../assets/json/7_1.json */
    "./src/assets/json/7_1.json", 1);

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(getWordsService, speech) {
        _classCallCheck(this, AppComponent);

        this.getWordsService = getWordsService;
        this.speech = speech;
        this.title = 'English Words';
        this.currentModuleIndex = 0;
        this.currentWordIndex = 0;
        this.totalWords = 0;
        this.correctCount = 0;
        this.wrongCount = 0;
        this.wrongWords = [];
        this.english = "";
        this.phoneticSymbols = 'ps';
        this.chinese = "苹果";
        this.answer = "";
        this.isCompleted = false;
        this.isDisabled = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var all = _assets_json_M12_json__WEBPACK_IMPORTED_MODULE_5__;
          all = all.concat(_assets_json_7_1_json__WEBPACK_IMPORTED_MODULE_6__);
          all = all.concat(_assets_json_72external_json__WEBPACK_IMPORTED_MODULE_4__);
          this.allWords = all;
          console.log(this.allWords);
          this.goToModule(0);
        }
      }, {
        key: "previousWord",
        value: function previousWord() {
          this.currentWordIndex -= 1;

          if (this.currentWordIndex < 0) {
            this.currentWordIndex = 0;
          }

          this.goToWord(this.currentWordIndex);
        }
      }, {
        key: "nextWord",
        value: function nextWord() {
          this.currentWordIndex += 1;

          if (this.currentWordIndex >= this.currentWords.length) {
            this.currentWordIndex = this.currentWords.length - 1;
          }

          this.goToWord(this.currentWordIndex);
        }
      }, {
        key: "answerChanged",
        value: function answerChanged(value) {
          this.currentWord.answer = value.toString().trim();
          this.isCompleted = this.checkCompleted();
        }
      }, {
        key: "goToWord",
        value: function goToWord(index) {
          this.currentWord = this.currentWords[index];
          this.english = this.currentWord['English'];
          this.phoneticSymbols = this.currentWord['PhoneticSymbols'];
          this.chinese = this.currentWord['Chinese'];
          this.answer = this.currentWord['answer'];
          this.speech.Speak(this.english);
        }
      }, {
        key: "checkCompleted",
        value: function checkCompleted() {
          var count = 0;
          this.currentWords.forEach(function (word) {
            if (word.answer === undefined) {} else if (word.answer.length > 0) {
              count++;
            }
          });
          return count === this.totalWords;
        }
      }, {
        key: "nextModule",
        value: function nextModule() {
          this.isCompleted = false;
          this.isDisabled = false;
          this.currentModuleIndex += 1;
          console.log("this.currentModuleIndex = ", this.currentModuleIndex);

          if (this.currentModuleIndex === this.allWords.length) {
            this.currentModuleIndex = this.allWords.length - 1;
          }

          this.goToModule(this.currentModuleIndex);
        }
      }, {
        key: "previousModule",
        value: function previousModule() {
          this.isCompleted = false;
          this.isDisabled = false;
          this.currentModuleIndex -= 1;

          if (this.currentModuleIndex < 0) {
            this.currentModuleIndex = 0;
          }

          this.goToModule(this.currentModuleIndex);
        }
      }, {
        key: "goToModule",
        value: function goToModule(index) {
          this.wrongWords = [];
          this.correctCount = 0;
          this.wrongCount = 0;
          this.currentWordIndex = 0;
          this.currentModule = this.allWords[index]['Name'];
          this.allWords[index]['Words'].forEach(function (word) {
            if (word.answer === undefined) {
              word.answer = "";
            }
          });
          this.currentWords = this.allWords[index]['Words'];
          this.totalWords = this.currentWords.length;
          this.goToWord(this.currentWordIndex);
        }
      }, {
        key: "completed",
        value: function completed() {
          var _this = this;

          this.isDisabled = true;
          this.wrongWords = [];
          var correct = 0;
          var wrong = 0;
          this.currentWords.forEach(function (word) {
            if (word['answer'] === word['English']) {
              correct += 1;
            } else {
              wrong += 1;

              _this.wrongWords.push(word);
            }
          });
          this.correctCount = correct;
          this.wrongCount = wrong;
        }
      }, {
        key: "shuffle",
        value: function shuffle(array) {
          var currentIndex = array.length,
              temporaryValue,
              randomIndex;

          while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

          return array;
        }
      }, {
        key: "reTest",
        value: function reTest() {
          this.isCompleted = false;
          this.isDisabled = false;
          this.currentWords = this.shuffle(this.wrongWords);
          this.currentWords.forEach(function (word) {
            word['answer'] = "";
          });
          this.wrongWords = [];
          this.correctCount = 0;
          this.wrongCount = 0;
          this.currentWordIndex = 0;
          this.totalWords = this.currentWords.length;
          this.goToWord(this.currentWordIndex);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _service_get_words_service__WEBPACK_IMPORTED_MODULE_2__["GetWordsService"]
      }, {
        type: src_app_service_speech_service__WEBPACK_IMPORTED_MODULE_3__["SpeechService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_words_words_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/words/words.component */
    "./src/app/components/words/words.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_words_words_component__WEBPACK_IMPORTED_MODULE_6__["WordsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/words/words.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/words/words.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsWordsWordsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd29yZHMvd29yZHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/words/words.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/words/words.component.ts ***!
    \*****************************************************/

  /*! exports provided: WordsComponent */

  /***/
  function srcAppComponentsWordsWordsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WordsComponent", function () {
      return WordsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_service_speech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/speech.service */
    "./src/app/service/speech.service.ts");

    var WordsComponent = /*#__PURE__*/function () {
      function WordsComponent(formBuilder, speech) {
        _classCallCheck(this, WordsComponent);

        this.formBuilder = formBuilder;
        this.speech = speech;
        this.answerChangedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.answerInput = "";
      }

      _createClass(WordsComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.answerInput = this.Answer;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.wordFrom = this.formBuilder.group({
            answer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.speak();
        }
      }, {
        key: "changed",
        value: function changed(value) {
          console.log("changed.value = ", value);
          this.answerChangedEvent.emit(value.trim()); // this.speak();
        }
      }, {
        key: "speak",
        value: function speak() {
          this.speech.Speak(this.English);
        }
      }]);

      return WordsComponent;
    }();

    WordsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_service_speech_service__WEBPACK_IMPORTED_MODULE_3__["SpeechService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myInput', {
      "static": false
    })], WordsComponent.prototype, "input", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WordsComponent.prototype, "English", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WordsComponent.prototype, "PhoneticSymbols", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WordsComponent.prototype, "Chinese", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WordsComponent.prototype, "Answer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('answerChanged')], WordsComponent.prototype, "answerChangedEvent", void 0);
    WordsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-words',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./words.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/words/words.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./words.component.scss */
      "./src/app/components/words/words.component.scss"))["default"]]
    })], WordsComponent);
    /***/
  },

  /***/
  "./src/app/service/get-words.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/service/get-words.service.ts ***!
    \**********************************************/

  /*! exports provided: GetWordsService */

  /***/
  function srcAppServiceGetWordsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetWordsService", function () {
      return GetWordsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var GetWordsService = /*#__PURE__*/function () {
      function GetWordsService(http) {
        _classCallCheck(this, GetWordsService);

        this.http = http;
      }

      _createClass(GetWordsService, [{
        key: "getJson",
        value: function getJson() {
          return this.http.get("../assets/json/72external.json");
        }
      }]);

      return GetWordsService;
    }();

    GetWordsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    GetWordsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GetWordsService);
    /***/
  },

  /***/
  "./src/app/service/speech.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/service/speech.service.ts ***!
    \*******************************************/

  /*! exports provided: SpeechService */

  /***/
  function srcAppServiceSpeechServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeechService", function () {
      return SpeechService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var speak_tts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! speak-tts */
    "./node_modules/speak-tts/lib/speak-tts.js");
    /* harmony import */


    var speak_tts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(speak_tts__WEBPACK_IMPORTED_MODULE_2__);

    var SpeechService = /*#__PURE__*/function () {
      function SpeechService() {
        _classCallCheck(this, SpeechService);

        this.speech = new speak_tts__WEBPACK_IMPORTED_MODULE_2___default.a(); // will throw an exception if not browser supported

        if (this.speech.hasBrowserSupport()) {
          // returns a boolean
          console.log("speech synthesis supported");
          this.speech.init({
            'volume': 1,
            'lang': 'en-GB',
            'rate': 1,
            'pitch': 1,
            'voice': 'Google US English en-US',
            'splitSentences': true,
            'listeners': {
              'onvoiceschanged': function onvoiceschanged(voices) {
                console.log("Event voiceschanged", voices);
              }
            }
          }).then(function (data) {
            // The "data" object contains the list of available voices and the voice synthesis params
            console.log("Speech is ready, voices are available", data);
            data.voices.forEach(function (voice) {
              console.log(voice.name + " " + voice.lang);
            });
          })["catch"](function (e) {
            console.error("An error occured while initializing : ", e);
          });
        }
      }

      _createClass(SpeechService, [{
        key: "Speak",
        value: function Speak(word) {
          //console.log(`speak start ${word} `)
          this.speech.speak({
            text: word,
            queue: false // current speech will be interrupted,

          }).then(function () {
            console.log("Success !");
          })["catch"](function (e) {
            console.error("An error occurred :", e);
          });
        }
      }]);

      return SpeechService;
    }();

    SpeechService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SpeechService);
    /***/
  },

  /***/
  "./src/assets/json/72external.json":
  /*!*****************************************!*\
    !*** ./src/assets/json/72external.json ***!
    \*****************************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, default */

  /***/
  function srcAssetsJson72externalJson(module) {
    module.exports = JSON.parse("[{\"Name\":\"第38期\",\"Words\":[{\"English\":\"group\",\"PhoneticSymbols\":\"\",\"Chinese\":\"群，团体，组\"},{\"English\":\"invention\",\"PhoneticSymbols\":\"\",\"Chinese\":\"发明物\"},{\"English\":\"end up\",\"PhoneticSymbols\":\"\",\"Chinese\":\"以……告终\"},{\"English\":\"mind\",\"PhoneticSymbols\":\"\",\"Chinese\":\"想法\"},{\"English\":\"give up\",\"PhoneticSymbols\":\"\",\"Chinese\":\"放弃\"},{\"English\":\"blow\",\"PhoneticSymbols\":\"\",\"Chinese\":\"吹\"},{\"English\":\"set up\",\"PhoneticSymbols\":\"\",\"Chinese\":\"创立，设立\"},{\"English\":\"arrive\",\"PhoneticSymbols\":\"\",\"Chinese\":\"到达\"},{\"English\":\"appear\",\"PhoneticSymbols\":\"\",\"Chinese\":\"出现\"},{\"English\":\"center\",\"PhoneticSymbols\":\"\",\"Chinese\":\"中心，中央\"},{\"English\":\"amount\",\"PhoneticSymbols\":\"\",\"Chinese\":\"量；数量\"},{\"English\":\"focus\",\"PhoneticSymbols\":\"\",\"Chinese\":\"集中（精力）\"},{\"English\":\"sickness\",\"PhoneticSymbols\":\"\",\"Chinese\":\"疾病\"},{\"English\":\"fit\",\"PhoneticSymbols\":\"\",\"Chinese\":\"健康的，结实的\"}]},{\"Name\":\"第36-37期\",\"Words\":[{\"English\":\"laugh\",\"PhoneticSymbols\":\"\",\"Chinese\":\"笑\"},{\"English\":\"believe\",\"PhoneticSymbols\":\"\",\"Chinese\":\"相信\"},{\"English\":\"probably\",\"PhoneticSymbols\":\"\",\"Chinese\":\"可能\"},{\"English\":\"shake\",\"PhoneticSymbols\":\"\",\"Chinese\":\"摇晃\"},{\"English\":\"promise\",\"PhoneticSymbols\":\"\",\"Chinese\":\"承诺\"},{\"English\":\"swing\",\"PhoneticSymbols\":\"\",\"Chinese\":\"挥动，摇荡，前后摆动\"},{\"English\":\"space\",\"PhoneticSymbols\":\"\",\"Chinese\":\"空间\"},{\"English\":\"mistake\",\"PhoneticSymbols\":\"\",\"Chinese\":\"错误\"},{\"English\":\"solve\",\"PhoneticSymbols\":\"\",\"Chinese\":\"解决\"},{\"English\":\"decide\",\"PhoneticSymbols\":\"\",\"Chinese\":\"决定\"},{\"English\":\"magic\",\"PhoneticSymbols\":\"\",\"Chinese\":\"有魔力的\"},{\"English\":\"escape\",\"PhoneticSymbols\":\"\",\"Chinese\":\"逃跑\"},{\"English\":\"brave\",\"PhoneticSymbols\":\"\",\"Chinese\":\"勇敢的\"},{\"English\":\"hole\",\"PhoneticSymbols\":\"\",\"Chinese\":\"洞\"}]},{\"Name\":\"第35期\",\"Words\":[{\"English\":\"close\",\"PhoneticSymbols\":\"\",\"Chinese\":\"靠近……的，亲近的\"},{\"English\":\"celebrate\",\"PhoneticSymbols\":\"\",\"Chinese\":\"庆祝\"},{\"English\":\"add\",\"PhoneticSymbols\":\"\",\"Chinese\":\"添加\"},{\"English\":\"comfortable\",\"PhoneticSymbols\":\"\",\"Chinese\":\"舒适的\"},{\"English\":\"luckily\",\"PhoneticSymbols\":\"\",\"Chinese\":\"幸运地\"},{\"English\":\"few\",\"PhoneticSymbols\":\"\",\"Chinese\":\"很少的\"},{\"English\":\"touch\",\"PhoneticSymbols\":\"\",\"Chinese\":\"感动\"},{\"English\":\"expect\",\"PhoneticSymbols\":\"\",\"Chinese\":\"期待，预料\"},{\"English\":\"complain\",\"PhoneticSymbols\":\"\",\"Chinese\":\"抱怨\"},{\"English\":\"push\",\"PhoneticSymbols\":\"\",\"Chinese\":\"推\"},{\"English\":\"pull\",\"PhoneticSymbols\":\"\",\"Chinese\":\"拉\"},{\"English\":\"lie\",\"PhoneticSymbols\":\"\",\"Chinese\":\"躺\"},{\"English\":\"explain\",\"PhoneticSymbols\":\"\",\"Chinese\":\"解释\"},{\"English\":\"improve\",\"PhoneticSymbols\":\"\",\"Chinese\":\"改进\"}]},{\"Name\":\"第34期\",\"Words\":[{\"English\":\"another\",\"PhoneticSymbols\":\"\",\"Chinese\":\"不同的，另外的\"},{\"English\":\"piece\",\"PhoneticSymbols\":\"\",\"Chinese\":\"块；片\"},{\"English\":\"successful\",\"PhoneticSymbols\":\"\",\"Chinese\":\"成功的\"},{\"English\":\"catch\",\"PhoneticSymbols\":\"\",\"Chinese\":\"逮住；赶上\"},{\"English\":\"keep\",\"PhoneticSymbols\":\"\",\"Chinese\":\"保持\"},{\"English\":\"wait\",\"PhoneticSymbols\":\"\",\"Chinese\":\"等待\"},{\"English\":\"build\",\"PhoneticSymbols\":\"\",\"Chinese\":\"建造\"},{\"English\":\"several\",\"PhoneticSymbols\":\"\",\"Chinese\":\"几个的\"},{\"English\":\"role\",\"PhoneticSymbols\":\"\",\"Chinese\":\"角色\"},{\"English\":\"grow\",\"PhoneticSymbols\":\"\",\"Chinese\":\"成长\"},{\"English\":\"at least\",\"PhoneticSymbols\":\"\",\"Chinese\":\"至少\"},{\"English\":\"corner\",\"PhoneticSymbols\":\"\",\"Chinese\":\"角落，区域\"},{\"English\":\"kiss\",\"PhoneticSymbols\":\"\",\"Chinese\":\"亲吻\"},{\"English\":\"train\",\"PhoneticSymbols\":\"\",\"Chinese\":\"训练；培训\"},{\"English\":\"matter\",\"PhoneticSymbols\":\"\",\"Chinese\":\"事情\"},{\"English\":\"curious\",\"PhoneticSymbols\":\"\",\"Chinese\":\"好奇的\"}]},{\"Name\":\"第33期\",\"Words\":[{\"English\":\"break out\",\"PhoneticSymbols\":\"\",\"Chinese\":\"爆发\"},{\"English\":\"bring\",\"PhoneticSymbols\":\"\",\"Chinese\":\"带来；拿来\"},{\"English\":\"natural\",\"PhoneticSymbols\":\"\",\"Chinese\":\"自然的\"},{\"English\":\"finally\",\"PhoneticSymbols\":\"\",\"Chinese\":\"最终地\"},{\"English\":\"difference\",\"PhoneticSymbols\":\"\",\"Chinese\":\"不同，相异\"},{\"English\":\"listen\",\"PhoneticSymbols\":\"\",\"Chinese\":\"听\"},{\"English\":\"throw\",\"PhoneticSymbols\":\"\",\"Chinese\":\"扔\"},{\"English\":\"tooth\",\"PhoneticSymbols\":\"\",\"Chinese\":\"牙齿\"},{\"English\":\"pick\",\"PhoneticSymbols\":\"\",\"Chinese\":\"选择，挑选\"},{\"English\":\"calm\",\"PhoneticSymbols\":\"\",\"Chinese\":\"使平静\"},{\"English\":\"famous\",\"PhoneticSymbols\":\"\",\"Chinese\":\"著名的\"},{\"English\":\"carefully\",\"PhoneticSymbols\":\"\",\"Chinese\":\"认真地\"},{\"English\":\"safe\",\"PhoneticSymbols\":\"\",\"Chinese\":\"安全的\"},{\"English\":\"break\",\"PhoneticSymbols\":\"\",\"Chinese\":\"弄断\"},{\"English\":\"relationship\",\"PhoneticSymbols\":\"\",\"Chinese\":\"关系\"},{\"English\":\"reach\",\"PhoneticSymbols\":\"\",\"Chinese\":\"到达；达到\"}]},{\"Name\":\"第31-32期\",\"Words\":[{\"English\":\"plan\",\"PhoneticSymbols\":\"\",\"Chinese\":\"计划，打算\"},{\"English\":\"touch\",\"PhoneticSymbols\":\"\",\"Chinese\":\"使感动\"},{\"English\":\"cultural\",\"PhoneticSymbols\":\"\",\"Chinese\":\"文化的\"},{\"English\":\"cover\",\"PhoneticSymbols\":\"\",\"Chinese\":\"覆盖\"},{\"English\":\"choose\",\"PhoneticSymbols\":\"\",\"Chinese\":\"选择\"},{\"English\":\"almost\",\"PhoneticSymbols\":\"\",\"Chinese\":\"几乎\"},{\"English\":\"similar\",\"PhoneticSymbols\":\"\",\"Chinese\":\"相似的\"},{\"English\":\"mirror\",\"PhoneticSymbols\":\"\",\"Chinese\":\"镜子\"},{\"English\":\"terrible\",\"PhoneticSymbols\":\"\",\"Chinese\":\"糟糕的\"},{\"English\":\"hang\",\"PhoneticSymbols\":\"\",\"Chinese\":\"垂\"},{\"English\":\"change\",\"PhoneticSymbols\":\"\",\"Chinese\":\"改变\"},{\"English\":\"low\",\"PhoneticSymbols\":\"\",\"Chinese\":\"低低地\"}]},{\"Name\":\"第30期\",\"Words\":[{\"English\":\"try\",\"PhoneticSymbols\":\"\",\"Chinese\":\"尝试\"},{\"English\":\"mix\",\"PhoneticSymbols\":\"\",\"Chinese\":\"混合\"},{\"English\":\"later\",\"PhoneticSymbols\":\"\",\"Chinese\":\"后来，随后\"},{\"English\":\"hope\",\"PhoneticSymbols\":\"\",\"Chinese\":\"希望\"},{\"English\":\"probably\",\"PhoneticSymbols\":\"\",\"Chinese\":\"很可能\"},{\"English\":\"comfortable\",\"PhoneticSymbols\":\"\",\"Chinese\":\"舒适的，自在的\"},{\"English\":\"event\",\"PhoneticSymbols\":\"\",\"Chinese\":\"比赛项目\"},{\"English\":\"free\",\"PhoneticSymbols\":\"\",\"Chinese\":\"免费的 \"},{\"English\":\"win\",\"PhoneticSymbols\":\"\",\"Chinese\":\"赢\"},{\"English\":\"difference\",\"PhoneticSymbols\":\"\",\"Chinese\":\"差别\"},{\"English\":\"full\",\"PhoneticSymbols\":\"\",\"Chinese\":\"完全的\"},{\"English\":\"example\",\"PhoneticSymbols\":\"\",\"Chinese\":\"榜样\"}]},{\"Name\":\"第29期\",\"Words\":[{\"English\":\"competition\",\"PhoneticSymbols\":\"\",\"Chinese\":\"竞争，比赛\"},{\"English\":\"fill\",\"PhoneticSymbols\":\"\",\"Chinese\":\"装满，填满\"},{\"English\":\"view\",\"PhoneticSymbols\":\"\",\"Chinese\":\"风景，视野，见解\"},{\"English\":\"necessary\",\"PhoneticSymbols\":\"\",\"Chinese\":\"有必要的\"},{\"English\":\"agree\",\"PhoneticSymbols\":\"\",\"Chinese\":\"同意\"},{\"English\":\"save\",\"PhoneticSymbols\":\"\",\"Chinese\":\"拯救\"},{\"English\":\"main\",\"PhoneticSymbols\":\"\",\"Chinese\":\"主要的\"},{\"English\":\"honest\",\"PhoneticSymbols\":\"\",\"Chinese\":\"诚实的\"},{\"English\":\"trust\",\"PhoneticSymbols\":\"\",\"Chinese\":\"信任\"},{\"English\":\"escape\",\"PhoneticSymbols\":\"\",\"Chinese\":\"逃跑\"},{\"English\":\"agree\",\"PhoneticSymbols\":\"\",\"Chinese\":\"同意\"},{\"English\":\"realize\",\"PhoneticSymbols\":\"\",\"Chinese\":\"意识到\"}]},{\"Name\":\"第28期\",\"Words\":[{\"English\":\"even\",\"PhoneticSymbols\":\"\",\"Chinese\":\"甚至，还\"},{\"English\":\"invite\",\"PhoneticSymbols\":\"\",\"Chinese\":\"邀请\"},{\"English\":\"die\",\"PhoneticSymbols\":\"\",\"Chinese\":\"死\"},{\"English\":\"lose\",\"PhoneticSymbols\":\"\",\"Chinese\":\"失去\"},{\"English\":\"advice\",\"PhoneticSymbols\":\"\",\"Chinese\":\"建议\"},{\"English\":\"surprised\",\"PhoneticSymbols\":\"\",\"Chinese\":\"感到惊讶的\"},{\"English\":\"common\",\"PhoneticSymbols\":\"\",\"Chinese\":\"普通的\"},{\"English\":\"spend\",\"PhoneticSymbols\":\"\",\"Chinese\":\"花费\"},{\"English\":\"enough\",\"PhoneticSymbols\":\"\",\"Chinese\":\"足够的，充足的\"},{\"English\":\"human\",\"PhoneticSymbols\":\"\",\"Chinese\":\"人类的\"},{\"English\":\"decide\",\"PhoneticSymbols\":\"\",\"Chinese\":\"决定\"},{\"English\":\"rich\",\"PhoneticSymbols\":\"\",\"Chinese\":\"富有的\"},{\"English\":\"guest\",\"PhoneticSymbols\":\"\",\"Chinese\":\"客人\"},{\"English\":\"visit\",\"PhoneticSymbols\":\"\",\"Chinese\":\"拜访\"},{\"English\":\"share\",\"PhoneticSymbols\":\"\",\"Chinese\":\"分享\"},{\"English\":\"taste\",\"PhoneticSymbols\":\"\",\"Chinese\":\"品尝\"}]},{\"Name\":\"第27期\",\"Words\":[{\"English\":\"reach\",\"PhoneticSymbols\":\"\",\"Chinese\":\"达到\"},{\"English\":\"add\",\"PhoneticSymbols\":\"\",\"Chinese\":\"增加\"},{\"English\":\"refuse\",\"PhoneticSymbols\":\"\",\"Chinese\":\"拒绝\"},{\"English\":\"change\",\"PhoneticSymbols\":\"\",\"Chinese\":\"变化\"},{\"English\":\"enough\",\"PhoneticSymbols\":\"\",\"Chinese\":\"充分地，足够地\"},{\"English\":\"strict\",\"PhoneticSymbols\":\"\",\"Chinese\":\"对……严格要求\"},{\"English\":\"crowded\",\"PhoneticSymbols\":\"\",\"Chinese\":\"拥挤的\"},{\"English\":\"neighbor\",\"PhoneticSymbols\":\"\",\"Chinese\":\"邻居\"},{\"English\":\"reply\",\"PhoneticSymbols\":\"\",\"Chinese\":\"回答\"},{\"English\":\"care\",\"PhoneticSymbols\":\"\",\"Chinese\":\"关心，照顾\"},{\"English\":\"wonder\",\"PhoneticSymbols\":\"\",\"Chinese\":\"想知道\"},{\"English\":\"knock\",\"PhoneticSymbols\":\"\",\"Chinese\":\"敲\"}]},{\"Name\":\"第26期\",\"Words\":[{\"English\":\"wear\",\"PhoneticSymbols\":\"\",\"Chinese\":\"穿，戴\"},{\"English\":\"heavy\",\"PhoneticSymbols\":\"\",\"Chinese\":\"沉的，重的\"},{\"English\":\"happen\",\"PhoneticSymbols\":\"\",\"Chinese\":\"发生\"},{\"English\":\"upset\",\"PhoneticSymbols\":\"\",\"Chinese\":\"心烦的，苦恼的\"},{\"English\":\"competition\",\"PhoneticSymbols\":\"\",\"Chinese\":\"比赛\"},{\"English\":\"become\",\"PhoneticSymbols\":\"\",\"Chinese\":\"变得\"},{\"English\":\"environment\",\"PhoneticSymbols\":\"\",\"Chinese\":\"环境\"},{\"English\":\"turn\",\"PhoneticSymbols\":\"\",\"Chinese\":\"转向，翻\"},{\"English\":\"hear\",\"PhoneticSymbols\":\"\",\"Chinese\":\"听到；听说\"},{\"English\":\"possible\",\"PhoneticSymbols\":\"\",\"Chinese\":\"可能的\"},{\"English\":\"character\",\"PhoneticSymbols\":\"\",\"Chinese\":\"人物；符号；性格\"},{\"English\":\"hold\",\"PhoneticSymbols\":\"\",\"Chinese\":\"举办\"},{\"English\":\"invite\",\"PhoneticSymbols\":\"\",\"Chinese\":\"邀请\"},{\"English\":\"refuse\",\"PhoneticSymbols\":\"\",\"Chinese\":\"拒绝\"},{\"English\":\"agree\",\"PhoneticSymbols\":\"\",\"Chinese\":\"同意\"},{\"English\":\"borrow\",\"PhoneticSymbols\":\"\",\"Chinese\":\"借用\"}]}]");
    /***/
  },

  /***/
  "./src/assets/json/7_1.json":
  /*!**********************************!*\
    !*** ./src/assets/json/7_1.json ***!
    \**********************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, default */

  /***/
  function srcAssetsJson7_1Json(module) {
    module.exports = JSON.parse("[{\"Name\":\"Starter -Module1\",\"Words\":[{\"English\":\"hello\",\"PhoneticSymbols\":\"hə'lə ʊ\",\"Chinese\":\"你好，喂\"},{\"English\":\"class\",\"PhoneticSymbols\":\"kl ɑ :s\",\"Chinese\":\"同学，班级\"},{\"English\":\"my\",\"PhoneticSymbols\":\"ma ɪ\",\"Chinese\":\"我的\"},{\"English\":\"name\",\"PhoneticSymbols\":\"ne ɪ m\",\"Chinese\":\"名字\"},{\"English\":\"is\",\"PhoneticSymbols\":\"ɪ z\",\"Chinese\":\"是（动词 be 的第三人称单数现在式）\"},{\"English\":\"Miss\",\"PhoneticSymbols\":\"m ɪ s\",\"Chinese\":\"小姐（对未婚女性的称呼），老师\"},{\"English\":\"good\",\"PhoneticSymbols\":\"g ʊ d\",\"Chinese\":\"好的\"},{\"English\":\"morning\",\"PhoneticSymbols\":\"'m ɔ ː n ɪ ŋ\",\"Chinese\":\"早晨，上午\"},{\"English\":\"good morning\",\"PhoneticSymbols\":\"\",\"Chinese\":\"早上好\"},{\"English\":\"afternoon\",\"PhoneticSymbols\":\"ɑ ː ftə'nu ː n\",\"Chinese\":\"下午\"},{\"English\":\"good afternoon\",\"PhoneticSymbols\":\"\",\"Chinese\":\"下午好\"},{\"English\":\"goodbye\",\"PhoneticSymbols\":\"g ʊ d'ba ɪ\",\"Chinese\":\"再见\"},{\"English\":\"I\",\"PhoneticSymbols\":\"a ɪ\",\"Chinese\":\"我\"},{\"English\":\"am\",\"PhoneticSymbols\":\"æ m;   ə m\",\"Chinese\":\"是（动词 be 的第三人称单数现在式）\"},{\"English\":\"I’m=I am\",\"PhoneticSymbols\":\"\",\"Chinese\":\"我是\"},{\"English\":\"Mr\",\"PhoneticSymbols\":\"'m ɪ stə(r)\",\"Chinese\":\"先生\"},{\"English\":\"w hat\",\"PhoneticSymbols\":\"w ɒ t\",\"Chinese\":\"什么\"},{\"English\":\"your\",\"PhoneticSymbols\":\"j ɔ ː ; jə\",\"Chinese\":\"你的，你们的\"},{\"English\":\"please\",\"PhoneticSymbols\":\"pli:z\",\"Chinese\":\"请\"},{\"English\":\"sorry\",\"PhoneticSymbols\":\"'s ɒ r ɪ\",\"Chinese\":\"对不起，抱歉的\"},{\"English\":\"can\",\"PhoneticSymbols\":\"kæn, kən\",\"Chinese\":\"能，能够\"},{\"English\":\"you\",\"PhoneticSymbols\":\"ju ː\",\"Chinese\":\"你，你们\"},{\"English\":\"spell\",\"PhoneticSymbols\":\"spel\",\"Chinese\":\"拼写\"},{\"English\":\"it\",\"PhoneticSymbols\":\"ɪ t\",\"Chinese\":\"它\"},{\"English\":\"yes\",\"PhoneticSymbols\":\"jes\",\"Chinese\":\"是，是的\"},{\"English\":\"thank\",\"PhoneticSymbols\":\"θæŋk\",\"Chinese\":\"谢谢\"},{\"English\":\"how\",\"PhoneticSymbols\":\"ha ʊ\",\"Chinese\":\"怎样，如何\"},{\"English\":\"are\",\"PhoneticSymbols\":\"ɑ ː\",\"Chinese\":\"是（动词 be 的复数和第二人称单数现在式）\"},{\"English\":\"fine\",\"PhoneticSymbols\":\"fa ɪ n\",\"Chinese\":\"很好的，不错的\"},{\"English\":\"thanks\",\"PhoneticSymbols\":\"θæŋks\",\"Chinese\":\"谢谢\"},{\"English\":\"Mrs\",\"PhoneticSymbols\":\"'m ɪ s ɪ z\",\"Chinese\":\"夫人，太太\"},{\"English\":\"too\",\"PhoneticSymbols\":\"tu:\",\"Chinese\":\"也，还\"},{\"English\":\"this\",\"PhoneticSymbols\":\"ð ɪ s\",\"Chinese\":\"这，这个（指较近的人或事物）\"},{\"English\":\"she\",\"PhoneticSymbols\":\"ʃ i:\",\"Chinese\":\"她\"},{\"English\":\"teacher\",\"PhoneticSymbols\":\"'ti:t ʃ ə\",\"Chinese\":\"老师\"},{\"English\":\"friend\",\"PhoneticSymbols\":\"frend\",\"Chinese\":\"朋友\"},{\"English\":\"her\",\"PhoneticSymbols\":\"h ɜ ː\",\"Chinese\":\"她的\"},{\"English\":\"his\",\"PhoneticSymbols\":\"h ɪ z\",\"Chinese\":\"他的\"},{\"English\":\"nice\",\"PhoneticSymbols\":\"na ɪ s\",\"Chinese\":\"美好的，令人愉快的\"},{\"English\":\"to\",\"PhoneticSymbols\":\"tu ː\",\"Chinese\":\"( 与原形动词一起构成动词不定式 )\"},{\"English\":\"meet\",\"PhoneticSymbols\":\"mi:t\",\"Chinese\":\"遇见，结识\"},{\"English\":\"time\",\"PhoneticSymbols\":\"ta ɪ m\",\"Chinese\":\"时间\"},{\"English\":\"go\",\"PhoneticSymbols\":\"gə ʊ\",\"Chinese\":\"走，去\"},{\"English\":\"now\",\"PhoneticSymbols\":\"na ʊ\",\"Chinese\":\"现在，目前\"},{\"English\":\"bye\",\"PhoneticSymbols\":\"ba ɪ\",\"Chinese\":\"再见\"},{\"English\":\"see\",\"PhoneticSymbols\":\"si:\",\"Chinese\":\"看见\"},{\"English\":\"tomorrow\",\"PhoneticSymbols\":\"tə'm ɒ rə ʊ\",\"Chinese\":\"明天\"}]},{\"Name\":\"Starter -Module 2\",\"Words\":[{\"English\":\"sit\",\"PhoneticSymbols\":\"s ɪ t\",\"Chinese\":\"坐\"},{\"English\":\"down\",\"PhoneticSymbols\":\"da ʊ n\",\"Chinese\":\"向下地，向下\"},{\"English\":\"sit down\",\"PhoneticSymbols\":\"\",\"Chinese\":\"坐下\"},{\"English\":\"open\",\"PhoneticSymbols\":\"'ə ʊ pən\",\"Chinese\":\"（打）开\"},{\"English\":\"book\",\"PhoneticSymbols\":\"b ʊ k\",\"Chinese\":\"书\"},{\"English\":\"listen\",\"PhoneticSymbols\":\"'l ɪ sn\",\"Chinese\":\"听，倾听\"},{\"English\":\"draw\",\"PhoneticSymbols\":\"dr ɔ :\",\"Chinese\":\"绘画，画\"},{\"English\":\"put\",\"PhoneticSymbols\":\"p ʊ t\",\"Chinese\":\"放，置\"},{\"English\":\"up\",\"PhoneticSymbols\":\"ʌ p\",\"Chinese\":\"向上地，朝上，向上\"},{\"English\":\"hand\",\"PhoneticSymbols\":\"hænd\",\"Chinese\":\"手\"},{\"English\":\"stand\",\"PhoneticSymbols\":\"stænd\",\"Chinese\":\"站立\"},{\"English\":\"stand up\",\"PhoneticSymbols\":\"\",\"Chinese\":\"起立\"},{\"English\":\"close\",\"PhoneticSymbols\":\"klə ʊ s\",\"Chinese\":\"合上，关闭\"},{\"English\":\"new\",\"PhoneticSymbols\":\"nju ː\",\"Chinese\":\"新的\"},{\"English\":\"student\",\"PhoneticSymbols\":\"'stju ː d(ə)nt\",\"Chinese\":\"学生\"},{\"English\":\"here\",\"PhoneticSymbols\":\"h ɪ ə\",\"Chinese\":\"这里，在这里\"},{\"English\":\"in\",\"PhoneticSymbols\":\"ɪ n\",\"Chinese\":\"在 … 里面\"},{\"English\":\"one\",\"PhoneticSymbols\":\"w ʌ n\",\"Chinese\":\"一\"},{\"English\":\"two\",\"PhoneticSymbols\":\"tu:\",\"Chinese\":\"二\"},{\"English\":\"three\",\"PhoneticSymbols\":\"θri:\",\"Chinese\":\"三\"},{\"English\":\"four\",\"PhoneticSymbols\":\"f ɔ :\",\"Chinese\":\"四\"},{\"English\":\"five\",\"PhoneticSymbols\":\"fa ɪ v\",\"Chinese\":\"五\"},{\"English\":\"six\",\"PhoneticSymbols\":\"s ɪ ks\",\"Chinese\":\"六\"},{\"English\":\"seven\",\"PhoneticSymbols\":\"'sevən\",\"Chinese\":\"七\"},{\"English\":\"eight\",\"PhoneticSymbols\":\"e ɪ t\",\"Chinese\":\"八\"},{\"English\":\"nine\",\"PhoneticSymbols\":\"na ɪ n\",\"Chinese\":\"九\"},{\"English\":\"ten\",\"PhoneticSymbols\":\"ten\",\"Chinese\":\"十\"},{\"English\":\"telephone\",\"PhoneticSymbols\":\"'tel ɪ fə ʊ n\",\"Chinese\":\"电话\"},{\"English\":\"number\",\"PhoneticSymbols\":\"'n ʌ mbə\",\"Chinese\":\"号码\"},{\"English\":\"old\",\"PhoneticSymbols\":\"ə ʊ ld\",\"Chinese\":\"… 年龄的， . .. 岁的\"},{\"English\":\"how old\",\"PhoneticSymbols\":\"\",\"Chinese\":\"多大，几岁\"},{\"English\":\"twelve\",\"PhoneticSymbols\":\"twelv\",\"Chinese\":\"十二\"},{\"English\":\"eleven\",\"PhoneticSymbols\":\"ɪ 'lev(ə)n\",\"Chinese\":\"十一\"},{\"English\":\"thirteen\",\"PhoneticSymbols\":\", θ ɜ ː 'ti:n\",\"Chinese\":\"十三\"},{\"English\":\"fourteen\",\"PhoneticSymbols\":\", f ɔ :'ti:n\",\"Chinese\":\"十四\"},{\"English\":\"fifteen\",\"PhoneticSymbols\":\", f ɪ fti:n\",\"Chinese\":\"十五\"},{\"English\":\"sixteen\",\"PhoneticSymbols\":\", s ɪ ks'ti:n\",\"Chinese\":\"十六\"},{\"English\":\"seventeen\",\"PhoneticSymbols\":\",sevən'ti:n\",\"Chinese\":\"十七\"},{\"English\":\"eighteen\",\"PhoneticSymbols\":\",e ɪ 'ti ː n\",\"Chinese\":\"十八\"},{\"English\":\"nineteen\",\"PhoneticSymbols\":\",na ɪ n'ti ː n\",\"Chinese\":\"十九\"},{\"English\":\"twenty\",\"PhoneticSymbols\":\"'twent ɪ\",\"Chinese\":\"二十\"},{\"English\":\"boy\",\"PhoneticSymbols\":\"b ɔɪ\",\"Chinese\":\"男孩\"},{\"English\":\"girl\",\"PhoneticSymbols\":\"g ɜ ː l\",\"Chinese\":\"女孩\"},{\"English\":\"desk\",\"PhoneticSymbols\":\"desk\",\"Chinese\":\"桌子\"},{\"English\":\"chair\",\"PhoneticSymbols\":\"t ʃ eə\",\"Chinese\":\"椅子\"},{\"English\":\"bag\",\"PhoneticSymbols\":\"bæg\",\"Chinese\":\"包，书包\"}]},{\"Name\":\"Starter -Module 3\",\"Words\":[{\"English\":\"in\",\"PhoneticSymbols\":\"ɪ n\",\"Chinese\":\"使用（使用某种语言）\"},{\"English\":\"English\",\"PhoneticSymbols\":\"' ɪ ŋgl ɪʃ\",\"Chinese\":\"英语，来自英格兰的\"},{\"English\":\"in English\",\"PhoneticSymbols\":\"\",\"Chinese\":\"用英语\"},{\"English\":\"a\",\"PhoneticSymbols\":\"ə; e ɪ\",\"Chinese\":\"一（个，件 … ）\"},{\"English\":\"write\",\"PhoneticSymbols\":\"ra ɪ t\",\"Chinese\":\"写\"},{\"English\":\"on\",\"PhoneticSymbols\":\"ɒ n\",\"Chinese\":\"在 . . . 上\"},{\"English\":\"the\",\"PhoneticSymbols\":\"ðə; ði:\",\"Chinese\":\"（指已经谈到或正在谈的事物）\"},{\"English\":\"blackboard\",\"PhoneticSymbols\":\"'blæk,b ɔ ː d\",\"Chinese\":\"黑板\"},{\"English\":\"OK\",\"PhoneticSymbols\":\",ə ʊ 'ke ɪ\",\"Chinese\":\"行，好（用于表示同意，赞成或理解）\"},{\"English\":\"pen\",\"PhoneticSymbols\":\"pen\",\"Chinese\":\"笔，钢笔\"},{\"English\":\"no\",\"PhoneticSymbols\":\"nə ʊ\",\"Chinese\":\"不，不是，没有（用于表示否定的回答）\"},{\"English\":\"pencil\",\"PhoneticSymbols\":\"'pens(ə)l; -s ɪ l\",\"Chinese\":\"铅笔\"},{\"English\":\"do\",\"PhoneticSymbols\":\"du ː\",\"Chinese\":\"（用于构成疑问句和否定句）\"},{\"English\":\"bird\",\"PhoneticSymbols\":\"b ɜ ː d\",\"Chinese\":\"鸟\"},{\"English\":\"cat\",\"PhoneticSymbols\":\"kæt\",\"Chinese\":\"猫\"},{\"English\":\"dog\",\"PhoneticSymbols\":\"d ɒ g\",\"Chinese\":\"狗\"},{\"English\":\"flower\",\"PhoneticSymbols\":\"'fla ʊ ə\",\"Chinese\":\"花\"},{\"English\":\"help\",\"PhoneticSymbols\":\"help\",\"Chinese\":\"帮助\"},{\"English\":\"me\",\"PhoneticSymbols\":\"mi ː\",\"Chinese\":\"（宾格）我\"},{\"English\":\"of\",\"PhoneticSymbols\":\"ɒ v; əv\",\"Chinese\":\". .. 的\"},{\"English\":\"course\",\"PhoneticSymbols\":\"k ɔ :s\",\"Chinese\":\"当然\"},{\"English\":\"of course\",\"PhoneticSymbols\":\"\",\"Chinese\":\"是的，当然\"},{\"English\":\"classroom\",\"PhoneticSymbols\":\"'kl ɑ ː sru ː m\",\"Chinese\":\"教室\"},{\"English\":\"know\",\"PhoneticSymbols\":\"nə ʊ\",\"Chinese\":\"知道，懂得\"},{\"English\":\"say\",\"PhoneticSymbols\":\"se ɪ\",\"Chinese\":\"说，讲\"},{\"English\":\"that\",\"PhoneticSymbols\":\"ðæt\",\"Chinese\":\"那，那个（指较远的人或事物）\"},{\"English\":\"again\",\"PhoneticSymbols\":\"ə'gen; ə'ge ɪ n\",\"Chinese\":\"再（次），又（一次）\"},{\"English\":\"welcome\",\"PhoneticSymbols\":\"'welkəm\",\"Chinese\":\"受欢迎的，欢迎（迎接某人到某地的时的用语）\"},{\"English\":\"You’ re welcome\",\"PhoneticSymbols\":\"\",\"Chinese\":\"不用谢，别客气\"},{\"English\":\"black\",\"PhoneticSymbols\":\"blæk\",\"Chinese\":\"黑色的\"},{\"English\":\"blue\",\"PhoneticSymbols\":\"blu:\",\"Chinese\":\"蓝色的\"},{\"English\":\"green\",\"PhoneticSymbols\":\"gri ː n\",\"Chinese\":\"绿色的\"},{\"English\":\"yellow\",\"PhoneticSymbols\":\"'jelə ʊ\",\"Chinese\":\"黄色的\"},{\"English\":\"red\",\"PhoneticSymbols\":\"red\",\"Chinese\":\"红色的\"},{\"English\":\"brown\",\"PhoneticSymbols\":\"bra ʊ n\",\"Chinese\":\"棕色的\"},{\"English\":\"orange\",\"PhoneticSymbols\":\"' ɒ r ɪ n(d) ʒ\",\"Chinese\":\"橘黄色的，柑橘，橙\"},{\"English\":\"colour\",\"PhoneticSymbols\":\"'k ʌ lə\",\"Chinese\":\"颜色\"},{\"English\":\"and\",\"PhoneticSymbols\":\"æ nd\",\"Chinese\":\"和，与\"}]},{\"Name\":\"Starter -Module 4\",\"Words\":[{\"English\":\"day\",\"PhoneticSymbols\":\"de ɪ\",\"Chinese\":\"一天\"},{\"English\":\"today\",\"PhoneticSymbols\":\"tə'de ɪ\",\"Chinese\":\"今天\"},{\"English\":\"Monday\",\"PhoneticSymbols\":\"'m ʌ nd e ɪ\",\"Chinese\":\"星期一\"},{\"English\":\"Tuesday\",\"PhoneticSymbols\":\"'tju ː zde ɪ ; -d ɪ\",\"Chinese\":\"星期二\"},{\"English\":\"Wednesday\",\"PhoneticSymbols\":\"'wenzde ɪ ; -d ɪ\",\"Chinese\":\"星期三\"},{\"English\":\"Thursday\",\"PhoneticSymbols\":\"'θ ɜ ː zde ɪ ; -d ɪ\",\"Chinese\":\"星期四\"},{\"English\":\"Friday\",\"PhoneticSymbols\":\"'fra ɪ d e ɪ ; -d ɪ\",\"Chinese\":\"星期五\"},{\"English\":\"Saturday\",\"PhoneticSymbols\":\"'sætəd e ɪ ; -d ɪ\",\"Chinese\":\"星期六\"},{\"English\":\"Sunday\",\"PhoneticSymbols\":\"'s ʌ nde ɪ ; -d ɪ\",\"Chinese\":\"星期天\"},{\"English\":\"birthday\",\"PhoneticSymbols\":\"'b ɜ ː θde ɪ\",\"Chinese\":\"生日\"},{\"English\":\"favourite\",\"PhoneticSymbols\":\"'fe ɪ v(ə)r ɪ t\",\"Chinese\":\"最喜爱的\"},{\"English\":\"spring\",\"PhoneticSymbols\":\"spr ɪ ŋ\",\"Chinese\":\"春天\"},{\"English\":\"summer\",\"PhoneticSymbols\":\"'s ʌ mə\",\"Chinese\":\"夏天\"},{\"English\":\"autumn\",\"PhoneticSymbols\":\"' ɔ ː təm\",\"Chinese\":\"秋天\"},{\"English\":\"winter\",\"PhoneticSymbols\":\"'w ɪ ntə\",\"Chinese\":\"冬天\"},{\"English\":\"warm\",\"PhoneticSymbols\":\"w ɔ :m\",\"Chinese\":\"暖和的，温暖的\"},{\"English\":\"hot\",\"PhoneticSymbols\":\"h ɒ t\",\"Chinese\":\"热的\"},{\"English\":\"cool\",\"PhoneticSymbols\":\"ku ː l\",\"Chinese\":\"凉快的\"},{\"English\":\"cold\",\"PhoneticSymbols\":\"kə ʊ ld\",\"Chinese\":\"冷的\"},{\"English\":\"weather\",\"PhoneticSymbols\":\"'weðə\",\"Chinese\":\"天气\"},{\"English\":\"like\",\"PhoneticSymbols\":\"la ɪ k\",\"Chinese\":\"如同，像\"},{\"English\":\"London\",\"PhoneticSymbols\":\"'l ʌ ndən\",\"Chinese\":\"伦敦\"},{\"English\":\"basketbal l\",\"PhoneticSymbols\":\"'b ɑ ː sk ɪ t,b ɔ ː l\",\"Chinese\":\"篮球\"},{\"English\":\"football\",\"PhoneticSymbols\":\"'f ʊ tb ɔ ː l\",\"Chinese\":\"足球\"},{\"English\":\"swimming\",\"PhoneticSymbols\":\"'sw ɪ m ɪ ŋ\",\"Chinese\":\"游泳\"},{\"English\":\"table tennis\",\"PhoneticSymbols\":\"'te ɪ bl   ,ten ɪ s\",\"Chinese\":\"乒乓球\"},{\"English\":\"sport\",\"PhoneticSymbols\":\"sp ɔ ː t\",\"Chinese\":\"运动\"},{\"English\":\"let\",\"PhoneticSymbols\":\"let\",\"Chinese\":\"让，使\"},{\"English\":\"us\",\"PhoneticSymbols\":\"ʌ s\",\"Chinese\":\"( 宾格 ) 我们\"},{\"English\":\"let’ s = let us\",\"PhoneticSymbols\":\"\",\"Chinese\":\"让我们\"},{\"English\":\"play\",\"PhoneticSymbols\":\"ple ɪ\",\"Chinese\":\"参加（体育运动或球赛），玩耍\"},{\"English\":\"after\",\"PhoneticSymbols\":\"' ɑ ː ftə\",\"Chinese\":\"在 … 后\"},{\"English\":\"school\",\"PhoneticSymbols\":\"sku ː l\",\"Chinese\":\"学校\"},{\"English\":\"idea\",\"PhoneticSymbols\":\"a ɪ 'd ɪ ə\",\"Chinese\":\"想法，主意\"}]},{\"Name\":\"Module 1\",\"Words\":[{\"English\":\"Chinese\",\"PhoneticSymbols\":\",t ʃ a ɪ 'ni:z\",\"Chinese\":\"n. 中国人；汉语 adj. 中国的；中国人的\"},{\"English\":\"from\",\"PhoneticSymbols\":\"fr ɒ m; frəm\",\"Chinese\":\"prep . 从 … 来，来自\"},{\"English\":\"where\",\"PhoneticSymbols\":\"weə\",\"Chinese\":\"adv . 在哪里，去哪里\"},{\"English\":\"year\",\"PhoneticSymbols\":\"j ɜ ː , j ɪ ə\",\"Chinese\":\"n. 年龄；年\"},{\"English\":\"about\",\"PhoneticSymbols\":\"ə'ba ʊ t\",\"Chinese\":\"prep 大约\"},{\"English\":\"What about\",\"PhoneticSymbols\":\"\",\"Chinese\":\"怎么样\"},{\"English\":\"Ms\",\"PhoneticSymbols\":\"m ɪ z\",\"Chinese\":\"女士\"},{\"English\":\"America\",\"PhoneticSymbols\":\"ə'mer ɪ kə\",\"Chinese\":\"美国；美洲\"},{\"English\":\"not\",\"PhoneticSymbols\":\"n ɒ t\",\"Chinese\":\"不，不是，没有\"},{\"English\":\"England\",\"PhoneticSymbols\":\"' ɪ ŋ glənd\",\"Chinese\":\"英格兰\"},{\"English\":\"hi\",\"PhoneticSymbols\":\"ha ɪ\",\"Chinese\":\"嘿、喂\"},{\"English\":\"American\",\"PhoneticSymbols\":\"ə'mer ɪ kən\",\"Chinese\":\"n. 美国人；美洲人 adj. 美国的；美国人的；美洲的\"},{\"English\":\"our\",\"PhoneticSymbols\":\"a ʊ ə\",\"Chinese\":\"pron. 我们的\"},{\"English\":\"grade\",\"PhoneticSymbols\":\"g re ɪ d\",\"Chinese\":\"n. 年级\"},{\"English\":\"he\",\"PhoneticSymbols\":\"hi ː\",\"Chinese\":\"pron. 他\"},{\"English\":\"China\",\"PhoneticSymbols\":\"'t ʃ a ɪ nə\",\"Chinese\":\"中国\"},{\"English\":\"everyone\",\"PhoneticSymbols\":\"'evr ɪ w ʌ n\",\"Chinese\":\"pron. 大家；每人\"},{\"English\":\"capital\",\"PhoneticSymbols\":\"'kæp ɪ t(ə)l\",\"Chinese\":\"n. 首都；省会\"},{\"English\":\"but\",\"PhoneticSymbols\":\"b ʌ t; bət\",\"Chinese\":\"conj. 但是，然而\"},{\"English\":\"very\",\"PhoneticSymbols\":\"'ver ɪ\",\"Chinese\":\"adv. 很；非常\"},{\"English\":\"big\",\"PhoneticSymbols\":\"b ɪ g\",\"Chinese\":\"adj. 大的\"},{\"English\":\"city\",\"PhoneticSymbols\":\"'s ɪ t ɪ\",\"Chinese\":\"n. 城市\"},{\"English\":\"small\",\"PhoneticSymbols\":\"sm ɔ :l\",\"Chinese\":\"adj. 小的\"},{\"English\":\"first\",\"PhoneticSymbols\":\"f ɜ ː st\",\"Chinese\":\"adj. 第一（位）的，首要的adv. 先；首先\"},{\"English\":\"first name\",\"PhoneticSymbols\":\"\",\"Chinese\":\"名字\"},{\"English\":\"last\",\"PhoneticSymbols\":\"l ɑ: st\",\"Chinese\":\"adj . 最后的；最末的\"},{\"English\":\"last name\",\"PhoneticSymbols\":\"\",\"Chinese\":\"姓\"},{\"English\":\"all\",\"PhoneticSymbols\":\"ɔ :l\",\"Chinese\":\"pron. 每个；全体\"}]},{\"Name\":\"Module 2\",\"Words\":[{\"English\":\"aunt\",\"PhoneticSymbols\":\"ɑ :nt, ænt\",\"Chinese\":\"n. 姨母；伯母；婶母；舅母；姑母\"},{\"English\":\"brother\",\"PhoneticSymbols\":\"'br ʌ ðə\",\"Chinese\":\"n . 兄弟\"},{\"English\":\"cousin\",\"PhoneticSymbols\":\"'k ʌ zən\",\"Chinese\":\"n. 堂兄弟；表兄弟；堂姐妹；表姐妹\"},{\"English\":\"daughter\",\"PhoneticSymbols\":\"'d ɔ :tə\",\"Chinese\":\"n. 女儿\"},{\"English\":\"family\",\"PhoneticSymbols\":\"'fæm ɪ l ɪ ; -m(ə)l-\",\"Chinese\":\"n. 家，家庭\"},{\"English\":\"father\",\"PhoneticSymbols\":\"'f ɑ :ðə\",\"Chinese\":\"n. 父亲 ， 爸爸\"},{\"English\":\"grandfather\",\"PhoneticSymbols\":\"' g  rænd,f ɑ: ðə\",\"Chinese\":\"n. （外）祖父\"},{\"English\":\"grandmother\",\"PhoneticSymbols\":\"' g  rænd,m ʌ ðə\",\"Chinese\":\"n. （外）祖母\"},{\"English\":\"grandparent\",\"PhoneticSymbols\":\"' g  rænd,peərənt\",\"Chinese\":\"n （外）祖父母\"},{\"English\":\"mother\",\"PhoneticSymbols\":\"'m ʌ ðə\",\"Chinese\":\"n. 母亲，妈妈\"},{\"English\":\"parent\",\"PhoneticSymbols\":\"'peərənt\",\"Chinese\":\"n. 母亲，父亲\"},{\"English\":\"sister\",\"PhoneticSymbols\":\"'s ɪ stə\",\"Chinese\":\"n.  姐；妹\"},{\"English\":\"son\",\"PhoneticSymbols\":\"s ʌ n\",\"Chinese\":\"n. 儿子\"},{\"English\":\"uncle\",\"PhoneticSymbols\":\"' ʌ ŋkl\",\"Chinese\":\"n. 叔叔；伯伯；舅舅；姑父；姨夫\"},{\"English\":\"photo\",\"PhoneticSymbols\":\"'fə ʊ tə ʊ\",\"Chinese\":\"n. 照片；相片\"},{\"English\":\"these\",\"PhoneticSymbols\":\"ði:z\",\"Chinese\":\"pron. 这些\"},{\"English\":\"they\",\"PhoneticSymbols\":\"ðe ɪ\",\"Chinese\":\"pron . 他们，她们吗，它们\"},{\"English\":\"mum\",\"PhoneticSymbols\":\"m ʌ m\",\"Chinese\":\"n. 妈妈\"},{\"English\":\"left\",\"PhoneticSymbols\":\"left\",\"Chinese\":\"n . 左边   左侧 adj. 左边的；左侧的\"},{\"English\":\"on the left\",\"PhoneticSymbols\":\"\",\"Chinese\":\"在左边，在左侧\"},{\"English\":\"dad\",\"PhoneticSymbols\":\"dæd\",\"Chinese\":\"n . 爸爸\"},{\"English\":\"right\",\"PhoneticSymbols\":\"ra ɪ t\",\"Chinese\":\"n. 右边，右侧   adj. 右边的，右侧的\"},{\"English\":\"on the r ight\",\"PhoneticSymbols\":\"\",\"Chinese\":\"在右边；在右侧\"},{\"English\":\"who\",\"PhoneticSymbols\":\"hu ː ; h ʊ\",\"Chinese\":\"pron. 谁\"},{\"English\":\"woman\",\"PhoneticSymbols\":\"'w ʊ mən\",\"Chinese\":\"(pl.    'w ɪ m ɪ n ) n.  成年女子；妇女\"},{\"English\":\"women\",\"PhoneticSymbols\":\"\",\"Chinese\":\"女子(复数)\"},{\"English\":\"next\",\"PhoneticSymbols\":\"nekst\",\"Chinese\":\"adj. 紧挨着，紧靠着 adv . 紧接下来地，下一步\"},{\"English\":\"next to\",\"PhoneticSymbols\":\"\",\"Chinese\":\"在 … 旁边，紧挨着\"},{\"English\":\"husband\",\"PhoneticSymbols\":\"'h ʌ zbənd\",\"Chinese\":\"n . 丈夫\"},{\"English\":\"front\",\"PhoneticSymbols\":\"fr ʌ nt\",\"Chinese\":\"n  . 前面；正面\"},{\"English\":\"in front of\",\"PhoneticSymbols\":\"\",\"Chinese\":\"在 … 前面\"},{\"English\":\"those\",\"PhoneticSymbols\":\"ðə ʊ z\",\"Chinese\":\"pron. 这些\"},{\"English\":\"bus\",\"PhoneticSymbols\":\"b ʌ s\",\"Chinese\":\"n. 公共汽车\"},{\"English\":\"station\",\"PhoneticSymbols\":\"'ste ɪʃ (ə)n\",\"Chinese\":\"n. 站；车站\"},{\"English\":\"hospital\",\"PhoneticSymbols\":\"'h ɒ sp ɪ t(ə)l\",\"Chinese\":\"n. 医院\"},{\"English\":\"hotel\",\"PhoneticSymbols\":\"hə ʊ 'tel\",\"Chinese\":\"n. 饭店；宾馆\"},{\"English\":\"police\",\"PhoneticSymbols\":\"pə'li:s\",\"Chinese\":\"n. 警察\"},{\"English\":\"theatre\",\"PhoneticSymbols\":\"'θ ɪ ətə\",\"Chinese\":\"n .   剧院\"},{\"English\":\"actor\",\"PhoneticSymbols\":\"'æktə\",\"Chinese\":\"n. （男）演员\"},{\"English\":\"driver\",\"PhoneticSymbols\":\"'dra ɪ və\",\"Chinese\":\"n. 司机，驾驶员\"},{\"English\":\"manager\",\"PhoneticSymbols\":\"'mæn ɪ d ʒ ə\",\"Chinese\":\"n. 经理\"},{\"English\":\"nurse\",\"PhoneticSymbols\":\"n ɜ ː s\",\"Chinese\":\"n. 护士\"},{\"English\":\"policeman\",\"PhoneticSymbols\":\"pə'li:smən\",\"Chinese\":\"n. 男警察\"},{\"English\":\"we\",\"PhoneticSymbols\":\"wi ː\",\"Chinese\":\"pron. 我们\"},{\"English\":\"an\",\"PhoneticSymbols\":\"æn; ən\",\"Chinese\":\"a rt. 一个\"},{\"English\":\"job\",\"PhoneticSymbols\":\"d ʒ ɒ b\",\"Chinese\":\"n. 工作\"},{\"English\":\"at\",\"PhoneticSymbols\":\"æt; ət\",\"Chinese\":\"prep. 在 … ；在 … 里\"},{\"English\":\"same\",\"PhoneticSymbols\":\"se ɪ m\",\"Chinese\":\"adj. 相同的，同一的\"},{\"English\":\"doctor\",\"PhoneticSymbols\":\"'d ɒ ktə\",\"Chinese\":\"n. 医生\"},{\"English\":\"farm\",\"PhoneticSymbols\":\"f ɑ :m\",\"Chinese\":\"n. 农场\"},{\"English\":\"worker\",\"PhoneticSymbols\":\"'w ɜ ː kə\",\"Chinese\":\"n. 工人\"},{\"English\":\"man\",\"PhoneticSymbols\":\"mæn\",\"Chinese\":\"n. 男人\"},{\"English\":\"shop\",\"PhoneticSymbols\":\"ʃ ɒ p\",\"Chinese\":\"n. 商店\"},{\"English\":\"its\",\"PhoneticSymbols\":\"ɪ ts\",\"Chinese\":\"pron. 它的\"},{\"English\":\"their\",\"PhoneticSymbols\":\"ðeə\",\"Chinese\":\"pron. 他们的，她们的，它们的\"}]},{\"Name\":\"Module 3\",\"Words\":[{\"English\":\"computer\",\"PhoneticSymbols\":\"kəm'pju:tə\",\"Chinese\":\"n. 计算机；电脑\"},{\"English\":\"furniture\",\"PhoneticSymbols\":\"'f ɜ ː n ɪ t ʃ ə\",\"Chinese\":\"n. 家具\"},{\"English\":\"map\",\"PhoneticSymbols\":\"mæp\",\"Chinese\":\"n. 地图\"},{\"English\":\"picture\",\"PhoneticSymbols\":\"'p ɪ kt ʃ ə\",\"Chinese\":\"n. 图片；相片\"},{\"English\":\"television\",\"PhoneticSymbols\":\"'tel ɪ v ɪʒ (ə)n\",\"Chinese\":\"n. 电视；电视机\"},{\"English\":\"wall\",\"PhoneticSymbols\":\"w ɔ :l\",\"Chinese\":\"n. 墙\"},{\"English\":\"thirty\",\"PhoneticSymbols\":\"'θ ɜ ː t ɪ\",\"Chinese\":\"num. 三十\"},{\"English\":\"forty\",\"PhoneticSymbols\":\"'f ɔ ː t ɪ\",\"Chinese\":\"num. 四十\"},{\"English\":\"fifty\",\"PhoneticSymbols\":\"'f ɪ ft ɪ\",\"Chinese\":\"num. 五十\"},{\"English\":\"sixty\",\"PhoneticSymbols\":\"'s ɪ kst ɪ\",\"Chinese\":\"num. 六十\"},{\"English\":\"seventy\",\"PhoneticSymbols\":\"'sev(ə)nt ɪ\",\"Chinese\":\"num. 七十\"},{\"English\":\"eighty\",\"PhoneticSymbols\":\"'e ɪ t ɪ\",\"Chinese\":\"num. 八十\"},{\"English\":\"ninety\",\"PhoneticSymbols\":\"'na ɪ nt ɪ\",\"Chinese\":\"num . 九十\"},{\"English\":\"really\",\"PhoneticSymbols\":\"'r ɪ əl ɪ\",\"Chinese\":\"num . 真正地，非常，很\"},{\"English\":\"many\",\"PhoneticSymbols\":\"'men ɪ\",\"Chinese\":\"adj. 许多 ， 很多\"},{\"English\":\"how many\",\"PhoneticSymbols\":\"\",\"Chinese\":\"多少\"},{\"English\":\"there\",\"PhoneticSymbols\":\"ðeə; ðə\",\"Chinese\":\"pron.( 用于引导句子的主语 )\"},{\"English\":\"lot\",\"PhoneticSymbols\":\"l ɒ t\",\"Chinese\":\"n. 大量；许多\"},{\"English\":\"a lot of\",\"PhoneticSymbols\":\"\",\"Chinese\":\"大量；许多\"},{\"English\":\"oh\",\"PhoneticSymbols\":\"ə ʊ\",\"Chinese\":\"int. 唉，嗷\"},{\"English\":\"any\",\"PhoneticSymbols\":\"'en ɪ\",\"Chinese\":\"adj. 任何一个；一些\"},{\"English\":\"world\",\"PhoneticSymbols\":\"w ɜ ː ld\",\"Chinese\":\"n. 世界\"},{\"English\":\"tree\",\"PhoneticSymbols\":\"tri:\",\"Chinese\":\"n. 树（木）\"},{\"English\":\"building\",\"PhoneticSymbols\":\"'b ɪ ld ɪ ŋ\",\"Chinese\":\"n. 建筑物\"},{\"English\":\"hall\",\"PhoneticSymbols\":\"h ɔ :l\",\"Chinese\":\"n. 大厅；会堂\"},{\"English\":\"dining hall\",\"PhoneticSymbols\":\"\",\"Chinese\":\"n. 饭厅   ，饭堂\"},{\"English\":\"gate\",\"PhoneticSymbols\":\"ge ɪ t\",\"Chinese\":\"n. 大门\"},{\"English\":\"library\",\"PhoneticSymbols\":\"'la ɪ brər ɪ ; -br ɪ\",\"Chinese\":\"n. 图书馆\"},{\"English\":\"office\",\"PhoneticSymbols\":\"' ɒ f ɪ s\",\"Chinese\":\"n. 办公室\"},{\"English\":\"playground\",\"PhoneticSymbols\":\"'ple ɪ gra ʊ nd\",\"Chinese\":\"n. 操场\"},{\"English\":\"science\",\"PhoneticSymbols\":\"'sa ɪ əns\",\"Chinese\":\"n. 科学；科学课\"},{\"English\":\"lab\",\"PhoneticSymbols\":\"læb\",\"Chinese\":\"n. 实验室\"},{\"English\":\"behind\",\"PhoneticSymbols\":\"b ɪ 'ha ɪ nd\",\"Chinese\":\"prep. 在 … 后面\"},{\"English\":\"between\",\"PhoneticSymbols\":\"b ɪ 'twi ː n\",\"Chinese\":\"prep. 在 … 之间\"},{\"English\":\"middle\",\"PhoneticSymbols\":\"'m ɪ d(ə)l\",\"Chinese\":\"n. 中间；   之间\"},{\"English\":\"near\",\"PhoneticSymbols\":\"n ɪ ə\",\"Chinese\":\"prep. 靠近；接近\"},{\"English\":\"with\",\"PhoneticSymbols\":\"w ɪ ð\",\"Chinese\":\"prep. 与 … 在一起；和；具有（品质、特征）\"},{\"English\":\"for\",\"PhoneticSymbols\":\"f ɔ ː ; fə\",\"Chinese\":\"prep. 为，   为了\"},{\"English\":\"room\",\"PhoneticSymbols\":\"ru ː m; r ʊ m\",\"Chinese\":\"n. 房间；室；屋子\"}]},{\"Name\":\"Module 4\",\"Words\":[{\"English\":\"food\",\"PhoneticSymbols\":\"fu:d\",\"Chinese\":\"n. 食物\"},{\"English\":\"drink\",\"PhoneticSymbols\":\"dr ɪ ŋk\",\"Chinese\":\"n. 饮料、饮品\"},{\"English\":\"candy\",\"PhoneticSymbols\":\"'kænd ɪ\",\"Chinese\":\"n. 糖果\"},{\"English\":\"fruit\",\"PhoneticSymbols\":\"fru:t\",\"Chinese\":\"n. 水果\"},{\"English\":\"meat\",\"PhoneticSymbols\":\"mi:t\",\"Chinese\":\"n. 肉\"},{\"English\":\"vegetable\",\"PhoneticSymbols\":\"'ved ʒ təbl\",\"Chinese\":\"n.  蔬菜\"},{\"English\":\"apple\",\"PhoneticSymbols\":\"'æpl\",\"Chinese\":\"n. 苹果\"},{\"English\":\"bean\",\"PhoneticSymbols\":\"bi:n\",\"Chinese\":\"n. 豆\"},{\"English\":\"beef\",\"PhoneticSymbols\":\"bi:f\",\"Chinese\":\"n. 牛肉\"},{\"English\":\"carrot\",\"PhoneticSymbols\":\"'kærət\",\"Chinese\":\"n. 胡萝卜\"},{\"English\":\"chicken\",\"PhoneticSymbols\":\"'t ʃɪ k ɪ n\",\"Chinese\":\"n. 鸡肉\"},{\"English\":\"chocolate\",\"PhoneticSymbols\":\"'t ʃ ɒ k(ə)lət\",\"Chinese\":\"n. 巧克力\"},{\"English\":\"coffee\",\"PhoneticSymbols\":\"'k ɒ f ɪ\",\"Chinese\":\"n. 咖啡\"},{\"English\":\"cola\",\"PhoneticSymbols\":\"'kə ʊ lə\",\"Chinese\":\"n. 可乐\"},{\"English\":\"juice\",\"PhoneticSymbols\":\"d ʒ u:s\",\"Chinese\":\"n. 果汁\"},{\"English\":\"milk\",\"PhoneticSymbols\":\"m ɪ lk\",\"Chinese\":\"n. 牛奶\"},{\"English\":\"potato\",\"PhoneticSymbols\":\"pə'te ɪ tə ʊ\",\"Chinese\":\"n. 马铃薯，土豆\"},{\"English\":\"tea\",\"PhoneticSymbols\":\"ti:\",\"Chinese\":\"n. 茶\"},{\"English\":\"tomato\",\"PhoneticSymbols\":\"tə'm ɑ ː tə ʊ\",\"Chinese\":\"n. 西红柿，番茄\"},{\"English\":\"water\",\"PhoneticSymbols\":\"'w ɔ ː tə\",\"Chinese\":\"n. 水\"},{\"English\":\"shop\",\"PhoneticSymbols\":\"ʃ ɒ p\",\"Chinese\":\"v. 逛商店；购物\"},{\"English\":\"go shopping\",\"PhoneticSymbols\":\"\",\"Chinese\":\"去买东西，去购物\"},{\"English\":\"have\",\"PhoneticSymbols\":\"hæv\",\"Chinese\":\"v.   aux （助动词）有；吃，喝\"},{\"English\":\"get\",\"PhoneticSymbols\":\"g et\",\"Chinese\":\"v. 得到\"},{\"English\":\"have got\",\"PhoneticSymbols\":\"\",\"Chinese\":\"有；拥有\"},{\"English\":\"some\",\"PhoneticSymbols\":\"s ʌ m; s(ə)m\",\"Chinese\":\"adj. 若干，一些；少量的    一些，某些\"},{\"English\":\"much\",\"PhoneticSymbols\":\"m ʌ t ʃ\",\"Chinese\":\"adj. 许多的，大量的\"},{\"English\":\"too much\",\"PhoneticSymbols\":\"\",\"Chinese\":\"太多\"},{\"English\":\"kind\",\"PhoneticSymbols\":\"ka ɪ nd\",\"Chinese\":\"n. 种类\"},{\"English\":\"lots of\",\"PhoneticSymbols\":\"\",\"Chinese\":\"大量；许多\"},{\"English\":\"so\",\"PhoneticSymbols\":\"sə ʊ\",\"Chinese\":\"conj. 因此；所以\"},{\"English\":\"how about\",\"PhoneticSymbols\":\"\",\"Chinese\":\"（征求意见）   … 好么？   … 行吗？\"},{\"English\":\"has\",\"PhoneticSymbols\":\"hæz\",\"Chinese\":\"（ have 的第三人称单数现在式）\"},{\"English\":\"bad\",\"PhoneticSymbols\":\"bæd\",\"Chinese\":\"adj. 坏的；不好的\"},{\"English\":\"healthy\",\"PhoneticSymbols\":\"'helθ ɪ\",\"Chinese\":\"adj. 健康的\"},{\"English\":\"delicious\",\"PhoneticSymbols\":\"d ɪ 'l ɪʃ əs\",\"Chinese\":\"adj. 美味的\"},{\"English\":\"bread\",\"PhoneticSymbols\":\"bred\",\"Chinese\":\"n. 面包\"},{\"English\":\"fish\",\"PhoneticSymbols\":\"f ɪʃ\",\"Chinese\":\"n. 鱼肉；鱼\"},{\"English\":\"hamburger\",\"PhoneticSymbols\":\"'hæmb ɜ ː gə\",\"Chinese\":\"n. 汉堡包\"},{\"English\":\"ice cream\",\"PhoneticSymbols\":\",a ɪ s'kri:m\",\"Chinese\":\"n. 冰激凌\"},{\"English\":\"noodle\",\"PhoneticSymbols\":\"'nu ː d(ə)l\",\"Chinese\":\"n. 面条\"},{\"English\":\"rice\",\"PhoneticSymbols\":\"ra ɪ s\",\"Chinese\":\"n. 米；米饭\"},{\"English\":\"sugar\",\"PhoneticSymbols\":\"' ʃʊ gə\",\"Chinese\":\"n. 糖\"},{\"English\":\"children\",\"PhoneticSymbols\":\"'t ʃɪ ldrən\",\"Chinese\":\"n. （ 14 岁以下的）小孩，儿童\"},{\"English\":\"be good for\",\"PhoneticSymbols\":\"\",\"Chinese\":\"对 … 有帮助\"},{\"English\":\"sweet\",\"PhoneticSymbols\":\"swi ː t\",\"Chinese\":\"ad j. 甜的\"},{\"English\":\"be bad for\",\"PhoneticSymbols\":\"\",\"Chinese\":\"对 … 有害的\"},{\"English\":\"right\",\"PhoneticSymbols\":\"ra ɪ t\",\"Chinese\":\"adj. 正确的，对的\"},{\"English\":\"egg\",\"PhoneticSymbols\":\"eg\",\"Chinese\":\"n. 蛋，鸡蛋\"},{\"English\":\"eye\",\"PhoneticSymbols\":\"a ɪ\",\"Chinese\":\"n. 眼睛\"},{\"English\":\"cheese\",\"PhoneticSymbols\":\"t ʃ i:z\",\"Chinese\":\"n. 奶酪\"},{\"English\":\"tooth\",\"PhoneticSymbols\":\"tu:θ\",\"Chinese\":\"n. 牙齿\"},{\"English\":\"teeth\",\"PhoneticSymbols\":\"\",\"Chinese\":\"牙齿(复数)\"},{\"English\":\"bit\",\"PhoneticSymbols\":\"b ɪ t\",\"Chinese\":\"n. 一点；少许\"},{\"English\":\"a bit\",\"PhoneticSymbols\":\"\",\"Chinese\":\"稍微；有点儿\"},{\"English\":\"tired\",\"PhoneticSymbols\":\"ta ɪ əd\",\"Chinese\":\"adj. 劳累的\"},{\"English\":\"soup\",\"PhoneticSymbols\":\"su:p\",\"Chinese\":\"n. 汤\"},{\"English\":\"important\",\"PhoneticSymbols\":\"ɪ m'p ɔ ː t(ə)nt\",\"Chinese\":\"adj. 重要的\"},{\"English\":\"remember\",\"PhoneticSymbols\":\"r ɪ 'membə\",\"Chinese\":\"v. 记住；记起\"},{\"English\":\"well\",\"PhoneticSymbols\":\"wel\",\"Chinese\":\"adv. 好地\"},{\"English\":\"stay\",\"PhoneticSymbols\":\"ste ɪ\",\"Chinese\":\"v. 保持；停留\"},{\"English\":\"fat\",\"PhoneticSymbols\":\"fæt\",\"Chinese\":\"adj. 肥胖的\"},{\"English\":\"get fat\",\"PhoneticSymbols\":\"\",\"Chinese\":\"发胖\"},{\"English\":\"or\",\"PhoneticSymbols\":\"ɔ ː\",\"Chinese\":\"conj. 或者\"},{\"English\":\"breakfast\",\"PhoneticSymbols\":\"'brekfəst\",\"Chinese\":\"n. 早饭\"},{\"English\":\"lunch\",\"PhoneticSymbols\":\"l ʌ nt ʃ\",\"Chinese\":\"n. 午饭\"},{\"English\":\"home\",\"PhoneticSymbols\":\"hə ʊ m\",\"Chinese\":\"n. 家；家庭\"},{\"English\":\"dinner\",\"PhoneticSymbols\":\"'d ɪ nə\",\"Chinese\":\"n. 晚饭；正餐\"},{\"English\":\"banana\",\"PhoneticSymbols\":\"bə'n ɑ ː nə\",\"Chinese\":\"n. 香蕉\"},{\"English\":\"buy\",\"PhoneticSymbols\":\"ba ɪ\",\"Chinese\":\"v. 买\"}]},{\"Name\":\"Module 5\",\"Words\":[{\"English\":\"half\",\"PhoneticSymbols\":\"h ɑ ː f\",\"Chinese\":\"一半\"},{\"English\":\"past\",\"PhoneticSymbols\":\"p ɑ ː st\",\"Chinese\":\"晚于，过（几点）\"},{\"English\":\"o’clock\",\"PhoneticSymbols\":\"ə'kl ɒ k\",\"Chinese\":\"… 点钟\"},{\"English\":\"to\",\"PhoneticSymbols\":\"tu ː\",\"Chinese\":\"（距整点时间）差 ……\"},{\"English\":\"art\",\"PhoneticSymbols\":\"ɑ :t\",\"Chinese\":\"美术；艺术\"},{\"English\":\"geography\",\"PhoneticSymbols\":\"d ʒɪ ' ɒ grəf ɪ\",\"Chinese\":\"地理\"},{\"English\":\"history\",\"PhoneticSymbols\":\"'h ɪ st(ə)r ɪ\",\"Chinese\":\"历史\"},{\"English\":\"IT\",\"PhoneticSymbols\":\", a ɪ ' ti ː\",\"Chinese\":\"信息技术\"},{\"English\":\"maths\",\"PhoneticSymbols\":\"mæθs\",\"Chinese\":\"数学\"},{\"English\":\"PE\",\"PhoneticSymbols\":\", p   i ː ' i ː\",\"Chinese\":\"体育；体育课\"},{\"English\":\"lesson\",\"PhoneticSymbols\":\"'lesən\",\"Chinese\":\"（一节课）\"},{\"English\":\"then\",\"PhoneticSymbols\":\"ðen\",\"Chinese\":\"接着，然后\"},{\"English\":\"like\",\"PhoneticSymbols\":\"la ɪ k\",\"Chinese\":\"喜欢；喜爱\"},{\"English\":\"difficult\",\"PhoneticSymbols\":\"'d ɪ f ɪ k(ə)lt\",\"Chinese\":\"困难的，难懂的\"},{\"English\":\"love\",\"PhoneticSymbols\":\"l ʌ v\",\"Chinese\":\"爱；热爱\"},{\"English\":\"subject\",\"PhoneticSymbols\":\"'s ʌ bd ʒɪ kt\",\"Chinese\":\"科目\"},{\"English\":\"because\",\"PhoneticSymbols\":\"b ɪ 'k ɒ z\",\"Chinese\":\"因为\"},{\"English\":\"interesting\",\"PhoneticSymbols\":\"' ɪ ntrəst ɪ ŋ\",\"Chinese\":\"有趣的\"},{\"English\":\"talk\",\"PhoneticSymbols\":\"t ɔ :k\",\"Chinese\":\"谈话，说话\"},{\"English\":\"begin\",\"PhoneticSymbols\":\"b ɪ 'g ɪ n\",\"Chinese\":\"开始\"},{\"English\":\"when\",\"PhoneticSymbols\":\"wen\",\"Chinese\":\"什么时候，何时\"},{\"English\":\"go to school\",\"PhoneticSymbols\":\"\",\"Chinese\":\"上学\"},{\"English\":\"week day\",\"PhoneticSymbols\":\"'wi ː kde ɪ\",\"Chinese\":\"工作日\"},{\"English\":\"get up\",\"PhoneticSymbols\":\"\",\"Chinese\":\"起床\"},{\"English\":\"have b reakfast\",\"PhoneticSymbols\":\"\",\"Chinese\":\"吃早餐\"},{\"English\":\"house\",\"PhoneticSymbols\":\"ha ʊ s\",\"Chinese\":\"房子；住宅\"},{\"English\":\"start\",\"PhoneticSymbols\":\"st ɑ :t\",\"Chinese\":\"开始\"},{\"English\":\"work\",\"PhoneticSymbols\":\"w ɜ ː k\",\"Chinese\":\"学习；工作\"},{\"English\":\"break\",\"PhoneticSymbols\":\"bre ɪ k\",\"Chinese\":\"（课间）休息\"},{\"English\":\"have lunch\",\"PhoneticSymbols\":\"\",\"Chinese\":\"吃饭；吃晚餐\"},{\"English\":\"go home\",\"PhoneticSymbols\":\"\",\"Chinese\":\"回家\"},{\"English\":\"evening\",\"PhoneticSymbols\":\"' ɪ ː v(ə)n ɪ ŋ\",\"Chinese\":\"晚上\"},{\"English\":\"watch\",\"PhoneticSymbols\":\"w ɒ t ʃ\",\"Chinese\":\"看，观看\"},{\"English\":\"have dinner\",\"PhoneticSymbols\":\"\",\"Chinese\":\"吃饭；吃晚餐\"},{\"English\":\"do\",\"PhoneticSymbols\":\"du ː\",\"Chinese\":\"做；干\"},{\"English\":\"homework\",\"PhoneticSymbols\":\"'hə ʊ mw ɜ ː k\",\"Chinese\":\"家庭作业\"},{\"English\":\"bed\",\"PhoneticSymbols\":\"bed\",\"Chinese\":\"床\"},{\"English\":\"go to bed\",\"PhoneticSymbols\":\"\",\"Chinese\":\"上床睡觉\"},{\"English\":\"sleep\",\"PhoneticSymbols\":\"sli:p\",\"Chinese\":\"n. 睡觉 v. 睡觉\"},{\"English\":\"go to sleep\",\"PhoneticSymbols\":\"\",\"Chinese\":\"开始睡觉；入睡\"},{\"English\":\"park\",\"PhoneticSymbols\":\"p ɑ :k\",\"Chinese\":\"公园\"},{\"English\":\"busy\",\"PhoneticSymbols\":\"'b ɪ z ɪ\",\"Chinese\":\"忙的   繁忙的\"},{\"English\":\"wash\",\"PhoneticSymbols\":\"w ɒ ʃ\",\"Chinese\":\"洗；洗涤\"},{\"English\":\"face\",\"PhoneticSymbols\":\"fe ɪ s\",\"Chinese\":\"脸\"},{\"English\":\"minute\",\"PhoneticSymbols\":\"'m ɪ n ɪ t\",\"Chinese\":\"分钟\"}]},{\"Name\":\"Revision module A\",\"Words\":[{\"English\":\"grandma\",\"PhoneticSymbols\":\"' ɡ rændm ɑ :\",\"Chinese\":\"（外）祖母\"},{\"English\":\"grandpa\",\"PhoneticSymbols\":\"' ɡ rændp ɑ :\",\"Chinese\":\"（外）祖父\"},{\"English\":\"him\",\"PhoneticSymbols\":\"h ɪ m\",\"Chinese\":\"( 宾格 ) 他\"},{\"English\":\"want\",\"PhoneticSymbols\":\"w ɒ nt\",\"Chinese\":\"想要；需要\"},{\"English\":\"make\",\"PhoneticSymbols\":\"me ɪ k\",\"Chinese\":\"做   、制作\"},{\"English\":\"kitchen\",\"PhoneticSymbols\":\"'k ɪ t ʃɪ n; -t ʃ ən\",\"Chinese\":\"厨房\"},{\"English\":\"farmer\",\"PhoneticSymbols\":\"'f ɑ :mə\",\"Chinese\":\"农民\"},{\"English\":\"week\",\"PhoneticSymbols\":\"wi:k\",\"Chinese\":\"星期\"},{\"English\":\"read\",\"PhoneticSymbols\":\"ri:d\",\"Chinese\":\"阅读；看懂\"},{\"English\":\"story\",\"PhoneticSymbols\":\"'st ɔ ː r ɪ\",\"Chinese\":\"故事\"},{\"English\":\"live\",\"PhoneticSymbols\":\"l ɪ v\",\"Chinese\":\"生活；住\"}]},{\"Name\":\"Module 6\",\"Words\":[{\"English\":\"bear\",\"PhoneticSymbols\":\"beə\",\"Chinese\":\"熊\"},{\"English\":\"elephant\",\"PhoneticSymbols\":\"'el ɪ f(ə)nt\",\"Chinese\":\"大象\"},{\"English\":\"giraffe\",\"PhoneticSymbols\":\"d ʒ ɪ 'r ɑ :f\",\"Chinese\":\"长颈鹿\"},{\"English\":\"lion\",\"PhoneticSymbols\":\"'la ɪ ən\",\"Chinese\":\"狮子\"},{\"English\":\"monkey\",\"PhoneticSymbols\":\"'m ʌ ŋk ɪ\",\"Chinese\":\"猴子\"},{\"English\":\"panda\",\"PhoneticSymbols\":\"'pændə\",\"Chinese\":\"熊猫\"},{\"English\":\"tiger\",\"PhoneticSymbols\":\"'ta ɪ gə\",\"Chinese\":\"老虎\"},{\"English\":\"zebra\",\"PhoneticSymbols\":\"'zi:brə; 'zebrə\",\"Chinese\":\"斑马\"},{\"English\":\"zoo\",\"PhoneticSymbols\":\"zu:\",\"Chinese\":\"动物园\"},{\"English\":\"guide\",\"PhoneticSymbols\":\"ga ɪ d\",\"Chinese\":\"导游\"},{\"English\":\"animal\",\"PhoneticSymbols\":\"'æn ɪ ml\",\"Chinese\":\"动物\"},{\"English\":\"such\",\"PhoneticSymbols\":\"s ʌ t ʃ\",\"Chinese\":\"这样的   如此的\"},{\"English\":\"as\",\"PhoneticSymbols\":\"æz\",\"Chinese\":\"像 … 一样\"},{\"English\":\"such as\",\"PhoneticSymbols\":\"\",\"Chinese\":\"比如\"},{\"English\":\"come\",\"PhoneticSymbols\":\"k ʌ m\",\"Chinese\":\"来\"},{\"English\":\"come from\",\"PhoneticSymbols\":\"\",\"Chinese\":\"来自\"},{\"English\":\"different\",\"PhoneticSymbols\":\"'d ɪ frənt\",\"Chinese\":\"不同的\"},{\"English\":\"country\",\"PhoneticSymbols\":\"'k ʌ ntr ɪ\",\"Chinese\":\"国家\"},{\"English\":\"other\",\"PhoneticSymbols\":\"' ʌ ðə\",\"Chinese\":\"其他的\"},{\"English\":\"dangerous\",\"PhoneticSymbols\":\"'de ɪ nd ʒ ərəs\",\"Chinese\":\"危险的\"},{\"English\":\"ugh\",\"PhoneticSymbols\":\"ʊ g\",\"Chinese\":\"啊，哎呀\"},{\"English\":\"also\",\"PhoneticSymbols\":\"' ɔ ː lsə ʊ\",\"Chinese\":\"也、而且\"},{\"English\":\"plant\",\"PhoneticSymbols\":\"pl ɑ ː nt\",\"Chinese\":\"植物\"},{\"English\":\"look\",\"PhoneticSymbols\":\"l ʊ k\",\"Chinese\":\"看，瞧\"},{\"English\":\"look at\",\"PhoneticSymbols\":\"\",\"Chinese\":\"看\"},{\"English\":\"tall\",\"PhoneticSymbols\":\"t ɔ ː l\",\"Chinese\":\"高的\"},{\"English\":\"leave\",\"PhoneticSymbols\":\"li:v\",\"Chinese\":\"叶子\"},{\"English\":\"sure\",\"PhoneticSymbols\":\"ʃʊ ə\",\"Chinese\":\"的确、当然\"},{\"English\":\"bamboo\",\"PhoneticSymbols\":\"bæm'bu ː\",\"Chinese\":\"竹子\"},{\"English\":\"cute\",\"PhoneticSymbols\":\"kju:t\",\"Chinese\":\"可爱的\"},{\"English\":\"shall\",\"PhoneticSymbols\":\"ʃ æl;  ʃ el\",\"Chinese\":\"… 好吗？要不要 ……?\"},{\"English\":\"them\",\"PhoneticSymbols\":\"ðem; ðəm\",\"Chinese\":\"( 宾格 ) 他们、她们、它们\"},{\"English\":\"which\",\"PhoneticSymbols\":\"w ɪ t ʃ\",\"Chinese\":\"哪一个\"},{\"English\":\"over\",\"PhoneticSymbols\":\"'ə ʊ və\",\"Chinese\":\"在 …… 的上方\"},{\"English\":\"there\",\"PhoneticSymbols\":\"ðeə; ðə\",\"Chinese\":\"在那里、往那里\"},{\"English\":\"over there\",\"PhoneticSymbols\":\"\",\"Chinese\":\"在那边、在那里\"},{\"English\":\"funny\",\"PhoneticSymbols\":\"'f ʌ n ɪ\",\"Chinese\":\"有趣的\"},{\"English\":\"call\",\"PhoneticSymbols\":\"k ɔ :l\",\"Chinese\":\"… 叫做；称呼 … 为\"},{\"English\":\"Africa\",\"PhoneticSymbols\":\"'æfr ɪ kə)\",\"Chinese\":\"非洲\"},{\"English\":\"Asia\",\"PhoneticSymbols\":\"'e ɪʃ ə\",\"Chinese\":\"亚洲\"},{\"English\":\"Europe\",\"PhoneticSymbols\":\"'j ʊ ə rəp\",\"Chinese\":\"欧洲\"},{\"English\":\"little\",\"PhoneticSymbols\":\"'l ɪ tl\",\"Chinese\":\"极少量的\"},{\"English\":\"a little\",\"PhoneticSymbols\":\"\",\"Chinese\":\"少量\"},{\"English\":\"only\",\"PhoneticSymbols\":\"'ə ʊ nl ɪ\",\"Chinese\":\"仅仅、只\"},{\"English\":\"about\",\"PhoneticSymbols\":\"ə'ba ʊ t\",\"Chinese\":\"大约，大致\"},{\"English\":\"kilo\",\"PhoneticSymbols\":\"'ki ː lə ʊ\",\"Chinese\":\"千克、公斤\"},{\"English\":\"people\",\"PhoneticSymbols\":\"'pi ː pl\",\"Chinese\":\"人、人们\"},{\"English\":\"all over the world\",\"PhoneticSymbols\":\"\",\"Chinese\":\"全世界\"},{\"English\":\"Africa\",\"PhoneticSymbols\":\"'æfr ɪ kən\",\"Chinese\":\"非洲的，非洲人\"},{\"English\":\"as well as\",\"PhoneticSymbols\":\"\",\"Chinese\":\"并且 ， 还\"},{\"English\":\"grass\",\"PhoneticSymbols\":\"g r ɑ :s,  g ræs\",\"Chinese\":\"草\"},{\"English\":\"large\",\"PhoneticSymbols\":\"l ɑ :d ʒ\",\"Chinese\":\"大的、巨大的\"},{\"English\":\"usually\",\"PhoneticSymbols\":\"'ju: ʒ uəli\",\"Chinese\":\"通常\"},{\"English\":\"alone\",\"PhoneticSymbols\":\"ə'lə ʊ n\",\"Chinese\":\"独自地\"},{\"English\":\"be good at\",\"PhoneticSymbols\":\"\",\"Chinese\":\"擅长\"},{\"English\":\"strong\",\"PhoneticSymbols\":\"str ɒ ŋ\",\"Chinese\":\"强壮的、强大的；强烈的\"},{\"English\":\"catch\",\"PhoneticSymbols\":\"kæt ʃ\",\"Chinese\":\"抓住、接住\"},{\"English\":\"many kinds of\",\"PhoneticSymbols\":\"\",\"Chinese\":\"许多种类\"},{\"English\":\"even\",\"PhoneticSymbols\":\"'i:vən\",\"Chinese\":\"甚至\"}]},{\"Name\":\"Module 7\",\"Words\":[{\"English\":\"keyboard\",\"PhoneticSymbols\":\"'ki: , b ɔ :d\",\"Chinese\":\"键盘\"},{\"English\":\"mouse\",\"PhoneticSymbols\":\"ma ʊ s\",\"Chinese\":\"鼠标；老鼠\"},{\"English\":\"screen\",\"PhoneticSymbols\":\"skri:n\",\"Chinese\":\"屏幕\"},{\"English\":\"connect\",\"PhoneticSymbols\":\"kə'nekt\",\"Chinese\":\"连接\"},{\"English\":\"turn\",\"PhoneticSymbols\":\"t ɜ ː n\",\"Chinese\":\"转动\"},{\"English\":\"turn on\",\"PhoneticSymbols\":\"\",\"Chinese\":\"打开\"},{\"English\":\"learn\",\"PhoneticSymbols\":\"l ɜ ː n\",\"Chinese\":\"学；学习\"},{\"English\":\"document\",\"PhoneticSymbols\":\"'d ɒ kj ʊ mənt\",\"Chinese\":\"文件\"},{\"English\":\"click\",\"PhoneticSymbols\":\"kl ɪ k\",\"Chinese\":\"点击\"},{\"English\":\"use\",\"PhoneticSymbols\":\"ju ː z\",\"Chinese\":\"使用\"},{\"English\":\"save\",\"PhoneticSymbols\":\"se ɪ v\",\"Chinese\":\"保存；储存\"},{\"English\":\"box\",\"PhoneticSymbols\":\"b ɒ ks\",\"Chinese\":\"框；盒子\"},{\"English\":\"finally\",\"PhoneticSymbols\":\"'fa ɪ nəl ɪ\",\"Chinese\":\"最后\"},{\"English\":\"print\",\"PhoneticSymbols\":\"pr ɪ nt\",\"Chinese\":\"打印\"},{\"English\":\"paper\",\"PhoneticSymbols\":\"'pe ɪ pə\",\"Chinese\":\"纸\"},{\"English\":\"share\",\"PhoneticSymbols\":\"ʃ eə\",\"Chinese\":\"共用、分享\"},{\"English\":\"Australia\",\"PhoneticSymbols\":\"ɒ s'tre ɪ l ɪ ə\",\"Chinese\":\"澳大利亚\"},{\"English\":\"company\",\"PhoneticSymbols\":\"'k ʌ mpən ɪ\",\"Chinese\":\"公司；剧团\"},{\"English\":\"often\",\"PhoneticSymbols\":\"' ɒ fən\",\"Chinese\":\"经常\"},{\"English\":\"customer\",\"PhoneticSymbols\":\"'k ʌ stəmə\",\"Chinese\":\"顾客\"},{\"English\":\"internet\",\"PhoneticSymbols\":\"' ɪ nt ə n e t\",\"Chinese\":\"因特网\"},{\"English\":\"check\",\"PhoneticSymbols\":\"t ʃ ek\",\"Chinese\":\"检查、查看\"},{\"English\":\"train\",\"PhoneticSymbols\":\"tre ɪ n\",\"Chinese\":\"火车\"},{\"English\":\"travel\",\"PhoneticSymbols\":\"'trævl\",\"Chinese\":\"旅行\"},{\"English\":\"plan\",\"PhoneticSymbols\":\"plæn\",\"Chinese\":\"n . 计划v . 计划；打算\"},{\"English\":\"ticket\",\"PhoneticSymbols\":\"'t ɪ k ɪ t\",\"Chinese\":\"票\"},{\"English\":\"music\",\"PhoneticSymbols\":\"'mju ː z ɪ k\",\"Chinese\":\"音乐\"},{\"English\":\"movie\",\"PhoneticSymbols\":\"'mu ː v ɪ\",\"Chinese\":\"电影\"},{\"English\":\"night\",\"PhoneticSymbols\":\"na ɪ t\",\"Chinese\":\"夜晚\"},{\"English\":\"search\",\"PhoneticSymbols\":\"s ɜ ː t ʃ\",\"Chinese\":\"搜寻；搜索；查找\"},{\"English\":\"information\",\"PhoneticSymbols\":\"ɪ nfə'me ɪʃ n\",\"Chinese\":\"信息\"},{\"English\":\"email\",\"PhoneticSymbols\":\"'i ː me ɪ l\",\"Chinese\":\"电子邮件\"},{\"English\":\"send\",\"PhoneticSymbols\":\"send\",\"Chinese\":\"发送\"},{\"English\":\"game\",\"PhoneticSymbols\":\"ge ɪ m\",\"Chinese\":\"游戏\"},{\"English\":\"sometimes\",\"PhoneticSymbols\":\"'s ʌ mta ɪ mz\",\"Chinese\":\"有时候；不时\"},{\"English\":\"cinema\",\"PhoneticSymbols\":\"'s ɪ n ɪ mə\",\"Chinese\":\"电影院\"},{\"English\":\"clothes\",\"PhoneticSymbols\":\"klə ʊ ðz\",\"Chinese\":\"衣服（总称）\"},{\"English\":\"visit\",\"PhoneticSymbols\":\"'v ɪ z ɪ t\",\"Chinese\":\"探望；参观\"},{\"English\":\"holiday\",\"PhoneticSymbols\":\"'h ɒ l ɪ de ɪ\",\"Chinese\":\"假日；节日\"}]},{\"Name\":\"Module 8\",\"Words\":[{\"English\":\"card\",\"PhoneticSymbols\":\"k ɑ ː d\",\"Chinese\":\"卡片\"},{\"English\":\"party\",\"PhoneticSymbols\":\"'p ɑ ː t ɪ\",\"Chinese\":\"晚会；聚会\"},{\"English\":\"present\",\"PhoneticSymbols\":\"'preznt\",\"Chinese\":\"礼物\"},{\"English\":\"would\",\"PhoneticSymbols\":\"w ʊ d\",\"Chinese\":\"肯，会；愿意\"},{\"English\":\"always\",\"PhoneticSymbols\":\"' ɔ ː lwe ɪ z\",\"Chinese\":\"总是；一直\"},{\"English\":\"great\",\"PhoneticSymbols\":\"gre ɪ t\",\"Chinese\":\"太好了；巨大的；超乎寻常的\"},{\"English\":\"cake\",\"PhoneticSymbols\":\"ke ɪ k\",\"Chinese\":\"蛋糕\"},{\"English\":\"never\",\"PhoneticSymbols\":\"'nevə\",\"Chinese\":\"从不\"},{\"English\":\"special\",\"PhoneticSymbols\":\"'spe ʃ l\",\"Chinese\":\"特别的，特殊的\"},{\"English\":\"cut\",\"PhoneticSymbols\":\"k ʌ t\",\"Chinese\":\"切；剪\"},{\"English\":\"give\",\"PhoneticSymbols\":\"g ɪ v\",\"Chinese\":\"给，送\"},{\"English\":\"sing\",\"PhoneticSymbols\":\"s ɪ ŋ\",\"Chinese\":\"唱，唱歌\"},{\"English\":\"happy\",\"PhoneticSymbols\":\"'hæp ɪ\",\"Chinese\":\"高兴的，幸福的\"},{\"English\":\"secret\",\"PhoneticSymbols\":\"'si ː kr ɪ t\",\"Chinese\":\"秘密\"},{\"English\":\"ha ha\",\"PhoneticSymbols\":\"h ɑ : 'h ɑ :\",\"Chinese\":\"哈哈（表笑声）\"},{\"English\":\"CD\",\"PhoneticSymbols\":\", s   i ː 'd i ː\",\"Chinese\":\"激光唱片；光盘\"},{\"English\":\"concert\",\"PhoneticSymbols\":\"'k ɒ nsət\",\"Chinese\":\"音乐会\"},{\"English\":\"magazine\",\"PhoneticSymbols\":\",mægə'zi ː n\",\"Chinese\":\"杂志\"},{\"English\":\"scarf\",\"PhoneticSymbols\":\"sk ɑ ː f\",\"Chinese\":\"围巾\"},{\"English\":\"silk\",\"PhoneticSymbols\":\"s ɪ lk\",\"Chinese\":\"丝绸\"},{\"English\":\"dress\",\"PhoneticSymbols\":\"dres\",\"Chinese\":\"连衣裙；礼服\"},{\"English\":\"T-shirt\",\"PhoneticSymbols\":\"'ti ː , ʃɜ ː t\",\"Chinese\":\"恤衫\"},{\"English\":\"choose\",\"PhoneticSymbols\":\"t ʃ u ː z\",\"Chinese\":\"选择；挑选\"},{\"English\":\"exercise\",\"PhoneticSymbols\":\"'eksə,sa ɪ z\",\"Chinese\":\"锻炼；练习\"},{\"English\":\"wear\",\"PhoneticSymbols\":\"weə\",\"Chinese\":\"穿；戴\"},{\"English\":\"expensive\",\"PhoneticSymbols\":\"ɪ k'spens ɪ v\",\"Chinese\":\"昂贵的\"},{\"English\":\"shoe\",\"PhoneticSymbols\":\"ʃ u ː\",\"Chinese\":\"鞋，鞋子\"},{\"English\":\"spend\",\"PhoneticSymbols\":\"spend\",\"Chinese\":\"花（钱）；花费\"},{\"English\":\"money\",\"PhoneticSymbols\":\"'m ʌ n ɪ\",\"Chinese\":\"钱；金钱\"},{\"English\":\"film\",\"PhoneticSymbols\":\"f ɪ lm\",\"Chinese\":\"电影\"},{\"English\":\"song\",\"PhoneticSymbols\":\"s ɒ ŋ\",\"Chinese\":\"歌曲\"},{\"English\":\"match\",\"PhoneticSymbols\":\"mæt ʃ\",\"Chinese\":\"（尤指体育方面的）比赛、竞赛\"},{\"English\":\"weekend\",\"PhoneticSymbols\":\",wi ː k'end\",\"Chinese\":\"周末\"},{\"English\":\"at weekends\",\"PhoneticSymbols\":\"\",\"Chinese\":\"在周末\"},{\"English\":\"dear\",\"PhoneticSymbols\":\"d ɪ ə\",\"Chinese\":\"（用于信开头某人的名字前）亲爱的\"},{\"English\":\"hear\",\"PhoneticSymbols\":\"h ɪ ə\",\"Chinese\":\"听见\"},{\"English\":\"hear from\",\"PhoneticSymbols\":\"\",\"Chinese\":\"收到 … 的来信\"},{\"English\":\"afraid\",\"PhoneticSymbols\":\"ə'fre ɪ d\",\"Chinese\":\"担心的害怕的\"},{\"English\":\"I’ m afraid\",\"PhoneticSymbols\":\"\",\"Chinese\":\"恐怕（用于礼貌地拒绝）\"},{\"English\":\"can’t   =  cannot\",\"PhoneticSymbols\":\"\",\"Chinese\":\"不能\"}]},{\"Name\":\"Module 9\",\"Words\":[{\"English\":\"postcard\",\"PhoneticSymbols\":\"'pə ʊ stk ɑ ː d\",\"Chinese\":\"明信片\"},{\"English\":\"call\",\"PhoneticSymbols\":\"k ɔ ː l\",\"Chinese\":\"（给 …… ）打电话\"},{\"English\":\"lie\",\"PhoneticSymbols\":\"la ɪ\",\"Chinese\":\"躺；平躺\"},{\"English\":\"sun\",\"PhoneticSymbols\":\"s ʌ n\",\"Chinese\":\"太阳\"},{\"English\":\"line\",\"PhoneticSymbols\":\"la ɪ n\",\"Chinese\":\"行、排、列\"},{\"English\":\"take\",\"PhoneticSymbols\":\"te ɪ k\",\"Chinese\":\"拿、，取；花费（时间）\"},{\"English\":\"take photos\",\"PhoneticSymbols\":\"\",\"Chinese\":\"拍照\"},{\"English\":\"wait\",\"PhoneticSymbols\":\"we ɪ t\",\"Chinese\":\"等待，等候\"},{\"English\":\"wait for\",\"PhoneticSymbols\":\"\",\"Chinese\":\"等待，等候\"},{\"English\":\"walk\",\"PhoneticSymbols\":\"w ɔ ː k\",\"Chinese\":\"行走，不行\"},{\"English\":\"trip\",\"PhoneticSymbols\":\"tr ɪ p\",\"Chinese\":\"旅行\"},{\"English\":\"few\",\"PhoneticSymbols\":\"fju ː\",\"Chinese\":\"一些、几个、很少（的）\"},{\"English\":\"a few\",\"PhoneticSymbols\":\"\",\"Chinese\":\"一些、几个\"},{\"English\":\"sale\",\"PhoneticSymbols\":\"se ɪ l\",\"Chinese\":\"卖、出卖\"},{\"English\":\"on sale\",\"PhoneticSymbols\":\"\",\"Chinese\":\"正在出售\"},{\"English\":\"enjoy\",\"PhoneticSymbols\":\"ɪ n'd ʒɔɪ\",\"Chinese\":\"享受 … 的乐趣   喜爱\"},{\"English\":\"anyway\",\"PhoneticSymbols\":\"'en ɪ we ɪ\",\"Chinese\":\"尽管如此；无论如何\"},{\"English\":\"back\",\"PhoneticSymbols\":\"bæk\",\"Chinese\":\"向后；回到；返回\"},{\"English\":\"go back\",\"PhoneticSymbols\":\"\",\"Chinese\":\"回去\"},{\"English\":\"drive\",\"PhoneticSymbols\":\"dra ɪ v\",\"Chinese\":\"驾驶；驾车\"},{\"English\":\"off\",\"PhoneticSymbols\":\"ɒ f\",\"Chinese\":\"prep . 下（飞机、火车、公共汽车等）\"},{\"English\":\"get off\",\"PhoneticSymbols\":\"\",\"Chinese\":\"下（飞机、火车、公共汽车等）\"},{\"English\":\"hot dog\",\"PhoneticSymbols\":\"\",\"Chinese\":\"热狗（一种中间夹香肠的三明治）\"},{\"English\":\"leave\",\"PhoneticSymbols\":\"li ː v\",\"Chinese\":\"离开\"},{\"English\":\"restaurant\",\"PhoneticSymbols\":\"'resətr ɒ nt\",\"Chinese\":\"饭店；餐馆\"},{\"English\":\"moment\",\"PhoneticSymbols\":\"'mə ʊ mənt\",\"Chinese\":\"（某事发生的）的时刻，时候\"},{\"English\":\"place\",\"PhoneticSymbols\":\"ple ɪ s\",\"Chinese\":\"地点\"},{\"English\":\"thing\",\"PhoneticSymbols\":\"θ ɪ ŋ\",\"Chinese\":\"事情、东西\"},{\"English\":\"most\",\"PhoneticSymbols\":\"mə ʊ st\",\"Chinese\":\"大部分（的）；大多数（的）\"},{\"English\":\"still\",\"PhoneticSymbols\":\"st ɪ l\",\"Chinese\":\"仍然；依旧\"},{\"English\":\"star\",\"PhoneticSymbols\":\"st ɑ ː\",\"Chinese\":\"明星；星；星状物\"},{\"English\":\"run\",\"PhoneticSymbols\":\"r ʌ n\",\"Chinese\":\"跑，奔跑\"},{\"English\":\"study\",\"PhoneticSymbols\":\"'st ʌ d ɪ\",\"Chinese\":\"学习；研究\"}]},{\"Name\":\"Module 10\",\"Words\":[{\"English\":\"lantern\",\"PhoneticSymbols\":\"'læntən\",\"Chinese\":\"灯笼\"},{\"English\":\"dragon\",\"PhoneticSymbols\":\"'dræ ɡ ən\",\"Chinese\":\"龙\"},{\"English\":\"dance\",\"PhoneticSymbols\":\"d ɑ ː ns\",\"Chinese\":\"ｎ舞蹈ｖ跳舞\"},{\"English\":\"clean\",\"PhoneticSymbols\":\"kli ː n\",\"Chinese\":\"ｖ打扫清洁的；adj. 干净的\"},{\"English\":\"sweep\",\"PhoneticSymbols\":\"swi ː p\",\"Chinese\":\"打扫；清扫\"},{\"English\":\"floor\",\"PhoneticSymbols\":\"fl ɔ ː\",\"Chinese\":\"地板\"},{\"English\":\"cook\",\"PhoneticSymbols\":\"k ʊ k\",\"Chinese\":\"烹调；煮；烧\"},{\"English\":\"meal\",\"PhoneticSymbols\":\"mi ː l\",\"Chinese\":\"一餐；一顿饭\"},{\"English\":\"speak\",\"PhoneticSymbols\":\"spi ː k\",\"Chinese\":\"说话，讲话\"},{\"English\":\"happen\",\"PhoneticSymbols\":\"'hæpən\",\"Chinese\":\"发生\"},{\"English\":\"ready\",\"PhoneticSymbols\":\"'red ɪ\",\"Chinese\":\"有准备的；准备好的\"},{\"English\":\"get ready for\",\"PhoneticSymbols\":\"\",\"Chinese\":\"为 … 做好准备\"},{\"English\":\"festival\",\"PhoneticSymbols\":\"'fest ɪ vl\",\"Chinese\":\"节日\"},{\"English\":\"quite\",\"PhoneticSymbols\":\"kwa ɪ t\",\"Chinese\":\"十分；相当\"},{\"English\":\"at the moment\",\"PhoneticSymbols\":\"\",\"Chinese\":\"此刻，目前\"},{\"English\":\"beautiful\",\"PhoneticSymbols\":\"'bju ː t ə fl\",\"Chinese\":\"漂亮的，美丽的\"},{\"English\":\"at work\",\"PhoneticSymbols\":\"\",\"Chinese\":\"在工作\"},{\"English\":\"away\",\"PhoneticSymbols\":\"ə'we ɪ\",\"Chinese\":\"在安全的地方；在通常存放的地方\"},{\"English\":\"put away\",\"PhoneticSymbols\":\"\",\"Chinese\":\"收起；收拾好\"},{\"English\":\"hard\",\"PhoneticSymbols\":\"h ɑ ː d\",\"Chinese\":\"adv.   努力地;adj. 艰难的；困难的\"},{\"English\":\"join\",\"PhoneticSymbols\":\"d ʒɔɪ n\",\"Chinese\":\"参加；加入\"},{\"English\":\"hurry\",\"PhoneticSymbols\":\"'h ʌ r ɪ\",\"Chinese\":\"赶快；匆忙\"},{\"English\":\"hurry up\",\"PhoneticSymbols\":\"\",\"Chinese\":\"赶快\"},{\"English\":\"Christmas\",\"PhoneticSymbols\":\"'kr ɪ sməs\",\"Chinese\":\"圣诞节\"},{\"English\":\"February\",\"PhoneticSymbols\":\"'febr ʊ ər ɪ\",\"Chinese\":\"二月\"},{\"English\":\"January\",\"PhoneticSymbols\":\"'d ʒ ænj ʊ ər ɪ\",\"Chinese\":\"一月\"},{\"English\":\"before\",\"PhoneticSymbols\":\"b ɪ 'f ɔ ː\",\"Chinese\":\"在 … 之前\"},{\"English\":\"sweep away\",\"PhoneticSymbols\":\"\",\"Chinese\":\"扫去\"},{\"English\":\"luck\",\"PhoneticSymbols\":\"l ʌ k\",\"Chinese\":\"运气\"},{\"English\":\"table\",\"PhoneticSymbols\":\"'te ɪ b(ə)l\",\"Chinese\":\"桌子\"},{\"English\":\"celebrate\",\"PhoneticSymbols\":\"'sel ɪ , bre ɪ t\",\"Chinese\":\"庆祝\"},{\"English\":\"traditional\",\"PhoneticSymbols\":\"trə'd ɪʃ nəl\",\"Chinese\":\"传统的\"},{\"English\":\"dumpling\",\"PhoneticSymbols\":\"'d ʌ mpl ɪ ŋ\",\"Chinese\":\"饺子；团子\"},{\"English\":\"programme\",\"PhoneticSymbols\":\"'prə ʊ græm\",\"Chinese\":\"节目\"},{\"English\":\"sweater\",\"PhoneticSymbols\":\"'swetə\",\"Chinese\":\"厚运动衫；毛线衣\"},{\"English\":\"coat\",\"PhoneticSymbols\":\"kə ʊ t\",\"Chinese\":\"外套\"},{\"English\":\"mean\",\"PhoneticSymbols\":\"mi ː n\",\"Chinese\":\"意思是；意味着\"},{\"English\":\"lucky\",\"PhoneticSymbols\":\"'l ʌ k ɪ\",\"Chinese\":\"幸运的\"},{\"English\":\"merry\",\"PhoneticSymbols\":\"'mer ɪ\",\"Chinese\":\"愉快的；高兴的\"},{\"English\":\"Merry Christmas\",\"PhoneticSymbols\":\"\",\"Chinese\":\"圣诞快乐\"},{\"English\":\"tell\",\"PhoneticSymbols\":\"tel\",\"Chinese\":\"讲；告诉\"}]},{\"Name\":\"Revision module B\",\"Words\":[{\"English\":\"think\",\"PhoneticSymbols\":\"θ ɪ ŋk\",\"Chinese\":\"想，认为\"}]}]");
    /***/
  },

  /***/
  "./src/assets/json/M12.json":
  /*!**********************************!*\
    !*** ./src/assets/json/M12.json ***!
    \**********************************/

  /*! exports provided: 0, 1, default */

  /***/
  function srcAssetsJsonM12Json(module) {
    module.exports = JSON.parse("[{\"Name\":\"M12词组\",\"Words\":[{\"English\":\"traditional western music\",\"PhoneticSymbols\":\"\",\"Chinese\":\"西方传统音乐\"},{\"English\":\"the capital of Austria\",\"PhoneticSymbols\":\"\",\"Chinese\":\"奥地利首都\"},{\"English\":\"go through\",\"PhoneticSymbols\":\"\",\"Chinese\":\"流经\"},{\"English\":\"listen to the fantastic voice\",\"PhoneticSymbols\":\"\",\"Chinese\":\"听着绝妙的嗓音\"},{\"English\":\"a fan of rock music\",\"PhoneticSymbols\":\"\",\"Chinese\":\"摇滚乐迷\"},{\"English\":\"give us a break\",\"PhoneticSymbols\":\"\",\"Chinese\":\"饶了我们吧(得了吧,让我们清静会吧)\"},{\"English\":\"much too fast/heavy\",\"PhoneticSymbols\":\"\",\"Chinese\":\"太快/沉\"},{\"English\":\"too much work/water\",\"PhoneticSymbols\":\"\",\"Chinese\":\"太多工作/水\"},{\"English\":\"know little/much about\",\"PhoneticSymbols\":\"\",\"Chinese\":\"不太了解/非常了解\"},{\"English\":\"the center of European classical music\",\"PhoneticSymbols\":\"\",\"Chinese\":\"欧洲古典音乐的中心\"},{\"English\":\"take sb. around\",\"PhoneticSymbols\":\"\",\"Chinese\":\"带…周游\"},{\"English\":\"give concerts\",\"PhoneticSymbols\":\"\",\"Chinese\":\"开音乐会\"},{\"English\":\"hundreds of wonderful pieces of music\",\"PhoneticSymbols\":\"\",\"Chinese\":\"几百部动听的音乐作品\"},{\"English\":\"at an early age\",\"PhoneticSymbols\":\"\",\"Chinese\":\"在…早年间\"},{\"English\":\"come out\",\"PhoneticSymbols\":\"\",\"Chinese\":\"发表,出版\"},{\"English\":\"lose one's hearing\",\"PhoneticSymbols\":\"\",\"Chinese\":\"丧失听力\"},{\"English\":\"in the last ten years of Beethoven's life\",\"PhoneticSymbols\":\"\",\"Chinese\":\"在贝多芬生命的最后十年里\"},{\"English\":\"take place\",\"PhoneticSymbols\":\"\",\"Chinese\":\"发生\"}]},{\"Name\":\"M12句子\",\"Words\":[{\"English\":\"The Blue Danube is Western music, isn't it Yes, it is.\",\"PhoneticSymbols\":\"\",\"Chinese\":\"《蓝色多瑙河》是西方音乐,是吧?是的\"},{\"English\":\"Is this piece of music by Strauss or Mozart? It's by Strauss.\",\"PhoneticSymbols\":\"\",\"Chinese\":\"这首曲子时施特劳斯的作品还是莫扎特的作品。是施特劳斯的作品\"},{\"English\":\"What a beautiful city (it is) How beautiful the city is!\",\"PhoneticSymbols\":\"\",\"Chinese\":\"一座很美丽的城市\"},{\"English\":\"Do you like rock music or pop music? I like both.\",\"PhoneticSymbols\":\"\",\"Chinese\":\"你喜欢摇滚乐还是流行音乐?我都喜欢。\"},{\"English\":\"You listen to modern music, don’t you? No, I don’t.\",\"PhoneticSymbols\":\"\",\"Chinese\":\"你听现代音乐,对吧?不,我不听。\"},{\"English\":\"What noisy drums they are playing!\",\"PhoneticSymbols\":\"\",\"Chinese\":\"他们正在击打的鼓声很大\"},{\"English\":\"What music do you like? I like pop, because it's lively and good to dance to.\",\"PhoneticSymbols\":\"\",\"Chinese\":\"你喜欢什么音乐?我喜欢流行音乐,因为它很轻快,很适合跳舞。\"},{\"English\":\"The father, J S the elder, wrote and played music for traditional dances, called the waltz.\",\"PhoneticSymbols\":\"\",\"Chinese\":\"父亲老约翰·施特劳斯创作并演奏一种古典舞曲,叫华尔兹。\"},{\"English\":\"His dance music made him famous all over Europe.\",\"PhoneticSymbols\":\"\",\"Chinese\":\"他的舞曲让他闻名欧洲\"},{\"English\":\"M was another very important composer.\",\"PhoneticSymbols\":\"\",\"Chinese\":\"莫扎特是另一位非常重要的作曲家。\"},{\"English\":\"Before he was six, he played not only the piano but also the violin.\",\"PhoneticSymbols\":\"\",\"Chinese\":\"他不到六岁,就不仅会弹钢琴,还会拉小提琴。\"},{\"English\":\"He became very poor and died in 1791 when he was only 35.\",\"PhoneticSymbols\":\"\",\"Chinese\":\"他变得很穷困,于1791年去世,年仅35岁。\"},{\"English\":\"I don’t believe the sound is very different.\",\"PhoneticSymbols\":\"\",\"Chinese\":\"我简直无法相信这个声音太不一样了。\"},{\"English\":\"In the eighteenth century, a lot of musicians came to study and work in Vienna.\",\"PhoneticSymbols\":\"\",\"Chinese\":\"在十八世纪,许多音乐家到维也纳学习和工作。\"},{\"English\":\"Like J S, father and son, he was a great European musician, and many people still think his music is perfect.\",\"PhoneticSymbols\":\"\",\"Chinese\":\"像施特劳斯父子一样,他是一位伟大的欧洲音乐家,现在许多人仍然认为他的音乐是完美的。\"},{\"English\":\"Vienna is a beautiful old city on the River Danube in the center of Europe.\",\"PhoneticSymbols\":\"\",\"Chinese\":\"维也纳是位于欧洲中部多瑙河畔的一座古老而美丽的城市。\"},{\"English\":\"In the S family, there were two composers called Johann S, the father and the son.\",\"PhoneticSymbols\":\"\",\"Chinese\":\"在施特劳斯家族,有两位名为约翰·施特劳斯的作家:父亲和儿子。\"}]}]");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\testProjects\angular\EnglishWords\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map