(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{1335:function(e,t,r){"use strict";r(6),r(7),r(5),r(3),r(8),r(4),r(9);var n=r(0),o=(r(254),r(26));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a={computed:l(l({},Object(o.c)({LOCATION:"location/LOCATION"})),{},{distance:function(){var e=this.coordinates,t=this.LOCATION,r=!1;if(t&&("string"==typeof t&&(t=JSON.parse(t)),"c1"!==t.id&&t.latitude&&t.longitude)){var n=this.getDistance(t,e);"number"==typeof n&&(r=this.getMills(n))}return r}}),methods:{getDistance:function(e,t){try{var r=new google.maps.LatLng(parseFloat(e.latitude),parseFloat(e.longitude)),n=new google.maps.LatLng(parseFloat(t.latitude),parseFloat(t.longitude));return google.maps.geometry.spherical.computeDistanceBetween(r,n)}catch(e){return!1}},getMills:function(e){return(621371e-9*e).toFixed(1)}}}}}]);