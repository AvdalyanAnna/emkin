(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{1211:function(e,t,n){var content=n(1258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("75152888",content,!0,{sourceMap:!1})},1257:function(e,t,n){"use strict";n(1211)},1258:function(e,t,n){var o=n(24)((function(i){return i[1]}));o.push([e.i,".fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.back-nav{border-bottom:1px solid #d2d2d7}@media only screen and (max-width:580px){.back-nav_mobile{border:1px solid #d2d2d7;border-radius:10rem;padding:2px}.back-nav_mobile .back-nav__btn{align-items:center;border:0;border-radius:8rem;display:inline-flex;font-size:15rem;height:38rem;justify-content:center;margin-bottom:0;padding:0 10rem!important;width:100%}.back-nav_mobile .back-nav__btn.isActive{background:#f4f3f4}.back-nav_mobile .back-nav__item{border:0}.back-nav_mobile-blue .back-nav__btn{color:#062439}.back-nav_mobile-blue .back-nav__btn.isActive{background:#556dee;color:#fff}.back-nav:not(.back-nav_mobile){border-bottom:0;margin-left:-15rem;margin-right:-15rem;overflow:hidden}.back-nav:not(.back-nav_mobile) .back-nav__list{margin-bottom:-40px;overflow-x:auto;overflow-y:hidden;padding-bottom:41px;padding-left:15rem;padding-right:15rem}}.back-nav_blue .back-nav__btn.isActive{border-color:#556dee;color:#556dee}.back-nav__sort{color:#062439;font-size:17rem;font-weight:600}.back-nav__sort .select__value{color:#062439}.back-nav__sort .select__arrow{margin-left:6rem}.back-nav__sort .select__label{color:#9a9a9a}.back-nav__sort .select__head{padding-right:0}@media only screen and (max-width:580px){.back-nav__column{width:100%}.back-nav__column_right{display:none}}.back-nav__list{flex-wrap:nowrap;width:100%}@media only screen and (max-width:580px){.back-nav__item{border-bottom:1px solid #d2d2d7;width:100%}}.back-nav__btn{border-bottom:2px solid transparent;color:#9a9a9a;cursor:pointer;display:inline-flex;font-size:16rem;font-weight:600;line-height:19rem;margin-bottom:-1px;min-height:30px;padding:0 25rem 10rem;position:relative;text-align:center;transition:.15s ease}.back-nav__btn.isActive,.back-nav__btn.nuxt-link-active{border-color:#062439;color:#062439}.back-nav__btn.isActive .back-nav__counter,.back-nav__btn.nuxt-link-active .back-nav__counter{color:#556dee}@media only screen and (max-width:580px){.back-nav__btn{padding-left:25rem;padding-right:25rem;white-space:nowrap}}.back-nav__grid-switch{margin-left:30rem;padding-top:3rem}@media only screen and (max-width:580px){.back-nav__buttons{justify-content:space-between;width:100%}}.back-nav__read{font-size:16rem;font-weight:500}.back-nav__read.color-gray{color:#9a9a9a}.back-nav__counter{color:#6e6e73;margin-left:5rem}",""]),o.locals={},e.exports=o},1274:function(e,t,n){"use strict";n.r(t);n(81);var o={props:{nav:{type:Array,default:function(){return[]}},blue:{type:Boolean,default:!1},mobile:{type:Boolean,default:!1},mobileBlue:{type:Boolean,default:!1},activeRouterClass:{type:String,default:"nuxt-link-active"},active:{type:Number,default:0},keyActive:{type:String,default:""}},computed:{Mods:function(){return{"back-nav_blue":this.blue,"back-nav_mobile":this.mobile,"back-nav_mobile-blue":this.mobileBlue}}}},r=(n(1257),n(13)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"back-nav",class:e.Mods},[t("div",{staticClass:"back-nav__row flex flex_justify"},[t("div",{staticClass:"back-nav__column back-nav__column_left"},[t("div",{staticClass:"back-nav__list flex"},e._l(e.nav,(function(n,i){return t("div",{staticClass:"back-nav__item"},[""!==n.to&&n.to?t("NuxtLink",{staticClass:"back-nav__btn",class:[n.class,{isActive:""!==e.keyActive&&n.key===e.keyActive}],attrs:{"active-class":e.activeRouterClass,to:e.$changeRoute(n.to)}},[e._v(e._s(n.text)),n.counter?t("span",{staticClass:"back-nav__counter"},[e._v(e._s(n.counter))]):e._e()]):e._e()],1)})),0)]),t("div",{staticClass:"back-nav__column back-nav__column_right"},[e._t("default")],2)])])}),[],!1,null,null,null);t.default=component.exports}}]);