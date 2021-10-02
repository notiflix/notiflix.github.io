(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1655],{2079:function(e){e.exports={attributes:{_dbPageMeta:{routeId:"DOWNLOAD",lastModifiedDate:"2021-10-29",title:"Download | Notiflix",description:"Notiflix is a JavaScript library for client-side non-blocking notifications, popup boxes, loading indicators, and more that makes your web projects much better.",robots:"noindex, nofollow, noodp, noydir",ogImage:null,themeColor:null},_dbDownloadTable:{title:"Download Notiflix",description:"All available releases with the release notes.",version:"Version",releaseNotes:"Release Notes",releaseDate:"Release Date",download:"Download",latestVersion:"Latest Version",loading:"Please wait...",failure:"Something went wrong.",restricted:"API rate limit exceeded.",restrictedLinkText:"Go to GitHub",restrictedLinkUrl:"https://github.com/notiflix/Notiflix/releases"},_dbDownloadBanner:{image:"/content/media/download/notiflix-download-banner.svg",alt:"Download Notiflix"}},html:""}},9989:function(e,t,a){"use strict";a.d(t,{T:function(){return b}});var _=a(809),o=a.n(_),l=a(266),i=a(8216),n=a(2809),r=a(3634),s=a(7885);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(e);t&&(_=_.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,_)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b=function e(t){var a=this;(0,i.Z)(this,e),(0,n.Z)(this,"headers",void 0),(0,n.Z)(this,"defaultHeaders",{Accept:"application/vnd.github.v3+json"}),(0,n.Z)(this,"getLatestReleaseAsync",(0,l.Z)(o().mark((function e(){var t,_,l,i,n,d,c,b;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l=a.headers,e.next=4,(0,s.Je)(360);case 4:return e.next=6,fetch(r._.api.urlGitHubReleases,{method:"get",headers:l});case 6:if(403!==(i=e.sent).status){e.next=9;break}throw new s.rQ("API rate limit exceeded.",i.status);case 9:if(i.ok){e.next=11;break}throw new s.rQ("Something went wrong.",i.status);case 11:return e.next=13,i.json();case 13:if(n=e.sent,Array.isArray(n)&&!((null===n||void 0===n?void 0:n.length)<1)){e.next=16;break}throw new s.rQ("Not found.",404);case 16:if(d=null===n||void 0===n||null===(t=n.filter((function(e){return!(null!==e&&void 0!==e&&e.draft)&&!(null!==e&&void 0!==e&&e.prerelease)})))||void 0===t||null===(_=t.sort((function(e,t){return(null===t||void 0===t?void 0:t.id)-(null===e||void 0===e?void 0:e.id)})))||void 0===_?void 0:_.find((function(e){return e}))){e.next=19;break}throw new s.rQ("There is no release.",404);case 19:return e.abrupt("return",{fileName:(0,s.bS)(d.tag_name),downloadUrl:d.zipball_url});case 22:return e.prev=22,e.t0=e.catch(0),c=e.t0 instanceof s.rQ?null===e.t0||void 0===e.t0?void 0:e.t0.message:"",b=e.t0 instanceof s.rQ?null===e.t0||void 0===e.t0?void 0:e.t0.status:500,(0,s.lU)(c),e.abrupt("return",b);case 28:case"end":return e.stop()}}),e,null,[[0,22]])})))),(0,n.Z)(this,"getRepoStatsAsync",(0,l.Z)(o().mark((function e(){var t,_,l,i,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=a.headers,e.next=4,(0,s.Je)(360);case 4:return e.next=6,fetch(r._.api.urlGitHubRepo,{method:"get",headers:t});case 6:if(403!==(_=e.sent).status){e.next=9;break}throw new s.rQ("API rate limit exceeded.",_.status);case 9:if(_.ok){e.next=11;break}throw new s.rQ("Something went wrong.",_.status);case 11:return e.next=13,_.json();case 13:if((l=e.sent)instanceof Object&&"stargazers_count"in l){e.next=16;break}throw new s.rQ("Not found.",404);case 16:return e.abrupt("return",{stargazersCount:l.stargazers_count,forksCount:l.forks_count});case 19:return e.prev=19,e.t0=e.catch(0),i=e.t0 instanceof s.rQ?null===e.t0||void 0===e.t0?void 0:e.t0.message:"",n=e.t0 instanceof s.rQ?null===e.t0||void 0===e.t0?void 0:e.t0.status:500,(0,s.lU)(i),e.abrupt("return",n);case 25:case"end":return e.stop()}}),e,null,[[0,19]])})))),(0,n.Z)(this,"getAllReleasesAsync",(0,l.Z)(o().mark((function e(){var t,_,l,i,n,d,c,b;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_=a.headers,e.next=4,(0,s.Je)(360);case 4:return e.next=6,fetch(r._.api.urlGitHubReleases,{method:"get",headers:_});case 6:if(403!==(l=e.sent).status){e.next=9;break}throw new s.rQ("API rate limit exceeded.",l.status);case 9:if(l.ok){e.next=11;break}throw new s.rQ("Something went wrong.",l.status);case 11:return e.next=13,l.json();case 13:if(i=e.sent,Array.isArray(i)&&!((null===i||void 0===i?void 0:i.length)<1)){e.next=16;break}throw new s.rQ("Not found.",404);case 16:if(!((null===(n=(null===i||void 0===i||null===(t=i.sort((function(e,t){return(null===t||void 0===t?void 0:t.id)-(null===e||void 0===e?void 0:e.id)})))||void 0===t?void 0:t.filter((function(e){var t;return!(null!==e&&void 0!==e&&null!==(t=e.tag_name)&&void 0!==t&&t.includes("v1"))})))||[])||void 0===n?void 0:n.length)<1)){e.next=19;break}throw new s.rQ("There is no release.",404);case 19:return d=null===n||void 0===n?void 0:n.map((function(e){return{id:null===e||void 0===e?void 0:e.id,isDraft:null===e||void 0===e?void 0:e.draft,isPrerelease:null===e||void 0===e?void 0:e.prerelease,versionName:(0,s.ij)(null===e||void 0===e?void 0:e.tag_name),releaseNotesAsMarkdown:(null===e||void 0===e?void 0:e.body)||"",releaseDate:(0,s.gR)(null===e||void 0===e?void 0:e.published_at),downloadName:(0,s.bS)(null===e||void 0===e?void 0:e.tag_name),downloadUrl:null===e||void 0===e?void 0:e.zipball_url}})),e.abrupt("return",d);case 23:return e.prev=23,e.t0=e.catch(0),c=e.t0 instanceof s.rQ?null===e.t0||void 0===e.t0?void 0:e.t0.message:"",b=e.t0 instanceof s.rQ?null===e.t0||void 0===e.t0?void 0:e.t0.status:500,(0,s.lU)(c),e.abrupt("return",b);case 29:case"end":return e.stop()}}),e,null,[[0,23]])})))),this.headers=c(c({},this.defaultHeaders),t)}},1655:function(e,t,a){"use strict";a.r(t);var _=a(5893),o=a(809),l=a.n(o),i=a(266),n=a(7294),r=a(649),s=a(6893),d=a(9583),c=a(2079),b=a(9989),u=a(9888),v=a.n(u);t.default=function(){var e,t,a=c.attributes._dbDownloadTable,o=(0,n.useRef)(!1),u=(0,n.useState)({isLoading:!0,isSuccess:!1,isFailure:!1,placeholder:[1,2,3,4,5,6]}),m=u[0],h=u[1],f=(0,n.useCallback)((0,i.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(new b.T).getAllReleasesAsync();case 3:if(t=e.sent,!Array.isArray(t)||!o.current){e.next=8;break}h({isLoading:!1,isSuccess:!0,isFailure:!1,releases:t}),e.next=9;break;case 8:throw new Error(t.toString());case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),o.current&&h({apiStatus:e.t0 instanceof Error&&+(null===e.t0||void 0===e.t0?void 0:e.t0.message)||500,isLoading:!1,isSuccess:!1,isFailure:!0});case 14:case"end":return e.stop()}}),e,null,[[0,11]])}))),[o]);return(0,n.useEffect)((function(){return m.isLoading&&(o.current=!0,f()),function(){o.current=!1}}),[m,o,f]),(0,_.jsxs)("div",{className:v().table,children:[(0,_.jsxs)("div",{className:v().table__head,children:[(0,_.jsx)(s.wzc,{className:v().table__head__icon}),(0,_.jsx)("h1",{className:v().table__head__title,children:null===a||void 0===a?void 0:a.title}),(0,_.jsx)("p",{className:v().table__head__description,children:null===a||void 0===a?void 0:a.description})]}),(0,_.jsxs)("div",{className:v().table__body,children:[(0,_.jsxs)("div",{className:["".concat(v().table__body__item),"".concat(v()["table__body__item--head"])].join(" ").trim(),children:[(0,_.jsx)("div",{className:["".concat(v().table__body__item__col),"".concat(v()["table__body__item__col--version"])].join(" ").trim(),children:(0,_.jsx)("span",{children:null===a||void 0===a?void 0:a.version})}),(0,_.jsx)("div",{className:["".concat(v().table__body__item__col),"".concat(v()["table__body__item__col--notes"])].join(" ").trim(),children:(0,_.jsx)("span",{children:null===a||void 0===a?void 0:a.releaseNotes})}),(0,_.jsx)("div",{className:["".concat(v().table__body__item__col),"".concat(v()["table__body__item__col--date"])].join(" ").trim(),children:(0,_.jsx)("span",{children:null===a||void 0===a?void 0:a.releaseDate})}),(0,_.jsx)("div",{className:["".concat(v().table__body__item__col),"".concat(v()["table__body__item__col--download"])].join(" ").trim(),children:(0,_.jsx)("span",{children:null===a||void 0===a?void 0:a.download})})]}),m.isLoading&&(null===(e=m.placeholder)||void 0===e?void 0:e.map((function(e,t){return(0,_.jsx)("div",{className:["".concat(v().table__body__item),"".concat(v()["table__body__item--placeholder"])].join(" ").trim()},t)}))),m.isFailure&&(0,_.jsxs)("div",{className:v().table__body__failure,children:[(0,_.jsx)(s.BJv,{className:v().table__body__failure__icon}),(0,_.jsx)("p",{className:v().table__body__failure__message,children:403===m.apiStatus?null===a||void 0===a?void 0:a.restricted:null===a||void 0===a?void 0:a.failure}),(0,_.jsxs)("a",{className:v().table__body__failure__link,href:null===a||void 0===a?void 0:a.restrictedLinkUrl,target:"_blank",rel:"noreferrer",children:[(0,_.jsx)(d.hJX,{className:v().table__body__failure__link__icon}),(0,_.jsx)("span",{children:null===a||void 0===a?void 0:a.restrictedLinkText})]})]}),m.isSuccess&&(null===(t=m.releases)||void 0===t?void 0:t.map((function(e,t){return(0,_.jsxs)("div",{className:["".concat(v().table__body__item),"".concat(0===t?"".concat(v()["table__body__item--latest"]):""," ")].join(" ").trim(),children:[(0,_.jsxs)("div",{className:["".concat(v().table__body__item__col),"".concat(v()["table__body__item__col--version"])].join(" ").trim(),children:[(0,_.jsx)("span",{children:null===e||void 0===e?void 0:e.versionName}),0===t&&(0,_.jsx)("span",{className:v()["table__body__item__col--version__latest"],children:null===a||void 0===a?void 0:a.latestVersion})]}),(0,_.jsx)("div",{className:["".concat(v().table__body__item__col),"".concat(v()["table__body__item__col--notes"])].join(" ").trim(),dangerouslySetInnerHTML:{__html:r.M2.parse(null===e||void 0===e?void 0:e.releaseNotesAsMarkdown)||""}}),(0,_.jsx)("div",{className:["".concat(v().table__body__item__col),"".concat(v()["table__body__item__col--date"])].join(" ").trim(),children:(0,_.jsx)("span",{children:null===e||void 0===e?void 0:e.releaseDate})}),(0,_.jsx)("div",{className:["".concat(v().table__body__item__col),"".concat(v()["table__body__item__col--download"])].join(" ").trim(),children:(0,_.jsxs)("a",{href:null===e||void 0===e?void 0:e.downloadUrl,download:!0,className:v().table__body__item__col__link,children:[(0,_.jsx)(s.wzc,{className:v().table__body__item__col__link__icon}),(0,_.jsx)("span",{children:null===e||void 0===e?void 0:e.downloadName})]})})]},t)})))]})]})}},9888:function(e){e.exports={table:"Table_table__2XqHS",table__head:"Table_table__head__3UN4L",table__head__icon:"Table_table__head__icon__2UuUU",table__head__title:"Table_table__head__title__2Qadv",table__head__description:"Table_table__head__description__192jQ",table__body:"Table_table__body__3XRNV",table__body__failure:"Table_table__body__failure__1Zabj",table__body__failure__icon:"Table_table__body__failure__icon__3N63-",table__body__failure__message:"Table_table__body__failure__message__3m9YD",table__body__failure__link:"Table_table__body__failure__link__-PxC6",table__body__failure__link__icon:"Table_table__body__failure__link__icon__1dFr8",table__body__item:"Table_table__body__item__309CJ","table__body__item--head":"Table_table__body__item--head__1BmHV","table__body__item--placeholder":"Table_table__body__item--placeholder__1LzbX",animation_download_table_placeholder:"Table_animation_download_table_placeholder__29kn8","table__body__item--latest":"Table_table__body__item--latest__2Yp6q",table__body__item__col:"Table_table__body__item__col__3JyUu","table__body__item__col--version":"Table_table__body__item__col--version__jC5Mi","table__body__item__col--version__latest":"Table_table__body__item__col--version__latest__3VtAw","table__body__item__col--notes":"Table_table__body__item__col--notes__dL-Qz","table__body__item__col--date":"Table_table__body__item__col--date__2GGJc","table__body__item__col--download":"Table_table__body__item__col--download__3opiR",table__body__item__col__link:"Table_table__body__item__col__link__3yg2-",table__body__item__col__link__icon:"Table_table__body__item__col__link__icon__NFfR2"}}}]);