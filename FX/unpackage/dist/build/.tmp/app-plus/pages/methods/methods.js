(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/methods/methods"],{5134:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{webviewStyles:{progress:{color:"#41A863"}},webUrl:""}},onload:function(){},onShow:function(){var t=this,n=e.getStorageSync("userInfo").gonghao;e.request({url:this.$FXUrl+"/webcontent?gonghao="+n,method:"GET",success:function(e){t.webUrl=e.data.webUrl}})},methods:{}};t.default=n}).call(this,n("6e42")["default"])},5359:function(e,t,n){"use strict";n.r(t);var u=n("5e15"),r=n("e61b");for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);n("5ebf");var a=n("2877"),s=Object(a["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=s.exports},"5e15":function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",[e._m(0),n("web-view",{attrs:{"webview-styles":e.webviewStyles,src:e.webUrl,mpcomid:"7fba75c7-0"}})],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"status-contents"},[n("view",{staticClass:"status top-view"})])}];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return r})},"5ebf":function(e,t,n){"use strict";var u=n("d6ee"),r=n.n(u);r.a},b602:function(e,t,n){"use strict";n("5964");var u=o(n("b0ce")),r=o(n("5359"));function o(e){return e&&e.__esModule?e:{default:e}}Page((0,u.default)(r.default))},d6ee:function(e,t,n){},e61b:function(e,t,n){"use strict";n.r(t);var u=n("5134"),r=n.n(u);for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);t["default"]=r.a}},[["b602","common/runtime","common/vendor"]]]);