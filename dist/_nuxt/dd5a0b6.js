(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{1355:function(e,t,n){var content=n(1496);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("50557e18",content,!0,{sourceMap:!1})},1495:function(e,t,n){"use strict";n(1355)},1496:function(e,t,n){var r=n(24)((function(i){return i[1]}));r.push([e.i,".fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.single-content__content{font-weight:400;line-height:150%;padding-right:45rem}.single-content__content>:not(:last-child){margin-bottom:28rem}@media only screen and (max-width:990px){.single-content__content{padding-right:0}}@media only screen and (max-width:580px){.single-content__content{line-height:21rem}.single-content__content>:not(:last-child){margin-bottom:20rem}}.single-content__more{cursor:pointer;margin-top:30rem}@media only screen and (max-width:580px){.single-content__more{margin-top:20rem}}.single-content__heading{margin-bottom:30rem}.single-content__list{margin-bottom:15rem}.single-content__list-item{display:block;margin-bottom:15rem;margin-right:30rem}.single-content__list b{color:#212d38;margin-left:10rem}@media only screen and (max-width:580px){.single-content__list,.single-content__list-item{margin-bottom:10rem}}",""]),r.locals={},e.exports=r},1551:function(e,t,n){"use strict";n.r(t);n(7),n(65),n(27),n(5),n(3),n(31),n(6),n(8),n(4),n(9);var r=n(0),o=n(26);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var l={props:{description:{type:String},answers:{type:Array,default:[]},content:{type:Object,default:{}}},data:function(){return{readMore:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)({PAGE_PRODUCT_DERAILS:"pages/PAGE_PRODUCT_DERAILS"}))},d=l,m=(n(1495),n(13)),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"single-content"},[t("h3",{staticClass:"single-content__heading h3"},[e._v(e._s(e.PAGE_PRODUCT_DERAILS.description))]),t("ul",{staticClass:"single-content__list color-gray flex flex_vertical p"},e._l(e.answers,(function(n,i){return t("li",{key:i,staticClass:"single-content__list-item"},[e._v(e._s(n.filter.name)),t("b",[e._v(e._s(n.name))])])})),0),t("div",{staticClass:"single-content__content content h4"},[t("p",[e._v(" "+e._s(!1==!e.readMore?e.description:e.description.slice(0,310)+"..."))]),e.description.split("").length>310?t("span",{staticClass:"single-content__more blue-link p",on:{click:function(t){e.readMore=!e.readMore}}},[e._v(" "+e._s(!1===e.readMore?e.content.moreDesc:e.content.hideDesc))]):e._e()])])}),[],!1,null,null,null);t.default=component.exports}}]);