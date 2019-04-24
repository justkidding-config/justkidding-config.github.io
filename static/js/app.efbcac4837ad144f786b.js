webpackJsonp([1],{"+Cwr":function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAD/0lEQVR4Xu2aT2hcRRzHv7+XvFREhIieW0EF0Wz2vZGGxINKEepJRFTQS0FPKnpQEPRQKagHe6iIeBAPPeilItKLHgql0OI/fjPJ7qYYXEpUFBQaiU0heZu+n0yYlKUUkoWd2QnvzfXNzvt9P/Od+b357RAq3qji+lEDqB1QcQL1Eqi4AepNMNgSUErNAHgDwC+rq6vvdbvdjRjcFwRAlmV3JUmyDOBWJ/pjZn6tMgCazeaTY2Nj32wLFpGLWusHKgNgenr6vvHx8YsAxpzoU8z8bGUAWKFKqccAvA5AyrJ8xRjzV6UAxCD2ZjEE2QRjFW/jqgHEPDshYqsdEIJyzO8I5oA8zy8Q0ZyD8QIzfxkDmOgBZFn2kIjc5mD15ufnLwwTXNQAsix7OkmSr6xgEREieo6ZT1UCQJZls0R0loj2OQCvaq0/Gab4oN8Bg+wBzWbzQJIkmogmbZBlWX5gjHl72OKjBDA1NTWZpulPRHSPE/w5M7/kQ3x0AJRSqYicI6JZZ/vTWuunrAmqAuALAM87sefX19cPLS4uFr7ER+WAPM/fJaKjTmxnbW1tbmlp6YpP8dEAUErZWbezb9uljY2NuU6n87dv8VEAsOkuSZJzAFIAVvRBZv49hPiRA2g2m/cmSfKjS3dXer3eXKvV6oQSP1IARVF8m6apzfUHRKQgokPMfD6k+JEDmJiYYAB3WwAAHtFa/1AZAPY06KrFPwO4XUT+tetfa90NCWHkhyFbLRaRM0SUiMhvRVHMhMoAI10C/fUApZQtl59wM9/u9XqzrVbraggnjNwB2yKVUp8B2Prmt47QWh8GcM03hGgA2H+NlFL2e+BhJ/okMx+pEgDYk+B2ZnDCjzLzMZ8QYnLAls7+zOCEH2Hmk74gRAfACu3PDHYfKMvysDHmjA8IUQJwEOz9gY/cpnjV1giYuT1sCNECcBCuZwZ7UNrc3FQLCwt/DhNCSAALRNSwwZdl+YwxZqvau0O7MTPY6zUz3W73v51+uNvnwQAopS4DuMMF1titnV1msJ/LkyKyAuBrrfVbuxW4U78gABqNxoNpmm6tXxEptdb27O+tzreT6P7nQQAopY67G2L23R1mnhokSJ99vQNQSt0J4A8AtzgHvKO1ft+nqEHGDgHg+uyLyD8rKyv7l5eX1wcJ0mdfrwBunH0ALzPzpz4FDTq2TwCJUuo7AI876/+qtb4/xAlvEAjeAOR5/iERvemCuVwUxcF2u31pkOBC9PUCoL/OLyJrAB7VWtv6X3TNF4CzVjSA1bIsnzDGfB+dcheQFwD2cjQRnRaRF40x9opstM0LgGjV3iSwGsBemi0fsdYO8EF1L41ZO2AvzZaPWGsH+KC6l8b8H+Mi01Bpb1gyAAAAAElFTkSuQmCC"},"82Gx":function(t,n){},NHnr:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a("7+uW"),i=a("2EC8"),s=a.n(i),r=a("/zV6"),o=a.n(r),l=a("5CJf"),c=a.n(l),u={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var A=a("VU/8")({name:"App"},u,!1,function(t){a("Y2gL")},null,null).exports,d=a("/ocq"),v=[{name:"nginx.js",lang:"javascript",content:"\nimport k from 'kubernetes.js';\nimport * as std from '@jkcfg/std';\n\nconst container = k.Container('nginx', 'nginx:1.15.4');\nconst deployment = k.Deployment('nginx', 3, [container]);\n\nstd.write(deployment, 'nginx.yaml');\n".trim()},{name:"kubernetes.js",lang:"javascript",content:"\nconst Container = function(name, image) {\n  return {\n    name,\n    image,\n  }\n};\n\nconst Deployment = function(name, replicas, containers) {\n  return {\n    apiVersion: 'apps/v1',\n    kind: 'Deployment',\n    metadata: {\n      name,\n      labels: {\n  app: name,\n      },\n    },\n    spec: {\n      replicas,\n      selector: {\n  matchLabels: {\n    app: name,\n  },\n      },\n      template: {\n  metadata: {\n    labels: {\n      app: name,\n    },\n  },\n  containers,\n      },\n    },\n  };\n};\n\nexport default {\n  Container,\n  Deployment,\n};\n".trim()}],m=[{name:"nginx.yaml",lang:"YAML",content:"\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: nginx\n  name: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    containers:\n    - image: nginx:1.15.4\n      name: nginx\n    metadata:\n      labels:\n        app: nginx\n".trim()}],g={name:"Home",data:function(){return{input:v,output:m}}},p={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("navbar"),t._v(" "),e("div",{staticClass:"uk-section"},[e("div",{staticClass:"uk-width-1-1 uk-text-center"},[e("div",{staticClass:"uk-container"},[e("img",{attrs:{src:a("VzCc")}}),t._v(" "),t._m(0),t._v(" "),e("div",[e("router-link",{staticClass:"uk-button uk-button-primary uk-margin-right",attrs:{to:"/documentation/quick-start"}},[t._v("\n            Get Started\n          ")]),t._v(" "),t._m(1)],1)])])]),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"uk-section"},[e("div",{staticClass:"uk-container"},[e("div",{staticClass:"uk-width-1-1"},[e("div",{staticClass:"uk-grid",attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-1-2"},[e("codepane",{attrs:{files:t.input}})],1),t._v(" "),e("div",{staticClass:"uk-width-1-2"},[e("codepane",{attrs:{files:t.output}})],1)])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{staticClass:"uk-margin-medium-bottom"},[this._v("Configuration as "),n("b",[this._v("Code")]),this._v(".")])},function(){var t=this.$createElement,n=this._self._c||t;return n("a",{staticClass:"uk-button uk-button-default uk-margin-left uk-margin-right",attrs:{href:"https://github.com/jkcfg/jk/releases/latest"}},[n("span",{staticClass:"tm-upper"},[this._v("Download")]),this._v(" "),n("canvas",{attrs:{"uk-icon":"icon: download",width:"20",height:"20"}})])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"uk-section uk-section-muted"},[a("div",{staticClass:"uk-align-center"},[a("div",{staticClass:"uk-container"},[a("div",{staticClass:"uk-grid uk-grid-match",attrs:{"uk-grid":""}},[a("div",{staticClass:"uk-width-1-2"},[a("div",{staticClass:"uk-card uk-card-default uk-card-body"},[a("h4",{staticClass:"uk-card-title"},[t._v("Write code")]),t._v(" "),a("p",[t._v("Use the expressivity of "),a("a",{attrs:{href:"http://www.ecma-international.org/publications/standards/Ecma-262.htm"}},[t._v("\n              ECMAScript")]),t._v(", the world's largest "),a("a",{attrs:{href:"https://www.npmjs.com/"}},[t._v("software ecosystem")]),t._v(" and the\n              speed of "),a("a",{attrs:{href:"https://v8.dev/"}},[t._v("v8")]),t._v(" to build, organize\n              and maintain configuration.")])])]),t._v(" "),a("div",{staticClass:"uk-width-1-2"},[a("div",{staticClass:"uk-card uk-card-default uk-card-body"},[a("h4",{staticClass:"uk-card-title"},[t._v("Generate configuration")]),t._v(" "),a("p",[a("code",[t._v("jk")]),t._v(" generates all your JSON, YAML and\n              arbitrary text configuration files. With a little luck, you\n              will not have to touch a YAML file again. Ever.")])])])])])])])}]},f=a("VU/8")(g,p,!1,null,null,null).exports,k=a("rr5i"),h=a.n(k),C={name:"Documentation",data:function(){return{navigation:h.a,ids:{},page:!1,component:!1}}},w={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("navbar",{attrs:{sticky:"true",active:"documentation"}}),t._v(" "),a("div",{staticClass:"tm-sidebar-left uk-visible@m"},t._l(t.navigation,function(n,e,i){return a("ul",{key:i,staticClass:"uk-nav uk-nav-default tm-nav",class:{"uk-margin-top":i}},[a("li",{staticClass:"uk-nav-header"},[t._v(t._s(e))]),t._v(" "),t._l(n,function(n,e){return a("router-link",{key:n,attrs:{tag:"li",to:"/documentation/"+n}},[a("a",[t._v(t._s(e))])])})],2)}),0),t._v(" "),a("div",{staticClass:"tm-main uk-section uk-section-default"},[a("div",{staticClass:"uk-container uk-container-small uk-position-relative"},[a("markdownpage"),t._v(" "),a("div",{staticClass:"tm-sidebar-right uk-visible@l"},[a("div",{attrs:{"uk-sticky":"offset: 160"}},[a("ul",{staticClass:"uk-nav uk-nav-default tm-nav uk-nav-parent-icon",attrs:{"uk-scrollspy-nav":"closest: li; scroll: true; offset: 100"}},[t._l(t.ids,function(n,e){return a("li",{key:n},[a("a",{attrs:{href:"#"+n}},[t._v(t._s(e))])])}),t._v(" "),a("li",{staticClass:"uk-nav-divider"}),t._v(" "),t.component?a("li",[a("a",{attrs:{href:"../assets/uikit/tests/"+t.component+".html",target:"_blank"}},[a("span",{staticClass:"uk-margin-small-right",attrs:{"uk-icon":"icon: push"}}),t._v(" "),a("span",{staticClass:"uk-text-middle"},[t._v("Open test")])])]):t._e(),t._v(" "),t._m(0)],2)])])],1)]),t._v(" "),a("div",{attrs:{id:"offcanvas","uk-offcanvas":"mode: push; overlay: true"}},[a("div",{staticClass:"uk-offcanvas-bar"},[a("div",{staticClass:"uk-panel"},[t._m(1),t._v(" "),t._l(t.navigation,function(n,e,i){return a("ul",{key:i,staticClass:"uk-nav uk-nav-default tm-nav uk-margin-top"},[a("li",{staticClass:"uk-nav-header"},[t._v(t._s(e))]),t._v(" "),t._l(n,function(n,e,i){return a("li",{key:i,attrs:{exact:""}},[a("a",{attrs:{href:"#/documentation/"+n}},[t._v(t._s(e))])])})],2)})],2)])])],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("a",{attrs:{href:"https://github.com/jkcfg/jk/issues",target:"_blank"}},[n("span",{staticClass:"uk-margin-small-right",attrs:{"uk-icon":"icon: warning"}}),this._v(" "),n("span",{staticClass:"uk-text-middle"},[this._v("Report issue")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",{staticClass:"uk-nav uk-nav-default tm-nav"},[n("li",{staticClass:"uk-nav-header"},[this._v("General")]),this._v(" "),n("li",[n("a",{attrs:{href:"/"}},[this._v("Home")])])])}]},b=a("VU/8")(C,w,!1,null,null,null).exports;e.a.use(d.a);var x=new d.a({linkActiveClass:"uk-active",routes:[{path:"/",component:f},{path:"/documentation/",redirect:"/documentation/quick-start"},{path:"/documentation/:page/",component:b},{path:"/documentation/:page/:href/",component:b}]}),z={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("ul",{attrs:{"uk-tab":""}},t._l(t.files,function(n){return a("li",{key:n.name},[a("a",{attrs:{href:"#"}},[a("span",{staticClass:"tm-lower"},[t._v(t._s(n.name))])])])}),0),t._v(" "),a("ul",{staticClass:"uk-switcher uk-margin"},t._l(t.files,function(t){return a("li",{key:t.name},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.content,expression:"file.content"}],staticClass:"maxheight"},[a("code",{class:t.lang})])])}),0)])},staticRenderFns:[]};var E=a("VU/8")({name:"CodePanel",props:["files"]},z,!1,function(t){a("82Gx")},"data-v-37c94c62",null).exports,D={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"uk-navbar-container tm-navbar-container",attrs:{"uk-sticky":!!t.sticky&&"media: 960"}},[e("div",{staticClass:"uk-container uk-container-expand"},[e("nav",{staticClass:"uk-navbar"},[e("div",{staticClass:"uk-navbar-left"},[e("router-link",{staticClass:"uk-navbar-item uk-logo",attrs:{to:"/"}},[e("img",{attrs:{src:a("+Cwr")}})])],1),t._v(" "),e("div",{staticClass:"uk-navbar-right"},[e("ul",{staticClass:"uk-navbar-nav uk-visible@m"},[e("router-link",{class:{"uk-active":"documentation"==t.active},attrs:{to:"/documentation/quick-start",tag:"li"}},[e("a",[t._v("Documentation")])]),t._v(" "),t._m(0)],1),t._v(" "),t._m(1),t._v(" "),e("a",{staticClass:"uk-navbar-toggle uk-hidden@m",attrs:{"uk-navbar-toggle-icon":"",href:"#offcanvas","uk-toggle":""}})])])])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("a",{attrs:{href:"https://github.com/jkcfg/jk",rel:"noopener",target:"_blank"}},[this._v("Github")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"uk-navbar-item uk-visible@m"},[n("a",{staticClass:"uk-button uk-button-default tm-button-default uk-icon",attrs:{href:"https://github.com/jkcfg/jk/releases/latest"}},[n("span",{staticClass:"tm-upper"},[this._v("Download")]),this._v(" "),n("canvas",{attrs:{"uk-icon":"icon: download",width:"20",height:"20"}})])])}]},Q=a("VU/8")({name:"Navbar",props:["sticky","active"]},D,!1,null,null,null).exports,H=a("V8mf"),y=a.n(H),L=a("TQvf"),j=a.n(L),P=a("2bpm"),q=a.n(P),N=a("t02m"),O=a("EFqf"),R=a.n(O),_=a("qaNP");function W(t,n){var a=this,e=new R.a.Renderer({langPrefix:"lang-"}),i=new R.a.Renderer({langPrefix:"lang-"}),s=function(t){var n=location.hash.split("/").splice(0,3);return n[0]="",n.push(function(t){return t.toLowerCase().trim().replace(/(&amp;| & )/g,"-and-").replace(/&(.+?);/g,"").replace(/[\s\W-]+/g,"-")}(t)),n.join("/")};return e.strong=function(t){return"Note"===t?'<span class="uk-label">'+t+"</span>":"<strong>"+t+"</strong>"},e.list=function(t){return'<ul class="uk-list uk-list-bullet">'+t+"</ul>"},e.link=function(t,n,a){return t.match(/\.md/)?i.link(t.replace(/.md(.*)/,"$1"),n,a):i.link(t,n,a)},e.code=function(t,n,a){return"example"===n?function(t){var n=q()("code-");return'<div class="uk-position-relative uk-margin-medium">\n\n                    <ul uk-tab>\n                        <li><a href="#">Preview</a></li>\n                        <li><a href="#">Markup</a></li>\n                    </ul>\n\n                    <ul class="uk-switcher uk-margin">\n                        <li>'+t+'</li>\n                        <li><pre><code id="'+n+'" class="lang-html">'+Object(N.escape)(t)+'</code></pre></li>\n                    </ul>\n\n                    <div class="uk-position-top-right uk-margin-small-top">\n                        <ul class="uk-iconnav">\n                            <li><a class="js-copy" uk-tooltip="Copy to Clipboard" rel="#'+n+'"><img class="uk-icon" src="../images/icon-clipboard.svg" uk-svg></a></li>\n                            <li><a class="js-codepen" uk-tooltip="Edit on Codepen" rel="#'+n+'"><img class="uk-icon" src="../images/icon-flask.svg" uk-svg></a></li>\n                        </ul>\n                    </div>\n                </div>'}(t):'<div class="uk-margin-medium">'+i.code(t,n,a)+"</div>"},e.hr=function(){return'<hr class="uk-margin-large">'},e.table=function(t,n){return'<div class="uk-overflow-auto"><table class="uk-table uk-table-divider"><thead>'+t+"</thead><tbody>"+n+"</tbody></table></div>"},e.heading=function(t,n){return"<h"+n+' id="'+s(t)+'" class="uk-h'+(n>1?n+1:n)+' tm-heading-fragment"><a href="#'+s(t)+'">'+t+"</a></h"+n+">"},R()(t,{renderer:e},function(t,e){e=e.replace(/%%latestVersion%%/g,_.jk.latestVersion),n&&n.apply(a,[t,e])})}var M=s.a.util,B=M.$,J=M.$$,F=M.ajax,Y=M.attr,I=M.offset,G=M.on,U=M.Promise,S=M.startsWith,V={name:"MarkdownPage",data:function(){return{error:null,cache:{}}},mounted:function(){new j.a("a.js-copy",{text:function(t){return B(Y(t,"rel")).innerText}}).on("success",function(){s.a.notification({message:"Copied!",pos:"bottom-right"})}).on("error",function(){s.a.notification({message:"Copy failed!",status:"danger",pos:"bottom-right"})}),G(this.$refs.container,"click",'[href="#"]',function(t){return t.preventDefault()}),G(document,"click",'a[href^="#"]:not([href="#"])',function(t){return history.pushState({},"",t.target.href)}),G(window,"popstate",function(){setTimeout(function(){location.hash&&B(location.hash)&&scrollTo(0,I(B(location.hash)).top-100)})})},watch:{$route:{handler:function(){var t=this,n=this.$route.params.page;this.error=null,this.$parent.page=n,new U(function(a,e){t.cache[n]?a(t.cache[n]):F("static/docs/"+n+".md?{{BUILD}}").then(function(e){var i=e.response;S(i.trim(),"<!DOCTYPE html>")&&(i='<div class="uk-text-center">\n                                                <h1>404</h1>\n                                                <p class="uk-text-large">Page not found!</p>\n                                            </div>'),t.cache[n]=i,a(i)},function(t){return e(t)})}).then(function(n){W(n,function(n,a){n?(t.page=null,t.error=n):t.setPage(a)})},function(){t.error="Failed loading page"})},immediate:!0}},methods:{setPage:function(t){var n=this;document.title=""+this.$parent.page.split("-").map(s.a.util.ucfirst).join(" "),function(t,n){t.innerHTML="";var a=document.createRange();a.selectNode(t),t.appendChild(a.createContextualFragment(n))}(this.$refs.container,t),this.$parent.ids=J('> h2 a[href^="#"]',this.$refs.container).reduce(function(t,n){return t[n.innerText]=Y(n,"href").substr(1),t},{});var a=this.$route.params.href;a&&B("#"+a)?scrollTo(0,I(B("#"+a)).top-100):scrollTo(0,0),setTimeout(function(){return J("pre code",n.$refs.container).forEach(function(t){return y.a.highlightBlock(t)})})}}},T={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[this.error?n("div",{staticClass:"uk-alert uk-alert-danger"},[this._v(this._s(this.error))]):this._e(),this._v(" "),n("div",{ref:"container"})])},staticRenderFns:[]},Z=a("VU/8")(V,T,!1,null,null,null).exports;function X(){var t=window.dataLayer;t||(t=[],window.dataLayer=t);for(var n=arguments.length,a=Array(n),e=0;e<n;e++)a[e]=arguments[e];t.push(a)}e.a.config.productionTip=!1,e.a.use(c.a),e.a.component("navbar",Q),e.a.component("codepane",E),e.a.component("markdownpage",Z),s.a.use(o.a),new e.a({el:"#app",router:x,components:{App:A,Navbar:Q},template:"<App/>"}),function(t){var n,a,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};X("js",new Date),X("config",t,e),n="https://www.googletagmanager.com/gtag/js?id="+t,(a=document.createElement("script")).src=n,a.async=!0,document.head.appendChild(a)}("UA-130052649-1",{anonymize_ip:!0})},VzCc:function(t,n){t.exports="data:image/png;base64,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"},Y2gL:function(t,n){},qaNP:function(t,n){t.exports={jk:{latestVersion:"0.2.2"}}},rr5i:function(t,n){t.exports={"Getting started":{"Quick start":"quick-start"},"Standard library":{"std.log":"std-log","std.write":"std-write","std.read":"std-read"}}}},["NHnr"]);
//# sourceMappingURL=app.efbcac4837ad144f786b.js.map