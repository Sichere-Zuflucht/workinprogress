(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{338:function(t,r,n){"use strict";n(14),n(12),n(66),n(30),n(233),n(165),n(85),n(84);var e=n(0);var c,o=n(64);r.a=(c="container",e.a.extend({name:"v-".concat(c),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,r){var n=r.props,data=r.data,e=r.children;data.staticClass="".concat(c," ").concat(data.staticClass||"").trim();var o=data.attrs;if(o){data.attrs={};var d=Object.keys(o).filter((function(t){if("slot"===t)return!1;var r=o[t];return t.startsWith("data-")?(data.attrs[t]=r,!1):r||"string"==typeof r}));d.length&&(data.staticClass+=" ".concat(d.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,e)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,r){var n,e=r.props,data=r.data,c=r.children,d=data.attrs;return d&&(data.attrs={},n=Object.keys(d).filter((function(t){if("slot"===t)return!1;var r=d[t];return t.startsWith("data-")?(data.attrs[t]=r,!1):r||"string"==typeof r}))),e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),c)}})},362:function(t,r,n){"use strict";n.r(r);var e=n(67),c=n(75),o=n.n(c),d=n(338),component=Object(e.a)({},(function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("v-container",[n("h1",{staticClass:"text-h1 primary--text mt-8"},[t._v("Impressum")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://sichere-zuflucht.de"}},[t._v("https://sichere-zuflucht.de")]),n("br"),n("br"),t._v("Sichere Zuflucht gemeinnützige GmbH"),n("br"),t._v("In der Hofstatt 1"),n("br"),t._v("88131\n    Lindau "),n("br"),n("br"),t._v("E-Mail: "),n("br"),n("a",{attrs:{href:"mailto:kontakt@sichere-zuflucht.de"}},[t._v("kontakt@sichere-zuflucht.de")]),n("br"),n("br"),t._v("\n    Realisierung: "),n("br"),t._v("\n    Benedikt Ulrich und Sebastian Fellner"),n("br"),t._v(" "),n("br"),t._v("\n    Design: "),n("br"),t._v("\n    Antje Kunzmann\n  ")])])}),[],!1,null,null,null);r.default=component.exports;o()(component,{VContainer:d.a})}}]);