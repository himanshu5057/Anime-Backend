(this.webpackJsonpanime=this.webpackJsonpanime||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(11),r=a.n(s),i=(a(80),a(81),a(12)),o=a.n(i),l=a(18),u=a(9),j=a(13),d=a(23),b=a.n(d),f=a(62),h=a.n(f),O=a(2);h.a.config();var p,x=c.a.createContext(),m="http://localhost:8080";var v=function(e){var t=e.children;console.log(m);var a=Object(n.useState)(),c=Object(u.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)(!0),d=Object(u.a)(i,2),f=d[0],h=d[1],v=Object(j.f)();function g(){return(g=Object(l.a)(o.a.mark((function e(t,a,n){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("".concat(m,"/register"),{username:t,email:a,password:n});case 3:return c=e.sent,p=c.data.id,console.log(p),r(p),localStorage.setItem("currentUser",p),e.abrupt("return",c);case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function w(){return(w=Object(l.a)(o.a.mark((function e(t,a){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("".concat(m,"/login"),{email:t,password:a});case 3:return n=e.sent,console.log(n),p=n.data.id,localStorage.setItem("currentUser",p),r(p),e.abrupt("return",n);case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function S(){return(S=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.push("login"),r(),localStorage.setItem("currentUser","");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){var e=localStorage.getItem("currentUser");r(e),h(!1)}),[]);var y={currentUser:s,login:function(e,t){return w.apply(this,arguments)},register:function(e,t,a){return g.apply(this,arguments)},logout:function(){return S.apply(this,arguments)}};return Object(O.jsx)("div",{children:Object(O.jsx)(x.Provider,{value:y,children:!f&&t})})},g=a(138),w=a(143),S=a(144),y=(a(61),Object(g.a)((function(e){return{mar:{margin:"10px"},signup:{display:"flex",flexDirection:"row"}}})));var N=function(){var e=y(),t=Object(j.f)(),a=Object(n.useState)(!1),c=Object(u.a)(a,2),s=(c[0],c[1]),r=Object(n.useState)(),i=Object(u.a)(r,2),d=(i[0],i[1]),b=Object(n.useState)(),f=Object(u.a)(b,2),h=f[0],p=f[1],m=Object(n.useState)(),v=Object(u.a)(m,2),g=v[0],N=v[1],k=Object(n.useContext)(x),C=k.login,_=k.currentUser,E=function(){var e=Object(l.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,C(h,g);case 3:a=e.sent,s(!1),localStorage.setItem("username",a.data.username),console.log(a),a.data.result?t.push("/"):(d(a.data.message),setTimeout((function(){d("")}),3e3));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){console.log(_),_&&t.push("/")}),[]),Object(O.jsx)("div",{className:"root",children:Object(O.jsxs)("div",{className:"register",children:[Object(O.jsx)("h2",{children:"Anime"}),Object(O.jsxs)("form",{className:"form1",children:[Object(O.jsx)(w.a,{id:"email",label:"Email",variant:"outlined",onChange:function(e){p(e.target.value)}}),Object(O.jsx)("div",{className:e.mar}),Object(O.jsx)(w.a,{id:"password",label:"Password",type:"password",variant:"outlined",onChange:function(e){N(e.target.value)}})]}),Object(O.jsx)("div",{className:e.mar}),Object(O.jsx)(S.a,{onSubmit:E,onClick:E,variant:"outlined",color:"secondary",children:"Login"}),Object(O.jsxs)("div",{className:e.signup,children:[Object(O.jsx)("h5",{children:"Don't have an account?"}),Object(O.jsx)("h5",{onClick:function(){t.push("/register")},style:{color:"blue",paddingLeft:"5px",cursor:"pointer"},children:"Sign Up"})]})]})})},k=Object(g.a)((function(e){return{mar:{margin:"10px"},signin:{display:"flex",flexDirection:"row"}}}));var C=function(){var e=k(),t=Object(j.f)(),a=Object(n.useState)(!1),c=Object(u.a)(a,2),s=(c[0],c[1]),r=Object(n.useState)(),i=Object(u.a)(r,2),d=(i[0],i[1]),b=Object(n.useState)(),f=Object(u.a)(b,2),h=f[0],p=f[1],m=Object(n.useState)(),v=Object(u.a)(m,2),g=v[0],y=v[1],N=Object(n.useState)(),C=Object(u.a)(N,2),_=C[0],E=C[1],I=Object(n.useContext)(x),D=I.register,z=I.currentUser,U=function(){var e=Object(l.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,D(h,g,_);case 3:a=e.sent,console.log(a.data),s(!1),a.data.result?(localStorage.setItem("username",a.data.username),t.push("/")):(d(a.data.message),setTimeout((function(){d("")}),3e3));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){console.log(z),z&&t.push("/")}),[]),Object(O.jsx)("div",{className:"root",children:Object(O.jsxs)("div",{className:"register",children:[Object(O.jsx)("h2",{children:"Anime"}),Object(O.jsxs)("form",{className:"form1",onSubmit:U,children:[Object(O.jsx)(w.a,{id:"username",label:"Username",variant:"outlined",onChange:function(e){p(e.target.value)}}),Object(O.jsx)("div",{className:e.mar}),Object(O.jsx)(w.a,{id:"email",label:"Email",variant:"outlined",onChange:function(e){y(e.target.value)}}),Object(O.jsx)("div",{className:e.mar}),Object(O.jsx)(w.a,{id:"password",label:"Password",type:"password",variant:"outlined",onChange:function(e){E(e.target.value)}})]}),Object(O.jsx)("div",{className:e.mar}),Object(O.jsx)(S.a,{onSubmit:U,onClick:U,variant:"outlined",color:"secondary",children:"Register"}),Object(O.jsxs)("div",{className:e.signin,children:[Object(O.jsx)("h5",{children:"Already have an account?"}),Object(O.jsx)("h5",{onClick:function(){t.push("/login")},style:{color:"blue",paddingLeft:"5px",cursor:"pointer"},children:"Sign In"})]})]})})},_=a(50),E=a(142),I=a(145);Object(g.a)((function(e){return{}}));var D=function(e){var t=Object(n.useState)(e.location.state),a=Object(u.a)(t,2),c=a[0];a[1],console.log(e);var s=Object(n.useState)([]),r=Object(u.a)(s,2),i=r[0],j=r[1],d=Object(n.useState)(!1),f=Object(u.a)(d,2),h=f[0],p=f[1],x=Object(n.useState)(0),m=Object(u.a)(x,2),v=m[0],g=m[1],y=Object(n.useState)(""),N=Object(u.a)(y,2),k=N[0],C=N[1],_=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(t,"/anime/getReviews"),e.next=3,b.a.post("".concat(t),{anime_id:c.id});case 3:null!=(a=e.sent)&&j(a.data.review),p(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,n,s,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("http://localhost:8080","/anime/addReview"),console.log(c.id),a=localStorage.getItem("username"),console.log(a),n={username:a,rating:v,comment:k,anime_id:c.id.toString()},e.next=7,b.a.post("".concat(t),n);case 7:s=e.sent,r=i,null==s.data&&200!=s.status||(r.push(n),j(r),console.log(i)),C(""),g(0),console.log(s);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){E()}),[i]),Object(O.jsxs)("div",{className:"animeNewPage",children:[Object(O.jsxs)("div",{className:"description",children:[Object(O.jsx)("h1",{children:e.location.state.titles.en}),Object(O.jsx)("img",{src:e.location.state.banner_image,height:"50%",width:"90%",style:{alignText:"center"}}),Object(O.jsx)("div",{children:e.location.state.descriptions.en}),Object(O.jsxs)("div",{children:["Genres:","  "," ",c.genres.join(", ")]}),Object(O.jsxs)("div",{children:["Trailer Link:"," ",c.trailer_url?Object(O.jsx)(I.a,{href:c.trailer_url,target:"_blank",children:"Link"}):"NA"]}),Object(O.jsxs)("div",{children:["Start Date: ",c.start_date.substring(0,10)," | "," End Date: ",c.end_date.substring(0,10)]}),Object(O.jsxs)("div",{children:["Season Year: ",c.season_year," "," | "," Episodes: ",c.episodes_count]})]}),Object(O.jsx)("div",{className:"reviews",children:0==h?Object(O.jsx)(S.a,{size:"large",variant:"contained",color:"primary",onClick:_,children:"Show Reviews"}):Object(O.jsxs)("div",{className:"all-add-review",children:[Object(O.jsxs)("div",{className:"addReview",children:[Object(O.jsx)(w.a,{id:"Review",label:"Review",variant:"outlined",value:k,fullWidth:!0,onChange:function(e){var t=e.target.value;t=t.trim(),C(t)}}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{class:"fa fa-star  ".concat(v>=1?"checked":""),onClick:function(){g(1)}}),Object(O.jsx)("span",{class:"fa fa-star  ".concat(v>=2?"checked":""),onClick:function(){g(2)}}),Object(O.jsx)("span",{class:"fa fa-star  ".concat(v>=3?"checked":""),onClick:function(){g(3)}}),Object(O.jsx)("span",{class:"fa fa-star  ".concat(v>=4?"checked":""),onClick:function(){g(4)}}),Object(O.jsx)("span",{class:"fa fa-star  ".concat(v>=5?"checked":""),onClick:function(){g(5)}})]}),Object(O.jsx)(S.a,{size:"large",variant:"contained",color:"primary",onClick:E,children:"Add"})]}),Object(O.jsx)("div",{className:"allReviews",children:Object(O.jsxs)("table",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Username"}),Object(O.jsx)("th",{children:"Comment"}),Object(O.jsx)("th",{children:"Rating"})]}),null==i||0==i.length?Object(O.jsx)("div",{children:"No reviews found"}):i.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.username}),Object(O.jsx)("td",{children:e.comment}),Object(O.jsx)("td",{children:e.rating})]})}))]})})]})})]})},z=Object(g.a)((function(e){return{margin:{margin:e.spacing(1)},logout:{position:"absolute",right:"20px",top:"10px"},row:{display:"flex",flexDirection:"row"},searchBar:{display:"flex",flexDirection:"row",width:"100vw",justifyContent:"center"},sizedBox:{width:"20px",height:"20px"},cover:{width:151}}}));var U=function(){var e=Object(j.f)(),t=z(),a=Object(n.useContext)(x),c=a.currentUser,s=(a.logout,Object(n.useState)("")),r=Object(u.a)(s,2),i=r[0],d=r[1],f=Object(n.useState)(""),h=Object(u.a)(f,2),p=h[0],m=h[1],v=Object(n.useState)(!1),g=Object(u.a)(v,2),y=(g[0],g[1],Object(n.useState)("")),N=Object(u.a)(y,2),k=(N[0],N[1]),C=Object(n.useState)(""),D=Object(u.a)(C,2),U=(D[0],D[1],Object(n.useState)([])),R=Object(u.a)(U,2),T=R[0],L=R[1];Object(n.useEffect)((function(){c||e.push("/login")}),[]),Object(n.useEffect)((function(){null!=localStorage.getItem("anime")&&L(JSON.parse(localStorage.getItem("anime")))}),[]);var P=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("https://api.aniapi.com/v1/anime",t="",""==i&&""==p||(""!=i&&""!=p?t+="?title=".concat(i,"&genres=").concat(p):""!=i?t+="?title=".concat(i):""!=p&&(t+="?genres=".concat(p))),0==i.length&&0==p.length){e.next=9;break}return e.next=6,b.a.get("".concat("https://api.aniapi.com/v1/anime").concat(t));case 6:a=e.sent,e.next=10;break;case 9:null==a?k("Please enter Title or Genre for better result"):404==a.data.status_code&&(a="No data found for your search, Please edit title or genre for better result");case 10:if(null==a||"string"==typeof a||200!=a.data.status_code){e.next=12;break}return e.delegateYield(o.a.mark((function e(){var t,n,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(k(""),t=[],n=[],"http://localhost:8080",c=function(e){n.push(b.a.post("".concat("http://localhost:8080","/anime/getReviews"),{anime_id:a.data.data.documents[e].id.toString()}).then((function(n){t.push(Object(_.a)(Object(_.a)({},a.data.data.documents[e]),{},{rating:n.data.rating}))})).catch((function(e){return console.log("Error occured")})))},s=0;s<a.data.data.documents.length;s++)c(s);return e.next=8,Promise.allSettled(n);case 8:L(t),console.log(0),console.log(t[0]),localStorage.setItem("anime",JSON.stringify(t));case 12:case"end":return e.stop()}}),e)}))(),"t0",12);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(e){var t=e.value,a=(e.text,e.color);return Object(O.jsxs)("div",{className:"rating",children:[Object(O.jsx)("span",{children:Object(O.jsx)("i",{style:{color:a},className:t>=1?"fas fa-star":t>=.5?"fas fa-star-half-alt":"far fa-star"})}),Object(O.jsx)("span",{children:Object(O.jsx)("i",{style:{color:a},className:t>=2?"fas fa-star":t>=1.5?"fas fa-star-half-alt":"far fa-star"})}),Object(O.jsx)("span",{children:Object(O.jsx)("i",{style:{color:a},className:t>=3?"fas fa-star":t>=2.5?"fas fa-star-half-alt":"far fa-star"})}),Object(O.jsx)("span",{children:Object(O.jsx)("i",{style:{color:a},className:t>=4?"fas fa-star":t>=3.5?"fas fa-star-half-alt":"far fa-star"})}),Object(O.jsx)("span",{children:Object(O.jsx)("i",{style:{color:a},className:t>=5?"fas fa-star":t>=4.5?"fas fa-star-half-alt":"far fa-star"})})]})};return Object(O.jsxs)("div",{className:"main",children:[Object(O.jsx)("div",{className:"searchBar",children:Object(O.jsxs)("form",{className:"form",children:[Object(O.jsx)(w.a,{id:"Title",label:"Title",variant:"outlined",onChange:function(e){var t=e.target.value;t=(t=t.trim()).replace(" ","%20"),d(t)}}),Object(O.jsx)("div",{className:t.sizedBox}),Object(O.jsx)(w.a,{id:"Genre",label:"Genre",variant:"outlined",onChange:function(e){m(e.target.value.trim())}})," ",Object(O.jsx)("div",{className:t.sizedBox}),Object(O.jsx)("div",{className:t.sizedBox}),Object(O.jsx)(S.a,{className:t.margin,size:"large",variant:"contained",color:"primary",onClick:P,children:"Search"})]})}),Object(O.jsx)("div",{className:"animeData",children:T.map((function(t){return Object(O.jsx)("div",{className:"anime",children:Object(O.jsxs)(E.a,{className:"animeCard",onClick:function(){return e.push({pathname:"/animeDesc",state:t})},children:[Object(O.jsx)("img",{src:t.cover_image,alt:"",width:"91.97",height:"151",onClick:void 0}),Object(O.jsxs)("div",{className:"animeDes",children:[Object(O.jsxs)("div",{style:{fontWeight:"bold"},children:[t.titles.en,"  ",Object(O.jsxs)("div",{children:[" ",B({value:t.rating,text:" ",color:"orange"})]})]}),Object(O.jsxs)("div",{style:{fontSize:"10px"},children:[t.descriptions.en.substring(0,200)," "]}),Object(O.jsxs)("div",{style:{fontSize:"13px"},children:["Trailer Link:"," ",t.trailer_url?Object(O.jsx)(I.a,{href:t.trailer_url,target:"_blank",children:"Link"}):"NA"]}),Object(O.jsxs)("div",{style:{fontSize:"13px"},children:["Season Year: ",t.season_year," "," | "," Episodes:"," ",t.episodes_count]}),Object(O.jsxs)("div",{style:{fontSize:"13px"},children:["Genres ",t.genres.slice(0,5).join(", ")]})]})]})})}))})]})},R=a(26);var T=function(){return Object(O.jsx)(R.a,{children:Object(O.jsx)(v,{children:Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{exact:!0,path:"/",component:U}),Object(O.jsx)(j.a,{path:"/login",component:N}),Object(O.jsx)(j.a,{path:"/register",component:C}),Object(O.jsx)(j.a,{path:"/animeDesc",component:D})]})})})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,147)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(T,{})}),document.getElementById("root")),L()},61:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){}},[[109,1,2]]]);
//# sourceMappingURL=main.e92d99cd.chunk.js.map