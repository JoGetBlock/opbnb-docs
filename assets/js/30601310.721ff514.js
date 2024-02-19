"use strict";(self.webpackChunkopbnb_docs=self.webpackChunkopbnb_docs||[]).push([[3614],{3905:(t,a,e)=>{e.d(a,{Zo:()=>i,kt:()=>b});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function o(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function s(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)e=o[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)e=o[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var d=n.createContext({}),c=function(t){var a=n.useContext(d),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},i=function(t){var a=c(t.components);return n.createElement(d.Provider,{value:a},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,i=s(t,["components","mdxType","originalType","parentName"]),p=c(e),k=r,b=p["".concat(d,".").concat(k)]||p[k]||m[k]||o;return e?n.createElement(b,l(l({ref:a},i),{},{components:e})):n.createElement(b,l({ref:a},i))}));function b(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var o=e.length,l=new Array(o);l[0]=k;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=t,s[p]="string"==typeof t?t:r,l[1]=s;for(var c=2;c<o;c++)l[c]=e[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}k.displayName="MDXCreateElement"},45239:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=e(87462),r=(e(67294),e(3905));const o={sidebar_lable:"Cross Chain Communication"},l="opBNB Protocol addresses",s={unversionedId:"core-concepts/cross-chain",id:"core-concepts/cross-chain",title:"opBNB Protocol addresses",description:"The opBNB protocol contracts are smart contracts that enable the execution of transactions on the opBNB network. The main contracts are:",source:"@site/docs/core-concepts/cross-chain.md",sourceDirName:"core-concepts",slug:"/core-concepts/cross-chain",permalink:"/opbnb-docs/docs/core-concepts/cross-chain",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/blob/main/docs/core-concepts/cross-chain.md",tags:[],version:"current",frontMatter:{sidebar_lable:"Cross Chain Communication"},sidebar:"guideSidebar",previous:{title:"opBNB vs other Layer2 Networks",permalink:"/opbnb-docs/docs/core-concepts/difference-L2"},next:{title:"Gas and Fees",permalink:"/opbnb-docs/docs/core-concepts/gas-and-fees"}},d={},c=[{value:"L1 Contract Addresses",id:"l1-contract-addresses",level:2},{value:"L2 Contract Addresses",id:"l2-contract-addresses",level:2}],i={toc:c};function p(t){let{components:a,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},i,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"opbnb-protocol-addresses"},"opBNB Protocol addresses"),(0,r.kt)("p",null,"The opBNB protocol contracts are smart contracts that enable the execution of transactions on the opBNB network. The main contracts are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"batchInbox: This contract receives batches of transactions from the Sequencer on L1."),(0,r.kt)("li",{parentName:"ul"},"batchSender: This contract is the authorised sender of batches to the batchInbox. It can be changed by the SystemConfig contract, which governs the parameters of the opBNB network."),(0,r.kt)("li",{parentName:"ul"},"outputProposer: This contract proposes outputs for the opBNB nodes to execute. It receives inputs from the batchInbox and other sources, and generates outputs that are consistent with the opBNB protocol rules.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Testnet:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Address")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Batch Sender"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x1fd6a75cc72f39147756a663f3ef1fc95ef89495"},"0x1Fd6A75CC72f39147756A663f3eF1fc95eF89495"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Batch Inbox"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0xff00000000000000000000000000000000005611"},"0xfF00000000000000000000000000000000005611"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Output Proposer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x4ae49f1f57358c13a5732cb12e656cf8c8d986df"},"0x4aE49f1f57358c13A5732cb12e656Cf8C8D986DF"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mainnet:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Address")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Batch Sender"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0xef8783382eF80Ec23B66c43575A6103dECA909c3"},"0xef8783382eF80Ec23B66c43575A6103dECA909c3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Batch Inbox"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0xff00000000000000000000000000000000000204"},"0xff00000000000000000000000000000000000204"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Output Proposer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0xc235c904AD9EfcABfF4628E3279994A4c0A9d591"},"0xc235c904AD9EfcABfF4628E3279994A4c0A9d591"))))),(0,r.kt)("h3",{id:""}),(0,r.kt)("h2",{id:"l1-contract-addresses"},"L1 Contract Addresses"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Testnet")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Address")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L1CrossDomainMessenger"),(0,r.kt)("td",{parentName:"tr",align:null},"responsible for facilitating cross-domain communication on Layer 1 (L1)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x5b0c605c707979e8bDc2Ad9271A0388b3fD4Af3E"},"0x5b0c605c707979e8bDc2Ad9271A0388b3fD4Af3E"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L1ERC721Bridge"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract is likely an ERC-721 bridge that enables the transfer of non-fungible tokens (NFTs) between L1 and L2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0xad39e2cfa7d8d8B6c2d56244Bfb88990EC31Bb79"},"0xad39e2cfa7d8d8B6c2d56244Bfb88990EC31Bb79"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L1ERC721BridgeProxy"),(0,r.kt)("td",{parentName:"tr",align:null},"A proxy contract that may provide additional functionalities for the L1ERC721Bridge contract."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x17e1454015bFb3377c75bE7b6d47B236fd2ddbE7"},"0x17e1454015bFb3377c75bE7b6d47B236fd2ddbE7"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L1StandardBridge"),(0,r.kt)("td",{parentName:"tr",align:null},"A standard bridge contract that enables the transfer of fungible tokens between L1 and L2."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0xddB9EB847971DaA82e5dbe2745C429A3B2715B46"},"0xddB9EB847971DaA82e5dbe2745C429A3B2715B46"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L2OutputOracle"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract is an oracle on Layer 2 that provides output data to be used in smart contracts and applications"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0xD92aEF4473093C67A7696e475858152D3b2acB7c"},"0xD92aEF4473093C67A7696e475858152D3b2acB7c"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L2OutputOracleProxy"),(0,r.kt)("td",{parentName:"tr",align:null},"A proxy contract related to the L2OutputOracle, providing an interface or additional functionality."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0xFf2394Bb843012562f4349C6632a0EcB92fC8810"},"0xFf2394Bb843012562f4349C6632a0EcB92fC8810"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lib_AddressManager"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract is a library used to manage addresses for various contracts in the system."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x4d07b9B1ffC70Fc824587573cfb6ef1Cc404AaD7"},"0x4d07b9B1ffC70Fc824587573cfb6ef1Cc404AaD7"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OptimismMintableERC20Factory"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a factory contract for creating mintable ERC-20 tokens on the Layer 2 network."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x1AD11eA5426bA3A11c0bA8c4B89fd1BCa732025E"},"0x1AD11eA5426bA3A11c0bA8c4B89fd1BCa732025E"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OptimismMintableERC20FactoryProxy"),(0,r.kt)("td",{parentName:"tr",align:null},"A proxy contract related to the OptimismMintableERC20Factory, providing an interface or additional functionality."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x182cE4305791744202BB4F802C155B94cb66163B"},"0x182cE4305791744202BB4F802C155B94cb66163B"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OptimismPortal"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract serves as a portal or gateway for interacting with the Optimism Layer 2 network."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x2d5D7bEe8ebEf17DE14dd6ADAE8271507994a6E0"},"0x2d5D7bEe8ebEf17DE14dd6ADAE8271507994a6E0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OptimismPortalProxy"),(0,r.kt)("td",{parentName:"tr",align:null},"A proxy contract related to the OptimismPortal, providing an interface or additional functionality."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x4386C8ABf2009aC0c263462Da568DD9d46e52a31"},"0x4386C8ABf2009aC0c263462Da568DD9d46e52a31"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PortalSender"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract is involved in sending data or messages to a portal or gateway on the L1."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x02B668393Bc41415Dbb973C9dC144fDD42B8fA2D"},"0x02B668393Bc41415Dbb973C9dC144fDD42B8fA2D"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ProxyAdmin"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract is responsible for managing proxy contracts, allowing for upgrades and access control."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0xE4925bD8Ac30b2d4e2bD7b8Ba495a5c92d4c5156"},"0xE4925bD8Ac30b2d4e2bD7b8Ba495a5c92d4c5156"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Proxy__OVM_L1CrossDomainMessenger"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract is a proxy for the L1CrossDomainMessenger contract on the Layer 2, enabling interaction with the Layer 2 contract from Layer 1."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0xD506952e78eeCd5d4424B1990a0c99B1568E7c2C"},"0xD506952e78eeCd5d4424B1990a0c99B1568E7c2C"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Proxy__OVM_L1StandardBridge"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a proxy for the L1StandardBridge contract on the Layer 2 network, allowing interaction with the Layer 2 bridge from Layer 1."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x677311Fd2cCc511Bbc0f581E8d9a07B033D5E840"},"0x677311Fd2cCc511Bbc0f581E8d9a07B033D5E840"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SystemConfig"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract is responsible for managing system configurations, settings, or parameters in the protocol."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x8Fc086Ec0ac912D5101Fec3E9ac6D910eBD5b611"},"0x8Fc086Ec0ac912D5101Fec3E9ac6D910eBD5b611"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SystemConfigProxy"),(0,r.kt)("td",{parentName:"tr",align:null},"A proxy contract related to the SystemConfig contract, providing an interface or additional functionality."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x406aC857817708eAf4ca3A82317eF4ae3D1EA23B"},"0x406aC857817708eAf4ca3A82317eF4ae3D1EA23B"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SystemDictator"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract has a role in managing or governing certain aspects of the system or protocol."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0x281cc8F04AE5bb873bADc3D89059423E4c664834"},"0x281cc8F04AE5bb873bADc3D89059423E4c664834"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SystemDictatorProxy"),(0,r.kt)("td",{parentName:"tr",align:null},"A proxy contract related to the SystemDictator contract, providing an interface or additional functionality."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://testnet.bscscan.com/address/0xB9Edfded1254ca07085920Af22BeCE0ce905F2AB"},"0xB9Edfded1254ca07085920Af22BeCE0ce905F2AB"))))),(0,r.kt)("h3",{id:"-1"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mainnet")," "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Address")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L1CrossDomainMessenger"),(0,r.kt)("td",{parentName:"tr",align:null},"responsible for facilitating cross-domain communication on Layer 1 (L1)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x09525eB7eEd671582dDc6f02f8D9082cbd55A606"},"0x09525eB7eEd671582dDc6f02f8D9082cbd55A606"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L1ERC721Bridge"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract is likely an ERC-721 bridge that enables the transfer of non-fungible tokens (NFTs) between L1 and L2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0xCB4CD5B74A2f2D75076Fb097Da70cEF5FEaC0428"},"0xCB4CD5B74A2f2D75076Fb097Da70cEF5FEaC0428"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L1ERC721BridgeProxy"),(0,r.kt)("td",{parentName:"tr",align:null},"A proxy contract that may provide additional functionalities for the L1ERC721Bridge contract."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0xC7c796D3B712ad223Bc29Bf85E6cdD3045D998C4"},"0xC7c796D3B712ad223Bc29Bf85E6cdD3045D998C4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L1StandardBridge"),(0,r.kt)("td",{parentName:"tr",align:null},"A standard bridge contract that enables the transfer of fungible tokens between L1 and L2."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x6df37de57D50eC5a0600510eB8F563F538BDc403"},"0x6df37de57D50eC5a0600510eB8F563F538BDc403"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L2OutputOracle"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract is an oracle on Layer 2 that provides output data to be used in smart contracts and applications"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x0d61A015BAeF63f6740afF8294dAc278A494f6fA"},"0x0d61A015BAeF63f6740afF8294dAc278A494f6fA"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L2OutputOracleProxy"),(0,r.kt)("td",{parentName:"tr",align:null},"A proxy contract related to the L2OutputOracle, providing an interface or additional functionality."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x153CAB79f4767E2ff862C94aa49573294B13D169"},"0x153CAB79f4767E2ff862C94aa49573294B13D169"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lib_AddressManager"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract is a library used to manage addresses for various contracts in the system."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x29cfb9A803589Ff5C37f955ead83b45311F15b12"},"0x29cfb9A803589Ff5C37f955ead83b45311F15b12"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OptimismMintableERC20Factory"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a factory contract for creating mintable ERC-20 tokens on the Layer 2 network."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x6560F2822c9dFb9801F5E9A7c7CE1564c8c2b461"},"0x6560F2822c9dFb9801F5E9A7c7CE1564c8c2b461"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OptimismMintableERC20FactoryProxy"),(0,r.kt)("td",{parentName:"tr",align:null},"A proxy contract related to the OptimismMintableERC20Factory, providing an interface or additional functionality."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0xAa53ddCDC64A53F65A5f570cc13eB13529d780f1"},"0xAa53ddCDC64A53F65A5f570cc13eB13529d780f1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OptimismPortal"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract serves as a portal or gateway for interacting with the Optimism Layer 2 network."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x7e2419F79c9546B9A0E292Fd36aC5005ffed5495"},"0x7e2419F79c9546B9A0E292Fd36aC5005ffed5495"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OptimismPortalProxy"),(0,r.kt)("td",{parentName:"tr",align:null},"A proxy contract related to the OptimismPortal, providing an interface or additional functionality."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x1876EA7702C0ad0C6A2ae6036DE7733edfBca519"},"0x1876EA7702C0ad0C6A2ae6036DE7733edfBca519"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PortalSender"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract is involved in sending data or messages to a portal or gateway on the L1."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0xEDa034A4B7806e1283e99F8522eFd08d855B9b72"},"0xEDa034A4B7806e1283e99F8522eFd08d855B9b72"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ProxyAdmin"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract is responsible for managing proxy contracts, allowing for upgrades and access control."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x27a591Ec09AAfEEb39d7533AEf7C64E0305D1576"},"0x27a591Ec09AAfEEb39d7533AEf7C64E0305D1576"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Proxy__OVM_L1CrossDomainMessenger"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract is a proxy for the L1CrossDomainMessenger contract on the Layer 2, enabling interaction with the Layer 2 contract from Layer 1."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0xd95D508f13f7029CCF0fb61984d5dfD11b879c4f"},"0xd95D508f13f7029CCF0fb61984d5dfD11b879c4f"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Proxy__OVM_L1StandardBridge"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a proxy for the L1StandardBridge contract on the Layer 2 network, allowing interaction with the Layer 2 bridge from Layer 1."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0xF05F0e4362859c3331Cb9395CBC201E3Fa6757Ea"},"0xF05F0e4362859c3331Cb9395CBC201E3Fa6757Ea"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SystemConfig"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract is responsible for managing system configurations, settings, or parameters in the protocol."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x0be96fcB5eCCA87c775344fB76A3A1C6146cA5Fd"},"0x0be96fcB5eCCA87c775344fB76A3A1C6146cA5Fd"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SystemConfigProxy"),(0,r.kt)("td",{parentName:"tr",align:null},"A proxy contract related to the SystemConfig contract, providing an interface or additional functionality."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x7AC836148C14c74086D57F7828F2D065672Db3B8"},"0x7AC836148C14c74086D57F7828F2D065672Db3B8"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SystemDictator"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract has a role in managing or governing certain aspects of the system or protocol."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0x0744F61646DdE7Bc2d2c18B13D08a8fba597666b"},"0x0744F61646DdE7Bc2d2c18B13D08a8fba597666b"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SystemDictatorProxy"),(0,r.kt)("td",{parentName:"tr",align:null},"A proxy contract related to the SystemDictator contract, providing an interface or additional functionality."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://bscscan.com/address/0xEb23CCD85eF040BdAf3CBf962C816cD9Cb691F35"},"0xEb23CCD85eF040BdAf3CBf962C816cD9Cb691F35"))))),(0,r.kt)("h3",{id:"-2"}),(0,r.kt)("h2",{id:"l2-contract-addresses"},"L2 Contract Addresses"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Address")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WBNB"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract represents Wrapped BNB, a token that is pegged to BNB on the opBNB network."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/address/0x4200000000000000000000000000000000000006"},"0x4200000000000000000000000000000000000006"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L2CrossDomainMessenger"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract is responsible for facilitating cross-domain communication on Layer 2 of the opBNB network."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/address/0x4200000000000000000000000000000000000007"},"0x4200000000000000000000000000000000000007"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L2StandardBridge"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract is a standard bridge on Layer 2, enabling the transfer of fungible tokens between different chains or networks."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/address/0x4200000000000000000000000000000000000010"},"0x4200000000000000000000000000000000000010"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SequencerFeeVault"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract serves as a vault for collecting fees from sequencers, who are responsible for submitting transactions on opBNB."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/address/0x4200000000000000000000000000000000000011"},"0x4200000000000000000000000000000000000011"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OptimismMintableERC20Factory"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a factory contract for creating mintable ERC-20 tokens on the Layer 2 network."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/address/0x4200000000000000000000000000000000000012"},"0x4200000000000000000000000000000000000012"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GasPriceOracle"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract may provide gas price data to be used in transactions and fee calculations on the opBNB network."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/address/0x420000000000000000000000000000000000000F"},"0x420000000000000000000000000000000000000F"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L1Block"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract represents a block on Layer 1 in the context of interacting with opBNB."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/address/0x4200000000000000000000000000000000000015"},"0x4200000000000000000000000000000000000015"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L2ToL1MessagePasser"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract is responsible for passing messages from Layer 2 to Layer 1 on the opBNB network."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/address/0x4200000000000000000000000000000000000016"},"0x4200000000000000000000000000000000000016"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L2ERC721Bridge"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract is a bridge for transferring ERC-721 non-fungible tokens on Layer 2."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/address/0x4200000000000000000000000000000000000014"},"0x4200000000000000000000000000000000000014"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OptimismMintableERC721Factory"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a factory contract for creating mintable ERC-721 tokens on the Layer 2 network."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/address/0x4200000000000000000000000000000000000017"},"0x4200000000000000000000000000000000000017"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ProxyAdmin"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract is responsible for managing proxy contracts on the opBNB network, allowing for upgrades and access control."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/address/0x4200000000000000000000000000000000000018"},"0x4200000000000000000000000000000000000018"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BaseFeeVault"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract acts as a vault for collecting base fees on the opBNB network."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/address/0x4200000000000000000000000000000000000019"},"0x4200000000000000000000000000000000000019"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L1FeeVault"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract serves as a vault for collecting fees on Layer 1 in the context of interacting with opBNB."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://opbnbscan.com/address/0x420000000000000000000000000000000000001a"},"0x420000000000000000000000000000000000001a"))))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:e(97901).Z,width:"1232",height:"610"})))}p.isMDXComponent=!0},97901:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/images/L1-L2-d63a7d164a92644a592a906d05a647ce.png"}}]);