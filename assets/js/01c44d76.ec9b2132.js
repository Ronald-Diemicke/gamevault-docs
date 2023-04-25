"use strict";(self.webpackChunkcrackpipe_docs=self.webpackChunkcrackpipe_docs||[]).push([[850],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(1163),o=(n(9496),n(9613));const a={sidebar_position:1},i="How to Set up a Crackpipe Client",l={unversionedId:"Client Docs/client-setup",id:"Client Docs/client-setup",title:"How to Set up a Crackpipe Client",description:"If you want to use Crackpipe to download and install games on your Windows 10/11 operating system, you need to follow these steps.",source:"@site/docs/Client Docs/client-setup.md",sourceDirName:"Client Docs",slug:"/Client Docs/client-setup",permalink:"/crackpipe-docs/docs/Client Docs/client-setup",draft:!1,editUrl:"https://github.com/phalcode/crackpipe-docs/docs/Client Docs/client-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Introduction",permalink:"/crackpipe-docs/docs/intro"},next:{title:"How to Use",permalink:"/crackpipe-docs/docs/Client Docs/how-to-use"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Initial Configuration",id:"initial-configuration",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-set-up-a-crackpipe-client"},"How to Set up a Crackpipe Client"),(0,o.kt)("p",null,"If you want to use Crackpipe to download and install games on your Windows 10/11 operating system, you need to follow these steps."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you start, make sure you have the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows 10/11 Operating System with Microsoft Store installed"),(0,o.kt)("li",{parentName:"ul"},"A running ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Phalcode/crackpipe-backend"},"Crackpipe Server"))),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To get started, install the Crackpipe app from ",(0,o.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/p/crackpipe/9pmjlf08x8p0"},"the official Microsoft Store"),". This should be a simple process that only takes a few minutes."),(0,o.kt)("h2",{id:"initial-configuration"},"Initial Configuration"),(0,o.kt)("p",null,"Once you have installed and launched Crackpipe, you need to do some initial configuration to get it up and running properly. Here's what you need to do:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enter the URL of your Crackpipe Server. This is the server that will provide the games you want to download and install. The Scheme is: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://example-crackpipe-server.com"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create an account if you haven't already done so. If you already have an account, simply log in. Note that your account may need to be manually activated by your Crackpipe-Server Administrators before you can use it.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set up a root folder for Crackpipe. This is the folder where all your downloaded games will be installed by default."))),(0,o.kt)("p",null,"By following these steps, you should now have a properly configured Crackpipe client that is ready to download and install games from your Crackpipe server."))}d.isMDXComponent=!0}}]);