(window.webpackJsonp=window.webpackJsonp||[]).push([[21,37,40,52],{1173:function(e,t){function o(e){return"function"==typeof e.value||(console.warn("[Vue-click-outside:] provided expression",e.expression,"is not a function."),!1)}function r(e){return void 0!==e.componentInstance&&e.componentInstance.$isServer}e.exports={bind:function(e,t,n){if(!o(t))return;function l(t){if(n.context){var o=t.path||t.composedPath&&t.composedPath();o&&o.length>0&&o.unshift(t.target),e.contains(t.target)||function(e,t){if(!e||!t)return!1;for(var i=0,o=t.length;i<o;i++)try{if(e.contains(t[i]))return!0;if(t[i].contains(e))return!1}catch(e){return!1}return!1}(n.context.popupItem,o)||e.__vueClickOutside__.callback(t)}}e.__vueClickOutside__={handler:l,callback:t.value};const d="ontouchstart"in document.documentElement?"touchstart":"click";!r(n)&&document.addEventListener(d,l)},update:function(e,t){o(t)&&(e.__vueClickOutside__.callback=t.value)},unbind:function(e,t,o){const n="ontouchstart"in document.documentElement?"touchstart":"click";!r(o)&&e.__vueClickOutside__&&document.removeEventListener(n,e.__vueClickOutside__.handler),delete e.__vueClickOutside__}}},1176:function(e,t,o){var content=o(1184);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(25).default)("4e31ff4f",content,!0,{sourceMap:!1})},1177:function(e,t,o){"use strict";o.r(t);o(252),o(82);var r={props:{to:{type:String,default:""},icon:{type:String,default:""},white:{type:Boolean,default:!1},blue:{type:Boolean,default:!1},border:{type:Boolean,default:!1},square:{type:Boolean,default:!1},small:{type:Boolean,default:!1},verysmall:{type:Boolean,default:!1},big:{type:Boolean,default:!1},borderWhite:{type:Boolean,default:!1},transparent:{type:Boolean,default:!1},gray:{type:Boolean,default:!1},large:{type:Boolean,default:!1},light:{type:Boolean,default:!1}},computed:{Mods:function(){return{"button-medium_white":this.white,"button-medium_big":this.big,"button-medium_gray":this.gray,"button-medium_blue":this.blue,"button-medium_border":this.border,"button-medium_square":this.square,"button-medium_small":this.small,"button-medium_verysmall":this.verysmall,"button-medium_border-white":this.borderWhite,"button-medium_transparent":this.transparent,"button-medium_large":this.large,"button-medium_light":this.light}}}},n=(o(1183),o(13)),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t(""!==e.to?"NuxtLink":"button",{tag:"component",staticClass:"button-medium",class:e.Mods,attrs:{to:""!==e.to&&e.to}},[e.icon?t("span",{staticClass:"button-medium__icon",class:"button-medium__icon_".concat(e.icon)},[t("svg-icon",{attrs:{name:e.icon}})],1):e._e(),t("span",{staticClass:"button-medium__text"},[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports},1181:function(e,t,o){var content=o(1194);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(25).default)("2ef07f5c",content,!0,{sourceMap:!1})},1183:function(e,t,o){"use strict";o(1176)},1184:function(e,t,o){var r=o(24)((function(i){return i[1]}));r.push([e.i,'.fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.button-medium{align-items:center;background:#f4f3f4;border:0;border-radius:10rem;color:#062439;cursor:pointer;display:inline-flex;font-size:14rem;font-weight:600;height:40rem;justify-content:center;line-height:1;padding:0 20rem;transition:.15s ease}.button-medium_big{height:44rem;padding:0 15rem 0 10rem}.button-medium_big .button-medium__icon{height:24rem;margin-right:3rem;width:24rem}@media only screen and (max-width:580px){.button-medium_big{border-radius:8rem;height:35rem}.button-medium_big .button-medium__icon{height:20rem;width:20rem}}.button-medium_white{background:none;padding:0}.button-medium_blue{background:#556dee;color:#fff}.button-medium_blue .button-medium__icon{stroke:#fff}.button-medium_blue .button-medium__icon_pinned{fill:#fff}.button-medium_blue .button-medium__icon_category,.button-medium_blue .button-medium__icon_deleteBig,.button-medium_blue .button-medium__icon_plusBig,.button-medium_blue .button-medium__icon_user{stroke:none;fill:#fff}.button-medium_blue:hover{background:#4257c7;color:#fff}.button-medium_square{padding:0;width:40rem}.button-medium_square .button-medium__icon{margin-right:0}.button-medium_square.button-medium_big{width:44rem}.button-medium_square.button-medium_verysmall{width:30rem}.button-medium_square.button-medium_large{width:50rem}.button-medium_border-white{background:none;border:1px solid #fff;color:#fff}.button-medium_border-white .button-medium__icon{stroke:#fff}.button-medium_border-white .button-medium__icon_pinned{fill:#fff}.button-medium_border-white .button-medium__icon_deleteBig{stroke:none;fill:#fff}.button-medium_border-white .button-medium__icon_dotsRotate{fill:#062439;stroke:#062439;stroke-width:.2}.button-medium_transparent{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background:rgba(0,0,0,.1);border:0;color:#fff}.button-medium_transparent .button-medium__icon{stroke:#fff}.button-medium_transparent .button-medium__icon_pinned{fill:#fff}.button-medium_transparent .button-medium__icon_deleteBig,.button-medium_transparent .button-medium__icon_plusBig{stroke:none;fill:#fff}.button-medium_border{background:#fff;border:1px solid #d2d2d7}.button-medium_small{border-radius:4px;height:36rem;padding:0 10rem}.button-medium_verysmall{border-radius:7rem;height:30rem}.button-medium_verysmall .button-medium__icon{height:18rem;width:18rem}.button-medium_verysmall .button-medium__icon_deleteBig{height:16rem;width:16rem}.button-medium_gray{background:#f4f3f4;border:1px solid transparent;color:#062439}.button-medium_gray:hover{background:#fff;border-color:#e4e4e4}.button-medium_gray .button-medium__icon_closeBig{fill:#6e6e73}.button-medium_light{background:#eef1fe;color:#556dee}.button-medium_light .button-medium__icon_plusBig{fill:#556dee}.button-medium_large{height:50rem}.button-medium__icon{fill:none;stroke:#062439;stroke-width:1.5;flex-shrink:0;height:20rem;margin-right:8rem;width:20rem}.button-medium__icon svg{height:100%;width:100%}.button-medium__icon_chatBorder{position:relative}.button-medium__icon_chatBorder:after{background:#556dee;border-radius:6px;content:"";display:block;height:6rem;position:absolute;right:2rem;top:1rem;width:6rem}.button-medium__icon_closeBig{stroke:none;fill:#062439;height:14rem;margin-top:-1px;width:14rem}.button-medium__icon_chart{margin-top:-1px}.button-medium__icon_dots{stroke:none;fill:#062439;height:4rem;margin-right:0;width:12rem}.button-medium__icon_dotsRotate{stroke:none;fill:#062439;height:12rem;margin-right:0;width:3rem}.button-medium__icon_pinned{fill:#062439;stroke:none}.button-medium__icon_infoCircle{position:relative}.button-medium__icon_infoCircle:after{background:#062439;bottom:6rem;content:"";display:block;height:2rem;left:9rem;position:absolute;width:2rem}.button-medium__icon_user{stroke:none;fill:#062439}.button-medium__icon_plusBig{height:12rem;margin-right:15rem;width:12rem}.button-medium__icon_check{stroke-width:1.2;height:16rem;width:16rem}.button-medium__icon_editSmall{stroke:none;fill:#6e6e73;height:18rem;width:18rem}.button-medium__icon_category,.button-medium__icon_plusBig{stroke:none;fill:#062439}@media only screen and (max-width:1120px){.button-medium__text .hidden{display:none}}',""]),r.locals={},e.exports=r},1190:function(e,t,o){var content=o(1219);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(25).default)("289496e6",content,!0,{sourceMap:!1})},1191:function(e,t,o){"use strict";o.r(t);o(27),o(81);var r={props:{name:{type:String,default:"name"},items:{type:Array,default:function(){return[]}},active:{type:Number,default:-1},blue:{type:Boolean,default:!1},light:{type:Boolean,default:!1}},computed:{Mods:function(){return{"button-switcher_blue":this.blue,"button-switcher_light":this.light}}}},n=(o(1193),o(13)),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"button-switcher",class:e.Mods},[t("div",{staticClass:"button-switcher__list"},e._l(e.items,(function(o,i){return t("label",{key:i,staticClass:"button-switcher__item"},[t("input",{staticClass:"button-switcher__input",attrs:{name:e.name,type:"radio"},domProps:{value:o.value,checked:i===e.active||o.checked},on:{change:function(t){return e.$emit("change",i)}}}),t("span",{staticClass:"button-switcher__btn"},[o.counter?t("div",{staticClass:"button-switcher__text button-switcher__text_black"},[e._v(e._s(o.text||o.title)),t("span",{staticClass:"color-gray"},[e._v("("+e._s(o.counter)+")")])]):t("div",{staticClass:"button-switcher__text",domProps:{innerHTML:e._s(o.text||o.title)}})])])})),0)])}),[],!1,null,null,null);t.default=component.exports},1193:function(e,t,o){"use strict";o(1181)},1194:function(e,t,o){var r=o(24)((function(i){return i[1]}));r.push([e.i,".fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.button-switcher{border:1px solid #d2d2d7;border-radius:10rem;padding:3px}.button-switcher__list{display:flex}@media only screen and (max-width:580px){.button-switcher__list{min-width:100%}}.button-switcher__item{width:100%}.button-switcher__input{display:none}.button-switcher__input:checked+.button-switcher__btn{background:#f4f3f4;color:#062439}.button-switcher__btn{align-items:center;border-radius:10rem;color:#6e6e73;cursor:pointer;display:inline-flex;font-size:20rem;height:53rem;justify-content:center;padding:10rem 15rem;transition:.15s ease;white-space:nowrap;width:100%}.button-switcher__btn:hover{color:#556dee}@media only screen and (max-width:580px){.button-switcher__btn{font-size:15rem;font-weight:600}}.button-switcher__text_black{color:#062439}.button-switcher_blue .button-switcher__btn{font-size:16rem;font-weight:600;padding:10rem 25rem}.button-switcher_blue .button-switcher__input:checked+.button-switcher__btn{background:#556dee;color:#fff}.button-switcher_blue .button-switcher__input:checked+.button-switcher__btn .button-switcher__text_black,.button-switcher_blue .button-switcher__input:checked+.button-switcher__btn .button-switcher__text_black .color-gray{color:#fff}@media only screen and (max-width:580px){.button-switcher_blue{padding:2px}.button-switcher_blue .button-switcher__btn{font-size:15rem;height:38rem;padding:5rem 17rem}}.button-switcher_light{border:0;padding:0}.button-switcher_light .button-switcher__item:not(:last-child){margin-right:10rem}.button-switcher_light .button-switcher__btn{background:#f4f3f4;color:#9a9a9a;font-size:14rem;font-weight:600;height:49rem;padding:0 30rem}.button-switcher_light .button-switcher__input:checked+.button-switcher__btn{background:#556dee;color:#fff}@media only screen and (max-width:580px){.button-switcher{border:0;border-radius:0;margin-left:-15rem;margin-right:-15rem;overflow:hidden;padding:0}.button-switcher__list{margin-bottom:-40px;overflow-x:auto;overflow-y:hidden;padding-bottom:40px;padding-left:15rem}.button-switcher__item{border-bottom:1px solid #d2d2d7;border-top:1px solid #d2d2d7;padding-bottom:2px;padding-top:2px}.button-switcher__item:first-child{border-left:1px solid #d2d2d7;border-radius:10rem 0 0 10rem;padding-left:2px}.button-switcher__item:last-child{border-radius:0 10rem 10rem 0;border-right:1px solid #d2d2d7;margin-right:15rem;padding-right:2px}}",""]),r.locals={},e.exports=r},1217:function(e,t,o){"use strict";o.r(t);o(27),o(252);var r=o(1173),n={props:{value:{type:String,default:"Select"},color:{type:String,default:""},name:{type:String,default:""},label:{type:String,default:""},big:{type:Boolean,default:!1},lang:{type:Boolean,default:!1},borderRight:{type:Boolean,default:!1},noBorder:{type:Boolean,default:!1},default:{type:Boolean,default:!1},top:{type:Boolean,default:!1},items:{type:[Array,Object],default:function(){return[]}}},data:function(){return{listOn:!1,currentValue:this.value}},computed:{Mods:function(){return{select_lang:this.lang,select_big:this.big,"select_border-right":this.borderRight,"select_no-border":this.noBorder,select_default:this.default,select_top:this.top}}},watch:{listOn:function(e){e&&(this.currentValue=this.value)}},methods:{toggleList:function(){this.listOn=!this.listOn},closeList:function(){this.listOn=!1},updateValue:function(e){this.$emit("input",this.currentValue)}},mounted:function(){this.popupItem=this.$el},directives:{ClickOutside:o.n(r).a}},l=(o(1218),o(13)),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"select",class:e.Mods},[e.label?t("div",{staticClass:"select__label p color-gray"},[e._v(e._s(e.label))]):e._e(),t("div",{staticClass:"select__wrap"},[t("input",{staticClass:"select__input",attrs:{type:"hidden",name:e.name},domProps:{value:e.currentValue}}),t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.closeList,expression:"closeList"}],staticClass:"select__head",on:{click:e.toggleList}},[e.color?t("div",{staticClass:"select__color",class:"".concat(e.color)}):e._e(),t("div",{staticClass:"select__value"},[e._v(e._s(e.currentValue))]),t("div",{staticClass:"select__arrow"},[t("svg-icon",{attrs:{name:"arrowDown",viewBox:"0 0 11 7"}})],1)]),t("transition",{attrs:{name:"DropDown"}},[e.listOn?t("div",{staticClass:"select__body"},[t("div",{staticClass:"select__list"},e._l(e.items,(function(o,i){return t("div",{key:i,staticClass:"select__item"},[t("label",{staticClass:"select__btn"},[o.text?t("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"select__btn-input",attrs:{type:"radio",name:e.name},domProps:{value:o.text,checked:e._q(e.currentValue,o.text)},on:{change:[function(t){e.currentValue=o.text},function(t){e.closeList(),e.updateValue()}]}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"select__btn-input",attrs:{type:"radio",name:e.name},domProps:{value:o,checked:e._q(e.currentValue,o)},on:{change:[function(t){e.currentValue=o},function(t){e.closeList(),e.updateValue()}]}}),o.text?t("span",{staticClass:"select__btn-text"},[o.color?t("span",{staticClass:"select__color",class:"".concat(o.color)}):e._e(),t("span",[e._v(e._s(o.text))]),o.counter?t("span",{staticClass:"select__btn-counter color-blue"},[e._v("("+e._s(o.counter)+")")]):e._e()]):t("span",{staticClass:"select__btn-text"},[e._v(e._s(o))])])])})),0),e._t("default")],2):e._e()])],1)])}),[],!1,null,null,null);t.default=component.exports},1218:function(e,t,o){"use strict";o(1190)},1219:function(e,t,o){var r=o(24)((function(i){return i[1]}));r.push([e.i,'.fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.select{align-items:center;display:inline-flex;position:relative}.select_lang .select__head{color:#062439;font-size:17rem;font-weight:600;height:40rem}.select_lang .select__arrow{stroke:#062439;margin-left:5rem}@media only screen and (max-width:580px){.select_lang .select__head{font-size:14rem;height:20rem}}.select_big .select__head{color:#062439;font-size:17rem;font-weight:600}.select_big .select__arrow{stroke:#062439;margin-left:14rem}@media only screen and (max-width:580px){.select_big .select__head{font-size:14rem;height:20rem}}.select_border-right .select__head{border-left:0;border-right:1px solid #d2d2d7}.select_no-border{font-size:17rem;font-weight:600}.select_no-border .select__head{border:0;color:#062439;height:auto;padding:0 15rem}.select_no-border .select__arrow{margin-left:6rem}.select_no-border .select__list{left:-15rem}.select_default{display:flex;font-family:"Gilroy";font-size:17rem;font-weight:500;height:60rem}.select_default .select__wrap{height:100%;width:100%}.select_default .select__head{border:1px solid #d2d2d7;border-radius:10rem;height:100%;padding:15rem 20rem;width:100%}.select_default .select__body{border-radius:10rem;margin-top:5px;width:100%}.select_default .select__btn{color:#6e6e73}.select_top .select__body{bottom:100%;margin-bottom:5px;top:auto}@media only screen and (max-width:580px){.select_no-border .select__head{border:0;height:auto;padding:0 5rem}.select_no-border .select__list{left:-15rem}.select_default{height:50rem}.select__label{padding-bottom:1px}}.select__wrap{height:100%;position:relative}.select__head,.select__wrap{align-items:center;display:flex}.select__head{border-left:1px solid #d2d2d7;color:#6e6e73;cursor:pointer;height:56rem;justify-content:space-between;padding:0 30rem;white-space:nowrap}@media only screen and (max-width:990px){.select__head{padding:0 20rem}}@media only screen and (max-width:580px){.select__head{border:0;font-size:14rem;height:20rem;padding:0}}.select__color{border-radius:10px;display:inline-flex;flex-shrink:0;height:10rem;margin-right:10rem;width:10rem}.select__color.red{background:#eb5757}.select__color.blue{background:#556dee}.select__color.brown{background:#bd6600}.select__color.green{background:#3dbd00}.select__value{margin-right:auto}.select__arrow{fill:none;stroke:#6e6e73;stroke-width:2;flex-shrink:0;height:7rem;margin-left:18rem;width:11rem}@media only screen and (max-width:990px){.select__arrow{margin-left:10rem}}@media only screen and (max-width:580px){.select__arrow{height:6rem;width:9rem}}.select__body{background:#fff;border:1px solid #d2d2d7;border-radius:5px 5px 15rem 15rem;left:0;margin-top:10rem;padding:10rem;position:absolute;top:100%;width:calc(100% + 30rem);z-index:100}.select__btn{cursor:pointer;display:block}.select__btn-input{display:none}.select__btn-input:checked+.select__btn-text{background:#f5f5f7;color:#062439}.select__btn-text{border-radius:5px;display:block;font-size:17rem;padding:10rem 20rem;transition:.2s ease}.select__btn-text:hover{color:#556dee}@media only screen and (max-width:580px){.select__btn-text{font-size:14rem;padding:8rem 10rem}}',""]),r.locals={},e.exports=r},1702:function(e,t,o){var content=o(1831);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(25).default)("7183eeba",content,!0,{sourceMap:!1})},1830:function(e,t,o){"use strict";o(1702)},1831:function(e,t,o){var r=o(24)((function(i){return i[1]}));r.push([e.i,'.fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@media only screen and (max-width:990px){.modal-commercial .modal-content{overflow:hidden;padding-top:50rem}.modal-commercial .modal__close{height:34rem;right:15rem;top:13rem;width:34rem}}@media only screen and (max-width:580px){.modal-commercial{padding:0!important}.modal-commercial .modal-content{padding-bottom:20rem;padding-top:20rem}}.modal-commercial__header{display:block}.modal-commercial__header-row{align-items:center;display:flex;justify-content:space-between;width:100%}@media only screen and (max-width:580px){.modal-commercial__header-row{flex-wrap:wrap}.modal-commercial__title{width:100%}}.modal-commercial__switcher{font-size:20rem;margin-left:auto}.modal-commercial__switcher .button-switcher__btn{font-size:inherit;min-width:124rem}@media only screen and (max-width:580px){.modal-commercial__switcher{font-size:15rem;margin-left:-15rem;margin-top:20rem;width:calc(100% + 45rem)}}.modal-commercial__footer{border:0;justify-content:space-between;margin-top:40rem;padding:0}@media only screen and (max-width:580px){.modal-commercial__footer{margin-top:20rem}}.modal-commercial__add{min-width:150rem}@media only screen and (max-width:580px){.modal-commercial__add{width:100%}}.modal-commercial__container{margin-right:-40rem;margin-top:30rem;max-height:440rem;overflow-x:hidden;overflow-y:auto;padding-right:38rem}@media only screen and (max-width:990px){.modal-commercial__container{padding-right:40rem}.modal-commercial__container::-webkit-scrollbar{width:0}}@media only screen and (max-width:580px){.modal-commercial__container{margin-top:10rem;max-height:calc(75vh - 200rem)}}.modal-commercial table,.modal-commercial td,.modal-commercial th,.modal-commercial thead,.modal-commercial tr{border-collapse:collapse}.modal-commercial table{width:100%}.modal-commercial th{color:#6e6e73;font-weight:500;padding-bottom:17rem}.modal-commercial tr{border-bottom:1px solid #d2d2d7}.modal-commercial td:last-child,.modal-commercial th:last-child{width:50%}.modal-commercial td:nth-child(2),.modal-commercial th:nth-child(2){width:15%}.modal-commercial td{padding-bottom:15rem;padding-top:15rem}.modal-commercial__desc{font-size:15rem;font-weight:600}@media only screen and (max-width:580px){.modal-commercial__desc{font-size:12rem;font-weight:500}}.modal-commercial__open{min-width:104rem}.modal-commercial__delete{margin-left:10rem}.modal-commercial__label{color:#aeaeae;font-size:10rem;margin-bottom:1px}@media only screen and (max-width:580px){.modal-commercial__date-buttons{display:none}}.modal-commercial__arrow{fill:none;stroke:#6e6e73;stroke-width:2px;height:10rem;width:12rem}.modal-commercial__arrow svg{height:100%;width:100%}.modal-commercial__top{align-items:center;border-bottom:1px solid #d2d2d7;display:flex;justify-content:space-between;margin-bottom:27rem;padding-bottom:30rem}.modal-commercial__top-title{font-family:"Gilroy";font-weight:600;margin-right:30rem;white-space:nowrap}.modal-commercial__top-select{width:66.66%}@media only screen and (max-width:580px){.modal-commercial__top{display:block;margin-bottom:-5rem;margin-top:20rem;padding-bottom:15rem}.modal-commercial__top-title{font-size:16rem}.modal-commercial__top-select{margin-top:10rem;width:100%}.modal-commercial table{border-collapse:separate;border-spacing:0 5rem}.modal-commercial thead{display:none}.modal-commercial td{border-bottom:1px solid #ececec;border-top:1px solid #ececec;font-size:12rem;padding-bottom:12rem;padding-top:12rem}.modal-commercial td:first-child{border-left:1px solid #ececec;border-radius:15rem 0 0 15rem;padding-left:14rem}.modal-commercial td:nth-child(2){padding-left:5rem;padding-right:20rem;white-space:nowrap}.modal-commercial td:last-child{border-radius:0 15rem 15rem 0;border-right:1px solid #ececec;padding-right:15rem;width:33.33%}}.modal-commercial__btn{margin-top:10rem;width:100%}',""]),r.locals={},e.exports=r},1886:function(e,t,o){"use strict";o.r(t);var r={props:{title:{type:String,default:"Commercial banners"},id:{type:String,default:"modal-commercial"},value:{type:String,default:""},rows:{type:Array,default:function(){return[]}},items:{type:[Array,Object],default:function(){return[]}},selectLabel:{type:String,default:""}},data:function(){return{switchers:[{value:"Active",text:"Active",checked:!0},{value:"Draft",text:"Draft"}]}}},n=(o(1830),o(13)),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{id:e.id,size:"commercial-size","modal-class":"modal-commercial","body-class":"modal-commercial__body","header-class":"modal-commercial__header","footer-class":"modal-commercial__footer",centered:""},scopedSlots:e._u([{key:"modal-header",fn:function(o){var r=o.close;return[t("button-close",{staticClass:"modal__close",nativeOn:{click:function(e){return r()}}}),t("div",{staticClass:"modal-commercial__title h3 mobile-visible"},[e._v(e._s(e.title))]),e.selectLabel?t("div",{staticClass:"modal-commercial__top"},[t("div",{staticClass:"modal-commercial__top-title h4"},[e._v(e._s(e.selectLabel))]),t("form-select",{staticClass:"modal-commercial__top-select",attrs:{default:"",value:e.value,items:e.items}},[t("button-medium",{staticClass:"modal-commercial__btn",attrs:{icon:"plusBig",light:""}},[e._v("New client")])],1)],1):e._e(),t("div",{staticClass:"modal-commercial__header-row"},[t("div",{staticClass:"modal-commercial__title h3 mobile-hidden"},[e._v(e._s(e.title))]),t("button-switcher",{staticClass:"modal-commercial__switcher",attrs:{items:e.switchers,blue:"",name:"commercial"}})],1)]}},{key:"modal-footer",fn:function(o){o.close;return[t("button-primary",{staticClass:"modal-commercial__add",attrs:{light:"",icon:"plusBig"}},[e._v("Add new")])]}}])},[t("div",{staticClass:"modal-commercial__container css-scrollbar"},[t("table",[t("thead",[t("tr",[t("th",[e._v("Title")]),t("th",[e._v("Price")]),t("th",[e._v("Date")])])]),t("tbody",e._l(e.rows,(function(o,i){return t("tr",{key:i},[t("td",[t("div",{staticClass:"modal-commercial__label mobile-visible"},[e._v("Title")]),t("div",{staticClass:"modal-commercial__desc"},[e._v(e._s(o.title))])]),t("td",[t("div",{staticClass:"modal-commercial__label mobile-visible"},[e._v("Title")]),t("div",{staticClass:"modal-commercial__text"},[e._v("$ "+e._s(o.price))])]),t("td",[t("div",{staticClass:"modal-commercial__date flex flex_vertical flex_justify"},[t("div",{staticClass:"modal-commercial__date-wrap"},[t("div",{staticClass:"modal-commercial__label mobile-visible"},[e._v("Date")]),t("div",{staticClass:"modal-commercial__date-text"},[e._v(e._s(o.date))])]),t("div",{staticClass:"modal-commercial__date-buttons flex"},[t("button-medium",{staticClass:"modal-commercial__open",attrs:{blue:"",large:""}},[e._v("Open")]),t("button-medium",{staticClass:"modal-commercial__delete",attrs:{gray:"",square:"",icon:"delete",large:""}})],1),t("div",{staticClass:"modal-commercial__arrow mobile-visible"},[t("svg-icon",{attrs:{name:"arrowRight"}})],1)])])])})),0)])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ButtonClose:o(123).default,ButtonMedium:o(1177).default,FormSelect:o(1217).default,ButtonSwitcher:o(1191).default,ButtonPrimary:o(113).default})}}]);