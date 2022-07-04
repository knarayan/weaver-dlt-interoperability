"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[1323],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=i,h=u["".concat(c,".").concat(f)]||u[f]||p[f]||a;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5123:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={id:"drivers",title:"Drivers"},o=void 0,s={unversionedId:"external/architecture-and-design/drivers",id:"external/architecture-and-design/drivers",isDocsHomePage:!1,title:"Drivers",description:"\x3c!--",source:"@site/docs/external/architecture-and-design/drivers.md",sourceDirName:"external/architecture-and-design",slug:"/external/architecture-and-design/drivers",permalink:"/weaver-dlt-interoperability/docs/external/architecture-and-design/drivers",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/external/architecture-and-design/drivers.md",tags:[],version:"current",frontMatter:{id:"drivers",title:"Drivers"},sidebar:"Documentation",previous:{title:"Relay",permalink:"/weaver-dlt-interoperability/docs/external/architecture-and-design/relay"},next:{title:"Weaver Dapps",permalink:"/weaver-dlt-interoperability/docs/external/architecture-and-design/weaver-dapps"}},c=[],l={toc:c};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The driver is responsible for all communication between the relay and its network. In the previous sections we have thought about the driver as a component of the relay. We have done this because conceptually it makes sense to think about it like that. However, in our reference implementation we have made it a seperate process which communicates with the relay via gRPC, as shown below. There are two main reasons for this:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'There must exist a different driver for each network type (e.g. Fabric, Corda etc.) and therefore having the driver as a seperate process makes it easy to "plug" different drivers into the relay.'),(0,i.kt)("li",{parentName:"ol"},"A possible use case of the relay is that a single relay instance may have multiple drivers (e.g. if multiple entities in the network want to run their own driver). In this case, this plugin style approach of drivers makes it possible to do without having to modify code for each configuration.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(630).Z})))}d.isMDXComponent=!0},630:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/driver_architecture-0d494884ad83fb801a8c71ddf7d2e509.png"}}]);