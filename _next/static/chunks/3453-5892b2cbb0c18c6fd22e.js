(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3453],{2167:function(e,t,n){"use strict";var a=n(3848);t.default=void 0;var i,r=(i=n(7294))&&i.__esModule?i:{default:i},o=n(1063),s=n(4651),l=n(7426);var c={};function f(e,t,n,a){if(e&&o.isLocalURL(t)){e.prefetch(t,n,a).catch((function(e){0}));var i=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;c[t+"%"+n+(i?"%"+i:"")]=!0}}var m=function(e){var t,n=!1!==e.prefetch,i=s.useRouter(),m=r.default.useMemo((function(){var t=o.resolveHref(i,e.href,!0),n=a(t,2),r=n[0],s=n[1];return{href:r,as:e.as?o.resolveHref(i,e.as):s||r}}),[i,e.href,e.as]),u=m.href,d=m.as,p=e.children,g=e.replace,h=e.shallow,b=e.scroll,k=e.locale;"string"===typeof p&&(p=r.default.createElement("a",null,p));var y=(t=r.default.Children.only(p))&&"object"===typeof t&&t.ref,v=l.useIntersection({rootMargin:"200px"}),w=a(v,2),x=w[0],N=w[1],L=r.default.useCallback((function(e){x(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,x]);r.default.useEffect((function(){var e=N&&n&&o.isLocalURL(u),t="undefined"!==typeof k?k:i&&i.locale,a=c[u+"%"+d+(t?"%"+t:"")];e&&!a&&f(i,u,d,{locale:t})}),[d,u,N,k,n,i]);var C={ref:L,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,a,i,r,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==s&&a.indexOf("#")>=0&&(s=!1),t[i?"replace":"push"](n,a,{shallow:r,locale:l,scroll:s}))}(e,i,u,d,g,h,b,k)},onMouseEnter:function(e){o.isLocalURL(u)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),f(i,u,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof k?k:i&&i.locale,S=i&&i.isLocaleDomain&&o.getDomainLocale(d,M,i&&i.locales,i&&i.domainLocales);C.href=S||o.addBasePath(o.addLocale(d,M,i&&i.defaultLocale))}return r.default.cloneElement(t,C)};t.default=m},7426:function(e,t,n){"use strict";var a=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,l=i.useRef(),c=i.useState(!1),f=a(c,2),m=f[0],u=f[1],d=i.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||m||e&&e.tagName&&(l.current=function(e,t,n){var a=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var a=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:i,elements:a}),n}(n),i=a.id,r=a.observer,o=a.elements;return o.set(e,t),r.observe(e),function(){o.delete(e),r.unobserve(e),0===o.size&&(r.disconnect(),s.delete(i))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[n,t,m]);return i.useEffect((function(){if(!o&&!m){var e=r.requestIdleCallback((function(){return u(!0)}));return function(){return r.cancelIdleCallback(e)}}}),[m]),[d,m]};var i=n(7294),r=n(3447),o="undefined"!==typeof IntersectionObserver;var s=new Map},1664:function(e,t,n){e.exports=n(2167)},8666:function(e,t,n){var a,i;i="undefined"!==typeof n.g?n.g:"undefined"!==typeof window?window:this,void 0===(a=function(){return function(e){"use strict";if("undefined"===typeof e&&"undefined"===typeof e.document)return!1;var t,n="Notiflix",a="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",i='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',r={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},o=function(e){return console.error("%c "+n+" Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+a)},s=function(e){return console.log("%c "+n+" Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+e+a)},l=function(t){return t||(t="head"),null!==e.document[t]||(o('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},c=function(t,n){if(!l("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var a=e.document.createElement("style");a.id=n,a.innerHTML=t(),e.document.head.appendChild(a)}},f=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var a=function(n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t&&"[object Object]"===Object.prototype.toString.call(n[a])?e[a]=f(e[a],n[a]):e[a]=n[a])};n<arguments.length;n++)a(arguments[n]);return e},m=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},u=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},d=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},p=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},g=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},h=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},b=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},k=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},y=0,v=function(n,a,c,k,v,x){var N;if(Array.isArray(a)){if(a.length<1)return o("Array of HTMLElements should contains at least one HTMLElement."),!1;N=a}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,a)){if(a.length<1)return o("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;N=Array.prototype.slice.call(a)}else{if("string"!==typeof a||(a||"").length<1||1===(a||"").length&&("#"===(a||"")[0]||"."===(a||"")[0]))return o("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var L=e.document.querySelectorAll(a);if(L.length<1)return o('You called the "Notiflix.Block..." function with "'+a+'" selector, but there is no such element(s) in the document.'),!1;N=L}t||w.Block.init({});var C=f(!0,t,{});if("object"===typeof k&&!Array.isArray(k)||"object"===typeof v&&!Array.isArray(v)){var M={};"object"===typeof k?M=k:"object"===typeof v&&(M=v),t=f(!0,t,M)}var S="";"string"===typeof k&&k.length>0&&(S=k),t.cssAnimation||(t.cssAnimationDuration=0);var z="notiflix-block";"string"===typeof t.className&&(z=t.className.trim());var B="number"===typeof t.querySelectorLimit?t.querySelectorLimit:200,T=(N||[]).length>=B?B:N.length;if(n)for(var A=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],E=0;E<T;E++){var I=N[E];if(I){if(A.indexOf(I.tagName.toLocaleLowerCase("en"))>-1)break;var H=I.querySelectorAll("[id^="+r.ID+"]");if(H.length<1){var j="";c&&(j="hourglass"===c?d(t.svgSize,t.svgColor):"circle"===c?p(t.svgSize,t.svgColor):"arrows"===c?g(t.svgSize,t.svgColor):"dots"===c?h(t.svgSize,t.svgColor):"pulse"===c?b(t.svgSize,t.svgColor):u(t.svgSize,t.svgColor));var X='<span class="'+z+'-icon" style="width:'+t.svgSize+";height:"+t.svgSize+';">'+j+"</span>",D="";S.length>0&&(S=S.length>t.messageMaxLength?m(S).substring(0,t.messageMaxLength)+"...":m(S),D='<span style="font-size:'+t.messageFontSize+";color:"+t.messageColor+';" class="'+z+'-message">'+S+"</span>"),y++;var O=e.document.createElement("div");O.id=r.ID+"-"+y,O.className=z+"-wrap"+(t.cssAnimation?" nx-with-animation":""),O.style.position=t.position,O.style.zIndex=t.zindex,O.style.background=t.backgroundColor,O.style.animationDuration=t.cssAnimationDuration+"ms",O.style.fontFamily='"'+t.fontFamily+'", '+i,O.style.display="flex",O.style.flexWrap="wrap",O.style.flexDirection="column",O.style.alignItems="center",O.style.justifyContent="center",t.rtl&&(O.setAttribute("dir","rtl"),O.classList.add("nx-rtl-on")),O.innerHTML=X+D;var R=e.getComputedStyle(I).getPropertyValue("position"),W="string"===typeof R?R.toLocaleLowerCase("en"):"relative",_=Math.round(1.25*parseInt(t.svgSize))+40,F="";_>(I.offsetHeight||0)&&(F="min-height:"+_+"px;");var q="";q=I.getAttribute("id")?"#"+I.getAttribute("id"):I.classList[0]?"."+I.classList[0]:(I.tagName||"").toLocaleLowerCase("en");var P="",U=["absolute","relative","fixed","sticky"].indexOf(W)<=-1;if(U||F.length>0){if(!l("head"))return!1;U&&(P="position:relative!important;");var V='<style id="Style-'+r.ID+"-"+y+'">'+q+"."+z+"-position{"+P+F+"}</style>",K=e.document.createRange();K.selectNode(e.document.head);var Q=K.createContextualFragment(V);e.document.head.appendChild(Q),I.classList.add(z+"-position")}I.appendChild(O)}}}else var Y=function(n){var a=setTimeout((function(){null!==n.parentNode&&n.parentNode.removeChild(n);var t=n.getAttribute("id"),i=e.document.getElementById("Style-"+t);i&&null!==i.parentNode&&i.parentNode.removeChild(i),clearTimeout(a)}),t.cssAnimationDuration)},G=function(e){if(e&&e.length>0)for(var t=0;t<e.length;t++){var n=e[t];n&&(n.classList.add("nx-remove"),Y(n))}else s("string"===typeof a?'"Notiflix.Block.remove();" function called with "'+a+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+a+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},J=function(e){var n=setTimeout((function(){var t=z+"-position";e.classList.remove(t),clearTimeout(n)}),t.cssAnimationDuration+300)},Z=setTimeout((function(){for(var e=0;e<T;e++){var t=N[e];t&&(J(t),H=t.querySelectorAll("[id^="+r.ID+"]"),G(H))}clearTimeout(Z)}),x);t=f(!0,t,C)},w={Block:{init:function(e){t=f(!0,r,e),c(k,"NotiflixBlockInternalCSS")},merge:function(e){if(!t)return o('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1;t=f(!0,t,e)},standard:function(e,t,n){v(!0,e,"standard",t,n)},hourglass:function(e,t,n){v(!0,e,"hourglass",t,n)},circle:function(e,t,n){v(!0,e,"circle",t,n)},arrows:function(e,t,n){v(!0,e,"arrows",t,n)},dots:function(e,t,n){v(!0,e,"dots",t,n)},pulse:function(e,t,n){v(!0,e,"pulse",t,n)},remove:function(e,t){"number"!==typeof t&&(t=0),v(!1,e,null,null,null,t)}}};return"object"===typeof e.Notiflix?f(!0,e.Notiflix,{Block:w.Block}):{Block:w.Block}}(i)}.apply(t,[]))||(e.exports=a)}}]);