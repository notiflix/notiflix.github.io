(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8479],{9989:function(e,t,n){"use strict";n.d(t,{T:function(){return _}});var r=n(809),o=n.n(r),i=n(266),s=n(8216),a=n(2809),c=n(3634),l=n(7149);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function e(t){var n=this;(0,s.Z)(this,e),(0,a.Z)(this,"headers",void 0),(0,a.Z)(this,"defaultHeaders",{Accept:"application/vnd.github.v3+json"}),(0,a.Z)(this,"getLatestReleaseAsync",(0,i.Z)(o().mark((function e(){var t,r,i,s,a,u,d,_;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i=n.headers,e.next=4,(0,l.Je)(360);case 4:return e.next=6,fetch(c._.api.urlGitHubReleases,{method:"get",headers:i});case 6:if(403!==(s=e.sent).status){e.next=9;break}throw new l.rQ("API rate limit exceeded.",s.status);case 9:if(s.ok){e.next=11;break}throw new l.rQ("Something went wrong.",s.status);case 11:return e.next=13,s.json();case 13:if(a=e.sent,Array.isArray(a)&&!((null===a||void 0===a?void 0:a.length)<1)){e.next=16;break}throw new l.rQ("Not found.",404);case 16:if(u=null===a||void 0===a||null===(t=a.filter((function(e){return!(null!==e&&void 0!==e&&e.draft)&&!(null!==e&&void 0!==e&&e.prerelease)})))||void 0===t||null===(r=t.sort((function(e,t){return(null===t||void 0===t?void 0:t.id)-(null===e||void 0===e?void 0:e.id)})))||void 0===r?void 0:r.find((function(e){return e}))){e.next=19;break}throw new l.rQ("There is no release.",404);case 19:return e.abrupt("return",{fileName:(0,l.bS)(u.tag_name),downloadUrl:u.zipball_url});case 22:return e.prev=22,e.t0=e.catch(0),d=e.t0 instanceof l.rQ?null===e.t0||void 0===e.t0?void 0:e.t0.message:"",_=e.t0 instanceof l.rQ?null===e.t0||void 0===e.t0?void 0:e.t0.status:500,(0,l.lU)(d),e.abrupt("return",_);case 28:case"end":return e.stop()}}),e,null,[[0,22]])})))),(0,a.Z)(this,"getRepoStatsAsync",(0,i.Z)(o().mark((function e(){var t,r,i,s,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=n.headers,e.next=4,(0,l.Je)(360);case 4:return e.next=6,fetch(c._.api.urlGitHubRepo,{method:"get",headers:t});case 6:if(403!==(r=e.sent).status){e.next=9;break}throw new l.rQ("API rate limit exceeded.",r.status);case 9:if(r.ok){e.next=11;break}throw new l.rQ("Something went wrong.",r.status);case 11:return e.next=13,r.json();case 13:if((i=e.sent)instanceof Object&&"stargazers_count"in i){e.next=16;break}throw new l.rQ("Not found.",404);case 16:return e.abrupt("return",{stargazersCount:i.stargazers_count,forksCount:i.forks_count});case 19:return e.prev=19,e.t0=e.catch(0),s=e.t0 instanceof l.rQ?null===e.t0||void 0===e.t0?void 0:e.t0.message:"",a=e.t0 instanceof l.rQ?null===e.t0||void 0===e.t0?void 0:e.t0.status:500,(0,l.lU)(s),e.abrupt("return",a);case 25:case"end":return e.stop()}}),e,null,[[0,19]])})))),(0,a.Z)(this,"getAllReleasesAsync",(0,i.Z)(o().mark((function e(){var t,r,i,s,a,u,d,_;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=n.headers,e.next=4,(0,l.Je)(720);case 4:return e.next=6,fetch(c._.api.urlGitHubReleases,{method:"get",headers:r});case 6:if(403!==(i=e.sent).status){e.next=9;break}throw new l.rQ("API rate limit exceeded.",i.status);case 9:if(i.ok){e.next=11;break}throw new l.rQ("Something went wrong.",i.status);case 11:return e.next=13,i.json();case 13:if(s=e.sent,Array.isArray(s)&&!((null===s||void 0===s?void 0:s.length)<1)){e.next=16;break}throw new l.rQ("Not found.",404);case 16:if(!((null===(a=(null===s||void 0===s||null===(t=s.sort((function(e,t){return(null===t||void 0===t?void 0:t.id)-(null===e||void 0===e?void 0:e.id)})))||void 0===t?void 0:t.filter((function(e){return!(null!==e&&void 0!==e&&e.tag_name.includes("v1"))})))||[])||void 0===a?void 0:a.length)<1)){e.next=19;break}throw new l.rQ("There is no release.",404);case 19:return u=null===a||void 0===a?void 0:a.map((function(e){return{id:null===e||void 0===e?void 0:e.id,isDraft:null===e||void 0===e?void 0:e.draft,isPrerelease:null===e||void 0===e?void 0:e.prerelease,versionName:(0,l.ij)(null===e||void 0===e?void 0:e.tag_name),releaseNotesAsMarkdown:(null===e||void 0===e?void 0:e.body)||"",releaseDate:(0,l.gR)(null===e||void 0===e?void 0:e.published_at),downloadName:(0,l.bS)(null===e||void 0===e?void 0:e.tag_name),downloadUrl:null===e||void 0===e?void 0:e.zipball_url}})),e.abrupt("return",u);case 23:return e.prev=23,e.t0=e.catch(0),d=e.t0 instanceof l.rQ?null===e.t0||void 0===e.t0?void 0:e.t0.message:"",_=e.t0 instanceof l.rQ?null===e.t0||void 0===e.t0?void 0:e.t0.status:500,(0,l.lU)(d),e.abrupt("return",_);case 29:case"end":return e.stop()}}),e,null,[[0,23]])})))),this.headers=d(d({},this.defaultHeaders),t)}},7149:function(e,t,n){"use strict";n.d(t,{rQ:function(){return _},lU:function(){return f},Je:function(){return p},ij:function(){return v},bS:function(){return h},gR:function(){return m},XX:function(){return w},A4:function(){return g}});var r=n(8216),o=n(4695),i=n(1077),s=n(4746),a=n(2953),c=n(6568),l=n(2809),u=n(3634);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,a.Z)(e);if(t){var o=(0,a.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var _=function(e){(0,i.Z)(n,e);var t=d(n);function n(e,i){var s;return(0,r.Z)(this,n),s=t.call(this,e),(0,l.Z)((0,o.Z)(s),"status",0),s.status=i,s}return n}((0,c.Z)(Error)),f=function(e){0},p=function(e){return new Promise((function(t){return setTimeout((function(){t()}),e||1e3)}))},v=function(e){return"".concat(u._.app.name,"-").concat(null===e||void 0===e?void 0:e.replace(/[^0-9.]/g,""))},h=function(e){return"".concat(u._.app.name,"-").concat(null===e||void 0===e?void 0:e.replace(/[^0-9.]/g,""),".zip")},m=function(e){var t=new Date(e),n=t.getFullYear(),r=u._.app.text.monthNames[t.getMonth()],o=(t.getDate()+"").padStart(2,"0");return"".concat(r," ").concat(o,", ").concat(n)},w=function(e,t){return"".concat(e.replace(/\{\{(.*?)\}\}/gm,(t||"-").toString()))},g=function(e,t,n,r){var o=0;if(t){var i=window.document.querySelector("header");o=i?i.clientHeight:0}var s=window.document.querySelector(e);s?window.scrollTo({top:Math.round(s.offsetTop-o),behavior:n?"smooth":"auto"}):r&&window.scrollTo(0,0),r&&window.history.replaceState("",window.document.title,window.location.href.replace(/#.*$/,""))}},907:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(5893),o=n(2809),i=n(7294),s=n(8216);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function e(t,n){var r=this;(0,s.Z)(this,e),(0,o.Z)(this,"self",void 0),(0,o.Z)(this,"options",void 0),(0,o.Z)(this,"elements",void 0),(0,o.Z)(this,"observer",void 0),(0,o.Z)(this,"defaults",{selector:".js-lazyload",attributeNameSrc:"data-src",attributeNameSrcset:"data-srcset",classNameLoaded:"js-lazyloaded",root:null,rootMargin:"0px",threshold:0}),(0,o.Z)(this,"observe",(function(){var e=r.self;Array.prototype.forEach.call(r.elements,(function(t){var n;null===(n=e.observer)||void 0===n||n.observe(t)}))})),(0,o.Z)(this,"loader",(function(e){var t=e.getAttribute(r.options.attributeNameSrc||r.defaults.attributeNameSrc)||"",n=e.getAttribute(r.options.attributeNameSrcset||r.defaults.attributeNameSrcset)||"",o=t.length>1,i=n.length>1;e instanceof HTMLImageElement?(o&&(e.src=t),i&&(e.srcset=n,window.navigator.userAgent.toLocaleLowerCase("en").indexOf(".net4")>-1&&(String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var n=t&&t>0?t:0;return this.substring(n,n+e.length)===e}}),n.trim().startsWith("data:image")?e.src=(n.split(", data:image")[0]||n.split(",data:image")[0]||n.split(", http")[0]||n.split(",http")[0]||n.split(", /")[0]||n.split(",/")[0]||"").trim():e.src=(n.trim().split(", ")[0]||n.trim().split(",")[0]||"").trim().split(" ")[0].trim()))):e instanceof HTMLElement&&o&&(e.style.backgroundImage='url("'.concat(t,'")'),e.style.backgroundRepeat="no-repeat",e.style.backgroundSize="cover",e.style.backgroundPosition="center"),(o||i)&&e.classList.add(r.options.classNameLoaded||r.defaults.classNameLoaded)})),(0,o.Z)(this,"loadImages",(function(){var e=r.self;Array.prototype.forEach.call(e.elements,(function(t){e.loader(t)}))})),(0,o.Z)(this,"init",(function(){if(window.IntersectionObserver){var e={root:r.options.root||r.defaults.root,rootMargin:r.options.rootMargin||r.defaults.rootMargin,threshold:[r.options.threshold||r.defaults.threshold]};r.observer=new IntersectionObserver((function(e){var t=r.self;Array.prototype.forEach.call(e,(function(e){var n,o=e.target.classList.contains(t.options.classNameLoaded||t.defaults.classNameLoaded);e.isIntersecting&&!o&&(r.loader(e.target),null===(n=r.observer)||void 0===n||n.unobserve(e.target))}))}),e),r.observe()}else r.loadImages()})),(0,o.Z)(this,"disconnect",(function(){var e;null===(e=r.observer)||void 0===e||e.disconnect()})),(0,o.Z)(this,"reconnect",(function(){r.observe()})),this.self=this,this.options=c(c({},this.defaults),t),this.elements=n||window.document.querySelectorAll(this.options.selector||this.defaults.selector),this.observer=null,this.init()},u=function(e){var t,n=e.id,s=e.className,a=e.alt,c=e.width,u=e.height,d=e.placeholder,_=e.src,f=e.srcset,p=e.attributeNameSrc,v=e.attributeNameSrcset,h=e.classNameLoaded,m=e.root,w=e.rootMargin,g=e.threshold,b=d||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4AQMAAAADqqSRAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABZJREFUOMtjGAWjYBSMglEwCkYB3QEAB4AAAe7tUzsAAAAASUVORK5CYII=",y=(0,i.createRef)();(0,i.useEffect)((function(){y.current&&new l({attributeNameSrc:p,attributeNameSrcset:v,classNameLoaded:h,root:m,threshold:g,rootMargin:w},[y.current])}),[y,p,v,h,m,w,g]);var j=(0,i.createElement)("img",(t={ref:y,id:n,className:s||"",alt:a,width:c,height:u},(0,o.Z)(t,p||"data-src",_),(0,o.Z)(t,v||"data-srcet",f),(0,o.Z)(t,"src",b),t),null);return(0,r.jsx)(r.Fragment,{children:j})}},8479:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(5893),o=n(809),i=n.n(o),s=n(266),a=n(7294),c=n(6893),l=n(8193),u=n(1147),d=n(9989),_=n(8216),f=n(2809),p=n(3634),v=n(7149);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function e(t){var n=this;(0,_.Z)(this,e),(0,f.Z)(this,"headers",void 0),(0,f.Z)(this,"defaultHeaders",{Accept:"application/vnd.npm.install-v1+json"}),(0,f.Z)(this,"getTotalDownloadCounts",(0,s.Z)(i().mark((function e(){var t,r,o,s,a,c,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o=n.headers,e.next=4,(0,v.Je)(360);case 4:return e.next=6,fetch(p._.api.urlNPMDownloads,{method:"get",headers:o});case 6:if((s=e.sent).ok){e.next=9;break}throw new Error("Something went wrong.");case 9:return e.next=11,s.json();case 11:if((a=e.sent)instanceof Object&&"downloads"in a){e.next=14;break}throw new Error("Not found.");case 14:return c=(null===a||void 0===a||null===(t=a.downloads)||void 0===t||null===(r=t.map((function(e){return null===e||void 0===e?void 0:e.downloads})))||void 0===r?void 0:r.reduce((function(e,t){return e+t}),0))||0,e.abrupt("return",{downloadCounts:c});case 18:return e.prev=18,e.t0=e.catch(0),l=e.t0 instanceof Error?null===e.t0||void 0===e.t0?void 0:e.t0.message:"",(0,v.lU)(l),e.abrupt("return",!1);case 23:case"end":return e.stop()}}),e,null,[[0,18]])})))),this.headers=m(m({},this.defaultHeaders),t)},g=n(907),b=n(55),y=n.n(b);var j=function(){var e=u.attributes._dbHomeSlider,t=(0,a.useRef)(!1),n=(0,a.useState)({isLoading:!0,isSuccess:!1,isFailure:!1}),o=n[0],_=n[1],f=(0,a.useState)({isLoading:!0,isSuccess:!1}),p=f[0],h=f[1],m=(0,a.useCallback)((0,s.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(new w).getTotalDownloadCounts();case 3:if(!((n=e.sent)instanceof Object&&t.current)){e.next=8;break}h({isLoading:!1,isSuccess:!0,downloadCounts:n.downloadCounts}),e.next=9;break;case 8:throw new Error(n.toString());case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t.current&&h({isLoading:!1,isSuccess:!1});case 14:case"end":return e.stop()}}),e,null,[[0,11]])}))),[t]),b=(0,a.useCallback)((0,s.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(new d.T).getLatestReleaseAsync();case 3:if(!((n=e.sent)instanceof Object&&t.current)){e.next=8;break}_({isLoading:!1,isSuccess:!0,isFailure:!1,fileName:n.fileName,downloadUrl:n.downloadUrl}),e.next=9;break;case 8:throw new Error(n.toString());case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t.current&&_({apiStatus:e.t0 instanceof Error&&+(null===e.t0||void 0===e.t0?void 0:e.t0.message)||500,isLoading:!1,isSuccess:!1,isFailure:!0});case 14:case"end":return e.stop()}}),e,null,[[0,11]])}))),[t]);return(0,a.useEffect)((function(){return o.isLoading&&(t.current=!0,b()),o.isSuccess&&p.isLoading&&(t.current=!0,m()),function(){t.current=!1}}),[o,p,t,b,m]),(0,r.jsx)("div",{className:y().slider,children:(0,r.jsxs)("div",{className:y().slider__container,children:[(0,r.jsx)("div",{className:y().slider__media,children:(0,r.jsx)(g.Z,{threshold:.25,className:y().slider__media__image,classNameLoaded:y()["slider__media__image--loaded"],width:"500",height:"500",src:"".concat("https://notiflix.github.io").concat(null===e||void 0===e?void 0:e.image),alt:"Notiflix"})}),(0,r.jsxs)("div",{className:y().slider__content,children:[(0,r.jsx)("h1",{className:y().slider__content__title,dangerouslySetInnerHTML:{__html:(null===e||void 0===e?void 0:e.title)||""}}),(0,r.jsx)("p",{className:y().slider__content__description,dangerouslySetInnerHTML:{__html:(null===e||void 0===e?void 0:e.description)||""}}),(0,r.jsxs)("div",{className:y().slider__content__download,children:[(0,r.jsx)("p",{className:y().slider__content__download__info,children:null===e||void 0===e?void 0:e.downloadInfo}),(0,r.jsxs)("a",{href:o.isSuccess?o.downloadUrl:void 0,download:o.isSuccess,className:["".concat(y().slider__content__download__link),"".concat(o.isLoading&&y()["slider__content__download__link--loading"]||""),"".concat(o.isFailure&&y()["slider__content__download__link--failure"]||"")].join(" ").trim(),children:[o.isLoading&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z7b,{className:["".concat(y().slider__content__download__link__icon),"".concat(o.isLoading&&y()["slider__content__download__link__icon--loading"]||"")].join(" ").trim()}),(0,r.jsx)("span",{className:y().slider__content__download__link__filename,children:null===e||void 0===e?void 0:e.loading}),(0,r.jsx)("span",{className:y().slider__content__download__link__count,children:null===e||void 0===e?void 0:e.loading})]}),o.isSuccess&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.wzc,{className:y().slider__content__download__link__icon}),(0,r.jsx)("span",{className:y().slider__content__download__link__filename,children:o.fileName}),p.isLoading&&(0,r.jsx)("span",{className:y().slider__content__download__link__count,children:null===e||void 0===e?void 0:e.loading}),p.isSuccess&&(0,r.jsx)("span",{className:y().slider__content__download__link__count,children:(0,v.XX)((null===e||void 0===e?void 0:e.downloadCount)||"",p.downloadCounts)})]}),o.isFailure&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.bcx,{className:["".concat(y().slider__content__download__link__icon),"".concat(o.isFailure&&y()["slider__content__download__link__icon--failure"]||"")].join(" ").trim()}),(0,r.jsx)("span",{children:403===o.apiStatus?null===e||void 0===e?void 0:e.restricted:null===e||void 0===e?void 0:e.failure})]})]})]})]})]})})}},55:function(e){e.exports={slider:"HomeSlider_slider__2iBbl",slider__container:"HomeSlider_slider__container__eGeTZ",slider__content:"HomeSlider_slider__content__3f419",slider__media:"HomeSlider_slider__media__3rsAj",slider__media__image:"HomeSlider_slider__media__image__3IfRl","slider__media__image--loaded":"HomeSlider_slider__media__image--loaded__27Mtj",slider__content__title:"HomeSlider_slider__content__title__KZxIH",slider__content__description:"HomeSlider_slider__content__description__1Athb",slider__content__download:"HomeSlider_slider__content__download__3Mqv9",slider__content__download__info:"HomeSlider_slider__content__download__info__30D4m",slider__content__download__link:"HomeSlider_slider__content__download__link__2tRqf","slider__content__download__link--loading":"HomeSlider_slider__content__download__link--loading__1Xf6-",slider__content__download__link__icon:"HomeSlider_slider__content__download__link__icon__2KqzR","slider__content__download__link__icon--loading":"HomeSlider_slider__content__download__link__icon--loading__3rGjj",animation_home_slider_download_loading:"HomeSlider_animation_home_slider_download_loading__sWAwG","slider__content__download__link__icon--failure":"HomeSlider_slider__content__download__link__icon--failure__pdD3r",slider__content__download__link__filename:"HomeSlider_slider__content__download__link__filename__3InZJ",slider__content__download__link__count:"HomeSlider_slider__content__download__link__count__10K1B"}},4695:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},266:function(e,t,n){"use strict";function r(e,t,n,r,o,i,s){try{var a=e[i](s),c=a.value}catch(l){return void n(l)}a.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var s=e.apply(t,n);function a(e){r(s,o,i,a,c,"next",e)}function c(e){r(s,o,i,a,c,"throw",e)}a(void 0)}))}}n.d(t,{Z:function(){return o}})},8216:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},2953:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,{Z:function(){return r}})},1077:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(6129);function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,r.Z)(e,t)}},4746:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,{Z:function(){return i}});var o=n(4695);function i(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?(0,o.Z)(e):t}},6129:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,{Z:function(){return r}})},6568:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(2953),o=n(6129);function i(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function s(e,t,n){return(s=i()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&(0,o.Z)(i,n.prototype),i}).apply(null,arguments)}function a(e){var t="function"===typeof Map?new Map:void 0;return(a=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return s(e,arguments,(0,r.Z)(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),(0,o.Z)(i,e)})(e)}}}]);