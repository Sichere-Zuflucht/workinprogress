(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{343:function(e,t,n){"use strict";n.r(t);var o={props:{disabled:{type:Boolean,default:!1}}},r=n(67),l=n(75),d=n.n(l),c=n(160),v=n(83),h=n(332),f=n(132),m=n(355),y=n(231),x=n(334),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{staticClass:"mx-auto",staticStyle:{"max-width":"700px"}},[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var o=t.hover;return[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"320"}},[n("v-img",{attrs:{src:"le-buzz-tVnm9I9jb8I-unsplash.jpg",height:"200px"}},[e.disabled?n("v-expand-transition",[o?n("div",{staticClass:"\n                d-flex\n                transition-fast-in-fast-out\n                secondary\n                v-card--reveal\n                font-weight-bold\n                d-flex\n                align-center\n                justify-center\n                text-center\n                white--text\n              ",staticStyle:{height:"100%"}},[e._v("\n              Bald können wir das anbieten.\n            ")]):e._e()]):e._e()],1),e._v(" "),n("v-card-title",[n("h3",{staticClass:"text-h3 primary--text font-weight-bold mb-2"},[e._v("\n            Beratung und Hilfe\n          ")])]),e._v(" "),n("v-card-subtitle",[e._v("\n          in Form von "),n("b",[e._v("Online-Besprechungen")]),e._v(" mit Fachleuten zu euren\n          Themen. Diese könnt ihr von überall ganz\n          "),n("b",[e._v("einfach und anonym")]),e._v(" mit dem "),n("b",[e._v("Handy")]),e._v(" machen.\n        ")])],1)]}}])})],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var o=t.hover;return[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"320"}},[n("v-img",{attrs:{src:"erol-ahmed-9XiN0r2NWSM-unsplash.jpg",height:"200px"}},[e.disabled?n("v-expand-transition",[o?n("div",{staticClass:"\n                d-flex\n                transition-fast-in-fast-out\n                secondary\n                v-card--reveal\n                font-weight-bold\n                d-flex\n                align-center\n                justify-center\n                text-center\n                white--text\n              ",staticStyle:{height:"100%"}},[e._v("\n              Bald können wir das anbieten.\n            ")]):e._e()]):e._e()],1),e._v(" "),n("v-card-title",[n("h3",{staticClass:"text-h3 primary--text font-weight-bold mb-2"},[e._v("\n            Schnelle Unterkunft\n          ")])]),e._v(" "),n("v-card-subtitle",[e._v("\n          Du musst schnell zuhause raus? Pack deine Kinder ein und zieh in\n          eine unserer verbündeten Ferienunterkünfte.\n        ")])],1)]}}])})],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VCard:c.a,VCardSubtitle:v.a,VCardTitle:v.c,VCol:h.a,VExpandTransition:f.a,VHover:m.a,VImg:y.a,VRow:x.a})},355:function(e,t,n){"use strict";n(27),n(58);var o=n(0).a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(e,t){var n=this;this.clearDelay();var o=parseInt(this["".concat(e,"Delay")],10);this["".concat(e,"Timeout")]=setTimeout(t||function(){n.isActive={open:!0,close:!1}[e]},o)}}}),r=n(125),l=n(19),d=n(9);t.a=Object(l.a)(o,r.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(d.c)("v-hover should only contain a single element",this),element)):(Object(d.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})}}]);