(function(e){function t(t){for(var n,s,u=t[0],c=t[1],i=t[2],l=0,d=[];l<u.length;l++)s=u[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var p=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"008e":function(e,t,r){"use strict";var n=r("2297"),a=r.n(n);a.a},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},1391:function(e,t,r){"use strict";var n=r("61b0"),a=r.n(n);a.a},2297:function(e,t,r){},3891:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e._m(0),r("span",[e._v("A Message Board App")]),r("PostList")],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("img",{attrs:{alt:"Vue logo",src:r("b130")}})])}],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"PostList"},[r("PostInput",{on:{update:function(t){return e.update()}}}),e.posts.length?r("section",e._l(e.posts.slice().reverse(),(function(t){return r("PostBlock",{key:t._id,attrs:{post:t},on:{update:function(t){return e.update()}}})})),1):e.error?r("section",[r("span",[e._v(" Error : "+e._s(e.errorText))])]):e.loading?r("section",[r("span",[e._v(e._s(e.loadingText))])]):r("section",[r("span",[e._v("It's nothing here. Type to post the first post.")])])],1)},u=[],c=(r("96cf"),r("1da1")),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"PostBlock"},[r("div",{staticClass:"PostHead"},[r("span",[e._v(e._s(e.post.username))]),r("div",[r("span",[e._v(e._s(e.post.date))]),r("div",{staticClass:"cross",on:{click:function(t){return e.delPost()}}})])]),r("hr"),r("p",[e._v(e._s(e.post.article))])])},p=[],l=r("d4ec"),d=r("bee2"),f=r("bc3a"),v=r.n(f),m="",h=function(){function e(){Object(l["a"])(this,e)}return Object(d["a"])(e,null,[{key:"getPost",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get(m+"api/posts/");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e["catch"](0),e.t0.response.data;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"addPost",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.post(m+"api/posts/",t);case 3:return e.abrupt("return");case 6:throw e.prev=6,e.t0=e["catch"](0),e.t0.response.data;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"delPost",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.delete(m+"api/posts/"+t);case 3:return e.abrupt("return");case 6:throw e.prev=6,e.t0=e["catch"](0),e.t0.response.data;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),g=h,b={name:"PostBlock",props:{post:{type:Object,required:!0}},methods:{delPost:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.delPost(e.post._id);case 2:return e.$emit("update"),t.abrupt("return");case 4:case"end":return t.stop()}}),t)})))()}}},y=b,w=(r("dc06"),r("2877")),x=Object(w["a"])(y,i,p,!1,null,"6b73b94d",null),_=x.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"PostInput"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"Type Your Name"},domProps:{value:e.username},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addPost()},input:function(t){t.target.composing||(e.username=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.article,expression:"article"}],attrs:{type:"text",placeholder:"Say Something"},domProps:{value:e.article},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addPost()},input:function(t){t.target.composing||(e.article=t.target.value)}}})])},k=[],O={name:"PostInput",data:function(){return{username:"",article:""}},methods:{addPost:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.username&&e.article){t.next=2;break}return t.abrupt("return");case 2:return r={username:e.username,article:e.article},e.username="",e.article="",t.next=7,g.addPost(r);case 7:return e.$emit("update"),t.abrupt("return");case 9:case"end":return t.stop()}}),t)})))()}}},j=O,R=(r("1391"),Object(w["a"])(j,P,k,!1,null,"6ea166ff",null)),T=R.exports,E={name:"PostList",components:{PostBlock:_,PostInput:T},data:function(){return{loadingText:"Loading the posts...",loading:1,error:0,errorText:"",posts:[]}},methods:{update:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.getPost();case 3:r=t.sent,e.posts=r,t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](0),e.errorText=t.t0,e.error=1;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.update();case 2:setInterval(e.update.bind(e),3e3),e.loading=0;case 4:case"end":return t.stop()}}),t)})))()}},$=E,C=(r("008e"),Object(w["a"])($,s,u,!1,null,"906401b8",null)),S=C.exports,I={name:"App",components:{PostList:S}},B=I,L=(r("034f"),Object(w["a"])(B,a,o,!1,null,null,null)),M=L.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(M)}}).$mount("#app")},"61b0":function(e,t,r){},"85ec":function(e,t,r){},b130:function(e,t,r){e.exports=r.p+"img/nodejslogo.6dcf6999.png"},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},dc06:function(e,t,r){"use strict";var n=r("3891"),a=r.n(n);a.a}});
//# sourceMappingURL=app.c2aa9c03.js.map