(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[694],{2167:function(e,t,o){"use strict";var n=o(3848);t.default=void 0;var r,i=(r=o(7294))&&r.__esModule?r:{default:r},a=o(1063),s=o(4651),_=o(7426);var c={};function d(e,t,o,n){if(e&&a.isLocalURL(t)){e.prefetch(t,o,n).catch((function(e){0}));var r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+o+(r?"%"+r:"")]=!0}}var u=function(e){var t,o=!1!==e.prefetch,r=s.useRouter(),u=i.default.useMemo((function(){var t=a.resolveHref(r,e.href,!0),o=n(t,2),i=o[0],s=o[1];return{href:i,as:e.as?a.resolveHref(r,e.as):s||i}}),[r,e.href,e.as]),l=u.href,p=u.as,m=e.children,f=e.replace,h=e.shallow,v=e.scroll,g=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var P=(t=i.default.Children.only(m))&&"object"===typeof t&&t.ref,I=_.useIntersection({rootMargin:"200px"}),y=n(I,2),N=y[0],O=y[1],T=i.default.useCallback((function(e){N(e),P&&("function"===typeof P?P(e):"object"===typeof P&&(P.current=e))}),[P,N]);i.default.useEffect((function(){var e=O&&o&&a.isLocalURL(l),t="undefined"!==typeof g?g:r&&r.locale,n=c[l+"%"+p+(t?"%"+t:"")];e&&!n&&d(r,l,p,{locale:t})}),[p,l,O,g,o,r]);var k={ref:T,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,o,n,r,i,s,_){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(o))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),t[r?"replace":"push"](o,n,{shallow:i,locale:_,scroll:s}))}(e,r,l,p,f,h,v,g)},onMouseEnter:function(e){a.isLocalURL(l)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(r,l,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof g?g:r&&r.locale,w=r&&r.isLocaleDomain&&a.getDomainLocale(p,M,r&&r.locales,r&&r.domainLocales);k.href=w||a.addBasePath(a.addLocale(p,M,r&&r.defaultLocale))}return i.default.cloneElement(t,k)};t.default=u},7426:function(e,t,o){"use strict";var n=o(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,o=e.disabled||!a,_=r.useRef(),c=r.useState(!1),d=n(c,2),u=d[0],l=d[1],p=r.useCallback((function(e){_.current&&(_.current(),_.current=void 0),o||u||e&&e.tagName&&(_.current=function(e,t,o){var n=function(e){var t=e.rootMargin||"",o=s.get(t);if(o)return o;var n=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)}))}),e);return s.set(t,o={id:t,observer:r,elements:n}),o}(o),r=n.id,i=n.observer,a=n.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),s.delete(r))}}(e,(function(e){return e&&l(e)}),{rootMargin:t}))}),[o,t,u]);return r.useEffect((function(){if(!a&&!u){var e=i.requestIdleCallback((function(){return l(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[p,u]};var r=o(7294),i=o(3447),a="undefined"!==typeof IntersectionObserver;var s=new Map},6972:function(e,t,o){"use strict";var n;o.d(t,{D:function(){return n}}),function(e){e.HOME="HOME",e.NOTIFY="NOTIFY",e.REPORT="REPORT",e.CONFIRM="CONFIRM",e.LOADING="LOADING",e.BLOCK="BLOCK",e.DOWNLOAD="DOWNLOAD",e.DOCUMENTATION="DOCUMENTATION"}(n||(n={}))},4882:function(e,t,o){"use strict";o.d(t,{_j:function(){return i}});var n=o(6893),r=o(6972),i=[{id:r.D.HOME,sortOrder:1,isActive:!0,isProductPage:!1,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"daily",sitemapPriority:"1.0",showInHeaderMenu:!1,showInFooterMenu:!1,isTargetBlank:!1,name:"Home",pathPage:"/home",pathAs:"/",pathDBFile:"src/_database/pages/home.md",IconComponent:n.m6D},{id:r.D.NOTIFY,sortOrder:2,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Notify",pathPage:"/notify",pathAs:"/notify",pathDBFile:"src/_database/pages/notify.md",IconComponent:n.vWP},{id:r.D.REPORT,sortOrder:3,isActive:!0,isProductPage:!0,addToNextJSConfig:!1,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Report",pathPage:"/report",pathAs:"/report",pathDBFile:"src/_database/pages/report.md",IconComponent:n.H33},{id:r.D.CONFIRM,sortOrder:4,isActive:!0,isProductPage:!0,addToNextJSConfig:!1,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Confirm",pathPage:"/confirm",pathAs:"/confirm",pathDBFile:"src/_database/pages/confirm.md",IconComponent:n._rq},{id:r.D.LOADING,sortOrder:5,isActive:!0,isProductPage:!0,addToNextJSConfig:!1,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Loading",pathPage:"/loading",pathAs:"/loading",pathDBFile:"src/_database/pages/loading.md",IconComponent:n.dAq},{id:r.D.BLOCK,sortOrder:6,isActive:!0,isProductPage:!0,addToNextJSConfig:!1,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Block",pathPage:"/block",pathAs:"/block",pathDBFile:"src/_database/pages/block.md",IconComponent:n.bfl},{id:r.D.DOWNLOAD,sortOrder:7,isActive:!0,isProductPage:!1,addToNextJSConfig:!1,addToSitemap:!0,sitemapFrequency:"monthly",sitemapPriority:"0.9",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Download",pathPage:"/download",pathAs:"/download",pathDBFile:"src/_database/pages/download.md",IconComponent:n.wzc},{id:r.D.DOCUMENTATION,sortOrder:8,isActive:!0,isProductPage:!1,addToNextJSConfig:!1,addToSitemap:!0,sitemapFrequency:"monthly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Documentation",pathPage:"/documentation",pathAs:"/documentation",pathDBFile:"src/_database/pages/documentation.md",IconComponent:n.yK7}]},8116:function(e,t,o){"use strict";o.r(t);var n=o(5893),r=o(1664),i=o(6893),a=o(1147),s=o(4882),_=o(6495),c=o.n(_);t.default=function(){var e,t,o,_=a.attributes._dbHomeProducts;return(0,n.jsx)("div",{className:c().home__products,children:(0,n.jsx)("div",{className:c().home__products__container,children:(0,n.jsxs)("div",{className:c().home__products__content,children:[(0,n.jsx)("h2",{className:c().home__products__title,children:null===_||void 0===_?void 0:_.title}),(0,n.jsx)("div",{className:c().home__products__list,children:null===_||void 0===_||null===(e=_.products)||void 0===e||null===(t=e.filter((function(e){var t;return null===(t=s._j.find((function(t){return t.id===e.routeId})))||void 0===t?void 0:t.isActive})))||void 0===t||null===(o=t.sort((function(e,t){var o,n;return((null===(o=s._j.find((function(t){return t.id===e.routeId})))||void 0===o?void 0:o.sortOrder)||0)-((null===(n=s._j.find((function(e){return e.id===t.routeId})))||void 0===n?void 0:n.sortOrder)||1)})))||void 0===o?void 0:o.map((function(e,t){var o,a,_,d,u=(null===(o=s._j.find((function(t){return t.id===e.routeId})))||void 0===o?void 0:o.IconComponent)||i.cDN,l=(null===(a=s._j.find((function(t){return t.id===e.routeId})))||void 0===a?void 0:a.pathPage)||"/",p=(null===(_=s._j.find((function(t){return t.id===e.routeId})))||void 0===_?void 0:_.pathAs)||"/",m=null===(d=s._j.find((function(t){return t.id===e.routeId})))||void 0===d?void 0:d.isTargetBlank;return(0,n.jsx)("div",{className:c().home__products__list__item,children:(0,n.jsxs)("div",{className:c().home__products__list__item__content,children:[(0,n.jsx)(u,{className:c().home__products__list__item__icon}),(0,n.jsx)("h3",{className:c().home__products__list__item__title,children:e.title}),(0,n.jsx)("p",{className:c().home__products__list__item__description,children:e.description}),(0,n.jsx)(r.default,{href:l,as:"".concat("https://notiflix.github.io").concat(p),passHref:!0,children:(0,n.jsxs)("a",{target:m?"_blank":void 0,className:c().home__products__list__item__link,children:[(0,n.jsx)(i.w0f,{className:c().home__products__list__item__link__icon}),(0,n.jsx)("span",{className:c().home__products__list__item__link__text,children:e.button})]})})]})},t)}))})]})})})}},6495:function(e){e.exports={home__products:"HomeProducts_home__products__1vOjl",home__products__container:"HomeProducts_home__products__container__H0EkY",home__products__content:"HomeProducts_home__products__content__1Ftwr",home__products__title:"HomeProducts_home__products__title__2JHJf",home__products__list:"HomeProducts_home__products__list__1fKjP",home__products__list__item:"HomeProducts_home__products__list__item__1HAPM",home__products__list__item__content:"HomeProducts_home__products__list__item__content__2jPlL",home__products__list__item__icon:"HomeProducts_home__products__list__item__icon__3giSG",home__products__list__item__title:"HomeProducts_home__products__list__item__title__3J-wf",home__products__list__item__description:"HomeProducts_home__products__list__item__description__3zI-5",home__products__list__item__link:"HomeProducts_home__products__list__item__link__3yJpG",home__products__list__item__link__icon:"HomeProducts_home__products__list__item__link__icon__148BD"}},1664:function(e,t,o){e.exports=o(2167)}}]);