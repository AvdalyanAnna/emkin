(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1336:function(t,e,l){var content=l(1433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(25).default)("6c7b8a26",content,!0,{sourceMap:!1})},1432:function(t,e,l){"use strict";l(1336)},1433:function(t,e,l){var o=l(24)((function(i){return i[1]}));o.push([t.i,'.fade-enter-active{animation:fade .3s}.fade-leave-active{animation:fade .3s reverse}@keyframes fade{0%{opacity:0}to{opacity:1}}.slide-fade-enter-active{animation:slide-fade .5s}.slide-fade-leave-active{animation:slide-fade .3s reverse}@keyframes slide-fade{0%{opacity:0;transform:translateY(20rem)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{display:none;opacity:0}1%{display:block;opacity:0}to{opacity:1}}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.modal-statistic .modal-content{padding:50rem}.modal-statistic__title{font-weight:600}.modal-statistic__table{font-size:16rem;line-height:1.2;margin-top:20rem}.modal-statistic__table table,.modal-statistic__table tbody,.modal-statistic__table td,.modal-statistic__table th,.modal-statistic__table thead,.modal-statistic__table tr{border-collapse:collapse}.modal-statistic__table table{width:100%}.modal-statistic__table td,.modal-statistic__table th{vertical-align:top}.modal-statistic__table td:first-child,.modal-statistic__table th:first-child{width:20%}.modal-statistic__table td:nth-child(2),.modal-statistic__table th:nth-child(2){padding-left:20rem;padding-right:20rem;width:63%}.modal-statistic__table td:last-child,.modal-statistic__table th:last-child{text-align:right;width:17%}.modal-statistic__table th{color:#6e6e73;font-weight:500;padding-bottom:10rem}.modal-statistic__table tr:not(:last-child) td{padding-bottom:30rem}.modal-statistic__table td{border-top:1px solid #d2d2d7;padding-top:14rem}.modal-statistic__number{font-family:"Atyp Display";font-weight:600}',""]),o.locals={},t.exports=o},1531:function(t,e,l){"use strict";l.r(e);l(27),l(7),l(65),l(6),l(5),l(3),l(8),l(4),l(9);var o=l(0),c=l(26);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}function r(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={props:{title:{type:String,default:"Statistics"},head:{type:Array,default:function(){return["Name","Description","Statistics"]}}},computed:r({},Object(c.c)({PAGE_MODAL_STATISTIC:"pages/PAGE_MODAL_STATISTIC",STATISTIC:"product/STATISTIC"})),created:function(){this.SET_PAGE_MODAL_STATISTIC(this.$i18n.locale||"en")},watch:{"$i18n.locale":function(t){this.SET_PAGE_MODAL_STATISTIC(this.$i18n.locale)}},methods:r(r({},Object(c.b)({SET_PAGE_MODAL_STATISTIC:"pages/SET_PAGE_MODAL_STATISTIC",SET_STATISTIC:"product/SET_STATISTIC"})),{},{closeModal:function(){this.SET_STATISTIC(null),this.$root.$emit("bv::hide::modal","modal-statistic")}})},n=(l(1432),l(13)),component=Object(n.a)(_,(function(){var t=this,e=t._self._c;return e("b-modal",{ref:"modal-statistic",attrs:{id:"modal-statistic",size:"statistic-size","modal-class":"modal-statistic","body-class":"modal-statistic__body","header-class":"modal-statistic__header","footer-class":"modal-statistic__footer",centered:"","hide-footer":!0},on:{hide:t.closeModal},scopedSlots:t._u([{key:"modal-header",fn:function(l){l.close;return[e("button-close",{staticClass:"modal__close",nativeOn:{click:function(e){return t.closeModal.apply(null,arguments)}}})]}}])},[e("h3",{staticClass:"modal-statistic__title h3"},[t._v(t._s(t.PAGE_MODAL_STATISTIC.title))]),e("div",{staticClass:"modal-statistic__table"},[e("table",[e("thead",[e("tr",[e("th",[t._v(t._s(t.PAGE_MODAL_STATISTIC.name))]),e("th",[t._v(t._s(t.PAGE_MODAL_STATISTIC.description))]),e("th",[t._v(t._s(t.PAGE_MODAL_STATISTIC.title))])])]),t.STATISTIC?e("tbody",[e("tr",[e("td",[e("button-action",{staticClass:"modal-statistic__title",attrs:{icon:"favorites",text:t.PAGE_MODAL_STATISTIC.list[0].title,small:"",blue:""}})],1),e("td",[e("div",{staticClass:"modal-statistic__desc"},[t._v(t._s(t.PAGE_MODAL_STATISTIC.list[0].text))])]),e("td",[e("div",{staticClass:"modal-statistic__number color-blue h3"},[t._v(t._s(t.STATISTIC.favorite))])])]),e("tr",[e("td",[e("button-action",{staticClass:"modal-statistic__title",attrs:{icon:"view",text:t.PAGE_MODAL_STATISTIC.list[1].title,small:"",blue:""}})],1),e("td",[e("div",{staticClass:"modal-statistic__desc"},[t._v(t._s(t.PAGE_MODAL_STATISTIC.list[1].text))])]),e("td",[e("div",{staticClass:"modal-statistic__number color-blue h3"},[t._v(" "+t._s(t.STATISTIC.view))])])]),e("tr",[e("td",[e("button-action",{staticClass:"modal-statistic__title",attrs:{icon:"call",text:t.PAGE_MODAL_STATISTIC.list[2].title,small:"",blue:""}})],1),e("td",[e("div",{staticClass:"modal-statistic__desc"},[t._v(t._s(t.PAGE_MODAL_STATISTIC.list[2].text))])]),e("td",[e("div",{staticClass:"modal-statistic__number color-blue h3"},[t._v(" "+t._s(t.STATISTIC.call))])])])]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ButtonClose:l(123).default,ButtonAction:l(190).default})}}]);