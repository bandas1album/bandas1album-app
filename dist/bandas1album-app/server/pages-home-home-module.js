exports.ids=[5],exports.modules={"0TNI":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return ListAlbumsModule});var _angular_common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("ofXK"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("fXoL");class ListAlbumsModule{}ListAlbumsModule.\u0275fac=function ListAlbumsModule_Factory(t){return new(t||ListAlbumsModule)},ListAlbumsModule.\u0275mod=_angular_core__WEBPACK_IMPORTED_MODULE_1__.Kc({type:ListAlbumsModule}),ListAlbumsModule.\u0275inj=_angular_core__WEBPACK_IMPORTED_MODULE_1__.Jc({imports:[[_angular_common__WEBPACK_IMPORTED_MODULE_0__.b]]})},"0xAH":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return PlaceholderListAlbumsModule});var _angular_common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("ofXK"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("fXoL");class PlaceholderListAlbumsModule{}PlaceholderListAlbumsModule.\u0275fac=function PlaceholderListAlbumsModule_Factory(t){return new(t||PlaceholderListAlbumsModule)},PlaceholderListAlbumsModule.\u0275mod=_angular_core__WEBPACK_IMPORTED_MODULE_1__.Kc({type:PlaceholderListAlbumsModule}),PlaceholderListAlbumsModule.\u0275inj=_angular_core__WEBPACK_IMPORTED_MODULE_1__.Jc({imports:[[_angular_common__WEBPACK_IMPORTED_MODULE_0__.b]]})},"4LSP":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return ListAlbumsComponent});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("fXoL");const _c0=[[["","albumItem",""]]];class ListAlbumsComponent{constructor(){}ngOnInit(){}}ListAlbumsComponent.\u0275fac=function ListAlbumsComponent_Factory(t){return new(t||ListAlbumsComponent)},ListAlbumsComponent.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Gc({type:ListAlbumsComponent,selectors:[["app-list-albums"]],ngContentSelectors:["[albumItem]"],decls:3,vars:0,template:function ListAlbumsComponent_Template(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.fd(_c0),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Sc(0,"div"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Sc(1,"ul"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.ed(2),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Rc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Rc())},styles:[".reset-button[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0;border:0;-webkit-appearance:none;-webkit-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;text-align:center;background-color:initial;outline:0}.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.reset-input[_ngcontent-%COMP%]{-webkit-appearance:none;display:block;width:100%;border:0;background-clip:padding-box;outline:0}.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:text}.reset-input.disabled[_ngcontent-%COMP%], .reset-input[_ngcontent-%COMP%]:disabled{cursor:default}[_nghost-%COMP%]     li{width:100%}@media (min-width:360px){[_nghost-%COMP%]     li{width:50%}}@media (min-width:768px){[_nghost-%COMP%]     li{width:25%}}@media (min-width:1024px){[_nghost-%COMP%]     li{width:16.666666667%}}@media (min-width:1440px){[_nghost-%COMP%]     li{width:12.5%}}@media (min-width:1920px){[_nghost-%COMP%]     li{width:8.333%}}ul[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;width:100%;list-style:none;margin:0;padding:0}"]})},"99Un":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"HomeModule",function(){return HomeModule});var common=__webpack_require__("ofXK"),router=__webpack_require__("tyNb"),core=__webpack_require__("fXoL"),base_service=__webpack_require__("UVkw"),http=__webpack_require__("tk/3");class pages_service_PagesService extends base_service.a{constructor(httpClient){super(httpClient,"pages"),this.httpClient=httpClient}}pages_service_PagesService.\u0275fac=function PagesService_Factory(t){return new(t||pages_service_PagesService)(core.Wc(http.b))},pages_service_PagesService.\u0275prov=core.Ic({token:pages_service_PagesService,factory:pages_service_PagesService.\u0275fac,providedIn:"root"});var seo_service=__webpack_require__("63YN"),sidebar_component=__webpack_require__("zBoC"),tslib=__webpack_require__("zOht"),album_service=__webpack_require__("kpG/"),fesm2015_dialog=__webpack_require__("0IaG"),placeholder_list_albums_component=__webpack_require__("nhpI"),list_albums_component=__webpack_require__("4LSP"),card_list_albums_component=__webpack_require__("Oxw5");function ListAlbumsSectionComponent_app_placeholder_list_albums_1_Template(rf,ctx){1&rf&&core.Nc(0,"app-placeholder-list-albums")}function ListAlbumsSectionComponent_app_list_albums_2_li_1_Template(rf,ctx){if(1&rf&&(core.Sc(0,"li",4),core.Sc(1,"app-card-list-albums",5),core.Sc(2,"picture"),core.Nc(3,"source",6),core.Nc(4,"source",7),core.Nc(5,"img",8),core.Rc(),core.Rc(),core.Rc()),2&rf){const item_r3=ctx.$implicit;core.Cc(1),core.gd("routerLink","/album/"+item_r3.slug),core.Cc(2),core.gd("srcset",null==item_r3.images?null:item_r3.images.thumbnail_webp,core.rd),core.Cc(1),core.gd("srcset",null==item_r3.images?null:item_r3.images.thumbnail,core.rd),core.Cc(1),core.gd("src",item_r3.images.thumbnail,core.rd)}}function ListAlbumsSectionComponent_app_list_albums_2_Template(rf,ctx){if(1&rf&&(core.Sc(0,"app-list-albums"),core.wd(1,ListAlbumsSectionComponent_app_list_albums_2_li_1_Template,6,4,"li",1),core.Sc(2,"li",2),core.Sc(3,"div",3),core.Sc(4,"strong"),core.yd(5),core.Rc(),core.Sc(6,"span"),core.yd(7,"\xe1lbuns"),core.Rc(),core.Rc(),core.Rc(),core.Rc()),2&rf){const ctx_r1=core.bd();core.Cc(1),core.gd("ngForOf",ctx_r1.list.items),core.Cc(4),core.Ad("+",ctx_r1.total-95,"")}}class list_albums_section_component_ListAlbumsSectionComponent{constructor(platformId,albumService,dialog){this.albumService=albumService,this.dialog=dialog,this.isBrowser=!1,this.firstLoading=!0,this.list={loading:!0,items:[]},this.total=0,this.params={per_page:95,page:1,orderby:"rand"},this.isBrowser=Object(common.q)(platformId)}ngOnInit(){this.getAlbums()}getAlbums(){return Object(tslib.__awaiter)(this,void 0,void 0,function*(){this.isBrowser&&(yield this.albumService.get({observe:"response",params:this.params}).subscribe(res=>{const{body:body,headers:headers}=res;this.list.items=body,this.total=headers.get("X-WP-Total"),this.list.loading=!1,this.firstLoading=!1},err=>{this.list.loading=!1}))})}}list_albums_section_component_ListAlbumsSectionComponent.\u0275fac=function ListAlbumsSectionComponent_Factory(t){return new(t||list_albums_section_component_ListAlbumsSectionComponent)(core.Mc(core.V),core.Mc(album_service.a),core.Mc(fesm2015_dialog.b))},list_albums_section_component_ListAlbumsSectionComponent.\u0275cmp=core.Gc({type:list_albums_section_component_ListAlbumsSectionComponent,selectors:[["app-list-albums-section"]],decls:3,vars:2,consts:[[4,"ngIf"],["albumItem","",4,"ngFor","ngForOf"],["albumItem","",1,"length"],[1,"length__wrapper"],["albumItem",""],[3,"routerLink"],["type","image/webp",3,"srcset"],["type","image/jpeg",3,"srcset"],["alt","","width","160","height","160","loading","lazy",1,"list-posts__card__image",3,"src"]],template:function ListAlbumsSectionComponent_Template(rf,ctx){1&rf&&(core.Sc(0,"section"),core.wd(1,ListAlbumsSectionComponent_app_placeholder_list_albums_1_Template,1,0,"app-placeholder-list-albums",0),core.wd(2,ListAlbumsSectionComponent_app_list_albums_2_Template,8,2,"app-list-albums",0),core.Rc()),2&rf&&(core.Cc(1),core.gd("ngIf",ctx.firstLoading),core.Cc(1),core.gd("ngIf",ctx.list.items.length&&!ctx.list.loading))},directives:[common.k,placeholder_list_albums_component.a,list_albums_component.a,common.j,card_list_albums_component.a,router.d],styles:[".reset-button[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0;border:0;-webkit-appearance:none;-webkit-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;text-align:center;background-color:initial;outline:0}.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.reset-input[_ngcontent-%COMP%]{-webkit-appearance:none;display:block;width:100%;border:0;background-clip:padding-box;outline:0}.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:text}.length[_ngcontent-%COMP%], .reset-input.disabled[_ngcontent-%COMP%], .reset-input[_ngcontent-%COMP%]:disabled{cursor:default}.length[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.length__wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;height:100%;color:#fff;background-color:#a58058;text-align:center;line-height:1.5rem;transition:all .2s ease}.length__wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .length__wrapper[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block}.length__wrapper[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:2rem;font-weight:900}.length__wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.5rem}"]});class home_component_HomeComponent{constructor(platformId,pagesService,seoService){this.pagesService=pagesService,this.seoService=seoService,this.isBrowser=!1,this.params={slug:"homepage"},this.isBrowser=Object(common.q)(platformId)}ngOnInit(){this.get()}get(){this.isBrowser&&this.pagesService.get({params:this.params}).subscribe(res=>{const data=res[0];data.yoast_meta.map(item=>{"og:title"===item.property&&this.seoService.updateTitle(item.content)}),this.seoService.metatags(data)})}}home_component_HomeComponent.\u0275fac=function HomeComponent_Factory(t){return new(t||home_component_HomeComponent)(core.Mc(core.V),core.Mc(pages_service_PagesService),core.Mc(seo_service.a))},home_component_HomeComponent.\u0275cmp=core.Gc({type:home_component_HomeComponent,selectors:[["app-home"]],decls:5,vars:0,consts:[[1,"main","default"],["routerLink","/random","title","Modo rand\xf4mico","aria-title","Modo rand\xf4mico",1,"wrapper__button"],["aria-hidden","true",1,"fas","fa-random"]],template:function HomeComponent_Template(rf,ctx){1&rf&&(core.Sc(0,"main",0),core.Nc(1,"app-sidebar"),core.Nc(2,"app-list-albums-section"),core.Rc(),core.Sc(3,"a",1),core.Nc(4,"i",2),core.Rc())},directives:[sidebar_component.a,list_albums_section_component_ListAlbumsSectionComponent,router.e],styles:[".reset-button[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0;border:0;-webkit-appearance:none;-webkit-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;text-align:center;background-color:initial;outline:0}.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.reset-input[_ngcontent-%COMP%]{-webkit-appearance:none;display:block;width:100%;border:0;background-clip:padding-box;outline:0}.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:text}.reset-input.disabled[_ngcontent-%COMP%], .reset-input[_ngcontent-%COMP%]:disabled{cursor:default}.main[_ngcontent-%COMP%]{display:flex}.wrapper__button[_ngcontent-%COMP%]{left:5.5rem;bottom:1.5rem}"]});const routes=[{path:"",component:home_component_HomeComponent}];class HomeRoutingModule{}HomeRoutingModule.\u0275fac=function HomeRoutingModule_Factory(t){return new(t||HomeRoutingModule)},HomeRoutingModule.\u0275mod=core.Kc({type:HomeRoutingModule}),HomeRoutingModule.\u0275inj=core.Jc({imports:[[router.f.forChild(routes)],router.f]});var sidebar_module=__webpack_require__("zWxg"),list_albums_module=__webpack_require__("0TNI"),card_list_albums_module=__webpack_require__("MDt6"),placeholder_list_albums_module=__webpack_require__("0xAH");class ListAlbumsSectionModule{}ListAlbumsSectionModule.\u0275fac=function ListAlbumsSectionModule_Factory(t){return new(t||ListAlbumsSectionModule)},ListAlbumsSectionModule.\u0275mod=core.Kc({type:ListAlbumsSectionModule}),ListAlbumsSectionModule.\u0275inj=core.Jc({imports:[[common.b,placeholder_list_albums_module.a,list_albums_module.a,card_list_albums_module.a,router.f]]});class HomeModule{}HomeModule.\u0275fac=function HomeModule_Factory(t){return new(t||HomeModule)},HomeModule.\u0275mod=core.Kc({type:HomeModule}),HomeModule.\u0275inj=core.Jc({imports:[[common.b,HomeRoutingModule,sidebar_module.a,ListAlbumsSectionModule]]})},MDt6:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return CardListAlbumsModule});var _angular_common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("ofXK"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("fXoL");class CardListAlbumsModule{}CardListAlbumsModule.\u0275fac=function CardListAlbumsModule_Factory(t){return new(t||CardListAlbumsModule)},CardListAlbumsModule.\u0275mod=_angular_core__WEBPACK_IMPORTED_MODULE_1__.Kc({type:CardListAlbumsModule}),CardListAlbumsModule.\u0275inj=_angular_core__WEBPACK_IMPORTED_MODULE_1__.Jc({imports:[[_angular_common__WEBPACK_IMPORTED_MODULE_0__.b]]})},Oxw5:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return CardListAlbumsComponent});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("fXoL");const _c0=[[["picture"]]];class CardListAlbumsComponent{constructor(){}ngOnInit(){}}CardListAlbumsComponent.\u0275fac=function CardListAlbumsComponent_Factory(t){return new(t||CardListAlbumsComponent)},CardListAlbumsComponent.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Gc({type:CardListAlbumsComponent,selectors:[["app-card-list-albums"]],ngContentSelectors:["picture"],decls:3,vars:0,consts:[[1,"card"],[1,"card__figure"]],template:function CardListAlbumsComponent_Template(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.fd(_c0),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Sc(0,"div",0),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Sc(1,"figure",1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.ed(2),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Rc(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Rc())},styles:[".reset-button[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0;border:0;-webkit-appearance:none;-webkit-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;text-align:center;background-color:initial;outline:0}.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.reset-input[_ngcontent-%COMP%]{-webkit-appearance:none;display:block;width:100%;border:0;background-clip:padding-box;outline:0}.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:text}.reset-input.disabled[_ngcontent-%COMP%], .reset-input[_ngcontent-%COMP%]:disabled{cursor:default}[_nghost-%COMP%]     img{object-fit:cover}.card[_ngcontent-%COMP%], [_nghost-%COMP%]     img{width:100%;height:100%;display:block}.card[_ngcontent-%COMP%]{filter:grayscale(1);transition:all .2s ease;opacity:.8;cursor:pointer}.card[_ngcontent-%COMP%]:hover{filter:grayscale(0);opacity:1}.card__figure[_ngcontent-%COMP%]{margin:0}"]})},nhpI:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return PlaceholderListAlbumsComponent});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("fXoL"),_angular_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("ofXK");function PlaceholderListAlbumsComponent_div_1_Template(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Sc(0,"div",2),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Nc(1,"img",3),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Rc())}class PlaceholderListAlbumsComponent{constructor(){this.items=Array(48)}ngOnInit(){}}PlaceholderListAlbumsComponent.\u0275fac=function PlaceholderListAlbumsComponent_Factory(t){return new(t||PlaceholderListAlbumsComponent)},PlaceholderListAlbumsComponent.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Gc({type:PlaceholderListAlbumsComponent,selectors:[["app-placeholder-list-albums"]],decls:2,vars:1,consts:[[1,"placeholder-list"],["class","placeholder-card",4,"ngFor","ngForOf"],[1,"placeholder-card"],["src","/assets/img/logo.png",1,"placeholder-image"]],template:function PlaceholderListAlbumsComponent_Template(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Sc(0,"div",0),_angular_core__WEBPACK_IMPORTED_MODULE_0__.wd(1,PlaceholderListAlbumsComponent_div_1_Template,2,0,"div",1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Rc()),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Cc(1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.gd("ngForOf",ctx.items))},directives:[_angular_common__WEBPACK_IMPORTED_MODULE_1__.j],styles:['.reset-button[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0;border:0;-webkit-appearance:none;-webkit-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;text-align:center;background-color:initial;outline:0}.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.reset-input[_ngcontent-%COMP%]{-webkit-appearance:none;display:block;width:100%;border:0;background-clip:padding-box;outline:0}.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:text}.reset-input.disabled[_ngcontent-%COMP%], .reset-input[_ngcontent-%COMP%]:disabled{cursor:default}@keyframes loading{0%{opacity:.4}to{opacity:.8}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.placeholder-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;list-style:none;margin:0;padding:0;width:100%}.placeholder-card[_ngcontent-%COMP%]{position:relative;width:100%;animation:loading 1s infinite alternate;background-color:#a58058}.placeholder-card[_ngcontent-%COMP%]:before{top:20%;width:60%;height:60%;background-image:linear-gradient(90deg,#bc9264,#a58058);animation:rotate 2s linear infinite}.placeholder-card[_ngcontent-%COMP%]:after, .placeholder-card[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;right:0;display:block;border-radius:50%;margin:auto}.placeholder-card[_ngcontent-%COMP%]:after{top:50%;transform:translateY(-50%);z-index:1;width:15%;height:15%;background-color:#a58058}@media (min-width:360px){.placeholder-card[_ngcontent-%COMP%]{width:50%}}@media (min-width:768px){.placeholder-card[_ngcontent-%COMP%]{width:25%}}@media (min-width:1024px){.placeholder-card[_ngcontent-%COMP%]{width:16.666666667%}}@media (min-width:1440px){.placeholder-card[_ngcontent-%COMP%]{width:12.5%}}@media (min-width:1920px){.placeholder-card[_ngcontent-%COMP%]{width:8.333%}}.placeholder-image[_ngcontent-%COMP%]{display:block;width:100%;height:100%;opacity:0}']})}};