exports.ids=[6],exports.modules={"+mCS":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"RandomModule",function(){return RandomModule});var common=__webpack_require__("ofXK"),fesm2015_router=__webpack_require__("tyNb"),core=__webpack_require__("fXoL"),album_service=__webpack_require__("kpG/");class random_component_RandomComponent{constructor(platformId,albumService,router){this.albumService=albumService,this.router=router,this.isBrowser=!1,this.params={page:1,per_page:1,orderby:"rand"},this.isBrowser=Object(common.q)(platformId)}ngOnInit(){this.getAlbums()}getAlbums(){this.isBrowser&&this.albumService.get({params:this.params}).subscribe(res=>{const data=res[0];this.router.navigateByUrl(`/album/${data.slug}`)},err=>{})}}random_component_RandomComponent.\u0275fac=function RandomComponent_Factory(t){return new(t||random_component_RandomComponent)(core.Mc(core.V),core.Mc(album_service.a),core.Mc(fesm2015_router.c))},random_component_RandomComponent.\u0275cmp=core.Gc({type:random_component_RandomComponent,selectors:[["app-random"]],decls:8,vars:0,consts:[["role","main",1,"main"],[1,"wrapper"],["src","/assets/img/logo.png","loading","lazy","alt","Bandas de 1 \xc1lbum",1,"spinner"]],template:function RandomComponent_Template(rf,ctx){1&rf&&(core.Sc(0,"main",0),core.Sc(1,"section"),core.Sc(2,"div",1),core.Nc(3,"img",2),core.Sc(4,"h1"),core.yd(5,"Modo rand\xf4mico ativado!"),core.Rc(),core.Sc(6,"h2"),core.yd(7,"Estamos escolhendo um \xe1lbum para voc\xea..."),core.Rc(),core.Rc(),core.Rc(),core.Rc())},styles:['.reset-button[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0;border:0;-webkit-appearance:none;-webkit-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;text-align:center;background-color:initial;outline:0}.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.reset-input[_ngcontent-%COMP%]{-webkit-appearance:none;display:block;width:100%;border:0;background-clip:padding-box;outline:0}.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:text}.reset-input.disabled[_ngcontent-%COMP%], .reset-input[_ngcontent-%COMP%]:disabled{cursor:default}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes bg{0%{transform:translateZ(0)}to{transform:translate3d(0,-974px,0)}}.main[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;min-height:100vh}.main[_ngcontent-%COMP%]:before{content:"";display:block;position:absolute;top:0;left:0;z-index:-1;width:100%;height:200%;opacity:.5;filter:blur(5px);background-image:url(/assets/img/bg.png);background-repeat:repeat;animation:bg 30s linear infinite}.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;max-width:60rem;text-align:center}.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{display:block;width:5rem;height:5rem;animation:rotate 5s linear infinite}']});const routes=[{path:"",component:random_component_RandomComponent}];class RandomRoutingModule{}RandomRoutingModule.\u0275fac=function RandomRoutingModule_Factory(t){return new(t||RandomRoutingModule)},RandomRoutingModule.\u0275mod=core.Kc({type:RandomRoutingModule}),RandomRoutingModule.\u0275inj=core.Jc({imports:[[fesm2015_router.f.forChild(routes)],fesm2015_router.f]});class RandomModule{}RandomModule.\u0275fac=function RandomModule_Factory(t){return new(t||RandomModule)},RandomModule.\u0275mod=core.Kc({type:RandomModule}),RandomModule.\u0275inj=core.Jc({imports:[[common.b,RandomRoutingModule]]})},"T/ZZ":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__,definition;definition=function(){function normalize(strArray){var resultArray=[];if(0===strArray.length)return"";if("string"!=typeof strArray[0])throw new TypeError("Url must be a string. Received "+strArray[0]);if(strArray[0].match(/^[^/:]+:\/*$/)&&strArray.length>1){var first=strArray.shift();strArray[0]=first+strArray[0]}strArray[0].match(/^file:\/\/\//)?strArray[0]=strArray[0].replace(/^([^/:]+):\/*/,"$1:///"):strArray[0]=strArray[0].replace(/^([^/:]+):\/*/,"$1://");for(var i=0;i<strArray.length;i++){var component=strArray[i];if("string"!=typeof component)throw new TypeError("Url must be a string. Received "+component);""!==component&&(i>0&&(component=component.replace(/^[\/]+/,"")),component=i<strArray.length-1?component.replace(/[\/]+$/,""):component.replace(/[\/]+$/,"/"),resultArray.push(component))}var str=resultArray.join("/"),parts=(str=str.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return str=parts.shift()+(parts.length>0?"?":"")+parts.join("&")}return function(){return normalize("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},module.exports?module.exports=definition():void 0===(__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof(__WEBPACK_AMD_DEFINE_FACTORY__=definition)?__WEBPACK_AMD_DEFINE_FACTORY__.call(exports,__webpack_require__,exports,module):__WEBPACK_AMD_DEFINE_FACTORY__)||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)},UVkw:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return BaseService});var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("tk/3"),rxjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("z6cu"),url_join__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("T/ZZ"),url_join__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(url_join__WEBPACK_IMPORTED_MODULE_2__),rxjs_operators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("JIr8"),_environments_environment__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("AytR");function constructApiQueryParams(inputParams){let params=new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.f;if(inputParams&&Object.keys(inputParams).length>0){Object.keys(inputParams).map(key=>{params=params.append(key,inputParams[key])})}return params}class Constants{}Constants.apiRoot=_environments_environment__WEBPACK_IMPORTED_MODULE_4__.a.urlApi;class BaseService{constructor(http,path){this.http=http,this.path=path,this.merchant="",this.unit="",this.endpointUrl=url_join__WEBPACK_IMPORTED_MODULE_2___default()(Constants.apiRoot,this.path)}formatErrors(error){return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__.a)(error)}get(options={}){return options.params=constructApiQueryParams(options.params),this.http.get(this.endpointUrl,options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.a)(this.formatErrors))}getById(id,options={}){options.params=constructApiQueryParams(options.params);const url=url_join__WEBPACK_IMPORTED_MODULE_2___default()(this.endpointUrl,id);return this.http.get(url,options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.a)(this.formatErrors))}create(creationBody,options={}){return options.params=constructApiQueryParams(options.params),this.http.post(this.endpointUrl,creationBody,options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.a)(this.formatErrors))}update(id,updateBody,options={}){options.params=constructApiQueryParams(options.params);const url=url_join__WEBPACK_IMPORTED_MODULE_2___default()(this.endpointUrl,id);return this.http.put(url,updateBody,options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.a)(this.formatErrors))}delete(id,options={}){options.params=constructApiQueryParams(options.params);const url=url_join__WEBPACK_IMPORTED_MODULE_2___default()(this.endpointUrl,id);return this.http.delete(url,options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.a)(this.formatErrors))}}},"kpG/":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return AlbumService});var _base_base_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("UVkw"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("fXoL"),_angular_common_http__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("tk/3");class AlbumService extends _base_base_service__WEBPACK_IMPORTED_MODULE_0__.a{constructor(httpClient){super(httpClient,"album"),this.httpClient=httpClient}}AlbumService.\u0275fac=function AlbumService_Factory(t){return new(t||AlbumService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Wc(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.b))},AlbumService.\u0275prov=_angular_core__WEBPACK_IMPORTED_MODULE_1__.Ic({token:AlbumService,factory:AlbumService.\u0275fac,providedIn:"root"})}};