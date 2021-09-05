(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[214],{1147:function(e){e.exports={attributes:{_dbMeta:{routeId:"HOME",lastModifiedDate:"2021-07-22",title:"Notiflix | a JavaScript library for client-side non-blocking notifications.",description:"Notiflix is a JavaScript library for client-side non-blocking notifications, popup boxes, loading indicators, and more that makes your web projects much better.",robots:"noindex, nofollow, noodp, noydir",ogImage:null,themeColor:null},_dbHomeSlider:{image:"/content/media/home/notiflix-home-slider.svg",title:"welcome to <span>Notiflix</span>",description:"Notiflix is a <span>JavaScript</span> library for client-side non-blocking notifications, popup boxes, loading indicators, and more that makes your web projects much better.",downloadInfo:"Download the latest version of Notiflix.",downloadCount:"Notiflix has been downloaded {{x}} times.",loading:"Loading...",failure:"Something went wrong.",restricted:"API rate limit exceeded."},_dbHomeGetItOn:{title:"Get it on",clipboard:"Copied to the clipboard.",yarn:{title:"Yarn",script:"yarn add notiflix",url:"https://yarnpkg.com/package/notiflix"},npm:{title:"NPM",script:"npm i notiflix",url:"https://www.npmjs.com/package/notiflix"},github:{title:"GitHub",script:null,url:"https://github.com/notiflix/Notiflix.git"}},_dbHomeBrowsers:{title:"Browser Compatibility",disclaimer:"* SVG animations are not supported.",chrome:"Chrome",firefox:"Firefox",safari:"Safari",edge:"Edge",opera:"Opera",edgeLegacy:"* Edge Legacy",ie:"* IE 10+"},_dbHomeProducts:{title:"Notiflix Modules",products:[{routeId:"NOTIFY",title:"Notify",description:'Notiflix Notify module can be used to send non-blocking alerts/notifications. This module includes 4 types of notifications: "Success", "Failure", "Warning", and "Info".',button:"More"},{routeId:"REPORT",title:"Report",description:'Notiflix Report module can be used to show extended notifications that contain a title, description, and button(with a callback function). This module includes 4 types of notifications: "Success", "Failure", "Warning", and "Info".',button:"More"},{routeId:"CONFIRM",title:"Confirm",description:'Notiflix Confirm module can be used to show non-blocking prompt boxes. This module includes 2 types of prompts: "Show" and "Ask". An additional question can be asked as well within the prompt box if using the "Ask" one.',button:"More"},{routeId:"LOADING",title:"Loading",description:'Notiflix Loading module can be used to show a loading indicator during a process (Fetch/XHR). Includes 6 types of animated SVG icons: "Standard", "Hourglass", "Circle", "Arrows", "Dots", and "Pulse". An additional type is "Custom", and it can be used with a custom SVG icon.',button:"More"},{routeId:"BLOCK",title:"Block",description:"Notiflix Block module can be used to block/unblock the elements during a process (Fetch/XHR), without locking the browser or the other elements/components to prevent the user\u2019s interactions on the blocked elements.",button:"More"}]}},html:""}},9615:function(e){e.exports={attributes:{_dbSettings:{metaLanguageCode:"en",metaLanguage:"English",metaTitle:"Notiflix | a JavaScript library for client-side non-blocking notifications.",metaDescription:"Notiflix is a pure JavaScript library for client-side non-blocking notifications, popup boxes, loading indicators, and more to that makes your web projects much better.",metaRobots:"noindex, nofollow, noodp, noydir",metaYearInit:2019,metaCopyright:"All Rights Reserved.",metaThemeColor:"#32c682",metaTwitterUser:"@notiflixjs",metaTwitterDomain:"notiflix.github.io",bodyNoScriptMessage:"You have to enable JavaScript in your browser to use Notiflix.",footerGitHubName:"/furcan",footerGitHubUrl:"https://github.com/furcan"}},html:""}},3536:function(e){e.exports={attributes:{_dbSocialMedia:[{isActive:!0,url:"https://github.com/notiflix",name:"GitHub"},{isActive:!0,url:"https://twitter.com/notiflixjs",name:"Twitter"},{isActive:!0,icon:"fab fa-facebook-square",name:"Facebook"},{isActive:!0,url:"https://www.instagram.com/notiflixjs",name:"Instagram"}]},html:""}},2167:function(e,t,o){"use strict";var n=o(3848);t.default=void 0;var i,a=(i=o(7294))&&i.__esModule?i:{default:i},r=o(1063),s=o(4651),l=o(7426);var c={};function d(e,t,o,n){if(e&&r.isLocalURL(t)){e.prefetch(t,o,n).catch((function(e){0}));var i=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+o+(i?"%"+i:"")]=!0}}var u=function(e){var t,o=!1!==e.prefetch,i=s.useRouter(),u=a.default.useMemo((function(){var t=r.resolveHref(i,e.href,!0),o=n(t,2),a=o[0],s=o[1];return{href:a,as:e.as?r.resolveHref(i,e.as):s||a}}),[i,e.href,e.as]),_=u.href,p=u.as,m=e.children,f=e.replace,h=e.shallow,g=e.scroll,v=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var b=(t=a.default.Children.only(m))&&"object"===typeof t&&t.ref,y=l.useIntersection({rootMargin:"200px"}),x=n(y,2),w=x[0],j=x[1],N=a.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);a.default.useEffect((function(){var e=j&&o&&r.isLocalURL(_),t="undefined"!==typeof v?v:i&&i.locale,n=c[_+"%"+p+(t?"%"+t:"")];e&&!n&&d(i,_,p,{locale:t})}),[p,_,j,v,o,i]);var k={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,o,n,i,a,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&r.isLocalURL(o))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),t[i?"replace":"push"](o,n,{shallow:a,locale:l,scroll:s}))}(e,i,_,p,f,h,g,v)},onMouseEnter:function(e){r.isLocalURL(_)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(i,_,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var O="undefined"!==typeof v?v:i&&i.locale,I=i&&i.isLocaleDomain&&r.getDomainLocale(p,O,i&&i.locales,i&&i.domainLocales);k.href=I||r.addBasePath(r.addLocale(p,O,i&&i.defaultLocale))}return a.default.cloneElement(t,k)};t.default=u},7426:function(e,t,o){"use strict";var n=o(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,o=e.disabled||!r,l=i.useRef(),c=i.useState(!1),d=n(c,2),u=d[0],_=d[1],p=i.useCallback((function(e){l.current&&(l.current(),l.current=void 0),o||u||e&&e.tagName&&(l.current=function(e,t,o){var n=function(e){var t=e.rootMargin||"",o=s.get(t);if(o)return o;var n=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)}))}),e);return s.set(t,o={id:t,observer:i,elements:n}),o}(o),i=n.id,a=n.observer,r=n.elements;return r.set(e,t),a.observe(e),function(){r.delete(e),a.unobserve(e),0===r.size&&(a.disconnect(),s.delete(i))}}(e,(function(e){return e&&_(e)}),{rootMargin:t}))}),[o,t,u]);return i.useEffect((function(){if(!r&&!u){var e=a.requestIdleCallback((function(){return _(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[p,u]};var i=o(7294),a=o(3447),r="undefined"!==typeof IntersectionObserver;var s=new Map},3634:function(e,t,o){"use strict";o.d(t,{_:function(){return a}});var n=JSON.parse('{"name":"notiflix-documentation","version":"1.0.0-Beta.01","homepage":"https://notiflix.github.io","description":"Notiflix","private":true,"scripts":{"startup:lint":"eslint src","startup:compile":"tsc --resolveJsonModule --outDir .dev --target ES5 src/application/helpers/sitemap-generator/index.ts","startup:run":"node .dev/src/application/helpers/sitemap-generator/index.js","startup":"yarn startup:lint && yarn startup:compile && yarn startup:run","lint:stylelint":"stylelint \\"src/**/*.{scss,sass}\\" --config .stylelintrc.json","lint:eslint":"eslint next.config.js && next lint","lint":"yarn lint:stylelint && yarn lint:eslint","dev":"yarn startup && yarn lint && next dev","build":"yarn startup && yarn lint && next build","start":"yarn startup && yarn lint && next start","deploy":"yarn build && next export -o .dist"},"dependencies":{"next":"11.1.0","notiflix":"^3.0.2","react":"17.0.2","react-dom":"17.0.2"},"devDependencies":{"@ts-stack/markdown":"^1.4.0","@types/js-yaml":"^4.0.3","@types/react":"17.0.19","@typescript-eslint/eslint-plugin":"^4.29.3","eslint":"7.32.0","eslint-config-next":"11.1.0","fork-ts-checker-webpack-plugin":"^6.3.2","frontmatter-markdown-loader":"^3.6.3","js-yaml":"^4.1.0","react-icons":"^4.2.0","sass":"^1.38.1","stylelint":"^13.13.1","stylelint-config-standard":"^22.0.0","stylelint-scss":"^3.20.1","stylelint-webpack-plugin":"^3.0.1","typescript":"4.3.5"},"browserslist":{"production":["> 1%","last 4 versions","not ie < 11","not dead","not op_mini all","iOS >=7"],"development":["IE 11","last 1 chrome version","last 1 firefox version","last 1 safari version"]}}'),i=o.t(n,2),a={app:{url:(JSON.stringify((i||{}).homepage)||"").replace(/"/gm,""),version:(JSON.stringify((i||{}).version)||"").replace(/"/gm,""),name:(JSON.stringify((i||{}).description)||"").replace(/"/gm,""),ogImageSrc:"/webapp/notiflix-og.jpg",text:{module:"Module",global:"Global",switch:"Switch",menu:"Menu",open:"Open",close:"Close",copy:"Copy"},libraryOptions:{notify:{fontFamily:"Red Hat Display",plainText:!1}}},api:{urlGitHubRepo:"https://api.github.com/repos/notiflix/Notiflix",urlGitHubReleases:"https://api.github.com/repos/notiflix/Notiflix/releases",urlNPMDownloads:"https://api.npmjs.org/downloads/range/2019-01-01:2042-01-01/notiflix"}}},6972:function(e,t,o){"use strict";var n;o.d(t,{D:function(){return n}}),function(e){e.HOME="HOME",e.NOTIFY="NOTIFY",e.REPORT="REPORT",e.CONFIRM="CONFIRM",e.LOADING="LOADING",e.BLOCK="BLOCK",e.DOWNLOAD="DOWNLOAD",e.DOCUMENTATION="DOCUMENTATION"}(n||(n={}))},4882:function(e,t,o){"use strict";o.d(t,{_j:function(){return a}});var n=o(6893),i=o(6972),a=[{id:i.D.HOME,sortOrder:1,isActive:!0,isProductPage:!1,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"daily",sitemapPriority:"1.0",showInHeaderMenu:!1,showInFooterMenu:!1,isTargetBlank:!1,name:"Home",pathPage:"/home",pathAs:"/",pathDBFile:"src/_database/pages/home.md",IconComponent:n.m6D},{id:i.D.NOTIFY,sortOrder:2,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Notify",pathPage:"/notify",pathAs:"/notify",pathDBFile:"src/_database/pages/notify.md",IconComponent:n.vWP},{id:i.D.REPORT,sortOrder:3,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Report",pathPage:"/report",pathAs:"/report",pathDBFile:"src/_database/pages/report.md",IconComponent:n.H33},{id:i.D.CONFIRM,sortOrder:4,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Confirm",pathPage:"/confirm",pathAs:"/confirm",pathDBFile:"src/_database/pages/confirm.md",IconComponent:n._rq},{id:i.D.LOADING,sortOrder:5,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Loading",pathPage:"/loading",pathAs:"/loading",pathDBFile:"src/_database/pages/loading.md",IconComponent:n.dAq},{id:i.D.BLOCK,sortOrder:6,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Block",pathPage:"/block",pathAs:"/block",pathDBFile:"src/_database/pages/block.md",IconComponent:n.bfl},{id:i.D.DOWNLOAD,sortOrder:7,isActive:!0,isProductPage:!1,addToNextJSConfig:!1,addToSitemap:!0,sitemapFrequency:"monthly",sitemapPriority:"0.9",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Download",pathPage:"/download",pathAs:"/download",pathDBFile:"src/_database/pages/download.md",IconComponent:n.wzc},{id:i.D.DOCUMENTATION,sortOrder:8,isActive:!0,isProductPage:!1,addToNextJSConfig:!1,addToSitemap:!0,sitemapFrequency:"monthly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Documentation",pathPage:"/documentation",pathAs:"/documentation",pathDBFile:"src/_database/pages/documentation.md",IconComponent:n.yK7}]},8214:function(e,t,o){"use strict";o.d(t,{Z:function(){return T}});var n=o(5893),i=o(2809),a=o(9008),r=o(1163),s=o(9615);function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){(0,i.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var d=function(e){var t,o=e.meta,i=s.attributes._dbSettings,l=(0,r.useRouter)(),d="Notiflix",u="https://notiflix.github.io",_="".concat(u).concat((null===l||void 0===l||null===(t=l.asPath)||void 0===t?void 0:t.length)>1?l.asPath:"")||"",p=null===i||void 0===i?void 0:i.metaYearInit,m=(new Date).getFullYear()||"",f={languageCode:null===i||void 0===i?void 0:i.metaLanguageCode,language:null===i||void 0===i?void 0:i.metaLanguage,title:null===i||void 0===i?void 0:i.metaTitle,description:null===i||void 0===i?void 0:i.metaDescription,robots:null===i||void 0===i?void 0:i.metaRobots,themeColor:null===i||void 0===i?void 0:i.metaThemeColor,ogImage:"/webapp/notiflix-og.jpg"},h=c(c({},f),o);return(0,n.jsxs)(a.default,{children:[(0,n.jsx)("meta",{charSet:"UTF-8"}),(0,n.jsx)("meta",{name:"content-language",content:h.languageCode}),(0,n.jsx)("meta",{name:"language",content:h.language}),(0,n.jsx)("title",{children:h.title}),(0,n.jsx)("meta",{name:"description",content:h.description}),(0,n.jsx)("meta",{name:"robots",content:h.robots||f.robots}),(0,n.jsx)("meta",{name:"googlebot",content:h.robots||f.robots}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"}),(0,n.jsx)("link",{rel:"shortcut icon",href:"".concat(u,"/favicon.png")}),(0,n.jsx)("link",{rel:"canonical",href:_}),(0,n.jsx)("link",{rel:"shortlink",href:_}),(0,n.jsx)("meta",{name:"generator",content:d}),(0,n.jsx)("meta",{name:"designer",content:d}),(0,n.jsx)("meta",{name:"copyright",content:"\xa9 ".concat(p,"-").concat(m," ").concat(d,". ").concat(null===i||void 0===i?void 0:i.metaCopyright)}),(0,n.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,n.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&display=swap"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inconsolata&display=swap"})]})},u=o(7294),_=o(1664),p=o(6893),m=o(1147),f=o(3634),h=o(4882);var g=function(e){var t=e.className,o=e.width,i=e.height,a=e.colorNoti,r=e.colorFlix;return(0,n.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:o||180,height:i||60,viewBox:"0 0 180 60",children:(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{fill:a||"#32c682",d:"M69.64 36.61c0,-8.06 -6.53,-14.58 -14.58,-14.58 -8.06,0 -14.58,6.52 -14.58,14.58 0,8.05 6.52,14.58 14.58,14.58 8.05,0 14.58,-6.53 14.58,-14.58zm-31.63 0c0,-9.42 7.63,-17.05 17.05,-17.05 9.41,0 17.04,7.63 17.04,17.05 0,9.41 -7.63,17.04 -17.04,17.04 -9.42,0 -17.05,-7.63 -17.05,-17.04zm41.92 9.45l0 -23.25 -5.33 0c-0.3,0 -0.59,-0.13 -0.85,-0.39 -0.25,-0.26 -0.38,-0.55 -0.38,-0.85 0,-0.35 0.11,-0.64 0.35,-0.88 0.24,-0.23 0.53,-0.35 0.88,-0.35l5.33 0 0 -8.25c0,-0.35 0.12,-0.65 0.38,-0.91 0.26,-0.26 0.57,-0.39 0.91,-0.39 0.39,0 0.71,0.13 0.95,0.39 0.23,0.26 0.35,0.56 0.35,0.91l0 8.25 7.15 0c0.3,0 0.58,0.13 0.84,0.39 0.26,0.26 0.39,0.54 0.39,0.84 0,0.35 -0.12,0.64 -0.36,0.88 -0.24,0.24 -0.53,0.36 -0.87,0.36l-7.15 0 0 23.12c0,1.9 0.34,3.17 1.01,3.79 0.67,0.63 1.52,0.95 2.56,0.95 0.18,0 0.43,-0.05 0.75,-0.13 0.33,-0.09 0.6,-0.13 0.81,-0.13 0.31,0 0.57,0.11 0.78,0.35 0.22,0.24 0.33,0.51 0.33,0.81 0,0.39 -0.26,0.73 -0.78,1.01 -0.52,0.28 -1.13,0.42 -1.82,0.42 -1.08,0 -1.99,-0.07 -2.73,-0.22 -0.74,-0.16 -1.5,-0.74 -2.3,-1.76 -0.8,-1.02 -1.2,-2.67 -1.2,-4.96zm16.19 5.64l0 -30.84c0,-0.35 0.13,-0.65 0.39,-0.91 0.26,-0.26 0.57,-0.39 0.91,-0.39 0.39,0 0.71,0.13 0.94,0.39 0.24,0.26 0.36,0.56 0.36,0.91l0 30.84c0,0.35 -0.13,0.65 -0.39,0.91 -0.26,0.26 -0.56,0.39 -0.91,0.39 -0.39,0 -0.7,-0.13 -0.94,-0.39 -0.24,-0.26 -0.36,-0.56 -0.36,-0.91zm-75.22 -32.14c3.85,0 6.75,1.13 8.7,3.41 1.95,2.27 2.93,5.23 2.93,8.86l0 19.87c0,0.35 -0.13,0.65 -0.39,0.91 -0.26,0.26 -0.57,0.39 -0.91,0.39 -0.39,0 -0.71,-0.13 -0.94,-0.39 -0.24,-0.26 -0.36,-0.56 -0.36,-0.91l0 -19.61c0,-2.94 -0.77,-5.36 -2.31,-7.24 -1.54,-1.88 -3.86,-2.82 -6.98,-2.82 -0.87,0 -1.73,0 -2.6,0 -3.11,0 -5.44,0.94 -6.98,2.82 -1.54,1.88 -2.3,4.3 -2.3,7.24l0 19.61c0,0.35 -0.12,0.65 -0.36,0.91 -0.24,0.26 -0.55,0.39 -0.94,0.39 -0.35,0 -0.65,-0.13 -0.91,-0.39 -0.26,-0.26 -0.39,-0.56 -0.39,-0.91l0 -19.87c0,-3.63 0.97,-6.59 2.92,-8.86 1.95,-2.28 4.85,-3.41 8.7,-3.41 1.05,0 2.08,0 3.12,0zm-1.56 28.34c1.41,0 2.55,1.15 2.55,2.55 0,1.41 -1.14,2.55 -2.55,2.55 -1.41,0 -2.55,-1.14 -2.55,-2.55 0,-1.4 1.14,-2.55 2.55,-2.55zm75.84 -35.23c0,-1.22 0.99,-2.21 2.21,-2.21 1.22,0 2.21,0.99 2.21,2.21 0,1.23 -0.99,2.22 -2.21,2.22 -1.22,0 -2.21,-0.99 -2.21,-2.22z"}),(0,n.jsx)("path",{fill:r||"#2b3b42",d:"M138.19 12.67c0,-1.22 0.99,-2.21 2.21,-2.21 1.22,0 2.21,0.99 2.21,2.21 0,1.23 -0.99,2.22 -2.21,2.22 -1.22,0 -2.21,-0.99 -2.21,-2.22zm-27.82 39.03l0 -28.25 -5.19 0c-0.31,0 -0.59,-0.13 -0.85,-0.39 -0.26,-0.25 -0.39,-0.54 -0.39,-0.84 0,-0.39 0.12,-0.69 0.36,-0.91 0.24,-0.22 0.53,-0.32 0.88,-0.32l5.19 0 0 -7.93c0,-2.55 0.69,-4.49 2.05,-5.81 1.36,-1.32 3.11,-1.98 5.23,-1.98 1.08,0 2.11,0.14 3.08,0.42 0.98,0.28 1.46,0.75 1.46,1.4 0,0.35 -0.13,0.65 -0.39,0.91 -0.26,0.26 -0.54,0.39 -0.84,0.39 -0.35,0 -0.8,-0.11 -1.36,-0.33 -1,-0.3 -1.74,-0.45 -2.21,-0.45 -1.34,0 -2.42,0.45 -3.22,1.36 -0.8,0.91 -1.2,2.28 -1.2,4.09l0 7.93 7.66 0c0.35,0 0.64,0.12 0.88,0.35 0.24,0.24 0.36,0.53 0.36,0.88 0,0.35 -0.12,0.64 -0.36,0.88 -0.24,0.24 -0.53,0.35 -0.88,0.35l-7.66 0 0 28.25c0,0.35 -0.13,0.65 -0.39,0.91 -0.26,0.26 -0.56,0.39 -0.91,0.39 -0.39,0 -0.7,-0.13 -0.94,-0.39 -0.24,-0.26 -0.36,-0.56 -0.36,-0.91zm17.05 0l0 -45.46c0,-0.34 0.13,-0.65 0.39,-0.9 0.26,-0.26 0.56,-0.39 0.9,-0.39 0.39,0 0.71,0.13 0.95,0.39 0.23,0.25 0.35,0.56 0.35,0.9l0 45.46c0,0.35 -0.13,0.65 -0.39,0.91 -0.25,0.26 -0.56,0.39 -0.91,0.39 -0.38,0 -0.7,-0.13 -0.94,-0.39 -0.23,-0.26 -0.35,-0.56 -0.35,-0.91zm11.71 0l0 -30.84c0,-0.35 0.13,-0.65 0.39,-0.91 0.26,-0.26 0.57,-0.39 0.91,-0.39 0.39,0 0.71,0.13 0.94,0.39 0.24,0.26 0.36,0.56 0.36,0.91l0 30.84c0,0.35 -0.13,0.65 -0.39,0.91 -0.26,0.26 -0.56,0.39 -0.91,0.39 -0.39,0 -0.7,-0.13 -0.94,-0.39 -0.24,-0.26 -0.36,-0.56 -0.36,-0.91zm8.99 -0.45l11.17 -14.48 -11.3 -14.74c-0.17,-0.22 -0.26,-0.48 -0.26,-0.78 0,-0.39 0.14,-0.72 0.43,-0.98 0.28,-0.26 0.59,-0.39 0.94,-0.39 0.43,0 0.78,0.2 1.04,0.59l10.78 14.09 10.58 -14.09c0.35,-0.39 0.72,-0.59 1.11,-0.59 0.39,0 0.69,0.11 0.91,0.33 0.21,0.21 0.32,0.47 0.32,0.78 0,0.26 -0.11,0.54 -0.32,0.84l-11.04 14.81 11.1 14.54c0.17,0.22 0.26,0.48 0.26,0.78 0,0.35 -0.12,0.65 -0.36,0.91 -0.23,0.26 -0.53,0.39 -0.87,0.39 -0.39,0 -0.76,-0.19 -1.11,-0.58l-10.65 -13.9 -10.71 13.96c-0.26,0.35 -0.61,0.52 -1.04,0.52 -0.35,0 -0.64,-0.1 -0.88,-0.32 -0.24,-0.22 -0.36,-0.52 -0.36,-0.91 0,-0.3 0.09,-0.56 0.26,-0.78z"})]})})},v=o(7465),b=o.n(v);var y=function(e){var t,o,i=e.mobileMenuOnClickHandler;return(0,n.jsx)("nav",{className:b().nav,children:(0,n.jsx)("ul",{className:b().nav__ul,children:null===h._j||void 0===h._j||null===(t=h._j.filter((function(e){return e.isActive&&e.showInHeaderMenu})))||void 0===t||null===(o=t.sort((function(e,t){return e.sortOrder-t.sortOrder})))||void 0===o?void 0:o.map((function(e){return(0,n.jsx)("li",{className:b().nav__ul__li,children:(0,n.jsx)(_.default,{href:e.pathPage,as:"".concat("https://notiflix.github.io").concat(e.pathAs),passHref:!0,children:(0,n.jsxs)("a",{"aria-label":"".concat(f._.app.name," ").concat(e.name," ").concat(f._.app.text.module),onClick:function(){return i(!1)},target:e.isTargetBlank?"_blank":void 0,className:["".concat(b().nav__ul__li__a),"".concat(e.isProductPage&&b()["nav__ul__li__a--product"]||"")].join(" ").trim(),children:[e.IconComponent?(0,n.jsx)(e.IconComponent,{}):"",(0,n.jsx)("span",{children:e.name})]})})},e.id)}))})})},x=o(6406),w=o.n(x);var j=function(e){var t,o,i=e.classNamePrefix,a=m.attributes._dbMeta,r=(null===(t=h._j.find((function(e){return e.id===(null===a||void 0===a?void 0:a.routeId)})))||void 0===t?void 0:t.pathPage)||"/",s=(null===(o=h._j.find((function(e){return e.id===(null===a||void 0===a?void 0:a.routeId)})))||void 0===o?void 0:o.pathAs)||"/",l=(0,u.useState)(0),c=l[0],d=l[1],v=function(){var e;d(Math.round((null===(e=window.document.documentElement)||void 0===e?void 0:e.scrollTop)||0))};(0,u.useEffect)((function(){return window.document.addEventListener("scroll",v),function(){window.document.removeEventListener("scroll",v)}}),[]);var b=(0,u.useState)(!1),x=b[0],j=b[1],N=function(e){j(e)};return(0,n.jsx)("header",{className:["".concat(w().header),"".concat(w()["header--".concat(i)]||""),"".concat(c>1&&w()["header--sticky"]||"")].join(" ").trim(),children:(0,n.jsxs)("div",{className:w().header__container,children:[(0,n.jsx)("div",{className:w().header__logo,children:(0,n.jsx)(_.default,{href:r,as:"".concat("https://notiflix.github.io").concat(s),passHref:!0,children:(0,n.jsx)("a",{"aria-label":f._.app.name,onClick:function(){return N(!1)},className:w().header__logo__link,children:(0,n.jsx)(g,{})})})}),(0,n.jsx)("button",{"aria-label":f._.app.text.menu,type:"button",className:w().header__menu__open,onClick:function(){return N(!0)},children:(0,n.jsx)(p.K9M,{})}),(0,n.jsx)("button",{"aria-label":f._.app.text.close,type:"button",className:["".concat(w().header__menu__overlay),"".concat(x&&w()["header__menu__overlay--opened"]||"")].join(" ").trim(),onClick:function(){return N(!1)}}),(0,n.jsxs)("div",{className:["".concat(w().header__menu),"".concat(x&&w()["header__menu--opened"]||"")].join(" ").trim(),children:[(0,n.jsx)("button",{"aria-label":f._.app.text.close,type:"button",className:w().header__menu__close,onClick:function(){return N(!1)},children:(0,n.jsx)(p.q5L,{})}),(0,n.jsx)(y,{mobileMenuOnClickHandler:N})]})]})})},N=o(9583),k=o(2211),O=o.n(k);var I=function(){var e=s.attributes._dbSettings;return(0,n.jsx)("footer",{className:O().footer,children:(0,n.jsxs)("div",{className:O().footer__container,children:[(0,n.jsxs)("div",{className:O().footer__content__top,children:[(0,n.jsx)("div",{className:O().footer__content__top__logo,children:(0,n.jsx)(g,{className:O().footer__content__top__logo__svg,colorNoti:"currentColor",colorFlix:"currentColor"})}),(0,n.jsx)("div",{className:O().footer__content__top__menu})]}),(0,n.jsxs)("div",{className:O().footer__content__bottom,children:[(0,n.jsx)("p",{className:O().footer__content__bottom__copyright,dangerouslySetInnerHTML:{__html:"&copy; ".concat(null===e||void 0===e?void 0:e.metaYearInit," - ").concat((new Date).getFullYear()," ").concat(f._.app.name,". ").concat(null===e||void 0===e?void 0:e.metaCopyright)}}),(0,n.jsxs)("a",{href:null===e||void 0===e?void 0:e.footerGitHubUrl,target:"_blank",rel:"noreferrer",className:O().footer__content__bottom__link,children:[(0,n.jsx)(N.hJX,{className:O().footer__content__bottom__link__icon}),(0,n.jsx)("span",{children:null===e||void 0===e?void 0:e.footerGitHubName})]})]})]})})},M=o(3536);var C=function(){var e,t=M.attributes._dbSocialMedia,o={"@context":"https://schema.org","@type":"Organization",name:"Notiflix",url:"https://notiflix.github.io",logo:"".concat("https://notiflix.github.io").concat("/webapp/notiflix-og.jpg"),sameAs:(null===t||void 0===t||null===(e=t.filter((function(e){return e.isActive})))||void 0===e?void 0:e.map((function(e){return e.url})))||[]};return(0,n.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o)}})};var P=function(){var e=s.attributes._dbSettings;return(0,n.jsxs)("noscript",{className:"noscript",children:[(0,n.jsx)("style",{children:".noscript__message {box-sizing: border-box;outline: none;position: fixed;z-index: 9999;left: 0;top: 0;width: 100%;height: 100%;display: flex;flex-wrap: wrap;flex-direction: column;align-items: center;justify-content: center;text-align: center;margin: 0;padding: 1.25rem;font-family: sans-serif;font-size: 1rem;color: #f8f8f8;background: #1e1e1e;}"}),(0,n.jsx)("p",{className:"noscript__message",children:null===e||void 0===e?void 0:e.bodyNoScriptMessage})]})},S=o(3924),H=o.n(S);var T=function(e){var t=e.classNamePrefix,o=e.meta,i=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{meta:o}),(0,n.jsx)(P,{}),(0,n.jsx)(j,{classNamePrefix:t}),(0,n.jsx)("main",{className:["".concat(H().layout),"".concat(H()["layout--".concat(t)]||"")].join(" ").trim(),children:i}),(0,n.jsx)(I,{}),(0,n.jsx)(C,{})]})}},2211:function(e){e.exports={footer:"Footer_footer__2BvtZ",footer__container:"Footer_footer__container__3GCBV",footer__content__top:"Footer_footer__content__top__2tBzz",footer__content__top__logo:"Footer_footer__content__top__logo__qba8d",footer__content__top__logo__svg:"Footer_footer__content__top__logo__svg__3AdlT",footer__content__top__menu:"Footer_footer__content__top__menu__37pjQ",footer__content__bottom:"Footer_footer__content__bottom__3Z899",footer__content__bottom__copyright:"Footer_footer__content__bottom__copyright__1kfyx",footer__content__bottom__link:"Footer_footer__content__bottom__link__2p4wG",footer__content__bottom__link__icon:"Footer_footer__content__bottom__link__icon__1Iwm2"}},6406:function(e){e.exports={header:"Header_header__-Uzh_","header--sticky":"Header_header--sticky__1xvRH",header__container:"Header_header__container__1JLSp",header__logo:"Header_header__logo__3bZUM",header__logo__link:"Header_header__logo__link__3KGUS",header__menu:"Header_header__menu__1Wqqt","header__menu--opened":"Header_header__menu--opened__yqoXn",header__menu__open:"Header_header__menu__open__1VRN3",header__menu__overlay:"Header_header__menu__overlay__2CoyY","header__menu__overlay--opened":"Header_header__menu__overlay--opened__2dglG",header__menu__close:"Header_header__menu__close__2lR7_"}},7465:function(e){e.exports={nav:"HeaderMenu_nav__2y8cc",nav__ul:"HeaderMenu_nav__ul__34Yk2",nav__ul__li:"HeaderMenu_nav__ul__li__3WMLI",nav__ul__li__a:"HeaderMenu_nav__ul__li__a___dwxa","nav__ul__li__a--product":"HeaderMenu_nav__ul__li__a--product__pAaAd"}},3924:function(e){e.exports={layout:"Layout_layout__3jO5F","layout--home":"Layout_layout--home__9AxSD","layout--notify":"Layout_layout--notify__10ffL","layout--report":"Layout_layout--report__HXnGL","layout--confirm":"Layout_layout--confirm__1ERGw","layout--loading":"Layout_layout--loading__1q__x","layout--block":"Layout_layout--block__2hain"}},9008:function(e,t,o){e.exports=o(639)},1664:function(e,t,o){e.exports=o(2167)},1163:function(e,t,o){e.exports=o(4651)}}]);