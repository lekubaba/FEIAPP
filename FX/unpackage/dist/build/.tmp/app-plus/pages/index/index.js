(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"097c":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{title:"三级返佣规则",isUpdate:!1}},onLoad:function(){t.getStorageSync("userInfo")&&t.switchTab({url:"/pages/center/center"})},onShow:function(){t.getStorageSync("AppUpdata")?this.isUpdate=t.getStorageSync("AppUpdata").isUpdate:this.isUpdate=!1},methods:{toGuize:function(e){t.navigateTo({url:"/pages/guize/guize"})},toLogin:function(e){t.getStorageSync("AppUpdata")?this.isUpdate=t.getStorageSync("AppUpdata").isUpdate:t.navigateTo({url:"/pages/login/login"})},notUpdate:function(t){this.isUpdate=!1},goUpdate:function(e){var a=t.getStorageSync("AppUpdata"),n="iOS"===plus.os.name?a.iOS:a.Android;plus.runtime.openURL(n)}}};e.default=a}).call(this,a("6e42")["default"])},"38f0":function(t,e,a){},"8d8f":function(t,e,a){"use strict";a("5964");var n=s(a("b0ce")),i=s(a("a396"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))},a396:function(t,e,a){"use strict";a.r(e);var n=a("befa"),i=a("f8ea");for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);a("dac7");var c=a("2877"),o=Object(c["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},befa:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"index"},[a("view",{staticClass:"index-top",class:{active:t.isUpdate}},[a("image",{attrs:{src:"../../static/images/logo.png",mode:"aspectFit"}}),a("view",{staticClass:"index-title"},[a("text",{staticClass:"index-t-bold"},[t._v("飞贷代理 三级返佣")]),a("text",{staticClass:"iconfont icon-yiwen index-t-s",attrs:{eventid:"68fea472-0"},on:{click:t.toGuize}},[t._v(t._s(t.title))])]),a("view",{staticClass:"index-login",attrs:{eventid:"68fea472-1"},on:{click:t.toLogin}},[t._v("代理登录")])]),t.isUpdate?a("view",{staticClass:"index-update"},[a("view",{staticClass:"update-c"},[a("text",{staticClass:"update-remind"},[t._v("— 小提示 —")]),a("text",{staticClass:"update-content"},[t._v("您需要升级飞侠才可以继续使用飞侠的服务，请及时升级。请您删除APP重新安装即可。")]),a("view",{staticClass:"update-button"},[a("text",{staticClass:"update-cancel",attrs:{eventid:"68fea472-2"},on:{click:t.notUpdate}},[t._v("暂不升级")]),a("text",{staticClass:"update-confirm",attrs:{eventid:"68fea472-3"},on:{click:t.goUpdate}},[t._v("马上升级")])])])]):t._e()])},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},dac7:function(t,e,a){"use strict";var n=a("38f0"),i=a.n(n);i.a},f8ea:function(t,e,a){"use strict";a.r(e);var n=a("097c"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=i.a}},[["8d8f","common/runtime","common/vendor"]]]);