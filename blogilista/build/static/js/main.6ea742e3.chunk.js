(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(9),s=n.n(c),a=n(5),i=n(2),u=n.n(i),l=n(3),d=n(7),p=n.n(d),f="/api/blogs",b=null,j={getAll:function(){var e={headers:{Authorization:b}};return p.a.get(f,e).then((function(e){return e.data}))},create:function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:b}},e.next=3,p.a.post(f,t,n);case 3:return r=e.sent,console.log("response in axios"),console.log(r),console.log(r.data),e.abrupt("return",r.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){b="bearer ".concat(e)},change:function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:b}},console.log(t),e.next=4,p.a.put("".concat(f,"/").concat(t.id),t,n);case 4:return r=e.sent,console.log("response in axios"),console.log(r),console.log(r.data),e.abrupt("return",r.data);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:b}},e.next=3,p.a.delete("".concat(f,"/").concat(t),n);case 3:r=e.sent,console.log("response in axios"),console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"pos",t=arguments.length>1?arguments[1]:void 0;switch(console.log("the tone state is:"),console.log(e),t.type){case"POS_TONE":return"pos";case"NEG_TONE":return"neg";default:return e}},O=function(e){return console.log("notification to be added"),console.log(e),function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"ADD_NOTIFICATION",notification:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"DROP_NOTIFICATION"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(console.log("the notification state is:"),console.log(e),console.log(t.notification),t.type){case"ADD_NOTIFICATION":return t.notification;case"DROP_NOTIFICATION":return"";default:return e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BLOG":return e.concat(t.newBlog);case"REMOVE_BLOG":return e.filter((function(e){return e.id!==t.id}));case"CHANGE_BLOG":return e.map((function(e){return e.id!==t.changedBlog.id?e:t.changedBlog}));case"INIT_BLOGS":return t.data;default:return e}},m={login:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("/api/login",t);case 2:return n=e.sent,console.log("BODY IS HERE"),console.log(n.data),e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.login(e);case 2:r=t.sent,console.log("UUUUSERI"),console.log(r),window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(r)),j.setToken(r.token),console.log("tokenin asetus onnistuu"),console.log("kaikki onnistuu"),n({type:"ADD_USER",user:r});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_USER":case"ADD_LOGGED_USER":return t.user;case"REMOVE_USER":return null;default:return e}},E=n(10),k=n(1),S=function(e){var t=e.blog,n=Object(r.useState)((function(e){return e.user})),o=Object(r.useState)(""),c=Object(E.a)(o,2),s=c[0],a=c[1],i={display:s?"none":""},u={display:s?"":"none"},l=function(){a(!s)};console.log("K\xe4ytt\xe4j\xe4t BLOGissa"),console.log(t),console.log(t.user),console.log(t.user.username),console.log(n.name);var d={background:"blue",color:"white",display:t.user.username===n.name?"":"none"};return Object(k.jsxs)("li",{id:"blog-info",style:{paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5},children:[Object(k.jsxs)("table",{style:i,className:"defaultView",children:[Object(k.jsxs)("tr",{children:[t.title," ",Object(k.jsx)("button",{onClick:l,children:"view"})]}),Object(k.jsx)("tr",{children:t.author})]}),Object(k.jsxs)("table",{style:u,className:"allView",children:[Object(k.jsxs)("tr",{children:[t.title," ",Object(k.jsx)("button",{onClick:l,children:"view"})]}),Object(k.jsx)("tr",{children:t.url}),Object(k.jsxs)("tr",{children:[t.likes," ",Object(k.jsx)("button",{id:"like-button",onClick:function(){var e={user:t.user.id,likes:t.likes+1,author:t.author,title:t.title,url:t.url};t.id,console.log(e)},children:"like"})]}),Object(k.jsx)("tr",{children:t.author}),Object(k.jsx)("tr",{children:Object(k.jsx)("button",{onClick:function(){window.confirm('Remove blog "'.concat(t.title,'" by ').concat(t.author,"?"))&&t.id},style:d,children:"remove"})})]})]})},D=function(){var e=Object(r.useState)((function(e){return e.blogs}));return Object(k.jsxs)("div",{children:[Object(k.jsx)("h2",{children:"blogs"}),Object(k.jsx)("ul",{children:e.sort((function(e,t){return t.likes-e.likes})).map((function(e){return Object(k.jsx)(S,{blog:e},e.id)}))})]})},A=n(8),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PASSWORD":return Object(A.a)(Object(A.a)({},e),{},{password:t.password});case"ADD_USERNAME":return Object(A.a)(Object(A.a)({},e),{},{username:t.username});case"RESET_CREDENTIALS":return{username:"",password:""};default:return e}},R=function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.credentials.username})),n=Object(a.c)((function(e){return e.credentials.password})),r=function(){var r=Object(l.a)(u.a.mark((function r(o){return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:o.preventDefault(),console.log("logging in with ".concat(t," ").concat(n));try{e(w({username:t,password:n})),e({type:"RESET_CREDENTIALS"})}catch(c){console.log(c),console.log("missing or invalid credentials"),e(function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"NEG_TONE"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(O("missing or invalid credentials")),setTimeout((function(){e(h())}),5e3)}case 3:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return Object(k.jsxs)("div",{children:[Object(k.jsx)("h2",{children:"Login to application"}),Object(k.jsxs)("form",{id:"login-form",onSubmit:r,children:[Object(k.jsxs)("div",{children:["username",Object(k.jsx)("input",{id:"username",value:t,name:"Username",onChange:function(t){var n=t.target;return e(function(e){return{type:"ADD_USERNAME",username:e}}(n.value))}})]}),Object(k.jsxs)("div",{children:["password",Object(k.jsx)("input",{id:"password",type:"password",value:n,name:"Username",onChange:function(t){var n=t.target;return e(function(e){return{type:"ADD_PASSWORD",password:e}}(n.value))}})]}),Object(k.jsx)("button",{type:"submit",children:"login"})]})]})},N=function(){console.log("in notification comp");var e=Object(a.c)((function(e){return e.notification})),t=Object(a.c)((function(e){return e.tone}));console.log(e),console.log(t);var n={color:"pos"===t?"green":"red",background:"lightgrey",display:""!==e?"":"none"};return Object(k.jsx)("h2",{style:n,children:e})},_=o.a.forwardRef((function(e,t){var n=Object(r.useState)(!1),o=Object(E.a)(n,2),c=o[0],s=o[1],a={display:c?"none":""},i={display:c?"":"none"},u=function(){s(!c)};return Object(r.useImperativeHandle)(t,(function(){return{toggleVisibility:u}})),Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{style:a,children:Object(k.jsx)("button",{onClick:u,children:e.buttonLabel})}),Object(k.jsxs)("div",{style:i,children:[e.children,Object(k.jsx)("button",{onClick:u,children:"cancel"})]})]})}));_.displayName="Togglable";var T=_,U=function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.user}));Object(r.useEffect)((function(){console.log("Initializing blogs!"),e(function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.getAll();case 2:n=e.sent,t({type:"INIT BLOGS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(r.useEffect)((function(){var t=window.localStorage.getItem("loggedBlogAppUser");if(console.log("tulostuuko t\xe4m\xe4??"),console.log(t),t){var n=JSON.parse(t);console.log("t\xe4m\xe4 tulostuu"),console.log(n),e(function(e){return{type:"ADD_LOGGED_USER",user:e}}(n)),j.setToken(n.token)}}),[e]);return console.log("UUUUSSSERRRIII"),console.log(t),Object(k.jsxs)("div",{children:[Object(k.jsx)("h1",{children:"BlogApp"}),Object(k.jsx)(N,{}),null===t?Object(k.jsx)(T,{buttonLabel:"Login",children:Object(k.jsx)(R,{})}):Object(k.jsxs)("div",{children:[Object(k.jsxs)("p",{children:[t.name," is logged in",Object(k.jsx)("button",{onClick:function(t){t.preventDefault(),window.localStorage.removeItem("loggedBlogAppUser"),e({type:"REMOVE_USER"})},children:"Log out"})]}),Object(k.jsx)(D,{})]})]})},B=(n(56),n(6)),C=n(24),L=n(25),G=Object(B.combineReducers)({notification:v,tone:g,credentials:I,user:y,blogs:x}),M=Object(B.createStore)(G,Object(C.composeWithDevTools)(Object(B.applyMiddleware)(L.a)));s.a.render(Object(k.jsx)(a.a,{store:M,children:Object(k.jsx)(U,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.6ea742e3.chunk.js.map