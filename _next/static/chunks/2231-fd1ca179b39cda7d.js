(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2231],{8418:function(t,e,n){"use strict";function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],i=!0,o=!1,a=void 0;try{for(var r,s=t[Symbol.iterator]();!(i=(r=s.next()).done)&&(n.push(r.value),!e||n.length!==e);i=!0);}catch(l){o=!0,a=l}finally{try{i||null==s.return||s.return()}finally{if(o)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}e.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},r=n(6273),s=n(387),l=n(7190);var c={};function f(t,e,n,i){if(t&&r.isLocalURL(e)){t.prefetch(e,n,i).catch((function(t){0}));var o=i&&"undefined"!==typeof i.locale?i.locale:t&&t.locale;c[e+"%"+n+(o?"%"+o:"")]=!0}}var d=function(t){var e,n=!1!==t.prefetch,o=s.useRouter(),d=a.default.useMemo((function(){var e=i(r.resolveHref(o,t.href,!0),2),n=e[0],a=e[1];return{href:n,as:t.as?r.resolveHref(o,t.as):a||n}}),[o,t.href,t.as]),m=d.href,u=d.as,p=t.children,x=t.replace,b=t.shallow,v=t.scroll,g=t.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var h=(e=a.default.Children.only(p))&&"object"===typeof e&&e.ref,y=i(l.useIntersection({rootMargin:"200px"}),2),k=y[0],w=y[1],C=a.default.useCallback((function(t){k(t),h&&("function"===typeof h?h(t):"object"===typeof h&&(h.current=t))}),[h,k]);a.default.useEffect((function(){var t=w&&n&&r.isLocalURL(m),e="undefined"!==typeof g?g:o&&o.locale,i=c[m+"%"+u+(e?"%"+e:"")];t&&!i&&f(o,m,u,{locale:e})}),[u,m,w,g,n,o]);var N={ref:C,onClick:function(t){e.props&&"function"===typeof e.props.onClick&&e.props.onClick(t),t.defaultPrevented||function(t,e,n,i,o,a,s,l){("A"!==t.currentTarget.nodeName||!function(t){var e=t.currentTarget.target;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)&&r.isLocalURL(n))&&(t.preventDefault(),null==s&&i.indexOf("#")>=0&&(s=!1),e[o?"replace":"push"](n,i,{shallow:a,locale:l,scroll:s}))}(t,o,m,u,x,b,v,g)},onMouseEnter:function(t){r.isLocalURL(m)&&(e.props&&"function"===typeof e.props.onMouseEnter&&e.props.onMouseEnter(t),f(o,m,u,{priority:!0}))}};if(t.passHref||"a"===e.type&&!("href"in e.props)){var L="undefined"!==typeof g?g:o&&o.locale,z=o&&o.isLocaleDomain&&r.getDomainLocale(u,L,o&&o.locales,o&&o.domainLocales);N.href=z||r.addBasePath(r.addLocale(u,L,o&&o.defaultLocale))}return a.default.cloneElement(e,N)};e.default=d},7190:function(t,e,n){"use strict";function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],i=!0,o=!1,a=void 0;try{for(var r,s=t[Symbol.iterator]();!(i=(r=s.next()).done)&&(n.push(r.value),!e||n.length!==e);i=!0);}catch(l){o=!0,a=l}finally{try{i||null==s.return||s.return()}finally{if(o)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){var e=t.rootMargin,n=t.disabled||!r,l=o.useRef(),c=i(o.useState(!1),2),f=c[0],d=c[1],m=o.useCallback((function(t){l.current&&(l.current(),l.current=void 0),n||f||t&&t.tagName&&(l.current=function(t,e,n){var i=function(t){var e=t.rootMargin||"",n=s.get(e);if(n)return n;var i=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var e=i.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return s.set(e,n={id:e,observer:o,elements:i}),n}(n),o=i.id,a=i.observer,r=i.elements;return r.set(t,e),a.observe(t),function(){r.delete(t),a.unobserve(t),0===r.size&&(a.disconnect(),s.delete(o))}}(t,(function(t){return t&&d(t)}),{rootMargin:e}))}),[n,e,f]);return o.useEffect((function(){if(!r&&!f){var t=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(t)}}}),[f]),[m,f]};var o=n(7294),a=n(9311),r="undefined"!==typeof IntersectionObserver;var s=new Map},1664:function(t,e,n){t.exports=n(8418)},8642:function(t,e,n){var i,o;o="undefined"!==typeof n.g?n.g:"undefined"!==typeof window?window:this,void 0===(i=function(){return function(t){"use strict";if("undefined"===typeof t&&"undefined"===typeof t.document)return!1;var e,n="Notiflix",i="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",o='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',a={Show:"Show",Ask:"Ask",Prompt:"Prompt"},r={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},s=function(t){return console.error("%c "+n+" Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+i)},l=function(e){return e||(e="head"),null!==t.document[e]||(s('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},c=function(e,n){if(!l("head"))return!1;if(null!==e()&&!t.document.getElementById(n)){var i=t.document.createElement("style");i.id=n,i.innerHTML=e(),t.document.head.appendChild(i)}},f=function(){var t={},e=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e&&"[object Object]"===Object.prototype.toString.call(n[i])?t[i]=f(t[i],n[i]):t[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return t},d=function(e){var n=t.document.createElement("div");return n.innerHTML=e,n.textContent||n.innerText||""},m=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},u=function(n,i,s,c,m,u,x,b,v){if(!l("body"))return!1;e||p.Confirm.init({});var g=f(!0,e,{});"object"!==typeof v||Array.isArray(v)||(e=f(!0,e,v)),"string"!==typeof i&&(i="Notiflix Confirm"),"string"!==typeof s&&(s="Do you agree with me?"),"string"!==typeof m&&(m="Yes"),"string"!==typeof u&&(u="No"),"function"!==typeof x&&(x=void 0),"function"!==typeof b&&(b=void 0),e.plainText&&(i=d(i),s=d(s),m=d(m),u=d(u)),e.plainText||(i.length>e.titleMaxLength&&(i="Possible HTML Tags Error",s='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',m="Okay",u="..."),s.length>e.messageMaxLength&&(i="Possible HTML Tags Error",s='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',m="Okay",u="..."),(m.length||u.length)>e.buttonsMaxLength&&(i="Possible HTML Tags Error",s='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',m="Okay",u="...")),i.length>e.titleMaxLength&&(i=i.substring(0,e.titleMaxLength)+"..."),s.length>e.messageMaxLength&&(s=s.substring(0,e.messageMaxLength)+"..."),m.length>e.buttonsMaxLength&&(m=m.substring(0,e.buttonsMaxLength)+"..."),u.length>e.buttonsMaxLength&&(u=u.substring(0,e.buttonsMaxLength)+"..."),e.cssAnimation||(e.cssAnimationDuration=0);var h=t.document.createElement("div");h.id=r.ID,h.className=e.className+(e.cssAnimation?" nx-with-animation nx-"+e.cssAnimationStyle:""),h.style.zIndex=e.zindex,h.style.padding=e.distance,e.rtl&&(h.setAttribute("dir","rtl"),h.classList.add("nx-rtl-on"));var y="string"===typeof e.position?e.position.trim():"center";h.classList.add("nx-position-"+y),h.style.fontFamily='"'+e.fontFamily+'", '+o;var k="";e.backOverlay&&(k='<div class="'+e.className+"-overlay"+(e.cssAnimation?" nx-with-animation":"")+'" style="background:'+e.backOverlayColor+";animation-duration:"+e.cssAnimationDuration+'ms;"></div>');var w="";"function"===typeof x&&(w='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+e.cancelButtonColor+";background:"+e.cancelButtonBackground+";font-size:"+e.buttonsFontSize+';">'+u+"</a>");var C="",N=null,L=void 0;if(n===a.Ask||n===a.Prompt){N=c||"";var z=Math.ceil(N.length*(n===a.Ask?1:1.5));C='<div><input id="NXConfirmValidationInput" type="text" '+(n===a.Prompt?'value="'+N+'"':"")+' maxlength="'+z+'" style="font-size:'+e.messageFontSize+";border-radius: "+e.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(h.innerHTML=k+'<div class="'+e.className+'-content" style="width:'+e.width+"; background:"+e.backgroundColor+"; animation-duration:"+e.cssAnimationDuration+"ms; border-radius: "+e.borderRadius+';"><div class="'+e.className+'-head"><h5 style="color:'+e.titleColor+";font-size:"+e.titleFontSize+';">'+i+'</h5><div style="color:'+e.messageColor+";font-size:"+e.messageFontSize+';">'+s+C+'</div></div><div class="'+e.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"===typeof x?"":" nx-full")+'" style="color:'+e.okButtonColor+";background:"+e.okButtonBackground+";font-size:"+e.buttonsFontSize+';">'+m+"</a>"+w+"</div></div>",!t.document.getElementById(h.id)){t.document.body.appendChild(h);var W=t.document.getElementById(h.id),M=t.document.getElementById("NXConfirmButtonOk"),E=t.document.getElementById("NXConfirmValidationInput");E&&(E.focus(),E.setSelectionRange(0,(E.value||"").length),E.addEventListener("keyup",(function(t){var e=t.target.value;n===a.Ask&&e!==N?(t.preventDefault(),E.classList.add("nx-validation-failure"),E.classList.remove("nx-validation-success")):(n===a.Ask&&(E.classList.remove("nx-validation-failure"),E.classList.add("nx-validation-success")),("enter"===(t.key||"").toLocaleLowerCase("en")||13===t.keyCode)&&M.dispatchEvent(new Event("click")))}))),M.addEventListener("click",(function(t){if(n===a.Ask&&N&&E){if((E.value||"").toString()!==N)return E.focus(),E.classList.add("nx-validation-failure"),t.stopPropagation(),t.preventDefault(),t.returnValue=!1,t.cancelBubble=!0,!1;E.classList.remove("nx-validation-failure")}"function"===typeof x&&(n===a.Prompt&&E&&(L=E.value||""),x(L)),W.classList.add("nx-remove");var i=setTimeout((function(){null!==W.parentNode&&(W.parentNode.removeChild(W),clearTimeout(i))}),e.cssAnimationDuration)})),"function"===typeof x&&t.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"===typeof b&&(n===a.Prompt&&E&&(L=E.value||""),b(L)),W.classList.add("nx-remove");var t=setTimeout((function(){null!==W.parentNode&&(W.parentNode.removeChild(W),clearTimeout(t))}),e.cssAnimationDuration)}))}e=f(!0,e,g)},p={Confirm:{init:function(t){e=f(!0,r,t),c(m,"NotiflixConfirmInternalCSS")},merge:function(t){if(!e)return s("You have to initialize the Confirm module before call Merge function."),!1;e=f(!0,e,t)},show:function(t,e,n,i,o,r,s){u(a.Show,t,e,null,n,i,o,r,s)},ask:function(t,e,n,i,o,r,s,l){u(a.Ask,t,e,n,i,o,r,s,l)},prompt:function(t,e,n,i,o,r,s,l){u(a.Prompt,t,e,n,i,o,r,s,l)}}};return"object"===typeof t.Notiflix?f(!0,t.Notiflix,{Confirm:p.Confirm}):{Confirm:p.Confirm}}(o)}.apply(e,[]))||(t.exports=i)}}]);