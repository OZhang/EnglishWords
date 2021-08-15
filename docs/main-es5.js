function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive": function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <h1>{{ currentModule }}</h1>\r\n    <button mat-button (click)=\"previousModule()\">上一模块</button>\r\n    <button mat-button (click)=\"nextModule()\">下一模块</button>\r\n\r\n    <h3>{{ currentWordIndex + 1 }} / {{ totalWords }}</h3>\r\n    <div [ngClass]=\"{'disabled': isDisabled}\">\r\n        <app-words [English]=\"english\" [PhoneticSymbols]=\"phoneticSymbols\" [Chinese]=\"chinese\" [Answer]=\"answer\"\r\n            (answerChanged)=\"answerChanged($event)\">\r\n        </app-words>\r\n        <button mat-button (click)=\"previousWord()\">上一个</button>\r\n        <button mat-button (click)=\"nextWord()\">下一个</button>\r\n    </div>\r\n    <button mat-button *ngIf=\"isCompleted\" (click)=\"completed()\">完成</button>\r\n    <button mat-button *ngIf=\"wrongCount > 0\" (click)=\"reTest()\">重做错题</button>\r\n    <br>\r\n    <span *ngIf=\"correctCount > 0 || wrongCount > 0\">正确：{{ correctCount }}</span>\r\n    <span *ngIf=\"correctCount > 0 || wrongCount > 0\">错误：{{ wrongCount }}</span>\r\n    <br>\r\n    <ul *ngFor=\"let word of wrongWords\">\r\n        <li>\r\n            <p>{{ word.Chinese }}</p>\r\n            <p>{{ word.English }}</p>\r\n            <p class=\"wrongWord\">回答：{{ word.answer }}</p>\r\n        </li>\r\n    </ul>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/words/words.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsWordsWordsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n    <h2>{{ Chinese }}</h2>\r\n    \r\n    <button mat-button (click)=\"speak()\">\r\n        <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">record_voice_over</mat-icon>\r\n    </button>\r\n    <mat-form-field>\r\n        <input matInput #myInput [(ngModel)]=\"answerInput\" autocomplete=\"off\" (change)=\"changed($event.target.value)\" autofocus>\r\n    </mat-form-field>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts": function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss": function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrongWord {\n  color: red;\n}\n\n.container {\n  margin-left: 30px;\n  margin-top: 50px;\n}\n\n.disabled {\n  pointer-events: none;\n  /* for \"disabled\" effect */\n  opacity: 0.5;\n  background: #CCC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHRlc3RQcm9qZWN0c1xcdHNcXEVuZ2xpc2hXb3Jkcy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFFRSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JvbmdXb3JkIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHhcclxufVxyXG5cclxuLmRpc2FibGVkXHJcbntcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAvKiBmb3IgXCJkaXNhYmxlZFwiIGVmZmVjdCAqL1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBiYWNrZ3JvdW5kOiAjQ0NDO1xyXG59IiwiLndyb25nV29yZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmRpc2FibGVkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIC8qIGZvciBcImRpc2FibGVkXCIgZWZmZWN0ICovXG4gIG9wYWNpdHk6IDAuNTtcbiAgYmFja2dyb3VuZDogI0NDQztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_get_words_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./service/get-words.service */
    "./src/app/service/get-words.service.ts");
    /* harmony import */


    var src_app_speech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/speech.service */
    "./src/app/speech.service.ts");

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
          var _this = this;

          this.getWordsService.getJson().subscribe(function (data) {
            console.log(data);
            _this.allWords = data;

            _this.goToModule(0);
          });
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
          var _this2 = this;

          this.isDisabled = true;
          this.wrongWords = [];
          var correct = 0;
          var wrong = 0;
          this.currentWords.forEach(function (word) {
            if (word['answer'] === word['English']) {
              correct += 1;
            } else {
              wrong += 1;

              _this2.wrongWords.push(word);
            }
          });
          this.correctCount = correct;
          this.wrongCount = wrong;
        }
      }, {
        key: "reTest",
        value: function reTest() {
          this.isCompleted = false;
          this.isDisabled = false;
          this.currentWords = this.wrongWords;
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
        type: src_app_speech_service__WEBPACK_IMPORTED_MODULE_3__["SpeechService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
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
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/input.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_words_words_component__WEBPACK_IMPORTED_MODULE_6__["WordsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/words/words.component.scss": function srcAppComponentsWordsWordsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd29yZHMvd29yZHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/words/words.component.ts": function srcAppComponentsWordsWordsComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_speech_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/speech.service */
    "./src/app/speech.service.ts");

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
        type: src_app_speech_service__WEBPACK_IMPORTED_MODULE_3__["SpeechService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myInput', {
      "static": false
    })], WordsComponent.prototype, "input", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WordsComponent.prototype, "English", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WordsComponent.prototype, "PhoneticSymbols", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WordsComponent.prototype, "Chinese", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WordsComponent.prototype, "Answer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('answerChanged')], WordsComponent.prototype, "answerChangedEvent", void 0);
    WordsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-words',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./words.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/words/words.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./words.component.scss */
      "./src/app/components/words/words.component.scss"))["default"]]
    })], WordsComponent);
    /***/
  },

  /***/
  "./src/app/service/get-words.service.ts": function srcAppServiceGetWordsServiceTs(module, __webpack_exports__, __webpack_require__) {
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var GetWordsService = /*#__PURE__*/function () {
      function GetWordsService(http) {
        _classCallCheck(this, GetWordsService);

        this.http = http;
      }

      _createClass(GetWordsService, [{
        key: "getJson",
        value: function getJson() {
          return this.http.get("../assets/json/8_1.json");
        }
      }]);

      return GetWordsService;
    }();

    GetWordsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    GetWordsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GetWordsService);
    /***/
  },

  /***/
  "./src/app/speech.service.ts": function srcAppSpeechServiceTs(module, __webpack_exports__, __webpack_require__) {
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
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

    SpeechService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SpeechService);
    /***/
  },

  /***/
  "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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
  "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0: function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\testProjects\ts\EnglishWords\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map