(()=>{"use strict";var e,a,t,r,f,c={},d={};function o(e){var a=d[e];if(void 0!==a)return a.exports;var t=d[e]={id:e,loaded:!1,exports:{}};return c[e].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}o.m=c,e=[],o.O=(a,t,r,f)=>{if(!t){var c=1/0;for(i=0;i<e.length;i++){t=e[i][0],r=e[i][1],f=e[i][2];for(var d=!0,b=0;b<t.length;b++)(!1&f||c>=f)&&Object.keys(o.O).every((e=>o.O[e](t[b])))?t.splice(b--,1):(d=!1,f<c&&(c=f));if(d){e.splice(i--,1);var n=r();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[t,r,f]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var f=Object.create(null);o.r(f);var c={};a=a||[null,t({}),t([]),t(t)];for(var d=2&r&&e;"object"==typeof d&&!~a.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,o.d(f,c),f},o.d=(e,a)=>{for(var t in a)o.o(a,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,t)=>(o.f[t](e,a),a)),[])),o.u=e=>"assets/js/"+({53:"935f2afb",84:"a2986a70",144:"ceb9541c",407:"7c65655c",903:"f373bd60",1266:"c48244b1",1267:"0eb05ec8",1517:"d3cf5bfa",1798:"872dd74f",1893:"4c5e977b",1905:"e724d7c7",2011:"6c2eb0bc",2746:"fe17f1a0",2786:"b15f9166",3085:"1f391b9e",3428:"f72117fa",3614:"30601310",3804:"54592507",3961:"1ac30e99",4158:"76d8342d",4195:"c4f5d8e4",4703:"f785807e",4726:"51d9a241",5004:"c86645fa",5010:"ade026cb",5601:"0a4907a8",6037:"73e5671f",6083:"32dd35a8",6180:"801805ba",6343:"0cc5abd3",6465:"ad3aa0ad",6821:"8e5f7389",6869:"c94f0ced",6920:"cf33e89c",7113:"a8db68b9",7414:"393be207",7920:"1a4e3797",8278:"f3944fe7",8393:"46fa2c5a",8836:"db5f8e9a",8951:"844887c0",9002:"a16941e9",9243:"6a2350dd",9401:"94ffd1a7",9514:"1be78505",9671:"0e384e19",9735:"4ba7e5a3",9933:"07bbbd97"}[e]||e)+"."+{53:"e84f90b8",84:"674f5c9c",144:"336e8e3f",407:"ecb745b6",817:"20f54cfa",903:"7cd7738f",1266:"1ff2d1e7",1267:"e68356da",1408:"6dddafd4",1517:"256702f7",1798:"5447162c",1893:"9dbc6754",1905:"396b5139",2011:"34987ee1",2746:"2d86ca7c",2786:"d8a2e044",3085:"d8fd44f2",3428:"cdf2cac4",3614:"721ff514",3804:"0cdb6cc6",3961:"7d30e0b4",4158:"1a27791e",4195:"87f4906f",4703:"6ef956d2",4726:"4a4ad243",4972:"f17dffb1",5004:"cd82b7ce",5010:"3566691d",5601:"b7286461",6037:"14bb4061",6083:"872ed75f",6180:"2de23a1b",6343:"b1a8e95d",6465:"915e1159",6780:"33479013",6821:"1373c3ef",6869:"83ed54a0",6920:"b7fbb696",6945:"96b43e8a",7113:"fed1601a",7414:"cd03702d",7920:"30bd6e3b",8278:"b7daf517",8393:"57478404",8836:"302de27d",8894:"119b34c9",8951:"988fce83",9002:"8e947cd9",9243:"d0a35512",9401:"81d79606",9514:"3d0b44b8",9671:"bd756bb3",9735:"bf0e2bb8",9933:"318359c9"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r={},f="opbnb-docs:",o.l=(e,a,t,c)=>{if(r[e])r[e].push(a);else{var d,b;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==f+t){d=l;break}}d||(b=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",f+t),d.src=e),r[e]=[a];var u=(a,t)=>{d.onerror=d.onload=null,clearTimeout(s);var f=r[e];if(delete r[e],d.parentNode&&d.parentNode.removeChild(d),f&&f.forEach((e=>e(t))),a)return a(t)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),b&&document.head.appendChild(d)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.p="/opbnb-docs/",o.gca=function(e){return e={30601310:"3614",54592507:"3804","935f2afb":"53",a2986a70:"84",ceb9541c:"144","7c65655c":"407",f373bd60:"903",c48244b1:"1266","0eb05ec8":"1267",d3cf5bfa:"1517","872dd74f":"1798","4c5e977b":"1893",e724d7c7:"1905","6c2eb0bc":"2011",fe17f1a0:"2746",b15f9166:"2786","1f391b9e":"3085",f72117fa:"3428","1ac30e99":"3961","76d8342d":"4158",c4f5d8e4:"4195",f785807e:"4703","51d9a241":"4726",c86645fa:"5004",ade026cb:"5010","0a4907a8":"5601","73e5671f":"6037","32dd35a8":"6083","801805ba":"6180","0cc5abd3":"6343",ad3aa0ad:"6465","8e5f7389":"6821",c94f0ced:"6869",cf33e89c:"6920",a8db68b9:"7113","393be207":"7414","1a4e3797":"7920",f3944fe7:"8278","46fa2c5a":"8393",db5f8e9a:"8836","844887c0":"8951",a16941e9:"9002","6a2350dd":"9243","94ffd1a7":"9401","1be78505":"9514","0e384e19":"9671","4ba7e5a3":"9735","07bbbd97":"9933"}[e]||e,o.p+o.u(e)},(()=>{var e={1303:0,532:0};o.f.j=(a,t)=>{var r=o.o(e,a)?e[a]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((t,f)=>r=e[a]=[t,f]));t.push(r[2]=f);var c=o.p+o.u(a),d=new Error;o.l(c,(t=>{if(o.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var f=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+a+" failed.\n("+f+": "+c+")",d.name="ChunkLoadError",d.type=f,d.request=c,r[1](d)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,t)=>{var r,f,c=t[0],d=t[1],b=t[2],n=0;if(c.some((a=>0!==e[a]))){for(r in d)o.o(d,r)&&(o.m[r]=d[r]);if(b)var i=b(o)}for(a&&a(t);n<c.length;n++)f=c[n],o.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return o.O(i)},t=self.webpackChunkopbnb_docs=self.webpackChunkopbnb_docs||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();