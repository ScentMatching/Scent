(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(26)},21:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(11),c=n.n(r),o=(n(21),n(12)),u=n(3),i=n(27);var m=function(){const[e,t]=Object(a.useState)([]);return Object(a.useEffect)(()=>{i.a.get("/api/posts").then(e=>t(e.data)).catch(e=>console.log(e))},[]),l.a.createElement("div",null,l.a.createElement("h1",null,"Post List"),l.a.createElement("ul",null,e.map(e=>l.a.createElement("li",{key:e.id},l.a.createElement("h2",null,e.name),l.a.createElement("p",null,"Price: ",e.price),l.a.createElement("p",null,"Stock: ",e.stock),l.a.createElement("p",null,"Description: ",e.description)))))};var s=()=>{const[e,t]=Object(a.useState)(""),[n,r]=Object(a.useState)("");return l.a.createElement("div",null,l.a.createElement("h1",null,"Create Post"),l.a.createElement("form",{onSubmit:async t=>{t.preventDefault();try{await i.a.post("/api/posts",{title:e,content:n})}catch(a){console.error("Error creating post:",a)}}},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"title"},"Title:"),l.a.createElement("input",{type:"text",id:"title",value:e,onChange:e=>t(e.target.value),required:!0})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"content"},"Content:"),l.a.createElement("textarea",{id:"content",value:n,onChange:e=>r(e.target.value),required:!0})),l.a.createElement("button",{type:"submit"},"Create Post")))};var p=function(){return l.a.createElement(o.a,null,l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/",Component:m}),l.a.createElement(u.a,{path:"/create",Component:s})))};var E=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then(t=>{let{getCLS:n,getFID:a,getFCP:l,getLCP:r,getTTFB:c}=t;n(e),a(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null))),E()}},[[13,1,2]]]);
//# sourceMappingURL=main.15809415.chunk.js.map