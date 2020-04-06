(this["webpackJsonplight-todolist"]=this["webpackJsonplight-todolist"]||[]).push([[0],{16:function(n,e,t){n.exports=t(32)},21:function(n,e,t){},32:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(9),c=t.n(a),i=(t(21),t(1)),u=t(2);function l(){var n=Object(i.a)(["\n    width : 512px;\n    height : 768px;\n\n    position : relative;\n    background : white;\n    border-radius : 16px;\n    box-shadow : 0 0 8px rgba(0, 0, 0, 0.04);\n\n    margin : 0 auto;\n    margin-top : 96px;\n    margin-bottom : 32px;\n\n    display : flex;\n    flex-direction : column;\n"]);return l=function(){return n},n}var d=u.c.div(l());var f=function(n){var e=n.children;return o.a.createElement(d,null,e)},s=t(3),p=t(15),b=[{id:1,text:"JIRA \uc774\uc288\ud655\uc778\ud558\uae30",done:!1}];function m(n,e){switch(e.type){case"CREATE":return n.concat(e.todo);case"TOGGLE":return n.map((function(n){return n.id===e.id?Object(p.a)({},n,{done:!n.done}):n}));case"REMOVE":return n.filter((function(n){return n.id!==e.id}));default:return new Error("Unhandled action type ".concat(e.type))}}var v=Object(r.createContext)(),x=Object(r.createContext)(),g=Object(r.createContext)();function h(n){var e=n.children,t=Object(r.useReducer)(m,b),a=Object(s.a)(t,2),c=a[0],i=a[1],u=Object(r.useRef)(5);return o.a.createElement(v.Provider,{value:c},o.a.createElement(x.Provider,{value:i},o.a.createElement(g.Provider,{value:u},e)))}function E(){var n=Object(r.useContext)(v);if(!n)throw new Error("connot find todoProvider");return n}function O(){var n=Object(r.useContext)(x);if(!n)throw new Error("connot find todoProvider");return n}var j=t(13),w=t.n(j);function y(){var n=Object(i.a)(["\n    padding : 48px 32px 24px 32px;\n    border-bottom : 1px solid #e9ecef;\n\n    h1 {\n        margin: 0;\n        font-size: 36px;\n        color: #343a40;\n    }\n\n    .day {\n        margin-top: 4px;\n        color: #868e96;\n        font-size: 21px;\n    }\n\n    .task-left {\n        color: #20c997;\n        font-size: 18px;\n        margin-top: 40px;\n        font-weight: bold;\n    }\n"]);return y=function(){return n},n}var k=u.c.div(y());var C=function(n){n.children;var e=E().filter((function(n){return!n.done})),t=new Date,r=t.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"});return t.toLocaleDateString("ko-KR",{weekday:"long"}),o.a.createElement(k,null,o.a.createElement("h1",null,r),o.a.createElement("div",{className:"day"},o.a.createElement(w.a,{format:"dddd h:mm:ss a",ticking:!0,timezone:"Asia/Seoul"})),o.a.createElement("div",{className:"task-left"},"\ud560 \uc77c ",e.length,"\uac1c \ub0a8\uc74c"))},z=t(4);function R(){var n=Object(i.a)(["\n    display: flex;\n    align-items: center;\n    padding-top: 12px;\n    padding-bottom: 12px;\n    &:hover {\n        "," { \n            opacity: 1;\n        }\n    }\n\n"]);return R=function(){return n},n}function S(){var n=Object(i.a)(["\n    opacity: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #dee2e6;\n    font-size: 24px;\n    cursor: pointer;\n    &:hover {\n        color: #ff6b6b;\n    }\n"]);return S=function(){return n},n}function P(){var n=Object(i.a)(["\n          color: #ced4da;\n      "]);return P=function(){return n},n}function A(){var n=Object(i.a)(["\n    flex: 1;\n    font-size: 21px;\n    color: #495057;\n    ","\n"]);return A=function(){return n},n}function D(){var n=Object(i.a)(["\n        border: 1px solid #38d9a9;\n        color: #38d9a9;\n    "]);return D=function(){return n},n}function G(){var n=Object(i.a)(["\n    width: 32px;\n    height: 32px;\n    border-radius: 16px;\n    border: 1px solid #ced4da;\n    font-size: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: 20px;\n    cursor: pointer;\n    ","\n\n"]);return G=function(){return n},n}var L=u.c.div(G(),(function(n){return n.done&&Object(u.b)(D())})),T=u.c.div(A(),(function(n){return n.done&&Object(u.b)(P())})),J=u.c.div(S()),M=u.c.div(R(),J);var B=o.a.memo((function(n){var e=n.id,t=n.done,r=n.text,a=O();return o.a.createElement(M,null,o.a.createElement(L,{done:t,onClick:function(){return a({type:"TOGGLE",id:e})}},t&&o.a.createElement(z.c,null)),o.a.createElement(T,{done:t},r),o.a.createElement(J,{onClick:function(){return a({type:"REMOVE",id:e})}},o.a.createElement(z.b,null)))}));function F(){var n=Object(i.a)(["\n  flex: 1;\n  padding: 20px 32px;\n  padding-bottom: 48px;\n  overflow-y: auto;\n"]);return F=function(){return n},n}var I=u.c.div(F());var K=function(n){n.children;var e=E();return o.a.createElement(I,null,e.map((function(n){return o.a.createElement(B,{key:n.id,id:n.id,text:n.text,done:n.done})})))};function N(){var n=Object(i.a)(["\n    padding: 12px;\n    border-radius: 4px;\n    border: 1px solid #dee2e6;\n    width: 100%;\n    outline: none;\n    font-size: 18px;\n    box-sizing: border-box;\n"]);return N=function(){return n},n}function V(){var n=Object(i.a)(["\n    background: #f8f9fa;\n    padding: 32px;\n    padding-bottom: 72px;\n    border-bottom-left-radius: 16px;\n    border-bottom-right-radius: 16px;\n    border-top: 1px solid #e9ecef;\n"]);return V=function(){return n},n}function W(){var n=Object(i.a)(["\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    position: absolute;\n"]);return W=function(){return n},n}function U(){var n=Object(i.a)(["\n    background: #ff6b6b;\n    &:hover {\n        background: #ff8787;\n    }\n    &:active {\n        background: #fa5252;\n    }\n    transform: translate(-50%, 50%) rotate(45deg);\n    \n  "]);return U=function(){return n},n}function $(){var n=Object(i.a)(["\n  background: #38d9a9;\n  &:hover {\n    background: #63e6be;\n  }\n  &:active {\n    background: #20c997;\n  }\n\n  z-index: 5;\n  cursor: pointer;\n  width: 80px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  transform: translate(-50%, 50%);\n\n  font-size: 60px;\n  color: white;\n  border-radius: 40px;\n\n  border: none;\n  outline: none;\n\n  transition: 0.125s all ease-in;\n  ","\n"]);return $=function(){return n},n}var q=u.c.button($(),(function(n){return n.open&&Object(u.b)(U())})),H=u.c.div(W()),Q=u.c.form(V()),X=u.c.input(N());var Y=o.a.memo((function(){var n=Object(r.useState)(!1),e=Object(s.a)(n,2),t=e[0],a=e[1],c=Object(r.useState)(""),i=Object(s.a)(c,2),u=i[0],l=i[1],d=O(),f=function(){var n=Object(r.useContext)(g);if(!n)throw new Error("connot find todoProvider");return n}();return o.a.createElement(o.a.Fragment,null,t&&o.a.createElement(H,null,o.a.createElement(Q,{onSubmit:function(n){n.preventDefault(),d({type:"CREATE",todo:{id:f.current,text:u,done:!1}}),l(""),a(!1),f.current+=1}},o.a.createElement(X,{placeholder:"\ud560 \uc77c\uc744 \uc785\ub825 \ud6c4, Enter\ub97c \ub204\ub974\uc138\uc694",autoFocus:!0,onChange:function(n){return l(n.target.value)},value:u}))),o.a.createElement(q,{onClick:function(){return a(!t)},open:t},o.a.createElement(z.a,null)))}));function Z(){var n=Object(i.a)(["\n  body {\n    background : #e9ecef;\n  }\n\n"]);return Z=function(){return n},n}var _=Object(u.a)(Z());var nn=function(){return o.a.createElement(h,null,o.a.createElement(_,null),o.a.createElement(f,null,o.a.createElement(C,null),o.a.createElement(K,null),o.a.createElement(Y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(nn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.1d8d2498.chunk.js.map