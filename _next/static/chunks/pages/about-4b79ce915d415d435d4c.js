(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{1197:function(e){e.exports={attributes:{_dbMeta:{lastModifiedDate:"2021-07-22",title:"About Us | Notiflix",description:"About Us Description",robots:"noindex, nofollow, noodp, noydir",ogImage:null,themeColor:null},_dbContent:[{isActive:!0,title:"Title 1",subtitle:"SubTitle 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"/content/images/nature.jpeg"},{isActive:!0,title:"Title 2",subtitle:"SubTitle 2.",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"/content/images/nature.jpeg"}]},html:""}},6042:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return v}});var i=s(5893),n=s(809),r=s.n(n);function l(e,t,s,i,n,r,l){try{var o=e[r](l),a=o.value}catch(h){return void s(h)}o.done?t(a):Promise.resolve(a).then(i,n)}var o=s(1664),a=s(1163);class h{constructor(e,t=""){this.source=e.source,this.flags=t}setGroup(e,t){let s="string"==typeof t?t:t.source;return s=s.replace(/(^|[^\[])\^/g,"$1"),this.source=this.source.replace(e,s),this}getRegexp(){return new RegExp(this.source,this.flags)}}const u=/[&<>"']/,c=/[&<>"']/g,p={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},g=/[<>"']|&(?!#?\w+;)/,d=/[<>"']|&(?!#?\w+;)/g;function m(e,t){if(t){if(u.test(e))return e.replace(c,(e=>p[e]))}else if(g.test(e))return e.replace(d,(e=>p[e]));return e}function f(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,(function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))}var b;!function(e){e[e.space=1]="space",e[e.text=2]="text",e[e.paragraph=3]="paragraph",e[e.heading=4]="heading",e[e.listStart=5]="listStart",e[e.listEnd=6]="listEnd",e[e.looseItemStart=7]="looseItemStart",e[e.looseItemEnd=8]="looseItemEnd",e[e.listItemStart=9]="listItemStart",e[e.listItemEnd=10]="listItemEnd",e[e.blockquoteStart=11]="blockquoteStart",e[e.blockquoteEnd=12]="blockquoteEnd",e[e.code=13]="code",e[e.table=14]="table",e[e.html=15]="html",e[e.hr=16]="hr"}(b||(b={}));class x{constructor(e){this.options=e||R.options}code(e,t,s,i){if(this.options.highlight){const i=this.options.highlight(e,t);null!=i&&i!==e&&(s=!0,e=i)}const n=s?e:this.options.escape(e,!0);if(!t)return`\n<pre><code>${n}\n</code></pre>\n`;return`\n<pre><code class="${this.options.langPrefix+this.options.escape(t,!0)}">${n}\n</code></pre>\n`}blockquote(e){return`<blockquote>\n${e}</blockquote>\n`}html(e){return e}heading(e,t,s){return`<h${t} id="${this.options.headerPrefix+s.toLowerCase().replace(/[^\w]+/g,"-")}">${e}</h${t}>\n`}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t){const s=t?"ol":"ul";return`\n<${s}>\n${e}</${s}>\n`}listitem(e){return"<li>"+e+"</li>\n"}paragraph(e){return"<p>"+e+"</p>\n"}table(e,t){return`\n<table>\n<thead>\n${e}</thead>\n<tbody>\n${t}</tbody>\n</table>\n`}tablerow(e){return"<tr>\n"+e+"</tr>\n"}tablecell(e,t){const s=t.header?"th":"td";return(t.align?"<"+s+' style="text-align:'+t.align+'">':"<"+s+">")+e+"</"+s+">\n"}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,s){if(this.options.sanitize){let t;try{t=decodeURIComponent(this.options.unescape(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(n){return s}if(0===t.indexOf("javascript:")||0===t.indexOf("vbscript:")||0===t.indexOf("data:"))return s}let i='<a href="'+e+'"';return t&&(i+=' title="'+t+'"'),i+=">"+s+"</a>",i}image(e,t,s){let i='<img src="'+e+'" alt="'+s+'"';return t&&(i+=' title="'+t+'"'),i+=this.options.xhtml?"/>":">",i}text(e){return e}}class k{constructor(e,t,s=R.options,i){if(this.staticThis=e,this.links=t,this.options=s,this.renderer=i||this.options.renderer||new x(this.options),!this.links)throw new Error("InlineLexer requires 'links' parameter.");this.setRules()}static output(e,t,s){return new this(this,t,s).output(e)}static getRulesBase(){if(this.rulesBase)return this.rulesBase;const e={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ <>]+(@|:\/)[^ <>]+)>/,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^<'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)([\s\S]*?[^`])\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/,_inside:/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,_href:/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/};return e.link=new h(e.link).setGroup("inside",e._inside).setGroup("href",e._href).getRegexp(),e.reflink=new h(e.reflink).setGroup("inside",e._inside).getRegexp(),this.rulesBase=e}static getRulesPedantic(){return this.rulesPedantic?this.rulesPedantic:this.rulesPedantic=Object.assign(Object.assign({},this.getRulesBase()),{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/})}static getRulesGfm(){if(this.rulesGfm)return this.rulesGfm;const e=this.getRulesBase(),t=new h(e.escape).setGroup("])","~|])").getRegexp(),s=new h(e.text).setGroup("]|","~]|").setGroup("|","|https?://|").getRegexp();return this.rulesGfm=Object.assign(Object.assign({},e),{escape:t,url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:s})}static getRulesBreaks(){if(this.rulesBreaks)return this.rulesBreaks;const e=this.getRulesGfm(),t=this.getRulesGfm();return this.rulesBreaks=Object.assign(Object.assign({},t),{br:new h(e.br).setGroup("{2,}","*").getRegexp(),text:new h(t.text).setGroup("{2,}","*").getRegexp()})}setRules(){this.options.gfm?this.options.breaks?this.rules=this.staticThis.getRulesBreaks():this.rules=this.staticThis.getRulesGfm():this.options.pedantic?this.rules=this.staticThis.getRulesPedantic():this.rules=this.staticThis.getRulesBase(),this.hasRulesGfm=void 0!==this.rules.url}output(e){let t;e=e;let s="";for(;e;)if(t=this.rules.escape.exec(e))e=e.substring(t[0].length),s+=t[1];else if(t=this.rules.autolink.exec(e)){let i,n;e=e.substring(t[0].length),"@"===t[2]?(i=this.options.escape(":"===t[1].charAt(6)?this.mangle(t[1].substring(7)):this.mangle(t[1])),n=this.mangle("mailto:")+i):(i=this.options.escape(t[1]),n=i),s+=this.renderer.link(n,null,i)}else if(!this.inLink&&this.hasRulesGfm&&(t=this.rules.url.exec(e))){let i,n;e=e.substring(t[0].length),i=this.options.escape(t[1]),n=i,s+=this.renderer.link(n,null,i)}else if(t=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(t[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(t[0])&&(this.inLink=!1),e=e.substring(t[0].length),s+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):this.options.escape(t[0]):t[0];else if(t=this.rules.link.exec(e))e=e.substring(t[0].length),this.inLink=!0,s+=this.outputLink(t,{href:t[2],title:t[3]}),this.inLink=!1;else if((t=this.rules.reflink.exec(e))||(t=this.rules.nolink.exec(e))){e=e.substring(t[0].length);const i=(t[2]||t[1]).replace(/\s+/g," "),n=this.links[i.toLowerCase()];if(!n||!n.href){s+=t[0].charAt(0),e=t[0].substring(1)+e;continue}this.inLink=!0,s+=this.outputLink(t,n),this.inLink=!1}else if(t=this.rules.strong.exec(e))e=e.substring(t[0].length),s+=this.renderer.strong(this.output(t[2]||t[1]));else if(t=this.rules.em.exec(e))e=e.substring(t[0].length),s+=this.renderer.em(this.output(t[2]||t[1]));else if(t=this.rules.code.exec(e))e=e.substring(t[0].length),s+=this.renderer.codespan(this.options.escape(t[2].trim(),!0));else if(t=this.rules.br.exec(e))e=e.substring(t[0].length),s+=this.renderer.br();else if(this.hasRulesGfm&&(t=this.rules.del.exec(e)))e=e.substring(t[0].length),s+=this.renderer.del(this.output(t[1]));else if(t=this.rules.text.exec(e))e=e.substring(t[0].length),s+=this.renderer.text(this.options.escape(this.smartypants(t[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return s}outputLink(e,t){const s=this.options.escape(t.href),i=t.title?this.options.escape(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(s,i,this.output(e[1])):this.renderer.image(s,i,this.options.escape(e[1]))}smartypants(e){return this.options.smartypants?e.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201c").replace(/"/g,"\u201d").replace(/\.{3}/g,"\u2026"):e}mangle(e){if(!this.options.mangle)return e;let t="";const s=e.length;for(let i=0;i<s;i++){let s;Math.random()>.5&&(s="x"+e.charCodeAt(i).toString(16)),t+="&#"+s+";"}return t}}k.rulesBase=null,k.rulesPedantic=null,k.rulesGfm=null,k.rulesBreaks=null;class w{constructor(e){this.simpleRenderers=[],this.line=0,this.tokens=[],this.token=null,this.options=e||R.options,this.renderer=this.options.renderer||new x(this.options)}static parse(e,t,s){return new this(s).parse(t,e)}parse(e,t){this.inlineLexer=new k(k,e,this.options,this.renderer),this.tokens=t.reverse();let s="";for(;this.next();)s+=this.tok();return s}debug(e,t){this.inlineLexer=new k(k,e,this.options,this.renderer),this.tokens=t.reverse();let s="";for(;this.next();){const e=this.tok();this.token.line=this.line+=e.split("\n").length-1,s+=e}return s}next(){return this.token=this.tokens.pop()}getNextElement(){return this.tokens[this.tokens.length-1]}parseText(){let e,t=this.token.text;for(;(e=this.getNextElement())&&e.type==b.text;)t+="\n"+this.next().text;return this.inlineLexer.output(t)}tok(){switch(this.token.type){case b.space:return"";case b.paragraph:return this.renderer.paragraph(this.inlineLexer.output(this.token.text));case b.text:return this.options.isNoP?this.parseText():this.renderer.paragraph(this.parseText());case b.heading:return this.renderer.heading(this.inlineLexer.output(this.token.text),this.token.depth,this.token.text);case b.listStart:{let e="";const t=this.token.ordered;for(;this.next().type!=b.listEnd;)e+=this.tok();return this.renderer.list(e,t)}case b.listItemStart:{let e="";for(;this.next().type!=b.listItemEnd;)e+=this.token.type==b.text?this.parseText():this.tok();return this.renderer.listitem(e)}case b.looseItemStart:{let e="";for(;this.next().type!=b.listItemEnd;)e+=this.tok();return this.renderer.listitem(e)}case b.code:return this.renderer.code(this.token.text,this.token.lang,this.token.escaped,this.token.meta);case b.table:{let e,t="",s="";e="";for(let i=0;i<this.token.header.length;i++){const t={header:!0,align:this.token.align[i]},s=this.inlineLexer.output(this.token.header[i]);e+=this.renderer.tablecell(s,t)}t+=this.renderer.tablerow(e);for(const i of this.token.cells){e="";for(let t=0;t<i.length;t++)e+=this.renderer.tablecell(this.inlineLexer.output(i[t]),{header:!1,align:this.token.align[t]});s+=this.renderer.tablerow(e)}return this.renderer.table(t,s)}case b.blockquoteStart:{let e="";for(;this.next().type!=b.blockquoteEnd;)e+=this.tok();return this.renderer.blockquote(e)}case b.hr:return this.renderer.hr();case b.html:{const e=this.token.pre||this.options.pedantic?this.token.text:this.inlineLexer.output(this.token.text);return this.renderer.html(e)}default:{if(this.simpleRenderers.length)for(let t=0;t<this.simpleRenderers.length;t++)if(this.token.type=="simpleRule"+(t+1))return this.simpleRenderers[t].call(this.renderer,this.token.execArr);const e=`Token with "${this.token.type}" type was not found.`;if(!this.options.silent)throw new Error(e);console.log(e)}}}}class R{static setOptions(e){return Object.assign(this.options,e),this}static setBlockRule(e,t=(()=>"")){return _.simpleRules.push(e),this.simpleRenderers.push(t),this}static parse(e,t=this.options){try{const{tokens:s,links:i}=this.callBlockLexer(e,t);return this.callParser(s,i,t)}catch(s){return this.callMe(s)}}static debug(e,t=this.options){const{tokens:s,links:i}=this.callBlockLexer(e,t);let n=s.slice();const r=new w(t);r.simpleRenderers=this.simpleRenderers;const l=r.debug(i,s);return n=n.map((e=>{e.type=b[e.type]||e.type;const t=e.line;return delete e.line,t?Object.assign({line:t},e):e})),{tokens:n,links:i,result:l}}static callBlockLexer(e="",t){if("string"!=typeof e)throw new Error(`Expected that the 'src' parameter would have a 'string' type, got '${typeof e}'`);return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n").replace(/^ +$/gm,""),_.lex(e,t,!0)}static callParser(e,t,s){if(this.simpleRenderers.length){const i=new w(s);return i.simpleRenderers=this.simpleRenderers,i.parse(t,e)}return w.parse(e,t,s)}static callMe(e){if(e.message+="\nPlease report this to https://github.com/ts-stack/markdown",this.options.silent)return"<p>An error occured:</p><pre>"+this.options.escape(e.message+"",!0)+"</pre>";throw e}}R.options=new class{constructor(){this.gfm=!0,this.tables=!0,this.breaks=!1,this.pedantic=!1,this.sanitize=!1,this.mangle=!0,this.smartLists=!1,this.silent=!1,this.langPrefix="lang-",this.smartypants=!1,this.headerPrefix="",this.xhtml=!1,this.escape=m,this.unescape=f}},R.simpleRenderers=[];class _{constructor(e,t){this.staticThis=e,this.links={},this.tokens=[],this.options=t||R.options,this.setRules()}static lex(e,t,s,i){return new this(this,t).getTokens(e,s,i)}static getRulesBase(){if(this.rulesBase)return this.rulesBase;const e={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/,bullet:/(?:[*+-]|\d+\.)/,item:/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/};e.item=new h(e.item,"gm").setGroup(/bull/g,e.bullet).getRegexp(),e.list=new h(e.list).setGroup(/bull/g,e.bullet).setGroup("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))").setGroup("def","\\n+(?="+e.def.source+")").getRegexp();const t="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";return e.html=new h(e.html).setGroup("comment",/<!--[\s\S]*?-->/).setGroup("closed",/<(tag)[\s\S]+?<\/\1>/).setGroup("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/).setGroup(/tag/g,t).getRegexp(),e.paragraph=new h(e.paragraph).setGroup("hr",e.hr).setGroup("heading",e.heading).setGroup("lheading",e.lheading).setGroup("blockquote",e.blockquote).setGroup("tag","<"+t).setGroup("def",e.def).getRegexp(),this.rulesBase=e}static getRulesGfm(){if(this.rulesGfm)return this.rulesGfm;const e=this.getRulesBase(),t=Object.assign(Object.assign({},e),{fences:/^ *(`{3,}|~{3,})[ \.]*((\S+)? *[^\n]*)\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),s=t.fences.source.replace("\\1","\\2"),i=e.list.source.replace("\\1","\\3");return t.paragraph=new h(e.paragraph).setGroup("(?!",`(?!${s}|${i}|`).getRegexp(),this.rulesGfm=t}static getRulesTable(){return this.rulesTables?this.rulesTables:this.rulesTables=Object.assign(Object.assign({},this.getRulesGfm()),{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/})}setRules(){this.options.gfm?this.options.tables?this.rules=this.staticThis.getRulesTable():this.rules=this.staticThis.getRulesGfm():this.rules=this.staticThis.getRulesBase(),this.hasRulesGfm=void 0!==this.rules.fences,this.hasRulesTables=void 0!==this.rules.table}getTokens(e,t,s){let i,n=e;e:for(;n;)if((i=this.rules.newline.exec(n))&&(n=n.substring(i[0].length),i[0].length>1&&this.tokens.push({type:b.space})),i=this.rules.code.exec(n)){n=n.substring(i[0].length);const e=i[0].replace(/^ {4}/gm,"");this.tokens.push({type:b.code,text:this.options.pedantic?e:e.replace(/\n+$/,"")})}else if(this.hasRulesGfm&&(i=this.rules.fences.exec(n)))n=n.substring(i[0].length),this.tokens.push({type:b.code,meta:i[2],lang:i[3],text:i[4]||""});else if(i=this.rules.heading.exec(n))n=n.substring(i[0].length),this.tokens.push({type:b.heading,depth:i[1].length,text:i[2]});else if(t&&this.hasRulesTables&&(i=this.rules.nptable.exec(n))){n=n.substring(i[0].length);const e={type:b.table,header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:[]};for(let s=0;s<e.align.length;s++)/^ *-+: *$/.test(e.align[s])?e.align[s]="right":/^ *:-+: *$/.test(e.align[s])?e.align[s]="center":/^ *:-+ *$/.test(e.align[s])?e.align[s]="left":e.align[s]=null;const t=i[3].replace(/\n$/,"").split("\n");for(let s=0;s<t.length;s++)e.cells[s]=t[s].split(/ *\| */);this.tokens.push(e)}else if(i=this.rules.lheading.exec(n))n=n.substring(i[0].length),this.tokens.push({type:b.heading,depth:"="===i[2]?1:2,text:i[1]});else if(i=this.rules.hr.exec(n))n=n.substring(i[0].length),this.tokens.push({type:b.hr});else if(i=this.rules.blockquote.exec(n)){n=n.substring(i[0].length),this.tokens.push({type:b.blockquoteStart});const e=i[0].replace(/^ *> ?/gm,"");this.getTokens(e),this.tokens.push({type:b.blockquoteEnd})}else if(i=this.rules.list.exec(n)){n=n.substring(i[0].length);const e=i[2];this.tokens.push({type:b.listStart,ordered:e.length>1});const t=i[0].match(this.rules.item),r=t.length;let l,o,a,h=!1;for(let i=0;i<r;i++){let u=t[i];l=u.length,u=u.replace(/^ *([*+-]|\d+\.) +/,""),-1!==u.indexOf("\n ")&&(l-=u.length,u=this.options.pedantic?u.replace(/^ {1,4}/gm,""):u.replace(new RegExp("^ {1,"+l+"}","gm"),"")),this.options.smartLists&&i!==r-1&&(o=this.staticThis.getRulesBase().bullet.exec(t[i+1])[0],e===o||e.length>1&&o.length>1||(n=t.slice(i+1).join("\n")+n,i=r-1)),a=h||/\n\n(?!\s*$)/.test(u),i!==r-1&&(h="\n"===u.charAt(u.length-1),a||(a=h)),this.tokens.push({type:a?b.looseItemStart:b.listItemStart}),this.getTokens(u,!1,s),this.tokens.push({type:b.listItemEnd})}this.tokens.push({type:b.listEnd})}else if(i=this.rules.html.exec(n)){n=n.substring(i[0].length);const e=i[1],t="pre"===e||"script"===e||"style"===e;this.tokens.push({type:this.options.sanitize?b.paragraph:b.html,pre:!this.options.sanitizer&&t,text:i[0]})}else if(t&&(i=this.rules.def.exec(n)))n=n.substring(i[0].length),this.links[i[1].toLowerCase()]={href:i[2],title:i[3]};else if(t&&this.hasRulesTables&&(i=this.rules.table.exec(n))){n=n.substring(i[0].length);const e={type:b.table,header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:[]};for(let s=0;s<e.align.length;s++)/^ *-+: *$/.test(e.align[s])?e.align[s]="right":/^ *:-+: *$/.test(e.align[s])?e.align[s]="center":/^ *:-+ *$/.test(e.align[s])?e.align[s]="left":e.align[s]=null;const t=i[3].replace(/(?: *\| *)?\n$/,"").split("\n");for(let s=0;s<t.length;s++)e.cells[s]=t[s].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(e)}else{if(this.staticThis.simpleRules.length){const e=this.staticThis.simpleRules;for(let t=0;t<e.length;t++)if(i=e[t].exec(n)){n=n.substring(i[0].length);const e="simpleRule"+(t+1);this.tokens.push({type:e,execArr:i});continue e}}if(t&&(i=this.rules.paragraph.exec(n)))n=n.substring(i[0].length),"\n"===i[1].slice(-1)?this.tokens.push({type:b.paragraph,text:i[1].slice(0,-1)}):this.tokens.push({type:this.tokens.length>0?b.paragraph:b.text,text:i[1]});else if(i=this.rules.text.exec(n))n=n.substring(i[0].length),this.tokens.push({type:b.text,text:i[0]});else if(n)throw new Error("Infinite loop on byte: "+n.charCodeAt(0)+`, near text '${n.slice(0,30)}...'`)}return{tokens:this.tokens,links:this.links}}}_.simpleRules=[],_.rulesBase=null,_.rulesGfm=null,_.rulesTables=null;var y=s(1197),S=s(2741),$=s(3989),G=s.n($);var v=(0,a.withRouter)((function(){var e=y.attributes._dbMeta,t=y.attributes._dbContent;console.log(e),console.log(t);var s=function(){var e,t=(e=r().mark((function e(){var t,s,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.fetch("https://api.github.com/repos/notiflix/Notiflix/releases",{method:"get",headers:{Accept:"application/vnd.github.v3+json"}});case 3:if(!(t=e.sent).ok){e.next=14;break}return e.next=7,t.json();case 7:s=e.sent,console.log(s),console.log(s[0].body),i=R.parse(s[0].body),console.log(i),e.next=15;break;case 14:throw new Error("TEST");case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})),function(){var t=this,s=arguments;return new Promise((function(i,n){var r=e.apply(t,s);function o(e){l(r,i,n,o,a,"next",e)}function a(e){l(r,i,n,o,a,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,i.jsxs)(S.Z,{meta:e,classNamePrefix:"about",children:[(0,i.jsxs)("div",{className:G().temp,children:[(0,i.jsx)("h1",{className:"".concat(G().temp__title," ").concat(G()["state--active"]),children:"TODO: TEMP ABOUT"}),(0,i.jsx)("p",{children:"TODO: Will be removed"})]}),(0,i.jsx)(o.default,{href:"/",as:"".concat("https://notiflix.github.io","/"),passHref:!0,children:(0,i.jsx)("a",{children:"Go to Home"})}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("button",{type:"button",onClick:s,children:(0,i.jsx)("span",{children:"GET TAGS"})}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("img",{src:"https://notiflix.github.io/content/images/nature.jpeg",alt:"NATURE"})]})}))},5706:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return s(6042)}])},3989:function(e){e.exports={temp:"about_temp__1XY3z",temp__title:"about_temp__title__mQNva","state--active":"about_state--active__BfdZD"}}},function(e){e.O(0,[248,741,774,888,179],(function(){return t=5706,e(e.s=t);var t}));var t=e.O();_N_E=t}]);