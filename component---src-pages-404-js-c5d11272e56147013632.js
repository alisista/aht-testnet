(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a.n(n),s=a(0),i=a.n(s),o=a(179),l=a(175),c=a(168),u=a(171),m=a(167),d=a.n(m),p=function(e){function t(t){return e.call(this,t)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.resizeImage(),setTimeout(function(){e.resizeImage()},100),window.$(window).ready(function(){e.resizeImage()}),window.$(window).on("resize",function(){console.log("esized"),e.resizeImage()})},a.resizeImage=function(){var e=window.$(window).height()-window.$(".header").outerHeight()-window.$("footer").outerHeight();window.$("#404").height(e),window.$("#404-wrapper").height(e)},a.render=function(){return i.a.createElement(c.a,null,i.a.createElement(o.a,null),i.a.createElement(l.a,{noSubHeader:!0,links:[{name:"トークン",href:"/home/"},{name:"ALIS",href:"/rankings/alis/"},{name:"note",href:"/rankings/note/"},{name:"企画",href:"/rankings/note/tag?alis"},{name:"whoami",href:"/whoami/"}],user:{photoURL:"https://avatars0.githubusercontent.com/u/43112647?s=96&v=4",displayName:"by マミィさん 史上初！",overrideText:i.a.createElement("span",null,i.a.createElement("span",{className:"text-danger"},"300AHT")," でお支払いのイラスト"),linkTo:"https://twitter.com/tabimama00"}}),i.a.createElement("div",{id:"404-wrapper",style:{width:"100%",overflow:"hidden"}},i.a.createElement("div",{id:"404",style:{backgroundSize:"cover",backgroundPosition:"right top",backgroundRepeat:"no-repeat",width:"100%",backgroundImage:"url("+d.a+")"}})),i.a.createElement(u.a,null))},t}(s.Component);t.default=p},159:function(e,t,a){var n;e.exports=(n=a(170))&&n.default||n},165:function(e,t,a){var n=a(26).f,r=Function.prototype,s=/^\s*function ([^ (]*)/;"name"in r||a(17)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(e){return""}}})},166:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),s=a(8),i=a.n(s),o=a(155),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(159),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var m=a(31);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},167:function(e,t,a){e.exports=a.p+"static/404-fcdd980d4bec9f5e4f577268926c400b.jpg"},168:function(e,t,a){"use strict";var n=a(169),r=a(0),s=a.n(r),i=a(8),o=a.n(i),l=a(164),c=a.n(l),u=a(166),m=function(e){var t=e.children;return s.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"法定通貨に依存しない完全独自経済圏"},{name:"keywords",content:"ALIS Hacker Token, ALISハッカー部"}]},s.a.createElement("html",{lang:"en"})),t)},data:n})};m.propTypes={children:o.a.node.isRequired},t.a=m},169:function(e){e.exports={data:{site:{siteMetadata:{title:"ALIS Hacker Token - ALISハッカー部"}}}}},170:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),i=a.n(s),o=a(32),l=a(1),c=function(e){var t=e.location,a=l.a.getResourcesForPathname(t.pathname);return r.a.createElement(o.a,{location:t,pageResources:a})};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},171:function(e,t,a){"use strict";a(156),a(157),a(79),a(158);var n=a(12),r=a.n(n),s=a(0),i=a.n(s),o=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){var e=[],t=this.props.items||[{key:"twitter",href:"https://twitter.com/alishackers"},{key:"github",href:"https://github.com/alisista"},{key:"discord",href:"https://discord.gg/TyKbbrT"}],a=Array.isArray(t),n=0;for(t=a?t:t[Symbol.iterator]();;){var r;if(a){if(n>=t.length)break;r=t[n++]}else{if((n=t.next()).done)break;r=n.value}var s=r;e.push(i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("a",{href:s.href,target:"_blank"},i.a.createElement("i",{className:"fab fa-"+s.key}))))}return i.a.createElement("footer",null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-4"},i.a.createElement("span",{className:"copyright"},"Copyright © ALISハッカー部 2018")),i.a.createElement("div",{className:"col-md-4"},i.a.createElement("ul",{className:"list-inline social-buttons"},e)),i.a.createElement("div",{className:"col-md-4"},i.a.createElement("ul",{className:"list-inline quicklinks"})))))},t}(s.Component);t.a=o},175:function(e,t,a){"use strict";a(165),a(156),a(157),a(79),a(158);var n=a(12),r=a.n(n),s=a(0),i=a.n(s),o=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){var e,t=this;if(void 0!=this.props.user){var a="0.00000000";void 0!=this.props.serverInfo&&void 0!=this.props.serverInfo.amount&&void 0!=this.props.serverInfo.amount.aht&&(a=this.props.serverInfo.amount.aht.earned+".00000000"),void 0!=this.props.user&&void 0==this.props.user.linkTo?e=i.a.createElement("a",{href:"#",className:"nav-link pr-0 leading-none","data-toggle":"dropdown"},i.a.createElement("span",{className:"avatar",style:{backgroundImage:"url("+this.props.user.photoURL+")"}}),i.a.createElement("span",{className:"ml-2 d-none d-lg-block"},i.a.createElement("span",{className:"text-default"},this.props.user.displayName),i.a.createElement("small",{className:"text-muted d-block mt-1"},this.props.user.overrideText||a+" AHT"))):void 0!=this.props.user&&void 0!=this.props.user.linkTo&&(e=i.a.createElement("a",{href:this.props.user.linkTo,target:"_blank",className:"nav-link pr-0 leading-none"},i.a.createElement("span",{className:"avatar",style:{backgroundImage:"url("+this.props.user.photoURL+")"}}),i.a.createElement("span",{className:"ml-2 d-none d-sm-block"},i.a.createElement("span",{className:"text-default"},this.props.user.displayName),i.a.createElement("small",{className:"text-muted d-block mt-1"},this.props.user.overrideText||a+" AHT"))))}var n,r,s=[],o=this.props.links||[],l=Array.isArray(o),c=0;for(o=l?o:o[Symbol.iterator]();;){var u;if(l){if(c>=o.length)break;u=o[c++]}else{if((c=o.next()).done)break;u=c.value}var m=u;s.push(i.a.createElement("div",{className:"nav-item d-none d-md-flex"},i.a.createElement("a",{href:m.href,className:"btn btn-sm btn-outline-primary"},m.name)))}return void 0!=this.props.user&&void 0==this.props.user.linkTo?n=i.a.createElement("div",{className:"dropdown"},e,i.a.createElement("div",{className:"dropdown-menu dropdown-menu-right dropdown-menu-arrow"},i.a.createElement("a",{className:"dropdown-item",onClick:function(){t.props.auth.logout()}},i.a.createElement("i",{className:"dropdown-icon fe fe-log-out"})," ログアウト"))):void 0!=this.props.user&&void 0!=this.props.user.linkTo&&(n=i.a.createElement("a",{href:this.props.user.linkTo},e)),!0!==this.props.noSubHeader&&(r=i.a.createElement("a",{href:"#",className:"header-toggler d-lg-none ml-3 ml-lg-0","data-toggle":"collapse","data-target":"#headerMenuCollapse"},i.a.createElement("span",{className:"header-toggler-icon"}))),i.a.createElement("div",{className:"page"},i.a.createElement("div",{className:"flax-fill"},i.a.createElement("div",{className:"header py-4"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"d-flex"},i.a.createElement("a",{className:"header-brand",href:"/"},this.props.title||"ALIS Hacker's Club"),i.a.createElement("div",{className:"d-flex order-lg-2 ml-auto"},s,n),r)))))},t}(s.Component);t.a=o},179:function(e,t,a){"use strict";a(156),a(157),a(79),a(158);var n=a(12),r=a.n(n),s=a(0),i=a.n(s),o=a(164),l=a.n(o),c=a(167),u=a.n(c),m=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){var e=[],t=this.props.title||"404ページ | ALISハッカー部",a=this.props.desc||"史上初！マミぃさんに300AHTお支払いで描いていただいたハッカー部のイラストです。";e.push({name:"twitter:card",content:"summary_large_image"}),e.push({name:"twitter:site",content:"@alishackers"}),e.push({name:"twitter:image",content:"https://alishackers.club"+u.a}),e.push({name:"twitter:description",content:a}),e.push({name:"twitter:title",content:t}),e.push({name:"og:title",content:t}),e.push({name:"og:image",content:"https://alishackers.club"+u.a}),e.push({name:"og:description",content:a}),e.push({name:"description",content:a}),e.push({name:"keywords",content:"ALIS, ALISハッカー部, ハッカー部, ALIS HackerToken, 独自経済圏, トークンエコノミー, 暗号通貨, cryptocurrency, ハッカー部トークン, WAVES, 仮想通貨"});var n=[];if(void 0!=this.props.links){var r=this.props.links,s=Array.isArray(r),o=0;for(r=s?r:r[Symbol.iterator]();;){var c;if(s){if(o>=r.length)break;c=r[o++]}else{if((o=r.next()).done)break;c=o.value}var m=c;n.push({rel:"stylesheet",type:"text/css",href:m})}}else n=[{rel:"stylesheet",type:"text/css",href:"/tabler/css/tabler.min.css"},{rel:"stylesheet",type:"text/css",href:"/css/common.css"}];return i.a.createElement(l.a,{title:t,link:n,meta:e})},t}(s.Component);t.a=m}}]);
//# sourceMappingURL=component---src-pages-404-js-c5d11272e56147013632.js.map