(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8656],{2167:function(e,t,n){"use strict";var o=n(3848);t.default=void 0;var a,r=(a=n(7294))&&a.__esModule?a:{default:a},i=n(1063),s=n(4651),c=n(7426);var d={};function u(e,t,n,o){if(e&&i.isLocalURL(t)){e.prefetch(t,n,o).catch((function(e){0}));var a=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;d[t+"%"+n+(a?"%"+a:"")]=!0}}var l=function(e){var t,n=!1!==e.prefetch,a=s.useRouter(),l=r.default.useMemo((function(){var t=i.resolveHref(a,e.href,!0),n=o(t,2),r=n[0],s=n[1];return{href:r,as:e.as?i.resolveHref(a,e.as):s||r}}),[a,e.href,e.as]),p=l.href,f=l.as,h=e.children,m=e.replace,g=e.shallow,v=e.scroll,y=e.locale;"string"===typeof h&&(h=r.default.createElement("a",null,h));var O=(t=r.default.Children.only(h))&&"object"===typeof t&&t.ref,I=c.useIntersection({rootMargin:"200px"}),P=o(I,2),T=P[0],w=P[1],M=r.default.useCallback((function(e){T(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,T]);r.default.useEffect((function(){var e=w&&n&&i.isLocalURL(p),t="undefined"!==typeof y?y:a&&a.locale,o=d[p+"%"+f+(t?"%"+t:"")];e&&!o&&u(a,p,f,{locale:t})}),[f,p,w,y,n,a]);var C={ref:M,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,o,a,r,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==s&&o.indexOf("#")>=0&&(s=!1),t[a?"replace":"push"](n,o,{shallow:r,locale:c,scroll:s}))}(e,a,p,f,m,g,v,y)},onMouseEnter:function(e){i.isLocalURL(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,p,f,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var D="undefined"!==typeof y?y:a&&a.locale,N=a&&a.isLocaleDomain&&i.getDomainLocale(f,D,a&&a.locales,a&&a.domainLocales);C.href=N||i.addBasePath(i.addLocale(f,D,a&&a.defaultLocale))}return r.default.cloneElement(t,C)};t.default=l},7426:function(e,t,n){"use strict";var o=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=a.useRef(),d=a.useState(!1),u=o(d,2),l=u[0],p=u[1],f=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||l||e&&e.tagName&&(c.current=function(e,t,n){var o=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:o}),n}(n),a=o.id,r=o.observer,i=o.elements;return i.set(e,t),r.observe(e),function(){i.delete(e),r.unobserve(e),0===i.size&&(r.disconnect(),s.delete(a))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,l]);return a.useEffect((function(){if(!i&&!l){var e=r.requestIdleCallback((function(){return p(!0)}));return function(){return r.cancelIdleCallback(e)}}}),[l]),[f,l]};var a=n(7294),r=n(3447),i="undefined"!==typeof IntersectionObserver;var s=new Map},6972:function(e,t,n){"use strict";var o;n.d(t,{D:function(){return o}}),function(e){e.HOME="HOME",e.NOTIFY="NOTIFY",e.REPORT="REPORT",e.CONFIRM="CONFIRM",e.LOADING="LOADING",e.BLOCK="BLOCK",e.DOWNLOAD="DOWNLOAD",e.DOCUMENTATION="DOCUMENTATION"}(o||(o={}))},4882:function(e,t,n){"use strict";n.d(t,{_j:function(){return r}});var o=n(6893),a=n(6972),r=[{id:a.D.HOME,sortOrder:1,isActive:!0,isProductPage:!1,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"daily",sitemapPriority:"1.0",showInHeaderMenu:!1,showInFooterMenu:!1,isTargetBlank:!1,prefetch:!1,name:"Home",pathPage:"/home",pathAs:"/",pathDBFile:"src/_database/pages/home.md",IconComponent:o.m6D},{id:a.D.NOTIFY,sortOrder:2,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Notify",pathPage:"/notify",pathAs:"/notify",pathDBFile:"src/_database/pages/notify.md",IconComponent:o.vWP},{id:a.D.REPORT,sortOrder:3,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Report",pathPage:"/report",pathAs:"/report",pathDBFile:"src/_database/pages/report.md",IconComponent:o.H33},{id:a.D.CONFIRM,sortOrder:4,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Confirm",pathPage:"/confirm",pathAs:"/confirm",pathDBFile:"src/_database/pages/confirm.md",IconComponent:o._rq},{id:a.D.LOADING,sortOrder:5,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Loading",pathPage:"/loading",pathAs:"/loading",pathDBFile:"src/_database/pages/loading.md",IconComponent:o.dAq},{id:a.D.BLOCK,sortOrder:6,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Block",pathPage:"/block",pathAs:"/block",pathDBFile:"src/_database/pages/block.md",IconComponent:o.bfl},{id:a.D.DOWNLOAD,sortOrder:7,isActive:!0,isProductPage:!1,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"monthly",sitemapPriority:"0.9",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Download",pathPage:"/download",pathAs:"/download",pathDBFile:"src/_database/pages/download.md",IconComponent:o.wzc},{id:a.D.DOCUMENTATION,sortOrder:8,isActive:!0,isProductPage:!1,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"monthly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Documentation",pathPage:"/documentation",pathAs:"/documentation",pathDBFile:"src/_database/pages/documentation.md",IconComponent:o.yK7}]},4643:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notify/partials/playground/Playground",function(){return n(4277)}])},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[6556,3874,6893,1317,4277,9774,2888,179],(function(){return t=4643,e(e.s=t);var t}));var t=e.O();_N_E=t}]);