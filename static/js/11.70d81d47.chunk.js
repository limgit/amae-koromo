(this["webpackJsonpamae-koromo"]=this["webpackJsonpamae-koromo"]||[]).push([[11],{541:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(51),c=a(4),m=a(3),o=a(15),s=a(82),i=a(36),u=a(78),E=a(24),b=a(42),d=a(33),v=a(52);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(a,!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var N={selectedMode:""},f=r.a.createContext([h({},N),function(){}]),g=function(){return Object(n.useContext)(f)};function O(e){var t=e.children,a=Object(n.useReducer)((function(e,t){return h({},e,{},t)}),null,(function(){return h({},N)})),l=Object(m.a)(a,2),c=l[0],o=l[1],s=Object(n.useMemo)((function(){return[c,o]}),[c,o]);return r.a.createElement(f.Provider,{value:s},t)}function k(e){var t=e.rows,a=void 0===t?[]:t;return r.a.createElement("table",{className:"table table-striped"},r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,r.a.createElement(o.b,{to:Object(b.c)(e.id)},"[",d.LevelWithDelta.getTag(e.level),"] ",e.nickname)),r.a.createElement("td",{className:"text-right"},e.delta))}))))}function y(){var e=Object(i.g)((function(){return Object(u.b)(s.b.OneWeek)}),[]),t=Object(i.g)((function(){return Object(u.b)(s.b.FourWeeks)}),[]),a=g(),n=Object(m.a)(a,1)[0].selectedMode;return e&&t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("h3",{className:"text-center"},"\u82e6\u4e3b\u699c"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h4",{className:"text-center"},"\u4e00\u5468"),r.a.createElement(k,{rows:e[n||"0"].bottom})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h4",{className:"text-center"},"\u56db\u5468"),r.a.createElement(k,{rows:t[n||"0"].bottom})))),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("h3",{className:"text-center"},"\u6c6a\u6c6a\u699c"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h4",{className:"text-center"},"\u4e00\u5468"),r.a.createElement(k,{rows:e[n||"0"].top}),";"),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h4",{className:"text-center"},"\u56db\u5468"),r.a.createElement(k,{rows:t[n||"0"].top}),";"))))):r.a.createElement(E.a,null)}function j(e){var t=e.rows,a=void 0===t?[]:t,n=e.formatter,l=void 0===n?i.c:n,c=e.showNumGames,m=void 0===c||c,s=e.valueLabel,u=void 0===s?"":s;return a&&a.length?r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"text-right"},"\u6392\u540d"),r.a.createElement("th",null,"\u73a9\u5bb6"),m&&r.a.createElement("th",{className:"text-right"},"\u5bf9\u5c40\u6570"),r.a.createElement("th",{className:"text-right"},u))),r.a.createElement("tbody",null,a.map((function(e,t){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",{className:"text-right"},t+1),r.a.createElement("td",null,r.a.createElement(o.b,{to:Object(b.c)(e.id)},"[",d.LevelWithDelta.getTag(e.level),"] ",e.nickname)),m&&r.a.createElement("td",{className:"text-right"},e.count),r.a.createElement("td",{className:"text-right"},l(e.rank_key)))})))):r.a.createElement(E.a,null)}function w(e){var t=e.type,a=e.title,n=e.formatter,l=void 0===n?i.c:n,c=e.showNumGames,o=void 0===c||c,s=e.valueLabel,E=void 0===s?"":s,b=g(),d=Object(m.a)(b,1)[0].selectedMode,v=Object(i.g)((function(){return Object(u.a)(t,d)}),[t,d]);return r.a.createElement("div",{className:"col-lg"},r.a.createElement("h3",{className:"text-center mb-2"},a),r.a.createElement(j,{rows:v,formatter:l,valueLabel:E||a,showNumGames:o}),";")}function x(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{stateName:"careerRankingNotice"},r.a.createElement("h4",{className:"mb-2"},"\u63d0\u793a"),"\u672c\u699c\u53ea\u5305\u542b\u6709\u81f3\u5c11 300 \u573a\u5bf9\u5c40\u8bb0\u5f55\u7684\u73a9\u5bb6"),r.a.createElement("div",{className:"row"},t.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},e)}))))}var C=a(79),R=a(77);function P(){var e=g(),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useCallback)((function(e){return l({selectedMode:e})}),[l]);return r.a.createElement(R.a,{mode:a.selectedMode,onChange:c})}var T=a(81);function L(){var e=Object(c.j)()||{path:""};return r.a.createElement(O,null,r.a.createElement(l.a,{stateName:"rankingNotice"},r.a.createElement("h4",{className:"mb-2"},"\u63d0\u793a"),"\u6392\u884c\u699c\u975e\u5b9e\u65f6\u66f4\u65b0\uff0c\u53ef\u80fd\u4f1a\u6709\u6570\u5c0f\u65f6\u7684\u5ef6\u8fdf"),r.a.createElement("nav",{className:"nav nav-pills mb-3"},r.a.createElement(o.c,{to:"".concat(e.path,"/delta"),className:"nav-link",activeClassName:"active"},"\u82e6\u4e3b\u4e0e\u6c6a\u6c6a"),r.a.createElement(o.c,{to:"".concat(e.path,"/career1"),className:"nav-link",activeClassName:"active"},"\u4e00\u4f4d\u7387/\u56db\u4f4d\u7387"),r.a.createElement(o.c,{to:"".concat(e.path,"/career2"),className:"nav-link",activeClassName:"active"},"\u8fde\u5bf9\u7387/\u5b89\u5b9a\u6bb5\u4f4d"),r.a.createElement(o.c,{to:"".concat(e.path,"/career3"),className:"nav-link",activeClassName:"active"},"\u5e73\u5747\u987a\u4f4d/\u5bf9\u5c40\u6570")),r.a.createElement("div",{className:"row mb-3"},r.a.createElement("div",{className:"col"},r.a.createElement(P,null))),r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"".concat(e.path,"/delta")},r.a.createElement(C.Helmet,null,r.a.createElement("title",null,"\u82e6\u4e3b\u53ca\u6c6a\u6c6a")),r.a.createElement(y,null)),r.a.createElement(c.b,{path:"".concat(e.path,"/career1")},r.a.createElement(C.Helmet,null,r.a.createElement("title",null,"\u4e00\u4f4d\u7387/\u56db\u4f4d\u7387")),r.a.createElement(x,null,r.a.createElement(w,{type:d.CareerRankingType.Rank1,title:"\u4e00\u4f4d\u7387"}),r.a.createElement(w,{type:d.CareerRankingType.Rank4,title:"\u56db\u4f4d\u7387"}))),r.a.createElement(c.b,{path:"".concat(e.path,"/career2")},r.a.createElement(C.Helmet,null,r.a.createElement("title",null,"\u8fde\u5bf9\u7387/\u5b89\u5b9a\u6bb5\u4f4d")),r.a.createElement(x,null,r.a.createElement(w,{type:d.CareerRankingType.Rank12,title:"\u8fde\u5bf9\u7387"}),r.a.createElement(w,{type:d.CareerRankingType.StableLevel,title:"\u5b89\u5b9a\u6bb5\u4f4d",formatter:T.a.formatStableLevel2}))),r.a.createElement(c.b,{path:"".concat(e.path,"/career3")},r.a.createElement(C.Helmet,null,r.a.createElement("title",null,"\u5e73\u5747\u987a\u4f4d/\u5bf9\u5c40\u6570")),r.a.createElement(x,null,r.a.createElement(w,{type:d.CareerRankingType.AvgRank,title:"\u5e73\u5747\u987a\u4f4d",formatter:i.a}),r.a.createElement(w,{type:d.CareerRankingType.NumGames,title:"\u5bf9\u5c40\u6570",formatter:i.b,showNumGames:!1}))),r.a.createElement(c.b,null,r.a.createElement(c.a,{to:"".concat(e.path,"/delta")}))))}a.d(t,"default",(function(){return L}))}}]);
//# sourceMappingURL=11.70d81d47.chunk.js.map