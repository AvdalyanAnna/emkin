(window.webpackJsonp=window.webpackJsonp||[]).push([[95,47],{1174:function(e,t,o){var content=o(1180);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(25).default)("9506b95c",content,!0,{sourceMap:!1})},1175:function(e,t,o){"use strict";o.r(t);o(27);var n={props:{value:{type:[String,Boolean],default:!1},name:{type:String,default:"name"},checked:{type:Boolean,default:!1},light:{type:Boolean,default:!1},all:{type:Boolean,default:!1},error:{type:Boolean,default:!1}},computed:{Mods:function(){return{checkbox_light:this.light,checkbox_all:this.all}}}},c=(o(1179),o(13)),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("label",{staticClass:"checkbox",class:e.Mods},[t("input",{staticClass:"checkbox__input",attrs:{name:e.name,type:"checkbox"},domProps:{value:e.value,checked:e.checked},on:{change:function(t){return e.$emit("change")},input:function(t){return e.$emit("input",t.target.value)}}}),t("div",{staticClass:"checkbox__btn"},[t("div",{staticClass:"checkbox__icon",class:{input_error:e.error}},[t("svg-icon",{attrs:{name:"check",viewBox:"0 0 9 8"}})],1),t("div",{staticClass:"checkbox__text"},[e._t("default")],2)])])}),[],!1,null,null,null);t.default=component.exports},1179:function(e,t,o){"use strict";o(1174)},1180:function(e,t,o){var n=o(24)((function(i){return i[1]}));n.push([e.i,'.fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.checkbox{cursor:pointer;display:inline-flex;font-size:14rem;position:relative}.checkbox_light .checkbox__input:checked+.checkbox__btn .checkbox__icon{background:#7a8df1;border-color:#7a8df1}.checkbox_all .checkbox__icon:before{background:#fff;content:"";display:block;height:1px;width:7rem}.checkbox_all .checkbox__icon svg{display:none}.checkbox__btn{align-items:center;display:flex}.checkbox__input{display:none}.checkbox__input:checked+.checkbox__btn .checkbox__icon{background:#556dee;border-color:#556dee}.checkbox__input:checked+.checkbox__btn .checkbox__icon svg{opacity:1}.checkbox__icon{align-items:center;background:#fff;border:1px solid #d2d2d7;border-radius:5px;display:inline-flex;flex-shrink:0;height:20rem;justify-content:center;transition:.15s ease;width:20rem}.checkbox__icon.input_error{border-color:#eb5757}.checkbox__icon svg{fill:none;stroke:#fff;stroke-width:1.5;height:9rem;opacity:0;transition:.15s ease;width:11rem}.checkbox__text{margin-left:10rem}.checkbox__text .p{font-size:17rem}@media only screen and (max-width:580px){.checkbox__text .p{font-size:14rem}}.checkbox.error{animation:my-animation 3s;color:inherit}@keyframes my-animation{0%{color:#eb5757}to{color:#eb5757}}',""]),n.locals={},e.exports=n},1297:function(e,t,o){var content=o(1384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(25).default)("56736d07",content,!0,{sourceMap:!1})},1383:function(e,t,o){"use strict";o(1297)},1384:function(e,t,o){var n=o(24)((function(i){return i[1]}));n.push([e.i,'.fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.modal-question{padding:0}.modal-question .modal-content{padding:60rem}@media only screen and (max-width:580px){.modal-question .modal-content{border-radius:10rem 10rem 0 0;padding:20rem 15rem}}.modal-question__title{font-family:"Atyp Display"}@media only screen and (max-width:580px){.modal-question__title{font-weight:500}}.modal-question__desc{line-height:1.3;margin-top:15rem;max-width:430rem}@media only screen and (max-width:580px){.modal-question__desc{font-size:16rem;font-weight:500;margin-top:20rem}}.modal-question__footer{align-items:center;border:0;display:flex;justify-content:space-between;margin-top:30rem;padding:0}.modal-question__btn{min-width:147rem}.modal-question__btn:not(:last-child){margin-right:10rem}@media only screen and (max-width:580px){.modal-question__btn{width:100%}.modal-question__btn:not(:last-child){margin-right:0;margin-top:5rem}}.modal-question__btn-file{position:relative}.modal-question__btn-file input{height:100%;left:0;opacity:0;position:absolute;top:0;width:100%}@media only screen and (max-width:580px){.modal-question__checkbox{font-size:17rem;margin-bottom:30rem}.modal-question__buttons{flex-direction:column-reverse;width:100%}}',""]),n.locals={},e.exports=n},1420:function(e,t,o){"use strict";o.r(t);o(7),o(65);var n={props:{content:{type:Object,default:{}}},data:function(){return{checkbox:!1}},methods:{closeModal:function(){this.checkbox&&localStorage.setItem("withoutPhoto","true"),this.$bvModal.hide("modal-question"),this.$emit("close")}}},c=(o(1383),o(13)),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("b-modal",{ref:"modal-question",attrs:{id:"modal-question",size:"question-size","modal-class":"modal-question","body-class":"modal-question__body","header-class":"modal-question__header","footer-class":"modal-question__footer",centered:""},scopedSlots:e._u([{key:"modal-header",fn:function(e){var o=e.close;return[t("button-close",{staticClass:"modal__close",nativeOn:{click:function(e){return o()}}})]}},{key:"modal-footer",fn:function(o){o.close;return[t("form-checkbox",{staticClass:"modal-question__checkbox",attrs:{checked:e.checkbox},on:{change:function(){return e.checkbox=!e.checkbox}}},[e._v(e._s(e.content.checkbox))]),t("div",{staticClass:"modal-question__buttons flex"},[t("button-primary",{staticClass:"modal-question__btn",attrs:{gray:""},nativeOn:{click:function(t){return e.closeModal()}}},[e._v(e._s(e.content.btnClose))]),t("button-primary",{staticClass:"modal-question__btn modal-question__btn-file",attrs:{blue:""}},[t("input",{ref:"files",staticClass:"button-file__input",attrs:{name:"files",id:"files1",accept:".jpeg, .jpg, .png",type:"file",multiple:""},on:{change:function(t){return e.$emit("change")}}}),e._v(e._s(e.content.btnSave))])],1)]}}])},[t("h3",{staticClass:"modal-question__title h3"},[e._v(e._s(e.content.title))]),t("div",{staticClass:"modal-question__desc p",domProps:{innerHTML:e._s(e.content.description)}})])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ButtonClose:o(123).default,FormCheckbox:o(1175).default,ButtonPrimary:o(113).default})}}]);