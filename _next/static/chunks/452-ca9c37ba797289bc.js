(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[452],{2079:function(e){e.exports={attributes:{_dbPageMeta:{routeId:"DOWNLOAD",lastModifiedDate:"2025-01-04",title:"Download | Notiflix",description:"Notiflix is a dependency-free, secure, and lightweight JavaScript library built with pure JavaScript, offering client-side non-blocking notifications, popup boxes, loading indicators, and more.",robots:"index, follow, noodp, noydir",ogImage:null,themeColor:null},_dbDownloadTable:{title:"Download Notiflix",description:"All available releases with the release notes.",version:"Version",releaseNotes:"Release Notes",releaseDate:"Release Date",download:"Download",latestVersion:"Latest Version",loading:"Please wait...",failure:"Something went wrong.",restricted:"API rate limit exceeded.",restrictedLinkText:"Go to GitHub",restrictedLinkUrl:"https://github.com/notiflix/Notiflix/releases"},_dbDownloadBanner:{image:"/content/media/download/notiflix-download-banner.svg",alt:"Download Notiflix"}},html:""}},4173:function(e,t,a){"use strict";a.d(t,{T:function(){return c}});var _=a(8520),n=a.n(_),i=a(2319),o=a(8869);function l(e,t,a,_,n,i,o){try{var l=e[i](o),r=l.value}catch(s){return void a(s)}l.done?t(r):Promise.resolve(r).then(_,n)}function r(e){return function(){var t=this,a=arguments;return new Promise((function(_,n){var i=e.apply(t,a);function o(e){l(i,_,n,o,r,"next",e)}function r(e){l(i,_,n,o,r,"throw",e)}o(void 0)}))}}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){return null!=t&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t}var c=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.defaultHeaders={Accept:"application/vnd.github.v3+json"},this.getLatestReleaseAsync=r(n().mark((function e(){var t,a,_,l,r,s,c,b;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_=this.headers,e.next=5,(0,o.Je)(360);case 5:return e.next=7,fetch(i._.api.urlGitHubReleases,{method:"get",headers:_});case 7:if(403!==(l=e.sent).status){e.next=10;break}throw new o.rQ("API rate limit exceeded.",l.status);case 10:if(l.ok){e.next=12;break}throw new o.rQ("Something went wrong.",l.status);case 12:return e.next=14,l.json();case 14:if(r=e.sent,Array.isArray(r)&&!((null===r||void 0===r?void 0:r.length)<1)){e.next=17;break}throw new o.rQ("Not found.",404);case 17:if(s=null===(a=null===(t=null===r||void 0===r?void 0:r.filter((function(e){return!(null===e||void 0===e?void 0:e.draft)&&!(null===e||void 0===e?void 0:e.prerelease)})))||void 0===t?void 0:t.sort((function(e,t){return(null===t||void 0===t?void 0:t.id)-(null===e||void 0===e?void 0:e.id)})))||void 0===a?void 0:a.find((function(e){return e}))){e.next=20;break}throw new o.rQ("There is no release.",404);case 20:return e.abrupt("return",{fileName:(0,o.bS)(s.tag_name),downloadUrl:s.zipball_url});case 23:return e.prev=23,e.t0=e.catch(0),c=d(e.t0,o.rQ)?null===e.t0||void 0===e.t0?void 0:e.t0.message:"",b=d(e.t0,o.rQ)?null===e.t0||void 0===e.t0?void 0:e.t0.status:500,(0,o.lU)(c),e.abrupt("return",b);case 29:case"end":return e.stop()}}),e,this,[[0,23]])})).bind(this)).bind(this),this.getRepoStatsAsync=r(n().mark((function e(){var t,a,_,l,r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.headers,e.next=4,(0,o.Je)(360);case 4:return e.next=6,fetch(i._.api.urlGitHubRepo,{method:"get",headers:t});case 6:if(403!==(a=e.sent).status){e.next=9;break}throw new o.rQ("API rate limit exceeded.",a.status);case 9:if(a.ok){e.next=11;break}throw new o.rQ("Something went wrong.",a.status);case 11:return e.next=13,a.json();case 13:if(d(_=e.sent,Object)&&"stargazers_count"in _){e.next=16;break}throw new o.rQ("Not found.",404);case 16:return e.abrupt("return",{stargazersCount:_.stargazers_count,forksCount:_.forks_count});case 19:return e.prev=19,e.t0=e.catch(0),l=d(e.t0,o.rQ)?null===e.t0||void 0===e.t0?void 0:e.t0.message:"",r=d(e.t0,o.rQ)?null===e.t0||void 0===e.t0?void 0:e.t0.status:500,(0,o.lU)(l),e.abrupt("return",r);case 25:case"end":return e.stop()}}),e,this,[[0,19]])})).bind(this)).bind(this),this.getAllReleasesAsync=r(n().mark((function e(){var t,a,_,l,r,s,c,b;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=this.headers,e.next=5,(0,o.Je)(360);case 5:return e.next=7,fetch(i._.api.urlGitHubReleases,{method:"get",headers:a});case 7:if(403!==(_=e.sent).status){e.next=10;break}throw new o.rQ("API rate limit exceeded.",_.status);case 10:if(_.ok){e.next=12;break}throw new o.rQ("Something went wrong.",_.status);case 12:return e.next=14,_.json();case 14:if(l=e.sent,Array.isArray(l)&&!((null===l||void 0===l?void 0:l.length)<1)){e.next=17;break}throw new o.rQ("Not found.",404);case 17:if(!((null===(r=(null===(t=null===l||void 0===l?void 0:l.sort((function(e,t){return(null===t||void 0===t?void 0:t.id)-(null===e||void 0===e?void 0:e.id)})))||void 0===t?void 0:t.filter((function(e){var t;return!(null===e||void 0===e||null===(t=e.tag_name)||void 0===t?void 0:t.includes("v1"))})))||[])||void 0===r?void 0:r.length)<1)){e.next=20;break}throw new o.rQ("There is no release.",404);case 20:return s=null===r||void 0===r?void 0:r.map((function(e){return{id:null===e||void 0===e?void 0:e.id,isDraft:null===e||void 0===e?void 0:e.draft,isPrerelease:null===e||void 0===e?void 0:e.prerelease,versionName:(0,o.ij)(null===e||void 0===e?void 0:e.tag_name),releaseNotesAsMarkdown:(null===e||void 0===e?void 0:e.body)||"",releaseDate:(0,o.gR)(null===e||void 0===e?void 0:e.published_at),downloadName:(0,o.bS)(null===e||void 0===e?void 0:e.tag_name),downloadUrl:null===e||void 0===e?void 0:e.zipball_url}})),e.abrupt("return",s);case 24:return e.prev=24,e.t0=e.catch(0),c=d(e.t0,o.rQ)?null===e.t0||void 0===e.t0?void 0:e.t0.message:"",b=d(e.t0,o.rQ)?null===e.t0||void 0===e.t0?void 0:e.t0.status:500,(0,o.lU)(c),e.abrupt("return",b);case 30:case"end":return e.stop()}}),e,this,[[0,24]])})).bind(this)).bind(this),this.headers=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},_=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(_=_.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),_.forEach((function(t){s(e,t,a[t])}))}return e}({},this.defaultHeaders,t)}},452:function(e,t,a){"use strict";a.r(t);var _=a(8520),n=a.n(_),i=a(5893),o=a(7294),l=a(649),r=a(6893),s=a(9583),d=a(2079),c=a(4173),b=a(5692),u=a.n(b);function v(e,t,a,_,n,i,o){try{var l=e[i](o),r=l.value}catch(s){return void a(s)}l.done?t(r):Promise.resolve(r).then(_,n)}t.default=function(){var e,t,a,_=d.attributes._dbDownloadTable,b=(0,o.useRef)(!1),m=(0,o.useState)({isLoading:!0,isSuccess:!1,isFailure:!1,placeholder:[1,2,3,4,5,6]}),h=m[0],f=m[1],y=(0,o.useCallback)((a=n().mark((function e(){var t;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(new c.T).getAllReleasesAsync();case 3:if(t=e.sent,!Array.isArray(t)||!b.current){e.next=8;break}f({isLoading:!1,isSuccess:!0,isFailure:!1,releases:t}),e.next=9;break;case 8:throw new Error(t.toString());case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),b.current&&f({apiStatus:(a=e.t0,_=Error,(null!=_&&"undefined"!==typeof Symbol&&_[Symbol.hasInstance]?_[Symbol.hasInstance](a):a instanceof _)&&+(null===e.t0||void 0===e.t0?void 0:e.t0.message)||500),isLoading:!1,isSuccess:!1,isFailure:!0});case 14:case"end":return e.stop()}var a,_}),e,null,[[0,11]])})),function(){var e=this,t=arguments;return new Promise((function(_,n){var i=a.apply(e,t);function o(e){v(i,_,n,o,l,"next",e)}function l(e){v(i,_,n,o,l,"throw",e)}o(void 0)}))}),[b]);return(0,o.useEffect)((function(){return h.isLoading&&(b.current=!0,y()),function(){b.current=!1}}),[h,b,y]),(0,i.jsxs)("div",{className:u().table,children:[(0,i.jsxs)("div",{className:u().table__head,children:[(0,i.jsx)(r.wzc,{className:u().table__head__icon}),(0,i.jsx)("h1",{className:u().table__head__title,children:null===_||void 0===_?void 0:_.title}),(0,i.jsx)("p",{className:u().table__head__description,children:null===_||void 0===_?void 0:_.description})]}),(0,i.jsxs)("div",{className:u().table__body,children:[(0,i.jsxs)("div",{className:["".concat(u().table__body__item),"".concat(u()["table__body__item--head"])].join(" ").trim(),children:[(0,i.jsx)("div",{className:["".concat(u().table__body__item__col),"".concat(u()["table__body__item__col--version"])].join(" ").trim(),children:(0,i.jsx)("span",{children:null===_||void 0===_?void 0:_.version})}),(0,i.jsx)("div",{className:["".concat(u().table__body__item__col),"".concat(u()["table__body__item__col--notes"])].join(" ").trim(),children:(0,i.jsx)("span",{children:null===_||void 0===_?void 0:_.releaseNotes})}),(0,i.jsx)("div",{className:["".concat(u().table__body__item__col),"".concat(u()["table__body__item__col--date"])].join(" ").trim(),children:(0,i.jsx)("span",{children:null===_||void 0===_?void 0:_.releaseDate})}),(0,i.jsx)("div",{className:["".concat(u().table__body__item__col),"".concat(u()["table__body__item__col--download"])].join(" ").trim(),children:(0,i.jsx)("span",{children:null===_||void 0===_?void 0:_.download})})]}),h.isLoading&&(null===(e=h.placeholder)||void 0===e?void 0:e.map((function(e,t){return(0,i.jsx)("div",{className:["".concat(u().table__body__item),"".concat(u()["table__body__item--placeholder"])].join(" ").trim()},t)}))),h.isFailure&&(0,i.jsxs)("div",{className:u().table__body__failure,children:[(0,i.jsx)(r.BJv,{className:u().table__body__failure__icon}),(0,i.jsx)("p",{className:u().table__body__failure__message,children:403===h.apiStatus?null===_||void 0===_?void 0:_.restricted:null===_||void 0===_?void 0:_.failure}),(0,i.jsxs)("a",{className:u().table__body__failure__link,href:null===_||void 0===_?void 0:_.restrictedLinkUrl,target:"_blank",rel:"noreferrer",children:[(0,i.jsx)(s.hJX,{className:u().table__body__failure__link__icon}),(0,i.jsx)("span",{children:null===_||void 0===_?void 0:_.restrictedLinkText})]})]}),h.isSuccess&&(null===(t=h.releases)||void 0===t?void 0:t.map((function(e,t){return(0,i.jsxs)("div",{className:["".concat(u().table__body__item),"".concat(0===t?"".concat(u()["table__body__item--latest"]):""," ")].join(" ").trim(),children:[(0,i.jsxs)("div",{className:["".concat(u().table__body__item__col),"".concat(u()["table__body__item__col--version"])].join(" ").trim(),children:[(0,i.jsx)("span",{children:null===e||void 0===e?void 0:e.versionName}),0===t&&(0,i.jsx)("span",{className:u()["table__body__item__col--version__latest"],children:null===_||void 0===_?void 0:_.latestVersion})]}),(0,i.jsx)("div",{className:["".concat(u().table__body__item__col),"".concat(u()["table__body__item__col--notes"])].join(" ").trim(),dangerouslySetInnerHTML:{__html:l.M2.parse(null===e||void 0===e?void 0:e.releaseNotesAsMarkdown)||""}}),(0,i.jsx)("div",{className:["".concat(u().table__body__item__col),"".concat(u()["table__body__item__col--date"])].join(" ").trim(),children:(0,i.jsx)("span",{children:null===e||void 0===e?void 0:e.releaseDate})}),(0,i.jsx)("div",{className:["".concat(u().table__body__item__col),"".concat(u()["table__body__item__col--download"])].join(" ").trim(),children:(0,i.jsxs)("a",{href:null===e||void 0===e?void 0:e.downloadUrl,download:!0,className:u().table__body__item__col__link,children:[(0,i.jsx)(r.wzc,{className:u().table__body__item__col__link__icon}),(0,i.jsx)("span",{children:null===e||void 0===e?void 0:e.downloadName})]})})]},t)})))]})]})}},5692:function(e){e.exports={table:"Table_table___rxOH",table__head:"Table_table__head__kigR1",table__head__icon:"Table_table__head__icon__zyWa3",table__head__title:"Table_table__head__title__fTRwE",table__head__description:"Table_table__head__description__W4j4A",table__body:"Table_table__body__Aexak",table__body__failure:"Table_table__body__failure__9eHYV",table__body__failure__icon:"Table_table__body__failure__icon__LVPdq",table__body__failure__message:"Table_table__body__failure__message__8A_i_",table__body__failure__link:"Table_table__body__failure__link__Z1z2g",table__body__failure__link__icon:"Table_table__body__failure__link__icon__2EsQl",table__body__item:"Table_table__body__item__daB0Z","table__body__item--head":"Table_table__body__item--head__vK67d","table__body__item--placeholder":"Table_table__body__item--placeholder__lakN2",animation_download_table_placeholder:"Table_animation_download_table_placeholder__DLT0x","table__body__item--latest":"Table_table__body__item--latest__QW9mC",table__body__item__col:"Table_table__body__item__col__pbo0C","table__body__item__col--version":"Table_table__body__item__col--version__w2OKl","table__body__item__col--version__latest":"Table_table__body__item__col--version__latest__oezB9","table__body__item__col--notes":"Table_table__body__item__col--notes__ZU2sB","table__body__item__col--date":"Table_table__body__item__col--date__PEv3_","table__body__item__col--download":"Table_table__body__item__col--download__kUiLm",table__body__item__col__link:"Table_table__body__item__col__link__csD_l",table__body__item__col__link__icon:"Table_table__body__item__col__link__icon__Pi_eP"}}}]);