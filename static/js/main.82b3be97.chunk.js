(this.webpackJsonpdickpunks=this.webpackJsonpdickpunks||[]).push([[0],{243:function(n,t,e){},259:function(n,t){},282:function(n,t){},284:function(n,t){},361:function(n,t){},363:function(n,t){},396:function(n,t){},401:function(n,t){},403:function(n,t){},410:function(n,t){},423:function(n,t){},446:function(n,t){},455:function(n,t){},457:function(n,t){},536:function(n,t,e){},538:function(n,t,e){"use strict";e.r(t);var c,a,r,o,i,s,l,u,d,p,x,j,b,f,h,O,g=e(0),m=e(30),y=e.n(m),C=(e(242),e(243),e(545)),v=e(546),w=e(547),N=e(19),S=e.n(N),E=e(50),A=e(34),_=e(33),T=e(75),k=e(223),M=e(5),D={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},I=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(M.a)(Object(M.a)({},D),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(M.a)(Object(M.a)({},n),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(M.a)(Object(M.a)({},D),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(M.a)(Object(M.a)({},n),{},{account:t.payload.account});default:return n}},R={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},L=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(M.a)(Object(M.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(M.a)(Object(M.a)({},n),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(M.a)(Object(M.a)({},R),{},{loading:!1,error:!0,errorMsg:t.payload});default:return n}},K=Object(T.b)({blockchain:I,data:L}),U=[k.a],P=Object(T.c)(T.a.apply(void 0,U)),F=Object(T.d)(K,P),W=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},Y=function(){return function(){var n=Object(E.a)(S.a.mark((function n(t){var e;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,F.getState().blockchain.smartContract.methods.totalSupply().call();case 4:e=n.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),t(W("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()},z=e(17),B=e(18),H=(B.a.div(c||(c=Object(z.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),B.a.div(a||(a=Object(z.a)(["\n  height: 8px;\n  width: 8px;\n"]))),B.a.div(r||(r=Object(z.a)(["\n  height: 16px;\n  width: 16px;\n"])))),G=B.a.div(o||(o=Object(z.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Q=(B.a.div(i||(i=Object(z.a)(["\n  height: 32px;\n  width: 32px;\n"]))),B.a.div(s||(s=Object(z.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var t=n.flex;return t||0}),(function(n){var t=n.fd;return t||"column"}),(function(n){var t=n.jc;return t||"flex-start"}),(function(n){var t=n.ai;return t||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"}))),q=B.a.p(l||(l=Object(z.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),X=(B.a.p(u||(u=Object(z.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),B.a.p(d||(d=Object(z.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),J=(B.a.div(p||(p=Object(z.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),e(74)),V=e.n(J),Z=e(228),$=e.n(Z),nn=function(n){return{type:"CONNECTION_FAILED",payload:n}},tn=function(n){return function(){var t=Object(E.a)(S.a.mark((function t(e){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:n}}),e(Y());case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},en=B.a.button(x||(x=Object(z.a)(["\n  outline: none;\n  border: none;\n  background: rgb(251, 175, 59);\n  background: linear-gradient(90deg, rgba(251, 175, 59, 1) 27%, rgba(252, 238, 22, 1) 64%);\n  border-radius: 50px;\n  padding: 10px;\n  font-weight: bold;\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),cn=B.a.button(j||(j=Object(z.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),an=B.a.div(b||(b=Object(z.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),rn=(B.a.img(f||(f=Object(z.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),B.a.img(h||(h=Object(z.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),B.a.a(O||(O=Object(z.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])))),on=e(2),sn=function(){var n,t,e=Object(_.b)(),c=Object(_.c)((function(n){return n.blockchain})),a=Object(_.c)((function(n){return n.data})),r=Object(g.useState)(!1),o=Object(A.a)(r,2),i=o[0],s=o[1],l=Object(g.useState)("Click buy to mint your NFT."),u=Object(A.a)(l,2),d=u[0],p=u[1],x=Object(g.useState)(1),j=Object(A.a)(x,2),b=j[0],f=j[1],h=Object(g.useState)({CONTRACT_ADDRESS:"",OWNER_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),O=Object(A.a)(h,2),m=O[0],y=O[1],C=function(){""!==c.account&&null!==c.smartContract&&e(Y(c.account))},v=function(){var n=Object(E.a)(S.a.mark((function n(){var t,e;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=n.sent,n.next=5,t.json();case 5:e=n.sent,y(e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(g.useEffect)((function(){v()}),[]),Object(g.useEffect)((function(){C()}),[c.account]),Object(on.jsx)(an,{flex:1,style:{padding:24},test:!0,children:Object(on.jsxs)(Q,{flex:2,jc:"center",ai:"center",children:[Object(on.jsxs)(q,{style:{fontFamily:"cyperpunk, sans-serif",textAlign:"center",fontSize:"clamp(40px, 3vw, 50px)",fontWeight:"bold",color:"var(--accent-text)"},children:[a.totalSupply," / ",m.MAX_SUPPLY]}),Object(on.jsx)(X,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(on.jsx)(rn,{target:"_blank",href:m.SCAN_LINK,children:(n=m.CONTRACT_ADDRESS,t=15,n.length>t?"".concat(n.substring(0,t),"..."):n)})}),Number(a.totalSupply)>=m.MAX_SUPPLY?Object(on.jsxs)(on.Fragment,{children:[Object(on.jsx)(q,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(on.jsxs)(X,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",m.NFT_NAME," on"]}),Object(on.jsx)(rn,{target:"_blank",href:m.MARKETPLACE_LINK,children:m.MARKETPLACE})]}):Object(on.jsxs)(on.Fragment,{children:[Object(on.jsxs)(q,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",m.SYMBOL," costs ",m.DISPLAY_COST," ",m.NETWORK.SYMBOL,"."]}),Object(on.jsx)(X,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),""===c.account||null===c.smartContract?Object(on.jsxs)(Q,{ai:"center",jc:"center",children:[Object(on.jsxs)(X,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",m.NETWORK.NAME," network"]}),""!==c.errorMsg?Object(on.jsx)(on.Fragment,{children:Object(on.jsx)(X,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})}):null]}):Object(on.jsxs)(on.Fragment,{children:[Object(on.jsx)(X,{style:{textAlign:"center",color:"var(--accent-text)"},children:d}),Object(on.jsx)(G,{}),Object(on.jsxs)(Q,{ai:"center",jc:"center",fd:"row",children:[Object(on.jsx)(cn,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=b-1;n<1&&(n=1),f(n)}()},children:"-"}),Object(on.jsx)(G,{}),Object(on.jsx)(X,{style:{textAlign:"center",color:"var(--accent-text)"},children:b}),Object(on.jsx)(G,{}),Object(on.jsx)(cn,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=b+1;n>10&&(n=10),f(n)}()},children:"+"})]}),Object(on.jsx)(H,{}),Object(on.jsx)(Q,{ai:"center",jc:"center",fd:"row",children:Object(on.jsx)(en,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=c.account;n=n.toUpperCase();var t=m.OWNER_ADDRESS;n==(t=t.toUpperCase())?m.WEI_COST=0:a.totalSupply>1&&a.totalSupply<9e3&&(m.WEI_COST=m.WEI_COST);var r=m.WEI_COST,o=m.GAS_LIMIT,i=String(r*b),l=String(o*b);console.log("Cost: ",i),console.log("Gas limit: ",l),p("Minting your ".concat(m.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(b).send({gasLimit:String(l),to:m.CONTRACT_ADDRESS,from:c.account,value:i}).once("error",(function(n){console.log(n),p("Sorry, Try  to mint again Something is wrong."),s(!1)})).then((function(n){console.log(n),p("Your a Proud Owner Of ".concat(m.NFT_NAME,"  go Check it On Opensea.io .")),s(!1),e(Y(c.account))}))}(),C()},children:i?"BUSY":"BUY"})}),Object(on.jsx)(H,{})]})]})]})})},ln=(e.p,e(544)),un=e(548),dn=function(n){var t=n.errorMsg,e=n.position,c=n.titleNoti,a=Object(g.useState)(!1),r=Object(A.a)(a,2),o=r[0],i=r[1];return Object(g.useEffect)((function(){t&&(i(!0),setTimeout((function(){i(!1)}),2e3))}),[t]),Object(on.jsx)(ln.a,{className:"p-3 toast-container",position:e||"bottom-end",children:Object(on.jsxs)(un.a,{show:o,children:[Object(on.jsx)(un.a.Header,{closeButton:!1,children:Object(on.jsx)("strong",{className:"me-auto",children:c||"Error"})}),Object(on.jsx)(un.a.Body,{children:t})]})})},pn=e.p+"static/media/img2.6bcfb9df.png";var xn=function(){var n=Object(_.b)(),t=Object(_.c)((function(n){return n.blockchain})),e=function(){""!==t.account&&null!==t.smartContract&&n(Y(t.account))};return Object(g.useEffect)((function(){e()}),[t.account]),Object(on.jsx)(C.a,{fluid:!0,className:"main d-flex flex-column justify-content-center align-items-center",children:Object(on.jsxs)(C.a,{className:"d-flex flex-column justify-content-center align-items-center",style:{paddingLeft:0,paddingRight:0},children:[Object(on.jsx)(v.a,{className:"main-logo d-flex flex-column justify-content-center align-items-center",children:Object(on.jsx)("div",{className:"main-logo__container d-flex justify-content-center align-items-center",children:Object(on.jsx)("h1",{className:"logo-content",children:"dickpunks"})})}),Object(on.jsxs)(v.a,{className:"main-container justify-content-center align-items-lg-center",children:[Object(on.jsx)(w.a,{lg:7,md:12,sm:12,className:"main-left__side",children:Object(on.jsx)("div",{className:"left-side__container d-flex justify-content-center align-items-center",children:t.account?Object(on.jsx)(sn,{}):Object(on.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",children:[Object(on.jsx)("h1",{className:"left-side__title",children:"MINT YOUR DICKPUNKS"}),Object(on.jsx)("button",{className:"primary-btn",onClick:function(t){t.preventDefault(),n(function(){var n=Object(E.a)(S.a.mark((function n(t){var e,c,a,r,o,i,s,l,u;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=n.sent,n.next=6,e.json();case 6:return c=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return a=n.sent,n.next=12,a.json();case 12:if(r=n.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){n.next=33;break}return V.a.setProvider(i),s=new $.a(i),n.prev=18,n.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=n.sent,n.next=24,i.request({method:"net_version"});case 24:n.sent==r.NETWORK.ID?(u=new V.a(c,r.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:u,web3:s}}),i.on("accountsChanged",(function(n){t(tn(n[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):t(nn("Change network to ".concat(r.NETWORK.NAME,"."))),n.next=31;break;case 28:n.prev=28,n.t0=n.catch(18),t(nn("Something went wrong."));case 31:n.next=34;break;case 33:t(nn("Install Metamask."));case 34:case"end":return n.stop()}}),n,null,[[18,28]])})));return function(t){return n.apply(this,arguments)}}()),e()},children:"CONNECT"})]})})}),Object(on.jsx)(w.a,{lg:5,md:12,sm:12,className:"main-right__side d-flex justify-content-center align-items-center",children:Object(on.jsx)("div",{className:"right-side__container d-flex justify-content-center align-items-center",children:Object(on.jsx)("img",{src:pn,alt:""})})})]}),Object(on.jsxs)(v.a,{className:"main-footer d-flex justify-content-center align-items-center",children:[Object(on.jsx)("a",{href:"https://opensea.com/dickpunks",className:"primary-btn",children:"open sea"}),Object(on.jsx)("a",{href:"https://twitter.com/cryptodickpunk",className:"primary-btn",children:"twitter"})]}),Object(on.jsx)(dn,{errorMsg:t.errorMsg,titleNoti:"Error",position:"top-end"})]})})},jn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,549)).then((function(t){var e=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;e(n),c(n),a(n),r(n),o(n)}))},bn=(e(536),e(234)),fn=e.n(bn);e(537);fn.a.init(),y.a.render(Object(on.jsx)(_.a,{store:F,children:Object(on.jsx)(xn,{})}),document.getElementById("root")),jn()}},[[538,1,2]]]);
//# sourceMappingURL=main.82b3be97.chunk.js.map