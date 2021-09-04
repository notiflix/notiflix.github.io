(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[680],{1147:function(e){e.exports={attributes:{_dbMeta:{routeId:"HOME",lastModifiedDate:"2021-07-22",title:"Notiflix | a JavaScript library for client-side non-blocking notifications.",description:"Notiflix is a JavaScript library for client-side non-blocking notifications, popup boxes, loading indicators, and more that makes your web projects much better.",robots:"noindex, nofollow, noodp, noydir",ogImage:null,themeColor:null},_dbHomeSlider:{image:"/content/media/home/notiflix-home-slider.svg",title:"welcome to <span>Notiflix</span>",description:"Notiflix is a <span>JavaScript</span> library for client-side non-blocking notifications, popup boxes, loading indicators, and more that makes your web projects much better.",downloadInfo:"Download the latest version of Notiflix.",downloadCount:"Notiflix has been downloaded {{x}} times.",loading:"Loading...",failure:"Something went wrong.",restricted:"API rate limit exceeded."},_dbHomeGetItOn:{title:"Get it on",clipboard:"Copied to the clipboard.",yarn:{title:"Yarn",script:"yarn add notiflix",url:"https://yarnpkg.com/package/notiflix"},npm:{title:"NPM",script:"npm i notiflix",url:"https://www.npmjs.com/package/notiflix"},github:{title:"GitHub",script:null,url:"https://github.com/notiflix/Notiflix.git"}},_dbHomeBrowsers:{title:"Browser Compatibility",disclaimer:"* SVG animations are not supported.",chrome:"Chrome",firefox:"Firefox",safari:"Safari",edge:"Edge",opera:"Opera",edgeLegacy:"* Edge Legacy",ie:"* IE 10+"},_dbHomeProducts:{title:"Notiflix Modules",products:[{routeId:"NOTIFY",title:"Notify",description:'Notiflix Notify module can be used to send non-blocking alerts/notifications. This module includes 4 types of notifications: "Success", "Failure", "Warning", and "Info".',button:"More"},{routeId:"REPORT",title:"Report",description:'Notiflix Report module can be used to show extended notifications that contain a title, description, and button(with a callback function). This module includes 4 types of notifications: "Success", "Failure", "Warning", and "Info".',button:"More"},{routeId:"CONFIRM",title:"Confirm",description:'Notiflix Confirm module can be used to show non-blocking prompt boxes. This module includes 2 types of prompts: "Show" and "Ask". An additional question can be asked as well within the prompt box if using the "Ask" one.',button:"More"},{routeId:"LOADING",title:"Loading",description:'Notiflix Loading module can be used to show a loading indicator during a process (Fetch/XHR). Includes 6 types of animated SVG icons: "Standard", "Hourglass", "Circle", "Arrows", "Dots", and "Pulse". An additional type is "Custom", and it can be used with a custom SVG icon.',button:"More"},{routeId:"BLOCK",title:"Block",description:"Notiflix Block module can be used to block/unblock the elements during a process (Fetch/XHR), without locking the browser or the other elements/components to prevent the user's interactions on the blocked elements.",button:"More"}]}},html:""}},2167:function(e,t,o){"use strict";var i=o(3848);t.default=void 0;var n,r=(n=o(7294))&&n.__esModule?n:{default:n},a=o(1063),s=o(4651),d=o(7426);var c={};function l(e,t,o,i){if(e&&a.isLocalURL(t)){e.prefetch(t,o,i).catch((function(e){0}));var n=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;c[t+"%"+o+(n?"%"+n:"")]=!0}}var _=function(e){var t,o=!1!==e.prefetch,n=s.useRouter(),_=r.default.useMemo((function(){var t=a.resolveHref(n,e.href,!0),o=i(t,2),r=o[0],s=o[1];return{href:r,as:e.as?a.resolveHref(n,e.as):s||r}}),[n,e.href,e.as]),u=_.href,p=_.as,m=e.children,f=e.replace,h=e.shallow,g=e.scroll,v=e.locale;"string"===typeof m&&(m=r.default.createElement("a",null,m));var b=(t=r.default.Children.only(m))&&"object"===typeof t&&t.ref,I=d.useIntersection({rootMargin:"200px"}),w=i(I,2),y=w[0],N=w[1],P=r.default.useCallback((function(e){y(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,y]);r.default.useEffect((function(){var e=N&&o&&a.isLocalURL(u),t="undefined"!==typeof v?v:n&&n.locale,i=c[u+"%"+p+(t?"%"+t:"")];e&&!i&&l(n,u,p,{locale:t})}),[p,u,N,v,o,n]);var k={ref:P,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,o,i,n,r,s,d){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(o))&&(e.preventDefault(),null==s&&i.indexOf("#")>=0&&(s=!1),t[n?"replace":"push"](o,i,{shallow:r,locale:d,scroll:s}))}(e,n,u,p,f,h,g,v)},onMouseEnter:function(e){a.isLocalURL(u)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(n,u,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var x="undefined"!==typeof v?v:n&&n.locale,O=n&&n.isLocaleDomain&&a.getDomainLocale(p,x,n&&n.locales,n&&n.domainLocales);k.href=O||a.addBasePath(a.addLocale(p,x,n&&n.defaultLocale))}return r.default.cloneElement(t,k)};t.default=_},7426:function(e,t,o){"use strict";var i=o(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,o=e.disabled||!a,d=n.useRef(),c=n.useState(!1),l=i(c,2),_=l[0],u=l[1],p=n.useCallback((function(e){d.current&&(d.current(),d.current=void 0),o||_||e&&e.tagName&&(d.current=function(e,t,o){var i=function(e){var t=e.rootMargin||"",o=s.get(t);if(o)return o;var i=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)}))}),e);return s.set(t,o={id:t,observer:n,elements:i}),o}(o),n=i.id,r=i.observer,a=i.elements;return a.set(e,t),r.observe(e),function(){a.delete(e),r.unobserve(e),0===a.size&&(r.disconnect(),s.delete(n))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[o,t,_]);return n.useEffect((function(){if(!a&&!_){var e=r.requestIdleCallback((function(){return u(!0)}));return function(){return r.cancelIdleCallback(e)}}}),[_]),[p,_]};var n=o(7294),r=o(3447),a="undefined"!==typeof IntersectionObserver;var s=new Map},7546:function(e,t,o){"use strict";o.d(t,{_j:function(){return r}});var i,n=o(6893);!function(e){e.HOME="HOME",e.NOTIFY="NOTIFY",e.REPORT="REPORT",e.CONFIRM="CONFIRM",e.LOADING="LOADING",e.BLOCK="BLOCK",e.DOWNLOAD="DOWNLOAD",e.DOCUMENTATION="DOCUMENTATION"}(i||(i={}));var r=[{id:i.HOME,sortOrder:1,isActive:!0,isProductPage:!1,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"daily",sitemapPriority:"1.0",showInHeaderMenu:!1,showInFooterMenu:!1,isTargetBlank:!1,name:"Home",pathPage:"/home",pathAs:"/",pathDBFile:"src/_database/pages/home.md",IconComponent:n.m6D},{id:i.NOTIFY,sortOrder:2,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Notify",pathPage:"/notify",pathAs:"/notify",pathDBFile:"src/_database/pages/notify.md",IconComponent:n.vWP},{id:i.REPORT,sortOrder:3,isActive:!0,isProductPage:!0,addToNextJSConfig:!1,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Report",pathPage:"/report",pathAs:"/report",pathDBFile:"src/_database/pages/report.md",IconComponent:n.H33},{id:i.CONFIRM,sortOrder:4,isActive:!0,isProductPage:!0,addToNextJSConfig:!1,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Confirm",pathPage:"/confirm",pathAs:"/confirm",pathDBFile:"src/_database/pages/confirm.md",IconComponent:n._rq},{id:i.LOADING,sortOrder:5,isActive:!0,isProductPage:!0,addToNextJSConfig:!1,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Loading",pathPage:"/loading",pathAs:"/loading",pathDBFile:"src/_database/pages/loading.md",IconComponent:n.dAq},{id:i.BLOCK,sortOrder:6,isActive:!0,isProductPage:!0,addToNextJSConfig:!1,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Block",pathPage:"/block",pathAs:"/block",pathDBFile:"src/_database/pages/block.md",IconComponent:n.bfl},{id:i.DOWNLOAD,sortOrder:7,isActive:!0,isProductPage:!1,addToNextJSConfig:!1,addToSitemap:!0,sitemapFrequency:"monthly",sitemapPriority:"0.9",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Download",pathPage:"/download",pathAs:"/download",pathDBFile:"src/_database/pages/download.md",IconComponent:n.wzc},{id:i.DOCUMENTATION,sortOrder:8,isActive:!0,isProductPage:!1,addToNextJSConfig:!1,addToSitemap:!0,sitemapFrequency:"monthly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Documentation",pathPage:"/documentation",pathAs:"/documentation",pathDBFile:"src/_database/pages/documentation.md",IconComponent:n.yK7}]},8116:function(e,t,o){"use strict";o.r(t);var i=o(5893),n=o(1664),r=o(6893),a=o(1147),s=o(7546),d=o(6495),c=o.n(d);t.default=function(){var e,t,o,d=a.attributes._dbHomeProducts;return(0,i.jsx)("div",{className:c().home__products,children:(0,i.jsx)("div",{className:c().home__products__container,children:(0,i.jsxs)("div",{className:c().home__products__content,children:[(0,i.jsx)("h2",{className:c().home__products__title,children:null===d||void 0===d?void 0:d.title}),(0,i.jsx)("div",{className:c().home__products__list,children:null===d||void 0===d||null===(e=d.products)||void 0===e||null===(t=e.filter((function(e){var t;return null===(t=s._j.find((function(t){return t.id===e.routeId})))||void 0===t?void 0:t.isActive})))||void 0===t||null===(o=t.sort((function(e,t){var o,i;return((null===(o=s._j.find((function(t){return t.id===e.routeId})))||void 0===o?void 0:o.sortOrder)||0)-((null===(i=s._j.find((function(e){return e.id===t.routeId})))||void 0===i?void 0:i.sortOrder)||1)})))||void 0===o?void 0:o.map((function(e,t){var o,a,d,l,_=(null===(o=s._j.find((function(t){return t.id===e.routeId})))||void 0===o?void 0:o.IconComponent)||r.cDN,u=(null===(a=s._j.find((function(t){return t.id===e.routeId})))||void 0===a?void 0:a.pathPage)||"/",p=(null===(d=s._j.find((function(t){return t.id===e.routeId})))||void 0===d?void 0:d.pathAs)||"/",m=null===(l=s._j.find((function(t){return t.id===e.routeId})))||void 0===l?void 0:l.isTargetBlank;return(0,i.jsx)("div",{className:c().home__products__list__item,children:(0,i.jsxs)("div",{className:c().home__products__list__item__content,children:[(0,i.jsx)(_,{className:c().home__products__list__item__icon}),(0,i.jsx)("h3",{className:c().home__products__list__item__title,children:e.title}),(0,i.jsx)("p",{className:c().home__products__list__item__description,children:e.description}),(0,i.jsx)(n.default,{href:u,as:"".concat("https://notiflix.github.io").concat(p),passHref:!0,children:(0,i.jsxs)("a",{target:m?"_blank":void 0,className:c().home__products__list__item__link,children:[(0,i.jsx)(r.w0f,{className:c().home__products__list__item__link__icon}),(0,i.jsx)("span",{className:c().home__products__list__item__link__text,children:e.button})]})})]})},t)}))})]})})})}},9295:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home/partials/home-products/HomeProducts",function(){return o(8116)}])},6495:function(e){e.exports={home__products:"HomeProducts_home__products__1vOjl",home__products__container:"HomeProducts_home__products__container__H0EkY",home__products__content:"HomeProducts_home__products__content__1Ftwr",home__products__title:"HomeProducts_home__products__title__2JHJf",home__products__list:"HomeProducts_home__products__list__1fKjP",home__products__list__item:"HomeProducts_home__products__list__item__1HAPM",home__products__list__item__content:"HomeProducts_home__products__list__item__content__2jPlL",home__products__list__item__icon:"HomeProducts_home__products__list__item__icon__3giSG",home__products__list__item__title:"HomeProducts_home__products__list__item__title__3J-wf",home__products__list__item__description:"HomeProducts_home__products__list__item__description__3zI-5",home__products__list__item__link:"HomeProducts_home__products__list__item__link__3yJpG",home__products__list__item__link__icon:"HomeProducts_home__products__list__item__link__icon__148BD"}},1664:function(e,t,o){e.exports=o(2167)}},function(e){e.O(0,[893,774,888,179],(function(){return t=9295,e(e.s=t);var t}));var t=e.O();_N_E=t}]);