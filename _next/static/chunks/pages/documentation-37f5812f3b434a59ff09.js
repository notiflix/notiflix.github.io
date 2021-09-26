(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5410],{8951:function(t){t.exports={attributes:{_dbMeta:{routeId:"DOCUMENTATION",lastModifiedDate:"2021-10-29",title:"Documentation | Notiflix",description:"Notiflix is a JavaScript library for client-side non-blocking notifications, popup boxes, loading indicators, and more that makes your web projects much better.",robots:"noindex, nofollow, noodp, noydir",ogImage:null,themeColor:null},_dbDocsTableCommon:{titleSuffix:": All Options",description:'All the options can be found in the table below. The "Code View" tab can be switched to see the usages of <span>init</span> and <span>merge</span> functions.',viewTable:{button:"Table View",tableHead:{option:"Option",type:"Type",defaultValue:"Default Value",description:"Description"}},viewCode:{button:"Code View",descriptionInit:'The "init()" function can be used to set custom options as globally.',descriptionMerge:'The "merge()" function can be used to deeply extend the "init()" options for a specific page or event globally.',functionNameInit:"init",functionNameMerge:"merge",scopeWebApp:"Website",scopeGlobal:"global.js (global scripts)",scopeComponent:"contact.js (contact page scripts)"}},_dbDocsTableNotify:{namespace:"Notify",optionsCommon:{sectionId:"DocsNotify",sectionType:"common",sectionTitle:"Notify Common Options:",options:[{name:"width",version:null,type:"string",defaultValue:"280px",description:"Changes the width of the notifications."},{name:"position",version:null,type:"string",defaultValue:"right-top",description:"7 types of positions can be used: <span>right-top</span> <span>right-bottom</span> <span>left-top</span> <span>left-bottom</span> <span>center-top</span> <span>center-bottom</span> <span>center-center</span>"},{name:"distance",version:null,type:"string",defaultValue:"10px",description:"The distance between positioned notifications and the <span>body</span> element."}]},optionsSuccess:{sectionId:"DocsNotifySuccess",sectionType:"success",sectionTitle:"Notify Success Options:",options:[{name:"background",version:null,type:"string",defaultValue:"#32c682",description:"Changes the background color."},{name:"textColor",version:null,type:"string",defaultValue:"#fff",description:"Changes the text color."},{name:"childClassName",version:null,type:"string",defaultValue:"success",description:"Changes the class name."},{name:"notiflixIconColor",version:null,type:"string",defaultValue:"rgba(0,0,0,0.2)",description:"Changes the SVG icon color."},{name:"fontAwesomeClassName",version:null,type:"string",defaultValue:"fas fa-check-circle",description:"Changes the FontAwesome icon class name (FontAwesome has to be added to the project separately.)"},{name:"fontAwesomeIconColor",version:null,type:"string",defaultValue:"rgba(0,0,0,0.2)",description:"Changes the FontAwesome icon color."},{name:"backOverlayColor",version:null,type:"string",defaultValue:"rgba(50,198,130,0.2)",description:'Changes the color of the back overlay. (Overrides the common "backOverlayColor" option for this notification type. It can be set as an empty string to use the common one.)'}]}},_dbDocsTableReport:{namespace:"Report",optionsCommon:{sectionId:"DocsReport",sectionType:"common",sectionTitle:"Report Common Options:",options:[{todo:"furkan"}]},optionsSuccess:{sectionId:"DocsReportSuccess",sectionType:"success",sectionTitle:"Report Success Options:",options:[{todo:"furkan"}]}},_dbDocsTableConfirm:{namespace:"Confirm",optionsCommon:{sectionId:"DocsConfirm",sectionType:"common",sectionTitle:"Confirm Common Options:",options:[{todo:"furkan"}]}},_dbDocsTableLoading:{namespace:"Loading",optionsCommon:{sectionId:"DocsLoading",sectionType:"common",sectionTitle:"Loading Common Options:",options:[{todo:"furkan"}]}},_dbDocsTableBlock:{namespace:"Block",optionsCommon:{sectionId:"DocsBlock",sectionType:"common",sectionTitle:"Block Common Options:",options:[{todo:"furkan"}]}}},html:""}},7149:function(t,n,e){"use strict";e.d(n,{rQ:function(){return p},lU:function(){return d},Je:function(){return m},ij:function(){return b},bS:function(){return h},gR:function(){return y},XX:function(){return g},A4:function(){return _}});var o=e(8216),i=e(4695),r=e(1077),c=e(4746),s=e(2953),a=e(6568),u=e(2809),l=e(3634);function f(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=(0,s.Z)(t);if(n){var i=(0,s.Z)(this).constructor;e=Reflect.construct(o,arguments,i)}else e=o.apply(this,arguments);return(0,c.Z)(this,e)}}var p=function(t){(0,r.Z)(e,t);var n=f(e);function e(t,r){var c;return(0,o.Z)(this,e),c=n.call(this,t),(0,u.Z)((0,i.Z)(c),"status",0),c.status=r,c}return e}((0,a.Z)(Error)),d=function(t){0},m=function(t){return new Promise((function(n){return setTimeout((function(){n()}),t||1e3)}))},b=function(t){return"".concat(l._.app.name,"-").concat(null===t||void 0===t?void 0:t.replace(/[^0-9.]/g,""))},h=function(t){return"".concat(l._.app.name,"-").concat(null===t||void 0===t?void 0:t.replace(/[^0-9.]/g,""),".zip")},y=function(t){var n=new Date(t),e=n.getFullYear(),o=l._.app.text.monthNames[n.getMonth()],i=(n.getDate()+"").padStart(2,"0");return"".concat(o," ").concat(i,", ").concat(e)},g=function(t,n){return"".concat(t.replace(/\{\{(.*?)\}\}/gm,(n||"-").toString()))},_=function(t,n,e,o){var i=0;if(n){var r=window.document.querySelector("header");i=r?r.clientHeight:0}var c=window.document.querySelector(t);c?window.scrollTo({top:Math.round(c.offsetTop-i),behavior:e?"smooth":"auto"}):o&&window.scrollTo(0,0),o&&window.history.replaceState("",window.document.title,window.location.href.replace(/#.*$/,""))}},4760:function(t,n,e){"use strict";e.r(n);var o=e(5893),i=e(8951),r=e(8214),c=e(6109),s=e(3129),a=e(6783),u=e.n(a);n.default=function(){var t=i.attributes._dbMeta;return(0,o.jsx)(r.Z,{meta:t,classNamePrefix:"documentation",children:(0,o.jsx)("div",{className:u().documentation,children:(0,o.jsxs)("div",{className:u().documentation__container,children:[(0,o.jsx)(c.default,{}),(0,o.jsx)(s.default,{})]})})})}},5660:function(t,n,e){"use strict";e.r(n);var o=e(5893),i=e(1738),r=e.n(i);n.default=function(){return(0,o.jsx)("div",{className:r().search,children:(0,o.jsx)("h1",{children:"ContentSearch"})})}},5952:function(t,n,e){"use strict";e.r(n);var o=e(5893),i=e(7294),r=e(8951),c=e(9517),s=e(7149),a=e(6242),u=e(734),l=e.n(u);n.default=function(){var t=r.attributes._dbDocsTableCommon,n=r.attributes._dbDocsTableNotify,e=r.attributes._dbDocsTableReport,u=r.attributes._dbDocsTableConfirm,f=r.attributes._dbDocsTableLoading,p=r.attributes._dbDocsTableBlock;return(0,i.useLayoutEffect)((function(){window.location.hash&&(0,s.A4)(window.location.hash,!0,!0,!0)}),[]),(0,o.jsxs)("div",{className:l().section,children:[(0,o.jsx)(a.default,{productId:c._.NOTIFY,dataCommon:t,dataProduct:n}),(0,o.jsx)(a.default,{productId:c._.REPORT,dataCommon:t,dataProduct:e}),(0,o.jsx)(a.default,{productId:c._.CONFIRM,dataCommon:t,dataProduct:u}),(0,o.jsx)(a.default,{productId:c._.LOADING,dataCommon:t,dataProduct:f}),(0,o.jsx)(a.default,{productId:c._.BLOCK,dataCommon:t,dataProduct:p})]})}},3129:function(t,n,e){"use strict";e.r(n);var o=e(5893),i=e(5660),r=e(5952),c=e(4361),s=e.n(c);n.default=function(){return(0,o.jsxs)("div",{className:s().content,children:[(0,o.jsx)(i.default,{}),(0,o.jsx)(r.default,{})]})}},6109:function(t,n,e){"use strict";e.r(n);var o=e(5893),i=e(3912),r=e.n(i);n.default=function(){return(0,o.jsx)("div",{className:r().sidebar,children:(0,o.jsx)("h1",{children:"Sidebar"})})}},1140:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation",function(){return e(4760)}])},6783:function(t){t.exports={documentation:"documentation_documentation__2FMsI",documentation__container:"documentation_documentation__container__1RqFV"}},1738:function(t){t.exports={search:"ContentSearch_search__2MKhC"}},734:function(t){t.exports={section:"ContentSection_section__KqPOV"}},4361:function(t){t.exports={content:"Content_content__EI5Pg"}},3912:function(t){t.exports={sidebar:"Sidebar_sidebar__2Regv"}},4695:function(t,n,e){"use strict";function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.d(n,{Z:function(){return o}})},8216:function(t,n,e){"use strict";function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,{Z:function(){return o}})},2953:function(t,n,e){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}e.d(n,{Z:function(){return o}})},1077:function(t,n,e){"use strict";e.d(n,{Z:function(){return i}});var o=e(6129);function i(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&(0,o.Z)(t,n)}},4746:function(t,n,e){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.d(n,{Z:function(){return r}});var i=e(4695);function r(t,n){return!n||"object"!==o(n)&&"function"!==typeof n?(0,i.Z)(t):n}},6129:function(t,n,e){"use strict";function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}e.d(n,{Z:function(){return o}})},6568:function(t,n,e){"use strict";e.d(n,{Z:function(){return s}});var o=e(2953),i=e(6129);function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function c(t,n,e){return(c=r()?Reflect.construct:function(t,n,e){var o=[null];o.push.apply(o,n);var r=new(Function.bind.apply(t,o));return e&&(0,i.Z)(r,e.prototype),r}).apply(null,arguments)}function s(t){var n="function"===typeof Map?new Map:void 0;return(s=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return c(t,arguments,(0,o.Z)(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),(0,i.Z)(r,t)})(t)}}},function(t){t.O(0,[6556,5445,6893,8214,6242,9774,2888,179],(function(){return n=1140,t(t.s=n);var n}));var n=t.O();_N_E=n}]);