(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_pages_pages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/pages/pages.service */ "XKPu");
/* harmony import */ var src_app_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/seo/seo.service */ "63YN");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _list_albums_section_list_albums_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-albums-section/list-albums-section.component */ "Rpug");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






class HomeComponent {
    constructor(pagesService, seoService) {
        this.pagesService = pagesService;
        this.seoService = seoService;
        this.params = {
            slug: 'homepage',
        };
    }
    ngOnInit() {
        this.get();
    }
    get() {
        this.pagesService.get({ params: this.params }).subscribe((res) => {
            const data = res[0];
            data.yoast_meta.map((item) => {
                if (item.property === 'og:title') {
                    this.seoService.updateTitle(item.content);
                }
            });
            this.seoService.metatags(data);
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_pages_pages_service__WEBPACK_IMPORTED_MODULE_1__["PagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_2__["SeoService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 0, consts: [[1, "main", "default"], ["routerLink", "/random", "title", "Modo rand\u00F4mico", "aria-title", "Modo rand\u00F4mico", 1, "wrapper__button"], ["aria-hidden", "true", 1, "fas", "fa-random"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-list-albums-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _list_albums_section_list_albums_section_component__WEBPACK_IMPORTED_MODULE_4__["ListAlbumsSectionComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".reset-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  -webkit-appearance: none;\n  -webkit-user-select: none;\n          user-select: none;\n  vertical-align: middle;\n  text-decoration: none;\n  text-align: center;\n  background-color: transparent;\n  outline: 0;\n}\n.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n.reset-input[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  display: block;\n  width: 100%;\n  border: 0;\n  background-clip: padding-box;\n  outline: 0;\n}\n.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled) {\n  cursor: text;\n}\n.reset-input[_ngcontent-%COMP%]:disabled, .reset-input.disabled[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.main[_ngcontent-%COMP%] {\n  display: flex;\n}\n.wrapper__button[_ngcontent-%COMP%] {\n  left: 5.5rem;\n  bottom: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvYmFzZS9oZWxwZXJzL19yZXNldHMuc2NzcyIsIi4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0FDQ0o7QURHQTtFQUNFLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0FDQUY7QURFRTtFQUNFLFlBQUE7QUNBSjtBREdFO0VBRUUsZUFBQTtBQ0ZKO0FBNUJBO0VBQ0UsYUFBQTtBQStCRjtBQTVCQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBK0JGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzZXQtYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiAwOyAvLyBFc3RpbGl6YXIgbyBvdXRsaW5lIGNvbSBib3gtc2hhZG93XG5cbiAgJjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5yZXNldC1pbnB1dCB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIG91dGxpbmU6IDA7IC8vIEVzdGlsaXphciBvIG91dGxpbmUgY29tIGJveC1zaGFkb3dcblxuICAmOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpIHtcbiAgICBjdXJzb3I6IHRleHQ7XG4gIH1cblxuICAmOmRpc2FibGVkLFxuICAmLmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCJzcmMvc2Nzcy9iYXNlL2ltcG9ydHNcIjtcblxuLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ud3JhcHBlcl9fYnV0dG9uIHtcbiAgbGVmdDogcmVtKDg4cHgpO1xuICBib3R0b206IHJlbSgyNHB4KTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ "9oos");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "1LmZ");
/* harmony import */ var src_app_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/sidebar/sidebar.module */ "zWxg");
/* harmony import */ var _list_albums_section_list_albums_section_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-albums-section/list-albums-section.module */ "VwM2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"],
            src_app_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_3__["SidebarModule"],
            _list_albums_section_list_albums_section_module__WEBPACK_IMPORTED_MODULE_4__["ListAlbumsSectionModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"],
        src_app_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_3__["SidebarModule"],
        _list_albums_section_list_albums_section_module__WEBPACK_IMPORTED_MODULE_4__["ListAlbumsSectionModule"]] }); })();


/***/ }),

/***/ "9oos":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "1LmZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] }];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Rpug":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/home/list-albums-section/list-albums-section.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ListAlbumsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAlbumsSectionComponent", function() { return ListAlbumsSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_album_album_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/album/album.service */ "kpG/");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_lists_list_albums_placeholder_list_albums_placeholder_list_albums_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/lists/list-albums/placeholder-list-albums/placeholder-list-albums.component */ "nhpI");
/* harmony import */ var _components_lists_list_albums_list_albums_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/lists/list-albums/list-albums.component */ "4LSP");
/* harmony import */ var _components_cards_card_list_albums_card_list_albums_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/cards/card-list-albums/card-list-albums.component */ "Oxw5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









function ListAlbumsSectionComponent_app_placeholder_list_albums_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-placeholder-list-albums");
} }
function ListAlbumsSectionComponent_app_list_albums_2_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-card-list-albums", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "source", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "source", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/album/" + item_r3.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("srcset", item_r3.images == null ? null : item_r3.images.thumbnail_webp, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("srcset", item_r3.images == null ? null : item_r3.images.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r3.images.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ListAlbumsSectionComponent_app_list_albums_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-list-albums");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListAlbumsSectionComponent_app_list_albums_2_li_1_Template, 6, 4, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00E1lbuns");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.list.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r1.total - 95, "");
} }
class ListAlbumsSectionComponent {
    constructor(albumService, dialog) {
        this.albumService = albumService;
        this.dialog = dialog;
        this.firstLoading = true;
        this.list = {
            loading: true,
            items: [],
        };
        this.total = 0;
        this.params = {
            per_page: 95,
            page: 1,
            orderby: 'rand',
        };
    }
    ngOnInit() {
        this.getAlbums();
    }
    getAlbums() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.albumService
                .get({ observe: 'response', params: this.params })
                .subscribe((res) => {
                const { body, headers } = res;
                this.list.items = body;
                this.total = headers.get('X-WP-Total');
                this.list.loading = false;
                this.firstLoading = false;
            }, (err) => {
                this.list.loading = false;
                // console.log(err);
            });
        });
    }
}
ListAlbumsSectionComponent.ɵfac = function ListAlbumsSectionComponent_Factory(t) { return new (t || ListAlbumsSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_album_album_service__WEBPACK_IMPORTED_MODULE_2__["AlbumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
ListAlbumsSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListAlbumsSectionComponent, selectors: [["app-list-albums-section"]], decls: 3, vars: 2, consts: [[4, "ngIf"], ["albumItem", "", 4, "ngFor", "ngForOf"], ["albumItem", "", 1, "length"], [1, "length__wrapper"], ["albumItem", ""], [3, "routerLink"], ["type", "image/webp", 3, "srcset"], ["type", "image/jpeg", 3, "srcset"], ["alt", "", "width", "160", "height", "160", "loading", "lazy", 1, "list-posts__card__image", 3, "src"]], template: function ListAlbumsSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListAlbumsSectionComponent_app_placeholder_list_albums_1_Template, 1, 0, "app-placeholder-list-albums", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ListAlbumsSectionComponent_app_list_albums_2_Template, 8, 2, "app-list-albums", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.firstLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.list.items.length && !ctx.list.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_lists_list_albums_placeholder_list_albums_placeholder_list_albums_component__WEBPACK_IMPORTED_MODULE_5__["PlaceholderListAlbumsComponent"], _components_lists_list_albums_list_albums_component__WEBPACK_IMPORTED_MODULE_6__["ListAlbumsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_cards_card_list_albums_card_list_albums_component__WEBPACK_IMPORTED_MODULE_7__["CardListAlbumsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"]], styles: [".reset-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  -webkit-appearance: none;\n  -webkit-user-select: none;\n          user-select: none;\n  vertical-align: middle;\n  text-decoration: none;\n  text-align: center;\n  background-color: transparent;\n  outline: 0;\n}\n.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n.reset-input[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  display: block;\n  width: 100%;\n  border: 0;\n  background-clip: padding-box;\n  outline: 0;\n}\n.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled) {\n  cursor: text;\n}\n.reset-input[_ngcontent-%COMP%]:disabled, .reset-input.disabled[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.length[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: default;\n}\n.length__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  background-color: #a58058;\n  text-align: center;\n  line-height: 1.5rem;\n  transition: 0.2s all ease;\n}\n.length__wrapper[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .length__wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n.length__wrapper[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 900;\n}\n.length__wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvYmFzZS9oZWxwZXJzL19yZXNldHMuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2xpc3QtYWxidW1zLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zY3NzL2Jhc2UvdmFyaWFibGVzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FDQ0Y7QURDRTtFQUNFLGVBQUE7QUNDSjtBREdBO0VBQ0Usd0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7QUNBRjtBREVFO0VBQ0UsWUFBQTtBQ0FKO0FER0U7RUFFRSxlQUFBO0FDRko7QUE1QkE7RUFDRSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsZUFBQTtBQStCRjtBQTdCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdDWkk7RURhSix5QkNQa0I7RURRbEIsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBK0JKO0FBN0JJOztFQUVFLGNBQUE7QUErQk47QUE1Qkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUE4Qk47QUEzQkk7RUFDRSxpQkFBQTtBQTZCTiIsImZpbGUiOiJsaXN0LWFsYnVtcy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc2V0LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogMDsgLy8gRXN0aWxpemFyIG8gb3V0bGluZSBjb20gYm94LXNoYWRvd1xuXG4gICY6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4ucmVzZXQtaW5wdXQge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBvdXRsaW5lOiAwOyAvLyBFc3RpbGl6YXIgbyBvdXRsaW5lIGNvbSBib3gtc2hhZG93XG5cbiAgJjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKSB7XG4gICAgY3Vyc29yOiB0ZXh0O1xuICB9XG5cbiAgJjpkaXNhYmxlZCxcbiAgJi5kaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG59XG4iLCJAaW1wb3J0IFwic3JjL3Njc3MvYmFzZS9pbXBvcnRzXCI7XG5cbi5sZW5ndGgge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuXG4gICZfX3dyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5LXNoYWRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogcmVtKDI0cHgpO1xuICAgIHRyYW5zaXRpb246IDAuMnMgYWxsIGVhc2U7XG5cbiAgICBzdHJvbmcsXG4gICAgc3BhbiB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICBzdHJvbmcge1xuICAgICAgZm9udC1zaXplOiByZW0oMzJweCk7XG4gICAgICBmb250LXdlaWdodDogOTAwO1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiByZW0oMjRweCk7XG4gICAgfVxuICB9XG59XG4iLCIkYmxhY2s6ICMwMDA7XG4kd2hpdGU6ICNmZmY7XG5cbiRjb2xvci1wcmltYXJ5OiAjYmM5MjY0O1xuJGNvbG9yLXByaW1hcnktcmdiOiAxODgsIDE0NiwgMTAwO1xuJGNvbG9yLXByaW1hcnktY29udHJhc3Q6ICMwMDAwMDA7XG4kY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4kY29sb3ItcHJpbWFyeS1zaGFkZTogI2E1ODA1ODtcbiRjb2xvci1wcmltYXJ5LXRpbnQ6ICNjMzlkNzQ7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM4YThiNTg7XG4kY29sb3Itc2Vjb25kYXJ5LXJnYjogMTM4LCAxMzksIDg4O1xuJGNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogIzAwMDAwMDtcbiRjb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuJGNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzc5N2E0ZDtcbiRjb2xvci1zZWNvbmRhcnktdGludDogIzk2OTc2OTtcblxuJGNvbG9yLXRlcnRpYXJ5OiAjMmY0ODU4O1xuJGNvbG9yLXRlcnRpYXJ5LXJnYjogNDcsIDcyLCA4ODtcbiRjb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiRjb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4kY29sb3ItdGVydGlhcnktc2hhZGU6ICMyOTNmNGQ7XG4kY29sb3ItdGVydGlhcnktdGludDogIzQ0NWE2OTtcblxuJGNvbG9yLXN1Y2Nlc3M6ICM2MGE4ODc7XG4kY29sb3Itc3VjY2Vzcy1yZ2I6IDk2LCAxNjgsIDEzNTtcbiRjb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuJGNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuJGNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICM1NDk0Nzc7XG4kY29sb3Itc3VjY2Vzcy10aW50OiAjNzBiMTkzO1xuXG4kY29sb3Itd2FybmluZzogI2ZmZWJjYztcbiRjb2xvci13YXJuaW5nLXJnYjogMjU1LCAyMzUsIDIwNDtcbiRjb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuJGNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuJGNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGNmYjQ7XG4kY29sb3Itd2FybmluZy10aW50OiAjZmZlZGQxO1xuXG4kY29sb3ItZGFuZ2VyOiAjYzI1NDUyO1xuJGNvbG9yLWRhbmdlci1yZ2I6IDE5NCwgODQsIDgyO1xuJGNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiRjb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuJGNvbG9yLWRhbmdlci1zaGFkZTogI2FiNGE0ODtcbiRjb2xvci1kYW5nZXItdGludDogI2M4NjU2MztcblxuJGNvbG9yLWRhcms6ICMyZjFmMTk7XG4kY29sb3ItZGFyay1yZ2I6IDQ3LCAzMSwgMjU7XG4kY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiRjb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiRjb2xvci1kYXJrLXNoYWRlOiAjMjkxYjE2O1xuJGNvbG9yLWRhcmstdGludDogIzQ0MzUzMDtcblxuJGNvbG9yLW1lZGl1bTogI2I4YTk5YTtcbiRjb2xvci1tZWRpdW0tcmdiOiAxODQsIDE2OSwgMTU0O1xuJGNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiRjb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuJGNvbG9yLW1lZGl1bS1zaGFkZTogI2EyOTU4ODtcbiRjb2xvci1tZWRpdW0tdGludDogI2JmYjJhNDtcblxuJGNvbG9yLWxpZ2h0OiAjZGZlMGRmO1xuJGNvbG9yLWxpZ2h0LXJnYjogMjIzLCAyMjQsIDIyMztcbiRjb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiRjb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4kY29sb3ItbGlnaHQtc2hhZGU6ICNjNGM1YzQ7XG4kY29sb3ItbGlnaHQtdGludDogI2UyZTNlMjtcbiJdfQ== */"] });


/***/ }),

/***/ "VwM2":
/*!******************************************************************************!*\
  !*** ./src/app/pages/home/list-albums-section/list-albums-section.module.ts ***!
  \******************************************************************************/
/*! exports provided: ListAlbumsSectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAlbumsSectionModule", function() { return ListAlbumsSectionModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _list_albums_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-albums-section.component */ "Rpug");
/* harmony import */ var src_app_components_lists_list_albums_list_albums_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/lists/list-albums/list-albums.module */ "0TNI");
/* harmony import */ var src_app_components_cards_card_list_albums_card_list_albums_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/cards/card-list-albums/card-list-albums.module */ "MDt6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_components_lists_list_albums_placeholder_list_albums_placeholder_list_albums_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/lists/list-albums/placeholder-list-albums/placeholder-list-albums.module */ "0xAH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class ListAlbumsSectionModule {
}
ListAlbumsSectionModule.ɵfac = function ListAlbumsSectionModule_Factory(t) { return new (t || ListAlbumsSectionModule)(); };
ListAlbumsSectionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ListAlbumsSectionModule });
ListAlbumsSectionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_app_components_lists_list_albums_placeholder_list_albums_placeholder_list_albums_module__WEBPACK_IMPORTED_MODULE_5__["PlaceholderListAlbumsModule"],
            src_app_components_lists_list_albums_list_albums_module__WEBPACK_IMPORTED_MODULE_2__["ListAlbumsModule"],
            src_app_components_cards_card_list_albums_card_list_albums_module__WEBPACK_IMPORTED_MODULE_3__["CardListAlbumsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ListAlbumsSectionModule, { declarations: [_list_albums_section_component__WEBPACK_IMPORTED_MODULE_1__["ListAlbumsSectionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_app_components_lists_list_albums_placeholder_list_albums_placeholder_list_albums_module__WEBPACK_IMPORTED_MODULE_5__["PlaceholderListAlbumsModule"],
        src_app_components_lists_list_albums_list_albums_module__WEBPACK_IMPORTED_MODULE_2__["ListAlbumsModule"],
        src_app_components_cards_card_list_albums_card_list_albums_module__WEBPACK_IMPORTED_MODULE_3__["CardListAlbumsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_list_albums_section_component__WEBPACK_IMPORTED_MODULE_1__["ListAlbumsSectionComponent"]] }); })();


/***/ }),

/***/ "XKPu":
/*!*************************************************!*\
  !*** ./src/app/services/pages/pages.service.ts ***!
  \*************************************************/
/*! exports provided: PagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesService", function() { return PagesService; });
/* harmony import */ var _base_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/base.service */ "UVkw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PagesService extends _base_base_service__WEBPACK_IMPORTED_MODULE_0__["BaseService"] {
    constructor(httpClient) {
        super(httpClient, `pages`);
        this.httpClient = httpClient;
    }
}
PagesService.ɵfac = function PagesService_Factory(t) { return new (t || PagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PagesService, factory: PagesService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map