exports.ids=[0],exports.modules={"63YN":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return SeoService});var _angular_common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("ofXK"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("fXoL"),_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("jhN1");class SeoService{constructor(doc,meta,title){this.doc=doc,this.meta=meta,this.title=title}updateTitle(title){this.title.setTitle(title)}metatags(data){data.yoast_meta.forEach(meta=>{this.meta.updateTag(meta)})}}SeoService.\u0275fac=function SeoService_Factory(t){return new(t||SeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Wc(_angular_common__WEBPACK_IMPORTED_MODULE_0__.c),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Wc(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.d),_angular_core__WEBPACK_IMPORTED_MODULE_1__.Wc(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.e))},SeoService.\u0275prov=_angular_core__WEBPACK_IMPORTED_MODULE_1__.Ic({token:SeoService,factory:SeoService.\u0275fac,providedIn:"root"})},"Ns+e":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return GenresService});var _base_base_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("UVkw"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("fXoL"),_angular_common_http__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("tk/3");class GenresService extends _base_base_service__WEBPACK_IMPORTED_MODULE_0__.a{constructor(httpClient){super(httpClient,"generos_album"),this.httpClient=httpClient}}GenresService.\u0275fac=function GenresService_Factory(t){return new(t||GenresService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Wc(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.b))},GenresService.\u0275prov=_angular_core__WEBPACK_IMPORTED_MODULE_1__.Ic({token:GenresService,factory:GenresService.\u0275fac,providedIn:"root"})},UVkw:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return BaseService});var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("tk/3"),rxjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("z6cu"),url_join__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("T/ZZ"),url_join__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(url_join__WEBPACK_IMPORTED_MODULE_2__),rxjs_operators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("JIr8"),_environments_environment__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("AytR");function constructApiQueryParams(inputParams){let params=new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.e;if(inputParams&&Object.keys(inputParams).length>0){Object.keys(inputParams).map(key=>{params=params.append(key,inputParams[key])})}return params}class Constants{}Constants.apiRoot=_environments_environment__WEBPACK_IMPORTED_MODULE_4__.a.urlApi;class BaseService{constructor(http,path){this.http=http,this.path=path,this.merchant="",this.unit="",this.endpointUrl=url_join__WEBPACK_IMPORTED_MODULE_2___default()(Constants.apiRoot,this.path)}formatErrors(error){return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__.a)(error)}get(options={}){return options.params=constructApiQueryParams(options.params),this.http.get(this.endpointUrl,options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.a)(this.formatErrors))}getById(id,options={}){options.params=constructApiQueryParams(options.params);const url=url_join__WEBPACK_IMPORTED_MODULE_2___default()(this.endpointUrl,id);return this.http.get(url,options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.a)(this.formatErrors))}create(creationBody,options={}){return options.params=constructApiQueryParams(options.params),this.http.post(this.endpointUrl,creationBody,options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.a)(this.formatErrors))}update(id,updateBody,options={}){options.params=constructApiQueryParams(options.params);const url=url_join__WEBPACK_IMPORTED_MODULE_2___default()(this.endpointUrl,id);return this.http.put(url,updateBody,options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.a)(this.formatErrors))}delete(id,options={}){options.params=constructApiQueryParams(options.params);const url=url_join__WEBPACK_IMPORTED_MODULE_2___default()(this.endpointUrl,id);return this.http.delete(url,options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.a)(this.formatErrors))}}},"kpG/":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return AlbumService});var _base_base_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("UVkw"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("fXoL"),_angular_common_http__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("tk/3");class AlbumService extends _base_base_service__WEBPACK_IMPORTED_MODULE_0__.a{constructor(httpClient){super(httpClient,"album"),this.httpClient=httpClient}}AlbumService.\u0275fac=function AlbumService_Factory(t){return new(t||AlbumService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Wc(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.b))},AlbumService.\u0275prov=_angular_core__WEBPACK_IMPORTED_MODULE_1__.Ic({token:AlbumService,factory:AlbumService.\u0275fac,providedIn:"root"})},zBoC:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return SidebarComponent});var core=__webpack_require__("fXoL"),router=__webpack_require__("tyNb"),common=__webpack_require__("ofXK"),fesm2015_dialog=__webpack_require__("0IaG");function SidebarModalGenresComponent_li_6_Template(rf,ctx){if(1&rf&&(core.Sc(0,"li"),core.Sc(1,"a",3),core.Nc(2,"strong",4),core.Sc(3,"span"),core.yd(4),core.Rc(),core.Rc(),core.Rc()),2&rf){const genre_r1=ctx.$implicit;core.Cc(1),core.gd("href","/genero/"+genre_r1.slug,core.rd),core.Cc(1),core.gd("innerHtml",genre_r1.name,core.qd),core.Cc(2),core.zd(genre_r1.count>1?genre_r1.count+" \xe1lbuns":genre_r1.count+" \xe1lbum")}}class SidebarModalGenresComponent{constructor(modalData){this.modalData=modalData,this.data=[]}ngOnInit(){this.data=this.modalData}}SidebarModalGenresComponent.\u0275fac=function SidebarModalGenresComponent_Factory(t){return new(t||SidebarModalGenresComponent)(core.Mc(fesm2015_dialog.a))},SidebarModalGenresComponent.\u0275cmp=core.Gc({type:SidebarModalGenresComponent,selectors:[["app-sidebar-modal-genres"]],decls:7,vars:2,consts:[["data-menu","albums",1,"sidebar-modal__list"],[1,"sidebar-modal__list__title"],[4,"ngFor","ngForOf"],[3,"href"],[3,"innerHtml"]],template:function SidebarModalGenresComponent_Template(rf,ctx){1&rf&&(core.Sc(0,"div",0),core.Sc(1,"h3",1),core.yd(2),core.Rc(),core.Sc(3,"ol"),core.Sc(4,"li"),core.Sc(5,"ul"),core.wd(6,SidebarModalGenresComponent_li_6_Template,5,3,"li",2),core.Rc(),core.Rc(),core.Rc(),core.Rc()),2&rf&&(core.Cc(2),core.zd(ctx.data.title),core.Cc(4),core.gd("ngForOf",ctx.data.list))},directives:[common.j],styles:[".reset-button[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0;border:0;-webkit-appearance:none;-webkit-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;text-align:center;background-color:initial;outline:0}.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.reset-input[_ngcontent-%COMP%]{-webkit-appearance:none;display:block;width:100%;border:0;background-clip:padding-box;outline:0}.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:text}.reset-input.disabled[_ngcontent-%COMP%], .reset-input[_ngcontent-%COMP%]:disabled{cursor:default}.sidebar-modal__list[_ngcontent-%COMP%]{color:#fff}.sidebar-modal__list[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], .sidebar-modal__list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{width:100%;height:100%;margin:0;padding:0;list-style:none}.sidebar-modal__list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){margin-bottom:.25rem}.sidebar-modal__list[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1.5rem}.sidebar-modal__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{line-height:1.2;font-size:1rem}.sidebar-modal__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;padding:.5rem 1.5rem}.sidebar-modal__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#94734f}.sidebar-modal__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block}.sidebar-modal__list__title[_ngcontent-%COMP%]{position:sticky;top:0;z-index:2;padding:1.5rem 1.5rem .5rem;margin:0 0 1.5rem;font-size:1.375rem;background-color:#a58058}.sidebar-modal__list__subtitle[_ngcontent-%COMP%]{position:sticky;top:3.625rem;z-index:1;background-color:#a58058;margin:0 0 .5rem;padding:.5rem 1.5rem;font-size:1.25rem;cursor:pointer;color:hsla(0,0%,100%,.5)}"]});var fesm2015_forms=__webpack_require__("3Pt+"),Subscription=__webpack_require__("quSY"),Subject=__webpack_require__("XNiG"),debounceTime=__webpack_require__("Kj3r"),distinctUntilChanged=__webpack_require__("/uUt"),album_service=__webpack_require__("kpG/");const _c0=["searchInput"];function SidebarModalSearchComponent_li_8_Template(rf,ctx){if(1&rf&&(core.Sc(0,"li"),core.Sc(1,"a",7),core.Nc(2,"strong",8),core.Nc(3,"span",8),core.Rc(),core.Rc()),2&rf){const item_r2=ctx.$implicit;core.Cc(1),core.gd("routerLink","/album/"+item_r2.slug),core.Cc(1),core.gd("innerHtml",item_r2.title.rendered,core.qd),core.Cc(1),core.gd("innerHtml",item_r2.acf.artist,core.qd)}}const _c1=function(a0){return{"has-value":a0}};class sidebar_modal_search_component_SidebarModalSearchComponent{constructor(albumService){this.albumService=albumService,this.list={loading:!1,items:[]},this.term="",this.searchControl=new fesm2015_forms.b,this.formControlSub=Subscription.a,this.subject=new Subject.a}ngOnInit(){this.formControlSub=this.searchControl.valueChanges.pipe(Object(debounceTime.a)(500),Object(distinctUntilChanged.a)()).subscribe(newValue=>this.get(newValue))}get(newValue){this.term=newValue,this.list.loading=!0;const params={per_page:10,page:1,orderby:"title",search:newValue};if(!newValue)return this.term="",this.list.items=[],void(this.list.loading=!1);this.albumService.get({observe:"response",params:params}).subscribe(res=>{const{body:body,headers:headers}=res;this.list.items=body,this.list.loading=!1},err=>{this.list.loading=!1})}}function SidebarModalComponent_li_4_li_4_Template(rf,ctx){if(1&rf&&(core.Sc(0,"li"),core.Sc(1,"a",4),core.Nc(2,"strong",5),core.Nc(3,"span",5),core.Rc(),core.Rc()),2&rf){const album_r3=ctx.$implicit;core.Cc(1),core.gd("routerLink","/album/"+album_r3.slug),core.Cc(1),core.gd("innerHtml",album_r3.title.rendered,core.qd),core.Cc(1),core.gd("innerHtml",album_r3.acf.artist,core.qd)}}function SidebarModalComponent_li_4_Template(rf,ctx){if(1&rf&&(core.Sc(0,"li"),core.Sc(1,"h4",3),core.yd(2),core.Rc(),core.Sc(3,"ul"),core.wd(4,SidebarModalComponent_li_4_li_4_Template,4,3,"li",2),core.Rc(),core.Rc()),2&rf){const item_r1=ctx.$implicit;core.Cc(2),core.zd(item_r1.title),core.Cc(2),core.gd("ngForOf",item_r1.albums)}}sidebar_modal_search_component_SidebarModalSearchComponent.\u0275fac=function SidebarModalSearchComponent_Factory(t){return new(t||sidebar_modal_search_component_SidebarModalSearchComponent)(core.Mc(album_service.a))},sidebar_modal_search_component_SidebarModalSearchComponent.\u0275cmp=core.Gc({type:sidebar_modal_search_component_SidebarModalSearchComponent,selectors:[["app-sidebar-modal-search"]],viewQuery:function SidebarModalSearchComponent_Query(rf,ctx){if(1&rf&&core.Bd(_c0,1),2&rf){let _t;core.nd(_t=core.ad())&&(ctx.searchInput=_t.first)}},decls:9,vars:6,consts:[["data-menu","albums",1,"sidebar-modal__list"],["autocomplete","off","novalidate","",1,"form"],[1,"form-control"],["id","search","type","text","name","search",3,"value","ngClass","formControl"],["searchInput",""],["for","search"],[4,"ngFor","ngForOf"],[3,"routerLink"],[3,"innerHtml"]],template:function SidebarModalSearchComponent_Template(rf,ctx){1&rf&&(core.Sc(0,"div",0),core.Sc(1,"form",1),core.Sc(2,"div",2),core.Nc(3,"input",3,4),core.Sc(5,"label",5),core.yd(6,"Fa\xe7a sua busca"),core.Rc(),core.Rc(),core.Rc(),core.Sc(7,"ul"),core.wd(8,SidebarModalSearchComponent_li_8_Template,4,3,"li",6),core.Rc(),core.Rc()),2&rf&&(core.Cc(3),core.gd("value",ctx.term)("ngClass",core.jd(4,_c1,ctx.term))("formControl",ctx.searchControl),core.Cc(5),core.gd("ngForOf",ctx.list.items))},directives:[fesm2015_forms.k,fesm2015_forms.g,fesm2015_forms.h,fesm2015_forms.a,common.i,fesm2015_forms.f,fesm2015_forms.c,common.j,router.e],styles:[".reset-button[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0;border:0;-webkit-appearance:none;-webkit-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;text-align:center;background-color:initial;outline:0}.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.reset-input[_ngcontent-%COMP%], .sidebar-modal__list[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{-webkit-appearance:none;display:block;width:100%;border:0;background-clip:padding-box;outline:0}.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled), .sidebar-modal__list[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:text}.reset-input.disabled[_ngcontent-%COMP%], .reset-input[_ngcontent-%COMP%]:disabled, .sidebar-modal__list[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input.disabled[_ngcontent-%COMP%], .sidebar-modal__list[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled{cursor:default}.sidebar-modal__list[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{position:relative;padding:0;width:100%;height:4rem}.sidebar-modal__list[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{min-height:100%}.sidebar-modal__list[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:not(:last-child){margin-bottom:0}.sidebar-modal__list[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:100%;padding:.75rem 1.5rem;background-color:rgba(165,128,88,.6);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);transition:all .2s ease;color:#fff;font-weight:600;font-size:1rem;border-radius:0 .25rem .25rem 0}@media (min-width:768px){.sidebar-modal__list[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:1rem 1.5rem;font-size:1.125rem}}.sidebar-modal__list[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input.has-value[_ngcontent-%COMP%], .sidebar-modal__list[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{padding-top:1.75rem;background-color:rgba(165,128,88,.4)}.sidebar-modal__list[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input.has-value[_ngcontent-%COMP%] + label[_ngcontent-%COMP%], .sidebar-modal__list[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%]{font-size:.75rem;top:0;transform:translateY(12px);font-weight:400}.sidebar-modal__list[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input.has-value[_ngcontent-%COMP%]{border-radius:0 .25rem 0 0}.sidebar-modal__list[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);left:1.5rem;color:#fff;transition:all .2s ease;cursor:text;font-weight:600;font-size:1rem;white-space:nowrap}@media (min-width:768px){.sidebar-modal__list[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1.125rem}}.sidebar-modal__list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none;background-color:#a58058}.sidebar-modal__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{line-height:1.2;font-size:1rem}.sidebar-modal__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;padding:.5rem 1.5rem}.sidebar-modal__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#94734f}.sidebar-modal__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block}"]});class SidebarModalComponent{constructor(dialogRef,modalData){this.dialogRef=dialogRef,this.modalData=modalData,this.data={}}ngOnInit(){this.data=this.modalData}}SidebarModalComponent.\u0275fac=function SidebarModalComponent_Factory(t){return new(t||SidebarModalComponent)(core.Mc(fesm2015_dialog.d),core.Mc(fesm2015_dialog.a))},SidebarModalComponent.\u0275cmp=core.Gc({type:SidebarModalComponent,selectors:[["app-sidebar-modal"]],decls:5,vars:2,consts:[["data-menu","albums",1,"sidebar-modal__list"],[1,"sidebar-modal__list__title"],[4,"ngFor","ngForOf"],["id","-ref",1,"sidebar-modal__list__subtitle"],[3,"routerLink"],[3,"innerHtml"]],template:function SidebarModalComponent_Template(rf,ctx){1&rf&&(core.Sc(0,"div",0),core.Sc(1,"h3",1),core.yd(2),core.Rc(),core.Sc(3,"ol"),core.wd(4,SidebarModalComponent_li_4_Template,5,2,"li",2),core.Rc(),core.Rc()),2&rf&&(core.Cc(2),core.zd(ctx.data.title),core.Cc(2),core.gd("ngForOf",ctx.data.list))},directives:[common.j,router.e],styles:[".reset-button[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0;border:0;-webkit-appearance:none;-webkit-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;text-align:center;background-color:initial;outline:0}.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.reset-input[_ngcontent-%COMP%]{-webkit-appearance:none;display:block;width:100%;border:0;background-clip:padding-box;outline:0}.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:text}.reset-input.disabled[_ngcontent-%COMP%], .reset-input[_ngcontent-%COMP%]:disabled{cursor:default}.sidebar-modal__list[_ngcontent-%COMP%]{color:#fff}.sidebar-modal__list[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], .sidebar-modal__list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{width:100%;height:100%;margin:0;padding:0;list-style:none}.sidebar-modal__list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){margin-bottom:.25rem}.sidebar-modal__list[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1.5rem}.sidebar-modal__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{line-height:1.2;font-size:1rem}.sidebar-modal__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;padding:.5rem 1.5rem}.sidebar-modal__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#94734f}.sidebar-modal__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block}.sidebar-modal__list__title[_ngcontent-%COMP%]{position:sticky;top:0;z-index:2;padding:1.5rem 1.5rem .5rem;margin:0 0 1.5rem;font-size:1.375rem;background-color:#a58058}.sidebar-modal__list__subtitle[_ngcontent-%COMP%]{position:sticky;top:3.625rem;z-index:1;background-color:#a58058;margin:0 0 .5rem;padding:.5rem 1.5rem;font-size:1.25rem;cursor:pointer;color:hsla(0,0%,100%,.5)}"]});var genres_service=__webpack_require__("Ns+e");const sidebar_menu_component_c0=function(a0){return{"is-loading":a0}},sidebar_menu_component_c1=function(a0){return{filled:a0}};class sidebar_menu_component_SidebarMenuComponent{constructor(platformId,dialog,albumService,genresService){this.dialog=dialog,this.albumService=albumService,this.genresService=genresService,this.isBrowser=!1,this.toggleSearch=new core.x,this.searchIsOpened=!1,this.isLoaded=!1,this.selectedModal="",this.albums={loading:!1,loadingMore:!1,list:[],hasMore:!1},this.modals={albums:{title:"\xc1lbuns de A a Z",list:[],isOpen:!1},countries:{title:"Bandas por pa\xedses",list:[],isOpen:!1},years:{title:"Ano de lan\xe7amento",list:[],isOpen:!1},genres:{title:"G\xeaneros",list:[],isOpen:!1}},this.params={page:1,per_page:100,order:"asc",orderby:"title",_fields:["title","slug","acf"]},this.isBrowser=Object(common.q)(platformId)}ngOnInit(){this.getGenres()}getAllPosts(resetList=!1){this.albums.loading=!0,this.albumService.get({observe:"response",params:this.params}).subscribe(res=>{const{body:body,headers:headers}=res;this.isLoaded=!0,this.albums.list=resetList?body:this.albums.list.concat(body),this.albums.loading=!1,this.albums.firstLoading=!1,this.albums.hasMore=this.params.page<headers.get("X-WP-TotalPages"),this.params.page++,this.albums.loadingMore&&(this.albums.loadingMore=!1),this.albums.hasMore?this.loadMore():this.open(this.selectedModal),this.getAlbums(),this.getCountries(),this.getYears()},err=>{this.albums.loading=!1,this.albums.loadingMore&&(this.albums.loadingMore=!1)})}open(modal){this.selectedModal=modal,this.isLoaded?(Object.entries(this.modals).forEach(([key,value])=>{this.modals[key].ref="",this.dialog.closeAll()}),modal.ref=this.dialog.open(SidebarModalComponent,{data:{title:modal.title,list:modal.list},panelClass:["sidebar-modal","sidebar-modal--list"],position:{top:"0px",left:"0px"}})):this.getAllPosts()}openGenres(){const modal=this.modals.genres;this.closeModal(),modal.ref=this.dialog.open(SidebarModalGenresComponent,{data:{title:modal.title,list:modal.list},panelClass:["sidebar-modal","sidebar-modal--list"],position:{top:"0px",left:"0px"}})}loadMore(){this.albums.loadingMore=!0,this.getAllPosts()}getAlbums(){const obj=this.albums.list.reduce((acc,c)=>{const title=c.title.rendered[0];return acc[title]=(acc[title]||[]).concat(c),acc},{});this.modals.albums.list=Object.entries(obj).map(([title,albums])=>({title:title,albums:albums})).sort((a,b)=>a.title-b.title)}getCountries(){const obj=this.albums.list.reduce((acc,c)=>{const title=c.acf.country;return acc[title]=(acc[title]||[]).concat(c),acc},{});this.modals.countries.list=Object.entries(obj).map(([title,albums])=>({title:title,albums:albums})).sort((a,b)=>a.title.charCodeAt(0)-b.title.charCodeAt(0))}getYears(){const obj=this.albums.list.reduce((acc,c)=>{const title=new Date(c.acf.released).getFullYear();return acc[title]=(acc[title]||[]).concat(c),acc},{});this.modals.years.list=Object.entries(obj).map(([title,albums])=>({title:title,albums:albums})).sort((a,b)=>a.title-b.title)}getGenres(){if(!this.isBrowser)return;this.genresService.get({params:{per_page:100,page:1}}).subscribe(res=>{this.modals.genres.list=res})}openSearch(){this.closeModal(),this.searchIsOpened?this.closeModal():this.dialog.open(sidebar_modal_search_component_SidebarModalSearchComponent,{panelClass:["sidebar-modal","sidebar-modal--search"],position:{top:"0px",left:"0px"}}),this.searchIsOpened=!this.searchIsOpened}closeModal(){Object.entries(this.modals).forEach(([key,value])=>{this.modals[key].ref="",this.dialog.closeAll()})}}sidebar_menu_component_SidebarMenuComponent.\u0275fac=function SidebarMenuComponent_Factory(t){return new(t||sidebar_menu_component_SidebarMenuComponent)(core.Mc(core.V),core.Mc(fesm2015_dialog.b),core.Mc(album_service.a),core.Mc(genres_service.a))},sidebar_menu_component_SidebarMenuComponent.\u0275cmp=core.Gc({type:sidebar_menu_component_SidebarMenuComponent,selectors:[["app-sidebar-menu"]],outputs:{toggleSearch:"toggleSearch"},decls:16,vars:10,consts:[[1,"sidebar-menu",3,"ngClass"],["aria-title","Campo de busca","title","Campo de busca",1,"sidebar-menu__item","search",3,"ngClass","click"],["aria-hidden","true",1,"fas","fa-search"],["aria-title","\xc1lbuns de A a Z","title","\xc1lbuns de A a Z",1,"sidebar-menu__item",3,"click"],["aria-hidden","true",1,"fas",3,"ngClass"],["aria-title","Bandas por pa\xedses","title","Bandas por pa\xedses",1,"sidebar-menu__item",3,"click"],["aria-title","Ano de lan\xe7amento","title","Ano de lan\xe7amento",1,"sidebar-menu__item",3,"click"],["aria-title","G\xeaneros","title","G\xeaneros",1,"sidebar-menu__item",3,"click"]],template:function SidebarMenuComponent_Template(rf,ctx){1&rf&&(core.Sc(0,"ul",0),core.Sc(1,"li"),core.Sc(2,"button",1),core.Zc("click",function SidebarMenuComponent_Template_button_click_2_listener(){return ctx.openSearch()}),core.Nc(3,"i",2),core.Rc(),core.Rc(),core.Sc(4,"li"),core.Sc(5,"button",3),core.Zc("click",function SidebarMenuComponent_Template_button_click_5_listener(){return ctx.open(ctx.modals.albums)}),core.Nc(6,"i",4),core.Rc(),core.Rc(),core.Sc(7,"li"),core.Sc(8,"button",5),core.Zc("click",function SidebarMenuComponent_Template_button_click_8_listener(){return ctx.open(ctx.modals.countries)}),core.Nc(9,"i",4),core.Rc(),core.Rc(),core.Sc(10,"li"),core.Sc(11,"button",6),core.Zc("click",function SidebarMenuComponent_Template_button_click_11_listener(){return ctx.open(ctx.modals.years)}),core.Nc(12,"i",4),core.Rc(),core.Rc(),core.Sc(13,"li"),core.Sc(14,"button",7),core.Zc("click",function SidebarMenuComponent_Template_button_click_14_listener(){return ctx.openGenres()}),core.Nc(15,"i",4),core.Rc(),core.Rc(),core.Rc()),2&rf&&(core.gd("ngClass",core.jd(6,sidebar_menu_component_c0,ctx.albums.loading)),core.Cc(2),core.gd("ngClass",core.jd(8,sidebar_menu_component_c1,ctx.searchIsOpened)),core.Cc(4),core.gd("ngClass",ctx.albums.loading?"fa-circle-notch":"fa-compact-disc"),core.Cc(3),core.gd("ngClass",ctx.albums.loading?"fa-circle-notch":"fa-globe"),core.Cc(3),core.gd("ngClass",ctx.albums.loading?"fa-circle-notch":"fa-calendar-check"),core.Cc(3),core.gd("ngClass",ctx.albums.loading?"fa-circle-notch":"fa-book"))},directives:[common.i],styles:[".reset-button[_ngcontent-%COMP%], .sidebar-menu__item[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0;border:0;-webkit-appearance:none;-webkit-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;text-align:center;background-color:initial;outline:0}.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled), .sidebar-menu__item[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.reset-input[_ngcontent-%COMP%]{-webkit-appearance:none;display:block;width:100%;border:0;background-clip:padding-box;outline:0}.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:text}.reset-input.disabled[_ngcontent-%COMP%], .reset-input[_ngcontent-%COMP%]:disabled{cursor:default}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.sidebar-menu[_ngcontent-%COMP%]{flex:1;margin:0;padding:0;list-style:none}.sidebar-menu.is-loading[_ngcontent-%COMP%]   .sidebar-menu__item[_ngcontent-%COMP%]:not(.search){opacity:.5;pointer-events:none}.sidebar-menu.is-loading[_ngcontent-%COMP%]   .sidebar-menu__item[_ngcontent-%COMP%]:not(.search)   i[_ngcontent-%COMP%]{animation:rotate 1s linear infinite}.sidebar-menu__item[_ngcontent-%COMP%]{width:100%;height:3rem;font-size:1.25rem;color:#fff;transition:all .2s ease}@media (min-width:768px){.sidebar-menu__item[_ngcontent-%COMP%]{height:4rem;font-size:1.5rem}}.sidebar-menu__item.active[_ngcontent-%COMP%], .sidebar-menu__item[_ngcontent-%COMP%]:hover{background-color:#a58058}.sidebar-menu__item.filled[_ngcontent-%COMP%]{background-color:#94734f}"]});class SidebarSocialComponent{constructor(){}ngOnInit(){}}SidebarSocialComponent.\u0275fac=function SidebarSocialComponent_Factory(t){return new(t||SidebarSocialComponent)},SidebarSocialComponent.\u0275cmp=core.Gc({type:SidebarSocialComponent,selectors:[["app-sidebar-social"]],decls:19,vars:0,consts:[[1,"sidebar-social"],["href","https://t.me/bandas1album","target","_blank","aria-label","Telegram","title","Entre em nosso grupo do Telegram",1,"sidebar-social__item","telegram"],["aria-hidden","true",1,"fab","fa-telegram-plane"],["href","https://instagram.com/bandas1album","target","_blank","aria-label","Instagram","title","Siga-nos no Instagram",1,"sidebar-social__item","instagram"],["aria-hidden","true",1,"fab","fa-instagram"],["href","https://facebook.com/bandas1album","target","_blank","aria-label","Facebook","title","Curta nossa p\xe1gina no Facebook",1,"sidebar-social__item","facebook"],["aria-hidden","Facebook",1,"fab","fa-facebook-square"],["href","https://open.spotify.com/user/ryyq8vjpuf4vgfgll9zoecplr?si=09LFT22HQaaRIgfIkIatEw","target","_blank","aria-label","Spotify","title","Ou\xe7a nossas playlists no Spotify",1,"sidebar-social__item","spotify"],["aria-hidden","true",1,"fab","fa-spotify"],["href","https://www.youtube.com/channel/UCBFLR6baFsadrq2MswNT5KQ","target","_blank","aria-label","YouTube","title","Inscreva-se em nosso canal do YouTube",1,"sidebar-social__item","youtube"],["aria-hidden","true",1,"fab","fa-youtube"],["href","/feed.xml","target","_blank","aria-label","RSS Feed","title","Assine nosso RSS Feed",1,"sidebar-social__item","rss"],["aria-hidden","true",1,"fas","fa-rss"]],template:function SidebarSocialComponent_Template(rf,ctx){1&rf&&(core.Sc(0,"ul",0),core.Sc(1,"li"),core.Sc(2,"a",1),core.Nc(3,"i",2),core.Rc(),core.Rc(),core.Sc(4,"li"),core.Sc(5,"a",3),core.Nc(6,"i",4),core.Rc(),core.Rc(),core.Sc(7,"li"),core.Sc(8,"a",5),core.Nc(9,"i",6),core.Rc(),core.Rc(),core.Sc(10,"li"),core.Sc(11,"a",7),core.Nc(12,"i",8),core.Rc(),core.Rc(),core.Sc(13,"li"),core.Sc(14,"a",9),core.Nc(15,"i",10),core.Rc(),core.Rc(),core.Sc(16,"li"),core.Sc(17,"a",11),core.Nc(18,"i",12),core.Rc(),core.Rc(),core.Rc())},styles:[".reset-button[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0;border:0;-webkit-appearance:none;-webkit-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;text-align:center;background-color:initial;outline:0}.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.reset-input[_ngcontent-%COMP%]{-webkit-appearance:none;display:block;width:100%;border:0;background-clip:padding-box;outline:0}.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:text}.reset-input.disabled[_ngcontent-%COMP%], .reset-input[_ngcontent-%COMP%]:disabled{cursor:default}.sidebar-social[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none}.sidebar-social__item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;padding:.5rem 0;font-size:1.125rem}@media (min-width:768px){.sidebar-social__item[_ngcontent-%COMP%]{font-size:1.5rem}}"]});class SidebarComponent{constructor(){}ngOnInit(){}}SidebarComponent.\u0275fac=function SidebarComponent_Factory(t){return new(t||SidebarComponent)},SidebarComponent.\u0275cmp=core.Gc({type:SidebarComponent,selectors:[["app-sidebar"]],decls:7,vars:0,consts:[[1,"sidebar"],[1,"sidebar-nav"],[1,"sidebar__wrapper"],["routerLink","/","title","Bandas de 1 \xc1lbum",1,"sidebar-nav__logo"],["src","/assets/img/logo.png","loading","lazy","alt",""]],template:function SidebarComponent_Template(rf,ctx){1&rf&&(core.Sc(0,"aside",0),core.Sc(1,"nav",1),core.Sc(2,"div",2),core.Sc(3,"a",3),core.Nc(4,"img",4),core.Rc(),core.Nc(5,"app-sidebar-menu"),core.Nc(6,"app-sidebar-social"),core.Rc(),core.Rc(),core.Rc())},directives:[router.e,sidebar_menu_component_SidebarMenuComponent,SidebarSocialComponent],styles:[".reset-button[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0;border:0;-webkit-appearance:none;-webkit-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;text-align:center;background-color:initial;outline:0}.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.reset-input[_ngcontent-%COMP%]{-webkit-appearance:none;display:block;width:100%;border:0;background-clip:padding-box;outline:0}.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:text}.reset-input.disabled[_ngcontent-%COMP%], .reset-input[_ngcontent-%COMP%]:disabled{cursor:default}.sidebar[_ngcontent-%COMP%]{position:relative;display:flex;min-height:100%;z-index:9}.sidebar__wrapper[_ngcontent-%COMP%]{position:sticky;top:0;display:flex;flex-direction:column;height:100vh;padding:1.5rem 0;overflow-y:scroll}.sidebar-nav[_ngcontent-%COMP%]{position:relative;z-index:2;width:4rem;background-color:#bc9264;box-shadow:.25rem 0 .5rem rgba(0,0,0,.05)}.sidebar-nav[_ngcontent-%COMP%]   .sidebar__wrapper[_ngcontent-%COMP%]{overflow:hidden}.sidebar-nav__logo[_ngcontent-%COMP%]{display:block;width:2rem;height:2rem;margin:auto auto 1.5rem}.sidebar-nav__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.sidebar[_ngcontent-%COMP%]   app-sidebar-menu[_ngcontent-%COMP%]{flex:1}"]})},zWxg:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return SidebarModule});var common=__webpack_require__("ofXK"),router=__webpack_require__("tyNb"),core=__webpack_require__("fXoL");class SidebarModalModule{}SidebarModalModule.\u0275fac=function SidebarModalModule_Factory(t){return new(t||SidebarModalModule)},SidebarModalModule.\u0275mod=core.Kc({type:SidebarModalModule}),SidebarModalModule.\u0275inj=core.Jc({imports:[[common.b,router.f]]});var dialog=__webpack_require__("0IaG");class SidebarModalGenresModule{}SidebarModalGenresModule.\u0275fac=function SidebarModalGenresModule_Factory(t){return new(t||SidebarModalGenresModule)},SidebarModalGenresModule.\u0275mod=core.Kc({type:SidebarModalGenresModule}),SidebarModalGenresModule.\u0275inj=core.Jc({imports:[[common.b,router.f]]});var fesm2015_forms=__webpack_require__("3Pt+");class SidebarModalSearchModule{}SidebarModalSearchModule.\u0275fac=function SidebarModalSearchModule_Factory(t){return new(t||SidebarModalSearchModule)},SidebarModalSearchModule.\u0275mod=core.Kc({type:SidebarModalSearchModule}),SidebarModalSearchModule.\u0275inj=core.Jc({imports:[[common.b,router.f,fesm2015_forms.d,fesm2015_forms.j]]});class SidebarMenuModule{}SidebarMenuModule.\u0275fac=function SidebarMenuModule_Factory(t){return new(t||SidebarMenuModule)},SidebarMenuModule.\u0275mod=core.Kc({type:SidebarMenuModule}),SidebarMenuModule.\u0275inj=core.Jc({imports:[[common.b,dialog.c,SidebarModalModule,SidebarModalGenresModule,SidebarModalSearchModule]]});class SidebarSocialModule{}SidebarSocialModule.\u0275fac=function SidebarSocialModule_Factory(t){return new(t||SidebarSocialModule)},SidebarSocialModule.\u0275mod=core.Kc({type:SidebarSocialModule}),SidebarSocialModule.\u0275inj=core.Jc({imports:[[common.b]]});class SidebarFooterModule{}SidebarFooterModule.\u0275fac=function SidebarFooterModule_Factory(t){return new(t||SidebarFooterModule)},SidebarFooterModule.\u0275mod=core.Kc({type:SidebarFooterModule}),SidebarFooterModule.\u0275inj=core.Jc({imports:[[common.b,router.f]]});class SidebarModule{}SidebarModule.\u0275fac=function SidebarModule_Factory(t){return new(t||SidebarModule)},SidebarModule.\u0275mod=core.Kc({type:SidebarModule}),SidebarModule.\u0275inj=core.Jc({imports:[[common.b,SidebarMenuModule,SidebarSocialModule,SidebarFooterModule,router.f]]})}};