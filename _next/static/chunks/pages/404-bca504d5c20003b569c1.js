(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2197],{5104:function(e){e.exports={attributes:{_dbPageMeta:{routeId:"404",lastModifiedDate:"2021-10-29",title:"404 | Notiflix",description:"Notiflix is a JavaScript library for client-side non-blocking notifications, popup boxes, loading indicators, and more that makes your web projects much better.",robots:"noindex, nofollow, noodp, noydir",ogImage:null,themeColor:null},_dbErrorBanner:{bannerImageSrc:"/content/media/error/notiflix-404-banner.svg",bannerImageWidth:"500",bannerImageHeight:"333",title:"The page you were looking for doesn't exist.",buttonText:"Return"}},html:""}},9931:function(e,r,t){"use strict";var n=t(5893),o=t(1664),a=t(4882),i=t(6972),s=t(907),l=t(3259),c=t.n(l);r.Z=function(e){var r,t,l=e.statusCode,d=e.data,u=(null===(r=a._j.find((function(e){return(null===e||void 0===e?void 0:e.id)===i.D.HOME})))||void 0===r?void 0:r.pathPage)||"/",_=(null===(t=a._j.find((function(e){return(null===e||void 0===e?void 0:e.id)===i.D.HOME})))||void 0===t?void 0:t.pathAs)||"/";return(0,n.jsxs)("div",{className:c().bannererror,children:[(0,n.jsx)("div",{className:c().bannererror__media,children:(0,n.jsx)(s.Z,{threshold:.25,className:c().bannererror__media__image,classNameLoaded:c()["bannererror__media__image--loaded"],width:null===d||void 0===d?void 0:d.bannerImageWidth,height:null===d||void 0===d?void 0:d.bannerImageHeight,src:"".concat("https://notiflix.github.io").concat(null===d||void 0===d?void 0:d.bannerImageSrc),alt:null===d||void 0===d?void 0:d.title})}),(0,n.jsxs)("div",{className:c().bannererror__content,children:[(0,n.jsx)("h1",{className:c().bannererror__content__title,children:l}),(0,n.jsx)("h2",{className:c().bannererror__content__subtitle,children:null===d||void 0===d?void 0:d.title}),(0,n.jsx)(o.default,{href:u,as:"".concat("https://notiflix.github.io").concat(_),passHref:!0,prefetch:!1,children:(0,n.jsx)("a",{className:c().bannererror__content__link,children:(0,n.jsx)("span",{children:null===d||void 0===d?void 0:d.buttonText})})})]})]})}},907:function(e,r,t){"use strict";t.d(r,{Z:function(){return d}});var n=t(5893),o=t(2809),a=t(7294),i=t(8216);function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var c=function e(r,t){var n=this;(0,i.Z)(this,e),(0,o.Z)(this,"self",void 0),(0,o.Z)(this,"options",void 0),(0,o.Z)(this,"elements",void 0),(0,o.Z)(this,"observer",void 0),(0,o.Z)(this,"defaults",{selector:".js-lazyload",attributeNameSrc:"data-src",attributeNameSrcset:"data-srcset",classNameLoaded:"js-lazyloaded",root:null,rootMargin:"0px",threshold:0}),(0,o.Z)(this,"observe",(function(){var e=n.self;Array.prototype.forEach.call(n.elements,(function(r){var t;null===(t=e.observer)||void 0===t||t.observe(r)}))})),(0,o.Z)(this,"loader",(function(e){var r=e.getAttribute(n.options.attributeNameSrc||n.defaults.attributeNameSrc)||"",t=e.getAttribute(n.options.attributeNameSrcset||n.defaults.attributeNameSrcset)||"",o=r.length>1,a=t.length>1;e instanceof HTMLImageElement?(o&&(e.src=r),a&&(e.srcset=t,window.navigator.userAgent.toLocaleLowerCase("en").indexOf(".net4")>-1&&(String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,r){var t=r&&r>0?r:0;return this.substring(t,t+e.length)===e}}),t.trim().startsWith("data:image")?e.src=(t.split(", data:image")[0]||t.split(",data:image")[0]||t.split(", http")[0]||t.split(",http")[0]||t.split(", /")[0]||t.split(",/")[0]||"").trim():e.src=(t.trim().split(", ")[0]||t.trim().split(",")[0]||"").trim().split(" ")[0].trim()))):e instanceof HTMLElement&&o&&(e.style.backgroundImage='url("'.concat(r,'")'),e.style.backgroundRepeat="no-repeat",e.style.backgroundSize="cover",e.style.backgroundPosition="center"),(o||a)&&e.classList.add(n.options.classNameLoaded||n.defaults.classNameLoaded)})),(0,o.Z)(this,"loadImages",(function(){var e=n.self;Array.prototype.forEach.call(e.elements,(function(r){e.loader(r)}))})),(0,o.Z)(this,"init",(function(){if(window.IntersectionObserver){var e={root:n.options.root||n.defaults.root,rootMargin:n.options.rootMargin||n.defaults.rootMargin,threshold:[n.options.threshold||n.defaults.threshold]};n.observer=new IntersectionObserver((function(e){var r=n.self;Array.prototype.forEach.call(e,(function(e){var t,o=e.target.classList.contains(r.options.classNameLoaded||r.defaults.classNameLoaded);e.isIntersecting&&!o&&(n.loader(e.target),null===(t=n.observer)||void 0===t||t.unobserve(e.target))}))}),e),n.observe()}else n.loadImages()})),(0,o.Z)(this,"disconnect",(function(){var e;null===(e=n.observer)||void 0===e||e.disconnect()})),(0,o.Z)(this,"reconnect",(function(){n.observe()})),this.self=this,this.options=l(l({},this.defaults),r),this.elements=t||window.document.querySelectorAll(this.options.selector||this.defaults.selector),this.observer=null,this.init()},d=function(e){var r,t=e.id,i=e.className,s=e.alt,l=e.width,d=e.height,u=e.placeholder,_=e.src,b=e.srcset,h=e.attributeNameSrc,f=e.attributeNameSrcset,m=e.classNameLoaded,g=e.root,p=e.rootMargin,v=e.threshold,A=u||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4AQMAAAADqqSRAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABZJREFUOMtjGAWjYBSMglEwCkYB3QEAB4AAAe7tUzsAAAAASUVORK5CYII=",N=(0,a.createRef)();(0,a.useEffect)((function(){N.current&&new c({attributeNameSrc:h,attributeNameSrcset:f,classNameLoaded:m,root:g,threshold:v,rootMargin:p},[N.current])}),[N,h,f,m,g,p,v]);var j=(0,a.createElement)("img",(r={ref:N,id:t,className:i||"",alt:s,width:l,height:d},(0,o.Z)(r,h||"data-src",_),(0,o.Z)(r,f||"data-srcet",b),(0,o.Z)(r,"src",A),r),null);return(0,n.jsx)(n.Fragment,{children:j})}},5854:function(e,r,t){"use strict";t.r(r);var n=t(5893),o=t(5104),a=t(5054),i=t(9931),s=t(3868),l=t.n(s);r.default=function(e){var r=e.statusCode,t=void 0===r?404:r,s=o.attributes._dbPageMeta,c=o.attributes._dbErrorBanner;return(0,n.jsx)(a.Z,{meta:s,classNamePrefix:"error",children:(0,n.jsx)("div",{className:l().error,children:(0,n.jsx)("div",{className:l().error__container,children:(0,n.jsx)(i.Z,{statusCode:t,data:c})})})})}},4722:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t(5854)}])},3259:function(e){e.exports={bannererror:"BannerError_bannererror__22eLN",bannererror__media:"BannerError_bannererror__media__1Zum0",bannererror__media__image:"BannerError_bannererror__media__image__rr9zC","bannererror__media__image--loaded":"BannerError_bannererror__media__image--loaded__lPcAV",bannererror__content:"BannerError_bannererror__content__2nL3i",bannererror__content__title:"BannerError_bannererror__content__title__1cpWE",bannererror__content__subtitle:"BannerError_bannererror__content__subtitle__2mx5Z",bannererror__content__link:"BannerError_bannererror__content__link__zuc6p"}},3868:function(e){e.exports={error:"__404_error__SWg97",error__container:"__404_error__container__O_rVj"}}},function(e){e.O(0,[5445,6893,5054,2518,9774,2888,179],(function(){return r=4722,e(e.s=r);var r}));var r=e.O();_N_E=r}]);