(function(t){function e(e){for(var s,n,i=e[0],l=e[1],c=e[2],m=0,d=[];m<i.length;m++)n=i[m],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/blog/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"231e":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("link",{attrs:{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",integrity:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",crossorigin:"anonymous"}}),a("Navbar"),a("main",{staticClass:"py-4"},[a("router-view")],1)],1)},o=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-md navbar-light navbar-laravel"},[a("div",{staticClass:"container"},[t.user.loggedIn?a("router-link",{staticClass:"navbar-brand",attrs:{to:"/posts"}},[t._v("Leskhantos Blog")]):a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Leskhantos Blog")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav mr-auto"}),a("ul",{staticClass:"navbar-nav ml-auto"},[t.user.loggedIn?[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/create-post"}},[t._v("Создать пост")])],1),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",on:{click:function(e){return e.preventDefault(),t.signOut(e)}}},[t._v("Выйти")])])]:[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Войти")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"register"}},[t._v("Регистрация")])],1)]],2)])],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":""}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=(a("ac1f"),a("5319"),a("5530")),c=a("2f62"),u=a("8aa5"),m=a.n(u),d={computed:Object(l["a"])({},Object(c["b"])({user:"user"})),methods:{signOut:function(){var t=this;m.a.auth().signOut().then((function(){t.$router.replace({name:"index"})}))}}},f=d,p=a("2877"),v=Object(p["a"])(f,n,i,!1,null,null,null),b=v.exports,g={components:{Navbar:b}},h=g,C=Object(p["a"])(h,r,o,!1,null,null,null),_=C.exports,w=a("8c4f"),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("Вход")]),a("div",{staticClass:"card-body"},[t.error?a("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.error))]):t._e(),a("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"email"}},[t._v("Email")]),a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{id:"email",type:"email",name:"email",value:"",required:"",autofocus:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password"}},[t._v("Пароль")]),a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{id:"password",type:"password",name:"password",required:""},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})])]),t._m(0)])])])])])])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group row mb-0"},[a("div",{staticClass:"col-md-8 offset-md-4"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Войти")])])])}],O={data:function(){return{form:{email:"",password:""},error:null}},methods:{submit:function(){var t=this;m.a.auth().signInWithEmailAndPassword(this.form.email,this.form.password).then((function(){t.$router.push({name:"posts"})})).catch((function(e){t.error=e.message}))}}},j=O,E=Object(p["a"])(j,x,y,!1,null,null,null),k=E.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("Register")]),a("div",{staticClass:"card-body"},[t.error?a("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.error))]):t._e(),a("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"name"}},[t._v("Имя")]),a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{id:"name",type:"name",name:"name",value:"",required:"",autofocus:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"email"}},[t._v("Email")]),a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{id:"email",type:"email",name:"email",value:"",required:"",autofocus:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password"}},[t._v("Пароль")]),a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{id:"password",type:"password",name:"password",required:""},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})])]),t._m(0)])])])])])])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group row mb-0"},[a("div",{staticClass:"col-md-8 offset-md-4"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Зарегистрироваться")])])])}],P=(a("b0c0"),{data:function(){return{form:{name:"",email:"",password:""},error:null}},methods:{submit:function(){var t=this;m.a.auth().createUserWithEmailAndPassword(this.form.email,this.form.password).then((function(e){e.user.updateProfile({displayName:t.form.name}).then((function(){t.$router.push("/posts")}))})).catch((function(e){t.error=e.message}))}}}),N=P,q=Object(p["a"])(N,S,$,!1,null,null,null),I=q.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.user?a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[t.posts.length?a("div",{staticClass:"col-md-8"},t._l(t.posts,(function(e){return a("div",{key:e.id,staticClass:"card",style:{borderBottom:"3px solid rgba(0,0,0,.1)",marginBottom:"2rem"}},[a("div",{staticClass:"card-header"},[t._v(t._s(e.title))]),a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text"},[t._v(t._s(e.text))])]),a("div",{staticClass:"card-footer text-muted"},[t._v(" "+t._s(t.dateFormat(e.createdAt))+" ")])])})),0):a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v(" Нет записи ")]),t._m(0)])])]):t._e()},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body"},[a("blockquote",{staticClass:"blockquote mb-0"},[a("p",[t._v("Прошу создайте запись")]),a("footer",{staticClass:"blockquote-footer"},[a("cite",{attrs:{title:"Source Title"}},[t._v("p.s. Спасибо")])])])])}],G=(a("4160"),a("159b"),{computed:Object(l["a"])({},Object(c["b"])({user:"user"})),data:function(){return{posts:[]}},methods:{getData:function(){var t=m.a.firestore().collection("posts"),e=[];t.get().then((function(t){t.forEach((function(t){e.push(t.data()),console.log(t.id,"=>",t.data())}))})).catch((function(t){console.log("Error getting documents",t)})),this.posts=e},dateFormat:function(t){return t=new Date,t.toLocaleString()}},mounted:function(){this.getData()}}),A=G,M=Object(p["a"])(A,T,D,!1,null,null,null),B=M.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.createPost(e)}}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.success,expression:"success"}],staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v(" Добавлено ")]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"title"}},[t._v("Тема")]),a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"form-control",attrs:{id:"title",type:"text",name:"title",value:"",required:"",autofocus:""},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"text"}},[t._v("Текст")]),a("div",{staticClass:"col-md-6"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.text,expression:"form.text"}],staticClass:"form-control",attrs:{id:"text",name:"textarea",required:""},domProps:{value:t.form.text},on:{input:function(e){e.target.composing||t.$set(t.form,"text",e.target.value)}}})])]),t._m(0)])},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group row mb-0"},[a("div",{staticClass:"col-md-8 offset-md-4"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Опубликовать")])])])}],R={computed:Object(l["a"])({},Object(c["b"])({user:"user"})),data:function(){return{form:{title:"",text:""},success:!1}},methods:{createPost:function(){var t=this,e=m.a.firestore().collection("posts");e.add({createdAt:new Date,title:this.form.title,text:this.form.text}).then((function(){t.form.title="",t.form.text="",t.success=!0,t.$router.push("posts")})).catch((function(){console.log("err")}))}}},F=R,W=(a("969f"),Object(p["a"])(F,U,L,!1,null,"6a4e3698",null)),Y=W.exports;s["a"].use(w["a"]);var z=new w["a"]({mode:"history",base:"/blog/",routes:[{path:"/",name:"index",component:k},{path:"/register",name:"Register",component:I},{path:"/posts",name:"posts",component:B},{path:"/create-post",name:"create-post",component:Y}]}),J=z;s["a"].use(c["a"]);var K=new c["a"].Store({state:{user:{loggedIn:!1,data:null}},getters:{user:function(t){return t.user}},mutations:{SET_LOGGED_IN:function(t,e){t.user.loggedIn=e},SET_USER:function(t,e){t.user.data=e},SET_POSTS:function(t,e){t.posts=e}},actions:{fetchUser:function(t,e){var a=t.commit;a("SET_LOGGED_IN",null!==e),a("SET_USER",e?{displayName:e.displayName,email:e.email}:null)}}});a("e71f");s["a"].config.productionTip=!1;var Q={apiKey:"AIzaSyCCsq8Y95GGZ9B9j_MgdwMYq0W6YGMUXRA",authDomain:"blog-87b92.firebaseapp.com",databaseURL:"https://blog-87b92.firebaseio.com",projectId:"blog-87b92",storageBucket:"blog-87b92.appspot.com",messagingSenderId:"426891010188",appId:"1:426891010188:web:14ea5137877edc117b5ba9"};m.a.initializeApp(Q),m.a.auth().onAuthStateChanged((function(t){K.dispatch("fetchUser",t)})),new s["a"]({router:J,store:K,render:function(t){return t(_)}}).$mount("#app")},"969f":function(t,e,a){"use strict";var s=a("231e"),r=a.n(s);r.a}});
//# sourceMappingURL=app.f24ea10f.js.map