(this["webpackJsonpamae-koromo"]=this["webpackJsonpamae-koromo"]||[]).push([[7],{121:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return o}));var c=n(10),a=n(18),l=n(0),r=n(1),s={selectedModes:[]},i=n.n(r).a.createContext([Object(a.a)({},s),function(){}]),d=function(){return Object(r.useContext)(i)};function o(e){var t=e.children,n=Object(r.useReducer)((function(e,t){return Object(a.a)(Object(a.a)({},e),t)}),null,(function(){return Object(a.a)({},s)})),d=Object(c.a)(n,2),o=d[0],u=d[1],b=Object(r.useMemo)((function(){return[o,u]}),[o,u]);return Object(l.jsx)(i.Provider,{value:b,children:t})}},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return c.a})),n.d(t,"c",(function(){return c.b})),n.d(t,"b",(function(){return d}));var c=n(121),a=n(10),l=n(0),r=n(1),s=n(70),i=n(7);function d(e){var t=e.type,n=void 0===t?"radio":t,d=e.availableModes,o=void 0===d?i.b.availableModes:d,u=e.autoSelectFirst,b=void 0!==u&&u,j=e.oneOrAll,f=void 0!==j&&j,O=Object(c.b)(),h=Object(a.a)(O,2),v=h[0],x=h[1],M=Object(r.useCallback)((function(e){return x({selectedModes:e})}),[x]);return Object(r.useEffect)((function(){if(o.length){var e=(v.selectedModes||[]).filter((function(e){return o.includes(e)}));e.length?!f||[1,o.length].includes(e.length)?"radio"===n&&e.length>1?x({selectedModes:[e[0]]}):e.length!==v.selectedModes.length&&x({selectedModes:e}):x({selectedModes:o}):b?x({selectedModes:[o[0]]}):f&&x({selectedModes:o})}}),[b,o,v.selectedModes,f,n,x]),i.b.availableModes.length<2?null:Object(l.jsx)("div",{className:"row mb-3",children:Object(l.jsx)("div",{className:"col",children:Object(l.jsx)(s.a,{type:n,mode:v.selectedModes,onChange:M,availableModes:o})})})}},454:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var c=n(10),a=n(0),l=n(1),r=n(56),s=n(65),i=n(57),d=n(23),o=n(5),u=n(12),b=n(45),j=n(118),f=n(17),O=n(126),h=n(7),v=f.a.t.bind(f.a);function x(e){var t=e.cellData;if(!t)return null;var n=t;if(!n.fan[0].\u5f79\u6ee1)return Object(a.jsxs)("span",{children:[Object(u.f)(n.fan.map((function(e){return e.count})))," ",Object(a.jsx)(b.a,{children:"\u756a"}),Object(a.jsx)("br",{}),Object(a.jsx)(b.a,{children:"\u7d2f\u8ba1\u5f79\u6ee1"})]});if(1===n.fan.length){var c=v(n.fan[0].label);return"en"===f.a.language?Object(a.jsx)("span",{title:c,children:c}):c.length>4?Object(a.jsxs)("span",{title:c,children:[c.slice(0,4),Object(a.jsx)("br",{}),c.slice(4)]}):c}return 2===n.fan.length?Object(a.jsxs)("span",{title:n.fan.map((function(e){return e.label})).join("\n"),children:[Object(a.jsx)(b.a,{children:n.fan[0].label}),Object(a.jsx)("br",{}),Object(a.jsx)(b.a,{children:n.fan[1].label})]}):Object(a.jsx)("span",{title:n.fan.map((function(e){return e.label})).join("\n"),children:o.FanStatEntryList.formatFanSummary(n.fan)})}var M=Object(d.i)((function(){return Object(a.jsx)(d.g,{dataKey:"event",label:Object(a.jsx)(b.a,{children:"\u7c7b\u578b"}),cellRenderer:x,width:80})}))();function g(e){return e.event.player}function m(){var e=Object(O.c)(),t=Object(c.a)(e,2),n=t[0],r=t[1],o=Object(l.useMemo)((function(){return h.b.availableModes.length?n.selectedModes&&n.selectedModes.length?s.a.createHightlight(n.selectedModes[0]):null:s.a.createHightlight(void 0)}),[n]);return Object(l.useEffect)((function(){n.selectedModes&&n.selectedModes.length||h.b.availableModes.length&&r({selectedModes:[h.b.availableModes[0]]})}),[n,r]),o?Object(a.jsx)(i.b,{provider:o,children:Object(a.jsx)(d.h,{withActivePlayer:!0,alwaysShowDetailLink:!0,columns:[M,Object(d.d)(g),d.b]})}):Object(a.jsx)(a.Fragment,{})}function p(){var e=Object(j.a)().t;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(r.default,{title:e("\u6700\u8fd1\u5f79\u6ee1")}),Object(a.jsxs)(O.a,{children:[Object(a.jsx)(O.b,{}),Object(a.jsx)(m,{})]})]})}}}]);
//# sourceMappingURL=7.75f27d7e.chunk.js.map