(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{iheF:function(e,t,r){"use strict";r.r(t);var s=r("ofXK"),n=r("tyNb"),o=r("mrSG");const i="undefined"!=typeof window&&window,c="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,u="undefined"!=typeof global&&global,a=i||u||c;var p=r("HDdC"),l=r("7o/Q"),h=r("lJxs");function d(e,t=null){return new T({method:"GET",url:e,headers:t})}function b(e,t,r){return new T({method:"POST",url:e,body:t,headers:r})}function f(e,t){return new T({method:"DELETE",url:e,headers:t})}function y(e,t,r){return new T({method:"PUT",url:e,body:t,headers:r})}function w(e,t,r){return new T({method:"PATCH",url:e,body:t,headers:r})}const m=Object(h.a)((e,t)=>e.response);function g(e,t){return m(new T({method:"GET",url:e,responseType:"json",headers:t}))}let T=(()=>{class e extends p.a{constructor(e){super();const t={async:!0,createXHR:function(){return this.crossDomain?function(){if(a.XMLHttpRequest)return new a.XMLHttpRequest;if(a.XDomainRequest)return new a.XDomainRequest;throw new Error("CORS is not supported by your browser")}():function(){if(a.XMLHttpRequest)return new a.XMLHttpRequest;{let t;try{const r=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"];for(let s=0;s<3;s++)try{if(t=r[s],new a.ActiveXObject(t))break}catch(e){}return new a.ActiveXObject(t)}catch(e){throw new Error("XMLHttpRequest is not supported by your browser")}}}()},crossDomain:!0,withCredentials:!1,headers:{},method:"GET",responseType:"json",timeout:0};if("string"==typeof e)t.url=e;else for(const r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);this.request=t}_subscribe(e){return new x(e,this.request)}}return e.create=(()=>{const t=t=>new e(t);return t.get=d,t.post=b,t.delete=f,t.put=y,t.patch=w,t.getJSON=g,t})(),e})();class x extends l.a{constructor(e,t){super(e),this.request=t,this.done=!1;const r=t.headers=t.headers||{};t.crossDomain||this.getHeader(r,"X-Requested-With")||(r["X-Requested-With"]="XMLHttpRequest"),this.getHeader(r,"Content-Type")||a.FormData&&t.body instanceof a.FormData||void 0===t.body||(r["Content-Type"]="application/x-www-form-urlencoded; charset=UTF-8"),t.body=this.serializeBody(t.body,this.getHeader(t.headers,"Content-Type")),this.send()}next(e){this.done=!0;const{xhr:t,request:r,destination:s}=this;let n;try{n=new q(e,t,r)}catch(o){return s.error(o)}s.next(n)}send(){const{request:e,request:{user:t,method:r,url:s,async:n,password:o,headers:i,body:c}}=this;try{const u=this.xhr=e.createXHR();this.setupEvents(u,e),t?u.open(r,s,n,t,o):u.open(r,s,n),n&&(u.timeout=e.timeout,u.responseType=e.responseType),"withCredentials"in u&&(u.withCredentials=!!e.withCredentials),this.setHeaders(u,i),c?u.send(c):u.send()}catch(u){this.error(u)}}serializeBody(e,t){if(!e||"string"==typeof e)return e;if(a.FormData&&e instanceof a.FormData)return e;if(t){const e=t.indexOf(";");-1!==e&&(t=t.substring(0,e))}switch(t){case"application/x-www-form-urlencoded":return Object.keys(e).map(t=>`${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`).join("&");case"application/json":return JSON.stringify(e);default:return e}}setHeaders(e,t){for(let r in t)t.hasOwnProperty(r)&&e.setRequestHeader(r,t[r])}getHeader(e,t){for(let r in e)if(r.toLowerCase()===t.toLowerCase())return e[r]}setupEvents(e,t){const r=t.progressSubscriber;function s(e){const{subscriber:t,progressSubscriber:r,request:n}=s;let o;r&&r.error(e);try{o=new O(this,n)}catch(i){o=i}t.error(o)}if(e.ontimeout=s,s.request=t,s.subscriber=this,s.progressSubscriber=r,e.upload&&"withCredentials"in e){if(r){let t;t=function(e){const{progressSubscriber:r}=t;r.next(e)},a.XDomainRequest?e.onprogress=t:e.upload.onprogress=t,t.progressSubscriber=r}let s;s=function(e){const{progressSubscriber:t,subscriber:r,request:n}=s;let o;t&&t.error(e);try{o=new v("ajax error",this,n)}catch(i){o=i}r.error(o)},e.onerror=s,s.request=t,s.subscriber=this,s.progressSubscriber=r}function n(e){}function o(e){const{subscriber:t,progressSubscriber:r,request:s}=o;if(4===this.readyState){let o=1223===this.status?204:this.status,i="text"===this.responseType?this.response||this.responseText:this.response;if(0===o&&(o=i?200:0),o<400)r&&r.complete(),t.next(e),t.complete();else{let i;r&&r.error(e);try{i=new v("ajax error "+o,this,s)}catch(n){i=n}t.error(i)}}}e.onreadystatechange=n,n.subscriber=this,n.progressSubscriber=r,n.request=t,e.onload=o,o.subscriber=this,o.progressSubscriber=r,o.request=t}unsubscribe(){const{done:e,xhr:t}=this;!e&&t&&4!==t.readyState&&"function"==typeof t.abort&&t.abort(),super.unsubscribe()}}class q{constructor(e,t,r){this.originalEvent=e,this.xhr=t,this.request=r,this.status=t.status,this.responseType=t.responseType||r.responseType,this.response=S(this.responseType,t)}}const v=(()=>{function e(e,t,r){return Error.call(this),this.message=e,this.name="AjaxError",this.xhr=t,this.request=r,this.status=t.status,this.responseType=t.responseType||r.responseType,this.response=S(this.responseType,t),this}return e.prototype=Object.create(Error.prototype),e})();function S(e,t){switch(e){case"json":return function(e){return"response"in e?e.responseType?e.response:JSON.parse(e.response||e.responseText||"null"):JSON.parse(e.responseText||"null")}(t);case"xml":return t.responseXML;case"text":default:return"response"in t?t.response:t.responseText}}const O=function(e,t){return v.call(this,"ajax timeout",e,t),this.name="AjaxTimeoutError",this},j=(()=>T.create)();var H=r("fXoL"),X=r("jhN1"),C=r("3Pt+");function R(e,t){if(1&e&&(H.Ob(0,"code"),H.hc(1),H.Nb()),2&e){const e=H.Yb();H.zb(1),H.ic(" Ocurri\xf3 un error: ",e.error,"\n")}}function M(e,t){if(1&e&&H.Kb(0,"img",4),2&e){const e=H.Yb();H.bc("src",e.domSanitizer.bypassSecurityTrustUrl(e.filePreviewUrl),H.ec)}}const D=[{path:"",component:(()=>{class e{constructor(e){this.domSanitizer=e}ngOnInit(){}convert(){return Object(o.a)(this,void 0,void 0,(function*(){try{const r=yield(t=this.url,Object(o.a)(void 0,void 0,void 0,(function*(){const{response:e}=yield j({url:t,responseType:"arraybuffer"}).toPromise();return e})));this.file=new File([r],`${(new Date).toISOString()}__profile-photo.jpg`,{type:"application/jpeg"}),this.filePreviewUrl=yield(e=this.file,new Promise((t,r)=>{const s=new FileReader;s.readAsDataURL(e),s.onload=()=>t(s.result),s.onerror=e=>r(e)})),this.error=null}catch(r){console.log(r),this.error=r.message,this.filePreviewUrl=null,this.file=null}var e,t}))}}return e.\u0275fac=function(t){return new(t||e)(H.Jb(X.b))},e.\u0275cmp=H.Db({type:e,selectors:[["app-url-to-file"]],decls:9,vars:3,consts:[["type","text","placeholder","url","width","300",3,"ngModel","ngModelChange"],[3,"click"],[4,"ngIf"],["alt","",3,"src",4,"ngIf"],["alt","",3,"src"]],template:function(e,t){1&e&&(H.Ob(0,"div"),H.Ob(1,"input",0),H.Wb("ngModelChange",(function(e){return t.url=e})),H.Nb(),H.Ob(2,"button",1),H.Wb("click",(function(){return t.convert()})),H.hc(3,"Convertir a File"),H.Nb(),H.Nb(),H.Kb(4,"hr"),H.Ob(5,"h1"),H.hc(6,"File preview:"),H.Nb(),H.gc(7,R,2,1,"code",2),H.gc(8,M,1,1,"img",3)),2&e&&(H.zb(1),H.bc("ngModel",t.url),H.zb(6),H.bc("ngIf",t.error),H.zb(1),H.bc("ngIf",t.filePreviewUrl))},directives:[C.a,C.e,C.f,s.j],styles:[""]}),e})()}];let E=(()=>{class e{}return e.\u0275mod=H.Hb({type:e}),e.\u0275inj=H.Gb({factory:function(t){return new(t||e)},imports:[[n.b.forChild(D)],n.b]}),e})();r.d(t,"UrlToFileModule",(function(){return L}));let L=(()=>{class e{}return e.\u0275mod=H.Hb({type:e}),e.\u0275inj=H.Gb({factory:function(t){return new(t||e)},imports:[[s.c,C.d,E]]}),e})()}}]);