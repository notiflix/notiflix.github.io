(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7969],{6195:function(t){t.exports={attributes:{_dbAppContent:{noscript:{message:"You have to enable JavaScript in your browser to use Notiflix."},footer:{gitHubName:"/furcan",gitHubUrl:"https://github.com/furcan"},buttons:{module:"Module",global:"Global",switch:"Switch",menu:"Menu",open:"Open",close:"Close",copy:"Copy",goToTop:"Go to top",navigation:"Navigation"},date:{monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"]},browsers:{ieTitle:"Here we go...",ieDescription:"It might be time to switch your browser. Or, you can use the repository link below.",ieLinkText:"Go to GitHub",ieLinkUrl:"https://github.com/notiflix/Notiflix"}}},html:""}},3634:function(t,n,e){"use strict";e.d(n,{_:function(){return r}});var o=JSON.parse('{"name":"notiflix-documentation","version":"1.0.0-Beta.01","homepage":"https://notiflix.github.io","description":"Notiflix","private":true,"scripts":{"startup:lint":"eslint src","startup:compile":"tsc --resolveJsonModule --outDir .dev --target ES5 src/application/helpers/sitemap-generator/index.ts","startup:run":"node .dev/src/application/helpers/sitemap-generator/index.js","startup":"yarn startup:lint && yarn startup:compile && yarn startup:run","lint:stylelint":"stylelint \\"src/**/*.{scss,sass}\\" --config .stylelintrc.json","lint:eslint":"eslint next.config.js && eslint src && next lint","lint":"yarn lint:stylelint && yarn lint:eslint","dev":"yarn startup && yarn lint && next dev","build":"yarn startup && yarn lint && next build","start":"yarn startup && yarn lint && next start","deploy":"yarn build && next export -o .dist"},"dependencies":{"next":"11.1.0","notiflix":"^3.0.2","react":"17.0.2","react-dom":"17.0.2"},"devDependencies":{"@ts-stack/markdown":"^1.4.0","@types/js-yaml":"^4.0.3","@types/react":"17.0.26","@typescript-eslint/eslint-plugin":"^4.32.0","eslint":"7.32.0","eslint-config-next":"11.1.0","fork-ts-checker-webpack-plugin":"^6.3.3","frontmatter-markdown-loader":"^3.6.3","js-yaml":"^4.1.0","react-icons":"^4.2.0","sass":"^1.42.1","stylelint":"^13.13.1","stylelint-config-standard":"^22.0.0","stylelint-scss":"^3.21.0","stylelint-webpack-plugin":"^3.0.1","typescript":"4.4.3"},"browserslist":{"production":["> 1%","last 4 versions","not ie < 11","not dead","not op_mini all","iOS >=7"],"development":["IE 11","last 1 chrome version","last 1 firefox version","last 1 safari version"]}}'),i=e.t(o,2),r={app:{url:(JSON.stringify((i||{}).homepage)||"").replace(/"/gm,""),version:(JSON.stringify((i||{}).version)||"").replace(/"/gm,""),name:(JSON.stringify((i||{}).description)||"").replace(/"/gm,""),ogImagePath:"/webapp/notiflix-og.jpg",libraryOptions:{notify:{fontFamily:"Red Hat Display",plainText:!1},report:{fontFamily:"Red Hat Display",plainText:!1},confirm:{fontFamily:"Red Hat Display",plainText:!1},loading:{fontFamily:"Red Hat Display",clickToClose:!0},block:{fontFamily:"Red Hat Display"}}},api:{urlGitHubRepo:"https://api.github.com/repos/notiflix/Notiflix",urlGitHubReleases:"https://api.github.com/repos/notiflix/Notiflix/releases",urlNPMDownloads:"https://api.npmjs.org/downloads/range/2019-01-01:2042-01-01/notiflix"}}},7149:function(t,n,e){"use strict";e.d(n,{rQ:function(){return f},lU:function(){return v},Je:function(){return m},ij:function(){return y},bS:function(){return g},gR:function(){return h},XX:function(){return w},xg:function(){return b},fW:function(){return x},um:function(){return N},$F:function(){return S}});var o=e(8216),i=e(4695),r=e(1077),a=e(4746),l=e(2953),s=e(6568),u=e(2809),c=e(6195),p=e(3634);function d(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=(0,l.Z)(t);if(n){var i=(0,l.Z)(this).constructor;e=Reflect.construct(o,arguments,i)}else e=o.apply(this,arguments);return(0,a.Z)(this,e)}}var f=function(t){(0,r.Z)(e,t);var n=d(e);function e(t,r){var a;return(0,o.Z)(this,e),a=n.call(this,t),(0,u.Z)((0,i.Z)(a),"status",0),a.status=r,a}return e}((0,s.Z)(Error)),v=function(t){0},m=function(t){return new Promise((function(n){return setTimeout((function(){n()}),t||1e3)}))},y=function(t){return"".concat(p._.app.name,"-").concat(null===t||void 0===t?void 0:t.replace(/[^0-9.]/g,""))},g=function(t){return"".concat(p._.app.name,"-").concat(null===t||void 0===t?void 0:t.replace(/[^0-9.]/g,""),".zip")},h=function(t){var n,e,o=c.attributes._dbAppContent,i=new Date(t),r=i.getFullYear(),a=Array.isArray(null===o||void 0===o||null===(n=o.date)||void 0===n?void 0:n.monthNames)?null===o||void 0===o||null===(e=o.date)||void 0===e?void 0:e.monthNames[i.getMonth()]:"",l=(i.getDate()+"").padStart(2,"0");return"".concat(a," ").concat(l,", ").concat(r)},w=function(t,n){return"".concat(null===t||void 0===t?void 0:t.replace(/\{\{(.*?)\}\}/gm,(n||"-").toString()))},b=function(t){var n=t.selector,e=t.headerFix,o=void 0!==e&&e,i=t.threshold,r=void 0===i?0:i,a=t.isSmooth,l=void 0===a||a,s=t.clearHash,u=void 0!==s&&s,c=0;if(o){var p=window.document.querySelector("header");c=p?p.clientHeight:0}var d=window.document.querySelector(n);if(d){var f,v,m=Math.round(((null===(f=d.getBoundingClientRect())||void 0===f?void 0:f.top)||0)+((null===(v=window.document.documentElement)||void 0===v?void 0:v.scrollTop)||0)-c-r);window.scrollTo({top:m,behavior:l?"smooth":"auto"})}else u&&window.scrollTo(0,0);u&&window.history.replaceState("",window.document.title,window.location.href.replace(/#.*$/,""))},x=function(t,n){return"null"===(null===n||void 0===n?void 0:n.toLocaleLowerCase("en"))?"null":t},N=function(t,n){return"null"===(null===n||void 0===n?void 0:n.toLocaleLowerCase("en"))?"null":"string"===t?"'".concat(n,"'"):n},S=function(){var t,n,e;return(null===(t=window)||void 0===t||null===(n=t.navigator)||void 0===n||null===(e=n.userAgent)||void 0===e?void 0:e.toLocaleLowerCase("en").indexOf(".net4"))>-1}},2242:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation/partials/content-section-product-code/ContentSectionProductCode",function(){return e(9910)}])},8216:function(t,n,e){"use strict";function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,{Z:function(){return o}})}},function(t){t.O(0,[8662,9774,2888,179],(function(){return n=2242,t(t.s=n);var n}));var n=t.O();_N_E=n}]);