(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(26)},21:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(12),c=n.n(r),u=(n(21),n(6)),m=n(3),o=n(27);var E=class extends a.Component{render(){return l.a.createElement("div",null,l.a.createElement("h1",null,"NEW"))}};var s=class extends a.Component{render(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(u.b,{to:"/deeee"},"New"),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/posts"},"posts"))}};var i=class extends a.Component{render(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Deeee"))}};var d=()=>{const[e,t]=Object(a.useState)(""),[n,r]=Object(a.useState)("");return l.a.createElement("div",null,l.a.createElement("h1",null,"Create Post"),l.a.createElement("form",{onSubmit:async t=>{t.preventDefault();try{await o.a.post("/api/posts",{title:e,content:n})}catch(a){console.error("Error creating post:",a)}}},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"title"},"Title:"),l.a.createElement("input",{type:"text",id:"title",value:e,onChange:e=>t(e.target.value),required:!0})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"content"},"Content:"),l.a.createElement("textarea",{id:"content",value:n,onChange:e=>r(e.target.value),required:!0})),l.a.createElement("button",{type:"submit"},"Create Post")))};var p=function(){const[e,t]=Object(a.useState)([]);return Object(a.useEffect)(()=>{o.a.get("/api/posts").then(e=>t(e.data)).catch(e=>console.log(e))},[]),l.a.createElement("div",null,l.a.createElement("h1",null,"Product"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Price"),l.a.createElement("th",null,"Stock"),l.a.createElement("th",null,"Description"))),l.a.createElement("tbody",null,e.map(e=>l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.id),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.price),l.a.createElement("td",null,e.stock),l.a.createElement("td",null,e.description))))))};var h=function(){return l.a.createElement(u.a,null,l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",element:l.a.createElement(p,null)}),l.a.createElement(m.a,{path:"/posts",element:l.a.createElement(d,null)}),l.a.createElement(m.a,{path:"/new",element:l.a.createElement(E,null)}),l.a.createElement(m.a,{path:"/deeee",element:l.a.createElement(i,null)})),l.a.createElement(s,null))};var v=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then(t=>{let{getCLS:n,getFID:a,getFCP:l,getLCP:r,getTTFB:c}=t;n(e),a(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null))),v()}},[[13,1,2]]]);
//# sourceMappingURL=main.c2751648.chunk.js.map