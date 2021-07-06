exports.ids=[3],exports.modules={Bobu:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"AlbumModule",function(){return AlbumModule});var common=__webpack_require__("ofXK"),router=__webpack_require__("tyNb"),dialog=__webpack_require__("0IaG"),core=__webpack_require__("fXoL"),clipboard=__webpack_require__("UXJo");const _c0=["input"];class ShareModalComponent{constructor(data,clipboard){this.data=data,this.clipboard=clipboard,this.albumUrl=`https://bandas1album.com.br/${this.data.slug}`,this.twitterUrl=`https://twitter.com/intent/tweet?text=${this.data.title} - ${this.data.artist} (${this.data.released}) ${this.albumUrl} via @bandas1album`,this.facebookUrl=`https://www.facebook.com/sharer/sharer.php?u=${this.albumUrl}`,this.whatsappUrl=`https://api.whatsapp.com/send?text=${this.data.title} - ${this.data.artist} (${this.data.released}) ${this.albumUrl}`}ngOnInit(){}copyAlbumUrl(){this.clipboard.copy(this.albumUrl),this.input.nativeElement.select()}}ShareModalComponent.\u0275fac=function ShareModalComponent_Factory(t){return new(t||ShareModalComponent)(core.Mc(dialog.a),core.Mc(clipboard.a))},ShareModalComponent.\u0275cmp=core.Gc({type:ShareModalComponent,selectors:[["app-share-modal"]],viewQuery:function ShareModalComponent_Query(rf,ctx){if(1&rf&&core.Bd(_c0,1),2&rf){let _t;core.nd(_t=core.ad())&&(ctx.input=_t.first)}},decls:21,vars:4,consts:[[1,"modal-content"],[1,"modal-header"],[1,"modal-header__title"],[1,"fas","fa-share-alt"],[1,"share"],[1,"share-social"],["target","_blank","title","Compartilhe no Twitter",3,"href"],[1,"fab","fa-twitter"],["target","_blank","title","Compartilhe no Facebook",3,"href"],[1,"fab","fa-facebook-f"],["target","_blank","title","Compartilhe no WhatsApp",3,"href"],[1,"fab","fa-whatsapp"],[1,"share-url"],["id","url","type","text","readonly","",1,"share-url__input",3,"value"],["input",""],["aria-label","Copiar url do \xe1lbum",1,"share-url__button",3,"click"],[1,"fas","fa-copy"]],template:function ShareModalComponent_Template(rf,ctx){1&rf&&(core.Sc(0,"div",0),core.Sc(1,"header",1),core.Sc(2,"h3",2),core.Nc(3,"i",3),core.yd(4," Compartilhe "),core.Rc(),core.Rc(),core.Sc(5,"nav",4),core.Sc(6,"ul",5),core.Sc(7,"li"),core.Sc(8,"a",6),core.Nc(9,"i",7),core.Rc(),core.Rc(),core.Sc(10,"li"),core.Sc(11,"a",8),core.Nc(12,"i",9),core.Rc(),core.Rc(),core.Sc(13,"li"),core.Sc(14,"a",10),core.Nc(15,"i",11),core.Rc(),core.Rc(),core.Rc(),core.Sc(16,"div",12),core.Nc(17,"input",13,14),core.Sc(19,"button",15),core.Zc("click",function ShareModalComponent_Template_button_click_19_listener(){return ctx.copyAlbumUrl()}),core.Nc(20,"i",16),core.Rc(),core.Rc(),core.Rc(),core.Rc()),2&rf&&(core.Cc(8),core.gd("href",ctx.twitterUrl,core.rd),core.Cc(3),core.gd("href",ctx.facebookUrl,core.rd),core.Cc(3),core.gd("href",ctx.whatsappUrl,core.rd),core.Cc(3),core.gd("value",ctx.albumUrl))},styles:[""]});var seo_service=__webpack_require__("63YN"),album_service=__webpack_require__("kpG/"),html_decode_pipe=__webpack_require__("0tRc"),sidebar_component=__webpack_require__("zBoC");function LoadingCardPostAlbumComponent_span_8_Template(rf,ctx){1&rf&&core.Nc(0,"span")}function LoadingCardPostAlbumComponent_span_10_Template(rf,ctx){1&rf&&core.Nc(0,"span")}const loading_card_post_album_component_c0=function(){return[1,2,3]},_c1=function(){return[1,2,3,4]};class LoadingCardPostAlbumComponent{constructor(){}ngOnInit(){}}LoadingCardPostAlbumComponent.\u0275fac=function LoadingCardPostAlbumComponent_Factory(t){return new(t||LoadingCardPostAlbumComponent)},LoadingCardPostAlbumComponent.\u0275cmp=core.Gc({type:LoadingCardPostAlbumComponent,selectors:[["app-loading-card-post-album"]],decls:12,vars:4,consts:[[1,"placeholder","post-album"],[1,"placeholder-image"],["src","/assets/img/logo.png",1,"placeholder-image"],[1,"placeholder-content"],[1,"placeholder-content__subtitle"],[1,"placeholder-content__title"],[1,"placeholder-content__tagline"],[1,"placeholder-content__tags"],[4,"ngFor","ngForOf"],[1,"placeholder-content__links"],[1,"placeholder-content__button"]],template:function LoadingCardPostAlbumComponent_Template(rf,ctx){1&rf&&(core.Sc(0,"div",0),core.Sc(1,"div",1),core.Nc(2,"img",2),core.Rc(),core.Sc(3,"div",3),core.Nc(4,"div",4),core.Nc(5,"div",5),core.Nc(6,"div",6),core.Sc(7,"div",7),core.wd(8,LoadingCardPostAlbumComponent_span_8_Template,1,0,"span",8),core.Rc(),core.Sc(9,"div",9),core.wd(10,LoadingCardPostAlbumComponent_span_10_Template,1,0,"span",8),core.Rc(),core.Nc(11,"div",10),core.Rc(),core.Rc()),2&rf&&(core.Cc(8),core.gd("ngForOf",core.id(2,loading_card_post_album_component_c0)),core.Cc(2),core.gd("ngForOf",core.id(3,_c1)))},directives:[common.j],styles:[".reset-button[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0;border:0;-webkit-appearance:none;-webkit-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;text-align:center;background-color:initial;outline:0}.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.reset-input[_ngcontent-%COMP%]{-webkit-appearance:none;display:block;width:100%;border:0;background-clip:padding-box;outline:0}.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:text}.reset-input.disabled[_ngcontent-%COMP%], .reset-input[_ngcontent-%COMP%]:disabled{cursor:default}@keyframes loading{0%{background-position:-468px 0}to{background-position:468px 0}}.placeholder-image[_ngcontent-%COMP%]{width:100%;height:100%;max-width:30rem;max-height:30rem;margin-bottom:2rem;background-image:linear-gradient(90deg,#bc9264 10%,#a58058 18%,#bc9264 33%);background-size:800px 104px;animation:loading 1.25s linear infinite forwards}@media (min-width:1024px){.placeholder-image[_ngcontent-%COMP%]{margin-right:3rem;min-height:30rem}}.placeholder-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%;height:100%;visibility:hidden}.placeholder-content[_ngcontent-%COMP%]{width:100%;max-width:30rem}.placeholder-content__title[_ngcontent-%COMP%]{width:100%;margin-bottom:.5rem;height:2.5rem;border-radius:2.5rem;background-image:linear-gradient(90deg,#bc9264 10%,#a58058 18%,#bc9264 33%);background-size:800px 104px;animation:loading 1.25s linear infinite forwards}@media (min-width:1024px){.placeholder-content__title[_ngcontent-%COMP%]{height:3.5rem;border-radius:3.5rem}}.placeholder-content__tagline[_ngcontent-%COMP%]{width:40%;margin-bottom:1rem;height:2.5rem;border-radius:2.5rem;background-image:linear-gradient(90deg,#bc9264 10%,#a58058 18%,#bc9264 33%);background-size:800px 104px;animation:loading 1.25s linear infinite forwards}@media (min-width:1024px){.placeholder-content__tagline[_ngcontent-%COMP%]{height:3.5rem;border-radius:3.5rem}}.placeholder-content__subtitle[_ngcontent-%COMP%]{width:60%;margin-bottom:1.5rem;height:1.5rem;border-radius:1.5rem;background-image:linear-gradient(90deg,#bc9264 10%,#a58058 18%,#bc9264 33%);background-size:800px 104px;animation:loading 1.25s linear infinite forwards}.placeholder-content__tags[_ngcontent-%COMP%]{display:flex;margin-bottom:1.5rem}.placeholder-content__tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;height:1.3125rem;margin:.25rem;background-image:linear-gradient(90deg,#bc9264 10%,#a58058 18%,#bc9264 33%);background-size:800px 104px;animation:loading 1.25s linear infinite forwards;border-radius:.25rem}.placeholder-content__tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child, .placeholder-content__tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){width:3.75rem}.placeholder-content__tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){width:2.5rem}.placeholder-content__links[_ngcontent-%COMP%]{display:flex;margin-bottom:1rem}@media (min-width:1024px){.placeholder-content__links[_ngcontent-%COMP%]{margin-bottom:1.5rem}}.placeholder-content__links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;width:2rem;height:2rem;border-radius:50%;background-image:linear-gradient(90deg,#bc9264 10%,#a58058 18%,#bc9264 33%);background-size:800px 104px;animation:loading 1.25s linear infinite forwards}@media (min-width:1024px){.placeholder-content__links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:3rem;height:3rem}}.placeholder-content__links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:last-child){margin-right:1rem}@media (min-width:1024px){.placeholder-content__links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:last-child){margin-right:1.5rem}}.placeholder-content__button[_ngcontent-%COMP%]{width:3rem;height:3rem;background-image:linear-gradient(90deg,#bc9264 10%,#a58058 18%,#bc9264 33%);background-size:800px 104px;animation:loading 1.25s linear infinite forwards;border-radius:.5rem}"]});class ListBreadcrumbComponent{constructor(){}ngOnInit(){}}ListBreadcrumbComponent.\u0275fac=function ListBreadcrumbComponent_Factory(t){return new(t||ListBreadcrumbComponent)},ListBreadcrumbComponent.\u0275cmp=core.Gc({type:ListBreadcrumbComponent,selectors:[["app-list-breadcrumb"]],decls:11,vars:0,consts:[["itemscope","","itemtype","http://schema.org/BreadcrumbList",1,"list","list-breadcrumb"],["itemprop","itemListElement","itemscope","","itemtype","http://schema.org/ListItem"],["itemprop","position","content","1"],["itemprop","item","href","/"],["itemprop","name"],["itemprop","position","content","2"],["itemprop","item"]],template:function ListBreadcrumbComponent_Template(rf,ctx){1&rf&&(core.Sc(0,"ol",0),core.Sc(1,"li",1),core.Nc(2,"meta",2),core.Sc(3,"a",3),core.Sc(4,"span",4),core.yd(5,"Home"),core.Rc(),core.Rc(),core.Rc(),core.Sc(6,"li",1),core.Nc(7,"meta",5),core.Sc(8,"a",6),core.Sc(9,"span",4),core.yd(10,"\xc1lbum"),core.Rc(),core.Rc(),core.Rc(),core.Rc())},styles:[""]});const card_post_album_component_c0=[[["","albumImage",""]],[["","albumTitle",""]],[["","albumArtist",""]],[["","albumReleased",""]],[["","albumGenreItem",""]],[["","albumCopyrightHolder",""]],[["","albumDescription",""]],[["","albumListLinks",""]],[["","albumButtonShare",""]]];class CardPostAlbumComponent{constructor(){}ngOnInit(){}}function ListLinksComponent_li_1_Template(rf,ctx){if(1&rf&&(core.Sc(0,"li"),core.Sc(1,"a",2),core.Nc(2,"i",3),core.Rc(),core.Rc()),2&rf){const ctx_r0=core.bd();core.Cc(1),core.gd("href",ctx_r0.item.acf.amazon,core.rd)}}function ListLinksComponent_li_2_Template(rf,ctx){if(1&rf&&(core.Sc(0,"li"),core.Sc(1,"a",4),core.Nc(2,"i",5),core.Rc(),core.Rc()),2&rf){const ctx_r1=core.bd();core.Cc(1),core.gd("href",ctx_r1.item.acf.deezer,core.rd)}}function ListLinksComponent_li_3_Template(rf,ctx){if(1&rf&&(core.Sc(0,"li"),core.Sc(1,"a",6),core.Nc(2,"i",7),core.Rc(),core.Rc()),2&rf){const ctx_r2=core.bd();core.Cc(1),core.gd("href",ctx_r2.item.acf.lastfm,core.rd)}}function ListLinksComponent_li_4_Template(rf,ctx){if(1&rf&&(core.Sc(0,"li"),core.Sc(1,"a",8),core.Nc(2,"i",9),core.Rc(),core.Rc()),2&rf){const ctx_r3=core.bd();core.Cc(1),core.gd("href",ctx_r3.item.acf.spotify,core.rd)}}function ListLinksComponent_li_5_Template(rf,ctx){if(1&rf&&(core.Sc(0,"li"),core.Sc(1,"a",10),core.Nc(2,"i",11),core.Rc(),core.Rc()),2&rf){const ctx_r4=core.bd();core.Cc(1),core.gd("href",ctx_r4.item.acf.youtube,core.rd)}}function ListLinksComponent_li_6_Template(rf,ctx){if(1&rf&&(core.Sc(0,"li"),core.Sc(1,"a",12),core.Nc(2,"i",13),core.Rc(),core.Rc()),2&rf){const ctx_r5=core.bd();core.Cc(1),core.gd("href",ctx_r5.item.acf.wikipedia,core.rd)}}function ListLinksComponent_li_7_Template(rf,ctx){if(1&rf&&(core.Sc(0,"li"),core.Sc(1,"a",14),core.Nc(2,"i",15),core.Rc(),core.Rc()),2&rf){const ctx_r6=core.bd();core.Cc(1),core.gd("href",ctx_r6.item.acf.download,core.rd)}}CardPostAlbumComponent.\u0275fac=function CardPostAlbumComponent_Factory(t){return new(t||CardPostAlbumComponent)},CardPostAlbumComponent.\u0275cmp=core.Gc({type:CardPostAlbumComponent,selectors:[["app-card-post-album"]],ngContentSelectors:["[albumImage]","[albumTitle]","[albumArtist]","[albumReleased]","[albumGenreItem]","[albumCopyrightHolder]","[albumDescription]","[albumListLinks]","[albumButtonShare]"],decls:20,vars:0,consts:[[1,"post-album"],[1,"post-album__cover"],[1,"post-album__content"],[1,"post-album__content__header"],["itemprop","name",1,"post-album__content__title"],["itemprop","byArtist","itemscope","","itemtype","https://schema.org/MusicGroup",1,"post-album__content__artist"],["itemprop","copyrightYear",1,"post-album__content__year"],[1,"post-album__content__genres"],[1,"post-footer"]],template:function CardPostAlbumComponent_Template(rf,ctx){1&rf&&(core.fd(card_post_album_component_c0),core.Sc(0,"div",0),core.Sc(1,"figure",1),core.ed(2),core.Rc(),core.Sc(3,"div",2),core.Nc(4,"app-list-breadcrumb"),core.Sc(5,"header",3),core.Sc(6,"hgroup"),core.Sc(7,"h1",4),core.ed(8,1),core.Rc(),core.Sc(9,"h2",5),core.ed(10,2),core.Rc(),core.Rc(),core.Sc(11,"strong",6),core.ed(12,3),core.Rc(),core.Sc(13,"ul",7),core.ed(14,4),core.Rc(),core.ed(15,5),core.ed(16,6),core.Rc(),core.ed(17,7),core.Sc(18,"footer",8),core.ed(19,8),core.Rc(),core.Rc(),core.Rc())},directives:[ListBreadcrumbComponent],styles:[".reset-button[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0;border:0;-webkit-appearance:none;-webkit-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;text-align:center;background-color:initial;outline:0}.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.reset-input[_ngcontent-%COMP%]{-webkit-appearance:none;display:block;width:100%;border:0;background-clip:padding-box;outline:0}.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:text}.reset-input.disabled[_ngcontent-%COMP%], .reset-input[_ngcontent-%COMP%]:disabled{cursor:default}"]});class ListLinksComponent{constructor(){}ngOnInit(){}}ListLinksComponent.\u0275fac=function ListLinksComponent_Factory(t){return new(t||ListLinksComponent)},ListLinksComponent.\u0275cmp=core.Gc({type:ListLinksComponent,selectors:[["app-list-links"]],inputs:{item:"item"},decls:8,vars:7,consts:[[1,"post-album__content__links"],[4,"ngIf"],["target","_blank","title","Comprar o \xe1lbum page.title na Amazon",1,"post-album__content__links__item",3,"href"],[1,"fab","fa-amazon"],["target","_blank","title","Ouvir o \xe1lbum page.title no Deezer",1,"post-album__content__links__item",3,"href"],[1,"fab","fa-deezer"],["target","_blank","title","Ouvir o \xe1lbum page.title no Last.fm",1,"post-album__content__links__item",3,"href"],[1,"fab","fa-lastfm"],["target","_blank","title","Ouvir o \xe1lbum page.title no Spotify",1,"post-album__content__links__item",3,"href"],[1,"fab","fa-spotify"],["target","_blank","title","Ouvir o \xe1lbum page.title no YouTube",1,"post-album__content__links__item",3,"href"],[1,"fab","fa-youtube"],["target","_blank","title","Ler sobre o \xe1lbum page.title na Wikipedia",1,"post-album__content__links__item",3,"href"],[1,"fab","fa-wikipedia-w"],["target","_blank","title","Fazer download do \xe1lbum page.title",1,"post-album__content__links__item",3,"href"],[1,"fas","fa-download"]],template:function ListLinksComponent_Template(rf,ctx){1&rf&&(core.Sc(0,"ul",0),core.wd(1,ListLinksComponent_li_1_Template,3,1,"li",1),core.wd(2,ListLinksComponent_li_2_Template,3,1,"li",1),core.wd(3,ListLinksComponent_li_3_Template,3,1,"li",1),core.wd(4,ListLinksComponent_li_4_Template,3,1,"li",1),core.wd(5,ListLinksComponent_li_5_Template,3,1,"li",1),core.wd(6,ListLinksComponent_li_6_Template,3,1,"li",1),core.wd(7,ListLinksComponent_li_7_Template,3,1,"li",1),core.Rc()),2&rf&&(core.Cc(1),core.gd("ngIf",null==ctx.item.acf?null:ctx.item.acf.amazon),core.Cc(1),core.gd("ngIf",null==ctx.item.acf?null:ctx.item.acf.deezer),core.Cc(1),core.gd("ngIf",null==ctx.item.acf?null:ctx.item.acf.lastfm),core.Cc(1),core.gd("ngIf",null==ctx.item.acf?null:ctx.item.acf.spotify),core.Cc(1),core.gd("ngIf",null==ctx.item.acf?null:ctx.item.acf.youtube),core.Cc(1),core.gd("ngIf",null==ctx.item.acf?null:ctx.item.acf.wikipedia),core.Cc(1),core.gd("ngIf",null==ctx.item.acf?null:ctx.item.acf.download))},directives:[common.k],styles:[""]});class FooterDefaultComponent{constructor(){}ngOnInit(){}}function AlbumComponent_app_loading_card_post_album_9_Template(rf,ctx){1&rf&&core.Nc(0,"app-loading-card-post-album")}function AlbumComponent_app_card_post_album_10_li_9_Template(rf,ctx){if(1&rf&&(core.Sc(0,"li",25),core.Sc(1,"a",26),core.Sc(2,"span",27),core.yd(3),core.Rc(),core.Rc(),core.Rc()),2&rf){const genre_r5=ctx.$implicit;core.Cc(1),core.gd("routerLink","/genero/"+genre_r5.slug),core.Cc(2),core.zd(genre_r5.name)}}function AlbumComponent_app_card_post_album_10_Template(rf,ctx){if(1&rf){const _r7=core.Tc();core.Sc(0,"app-card-post-album"),core.Sc(1,"picture",11),core.Nc(2,"source",12),core.Nc(3,"source",13),core.Nc(4,"img",14),core.Rc(),core.Nc(5,"span",15),core.Nc(6,"span",16),core.Nc(7,"span",17),core.cd(8,"date"),core.wd(9,AlbumComponent_app_card_post_album_10_li_9_Template,4,2,"li",18),core.Nc(10,"app-list-links",19),core.Nc(11,"meta",20),core.Nc(12,"meta",21),core.Nc(13,"app-list-links",22),core.Sc(14,"button",23),core.Zc("click",function AlbumComponent_app_card_post_album_10_Template_button_click_14_listener(){core.pd(_r7);return core.bd().share()}),core.Nc(15,"i",24),core.Rc(),core.Rc()}if(2&rf){const ctx_r1=core.bd();core.Cc(2),core.gd("srcset",null==ctx_r1.item.images?null:ctx_r1.item.images.full_webp,core.rd),core.Cc(1),core.gd("srcset",null==ctx_r1.item.images?null:ctx_r1.item.images.full,core.rd),core.Cc(1),core.gd("src",null==ctx_r1.item.images?null:ctx_r1.item.images.full,core.rd),core.Cc(1),core.gd("innerHtml",null==ctx_r1.item.title?null:ctx_r1.item.title.rendered,core.qd),core.Cc(1),core.gd("innerHtml",null==ctx_r1.item.acf?null:ctx_r1.item.acf.artist,core.qd),core.Cc(1),core.gd("innerHtml",core.dd(8,10,null==ctx_r1.item.acf?null:ctx_r1.item.acf.released,"yyyy"),core.qd),core.Cc(2),core.gd("ngForOf",ctx_r1.item.genres),core.Cc(1),core.gd("item",ctx_r1.item),core.Cc(1),core.gd("content",null==ctx_r1.item.acf?null:ctx_r1.item.acf.label),core.Cc(2),core.gd("item",ctx_r1.item)}}function AlbumComponent_div_11_div_5_tr_4_Template(rf,ctx){if(1&rf&&(core.Sc(0,"tr",33),core.Nc(1,"td",34),core.Nc(2,"td",29),core.Rc()),2&rf){const track_r10=ctx.$implicit;core.Cc(1),core.gd("innerHtml",track_r10.title,core.qd),core.Cc(1),core.gd("innerHtml",track_r10.duration,core.qd)}}function AlbumComponent_div_11_div_5_Template(rf,ctx){if(1&rf&&(core.Sc(0,"div",31),core.Sc(1,"h3"),core.yd(2,"Lista de faixas"),core.Rc(),core.Sc(3,"table"),core.wd(4,AlbumComponent_div_11_div_5_tr_4_Template,3,2,"tr",32),core.Rc(),core.Rc()),2&rf){const ctx_r8=core.bd(2);core.Cc(4),core.gd("ngForOf",null==ctx_r8.item.acf?null:ctx_r8.item.acf.tracklist)}}function AlbumComponent_div_11_Template(rf,ctx){if(1&rf&&(core.Sc(0,"div",28),core.Qc(1),core.Sc(2,"h3"),core.yd(3),core.Rc(),core.Nc(4,"div",29),core.Pc(),core.wd(5,AlbumComponent_div_11_div_5_Template,5,1,"div",30),core.Rc()),2&rf){const ctx_r2=core.bd();core.Cc(3),core.Ad("Um pouco mais sobre ",null==ctx_r2.item.acf?null:ctx_r2.item.acf.artist,""),core.Cc(1),core.gd("innerHtml",null==ctx_r2.item.content?null:ctx_r2.item.content.rendered,core.qd),core.Cc(1),core.gd("ngIf",null==ctx_r2.item.acf||null==ctx_r2.item.acf.tracklist?null:ctx_r2.item.acf.tracklist.length)}}function AlbumComponent_app_footer_default_12_Template(rf,ctx){1&rf&&core.Nc(0,"app-footer-default")}FooterDefaultComponent.\u0275fac=function FooterDefaultComponent_Factory(t){return new(t||FooterDefaultComponent)},FooterDefaultComponent.\u0275cmp=core.Gc({type:FooterDefaultComponent,selectors:[["app-footer-default"]],decls:42,vars:0,consts:[["role","contentinfo",1,"footer"],[1,"footer__wrapper"],[1,"footer__copy"],["routerLink","/","title","Bandas de 1 \xc1lbum"],["src","/assets/img/logo.png","loading","lazy","alt","Bandas de 1 \xc1lbum"],[1,"footer__copy__title"],["href","https://kevinoliveira.com.br/","target","_blank"],[1,"footer__nav"],["href","/sobre"],["href","/politica-de-privacidade"],["href","mailto:bandasde1album@gmail.com","target","_blank"],[1,"footer__social"],["href","https://t.me/bandas1album","target","_blank","aria-label","Telegram","title","Entre em nosso grupo do Telegram",1,"footer_social__item","telegram"],["aria-hidden","true",1,"fab","fa-telegram-plane"],["href","https://instagram.com/bandas1album","target","_blank","aria-label","Instagram","title","Siga-nos no Instagram",1,"footer_social__item","instagram"],["aria-hidden","true",1,"fab","fa-instagram"],["href","https://facebook.com/bandas1album","target","_blank","aria-label","Facebook","title","Curta nossa p\xe1gina no Facebook",1,"footer_social__item","facebook"],["aria-hidden","true",1,"fab","fa-facebook-square"],["href","https://open.spotify.com/user/ryyq8vjpuf4vgfgll9zoecplr?si=09LFT22HQaaRIgfIkIatEw","target","_blank","aria-label","Spotify","title","Ou\xe7a nossas playlists no Spotify",1,"footer_social__item","spotify"],["aria-hidden","true",1,"fab","fa-spotify"],["href","https://www.youtube.com/channel/UCBFLR6baFsadrq2MswNT5KQ","target","_blank","aria-label","YouTube","title","Inscreva-se em nosso canal do YouTube",1,"footer_social__item","youtube"],["aria-hidden","true",1,"fab","fa-youtube"],["href","/feed.xml","target","_blank","aria-label","RSS Feed","title","Assine nosso RSS Feed",1,"footer_social__item","rss"],["aria-hidden","true",1,"fas","fa-rss"]],template:function FooterDefaultComponent_Template(rf,ctx){1&rf&&(core.Sc(0,"footer",0),core.Sc(1,"div",1),core.Sc(2,"div",2),core.Sc(3,"a",3),core.Nc(4,"img",4),core.Rc(),core.Sc(5,"div"),core.Sc(6,"h2",5),core.Sc(7,"strong"),core.yd(8,"Bandas de 1 \xc1lbum"),core.Rc(),core.Sc(9,"span"),core.yd(10,"Eternizando One Album Wonders"),core.Rc(),core.Rc(),core.Sc(11,"p"),core.Sc(12,"small"),core.yd(13," 2021 \xa9 Feito por "),core.Sc(14,"a",6),core.yd(15,"Kevin Oliveira"),core.Rc(),core.Rc(),core.Rc(),core.Rc(),core.Rc(),core.Sc(16,"nav",7),core.Sc(17,"a",8),core.yd(18,"Sobre"),core.Rc(),core.Sc(19,"a",9),core.yd(20,"Privacidade"),core.Rc(),core.Sc(21,"a",10),core.yd(22," Indique \xe1lbuns "),core.Rc(),core.Rc(),core.Sc(23,"ul",11),core.Sc(24,"li"),core.Sc(25,"a",12),core.Nc(26,"i",13),core.Rc(),core.Rc(),core.Sc(27,"li"),core.Sc(28,"a",14),core.Nc(29,"i",15),core.Rc(),core.Rc(),core.Sc(30,"li"),core.Sc(31,"a",16),core.Nc(32,"i",17),core.Rc(),core.Rc(),core.Sc(33,"li"),core.Sc(34,"a",18),core.Nc(35,"i",19),core.Rc(),core.Rc(),core.Sc(36,"li"),core.Sc(37,"a",20),core.Nc(38,"i",21),core.Rc(),core.Rc(),core.Sc(39,"li"),core.Sc(40,"a",22),core.Nc(41,"i",23),core.Rc(),core.Rc(),core.Rc(),core.Rc(),core.Rc())},directives:[router.e],styles:[".reset-button[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0;border:0;-webkit-appearance:none;-webkit-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;text-align:center;background-color:initial;outline:0}.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.reset-input[_ngcontent-%COMP%]{-webkit-appearance:none;display:block;width:100%;border:0;background-clip:padding-box;outline:0}.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:text}.reset-input.disabled[_ngcontent-%COMP%], .reset-input[_ngcontent-%COMP%]:disabled{cursor:default}.footer[_ngcontent-%COMP%]{width:100%;z-index:1;display:flex;align-items:center;justify-content:center;padding:1.5rem 0;font-size:.875rem;font-weight:400;text-transform:uppercase;letter-spacing:.0625rem}.footer__wrapper[_ngcontent-%COMP%]{width:calc(100% - 40px);margin:auto;display:flex;align-items:flex-start;flex-direction:column;justify-content:space-between}@media (min-width:768px){.footer__wrapper[_ngcontent-%COMP%]{align-items:center;flex-direction:row;width:calc(100% - 208px)}}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{pointer-events:all}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.footer__copy[_ngcontent-%COMP%]{display:flex;margin-bottom:1rem}@media (min-width:1024px){.footer__copy[_ngcontent-%COMP%]{margin-bottom:0}}.footer__copy[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:2.5rem;height:2.5rem;margin-right:1rem}.footer__copy__title[_ngcontent-%COMP%]{margin:0}.footer__copy__title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:1rem}.footer__copy__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;margin:0 0 .25rem;font-size:.625rem;font-weight:400}.footer__copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.footer__copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:.875rem;text-transform:none;letter-spacing:0}.footer__nav[_ngcontent-%COMP%]{display:none}@media (min-width:1440px){.footer__nav[_ngcontent-%COMP%]{display:block}}.footer__nav[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:not(:last-child){margin-right:2.5rem}.footer__social[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none}.footer__social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;font-size:1.5rem}.footer__social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){margin-right:1rem}.footer__social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{opacity:.6}"]});class album_component_AlbumComponent{constructor(seoService,albumService,router,route,dialog,htmlDecodePipe){this.seoService=seoService,this.albumService=albumService,this.router=router,this.route=route,this.dialog=dialog,this.htmlDecodePipe=htmlDecodePipe,this.pageId="",this.item={},this.loading=!0,this.params={slug:""},this.pageId=this.router.routerState.snapshot.url}ngOnInit(){this.route.params.subscribe(params=>{const{slug:slug}=params;this.item={},this.pageId="",this.params.slug=slug,this.get()})}get(){this.albumService.get({params:this.params}).subscribe(res=>{this.item=res[0];const mountTitle=this.item.title.rendered==this.item.acf.artist?this.item.title.rendered:`${this.item.title.rendered} - ${this.item.acf.artist}`,title=this.htmlDecodePipe.transform(mountTitle),year=new Date(this.item.acf.released).getFullYear();this.seoService.updateTitle(`${title} (${year}) | Bandas de 1 \xc1lbum`),this.seoService.metatags(this.item),this.loading=!1},err=>{this.loading=!1})}share(){this.dialog.open(ShareModalComponent,{panelClass:"modal-share",data:{slug:this.item.slug,title:this.item.title.rendered,artist:this.item.acf.artist,released:Object(common.p)(this.item.acf.released,"yyyy","en-US")}})}}album_component_AlbumComponent.\u0275fac=function AlbumComponent_Factory(t){return new(t||album_component_AlbumComponent)(core.Mc(seo_service.a),core.Mc(album_service.a),core.Mc(router.c),core.Mc(router.a),core.Mc(dialog.b),core.Mc(html_decode_pipe.a))},album_component_AlbumComponent.\u0275cmp=core.Gc({type:album_component_AlbumComponent,selectors:[["app-album"]],decls:15,vars:5,consts:[[1,"header"],[1,"header__wrapper"],["aria-label","Voltar para a home","title","Voltar para a home",1,"header__close",3,"routerLink"],["aria-hidden","true",1,"fas","fa-times"],[1,"main"],[1,"main-bg"],["itemscope","","itemtype","https://schema.org/MusicAlbum"],[4,"ngIf"],["class","post-content",4,"ngIf"],["routerLink","/random","title","Modo rand\xf4mico","aria-title","Modo rand\xf4mico",1,"wrapper__button"],["aria-hidden","true",1,"fas","fa-random"],["albumImage",""],["type","image/webp",3,"srcset"],["type","image/jpeg",3,"srcset"],["itemprop","image","loading","lazy","alt","Capa do \xe1lbum  da banda ","loading","lazy",3,"src"],["albumTitle","",3,"innerHtml"],["albumArtist","",3,"innerHtml"],["albumReleased","",3,"innerHtml"],["albumGenreItem","",4,"ngFor","ngForOf"],["albumListLinks","",3,"item"],["albumCopyrightHolder","","itemprop","copyrightHolder",3,"content"],["albumDescription","","itemprop","description","content",""],[3,"item"],["albumButtonShare","","aria-title","Abrir modal de share",1,"post-footer__share",3,"click"],["aria-hidden","true",1,"fas","fa-share-alt"],["albumGenreItem",""],[3,"routerLink"],["itemprop","genre"],[1,"post-content"],[3,"innerHtml"],["class","post-tracklist",4,"ngIf"],[1,"post-tracklist"],["itemprop","track","itemscope","","itemtype","https://schema.org/MusicRecording",4,"ngFor","ngForOf"],["itemprop","track","itemscope","","itemtype","https://schema.org/MusicRecording"],["itemprop","name",3,"innerHtml"]],template:function AlbumComponent_Template(rf,ctx){1&rf&&(core.Sc(0,"div",0),core.Sc(1,"div",1),core.Sc(2,"a",2),core.Nc(3,"i",3),core.Rc(),core.Rc(),core.Rc(),core.Sc(4,"main",4),core.Nc(5,"app-sidebar"),core.Sc(6,"section"),core.Nc(7,"div",5),core.Sc(8,"article",6),core.wd(9,AlbumComponent_app_loading_card_post_album_9_Template,1,0,"app-loading-card-post-album",7),core.wd(10,AlbumComponent_app_card_post_album_10_Template,16,13,"app-card-post-album",7),core.wd(11,AlbumComponent_div_11_Template,6,3,"div",8),core.Rc(),core.wd(12,AlbumComponent_app_footer_default_12_Template,1,0,"app-footer-default",7),core.Rc(),core.Rc(),core.Sc(13,"a",9),core.Nc(14,"i",10),core.Rc()),2&rf&&(core.Cc(2),core.gd("routerLink","/"),core.Cc(7),core.gd("ngIf",ctx.loading),core.Cc(1),core.gd("ngIf",!ctx.loading),core.Cc(1),core.gd("ngIf",(null==ctx.item||null==ctx.item.content?null:ctx.item.content.rendered)&&(null==ctx.item||null==ctx.item.content?null:ctx.item.content.rendered.length)>50||(null==ctx.item||null==ctx.item.acf||null==ctx.item.acf.tracklist?null:ctx.item.acf.tracklist.length)),core.Cc(1),core.gd("ngIf",(null==ctx.item||null==ctx.item.content?null:ctx.item.content.rendered)&&(null==ctx.item||null==ctx.item.content?null:ctx.item.content.rendered.length)>50||(null==ctx.item||null==ctx.item.acf||null==ctx.item.acf.tracklist?null:ctx.item.acf.tracklist.length)))},directives:[router.e,sidebar_component.a,common.k,LoadingCardPostAlbumComponent,CardPostAlbumComponent,common.j,ListLinksComponent,FooterDefaultComponent],pipes:[common.d],styles:[".reset-button[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0;border:0;-webkit-appearance:none;-webkit-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;text-align:center;background-color:initial;outline:0}.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.reset-input[_ngcontent-%COMP%]{-webkit-appearance:none;display:block;width:100%;border:0;background-clip:padding-box;outline:0}.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:text}.reset-input.disabled[_ngcontent-%COMP%], .reset-input[_ngcontent-%COMP%]:disabled{cursor:default}.main[_ngcontent-%COMP%]{display:flex}.main-bg[_ngcontent-%COMP%]{position:absolute;top:0;left:0;z-index:-1;height:60.875rem;background-image:url(/assets/img/bg.png);background-attachment:fixed;opacity:.5;filter:blur(5px)}.main-bg[_ngcontent-%COMP%], section[_ngcontent-%COMP%]{width:100%}app-footer-default[_ngcontent-%COMP%]{display:block;background-color:#a58058}.wrapper__button[_ngcontent-%COMP%]{top:1.5rem;left:5.5rem}"]});const routes=[{path:"",component:album_component_AlbumComponent}];class AlbumRoutingModule{}AlbumRoutingModule.\u0275fac=function AlbumRoutingModule_Factory(t){return new(t||AlbumRoutingModule)},AlbumRoutingModule.\u0275mod=core.Kc({type:AlbumRoutingModule}),AlbumRoutingModule.\u0275inj=core.Jc({imports:[[router.f.forChild(routes)],router.f]});var ngx_disqus=__webpack_require__("uqZ0");class ListLinksModule{}ListLinksModule.\u0275fac=function ListLinksModule_Factory(t){return new(t||ListLinksModule)},ListLinksModule.\u0275mod=core.Kc({type:ListLinksModule}),ListLinksModule.\u0275inj=core.Jc({imports:[[common.b]]});var sidebar_module=__webpack_require__("zWxg");class FooterDefaultModule{}FooterDefaultModule.\u0275fac=function FooterDefaultModule_Factory(t){return new(t||FooterDefaultModule)},FooterDefaultModule.\u0275mod=core.Kc({type:FooterDefaultModule}),FooterDefaultModule.\u0275inj=core.Jc({imports:[[common.b,router.f]]});class ShareModalModule{}ShareModalModule.\u0275fac=function ShareModalModule_Factory(t){return new(t||ShareModalModule)},ShareModalModule.\u0275mod=core.Kc({type:ShareModalModule}),ShareModalModule.\u0275inj=core.Jc({imports:[[common.b,clipboard.b]]});class ListBreadcrumbModule{}ListBreadcrumbModule.\u0275fac=function ListBreadcrumbModule_Factory(t){return new(t||ListBreadcrumbModule)},ListBreadcrumbModule.\u0275mod=core.Kc({type:ListBreadcrumbModule}),ListBreadcrumbModule.\u0275inj=core.Jc({imports:[[common.b]]});class CardPostAlbumModule{}CardPostAlbumModule.\u0275fac=function CardPostAlbumModule_Factory(t){return new(t||CardPostAlbumModule)},CardPostAlbumModule.\u0275mod=core.Kc({type:CardPostAlbumModule}),CardPostAlbumModule.\u0275inj=core.Jc({imports:[[common.b,ListBreadcrumbModule]]});class LoadingCardPostAlbumModule{}LoadingCardPostAlbumModule.\u0275fac=function LoadingCardPostAlbumModule_Factory(t){return new(t||LoadingCardPostAlbumModule)},LoadingCardPostAlbumModule.\u0275mod=core.Kc({type:LoadingCardPostAlbumModule}),LoadingCardPostAlbumModule.\u0275inj=core.Jc({imports:[[common.b]]});class AlbumModule{}AlbumModule.\u0275fac=function AlbumModule_Factory(t){return new(t||AlbumModule)},AlbumModule.\u0275mod=core.Kc({type:AlbumModule}),AlbumModule.\u0275inj=core.Jc({imports:[[common.b,AlbumRoutingModule,ngx_disqus.a.forRoot("bandas1album"),dialog.c,ListLinksModule,sidebar_module.a,FooterDefaultModule,ShareModalModule,CardPostAlbumModule,LoadingCardPostAlbumModule]]})}};