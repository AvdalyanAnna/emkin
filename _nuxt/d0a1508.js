(window.webpackJsonp=window.webpackJsonp||[]).push([[66,47],{1174:function(t,e,n){var content=n(1180);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("9506b95c",content,!0,{sourceMap:!1})},1175:function(t,e,n){"use strict";n.r(e);n(27);var c={props:{value:{type:[String,Boolean],default:!1},name:{type:String,default:"name"},checked:{type:Boolean,default:!1},light:{type:Boolean,default:!1},all:{type:Boolean,default:!1},error:{type:Boolean,default:!1}},computed:{Mods:function(){return{checkbox_light:this.light,checkbox_all:this.all}}}},o=(n(1179),n(13)),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("label",{staticClass:"checkbox",class:t.Mods},[e("input",{staticClass:"checkbox__input",attrs:{name:t.name,type:"checkbox"},domProps:{value:t.value,checked:t.checked},on:{change:function(e){return t.$emit("change")},input:function(e){return t.$emit("input",e.target.value)}}}),e("div",{staticClass:"checkbox__btn"},[e("div",{staticClass:"checkbox__icon",class:{input_error:t.error}},[e("svg-icon",{attrs:{name:"check",viewBox:"0 0 9 8"}})],1),e("div",{staticClass:"checkbox__text"},[t._t("default")],2)])])}),[],!1,null,null,null);e.default=component.exports},1179:function(t,e,n){"use strict";n(1174)},1180:function(t,e,n){var c=n(24)((function(i){return i[1]}));c.push([t.i,'.fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.checkbox{cursor:pointer;display:inline-flex;font-size:14rem;position:relative}.checkbox_light .checkbox__input:checked+.checkbox__btn .checkbox__icon{background:#7a8df1;border-color:#7a8df1}.checkbox_all .checkbox__icon:before{background:#fff;content:"";display:block;height:1px;width:7rem}.checkbox_all .checkbox__icon svg{display:none}.checkbox__btn{align-items:center;display:flex}.checkbox__input{display:none}.checkbox__input:checked+.checkbox__btn .checkbox__icon{background:#556dee;border-color:#556dee}.checkbox__input:checked+.checkbox__btn .checkbox__icon svg{opacity:1}.checkbox__icon{align-items:center;background:#fff;border:1px solid #d2d2d7;border-radius:5px;display:inline-flex;flex-shrink:0;height:20rem;justify-content:center;transition:.15s ease;width:20rem}.checkbox__icon.input_error{border-color:#eb5757}.checkbox__icon svg{fill:none;stroke:#fff;stroke-width:1.5;height:9rem;opacity:0;transition:.15s ease;width:11rem}.checkbox__text{margin-left:10rem}.checkbox__text .p{font-size:17rem}@media only screen and (max-width:580px){.checkbox__text .p{font-size:14rem}}.checkbox.error{animation:my-animation 3s;color:inherit}@keyframes my-animation{0%{color:#eb5757}to{color:#eb5757}}',""]),c.locals={},t.exports=c},1342:function(t,e,n){var content=n(1464);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("3fe27373",content,!0,{sourceMap:!1})},1407:function(t,e,n){"use strict";n.r(e);n(27),n(82),n(6),n(7),n(5),n(3),n(8),n(4),n(9);var c=n(0),o=(n(81),n(14),n(26));function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={props:{avatar:{type:String,default:""},last_message:{type:Object,default:function(){return{}}},name:{type:String,default:"Support"},time:{type:String,default:"07:00 am"},status:{type:[String,Number],default:""},conversation_id:{type:Number,default:0},desc:{type:String,default:""},counter:{type:Number,default:null},to:{type:String,default:""},slug:{type:String,default:""},checked:{type:Boolean,default:!1},button:{type:Boolean,default:!1},small:{type:Boolean,default:!1},checkbox:{type:Boolean,default:!0},isClickable:{type:Boolean,default:!1}},computed:l(l({},Object(o.c)({CONVERSATION_PAGE:"chat/CONVERSATION_PAGE",ACTIVE_CONVERSATION_ID:"chat/GET_ACTIVE_CONVERSATION_ID"})),{},{isSender:function(){return 0===this.last_message.is_sender},Mods:function(){return{"item-chat_btn":this.button,"is-small":this.small}}}),methods:l(l({},Object(o.d)({SET_MESSAGE_TO_LIST:"chat/SET_MESSAGE_TO_LIST",CHANGE_SIDEBAR_WHEN_SEND_MESSAGE:"chat/CHANGE_SIDEBAR_WHEN_SEND_MESSAGE",CHANGE_CHAT_USERS_LIST:"chat/CHANGE_CHAT_USERS_LIST",CHANGE_LIST_FROM_EVENT:"chat/CHANGE_LIST_FROM_EVENT",SET_MESSAGES_SEEN:"chat/SET_MESSAGES_SEEN",SET_MESSAGES_SEEN_ON_SIDEBAR:"chat/SET_MESSAGES_SEEN_ON_SIDEBAR"})),{},{disconnect:function(t){this.$echo.leave("send-message."+t)}}),beforeDestroy:function(){this.ACTIVE_CONVERSATION_ID&&this.disconnect(this.ACTIVE_CONVERSATION_ID)},created:function(){var t=this;this.conversation_id&&this.$echo.private("chat-conversation-readAt-all.".concat(this.conversation_id,"-").concat(this.$auth.user.id)).listen(".chat-conversation-readAt-all",(function(e){console.log("read_all",e),t.SET_MESSAGES_SEEN(e.conversation),t.SET_MESSAGES_SEEN_ON_SIDEBAR(e.conversation)}))}},m=(n(1463),n(13)),component=Object(m.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"item-chat",class:t.Mods},[t.checkbox?e("form-checkbox",{staticClass:"item-chat__checkbox",attrs:{checked:t.checked},nativeOn:{change:function(e){return t.$emit("changeCheckbox")}}}):t._e(),e(""!==t.to?"NuxtLink":"div",{tag:"component",staticClass:"item-chat__wrap",class:t.Mods,attrs:{to:""!==t.to&&t.to},on:{click:function(e){return t.$emit("change",t.conversation_id)}}},[t.avatar?e("span",{staticClass:"item-chat__avatar"},[e("set-img",{attrs:{"img-class":"object-fit",src:t.avatar,"default-img":t.avatar}})],1):e("span",{staticClass:"item-chat__icon"},[e("svg-icon",{attrs:{name:"headphones"}})],1),e("span",{staticClass:"item-chat__info"},[e("span",{staticClass:"item-chat__head"},[e("span",{staticClass:"item-chat__name p b"},[t._v(t._s(t.name))]),0==t.small?e("span",{staticClass:"item-chat__time"},[t._v(t._s(t.time))]):t._e()]),e("span",{staticClass:"item-chat__body"},[e("span",{staticClass:"item-chat__content"},[t.desc?e(t.isClickable?"NuxtLink":"span",{tag:"component",staticClass:"item-chat__desc",attrs:{to:!!t.isClickable&&t.slug}},[t._v(t._s(t.desc))]):t._e(),e("span",{staticClass:"item-chat__text"},[e("span",{staticClass:"item-chat__text-inner"},[t._t("default")],2),t.isSender?e("span",{staticClass:"chat-message__read",class:{"is-read":t.last_message.is_seen}},[e("svg-icon",{attrs:{name:"readMessage"}})],1):t._e()])],1),t.counter?e("span",{staticClass:"item-chat__counter"},[t._v(t._s(t.counter))]):t._e(),1==t.small?e("span",{staticClass:"item-chat__time"},[t._v(t._s(t.time))]):t._e()])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FormCheckbox:n(1175).default,SetImg:n(189).default})},1463:function(t,e,n){"use strict";n(1342)},1464:function(t,e,n){var c=n(24)((function(i){return i[1]}));c.push([t.i,".fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.item-chat{position:relative}.item-chat_btn{cursor:pointer}.item-chat_btn .item-chat__wrap{border-radius:7rem;padding:13rem 18rem 13rem 54rem;transition:.15s ease}.item-chat_btn .item-chat__head{justify-content:space-between}.item-chat_btn .item-chat__body{align-items:center;display:flex;justify-content:space-between}.item-chat_btn .item-chat__content{width:100%!important}.item-chat_btn .item-chat__desc{max-width:133rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.item-chat_btn .item-chat__text{align-items:center;display:flex;justify-content:space-between;max-width:100%!important}.item-chat_btn .item-chat__text-inner{max-width:210rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.item-chat_btn.isActive .item-chat__wrap,.item-chat_btn:hover .item-chat__wrap{background:#f5f7fb}.item-chat_btn.is-small .item-chat__wrap{padding-left:20rem;padding-right:4px}@media only screen and (max-width:420px){.item-chat_btn.is-small .item-chat__wrap{padding-right:35px}}.item-chat_btn.is-small .item-chat__content{margin-top:5rem}.item-chat_btn.is-small .item-chat__desc{max-width:100%}.item-chat_btn.is-small .item-chat__body{align-items:flex-end}@media only screen and (max-width:1120px){.item-chat_btn .item-chat__desc,.item-chat_btn .item-chat__text{max-width:90%}}@media only screen and (max-width:580px){.item-chat_btn .item-chat__wrap{border-radius:0;padding:15rem 10rem}.item-chat_btn .item-chat__name{font-size:17rem}.item-chat_btn .item-chat__avatar,.item-chat_btn .item-chat__icon{height:60rem;margin-right:15rem;min-width:60rem;width:60rem}.item-chat_btn .item-chat__info{width:calc(100% - 75rem)}}.item-chat__wrap{align-items:center;display:flex}.item-chat__checkbox.checkbox{left:15rem;margin-top:-12rem;position:absolute;top:50%}@media only screen and (max-width:580px){.item-chat__checkbox.checkbox{display:none}}.item-chat__avatar,.item-chat__icon{border-radius:100%;height:60rem;margin-right:15rem;min-width:60rem;width:60rem}@media only screen and (max-width:580px){.item-chat__avatar,.item-chat__icon{height:40rem;margin-right:10rem;min-width:40rem;width:40rem}}.item-chat__avatar{overflow:hidden;position:relative}.item-chat__icon{fill:none;stroke:#fff;stroke-width:1.5;align-items:center;background:#556dee;display:flex;justify-content:center}.item-chat__icon svg{height:24rem;width:24rem}.item-chat__info{display:block;width:100%}@media only screen and (max-width:580px){.item-chat__name{font-size:16rem}}.item-chat__head{align-items:center;display:flex}.item-chat__time{color:#aeaeae;margin-left:13rem;padding-top:3rem;white-space:nowrap}@media only screen and (max-width:580px){.item-chat__time{font-weight:400;padding-top:1px}}.item-chat__content{display:block;margin-top:7rem}@media only screen and (max-width:580px){.item-chat__content{margin-top:5rem}}.item-chat__desc{display:block;font-size:15rem;font-weight:500}.item-chat__desc:not(:last-child){margin-bottom:2px}.item-chat__text{color:#aeaeae;display:block}.item-chat__counter{align-items:center;background:#556dee;border-radius:100%;color:#fff;display:inline-flex;flex-shrink:0;height:22rem;justify-content:center;margin-top:4rem;width:22rem}.item-chat__status{align-items:center;background:#f4f3f4;border-radius:3px;color:#6e6e73;display:inline-flex;font-size:13rem;height:23rem;padding:0 7rem}",""]),c.locals={},t.exports=c}}]);