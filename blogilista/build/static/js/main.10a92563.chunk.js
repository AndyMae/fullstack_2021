(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(16),o=n.n(a),c=n(3),s=n.n(c),i=n(5),u=n(4),l=n(0),j=function(e){var t=e.blog;return Object(l.jsxs)("div",{children:[t.title," ",t.author]})},b=function(e){var t=e.handleLogin,n=e.username,r=e.password,a=e.setUsername,o=e.setPassword;return Object(l.jsxs)("form",{onSubmit:t,children:[Object(l.jsxs)("div",{children:["username",Object(l.jsx)("input",{type:"text",value:n,name:"Username",onChange:function(e){var t=e.target;return a(t.value)}})]}),Object(l.jsxs)("div",{children:["password",Object(l.jsx)("input",{type:"password",value:r,name:"Username",onChange:function(e){var t=e.target;return o(t.value)}})]}),Object(l.jsx)("button",{type:"submit",children:"login"})]})},d=function(e){var t=e.notification,n=e.tone;return Object(l.jsx)("h2",{className:n,children:t})},g=function(e){var t=e.title,n=e.author,r=e.url,a=e.setTitle,o=e.setAuthor,c=e.setUrl,s=e.addBlog;return Object(l.jsxs)("form",{onSubmit:s,children:[Object(l.jsxs)("div",{children:["title",Object(l.jsx)("input",{type:"text",value:t,name:"title",onChange:function(e){var t=e.target;return a(t.value)}})]}),Object(l.jsxs)("div",{children:["author",Object(l.jsx)("input",{type:"text",value:n,name:"author",onChange:function(e){var t=e.target;return o(t.value)}})]}),Object(l.jsxs)("div",{children:["url",Object(l.jsx)("input",{type:"text",value:r,name:"url",onChange:function(e){var t=e.target;return c(t.value)}})]}),Object(l.jsx)("button",{type:"submit",children:"create"})]})},p=n(6),O=n.n(p),h="/api/blogs",f=null,v={getAll:function(){var e={headers:{Authorization:f}};return O.a.get(h,e).then((function(e){return e.data}))},create:function(){var e=Object(i.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:f}},e.next=3,O.a.post(h,t,n);case 3:return r=e.sent,console.log("response in axios"),console.log(r),console.log(r.data),e.abrupt("return",r.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){f="bearer ".concat(e)}},x={login:function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("/api/login",t);case 2:return n=e.sent,console.log("BODY IS HERE"),console.log(n.data),e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(""),c=Object(u.a)(o,2),p=(c[0],c[1],Object(r.useState)("")),O=Object(u.a)(p,2),h=O[0],f=O[1],m=Object(r.useState)(""),w=Object(u.a)(m,2),S=w[0],k=w[1],y=Object(r.useState)(null),U=Object(u.a)(y,2),A=U[0],B=U[1],I=Object(r.useState)(""),T=Object(u.a)(I,2),C=T[0],E=T[1],L=Object(r.useState)(""),J=Object(u.a)(L,2),D=J[0],N=J[1],z=Object(r.useState)(""),P=Object(u.a)(z,2),R=P[0],G=P[1],H=Object(r.useState)(""),V=Object(u.a)(H,2),Y=V[0],q=V[1],F=Object(r.useState)(""),K=Object(u.a)(F,2),M=K[0],Q=K[1];Object(r.useEffect)((function(){v.getAll().then((function(e){return a(e)}))}),[]),Object(r.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogAppUser");if(e){var t=JSON.parse(e);B(t),v.setToken(t.token)}}),[]);var W=function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("logging in with ".concat(h," ").concat(S)),e.prev=2,e.next=5,x.login({username:h,password:S});case 5:n=e.sent,console.log("UUUUSERI"),console.log(n),window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(n)),v.setToken(n.token),B(n),f(""),k(""),e.next=22;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0),console.log("missing or invalid credentials"),Q("neg"),q("missing or invalid credentials"),setTimeout((function(){q("")}),5e3);case 22:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(i.a)(s.a.mark((function e(t){var r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r={title:C,author:D,url:R},console.log("LIS\xc4TT\xc4V\xc4 BLOGI"),console.log(r),e.next=6,v.create(r);case 6:o=e.sent,console.log("returned blogi"),console.log(o),a(n.concat(o)),E(""),N(""),G("");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"BlogApp"}),""!==Y&&Object(l.jsx)(d,{notification:Y,tone:M}),null===A?Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Login to application"}),Object(l.jsx)(b,{handleLogin:W,username:h,password:S,setUsername:f,setPassword:k})]}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"blogs"}),Object(l.jsxs)("p",{children:[A.name," is logged in",Object(l.jsx)("button",{onClick:function(e){window.localStorage.removeItem("loggedBlogAppUser"),B(null)},children:"Log out"})]}),Object(l.jsx)("h2",{children:"create new"}),Object(l.jsx)(g,{title:C,author:D,url:R,setTitle:E,setAuthor:N,setUrl:G,addBlog:X}),n.map((function(e){return Object(l.jsx)(j,{blog:e},e.id)}))]})]})};n(41);o.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.10a92563.chunk.js.map