(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(2),l=n.n(a),c=n(8),r=n.n(c),o=(n(18),n(24));var u=function(){const[e,t]=Object(a.useState)([]);return Object(a.useEffect)(()=>{o.a.get("/api/posts").then(e=>t(e.data)).catch(e=>console.log(e))},[]),l.a.createElement("div",null,l.a.createElement("h1",null,"Post List"),l.a.createElement("ul",null,e.map(e=>l.a.createElement("li",{key:e.id},l.a.createElement("h2",null,e.name),l.a.createElement("p",null,"Price: ",e.price),l.a.createElement("p",null,"Stock: ",e.stock),l.a.createElement("p",null,"Description: ",e.description)))))};var i=()=>{const[e,t]=Object(a.useState)(""),[n,c]=Object(a.useState)("");return l.a.createElement("div",null,l.a.createElement("h1",null,"Create Post"),l.a.createElement("form",{onSubmit:async t=>{t.preventDefault();try{await o.a.post("/api/posts",{title:e,content:n})}catch(a){console.error("Error creating post:",a)}}},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"title"},"Title:"),l.a.createElement("input",{type:"text",id:"title",value:e,onChange:e=>t(e.target.value),required:!0})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"content"},"Content:"),l.a.createElement("textarea",{id:"content",value:n,onChange:e=>c(e.target.value),required:!0})),l.a.createElement("button",{type:"submit"},"Create Post")))};var s=function(){const[e,t]=Object(a.useState)("");return Object(a.useEffect)(()=>{o.a.get("/api").then(e=>t(e.data)).catch(e=>console.log(e))},[]),l.a.createElement("div",null,"\ubc31\uc5d4\ub4dc\uc5d0\uc11c \uac00\uc838\uc628 \ub370\uc774\ud130\uc785\ub2c8\ub2e4 :",e,l.a.createElement(u,null),l.a.createElement(i,null))};var m=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then(t=>{let{getCLS:n,getFID:a,getFCP:l,getLCP:c,getTTFB:r}=t;n(e),a(e),l(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s,null))),m()},9:function(e,t,n){e.exports=n(23)}},[[9,1,2]]]);
//# sourceMappingURL=main.acff1a84.chunk.js.map