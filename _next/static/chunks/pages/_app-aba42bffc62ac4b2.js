(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2888],{6195:function(t){t.exports={attributes:{_dbAppContent:{noscript:{message:"You have to enable JavaScript in your browser to use Notiflix."},footer:{appVersion:"App version:",gitHubName:"/furcan",gitHubUrl:"https://github.com/furcan"},buttons:{module:"Module",global:"Global",switch:"Switch",menu:"Menu",open:"Open",close:"Close",copy:"Copy",goToTop:"Go to top",navigation:"Navigation"},date:{monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"]},browsers:{ieTitle:"Here we go...",ieDescription:"It might be time to switch your browser. Or, you can use the repository link below.",ieLinkText:"Go to GitHub",ieLinkUrl:"https://github.com/notiflix/Notiflix"}}},html:""}},6363:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e(2957)}])},2319:function(t,n,e){"use strict";e.d(n,{_:function(){return i}});var r=JSON.parse('{"name":"notiflix-documentation","version":"1.1.6","homepage":"https://notiflix.github.io","description":"Notiflix","private":true,"scripts":{"startup:lint":"eslint src","startup:compile":"tsc --resolveJsonModule --outDir .dev --target ES5 src/application/helpers/sitemap-generator/index.ts","startup:run":"node .dev/src/application/helpers/sitemap-generator/index.js","startup":"yarn startup:lint && yarn startup:compile && yarn startup:run","lint:stylelint":"stylelint \\"src/**/*.{scss,sass}\\" --config .stylelintrc.json","lint:eslint":"eslint next.config.js && eslint src && next lint","lint":"yarn lint:stylelint && yarn lint:eslint","dev":"yarn startup && yarn lint && next dev","build":"yarn startup && yarn lint && next build","start":"yarn startup && yarn lint && next start","deploy":"yarn build && next export -o .dist"},"dependencies":{"next":"12.0.7","notiflix":"^3.2.8","react":"17.0.2","react-dom":"17.0.2"},"devDependencies":{"@ts-stack/markdown":"^1.4.0","@types/js-yaml":"^4.0.5","@types/react":"17.0.37","@typescript-eslint/eslint-plugin":"^5.6.0","eslint":"7.32.0","eslint-config-next":"12.0.7","fork-ts-checker-webpack-plugin":"^6.5.0","frontmatter-markdown-loader":"^3.6.3","js-yaml":"^4.1.0","react-icons":"^4.3.1","sass":"^1.45.0","stylelint":"^13.13.1","stylelint-config-standard":"^22.0.0","stylelint-scss":"^3.21.0","stylelint-webpack-plugin":"^3.1.0","typescript":"4.5.3"},"browserslist":{"production":["> 1%","last 4 versions","not ie < 11","not dead","not op_mini all","iOS >=7"],"development":["IE 11","last 1 chrome version","last 1 firefox version","last 1 safari version"]}}'),o=e.t(r,2),i={app:{url:(JSON.stringify((o||{}).homepage)||"").replace(/"/gm,""),version:(JSON.stringify((o||{}).version)||"").replace(/"/gm,""),name:(JSON.stringify((o||{}).description)||"").replace(/"/gm,""),ogImagePath:"/webapp/notiflix-og.jpg",libraryOptions:{notify:{fontFamily:"Red Hat Display",plainText:!1},report:{fontFamily:"Red Hat Display",plainText:!1},confirm:{fontFamily:"Red Hat Display",plainText:!1},loading:{fontFamily:"Red Hat Display",clickToClose:!0},block:{fontFamily:"Red Hat Display"}}},api:{urlGitHubRepo:"https://api.github.com/repos/notiflix/Notiflix",urlGitHubReleases:"https://api.github.com/repos/notiflix/Notiflix/releases",urlNPMDownloads:"https://api.npmjs.org/downloads/range/2019-01-01:2042-01-01/notiflix"}}},8869:function(t,n,e){"use strict";e.d(n,{rQ:function(){return v},Ux:function(){return m},lU:function(){return h},Je:function(){return b},ij:function(){return g},bS:function(){return w},gR:function(){return x},XX:function(){return O},xg:function(){return S},fW:function(){return _},um:function(){return j},$F:function(){return N},vZ:function(){return R},AK:function(){return D}});var r=e(6195),o=e(2319);function i(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function u(t,n,e){return(u=i()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&s(o,e.prototype),o}).apply(null,arguments)}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,n){return null!=n&&"undefined"!==typeof Symbol&&n[Symbol.hasInstance]?n[Symbol.hasInstance](t):t instanceof n}function l(t,n){return!n||"object"!==p(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function s(t,n){return(s=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function f(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,o=!1,i=void 0;try{for(var u,c=t[Symbol.iterator]();!(r=(u=c.next()).done)&&(e.push(u.value),!n||e.length!==n);r=!0);}catch(a){o=!0,i=a}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function d(t){var n="function"===typeof Map?new Map:void 0;return(d=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return u(t,arguments,c(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,t)})(t)}function y(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=c(t);if(n){var o=c(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return l(this,e)}}var v=function(t){!function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&s(t,n)}(e,t);var n=y(e);function e(t,r){var o;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),(o=n.call(this,t)).status=0,o.status=r,o}return e}(d(Error)),m=function(t){0},h=function(t){0},b=function(t){return new Promise((function(n){return setTimeout((function(){n()}),t||1e3)}))},g=function(t){return"".concat(o._.app.name,"-").concat(null===t||void 0===t?void 0:t.replace(/[^0-9.]/g,""))},w=function(t){return"".concat(o._.app.name,"-").concat(null===t||void 0===t?void 0:t.replace(/[^0-9.]/g,""),".zip")},x=function(t){var n,e,o=r.attributes._dbAppContent,i=new Date(t),u=i.getFullYear(),c=Array.isArray(null===o||void 0===o||null===(n=o.date)||void 0===n?void 0:n.monthNames)?null===o||void 0===o||null===(e=o.date)||void 0===e?void 0:e.monthNames[i.getMonth()]:"",a=(i.getDate()+"").padStart(2,"0");return"".concat(c," ").concat(a,", ").concat(u)},O=function(t,n){return"".concat(null===t||void 0===t?void 0:t.replace(/\{\{(.*?)\}\}/gm,(n||"-").toString()))},S=function(t){var n=t.selector,e=t.headerFix,r=void 0!==e&&e,o=t.threshold,i=void 0===o?0:o,u=t.isSmooth,c=void 0===u||u,a=t.clearHash,l=void 0!==a&&a,s=0;if(r){var f=window.document.querySelector("header");s=f?f.clientHeight:0}var p=window.document.querySelector(n);if(p){var d,y,v=Math.round(((null===(d=p.getBoundingClientRect())||void 0===d?void 0:d.top)||0)+((null===(y=window.document.documentElement)||void 0===y?void 0:y.scrollTop)||0)-s-i);window.scrollTo({top:v,behavior:c?"smooth":"auto"})}else l&&window.scrollTo(0,0);l&&window.history.replaceState("",window.document.title,window.location.href.replace(/#.*$/,""))},_=function(t,n){return"null"===(null===n||void 0===n?void 0:n.toLocaleLowerCase("en"))?"null":t},j=function(t,n){return"null"===(null===n||void 0===n?void 0:n.toLocaleLowerCase("en"))?"null":"string"===t?"'".concat(n,"'"):n},N=function(){var t,n;return(null===window||void 0===window||null===(t=window.navigator)||void 0===t||null===(n=t.userAgent)||void 0===n?void 0:n.toLocaleLowerCase("en").indexOf(".net4"))>-1},R=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},k=function(t){return"string"===typeof t||a(t,String)},T=function(t){return"object"===typeof t||a(t,Object)},E=function(t){return t.filter((function(t){return k(t)})).join(" ")},P=function(t){return t.trim()||null},D=function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return E(n.map((function(t){return k(t)?P(t):T(t)?E(Object.entries(t).map((function(t){var n=f(t,2),e=n[0],r=n[1];return k(e)&&!0===r?P(e):null}))):null})))}},2957:function(t,n,e){"use strict";e.r(n);var r=e(5893),o=e(7294),i=e(8869);e(702);function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}n.default=function(t){var n=t.Component,e=t.pageProps;return(0,o.useEffect)((function(){"serviceWorker"in window.navigator&&window.navigator.serviceWorker.register("/sw.js",{scope:"/"}).then((function(){(0,i.Ux)("serviceWorker has been registered.")}))}),[]),(0,r.jsx)(n,function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),r.forEach((function(n){u(t,n,e[n])}))}return t}({},e))}},702:function(){}},function(t){var n=function(n){return t(t.s=n)};t.O(0,[9774,179],(function(){return n(6363),n(387)}));var e=t.O();_N_E=e}]);