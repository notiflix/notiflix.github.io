(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1840],{6195:function(t){t.exports={attributes:{_dbAppContent:{noscript:{message:"You have to enable JavaScript in your browser to use Notiflix."},footer:{gitHubName:"/furcan",gitHubUrl:"https://github.com/furcan"},buttons:{module:"Module",global:"Global",switch:"Switch",menu:"Menu",open:"Open",close:"Close",copy:"Copy",goToTop:"Go to top",navigation:"Navigation"},date:{monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"]},browsers:{ieTitle:"Here we go...",ieDescription:"It might be time to switch your browser. Or, you can use the repository link below.",ieLinkText:"Go to GitHub",ieLinkUrl:"https://github.com/notiflix/Notiflix"}}},html:""}},3634:function(t,n,e){"use strict";e.d(n,{_:function(){return r}});var o=JSON.parse('{"name":"notiflix-documentation","version":"1.0.0-Beta.01","homepage":"https://notiflix.github.io","description":"Notiflix","private":true,"scripts":{"startup:lint":"eslint src","startup:compile":"tsc --resolveJsonModule --outDir .dev --target ES5 src/application/helpers/sitemap-generator/index.ts","startup:run":"node .dev/src/application/helpers/sitemap-generator/index.js","startup":"yarn startup:lint && yarn startup:compile && yarn startup:run","lint:stylelint":"stylelint \\"src/**/*.{scss,sass}\\" --config .stylelintrc.json","lint:eslint":"eslint next.config.js && eslint src && next lint","lint":"yarn lint:stylelint && yarn lint:eslint","dev":"yarn startup && yarn lint && next dev","build":"yarn startup && yarn lint && next build","start":"yarn startup && yarn lint && next start","deploy":"yarn build && next export -o .dist"},"dependencies":{"next":"11.1.0","notiflix":"^3.0.2","react":"17.0.2","react-dom":"17.0.2"},"devDependencies":{"@ts-stack/markdown":"^1.4.0","@types/js-yaml":"^4.0.3","@types/react":"17.0.26","@typescript-eslint/eslint-plugin":"^4.32.0","eslint":"7.32.0","eslint-config-next":"11.1.0","fork-ts-checker-webpack-plugin":"^6.3.3","frontmatter-markdown-loader":"^3.6.3","js-yaml":"^4.1.0","react-icons":"^4.2.0","sass":"^1.42.1","stylelint":"^13.13.1","stylelint-config-standard":"^22.0.0","stylelint-scss":"^3.21.0","stylelint-webpack-plugin":"^3.0.1","typescript":"4.4.3"},"browserslist":{"production":["> 1%","last 4 versions","not ie < 11","not dead","not op_mini all","iOS >=7"],"development":["IE 11","last 1 chrome version","last 1 firefox version","last 1 safari version"]}}'),i=e.t(o,2),r={app:{url:(JSON.stringify((i||{}).homepage)||"").replace(/"/gm,""),version:(JSON.stringify((i||{}).version)||"").replace(/"/gm,""),name:(JSON.stringify((i||{}).description)||"").replace(/"/gm,""),ogImagePath:"/webapp/notiflix-og.jpg",libraryOptions:{notify:{fontFamily:"Red Hat Display",plainText:!1},report:{fontFamily:"Red Hat Display",plainText:!1},confirm:{fontFamily:"Red Hat Display",plainText:!1},loading:{fontFamily:"Red Hat Display",clickToClose:!0},block:{fontFamily:"Red Hat Display"}}},api:{urlGitHubRepo:"https://api.github.com/repos/notiflix/Notiflix",urlGitHubReleases:"https://api.github.com/repos/notiflix/Notiflix/releases",urlNPMDownloads:"https://api.npmjs.org/downloads/range/2019-01-01:2042-01-01/notiflix"}}},7149:function(t,n,e){"use strict";e.d(n,{rQ:function(){return f},lU:function(){return v},Je:function(){return b},ij:function(){return _},bS:function(){return y},gR:function(){return m},XX:function(){return h},xg:function(){return g},fW:function(){return w},um:function(){return x},$F:function(){return N}});var o=e(8216),i=e(4695),r=e(1077),l=e(4746),a=e(2953),c=e(6568),u=e(2809),s=e(6195),d=e(3634);function p(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=(0,a.Z)(t);if(n){var i=(0,a.Z)(this).constructor;e=Reflect.construct(o,arguments,i)}else e=o.apply(this,arguments);return(0,l.Z)(this,e)}}var f=function(t){(0,r.Z)(e,t);var n=p(e);function e(t,r){var l;return(0,o.Z)(this,e),l=n.call(this,t),(0,u.Z)((0,i.Z)(l),"status",0),l.status=r,l}return e}((0,c.Z)(Error)),v=function(t){0},b=function(t){return new Promise((function(n){return setTimeout((function(){n()}),t||1e3)}))},_=function(t){return"".concat(d._.app.name,"-").concat(null===t||void 0===t?void 0:t.replace(/[^0-9.]/g,""))},y=function(t){return"".concat(d._.app.name,"-").concat(null===t||void 0===t?void 0:t.replace(/[^0-9.]/g,""),".zip")},m=function(t){var n,e,o=s.attributes._dbAppContent,i=new Date(t),r=i.getFullYear(),l=Array.isArray(null===o||void 0===o||null===(n=o.date)||void 0===n?void 0:n.monthNames)?null===o||void 0===o||null===(e=o.date)||void 0===e?void 0:e.monthNames[i.getMonth()]:"",a=(i.getDate()+"").padStart(2,"0");return"".concat(l," ").concat(a,", ").concat(r)},h=function(t,n){return"".concat(null===t||void 0===t?void 0:t.replace(/\{\{(.*?)\}\}/gm,(n||"-").toString()))},g=function(t){var n=t.selector,e=t.headerFix,o=void 0!==e&&e,i=t.threshold,r=void 0===i?0:i,l=t.isSmooth,a=void 0===l||l,c=t.clearHash,u=void 0!==c&&c,s=0;if(o){var d=window.document.querySelector("header");s=d?d.clientHeight:0}var p=window.document.querySelector(n);if(p){var f,v,b=Math.round(((null===(f=p.getBoundingClientRect())||void 0===f?void 0:f.top)||0)+((null===(v=window.document.documentElement)||void 0===v?void 0:v.scrollTop)||0)-s-r);window.scrollTo({top:b,behavior:a?"smooth":"auto"})}else u&&window.scrollTo(0,0);u&&window.history.replaceState("",window.document.title,window.location.href.replace(/#.*$/,""))},w=function(t,n){return"null"===(null===n||void 0===n?void 0:n.toLocaleLowerCase("en"))?"null":t},x=function(t,n){return"null"===(null===n||void 0===n?void 0:n.toLocaleLowerCase("en"))?"null":"string"===t?"'".concat(n,"'"):n},N=function(){var t,n,e;return(null===(t=window)||void 0===t||null===(n=t.navigator)||void 0===n||null===(e=n.userAgent)||void 0===e?void 0:e.toLocaleLowerCase("en").indexOf(".net4"))>-1}},1148:function(t,n,e){"use strict";e.r(n);var o=e(5893),i=e(7149),r=e(9229),l=e.n(r);n.default=function(t){var n,e=t.id,r=t.namespace,a=t.tableHead,c=t.tableData;return(0,o.jsxs)("div",{id:e,className:["".concat(l().table),"".concat(l()["table--".concat(null===c||void 0===c?void 0:c.sectionType)]||"")].join(" ").trim(),children:[(0,o.jsx)("h3",{className:l().table__title,children:null===c||void 0===c?void 0:c.sectionTitle}),(0,o.jsx)("div",{className:l().table__content,children:(0,o.jsxs)("table",{className:"table table--full table--".concat(null===c||void 0===c?void 0:c.sectionType),children:[(0,o.jsx)("thead",{className:"table__thead",children:(0,o.jsxs)("tr",{className:"table__tr",children:[(0,o.jsx)("th",{className:"table__th",children:null===a||void 0===a?void 0:a.option}),(0,o.jsx)("th",{className:"table__th",children:null===a||void 0===a?void 0:a.type}),(0,o.jsx)("th",{className:"table__th",children:null===a||void 0===a?void 0:a.defaultValue}),(0,o.jsx)("th",{className:"table__th",children:null===a||void 0===a?void 0:a.description})]})}),(0,o.jsx)("tbody",{className:"table__tbody",children:null===c||void 0===c||null===(n=c.options)||void 0===n?void 0:n.map((function(t,n){return t&&(0,o.jsxs)("tr",{"data-selector":"".concat(r,"-").concat(null===c||void 0===c?void 0:c.sectionType,"-").concat(null===t||void 0===t?void 0:t.name),className:["table__tr","".concat(null!==t&&void 0!==t&&t.version?"table__tr--new":"")].join(" ").trim(),children:[(0,o.jsx)("td",{className:"table__td table__td--option",children:(0,o.jsxs)("div",{className:["table__td__option","".concat(null!==t&&void 0!==t&&t.version?"table__td__option--new":"")].join(" ").trim(),children:[(0,o.jsx)("span",{children:null===t||void 0===t?void 0:t.name}),(null===t||void 0===t?void 0:t.version)&&(0,o.jsx)("span",{className:"table__td__option__version",children:null===t||void 0===t?void 0:t.version})]})}),(0,o.jsx)("td",{className:"table__td table__td--type",children:(0,o.jsx)("span",{className:"table__td--".concat(null===t||void 0===t?void 0:t.type),children:null===t||void 0===t?void 0:t.type})}),(0,o.jsx)("td",{className:"table__td table__td--default",children:(0,o.jsx)("span",{className:"table__td--".concat((0,i.fW)(null===t||void 0===t?void 0:t.type,null===t||void 0===t?void 0:t.defaultValue)),children:null===t||void 0===t?void 0:t.defaultValue})}),(0,o.jsx)("td",{className:"table__td table__td--description",dangerouslySetInnerHTML:{__html:(null===t||void 0===t?void 0:t.description)||""}})]},n)}))})]})})]})}},2343:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation/partials/content-section-product-table/ContentSectionProductTable",function(){return e(1148)}])},9229:function(t){t.exports={table:"ContentSectionProductTable_table__34PVS","table--success":"ContentSectionProductTable_table--success__Ofiul","table--failure":"ContentSectionProductTable_table--failure__1Rt8O","table--warning":"ContentSectionProductTable_table--warning___TUeB","table--info":"ContentSectionProductTable_table--info__1Y7FS",table__title:"ContentSectionProductTable_table__title__2C9sd",table__content:"ContentSectionProductTable_table__content__34wGg"}},4695:function(t,n,e){"use strict";function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.d(n,{Z:function(){return o}})},8216:function(t,n,e){"use strict";function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,{Z:function(){return o}})},2953:function(t,n,e){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}e.d(n,{Z:function(){return o}})},1077:function(t,n,e){"use strict";e.d(n,{Z:function(){return i}});var o=e(6129);function i(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&(0,o.Z)(t,n)}},4746:function(t,n,e){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.d(n,{Z:function(){return r}});var i=e(4695);function r(t,n){return!n||"object"!==o(n)&&"function"!==typeof n?(0,i.Z)(t):n}},6129:function(t,n,e){"use strict";function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}e.d(n,{Z:function(){return o}})},6568:function(t,n,e){"use strict";e.d(n,{Z:function(){return a}});var o=e(2953),i=e(6129);function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function l(t,n,e){return(l=r()?Reflect.construct:function(t,n,e){var o=[null];o.push.apply(o,n);var r=new(Function.bind.apply(t,o));return e&&(0,i.Z)(r,e.prototype),r}).apply(null,arguments)}function a(t){var n="function"===typeof Map?new Map:void 0;return(a=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return l(t,arguments,(0,o.Z)(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),(0,i.Z)(r,t)})(t)}}},function(t){t.O(0,[9774,2888,179],(function(){return n=2343,t(t.s=n);var n}));var n=t.O();_N_E=n}]);