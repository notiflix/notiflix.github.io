(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4694],{6195:function(e){e.exports={attributes:{_dbAppContent:{noscript:{message:"You have to enable JavaScript in your browser to use Notiflix."},footer:{gitHubName:"/furcan",gitHubUrl:"https://github.com/furcan"},buttons:{module:"Module",global:"Global",switch:"Switch",menu:"Menu",open:"Open",close:"Close",copy:"Copy",goToTop:"Go to top",navigation:"Navigation"},date:{monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"]},browsers:{ieTitle:"Here we go...",ieDescription:"It might be time to switch your browser. Or, you can use the repository link below.",ieLinkText:"Go to GitHub",ieLinkUrl:"https://github.com/notiflix/Notiflix"}}},html:""}},6320:function(e){e.exports={attributes:{_dbAppMeta:{metaLanguageCode:"en",metaLanguage:"English",metaTitle:"Notiflix | a JavaScript library for client-side non-blocking notifications.",metaDescription:"Notiflix is a pure JavaScript library for client-side non-blocking notifications, popup boxes, loading indicators, and more to that makes your web projects much better.",metaRobots:"noindex, nofollow, noodp, noydir",metaYearInit:2019,metaCopyright:"All Rights Reserved.",metaThemeColor:"#32c682",metaTwitterUser:"@notiflixjs",metaTwitterDomain:"notiflix.github.io"}},html:""}},2414:function(e){e.exports={attributes:{_dbAppSocialMedia:[{isActive:!0,url:"https://github.com/notiflix",name:"GitHub"},{isActive:!0,url:"https://twitter.com/notiflixjs",name:"Twitter"},{isActive:!0,url:"https://www.facebook.com/notiflixjs",name:"Facebook"},{isActive:!0,url:"https://www.instagram.com/notiflixjs",name:"Instagram"}]},html:""}},1147:function(e){e.exports={attributes:{_dbPageMeta:{routeId:"HOME",lastModifiedDate:"2021-07-22",title:"Notiflix | a JavaScript library for client-side non-blocking notifications.",description:"Notiflix is a JavaScript library for client-side non-blocking notifications, popup boxes, loading indicators, and more that makes your web projects much better.",robots:"noindex, nofollow, noodp, noydir",ogImage:null,themeColor:null},_dbHomeSlider:{image:"/content/media/home/notiflix-home-slider.svg",title:"welcome to <span>Notiflix</span>",description:"Notiflix is a <span>JavaScript</span> library for client-side non-blocking notifications, popup boxes, loading indicators, and more that makes your web projects much better.",downloadInfo:"Download the latest version of Notiflix.",downloadCount:"Notiflix has been downloaded {{x}} times.",loading:"Loading...",failure:"Something went wrong.",restricted:"API rate limit exceeded."},_dbHomeGetItOn:{title:"Get it on",clipboard:"Copied to the clipboard.",yarn:{title:"Yarn",script:"yarn add notiflix",url:"https://yarnpkg.com/package/notiflix"},npm:{title:"NPM",script:"npm i notiflix",url:"https://www.npmjs.com/package/notiflix"},github:{title:"GitHub",script:null,url:"https://github.com/notiflix/Notiflix.git"}},_dbHomeBrowsers:{title:"Browser Compatibility",disclaimer:"* SVG animations are not supported.",chrome:"Chrome",firefox:"Firefox",safari:"Safari",edge:"Edge",opera:"Opera",edgeLegacy:"* Edge Legacy",ie:"* IE 10+"},_dbHomeProducts:{title:"Notiflix Modules",products:[{routeId:"NOTIFY",title:"Notify",description:'Notiflix Notify module can be used to send non-blocking alerts/notifications. This module includes 4 types of notifications: "Success", "Failure", "Warning", and "Info".',button:"More"},{routeId:"REPORT",title:"Report",description:'Notiflix Report module can be used to show extended notifications that contain a title, description, and button(with a callback function). This module includes 4 types of notifications: "Success", "Failure", "Warning", and "Info".',button:"More"},{routeId:"CONFIRM",title:"Confirm",description:'Notiflix Confirm module can be used to show non-blocking prompt boxes. This module includes 2 types of prompts: "Show" and "Ask". An additional question can be asked as well within the prompt box if using the "Ask" one.',button:"More"},{routeId:"LOADING",title:"Loading",description:'Notiflix Loading module can be used to show a loading indicator during a process (Fetch/XHR). Includes 6 types of animated SVG icons: "Standard", "Hourglass", "Circle", "Arrows", "Dots", and "Pulse". An additional type is "Custom", and it can be used with a custom SVG icon.',button:"More"},{routeId:"BLOCK",title:"Block",description:"Notiflix Block module can be used to block/unblock the elements during a process (Fetch/XHR), without locking the browser or the other elements/components to prevent the user\u2019s interactions on the blocked elements.",button:"More"}]}},html:""}},2167:function(e,t,o){"use strict";var n=o(3848);t.default=void 0;var i,r=(i=o(7294))&&i.__esModule?i:{default:i},a=o(1063),l=o(4651),s=o(7426);var c={};function u(e,t,o,n){if(e&&a.isLocalURL(t)){e.prefetch(t,o,n).catch((function(e){0}));var i=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+o+(i?"%"+i:"")]=!0}}var d=function(e){var t,o=!1!==e.prefetch,i=l.useRouter(),d=r.default.useMemo((function(){var t=a.resolveHref(i,e.href,!0),o=n(t,2),r=o[0],l=o[1];return{href:r,as:e.as?a.resolveHref(i,e.as):l||r}}),[i,e.href,e.as]),_=d.href,p=d.as,f=e.children,m=e.replace,h=e.shallow,v=e.scroll,g=e.locale;"string"===typeof f&&(f=r.default.createElement("a",null,f));var b=(t=r.default.Children.only(f))&&"object"===typeof t&&t.ref,y=s.useIntersection({rootMargin:"200px"}),x=n(y,2),w=x[0],j=x[1],k=r.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);r.default.useEffect((function(){var e=j&&o&&a.isLocalURL(_),t="undefined"!==typeof g?g:i&&i.locale,n=c[_+"%"+p+(t?"%"+t:"")];e&&!n&&u(i,_,p,{locale:t})}),[p,_,j,g,o,i]);var N={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,o,n,i,r,l,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(o))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),t[i?"replace":"push"](o,n,{shallow:r,locale:s,scroll:l}))}(e,i,_,p,m,h,v,g)},onMouseEnter:function(e){a.isLocalURL(_)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(i,_,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof g?g:i&&i.locale,O=i&&i.isLocaleDomain&&a.getDomainLocale(p,C,i&&i.locales,i&&i.domainLocales);N.href=O||a.addBasePath(a.addLocale(p,C,i&&i.defaultLocale))}return r.default.cloneElement(t,N)};t.default=d},7426:function(e,t,o){"use strict";var n=o(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,o=e.disabled||!a,s=i.useRef(),c=i.useState(!1),u=n(c,2),d=u[0],_=u[1],p=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),o||d||e&&e.tagName&&(s.current=function(e,t,o){var n=function(e){var t=e.rootMargin||"",o=l.get(t);if(o)return o;var n=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)}))}),e);return l.set(t,o={id:t,observer:i,elements:n}),o}(o),i=n.id,r=n.observer,a=n.elements;return a.set(e,t),r.observe(e),function(){a.delete(e),r.unobserve(e),0===a.size&&(r.disconnect(),l.delete(i))}}(e,(function(e){return e&&_(e)}),{rootMargin:t}))}),[o,t,d]);return i.useEffect((function(){if(!a&&!d){var e=r.requestIdleCallback((function(){return _(!0)}));return function(){return r.cancelIdleCallback(e)}}}),[d]),[p,d]};var i=o(7294),r=o(3447),a="undefined"!==typeof IntersectionObserver;var l=new Map},3634:function(e,t,o){"use strict";o.d(t,{_:function(){return r}});var n=JSON.parse('{"name":"notiflix-documentation","version":"1.0.0-Beta.01","homepage":"https://notiflix.github.io","description":"Notiflix","private":true,"scripts":{"startup:lint":"eslint src","startup:compile":"tsc --resolveJsonModule --outDir .dev --target ES5 src/application/helpers/sitemap-generator/index.ts","startup:run":"node .dev/src/application/helpers/sitemap-generator/index.js","startup":"yarn startup:lint && yarn startup:compile && yarn startup:run","lint:stylelint":"stylelint \\"src/**/*.{scss,sass}\\" --config .stylelintrc.json","lint:eslint":"eslint next.config.js && eslint src && next lint","lint":"yarn lint:stylelint && yarn lint:eslint","dev":"yarn startup && yarn lint && next dev","build":"yarn startup && yarn lint && next build","start":"yarn startup && yarn lint && next start","deploy":"yarn build && next export -o .dist"},"dependencies":{"next":"11.1.0","notiflix":"^3.0.2","react":"17.0.2","react-dom":"17.0.2"},"devDependencies":{"@ts-stack/markdown":"^1.4.0","@types/js-yaml":"^4.0.3","@types/react":"17.0.26","@typescript-eslint/eslint-plugin":"^4.32.0","eslint":"7.32.0","eslint-config-next":"11.1.0","fork-ts-checker-webpack-plugin":"^6.3.3","frontmatter-markdown-loader":"^3.6.3","js-yaml":"^4.1.0","react-icons":"^4.2.0","sass":"^1.42.1","stylelint":"^13.13.1","stylelint-config-standard":"^22.0.0","stylelint-scss":"^3.21.0","stylelint-webpack-plugin":"^3.0.1","typescript":"4.4.3"},"browserslist":{"production":["> 1%","last 4 versions","not ie < 11","not dead","not op_mini all","iOS >=7"],"development":["IE 11","last 1 chrome version","last 1 firefox version","last 1 safari version"]}}'),i=o.t(n,2),r={app:{url:(JSON.stringify((i||{}).homepage)||"").replace(/"/gm,""),version:(JSON.stringify((i||{}).version)||"").replace(/"/gm,""),name:(JSON.stringify((i||{}).description)||"").replace(/"/gm,""),ogImagePath:"/webapp/notiflix-og.jpg",libraryOptions:{notify:{fontFamily:"Red Hat Display",plainText:!1},report:{fontFamily:"Red Hat Display",plainText:!1},confirm:{fontFamily:"Red Hat Display",plainText:!1},loading:{fontFamily:"Red Hat Display",clickToClose:!0},block:{fontFamily:"Red Hat Display"}}},api:{urlGitHubRepo:"https://api.github.com/repos/notiflix/Notiflix",urlGitHubReleases:"https://api.github.com/repos/notiflix/Notiflix/releases",urlNPMDownloads:"https://api.npmjs.org/downloads/range/2019-01-01:2042-01-01/notiflix"}}},6972:function(e,t,o){"use strict";var n;o.d(t,{D:function(){return n}}),function(e){e.HOME="HOME",e.NOTIFY="NOTIFY",e.REPORT="REPORT",e.CONFIRM="CONFIRM",e.LOADING="LOADING",e.BLOCK="BLOCK",e.DOWNLOAD="DOWNLOAD",e.DOCUMENTATION="DOCUMENTATION"}(n||(n={}))},7149:function(e,t,o){"use strict";o.d(t,{rQ:function(){return p},lU:function(){return f},Je:function(){return m},ij:function(){return h},bS:function(){return v},gR:function(){return g},XX:function(){return b},xg:function(){return y},fW:function(){return x},um:function(){return w},$F:function(){return j}});var n=o(8216),i=o(4695),r=o(1077),a=o(4746),l=o(2953),s=o(6568),c=o(2809),u=o(6195),d=o(3634);function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=(0,l.Z)(e);if(t){var i=(0,l.Z)(this).constructor;o=Reflect.construct(n,arguments,i)}else o=n.apply(this,arguments);return(0,a.Z)(this,o)}}var p=function(e){(0,r.Z)(o,e);var t=_(o);function o(e,r){var a;return(0,n.Z)(this,o),a=t.call(this,e),(0,c.Z)((0,i.Z)(a),"status",0),a.status=r,a}return o}((0,s.Z)(Error)),f=function(e){0},m=function(e){return new Promise((function(t){return setTimeout((function(){t()}),e||1e3)}))},h=function(e){return"".concat(d._.app.name,"-").concat(null===e||void 0===e?void 0:e.replace(/[^0-9.]/g,""))},v=function(e){return"".concat(d._.app.name,"-").concat(null===e||void 0===e?void 0:e.replace(/[^0-9.]/g,""),".zip")},g=function(e){var t,o,n=u.attributes._dbAppContent,i=new Date(e),r=i.getFullYear(),a=Array.isArray(null===n||void 0===n||null===(t=n.date)||void 0===t?void 0:t.monthNames)?null===n||void 0===n||null===(o=n.date)||void 0===o?void 0:o.monthNames[i.getMonth()]:"",l=(i.getDate()+"").padStart(2,"0");return"".concat(a," ").concat(l,", ").concat(r)},b=function(e,t){return"".concat(null===e||void 0===e?void 0:e.replace(/\{\{(.*?)\}\}/gm,(t||"-").toString()))},y=function(e){var t=e.selector,o=e.headerFix,n=void 0!==o&&o,i=e.threshold,r=void 0===i?0:i,a=e.isSmooth,l=void 0===a||a,s=e.clearHash,c=void 0!==s&&s,u=0;if(n){var d=window.document.querySelector("header");u=d?d.clientHeight:0}var _=window.document.querySelector(t);if(_){var p,f,m=Math.round(((null===(p=_.getBoundingClientRect())||void 0===p?void 0:p.top)||0)+((null===(f=window.document.documentElement)||void 0===f?void 0:f.scrollTop)||0)-u-r);window.scrollTo({top:m,behavior:l?"smooth":"auto"})}else c&&window.scrollTo(0,0);c&&window.history.replaceState("",window.document.title,window.location.href.replace(/#.*$/,""))},x=function(e,t){return"null"===(null===t||void 0===t?void 0:t.toLocaleLowerCase("en"))?"null":e},w=function(e,t){return"null"===(null===t||void 0===t?void 0:t.toLocaleLowerCase("en"))?"null":"string"===e?"'".concat(t,"'"):t},j=function(){var e,t,o;return(null===(e=window)||void 0===e||null===(t=e.navigator)||void 0===t||null===(o=t.userAgent)||void 0===o?void 0:o.toLocaleLowerCase("en").indexOf(".net4"))>-1}},4882:function(e,t,o){"use strict";o.d(t,{_j:function(){return r}});var n=o(6893),i=o(6972),r=[{id:i.D.HOME,sortOrder:1,isActive:!0,isProductPage:!1,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"daily",sitemapPriority:"1.0",showInHeaderMenu:!1,showInFooterMenu:!1,isTargetBlank:!1,prefetch:!1,name:"Home",pathPage:"/home",pathAs:"/",pathDBFile:"src/_database/pages/home.md",IconComponent:n.m6D},{id:i.D.NOTIFY,sortOrder:2,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Notify",pathPage:"/notify",pathAs:"/notify",pathDBFile:"src/_database/pages/notify.md",IconComponent:n.vWP},{id:i.D.REPORT,sortOrder:3,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Report",pathPage:"/report",pathAs:"/report",pathDBFile:"src/_database/pages/report.md",IconComponent:n.H33},{id:i.D.CONFIRM,sortOrder:4,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Confirm",pathPage:"/confirm",pathAs:"/confirm",pathDBFile:"src/_database/pages/confirm.md",IconComponent:n._rq},{id:i.D.LOADING,sortOrder:5,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Loading",pathPage:"/loading",pathAs:"/loading",pathDBFile:"src/_database/pages/loading.md",IconComponent:n.dAq},{id:i.D.BLOCK,sortOrder:6,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Block",pathPage:"/block",pathAs:"/block",pathDBFile:"src/_database/pages/block.md",IconComponent:n.bfl},{id:i.D.DOWNLOAD,sortOrder:7,isActive:!0,isProductPage:!1,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"monthly",sitemapPriority:"0.9",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Download",pathPage:"/download",pathAs:"/download",pathDBFile:"src/_database/pages/download.md",IconComponent:n.wzc},{id:i.D.DOCUMENTATION,sortOrder:8,isActive:!0,isProductPage:!1,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"monthly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Documentation",pathPage:"/documentation",pathAs:"/documentation",pathDBFile:"src/_database/pages/documentation.md",IconComponent:n.yK7}]},4694:function(e,t,o){"use strict";o.d(t,{Z:function(){return B}});var n=o(5893),i=o(7294),r=o(7149),a=o(2809),l=o(9008),s=o(6320),c=o(4882);function u(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function d(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?u(Object(o),!0).forEach((function(t){(0,a.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var _=function(e){var t,o=e.meta,i=s.attributes._dbAppMeta,r="Notiflix",a="https://notiflix.github.io",u=(null===(t=c._j.find((function(e){return(null===e||void 0===e?void 0:e.id)===(null===o||void 0===o?void 0:o.routeId)})))||void 0===t?void 0:t.pathAs)||"",_="".concat(a).concat((null===u||void 0===u?void 0:u.length)>1?u:"")||"",p=null===i||void 0===i?void 0:i.metaYearInit,f=(new Date).getFullYear()||"",m={languageCode:null===i||void 0===i?void 0:i.metaLanguageCode,language:null===i||void 0===i?void 0:i.metaLanguage,title:null===i||void 0===i?void 0:i.metaTitle,description:null===i||void 0===i?void 0:i.metaDescription,robots:null===i||void 0===i?void 0:i.metaRobots,themeColor:null===i||void 0===i?void 0:i.metaThemeColor,ogImage:"/webapp/notiflix-og.jpg"},h=d(d({},m),o);return(0,n.jsxs)(l.default,{children:[(0,n.jsx)("meta",{charSet:"UTF-8"}),(0,n.jsx)("meta",{name:"content-language",content:h.languageCode}),(0,n.jsx)("meta",{name:"language",content:h.language}),(0,n.jsx)("title",{children:h.title}),(0,n.jsx)("meta",{name:"description",content:h.description}),(0,n.jsx)("meta",{name:"robots",content:h.robots||m.robots}),(0,n.jsx)("meta",{name:"googlebot",content:h.robots||m.robots}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"}),(0,n.jsx)("link",{rel:"shortcut icon",href:"".concat(a,"/favicon.png")}),(0,n.jsx)("link",{rel:"canonical",href:_}),(0,n.jsx)("link",{rel:"shortlink",href:_}),(0,n.jsx)("meta",{name:"generator",content:r}),(0,n.jsx)("meta",{name:"designer",content:r}),(0,n.jsx)("meta",{name:"copyright",content:"\xa9 ".concat(p,"-").concat(f," ").concat(r,". ").concat(null===i||void 0===i?void 0:i.metaCopyright)}),(0,n.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,n.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&display=swap"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inconsolata&display=swap"})]})},p=o(1664),f=o(6893),m=o(6195),h=o(1147),v=o(3634);var g=function(e){var t=e.className,o=e.width,i=e.height,r=e.colorNoti,a=e.colorFlix;return(0,n.jsx)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:o||180,height:i||60,viewBox:"0 0 180 60",children:(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{fill:r||"#32c682",d:"M69.64 36.61c0,-8.06 -6.53,-14.58 -14.58,-14.58 -8.06,0 -14.58,6.52 -14.58,14.58 0,8.05 6.52,14.58 14.58,14.58 8.05,0 14.58,-6.53 14.58,-14.58zm-31.63 0c0,-9.42 7.63,-17.05 17.05,-17.05 9.41,0 17.04,7.63 17.04,17.05 0,9.41 -7.63,17.04 -17.04,17.04 -9.42,0 -17.05,-7.63 -17.05,-17.04zm41.92 9.45l0 -23.25 -5.33 0c-0.3,0 -0.59,-0.13 -0.85,-0.39 -0.25,-0.26 -0.38,-0.55 -0.38,-0.85 0,-0.35 0.11,-0.64 0.35,-0.88 0.24,-0.23 0.53,-0.35 0.88,-0.35l5.33 0 0 -8.25c0,-0.35 0.12,-0.65 0.38,-0.91 0.26,-0.26 0.57,-0.39 0.91,-0.39 0.39,0 0.71,0.13 0.95,0.39 0.23,0.26 0.35,0.56 0.35,0.91l0 8.25 7.15 0c0.3,0 0.58,0.13 0.84,0.39 0.26,0.26 0.39,0.54 0.39,0.84 0,0.35 -0.12,0.64 -0.36,0.88 -0.24,0.24 -0.53,0.36 -0.87,0.36l-7.15 0 0 23.12c0,1.9 0.34,3.17 1.01,3.79 0.67,0.63 1.52,0.95 2.56,0.95 0.18,0 0.43,-0.05 0.75,-0.13 0.33,-0.09 0.6,-0.13 0.81,-0.13 0.31,0 0.57,0.11 0.78,0.35 0.22,0.24 0.33,0.51 0.33,0.81 0,0.39 -0.26,0.73 -0.78,1.01 -0.52,0.28 -1.13,0.42 -1.82,0.42 -1.08,0 -1.99,-0.07 -2.73,-0.22 -0.74,-0.16 -1.5,-0.74 -2.3,-1.76 -0.8,-1.02 -1.2,-2.67 -1.2,-4.96zm16.19 5.64l0 -30.84c0,-0.35 0.13,-0.65 0.39,-0.91 0.26,-0.26 0.57,-0.39 0.91,-0.39 0.39,0 0.71,0.13 0.94,0.39 0.24,0.26 0.36,0.56 0.36,0.91l0 30.84c0,0.35 -0.13,0.65 -0.39,0.91 -0.26,0.26 -0.56,0.39 -0.91,0.39 -0.39,0 -0.7,-0.13 -0.94,-0.39 -0.24,-0.26 -0.36,-0.56 -0.36,-0.91zm-75.22 -32.14c3.85,0 6.75,1.13 8.7,3.41 1.95,2.27 2.93,5.23 2.93,8.86l0 19.87c0,0.35 -0.13,0.65 -0.39,0.91 -0.26,0.26 -0.57,0.39 -0.91,0.39 -0.39,0 -0.71,-0.13 -0.94,-0.39 -0.24,-0.26 -0.36,-0.56 -0.36,-0.91l0 -19.61c0,-2.94 -0.77,-5.36 -2.31,-7.24 -1.54,-1.88 -3.86,-2.82 -6.98,-2.82 -0.87,0 -1.73,0 -2.6,0 -3.11,0 -5.44,0.94 -6.98,2.82 -1.54,1.88 -2.3,4.3 -2.3,7.24l0 19.61c0,0.35 -0.12,0.65 -0.36,0.91 -0.24,0.26 -0.55,0.39 -0.94,0.39 -0.35,0 -0.65,-0.13 -0.91,-0.39 -0.26,-0.26 -0.39,-0.56 -0.39,-0.91l0 -19.87c0,-3.63 0.97,-6.59 2.92,-8.86 1.95,-2.28 4.85,-3.41 8.7,-3.41 1.05,0 2.08,0 3.12,0zm-1.56 28.34c1.41,0 2.55,1.15 2.55,2.55 0,1.41 -1.14,2.55 -2.55,2.55 -1.41,0 -2.55,-1.14 -2.55,-2.55 0,-1.4 1.14,-2.55 2.55,-2.55zm75.84 -35.23c0,-1.22 0.99,-2.21 2.21,-2.21 1.22,0 2.21,0.99 2.21,2.21 0,1.23 -0.99,2.22 -2.21,2.22 -1.22,0 -2.21,-0.99 -2.21,-2.22z"}),(0,n.jsx)("path",{fill:a||"#2b3b42",d:"M138.19 12.67c0,-1.22 0.99,-2.21 2.21,-2.21 1.22,0 2.21,0.99 2.21,2.21 0,1.23 -0.99,2.22 -2.21,2.22 -1.22,0 -2.21,-0.99 -2.21,-2.22zm-27.82 39.03l0 -28.25 -5.19 0c-0.31,0 -0.59,-0.13 -0.85,-0.39 -0.26,-0.25 -0.39,-0.54 -0.39,-0.84 0,-0.39 0.12,-0.69 0.36,-0.91 0.24,-0.22 0.53,-0.32 0.88,-0.32l5.19 0 0 -7.93c0,-2.55 0.69,-4.49 2.05,-5.81 1.36,-1.32 3.11,-1.98 5.23,-1.98 1.08,0 2.11,0.14 3.08,0.42 0.98,0.28 1.46,0.75 1.46,1.4 0,0.35 -0.13,0.65 -0.39,0.91 -0.26,0.26 -0.54,0.39 -0.84,0.39 -0.35,0 -0.8,-0.11 -1.36,-0.33 -1,-0.3 -1.74,-0.45 -2.21,-0.45 -1.34,0 -2.42,0.45 -3.22,1.36 -0.8,0.91 -1.2,2.28 -1.2,4.09l0 7.93 7.66 0c0.35,0 0.64,0.12 0.88,0.35 0.24,0.24 0.36,0.53 0.36,0.88 0,0.35 -0.12,0.64 -0.36,0.88 -0.24,0.24 -0.53,0.35 -0.88,0.35l-7.66 0 0 28.25c0,0.35 -0.13,0.65 -0.39,0.91 -0.26,0.26 -0.56,0.39 -0.91,0.39 -0.39,0 -0.7,-0.13 -0.94,-0.39 -0.24,-0.26 -0.36,-0.56 -0.36,-0.91zm17.05 0l0 -45.46c0,-0.34 0.13,-0.65 0.39,-0.9 0.26,-0.26 0.56,-0.39 0.9,-0.39 0.39,0 0.71,0.13 0.95,0.39 0.23,0.25 0.35,0.56 0.35,0.9l0 45.46c0,0.35 -0.13,0.65 -0.39,0.91 -0.25,0.26 -0.56,0.39 -0.91,0.39 -0.38,0 -0.7,-0.13 -0.94,-0.39 -0.23,-0.26 -0.35,-0.56 -0.35,-0.91zm11.71 0l0 -30.84c0,-0.35 0.13,-0.65 0.39,-0.91 0.26,-0.26 0.57,-0.39 0.91,-0.39 0.39,0 0.71,0.13 0.94,0.39 0.24,0.26 0.36,0.56 0.36,0.91l0 30.84c0,0.35 -0.13,0.65 -0.39,0.91 -0.26,0.26 -0.56,0.39 -0.91,0.39 -0.39,0 -0.7,-0.13 -0.94,-0.39 -0.24,-0.26 -0.36,-0.56 -0.36,-0.91zm8.99 -0.45l11.17 -14.48 -11.3 -14.74c-0.17,-0.22 -0.26,-0.48 -0.26,-0.78 0,-0.39 0.14,-0.72 0.43,-0.98 0.28,-0.26 0.59,-0.39 0.94,-0.39 0.43,0 0.78,0.2 1.04,0.59l10.78 14.09 10.58 -14.09c0.35,-0.39 0.72,-0.59 1.11,-0.59 0.39,0 0.69,0.11 0.91,0.33 0.21,0.21 0.32,0.47 0.32,0.78 0,0.26 -0.11,0.54 -0.32,0.84l-11.04 14.81 11.1 14.54c0.17,0.22 0.26,0.48 0.26,0.78 0,0.35 -0.12,0.65 -0.36,0.91 -0.23,0.26 -0.53,0.39 -0.87,0.39 -0.39,0 -0.76,-0.19 -1.11,-0.58l-10.65 -13.9 -10.71 13.96c-0.26,0.35 -0.61,0.52 -1.04,0.52 -0.35,0 -0.64,-0.1 -0.88,-0.32 -0.24,-0.22 -0.36,-0.52 -0.36,-0.91 0,-0.3 0.09,-0.56 0.26,-0.78z"})]})})},b=o(7465),y=o.n(b);var x=function(e){var t,o,i=e.mobileMenuOnClickHandler,r=m.attributes._dbAppContent;return(0,n.jsx)("nav",{className:y().nav,children:(0,n.jsx)("ul",{className:y().nav__ul,children:null===c._j||void 0===c._j||null===(t=c._j.filter((function(e){return(null===e||void 0===e?void 0:e.isActive)&&(null===e||void 0===e?void 0:e.showInHeaderMenu)})))||void 0===t||null===(o=t.sort((function(e,t){return(null===e||void 0===e?void 0:e.sortOrder)-(null===t||void 0===t?void 0:t.sortOrder)})))||void 0===o?void 0:o.map((function(e){var t;return(0,n.jsx)("li",{className:y().nav__ul__li,children:(0,n.jsx)(p.default,{href:null===e||void 0===e?void 0:e.pathPage,as:"".concat("https://notiflix.github.io").concat(null===e||void 0===e?void 0:e.pathAs),passHref:!0,prefetch:null===e||void 0===e?void 0:e.prefetch,children:(0,n.jsxs)("a",{"aria-label":"".concat(v._.app.name," ").concat(null===e||void 0===e?void 0:e.name," ").concat(null===r||void 0===r||null===(t=r.buttons)||void 0===t?void 0:t.module),onClick:function(){return i(!1)},target:null!==e&&void 0!==e&&e.isTargetBlank?"_blank":void 0,className:["".concat(y().nav__ul__li__a),"".concat(null!==e&&void 0!==e&&e.isProductPage&&y()["nav__ul__li__a--product"]||"")].join(" ").trim(),children:[null!==e&&void 0!==e&&e.IconComponent?(0,n.jsx)(e.IconComponent,{}):"",(0,n.jsx)("span",{children:null===e||void 0===e?void 0:e.name})]})})},null===e||void 0===e?void 0:e.id)}))})})},w=o(6406),j=o.n(w);var k=function(e){var t,o,r,a,l,s=e.classNamePrefix,u=m.attributes._dbAppContent,d=h.attributes._dbPageMeta,_=(null===(t=c._j.find((function(e){return(null===e||void 0===e?void 0:e.id)===(null===d||void 0===d?void 0:d.routeId)})))||void 0===t?void 0:t.pathPage)||"/",b=(null===(o=c._j.find((function(e){return(null===e||void 0===e?void 0:e.id)===(null===d||void 0===d?void 0:d.routeId)})))||void 0===o?void 0:o.pathAs)||"/",y=(0,i.useState)(!1),w=y[0],k=y[1],N=function(){var e;k((null===(e=window.document.documentElement)||void 0===e?void 0:e.scrollTop)>10)};(0,i.useEffect)((function(){return window.document.addEventListener("scroll",N),function(){window.document.removeEventListener("scroll",N)}}),[]);var C=(0,i.useState)(!1),O=C[0],I=C[1],T=function(e){I(e)};return(0,n.jsx)("header",{className:["".concat(j().header),"".concat(j()["header--".concat(s)]||""),"".concat(w&&j()["header--sticky"]||"")].join(" ").trim(),children:(0,n.jsxs)("div",{className:j().header__container,children:[(0,n.jsx)("div",{className:j().header__logo,children:(0,n.jsx)(p.default,{href:_,as:"".concat("https://notiflix.github.io").concat(b),passHref:!0,prefetch:!1,children:(0,n.jsx)("a",{"aria-label":v._.app.name,onClick:function(){return T(!1)},className:j().header__logo__link,children:(0,n.jsx)(g,{})})})}),(0,n.jsx)("button",{"aria-label":null===u||void 0===u||null===(r=u.buttons)||void 0===r?void 0:r.menu,type:"button",className:j().header__menu__open,onClick:function(){return T(!0)},children:(0,n.jsx)(f.K9M,{})}),(0,n.jsx)("button",{"aria-label":null===u||void 0===u||null===(a=u.buttons)||void 0===a?void 0:a.close,type:"button",className:["".concat(j().header__menu__overlay),"".concat(O&&j()["header__menu__overlay--opened"]||"")].join(" ").trim(),onClick:function(){return T(!1)}}),(0,n.jsxs)("div",{className:["".concat(j().header__menu),"".concat(O&&j()["header__menu--opened"]||"")].join(" ").trim(),children:[(0,n.jsx)("button",{"aria-label":null===u||void 0===u||null===(l=u.buttons)||void 0===l?void 0:l.close,type:"button",className:j().header__menu__close,onClick:function(){return T(!1)},children:(0,n.jsx)(f.q5L,{})}),(0,n.jsx)(x,{mobileMenuOnClickHandler:T})]})]})})},N=o(9583),C=o(2211),O=o.n(C);var I=function(){var e,t,o=s.attributes._dbAppMeta,i=m.attributes._dbAppContent;return(0,n.jsx)("footer",{className:O().footer,children:(0,n.jsxs)("div",{className:O().footer__container,children:[(0,n.jsxs)("div",{className:O().footer__content__top,children:[(0,n.jsx)("div",{className:O().footer__content__top__logo,children:(0,n.jsx)(g,{className:O().footer__content__top__logo__svg,colorNoti:"currentColor",colorFlix:"currentColor"})}),(0,n.jsx)("div",{className:O().footer__content__top__menu})]}),(0,n.jsxs)("div",{className:O().footer__content__bottom,children:[(0,n.jsx)("p",{className:O().footer__content__bottom__copyright,dangerouslySetInnerHTML:{__html:"&copy; ".concat(null===o||void 0===o?void 0:o.metaYearInit," - ").concat((new Date).getFullYear()," ").concat(v._.app.name,". ").concat(null===o||void 0===o?void 0:o.metaCopyright)}}),(0,n.jsxs)("a",{href:null===i||void 0===i||null===(e=i.footer)||void 0===e?void 0:e.gitHubUrl,target:"_blank",rel:"noreferrer",className:O().footer__content__bottom__link,children:[(0,n.jsx)(N.hJX,{className:O().footer__content__bottom__link__icon}),(0,n.jsx)("span",{children:null===i||void 0===i||null===(t=i.footer)||void 0===t?void 0:t.gitHubName})]})]})]})})},T=o(2414);var M=function(){var e,t,o=T.attributes._dbAppSocialMedia,i={"@context":"https://schema.org","@type":"Organization",name:"Notiflix",url:"https://notiflix.github.io",logo:"".concat("https://notiflix.github.io").concat("/webapp/notiflix-og.jpg"),sameAs:(null===o||void 0===o||null===(e=o.filter((function(e){return null===e||void 0===e?void 0:e.isActive})))||void 0===e||null===(t=e.map((function(e){return null===e||void 0===e?void 0:e.url})))||void 0===t?void 0:t.map((function(e){return e})))||[]};return(0,n.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(i)}})},H=o(572),A=o.n(H);var D=function(){var e,t,o,i,r=m.attributes._dbAppContent;return(0,n.jsxs)("div",{className:A().ie,children:[(0,n.jsx)("h2",{className:A().ie__title,children:null===r||void 0===r||null===(e=r.browsers)||void 0===e?void 0:e.ieTitle}),(0,n.jsx)("p",{className:A().ie__description,children:null===r||void 0===r||null===(t=r.browsers)||void 0===t?void 0:t.ieDescription}),(0,n.jsxs)("a",{className:A().ie__link,href:null===r||void 0===r||null===(o=r.browsers)||void 0===o?void 0:o.ieLinkUrl,target:"_blank",rel:"noreferrer",children:[(0,n.jsx)(N.hJX,{className:A().ie__link__icon}),(0,n.jsx)("span",{children:null===r||void 0===r||null===(i=r.browsers)||void 0===i?void 0:i.ieLinkText})]})]})};var F=function(){var e,t=m.attributes._dbAppContent;return(0,n.jsxs)("noscript",{className:"noscript",children:[(0,n.jsx)("style",{children:".noscript__message {box-sizing: border-box;outline: none;position: fixed;z-index: 9999;left: 0;top: 0;width: 100%;height: 100%;display: flex;flex-wrap: wrap;flex-direction: column;align-items: center;justify-content: center;text-align: center;margin: 0;padding: 1.25rem;font-family: sans-serif;font-size: 1rem;color: #f8f8f8;background: #1e1e1e;}"}),(0,n.jsx)("p",{className:"noscript__message",children:null===t||void 0===t||null===(e=t.noscript)||void 0===e?void 0:e.message})]})},P=o(692),L=o.n(P);var S=function(){var e,t=m.attributes._dbAppContent,o=(0,i.useState)(!1),r=o[0],a=o[1],l=function(){var e;a((null===(e=window.document.documentElement)||void 0===e?void 0:e.scrollTop)>1.25*window.innerHeight)};return(0,i.useEffect)((function(){return window.document.addEventListener("scroll",l),function(){window.document.removeEventListener("scroll",l)}}),[]),(0,n.jsx)("button",{"aria-label":null===t||void 0===t||null===(e=t.buttons)||void 0===e?void 0:e.goToTop,type:"button",onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},className:["".concat(L().button),"".concat(r?"".concat(L()["button--show"]||""):"")].join(" ").trim(),children:(0,n.jsx)(f.iRh,{})})},E=o(3924),R=o.n(E);var B=function(e){var t=e.classNamePrefix,o=e.meta,a=e.children,l=(0,i.useState)(!1),s=l[0],c=l[1];return(0,i.useEffect)((function(){var e,t;(0,r.$F)()?c(!0):null===(e=window.document)||void 0===e||null===(t=e.documentElement)||void 0===t||t.dispatchEvent(new Event("scroll",{bubbles:!0}))}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_,{meta:o}),s&&(0,n.jsx)(D,{}),(0,n.jsx)(F,{}),(0,n.jsx)(k,{classNamePrefix:t}),(0,n.jsx)("main",{className:["".concat(R().layout),"".concat(R()["layout--".concat(t)]||"")].join(" ").trim(),children:a}),(0,n.jsx)(I,{}),(0,n.jsx)(S,{}),(0,n.jsx)(M,{})]})}},2211:function(e){e.exports={footer:"Footer_footer__2BvtZ",footer__container:"Footer_footer__container__3GCBV",footer__content__top:"Footer_footer__content__top__2tBzz",footer__content__top__logo:"Footer_footer__content__top__logo__qba8d",footer__content__top__logo__svg:"Footer_footer__content__top__logo__svg__3AdlT",footer__content__top__menu:"Footer_footer__content__top__menu__37pjQ",footer__content__bottom:"Footer_footer__content__bottom__3Z899",footer__content__bottom__copyright:"Footer_footer__content__bottom__copyright__1kfyx",footer__content__bottom__link:"Footer_footer__content__bottom__link__2p4wG",footer__content__bottom__link__icon:"Footer_footer__content__bottom__link__icon__1Iwm2"}},6406:function(e){e.exports={header:"Header_header__-Uzh_","header--sticky":"Header_header--sticky__1xvRH",header__container:"Header_header__container__1JLSp",header__logo:"Header_header__logo__3bZUM",header__logo__link:"Header_header__logo__link__3KGUS",header__menu:"Header_header__menu__1Wqqt","header__menu--opened":"Header_header__menu--opened__yqoXn",header__menu__open:"Header_header__menu__open__1VRN3",header__menu__overlay:"Header_header__menu__overlay__2CoyY","header__menu__overlay--opened":"Header_header__menu__overlay--opened__2dglG",header__menu__close:"Header_header__menu__close__2lR7_"}},7465:function(e){e.exports={nav:"HeaderMenu_nav__2y8cc",nav__ul:"HeaderMenu_nav__ul__34Yk2",nav__ul__li:"HeaderMenu_nav__ul__li__3WMLI",nav__ul__li__a:"HeaderMenu_nav__ul__li__a___dwxa","nav__ul__li__a--product":"HeaderMenu_nav__ul__li__a--product__pAaAd"}},3924:function(e){e.exports={layout:"Layout_layout__3jO5F","layout--home":"Layout_layout--home__9AxSD","layout--notify":"Layout_layout--notify__10ffL","layout--report":"Layout_layout--report__HXnGL","layout--confirm":"Layout_layout--confirm__1ERGw","layout--loading":"Layout_layout--loading__1q__x","layout--block":"Layout_layout--block__2hain","layout--download":"Layout_layout--download__23Ggw","layout--documentation":"Layout_layout--documentation__3Tboy"}},692:function(e){e.exports={button:"GoToTop_button__1w4sa","button--show":"GoToTop_button--show__2qtFy"}},572:function(e){e.exports={ie:"InternetExplorer_ie__1fxe3",ie__title:"InternetExplorer_ie__title__1GXdm",ie__description:"InternetExplorer_ie__description__2Ra2u",ie__link:"InternetExplorer_ie__link__3narB",ie__link__icon:"InternetExplorer_ie__link__icon__1jDdz"}},9008:function(e,t,o){e.exports=o(639)},1664:function(e,t,o){e.exports=o(2167)}}]);