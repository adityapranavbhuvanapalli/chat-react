(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t){},129:function(e,t,a){"use strict";a.r(t);var n,o=a(0),r=a.n(o),c=a(10),l=a.n(c),i=(a(91),a(162)),s=a(167),m=a(165),u=(a(172),a(175)),d=a(38),h=a(168),g=a(169),p=(a(170),a(171)),f=a(176),E=a(173),v=a(37),b=a.n(v),w=(Object(i.a)({table:{minWidth:650},chatSection:{width:"100%",height:"80vh"},headBG:{backgroundColor:"#e0e0e0"},borderRight500:{borderRight:"1px solid #e0e0e0"},messageArea:{height:"70vh",overflowY:"auto"}}),a(97),a(20)),y=a(177),x=a(73),C=a.n(x),j=Object(o.createContext)(),O={general:[],astronomy:[]};function N(e,t){var a=t.payload,n=a.from,o=a.msg,r=a.topic;switch(t.type){case"RECEIVE_MESSAGE":console.log(t.payload);var c=e[r].push({from:n,msg:o});return console.log(c),console.log(e),e;default:return e}}function k(e){n.emit("chat message",e)}function A(e){var t=Object(o.useReducer)(N,O),a=Object(w.a)(t,2),c=a[0],l=a[1],i=Object(o.useState)("Anonymous"),s=Object(w.a)(i,2),m=s[0],u=s[1];return n||(n=C()(":3001")).on("chat message",function(e){l({type:"RECEIVE_MESSAGE",payload:e})}),r.a.createElement(j.Provider,{value:{allChats:c,sendChatAction:k,user:m,changeUsername:u}},e.children)}var S=Object(i.a)(function(e){return{root:{padding:e.spacing(3,2),margin:"50px",backgroundColor:"#f2f2f2"},flex:{display:"flex",alignItems:"center"},selfmsg:{display:"flex",alignItems:"center",float:"right"},topicsWindow:{width:"30%",height:"300px",borderRight:"1px solid grey",overflowY:"scroll"},chatFlex:{width:"70%"},chatWindow:{height:"300px",padding:"10px",overflowY:"scroll"},chatArea:{padding:"10px"},chatBox:{width:"85%"},button:{width:"15%"}}});function B(){var e=S(),t=Object(o.useContext)(j),a=t.allChats,n=t.sendChatAction,c=t.user,l=(t.changeUsername,Object.keys(a)),i=Object(o.useState)(l[0]),v=Object(w.a)(i,2),x=v[0],C=v[1],O=Object(o.useState)(""),N=Object(w.a)(O,2),k=N[0],A=N[1],B=Object(o.useState)("Type something"),W=Object(w.a)(B,2),I=W[0],R=W[1];return r.a.createElement("div",null,r.a.createElement(s.a,{className:e.root},r.a.createElement("div",{className:e.flex},r.a.createElement("div",{className:e.topicsWindow},r.a.createElement(h.a,null,l.map(function(e){return r.a.createElement(g.a,{key:e,button:!0,onClick:function(e){return C(e.target.innerText)}},r.a.createElement(f.a,{key:e,onClick:function(e){e.preventDefault()},src:"https://img.icons8.com/flat_round/64/000000/add-user-group-man-man.png"}),r.a.createElement(p.a,{primary:e}))}))),r.a.createElement("div",{className:e.chatFlex},r.a.createElement(d.a,{variant:"h4",component:"h4"},x),r.a.createElement("div",{className:e.chatWindow},a[x].map(function(t,a){return r.a.createElement("div",{className:e.flex,key:a,padding:"20"},r.a.createElement(f.a,{src:"https://img.icons8.com/flat_round/64/000000/add-user-group-man-man.png"}),r.a.createElement(y.a,{label:t.from+": "+t.msg,className:e.chip}))})),r.a.createElement("div",{className:e.chatArea},r.a.createElement(u.a,{id:"textfield",className:e.chatBox,label:I,value:k,onChange:function(e){return A(e.target.value)},onFocus:function(){return R("Typing...")},onBlur:function(){return R("Type Something")}}),r.a.createElement(m.a,{variant:"contained",className:e.button,color:"primary",component:"span",onClick:function(){""===k?alert("Enter something."):(n({from:c,msg:k,topic:x}),A(""))}},r.a.createElement(E.a,{color:"primary","aria-label":"add"},r.a.createElement(b.a,null))))))))}var W=a(74),I=a(174),R=Object(i.a)(function(e){return{hidden:{display:"none"},root:{alignContent:"center",alignItems:"center",margin:0,top:"50%"},input:{},button:{}}});function F(){var e=R(),t=Object(o.useContext)(j),a=(t.allChats,t.sendChatAction,t.user),n=t.changeUsername;return r.a.createElement("div",Object(W.a)({className:"Login",align:"center"},"className",e.root),r.a.createElement(u.a,{className:e.chatBox,label:"User Name",value:a,onFocus:function(e){return n("")},onBlur:function(e){""===e.target.value&&n("Anonymous")},onChange:function(e){return n(e.target.value)}}),r.a.createElement(I.a,{variant:"contained",className:e.button,color:"primary",component:"span",onClick:function(){""===a?alert("Enter username"):n(a)}},"Chat"))}var T=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(A,null,r.a.createElement(F,null),r.a.createElement(B,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})},86:function(e,t,a){e.exports=a(129)},91:function(e,t,a){},97:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.29fc3cee.chunk.js.map