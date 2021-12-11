(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7237],{9279:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation/partials/content-search/ContentSearch",function(){return r(1875)}])},418:function(t,e,r){"use strict";var n,a;r.d(e,{_:function(){return n},j:function(){return s}}),(a=n||(n={})).NOTIFY="NOTIFY",a.REPORT="REPORT",a.CONFIRM="CONFIRM",a.LOADING="LOADING",a.BLOCK="BLOCK";var o=new Map([[n.NOTIFY,"Notify"],[n.REPORT,"Report"],[n.CONFIRM,"Confirm"],[n.LOADING,"Loading"],[n.BLOCK,"Block"]]),s=function(t){return o.get(t)||""}},7343:function(t,e,r){"use strict";r.d(e,{Z:function(){return u}});var n=r(5893),a=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){return null!=e&&"undefined"!==typeof Symbol&&e[Symbol.hasInstance]?e[Symbol.hasInstance](t):t instanceof e}var i,c=function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.defaults={selector:".js-lazyload",attributeNameSrc:"data-src",attributeNameSrcset:"data-srcset",classNameLoaded:"js-lazyloaded",root:null,rootMargin:"0px",threshold:0},this.observe=function(){var t=n.self;Array.prototype.forEach.call(n.elements,(function(e){var r;null===(r=t.observer)||void 0===r||r.observe(e)}))},this.loader=function(t){var e=t.getAttribute(n.options.attributeNameSrc||n.defaults.attributeNameSrc)||"",r=t.getAttribute(n.options.attributeNameSrcset||n.defaults.attributeNameSrcset)||"",a=e.length>1,o=r.length>1;s(t,HTMLImageElement)?(a&&(t.src=e),o&&(t.srcset=r,window.navigator.userAgent.toLocaleLowerCase("en").indexOf(".net4")>-1&&(String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(t,e){var r=e&&e>0?e:0;return this.substring(r,r+t.length)===t}}),r.trim().startsWith("data:image")?t.src=(r.split(", data:image")[0]||r.split(",data:image")[0]||r.split(", http")[0]||r.split(",http")[0]||r.split(", /")[0]||r.split(",/")[0]||"").trim():t.src=(r.trim().split(", ")[0]||r.trim().split(",")[0]||"").trim().split(" ")[0].trim()))):s(t,HTMLElement)&&a&&(t.style.backgroundImage='url("'.concat(e,'")'),t.style.backgroundRepeat="no-repeat",t.style.backgroundSize="cover",t.style.backgroundPosition="center"),(a||o)&&t.classList.add(n.options.classNameLoaded||n.defaults.classNameLoaded)},this.loadImages=function(){var t=n.self;Array.prototype.forEach.call(t.elements,(function(e){t.loader(e)}))},this.init=function(){var t=n;if(window.IntersectionObserver){var e={root:n.options.root||n.defaults.root,rootMargin:n.options.rootMargin||n.defaults.rootMargin,threshold:[n.options.threshold||n.defaults.threshold]};n.observer=new IntersectionObserver((function(e){var r=t,n=t.self;Array.prototype.forEach.call(e,(function(t){var e,a=t.target.classList.contains(n.options.classNameLoaded||n.defaults.classNameLoaded);t.isIntersecting&&!a&&(r.loader(t.target),null===(e=r.observer)||void 0===e||e.unobserve(t.target))}))}),e),n.observe()}else n.loadImages()},this.disconnect=function(){var t;null===(t=n.observer)||void 0===t||t.disconnect()},this.reconnect=function(){n.observe()},this.self=this,this.options=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){o(t,e,r[e])}))}return t}({},this.defaults,e),this.elements=r||window.document.querySelectorAll(this.options.selector||this.defaults.selector),this.observer=null,this.init()};function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u=function(t){var e=t.id,r=t.className,o=t.alt,s=t.width,u=t.height,d=t.placeholder,f=t.src,h=t.srcset,b=t.attributeNameSrc,m=t.attributeNameSrcset,g=t.classNameLoaded,p=t.root,A=t.rootMargin,v=t.threshold,N=d||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4AQMAAAADqqSRAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABZJREFUOMtjGAWjYBSMglEwCkYB3QEAB4AAAe7tUzsAAAAASUVORK5CYII=",_=(0,a.createRef)();(0,a.useEffect)((function(){_.current&&new c({attributeNameSrc:b,attributeNameSrcset:m,classNameLoaded:g,root:p,threshold:v,rootMargin:A},[_.current])}),[_,b,m,g,p,A,v]);var O=(0,a.createElement)("img",(l(i={ref:_,id:e,className:r||"",alt:o,width:s,height:u},b||"data-src",f),l(i,m||"data-srcet",h),l(i,"src",N),i),null);return(0,n.jsx)(n.Fragment,{children:O})}},5112:function(t,e,r){"use strict";r.r(e);var n=r(5893),a=r(8951),o=r(7343),s=r(8786),i=r.n(s);e.default=function(){var t=a.attributes._dbDocsSearch;return(0,n.jsx)("div",{className:i().banner,children:(0,n.jsx)(o.Z,{threshold:.25,className:i().banner__image,classNameLoaded:i()["banner__image--loaded"],width:"500",height:"500",src:"".concat("https://notiflix.github.io").concat(null===t||void 0===t?void 0:t.bannerImageSrc),alt:null===t||void 0===t?void 0:t.bannerImageAlt})})}},1875:function(t,e,r){"use strict";r.r(e);var n=r(5893),a=r(4678),o=r(5112),s=r(1462),i=r.n(s);e.default=function(){return(0,n.jsxs)("div",{className:i().search,children:[(0,n.jsx)(a.default,{}),(0,n.jsx)(o.default,{})]})}},8786:function(t){t.exports={banner:"ContentSearchBanner_banner__4rroC",banner__image:"ContentSearchBanner_banner__image__Iu2b_","banner__image--loaded":"ContentSearchBanner_banner__image--loaded__EhRMx"}},1462:function(t){t.exports={search:"ContentSearch_search__daUGc"}}},function(t){t.O(0,[6893,8951,4678,9774,2888,179],(function(){return e=9279,t(t.s=e);var e}));var e=t.O();_N_E=e}]);