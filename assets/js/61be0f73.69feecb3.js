"use strict";(self.webpackChunkcrackpipe_docs=self.webpackChunkcrackpipe_docs||[]).push([[452],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5256:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(1163),a=(r(9496),r(9613));const i={sidebar_position:2},o="File and Folder Structure",l={unversionedId:"server-docs/structure",id:"server-docs/structure",title:"File and Folder Structure",description:"Game Name Format",source:"@site/docs/server-docs/structure.md",sourceDirName:"server-docs",slug:"/server-docs/structure",permalink:"/docs/server-docs/structure",draft:!1,editUrl:"https://github.com/phalcode/crackpipe-docs/tree/master/docs/server-docs/structure.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/server-docs/server-configuration"},next:{title:"Troubleshooting",permalink:"/docs/server-docs/troubleshooting"}},s={},p=[{value:"Game Name Format",id:"game-name-format",level:2},{value:"Syntax Explanation",id:"syntax-explanation",level:3},{value:"Other valid Examples",id:"other-valid-examples",level:3},{value:"I have a ton of unsorted Games with different naming some compressed some not how do i make it work with crackpipe?",id:"i-have-a-ton-of-unsorted-games-with-different-naming-some-compressed-some-not-how-do-i-make-it-work-with-crackpipe",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"file-and-folder-structure"},"File and Folder Structure"),(0,a.kt)("h2",{id:"game-name-format"},"Game Name Format"),(0,a.kt)("p",null,"Here comes the most Painful part of setting up a Crackpipe Server. But it is definitely worth every effort.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"/files")," folder you mount into the server must contain zip files with games."),(0,a.kt)("p",null,"These Games ",(0,a.kt)("strong",{parentName:"p"},"must")," be in a .zip or .7z format and follow this name\nscheme to work correctly and get detected:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Gamename (vVersion) (EA) (ReleaseYear).zip")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"The Parentheses must be included"))),(0,a.kt)("p",null,"Everything else will be ignored by Crackpipe."),(0,a.kt)("h3",{id:"syntax-explanation"},"Syntax Explanation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Game name could be: ",(0,a.kt)("inlineCode",{parentName:"li"},"Far Cry 6")),(0,a.kt)("li",{parentName:"ul"},"Version Tag is optional",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"it ",(0,a.kt)("strong",{parentName:"li"},"must")," begin with a lowercase ",(0,a.kt)("inlineCode",{parentName:"li"},"v"),": e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"(v1.0)"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"(v1.224)"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"(vALPHA_BUILD123)")))),(0,a.kt)("li",{parentName:"ul"},"EA Tag is optional",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"it will set the Early Access Status of the game to true if given ``(EA)"))),(0,a.kt)("li",{parentName:"ul"},"Release Year",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For the most accurate detection I recommend using the release year on rawg.io's website ",(0,a.kt)("inlineCode",{parentName:"li"},"(2021)"))))),(0,a.kt)("p",null,"Full Example would be: ",(0,a.kt)("inlineCode",{parentName:"p"},"Far Cry 6 (v1.5.0) (2021).zip")),(0,a.kt)("h3",{id:"other-valid-examples"},"Other valid Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Star Wars Jedi - Fallen Order (v1.0.10.0) (2019).zip")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HITMAN 3 (v3.10.1) (2021).7z")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"The Wandering Village (v0.1.32) (EA) (2022).zip")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Saints Row (2022).zip")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Stray (2022).7z")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Captain of Industry (v0.4.12b) (EA) (2022).zip"))),(0,a.kt)("h2",{id:"i-have-a-ton-of-unsorted-games-with-different-naming-some-compressed-some-not-how-do-i-make-it-work-with-crackpipe"},"I have a ton of unsorted Games with different naming some compressed some not how do i make it work with crackpipe?"),(0,a.kt)("p",null,"Manual Labour. Lets go through this step by step."),(0,a.kt)("p",null,"First you will need to compress all games."))}u.isMDXComponent=!0}}]);