(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2593],{6195:function(e){e.exports={attributes:{_dbAppContent:{noscript:{message:"You have to enable JavaScript in your browser to use Notiflix."},footer:{gitHubName:"/furcan",gitHubUrl:"https://github.com/furcan"},buttons:{module:"Module",global:"Global",switch:"Switch",menu:"Menu",open:"Open",close:"Close",copy:"Copy",goToTop:"Go to top",navigation:"Navigation"},date:{monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"]},browsers:{ieTitle:"Here we go...",ieDescription:"It might be time to switch your browser. Or, you can use the repository link below.",ieLinkText:"Go to GitHub",ieLinkUrl:"https://github.com/notiflix/Notiflix"}}},html:""}},4368:function(e){e.exports={attributes:{_dbPageMeta:{routeId:"CONFIRM",lastModifiedDate:"2021-10-29",title:"Confirm | Notiflix",description:'Notiflix Confirm module can be used to show non-blocking prompt boxes. This module includes 2 types of prompts: "Show" and "Ask". An additional question can be asked as well within the prompt box if using the "Ask" one.',robots:"noindex, nofollow, noodp, noydir",ogImage:null,themeColor:null},_dbConfirmBanner:{importNamespace:"Confirm",title:"Confirm",description:'Notiflix Confirm module can be used to show non-blocking prompt boxes. This module includes 2 types of prompts: "Show" and "Ask". An additional question can be asked as well within the prompt box if using the "Ask" one.',importDescription:"(A) Import as a Module",htmlDescription:"(B) Add to an HTML page (Global)",htmlOneByOne:"(B1) CSS and JS",htmlOneByOneCSS:"../dist/notiflix-X.X.X.min.css",htmlOneByOneJS:"../dist/notiflix-X.X.X.min.js",htmlAllInOne:"(B2) or only JS (All in One => Internal CSS)",htmlAllInOneJS:"../dist/notiflix-aio-X.X.X.min.js"},_dbConfirmPlayground:{title:"Playground",namespace:"Confirm",methods:{show:{id:"SHOW",functionName:"show",infoDescription:"The title, the message/question, the OK button text, and the Cancel button text are the first four parameters in string format. The fifth and the sixth parameters are callback functions that are related to the OK and the Cancel button elements in order. The seventh and last parameter is the options parameter that extending the initialize options with the new options for each confirm box. Whether these parameters are Required or Optional is explained in the comments below.",infoDocsLinkText:"All Options",infoDocsLinkRouteHash:"#DocsConfirm",comments:["@param1 {string}: Required, title text in string format.","@param2 {string}: Required, message/question in string format.","@param3 {string}: Required, OK button text in string format.","@param4 {string}: Optional, Cancel button text in string format.","@param5 {function}: Optional, a callback function that will be called when the OK button element has been clicked.","@param6 {function}: Optional, a callback function that will be called when the Cancel button element has been clicked.","@param7 {Object}: Optional, extending the initialize options with new the options for each confirm box."],defaultValueTitle:"Notiflix Confirm",defaultValueQuestion:"Do you agree with me?",defaultValueButtonOk:"Yes",defaultValueButtonOkCallbackFn:"okCb",defaultValueButtonOkCallbackTxt:"Thank you.",defaultValueButtonCancel:"No",defaultValueButtonCancelCallbackFn:"cancelCb",defaultValueButtonCancelCallbackTxt:"If you say so...",defaultValueOptionsComment:"Custom options",demoInfoTitle:"Demo",demoInputPlaceholderTitle:"Title",demoInputPlaceholderQuestion:"Message",demoInputPlaceholderOkButton:"OK Button",demoInputPlaceholderCancelButton:"Cancel Button",demoInputPlaceholderOkButtonCallback:"OK alert message",demoInputPlaceholderCancelButtonCallback:"Cancel alert message",demoButtonText:"Send"},ask:{id:"ASK",functionName:"ask",infoDescription:"The title, the question, the answer to the question, the OK button text, and the Cancel button text are the first fifth parameters in string format. The sixth and the seventh parameters are callback functions that are related to the OK and the Cancel button elements in order. The eighth and last parameter is the options parameter that extending the initialize options with the new options for each confirm box. Whether these parameters are Required or Optional is explained in the comments below.",infoDocsLinkText:"All Options",infoDocsLinkRouteHash:"#DocsConfirm",comments:["@param1 {string}: Required, title text in string format.","@param2 {string}: Required, question text in string format.","@param3 {string}: Required, answer text in string format.","@param4 {string}: Required, OK button text in string format.","@param5 {string}: Optional, Cancel button text in string format.","@param6 {function}: Optional, a callback function that will be called when the OK button element has been clicked.","@param7 {function}: Optional, a callback function that will be called when the Cancel button element has been clicked.","@param8 {Object}: Optional, extending the initialize options with new the options for each confirm box."],defaultValueTitle:"Where is Padm\xe9?",defaultValueQuestion:"Is she safe? Is she all right?",defaultValueAnswer:"It seems, in your anger, you killed her.",defaultValueButtonOk:"Answer",defaultValueButtonOkCallbackFn:"okCb",defaultValueButtonOkCallbackTxt:"\ud83d\ude21 NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!!!",defaultValueButtonCancel:"Cancel",defaultValueButtonCancelCallbackFn:"cancelCb",defaultValueButtonCancelCallbackTxt:"\ud83d\ude2a ...",defaultValueOptionsComment:"Custom options",demoInfoTitle:"Demo",demoInputPlaceholderTitle:"Title",demoInputPlaceholderQuestion:"Question",demoInputPlaceholderAnswer:"Answer",demoInputPlaceholderOkButton:"OK Button",demoInputPlaceholderCancelButton:"Cancel Button",demoInputPlaceholderOkButtonCallback:"OK alert message",demoInputPlaceholderCancelButtonCallback:"Cancel alert message",demoButtonText:"Send"}}}},html:""}},2167:function(e,t,n){"use strict";var a=n(3848);t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},r=n(1063),l=n(4651),s=n(7426);var u={};function d(e,t,n,a){if(e&&r.isLocalURL(t)){e.prefetch(t,n,a).catch((function(e){0}));var o=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var c=function(e){var t,n=!1!==e.prefetch,o=l.useRouter(),c=i.default.useMemo((function(){var t=r.resolveHref(o,e.href,!0),n=a(t,2),i=n[0],l=n[1];return{href:i,as:e.as?r.resolveHref(o,e.as):l||i}}),[o,e.href,e.as]),p=c.href,m=c.as,h=e.children,f=e.replace,g=e.shallow,y=e.scroll,b=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var O=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,_=s.useIntersection({rootMargin:"200px"}),C=a(_,2),w=C[0],x=C[1],v=i.default.useCallback((function(e){w(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,w]);i.default.useEffect((function(){var e=x&&n&&r.isLocalURL(p),t="undefined"!==typeof b?b:o&&o.locale,a=u[p+"%"+m+(t?"%"+t:"")];e&&!a&&d(o,p,m,{locale:t})}),[m,p,x,b,n,o]);var k={ref:v,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,a,o,i,l,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&r.isLocalURL(n))&&(e.preventDefault(),null==l&&a.indexOf("#")>=0&&(l=!1),t[o?"replace":"push"](n,a,{shallow:i,locale:s,scroll:l}))}(e,o,p,m,f,g,y,b)},onMouseEnter:function(e){r.isLocalURL(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(o,p,m,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var T="undefined"!==typeof b?b:o&&o.locale,I=o&&o.isLocaleDomain&&r.getDomainLocale(m,T,o&&o.locales,o&&o.domainLocales);k.href=I||r.addBasePath(r.addLocale(m,T,o&&o.defaultLocale))}return i.default.cloneElement(t,k)};t.default=c},7426:function(e,t,n){"use strict";var a=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!r,s=o.useRef(),u=o.useState(!1),d=a(u,2),c=d[0],p=d[1],m=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||c||e&&e.tagName&&(s.current=function(e,t,n){var a=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:o,elements:a}),n}(n),o=a.id,i=a.observer,r=a.elements;return r.set(e,t),i.observe(e),function(){r.delete(e),i.unobserve(e),0===r.size&&(i.disconnect(),l.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,c]);return o.useEffect((function(){if(!r&&!c){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[c]),[m,c]};var o=n(7294),i=n(3447),r="undefined"!==typeof IntersectionObserver;var l=new Map},3634:function(e,t,n){"use strict";n.d(t,{_:function(){return i}});var a=JSON.parse('{"name":"notiflix-documentation","version":"1.0.0-Beta.01","homepage":"https://notiflix.github.io","description":"Notiflix","private":true,"scripts":{"startup:lint":"eslint src","startup:compile":"tsc --resolveJsonModule --outDir .dev --target ES5 src/application/helpers/sitemap-generator/index.ts","startup:run":"node .dev/src/application/helpers/sitemap-generator/index.js","startup":"yarn startup:lint && yarn startup:compile && yarn startup:run","lint:stylelint":"stylelint \\"src/**/*.{scss,sass}\\" --config .stylelintrc.json","lint:eslint":"eslint next.config.js && eslint src && next lint","lint":"yarn lint:stylelint && yarn lint:eslint","dev":"yarn startup && yarn lint && next dev","build":"yarn startup && yarn lint && next build","start":"yarn startup && yarn lint && next start","deploy":"yarn build && next export -o .dist"},"dependencies":{"next":"11.1.0","notiflix":"^3.0.2","react":"17.0.2","react-dom":"17.0.2"},"devDependencies":{"@ts-stack/markdown":"^1.4.0","@types/js-yaml":"^4.0.3","@types/react":"17.0.26","@typescript-eslint/eslint-plugin":"^4.32.0","eslint":"7.32.0","eslint-config-next":"11.1.0","fork-ts-checker-webpack-plugin":"^6.3.3","frontmatter-markdown-loader":"^3.6.3","js-yaml":"^4.1.0","react-icons":"^4.2.0","sass":"^1.42.1","stylelint":"^13.13.1","stylelint-config-standard":"^22.0.0","stylelint-scss":"^3.21.0","stylelint-webpack-plugin":"^3.0.1","typescript":"4.4.3"},"browserslist":{"production":["> 1%","last 4 versions","not ie < 11","not dead","not op_mini all","iOS >=7"],"development":["IE 11","last 1 chrome version","last 1 firefox version","last 1 safari version"]}}'),o=n.t(a,2),i={app:{url:(JSON.stringify((o||{}).homepage)||"").replace(/"/gm,""),version:(JSON.stringify((o||{}).version)||"").replace(/"/gm,""),name:(JSON.stringify((o||{}).description)||"").replace(/"/gm,""),ogImagePath:"/webapp/notiflix-og.jpg",libraryOptions:{notify:{fontFamily:"Red Hat Display",plainText:!1},report:{fontFamily:"Red Hat Display",plainText:!1},confirm:{fontFamily:"Red Hat Display",plainText:!1},loading:{fontFamily:"Red Hat Display",clickToClose:!0},block:{fontFamily:"Red Hat Display"}}},api:{urlGitHubRepo:"https://api.github.com/repos/notiflix/Notiflix",urlGitHubReleases:"https://api.github.com/repos/notiflix/Notiflix/releases",urlNPMDownloads:"https://api.npmjs.org/downloads/range/2019-01-01:2042-01-01/notiflix"}}},6972:function(e,t,n){"use strict";var a;n.d(t,{D:function(){return a}}),function(e){e.HOME="HOME",e.NOTIFY="NOTIFY",e.REPORT="REPORT",e.CONFIRM="CONFIRM",e.LOADING="LOADING",e.BLOCK="BLOCK",e.DOWNLOAD="DOWNLOAD",e.DOCUMENTATION="DOCUMENTATION"}(a||(a={}))},4882:function(e,t,n){"use strict";n.d(t,{_j:function(){return i}});var a=n(6893),o=n(6972),i=[{id:o.D.HOME,sortOrder:1,isActive:!0,isProductPage:!1,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"daily",sitemapPriority:"1.0",showInHeaderMenu:!1,showInFooterMenu:!1,isTargetBlank:!1,prefetch:!1,name:"Home",pathPage:"/home",pathAs:"/",pathDBFile:"src/_database/pages/home.md",IconComponent:a.m6D},{id:o.D.NOTIFY,sortOrder:2,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Notify",pathPage:"/notify",pathAs:"/notify",pathDBFile:"src/_database/pages/notify.md",IconComponent:a.vWP},{id:o.D.REPORT,sortOrder:3,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Report",pathPage:"/report",pathAs:"/report",pathDBFile:"src/_database/pages/report.md",IconComponent:a.H33},{id:o.D.CONFIRM,sortOrder:4,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Confirm",pathPage:"/confirm",pathAs:"/confirm",pathDBFile:"src/_database/pages/confirm.md",IconComponent:a._rq},{id:o.D.LOADING,sortOrder:5,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Loading",pathPage:"/loading",pathAs:"/loading",pathDBFile:"src/_database/pages/loading.md",IconComponent:a.dAq},{id:o.D.BLOCK,sortOrder:6,isActive:!0,isProductPage:!0,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"weekly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Block",pathPage:"/block",pathAs:"/block",pathDBFile:"src/_database/pages/block.md",IconComponent:a.bfl},{id:o.D.DOWNLOAD,sortOrder:7,isActive:!0,isProductPage:!1,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"monthly",sitemapPriority:"0.9",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Download",pathPage:"/download",pathAs:"/download",pathDBFile:"src/_database/pages/download.md",IconComponent:a.wzc},{id:o.D.DOCUMENTATION,sortOrder:8,isActive:!0,isProductPage:!1,addToNextJSConfig:!0,addToSitemap:!0,sitemapFrequency:"monthly",sitemapPriority:"1.0",showInHeaderMenu:!0,showInFooterMenu:!0,isTargetBlank:!1,prefetch:!1,name:"Documentation",pathPage:"/documentation",pathAs:"/documentation",pathDBFile:"src/_database/pages/documentation.md",IconComponent:a.yK7}]},3047:function(e,t,n){"use strict";n.r(t);var a=n(5893),o=n(7294),i=n(6195),r=n(4368),l=n(6945),s=n(2318),u=n.n(s);t.default=function(){var e,t,n,s,d,c=i.attributes._dbAppContent,p=r.attributes._dbConfirmPlayground,m=(0,o.useState)(!0),h=m[0],f=m[1];return(0,a.jsxs)("div",{className:u().playground,children:[(0,a.jsxs)("div",{className:u().playground__head,children:[(0,a.jsx)("h2",{className:u().playground__head__title,children:null===p||void 0===p?void 0:p.title}),(0,a.jsx)("button",{"aria-label":null===c||void 0===c||null===(e=c.buttons)||void 0===e?void 0:e.switch,type:"button",onClick:function(){f(!h)},className:["".concat(u().playground__head__switch),"".concat(u()["playground__head__switch--".concat(h?"module":"global")]||"")].join(" ").trim(),children:(0,a.jsx)("span",{className:u().playground__head__switch__text,children:h?null===c||void 0===c||null===(t=c.buttons)||void 0===t?void 0:t.module:null===c||void 0===c||null===(n=c.buttons)||void 0===n?void 0:n.global})})]}),(0,a.jsxs)("div",{className:u().playground__items,children:[(null===p||void 0===p||null===(s=p.methods)||void 0===s?void 0:s.show)&&(0,a.jsx)(l.default,{isModule:h,namespace:p.namespace,data:p.methods.show}),(null===p||void 0===p||null===(d=p.methods)||void 0===d?void 0:d.ask)&&(0,a.jsx)(l.default,{isModule:h,namespace:p.namespace,data:p.methods.ask})]})]})}},9255:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/confirm/partials/playground/Playground",function(){return n(3047)}])},2318:function(e){e.exports={playground:"Playground_playground__1r_gu",playground__head:"Playground_playground__head__2J5ni",playground__head__title:"Playground_playground__head__title__1o1d4",playground__head__switch:"Playground_playground__head__switch__1W57h","playground__head__switch--module":"Playground_playground__head__switch--module__cYG_7",playground__head__switch__text:"Playground_playground__head__switch__text__2OC8j",playground__items:"Playground_playground__items__3gv1J"}},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[6556,3874,6893,1317,6945,9774,2888,179],(function(){return t=9255,e(e.s=t);var t}));var t=e.O();_N_E=t}]);