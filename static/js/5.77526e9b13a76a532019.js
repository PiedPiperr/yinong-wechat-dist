webpackJsonp([5],{Dylq:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("eF1A"),i=t("YU+3"),a=t("//Fk"),s=t.n(a),c=t("fxnj"),r=t.n(c),u=t("sKaS"),p={data:function(){return{wx:r.a,paySuccessResStr:""}},computed:{},created:function(){},mounted:function(){},methods:{getCurrentUrl:function(){var e=location.href.split("#")[0];return!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&(e=e.replace(/\|/g,"%7C")),e},weChatConfig:function(e,n){var t=this;return new s.a(function(o,i){t.$get(t.$api.wxpaygetconfig,{url:e}).then(function(e){var t=e.data;r.a.config({debug:!1,appId:u.a.wxAppId,timestamp:t.timestamp,nonceStr:t.nonceStr,signature:t.signature,jsApiList:n}),o()})})},hideWxFunction:function(e){r.a.ready(function(){e?r.a.hideMenuItems({menuList:e}):r.a.hideAllNonBaseMenuItem()})},showWxFunction:function(e){r.a.ready(function(){e?r.a.showMenuItems({menuList:e}):r.a.showAllNonBaseMenuItem()})}}},l={data:function(){return{}},mixins:[p],computed:{},created:function(){},mounted:function(){},methods:{wxPay:function(e,n){var t=this;return new s.a(function(o,i){t.$post(e,n).then(function(e){var n=t;n.wx.chooseWXPay({timestamp:e.data.timeStamp,nonceStr:e.data.nonceStr,package:e.data.package,signType:e.data.signType,paySign:e.data.paySign,success:function(t){var a={attach:e.data.attach,out_trade_no:e.data.out_trade_no};n.wxPaySuccessed(a).then(function(e){o(e)}).catch(function(e){i(e)})},fail:function(e){},cancel:function(){o(0)}})}).catch(function(e){i(e)})})},wxPaySuccessed:function(e){var n=this;return new s.a(function(t,o){var i={attach:e.attach,out_trade_no:e.out_trade_no},a="<xml>"+n.$x2js.js2xml(i)+"</xml>";n.$post(n.$api.wxpayweixinnotify,a).then(function(e){"SUCCESS"===n.$x2js.xml2js(e).xml.return_code?t(1):t(-1)}).catch(function(e){o(e)})})},startWxPay:function(e,n){var t=this;return new s.a(function(o,i){t.weChatConfig(t.getCurrentUrl(),["chooseWXPay"]).then(function(){t.wxPay(e,n).then(function(e){o(e)}).catch(function(e){i(e)})})})}}},d={name:"index",props:{show:{type:Boolean,default:!1,required:!0},title:{type:String,default:"确认付款",required:!1},payTypeCode:{type:String,default:"",required:!1},showCoupon:{type:Boolean,default:!0,required:!1},couponTypeCode:{type:String,default:"",required:!1},showMarketMoney:{type:Boolean,default:!0,required:!1},showPayMoney:{type:Boolean,default:!0,required:!1},payMoney:{type:Number,default:0,required:!1},orderId:{type:Number,default:-1,required:!0}},mixins:[l],data:function(){return{isShow:!1,coupon:{showCouponPopup:!1,types:[{code:"DISCOUNT",name:"折扣券"},{code:"REDUCE",name:"立减券"},{code:"CASH",name:"现金券"},{code:"COURSE",name:"课程券"},{code:"ACTIVITY",name:"活动券"}],chosenCoupon:-1,availableNum:1,availableList:[],expiredAndUsedList:[],usedList:[],unsatisfiedList:[]},marketMoney:{isUse:!1,amount:0,moneyToCoinRate:null,usableAmount:0},payWay:{show:!1,balance:0,selType:"",actions:[{name:"余额不足(￥0)",code:"1",disabled:!0},{name:"微信支付",code:"2"}]},payMoneyThis:0}},created:function(){},computed:{couponType:function(){var e=this;return this.coupon.types.filter(function(n){return n.code===e.couponTypeCode})[0]},selCouponMoneyStr:function(){var e="",n=this.coupon.chosenCoupon;if(n>=0){var t=this.coupon.availableList[n];t.denominations>0?e="-￥"+t.denominations/100:t.discount>0&&(e=t.discount/10+"折")}return e},selCoupon:function(){return-1!==this.coupon.chosenCoupon?this.coupon.availableList[this.coupon.chosenCoupon]:null},unavailableList:function(){return[].concat(this.coupon.expiredAndUsedList).concat(this.coupon.unsatisfiedList)},payUrl:function(){var e="";switch(this.payTypeCode){case"ACTIVITY":e=this.$api.activityjoin;break;case"BUYCARD":e=this.$api.buygiftcard;break;case"COURSE":e=this.$api.buyCourseOrder;break;case"VIP":e=this.$api.buyvip;break;case"MARKET":e=this.$api.marketpay;break;default:e=""}return e}},methods:{init:function(){this.getCouponList(),this.getExpiredCouponList(),this.getMarketMoneyInfo()},openCouponPopup:function(){this.coupon.availableList.length>0&&(this.coupon.showCouponPopup=!0)},onChangeCoupon:function(e){this.coupon.showCouponPopup=!1,this.coupon.chosenCoupon=e},getCouponList:function(){var e=this;if(this.showCoupon){this.coupon.availableList=[];var n={couponType:this.couponType.code};this.$get(this.$api.getUnusecardList,n).then(function(n){var t=e.machCouponData(n.data);e.findUnsatisfiedFromAvailableList(t)})}},getUsedCouponList:function(){var e=this;if(this.showCoupon){this.coupon.usedList=[];var n={couponType:this.couponType.code};this.$get(this.$api.gethasUsecardList,n).then(function(n){e.coupon.usedList=e.machCouponData(n.data)})}},getExpiredCouponList:function(){var e=this;if(this.showCoupon){this.coupon.expiredAndUsedList=[];var n={couponType:this.couponType.code};this.$get(this.$api.getUsecardList,n).then(function(n){e.coupon.expiredAndUsedList=e.machCouponData(n.data)})}},machCouponData:function(e){return e.map(function(e){return{id:e.id,couponNo:e.couponNo,discount:10*e.discount,name:e.couponType,denominations:100*e.money,originCondition:100*e.minReachAmount,startAt:new Date(e.beginDate).getTime()/1e3,endAt:new Date(e.endDate).getTime()/1e3,reason:0===e.couponstatus?"":-1===e.couponstatus?"已过期":"已使用",value:0}})},findUnsatisfiedFromAvailableList:function(e){var n=this,t=[];this.coupon.availableList=e.filter(function(e){return!(e.originCondition>100*n.payMoney)||(e.reason="支付金额不足",t.push(e),!1)}),this.coupon.unsatisfiedList=t},getMarketMoneyInfo:function(){var e=this;(this.showMarketMoney||this.showPayMoney)&&this.$get(this.$api.getMoneyInfoByUser,{}).then(function(n){e.marketMoney.amount=n.data.marketCoinVO.amount,e.marketMoney.moneyToCoinRate=n.data.marketCoinVO.moneyToCoinRate,e.payWay.balance=n.data.balance,e.judgeBalanceByPayMeonyThis(e.payMoneyThis)})},judgeBalanceByPayMeonyThis:function(e){this.payWay.balance<e?(this.payWay.actions[0].name="余额不足(￥"+this.payWay.balance+")",this.payWay.actions[0].disabled=!0):(this.payWay.actions[0].name="余额(￥"+this.payWay.balance+")",this.payWay.actions[0].disabled=!1,this.payWay.actions[1].disabled=1*e==0||1*e==0),this.payWay.selType=""},calcPayMoneyThis:function(){if(-1!==this.coupon.chosenCoupon){var e=this.coupon.availableList[this.coupon.chosenCoupon];if(e.denominations>0){var n=this.payMoney-e.denominations/100;this.payMoneyThis=n>=0?n:0}else e.discount>0&&(this.payMoneyThis=this.payMoney*e.discount/100)}else this.payMoneyThis=this.payMoney;if(this.marketMoney.isUse)if(this.payMoneyThis<this.marketMoney.amount/this.marketMoney.moneyToCoinRate)this.marketMoney.usableAmount=this.payMoneyThis*this.marketMoney.moneyToCoinRate,this.payMoneyThis=0;else{var t=this.payMoneyThis-this.marketMoney.amount/this.marketMoney.moneyToCoinRate;this.payMoneyThis=t>=0?t:0,this.marketMoney.usableAmount=this.marketMoney.amount}this.payMoneyThis=1*this.payMoneyThis.toFixed(2),this.marketMoney.usableAmount=1*this.marketMoney.usableAmount.toFixed(0)},payWayOnSelect:function(e){this.payWay.selType=e.code,this.payWay.show=!1},payWayOnCancel:function(){this.payWay.selType=""},clickPay:function(){var e=this;this.pay().then(function(n){1===n&&(e.isShow=!1),e.$emit("payResult",n)})},pay:function(){var e=this;return new s.a(function(n,t){var o={orderId:e.orderId,couponId:e.selCoupon?e.selCoupon.id:0,marketCoin:e.marketMoney.isUse?e.marketMoney.usableAmount:0,payType:"1"===e.payWay.selType?"BALANCE":"2"===e.payWay.selType?"WXPAY":""};""===o.payType?e.$toast.fail("请选择支付方式"):"BALANCE"===o.payType?e.$dialog.confirm({title:"确认购买",message:"是否使用余额购买?"}).then(function(){e.$post(e.payUrl,o).then(function(e){"SUCCESS"===e.code&&n(1)})}).catch(function(){n(-1)}):"WXPAY"===o.payType&&e.startWxPay(e.payUrl,o).then(function(t){1===t?e.$toast.success({message:"支付成功",duration:2e3}):-1===t?e.$toast.success({message:"支付失败",duration:2e3}):0===t&&e.$toast.success({message:"已取消支付",duration:2e3}),n(t)})})}},watch:{show:function(e){this.isShow=e},isShow:function(e){e?this.init():this.$emit("update:show",!1)},"coupon.chosenCoupon":{handler:function(e,n){this.calcPayMoneyThis()},immediate:!1},"marketMoney.isUse":{handler:function(e,n){this.calcPayMoneyThis()},immediate:!0},payMoney:{handler:function(e,n){this.payMoneyThis=e},immediate:!0},payMoneyThis:{handler:function(e,n){this.judgeBalanceByPayMeonyThis(e)},immediate:!0}}},h={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"popup-pay"},[t("van-popup",{staticClass:"popup-pay-index",attrs:{position:"bottom"},model:{value:e.isShow,callback:function(n){e.isShow=n},expression:"isShow"}},[t("div",{staticClass:"head align-center"},[t("div"),e._v(" "),t("div",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),t("van-icon",{staticClass:"close-icon",attrs:{name:"cross",size:".45rem"},on:{click:function(n){e.isShow=!1}}})],1),e._v(" "),t("div",{staticClass:"content"},[e.showCoupon?t("div",{staticClass:"item coupon",on:{click:e.openCouponPopup}},[t("div",[e._v(e._s(e.couponType.name))]),e._v(" "),e.coupon.chosenCoupon>=0?t("div",[e._v(e._s(e.selCouponMoneyStr))]):e.coupon.availableList.length<=0?t("div",[e._v("无可用")]):t("div",{staticClass:"align-center"},[e._v("您有"+e._s(e.coupon.availableList.length)+"张可用优惠券"),t("van-icon",{attrs:{name:"arrow",size:".45rem"}})],1)]):e._e(),e._v(" "),e.showMarketMoney?t("div",{staticClass:"item market-money"},[t("div",[t("span",[e._v("市集币 共"),t("strong",[e._v(e._s(e.marketMoney.amount))]),e._v("币,")]),e._v(" "),t("span",[e._v("可抵"),t("strong",[e._v(e._s(e.marketMoney.amount/e.marketMoney.moneyToCoinRate))]),e._v("元;")]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.marketMoney.isUse,expression:"marketMoney.isUse"}]},[e._v("当前可使用"),t("strong",[e._v(e._s(e.marketMoney.usableAmount))]),e._v("市集币.")])]),e._v(" "),t("div",[t("van-switch",{attrs:{"active-color":"#D8B96F"},model:{value:e.marketMoney.isUse,callback:function(n){e.$set(e.marketMoney,"isUse",n)},expression:"marketMoney.isUse"}})],1)]):e._e(),e._v(" "),e.showPayMoney?t("div",{staticClass:"item pay-money"},[t("div",[e._v("付款金额")]),e._v(" "),t("div",[e._v("￥"+e._s(e.payMoneyThis))])]):e._e(),e._v(" "),t("div",{staticClass:"item pay-way",on:{click:function(n){n.preventDefault(),n.stopPropagation(),e.payWay.show=!0}}},[t("div",[e._v("支付方式 ("+e._s(""===e.payWay.selType?"未选择":"1"===e.payWay.selType?"余额":"微信支付")+")")]),e._v(" "),t("div",[t("van-icon",{attrs:{name:"arrow",size:".45rem"}})],1)])]),e._v(" "),t("div",{staticClass:"bottom align-center level-center"},[t("van-button",{attrs:{type:"default"},on:{click:e.clickPay}},[e._v("立即付款")])],1)]),e._v(" "),t("van-popup",{staticClass:"popup-pay-coupon",attrs:{position:"bottom"},model:{value:e.coupon.showCouponPopup,callback:function(n){e.$set(e.coupon,"showCouponPopup",n)},expression:"coupon.showCouponPopup"}},[t("van-coupon-list",{attrs:{"show-exchange-bar":!1,coupons:e.coupon.availableList,"chosen-coupon":e.coupon.chosenCoupon,"disabled-coupons":e.unavailableList},on:{change:e.onChangeCoupon}})],1),e._v(" "),t("van-actionsheet",{attrs:{actions:e.payWay.actions,"cancel-text":"取消"},on:{select:e.payWayOnSelect,cancel:e.payWayOnCancel},model:{value:e.payWay.show,callback:function(n){e.$set(e.payWay,"show",n)},expression:"payWay.show"}})],1)},staticRenderFns:[]};var f=t("VU/8")(d,h,!1,function(e){t("yBY1")},"data-v-6e4196c0",null).exports,m={data:function(){return{}},mixins:[p],computed:{},created:function(){},mounted:function(){},methods:{qrCode:function(){var e=this;return new s.a(function(n,t){var o="",i=e;i.wx.ready(function(){i.wx.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:function(e){o=e.resultStr,i.$toast.success(o),n(o)}})})})},openQrCode:function(){var e=this;return new s.a(function(n,t){e.weChatConfig(e.getCurrentUrl(),["scanQRCode"]).then(function(){e.qrCode().then(function(e){n(e)})})})}}},y={data:function(){return{}},mixins:[p],computed:{},created:function(){},mounted:function(){},methods:{updateAppMessageShareData:function(e){var n=this,t=u.a.domainName+e.link;n.wx.ready(function(){n.wx.onMenuShareAppMessage({title:e.title,desc:e.desc,link:t,imgUrl:e.imgUrl,success:function(){}}),n.wx.onMenuShareTimeline({title:e.title,link:t,imgUrl:e.imgUrl,success:function(){}}),n.wx.updateTimelineShareData({title:e.title,link:t,imgUrl:e.imgUrl,success:function(){}}),n.wx.updateAppMessageShareData({title:e.title,desc:e.desc,link:t,imgUrl:e.imgUrl,success:function(){}})})},initShareWxConfig:function(){var e=this;return new s.a(function(n,t){e.weChatConfig(e.getCurrentUrl(),["updateAppMessageShareData","onMenuShareAppMessage","showMenuItems","showAllNonBaseMenuItem","onMenuShareTimeline","updateTimelineShareData","hideMenuItems","hideAllNonBaseMenuItem"]).then(function(){n()})})}}},v={name:"tipWxShare",components:{},props:{show:{type:Boolean,default:!1,required:!0}},data:function(){return{isShow:!1}},created:function(){},mounted:function(){},computed:{},methods:{},watch:{show:function(e){this.isShow=e},isShow:function(e){e||this.$emit("update:show",!1)}}},g={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"tip-wx-share",on:{touchmove:function(e){e.preventDefault()}}},[t("van-popup",{model:{value:e.isShow,callback:function(n){e.isShow=n},expression:"isShow"}},[t("div",{staticClass:"div-img"},[t("img",{attrs:{src:"/static/images/wx_share.png"}})]),e._v(" "),t("p",[e._v("点[发送给朋友]或[分享到朋友圈]"),t("br"),e._v("分享给你的好友")])])],1)},staticRenderFns:[]};var C=t("VU/8")(v,g,!1,function(e){t("ITKd")},"data-v-4e6bd1c4",null).exports;var w={name:"test1",components:{PageHeader:o.a,PageContent:i.a,TipsWxShare:C,PopupPay:f},data:function(){return{scanQrRes:"",pval:!0,inpVal:"",x2jsData:{jsonStr:"",xmlStr:""},popupPayData:{show:!1},tipsWxShare:!1}},mixins:[m,y,l],computed:{},created:function(){this.testCloneDeep(),console.log(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test("1032199882@qq.com"))},mounted:function(){},methods:{clearStorege:function(){window.localStorage.clear(),window.sessionStorage.clear()},toTest:function(){this.$router.push({path:"/test"})},testCloneDeep:function(){var e={a:1,b:{c:1},d:[{e:1}]},n=this.$lodash.cloneDeep(e);console.log(e===n,e.b.c,n.b.c),n.b.c=10,console.log(e===n,e.b.c,n.b.c)},clickJsonIcon:function(){console.log(this.$x2js.js2xml({a:"aa",b:{c:"cc"}}))},clickXmlIcon:function(){console.log(this.$x2js.xml2js("<a>aa</a>"))},clickWxPayPopup:function(){this.popupPayData.show=!0},clickScanQrButton:function(){var e=this;this.openQrCode().then(function(n){e.scanQrRes=n})},clickWxPayBut:function(){this.startWxPay({courseId:2,realPayMarketCoin:22,couponId:22,orderType:"course"})},clickShare1:function(){this.showWxFunction(),this.updateAppMessageShareData({title:"测试1页面分享",desc:"详情xxxxx",link:"/test1",imgUrl:"https://cn.bing.com/az/hprichbg/rb/KilimanjaroMawenzi_ZH-CN7924585833_1920x1080.jpg"}),this.tipsWxShare=!0},initShareWxConfigCur:function(){var e=this;this.initShareWxConfig().then(function(){e.tipsWxShare||e.hideWxFunction()})}},watch:{tipsWxShare:{handler:function(e){console.log("watch"),e||this.hideWxFunction()}}}},x={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"app-page test1"},[t("page-header",{attrs:{title:"测试1","left-arrow":"",border:"","left-text":"返回","right-text":"点击",rightPath:"/"}}),e._v(" "),t("page-content",[t("div",{staticClass:"clear-storege level-center vertical-center"},[t("button",{staticClass:"clickButton",on:{click:e.clearStorege}},[e._v("清理缓存")])]),e._v(" "),t("div",{staticClass:"toTest level-center vertical-center"},[t("button",{staticClass:"clickButton",on:{click:e.toTest}},[e._v("toTest")])]),e._v(" "),t("div",{staticClass:"qr-code level-center vertical-center"},[t("button",{staticClass:"clickButton",on:{click:e.clickScanQrButton}},[e._v("扫码")]),e._v(" "),t("div",[e._v("结果:"+e._s(e.scanQrRes))])]),e._v(" "),t("div",{staticClass:"wxPay level-center vertical-center"},[t("button",{staticClass:"clickButton",on:{click:e.clickWxPayBut}},[e._v("支付")]),e._v(" "),t("div",[e._v(e._s(e.paySuccessResStr))])]),e._v(" "),t("div",{staticClass:"wxPay level-center vertical-center"},[t("button",{staticClass:"clickButton",on:{click:e.clickWxPayPopup}},[e._v("支付弹框测试")])]),e._v(" "),t("div",{staticClass:"share level-center vertical-center"},[t("van-icon",{attrs:{"class-prefix":"van-icon",name:"time"}}),e._v(" "),t("van-icon",{attrs:{"class-prefix":"van-icon",name:"xiangqing"}}),e._v(" "),t("van-icon",{attrs:{"class-prefix":"van-icon",name:"shijian"}}),e._v(" "),t("van-icon",{attrs:{"class-prefix":"van-icon",name:"coupon"}}),e._v(" "),t("van-field",{attrs:{placeholder:"请输入",icon:"time"},model:{value:e.inpVal,callback:function(n){e.inpVal=n},expression:"inpVal"}})],1),e._v(" "),t("div",{staticClass:"x2js level-center vertical-center"},[t("button",{staticClass:"clickButton",on:{click:e.clickJsonIcon}},[e._v("json2xml")]),e._v(" "),t("button",{staticClass:"clickButton",on:{click:e.clickXmlIcon}},[e._v("xml2json")])]),e._v(" "),t("div",{staticClass:"tipsWxShare level-center vertical-center"},[t("button",{staticClass:"clickButton",on:{click:e.clickShare1}},[e._v("分享提示")])])]),e._v(" "),t("popup-pay",{attrs:{show:e.popupPayData.show,showCoupon:!0,couponTypeCode:"ACTIVITY",showMarketMoney:!0,showPayMoney:!0,payMoney:4,orderId:-1},on:{"update:show":function(n){e.$set(e.popupPayData,"show",n)}}}),e._v(" "),t("tips-wx-share",{attrs:{show:e.tipsWxShare},on:{"update:show":function(n){e.tipsWxShare=n}}})],1)},staticRenderFns:[]};var _=t("VU/8")(w,x,!1,function(e){t("rRyu")},"data-v-f536798e",null);n.default=_.exports},ITKd:function(e,n){},fxnj:function(e,n){var t;t=window,e.exports=function(e,n){function t(n,t,o){e.WeixinJSBridge?WeixinJSBridge.invoke(n,i(t),function(e){s(n,e,o)}):r(n,o)}function o(n,t,o){e.WeixinJSBridge?WeixinJSBridge.on(n,function(e){o&&o.trigger&&o.trigger(e),s(n,e,t)}):r(n,o||t)}function i(e){return(e=e||{}).appId=T.appId,e.verifyAppId=T.appId,e.verifySignType="sha1",e.verifyTimestamp=T.timestamp+"",e.verifyNonceStr=T.nonceStr,e.verifySignature=T.signature,e}function a(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function s(e,n,t){"openEnterpriseChat"==e&&(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var o=n.errMsg;o||(o=n.err_msg,delete n.err_msg,o=function(e,n){var t=e,o=h[t];o&&(t=o);var i="ok";if(n){var a=n.indexOf(":");"confirm"==(i=n.substring(a+1))&&(i="ok"),"failed"==i&&(i="fail"),-1!=i.indexOf("failed_")&&(i=i.substring(7)),-1!=i.indexOf("fail_")&&(i=i.substring(5)),"access denied"!=(i=(i=i.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=i||(i="permission denied"),"config"==t&&"function not exist"==i&&(i="ok"),""==i&&(i="fail")}return n=t+":"+i}(e,o),n.errMsg=o),(t=t||{})._complete&&(t._complete(n),delete t._complete),o=n.errMsg||"",T.debug&&!t.isInnerInvoke&&alert(JSON.stringify(n));var i=o.indexOf(":");switch(o.substring(i+1)){case"ok":t.success&&t.success(n);break;case"cancel":t.cancel&&t.cancel(n);break;default:t.fail&&t.fail(n)}t.complete&&t.complete(n)}function c(e){if(e){for(var n=0,t=e.length;n<t;++n){var o=e[n],i=d[o];i&&(e[n]=i)}return e}}function r(e,n){if(!(!T.debug||n&&n.isInnerInvoke)){var t=h[e];t&&(e=t),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function u(){return(new Date).getTime()}function p(n){w&&(e.WeixinJSBridge?n():f.addEventListener&&f.addEventListener("WeixinJSBridgeReady",n,!1))}function l(){A.invoke||(A.invoke=function(n,t,o){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,i(t),o)},A.on=function(n,t){e.WeixinJSBridge&&WeixinJSBridge.on(n,t)})}if(!e.jWeixin){var d={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},h=function(){var e={};for(var n in d)e[d[n]]=n;return e}(),f=e.document,m=f.title,y=navigator.userAgent.toLowerCase(),v=navigator.platform.toLowerCase(),g=!(!v.match("mac")&&!v.match("win")),C=-1!=y.indexOf("wxdebugger"),w=-1!=y.indexOf("micromessenger"),x=-1!=y.indexOf("android"),_=-1!=y.indexOf("iphone")||-1!=y.indexOf("ipad"),S=function(){var e=y.match(/micromessenger\/(\d+\.\d+\.\d+)/)||y.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),k={initStartTime:u(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},M={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:_?1:x?2:-1,clientVersion:S,url:encodeURIComponent(location.href)},T={},F={_completes:[]},I={state:0,data:{}};p(function(){k.initEndTime=u()});var b=!1,P=[],A={config:function(e){T=e,r("config",e);var n=!1!==T.check;p(function(){if(n)t(d.config,{verifyJsApiList:c(T.jsApiList)},function(){F._complete=function(e){k.preVerifyEndTime=u(),I.state=1,I.data=e},F.success=function(e){M.isPreVerifyOk=0},F.fail=function(e){F._fail?F._fail(e):I.state=-1};var e=F._completes;return e.push(function(){!function(e){if(!(g||C||T.debug||S<"6.0.2"||M.systemType<0)){var n=new Image;M.appId=T.appId,M.initTime=k.initEndTime-k.initStartTime,M.preVerifyTime=k.preVerifyEndTime-k.preVerifyStartTime,A.getNetworkType({isInnerInvoke:!0,success:function(e){M.networkType=e.networkType;var t="https://open.weixin.qq.com/sdk/report?v="+M.version+"&o="+M.isPreVerifyOk+"&s="+M.systemType+"&c="+M.clientVersion+"&a="+M.appId+"&n="+M.networkType+"&i="+M.initTime+"&p="+M.preVerifyTime+"&u="+M.url;n.src=t}})}}()}),F.complete=function(n){for(var t=0,o=e.length;t<o;++t)e[t]();F._completes=[]},F}()),k.preVerifyStartTime=u();else{I.state=1;for(var e=F._completes,o=0,i=e.length;o<i;++o)e[o]();F._completes=[]}}),l()},ready:function(e){0!=I.state?e():(F._completes.push(e),!w&&T.debug&&e())},error:function(e){S<"6.0.2"||(-1==I.state?e(I.data):F._fail=e)},checkJsApi:function(e){t("checkJsApi",{jsApiList:c(e.jsApiList)},(e._complete=function(e){if(x){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=function(e){var n=e.checkResult;for(var t in n){var o=h[t];o&&(n[o]=n[t],delete n[t])}return e}(e)},e))},onMenuShareTimeline:function(e){o(d.onMenuShareTimeline,{complete:function(){t("shareTimeline",{title:e.title||m,desc:e.title||m,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){o(d.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?t("sendAppMessage",{title:e.title||m,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):t("sendAppMessage",{title:e.title||m,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){o(d.onMenuShareQQ,{complete:function(){t("shareQQ",{title:e.title||m,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){o(d.onMenuShareWeibo,{complete:function(){t("shareWeiboApp",{title:e.title||m,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){o(d.onMenuShareQZone,{complete:function(){t("shareQZone",{title:e.title||m,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){t("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){t("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){t("startRecord",{},e)},stopRecord:function(e){t("stopRecord",{},e)},onVoiceRecordEnd:function(e){o("onVoiceRecordEnd",e)},playVoice:function(e){t("playVoice",{localId:e.localId},e)},pauseVoice:function(e){t("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){t("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){o("onVoicePlayEnd",e)},uploadVoice:function(e){t("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){t("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){t("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){t("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(x){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){t(d.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){t("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){t("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===b?(b=!0,t("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(b=!1,P.length>0){var n=P.shift();wx.getLocalImgData(n)}},e))):P.push(e)},getNetworkType:function(e){t("getNetworkType",{},(e._complete=function(e){e=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var t=e.subtype;if(delete e.subtype,t)e.networkType=t;else{var o=n.indexOf(":"),i=n.substring(o+1);switch(i){case"wifi":case"edge":case"wwan":e.networkType=i;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){t("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},t(d.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){t("hideOptionMenu",{},e)},showOptionMenu:function(e){t("showOptionMenu",{},e)},closeWindow:function(e){t("closeWindow",{},e=e||{})},hideMenuItems:function(e){t("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){t("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){t("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){t("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){t("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(_){var n=e.resultStr;if(n){var t=JSON.parse(n);e.resultStr=t&&t.scan_code&&t.scan_code.scan_result}}},e))},openAddress:function(e){t(d.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))},openProductSpecificView:function(e){t(d.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var n=e.cardList,o=[],i=0,a=n.length;i<a;++i){var s=n[i],c={card_id:s.cardId,card_ext:s.cardExt};o.push(c)}t(d.addCard,{card_list:o},(e._complete=function(e){var n=e.card_list;if(n){for(var t=0,o=(n=JSON.parse(n)).length;t<o;++t){var i=n[t];i.cardId=i.card_id,i.cardExt=i.card_ext,i.isSuccess=!!i.is_succ,delete i.card_id,delete i.card_ext,delete i.is_succ}e.cardList=n,delete e.card_list}},e))},chooseCard:function(e){t("chooseCard",{app_id:T.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var n=e.cardList,o=[],i=0,a=n.length;i<a;++i){var s=n[i],c={card_id:s.cardId,code:s.code};o.push(c)}t(d.openCard,{card_list:o},e)},consumeAndShareCard:function(e){t(d.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){t(d.chooseWXPay,a(e),e)},openEnterpriseRedPacket:function(e){t(d.openEnterpriseRedPacket,a(e),e)},startSearchBeacons:function(e){t(d.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){t(d.stopSearchBeacons,{},e)},onSearchBeacons:function(e){o(d.onSearchBeacons,e)},openEnterpriseChat:function(e){t("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){t("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&e.length>0){var n=e.split("?")[0],t=e.split("?")[1];return n+=".html",void 0!==t?n+"?"+t:n}}(e.path),envVersion:e.envVersion},e)},miniProgram:{navigateBack:function(e){e=e||{},p(function(){t("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){p(function(){t("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){p(function(){t("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){p(function(){t("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){p(function(){t("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){p(function(){t("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(n){p(function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})})}}},D=1,W={};return f.addEventListener("error",function(e){if(!x){var n=e.target,t=n.tagName,o=n.src;if(("IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t)&&-1!=o.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var i=n["wx-id"];if(i||(i=D++,n["wx-id"]=i),W[i])return;W[i]=!0,wx.ready(function(){wx.getLocalImgData({localId:o,success:function(e){n.src=e.localData}})})}}},!0),f.addEventListener("load",function(e){if(!x){var n=e.target,t=n.tagName;if(n.src,"IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t){var o=n["wx-id"];o&&(W[o]=!1)}}},!0),n&&(e.wx=e.jWeixin=A),A}}(t)},rRyu:function(e,n){},yBY1:function(e,n){}});
//# sourceMappingURL=5.77526e9b13a76a532019.js.map