(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{262:function(e,t,a){e.exports=a(513)},271:function(e,t,a){},513:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(32),c=(a(267),a(269),a(271),a(55)),l=a(29),o=r.a.createContext({}),u=function(){return Object(n.useContext)(o)};var s=function(e){var t=e.children;return r.a.createElement(l.d,null,function(e){return r.a.createElement(o.Provider,{value:e},t)})},d=function(e){var t=e.title,a=void 0===t?void 0:t,n=e.children,i=void 0===n?void 0:n,c=e.fluid,l=void 0!==c&&c;return r.a.createElement("div",{className:"my-5 container".concat(l?"-fluid":"")},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},a&&r.a.createElement("h2",{className:"mb-4"},a),i)))},m=a(21);function f(){requestAnimationFrame(function(){return window.dispatchEvent(new UIEvent("resize"))}),setTimeout(function(){window.dispatchEvent(new UIEvent("resize"))},200)}function h(e){var t=e.className,a=void 0===t?"":t,i=e.type,c=void 0===i?"info":i,l=e.container,o=void 0===l?r.a.Fragment:l,u=e.stateName,s=void 0===u?"":u,d=e.children,h=void 0===d?void 0:d,v="alertState_".concat(s),p=Object(n.useState)(function(){return s&&!!localStorage.getItem(v)}),y=Object(m.a)(p,2),g=y[0],k=y[1];if(Object(n.useEffect)(function(){s&&g&&localStorage.setItem(v,"true")},[g,s,v]),g)return null;var b=o;return r.a.createElement(b,null,r.a.createElement("div",{className:"alert alert-".concat(c," alert-dismissible fade show ").concat(a),role:"alert"},h,r.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",onClick:function(e){e.preventDefault(),k(!0),f()}},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))}function v(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null,r.a.createElement("h1",null,r.a.createElement(c.b,{to:"/"},"\u96c0\u9b42\u724c\u8c31\u5c4b"))),r.a.createElement(h,{container:d,stateName:"topNote"},r.a.createElement("h4",null,"\u8bf4\u660e"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u672c\u9875\u9762\u7531\u7b2c\u4e09\u65b9\u7ef4\u62a4\uff0c\u4e0e\u96c0\u9b42\u5b98\u65b9\u65e0\u5173\u3002"),r.a.createElement("li",null,"\u8bb0\u5f55\u5305\u542b\u96c0\u9b42\u56fd\u670d\u56db\u4eba\u534a\u5e84\u6bb5\u4f4d\u6218\u7389\u4e4b\u95f4\u53ca\u738b\u5ea7\u4e4b\u95f4\u7684\u724c\u8c31\u3002"),r.a.createElement("li",null,"\u6b63\u5e38\u60c5\u51b5\u4e0b\u5168\u90e8\u5bf9\u5c40\u90fd\u4f1a\u88ab\u8bb0\u5f55\uff0c\u4f46\u4e0d\u6392\u9664\u56e0\u7f51\u7edc\u95ee\u9898\u9057\u6f0f\u90e8\u5206\u5bf9\u5c40\u7684\u60c5\u51b5\u3002\u53e6 2019 \u5e74 10 \u6708 10 \u65e5\u524d\u56e0\u7a0b\u5e8f Bug \u6bcf\u5929\u665a\u95f4\u53ef\u80fd\u9057\u6f0f\u6389 10% ~ 20% \u7684\u5bf9\u5c40\uff0c\u6b64 Bug \u76ee\u524d\u5df2\u7ecf\u4fee\u590d\u3002"),r.a.createElement("li",null,"\u9875\u9762\u4e0d\u662f\u5b9e\u65f6\u66f4\u65b0\uff0c\u5bf9\u5c40\u4e00\u822c\u4f1a\u5728\u7ed3\u675f\u540e\u4e8c\u5341\u5206\u949f\u5185\u51fa\u73b0\u3002"),r.a.createElement("li",null,"\u5982\u6709\u95ee\u9898\u6216\u5efa\u8bae\uff0c\u8bf7\u6233 ",r.a.createElement("a",{href:"mailto:i@sapika.ch"},"SAPikachu (i@sapika.ch)")," \u6216"," ",r.a.createElement("a",{href:"https://github.com/SAPikachu/amae-koromo/"},"\u63d0\u4ea4 Issue"),"\u3002"))),r.a.createElement(h,{container:d,stateName:"changeLog20191025"},r.a.createElement("h4",null,"\u6700\u8fd1\u66f4\u65b0\uff082019-10-25\uff09"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u65b0\u589e\u73a9\u5bb6\u4fe1\u606f\u9875\u9762"))))}var p,y=a(24),g=a(57),k=a(13),b=a.n(k);!function(e){e[e["\u738b\u5ea7"]=16]="\u738b\u5ea7",e[e["\u7389"]=12]="\u7389"}(p||(p={}));var _=p,E=Object.keys(p).filter(function(e){return"number"===typeof p[e]}).length,w=Object.freeze({toPlain:function(e){return"player"===e.type?e:Object(g.a)({},e,{date:e.date?b()(e.date).valueOf():null,selectedModes:e.selectedModes?Array.from(e.selectedModes):null})},fromPlain:function(e){return"player"===e.type?e:void 0===e.type?{date:e.date||null,searchText:e.searchText||"",selectedModes:e.selectedModes?new Set(e.selectedModes):null}:(console.warn("Unknown model data from location state:",e),j)}}),j={date:null,selectedModes:null,searchText:""},O=r.a.createContext([Object(g.a)({},j,{version:0}),function(){}]),x=function(){return Object(n.useContext)(O)};function I(e,t){if(e.type!==t.type)return!0;if(void 0===e.type&&t.type===e.type){if(void 0!==t.date&&t.date!==e.date&&(!t.date||!e.date||!b()(t.date).isSame(e.date,"day")))return!0;if(void 0!==t.searchText&&t.searchText!==e.searchText)return!0;var a=t.selectedModes;if(a&&a.size>=E&&(a=null),void 0!==a&&a!==e.selectedModes){if(!a||!e.selectedModes)return!0;if(function(e,t){if(e.size!==t.size)return!1;var a=!0,n=!1,r=void 0;try{for(var i,c=t[Symbol.iterator]();!(a=(i=c.next()).done);a=!0){var l=i.value;if(!e.has(l))return!1}}catch(o){n=!0,r=o}finally{try{a||null==c.return||c.return()}finally{if(n)throw r}}return!0}(e.selectedModes,a))return!0}}return"player"===e.type&&t.type===e.type&&void 0!==t.playerId&&t.playerId!==e.playerId}function C(e){var t=e.children,a=Object(y.h)(),i=Object(n.useReducer)(function(e,t){return I(e,t)?Object(g.a)({},e.type===t.type?e:{},function(e){return void 0===e.type&&(e.date&&(e.date=b()(e.date).valueOf()),e.selectedModes&&e.selectedModes.size>=E&&(e.selectedModes=null)),e}(t),{version:e.version+1,pendingRouteUpdate:!0}):e},null,function(){return Object(g.a)({},j,w.fromPlain((a.state||{}).model||{}),{version:(new Date).getTime()})}),c=Object(m.a)(i,2),l=c[0],o=c[1],u=Object(n.useMemo)(function(){return[l,o]},[l,o]);return r.a.createElement(O.Provider,{value:u},t)}var M={player:function(e){return{type:"player",playerId:e.id,version:0}},listing:function(e){var t=e.date?b()(e.date,"YYYY-MM-DD"):null;if(t&&!t.isValid())return"/";var a=e.modes?new Set(e.modes.split(".").map(function(e){return e.trim()}).filter(function(e){return!!e})):null;return{date:t?t.startOf("day").valueOf():null,selectedModes:a,searchText:e.search||"",version:0}}};function P(e){var t=e.view,a=Object(y.i)(),i=x(),c=Object(m.a)(i,2),l=c[0],o=c[1],u=Object(y.h)();Object(n.useEffect)(f,[l.type]);var s=u.state;if(s&&s.model.version===l.version)return delete l.pendingRouteUpdate,r.a.createElement(r.a.Fragment,null);if(!s){var d=M[t](a);if("string"===typeof d)return r.a.createElement(y.a,{to:d});var h=Object(g.a)({},d,{version:l.version});return o(h),window.scrollTo(0,0),requestAnimationFrame(function(){return window.scrollTo(0,0)}),r.a.createElement(y.a,{to:{pathname:u.pathname,state:{model:w.toPlain(h)}}})}if(l.pendingRouteUpdate){var v=Re(l);return delete l.pendingRouteUpdate,r.a.createElement(y.a,{to:{pathname:v,state:{model:w.toPlain(l)}}})}return o(w.fromPlain(s.model)),r.a.createElement(r.a.Fragment,null)}var R=a(41),N=a(42),S=a(17),T=a.n(S),D=a(44),Y="".concat("https://d2ek5tscv4zquv.cloudfront.net/","api/"),F=[20,80,200,600,800,1e3,1200,1400,2e3,2800,3200,3600,4e3,6e3,9e3],U=["\u4e00\u4f4d","\u4e8c\u4f4d","\u4e09\u4f4d","\u56db\u4f4d"],L=["#28a745","#17a2b8","#6c757d","#dc3545"],A=Object.freeze({getRankIndexByPlayer:function(e,t){var a=("object"===typeof t?t.accountId:t).toString(),n=e.players.map(function(e,t){return{player:e,index:t}});n.sort(function(e,t){return 5-t.index+t.player.score-(5-e.index+e.player.score)});for(var r=0;r<n.length;r++)if(n[r].player.accountId.toString()===a)return r;return-1},getPlayerRankLabel:function(e,t){return U[A.getRankIndexByPlayer(e,t)]||""},getPlayerRankColor:function(e,t){return L[A.getRankIndexByPlayer(e,t)]},encodeAccountId:function(e){return 1358437+(7*e+1117113^86216345)},formatFullStartTime:function(e){return b()(1e3*e.startTime).format("YYYY/M/D HH:mm")},getRecordLink:function(e,t){var a="object"===typeof t?t.accountId:t,n=a?"_a".concat(A.encodeAccountId("number"===typeof a?a:parseInt(a))):"";return"https://www.majsoul.com/1/?paipu=".concat(e.uuid).concat(n)}}),H=function(){function e(t){Object(R.a)(this,e),this._majorRank=void 0,this._minorRank=void 0;var a=t%1e4;this._majorRank=Math.floor(a/100),this._minorRank=a%100}return Object(N.a)(e,[{key:"getTag",value:function(){var e="\u521d\u58eb\u6770\u8c6a\u5723\u9b42"[this._majorRank-1];return this._majorRank==="\u521d\u58eb\u6770\u8c6a\u5723\u9b42".length?e:e+this._minorRank}},{key:"getMaxPoint",value:function(){return F[3*(this._majorRank-1)+this._minorRank-1]}},{key:"getStartingPoint",value:function(){return 1===this._majorRank?0:this.getMaxPoint()/2}},{key:"getNextLevel",value:function(){if(this._majorRank==="\u521d\u58eb\u6770\u8c6a\u5723\u9b42".length)return this;var t=this._majorRank,a=this._minorRank+1;return a>3&&(t++,a=1),new e(100*t+a)}},{key:"getPreviousLevel",value:function(){if(1===this._majorRank&&1===this._minorRank)return this;var t=this._majorRank,a=this._minorRank-1;return a<1&&(t--,a=3),new e(100*t+a)}},{key:"formatWithAdjustedScore",value:function(e){var t=this.getMaxPoint(),a=this;return t&&e>=t?(t=(a=this.getNextLevel()).getMaxPoint(),e=a.getStartingPoint()):e<0&&(!t||1===a._majorRank||2===a._majorRank&&1===a._minorRank?e=0:(t=(a=this.getPreviousLevel()).getMaxPoint(),e=a.getStartingPoint())),"".concat(a.getTag()," - ").concat(e).concat(t?"/"+t:"")}}]),e}();var z=Object.freeze({format:function(e){return new H(e.id).formatWithAdjustedScore(e.score+e.delta)}});function K(e){return q.apply(this,arguments)}function q(){return(q=Object(D.a)(T.a.mark(function e(t){var a;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(Y+t);case 2:if((a=e.sent).ok){e.next=5;break}throw a;case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}var B=function(){function e(t){Object(R.a)(this,e),this._date=void 0,this._date=b()(t).startOf("day")}return Object(N.a)(e,[{key:"getMetadata",value:function(){var e=Object(D.a)(T.a.mark(function e(){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K("count/".concat(this._date.valueOf()));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getRecords",value:function(){var e=Object(D.a)(T.a.mark(function e(t,a){var n,r=arguments;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>2&&void 0!==r[2]?r[2]:"",e.next=3,K("games/".concat(this._date.valueOf(),"?skip=").concat(t,"&limit=").concat(a,"&tag=").concat(n));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),G=function(){function e(t){Object(R.a)(this,e),this._playerId=void 0,this._playerId=t}return Object(N.a)(e,[{key:"getMetadata",value:function(){var e=Object(D.a)(T.a.mark(function e(){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K("player_stats/".concat(this._playerId));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getRecords",value:function(){var e=Object(D.a)(T.a.mark(function e(t,a){var n,r=arguments;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>2&&void 0!==r[2]?r[2]:"",e.next=3,K("player_records/".concat(this._playerId,"?skip=").concat(t,"&limit=").concat(a,"&tag=").concat(n));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),W=Object.freeze({create:function(e){return new V(new B(e))}}),J=Object.freeze({create:function(e){return new V(new G(e))}}),V=function(){function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;Object(R.a)(this,e),this._loader=void 0,this._metadata=void 0,this._countPromise=void 0,this._chunks=void 0,this._itemsPerChunk=void 0,this._filterPredicate=void 0,this._filteredIndices=void 0,this._filterResultCache=void 0,this._loader=t,this._metadata=null,this._countPromise=null,this._chunks=[],this._itemsPerChunk=a,this._filterPredicate=null,this._filteredIndices=null,this._filterResultCache={}}return Object(N.a)(e,[{key:"setFilterPredicate",value:function(e){this._filterPredicate!==e&&(this._filterPredicate=e,this._filterResultCache={},this.updateFilteredIndices())}},{key:"updateFilteredIndices",value:function(){if(this._filteredIndices=null,this._filterPredicate){var e=this.getMetadataSync();if(e){for(var t=e.count,a=0,n=0,r=[],i=0;i<t;i++){var c=this._chunks[Math.floor(i/this._itemsPerChunk)];if(!c||c instanceof Promise)r.push(i);else{n++;var l=c[i%this._itemsPerChunk],o=this._filterResultCache[l.uuid];void 0===o&&(this._filterResultCache[l.uuid]=o=this._filterPredicate(l)),o&&(r.push(i),a++)}}this._filteredIndices=r,a<10&&n>=this._itemsPerChunk&&this._triggerFullLoad()}}}},{key:"getMetadataSync",value:function(){return!this._metadata||this._metadata instanceof Promise?null:this._metadata}},{key:"getCountMaybeSync",value:function(){var e=this.getMetadataSync();return e?this._filteredIndices?this._filteredIndices.length:e.count:this.getCount()}},{key:"getCount",value:function(){var e=Object(D.a)(T.a.mark(function e(){var t=this;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.getMetadataSync()){e.next=3;break}return e.abrupt("return",this.getCountMaybeSync());case 3:if(!this._countPromise){e.next=5;break}return e.abrupt("return",this._countPromise);case 5:return this._metadata||(this._metadata=this._loader.getMetadata().then(function(e){return t._metadata=e,t.updateFilteredIndices(),t._countPromise=null,e})),this._countPromise=Promise.resolve(this._metadata).then(function(){return t.getCountMaybeSync()}),e.abrupt("return",this._countPromise);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getUnfilteredCountSync",value:function(){var e=this.getMetadataSync();return e?e.count:null}},{key:"isItemLoaded",value:function(e){var t=this._mapItemIndex(e);if(null===t)return!1;var a=Math.floor(t/this._itemsPerChunk);return!!this._chunks[a]&&!(this._chunks[a]instanceof Promise)}},{key:"getItem",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this._mapItemIndex(e);if(null===n)return this.getCount().then(function(){return t.getItem(e)});var r=Math.floor(n/this._itemsPerChunk),i=n%this._itemsPerChunk,c=this._chunks[r];return!c||c instanceof Promise?this._getChunk(r).then(function(e){return e[i]}):(a||this._filteredIndices||this.preload(e+this._itemsPerChunk),c[i])}},{key:"preload",value:function(e){var t=this.getCountMaybeSync();t instanceof Promise||e>=t||this.getItem(e,!0)}},{key:"_mapItemIndex",value:function(e){var t=this.getCountMaybeSync();if(t instanceof Promise)return null;if(e<0)return null;var a=t-e-1;return a<0?null:this._filteredIndices?this._filteredIndices[a]:a}},{key:"_getChunk",value:function(){var e=Object(D.a)(T.a.mark(function e(t){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this._chunks[t]||(this._chunks[t]=this._loadChunk(t)),e.abrupt("return",this._chunks[t]);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"_triggerFullLoad",value:function(){var e=this.getCountMaybeSync();if("number"===typeof e)for(var t=Math.ceil(e/this._itemsPerChunk),a=0;a<t;a++)this._chunks[a]||this._getChunk(a)}},{key:"_loadChunk",value:function(){var e=Object(D.a)(T.a.mark(function e(t){var a,n,r;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCount();case 2:if(a=e.sent,n=Math.ceil(a/this._itemsPerChunk)){e.next=6;break}return e.abrupt("return",[]);case 6:if(!(t>=n)){e.next=9;break}return console.warn("Loading out-of-index chunk: ".concat(t,", number of items: ").concat(a)),e.abrupt("return",[]);case 9:return e.next=11,this._loader.getRecords(this._itemsPerChunk*t,this._itemsPerChunk,t===n-1?a.toString():"");case 11:return(r=e.sent).length<this._itemsPerChunk&&t<n-1&&console.warn("Unexpected number of items in chunk:",r.length),this._chunks[t]=r,this.updateFilteredIndices(),e.abrupt("return",r);case 16:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),Q={loading:!0},X=new(function(){function e(){Object(R.a)(this,e)}return Object(N.a)(e,[{key:"getCount",value:function(){return 0}},{key:"getUnfilteredCount",value:function(){return 0}},{key:"getMetadata",value:function(){return null}},{key:"getItem",value:function(e){return Q}},{key:"isItemLoaded",value:function(e){return!1}}]),e}()),Z=function(){},$=function(){function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Z;Object(R.a)(this,e),this._provider=void 0,this._onDataUpdate=void 0,this._triggeredRequest=void 0,this._provider=t,this._onDataUpdate=a,this._triggeredRequest=!1}return Object(N.a)(e,[{key:"_installHook",value:function(e){this._triggeredRequest||(this._triggeredRequest=!0,e.then(this._callHook.bind(this)))}},{key:"_callHook",value:function(){this._onDataUpdate()}},{key:"getCount",value:function(){var e=this._provider.getCountMaybeSync();return e instanceof Promise?(this._installHook(e),0):e}},{key:"getUnfilteredCount",value:function(){return this._provider.getUnfilteredCountSync()||0}},{key:"getMetadata",value:function(){return this._provider.getMetadataSync()}},{key:"getItem",value:function(e){return this._provider.isItemLoaded(e)?this._provider.getItem(e):(this._triggeredRequest||this._installHook(this._provider.getItem(e)),Q)}},{key:"isItemLoaded",value:function(e){return!(e<0)&&this._provider.isItemLoaded(e)}},{key:"setUpdateHook",value:function(e){this._onDataUpdate=e}},{key:"cancelUpdateHook",value:function(){this._onDataUpdate=Z}}]),e}(),ee=r.a.createContext(X),te=function(){return Object(n.useContext)(ee)};ee.Consumer;function ae(e){var t=e.children,a=x(),i=Object(m.a)(a,1)[0],c=Object(n.useState)(function(){return{}}),l=Object(m.a)(c,1)[0],o=function(e){if(void 0!==e.type)return Object(n.useMemo)(function(){return null},[null,""]);var t=(e.searchText||"").trim()||"",a=t||e.selectedModes&&e.selectedModes.size<E;return Object(n.useMemo)(function(){return a?function(a){return!(e.selectedModes&&!e.selectedModes.has(a.modeId.toString()))&&!!a.players.some(function(e){return e.nickname.toLowerCase().indexOf(t)>-1})}:null},[void 0===e.type&&e.selectedModes||null,t])}(i),u=Object(n.useMemo)(function(){var e=function(e){if(void 0===e.type)return b()(e.date||b()()).startOf("day").valueOf().toString();if("player"===e.type)return"player-".concat(e.playerId);throw new Error("Unknown model type")}(i);return l[e]||(l[e]=function(e){if(void 0===e.type)return W.create(e.date||b()().startOf("day"));if("player"===e.type)return J.create(e.playerId);throw new Error("Not implemented")}(i)),l[e]},[i,l]),s=Object(n.useState)(function(){return X}),d=Object(m.a)(s,2),f=d[0],h=d[1],v=Object(n.useCallback)(function(){u.setFilterPredicate(o);var e=new $(u);h(e)},[u,o]);return Object(n.useEffect)(v,[v]),Object(n.useEffect)(function(){var e=f;if(e instanceof $)return function(){return e.cancelUpdateHook()}},[f]),Object(n.useEffect)(function(){f instanceof $&&f.setUpdateHook(v)},[f,v]),r.a.createElement(ee.Provider,{value:f},t)}var ne=a(15),re=a(240),ie=function(e){var t=e.player,a=e.game,n=e.isActive,i=e.hideDetailLink,l=t.nickname,o=t.level,u=t.score,s=t.accountId,d=0===A.getRankIndexByPlayer(a,t);return r.a.createElement("span",{className:"player ".concat(d&&"font-weight-bold"," ").concat(n&&"active-player")},r.a.createElement("a",{href:A.getRecordLink(a,t),title:"\u67e5\u770b\u724c\u8c31",target:"_blank"},"[",new H(o).getTag(),"] ",l," ",void 0!==u&&"[".concat(u,"]"))," ",i||n?null:r.a.createElement(c.b,{title:"\u73a9\u5bb6\u8bb0\u5f55",to:Re({type:"player",playerId:s.toString(),version:0})},r.a.createElement(re.a,null)))},ce=r.a.memo(function(e){var t=e.game,a=e.activePlayerId;return r.a.createElement("div",{className:"row no-gutters"},t.players.map(function(e){return r.a.createElement("div",{key:e.accountId,className:"col-12 col-md-6 pr-1"},r.a.createElement(ie,{game:t,player:e,isActive:e.accountId.toString()===a}))}))}),le=function(e){var t,a=e.cellData;return(t=a)?b.a.unix(t).format("HH:mm"):null},oe=function(e){var t=e.rowData;return t.loading?"":A.formatFullStartTime(t)},ue=function(e){var t=e.rowData,a=e.columnData;return t&&!t.loading&&a.activePlayerId?r.a.createElement("span",{className:"font-weight-bold",style:{color:A.getPlayerRankColor(t,a.activePlayerId)}},A.getPlayerRankLabel(t,a.activePlayerId).slice(0,1)):""},se=function(e){var t=e.cellData;return _[t]};function de(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.showStartEnd,a=void 0===t||t,i=e.showFullTime,c=void 0!==i&&i,o=te(),s=x(),d=Object(m.a)(s,1)[0],h=u(),v=h.isScrolling,p=h.onChildScroll,y=h.scrollTop,g=h.height,k=h.registerChild,b=Object(n.useCallback)(function(e){var t=e.index;return o.getItem(t)},[o]),_=Object(n.useCallback)(function(e){var t=e.index;return t>=0?Object(ne.a)({loading:!o.isItemLoaded(t),even:0===(1&t)}):""},[o]),E=Object(n.useCallback)(function(){return o.getUnfilteredCount()?null:r.a.createElement("p",{className:"text-center"},"\u52a0\u8f7d\u4e2d...")},[o]),w="player"===d.type?d.playerId:void 0,j=Object(n.useCallback)(function(e){var t=e.rowData;return t&&t.players?r.a.createElement(ce,{game:t,activePlayerId:w}):null},[w]);return Object(n.useEffect)(f,[!!o.getUnfilteredCount()]),r.a.createElement("div",{ref:k},r.a.createElement(l.a,{disableHeight:!0},function(e){var t=e.width;return r.a.createElement(l.c,{autoHeight:!0,className:w?"with-active-player":"",rowCount:o.getCount(),rowGetter:b,rowHeight:window.matchMedia("(min-width: 768px)").matches?70:140,headerHeight:50,width:t,height:g,isScrolling:v,onScroll:p,scrollTop:y,rowClassName:_,noRowsRenderer:E},r.a.createElement(l.b,{dataKey:"modeId",label:"\u7b49\u7ea7",cellRenderer:se,width:40}),w?r.a.createElement(l.b,{dataKey:"modeId",label:"\u987a\u4f4d",columnData:{activePlayerId:w},cellRenderer:ue,width:40}):null,r.a.createElement(l.b,{dataKey:"players",label:"\u73a9\u5bb6",cellRenderer:j,width:120,flexGrow:1}),a?[r.a.createElement(l.b,{key:"startTime",dataKey:"startTime",label:"\u5f00\u59cb",cellRenderer:le,width:50,className:"text-right",headerClassName:"text-right"}),r.a.createElement(l.b,{key:"endTime",dataKey:"endTime",label:"\u7ed3\u675f",cellRenderer:le,width:50,headerClassName:"text-right",className:"text-right"})]:null,c?r.a.createElement(l.b,{dataKey:"startTime",label:"\u65f6\u95f4",cellRenderer:oe,width:140,className:"text-right",headerClassName:"text-right"}):null)}))}function me(e){var t=e.items,a=void 0===t?[]:t,n=e.selectedItemKeys,i=void 0===n?null:n,c=e.groupKey,l=void 0===c?"default":c,o=e.onChange,u=void 0===o?function(e){}:o,s=function(e,t){if((!t||i&&!i.has(e))&&(t||!i||i.has(e))){var n=new Set(i||a.map(function(e){return e.key}));t?n.add(e):n.delete(e),u(n)}};return r.a.createElement(r.a.Fragment,null,a.map(function(e){return r.a.createElement("div",{className:"form-check form-check-inline",key:e.key},r.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"CG_".concat(l,"_").concat(e.key),value:e.key,checked:!i||i.has(e.key),onChange:function(t){return s(e.key,t.currentTarget.checked)}}),r.a.createElement("label",{className:"form-check-label",htmlFor:"CG_".concat(l,"_").concat(e.key)},e.label))}))}function fe(e){var t=e.date,a=void 0===t?b()():t,i=e.onChange,c=void 0===i?function(e){}:i,l=e.className,o=void 0===l?"":l,u=e.min,s=void 0===u?void 0:u,d=e.max,m=void 0===d?b()():d,f=Object(n.useCallback)(function(e){return c(b()(e.currentTarget.value,"YYYY-MM-DD"))},[c]);return r.a.createElement("input",{className:o,type:"date",value:b()(a).format("YYYY-MM-DD"),min:s?b()(s).format("YYYY-MM-DD"):void 0,max:m?b()(m).format("YYYY-MM-DD"):void 0,onChange:f})}var he=function(e){var t=e.title,a=void 0===t?"":t,n=e.children,i=void 0===n?void 0:n;return r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-2 col-form-label"},a),r.a.createElement("div",{className:"col-sm-10"},i))},ve=Object.keys(_).filter(function(e){return"string"!==typeof _[e]}).map(function(e){return{key:String(_[e]),label:e}}),pe=b()().startOf("day");function ye(){var e=x(),t=Object(m.a)(e,2),a=t[0],i=t[1],c=Object(n.useCallback)(function(e){return i({searchText:e.currentTarget.value})},[i]),l=Object(n.useCallback)(function(e){return i({selectedModes:e})},[i]),o=Object(n.useCallback)(function(e){return i({date:e})},[i]);return void 0!==a.type?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(he,{title:"\u65e5\u671f"},r.a.createElement(fe,{min:"2019-08-23",date:a.date||pe,onChange:o,className:"form-control"})),r.a.createElement(he,{title:"\u67e5\u627e\u73a9\u5bb6"},r.a.createElement("input",{type:"text",className:"form-control",value:a.searchText,onChange:c})),r.a.createElement(he,null,r.a.createElement(me,{items:ve,selectedItemKeys:a.selectedModes,onChange:l})))}var ge=a(26),ke=L.map(function(e,t){return r.a.createElement(ge.a,{fill:e,fillOpacity:1,key:"cell-".concat(t)})}),be=function(e){return e.rate>0?e.label:null},_e=function(e){return e>0?"".concat((100*e).toFixed(2),"%"):""},Ee=function(e){return e.payload.payload.rate>0?r.a.createElement(ge.b,Object.assign({},e,{type:"linear",className:"recharts-pie-label-line"})):null};function we(e){var t=e.metadata,a=e.aspect,i=void 0===a?1:a,c=Object(n.useMemo)(function(){return t.rank_rates.map(function(e,t){return{label:U[t],rate:e}})},[t]),l=c.filter(function(e){return e.rate>0}).length<4?45:0;return r.a.createElement(ge.i,{width:"100%",aspect:i,height:"auto"},r.a.createElement(ge.h,null,r.a.createElement(ge.g,{isAnimationActive:!1,data:c,label:be,labelLine:Ee,nameKey:"label",dataKey:"rate",startAngle:l,endAngle:l+360},ke,r.a.createElement(ge.d,{dataKey:"rate",formatter:_e,position:"inside",fill:"#fff"}))))}var je=function(e,t){return r.a.createElement(ge.c,Object.assign({},e,{r:5,stroke:L[e.payload.rank],onClick:function(){return window.open(A.getRecordLink(e.payload.game,e.payload.playerId),"_blank")}},t?{fill:L[e.payload.rank],r:10}:{}))},Oe=function(e){return je(e,!0)},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.active,a=e.payload;if(!t||!a||!a.length)return null;var n=a[0].payload;return r.a.createElement("div",{className:"player-chart-tooltip"},r.a.createElement("h5",null,A.formatFullStartTime(n.game)," ",_[n.game.modeId]," ",U[n.rank]),n.game.players.map(function(e){return r.a.createElement("p",{key:e.accountId.toString()},r.a.createElement(ie,{player:e,game:n.game,isActive:n.playerId===e.accountId,hideDetailLink:!0}))}))};function Ie(e){var t=e.dataAdapter,a=e.playerId,i=e.aspect,c=void 0===i?2:i,l=e.numGames,o=void 0===l?20:l,u=Object(n.useMemo)(function(){var e=[],n=t.getCount();if(!n)return e;for(var r=0;r<Math.min(n,o);r++){var i=t.getItem(r);if(!("uuid"in i))break;var c=A.getRankIndexByPlayer(i,a);e.unshift({pos:3-c,rank:c,game:i,playerId:a})}return e},[t]);return r.a.createElement(ge.i,{width:"100%",aspect:c,height:"auto"},r.a.createElement(ge.f,{data:u,margin:{top:15,right:15,bottom:15,left:15}},r.a.createElement(ge.e,{isAnimationActive:!1,dataKey:"pos",type:"linear",stroke:"#b5c2ce",strokeWidth:3,dot:je,activeDot:Oe}),r.a.createElement(ge.j,{cursor:!1,content:r.a.createElement(xe,null)})))}function Ce(){var e=te(),t=e.getMetadata();return Object(n.useEffect)(f,[!!t]),t&&t.nickname?r.a.createElement("div",null,r.a.createElement("h2",{className:"text-center"},"\u73a9\u5bb6\uff1a",t.nickname),r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("h3",{className:"text-center mb-4"},"\u6700\u8fd1\u8d70\u52bf"),r.a.createElement(Ie,{dataAdapter:e,playerId:t.id,aspect:6}),r.a.createElement("h3",{className:"text-center mt-4 mb-4"},"\u76f8\u5173\u6570\u636e"),r.a.createElement("dl",{className:"row"},r.a.createElement("dt",{className:"col-4 col-md-2"},"\u8bb0\u5f55\u573a\u6570"),r.a.createElement("dd",{className:"col-8 col-md-4"},t.count),r.a.createElement("dt",{className:"col-4 col-md-2"},"\u5f53\u524d\u7b49\u7ea7"),r.a.createElement("dd",{className:"col-8 col-md-4"},z.format(t.level)),r.a.createElement("dt",{className:"col-4 col-md-2"},"\u5e73\u5747\u987a\u4f4d"),r.a.createElement("dd",{className:"col-8 col-md-4"},t.avg_rank.toFixed(3)),r.a.createElement("dt",{className:"col-4 col-md-2"},"\u88ab\u98de\u7387"),r.a.createElement("dd",{className:"col-8 col-md-4"},_e(t.negative_rate)))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h3",{className:"text-center mb-4"},"\u7d2f\u8ba1\u6218\u7ee9"),r.a.createElement(we,{metadata:t})))):null}var Me="/player/:id",Pe="/:date(\\d{4}-\\d{2}-\\d{2})/:modes([0-9.]+)?/:search?";function Re(e){return"player"===e.type?Object(y.f)(Me,{id:e.playerId}):e.selectedModes&&e.selectedModes.size||e.searchText||e.date?Object(y.f)(Pe,{date:b()(e.date||new Date).format("YYYY-MM-DD"),modes:e.selectedModes&&e.selectedModes.size?Array.from(e.selectedModes).join("."):void 0,search:e.searchText||void 0}):"/"}var Ne=function(){return r.a.createElement(C,null,r.a.createElement(ae,null,r.a.createElement(y.d,null,r.a.createElement(y.b,{exact:!0,path:Me},r.a.createElement(P,{view:"player"}),r.a.createElement(Ce,null),r.a.createElement(de,{showFullTime:!0,showStartEnd:!1})),r.a.createElement(y.b,{exact:!0,path:["/",Pe]},r.a.createElement(P,{view:"listing"}),r.a.createElement(ye,null),r.a.createElement(de,null)),r.a.createElement(y.b,null,r.a.createElement(y.a,{to:"/"})))))};var Se=function(){return r.a.createElement(c.a,null,r.a.createElement(s,null,r.a.createElement(v,null),r.a.createElement(d,null,r.a.createElement(Ne,null))))},Te=document.getElementById("root");Object(i.render)(n.createElement(Se,null),Te)}},[[262,2,1]]]);
//# sourceMappingURL=main.1fca9532.chunk.js.map