webpackJsonp([7],{Tqvt:function(e,t){},bOdI:function(e,t,n){"use strict";t.__esModule=!0;var i,s=n("C4MV"),l=(i=s)&&i.__esModule?i:{default:i};t.default=function(e,t,n){return t in e?(0,l.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},g67I:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("YU+3"),s=n("hXc6"),l={name:"myearnings",components:{PageContent:i.a,MyList:s.a},data:function(){return{listLoading:!1,selectIndex:0,selectRecord:{selectIndex:0,label:"",list:[],maxLength:0,pullDownRefresh:{isLoading:!1},scrollListData:{loading:!1,finished:!1}},recordingData:[{label:"消费记录",isSelected:!0,list:[1,1,1,1,1,1,1,1,1,1,1,1],maxLength:24,pullDownRefresh:{isLoading:!1},scrollListData:{loading:!1,finished:!1}},{label:"退款记录",isSelected:!1,list:[2,2,2,2,2,2,2,2,2,2,2,2],maxLength:24,pullDownRefresh:{isLoading:!1},scrollListData:{loading:!1,finished:!1}},{label:"购卡记录",isSelected:!1,list:[],maxLength:0,pullDownRefresh:{isLoading:!1},scrollListData:{loading:!1,finished:!1}}],pullDownRefresh:{isLoading:!1},scrollListData:{loading:!1,finished:!1}}},created:function(){},mounted:function(){},computed:{},methods:{clickTypeButton:function(e,t){var n=this;e.isSelected||(this.$refs.myscroller.scrollTo(0,0,!1),this.$refs.myscroller.finishInfinite(!1),this.selectRecord={selectIndex:0,label:"",list:[],maxLength:0,pullDownRefresh:{isLoading:!1},scrollListData:{loading:!1,finished:!1}},this.$nextTick(function(){n.listLoading=!0,n.recordingData.forEach(function(e){e.isSelected=!1}),e.isSelected=!0,n.selectIndex=t}))},refresh:function(e){var t=this;console.log("下拉刷新"),setTimeout(function(){console.log("b"),t.$toast("刷新成功"),t.selectRecord.pullDownRefresh.isLoading=!1,e()},500)},infinite:function(e){var t=this;setTimeout(function(){if(console.log("滚动触发..."),t.selectRecord.list.length>=t.selectRecord.maxLength)return t.selectRecord.scrollListData.finished=!0,e(!0),void t.$refs.myscroller.finishInfinite(!0);for(var n=0;n<12;n++)t.selectRecord.list.push("+");t.selectRecord.scrollListData.loading=!1,e()},500)}},watch:{selectIndex:{handler:function(e,t){var n=this,i=this.recordingData[e];this.selectRecord=this.$lodash.cloneDeep(i),this.$nextTick(function(){setTimeout(function(){n.listLoading=!1},600)})},immediate:!0}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-page account-balance"},[n("page-content",{},[n("div",{staticClass:"top-title vertical-center"},[n("div",[n("span",[e._v("账户金额 2000.00 元")])]),e._v(" "),n("div",{staticClass:"top-title-right vertical-center"},[n("span",{staticClass:"top-right-span"},[e._v("总收益：15.79元")])])]),e._v(" "),n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"divList",staticClass:"div-list"},[n("scroller",{ref:"myscroller",attrs:{"on-refresh":e.refresh,"on-infinite":e.infinite}},[n("div",{staticClass:"list-data"},e._l(e.selectRecord.list,function(t,i){return n("div",{key:i,staticClass:"list-item vertical-center"},[n("div",{staticClass:"item-left"},[n("div",{staticClass:"item-detail"},[n("div",{staticClass:"item-price"},[e._v("￥80.00")]),e._v(" "),n("div",{staticClass:"item-date"},[e._v("2019-10-11")])])]),e._v(" "),n("div",{staticClass:"item-right"},[n("span",[e._v("推荐用户消费")])])])}))])],1)])],1)},staticRenderFns:[]};var r=n("VU/8")(l,o,!1,function(e){n("Tqvt")},"data-v-b57e5a2a",null);t.default=r.exports},hXc6:function(e,t,n){"use strict";var i=n("woOf"),s=n.n(i),l=n("fZjL"),o=n.n(l),r=n("bOdI"),a=n.n(r),c=n("7+uW"),d=n("pFYg"),u=n.n(d),f=c.default.prototype.$isServer;function h(e){return void 0!==e&&null!==e}function p(e,t){var n=e;return t.split(".").forEach(function(e){n=h(n[e])?n[e]:""}),n}var v=/-(\w)/g;function g(e){return e.replace(v,function(e,t){return t.toUpperCase()})}var m=Object.prototype.hasOwnProperty;function b(e,t,n){var i,s,l=t[n];!h(l)||m.call(e,n)&&!h(e[n])||(!m.call(e,n)||(s=void 0===(i=l)?"undefined":u()(i),null===i||"object"!==s&&"function"!==s)?e[n]=l:e[n]=_(Object(e[n]),t[n]))}function _(e,t){return o()(t).forEach(function(n){b(e,t,n)}),e}var y={name:"姓名",tel:"电话",save:"保存",confirm:"确认",cancel:"取消",delete:"删除",complete:"完成",loading:"加载中...",telEmpty:"请填写电话",nameEmpty:"请填写姓名",confirmDelete:"确定要删除么",telInvalid:"请填写正确的电话",vanContactCard:{addText:"添加联系人"},vanContactList:{addText:"新建联系人"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计："},vanCouponCell:{title:"优惠券",tips:"使用优惠",count:function(e){return e+"张可用"}},vanCouponList:{empty:"暂无优惠券",exchange:"兑换",close:"不使用优惠",enable:"可使用优惠券",disabled:"不可使用优惠券",placeholder:"请输入优惠码"},vanCouponItem:{valid:"有效期",unlimited:"无使用门槛",discount:function(e){return e+"折"},condition:function(e){return"满"+e+"元可用"}},vanAddressEdit:{area:"地区",postal:"邮政编码",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",postalEmpty:"邮政编码格式不正确",defaultAddress:"设为默认收货地址",telPlaceholder:"收货人手机号",namePlaceholder:"收货人姓名",areaPlaceholder:"选择省 / 市 / 区"},vanAddressEditDetail:{label:"详细地址",placeholder:"街道门牌、楼层房间号等信息"},vanAddressList:{add:"新增地址"}},x=c.default.prototype,C={install:function(){x.$vantLang||(c.default.util.defineReactive(x,"$vantLang","zh-CN"),c.default.util.defineReactive(x,"$vantMessages",a()({},"zh-CN",y)))},use:function(e,t){x.$vantLang=e,this.add(a()({},e,t))},add:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_(x.$vantMessages,e)}};C.install();var L=function(e,t,n){return t?e+n+t:e},S={methods:{b:function(e,t){var n=this.$options.name;return e&&"string"!=typeof e&&(t=e,e=""),e=L(n,e,"__"),t?[e,function e(t,n){if("string"==typeof n)return L(t,n,"--");if(Array.isArray(n))return n.map(function(n){return e(t,n)});var i={};return n&&o()(n).forEach(function(e){i[t+"--"+e]=n[e]}),i}(e,t)]:e}}},$={computed:{$t:function(){var e=this.$options.name,t=e?g(e)+".":"";if(!this.$vantMessages)return function(){return""};var n=this.$vantMessages[this.$vantLang];return function(e){for(var i=arguments.length,s=Array(i>1?i-1:0),l=1;l<i;l++)s[l-1]=arguments[l];var o=p(n,t+e)||p(n,e);return"function"==typeof o?o.apply(void 0,s):o}}}};function w(e){var t=this.name;e.component(t,this),e.component(g("-"+t),this)}function T(){return[]}var k=function(e){var t;return e.name="van-"+e.name,e.install=e.install||w,e.mixins=e.mixins||[],e.mixins.push($,S),e.methods=e.methods||{},e.methods.isDef=h,e.props&&(t=e.props,o()(t).forEach(function(e){t[e]===Array?t[e]={type:Array,default:T}:t[e]===Number&&(t[e]={type:Number,default:0})})),e},D=k({name:"info",props:{info:[String,Number]}}),R={render:function(){var e=this.$createElement,t=this._self._c||e;return this.isDef(this.info)?t("div",{class:this.b(),domProps:{textContent:this._s(this.info)}}):this._e()},staticRenderFns:[]},E=n("VU/8")(D,R,!1,null,null,null).exports;var P=k({name:"icon",components:a()({},E.name,E),props:{name:String,size:String,color:String,info:[String,Number],classPrefix:{type:String,default:"van-icon"}},computed:{style:function(){return{color:this.color,fontSize:this.size}},isSrc:function(){return e=this.name,/^(https?:)?\/\/|data:image/.test(e);var e}}}),I={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i",e._g({class:[e.classPrefix,e.isSrc?"van-icon--image":e.classPrefix+"-"+e.name],style:e.style},e.$listeners),[e._t("default"),e._v(" "),e.isSrc?n("img",{attrs:{src:e.name}}):e._e(),e._v(" "),n("van-info",{attrs:{info:e.info}})],2)},staticRenderFns:[]},B=n("VU/8")(P,I,!1,null,null,null).exports,N=k({name:"loading",props:{size:String,type:{type:String,default:"circular"},color:{type:String,default:"#c9c9c9"}},computed:{colorType:function(){var e=this.color;return"white"===e||"black"===e?e:""},style:function(){return{color:"black"===this.color?"#c9c9c9":this.color,width:this.size,height:this.size}}}}),V={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.b([e.type,e.colorType]),style:e.style},[n("span",{class:e.b("spinner",e.type)},[e._l("spinner"===e.type?12:0,function(e,t){return n("i",{key:t})}),e._v(" "),"circular"===e.type?n("svg",{class:e.b("circular"),attrs:{viewBox:"25 25 50 50"}},[n("circle",{attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})]):e._e()],2)])},staticRenderFns:[]},z=n("VU/8")(N,V,!1,null,null,null).exports,M={props:{icon:String,center:Boolean,isLink:Boolean,required:Boolean,titleClass:String,valueClass:String,labelClass:String,title:[String,Number],value:[String,Number],label:[String,Number],border:{type:Boolean,default:!0}}},O=n("Flhm"),A=k({name:"cell",components:{Icon:B},mixins:[M,O.a],props:{size:String,clickable:Boolean,arrowDirection:String},computed:{arrowIcon:function(){return this.arrowDirection?"arrow-"+this.arrowDirection:"arrow"}},methods:{onClick:function(){this.$emit("click"),this.routerLink()}}}),F={render:function(){var e,t=this,n=t.$createElement,i=t._self._c||n;return i("div",{class:[t.b((e={center:t.center,required:t.required,borderless:!t.border,clickable:t.isLink||t.clickable},e[t.size]=t.size,e))],on:{click:t.onClick}},[t._t("icon",[t.icon?i("icon",{class:t.b("left-icon"),attrs:{name:t.icon}}):t._e()]),t._v(" "),t.isDef(t.title)||t.$slots.title?i("div",{class:[t.b("title"),t.titleClass]},[t._t("title",[i("span",{domProps:{textContent:t._s(t.title)}}),t._v(" "),t.label?i("div",{class:[t.b("label"),t.labelClass],domProps:{textContent:t._s(t.label)}}):t._e()])],2):t._e(),t._v(" "),t.isDef(t.value)||t.$slots.default?i("div",{class:[t.b("value",{alone:!t.$slots.title&&!t.title}),t.valueClass]},[t._t("default",[i("span",{domProps:{textContent:t._s(t.value)}})])],2):t._e(),t._v(" "),t._t("right-icon",[t.isLink?i("icon",{class:t.b("right-icon"),attrs:{name:t.arrowIcon}}):t._e()]),t._v(" "),t._t("extra")],2)},staticRenderFns:[]},U=n("VU/8")(A,F,!1,null,null,null).exports,j=k({name:"cell-group",props:{border:{type:Boolean,default:!0}}}),H={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{class:[this.b(),{"van-hairline--top-bottom":this.border}]},[this._t("default")],2)},staticRenderFns:[]},q=n("VU/8")(j,H,!1,null,null,null).exports,Y={getScrollEventTarget:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window,n=e;n&&"HTML"!==n.tagName&&"BODY"!==n.tagName&&1===n.nodeType&&n!==t;){var i=this.getComputedStyle(n).overflowY;if("scroll"===i||"auto"===i)return n;n=n.parentNode}return t},getScrollTop:function(e){return"scrollTop"in e?e.scrollTop:e.pageYOffset},setScrollTop:function(e,t){"scrollTop"in e?e.scrollTop=t:e.scrollTo(e.scrollX,t)},getElementTop:function(e){return(e===window?0:e.getBoundingClientRect().top)+this.getScrollTop(window)},getVisibleHeight:function(e){return e===window?e.innerHeight:e.getBoundingClientRect().height},getComputedStyle:!f&&document.defaultView.getComputedStyle.bind(document.defaultView)},X=!1;if(!f)try{var G={};Object.defineProperty(G,"passive",{get:function(){X=!0}}),window.addEventListener("test-passive",null,G)}catch(e){}var J,W=((J={name:"list",model:{prop:"loading"},props:{loading:Boolean,finished:Boolean,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:Number,default:300}},mounted:function(){this.scroller=Y.getScrollEventTarget(this.$el),this.handler(!0),this.immediateCheck&&this.$nextTick(this.check)},destroyed:function(){this.handler(!1)},activated:function(){this.handler(!0)},deactivated:function(){this.handler(!1)},watch:{loading:function(){this.$nextTick(this.check)},finished:function(){this.$nextTick(this.check)}},methods:{check:function(){if(!this.loading&&!this.finished){var e=this.$el,t=this.scroller,n=Y.getVisibleHeight(e);if(n&&"none"!==Y.getComputedStyle(e).display&&null!==e.offsetParent){var i=Y.getScrollTop(e)+n,s=!1;if(e===t)s=t.scrollHeight-i<this.offset;else s=Y.getElementTop(e)-Y.getElementTop(e)+Y.getVisibleHeight(e)-n<this.offset;s&&(this.$emit("input",!0),this.$emit("load"))}}},handler:function(e){this.binded!==e&&(this.binded=e,(e?function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];!f&&e.addEventListener(t,n,!!X&&{capture:!1,passive:i})}:function(e,t,n){!f&&e.removeEventListener(t,n)})(this.scroller,"scroll",this.check))}}}).components=s()(J.components||{},{Icon:B,Loading:z,Cell:U,CellGroup:q}),k(J)),Z={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.b()},[e._t("default"),e._v(" "),e.loading?n("div",{class:e.b("loading")},[e._t("loading",[n("loading",{class:e.b("loading-icon")}),e._v(" "),n("span",{class:e.b("loading-text"),domProps:{textContent:e._s(e.loadingText||e.$t("loading"))}})])],2):e._e(),e._v(" "),e.finished&&e.finishedText?n("div",{class:e.b("finished-text"),domProps:{textContent:e._s(e.finishedText)}}):e._e()],2)},staticRenderFns:[]},K=n("VU/8")(W,Z,!1,null,null,null);t.a=K.exports}});
//# sourceMappingURL=7.ff26ebbde6debd92a85d.js.map