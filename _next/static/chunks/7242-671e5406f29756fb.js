(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7242],{4173:function(e,t,n){"use strict";n.d(t,{T:function(){return u}});var r=n(5666),o=n.n(r),i=n(2319),a=n(8869);function s(e,t,n,r,o,i,a){try{var s=e[i](a),l=s.value}catch(d){return void n(d)}s.done?t(l):Promise.resolve(l).then(r,o)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){s(i,r,o,a,l,"next",e)}function l(e){s(i,r,o,a,l,"throw",e)}a(void 0)}))}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){return null!=t&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t}var u=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=this;this.defaultHeaders={Accept:"application/vnd.github.v3+json"},this.getLatestReleaseAsync=l(o().mark((function e(){var t,r,s,l,d,u,_,f;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=n.headers,e.next=5,(0,a.Je)(360);case 5:return e.next=7,fetch(i._.api.urlGitHubReleases,{method:"get",headers:s});case 7:if(403!==(l=e.sent).status){e.next=10;break}throw new a.rQ("API rate limit exceeded.",l.status);case 10:if(l.ok){e.next=12;break}throw new a.rQ("Something went wrong.",l.status);case 12:return e.next=14,l.json();case 14:if(d=e.sent,Array.isArray(d)&&!((null===d||void 0===d?void 0:d.length)<1)){e.next=17;break}throw new a.rQ("Not found.",404);case 17:if(u=null===(r=null===(t=null===d||void 0===d?void 0:d.filter((function(e){return!(null===e||void 0===e?void 0:e.draft)&&!(null===e||void 0===e?void 0:e.prerelease)})))||void 0===t?void 0:t.sort((function(e,t){return(null===t||void 0===t?void 0:t.id)-(null===e||void 0===e?void 0:e.id)})))||void 0===r?void 0:r.find((function(e){return e}))){e.next=20;break}throw new a.rQ("There is no release.",404);case 20:return e.abrupt("return",{fileName:(0,a.bS)(u.tag_name),downloadUrl:u.zipball_url});case 23:return e.prev=23,e.t0=e.catch(0),_=c(e.t0,a.rQ)?null===e.t0||void 0===e.t0?void 0:e.t0.message:"",f=c(e.t0,a.rQ)?null===e.t0||void 0===e.t0?void 0:e.t0.status:500,(0,a.lU)(_),e.abrupt("return",f);case 29:case"end":return e.stop()}}),e,null,[[0,23]])})).bind(this)).bind(this),this.getRepoStatsAsync=l(o().mark((function e(){var t,r,s,l,d;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=n.headers,e.next=4,(0,a.Je)(360);case 4:return e.next=6,fetch(i._.api.urlGitHubRepo,{method:"get",headers:t});case 6:if(403!==(r=e.sent).status){e.next=9;break}throw new a.rQ("API rate limit exceeded.",r.status);case 9:if(r.ok){e.next=11;break}throw new a.rQ("Something went wrong.",r.status);case 11:return e.next=13,r.json();case 13:if(c(s=e.sent,Object)&&"stargazers_count"in s){e.next=16;break}throw new a.rQ("Not found.",404);case 16:return e.abrupt("return",{stargazersCount:s.stargazers_count,forksCount:s.forks_count});case 19:return e.prev=19,e.t0=e.catch(0),l=c(e.t0,a.rQ)?null===e.t0||void 0===e.t0?void 0:e.t0.message:"",d=c(e.t0,a.rQ)?null===e.t0||void 0===e.t0?void 0:e.t0.status:500,(0,a.lU)(l),e.abrupt("return",d);case 25:case"end":return e.stop()}}),e,null,[[0,19]])})).bind(this)).bind(this),this.getAllReleasesAsync=l(o().mark((function e(){var t,r,s,l,d,u,_,f;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=n.headers,e.next=5,(0,a.Je)(360);case 5:return e.next=7,fetch(i._.api.urlGitHubReleases,{method:"get",headers:r});case 7:if(403!==(s=e.sent).status){e.next=10;break}throw new a.rQ("API rate limit exceeded.",s.status);case 10:if(s.ok){e.next=12;break}throw new a.rQ("Something went wrong.",s.status);case 12:return e.next=14,s.json();case 14:if(l=e.sent,Array.isArray(l)&&!((null===l||void 0===l?void 0:l.length)<1)){e.next=17;break}throw new a.rQ("Not found.",404);case 17:if(!((null===(d=(null===(t=null===l||void 0===l?void 0:l.sort((function(e,t){return(null===t||void 0===t?void 0:t.id)-(null===e||void 0===e?void 0:e.id)})))||void 0===t?void 0:t.filter((function(e){var t;return!(null===e||void 0===e||null===(t=e.tag_name)||void 0===t?void 0:t.includes("v1"))})))||[])||void 0===d?void 0:d.length)<1)){e.next=20;break}throw new a.rQ("There is no release.",404);case 20:return u=null===d||void 0===d?void 0:d.map((function(e){return{id:null===e||void 0===e?void 0:e.id,isDraft:null===e||void 0===e?void 0:e.draft,isPrerelease:null===e||void 0===e?void 0:e.prerelease,versionName:(0,a.ij)(null===e||void 0===e?void 0:e.tag_name),releaseNotesAsMarkdown:(null===e||void 0===e?void 0:e.body)||"",releaseDate:(0,a.gR)(null===e||void 0===e?void 0:e.published_at),downloadName:(0,a.bS)(null===e||void 0===e?void 0:e.tag_name),downloadUrl:null===e||void 0===e?void 0:e.zipball_url}})),e.abrupt("return",u);case 24:return e.prev=24,e.t0=e.catch(0),_=c(e.t0,a.rQ)?null===e.t0||void 0===e.t0?void 0:e.t0.message:"",f=c(e.t0,a.rQ)?null===e.t0||void 0===e.t0?void 0:e.t0.status:500,(0,a.lU)(_),e.abrupt("return",f);case 30:case"end":return e.stop()}}),e,null,[[0,24]])})).bind(this)).bind(this),this.headers=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}({},this.defaultHeaders,t)}},7343:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return null!=t&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t}var s,l=function e(t,n){var r=this,o=this,s=this,l=this,d=this,c=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var u=this;this.defaults={selector:".js-lazyload",attributeNameSrc:"data-src",attributeNameSrcset:"data-srcset",classNameLoaded:"js-lazyloaded",root:null,rootMargin:"0px",threshold:0},this.observe=function(){var e=r.self;Array.prototype.forEach.call(r.elements,(function(t){var n;null===(n=e.observer)||void 0===n||n.observe(t)}))},this.loader=function(e){var t=e.getAttribute(o.options.attributeNameSrc||o.defaults.attributeNameSrc)||"",n=e.getAttribute(o.options.attributeNameSrcset||o.defaults.attributeNameSrcset)||"",r=t.length>1,i=n.length>1;a(e,HTMLImageElement)?(r&&(e.src=t),i&&(e.srcset=n,window.navigator.userAgent.toLocaleLowerCase("en").indexOf(".net4")>-1&&(String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var n=t&&t>0?t:0;return u.substring(n,n+e.length)===e}}),n.trim().startsWith("data:image")?e.src=(n.split(", data:image")[0]||n.split(",data:image")[0]||n.split(", http")[0]||n.split(",http")[0]||n.split(", /")[0]||n.split(",/")[0]||"").trim():e.src=(n.trim().split(", ")[0]||n.trim().split(",")[0]||"").trim().split(" ")[0].trim()))):a(e,HTMLElement)&&r&&(e.style.backgroundImage='url("'.concat(t,'")'),e.style.backgroundRepeat="no-repeat",e.style.backgroundSize="cover",e.style.backgroundPosition="center"),(r||i)&&e.classList.add(o.options.classNameLoaded||o.defaults.classNameLoaded)},this.loadImages=function(){var e=s.self;Array.prototype.forEach.call(e.elements,(function(t){e.loader(t)}))},this.init=function(){var e=l;if(window.IntersectionObserver){var t={root:l.options.root||l.defaults.root,rootMargin:l.options.rootMargin||l.defaults.rootMargin,threshold:[l.options.threshold||l.defaults.threshold]};l.observer=new IntersectionObserver((function(t){var n=e,r=e.self;Array.prototype.forEach.call(t,(function(e){var t,o=e.target.classList.contains(r.options.classNameLoaded||r.defaults.classNameLoaded);e.isIntersecting&&!o&&(n.loader(e.target),null===(t=n.observer)||void 0===t||t.unobserve(e.target))}))}),t),l.observe()}else l.loadImages()},this.disconnect=function(){var e;null===(e=d.observer)||void 0===e||e.disconnect()},this.reconnect=function(){c.observe()},this.self=this,this.options=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},this.defaults,t),this.elements=n||window.document.querySelectorAll(this.options.selector||this.defaults.selector),this.observer=null,this.init()};function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(e){var t=e.id,n=e.className,i=e.alt,a=e.width,c=e.height,u=e.placeholder,_=e.src,f=e.srcset,v=e.attributeNameSrc,h=e.attributeNameSrcset,m=e.classNameLoaded,w=e.root,p=e.rootMargin,b=e.threshold,g=u||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4AQMAAAADqqSRAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABZJREFUOMtjGAWjYBSMglEwCkYB3QEAB4AAAe7tUzsAAAAASUVORK5CYII=",S=(0,o.createRef)();(0,o.useEffect)((function(){S.current&&new l({attributeNameSrc:v,attributeNameSrcset:h,classNameLoaded:m,root:w,threshold:b,rootMargin:p},[S.current])}),[S,v,h,m,w,p,b]);var y=(0,o.createElement)("img",(d(s={ref:S,id:t,className:n||"",alt:i,width:a,height:c},v||"data-src",_),d(s,h||"data-srcet",f),d(s,"src",g),s),null);return(0,r.jsx)(r.Fragment,{children:y})}},7242:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(5666),o=n.n(r),i=n(5893),a=n(7294),s=n(6893),l=n(8193),d=n(1147),c=n(4173),u=n(2319),_=n(8869);function f(e,t,n,r,o,i,a){try{var s=e[i](a),l=s.value}catch(d){return void n(d)}s.done?t(l):Promise.resolve(l).then(r,o)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){return null!=t&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t}var m=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n,r=this;this.defaultHeaders={Accept:"application/vnd.npm.install-v1+json"},this.getTotalDownloadCounts=(n=o().mark((function e(){var t,n,i,a,s,l,d;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i=r.headers,e.next=5,(0,_.Je)(360);case 5:return e.next=7,fetch(u._.api.urlNPMDownloads,{method:"get",headers:i});case 7:if((a=e.sent).ok){e.next=10;break}throw new Error("Something went wrong.");case 10:return e.next=12,a.json();case 12:if(h(s=e.sent,Object)&&"downloads"in s){e.next=15;break}throw new Error("Not found.");case 15:return l=(null===(n=null===s||void 0===s||null===(t=s.downloads)||void 0===t?void 0:t.map((function(e){return null===e||void 0===e?void 0:e.downloads})))||void 0===n?void 0:n.reduce((function(e,t){return e+t}),0))||0,e.abrupt("return",{downloadCounts:l});case 19:return e.prev=19,e.t0=e.catch(0),d=h(e.t0,Error)?null===e.t0||void 0===e.t0?void 0:e.t0.message:"",(0,_.lU)(d),e.abrupt("return",!1);case 24:case"end":return e.stop()}}),e,null,[[0,19]])})).bind(this),function(){var e=this,t=arguments;return new Promise((function(r,o){var i=n.apply(e,t);function a(e){f(i,r,o,a,s,"next",e)}function s(e){f(i,r,o,a,s,"throw",e)}a(void 0)}))}).bind(this),this.headers=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}({},this.defaultHeaders,t)},w=n(7343),p=n(6678),b=n.n(p);function g(e,t,n,r,o,i,a){try{var s=e[i](a),l=s.value}catch(d){return void n(d)}s.done?t(l):Promise.resolve(l).then(r,o)}function S(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){g(i,r,o,a,s,"next",e)}function s(e){g(i,r,o,a,s,"throw",e)}a(void 0)}))}}function y(e,t){return null!=t&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t}var k=function(){var e=d.attributes._dbHomeSlider,t=(0,a.useRef)(!1),n=(0,a.useState)({isLoading:!0,isSuccess:!1,isFailure:!1}),r=n[0],u=n[1],f=(0,a.useState)({isLoading:!0,isSuccess:!1}),v=f[0],h=f[1],p=(0,a.useCallback)(S(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(new m).getTotalDownloadCounts();case 3:if(!y(n=e.sent,Object)||!t.current){e.next=8;break}h({isLoading:!1,isSuccess:!0,downloadCounts:n.downloadCounts}),e.next=9;break;case 8:throw new Error(n.toString());case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t.current&&h({isLoading:!1,isSuccess:!1});case 14:case"end":return e.stop()}}),e,null,[[0,11]])}))),[t]),g=(0,a.useCallback)(S(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(new c.T).getLatestReleaseAsync();case 3:if(!y(n=e.sent,Object)||!t.current){e.next=8;break}u({isLoading:!1,isSuccess:!0,isFailure:!1,fileName:n.fileName,downloadUrl:n.downloadUrl}),e.next=9;break;case 8:throw new Error(n.toString());case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t.current&&u({apiStatus:y(e.t0,Error)&&+(null===e.t0||void 0===e.t0?void 0:e.t0.message)||500,isLoading:!1,isSuccess:!1,isFailure:!0});case 14:case"end":return e.stop()}}),e,null,[[0,11]])}))),[t]);return(0,a.useEffect)((function(){return r.isLoading&&(t.current=!0,g()),r.isSuccess&&v.isLoading&&(t.current=!0,p()),function(){t.current=!1}}),[r,v,t,g,p]),(0,i.jsx)("div",{className:b().slider,children:(0,i.jsxs)("div",{className:b().slider__container,children:[(0,i.jsx)("div",{className:b().slider__media,children:(0,i.jsx)(w.Z,{threshold:.25,className:b().slider__media__image,classNameLoaded:b()["slider__media__image--loaded"],width:"500",height:"500",src:"".concat("https://notiflix.github.io").concat(null===e||void 0===e?void 0:e.image),alt:"Notiflix"})}),(0,i.jsxs)("div",{className:b().slider__content,children:[(0,i.jsx)("h1",{className:b().slider__content__title,dangerouslySetInnerHTML:{__html:(null===e||void 0===e?void 0:e.title)||""}}),(0,i.jsx)("p",{className:b().slider__content__description,dangerouslySetInnerHTML:{__html:(null===e||void 0===e?void 0:e.description)||""}}),(0,i.jsxs)("div",{className:b().slider__content__download,children:[(0,i.jsx)("p",{className:b().slider__content__download__info,children:null===e||void 0===e?void 0:e.downloadInfo}),(0,i.jsxs)("a",{href:r.isSuccess?r.downloadUrl:void 0,download:r.isSuccess,className:["".concat(b().slider__content__download__link),"".concat(r.isLoading&&b()["slider__content__download__link--loading"]||""),"".concat(r.isFailure&&b()["slider__content__download__link--failure"]||"")].join(" ").trim(),children:[r.isLoading&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z7b,{className:["".concat(b().slider__content__download__link__icon),"".concat(r.isLoading&&b()["slider__content__download__link__icon--loading"]||"")].join(" ").trim()}),(0,i.jsx)("span",{className:b().slider__content__download__link__filename,children:null===e||void 0===e?void 0:e.loading}),(0,i.jsx)("span",{className:b().slider__content__download__link__count,children:null===e||void 0===e?void 0:e.loading})]}),r.isSuccess&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.wzc,{className:b().slider__content__download__link__icon}),(0,i.jsx)("span",{className:b().slider__content__download__link__filename,children:r.fileName}),v.isLoading&&(0,i.jsx)("span",{className:b().slider__content__download__link__count,children:null===e||void 0===e?void 0:e.loading}),v.isSuccess&&(0,i.jsx)("span",{className:b().slider__content__download__link__count,children:(0,_.XX)((null===e||void 0===e?void 0:e.downloadCount)||"",v.downloadCounts)})]}),r.isFailure&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.bcx,{className:["".concat(b().slider__content__download__link__icon),"".concat(r.isFailure&&b()["slider__content__download__link__icon--failure"]||"")].join(" ").trim()}),(0,i.jsx)("span",{children:403===r.apiStatus?null===e||void 0===e?void 0:e.restricted:null===e||void 0===e?void 0:e.failure})]})]})]})]})]})})}},6678:function(e){e.exports={slider:"Slider_slider__3TGp1",slider__container:"Slider_slider__container__19Xl5",slider__content:"Slider_slider__content__2AYTI",slider__media:"Slider_slider__media__3OuuY",slider__media__image:"Slider_slider__media__image__NRU6p","slider__media__image--loaded":"Slider_slider__media__image--loaded__3VsAm",slider__content__title:"Slider_slider__content__title__In7rT",slider__content__description:"Slider_slider__content__description__3S3Ga",slider__content__download:"Slider_slider__content__download__aSDZK",slider__content__download__info:"Slider_slider__content__download__info__XVPmT",slider__content__download__link:"Slider_slider__content__download__link__2kOhd","slider__content__download__link--loading":"Slider_slider__content__download__link--loading__3zaRH",slider__content__download__link__icon:"Slider_slider__content__download__link__icon__2rK1s","slider__content__download__link__icon--loading":"Slider_slider__content__download__link__icon--loading__1FxkW",animation_home_slider_download_loading:"Slider_animation_home_slider_download_loading__Muov0","slider__content__download__link__icon--failure":"Slider_slider__content__download__link__icon--failure__YE0VI",slider__content__download__link__filename:"Slider_slider__content__download__link__filename__qUdLh",slider__content__download__link__count:"Slider_slider__content__download__link__count__19yrT"}}}]);