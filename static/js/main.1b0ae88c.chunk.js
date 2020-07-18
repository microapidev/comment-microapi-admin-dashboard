(this["webpackJsonptest-admin"]=this["webpackJsonptest-admin"]||[]).push([[0],{326:function(e,t,n){e.exports=n(466)},466:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o),i=n(553),s=n(552),u=n(528),l=n(530),m=n(531),d=function(){return r.a.createElement(u.a,null,r.a.createElement(l.a,{title:"Welcome to Admin Dashboard"}),r.a.createElement(m.a,null,"This is the dashboard area"))},f=n(189),h=n.n(f),v=n(257),E={login:function(){var e=Object(v.a)(h.a.mark((function e(t){var n,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,r=new Request("https://comments-microservice.herokuapp.com/v1/msadmins/login",{method:"POST",body:JSON.stringify({email:n,password:a}),headers:{"Content-Type":"application/json"}}),e.abrupt("return",fetch(r).then((function(e){if(e.status<200||e.status>=300)throw new Error(e.statusText);return e.json()})).then((function(e){var t=e.data;localStorage.setItem("systemToken",t.systemToken)})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logout:function(){return localStorage.removeItem("systemToken"),Promise.resolve()},checkError:function(e){var t=e.status;return 401===t||403===t?(localStorage.removeItem("systemToken"),Promise.reject()):Promise.resolve()},checkAuth:function(){return localStorage.getItem("systemToken")?Promise.resolve():Promise.reject()},getPermissions:function(){return Promise.resolve()}},g=n(116),p=n(86),y=n(190),b="https://comments-microservice.herokuapp.com/v1",j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.headers||(t.headers=new Headers({Accept:"application/json"}));var n=localStorage.getItem("systemToken");return t.headers.set("Authorization","Bearer ".concat(n)),p.a.fetchJson(e,t)},w=function(e){return Object(g.a)(Object(g.a)({},e),{},{id:e.msAdminId})},O=function(e){return e.map((function(e){return Object(g.a)(Object(g.a)({},e),{},{id:e.msAdminId})}))},T={getList:function(e,t){var n="".concat(b,"/").concat(e);return j(n).then((function(e){var t=e.json;return{data:O(t.data),total:t.data.length}}))},getOne:function(e,t){return j("".concat(b,"/").concat(e,"/").concat(t.id)).then((function(e){var t=e.json;return{data:w(t.data)}}))},getMany:function(e,t){var n="".concat(b,"/").concat(e);return j(n).then((function(e){var t=e.json;return{data:O(t.data)}}))},getManyReference:function(e,t){var n="".concat(b,"/").concat(e);return j(n).then((function(e){var t=e.json;return{data:O(t.data),total:t.data.length}}))},update:function(e,t){return j("".concat(b,"/").concat(e),{method:"PATCH",body:JSON.stringify(t.data)}).then((function(e){var t=e.json;return{data:w(t.data)}}))},updateMany:function(e,t){var n={filter:JSON.stringify({id:t.ids})};return j("".concat(b,"/").concat(e,"?").concat(Object(y.stringify)(n)),{method:"PATCH",body:JSON.stringify(t.data)}).then((function(e){var t=e.json;return{data:O(t.data)}}))},create:function(e,t){return j("".concat(b,"/").concat(e),{method:"POST",body:JSON.stringify(t.data)}).then((function(e){var t=e.json;return{data:w(t.data)}}))},delete:function(e,t){return j("".concat(b,"/").concat(e,"/").concat(t.id),{method:"DELETE"}).then((function(e){var t=e.json;return{data:O(t.data)}}))},deleteMany:function(e,t){var n={filter:JSON.stringify({id:t.ids})};return j("".concat(b,"/").concat(e,"?").concat(Object(y.stringify)(n)),{method:"DELETE",body:JSON.stringify(t.data)}).then((function(e){var t=e.json;return{data:O(t.data)}}))}},k=n(294),S=n.n(k),P=n(469),A=n(554),I=n(562),J=n(555),x=n(546),N=n(565),C=n(559),D=n(556),M=n(549),L=n(567),B=n(557),H=n(568),W=function(e){var t=Object(P.a)((function(e){return e.breakpoints.down("sm")}));return r.a.createElement(A.a,Object.assign({label:"Admins"},e),t?r.a.createElement(I.a,{primaryText:function(e){return e.title},secondaryText:function(e){return"".concat(e.views," views")},tertiaryText:function(e){return new Date(e.published_at).toLocaleDateString()}}):r.a.createElement(J.a,{rowClick:"edit"},r.a.createElement(x.a,{source:"msAdminId"}),r.a.createElement(x.a,{source:"fullname"}),r.a.createElement(N.a,{source:"email"}),r.a.createElement(x.a,{source:"role"})))},R=function(e){return r.a.createElement(C.a,e,r.a.createElement(D.a,null,r.a.createElement(M.a,{disabled:!0,source:"id"}),r.a.createElement(M.a,{source:"msAdminId"}),r.a.createElement(M.a,{source:"fullname"}),r.a.createElement(M.a,{source:"email"}),r.a.createElement(M.a,{source:"role"})))},q=function(e){return r.a.createElement(L.a,Object.assign({label:"Create"},e),r.a.createElement(D.a,null,r.a.createElement(M.a,{source:"fullname"}),r.a.createElement(M.a,{source:"email"}),r.a.createElement(M.a,{source:"password"}),r.a.createElement(B.a,{source:"role",reference:"msadmins"},r.a.createElement(H.a,{optionText:"role"}))))};var z=function(){return r.a.createElement(i.a,{dashboard:d,authProvider:E,dataProvider:T},r.a.createElement(s.a,{name:"msadmins",list:W,edit:R,create:q,icon:S.a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[326,1,2]]]);
//# sourceMappingURL=main.1b0ae88c.chunk.js.map