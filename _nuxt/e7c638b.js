(window.webpackJsonp=window.webpackJsonp||[]).push([[166,36,37,47,92,106,115],{1174:function(e,t,o){var content=o(1180);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(25).default)("9506b95c",content,!0,{sourceMap:!1})},1175:function(e,t,o){"use strict";o.r(t);o(27);var n={props:{value:{type:[String,Boolean],default:!1},name:{type:String,default:"name"},checked:{type:Boolean,default:!1},light:{type:Boolean,default:!1},all:{type:Boolean,default:!1},error:{type:Boolean,default:!1}},computed:{Mods:function(){return{checkbox_light:this.light,checkbox_all:this.all}}}},r=(o(1179),o(13)),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("label",{staticClass:"checkbox",class:e.Mods},[t("input",{staticClass:"checkbox__input",attrs:{name:e.name,type:"checkbox"},domProps:{value:e.value,checked:e.checked},on:{change:function(t){return e.$emit("change")},input:function(t){return e.$emit("input",t.target.value)}}}),t("div",{staticClass:"checkbox__btn"},[t("div",{staticClass:"checkbox__icon",class:{input_error:e.error}},[t("svg-icon",{attrs:{name:"check",viewBox:"0 0 9 8"}})],1),t("div",{staticClass:"checkbox__text"},[e._t("default")],2)])])}),[],!1,null,null,null);t.default=component.exports},1176:function(e,t,o){var content=o(1184);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(25).default)("4e31ff4f",content,!0,{sourceMap:!1})},1177:function(e,t,o){"use strict";o.r(t);o(252),o(82);var n={props:{to:{type:String,default:""},icon:{type:String,default:""},white:{type:Boolean,default:!1},blue:{type:Boolean,default:!1},border:{type:Boolean,default:!1},square:{type:Boolean,default:!1},small:{type:Boolean,default:!1},verysmall:{type:Boolean,default:!1},big:{type:Boolean,default:!1},borderWhite:{type:Boolean,default:!1},transparent:{type:Boolean,default:!1},gray:{type:Boolean,default:!1},large:{type:Boolean,default:!1},light:{type:Boolean,default:!1}},computed:{Mods:function(){return{"button-medium_white":this.white,"button-medium_big":this.big,"button-medium_gray":this.gray,"button-medium_blue":this.blue,"button-medium_border":this.border,"button-medium_square":this.square,"button-medium_small":this.small,"button-medium_verysmall":this.verysmall,"button-medium_border-white":this.borderWhite,"button-medium_transparent":this.transparent,"button-medium_large":this.large,"button-medium_light":this.light}}}},r=(o(1183),o(13)),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t(""!==e.to?"NuxtLink":"button",{tag:"component",staticClass:"button-medium",class:e.Mods,attrs:{to:""!==e.to&&e.to}},[e.icon?t("span",{staticClass:"button-medium__icon",class:"button-medium__icon_".concat(e.icon)},[t("svg-icon",{attrs:{name:e.icon}})],1):e._e(),t("span",{staticClass:"button-medium__text"},[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports},1178:function(e,t,o){var content=o(1189);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(25).default)("2dd5eea9",content,!0,{sourceMap:!1})},1179:function(e,t,o){"use strict";o(1174)},1180:function(e,t,o){var n=o(24)((function(i){return i[1]}));n.push([e.i,'.fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.checkbox{cursor:pointer;display:inline-flex;font-size:14rem;position:relative}.checkbox_light .checkbox__input:checked+.checkbox__btn .checkbox__icon{background:#7a8df1;border-color:#7a8df1}.checkbox_all .checkbox__icon:before{background:#fff;content:"";display:block;height:1px;width:7rem}.checkbox_all .checkbox__icon svg{display:none}.checkbox__btn{align-items:center;display:flex}.checkbox__input{display:none}.checkbox__input:checked+.checkbox__btn .checkbox__icon{background:#556dee;border-color:#556dee}.checkbox__input:checked+.checkbox__btn .checkbox__icon svg{opacity:1}.checkbox__icon{align-items:center;background:#fff;border:1px solid #d2d2d7;border-radius:5px;display:inline-flex;flex-shrink:0;height:20rem;justify-content:center;transition:.15s ease;width:20rem}.checkbox__icon.input_error{border-color:#eb5757}.checkbox__icon svg{fill:none;stroke:#fff;stroke-width:1.5;height:9rem;opacity:0;transition:.15s ease;width:11rem}.checkbox__text{margin-left:10rem}.checkbox__text .p{font-size:17rem}@media only screen and (max-width:580px){.checkbox__text .p{font-size:14rem}}.checkbox.error{animation:my-animation 3s;color:inherit}@keyframes my-animation{0%{color:#eb5757}to{color:#eb5757}}',""]),n.locals={},e.exports=n},1183:function(e,t,o){"use strict";o(1176)},1184:function(e,t,o){var n=o(24)((function(i){return i[1]}));n.push([e.i,'.fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.button-medium{align-items:center;background:#f4f3f4;border:0;border-radius:10rem;color:#062439;cursor:pointer;display:inline-flex;font-size:14rem;font-weight:600;height:40rem;justify-content:center;line-height:1;padding:0 20rem;transition:.15s ease}.button-medium_big{height:44rem;padding:0 15rem 0 10rem}.button-medium_big .button-medium__icon{height:24rem;margin-right:3rem;width:24rem}@media only screen and (max-width:580px){.button-medium_big{border-radius:8rem;height:35rem}.button-medium_big .button-medium__icon{height:20rem;width:20rem}}.button-medium_white{background:none;padding:0}.button-medium_blue{background:#556dee;color:#fff}.button-medium_blue .button-medium__icon{stroke:#fff}.button-medium_blue .button-medium__icon_pinned{fill:#fff}.button-medium_blue .button-medium__icon_category,.button-medium_blue .button-medium__icon_deleteBig,.button-medium_blue .button-medium__icon_plusBig,.button-medium_blue .button-medium__icon_user{stroke:none;fill:#fff}.button-medium_blue:hover{background:#4257c7;color:#fff}.button-medium_square{padding:0;width:40rem}.button-medium_square .button-medium__icon{margin-right:0}.button-medium_square.button-medium_big{width:44rem}.button-medium_square.button-medium_verysmall{width:30rem}.button-medium_square.button-medium_large{width:50rem}.button-medium_border-white{background:none;border:1px solid #fff;color:#fff}.button-medium_border-white .button-medium__icon{stroke:#fff}.button-medium_border-white .button-medium__icon_pinned{fill:#fff}.button-medium_border-white .button-medium__icon_deleteBig{stroke:none;fill:#fff}.button-medium_border-white .button-medium__icon_dotsRotate{fill:#062439;stroke:#062439;stroke-width:.2}.button-medium_transparent{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background:rgba(0,0,0,.1);border:0;color:#fff}.button-medium_transparent .button-medium__icon{stroke:#fff}.button-medium_transparent .button-medium__icon_pinned{fill:#fff}.button-medium_transparent .button-medium__icon_deleteBig,.button-medium_transparent .button-medium__icon_plusBig{stroke:none;fill:#fff}.button-medium_border{background:#fff;border:1px solid #d2d2d7}.button-medium_small{border-radius:4px;height:36rem;padding:0 10rem}.button-medium_verysmall{border-radius:7rem;height:30rem}.button-medium_verysmall .button-medium__icon{height:18rem;width:18rem}.button-medium_verysmall .button-medium__icon_deleteBig{height:16rem;width:16rem}.button-medium_gray{background:#f4f3f4;border:1px solid transparent;color:#062439}.button-medium_gray:hover{background:#fff;border-color:#e4e4e4}.button-medium_gray .button-medium__icon_closeBig{fill:#6e6e73}.button-medium_light{background:#eef1fe;color:#556dee}.button-medium_light .button-medium__icon_plusBig{fill:#556dee}.button-medium_large{height:50rem}.button-medium__icon{fill:none;stroke:#062439;stroke-width:1.5;flex-shrink:0;height:20rem;margin-right:8rem;width:20rem}.button-medium__icon svg{height:100%;width:100%}.button-medium__icon_chatBorder{position:relative}.button-medium__icon_chatBorder:after{background:#556dee;border-radius:6px;content:"";display:block;height:6rem;position:absolute;right:2rem;top:1rem;width:6rem}.button-medium__icon_closeBig{stroke:none;fill:#062439;height:14rem;margin-top:-1px;width:14rem}.button-medium__icon_chart{margin-top:-1px}.button-medium__icon_dots{stroke:none;fill:#062439;height:4rem;margin-right:0;width:12rem}.button-medium__icon_dotsRotate{stroke:none;fill:#062439;height:12rem;margin-right:0;width:3rem}.button-medium__icon_pinned{fill:#062439;stroke:none}.button-medium__icon_infoCircle{position:relative}.button-medium__icon_infoCircle:after{background:#062439;bottom:6rem;content:"";display:block;height:2rem;left:9rem;position:absolute;width:2rem}.button-medium__icon_user{stroke:none;fill:#062439}.button-medium__icon_plusBig{height:12rem;margin-right:15rem;width:12rem}.button-medium__icon_check{stroke-width:1.2;height:16rem;width:16rem}.button-medium__icon_editSmall{stroke:none;fill:#6e6e73;height:18rem;width:18rem}.button-medium__icon_category,.button-medium__icon_plusBig{stroke:none;fill:#062439}@media only screen and (max-width:1120px){.button-medium__text .hidden{display:none}}',""]),n.locals={},e.exports=n},1187:function(e,t,o){"use strict";o.r(t);o(82);var n={props:{to:{type:String,default:""},showText:{type:String,default:""},hideText:{type:String,default:""},more:{type:Boolean,default:!1},small:{type:Boolean,default:!1},blue:{type:Boolean,default:!1},white:{type:Boolean,default:!1},black:{type:Boolean,default:!1}},computed:{Mods:function(){return{"link-arrow_more":this.more,"link-arrow_small":this.small,"link-arrow_blue":this.blue,"link-arrow_white":this.white,"link-arrow_black":this.black}}}},r=(o(1188),o(13)),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t(""!==e.to?"NuxtLink":"button",{tag:"component",staticClass:"link-arrow",class:e.Mods,attrs:{to:""!==e.to&&e.to}},[e.showText?t("span",{staticClass:"link-arrow__text link-arrow__text_toggle",attrs:{"data-show-text":e.showText,"data-hide-text":e.hideText}}):t("span",{staticClass:"link-arrow__text"},[e._t("default")],2),t("svg-icon",{staticClass:"link-arrow__icon",attrs:{name:"arrowRight"}})],1)}),[],!1,null,null,null);t.default=component.exports},1188:function(e,t,o){"use strict";o(1178)},1189:function(e,t,o){var n=o(24)((function(i){return i[1]}));n.push([e.i,".fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.link-arrow{align-items:center;background:none;border:0;cursor:pointer;display:inline-flex;font-size:17rem;font-weight:600;justify-content:center;line-height:1}@media only screen and (max-width:580px){.link-arrow{font-size:16rem}}.link-arrow_small{font-size:14rem}.link-arrow_small .link-arrow__icon{stroke-width:3;height:10rem;width:13rem}.link-arrow_more .link-arrow__icon{margin-left:8rem;transform:rotate(90deg)}.link-arrow_more.isActive .link-arrow__icon{transform:rotate(-90deg)}.link-arrow.isActive .link-arrow__text_toggle:before{content:attr(data-hide-text)}.link-arrow_blue{color:#556dee}.link-arrow_blue .link-arrow__icon{stroke:#556dee}.link-arrow_black{color:#062439}.link-arrow_black .link-arrow__icon{stroke:#062439;stroke-width:2}.link-arrow_white{color:#fff}.link-arrow_white .link-arrow__icon{stroke:#fff}.link-arrow__icon{fill:none;stroke:#6e6e73;stroke-width:1.5;flex-shrink:0;height:11rem;margin-left:4rem;margin-top:1px;transition:.2s ease;width:14rem}.link-arrow__text_toggle:before{content:attr(data-show-text)}",""]),n.locals={},e.exports=n},1315:function(e,t,o){"use strict";o.r(t);o(81);var n={props:{modalName:{type:String,default:"modal-panel"},selected:{type:Number,default:1}}},r=o(13),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"annoucement-panel"},[t("div",{staticClass:"annoucement-panel__row flex flex_vertical flex_justify"},[t("div",{staticClass:"annoucement-panel__column"},[t("form-checkbox",{staticClass:"annoucement-panel__checkbox",attrs:{checked:"",light:""}},[t("strong",{staticClass:"p"},[e._v(e._s(e.selected)+" ad selected")])])],1),t("div",{staticClass:"annoucement-panel__column mobile-hidden flex flex_vertical"},[e._t("default"),t("button-medium",{staticClass:"annoucement-panel__cancel",attrs:{blue:"",small:""},nativeOn:{click:function(t){return e.$emit("closePanel")}}},[e._v("Cancel")])],2),t("button-link-arrow",{staticClass:"annoucement-panel__action mobile-visible",attrs:{white:""},nativeOn:{click:function(t){return e.$bvModal.show("".concat(e.modalName))}}},[e._v("Actions")])],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{FormCheckbox:o(1175).default,ButtonMedium:o(1177).default,ButtonLinkArrow:o(1187).default})},1316:function(e,t,o){"use strict";o.r(t);var n={props:{title:{type:String,default:"Select an action"},id:{type:String,default:"modal-panel"}}},r=o(13),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{id:e.id,size:"users","modal-class":"modal-panel","body-class":"modal-panel__body","header-class":"modal-panel__header","footer-class":"modal-panel__footer",centered:""},scopedSlots:e._u([{key:"modal-header",fn:function(e){var o=e.close;return[t("button-close",{staticClass:"modal__close",nativeOn:{click:function(e){return o()}}})]}},{key:"modal-footer",fn:function(o){var n=o.close;return[t("button-border",{staticClass:"modal-panel__cancel",attrs:{gray:""},nativeOn:{click:function(e){return n()}}},[e._v("Cancel")])]}}])},[t("h3",{staticClass:"modal-panel__title h3"},[e._v(e._s(e.title))]),t("div",{staticClass:"modal-panel__list"},[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ButtonClose:o(123).default,ButtonBorder:o(309).default})},1516:function(e,t,o){var content=o(1672);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(25).default)("4cd04e28",content,!0,{sourceMap:!1})},1671:function(e,t,o){"use strict";o(1516)},1672:function(e,t,o){var n=o(24)((function(i){return i[1]}));n.push([e.i,".fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.module-category{align-items:center;border-radius:6rem;cursor:pointer;display:flex;justify-content:space-between;min-height:60rem;padding:5rem 25rem 5rem 15rem;transition:.1s ease}.module-category_btn .module-category__checkbox{visibility:hidden}.module-category:hover{background:#f5f7fb}.module-category__wrap{align-items:center;display:flex}.module-category__counter{color:#9a9a9a}.module-category__icon{stroke:#9a9a9a;stroke-width:2;flex-shrink:0;height:12rem;width:15rem}.module-category__icon_plus{stroke:none;fill:#556dee;height:15rem;width:15rem}.module-category__icon svg{height:100%}.module-category__checkbox{margin-right:15rem}.module-category__checkbox .checkbox__text{display:none}.module-category__img{align-items:center;background:#f2f4f5;border-radius:4px;display:flex;flex-shrink:0;height:50rem;justify-content:center;margin-right:15rem;padding:4px;text-align:center;width:50rem}.module-category__img img{max-height:100%}.module-category__img_photo{fill:#fff;background:#556dee}.module-category__img_photo svg{height:16rem;width:16rem}",""]),n.locals={},e.exports=n},1711:function(e,t,o){var content=o(1849);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(25).default)("4463e33c",content,!0,{sourceMap:!1})},1773:function(e,t,o){"use strict";o.r(t);o(27),o(81);var n={props:{img:{type:String,default:""},name:{type:String,default:""},counter:{type:Number,default:null},btn:{type:Boolean,default:!1}},computed:{Mods:function(){return{"module-category_btn":this.btn}}}},r=(o(1671),o(13)),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"module-category",class:e.Mods},[t("div",{staticClass:"module-category__wrap"},[t("form-checkbox",{staticClass:"module-category__checkbox",nativeOn:{change:function(t){return e.$emit("showPanel")}}}),e.img?t("div",{staticClass:"module-category__img"},[t("set-img",{attrs:{"default-img":o(308)("./".concat(e.img))}})],1):e._e(),e.btn?t("div",{staticClass:"module-category__img module-category__img_photo"},[t("svg-icon",{attrs:{name:"camera"}})],1):e._e(),e.name?t("div",{staticClass:"module-category__text p"},[t("span",{staticClass:"module-category__name"},[e._v(e._s(e.name)+" ")]),t("span",{staticClass:"module-category__counter"},[e._v("("+e._s(e.counter)+")")])]):e._e(),e.btn?t("div",{staticClass:"module-category__text p color-blue"},[e._v("Add category")]):e._e()],1),e.btn?t("div",{staticClass:"module-category__icon module-category__icon_plus"},[t("svg-icon",{attrs:{name:"plusBig"}})],1):t("div",{staticClass:"module-category__icon"},[t("svg-icon",{attrs:{name:"burger"}})],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{FormCheckbox:o(1175).default,SetImg:o(189).default})},1848:function(e,t,o){"use strict";o(1711)},1849:function(e,t,o){var n=o(24)((function(i){return i[1]}));n.push([e.i,'.fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.correct-categories{padding-bottom:20rem}.correct-categories__box{padding-top:40rem}.correct-categories__box:not(:first-child){border-top:1px solid #d6d6d6;margin-top:50rem}.correct-categories__level{font-family:"Atyp Display";font-weight:500;line-height:1}.correct-categories__title{font-family:"Atyp Display";margin-top:15rem}.correct-categories__list{margin:0 0 0 -35rem;padding-top:20rem}.correct-categories__item{margin-left:20rem;margin-top:10rem;width:calc(25% - 20rem)}.correct-categories__panel{margin:20rem 0 0}',""]),n.locals={},e.exports=n},1942:function(e,t,o){"use strict";o.r(t);o(27);var n={data:function(){return{panelOpen:!1,listLevel1:[{img:"category__img1.png",name:"Electronics",counter:3},{img:"category__img3.png",name:"Gaming",counter:7},{img:"category__img1.png",name:"Electronics",counter:3},{img:"category__img3.png",name:"Gaming",counter:7},{img:"category__img1.png",name:"Electronics",counter:3},{img:"category__img3.png",name:"Gaming",counter:7},{img:"category__img1.png",name:"Electronics",counter:3},{img:"category__img3.png",name:"Gaming",counter:7},{img:"category__img1.png",name:"Electronics",counter:3},{img:"category__img3.png",name:"Gaming",counter:7},{img:"category__img1.png",name:"Electronics",counter:3}],listLevel2:[{name:"Electronics",counter:3},{name:"Gaming",counter:7},{name:"Electronics",counter:3},{name:"Gaming",counter:7},{name:"Electronics",counter:3},{name:"Gaming",counter:7},{name:"Electronics",counter:3},{name:"Gaming",counter:7}],listLevel3:[{name:"Electronics",counter:3},{name:"Gaming",counter:7},{name:"Electronics",counter:3},{name:"Gaming",counter:7},{name:"Electronics",counter:3},{name:"Gaming",counter:7}],listLevel4:[{name:"Electronics",counter:3},{name:"Gaming",counter:7},{name:"Electronics",counter:3}]}},methods:{panel:function(){this.panelOpen=!0}}},r=(o(1848),o(13)),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"correct-categories"},[t("div",{staticClass:"correct-categories__box"},[t("div",{staticClass:"correct-categories__level color-red"},[e._v("1 level")]),t("h3",{staticClass:"correct-categories__title h3"},[e._v("Main category")]),t("div",{staticClass:"correct-categories__list flex"},[e._l(e.listLevel1,(function(o,i){return t("div",{key:i,staticClass:"correct-categories__item"},[t("module-category",{attrs:{img:o.img,name:o.name,counter:o.counter},on:{showPanel:e.panel}})],1)})),t("div",{staticClass:"correct-categories__item"},[t("module-category",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-category",modifiers:{"modal-category":!0}}],attrs:{btn:""}})],1)],2)]),t("div",{staticClass:"correct-categories__box"},[t("div",{staticClass:"correct-categories__level color-blue"},[e._v("2 level")]),t("h3",{staticClass:"correct-categories__title h3"},[e._v("Category 1")]),t("div",{staticClass:"correct-categories__list flex"},[e._l(e.listLevel2,(function(o,i){return t("div",{key:i,staticClass:"correct-categories__item"},[t("module-category",{attrs:{img:o.img,name:o.name,counter:o.counter},on:{showPanel:e.panel}})],1)})),t("div",{staticClass:"correct-categories__item"},[t("module-category",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-category",modifiers:{"modal-category":!0}}],attrs:{btn:""}})],1)],2)]),t("div",{staticClass:"correct-categories__box"},[t("div",{staticClass:"correct-categories__level color-brown"},[e._v("3 level")]),t("h3",{staticClass:"correct-categories__title h3"},[e._v("Category 2")]),t("div",{staticClass:"correct-categories__list flex"},[e._l(e.listLevel3,(function(o,i){return t("div",{key:i,staticClass:"correct-categories__item"},[t("module-category",{attrs:{img:o.img,name:o.name,counter:o.counter},on:{showPanel:e.panel}})],1)})),t("div",{staticClass:"correct-categories__item"},[t("module-category",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-category",modifiers:{"modal-category":!0}}],attrs:{btn:""}})],1)],2)]),t("div",{staticClass:"correct-categories__box"},[t("div",{staticClass:"correct-categories__level color-green"},[e._v("4 level")]),t("h3",{staticClass:"correct-categories__title h3"},[e._v("Category 3")]),t("div",{staticClass:"correct-categories__list flex"},[e._l(e.listLevel4,(function(o,i){return t("div",{key:i,staticClass:"correct-categories__item"},[t("module-category",{attrs:{img:o.img,name:o.name,counter:o.counter},on:{showPanel:e.panel}})],1)})),t("div",{staticClass:"correct-categories__item"},[t("module-category",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-category",modifiers:{"modal-category":!0}}],attrs:{btn:""}})],1)],2)]),t("transition",{attrs:{name:"fade"}},[e.panelOpen?t("part-annoucement-panel",{staticClass:"correct-categories__panel",attrs:{modalName:"modal-correct-categories"},on:{closePanel:function(t){e.panelOpen=!1}}},[t("button-medium",{staticClass:"annoucement-panel__btn",attrs:{icon:"duplicate",blue:"",small:""}},[e._v("Duplicate")]),t("button-medium",{staticClass:"annoucement-panel__btn",attrs:{icon:"filters",blue:"",small:""}},[e._v("Filters")]),t("button-medium",{staticClass:"annoucement-panel__btn",attrs:{icon:"plusBig",blue:"",small:""}},[e._v("Add category")]),t("button-medium",{staticClass:"annoucement-panel__btn",attrs:{icon:"penEdit",blue:"",small:""}},[e._v("Edit")]),t("button-medium",{staticClass:"annoucement-panel__btn",attrs:{icon:"delete",blue:"",small:""}},[e._v("Delete")])],1):e._e()],1),t("modal-panel",{attrs:{id:"modal-correct-categories"}},[t("div",{staticClass:"modal-panel__item"},[t("button-border",{staticClass:"modal-panel__btn",attrs:{icon:"duplicate",BigIcon:"",gray:""}},[e._v("Duplicate")])],1),t("div",{staticClass:"modal-panel__item"},[t("button-border",{staticClass:"modal-panel__btn",attrs:{icon:"filters",BigIcon:"",gray:""}},[e._v("Filters")])],1),t("div",{staticClass:"modal-panel__item"},[t("button-border",{staticClass:"modal-panel__btn",attrs:{icon:"plusBig",BigIcon:"",gray:""}},[e._v("Add category")])],1),t("div",{staticClass:"modal-panel__item"},[t("button-border",{staticClass:"modal-panel__btn",attrs:{icon:"penEdit",BigIcon:"",gray:""}},[e._v("Edit")])],1),t("div",{staticClass:"modal-panel__item"},[t("button-border",{staticClass:"modal-panel__btn",attrs:{icon:"closeBig",BigIcon:"",gray:""}},[e._v("Delete")])],1)])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ModuleCategory:o(1773).default,ButtonMedium:o(1177).default,PartAnnoucementPanel:o(1315).default,ButtonBorder:o(309).default,ModalPanel:o(1316).default})}}]);