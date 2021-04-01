(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{116:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(127)),o={id:"relay",title:"Relay"},c={unversionedId:"external/architecture-and-design/relay",id:"external/architecture-and-design/relay",isDocsHomePage:!1,title:"Relay",description:"As mentioned in the overview, relays facilitate communication of protocols between networks. To do this, they are composed of three main pieces:",source:"@site/docs/external/architecture-and-design/relay.md",slug:"/external/architecture-and-design/relay",permalink:"/weaver-dlt-interoperability/docs/external/architecture-and-design/relay",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/external/architecture-and-design/relay.md",version:"current",sidebar:"Documentation",previous:{title:"Overview",permalink:"/weaver-dlt-interoperability/docs/external/architecture-and-design/overview"},next:{title:"Drivers",permalink:"/weaver-dlt-interoperability/docs/external/architecture-and-design/drivers"}},l=[],s={toc:l};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{src:r(208).default})),Object(i.b)("p",null,"As mentioned in the overview, relays facilitate communication of protocols between networks. To do this, they are composed of three main pieces:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Relay service")," - A gRPC server that listens for and handles incoming requests from other relays. For example, a remote network requesting state."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"App service")," - A gRPC server that listens for and handles requests from applications that are requesting an asset from a remote network."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Driver")," - The driver is responsible for all communication between the relay and its network. The driver is described in more detail in ",Object(i.b)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/architecture-and-design/drivers"},"drivers"),".")),Object(i.b)("p",null,"The diagram below shows an example communication between two networks, A and B, where network A is requesting state from network B."),Object(i.b)("p",null,Object(i.b)("img",{src:r(209).default})),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"An application sends a request to their networks relay over gRPC"),Object(i.b)("li",{parentName:"ol"},"The local relay inspects the query within the request and uses the relevant information to forward the request to the correct remote relay"),Object(i.b)("li",{parentName:"ol"},"The remote relay's driver interprets the query and invokes the smart contract for the query"),Object(i.b)("li",{parentName:"ol"},"Once network B has returned a response to its relay, the relay forwards the response back to relay A"),Object(i.b)("li",{parentName:"ol"},"The application gets the response from the relay, this can either be via a push or pull mechanism"),Object(i.b)("li",{parentName:"ol"},"The application invokes a domain specific smart contract to process the response from network B")))}p.isMDXComponent=!0},127:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},208:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/relay_architecture-26238a46409ead54fb26da49e2df22c7.png"},209:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/relay_flow-a6320d0cf553ee5b95a94cab63f44883.png"}}]);