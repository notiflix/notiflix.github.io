(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[116],{3757:function(e){e.exports={attributes:{_dbMeta:{routeId:"NOTIFY",lastModifiedDate:"2021-10-29",title:"Notify | Notiflix",description:'Notiflix Notify module can be used to send non-blocking alerts/notifications. This module includes 4 types of notifications: "Success", "Failure", "Warning", and "Info".',robots:"noindex, nofollow, noodp, noydir",ogImage:null,themeColor:null},_dbNotifyBanner:{importNamespace:"Notify",title:"Notify",description:'Notiflix Notify module can be used to send non-blocking alerts/notifications. This module includes 4 types of notifications: "Success", "Failure", "Warning", and "Info".',importDescription:"(A) Import as a Module",htmlDescription:"(B) Add to an HTML page (Global)",htmlOneByOne:"(B1) CSS and JS",htmlOneByOneCSS:"../dist/notiflix-X.X.X.min.css",htmlOneByOneJS:"../dist/notiflix-X.X.X.min.js",htmlAllInOne:"(B2) or only JS (All in One => Internal CSS)",htmlAllInOneJS:"../dist/notiflix-aio-X.X.X.min.js"},_dbNotifyPlayground:{title:"Playground",namespace:"Notify",comments:["@param1 {string}: Required, a text in string format.","@param2 {function | Object}: Optional, a callback function that will be called when the notification element has been clicked. Or, extending the initialize options with the new options for each notification element.","@param3 {Object}: Optional, extending the initialize options with new options for each notification element. (If the second parameter has been already used for a callback function.)"],docsText:"Options",demoTitle:"Demo",demoDescription:"A text can be typed for the demonstration.",demoInputPlaceholder:"Message",demoButton:"Send",callbackTitle:"Callback Function",callbackDescription:"A callback function can be added as a second parameter. The callback function can be used for all types of notifications. The notifications with the callback function do not disappear until they were clicked.",callbackMessage:"Click to show an alert.",callbackInputPlaceholder:"Alert message",callbackButton:"Send",extendDocsText:"All Options",extendDocsRouteHash:"#DocsNotify",extendTitle:"Extending the Options",extendDescription:'Extending the initialize options with the new options for each notification element. An "options" object can be added as a second parameter. In addition, it has to be the third parameter if the second parameter has been already used for a callback function.',extendMessage:"Peace at home, peace in the world.",types:[{id:"SUCCESS",sortOrder:1,isActive:!0,functionName:"success",defaultValue:"Sol lucet omnibus",docsRouteHash:"#DocsNotifySuccess"},{id:"FAILURE",sortOrder:2,isActive:!0,functionName:"failure",defaultValue:"Qui timide rogat docet negare",docsRouteHash:"#DocsNotifyFailure"},{id:"WARNING",sortOrder:3,isActive:!0,functionName:"warning",defaultValue:"Memento te hominem esse",docsRouteHash:"#DocsNotifyWarning"},{id:"INFO",sortOrder:4,isActive:!0,functionName:"info",defaultValue:"Cogito ergo sum",docsRouteHash:"#DocsNotifyInfo"}]}},html:""}},2167:function(e,t,i){"use strict";var n=i(3848);t.default=void 0;var _,a=(_=i(7294))&&_.__esModule?_:{default:_},o=i(1063),s=i(4651),l=i(7426);var r={};function c(e,t,i,n){if(e&&o.isLocalURL(t)){e.prefetch(t,i,n).catch((function(e){0}));var _=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;r[t+"%"+i+(_?"%"+_:"")]=!0}}var d=function(e){var t,i=!1!==e.prefetch,_=s.useRouter(),d=a.default.useMemo((function(){var t=o.resolveHref(_,e.href,!0),i=n(t,2),a=i[0],s=i[1];return{href:a,as:e.as?o.resolveHref(_,e.as):s||a}}),[_,e.href,e.as]),u=d.href,p=d.as,y=e.children,m=e.replace,g=e.shallow,f=e.scroll,h=e.locale;"string"===typeof y&&(y=a.default.createElement("a",null,y));var N=(t=a.default.Children.only(y))&&"object"===typeof t&&t.ref,j=l.useIntersection({rootMargin:"200px"}),M=n(j,2),x=M[0],v=M[1],A=a.default.useCallback((function(e){x(e),N&&("function"===typeof N?N(e):"object"===typeof N&&(N.current=e))}),[N,x]);a.default.useEffect((function(){var e=v&&i&&o.isLocalURL(u),t="undefined"!==typeof h?h:_&&_.locale,n=r[u+"%"+p+(t?"%"+t:"")];e&&!n&&c(_,u,p,{locale:t})}),[p,u,v,h,i,_]);var I={ref:A,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,i,n,_,a,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(i))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),t[_?"replace":"push"](i,n,{shallow:a,locale:l,scroll:s}))}(e,_,u,p,m,g,f,h)},onMouseEnter:function(e){o.isLocalURL(u)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c(_,u,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var b="undefined"!==typeof h?h:_&&_.locale,w=_&&_.isLocaleDomain&&o.getDomainLocale(p,b,_&&_.locales,_&&_.domainLocales);I.href=w||o.addBasePath(o.addLocale(p,b,_&&_.defaultLocale))}return a.default.cloneElement(t,I)};t.default=d},7426:function(e,t,i){"use strict";var n=i(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,i=e.disabled||!o,l=_.useRef(),r=_.useState(!1),c=n(r,2),d=c[0],u=c[1],p=_.useCallback((function(e){l.current&&(l.current(),l.current=void 0),i||d||e&&e.tagName&&(l.current=function(e,t,i){var n=function(e){var t=e.rootMargin||"",i=s.get(t);if(i)return i;var n=new Map,_=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)}))}),e);return s.set(t,i={id:t,observer:_,elements:n}),i}(i),_=n.id,a=n.observer,o=n.elements;return o.set(e,t),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),s.delete(_))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[i,t,d]);return _.useEffect((function(){if(!o&&!d){var e=a.requestIdleCallback((function(){return u(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),[p,d]};var _=i(7294),a=i(3447),o="undefined"!==typeof IntersectionObserver;var s=new Map},3634:function(e,t,i){"use strict";i.d(t,{_:function(){return a}});var n=JSON.parse('{"name":"notiflix-documentation","version":"1.0.0-Beta.01","homepage":"https://notiflix.github.io","description":"Notiflix","private":true,"scripts":{"startup:lint":"eslint src","startup:compile":"tsc --resolveJsonModule --outDir .dev --target ES5 src/application/helpers/sitemap-generator/index.ts","startup:run":"node .dev/src/application/helpers/sitemap-generator/index.js","startup":"yarn startup:lint && yarn startup:compile && yarn startup:run","lint:stylelint":"stylelint \\"src/**/*.{scss,sass}\\" --config .stylelintrc.json","lint:eslint":"eslint next.config.js && next lint","lint":"yarn lint:stylelint && yarn lint:eslint","dev":"yarn startup && yarn lint && next dev","build":"yarn startup && yarn lint && next build","start":"yarn startup && yarn lint && next start","deploy":"yarn build && next export -o .dist"},"dependencies":{"next":"11.1.0","notiflix":"^3.0.2","react":"17.0.2","react-dom":"17.0.2"},"devDependencies":{"@ts-stack/markdown":"^1.4.0","@types/js-yaml":"^4.0.3","@types/react":"17.0.19","@typescript-eslint/eslint-plugin":"^4.29.3","eslint":"7.32.0","eslint-config-next":"11.1.0","fork-ts-checker-webpack-plugin":"^6.3.2","frontmatter-markdown-loader":"^3.6.3","js-yaml":"^4.1.0","react-icons":"^4.2.0","sass":"^1.38.1","stylelint":"^13.13.1","stylelint-config-standard":"^22.0.0","stylelint-scss":"^3.20.1","stylelint-webpack-plugin":"^3.0.1","typescript":"4.3.5"},"browserslist":{"production":["> 1%","last 4 versions","not ie < 11","not dead","not op_mini all","iOS >=7"],"development":["IE 11","last 1 chrome version","last 1 firefox version","last 1 safari version"]}}'),_=i.t(n,2),a={app:{url:(JSON.stringify((_||{}).homepage)||"").replace(/"/gm,""),version:(JSON.stringify((_||{}).version)||"").replace(/"/gm,""),name:(JSON.stringify((_||{}).description)||"").replace(/"/gm,""),ogImageSrc:"/webapp/notiflix-og.jpg",text:{module:"Module",global:"Global",switch:"Switch",menu:"Menu",open:"Open",close:"Close"},libraryOptions:{notify:{fontFamily:"Red Hat Display",plainText:!1}}},api:{urlGitHubReleases:"https://api.github.com/repos/notiflix/Notiflix/releases",urlNPMDownloads:"https://api.npmjs.org/downloads/range/2019-01-01:2042-01-01/notiflix"}}},6972:function(e,t,i){"use strict";var n;i.d(t,{D:function(){return n}}),function(e){e.HOME="HOME",e.NOTIFY="NOTIFY",e.REPORT="REPORT",e.CONFIRM="CONFIRM",e.LOADING="LOADING",e.BLOCK="BLOCK",e.DOWNLOAD="DOWNLOAD",e.DOCUMENTATION="DOCUMENTATION"}(n||(n={}))},4882:function(e,t,i){"use strict";i.d(t,{_j:function(){return a}});var n=i(6893),_=i(6972),a=[{id:_.D.HOME,sortOrder:1,isActive:!0,isProductPage:!1,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"daily",sitemapPriority:"1.0",showInHeaderMenu:!1,showInFooterMenu:!1,isTargetBlank:!1,name:"Home",pathPage:"/home",pathAs:"/",pathDBFile:"src/_database/pages/home.md",IconComponent:n.m6D},{id:_.D.NOTIFY,sortOrder:2,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Notify",pathPage:"/notify",pathAs:"/notify",pathDBFile:"src/_database/pages/notify.md",IconComponent:n.vWP},{id:_.D.REPORT,sortOrder:3,isActive:!0,isProductPage:!0,addToNextJSConfig:!1,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Report",pathPage:"/report",pathAs:"/report",pathDBFile:"src/_database/pages/report.md",IconComponent:n.H33},{id:_.D.CONFIRM,sortOrder:4,isActive:!0,isProductPage:!0,addToNextJSConfig:!1,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Confirm",pathPage:"/confirm",pathAs:"/confirm",pathDBFile:"src/_database/pages/confirm.md",IconComponent:n._rq},{id:_.D.LOADING,sortOrder:5,isActive:!0,isProductPage:!0,addToNextJSConfig:!1,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Loading",pathPage:"/loading",pathAs:"/loading",pathDBFile:"src/_database/pages/loading.md",IconComponent:n.dAq},{id:_.D.BLOCK,sortOrder:6,isActive:!0,isProductPage:!0,addToNextJSConfig:!1,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Block",pathPage:"/block",pathAs:"/block",pathDBFile:"src/_database/pages/block.md",IconComponent:n.bfl},{id:_.D.DOWNLOAD,sortOrder:7,isActive:!0,isProductPage:!1,addToNextJSConfig:!1,addToSitemap:!0,sitemapFrequency:"monthly",sitemapPriority:"0.9",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Download",pathPage:"/download",pathAs:"/download",pathDBFile:"src/_database/pages/download.md",IconComponent:n.wzc},{id:_.D.DOCUMENTATION,sortOrder:8,isActive:!0,isProductPage:!1,addToNextJSConfig:!1,addToSitemap:!0,sitemapFrequency:"monthly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,name:"Documentation",pathPage:"/documentation",pathAs:"/documentation",pathDBFile:"src/_database/pages/documentation.md",IconComponent:n.yK7}]},907:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var n=i(5893),_=i(2809),a=i(7294),o=i(8216);function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){(0,_.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var r=function e(t,i){var n=this;(0,o.Z)(this,e),(0,_.Z)(this,"self",void 0),(0,_.Z)(this,"options",void 0),(0,_.Z)(this,"elements",void 0),(0,_.Z)(this,"observer",void 0),(0,_.Z)(this,"defaults",{selector:".js-lazyload",attributeNameSrc:"data-src",attributeNameSrcset:"data-srcset",classNameLoaded:"js-lazyloaded",root:null,rootMargin:"0px",threshold:0}),(0,_.Z)(this,"observe",(function(){var e=n.self;Array.prototype.forEach.call(n.elements,(function(t){var i;null===(i=e.observer)||void 0===i||i.observe(t)}))})),(0,_.Z)(this,"loader",(function(e){var t=e.getAttribute(n.options.attributeNameSrc||n.defaults.attributeNameSrc)||"",i=e.getAttribute(n.options.attributeNameSrcset||n.defaults.attributeNameSrcset)||"",_=t.length>1,a=i.length>1;e instanceof HTMLImageElement?(_&&(e.src=t),a&&(e.srcset=i,window.navigator.userAgent.toLocaleLowerCase("en").indexOf(".net4")>-1&&(String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,t){var i=t&&t>0?t:0;return this.substring(i,i+e.length)===e}}),i.trim().startsWith("data:image")?e.src=(i.split(", data:image")[0]||i.split(",data:image")[0]||i.split(", http")[0]||i.split(",http")[0]||i.split(", /")[0]||i.split(",/")[0]||"").trim():e.src=(i.trim().split(", ")[0]||i.trim().split(",")[0]||"").trim().split(" ")[0].trim()))):e instanceof HTMLElement&&_&&(e.style.backgroundImage='url("'.concat(t,'")'),e.style.backgroundRepeat="no-repeat",e.style.backgroundSize="cover",e.style.backgroundPosition="center"),(_||a)&&e.classList.add(n.options.classNameLoaded||n.defaults.classNameLoaded)})),(0,_.Z)(this,"loadImages",(function(){var e=n.self;Array.prototype.forEach.call(e.elements,(function(t){e.loader(t)}))})),(0,_.Z)(this,"init",(function(){if(window.IntersectionObserver){var e={root:n.options.root||n.defaults.root,rootMargin:n.options.rootMargin||n.defaults.rootMargin,threshold:[n.options.threshold||n.defaults.threshold]};n.observer=new IntersectionObserver((function(e){var t=n.self;Array.prototype.forEach.call(e,(function(e){var i,_=e.target.classList.contains(t.options.classNameLoaded||t.defaults.classNameLoaded);e.isIntersecting&&!_&&(n.loader(e.target),null===(i=n.observer)||void 0===i||i.unobserve(e.target))}))}),e),n.observe()}else n.loadImages()})),(0,_.Z)(this,"disconnect",(function(){var e;null===(e=n.observer)||void 0===e||e.disconnect()})),(0,_.Z)(this,"reconnect",(function(){n.observe()})),this.self=this,this.options=l(l({},this.defaults),t),this.elements=i||window.document.querySelectorAll(this.options.selector||this.defaults.selector),this.observer=null,this.init()},c=function(e){var t,i=e.id,o=e.className,s=e.alt,l=e.width,c=e.height,d=e.placeholder,u=e.src,p=e.srcset,y=e.attributeNameSrc,m=e.attributeNameSrcset,g=e.classNameLoaded,f=e.root,h=e.rootMargin,N=e.threshold,j=d||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4AQMAAAADqqSRAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABZJREFUOMtjGAWjYBSMglEwCkYB3QEAB4AAAe7tUzsAAAAASUVORK5CYII=",M=(0,a.createRef)();(0,a.useEffect)((function(){M.current&&new r({attributeNameSrc:y,attributeNameSrcset:m,classNameLoaded:g,root:f,threshold:N,rootMargin:h},[M.current])}),[M,y,m,g,f,h,N]);var x=(0,a.createElement)("img",(t={ref:M,id:i,className:o||"",alt:s,width:l,height:c},(0,_.Z)(t,y||"data-src",u),(0,_.Z)(t,m||"data-srcet",p),(0,_.Z)(t,"src",j),t),null);return(0,n.jsx)(n.Fragment,{children:x})}},4116:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return N}});var n,_=i(5893),a=i(7294),o=i(1664),s=i(1317),l=i(6893),r=i(3854),c=i(7516),d=i(3757),u=i(3634),p=i(4882),y=i(6972);!function(e){e.SUCCESS="SUCCESS",e.FAILURE="FAILURE",e.WARNING="WARNING",e.INFO="INFO"}(n||(n={}));var m=new Map([[n.SUCCESS,"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xhc3M9Im5taSIgY2xpcC1ydWxlPSJldmVub2RkIiBpbWFnZS1yZW5kZXJpbmc9Im9wdGltaXplUXVhbGl0eSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0icmdiYSgwLDAsMCwuMikiIGQ9Ik0yMCAwYzExLjAzIDAgMjAgOC45NyAyMCAyMHMtOC45NyAyMC0yMCAyMFMwIDMxLjAzIDAgMjAgOC45NyAwIDIwIDB6bTAgMzcuOThjOS45MiAwIDE3Ljk4LTguMDYgMTcuOTgtMTcuOThTMjkuOTIgMi4wMiAyMCAyLjAyIDIuMDIgMTAuMDggMi4wMiAyMCAxMC4wOCAzNy45OCAyMCAzNy45OHptLTIuNC0xMy4yOWwxMS41Mi0xMi45NmExLjAxIDEuMDEgMCAwIDEgMS40Mi0uMDggMSAxIDAgMCAxIC4wOSAxLjQyTDE4LjQ3IDI2Ljc0YS45OC45OCAwIDAgMS0uNzUuMzRjLS4yMyAwLS40NS0uMDctLjYzLS4yMmwtNy42LTYuMDdjLS40My0uMzUtLjUtLjk5LS4xNi0xLjQyLjM1LS40My45OS0uNSAxLjQyLS4xNmw2Ljg1IDUuNDh6IiBjbGFzcz0iZmlsMCIvPjwvc3ZnPg=="],[n.FAILURE,"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xhc3M9Im5taSIgY2xpcC1ydWxlPSJldmVub2RkIiBpbWFnZS1yZW5kZXJpbmc9Im9wdGltaXplUXVhbGl0eSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0icmdiYSgwLDAsMCwuMikiIGQ9Ik0yMCAwYzExLjAzIDAgMjAgOC45NyAyMCAyMHMtOC45NyAyMC0yMCAyMFMwIDMxLjAzIDAgMjAgOC45NyAwIDIwIDB6bTAgMzcuOThjOS45MiAwIDE3Ljk4LTguMDYgMTcuOTgtMTcuOThTMjkuOTIgMi4wMiAyMCAyLjAyIDIuMDIgMTAuMDggMi4wMiAyMCAxMC4wOCAzNy45OCAyMCAzNy45OHpNMjEuNDIgMjBsNi4xMyA2LjEyYy4zOS40LjM5IDEuMDQgMCAxLjQzLS4xOS4xOS0uNDUuMjktLjcxLjI5LS4yNyAwLS41My0uMS0uNzItLjI5TDIwIDIxLjQybC02LjEzIDYuMTNhLjk5Ljk5IDAgMCAxLS43MS4yOS45OS45OSAwIDAgMS0uNzEtLjI5IDEuMDIgMS4wMiAwIDAgMSAwLTEuNDNMMTguNTggMjBsLTYuMTMtNi4xM2MtLjM5LS4zOS0uMzktMS4wMyAwLTEuNDIuMzktLjM5IDEuMDMtLjM5IDEuNDIgMEwyMCAxOC41N2w2LjEyLTYuMTJjLjQtLjM5IDEuMDQtLjM5IDEuNDMgMCAuMzkuMzkuMzkgMS4wMyAwIDEuNDJMMjEuNDIgMjB6IiBjbGFzcz0iZmlsMCIvPjwvc3ZnPg=="],[n.WARNING,"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xhc3M9Im5taSIgY2xpcC1ydWxlPSJldmVub2RkIiBpbWFnZS1yZW5kZXJpbmc9Im9wdGltaXplUXVhbGl0eSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0icmdiYSgwLDAsMCwuMikiIGQ9Ik0yMS45MSAzLjQ4bDE3LjggMzAuODljLjg0IDEuNDYtLjIzIDMuMjUtMS45MSAzLjI1SDIuMmMtMS42OCAwLTIuNzUtMS43OS0xLjkxLTMuMjVsMTcuOC0zMC44OWMuODUtMS40NyAyLjk3LTEuNDcgMy44MiAwem0xNi4xNSAzMS44NEwyMC4yNiA0LjQzYS4zLjMgMCAwIDAtLjUyIDBMMS45NCAzNS4zMmMtLjEyLjIuMDUuNC4yNi40aDM1LjZjLjIxIDAgLjM4LS4yLjI2LS40ek0xOS4wNSAzMS4ydi0xLjA1YzAtLjUzLjQyLS45NS45NS0uOTVzLjk1LjQyLjk1Ljk1djEuMDVjMCAuNTMtLjQyLjk1LS45NS45NXMtLjk1LS40Mi0uOTUtLjk1em0wLTQuNjZWMTMuMTVhLjk1Ljk1IDAgMSAxIDEuOSAwdjEzLjM5YzAgLjUzLS40Mi45Ni0uOTUuOTZzLS45NS0uNDMtLjk1LS45NnoiIGNsYXNzPSJmaWwwIi8+PC9zdmc+"],[n.INFO,"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xhc3M9Im5taSIgY2xpcC1ydWxlPSJldmVub2RkIiBpbWFnZS1yZW5kZXJpbmc9Im9wdGltaXplUXVhbGl0eSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0icmdiYSgwLDAsMCwuMikiIGQ9Ik0yMCAwYzExLjAzIDAgMjAgOC45NyAyMCAyMHMtOC45NyAyMC0yMCAyMFMwIDMxLjAzIDAgMjAgOC45NyAwIDIwIDB6bTAgMzcuOThjOS45MiAwIDE3Ljk4LTguMDYgMTcuOTgtMTcuOThTMjkuOTIgMi4wMiAyMCAyLjAyIDIuMDIgMTAuMDggMi4wMiAyMCAxMC4wOCAzNy45OCAyMCAzNy45OHptLS45OS0yMy4zYzAtLjU0LjQ0LS45OC45OS0uOThzLjk5LjQ0Ljk5Ljk4djE1Ljg2YzAgLjU1LS40NC45OS0uOTkuOTlzLS45OS0uNDQtLjk5LS45OVYxNC42OHptMC01LjIyYzAtLjU1LjQ0LS45OS45OS0uOTlzLjk5LjQ0Ljk5Ljk5djEuMDljMCAuNTQtLjQ0Ljk5LS45OS45OXMtLjk5LS40NS0uOTktLjk5VjkuNDZ6IiBjbGFzcz0iZmlsMCIvPjwvc3ZnPg=="]]),g=i(907),f=i(2177),h=i.n(f);var N=function(){var e,t,i,n,f,N,j,M=d.attributes._dbNotifyPlayground,x=u._.app.name,v=null===M||void 0===M?void 0:M.namespace,A=(null===(e=p._j.find((function(e){return e.id===y.D.DOCUMENTATION})))||void 0===e?void 0:e.pathPage)||"/",I=(null===(t=p._j.find((function(e){return e.id===y.D.DOCUMENTATION})))||void 0===t?void 0:t.pathAs)||"/",b=(0,a.useState)(!0),w=b[0],S=b[1],L=function(e,t,i){s.Notify[e](t,i,u._.app.libraryOptions.notify)},O=(0,a.useRef)([]),D=(0,a.useRef)(null);return(0,_.jsxs)("div",{className:h().notify__playground,children:[(0,_.jsxs)("div",{className:h().notify__playground__head,children:[(0,_.jsx)("h2",{className:h().notify__playground__head__title,children:null===M||void 0===M?void 0:M.title}),(0,_.jsx)("button",{"aria-label":u._.app.text.switch,onClick:function(){S(!w)},className:["".concat(h().notify__playground__head__switch),"".concat(h()["notify__playground__head__switch--".concat(w?"module":"global")]||"")].join(" ").trim(),children:(0,_.jsx)("span",{className:h().notify__playground__head__switch__text,children:w?u._.app.text.module:u._.app.text.global})})]}),(0,_.jsxs)("div",{className:h().notify__playground__list,children:[null===M||void 0===M||null===(i=M.types)||void 0===i||null===(n=i.filter((function(e){return e.isActive})))||void 0===n||null===(f=n.sort((function(e,t){return e.sortOrder-t.sortOrder})))||void 0===f?void 0:f.map((function(e,t){return(0,_.jsx)("div",{className:["".concat(h().notify__playground__list__item),"".concat(h()["notify__playground__list__item--".concat(e.functionName)]||"")].join(" ").trim(),children:(0,_.jsxs)("div",{className:h().notify__playground__list__item__content,children:[(0,_.jsxs)("div",{className:h().notify__playground__list__item__head,children:[(0,_.jsx)("h3",{className:["".concat(h().notify__playground__list__item__head__title),"".concat(h()["notify__playground__list__item__head__title--".concat(e.functionName)]||"")].join(" ").trim(),children:[w?null:x,v,"".concat(e.functionName,"();")].filter((function(e){return e})).join(".")}),(0,_.jsx)(o.default,{href:A,as:"".concat("https://notiflix.github.io").concat(I).concat(e.docsRouteHash),passHref:!0,children:(0,_.jsxs)("a",{className:h().notify__playground__list__item__head__link,children:[(0,_.jsx)(l.nbt,{className:h().notify__playground__list__item__head__link__icon}),(0,_.jsx)("span",{children:M.docsText})]})})]}),(0,_.jsxs)("div",{className:h().notify__playground__list__item__usage,children:[(0,_.jsx)("div",{className:h().notify__playground__list__item__usage__code,children:(0,_.jsxs)("code",{className:"code code--medium",children:[(0,_.jsx)("span",{className:"code__lvl1 code__lvl--pb0",children:(0,_.jsx)("span",{className:"code__comment code__comment--fullbeginning"})}),M.comments.map((function(e,t){return(0,_.jsx)("span",{className:"code__lvl1 code__lvl--py0",children:(0,_.jsx)("span",{className:"code__comment code__comment--fullmiddle",children:e})},t)})),(0,_.jsx)("span",{className:"code__lvl1 code__lvl--py0",children:(0,_.jsx)("span",{className:"code__comment code__comment--fullend"})}),(0,_.jsxs)("span",{className:"code__lvl1",children:[!w&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("span",{className:"code__namespace",children:x}),(0,_.jsx)("span",{children:"."})]}),(0,_.jsx)("span",{className:"code__namespace",children:v}),(0,_.jsx)("span",{children:"."}),(0,_.jsx)("span",{className:"code__func",children:e.functionName}),(0,_.jsx)("span",{children:"("}),(0,_.jsx)("span",{className:"code__string",children:"'".concat(e.defaultValue,"'")}),(0,_.jsx)("span",{children:");"})]})]})}),(0,_.jsxs)("div",{className:h().notify__playground__list__item__usage__preview,children:[(0,_.jsx)(r.AgX,{className:h().notify__playground__list__item__usage__preview__arrow}),(0,_.jsxs)("div",{onClick:function(){return L(e.functionName,e.defaultValue)},className:["".concat(h().notify__playground__list__item__usage__preview__item),"".concat(h()["notify__playground__list__item__usage__preview__item--".concat(e.functionName)]||"")].join(" ").trim(),children:[(0,_.jsx)("svg",{className:h().notify__playground__list__item__usage__preview__item__arrow,width:"40",height:"54",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 54",children:(0,_.jsx)("path",{fill:"currentColor",d:"M28.45 2.32h-3.49c-7.04 0-12.34 2.11-15.98 5.49-4.04 3.76-6.03 9.13-6.03 14.93 0 5.81 1.99 11.17 6.03 14.93 3.57 3.32 8.76 5.41 15.6 5.49-1.11-2.37-2.12-4.08-3.11-6.68-.29-.77.7-1.25 1.28-.98 5.09 2.37 10.08 4.9 14.99 7.61.43.23.57 1.01.13 1.35-4.49 3.47-9.32 6.1-14.63 7.96-.58.2-1.28-.44-1.02-1.05l2.44-6.59c-7.32-.06-12.89-2.32-16.76-5.92-4.39-4.08-6.55-9.87-6.55-16.12 0-6.24 2.16-12.03 6.55-16.12C11.82 2.98 17.49.71 24.96.71h3.49a.805.805 0 1 1 0 1.61zm7.57 41.63c-4.06-2.21-8.19-4.31-12.37-6.3.85 1.9 1.85 3.73 2.71 5.64.17.38.18.78.03 1.18l-2.21 5.97c4.23-1.62 8.17-3.78 11.84-6.49z"})}),(0,_.jsx)(g.Z,{threshold:.25,className:h().notify__playground__list__item__usage__preview__item__icon,classNameLoaded:h()["notify__playground__list__item__usage__preview__item__icon--loaded"],width:"40",height:"40",src:(i=e.id,m.get(i)||""),alt:e.functionName}),(0,_.jsx)("span",{children:e.defaultValue})]})]})]}),(0,_.jsxs)("div",{className:h().notify__playground__list__item__demo,children:[(0,_.jsxs)("div",{className:h().notify__playground__list__item__demo__head,children:[(0,_.jsx)("h4",{className:h().notify__playground__list__item__demo__head__title,children:M.demoTitle}),(0,_.jsx)("p",{className:h().notify__playground__list__item__demo__head__description,children:M.demoDescription})]}),(0,_.jsxs)("div",{className:h().notify__playground__list__item__demo__code,children:[(0,_.jsx)("code",{className:"code code--medium",children:(0,_.jsxs)("span",{className:"code__lvl1",children:[!w&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("span",{className:"code__namespace",children:x}),(0,_.jsx)("span",{children:"."})]}),(0,_.jsx)("span",{className:"code__namespace",children:v}),(0,_.jsx)("span",{children:"."}),(0,_.jsx)("span",{className:"code__func",children:e.functionName}),(0,_.jsx)("span",{children:"("}),(0,_.jsx)("span",{className:"code__string",children:"'"}),(0,_.jsx)("span",{className:"code__string",children:(0,_.jsx)("input",{ref:function(e){return O.current[t]=e},className:"code__input",placeholder:M.demoInputPlaceholder,type:"text"})}),(0,_.jsx)("span",{className:"code__string",children:"'"}),(0,_.jsx)("span",{children:");"})]})}),(0,_.jsxs)("button",{"aria-label":M.demoButton,type:"button",onClick:function(){return function(e,t){var i,n,_=(null===(i=O.current[t])||void 0===i?void 0:i.value)||"";_?L(e,_):null===(n=O.current[t])||void 0===n||n.focus()}(e.functionName,t)},className:h().notify__playground__list__item__demo__code__button,children:[(0,_.jsx)(c.DBs,{className:h().notify__playground__list__item__demo__code__button__icon}),(0,_.jsx)("span",{children:M.demoButton})]})]})]})]})},t);var i})),(0,_.jsx)("div",{className:["".concat(h().notify__playground__list__item),"".concat(h()["notify__playground__list__item--callback"]||"")].join(" ").trim(),children:(0,_.jsxs)("div",{className:h().notify__playground__list__item__content,children:[(0,_.jsxs)("div",{className:h().notify__playground__list__item__head,children:[(0,_.jsx)("h3",{className:h().notify__playground__list__item__head__title,children:null===M||void 0===M?void 0:M.callbackTitle}),(0,_.jsx)("p",{className:h().notify__playground__list__item__head__description,children:null===M||void 0===M?void 0:M.callbackDescription})]}),(0,_.jsx)("div",{className:h().notify__playground__list__item__demo,children:(0,_.jsxs)("div",{className:h().notify__playground__list__item__demo__code,children:[(0,_.jsxs)("code",{className:"code code--medium",children:[(0,_.jsxs)("span",{className:"code__lvl1 code__lvl--pb0",children:[!w&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("span",{className:"code__namespace",children:x}),(0,_.jsx)("span",{children:"."})]}),(0,_.jsx)("span",{className:"code__namespace",children:v}),(0,_.jsx)("span",{children:"."}),(0,_.jsx)("span",{className:"code__func",children:null===M||void 0===M||null===(N=M.types.find((function(e){return e})))||void 0===N?void 0:N.functionName}),(0,_.jsx)("span",{children:"("}),(0,_.jsx)("span",{className:"code__string",children:"'".concat(null===M||void 0===M?void 0:M.callbackMessage,"'")}),(0,_.jsx)("span",{children:", "}),w?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("span",{children:"() "}),(0,_.jsx)("span",{className:"code__boolean",children:"=>"}),(0,_.jsx)("span",{children:" {"})]}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("span",{className:"code__boolean",children:"function"}),(0,_.jsx)("span",{className:"code__func",children:" cb"}),(0,_.jsx)("span",{children:"() {"})]})]}),(0,_.jsxs)("span",{className:"code__lvl2 code__lvl--py0",children:[(0,_.jsx)("span",{className:"code__func",children:"alert"}),(0,_.jsx)("span",{children:"("}),(0,_.jsx)("span",{className:"code__string",children:"'"}),(0,_.jsx)("span",{className:"code__string",children:(0,_.jsx)("input",{ref:D,className:"code__input",placeholder:null===M||void 0===M?void 0:M.callbackInputPlaceholder,type:"text"})}),(0,_.jsx)("span",{className:"code__string",children:"'"}),(0,_.jsx)("span",{children:");"})]}),(0,_.jsx)("span",{className:"code__lvl1 code__lvl--pt0",children:(0,_.jsx)("span",{children:"});"})})]}),(0,_.jsxs)("button",{"aria-label":null===M||void 0===M?void 0:M.callbackButton,type:"button",onClick:function(){var e,t,i,n=null===M||void 0===M||null===(e=M.types.find((function(e){return e})))||void 0===e?void 0:e.functionName,_=(null===(t=D.current)||void 0===t?void 0:t.value)||"";n&&_?L(n,(null===M||void 0===M?void 0:M.callbackMessage)||"",(function(){alert(_)})):null===(i=D.current)||void 0===i||i.focus()},className:h().notify__playground__list__item__demo__code__button,children:[(0,_.jsx)(c.DBs,{className:h().notify__playground__list__item__demo__code__button__icon}),(0,_.jsx)("span",{children:null===M||void 0===M?void 0:M.callbackButton})]})]})})]})}),(0,_.jsx)("div",{className:["".concat(h().notify__playground__list__item),"".concat(h()["notify__playground__list__item--extend"]||"")].join(" ").trim(),children:(0,_.jsxs)("div",{className:h().notify__playground__list__item__content,children:[(0,_.jsxs)("div",{className:h().notify__playground__list__item__head,children:[(0,_.jsx)("h3",{className:h().notify__playground__list__item__head__title,children:null===M||void 0===M?void 0:M.extendTitle}),(0,_.jsx)("p",{className:h().notify__playground__list__item__head__description,children:null===M||void 0===M?void 0:M.extendDescription}),(0,_.jsx)(o.default,{href:A,as:"".concat("https://notiflix.github.io").concat(I).concat(null===M||void 0===M?void 0:M.extendDocsRouteHash),passHref:!0,children:(0,_.jsxs)("a",{className:h().notify__playground__list__item__head__link,children:[(0,_.jsx)(l.nbt,{className:h().notify__playground__list__item__head__link__icon}),(0,_.jsx)("span",{children:null===M||void 0===M?void 0:M.extendDocsText})]})})]}),(0,_.jsx)("div",{className:h().notify__playground__list__item__usage,children:(0,_.jsx)("div",{className:h().notify__playground__list__item__usage__code,children:(0,_.jsxs)("code",{className:"code code--medium",children:[(0,_.jsxs)("span",{className:"code__lvl1 code__lvl--pb0",children:[!w&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("span",{className:"code__namespace",children:x}),(0,_.jsx)("span",{children:"."})]}),(0,_.jsx)("span",{className:"code__namespace",children:v}),(0,_.jsx)("span",{children:"."}),(0,_.jsx)("span",{className:"code__func",children:null===M||void 0===M||null===(j=M.types.find((function(e){return e})))||void 0===j?void 0:j.functionName}),(0,_.jsx)("span",{children:"("}),(0,_.jsx)("span",{className:"code__string",children:"'".concat(null===M||void 0===M?void 0:M.extendMessage,"'")}),(0,_.jsx)("span",{children:", {"})]}),(0,_.jsxs)("span",{className:"code__lvl2 code__lvl--py0",children:[(0,_.jsx)("span",{className:"code__attr",children:"ID: "}),(0,_.jsx)("span",{className:"code__string",children:"'MKA'"}),(0,_.jsx)("span",{children:","})]}),(0,_.jsxs)("span",{className:"code__lvl2 code__lvl--py0",children:[(0,_.jsx)("span",{className:"code__attr",children:"timeout: "}),(0,_.jsx)("span",{className:"code__number",children:"1923"}),(0,_.jsx)("span",{children:","})]}),(0,_.jsxs)("span",{className:"code__lvl2 code__lvl--py0",children:[(0,_.jsx)("span",{className:"code__attr",children:"showOnlyTheLastOne: "}),(0,_.jsx)("span",{className:"code__boolean",children:"true"}),(0,_.jsx)("span",{children:","})]}),(0,_.jsx)("span",{className:"code__lvl1 code__lvl--pt0",children:(0,_.jsx)("span",{children:"});"})})]})})})]})})]})]})}},2177:function(e){e.exports={notify__playground:"NotifyPlayground_notify__playground__3EqFw",notify__playground__head:"NotifyPlayground_notify__playground__head__21QXU",notify__playground__head__title:"NotifyPlayground_notify__playground__head__title__2cdi4",notify__playground__head__switch:"NotifyPlayground_notify__playground__head__switch__2WXCV","notify__playground__head__switch--module":"NotifyPlayground_notify__playground__head__switch--module__1nClu",notify__playground__head__switch__text:"NotifyPlayground_notify__playground__head__switch__text__3WDsH",notify__playground__list:"NotifyPlayground_notify__playground__list__FJ_Dm",notify__playground__list__item:"NotifyPlayground_notify__playground__list__item__1yvEg",notify__playground__list__item__content:"NotifyPlayground_notify__playground__list__item__content__2zIAk",notify__playground__list__item__head:"NotifyPlayground_notify__playground__list__item__head__3O5RK",notify__playground__list__item__head__title:"NotifyPlayground_notify__playground__list__item__head__title__3iZxF","notify__playground__list__item__head__title--success":"NotifyPlayground_notify__playground__list__item__head__title--success__2uJA2","notify__playground__list__item__head__title--failure":"NotifyPlayground_notify__playground__list__item__head__title--failure__3mrea","notify__playground__list__item__head__title--warning":"NotifyPlayground_notify__playground__list__item__head__title--warning__2aTRK","notify__playground__list__item__head__title--info":"NotifyPlayground_notify__playground__list__item__head__title--info__23iQ7",notify__playground__list__item__head__description:"NotifyPlayground_notify__playground__list__item__head__description__14hIB",notify__playground__list__item__head__link:"NotifyPlayground_notify__playground__list__item__head__link__1Jfh0",notify__playground__list__item__head__link__icon:"NotifyPlayground_notify__playground__list__item__head__link__icon__jnIRP","notify__playground__list__item--callback":"NotifyPlayground_notify__playground__list__item--callback__28Nxi",notify__playground__list__item__usage:"NotifyPlayground_notify__playground__list__item__usage__3tTVW",notify__playground__list__item__usage__code:"NotifyPlayground_notify__playground__list__item__usage__code__3fnoK",notify__playground__list__item__usage__preview:"NotifyPlayground_notify__playground__list__item__usage__preview__2pYt1",notify__playground__list__item__usage__preview__arrow:"NotifyPlayground_notify__playground__list__item__usage__preview__arrow__2PYWR",notify__playground__list__item__usage__preview__item:"NotifyPlayground_notify__playground__list__item__usage__preview__item__2S_Ir","notify__playground__list__item__usage__preview__item--success":"NotifyPlayground_notify__playground__list__item__usage__preview__item--success__15qLU","notify__playground__list__item__usage__preview__item--failure":"NotifyPlayground_notify__playground__list__item__usage__preview__item--failure__2ZC8c","notify__playground__list__item__usage__preview__item--warning":"NotifyPlayground_notify__playground__list__item__usage__preview__item--warning__2Rkba","notify__playground__list__item__usage__preview__item--info":"NotifyPlayground_notify__playground__list__item__usage__preview__item--info__28WKM",notify__playground__list__item__usage__preview__item__arrow:"NotifyPlayground_notify__playground__list__item__usage__preview__item__arrow__2wDSg",notify__playground__list__item__usage__preview__item__icon:"NotifyPlayground_notify__playground__list__item__usage__preview__item__icon__1Nq-P","notify__playground__list__item--extend":"NotifyPlayground_notify__playground__list__item--extend__2tqe4",notify__playground__list__item__demo:"NotifyPlayground_notify__playground__list__item__demo__2a4PT",notify__playground__list__item__demo__head:"NotifyPlayground_notify__playground__list__item__demo__head__2jumP",notify__playground__list__item__demo__head__title:"NotifyPlayground_notify__playground__list__item__demo__head__title__1jpKO",notify__playground__list__item__demo__head__description:"NotifyPlayground_notify__playground__list__item__demo__head__description__1dAng",notify__playground__list__item__demo__code:"NotifyPlayground_notify__playground__list__item__demo__code__1-JrL",notify__playground__list__item__demo__code__button:"NotifyPlayground_notify__playground__list__item__demo__code__button__3hPmb",notify__playground__list__item__demo__code__button__icon:"NotifyPlayground_notify__playground__list__item__demo__code__button__icon__1xPc5"}},1664:function(e,t,i){e.exports=i(2167)},8216:function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}i.d(t,{Z:function(){return n}})}}]);