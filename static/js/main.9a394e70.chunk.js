(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[0],{20:function(e,a,t){e.exports=t.p+"static/media/chrisFarley.67ab4047.gif"},21:function(e,a,t){e.exports=t.p+"static/media/jamesCorden.a9910605.gif"},22:function(e,a,t){e.exports=t.p+"static/media/neilPatrickHarris.0c746bac.gif"},23:function(e,a,t){e.exports=t.p+"static/media/dragon.8b0ef686.jpg"},28:function(e,a,t){e.exports=t(46)},33:function(e,a,t){},35:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(17),s=t.n(c),o=(t(33),t(2)),i=t(18),l=t(11),m=t.n(l),u=t(27),g=t(5),d=t(14),h=t(24),b=t.n(h),p=t(19),E=t.n(p),f=t(20),v=t.n(f),N=t(21),y=t.n(N),j=t(22),w=t.n(j),O=t(23),k=t.n(O),C={heckling:{chrisFarley:v.a,jamesCorden:y.a,neilPatrickHarris:w.a},questions:{dragon:k.a}},x=(t(35),[{answer:"dragon",image:"dragon"}]),_=function(){var e=b()(),a=e.width,t=e.height;return r.a.createElement(E.a,{width:a,height:t})},q=function(e){Object(i.a)(e);var a=Object(u.a)(),t=a.register,c=a.handleSubmit,s=a.errors,l=Object(n.useState)(!1),d=Object(o.a)(l,2),h=d[0],b=d[1],p=Object(n.useState)(!1),E=Object(o.a)(p,2),f=E[0],v=E[1],N=Object(n.useState)(0),y=Object(o.a)(N,2),j=y[0],w=y[1],O=Object(g.g)().questionIndex;return console.log({incorrectCount:j}),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"guess"},r.a.createElement("form",{className:"form",onSubmit:c((function(e){var a=e.guess,t=x[O].answer!==a.toLowerCase();t?(b(!1),v(!0),w(j+1),console.log("INCORRECT!")):(b(!0),v(!1),w(0),console.log("CORRECT!")),console.log({isIncorrect:t,questionIndex:O})}))},r.a.createElement("span",{className:"form__label"},"Guess here"),r.a.createElement("div",{className:"form__fields"},r.a.createElement("input",{type:"text",name:"guess",autoComplete:"off",ref:t({required:!0}),onChange:function(){v(!1)}}),r.a.createElement("input",{type:"submit",value:"\ud83d\udc49 \ud83d\udd34"})),s.guess&&r.a.createElement("p",{className:"validation-error"},"Try a little harder... literally anything is better than your guess.")),r.a.createElement("div",{className:m()("heckling",{"heckling--hidden":!f})},r.a.createElement("img",{src:C.heckling.chrisFarley}))),r.a.createElement("div",{className:"question"},r.a.createElement("div",{className:"question__image-container"},r.a.createElement("img",{src:C.questions.dragon}))),h&&r.a.createElement(_,null))},S=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],c=a[1];return r.a.createElement(d.a,{basename:"/playground"},r.a.createElement("div",{className:"app"},r.a.createElement("nav",{className:"nav"},r.a.createElement("h1",{className:"nav__title"},r.a.createElement(d.b,{to:"/"},"Pun fun")),r.a.createElement("button",{className:m()("nav__hamburger hamburger hamburger--collapse",{"is-active":t}),onClick:function(){return c(!t)},type:"button","aria-label":"Menu","aria-controls":"navigation"},r.a.createElement("span",{className:"hamburger-box"},r.a.createElement("span",{className:"hamburger-inner"})))),r.a.createElement("div",{className:"content"},r.a.createElement(g.d,null,r.a.createElement(g.b,{path:"/:questionIndex"},r.a.createElement(q,null)),r.a.createElement(g.b,{path:"/"},r.a.createElement(g.a,{to:{pathname:"/0"}}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.9a394e70.chunk.js.map