(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3247],{1386:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation/partials/content/Content",function(){return n(8029)}])},7343:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(5893),a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){return null!=e&&"undefined"!==typeof Symbol&&e[Symbol.hasInstance]?e[Symbol.hasInstance](t):t instanceof e}var i,c=function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.defaults={selector:".js-lazyload",attributeNameSrc:"data-src",attributeNameSrcset:"data-srcset",classNameLoaded:"js-lazyloaded",root:null,rootMargin:"0px",threshold:0},this.observe=function(){var t=r.self;Array.prototype.forEach.call(r.elements,(function(e){var n;null===(n=t.observer)||void 0===n||n.observe(e)}))},this.loader=function(t){var e=t.getAttribute(r.options.attributeNameSrc||r.defaults.attributeNameSrc)||"",n=t.getAttribute(r.options.attributeNameSrcset||r.defaults.attributeNameSrcset)||"",a=e.length>1,o=n.length>1;s(t,HTMLImageElement)?(a&&(t.src=e),o&&(t.srcset=n,window.navigator.userAgent.toLocaleLowerCase("en").indexOf(".net4")>-1&&(String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(t,e){var n=e&&e>0?e:0;return this.substring(n,n+t.length)===t}}),n.trim().startsWith("data:image")?t.src=(n.split(", data:image")[0]||n.split(",data:image")[0]||n.split(", http")[0]||n.split(",http")[0]||n.split(", /")[0]||n.split(",/")[0]||"").trim():t.src=(n.trim().split(", ")[0]||n.trim().split(",")[0]||"").trim().split(" ")[0].trim()))):s(t,HTMLElement)&&a&&(t.style.backgroundImage='url("'.concat(e,'")'),t.style.backgroundRepeat="no-repeat",t.style.backgroundSize="cover",t.style.backgroundPosition="center"),(a||o)&&t.classList.add(r.options.classNameLoaded||r.defaults.classNameLoaded)},this.loadImages=function(){var t=r.self;Array.prototype.forEach.call(t.elements,(function(e){t.loader(e)}))},this.init=function(){var t=r;if(window.IntersectionObserver){var e={root:r.options.root||r.defaults.root,rootMargin:r.options.rootMargin||r.defaults.rootMargin,threshold:[r.options.threshold||r.defaults.threshold]};r.observer=new IntersectionObserver((function(e){var n=t,r=t.self;Array.prototype.forEach.call(e,(function(t){var e,a=t.target.classList.contains(r.options.classNameLoaded||r.defaults.classNameLoaded);t.isIntersecting&&!a&&(n.loader(t.target),null===(e=n.observer)||void 0===e||e.unobserve(t.target))}))}),e),r.observe()}else r.loadImages()},this.disconnect=function(){var t;null===(t=r.observer)||void 0===t||t.disconnect()},this.reconnect=function(){r.observe()},this.self=this,this.options=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){o(t,e,n[e])}))}return t}({},this.defaults,e),this.elements=n||window.document.querySelectorAll(this.options.selector||this.defaults.selector),this.observer=null,this.init()};function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=function(t){var e=t.id,n=t.className,o=t.alt,s=t.width,u=t.height,d=t.placeholder,f=t.src,h=t.srcset,b=t.attributeNameSrc,m=t.attributeNameSrcset,g=t.classNameLoaded,p=t.root,v=t.rootMargin,A=t.threshold,_=d||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4AQMAAAADqqSRAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABZJREFUOMtjGAWjYBSMglEwCkYB3QEAB4AAAe7tUzsAAAAASUVORK5CYII=",y=(0,a.createRef)();(0,a.useEffect)((function(){y.current&&new c({attributeNameSrc:b,attributeNameSrcset:m,classNameLoaded:g,root:p,threshold:A,rootMargin:v},[y.current])}),[y,b,m,g,p,v,A]);var N=(0,a.createElement)("img",(l(i={ref:y,id:e,className:n||"",alt:o,width:s,height:u},b||"data-src",f),l(i,m||"data-srcet",h),l(i,"src",_),i),null);return(0,r.jsx)(r.Fragment,{children:N})}},5112:function(t,e,n){"use strict";n.r(e);var r=n(5893),a=n(8951),o=n(7343),s=n(8786),i=n.n(s);e.default=function(){var t=a.attributes._dbDocsSearch;return(0,r.jsx)("div",{className:i().banner,children:(0,r.jsx)(o.Z,{threshold:.25,className:i().banner__image,classNameLoaded:i()["banner__image--loaded"],width:"500",height:"500",src:"".concat("https://notiflix.github.io").concat(null===t||void 0===t?void 0:t.bannerImageSrc),alt:null===t||void 0===t?void 0:t.bannerImageAlt})})}},1875:function(t,e,n){"use strict";n.r(e);var r=n(5893),a=n(4678),o=n(5112),s=n(1462),i=n.n(s);e.default=function(){return(0,r.jsxs)("div",{className:i().search,children:[(0,r.jsx)(a.default,{}),(0,r.jsx)(o.default,{})]})}},8029:function(t,e,n){"use strict";n.r(e);var r=n(5893),a=n(1875),o=n(4671),s=n(592),i=n.n(s);e.default=function(){return(0,r.jsxs)("div",{className:i().content,children:[(0,r.jsx)(a.default,{}),(0,r.jsx)(o.default,{})]})}},8786:function(t){t.exports={banner:"ContentSearchBanner_banner__4rroC",banner__image:"ContentSearchBanner_banner__image__Iu2b_","banner__image--loaded":"ContentSearchBanner_banner__image--loaded__EhRMx"}},1462:function(t){t.exports={search:"ContentSearch_search__daUGc"}},592:function(t){t.exports={content:"Content_content__DFbpj"}}},function(t){t.O(0,[6556,6893,8951,4203,4678,4671,9774,2888,179],(function(){return e=1386,t(t.s=e);var e}));var e=t.O();_N_E=e}]);