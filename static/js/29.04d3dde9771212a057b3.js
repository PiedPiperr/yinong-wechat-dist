webpackJsonp([29],{"0SXl":function(t,i){},"E/iD":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("YU+3"),a=s("WmtK"),n={name:"autoDistributionList",components:{PageContent:e.a,PageLine:a.a},data:function(){return{list:[1,1,1,1,1,1,1,1]}},methods:{toDetail:function(){this.$router.push({path:"/autodistribution/detail",query:{id:1}})},refresh:function(t){console.log("下拉刷新"),setTimeout(function(){t()},500)}},created:function(){}},o={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"app-page auto-distribution-list"},[s("page-content",{staticClass:"page-content"},[s("scroller",{ref:"myscroller",attrs:{"on-refresh":t.refresh}},[s("div",{staticClass:"list"},t._l(t.list,function(i,e){return s("div",{key:e,staticClass:"item",on:{click:t.toDetail}},[s("div",{staticClass:"item-info"},[s("div",{staticClass:"info-img"},[s("img",{attrs:{src:"/static/images/category/jz.png"}})]),t._v(" "),s("div",{staticClass:"info-detail"},[s("div",{staticClass:"info-detail-title"},[t._v("橙子橙子天然维C超甜橙 子橙子天然维C超甜")]),t._v(" "),s("div",{staticClass:"info-detail-specification"},[t._v("规格: 3kg")])]),t._v(" "),s("div",{staticClass:"info-num"},[s("div",{staticClass:"info-num-price"},[t._v("¥ 36.00")]),t._v(" "),s("div",{staticClass:"info-num-quantity"},[t._v("x1")])])]),t._v(" "),s("div",{staticClass:"item-progress"},[t._l(8,function(t,i){return s("van-icon",{key:i,staticClass:"icon-passed",attrs:{name:"passed",size:".53rem"}})}),t._v(" "),s("page-line",{attrs:{direction:"L",borderStyle:"dashed",length:3.46,dashedSpacing:.2}})],2),t._v(" "),s("div",{staticClass:"item-date"},[t._v("\n            本次配送时间：01-06 星期天\n          ")])])}))])],1)],1)},staticRenderFns:[]};var c=s("VU/8")(n,o,!1,function(t){s("0SXl")},"data-v-21d6c7f3",null);i.default=c.exports}});
//# sourceMappingURL=29.04d3dde9771212a057b3.js.map