(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(26)},21:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(12),c=n.n(r),o=(n(21),n(6)),u=n(3),m=n(27);var s=class extends a.Component{render(){return l.a.createElement("div",null,l.a.createElement("h1",null,"NEW"))}};var E=class extends a.Component{render(){return l.a.createElement("div",null,l.a.createElement(o.b,{to:"/"},"Home"),l.a.createElement("br",null),l.a.createElement(o.b,{to:"/deeee"},"New"),l.a.createElement("br",null),l.a.createElement(o.b,{to:"/posts"},"posts"))}};var i=class extends a.Component{render(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Deeee"))}};var d=()=>{const[e,t]=Object(a.useState)(""),[n,r]=Object(a.useState)("");return l.a.createElement("div",null,l.a.createElement("h1",null,"Create Post"),l.a.createElement("form",{onSubmit:async t=>{t.preventDefault();try{await m.a.post("/api/posts",{title:e,content:n})}catch(a){console.error("Error creating post:",a)}}},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"title"},"Title:"),l.a.createElement("input",{type:"text",id:"title",value:e,onChange:e=>t(e.target.value),required:!0})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"content"},"Content:"),l.a.createElement("textarea",{id:"content",value:n,onChange:e=>r(e.target.value),required:!0})),l.a.createElement("button",{type:"submit"},"Create Post")))};var p=function(){return l.a.createElement(o.a,null,l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/posts",element:l.a.createElement(d,null)}),l.a.createElement(u.a,{path:"/new",element:l.a.createElement(s,null)}),l.a.createElement(u.a,{path:"/deeee",element:l.a.createElement(i,null)})),l.a.createElement(E,null))};var v=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then(t=>{let{getCLS:n,getFID:a,getFCP:l,getLCP:r,getTTFB:c}=t;n(e),a(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null))),v()}},[[13,1,2]]]);
//# sourceMappingURL=main.da088c98.chunk.js.map