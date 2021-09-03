(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"99Un":function(t,e,n){"use strict";n.r(e),n.d(e,"HomeModule",function(){return P});var o=n("ofXK"),i=n("tyNb"),s=n("fXoL"),r=n("UYTu"),a=n("/IUn"),l=n("zBoC"),c=n("mrSG"),b=n("nhpI"),d=n("4LSP"),u=n("Oxw5");function p(t,e){1&t&&s.Nb(0,"app-placeholder-list-albums")}function g(t,e){if(1&t&&(s.Sb(0,"li",4),s.Sb(1,"app-card-list-albums",5),s.Sb(2,"picture"),s.Nb(3,"source",6),s.Nb(4,"img",7),s.Rb(),s.Rb(),s.Rb()),2&t){const t=e.$implicit;s.Cb(1),s.gc("routerLink","/album/"+t.node.slug),s.Cb(2),s.gc("srcset",t.node.featuredImage.node.sourceUrl+".webp",s.rc),s.Cb(1),s.gc("src",t.node.featuredImage.node.sourceUrl,s.rc)("alt","Capa do \xe1lbum "+t.node.title+" de "+t.node.acf.artist)}}function m(t,e){if(1&t&&(s.Sb(0,"app-list-albums"),s.wc(1,g,5,4,"li",1),s.Sb(2,"li",2),s.Sb(3,"div",3),s.Sb(4,"strong"),s.yc(5),s.Rb(),s.Sb(6,"span"),s.yc(7,"\xe1lbuns"),s.Rb(),s.Rb(),s.Rb(),s.Rb()),2&t){const t=s.bc();s.Cb(1),s.gc("ngForOf",t.list.items),s.Cb(4),s.Ac("+",t.total-95,"")}}let f=(()=>{class t{constructor(t,e){this.apollo=e,this.isBrowser=!1,this.firstLoading=!0,this.list={loading:!0,items:[]},this.total=0,this.isBrowser=Object(o.q)(t)}ngOnInit(){this.getAlbums()}getAlbums(){return Object(c.b)(this,void 0,void 0,function*(){this.isBrowser&&this.apollo.watchQuery({query:r.a`
        {
          albums(first: 95) {
            edges {
              node {
                slug
                title
                link
                acf {
                  artist
                }
                featuredImage {
                  node {
                    sourceUrl(size: THUMBNAIL)
                  }
                }
              }
            },
            pageInfo {
              total
            }
          }
        }
      `}).valueChanges.subscribe(t=>{this.list.items=t.data.albums.edges,this.total=t.data.albums.pageInfo.total,this.list.loading=!1,this.firstLoading=!1})})}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(s.C),s.Mb(a.b))},t.\u0275cmp=s.Gb({type:t,selectors:[["app-list-albums-section"]],decls:3,vars:2,consts:[[4,"ngIf"],["albumItem","",4,"ngFor","ngForOf"],["albumItem","",1,"length"],[1,"length__wrapper"],["albumItem",""],[3,"routerLink"],["type","image/webp",3,"srcset"],["width","160","height","160","loading","lazy",1,"list-posts__card__image",3,"src","alt"]],template:function(t,e){1&t&&(s.Sb(0,"section"),s.wc(1,p,1,0,"app-placeholder-list-albums",0),s.wc(2,m,8,2,"app-list-albums",0),s.Rb()),2&t&&(s.Cb(1),s.gc("ngIf",e.firstLoading),s.Cb(1),s.gc("ngIf",e.list.items.length&&!e.list.loading))},directives:[o.k,b.a,d.a,o.j,u.a,i.d],styles:[".reset-button[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0;border:0;-webkit-appearance:none;-webkit-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;text-align:center;background-color:initial;outline:0}.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.reset-input[_ngcontent-%COMP%]{-webkit-appearance:none;display:block;width:100%;border:0;background-clip:padding-box;outline:0}.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:text}.length[_ngcontent-%COMP%], .reset-input.disabled[_ngcontent-%COMP%], .reset-input[_ngcontent-%COMP%]:disabled{cursor:default}.length[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.length__wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;height:100%;color:#fff;background-color:#a58058;text-align:center;line-height:1.5rem;transition:all .2s ease}.length__wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .length__wrapper[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block}.length__wrapper[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:2rem;font-weight:900}.length__wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.5rem}"]}),t})();const h=[{path:"",component:(()=>{class t{constructor(t,e){this.apollo=e,this.isBrowser=!1,this.isBrowser=Object(o.q)(t)}ngOnInit(){this.get()}get(){this.isBrowser&&this.apollo.watchQuery({query:r.a`
        {
          page(id: "/", idType: URI) {
            seo {
              fullHead
            }
          }
        }
      `}).valueChanges.subscribe(t=>{var e;const n=t.data.page.seo;null===(e=document.querySelector("head"))||void 0===e||e.insertAdjacentHTML("beforeend",n.fullHead)})}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(s.C),s.Mb(a.b))},t.\u0275cmp=s.Gb({type:t,selectors:[["app-home"]],decls:5,vars:0,consts:[[1,"main","default"],["routerLink","/random","title","Modo rand\xf4mico","aria-title","Modo rand\xf4mico",1,"wrapper__button"],["aria-hidden","true",1,"fas","fa-random"]],template:function(t,e){1&t&&(s.Sb(0,"main",0),s.Nb(1,"app-sidebar"),s.Nb(2,"app-list-albums-section"),s.Rb(),s.Sb(3,"a",1),s.Nb(4,"i",2),s.Rb())},directives:[l.a,f,i.e],styles:[".reset-button[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0;border:0;-webkit-appearance:none;-webkit-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;text-align:center;background-color:initial;outline:0}.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.reset-input[_ngcontent-%COMP%]{-webkit-appearance:none;display:block;width:100%;border:0;background-clip:padding-box;outline:0}.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:text}.reset-input.disabled[_ngcontent-%COMP%], .reset-input[_ngcontent-%COMP%]:disabled{cursor:default}.main[_ngcontent-%COMP%]{display:flex}.wrapper__button[_ngcontent-%COMP%]{left:5.5rem;bottom:1.5rem}"]}),t})()}];let w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({imports:[[i.f.forChild(h)],i.f]}),t})();var _=n("zWxg"),C=n("0TNI"),M=n("MDt6"),O=n("0xAH");let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({imports:[[o.b,O.a,C.a,M.a,i.f]]}),t})(),P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({imports:[[o.b,w,_.a,y]]}),t})()}}]);