(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1715],{907:function(t,e,r){"use strict";r.d(e,{Z:function(){return d}});var a=r(5893),n=r(2809),o=r(7294),s=r(8216);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var c=function t(e,r){var a=this;(0,s.Z)(this,t),(0,n.Z)(this,"self",void 0),(0,n.Z)(this,"options",void 0),(0,n.Z)(this,"elements",void 0),(0,n.Z)(this,"observer",void 0),(0,n.Z)(this,"defaults",{selector:".js-lazyload",attributeNameSrc:"data-src",attributeNameSrcset:"data-srcset",classNameLoaded:"js-lazyloaded",root:null,rootMargin:"0px",threshold:0}),(0,n.Z)(this,"observe",(function(){var t=a.self;Array.prototype.forEach.call(a.elements,(function(e){var r;null===(r=t.observer)||void 0===r||r.observe(e)}))})),(0,n.Z)(this,"loader",(function(t){var e=t.getAttribute(a.options.attributeNameSrc||a.defaults.attributeNameSrc)||"",r=t.getAttribute(a.options.attributeNameSrcset||a.defaults.attributeNameSrcset)||"",n=e.length>1,o=r.length>1;t instanceof HTMLImageElement?(n&&(t.src=e),o&&(t.srcset=r,window.navigator.userAgent.toLocaleLowerCase("en").indexOf(".net4")>-1&&(String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(t,e){var r=e&&e>0?e:0;return this.substring(r,r+t.length)===t}}),r.trim().startsWith("data:image")?t.src=(r.split(", data:image")[0]||r.split(",data:image")[0]||r.split(", http")[0]||r.split(",http")[0]||r.split(", /")[0]||r.split(",/")[0]||"").trim():t.src=(r.trim().split(", ")[0]||r.trim().split(",")[0]||"").trim().split(" ")[0].trim()))):t instanceof HTMLElement&&n&&(t.style.backgroundImage='url("'.concat(e,'")'),t.style.backgroundRepeat="no-repeat",t.style.backgroundSize="cover",t.style.backgroundPosition="center"),(n||o)&&t.classList.add(a.options.classNameLoaded||a.defaults.classNameLoaded)})),(0,n.Z)(this,"loadImages",(function(){var t=a.self;Array.prototype.forEach.call(t.elements,(function(e){t.loader(e)}))})),(0,n.Z)(this,"init",(function(){if(window.IntersectionObserver){var t={root:a.options.root||a.defaults.root,rootMargin:a.options.rootMargin||a.defaults.rootMargin,threshold:[a.options.threshold||a.defaults.threshold]};a.observer=new IntersectionObserver((function(t){var e=a.self;Array.prototype.forEach.call(t,(function(t){var r,n=t.target.classList.contains(e.options.classNameLoaded||e.defaults.classNameLoaded);t.isIntersecting&&!n&&(a.loader(t.target),null===(r=a.observer)||void 0===r||r.unobserve(t.target))}))}),t),a.observe()}else a.loadImages()})),(0,n.Z)(this,"disconnect",(function(){var t;null===(t=a.observer)||void 0===t||t.disconnect()})),(0,n.Z)(this,"reconnect",(function(){a.observe()})),this.self=this,this.options=l(l({},this.defaults),e),this.elements=r||window.document.querySelectorAll(this.options.selector||this.defaults.selector),this.observer=null,this.init()},d=function(t){var e,r=t.id,s=t.className,i=t.alt,l=t.width,d=t.height,u=t.placeholder,f=t.src,h=t.srcset,b=t.attributeNameSrc,m=t.attributeNameSrcset,g=t.classNameLoaded,p=t.root,v=t.rootMargin,A=t.threshold,_=u||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4AQMAAAADqqSRAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABZJREFUOMtjGAWjYBSMglEwCkYB3QEAB4AAAe7tUzsAAAAASUVORK5CYII=",w=(0,o.createRef)();(0,o.useEffect)((function(){w.current&&new c({attributeNameSrc:b,attributeNameSrcset:m,classNameLoaded:g,root:p,threshold:A,rootMargin:v},[w.current])}),[w,b,m,g,p,v,A]);var N=(0,o.createElement)("img",(e={ref:w,id:r,className:s||"",alt:i,width:l,height:d},(0,n.Z)(e,b||"data-src",f),(0,n.Z)(e,m||"data-srcet",h),(0,n.Z)(e,"src",_),e),null);return(0,a.jsx)(a.Fragment,{children:N})}},8665:function(t,e,r){"use strict";r.r(e);var a=r(5893),n=r(2079),o=r(2921),s=r(2561),i=r(652),l=r(8192),c=r.n(l);e.default=function(){var t=n.attributes._dbPageMeta;return(0,a.jsx)(o.Z,{meta:t,classNamePrefix:"download",children:(0,a.jsx)("div",{className:c().download,children:(0,a.jsxs)("div",{className:c().download__container,children:[(0,a.jsx)(s.default,{}),(0,a.jsx)(i.default,{})]})})})}},652:function(t,e,r){"use strict";r.r(e);var a=r(5893),n=r(2079),o=r(907),s=r(1178),i=r.n(s);e.default=function(){var t=n.attributes._dbDownloadBanner;return(0,a.jsx)("div",{className:i().banner,children:(0,a.jsx)(o.Z,{threshold:.25,className:i().banner__image,classNameLoaded:i()["banner__image--loaded"],width:"500",height:"500",src:"".concat("https://notiflix.github.io").concat(null===t||void 0===t?void 0:t.image),alt:null===t||void 0===t?void 0:t.alt})})}},4286:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/download",function(){return r(8665)}])},8192:function(t){t.exports={download:"download_download__3nkYJ",download__container:"download_download__container__cmSF7"}},1178:function(t){t.exports={banner:"DownloadBanner_banner__3Sg9-",banner__image:"DownloadBanner_banner__image__jLM7D","banner__image--loaded":"DownloadBanner_banner__image--loaded__3f6fs"}}},function(t){t.O(0,[5445,6893,7552,2921,2561,9774,2888,179],(function(){return e=4286,t(t.s=e);var e}));var e=t.O();_N_E=e}]);