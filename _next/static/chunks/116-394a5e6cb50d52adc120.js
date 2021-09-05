(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[116],{3757:function(_){_.exports={attributes:{_dbMeta:{routeId:"NOTIFY",lastModifiedDate:"2021-10-29",title:"Notify | Notiflix",description:'Notiflix Notify module can be used to send non-blocking alerts/notifications. This module includes 4 types of notifications: "Success", "Failure", "Warning", and "Info".',robots:"noindex, nofollow, noodp, noydir",ogImage:null,themeColor:null},_dbNotifyBanner:{importNamespace:"Notify",title:"Notify",description:'Notiflix Notify module can be used to send non-blocking alerts/notifications. This module includes 4 types of notifications: "Success", "Failure", "Warning", and "Info".',importDescription:"(A) Import as a Module",htmlDescription:"(B) Add to an HTML page (Global)",htmlOneByOne:"(B1) CSS and JS",htmlOneByOneCSS:"../dist/notiflix-X.X.X.min.css",htmlOneByOneJS:"../dist/notiflix-X.X.X.min.js",htmlAllInOne:"(B2) or only JS (All in One => Internal CSS)",htmlAllInOneJS:"../dist/notiflix-aio-X.X.X.min.js"},_dbNotifyPlayground:{title:"Playground",namespace:"Notify",comments:["@param1 {string}: Required, a text in string format.","@param2 {function | Object}: Optional, a callback function that will be called when the notification element has been clicked. Or, extending the initialize options with the new options for each notification element.","@param3 {Object}: Optional, extending the initialize options with new options for each notification element. (If the second parameter has been already used for a callback function.)"],docsText:"Options",demoTitle:"Demo",demoDescription:"A text can be typed for the demonstration.",demoInputPlaceholder:"Message",demoButton:"Send",callbackTitle:"Callback Function",callbackDescription:"A callback function can be added as a second parameter. The callback function can be used for all types of notifications. The notifications with the callback function do not disappear until they were clicked.",callbackMessage:"Click to show an alert.",callbackInputPlaceholder:"Alert message",callbackButton:"Send",extendDocsText:"All Options",extendDocsRouteHash:"#DocsNotify",extendTitle:"Extending the Options",extendDescription:'Extending the initialize options with the new options for each notification element. An "options" object can be added as a second parameter. In addition, it has to be the third parameter if the second parameter has been already used for a callback function.',extendMessage:"Peace at home, peace in the world.",types:[{id:"SUCCESS",sortOrder:1,isActive:!0,functionName:"success",defaultValue:"Sol lucet omnibus",docsRouteHash:"#DocsNotifySuccess"},{id:"FAILURE",sortOrder:2,isActive:!0,functionName:"failure",defaultValue:"Qui timide rogat docet negare",docsRouteHash:"#DocsNotifyFailure"},{id:"WARNING",sortOrder:3,isActive:!0,functionName:"warning",defaultValue:"Memento te hominem esse",docsRouteHash:"#DocsNotifyWarning"},{id:"INFO",sortOrder:4,isActive:!0,functionName:"info",defaultValue:"Cogito ergo sum",docsRouteHash:"#DocsNotifyInfo"}]}},html:""}},907:function(_,e,t){"use strict";t.d(e,{Z:function(){return d}});var i=t(5893),n=t(2809),a=t(7294),o=t(8216);function s(_,e){var t=Object.keys(_);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(_);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(_,e).enumerable}))),t.push.apply(t,i)}return t}function l(_){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){(0,n.Z)(_,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(_,e,Object.getOwnPropertyDescriptor(t,e))}))}return _}var c=function _(e,t){var i=this;(0,o.Z)(this,_),(0,n.Z)(this,"self",void 0),(0,n.Z)(this,"options",void 0),(0,n.Z)(this,"elements",void 0),(0,n.Z)(this,"observer",void 0),(0,n.Z)(this,"defaults",{selector:".js-lazyload",attributeNameSrc:"data-src",attributeNameSrcset:"data-srcset",classNameLoaded:"js-lazyloaded",root:null,rootMargin:"0px",threshold:0}),(0,n.Z)(this,"observe",(function(){var _=i.self;Array.prototype.forEach.call(i.elements,(function(e){var t;null===(t=_.observer)||void 0===t||t.observe(e)}))})),(0,n.Z)(this,"loader",(function(_){var e=_.getAttribute(i.options.attributeNameSrc||i.defaults.attributeNameSrc)||"",t=_.getAttribute(i.options.attributeNameSrcset||i.defaults.attributeNameSrcset)||"",n=e.length>1,a=t.length>1;_ instanceof HTMLImageElement?(n&&(_.src=e),a&&(_.srcset=t,window.navigator.userAgent.toLocaleLowerCase("en").indexOf(".net4")>-1&&(String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(_,e){var t=e&&e>0?e:0;return this.substring(t,t+_.length)===_}}),t.trim().startsWith("data:image")?_.src=(t.split(", data:image")[0]||t.split(",data:image")[0]||t.split(", http")[0]||t.split(",http")[0]||t.split(", /")[0]||t.split(",/")[0]||"").trim():_.src=(t.trim().split(", ")[0]||t.trim().split(",")[0]||"").trim().split(" ")[0].trim()))):_ instanceof HTMLElement&&n&&(_.style.backgroundImage='url("'.concat(e,'")'),_.style.backgroundRepeat="no-repeat",_.style.backgroundSize="cover",_.style.backgroundPosition="center"),(n||a)&&_.classList.add(i.options.classNameLoaded||i.defaults.classNameLoaded)})),(0,n.Z)(this,"loadImages",(function(){var _=i.self;Array.prototype.forEach.call(_.elements,(function(e){_.loader(e)}))})),(0,n.Z)(this,"init",(function(){if(window.IntersectionObserver){var _={root:i.options.root||i.defaults.root,rootMargin:i.options.rootMargin||i.defaults.rootMargin,threshold:[i.options.threshold||i.defaults.threshold]};i.observer=new IntersectionObserver((function(_){var e=i.self;Array.prototype.forEach.call(_,(function(_){var t,n=_.target.classList.contains(e.options.classNameLoaded||e.defaults.classNameLoaded);_.isIntersecting&&!n&&(i.loader(_.target),null===(t=i.observer)||void 0===t||t.unobserve(_.target))}))}),_),i.observe()}else i.loadImages()})),(0,n.Z)(this,"disconnect",(function(){var _;null===(_=i.observer)||void 0===_||_.disconnect()})),(0,n.Z)(this,"reconnect",(function(){i.observe()})),this.self=this,this.options=l(l({},this.defaults),e),this.elements=t||window.document.querySelectorAll(this.options.selector||this.defaults.selector),this.observer=null,this.init()},d=function(_){var e,t=_.id,o=_.className,s=_.alt,l=_.width,d=_.height,r=_.placeholder,u=_.src,y=_.srcset,m=_.attributeNameSrc,p=_.attributeNameSrcset,g=_.classNameLoaded,f=_.root,h=_.rootMargin,j=_.threshold,N=r||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4AQMAAAADqqSRAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABZJREFUOMtjGAWjYBSMglEwCkYB3QEAB4AAAe7tUzsAAAAASUVORK5CYII=",M=(0,a.createRef)();(0,a.useEffect)((function(){M.current&&new c({attributeNameSrc:m,attributeNameSrcset:p,classNameLoaded:g,root:f,threshold:j,rootMargin:h},[M.current])}),[M,m,p,g,f,h,j]);var x=(0,a.createElement)("img",(e={ref:M,id:t,className:o||"",alt:s,width:l,height:d},(0,n.Z)(e,m||"data-src",u),(0,n.Z)(e,p||"data-srcet",y),(0,n.Z)(e,"src",N),e),null);return(0,i.jsx)(i.Fragment,{children:x})}},4116:function(_,e,t){"use strict";t.r(e),t.d(e,{default:function(){return j}});var i,n=t(5893),a=t(7294),o=t(1664),s=t(1317),l=t(6893),c=t(3854),d=t(7516),r=t(3757),u=t(3634),y=t(4882),m=t(6972);!function(_){_.SUCCESS="SUCCESS",_.FAILURE="FAILURE",_.WARNING="WARNING",_.INFO="INFO"}(i||(i={}));var p=new Map([[i.SUCCESS,"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xhc3M9Im5taSIgY2xpcC1ydWxlPSJldmVub2RkIiBpbWFnZS1yZW5kZXJpbmc9Im9wdGltaXplUXVhbGl0eSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0icmdiYSgwLDAsMCwuMikiIGQ9Ik0yMCAwYzExLjAzIDAgMjAgOC45NyAyMCAyMHMtOC45NyAyMC0yMCAyMFMwIDMxLjAzIDAgMjAgOC45NyAwIDIwIDB6bTAgMzcuOThjOS45MiAwIDE3Ljk4LTguMDYgMTcuOTgtMTcuOThTMjkuOTIgMi4wMiAyMCAyLjAyIDIuMDIgMTAuMDggMi4wMiAyMCAxMC4wOCAzNy45OCAyMCAzNy45OHptLTIuNC0xMy4yOWwxMS41Mi0xMi45NmExLjAxIDEuMDEgMCAwIDEgMS40Mi0uMDggMSAxIDAgMCAxIC4wOSAxLjQyTDE4LjQ3IDI2Ljc0YS45OC45OCAwIDAgMS0uNzUuMzRjLS4yMyAwLS40NS0uMDctLjYzLS4yMmwtNy42LTYuMDdjLS40My0uMzUtLjUtLjk5LS4xNi0xLjQyLjM1LS40My45OS0uNSAxLjQyLS4xNmw2Ljg1IDUuNDh6IiBjbGFzcz0iZmlsMCIvPjwvc3ZnPg=="],[i.FAILURE,"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xhc3M9Im5taSIgY2xpcC1ydWxlPSJldmVub2RkIiBpbWFnZS1yZW5kZXJpbmc9Im9wdGltaXplUXVhbGl0eSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0icmdiYSgwLDAsMCwuMikiIGQ9Ik0yMCAwYzExLjAzIDAgMjAgOC45NyAyMCAyMHMtOC45NyAyMC0yMCAyMFMwIDMxLjAzIDAgMjAgOC45NyAwIDIwIDB6bTAgMzcuOThjOS45MiAwIDE3Ljk4LTguMDYgMTcuOTgtMTcuOThTMjkuOTIgMi4wMiAyMCAyLjAyIDIuMDIgMTAuMDggMi4wMiAyMCAxMC4wOCAzNy45OCAyMCAzNy45OHpNMjEuNDIgMjBsNi4xMyA2LjEyYy4zOS40LjM5IDEuMDQgMCAxLjQzLS4xOS4xOS0uNDUuMjktLjcxLjI5LS4yNyAwLS41My0uMS0uNzItLjI5TDIwIDIxLjQybC02LjEzIDYuMTNhLjk5Ljk5IDAgMCAxLS43MS4yOS45OS45OSAwIDAgMS0uNzEtLjI5IDEuMDIgMS4wMiAwIDAgMSAwLTEuNDNMMTguNTggMjBsLTYuMTMtNi4xM2MtLjM5LS4zOS0uMzktMS4wMyAwLTEuNDIuMzktLjM5IDEuMDMtLjM5IDEuNDIgMEwyMCAxOC41N2w2LjEyLTYuMTJjLjQtLjM5IDEuMDQtLjM5IDEuNDMgMCAuMzkuMzkuMzkgMS4wMyAwIDEuNDJMMjEuNDIgMjB6IiBjbGFzcz0iZmlsMCIvPjwvc3ZnPg=="],[i.WARNING,"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xhc3M9Im5taSIgY2xpcC1ydWxlPSJldmVub2RkIiBpbWFnZS1yZW5kZXJpbmc9Im9wdGltaXplUXVhbGl0eSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0icmdiYSgwLDAsMCwuMikiIGQ9Ik0yMS45MSAzLjQ4bDE3LjggMzAuODljLjg0IDEuNDYtLjIzIDMuMjUtMS45MSAzLjI1SDIuMmMtMS42OCAwLTIuNzUtMS43OS0xLjkxLTMuMjVsMTcuOC0zMC44OWMuODUtMS40NyAyLjk3LTEuNDcgMy44MiAwem0xNi4xNSAzMS44NEwyMC4yNiA0LjQzYS4zLjMgMCAwIDAtLjUyIDBMMS45NCAzNS4zMmMtLjEyLjIuMDUuNC4yNi40aDM1LjZjLjIxIDAgLjM4LS4yLjI2LS40ek0xOS4wNSAzMS4ydi0xLjA1YzAtLjUzLjQyLS45NS45NS0uOTVzLjk1LjQyLjk1Ljk1djEuMDVjMCAuNTMtLjQyLjk1LS45NS45NXMtLjk1LS40Mi0uOTUtLjk1em0wLTQuNjZWMTMuMTVhLjk1Ljk1IDAgMSAxIDEuOSAwdjEzLjM5YzAgLjUzLS40Mi45Ni0uOTUuOTZzLS45NS0uNDMtLjk1LS45NnoiIGNsYXNzPSJmaWwwIi8+PC9zdmc+"],[i.INFO,"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xhc3M9Im5taSIgY2xpcC1ydWxlPSJldmVub2RkIiBpbWFnZS1yZW5kZXJpbmc9Im9wdGltaXplUXVhbGl0eSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0icmdiYSgwLDAsMCwuMikiIGQ9Ik0yMCAwYzExLjAzIDAgMjAgOC45NyAyMCAyMHMtOC45NyAyMC0yMCAyMFMwIDMxLjAzIDAgMjAgOC45NyAwIDIwIDB6bTAgMzcuOThjOS45MiAwIDE3Ljk4LTguMDYgMTcuOTgtMTcuOThTMjkuOTIgMi4wMiAyMCAyLjAyIDIuMDIgMTAuMDggMi4wMiAyMCAxMC4wOCAzNy45OCAyMCAzNy45OHptLS45OS0yMy4zYzAtLjU0LjQ0LS45OC45OS0uOThzLjk5LjQ0Ljk5Ljk4djE1Ljg2YzAgLjU1LS40NC45OS0uOTkuOTlzLS45OS0uNDQtLjk5LS45OVYxNC42OHptMC01LjIyYzAtLjU1LjQ0LS45OS45OS0uOTlzLjk5LjQ0Ljk5Ljk5djEuMDljMCAuNTQtLjQ0Ljk5LS45OS45OXMtLjk5LS40NS0uOTktLjk5VjkuNDZ6IiBjbGFzcz0iZmlsMCIvPjwvc3ZnPg=="]]),g=t(907),f=t(2177),h=t.n(f);var j=function(){var _,e,t,i,f,j,N,M=r.attributes._dbNotifyPlayground,x=u._.app.name,A=null===M||void 0===M?void 0:M.namespace,v=(null===(_=y._j.find((function(_){return _.id===m.D.DOCUMENTATION})))||void 0===_?void 0:_.pathPage)||"/",b=(null===(e=y._j.find((function(_){return _.id===m.D.DOCUMENTATION})))||void 0===e?void 0:e.pathAs)||"/",I=(0,a.useState)(!0),w=I[0],S=I[1],L=function(_,e,t){s.Notify[_](e,t,u._.app.libraryOptions.notify)},O=(0,a.useRef)([]),D=(0,a.useRef)(null);return(0,n.jsxs)("div",{className:h().notify__playground,children:[(0,n.jsxs)("div",{className:h().notify__playground__head,children:[(0,n.jsx)("h2",{className:h().notify__playground__head__title,children:null===M||void 0===M?void 0:M.title}),(0,n.jsx)("button",{"aria-label":u._.app.text.switch,onClick:function(){S(!w)},className:["".concat(h().notify__playground__head__switch),"".concat(h()["notify__playground__head__switch--".concat(w?"module":"global")]||"")].join(" ").trim(),children:(0,n.jsx)("span",{className:h().notify__playground__head__switch__text,children:w?u._.app.text.module:u._.app.text.global})})]}),(0,n.jsxs)("div",{className:h().notify__playground__list,children:[null===M||void 0===M||null===(t=M.types)||void 0===t||null===(i=t.filter((function(_){return _.isActive})))||void 0===i||null===(f=i.sort((function(_,e){return _.sortOrder-e.sortOrder})))||void 0===f?void 0:f.map((function(_,e){return(0,n.jsx)("div",{className:["".concat(h().notify__playground__list__item),"".concat(h()["notify__playground__list__item--".concat(_.functionName)]||"")].join(" ").trim(),children:(0,n.jsxs)("div",{className:h().notify__playground__list__item__content,children:[(0,n.jsxs)("div",{className:h().notify__playground__list__item__head,children:[(0,n.jsx)("h3",{className:["".concat(h().notify__playground__list__item__head__title),"".concat(h()["notify__playground__list__item__head__title--".concat(_.functionName)]||"")].join(" ").trim(),children:[w?null:x,A,"".concat(_.functionName,"();")].filter((function(_){return _})).join(".")}),(0,n.jsx)(o.default,{href:v,as:"".concat("https://notiflix.github.io").concat(b).concat(_.docsRouteHash),passHref:!0,children:(0,n.jsxs)("a",{className:h().notify__playground__list__item__head__link,children:[(0,n.jsx)(l.nbt,{className:h().notify__playground__list__item__head__link__icon}),(0,n.jsx)("span",{children:M.docsText})]})})]}),(0,n.jsxs)("div",{className:h().notify__playground__list__item__usage,children:[(0,n.jsx)("div",{className:h().notify__playground__list__item__usage__code,children:(0,n.jsxs)("code",{className:"code code--medium",children:[(0,n.jsx)("span",{className:"code__lvl1 code__lvl--pb0",children:(0,n.jsx)("span",{className:"code__comment code__comment--fullbeginning"})}),M.comments.map((function(_,e){return(0,n.jsx)("span",{className:"code__lvl1 code__lvl--py0",children:(0,n.jsx)("span",{className:"code__comment code__comment--fullmiddle",children:_})},e)})),(0,n.jsx)("span",{className:"code__lvl1 code__lvl--py0",children:(0,n.jsx)("span",{className:"code__comment code__comment--fullend"})}),(0,n.jsxs)("span",{className:"code__lvl1",children:[!w&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"code__namespace",children:x}),(0,n.jsx)("span",{children:"."})]}),(0,n.jsx)("span",{className:"code__namespace",children:A}),(0,n.jsx)("span",{children:"."}),(0,n.jsx)("span",{className:"code__func",children:_.functionName}),(0,n.jsx)("span",{children:"("}),(0,n.jsx)("span",{className:"code__string",children:"'".concat(_.defaultValue,"'")}),(0,n.jsx)("span",{children:");"})]})]})}),(0,n.jsxs)("div",{className:h().notify__playground__list__item__usage__preview,children:[(0,n.jsx)(c.AgX,{className:h().notify__playground__list__item__usage__preview__arrow}),(0,n.jsxs)("div",{className:["".concat(h().notify__playground__list__item__usage__preview__item),"".concat(h()["notify__playground__list__item__usage__preview__item--".concat(_.functionName)]||"")].join(" ").trim(),children:[(0,n.jsx)("svg",{className:h().notify__playground__list__item__usage__preview__item__arrow,width:"40",height:"54",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 54",children:(0,n.jsx)("path",{fill:"currentColor",d:"M28.45 2.32h-3.49c-7.04 0-12.34 2.11-15.98 5.49-4.04 3.76-6.03 9.13-6.03 14.93 0 5.81 1.99 11.17 6.03 14.93 3.57 3.32 8.76 5.41 15.6 5.49-1.11-2.37-2.12-4.08-3.11-6.68-.29-.77.7-1.25 1.28-.98 5.09 2.37 10.08 4.9 14.99 7.61.43.23.57 1.01.13 1.35-4.49 3.47-9.32 6.1-14.63 7.96-.58.2-1.28-.44-1.02-1.05l2.44-6.59c-7.32-.06-12.89-2.32-16.76-5.92-4.39-4.08-6.55-9.87-6.55-16.12 0-6.24 2.16-12.03 6.55-16.12C11.82 2.98 17.49.71 24.96.71h3.49a.805.805 0 1 1 0 1.61zm7.57 41.63c-4.06-2.21-8.19-4.31-12.37-6.3.85 1.9 1.85 3.73 2.71 5.64.17.38.18.78.03 1.18l-2.21 5.97c4.23-1.62 8.17-3.78 11.84-6.49z"})}),(0,n.jsxs)("button",{type:"button",onClick:function(){return L(_.functionName,_.defaultValue)},className:h().notify__playground__list__item__usage__preview__item__button,children:[(0,n.jsx)(g.Z,{threshold:.25,className:h().notify__playground__list__item__usage__preview__item__icon,classNameLoaded:h()["notify__playground__list__item__usage__preview__item__icon--loaded"],width:"40",height:"40",src:(t=_.id,p.get(t)||""),alt:_.functionName}),(0,n.jsx)("span",{children:_.defaultValue})]})]})]})]}),(0,n.jsxs)("div",{className:h().notify__playground__list__item__demo,children:[(0,n.jsxs)("div",{className:h().notify__playground__list__item__demo__head,children:[(0,n.jsx)("h4",{className:h().notify__playground__list__item__demo__head__title,children:M.demoTitle}),(0,n.jsx)("p",{className:h().notify__playground__list__item__demo__head__description,children:M.demoDescription})]}),(0,n.jsxs)("div",{className:h().notify__playground__list__item__demo__code,children:[(0,n.jsx)("code",{className:"code code--medium",children:(0,n.jsxs)("span",{className:"code__lvl1",children:[!w&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"code__namespace",children:x}),(0,n.jsx)("span",{children:"."})]}),(0,n.jsx)("span",{className:"code__namespace",children:A}),(0,n.jsx)("span",{children:"."}),(0,n.jsx)("span",{className:"code__func",children:_.functionName}),(0,n.jsx)("span",{children:"("}),(0,n.jsx)("span",{className:"code__string",children:"'"}),(0,n.jsx)("span",{className:"code__string",children:(0,n.jsx)("input",{ref:function(_){return O.current[e]=_},className:"code__input",placeholder:M.demoInputPlaceholder,type:"text"})}),(0,n.jsx)("span",{className:"code__string",children:"'"}),(0,n.jsx)("span",{children:");"})]})}),(0,n.jsxs)("button",{"aria-label":M.demoButton,type:"button",onClick:function(){return function(_,e){var t,i,n=(null===(t=O.current[e])||void 0===t?void 0:t.value)||"";n?L(_,n):null===(i=O.current[e])||void 0===i||i.focus()}(_.functionName,e)},className:h().notify__playground__list__item__demo__code__button,children:[(0,n.jsx)(d.DBs,{className:h().notify__playground__list__item__demo__code__button__icon}),(0,n.jsx)("span",{children:M.demoButton})]})]})]})]})},e);var t})),(0,n.jsx)("div",{className:["".concat(h().notify__playground__list__item),"".concat(h()["notify__playground__list__item--callback"]||"")].join(" ").trim(),children:(0,n.jsxs)("div",{className:h().notify__playground__list__item__content,children:[(0,n.jsxs)("div",{className:h().notify__playground__list__item__head,children:[(0,n.jsx)("h3",{className:h().notify__playground__list__item__head__title,children:null===M||void 0===M?void 0:M.callbackTitle}),(0,n.jsx)("p",{className:h().notify__playground__list__item__head__description,children:null===M||void 0===M?void 0:M.callbackDescription})]}),(0,n.jsx)("div",{className:h().notify__playground__list__item__demo,children:(0,n.jsxs)("div",{className:h().notify__playground__list__item__demo__code,children:[(0,n.jsxs)("code",{className:"code code--medium",children:[(0,n.jsxs)("span",{className:"code__lvl1 code__lvl--pb0",children:[!w&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"code__namespace",children:x}),(0,n.jsx)("span",{children:"."})]}),(0,n.jsx)("span",{className:"code__namespace",children:A}),(0,n.jsx)("span",{children:"."}),(0,n.jsx)("span",{className:"code__func",children:null===M||void 0===M||null===(j=M.types.find((function(_){return _})))||void 0===j?void 0:j.functionName}),(0,n.jsx)("span",{children:"("}),(0,n.jsx)("span",{className:"code__string",children:"'".concat(null===M||void 0===M?void 0:M.callbackMessage,"'")}),(0,n.jsx)("span",{children:", "}),w?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:"() "}),(0,n.jsx)("span",{className:"code__boolean",children:"=>"}),(0,n.jsx)("span",{children:" {"})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"code__boolean",children:"function"}),(0,n.jsx)("span",{className:"code__func",children:" cb"}),(0,n.jsx)("span",{children:"() {"})]})]}),(0,n.jsxs)("span",{className:"code__lvl2 code__lvl--py0",children:[(0,n.jsx)("span",{className:"code__func",children:"alert"}),(0,n.jsx)("span",{children:"("}),(0,n.jsx)("span",{className:"code__string",children:"'"}),(0,n.jsx)("span",{className:"code__string",children:(0,n.jsx)("input",{ref:D,className:"code__input",placeholder:null===M||void 0===M?void 0:M.callbackInputPlaceholder,type:"text"})}),(0,n.jsx)("span",{className:"code__string",children:"'"}),(0,n.jsx)("span",{children:");"})]}),(0,n.jsx)("span",{className:"code__lvl1 code__lvl--pt0",children:(0,n.jsx)("span",{children:"});"})})]}),(0,n.jsxs)("button",{"aria-label":null===M||void 0===M?void 0:M.callbackButton,type:"button",onClick:function(){var _,e,t,i=null===M||void 0===M||null===(_=M.types.find((function(_){return _})))||void 0===_?void 0:_.functionName,n=(null===(e=D.current)||void 0===e?void 0:e.value)||"";i&&n?L(i,(null===M||void 0===M?void 0:M.callbackMessage)||"",(function(){alert(n)})):null===(t=D.current)||void 0===t||t.focus()},className:h().notify__playground__list__item__demo__code__button,children:[(0,n.jsx)(d.DBs,{className:h().notify__playground__list__item__demo__code__button__icon}),(0,n.jsx)("span",{children:null===M||void 0===M?void 0:M.callbackButton})]})]})})]})}),(0,n.jsx)("div",{className:["".concat(h().notify__playground__list__item),"".concat(h()["notify__playground__list__item--extend"]||"")].join(" ").trim(),children:(0,n.jsxs)("div",{className:h().notify__playground__list__item__content,children:[(0,n.jsxs)("div",{className:h().notify__playground__list__item__head,children:[(0,n.jsx)("h3",{className:h().notify__playground__list__item__head__title,children:null===M||void 0===M?void 0:M.extendTitle}),(0,n.jsx)("p",{className:h().notify__playground__list__item__head__description,children:null===M||void 0===M?void 0:M.extendDescription}),(0,n.jsx)(o.default,{href:v,as:"".concat("https://notiflix.github.io").concat(b).concat(null===M||void 0===M?void 0:M.extendDocsRouteHash),passHref:!0,children:(0,n.jsxs)("a",{className:h().notify__playground__list__item__head__link,children:[(0,n.jsx)(l.nbt,{className:h().notify__playground__list__item__head__link__icon}),(0,n.jsx)("span",{children:null===M||void 0===M?void 0:M.extendDocsText})]})})]}),(0,n.jsx)("div",{className:h().notify__playground__list__item__usage,children:(0,n.jsx)("div",{className:h().notify__playground__list__item__usage__code,children:(0,n.jsxs)("code",{className:"code code--medium",children:[(0,n.jsxs)("span",{className:"code__lvl1 code__lvl--pb0",children:[!w&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"code__namespace",children:x}),(0,n.jsx)("span",{children:"."})]}),(0,n.jsx)("span",{className:"code__namespace",children:A}),(0,n.jsx)("span",{children:"."}),(0,n.jsx)("span",{className:"code__func",children:null===M||void 0===M||null===(N=M.types.find((function(_){return _})))||void 0===N?void 0:N.functionName}),(0,n.jsx)("span",{children:"("}),(0,n.jsx)("span",{className:"code__string",children:"'".concat(null===M||void 0===M?void 0:M.extendMessage,"'")}),(0,n.jsx)("span",{children:", {"})]}),(0,n.jsxs)("span",{className:"code__lvl2 code__lvl--py0",children:[(0,n.jsx)("span",{className:"code__attr",children:"ID: "}),(0,n.jsx)("span",{className:"code__string",children:"'MKA'"}),(0,n.jsx)("span",{children:","})]}),(0,n.jsxs)("span",{className:"code__lvl2 code__lvl--py0",children:[(0,n.jsx)("span",{className:"code__attr",children:"timeout: "}),(0,n.jsx)("span",{className:"code__number",children:"1923"}),(0,n.jsx)("span",{children:","})]}),(0,n.jsxs)("span",{className:"code__lvl2 code__lvl--py0",children:[(0,n.jsx)("span",{className:"code__attr",children:"showOnlyTheLastOne: "}),(0,n.jsx)("span",{className:"code__boolean",children:"true"}),(0,n.jsx)("span",{children:","})]}),(0,n.jsx)("span",{className:"code__lvl1 code__lvl--pt0",children:(0,n.jsx)("span",{children:"});"})})]})})})]})})]})]})}},2177:function(_){_.exports={notify__playground:"NotifyPlayground_notify__playground__3EqFw",notify__playground__head:"NotifyPlayground_notify__playground__head__21QXU",notify__playground__head__title:"NotifyPlayground_notify__playground__head__title__2cdi4",notify__playground__head__switch:"NotifyPlayground_notify__playground__head__switch__2WXCV","notify__playground__head__switch--module":"NotifyPlayground_notify__playground__head__switch--module__1nClu",notify__playground__head__switch__text:"NotifyPlayground_notify__playground__head__switch__text__3WDsH",notify__playground__list:"NotifyPlayground_notify__playground__list__FJ_Dm",notify__playground__list__item:"NotifyPlayground_notify__playground__list__item__1yvEg",notify__playground__list__item__content:"NotifyPlayground_notify__playground__list__item__content__2zIAk",notify__playground__list__item__head:"NotifyPlayground_notify__playground__list__item__head__3O5RK",notify__playground__list__item__head__title:"NotifyPlayground_notify__playground__list__item__head__title__3iZxF","notify__playground__list__item__head__title--success":"NotifyPlayground_notify__playground__list__item__head__title--success__2uJA2","notify__playground__list__item__head__title--failure":"NotifyPlayground_notify__playground__list__item__head__title--failure__3mrea","notify__playground__list__item__head__title--warning":"NotifyPlayground_notify__playground__list__item__head__title--warning__2aTRK","notify__playground__list__item__head__title--info":"NotifyPlayground_notify__playground__list__item__head__title--info__23iQ7",notify__playground__list__item__head__description:"NotifyPlayground_notify__playground__list__item__head__description__14hIB",notify__playground__list__item__head__link:"NotifyPlayground_notify__playground__list__item__head__link__1Jfh0",notify__playground__list__item__head__link__icon:"NotifyPlayground_notify__playground__list__item__head__link__icon__jnIRP","notify__playground__list__item--callback":"NotifyPlayground_notify__playground__list__item--callback__28Nxi",notify__playground__list__item__usage:"NotifyPlayground_notify__playground__list__item__usage__3tTVW",notify__playground__list__item__usage__code:"NotifyPlayground_notify__playground__list__item__usage__code__3fnoK",notify__playground__list__item__usage__preview:"NotifyPlayground_notify__playground__list__item__usage__preview__2pYt1",notify__playground__list__item__usage__preview__arrow:"NotifyPlayground_notify__playground__list__item__usage__preview__arrow__2PYWR",notify__playground__list__item__usage__preview__item:"NotifyPlayground_notify__playground__list__item__usage__preview__item__2S_Ir","notify__playground__list__item__usage__preview__item--success":"NotifyPlayground_notify__playground__list__item__usage__preview__item--success__15qLU","notify__playground__list__item__usage__preview__item--failure":"NotifyPlayground_notify__playground__list__item__usage__preview__item--failure__2ZC8c","notify__playground__list__item__usage__preview__item--warning":"NotifyPlayground_notify__playground__list__item__usage__preview__item--warning__2Rkba","notify__playground__list__item__usage__preview__item--info":"NotifyPlayground_notify__playground__list__item__usage__preview__item--info__28WKM",notify__playground__list__item__usage__preview__item__button:"NotifyPlayground_notify__playground__list__item__usage__preview__item__button__3L0S-",notify__playground__list__item__usage__preview__item__arrow:"NotifyPlayground_notify__playground__list__item__usage__preview__item__arrow__2wDSg",notify__playground__list__item__usage__preview__item__icon:"NotifyPlayground_notify__playground__list__item__usage__preview__item__icon__1Nq-P","notify__playground__list__item--extend":"NotifyPlayground_notify__playground__list__item--extend__2tqe4",notify__playground__list__item__demo:"NotifyPlayground_notify__playground__list__item__demo__2a4PT",notify__playground__list__item__demo__head:"NotifyPlayground_notify__playground__list__item__demo__head__2jumP",notify__playground__list__item__demo__head__title:"NotifyPlayground_notify__playground__list__item__demo__head__title__1jpKO",notify__playground__list__item__demo__head__description:"NotifyPlayground_notify__playground__list__item__demo__head__description__1dAng",notify__playground__list__item__demo__code:"NotifyPlayground_notify__playground__list__item__demo__code__1-JrL",notify__playground__list__item__demo__code__button:"NotifyPlayground_notify__playground__list__item__demo__code__button__3hPmb",notify__playground__list__item__demo__code__button__icon:"NotifyPlayground_notify__playground__list__item__demo__code__button__icon__1xPc5"}}}]);