(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[318],{2167:function(e,t,n){"use strict";var a=n(3848);t.default=void 0;var o,r=(o=n(7294))&&o.__esModule?o:{default:o},i=n(1063),s=n(4651),l=n(7426);var c={};function p(e,t,n,a){if(e&&i.isLocalURL(t)){e.prefetch(t,n,a).catch((function(e){0}));var o=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;c[t+"%"+n+(o?"%"+o:"")]=!0}}var u=function(e){var t,n=!1!==e.prefetch,o=s.useRouter(),u=r.default.useMemo((function(){var t=i.resolveHref(o,e.href,!0),n=a(t,2),r=n[0],s=n[1];return{href:r,as:e.as?i.resolveHref(o,e.as):s||r}}),[o,e.href,e.as]),d=u.href,f=u.as,m=e.children,y=e.replace,h=e.shallow,g=e.scroll,v=e.locale;"string"===typeof m&&(m=r.default.createElement("a",null,m));var O=(t=r.default.Children.only(m))&&"object"===typeof t&&t.ref,b=l.useIntersection({rootMargin:"200px"}),w=a(b,2),I=w[0],D=w[1],N=r.default.useCallback((function(e){I(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,I]);r.default.useEffect((function(){var e=D&&n&&i.isLocalURL(d),t="undefined"!==typeof v?v:o&&o.locale,a=c[d+"%"+f+(t?"%"+t:"")];e&&!a&&p(o,d,f,{locale:t})}),[f,d,D,v,n,o]);var P={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,a,o,r,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==s&&a.indexOf("#")>=0&&(s=!1),t[o?"replace":"push"](n,a,{shallow:r,locale:l,scroll:s}))}(e,o,d,f,y,h,g,v)},onMouseEnter:function(e){i.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),p(o,d,f,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var T="undefined"!==typeof v?v:o&&o.locale,M=o&&o.isLocaleDomain&&i.getDomainLocale(f,T,o&&o.locales,o&&o.domainLocales);P.href=M||i.addBasePath(i.addLocale(f,T,o&&o.defaultLocale))}return r.default.cloneElement(t,P)};t.default=u},7426:function(e,t,n){"use strict";var a=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,l=o.useRef(),c=o.useState(!1),p=a(c,2),u=p[0],d=p[1],f=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||u||e&&e.tagName&&(l.current=function(e,t,n){var a=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:a}),n}(n),o=a.id,r=a.observer,i=a.elements;return i.set(e,t),r.observe(e),function(){i.delete(e),r.unobserve(e),0===i.size&&(r.disconnect(),s.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,u]);return o.useEffect((function(){if(!i&&!u){var e=r.requestIdleCallback((function(){return d(!0)}));return function(){return r.cancelIdleCallback(e)}}}),[u]),[f,u]};var o=n(7294),r=n(3447),i="undefined"!==typeof IntersectionObserver;var s=new Map},3634:function(e,t,n){"use strict";n.d(t,{_:function(){return r}});var a=JSON.parse('{"name":"notiflix-documentation","version":"1.0.0-Beta.01","homepage":"https://notiflix.github.io","description":"Notiflix","private":true,"scripts":{"startup:lint":"eslint src","startup:compile":"tsc --resolveJsonModule --outDir .dev --target ES5 src/application/helpers/sitemap-generator/index.ts","startup:run":"node .dev/src/application/helpers/sitemap-generator/index.js","startup":"yarn startup:lint && yarn startup:compile && yarn startup:run","lint:stylelint":"stylelint \\"src/**/*.{scss,sass}\\" --config .stylelintrc.json","lint:eslint":"eslint next.config.js && eslint src && next lint","lint":"yarn lint:stylelint && yarn lint:eslint","dev":"yarn startup && yarn lint && next dev","build":"yarn startup && yarn lint && next build","start":"yarn startup && yarn lint && next start","deploy":"yarn build && next export -o .dist"},"dependencies":{"next":"11.1.0","notiflix":"^3.0.2","react":"17.0.2","react-dom":"17.0.2"},"devDependencies":{"@ts-stack/markdown":"^1.4.0","@types/js-yaml":"^4.0.3","@types/react":"17.0.24","@typescript-eslint/eslint-plugin":"^4.31.2","eslint":"7.32.0","eslint-config-next":"11.1.0","fork-ts-checker-webpack-plugin":"^6.3.3","frontmatter-markdown-loader":"^3.6.3","js-yaml":"^4.1.0","react-icons":"^4.2.0","sass":"^1.42.1","stylelint":"^13.13.1","stylelint-config-standard":"^22.0.0","stylelint-scss":"^3.21.0","stylelint-webpack-plugin":"^3.0.1","typescript":"4.4.3"},"browserslist":{"production":["> 1%","last 4 versions","not ie < 11","not dead","not op_mini all","iOS >=7"],"development":["IE 11","last 1 chrome version","last 1 firefox version","last 1 safari version"]}}'),o=n.t(a,2),r={app:{url:(JSON.stringify((o||{}).homepage)||"").replace(/"/gm,""),version:(JSON.stringify((o||{}).version)||"").replace(/"/gm,""),name:(JSON.stringify((o||{}).description)||"").replace(/"/gm,""),ogImagePath:"/webapp/notiflix-og.jpg",text:{module:"Module",global:"Global",switch:"Switch",menu:"Menu",open:"Open",close:"Close",copy:"Copy",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"]},libraryOptions:{notify:{fontFamily:"Red Hat Display",plainText:!1},report:{fontFamily:"Red Hat Display",plainText:!1},confirm:{fontFamily:"Red Hat Display",plainText:!1},loading:{fontFamily:"Red Hat Display",clickToClose:!0},block:{fontFamily:"Red Hat Display"}}},api:{urlGitHubRepo:"https://api.github.com/repos/notiflix/Notiflix",urlGitHubReleases:"https://api.github.com/repos/notiflix/Notiflix/releases",urlNPMDownloads:"https://api.npmjs.org/downloads/range/2019-01-01:2042-01-01/notiflix"}}},6972:function(e,t,n){"use strict";var a;n.d(t,{D:function(){return a}}),function(e){e.HOME="HOME",e.NOTIFY="NOTIFY",e.REPORT="REPORT",e.CONFIRM="CONFIRM",e.LOADING="LOADING",e.BLOCK="BLOCK",e.DOWNLOAD="DOWNLOAD",e.DOCUMENTATION="DOCUMENTATION"}(a||(a={}))},4882:function(e,t,n){"use strict";n.d(t,{_j:function(){return r}});var a=n(6893),o=n(6972),r=[{id:o.D.HOME,sortOrder:1,isActive:!0,isProductPage:!1,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"daily",sitemapPriority:"1.0",showInHeaderMenu:!1,showInFooterMenu:!1,isTargetBlank:!1,prefetch:!1,name:"Home",pathPage:"/home",pathAs:"/",pathDBFile:"src/_database/pages/home.md",IconComponent:a.m6D},{id:o.D.NOTIFY,sortOrder:2,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Notify",pathPage:"/notify",pathAs:"/notify",pathDBFile:"src/_database/pages/notify.md",IconComponent:a.vWP},{id:o.D.REPORT,sortOrder:3,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Report",pathPage:"/report",pathAs:"/report",pathDBFile:"src/_database/pages/report.md",IconComponent:a.H33},{id:o.D.CONFIRM,sortOrder:4,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Confirm",pathPage:"/confirm",pathAs:"/confirm",pathDBFile:"src/_database/pages/confirm.md",IconComponent:a._rq},{id:o.D.LOADING,sortOrder:5,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Loading",pathPage:"/loading",pathAs:"/loading",pathDBFile:"src/_database/pages/loading.md",IconComponent:a.dAq},{id:o.D.BLOCK,sortOrder:6,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Block",pathPage:"/block",pathAs:"/block",pathDBFile:"src/_database/pages/block.md",IconComponent:a.bfl},{id:o.D.DOWNLOAD,sortOrder:7,isActive:!0,isProductPage:!1,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"monthly",sitemapPriority:"0.9",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Download",pathPage:"/download",pathAs:"/download",pathDBFile:"src/_database/pages/download.md",IconComponent:a.wzc},{id:o.D.DOCUMENTATION,sortOrder:8,isActive:!0,isProductPage:!1,addToNextJSConfig:!1,addToSitemap:!0,sitemapFrequency:"monthly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Documentation",pathPage:"/documentation",pathAs:"/documentation",pathDBFile:"src/_database/pages/documentation.md",IconComponent:a.yK7}]},5178:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/report/partials/report-playground/ReportPlayground",function(){return n(2905)}])},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[874,556,893,317,905,774,888,179],(function(){return t=5178,e(e.s=t);var t}));var t=e.O();_N_E=t}]);