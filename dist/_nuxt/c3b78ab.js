(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1545:function(t,e,l){"use strict";l.r(e);var n={props:{title:{type:String,default:""},row:{type:Array,default:function(){return[]}}},methods:{getRoute:function(t){var e="";return this.$validateEmail(t)&&(e+="mailto:"+t),this.$validatePhone(t)&&(e+="tel:"+t),e}}},c=l(13),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"item-contact"},[e("h3",{staticClass:"item-contact__title h3"},[t._v(t._s(t.title))]),t.row?e("div",{staticClass:"item-contact__row"},t._l(t.row,(function(l,i){return e("div",{key:i,staticClass:"item-contact__column"},[e("div",{staticClass:"item-contact__label"},[t._v(t._s(l.label))]),e("div",{staticClass:"item-contact__list"},t._l(l.list,(function(l,i){return e("div",{key:i,staticClass:"item-contact__item"},[t.$validateEmail(l.value)||t.$validatePhone(l.value)?e("a",{class:{"color-blue email":t.$validateEmail(l.value)},attrs:{href:t.getRoute(l.value)},domProps:{innerHTML:t._s(l.value)}}):[t._v(" "+t._s(l.value))]],2)})),0)])})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);