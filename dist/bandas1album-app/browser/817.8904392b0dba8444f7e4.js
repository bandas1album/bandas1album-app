"use strict";(self.webpackChunkbandas1album_app=self.webpackChunkbandas1album_app||[]).push([[817],{6817:(T,r,o)=>{o.r(r),o.d(r,{HomeModule:()=>x});var i=o(8583),a=o(2397),t=o(3018),c=o(8992),d=o(208),u=o(5163),p=o(5172),m=o(8042),g=o(3556),b=o(1556);function f(e,s){1&e&&t._UZ(0,"app-placeholder-list-albums")}function h(e,s){if(1&e&&(t.TgZ(0,"li",4),t.TgZ(1,"app-card-list-albums",5),t.TgZ(2,"picture"),t._UZ(3,"source",6),t._UZ(4,"img",7),t.qZA(),t.qZA(),t.qZA()),2&e){const n=s.$implicit;t.xp6(1),t.Q6J("routerLink","/album/"+n.node.slug),t.xp6(2),t.Q6J("srcset",n.node.featuredImage.node.sourceUrl+".webp",t.LSH),t.xp6(1),t.Q6J("src",n.node.featuredImage.node.sourceUrl,t.LSH)("alt","Capa do \xe1lbum "+n.node.title+" de "+n.node.acf.artist)}}function C(e,s){if(1&e&&(t.TgZ(0,"app-list-albums"),t.YNc(1,h,5,4,"li",1),t.TgZ(2,"li",2),t.TgZ(3,"div",3),t.TgZ(4,"strong"),t._uU(5),t.qZA(),t.TgZ(6,"span"),t._uU(7,"\xe1lbuns"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.list),t.xp6(4),t.hij("+",n.total-95,"")}}let M=(()=>{class e{constructor(){this.isBrowser=!1,this.list=[],this.loading=!0,this.total=0}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-list-albums-section"]],inputs:{list:"list",loading:"loading",total:"total"},decls:3,vars:2,consts:[[4,"ngIf"],["albumItem","",4,"ngFor","ngForOf"],["albumItem","",1,"length"],[1,"length__wrapper"],["albumItem",""],[3,"routerLink"],["type","image/webp",3,"srcset"],["width","160","height","160","loading","lazy",1,"list-posts__card__image",3,"src","alt"]],template:function(n,l){1&n&&(t.TgZ(0,"section"),t.YNc(1,f,1,0,"app-placeholder-list-albums",0),t.YNc(2,C,8,2,"app-list-albums",0),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngIf",l.loading),t.xp6(1),t.Q6J("ngIf",l.list.length&&!l.loading))},directives:[i.O5,m.k,g.p,i.sg,b.v,a.rH],styles:[".reset-button[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0;border:0;-webkit-appearance:none;-webkit-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;text-align:center;background-color:transparent;outline:0}.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.reset-input[_ngcontent-%COMP%]{-webkit-appearance:none;display:block;width:100%;border:0;background-clip:padding-box;outline:0}.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:text}.reset-input[_ngcontent-%COMP%]:disabled, .reset-input.disabled[_ngcontent-%COMP%]{cursor:default}.length[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;cursor:default}.length__wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;height:100%;color:#fff;background-color:#a58058;text-align:center;line-height:1.5rem;transition:.2s all ease}.length__wrapper[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .length__wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}.length__wrapper[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:2rem;font-weight:900}.length__wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.5rem}"]}),e})();const O=c.Ps`
{
  page(id: "/", idType: URI) {
    seo {
      title
      metaDesc
      opengraphImage {
        sourceUrl
      }
    }
  }
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
    }
    pageInfo {
      total
    }
  }
}
`,v=[{path:"",component:(()=>{class e{constructor(n,l,S){this.apollo=l,this.seoService=S,this.isBrowser=!1,this.loading=!0,this.items=[],this.total=0,this.isBrowser=(0,i.NF)(n)}ngOnInit(){this.get()}get(){!this.isBrowser||this.apollo.watchQuery({query:O}).valueChanges.subscribe(n=>{this.seoService.update(n.data.page.seo),this.seoService.updateOgUrl(),this.items=n.data.albums.edges,this.total=n.data.albums.pageInfo.total,this.loading=!1})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(t.Lbi),t.Y36(d._M),t.Y36(u.v))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:5,vars:3,consts:[[1,"main","default"],[3,"list","total","loading"],["routerLink","/random","title","Modo rand\xf4mico","aria-title","Modo rand\xf4mico",1,"wrapper__button"],["aria-hidden","true",1,"fas","fa-random"]],template:function(n,l){1&n&&(t.TgZ(0,"main",0),t._UZ(1,"app-sidebar"),t._UZ(2,"app-list-albums-section",1),t.qZA(),t.TgZ(3,"a",2),t._UZ(4,"i",3),t.qZA()),2&n&&(t.xp6(2),t.Q6J("list",l.items)("total",l.total)("loading",l.loading))},directives:[p.k,M,a.yS],styles:[".reset-button[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0;border:0;-webkit-appearance:none;-webkit-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;text-align:center;background-color:transparent;outline:0}.reset-button[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.reset-input[_ngcontent-%COMP%]{-webkit-appearance:none;display:block;width:100%;border:0;background-clip:padding-box;outline:0}.reset-input[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:text}.reset-input[_ngcontent-%COMP%]:disabled, .reset-input.disabled[_ngcontent-%COMP%]{cursor:default}.main[_ngcontent-%COMP%]{display:flex}.wrapper__button[_ngcontent-%COMP%]{left:5.5rem;bottom:1.5rem}"]}),e})()}];let Z=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.Bz.forChild(v)],a.Bz]}),e})();var y=o(5460),A=o(3515),P=o(2824),_=o(5324);let w=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[i.ez,_.I,A.g,P.r,a.Bz]]}),e})(),x=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[i.ez,Z,y.l,w]]}),e})()}}]);