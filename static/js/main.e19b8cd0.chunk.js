(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{55:function(e,t,n){},57:function(e,t,n){},76:function(e,t){},91:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),c=n(28),s=n.n(c),i=(n(55),n(35)),o=n(2),u=n.n(o),l=n(14),d=n(17),b=(n.p,n.p,n(26)),p=(n(57),n(3)),m=n(5),f=n(12),h=n(45),x=n.n(h),j={bsc:{rpcUrl:["https://bsc-dataseed1.defibit.io/","wss://bsc-ws-node.nariox.org:443"],eth:"BNB",ethAddress:"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",usdAddress:"0xe9e7cea3dedca5984780bafc599bd69add087d56",usd:"BUSD",scan:"https://www.bscscan.com"},heco:{rpcUrl:["https://http-mainnet-node.huobichain.com"],eth:"HT",ethAddress:"0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f",usd:"USDT",usdAddress:"0xa71edc38d189767582c38a3145b5873052c3e47a",scan:"https://www.hecoinfo.com"}},O={pancake:{net:j.bsc,name:"PancakeSniper",logo:"https://pancakeswap.finance/favicon.ico",factory:"0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",router:"0x10ED43C718714eb63d5aA57B78B54704E256024E"},mdex:{net:j.heco,logo:"https://cdn.jsdelivr.net/gh/mdexSwap/mdexSwap.github.io@2.0/favicon.png",name:"MdexSniper",factory:"0xb0b670fc1F7724119963018DB0BfA86aDb22d941",router:"0xED7d5F38C79115ca12fe6C0041abb22F0A06C300"}},v=["function symbol() external view returns (string memory)","function approve(address spender, uint256 amount) external returns (bool)","function balanceOf(address account) external returns (uint256)","function transfer(address recipient, uint256 amount) external returns (bool)"],g=function(){function e(){var t=this;Object(p.a)(this,e),this.gasLimit=1e6,this.tokenIn=this.WETH,this.tokenOut=null,this.minBnb=3,this.initialLiquidityDetected=!1,this.interrupt=!1,this.checkLiq=function(){var e=Object(l.a)(u.a.mark((function e(n,r,a){var c,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("check liq",t.WETH,r),e.next=3,t.factory.getPair(t.WETH,r);case 3:if(null===(c=e.sent)||void 0===c){e.next=12;break}if(!(c.toString().indexOf("0x0000000000000")>-1)){e.next=12;break}return e.next=8,t.factory.getPair(t.WUSD,r);case 8:if(null===(c=e.sent)||void 0===c){e.next=12;break}if(!(c.toString().indexOf("0x0000000000000")>-1)){e.next=12;break}return e.abrupt("return",!1);case 12:return e.next=14,t.erc.balanceOf(c);case 14:if(s=e.sent,!((i=f.a.utils.formatEther(s))>0)){e.next=21;break}return a("find Value BNB : ".concat(i)),e.abrupt("return",!0);case 21:return e.abrupt("return",!1);case 22:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),this.approve=function(){var e=Object(l.a)(u.a.mark((function e(n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new f.a.Contract(n,v,t.account)).connect(t.wallet),e.next=4,r.approve(t.routerAddress,f.a.constants.MaxUint256);case 4:if(!e.sent.hash){e.next=9;break}return e.abrupt("return",!0);case 9:return e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.start=function(){var e=Object(l.a)(u.a.mark((function e(n,r,a,c,s,i){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.initialLiquidityDetected=!1,t.failCount=0,window.isInterrupt=!1,i("\u5f00\u59cb\u76d1\u63a7\u6d41\u52a8\u6027...  ","green");case 4:if(t.initialLiquidityDetected){e.next=18;break}return e.next=7,t.checkLiq(a,n,i);case 7:if(!e.sent){e.next=14;break}return t.initialLiquidityDetected=!0,i(x.a.green("\u53d1\u73b0\u6d41\u52a8\u6027 \u5f00\u59cb\u8d2d\u4e70")),e.next=13,t.startToBuy(n,r,a,c,s,i);case 13:return e.abrupt("break",18);case 14:if(!0!==window.isInterrupt){e.next=16;break}return e.abrupt("break",18);case 16:e.next=4;break;case 18:t.factory.on("PairCreated",function(){var e=Object(l.a)(u.a.mark((function e(o,l,d){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o!=n&&l!=n||!0===window.isInterrupt){e.next=6;break}return i("** New Pair Detected **"),console.log(o,l,d),t.initialLiquidityDetected=!0,e.next=6,t.startToBuy(n,r,a,c,s,i);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}());case 19:case"end":return e.stop()}}),e)})));return function(t,n,r,a,c,s){return e.apply(this,arguments)}}(),this.checkBanlance=function(){var e=Object(l.a)(u.a.mark((function e(n){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new f.a.Contract(n,v,t.account)).connect(t.wallet),e.next=4,r.balanceOf(t.wallet.address);case 4:return a=e.sent,e.abrupt("return",f.a.utils.formatEther(a));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.checkPrice=function(){var e=Object(l.a)(u.a.mark((function e(n,r,a){var c,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.checkBanlance(t.tokenOut);case 2:c=e.sent,a("bnb \u4f59\u989d\uff1a"+c/1e18),s=f.a.utils.parseUnits("".concat(r),"ether");case 5:if(!0!==window.isInterrupt){e.next=14;break}return e.next=8,t.router.getAmountsIn(s,[t.tokenIn,n]);case 8:return i=e.sent,a("bnb:"+i[0]/1e18+" t:"+i[1]/1e18),e.next=12,w(1e3);case 12:e.next=5;break;case 14:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),this.startToBuy=function(){var e=Object(l.a)(u.a.mark((function e(n,r,a,c,s,i){var o,l,d,b,p,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==t.allreadyBuy){e.next=3;break}return console.log("not buy cause already buy"),e.abrupt("return",null);case 3:return o=f.a.utils.parseUnits("".concat(r),"ether"),e.next=6,t.router.getAmountsOut(o,[t.WETH,n]);case 6:return l=e.sent,d=t.wallet.address,b=l[1].sub(l[1].div("".concat(s))),i("<br/> Buying Token ...<br/>\n         tokenIn: ".concat(r.toString()," ").concat(t.WEth," (this.WETH) <br/>\n       "),"green"),i("<br/>Processing Transaction..... <br/>"+"amountIn: ".concat(r," <br/>")+"amountOutMin: ".concat(b," <br/>")+"tokenIn: ".concat(t.WETH," <br/>")+"tokenOut: ".concat(n," <br/>")+"data.recipient: ".concat(d," <br/>")+"value: ".concat(o/1e18," <br/>")+"gasPrice: ".concat(f.a.utils.parseUnits("".concat(c),"gwei")/1e8," <br/>"),"yellow"),e.prev=11,e.next=14,t.router.swapExactETHForTokens(b,[t.WETH,n],d,Date.now()+6e3,{gasLimit:t.gasLimit,gasPrice:f.a.utils.parseUnits("".concat(c),"gwei"),value:o});case 14:return p=e.sent,e.next=17,p.wait();case 17:m=e.sent,t.allreadyBuy=!0,i('\u606d\u559c\uff0c\u4e70\u5165\u6210\u529f\uff01 \u4ea4\u6613\u54c8\u5e0c: <a target="_blank" href="'.concat(t.dexConf.net.scan,"/tx/").concat(m.logs[1].transactionHash,'">')+"".concat(t.dexConf.net.scan,"/tx/").concat(m.logs[1].transactionHash,"</a>"),"green"),e.next=31;break;case 22:if(e.prev=22,e.t0=e.catch(11),console.log("e",e.t0,e.t0.code,e.t0.reason),i("\u4e70\u5165\u5931\u8d25\u4e86\uff0c \u539f\u56e0 "+e.t0.reason+","),!(t.failCount<3&&!0===window.isInterrupt)){e.next=31;break}return t.failCount+=1,i(" \u6b63\u5728\u91cd\u8bd5["+t.failCount+"]..."),e.next=31,t.startToBuy(n,r,a,c,s,i);case 31:case"end":return e.stop()}}),e,null,[[11,22]])})));return function(t,n,r,a,c,s){return e.apply(this,arguments)}}()}return Object(m.a)(e,[{key:"selectDex",value:function(e){}},{key:"init",value:function(e,t){this.dexConf=t,this.routerAddress=this.dexConf.router,this.WETH=t.net.ethAddress,this.WUSD=t.net.usdAddress;var n=-1!==t.net.rpcUrl[0].indexOf("wss://")?"WebSocketProvider":"JsonRpcProvider",r=null;try{r=new f.a.providers[n](t.net.rpcUrl[0])}catch(a){console.log("provider connect err",a),n=-1!==t.net.rpcUrl[1].indexOf("wss://")?"WebSocketProvider":"JsonRpcProvider",r=new f.a.providers[n](t.net.rpcUrl[1])}this.wallet=new f.a.Wallet(e),this.account=this.wallet.connect(r),this.factory=new f.a.Contract(this.dexConf.factory,["event PairCreated(address indexed token0, address indexed token1, address pair, uint)","function getPair(address tokenA, address tokenB) external view returns (address pair)"],this.account),this.router=new f.a.Contract(this.dexConf.router,["function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)","function getAmountsIn(uint amountOut, address[] memory path) public view returns (uint[] memory amounts)","function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)","function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)"],this.account),this.erc=new f.a.Contract(this.WETH,[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,type:"function"}],this.account)}},{key:"setInterrupt",value:function(){this.interrupt=!0}}]),e}();function w(e){return new Promise((function(t){return setTimeout(t,e)}))}var k=n(25),y=n(6);var N=function(){var e,t=Object(r.useState)({tokenOut:"",slippage:1,mnemonic:"",amountIn:null,minBnb:3,gasPrice:28}),n=Object(d.a)(t,2),c=n[0],s=n[1],o=Object(b.a)(O[0]),p=Object(d.a)(o,2),m=p[0],f=p[1],h=Object(b.a)(!1),x=Object(d.a)(h,2),j=x[0],v=x[1],w=Object(b.a)(!1),N=Object(d.a)(w,2),C=N[0],I=N[1],T=Object(b.a)(""),B=Object(d.a)(T,2),S=B[0],E=B[1],P=new g;Object(r.useEffect)((function(){var e=localStorage.getItem("formData");e&&s(JSON.parse(e));var t=localStorage.getItem("dexKey");D(t||"mdex")}),[]);var D=function(e){var t=O[e];f(t),P.selectDex(t),localStorage.setItem("dexKey",e)},A=function(e){return function(t){c[e]=t.target.value,s(c),localStorage.setItem("formData",JSON.stringify(c))}},H=function(e,t){E((function(n){return(new Date).toLocaleString("chinese",{hour12:!1}).split(" ")[1]+"  <span class='span-"+t+"'>"+e+"</span><br/>"+n}))},U=window.location.hostname,W=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.tokenOut,n=c.mnemonic,null!==t&&42===t.length){e.next=4;break}return alert("\u8bf7\u586b\u5199\u6b63\u786e\u5408\u7ea6\uff01"),e.abrupt("return",!1);case 4:if(null!==n&&66===n.length){e.next=7;break}return alert("\u8bf7\u586b\u5199\u6b63\u786e\u7684\u79c1\u94a5"),e.abrupt("return",!1);case 7:return P.init(n,m),e.next=10,P.approve(t);case 10:r=e.sent,I(r);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,r,a,s,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j){e.next=3;break}return P.setInterrupt(),window.isInterrupt=!0,v(!1),H("\u5df2\u624b\u52a8\u7ec8\u6b62","red"),e.abrupt("return");case 3:if(t=c.tokenOut,n=c.slippage,r=c.mnemonic,a=c.amountIn,s=c.minBnb,i=c.gasPrice,null!==t&&42===t.length){e.next=7;break}return alert("\u8bf7\u586b\u5199\u6b63\u786e\u5408\u7ea6\uff01"),e.abrupt("return",!1);case 7:if(!(null===a||a<0||isNaN(a))){e.next=10;break}return alert("\u4e70\u5165\u91d1\u989d\u5fc5\u987b\u5927\u4e8e0"),e.abrupt("return",!1);case 10:if(null!==r&&66===r.length){e.next=13;break}return alert("\u8bf7\u586b\u5199\u6b63\u786e\u7684\u79c1\u94a5"),e.abrupt("return",!1);case 13:return P.init(r,m),v(!0),e.next=17,P.start(t,a,s,i,n,H);case 17:o=e.sent,v(!1),console.log(o);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if("afam.cc"!==U&&"localhost"!==U)return"404 page not found!";var q=a.a.forwardRef((function(e,t){var n=e.children,r=e.onClick;return Object(y.jsxs)("a",{type:"button",className:"btn btn-default dropdown-toggle",ref:t,onClick:function(e){e.preventDefault(),r(e)},children:[n,Object(y.jsx)("span",{className:"caret"})]})})),F=function(){return Object(y.jsxs)(k.a,{children:[Object(y.jsx)(k.a.Toggle,{as:q}),Object(y.jsx)(k.a.Menu,{children:Object.keys(O).map((function(e){return Object(y.jsx)(k.a.Item,{href:"#",onClick:function(){D(e)},children:e},e)}))})]})};return Object(y.jsxs)("div",{className:"container main",children:[Object(y.jsxs)("div",{className:"py-5 text-center app-body",children:[Object(y.jsx)("img",{src:null===m||void 0===m?void 0:m.logo,className:"App-logo",alt:"logo",width:45,hieght:45}),Object(y.jsxs)("h2",{children:["\xa0 \xa0 ",null===m||void 0===m?void 0:m.name,Object(y.jsx)(F,{className:"inline-block"})]}),Object(y.jsx)("p",{className:"lead",children:"\u4eba\u4eba\u90fd\u662f\u79d1\u5b66\u5bb6 ."})]}),Object(y.jsxs)("div",{className:"row",children:[Object(y.jsxs)("div",{className:"col-md-12 order-md-1",children:[Object(y.jsx)("h4",{className:"mb-3",children:"\u6d41\u52a8\u6c60\u76d1\u63a7\u62a2\u5e01"}),Object(y.jsxs)("div",{style:{display:j?"none":""},children:[Object(y.jsxs)("div",{className:"mb-3 form-group-sm",children:[Object(y.jsxs)("label",{children:["\u5408\u7ea6 / Contract  ",Object(y.jsxs)("span",{className:"text-muted",children:[" \xa0",C?Object(y.jsx)("span",{className:"label label-success",children:"\u5df2\u9884\u6388\u6743"}):Object(y.jsx)("a",{type:"button",onClick:W,className:"btn btn-sm btn-link",children:"\u9884\u6388\u6743"})]})]}),Object(y.jsx)("input",{type:"email",className:"form-control",onChange:A("tokenOut"),defaultValue:c.tokenOut,placeholder:"\u8981\u4e70\u5165\u7684\u5408\u7ea6"})]}),Object(y.jsxs)("div",{className:"mb-3 form-group-sm",children:[Object(y.jsx)("label",{children:"\u79c1\u94a5 / mnemonic"}),Object(y.jsx)("input",{type:"password",className:"form-control",onChange:A("mnemonic"),defaultValue:c.mnemonic,placeholder:"\u94b1\u5305\u79c1\u94a5",required:!0})]}),Object(y.jsx)("div",{className:"row mb-3",children:Object(y.jsx)("div",{className:"col-md-12 order-md-1",children:Object(y.jsxs)("div",{className:"mb-3 form-group-sm",children:[Object(y.jsxs)("label",{children:["\u4e70\u5165\u6570\u91cf(",null===m||void 0===m?void 0:m.net.eth,") \xa0"]}),Object(y.jsx)("input",{type:"text",className:"form-control",defaultValue:c.amountIn,onChange:A("amountIn"),placeholder:"\u8f93\u5165\u4e70\u5165\u8981\u82b1\u8d39\u7684 bnb \u6570\u91cf",required:!0})]})})}),Object(y.jsxs)("div",{className:"row mb-3",children:[Object(y.jsx)("div",{className:"col-md-6 order-md-1",children:Object(y.jsxs)("div",{className:"mb-3 form-group-sm",children:[Object(y.jsxs)("label",{children:["\u6ed1\u70b9(%) ",Object(y.jsx)("span",{className:"text-muted",children:"*1 \u9ed8\u8ba4\u5e02\u4ef7\u4ea4\u6613"})]}),Object(y.jsx)("input",{type:"text",disabled:!0,className:"form-control",onChange:A("slippage"),value:"1",required:!0})]})}),Object(y.jsx)("div",{className:"col-md-6 order-md-1",children:Object(y.jsxs)("div",{className:"mb-3 form-group-sm",children:[Object(y.jsxs)("label",{children:["\u624b\u7eed\u8d39(Gwei) ",Object(y.jsx)("span",{className:"text-muted",children:"\u8d8a\u9ad8\u8d8a\u597d \u6700\u5c0f5"})]}),Object(y.jsx)("input",(e={type:"text",className:"form-control",defaultValue:c.gasPrice,onChange:A("gasPrice")},Object(i.a)(e,"defaultValue",28),Object(i.a)(e,"required",!0),e))]})})]})]}),Object(y.jsx)("button",{className:"btn ".concat(j?"btn-danger":"btn-primary","  btn-block"),onClick:L,type:"submit",children:j?"(\u70b9\u51fb\u505c\u6b62)\u8fd0\u884c\u4e2d.. ":"\u5f00\u59cb"})]}),Object(y.jsxs)("div",{className:"col-md-12 order-md-2 mb-4",children:[Object(y.jsx)("hr",{className:"mb-4"}),Object(y.jsx)("br",{}),Object(y.jsx)("h4",{className:"d-flex justify-content-between align-items-center mb-3"}),Object(y.jsx)("div",{className:"print-content",style:{display:""==S?"none":""},dangerouslySetInnerHTML:{__html:S}})]})]}),Object(y.jsxs)("div",{className:"footer",children:[Object(y.jsx)("br",{}),Object(y.jsxs)("label",{children:[" ",Object(y.jsxs)("span",{className:"text-muted",children:["v0.122 Powered by ",Object(y.jsx)("a",{href:"https://t.me/tao2581",target:"_blank",children:"Afam"})," 2021"]})]})]})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,96)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};n(90);s.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(N,{})}),document.getElementById("root")),C()}},[[91,1,2]]]);