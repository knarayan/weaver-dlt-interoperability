(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(127)),s={id:"cordapp-interop-flows",title:"Flows"},i={unversionedId:"internal/development/cordapp-interop/cordapp-interop-flows",id:"internal/development/cordapp-interop/cordapp-interop-flows",isDocsHomePage:!1,title:"Flows",description:"AccessControlFlows",source:"@site/docs/internal/development/cordapp-interop/cordapp-interop-flows.md",slug:"/internal/development/cordapp-interop/cordapp-interop-flows",permalink:"/weaver-dlt-interoperability/docs/internal/development/cordapp-interop/cordapp-interop-flows",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/internal/development/cordapp-interop/cordapp-interop-flows.md",version:"current"},c=[{value:"AccessControlFlows",id:"accesscontrolflows",children:[]},{value:"AccessControlQueryFlows",id:"accesscontrolqueryflows",children:[]},{value:"FNIMFlows",id:"fnimflows",children:[]},{value:"FNIMQueryFlows",id:"fnimqueryflows",children:[]},{value:"HandleRequestsFromForeignNetworkFlows",id:"handlerequestsfromforeignnetworkflows",children:[]},{value:"WriteStateFromExternalNetworkFlows",id:"writestatefromexternalnetworkflows",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"accesscontrolflows"},"AccessControlFlows"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"class AccessControlIssueRequestInitiator(\n        externalNetworkCertificates: List<String>,\n        externalNetworkId: String,\n        stateLinearId: UniqueIdentifier,\n        participants: List<Party> {\n    // creates an access control state on the ledger for a particular document\n}\n\nclass AccessControlIssueRequestApprover(\n    id: UniqueIdentifier){\n    // allows for a party to approve an access control issuance request\n}\n")),Object(a.b)("h3",{id:"accesscontrolqueryflows"},"AccessControlQueryFlows"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"class QueryAccessControlIssueRequestStates() List<AccessControlIssueRequestState> {\n    // returns access control requests\n}\n\nclass QueryAccessControlIssueRequestStateByLinearId(linearId: UniqueIdentifier) AccessControlIssueRequestState {\n    // returns access control request by Id\n}\n\nclass QueryAccessControlStates() List<AccessControlState> {\n    // returns list of access control states\n}\n\nclass QueryAccessControlStateByLinearId(linearId: UniqueIdentifier) AccessControlState {\n    // returns access control state by Id\n}\n")),Object(a.b)("h3",{id:"fnimflows"},"FNIMFlows"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"class FNIMInitiator(\n    networkId: String,\n    topology: List<FNNode>,\n    participants: List<Party>) {\n    // creates FNIM record for an external network\n}\n\nclass FNIMExitInitiator(\n    id: String ) {\n    // marks FNIM state as consumed\n}\n")),Object(a.b)("h3",{id:"fnimqueryflows"},"FNIMQueryFlows"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"class QueryForeignNetworkInformationManagementStates : List<ForeignNetworkInformationManagementState> {\n    // returns list of FNIM states\n}\n\nclass QueryForeignNetworkInformationManagementStatesById(\n    linearId: UniqueIdentifier) ForeignNetworkInformationManagementState {\n    // returns FNIM state\n}\n\nclass QueryForeignNetworkInformationManagementStateByNetworkId(\n    networkId: String) ForeignNetworkInformationManagementState {\n    // returns FNIM state for specified network\n}\n")),Object(a.b)("h3",{id:"handlerequestsfromforeignnetworkflows"},"HandleRequestsFromForeignNetworkFlows"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"class StateQueryInitiator(\n    externalNetworkId: String,\n    organizationName: String,\n    stateLinearId: UniqueIdentifier,\n    requesterCertString: String,\n    requesterSignature: String,\n    txId: String?\n) List<StateQueryResponse> {\n    // returns requested state\n}\n\nclass GetLinearIdsFromTxId(\n    txId: String\n) List<UniqueIdentifier> {\n    // returns list ids for states that match the query criterion\n}\n")),Object(a.b)("h3",{id:"writestatefromexternalnetworkflows"},"WriteStateFromExternalNetworkFlows"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"class CreateExternalRequestStateObject(\n        request: ExternalStateRequest\n) RelayRequestObject {\n    // returns request object to query relay about a foreign network state\n}\n\nclass WriteExternalStateInitiator(\n    nodeResponses: List<NodeResponse>,\n    externalNetworkId: String,\n    participants: List<Party>\n) UniqueIdentifier {\n    // writes external state to ledger and returns unique identifier to be used to query from MarcoPolo\n}\n")))}u.isMDXComponent=!0},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return w}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,w=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(w,i(i({ref:t},l),{},{components:n})):o.a.createElement(w,i({ref:t},l))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);