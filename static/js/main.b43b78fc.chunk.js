(this["webpackJsonprts-boilerplate"]=this["webpackJsonprts-boilerplate"]||[]).push([[0],{108:function(e,t,s){},109:function(e,t,s){},110:function(e,t,s){},112:function(e,t,s){},113:function(e,t,s){},114:function(e,t,s){},115:function(e,t,s){},116:function(e,t,s){},117:function(e,t,s){},119:function(e,t,s){},120:function(e,t,s){},121:function(e,t,s){},122:function(e,t,s){},123:function(e,t,s){},124:function(e,t,s){},125:function(e,t,s){},126:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(1),c=s.n(n),i=s(42),r=s.n(i),o=s(13),l=s(31),d=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,129)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),c(e),i(e)}))},j=s(74),b=s(56),u=s(76),m=s(16),h=s(23),g="FETCH_USER_DATA",x="FETCH_USER_DATA/SUCCESS",O="TOGGLE_LOGIN",p="REGISTER_USER",f="REGISTER_USER/SUCCESS",v="LOGIN_USER",M={registrationCompleted:!1,isLogged:!1,data:void 0},w=Object(m.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(h.a)(Object(h.a)({},e),{},{isLogged:!0});case x:return Object(h.a)(Object(h.a)({},e),{},{isLogged:!0,data:t.payload});case f:return Object(h.a)(Object(h.a)({},e),{},{registrationCompleted:!0});default:return e}}}),y=s(25),C=s.n(y),N=s(34),S=s.n(N),D=s(27),k=s(69),F=s.n(k),L="yt_tkn",H=function(e){var t=S.a.get(L),s=Object(h.a)(Object(h.a)({},e),{},{url:"".concat("http://127.0.0.1:8000/").concat(e.url),headers:{Authorization:t?"Token ".concat(t):""}});return F()(s).then((function(e){return e.data}))},E=C.a.mark(T);function T(e,t){var s;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(D.b)(H,t);case 3:return s=a.sent,a.next=6,Object(D.c)({type:"".concat(e,"/SUCCESS"),payload:s});case 6:return a.abrupt("return",s);case 9:return a.prev=9,a.t0=a.catch(0),a.next=13,Object(D.c)({type:"".concat(e,"/ERROR"),payload:a.t0});case 13:return a.abrupt("return",null);case 14:case"end":return a.stop()}}),E,null,[[0,9]])}var Y=T,R=function(e){return"auth/users/".concat(e)},A=function(){return Y(g,{url:R("me/"),method:"get"})},B=function(e){return Y(p,{url:R(""),method:"post",data:e})},I=function(e){return Y(v,{url:(t="login/","auth/token/".concat(t)),method:"post",data:e});var t},V=C.a.mark(G),_=C.a.mark(W),P=C.a.mark(J),U=C.a.mark(z);function G(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.b)(A);case 2:case"end":return e.stop()}}),V)}function W(e){var t,s;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.next=3,Object(D.b)(I,Object(h.a)({},t));case 3:return(s=a.sent).auth_token&&S.a.set(L,s.auth_token),a.abrupt("return",s);case 6:case"end":return a.stop()}}),_)}function J(e){var t;return C.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,s.next=3,Object(D.b)(B,Object(h.a)({},t));case 3:case"end":return s.stop()}}),P)}function z(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.a)([Object(D.d)(g,G),Object(D.d)(p,J),Object(D.d)(v,W)]);case 2:case"end":return e.stop()}}),U)}var q=Object(u.a)(),K=Object(b.a)({reducer:w,middleware:[q].concat(Object(j.a)(Object(b.b)()))});q.run(z);var Q=K,X=s(51),Z=s(70),$=function(e){var t=e.children,s=Object(n.useMemo)((function(){return Z}),[]);return Object(a.jsx)(X.a,{locale:"ru",messages:s,children:t})},ee=Object(n.memo)($),te=s(5),se=(s(108),function(e){var t=e.color,s=void 0===t?"36a6e3":t,n=e.children;return Object(a.jsx)("div",{className:"Badge",style:{backgroundColor:"#".concat(s)},children:n})}),ae=s(35),ne=s.n(ae),ce=(s(109),function(e){var t=e.children,s=e.htmlType,n=void 0===s?"button":s,c=e.type,i=void 0===c?"default":c,r=e.onClick,o=ne()("Button",i);return Object(a.jsx)("button",{className:o,type:"submit"===n?"submit":"button",onClick:r,children:t})}),ie=(s(110),function(e){var t=e.children,s=e.className,n=void 0===s?"":s,c=e.icon,i=e.iconColor,r=void 0===i?"32a7e2":i,l=e.link,d=e.title,j=e.w,b=void 0===j?100:j;return Object(a.jsxs)("div",{className:"Card ".concat(l?"withLink":""," ").concat(n),style:{width:"".concat(b,"%")},children:[d&&Object(a.jsx)("div",{children:c?Object(a.jsxs)("div",{className:"WithBadge",children:[Object(a.jsx)(se,{color:r,children:c}),Object(a.jsx)("h3",{children:d})]}):Object(a.jsx)("h3",{children:d})}),t,l&&Object(a.jsx)("div",{className:"Link",children:Object(a.jsx)(o.b,{to:l.href,children:l.title})})]})}),re=(s(112),function(e){var t=e.items,s=void 0===t?[]:t,n=e.checked,c=void 0!==n&&n;return Object(a.jsx)("ul",{className:"List ".concat(c?"checked":""),children:s.map((function(e){return Object(a.jsx)("li",{children:e},e)}))})}),oe=s(8),le=(s(113),function(e){var t=e.children,s=e.isOpened,n=e.onClose,c=ne()("Modal",{hide:!s});return Object(a.jsx)("div",{className:c,role:"presentation",onClick:function(e){e.target===e.currentTarget&&n()},children:Object(a.jsxs)("div",{children:[Object(a.jsx)(oe.s,{className:"CloseIcon",role:"presentation",onClick:n}),t]})})}),de=(s(114),function(){return Object(a.jsx)("div",{className:"Pagination",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{className:"active",children:"1"}),Object(a.jsx)("li",{children:"2"}),Object(a.jsx)("li",{children:"3"})]})})}),je=(s(115),function(e){var t=e.color,s=void 0===t?"216fed":t,n=e.finalColor,c=void 0===n?"22b07d":n,i=e.top,r=e.value,o=Math.floor(r/i*100),l=100===o?c:s;return Object(a.jsx)("div",{className:"ProgressBar",children:Object(a.jsxs)("div",{style:{backgroundColor:"#".concat(l),width:"".concat(o,"%")},children:[r," / ",i]})})}),be=(s(116),function(e){var t=e.buttonText,s=e.caption,n=e.children,c=e.className,i=void 0===c?"":c,r=e.title,o=e.onButtonClick;return Object(a.jsxs)("section",{className:"Section",children:[r&&Object(a.jsxs)("h1",{children:[r,t&&Object(a.jsx)("button",{type:"button",onClick:o,children:t})]}),s&&Object(a.jsx)("p",{className:"Caption",children:s}),Object(a.jsx)("main",{className:i,children:n})]})}),ue=(s(117),function(e){var t,s=e.name,n=e.size,c=void 0===n?"default":n,i=e.type,r=void 0===i?"rounded":i,o=ne()("StatusIcon",s,c,r);switch(s){case"success":t=Object(a.jsx)(oe.c,{});break;case"progress":t=Object(a.jsx)(oe.m,{});break;case"paused":t=Object(a.jsx)(oe.l,{});break;case"archived":t=Object(a.jsx)(oe.a,{});break;default:t=Object(a.jsx)(oe.d,{})}return Object(a.jsx)("div",{className:o,children:t})}),me=function(){return Object(a.jsx)(be,{caption:"Here will be caption",title:"Account",children:"Here will be account settings"})},he=s(75),ge=s(66),xe=s(39),Oe=s.n(xe),pe=s(36),fe=s(14),ve=Object(fe.a)({type:{id:"Forms.NewCampaign.type",defaultMessage:"Type"},link:{id:"Forms.NewCampaign.link",defaultMessage:"Youtube link"},duration:{id:"Forms.NewCampaign.duration",defaultMessage:"Duration"},count:{id:"Forms.NewCampaign.count",defaultMessage:"Count"},submit:{id:"Forms.NewCampaign.submit",defaultMessage:"Submit"},cancel:{id:"Forms.NewCampaign.cancel",defaultMessage:"Cancel"},cost:{id:"Forms.NewCampaign.cost",defaultMessage:"Campaign cost"},views:{id:"Forms.NewCampaign.views",defaultMessage:"views"},likes:{id:"Forms.NewCampaign.likes",defaultMessage:"likes"},subscribers:{id:"Forms.NewCampaign.subscribers",defaultMessage:"subscribers"},comments:{id:"Forms.NewCampaign.comments",defaultMessage:"comments"}}),Me=(s(119),function(e){var t=e.handleCloseModal,s=e.handleSubmitForm,n=e.initialValues,c=void 0===n?{count:0,link:"",duration:0,type:"views"}:n,i=Object(ge.a)(),r=Object(pe.a)({initialValues:c,onSubmit:s}),o=r.values,l=r.handleChange,d=r.handleReset,j=r.handleSubmit;return Object(a.jsxs)("div",{className:"NewCampaign",children:[Object(a.jsxs)("form",{onSubmit:j,children:[Object(a.jsx)("div",{className:"FormField",children:Object(a.jsxs)("label",{htmlFor:"type",children:[i.formatMessage(ve.type),":",Object(a.jsxs)("select",{id:"type",name:"type",defaultValue:o.type,onBlur:l,children:[Object(a.jsx)("option",{value:"views",children:i.formatMessage(ve.views)}),Object(a.jsx)("option",{value:"likes",children:i.formatMessage(ve.likes)}),Object(a.jsx)("option",{value:"subscribers",children:i.formatMessage(ve.subscribers)}),Object(a.jsx)("option",{value:"comments",children:i.formatMessage(ve.comments)})]})]})}),Object(a.jsx)("div",{className:"FormField",children:Object(a.jsxs)("label",{htmlFor:"link",children:[i.formatMessage(ve.link),":",Object(a.jsx)("input",{type:"text",id:"link",name:"link",placeholder:"https://www.youtube.com/watch?v=xxxxxxx",value:o.link,onChange:l})]})}),Object(a.jsx)("div",{className:"FormField",children:Object(a.jsxs)("label",{htmlFor:"duration",children:[i.formatMessage(ve.duration),":",Object(a.jsx)("input",{type:"number",id:"duration",name:"duration",value:o.duration,onChange:l})]})}),Object(a.jsx)("div",{className:"FormField",children:Object(a.jsxs)("label",{htmlFor:"count",children:[i.formatMessage(ve.count),":",Object(a.jsx)("input",{type:"number",id:"count",name:"count",value:o.count,onChange:l})]})}),Object(a.jsxs)("div",{className:"ButtonHolder",children:[Object(a.jsx)(ce,{htmlType:"submit",type:"primary",children:i.formatMessage(ve.submit)}),Object(a.jsx)(ce,{htmlType:"button",onClick:function(){d(c),t()},children:i.formatMessage(ve.cancel)})]})]}),Object(a.jsx)("div",{children:Object(a.jsxs)("h5",{children:[i.formatMessage(ve.cost),": ",Object(a.jsx)("span",{children:"3500"})]})})]})}),we=Object(fe.a)({title:{id:"Campaigns.title",defaultMessage:"Campaigns"},caption:{id:"Campaigns.caption",defaultMessage:"Here you can see your campaigns"},createNew:{id:"Campaigns.createNew",defaultMessage:"Create new campaign"},started:{id:"Campaigns.started",defaultMessage:"Campaign started"},newCampaign:{id:"Campaigns.newCampaign",defaultMessage:"New campaign"}}),ye=(s(120),function(){var e=Object(ge.a)(),t=Object(n.useState)(!1),s=Object(he.a)(t,2),c=s[0],i=s[1];return Object(a.jsxs)(be,{buttonText:e.formatMessage(we.createNew),className:"Campaigns",caption:e.formatMessage(we.caption),title:e.formatMessage(we.title),onButtonClick:function(){return i(!0)},children:[Object(a.jsxs)("ul",{className:"List",children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("div",{className:"Status",children:Object(a.jsx)(ue,{})}),Object(a.jsxs)("div",{className:"Heading",children:[Object(a.jsx)("h5",{children:"5 Simple Steps To An Effective VIDEO Strategy"}),Object(a.jsxs)("p",{children:[e.formatMessage(we.started),":"," ",Oe()("2021-01-05 14:30:59").format("DD.MM.YYYY HH:mm:ss")]})]}),Object(a.jsx)("div",{className:"Progress",children:"0 / 3500"}),Object(a.jsx)("div",{className:"Actions",children:Object(a.jsx)("button",{type:"button",children:Object(a.jsx)(oe.h,{})})})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("div",{className:"Status",children:Object(a.jsx)(ue,{name:"progress"})}),Object(a.jsxs)("div",{className:"Heading",children:[Object(a.jsx)("h5",{children:"These 5 Simple VIDEO Tricks Will Pump Up Your Sales Almost Instantly"}),Object(a.jsxs)("p",{children:[e.formatMessage(we.started),":"," ",Oe()("2021-01-05 14:35:15").format("DD.MM.YYYY HH:mm:ss")]})]}),Object(a.jsx)("div",{className:"Progress",children:"200 / 799"}),Object(a.jsx)("div",{className:"Actions",children:Object(a.jsx)("button",{type:"button",children:Object(a.jsx)(oe.h,{})})})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("div",{className:"Status",children:Object(a.jsx)(ue,{name:"paused"})}),Object(a.jsxs)("div",{className:"Heading",children:[Object(a.jsx)("h5",{children:"Why Some People Almost Always Make/Save Money With VIDEO"}),Object(a.jsxs)("p",{children:[e.formatMessage(we.started),":"," ",Oe()("2021-01-05 14:48:23").format("DD.MM.YYYY HH:mm:ss")]})]}),Object(a.jsx)("div",{className:"Progress",children:"10 / 100"}),Object(a.jsx)("div",{className:"Actions",children:Object(a.jsx)("button",{type:"button",children:Object(a.jsx)(oe.h,{})})})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("div",{className:"Status",children:Object(a.jsx)(ue,{name:"success"})}),Object(a.jsxs)("div",{className:"Heading",children:[Object(a.jsx)("h5",{children:"9 Ways VIDEO Can Make You Invincible"}),Object(a.jsxs)("p",{children:[e.formatMessage(we.started),":"," ",Oe()("2021-01-05 15:01:34").format("DD.MM.YYYY HH:mm:ss")]})]}),Object(a.jsx)("div",{className:"Progress",children:"500 / 500"}),Object(a.jsx)("div",{className:"Actions",children:Object(a.jsx)("button",{type:"button",children:Object(a.jsx)(oe.h,{})})})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("div",{className:"Status",children:Object(a.jsx)(ue,{name:"archived"})}),Object(a.jsxs)("div",{className:"Heading",children:[Object(a.jsx)("h5",{children:"What Can Instagramm Teach You About VIDEO"}),Object(a.jsxs)("p",{children:[e.formatMessage(we.started),":"," ",Oe()("2021-01-05 15:17:57").format("DD.MM.YYYY HH:mm:ss")]})]}),Object(a.jsx)("div",{className:"Progress",children:"300 / 500"}),Object(a.jsx)("div",{className:"Actions",children:Object(a.jsx)("button",{type:"button",children:Object(a.jsx)(oe.h,{})})})]})]}),Object(a.jsx)(de,{pages:3}),Object(a.jsx)(le,{isOpened:c,onClose:function(){return i(!1)},children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:e.formatMessage(we.newCampaign)}),Object(a.jsx)(Me,{handleCloseModal:function(){return i(!1)},handleSubmitForm:function(e){return console.log(e)}})]})})]})}),Ce=Object(fe.a)({title:{id:"Dashboard.title",defaultMessage:"Dashboard"},caption:{id:"Dashboard.caption",defaultMessage:"Here you can see your overall statistics"},balance:{id:"Dashboard.balance",defaultMessage:"Balance"},membership:{id:"Dashboard.membership",defaultMessage:"Membership"},sessions:{id:"Dashboard.sessions",defaultMessage:"Sessions"},refill:{id:"Dashboard.refill",defaultMessage:"Refill"},upgrade:{id:"Dashboard.upgrade",defaultMessage:"Upgrade"},buyMore:{id:"Dashboard.buyMore",defaultMessage:"Buy more"},dailyBonuses:{id:"Dashboard.dailyBonuses",defaultMessage:"Daily bonuses"},exchangeViews:{id:"Dashboard.exchangeViews",defaultMessage:"Exchange views"},exchangeLikes:{id:"Dashboard.exchangeLikes",defaultMessage:"Exchange likes"},exchangeSubscriptions:{id:"Dashboard.exchangeSubscriptions",defaultMessage:"Exchange subscriptions"},exchangeComments:{id:"Dashboard.exchangeComments",defaultMessage:"Exchange comments"},levels:{id:"Dashboard.levels",defaultMessage:"Levels"},benefits:{id:"Dashboard.benefits",defaultMessage:"Benefits"},benefit1:{id:"Dashboard.benefit1",defaultMessage:"450 credits through daily bonus"},nextLevel:{id:"Dashboard.nextLevel",defaultMessage:"Next level"},condition1:{id:"Dashboard.condition1",defaultMessage:"1000 videos watched"},condition2:{id:"Dashboard.condition2",defaultMessage:"10 campaigns started"},condition3:{id:"Dashboard.condition3",defaultMessage:"1 referral"}}),Ne=(s(121),function(){var e=Object(ge.a)();return Object(a.jsxs)(be,{className:"Dashboard",caption:e.formatMessage(Ce.caption),title:e.formatMessage(Ce.title),children:[Object(a.jsx)(ie,{icon:Object(a.jsx)(oe.g,{}),iconColor:"22b07d",link:{title:e.formatMessage(Ce.refill),href:"/account/refill"},title:e.formatMessage(Ce.balance),w:31,children:Object(a.jsxs)("span",{className:"BigText",children:[Object(a.jsx)(oe.o,{}),"75 254"]})}),Object(a.jsx)(ie,{icon:Object(a.jsx)(oe.r,{}),link:{title:e.formatMessage(Ce.upgrade),href:"/account/plans"},title:e.formatMessage(Ce.membership),w:31,children:Object(a.jsx)("span",{className:"BigText",children:"Free"})}),Object(a.jsx)(ie,{icon:Object(a.jsx)(oe.e,{}),link:{title:e.formatMessage(Ce.buyMore),href:"/store"},iconColor:"ff8700",title:e.formatMessage(Ce.sessions),w:31,children:Object(a.jsx)("span",{className:"BigText",children:"5"})}),Object(a.jsx)(ie,{title:e.formatMessage(Ce.dailyBonuses),children:Object(a.jsxs)("div",{className:"Daily",children:[Object(a.jsxs)("section",{children:[Object(a.jsx)("h5",{children:e.formatMessage(Ce.exchangeViews)}),Object(a.jsx)(je,{top:200,value:51})]}),Object(a.jsxs)("section",{children:[Object(a.jsx)("h5",{children:e.formatMessage(Ce.exchangeLikes)}),Object(a.jsx)(je,{top:10,value:3})]}),Object(a.jsxs)("section",{children:[Object(a.jsx)("h5",{children:e.formatMessage(Ce.exchangeSubscriptions)}),Object(a.jsx)(je,{top:10,value:6})]}),Object(a.jsxs)("section",{children:[Object(a.jsx)("h5",{children:e.formatMessage(Ce.exchangeComments)}),Object(a.jsx)(je,{top:10,value:10})]})]})}),Object(a.jsxs)(ie,{className:"Level",icon:Object(a.jsx)(oe.q,{}),iconColor:"9471f6",title:"1 ".concat(e.formatMessage(Ce.levels)),children:[Object(a.jsxs)("article",{className:"Level_group",children:[Object(a.jsxs)("h5",{children:[e.formatMessage(Ce.benefits),":"]}),Object(a.jsx)(re,{items:[e.formatMessage(Ce.benefit1)],checked:!0})]}),Object(a.jsxs)("article",{className:"Level_group",children:[Object(a.jsxs)("h5",{children:[e.formatMessage(Ce.nextLevel),":"]}),Object(a.jsx)(re,{items:[e.formatMessage(Ce.condition1),e.formatMessage(Ce.condition2),e.formatMessage(Ce.condition3)],checked:!0})]})]})]})}),Se=function(){return Object(a.jsx)(be,{caption:"Here will be caption",title:"Exchange",children:"Here will be exchange"})},De=function(){return Object(a.jsx)(be,{caption:"Here will be caption",title:"Help",children:"Here will be help"})},ke=s.p+"static/media/avatar.433db046.png",Fe=(s(122),function(){return Object(a.jsxs)("section",{className:"Avatar",children:[Object(a.jsx)("img",{src:ke,alt:"Samantha Doe"}),Object(a.jsxs)("div",{className:"Info",children:[Object(a.jsx)("span",{className:"Name",children:"Samantha Doe"}),Object(a.jsx)("span",{className:"Mail",children:"samantha.doe@gmail.com"})]}),Object(a.jsx)(o.b,{className:"Settings",to:"/account",children:Object(a.jsx)(oe.f,{})})]})}),Le=Object(fe.a)({common:{id:"Layout.common",defaultMessage:"Common"},dashboard:{id:"Layout.dashboard",defaultMessage:"Dashboard"},campaigns:{id:"Layout.campaigns",defaultMessage:"Campaigns"},exchange:{id:"Layout.exchange",defaultMessage:"Exchange"},store:{id:"Layout.store",defaultMessage:"Store"},referrals:{id:"Layout.referrals",defaultMessage:"Referrals"},info:{id:"Layout.info",defaultMessage:"Info"},news:{id:"Layout.news",defaultMessage:"News"},help:{id:"Layout.help",defaultMessage:"Help"}}),He=(s(123),function(){var e=Object(ge.a)();return Object(a.jsxs)("aside",{className:"Sidebar",children:[Object(a.jsx)(Fe,{}),Object(a.jsx)("h4",{children:e.formatMessage(Le.common)}),Object(a.jsx)("nav",{className:"SideMenu",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsxs)(o.b,{to:"/dashboard",children:[Object(a.jsx)(se,{color:"716fdf",children:Object(a.jsx)(oe.j,{})}),e.formatMessage(Le.dashboard)]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(o.b,{to:"/campaigns",children:[Object(a.jsx)(se,{color:"36a6e3",children:Object(a.jsx)(oe.k,{})}),e.formatMessage(Le.campaigns)]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(o.b,{to:"/exchange",children:[Object(a.jsx)(se,{color:"b24cc0",children:Object(a.jsx)(oe.i,{})}),e.formatMessage(Le.exchange)]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(o.b,{to:"/store",children:[Object(a.jsx)(se,{color:"21b17c",children:Object(a.jsx)(oe.p,{})}),e.formatMessage(Le.store)]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(o.b,{to:"/referrals",children:[Object(a.jsx)(se,{color:"fd840b",children:Object(a.jsx)(oe.t,{})}),e.formatMessage(Le.referrals)]})})]})}),Object(a.jsx)("h4",{children:e.formatMessage(Le.info)}),Object(a.jsx)("nav",{className:"SideMenu",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsxs)(o.b,{to:"/news",children:[Object(a.jsx)(se,{color:"f7727b",children:Object(a.jsx)(oe.b,{})}),e.formatMessage(Le.news)]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(o.b,{to:"/help",children:[Object(a.jsx)(se,{color:"9875f8",children:Object(a.jsx)(oe.n,{})}),e.formatMessage(Le.help)]})})]})})]})}),Ee=(s(124),function(e){var t=e.children;return Object(a.jsxs)("div",{className:"Layout",children:[Object(a.jsx)(He,{}),Object(a.jsx)("main",{children:t})]})}),Te=function(){return Object(a.jsx)(be,{caption:"Here will be caption",title:"News",children:"Here will be news"})},Ye=function(){return Object(a.jsx)(be,{caption:"Here will be caption",title:"Referrals",children:"Here will be referrals"})},Re=function(e){return{type:O,payload:e}},Ae=s(17),Be=function(e){return e.users},Ie=Object(Ae.a)(Be,(function(e){return e.registrationCompleted})),Ve=Object(Ae.a)(Be,(function(e){return e.isLogged})),_e=(Object(Ae.a)(Be,(function(e){return e.data})),function(){var e=Object(l.b)();return{isRegistrationCompleted:Object(l.c)(Ie),login:Object(n.useCallback)((function(t){e({type:v,payload:t})}),[e]),register:Object(n.useCallback)((function(t){e({type:p,payload:t})}),[e])}}),Pe=Object(fe.a)({title:{id:"Sign.title",defaultMessage:"Sign Up"},username:{id:"Sign.username",defaultMessage:"Username"},email:{id:"Sign.email",defaultMessage:"E-mail"},password:{id:"Sign.password",defaultMessage:"Password"},submit:{id:"Sign.submit",defaultMessage:"Submit"},alreadyRegistered:{id:"Sign.alreadyRegistered",defaultMessage:"Already registered?"},notAMember:{id:"Sign.notAMember",defaultMessage:"Not a member? Register."},login:{id:"Sign.login",defaultMessage:"Login"},loginSubmit:{id:"Sign.loginSubmit",defaultMessage:"Login"}}),Ue=(s(67),function(){var e=Object(ge.a)(),t=_e().login,s=Object(pe.a)({initialValues:{email:"",password:""},onSubmit:t}),n=s.values,c=s.handleChange,i=s.handleSubmit;return Object(a.jsx)("div",{className:"Sign",children:Object(a.jsxs)("form",{onSubmit:i,children:[Object(a.jsx)("h3",{children:e.formatMessage(Pe.login)}),Object(a.jsxs)("label",{htmlFor:"email",children:[e.formatMessage(Pe.email),":",Object(a.jsx)("input",{type:"email",id:"email",name:"email",value:n.email,onChange:c})]}),Object(a.jsxs)("label",{htmlFor:"username",children:[e.formatMessage(Pe.password),":",Object(a.jsx)("input",{type:"password",id:"password",name:"password",value:n.password,onChange:c})]}),Object(a.jsxs)("div",{className:"ButtonHolder",children:[Object(a.jsx)(ce,{htmlType:"submit",type:"primary",children:e.formatMessage(Pe.loginSubmit)}),Object(a.jsx)(o.b,{to:"/sign-up",children:e.formatMessage(Pe.notAMember)})]})]})})}),Ge=function(){var e=Object(ge.a)(),t=_e(),s=t.isRegistrationCompleted,n=t.register,c=Object(pe.a)({initialValues:{email:"",password:"",username:""},onSubmit:n}),i=c.values,r=c.handleChange,l=c.handleSubmit;return s?Object(a.jsx)("div",{className:"Sign",children:Object(a.jsxs)("p",{children:["Now ",Object(a.jsx)(o.b,{to:"sign-in",children:"log in"}),"."]})}):Object(a.jsx)("div",{className:"Sign",children:Object(a.jsxs)("form",{onSubmit:l,children:[Object(a.jsx)("h3",{children:e.formatMessage(Pe.title)}),Object(a.jsxs)("label",{htmlFor:"username",children:[e.formatMessage(Pe.username),":",Object(a.jsx)("input",{type:"text",id:"username",name:"username",value:i.username,onChange:r})]}),Object(a.jsxs)("label",{htmlFor:"username",children:[e.formatMessage(Pe.email),":",Object(a.jsx)("input",{type:"email",id:"email",name:"email",value:i.email,onChange:r})]}),Object(a.jsxs)("label",{htmlFor:"username",children:[e.formatMessage(Pe.password),":",Object(a.jsx)("input",{type:"password",id:"password",name:"password",value:i.password,onChange:r})]}),Object(a.jsxs)("div",{className:"ButtonHolder",children:[Object(a.jsx)(ce,{htmlType:"submit",type:"primary",children:e.formatMessage(Pe.submit)}),Object(a.jsx)(o.b,{to:"/sign-in",children:e.formatMessage(Pe.alreadyRegistered)})]})]})})},We=function(){return Object(a.jsx)(be,{caption:"Here will be caption",title:"Store",children:"Here will be store"})},Je=function(){var e=Object(l.b)(),t=Object(l.c)(Ve);return{bootstrap:Object(n.useCallback)((function(){S.a.get(L)?(e(Re(!0)),e({type:g})):e(Re(!1))}),[e]),isLogged:t}},ze=function(){var e=Je(),t=e.bootstrap,s=e.isLogged;return Object(n.useEffect)((function(){t()}),[]),s?Object(a.jsxs)(Ee,{children:[Object(a.jsxs)(te.d,{children:[Object(a.jsx)(te.b,{path:"/account",component:me,exact:!0}),Object(a.jsx)(te.b,{path:"/dashboard",component:Ne,exact:!0}),Object(a.jsx)(te.b,{path:"/campaigns",component:ye,exact:!0}),Object(a.jsx)(te.b,{path:"/exchange",component:Se,exact:!0}),Object(a.jsx)(te.b,{path:"/store",component:We,exact:!0}),Object(a.jsx)(te.b,{path:"/referrals",component:Ye,exact:!0}),Object(a.jsx)(te.b,{path:"/news",component:Te,exact:!0}),Object(a.jsx)(te.b,{path:"/help",component:De,exact:!0})]}),Object(a.jsx)(te.a,{to:"/dashboard"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(te.d,{children:[Object(a.jsx)(te.b,{path:"/sign-up",component:Ge,exact:!0}),Object(a.jsx)(te.b,{path:"/sign-in",component:Ue,exact:!0})]}),Object(a.jsx)(te.a,{to:"/sign-up"})]})};s(125);r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(o.a,{children:Object(a.jsx)(l.a,{store:Q,children:Object(a.jsx)(ee,{children:Object(a.jsx)(ze,{})})})})}),document.getElementById("root")),d()},67:function(e,t,s){},70:function(e){e.exports=JSON.parse('{"Campaigns.caption":"\u041f\u043e\u043b\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0432\u0430\u0448\u0438\u0445 \u043a\u0430\u043c\u043f\u0430\u043d\u0438\u0439","Campaigns.createNew":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c","Campaigns.newCampaign":"\u041d\u043e\u0432\u0430\u044f \u043a\u0430\u043c\u043f\u0430\u043d\u0438\u044f","Campaigns.started":"\u041a\u0430\u043c\u043f\u0430\u043d\u0438\u044f \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u0430","Campaigns.title":"\u041a\u0430\u043c\u043f\u0430\u043d\u0438\u0438","Dashboard.balance":"\u0411\u0430\u043b\u0430\u043d\u0441","Dashboard.benefit1":"450 \u0440\u0443\u0431\u043b\u0435\u0439 \u043d\u0430 \u0441\u0447\u0435\u0442 \u0437\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0435\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u043e\u0433\u043e \u0431\u043e\u043d\u0443\u0441\u0430","Dashboard.benefits":"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430","Dashboard.buyMore":"\u041a\u0443\u043f\u0438\u0442\u044c \u0435\u0449\u0435","Dashboard.caption":"\u0417\u0434\u0435\u0441\u044c \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u0432\u0430\u0448\u0430 \u043e\u0431\u0449\u0430\u044f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430","Dashboard.condition1":"1000 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043d\u044b\u0445 \u0432\u0438\u0434\u0435\u043e","Dashboard.condition2":"10 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0445 \u043a\u0430\u043c\u043f\u0430\u043d\u0438\u0439","Dashboard.condition3":"1 \u0440\u0435\u0444\u0435\u0440\u0430\u043b\u043b","Dashboard.dailyBonuses":"\u0415\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u044b\u0435 \u0431\u043e\u043d\u0443\u0441\u044b","Dashboard.exchangeComments":"\u041e\u0431\u043c\u0435\u043d \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f\u043c\u0438","Dashboard.exchangeLikes":"\u041e\u0431\u043c\u0435\u043d \u043b\u0430\u0439\u043a\u0430\u043c\u0438","Dashboard.exchangeSubscriptions":"\u041e\u0431\u043c\u0435\u043d \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430\u043c\u0438","Dashboard.exchangeViews":"\u041e\u0431\u043c\u0435\u043d \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430\u043c\u0438","Dashboard.levels":"\u0443\u0440\u043e\u0432\u0435\u043d\u044c","Dashboard.membership":"\u041f\u043b\u0430\u043d","Dashboard.nextLevel":"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c","Dashboard.refill":"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c","Dashboard.sessions":"\u0421\u0435\u0441\u0441\u0438\u0438","Dashboard.title":"\u0414\u0430\u0448\u0431\u043e\u0440\u0434","Dashboard.upgrade":"\u0423\u043b\u0443\u0447\u0448\u0438\u0442\u044c","Forms.NewCampaign.cancel":"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c","Forms.NewCampaign.comments":"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438","Forms.NewCampaign.cost":"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u043a\u0430\u043c\u043f\u0430\u043d\u0438\u0438","Forms.NewCampaign.count":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e","Forms.NewCampaign.duration":"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430, \u0441\u0435\u043a.","Forms.NewCampaign.likes":"\u041b\u0430\u0439\u043a\u0438","Forms.NewCampaign.link":"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 Youtube","Forms.NewCampaign.submit":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c","Forms.NewCampaign.subscribers":"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0438","Forms.NewCampaign.type":"\u0422\u0438\u043f \u043a\u0430\u043c\u043f\u0430\u043d\u0438\u0438","Forms.NewCampaign.views":"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u044b","Layout.campaigns":"\u041a\u0430\u043c\u043f\u0430\u043d\u0438\u0438","Layout.common":"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0435","Layout.dashboard":"\u0414\u0430\u0448\u0431\u043e\u0440\u0434","Layout.exchange":"\u041e\u0431\u043c\u0435\u043d","Layout.help":"\u041f\u043e\u043c\u043e\u0449\u044c","Layout.info":"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f","Layout.news":"\u041d\u043e\u0432\u043e\u0441\u0442\u0438","Layout.referrals":"\u0420\u0435\u0444\u0435\u0440\u0440\u0430\u043b\u044b","Layout.store":"\u041c\u0430\u0433\u0430\u0437\u0438\u043d","Sign.alreadyRegistered":"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438.","Sign.email":"E-mail","Sign.login":"\u0412\u0445\u043e\u0434","Sign.loginSubmit":"\u0412\u043e\u0439\u0442\u0438","Sign.notAMember":"\u041d\u0435\u0442 \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438? \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c.","Sign.password":"\u041f\u0430\u0440\u043e\u043b\u044c","Sign.submit":"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f","Sign.title":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f","Sign.username":"\u042e\u0437\u0435\u0440\u043d\u0435\u0439\u043c"}')}},[[126,1,2]]]);
//# sourceMappingURL=main.b43b78fc.chunk.js.map