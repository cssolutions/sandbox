﻿/*! JsRender v1.0.0-beta: http://github.com/BorisMoore/jsrender and http://jsviews.com/jsviews
informal pre V1.0 commit counter: 56 */
(function(n,t,i){"use strict";function ot(n){return n}function nr(n){return n}function bt(n){s._dbgMode=n;yt=n?"Unavailable (nested view): use #getIndex()":"";it("dbg",si.dbg=tt.dbg=n?nr:ot)}function st(n){this.name=(u.link?"JsViews":"JsRender")+" Error";this.message=n||this.name}function f(n,t){for(var i in t)n[i]=t[i];return n}function d(n){return typeof n=="function"}function kt(n,t,i){return(!o.rTag||n)&&(p=n?n.charAt(0):p,w=n?n.charAt(1):w,h=t?t.charAt(0):h,v=t?t.charAt(1):v,nt=i||nt,n="\\"+p+"(\\"+nt+")?\\"+w,t="\\"+h+"\\"+v,y="(?:(?:(\\w+(?=[\\/\\s\\"+h+"]))|(?:(\\w+)?(:)|(>)|!--((?:[^-]|-(?!-))*)--|(\\*)))\\s*((?:[^\\"+h+"]|\\"+h+"(?!\\"+v+"))*?)",o.rTag=y+")",y=new RegExp(n+y+"(\\/)?|(?:\\/(\\w+)))"+t,"g"),vt=new RegExp("<.*>|([^\\\\]|^)[{}]|"+n+".*"+t)),[p,w,h,v,nt]}function tr(n,t){t||(t=n,n=i);var e,f,o,u,r=this,s=!t||t==="root";if(n){if(u=r.type===t?r:i,!u)if(e=r.views,r._.useKey){for(f in e)if(u=e[f].get(n,t))break}else for(f=0,o=e.length;!u&&f<o;f++)u=e[f].get(n,t)}else if(s)while(r.parent.parent)u=r=r.parent;else while(r&&!u)u=r.type===t?r:i,r=r.parent;return u}function dt(){var n=this.get("item");return n?n.index:i}function gt(){return this.index}function ir(t){var u,e=this,o=e.linkCtx,r=(e.ctx||{})[t];return r===i&&o&&o.ctx&&(r=o.ctx[t]),r===i&&(r=si[t]),r&&d(r)&&!r._wrp&&(u=function(){return r.apply(!this||this===n?e:this,arguments)},u._wrp=1,f(u,r)),u||r}function rr(n,t,u){var f,e,c,s=+u===u&&u,h=t.linkCtx;if(s&&(u=(s=t.tmpl.bnds[s-1])(t.data,t,r)),e=u.args[0],n||s){f=h&&h.tag;f||(f={_:{inline:!h,bnd:s},tagName:":",cvt:n,flow:!0,tagCtx:u,_is:"tag"},h&&(h.tag=f,f.linkCtx=h,u.ctx=a(u.ctx,h.view.ctx)),o._lnk(f));for(c in u.props)ft.test(c)&&(f[c]=u.props[c]);u.view=t;f.ctx=u.ctx||{};delete u.ctx;t._.tag=f;e=ht(f,f.convert||n!=="true"&&n)[0];e=s&&t._.onRender?t._.onRender(e,t,s):e;t._.tag=i}return e!=i?e:""}function ht(n,t){var r=n.tagCtx,u=r.view,i=r.args;return t=t&&(""+t===t?u.getRsc("converters",t)||c("Unknown converter: '"+t+"'"):t),i=!i.length&&!r.index?[u.data]:t?i.slice():i,t&&(t.depends&&(n.depends=o.getDeps(n.depends,n,t.depends,t)),i[0]=t.apply(n,i)),i}function ur(n,t){for(var f,e,u=this;f===i&&u;)e=u.tmpl[n],f=e&&e[t],u=u.parent;return f||r[n][t]}function fr(n,t,u,s,h){var lt,l,pt,at,et,y,vt,d,v,ot,rt,wt,g,yt,bt,k,p,st,it,kt,nt="",ct=+s===s&&s,w=t.linkCtx||0,ut=t.ctx,dt=u||t.tmpl;for(n._is==="tag"&&(l=n,n=l.tagName,s=l.tagCtxs),l=l||w.tag,ct&&(s=(wt=dt.bnds[ct-1])(t.data,t,r)),vt=s.length,y=0;y<vt;y++){if(y||u&&l||(g=t.getRsc("tags",n)||c("Unknown tag: {{"+n+"}}")),v=s[y],w.tag||(rt=v.tmpl,rt=v.content=rt&&dt.tmpls[rt-1],f(v,{tmpl:(l?l:g).template||rt,render:ui,index:y,view:t,ctx:a(v.ctx,ut)})),(u=v.props.tmpl)&&(u=""+u===u?t.getRsc("templates",u)||e(u):u,v.tmpl=u),l||(g._ctr?(l=new g._ctr,yt=!!l.init,l.attr=l.attr||g.attr||i):o._lnk(l={render:g.render}),l._={inline:!w},w&&(w.attr=l.attr=w.attr||l.attr,w.tag=l,l.linkCtx=w),(l._.bnd=wt||w.fn)?l._.arrVws={}:l.dataBoundOnly&&c("{^{"+n+"}} tag must be data-bound"),l.tagName=n,l.parent=et=ut&&ut.tag,l._is="tag",l._def=g,l.tagCtxs=s),!y)for(st in it=v.props)ft.test(st)&&(l[st]=it[st]);v.tag=l;l.dataMap&&l.tagCtxs&&(v.map=l.tagCtxs[y].map);l.flow||(ot=v.ctx=v.ctx||{},pt=l.parents=ot.parentTags=ut&&a(ot.parentTags,ut.parentTags)||{},et&&(pt[et.tagName]=et),ot.tag=l)}for(t._.tag=l,l.rendering={},y=0;y<vt;y++)v=l.tagCtx=l.tagCtxs[y],it=v.props,p=ht(l,l.convert),(bt=it.dataMap||l.dataMap)&&(p.length||it.dataMap)&&(k=v.map,(!k||k.src!==p[0]||h)&&(k&&k.src&&k.unmap(),k=v.map=bt.map(p[0],it)),p=[k.tgt]),l.ctx=v.ctx,!y&&yt&&(kt=l.template,l.init(v,w,l.ctx),yt=i,l.template!==kt&&(l._.tmpl=l.template)),d=i,lt=l.render,(lt=l.render)&&(d=lt.apply(l,p)),p=p.length?p:[t],d=d!==i?d:v.render(p[0],!0)||(h?i:""),nt=nt?nt+(d||""):d;return delete l.rendering,l.tagCtx=l.tagCtxs[0],l.ctx=l.tagCtx.ctx,l._.inline&&(at=l.attr)&&at!==b&&(nt=at==="text"?tt.html(nt):""),ct&&t._.onRender?t._.onRender(nt,t,ct):nt}function g(n,t,i,r,u,f,e,o){var a,h,c,s=this,v=t==="array",l={key:0,useKey:v?0:1,id:""+gi++,onRender:o,bnds:{}};s.data=r;s.tmpl=u;s.content=e;s.views=v?[]:{};s.parent=i;s.type=t;s._=l;s.linked=!!o;i?(a=i.views,h=i._,h.useKey?(a[l.key="_"+h.useKey++]=s,s.index=yt,s.getIndex=dt,c=h.tag,l.bnd=v&&(!c||!!c._.bnd&&c)):a.splice(l.key=s.index=f,0,s),s.ctx=n||i.ctx):s.ctx=n}function er(n){var i,r,t,u,e,f,s;for(i in k)if(e=k[i],(f=e.compile)&&(r=n[i+"s"]))for(t in r)u=r[t]=f(t,r[t],n),u&&(s=o.onStore[i])&&s(t,u,f)}function or(n,t,r){var o,u;return d(t)?t={depends:t.depends,render:t}:(t.baseTag&&(t.flow=!!t.flow,t=f(f({},t.baseTag),t)),(u=t.template)!==i&&(t.template=""+u===u?e[u]||e(u):u),t.init!==!1&&(o=t._ctr=function(){},(o.prototype=t).constructor=o)),r&&(t._parentTmpl=r),t}function ni(r,u,f,o){function c(u){if(""+u===u||u.nodeType>0){try{h=u.nodeType>0?u:!vt.test(u)&&t&&t(n.document).find(u)[0]}catch(s){}return h&&(u=e[r=r||h.getAttribute(et)],u||(r=r||"_"+di++,h.setAttribute(et,r),u=e[r]=ni(r,h.innerHTML,f,o)),h=i),u}}var s,h;return u=u||"",s=c(u),o=o||(u.markup?u:{}),o.tmplName=r,f&&(o._parentTmpl=f),!s&&u.markup&&(s=c(u.markup))&&s.fn&&(s.debug!==u.debug||s.allowCode!==u.allowCode)&&(s=s.markup),s!==i?(r&&!f&&(wt[r]=function(){return u.render.apply(u,arguments)}),s.fn||u.fn?s.fn&&(u=r&&r!==s.tmplName?a(o,s):s):(u=ii(s,o),lt(s.replace(vi,"\\$&"),u)),er(o),u):void 0}function ti(n){function t(t,i){this.tgt=n.getTgt(t,i)}return d(n)&&(n={getTgt:n}),n.baseMap&&(n=f(f({},n.baseMap),n)),n.map=function(n,i){return new t(n,i)},n}function ii(n,t){var i,e=s.wrapMap||{},r=f({markup:n,tmpls:[],links:{},tags:{},bnds:[],_is:"template",render:ri},t);return t.htmlTag||(i=wi.exec(n),r.htmlTag=i?i[1].toLowerCase():""),i=e[r.htmlTag],i&&i!==e.div&&(r.markup=u.trim(r.markup)),r}function sr(n,t){function u(e,s,h){var v,c,l,a;if(e&&typeof e=="object"&&!e.nodeType&&!e.markup&&!e.getTgt){for(l in e)u(l,e[l],s);return r}return s===i&&(s=e,e=i),e&&""+e!==e&&(h=s,s=e,e=i),a=h?h[f]=h[f]||{}:u,c=t.compile,s===null?e&&delete a[e]:(s=c?s=c(e,s,h):s,e&&(a[e]=s)),c&&s&&(s._is=n),s&&(v=o.onStore[n])&&v(e,s,c),s}var f=n+"s";r[f]=u;k[n]=t}function hr(n,t){var i=this.jquery&&(this[0]||c('Unknown template: "'+this.selector+'"')),r=i.getAttribute(et);return ri.call(r?e[r]:e(i),n,t)}function ct(n,t,i){if(s._dbgMode)try{return n.fn(t,i,r)}catch(u){return c(u,i)}return n.fn(t,i,r)}function ri(n,t,i,r,f,e){var o=this;return!r&&o.fn._nvw&&!u.isArray(n)?ct(o,n,{tmpl:o}):ui.call(o,n,t,i,r,f,e)}function ui(n,t,r,f,o,s){var y,ut,d,l,nt,tt,it,p,v,rt,w,ft,h,et,c=this,k="";if(!!t===t&&(r=t,t=i),o===!0&&(it=!0,o=0),c.tag?(p=c,c=c.tag,rt=c._,ft=c.tagName,h=rt.tmpl||p.tmpl,et=c.attr&&c.attr!==b,t=a(t,c.ctx),v=p.content,p.props.link===!1&&(t=t||{},t.link=!1),f=f||p.view,n=arguments.length?n:f):h=c,h&&(!f&&n&&n._is==="view"&&(f=n),f&&(v=v||f.content,s=s||f._.onRender,n===f&&(n=f.data),t=a(t,f.ctx)),f&&f.data!==i||((t=t||{}).root=n),h.fn||(h=e[h]||e(h)),h)){if(s=(t&&t.link)!==!1&&!et&&s,w=s,s===!0&&(w=i,s=f._.onRender),t=h.helpers?a(h.helpers,t):t,u.isArray(n)&&!r)for(l=it?f:o!==i&&f||new g(t,"array",f,n,h,o,v,s),y=0,ut=n.length;y<ut;y++)d=n[y],nt=new g(t,"item",l,d,h,(o||0)+y,v,s),tt=ct(h,d,nt),k+=l._.onRender?l._.onRender(tt,nt):tt;else(f||!h.fn._nvw)&&(l=it?f:new g(t,ft||"data",f,n,h,o,v,s),rt&&!c.flow&&(l.tag=c)),k+=ct(h,n,l);return w?w(k,l):k}return""}function c(n,t,i){var r=s.onError(n,t,i);if(""+n===n)throw new o.Err(r);return!t.linkCtx&&t.linked?tt.html(r):r}function l(n){c("Syntax error\n"+n)}function lt(n,t,i,r){function k(t){t-=f;t&&h.push(n.substr(f,t).replace(ut,"\\n"))}function c(t){t&&l('Unmatched or missing tag: "{{/'+t+'}}" in template:\n'+n)}function d(e,o,v,y,p,d,nt,tt,it,rt,et,ot){d&&(p=":",y=b);rt=rt||i;var st=(o||i)&&[],ct="",lt="",at="",vt="",yt="",pt="",wt="",bt="",ht=!rt&&!p&&!nt;v=v||(it=it||"#data",p);k(ot);f=ot+e.length;tt?g&&h.push(["*","\n"+it.replace(ai,"$1")+"\n"]):v?(v==="else"&&(pi.test(it)&&l('for "{{else if expr}}" use "{{else expr}}"'),st=u[7],u[8]=n.substring(u[8],ot),u=s.pop(),h=u[2],ht=!0),it&&oi(it.replace(ut," "),st,t).replace(yi,function(n,t,i,r,u,f,e,o){return e?(lt+=f+",",vt+="'"+o+"',"):i?(at+=r+f+",",pt+=r+"'"+o+"',"):t?wt+=f:(u==="trigger"&&(bt+=f),ct+=r+f+",",yt+=r+"'"+o+"',",w=w||ft.test(u)),""}).slice(0,-1),a=[v,y||!!r||w||"",ht&&[],fi(vt,yt,pt),fi(lt,ct,at),wt,bt,st||0],h.push(a),ht&&(s.push(u),u=a,u[8]=f)):et&&(c(et!==u[0]&&u[0]!=="else"&&et),u[8]=n.substring(u[8],ot),u=s.pop());c(!u&&et);h=u[2]}var o,a,w,g=t&&t.allowCode,e=[],f=0,s=[],h=e,u=[,,e];return i&&(n=p+n+v),c(s[0]&&s[0][2].pop()[0]),n.replace(y,d),k(n.length),(f=e[e.length-1])&&c(""+f!==f&&+f[8]===f[8]&&f[0]),i?(o=at(e,n,i),o.paths=e[0][7]):o=at(e,t),o._nvw&&(o._nvw=!/[~#]/.test(n)),o}function fi(n,t,i){return[n.slice(0,-1),t.slice(0,-1),i.slice(0,-1)]}function ei(n,t){return"\n\t"+(t?t+":{":"")+"args:["+n[0]+"]"+(n[1]||!t?",\n\tprops:{"+n[1]+"}":"")+(n[2]?",\n\tctx:{"+n[2]+"}":"")}function oi(n,t,i){function p(p,b,k,d,g,nt,tt,it,rt,ut,ft,et,ot,st,ht,ct,at,vt,yt,pt){function dt(n,i,r,f,e,s,h,l){if(r&&(t&&(u==="linkTo"&&(o=t._jsvto=t._jsvto||[],o.push(g)),(!u||c)&&t.push(g.slice(i.length))),r!==".")){var a=(f?'view.hlp("'+f+'")':e?"view":"data")+(l?(s?"."+s:f?"":e?"":"."+r)+(h||""):(l=f?"":e?s||"":r,""));return a=a+(l?"."+l:""),i+(a.slice(0,9)==="view.data"?a.slice(5):a)}return n}nt=nt||"";k=k||b||et;g=g||rt;ut=ut||at||"";var bt,kt,wt;if(!tt||e||f)return t&&ct&&!e&&!f&&(!u||c||o)&&(bt=y[r],pt.length-1>yt-bt&&(bt=pt.slice(bt,yt+1),ct=w+":"+bt+h,wt=v[ct],wt||(v[ct]=1,v[ct]=wt=lt(ct,i||t,!0),wt.paths.push({_jsvOb:wt})),wt!==1&&(o||t).push({_jsvOb:wt}))),e?(e=!ot,e?p:'"'):f?(f=!st,f?p:'"'):(k?(r++,y[r]=yt++,k):"")+(vt?r?"":(s=pt.slice(s,yt),u?(u=c=o=!1,"\b"):"\b,")+s+(s=yt+p.length,"\b"):it?(r&&l(n),u=g,c=d,s=yt+p.length,g+":"):g?g.split("^").join(".").replace(ci,dt)+(ut?(a[++r]=!0,g.charAt(0)!=="."&&(y[r]=yt),kt?"":ut):nt):nt?nt:ht?(a[r--]=!1,ht)+(ut?(a[++r]=!0,ut):""):ft?(a[r]||l(n),","):b?"":(e=ot,f=st,'"'));l(n)}var u,o,c,f,e,s=0,v=i?i.links:t&&(t.links=t.links||{}),a={},y={0:-1},r=0;return(n+(i?" ":"")).replace(/\)\^/g,").").replace(li,p)}function at(n,i,r){var y,f,e,c,d,ht,ct,bt,lt,g,rt,p,o,ft,et,v,nt,w,tt,vt,k,yt,pt,ot,s,a,st,wt,h=0,u="",it={},kt=n.length;for(""+i===i?(v=r?'data-link="'+i.replace(ut," ").slice(1,-1)+'"':i,i=0):(v=i.tmplName||"unnamed",i.allowCode&&(it.allowCode=!0),i.debug&&(it.debug=!0),p=i.bnds,et=i.tmpls),y=0;y<kt;y++)if(f=n[y],""+f===f)u+='\n+"'+f+'"';else if(e=f[0],e==="*")u+=";\n"+f[1]+"\nret=ret";else{if(c=f[1],tt=f[2],d=ei(f[3],"params")+"},"+ei(ft=f[4]),a=f[5],wt=f[6],vt=f[8],(pt=e==="else")||(h=0,p&&(o=f[7])&&(h=p.push(o))),(ot=e===":")?c&&(e=c===b?">":c+e):(tt&&(nt=ii(vt,it),nt.tmplName=v+"/"+e,at(tt,nt),et.push(nt)),pt||(w=e,yt=u,u=""),k=n[y+1],k=k&&k[0]==="else"),st=a?";\ntry{\nret+=":"\n+",ot&&(o||wt||c&&c!==b)){if(s="return {"+d+"};",a&&(s="try {\n"+s+"\n}catch(e){return {error: j._err(e,view,"+a+")}}\n"),s=new Function("data,view,j,u"," // "+v+" "+h+" "+e+"\n"+s),s.paths=o,s._tag=e,r)return s;rt=1}if(u+=ot?(r?(a?"\ntry{\n":"")+"return ":st)+(rt?(rt=0,g=lt=!0,'c("'+c+'",view,'+(o?(p[h-1]=s,h):"{"+d+"}")+")"):e===">"?(ct=!0,"h("+ft[0]+")"):(bt=!0,"((v="+ft[0]+')!=null?v:"")')):(g=ht=!0,"\n{view:view,tmpl:"+(tt?et.length:"0")+","+d+"},"),w&&!k){if(u="["+u.slice(0,-1)+"]",(r||o)&&(u=new Function("data,view,j,u"," // "+v+" "+h+" "+w+"\nreturn "+u+";"),o&&((p[h-1]=u).paths=o),u._tag=e,r))return u;u=yt+st+'t("'+w+'",view,this,'+(h||u)+")";o=0;w=0}a&&(g=!0,u+=";\n}catch(e){ret"+(r?"urn ":"+=")+"j._err(e,view,"+a+");}\n"+(r?"":"ret=ret"))}u="// "+v+"\nj=j||"+(t?"jQuery.":"jsviews.")+"views;var v"+(ht?",t=j._tag":"")+(lt?",c=j._cnvt":"")+(ct?",h=j.converters.html":"")+(r?";\n":',ret=""\n')+(it.debug?"debugger;":"")+u+(r?"\n":";\nreturn ret;");try{u=new Function("data,view,j,u",u)}catch(dt){l("Compiled template code:\n\n"+u+'\n: "'+dt.message+'"')}return i&&(i.fn=u),g||(u._nvw=!0),u}function a(n,t){return n&&n!==t?t?f(f({},t),n):n:t&&f({},t)}function cr(n){return pt[n]||(pt[n]="&#"+n.charCodeAt(0)+";")}function lr(n){var i,t,r=[];if(typeof n=="object")for(i in n)t=n[i],t&&t.toJSON&&!t.toJSON()||d(t)||r.push({key:i,prop:t});return r}function hi(n){return n!=null?bi.test(n)&&(""+n).replace(ki,cr)||n:""}if((!t||!t.render)&&!n.jsviews){var u,rt,y,vt,yt,p="{",w="{",h="}",v="}",nt="^",ci=/^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,li=/(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(!*?[#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*\.|\s*\^|\s*$)|[)\]])([([]?))|(\s+)/g,ut=/[ \t]*(\r\n|\n|\r)/g,ai=/\\(['"])/g,vi=/['"\\]/g,yi=/(?:\x08|^)(onerror:)?(?:(~?)(([\w$]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi,pi=/^if\s/,wi=/<(\w+)[>\s]/,bi=/[\x00`><\"'&]/,ft=/^on[A-Z]|^convert(Back)?$/,ki=/[\x00`><"'&]/g,di=0,gi=0,pt={"&":"&amp;","<":"&lt;",">":"&gt;","\x00":"&#0;","'":"&#39;",'"':"&#34;","`":"&#96;"},b="html",et="data-jsv-tmpl",wt={},k={template:{compile:ni},tag:{compile:or},helper:{},converter:{}},r={jsviews:"v1.0.0-beta",settings:function(n){f(s,n);bt(s._dbgMode);s.jsv&&s.jsv()},sub:{View:g,Err:st,tmplFn:lt,cvt:ht,parse:oi,extend:f,syntaxErr:l,onStore:{},_lnk:ot},map:ti,_cnvt:rr,_tag:fr,_err:c};(st.prototype=new Error).constructor=st;dt.depends=function(){return[this.get("item"),"index"]};gt.depends=function(){return["index"]};g.prototype={get:tr,getIndex:gt,getRsc:ur,hlp:ir,_is:"view"};for(rt in k)sr(rt,k[rt]);var e=r.templates,tt=r.converters,si=r.helpers,it=r.tags,o=r.sub,s=r.settings;t?(u=t,u.fn.render=hr,u.observable&&(f(o,u.views.sub),r.map=u.views.map)):(u=n.jsviews={},u.isArray=Array&&Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"});u.render=wt;u.views=r;u.templates=e=r.templates;s({debugMode:bt,delimiters:kt,onError:function(n,t,r){return t&&(n=r===i?"{Error: "+n+"}":d(r)?r(n,t):r),n==i?"":n},_dbgMode:!0});it({"else":function(){},"if":{render:function(n){var t=this;return t.rendering.done||!n&&(arguments.length||!t.tagCtx.index)?"":(t.rendering.done=!0,t.selected=t.tagCtx.index,t.tagCtx.render(t.tagCtx.view,!0))},onUpdate:function(n,t,i){for(var r,f,u=0;(r=this.tagCtxs[u])&&r.args.length;u++)if(r=r.args[0],f=!r!=!i[u].args[0],!this.convert&&!!r||f)return f;return!1},flow:!0},"for":{render:function(n){var f,t=this,r=t.tagCtx,e="",o=0;return t.rendering.done||((f=!arguments.length)&&(n=r.view.data),n!==i&&(e+=r.render(n,f),o+=u.isArray(n)?n.length:1),(t.rendering.done=o)&&(t.selected=r.index)),e},flow:!0},include:{flow:!0},"*":{render:ot,flow:!0}});it("props",{baseTag:it["for"],dataMap:ti(lr)});tt({html:hi,attr:hi,url:function(n){return n!=i?encodeURI(""+n):n===null?n:""}});kt()}})(this,this.jQuery);
/*
//# sourceMappingURL=jsrender.min.js.map
*/