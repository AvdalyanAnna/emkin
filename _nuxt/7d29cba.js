(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1298:function(e,t,o){var content=o(1386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(25).default)("4010e52f",content,!0,{sourceMap:!1})},1385:function(e,t,o){"use strict";o(1298)},1386:function(e,t,o){var n=o(24)((function(i){return i[1]}));n.push([e.i,'.fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.modal-question{padding:0}.modal-question .modal-content{padding:60rem}@media only screen and (max-width:580px){.modal-question .modal-content{border-radius:10rem 10rem 0 0;padding:20rem 15rem}}.modal-question__title{font-family:"Atyp Display"}@media only screen and (max-width:580px){.modal-question__title{font-weight:500}}.modal-question__desc{line-height:1.3;margin-top:15rem;max-width:430rem}@media only screen and (max-width:580px){.modal-question__desc{font-size:16rem;font-weight:500;margin-top:20rem}}.modal-question__footer{align-items:center;border:0;display:flex;justify-content:space-between;margin-top:30rem;padding:0}.modal-question__btn{min-width:147rem}.modal-question__btn:not(:last-child){margin-right:10rem}@media only screen and (max-width:580px){.modal-question__btn{width:100%}.modal-question__btn:not(:last-child){margin-right:0;margin-top:5rem}.modal-question__checkbox{font-size:17rem;margin-bottom:30rem}.modal-question__buttons{flex-direction:column-reverse;width:100%}}',""]),n.locals={},e.exports=n},1421:function(e,t,o){"use strict";o.r(t);var n={props:{title:{type:String,default:"Save as a draft?"},desc:{type:String,default:"You leave the ad creation page. <br>Save your ad as a draft?"}}},r=(o(1385),o(13)),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{id:"modal-question2",size:"question-size","modal-class":"modal-question","body-class":"modal-question__body","header-class":"modal-question__header","footer-class":"modal-question__footer",centered:""},scopedSlots:e._u([{key:"modal-header",fn:function(e){var o=e.close;return[t("button-close",{staticClass:"modal__close",nativeOn:{click:function(e){return o()}}})]}},{key:"modal-footer",fn:function(o){var n=o.close;return[t("div",{staticClass:"modal-question__buttons flex"},[t("button-primary",{staticClass:"modal-question__btn",attrs:{gray:""},nativeOn:{click:function(e){return n()}}},[e._v("Remove")]),t("button-primary",{staticClass:"modal-question__btn",attrs:{blue:""},nativeOn:{click:function(e){return n()}}},[e._v("Save a draft")])],1)]}}])},[t("h3",{staticClass:"modal-question__title h3"},[e._v(e._s(e.title))]),t("div",{staticClass:"modal-question__desc p",domProps:{innerHTML:e._s(e.desc)}})])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ButtonClose:o(123).default,ButtonPrimary:o(113).default})}}]);