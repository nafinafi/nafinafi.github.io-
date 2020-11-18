
(function(){/*

    Copyright The Closure Library Authors.
    SPDX-License-Identifier: Apache-2.0
   */
   function ba(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function ca(a){if(!(a instanceof Array)){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];a=b?b.call(a):{next:ba(a)};for(var c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var da="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},m;
   if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var p;a:{var ea={i:!0},fa={};try{fa.__proto__=ea;p=fa.i;break a}catch(a){}p=!1}m=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=m,r=this||self,t="closure_uid_"+(1E9*Math.random()>>>0),ia=0;var ja=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in d&&b.call(void 0,d[f],f,a)};var u;a:{var ka=r.navigator;if(ka){var la=ka.userAgent;if(la){u=la;break a}}u=""};function x(a){x[" "](a);return a}x[" "]=function(){};var ma=-1!=u.toLowerCase().indexOf("webkit")&&-1==u.indexOf("Edge");function na(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};function y(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};var oa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function A(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{x(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function pa(a,b){var c=[r.top],d=[],f=0;b=b||1024;for(var e;e=c[f++];){a&&!A(e)||d.push(e);try{if(e.frames)for(var g=e.frames.length,k=0;k<g&&c.length<b;++k)c.push(e.frames[k])}catch(h){}}return d}function qa(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};function ra(a,b){r.google_image_requests||(r.google_image_requests=[]);var c=r.document.createElement("img");if(b){var d=function(f){b&&b(f);c.removeEventListener&&c.removeEventListener("load",d,!1);c.removeEventListener&&c.removeEventListener("error",d,!1)};y(c,"load",d);y(c,"error",d)}c.src=a;r.google_image_requests.push(c)};var B=null;var sa=document,C=window;var ta;ta=/^true$/.test("false");var ua=/#(R?S)-(.*)/,va=/^(\d+)-(.*)/,wa=/\.((google(|groups|mail|images|print))|gmail)\./;var D={};function E(a,b){if(b!==D)throw Error("Bad secret");this.a=a}function F(){}E.prototype=da(F.prototype);E.prototype.constructor=E;if(ha)ha(E,F);else for(var G in F)if("prototype"!=G)if(Object.defineProperties){var xa=Object.getOwnPropertyDescriptor(F,G);xa&&Object.defineProperty(E,G,xa)}else E[G]=F[G];E.prototype.toString=function(){return this.a};new E("about:blank",D);new E("about:invalid#zTSz",D);var ya=!!window.google_async_iframe_id,H=ya&&window.parent||window;var za=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;function Aa(a,b){this.a=a;this.b=b}function Ba(a,b){this.url=a;this.h=!!b;this.depth=null};function I(){this.c="&";this.b={};this.f=0;this.a=[]}function J(a,b){var c={};c[a]=b;return[c]}function Ga(a,b,c,d,f){var e=[];qa(a,function(g,k){(g=Ha(g,b,c,d,f))&&e.push(k+"="+g)});return e.join(b)}
   function Ha(a,b,c,d,f){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var e=[],g=0;g<a.length;g++)e.push(Ha(a[g],b,c,d+1,f));return e.join(c[d])}}else if("object"==typeof a)return f=f||0,2>f?encodeURIComponent(Ga(a,b,c,d,f+1)):"...";return encodeURIComponent(String(a))}
   function Ia(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;var d=Ja(a)-c.length;if(0>d)return"";a.a.sort(function(n,q){return n-q});c=null;for(var f="",e=0;e<a.a.length;e++)for(var g=a.a[e],k=a.b[g],h=0;h<k.length;h++){if(!d){c=null==c?g:c;break}var l=Ga(k[h],a.c,",$");if(l){l=f+l;if(d>=l.length){d-=l.length;b+=l;f=a.c;break}c=null==c?g:c}}a="";null!=c&&(a=f+"trn="+c);return b+a}function Ja(a){var b=1,c;for(c in a.b)b=c.length>b?c.length:b;return 3997-b-a.c.length-1};function K(a,b,c,d,f,e){if((d?a.a:Math.random())<(f||.01))try{if(c instanceof I)var g=c;else g=new I,qa(c,function(h,l){var n=g,q=n.f++;h=J(l,h);n.a.push(q);n.b[q]=h});var k=Ia(g,a.b,"/pagead/gen_204?id="+b+"&");k&&("undefined"!==typeof e?ra(k,void 0===e?null:e):ra(k,null))}catch(h){}};var L=null;function Ka(){var a=r.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function La(){var a=void 0===a?r:a;return(a=a.performance)&&a.now?a.now():null};function Ma(a,b){var c=La()||Ka();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0};var N=r.performance,Na=!!(N&&N.mark&&N.measure&&N.clearMarks),O=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a;if(a=Na){var b;if(null===L){L="";try{a="";try{a=r.top.location.hash}catch(c){a=r.location.hash}a&&(L=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=L;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
   function Oa(){var a=P;this.b=[];this.c=a||r;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.b=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.a=O()||(null!=b?b:1>Math.random())}function Pa(a){a&&N&&O()&&(N.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),N.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))}Oa.prototype.start=function(a,b){if(!this.a)return null;a=new Ma(a,b);b="goog_"+a.label+"_"+a.uniqueId+"_start";N&&O()&&N.mark(b);return a};function Qa(){var a=Q;this.g=R;this.l=!0;this.a=null;this.j=this.f;this.b=void 0===a?null:a;this.c=!1}
   Qa.prototype.f=function(a,b,c,d,f){f=f||"jserror";try{var e=new I;e.a.push(1);e.b[1]=J("context",a);b.error&&b.meta&&b.id||(b=new na(b,{message:S(b)}));if(b.msg){var g=b.msg.substring(0,512);e.a.push(2);e.b[2]=J("msg",g)}var k=b.meta||{};if(this.a)try{this.a(k)}catch(M){}if(d)try{d(k)}catch(M){}b=[k];e.a.push(3);e.b[3]=b;d=r;b=[];g=null;do{var h=d;if(A(h)){var l=h.location.href;g=h.document&&h.document.referrer||null}else l=g,g=null;b.push(new Ba(l||""));try{d=h.parent}catch(M){d=null}}while(d&&h!=
   d);l=0;for(var n=b.length-1;l<=n;++l)b[l].depth=n-l;h=r;if(h.location&&h.location.ancestorOrigins&&h.location.ancestorOrigins.length==b.length-1)for(n=1;n<b.length;++n){var q=b[n];q.url||(q.url=h.location.ancestorOrigins[n-1]||"",q.h=!0)}var v=new Ba(r.location.href,!1);h=null;var Y=b.length-1;for(q=Y;0<=q;--q){var w=b[q];!h&&za.test(w.url)&&(h=w);if(w.url&&!w.h){v=w;break}}w=null;var ab=b.length&&b[Y].url;0!=v.depth&&ab&&(w=b[Y]);var z=new Aa(v,w);if(z.b){var bb=z.b.url||"";e.a.push(4);e.b[4]=J("top",
   bb)}var Z={url:z.a.url||""};if(z.a.url){var aa=z.a.url.match(oa),Ca=aa[1],Da=aa[3],Ea=aa[4];v="";Ca&&(v+=Ca+":");Da&&(v+="//",v+=Da,Ea&&(v+=":"+Ea));var Fa=v}else Fa="";Z=[Z,{url:Fa}];e.a.push(5);e.b[5]=Z;K(this.g,f,e,this.c,c)}catch(M){try{K(this.g,f,{context:"ecmserr",rctx:a,msg:S(M),url:z&&z.a.url},this.c,c)}catch(gb){}}return!0};
   function S(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);for(var c;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(d){}}return b};var R,T;if(ya&&!A(H)){var U="."+sa.domain;try{for(;2<U.split(".").length&&!A(H);)sa.domain=U=U.substr(U.indexOf(".")+1),H=window.parent}catch(a){}A(H)||(H=window)}var P=H,Q=new Oa;function Ra(){if(!P.google_measure_js_timing){var a=Q;a.a=!1;a.b!=a.c.google_js_reporting_queue&&(O()&&ja(a.b,Pa),a.b.length=0)}}
   function Sa(a){var b=C.jerExpIds;if(Array.isArray(b)&&0!==b.length){var c=a.eid;if(c){b=[].concat(ca(c.split(",")),ca(b));c={};for(var d=0,f=0;f<b.length;){var e=b[f++];var g=e;var k=typeof g;g="object"==k&&null!=g||"function"==k?"o"+(Object.prototype.hasOwnProperty.call(g,t)&&g[t]||(g[t]=++ia)):(typeof g).charAt(0)+g;Object.prototype.hasOwnProperty.call(c,g)||(c[g]=!0,b[d++]=e)}b.length=d;a.eid=b.join(",")}else a.eid=b.join(",")}}function Ta(a){var b=C.jerUserAgent;b&&(a.useragent=b)}
   R=new function(){var a=void 0===a?C:a;this.b="http:"===a.location.protocol?"http:":"https:";this.a=Math.random()};"number"!==typeof P.google_srt&&(P.google_srt=Math.random());var Ua=R,Va=P.google_srt;0<=Va&&1>=Va&&(Ua.a=Va);T=new Qa;T.a=function(a){Sa(a);Ta(a)};T.c=!0;"complete"==P.document.readyState?Ra():Q.a&&y(P,"load",function(){Ra()});function Wa(a){T.a=function(b){ja(a,function(c){c(b)});Sa(b);Ta(b)}};var Xa;if(Xa=ma){var V="IFRAME",Ya=document;V=String(V);"application/xhtml+xml"===Ya.contentType&&(V=V.toLowerCase());Xa="srcdoc"in Ya.createElement(V)}var Za=Xa;function $a(a,b){a.open("text/html","replace");a.write(b);a.close()};(function(a){try{var b=/\/(r\d+|dev)\/r\d+\/zrt_lookup\.html/.exec(a.location.pathname);b&&b[1]&&Wa([function(c){c.shv=b[1]}])}catch(c){}})(window);
   function cb(){try{var a=wa.test(C.location.host);var b=!(!C.postMessage||!C.JSON||a&&!ta)}catch(e){b=!1}if(b){if(b=(b=ua.exec("#"+C.name)||ua.exec(C.location.href))&&b[2])if(b=decodeURIComponent(b),a=va.exec(b))if(a=+a[1],!isNaN(a)){a:{var c;if(!B)c:{for(var d=pa(),f=0;f<d.length;f++)try{if((c=d[f].frames.google_esf)&&A(c)){B=c;break c}}catch(e){}B=null}(c=B)?((d=c.esf_propArray)||(d=c.esf_propArray={}),c=d):c=null;c=c?c[2]:void 0;if(c)b=c[a];else{d=pa(!0,void 0);for(f=0;f<d.length;f++)if(c=d[f].google_reactive_sra_lookup){K(R,
   "rsra",{context:"grsl",params:b},!0,1,void 0);b=c[a];break a}b=null}}if(b){b=b.creative;a=null;try{a=C.frameElement}catch(e){}if(c=a)try{c=A(a.contentWindow)}catch(e){c=!1}c?Za?a.srcdoc=b:(a=a.contentWindow)&&$a(a.document,b):$a(C.document,b)}}}else{try{d={pm:!!C.postMessage,js:!!C.JSON}}catch(e){d={ex:e.message}}K(R,"zrt::unsup",d,!0,void 0,void 0)}}var db;
   try{if(T.b&&T.b.a){db=T.b.start((200).toString(),3);cb();var W=T.b,X=db;if(W.a&&"number"===typeof X.value){X.duration=(La()||Ka())-X.value;var eb="goog_"+X.label+"_"+X.uniqueId+"_end";N&&O()&&N.mark(eb);!W.a||2048<W.b.length||W.b.push(X)}}else cb()}catch(a){var fb=T.l;try{Pa(db),fb=T.j(200,new na(a,{message:S(a)}),void 0,void 0)}catch(b){T.f(217,b)}if(!fb)throw a;};}).call(this);
   
   /* Adding */

   var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };