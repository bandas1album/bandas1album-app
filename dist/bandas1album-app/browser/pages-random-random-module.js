(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-random-random-module"],{

/***/ "+mCS":
/*!***********************************************!*\
  !*** ./src/app/pages/random/random.module.ts ***!
  \***********************************************/
/*! exports provided: RandomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomModule", function() { return RandomModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _random_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random-routing.module */ "8crc");
/* harmony import */ var _random_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./random.component */ "gCz2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class RandomModule {
}
RandomModule.ɵfac = function RandomModule_Factory(t) { return new (t || RandomModule)(); };
RandomModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: RandomModule });
RandomModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _random_routing_module__WEBPACK_IMPORTED_MODULE_1__["RandomRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RandomModule, { declarations: [_random_component__WEBPACK_IMPORTED_MODULE_2__["RandomComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _random_routing_module__WEBPACK_IMPORTED_MODULE_1__["RandomRoutingModule"]] }); })();


/***/ }),

/***/ "8crc":
/*!*******************************************************!*\
  !*** ./src/app/pages/random/random-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: RandomRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomRoutingModule", function() { return RandomRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _random_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random.component */ "gCz2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _random_component__WEBPACK_IMPORTED_MODULE_1__["RandomComponent"] }];
class RandomRoutingModule {
}
RandomRoutingModule.ɵfac = function RandomRoutingModule_Factory(t) { return new (t || RandomRoutingModule)(); };
RandomRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RandomRoutingModule });
RandomRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RandomRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "T/ZZ":
/*!***********************************************!*\
  !*** ./node_modules/url-join/lib/url-join.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (name, context, definition) {
  if ( true && module.exports) module.exports = definition();
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  else {}
})('urljoin', this, function () {

  function normalize (strArray) {
    var resultArray = [];
    if (strArray.length === 0) { return ''; }

    if (typeof strArray[0] !== 'string') {
      throw new TypeError('Url must be a string. Received ' + strArray[0]);
    }

    // If the first part is a plain protocol, we combine it with the next part.
    if (strArray[0].match(/^[^/:]+:\/*$/) && strArray.length > 1) {
      var first = strArray.shift();
      strArray[0] = first + strArray[0];
    }

    // There must be two or three slashes in the file protocol, two slashes in anything else.
    if (strArray[0].match(/^file:\/\/\//)) {
      strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1:///');
    } else {
      strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1://');
    }

    for (var i = 0; i < strArray.length; i++) {
      var component = strArray[i];

      if (typeof component !== 'string') {
        throw new TypeError('Url must be a string. Received ' + component);
      }

      if (component === '') { continue; }

      if (i > 0) {
        // Removing the starting slashes for each component but the first.
        component = component.replace(/^[\/]+/, '');
      }
      if (i < strArray.length - 1) {
        // Removing the ending slashes for each component but the last.
        component = component.replace(/[\/]+$/, '');
      } else {
        // For the last component we will combine multiple slashes to a single one.
        component = component.replace(/[\/]+$/, '/');
      }

      resultArray.push(component);

    }

    var str = resultArray.join('/');
    // Each input component is now separated by a single slash except the possible first plain protocol part.

    // remove trailing slash before parameters or hash
    str = str.replace(/\/(\?|&|#[^!])/g, '$1');

    // replace ? in parameters with &
    var parts = str.split('?');
    str = parts.shift() + (parts.length > 0 ? '?': '') + parts.join('&');

    return str;
  }

  return function () {
    var input;

    if (typeof arguments[0] === 'object') {
      input = arguments[0];
    } else {
      input = [].slice.call(arguments);
    }

    return normalize(input);
  };

});


/***/ }),

/***/ "UVkw":
/*!***********************************************!*\
  !*** ./src/app/services/base/base.service.ts ***!
  \***********************************************/
/*! exports provided: constructApiQueryParams, Constants, BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructApiQueryParams", function() { return constructApiQueryParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-join */ "T/ZZ");
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url_join__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");





/*
  This should be placed in some miscellaneous folder.
*/
function constructApiQueryParams(inputParams) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
    if (inputParams && Object.keys(inputParams).length > 0) {
        const inputAttributes = Object.keys(inputParams);
        inputAttributes.map((key) => {
            params = params.append(key, inputParams[key]);
        });
    }
    return params;
}
/*
  This should be placed in some file containing all the application constants.
*/
class Constants {
}
Constants.apiRoot = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].urlApi; // If there is some prefix for all the APIs, then define that in constants.
/**
 * @description
 * Generic Service.
 */
class BaseService {
    constructor(http, path) {
        this.http = http;
        this.path = path;
        this.merchant = '';
        this.unit = '';
        this.endpointUrl = url_join__WEBPACK_IMPORTED_MODULE_2___default()(Constants.apiRoot, this.path);
    }
    formatErrors(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    }
    /**
     * @description
     * Get list.
     * @param options Extra data
     */
    get(options = {}) {
        options.params = constructApiQueryParams(options.params);
        return this.http
            .get(this.endpointUrl, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
    }
    /**
     * @description
     * Get by ID.
     *
     * @param id      Required ID
     * @param options Extra data
     */
    getById(id, options = {}) {
        options.params = constructApiQueryParams(options.params);
        const url = url_join__WEBPACK_IMPORTED_MODULE_2___default()(this.endpointUrl, id);
        return this.http
            .get(url, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
    }
    /**
     * @description
     * Generic create.
     * @param creationBody  Required information
     * @param options       Extra data
     */
    create(creationBody, options = {}) {
        options.params = constructApiQueryParams(options.params);
        return this.http
            .post(this.endpointUrl, creationBody, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
    }
    /**
     * @description
     * Update by ID.
     *
     * @param id          Required ID
     * @param updateBody  Required information
     * @param options     Extra data
     */
    update(id, updateBody, options = {}) {
        options.params = constructApiQueryParams(options.params);
        const url = url_join__WEBPACK_IMPORTED_MODULE_2___default()(this.endpointUrl, id);
        return this.http
            .put(url, updateBody, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
    }
    /**
     * @description
     * Delete by ID.
     *
     * @param id      Required ID
     * @param options Extra data
     */
    delete(id, options = {}) {
        options.params = constructApiQueryParams(options.params);
        const url = url_join__WEBPACK_IMPORTED_MODULE_2___default()(this.endpointUrl, id);
        return this.http.delete(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
    }
}


/***/ }),

/***/ "gCz2":
/*!**************************************************!*\
  !*** ./src/app/pages/random/random.component.ts ***!
  \**************************************************/
/*! exports provided: RandomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomComponent", function() { return RandomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_album_album_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/album/album.service */ "kpG/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class RandomComponent {
    constructor(albumService, router) {
        this.albumService = albumService;
        this.router = router;
        this.params = {
            page: 1,
            per_page: 1,
            orderby: 'rand',
        };
    }
    ngOnInit() {
        this.getAlbums();
    }
    getAlbums() {
        this.albumService.get({ params: this.params }).subscribe((res) => {
            const data = res[0];
            this.router.navigateByUrl(`/album/${data.slug}`);
        }, (err) => {
            // console.log(err);
        });
    }
}
RandomComponent.ɵfac = function RandomComponent_Factory(t) { return new (t || RandomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_album_album_service__WEBPACK_IMPORTED_MODULE_1__["AlbumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RandomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RandomComponent, selectors: [["app-random"]], decls: 8, vars: 0, consts: [["role", "main", 1, "main"], [1, "wrapper"], ["src", "/assets/img/logo.png", "loading", "lazy", "alt", "Bandas de 1 \u00C1lbum", 1, "spinner"]], template: function RandomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Modo rand\u00F4mico ativado!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Estamos escolhendo um \u00E1lbum para voc\u00EA...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".reset-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  -webkit-appearance: none;\n  -webkit-user-select: none;\n          user-select: none;\n  vertical-align: middle;\n  text-decoration: none;\n  text-align: center;\n  background-color: transparent;\n  outline: 0;\n}\n.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n.reset-input[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  display: block;\n  width: 100%;\n  border: 0;\n  background-clip: padding-box;\n  outline: 0;\n}\n.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled) {\n  cursor: text;\n}\n.reset-input[_ngcontent-%COMP%]:disabled, .reset-input.disabled[_ngcontent-%COMP%] {\n  cursor: default;\n}\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes bg {\n  0% {\n    transform: translate3d(0, 0, 0);\n  }\n  100% {\n    transform: translate3d(0, -974px, 0);\n  }\n}\n.main[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n}\n.main[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 200%;\n  opacity: 0.5;\n  filter: blur(5px);\n  background-image: url(\"/assets/img/bg.png\");\n  background-repeat: repeat;\n  animation: bg 30s linear infinite;\n}\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: 60rem;\n  text-align: center;\n}\n.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  display: block;\n  width: 5rem;\n  height: 5rem;\n  animation: rotate 5s infinite linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvYmFzZS9oZWxwZXJzL19yZXNldHMuc2NzcyIsIi4uLy4uLy4uLy4uL3JhbmRvbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FDQ0Y7QURDRTtFQUNFLGVBQUE7QUNDSjtBREdBO0VBQ0Usd0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7QUNBRjtBREVFO0VBQ0UsWUFBQTtBQ0FKO0FER0U7RUFFRSxlQUFBO0FDRko7QUE1QkE7RUFDRTtJQUNFLHVCQUFBO0VBK0JGO0VBNUJBO0lBQ0UseUJBQUE7RUE4QkY7QUFDRjtBQTNCQTtFQUNFO0lBQ0UsK0JBQUE7RUE2QkY7RUExQkE7SUFDRSxvQ0FBQTtFQTRCRjtBQUNGO0FBekJBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBMkJGO0FBekJFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkNBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0FBMkJKO0FBeEJFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUEwQko7QUF4Qkk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQTBCTiIsImZpbGUiOiJyYW5kb20uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzZXQtYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiAwOyAvLyBFc3RpbGl6YXIgbyBvdXRsaW5lIGNvbSBib3gtc2hhZG93XG5cbiAgJjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5yZXNldC1pbnB1dCB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIG91dGxpbmU6IDA7IC8vIEVzdGlsaXphciBvIG91dGxpbmUgY29tIGJveC1zaGFkb3dcblxuICAmOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpIHtcbiAgICBjdXJzb3I6IHRleHQ7XG4gIH1cblxuICAmOmRpc2FibGVkLFxuICAmLmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJzcmMvc2Nzcy9iYXNlL2ltcG9ydHNcIjtcblxuQGtleWZyYW1lcyByb3RhdGUge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTk3NHB4LCAwKTtcbiAgfVxufVxuXG4ubWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuXG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMCU7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGZpbHRlcjogYmx1cig1cHgpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2JnLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICAgIGFuaW1hdGlvbjogYmcgMzBzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuXG4gIC53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IHJlbSg5NjBweCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLnNwaW5uZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogcmVtKDgwcHgpO1xuICAgICAgaGVpZ2h0OiByZW0oODBweCk7XG4gICAgICBhbmltYXRpb246IHJvdGF0ZSA1cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "kpG/":
/*!*************************************************!*\
  !*** ./src/app/services/album/album.service.ts ***!
  \*************************************************/
/*! exports provided: AlbumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumService", function() { return AlbumService; });
/* harmony import */ var _base_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/base.service */ "UVkw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AlbumService extends _base_base_service__WEBPACK_IMPORTED_MODULE_0__["BaseService"] {
    constructor(httpClient) {
        super(httpClient, `album`);
        this.httpClient = httpClient;
    }
}
AlbumService.ɵfac = function AlbumService_Factory(t) { return new (t || AlbumService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AlbumService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AlbumService, factory: AlbumService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=pages-random-random-module.js.map