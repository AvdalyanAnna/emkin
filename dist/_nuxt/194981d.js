(window.webpackJsonp=window.webpackJsonp||[]).push([[104,48],{1515:function(e,t,n){var content=n(1670);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("10fb9eef",content,!0,{sourceMap:!1})},1669:function(e,t,n){"use strict";n(1515)},1670:function(e,t,n){var o=n(24)((function(i){return i[1]}));o.push([e.i,".fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.checkbox-btn{display:block;line-height:1}.checkbox-btn:hover .checkbox-btn__btn{background:#f5f5f7;color:#556dee}.checkbox-btn__input{display:none}.checkbox-btn__input:checked+.checkbox-btn__wrap{background:#f5f5f7;color:#556dee;font-weight:600}.checkbox-btn__input:checked+.checkbox-btn__wrap .checkbox-btn__icon{opacity:1;visibility:visible}@media only screen and (max-width:580px){.checkbox-btn__input:checked+.checkbox-btn__wrap{background:none;color:#556dee}.checkbox-btn__input:checked+.checkbox-btn__wrap .checkbox-btn__icon{background:#556dee;border-color:#556dee}.checkbox-btn__input:checked+.checkbox-btn__wrap .checkbox-btn__icon svg{opacity:1}}.checkbox-btn__wrap{align-items:center;border-radius:5px;cursor:pointer;display:flex;justify-content:space-between;padding:10rem;transition:.2s ease}@media only screen and (max-width:580px){.checkbox-btn__wrap{background:none;font-weight:600;padding:0 7rem 0 0}}.checkbox-btn__icon{stroke:#556dee;stroke-width:2;stroke-linecap:square;align-items:center;display:inline-flex;flex-shrink:0;height:20rem;justify-content:center;margin-left:15rem;margin-right:-4rem;opacity:0;transition:.2s ease;visibility:hidden;width:20rem}.checkbox-btn__icon svg{height:9rem;width:10rem}.checkbox-btn__icon svg:nth-child(2){display:none}@media only screen and (max-width:580px){.checkbox-btn__icon{border:1px solid #d2d2d7;border-radius:3px;height:15rem;margin-right:0;opacity:1;visibility:visible;width:15rem}.checkbox-btn__icon svg{opacity:0}.checkbox-btn__icon svg:first-child{display:none}.checkbox-btn__icon svg:nth-child(2){fill:none;stroke:#fff;stroke-width:2;display:block;height:8rem;transition:.12s ease;width:9rem}.checkbox-btn{font-size:14rem;line-height:1}.checkbox-btn:hover .checkbox-btn__btn{background:none;color:#062439}}",""]),o.locals={},e.exports=o},1705:function(e,t,n){var content=n(1837);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("91014b04",content,!0,{sourceMap:!1})},1772:function(e,t,n){"use strict";n.r(t);n(27);var o={props:{value:{type:String,default:""},name:{type:String,default:"name"}}},c=(n(1669),n(13)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("label",{staticClass:"checkbox-btn"},[t("input",{staticClass:"checkbox-btn__input",attrs:{type:"checkbox",name:e.name},domProps:{value:e.value},on:{change:function(t){return e.$emit("change")}}}),t("span",{staticClass:"checkbox-btn__wrap"},[t("span",{staticClass:"checkbox-btn__text"},[e._v(e._s(e.value))]),t("span",{staticClass:"checkbox-btn__icon"},[t("svg-icon",{attrs:{name:"close"}}),t("svg-icon",{attrs:{name:"check"}})],1)])])}),[],!1,null,null,null);t.default=component.exports},1836:function(e,t,n){"use strict";n(1705)},1837:function(e,t,n){var o=n(24)((function(i){return i[1]}));o.push([e.i,".fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.accordion{border-top:1px solid #d2d2d7}.accordion.is-active .accordion__arrow svg{transform:rotate(-180deg)}.accordion__head{align-items:center;cursor:pointer;display:flex;justify-content:space-between;line-height:1;padding:20rem 10rem 20rem 0;transition:.15s ease}@media only screen and (max-width:990px){.accordion__head{line-height:1;min-height:inherit;padding:25rem 10rem}}.accordion__title{font-weight:600}@media only screen and (max-width:990px){.accordion__title{font-size:15rem}}.accordion__arrow{fill:none;stroke:#86868b;stroke-width:2;flex-shrink:0;height:7rem;margin-left:20rem;width:11rem}.accordion__arrow svg{height:100%;transition:.2s ease;width:100%}.accordion__body{margin-left:-10rem;margin-top:-5rem;padding-left:10rem;padding-top:5rem}.accordion__list{margin-top:-5rem;padding-bottom:10rem}@media only screen and (max-width:990px){.accordion__list{margin-top:0;padding-bottom:20rem;padding-left:10rem}}.accordion__item{margin-top:1px}@media only screen and (max-width:580px){.accordion__item{margin-top:0}.accordion__item:not(:first-child){margin-top:18rem}}.accordion__checkbox{margin-left:-10rem}@media only screen and (max-width:580px){.accordion__checkbox{margin-left:0}}.accordion__more{color:#556dee;cursor:pointer;display:inline-flex;line-height:1;margin-bottom:15rem}@media only screen and (max-width:990px){.accordion__more{font-size:14rem;margin-bottom:20rem;margin-left:10rem}}.accordion__fields{display:flex}.accordion__fields .input{width:100%}@media only screen and (max-width:580px){.accordion__fields{margin:-5rem}.accordion__fields>*{margin:5rem;width:calc(50% - 10rem)}}",""]),o.locals={},e.exports=o},1936:function(e,t,n){"use strict";n.r(t);n(27);var o={props:{groupName:{type:String,default:null},title:{type:String,default:""},name:{type:String,default:"name"},visible:{type:Boolean,default:!1},content:{type:Boolean,default:!1},list:{type:Array,default:function(){return[]}}},data:function(){return{active:this.visible}},computed:{Mods:function(){return{"is-active":this.active}}},methods:{ToggleAccordion:function(){this.active=!this.active}}},c=(n(1836),n(13)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"accordion",class:e.Mods},[t("div",{staticClass:"accordion__head",attrs:{role:"tab"},on:{click:e.ToggleAccordion}},[t("div",{staticClass:"accordion__title"},[e._v(e._s(e.title))]),t("div",{staticClass:"accordion__arrow"},[t("svg-icon",{attrs:{name:"arrowDown"}})],1)]),t("b-collapse",{staticClass:"accordion__body",attrs:{accordion:e.groupName,role:"tabpanel"},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[e.content?t("div",{staticClass:"accordion__content"},[e._t("default")],2):t("div",{staticClass:"accordion__list"},e._l(e.list,(function(n,i){return t("div",{key:i,staticClass:"accordion__item"},[t("form-checkbox-btn",{staticClass:"accordion__checkbox",attrs:{value:n.name,name:n.name},on:{change:function(t){return e.$emit("change",n.id)}}})],1)})),0),e.list.length>5?t("div",{staticClass:"accordion__more"},[e._v("Моrе")]):e._e()])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{FormCheckboxBtn:n(1772).default})}}]);