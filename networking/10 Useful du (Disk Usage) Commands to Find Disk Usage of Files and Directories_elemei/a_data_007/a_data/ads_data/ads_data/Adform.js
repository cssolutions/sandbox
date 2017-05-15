/*
 Adform.DHTML.js, version 1.7.43

 Copyright Adform
 http://www.adform.com

 Date: 2016-04-22 13:46:32
*/
(function(a,D,z){function E(c,h){c.super_=h;f.prototype=h.prototype;c.prototype=new f;c.prototype.constructor=c}function f(){}function l(c,h){for(var x in h)h.hasOwnProperty(x)&&(c[x]=h[x]);return c}function u(c,h){return(h=h||z)&&h.getElementById&&h.getElementById(c)}function G(c,h){var x=h?c.substr?u(c):c:z;return x?x.getElementsByTagName(h||c):[]}function B(c,h){return~(" "+c.className+" ").indexOf(" "+h+" ")}function A(c,h){B(c,h)&&(c.className=(" "+c.className+" ").replace(" "+h+" "," ").slice(1,
-1),A(c,h))}function K(c){var h=c.offsetTop,x=c.offsetLeft,e,d=b.curCSS,g="static"!=d(c,"position");h||(h=(parseFloat(d(c,"marginTop"))||0)+(g?parseFloat(d(c,"top"))||0:0));x||(x=(parseFloat(d(c,"marginLeft"))||0)+(g?parseFloat(d(c,"left"))||0:0));g&&c.getBoundingClientRect&&(e=b.offset(c,!0));!h&&e&&(h=e.top);!x&&e&&(x=e.left);return{top:h,left:x}}function I(c){var h={relativeX:c[M[0]],relativeY:c[M[1]]};if(null==c.pageX&&null!=c.clientX){var x=z.documentElement,e=z.body;h.pageX=c.clientX+(x&&x.scrollLeft||
e.scrollLeft||0);h.pageY=c.clientY+(x&&x.scrollTop||e.scrollTop||0)}else h.pageX=c.pageX,h.pageY=c.pageY;return h}function v(c,h){if(!(c=c.parentNode))return!1;var x=c.ownerDocument,e=x.body,d=b.curCSS,g;h&&(h+=1);if(D.$sf)return!0;if(b.isIE&&(8>x.documentMode||"BackCompat"==x.compatMode))return!1;for(;c&&c!=e;){if("hidden"==d(c,"overflow"))return!1;if("fixed"==d(c,"position"))break;else if(h&&(g=parseInt(d(c,"z-index"),10))&&g<h)return!1;c=c.parentNode}return!0}function y(){for(var c=0,h=[];c<T.length;c++)"complete"!=
T[c].document.readyState&&h.push(T[c]);if(!(T=h).length||3E4<(new Date).getTime()-J){L=clearInterval(L);for(c=0;c<W.length;c++)W[c]();W=[];T=[]}}function q(c,h){var x=Math.max(c.x,h.x),e=Math.max(c.y,h.y),d=Math.min(c.x+c.width,h.x+h.width)-x,b=Math.min(c.y+c.height,h.y+h.height)-e;return 0<d&&0<b?{x:x,y:e,width:d,height:b}:{x:0,y:0,width:0,height:0}}function C(c,h,x,e){var d=function(c){e&&e.apply(c,arguments)},g=G(x,"head"),g=g&&g[0];if(!g)try{throw Error("Can't find head tag.");}catch(m){d(m)}var a=
h.src||h.href,r=a.replace(/[^\da-z_-]/gi,"_"),t=x.adformId||b.gid("doc_"),Q=t+"|"+r,n=X[Q],r=b.byTag(x,c),H=0,p=r.length;x.adformId=x.adformId||t;if(n)n.loaded?d():n.callbacks.push(d);else{for(;H<p;++H)if(r[H].src==a||r[H].href==a){d();return}X[Q]=n={doc:x,src:a,callbacks:[d]};var w=x.createElement(c),f;l(w,h);e&&(f=function(c){w.onload=w.onreadystatechange=w.onerror=null;c?X[Q]=null:n.loaded=1;var h=n.callbacks;H=0;for(p=h.length;H<p;++H)h[H](c)},w.onload=function(){f()},w.onreadystatechange=function(){"complete"==
w.readyState&&f()},w.onerror=function(){try{throw Error("Failed to load script: "+a);}catch(c){f(c)}});setTimeout(function(){g.insertBefore(w,g.firstChild)},400)}}a.Log||(a.Log={});a.Log.pushMessage||(a.Log.pushMessage=function(){});a.Log.sendMessage||(a.Log.sendMessage=function(){});a.RMB=a.RMB||{};var k=a.RMB,b=k.lib||(k.lib={});a.lib||(a.lib=b);b.inherit=E;b.define=function(c,h,x){x&&E(c,h);x(c,c.prototype)};b.gid=function(c){var h=+new Date;return(c||"")+(h+h*~~(1E4*Math.random())).toString(36)};
b.byId=u;b.byTag=G;b.bind=function(c,h){return function(){return h.apply(c,arguments)}};b.extend=l;b.isMouseLeave=function(c,h){if(!c||"mouseout"!=c.type)return!0;for(var x=c.relatedTarget||c.toElement,e,d=h.length;x;){for(e=0;e<d;e++)if(h[e]==x)return!1;x=x.parentNode}return!0};b.singleCall=function(c){function h(){b=!1;var c=e,h=x,g=d;x=e=d=null;c&&c.apply(h,g)}var x,e,d,b;return function(a,m){x=a;e=m;d=g.call(arguments,2);m&&!b?b=setTimeout(h,c):!m&&b&&(clearTimeout(b),b=!1)}};b.onload=function(c,
h){try{do{if(c[Y])break;c[Y]=!0;"complete"!=c.document.readyState&&(T.push(c),L||(J=(new Date).getTime(),L=setInterval(y,200)))}while(c!=c.parent&&(c=c.parent))}catch(e){}L?W.push(h):setTimeout(h,0)};b.overlap=q;b.overlapElem=function(c,h){var e=b.offset(c),d=b.offset(h);return q({x:e.left,y:e.top,width:c.offsetWidth,height:c.offsetHeight},{x:d.left,y:d.top,width:h.offsetWidth,height:h.offsetHeight})};b.hasClass=B;b.addClass=function(c,h){B(c,h)||(c.className+=" "+h)};b.removeClass=A;b.loadScript=
function(c,h,e){C("script",{src:h,type:"text/javascript"},c,e)};b.loadCSS=function(c,h){C("link",{href:h,type:"text/css",rel:"stylesheet"},c)};b.navigator=D.navigator;b.isTMX=function(c){try{var h=c.document,e=h&&h.body;return e&&B(e,"tmx")}catch(d){}return!1};b.isolate=function(c,h){var e=c.__adform_isolate;if(!e){var d=c.document,e=G(d,"head")[0],d=d.createElement("script");d.type="text/javascript";d.text='function __adform_isolate(f){new Function("window","("+f+")(window)")(window)}';e.insertBefore(d,
e.firstChild);e.removeChild(d);e=c.__adform_isolate}e?e(h):(new Function("window","("+h+")(window)"))(c)};var g=Array.prototype.slice;b.addEvent=function(c,h,e){return c[N]?c[N](h,e,!1):c[d]?c[d]("on"+h,e):!1};b.removeEvent=function(c,h,e){return c[F]?c[F](h,e,!1):c[m]?c[m]("on"+h,e):!1};var N="addEventListener",F="removeEventListener",d="attachEvent",m="detachEvent",t=/([A-Z])/g,w=/^-?\d+(?:px)?$/i,n=/^-?\d/;a=z.defaultView;b.curCSS=a&&a.getComputedStyle?function(c,e){var d=c.ownerDocument.defaultView;
if(d&&(d=d.getComputedStyle(c,null)))return d.getPropertyValue(e.replace(t,"-$1").toLowerCase())||c.style[e]}:z.documentElement.currentStyle&&function(c,e){var d,b,g,m=c.currentStyle&&c.currentStyle[e];if(!w.test(m)&&n.test(m)){d=(g=c.style).left;if(b=c.runtimeStyle&&c.runtimeStyle.left)c.runtimeStyle.left=c.currentStyle.left;g.left="fontSize"===e?"1em":m||0;m=g.pixelLeft+"px";g.left=d;b&&(c.runtimeStyle.left=b)}return""===m?"auto":m};var p=function(){function c(){return c}var e=z.body,d=z.createElement("div"),
b;b=["position:absolute;top:0;left:0;margin:0;padding:0;border:0;width:1px;height:1px;"].pop();d.innerHTML='<div style="'+b+'visibility:hidden"><div style="'+b+'border:5px solid #000"><div style="margin:0"></div></div><div style="'+b+'"><div style="'+b+'position:fixed;top:20px;"></div></div><div style="'+b+'position:relative;border:5px solid #000;overflow:hidden"><div style="margin:0"></div></div><table style="'+b+'border:5px solid #000" cellpadding="0" cellspacing="0"><tr><td></td></tr></table></div>';
e.insertBefore(d=d.firstChild,e.firstChild);b=d.childNodes;c.dnab=5!==b[0].firstChild.offsetTop;c.sfp=20===b[1].firstChild.offsetTop;c.sbfonv=-5===b[2].firstChild.offsetTop;c.dabftac=5===G(d,"td").offsetTop;e.removeChild(d);e=d=b=null;return p=c},U=/^t(?:able|d|h)$/i;b.offsetFromWindow=function(c){var e,d,g,m;d=c&&c.ownerDocument;if(!d)return null;g=d.documentElement;if("getBoundingClientRect"in g){try{e=c.getBoundingClientRect(),m=g.getBoundingClientRect()}catch(a){}if(!e)return{top:0,left:0};if(0<
m.left||0<m.top)e.top-=m.top,e.left-=m.left;return{top:e.top,left:e.left}}e=d.defaultView||d.parentWindow;m=d.body;if(c===d.body)return K(c);c=b.offset(c);d=e&&e.pageYOffset||g.scrollTop||m.scrollTop;g=e&&e.pageXOffset||g.scrollLeft||m.scrollLeft;c.top-=d;c.left-=g;return c};b.offset="getBoundingClientRect"in z.documentElement?function(c,e){var d,b=c&&c.ownerDocument;if(!b)return null;if(!e&&c===b.body)return K(c);try{d=c.getBoundingClientRect()}catch(g){}if(!d)return{top:0,left:0};var m=b.body,b=
b.documentElement;return{top:d.top+(b.scrollTop||m.scrollTop)-(b.clientTop||m.clientTop||0),left:d.left+(b.scrollLeft||m.scrollLeft)-(b.clientLeft||m.clientLeft||0)}}:function(c){var e=c&&c.ownerDocument;if(!e)return null;if(c===e.body)return K(c);var d,b=c.offsetParent,g=e.documentElement,m=e.body;d=(e=e.defaultView)?e.getComputedStyle(c,null):c.currentStyle;for(var a=c.offsetTop,r=c.offsetLeft,t=p();(c=c.parentNode)&&c!==m&&c!==g&&(!t.sfp||"fixed"!==d.position);)d=e?e.getComputedStyle(c,null):c.currentStyle,
a-=c.scrollTop,r-=c.scrollLeft,c===b&&(a+=c.offsetTop,r+=c.offsetLeft,!t.dnab||t.dabftac&&U.test(c.nodeName)||(a+=parseFloat(d.borderTopWidth)||0,r+=parseFloat(d.borderLeftWidth)||0),b=c.offsetParent),t.sbfonv&&"visible"!==d.overflow&&(a+=parseFloat(d.borderTopWidth)||0,r+=parseFloat(d.borderLeftWidth)||0);if("relative"===d.position||"static"===d.position)a+=m.offsetTop,r+=m.offsetLeft;t.sfp&&"fixed"===d.position&&(a+=Math.max(g.scrollTop,m.scrollTop),r+=Math.max(g.scrollLeft,m.scrollLeft));return{top:a,
left:r}};b.client=function(c){var e,d,b,g;c=c.ownerDocument||c;d=c.defaultView||c.parentWindow;b=c.documentElement;g=c.body;d.innerWidth?(c=d.innerWidth,e=d.innerHeight):b?(c=b.clientWidth,e=b.clientHeight,c&&g.clientHeight==g.offsetHeight||(c=Math.min(c||123456789,g.clientWidth||123456789),e=Math.min(e||123456789,g.clientHeight||123456789))):(c=g.clientWidth,e=g.clientHeight);return{left:d&&d.pageXOffset||b&&b.scrollLeft||g&&g.scrollLeft||0,top:d&&d.pageYOffset||b&&b.scrollTop||g&&g.scrollTop||0,
width:c,height:e}};b.isArray=Array.isArray||function(c){return"[object Array]"==Object.prototype.toString.call(c)};var M=[["offsetX","offsetY"],["layerX","layerY"]];b.getMousePos=function(c){for(var e;e=M.shift();)if("undefined"!=typeof c[e[0]]){M=e;break}e||(M=["x","y"]);b.getMousePos=I;return I(c)};var R=z.createElement("div");b.html=function(c,e){var d=!e&&R||e.createElement("div");d.innerHTML=c;return d.firstChild&&d.removeChild(d.firstChild)};a=b.navigator;var r=a.vendor;a=a.userAgent;var e=
/Apple Computer/i.test(r),k=/Google/i.test(r),H=b.isIPad=/iPad/i.test(a),O=b.isIPhone=/iPhone/i.test(a),P=b.isIOS=H||O,S=b.isTouch="ontouchstart"in z.documentElement||"ontouchstart"in D,H=b.isOrientation="orientation"in D,O=b.isAndroid=!P&&/Android/i.test(a);b.isAndroidApp=O&&!/^(?:Opera|Mozilla)/i.test(a);var V;b.isIOSF=P&&(V=/\sos\s(\d+)_\d+/i.exec(a))&&(V=4<V[1]>>0);var Q=b.isMobile=/Mobile|Mobi|Tablet|Nokia/i.test(a)||S;V=b.isIE=/msie|Trident/i.test(a);S=b.isFF=/Firefox[\/.]+[^\s]/i.test(a);b.isMACOS=
/Mac OS X/i.test(a);(b.isWinPhone=V&&Q&&/Phone/gi.test(a))&&(Q=/Windows Phone (OS )?(\d+[\.\d]*)/i.exec(a))&&Q[2]&&(b.winPhoneVer=parseFloat(Q[2]));var Q=b.isOpera=/Opera/i.test(a),Z=b.isOperaMobile=/Opera\s(?!Mini)/i.test(a),aa=b.isOperaMini=/Opera\sMini/i.test(a),r=b.isOperaWebKit=/OPR/i.test(a)&&/Opera Software/i.test(r),P=b.isChrome=/(Chrome|CriOS)+\/[\d\.]+\s/i.test(a)&&(P?e:k),e=b.isSafari=!/Chrome|CriOS|Skyfire/i.test(a)&&/Safari+\/[\.\d]+$/i.test(a)&&e,k=b.isInternet=O&&!P&&H&&/Safari\/[\.\d]+$/i.test(a)&&
k;b.isEdge=/Edge\/[\.\d]+$/i.test(a);b.isAfmaSDK=/afma-sdk/i.test(a);var ba=V?"msie":S?"firefox":Z?"operaMobile":aa?"operaMini":Q?"opera":r?"operaWebKit":P?"chrome":e?"safari":k?"internet":!1;b.browser=function(){return ba};b.isIE&&("Microsoft Internet Explorer"==b.navigator.appName&&/MSIE (\d+[\.\d]*)/i.exec(a)||/rv:(\d+[\.\d]*)/i.exec(a))&&(b.ieVersion=parseFloat(RegExp.$1));b.testPlace=b.isIE&&8>b.ieVersion?function(){return!1}:v;b.isSafari&&(a=/Version.([\d.]+)/.exec(a),b.safariVersion=parseFloat(a&&
a[1]));var T=[],W=[],Y="__adform_onload",L,J,X={}})(Adform=window.Adform||{},window,document);
(function(a){function D(){}a.RMB=a.RMB||{};a.RMB.EventEmitter=D;var z=Array.prototype.slice;a=D.prototype;a.emit=function(a){var f=this._events,l=!1,u=arguments;if(f&&(f=f[a]))if("function"==typeof f){switch(u.length){case 1:f.call(this);break;case 2:f.call(this,u[1]);break;case 3:f.call(this,u[1],u[2]);break;case 4:f.call(this,u[1],u[2],u[3]);break;default:f.apply(this,z.call(u,1))}l=!0}else if(f.length){for(var u=z.call(u,1),f=f.slice(),l=0,G=f.length;l<G;l++)f[l].apply(this,u);l=!0}else delete this._events[a];
return l};a.on=function(a,f){this._events||(this._events={});this.emit("newListener",a,f);var l=this._events;l[a]?"function"==typeof l[a]?l[a]=[l[a],f]:l[a].push(f):l[a]=f;return this};a.once=function(a,f){var l=f._once;l?l._times++:(l=f._once=function(){this.off(a,l);1>--l._times&&delete f._once;return f.apply(this,arguments)},l._times=1);return this.on(a,l)};a.off=function(a,f){if(!this._events||!this._events[a])return this;var l=this._events,u=l[a];if(u==f)return delete l[a],this;f&&f._once&&this.off(f._once);
if("function"==typeof u)return this;if(2>u.length&&u[0]==f)return delete l[a],this;for(var z=0,B=u.length,A=[];z<B;z++)u[z]!=f&&A.push(u[z]);A.length!=B&&(A.length?l[a]=A:delete l[a]);return this};a.clear=function(a){a?this._events&&this._events[a]&&delete this._events[a]:delete this._events;return this};a.list=function(a){this._events||(this._events={});var f=this._events;f[a]?"function"==typeof f[a]&&(f[a]=[f[a]]):f[a]=[];return f[a]}})(Adform=window.Adform||{});
(function(a,D,z,E){function f(){}function l(b){for(var a=q.length;0<a--;)if(q[a][0]==b)return q[a][1]}function u(a,f,u){function d(e){if(e&&r)b(r,"touchstart",I);else if(!r)try{(r=a.defaultView.frameElement)&&k(r,"touchstart",I)}catch(d){}}var m=l(a),t,w,n,p;m?t=m._:q.push([a,m={_:t=new y,_destroy:function(){t.clear();delete this._;delete this._destroy;for(var e in this)if("function"==typeof this[e])this[e]();for(e=q.length;0<e--;)if(q[e][0]==a){q.splice(e,1);break}}}]);var z,M,C,r,e,H,O,P,S,K;v.isIOS&&
a.defaultView.frameElement&&{click:1,mousedown:1,mouseup:1}[f]&&k(u,f,I);if(!m[f])switch(f){case "swipe":z=function(d){if(C=A(t,d.target,"swipe")[0])d.preventDefault(),(d=d&&d.targetTouches)&&(d=d[0])&&(e=d.pageX,O=d.pageY,S=(new Date).getTime())};M=function(d){var a=d&&d.targetTouches;C&&(d.preventDefault(),a&&(a=a[0])&&S&&(H=a.pageX,P=a.pageY,K=(new Date).getTime(),.2<Math.sqrt(Math.pow(H-e,2)+Math.pow(P-O,2))/(K-S)&&(d=O-P,a={type:"swipe"},a.directionX=0<e-H?"left":"right",a.directionY=0<d?"up":
"down",a.target=C[1],S=0,B(t,C[1],a))))};k(a,"touchstart",z);k(a,"touchend",M);k(a,"touchmove",M);d();m[f]=function(){b(a,"touchstart",z);b(a,"touchend",M);b(a,"touchmove",M);d(!0)};break;case "hover":a.addEventListener?(w=function(e){e=e.target;p!=e&&G(t,p,p=e)},n=function(e){e=e.relatedTarget;p!=e&&G(t,p,p=e)}):(w=function(e){e=(a.defaultView||a.parentWindow).event.srcElement;p!=e&&G(t,p,p=e)},n=function(e){e=(a.defaultView||a.parentWindow).event.toElement;p!=e&&G(t,p,p=e)});k(a,"mouseover",w);
k(a,"mouseout",n);k(a,"mousemove",w);m[f]=function(){b(a,"mouseover",w);b(a,"mouseout",n);b(a,"mousemove",w);p=null};break;case "click":case "mousedown":case "mouseup":case "touchstart":case "touchmove":case "touchend":w=a.addEventListener?function(e){B(t,e.target,e)}:function(e){e=(a.defaultView||a.parentWindow).event;B(t,e.srcElement,e)},k(a,f,w),m[f]=function(){b(a,f,w)}}return!!m[f]}function G(a,b,f){f=A(a,f,"hover");b=A(a,b,"hover");for(var d=f.length,m=d,t=b.length,w=t-d;0<m--&&f[m][1]==(b[w+
m]&&b[w+m][1]););f.length=d=m+1;b.length=t=w+m+1;var n,p=a._events;if(p){for(w=m=-1;++w<t;)p[n=b[w][0]]&&a.emit(n,b[w][1],"hoverout");for(;++m<d;)p[n=f[m][0]]&&a.emit(n,f[m][1],"hoverin")}}function B(a,b,f,d){d=d||f;b=A(a,b,f.type);f=b.length;for(var m=0,t;t=b[m],m++<f;)a.emit(t[0],t[1],d)}function A(a,b,f){a=a._events;var d,m,t,w=[];if(a)for(;b&&"undefined"!=(t=typeof(m=b.className));)"string"==t&&~m.indexOf("adform-dom-")&&a[d=K(b)+":"+f]&&(w[w.length]=[d,b]),b=b.parentNode;return w}function K(a){a=
a.className;return~a.indexOf("adform-dom-")?a.match(C)[1]:v.gid()}function I(){}a.RMB=a.RMB||{};a=a.RMB;a.DOMEvents=f;var v=a.lib,y=a.EventEmitter,q=[],C=/adform-dom-(\S+)/,k=v.addEvent,b=v.removeEvent;f.has=function(a){return!!{hover:1,mousedown:1,mouseup:1,click:1,swipe:1,touchstart:1,touchmove:1,touchend:1}[a]};f.on=function(a,b,f){var d=a.ownerDocument;if(u(d,b,a)){var m=K(a);v.addClass(a,"adform-dom-"+m);l(d)._.on(m+":"+b,f);return!0}return!1};f.off=function(a,b,f){l(a.ownerDocument)._.off(K(a)+
":"+b,f)};f.destroy=function(a){l(a)._destroy()}})(Adform=window.Adform||{},window,document);var Mustache="undefined"!==typeof module&&module.exports||{};
(function(a){function D(a){return String(a).replace(/&(?!\w+;)|[<>"']/g,function(a){return N[a]||a})}function z(a,b,f,g){g=g||"<template>";for(var n=b.split("\n"),p=Math.max(f-3,0),n=n.slice(p,Math.min(n.length,f+3)),A,k=0,q=n.length;k<q;++k)A=k+p+1,n[k]=(A===f?" >> ":"    ")+n[k];a.template=b;a.line=f;a.file=g;a.message=[g+":"+f,n.join("\n"),"",a.message].join("\n");return a}function E(a,b,f){if("."===a)return b[b.length-1];a=a.split(".");for(var g=a.length-1,n=a[g],p,k,A=b.length,q,r;A;){r=b.slice(0);
k=b[--A];for(q=0;q<g;){k=k[a[q++]];if(null==k)break;r.push(k)}if(k&&"object"===typeof k&&n in k){p=k[n];break}}"function"===typeof p&&(p=p.call(r[r.length-1]));return null==p?f:p}function f(a,b,f,g){var n="";a=E(a,b);if(g){if(null==a||!1===a||y(a)&&0===a.length)n+=f()}else if(y(a))q(a,function(a){b.push(a);n+=f();b.pop()});else if("object"===typeof a)b.push(a),n+=f(),b.pop();else if("function"===typeof a)var k=b[b.length-1],n=n+(a.call(k,f(),function(a){return B(a,k)})||"");else a&&(n+=f());return n}
function l(b,f){f=f||{};for(var g=f.tags||a.tags,w=g[0],n=g[g.length-1],p=['var buffer = "";',"\nvar line = 1;","\ntry {",'\nbuffer += "'],A=[],q=!1,l=!1,r=function(){if(!q||l||f.space)A=[];else for(;A.length;)p.splice(A.pop(),1);l=q=!1},e=[],H,O,v,y=function(a){g=k(a).split(/\s+/);O=g[0];v=g[g.length-1]},u=function(a){p.push('";',H,'\nvar partial = partials["'+k(a)+'"];',"\nif (partial) {","\n  buffer += render(partial,stack[stack.length - 1],partials);","\n}",'\nbuffer += "')},I=function(a,r){var g=
k(a);if(""===g)throw z(Error("Section name may not be empty"),b,E,f.file);e.push({name:g,inverted:r});p.push('";',H,'\nvar name = "'+g+'";',"\nvar callback = (function () {","\n  return function () {",'\n    var buffer = "";','\nbuffer += "')},K=function(a){I(a,!0)},B=function(a){a=k(a);var r=0!=e.length&&e[e.length-1].name;if(!r||a!=r)throw z(Error('Section named "'+a+'" was never opened'),b,E,f.file);a=e.pop();p.push('";',"\n    return buffer;","\n  };","\n})();");a.inverted?p.push("\nbuffer += renderSection(name,stack,callback,true);"):
p.push("\nbuffer += renderSection(name,stack,callback);");p.push('\nbuffer += "')},D=function(a){p.push('";',H,'\nbuffer += lookup("'+k(a)+'",stack,"");','\nbuffer += "')},G=function(a){p.push('";',H,'\nbuffer += escapeHTML(lookup("'+k(a)+'",stack,""));','\nbuffer += "')},E=1,F,L,J=0,N=b.length;J<N;++J)if(b.slice(J,J+w.length)===w){J+=w.length;F=b.substr(J,1);H="\nline = "+E+";";O=w;v=n;q=!0;switch(F){case "!":J++;L=null;break;case "=":J++;n="="+n;L=y;break;case ">":J++;L=u;break;case "#":J++;L=I;
break;case "^":J++;L=K;break;case "/":J++;L=B;break;case "{":n="}"+n;case "&":J++;l=!0;L=D;break;default:l=!0,L=G}F=b.indexOf(n,J);if(-1===F)throw z(Error('Tag "'+w+'" was not closed properly'),b,E,f.file);w=b.substring(J,F);L&&L(w);for(L=0;~(L=w.indexOf("\n",L));)E++,L++;J=F+n.length-1;w=O;n=v}else switch(F=b.substr(J,1),F){case '"':case "\\":l=!0;p.push("\\"+F);break;case "\r":break;case "\n":A.push(p.length);p.push("\\n");r();E++;break;default:C.test(F)?A.push(p.length):l=!0,p.push(F)}if(0!=e.length)throw z(Error('Section "'+
e[e.length-1].name+'" was not closed properly'),b,E,f.file);r();p.push('";',"\nreturn buffer;","\n} catch (e) { throw {error: e, line: line}; }");n=p.join("").replace(/buffer \+= "";\n/g,"");f.debug&&("undefined"!=typeof console&&console.log?console.log(n):"function"===typeof print&&print(n));return n}function u(a,b){var g=l(a,b),k=new Function("view,partials,stack,lookup,escapeHTML,renderSection,render",g);return function(g,p){p=p||{};var A=[g];try{return k(g,p,A,E,D,f,B)}catch(t){throw z(t.error,
a,t.line,b.file);}}}function G(a,b){b=b||{};return!1!==b.cache?(F[a]||(F[a]=u(a,b)),F[a]):u(a,b)}function B(a,b,f){return G(a)(b,f)}a.name="mustache.js";a.version="0.5.0-dev";a.tags=["{{","}}"];a.parse=l;a.compile=G;a.render=B;a.clearCache=function(){F={}};a.to_html=function(a,b,f,g){a=B(a,b,f);if("function"===typeof g)g(a);else return a};var A=Object.prototype.toString,K=Array.isArray,I=Array.prototype.forEach,v=String.prototype.trim,y;y=K?K:function(a){return"[object Array]"===A.call(a)};var q;
q=I?function(a,b,f){return I.call(a,b,f)}:function(a,b,f){for(var g=0,k=a.length;g<k;++g)b.call(f,a[g],g,a)};var C=/^\s*$/,k;if(v)k=function(a){return null==a?"":v.call(a)};else{var b,g;C.test("\u00a0")?(b=/^\s+/,g=/\s+$/):(b=/^[\s\xA0]+/,g=/[\s\xA0]+$/);k=function(a){return null==a?"":String(a).replace(b,"").replace(g,"")}}var N={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},F={}})(Mustache);
(function(a,D,z){function E(a){return parseInt(a,10)?a:0}function f(){}function l(a,f,l){function v(){u=!1;var a=q;q=[];l(function(b){for(var f=0;f<a.length;f++)if(b)a[f][1](b);else y(a[f][0],a[f][1])})}function y(k,b){var g=!1;f(k,function(){g=!0;b.apply(this,arguments)});g||(q.push([k,b]),u||(u=setTimeout(v,a)))}var q=[],u=!1;return y}function u(a,f,l){var v=a["@id"]||0,y;y=a["@pdata"]||"";var q,u,k={$id:v,$name:a["@name"]||"default",$link:l.replace(/adfibeg=\d+/,y?"pdata="+y:"adfibeg="+v),$pdata:y};
if(a.TextVars)for(l=0,v=a.TextVars.TextVar,y=v.length,B.isArray(v)||(v=[v],y=1);l<y;l++)q=v[l],u=q["@name"],q=q["@value"],k[u]=q,"product_deeplink"==u&&(k.$link+=";cpdir="+encodeURIComponent(q));if(a.Graphics)for(l=0,v=a.Graphics.Graphic,y=v.length,B.isArray(v)||(v=[v],y=1);l<y;l++)q=v[l],k[q["@name"]]=f+q["@value"]+"?assetID="+q["@assetID"]+"&av="+q["@av"];return k}var G=a.AdMessage||(a.AdMessage={}),B=a.lib;G.build=function(a){function z(){var a=n?n.length:0;return{total:a,totalPages:Math.ceil(a/
C),pageSize:C,ids:n||[],limit:q}}function I(a,b){G.load(t+"&"+a,function(a,e){if(a)b(a);else{var f=m,r=d,g=e.root,k={};if(g.TextVars||g.Graphics)k[0]=u(g,f,r);if(g.Groups){var n=0,l=g.Groups.Group,p;B.isArray(l)||(l=[l]);for(p=l.length;n<p;n++){var q=u(l[n],f,r);k[q.$id]=q}}f=g.GroupIds?g.GroupIds.split(","):[];b(null,{ids:f,items:k,total:f.length})}})}function v(a,b){if(a)for(var d in a)a.hasOwnProperty(d)&&(w[d]=a[d])}var y=D.dhtml&&dhtml.getVar()||{},q=E(a.limit)||100,C=E(a.pageSize)||1,k=E(a.cid||
y.cid),b=E(a.tid||y.tid),g=E(a.tv||y.tv)||+new Date,N=E(a.bn||y.bn),F=a.gid||y.gid||0,d=a.clickTAG||"",m=(a.statics||a.domain||y.staticDomain||y.domain).replace(/\/+$/,""),t=(a.domain||y.domain).replace(/(\w+:\/\/[^\/]+\/).*/,"$1")+"Serving/AdMessage/?aid="+k+"&tid="+b+"&tv="+g,k=E(a.icid||y.icid),b=E(a.rotseqno||y.rotseqno),g=a.smid||y.smid;a=a.dcoEngineId||y.dcoEngineId;k&&(t+="&icid="+k);b&&(t+="&rotseqno="+b);g&&(t+="&smid="+g);a&&(t+="&dco="+a);var w={},n,p=0,U=l(100,function(a,b){var d=a*C,
f=d+2*C;p=Math.max(p,f);if(n)if(d=n.slice(d,f),d.length)b(null,d,z());else try{throw Error("AdMessage page not found.");}catch(r){b(r)}},function(a){I("bn="+N+"&gcnt="+q+"&pgsz="+Math.min(p,q),function(b,d){if(b)a(b);else if(v(d.items),(n=d.ids)&&n.length)a();else try{throw Error("AdMessage template doesn't contain groups.");}catch(f){a(f)}});p=0}),M={},R=[],r=l(100,function(a,b){for(var d=a._test||0,f=[],r=0,g=a.length,k,m;r<g;r++)(m=w[k=a[r]])?f.push(m):M[k]||(M[k]=!0,R.push(k));a._test=++d;if(f.length==
a.length)b(null,f,z());else if(4<d)try{throw Error("AdMessage group"+((1<a.length?"s ":' "')+a.join(", "))+'" not found.');}catch(n){b(n)}},function(a){R.length?I("bn="+N+"&gid="+R.join(","),function(b,d){M={};b?a(b):(v(d.items),a())}):setTimeout(function(){a()},100);R=[]});return{setProperties:function(a){var b=a.pageSize>>0||C;a=a.limit>>0||q;0<a&&(q=a);0<b&&(C=Math.min(b,q))},getProperties:z,getPage:function(a,b){U((a>>0)-1,function(a,e,d){a?b(a):(r(e.slice(0,C),b),r(e.slice(C),f))})},getItems:function(a,
b){r(B.isArray(a)?a:[a],b)},getDefault:function(a){r([F],function(b,d,f){a(b,d&&d[0],f)})}}};G.load=function(a,f){var l=B.gid("adform_com_"),v=z.createElement("script"),u=function(){C();try{throw Error("AdMessage load error.");}catch(a){f(a)}},q=function(a){C();f(null,a)},C=function(){v.parentNode.removeChild(v);D[l]=v.onerror=v.onload=u=q=C=v=null};v.type="text/javascript";v.src=a+"&format=json&callback="+encodeURIComponent(l);v.onload=v.onerror=function(){setTimeout(u,1E3)};D[l]=q;var k=B.byTag(z,
"script")[0];k.parentNode.insertBefore(v,k)}})(Adform=window.Adform||{},window,document);
(function(a,D,z){function E(){if(D.Ready)for(var a=0;a<Ready.length;a++)l(Ready[a]);D.Ready={push:l}}function f(a,b){var f=d;a&&(f="undefined"==typeof d[a]?b:d[a]);return f}function l(a){a.call(D);R||(clearTimeout(M),M=setTimeout(function(){R=!0;z.close()},1E3))}function u(a,b){"function"==typeof b&&(a=b);try{throw Error("AdMessage template id is missing");}catch(d){if("function"==typeof a)a(d);else throw d;}}function G(a,b,d,f){var g=D._Adform&&_Adform.Events;if(g&&g.sendEvent){if(a in m)b=m[a];
else if(isNaN(a=parseInt(a,10))||1>a||20<a&&200>a||250<a)throw Error("Custom event id="+a+" must be between 1-20 for engaging and 200-250 for non-engaging events");if(!b)throw Error("Event name is missing");var k=[""];if(d)for(var l in d){var n=l.slice(0,2),p=parseInt(l.slice(2),10);"bv"==n&&0<p&&256>p&&k.push(l+"="+encodeURIComponent(d[l]))}f&&k.push(f);g.sendEvent(F.xId,a,N.assetId,b,k.join("&"),"Standard HTML");return!0}return!1}function B(a,b){I[a]||(I[a]=Mustache.compile(A(a).text));if(b){if(y.length!=
k){for(var d=0;d<y.length;d++)"text/mustache"==y[d].type&&B(y[d].id);k=y.length}return I[a](b,I)}return I[a]}function A(a){return z.getElementById(a)}for(var K=a.RMB.lib,I={},v,y=z.getElementsByTagName("script"),q=0,C;q<y.length;q++)if(C=(y[q].src||"").match(/(^.*)rmb\/Adform\.DHTML\.js/)){v=C[1]+"components/";break}var k=0,b=a.RMB.EventEmitter,q=a.RMB.DOMEvents,g=D._AdformContent||{},N=g.data||{},F=g.options||{},d=N.flashvars||{},m={151:"Previous Product Button Press",150:"Next Product Button Press",
143:"Banner Collapse",22:"Other Expands",21:"First Expand",168:"Auto Expands",161:"Hide Expanding Banner Button Press",23:"Close Button Press",25:"Video Play Start",26:"Played 25% Of Video",27:"Played 50% Of Video",28:"Played 75% Of Video",29:"Video Playback Complete",30:"Play Button Press",31:"Pause Button Press",32:"Stop Button Press",33:"Sound On Button Press",34:"Sound Off Button Press",35:"Full Screen On Button Press",36:"Full Screen Off Button Press",38:"Rewind Button Press","":""};D.dhtml=
{PREVIOUS_BUTTON_PRESS:151,NEXT_BUTTON_PRESS:150,CLOSE_BUTTON_PRESS:23,COLLAPSE_EVENT:143,EXPAND_EVENT:22,FIRST_EXPAND_EVENT:21,AUTO_EXPAND_EVENT:168,SUPER_CLOSE_EVENT:161,VIDEO_PROG_0:25,VIDEO_PROG_25:26,VIDEO_PROG_50:27,VIDEO_PROG_75:28,VIDEO_PROG_100:29,PLAY_BUTTON_PRESS:30,PAUSE_BUTTON_PRESS:31,STOP_BUTTON_PRESS:32,SOUND_ON_BUTTON_PRESS:33,SOUND_OFF_BUTTON_PRESS:34,FULL_SCREEN_ON_BUTTON_PRESS:35,FULL_SCREEN_OFF_BUTTON_PRESS:36,REWIND_BUTTON_PRESS:38,byId:A,hasClass:K.hasClass,addClass:K.addClass,
removeClass:K.removeClass,mustache:B,sendEvent:function(a,b,d){if(!t||!t.callDHTMLEvent.call(t,a))return a in m&&(d=null),G(a,b,d)},$sendEvent:G,appendEvents:function(a){for(var b in a)m.hasOwnProperty(b)||(m[b]=a[b]);return m},getVar:f,getAsset:function(a){a=parseInt(a,10);var b=f("videoSources");if(b)for(var d=b.length,g,k=0;k<d;k++)if(g=b[k],g.id==a)return g.file},width:N.width,height:N.height,collapsedWidth:F.colWidth,collapsedHeight:F.colHeight,external:g.external||{},inscreen:new b,sharedEvents:g.sharedEvents||
new b,scriptsBase:F.scriptsBase||v+"../",getState:function(){return g.state?g.state():"visible"},on:q.on,off:q.off,connect:function(a){var e,f,g=D._Adform&&_Adform.ADFUtilInstance;a=a||d.bn||"x";g=g?g.getRotSeed():{};g.localConnections||(g.localConnections={});e=g.localConnections[a];e||(e=new b,f=[],e.expect=function(a,b){if(f.length>=a)b();else e.once("expect:"+a,b);return e},e.join=function(a){f.push(a);e.emit("member",a);e.emit("expect:"+f.length);return e},e.members=f,g.localConnections[a]=e);
return e}};var t;try{t=parent.parent.getVPAIDAd&&parent.parent.getVPAIDAd()}catch(r){}if(t&&t.callDHTMLEvent){dhtml.vpaid=t;var w=dhtml.external.close;dhtml.external.close=function(){t.callDHTMLEvent.call(t,23);return w.apply(this,arguments)}}dhtml.sharedEvents.on("newListener",function(a){"pageLoadComplete"==a&&setTimeout(function(){dhtml.external.initPoliteMode()},0)});dhtml.adMessage=d.tid?a.AdMessage.build({limit:100,pageSize:5}):{setProperties:u,getProperties:u,getPage:u,getItems:u,getDefault:u};
var n=dhtml.inscreen;dhtml.external.initInScreen&&(dhtml.sharedEvents.on("updateInScreen",function(a){for(var b in a)n.emit(b,n[b]=a[b]);n.emit("change")}),n.once("newListener",function(){setTimeout(function(){dhtml.external.initInScreen()},0)}));components=D.preloadQueue||D.components||[];for(var p=components.length,q=0;q<components.length;q++)z.write('<script src="'+(v+"Adform."+components[q]+".js?bv="+(d.bv||Math.random()))+'">\x3c/script>');try{var U=z.defaultView.frameElement;U&&K.addEvent(U,
"touchstart",function(){})}catch(r){}dhtml.registerComponent=function(a){for(var b=0;b<components.length;b++)components[b]==a&&p--;p||E()};p||E();var M,R})(Adform=window.Adform,window,document);