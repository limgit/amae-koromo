(this["webpackJsonpamae-koromo"]=this["webpackJsonpamae-koromo"]||[]).push([[11],{177:function(e,t,c){"use strict";c.d(t,"b",(function(){return o})),c.d(t,"d",(function(){return b})),c.d(t,"a",(function(){return O})),c.d(t,"e",(function(){return h})),c.d(t,"c",(function(){return x}));var a=c(23),n=c(0),l=c(1),r=c.n(l),s=c(31),i=c(12),d=c(69),j=c(111),o=function(){throw new Error("Not intended for rendering")},b=function(){throw new Error("Not intended for rendering")},u=r.a.createContext([]);function O(e){var t=e.className,c=void 0===t?"":t,r=e.replace,d=void 0!==r&&r,o=e.keepState,b=void 0!==o&&o,O=e.withQueryString,h=void 0!==O&&O,x=Object(j.a)("navButtons").t,p=Object(l.useContext)(u),m=(Object(i.k)()||{url:""}).url.replace(/\/+$/,"");return Object(n.jsx)("nav",{className:"nav nav-pills mb-3 ".concat(c),children:p.filter((function(e){return!e.disabled})).map((function(e){return Object(n.jsx)(s.c,{to:function(t){return Object(a.a)({pathname:"".concat(m,"/").concat(e.path),state:b?t.state:void 0},h&&t.search?{search:t.search}:{})},replace:d,exact:!!e.exact,className:"nav-link",activeClassName:"active",children:x(e.title)},e.path)}))})}function h(e){var t=e.defaultRenderDirectly,c=void 0!==t&&t,r=e.mutateTitle,s=void 0===r||r,o=e.children,b=Object(j.a)("navButtons").t,O=Object(l.useContext)(u),h=Object(i.k)()||{url:""},x=Object(i.i)(),p=h.url.replace(/\/+$/,"");return Object(n.jsxs)(i.d,{children:[O.filter((function(e){return!e.disabled})).map((function(e){return Object(n.jsxs)(i.b,{exact:e.exact,path:"".concat(p,"/").concat(e.path),children:[s&&Object(n.jsx)(d.Helmet,{children:Object(n.jsx)("title",{children:b(e.title)})}),e.children]},e.path)})),Object(n.jsx)(i.b,{children:c?O[0].children:Object(n.jsx)(i.a,{to:Object(a.a)(Object(a.a)({},x),{},{pathname:"".concat(p,"/").concat(O[0].path)}),push:!1})}),o]})}function x(e){var t=e.children;return Object(n.jsx)(u.Provider,{value:t[0].props.children.map((function(e){return e.props})),children:t.slice(1)})}},819:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return Y}));var a=c(11),n=c(0),l=c(1),r=c.n(l),s=c(39),i=c(69),d=c(70),j=c(13),o=c(6),b=c(26),u=c(90),O=c(35),h=c(48),x=c(10),p=c.n(x),m=c(86),f=c(8);var v,g=c(12),y=c(47);!function(e){e.All="\u5168\u90e8",e.Last4Weeks="\u6700\u8fd1\u56db\u5468",e.Custom="\u81ea\u5b9a\u4e49"}(v||(v={}));var N=Object.keys(v).map((function(e){return{key:v[e],label:v[e],value:v[e]}})),M=[{key:"All",label:"\u5168\u90e8",value:"\u5168\u90e8"}].concat(f.b.rankColors.map((function(e,t){return{key:(t+1).toString(),label:Object(o.getRankLabelByIndex)(t),value:(t+1).toString()}})));function I(e){var t=e.showLevel,c=void 0!==t&&t,r=e.availableModes,s=void 0===r?[]:r,i=Object(O.b)(),d=Object(a.a)(i,2),j=d[0],o=d[1],b=Object(g.i)(),x=Object(l.useState)((function(){return"player"!==j.type?v.All:j.startDate?v.Custom:v.All})),I=Object(a.a)(x,2),k=I[0],S=I[1],w=Object(l.useState)((function(){return"player"===j.type&&j.startDate?j.startDate:f.b.dateMin})),D=Object(a.a)(w,2),P=D[0],C=D[1],L=Object(l.useState)((function(){return"player"===j.type&&j.endDate?j.endDate:p()()})),A=Object(a.a)(L,2),F=A[0],_=A[1],G=Object(l.useCallback)((function(e){if(k!==e&&"player"===j.type){if(e===v.All)o({type:"player",playerId:j.playerId,startDate:null,endDate:null});else if(e===v.Last4Weeks){var t=p()().subtract(27,"day");o({type:"player",playerId:j.playerId,startDate:t,endDate:null}),C(t),_(p()())}else if(e===v.Custom){if("player"!==j.type)return;var c=p()(k===v.Last4Weeks&&j.startDate||f.b.dateMin);o({type:"player",playerId:j.playerId,startDate:c,endDate:p()()}),C(c),_(p()())}S(e)}}),[k,j,o]);Object(l.useEffect)((function(){if("player"===j.type&&b.pathname.replace(/\/[^/]*[a-z][^/]*(\?[^?]*)?$/i,"")===Object(y.generatePath)(j).replace(/(\?[^?]*)?$/i,""))if(null!==j.startDate||null!==j.endDate||k===v.All){if(k===v.Custom){if(p()(F).isBefore(P)){var e=p()(P).endOf("day");return e.isAfter(new Date)&&(e=p()().endOf("day")),_(e),void(p()(F).isBefore(P)&&C(p()(e).startOf("day")))}o({type:"player",playerId:j.playerId,startDate:P,endDate:F})}}else k===v.Custom?(C(f.b.dateMin),_(p()())):k===v.Last4Weeks&&S(v.All)}),[j,k,P,F,o,b.pathname]);var E=Object(l.useCallback)((function(e){e.length&&"player"===j.type&&function(e,t,c){try{localStorage.setItem("".concat(e).concat(f.b.canonicalDomain).concat(t),JSON.stringify(c))}catch(a){}}("modePreference",j.playerId,e),o({type:"player",selectedModes:e})}),[j,o]),R=Object(l.useCallback)((function(e){return o({type:"player",searchText:e.currentTarget.value})}),[o]),T=Object(l.useCallback)((function(e){return o({type:"player",rank:parseInt(e)||null})}),[o]);return"player"!==j.type?null:Object(n.jsxs)("div",{className:"player-details-settings",children:[Object(n.jsxs)("div",{className:"setting",children:[Object(n.jsx)(u.a,{title:"\u65f6\u95f4",inline:!0,children:Object(n.jsx)(h.a,{type:"radio",selectedItems:[k],items:N,groupKey:"PlayerDetailsDateRangeSelector",onChange:function(e){return G(e[0].value)}})}),k===v.Custom?Object(n.jsx)("div",{className:"custom-period",children:Object(n.jsxs)(u.a,{inline:!0,children:[Object(n.jsx)(h.b,{min:f.b.dateMin,onChange:C,date:P,className:"form-control"}),Object(n.jsx)(h.b,{min:f.b.dateMin,onChange:_,date:F,className:"form-control"})]})}):null]}),c&&s.length>0&&Object(n.jsx)("div",{className:"setting",children:Object(n.jsx)(u.a,{title:"\u7b49\u7ea7",inline:!0,children:Object(n.jsx)(m.a,{type:"checkbox",mode:j.selectedModes,onChange:E,availableModes:s,i18nNamespace:"gameModeShort"})})}),Object(n.jsx)("div",{className:"setting",children:Object(n.jsx)(u.a,{title:"\u987a\u4f4d",inline:!0,children:Object(n.jsx)(h.a,{type:"radio",selectedItems:[(j.rank||"All").toString()],items:M,groupKey:"PlayerDetailsRankSelector",onChange:function(e){return T(e[0].key)}})})}),j.searchText?Object(n.jsx)("div",{className:"setting",children:Object(n.jsx)(u.a,{title:"\u67e5\u627e\u73a9\u5bb6",children:Object(n.jsx)("input",{type:"text",className:"form-control",value:j.searchText,onChange:R})})}):null]})}var k=c(111);function S(e){var t=e.label,c=e.description,a=e.className,l=void 0===a?"":a,r=e.i18nNamespace,s=e.children,i=Object(k.a)(r).t;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("dt",{className:"text-nowrap ".concat(l),children:i(t)}),Object(n.jsx)("dd",{className:"text-right ".concat(l),"data-tip":c?i(c):"","data-html":"true",children:s})]})}var w=[o.GameMode.\u7389,o.GameMode.\u738b\u5ea7,o.GameMode.\u4e09\u7389,o.GameMode.\u4e09\u738b\u5ea7,o.GameMode.\u738b\u5ea7\u4e1c,o.GameMode.\u7389\u4e1c,o.GameMode.\u4e09\u738b\u5ea7\u4e1c,o.GameMode.\u4e09\u7389\u4e1c];function D(e){var t=e.metadata,c=Object(O.b)(),l=Object(a.a)(c,1)[0],r=Object(k.a)().t;if(!f.b.features.estimatedStableLevel)return null;var s=o.LevelWithDelta.getAdjustedLevel(t.level);if(!("selectedModes"in l)||1!==l.selectedModes.length)return null;var i=l.selectedModes[0];if(!w.includes(i))return null;var d=t.count<100,b=o.PlayerMetadata.calculateExpectedGamePoint(t,i),u=null;if(s.getMaxPoint()&&s.isAllowedMode(i)){var h=s.isSame(new o.Level(t.level.id))?t.level.score+t.level.delta:s.getStartingPoint();u=b>0?(s.getMaxPoint()-h)/b:h/b}var x=u?r("\uff0c\u62ec\u53f7\u5185\u4e3a\u9884\u8ba1{{ label }}\u6bb5\u573a\u6570",{label:r(u>0?"\u5347":"\u964d")}):"",p=o.PlayerMetadata.getStableLevelComponents(t,i),m="\u4e00\u4e8c\u4e09\u56db".slice(0,p.length),v=Object(o.modeLabel)(i);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(S,{label:"\u5b89\u5b9a\u6bb5\u4f4d",description:"".concat(r("\u5728{{ modeL }}\u4e4b\u95f4\u4e00\u76f4\u8fdb\u884c\u5bf9\u5c40\uff0c\u9884\u6d4b\u6700\u7ec8\u80fd\u8fbe\u5230\u7684\u6bb5\u4f4d\u3002",{modeL:v})).concat(3===m.length?r("\u62ec\u53f7\u5185\u4e3a\u5b89\u5b9a\u6bb5\u4f4d\u65f6\u7684\u5206\u6570\u671f\u671b\u3002"):"").concat(d?r("\uff08\u6570\u636e\u91cf\u4e0d\u8db3\uff0c\u8ba1\u7b97\u7ed3\u679c\u53ef\u80fd\u6709\u8f83\u5927\u504f\u5dee\uff09"):"","<br/>").concat(r("{{ levelNames1 }}\u4f4d\u5e73\u5747 Pt / {{ levelName2 }}\u4f4d\u5e73\u5747\u5f97\u70b9 Pt\uff1a",{levelNames1:m.slice(0,m.length-1),levelName2:m[m.length-1]}),"[").concat(p.map((function(e){return e.toFixed(2)})).join("/"),"]<br/>").concat(r("\u5f97\u70b9\u6548\u7387\uff08\u5404\u987a\u4f4d\u5e73\u5747 Pt \u53ca\u5e73\u5747\u5f97\u70b9 Pt \u7684\u52a0\u6743\u5e73\u5747\u503c\uff09\uff1a")).concat(Object(j.a)(o.PlayerMetadata.calculateExpectedGamePoint(t,i,void 0,!1))),className:d?"font-italic font-lighter text-muted":"",children:Object(n.jsxs)("span",{children:[o.PlayerMetadata.estimateStableLevel2(t,i),d&&"?"]})}),Object(n.jsx)(S,{label:"\u5206\u6570\u671f\u671b",description:"".concat(r("\u5728{{ modeL }}\u4e4b\u95f4\u6bcf\u5c40\u83b7\u5f97\u70b9\u6570\u7684\u6570\u5b66\u671f\u671b\u503c{{ changeLevelMsg }}",{changeLevelMsg:x,modeL:v})).concat(d?r("\uff08\u6570\u636e\u91cf\u4e0d\u8db3\uff0c\u8ba1\u7b97\u7ed3\u679c\u53ef\u80fd\u6709\u8f83\u5927\u504f\u5dee\uff09"):""),className:d?"font-italic font-lighter text-muted":"",children:Object(n.jsxs)("span",{children:[b.toFixed(1),u?" (".concat(Math.abs(u).toFixed(0),")"):"",d&&"?"]})})]})}var P=c(55),C=c(177),L=c(63),A=c(31),F=c(97);function _(e){var t=e.numGames,c=void 0===t?100:t,s=e.numDisplay,i=void 0===s?10:s,u=e.currentAccountId,h=void 0===u?0:u,x=Object(k.a)().t,p=Object(d.c)(),m=Object(O.b)(),f=Object(a.a)(m,2)[1],v=p.getCount(),g=Math.min(v,c),N=Object(l.useMemo)((function(){if(v<=0)return null;for(var e={},t=0;t<g;t++){var c=p.getItem(t);if(!("uuid"in c))return null;var a=c.players.find((function(e){return e.accountId.toString()===h.toString()}));if(!a)throw new Error("Can't find current player, shouldn't happen. Current: ".concat(h,", Players: ").concat(c.players.map((function(e){return e.accountId})).join(", ")));var n,l=Object(L.a)(c.players);try{for(l.s();!(n=l.n()).done;){var r=n.value;if(r.accountId!==h){e[r.accountId]||(e[r.accountId]={player:r,count:0,resultSelf:new Array(c.players.length).fill(0),resultOpponent:new Array(c.players.length).fill(0),pointSelf:0,pointOpponent:0,win:0});var s=e[r.accountId];s.count++;var i=o.GameRecord.getRankIndexByPlayer(c,h),d=o.GameRecord.getRankIndexByPlayer(c,r);s.resultSelf[i]++,s.resultOpponent[d]++,i<d&&s.win++,c.modeId&&(s.pointSelf+=Object(o.calculateDeltaPoint)(a.score,i,c.modeId,new o.Level(a.level),!0,!0),s.pointOpponent+=Object(o.calculateDeltaPoint)(r.score,d,c.modeId,new o.Level(r.level),!0,!0))}}}catch(b){l.e(b)}finally{l.f()}}var j=Object.values(e);return j.sort((function(e,t){return t.count-e.count})),j}),[v,p,g,h]);return v<=0?null:N?Object(n.jsx)("dl",{className:"row",children:N.slice(0,i).map((function(e){return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsxs)("div",{style:{display:"none"},id:"smr-statistic-tip-".concat(h,"-").concat(e.player.accountId),children:[Object(n.jsxs)("p",{className:"mt-2",children:[x("\u80dc\u7387\uff1a"),Object(j.c)(e.win/e.count)]}),Object(n.jsxs)("table",{className:"table table-dark mb-1 text-nowrap table-sm text-right",style:{display:"inline-table",backgroundColor:"transparent"},children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{}),Object(n.jsx)("th",{children:x("\u73a9\u5bb6")}),Object(n.jsx)("th",{children:x("\u5bf9\u624b")})]})}),Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"text-left",children:x("\u5e73\u5747\u987a\u4f4d")}),Object(n.jsx)("td",{children:Object(j.a)(o.RankRates.getAvg(e.resultSelf))}),Object(n.jsx)("td",{children:Object(j.a)(o.RankRates.getAvg(e.resultOpponent))})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"text-left",children:x("\u5e73\u5747\u5f97\u70b9")}),Object(n.jsx)("td",{children:Object(j.a)(e.pointSelf/e.count)}),Object(n.jsx)("td",{children:Object(j.a)(e.pointOpponent/e.count)})]}),["\u4e00","\u4e8c","\u4e09","\u56db"].slice(0,e.resultSelf.length).map((function(t,c){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"text-left",children:x(t+"\u4f4d")}),Object(n.jsxs)("td",{children:[Object(j.c)(e.resultSelf[c]/e.count)," (",e.resultSelf[c],")"]}),Object(n.jsxs)("td",{children:[Object(j.c)(e.resultOpponent[c]/e.count)," (",e.resultOpponent[c],")"]})]},c)}))]})]})]}),Object(n.jsxs)("dt",{className:"col-8 col-lg-4 font-weight-normal",children:[Object(n.jsx)(A.b,{to:Object(y.generatePlayerPathById)(e.player.accountId),children:e.player.nickname}),Object(n.jsx)("button",{className:"button-link ml-2",onClick:function(){return f({type:"player",searchText:e.player.nickname})},children:Object(n.jsx)(F.a,{})})]}),Object(n.jsx)("dd",{className:"col-4 col-lg-2 text-right",children:Object(n.jsxs)("span",{"data-tip":"##smr-statistic-tip-".concat(h,"-").concat(e.player.accountId),"data-html":!0,"data-place":Object(j.d)()?"left":"top",children:[" ",Object(j.c)(e.count/g)," (",e.count,")"]})})]},e.player.accountId)}))}):Object(n.jsx)(b.a,{})}function G(e){var t=e.numDisplay,c=void 0===t?10:t,a=e.currentAccountId,l=void 0===a?0:a;return Object(n.jsxs)(C.c,{children:[Object(n.jsxs)(C.d,{children:[Object(n.jsx)(C.b,{path:"latest",title:"\u6700\u8fd1 100 \u5c40",children:Object(n.jsx)(_,{currentAccountId:l,numDisplay:c})}),Object(n.jsx)(C.b,{path:"all",title:"\u5168\u90e8",children:Object(n.jsx)(_,{currentAccountId:l,numDisplay:c,numGames:2147483647})})]}),Object(n.jsx)(C.a,{className:"mt-n3"}),Object(n.jsx)(C.e,{mutateTitle:!1})]})}var E=Object(s.a)({loader:function(){return Promise.all([c.e(0),c.e(12)]).then(c.bind(null,815))},loading:function(){return Object(n.jsx)(b.a,{})}}),R=Object(s.a)({loader:function(){return Promise.all([c.e(0),c.e(13)]).then(c.bind(null,816))},loading:function(){return Object(n.jsx)(b.a,{})}}),T=Object(s.a)({loader:function(){return Promise.all([c.e(0),c.e(10)]).then(c.bind(null,817))},loading:function(){return Object(n.jsx)(b.a,{})}}),W=c.e(16).then(c.bind(null,818)),B=Object(s.a)({loader:function(){return W},loading:function(){return null}});function J(e){var t=e.metadata,c=e.view,a=Object(j.h)(t.extended_stats);if(Object(l.useEffect)(j.g,[!!a]),!a)return null;var r=c;return Object(n.jsx)(r,{stats:a,metadata:t})}function $(e){var t=e.stats;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(S,{label:"\u548c\u724c\u7387",description:"\u548c\u724c\u5c40\u6570 / \u603b\u5c40\u6570",children:Object(j.c)(t.\u548c\u724c\u7387||0)}),Object(n.jsx)(S,{label:"\u653e\u94f3\u7387",description:"\u653e\u94f3\u5c40\u6570 / \u603b\u5c40\u6570",children:Object(j.c)(t.\u653e\u94f3\u7387||0)}),Object(n.jsx)(S,{label:"\u81ea\u6478\u7387",description:"\u81ea\u6478\u5c40\u6570 / \u548c\u724c\u5c40\u6570",children:Object(j.c)(t.\u81ea\u6478\u7387||0)}),Object(n.jsx)(S,{label:"\u9ed8\u80e1\u7387",description:"\u95e8\u6e05\u9ed8\u542c\u548c\u724c\u5c40\u6570 / \u548c\u724c\u5c40\u6570",children:Object(j.c)(t.\u9ed8\u542c\u7387||0)}),Object(n.jsx)(S,{label:"\u6d41\u5c40\u7387",description:"\u6d41\u5c40\u5c40\u6570 / \u603b\u5c40\u6570",children:Object(j.c)(t.\u6d41\u5c40\u7387||0)}),Object(n.jsx)(S,{label:"\u6d41\u542c\u7387",description:"\u6d41\u5c40\u542c\u724c\u5c40\u6570 / \u6d41\u5c40\u5c40\u6570",children:Object(j.c)(t.\u6d41\u542c\u7387||0)}),Object(n.jsx)(S,{label:"\u526f\u9732\u7387",description:"\u526f\u9732\u5c40\u6570 / \u603b\u5c40\u6570",children:Object(j.c)(t.\u526f\u9732\u7387||0)}),Object(n.jsx)(S,{label:"\u7acb\u76f4\u7387",description:"\u7acb\u76f4\u5c40\u6570 / \u603b\u5c40\u6570",children:Object(j.c)(t.\u7acb\u76f4\u7387||0)}),Object(n.jsx)(S,{label:"\u548c\u4e86\u5de1\u6570",children:(t.\u548c\u4e86\u5de1\u6570||0).toFixed(3)}),Object(n.jsx)(S,{label:"\u5e73\u5747\u6253\u70b9",children:t.\u5e73\u5747\u6253\u70b9||0}),Object(n.jsx)(S,{label:"\u5e73\u5747\u94f3\u70b9",children:t.\u5e73\u5747\u94f3\u70b9||0})]})}function H(e){var t=new P.a(e.id);return e.score+e.delta<t.getStartingPoint()?{id:e.id,score:t.getStartingPoint(),delta:0}:e}function K(e){var t,c,a=e.stats,l=e.metadata;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(S,{label:"\u6700\u9ad8\u7b49\u7ea7",children:o.LevelWithDelta.getTag((null===(t=l.cross_stats)||void 0===t?void 0:t.max_level)||l.max_level)}),Object(n.jsx)(S,{label:"\u6700\u9ad8\u5206\u6570",className:"no-width",children:o.LevelWithDelta.formatAdjustedScore(H((null===(c=l.cross_stats)||void 0===c?void 0:c.max_level)||l.max_level))}),Object(n.jsx)(S,{label:"\u6700\u5927\u8fde\u5e84",children:a.\u6700\u5927\u8fde\u5e84||0}),Object(n.jsx)(S,{label:"\u91cc\u5b9d\u7387",description:"\u4e2d\u91cc\u5b9d\u5c40\u6570 / \u7acb\u76f4\u548c\u4e86\u5c40\u6570",children:Object(j.c)(a.\u91cc\u5b9d\u7387||0)}),Object(n.jsx)(S,{label:"\u88ab\u70b8\u7387",description:"\u88ab\u70b8\u5e84\uff08\u6ee1\u8d2f\u6216\u4ee5\u4e0a\uff09\u6b21\u6570 / \u88ab\u81ea\u6478\u6b21\u6570",children:Object(j.c)(a.\u88ab\u70b8\u7387||0)}),Object(n.jsx)(S,{label:"\u5e73\u5747\u88ab\u70b8\u70b9\u6570",description:"\u88ab\u70b8\u5e84\uff08\u6ee1\u8d2f\u6216\u4ee5\u4e0a\uff09\u70b9\u6570 / \u6b21\u6570",children:a.\u5e73\u5747\u88ab\u70b8\u70b9\u6570||0}),Object(n.jsx)(S,{label:"\u653e\u94f3\u65f6\u7acb\u76f4\u7387",description:"\u653e\u94f3\u65f6\u7acb\u76f4\u6b21\u6570 / \u653e\u94f3\u6b21\u6570",children:Object(j.c)(a.\u653e\u94f3\u65f6\u7acb\u76f4\u7387||0)}),Object(n.jsx)(S,{label:"\u653e\u94f3\u65f6\u526f\u9732\u7387",description:"\u653e\u94f3\u65f6\u526f\u9732\u6b21\u6570 / \u653e\u94f3\u6b21\u6570",children:Object(j.c)(a.\u653e\u94f3\u65f6\u526f\u9732\u7387||0)}),Object(n.jsx)(S,{label:"\u526f\u9732\u540e\u653e\u94f3\u7387",description:"\u653e\u94f3\u65f6\u526f\u9732\u6b21\u6570 / \u526f\u9732\u6b21\u6570",className:"no-width",children:Object(j.c)(a.\u526f\u9732\u540e\u653e\u94f3\u7387||0)}),Object(n.jsx)(S,{label:"\u526f\u9732\u540e\u548c\u724c\u7387",description:"\u526f\u9732\u540e\u548c\u724c\u6b21\u6570 / \u526f\u9732\u6b21\u6570",children:Object(j.c)(a.\u526f\u9732\u540e\u548c\u724c\u7387||0)}),Object(n.jsx)(S,{label:"\u526f\u9732\u540e\u6d41\u5c40\u7387",description:"\u526f\u9732\u540e\u6d41\u5c40\u6b21\u6570 / \u526f\u9732\u6b21\u6570",children:Object(j.c)(a.\u526f\u9732\u540e\u6d41\u5c40\u7387||0)}),Object(n.jsx)(S,{label:"\u603b\u8ba1\u5c40\u6570",children:a.count})]})}function Q(e){var t=e.stats;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(S,{label:"\u7acb\u76f4\u7387",description:"\u7acb\u76f4\u5c40\u6570 / \u603b\u5c40\u6570",children:Object(j.c)(t.\u7acb\u76f4\u7387||0)}),Object(n.jsx)(S,{label:"\u7acb\u76f4\u548c\u4e86",description:"\u7acb\u76f4\u548c\u4e86\u5c40\u6570 / \u7acb\u76f4\u5c40\u6570",children:Object(j.c)(t.\u7acb\u76f4\u540e\u548c\u724c\u7387||0)}),Object(n.jsx)(S,{label:"\u7acb\u76f4\u653e\u94f3",description:"\u7acb\u76f4\u653e\u94f3\u5c40\u6570\uff08\u542b\u7acb\u76f4\u77ac\u95f4 / \u4e0d\u542b\u7acb\u76f4\u77ac\u95f4\uff09 / \u7acb\u76f4\u5c40\u6570",children:Object(n.jsxs)(n.Fragment,{children:[Object(j.c)(t.\u7acb\u76f4\u540e\u653e\u94f3\u7387||0),Object(n.jsx)("br",{}),Object(j.c)(t.\u7acb\u76f4\u540e\u975e\u77ac\u95f4\u653e\u94f3\u7387||0)]})}),Object(n.jsx)(S,{label:"\u7acb\u76f4\u6536\u652f",description:"\u7acb\u76f4\u603b\u6536\u652f\uff08\u542b\u4f9b\u6258\uff09 / \u7acb\u76f4\u5c40\u6570",children:t.\u7acb\u76f4\u6536\u652f||0}),Object(n.jsx)(S,{label:"\u7acb\u76f4\u6536\u5165",description:"\u7acb\u76f4\u548c\u4e86\u6536\u5165\uff08\u542b\u4f9b\u6258\uff09 / \u7acb\u76f4\u548c\u4e86\u5c40\u6570",children:t.\u7acb\u76f4\u6536\u5165||0}),Object(n.jsx)(S,{label:"\u7acb\u76f4\u652f\u51fa",description:"\u7acb\u76f4\u653e\u94f3\u652f\u51fa\uff08\u542b\u7acb\u76f4\u68d2\uff09 / \u7acb\u76f4\u653e\u94f3\u5c40\u6570",children:t.\u7acb\u76f4\u652f\u51fa||0}),Object(n.jsx)(S,{label:"\u5148\u5236\u7387",description:"\u5148\u5236\u7acb\u76f4\u5c40\u6570 / \u7acb\u76f4\u5c40\u6570",children:Object(j.c)(t.\u5148\u5236\u7387||0)}),Object(n.jsx)(S,{label:"\u8ffd\u7acb\u7387",description:"\u8ffd\u7acb\u5c40\u6570 / \u7acb\u76f4\u5c40\u6570",children:Object(j.c)(t.\u8ffd\u7acb\u7387||0)}),Object(n.jsx)(S,{label:"\u88ab\u8ffd\u7387",description:"\u88ab\u8ffd\u7acb\u5c40\u6570 / \u7acb\u76f4\u5c40\u6570",children:Object(j.c)(t.\u88ab\u8ffd\u7387||0)}),Object(n.jsx)(S,{label:"\u7acb\u76f4\u5de1\u76ee",children:Object(j.a)(t.\u7acb\u76f4\u5de1\u76ee||0)}),Object(n.jsx)(S,{label:"\u7acb\u76f4\u6d41\u5c40",description:"\u7acb\u76f4\u6d41\u5c40\u5c40\u6570 / \u7acb\u76f4\u5c40\u6570",children:Object(j.c)(t.\u7acb\u76f4\u540e\u6d41\u5c40\u7387||0)}),Object(n.jsx)(S,{label:"\u4e00\u53d1\u7387",description:"\u4e00\u53d1\u5c40\u6570 / \u7acb\u76f4\u548c\u4e86\u5c40\u6570",children:Object(j.c)(t.\u4e00\u53d1\u7387||0)}),Object(n.jsx)(S,{label:"\u632f\u542c\u7387",description:"\u632f\u542c\u7acb\u76f4\u5c40\u6570\uff08\u4e0d\u542b\u7acb\u76f4\u89c1\u9003\uff09 / \u7acb\u76f4\u5c40\u6570",children:Object(j.c)(t.\u632f\u542c\u7acb\u76f4\u7387||0)})]})}function z(e){var t,c,a=e.metadata;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(S,{label:"\u8bb0\u5f55\u573a\u6570",children:a.count}),Object(n.jsx)(S,{label:"\u8bb0\u5f55\u7b49\u7ea7",children:o.LevelWithDelta.getTag((null===(t=a.cross_stats)||void 0===t?void 0:t.level)||a.level)}),Object(n.jsx)(S,{label:"\u8bb0\u5f55\u5206\u6570",children:o.LevelWithDelta.formatAdjustedScore((null===(c=a.cross_stats)||void 0===c?void 0:c.level)||a.level)}),Object(n.jsx)(J,{metadata:a,view:$}),Object(n.jsx)(S,{label:"\u5e73\u5747\u987a\u4f4d",children:a.avg_rank.toFixed(3)}),Object(n.jsx)(S,{label:"\u88ab\u98de\u7387",children:Object(j.c)(a.negative_rate)}),Object(n.jsx)(D,{metadata:a})]})}function q(e){var t=e.stats;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(S,{label:"\u5f79\u6ee1",description:"\u548c\u51fa\u5f79\u6ee1\u6b21\u6570",children:t.\u5f79\u6ee1||0}),Object(n.jsx)(S,{label:"\u7d2f\u8ba1\u5f79\u6ee1",description:"\u548c\u51fa\u7d2f\u8ba1\u5f79\u6ee1\u6b21\u6570",children:t.\u7d2f\u8ba1\u5f79\u6ee1||0}),Object(n.jsx)(S,{label:"\u6700\u5927\u7d2f\u8ba1\u756a\u6570",description:"\u548c\u51fa\u7684\u6700\u5927\u756a\u6570\uff08\u4e0d\u542b\u5f79\u6ee1\u5f79\uff09",children:t.\u6700\u5927\u7d2f\u8ba1\u756a\u6570||0}),Object(n.jsx)(S,{label:"\u6d41\u6ee1",description:"\u6d41\u6ee1\u6b21\u6570",children:t.\u6d41\u6ee1||0}),Object(n.jsx)(S,{label:"\u4e24\u7acb\u76f4",description:"\u4e24\u7acb\u76f4\u6b21\u6570",children:t.W\u7acb\u76f4||0}),Object(n.jsx)(S,{label:"\u5e73\u5747\u8d77\u624b\u5411\u542c",children:Object(j.a)(t.\u5e73\u5747\u8d77\u624b\u5411\u542c)})]})}function U(e){var t=e.stats,c=e.metadata,a=Object(k.a)().t;return t.\u6700\u8fd1\u5927\u94f3?Object(n.jsxs)("div",{children:[Object(n.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",className:"d-flex justify-content-between font-weight-bold",href:o.GameRecord.getRecordLink(t.\u6700\u8fd1\u5927\u94f3.id,c.id),children:[Object(n.jsx)("span",{children:o.FanStatEntryList.formatFanSummary(t.\u6700\u8fd1\u5927\u94f3.fans)}),Object(n.jsx)("span",{children:o.GameRecord.formatFullStartTime(t.\u6700\u8fd1\u5927\u94f3.start_time)})]}),Object(n.jsx)("dl",{className:"stats-list mt-2",children:t.\u6700\u8fd1\u5927\u94f3.fans.map((function(e){return Object(n.jsx)(S,{label:e.label,children:o.FanStatEntry2.formatFan(e)},e.label)}))})]}):Object(n.jsx)("p",{className:"text-center",children:a("\u65e0\u8d85\u8fc7\u6ee1\u8d2f\u5927\u94f3")})}function V(e){var t=e.metadata,c=e.isChangingSettings,a=Object(g.i)();return Object(l.useEffect)((function(){W.then((function(e){return e.default.rebuild()}))}),[a.pathname]),Object(n.jsxs)(C.c,{children:[Object(n.jsxs)(C.d,{children:[Object(n.jsx)(C.b,{path:"",exact:!0,title:"\u57fa\u672c",children:Object(n.jsx)("dl",{className:"stats-list",children:Object(n.jsx)(z,{metadata:t})})}),Object(n.jsx)(C.b,{path:"riichi",title:"\u7acb\u76f4",children:Object(n.jsx)("dl",{className:"stats-list",children:Object(n.jsx)(J,{metadata:t,view:Q})})}),Object(n.jsx)(C.b,{path:"extended",title:"\u66f4\u591a",children:Object(n.jsx)("dl",{className:"stats-list",children:Object(n.jsx)(J,{metadata:t,view:K})})}),Object(n.jsx)(C.b,{path:"win-lose",title:"\u548c\u94f3\u5206\u5e03",children:Object(n.jsx)(J,{metadata:t,view:T})}),Object(n.jsx)(C.b,{path:"luck",title:"\u8840\u7edf",children:Object(n.jsx)("dl",{className:"stats-list",children:Object(n.jsx)(J,{metadata:t,view:q})})}),Object(n.jsx)(C.b,{path:"largest-lost",title:"\u6700\u8fd1\u5927\u94f3",children:Object(n.jsx)(J,{metadata:t,view:U})}),Object(n.jsx)(C.b,{path:"same-match",title:"\u6700\u5e38\u540c\u684c",children:c?Object(n.jsx)(n.Fragment,{}):Object(n.jsx)(G,{currentAccountId:t.id})})]}),Object(n.jsx)(C.a,{className:"mt-3",replace:!0,keepState:!0,withQueryString:!0}),Object(n.jsx)(C.e,{mutateTitle:!1})]})}function X(e){var t;return e&&e.indexOf&&0===e.indexOf("##")&&(null===(t=document.getElementById(e.slice(2)))||void 0===t?void 0:t.innerHTML)||e}function Y(){var e=Object(k.a)().t,t=Object(d.c)(),c=Object(l.useState)(t),r=Object(a.a)(c,2),s=r[0],o=r[1];Object(l.useEffect)((function(){var e;if(t!==s){t.getCount();var c=t.getMetadata();if(c)if(0!==(null===(e=s.getMetadata())||void 0===e?void 0:e.count))if(t.isItemLoaded(0)){if(c.extended_stats instanceof Promise){var a=!1;return c.extended_stats.then((function(){a||o(t)})),function(){a=!0}}o(t)}else t.getItem(0);else o(t)}}),[t,s]);var u=s.getMetadata(),h=Object(O.b)(),x=Object(a.a)(h,2),p=x[0],m=x[1],v=Object(l.useMemo)((function(){var e,c,a;return(null===(e=t.getMetadata())||void 0===e||null===(c=e.cross_stats)||void 0===c?void 0:c.played_modes)||(null===u||void 0===u||null===(a=u.cross_stats)||void 0===a?void 0:a.played_modes)||[]}),[u,t]);Object(l.useEffect)((function(){if(!("player"!==p.type||f.b.availableModes.length<2)){if(!p.selectedModes.length){var e=function(e,t,c){try{var a;return null!==(a=JSON.parse(localStorage.getItem("".concat(e).concat(f.b.canonicalDomain).concat(t))||""))&&void 0!==a?a:c}catch(n){return c}}("modePreference",p.playerId,[]);if(e&&e.length)return void m({type:"player",playerId:p.playerId,selectedModes:e})}if(v.length){var t=p.selectedModes.filter((function(e){return v.includes(e)}));t.length||t.push(f.b.modePreference.find((function(e){return v.includes(e)}))||v[0]),(t.length!==p.selectedModes.length||t.some((function(e){return!p.selectedModes.includes(e)})))&&m({type:"player",playerId:p.playerId,selectedModes:t})}}}),[v,p,m]),Object(l.useEffect)((function(){W.then((function(e){return e.default.rebuild()}))})),Object(l.useEffect)(j.g,[!!u]);var g=u&&u.nickname&&u.count,y=!(!g||t===s||u===t.getMetadata());return Object(n.jsxs)("div",{children:[y&&Object(n.jsx)(b.a,{className:"player-details-changing-spinner"}),g?Object(n.jsxs)("div",{className:y?"player-details-changing":"",children:[Object(n.jsx)(i.Helmet,{children:Object(n.jsx)("title",{children:null===u||void 0===u?void 0:u.nickname})}),Object(n.jsxs)("h2",{className:"text-center",children:[e("\u73a9\u5bb6\uff1a"),null===u||void 0===u?void 0:u.nickname]}),Object(n.jsxs)("div",{className:"row mt-4",children:[Object(n.jsxs)("div",{className:"col-md-8",children:[Object(n.jsx)("h3",{className:"text-center mb-4",children:e("\u6700\u8fd1\u8d70\u52bf")}),Object(n.jsx)(R,{dataAdapter:s,playerId:u.id,aspect:6}),Object(n.jsx)(V,{metadata:u,isChangingSettings:y})]}),Object(n.jsxs)("div",{className:"col-md-4",children:[Object(n.jsx)("h3",{className:"text-center mb-4",children:e("\u7d2f\u8ba1\u6218\u7ee9")}),Object(n.jsx)(E,{metadata:u})]})]})]}):Object(n.jsx)(b.a,{}),Object(n.jsx)(I,{showLevel:!0,availableModes:v}),Object(n.jsx)(B,{effect:"solid",multiline:!0,place:"top",getContent:X,className:"stat-tooltip"})]})}}}]);
//# sourceMappingURL=11.03383e8b.chunk.js.map