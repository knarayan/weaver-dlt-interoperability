(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{127:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return r?o.a.createElement(m,i(i({ref:t},l),{},{components:r})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},73:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(127)),s={id:"cordapp-interop-rest-api",title:"REST API"},i={unversionedId:"internal/development/cordapp-interop/cordapp-interop-rest-api",id:"internal/development/cordapp-interop/cordapp-interop-rest-api",isDocsHomePage:!1,title:"REST API",description:"Documentation of the REST API that is intended to be called from the MarcoPolo CordApp with the underlying",source:"@site/docs/internal/development/cordapp-interop/cordapp-interop-rest-api.md",slug:"/internal/development/cordapp-interop/cordapp-interop-rest-api",permalink:"/weaver-dlt-interoperability/docs/internal/development/cordapp-interop/cordapp-interop-rest-api",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/internal/development/cordapp-interop/cordapp-interop-rest-api.md",version:"current"},c=[],l={toc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Documentation of the REST API that is intended to be called from the MarcoPolo CordApp with the underlying\nflows noted."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"GET networkMapSnapshot\nreq: {}\nres: List<NodeInfo>, or failure\ncalls: proxy.networkMapSnapshot\n\nGET registeredFlows\nreq: {}\nres: List<String>, or failure\ncalls: proxy.registeredFlows\n\nGET foreignNetworkInfos\nreq: {}\nres: List<ForeignNetworkInformationManagementState>, or failure\ncalls: QueryForeignNetworkInformationManagementStates\n\nGET foreignNetworkInfos/{id}\nreq: {}\nres: ForeignNetworkInformationManagementState, or failure\ncalls: QueryForeignNetworkInformationManagementStatesById\n\nPOST foreignNetworkInfos\nreq: FNIMStateRequest\nres: FNIMStateResponse, or failure\ncalls: FNIMInitiator\n\nDELETE foreignNetworkInfos/{id}\nreq: {}\nres: id, or failure\ncalls: FNIMExitInitiator\n\nGET accessControlRequests\nreq: {}\nres: AccessControlIssueRequestStateResponse, or failure\ncalls: QueryAccessControlIssueRequestStateByLinearId\n\nPOST accessControlRequests/new\nreq: AccessControlIssueRequestStateRequest\nres: AccessControlIssueRequestStateResponse, or failure\ncalls: AccessControlIssueRequestInitiator\n\nPOST /accessControlRequests/approve/{id}\nreq: id\nres: AccessControlIssueRequestStateResponse, or failure\ncalls: AccessControlIssueRequestApprover\n\nGET accessControlStates\nreq: {}\nres: List<AccessControlState>, or failure\ncalls: QueryAccessControlStates\n\nGET accessControlStates/{id}\nreq: {}\nres: AccessControlStateResponse, or failure\ncalls: QueryAccessControlIssueRequestStateByLinearId\n\nPOST externalNetworkRequest\nreq: ExternalNetworkRequest\nres: LinearIdResponseObject, or failure\ncalls: StateQueryInitiator\n\nPOST externalNetworkRequestByTxId\nreq: ExternalNetworkRequestWithTxId\nres: TxIdResponseObject, or failure\ncalls: GetLinearIdsFromTxId\n\nGET getNetworkMap/{id}\nreq: {}\nres: NetworkMapObject, or failure\ncalls: proxy.networkMapSnapshot\n\nPOST requestExternalState\nreq: ExternalStateRequest\nres: UniqueIdentifier, or failure\ncalls: WriteExternalStateInitiator\n\nGET storeFNIM\nreq: {}\nres: ForeignNetworkMapInformationIntermediateResponse, or failure\ncalls: QueryForeignNetworkInformationManagementStateByNetworkId\n")))}p.isMDXComponent=!0}}]);