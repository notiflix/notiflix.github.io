(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3367],{8418:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(l){a=!0,o=l}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var a,o=(a=r(7294))&&a.__esModule?a:{default:a},i=r(6273),s=r(387),l=r(7190);var c={};function u(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,a=s.useRouter(),d=o.default.useMemo((function(){var t=n(i.resolveHref(a,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?i.resolveHref(a,e.as):o||r}}),[a,e.href,e.as]),f=d.href,h=d.as,_=e.children,v=e.replace,b=e.shallow,p=e.scroll,m=e.locale;"string"===typeof _&&(_=o.default.createElement("a",null,_));var g=(t=o.default.Children.only(_))&&"object"===typeof t&&t.ref,y=n(l.useIntersection({rootMargin:"200px"}),2),A=y[0],E=y[1],w=o.default.useCallback((function(e){A(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,A]);o.default.useEffect((function(){var e=E&&r&&i.isLocalURL(f),t="undefined"!==typeof m?m:a&&a.locale,n=c[f+"%"+h+(t?"%"+t:"")];e&&!n&&u(a,f,h,{locale:t})}),[h,f,E,m,r,a]);var N={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),t[a?"replace":"push"](r,n,{shallow:o,locale:l,scroll:s}))}(e,a,f,h,v,b,p,m)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(f)&&u(a,f,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof m?m:a&&a.locale,j=a&&a.isLocaleDomain&&i.getDomainLocale(h,S,a&&a.locales,a&&a.domainLocales);N.href=j||i.addBasePath(i.addLocale(h,S,a&&a.defaultLocale))}return o.default.cloneElement(t,N)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(l){a=!0,o=l}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,l=a.useRef(),c=n(a.useState(!1),2),u=c[0],d=c[1],f=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||u||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=s.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),s.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,u]);return a.useEffect((function(){if(!i&&!u){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[f,u]};var a=r(7294),o=r(9311),i="undefined"!==typeof IntersectionObserver;var s=new Map},3367:function(e,t,r){"use strict";var n=r(5893),a=r(1664),o=r(8655),i=r(290),s=r(7343),l=r(4236),c=r.n(l);t.Z=function(e){var t,r,l=e.statusCode,u=e.data,d=(null===(t=o._j.find((function(e){return(null===e||void 0===e?void 0:e.id)===i.D.HOME})))||void 0===t?void 0:t.pathPage)||"/",f=(null===(r=o._j.find((function(e){return(null===e||void 0===e?void 0:e.id)===i.D.HOME})))||void 0===r?void 0:r.pathAs)||"/";return(0,n.jsxs)("div",{className:c().bannererror,children:[(0,n.jsx)("div",{className:c().bannererror__media,children:(0,n.jsx)(s.Z,{threshold:.25,className:c().bannererror__media__image,classNameLoaded:c()["bannererror__media__image--loaded"],width:null===u||void 0===u?void 0:u.bannerImageWidth,height:null===u||void 0===u?void 0:u.bannerImageHeight,src:"".concat("https://notiflix.github.io").concat(null===u||void 0===u?void 0:u.bannerImageSrc),alt:null===u||void 0===u?void 0:u.title})}),(0,n.jsxs)("div",{className:c().bannererror__content,children:[(0,n.jsx)("h1",{className:c().bannererror__content__title,children:l}),(0,n.jsx)("h2",{className:c().bannererror__content__subtitle,children:null===u||void 0===u?void 0:u.title}),(0,n.jsx)(a.default,{href:d,as:"".concat("https://notiflix.github.io").concat(f),passHref:!0,prefetch:!1,children:(0,n.jsx)("a",{className:c().bannererror__content__link,children:(0,n.jsx)("span",{children:null===u||void 0===u?void 0:u.buttonText})})})]})]})}},7343:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(5893),a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return null!=t&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t}var s,l=function e(t,r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.defaults={selector:".js-lazyload",attributeNameSrc:"data-src",attributeNameSrcset:"data-srcset",classNameLoaded:"js-lazyloaded",root:null,rootMargin:"0px",threshold:0},this.observe=function(){var e=n.self;Array.prototype.forEach.call(n.elements,(function(t){var r;null===(r=e.observer)||void 0===r||r.observe(t)}))},this.loader=function(e){var t=e.getAttribute(n.options.attributeNameSrc||n.defaults.attributeNameSrc)||"",r=e.getAttribute(n.options.attributeNameSrcset||n.defaults.attributeNameSrcset)||"",a=t.length>1,o=r.length>1;i(e,HTMLImageElement)?(a&&(e.src=t),o&&(e.srcset=r,window.navigator.userAgent.toLocaleLowerCase("en").indexOf(".net4")>-1&&(String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var r=t&&t>0?t:0;return this.substring(r,r+e.length)===e}}),r.trim().startsWith("data:image")?e.src=(r.split(", data:image")[0]||r.split(",data:image")[0]||r.split(", http")[0]||r.split(",http")[0]||r.split(", /")[0]||r.split(",/")[0]||"").trim():e.src=(r.trim().split(", ")[0]||r.trim().split(",")[0]||"").trim().split(" ")[0].trim()))):i(e,HTMLElement)&&a&&(e.style.backgroundImage='url("'.concat(t,'")'),e.style.backgroundRepeat="no-repeat",e.style.backgroundSize="cover",e.style.backgroundPosition="center"),(a||o)&&e.classList.add(n.options.classNameLoaded||n.defaults.classNameLoaded)},this.loadImages=function(){var e=n.self;Array.prototype.forEach.call(e.elements,(function(t){e.loader(t)}))},this.init=function(){var e=n;if(window.IntersectionObserver){var t={root:n.options.root||n.defaults.root,rootMargin:n.options.rootMargin||n.defaults.rootMargin,threshold:[n.options.threshold||n.defaults.threshold]};n.observer=new IntersectionObserver((function(t){var r=e,n=e.self;Array.prototype.forEach.call(t,(function(e){var t,a=e.target.classList.contains(n.options.classNameLoaded||n.defaults.classNameLoaded);e.isIntersecting&&!a&&(r.loader(e.target),null===(t=r.observer)||void 0===t||t.unobserve(e.target))}))}),t),n.observe()}else n.loadImages()},this.disconnect=function(){var e;null===(e=n.observer)||void 0===e||e.disconnect()},this.reconnect=function(){n.observe()},this.self=this,this.options=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},this.defaults,t),this.elements=r||window.document.querySelectorAll(this.options.selector||this.defaults.selector),this.observer=null,this.init()};function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=function(e){var t=e.id,r=e.className,o=e.alt,i=e.width,u=e.height,d=e.placeholder,f=e.src,h=e.srcset,_=e.attributeNameSrc,v=e.attributeNameSrcset,b=e.classNameLoaded,p=e.root,m=e.rootMargin,g=e.threshold,y=d||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4AQMAAAADqqSRAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABZJREFUOMtjGAWjYBSMglEwCkYB3QEAB4AAAe7tUzsAAAAASUVORK5CYII=",A=(0,a.createRef)();(0,a.useEffect)((function(){A.current&&new l({attributeNameSrc:_,attributeNameSrcset:v,classNameLoaded:b,root:p,threshold:g,rootMargin:m},[A.current])}),[A,_,v,b,p,m,g]);var E=(0,a.createElement)("img",(c(s={ref:A,id:t,className:r||"",alt:o,width:i,height:u},_||"data-src",f),c(s,v||"data-srcet",h),c(s,"src",y),s),null);return(0,n.jsx)(n.Fragment,{children:E})}},4236:function(e){e.exports={bannererror:"BannerError_bannererror__1J3zY",bannererror__media:"BannerError_bannererror__media__Uyw_V",bannererror__media__image:"BannerError_bannererror__media__image__NDlKm","bannererror__media__image--loaded":"BannerError_bannererror__media__image--loaded__kRSY_",bannererror__content:"BannerError_bannererror__content__U_htS",bannererror__content__title:"BannerError_bannererror__content__title__Pea3E",bannererror__content__subtitle:"BannerError_bannererror__content__subtitle__J8I5O",bannererror__content__link:"BannerError_bannererror__content__link__rYCH_"}},1664:function(e,t,r){e.exports=r(8418)}}]);