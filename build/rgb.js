require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"TZeL/P":[function(require,module,exports){
(function (global){
(function browserifyShim(module, exports, define, browserify_shim__define__module__export__) {
/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});

; browserify_shim__define__module__export__(typeof $ != "undefined" ? $ : window.$);

}).call(global, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],"jquery":[function(require,module,exports){
module.exports=require('TZeL/P');
},{}],3:[function(require,module,exports){

var RGB = require('./RGB');

var outputFunctions = [];

function setOutputFunction(fun) {
    outputFunctions.push(fun);
}

function _write(message, color) {
    for (var i = 0; i < outputFunctions.length; i++) {
        outputFunctions[i](message, color);
    }
}

function crit(message) {
    _write(message, "#FF0000");
}

function ding(message) {
    _write(message, "#FFD700");
}

function warn(message) {
    _write(message, "FFA500");
}

function log(message) {
    _write(message, "FFFFFF");
}

function debug(message) {
    _write(message, RGB.Grey.toString());
}

module.exports = {
    ding: ding,
    crit: crit,
    warn: warn,
    log: log,
    debug: debug,
    setOutputFunction: setOutputFunction
};
},{"./RGB":7}],4:[function(require,module,exports){
var Hero = require('./creeps/Hero');
var Direction = require('./map/Direction');
var InputTrigger = require('./InputTrigger');
var LevelFactory = require('./levels/LevelFactory');
var HeroController = require('./creeps/HeroController');
var Chat = require('./Chat');
var util = require('./Utility');


function Game(deathCallback) {
    this.hero = new Hero(deathCallback);
    this.heroController = new HeroController(null, null, this.hero);
    this.levels = [];
    this.levelIndex = 0;
    this.generateNewLevel();
    this.moveHeroToLevel(0);
    this.chat = chat;
	this.input = {};
	this.initInput();
}

/* The radius squared around the hero that creeps will use special move logic to 
   avoid other creeps */
Game.CREEP_AVOID_CREEP_RAD_SQR = 25;

Game.prototype = {
    getTileMap: function() {
        return this.level.tileMap;
    },
    getCreepMap: function() {
        return this.level.creepMap;
    },
    takeHeroTurn: function(code) {
		// If there is an InputTrigger for this code, fire it
        if (this.input[code]) {
			this.input[code].fire();
		}
    },
    takeCreepTurn: function(creepController, dijk, closeQuartersDijk) {
        // attack logic if we are in this dimension
        if (creepController.isAdjacentToHero()) {
            creepController.attackHero();
        } else if(creepController.aggroHero()) {
            // Prioritize closeQuartersDijk if it has information
            var next = closeQuartersDijk.getNextTile(creepController.getCharacter().getLocation());
            if (!next) {
                next = dijk.getNextTile(creepController.getCharacter().getLocation());
                if (next)
					console.log("Dikj is telling me to go to", next.toString(), 'from', creepController.getCharacter().getLocation().toString());
            }
            else {
				if (next)
					console.log("closeQtrDikj is telling me to go to", next.toString(), 'from', creepController.getCharacter().getLocation().toString());
            }
			if (next) {
				var dir = creepController.getCharacter().getLocation().directionTo(next);
				if (creepController.canMove(dir)) {
					creepController.move(dir);
				} else {
					// Dijkstra should never tell the creep to move where it can't BUT just in case it does
					this.doBestAdjacentMove(creepController);
				}
			} else {
				this.doBestAdjacentMove(creepController);
			}
        }
    },
	/* This serves as a workaround for the problem state we've been running into where both
	   closeQtrDijkstra and dijkstra have no information for a particular creep location,
	   which causes errors. As root cause is unknown, we will simply attempt the best adjacent
	   move in this scenario and if that fails keep the creep stationary. */
	doBestAdjacentMove: function(creepController) {
		var dir = Direction.NORTH;
		var loc = creepController.getCharacter().getLocation();
		var heroLoc = creepController.getCreepMap().getHero().getLocation();
		var left = 100000;
		var right = 100000;
		var straight = 100000;
		var behind = 100000;
		var canMove = false;
		var moveWeights = [];
		var moves = {};
		if (creepController.canMove(dir)) {
			canMove = true;
			straight = loc.add(dir).distanceSquaredTo(heroLoc);
			moveWeights.push(straight);
			moves[straight] = dir;
		}
		if (creepController.canMove(dir.rotateLeft())) {
			canMove = true;
			left = loc.add(dir.rotateLeft()).distanceSquaredTo(heroLoc);
			moveWeights.push(left);
			moves[left] = dir.rotateLeft();
		}
		if (creepController.canMove(dir.rotateRight())) {
			canMove = true;
			right = loc.add(dir.rotateRight()).distanceSquaredTo(heroLoc);
			moveWeights.push(right);
			moves[right] = dir.rotateRight();
		}
		if (creepController.canMove(dir.opposite())) {
			canMove = true;
			behind = loc.add(dir.opposite()).distanceSquaredTo(heroLoc);
			moveWeights.push(behind);
			moves[behind] = dir.opposite();
		}
		if (canMove) {
			moveWeights.sort(util.op("sortAsc"));
			creepController.move(moves[moveWeights[0]]);
		}
	},
	/* dijk - move map where the absence of a tile is the obstacle
       closeQuartersDijk - move map of radius sqaured r^2 around hero where the presence 
						   of a creep is the obstacle */
    takeCreepTurns: function(dijk, closeQuartersDijk) {
        var creepControllers = this.level.getCreepControllers();
        var toRemove = [];
        var dimensionRGB = this.hero.getDimension().getRGB();
        for (var i = 0; i < creepControllers.length; i++) {
            var creepController = creepControllers[i];
            creepController.getCharacter().tick();
            // skip the creeps turn if not present in the current dimension
            if (creepController.getCharacter().getRGB().mask(dimensionRGB).isBlack()) {
                continue;
            }


            while(creepController.getCharacter().isActive()) {
                creepController.character.takeAction();
                this.takeCreepTurn(creepController, dijk, closeQuartersDijk);
            }
        }

    },
    moveOrAttackHero: function(dir) {
        this.heroController.moveOrAttack(dir);
        var level = this.levelIndex;
        var newLoc = this.heroController.getCharacter().getLocation();
        if (this.getTileMap().getUpStairsLoc().isEqualTo(newLoc)) {
            this.moveHeroToLevel(++level);
        } else if (this.level.getTileMap().getDownStairsLoc().isEqualTo(newLoc) && this.levelIndex != 0) {
            this.moveHeroToLevel(--level);
        }

    },
    switchDimensions: function(num) {
        if (this.hero.canSwitchDimensions()) {
            this.hero.takeAction();
            this.hero.resetPowerUpCount();
            this.hero.switchDimensions(num);
        } else {
            Chat.warn("You can't do that yet!");
        }
    },
    activatePowerUp: function() {
        var neighbors, i, creep;
        console.log("activating power up");
        if (!this.hero.canPowerUp()) {
            console.log("can't activate yet!");
            Chat.log("Not ready yet!");
            return;
        }
        var times = 5 + Math.ceil(this.hero.getDimension().getLevel() / 5);
        var radius =  Math.ceil(this.hero.getDimension().getLevel() / 5);
        var dmg = this.hero.getMaxHealth() * (this.hero.getDimension().getRGB().toDecimal() / 255);

        if (this.hero.getDimension().getRGB().hasRed()) {
            console.log("Activating blue power up");
            this.hero.powerUp();
            this.hero.poweredUp = false;
            neighbors = this.heroController.getCreepsInRadiusSquared(radius);
            Chat.warn("You release a pulse of energy");
            for (i = 0; i < neighbors.length; i++) {
                creep = neighbors[i];
                if (creep.getRGB().hasRed()) {
                    creep.addToActionDelay(times);
                    Chat.warn(creep.getName() + " is stunned!")
                }
            }
        } else if (this.hero.getDimension().getRGB().hasGreen()) {
            console.log("Activating green power up");
            Chat.warn("You feel faster!");
            this.hero.powerUp();
            this.hero.addToSpeedBoost(times);
        } else if (this.hero.getDimension().getRGB().hasBlue()) {
            console.log("Activating blue power up");
            this.hero.powerUp();
            this.hero.poweredUp = false;
            neighbors = this.heroController.getCreepsInRadiusSquared(radius);

            Chat.warn("You release a wave of fire");
            for (i = 0; i < neighbors.length; i++) {
                creep = neighbors[i];
                if (creep.getRGB().hasBlue()) {
                    this.heroController.doDamageToCreep(creep, dmg);
                    Chat.warn(creep.getName() + " is damaged by the flames!")

                }
            }
        }
    },
    getScore: function() {
        return (this.levels.length - 1) * 1000 + this.heroController.getScore();
    },
    getDungeonLevel: function() {
        return this.levelIndex + 1;
    },
	initInput: function() {
		this.input[37] = new InputTrigger(function() {
            this.hero.takeAction();
			this.moveOrAttackHero(Direction.WEST);
		}, this);
		this.input[38] = new InputTrigger(function() {
            this.hero.takeAction();
			this.moveOrAttackHero(Direction.NORTH);
		}, this);
		this.input[39] = new InputTrigger(function() {
            this.hero.takeAction();
			this.moveOrAttackHero(Direction.EAST);
		}, this);
		this.input[40] = new InputTrigger(function() {
            this.hero.takeAction();
			this.moveOrAttackHero(Direction.SOUTH);
		}, this);
        this.input[49] = new InputTrigger(function() {
            this.switchDimensions(0);
        }, this);
        this.input[50] = new InputTrigger(function() {
            this.switchDimensions(1);
        }, this);
        this.input[51] = new InputTrigger(function() {
            this.switchDimensions(2);
        }, this);
        this.input[32] = new InputTrigger(function() {
            this.activatePowerUp();
        }, this);
	},
    generateNewLevel: function() {
        if (!this.levels.length) {
            this.levels.push(LevelFactory.getLevel(0, this.hero.getLevel()));
        } else {
            this.levels.push(LevelFactory.getLevel(this.levelIndex + 1, this.hero.getLevel()));
        }
    },
    moveHeroToLevel: function(index) {
        if (this.level) {
            this.level.getCreepMap().removeHero();
        }

        while (this.levels.length <= index) {
            this.generateNewLevel();
        }
        this.level = this.levels[index];
        var loc = this.levelIndex < index || (this.levelIndex === 0 && index === 0) ?
            this.level.getTileMap().getDownStairsLoc() :
            this.level.getTileMap().getUpStairsLoc();
        this.levelIndex = index;
        if (this.levelIndex == 1) {
            Chat.warn("There is nothing here!");
            Chat.log("(Hint: Press 2 to enter the green dimension)")
        } else if (this.levelIndex === 2) {
            Chat.warn("There is nothing here!");
            Chat.log("(Hint: Press 3 to enter the blue dimension)")
        }
        this.level.getCreepMap().addHeroToMapAtLoc(loc, this.hero);
        this.heroController.setCreepMap(this.level.getCreepMap());
        this.heroController.setTileMap(this.level.getTileMap());
    },
    getHero: function() {
        return this.hero;
    },
    getHeroController: function() {
        return this.heroController;
    },
	// Debug, get dijkstra objects
	getCloseQtrDijkstra: function() {
		return this.closeQuartersDijk;
	},
	getDijkstra: function() {
		return this.dikj;
	}
	// End Debug, get dijkstra objects
};

module.exports = Game;
},{"./Chat":3,"./InputTrigger":6,"./Utility":8,"./creeps/Hero":17,"./creeps/HeroController":18,"./levels/LevelFactory":30,"./map/Direction":38}],5:[function(require,module,exports){
function GameObject() {
}

GameObject.prototype = {
	getRepr: function() {
		return this.repr;
	},
	getRGB: function(filter) {
		if (!filter) {
			return this.rgb;
		}
		return this.rgb.mask(filter)
	},
};

module.exports = GameObject;
},{}],6:[function(require,module,exports){
/* The idea behind this class is to cleanly tie event codes to game logic. The event codes
   will go into a hash in Game.js and the values will be of type InputTrigger.*/
function InputTrigger(callback, scope) {
	this.callback = callback;
	this.scope = scope;
	this.args = arguments;
}

InputTrigger.prototype = {
	fire: function() {
		this.callback.apply(this.scope, this.args);
	}
};

module.exports = InputTrigger;
},{}],7:[function(require,module,exports){


function RGB(red, green, blue) {
	this.red = red;
	this.green = green;
	this.blue = blue;
}

RGB.prototype = {
	mask: function(rgb) {
		return new RGB(
			Math.min(this.red, rgb.red),
			Math.min(this.green, rgb.green),
			Math.min(this.blue, rgb.blue)
		);
	},
	toString: function() {
		var str = '#';
		var rgbArray = [this.red, this.green, this.blue];
		for (var i = 0; i < rgbArray.length; i++) {
			if (rgbArray[i] < 16) {
				str += "0"
			}
			str += rgbArray[i].toString(16);
		}
		return str;
	},
	toDecimal: function() {
		return this.red + this.green + this.blue;
	},
    hasBlue: function() {
        return this.blue > 0;
    },
    hasRed: function() {
        return this.red > 0;
    },
    hasGreen: function() {
        return this.green > 0;
    },
	isBlack: function() {
		return this.red === 0 && this.green === 0 && this.blue === 0;
	},
    isNotBlack: function() {
        return !this.isBlack();
    },
    merge: function(rgb) {
        return new RGB(
            Math.max(this.red, rgb.red),
            Math.max(this.green, rgb.green),
            Math.max(this.blue, rgb.blue)
        )
    },
    add: function(rgb) {
        return new RGB(
            Math.min(255, this.red + rgb.red),
            Math.min(255, this.green + rgb.green),
            Math.min(255, this.blue + rgb.blue)
        );
    },
    getUnitVector: function() {
        return new RGB(
            Math.min(1, this.red),
            Math.min(1, this.green),
            Math.min(1, this.blue)
        )

    }

};

RGB.Black = new RGB(0, 0, 0);
RGB.Blue = new RGB(0, 0, 255);
RGB.DarkBlue = new RGB(0, 0, 125);
RGB.Gold = new RGB(255, 165, 0);
RGB.DarkGold = new RGB(127, 82, 0);
RGB.Grey = new RGB(192, 192, 192);
RGB.Green = new RGB(0, 128, 0);
RGB.LightGreen = new RGB(0, 240, 0);
RGB.Red = new RGB(255, 0, 0);
RGB.DarkRed = new RGB(100, 0, 0);
RGB.White = new RGB(255, 255, 255);
RGB.Orange = new RGB(255, 165, 0);
RGB.DarkGrey = new RGB(84, 84, 84);

module.exports = RGB;
},{}],8:[function(require,module,exports){

var Utility = {
	/* Bound value */
	bound: function(val, low, high) {
		if (low > high) {
			throw "Error: Utility.bound called with low > high.";
		} else if (val < low) {
			return low;
		} else if (val > high) {
			return high;
		} else {
			return val;
		}
	},
	// Bounds a value to within a set of ranges. If value is outside of all ranges,
	// value will be bound to the low/high of the closest range. range arguments should
	// take the form: low, high, low, high.
	boundRanges: function(val) {
		if (arguments.length < 3 || arguments.length % 2 === 0) {
			throw "Error: Utility.boundRanges called with incorrect number of arguments.";
		} else {
			var i = 1;
			while (i < arguments.length - 1) {
				if (arguments[i] > arguments[i + 1]) {
					throw "Error: Utility.boundRanges called with invalid range.";
				}
				if (val >= arguments[i] && val <= arguments[i + 1]) {
					// In range
					return val;
				} else if (i === arguments.length - 2 || val < arguments[i + 2]) {
					var bounds = [];
					if (i !== 1) {
						bounds.push(arguments[i - 1]);
					}
					if (i !== arguments.length - 2) {
						bounds.push(arguments[i+2]);
					}
					bounds.push(arguments[i]);
					bounds.push(arguments[i + 1]);
					var util = this;
					bounds.sort(function(a, b) {
					var distFromVal1 = Math.abs(a - val);
					var distFromVal2 = Math.abs(b - val);
					return util.op("sortAsc").call(null, distFromVal1, distFromVal2);
					});
					return bounds.shift();
				}
				i += 2;
			}
		}
	},
	/* Wrap Value */
	wrap: function(val,low,high) {
		if (low > high) {
			throw "Error: Utility.wrap called with low > high.";
		} else if (val > high){
			return low + val - high;
		} else if (val < low) {
			return high - (low - val);
		} else {
			return val;
		}
	},
	/* Tester functions */
	isInstanceTest: function(constructor) {
		return function(obj) {
			if (obj instanceof(constructor)) {
				return true;
			} else {
				return false;
			}
		};
	},
	/* Partial*/
	partial: function (func) {
		var presetArgs = this.asArray(arguments, 1);
		var util = this;
		return function() {
		   return func.apply(null, presetArgs.concat(util.asArray(arguments)));
		};
	},
	/* Sort obj */
	sortObjAsc: function(prop) {
		var util = this;
		return function(obj1, obj2) {
			util.op("sortAsc").call(null, obj1[prop], obj2[prop]);
		};
	},
	sortObjDsc: function(prop) {
		var util = this;
		return function(obj1, obj2) {
			util.op("sortDesc").call(null, obj1[prop], obj2[prop]);
		};
	},
	/* Operator/Sorting functions */
	op: function(op) {
		switch(op) {
			case "===":
				return function(a, b) {
					return a === b;
				};
			break;
			case "!==":
				return function(a, b) {
					return a !== b;
				};
			break;
			case "sortAsc":
				return function(a, b) {
					if (a < b) {
						return -1
					} else if(a > b) {
						return 1;
					} else {
						return 0;
					}
				};
			break;
			case "sortDesc":
				return function(a, b) {
					if (a < b) {
						return 1
					} else if(a > b) {
						return -1;
					} else {
						return 0;
					}
				};
			break;
			default:
				throw "Error: op called with unknown operator.";
		}
	},
	/* Random number */
	rand: function(low, high) {
		/* This function will simulate random number generation if "allowRandom" in the global
		   settings object is turned off. The significance of this is that the simulated version
		   will be deterministic, which can be useful in debugging. */
		if (low > high) {
			throw "Error: Utility.rand called with low > high.";
		} else if (true) {//if (asteroids.settings.get("allowRandom")) {
			return Math.floor(Math.random() * (Math.floor(high) - Math.ceil(low) + 1)) + Math.ceil(low);
		} else {
			var counter = 0;
			if (!this.pseudoRandom) {
				this.pseudoRandom = function(low, high) {
					counter += 7;
					this.bound(counter, 0, 10000);
					return counter % (Math.floor(high) - Math.ceil(low) + 1) + Math.ceil(low);
				};
			}
			return this.pseudoRandom.call(this, low, high);
		}
	},
	randomArray: function(length, low, high) {
		var randArray = [];
		for(var i = 0; i < length; ++i) {
			randArray.push(rand(low,high));
		}
		return randArray;
	},
	/* Array tools */
	asArray: function(quasiArray, start) {
		var result = [];
		for(var i = (start || 0); i < quasiArray.length; ++i) {
			result.push(quasiArray[i]);
		}
		return result;
	},
	forEach: function(array, func) {
		for(var i = 0; i < array.length; ++i) {
			func(array[i]);
		}
	},
	test: function(testFunc, array) {
		var result = false;
		try {
			this.forEach(array, function(element) {
				if (testFunc(element)) {
					result = true;
					throw "allDone";
				}
			});
		} catch(exception) {
			if (exception !== "allDone") {
				throw exception;
			}
		}

		return result;
	},
	hasValue: function(array, val) {
		return test( function(element) {
			if (element === val) {
				return true;
			} else {
				return false;
			}
		}, array);
	},
	filter: function(test, array) {
		var result = [];
		this.forEach(array, function(element) {
			if( test(element) )
				result.push(element);
		});
		return result;
	},
	copy: function(array) {
		var result = [];
		this.forEach(array, function(element) {
			result.push(element);
		});
		return result;
	},
	map: function(action, array) {
		var result = [];
		this.forEach(array, function(element) {
			result.push(action(element));
		});
		return result;
	},
	reduce: function(combine, base, array) {
		this.forEach(array, function(element) {
			base = combine(base, element);
		});
		return base;
	},
	/* DOM tools */
	$: function(id) {
		return document.getElementById(id);
	},
	setNodeAttribute: function(node, attribute, value) {
		if( attribute == "class" ) {
			node.className = value;
		} else if( attribute == "checked" ) {
			node.defaultChecked = value;
		} else if( attribute == "for" ) {
			node.htmlFor = value;
		} else if( attribute == "style" ) {
			node.style.cssText = value;
		} else {
			node.setAttribute(attribute, value);
		}
	},
	dom: function(name, attributes) {
		var node = document.createElement(name);
		var util = this;
		if( attributes ) {
			this.forEachIn(attributes, function(name, value) {
				util.setNodeAttribute(node, name, value);
			});
		}
		for(var i = 2; i < arguments.length; ++i) {
			var child = arguments[i];
			if( typeof child == "string" )
				child = document.createTextNode(child);
			node.appendChild(child);
		}
		return node;
	},
	domAppend: function(node, name, attributes) {
		node.appendChild(
			utility.dom.apply(this, Array.prototype.slice.call(arguments, 1)));
	},
	deleteNode: function(node) {
		if( node.parentNode ) {
			node.parentNode.removeChild(node);
		}
	},
	/* Browser events */
	registerEventHandler: function(node, event, handler) {
		if( typeof node.addEventListener == "function" ) {
			node.addEventListener(event, handler, false);
		} else {
			node.attachEvent("on" + event, handler);
		}
	},
	unregisterEventHandler: function(node, event, handler) {
		if( typeof node.removeEventListener == "function" ) {
			node.removeEventListener(event, handler, false);
		} else {
			node.detachEvent("on" + event, handler);
		}
	},
	normalizeEvent: function(event) {
		if (!event.stopPropagation) {
			event.stopPropagation = function() {this.cancelBubble = true;};
			event.preventDefault = function() {this.returnValue = false;};
		}
		if (!event.stop) {
			event.stop = function() {
				this.stopPropagation();
				this.preventDefault();
			};
		}

		if (event.srcElement && !event.target)
			event.target = event.srcElement;
		if ((event.toElement || event.fromElement) && !event.relatedTarget)
			event.relatedTarget = event.toElement || event.fromElement;
		if (event.clientX != undefined && event.pageX == undefined) {
			event.pageX = event.clientX + document.body.scrollLeft;
			event.pageY = event.clientY + document.body.scrollTop;
		}
		if (event.type == "keypress") {
			if (event.charCode === 0 || event.charCode == undefined)
				event.character = String.fromCharCode(event.keyCode);
			else
				event.character = String.fromCharCode(event.charCode);
		}

		return event;
	},
	addHandler: function(node, type, handler) {
		var util = this;
		function wrapHandler(event) {
			handler(util.normalizeEvent(event || window.event));
		}
		this.registerEventHandler(node, type, wrapHandler);
		return {node: node, type: type, handler: wrapHandler};
	},
	removeHandler: function(object) {
		this.unregisterEventHandler(object.node, object.type, object.handler);
	},
	/* OOP helpers */
	clone: function(object) {
		function DummyConstructor() {}
		DummyConstructor.prototype = object;
		return new DummyConstructor();
	},
	inherit: function(child, parent) {
		var prototype = this.clone(parent.prototype);
		prototype.constructor = child;
		child.prototype = prototype;
	},
	extend: function(type, properties) {
		this.forEachIn(properties, function(property, value) {
			type.prototype[property] = value;
		});
	},
	bind: function(func, object) {
		return function() {
			return func.apply(object,arguments);
		};
	},
	method: function(object, name) {
		return function() {
			return object[name].apply(object, arguments);
		};
	},
	/* Object manipulation */
	forEachIn: function(object, action) {
		for(var property in object) {
			if( Object.prototype.hasOwnProperty.call(object, property) &&
				Object.prototype.propertyIsEnumerable.call(object, property) ) {
				action(property, object[property]);
			}
		}
	},
	copy: function(object) {
		var copy = {};
		this.forEachIn(object, function(prop, val) {
			copy[prop] = val;
		});
		return copy;
	}
};

// Export as singleton
module.exports = Utility;
},{}],9:[function(require,module,exports){
var GameObject = require('../GameObject');
var utils = require('../Utility');
var Chat = require('../Chat');

function Character(stats, numActions, radiusSquared, name) {
    this.stats = stats;
    this.health = this.getMaxHealth();
    this.numActions = numActions;
    this.radiusSquared = radiusSquared;
    this.name = name;
    this.actionDelay = 0;
}

Character.prototype = new GameObject();

utils.extend(Character, {
    tick: function() {
        this.actionDelay -= 1;
        this.actionDelay = Math.max(this.actionDelay, 0);
    },
    isActive: function() {
        return this.actionDelay < this.numActions;
    },
    takeAction: function() {
        this.actionDelay += 1 / this.numActions;
    },
    addToActionDelay: function(amount) {
        this.actionDelay += amount;
    },
    setHealth: function(health) { this.health = health; },
    addHealth: function(toAdd) {
        this.health += toAdd;
        this.health = Math.min(this.stats.getMaxHealth(), this.health);
    },
    getHealth: function() { return this.health; },
    getMaxHealth: function() {
        if (this.stats) {
            return this.stats.getMaxHealth();
        } else {
            return 10;
        }
    },
    getLevel: function() {
        if (this.stats) {
            return this.stats.getLevel();
        } else {
            return 1;
        }

    },
    getLocation: function() { return this.location; },
    setLocation: function(loc) { this.location = loc },
    getStats: function() {return this.stats;},
    getNumActions: function() {return this.numActions; },
    isDead: function() {return this.health <= 0; },
    kill: function() { throw "Character.kill implement me!"; },
    getRadiusSquared: function() { return this.radiusSquared },
    getName: function() { return this.name; }
});

module.exports = Character;
},{"../Chat":3,"../GameObject":5,"../Utility":8}],10:[function(require,module,exports){
function Controller(tileMap, creepMap, character) {
    this.tileMap = tileMap;
    this.creepMap = creepMap;
    this.character = character;
}

Controller.prototype = {
    /**
     * Checks if the tile is empty before moving
     * can fall off map if you do this. :)
     * @param dir direction to move
     * @returns {*}
     */
    canMoveUnsafe: function(dir) {
        return this.isEmpty(this.character.getLocation().add(dir));
    },
    /**
     * Checks to see if you can see the tile before moving
     * @param dir direction to move
     * @returns {boolean|*}
     */
    canMove: function(dir) {
        var loc = this.character.getLocation().add(dir);
        return this.isViewableTile(loc)
            && this.isEmpty(loc)
            && this.character.getLocation().isAdjacentTo(loc);
    },
    /**
     * Returns whether or not the character can 'see' the tile
     * @param loc
     * @returns {boolean}
     */
    isViewableTile: function(loc) {
        var tile = this.tileMap.getTileAtLoc(loc);
        if (!tile) {
            return false;
        }
        return !tile.getRGB(this.character.getRGB()).isBlack();
    },
    /**
     * Returns if the given tile is empty
     * @param loc
     * @returns {boolean}
     */
    isEmpty: function(loc) {
        return !this.creepMap.getCreepAtLoc(loc);
    },
    /**
     * Moves the character in the given direction is possible!
     * @param dir
     */
    move: function(dir) {
        if (!dir) {
            throw "can't move in dir " + dir;
        }
        if (!this.canMove(dir)) {
            throw "Can't move in that dir " + dir;
        }
        this.creepMap.moveCreepToLoc(this.character.getLocation().add(dir), this.character);
    },

    /**
     * Attacks whatever is in the given direction
     * @param dir
     */
    attack: function(dir) {
        throw "Controller attack, implement me!"
    },
    getCharacter: function() {
        return this.character;
    },
    getCreepMap: function() {
        return this.creepMap;
    },
    setCreepMap: function(creepMap) {
        this.creepMap = creepMap;
    },
    getTileMap: function() {
        return this.tileMap;
    },
    setTileMap: function(tileMap) {
        this.tileMap = tileMap;
    },
    getCreepsInRadiusSquared: function(radiusSquared) {
        var creeps = [];
        radiusSquared = radiusSquared || this.getCharacter().getRadiusSquared();
        var radius = Math.ceil(Math.sqrt(radiusSquared));
        var loc = this.getCharacter().getLocation();
        for (var x = -radius; x <= radius; x++) {
            for (var y = -radius; y <= radius; y++) {
                if (x === 0 && y === 0) {
                    continue;
                }
                var newLoc = loc.addXY(x, y);
                var creep = this.getCreepMap().getCreepAtLoc(newLoc);
                if (creep && loc.distanceSquaredTo(newLoc) <= radiusSquared && !creep.isHero()) {
                    creeps.push(creep);
                }
            }
        }
        return creeps;
    },
};

module.exports = Controller;
},{}],11:[function(require,module,exports){
var Experience = require('./Experience');
var Utility = require('../Utility');
/* Core stats for game entities performing actions. */

function CoreStats(level, statGain, seed) {
    this.str = (seed && seed.str) || 10;
    this.agi = (seed && seed.agi) || 10;
    this.con = (seed && seed.con) || 10;
    this.level = 0;
    this.statGain = statGain || {
        str: 1,
        agi: 1,
        con: 1
    };
    for (var i = 0; i < level; i++) {
        this.levelUp();
    }
    this.experience = this.getXPForLevel(level);
}

CoreStats.HeroStatGain = {
    str: 1.2,
    agi: 1.2,
    con: 1.2
};

CoreStats.HeoStatSeed = {
    str: 12,
    agi: 12,
    con: 12
};

CoreStats.EasyGain = {
    str: .8,
    agi: .8,
    con: .8
};

CoreStats.EasySeed = {
    str: 8,
    agi: 8,
    con: 8
};

CoreStats.MediumGain = {
    str: 1.0,
    agi: 1.0,
    con: 1.0
};

CoreStats.MediumSeed = {
    str: 10,
    agi: 10,
    con: 10
};

CoreStats.FastSeed = {
    str: 10,
    agi: 10,
    con: 5
};

CoreStats.FastGain = {
    str: 1,
    agi: 1,
    con:.5
};


CoreStats.SlowSeed = {
    str: 20,
    agi: 10,
    con: 20
};

CoreStats.SlowGain = {
    str: 2,
    agi: .9,
    con: 2
};


CoreStats.HardSeed = {
    str: 12,
    agi: 12,
    con: 12
};

CoreStats.HardGain = {
    str: 1.2,
    agi: 1.2,
    con: 1.2
};

CoreStats.GlassCannonSeed = {
    str: 20,
    agi: 8,
    con: 2
};

CoreStats.GlassCannonGain = {
    str: 1.2,
    agi: 1.2,
    con: 0.2
};

CoreStats.LumberingMonstrositySeed = {
    str: 20,
    agi: 3,
    con: 20
};

CoreStats.LumberingMonstrosityGain = {
    str: 1.2,
    agi: 0.3,
    con: 1.5
};

CoreStats.NinjaSeed = {
    str: 13,
    agi: 20,
    con: 5
};

CoreStats.NinjaGain = {
    str: 1.0,
    agi: 1.5,
    con: 0.1
};

CoreStats.prototype = new Experience();

Utility.extend(CoreStats, {
	// Resolves whether this entity successfully hits target entity by comparing core stats
	resolveHit: function(targetCoreStats) {
		var chanceToHit = Math.atan(this.agi / targetCoreStats.agi) / (Math.PI/2);
        // if agi are equal, 50%
        // never gets to 100%
        // never gets to 0%
        // this.agi / target = .1 => 6% chance
        // this.agi / target = 10 => 93% chance
		return Math.random() < chanceToHit;
	},
	// Resolves how much damage this entity deals to target entity by comparing core stats
	resolveDamage: function(targetCoreStats) {
		var dmg = this.str / 10;
        dmg += (this.str - targetCoreStats.str) / 10;
        // chance for crit!
        for(var i = 0; i < this.agi / 10; i++) {
            if (Math.random() > .99) {
                dmg *= 2;
                break;
            }
        }
        return Math.max(1, dmg);

	},
    getMaxHealth: function() {
        return Math.round(this.con);
    },
    levelUp: function() {
        // increase str
        this.str += this.statGain.str;
        if (Math.random() > .95) {
            this.str += this.statGain.str;
        }

        // increase agi
        this.agi += this.statGain.agi;
        if (Math.random() > .95) {
            this.agi += this.statGain.agi;
        }

        // increase con
        this.con += this.statGain.con;
        if (Math.random() > .95) {
            this.con += this.statGain.con;
        }

        this.level++;
    }
});

module.exports = CoreStats;
},{"../Utility":8,"./Experience":16}],12:[function(require,module,exports){
/* Generic creep class which provides a base from which to specialize. */
var Character = require('./Character');
var util = require('./../Utility');
var Messages = require('./Messages');
var Chat = require('../Chat');
var CoreStats = require('./CoreStats');

function Creep(options) {
	// Attributes
    // required attributes
    this.validateOptions(options); // makes sure there 4 are here
    this.repr = options.repr;
    this.name = options.name;
	this.radiusSquared = options.radiusSquared;
	this.rgb = options.rgb;

    // optional attributes
    this.alertRange = options.alertRange || this.radiusSquared;
    this.numActions = options.numActions || 1;
	this.stats = options.stats || new CoreStats(1);
    this.messages = options.messages || new Messages(this.name);
	
	// Status
	this.health = this.stats.getMaxHealth();
	this.location = null;
    this.aggro = false;
}

// Class constants
Creep.ATTACK_TYPE_MELEE = 1;
Creep.ATTACK_TYPE_RANGED = 2;

Creep.prototype = new Character();

util.extend(Creep, {
    validateOptions: function(options) {
        util.forEachIn(['repr', 'name', 'radiusSquared', 'rgb'], function(key, value) {
            if (!options[value]) {
                throw "options." + value + " not found";
            }
        });
    },
    applyDamage: function(damage, rgb) {
        // calculate the amount of damage you can do
        this.health -= damage;
        if (this.health > 0) {
            return false;
        } else {
            this.kill();
            return true;
        }
    },
    getHitMessage: function() {
        return this.messages.getHitMessage();
    },
    getMissMessage: function() {
        return this.messages.getMissMessage();
    },
    getAlertMessage: function() {
        return this.messages.getAlertMessage();
    },
    setAggro: function(aggro) {
        this.aggro = aggro;
    },
    isAggroed: function() { return this.aggro; },
    kill: function() {
        Chat.log(this.messages.getDeathMessage());
    },
    isHero: function() { return false; }
});

module.exports = Creep;
},{"../Chat":3,"./../Utility":8,"./Character":9,"./CoreStats":11,"./Messages":19}],13:[function(require,module,exports){
var util = require('./../Utility');
var Controller = require('./Controller');
var Chat = require('./../Chat');

function CreepController(tileMap, creepMap, creep) {
    this.tileMap = tileMap;
    this.creepMap = creepMap;
    this.character = creep;
    this.aggroed = false;
}

CreepController.prototype = new Controller();

util.extend(CreepController, {
    /**
     * Checks to see if the creep is adjacent to the hero
     * @returns {*}
     */
    isAdjacentToHero: function() {
        var ourLoc = this.getCharacter().getLocation();
        var theirLoc = this.creepMap.getHero().getLocation();
        if (!ourLoc || !theirLoc) {
            console.warn("something wrong here!");
        }
        return ourLoc && theirLoc && ourLoc.isAdjacentTo(theirLoc);
    },
    /**
     * Attacks whatever is in the given direction
     * @param dir
     */
    attack: function(dir) {
        var loc = this.getCharacter().getLocation().add(dir);
        if (this.isEmpty(loc)) {
            throw "Tried to attack an empty square... :("
        }
        var target = this.getCreepMap().getCreepAtLoc(loc);

        if(this.getCharacter().getStats().resolveHit(target.getStats())) {
            var dmg = this.getCharacter().getStats().resolveDamage(target.getStats());
            Chat.warn(this.character.getHitMessage());
            target.applyDamage(dmg, this.getCharacter().getRGB());
        } else {
            Chat.debug(this.character.getMissMessage());
        }

    },
    attackHero: function() {
        if (!this.isAdjacentToHero()) {
            throw "Tried to attack hero but not adjacent!";
        }
        var dirToHero = this.getCharacter().getLocation().directionTo(this.getCreepMap().getHero().getLocation());
        this.attack(dirToHero);
    },
    aggroHero: function() {
        var ourLoc = this.character.getLocation();
        var theirLoc = this.creepMap.getHero().getLocation();
        if (!ourLoc || !theirLoc) {
            console.warn("something wrong here!");
        }
        var sees = ourLoc && theirLoc && ourLoc.distanceSquaredTo(theirLoc) <= this.getCharacter().getRadiusSquared();
        if (sees && !this.getCharacter().isAggroed()) {
            // once we see the hero, don't stop chasing till he's dead!
            Chat.warn(this.character.getAlertMessage());
            this.getCharacter().setAggro(true);
            var neighbors = this.getCreepsInRadiusSquared(this.character.alertRange);
            for (var i = 0; i < neighbors.length; i++) {
                if (!this.getCharacter().getRGB().mask(neighbors[i].getRGB()).isBlack()) {
                    neighbors[i].setAggro(true);
                }
            }
        }
        return this.getCharacter().isAggroed();
    }
});

module.exports = CreepController;

},{"./../Chat":3,"./../Utility":8,"./Controller":10}],14:[function(require,module,exports){
var Creep = require("./Creep");
var Messages = require("./Messages");
var RGB = require('../RGB');
var CoreStats = require('./CoreStats');
var FastStats = require('./stats/FastStats');
var SlowStats = require('./stats/SlowStats');
var EasyStats = require('./stats/EasyStats');
var HardStats = require('./stats/HardStats');
var GlassCannonStats = require('./stats/GlassCannonStats');
var LumberingMonstrosityStats = require('./stats/LumberingMonstrosityStats');
var NinjaStats = require('./stats/NinjaStats');


module.exports = {
    getGnome: function(rgb, level) {
        var options = {
            name: 'gnome',
            repr: 'g',
            radiusSquared: 4,
            rgb: rgb,

            numActions: 1,
            stats: new CoreStats(level),
            messages: new Messages(
                "Gnome",
                {

                    hit: "The gnome swings its tiny pickaxe at you with unsettling determination.",
                    miss: "The gnome slams its tiny pickaxe into the ground next to you.",
                    alert: "The gnome lets forth a shriek and closes to attack.",
                    death: "The gnome curses your to its pagen gods as you smite it"

                }
            )
        };

        return new Creep(options);
    },
    getConstruct: function(rgb, level) {
        var options = {
            name: 'gnomish construct',
            repr: 'c',
            radiusSquared: 8,
            rgb: rgb,

            numActions: .5,
            stats: new SlowStats(level),
            messages: new Messages(
                "Gnomish Construct",
                {

                    hit: "The gnomish construct slams its fist into you.",
                    miss: "The gnomish construct wiffs.",
                    alert: "The gnomish construct sounds the alarm and lumbers toward you.",
                    death: "The gnomish construct falls to the ground."

                }
            )
        };

        return new Creep(options);
    },
    getOrc: function(rgb, level) {
        var options = {
            name: 'orc',
            repr: 'o',
            radiusSquared: 9,
            rgb: rgb,

            numActions: 1,
            stats: new CoreStats(level),
            messages: new Messages(
                "Orc",
                {
                    hit: "The orc slashes into with its curved scimitar",
                    miss: "The orc slashes at the air next to your face",
                    alert: "The orc yells, 'Ruuuush' and runs toward you",
                    death: "The orc cries out for its bretheren"
                }
            )
        };

        return new Creep(options);
    },
    getOrcBoss: function(rgb, level) {
        var options = {
            name: 'orc boss',
            repr: 'O',
            radiusSquared: 16,
            rgb: rgb,

            numActions: 1,
            stats: new HardStats(level),
            messages: new Messages(
                "Orc Boss",
                {
                    hit: "The orc boss slams you with its club",
                    miss: "The orc boss misses you!",
                    alert: "The orc boss yells, 'For Gulb!' and races toward you",
                    death: "The orc boss cries out for its bretheren"
                }
            )
        };

        return new Creep(options);
    },
    getOrcHunter: function(rgb, level) {
        var options = {
            name: 'orc hunter',
            repr: 'h',
            radiusSquared: 64,
            rgb: rgb,

            alertRange: 2,
            numActions: 2,
            stats: new FastStats(level),
            messages: new Messages(
                "Orc Hunter",
                {
                    hit: "The orc hunter slips its dagger into your side",
                    miss: "The orc hunter misses you!",
                    alert: "An orc hunter sounds the hunt is on",
                    death: "The orc hunter cries out for its bretheren"
                }
            )
        };

        return new Creep(options);
    },
    getRat: function(rgb, level) {
        var options = {
            name: 'giant rat',
            repr: 'r',
            radiusSquared: 4,
            rgb: rgb,

            numActions: 1,
            stats: new EasyStats(level),
            messages: new Messages(
                "Rat",
                {
                    hit: "The rat bites into your flesh with its yellow teeth",
                    miss: "The rat lunges for you but misses!",
                    alert: "The rat squeaks hungrily and closes.",
                    death: "The rat squeaks and dies"
                }
            )
        };

        return new Creep(options);
    },
    getRatKing: function(rgb, level) {
        var options = {
            name: 'rat king',
            repr: 'R',
            radiusSquared: 25,
            rgb: rgb,

            numActions: 1,
            stats: new HardStats(level),
            messages: new Messages(
                "Rat",
                {
                    hit: "The rat king bites into your flesh with its yellow teeth",
                    miss: "The rat king lunges for you but misses!",
                    alert: "The rat king squeaks regally and closes.",
                    death: "The rat king squeaks and dies"
                }
            )
        };

        return new Creep(options);
    },
	getSheDevil: function(rgb, level) {
        var options = {
            name: 'she-devil',
            repr: 'S',
            radiusSquared: 999,
            rgb: rgb,

            alertRange: 0,
            numActions: 2,
            stats: new NinjaStats(level),
            messages: new Messages(
                "she-devil",
                {
                    hit: "The she-devil swipes at you with her poisonous claws",
                    miss: "The she-devil's baneful claws miss you by mere inches",
                    alert: "The she-devil alerts no one...she wants you all to herself",
                    death: "The she-devil saves her last breath for a diatribe as cutting as her claws"
                }
            )
        };

        return new Creep(options);
    },
	getGiant: function(rgb, level) {
        var options = {
            name: 'giant',
            repr: 'G',
            radiusSquared: 45,
            rgb: rgb,

            alertRange: 15,
            numActions: .5,
            stats: new LumberingMonstrosityStats(level),
            messages: new Messages(
                "giant",
                {
                    hit: "The giant's massive fist almost knocks you into another dimension",
                    miss: "The giant stomps the ground next to you with his colossal foot",
                    alert: "The giant rallies surrounding creeps visible from his high vantage point",
                    death: "The giant teeters precariously before crashing to the ground in a deafening cacophony"
                }
            )
        };

        return new Creep(options);
    },
	getBull: function(rgb, level) {
        var options = {
            name: 'bull',
            repr: 'B',
            radiusSquared: 20,
            rgb: rgb,

            alertRange: 10,
            numActions: 3,
            stats: new GlassCannonStats(level),
            messages: new Messages(
                "bull",
                {
                    hit: "The bull puts its enormous bulk to good use and tramples you violenty",
                    miss: "You veer out of the bull's killing path at the last second",
                    alert: "The bull's thundering hooves bring nearby enemies in tow",
                    death: "The bull falls on its side from exhaustion, snorts once, and then dies"
                }
            )
        };

        return new Creep(options);
    }
};

},{"../RGB":7,"./CoreStats":11,"./Creep":12,"./Messages":19,"./stats/EasyStats":20,"./stats/FastStats":21,"./stats/GlassCannonStats":22,"./stats/HardStats":23,"./stats/LumberingMonstrosityStats":24,"./stats/NinjaStats":25,"./stats/SlowStats":26}],15:[function(require,module,exports){
var Experience = require('./Experience');
var Utility = require('./../Utility');
var Chat = require('../Chat');

function Dimension(rgb) {
    this.experience = 0;
    this.level = 1;
    this.rgb = rgb;
    this.unitRGB = rgb.getUnitVector();
}

Dimension.prototype = new Experience();

Utility.extend(Dimension, {
    levelUp: function() {
        this.level++;
        this.rgb.add(this.unitRGB);
        Chat.ding("You feel your presence in this dimension grow stronger");
    },
    getRGB: function() {
        return this.rgb;
    },
    applyKillEffects: function(hero, victim) {
        var toAdd = victim.getMaxHealth();
        hero.addHealth(toAdd);
        Chat.log("You absorb " + victim.getName() + "'s life force.")
    }
});

module.exports = Dimension;

},{"../Chat":3,"./../Utility":8,"./Experience":16}],16:[function(require,module,exports){
function Experience() {
    this.experience = 0;  // all of the xp a character has gotten
}

Experience.getExperience = function(myLevel, creepLevel) {
    // you get 10 experience per kill of a creep
    // +1 for every level they are above you (no max)
    // -1 for every level they are below you (down to zero)
    return Math.max(0, 10 - (myLevel - creepLevel));
};

Experience.prototype = {
    gainXPForKill: function(target) {
        var xpForNextLevel = this.getXPForNextLevel();
        this.experience += Experience.getExperience(this.getLevel(), target.getLevel());
        if (this.experience >= xpForNextLevel) {
            this.levelUp();
            return true;
        }
        return false;
    },
    getXPForLevel: function(level) {
        return (level) * 100;
    },
    getXPForNextLevel: function() {
        // each level is 100 xp
        return this.getXPForLevel(this.getLevel() + 1);
    },
    getXP: function() {
        return this.experience;
    },
    getPercentageProgressToNextLevel: function() {
        return Math.round(100 *((this.getXP() - this.getXPForLevel(this.level))
            / (this.getXPForNextLevel() - this.getXPForLevel(this.level))));

    },
    levelUp: function() { throw "Experience.levelUp abstract called!"},
    getLevel: function() { return this.level; }
};

module.exports = Experience;
},{}],17:[function(require,module,exports){
/* Hero class. */
var CoreStats = require('./CoreStats');
var Character = require('./Character');
var Dimension = require('./Dimension');
var RGB = require('../RGB');
var util = require('./../Utility');
var Chat = require('./../Chat');

function Hero(deathCallback) {
    this.name = "You";
    this.shield = 0;
    this.maxShield = 10;
    this.speedBoost = 0;
    this.deathCallback = deathCallback;
    this.location = null;
    this.numActions = 1;
	this.stats = new CoreStats(1, CoreStats.HeroStatGain, CoreStats.HeoStatSeed);
    this.health = this.stats.getMaxHealth();
    this.rgb = new RGB(255, 255, 255);
    this.repr = '@';
    this.dimensions = [
        new Dimension(new RGB(125, 0, 0)),
        new Dimension(new RGB(0, 125, 0)),
        new Dimension(new RGB(0, 0, 125))
    ];
    this.dimension = this.dimensions[0];
    this.powerUpCount = 0;
    this.poweredUp = false;
    this.requiredPowerUps = 10;
    this.dimensionCoolDown = 0;
    //
    //    XXX
    //   XXXXX
    //  XXXXXXX
    //  XXX@XXX
    //  XXXXXXX
    //   XXXXX
    //    XXX
    //
}

Hero.prototype = new Character();

util.extend(Hero, {
    tick: function() {
        this.actionDelay -= 1;
        this.actionDelay = Math.max(this.actionDelay, 0);
        if (this.speedBoost > 0) {
            this.speedBoost = Math.max(this.speedBoost - 1, 0);
            if (this.speedBoost === 0) {
                this.numActions = 1;
                this.poweredUp = false;
                Chat.warn("You feel yourself slow down");
            }
        }
        this.dimensionCoolDown = Math.max(this.dimensionCoolDown - 1, 0);
    },
    getPowerUpCurr: function() {
        return this.powerUpCount;
    },
    getPowerUpMax: function() {
        return this.requiredPowerUps;
    },
    getPowerUpPercent: function() {
        return Math.round((this.powerUpCount * 100)/this.requiredPowerUps);
    },
    canPowerUp: function() {
        return this.powerUpCount === this.requiredPowerUps;
    },
    powerUp: function() {
        if (!this.canPowerUp()) {
            throw "Can't power up!"
        }
        this.powerUpCount = 0;
        this.poweredUp = true;
    },
    addPowerUpCount: function() {
        if (!this.poweredUp) {
            this.powerUpCount = Math.min(this.powerUpCount + 1, this.requiredPowerUps);
        }
    },
    removePowerUpCount: function() {
        this.powerUpCount = Math.max(this.powerUpCount - 1, 0);
    },
    resetPowerUpCount: function() {
        this.powerUpCount = 0;
    },
    isPoweredUp: function() {
        return this.poweredUp;
    },
    addToSpeedBoost: function(rounds) {
        this.speedBoost += rounds;
        this.numActions = 2;
    },
    setNumActions: function(number) {
        this.numActions = number;
    },
	applyDamage: function(damage, rgb) {
        // first subtract from shield if there is one
        Chat.warn("You take " + damage + " damage!");
        if (this.shield > 0) {
            if (this.shield > damage) {
                this.shield -= damage;
                damage = 0;
            } else {
                damage -= this.shield;
                this.shield = 0;
            }
        }

        // then subtract from health
        if (damage > 0) {
            if (this.health <= damage) {
                this.kill();
            } else {
                this.health -= damage;
            }
        }
	},
    gainXPForKill: function(target) {
        Chat.log("You killed " + target.name + "!");
        if (this.stats.gainXPForKill(target)) {
            Chat.ding("You leveled up!");
            this.health = this.getMaxHealth();
        }
        this.dimension.gainXPForKill(target);
        this.dimension.applyKillEffects(this, target);
    },
    getVisionRadiusSquared: function() {
        return this.stats.getLevel() + 20;
    },
    kill: function() {
        Chat.crit("You have died! Press any key to restart");
        this.deathCallback();
    },
    getDimension: function() {
        return this.dimension;
    },
    isHero: function() {
        return true;
    },
    switchDimensions: function(index) {
        this.dimension = this.dimensions[index];
        this.dimensionCoolDown = 5;
    },
    canSwitchDimensions: function() {
        return this.dimensionCoolDown <= 0;
    }
});

module.exports = Hero;

},{"../RGB":7,"./../Chat":3,"./../Utility":8,"./Character":9,"./CoreStats":11,"./Dimension":15}],18:[function(require,module,exports){
var util = require('./../Utility');
var Controller = require('./Controller');
var Chat = require('../Chat');

function HeroController(tileMap, creepMap, hero) {
    this.tileMap = tileMap;
    this.creepMap = creepMap;
    this.character = hero;
    this.score = 0;
}

HeroController.prototype = new Controller();

util.extend(HeroController, {
    /**
     * Attacks whatever is in the given direction
     * @param dir
     */
    attack: function(dir) {
        var loc = this.character.getLocation().add(dir);
        if (this.isEmpty(loc)) {
            throw "Tried to attack an empty square... :("
        }
        var target = this.getCreepMap().getCreepAtLoc(loc);

        if(this.getCharacter().getDimension().getRGB().mask(target.getRGB()).isBlack()) {
            Chat.log("You bump against an entity in another dimension");
        } else if(this.getCharacter().getStats().resolveHit(target.getStats())) {
            var dmg = this.getCharacter().getStats().resolveDamage(target.getStats());
            this.doDamageToCreep(target, dmg);
        } else {
            Chat.debug("You miss " + target.name);
        }

    },
    doDamageToCreep: function(target, dmg) {
        var loc = target.getLocation();
        Chat.log("You hit " + target.name + " for " + Math.round(dmg) + " damage!");
        target.applyDamage(dmg, this.getCharacter().getDimension().getRGB());
        this.character.addPowerUpCount();
        console.log(target.name, target.getHealth());
        if (target.isDead()) {
            console.log("We killed it!");
            this.character.gainXPForKill(target);
            this.score += target.getMaxHealth();
            this.getCreepMap().deleteCreepAtLoc(loc);
        }
    },
    getScore: function() {
        return this.score;
    },
    moveOrAttack: function(dir) {
        var toMove = this.getCharacter().location.add(dir);
        var creep = this.getCreepMap().getCreepAtLoc(toMove);
        if (!this.getTileMap().getTileAtLoc(toMove)) {
            Chat.warn("You step out into nothingness and feel yourself start to fall");
            this.getCreepMap().removeHero();
            this.getCharacter().kill();
        } else if (!creep) {
            this.character.removePowerUpCount();
            this.getCreepMap().moveHeroToLoc(toMove);
        } else if (creep) {
            this.attack(dir);
        }
    }
});

module.exports = HeroController;
},{"../Chat":3,"./../Utility":8,"./Controller":10}],19:[function(require,module,exports){
function Messages(name, messages) {
    this.name = name;
    this.hit = messages.hit; // to be printed when it hits the hero
    this.miss = messages.miss; // to be printed when it misses the hero
    this.alert = messages.alert;  // to be printed when it is alerted to the hero
    this.death = messages.death;
}

Messages.prototype = {
    getHitMessage: function() {
        if (!this.hit) {
            return this.name + " swings at you!"
        }
        return this.hit;
    },
    getMissMessage: function() {
        if (!this.miss) {
            return this.name + " misses you!";
        }
        return this.miss;
    },
    getAlertMessage: function() {
        if (!this.alert) {
            return this.name + " is alerted to your presence";
        }
        return this.alert;
    },
    getDeathMessage: function() {
        if (!this.death) {
            return this.name + " dies";
        }
        return this.death;
    }
};

module.exports = Messages;
},{}],20:[function(require,module,exports){
var CoreStats = require('../CoreStats');

function EasyStats(level) {
    this.str = CoreStats.EasySeed.str;
    this.agi = CoreStats.EasySeed.agi;
    this.con = CoreStats.EasySeed.con;
    this.level = 0;
    this.statGain = CoreStats.EasyGain;
    for (var i = 0; i < level; i++) {
        this.levelUp();
    }
    this.experience = this.getXPForLevel(level);
}

EasyStats.prototype = new CoreStats();

module.exports = EasyStats;
},{"../CoreStats":11}],21:[function(require,module,exports){
var CoreStats = require('../CoreStats');

function FastStats(level) {
    this.str = CoreStats.FastSeed.str;
    this.agi = CoreStats.FastSeed.agi;
    this.con = CoreStats.FastSeed.con;
    this.level = 0;
    this.statGain = CoreStats.FastGain;
    for (var i = 0; i < level; i++) {
        this.levelUp();
    }
    this.experience = this.getXPForLevel(level);
}

FastStats.prototype = new CoreStats();

module.exports = FastStats;
},{"../CoreStats":11}],22:[function(require,module,exports){
var CoreStats = require('../CoreStats');

function GlassCannonStats(level) {
    this.str = CoreStats.GlassCannonSeed.str;
    this.agi = CoreStats.GlassCannonSeed.agi;
    this.con = CoreStats.GlassCannonSeed.con;
    this.level = 3;
    this.statGain = CoreStats.GlassCannonGain;
    for (var i = 0; i < level; i++) {
        this.levelUp();
    }
    this.experience = this.getXPForLevel(level);
}

GlassCannonStats.prototype = new CoreStats();

module.exports = GlassCannonStats;
},{"../CoreStats":11}],23:[function(require,module,exports){
var CoreStats = require('../CoreStats');

function HardStats(level) {
    this.str = CoreStats.HardSeed.str;
    this.agi = CoreStats.HardSeed.agi;
    this.con = CoreStats.HardSeed.con;
    this.level = 0;
    this.statGain = CoreStats.HardGain;
    for (var i = 0; i < level; i++) {
        this.levelUp();
    }
    this.experience = this.getXPForLevel(level);
}

HardStats.prototype = new CoreStats();

module.exports = HardStats;
},{"../CoreStats":11}],24:[function(require,module,exports){
var CoreStats = require('../CoreStats');

function LumberingMonstrosityStats(level) {
    this.str = CoreStats.LumberingMonstrositySeed.str;
    this.agi = CoreStats.LumberingMonstrositySeed.agi;
    this.con = CoreStats.LumberingMonstrositySeed.con;
    this.level = 8;
    this.statGain = CoreStats.LumberingMonstrosityGain;
    for (var i = 0; i < level; i++) {
        this.levelUp();
    }
    this.experience = this.getXPForLevel(level);
}

LumberingMonstrosityStats.prototype = new CoreStats();

module.exports = LumberingMonstrosityStats;
},{"../CoreStats":11}],25:[function(require,module,exports){
var CoreStats = require('../CoreStats');

function NinjaStats(level) {
    this.str = CoreStats.NinjaSeed.str;
    this.agi = CoreStats.NinjaSeed.agi;
    this.con = CoreStats.NinjaSeed.con;
    this.level = 2;
    this.statGain = CoreStats.NinjaGain;
    for (var i = 0; i < level; i++) {
        this.levelUp();
    }
    this.experience = this.getXPForLevel(level);
}

NinjaStats.prototype = new CoreStats();

module.exports = NinjaStats;
},{"../CoreStats":11}],26:[function(require,module,exports){
var CoreStats = require('../CoreStats');

function SlowStats(level) {
    this.str = CoreStats.SlowSeed.str;
    this.agi = CoreStats.SlowSeed.agi;
    this.con = CoreStats.SlowSeed.con;
    this.level = 0;
    this.statGain = CoreStats.SlowGain;
    for (var i = 0; i < level; i++) {
        this.levelUp();
    }
    this.experience = this.getXPForLevel(level);
}

SlowStats.prototype = new CoreStats();

module.exports = SlowStats;
},{"../CoreStats":11}],27:[function(require,module,exports){
var Game = require('./Game');
var Dijkstra = require('./map/Dijkstra');
var RenderCompositor = require('./render/RenderCompositor');
var Chat = require('./Chat');
var util = require('./Utility');
//var StatusRenderer = require('./render/StatusRenderer');

Chat.setOutputFunction(function(message, color) {
    console.log(message, color);
});

var gameOverState = false;
var needsRestart = true;
var rendererCompositor = null;

var game;

$(document).keyup(function(event) {
    if (needsRestart) {
        restart();
        return;
    }
    console.log("KeyCode", event.keyCode);

    if (game && game.input[event.keyCode]) {
        turn(event.keyCode);
    }
});


function turn(code) {
    if (!game.hero.isActive()) {
        game.hero.tick();
    }

    game.takeHeroTurn(code);

    if (game.hero.isActive()) {
        console.log("not done yet!");
        render();
        return;
    }
    render();

    if (!needsRestart) {
        // do dikjstra's on the TileMap to hero location
        game.dikj = new Dijkstra(game.getTileMap(), game.hero.getLocation(), 
			function(map, loc, startLoc) {
				return !!map.getTileAtXY(loc.x, loc.y) &&
				!game.getTileMap().getTileAtXY(loc.x, loc.y).getRGB(game.getHero().getDimension().getRGB()).isBlack();
			});
		
		// do dikjstra's on the CreepMap to hero location within radius squared r^2
		game.closeQuartersDijk = new Dijkstra(game.getCreepMap(), game.hero.getLocation(), 
			function(map, loc, startLoc) {
				return !map.getCreepAtLoc(loc) && !!game.getTileMap().getTileAtXY(loc.x, loc.y) &&
					!game.getTileMap().getTileAtXY(loc.x, loc.y).getRGB(game.getHero().getDimension().getRGB()).isBlack() &&				
					loc.distanceSquaredTo(startLoc) < Game.CREEP_AVOID_CREEP_RAD_SQR;
			});

        game.takeCreepTurns(game.dikj, game.closeQuartersDijk);
        render();
    }
}


function render() {
	rendererCompositor.compose();
}


function restart() {
    $('#chat').empty();
    needsRestart = false;
    game = new Game(gameOver);
	setupRenderCompositor();
    render();
}

function setupRenderCompositor() {
	var canvas = $("#gameCanvas")[0];
	console.log('found canvas', canvas);
	
	// Only need to setup compositor once
	if (!rendererCompositor) {
		var renderData = {
			game: {
				canvas: util.dom("canvas", {width: "600", height: "800"}),
				data: function() {
					return [game.getTileMap(), 
					        game.getCreepMap(), 
							game.getHero(), 
							game.getHero().getDimension().getRGB(),
							game.getScore(),
							game.getDungeonLevel(),
							game.getCloseQtrDijkstra(),
							game.getDijkstra()];
				}
			},
			hud: {
				canvas: util.dom("canvas", {width: "200", height: "800"}),
				data: function() {
					return [game.getHero(), 
					        game.getHeroController().getCreepsInRadiusSquared(1)];
				}
			}
		};
		rendererCompositor = new RenderCompositor(canvas, renderData);
	}
}

function gameOver() {
    render();
    needsRestart = true;
    // display game over
    // listen for keypress to restart
}

var heroStatDev;
var creep1StatDiv;
var creep2StatDiv;
var creep3StatDiv;
var creep4StatDiv;

// starts the game!
$(function() { 
    heroStatDev = $("#heroDiv");
    creep1StatDiv = $("#creep1Div");
    creep2StatDiv = $("#creep2Div");
    creep3StatDiv = $("#creep3Div");
    creep4StatDiv = $("#creep4Div");
    
	restart();

    // hook up the chat!
    Chat.setOutputFunction(function(text, color) {
        $('<div style="color:' + color + '">' + text + '</>').appendTo('#chat');
        var objDiv = document.getElementById("chat");
        objDiv.scrollTop = objDiv.scrollHeight;

    });

    Chat.log("Arrows to move/attack");
    Chat.log("1,2,3 to switch dimensions");
    Chat.log("Space to activate power up (blue bar)");
	Chat.log("^ = upstairs to next dungeon floor");
	Chat.log("/ = downstairs to previous dungeon floor");
    Chat.ding("Escape the dungeon!");
    Chat.log('(head upstairs "^")');
});
},{"./Chat":3,"./Game":4,"./Utility":8,"./map/Dijkstra":37,"./render/RenderCompositor":44}],28:[function(require,module,exports){

// all of the creeps one would find in a cave!
var CreepFactory = require('../creeps/CreepFactory');
var Direction = require('../map/Direction');
var Location = require('../map/Location');



function addGnonesNearPoi(tileMap, creepMap, poi, rgb) {
    var creep;
    var creeps = [];
    for (var i = 0; i < poi.length; i++) {
        var numCreeps = Math.ceil(Math.random() * 2);
        for (var j = 0; j < numCreeps; j++) {
            var start = poi[i];
            start = start.add(Direction.randomDir());
            start = start.add(Direction.randomDir());
            index = 0;
            while((!tileMap.getTileAtLoc(start) || creepMap.getCreepAtLoc(start)) && ++index < 10) {
                start = start.add(Direction.randomDir());
            }
            if (index < 10) {
                creep = CreepFactory.getGnome(rgb, 1);
                if (Math.random() < .1) {
                    creep = CreepFactory.getOrc(rgb, 3);

                }
                creeps.push(creep);
                if (!start.isEqualTo(tileMap.getDownStairsLoc()) && !start.isEqualTo(tileMap.getUpStairsLoc())) {
                    if (tileMap.getTileAtLoc(start).getRGB().mask(rgb).isNotBlack()) {
                        creepMap.addCreepToMapAtLoc(start, creep);
                    }
                }
            }
        }
    }
    return creeps;
}


function spawnCreeps(tileMap, creepMap, poi, rgb, heroLevel) {
    return addGnonesNearPoi(tileMap, creepMap, poi, rgb);
}


module.exports = {
    spawnCreeps: spawnCreeps
};
},{"../creeps/CreepFactory":14,"../map/Direction":38,"../map/Location":39}],29:[function(require,module,exports){
var CreepMap = require('../map/CreepMap');
var CreepController = require('../creeps/CreepController');


function createCreepControllers(tileMap, creepMap, creeps) {
    var controllers = [];
    for (var i = 0; i < creeps.length; i++) {
        controllers.push(
            new CreepController(tileMap, creepMap, creeps[i])
        )
    }
    return controllers;
}

function Level(tileMap, creepMap, creeps) {
    this.tileMap = tileMap;
    this.creepMap = creepMap;
    this.creepControllers = createCreepControllers(tileMap, creepMap, creeps);

}

Level.prototype = {
	getTileMap: function() {
		return this.tileMap;
	},
	getCreepMap: function() {
		return this.creepMap;
	},
    getCreepControllers: function() {
        var toRemove = [];
        for (var i = 0; i < this.creepControllers.length; i++) {
            if (this.creepControllers[i].getCharacter().isDead()) {
                toRemove.push(this.creepControllers[i]);
            }
        }
        for (i = 0; i < toRemove.length; i++) {
            this.creepControllers.splice(this.creepControllers.indexOf(toRemove[i]), 1);
        }
        return this.creepControllers;
    }
};

module.exports = Level;
},{"../creeps/CreepController":13,"../map/CreepMap":36}],30:[function(require,module,exports){
var Level = require('./Level');
var RGB = require('../RGB');
var LevelUtils = require('./LevelUtils');
var TileMap = require('../map/TileMap');
var CreepMap = require('../map/CreepMap');
var CaveBuilder = require('./builders/CaveBuilder');
var CaveSpawner = require('./CaveSpawner');
var Spawner = require('./Spawner');
var CreepFactory = require('./../creeps/CreepFactory');
var CityBuilder = require('./builders/CityBuilder');
var util = require('./../Utility');

function initTileMapAndCreepMap(level) {
    var randWidth = Math.round(Math.random() * (10 + level/2));
    var randHeight = Math.round(Math.random() * (10 + level/2));
    var width = 15 + 2 * level + randWidth;
    var height = 15 + 2 * level + randHeight;
    var tileMap = new TileMap(width, height);
    var creepMap = new CreepMap(width, height);
    var upStairsLoc = LevelUtils.getRandomCorner(tileMap);
    var downStairsLoc = LevelUtils.getRandomCorner(tileMap);
    var upStairsCorner = LevelUtils.getQuadForLocation(upStairsLoc, tileMap);
    var index = 0;
    while (upStairsCorner === LevelUtils.getQuadForLocation(downStairsLoc, tileMap)) {
        if (index++ > 10) {
            console.log("Breaking due to noob");
            break;
        }
        downStairsLoc = LevelUtils.getRandomCorner(tileMap);
    }
    LevelUtils.addStairsToTileMap(tileMap, upStairsLoc, downStairsLoc);
    return {
        tileMap: tileMap,
        creepMap: creepMap
    };
}


function makeSimpleMonotoneLevel(level, heroLevel) {
    var rgb;
    if (level % 3 === 0) {
        rgb = LevelUtils.getRGBForLevel(0, true, false, false);
    } else if (level % 3 === 1) {
        rgb = LevelUtils.getRGBForLevel(0, false, true, false);
    } else if (level % 3 === 2) {
        rgb = LevelUtils.getRGBForLevel(0, false, false, true);
    }
    var tileCreepMap = initTileMapAndCreepMap(level);
    var creeps = [];
    var tileMap = tileCreepMap.tileMap;
    var creepMap = tileCreepMap.creepMap;
    var upStairsLoc = tileMap.getUpStairsLoc();
    var downStairsLoc = tileMap.getDownStairsLoc();

    // spawn cave
    var poi = CaveBuilder.build(tileMap, rgb, [upStairsLoc, downStairsLoc]);

    // spawn rats
    var spawnFunction = CreepFactory.getRat;
    creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, rgb, spawnFunction, 3, heroLevel));
    creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, rgb, spawnFunction, 1, heroLevel + 2));



    return new Level(tileMap, creepMap, creeps);
}


function makeAmbroseDeathLevel(level, heroLevel) {

    var firstDimRGB = LevelUtils.getRGBForLevel(level, true, false, false);
    var secondDimRGB = LevelUtils.getRGBForLevel(level, false, true, false);
    var thirdDimRGB = LevelUtils.getRGBForLevel(level, false, false, true);
    var tileCreepMap = initTileMapAndCreepMap(level);
    var creeps = [];
    var tileMap = tileCreepMap.tileMap;
    var creepMap = tileCreepMap.creepMap;
    var upStairsLoc = tileMap.getUpStairsLoc();
    var downStairsLoc = tileMap.getDownStairsLoc();

	// She-Devil level
	poi = CaveBuilder.build(tileMap, firstDimRGB, [upStairsLoc, downStairsLoc]);
    spawnFunction = CreepFactory.getSheDevil;
    creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, firstDimRGB, spawnFunction, 1, heroLevel));
    if (heroLevel > 15) {
        spawnFunction = CreepFactory.getSheDevil;
        creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, firstDimRGB, spawnFunction, 2, heroLevel + 2));
    }

	// Giant level
	poi = CaveBuilder.build(tileMap, secondDimRGB, [upStairsLoc, downStairsLoc]);
    spawnFunction = CreepFactory.getGiant;
    creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, secondDimRGB, spawnFunction, 2, heroLevel));
    if (heroLevel > 20) {
        spawnFunction = CreepFactory.getGiant;
        creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, secondDimRGB, spawnFunction, 4, heroLevel + 2));
    }

	// Bull level
	poi = CaveBuilder.build(tileMap, thirdDimRGB, [upStairsLoc, downStairsLoc]);
    spawnFunction = CreepFactory.getBull;
    creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, thirdDimRGB, spawnFunction, 5, heroLevel));
    if (heroLevel > 10) {
        spawnFunction = CreepFactory.getBull;
        creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, thirdDimRGB, spawnFunction, 5, heroLevel + 2));
    }

    return new Level(tileMap, creepMap, creeps);
}


function makeDoubleDimensionLevel(level, heroLevel) {
    var firstDimRGB, secondDimRGB;
    if (level % 3 === 0) {
        firstDimRGB = LevelUtils.getRGBForLevel(level, true, false, false);
        secondDimRGB = LevelUtils.getRGBForLevel(level, false, false, true);
    } else if (level % 3 === 1) {
        firstDimRGB = LevelUtils.getRGBForLevel(level, true, false, false);
        secondDimRGB = LevelUtils.getRGBForLevel(level, false, true, false);
    } if (level % 3 === 2) {
        firstDimRGB = LevelUtils.getRGBForLevel(level, false, false, false);
        secondDimRGB = LevelUtils.getRGBForLevel(level, false, true, true);
    }
    var tileCreepMap = initTileMapAndCreepMap(level);
    var creeps = [];
    var tileMap = tileCreepMap.tileMap;
    var creepMap = tileCreepMap.creepMap;
    var upStairsLoc = tileMap.getUpStairsLoc();
    var downStairsLoc = tileMap.getDownStairsLoc();

    // orc level
    var poi = CaveBuilder.build(tileMap, firstDimRGB, [upStairsLoc, downStairsLoc]);
    var spawnFunction;
    if (heroLevel > 5) {
        spawnFunction = CreepFactory.getOrcHunter;
        creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, firstDimRGB, spawnFunction, 1, heroLevel + 1));
    }
    if (heroLevel > 10) {
        spawnFunction = CreepFactory.getOrcBoss;
        creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, firstDimRGB, spawnFunction, 1, heroLevel));
    }
    spawnFunction = CreepFactory.getOrc;
    creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, firstDimRGB, spawnFunction, 3, heroLevel));
    creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, firstDimRGB, spawnFunction, 1, heroLevel + 1));

    // gnome level
    poi = CaveBuilder.build(tileMap, secondDimRGB, [upStairsLoc, downStairsLoc]);
    if (heroLevel > 5) {
        spawnFunction = CreepFactory.getConstruct;
        creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, secondDimRGB, spawnFunction, 2, heroLevel));
    }
    if (heroLevel > 10) {
        spawnFunction = CreepFactory.getConstruct;
        creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, secondDimRGB, spawnFunction, 1, heroLevel + 2));
    }
    spawnFunction = CreepFactory.getGnome;
    creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, secondDimRGB, spawnFunction, 3, heroLevel));
    creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, secondDimRGB, spawnFunction, 1, heroLevel + 1));

    // 20% chance to spawn some bulls to mix things up
	if (level > 3 && Math.random() < .20) {
		poi = CaveBuilder.build(tileMap, firstDimRGB, [upStairsLoc, downStairsLoc]);
		spawnFunction = CreepFactory.getBull;
		creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, firstDimRGB, spawnFunction, 1, heroLevel));
	}
	// 10% chance to spawn a she-devil to surprise the player
	else if (level > 3 && Math.random() < .10) {
		poi = CaveBuilder.build(tileMap, secondDimRGB, [upStairsLoc, downStairsLoc]);
		spawnFunction = CreepFactory.getSheDevil;
		creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, [poi[util.rand(0, poi.length - 1)]], secondDimRGB, spawnFunction, 1, heroLevel));
	}
	// 5% chance to spawn a giant to rickroll the player
	else if (level > 3 && Math.random() < .05) {
		poi = CaveBuilder.build(tileMap, secondDimRGB, [upStairsLoc, downStairsLoc]);
		spawnFunction = CreepFactory.getGiant;
		creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, [poi[util.rand(0, poi.length - 1)]], secondDimRGB, spawnFunction, 1, heroLevel));
	}

    return new Level(tileMap, creepMap, creeps);
}

function makeRatKingLevel(level, heroLevel) {
    var firstDimRGB = LevelUtils.getRGBForLevel(level, true, false, false);
    var secondDimRGB = LevelUtils.getRGBForLevel(level, false, true, false);
    var thirdDimRGB = LevelUtils.getRGBForLevel(level, false, false, true);
    var tileCreepMap = initTileMapAndCreepMap(level);
    var creeps = [];
    var tileMap = tileCreepMap.tileMap;
    var creepMap = tileCreepMap.creepMap;
    var upStairsLoc = tileMap.getUpStairsLoc();
    var downStairsLoc = tileMap.getDownStairsLoc();


    // red level
    var poi = CaveBuilder.build(tileMap, firstDimRGB, [upStairsLoc, downStairsLoc]);
    var spawnFunction;
    // rat king!
    spawnFunction = CreepFactory.getRatKing;
    creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, RGB.White, spawnFunction, 1, heroLevel + 4));
    spawnFunction = CreepFactory.getRat;
    creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, firstDimRGB, spawnFunction, 3, heroLevel + 3));

    // green level
    poi = CaveBuilder.build(tileMap, secondDimRGB, [upStairsLoc, downStairsLoc]);
    spawnFunction = CreepFactory.getRat;
    creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, secondDimRGB, spawnFunction, 3, heroLevel + 3));

    // blue level
    poi = CaveBuilder.build(tileMap, thirdDimRGB, [upStairsLoc, downStairsLoc]);
    spawnFunction = CreepFactory.getRat;
    creeps = creeps.concat(Spawner.spawn(tileMap, creepMap, poi, thirdDimRGB, spawnFunction, 3, heroLevel + 3));

    return new Level(tileMap, creepMap, creeps);
}


function getLevel(dungeonLevel, heroLevel) {
    if (dungeonLevel <= 2) {
        return makeSimpleMonotoneLevel(dungeonLevel, heroLevel);
    } else if (dungeonLevel <= 5) {
        return makeDoubleDimensionLevel(dungeonLevel, heroLevel);
    } else if (dungeonLevel % 10 === 0) {
        return makeRatKingLevel(dungeonLevel, heroLevel);
    } else {
        return getRandomLevel(dungeonLevel, heroLevel);
    }
}


function getRandomLevel(dungeonLevel, heroLevel) {
    var val = Math.random();
    if (val < .95) {
        return makeDoubleDimensionLevel(dungeonLevel, heroLevel);
    } else {
        return makeAmbroseDeathLevel(dungeonLevel, heroLevel);
    }

}


module.exports = {
    getLevel: getLevel
};
},{"../RGB":7,"../map/CreepMap":36,"../map/TileMap":42,"./../Utility":8,"./../creeps/CreepFactory":14,"./CaveSpawner":28,"./Level":29,"./LevelUtils":31,"./Spawner":32,"./builders/CaveBuilder":33,"./builders/CityBuilder":34}],31:[function(require,module,exports){
var RGB = require('../RGB');
var Location = require('../map/Location');

module.exports = {
    getRGBForLevel: function(level, red, green, blue) {
        var val = Math.min(150 + 3 * level, 255);
        return new RGB(
            red ? val : 0,
            green ? val : 0,
            blue ? val: 0
        )
    },
    getRandomSingleRGBForLevel: function(level) {
        var red, green, blue;
        var val = Math.random();
        if (val < .33) {
            red = true;
        } else if ( val < .67) {
            green = true;
        } else {
            blue = true;
        }
        return this.getRGBForLevel(level, red, green, blue);
    },
    getRandomCorner: function(tileMap) {
        var width = tileMap.width;
        var height = tileMap.height;
        var loc;
        var val = Math.random();
        if (val < .25) {
            loc = new Location(
                Math.ceil(Math.random() * (width /4 - 2)),
                Math.ceil(Math.random() * (height /4 - 2))
            )
        } else if (val < .5) {
            loc = new Location(
                width - Math.ceil(Math.random() * (width /4 - 2) + 1),
                Math.ceil(Math.random() * (height /4 - 2))
            )
        } else if (val < .75) {
            loc = new Location(
                Math.ceil(Math.random() * (width /4 - 2)),
                height - Math.ceil(Math.random() * (height / 4 - 2) + 1)
            )
        } else {
            loc = new Location(
                width - Math.ceil(Math.random() * (width / 4 - 2) + 1),
                height - Math.ceil(Math.random() * (height / 4 - 2) + 1)
            )
        }
        return tileMap.projectLocOnMap(loc);
    },
    getQuadForLocation: function(loc, tileMap) {
        if (loc.x < tileMap.width / 2) {
            if (loc.y < tileMap.height / 2) {
                return 2;
            } else {
                return 1;
            }
        } else {
            if (loc.y < tileMap.height / 2) {
                return 3;
            } else {
                return 4;
            }
        }

    },
    addStairsToTileMap: function(tileMap, upStairs, downStairs, upStairsRGB, downStarisRGB) {
        tileMap.addStairsUp(upStairs, upStairsRGB);
        tileMap.addStairsDownAtLoc(downStairs, downStarisRGB);
    }
};

},{"../RGB":7,"../map/Location":39}],32:[function(require,module,exports){

var Direction = require('./../map/Direction');


function addCreepsNearPoi(tileMap, creepMap, poi, rgb, creationFunction, max, level) {
    var creep;
    var creeps = [];
    for (var i = 0; i < poi.length; i++) {
        var numCreeps = Math.ceil(Math.random() * max);
        for (var j = 0; j < numCreeps; j++) {
            var start = poi[i];
            start = start.add(Direction.randomDir());
            start = start.add(Direction.randomDir());
            index = 0;
            while((!tileMap.getTileAtLoc(start) || creepMap.getCreepAtLoc(start)) && ++index < 10) {
                start = start.add(Direction.randomDir());
            }
            if (index < 10) {
                creep = creationFunction(rgb, level);
                if (!start.isEqualTo(tileMap.getDownStairsLoc()) && !start.isEqualTo(tileMap.getUpStairsLoc())) {
                    if (tileMap.getTileAtLoc(start).getRGB().mask(rgb).isNotBlack()) {
                        creepMap.addCreepToMapAtLoc(start, creep);
                        creeps.push(creep);
                    }
                }
            }
        }
    }
    return creeps;
}


module.exports = {
    spawn: addCreepsNearPoi
};

},{"./../map/Direction":38}],33:[function(require,module,exports){
var Location = require('../../map/Location');
var Direction = require('../../map/Direction');
var CoarserMap = require('../../map/CoarserMap');

var CUT_SIZE = 7;



function buildNodeAroundLoc(tileMap, loc, rgb, radiusSquared) {
    //console.log("buildingNodeAroundLoc", loc.x, loc.y);
    loc = tileMap.projectLocOnMap(loc);
    // random radius
    if (!radiusSquared) {
        var sizeRandom = Math.random();
        if (sizeRandom < .5) {
            radiusSquared = 4;
        } else if (sizeRandom < .85) {
            radiusSquared = 7;
        } else {
            radiusSquared = 10
        }
    }

    // fill in the tiles
    var bounds = Math.round(Math.ceil(Math.sqrt(radiusSquared)));
    for (var x = -bounds; x <= bounds; x++) {
        for (var y = -bounds; y <= bounds; y++) {
            var newLoc = new Location(loc.x + x, loc.y + y);
            if (newLoc.distanceSquaredTo(loc) <= radiusSquared
                    && tileMap.locOnMap(newLoc)) {
                tileMap.mergeFloorTileAtLoc(newLoc, rgb)
            }
        }
    }
}


function connectLocs(tileMap, locA, locB, rgb) {
    locA = tileMap.projectLocOnMap(locA);
    locB = tileMap.projectLocOnMap(locB);
    var jaggedPath = Math.random() > .75;
    var doubleJagged = jaggedPath && Math.random() > .5;
    while (!locA.isEqualTo(locB)) {
        var toB = locA.directionTo(locB);
        if (Math.random() < .15) {
            toB = toB.rotateLeft();
        } else if (Math.random() < .15) {
            toB = toB.rotateRight();
        }
        tileMap.mergeFloorTileAtLoc(locA, rgb);
        if (jaggedPath && Math.random() < .25) {
            tileMap.mergeFloorTileAtLoc(locA.add(toB.rotateLeft()), rgb);
        }
        if (doubleJagged && Math.random() < .25) {
            tileMap.mergeFloorTileAtLoc(locA.add(toB.rotateRight()), rgb);
        }
        locA = locA.add(toB);
    }
}


// searches for a 'true' node in the coarseMap to the South, East, or SouthEast and connects
function connectCoarseNode(tileMap, coarseMap, loc, rgb) {
    if (!coarseMap.getValAtLoc(loc)) {
        return;
    }
    // connect EAST
    if (coarseMap.getValAtLoc(loc.add(Direction.EAST))) {
        connectLocs(
            tileMap,
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc),
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc.add(Direction.EAST)),
            rgb
        );
    } else if (coarseMap.getValAtLoc(loc.add(Direction.EAST, 2))) {
        connectLocs(
            tileMap,
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc),
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc.add(Direction.EAST, 2)),
            rgb
        );
    }
    // connect SOUTH
    if (coarseMap.getValAtLoc(loc.add(Direction.SOUTH))) {
        connectLocs(
            tileMap,
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc),
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc.add(Direction.SOUTH)),
            rgb
        );
    } else if (coarseMap.getValAtLoc(loc.add(Direction.SOUTH, 2))) {
        connectLocs(
            tileMap,
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc),
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc.add(Direction.SOUTH, 2)),
            rgb
        );
    }
    // connect SOUTH EAST
    if (coarseMap.getValAtLoc(loc.add(Direction.SOUTH).add(Direction.EAST))) {
        connectLocs(
            tileMap,
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc),
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc.add(Direction.SOUTH).add(Direction.EAST)),
            rgb
        );
    } else if (coarseMap.getValAtLoc(loc.add(Direction.SOUTH, 2).add(Direction.EAST, 2))) {
        connectLocs(
            tileMap,
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc),
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc.add(Direction.SOUTH, 2).add(Direction.EAST, 2)),
            rgb
        );
    }

}



function buildCaveSystem(tileMap, rgb, includeLocs) {
    // build a coarse map
    var x, y, loc;
    var coarseMap = new CoarserMap(tileMap, CUT_SIZE + Math.floor(Math.random() * 6));
    var poi = [];


    // assign teh includedLocs and build path to center of coarse tile
    if (includeLocs.length > 0) {
        for (var i = 0; i < includeLocs.length; i++) {
            console.log("here");
            loc = includeLocs[i];
            var coarseLoc = coarseMap.getCoarseTileLocForMapLoc(loc);
            coarseMap.setValAtLoc(coarseLoc, true);
            console.log(loc, coarseMap.getMapLocCenterFromCoarseMapLoc(coarseLoc));
            connectLocs(tileMap, loc, coarseMap.getMapLocCenterFromCoarseMapLoc(coarseLoc), rgb);
            if (Math.random() > .5) {
                buildNodeAroundLoc(tileMap, loc, rgb, 5)
            }
        }
    }

    // randomly assign nodes
    var last = false;
    //console.log('coarseMap height/width:', coarseMap.height, coarseMap.width);
    for (x = 0; x < coarseMap.width; x++) {
        for (y = 0; y < coarseMap.height; y++) {
            if (Math.random() > .5 || !last) {
                //console.log('doing it at ', x, y);
                last = true;
                loc = new Location(x, y);
                coarseMap.setValAtLoc(loc, true);
                poi.push(coarseMap.getMapLocCenterFromCoarseMapLoc(loc));
                buildNodeAroundLoc(tileMap, coarseMap.getMapLocCenterFromCoarseMapLoc(loc), rgb)
            } else {
                last = false;
            }
        }
    }

    // connect nodes
    for (x = 0; x < coarseMap.width; x++) {
        for (y = 0; y < coarseMap.height; y++) {
            loc = new Location(x, y);
            connectCoarseNode(tileMap, coarseMap, loc, rgb);
        }
    }

    return poi;

}

module.exports = {
    build: buildCaveSystem
};
},{"../../map/CoarserMap":35,"../../map/Direction":38,"../../map/Location":39}],34:[function(require,module,exports){
var Location = require('../../map/Location');
var Direction = require('../../map/Direction');
var CoarserMap = require('../../map/CoarserMap');

var CUT_SIZE = 8;



function buildNodeAroundLoc(tileMap, loc, rgb) {
    //console.log("buildingNodeAroundLoc", loc.x, loc.y);
    loc = tileMap.projectLocOnMap(loc);
    // random height/width
    var width = 1 + Math.round(Math.random() * 4);
    var height = 1 + Math.round(Math.random() * 4);


    // fill in the tiles
    for (var x = -width; x <= width; x++) {
        for (var y = -height; y <= height; y++) {
            var newLoc = new Location(loc.x + x, loc.y + y);
            tileMap.mergeFloorTileAtLoc(newLoc, rgb)
        }
    }
}

function connectLocs(tileMap, locA, locB, rgb) {
    locA = tileMap.projectLocOnMap(locA);
    locB = tileMap.projectLocOnMap(locB);
    var jaggedPath = Math.random() > .75;
    var doubleJagged = jaggedPath && Math.random() > .5;
    while (!locA.isEqualTo(locB)) {
        var toB = locA.directionTo(locB);

        tileMap.mergeFloorTileAtLoc(locA, rgb);
        if (jaggedPath && Math.random() < .25) {
            tileMap.mergeFloorTileAtLoc(locA.add(toB.rotateLeft()), rgb);
        }
        if (doubleJagged && Math.random() < .25) {
            tileMap.mergeFloorTileAtLoc(locA.add(toB.rotateRight()), rgb);
        }
        locA = locA.add(toB);
    }
}


// searches for a 'true' node in the coarseMap to the South, East, or SouthEast and connects
function connectCoarseNode(tileMap, coarseMap, loc, rgb) {
    if (!coarseMap.getValAtLoc(loc)) {
        return;
    }
    // connect EAST
    if (coarseMap.getValAtLoc(loc.add(Direction.EAST))) {
        connectLocs(
            tileMap,
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc),
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc.add(Direction.EAST)),
            rgb
        );
    } else if (coarseMap.getValAtLoc(loc.add(Direction.EAST, 2))) {
        connectLocs(
            tileMap,
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc),
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc.add(Direction.EAST, 2)),
            rgb
        );
    }
    // connect SOUTH
    if (coarseMap.getValAtLoc(loc.add(Direction.SOUTH))) {
        connectLocs(
            tileMap,
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc),
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc.add(Direction.SOUTH)),
            rgb
        );
    } else if (coarseMap.getValAtLoc(loc.add(Direction.SOUTH, 2))) {
        connectLocs(
            tileMap,
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc),
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc.add(Direction.SOUTH, 2)),
            rgb
        );
    }
    // connect SOUTH EAST
    if (coarseMap.getValAtLoc(loc.add(Direction.SOUTH).add(Direction.EAST))) {
        connectLocs(
            tileMap,
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc),
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc.add(Direction.SOUTH).add(Direction.EAST)),
            rgb
        );
    } else if (coarseMap.getValAtLoc(loc.add(Direction.SOUTH, 2).add(Direction.EAST, 2))) {
        connectLocs(
            tileMap,
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc),
            coarseMap.getMapLocCenterFromCoarseMapLoc(loc.add(Direction.SOUTH, 2).add(Direction.EAST, 2)),
            rgb
        );
    }

}



function buildCitySystem(tileMap, rgb, includeLocs) {
    // build a coarse map
    var x, y, loc;
    var coarseMap = new CoarserMap(tileMap, CUT_SIZE + Math.floor(Math.random() * 6));
    var poi = [];


    // assign teh includedLocs and build path to center of coarse tile
    if (includeLocs.length > 0) {
        for (var i = 0; i < includeLocs.length; i++) {
            console.log("here");
            loc = includeLocs[i];
            var coarseLoc = coarseMap.getCoarseTileLocForMapLoc(loc);
            coarseMap.setValAtLoc(coarseLoc, true);
            console.log(loc, coarseMap.getMapLocCenterFromCoarseMapLoc(coarseLoc));
            connectLocs(tileMap, loc, coarseMap.getMapLocCenterFromCoarseMapLoc(coarseLoc), rgb);
            if (Math.random() > .5) {
                buildNodeAroundLoc(tileMap, loc, rgb, 5)
            }
        }
    }

    // randomly assign nodes
    var last = false;
    //console.log('coarseMap height/width:', coarseMap.height, coarseMap.width);
    for (x = 0; x < coarseMap.width; x++) {
        for (y = 0; y < coarseMap.height; y++) {
            if (Math.random() > .5 || !last) {
                //console.log('doing it at ', x, y);
                last = true;
                loc = new Location(x, y);
                coarseMap.setValAtLoc(loc, true);
                poi.push(coarseMap.getMapLocCenterFromCoarseMapLoc(loc));
                buildNodeAroundLoc(tileMap, coarseMap.getMapLocCenterFromCoarseMapLoc(loc), rgb)
            } else {
                last = false;
            }
        }
    }

    // connect nodes
    for (x = 0; x < coarseMap.width; x++) {
        for (y = 0; y < coarseMap.height; y++) {
            loc = new Location(x, y);
            connectCoarseNode(tileMap, coarseMap, loc, rgb);
        }
    }

    return poi;

}

module.exports = {
    build: buildCitySystem
};
},{"../../map/CoarserMap":35,"../../map/Direction":38,"../../map/Location":39}],35:[function(require,module,exports){
var Map = require('./Map');
var Location = require('./Location');


function CoarserMap(map, tileSize) {
    this.width = Math.ceil(map.width/tileSize);
    this.height = Math.ceil(map.height/tileSize);
    this.fineMap = map;
    this.tileSize = tileSize;
    this.map = new Array(this.width);
    for (var i = 0; i < this.width; i++) {
        this.map[i] = new Array(this.height);
    }
}

CoarserMap.prototype = {
    locOnMap: Map.locOnMap,
    projectLocOnMap: Map.projectLocOnMap,
    getValAtLoc: Map.getValAtLoc,
    setValAtLoc: Map.setValAtLoc,
    getCoarseTileLocForMapLoc: function(loc) {
        return new Location(
            Math.floor(loc.x / this.tileSize),
            Math.floor(loc.y / this.tileSize)
        );
    },
    getMapLocCenterFromCoarseMapLoc: function(loc) {
        return new Location(
            Math.floor(loc.x * this.tileSize + this.tileSize / 2),
            Math.floor(loc.y * this.tileSize + this.tileSize / 2)
        );
    }

};



module.exports = CoarserMap;
},{"./Location":39,"./Map":40}],36:[function(require,module,exports){
var Location = require('./Location');
var Map = require('./Map');

function CreepMap(x, y) {
    this.width = x;
    this.height = y;
	this.creepsLoc = new Array(x);
	for (var i = 0; i < x; i++) {
		this.creepsLoc[i] = new Array(y);
	}
    this.hero = null;
}

CreepMap.prototype = {
    locOnMap: Map.locOnMap,
    projectLocOnMap: Map.projectLocOnMap,
    addHeroToMapAtLoc: function(loc, hero) {
        this.moveCreepToLoc(loc, hero);
        this.hero = hero;
    },
    removeHero: function() {
        this.deleteCreepAtLoc(this.hero.location);
        this.hero = null;
    },
    addCreepToMapAtLoc: function(loc, creep) {
        this.moveCreepToLoc(loc, creep);
    },
    moveHeroToLoc: function(loc) {
        this.moveCreepToLoc(loc, this.hero);
    },
    moveCreepToLoc: function(loc, creep) {
        if (!creep) {
            throw "Tried to move a character but no character specified!";
        }
		if (loc.x < 0 || loc.y < 0) {
			throw "Tried to move character to a negative location (" + loc.x + ", " + loc.y + ")";
		}
		if (loc.x >= this.width) {
			throw "Tried to move character to a location offmap! (" + loc.x + " >= " + this.width + ")";
		}
		if (loc.y >= this.height) {
			throw "Tried to move character to a location offmap! (" + loc.y + " >= " + this.height + ")";
		}
		if (this.creepsLoc[loc.x][loc.y]) {
			throw "There is already a character there: " + this.creepsLoc[loc.x][loc.y];
		}
		this.creepsLoc[loc.x][loc.y] = creep;
        if (creep.getLocation()) {
            this.deleteCreepAtLoc(creep.location);
        }
        creep.setLocation(loc);
    },
    getCreepAtLoc: function(loc) {
        if (loc.x < 0 || loc.y < 0) {
			return;
		}
		if (loc.x >= this.width) {
			return;
		}
		if (loc.y >= this.height) {
			return;
		}
		return this.creepsLoc[loc.x][loc.y];
    },
    heroAtLoc: function(loc) {
        return this.getCreepAtLoc(loc) && this.getCreepAtLoc(loc) === this.hero;
    },
    deleteCreepAtLoc: function(loc) {
        this.creepsLoc[loc.x][loc.y] = undefined;
    },
    getHero: function() {
        return this.hero;
    }
};

module.exports = CreepMap;
},{"./Location":39,"./Map":40}],37:[function(require,module,exports){
var Location = require('./Location');

/* Runs Dijkstra to compute moveMap. Each value in moveMap is one of the following offsets
   indicating shortest direction to startLoc: [0,1], [0,-1], [1,0], [-1,0]. */
function calculate(dij) {
    /* Init open list with start loc & mark a [0,0] on movemap at hero loc 
	   representing start location. */
	var open = [];
	open.push(dij.startLoc);
	dij.moveMap[dij.startLoc.x][dij.startLoc.y] = new Location(0,0);
	
	/* While open is not empty, take out the first loc in the list, expand it, 
	   and add expanded locs to end of list. Once open is empty, moveMap should be 
	   initialized. */
	while (open.length) {
		var curr = open.shift();
		var expanded = expand(curr, dij.map, dij.moveMap, dij.isTraversable, dij.startLoc);
		open = open.concat(expanded);
	}
}

/* Finds all non-diagonal adjacent locs that are 1) unexplored in move map and 
   2) class member isTraversable function returns true. The second condition 
   makes the algorithm much more flexible and allows for definitions of obstacles 
   external to this class. */
function expand(loc, map, moveMap, isTraversable, startLoc) {
	var expanded = [];
	var offsets = [new Location(0,1), new Location(0,-1), new Location(1,0), new Location(-1,0)];
	var newLoc;
	
	for (var i = 0; i < 4; i++) {
		try {
		// newLoc = loc + offset
		newLoc = loc.addLoc(offsets[i]); 
		// Is unexplored and has tile?
		if (!moveMap[newLoc.x][newLoc.y]) {
			if (!map.locOnMap(newLoc)) return;
			/* set moveMap[newLoc] = reflected offset (offset * -1) regardless of 
			   whether it is traversable. This solves the problem of obstacles 
			   that can move (that is, obstacle locs adjacent to traversable locs 
			   will still need SP data). */
			moveMap[newLoc.x][newLoc.y] = new Location(offsets[i].x * -1, offsets[i].y * -1);
			// add newLoc to expanded if newLoc is traversable
			if (isTraversable(map, newLoc, startLoc)) {
				expanded.push(newLoc);
			}			
		}
		} catch(err) {
			var testtest = 1;
		}
	}
	
	return expanded;
}

/* map - tileMap, creepMap, etc, whatever contains obstacle data  
   loc - location to build SP graph to
   isTraversable - has the form
   
   function(map, loc, startLoc) 
   
   and returns true/false whether the specified loc should be considered 
   traversible in the map, given the specified startLoc in case that matters. */
function Dijkstra(map, loc, isTraversable) {
    this.map = map;
	this.isTraversable = isTraversable;
	this.startLoc = loc;
    this.moveMap = new Array(this.map.width);
	
    for (var i = 0; i < this.map.width; i++) {
        this.moveMap[i] = new Array(this.map.height);
    }

    calculate(this);
}

Dijkstra.prototype = {
    getNextTile: function(loc) {
		// Return passed in loc + offset in moveMap
		if (!this.moveMap[loc.x][loc.y]) {
			return;
		}
		return loc.addLoc(this.moveMap[loc.x][loc.y]);
    },
	//Debug function: allows drawing move map for debugging 
	getDijkstraSymbol: function(loc) {
		var offsets = [new Location(0,1), new Location(0,-1), new Location(1,0), new Location(-1,0)];
		var offset = this.moveMap[loc.x][loc.y];
		var symbol;
		if (offset) {
			if (offset.isEqualTo(offsets[0])) {
				symbol = "S";
			} else if (offset.isEqualTo(offsets[1])) {
				symbol = "N";
			} else if (offset.isEqualTo(offsets[2])) {
				symbol = "E";
			} else if (offset.isEqualTo(offsets[3])) {
				symbol = "W";
			} else {
				symbol = "<" + offset.x + "," + offset.y + ">";
			}
		} else {
			symbol = "U";
		}
		return symbol;
	}
};

module.exports = Dijkstra;
},{"./Location":39}],38:[function(require,module,exports){
function Direction(x, y) {
    var result;
    if (Math.abs(x) + Math.abs(y) > 1) {
         if (Math.abs(x) > Math.abs(y)) {
             if (x * Direction.EAST.x > 0) {
                 result = Direction.EAST;
             } else {
                 result = Direction.WEST;
             }
             y = 0;
         } else {
             if (y * Direction.NORTH.y > 0) {
                 result = Direction.NORTH;
             } else {
                 result = Direction.SOUTH;
             }
             x = 0;
         }
    }
    if (result) {
        this.x = result.x;
        this.y = result.y;
    } else {
        this.x = x;
        this.y = y;
    }
}

Direction.prototype = {
    rotateRight: function() {
        if (this.isEqualTo(Direction.NORTH)) {
            return Direction.EAST;
        }
        if (this.isEqualTo(Direction.EAST)) {
            return Direction.SOUTH;
        }
        if (this.isEqualTo(Direction.SOUTH)) {
            return Direction.WEST
        }
        if (this.isEqualTo(Direction.WEST)) {
            return Direction.NORTH;
        }
    },
    rotateLeft: function() {
        if (this.isEqualTo(Direction.NORTH)) {
            return Direction.WEST;
        }
        if (this.isEqualTo(Direction.EAST)) {
            return Direction.NORTH;
        }
        if (this.isEqualTo(Direction.SOUTH)) {
            return Direction.EAST;
        }
        if (this.isEqualTo(Direction.WEST)) {
            return Direction.SOUTH;
        }
    },
    opposite: function() {
        if (this.isEqualTo(Direction.NORTH)) {
            return Direction.SOUTH;
        }
        if (this.isEqualTo(Direction.EAST)) {
            return Direction.WEST;
        }
        if (this.isEqualTo(Direction.SOUTH)) {
            return Direction.NORTH
        }
        if (this.isEqualTo(Direction.WEST)) {
            return Direction.EAST;
        }
    },
    isEqualTo: function(dir) {
        return this.x === dir.x && this.y === dir.y;
    },
};


Direction.NORTH = new Direction(0, -1);
Direction.EAST = new Direction(1, 0);
Direction.WEST = new Direction(-1, 0);
Direction.SOUTH = new Direction(0, 1);
Direction.NONE = new Direction(0, 0);

Direction.randomDir = function() {
    var random = Math.random();
    if (random < .25) {
        return Direction.NORTH;
    }
    if (random < .50) {
        return Direction.EAST;
    }
    if (random < .75) {
        return Direction.WEST;
    }
    return Direction.SOUTH;
};



module.exports = Direction;
},{}],39:[function(require,module,exports){
var Direction = require('./Direction');

function Location(x, y) {
    this.x = x;
    this.y = y;
}

Location.prototype = {
    isEqualTo: function(location) {
        return this.x !== null && this.y !== null && this.x === location.x && this.y === location.y;
    },
    add: function(direction, times) {
        if (!times) {
            times = 1;
        }
        var x = this.x + times * direction.x;
        var y = this.y + times * direction.y;
        return new Location(x, y);
    },
    addXY: function(x, y) {
        return new Location(
            this.x + x,
            this.y + y
        );
    },
	addLoc: function(loc) {
		return new Location(
			this.x + loc.x,
			this.y + loc.y
		);
	},
    distanceSquaredTo: function(location) {
        return Math.pow(this.x - location.x, 2) + Math.pow(this.y - location.y, 2);
    },
    directionTo: function(location) {
        var x = location.x - this.x;
        var y = location.y - this.y;

        // Direction constructor takes care of mapping to scaler direction
        return new Direction(x, y);
    },
    isAdjacentTo: function(location) {
        var x = location.x - this.x;
        var y = location.y - this.y;
        return Math.abs(x) + Math.abs(y) <= 1;
    },
    toString: function() {
        return '[' + this.x + ', ' + this.y + ']';
    }
};

module.exports = Location;
},{"./Direction":38}],40:[function(require,module,exports){
var Location = require('./Location');

var Map = {
    locOnMap: function(loc) {
        if (loc.x < 0 || loc.y < 0) {
			return false;
		}
		if (loc.x >= this.width) {
			return false;
		}
		if (loc.y >= this.height) {
			return false;
		}
        return true;
    },
    projectLocOnMap: function(loc) {
        if (this.locOnMap(loc)) {
            return loc;
        }
        var x = loc.x;
        var y = loc.y
        if (x < 0) {
            x = 0;
        } else if (x >= this.width) {
            x = this.width - 1;
        }
        if (y < 0) {
            y = 0;
        } else if (y >= this.height) {
            y = this.height - 1;
        }
        return new Location(x, y);
    },
    setValAtLoc: function(loc, val) {
        if (!this.locOnMap(loc)) {
            throw "Tried to set something offmap!";
        }
        this.map[loc.x][loc.y] = val;
    },
    getValAtLoc: function(loc) {
        if (!this.locOnMap(loc)) {
            return null;
        }
        return this.map[loc.x][loc.y];
    }
};


module.exports = Map;
},{"./Location":39}],41:[function(require,module,exports){
var GameObject = require('../GameObject');
var RGB = require('../RGB');
var util = require('./../Utility');

function Tile(repr, rgb) {
	this.repr = repr;
	this.rgb = rgb;
	if (!this.rgb) {
		this.rgb = new RGB(255, 255, 255);
	}

}

Tile.FLOOR_TILE = '[_]';
Tile.UP_STAIRS = '^';
Tile.DOWN_STAIRS = '/';

util.inherit(Tile, GameObject);

module.exports = Tile;

},{"../GameObject":5,"../RGB":7,"./../Utility":8}],42:[function(require,module,exports){
var Location = require('./Location');
var Map = require('./Map');
var Tile = require('./Tile');

function TileMap(x, y) {
	this.width = x;
	this.height = y;
    this.tiles = new Array(x);
	for (var i = 0; i < x; i++) {
		this.tiles[i] = new Array(y);
	}
	this.upStairs = null;
	this.downStairs = null;
}

TileMap.prototype = {
    locOnMap: Map.locOnMap,
    projectLocOnMap: Map.projectLocOnMap,
    addTileAtLoc: function(loc, tile) {
        var x = loc.x;
        var y = loc.y;
        if (!tile) {
            throw "Tile not defined!"
        }
		if (!this.locOnMap(loc)) {
            loc = this.projectLocOnMap(loc);
		}
		this.tiles[x][y] = tile;
    },
    mergeTileAtLoc: function(loc, tile) {
        if (!tile) {
            throw "Tile not defined!"
        }
		if (!this.locOnMap(loc)) {
            loc = this.projectLocOnMap(loc);
		}
        var existingTile = this.tiles[loc.x][loc.y];
        if (existingTile) {
            this.tiles[loc.x][loc.y] = new Tile(
                existingTile.getRepr(),
                tile.getRGB().merge(existingTile.getRGB())
            );
        } else {
            this.tiles[loc.x][loc.y] = tile;
        }
    },
    mergeFloorTileAtLoc: function(loc, rgb) {
        var tile = new Tile(Tile.FLOOR_TILE, rgb);
        this.mergeTileAtLoc(loc, tile);
    },
    getTileAtLoc: function(loc) {
        if (!this.locOnMap(loc)) {
            return;
        }
		return this.tiles[loc.x][loc.y];
    },
	getTileAtXY: function(x, y) {
        return this.getTileAtLoc(new Location(x, y))

	},
	addStairsUp: function(loc, rgb) {
		var upStairs = new Tile(Tile.UP_STAIRS, rgb);
		this.upStairs = loc;
		this.addTileAtLoc(loc, upStairs);
	},
	addStairsDownAtLoc: function(loc, rgb) {
		var downStairs = new Tile(Tile.DOWN_STAIRS, rgb);
		this.downStairs = loc;
		this.addTileAtLoc(loc, downStairs);
	},
	getUpStairsLoc: function() {
		return this.upStairs;
	},
	getDownStairsLoc: function() {
		return this.downStairs;
	},
    isDownStairsLoc: function(loc) {
        return this.downStairs && loc.isEqualTo(this.downStairs);
    },
    isUpStairsLoc: function(loc) {
        return this.upStairs && loc.isEqualTo(this.upStairs);
    }
};

module.exports = TileMap;
},{"./Location":39,"./Map":40,"./Tile":41}],43:[function(require,module,exports){
/* Draws the game hud. */
var RGB = require('./../RGB');
var Location = require('./../map/Location');

/* orientation: 
   1 - centered
   2 - left-justified
   3 - right-justified 
   addNewLine: if true, incr draw loc.y so that subsequent calls will draw text
               on the next line. */
function renderHudText(txt, color, orientation, addNewLine) {
	// Bump draw loc.y by default
	var incDrawY = addNewLine == undefined ? true : addNewLine; 
	
	// Set font
	this.context.font = HudRenderer.HUD_FONT;
	this.context.fillStyle = color;
	var txtWidth = this.context.measureText(txt).width;
	var txtHeight = HudRenderer.HUD_FONT_HEIGHT;
	var orientedLoc;
	// Center text
	if (orientation === 1) {
		orientedLoc = new Location(this.currDrawLoc.x - txtWidth/2,
								   this.currDrawLoc.y + txtHeight/2);
	}
	// Left-justify text
	else if (orientation === 2) {
		orientedLoc = new Location(
		-this.canvas.width / 2 +
		HudRenderer.HUD_CREEP_HDR_TXT_LEFT_MARGIN,
							       this.currDrawLoc.y + txtHeight/2);
	}
	// Right-justify text
	else if (orientation === 3) {
		orientedLoc = new Location(
			this.canvas.width/2 - txtWidth - HudRenderer.HUD_CREEP_HDR_TXT_RIGHT_MARGIN,
			this.currDrawLoc.y + txtHeight/2);
	} else {
		throw "HudRenderer: renderHudText - unknown orientation parameter.";
	}
	this.context.fillText(txt,
		orientedLoc.x, 
		orientedLoc.y);
	if (incDrawY) {
		this.currDrawLoc.y += txtHeight;
	}
}

function renderCreep(creep, color, isHero) {
    //var creepHeader = creep.getRepr() + ": " + creep.getName() + " - lvl " + creep.getLevel();
	var creepHeader = creep.getRepr() + ": " + creep.getName();
	renderHudText.call(this, creepHeader, color, 2, false);
	var creepLevel = "Level " + creep.getLevel();
	renderHudText.call(this, creepLevel, color, 3);
	/* Add a little bit of vertical buffer for the first bar. Since its following 
	   text it will be a bit smushed otherwise.
	*/
		this.currDrawLoc.y += Math.max(HudRenderer.HUD_BAR_HEIGHT - HudRenderer.HUD_FONT_HEIGHT, 5);
	drawHudBar.call(this, creep.getHealth(), creep.getMaxHealth(), 
		HudRenderer.HUD_HP_BAR_COLOR, HudRenderer.HUD_HP_BAR_COLOR_BKG);
	if (isHero) {
		drawHudBar.call(this, 
			creep.getStats().getXP() - creep.getStats().getXPForLevel(creep.getStats().level), 
			creep.getStats().getXPForNextLevel() - creep.getStats().getXPForLevel(creep.getStats().level), 
			HudRenderer.HUD_XP_BAR_COLOR, HudRenderer.HUD_XP_BAR_COLOR_BKG);
			
		// TODO: draw powerup bar when hooks are in place
		drawHudBar.call(this, 
			creep.getPowerUpCurr(), 
			creep.getPowerUpMax(), 
			HudRenderer.HUD_POWER_BAR_COLOR, HudRenderer.HUD_POWER_BAR_COLOR_BKG);
	}
	this.currDrawLoc.y += HudRenderer.STAT_BUFFER_HEIGHT;
}

function getDifficulty(creepLevel, heroLevel) {
    var difference = creepLevel - heroLevel;
    var rgb;
    if (difference <= -10) {
        rgb = RGB.Grey.toString();
    } else if (difference <= -3) {
        rgb = RGB.Green.toString();
    } else if (difference <= 0) {
        rgb = RGB.White.toString();
    } else if (difference <= 3) {
        rgb = RGB.Orange.toString();
    } else {
        rgb = RGB.Red.toString();
    }
	return rgb;
}

function renderCreepStats(creepList, hero) {
    // render to canvas
    for (i = 0; i < creepList.length; i++) {
        if (!hero.getDimension().getRGB().mask(creepList[i].getRGB()).isBlack()) {
            var rgb = getDifficulty(creepList[i].getLevel(), hero.getLevel());
            renderCreep.call(this, creepList[i], rgb);
        }
    }
}

function renderHeroStatus(hero) {
    renderCreep.call(this, hero, HudRenderer.HUD_HERO_STAT_FONT_COLOR, true);
}

// Draws HUD symbol bars for relevant stats (hp, xp, etc) for an entity
function drawStatSymbolBar(stat, sym, symCount, color) {
	this.context.save();
	
	this.context.font = HudRenderer.HUD_SYM_BAR_FONT;
	this.context.fillStyle = color;
	var txtWidth = this.context.measureText(sym).width;
	var wholeSymbols = parseInt(stat / symCount);
	var percentage = 
		(stat - wholeSymbols * symCount) / symCount;
	var symbolBarWidth = wholeSymbols * txtWidth + txtWidth * percentage; 
	
	var loc = new Location(this.currDrawLoc.x - symbolBarWidth/2, this.currDrawLoc.y);
	for (var i = 0; i < wholeSymbols; i++, loc.x += txtWidth ) {
		drawHudSymbolBar.call(this, sym, loc, 1); 
	}
	
	if (percentage > 0) {
		drawHudSymbolBar.call(this, sym, loc, percentage);
	}
	this.currDrawLoc.y += HudRenderer.HUD_SYM_BAR_FONT_HEIGHT;
	
	this.context.restore();
}

/* Draws a HUD symbol or a left-to-right percentage of a HUD symbol. The percentage 
   allows for the HUD to store more count information in a smaller space. */
function drawHudSymbolBar(symbol, loc, percentage) {
	var txtWidth = this.context.measureText(symbol).width;
	var txtHeight = HudRenderer.HUD_SYM_BAR_FONT_HEIGHT;
	this.context.save();
	this.context.beginPath();
	/* The height of the clipping rects here doesn't matter, just make sure they are
	   tall enough to not clip horizontally. */
	this.context.rect(loc.x - txtWidth/2, loc.y - 5 * txtHeight,
		txtWidth * percentage, 10 * txtHeight);
	this.context.clip();
	this.context.fillText(symbol,
		loc.x - txtWidth/2, 
		loc.y + txtHeight/2);
	this.context.restore();
}

/* Draws a HUD bar for a given dynamic property. */
function drawHudBar(curr, max, color, bkgColor) {
	var percentage = curr/max;
	// Draw bar background (indicative of capacity)
	this.context.fillStyle = bkgColor;
	this.context.fillRect(this.currDrawLoc.x - HudRenderer.HUD_BAR_LENGTH/2, this.currDrawLoc.y - HudRenderer.HUD_BAR_HEIGHT/2, 
		HudRenderer.HUD_BAR_LENGTH, HudRenderer.HUD_BAR_HEIGHT);
	// Draw bar (indicative of current quantity)
	this.context.fillStyle = color;
	this.context.fillRect(this.currDrawLoc.x - HudRenderer.HUD_BAR_LENGTH/2, this.currDrawLoc.y - HudRenderer.HUD_BAR_HEIGHT/2, 
		HudRenderer.HUD_BAR_LENGTH * percentage, HudRenderer.HUD_BAR_HEIGHT);
	// Draw bar number
	this.context.fillStyle = HudRenderer.HUD_BAR_FONT_COLOR;
	this.context.font = HudRenderer.HUD_BAR_FONT;
	var txt = Math.ceil(curr).toString() + "/" + Math.ceil(max).toString();
	var txtWidth = this.context.measureText(txt).width;
	var txtHeight = HudRenderer.HUD_BAR_FONT_HEIGHT;
	this.context.fillText(txt,
		this.currDrawLoc.x - txtWidth/2, 
		this.currDrawLoc.y + txtHeight/2);
	this.currDrawLoc.y += HudRenderer.HUD_BAR_HEIGHT;
}

function HudRenderer(canvas) {
	this.canvas = canvas;
	this.context = canvas.getContext("2d");
	this.zoomFactor = 1.0;
}

HudRenderer.prototype = {
	render: function(hero, creepList) {
		this.context.save();
		
		/* Init draw loc. Draw loc follows a vertical line down the middle of the
		   of the canvas, and logic in renderHudText ensures text is centered based
		   on its unique width. */
		this.currDrawLoc = new Location(0, HudRenderer.STAT_BUFFER_HEIGHT);
		
		// Fill canvas with black background
		this.context.fillStyle = HudRenderer.HUD_COLOR;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
		
		// Draw HUD Outline
		this.context.strokeStyle = HudRenderer.HUD_OUTLINE_COLOR;
		this.context.lineWidth = HudRenderer.HUD_OUTLINE_WIDTH;
		this.context.strokeRect(0, 0, this.canvas.width, this.canvas.height);
		
		// Center grid at <canvas.width/2, 0>
		this.context.translate(this.canvas.width/2, 0);
		
		// Scale by zoom factor
		this.context.scale(this.zoomFactor,this.zoomFactor);
		
		// Draw HUD elements
		renderHeroStatus.call(this, hero);
		renderCreepStats.call(this, creepList, hero);
		
		this.context.restore();
	}
}

/**** General HUD stuff ****/
HudRenderer.HUD_OUTLINE_COLOR = RGB.White.toString();
HudRenderer.HUD_OUTLINE_WIDTH = 5;
HudRenderer.HUD_COLOR = RGB.Black.toString();
// Vertical space between hero/creep statuses
HudRenderer.STAT_BUFFER_HEIGHT = 10;
/**** End General HUD stuff ****/

/**** HUD text stuff ****/
HudRenderer.HUD_FONT = "14px Comic Sans MS";
HudRenderer.HUD_FONT_HEIGHT = parseInt(HudRenderer.HUD_FONT) * 1.25; // approx height
HudRenderer.HUD_SYM_BAR_FONT = "24px Arial";
HudRenderer.HUD_SYM_BAR_FONT_HEIGHT = parseInt(HudRenderer.HUD_SYM_BAR_FONT) * 1.0; // approx height
HudRenderer.HUD_HERO_STAT_FONT_COLOR = RGB.LightGreen.toString();
HudRenderer.HUD_CREEP_HDR_TXT_LEFT_MARGIN = 20;
HudRenderer.HUD_CREEP_HDR_TXT_RIGHT_MARGIN = HudRenderer.HUD_CREEP_HDR_TXT_LEFT_MARGIN;
/**** End HUD text stuff ****/

/**** HUD bar stuff ****/
// Font
HudRenderer.HUD_BAR_FONT = "12px Comic Sans MS";
HudRenderer.HUD_BAR_FONT_HEIGHT = parseInt(HudRenderer.HUD_BAR_FONT) * 0.80; // approx height
HudRenderer.HUD_BAR_FONT_COLOR = RGB.White.toString();

// Dimensions
HudRenderer.HUD_BAR_HEIGHT = 17;
HudRenderer.HUD_BAR_LENGTH = 150;

// Colors
HudRenderer.HUD_HP_BAR_COLOR = RGB.Red.toString();
HudRenderer.HUD_HP_BAR_COLOR_BKG = RGB.DarkRed.toString();
HudRenderer.HUD_XP_BAR_COLOR = RGB.Gold.toString();
HudRenderer.HUD_XP_BAR_COLOR_BKG = RGB.DarkGold.toString();
HudRenderer.HUD_POWER_BAR_COLOR = RGB.Blue.toString();
HudRenderer.HUD_POWER_BAR_COLOR_BKG = RGB.DarkBlue.toString();
/**** End HUD bar stuff ****/

/**** HUD symbol bar stuff ****/
HudRenderer.HUD_HEALTH_SYM = "=";
// Each HUD_HEALTH_SYM represents HUD_HEALTH_SYM_COUNT health
HudRenderer.HUD_HEALTH_SYM_COUNT = 5;
/**** End HUD symbol bar stuff ****/

module.exports = HudRenderer;
},{"./../RGB":7,"./../map/Location":39}],44:[function(require,module,exports){
/* Composes the master canvas with the hidden sub-canvases for game, hud, etc. */
var Renderer = require('./Renderer');
var HudRenderer = require('./HudRenderer');

// Renders the hidden sub-canvases in preparation for composition
function render() {
	Renderer.prototype.render.apply(this.renderer, this.renderData['game'].data());
	HudRenderer.prototype.render.apply(this.hudRenderer, this.renderData['hud'].data());
}
/* canvas - the master canvas that will be visibile on the page
   renderData - object that follows the form:
   { 
	   renderer1Name: {
		   canvas: <the hidden canvas for this renderer>
		   data: function() { return [array of run-time computed render parameters]; }
		   },   
	   renderer2Name: {
	       ...
		   }	 
   }   */
function RenderCompositor(canvas, renderData) {
	this.canvas = canvas;
	this.context = canvas.getContext("2d");
	this.renderData = renderData;
	this.renderer = new Renderer(renderData['game'].canvas);
	this.hudRenderer = new HudRenderer(renderData['hud'].canvas);
}

RenderCompositor.prototype = {

	compose: function() {
		// Render sub-canvases that make up master canvas
		render.call(this);
		
		/* Compose!
		   Right 100% - RenderCompositor.HUD_PERCENT of master canvas = game 
		   Left RenderCompositor.HUD_PERCENT of master canvas = hud */
		this.context.drawImage(this.renderData['game'].canvas, 
		    0, 
			0,
			this.renderData['game'].canvas.width,
			this.renderData['game'].canvas.height,
			this.canvas.width * RenderCompositor.HUD_PERCENT, 
			0, 
			this.canvas.width * (1 - RenderCompositor.HUD_PERCENT), 
			this.canvas.height
			);
		this.context.drawImage(this.renderData['hud'].canvas, 
		    0, 
			0,
			this.renderData['hud'].canvas.width,
			this.renderData['hud'].canvas.height,
			0, 
			0, 
			this.canvas.width * RenderCompositor.HUD_PERCENT, 
			this.canvas.height
			);
	}
}

RenderCompositor.HUD_PERCENT = .25;

module.exports = RenderCompositor;
},{"./HudRenderer":43,"./Renderer":45}],45:[function(require,module,exports){
/* Renders the game to the canvas. */
var Location = require('./../map/Location');
var Tile = require('./../map/Tile');
var RGB = require('../RGB');

// Transform location to be relative to center & scaled by Renderer.GAME_TO_CANVAS
function toCanvasSpace(location, centerLoc) {
	var relativeLoc = new Location(location.x + -centerLoc.x, location.y + -centerLoc.y); 
	return new Location(relativeLoc.x * Renderer.GAME_TO_CANVAS,
		relativeLoc.y * Renderer.GAME_TO_CANVAS);
}

// Draws a tile 
function drawTile(tile, loc, filter) {
	this.context.strokeStyle = tile.getRGB(filter).toString();
	this.context.lineWidth = 2;
	// Get loc in canvas space
	canvasLoc = toCanvasSpace(loc, this.centerLoc);
	this.context.strokeRect(canvasLoc.x - Renderer.TILE_WIDTH/2, 
		canvasLoc.y - Renderer.TILE_WIDTH/2,
		Renderer.TILE_WIDTH, 
		Renderer.TILE_WIDTH);
	// If this is upstairs or downstairs, draw the symbol as well
	if (tile.getRepr() !== Tile.FLOOR_TILE) {
		drawSymbol.call(this, tile, loc, filter, false);
	}
} 

/* Draws the appropriate symbol for a:
	- creep
	- hero
	- downstairs tile
	- upstairs tile
*/
function drawSymbol(entity, loc, filter, isHero) {
	// If hero, draw without filter
	 var rgb = isHero ? entity.getRGB() : entity.getRGB(filter);
    if (rgb.isBlack()) {
        rgb = RGB.DarkGrey
    }
    var color = rgb.toString();
	
	// Get loc in canvas space
	canvasLoc = toCanvasSpace(loc, this.centerLoc);
	var txt = entity.getRepr();
	drawText.call(this, txt, canvasLoc, color);
	// Stroke white outline for visibility on creeps
	// This doesnt look that good, but might bring it back later
	/*if (!isHero) {
		this.context.save();
		this.context.strokeStyle = RGB.White.toString();
		this.context.lineWidth = .5;
		this.context.strokeText(txt,
			canvasLoc.x - txtWidth/2, 
			canvasLoc.y + txtHeight/2);
		this.context.restore();
	}*/
}

/* Why not just compute fontHeight from font? Good question. Apparently formula
   for approximating font height varies by font and possibly zoom, so have to 
   pass it in so that the ideal formula can be used. If it's not passed, 
   assume parseInt(font) * .5, which works great for the game font. */
function drawText(txt, loc, color, font, fontHeight) {
	this.context.font = font == undefined ? Renderer.FONT : font;
	fontHeight = fontHeight == undefined ? Renderer.FONT_HEIGHT : fontHeight;
	this.context.fillStyle = color;
	var txt = txt;
	var txtWidth = this.context.measureText(txt).width;
	var txtHeight = fontHeight; // approx height
	this.context.fillText(txt,
		loc.x - txtWidth/2, 
		loc.y + txtHeight/2);
}

function Renderer(canvas) {
	this.canvas = canvas;
	this.context = canvas.getContext("2d");
	// Determines the game location that the canvas should be centered on
	this.centerLoc = null;
	this.zoomFactor = 2; // 1.1 would be 10% magnification
}

Renderer.prototype = {
    render: function(tileMap, creepMap, hero, filter, score, dungeonLvl, closeQtrDijkstra, dijkstra) {
		this.context.save();
		this.centerLoc = hero.getLocation();
		var canvasLoc;
	
		// Fill canvas with black background
		this.context.fillStyle = Renderer.BACKGROUND_COLOR;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
		
		// Draw Game Outline
		this.context.strokeStyle = Renderer.OUTLINE_COLOR;
		this.context.lineWidth = Renderer.OUTLINE_WIDTH;
		this.context.strokeRect(0, 0, this.canvas.width, this.canvas.height);
		
		// Center grid at canvas center
		this.context.translate(this.canvas.width/2, this.canvas.height/2);
		
		// Scale by zoom factor
		this.context.scale(this.zoomFactor,this.zoomFactor);
	
		// Iterate through tileMap & creepMap and draw tiles & creeps & player.
		for (var x = 0; x < tileMap.width; x++) {
			for (var y = 0; y < tileMap.height; y++ ) {
                var loc = new Location(x, y);
                if (loc.distanceSquaredTo(hero.location) > hero.getVisionRadiusSquared()) {
                    // COMMENT OUT THE continue TO SEE EVERYTHING
                    continue;
                }

                var tile = tileMap.getTileAtLoc(loc);
				// If there is a tile to draw in this location, draw it
				if (tile) {
					drawTile.call(this, tileMap.getTileAtLoc(loc), loc, filter);
				}
				// If a character or the hero resides in this location, draw it
                var creep = creepMap.getCreepAtLoc(loc);
				if (creep) {
					if (creepMap.heroAtLoc(loc)) {
						drawSymbol.call(this, creep, loc, filter, true);
					} else {
                        // if the tile is not black or the creep is not black, draw it
                        if (tile.getRGB(hero.getDimension().getRGB()).isNotBlack()
                                || creep.getRGB(hero.getDimension().getRGB()).isNotBlack()) {
                            drawSymbol.call(this, creepMap.getCreepAtLoc(loc), loc, filter, false);
                        }
					}
				}
				
				/* Debug: draw dijkstra move map data. Move symbol = N,S,E,W,
				   U for undefined, and B for BAD if unknown offset. closeQtrDijkstra/dijkstra will
				   be null on first couple renders. */
				/*if (closeQtrDijkstra) {
					var moveSymbol = closeQtrDijkstra.getDijkstraSymbol(loc);
					this.context.save();
					drawText.call(this, moveSymbol, toCanvasSpace(loc, this.centerLoc), "#00FF00", "4px Arial");
					this.context.restore();
				}*/
				// Debug: end draw dijkstra move map data
			}
		}
		
		// Draw game title using current filter
		drawText.call(this, Renderer.GAME_TITLE, 
			new Location(this.canvas.width/(2 * this.zoomFactor) - Renderer.GAME_INFO_BUFFER_SPACE_X,
						 -this.canvas.height/(2 * this.zoomFactor) + Renderer.GAME_INFO_BUFFER_SPACE_Y), 
						 filter.toString(), 
						 Renderer.GAME_TITLE_FONT,
						 Renderer.GAME_TITLE_FONT_HEIGHT);
		// Draw score using current filter
		drawText.call(this, Renderer.SCORE_TXT + score, 
			new Location(-this.canvas.width/(2 * this.zoomFactor) + Renderer.GAME_INFO_BUFFER_SPACE_X,
						 -this.canvas.height/(2 * this.zoomFactor) + Renderer.GAME_INFO_BUFFER_SPACE_Y), 
						 filter.toString(), 
						 Renderer.GAME_SCORE_FONT,
						 Renderer.GAME_SCORE_FONT_HEIGHT);
		// Draw dungeon lvl
		drawText.call(this, Renderer.DUNGEON_LVL_TXT + dungeonLvl, 
			new Location(0,
						 -this.canvas.height/(2 * this.zoomFactor) + Renderer.GAME_INFO_BUFFER_SPACE_Y), 
						 filter.toString(), 
						 Renderer.GAME_SCORE_FONT,
						 Renderer.GAME_SCORE_FONT_HEIGHT);
		
		this.context.restore();
    }
};

/* Scale factor going between game coordinates and canvas coordinates 
   i.e. game<x * GAME_TO_CANVAS,y * GAME_TO_CANVAS> = canvas<x,y> 
	
   Basically, this changes how far apart the objects are rendered. We'll want to
   keep this at a number that jives with the object asset size (read: font size).
   !!!IMPORTANT NOTE!!!: Don't use this for zoom! Zoom is accomplished by scaling 
   the canvas context.
*/
Renderer.OUTLINE_COLOR = RGB.White.toString();
Renderer.OUTLINE_WIDTH = 5;
Renderer.BACKGROUND_COLOR = RGB.Black.toString();
Renderer.GAME_TO_CANVAS = 18;
Renderer.TILE_WIDTH = 15;
Renderer.FONT = "12px Arial";
Renderer.FONT_HEIGHT = parseInt(Renderer.FONT) * .5;
Renderer.GAME_TITLE = "RGB";
Renderer.SCORE_TXT = "Score: ";
Renderer.DUNGEON_LVL_TXT = "Dungeon Floor: ";
Renderer.GAME_INFO_COLOR = RGB.LightGreen.toString();
Renderer.GAME_TITLE_FONT = "24px Impact";
Renderer.GAME_TITLE_FONT_HEIGHT = parseInt(Renderer.GAME_TITLE_FONT) * 1.0;
Renderer.GAME_SCORE_FONT = "12px Impact";
Renderer.GAME_SCORE_FONT_HEIGHT = parseInt(Renderer.GAME_SCORE_FONT) * 1.0;
Renderer.GAME_INFO_BUFFER_SPACE_X = 40;
Renderer.GAME_INFO_BUFFER_SPACE_Y = 20;

module.exports = Renderer;
},{"../RGB":7,"./../map/Location":39,"./../map/Tile":41}]},{},[27])