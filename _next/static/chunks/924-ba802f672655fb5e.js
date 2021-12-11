(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[924],{193:function(e){e.exports={attributes:{_dbPageMeta:{routeId:"BLOCK",lastModifiedDate:"2021-11-08",title:"Block | Notiflix",description:"Notiflix Block module can be used to block/unblock the elements during a process (Fetch/XHR), without locking the browser or the other elements/components to prevent the user\u2019s interactions on the blocked elements.",robots:"index, follow, noodp, noydir",ogImage:null,themeColor:null},_dbBlockBanner:{importNamespace:"Block",title:"Block",description:"Notiflix Block module can be used to block/unblock the elements during a process (Fetch/XHR), without locking the browser or the other elements/components to prevent the user\u2019s interactions on the blocked elements.",importPath:"notiflix/build/notiflix-block-aio",importDescription:"(A) Import as a Module",htmlDescription:"(B) Add to an HTML page (Global)",htmlOnlyThis:"(B1) Block Module, only JS (All in One => Internal CSS)",htmlOnlyThisJS:"dist/notiflix-block-aio-X.X.X.min.js",htmlOneByOne:"(B2) All Modules, CSS and JS",htmlOneByOneCSS:"dist/notiflix-X.X.X.min.css",htmlOneByOneJS:"dist/notiflix-X.X.X.min.js",htmlAllInOne:"(B3) All Modules, only JS (All in One => Internal CSS)",htmlAllInOneJS:"dist/notiflix-aio-X.X.X.min.js"},_dbBlockPlayground:{title:"Playground",namespace:"Block",infoDocsLinkText:"All Options",infoDocsLinkRouteHash:"#DocsBlock",commentsBlock:["@param1 {string | Array<HTMLElement> | NodeListOf<HTMLElement>}:  Required, CSS selector(s) that matches the element(s) | Array of HTMLElments | NodeListOf HTMLElments to block.","@param2 {string | Object}: Optional, a blocking message in string format. Or, extending the initialize options with the new options for each block element.","@param3 {Object}: Optional, extending the initialize options with new the options for each block element. (If the second parameter has been already used for a blocking message.)"],commentBlockOnly:"Only indicators",commentBlockWithMessage:"Indicator with a blocking message",commentBlockWithNewOptions:"Only indicator with the new options",commentBlockWithMessageAndNewOptions:"Indicator with a blocking message, and the new options",commentsUnblock:["@param1 {string | Array<HTMLElement> | NodeListOf<HTMLElement>}: Required, CSS selector(s) that matches the element(s) | Array of HTMLElments | NodeListOf HTMLElments to unblock.","@param2 {number}: Optional, milliseconds for delaying in number format."],commentUnblockImmediately:"Unblock immediately",commentUnblockWithDelay:"Unblock after delay => e.g. 1923ms",methodsDefaultSelector:".js-element",methodsDefaultMessage:"Please wait...",methodsBlockTitle:"Block",methodsBlockDescription:"Block the element(s).",methodsBlockIndicators:[{id:"STANDARD",sortOrder:1,isActive:!0,functionName:"standard"},{id:"HOURGLASS",sortOrder:2,isActive:!0,functionName:"hourglass"},{id:"CIRCLE",sortOrder:3,isActive:!0,functionName:"circle"},{id:"ARROWS",sortOrder:4,isActive:!0,functionName:"arrows"},{id:"DOTS",sortOrder:5,isActive:!0,functionName:"dots"},{id:"PULSE",sortOrder:6,isActive:!0,functionName:"pulse"}],methodUnblockTitle:"Unblock",methodUnblockDescription:"Unblock the element(s) if already has been blocked.",methodUnblockDuration:1923,methodUnblock:{id:"REMOVE",isActive:!0,functionName:"remove"},demoTitle:"Demo",demoDescription:"A blocking indicator type can be chosen for the demonstration.",demoInputPlaceholder:"Blocking Message (Optional)",demoElementTitle:"5 minutes for the next 50 years of your life",demoElementDescription:"... <br/><br/>Prioritize who you are, who you want to be and don\u2019t spend time with anything that antagonizes your character. <br/><br/>Be brave, take the hill, but first answer that question: What\u2019s my hill? <br/><br/>So first we have to define success for ourselves. And then we have to put in the work to maintain it. Make that daily tally. Tend to our garden. Keep the things that are important to us in good shape. <br/><br/>...",demoElementImage:"/content/media/block/notiflix-block-element-image.png",demoButtonUnblock:"Remove/Unblock"}},html:""}},7343:function(e,n,l){"use strict";l.d(n,{Z:function(){return m}});var t=l(5893),i=l(7294);function d(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function o(e,n){return null!=n&&"undefined"!==typeof Symbol&&n[Symbol.hasInstance]?n[Symbol.hasInstance](e):e instanceof n}var a,c=function e(n,l){var t=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.defaults={selector:".js-lazyload",attributeNameSrc:"data-src",attributeNameSrcset:"data-srcset",classNameLoaded:"js-lazyloaded",root:null,rootMargin:"0px",threshold:0},this.observe=function(){var e=t.self;Array.prototype.forEach.call(t.elements,(function(n){var l;null===(l=e.observer)||void 0===l||l.observe(n)}))},this.loader=function(e){var n=e.getAttribute(t.options.attributeNameSrc||t.defaults.attributeNameSrc)||"",l=e.getAttribute(t.options.attributeNameSrcset||t.defaults.attributeNameSrcset)||"",i=n.length>1,d=l.length>1;o(e,HTMLImageElement)?(i&&(e.src=n),d&&(e.srcset=l,window.navigator.userAgent.toLocaleLowerCase("en").indexOf(".net4")>-1&&(String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{value:function(e,n){var l=n&&n>0?n:0;return this.substring(l,l+e.length)===e}}),l.trim().startsWith("data:image")?e.src=(l.split(", data:image")[0]||l.split(",data:image")[0]||l.split(", http")[0]||l.split(",http")[0]||l.split(", /")[0]||l.split(",/")[0]||"").trim():e.src=(l.trim().split(", ")[0]||l.trim().split(",")[0]||"").trim().split(" ")[0].trim()))):o(e,HTMLElement)&&i&&(e.style.backgroundImage='url("'.concat(n,'")'),e.style.backgroundRepeat="no-repeat",e.style.backgroundSize="cover",e.style.backgroundPosition="center"),(i||d)&&e.classList.add(t.options.classNameLoaded||t.defaults.classNameLoaded)},this.loadImages=function(){var e=t.self;Array.prototype.forEach.call(e.elements,(function(n){e.loader(n)}))},this.init=function(){var e=t;if(window.IntersectionObserver){var n={root:t.options.root||t.defaults.root,rootMargin:t.options.rootMargin||t.defaults.rootMargin,threshold:[t.options.threshold||t.defaults.threshold]};t.observer=new IntersectionObserver((function(n){var l=e,t=e.self;Array.prototype.forEach.call(n,(function(e){var n,i=e.target.classList.contains(t.options.classNameLoaded||t.defaults.classNameLoaded);e.isIntersecting&&!i&&(l.loader(e.target),null===(n=l.observer)||void 0===n||n.unobserve(e.target))}))}),n),t.observe()}else t.loadImages()},this.disconnect=function(){var e;null===(e=t.observer)||void 0===e||e.disconnect()},this.reconnect=function(){t.observe()},this.self=this,this.options=function(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{},t=Object.keys(l);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(l).filter((function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable})))),t.forEach((function(n){d(e,n,l[n])}))}return e}({},this.defaults,n),this.elements=l||window.document.querySelectorAll(this.options.selector||this.defaults.selector),this.observer=null,this.init()};function s(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}var m=function(e){var n=e.id,l=e.className,d=e.alt,o=e.width,m=e.height,_=e.placeholder,r=e.src,u=e.srcset,g=e.attributeNameSrc,p=e.attributeNameSrcset,h=e.classNameLoaded,b=e.root,y=e.rootMargin,M=e.threshold,I=_||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4AQMAAAADqqSRAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABZJREFUOMtjGAWjYBSMglEwCkYB3QEAB4AAAe7tUzsAAAAASUVORK5CYII=",j=(0,i.createRef)();(0,i.useEffect)((function(){j.current&&new c({attributeNameSrc:g,attributeNameSrcset:p,classNameLoaded:h,root:b,threshold:M,rootMargin:y},[j.current])}),[j,g,p,h,b,y,M]);var N=(0,i.createElement)("img",(s(a={ref:j,id:n,className:l||"",alt:d,width:o,height:m},g||"data-src",r),s(a,p||"data-srcet",u),s(a,"src",I),a),null);return(0,t.jsx)(t.Fragment,{children:N})}},924:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return M}});var t,i,d=l(5893),o=l(7294),a=l(1664),c=l(8666),s=l(6893),m=l(6195),_=l(193),r=l(2319),u=l(8655),g=l(290);(i=t||(t={})).STANDARD="STANDARD",i.HOURGLASS="HOURGLASS",i.CIRCLE="CIRCLE",i.ARROWS="ARROWS",i.DOTS="DOTS",i.PULSE="PULSE";var p=new Map([[t.STANDARD,"data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiMzMmM2ODIiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMzggMzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9InRyYW5zZm9ybTpzY2FsZSgwLjgpOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBzdHJva2Utd2lkdGg9IjIiPjxjaXJjbGUgc3Ryb2tlLW9wYWNpdHk9Ii4yNSIgY3g9IjE4IiBjeT0iMTgiIHI9IjE4Ii8+PHBhdGggZD0iTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4Ij48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZnJvbT0iMCAxOCAxOCIgdG89IjM2MCAxOCAxOCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+PC9nPjwvZz48L3N2Zz4="],[t.HOURGLASS,"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgdGV4dC1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyBpbWFnZS1yZW5kZXJpbmc6b3B0aW1pemVRdWFsaXR5OyBmaWxsLXJ1bGU6ZXZlbm9kZDsgY2xpcC1ydWxlOmV2ZW5vZGQiIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiBpZD0iZWxfMUhpSjJMNFFwIj48c3R5bGU+QC13ZWJraXQta2V5ZnJhbWVzIGVsXzBTQzd3R1ZBVFdfdnZ6M1pWSDkxX0FuaW1hdGlvbnswJXstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7dHJhbnNmb3JtOiBzY2FsZSgxLCAxKTt9MTYuNjcley13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAwLjgpO3RyYW5zZm9ybTogc2NhbGUoMSwgMC44KTt9MzMuMzMley13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjg4LCAwLjYpO3RyYW5zZm9ybTogc2NhbGUoMC44OCwgMC42KTt9MzcuNTAley13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjg1LCAwLjU1KTt0cmFuc2Zvcm06IHNjYWxlKDAuODUsIDAuNTUpO300MS42NyV7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOCwgMC41KTt0cmFuc2Zvcm06IHNjYWxlKDAuOCwgMC41KTt9NDUuODMley13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjc1LCAwLjQ1KTt0cmFuc2Zvcm06IHNjYWxlKDAuNzUsIDAuNDUpO301MCV7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNywgMC40KTt0cmFuc2Zvcm06IHNjYWxlKDAuNywgMC40KTt9NTQuMTcley13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuMzUpO3RyYW5zZm9ybTogc2NhbGUoMC42LCAwLjM1KTt9NTguMzMley13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUsIDAuMyk7dHJhbnNmb3JtOiBzY2FsZSgwLjUsIDAuMyk7fTgzLjMzJXstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yLCAwKTt0cmFuc2Zvcm06IHNjYWxlKDAuMiwgMCk7fTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMiwgMCk7dHJhbnNmb3JtOiBzY2FsZSgwLjIsIDApO319QGtleWZyYW1lcyBlbF8wU0M3d0dWQVRXX3Z2ejNaVkg5MV9BbmltYXRpb257MCV7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO3RyYW5zZm9ybTogc2NhbGUoMSwgMSk7fTE2LjY3JXstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMC44KTt0cmFuc2Zvcm06IHNjYWxlKDEsIDAuOCk7fTMzLjMzJXstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44OCwgMC42KTt0cmFuc2Zvcm06IHNjYWxlKDAuODgsIDAuNik7fTM3LjUwJXstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44NSwgMC41NSk7dHJhbnNmb3JtOiBzY2FsZSgwLjg1LCAwLjU1KTt9NDEuNjcley13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgsIDAuNSk7dHJhbnNmb3JtOiBzY2FsZSgwLjgsIDAuNSk7fTQ1LjgzJXstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC43NSwgMC40NSk7dHJhbnNmb3JtOiBzY2FsZSgwLjc1LCAwLjQ1KTt9NTAley13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNCk7dHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNCk7fTU0LjE3JXstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjM1KTt0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC4zNSk7fTU4LjMzJXstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41LCAwLjMpO3RyYW5zZm9ybTogc2NhbGUoMC41LCAwLjMpO304My4zMyV7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMiwgMCk7dHJhbnNmb3JtOiBzY2FsZSgwLjIsIDApO30xMDAley13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjIsIDApO3RyYW5zZm9ybTogc2NhbGUoMC4yLCAwKTt9fUAtd2Via2l0LWtleWZyYW1lcyBlbF9jZWM1R3JYQVZ2X2lpVVFhZldzd19BbmltYXRpb257MCV7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDAuMDIpO3RyYW5zZm9ybTogc2NhbGUoMSwgMC4wMik7fTc5LjE3JXstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7dHJhbnNmb3JtOiBzY2FsZSgxLCAxKTt9MTAwJXstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7dHJhbnNmb3JtOiBzY2FsZSgxLCAxKTt9fUBrZXlmcmFtZXMgZWxfY2VjNUdyWEFWdl9paVVRYWZXc3dfQW5pbWF0aW9uezAley13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAwLjAyKTt0cmFuc2Zvcm06IHNjYWxlKDEsIDAuMDIpO303OS4xNyV7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO3RyYW5zZm9ybTogc2NhbGUoMSwgMSk7fTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO3RyYW5zZm9ybTogc2NhbGUoMSwgMSk7fX1ALXdlYmtpdC1rZXlmcmFtZXMgZWxfS0E5VEFJMmllR19fZ0Z5eWppLUFfQW5pbWF0aW9uezAley13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7fTgzLjMzJXstd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO3RyYW5zZm9ybTogcm90YXRlKDBkZWcpO30xMDAley13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTt0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO319QGtleWZyYW1lcyBlbF9LQTlUQUkyaWVHX19nRnl5amktQV9BbmltYXRpb257MCV7LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9ODMuMzMley13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7fTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7fX0jZWxfMUhpSjJMNFFwICp7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDIuNHM7YW5pbWF0aW9uLWR1cmF0aW9uOiAyLjRzOy13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMSwgMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAsIDEsIDEpO30jZWxfZWtjel83c1BWNXtmaWxsOiAjMzJjNjgyO30jZWxfS0E5VEFJMmllR19fZ0Z5eWppLUF7LXdlYmtpdC1hbmltYXRpb24tbmFtZTogZWxfS0E5VEFJMmllR19fZ0Z5eWppLUFfQW5pbWF0aW9uO2FuaW1hdGlvbi1uYW1lOiBlbF9LQTlUQUkyaWVHX19nRnl5amktQV9BbmltYXRpb247LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO3RyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7dHJhbnNmb3JtLWJveDogZmlsbC1ib3g7fSNlbF9jZWM1R3JYQVZ2X2lpVVFhZldzd3std2Via2l0LWFuaW1hdGlvbi1uYW1lOiBlbF9jZWM1R3JYQVZ2X2lpVVFhZldzd19BbmltYXRpb247YW5pbWF0aW9uLW5hbWU6IGVsX2NlYzVHclhBVnZfaWlVUWFmV3N3X0FuaW1hdGlvbjstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQyLCAwLCAwLjU4LCAxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40MiwgMCwgMC41OCwgMSk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTt0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTt0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDt9I2VsXzBTQzd3R1ZBVFdfdnZ6M1pWSDkxey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGVsXzBTQzd3R1ZBVFdfdnZ6M1pWSDkxX0FuaW1hdGlvbjthbmltYXRpb24tbmFtZTogZWxfMFNDN3dHVkFUV192dnozWlZIOTFfQW5pbWF0aW9uOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7dHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7dHJhbnNmb3JtLWJveDogZmlsbC1ib3g7fWcjZWxfMFNDN3dHVkFUV192dnozWlZIOTEsI2VsX2NlYzVHclhBVnZfaWlVUWFmV3N3ewlmaWxsOiAjMzJjNjgyO29wYWNpdHk6IC4zO308L3N0eWxlPjxnIGlkPSJlbF9LQTlUQUkyaWVHX19nRnl5amktQSIgZGF0YS1hbmltYXRvci1ncm91cD0idHJ1ZSIgZGF0YS1hbmltYXRvci10eXBlPSIxIj48ZyBpZD0iZWxfS0E5VEFJMmllRyI+PGcgaWQ9ImVsX2NlYzVHclhBVnZfaWlVUWFmV3N3IiBkYXRhLWFuaW1hdG9yLWdyb3VwPSJ0cnVlIiBkYXRhLWFuaW1hdG9yLXR5cGU9IjIiPjxwb2x5Z29uIHBvaW50cz0iMTAwLDEwMCA2NS42MiwxMzIuMDggNjUuNjIsMTYzLjIyIDEzNC4zOCwxNjMuMjIgMTM0LjM4LDEzMi4wOCAiIGlkPSJlbF9jZWM1R3JYQVZ2Ii8+PC9nPjxnIGlkPSJlbF8wU0M3d0dWQVRXX3Z2ejNaVkg5MSIgZGF0YS1hbmltYXRvci1ncm91cD0idHJ1ZSIgZGF0YS1hbmltYXRvci10eXBlPSIyIj48cG9seWdvbiBwb2ludHM9IjEwMCwxMDAgNjUuNjIsNjcuOTIgNjUuNjIsMzYuNzggMTM0LjM4LDM2Ljc4IDEzNC4zOCw2Ny45MiIgaWQ9ImVsXzBTQzd3R1ZBVFciLz48L2c+PHBhdGggZD0iTTUxLjE0IDM4Ljg5bDguMzMgMCAwIDE0LjkzYzAsMTUuMSA4LjI5LDI4Ljk5IDIzLjM0LDM5LjEgMS44OCwxLjI1IDMuMDQsMy45NyAzLjA0LDcuMDggMCwzLjExIC0xLjE2LDUuODMgLTMuMDQsNy4wOSAtMTUuMDUsMTAuMSAtMjMuMzQsMjMuOTkgLTIzLjM0LDM5LjA5bDAgMTQuOTMgLTguMzMgMGMtMi42OCwwIC00Ljg2LDIuMTggLTQuODYsNC44NiAwLDIuNjkgMi4xOCw0Ljg2IDQuODYsNC44Nmw5Ny43MiAwYzIuNjgsMCA0Ljg2LC0yLjE3IDQuODYsLTQuODYgMCwtMi42OCAtMi4xOCwtNC44NiAtNC44NiwtNC44NmwtOC4zMyAwIDAgLTE0LjkzYzAsLTE1LjEgLTguMjksLTI4Ljk5IC0yMy4zNCwtMzkuMDkgLTEuODgsLTEuMjYgLTMuMDQsLTMuOTggLTMuMDQsLTcuMDkgMCwtMy4xMSAxLjE2LC01LjgzIDMuMDQsLTcuMDggMTUuMDUsLTEwLjExIDIzLjM0LC0yNCAyMy4zNCwtMzkuMWwwIC0xNC45MyA4LjMzIDBjMi42OCwwIDQuODYsLTIuMTggNC44NiwtNC44NiAwLC0yLjY5IC0yLjE4LC00Ljg2IC00Ljg2LC00Ljg2bC05Ny43MiAwYy0yLjY4LDAgLTQuODYsMi4xNyAtNC44Niw0Ljg2IDAsMi42OCAyLjE4LDQuODYgNC44Niw0Ljg2em03OS42NyAxNC45M2MwLDE1Ljg3IC0xMS45MywyNi4yNSAtMTkuMDQsMzEuMDMgLTQuNiwzLjA4IC03LjM0LDguNzUgLTcuMzQsMTUuMTUgMCw2LjQxIDIuNzQsMTIuMDcgNy4zNCwxNS4xNSA3LjExLDQuNzggMTkuMDQsMTUuMTYgMTkuMDQsMzEuMDNsMCAxNC45MyAtNjEuNjIgMCAwIC0xNC45M2MwLC0xNS44NyAxMS45MywtMjYuMjUgMTkuMDQsLTMxLjAyIDQuNiwtMy4wOSA3LjM0LC04Ljc1IDcuMzQsLTE1LjE2IDAsLTYuNCAtMi43NCwtMTIuMDcgLTcuMzQsLTE1LjE1IC03LjExLC00Ljc4IC0xOS4wNCwtMTUuMTYgLTE5LjA0LC0zMS4wM2wwIC0xNC45MyA2MS42MiAwIDAgMTQuOTN6IiBpZD0iZWxfZWtjel83c1BWNSIvPjwvZz48L2c+PC9zdmc+"],[t.CIRCLE,"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgY2xhc3M9Im5vdGlmbGl4LWNpcmN1bGFyLWxvYWRlciIgdmlld0JveD0iMjUgMjUgNTAgNTAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+PHN0eWxlPi5ub3RpZmxpeC1jaXJjdWxhci1sb2FkZXJ7LXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7IGFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTsgaGVpZ2h0OiAyMDBweDsgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyOyAtbXMtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjsgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjsgd2lkdGg6IDIwMHB4OyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgbWFyZ2luOiBhdXRvO30ubm90aWZsaXgtbG9hZGVyLXBhdGh7c3Ryb2tlLWRhc2hhcnJheTogMTUwLDIwMDsgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMDsgLXdlYmtpdC1hbmltYXRpb246IGRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSwgY29sb3IgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTsgYW5pbWF0aW9uOiBkYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUsIGNvbG9yIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7IHN0cm9rZS1saW5lY2FwOiByb3VuZDt9QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZXsxMDAley13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTt9fUBrZXlmcmFtZXMgcm90YXRlezEwMCV7LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO319QC13ZWJraXQta2V5ZnJhbWVzIGRhc2h7MCV7c3Ryb2tlLWRhc2hhcnJheTogMSwyMDA7IHN0cm9rZS1kYXNob2Zmc2V0OiAwO301MCV7c3Ryb2tlLWRhc2hhcnJheTogODksMjAwOyBzdHJva2UtZGFzaG9mZnNldDogLTM1O30xMDAle3N0cm9rZS1kYXNoYXJyYXk6IDg5LDIwMDsgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjQ7fX1Aa2V5ZnJhbWVzIGRhc2h7MCV7c3Ryb2tlLWRhc2hhcnJheTogMSwyMDA7IHN0cm9rZS1kYXNob2Zmc2V0OiAwO301MCV7c3Ryb2tlLWRhc2hhcnJheTogODksMjAwOyBzdHJva2UtZGFzaG9mZnNldDogLTM1O30xMDAle3N0cm9rZS1kYXNoYXJyYXk6IDg5LDIwMDsgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjQ7fX08L3N0eWxlPjxjaXJjbGUgY2xhc3M9Im5vdGlmbGl4LWxvYWRlci1wYXRoIiBjeD0iNTAiIGN5PSI1MCIgcj0iMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMyYzY4MiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+"],[t.ARROWS,"data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMzJjNjgyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyMDBweCIgaGVpZ2h0PSIyMDBweCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIGZpbGw9ImluaGVyaXQiIGZpbGwtb3BhY2l0eT0iMSIgZD0iTTEwOS4yNSA1NS41aC0zNmwxMi0xMmEyOS41NCAyOS41NCAwIDAgMC00OS41MyAxMkgxOC43NUE0Ni4wNCA0Ni4wNCAwIDAgMSA5Ni45IDMxLjg0bDEyLjM1LTEyLjM0djM2em0tOTAuNSAxN2gzNmwtMTIgMTJhMjkuNTQgMjkuNTQgMCAwIDAgNDkuNTMtMTJoMTYuOTdBNDYuMDQgNDYuMDQgMCAwIDEgMzEuMSA5Ni4xNkwxOC43NCAxMDguNXYtMzZ6IiAvPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBmcm9tPSIwIDY0IDY0IiB0bz0iMzYwIDY0IDY0IiBkdXI9IjEuNXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9nPjwvc3ZnPg=="],[t.DOTS,"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBjbGFzcz0ibGRzLW1lc3NhZ2UiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUgNTApIj48Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iOSIgZmlsbD0iIzMyYzY4MiIgdHJhbnNmb3JtPSJzY2FsZSgwLjIzOTY4MyAwLjIzOTY4MykiPiA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBiZWdpbj0iLTAuMjY2NjY2NjY2NjY2NjY2NjZzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjMgMCAwLjcgMTswLjMgMCAwLjcgMSIgdmFsdWVzPSIwOzE7MCIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMC44cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L2NpcmNsZT48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAgNTApIj48Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iOSIgZmlsbD0iIzMyYzY4MiIgdHJhbnNmb3JtPSJzY2FsZSgwLjAwMTUyNzY3IDAuMDAxNTI3NjcpIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBiZWdpbj0iLTAuMTMzMzMzMzMzMzMzMzMzMzNzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjMgMCAwLjcgMTswLjMgMCAwLjcgMSIgdmFsdWVzPSIwOzE7MCIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMC44cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L2NpcmNsZT48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzUgNTApIj48Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iOSIgZmlsbD0iIzMyYzY4MiIgdHJhbnNmb3JtPSJzY2FsZSgwLjI5ODg1NyAwLjI5ODg1NykiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGJlZ2luPSIwcyIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iMC4zIDAgMC43IDE7MC4zIDAgMC43IDEiIHZhbHVlcz0iMDsxOzAiIGtleVRpbWVzPSIwOzAuNTsxIiBkdXI9IjAuOHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9jaXJjbGU+PC9nPjwvc3ZnPg=="],[t.PULSE,"data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiMzMmM2ODIiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgNDQgNDQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2Utd2lkdGg9IjIiPjxjaXJjbGUgY3g9IjIyIiBjeT0iMjIiIHI9IjEiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwcyIgZHVyPSIxLjhzIiB2YWx1ZXM9IjE7IDIwIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlUaW1lcz0iMDsgMSIga2V5U3BsaW5lcz0iMC4xNjUsIDAuODQsIDAuNDQsIDEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ic3Ryb2tlLW9wYWNpdHkiIGJlZ2luPSIwcyIgZHVyPSIxLjhzIiB2YWx1ZXM9IjE7IDAiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVRpbWVzPSIwOyAxIiBrZXlTcGxpbmVzPSIwLjMsIDAuNjEsIDAuMzU1LCAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjIyIiBjeT0iMjIiIHI9IjEiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSItMC45cyIgZHVyPSIxLjhzIiB2YWx1ZXM9IjE7IDIwIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlUaW1lcz0iMDsgMSIga2V5U3BsaW5lcz0iMC4xNjUsIDAuODQsIDAuNDQsIDEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ic3Ryb2tlLW9wYWNpdHkiIGJlZ2luPSItMC45cyIgZHVyPSIxLjhzIiB2YWx1ZXM9IjE7IDAiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVRpbWVzPSIwOyAxIiBrZXlTcGxpbmVzPSIwLjMsIDAuNjEsIDAuMzU1LCAxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvY2lyY2xlPjwvZz48L3N2Zz4="]]),h=l(7343),b=l(5496),y=l.n(b);var M=function(){var e,n,l,t,i,b,M,I,j,N,Z,W,x,L,v,A,D,w=m.attributes._dbAppContent,S=_.attributes._dbBlockPlayground,Y=r._.app.name,z=null===S||void 0===S?void 0:S.namespace,C=(null===(e=u._j.find((function(e){return(null===e||void 0===e?void 0:e.id)===g.D.DOCUMENTATION})))||void 0===e?void 0:e.pathPage)||"/",T=(null===(n=u._j.find((function(e){return(null===e||void 0===e?void 0:e.id)===g.D.DOCUMENTATION})))||void 0===n?void 0:n.pathAs)||"/",O=(0,o.useState)(!0),J=O[0],G=O[1],X=(0,o.useRef)(null),B=(0,o.useState)(!0),k=B[0],f=B[1],R=(0,o.useRef)(null),U=function(e){var n;f(!1),function(e,n){X.current&&c.Block[e]([X.current],n,r._.app.libraryOptions.block)}(e,(null===(n=R.current)||void 0===n?void 0:n.value)||"")};return(0,d.jsxs)("div",{className:y().playground,children:[(0,d.jsxs)("div",{className:y().playground__head,children:[(0,d.jsx)("h2",{className:y().playground__head__title,children:null===S||void 0===S?void 0:S.title}),(0,d.jsx)("button",{"aria-label":null===w||void 0===w||null===(l=w.buttons)||void 0===l?void 0:l.switch,type:"button",onClick:function(){G(!J)},className:["".concat(y().playground__head__switch),"".concat(y()["playground__head__switch--".concat(J?"module":"global")]||"")].join(" ").trim(),children:(0,d.jsx)("span",{className:y().playground__head__switch__text,children:J?null===w||void 0===w||null===(t=w.buttons)||void 0===t?void 0:t.module:null===w||void 0===w||null===(i=w.buttons)||void 0===i?void 0:i.global})})]}),(0,d.jsxs)("div",{className:y().playground__items,children:[(0,d.jsx)("div",{className:["".concat(y().playground__item),"".concat(y()["playground__item--indicators"]||"")].join(" ").trim(),children:(0,d.jsxs)("div",{className:y().playground__item__content,children:[(0,d.jsxs)("div",{className:y().playground__item__head,children:[(0,d.jsx)("h3",{className:y().playground__item__head__title,children:null===S||void 0===S?void 0:S.methodsBlockTitle}),(0,d.jsx)("p",{className:y().playground__item__head__description,children:null===S||void 0===S?void 0:S.methodsBlockDescription}),(0,d.jsx)(a.default,{href:C,as:"".concat("https://notiflix.github.io").concat(T).concat(null===S||void 0===S?void 0:S.infoDocsLinkRouteHash),passHref:!0,prefetch:!1,children:(0,d.jsxs)("a",{className:y().playground__item__head__link,children:[(0,d.jsx)(s.nbt,{className:y().playground__item__head__link__icon}),(0,d.jsx)("span",{children:null===S||void 0===S?void 0:S.infoDocsLinkText})]})})]}),(0,d.jsx)("div",{className:y().playground__item__usage,children:(0,d.jsx)("div",{className:y().playground__item__usage__code,children:(0,d.jsxs)("code",{className:"code code--medium",children:[(0,d.jsx)("span",{className:"code__indent1 code__indent--pb0",children:(0,d.jsx)("span",{className:"code__comment code__comment--fullbeginning"})}),null===S||void 0===S||null===(b=S.commentsBlock)||void 0===b?void 0:b.map((function(e,n){return(0,d.jsx)("span",{className:"code__indent1 code__indent--py0",children:(0,d.jsx)("span",{className:"code__comment code__comment--fullmiddle",children:e})},n)})),(0,d.jsx)("span",{className:"code__indent1 code__indent--py0",children:(0,d.jsx)("span",{className:"code__comment code__comment--fullend"})}),(0,d.jsx)("span",{className:"code__indent1 code__indent--pb0",children:(0,d.jsx)("span",{className:"code__comment",children:null===S||void 0===S?void 0:S.commentBlockOnly})}),null===S||void 0===S||null===(M=S.methodsBlockIndicators)||void 0===M?void 0:M.map((function(e,n){return(0,d.jsxs)("span",{className:"code__indent1 code__indent--py0",children:[!J&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:"code__namespace",children:Y}),(0,d.jsx)("span",{children:"."})]}),(0,d.jsx)("span",{className:"code__namespace",children:z}),(0,d.jsx)("span",{children:"."}),(0,d.jsx)("span",{className:"code__method",children:null===e||void 0===e?void 0:e.functionName}),(0,d.jsx)("span",{children:"("}),(0,d.jsx)("span",{className:"code__string",children:"'".concat(S.methodsDefaultSelector,"'")}),(0,d.jsx)("span",{children:");"})]},n)})),(0,d.jsx)("span",{className:"code__indent1 code__indent--pb0",children:(0,d.jsx)("span",{className:"code__comment",children:null===S||void 0===S?void 0:S.commentBlockWithMessage})}),(0,d.jsxs)("span",{className:"code__indent1 code__indent--py0",children:[!J&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:"code__namespace",children:Y}),(0,d.jsx)("span",{children:"."})]}),(0,d.jsx)("span",{className:"code__namespace",children:z}),(0,d.jsx)("span",{children:"."}),(0,d.jsx)("span",{className:"code__method",children:null===(j=null===S||void 0===S||null===(I=S.methodsBlockIndicators)||void 0===I?void 0:I.find((function(e){return e})))||void 0===j?void 0:j.functionName}),(0,d.jsx)("span",{children:"("}),(0,d.jsx)("span",{className:"code__string",children:"'".concat(null===S||void 0===S?void 0:S.methodsDefaultSelector,"'")}),(0,d.jsx)("span",{children:", "}),(0,d.jsx)("span",{className:"code__string",children:"'".concat(null===S||void 0===S?void 0:S.methodsDefaultMessage,"'")}),(0,d.jsx)("span",{children:");"})]}),(0,d.jsx)("span",{className:"code__indent1 code__indent--pb0",children:(0,d.jsx)("span",{className:"code__comment",children:null===S||void 0===S?void 0:S.commentBlockWithNewOptions})}),(0,d.jsxs)("span",{className:"code__indent1 code__indent--py0",children:[!J&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:"code__namespace",children:Y}),(0,d.jsx)("span",{children:"."})]}),(0,d.jsx)("span",{className:"code__namespace",children:z}),(0,d.jsx)("span",{children:"."}),(0,d.jsx)("span",{className:"code__method",children:null===(Z=null===S||void 0===S||null===(N=S.methodsBlockIndicators)||void 0===N?void 0:N.find((function(e){return e})))||void 0===Z?void 0:Z.functionName}),(0,d.jsx)("span",{children:"("}),(0,d.jsx)("span",{className:"code__string",children:"'".concat(null===S||void 0===S?void 0:S.methodsDefaultSelector,"'")}),(0,d.jsx)("span",{children:", {"})]}),(0,d.jsxs)("span",{className:"code__indent2 code__indent--py0",children:[(0,d.jsx)("span",{className:"code__attr",children:"cssAnimationDuration: "}),(0,d.jsx)("span",{className:"code__number",children:"1881"}),(0,d.jsx)("span",{children:","})]}),(0,d.jsxs)("span",{className:"code__indent2 code__indent--py0",children:[(0,d.jsx)("span",{className:"code__attr",children:"svgSize: "}),(0,d.jsx)("span",{className:"code__string",children:"'19px'"}),(0,d.jsx)("span",{children:","})]}),(0,d.jsx)("span",{className:"code__indent1 code__indent--py0",children:(0,d.jsx)("span",{children:"});"})}),(0,d.jsx)("span",{className:"code__indent1 code__indent--pb0",children:(0,d.jsx)("span",{className:"code__comment",children:null===S||void 0===S?void 0:S.commentBlockWithMessageAndNewOptions})}),(0,d.jsxs)("span",{className:"code__indent1 code__indent--py0",children:[!J&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:"code__namespace",children:Y}),(0,d.jsx)("span",{children:"."})]}),(0,d.jsx)("span",{className:"code__namespace",children:z}),(0,d.jsx)("span",{children:"."}),(0,d.jsx)("span",{className:"code__method",children:null===(x=null===S||void 0===S||null===(W=S.methodsBlockIndicators)||void 0===W?void 0:W.find((function(e){return e})))||void 0===x?void 0:x.functionName}),(0,d.jsx)("span",{children:"("}),(0,d.jsx)("span",{className:"code__string",children:"'".concat(null===S||void 0===S?void 0:S.methodsDefaultSelector,"'")}),(0,d.jsx)("span",{children:", "}),(0,d.jsx)("span",{className:"code__string",children:"'".concat(null===S||void 0===S?void 0:S.methodsDefaultMessage,"'")}),(0,d.jsx)("span",{children:", {"})]}),(0,d.jsxs)("span",{className:"code__indent2 code__indent--py0",children:[(0,d.jsx)("span",{className:"code__attr",children:"backgroundColor: "}),(0,d.jsx)("span",{className:"code__string",children:"'rgba(0,0,0,0.8)'"}),(0,d.jsx)("span",{children:","})]}),(0,d.jsx)("span",{className:"code__indent1 code__indent--pt0",children:(0,d.jsx)("span",{children:"});"})})]})})})]})}),(0,d.jsx)("div",{className:["".concat(y().playground__item),"".concat(y()["playground__item--remove"]||"")].join(" ").trim(),children:(0,d.jsxs)("div",{className:y().playground__item__content,children:[(0,d.jsxs)("div",{className:y().playground__item__head,children:[(0,d.jsx)("h3",{className:y().playground__item__head__title,children:null===S||void 0===S?void 0:S.methodUnblockTitle}),(0,d.jsx)("p",{className:y().playground__item__head__description,children:null===S||void 0===S?void 0:S.methodUnblockDescription})]}),(0,d.jsx)("div",{className:y().playground__item__usage,children:(0,d.jsx)("div",{className:y().playground__item__usage__code,children:(0,d.jsxs)("code",{className:"code code--medium",children:[(0,d.jsx)("span",{className:"code__indent1 code__indent--pb0",children:(0,d.jsx)("span",{className:"code__comment code__comment--fullbeginning"})}),null===S||void 0===S||null===(L=S.commentsUnblock)||void 0===L?void 0:L.map((function(e,n){return(0,d.jsx)("span",{className:"code__indent1 code__indent--py0",children:(0,d.jsx)("span",{className:"code__comment code__comment--fullmiddle",children:e})},n)})),(0,d.jsx)("span",{className:"code__indent1 code__indent--py0",children:(0,d.jsx)("span",{className:"code__comment code__comment--fullend"})}),(0,d.jsx)("span",{className:"code__indent1 code__indent--pb0",children:(0,d.jsx)("span",{className:"code__comment",children:null===S||void 0===S?void 0:S.commentUnblockImmediately})}),(0,d.jsxs)("span",{className:"code__indent1 code__indent--pt0",children:[!J&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:"code__namespace",children:Y}),(0,d.jsx)("span",{children:"."})]}),(0,d.jsx)("span",{className:"code__namespace",children:z}),(0,d.jsx)("span",{children:"."}),(0,d.jsx)("span",{className:"code__method",children:null===S||void 0===S||null===(v=S.methodUnblock)||void 0===v?void 0:v.functionName}),(0,d.jsx)("span",{children:"("}),(0,d.jsx)("span",{className:"code__string",children:"'".concat(null===S||void 0===S?void 0:S.methodsDefaultSelector,"'")}),(0,d.jsx)("span",{children:");"})]}),(0,d.jsx)("span",{className:"code__indent1 code__indent--pb0",children:(0,d.jsx)("span",{className:"code__comment",children:null===S||void 0===S?void 0:S.commentUnblockWithDelay})}),(0,d.jsxs)("span",{className:"code__indent1 code__indent--pt0",children:[!J&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:"code__namespace",children:Y}),(0,d.jsx)("span",{children:"."})]}),(0,d.jsx)("span",{className:"code__namespace",children:z}),(0,d.jsx)("span",{children:"."}),(0,d.jsx)("span",{className:"code__method",children:null===S||void 0===S||null===(A=S.methodUnblock)||void 0===A?void 0:A.functionName}),(0,d.jsx)("span",{children:"("}),(0,d.jsx)("span",{className:"code__string",children:"'".concat(null===S||void 0===S?void 0:S.methodsDefaultSelector,"'")}),(0,d.jsx)("span",{children:", "}),(0,d.jsx)("span",{className:"code__number",children:"".concat(null===S||void 0===S?void 0:S.methodUnblockDuration)}),(0,d.jsx)("span",{children:");"})]})]})})})]})}),(0,d.jsx)("div",{className:["".concat(y().playground__item),"".concat(y()["playground__item--demo"]||"")].join(" ").trim(),children:(0,d.jsxs)("div",{className:y().playground__item__content,children:[(0,d.jsxs)("div",{className:y().playground__item__head,children:[(0,d.jsx)("h3",{className:y().playground__item__head__title,children:null===S||void 0===S?void 0:S.demoTitle}),(0,d.jsx)("p",{className:y().playground__item__head__description,children:null===S||void 0===S?void 0:S.demoDescription})]}),(0,d.jsxs)("div",{className:y().playground__item__demo,children:[(0,d.jsxs)("div",{className:y().playground__item__demo__element__wrapper,children:[(0,d.jsx)("span",{className:y().playground__item__demo__element__selector,children:null===S||void 0===S?void 0:S.methodsDefaultSelector}),(0,d.jsxs)("div",{ref:X,className:y().playground__item__demo__element,children:[(0,d.jsx)(h.Z,{threshold:.25,className:y().playground__item__demo__element__image,classNameLoaded:y()["playground__item__demo__element__image--loaded"],width:"32",height:"32",src:null===S||void 0===S?void 0:S.demoElementImage,alt:null===S||void 0===S?void 0:S.demoElementTitle}),(0,d.jsx)("h4",{className:y().playground__item__demo__element__title,children:null===S||void 0===S?void 0:S.demoElementTitle}),(0,d.jsx)("p",{className:y().playground__item__demo__element__description,dangerouslySetInnerHTML:{__html:(null===S||void 0===S?void 0:S.demoElementDescription)||""}})]})]}),(0,d.jsx)("input",{ref:R,type:"text",className:y().playground__item__demo__input,placeholder:null===S||void 0===S?void 0:S.demoInputPlaceholder,disabled:!k,maxLength:34}),(0,d.jsxs)("div",{className:y().playground__item__demo__buttons,children:[null===S||void 0===S||null===(D=S.methodsBlockIndicators)||void 0===D?void 0:D.map((function(e,n){return(0,d.jsxs)("button",{type:"button",onClick:function(){return U(null===e||void 0===e?void 0:e.functionName)},disabled:!k,className:y().playground__item__demo__button,children:[(0,d.jsx)(h.Z,{threshold:.25,className:y().playground__item__demo__button__icon,classNameLoaded:y()["playground__item__demo__button__icon--loaded"],width:"32",height:"32",src:(l=e.id,p.get(l)||""),alt:null===e||void 0===e?void 0:e.functionName}),(0,d.jsx)("span",{className:y().playground__item__demo__button__text,children:null===e||void 0===e?void 0:e.functionName})]},n);var l})),(0,d.jsxs)("button",{type:"button",onClick:function(){X.current&&(c.Block.remove([X.current]),f(!0))},disabled:k,className:["".concat(y().playground__item__demo__button),"".concat(y()["playground__item__demo__button--remove"])].join(" ").trim(),children:[(0,d.jsx)(s.OH,{className:y().playground__item__demo__button__icon}),(0,d.jsx)("span",{className:y().playground__item__demo__button__text,children:null===S||void 0===S?void 0:S.demoButtonUnblock})]})]})]})]})})]})]})}},5496:function(e){e.exports={playground:"Playground_playground__SB0Kl",playground__head:"Playground_playground__head__esNv5",playground__head__title:"Playground_playground__head__title___1T0s",playground__head__switch:"Playground_playground__head__switch__fbK_Q","playground__head__switch--module":"Playground_playground__head__switch--module__f64W8",playground__head__switch__text:"Playground_playground__head__switch__text__Z1Z7M",playground__items:"Playground_playground__items___FgXY",playground__item:"Playground_playground__item__pbNLQ",playground__item__content:"Playground_playground__item__content__djW12",playground__item__head:"Playground_playground__item__head__wOfiQ",playground__item__head__title:"Playground_playground__item__head__title__OsMzF",playground__item__head__description:"Playground_playground__item__head__description__VxiPh",playground__item__head__link:"Playground_playground__item__head__link__pW7iz",playground__item__head__link__icon:"Playground_playground__item__head__link__icon__3wPqw","playground__item--remove":"Playground_playground__item--remove__6aZuz","playground__item--demo":"Playground_playground__item--demo__SZJDI",playground__item__usage:"Playground_playground__item__usage__tjN9Z",playground__item__usage__code:"Playground_playground__item__usage__code__GCJcX",playground__item__demo:"Playground_playground__item__demo__AmSTq",playground__item__demo__element:"Playground_playground__item__demo__element__E0RVX",playground__item__demo__element__wrapper:"Playground_playground__item__demo__element__wrapper__d5Zev",playground__item__demo__element__selector:"Playground_playground__item__demo__element__selector___SWIG",playground__item__demo__element__image:"Playground_playground__item__demo__element__image__H0MUm","playground__item__demo__element__image--loaded":"Playground_playground__item__demo__element__image--loaded__nLR_j",playground__item__demo__element__title:"Playground_playground__item__demo__element__title__ITSvx",playground__item__demo__element__description:"Playground_playground__item__demo__element__description__ygOoo",playground__item__demo__input:"Playground_playground__item__demo__input__gap3R",playground__item__demo__buttons:"Playground_playground__item__demo__buttons__VDUb9",playground__item__demo__button:"Playground_playground__item__demo__button__o5YB7","playground__item__demo__button--remove":"Playground_playground__item__demo__button--remove__Yok1z",playground__item__demo__button__icon:"Playground_playground__item__demo__button__icon__pYBhn","playground__item__demo__button__icon--loaded":"Playground_playground__item__demo__button__icon--loaded__cUpkB",playground__item__demo__button__text:"Playground_playground__item__demo__button__text__FGVxa"}}}]);