(window.webpackJsonp=window.webpackJsonp||[]).push([[91,107],{1349:function(t,e,n){var content=n(1480);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("800c80a0",content,!0,{sourceMap:!1})},1479:function(t,e,n){"use strict";n(1349)},1480:function(t,e,n){var o=n(24)((function(i){return i[1]}));o.push([t.i,".fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.date{align-items:center;color:#9a9a9a;display:inline-flex;font-size:16rem;font-weight:500}@media only screen and (max-width:580px){.date{font-size:14rem}}.date__icon{fill:#9a9a9a;height:16rem;margin-right:10rem;width:16rem}@media only screen and (max-width:580px){.date__icon{height:14rem;margin-right:8rem;width:14rem}}",""]),o.locals={},t.exports=o},1512:function(t,e,n){var content=n(1664);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("26022b2e",content,!0,{sourceMap:!1})},1518:function(t,e,n){"use strict";n.r(e);var o={props:{icon:{type:String,default:"clock"}}},r=(n(1479),n(13)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"date"},[e("svg-icon",{staticClass:"date__icon",class:"date__icon__icon_".concat(t.icon),attrs:{name:t.icon}}),e("div",{staticClass:"date__text"},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=component.exports},1663:function(t,e,n){"use strict";n(1512)},1664:function(t,e,n){var o=n(24)((function(i){return i[1]}));o.push([t.i,'.fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.modal-notification .modal-content{padding:50rem}@media only screen and (max-width:580px){.modal-notification{padding:0!important}.modal-notification .modal-content{padding:25rem 15rem}.modal-notification__date{display:none!important}}.modal-notification__title{font-family:"Gilroy";font-weight:600;margin-top:30rem}@media only screen and (max-width:580px){.modal-notification__title{font-size:20rem;margin-top:0;max-width:calc(100% - 60rem)}}.modal-notification__content{color:#6e6e73;line-height:1.3;margin-top:20rem;min-height:220rem}@media only screen and (max-width:580px){.modal-notification__content{font-size:16rem;margin-top:15rem;min-height:200rem}}.modal-notification__footer{border:0;margin-top:30rem}@media only screen and (max-width:580px){.modal-notification__footer{display:block;margin-top:25rem}}.modal-notification__close{min-width:160rem}@media only screen and (max-width:580px){.modal-notification__close{display:none}}.modal-notification__buttons{display:none}@media only screen and (max-width:580px){.modal-notification__buttons{display:flex;margin:-5rem}.modal-notification__buttons>*{margin:5rem;width:calc(50% - 10rem)}}',""]),o.locals={},t.exports=o},1769:function(t,e,n){"use strict";n.r(e);var o={props:{date:{type:String,default:"22.04.2022 - 11:22"},title:{type:String,default:"Did you buy something? Leave a review about the seller 1"},content:{type:String,default:"\n\t\t\t\t<p>Pick it up from the pick-up point before 21:00 on Thursday, January 27, then the order will have to be canceled. Entering the pick—up point only with a mask and gloves - this will help.</p>\n\t\t\t\t<p>Pick it up from the pick-up point before 21:00 on Thursday, January 27, then the order will have to be canceled. Entering the pick—up point only with a mask and gloves - this will help.</p>\n\t\t\t"}}},r=(n(1663),n(13)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("b-modal",{ref:"modal-notification",attrs:{id:"modal-notification",size:"notification-size","modal-class":"modal-notification","body-class":"modal-notification__body","header-class":"modal-notification__header","footer-class":"modal-notification__footer",centered:""},scopedSlots:t._u([{key:"modal-header",fn:function(t){var n=t.close;return[e("button-close",{staticClass:"modal__close",nativeOn:{click:function(t){return n()}}})]}},{key:"modal-footer",fn:function(n){var o=n.close;return[e("button-primary",{staticClass:"modal-notification__close",attrs:{border:""},nativeOn:{click:function(t){return o()}}},[t._v("Close")]),e("div",{staticClass:"modal-notification__buttons"},[e("button-primary",{staticClass:"modal-notification__btn",attrs:{gray:""},nativeOn:{click:function(t){return o()}}},[t._v("Delete")]),e("button-primary",{staticClass:"modal-notification__btn",attrs:{blue:""},nativeOn:{click:function(t){return o()}}},[t._v("Actions")])],1)]}}])},[t.date?e("module-date",{staticClass:"modal-notification__date"},[t._v(t._s(t.$dateFns.format(new Date(t.date),"dd.MM.yyyy hh:mm ")))]):t._e(),e("div",{staticClass:"modal-notification__title h4"},[t._v(t._s(t.title))]),e("div",{staticClass:"modal-notification__content content",domProps:{innerHTML:t._s(t.content)}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ButtonClose:n(123).default,ModuleDate:n(1518).default,ButtonPrimary:n(113).default})}}]);