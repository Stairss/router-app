(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header1.70e6670e.jpg"},function(e,t,a){e.exports=a.p+"static/media/header3.d9d36b65.jpg"},,function(e,t,a){e.exports=a.p+"static/media/header2.33eca35f.jpg"},,,,,,,function(e,t,a){e.exports=a(41)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l),o=(a(29),a(8)),i=a(9),u=a(11),m=a(10),s=a(12),p=(a(30),a(3)),d=a(1),E=(a(31),a(14)),h=a.n(E),f=a(17),g=a.n(f),v=a(15),y=a.n(v),b=function(){h.a,g.a,y.a,Math.floor(3*Math.random());return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.e,null,r.a.createElement(d.c,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:h.a,alt:"city"})}}),r.a.createElement(d.c,{path:"/products",render:function(){return r.a.createElement("img",{src:g.a,alt:"city"})}}),r.a.createElement(d.c,{path:"/contact",render:function(){return r.a.createElement("img",{src:y.a,alt:"city"})}}),r.a.createElement(d.c,{path:"/admin",render:function(){return r.a.createElement("img",{src:y.a,alt:"city"})}}),r.a.createElement(d.c,{render:function(){return r.a.createElement("img",{src:h.a,alt:"city"})}})))},j=(a(37),[{name:"start",path:"/",exact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"panel admin",path:"/admin"}]),w=function(){var e=j.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(p.c,{to:e.path,exact:!!e.exact&&e.exact},e.name))});return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},x=function(e){var t=e.title,a=e.author,n=e.text;return r.a.createElement("article",{style:{marginTop:"40px"}},r.a.createElement("h3",{style:{marginBottom:"3px",textTransform:"uppercase"}},t),r.a.createElement("span",{style:{display:"block",marginBottom:10,fontSize:16}},a),r.a.createElement("p",{style:{fontSize:16}},n))},k=[{id:1,title:"Czym jest teoria strun",author:"Jan Nowak",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cumque, nemo minus quis inventore consequuntur laudantium eligendi, nulla quidem vitae explicabo totam dolores officiis a quod at deserunt alias dolore!"},{id:2,title:"Czym jest teoria strun",author:"Jan Nowak",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cumque, nemo minus quis inventore consequuntur laudantium eligendi, nulla quidem vitae explicabo totam dolores officiis a quod at deserunt alias dolore!"},{id:3,title:"Czym jest teoria strun",author:"Jan Nowak",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cumque, nemo minus quis inventore consequuntur laudantium eligendi, nulla quidem vitae explicabo totam dolores officiis a quod at deserunt alias dolore!"}],O=function(){var e=k.map(function(e){return r.a.createElement(x,Object.assign({key:e.id},e))});return r.a.createElement("div",{className:"home"},e)},S=(a(38),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",isEmpty:!0},a.handleSubmit=function(e){e.preventDefault(),a.setState({value:"",isEmpty:!0})},a.handleChange=function(e){e.target.value.length>0?a.setState({value:e.target.value,isEmpty:!1}):a.setState({value:e.target.value,isEmpty:!0})},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Napisz do nas"),r.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange,placeholder:"Wpisz wiadomo\u015b\u0107..."}),r.a.createElement("button",null,"Wy\u015blij")),r.a.createElement(d.a,{when:!this.state.isEmpty,message:"Masz niewype\u0142niony formularz. Czy na pewno chcesz opu\u015bci\u0107 t\u0119 stron\u0119"}))}}]),t}(r.a.Component)),q=function(e){return r.a.createElement("article",{className:"product"},r.a.createElement("h1",null,e.id))},C=function(e){var t=e.match;return console.log(t),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Strona produktu"),r.a.createElement(q,{id:t.params.id}),r.a.createElement(p.b,{to:"/products"},"Powr\xf3t do listy produkt\xf3w"))},N=(a(39),["car","bike","motorcycle"]),z=function(){var e=N.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(p.b,{to:"/product/".concat(e)},e))});return r.a.createElement("div",{className:"products"},r.a.createElement("h2",null,"Lista produkt\xf3w"),r.a.createElement("div",null,r.a.createElement("ul",null,e)))},L=function(){return r.a.createElement(d.c,{render:function(){return r.a.createElement(d.b,{to:"/login"})}})},P=function(){return r.a.createElement("div",null,"Nie ma takiej strony")},J={name:"admin",password:"123"},F=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={valuePassword:"",valueLogin:""},a.handleSubmit=function(e){e.preventDefault(),J.name===a.state.valueLogin&&J.password===a.state.valuePassword&&(console.log("login"),a.setState({valuePassword:"",valueLogin:""}))},a.handleLogin=function(e){console.log(a.state.valueLogin),a.setState({valueLogin:e.target.value})},a.handlePassword=function(e){a.setState({valuePassword:e.target.value})},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:""},"Podaj login ",r.a.createElement("input",{type:"text",onChange:this.handleLogin})),r.a.createElement("label",{htmlFor:""},"Podaj has\u0142o ",r.a.createElement("input",{type:"password",onChange:this.handlePassword})),r.a.createElement("button",null,"Zaloguj"))}}]),t}(r.a.Component),M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.e,null,r.a.createElement(d.c,{path:"/",exact:!0,component:O}),r.a.createElement(d.c,{path:"/products",component:z}),r.a.createElement(d.c,{path:"/product/:id",component:C}),r.a.createElement(d.c,{path:"/contact",component:S}),r.a.createElement(d.c,{path:"/admin",component:L}),r.a.createElement(d.c,{path:"/login",component:F}),r.a.createElement(d.c,{component:P})))},B=(a(40),function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Stopka"),r.a.createElement(d.c,{path:"/",exact:!0,render:function(e){return r.a.createElement("p",null,"Jeste\u015b na stronie ",r.a.createElement("span",null," g\u0142\xf3wnej"))}}),r.a.createElement(d.c,{path:"/:page",exact:!0,render:function(e){return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jeste\u015b na stronie ",r.a.createElement("span",null,e.match.params.page)))}}),r.a.createElement(d.c,{path:"/:page/:idProduct",exact:!0,render:function(e){return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jeste\u015b na stronie ",r.a.createElement("span",null,e.match.params.page)))}}))}),A=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(b,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(w,null)),r.a.createElement("section",{className:"page"},r.a.createElement(M,null))),r.a.createElement("footer",null,r.a.createElement(B,null))))}}]),t}(n.Component);c.a.render(r.a.createElement(A,null),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.7cf6a603.chunk.js.map