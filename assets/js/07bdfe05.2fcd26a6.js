"use strict";(self.webpackChunkgamevault_docs=self.webpackChunkgamevault_docs||[]).push([[3e3],{9613:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(9496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1346:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(1163),n=(a(9496),a(9613));const o={sidebar_position:1},i="Setting up a GameVault Server",s={unversionedId:"server-docs/setup",id:"server-docs/setup",title:"Setting up a GameVault Server",description:"Setting up a GameVault server can be done in a few simple steps. Before starting, there are some prerequisites you need to have in place.",source:"@site/docs/server-docs/setup.md",sourceDirName:"server-docs",slug:"/server-docs/setup",permalink:"/docs/server-docs/setup",draft:!1,editUrl:"https://github.com/phalcode/gamevault-docs/tree/master/docs/server-docs/setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Configuration",permalink:"/docs/server-docs/configuration"}},l={},p=[{value:"Method 1: Docker Setup",id:"method-1-docker-setup",level:2},{value:"1. Install Docker and Docker Compose",id:"1-install-docker-and-docker-compose",level:3},{value:"2. Create a Docker Compose file",id:"2-create-a-docker-compose-file",level:3},{value:"3. Start the GameVault server",id:"3-start-the-gamevault-server",level:3},{value:"Method 1.1: Docker Setup without PostgreSQL",id:"method-11-docker-setup-without-postgresql",level:4},{value:"Method 2: Caprover One Click App",id:"method-2-caprover-one-click-app",level:2},{value:"Method 3: TrueNAS Scale",id:"method-3-truenas-scale",level:2},{value:"Method 4: Portainer One Click App",id:"method-4-portainer-one-click-app",level:2},{value:"More Methods",id:"more-methods",level:2},{value:"What Next?",id:"what-next",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"setting-up-a-gamevault-server"},"Setting up a GameVault Server"),(0,n.kt)("p",null,"Setting up a GameVault server can be done in a few simple steps. Before starting, there are some prerequisites you need to have in place."),(0,n.kt)("p",null,"There are many ways to deploy a GameVault Server. You can choose one from below."),(0,n.kt)("h2",{id:"method-1-docker-setup"},"Method 1: Docker Setup"),(0,n.kt)("h3",{id:"1-install-docker-and-docker-compose"},"1. Install Docker and Docker Compose"),(0,n.kt)("p",null,"Docker and Docker Compose are recommended to set up the GameVault server. If you do not have Docker and Docker Compose installed on your system, follow these steps to install them:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Docker"),": You can download Docker from the official ",(0,n.kt)("a",{parentName:"li",href:"https://www.docker.com/get-started"},"Docker website"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Docker Compose"),": Docker Compose is already included in the Docker Desktop installation for Windows and macOS users. If you are using Linux, follow the instructions on the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"Docker Compose installation page"),".")),(0,n.kt)("h3",{id:"2-create-a-docker-compose-file"},"2. Create a Docker Compose file"),(0,n.kt)("p",null,"Create a new file named ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," in a directory of your choice and copy the following code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.8"\nservices:\n  gamevault-backend:\n    image: phalcode/gamevault-backend:latest\n    restart: unless-stopped\n    environment:\n      DB_HOST: db\n      DB_USERNAME: gamevault\n      DB_PASSWORD: RANDOMPASSWORD\n      # The Following Line grants Admin Role to account with this username upon registration.\n      SERVER_ADMIN_USERNAME: admin\n      # Uncomment and Insert your RAWG API Key here if you have one (http://rawg.io/login?forward=developer)\n      # RAWG_API_KEY: YOURAPIKEYHERE\n    volumes:\n      # Mount the folder where your games are\n      - /your/games/folder:/files\n      # Mount the folder where gamevault should store its images\n      - /your/images/folder:/images\n    ports:\n      - 8080:8080\n  db:\n    image: postgres:15\n    restart: unless-stopped\n    environment:\n      POSTGRES_USER: gamevault\n      POSTGRES_PASSWORD: RANDOMPASSWORD\n      POSTGRES_DB: gamevault\n    volumes:\n      # Mount the folder where your postgres database files should land\n      - /your/database/folder:/var/lib/postgresql\n')),(0,n.kt)("h3",{id:"3-start-the-gamevault-server"},"3. Start the GameVault server"),(0,n.kt)("p",null,"Open a terminal, navigate to the directory where the ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file is located, and run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,n.kt)("p",null,"This will start the GameVault server and PostgreSQL server in the background. The ",(0,n.kt)("inlineCode",{parentName:"p"},"-d")," parameter detaches the process from the terminal."),(0,n.kt)("p",null,"Congratulations! You have successfully set up a GameVault server. You can now start adding games and managing your game library."),(0,n.kt)("h4",{id:"method-11-docker-setup-without-postgresql"},"Method 1.1: Docker Setup without PostgreSQL"),(0,n.kt)("p",null,"We don't recommend it but you can run GameVault without a PostgreSQL Database too using the following configuration:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.8"\nservices:\n  gamevault-backend:\n    image: phalcode/gamevault-backend:latest\n    restart: unless-stopped\n    environment:\n      DB_SYSTEM: "SQLITE"\n      # The Following Line grants Admin Role to account with this username upon registration.\n      SERVER_ADMIN_USERNAME: admin\n      # Uncomment and Insert your RAWG API Key here if you have one (https://gamevau.lt/docs/server-docs/indexing-and-metadata#rawg-api-key)\n      # RAWG_API_KEY: YOURAPIKEYHERE\n    volumes:\n      - /your/games/folder:/files\n      - /your/images/folder:/images\n      - /your/sqlite/database/folder:/db\n')),(0,n.kt)("h2",{id:"method-2-caprover-one-click-app"},"Method 2: Caprover One Click App"),(0,n.kt)("p",null,"If you're using ",(0,n.kt)("a",{parentName:"p",href:"https://caprover.com"},"Caprover"),", setting up a GameVault Server with a Postgres DB is just a click away."),(0,n.kt)("p",null,"We have already created a Caprover One-Click-App Integration for this purpose. However, our app hasn't gained enough prominence to be included in the official One-Click-App Repository of Caprover. So, we decided to create our own ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Phalcode/caprover-one-click-apps"},"third-party repository"),"."),(0,n.kt)("p",null,"To use it, follow these simple steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log in to your CapRover dashboard"),(0,n.kt)("li",{parentName:"ol"},'Go to "Apps" and click on "One-Click Apps/Databases." Scroll down to the bottom'),(0,n.kt)("li",{parentName:"ol"},'Under "3rd party repositories", copy and paste the following link: ',(0,n.kt)("inlineCode",{parentName:"li"},"https://phalcode.github.io/caprover-one-click-apps")),(0,n.kt)("li",{parentName:"ol"},'Click the "Connect New Repository" button')),(0,n.kt)("p",null,"Now, all you need to do is search for 'GameVault' using the search box and follow the installation wizard."),(0,n.kt)("h2",{id:"method-3-truenas-scale"},"Method 3: TrueNAS Scale"),(0,n.kt)("p",null,"To add the gamevault server Truenas Scale, just add the ",(0,n.kt)("a",{parentName:"p",href:"https://truecharts.org/manual/SCALE/guides/getting-started"},"truecharts catalog"),", a community based catalog for Truenas Scale and install the ",(0,n.kt)("strong",{parentName:"p"},"gamevault-backend")," chart."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"gamevault-backend is pre-configured on your behalf with cloudnative-postgres as the default database which requires the prometheus-operator and cloudnative-pg operator to be installed prior.")),(0,n.kt)("p",null,"Setup your ",(0,n.kt)("strong",{parentName:"p"},"Server Admin User")," and ",(0,n.kt)("strong",{parentName:"p"},"Server Admin Password")," credentials."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Show Server Settings"),", enable this to display additional server sections."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u2610"," Server Registration Disabled."),(0,n.kt)("li",{parentName:"ul"},"\u2610"," Server Account Activation Disabled."),(0,n.kt)("li",{parentName:"ul"},'Server Cors Allowed Origin: "*"'),(0,n.kt)("li",{parentName:"ul"},"Server Log Level: ",(0,n.kt)("strong",{parentName:"li"},"info")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Show Games and Images Settings")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Games Index Interval In Minutes: ",(0,n.kt)("strong",{parentName:"li"},"5")),(0,n.kt)("li",{parentName:"ul"},"Image GC Keep Days: ",(0,n.kt)("strong",{parentName:"li"},"30")),(0,n.kt)("li",{parentName:"ul"},"Image GC Interval Minutes: ",(0,n.kt)("strong",{parentName:"li"},"60")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Show RAWG Server Settings"),", enable this to show the RAWG section."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Optionally set your RAWG API Key."),(0,n.kt)("li",{parentName:"ul"},"additional variables are available for RAWG.")))),(0,n.kt)("p",null,"Leave the Logs and Images storage options as PVC."),(0,n.kt)("p",null,"Games storage option can be safely set hostpath if not using using any shares or switch to NFS otherwise."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add your games/zips here.")),(0,n.kt)("h2",{id:"method-4-portainer-one-click-app"},"Method 4: Portainer One Click App"),(0,n.kt)("admonition",{title:"Not yet available",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"We haven't had the time to create a Portrainer One-Click-App Template yet. But you can help us with it! Talk to us if you are interested.")),(0,n.kt)("h2",{id:"more-methods"},"More Methods"),(0,n.kt)("p",null,"We're excited to announce that we're expanding our support for One-Click-App Integrations! In the future, we plan to add more hosting systems to our lineup."),(0,n.kt)("p",null,"We do want to point out that each system has its own unique blueprint syntax, and it can take a bit of time to set up the blueprints of new One-Click-Apps just right."),(0,n.kt)("p",null,"However, we're always looking for passionate individuals to join us in our mission! If you're interested in contributing and setting up a one-click-app for any of these hosting systems, we'd love to have you on board. Together, we can make our platform even more accessible and user-friendly for everyone."),(0,n.kt)("h2",{id:"what-next"},"What Next?"),(0,n.kt)("p",null,"\ud83e\udd73 Congratulations! \ud83e\udd73"),(0,n.kt)("p",null,"To set up and start using server, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Configure your server:")," Customize the server settings to meet your specific needs. Refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-docs/configuration"},"configuration guide")," for detailed instructions.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Add games:")," Prepare your game files in the required format for GameVault to identify and install them correctly. Read the ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-docs/structure"},"structure chapter")," for important information. Once ready, proceed to ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-docs/adding-games"},"add your games"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Enhance with Metadata:")," Connect your server to RAWG, the world's largest video game database that GameVault utilizes for fetching game metadata. This will enrich your gaming experience. Learn how to establish the connection in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-docs/indexing-and-metadata"},"indexing and metadata guide"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Create an admin user:")," Set up an admin user account to gain full administrative access to the application. Refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/server-docs/user-management"},"user management guide")," for instructions on setting up the first user."))),(0,n.kt)("p",null,"Enjoy your gaming experience with GameVault!"))}c.isMDXComponent=!0}}]);