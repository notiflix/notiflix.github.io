(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7237],{9517:function(t,e,r){"use strict";var n;r.d(e,{_:function(){return n},j:function(){return o}}),function(t){t.NOTIFY="NOTIFY",t.REPORT="REPORT",t.CONFIRM="CONFIRM",t.LOADING="LOADING",t.BLOCK="BLOCK"}(n||(n={}));var a=new Map([[n.NOTIFY,"Notify"],[n.REPORT,"Report"],[n.CONFIRM,"Confirm"],[n.LOADING,"Loading"],[n.BLOCK,"Block"]]),o=function(t){return a.get(t)||""}},907:function(t,e,r){"use strict";r.d(e,{Z:function(){return u}});var n=r(5893),a=r(2809),o=r(7294),s=r(8216);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){(0,a.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l=function t(e,r){var n=this;(0,s.Z)(this,t),(0,a.Z)(this,"self",void 0),(0,a.Z)(this,"options",void 0),(0,a.Z)(this,"elements",void 0),(0,a.Z)(this,"observer",void 0),(0,a.Z)(this,"defaults",{selector:".js-lazyload",attributeNameSrc:"data-src",attributeNameSrcset:"data-srcset",classNameLoaded:"js-lazyloaded",root:null,rootMargin:"0px",threshold:0}),(0,a.Z)(this,"observe",(function(){var t=n.self;Array.prototype.forEach.call(n.elements,(function(e){var r;null===(r=t.observer)||void 0===r||r.observe(e)}))})),(0,a.Z)(this,"loader",(function(t){var e=t.getAttribute(n.options.attributeNameSrc||n.defaults.attributeNameSrc)||"",r=t.getAttribute(n.options.attributeNameSrcset||n.defaults.attributeNameSrcset)||"",a=e.length>1,o=r.length>1;t instanceof HTMLImageElement?(a&&(t.src=e),o&&(t.srcset=r,window.navigator.userAgent.toLocaleLowerCase("en").indexOf(".net4")>-1&&(String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(t,e){var r=e&&e>0?e:0;return this.substring(r,r+t.length)===t}}),r.trim().startsWith("data:image")?t.src=(r.split(", data:image")[0]||r.split(",data:image")[0]||r.split(", http")[0]||r.split(",http")[0]||r.split(", /")[0]||r.split(",/")[0]||"").trim():t.src=(r.trim().split(", ")[0]||r.trim().split(",")[0]||"").trim().split(" ")[0].trim()))):t instanceof HTMLElement&&a&&(t.style.backgroundImage='url("'.concat(e,'")'),t.style.backgroundRepeat="no-repeat",t.style.backgroundSize="cover",t.style.backgroundPosition="center"),(a||o)&&t.classList.add(n.options.classNameLoaded||n.defaults.classNameLoaded)})),(0,a.Z)(this,"loadImages",(function(){var t=n.self;Array.prototype.forEach.call(t.elements,(function(e){t.loader(e)}))})),(0,a.Z)(this,"init",(function(){if(window.IntersectionObserver){var t={root:n.options.root||n.defaults.root,rootMargin:n.options.rootMargin||n.defaults.rootMargin,threshold:[n.options.threshold||n.defaults.threshold]};n.observer=new IntersectionObserver((function(t){var e=n.self;Array.prototype.forEach.call(t,(function(t){var r,a=t.target.classList.contains(e.options.classNameLoaded||e.defaults.classNameLoaded);t.isIntersecting&&!a&&(n.loader(t.target),null===(r=n.observer)||void 0===r||r.unobserve(t.target))}))}),t),n.observe()}else n.loadImages()})),(0,a.Z)(this,"disconnect",(function(){var t;null===(t=n.observer)||void 0===t||t.disconnect()})),(0,a.Z)(this,"reconnect",(function(){n.observe()})),this.self=this,this.options=c(c({},this.defaults),e),this.elements=r||window.document.querySelectorAll(this.options.selector||this.defaults.selector),this.observer=null,this.init()},u=function(t){var e,r=t.id,s=t.className,i=t.alt,c=t.width,u=t.height,d=t.placeholder,h=t.src,f=t.srcset,b=t.attributeNameSrc,p=t.attributeNameSrcset,g=t.classNameLoaded,m=t.root,v=t.rootMargin,A=t.threshold,O=d||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4AQMAAAADqqSRAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABZJREFUOMtjGAWjYBSMglEwCkYB3QEAB4AAAe7tUzsAAAAASUVORK5CYII=",N=(0,o.createRef)();(0,o.useEffect)((function(){N.current&&new l({attributeNameSrc:b,attributeNameSrcset:p,classNameLoaded:g,root:m,threshold:A,rootMargin:v},[N.current])}),[N,b,p,g,m,v,A]);var _=(0,o.createElement)("img",(e={ref:N,id:r,className:s||"",alt:i,width:c,height:u},(0,a.Z)(e,b||"data-src",h),(0,a.Z)(e,p||"data-srcet",f),(0,a.Z)(e,"src",O),e),null);return(0,n.jsx)(n.Fragment,{children:_})}},5876:function(t,e,r){"use strict";r.r(e);var n=r(5893),a=r(8951),o=r(907),s=r(4616),i=r.n(s);e.default=function(){var t=a.attributes._dbDocsSearch;return(0,n.jsx)("div",{className:i().banner,children:(0,n.jsx)(o.Z,{threshold:.25,className:i().banner__image,classNameLoaded:i()["banner__image--loaded"],width:"500",height:"500",src:"".concat("https://notiflix.github.io").concat(null===t||void 0===t?void 0:t.bannerImageSrc),alt:null===t||void 0===t?void 0:t.bannerImageAlt})})}},5660:function(t,e,r){"use strict";r.r(e);var n=r(5893),a=r(7692),o=r(5876),s=r(1738),i=r.n(s);e.default=function(){return(0,n.jsxs)("div",{className:i().search,children:[(0,n.jsx)(a.default,{}),(0,n.jsx)(o.default,{})]})}},9279:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation/partials/content-search/ContentSearch",function(){return r(5660)}])},4616:function(t){t.exports={banner:"ContentSearchBanner_banner__181kc",banner__image:"ContentSearchBanner_banner__image__3ZG3c","banner__image--loaded":"ContentSearchBanner_banner__image--loaded__J1NR2"}},1738:function(t){t.exports={search:"ContentSearch_search__2MKhC"}}},function(t){t.O(0,[6893,8951,7692,9774,2888,179],(function(){return e=9279,t(t.s=e);var e}));var e=t.O();_N_E=e}]);