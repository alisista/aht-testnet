(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{151:function(e,t,a){"use strict";a.r(t),a(33),a(158),a(159),a(160);var r=a(179),n=a.n(r),s=(a(54),a(79),a(53),a(83),a(168),a(180)),o=a.n(s),i=a(12),l=a.n(i),c=a(0),u=a.n(c),m=a(220),p=(a(170),a(193),a(163)),h=a.n(p),d=a(166),f=a.n(d),v=(a(167),a(175)),y=a(178),g=a(185),E=a(181),b=a(195),w=a(184),N=(a(173),a(215)),x=a.n(N);f.a.locale("ja");var k=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={page:1*(a.params.page||1)},a}l()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=o()(n.a.mark(function e(){var t,a,r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getJSOND("ptbzcfi75n78q4l","aht");case 2:if(t=e.sent,a=h()(h()(t.history).keys()).chain().map(function(e){return 1*e}).sortBy(function(e){return e}).value(),void 0==t.history[this.state.page]){e.next=9;break}return e.next=7,this.getJSOND(t.history[this.state.page],"history_"+this.state.page);case 7:r=e.sent,this.set(Object.assign({},r,{pages:a}));case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),a.componentDidUpdate=function(){},a.render=function(){var e,t;t="AHT TESTNET",e="testnet.";var a,r=this.state.history,n=this.state.holders;if(void 0==r)a=u.a.createElement(g.a,null);else{var s,o=[],i=this.state.pages||[],l=Array.isArray(i),c=0;for(i=l?i:i[Symbol.iterator]();;){var m;if(l){if(c>=i.length)break;m=i[c++]}else{if((c=i.next()).done)break;m=c.value}var p=m;this.state.page===p?o.push(u.a.createElement("li",{className:"page-item active",style:{cursor:"default"}},u.a.createElement("span",{className:"page-link",style:{cursor:"default"}},p))):o.push(u.a.createElement("li",{className:"page-item"},u.a.createElement("a",{className:"page-link",href:"/token/supply/?page="+p},p)))}s=u.a.createElement("div",{className:"pt-2 text-center"},u.a.createElement("div",{className:"d-inline-block"},u.a.createElement("ul",{className:"pagination"},o)));var h=[],d=r,N=Array.isArray(d),k=0;for(d=N?d:d[Symbol.iterator]();;){var L;if(N){if(k>=d.length)break;L=d[k++]}else{if((k=d.next()).done)break;L=k.value}var S,T=L,A=n[T.uid];S="mission"==T.type?{join:"ハッカー部入部"}[T.mission_id]:T.reason,h.push(u.a.createElement("tr",null,u.a.createElement("td",{className:"text-muted d-none d-md-table-cell"},f()(T.date).format("YYYY MM/DD")),u.a.createElement("td",{className:"d-table-cell d-md-none text-center"},u.a.createElement("div",null,u.a.createElement("b",{className:"text-primary"},T.amount)),u.a.createElement("div",{className:"text-muted small"},f()(T.date).format("M/D"))),u.a.createElement("td",{className:"w-1"},u.a.createElement("a",{href:"https://twitter.com/"+A.screen_name,target:"_blank"},u.a.createElement("span",{className:"avatar",style:{backgroundImage:"url("+A.photoURL.replace(/_normal/,"")+")"}}))),u.a.createElement("td",{className:"d-none d-md-table-cell"},u.a.createElement("div",null,u.a.createElement("a",{className:"text-dark",href:"https://twitter.com/"+A.screen_name,target:"_blank"},A.displayName)),u.a.createElement("div",null,u.a.createElement("a",{className:"text-muted small",href:"https://twitter.com/"+A.screen_name,target:"_blank"},"@",A.screen_name))),u.a.createElement("td",{className:"d-none d-md-table-cell text-center"},u.a.createElement("b",{className:"text-primary"},T.amount)," ",u.a.createElement("span",{className:"text-muted",style:{fontSize:"12px"}},"AHT")),u.a.createElement("td",{className:"d-none d-md-table-cell"},S),u.a.createElement("td",{className:"d-md-none d-table-cell"},u.a.createElement("div",null,S),u.a.createElement("div",null,u.a.createElement("a",{className:"text-muted small",href:"https://twitter.com/"+A.screen_name,target:"_blank"},A.displayName)))))}a=u.a.createElement("div",null,u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"table-responsive"},u.a.createElement("table",{className:"table card-table table-striped table-vcenter"},u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",{className:"text-center d-none d-md-table-cell",style:{whiteSpace:"nowrap",width:"250px"}},u.a.createElement("a",{href:"https://"+e+"wavesexplorer.com/tx/3zcL1aejLEEF87s69iXCF32nPD9For3vasA8dvcTajfX",target:"_blank"},u.a.createElement("img",{src:x.a,className:"mr-2",style:{width:"30px"}}),u.a.createElement("b",null,"ALIS HackerToken"))),u.a.createElement("td",{className:"text-center d-table-cell d-md-none",style:{}},u.a.createElement("a",{href:"https://"+e+"wavesexplorer.com/tx/3zcL1aejLEEF87s69iXCF32nPD9For3vasA8dvcTajfX",target:"_blank"},u.a.createElement("b",null,"ALIS HackerToken"))),u.a.createElement("td",{className:"w-1 text-center",style:{whiteSpace:"nowrap"}},u.a.createElement("div",null,this.state.amount),u.a.createElement("div",{className:"text-muted small"},"供給数")),u.a.createElement("td",{className:"w-1 text-center",style:{whiteSpace:"nowrap"}},u.a.createElement("div",null,"75209200"),u.a.createElement("div",{className:"text-muted small"},"総発行数")),u.a.createElement("td",{className:"w-1 text-center d-none d-md-table-cell",style:{whiteSpace:"nowrap"}},u.a.createElement("div",null,"WAVES"),u.a.createElement("div",{className:"text-muted small"},"プラットフォーム")),u.a.createElement("td",null)))))),u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"table-responsive"},u.a.createElement("table",{className:"table card-table table-striped table-vcenter"},u.a.createElement("thead",null,u.a.createElement("tr",{className:"d-none d-md-table-row"},u.a.createElement("th",null,"供給日"),u.a.createElement("th",{colSpan:"2"},"獲得者"),u.a.createElement("th",{className:"text-center",style:{whiteSpace:"nowrap"}},"供給額"),u.a.createElement("th",null,"供給事由")),u.a.createElement("tr",{className:"d-md-none d-table-row"},u.a.createElement("th",{style:{paddingLeft:"12px"}},"AHT"),u.a.createElement("th",{colSpan:"2"},"獲得者 / 事由"))),u.a.createElement("tbody",null,h)))),s)}return u.a.createElement(v.a,null,u.a.createElement(w.a,{title:"AHT供給ログ | "+t,desc:"AHTの供給履歴です"}),u.a.createElement(E.a,{links:[{name:"ホーム",href:"/home/"},{name:"whoami",href:"/whoami/"},{name:"ランキング",href:"/rankings/alis/"},{name:"企画",href:"/rankings/note/?tag=alis"},{name:"ランキング",href:"/rangings/alis/"},{name:"マガジン",href:"/magazines/"}]}),u.a.createElement(b.a,{items:[{name:"供給履歴",href:"/token/supply/",icon:"coins"},{name:"トークン獲得者",href:"/token/winners/",icon:"users"}],location:this.props.location}),u.a.createElement("div",{className:"my-3 my-md-5"},u.a.createElement("div",{className:"container"},a)),u.a.createElement(y.a,null))},t}(m.a);t.default=k},162:function(e,t,a){var r;e.exports=(r=a(177))&&r.default||r},168:function(e,t){!function(t){"use strict";var a,r=Object.prototype,n=r.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},o=s.iterator||"@@iterator",i=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag",c="object"==typeof e,u=t.regeneratorRuntime;if(u)c&&(e.exports=u);else{(u=t.regeneratorRuntime=c?e.exports:{}).wrap=b;var m="suspendedStart",p="suspendedYield",h="executing",d="completed",f={},v={};v[o]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(I([])));g&&g!==r&&n.call(g,o)&&(v=g);var E=k.prototype=N.prototype=Object.create(v);x.prototype=E.constructor=k,k.constructor=x,k[l]=x.displayName="GeneratorFunction",u.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},u.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,l in e||(e[l]="GeneratorFunction")),e.prototype=Object.create(E),e},u.awrap=function(e){return{__await:e}},L(S.prototype),S.prototype[i]=function(){return this},u.AsyncIterator=S,u.async=function(e,t,a,r){var n=new S(b(e,t,a,r));return u.isGeneratorFunction(t)?n:n.next().then(function(e){return e.done?e.value:n.next()})},L(E),E[l]="Generator",E[o]=function(){return this},E.toString=function(){return"[object Generator]"},u.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},u.values=I,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=a)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=a),!!n}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var s=r;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=e,o.arg=t,s?(this.method="next",this.next=s.finallyLoc,f):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),_(a),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;_(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:I(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=a),f}}}function b(e,t,a,r){var n=t&&t.prototype instanceof N?t:N,s=Object.create(n.prototype),o=new j(r||[]);return s._invoke=function(e,t,a){var r=m;return function(n,s){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===n)throw s;return O()}for(a.method=n,a.arg=s;;){var o=a.delegate;if(o){var i=T(o,a);if(i){if(i===f)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(r===m)throw r=d,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r=h;var l=w(e,t,a);if("normal"===l.type){if(r=a.done?d:p,l.arg===f)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(r=d,a.method="throw",a.arg=l.arg)}}}(e,a,o),s}function w(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(e){return{type:"throw",arg:e}}}function N(){}function x(){}function k(){}function L(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function S(e){var t;this._invoke=function(a,r){function s(){return new Promise(function(t,s){!function t(a,r,s,o){var i=w(e[a],e,r);if("throw"!==i.type){var l=i.arg,c=l.value;return c&&"object"==typeof c&&n.call(c,"__await")?Promise.resolve(c.__await).then(function(e){t("next",e,s,o)},function(e){t("throw",e,s,o)}):Promise.resolve(c).then(function(e){l.value=e,s(l)},o)}o(i.arg)}(a,r,t,s)})}return t=t?t.then(s,s):s()}}function T(e,t){var r=e.iterator[t.method];if(r===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=a,T(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=w(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var s=n.arg;return s?s.done?(t[e.resultName]=s.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=a),t.delegate=null,f):s:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function I(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,s=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=a,t.done=!0,t};return s.next=s}}return{next:O}}function O(){return{value:a,done:!0}}}(function(){return this}()||Function("return this")())},173:function(e,t,a){e.exports=a.p+"static/404-fcdd980d4bec9f5e4f577268926c400b.jpg"},174:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return d}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return h});var r=a(0),n=a.n(r),s=a(8),o=a.n(s),i=a(157),l=a.n(i);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var c=a(162),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var m=a(31);a.d(t,"parsePath",function(){return m.a});var p=n.a.createContext({}),h=function(e){return n.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},175:function(e,t,a){"use strict";var r=a(176),n=a(0),s=a.n(n),o=a(8),i=a.n(o),l=a(172),c=a.n(l),u=a(174),m=function(e){var t=e.children;return s.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return s.a.createElement("div",null,s.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"法定通貨に依存しない完全独自経済圏"},{name:"keywords",content:"ALIS Hacker Token, ALISハッカー部"}]},s.a.createElement("html",{lang:"en"})),t)},data:r})};m.propTypes={children:i.a.node.isRequired},t.a=m},176:function(e){e.exports={data:{site:{siteMetadata:{title:"ALIS Hacker Token - ALISハッカー部"}}}}},177:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(8),o=a.n(s),i=a(32),l=a(1),c=function(e){var t=e.location,a=l.a.getResourcesForPathname(t.pathname);return n.a.createElement(i.a,{location:t,pageResources:a})};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},178:function(e,t,a){"use strict";a(158),a(159),a(79),a(160);var r=a(12),n=a.n(r),s=a(0),o=a.n(s),i=function(e){function t(t){return e.call(this,t)||this}return n()(t,e),t.prototype.render=function(){var e=[],t=this.props.items||[{key:"twitter",href:"https://twitter.com/alishackers"},{key:"github",href:"https://github.com/alisista"},{key:"discord",href:"https://discord.gg/TyKbbrT"}],a=Array.isArray(t),r=0;for(t=a?t:t[Symbol.iterator]();;){var n;if(a){if(r>=t.length)break;n=t[r++]}else{if((r=t.next()).done)break;n=r.value}var s=n;e.push(o.a.createElement("li",{className:"list-inline-item"},o.a.createElement("a",{href:s.href,target:"_blank"},o.a.createElement("i",{className:"fab fa-"+s.key}))))}return o.a.createElement("footer",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("span",{className:"copyright"},"Copyright © ALISハッカー部 2018")),o.a.createElement("div",{className:"col-md-4"},o.a.createElement("ul",{className:"list-inline social-buttons"},e)),o.a.createElement("div",{className:"col-md-4"},o.a.createElement("ul",{className:"list-inline quicklinks"})))))},t}(s.Component);t.a=i},179:function(e,t,a){e.exports=a(187)},180:function(e,t){function a(e,t,a,r,n,s,o){try{var i=e[s](o),l=i.value}catch(e){return void a(e)}i.done?t(l):Promise.resolve(l).then(r,n)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise(function(n,s){var o=e.apply(t,r);function i(e){a(o,n,s,i,l,"next",e)}function l(e){a(o,n,s,i,l,"throw",e)}i(void 0)})}}},181:function(e,t,a){"use strict";a(169),a(158),a(159),a(79),a(160);var r=a(12),n=a.n(r),s=a(0),o=a.n(s),i=function(e){function t(t){return e.call(this,t)||this}return n()(t,e),t.prototype.render=function(){var e,t,a=this;if(t="AHT TESTNET",void 0!=this.props.user){var r=0,n=0;if(void 0!=this.props.serverInfo&&void 0!=this.props.serverInfo.amount&&void 0!=this.props.serverInfo.amount.aht){var s=this.props.serverInfo.amount.aht;r=""+s.earned;var i=s.earned+(s.tipped||0),l=s.paid+(s.tip||0);n=Math.round(1e10*(i-l))/1e10;var c=this.props.payment||[];void 0!=c[0]&&"requested"==c[0].status&&(n-=c[0].amount)}n=Math.round(1e8*n)/1e8,r=Math.round(1e8*r)/1e8,void 0!=this.props.user&&void 0==this.props.user.linkTo?e=o.a.createElement("a",{href:"#",className:"nav-link pr-0 leading-none","data-toggle":"dropdown"},o.a.createElement("span",{className:"avatar",style:{backgroundImage:"url("+this.props.user.photoURL+")"}}),o.a.createElement("span",{className:"ml-2 d-none d-lg-block"},o.a.createElement("span",{className:"text-default"},this.props.user.displayName),o.a.createElement("small",{className:"text-muted d-block mt-1"},this.props.user.overrideText||n+" AHT 保 / "+r+" AHT 獲"))):void 0!=this.props.user&&void 0!=this.props.user.linkTo&&(e=o.a.createElement("a",{href:this.props.user.linkTo,target:"_blank",className:"nav-link pr-0 leading-none"},o.a.createElement("span",{className:"avatar",style:{backgroundImage:"url("+this.props.user.photoURL+")"}}),o.a.createElement("span",{className:"ml-2 d-none d-sm-block"},o.a.createElement("span",{className:"text-default"},this.props.user.displayName),o.a.createElement("small",{className:"text-muted d-block mt-1"},this.props.user.overrideText||r+" AHT"))))}var u,m,p=[],h=this.props.links||[],d=Array.isArray(h),f=0;for(h=d?h:h[Symbol.iterator]();;){var v;if(d){if(f>=h.length)break;v=h[f++]}else{if((f=h.next()).done)break;v=f.value}var y=v;p.push(o.a.createElement("div",{className:"nav-item d-none d-md-flex"},o.a.createElement("a",{href:y.href,className:"btn btn-sm btn-outline-primary"},y.name)))}return void 0!=this.props.user&&void 0==this.props.user.linkTo?u=o.a.createElement("div",{className:"dropdown"},e,o.a.createElement("div",{className:"dropdown-menu dropdown-menu-right dropdown-menu-arrow"},o.a.createElement("a",{className:"dropdown-item",onClick:function(){a.props.auth.logout()}},o.a.createElement("i",{className:"dropdown-icon fe fe-log-out"})," ログアウト"))):void 0!=this.props.user&&void 0!=this.props.user.linkTo&&(u=o.a.createElement("a",{href:this.props.user.linkTo},e)),!0!==this.props.noSubHeader&&(m=o.a.createElement("a",{href:"#",className:"header-toggler d-lg-none ml-3 ml-lg-0","data-toggle":"collapse","data-target":"#headerMenuCollapse"},o.a.createElement("span",{className:"header-toggler-icon"}))),o.a.createElement("div",{className:"page"},o.a.createElement("div",{className:"flax-fill"},o.a.createElement("div",{className:"header py-4"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"d-flex"},o.a.createElement("a",{className:"header-brand",href:"/"},this.props.title||t),o.a.createElement("div",{className:"d-flex order-lg-2 ml-auto"},p,u),m)))))},t}(s.Component);t.a=i},184:function(e,t,a){"use strict";a(158),a(159),a(79),a(160);var r=a(12),n=a.n(r),s=a(0),o=a.n(s),i=a(172),l=a.n(i),c=a(173),u=a.n(c),m=function(e){function t(t){return e.call(this,t)||this}return n()(t,e),t.prototype.render=function(){var e,t;e="AHT TESTNET",t="testnet.";var a=[],r=this.props.title||"404ページ | "+e,n=this.props.desc||"史上初！マミぃさんに300AHTお支払いで描いていただいたハッカー部のイラストです。";a.push({name:"twitter:card",content:"summary_large_image"}),a.push({name:"twitter:site",content:"@alishackers"}),a.push({name:"twitter:image",content:"https://"+t+"alishackers.club"+u.a}),a.push({name:"twitter:description",content:n}),a.push({name:"twitter:title",content:r}),a.push({name:"og:title",content:r}),a.push({name:"og:image",content:"https://"+t+"alishackers.club"+u.a}),a.push({name:"og:description",content:n}),a.push({name:"description",content:n}),a.push({name:"keywords",content:"ALIS, ALISハッカー部, ハッカー部, ALIS HackerToken, 独自経済圏, トークンエコノミー, 暗号通貨, cryptocurrency, ハッカー部トークン, WAVES, 仮想通貨"});var s=[];if(void 0!=this.props.links){var i=this.props.links,c=Array.isArray(i),m=0;for(i=c?i:i[Symbol.iterator]();;){var p;if(c){if(m>=i.length)break;p=i[m++]}else{if((m=i.next()).done)break;p=m.value}var h=p;s.push({rel:"stylesheet",type:"text/css",href:h})}}else s=[{rel:"stylesheet",type:"text/css",href:"/tabler/css/tabler.min.css"},{rel:"stylesheet",type:"text/css",href:"/css/common.css"}];return o.a.createElement(l.a,{title:r,link:s,meta:a})},t}(s.Component);t.a=m},185:function(e,t,a){"use strict";var r=a(12),n=a.n(r),s=a(0),o=a.n(s),i=function(e){function t(t){return e.call(this,t)||this}return n()(t,e),t.prototype.render=function(){var e=o.a.createElement("p",{className:"h4 text-muted font-weight-normal mb-6"},this.props.message||"法定通貨に依存しない完全独自経済圏で好きなことを追求して生きていこう！");return this.props.no_message&&(e=null),o.a.createElement("div",{className:"page",style:{width:"100%"}},o.a.createElement("div",{className:"page-content"},o.a.createElement("div",{className:"container text-center"},o.a.createElement("div",{className:"display-1 text-muted mb-5",style:{fontSize:"40px"}},o.a.createElement("i",{className:"si si-exclamation"})," ",this.props.title||"データ取得中"),o.a.createElement("h1",{className:"h2 mb-4"},this.props.subtitle||"少々お待ち下さい..."),e,o.a.createElement("a",{className:"btn btn-primary",href:this.props.btn_link||"/"},o.a.createElement("i",{className:"fe fe-arrow-left mr-2"}),this.props.btn_text||"トップページへ戻る"))))},t}(s.Component);t.a=i},187:function(e,t,a){var r=function(){return this}()||Function("return this")(),n=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,s=n&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=a(168),n)r.regeneratorRuntime=s;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},195:function(e,t,a){"use strict";a(169),a(158),a(159),a(79),a(160);var r=a(12),n=a.n(r),s=a(0),o=a.n(s),i=function(e){function t(t){return e.call(this,t)||this}return n()(t,e),t.prototype.render=function(){var e=this,t=[],a=function(){if(n){if(s>=r.length)return"break";i=r[s++]}else{if((s=r.next()).done)return"break";i=s.value}var a=i,l=void 0;void 0!=a.icon&&(l=o.a.createElement("i",{className:"mr-2 "+(a.fa_type||"fa")+" fa-"+a.icon}));var c=void 0;if(void 0!=a.href){var u="",m=e.props.location.pathname.toLowerCase();(a.active||m===a.href)&&(u="active");var p=a.href;c=o.a.createElement("a",{href:p,className:"nav-link "+u},l,a.name)}else{var h="";a.key===e.props.component.state.tab&&(h="active"),c=o.a.createElement("a",{onClick:function(){e.props.component.setState({tab:a.key},function(){void 0!=a.func&&a.func()})},className:"nav-link "+h},l,a.name)}t.push(o.a.createElement("li",{className:"nav-item",key:"topic-"+(a.key||"all")},c))},r=this.props.items,n=Array.isArray(r),s=0;for(r=n?r:r[Symbol.iterator]();;){var i;if("break"===a())break}return o.a.createElement("div",{className:"header collapse d-lg-flex p-0",id:"headerMenuCollapse"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row align-items-center"},o.a.createElement("div",{className:"col-lg order-lg-first"},o.a.createElement("ul",{className:"nav nav-tabs border-0 flex-column flex-lg-row"},t)))))},t}(s.Component);t.a=i},215:function(e,t,a){e.exports=a.p+"static/alis_hackers-b0f73db538e1af4c194f9fc10871687e.png"},220:function(e,t,a){"use strict";var r=a(179),n=a.n(r),s=(a(36),a(168),a(180)),o=a.n(s),i=a(12),l=a.n(i),c=a(0),u=a(170),m=a.n(u),p=function(e){function t(t){var a;return(a=e.call(this,t)||this).params={},void 0!=t.location.href&&(a.params=(m.a.parse(t.location.href,!0)||{query:{}}).query),a}l()(t,e);var a=t.prototype;return a.set=function(){var e=o()(n.a.mark(function e(t){var a=this;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e){a.setState(t,e)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.getJSOND=function(){var e=o()(n.a.mark(function e(t,a){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e){window.$.getJSON("https://dl.dropboxusercontent.com/s/"+t+"/"+a+".json",function(t){e(t)})}));case 1:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),t}(c.Component);t.a=p}}]);
//# sourceMappingURL=component---src-pages-token-supply-js-36becae0a4cdb0eddff1.js.map