(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6733],{6195:function(t){t.exports={attributes:{_dbAppContent:{noscript:{message:"You have to enable JavaScript in your browser to use Notiflix."},footer:{gitHubName:"/furcan",gitHubUrl:"https://github.com/furcan"},buttons:{module:"Module",global:"Global",switch:"Switch",menu:"Menu",open:"Open",close:"Close",copy:"Copy",goToTop:"Go to top"},date:{monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"]}}},html:""}},1147:function(t){t.exports={attributes:{_dbPageMeta:{routeId:"HOME",lastModifiedDate:"2021-07-22",title:"Notiflix | a JavaScript library for client-side non-blocking notifications.",description:"Notiflix is a JavaScript library for client-side non-blocking notifications, popup boxes, loading indicators, and more that makes your web projects much better.",robots:"noindex, nofollow, noodp, noydir",ogImage:null,themeColor:null},_dbHomeSlider:{image:"/content/media/home/notiflix-home-slider.svg",title:"welcome to <span>Notiflix</span>",description:"Notiflix is a <span>JavaScript</span> library for client-side non-blocking notifications, popup boxes, loading indicators, and more that makes your web projects much better.",downloadInfo:"Download the latest version of Notiflix.",downloadCount:"Notiflix has been downloaded {{x}} times.",loading:"Loading...",failure:"Something went wrong.",restricted:"API rate limit exceeded."},_dbHomeGetItOn:{title:"Get it on",clipboard:"Copied to the clipboard.",yarn:{title:"Yarn",script:"yarn add notiflix",url:"https://yarnpkg.com/package/notiflix"},npm:{title:"NPM",script:"npm i notiflix",url:"https://www.npmjs.com/package/notiflix"},github:{title:"GitHub",script:null,url:"https://github.com/notiflix/Notiflix.git"}},_dbHomeBrowsers:{title:"Browser Compatibility",disclaimer:"* SVG animations are not supported.",chrome:"Chrome",firefox:"Firefox",safari:"Safari",edge:"Edge",opera:"Opera",edgeLegacy:"* Edge Legacy",ie:"* IE 10+"},_dbHomeProducts:{title:"Notiflix Modules",products:[{routeId:"NOTIFY",title:"Notify",description:'Notiflix Notify module can be used to send non-blocking alerts/notifications. This module includes 4 types of notifications: "Success", "Failure", "Warning", and "Info".',button:"More"},{routeId:"REPORT",title:"Report",description:'Notiflix Report module can be used to show extended notifications that contain a title, description, and button(with a callback function). This module includes 4 types of notifications: "Success", "Failure", "Warning", and "Info".',button:"More"},{routeId:"CONFIRM",title:"Confirm",description:'Notiflix Confirm module can be used to show non-blocking prompt boxes. This module includes 2 types of prompts: "Show" and "Ask". An additional question can be asked as well within the prompt box if using the "Ask" one.',button:"More"},{routeId:"LOADING",title:"Loading",description:'Notiflix Loading module can be used to show a loading indicator during a process (Fetch/XHR). Includes 6 types of animated SVG icons: "Standard", "Hourglass", "Circle", "Arrows", "Dots", and "Pulse". An additional type is "Custom", and it can be used with a custom SVG icon.',button:"More"},{routeId:"BLOCK",title:"Block",description:"Notiflix Block module can be used to block/unblock the elements during a process (Fetch/XHR), without locking the browser or the other elements/components to prevent the user\u2019s interactions on the blocked elements.",button:"More"}]}},html:""}},9989:function(t,e,n){"use strict";n.d(e,{T:function(){return f}});var o=n(809),r=n.n(o),i=n(266),a=n(8216),s=n(2809),u=n(3634),c=n(7149);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){(0,s.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f=function t(e){var n=this;(0,a.Z)(this,t),(0,s.Z)(this,"headers",void 0),(0,s.Z)(this,"defaultHeaders",{Accept:"application/vnd.github.v3+json"}),(0,s.Z)(this,"getLatestReleaseAsync",(0,i.Z)(r().mark((function t(){var e,o,i,a,s,l,d,f;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i=n.headers,t.next=4,(0,c.Je)(360);case 4:return t.next=6,fetch(u._.api.urlGitHubReleases,{method:"get",headers:i});case 6:if(403!==(a=t.sent).status){t.next=9;break}throw new c.rQ("API rate limit exceeded.",a.status);case 9:if(a.ok){t.next=11;break}throw new c.rQ("Something went wrong.",a.status);case 11:return t.next=13,a.json();case 13:if(s=t.sent,Array.isArray(s)&&!((null===s||void 0===s?void 0:s.length)<1)){t.next=16;break}throw new c.rQ("Not found.",404);case 16:if(l=null===s||void 0===s||null===(e=s.filter((function(t){return!(null!==t&&void 0!==t&&t.draft)&&!(null!==t&&void 0!==t&&t.prerelease)})))||void 0===e||null===(o=e.sort((function(t,e){return(null===e||void 0===e?void 0:e.id)-(null===t||void 0===t?void 0:t.id)})))||void 0===o?void 0:o.find((function(t){return t}))){t.next=19;break}throw new c.rQ("There is no release.",404);case 19:return t.abrupt("return",{fileName:(0,c.bS)(l.tag_name),downloadUrl:l.zipball_url});case 22:return t.prev=22,t.t0=t.catch(0),d=t.t0 instanceof c.rQ?null===t.t0||void 0===t.t0?void 0:t.t0.message:"",f=t.t0 instanceof c.rQ?null===t.t0||void 0===t.t0?void 0:t.t0.status:500,(0,c.lU)(d),t.abrupt("return",f);case 28:case"end":return t.stop()}}),t,null,[[0,22]])})))),(0,s.Z)(this,"getRepoStatsAsync",(0,i.Z)(r().mark((function t(){var e,o,i,a,s;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=n.headers,t.next=4,(0,c.Je)(360);case 4:return t.next=6,fetch(u._.api.urlGitHubRepo,{method:"get",headers:e});case 6:if(403!==(o=t.sent).status){t.next=9;break}throw new c.rQ("API rate limit exceeded.",o.status);case 9:if(o.ok){t.next=11;break}throw new c.rQ("Something went wrong.",o.status);case 11:return t.next=13,o.json();case 13:if((i=t.sent)instanceof Object&&"stargazers_count"in i){t.next=16;break}throw new c.rQ("Not found.",404);case 16:return t.abrupt("return",{stargazersCount:i.stargazers_count,forksCount:i.forks_count});case 19:return t.prev=19,t.t0=t.catch(0),a=t.t0 instanceof c.rQ?null===t.t0||void 0===t.t0?void 0:t.t0.message:"",s=t.t0 instanceof c.rQ?null===t.t0||void 0===t.t0?void 0:t.t0.status:500,(0,c.lU)(a),t.abrupt("return",s);case 25:case"end":return t.stop()}}),t,null,[[0,19]])})))),(0,s.Z)(this,"getAllReleasesAsync",(0,i.Z)(r().mark((function t(){var e,o,i,a,s,l,d,f;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o=n.headers,t.next=4,(0,c.Je)(720);case 4:return t.next=6,fetch(u._.api.urlGitHubReleases,{method:"get",headers:o});case 6:if(403!==(i=t.sent).status){t.next=9;break}throw new c.rQ("API rate limit exceeded.",i.status);case 9:if(i.ok){t.next=11;break}throw new c.rQ("Something went wrong.",i.status);case 11:return t.next=13,i.json();case 13:if(a=t.sent,Array.isArray(a)&&!((null===a||void 0===a?void 0:a.length)<1)){t.next=16;break}throw new c.rQ("Not found.",404);case 16:if(!((null===(s=(null===a||void 0===a||null===(e=a.sort((function(t,e){return(null===e||void 0===e?void 0:e.id)-(null===t||void 0===t?void 0:t.id)})))||void 0===e?void 0:e.filter((function(t){return!(null!==t&&void 0!==t&&t.tag_name.includes("v1"))})))||[])||void 0===s?void 0:s.length)<1)){t.next=19;break}throw new c.rQ("There is no release.",404);case 19:return l=null===s||void 0===s?void 0:s.map((function(t){return{id:null===t||void 0===t?void 0:t.id,isDraft:null===t||void 0===t?void 0:t.draft,isPrerelease:null===t||void 0===t?void 0:t.prerelease,versionName:(0,c.ij)(null===t||void 0===t?void 0:t.tag_name),releaseNotesAsMarkdown:(null===t||void 0===t?void 0:t.body)||"",releaseDate:(0,c.gR)(null===t||void 0===t?void 0:t.published_at),downloadName:(0,c.bS)(null===t||void 0===t?void 0:t.tag_name),downloadUrl:null===t||void 0===t?void 0:t.zipball_url}})),t.abrupt("return",l);case 23:return t.prev=23,t.t0=t.catch(0),d=t.t0 instanceof c.rQ?null===t.t0||void 0===t.t0?void 0:t.t0.message:"",f=t.t0 instanceof c.rQ?null===t.t0||void 0===t.t0?void 0:t.t0.status:500,(0,c.lU)(d),t.abrupt("return",f);case 29:case"end":return t.stop()}}),t,null,[[0,23]])})))),this.headers=d(d({},this.defaultHeaders),e)}},3634:function(t,e,n){"use strict";n.d(e,{_:function(){return i}});var o=JSON.parse('{"name":"notiflix-documentation","version":"1.0.0-Beta.01","homepage":"https://notiflix.github.io","description":"Notiflix","private":true,"scripts":{"startup:lint":"eslint src","startup:compile":"tsc --resolveJsonModule --outDir .dev --target ES5 src/application/helpers/sitemap-generator/index.ts","startup:run":"node .dev/src/application/helpers/sitemap-generator/index.js","startup":"yarn startup:lint && yarn startup:compile && yarn startup:run","lint:stylelint":"stylelint \\"src/**/*.{scss,sass}\\" --config .stylelintrc.json","lint:eslint":"eslint next.config.js && eslint src && next lint","lint":"yarn lint:stylelint && yarn lint:eslint","dev":"yarn startup && yarn lint && next dev","build":"yarn startup && yarn lint && next build","start":"yarn startup && yarn lint && next start","deploy":"yarn build && next export -o .dist"},"dependencies":{"next":"11.1.0","notiflix":"^3.0.2","react":"17.0.2","react-dom":"17.0.2"},"devDependencies":{"@ts-stack/markdown":"^1.4.0","@types/js-yaml":"^4.0.3","@types/react":"17.0.24","@typescript-eslint/eslint-plugin":"^4.31.2","eslint":"7.32.0","eslint-config-next":"11.1.0","fork-ts-checker-webpack-plugin":"^6.3.3","frontmatter-markdown-loader":"^3.6.3","js-yaml":"^4.1.0","react-icons":"^4.2.0","sass":"^1.42.1","stylelint":"^13.13.1","stylelint-config-standard":"^22.0.0","stylelint-scss":"^3.21.0","stylelint-webpack-plugin":"^3.0.1","typescript":"4.4.3"},"browserslist":{"production":["> 1%","last 4 versions","not ie < 11","not dead","not op_mini all","iOS >=7"],"development":["IE 11","last 1 chrome version","last 1 firefox version","last 1 safari version"]}}'),r=n.t(o,2),i={app:{url:(JSON.stringify((r||{}).homepage)||"").replace(/"/gm,""),version:(JSON.stringify((r||{}).version)||"").replace(/"/gm,""),name:(JSON.stringify((r||{}).description)||"").replace(/"/gm,""),ogImagePath:"/webapp/notiflix-og.jpg",libraryOptions:{notify:{fontFamily:"Red Hat Display",plainText:!1},report:{fontFamily:"Red Hat Display",plainText:!1},confirm:{fontFamily:"Red Hat Display",plainText:!1},loading:{fontFamily:"Red Hat Display",clickToClose:!0},block:{fontFamily:"Red Hat Display"}}},api:{urlGitHubRepo:"https://api.github.com/repos/notiflix/Notiflix",urlGitHubReleases:"https://api.github.com/repos/notiflix/Notiflix/releases",urlNPMDownloads:"https://api.npmjs.org/downloads/range/2019-01-01:2042-01-01/notiflix"}}},7149:function(t,e,n){"use strict";n.d(e,{rQ:function(){return p},lU:function(){return h},Je:function(){return m},ij:function(){return b},bS:function(){return v},gR:function(){return y},XX:function(){return g},A4:function(){return w}});var o=n(8216),r=n(4695),i=n(1077),a=n(4746),s=n(2953),u=n(6568),c=n(2809),l=n(6195),d=n(3634);function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=(0,s.Z)(t);if(e){var r=(0,s.Z)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,a.Z)(this,n)}}var p=function(t){(0,i.Z)(n,t);var e=f(n);function n(t,i){var a;return(0,o.Z)(this,n),a=e.call(this,t),(0,c.Z)((0,r.Z)(a),"status",0),a.status=i,a}return n}((0,u.Z)(Error)),h=function(t){0},m=function(t){return new Promise((function(e){return setTimeout((function(){e()}),t||1e3)}))},b=function(t){return"".concat(d._.app.name,"-").concat(null===t||void 0===t?void 0:t.replace(/[^0-9.]/g,""))},v=function(t){return"".concat(d._.app.name,"-").concat(null===t||void 0===t?void 0:t.replace(/[^0-9.]/g,""),".zip")},y=function(t){var e,n,o=l.attributes._dbAppContent,r=new Date(t),i=r.getFullYear(),a=Array.isArray(null===o||void 0===o||null===(e=o.date)||void 0===e?void 0:e.monthNames)?null===o||void 0===o||null===(n=o.date)||void 0===n?void 0:n.monthNames[r.getMonth()]:"",s=(r.getDate()+"").padStart(2,"0");return"".concat(a," ").concat(s,", ").concat(i)},g=function(t,e){return"".concat(t.replace(/\{\{(.*?)\}\}/gm,(e||"-").toString()))},w=function(t,e,n,o){var r=0;if(e){var i=window.document.querySelector("header");r=i?i.clientHeight:0}var a=window.document.querySelector(t);a?window.scrollTo({top:Math.round(a.offsetTop-r),behavior:n?"smooth":"auto"}):o&&window.scrollTo(0,0),o&&window.history.replaceState("",window.document.title,window.location.href.replace(/#.*$/,""))}},1271:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home/partials/home-getiton/HomeGetItOn",function(){return n(4724)}])},4695:function(t,e,n){"use strict";function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,{Z:function(){return o}})},266:function(t,e,n){"use strict";function o(t,e,n,o,r,i,a){try{var s=t[i](a),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(o,r)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function s(t){o(a,r,i,s,u,"next",t)}function u(t){o(a,r,i,s,u,"throw",t)}s(void 0)}))}}n.d(e,{Z:function(){return r}})},8216:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return o}})},2953:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,{Z:function(){return o}})},1077:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var o=n(6129);function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&(0,o.Z)(t,e)}},4746:function(t,e,n){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,{Z:function(){return i}});var r=n(4695);function i(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?(0,r.Z)(t):e}},6129:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,{Z:function(){return o}})},6568:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var o=n(2953),r=n(6129);function i(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function a(t,e,n){return(a=i()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&(0,r.Z)(i,n.prototype),i}).apply(null,arguments)}function s(t){var e="function"===typeof Map?new Map:void 0;return(s=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return a(t,arguments,(0,o.Z)(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),(0,r.Z)(i,t)})(t)}}},function(t){t.O(0,[3874,6893,1317,4724,9774,2888,179],(function(){return e=1271,t(t.s=e);var e}));var e=t.O();_N_E=e}]);