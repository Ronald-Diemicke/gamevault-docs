"use strict";(self.webpackChunkcrackpipe_docs=self.webpackChunkcrackpipe_docs||[]).push([[9103],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9976:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(1163),n=(r(9496),r(9613));const i={sidebar_position:1},o="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"What is Crackpipe",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/phalcode/crackpipe-docs/tree/master/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",next:{title:"Setting up a Crackpipe Server",permalink:"/docs/server-docs/setup"}},l={},p=[{value:"What is Crackpipe",id:"what-is-crackpipe",level:2},{value:"Features",id:"features",level:2},{value:"Client Features",id:"client-features",level:3},{value:"Server Features",id:"server-features",level:3},{value:"Support",id:"support",level:2},{value:"License",id:"license",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("h2",{id:"what-is-crackpipe"},"What is Crackpipe"),(0,n.kt)("p",null,"Crackpipe is an innovative gaming platform providing a decentralized, open-source alternative to popular gaming platforms like Steam and Epic Games. It allows you and your friends to enjoy playing and organizing games stored ",(0,n.kt)("strong",{parentName:"p"},"on your own file server"),"."),(0,n.kt)("p",null,"But Crackpipe operates differently. You can not buy games on this platform. Instead, think of it as your personal Steam for video games. You bring your own game files (installers, binaries and so on) from wherever you have them, and the platform detects and provides a user-friendly interface to easily download, install, and track your playtimes and progress. You can not ",(0,n.kt)("em",{parentName:"p"},"stream")," games with this app."),(0,n.kt)("p",null,"The Crackpipe ecosystem consists of two main components: a self-hosted NestJS Backend Application and one or more App Clients for you and your close ones."),(0,n.kt)("p",null,"In summary, Crackpipe empowers gamers by offering a flexible and convenient way to organize and play their game library from a self-hosted file server."),(0,n.kt)("admonition",{title:"Piracy Disclaimer",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},'Crackpipe is primarily intended for "alternatively obtained" games, such as DRM-free games, rather than games obtained from conventional platforms like Steam or EPIC Games. It\'s crucial to understand that while Crackpipe ',(0,n.kt)("em",{parentName:"p"},"can")," theoretically be utilized with cracked games, it does ",(0,n.kt)("strong",{parentName:"p"},"not")," endorse or support piracy. We view piracy as an improper and unauthorized usage of our application.")),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("p",null,"Let's take a look at all the main functions of Crackpipe:"),(0,n.kt)("h3",{id:"client-features"},"Client Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd0e Browse your server's game collection"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udce5 Securely download your games from your server"),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udfae Launch and play games on your PC"),(0,n.kt)("li",{parentName:"ul"},"\u23f1\ufe0f Track playtimes and progress (even when the server is offline)"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc65 Compare statistics and game progress with other users on the server"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd12 Manage users and games with a powerful Admin UI")),(0,n.kt)("h3",{id:"server-features"},"Server Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u267b\ufe0f Automatically index games from the file system into a database"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcda Enhances games with metadata like tags, genres, and more using RAWG API"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcf8 Use Google Image Search to find beautiful box art for your library"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc65 Multi-User Authentication"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd12 Role-Based Access Control"),(0,n.kt)("li",{parentName:"ul"},"\u23f1\ufe0f Keep track of your users' game progress and state"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udea8 Health Monitoring and configurable Logging"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd0e Full-Text Search, Filters, Sorting, Pagination"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd0c Fully Documented API"),(0,n.kt)("li",{parentName:"ul"},"\u2699\ufe0f Highly Configurable")),(0,n.kt)("h2",{id:"support"},"Support"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://ko-fi.com/R6R76Q6KD"},(0,n.kt)("img",{parentName:"a",src:"https://ko-fi.com/img/githubbutton_sm.svg",alt:"ko-fi"}))),(0,n.kt)("h2",{id:"license"},"License"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg",alt:"CC BY-NC-SA 4.0"}))),(0,n.kt)("p",null,"This work is licensed under a\n",(0,n.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},"Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License"),"."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},(0,n.kt)("img",{parentName:"a",src:"https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png",alt:"CC BY-NC-SA 4.0"}))))}m.isMDXComponent=!0}}]);