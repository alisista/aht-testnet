(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{150:function(e,t,a){"use strict";a.r(t);var n=a(223);t.default=n.a},162:function(e,t,a){var n;e.exports=(n=a(173))&&n.default||n},169:function(e,t,a){e.exports=a.p+"static/404-fcdd980d4bec9f5e4f577268926c400b.jpg"},170:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),l=a(8),s=a.n(l),i=a(157),c=a.n(i);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var m=a(162),o=a.n(m);a.d(t,"PageRenderer",function(){return o.a});var d=a(31);a.d(t,"parsePath",function(){return d.a});var u=r.a.createContext({}),p=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},171:function(e,t,a){"use strict";var n=a(172),r=a(0),l=a.n(r),s=a(8),i=a.n(s),c=a(168),m=a.n(c),o=a(170),d=function(e){var t=e.children;return l.a.createElement(o.StaticQuery,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"法定通貨に依存しない完全独自経済圏"},{name:"keywords",content:"ALIS Hacker Token, ALISハッカー部"}]},l.a.createElement("html",{lang:"en"})),t)},data:n})};d.propTypes={children:i.a.node.isRequired},t.a=d},172:function(e){e.exports={data:{site:{siteMetadata:{title:"ALIS Hacker Token - ALISハッカー部"}}}}},173:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),s=a.n(l),i=a(32),c=a(1),m=function(e){var t=e.location,a=c.a.getResourcesForPathname(t.pathname);return r.a.createElement(i.a,{location:t,pageResources:a})};m.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=m},174:function(e,t,a){"use strict";a(158),a(159),a(79),a(160);var n=a(12),r=a.n(n),l=a(0),s=a.n(l),i=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){var e=[],t=this.props.items||[{key:"twitter",href:"https://twitter.com/alishackers"},{key:"github",href:"https://github.com/alisista"},{key:"discord",href:"https://discord.gg/TyKbbrT"}],a=Array.isArray(t),n=0;for(t=a?t:t[Symbol.iterator]();;){var r;if(a){if(n>=t.length)break;r=t[n++]}else{if((n=t.next()).done)break;r=n.value}var l=r;e.push(s.a.createElement("li",{className:"list-inline-item"},s.a.createElement("a",{href:l.href,target:"_blank"},s.a.createElement("i",{className:"fab fa-"+l.key}))))}return s.a.createElement("footer",null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4"},s.a.createElement("span",{className:"copyright"},"Copyright © ALISハッカー部 2018")),s.a.createElement("div",{className:"col-md-4"},s.a.createElement("ul",{className:"list-inline social-buttons"},e)),s.a.createElement("div",{className:"col-md-4"},s.a.createElement("ul",{className:"list-inline quicklinks"})))))},t}(l.Component);t.a=i},178:function(e,t,a){"use strict";a(167),a(158),a(159),a(79),a(160);var n=a(12),r=a.n(n),l=a(0),s=a.n(l),i=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){var e,t=this;if(void 0!=this.props.user){var a=0,n=0;if(void 0!=this.props.serverInfo&&void 0!=this.props.serverInfo.amount&&void 0!=this.props.serverInfo.amount.aht){var r=this.props.serverInfo.amount.aht;a=""+r.earned;var l=r.earned+(r.tipped||0),i=r.paid+(r.tip||0);n=Math.round(1e10*(l-i))/1e10}void 0!=this.props.user&&void 0==this.props.user.linkTo?e=s.a.createElement("a",{href:"#",className:"nav-link pr-0 leading-none","data-toggle":"dropdown"},s.a.createElement("span",{className:"avatar",style:{backgroundImage:"url("+this.props.user.photoURL+")"}}),s.a.createElement("span",{className:"ml-2 d-none d-lg-block"},s.a.createElement("span",{className:"text-default"},this.props.user.displayName),s.a.createElement("small",{className:"text-muted d-block mt-1"},this.props.user.overrideText||n+" AHT 保 / "+a+" AHT 獲"))):void 0!=this.props.user&&void 0!=this.props.user.linkTo&&(e=s.a.createElement("a",{href:this.props.user.linkTo,target:"_blank",className:"nav-link pr-0 leading-none"},s.a.createElement("span",{className:"avatar",style:{backgroundImage:"url("+this.props.user.photoURL+")"}}),s.a.createElement("span",{className:"ml-2 d-none d-sm-block"},s.a.createElement("span",{className:"text-default"},this.props.user.displayName),s.a.createElement("small",{className:"text-muted d-block mt-1"},this.props.user.overrideText||a+" AHT"))))}var c,m,o=[],d=this.props.links||[],u=Array.isArray(d),p=0;for(d=u?d:d[Symbol.iterator]();;){var h;if(u){if(p>=d.length)break;h=d[p++]}else{if((p=d.next()).done)break;h=p.value}var g=h;o.push(s.a.createElement("div",{className:"nav-item d-none d-md-flex"},s.a.createElement("a",{href:g.href,className:"btn btn-sm btn-outline-primary"},g.name)))}return void 0!=this.props.user&&void 0==this.props.user.linkTo?c=s.a.createElement("div",{className:"dropdown"},e,s.a.createElement("div",{className:"dropdown-menu dropdown-menu-right dropdown-menu-arrow"},s.a.createElement("a",{className:"dropdown-item",onClick:function(){t.props.auth.logout()}},s.a.createElement("i",{className:"dropdown-icon fe fe-log-out"})," ログアウト"))):void 0!=this.props.user&&void 0!=this.props.user.linkTo&&(c=s.a.createElement("a",{href:this.props.user.linkTo},e)),!0!==this.props.noSubHeader&&(m=s.a.createElement("a",{href:"#",className:"header-toggler d-lg-none ml-3 ml-lg-0","data-toggle":"collapse","data-target":"#headerMenuCollapse"},s.a.createElement("span",{className:"header-toggler-icon"}))),s.a.createElement("div",{className:"page"},s.a.createElement("div",{className:"flax-fill"},s.a.createElement("div",{className:"header py-4"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"d-flex"},s.a.createElement("a",{className:"header-brand",href:"/"},this.props.title||"ALIS Hacker's Club"),s.a.createElement("div",{className:"d-flex order-lg-2 ml-auto"},o,c),m)))))},t}(l.Component);t.a=i},183:function(e,t,a){"use strict";var n=a(12),r=a.n(n),l=a(0),s=a.n(l),i=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement("div",{className:"page",style:{width:"100%"}},s.a.createElement("div",{className:"page-content"},s.a.createElement("div",{className:"container text-center"},s.a.createElement("div",{className:"display-1 text-muted mb-5",style:{fontSize:"50px"}},s.a.createElement("i",{className:"si si-exclamation"})," データ取得中"),s.a.createElement("h1",{className:"h2 mb-3"},"少々お待ち下さい..."),s.a.createElement("p",{className:"h4 text-muted font-weight-normal mb-7"},"法定通貨に依存しない完全独自経済圏で好きなことを追求して生きていこう！"),s.a.createElement("a",{className:"btn btn-primary",href:"/"},s.a.createElement("i",{className:"fe fe-arrow-left mr-2"}),"トップページへ戻る"))))},t}(l.Component);t.a=i},223:function(e,t,a){"use strict";a(158),a(159),a(160),a(50),a(80),a(81),a(167),a(79),a(52),a(82);var n=a(12),r=a.n(n),l=a(0),s=a.n(l),i=a(168),c=a.n(i),m=a(177),o=a.n(m),d=(a(191),a(165)),u=a.n(d),p=a(175),h=a.n(p),g=(a(176),a(171)),f=a(174),b=a(183),v=a(178),E=a(169),k=a.n(E),y=a(224),N=a.n(y);h.a.locale("ja");var x=function(e){function t(t){var a,n;a=e.call(this,t)||this;var r="l0emnezbpa4g6fi",l="alis_daily",s=t.location.href||"",i=t.location.pathname.toLowerCase().split("/")[2],c=o.a.parse(s,!0)||{query:{}},m={name:"ALIS"};"note"===i&&(void 0!=c.query.tag?(r="7zd4qmnpm1glywd",l=n=c.query.tag.toLowerCase()):(l="note_daily",r="c7njqj2tfuv99be"),m={name:"note"});var d=null;void 0!=c.query.topic&&(d=c.query.topic.toLowerCase());var u=null;void 0!=c.query.type&&(u=c.query.type.toLowerCase());var p=null;return void 0!=c.query.size&&(p=c.query.size.toLowerCase()),a.state={size:p,type:u,conf:m,map_id:r,map_name:l,latest:null,target:i,tag:n,topic:d,date:c.query.daily,existing_dates:[]},a}r()(t,e);var a=t.prototype;return a.getRanking=function(e,t){var a=this,n="https://dl.dropboxusercontent.com/s/"+e[t]+"/"+t+".json";window.$.getJSON(n,function(e){a.setState({articles:e.a})})},a.getMap=function(){var e=this,t="https://dl.dropboxusercontent.com/s/"+this.state.map_id+"/"+this.state.map_name+".json";window.$.getJSON(t,function(t){var a=e.state.date||e.state.tag;if(void 0!=e.state.topic&&"note"==e.state.target&&(a+="_"+e.state.topic),void 0==a||void 0==t[a])if("note"===e.state.target&&void 0!=e.state.tag)window.location.href="/rankings/note/?tag=alis";else{var n=u()(t).chain().keys().sortBy(function(e){return-1*e.split("_")[0].split("-").join("")}).value()[0];void 0!==n&&(window.location.href="/rankings/"+e.state.target+"/?daily="+n)}else{var r=u()(t).chain().keys().sortBy(function(e){return-1*e.split("_")[0].split("-").join("")}).value()[0];e.setState({existing_dates:u()(t).keys(),latest:r},function(){e.getRanking(t,a)})}})},a.componentDidMount=function(){this.getMap()},a.componentDidUpdate=function(){},a.makeSectionName=function(){return"note"===this.state.target&&"alis"==this.state.tag?s.a.createElement("span",null,s.a.createElement("a",{href:"https://note.mu/hashtag/alis",target:"_blank"},"#ALIS")," ",s.a.createElement("a",{href:"https://alis.to/wine/articles/3k9JOmRnPNE6",target:"_blank"},"企画")," ",s.a.createElement("a",{href:"https://alis.to/mammy/articles/a1ZpmeJ1p6gV",target:"_blank"},"賞品総額 ",s.a.createElement("b",null,"1500ALIS"))):((e={all:"総合",crypto:"クリプト"})["illustration-comic"]="マンガ・イラスト",e.gourmet="グルメ",e.gosyuin="御朱印",e.manga="マンガ",e.column="コラム",e.novel="小説",e.photo="写真",e.music="サウンド",e.business="ビジネス",e.lifestyle="ライフスタイル",e.tech="テクノロジー",e.entertainment="エンタメ",e)[this.state.topic||"all"]+"部門";var e},a.render=function(){var e=this.state.conf||{},t=(this.state.alerts,this.state.date,void 0===this.state.articles?s.a.createElement(b.a,null):this.render_rankings()),a=[{key:null,name:"総合",icon:"font"},{key:"crypto",name:"クリプト",icon:"ethereum",fa_type:"fab"},{key:"illustration-comic",name:"マンガ・イラスト",icon:"smile"},{key:"business",name:"ビジネス",icon:"user-tie"},{key:"gourmet",name:"グルメ",icon:"birthday-cake"},{key:"gosyuin",name:"御朱印",icon:"cannabis"}];"note"==this.state.target&&(a=[{key:null,name:"総合"},{key:"manga",name:"マンガ"},{key:"column",name:"コラム"},{key:"novel",name:"小説"},{key:"photo",name:"写真"},{key:"music",name:"サウンド"},{key:"business",name:"ビジネス"},{key:"lifestyle",name:"ライフスタイル"},{key:"tech",name:"テクノロジー"},{key:"entertainment",name:"エンタメ"},{key:"alis",name:"#ALIS",tag:!0}]);var n=[];if(void 0!=this.state.date||"alis"===this.state.tag)for(var r=0;r<a.length;r++){var l=a[r],i="";this.state.topic==l.key&&(i="active");var m="";null!=l.key&&(m="&topic="+l.key);var o=void 0;void 0!=l.icon&&(o=s.a.createElement("i",{className:(l.fa_type||"fa")+" fa-"+l.icon}));var d="/rankings/"+this.state.target+"/?daily="+(this.state.date||"2018-09-14")+m;!0===l.tag&&(d="/rankings/"+this.state.target+"/?tag="+l.key),n.push(s.a.createElement("li",{className:"nav-item",key:"topic-"+(l.key||"all")},s.a.createElement("a",{href:d,className:"nav-link "+i},o," ",l.name)))}var u=[],p=h()(this.state.date).add(-1,"day").format("YYYY-MM-DD"),E=h()(this.state.date).add(1,"day").format("YYYY-MM-DD");"note"===this.state.target&&void 0!=this.state.tag?u.push(s.a.createElement("div",null)):this.state.existing_dates.includes(p)?u.push(s.a.createElement("a",{className:"btn btn-primary text-light",href:"/rankings/"+this.state.target+"/?daily="+p},s.a.createElement("i",{className:"fa fa-arrow-circle-left mr-2"}),h()(this.state.date).add(-1,"day").format("M月D日"))):u.push(s.a.createElement("a",{className:"btn btn-gray",style:{cursor:"default"}},s.a.createElement("i",{className:"fa fa-arrow-circle-left mr-2"}),h()(this.state.date).add(-1,"day").format("M月D日"))),u.push(s.a.createElement("h1",{className:"d-none d-md-inline-block page-title",style:{fontSize:"18px"}},e.name,"ランキング",s.a.createElement("i",{className:"fa fa-angle-double-right ml-3 mr-3"}),this.makeSectionName())),"note"===this.state.target&&void 0!=this.state.tag?u.push(s.a.createElement("div",null)):this.state.existing_dates.includes(E)?u.push(s.a.createElement("a",{className:"btn btn-primary text-light",href:"/rankings/"+this.state.target+"/?daily="+E},h()(this.state.date).add(1,"day").format("M月D日"),s.a.createElement("i",{className:"fa fa-arrow-circle-right ml-2"}))):u.push(s.a.createElement("a",{className:"btn btn-gray",style:{cursor:"default"}},h()(this.state.date).add(1,"day").format("M月D日"),s.a.createElement("i",{className:"fa fa-arrow-circle-right ml-2"})));var y=[],N=e.name+"デイリーランキング "+h()(this.state.date).format("M月D日（ddd）")+"| ALISハッカー部",x=h()(this.state.ndate).format("YYYY年 MM月DD日 （ddd）")+"にTwitterで話題になった"+e.name+"記事のランキングです。";return void 0!=this.state.img&&(y.push({name:"twitter:card",content:"summary_large_image"}),y.push({name:"twitter:site",content:"@alishackers"}),y.push({name:"twitter:image",content:k.a}),y.push({name:"twitter:description",content:x}),y.push({name:"twitter:title",content:N})),s.a.createElement(g.a,null,s.a.createElement(c.a,{meta:y,title:N,link:[{rel:"stylesheet",type:"text/css",href:"/tabler/css/tabler.min.css"},{rel:"stylesheet",type:"text/css",href:"/tabler/css/tabler.min.css"},{rel:"stylesheet",type:"text/css",href:"/css/common.css"}]}),s.a.createElement(v.a,{links:[{name:"ホーム",href:"/home/"},{name:"トークン",href:"/token/supply/"},{name:"whoami",href:"/whoami/"},{name:"ランキング",href:"/rankings/alis/"},{name:"公式マガジン",href:"/magazines/"}]}),s.a.createElement("div",{className:"header collapse d-lg-flex p-0",id:"headerMenuCollapse"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row align-items-center"},s.a.createElement("div",{className:"col-lg order-lg-first"},s.a.createElement("ul",{className:"nav nav-tabs border-0 flex-column flex-lg-row"},n))))),s.a.createElement("div",{className:"my-3 my-md-5"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"page-header"},s.a.createElement("div",{className:"d-block d-md-none",style:{width:"100%"}},s.a.createElement("h1",{className:"page-title",style:{fontSize:"18px"}},e.name,"ランキング",s.a.createElement("i",{className:"fa fa-angle-double-right ml-3 mr-3"}),this.makeSectionName())),s.a.createElement("div",{className:"d-flex justify-content-between mt-2",style:{width:"100%"}},u)),t,s.a.createElement("div",{className:"d-flex justify-content-between mt-2 mb-6",style:{width:"100%"}},u))),s.a.createElement(f.a,null))},a.makeProfileImageURL=function(e){return"note"===this.state.target?e.p:void 0==e.p||""==e.p?"https://alis.to/d/nuxt/dist/img/icon_user_noimg.d5f3940.png":"https://alis.to/d/api/info_icon/"+e.u+"/icon/"+e.p},a.makeArticleURL=function(e){return"note"===this.state.target?"https://note.mu/"+e.u+"/n/"+e.i:"https://alis.to/"+e.u+"/articles/"+e.i},a.makeUserURL=function(e){return"note"===this.state.target?"https://note.mu/"+e.u:"https://alis.to/users/"+e.u},a.makePeriod=function(){return"note"===this.state.target&&void 0!=this.state.tag?"9/8 - 9/19 最終結果！":h()(this.state.date).format("M月D日 （ddd）")},a.render_rankings=function(){var e=this,t=this.state.articles;if(void 0!=this.state.topic&&"alis"==this.state.target){var a=null,n=0,r=0,l=t=u()(t).filter(function(t){return t.g==e.state.topic}),s=Array.isArray(l),i=0;for(l=s?l:l[Symbol.iterator]();;){var c;if(s){if(i>=l.length)break;c=l[i++]}else{if((i=l.next()).done)break;c=i.value}var m=c;null==a||a!=m.r?(r+=1+n,n=0):n+=1,a=m.r,m.r=r}}return"image"===this.state.type?this.drawImage(t):this.drawArticles(t)},a.drawPrice=function(e){var t=[],a={},n=[],r=0,l=[200,150,120,80,80],i=e,c=Array.isArray(i),m=0;for(i=c?i:i[Symbol.iterator]();;){var o;if(c){if(m>=i.length)break;o=i[m++]}else{if((m=i.next()).done)break;o=m.value}var d=o;"alis"===this.state.tag&&"note"===this.state.target&&(void 0==a[d.u]&&(a[d.u]={prizes:[],prize_total:0,length:0,points:0,name:d.n,user_id:d.u,photo:d.p,n:d.n,u:d.u,p:d.p}),a[d.u].points+=d.cp,a[d.u].length+=1,r<5&&(a[d.u].prize_total+=l[r],a[d.u].prizes.push({amount:l[r],title:"単体"+(r+1)+"位"}))),0===d.cp||d.cp>=100||d.cp>=100||d.cp;var u="dark";1==d.r?u="green":2==d.r?u="pink":3==d.r?u="orange":4==d.r?u="purple":d.r<=5&&(u="azure"),void 0!=this.state.tag&&s.a.createElement("span",{className:"d-inline-block mr-2"},s.a.createElement("i",{className:"far fa-calendar mr-1 text-muted"}),h()(d.d).format("MM/DD")),void 0!=d.m&&s.a.createElement("div",{className:"d-none d-md-inline-block",style:{width:"80px"}},s.a.createElement("span",{className:"badge badge-default bg-teal text-light"},d.m," 円")),r<5?t.push(s.a.createElement("tr",null,s.a.createElement("td",{className:"text-center w-1"},s.a.createElement("a",{href:this.makeArticleURL(d),target:"_blank",className:"avatar d-md-none d-inline-block",title:this.makeArticleURL(d),style:{backgroundImage:"url("+this.makeProfileImageURL(d)+")"}}),s.a.createElement("span",{className:"d-none d-md-inline-block text-center avatar avatar-"+u},d.r),void 0),s.a.createElement("td",{style:{paddingLeft:"20px",paddingRight:"20px"}},s.a.createElement("div",{className:"mb-1"},s.a.createElement("b",{className:"text-warning d-inline-block d-md-none mr-2"},d.r,"."),s.a.createElement("a",{href:this.makeArticleURL(d),className:"font-weight-bold",target:"_blank",style:{color:"#858dda"}},d.t))),s.a.createElement("td",{className:"d-none d-md-table-cell text-center"},s.a.createElement("a",{href:this.makeUserURL(d),target:"_blank",className:"avatar d-block",title:d.n,style:{backgroundImage:"url("+this.makeProfileImageURL(d)+")"}})),s.a.createElement("td",{className:"d-none d-md-table-cell"},s.a.createElement("div",null,s.a.createElement("a",{href:this.makeUserURL(d),target:"_blank",className:"text-dark"},d.n)),s.a.createElement("div",{className:"small text-muted"},s.a.createElement("a",{href:this.makeUserURL(d),target:"_blank",className:"text-muted"},d.u))),s.a.createElement("td",{className:"d-none d-md-table-cell"},s.a.createElement("div",null,s.a.createElement("span",{className:"stamp stamp-sm",style:{width:"100%",backgroundColor:"#41C9B3"}},d.cp))))):r<20&&n.push(s.a.createElement("a",{href:this.makeUserURL(d),target:"_blank",className:"avatar d-inline-block m-2",title:d.n,style:{border:"1px solid #ccc",backgroundImage:"url("+this.makeProfileImageURL(d)+")"}})),r++}var p=this.drawRankersImage(a),g=this.drawPrizeHolders(a),f=900,b="ポイントはツイッターの 『リンク付ツイート数 + リツイート数 + いいね数』 の合計で計算しています";return"small"===this.state.size&&(f=640,b="ツイッターの 『リンク付ツイート数 + リツイート数 + いいね数』 の合計で計算"),s.a.createElement("div",{className:"text-center pb-5"},s.a.createElement("div",{id:"ranking-image",className:"card text-left d-inline-block m-0",style:{borderRadius:0,border:"none",width:f+"px",backgroundColor:"#41C9B3",color:"white"}},s.a.createElement("div",{className:"card-header text-center mt-2",style:{display:"block"}},s.a.createElement("h1",{className:"card-title d-inline-block",style:{fontSize:"28px"}},s.a.createElement("img",{src:N.a,style:{marginRight:"15px",height:"40px",marginBottom:"4px",verticalAlign:"middle"}}),"ALIS x note 企画",s.a.createElement("i",{className:"fa fa-angle-double-right ml-3 mr-3"}),"最終結果！"),s.a.createElement("div",{className:"mt-2 mb-2",style:{color:"#333"}},b)),s.a.createElement("div",{className:"table-responsive",style:{backgroundColor:"white"}},s.a.createElement("table",{className:"table table-sm table-hover table-outline table-vcenter card-table"},s.a.createElement("thead",{style:{backgroundColor:"#05051E",textAlign:"center",borderBottom:"20px solid white"}},s.a.createElement("tr",null,s.a.createElement("th",{style:{backgroundColor:"#858dda",color:"white",fontSize:"20px"},colSpan:"1000"},"単体記事 部門 トップ５"))),s.a.createElement("tbody",null,t),s.a.createElement("thead",{style:{backgroundColor:"#05051E",textAlign:"center",borderBottom:"20px solid white",borderTop:"20px solid white"}},s.a.createElement("tr",null,s.a.createElement("th",{style:{backgroundColor:"#858dda",color:"white",fontSize:"20px"},colSpan:"1000"},"総合ポイント 部門 トップ５"))),s.a.createElement("tbody",null,p),s.a.createElement("thead",{style:{backgroundColor:"#05051E",textAlign:"center",borderBottom:"20px solid white",borderTop:"20px solid white"}},s.a.createElement("tr",null,s.a.createElement("th",{style:{backgroundColor:"#858dda",color:"white",fontSize:"20px"},colSpan:"1000"},s.a.createElement("i",{className:"fa fa-medal"})," 獲得賞品"," ",s.a.createElement("i",{className:"fa fa-angle-double-right ml-3 mr-3"})," 総額 1500 ALIS + AHT + 副賞"))),s.a.createElement("tbody",null,g))),s.a.createElement("div",{className:"card-footer text-center",style:{display:"block",borderTop:"20px solid white",backgroundColor:"#41C9B3"}},s.a.createElement("div",{style:{fontSize:"28px",color:"white"}},s.a.createElement("b",null,"9月8日 19:00　～　9月18日 24:00")),s.a.createElement("div",{style:{color:"#333"}},"ワインさん発案 / ALISグロースハッキング部主催"))))},a.drawImage=function(e){return"note"===this.state.target&&"alis"===this.state.tag?this.drawPrice(e):this.drawRankingImage(e)},a.drawRankingImage=function(e){var t=[],a={crypto:{name:"クリプト",color:"success"},gourmet:{name:"グルメ",color:"primary"},gosyuin:{name:"御朱印",color:"danger"},manga:{name:"マンガ",color:"success"},column:{name:"コラム",color:"primary"},novel:{name:"小説",color:"warning"},photo:{name:"写真",color:"info"},music:{name:"サウンド",color:"success"},business:{name:"ビジネス",color:"primary"},lifestyle:{name:"ライフスタイル",color:"info"},tech:{name:"テクノロジー",color:"danger"},entertainment:{name:"エンタメ",color:"success"}},n={},r=[],l=0,i=e,c=Array.isArray(i),m=0;for(i=c?i:i[Symbol.iterator]();;){var o;if(c){if(m>=i.length)break;o=i[m++]}else{if((m=i.next()).done)break;o=m.value}var d=o;void 0!=d.g&&void 0==a[d.g]&&(a[d.g]={name:d.g,color:"info"}),"alis"===this.state.tag&&"note"===this.state.target&&(void 0==n[d.u]&&(n[d.u]={length:0,points:0,name:d.n,user_id:d.u,photo:d.p}),n[d.u].points+=d.cp,n[d.u].length+=1);var u="blue";0===d.cp?u="gray":d.cp>=100?u="red":d.cp>=100?u="orange":d.cp>=10&&(u="green");var p="dark";1==d.r?p="green":2==d.r?p="pink":3==d.r?p="orange":4==d.r?p="purple":d.r<=5&&(p="azure");var g=void 0;void 0!=this.state.tag&&s.a.createElement("span",{className:"d-inline-block mr-2"},s.a.createElement("i",{className:"far fa-calendar mr-1 text-muted"}),h()(d.d).format("MM/DD")),void 0!=d.m&&s.a.createElement("div",{className:"d-none d-md-inline-block",style:{width:"80px"}},s.a.createElement("span",{className:"badge badge-default bg-teal text-light"},d.m," 円")),"alis"!==this.state.tag&&void 0!=d.g&&(g=s.a.createElement("div",{className:"d-none mt-2"},s.a.createElement("span",{className:"badge badge-"+a[d.g].color},a[d.g].name))),l<5?t.push(s.a.createElement("tr",null,s.a.createElement("td",{className:"text-center w-1"},s.a.createElement("a",{href:this.makeArticleURL(d),target:"_blank",className:"avatar d-md-none d-inline-block",title:this.makeArticleURL(d),style:{backgroundImage:"url("+this.makeProfileImageURL(d)+")"}}),s.a.createElement("span",{className:"d-none d-md-inline-block text-center avatar avatar-"+p},d.r),g),s.a.createElement("td",null,s.a.createElement("div",{className:"mb-1"},s.a.createElement("b",{className:"text-warning d-inline-block d-md-none mr-2"},d.r,"."),s.a.createElement("a",{href:this.makeArticleURL(d),className:"text-info font-weight-bold",target:"_blank"},d.t))),s.a.createElement("td",{className:"d-none d-md-table-cell text-center"},s.a.createElement("a",{href:this.makeUserURL(d),target:"_blank",className:"avatar d-block",title:d.n,style:{backgroundImage:"url("+this.makeProfileImageURL(d)+")"}})),s.a.createElement("td",{className:"d-none d-md-table-cell"},s.a.createElement("div",null,s.a.createElement("a",{href:this.makeUserURL(d),target:"_blank",className:"text-dark"},d.n)),s.a.createElement("div",{className:"small text-muted"},s.a.createElement("a",{href:this.makeUserURL(d),target:"_blank",className:"text-muted"},d.u))),s.a.createElement("td",{className:"d-none d-md-table-cell w-1"},s.a.createElement("div",null,s.a.createElement("span",{className:"stamp stamp-sm bg-"+u,style:{width:"60px"}},d.cp))))):l<20&&r.push(s.a.createElement("a",{href:this.makeUserURL(d),target:"_blank",className:"avatar d-inline-block m-2",title:d.n,style:{border:"1px solid #ccc",backgroundImage:"url("+this.makeProfileImageURL(d)+")"}})),l++}t.push(s.a.createElement("tr",null,s.a.createElement("td",null),s.a.createElement("td",{colSpan:"3",className:"text-center pt-3 pb-3 pl-0 pr-5"},s.a.createElement("div",{className:"d-inline-block"},r)),s.a.createElement("td",{className:"d-none d-md-table-cell w-1"},s.a.createElement("div",null,s.a.createElement("span",{className:"stamp stamp-sm bg-orange",style:{width:"60px"}},"次点")))));var f="ALIS";"note"==this.state.target&&(f="note");var b={all:"総合",crypto:"クリプト",gourmet:"グルメ",gosyuin:"御朱印",manga:"マンガ",column:"コラム",novel:"小説",photo:"写真",music:"サウンド",business:"ビジネス",lifestyle:"ライフスタイル",tech:"テクノロジー",entertainment:"エンタメ"}[this.state.topic||"all"],v={subheader:"crimson",footer_text:"#333",header:"#41C9B3"};return"note"!==this.state.target&&(v={subheader:"#f1c40f",footer_text:"#9aa0ac",header:"#333"}),s.a.createElement("div",{className:"text-center pb-5"},s.a.createElement("div",{id:"ranking-image",className:"card text-left d-inline-block m-0",style:{borderRadius:0,border:"none",width:"900px",backgroundColor:v.header,color:"white"}},s.a.createElement("div",{className:"card-header text-center mt-2",style:{display:"block",borderBottom:"15px solid white"}},s.a.createElement("h1",{className:"card-title d-inline-block",style:{fontSize:"28px"}},"デイリー",f,"ランキング",s.a.createElement("i",{className:"fa fa-angle-double-right ml-3 mr-3"}),b,"部門"),s.a.createElement("div",{className:"mt-2 mb-2",style:{color:v.subheader}},"『リンク付ツイート数 + リツイート数 + いいね数』 をポイントにしたランキングです")),s.a.createElement("div",{className:"table-responsive",style:{backgroundColor:"white"}},s.a.createElement("table",{className:"table table-sm table-hover table-outline table-vcenter card-table"},s.a.createElement("tbody",null,t))),s.a.createElement("div",{className:"card-footer text-center",style:{display:"block"}},s.a.createElement("div",{style:{fontSize:"28px",color:"white"}},s.a.createElement("b",null,h()(this.state.date).format("YYYY年 M月D日 (ddd)"))),s.a.createElement("div",{style:{color:v.footer_text}},"presented by ALISハッカー部"))))},a.drawArticles=function(e){var t,a=[],n=((t={crypto:{name:"クリプト",color:"success"},gourmet:{name:"グルメ",color:"primary"},gosyuin:{name:"御朱印",color:"danger"},manga:{name:"マンガ",color:"success"},column:{name:"コラム",color:"primary"}})["illustration-comic"]={name:"イラスト・マンガ",color:"warning"},t.novel={name:"小説",color:"warning"},t.photo={name:"写真",color:"info"},t.music={name:"サウンド",color:"success"},t.business={name:"ビジネス",color:"info"},t.lifestyle={name:"ライフスタイル",color:"primary"},t.tech={name:"テクノロジー",color:"danger"},t.entertainment={name:"エンタメ",color:"success"},t),r={},l=e,i=Array.isArray(l),c=0;for(l=i?l:l[Symbol.iterator]();;){var m;if(i){if(c>=l.length)break;m=l[c++]}else{if((c=l.next()).done)break;m=c.value}var o=m;void 0!=o.g&&void 0==n[o.g]&&(n[o.g]={name:o.g,color:"info"}),"alis"===this.state.tag&&"note"===this.state.target&&(void 0==r[o.u]&&(r[o.u]={length:0,points:0,name:o.n,user_id:o.u,photo:o.p}),r[o.u].points+=o.cp,r[o.u].length+=1);var d="blue";0===o.cp?d="gray":o.cp>=100?d="red":o.cp>=100?d="orange":o.cp>=10&&(d="green");var u="dark";1==o.r?u="green":2==o.r?u="pink":3==o.r?u="orange":o.r<=5&&(u="azure");var p=void 0,g=void 0,f=void 0,b=void 0;void 0!=this.state.tag&&(b=s.a.createElement("span",{className:"d-inline-block mr-2"},s.a.createElement("i",{className:"far fa-calendar mr-1 text-muted"}),h()(o.d).format("MM/DD"))),void 0!=o.m&&(f=s.a.createElement("div",{className:"d-none d-md-inline-block",style:{width:"80px"}},s.a.createElement("span",{className:"badge badge-default bg-teal text-light"},o.m," 円"))),"alis"!==this.state.tag&&void 0!=o.g&&(p=s.a.createElement("div",{className:"d-block d-md-none mt-2"},s.a.createElement("span",{className:"badge badge-"+n[o.g].color},n[o.g].name)),g=s.a.createElement("div",{className:"d-none d-md-inline-block",style:{width:"80px"}},s.a.createElement("span",{className:"badge badge-"+n[o.g].color},n[o.g].name))),a.push(s.a.createElement("tr",null,s.a.createElement("td",{className:"text-center w-1"},s.a.createElement("a",{href:this.makeArticleURL(o),target:"_blank",className:"avatar d-md-none d-inline-block",title:this.makeArticleURL(o),style:{backgroundImage:"url("+this.makeProfileImageURL(o)+")"}}),s.a.createElement("span",{className:"d-none d-md-inline-block text-center avatar avatar-"+u},o.r),p),s.a.createElement("td",null,s.a.createElement("div",{className:"mb-1"},s.a.createElement("b",{className:"text-warning d-inline-block d-md-none mr-2"},o.r,"."),s.a.createElement("a",{href:this.makeArticleURL(o),className:"text-info font-weight-bold",target:"_blank"},o.t)),s.a.createElement("div",{className:"small text-muted"},g,s.a.createElement("div",{className:"d-inline-block",style:{width:"200px"}},s.a.createElement("span",{className:"d-inline-block mr-2"},s.a.createElement("i",{className:"fa fa-comment mr-1 text-primary"}),o.ct),s.a.createElement("span",{className:"d-inline-block mr-2"},s.a.createElement("i",{className:"fa fa-retweet mr-1 text-success"}),o.cr),s.a.createElement("span",{className:"d-inline-block mr-2"},s.a.createElement("i",{className:"fa fa-heart mr-1 text-danger"}),o.cl),s.a.createElement("span",{className:"d-inline-block d-md-none ml-5"},s.a.createElement("i",{className:"fa fa-fire mr-1 text-warning"}),o.cp),f,b))),s.a.createElement("td",{className:"d-none d-md-table-cell text-center"},s.a.createElement("a",{href:this.makeUserURL(o),target:"_blank",className:"avatar d-block",title:o.n,style:{backgroundImage:"url("+this.makeProfileImageURL(o)+")"}})),s.a.createElement("td",{className:"d-none d-md-table-cell"},s.a.createElement("div",null,s.a.createElement("a",{href:this.makeUserURL(o),target:"_blank",className:"text-dark"},o.n)),s.a.createElement("div",{className:"small text-muted"},s.a.createElement("a",{href:this.makeUserURL(o),target:"_blank",className:"text-muted"},o.u))),s.a.createElement("td",{className:"d-none d-md-table-cell w-1"},s.a.createElement("div",null,s.a.createElement("span",{className:"stamp stamp-sm bg-"+d,style:{width:"60px"}},o.cp)))))}return[this.drawRankers(r),s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"table-responsive"},s.a.createElement("table",{className:"table table-hover table-outline table-vcenter card-table"},s.a.createElement("thead",null,s.a.createElement("th",{className:"text-center",style:{paddingLeft:"1.5rem"}}),s.a.createElement("th",{className:"text-danger"},this.makePeriod()," ",s.a.createElement("span",{className:"ml-2"},e.length," 記事")),s.a.createElement("th",{className:"d-none d-md-table-cell"}),s.a.createElement("th",{className:"d-none d-md-table-cell"},"ユーザー"),s.a.createElement("th",{className:"d-none d-md-table-cell text-center",style:{paddingRight:"1.5rem"}},"ポイント")),s.a.createElement("tbody",null,a))))]},a.drawRankers=function(e){var t;if("alis"===this.state.tag&&"note"===this.state.target){var a=[];for(var n in e)a.push(e[n]);var r=[],l=0,i=a=u()(a).sortBy(function(e){return-1*e.points}),c=Array.isArray(i),m=0;for(i=c?i:i[Symbol.iterator]();;){var o;if(c){if(m>=i.length)break;o=i[m++]}else{if((m=i.next()).done)break;o=m.value}var d=o;l+=1,r.push(s.a.createElement("div",{className:"col-sm-6 col-lg-3"},s.a.createElement("div",{className:"card p-3"},s.a.createElement("div",{className:"d-flex align-items-center"},s.a.createElement("a",{href:"https://note.mu/"+d.user_id,target:"_blank",className:"avatar d-block mr-3",title:d.name,style:{backgroundImage:"url("+d.photo+")"}}),s.a.createElement("div",null,s.a.createElement("h4",{className:"m-0"},s.a.createElement("span",{className:"text-muted"},"{",l,"}")," ",s.a.createElement("span",null,s.a.createElement("span",{className:"text-success"},d.points)," 点")),s.a.createElement("small",{className:"text-muted"},d.name))))))}t=s.a.createElement("div",{className:"row"},r)}return t},a.drawRankersImage=function(e){var t;if("alis"===this.state.tag&&"note"===this.state.target){var a=[];for(var n in e)a.push(e[n]);var r=[],l=0,i=[200,150,120,80,80],c=a=u()(a).sortBy(function(e){return-1*e.points}),m=Array.isArray(c),o=0;for(c=m?c:c[Symbol.iterator]();;){var d,p;if(m){if(o>=c.length)break;p=c[o++]}else{if((o=c.next()).done)break;p=o.value}var h=p;if(!(l>=5)){l<5&&(e[h.u].prize_total+=i[l],e[h.u].prizes.push({amount:i[l],title:"総合"+(l+1)+"位"})),l+=1,0===h.points||h.points>=100||h.points>=100||h.points;var g="dark";1==l?g="green":2==l?g="pink":3==l?g="orange":4==l?g="purple":l<=5&&(g="azure");var f=250,b=s.a.createElement("span",null,s.a.createElement("b",{style:{color:"#858dda",fontSize:"20px",display:"inline-block",width:"50px",textAlign:"right",marginRight:"20px"}},Math.round(h.points/h.length))," ","平均ポイント / 記事"),v="30px",E="20px";"small"===this.state.size&&(v="5px",E="5px",f=155,b=s.a.createElement("span",null,s.a.createElement("b",{style:{color:"#858dda",fontSize:"20px",display:"inline-block",width:"50px",textAlign:"right",marginRight:"5px"}},Math.round(h.points/h.length))," ","平均 pt.")),r.push(s.a.createElement("tr",null,s.a.createElement("td",{className:"text-center w-1"},s.a.createElement("a",{href:this.makeArticleURL(h),target:"_blank",className:"avatar d-md-none d-inline-block",title:this.makeArticleURL(h),style:{backgroundImage:"url("+this.makeProfileImageURL(h)+")"}}),s.a.createElement("span",{className:"d-none d-md-inline-block text-center avatar avatar-"+g},l)),s.a.createElement("td",{style:(d={paddingLeft:"20px"},d.paddingLeft="20px",d)},s.a.createElement("div",{className:"mb-1"},s.a.createElement("a",{className:"text-muted"},s.a.createElement("span",{style:{marginRight:v,width:"100px",display:"inline-block"}},s.a.createElement("b",{style:{color:"#858dda",fontSize:"20px",display:"inline-block",width:"40px",textAlign:"right",marginRight:E}},h.length),"記事"),b))),s.a.createElement("td",{className:"d-none d-md-table-cell text-center"},s.a.createElement("a",{target:"_blank",className:"avatar d-block",title:h.n,style:{backgroundImage:"url("+this.makeProfileImageURL(h)+")"}})),s.a.createElement("td",{className:"d-none d-md-table-cell",style:{width:f+"px"}},s.a.createElement("div",null,s.a.createElement("a",{href:this.makeUserURL(h),target:"_blank",className:"text-dark"},h.n)),s.a.createElement("div",{className:"small text-muted"},s.a.createElement("a",{href:this.makeUserURL(h),target:"_blank",className:"text-muted"},h.u))),s.a.createElement("td",{className:"d-none d-md-table-cell"},s.a.createElement("div",null,s.a.createElement("span",{className:"stamp stamp-sm",style:{width:"100%",backgroundColor:"#41C9B3"}},h.points)))))}}t=r}return t},a.drawPrizeHolders=function(e){var t;if("alis"===this.state.tag&&"note"===this.state.target){var a=[];for(var n in e)0==e[n].prize_total&&(e[n].prizes.push({amount:40,title:"参加賞"}),e[n].prize_total+=40),a.push(e[n]),e[n].prizes.push({amount:e[n].points/2,title:"AHT",color:"#41c983"}),"kazalis"===n&&e[n].prizes.push({amount:"副賞",title:"ハッカー部賞",color:"tomato"});var r=[],l=0,i=a=u()(a).sortBy(function(e){return-1*(1e3*e.prize_total+e.points)}),c=Array.isArray(i),m=0;for(i=c?i:i[Symbol.iterator]();;){var o,d;if(c){if(m>=i.length)break;d=i[m++]}else{if((m=i.next()).done)break;d=m.value}var p=d;l+=1,0===p.prize_total||p.prize_total>=100||p.prize_total>=100||p.prize_total;var h="dark";1==l?h="green":2==l?h="pink":3==l?h="orange":4==l?h="purple":l<=5&&(h="azure");var g=250,f="130px";"small"===this.state.size&&(g=155,f="110px");var b=[],v=0,E=p.prizes,k=Array.isArray(E),y=0;for(E=k?E:E[Symbol.iterator]();;){var x;if(k){if(y>=E.length)break;x=E[y++]}else{if((y=E.next()).done)break;x=y.value}var w=x,L=f;3===(v+=1)&&(L=""),b.push(s.a.createElement("span",{style:{marginRight:"10px",width:L,display:"inline-block"}},s.a.createElement("b",{style:{color:w.color||"#858dda",fontSize:"20px",display:"inline-block",width:"50px",textAlign:"right",marginRight:"7px"}},w.amount),s.a.createElement("span",{style:{fontSize:"13px"}},w.title)))}r.push(s.a.createElement("tr",null,s.a.createElement("td",{className:"text-center w-1"},s.a.createElement("a",{href:this.makeArticleURL(p),target:"_blank",className:"avatar d-md-none d-inline-block",title:this.makeArticleURL(p),style:{backgroundImage:"url("+this.makeProfileImageURL(p)+")"}}),s.a.createElement("span",{className:"d-none d-md-inline-block text-center avatar avatar-"+h},l)),s.a.createElement("td",{style:(o={paddingLeft:"20px"},o.paddingLeft="20px",o)},s.a.createElement("div",{className:"mb-1"},s.a.createElement("a",{className:"text-muted"},b))),s.a.createElement("td",{className:"d-none d-md-table-cell text-center"},s.a.createElement("a",{target:"_blank",className:"avatar d-block",title:p.n,style:{backgroundImage:"url("+this.makeProfileImageURL(p)+")"}})),s.a.createElement("td",{className:"d-none d-md-table-cell",style:{width:g+"px"}},s.a.createElement("div",null,s.a.createElement("a",{href:this.makeUserURL(p),target:"_blank",className:"text-dark"},p.n)),s.a.createElement("div",{className:"small text-muted"},s.a.createElement("a",{href:this.makeUserURL(p),target:"_blank",className:"text-muted"},p.u))),s.a.createElement("td",{className:"d-none d-md-table-cell",style:{verticalAlign:"middle",whiteSpace:"nowrap",width:"100px"}},s.a.createElement("div",{style:{verticalAlign:"middle"}},s.a.createElement("img",{src:N.a,style:{height:"23px",width:"23px"},className:"d-inline-block mr-2"}),s.a.createElement("span",{style:{fontSize:"20px",verticalAlign:"middle",color:"#858dda",fontWeight:"bold",width:"60px",paddingTop:0,paddingBottom:0}},p.prize_total)))))}t=r}return t},t}(l.Component);t.a=x},224:function(e,t,a){e.exports=a.p+"static/alis-0d07d79071fb52d38eeb1af93e9d8264.ico"}}]);
//# sourceMappingURL=component---src-pages-rankings-note-js-b731575c855ec9923136.js.map