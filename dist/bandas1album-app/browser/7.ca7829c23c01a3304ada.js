(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Bobu:function(t,e,n){"use strict";n.r(e),n.d(e,"AlbumModule",function(){return X});var i=n("ofXK"),a=n("tyNb"),o=n("0IaG"),r=n("fXoL");class l{constructor(t,e){this._document=e;const n=this._textarea=this._document.createElement("textarea"),i=n.style;i.position="fixed",i.top=i.opacity="0",i.left="-999em",n.setAttribute("aria-hidden","true"),n.value=t,this._document.body.appendChild(n)}copy(){const t=this._textarea;let e=!1;try{if(t){const n=this._document.activeElement;t.select(),t.setSelectionRange(0,t.value.length),e=this._document.execCommand("copy"),n&&n.focus()}}catch(n){}return e}destroy(){const t=this._textarea;t&&(t.parentNode&&t.parentNode.removeChild(t),this._textarea=void 0)}}let c=(()=>{class t{constructor(t){this._document=t}copy(t){const e=this.beginCopy(t),n=e.copy();return e.destroy(),n}beginCopy(t){return new l(t,this._document)}}return t.\u0275fac=function(e){return new(e||t)(r.Wb(i.c))},t.\u0275prov=Object(r.Ib)({factory:function(){return new t(Object(r.Wb)(i.c))},token:t,providedIn:"root"}),t})(),s=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({}),t})();const b=["input"];let m=(()=>{class t{constructor(t,e){this.data=t,this.clipboard=e,this.albumUrl=`https://bandas1album.com.br/${this.data.slug}`,this.twitterUrl=`https://twitter.com/intent/tweet?text=${this.data.title} - ${this.data.artist} (${this.data.released}) ${this.albumUrl} via @bandas1album`,this.facebookUrl=`https://www.facebook.com/sharer/sharer.php?u=${this.albumUrl}`,this.whatsappUrl=`https://api.whatsapp.com/send?text=${this.data.title} - ${this.data.artist} (${this.data.released}) ${this.albumUrl}`}ngOnInit(){}copyAlbumUrl(){this.clipboard.copy(this.albumUrl),this.input.nativeElement.select()}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(o.a),r.Mb(c))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-share-modal"]],viewQuery:function(t,e){if(1&t&&r.Bc(b,1),2&t){let t;r.nc(t=r.ac())&&(e.input=t.first)}},decls:21,vars:4,consts:[[1,"modal-content"],[1,"modal-header"],[1,"modal-header__title"],[1,"fas","fa-share-alt"],[1,"share"],[1,"share-social"],["target","_blank","title","Compartilhe no Twitter",3,"href"],[1,"fab","fa-twitter"],["target","_blank","title","Compartilhe no Facebook",3,"href"],[1,"fab","fa-facebook-f"],["target","_blank","title","Compartilhe no WhatsApp",3,"href"],[1,"fab","fa-whatsapp"],[1,"share-url"],["id","url","type","text","readonly","",1,"share-url__input",3,"value"],["input",""],["aria-label","Copiar url do \xe1lbum",1,"share-url__button",3,"click"],[1,"fas","fa-copy"]],template:function(t,e){1&t&&(r.Sb(0,"div",0),r.Sb(1,"header",1),r.Sb(2,"h3",2),r.Nb(3,"i",3),r.yc(4," Compartilhe "),r.Rb(),r.Rb(),r.Sb(5,"nav",4),r.Sb(6,"ul",5),r.Sb(7,"li"),r.Sb(8,"a",6),r.Nb(9,"i",7),r.Rb(),r.Rb(),r.Sb(10,"li"),r.Sb(11,"a",8),r.Nb(12,"i",9),r.Rb(),r.Rb(),r.Sb(13,"li"),r.Sb(14,"a",10),r.Nb(15,"i",11),r.Rb(),r.Rb(),r.Rb(),r.Sb(16,"div",12),r.Nb(17,"input",13,14),r.Sb(19,"button",15),r.Zb("click",function(){return e.copyAlbumUrl()}),r.Nb(20,"i",16),r.Rb(),r.Rb(),r.Rb(),r.Rb()),2&t&&(r.Cb(8),r.gc("href",e.twitterUrl,r.rc),r.Cb(3),r.gc("href",e.facebookUrl,r.rc),r.Cb(3),r.gc("href",e.whatsappUrl,r.rc),r.Cb(3),r.gc("value",e.albumUrl))},styles:[""]}),t})();var d=n("63YN"),p=n("kpG/"),u=n("0tRc"),g=n("zBoC");function f(t,e){1&t&&r.Nb(0,"span")}function _(t,e){1&t&&r.Nb(0,"span")}const h=function(){return[1,2,3]},C=function(){return[1,2,3,4]};let y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Gb({type:t,selectors:[["app-loading-card-post-album"]],decls:12,vars:4,consts:[[1,"placeholder","post-album"],[1,"placeholder-image"],["src","/assets/img/logo.png",1,"placeholder-image"],[1,"placeholder-content"],[1,"placeholder-content__subtitle"],[1,"placeholder-content__title"],[1,"placeholder-content__tagline"],[1,"placeholder-content__tags"],[4,"ngFor","ngForOf"],[1,"placeholder-content__links"],[1,"placeholder-content__button"]],template:function(t,e){1&t&&(r.Sb(0,"div",0),r.Sb(1,"div",1),r.Nb(2,"img",2),r.Rb(),r.Sb(3,"div",3),r.Nb(4,"div",4),r.Nb(5,"div",5),r.Nb(6,"div",6),r.Sb(7,"div",7),r.wc(8,f,1,0,"span",8),r.Rb(),r.Sb(9,"div",9),r.wc(10,_,1,0,"span",8),r.Rb(),r.Nb(11,"div",10),r.Rb(),r.Rb()),2&t&&(r.Cb(8),r.gc("ngForOf",r.ic(2,h)),r.Cb(2),r.gc("ngForOf",r.ic(3,C)))},directives:[i.j],styles:[".reset-button[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0;border:0;-webkit-appearance:none;-webkit-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;text-align:center;background-color:initial;outline:0}.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.reset-input[_ngcontent-%COMP%]{-webkit-appearance:none;display:block;width:100%;border:0;background-clip:padding-box;outline:0}.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:text}.reset-input.disabled[_ngcontent-%COMP%], .reset-input[_ngcontent-%COMP%]:disabled{cursor:default}@keyframes loading{0%{background-position:-468px 0}to{background-position:468px 0}}.placeholder-image[_ngcontent-%COMP%]{width:100%;height:100%;max-width:30rem;max-height:30rem;margin-bottom:2rem;background-image:linear-gradient(90deg,#bc9264 10%,#a58058 18%,#bc9264 33%);background-size:800px 104px;animation:loading 1.25s linear infinite forwards}@media (min-width:1024px){.placeholder-image[_ngcontent-%COMP%]{margin-right:3rem;min-height:30rem}}.placeholder-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%;height:100%;visibility:hidden}.placeholder-content[_ngcontent-%COMP%]{width:100%;max-width:30rem}.placeholder-content__title[_ngcontent-%COMP%]{width:100%;margin-bottom:.5rem;height:2.5rem;border-radius:2.5rem;background-image:linear-gradient(90deg,#bc9264 10%,#a58058 18%,#bc9264 33%);background-size:800px 104px;animation:loading 1.25s linear infinite forwards}@media (min-width:1024px){.placeholder-content__title[_ngcontent-%COMP%]{height:3.5rem;border-radius:3.5rem}}.placeholder-content__tagline[_ngcontent-%COMP%]{width:40%;margin-bottom:1rem;height:2.5rem;border-radius:2.5rem;background-image:linear-gradient(90deg,#bc9264 10%,#a58058 18%,#bc9264 33%);background-size:800px 104px;animation:loading 1.25s linear infinite forwards}@media (min-width:1024px){.placeholder-content__tagline[_ngcontent-%COMP%]{height:3.5rem;border-radius:3.5rem}}.placeholder-content__subtitle[_ngcontent-%COMP%]{width:60%;margin-bottom:1.5rem;height:1.5rem;border-radius:1.5rem;background-image:linear-gradient(90deg,#bc9264 10%,#a58058 18%,#bc9264 33%);background-size:800px 104px;animation:loading 1.25s linear infinite forwards}.placeholder-content__tags[_ngcontent-%COMP%]{display:flex;margin-bottom:1.5rem}.placeholder-content__tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;height:1.3125rem;margin:.25rem;background-image:linear-gradient(90deg,#bc9264 10%,#a58058 18%,#bc9264 33%);background-size:800px 104px;animation:loading 1.25s linear infinite forwards;border-radius:.25rem}.placeholder-content__tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child, .placeholder-content__tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){width:3.75rem}.placeholder-content__tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){width:2.5rem}.placeholder-content__links[_ngcontent-%COMP%]{display:flex;margin-bottom:1rem}@media (min-width:1024px){.placeholder-content__links[_ngcontent-%COMP%]{margin-bottom:1.5rem}}.placeholder-content__links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;width:2rem;height:2rem;border-radius:50%;background-image:linear-gradient(90deg,#bc9264 10%,#a58058 18%,#bc9264 33%);background-size:800px 104px;animation:loading 1.25s linear infinite forwards}@media (min-width:1024px){.placeholder-content__links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:3rem;height:3rem}}.placeholder-content__links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:last-child){margin-right:1rem}@media (min-width:1024px){.placeholder-content__links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:last-child){margin-right:1.5rem}}.placeholder-content__button[_ngcontent-%COMP%]{width:3rem;height:3rem;background-image:linear-gradient(90deg,#bc9264 10%,#a58058 18%,#bc9264 33%);background-size:800px 104px;animation:loading 1.25s linear infinite forwards;border-radius:.5rem}"]}),t})(),k=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Gb({type:t,selectors:[["app-list-breadcrumb"]],decls:11,vars:0,consts:[["itemscope","","itemtype","http://schema.org/BreadcrumbList",1,"list","list-breadcrumb"],["itemprop","itemListElement","itemscope","","itemtype","http://schema.org/ListItem"],["itemprop","position","content","1"],["itemprop","item","href","/"],["itemprop","name"],["itemprop","position","content","2"],["itemprop","item"]],template:function(t,e){1&t&&(r.Sb(0,"ol",0),r.Sb(1,"li",1),r.Nb(2,"meta",2),r.Sb(3,"a",3),r.Sb(4,"span",4),r.yc(5,"Home"),r.Rb(),r.Rb(),r.Rb(),r.Sb(6,"li",1),r.Nb(7,"meta",5),r.Sb(8,"a",6),r.Sb(9,"span",4),r.yc(10,"\xc1lbum"),r.Rb(),r.Rb(),r.Rb(),r.Rb())},styles:[""]}),t})();const w=[[["","albumImage",""]],[["","albumTitle",""]],[["","albumArtist",""]],[["","albumReleased",""]],[["","albumGenreItem",""]],[["","albumCopyrightHolder",""]],[["","albumDescription",""]],[["","albumListLinks",""]],[["","albumButtonShare",""]]],S=["[albumImage]","[albumTitle]","[albumArtist]","[albumReleased]","[albumGenreItem]","[albumCopyrightHolder]","[albumDescription]","[albumListLinks]","[albumButtonShare]"];let O=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Gb({type:t,selectors:[["app-card-post-album"]],ngContentSelectors:S,decls:20,vars:0,consts:[[1,"post-album"],[1,"post-album__cover"],[1,"post-album__content"],[1,"post-album__content__header"],["itemprop","name",1,"post-album__content__title"],["itemprop","byArtist","itemscope","","itemtype","https://schema.org/MusicGroup",1,"post-album__content__artist"],["itemprop","copyrightYear",1,"post-album__content__year"],[1,"post-album__content__genres"],[1,"post-footer"]],template:function(t,e){1&t&&(r.fc(w),r.Sb(0,"div",0),r.Sb(1,"figure",1),r.ec(2),r.Rb(),r.Sb(3,"div",2),r.Nb(4,"app-list-breadcrumb"),r.Sb(5,"header",3),r.Sb(6,"hgroup"),r.Sb(7,"h1",4),r.ec(8,1),r.Rb(),r.Sb(9,"h2",5),r.ec(10,2),r.Rb(),r.Rb(),r.Sb(11,"strong",6),r.ec(12,3),r.Rb(),r.Sb(13,"ul",7),r.ec(14,4),r.Rb(),r.ec(15,5),r.ec(16,6),r.Rb(),r.ec(17,7),r.Sb(18,"footer",8),r.ec(19,8),r.Rb(),r.Rb(),r.Rb())},directives:[k],styles:[".reset-button[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0;border:0;-webkit-appearance:none;-webkit-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;text-align:center;background-color:initial;outline:0}.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.reset-input[_ngcontent-%COMP%]{-webkit-appearance:none;display:block;width:100%;border:0;background-clip:padding-box;outline:0}.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:text}.reset-input.disabled[_ngcontent-%COMP%], .reset-input[_ngcontent-%COMP%]:disabled{cursor:default}"]}),t})();function R(t,e){if(1&t&&(r.Sb(0,"li"),r.Sb(1,"a",2),r.Nb(2,"i",3),r.Rb(),r.Rb()),2&t){const t=r.bc();r.Cb(1),r.gc("href",t.item.acf.amazon,r.rc)}}function M(t,e){if(1&t&&(r.Sb(0,"li"),r.Sb(1,"a",4),r.Nb(2,"i",5),r.Rb(),r.Rb()),2&t){const t=r.bc();r.Cb(1),r.gc("href",t.item.acf.deezer,r.rc)}}function P(t,e){if(1&t&&(r.Sb(0,"li"),r.Sb(1,"a",6),r.Nb(2,"i",7),r.Rb(),r.Rb()),2&t){const t=r.bc();r.Cb(1),r.gc("href",t.item.acf.lastfm,r.rc)}}function v(t,e){if(1&t&&(r.Sb(0,"li"),r.Sb(1,"a",8),r.Nb(2,"i",9),r.Rb(),r.Rb()),2&t){const t=r.bc();r.Cb(1),r.gc("href",t.item.acf.spotify,r.rc)}}function x(t,e){if(1&t&&(r.Sb(0,"li"),r.Sb(1,"a",10),r.Nb(2,"i",11),r.Rb(),r.Rb()),2&t){const t=r.bc();r.Cb(1),r.gc("href",t.item.acf.youtube,r.rc)}}function N(t,e){if(1&t&&(r.Sb(0,"li"),r.Sb(1,"a",12),r.Nb(2,"i",13),r.Rb(),r.Rb()),2&t){const t=r.bc();r.Cb(1),r.gc("href",t.item.acf.wikipedia,r.rc)}}function I(t,e){if(1&t&&(r.Sb(0,"li"),r.Sb(1,"a",14),r.Nb(2,"i",15),r.Rb(),r.Rb()),2&t){const t=r.bc();r.Cb(1),r.gc("href",t.item.acf.download,r.rc)}}let z=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Gb({type:t,selectors:[["app-list-links"]],inputs:{item:"item"},decls:8,vars:7,consts:[[1,"post-album__content__links"],[4,"ngIf"],["target","_blank","title","Comprar o \xe1lbum page.title na Amazon",1,"post-album__content__links__item",3,"href"],[1,"fab","fa-amazon"],["target","_blank","title","Ouvir o \xe1lbum page.title no Deezer",1,"post-album__content__links__item",3,"href"],[1,"fab","fa-deezer"],["target","_blank","title","Ouvir o \xe1lbum page.title no Last.fm",1,"post-album__content__links__item",3,"href"],[1,"fab","fa-lastfm"],["target","_blank","title","Ouvir o \xe1lbum page.title no Spotify",1,"post-album__content__links__item",3,"href"],[1,"fab","fa-spotify"],["target","_blank","title","Ouvir o \xe1lbum page.title no YouTube",1,"post-album__content__links__item",3,"href"],[1,"fab","fa-youtube"],["target","_blank","title","Ler sobre o \xe1lbum page.title na Wikipedia",1,"post-album__content__links__item",3,"href"],[1,"fab","fa-wikipedia-w"],["target","_blank","title","Fazer download do \xe1lbum page.title",1,"post-album__content__links__item",3,"href"],[1,"fas","fa-download"]],template:function(t,e){1&t&&(r.Sb(0,"ul",0),r.wc(1,R,3,1,"li",1),r.wc(2,M,3,1,"li",1),r.wc(3,P,3,1,"li",1),r.wc(4,v,3,1,"li",1),r.wc(5,x,3,1,"li",1),r.wc(6,N,3,1,"li",1),r.wc(7,I,3,1,"li",1),r.Rb()),2&t&&(r.Cb(1),r.gc("ngIf",null==e.item.acf?null:e.item.acf.amazon),r.Cb(1),r.gc("ngIf",null==e.item.acf?null:e.item.acf.deezer),r.Cb(1),r.gc("ngIf",null==e.item.acf?null:e.item.acf.lastfm),r.Cb(1),r.gc("ngIf",null==e.item.acf?null:e.item.acf.spotify),r.Cb(1),r.gc("ngIf",null==e.item.acf?null:e.item.acf.youtube),r.Cb(1),r.gc("ngIf",null==e.item.acf?null:e.item.acf.wikipedia),r.Cb(1),r.gc("ngIf",null==e.item.acf?null:e.item.acf.download))},directives:[i.k],styles:[""]}),t})(),F=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Gb({type:t,selectors:[["app-footer-default"]],decls:42,vars:0,consts:[["role","contentinfo",1,"footer"],[1,"footer__wrapper"],[1,"footer__copy"],["routerLink","/","title","Bandas de 1 \xc1lbum"],["src","/assets/img/logo.png","loading","lazy","alt","Bandas de 1 \xc1lbum"],[1,"footer__copy__title"],["href","https://kevinoliveira.com.br/","target","_blank"],[1,"footer__nav"],["href","/sobre"],["href","/politica-de-privacidade"],["href","mailto:bandasde1album@gmail.com","target","_blank"],[1,"footer__social"],["href","https://t.me/bandas1album","target","_blank","aria-label","Telegram","title","Entre em nosso grupo do Telegram",1,"footer_social__item","telegram"],["aria-hidden","true",1,"fab","fa-telegram-plane"],["href","https://instagram.com/bandas1album","target","_blank","aria-label","Instagram","title","Siga-nos no Instagram",1,"footer_social__item","instagram"],["aria-hidden","true",1,"fab","fa-instagram"],["href","https://facebook.com/bandas1album","target","_blank","aria-label","Facebook","title","Curta nossa p\xe1gina no Facebook",1,"footer_social__item","facebook"],["aria-hidden","true",1,"fab","fa-facebook-square"],["href","https://open.spotify.com/user/ryyq8vjpuf4vgfgll9zoecplr?si=09LFT22HQaaRIgfIkIatEw","target","_blank","aria-label","Spotify","title","Ou\xe7a nossas playlists no Spotify",1,"footer_social__item","spotify"],["aria-hidden","true",1,"fab","fa-spotify"],["href","https://www.youtube.com/channel/UCBFLR6baFsadrq2MswNT5KQ","target","_blank","aria-label","YouTube","title","Inscreva-se em nosso canal do YouTube",1,"footer_social__item","youtube"],["aria-hidden","true",1,"fab","fa-youtube"],["href","/feed.xml","target","_blank","aria-label","RSS Feed","title","Assine nosso RSS Feed",1,"footer_social__item","rss"],["aria-hidden","true",1,"fas","fa-rss"]],template:function(t,e){1&t&&(r.Sb(0,"footer",0),r.Sb(1,"div",1),r.Sb(2,"div",2),r.Sb(3,"a",3),r.Nb(4,"img",4),r.Rb(),r.Sb(5,"div"),r.Sb(6,"h2",5),r.Sb(7,"strong"),r.yc(8,"Bandas de 1 \xc1lbum"),r.Rb(),r.Sb(9,"span"),r.yc(10,"Eternizando One Album Wonders"),r.Rb(),r.Rb(),r.Sb(11,"p"),r.Sb(12,"small"),r.yc(13," 2021 \xa9 Feito por "),r.Sb(14,"a",6),r.yc(15,"Kevin Oliveira"),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Sb(16,"nav",7),r.Sb(17,"a",8),r.yc(18,"Sobre"),r.Rb(),r.Sb(19,"a",9),r.yc(20,"Privacidade"),r.Rb(),r.Sb(21,"a",10),r.yc(22," Indique \xe1lbuns "),r.Rb(),r.Rb(),r.Sb(23,"ul",11),r.Sb(24,"li"),r.Sb(25,"a",12),r.Nb(26,"i",13),r.Rb(),r.Rb(),r.Sb(27,"li"),r.Sb(28,"a",14),r.Nb(29,"i",15),r.Rb(),r.Rb(),r.Sb(30,"li"),r.Sb(31,"a",16),r.Nb(32,"i",17),r.Rb(),r.Rb(),r.Sb(33,"li"),r.Sb(34,"a",18),r.Nb(35,"i",19),r.Rb(),r.Rb(),r.Sb(36,"li"),r.Sb(37,"a",20),r.Nb(38,"i",21),r.Rb(),r.Rb(),r.Sb(39,"li"),r.Sb(40,"a",22),r.Nb(41,"i",23),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb())},directives:[a.e],styles:[".reset-button[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0;border:0;-webkit-appearance:none;-webkit-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;text-align:center;background-color:initial;outline:0}.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.reset-input[_ngcontent-%COMP%]{-webkit-appearance:none;display:block;width:100%;border:0;background-clip:padding-box;outline:0}.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:text}.reset-input.disabled[_ngcontent-%COMP%], .reset-input[_ngcontent-%COMP%]:disabled{cursor:default}.footer[_ngcontent-%COMP%]{width:100%;z-index:1;display:flex;align-items:center;justify-content:center;padding:1.5rem 0;font-size:.875rem;font-weight:400;text-transform:uppercase;letter-spacing:.0625rem}.footer__wrapper[_ngcontent-%COMP%]{width:calc(100% - 40px);margin:auto;display:flex;align-items:flex-start;flex-direction:column;justify-content:space-between}@media (min-width:768px){.footer__wrapper[_ngcontent-%COMP%]{align-items:center;flex-direction:row;width:calc(100% - 208px)}}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{pointer-events:all}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.footer__copy[_ngcontent-%COMP%]{display:flex;margin-bottom:1rem}@media (min-width:1024px){.footer__copy[_ngcontent-%COMP%]{margin-bottom:0}}.footer__copy[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:2.5rem;height:2.5rem;margin-right:1rem}.footer__copy__title[_ngcontent-%COMP%]{margin:0}.footer__copy__title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:1rem}.footer__copy__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;margin:0 0 .25rem;font-size:.625rem;font-weight:400}.footer__copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.footer__copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:.875rem;text-transform:none;letter-spacing:0}.footer__nav[_ngcontent-%COMP%]{display:none}@media (min-width:1440px){.footer__nav[_ngcontent-%COMP%]{display:block}}.footer__nav[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:not(:last-child){margin-right:2.5rem}.footer__social[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none}.footer__social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;font-size:1.5rem}.footer__social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){margin-right:1rem}.footer__social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{opacity:.6}"]}),t})();function L(t,e){1&t&&r.Nb(0,"app-loading-card-post-album")}function j(t,e){if(1&t&&(r.Sb(0,"li",25),r.Sb(1,"a",26),r.Sb(2,"span",27),r.yc(3),r.Rb(),r.Rb(),r.Rb()),2&t){const t=e.$implicit;r.Cb(1),r.gc("routerLink","/genero/"+t.slug),r.Cb(2),r.zc(t.name)}}function H(t,e){if(1&t){const t=r.Tb();r.Sb(0,"app-card-post-album"),r.Sb(1,"picture",11),r.Nb(2,"source",12),r.Nb(3,"source",13),r.Nb(4,"img",14),r.Rb(),r.Nb(5,"span",15),r.Nb(6,"span",16),r.Nb(7,"span",17),r.cc(8,"date"),r.wc(9,j,4,2,"li",18),r.Nb(10,"app-list-links",19),r.Nb(11,"meta",20),r.Nb(12,"meta",21),r.Nb(13,"app-list-links",22),r.Sb(14,"button",23),r.Zb("click",function(){return r.pc(t),r.bc().share()}),r.Nb(15,"i",24),r.Rb(),r.Rb()}if(2&t){const t=r.bc();r.Cb(2),r.gc("srcset",null==t.item.images?null:t.item.images.full_webp,r.rc),r.Cb(1),r.gc("srcset",null==t.item.images?null:t.item.images.full,r.rc),r.Cb(1),r.gc("src",null==t.item.images?null:t.item.images.full,r.rc),r.Cb(1),r.gc("innerHtml",null==t.item.title?null:t.item.title.rendered,r.qc),r.Cb(1),r.gc("innerHtml",null==t.item.acf?null:t.item.acf.artist,r.qc),r.Cb(1),r.gc("innerHtml",r.dc(8,10,null==t.item.acf?null:t.item.acf.released,"yyyy"),r.qc),r.Cb(2),r.gc("ngForOf",t.item.genres),r.Cb(1),r.gc("item",t.item),r.Cb(1),r.gc("content",null==t.item.acf?null:t.item.acf.label),r.Cb(2),r.gc("item",t.item)}}function U(t,e){if(1&t&&(r.Sb(0,"tr",33),r.Nb(1,"td",34),r.Nb(2,"td",29),r.Rb()),2&t){const t=e.$implicit;r.Cb(1),r.gc("innerHtml",t.title,r.qc),r.Cb(1),r.gc("innerHtml",t.duration,r.qc)}}function A(t,e){if(1&t&&(r.Sb(0,"div",31),r.Sb(1,"h3"),r.yc(2,"Lista de faixas"),r.Rb(),r.Sb(3,"table"),r.wc(4,U,3,2,"tr",32),r.Rb(),r.Rb()),2&t){const t=r.bc(2);r.Cb(4),r.gc("ngForOf",null==t.item.acf?null:t.item.acf.tracklist)}}function $(t,e){if(1&t&&(r.Sb(0,"div",28),r.Qb(1),r.Sb(2,"h3"),r.yc(3),r.Rb(),r.Nb(4,"div",29),r.Pb(),r.wc(5,A,5,1,"div",30),r.Rb()),2&t){const t=r.bc();r.Cb(3),r.Ac("Um pouco mais sobre ",null==t.item.acf?null:t.item.acf.artist,""),r.Cb(1),r.gc("innerHtml",null==t.item.content?null:t.item.content.rendered,r.qc),r.Cb(1),r.gc("ngIf",null==t.item.acf||null==t.item.acf.tracklist?null:t.item.acf.tracklist.length)}}function G(t,e){1&t&&r.Nb(0,"app-footer-default")}const T=[{path:"",component:(()=>{class t{constructor(t,e,n,i,a,o){this.seoService=t,this.albumService=e,this.router=n,this.route=i,this.dialog=a,this.htmlDecodePipe=o,this.pageId="",this.item={},this.loading=!0,this.params={slug:""},this.pageId=this.router.routerState.snapshot.url}ngOnInit(){this.route.params.subscribe(t=>{const{slug:e}=t;this.item={},this.pageId="",this.params.slug=e,this.get()})}get(){this.albumService.get({params:this.params}).subscribe(t=>{this.item=t[0];const e=this.htmlDecodePipe.transform(this.item.title.rendered==this.item.acf.artist?this.item.title.rendered:`${this.item.title.rendered} - ${this.item.acf.artist}`),n=new Date(this.item.acf.released).getFullYear();this.seoService.updateTitle(`${e} (${n}) | Bandas de 1 \xc1lbum`),this.seoService.metatags(this.item),this.loading=!1},t=>{this.loading=!1})}share(){this.dialog.open(m,{panelClass:"modal-share",data:{slug:this.item.slug,title:this.item.title.rendered,artist:this.item.acf.artist,released:Object(i.p)(this.item.acf.released,"yyyy","en-US")}})}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(d.a),r.Mb(p.a),r.Mb(a.c),r.Mb(a.a),r.Mb(o.b),r.Mb(u.a))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-album"]],decls:15,vars:5,consts:[[1,"header"],[1,"header__wrapper"],["aria-label","Voltar para a home","title","Voltar para a home",1,"header__close",3,"routerLink"],["aria-hidden","true",1,"fas","fa-times"],[1,"main"],[1,"main-bg"],["itemscope","","itemtype","https://schema.org/MusicAlbum"],[4,"ngIf"],["class","post-content",4,"ngIf"],["routerLink","/random","title","Modo rand\xf4mico","aria-title","Modo rand\xf4mico",1,"wrapper__button"],["aria-hidden","true",1,"fas","fa-random"],["albumImage",""],["type","image/webp",3,"srcset"],["type","image/jpeg",3,"srcset"],["itemprop","image","loading","lazy","alt","Capa do \xe1lbum  da banda ","loading","lazy",3,"src"],["albumTitle","",3,"innerHtml"],["albumArtist","",3,"innerHtml"],["albumReleased","",3,"innerHtml"],["albumGenreItem","",4,"ngFor","ngForOf"],["albumListLinks","",3,"item"],["albumCopyrightHolder","","itemprop","copyrightHolder",3,"content"],["albumDescription","","itemprop","description","content",""],[3,"item"],["albumButtonShare","","aria-title","Abrir modal de share",1,"post-footer__share",3,"click"],["aria-hidden","true",1,"fas","fa-share-alt"],["albumGenreItem",""],[3,"routerLink"],["itemprop","genre"],[1,"post-content"],[3,"innerHtml"],["class","post-tracklist",4,"ngIf"],[1,"post-tracklist"],["itemprop","track","itemscope","","itemtype","https://schema.org/MusicRecording",4,"ngFor","ngForOf"],["itemprop","track","itemscope","","itemtype","https://schema.org/MusicRecording"],["itemprop","name",3,"innerHtml"]],template:function(t,e){1&t&&(r.Sb(0,"div",0),r.Sb(1,"div",1),r.Sb(2,"a",2),r.Nb(3,"i",3),r.Rb(),r.Rb(),r.Rb(),r.Sb(4,"main",4),r.Nb(5,"app-sidebar"),r.Sb(6,"section"),r.Nb(7,"div",5),r.Sb(8,"article",6),r.wc(9,L,1,0,"app-loading-card-post-album",7),r.wc(10,H,16,13,"app-card-post-album",7),r.wc(11,$,6,3,"div",8),r.Rb(),r.wc(12,G,1,0,"app-footer-default",7),r.Rb(),r.Rb(),r.Sb(13,"a",9),r.Nb(14,"i",10),r.Rb()),2&t&&(r.Cb(2),r.gc("routerLink","/"),r.Cb(7),r.gc("ngIf",e.loading),r.Cb(1),r.gc("ngIf",!e.loading),r.Cb(1),r.gc("ngIf",(null==e.item||null==e.item.content?null:e.item.content.rendered)&&(null==e.item||null==e.item.content?null:e.item.content.rendered.length)>50||(null==e.item||null==e.item.acf||null==e.item.acf.tracklist?null:e.item.acf.tracklist.length)),r.Cb(1),r.gc("ngIf",(null==e.item||null==e.item.content?null:e.item.content.rendered)&&(null==e.item||null==e.item.content?null:e.item.content.rendered.length)>50||(null==e.item||null==e.item.acf||null==e.item.acf.tracklist?null:e.item.acf.tracklist.length)))},directives:[a.e,g.a,i.k,y,O,i.j,z,F],pipes:[i.d],styles:[".reset-button[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0;border:0;-webkit-appearance:none;-webkit-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;text-align:center;background-color:initial;outline:0}.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.reset-input[_ngcontent-%COMP%]{-webkit-appearance:none;display:block;width:100%;border:0;background-clip:padding-box;outline:0}.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:text}.reset-input.disabled[_ngcontent-%COMP%], .reset-input[_ngcontent-%COMP%]:disabled{cursor:default}.main[_ngcontent-%COMP%]{display:flex}.main-bg[_ngcontent-%COMP%]{position:absolute;top:0;left:0;z-index:-1;height:60.875rem;background-image:url(/assets/img/bg.png);background-attachment:fixed;opacity:.5;filter:blur(5px)}.main-bg[_ngcontent-%COMP%], section[_ngcontent-%COMP%]{width:100%}app-footer-default[_ngcontent-%COMP%]{display:block;background-color:#a58058}.wrapper__button[_ngcontent-%COMP%]{top:1.5rem;left:5.5rem}"]}),t})()}];let K=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({imports:[[a.f.forChild(T)],a.f]}),t})();const B=new r.r("DISQUS_SHORTNAME");let J=(()=>{class t{static forRoot(e){return{ngModule:t,providers:[{provide:B,useValue:e}]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({}),t})(),q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({imports:[[i.b]]}),t})();var D=n("zWxg");let E=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({imports:[[i.b,a.f]]}),t})(),W=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({imports:[[i.b,s]]}),t})(),Y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({imports:[[i.b]]}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({imports:[[i.b,Y]]}),t})(),V=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({imports:[[i.b]]}),t})(),X=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({imports:[[i.b,K,J.forRoot("bandas1album"),o.c,q,D.a,E,W,Q,V]]}),t})()}}]);