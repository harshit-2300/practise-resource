(this.webpackJsonpprep_harshit=this.webpackJsonpprep_harshit||[]).push([[0],{56:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),s=n.n(c),i=(n(72),n(8)),o=(n(73),n(13)),l=n(134),u=n(133),h=n(129),d=n(136),b=n(137),j=n(123),p=n(130),m=n(131),f=n(132),O=n(62),g=n.n(O),x=n(135),v=n(36),w=n(128),k=n(14),y=(n(74),n(58)),N=n(6),S=n(48),C=n(124),I=n(125),_=n(138),T=n(2),q=function(e,t){if(!1===e)return"";var n=JSON.parse(localStorage.getItem(t));return n?n.date:""},J=Object(N.a)({root:{margin:0,padding:0,color:S.a[400],"&$checked":{color:S.a[600]}},checked:{}})((function(e){return Object(T.jsx)(_.a,Object(y.a)({color:"default"},e))})),L=function(e){var t=JSON.parse(localStorage.getItem(e));return!!t&&t.Check};function A(e){var t=e.checked,n=e.ques,r=Object(a.useState)(L(n)),c=Object(i.a)(r,2),s=c[0],o=c[1];Object(a.useEffect)((function(){o(L(n))}),[t,n]);var l=function(e,t){o(e.target.checked);var n=e.target.checked,a={Check:n,date:function(e){if(!1===e)return"";var t=new Date;return("0"+t.getDate().toString()).slice(-2)+"/"+("0"+t.getMonth().toString()).slice(-2)+"/"+t.getFullYear().toString().slice(-2)+" "+t.toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"})}(n)};localStorage.setItem(t,JSON.stringify(a))};return Object(T.jsx)(C.a,{row:!0,children:Object(T.jsx)(I.a,{control:Object(T.jsx)(J,{checked:s,onChange:function(e){return l(e,n)},name:"checkedG"}),label:q(s,n)})})}var P=function(e){var t=e.currentSheet,n=Object(a.useState)([]),r=Object(i.a)(n,2),c=r[0],s=r[1];return Object(a.useEffect)((function(){fetch("https://harshit-resource.herokuapp.com/Questions",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({currentSheet:t})}).then((function(e){return e.json()})).then((function(e){s(e)})).catch((function(e){return console.log(e)}))}),[t]),Object(T.jsx)("div",{children:c.map((function(e,t){return Object(T.jsxs)("div",{className:"Tile",children:[Object(T.jsxs)("div",{className:"ques_name",children:[" ",Object(T.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:e.link,children:e.ques_name})," "]}),Object(T.jsxs)("div",{className:"tag",children:[" ",e.topic," "]}),Object(T.jsx)(A,{ques:e._id,checked:e.status})]},t)}))})},U=n(59),F=n.n(U);var R=function(){return Object(T.jsxs)("div",{className:"Footer",children:["Made with \ud83d\udc93 By Harshit",Object(T.jsxs)("p",{children:["Connect with me ",Object(T.jsxs)("a",{href:"https://www.linkedin.com/in/harshit-srivastava-5099b3190/",children:[" ",Object(T.jsx)(F.a,{})]})," "]}),Object(T.jsx)("p",{children:"\xa9 Harshit-2300 IIIT Jabalpur"}),Object(T.jsx)("p",{children:"More amazing features are on the way stay tuned for updates . . . ."})]})},E=n(18),B=n.n(E),D=n(26);n(56),n(57);var M=function(e){e.setIsLoggedIn;var t=e.setRegister,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),u=l[0],h=l[1],d=Object(a.useState)(""),b=Object(i.a)(d,2),j=b[0],p=b[1],m=function(){var e=Object(D.a)(B.a.mark((function e(n){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.match(/^[0-9a-zA-Z\-'_]+$/)){e.next=5;break}s(""),p("User Name not allowed"),e.next=10;break;case 5:return e.next=7,fetch("https://harshit-resource.herokuapp.com/signUp",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_name:c,password:u})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e),!1}));case 7:e.sent?(alert("Successfully registered"),s(""),h(""),t("signIn")):alert("User already exists"),p("");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsx)("article",{className:"br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center",children:Object(T.jsx)("main",{className:"pa4 black-80",children:Object(T.jsxs)("div",{className:"measure",children:[Object(T.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(T.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(T.jsxs)("div",{className:"mt3",children:[Object(T.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"user_name",children:"User Name"}),Object(T.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",onChange:function(e){s(e.target.value)},type:"name",name:"user_name",id:"user_name",placeholder:j,value:c})]}),Object(T.jsxs)("div",{className:"mv3",children:[Object(T.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(T.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",onChange:function(e){h(e.target.value)},type:"password",name:"password",value:u,id:"password"})]})]}),Object(T.jsx)("div",{className:"",children:Object(T.jsx)("input",{onClick:function(e){m(e)},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})}),Object(T.jsx)("div",{className:"lh-copy mt3",children:Object(T.jsx)("p",{onClick:function(){return t("signIn")},className:"f6 link dim black db pointer",children:"Sign In"})})]})})})};var z=function(e){var t=e.setIsLoggedIn,n=e.setRegister,r=e.setLoggedInAs,c=Object(a.useState)(""),s=Object(i.a)(c,2),o=s[0],l=s[1],u=Object(a.useState)(""),h=Object(i.a)(u,2),d=h[0],b=h[1],j=Object(a.useState)(""),p=Object(i.a)(j,2),m=p[0],f=p[1],O=function(){var e=Object(D.a)(B.a.mark((function e(n){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o.match(/^[0-9a-zA-Z\-'_]+$/)){e.next=5;break}l(""),f("User Name not allowed"),e.next=10;break;case 5:return e.next=7,fetch("https://harshit-resource.herokuapp.com/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_name:o,password:d})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e),!1}));case 7:e.sent?(r(o),l(""),t(!0)):alert("Incorrect User Name or Password "),f("");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsx)("article",{className:"br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center",children:Object(T.jsx)("main",{className:"pa4 black-80",children:Object(T.jsxs)("div",{className:"measure",children:[Object(T.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(T.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(T.jsxs)("div",{className:"mt3",children:[Object(T.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"user_name",children:"User Name"}),Object(T.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",onChange:function(e){return l(e.target.value)},type:"name",name:"user_name",id:"user_name",value:o,placeholder:m})]}),Object(T.jsxs)("div",{className:"mv3",children:[Object(T.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(T.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",onChange:function(e){return b(e.target.value)},value:d,type:"password",name:"password",id:"password"})]})]}),Object(T.jsx)("div",{className:"",children:Object(T.jsx)("input",{onClick:function(e){O(e)},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(T.jsx)("div",{className:"lh-copy mt3",children:Object(T.jsx)("p",{onClick:function(){return n("Register")},className:"f6 link dim black db pointer",children:"Register"})})]})})})},H=n(61),$=n.n(H),G=n(60),W=n.n(G),Z=n(127),Q=n(126),Y=Object(N.a)((function(e){return{root:{color:e.palette.getContrastText(Q.a[500]),backgroundColor:Q.a[200],"&:hover":{backgroundColor:Q.a[700]}}}}))(Z.a),K=Object(w.a)((function(e){return{margin:{margin:e.spacing(1)}}})),V=function(e){var t=JSON.parse(localStorage.getItem(e));if(t)return{ques_id:e,Check:t.Check,date:t.date}};function X(e){var t=e.loggedInAs,n=K(),r=Object(a.useState)(""),c=Object(i.a)(r,2),s=c[0],o=c[1],l=function(){var e=Object(D.a)(B.a.mark((function e(){var n,a,r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],a=Object.keys(localStorage),r=a.length,o("Uploading ... ");case 4:if(!r--){e.next=10;break}if("Testing"!==a[r]){e.next=7;break}return e.abrupt("continue",4);case 7:n.push(V(a[r])),e.next=4;break;case 10:return e.next=12,fetch("https://harshit-resource.herokuapp.com/upload",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:t,payLoad:n})}).then((function(e){return e.json()})).then((function(e){return o("Uploaded"),e})).catch((function(e){return console.log(e),o("failed"),!1}));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(D.a)(B.a.mark((function e(){var n,a,r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o("Downloading ... "),e.next=3,fetch("https://harshit-resource.herokuapp.com/download",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:t})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e),[]}));case 3:for(n=e.sent,localStorage.clear(),a=0;a<n.length;a++)r={Check:n[a].Check,date:n[a].date},localStorage.setItem(n[a].ques_id,JSON.stringify(r));o("Downloaded you can see the changes");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(T.jsxs)("div",{children:[Object(T.jsxs)(Y,{variant:"contained",color:"primary",className:n.margin,onClick:function(e){return u(e)},children:["Download \u2003 ",Object(T.jsx)(W.a,{})]}),Object(T.jsxs)(Y,{variant:"contained",color:"primary",className:n.margin,onClick:function(e){return l(e)},children:["Upload \u2003 ",Object(T.jsx)($.a,{})]}),Object(T.jsx)("br",{}),Object(T.jsx)("p",{children:s})]})}n(82);var ee=function(){var e=Object(a.useState)("signIn"),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),s=Object(i.a)(c,2),o=s[0],l=s[1],u=Object(a.useState)(""),h=Object(i.a)(u,2),d=h[0],b=h[1];return o?Object(T.jsx)("div",{className:"Sync",children:Object(T.jsx)("center",{children:Object(T.jsx)(X,{loggedInAs:d})})}):"signIn"===n?Object(T.jsx)(z,{setRegister:r,setIsLoggedIn:l,setLoggedInAs:b}):Object(T.jsx)(M,{setRegister:r,setIsLoggedIn:l})},te=240,ne=Object(w.a)((function(e){return{root:{display:"flex"},drawer:Object(o.a)({},e.breakpoints.up("sm"),{width:te,flexShrink:0}),appBar:Object(o.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(te,"px)"),marginLeft:te,background:"#E4C802"}),menuButton:Object(o.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:te},content:{flexGrow:1,padding:e.spacing(3)}}}));var ae=function(e){var t=e.window,n=ne(),c=Object(k.a)(),s=r.a.useState(!1),o=Object(i.a)(s,2),O=o[0],w=o[1],y=Object(a.useState)(["Loading Please wait ..."]),N=Object(i.a)(y,2),S=N[0],C=N[1],I=Object(a.useState)("Select a sheet to practise"),_=Object(i.a)(I,2),q=_[0],J=_[1];Object(a.useEffect)((function(){fetch("https://harshit-resource.herokuapp.com/sheetNames").then((function(e){return e.json()})).then((function(e){C(e)})).catch((function(e){return console.log(e)}))}),[]);var L=function(){w(!O)},A=Object(T.jsxs)("div",{children:[Object(T.jsx)("div",{className:n.toolbar}),Object(T.jsx)(h.a,{}),Object(T.jsx)(p.a,{children:["About","Sync"].map((function(e,t){return Object(T.jsx)(m.a,{button:!0,onClick:function(){J(e)},children:Object(T.jsx)(f.a,{primary:e})},e)}))}),Object(T.jsx)(h.a,{}),Object(T.jsx)(p.a,{children:S.map((function(e,t){return Object(T.jsx)(m.a,{button:!0,onClick:function(){J(e.name)},children:Object(T.jsx)(f.a,{primary:e.name})},e.name)}))})]}),U=void 0!==t?function(){return t().document.body}:void 0;return Object(T.jsxs)("div",{className:n.root,children:[Object(T.jsx)(u.a,{}),Object(T.jsx)(l.a,{position:"fixed",className:n.appBar,children:Object(T.jsxs)(x.a,{style:{background:"#E4C802"},children:[Object(T.jsx)(j.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:L,className:n.menuButton,children:Object(T.jsx)(g.a,{})}),Object(T.jsx)(v.a,{variant:"h6",noWrap:!0,children:q})]})}),Object(T.jsxs)("nav",{className:n.drawer,"aria-label":"mailbox folders",children:[Object(T.jsx)(b.a,{smUp:!0,implementation:"css",children:Object(T.jsx)(d.a,{container:U,variant:"temporary",style:{background:"#E4C802"},anchor:"rtl"===c.direction?"right":"left",open:O,onClose:L,classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!0},children:A})}),Object(T.jsx)(b.a,{xsDown:!0,implementation:"css",children:Object(T.jsx)(d.a,{classes:{paper:n.drawerPaper},variant:"permanent",open:!0,children:A})})]}),Object(T.jsxs)("main",{className:n.content,children:[Object(T.jsx)("div",{className:n.toolbar}),"About"===q?Object(T.jsxs)("div",{children:[Object(T.jsx)("p",{children:"While practising data structures and algorithms many students are confused about which questions to practise and from which platform, this consumes a lot of time in exploring different platforms. Personally I faced this problem a lot, therefore I made this website to make our coding journey easier."}),Object(T.jsx)("p",{children:"This is one stop destination for all the handpicked problems from various sheets available on internet, with time more questions and Sheets will be added to this. "}),Object(T.jsx)("p",{children:"At present basic functionality such as checking the done questions is provided where you can check a question and the question will be marked checked with the current timestamp. Note:unmarking will clear your previous timeStamp."}),Object(T.jsxs)("p",{children:["I have added my sheet which includes my favorite questions. If you want to contribute to the resource by adding questions,more sheets or want to suggest some features feel free to mail me at ",Object(T.jsx)("a",{href:"mailto:srivastavaharshitprep@gmail.com",children:"srivastavaharshitprep@gmail.com"}),". "]}),Object(T.jsx)("p",{children:"A special thanks to all the content creators who are helping students by providing amazing content."}),Object(T.jsx)(R,{})]}):"Sync"===q?Object(T.jsx)(ee,{}):Object(T.jsx)(P,{currentSheet:q})]})]})};var re=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=t[0],r=t[1];return console.log("Hits=",n),Object(a.useEffect)((function(){fetch("https://harshit-resource.herokuapp.com/hitCount").then((function(e){return e.json()})).then((function(e){r(e)})).catch((function(e){return console.log(e)}))}),[]),Object(T.jsx)("div",{className:"App",children:Object(T.jsx)(ae,{})})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,139)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(re,{})}),document.getElementById("root")),ce()}},[[83,1,2]]]);
//# sourceMappingURL=main.49a43326.chunk.js.map