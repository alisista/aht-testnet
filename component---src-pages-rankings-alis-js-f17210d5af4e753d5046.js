(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{148:function(e,t,a){"use strict";a.r(t);var n=a(210);t.default=n.a},155:function(e,t,a){var n;e.exports=(n=a(166))&&n.default||n},162:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return h});var n=a(0),r=a.n(n),s=a(8),l=a.n(s),i=a(153),c=a.n(i);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var m=a(155),o=a.n(m);a.d(t,"PageRenderer",function(){return o.a});var d=a(31);a.d(t,"parsePath",function(){return d.a});var u=r.a.createContext({}),h=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},163:function(e,t,a){"use strict";var n=a(164),r=a(0),s=a.n(r),l=a(8),i=a.n(l),c=a(165),m=a.n(c),o=a(162),d=function(e){var t=e.children;return s.a.createElement(o.StaticQuery,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"法定通貨に依存しない完全独自経済圏"},{name:"keywords",content:"ALIS Hacker Token, ALISハッカー部"}]},s.a.createElement("html",{lang:"en"})),t)},data:n})};d.propTypes={children:i.a.node.isRequired},t.a=d},164:function(e){e.exports={data:{site:{siteMetadata:{title:"ALIS Hacker Token - ALISハッカー部"}}}}},166:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),l=a.n(s),i=a(32),c=a(1),m=function(e){var t=e.location,a=c.a.getResourcesForPathname(t.pathname);return r.a.createElement(i.a,{location:t,pageResources:a})};m.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=m},169:function(e,t,a){"use strict";a(156),a(157),a(79),a(158);var n=a(12),r=a.n(n),s=a(0),l=a.n(s),i=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){var e=[],t=this.props.items||[{key:"twitter",href:"https://twitter.com/alishackers"},{key:"github",href:"https://github.com/alisista"},{key:"discord",href:"https://discord.gg/TyKbbrT"}],a=Array.isArray(t),n=0;for(t=a?t:t[Symbol.iterator]();;){var r;if(a){if(n>=t.length)break;r=t[n++]}else{if((n=t.next()).done)break;r=n.value}var s=r;e.push(l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:s.href,target:"_blank"},l.a.createElement("i",{className:"fab fa-"+s.key}))))}return l.a.createElement("footer",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("span",{className:"copyright"},"Copyright © ALISハッカー部 2018")),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("ul",{className:"list-inline social-buttons"},e)),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("ul",{className:"list-inline quicklinks"})))))},t}(s.Component);t.a=i},175:function(e,t,a){"use strict";var n=a(12),r=a.n(n),s=a(0),l=a.n(s),i=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("div",{className:"page",style:{width:"100%"}},l.a.createElement("div",{className:"page-content"},l.a.createElement("div",{className:"container text-center"},l.a.createElement("div",{className:"display-1 text-muted mb-5",style:{fontSize:"50px"}},l.a.createElement("i",{className:"si si-exclamation"})," データ取得中"),l.a.createElement("h1",{className:"h2 mb-3"},"少々お待ち下さい..."),l.a.createElement("p",{className:"h4 text-muted font-weight-normal mb-7"},"法定通貨に依存しない完全独自経済圏で好きなことを追求して生きていこう！"),l.a.createElement("a",{className:"btn btn-primary",href:"/"},l.a.createElement("i",{className:"fe fe-arrow-left mr-2"}),"トップページへ戻る"))))},t}(s.Component);t.a=i},176:function(e,t,a){"use strict";a(170),a(156),a(157),a(79),a(158);var n=a(12),r=a.n(n),s=a(0),l=a.n(s),i=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){var e,t=this;if(void 0!=this.props.user){var a="0.00000000";void 0!=this.props.serverInfo&&void 0!=this.props.serverInfo.amount&&void 0!=this.props.serverInfo.amount.aht&&(a=this.props.serverInfo.amount.aht.earned+".00000000"),e=l.a.createElement("a",{href:"#",className:"nav-link pr-0 leading-none","data-toggle":"dropdown"},l.a.createElement("span",{className:"avatar",style:{backgroundImage:"url("+this.props.user.photoURL+")"}}),l.a.createElement("span",{className:"ml-2 d-none d-lg-block"},l.a.createElement("span",{className:"text-default"},this.props.user.displayName),l.a.createElement("small",{className:"text-muted d-block mt-1"},a," AHT")))}var n=[],r=this.props.links||[],s=Array.isArray(r),i=0;for(r=s?r:r[Symbol.iterator]();;){var c;if(s){if(i>=r.length)break;c=r[i++]}else{if((i=r.next()).done)break;c=i.value}var m=c;n.push(l.a.createElement("div",{className:"nav-item d-none d-md-flex"},l.a.createElement("a",{href:m.href,className:"btn btn-sm btn-outline-primary"},m.name)))}return l.a.createElement("div",{className:"page"},l.a.createElement("div",{className:"flax-fill"},l.a.createElement("div",{className:"header py-4"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("a",{className:"header-brand",href:"/"},this.props.title||"ALIS Hacker's Club"),l.a.createElement("div",{className:"d-flex order-lg-2 ml-auto"},n,l.a.createElement("div",{className:"dropdown"},e,l.a.createElement("div",{className:"dropdown-menu dropdown-menu-right dropdown-menu-arrow"},l.a.createElement("a",{className:"dropdown-item",onClick:function(){t.props.auth.logout()}},l.a.createElement("i",{className:"dropdown-icon fe fe-log-out"})," ログアウト")))),l.a.createElement("a",{href:"#",className:"header-toggler d-lg-none ml-3 ml-lg-0","data-toggle":"collapse","data-target":"#headerMenuCollapse"},l.a.createElement("span",{className:"header-toggler-icon"})))))))},t}(s.Component);t.a=i},210:function(e,t,a){"use strict";a(156),a(157),a(158),a(50),a(170),a(79),a(53),a(80),a(81),a(82);var n=a(12),r=a.n(n),s=a(0),l=a.n(s),i=a(165),c=a.n(i),m=a(172),o=a.n(m),d=(a(180),a(160)),u=a.n(d),h=a(167),p=a.n(h),f=(a(168),a(163)),g=a(169),v=a(175),y=a(176),E=a(211),b=a.n(E);p.a.locale("ja");var N=function(e){function t(t){var a,n;a=e.call(this,t)||this;var r="l0emnezbpa4g6fi",s="alis_daily",l=t.location.pathname.toLowerCase().split("/")[2],i=t.location.href||"",c=o.a.parse(i,!0)||{query:{}},m={name:"ALIS"};"note"===l&&(r="7zd4qmnpm1glywd",void 0!=c.query.tag&&(s=n=c.query.tag.toLowerCase()),m={name:"note"});var d=null;return void 0!=c.query.topic&&["crypto","gourmet","gosyuin"].includes(c.query.topic.toLowerCase())&&(d=c.query.topic.toLowerCase()),a.state={conf:m,map_id:r,map_name:s,target:l,tag:n,topic:d,date:c.query.daily,existing_dates:[]},a}r()(t,e);var a=t.prototype;return a.getRanking=function(e){var t=this,a=this.state.date||this.state.tag,n="https://dl.dropboxusercontent.com/s/"+e[a]+"/"+a+".json";window.$.getJSON(n,function(e){t.setState({articles:e.a})})},a.getMap=function(){var e=this,t="https://dl.dropboxusercontent.com/s/"+this.state.map_id+"/"+this.state.map_name+".json";window.$.getJSON(t,function(t){var a=e.state.date||e.state.tag;if(void 0==a||void 0==t[a])if("note"===e.state.target)window.location.href="/rankings/note/?tag=alis";else{var n=u()(t).chain().keys().sortBy(function(e){return-1*e.split("-").join("")}).value()[0];void 0!==n&&(window.location.href="/rankings/alis/?daily="+n)}else e.setState({existing_dates:u()(t).keys()},function(){e.getRanking(t)})})},a.componentDidMount=function(){this.getMap()},a.componentDidUpdate=function(){},a.makeSectionName=function(){return"note"===this.state.target?l.a.createElement("span",null,l.a.createElement("a",{href:"https://note.mu/hashtag/alis"},"#ALIS")," ",l.a.createElement("a",{href:"https://alis.to/wine/articles/3k9JOmRnPNE6",target:"_blank"},"企画")," ",l.a.createElement("a",{href:"https://alis.to/mammy/articles/a1ZpmeJ1p6gV",target:"_blank"},"賞品 ",l.a.createElement("b",null,"1000ALIS+"))):{all:"総合",crypto:"クリプト",gourmet:"グルメ",gosyuin:"御朱印"}[this.state.topic||"all"]+"部門"},a.render=function(){var e=this.state.conf||{},t=(this.state.alerts,this.state.date,void 0===this.state.articles?l.a.createElement(v.a,null):this.render_rankings()),a=[{key:null,name:"総合",icon:"font"},{key:"crypto",name:"クリプト",icon:"ethereum",fa_type:"fab"},{key:"gourmet",name:"グルメ",icon:"birthday-cake"},{key:"gosyuin",name:"御朱印",icon:"cannabis"}],n=[];if(void 0!=this.state.date)for(var r=0;r<a.length;r++){var s=a[r],i="";this.state.topic==s.key&&(i="active");var m="";void 0!=this.state.date&&null!=s.key&&(s.key,m="&topic="+s.key),n.push(l.a.createElement("li",{className:"nav-item",key:"topic-"+(s.key||"all")},l.a.createElement("a",{href:"/rankings/alis/?daily="+this.state.date+m,className:"nav-link "+i},l.a.createElement("i",{className:(s.fa_type||"fa")+" fa-"+s.icon})," ",s.name)))}var o=[],d=p()(this.state.date).add(-1,"day").format("YYYY-MM-DD"),u=p()(this.state.date).add(1,"day").format("YYYY-MM-DD");"note"===this.state.target?o.push(l.a.createElement("div",null)):this.state.existing_dates.includes(d)?o.push(l.a.createElement("a",{className:"btn btn-primary text-light",href:"/rankings/alis/?daily="+d},l.a.createElement("i",{className:"fa fa-arrow-circle-left mr-2"}),p()(this.state.date).add(-1,"day").format("M月D日"))):o.push(l.a.createElement("a",{className:"btn btn-gray",style:{cursor:"default"}},l.a.createElement("i",{className:"fa fa-arrow-circle-left mr-2"}),p()(this.state.date).add(-1,"day").format("M月D日"))),o.push(l.a.createElement("h1",{className:"d-none d-md-inline-block page-title",style:{fontSize:"18px"}},e.name,"ランキング",l.a.createElement("i",{className:"fa fa-angle-double-right ml-3 mr-3"}),this.makeSectionName())),"note"===this.state.target?o.push(l.a.createElement("div",null)):this.state.existing_dates.includes(u)?o.push(l.a.createElement("a",{className:"btn btn-primary text-light",href:"/rankings/alis/?daily="+u},p()(this.state.date).add(1,"day").format("M月D日"),l.a.createElement("i",{className:"fa fa-arrow-circle-right ml-2"}))):o.push(l.a.createElement("a",{className:"btn btn-gray",style:{cursor:"default"}},p()(this.state.date).add(1,"day").format("M月D日"),l.a.createElement("i",{className:"fa fa-arrow-circle-right ml-2"})));var h=[],E=e.name+"デイリーランキング "+p()(this.state.date).format("M月D日（ddd）")+"| ALISハッカー部",N=p()(this.state.ndate).format("YYYY年 MM月DD日 （ddd）")+"にTwitterで話題になった"+e.name+"記事のランキングです。";return void 0!=this.state.img&&(h.push({name:"twitter:card",content:"summary_large_image"}),h.push({name:"twitter:site",content:"@alishackers"}),h.push({name:"twitter:image",content:b.a}),h.push({name:"twitter:description",content:N}),h.push({name:"twitter:title",content:E})),l.a.createElement(f.a,null,l.a.createElement(c.a,{meta:h,title:E,link:[{rel:"stylesheet",type:"text/css",href:"/tabler/css/tabler.min.css"},{rel:"stylesheet",type:"text/css",href:"/tabler/css/tabler.min.css"},{rel:"stylesheet",type:"text/css",href:"/css/common.css"}]}),l.a.createElement(y.a,{links:[{name:"トークン",href:"/home/"},{name:"ALISランキング",href:"/rankings/alis/"},{name:"note企画",href:"/rankings/note/"}]}),l.a.createElement("div",{className:"header collapse d-lg-flex p-0",id:"headerMenuCollapse"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row align-items-center"},l.a.createElement("div",{className:"col-lg order-lg-first"},l.a.createElement("ul",{className:"nav nav-tabs border-0 flex-column flex-lg-row"},n))))),l.a.createElement("div",{className:"my-3 my-md-5"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"page-header"},l.a.createElement("div",{className:"d-block d-md-none",style:{width:"100%"}},l.a.createElement("h1",{className:"page-title",style:{fontSize:"18px"}},e.name,"ランキング",l.a.createElement("i",{className:"fa fa-angle-double-right ml-3 mr-3"}),this.makeSectionName())),l.a.createElement("div",{className:"d-flex justify-content-between mt-2",style:{width:"100%"}},o)),t,l.a.createElement("div",{className:"d-flex justify-content-between mt-2 mb-6",style:{width:"100%"}},o))),l.a.createElement(g.a,null))},a.makeProfileImageURL=function(e){return"note"===this.state.target?e.p:"https://alis.to/d/api/info_icon/"+e.u+"/icon/"+e.p},a.makeArticleURL=function(e){return"note"===this.state.target?"https:/note.mu/"+e.u+"/n/"+e.i:"https:/alis.to/users/"+e.u+"/articles/"+e.i},a.makeUserURL=function(e){return"note"===this.state.target?"https:/note.mu/"+e.u:"https:/alis.to/users/"+e.u},a.makePeriod=function(){return"note"===this.state.target?"9/8 19:00 - 9/18 24:00":p()(this.state.date).format("M月D日 （ddd）")},a.render_rankings=function(){var e=this,t=[],a={crypto:{name:"クリプト",color:"success"},gourmet:{name:"グルメ",color:"primary"},gosyuin:{name:"御朱印",color:"danger"}},n=this.state.articles;if(void 0!=this.state.topic){var r=null,s=0,i=0,c=n=u()(n).filter(function(t){return t.g==e.state.topic}),m=Array.isArray(c),o=0;for(c=m?c:c[Symbol.iterator]();;){var d;if(m){if(o>=c.length)break;d=c[o++]}else{if((o=c.next()).done)break;d=o.value}var h=d;null==r||r!=h.r?(i+=1+s,s=0):s+=1,r=h.r,h.r=i}}var p=n,f=Array.isArray(p),g=0;for(p=f?p:p[Symbol.iterator]();;){var v;if(f){if(g>=p.length)break;v=p[g++]}else{if((g=p.next()).done)break;v=g.value}var y=v,E="blue";0===y.cp?E="gray":y.cp>=100?E="red":y.cp>=100?E="orange":y.cp>=10&&(E="green");var b="dark";1==y.r?b="green":2==y.r?b="pink":3==y.r?b="orange":y.r<=5&&(b="azure");var N=void 0,k=void 0;"aiis"===this.state.target&&(N=l.a.createElement("div",{className:"d-block d-md-none mt-2"},l.a.createElement("span",{className:"badge badge-"+a[y.g].color},a[y.g].name)),k=l.a.createElement("div",{className:"d-none d-md-inline-block",style:{width:"60px"}},l.a.createElement("span",{className:"badge badge-"+a[y.g].color},a[y.g].name))),t.push(l.a.createElement("tr",null,l.a.createElement("td",{className:"text-center"},l.a.createElement("a",{href:this.makeArticleURL(y),target:"_blank",className:"avatar d-md-none d-inline-block",title:this.makeArticleURL(y),style:{backgroundImage:"url("+this.makeProfileImageURL(y)+")"}}),l.a.createElement("span",{className:"d-none d-md-inline-block text-center avatar avatar-"+b},y.r),N),l.a.createElement("td",null,l.a.createElement("div",{className:"mb-1"},l.a.createElement("b",{className:"text-warning d-inline-block d-md-none mr-2"},y.r,"."),l.a.createElement("a",{href:this.makeArticleURL(y),className:"text-info font-weight-bold",target:"_blank"},y.t)),l.a.createElement("div",{className:"small text-muted"},k,l.a.createElement("div",{className:"d-inline-block",style:{width:"200px"}},l.a.createElement("span",{className:"d-inline-block mr-2"},l.a.createElement("i",{className:"fa fa-comment mr-1 text-primary"}),y.ct),l.a.createElement("span",{className:"d-inline-block mr-2"},l.a.createElement("i",{className:"fa fa-retweet mr-1 text-success"}),y.cr),l.a.createElement("span",{className:"d-inline-block mr-2"},l.a.createElement("i",{className:"fa fa-heart mr-1 text-danger"}),y.cl),l.a.createElement("span",{className:"d-inline-block d-md-none ml-5"},l.a.createElement("i",{className:"fa fa-fire mr-1 text-warning"}),y.cp)))),l.a.createElement("td",{className:"d-none d-md-table-cell text-center"},l.a.createElement("a",{href:this.makeUserURL(y),target:"_blank",className:"avatar d-block",title:y.n,style:{backgroundImage:"url("+this.makeProfileImageURL(y)+")"}})),l.a.createElement("td",{className:"d-none d-md-table-cell"},l.a.createElement("div",null,l.a.createElement("a",{href:this.makeUserURL(y),target:"_blank",className:"text-dark"},y.n)),l.a.createElement("div",{className:"small text-muted"},l.a.createElement("a",{href:this.makeUserURL(y),target:"_blank",className:"text-muted"},y.u))),l.a.createElement("td",{className:"d-none d-md-table-cell"},l.a.createElement("div",null,l.a.createElement("span",{className:"stamp stamp-sm bg-"+E,style:{width:"60px"}},y.cp)))))}return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table table-hover table-outline table-vcenter card-table"},l.a.createElement("thead",null,l.a.createElement("th",{className:"text-center",style:{paddingLeft:"1.5rem"}}),l.a.createElement("th",{className:"text-danger"},this.makePeriod()," ",l.a.createElement("span",{className:"ml-2"},n.length," 記事")),l.a.createElement("th",{className:"d-none d-md-table-cell"}),l.a.createElement("th",{className:"d-none d-md-table-cell"},"ユーザー"),l.a.createElement("th",{className:"d-none d-md-table-cell text-center",style:{paddingRight:"1.5rem"}},"ポイント")),l.a.createElement("tbody",null,t))))},t}(s.Component);t.a=N},211:function(e,t,a){e.exports=a.p+"static/404-fcdd980d4bec9f5e4f577268926c400b.jpg"}}]);
//# sourceMappingURL=component---src-pages-rankings-alis-js-f17210d5af4e753d5046.js.map