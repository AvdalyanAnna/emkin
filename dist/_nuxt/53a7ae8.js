(window.webpackJsonp=window.webpackJsonp||[]).push([[130,90],{1199:function(e,t,l){var content=l(1233);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(25).default)("2ba8f76c",content,!0,{sourceMap:!1})},1210:function(e,t,l){"use strict";l.r(t);var d={props:{id:{type:String,default:""},title:{type:String,default:""}}},n=(l(1232),l(13)),component=Object(n.a)(d,(function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{id:e.id,size:"statistic-size","modal-class":"modal-field","body-class":"modal-field__body","header-class":"modal-field__header","footer-class":"modal-field__footer",centered:""},scopedSlots:e._u([{key:"modal-header",fn:function(e){var l=e.close;return[t("button-close",{staticClass:"modal__close",nativeOn:{click:function(e){return l()}}})]}},{key:"modal-footer",fn:function(l){l.close;return[t("button-primary",{staticClass:"modal-field__btn",attrs:{blue:""},nativeOn:{click:function(t){return e.$emit("save")}}},[e._v("Save")])]}}])},[t("h3",{staticClass:"modal-field__title h3"},[e._v(e._s(e.title))]),t("div",{staticClass:"modal-field__content"},[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ButtonClose:l(123).default,ButtonPrimary:l(113).default})},1232:function(e,t,l){"use strict";l(1199)},1233:function(e,t,l){var d=l(24)((function(i){return i[1]}));d.push([e.i,'.fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.modal-field .modal-content{padding:25rem 15rem}@media only screen and (max-width:580px){.modal-field{padding:0!important}}.modal-field__title{font-family:"Atyp Display";font-weight:500}.modal-field__footer{border:0;margin-top:20rem}.modal-field__btn{width:100%}.modal-field__list{margin-top:25rem}.modal-field__label{font-size:16rem;font-weight:600;margin-bottom:10rem}.modal-field__item:not(:first-child){margin-top:20rem}',""]),d.locals={},e.exports=d},1350:function(e,t,l){var content=l(1483);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(25).default)("65ae7b16",content,!0,{sourceMap:!1})},1482:function(e,t,l){"use strict";l(1350)},1483:function(e,t,l){var d=l(24)((function(i){return i[1]}));d.push([e.i,'.fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.edit-field__row{align-items:center;display:flex;min-height:60rem}.edit-field__row:not(:first-child){margin-top:15rem}@media only screen and (max-width:580px){.edit-field__row{min-height:inherit}}.edit-field__column_left{width:35%}.edit-field__column_center{width:45%}.edit-field__column_right{align-items:center;display:flex;justify-content:flex-end;min-width:130rem;width:20%}@media only screen and (max-width:580px){.edit-field__column_center{width:55%}.edit-field__column_right{min-width:inherit;width:10%}}.edit-field__placeholder{font-family:"Gilroy";max-width:330px;overflow:hidden;padding-left:20rem;text-overflow:ellipsis;white-space:nowrap}@media only screen and (max-width:580px){.edit-field__placeholder{font-size:16rem;padding-left:0}}.edit-field__nav{display:flex}.edit-field__nav-item{padding:0 20rem}.edit-field__nav-item:not(:first-child){border-left:1px solid #d2d2d7}@media only screen and (max-width:1280px){.edit-field__nav-item{padding:0 10rem}.edit-field__nav-item:last-child{padding-right:0}}.edit-field__link{cursor:pointer;font-size:17rem;font-weight:600}.edit-field__link.color-gray{color:#9a9a9a}@media only screen and (max-width:580px){.edit-field__link{font-size:16rem}.edit-field .mobile-hidden{display:none}}@media only screen and (min-width:581px){.edit-field .mobile-visible{display:none}}.edit-field__icon{fill:#9a9a9a;height:24px;width:24px}.edit-field__icon:hover{fill:#556dee}.edit-field__icon-close{stroke:#9a9a9a}.edit-field__icon-close:hover{stroke:#eb5757}.edit-field__icon-checked{stroke:#9a9a9a;fill:transparent}.edit-field__icon-checked:hover{stroke:#3dbd00;fill:transparent}@media only screen and (max-width:1120px){.user-info_big .user-info__data{max-width:calc(100% - 130px)}}@media only screen and (max-width:580px){.user-info_big .user-info__data{max-width:calc(100% - 80px)}}',""]),d.locals={},e.exports=d},1546:function(e,t,l){"use strict";l.r(t);l(27);var d={props:{label:{type:String,default:"Label name"},name:{type:String,default:"name"},value:{type:String,default:""},placeholder:{type:String,default:"Alexandr"},type:{type:String,default:""},modalName:{type:String,default:""},groupName:{type:String,default:""},editText:{type:String,default:"Edit"},saveText:{type:String,default:"Save"},cancelText:{type:String,default:"Cancel"}},data:function(){return{oldValue:null,edit:!1,notError:!0}},watch:{value:function(e){this.notError=e.length>0,e===this.oldValue&&(this.notError=!1),this.$emit("input",e)}},methods:{showEdit:function(){this.edit=!0,this.notError=!0,this.oldValue=this.value},closeEdit:function(){this.edit=!1,this.value=this.oldValue},closeSave:function(){var e=this,form={};form[this.modalName]=this.value,this.notError&&this.value!==this.oldValue?this.$axios.$put("/users/settings",form).then((function(t){e.$auth.fetchUser().catch((function(){return e.$auth.logout()})),e.edit=!1})):this.notError=!1}}},n=(l(1482),l(13)),component=Object(n.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"edit-field"},[t("div",{staticClass:"edit-field__row"},[t("div",{staticClass:"edit-field__column edit-field__column_left"},[t("div",{staticClass:"edit-field__label color-gray p"},[e._v(e._s(e.label))])]),t("div",{staticClass:"edit-field__column edit-field__column_center"},[e.edit?t("form-input",{attrs:{name:e.name,placeholder:e.placeholder,type:e.type,error:!e.notError},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}):t("div",{staticClass:"edit-field__placeholder h4"},[e._v(e._s(e.value))])],1),t("div",{staticClass:"edit-field__column edit-field__column_right"},[e.edit?t("div",{staticClass:"edit-field__nav mobile-hidden"},[t("div",{staticClass:"edit-field__nav-item"},[t("div",{staticClass:"edit-field__link color-gray",on:{click:e.closeEdit}},[t("svg-icon",{staticClass:"edit-field__icon edit-field__icon-close",attrs:{name:"close"}})],1)]),t("div",{staticClass:"edit-field__nav-item"},[t("div",{staticClass:"edit-field__link color-blue",on:{click:e.closeSave}},[t("svg-icon",{staticClass:"edit-field__icon edit-field__icon-checked",attrs:{name:"check"}})],1)])]):t("div",{staticClass:"edit-field__nav mobile-hidden"},[t("div",{staticClass:"edit-field__nav-item"},[t("div",{staticClass:"edit-field__link color-blue",on:{click:e.showEdit}},[t("svg-icon",{staticClass:"edit-field__icon",attrs:{name:"edit"}})],1)])]),t("div",{staticClass:"edit-field__nav mobile-visible"},[t("div",{staticClass:"edit-field__nav-item"},[t("div",{staticClass:"edit-field__link color-blue",on:{click:function(t){return e.$bvModal.show("".concat(e.modalName))}}},[t("svg-icon",{staticClass:"edit-field__icon",attrs:{name:"edit"}})],1)])])])]),t("modal-field",{attrs:{id:e.modalName,title:e.groupName}},[t("div",{staticClass:"modal-field__list"},[t("div",{staticClass:"modal-field__item"},[t("div",{staticClass:"modal-field__label"},[e._v(e._s(e.label))]),t("form-input",{staticClass:"modal-field__input",attrs:{name:e.name,placeholder:e.placeholder,type:e.type,error:!e.notError},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{FormInput:l(253).default,ModalField:l(1210).default})}}]);