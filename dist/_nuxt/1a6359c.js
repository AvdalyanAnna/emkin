(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{1925:function(t,e,n){"use strict";n.r(e);var o={middleware:["ghost"],mounted:function(){var t=this;this.$auth.strategy.token.set(this.$route.query.token||null),this.$auth.fetchUser().catch((function(){return t.$auth.logout()})),localStorage.setItem("user",0),this.$axios.$get(this.$api.user.favorites).then((function(t){localStorage.setItem("favourites",t.data.favorites)})),this.$router.push(this.$changeRoute("/announcements"))}},r=n(13),component=Object(r.a)(o,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);e.default=component.exports}}]);