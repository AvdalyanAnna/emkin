(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1181:function(t,e,r){var content=r(1194);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("2ef07f5c",content,!0,{sourceMap:!1})},1191:function(t,e,r){"use strict";r.r(e);r(27),r(81);var n={props:{name:{type:String,default:"name"},items:{type:Array,default:function(){return[]}},active:{type:Number,default:-1},blue:{type:Boolean,default:!1},light:{type:Boolean,default:!1}},computed:{Mods:function(){return{"button-switcher_blue":this.blue,"button-switcher_light":this.light}}}},o=(r(1193),r(13)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"button-switcher",class:t.Mods},[e("div",{staticClass:"button-switcher__list"},t._l(t.items,(function(r,i){return e("label",{key:i,staticClass:"button-switcher__item"},[e("input",{staticClass:"button-switcher__input",attrs:{name:t.name,type:"radio"},domProps:{value:r.value,checked:i===t.active||r.checked},on:{change:function(e){return t.$emit("change",i)}}}),e("span",{staticClass:"button-switcher__btn"},[r.counter?e("div",{staticClass:"button-switcher__text button-switcher__text_black"},[t._v(t._s(r.text||r.title)),e("span",{staticClass:"color-gray"},[t._v("("+t._s(r.counter)+")")])]):e("div",{staticClass:"button-switcher__text",domProps:{innerHTML:t._s(r.text||r.title)}})])])})),0)])}),[],!1,null,null,null);e.default=component.exports},1193:function(t,e,r){"use strict";r(1181)},1194:function(t,e,r){var n=r(24)((function(i){return i[1]}));n.push([t.i,".fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.button-switcher{border:1px solid #d2d2d7;border-radius:10rem;padding:3px}.button-switcher__list{display:flex}@media only screen and (max-width:580px){.button-switcher__list{min-width:100%}}.button-switcher__item{width:100%}.button-switcher__input{display:none}.button-switcher__input:checked+.button-switcher__btn{background:#f4f3f4;color:#062439}.button-switcher__btn{align-items:center;border-radius:10rem;color:#6e6e73;cursor:pointer;display:inline-flex;font-size:20rem;height:53rem;justify-content:center;padding:10rem 15rem;transition:.15s ease;white-space:nowrap;width:100%}.button-switcher__btn:hover{color:#556dee}@media only screen and (max-width:580px){.button-switcher__btn{font-size:15rem;font-weight:600}}.button-switcher__text_black{color:#062439}.button-switcher_blue .button-switcher__btn{font-size:16rem;font-weight:600;padding:10rem 25rem}.button-switcher_blue .button-switcher__input:checked+.button-switcher__btn{background:#556dee;color:#fff}.button-switcher_blue .button-switcher__input:checked+.button-switcher__btn .button-switcher__text_black,.button-switcher_blue .button-switcher__input:checked+.button-switcher__btn .button-switcher__text_black .color-gray{color:#fff}@media only screen and (max-width:580px){.button-switcher_blue{padding:2px}.button-switcher_blue .button-switcher__btn{font-size:15rem;height:38rem;padding:5rem 17rem}}.button-switcher_light{border:0;padding:0}.button-switcher_light .button-switcher__item:not(:last-child){margin-right:10rem}.button-switcher_light .button-switcher__btn{background:#f4f3f4;color:#9a9a9a;font-size:14rem;font-weight:600;height:49rem;padding:0 30rem}.button-switcher_light .button-switcher__input:checked+.button-switcher__btn{background:#556dee;color:#fff}@media only screen and (max-width:580px){.button-switcher{border:0;border-radius:0;margin-left:-15rem;margin-right:-15rem;overflow:hidden;padding:0}.button-switcher__list{margin-bottom:-40px;overflow-x:auto;overflow-y:hidden;padding-bottom:40px;padding-left:15rem}.button-switcher__item{border-bottom:1px solid #d2d2d7;border-top:1px solid #d2d2d7;padding-bottom:2px;padding-top:2px}.button-switcher__item:first-child{border-left:1px solid #d2d2d7;border-radius:10rem 0 0 10rem;padding-left:2px}.button-switcher__item:last-child{border-radius:0 10rem 10rem 0;border-right:1px solid #d2d2d7;margin-right:15rem;padding-right:2px}}",""]),n.locals={},t.exports=n}}]);