"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[84],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},52435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"Getting Started",icon:"code",index:"yes",dir:{order:1}},i=void 0,s={unversionedId:"for-developers/getting-started",id:"for-developers/getting-started",title:"Getting Started",description:"This is a living document and is susceptible to changes.",source:"@site/docs/for-developers/getting-started.md",sourceDirName:"for-developers",slug:"/for-developers/getting-started",permalink:"/opbnb-docs/docs/for-developers/getting-started",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/docs/for-developers/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting Started",icon:"code",index:"yes",dir:{order:1}},sidebar:"guideSidebar",previous:{title:"opBNB - High-performance layer 2 solution",permalink:"/opbnb-docs/docs/intro"},next:{title:"Network Information",permalink:"/opbnb-docs/docs/for-developers/opbnb-testnet-information"}},l={},p=[{value:"How to use opBNB?",id:"how-to-use-opbnb",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This is a living document and is susceptible to changes. ")),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Developing on opBNB, an optimistic rollup Layer 2 scaling solution for BNB Smart Chain, is nearly the same as building directly on BNB Smart Chain. opBNB uses an EVM execution engine, meaning decentralized applications can be migrated from Ethereum, BNB Smart Chain, Polygon, and other EVM-compatible chains without changing any code.Some key points to highlight: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"opBNB is an optimistic rollup - it scales BNB Smart Chain by bundling transactions off-chain and using fraud proofs to ensure validity. This allows for much higher throughput than the underlying BNB Smart Chain."),(0,r.kt)("li",{parentName:"ol"},"opBNB uses the EVM, the same virtual machine used by Ethereum and BNB Smart Chain. This means any dApp, smart contract, or other application that runs on the EVM can operate on opBNB with little to no code changes. Developers can simply deploy the same application on opBNB to get the benefits of Layer 2 scaling."),(0,r.kt)("li",{parentName:"ol"},"dApps and smart contracts can migrate to opBNB from any other EVM chain like Ethereum, BNB Smart Chain, or Polygon. Again, since opBNB is EVM-compatible, the applications will run as-is on the new network."),(0,r.kt)("li",{parentName:"ol"},"Building on opBNB provides the scalability and low costs of a rollup, while still leveraging the security of BNB Smart Chain. dApps get the best of both Layer 1 and Layer 2.")),(0,r.kt)("h2",{id:"how-to-use-opbnb"},"How to use opBNB?"),(0,r.kt)("p",null,"To use opBNB, you need to have an Ethereum wallet like Metamask or Trustwallet. For this tutorial, I'll use MetaMask, a popular browser extension that allows you to interact with dApps. You also need to have some BNB in your wallet to pay for gas fees."),(0,r.kt)("p",null,"Step 1: Connect your wallet to opBNB"),(0,r.kt)("p",null,'Connect your wallet to the opBNB testnet and BSC testnet. To do this, click on the network dropdown menu on MetaMask and select "Custom RPC". Then, enter the following details:'),(0,r.kt)("p",null,'Network Name: BSC TestNet\nBSC testnet RPC endpoint: "',(0,r.kt)("a",{parentName:"p",href:"https://data-seed-prebsc-1-s1.binance.org:8545%22"},'https://data-seed-prebsc-1-s1.binance.org:8545"'),"\nBSC testnet chain ID: 97\nSymbol: BNB"),(0,r.kt)("p",null,'Network Name: opBNB TestNet\nBSC testnet RPC endpoint: "',(0,r.kt)("a",{parentName:"p",href:"https://op-bnb-testnet-l2.nodereal.io%22"},'https://op-bnb-testnet-l2.nodereal.io"'),"\nBSC testnet chain ID: 91735\nSymbol: BNB"),(0,r.kt)("p",null,"Step 2: Deposit your tBNB token to the opBNB\nStep 3: Start building by deploying smart contract to opBNB."))}d.isMDXComponent=!0}}]);