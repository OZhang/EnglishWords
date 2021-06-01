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


    __webpack_exports__["default"] = "<div style=\"width: 100%;\" > \n    <h2>{{ Chinese }}</h2>\n    \n    <!-- <button mat-button (click)=\"speak()\">\n        <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">record_voice_over</mat-icon>\n    </button> -->\n    <mat-form-field style=\"width: 100%;\" >\n        <input matInput #myInput [(ngModel)]=\"answerInput\" style=\"width: 100%;\"\n        autocomplete=\"off\" (change)=\"changed($event.target.value)\" autofocus>\n    </mat-form-field>\n</div>";
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


    var _assets_json_M12_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../assets/json/M12.json */
    "./src/assets/json/M12.json");

    var _assets_json_M12_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../assets/json/M12.json */
    "./src/assets/json/M12.json", 1);

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(getWordsService, speech) {
        _classCallCheck(this, AppComponent);

        this.getWordsService = getWordsService;
        this.speech = speech;
        this.title = 'EnglishWords';
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
          this.allWords = _assets_json_M12_json__WEBPACK_IMPORTED_MODULE_4__;
          this.goToModule(0); // this.getWordsService.getJson().subscribe(data => {
          //   console.log(data);
          //   this.allWords = data;
          //   this.goToModule(0)
          // })
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
          this.currentWords = this.shuffle(this.wrongWords); // this.wrongWords;

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
          this.answerChangedEvent.emit(value.trim());
          this.speak();
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