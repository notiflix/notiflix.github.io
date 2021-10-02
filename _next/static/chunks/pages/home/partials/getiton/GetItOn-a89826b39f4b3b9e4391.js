(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3411],{1147:function(e){e.exports={attributes:{_dbPageMeta:{routeId:"HOME",lastModifiedDate:"2021-07-22",title:"Notiflix | a JavaScript library for client-side non-blocking notifications.",description:"Notiflix is a JavaScript library for client-side non-blocking notifications, popup boxes, loading indicators, and more that makes your web projects much better.",robots:"noindex, nofollow, noodp, noydir",ogImage:null,themeColor:null},_dbHomeSlider:{image:"/content/media/home/notiflix-home-slider.svg",title:"welcome to <span>Notiflix</span>",description:"Notiflix is a <span>JavaScript</span> library for client-side non-blocking notifications, popup boxes, loading indicators, and more that makes your web projects much better.",downloadInfo:"Download the latest version of Notiflix.",downloadCount:"Notiflix has been downloaded {{x}} times.",loading:"Loading...",failure:"Something went wrong.",restricted:"API rate limit exceeded."},_dbHomeGetItOn:{title:"Get it on",clipboard:"Copied to the clipboard.",yarn:{title:"Yarn",script:"yarn add notiflix",url:"https://yarnpkg.com/package/notiflix"},npm:{title:"NPM",script:"npm i notiflix",url:"https://www.npmjs.com/package/notiflix"},github:{title:"GitHub",script:null,url:"https://github.com/notiflix/Notiflix.git"}},_dbHomeBrowsers:{title:"Browser Compatibility",disclaimer:"* SVG animations are not supported.",chrome:"Chrome",firefox:"Firefox",safari:"Safari",edge:"Edge",opera:"Opera",edgeLegacy:"* Edge Legacy",ie:"* IE 10+"},_dbHomeProducts:{title:"Notiflix Modules",products:[{routeId:"NOTIFY",title:"Notify",description:'Notiflix Notify module can be used to send non-blocking alerts/notifications. This module includes 4 types of notifications: "Success", "Failure", "Warning", and "Info".',button:"More",buttonLabel:"More about Notify module"},{routeId:"REPORT",title:"Report",description:'Notiflix Report module can be used to show extended notifications that contain a title, description, and button(with a callback function). This module includes 4 types of notifications: "Success", "Failure", "Warning", and "Info".',button:"More",buttonLabel:"More about Report module"},{routeId:"CONFIRM",title:"Confirm",description:'Notiflix Confirm module can be used to show non-blocking prompt boxes. This module includes 2 types of prompts: "Show" and "Ask". An additional question can be asked as well within the prompt box if using the "Ask" one.',button:"More",buttonLabel:"More about Confirm module"},{routeId:"LOADING",title:"Loading",description:'Notiflix Loading module can be used to show a loading indicator during a process (Fetch/XHR). Includes 6 types of animated SVG icons: "Standard", "Hourglass", "Circle", "Arrows", "Dots", and "Pulse". An additional type is "Custom", and it can be used with a custom SVG icon.',button:"More",buttonLabel:"More about Loading module"},{routeId:"BLOCK",title:"Block",description:"Notiflix Block module can be used to block/unblock the elements during a process (Fetch/XHR), without locking the browser or the other elements/components to prevent the user\u2019s interactions on the blocked elements.",button:"More",buttonLabel:"More about Block module"}]}},html:""}},9989:function(e,t,n){"use strict";n.d(t,{T:function(){return f}});var o=n(809),i=n.n(o),r=n(266),a=n(8216),s=n(2809),l=n(3634),u=n(7885);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function e(t){var n=this;(0,a.Z)(this,e),(0,s.Z)(this,"headers",void 0),(0,s.Z)(this,"defaultHeaders",{Accept:"application/vnd.github.v3+json"}),(0,s.Z)(this,"getLatestReleaseAsync",(0,r.Z)(i().mark((function e(){var t,o,r,a,s,d,c,f;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=n.headers,e.next=4,(0,u.Je)(360);case 4:return e.next=6,fetch(l._.api.urlGitHubReleases,{method:"get",headers:r});case 6:if(403!==(a=e.sent).status){e.next=9;break}throw new u.rQ("API rate limit exceeded.",a.status);case 9:if(a.ok){e.next=11;break}throw new u.rQ("Something went wrong.",a.status);case 11:return e.next=13,a.json();case 13:if(s=e.sent,Array.isArray(s)&&!((null===s||void 0===s?void 0:s.length)<1)){e.next=16;break}throw new u.rQ("Not found.",404);case 16:if(d=null===s||void 0===s||null===(t=s.filter((function(e){return!(null!==e&&void 0!==e&&e.draft)&&!(null!==e&&void 0!==e&&e.prerelease)})))||void 0===t||null===(o=t.sort((function(e,t){return(null===t||void 0===t?void 0:t.id)-(null===e||void 0===e?void 0:e.id)})))||void 0===o?void 0:o.find((function(e){return e}))){e.next=19;break}throw new u.rQ("There is no release.",404);case 19:return e.abrupt("return",{fileName:(0,u.bS)(d.tag_name),downloadUrl:d.zipball_url});case 22:return e.prev=22,e.t0=e.catch(0),c=e.t0 instanceof u.rQ?null===e.t0||void 0===e.t0?void 0:e.t0.message:"",f=e.t0 instanceof u.rQ?null===e.t0||void 0===e.t0?void 0:e.t0.status:500,(0,u.lU)(c),e.abrupt("return",f);case 28:case"end":return e.stop()}}),e,null,[[0,22]])})))),(0,s.Z)(this,"getRepoStatsAsync",(0,r.Z)(i().mark((function e(){var t,o,r,a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=n.headers,e.next=4,(0,u.Je)(360);case 4:return e.next=6,fetch(l._.api.urlGitHubRepo,{method:"get",headers:t});case 6:if(403!==(o=e.sent).status){e.next=9;break}throw new u.rQ("API rate limit exceeded.",o.status);case 9:if(o.ok){e.next=11;break}throw new u.rQ("Something went wrong.",o.status);case 11:return e.next=13,o.json();case 13:if((r=e.sent)instanceof Object&&"stargazers_count"in r){e.next=16;break}throw new u.rQ("Not found.",404);case 16:return e.abrupt("return",{stargazersCount:r.stargazers_count,forksCount:r.forks_count});case 19:return e.prev=19,e.t0=e.catch(0),a=e.t0 instanceof u.rQ?null===e.t0||void 0===e.t0?void 0:e.t0.message:"",s=e.t0 instanceof u.rQ?null===e.t0||void 0===e.t0?void 0:e.t0.status:500,(0,u.lU)(a),e.abrupt("return",s);case 25:case"end":return e.stop()}}),e,null,[[0,19]])})))),(0,s.Z)(this,"getAllReleasesAsync",(0,r.Z)(i().mark((function e(){var t,o,r,a,s,d,c,f;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o=n.headers,e.next=4,(0,u.Je)(360);case 4:return e.next=6,fetch(l._.api.urlGitHubReleases,{method:"get",headers:o});case 6:if(403!==(r=e.sent).status){e.next=9;break}throw new u.rQ("API rate limit exceeded.",r.status);case 9:if(r.ok){e.next=11;break}throw new u.rQ("Something went wrong.",r.status);case 11:return e.next=13,r.json();case 13:if(a=e.sent,Array.isArray(a)&&!((null===a||void 0===a?void 0:a.length)<1)){e.next=16;break}throw new u.rQ("Not found.",404);case 16:if(!((null===(s=(null===a||void 0===a||null===(t=a.sort((function(e,t){return(null===t||void 0===t?void 0:t.id)-(null===e||void 0===e?void 0:e.id)})))||void 0===t?void 0:t.filter((function(e){var t;return!(null!==e&&void 0!==e&&null!==(t=e.tag_name)&&void 0!==t&&t.includes("v1"))})))||[])||void 0===s?void 0:s.length)<1)){e.next=19;break}throw new u.rQ("There is no release.",404);case 19:return d=null===s||void 0===s?void 0:s.map((function(e){return{id:null===e||void 0===e?void 0:e.id,isDraft:null===e||void 0===e?void 0:e.draft,isPrerelease:null===e||void 0===e?void 0:e.prerelease,versionName:(0,u.ij)(null===e||void 0===e?void 0:e.tag_name),releaseNotesAsMarkdown:(null===e||void 0===e?void 0:e.body)||"",releaseDate:(0,u.gR)(null===e||void 0===e?void 0:e.published_at),downloadName:(0,u.bS)(null===e||void 0===e?void 0:e.tag_name),downloadUrl:null===e||void 0===e?void 0:e.zipball_url}})),e.abrupt("return",d);case 23:return e.prev=23,e.t0=e.catch(0),c=e.t0 instanceof u.rQ?null===e.t0||void 0===e.t0?void 0:e.t0.message:"",f=e.t0 instanceof u.rQ?null===e.t0||void 0===e.t0?void 0:e.t0.status:500,(0,u.lU)(c),e.abrupt("return",f);case 29:case"end":return e.stop()}}),e,null,[[0,23]])})))),this.headers=c(c({},this.defaultHeaders),t)}},9095:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home/partials/getiton/GetItOn",function(){return n(643)}])},266:function(e,t,n){"use strict";function o(e,t,n,o,i,r,a){try{var s=e[r](a),l=s.value}catch(u){return void n(u)}s.done?t(l):Promise.resolve(l).then(o,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var a=e.apply(t,n);function s(e){o(a,i,r,s,l,"next",e)}function l(e){o(a,i,r,s,l,"throw",e)}s(void 0)}))}}n.d(t,{Z:function(){return i}})}},function(e){e.O(0,[3874,6893,1317,643,9774,2888,179],(function(){return t=9095,e(e.s=t);var t}));var t=e.O();_N_E=t}]);