(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[992],{7992:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return F}});var o=t(5893),r=t(809),i=t.n(r);function _(e,n,t,o,r,i,_){try{var s=e[i](_),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(o,r)}function s(e){return function(){var n=this,t=arguments;return new Promise((function(o,r){var i=e.apply(n,t);function s(e){_(i,o,r,s,c,"next",e)}function c(e){_(i,o,r,s,c,"throw",e)}s(void 0)}))}}var c=t(7294),l=t(6893),a=t(8193),d=t(1147);function u(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var f=t(2809),h=t(3634);function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,n){return(p=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function v(e){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,n){return!n||"object"!==v(n)&&"function"!==typeof n?m(e):n}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function y(e,n,t){return(y=g()?Reflect.construct:function(e,n,t){var o=[null];o.push.apply(o,n);var r=new(Function.bind.apply(e,o));return t&&p(r,t.prototype),r}).apply(null,arguments)}function j(e){var n="function"===typeof Map?new Map:void 0;return(j=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof n){if(n.has(e))return n.get(e);n.set(e,o)}function o(){return y(e,arguments,b(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),p(o,e)})(e)}function x(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=b(e);if(n){var r=b(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return w(this,t)}}var S=function(e){0},O=function(e){return new Promise((function(n){return setTimeout((function(){n()}),e||1e3)}))},k=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&p(e,n)}(t,e);var n=x(t);function t(e,o){var r;return u(this,t),r=n.call(this,e),(0,f.Z)(m(r),"status",0),r.status=o,r}return t}(j(Error));function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function H(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){(0,f.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var N=function e(n){var t=this;u(this,e),(0,f.Z)(this,"headers",void 0),(0,f.Z)(this,"defaultHeaders",{Accept:"application/vnd.github.v3+json"}),(0,f.Z)(this,"getLatestReleaseAsync",s(i().mark((function e(){var n,o,r,_,s,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=t.headers,e.next=4,O(360);case 4:return e.next=6,fetch(h._.api.urlGitHubReleases,{method:"get",headers:r});case 6:if(403!==(_=e.sent).status){e.next=9;break}throw new k("API rate limit exceeded.",_.status);case 9:if(_.ok){e.next=11;break}throw new k("Something went wrong.",_.status);case 11:return e.next=13,_.json();case 13:if(s=e.sent,Array.isArray(s)&&!((null===s||void 0===s?void 0:s.length)<1)){e.next=16;break}throw new k("Not found.",404);case 16:if(c=null===s||void 0===s||null===(n=s.filter((function(e){return!e.draft&&!e.prerelease})))||void 0===n||null===(o=n.sort((function(e,n){return n.id-e.id})))||void 0===o?void 0:o.find((function(e){return e}))){e.next=19;break}throw new k("There is no release.",404);case 19:return e.abrupt("return",{version:(i=c.tag_name,"".concat(h._.app.name,"-").concat(null===i||void 0===i?void 0:i.replace(/[^0-9.]/g,""),".zip")),downloadUrl:c.zipball_url});case 22:return e.prev=22,e.t0=e.catch(0),S(null===e.t0||void 0===e.t0||e.t0.message),e.abrupt("return",(null===e.t0||void 0===e.t0?void 0:e.t0.status)||500);case 26:case"end":return e.stop()}var i}),e,null,[[0,22]])})))),this.headers=H(H({},this.defaultHeaders),n)};function L(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?L(Object(t),!0).forEach((function(n){(0,f.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var D=function e(n){var t=this;u(this,e),(0,f.Z)(this,"headers",void 0),(0,f.Z)(this,"defaultHeaders",{Accept:"application/vnd.npm.install-v1+json"}),(0,f.Z)(this,"getTotalDownloadCounts",s(i().mark((function e(){var n,o,r,_,s,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=t.headers,e.next=4,O(360);case 4:return e.next=6,fetch(h._.api.urlNPMDownloads,{method:"get",headers:r});case 6:if((_=e.sent).ok){e.next=9;break}throw new Error("Something went wrong.");case 9:return e.next=11,_.json();case 11:if((s=e.sent)instanceof Object&&"downloads"in s){e.next=14;break}throw new Error("Not found.");case 14:return c=(null===s||void 0===s||null===(n=s.downloads)||void 0===n||null===(o=n.map((function(e){return e.downloads})))||void 0===o?void 0:o.reduce((function(e,n){return e+n}),0))||0,e.abrupt("return",{downloadCounts:c});case 18:return e.prev=18,e.t0=e.catch(0),S(null===e.t0||void 0===e.t0||e.t0.message),e.abrupt("return",!1);case 22:case"end":return e.stop()}}),e,null,[[0,18]])})))),this.headers=R(R({},this.defaultHeaders),n)},E=t(55),C=t.n(E);var F=function(){var e,n,t=d.attributes._dbHomeSlider,r=(0,c.useState)({isLoading:!0,isSuccess:!1,isFailure:!1}),_=r[0],u=r[1],f=(0,c.useState)({isLoading:!0,isSuccess:!1}),h=f[0],m=f[1],p=(0,c.useCallback)(s(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(new N).getLatestReleaseAsync();case 3:if(!((n=e.sent)instanceof Object)){e.next=12;break}return u({isLoading:!1,isSuccess:!0,isFailure:!1,version:n.version,downloadUrl:n.downloadUrl}),e.next=8,(new D).getTotalDownloadCounts();case 8:t=e.sent,m(t instanceof Object?{isLoading:!1,isSuccess:!0,downloadCounts:t.downloadCounts}:{isLoading:!1,isSuccess:!1}),e.next=13;break;case 12:throw new Error(n.toString());case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),u({apiStatus:+(null===e.t0||void 0===e.t0?void 0:e.t0.message)||500,isLoading:!1,isSuccess:!1,isFailure:!0});case 18:case"end":return e.stop()}}),e,null,[[0,15]])}))),[]);return(0,c.useEffect)((function(){_.isLoading&&h.isLoading&&p()}),[_,h,p]),(0,o.jsx)("div",{className:C().home__slider,children:(0,o.jsxs)("div",{className:C().home__slider__container,children:[(0,o.jsx)("div",{className:C().home__slider__media,children:(0,o.jsx)("img",{className:C().home__slider__media__image,width:"500",height:"500",src:"".concat("https://notiflix.github.io").concat(null===t||void 0===t?void 0:t.image),alt:"Notiflix"})}),(0,o.jsxs)("div",{className:C().home__slider__content,children:[(0,o.jsx)("h1",{className:C().home__slider__content__title,dangerouslySetInnerHTML:{__html:(null===t||void 0===t?void 0:t.title)||""}}),(0,o.jsx)("p",{className:C().home__slider__content__description,dangerouslySetInnerHTML:{__html:(null===t||void 0===t?void 0:t.description)||""}}),(0,o.jsxs)("div",{className:C().home__slider__content__download,children:[(0,o.jsx)("p",{className:C().home__slider__content__download__info,children:null===t||void 0===t?void 0:t.downloadInfo}),(0,o.jsxs)("a",{href:_.isSuccess?_.downloadUrl:void 0,download:_.isSuccess,className:"".concat(C().home__slider__content__download__link," ").concat(_.isLoading&&C()["home__slider__content__download__link--loading"]||""," ").concat(_.isFailure&&C()["home__slider__content__download__link--failure"]||""),children:[_.isLoading&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Z7b,{className:"".concat(C().home__slider__content__download__link__icon," ").concat(_.isLoading&&C()["home__slider__content__download__link__icon--loading"]||"")}),(0,o.jsx)("span",{className:C().home__slider__content__download__link__version,children:null===t||void 0===t?void 0:t.loading}),(0,o.jsx)("span",{className:C().home__slider__content__download__link__count,children:null===t||void 0===t?void 0:t.loading})]}),_.isSuccess&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.wzc,{className:C().home__slider__content__download__link__icon}),(0,o.jsx)("span",{className:C().home__slider__content__download__link__version,children:_.version}),h.isLoading&&(0,o.jsx)("span",{className:C().home__slider__content__download__link__count,children:null===t||void 0===t?void 0:t.loading}),h.isSuccess&&(0,o.jsx)("span",{className:C().home__slider__content__download__link__count,children:(e=(null===t||void 0===t?void 0:t.downloadCount)||"",n=h.downloadCounts,"".concat(e.replace(/\{\{(.*?)\}\}/gm,(n||"-").toString())))})]}),_.isFailure&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.bcx,{className:"".concat(C().home__slider__content__download__link__icon," ").concat(_.isFailure&&C()["home__slider__content__download__link__icon--failure"]||"")}),(0,o.jsx)("span",{children:403===_.apiStatus?null===t||void 0===t?void 0:t.restricted:null===t||void 0===t?void 0:t.failure})]})]})]})]})]})})}},55:function(e){e.exports={home__slider:"HomeSlider_home__slider__3l41N",home__slider__container:"HomeSlider_home__slider__container__30ruV",home__slider__content:"HomeSlider_home__slider__content__2gVRG",home__slider__media:"HomeSlider_home__slider__media__2_V1Y",home__slider__media__image:"HomeSlider_home__slider__media__image__1lMVC",home__slider__content__title:"HomeSlider_home__slider__content__title__1v5_Z",home__slider__content__description:"HomeSlider_home__slider__content__description__3bL-q",home__slider__content__download:"HomeSlider_home__slider__content__download__2JAV7",home__slider__content__download__info:"HomeSlider_home__slider__content__download__info__3Rcbg",home__slider__content__download__link:"HomeSlider_home__slider__content__download__link__1v5PE","home__slider__content__download__link--loading":"HomeSlider_home__slider__content__download__link--loading__3Dgyn",home__slider__content__download__link__icon:"HomeSlider_home__slider__content__download__link__icon__TcwcQ","home__slider__content__download__link__icon--loading":"HomeSlider_home__slider__content__download__link__icon--loading__33fYq",animation_home_slider_download_loading:"HomeSlider_animation_home_slider_download_loading__sWAwG","home__slider__content__download__link__icon--failure":"HomeSlider_home__slider__content__download__link__icon--failure__OXFOp",home__slider__content__download__link__version:"HomeSlider_home__slider__content__download__link__version__2zeBZ",home__slider__content__download__link__count:"HomeSlider_home__slider__content__download__link__count__2hoRg"}}}]);