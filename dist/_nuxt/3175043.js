(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{1205:function(t,e,o){var content=o(1242);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(25).default)("cced282a",content,!0,{sourceMap:!1})},1241:function(t,e,o){"use strict";o(1205)},1242:function(t,e,o){var n=o(24)((function(i){return i[1]}));n.push([t.i,".fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.tag{color:#6e6e73;display:inline-flex;font-size:16rem;justify-content:center;text-align:center;transition:all .3s}.tag:hover{color:#556dee}.tag_btn{border-bottom:2px solid transparent;color:#9a9a9a;font-weight:600;padding:0 28rem 10rem}.tag_btn.is-active{border-color:#062439}.tag_btn .tag__counter{color:inherit}.tag_btn:hover{-webkit-text-decoration:none;text-decoration:none}.tag.is-active{color:#062439}.tag.is-active .tag__counter{color:#556dee}@media only screen and (max-width:580px){.tag{font-size:14rem}.tag:not(.tag_btn){align-items:center;background:#f4f3f4;border-radius:3px;height:25rem;padding:0 8rem}}.tag__counter{margin-left:3rem}",""]),n.locals={},t.exports=n},1255:function(t,e,o){"use strict";o.r(e);o(81);var n={props:{text:{type:String,default:""},counter:{type:Number},to:{type:String,default:""},button:{type:Boolean,default:!1},active:{type:Boolean,default:!1}},computed:{Mods:function(){return{tag_btn:this.button,"is-active":this.active}}}},r=(o(1241),o(13)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e(""!==t.to?"NuxtLink":"div",{tag:"component",staticClass:"tag",class:t.Mods,attrs:{to:""!==t.to&&t.to}},[e("span",{staticClass:"tag__text"},[t._v(t._s(t.text))]),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports}}]);