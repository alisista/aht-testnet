(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{147:function(e,t,a){"use strict";a.r(t),a(54);var r=a(12),n=a.n(r),i=a(0),c=a.n(i),s=a(165),l=a.n(s),o=a(163),m=a(169),u=a(172),d=a.n(u),h=function(e){function t(t){var a;a=e.call(this,t)||this,console.log(t);var r=t.location.href||"",n=d.a.parse(r,!0),i=null,c=!1;return"1"==n.query.noredirect&&(c=!0),void 0!=n.query.a&&void 0!=n.query.s&&void 0!=n.query.d&&void 0!=n.query.p&&(i=t.location.origin+"/home/"+t.location.search),a.state={noredirect:c,redirect:i},a}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;!0!==this.state.noredirect&&setTimeout(function(){e.redirect()},5e3)},a.render=function(){var e,t=this.state.redirect;return e=void 0===t?this.render_wrongPage():this.render_oauth(t),c.a.createElement(o.a,null,c.a.createElement(l.a,{link:[{rel:"stylesheet",type:"text/css",href:"/tabler/css/tabler.min.css"},{rel:"stylesheet",type:"text/css",href:"/css/common.css"}]}),c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"flax-fill"},c.a.createElement("div",{className:"header py-4"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"d-flex"},c.a.createElement("a",{className:"header-brand",href:"/"},"ALIS HackerToken")))))),c.a.createElement("div",{className:"my-3 my-md-5"},e),c.a.createElement(m.a,{items:[{key:"twitter",href:"https://twitter.com/alishackers"},{key:"github",href:"https://github.com/alisista"},{key:"discord",href:"https://discord.gg/TyKbbrT"}]}))},a.render_wrongPage=function(){return c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"page-content"},c.a.createElement("div",{className:"container text-center"},c.a.createElement("div",{className:"display-1 text-muted mb-5"},c.a.createElement("i",{className:"si si-exclamation"})," 404"),c.a.createElement("h1",{className:"h2 mb-3"},"お探しのページは見つかりませんでした。"),c.a.createElement("p",{className:"h4 text-muted font-weight-normal mb-7"},"法定通貨に依存しない完全独自経済圏で好きなことを追求して生きていこう！"),c.a.createElement("a",{className:"btn btn-primary",href:"/"},c.a.createElement("i",{className:"fe fe-arrow-left mr-2"}),"トップページへ戻る"))))},a.redirect=function(){window.location.href=this.state.redirect},a.render_oauth=function(e){var t=this;return c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"page-content"},c.a.createElement("div",{className:"container text-center"},c.a.createElement("div",{className:"display-1 text-muted mb-5"},c.a.createElement("i",{className:"si si-exclamation"})," 認証中"),c.a.createElement("h1",{className:"h2 mb-3"},"リダイレクト待ちです。少々お待ち下さい。"),c.a.createElement("p",{className:"h4 text-muted font-weight-normal mb-7"},"自動的にリダイレクトされない場合は、下のボタンをクリックして手動で移動して下さい。"),c.a.createElement("a",{className:"btn btn-primary",onClick:function(){t.redirect()},style:{color:"white"}},c.a.createElement("i",{className:"fe fe-arrow-left mr-2"}),"認証を続ける"))))},t}(i.Component);t.default=h},155:function(e,t,a){var r;e.exports=(r=a(166))&&r.default||r},162:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return h});var r=a(0),n=a.n(r),i=a(8),c=a.n(i),s=a(153),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var o=a(155),m=a.n(o);a.d(t,"PageRenderer",function(){return m.a});var u=a(31);a.d(t,"parsePath",function(){return u.a});var d=n.a.createContext({}),h=function(e){return n.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},163:function(e,t,a){"use strict";var r=a(164),n=a(0),i=a.n(n),c=a(8),s=a.n(c),l=a(165),o=a.n(l),m=a(162),u=function(e){var t=e.children;return i.a.createElement(m.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"法定通貨に依存しない完全独自経済圏"},{name:"keywords",content:"ALIS Hacker Token, ALISハッカー部"}]},i.a.createElement("html",{lang:"en"})),t)},data:r})};u.propTypes={children:s.a.node.isRequired},t.a=u},164:function(e){e.exports={data:{site:{siteMetadata:{title:"ALIS Hacker Token - ALISハッカー部"}}}}},166:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(8),c=a.n(i),s=a(32),l=a(1),o=function(e){var t=e.location,a=l.a.getResourcesForPathname(t.pathname);return n.a.createElement(s.a,{location:t,pageResources:a})};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},169:function(e,t,a){"use strict";a(156),a(157),a(79),a(158);var r=a(12),n=a.n(r),i=a(0),c=a.n(i),s=function(e){function t(t){return e.call(this,t)||this}return n()(t,e),t.prototype.render=function(){var e=[],t=this.props.items||[{key:"twitter",href:"https://twitter.com/alishackers"},{key:"github",href:"https://github.com/alisista"},{key:"discord",href:"https://discord.gg/TyKbbrT"}],a=Array.isArray(t),r=0;for(t=a?t:t[Symbol.iterator]();;){var n;if(a){if(r>=t.length)break;n=t[r++]}else{if((r=t.next()).done)break;n=r.value}var i=n;e.push(c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{href:i.href,target:"_blank"},c.a.createElement("i",{className:"fab fa-"+i.key}))))}return c.a.createElement("footer",null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement("span",{className:"copyright"},"Copyright © ALISハッカー部 2018")),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("ul",{className:"list-inline social-buttons"},e)),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("ul",{className:"list-inline quicklinks"})))))},t}(i.Component);t.a=s}}]);
//# sourceMappingURL=component---src-pages-oauth-js-24505817cea784c810f7.js.map