(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(26)},21:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(11),o=n.n(l),c=(n(21),n(12)),u=n(3),i=n(27);var m=()=>{const[e,t]=Object(a.useState)(""),[n,l]=Object(a.useState)("");return r.a.createElement("div",null,r.a.createElement("h1",null,"Create Post"),r.a.createElement("form",{onSubmit:async t=>{t.preventDefault();try{await i.a.post("/api/posts",{title:e,content:n})}catch(a){console.error("Error creating post:",a)}}},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"title"},"Title:"),r.a.createElement("input",{type:"text",id:"title",value:e,onChange:e=>t(e.target.value),required:!0})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"content"},"Content:"),r.a.createElement("textarea",{id:"content",value:n,onChange:e=>l(e.target.value),required:!0})),r.a.createElement("button",{type:"submit"},"Create Post")))};var s=function(){return r.a.createElement(c.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",Component:m}),r.a.createElement(u.a,{exact:!0,path:"/posts",Component:m})))};var p=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then(t=>{let{getCLS:n,getFID:a,getFCP:r,getLCP:l,getTTFB:o}=t;n(e),a(e),r(e),l(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null))),p()}},[[13,1,2]]]);
//# sourceMappingURL=main.4fedb2d4.chunk.js.map