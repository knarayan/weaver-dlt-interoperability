(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{127:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=d(n),p=r,b=h["".concat(o,".").concat(p)]||h[p]||u[p]||a;return n?i.a.createElement(b,s(s({ref:t},c),{},{components:n})):i.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(7),a=(n(0),n(127)),o={slug:"emergence-enterprise-interoperability",title:"Emergence of Enterprise DLT Interoperability",author:"Venkatraman Ramakrishna",author_title:"Maintainer of Weaver",author_url:"https://github.com/VRamakrishna",author_image_url:"https://avatars2.githubusercontent.com/u/14888211?s=400&v=4",tags:["enterprise","interoperability"]},s={permalink:"/weaver-dlt-interoperability/blog/emergence-enterprise-interoperability",source:"@site/blog/2021-01-21-emergence-enterprise-interoperability.md",description:"It is instructive to know the course taken by blockchain technology and its applications over the past few years, as this will allow us to understand where we are, where are headed, and thereby motivate the necessity of interoperability.",date:"2021-01-21T00:00:00.000Z",tags:[{label:"enterprise",permalink:"/weaver-dlt-interoperability/blog/tags/enterprise"},{label:"interoperability",permalink:"/weaver-dlt-interoperability/blog/tags/interoperability"}],title:"Emergence of Enterprise DLT Interoperability",readingTime:4.775,truncated:!1,nextItem:{title:"Enabling Cross-Chain Asset Exchange On Permissioned Blockchains",permalink:"/weaver-dlt-interoperability/blog/cross-chain-asset"}},l=[{value:"The Grand Vision",id:"the-grand-vision",children:[]},{value:"Evolution of Private Networks",id:"evolution-of-private-networks",children:[]},{value:"Diverse Platforms",id:"diverse-platforms",children:[]},{value:"Blockchain Landscape",id:"blockchain-landscape",children:[]},{value:"Challenges",id:"challenges",children:[]}],c={toc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"It is instructive to know the course taken by blockchain technology and its applications over the past few years, as this will allow us to understand where we are, where are headed, and thereby motivate the necessity of interoperability."),Object(a.b)("h2",{id:"the-grand-vision"},"The Grand Vision"),Object(a.b)("p",null,"The original vision of blockchain technology called for a global decentralized network of peers and clients that could conduct transactions at scale without requiring intermediation by trusted third parties. The Bitcoin network was the first example of this, and it was purposely left open for anyone to join precisely because its initiators hoped for a single global network somewhat akin to the internet."),Object(a.b)("p",null,"But the limitations of Bitcoin as a transaction processing system soon became apparent, and the Ethereum network emerged to fill this gap, retaining the openness and scalability of Bitcoin while supporting arbitrary smart contracts over a shared ledger. But Ethereum too was not destined to be the single canonical global blockchain network that everyone would use."),Object(a.b)("p",null,"Sub-groups within the Bitcoin and Ethereum communities dissented from the rest, thereby creating ",Object(a.b)("em",{parentName:"p"},"forks"),", or separate networks with separate chains of blocks. Others found limitations in the usability of the existing networks or their consensus mechanisms (Proof of Work) and decided to build their own networks to which like-minded people could subscribe and in which they could conduct their transactions."),Object(a.b)("p",null,"Therefore, the original Bitcoin (or even Ethereum) vision of a single global network was not to be, and networks with different clientele and different consensus protocols proliferated."),Object(a.b)("p",null,"And then came private (or permissioned) networks......"),Object(a.b)("h2",{id:"evolution-of-private-networks"},"Evolution of Private Networks"),Object(a.b)("p",null,"Sometime in the first half of the previous decade, it was recognized that networks like Bitcoin and Ethereum were not suitable for much of the business that involves private enterprises, governmental institutions, and ordinary clients. Private networks then emerged as a means to retain the trustworthiness and consensus-based decision-making properties of blockchains (and distributed ledgers in general) while ensuring that:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Transactions and ledger state are privy only to a selected set of entities,"),Object(a.b)("li",{parentName:"ul"},"Transactions can be audited by trusted authorities when required for dispute resolutions, and"),Object(a.b)("li",{parentName:"ul"},"Higher performance and assurance can be gained using consensus protocols other than ",Object(a.b)("em",{parentName:"li"},"proof-of-work"),".")),Object(a.b)("p",null,"Since companies and consortia were wary of this new and unproven technology, the trend in industry these past few years has been to build ",Object(a.b)("em",{parentName:"p"},"minimum viable ecosystems"),", i.e., networks of limited operational scope and participation. The goal being to evaluate the potential of blockchain, these networks were created to manage selected few assets and records. Needless to say, interoperation with other networks was not high on the priority list when such networks were designed and launched."),Object(a.b)("p",null,"Many of these networks have been successfully validated and put into production. But a consequence of the decision to build limited-scope networks is that the processes they run (through smart contracts) and the assets and records they maintain on their ledgers are stuck in siloes, inaccessible to external entitites and networks. Yet, as we are discovering, processes and assets in such networks are inextricably linked in the real enterprise world. With all of the investment (in time and money) made in existing networks, reeingeneering or merging them will generally be hardsells. Also, some networks may wish to restrict operational control and ledger visibility to its current set of administrators and clientele. The only viable solution is to allow networks to interoperate, thereby breaking up the siloes, while retaining operational control."),Object(a.b)("h2",{id:"diverse-platforms"},"Diverse Platforms"),Object(a.b)("p",null,"Our present blockchain landscape (or ecosystem) is characterized not just by a plethora of networks, a mix of open and private, but also by the existence of several distinct blockchain technologies, each with a different storage technology, a different model for contracts and client applications, a different consensus protocol, and a different way of managing identity. Examples include Fabric, Iroha, Sawtooth, and Besu, all in the Hyperledger family, and Ethereum, Multichain, Cardano, and Komodo, outside it. There are also smart contract distributed ledger platforms that serve a similar set of business applications that are not blockchains at all, like R3's Corda."),Object(a.b)("p",null,"Since there is no single blockchain, or distributed ledger, technology, the world agrees on, and because each offers a different set of advantages and disadvantages, the networks that exist today are built on a diverse set of such platforms."),Object(a.b)("h2",{id:"blockchain-landscape"},"Blockchain Landscape"),Object(a.b)("p",null,"Our present is, and our near future will be, characterized by the existence of independent networks, some of which offer open membership whereas others are restricted, built on diverse platforms that are mutually incompatible. Asking everyone to converge to a single global network running on a single canonical platform is almost impossible. So unless we wish entities and assets to remain trapped within siloes, it should be evident that interoperability amoong different networks and platforms is crucial to the success of blockchain."),Object(a.b)("h2",{id:"challenges"},"Challenges"),Object(a.b)("p",null,"Interlinking processes distributed across different networks or transferring or sharing assets and data may sound like a straightforward task, but the traditional method of service and API integration will not work in scenarios that involve permissioned networks."),Object(a.b)("p",null,"This is because, as you will see in the ",Object(a.b)("a",{parentName:"p",href:"/docs/external/user-stories/overview"},"user stories"),", entities that are interested in the asset or data record being shared may not be members of both networks. And even if a particular entity happens to be a member of both networks, it may be in its interest to present a false view of one network's ledger state to another."),Object(a.b)("p",null,"Therefore, interoperation cannot be allowed to hinge on the trustworthiness of a particular network member, or by extension, a third party. In the stories we will encounter, it will be apparent how such situations may occur. This will make the unreliability of API integration across private networks clear and also motivate the need for consensus-based interoperation protocols."))}d.isMDXComponent=!0}}]);