(this["webpackJsonpamae-koromo"]=this["webpackJsonpamae-koromo"]||[]).push([[11],{542:function(e,a,t){"use strict";t.r(a);var l=t(0),c=t.n(l),n=t(51),r=t(4),m=t(3),s=t(15),o=t(78),E=t(36),i=t(79),u=t(24),d=t(42),b=t(33),N=t(77);function v(e){var a=e.rows,t=void 0===a?[]:a;return c.a.createElement("table",{className:"table table-striped"},c.a.createElement("tbody",null,t.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,c.a.createElement(s.b,{to:Object(d.c)(e.id)},"[",b.LevelWithDelta.getTag(e.level),"] ",e.nickname)),c.a.createElement("td",{className:"text-right"},e.delta))}))))}function h(){var e=Object(E.e)((function(){return Object(i.b)(o.b.OneWeek)}),[]),a=Object(E.e)((function(){return Object(i.b)(o.b.FourWeeks)}),[]),t=Object(l.useState)(""),n=Object(m.a)(t,2),r=n[0],s=n[1];return e&&a?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement(N.a,{mode:r,onChange:s}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("h3",{className:"text-center"},"\u82e6\u4e3b\u699c"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("h4",{className:"text-center"},"\u4e00\u5468"),c.a.createElement(v,{rows:e[r||"0"].bottom}),";"),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("h4",{className:"text-center"},"\u56db\u5468"),c.a.createElement(v,{rows:a[r||"0"].bottom}),";"))),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("h3",{className:"text-center"},"\u6c6a\u6c6a\u699c"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("h4",{className:"text-center"},"\u4e00\u5468"),c.a.createElement(v,{rows:e[r||"0"].top}),";"),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("h4",{className:"text-center"},"\u56db\u5468"),c.a.createElement(v,{rows:a[r||"0"].top}),";"))))):c.a.createElement(u.a,null)}function p(e){var a=e.rows,t=void 0===a?[]:a;return t&&t.length?c.a.createElement("table",{className:"table table-striped"},c.a.createElement("tbody",null,t.map((function(e,a){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,a+1),c.a.createElement("td",null,c.a.createElement(s.b,{to:Object(d.c)(e.id)},"[",b.LevelWithDelta.getTag(e.level),"] ",e.nickname)),c.a.createElement("td",{className:"text-right"},Object(E.a)(e.rank_key)))})))):c.a.createElement(u.a,null)}function j(){var e=Object(l.useState)(""),a=Object(m.a)(e,2),t=a[0],r=a[1],s=Object(E.e)((function(){return Object(i.a)(o.a.Rank1,t)}),[t]),u=Object(E.e)((function(){return Object(i.a)(o.a.Rank12,t)}),[t]),d=Object(E.e)((function(){return Object(i.a)(o.a.Rank123,t)}),[t]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(n.a,{stateName:"careerRankingNotice"},c.a.createElement("h4",{className:"mb-2"},"\u63d0\u793a"),"\u672c\u699c\u53ea\u5305\u542b\u6709\u81f3\u5c11 300 \u573a\u5bf9\u5c40\u8bb0\u5f55\u7684\u73a9\u5bb6"),c.a.createElement("div",{className:"row mb-3"},c.a.createElement("div",{className:"col"},c.a.createElement(N.a,{mode:t,onChange:r}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("h3",{className:"text-center"},"\u4e00\u4f4d\u7387"),c.a.createElement(p,{rows:s}),";"),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("h3",{className:"text-center"},"\u8fde\u5bf9\u7387"),c.a.createElement(p,{rows:u}),";"),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("h3",{className:"text-center"},"\u907f\u56db\u7387"),c.a.createElement(p,{rows:d}),";")))}var k=t(80);function O(){var e=Object(r.j)()||{path:""};return c.a.createElement("div",null,c.a.createElement(n.a,{stateName:"rankingNotice"},c.a.createElement("h4",{className:"mb-2"},"\u63d0\u793a"),"\u6392\u884c\u699c\u975e\u5b9e\u65f6\u66f4\u65b0\uff0c\u53ef\u80fd\u4f1a\u6709\u6570\u5c0f\u65f6\u7684\u5ef6\u8fdf"),c.a.createElement("nav",{className:"nav nav-pills mb-3"},c.a.createElement(s.c,{to:"".concat(e.path,"/delta"),className:"nav-link",activeClassName:"active"},"\u82e6\u4e3b\u4e0e\u6c6a\u6c6a"),c.a.createElement(s.c,{to:"".concat(e.path,"/career"),className:"nav-link",activeClassName:"active"},"\u6570\u636e\u699c")),c.a.createElement(r.d,null,c.a.createElement(r.b,{path:"".concat(e.path,"/delta")},c.a.createElement(k.Helmet,null,c.a.createElement("title",null,"\u82e6\u4e3b\u53ca\u6c6a\u6c6a")),c.a.createElement(h,null)),c.a.createElement(r.b,{path:"".concat(e.path,"/career")},c.a.createElement(k.Helmet,null,c.a.createElement("title",null,"\u6570\u636e\u699c")),c.a.createElement(j,null)),c.a.createElement(r.b,null,c.a.createElement(r.a,{to:"".concat(e.path,"/delta")}))))}t.d(a,"default",(function(){return O}))}}]);
//# sourceMappingURL=11.d3617311.chunk.js.map