(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{1303:function(e,o,d){var content=d(1396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,d(25).default)("60a22fd4",content,!0,{sourceMap:!1})},1395:function(e,o,d){"use strict";d(1303)},1396:function(e,o,d){var r=d(24)((function(i){return i[1]}));r.push([e.i,".fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.entry-block__form{max-width:310px}.password-recommended{align-items:center;display:flex;justify-content:space-between;margin-top:10px}.password-recommended-error .password-recommended__text{color:#cc4115}.password-recommended-error .password-recommended__item.active{background:#cc4115}.password-recommended-success .password-recommended__text{color:#4bb917}.password-recommended-success .password-recommended__item.active{background:#4bb917}.password-recommended-warning .password-recommended__text{color:#ddc914}.password-recommended-warning .password-recommended__item.active{background:#ddc914}.password-recommended__list{align-items:center;display:flex;gap:12px;justify-content:center;width:100%}.password-recommended__item{background:#d1d1d1;border-radius:30px;height:4px;margin:0 1px;transition:background .3s;width:100%}.password-recommended__item:first-child{margin-left:0}.password-recommended__item:last-child{margin-right:0}.password-recommended__item.active{background:#ff5040}.password-recommended__text{color:#ff5040;font-size:12px;font-weight:400;line-height:16px;margin-left:0}.recommended{background:#f7f8fa;border:1px solid #ebeef5;border-radius:4px;box-sizing:border-box;color:#38455d;font-size:14px;font-weight:400;line-height:24px;padding:8px;text-align:right;width:100%}.recommended-title{font-weight:500;margin-bottom:4px}.recommended-icon{margin-left:8px}.recommended__list{margin-bottom:4px}.recommended__list:last-child{margin-bottom:0}.recommended__list li{align-items:center;display:flex;margin-bottom:4px}.recommended__list li .recommended-icon{margin-left:8px}.recommended__list .recommended-error{color:#ff5040}.entry-block-first-change-password .entry-block__right{padding-top:10vh}.entry-block-first-change-password .entry-block__header{margin-bottom:5vh}.popup-block .recommended,.popup-block .recommended-inner{background-color:#f7f8fa;border:none;height:100%}.popup-block .recommended{padding:32px}.popup-block .recommended__list li{margin-bottom:8px}@media(max-width:767px){.popup-block .recommended{padding:0}}",""]),r.locals={},e.exports=r},1426:function(e,o,d){"use strict";d.r(o);d(81);var r={name:"RecommendedPassword",props:{recommended:{type:Object,required:!0},recommendedPasswordCount:{type:Number,default:0},recommendedType:{type:String,default:"error"},withoutList:{type:Boolean,default:!1},withoutDots:{type:Boolean,default:!1}}},t=(d(1395),d(13)),component=Object(t.a)(r,(function(){var e=this,o=e._self._c;return o("div",{staticClass:"recommended-inner"},[e.withoutDots?e._e():o("div",{staticClass:"password-recommended mt-2 mb-4",class:"password-recommended-".concat(e.recommendedType)},[o("div",{staticClass:"password-recommended__list",class:e.recommendedType},e._l(5,(function(d){return o("div",{key:d,staticClass:"password-recommended__item",class:{active:d<=e.recommendedPasswordCount}})})),0)])])}),[],!1,null,null,null);o.default=component.exports}}]);