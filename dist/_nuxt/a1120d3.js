(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1340:function(e,t,o){var content=o(1454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(25).default)("109d5b5f",content,!0,{sourceMap:!1})},1453:function(e,t,o){"use strict";o(1340)},1454:function(e,t,o){var c=o(24)((function(i){return i[1]}));c.push([e.i,'.fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.checkbox{cursor:pointer;display:inline-flex;font-size:14rem;position:relative}.checkbox_light .checkbox__input:checked+.checkbox__btn .checkbox__icon{background:#7a8df1;border-color:#7a8df1}.checkbox_all .checkbox__icon:before{background:#fff;content:"";display:block;height:1px;width:7rem}.checkbox_all .checkbox__icon svg{display:none}.checkbox__btn{align-items:center;display:flex}.checkbox__input{display:none}.checkbox__input:checked+.checkbox__btn .checkbox__icon{background:#556dee;border-color:#556dee}.checkbox__input:checked+.checkbox__btn .checkbox__icon svg{opacity:1}.checkbox__icon{align-items:center;background:#fff;border:1px solid #d2d2d7;border-radius:5px;display:inline-flex;flex-shrink:0;height:20rem;justify-content:center;transition:.15s ease;width:20rem}.checkbox__icon.input_error{border-color:#eb5757}.checkbox__icon svg{fill:none;stroke:#fff;stroke-width:1.5;height:9rem;opacity:0;transition:.15s ease;width:11rem}.checkbox__text{margin-left:10rem}.checkbox__text .p{font-size:17rem}@media only screen and (max-width:580px){.checkbox__text .p{font-size:14rem}}.checkbox.error{animation:my-animation 3s;color:inherit}@keyframes my-animation{0%{color:#eb5757}to{color:#eb5757}}',""]),c.locals={},e.exports=c},1536:function(e,t,o){"use strict";o.r(t);o(27);var c={props:{value:{type:[String,Boolean],default:!1},name:{type:String,default:"name"},checked:{type:Boolean,default:!1},light:{type:Boolean,default:!1},all:{type:Boolean,default:!1},error:{type:Boolean,default:!1}},computed:{Mods:function(){return{checkbox_light:this.light,checkbox_all:this.all}}}},n=(o(1453),o(13)),component=Object(n.a)(c,(function(){var e=this,t=e._self._c;return t("label",{staticClass:"checkbox",class:e.Mods},[t("input",{staticClass:"checkbox__input",attrs:{name:e.name,type:"checkbox"},domProps:{value:e.value,checked:e.checked},on:{change:function(t){return e.$emit("change")},input:function(t){return e.$emit("input",t.target.value)}}}),t("div",{staticClass:"checkbox__btn"},[t("div",{staticClass:"checkbox__icon",class:{input_error:e.error}},[t("svg-icon",{attrs:{name:"check",viewBox:"0 0 9 8"}})],1),t("div",{staticClass:"checkbox__text"},[e._t("default")],2)])])}),[],!1,null,null,null);t.default=component.exports}}]);