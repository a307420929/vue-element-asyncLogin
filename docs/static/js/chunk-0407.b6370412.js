(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0407"],{URcq:function(t,e,s){"use strict";var n=s("sOEc");s.n(n).a},lAbF:function(t,e,s){"use strict";s.r(e);var n=s("QbLZ"),r=s.n(n),o=s("L2JU"),a={name:"Dashboard",computed:r()({},Object(o.b)(["name","roles"]),{showRouter:function(){return console.log("全部路由信息",this.$store.getters.routerList),this.$store.getters.routerList.length>0?this.$store.getters.routerList[3].name:""}})},i=(s("URcq"),s("KHd+")),c=Object(i.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dashboard-container"},[s("div",{staticClass:"dashboard-text"},[t._v("name:"+t._s(t.name))]),t._v(" "),s("div",{staticClass:"dashboard-text"},[t._v("\n    roles:\n    "),t._l(t.roles,function(e){return s("span",{key:e},[t._v(t._s(e))])})],2),t._v(" "),s("div",[t._v(t._s(t.name)+" 的路由为 "+t._s(t.showRouter))]),t._v(" "),s("div",[t._v("未解析路由信息请看NetWork的,解析完成的路由信息请看控制台")])])},[],!1,null,"9455f7c2",null);c.options.__file="index.vue";e.default=c.exports},sOEc:function(t,e,s){}}]);