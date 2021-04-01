(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{105:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(127)),i={id:"overview",title:"Overview"},c={unversionedId:"external/architecture-and-design/overview",id:"external/architecture-and-design/overview",isDocsHomePage:!1,title:"Overview",description:"The below diagram shows a high level architecture diagram of the Weaver framework.",source:"@site/docs/external/architecture-and-design/overview.md",slug:"/external/architecture-and-design/overview",permalink:"/weaver-dlt-interoperability/docs/external/architecture-and-design/overview",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/external/architecture-and-design/overview.md",version:"current",sidebar:"Documentation",previous:{title:"Legacy Integration",permalink:"/weaver-dlt-interoperability/docs/external/user-stories/legacy-integration"},next:{title:"Relay",permalink:"/weaver-dlt-interoperability/docs/external/architecture-and-design/relay"}},s=[{value:"Network",id:"network",children:[]},{value:"Relay",id:"relay",children:[]},{value:"Synchronous vs Asynchronous message communication",id:"synchronous-vs-asynchronous-message-communication",children:[]},{value:"Message vs connection oriented communication",id:"message-vs-connection-oriented-communication",children:[]}],l={toc:s};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The below diagram shows a high level architecture diagram of the Weaver framework."),Object(o.b)("p",null,Object(o.b)("img",{src:r(207).default})),Object(o.b)("h2",{id:"network"},"Network"),Object(o.b)("p",null,"The networks in the system can be made up of various heterogenious technologies, including Hyperledger Fabric and Corda. Each network in the system needs to contain an interoperability (IOP) module that enables them to communicate with the relays."),Object(o.b)("h2",{id:"relay"},"Relay"),Object(o.b)("p",null,"The relays act as a conduit to facilitate communication of protocols between networks (e.g. data transfer, asset exchange etc). The roles of the relays are described in more detail in ",Object(o.b)("a",{parentName:"p",href:"/weaver-dlt-interoperability/docs/external/architecture-and-design/relay"},"relay"),"."),Object(o.b)("h1",{id:"design-decisions"},"Design Decisions"),Object(o.b)("p",null,"The high level design decisions that were made for the system are outlined here."),Object(o.b)("h2",{id:"synchronous-vs-asynchronous-message-communication"},"Synchronous vs Asynchronous message communication"),Object(o.b)("p",null,"We decided to go with an asynchronous message architecture. The primary reason for this is because requests can take an arbitary amount of time to respond, it is not practical for a synchronous message to wait that long for a reply. For example, obtaining a 12 block confirmation on the Bitcoin network can take about 2 hours."),Object(o.b)("h2",{id:"message-vs-connection-oriented-communication"},"Message vs connection oriented communication"),Object(o.b)("p",null,"We decided to go with a message oriented architecture. The primary reason for this is because it makes the system more fault tolerant. With a message oriented architecture the requester and responder don't need to be alive at the same time. For example, if the requestor crashes while the responder is processing the request, the communication is not interrupted since the responder will just send a message when it has finished processing the request. The design choice also enables the systen to be made more fault tolerant in the future by implementing message queues between components in the system."))}u.isMDXComponent=!0},127:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return p}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,p=d["".concat(i,".").concat(h)]||d[h]||m[h]||o;return r?a.a.createElement(p,c(c({ref:t},l),{},{components:r})):a.a.createElement(p,c({ref:t},l))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},207:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/architecture_overview-7b33025d4ef4bce5161426ac77ec512a.png"}}]);