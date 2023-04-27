"use strict";(self.webpackChunkcrackpipe_docs=self.webpackChunkcrackpipe_docs||[]).push([[9671],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6575:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(1163),a=(r(9496),r(9613));const i={sidebar_position:1},o="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"Let's discover Crackpipe!",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/phalcode/crackpipe-docs/tree/master/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",next:{title:"Setting up a Crackpipe Server",permalink:"/docs/server-docs/setup"}},l={},c=[{value:"What is Crackpipe",id:"what-is-crackpipe",level:2},{value:"Features",id:"features",level:2},{value:"Client Features",id:"client-features",level:3},{value:"Server Features",id:"server-features",level:3},{value:"License",id:"license",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Let's discover Crackpipe!")),(0,a.kt)("h2",{id:"what-is-crackpipe"},"What is Crackpipe"),(0,a.kt)("p",null,"Crackpipe is an open-source, decentralized, selfhosted and liberal alternative to Game Platforms and Launchers like Steam, Origin, Epic Games, GoG, etc. which allows you and your friends to play and track games that are ",(0,a.kt)("strong",{parentName:"p"},"on a fileserver"),"."),(0,a.kt)("p",null,"Think of Jellyfin, but for Videogames. You must provide the games. You can not buy games on Crackpipe."),(0,a.kt)("p",null,"The Crackpipe ecosystem consists of a selfhostable NestJS Backend Application and one or more Windows Store App Clients."),(0,a.kt)("p",null,'It was designed to work with "alternatively obtained" games such as DRM-free games. While Crackpipe can be used to install cracked games, it does not encourage or condone piracy.'),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("p",null,"Here is an overview of all core functions of Crackpipe"),(0,a.kt)("h3",{id:"client-features"},"Client Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd0e Browse through your servers game collection"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udce5 Download games from your server securely"),(0,a.kt)("li",{parentName:"ul"},"\ud83c\udfae Launch the games and play them"),(0,a.kt)("li",{parentName:"ul"},"\u23f1\ufe0f Track your playtimes and progress (even if the server is offline)"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc65 Compare your stat and play states with other users on the server")),(0,a.kt)("h3",{id:"server-features"},"Server Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u267b\ufe0f Automatically indexes games on the file system into a database"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udcda Enriches the games with metadata like tags & genres and much more using RAWG API"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc65 Multi User Authentication"),(0,a.kt)("li",{parentName:"ul"},"\u23f1\ufe0f Keeps track of your users game progresses and state"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udea8 Health Monitoring and configurable Logging"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd0e Full-Text-Search, Filters, Sorting, Pagination"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd0c Fully Documented API"),(0,a.kt)("li",{parentName:"ul"},"\u2699\ufe0f Highly Configurable")),(0,a.kt)("h2",{id:"license"},"License"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg",alt:"CC BY-NC-SA 4.0"}))),(0,a.kt)("p",null,"This work is licensed under a\n",(0,a.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},"Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},(0,a.kt)("img",{parentName:"a",src:"https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png",alt:"CC BY-NC-SA 4.0"}))))}m.isMDXComponent=!0}}]);