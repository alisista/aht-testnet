(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{149:function(e,a,t){"use strict";t.r(a);var n=t(217);a.default=n.a},160:function(e,a,t){var n;e.exports=(n=t(169))&&n.default||n},165:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return p}),t.d(a,"StaticQueryContext",function(){return u}),t.d(a,"StaticQuery",function(){return h});var n=t(0),r=t.n(n),s=t(8),l=t.n(s),i=t(154),c=t.n(i);t.d(a,"Link",function(){return c.a}),t.d(a,"withPrefix",function(){return i.withPrefix}),t.d(a,"navigate",function(){return i.navigate}),t.d(a,"push",function(){return i.push}),t.d(a,"replace",function(){return i.replace}),t.d(a,"navigateTo",function(){return i.navigateTo});var m=t(160),o=t.n(m);t.d(a,"PageRenderer",function(){return o.a});var d=t(31);t.d(a,"parsePath",function(){return d.a});var u=r.a.createContext({}),h=function(e){return r.a.createElement(u.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},167:function(e,a,t){"use strict";var n=t(168),r=t(0),s=t.n(r),l=t(8),i=t.n(l),c=t(163),m=t.n(c),o=t(165),d=function(e){var a=e.children;return s.a.createElement(o.StaticQuery,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"法定通貨に依存しない完全独自経済圏"},{name:"keywords",content:"ALIS Hacker Token, ALISハッカー部"}]},s.a.createElement("html",{lang:"en"})),a)},data:n})};d.propTypes={children:i.a.node.isRequired},a.a=d},168:function(e){e.exports={data:{site:{siteMetadata:{title:"ALIS Hacker Token - ALISハッカー部"}}}}},169:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(8),l=t.n(s),i=t(32),c=t(1),m=function(e){var a=e.location,t=c.a.getResourcesForPathname(a.pathname);return r.a.createElement(i.a,{location:a,pageResources:t})};m.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=m},170:function(e,a,t){"use strict";t(155),t(156),t(79),t(157);var n=t(12),r=t.n(n),s=t(0),l=t.n(s),i=function(e){function a(a){return e.call(this,a)||this}return r()(a,e),a.prototype.render=function(){var e=[],a=this.props.items||[{key:"twitter",href:"https://twitter.com/alishackers"},{key:"github",href:"https://github.com/alisista"},{key:"discord",href:"https://discord.gg/TyKbbrT"}],t=Array.isArray(a),n=0;for(a=t?a:a[Symbol.iterator]();;){var r;if(t){if(n>=a.length)break;r=a[n++]}else{if((n=a.next()).done)break;r=n.value}var s=r;e.push(l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:s.href,target:"_blank"},l.a.createElement("i",{className:"fab fa-"+s.key}))))}return l.a.createElement("footer",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("span",{className:"copyright"},"Copyright © ALISハッカー部 2018")),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("ul",{className:"list-inline social-buttons"},e)),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("ul",{className:"list-inline quicklinks"})))))},a}(s.Component);a.a=i},173:function(e,a,t){e.exports=t.p+"static/404-fcdd980d4bec9f5e4f577268926c400b.jpg"},176:function(e,a,t){"use strict";t(164),t(155),t(156),t(79),t(157);var n=t(12),r=t.n(n),s=t(0),l=t.n(s),i=function(e){function a(a){return e.call(this,a)||this}return r()(a,e),a.prototype.render=function(){var e,a=this;if(void 0!=this.props.user){var t="0.00000000";void 0!=this.props.serverInfo&&void 0!=this.props.serverInfo.amount&&void 0!=this.props.serverInfo.amount.aht&&(t=this.props.serverInfo.amount.aht.earned+".00000000"),void 0!=this.props.user&&void 0==this.props.user.linkTo?e=l.a.createElement("a",{href:"#",className:"nav-link pr-0 leading-none","data-toggle":"dropdown"},l.a.createElement("span",{className:"avatar",style:{backgroundImage:"url("+this.props.user.photoURL+")"}}),l.a.createElement("span",{className:"ml-2 d-none d-lg-block"},l.a.createElement("span",{className:"text-default"},this.props.user.displayName),l.a.createElement("small",{className:"text-muted d-block mt-1"},this.props.user.overrideText||t+" AHT"))):void 0!=this.props.user&&void 0!=this.props.user.linkTo&&(e=l.a.createElement("a",{href:this.props.user.linkTo,target:"_blank",className:"nav-link pr-0 leading-none"},l.a.createElement("span",{className:"avatar",style:{backgroundImage:"url("+this.props.user.photoURL+")"}}),l.a.createElement("span",{className:"ml-2 d-none d-sm-block"},l.a.createElement("span",{className:"text-default"},this.props.user.displayName),l.a.createElement("small",{className:"text-muted d-block mt-1"},this.props.user.overrideText||t+" AHT"))))}var n,r,s=[],i=this.props.links||[],c=Array.isArray(i),m=0;for(i=c?i:i[Symbol.iterator]();;){var o;if(c){if(m>=i.length)break;o=i[m++]}else{if((m=i.next()).done)break;o=m.value}var d=o;s.push(l.a.createElement("div",{className:"nav-item d-none d-md-flex"},l.a.createElement("a",{href:d.href,className:"btn btn-sm btn-outline-primary"},d.name)))}return void 0!=this.props.user&&void 0==this.props.user.linkTo?n=l.a.createElement("div",{className:"dropdown"},e,l.a.createElement("div",{className:"dropdown-menu dropdown-menu-right dropdown-menu-arrow"},l.a.createElement("a",{className:"dropdown-item",onClick:function(){a.props.auth.logout()}},l.a.createElement("i",{className:"dropdown-icon fe fe-log-out"})," ログアウト"))):void 0!=this.props.user&&void 0!=this.props.user.linkTo&&(n=l.a.createElement("a",{href:this.props.user.linkTo},e)),!0!==this.props.noSubHeader&&(r=l.a.createElement("a",{href:"#",className:"header-toggler d-lg-none ml-3 ml-lg-0","data-toggle":"collapse","data-target":"#headerMenuCollapse"},l.a.createElement("span",{className:"header-toggler-icon"}))),l.a.createElement("div",{className:"page"},l.a.createElement("div",{className:"flax-fill"},l.a.createElement("div",{className:"header py-4"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("a",{className:"header-brand",href:"/"},this.props.title||"ALIS Hacker's Club"),l.a.createElement("div",{className:"d-flex order-lg-2 ml-auto"},s,n),r)))))},a}(s.Component);a.a=i},183:function(e,a,t){"use strict";var n=t(12),r=t.n(n),s=t(0),l=t.n(s),i=function(e){function a(a){return e.call(this,a)||this}return r()(a,e),a.prototype.render=function(){return l.a.createElement("div",{className:"page",style:{width:"100%"}},l.a.createElement("div",{className:"page-content"},l.a.createElement("div",{className:"container text-center"},l.a.createElement("div",{className:"display-1 text-muted mb-5",style:{fontSize:"50px"}},l.a.createElement("i",{className:"si si-exclamation"})," データ取得中"),l.a.createElement("h1",{className:"h2 mb-3"},"少々お待ち下さい..."),l.a.createElement("p",{className:"h4 text-muted font-weight-normal mb-7"},"法定通貨に依存しない完全独自経済圏で好きなことを追求して生きていこう！"),l.a.createElement("a",{className:"btn btn-primary",href:"/"},l.a.createElement("i",{className:"fe fe-arrow-left mr-2"}),"トップページへ戻る"))))},a}(s.Component);a.a=i},217:function(e,a,t){"use strict";t(155),t(156),t(157),t(51),t(80),t(81),t(164),t(79),t(54),t(82);var n=t(12),r=t.n(n),s=t(0),l=t.n(s),i=t(163),c=t.n(i),m=t(177),o=t.n(m),d=(t(186),t(162)),u=t.n(d),h=t(171),p=t.n(h),g=(t(172),t(167)),f=t(170),v=t(183),b=t(176),E=t(173),y=t.n(E);p.a.locale("ja");var k=function(e){function a(a){var t,n;t=e.call(this,a)||this;var r="l0emnezbpa4g6fi",s="alis_daily",l=a.location.pathname.toLowerCase().split("/")[2],i=a.location.href||"",c=o.a.parse(i,!0)||{query:{}},m={name:"ALIS"};"note"===l&&(void 0!=c.query.tag?(r="7zd4qmnpm1glywd",s=n=c.query.tag.toLowerCase()):(s="note_daily",r="c7njqj2tfuv99be"),m={name:"note"});var d=null;void 0!=c.query.topic&&(d=c.query.topic.toLowerCase());var u=null;return void 0!=c.query.type&&(u=c.query.type.toLowerCase()),t.state={type:u,conf:m,map_id:r,map_name:s,latest:null,target:l,tag:n,topic:d,date:c.query.daily,existing_dates:[]},t}r()(a,e);var t=a.prototype;return t.getRanking=function(e,a){var t=this,n="https://dl.dropboxusercontent.com/s/"+e[a]+"/"+a+".json";window.$.getJSON(n,function(e){t.setState({articles:e.a})})},t.getMap=function(){var e=this,a="https://dl.dropboxusercontent.com/s/"+this.state.map_id+"/"+this.state.map_name+".json";window.$.getJSON(a,function(a){var t=e.state.date||e.state.tag;if(void 0!=e.state.topic&&"note"==e.state.target&&(t+="_"+e.state.topic),void 0==t||void 0==a[t])if("note"===e.state.target&&void 0!=e.state.tag)window.location.href="/rankings/note/?tag=alis";else{var n=u()(a).chain().keys().sortBy(function(e){return-1*e.split("_")[0].split("-").join("")}).value()[0];void 0!==n&&(window.location.href="/rankings/"+e.state.target+"/?daily="+n)}else{var r=u()(a).chain().keys().sortBy(function(e){return-1*e.split("_")[0].split("-").join("")}).value()[0];e.setState({existing_dates:u()(a).keys(),latest:r},function(){e.getRanking(a,t)})}})},t.componentDidMount=function(){this.getMap()},t.componentDidUpdate=function(){},t.makeSectionName=function(){return"note"===this.state.target&&"alis"==this.state.tag?l.a.createElement("span",null,l.a.createElement("a",{href:"https://note.mu/hashtag/alis",target:"_blank"},"#ALIS")," ",l.a.createElement("a",{href:"https://alis.to/wine/articles/3k9JOmRnPNE6",target:"_blank"},"企画")," ",l.a.createElement("a",{href:"https://alis.to/mammy/articles/a1ZpmeJ1p6gV",target:"_blank"},"賞品 ",l.a.createElement("b",null,"1000ALIS以上"))):{all:"総合",crypto:"クリプト",gourmet:"グルメ",gosyuin:"御朱印",manga:"マンガ",column:"コラム",novel:"小説",photo:"写真",music:"サウンド",business:"ビジネス",lifestyle:"ライフスタイル",tech:"テクノロジー",entertainment:"エンタメ"}[this.state.topic||"all"]+"部門"},t.render=function(){var e=this.state.conf||{},a=(this.state.alerts,this.state.date,void 0===this.state.articles?l.a.createElement(v.a,null):this.render_rankings()),t=[{key:null,name:"総合",icon:"font"},{key:"crypto",name:"クリプト",icon:"ethereum",fa_type:"fab"},{key:"gourmet",name:"グルメ",icon:"birthday-cake"},{key:"gosyuin",name:"御朱印",icon:"cannabis"}];"note"==this.state.target&&(t=[{key:null,name:"総合"},{key:"manga",name:"マンガ"},{key:"column",name:"コラム"},{key:"novel",name:"小説"},{key:"photo",name:"写真"},{key:"music",name:"サウンド"},{key:"business",name:"ビジネス"},{key:"lifestyle",name:"ライフスタイル"},{key:"tech",name:"テクノロジー"},{key:"entertainment",name:"エンタメ"},{key:"alis",name:"#ALIS",tag:!0}]);var n=[];if(void 0!=this.state.date||"alis"===this.state.tag)for(var r=0;r<t.length;r++){var s=t[r],i="";this.state.topic==s.key&&(i="active");var m="";null!=s.key&&(m="&topic="+s.key);var o=void 0;void 0!=s.icon&&(o=l.a.createElement("i",{className:(s.fa_type||"fa")+" fa-"+s.icon}));var d="/rankings/"+this.state.target+"/?daily="+(this.state.date||"2018-09-14")+m;!0===s.tag&&(d="/rankings/"+this.state.target+"/?tag="+s.key),n.push(l.a.createElement("li",{className:"nav-item",key:"topic-"+(s.key||"all")},l.a.createElement("a",{href:d,className:"nav-link "+i},o," ",s.name)))}var u=[],h=p()(this.state.date).add(-1,"day").format("YYYY-MM-DD"),E=p()(this.state.date).add(1,"day").format("YYYY-MM-DD");"note"===this.state.target&&void 0!=this.state.tag?u.push(l.a.createElement("div",null)):this.state.existing_dates.includes(h)?u.push(l.a.createElement("a",{className:"btn btn-primary text-light",href:"/rankings/"+this.state.target+"/?daily="+h},l.a.createElement("i",{className:"fa fa-arrow-circle-left mr-2"}),p()(this.state.date).add(-1,"day").format("M月D日"))):u.push(l.a.createElement("a",{className:"btn btn-gray",style:{cursor:"default"}},l.a.createElement("i",{className:"fa fa-arrow-circle-left mr-2"}),p()(this.state.date).add(-1,"day").format("M月D日"))),u.push(l.a.createElement("h1",{className:"d-none d-md-inline-block page-title",style:{fontSize:"18px"}},e.name,"ランキング",l.a.createElement("i",{className:"fa fa-angle-double-right ml-3 mr-3"}),this.makeSectionName())),"note"===this.state.target&&void 0!=this.state.tag?u.push(l.a.createElement("div",null)):this.state.existing_dates.includes(E)?u.push(l.a.createElement("a",{className:"btn btn-primary text-light",href:"/rankings/"+this.state.target+"/?daily="+E},p()(this.state.date).add(1,"day").format("M月D日"),l.a.createElement("i",{className:"fa fa-arrow-circle-right ml-2"}))):u.push(l.a.createElement("a",{className:"btn btn-gray",style:{cursor:"default"}},p()(this.state.date).add(1,"day").format("M月D日"),l.a.createElement("i",{className:"fa fa-arrow-circle-right ml-2"})));var k=[],N=e.name+"デイリーランキング "+p()(this.state.date).format("M月D日（ddd）")+"| ALISハッカー部",x=p()(this.state.ndate).format("YYYY年 MM月DD日 （ddd）")+"にTwitterで話題になった"+e.name+"記事のランキングです。";return void 0!=this.state.img&&(k.push({name:"twitter:card",content:"summary_large_image"}),k.push({name:"twitter:site",content:"@alishackers"}),k.push({name:"twitter:image",content:y.a}),k.push({name:"twitter:description",content:x}),k.push({name:"twitter:title",content:N})),l.a.createElement(g.a,null,l.a.createElement(c.a,{meta:k,title:N,link:[{rel:"stylesheet",type:"text/css",href:"/tabler/css/tabler.min.css"},{rel:"stylesheet",type:"text/css",href:"/tabler/css/tabler.min.css"},{rel:"stylesheet",type:"text/css",href:"/css/common.css"}]}),l.a.createElement(b.a,{links:[{name:"トークン",href:"/home/"},{name:"whoami",href:"/whoami/"},{name:"ALIS",href:"/rankings/alis/"},{name:"note",href:"/rankings/note/"},{name:"企画",href:"/rankings/note/?tag=alis"}]}),l.a.createElement("div",{className:"header collapse d-lg-flex p-0",id:"headerMenuCollapse"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row align-items-center"},l.a.createElement("div",{className:"col-lg order-lg-first"},l.a.createElement("ul",{className:"nav nav-tabs border-0 flex-column flex-lg-row"},n))))),l.a.createElement("div",{className:"my-3 my-md-5"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"page-header"},l.a.createElement("div",{className:"d-block d-md-none",style:{width:"100%"}},l.a.createElement("h1",{className:"page-title",style:{fontSize:"18px"}},e.name,"ランキング",l.a.createElement("i",{className:"fa fa-angle-double-right ml-3 mr-3"}),this.makeSectionName())),l.a.createElement("div",{className:"d-flex justify-content-between mt-2",style:{width:"100%"}},u)),a,l.a.createElement("div",{className:"d-flex justify-content-between mt-2 mb-6",style:{width:"100%"}},u))),l.a.createElement(f.a,null))},t.makeProfileImageURL=function(e){return"note"===this.state.target?e.p:void 0==e.p||""==e.p?"https://alis.to/d/nuxt/dist/img/icon_user_noimg.d5f3940.png":"https://alis.to/d/api/info_icon/"+e.u+"/icon/"+e.p},t.makeArticleURL=function(e){return"note"===this.state.target?"https://note.mu/"+e.u+"/n/"+e.i:"https://alis.to/"+e.u+"/articles/"+e.i},t.makeUserURL=function(e){return"note"===this.state.target?"https://note.mu/"+e.u:"https://alis.to/users/"+e.u},t.makePeriod=function(){return"note"===this.state.target&&void 0!=this.state.tag?"9/8 19:00 - 9/18 24:00":p()(this.state.date).format("M月D日 （ddd）")},t.render_rankings=function(){var e=this,a=this.state.articles;if(void 0!=this.state.topic&&"alis"==this.state.target){var t=null,n=0,r=0,s=a=u()(a).filter(function(a){return a.g==e.state.topic}),l=Array.isArray(s),i=0;for(s=l?s:s[Symbol.iterator]();;){var c;if(l){if(i>=s.length)break;c=s[i++]}else{if((i=s.next()).done)break;c=i.value}var m=c;null==t||t!=m.r?(r+=1+n,n=0):n+=1,t=m.r,m.r=r}}return"image"===this.state.type?this.drawImage(a):this.drawArticles(a)},t.drawImage=function(e){var a=[],t={crypto:{name:"クリプト",color:"success"},gourmet:{name:"グルメ",color:"primary"},gosyuin:{name:"御朱印",color:"danger"},manga:{name:"マンガ",color:"success"},column:{name:"コラム",color:"primary"},novel:{name:"小説",color:"warning"},photo:{name:"写真",color:"info"},music:{name:"サウンド",color:"success"},business:{name:"ビジネス",color:"primary"},lifestyle:{name:"ライフスタイル",color:"info"},tech:{name:"テクノロジー",color:"danger"},entertainment:{name:"エンタメ",color:"success"}},n={},r=[],s=0,i=e,c=Array.isArray(i),m=0;for(i=c?i:i[Symbol.iterator]();;){var o;if(c){if(m>=i.length)break;o=i[m++]}else{if((m=i.next()).done)break;o=m.value}var d=o;"alis"===this.state.tag&&"note"===this.state.target&&(void 0==n[d.u]&&(n[d.u]={length:0,points:0,name:d.n,user_id:d.u,photo:d.p}),n[d.u].points+=d.cp,n[d.u].length+=1);var u="blue";0===d.cp?u="gray":d.cp>=100?u="red":d.cp>=100?u="orange":d.cp>=10&&(u="green");var h="dark";1==d.r?h="green":2==d.r?h="pink":3==d.r?h="orange":4==d.r?h="purple":d.r<=5&&(h="azure");var g=void 0;void 0!=this.state.tag&&l.a.createElement("span",{className:"d-inline-block mr-2"},l.a.createElement("i",{className:"far fa-calendar mr-1 text-muted"}),p()(d.d).format("MM/DD")),void 0!=d.m&&l.a.createElement("div",{className:"d-none d-md-inline-block",style:{width:"60px"}},l.a.createElement("span",{className:"badge badge-default bg-teal text-light"},d.m," 円")),"alis"!==this.state.tag&&void 0!=d.g&&(g=l.a.createElement("div",{className:"d-none mt-2"},l.a.createElement("span",{className:"badge badge-"+t[d.g].color},t[d.g].name))),s<5?a.push(l.a.createElement("tr",null,l.a.createElement("td",{className:"text-center w-1"},l.a.createElement("a",{href:this.makeArticleURL(d),target:"_blank",className:"avatar d-md-none d-inline-block",title:this.makeArticleURL(d),style:{backgroundImage:"url("+this.makeProfileImageURL(d)+")"}}),l.a.createElement("span",{className:"d-none d-md-inline-block text-center avatar avatar-"+h},d.r),g),l.a.createElement("td",null,l.a.createElement("div",{className:"mb-1"},l.a.createElement("b",{className:"text-warning d-inline-block d-md-none mr-2"},d.r,"."),l.a.createElement("a",{href:this.makeArticleURL(d),className:"text-info font-weight-bold",target:"_blank"},d.t))),l.a.createElement("td",{className:"d-none d-md-table-cell text-center"},l.a.createElement("a",{href:this.makeUserURL(d),target:"_blank",className:"avatar d-block",title:d.n,style:{backgroundImage:"url("+this.makeProfileImageURL(d)+")"}})),l.a.createElement("td",{className:"d-none d-md-table-cell"},l.a.createElement("div",null,l.a.createElement("a",{href:this.makeUserURL(d),target:"_blank",className:"text-dark"},d.n)),l.a.createElement("div",{className:"small text-muted"},l.a.createElement("a",{href:this.makeUserURL(d),target:"_blank",className:"text-muted"},d.u))),l.a.createElement("td",{className:"d-none d-md-table-cell w-1"},l.a.createElement("div",null,l.a.createElement("span",{className:"stamp stamp-sm bg-"+u,style:{width:"60px"}},d.cp))))):s<20&&r.push(l.a.createElement("a",{href:this.makeUserURL(d),target:"_blank",className:"avatar d-inline-block m-2",title:d.n,style:{border:"1px solid #ccc",backgroundImage:"url("+this.makeProfileImageURL(d)+")"}})),s++}a.push(l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",{colSpan:"3",className:"text-center pt-3 pb-3 pl-0 pr-5"},l.a.createElement("div",{className:"d-inline-block"},r)),l.a.createElement("td",{className:"d-none d-md-table-cell w-1"},l.a.createElement("div",null,l.a.createElement("span",{className:"stamp stamp-sm bg-orange",style:{width:"60px"}},"次点")))));var f="ALIS";"note"==this.state.target&&(f="note");var v={all:"総合",crypto:"クリプト",gourmet:"グルメ",gosyuin:"御朱印",manga:"マンガ",column:"コラム",novel:"小説",photo:"写真",music:"サウンド",business:"ビジネス",lifestyle:"ライフスタイル",tech:"テクノロジー",entertainment:"エンタメ"}[this.state.topic||"all"],b={subheader:"crimson",footer_text:"#333",header:"#41C9B3"};return"note"!==this.state.target&&(b={subheader:"#f1c40f",footer_text:"#9aa0ac",header:"#333"}),l.a.createElement("div",{className:"text-center pb-5"},l.a.createElement("div",{id:"ranking-image",className:"card text-left d-inline-block m-0",style:{borderRadius:0,border:"none",width:"900px",backgroundColor:b.header,color:"white"}},l.a.createElement("div",{className:"card-header text-center mt-2",style:{display:"block",borderBottom:"15px solid white"}},l.a.createElement("h1",{className:"card-title d-inline-block",style:{fontSize:"28px"}},"デイリー",f,"ランキング",l.a.createElement("i",{className:"fa fa-angle-double-right ml-3 mr-3"}),v,"部門"),l.a.createElement("div",{className:"mt-2 mb-2",style:{color:b.subheader}},"『リンク付ツイート数 + リツイート数 + いいね数』 をポイントにしたランキングです")),l.a.createElement("div",{className:"table-responsive",style:{backgroundColor:"white"}},l.a.createElement("table",{className:"table table-sm table-hover table-outline table-vcenter card-table"},l.a.createElement("tbody",null,a))),l.a.createElement("div",{className:"card-footer text-center",style:{display:"block"}},l.a.createElement("div",{style:{fontSize:"28px",color:"white"}},l.a.createElement("b",null,p()(this.state.date).format("YYYY年 M月D日 (ddd)"))),l.a.createElement("div",{style:{color:b.footer_text}},"presented by ALISハッカー部"))))},t.drawArticles=function(e){var a=[],t={crypto:{name:"クリプト",color:"success"},gourmet:{name:"グルメ",color:"primary"},gosyuin:{name:"御朱印",color:"danger"},manga:{name:"マンガ",color:"success"},column:{name:"コラム",color:"primary"},novel:{name:"小説",color:"warning"},photo:{name:"写真",color:"info"},music:{name:"サウンド",color:"success"},business:{name:"ビジネス",color:"primary"},lifestyle:{name:"ライフスタイル",color:"info"},tech:{name:"テクノロジー",color:"danger"},entertainment:{name:"エンタメ",color:"success"}},n={},r=e,s=Array.isArray(r),i=0;for(r=s?r:r[Symbol.iterator]();;){var c;if(s){if(i>=r.length)break;c=r[i++]}else{if((i=r.next()).done)break;c=i.value}var m=c;"alis"===this.state.tag&&"note"===this.state.target&&(void 0==n[m.u]&&(n[m.u]={length:0,points:0,name:m.n,user_id:m.u,photo:m.p}),n[m.u].points+=m.cp,n[m.u].length+=1);var o="blue";0===m.cp?o="gray":m.cp>=100?o="red":m.cp>=100?o="orange":m.cp>=10&&(o="green");var d="dark";1==m.r?d="green":2==m.r?d="pink":3==m.r?d="orange":m.r<=5&&(d="azure");var u=void 0,h=void 0,g=void 0,f=void 0;void 0!=this.state.tag&&(f=l.a.createElement("span",{className:"d-inline-block mr-2"},l.a.createElement("i",{className:"far fa-calendar mr-1 text-muted"}),p()(m.d).format("MM/DD"))),void 0!=m.m&&(g=l.a.createElement("div",{className:"d-none d-md-inline-block",style:{width:"60px"}},l.a.createElement("span",{className:"badge badge-default bg-teal text-light"},m.m," 円"))),"alis"!==this.state.tag&&void 0!=m.g&&(u=l.a.createElement("div",{className:"d-block d-md-none mt-2"},l.a.createElement("span",{className:"badge badge-"+t[m.g].color},t[m.g].name)),h=l.a.createElement("div",{className:"d-none d-md-inline-block",style:{width:"60px"}},l.a.createElement("span",{className:"badge badge-"+t[m.g].color},t[m.g].name))),a.push(l.a.createElement("tr",null,l.a.createElement("td",{className:"text-center w-1"},l.a.createElement("a",{href:this.makeArticleURL(m),target:"_blank",className:"avatar d-md-none d-inline-block",title:this.makeArticleURL(m),style:{backgroundImage:"url("+this.makeProfileImageURL(m)+")"}}),l.a.createElement("span",{className:"d-none d-md-inline-block text-center avatar avatar-"+d},m.r),u),l.a.createElement("td",null,l.a.createElement("div",{className:"mb-1"},l.a.createElement("b",{className:"text-warning d-inline-block d-md-none mr-2"},m.r,"."),l.a.createElement("a",{href:this.makeArticleURL(m),className:"text-info font-weight-bold",target:"_blank"},m.t)),l.a.createElement("div",{className:"small text-muted"},h,l.a.createElement("div",{className:"d-inline-block",style:{width:"200px"}},l.a.createElement("span",{className:"d-inline-block mr-2"},l.a.createElement("i",{className:"fa fa-comment mr-1 text-primary"}),m.ct),l.a.createElement("span",{className:"d-inline-block mr-2"},l.a.createElement("i",{className:"fa fa-retweet mr-1 text-success"}),m.cr),l.a.createElement("span",{className:"d-inline-block mr-2"},l.a.createElement("i",{className:"fa fa-heart mr-1 text-danger"}),m.cl),l.a.createElement("span",{className:"d-inline-block d-md-none ml-5"},l.a.createElement("i",{className:"fa fa-fire mr-1 text-warning"}),m.cp),g,f))),l.a.createElement("td",{className:"d-none d-md-table-cell text-center"},l.a.createElement("a",{href:this.makeUserURL(m),target:"_blank",className:"avatar d-block",title:m.n,style:{backgroundImage:"url("+this.makeProfileImageURL(m)+")"}})),l.a.createElement("td",{className:"d-none d-md-table-cell"},l.a.createElement("div",null,l.a.createElement("a",{href:this.makeUserURL(m),target:"_blank",className:"text-dark"},m.n)),l.a.createElement("div",{className:"small text-muted"},l.a.createElement("a",{href:this.makeUserURL(m),target:"_blank",className:"text-muted"},m.u))),l.a.createElement("td",{className:"d-none d-md-table-cell w-1"},l.a.createElement("div",null,l.a.createElement("span",{className:"stamp stamp-sm bg-"+o,style:{width:"60px"}},m.cp)))))}return[this.drawRankers(n),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table table-hover table-outline table-vcenter card-table"},l.a.createElement("thead",null,l.a.createElement("th",{className:"text-center",style:{paddingLeft:"1.5rem"}}),l.a.createElement("th",{className:"text-danger"},this.makePeriod()," ",l.a.createElement("span",{className:"ml-2"},e.length," 記事")),l.a.createElement("th",{className:"d-none d-md-table-cell"}),l.a.createElement("th",{className:"d-none d-md-table-cell"},"ユーザー"),l.a.createElement("th",{className:"d-none d-md-table-cell text-center",style:{paddingRight:"1.5rem"}},"ポイント")),l.a.createElement("tbody",null,a))))]},t.drawRankers=function(e){var a;if("alis"===this.state.tag&&"note"===this.state.target){var t=[];for(var n in e)t.push(e[n]);var r=[],s=0,i=t=u()(t).sortBy(function(e){return-1*e.points}),c=Array.isArray(i),m=0;for(i=c?i:i[Symbol.iterator]();;){var o;if(c){if(m>=i.length)break;o=i[m++]}else{if((m=i.next()).done)break;o=m.value}var d=o;s+=1,r.push(l.a.createElement("div",{className:"col-sm-6 col-lg-3"},l.a.createElement("div",{className:"card p-3"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("a",{href:"https://note.mu/"+d.user_id,target:"_blank",className:"avatar d-block mr-3",title:d.name,style:{backgroundImage:"url("+d.photo+")"}}),l.a.createElement("div",null,l.a.createElement("h4",{className:"m-0"},l.a.createElement("span",{className:"text-muted"},"{",s,"}")," ",l.a.createElement("span",null,l.a.createElement("span",{className:"text-success"},d.points)," 点")),l.a.createElement("small",{className:"text-muted"},d.name))))))}a=l.a.createElement("div",{className:"row"},r)}return a},a}(s.Component);a.a=k}}]);
//# sourceMappingURL=component---src-pages-rankings-note-js-5c32fc8d6b2ef403ed2d.js.map