(()=>{"use strict";var e,a,f,t,r,d={},c={};function b(e){var a=c[e];if(void 0!==a)return a.exports;var f=c[e]={id:e,loaded:!1,exports:{}};return d[e].call(f.exports,f,f.exports,b),f.loaded=!0,f.exports}b.m=d,e=[],b.O=(a,f,t,r)=>{if(!f){var d=1/0;for(i=0;i<e.length;i++){f=e[i][0],t=e[i][1],r=e[i][2];for(var c=!0,o=0;o<f.length;o++)(!1&r||d>=r)&&Object.keys(b.O).every((e=>b.O[e](f[o])))?f.splice(o--,1):(c=!1,r<d&&(d=r));if(c){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[f,t,r]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var d={};a=a||[null,f({}),f([]),f(f)];for(var c=2&t&&e;"object"==typeof c&&!~a.indexOf(c);c=f(c))Object.getOwnPropertyNames(c).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,b.d(r,d),r},b.d=(e,a)=>{for(var f in a)b.o(a,f)&&!b.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,f)=>(b.f[f](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",84:"a2986a70",144:"ceb9541c",407:"7c65655c",903:"f373bd60",1266:"c48244b1",1267:"0eb05ec8",1358:"533215dd",1517:"d3cf5bfa",1798:"872dd74f",1893:"4c5e977b",2011:"6c2eb0bc",2594:"1fb60b7d",2651:"698aa697",2746:"fe17f1a0",2786:"b15f9166",2851:"4a935de6",3085:"1f391b9e",3428:"f72117fa",3614:"30601310",3804:"54592507",3961:"1ac30e99",4158:"76d8342d",4195:"c4f5d8e4",4703:"f785807e",4726:"51d9a241",5004:"c86645fa",5010:"ade026cb",5601:"0a4907a8",6037:"73e5671f",6083:"32dd35a8",6180:"801805ba",6343:"0cc5abd3",6465:"ad3aa0ad",6821:"8e5f7389",6869:"c94f0ced",6920:"cf33e89c",6985:"6822362b",7113:"a8db68b9",7414:"393be207",7920:"1a4e3797",8278:"f3944fe7",8393:"46fa2c5a",8836:"db5f8e9a",8962:"0c466888",9002:"a16941e9",9243:"6a2350dd",9514:"1be78505",9671:"0e384e19",9735:"4ba7e5a3",9933:"07bbbd97"}[e]||e)+"."+{53:"17ed964c",84:"43143e0e",144:"336e8e3f",407:"ecb745b6",817:"20f54cfa",903:"7cd7738f",1266:"5b9da284",1267:"e68356da",1358:"e1a9f300",1408:"f18a9c1a",1517:"256702f7",1798:"5447162c",1893:"9dbc6754",2011:"2762306a",2594:"667adaf6",2651:"21acaee2",2746:"2d86ca7c",2786:"d8a2e044",2851:"7eb0e2d4",3085:"d8fd44f2",3428:"413efcaa",3614:"721ff514",3804:"0cdb6cc6",3961:"8580a31d",4158:"1a27791e",4195:"87f4906f",4703:"afbef742",4726:"b3b0f757",4972:"f17dffb1",5004:"930164d0",5010:"3566691d",5601:"b7286461",6037:"702493e8",6083:"872ed75f",6180:"bba8d76a",6343:"9cd2c8b3",6465:"fa8ea6d2",6780:"33479013",6821:"9f30036a",6869:"83ed54a0",6920:"3a70cf66",6945:"96b43e8a",6985:"03724f22",7113:"f4d595a8",7414:"cd03702d",7920:"30bd6e3b",8278:"df596d42",8393:"57478404",8836:"2b3e6c6a",8894:"119b34c9",8962:"50d3d7c4",9002:"8b8fdd1d",9243:"d0a35512",9514:"3d0b44b8",9671:"89b5f0ce",9735:"783efb77",9933:"5b11647b"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},r="opbnb-docs:",b.l=(e,a,f,d)=>{if(t[e])t[e].push(a);else{var c,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==r+f){c=l;break}}c||(o=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,b.nc&&c.setAttribute("nonce",b.nc),c.setAttribute("data-webpack",r+f),c.src=e),t[e]=[a];var u=(a,f)=>{c.onerror=c.onload=null,clearTimeout(s);var r=t[e];if(delete t[e],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((e=>e(f))),a)return a(f)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=u.bind(null,c.onerror),c.onload=u.bind(null,c.onload),o&&document.head.appendChild(c)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),b.p="/opbnb-docs/",b.gca=function(e){return e={30601310:"3614",54592507:"3804","935f2afb":"53",a2986a70:"84",ceb9541c:"144","7c65655c":"407",f373bd60:"903",c48244b1:"1266","0eb05ec8":"1267","533215dd":"1358",d3cf5bfa:"1517","872dd74f":"1798","4c5e977b":"1893","6c2eb0bc":"2011","1fb60b7d":"2594","698aa697":"2651",fe17f1a0:"2746",b15f9166:"2786","4a935de6":"2851","1f391b9e":"3085",f72117fa:"3428","1ac30e99":"3961","76d8342d":"4158",c4f5d8e4:"4195",f785807e:"4703","51d9a241":"4726",c86645fa:"5004",ade026cb:"5010","0a4907a8":"5601","73e5671f":"6037","32dd35a8":"6083","801805ba":"6180","0cc5abd3":"6343",ad3aa0ad:"6465","8e5f7389":"6821",c94f0ced:"6869",cf33e89c:"6920","6822362b":"6985",a8db68b9:"7113","393be207":"7414","1a4e3797":"7920",f3944fe7:"8278","46fa2c5a":"8393",db5f8e9a:"8836","0c466888":"8962",a16941e9:"9002","6a2350dd":"9243","1be78505":"9514","0e384e19":"9671","4ba7e5a3":"9735","07bbbd97":"9933"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,f)=>{var t=b.o(e,a)?e[a]:void 0;if(0!==t)if(t)f.push(t[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((f,r)=>t=e[a]=[f,r]));f.push(t[2]=r);var d=b.p+b.u(a),c=new Error;b.l(d,(f=>{if(b.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var r=f&&("load"===f.type?"missing":f.type),d=f&&f.target&&f.target.src;c.message="Loading chunk "+a+" failed.\n("+r+": "+d+")",c.name="ChunkLoadError",c.type=r,c.request=d,t[1](c)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,f)=>{var t,r,d=f[0],c=f[1],o=f[2],n=0;if(d.some((a=>0!==e[a]))){for(t in c)b.o(c,t)&&(b.m[t]=c[t]);if(o)var i=o(b)}for(a&&a(f);n<d.length;n++)r=d[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(i)},f=self.webpackChunkopbnb_docs=self.webpackChunkopbnb_docs||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();