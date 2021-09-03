(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[733],{1147:function(t){t.exports={attributes:{_dbMeta:{routeId:"HOME",lastModifiedDate:"2021-07-22",title:"Notiflix | a JavaScript library for client-side non-blocking notifications.",description:"Notiflix is a JavaScript library for client-side non-blocking notifications, popup boxes, loading indicators, and more that makes your web projects much better.",robots:"noindex, nofollow, noodp, noydir",ogImage:null,themeColor:null},_dbHomeSlider:{image:"/content/media/home/notiflix-home-slider.svg",title:"welcome to <span>Notiflix</span>",description:"Notiflix is a <span>JavaScript</span> library for client-side non-blocking notifications, popup boxes, loading indicators, and more that makes your web projects much better.",downloadInfo:"Download the latest version of Notiflix.",downloadCount:"Notiflix has been downloaded {{x}} times.",loading:"Loading...",failure:"Something went wrong.",restricted:"API rate limit exceeded."},_dbHomeGetItOn:{title:"Get it on",clipboard:"Copied to the clipboard.",yarn:{script:"yarn add notiflix",url:"https://yarnpkg.com/package/notiflix"},npm:{script:"npm i notiflix",url:"https://www.npmjs.com/package/notiflix"},github:{script:null,url:"https://github.com/notiflix/Notiflix.git"}},_dbHomeBrowsers:{title:"Browser Compatibility",disclaimer:"* SVG animations are not supported.",chrome:"Chrome",firefox:"Firefox",safari:"Safari",edge:"Edge",opera:"Opera",edgeLegacy:"* Edge Legacy",ie:"* IE 10+"},_dbHomeModules:{title:"Notiflix Modules",modules:[{routeId:"NOTIFY",title:"Notify",description:'Notiflix Notify module can be used to send non-blocking alerts/notifications. This module includes 4 types of notifications: "Success", "Failure", "Warning", and "Info".',button:"More"},{routeId:"REPORT",title:"Report",description:'Notiflix Report module can be used to show extended notifications that contain a title, description, and button(with a callback function). This module includes 4 types of notifications: "Success", "Failure", "Warning", and "Info".',button:"More"},{routeId:"CONFIRM",title:"Confirm",description:'Notiflix Confirm module can be used to show non-blocking prompt boxes. This module includes 2 types of prompts: "Show" and "Ask". An additional question can be asked as well within the prompt box if using the "Ask" one.',button:"More"},{routeId:"LOADING",title:"Loading",description:'Notiflix Loading module can be used to show a loading indicator during a process (Fetch/XHR). Includes 6 types of animated SVG icons: "Standard", "Hourglass", "Circle", "Arrows", "Dots", and "Pulse". An additional type is "Custom", and it can be used with a custom SVG icon.',button:"More"},{routeId:"BLOCK",title:"Block",description:"Notiflix Block module can be used to block/unblock the elements during a process (Fetch/XHR), without locking the browser or the other elements/components to prevent the user's interactions on the blocked elements.",button:"More"}]}},html:""}},3634:function(t,e,i){"use strict";i.d(e,{_:function(){return l}});var n=JSON.parse('{"name":"notiflix-documentation","version":"1.0.0-Beta.01","homepage":"https://notiflix.github.io","description":"Notiflix","private":true,"scripts":{"startup:lint":"eslint src","startup:compile":"tsc --resolveJsonModule --outDir .dev --target ES5 src/application/helpers/sitemap-generator/index.ts","startup:run":"node .dev/src/application/helpers/sitemap-generator/index.js","startup":"yarn startup:lint && yarn startup:compile && yarn startup:run","lint:stylelint":"stylelint \\"src/**/*.{scss,sass}\\" --config .stylelintrc.json","lint:eslint":"eslint next.config.js && next lint","lint":"yarn lint:stylelint && yarn lint:eslint","dev":"yarn startup && yarn lint && next dev","build":"yarn startup && yarn lint && next build","start":"yarn startup && yarn lint && next start","deploy":"yarn build && next export -o .dist"},"dependencies":{"next":"11.1.0","notiflix":"^3.0.2","react":"17.0.2","react-dom":"17.0.2"},"devDependencies":{"@ts-stack/markdown":"^1.4.0","@types/js-yaml":"^4.0.3","@types/react":"17.0.19","@typescript-eslint/eslint-plugin":"^4.29.3","eslint":"7.32.0","eslint-config-next":"11.1.0","fork-ts-checker-webpack-plugin":"^6.3.2","frontmatter-markdown-loader":"^3.6.3","js-yaml":"^4.1.0","react-icons":"^4.2.0","sass":"^1.38.1","stylelint":"^13.13.1","stylelint-config-standard":"^22.0.0","stylelint-scss":"^3.20.1","stylelint-webpack-plugin":"^3.0.1","typescript":"4.3.5"},"browserslist":{"production":["> 1%","last 4 versions","not ie < 11","not dead","not op_mini all","iOS >=7"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}'),o=i.t(n,2),l={app:{url:(JSON.stringify((o||{}).homepage)||"").replace(/"/gm,""),version:(JSON.stringify((o||{}).version)||"").replace(/"/gm,""),name:(JSON.stringify((o||{}).description)||"").replace(/"/gm,""),ogImageSrc:"/webapp/notiflix-og.jpg",settings:{notify:{fontFamily:"Red Hat Display",plainText:!1}}},api:{urlGitHubReleases:"https://api.github.com/repos/notiflix/Notiflix/releases",urlNPMDownloads:"https://api.npmjs.org/downloads/range/2019-01-01:2042-01-01/notiflix"}}},4724:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return p}});var n=i(5893),o=i(1317),l=i(7516),r=i(1147),s=i(3634);var a=function(t){var e=t.className,i=t.width,o=t.height,l=t.color;return(0,n.jsx)("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",width:i||100,height:o||45,viewBox:"0 0 100 45",children:(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{fill:l||"#2C8EBB",d:"M60.51 23.56c-0.6,1.55 -1.42,2.76 -2.32,3.76l0 -10.84c0,-0.75 -0.65,-1.36 -1.67,-1.36 -0.43,0 -0.81,0.21 -0.81,0.52 0,0.22 0.13,0.4 0.13,0.99l0 4.97c-0.37,2.17 -1.3,4.17 -2.54,4.17 -0.89,0 -1.42,-0.89 -1.42,-2.56 0,-2.59 0.34,-3.95 0.9,-6.24 0.12,-0.46 1.02,-1.7 -0.49,-1.7 -1.64,0 -1.43,0.62 -1.64,1.14 0,0 -1.04,3.68 -1.04,6.95 0,2.69 1.13,4.45 3.2,4.45 1.33,0 2.29,-0.89 3.03,-2.13l0 3.92c-2.04,1.8 -3.83,3.37 -3.83,6.49 0,1.98 1.23,3.55 2.96,3.55 1.58,0 3.22,-1.14 3.22,-4.38l0 -5.35c1.07,-0.93 2.19,-2.02 3.14,-3.63 0.61,0.93 1.57,1.5 2.85,1.5 1.17,0 2.04,-0.56 2.65,-1.27 0.47,0.75 1.3,1.27 2.38,1.27 2.54,0 3.78,-2.54 4.35,-4.55 0.01,-0.03 0.03,-0.07 0.04,-0.11 0.55,-1.8 0.74,-4.48 0.77,-5.69l2.69 0c-0.99,2.66 -1.55,4.85 -1.55,6.83 0,2.72 1.73,3.52 3.19,3.52 1.17,0 2.07,-0.55 2.74,-1.33 0.02,1.12 0.87,1.33 1.49,1.33 0.89,0 0.86,-0.74 0.86,-1.33l0 -4.51c0.22,-2.44 2.13,-5.09 3.03,-5.09 0.59,0 0.65,0.8 0.65,1.76l0 6.27c0,1.57 0.96,2.9 2.59,2.9 2.66,0 3.97,-2.78 4.5,-4.82 0.03,-0.12 0.03,-0.18 0.03,-0.21 0,-0.59 -0.59,-1.27 -1.08,-1.27 -0.31,0 -0.62,0.28 -0.75,0.93 -0.27,1.36 -0.91,3.33 -2.14,3.33 -0.8,0 -0.8,-1.14 -0.8,-1.42l0 -6.39c0,-1.42 -0.5,-3.12 -2.57,-3.12 -1.51,0 -2.62,1.33 -3.46,3.06l0 -1.39c0,-0.75 -0.65,-1.36 -1.67,-1.36 -0.43,0 -0.8,0.21 -0.8,0.52 0,0.22 0.12,0.4 0.12,0.99l0 5.36c-0.05,0.12 -0.09,0.26 -0.12,0.42 -0.28,1.36 -0.8,3.33 -2.22,3.33 -0.84,0 -1.24,-0.8 -1.24,-1.67 0,-3.08 1.39,-6.73 1.39,-7.1 0.12,-0.71 -1.11,-1.73 -1.48,-1.73l-1.61 0c-0.31,0 -0.61,0 -1.63,-0.12 -0.34,-1.27 -1.21,-1.64 -1.95,-1.64 -0.8,0 -1.55,0.56 -1.55,1.42 0,0.9 0.56,1.54 1.33,1.98 -0.03,1.57 -0.15,4.14 -0.49,5.37 -0.01,0.04 -0.02,0.08 -0.02,0.11 -0.01,0.02 -0.01,0.03 -0.01,0.05 -0.28,1.36 -0.84,3.33 -2.07,3.33l0 0c-0.74,0 -1.05,-0.74 -1.05,-1.42l0 -5.1c0,-0.74 -0.65,-1.35 -1.67,-1.35 -0.43,0 -0.8,0.21 -0.8,0.52 0,0.22 0.12,0.4 0.12,0.99l0 4.76c-0.34,0.86 -0.9,1.6 -1.73,1.6 -1.08,0 -1.76,-0.92 -1.76,-2.53 0,-4.45 2.75,-6.46 5.1,-6.46 0.31,0 0.61,0.07 0.89,0.07 0.31,0 0.4,-0.19 0.4,-0.71 0,-0.81 -0.58,-1.3 -1.42,-1.3 -3.77,0 -7.35,3.15 -7.35,8.31 0,0.15 0.01,0.29 0.01,0.44zm-5.54 14.14c-0.49,0 -0.8,-0.75 -0.8,-1.7 0,-1.86 0.68,-3.03 1.67,-4.05l0 3.31c0,0.58 0.12,2.44 -0.87,2.44zm0 0l0 0z"}),(0,n.jsx)("path",{fill:l||"#2C8EBB",d:"M25.41 2.5c11.05,0 20,8.96 20,20 0,11.04 -8.95,20 -20,20 -11.04,0 -20,-8.96 -20,-20 0,-11.04 8.96,-20 20,-20z"}),(0,n.jsx)("path",{fill:"#fff",d:"M39.02 28.56l0 0zm0 0c-0.14,-1.1 -1.07,-1.85 -2.26,-1.84 -1.77,0.03 -3.26,0.95 -4.25,1.55 -0.39,0.24 -0.72,0.42 -1,0.55 0.06,-0.89 0,-2.07 -0.46,-3.36 -0.56,-1.54 -1.32,-2.49 -1.86,-3.04 0.62,-0.91 1.48,-2.24 1.88,-4.29 0.35,-1.76 0.24,-4.48 -0.55,-6.01 -0.17,-0.31 -0.43,-0.53 -0.77,-0.63 -0.14,-0.03 -0.41,-0.11 -0.92,0.04 -0.78,-1.62 -1.05,-1.79 -1.26,-1.93 -0.44,-0.28 -0.94,-0.34 -1.42,-0.16 -0.64,0.23 -1.19,0.85 -1.71,1.95 -0.08,0.16 -0.15,0.31 -0.21,0.47 -0.98,0.07 -2.52,0.42 -3.83,1.84 -0.16,0.17 -0.48,0.3 -0.81,0.43l0.01 0c-0.68,0.24 -0.99,0.79 -1.37,1.8 -0.52,1.4 0.02,2.78 0.55,3.68 -0.73,0.65 -1.69,1.68 -2.2,2.9 -0.63,1.49 -0.7,2.96 -0.68,3.76 -0.54,0.57 -1.37,1.64 -1.47,2.85 -0.12,1.68 0.49,2.82 0.76,3.24 0.08,0.12 0.16,0.22 0.25,0.32 -0.03,0.21 -0.03,0.44 0.01,0.67 0.1,0.54 0.44,0.98 0.96,1.26 1.02,0.54 2.44,0.77 3.54,0.22 0.39,0.42 1.11,0.82 2.41,0.82l0.08 0c0.33,0 4.55,-0.22 5.78,-0.52 0.54,-0.14 0.92,-0.37 1.17,-0.58 0.79,-0.24 2.97,-0.99 5.02,-2.31 1.45,-0.95 1.95,-1.15 3.03,-1.41 1.05,-0.25 1.71,-1.21 1.58,-2.27zm-1.84 1.14l0 0zm0 0c-1.23,0.29 -1.86,0.56 -3.39,1.56 -2.38,1.54 -4.99,2.26 -4.99,2.26 0,0 -0.22,0.32 -0.85,0.47 -1.08,0.26 -5.15,0.49 -5.52,0.49 -0.99,0.01 -1.6,-0.25 -1.77,-0.66 -0.51,-1.22 0.7,-1.76 0.74,-1.78 -0.02,-0.01 -0.29,-0.17 -0.44,-0.32 -0.15,-0.15 -0.3,-0.44 -0.35,-0.33 -0.19,0.47 -0.29,1.62 -0.81,2.14 -0.71,0.71 -2.05,0.48 -2.85,0.06 -0.86,-0.46 0.03,-1.52 0.06,-1.55 -0.03,0.01 -0.48,0.26 -0.85,-0.3 -0.34,-0.52 -0.65,-1.42 -0.57,-2.52 0.09,-1.26 1.5,-2.48 1.5,-2.48 0,0 -0.25,-1.86 0.56,-3.77 0.74,-1.74 2.71,-3.14 2.71,-3.14 0,0 -1.66,-1.83 -1.04,-3.49 0.4,-1.08 0.56,-1.07 0.7,-1.12 0.46,-0.17 0.91,-0.37 1.24,-0.73 1.66,-1.79 3.77,-1.45 3.77,-1.45 0,0 1.01,-3.05 1.93,-2.46 0.29,0.19 1.32,2.47 1.32,2.47 0,0 1.09,-0.64 1.22,-0.4 0.66,1.29 0.74,3.76 0.45,5.25 -0.5,2.48 -1.73,3.8 -2.23,4.64 -0.11,0.19 1.33,0.8 2.24,3.33 0.84,2.3 0.09,4.24 0.23,4.46 0.02,0.04 0.03,0.05 0.03,0.05 0,0 0.96,0.08 2.9,-1.12 1.03,-0.64 2.26,-1.36 3.66,-1.37 1.35,-0.02 1.42,1.56 0.4,1.81zm-15.78 2.34l0 0 0 0zm-4.39 0l0 0 0 0z"})]})})};var c=function(t){var e=t.className,i=t.width,o=t.height,l=t.color;return(0,n.jsx)("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",width:i||110,height:o||45,viewBox:"0 0 110 45",children:(0,n.jsxs)("g",{children:[(0,n.jsx)("polygon",{fill:l||"#CB3837",points:"5,6.1 105,6.1 105,39.4 55.01,39.4 55.01,45 32.74,45 32.74,39.4 5,39.4 "}),(0,n.jsx)("path",{fill:"#fff",d:"M21.69 33.85l0 -16.61 5.48 0 0 16.61 5.66 0 0 -22.27 -22.27 0 0 22.27 11.13 0zm16.63 -22.27l0 27.82 11.14 0 0 -5.55 11.13 0 0 -22.27 -22.27 0zm11.14 16.61l0 -10.95 5.48 0 0 10.95 -5.48 0zm16.63 -16.61l0 22.27 11.14 0 0 -16.61 5.47 0 0 16.61 5.66 0 0 -16.61 5.48 0 0 16.61 5.66 0 0 -22.27 -33.41 0z"})]})})};var d=function(t){var e=t.className,i=t.width,o=t.height,l=t.color;return(0,n.jsx)("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",width:i||120,height:o||45,viewBox:"0 0 120 45",children:(0,n.jsx)("g",{children:(0,n.jsx)("path",{fill:l||"#2F2C2A",d:"M73.3 29.45l-0.03 0c0.01,0 0.02,0.02 0.04,0.02 0,0 0.01,0 0.01,0l-0.02 -0.02zm-55.15 -23.68c-9.47,0 -17.15,7.68 -17.15,17.15 0,7.58 4.91,14.01 11.73,16.28 0.86,0.16 1.17,-0.37 1.17,-0.83 0,-0.41 -0.02,-1.76 -0.02,-3.19 -4.77,1.04 -5.78,-2.02 -5.78,-2.02 -0.78,-1.99 -1.91,-2.51 -1.91,-2.51 -1.55,-1.07 0.12,-1.05 0.12,-1.05 1.72,0.12 2.63,1.77 2.63,1.77 1.53,2.62 4.01,1.86 4.99,1.43 0.15,-1.11 0.6,-1.87 1.09,-2.3 -3.81,-0.43 -7.81,-1.9 -7.81,-8.47 0,-1.88 0.67,-3.41 1.76,-4.61 -0.17,-0.43 -0.76,-2.17 0.17,-4.54 0,0 1.44,-0.46 4.72,1.76 1.37,-0.38 2.83,-0.57 4.29,-0.58 1.46,0.01 2.93,0.2 4.3,0.58 3.27,-2.22 4.71,-1.76 4.71,-1.76 0.93,2.37 0.34,4.11 0.17,4.54 1.1,1.2 1.76,2.73 1.76,4.61 0,6.58 -4.01,8.03 -7.83,8.46 0.62,0.53 1.16,1.58 1.16,3.18 0,2.29 -0.02,4.14 -0.02,4.7 0,0.46 0.31,0.99 1.18,0.83 6.81,-2.27 11.72,-8.7 11.72,-16.28 0,-9.47 -7.68,-17.15 -17.15,-17.15zm-10.65 24.63c-0.04,0.08 -0.18,0.11 -0.3,0.05 -0.12,-0.06 -0.19,-0.17 -0.15,-0.26 0.03,-0.09 0.17,-0.11 0.29,-0.05 0.13,0.05 0.2,0.17 0.16,0.26zm0.69 0.77c-0.08,0.08 -0.24,0.04 -0.35,-0.08 -0.11,-0.12 -0.13,-0.28 -0.05,-0.35 0.08,-0.08 0.24,-0.04 0.35,0.08 0.11,0.12 0.13,0.28 0.05,0.35zm0.68 0.99c-0.11,0.07 -0.28,0 -0.39,-0.15 -0.1,-0.15 -0.1,-0.33 0.01,-0.41 0.1,-0.07 0.27,0 0.38,0.15 0.1,0.15 0.1,0.34 0,0.41zm0.92 0.95c-0.09,0.11 -0.29,0.08 -0.44,-0.06 -0.15,-0.14 -0.19,-0.34 -0.1,-0.44 0.1,-0.1 0.3,-0.07 0.45,0.07 0.15,0.13 0.19,0.33 0.09,0.43zm1.28 0.56c-0.04,0.13 -0.23,0.19 -0.43,0.14 -0.19,-0.06 -0.32,-0.22 -0.28,-0.36 0.04,-0.13 0.23,-0.19 0.43,-0.13 0.19,0.06 0.32,0.21 0.28,0.35zm1.41 0.1c0,0.14 -0.17,0.26 -0.37,0.26 -0.2,0.01 -0.37,-0.11 -0.37,-0.25 0,-0.14 0.16,-0.26 0.36,-0.26 0.21,0 0.38,0.11 0.38,0.25zm1.3 -0.22c0.02,0.14 -0.12,0.28 -0.32,0.32 -0.2,0.03 -0.38,-0.05 -0.41,-0.19 -0.02,-0.14 0.12,-0.28 0.32,-0.32 0.2,-0.03 0.38,0.05 0.41,0.19zm59.53 -4.08c-0.16,0 -0.57,0.09 -1,0.09 -1.37,0 -1.84,-0.63 -1.84,-1.46l0 -5.47 2.78 0c0.16,0 0.28,-0.14 0.28,-0.33l0 -2.97c0,-0.16 -0.14,-0.3 -0.28,-0.3l-2.78 0 0 -3.69c0,-0.14 -0.09,-0.23 -0.24,-0.23l-3.78 0c-0.16,0 -0.25,0.09 -0.25,0.23l0 3.79c0,0 -1.9,0.47 -2.03,0.49 -0.14,0.04 -0.22,0.16 -0.22,0.3l0 2.38c0,0.19 0.14,0.33 0.29,0.33l1.94 0 0 5.74c0,4.26 2.98,4.7 5.01,4.7 0.92,0 2.04,-0.3 2.22,-0.38 0.1,-0.04 0.16,-0.16 0.16,-0.28l0 -2.63c0,-0.17 -0.12,-0.28 -0.26,-0.31zm41.44 -3.85c0,-3.16 -1.28,-3.58 -2.62,-3.44 -1.05,0.07 -1.89,0.59 -1.89,0.59l0 6.16c0,0 0.86,0.59 2.13,0.63 1.8,0.05 2.38,-0.6 2.38,-3.94zm4.25 -0.28c0,6 -1.94,7.71 -5.33,7.71 -2.87,0 -4.41,-1.45 -4.41,-1.45 0,0 -0.07,0.81 -0.16,0.91 -0.05,0.11 -0.14,0.14 -0.24,0.14l-2.59 0c-0.18,0 -0.33,-0.14 -0.33,-0.3l0.03 -19.43c0,-0.15 0.14,-0.29 0.3,-0.29l3.72 0c0.16,0 0.3,0.14 0.3,0.29l0 6.6c0,0 1.44,-0.93 3.53,-0.93l-0.01 -0.03c2.1,0 5.19,0.78 5.19,6.78zm-15.25 -6.31l-0.02 0 -3.65 0c-0.19,0 -0.3,0.14 -0.3,0.33l0 9.51c0,0 -0.96,0.69 -2.27,0.69 -1.31,0 -1.7,-0.6 -1.7,-1.91l0 -8.31c0,-0.15 -0.14,-0.29 -0.3,-0.29l-3.74 0c-0.16,0 -0.3,0.14 -0.3,0.29l0 8.94c0,3.85 2.15,4.81 5.11,4.81 2.43,0 4.41,-1.35 4.41,-1.35 0,0 0.08,0.68 0.14,0.79 0.03,0.09 0.16,0.16 0.28,0.16l2.34 0c0.19,0 0.3,-0.14 0.3,-0.3l0.03 -13.06c0,-0.16 -0.14,-0.3 -0.33,-0.3zm-41.45 -0.02l-3.72 0c-0.16,0 -0.3,0.16 -0.3,0.35l0 12.84c0,0.35 0.23,0.47 0.52,0.47l3.36 0c0.35,0 0.44,-0.16 0.44,-0.47l0 -12.87 0 -0.02c0,-0.16 -0.14,-0.3 -0.3,-0.3zm-1.83 -5.91c-1.35,0 -2.42,1.07 -2.42,2.41 0,1.35 1.07,2.42 2.42,2.42 1.31,0 2.37,-1.07 2.37,-2.42 0,-1.34 -1.06,-2.41 -2.37,-2.41zm28.83 -0.44l-3.68 0c-0.16,0 -0.3,0.14 -0.3,0.3l0 7.15 -5.79 0 0 -7.15c0,-0.16 -0.14,-0.3 -0.3,-0.3l-3.72 0c-0.16,0 -0.3,0.14 -0.3,0.3l0 19.43c0,0.16 0.16,0.3 0.3,0.3l3.72 0c0.16,0 0.3,-0.14 0.3,-0.3l0 -8.31 5.79 0 -0.04 8.31c0,0.16 0.14,0.3 0.3,0.3l3.72 0c0.16,0 0.3,-0.14 0.3,-0.3l0 -19.43c0,-0.16 -0.14,-0.3 -0.3,-0.3zm-33 8.61l0 10.03c0,0.08 -0.01,0.2 -0.1,0.23 0,0 -2.19,1.56 -5.79,1.56 -4.36,0 -9.51,-1.36 -9.51,-10.35 0,-8.99 4.51,-10.85 8.92,-10.83 3.81,0 5.35,0.86 5.59,1.01 0.07,0.09 0.11,0.16 0.11,0.25l-0.74 3.11c0,0.16 -0.16,0.35 -0.35,0.3 -0.63,-0.19 -1.57,-0.58 -3.79,-0.58 -2.57,0 -5.34,0.74 -5.34,6.53 0,5.78 2.63,6.47 4.52,6.47 1.6,0 2.18,-0.2 2.18,-0.2l0 -4.02 -2.57 0c-0.19,0 -0.33,-0.14 -0.33,-0.3l0 -3.21c0,-0.16 0.14,-0.3 0.33,-0.3l6.54 0c0.19,0 0.33,0.14 0.33,0.3z"})})})},m=i(744),_=i.n(m);var p=function(){var t=r.attributes._dbHomeGetItOn,e=function(e){if(e.target instanceof HTMLSpanElement){e.preventDefault();var i=e.target.innerText;window.navigator.clipboard.writeText(i),o.Notify.success("".concat(null===t||void 0===t?void 0:t.clipboard,"<br/><b>").concat(i,"</b>"),s._.app.settings.notify)}};return(0,n.jsxs)("div",{className:_().home__getiton,children:[(0,n.jsx)("h2",{className:_().home__getiton__title,children:null===t||void 0===t?void 0:t.title}),(0,n.jsxs)("div",{className:_().home__getiton__links,children:[(0,n.jsxs)("a",{className:_().home__getiton__link,href:null===t||void 0===t?void 0:t.yarn.url,target:"_blank",rel:"noreferrer",children:[(0,n.jsxs)("span",{className:_().home__getiton__link__script,onClick:e,children:[(0,n.jsx)(l.JHN,{className:_().home__getiton__link__script__icon}),null===t||void 0===t?void 0:t.yarn.script]}),(0,n.jsx)(a,{className:_().home__getiton__link__icon})]}),(0,n.jsxs)("a",{className:_().home__getiton__link,href:null===t||void 0===t?void 0:t.npm.url,target:"_blank",rel:"noreferrer",children:[(0,n.jsxs)("span",{className:_().home__getiton__link__script,onClick:e,children:[(0,n.jsx)(l.JHN,{className:_().home__getiton__link__script__icon}),null===t||void 0===t?void 0:t.npm.script]}),(0,n.jsx)(c,{className:_().home__getiton__link__icon})]}),(0,n.jsx)("a",{className:_().home__getiton__link,href:null===t||void 0===t?void 0:t.github.url,target:"_blank",rel:"noreferrer",children:(0,n.jsx)(d,{className:_().home__getiton__link__icon})})]})]})}},1271:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home/partials/home-getiton/HomeGetItOn",function(){return i(4724)}])},744:function(t){t.exports={home__getiton:"HomeGetItOn_home__getiton__tkRys",home__getiton__title:"HomeGetItOn_home__getiton__title__3Zxte",home__getiton__links:"HomeGetItOn_home__getiton__links__1D7Rj",home__getiton__link:"HomeGetItOn_home__getiton__link__1zm-N",home__getiton__link__script:"HomeGetItOn_home__getiton__link__script__2aELG",home__getiton__link__script__icon:"HomeGetItOn_home__getiton__link__script__icon__3E4WT",home__getiton__link__icon:"HomeGetItOn_home__getiton__link__icon__1UhjN"}},4405:function(t,e,i){"use strict";i.d(e,{w_:function(){return c}});var n=i(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(o),r=function(){return(r=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},s=function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(i[n[o]]=t[n[o]])}return i};function a(t){return t&&t.map((function(t,e){return n.createElement(t.tag,r({key:e},t.attr),a(t.child))}))}function c(t){return function(e){return n.createElement(d,r({attr:r({},t.attr)},e),a(t.child))}}function d(t){var e=function(e){var i,o=t.attr,l=t.size,a=t.title,c=s(t,["attr","size","title"]),d=l||e.size||"1em";return e.className&&(i=e.className),t.className&&(i=(i?i+" ":"")+t.className),n.createElement("svg",r({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,c,{className:i,style:r(r({color:t.color||e.color},e.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),t.children)};return void 0!==l?n.createElement(l.Consumer,null,(function(t){return e(t)})):e(o)}}},function(t){t.O(0,[874,317,774,888,179],(function(){return e=1271,t(t.s=e);var e}));var e=t.O();_N_E=e}]);