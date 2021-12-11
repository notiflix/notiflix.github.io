(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7662],{3757:function(e){e.exports={attributes:{_dbPageMeta:{routeId:"NOTIFY",lastModifiedDate:"2021-11-08",title:"Notify | Notiflix",description:'Notiflix Notify module can be used to send non-blocking alerts/notifications. This module includes 4 types of notifications: "Success", "Failure", "Warning", and "Info".',robots:"index, follow, noodp, noydir",ogImage:null,themeColor:null},_dbNotifyBanner:{importNamespace:"Notify",title:"Notify",description:'Notiflix Notify module can be used to send non-blocking alerts/notifications. This module includes 4 types of notifications: "Success", "Failure", "Warning", and "Info".',importPath:"notiflix/build/notiflix-notify-aio",importDescription:"(A) Import as a Module",htmlDescription:"(B) Add to an HTML page (Global)",htmlOnlyThis:"(B1) Notify Module, only JS (All in One => Internal CSS)",htmlOnlyThisJS:"dist/notiflix-notify-aio-X.X.X.min.js",htmlOneByOne:"(B2) All Modules, CSS and JS",htmlOneByOneCSS:"dist/notiflix-X.X.X.min.css",htmlOneByOneJS:"dist/notiflix-X.X.X.min.js",htmlAllInOne:"(B3) All Modules, only JS (All in One => Internal CSS)",htmlAllInOneJS:"dist/notiflix-aio-X.X.X.min.js"},_dbNotifyPlayground:{title:"Playground",namespace:"Notify",comments:["@param1 {string}: Required, a text in string format.","@param2 {function | Object}: Optional, a callback function that will be called when the notification element has been clicked. Or, extending the initialize options with the new options for each notification element.","@param3 {Object}: Optional, extending the initialize options with new the options for each notification element. (If the second parameter has been already used for a callback function.)"],methods:[{id:"SUCCESS",sortOrder:1,isActive:!0,functionName:"success",defaultValue:"Sol lucet omnibus",docsLinkText:"Options",docsLinkRouteHash:"#DocsNotifySuccess"},{id:"FAILURE",sortOrder:2,isActive:!0,functionName:"failure",defaultValue:"Qui timide rogat docet negare",docsLinkText:"Options",docsLinkRouteHash:"#DocsNotifyFailure"},{id:"WARNING",sortOrder:3,isActive:!0,functionName:"warning",defaultValue:"Memento te hominem esse",docsLinkText:"Options",docsLinkRouteHash:"#DocsNotifyWarning"},{id:"INFO",sortOrder:4,isActive:!0,functionName:"info",defaultValue:"Cogito ergo sum",docsLinkText:"Options",docsLinkRouteHash:"#DocsNotifyInfo"}],demoInfoTitle:"Demo",demoInfoDescription:"A text can be typed for the demonstration.",demoInputPlaceholder:"Message",demoButtonText:"Send",callbackInfoTitle:"Callback Function",callbackInfoDescription:"A callback function can be added as the second parameter. The callback function can be used for all types of notifications. The notifications with the callback function do not disappear until they were clicked.",callbackExampleMessage:"Click to show an alert.",callbackInputPlaceholder:"Alert message",callbackButtonText:"Send",extendDocsLinkText:"All Options",extendDocsLinkRouteHash:"#DocsNotify",extendInfoTitle:"Extending the Options",extendInfoDescription:'Extending the initialize options with the new options for each notification element. An "options" object can be added as the second parameter. In addition, it has to be the third parameter if the second parameter has been already used for a callback function.',extendExampleMessage:"Peace at home, peace in the world."}},html:""}},7343:function(e,n,a){"use strict";a.d(n,{Z:function(){return c}});var i=a(5893),t=a(7294);function _(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){return null!=n&&"undefined"!==typeof Symbol&&n[Symbol.hasInstance]?n[Symbol.hasInstance](e):e instanceof n}var l,d=function e(n,a){var i=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.defaults={selector:".js-lazyload",attributeNameSrc:"data-src",attributeNameSrcset:"data-srcset",classNameLoaded:"js-lazyloaded",root:null,rootMargin:"0px",threshold:0},this.observe=function(){var e=i.self;Array.prototype.forEach.call(i.elements,(function(n){var a;null===(a=e.observer)||void 0===a||a.observe(n)}))},this.loader=function(e){var n=e.getAttribute(i.options.attributeNameSrc||i.defaults.attributeNameSrc)||"",a=e.getAttribute(i.options.attributeNameSrcset||i.defaults.attributeNameSrcset)||"",t=n.length>1,_=a.length>1;o(e,HTMLImageElement)?(t&&(e.src=n),_&&(e.srcset=a,window.navigator.userAgent.toLocaleLowerCase("en").indexOf(".net4")>-1&&(String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,n){var a=n&&n>0?n:0;return this.substring(a,a+e.length)===e}}),a.trim().startsWith("data:image")?e.src=(a.split(", data:image")[0]||a.split(",data:image")[0]||a.split(", http")[0]||a.split(",http")[0]||a.split(", /")[0]||a.split(",/")[0]||"").trim():e.src=(a.trim().split(", ")[0]||a.trim().split(",")[0]||"").trim().split(" ")[0].trim()))):o(e,HTMLElement)&&t&&(e.style.backgroundImage='url("'.concat(n,'")'),e.style.backgroundRepeat="no-repeat",e.style.backgroundSize="cover",e.style.backgroundPosition="center"),(t||_)&&e.classList.add(i.options.classNameLoaded||i.defaults.classNameLoaded)},this.loadImages=function(){var e=i.self;Array.prototype.forEach.call(e.elements,(function(n){e.loader(n)}))},this.init=function(){var e=i;if(window.IntersectionObserver){var n={root:i.options.root||i.defaults.root,rootMargin:i.options.rootMargin||i.defaults.rootMargin,threshold:[i.options.threshold||i.defaults.threshold]};i.observer=new IntersectionObserver((function(n){var a=e,i=e.self;Array.prototype.forEach.call(n,(function(e){var n,t=e.target.classList.contains(i.options.classNameLoaded||i.defaults.classNameLoaded);e.isIntersecting&&!t&&(a.loader(e.target),null===(n=a.observer)||void 0===n||n.unobserve(e.target))}))}),n),i.observe()}else i.loadImages()},this.disconnect=function(){var e;null===(e=i.observer)||void 0===e||e.disconnect()},this.reconnect=function(){i.observe()},this.self=this,this.options=function(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{},i=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),i.forEach((function(n){_(e,n,a[n])}))}return e}({},this.defaults,n),this.elements=a||window.document.querySelectorAll(this.options.selector||this.defaults.selector),this.observer=null,this.init()};function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}var c=function(e){var n=e.id,a=e.className,_=e.alt,o=e.width,c=e.height,r=e.placeholder,u=e.src,m=e.srcset,p=e.attributeNameSrc,g=e.attributeNameSrcset,h=e.classNameLoaded,y=e.root,j=e.rootMargin,M=e.threshold,N=r||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4AQMAAAADqqSRAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABZJREFUOMtjGAWjYBSMglEwCkYB3QEAB4AAAe7tUzsAAAAASUVORK5CYII=",x=(0,t.createRef)();(0,t.useEffect)((function(){x.current&&new d({attributeNameSrc:p,attributeNameSrcset:g,classNameLoaded:h,root:y,threshold:M,rootMargin:j},[x.current])}),[x,p,g,h,y,j,M]);var v=(0,t.createElement)("img",(s(l={ref:x,id:n,className:a||"",alt:_,width:o,height:c},p||"data-src",u),s(l,g||"data-srcet",m),s(l,"src",N),l),null);return(0,i.jsx)(i.Fragment,{children:v})}},7662:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return x}});var i,t,_=a(5893),o=a(7294),l=a(1664),d=a(1678),s=a(6893),c=a(3854),r=a(7516),u=a(6195),m=a(3757),p=a(2319),g=a(8655),h=a(290);(t=i||(i={})).SUCCESS="SUCCESS",t.FAILURE="FAILURE",t.WARNING="WARNING",t.INFO="INFO";var y=new Map([[i.SUCCESS,"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xhc3M9Im5taSIgY2xpcC1ydWxlPSJldmVub2RkIiBpbWFnZS1yZW5kZXJpbmc9Im9wdGltaXplUXVhbGl0eSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0icmdiYSgwLDAsMCwuMikiIGQ9Ik0yMCAwYzExLjAzIDAgMjAgOC45NyAyMCAyMHMtOC45NyAyMC0yMCAyMFMwIDMxLjAzIDAgMjAgOC45NyAwIDIwIDB6bTAgMzcuOThjOS45MiAwIDE3Ljk4LTguMDYgMTcuOTgtMTcuOThTMjkuOTIgMi4wMiAyMCAyLjAyIDIuMDIgMTAuMDggMi4wMiAyMCAxMC4wOCAzNy45OCAyMCAzNy45OHptLTIuNC0xMy4yOWwxMS41Mi0xMi45NmExLjAxIDEuMDEgMCAwIDEgMS40Mi0uMDggMSAxIDAgMCAxIC4wOSAxLjQyTDE4LjQ3IDI2Ljc0YS45OC45OCAwIDAgMS0uNzUuMzRjLS4yMyAwLS40NS0uMDctLjYzLS4yMmwtNy42LTYuMDdjLS40My0uMzUtLjUtLjk5LS4xNi0xLjQyLjM1LS40My45OS0uNSAxLjQyLS4xNmw2Ljg1IDUuNDh6IiBjbGFzcz0iZmlsMCIvPjwvc3ZnPg=="],[i.FAILURE,"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xhc3M9Im5taSIgY2xpcC1ydWxlPSJldmVub2RkIiBpbWFnZS1yZW5kZXJpbmc9Im9wdGltaXplUXVhbGl0eSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0icmdiYSgwLDAsMCwuMikiIGQ9Ik0yMCAwYzExLjAzIDAgMjAgOC45NyAyMCAyMHMtOC45NyAyMC0yMCAyMFMwIDMxLjAzIDAgMjAgOC45NyAwIDIwIDB6bTAgMzcuOThjOS45MiAwIDE3Ljk4LTguMDYgMTcuOTgtMTcuOThTMjkuOTIgMi4wMiAyMCAyLjAyIDIuMDIgMTAuMDggMi4wMiAyMCAxMC4wOCAzNy45OCAyMCAzNy45OHpNMjEuNDIgMjBsNi4xMyA2LjEyYy4zOS40LjM5IDEuMDQgMCAxLjQzLS4xOS4xOS0uNDUuMjktLjcxLjI5LS4yNyAwLS41My0uMS0uNzItLjI5TDIwIDIxLjQybC02LjEzIDYuMTNhLjk5Ljk5IDAgMCAxLS43MS4yOS45OS45OSAwIDAgMS0uNzEtLjI5IDEuMDIgMS4wMiAwIDAgMSAwLTEuNDNMMTguNTggMjBsLTYuMTMtNi4xM2MtLjM5LS4zOS0uMzktMS4wMyAwLTEuNDIuMzktLjM5IDEuMDMtLjM5IDEuNDIgMEwyMCAxOC41N2w2LjEyLTYuMTJjLjQtLjM5IDEuMDQtLjM5IDEuNDMgMCAuMzkuMzkuMzkgMS4wMyAwIDEuNDJMMjEuNDIgMjB6IiBjbGFzcz0iZmlsMCIvPjwvc3ZnPg=="],[i.WARNING,"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xhc3M9Im5taSIgY2xpcC1ydWxlPSJldmVub2RkIiBpbWFnZS1yZW5kZXJpbmc9Im9wdGltaXplUXVhbGl0eSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0icmdiYSgwLDAsMCwuMikiIGQ9Ik0yMS45MSAzLjQ4bDE3LjggMzAuODljLjg0IDEuNDYtLjIzIDMuMjUtMS45MSAzLjI1SDIuMmMtMS42OCAwLTIuNzUtMS43OS0xLjkxLTMuMjVsMTcuOC0zMC44OWMuODUtMS40NyAyLjk3LTEuNDcgMy44MiAwem0xNi4xNSAzMS44NEwyMC4yNiA0LjQzYS4zLjMgMCAwIDAtLjUyIDBMMS45NCAzNS4zMmMtLjEyLjIuMDUuNC4yNi40aDM1LjZjLjIxIDAgLjM4LS4yLjI2LS40ek0xOS4wNSAzMS4ydi0xLjA1YzAtLjUzLjQyLS45NS45NS0uOTVzLjk1LjQyLjk1Ljk1djEuMDVjMCAuNTMtLjQyLjk1LS45NS45NXMtLjk1LS40Mi0uOTUtLjk1em0wLTQuNjZWMTMuMTVhLjk1Ljk1IDAgMSAxIDEuOSAwdjEzLjM5YzAgLjUzLS40Mi45Ni0uOTUuOTZzLS45NS0uNDMtLjk1LS45NnoiIGNsYXNzPSJmaWwwIi8+PC9zdmc+"],[i.INFO,"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xhc3M9Im5taSIgY2xpcC1ydWxlPSJldmVub2RkIiBpbWFnZS1yZW5kZXJpbmc9Im9wdGltaXplUXVhbGl0eSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0icmdiYSgwLDAsMCwuMikiIGQ9Ik0yMCAwYzExLjAzIDAgMjAgOC45NyAyMCAyMHMtOC45NyAyMC0yMCAyMFMwIDMxLjAzIDAgMjAgOC45NyAwIDIwIDB6bTAgMzcuOThjOS45MiAwIDE3Ljk4LTguMDYgMTcuOTgtMTcuOThTMjkuOTIgMi4wMiAyMCAyLjAyIDIuMDIgMTAuMDggMi4wMiAyMCAxMC4wOCAzNy45OCAyMCAzNy45OHptLS45OS0yMy4zYzAtLjU0LjQ0LS45OC45OS0uOThzLjk5LjQ0Ljk5Ljk4djE1Ljg2YzAgLjU1LS40NC45OS0uOTkuOTlzLS45OS0uNDQtLjk5LS45OVYxNC42OHptMC01LjIyYzAtLjU1LjQ0LS45OS45OS0uOTlzLjk5LjQ0Ljk5Ljk5djEuMDljMCAuNTQtLjQ0Ljk5LS45OS45OXMtLjk5LS40NS0uOTktLjk5VjkuNDZ6IiBjbGFzcz0iZmlsMCIvPjwvc3ZnPg=="]]),j=a(7343),M=a(8244),N=a.n(M);var x=function(){var e,n,a,i,t,M,x,v,f,A,b=u.attributes._dbAppContent,I=m.attributes._dbNotifyPlayground,L=p._.app.name,w=null===I||void 0===I?void 0:I.namespace,S=null===(n=null===I||void 0===I||null===(e=I.methods)||void 0===e?void 0:e.find((function(e){return e})))||void 0===n?void 0:n.functionName,C=(null===(a=g._j.find((function(e){return(null===e||void 0===e?void 0:e.id)===h.D.DOCUMENTATION})))||void 0===a?void 0:a.pathPage)||"/",O=(null===(i=g._j.find((function(e){return(null===e||void 0===e?void 0:e.id)===h.D.DOCUMENTATION})))||void 0===i?void 0:i.pathAs)||"/",D=(0,o.useState)(!0),k=D[0],T=D[1],Z=function(e,n,a){d.Notify[e](n,a,p._.app.libraryOptions.notify)},P=(0,o.useRef)([]),z=(0,o.useRef)(null);return(0,_.jsxs)("div",{className:N().playground,children:[(0,_.jsxs)("div",{className:N().playground__head,children:[(0,_.jsx)("h2",{className:N().playground__head__title,children:null===I||void 0===I?void 0:I.title}),(0,_.jsx)("button",{"aria-label":null===b||void 0===b||null===(t=b.buttons)||void 0===t?void 0:t.switch,type:"button",onClick:function(){T(!k)},className:["".concat(N().playground__head__switch),"".concat(N()["playground__head__switch--".concat(k?"module":"global")]||"")].join(" ").trim(),children:(0,_.jsx)("span",{className:N().playground__head__switch__text,children:k?null===b||void 0===b||null===(M=b.buttons)||void 0===M?void 0:M.module:null===b||void 0===b||null===(x=b.buttons)||void 0===x?void 0:x.global})})]}),(0,_.jsxs)("div",{className:N().playground__items,children:[null===(A=null===(f=null===I||void 0===I||null===(v=I.methods)||void 0===v?void 0:v.filter((function(e){return null===e||void 0===e?void 0:e.isActive})))||void 0===f?void 0:f.sort((function(e,n){return(null===e||void 0===e?void 0:e.sortOrder)-(null===n||void 0===n?void 0:n.sortOrder)})))||void 0===A?void 0:A.map((function(e,n){var a,i;return(0,_.jsx)("div",{className:["".concat(N().playground__item),"".concat(N()["playground__item--".concat(null===e||void 0===e?void 0:e.functionName)]||"")].join(" ").trim(),children:(0,_.jsxs)("div",{className:N().playground__item__wrapper,children:[(0,_.jsxs)("div",{className:N().playground__item__head,children:[(0,_.jsx)("h3",{className:["".concat(N().playground__item__head__title),"".concat(N()["playground__item__head__title--".concat(null===e||void 0===e?void 0:e.functionName)]||"")].join(" ").trim(),children:[k?null:L,w,"".concat(null===e||void 0===e?void 0:e.functionName,"();")].filter((function(e){return e})).join(".")}),(0,_.jsx)(l.default,{href:C,as:"".concat("https://notiflix.github.io").concat(O).concat(null===e||void 0===e?void 0:e.docsLinkRouteHash),passHref:!0,prefetch:!1,children:(0,_.jsxs)("a",{className:N().playground__item__head__link,children:[(0,_.jsx)(s.nbt,{className:N().playground__item__head__link__icon}),(0,_.jsx)("span",{children:null===e||void 0===e?void 0:e.docsLinkText})]})})]}),(0,_.jsxs)("div",{className:N().playground__item__usage,children:[(0,_.jsx)("div",{className:N().playground__item__usage__code,children:(0,_.jsxs)("code",{className:"code code--medium",children:[(0,_.jsx)("span",{className:"code__indent1 code__indent--pb0",children:(0,_.jsx)("span",{className:"code__comment code__comment--fullbeginning"})}),null===I||void 0===I||null===(a=I.comments)||void 0===a?void 0:a.map((function(e,n){return(0,_.jsx)("span",{className:"code__indent1 code__indent--py0",children:(0,_.jsx)("span",{className:"code__comment code__comment--fullmiddle",children:e})},n)})),(0,_.jsx)("span",{className:"code__indent1 code__indent--py0",children:(0,_.jsx)("span",{className:"code__comment code__comment--fullend"})}),(0,_.jsxs)("span",{className:"code__indent1",children:[!k&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("span",{className:"code__namespace",children:L}),(0,_.jsx)("span",{children:"."})]}),(0,_.jsx)("span",{className:"code__namespace",children:w}),(0,_.jsx)("span",{children:"."}),(0,_.jsx)("span",{className:"code__method",children:null===e||void 0===e?void 0:e.functionName}),(0,_.jsx)("span",{children:"("}),(0,_.jsx)("span",{className:"code__string",children:"'".concat(null===e||void 0===e?void 0:e.defaultValue,"'")}),(0,_.jsx)("span",{children:");"})]})]})}),(0,_.jsxs)("div",{className:N().playground__item__usage__preview,children:[(0,_.jsx)(c.AgX,{className:N().playground__item__usage__preview__arrow}),(0,_.jsxs)("div",{className:["".concat(N().playground__item__usage__preview__item),"".concat(N()["playground__item__usage__preview__item--".concat(null===e||void 0===e?void 0:e.functionName)]||"")].join(" ").trim(),children:[(0,_.jsx)("svg",{className:N().playground__item__usage__preview__item__arrow,width:"40",height:"54",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 54",children:(0,_.jsx)("path",{fill:"currentColor",d:"M28.45 2.32h-3.49c-7.04 0-12.34 2.11-15.98 5.49-4.04 3.76-6.03 9.13-6.03 14.93 0 5.81 1.99 11.17 6.03 14.93 3.57 3.32 8.76 5.41 15.6 5.49-1.11-2.37-2.12-4.08-3.11-6.68-.29-.77.7-1.25 1.28-.98 5.09 2.37 10.08 4.9 14.99 7.61.43.23.57 1.01.13 1.35-4.49 3.47-9.32 6.1-14.63 7.96-.58.2-1.28-.44-1.02-1.05l2.44-6.59c-7.32-.06-12.89-2.32-16.76-5.92-4.39-4.08-6.55-9.87-6.55-16.12 0-6.24 2.16-12.03 6.55-16.12C11.82 2.98 17.49.71 24.96.71h3.49a.805.805 0 1 1 0 1.61zm7.57 41.63c-4.06-2.21-8.19-4.31-12.37-6.3.85 1.9 1.85 3.73 2.71 5.64.17.38.18.78.03 1.18l-2.21 5.97c4.23-1.62 8.17-3.78 11.84-6.49z"})}),(0,_.jsxs)("button",{"aria-label":null===e||void 0===e?void 0:e.defaultValue,type:"button",onClick:function(){return Z(null===e||void 0===e?void 0:e.functionName,null===e||void 0===e?void 0:e.defaultValue)},className:N().playground__item__usage__preview__item__button,children:[(0,_.jsx)(j.Z,{threshold:.25,className:N().playground__item__usage__preview__item__icon,classNameLoaded:N()["playground__item__usage__preview__item__icon--loaded"],width:"40",height:"40",src:(i=null===e||void 0===e?void 0:e.id,y.get(i)||""),alt:null===e||void 0===e?void 0:e.functionName}),(0,_.jsx)("span",{children:null===e||void 0===e?void 0:e.defaultValue})]})]})]})]}),(0,_.jsxs)("div",{className:N().playground__item__demo,children:[(0,_.jsxs)("div",{className:N().playground__item__demo__head,children:[(0,_.jsx)("h4",{className:N().playground__item__demo__head__title,children:I.demoInfoTitle}),(0,_.jsx)("p",{className:N().playground__item__demo__head__description,children:I.demoInfoDescription})]}),(0,_.jsxs)("div",{className:N().playground__item__demo__code,children:[(0,_.jsx)("code",{className:"code code--medium",children:(0,_.jsxs)("span",{className:"code__indent1",children:[!k&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("span",{className:"code__namespace",children:L}),(0,_.jsx)("span",{children:"."})]}),(0,_.jsx)("span",{className:"code__namespace",children:w}),(0,_.jsx)("span",{children:"."}),(0,_.jsx)("span",{className:"code__method",children:null===e||void 0===e?void 0:e.functionName}),(0,_.jsx)("span",{children:"("}),(0,_.jsx)("span",{className:"code__string",children:"'"}),(0,_.jsx)("span",{className:"code__string",children:(0,_.jsx)("input",{ref:function(e){return P.current[n]=e},className:"code__input",placeholder:I.demoInputPlaceholder,type:"text",maxLength:110})}),(0,_.jsx)("span",{className:"code__string",children:"'"}),(0,_.jsx)("span",{children:");"})]})}),(0,_.jsxs)("button",{"aria-label":I.demoButtonText,type:"button",onClick:function(){return function(e,n){var a,i,t=(null===(a=P.current[n])||void 0===a?void 0:a.value)||"";t?Z(e,t):null===(i=P.current[n])||void 0===i||i.focus()}(null===e||void 0===e?void 0:e.functionName,n)},className:N().playground__item__demo__code__button,children:[(0,_.jsx)(r.DBs,{className:N().playground__item__demo__code__button__icon}),(0,_.jsx)("span",{children:I.demoButtonText})]})]})]})]})},n)})),(0,_.jsx)("div",{className:["".concat(N().playground__item),"".concat(N()["playground__item--callback"]||"")].join(" ").trim(),children:(0,_.jsxs)("div",{className:N().playground__item__wrapper,children:[(0,_.jsxs)("div",{className:N().playground__item__head,children:[(0,_.jsx)("h3",{className:N().playground__item__head__title,children:null===I||void 0===I?void 0:I.callbackInfoTitle}),(0,_.jsx)("p",{className:N().playground__item__head__description,children:null===I||void 0===I?void 0:I.callbackInfoDescription})]}),(0,_.jsx)("div",{className:N().playground__item__demo,children:(0,_.jsxs)("div",{className:N().playground__item__demo__code,children:[(0,_.jsxs)("code",{className:"code code--medium",children:[(0,_.jsxs)("span",{className:"code__indent1 code__indent--pb0",children:[!k&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("span",{className:"code__namespace",children:L}),(0,_.jsx)("span",{children:"."})]}),(0,_.jsx)("span",{className:"code__namespace",children:w}),(0,_.jsx)("span",{children:"."}),(0,_.jsx)("span",{className:"code__method",children:S}),(0,_.jsx)("span",{children:"("}),(0,_.jsx)("span",{className:"code__string",children:"'".concat(null===I||void 0===I?void 0:I.callbackExampleMessage,"'")}),(0,_.jsx)("span",{children:", "}),k?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("span",{children:"() "}),(0,_.jsx)("span",{className:"code__function",children:"=>"}),(0,_.jsx)("span",{children:" {"})]}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("span",{className:"code__function",children:"function"}),(0,_.jsx)("span",{className:"code__method",children:" cb"}),(0,_.jsx)("span",{children:"() {"})]})]}),(0,_.jsxs)("span",{className:"code__indent2 code__indent--py0",children:[(0,_.jsx)("span",{className:"code__method",children:"alert"}),(0,_.jsx)("span",{children:"("}),(0,_.jsx)("span",{className:"code__string",children:"'"}),(0,_.jsx)("span",{className:"code__string",children:(0,_.jsx)("input",{ref:z,className:"code__input",placeholder:null===I||void 0===I?void 0:I.callbackInputPlaceholder,type:"text",maxLength:110})}),(0,_.jsx)("span",{className:"code__string",children:"'"}),(0,_.jsx)("span",{children:");"})]}),(0,_.jsx)("span",{className:"code__indent1 code__indent--pt0",children:(0,_.jsx)("span",{children:"});"})})]}),(0,_.jsxs)("button",{"aria-label":null===I||void 0===I?void 0:I.callbackButtonText,type:"button",onClick:function(){var e,n,a=(null===(e=z.current)||void 0===e?void 0:e.value)||"";S&&a?Z(S,(null===I||void 0===I?void 0:I.callbackExampleMessage)||"",(function(){alert(a)})):null===(n=z.current)||void 0===n||n.focus()},className:N().playground__item__demo__code__button,children:[(0,_.jsx)(r.DBs,{className:N().playground__item__demo__code__button__icon}),(0,_.jsx)("span",{children:null===I||void 0===I?void 0:I.callbackButtonText})]})]})})]})}),(0,_.jsx)("div",{className:["".concat(N().playground__item),"".concat(N()["playground__item--extend"]||"")].join(" ").trim(),children:(0,_.jsxs)("div",{className:N().playground__item__wrapper,children:[(0,_.jsxs)("div",{className:N().playground__item__head,children:[(0,_.jsx)("h3",{className:N().playground__item__head__title,children:null===I||void 0===I?void 0:I.extendInfoTitle}),(0,_.jsx)("p",{className:N().playground__item__head__description,children:null===I||void 0===I?void 0:I.extendInfoDescription}),(0,_.jsx)(l.default,{href:C,as:"".concat("https://notiflix.github.io").concat(O).concat(null===I||void 0===I?void 0:I.extendDocsLinkRouteHash),passHref:!0,prefetch:!1,children:(0,_.jsxs)("a",{className:N().playground__item__head__link,children:[(0,_.jsx)(s.nbt,{className:N().playground__item__head__link__icon}),(0,_.jsx)("span",{children:null===I||void 0===I?void 0:I.extendDocsLinkText})]})})]}),(0,_.jsx)("div",{className:N().playground__item__usage,children:(0,_.jsx)("div",{className:N().playground__item__usage__code,children:(0,_.jsxs)("code",{className:"code code--medium",children:[(0,_.jsxs)("span",{className:"code__indent1 code__indent--pb0",children:[!k&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("span",{className:"code__namespace",children:L}),(0,_.jsx)("span",{children:"."})]}),(0,_.jsx)("span",{className:"code__namespace",children:w}),(0,_.jsx)("span",{children:"."}),(0,_.jsx)("span",{className:"code__method",children:S}),(0,_.jsx)("span",{children:"("}),(0,_.jsx)("span",{className:"code__string",children:"'".concat(null===I||void 0===I?void 0:I.extendExampleMessage,"'")}),(0,_.jsx)("span",{children:", {"})]}),(0,_.jsxs)("span",{className:"code__indent2 code__indent--py0",children:[(0,_.jsx)("span",{className:"code__attr",children:"ID: "}),(0,_.jsx)("span",{className:"code__string",children:"'MKA'"}),(0,_.jsx)("span",{children:","})]}),(0,_.jsxs)("span",{className:"code__indent2 code__indent--py0",children:[(0,_.jsx)("span",{className:"code__attr",children:"timeout: "}),(0,_.jsx)("span",{className:"code__number",children:"1923"}),(0,_.jsx)("span",{children:","})]}),(0,_.jsxs)("span",{className:"code__indent2 code__indent--py0",children:[(0,_.jsx)("span",{className:"code__attr",children:"showOnlyTheLastOne: "}),(0,_.jsx)("span",{className:"code__boolean",children:"true"}),(0,_.jsx)("span",{children:","})]}),(0,_.jsx)("span",{className:"code__indent1 code__indent--pt0",children:(0,_.jsx)("span",{children:"});"})})]})})})]})})]})]})}},8244:function(e){e.exports={playground:"Playground_playground__2XFQK",playground__head:"Playground_playground__head__r4X24",playground__head__title:"Playground_playground__head__title__64WuJ",playground__head__switch:"Playground_playground__head__switch__Cioio","playground__head__switch--module":"Playground_playground__head__switch--module__ivKRX",playground__head__switch__text:"Playground_playground__head__switch__text__Wdd8W",playground__items:"Playground_playground__items__Q9DrU",playground__item:"Playground_playground__item__36Cl0",playground__item__wrapper:"Playground_playground__item__wrapper__BIb6U",playground__item__head:"Playground_playground__item__head__2muui",playground__item__head__title:"Playground_playground__item__head__title__wYMRp","playground__item__head__title--success":"Playground_playground__item__head__title--success__mqlt9","playground__item__head__title--failure":"Playground_playground__item__head__title--failure__dFnLA","playground__item__head__title--warning":"Playground_playground__item__head__title--warning__BNbmq","playground__item__head__title--info":"Playground_playground__item__head__title--info__N_dnr",playground__item__head__description:"Playground_playground__item__head__description__1zbaP",playground__item__head__link:"Playground_playground__item__head__link__4wO3H",playground__item__head__link__icon:"Playground_playground__item__head__link__icon__2HndF","playground__item--callback":"Playground_playground__item--callback__hUi3M",playground__item__usage:"Playground_playground__item__usage__7sgOn",playground__item__usage__code:"Playground_playground__item__usage__code__Wbs1Q",playground__item__usage__preview:"Playground_playground__item__usage__preview__foCyJ",playground__item__usage__preview__arrow:"Playground_playground__item__usage__preview__arrow__Tsmbv",playground__item__usage__preview__item:"Playground_playground__item__usage__preview__item__gaS63","playground__item__usage__preview__item--success":"Playground_playground__item__usage__preview__item--success__Bn8m5","playground__item__usage__preview__item--failure":"Playground_playground__item__usage__preview__item--failure___U3ZN","playground__item__usage__preview__item--warning":"Playground_playground__item__usage__preview__item--warning___5pFy","playground__item__usage__preview__item--info":"Playground_playground__item__usage__preview__item--info__3dZ6j",playground__item__usage__preview__item__arrow:"Playground_playground__item__usage__preview__item__arrow__FXYpy",playground__item__usage__preview__item__button:"Playground_playground__item__usage__preview__item__button__d_B7R",playground__item__usage__preview__item__icon:"Playground_playground__item__usage__preview__item__icon__Dabcn","playground__item__usage__preview__item__icon--loaded":"Playground_playground__item__usage__preview__item__icon--loaded__SseDa","playground__item--extend":"Playground_playground__item--extend__qo15b",playground__item__demo:"Playground_playground__item__demo__j_MEJ",playground__item__demo__head:"Playground_playground__item__demo__head__2lvqF",playground__item__demo__head__title:"Playground_playground__item__demo__head__title__RIlnU",playground__item__demo__head__description:"Playground_playground__item__demo__head__description__IIVWp",playground__item__demo__code:"Playground_playground__item__demo__code__7AZjm",playground__item__demo__code__button:"Playground_playground__item__demo__code__button__JZoeI",playground__item__demo__code__button__icon:"Playground_playground__item__demo__code__button__icon__mO210"}}}]);