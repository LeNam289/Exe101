/*! jQuery v3.6.4 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.4",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,y,s,c,v,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.cssHas=ce(function(){try{return C.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),d.cssHas||y.push(":has"),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[S]&&(y=Ce(y)),v&&!v[S]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function $(){E.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||S.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(t,e){S.event.special[t]={setup:function(){return Se(this,t,Ce),!1},trigger:function(){return Se(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace($e,"$1")||void 0),""!==a||ie(e)||(a=S.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=E.createElement("div").style,Xe={};function Ve(e){var t=S.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return B(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return B(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){S(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=S(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:yt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},v.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),v.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,S.ajaxSettings),t):Bt(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=S.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?S(v):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=E.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=S.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=S.event&&y.global)&&0==S.active++&&S.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(Et.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<S.inArray("script",y.dataTypes)&&S.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
/*! jQuery Migrate v3.4.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],a=1;a<=3;a++){if(+n[a]>+o[a])return 1;if(+n[a]<+o[a])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.4.0";var t=Object.create(null),o=(s.migrateDisablePatches=function(){for(var e=0;e<arguments.length;e++)t[arguments[e]]=!0},s.migrateEnablePatches=function(){for(var e=0;e<arguments.length;e++)delete t[arguments[e]]},s.migrateIsPatchEnabled=function(e){return!t[e]},n.console&&n.console.log&&(s&&e("3.0.0")||n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion)),{});function i(e,t){var r=n.console;!s.migrateIsPatchEnabled(e)||s.migrateDeduplicateWarnings&&o[t]||(o[t]=!0,s.migrateWarnings.push(t+" ["+e+"]"),r&&r.warn&&!s.migrateMute&&(r.warn("JQMIGRATE: "+t),s.migrateTrace&&r.trace&&r.trace()))}function r(e,t,r,n,o){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return i(n,o),r},set:function(e){i(n,o),r=e}})}function a(e,t,r,n,o){var a=e[t];e[t]=function(){return o&&i(n,o),(s.migrateIsPatchEnabled(n)?r:a||s.noop).apply(this,arguments)}}function u(e,t,r,n,o){if(!o)throw new Error("No warning message provided");a(e,t,r,n,o)}function d(e,t,r,n){a(e,t,r,n)}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){o={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&i("quirks","jQuery is not compatible with Quirks Mode");var c,l,p,f={},m=s.fn.init,y=s.find,h=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,g=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,v=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;for(c in d(s.fn,"init",function(e){var t=Array.prototype.slice.call(arguments);return s.migrateIsPatchEnabled("selector-empty-id")&&"string"==typeof e&&"#"===e&&(i("selector-empty-id","jQuery( '#' ) is not a valid selector"),t[0]=[]),m.apply(this,t)},"selector-empty-id"),s.fn.init.prototype=s.fn,d(s,"find",function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&h.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(g,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),i("selector-hash","Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){i("selector-hash","Attribute selector with '#' was not fixed: "+r[0])}}return y.apply(this,r)},"selector-hash"),y)Object.prototype.hasOwnProperty.call(y,c)&&(s.find[c]=y[c]);u(s.fn,"size",function(){return this.length},"size","jQuery.fn.size() is deprecated and removed; use the .length property"),u(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"parseJSON","jQuery.parseJSON is deprecated; use JSON.parse"),u(s,"holdReady",s.holdReady,"holdReady","jQuery.holdReady is deprecated"),u(s,"unique",s.uniqueSort,"unique","jQuery.unique is deprecated; use jQuery.uniqueSort"),r(s.expr,"filters",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),r(s.expr,":",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&u(s,"trim",function(e){return null==e?"":(e+"").replace(v,"")},"trim","jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(u(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"nodeName","jQuery.nodeName is deprecated"),u(s,"isArray",Array.isArray,"isArray","jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(u(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"isNumeric","jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){f["[object "+t+"]"]=t.toLowerCase()}),u(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?f[Object.prototype.toString.call(e)]||"object":typeof e},"type","jQuery.type is deprecated"),u(s,"isFunction",function(e){return"function"==typeof e},"isFunction","jQuery.isFunction() is deprecated"),u(s,"isWindow",function(e){return null!=e&&e===e.window},"isWindow","jQuery.isWindow() is deprecated")),s.ajax&&(l=s.ajax,p=/(=)\?(?=&|$)|\?\?/,d(s,"ajax",function(){var e=l.apply(this,arguments);return e.promise&&(u(e,"success",e.done,"jqXHR-methods","jQXHR.success is deprecated and removed"),u(e,"error",e.fail,"jqXHR-methods","jQXHR.error is deprecated and removed"),u(e,"complete",e.always,"jqXHR-methods","jQXHR.complete is deprecated and removed")),e},"jqXHR-methods"),e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(p.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&p.test(e.data))&&i("jsonp-promotion","JSON-to-JSONP auto-promotion is deprecated")}));var j=s.fn.removeAttr,b=s.fn.toggleClass,w=/\S+/g;function Q(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}d(s.fn,"removeAttr",function(e){var r=this;return s.each(e.match(w),function(e,t){s.expr.match.bool.test(t)&&(i("removeAttr-bool","jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),j.apply(this,arguments)},"removeAttr-bool"),d(s.fn,"toggleClass",function(t){return void 0!==t&&"boolean"!=typeof t?b.apply(this,arguments):(i("toggleClass-bool","jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))},"toggleClass-bool");var x,A=!1,R=/^[a-z]/,T=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return A=!0,e=r.apply(this,arguments),A=!1,e})}),d(s,"swap",function(e,t,r,n){var o,a={};for(o in A||i("swap","jQuery.swap() is undocumented and deprecated"),t)a[o]=e.style[o],e.style[o]=t[o];for(o in r=r.apply(e,n||[]),t)e.style[o]=a[o];return r},"swap"),e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return i("cssProps","jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),e("4.0.0")&&"undefined"!=typeof Proxy&&(s.cssNumber=new Proxy({animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},{get:function(){return i("css-number","jQuery.cssNumber is deprecated"),Reflect.get.apply(this,arguments)},set:function(){return i("css-number","jQuery.cssNumber is deprecated"),Reflect.set.apply(this,arguments)}})),x=s.fn.css,d(s.fn,"css",function(e,t){var r,n=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(n,e,t)}),this):("number"==typeof t&&(t=Q(e),r=t,R.test(r)&&T.test(r[0].toUpperCase()+r.slice(1))||s.cssNumber[t]||i("css-number",'Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),x.apply(this,arguments))},"css-number");function C(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}var S,N,P,k,H,E,M,q=s.data,D=(d(s,"data",function(e,t,r){var n,o,a;if(t&&"object"==typeof t&&2===arguments.length){for(a in n=s.hasData(e)&&q.call(this,e),o={},t)a!==Q(a)?(i("data-camelCase","jQuery.data() always sets/gets camelCased names: "+a),n[a]=t[a]):o[a]=t[a];return q.call(this,e,o),t}return t&&"string"==typeof t&&t!==Q(t)&&(n=s.hasData(e)&&q.call(this,e))&&t in n?(i("data-camelCase","jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):q.apply(this,arguments)},"data-camelCase"),s.fx&&(P=s.Tween.prototype.run,k=function(e){return e},d(s.Tween.prototype,"run",function(){1<s.easing[this.easing].length&&(i("easing-one-arg","'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=k),P.apply(this,arguments)},"easing-one-arg"),S=s.fx.interval,N="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||i("fx-interval",N),s.migrateIsPatchEnabled("fx-interval")&&void 0===S?13:S},set:function(e){i("fx-interval",N),S=e}})),s.fn.load),F=s.event.add,W=s.event.fix,O=(s.event.props=[],s.event.fixHooks={},r(s.event.props,"concat",s.event.props.concat,"event-old-patch","jQuery.event.props.concat() is deprecated and removed"),d(s.event,"fix",function(e){var t=e.type,r=this.fixHooks[t],n=s.event.props;if(n.length){i("event-old-patch","jQuery.event.props are deprecated and removed: "+n.join());while(n.length)s.event.addProp(n.pop())}if(r&&!r._migrated_&&(r._migrated_=!0,i("event-old-patch","jQuery.event.fixHooks are deprecated and removed: "+t),(n=r.props)&&n.length))while(n.length)s.event.addProp(n.pop());return t=W.call(this,e),r&&r.filter?r.filter(t,e):t},"event-old-patch"),d(s.event,"add",function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&i("load-after-event","jQuery(window).on('load'...) called after load event occurred"),F.apply(this,arguments)},"load-after-event"),s.each(["load","unload","error"],function(e,t){d(s.fn,t,function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?D.apply(this,e):(i("shorthand-removed-v3","jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))},"shorthand-removed-v3")}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){u(s.fn,r,function(e,t){return 0<arguments.length?this.on(r,null,e,t):this.trigger(r)},"shorthand-deprecated-v3","jQuery.fn."+r+"() event shorthand is deprecated")}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&i("ready-event","'ready' event is deprecated")}},u(s.fn,"bind",function(e,t,r){return this.on(e,null,t,r)},"pre-on-methods","jQuery.fn.bind() is deprecated"),u(s.fn,"unbind",function(e,t){return this.off(e,null,t)},"pre-on-methods","jQuery.fn.unbind() is deprecated"),u(s.fn,"delegate",function(e,t,r,n){return this.on(t,e,r,n)},"pre-on-methods","jQuery.fn.delegate() is deprecated"),u(s.fn,"undelegate",function(e,t,r){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},"pre-on-methods","jQuery.fn.undelegate() is deprecated"),u(s.fn,"hover",function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)},"pre-on-methods","jQuery.fn.hover() is deprecated"),/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi),_=(s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.migrateEnablePatches("self-closed-tags")},d(s,"htmlPrefilter",function(e){var t,r;return(r=(t=e).replace(O,"<$1></$2>"))!==t&&C(t)!==C(r)&&i("self-closed-tags","HTML tags must be properly nested and closed: "+t),e.replace(O,"<$1></$2>")},"self-closed-tags"),s.migrateDisablePatches("self-closed-tags"),s.fn.offset);return d(s.fn,"offset",function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?_.apply(this,arguments):(i("offset-valid-elem","jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},"offset-valid-elem"),s.ajax&&(H=s.param,d(s,"param",function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(i("param-ajax-traditional","jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),H.call(this,e,t)},"param-ajax-traditional")),u(s.fn,"andSelf",s.fn.addBack,"andSelf","jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),s.Deferred&&(E=s.Deferred,M=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],d(s,"Deferred",function(e){var a=E(),i=a.promise();function t(){var o=arguments;return s.Deferred(function(n){s.each(M,function(e,t){var r="function"==typeof o[e]&&o[e];a[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===i?n.promise():this,r?[e]:arguments)})}),o=null}).promise()}return u(a,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),u(i,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),e&&e.call(a,a),a},"deferred-pipe"),s.Deferred.exceptionHook=E.exceptionHook),s});
jQuery.cookie=function(name,value,options){if(typeof value!='undefined'){options=options||{};if(value===null){value='';options.expires=-1;}
var expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000));}else{date=options.expires;}
expires='; expires='+date.toUTCString();}
var path=options.path?'; path='+(options.path):'';var domain=options.domain?'; domain='+(options.domain):'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('');}else{var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break;}}}
return cookieValue;}};;jQuery.fn.pagination=function(maxentries,opts){opts=jQuery.extend({items_per_page:15,num_display_entries:8,current_page:0,num_edge_entries:0,link_to:"#",prev_text:"<<",next_text:">>",ellipse_text:"...",prev_show_always:true,next_show_always:true,dis_pageEnd:false,start_text:"<<",end_text:">>",callback:function(){return false;}},opts||{});return this.each(function(){function numPages(){return Math.ceil(maxentries/opts.items_per_page);}
function getInterval(){var ne_half=Math.ceil(opts.num_display_entries/2);var np=numPages();var upper_limit=np-opts.num_display_entries;var start=current_page>ne_half?Math.max(Math.min(current_page-ne_half,upper_limit),0):0;var end=current_page>ne_half?Math.min(current_page+ne_half,np):Math.min(opts.num_display_entries,np);return[start,end];}
function pageSelected(page_id,evt){current_page=page_id;drawLinks();var continuePropagation=opts.callback(page_id,panel);if(!continuePropagation){if(evt.stopPropagation){evt.stopPropagation();}
else{evt.cancelBubble=true;}}
return continuePropagation;}
function drawLinks(){panel.empty();var interval=getInterval();var np=numPages();var getClickHandler=function(page_id){return function(evt){return pageSelected(page_id,evt);}}
var appendItem=function(page_id,appendopts){page_id=page_id<0?0:(page_id<np?page_id:np-1);appendopts=jQuery.extend({text:page_id+1,classes:""},appendopts||{});if(page_id==current_page){var lnk=$("<span class='current'>"+(appendopts.text)+"</span>");}
else{var lnk=$("<a>"+(appendopts.text)+"</a>").bind("click",getClickHandler(page_id)).attr('href',opts.link_to.replace(/__id__/,page_id));}
if(appendopts.classes){lnk.addClass(appendopts.classes);}
panel.append(lnk);}
if(current_page>=0){appendItem(0,{text:opts.start_text?opts.start_text:"&nbsp;",classes:"first"});}
if(opts.prev_text&&(current_page>0||opts.prev_show_always)){if(opts.dis_pageEnd){appendItem(0,{text:opts.start_text,classes:"prev"});}
appendItem(current_page-1,{text:opts.prev_text,classes:"prev"});}
if(interval[0]>0&&opts.num_edge_entries>0){var end=Math.min(opts.num_edge_entries,interval[0]);for(var i=0;i<end;i++){appendItem(i);}
if(opts.num_edge_entries<interval[0]&&opts.ellipse_text){jQuery("<span>"+opts.ellipse_text+"</span>").appendTo(panel);}}
for(var i=interval[0];i<interval[1];i++){appendItem(i);}
if(interval[1]<np&&opts.num_edge_entries>0){if(np-opts.num_edge_entries>interval[1]&&opts.ellipse_text){jQuery("<span>"+opts.ellipse_text+"</span>").appendTo(panel);}
var begin=Math.max(np-opts.num_edge_entries,interval[1]);for(var i=begin;i<np;i++){appendItem(i);}}
if(opts.next_text&&(current_page<np-1||opts.next_show_always)){appendItem(current_page+1,{text:opts.next_text,classes:"next"});if(opts.dis_pageEnd){appendItem(np,{text:opts.end_text,classes:"next"});}}
if(np>=1){appendItem(end,{text:opts.end_text?opts.end_text:"&nbsp;",classes:"last"});}}
var current_page=opts.current_page;maxentries=(!maxentries||maxentries<0)?1:maxentries;opts.items_per_page=(!opts.items_per_page||opts.items_per_page<0)?1:opts.items_per_page;var panel=jQuery(this);this.selectPage=function(page_id){pageSelected(page_id);}
this.prevPage=function(){if(current_page>0){pageSelected(current_page-1);return true;}
else{return false;}}
this.nextPage=function(){if(current_page<numPages()-1){pageSelected(current_page+1);return true;}
else{return false;}}
drawLinks();});};$.ie6=false;window.VHV=class{static isReady=false
static cache={}
static debug=1
static readyFlags={}
static async=true
static allLinks={}
static xmlCache={}
static domain=location.host
static home=location.protocol+'//'+location.host
static version=1.21
static rootURL=rootURL
static staticURL=staticURL
static innerText='textContent'
static elems={}
static ready=true
static CMS={}
static Content={}
static Common={Input:{}}
static isDebug=0
static defaultPortalId='App'
static exportUser=0
static mailTo(email){if(email){VHV.Model('Common.Email.select')({email:email},function(response){response=JSON.parse(response);if(response.status==='SUCCESS'&&response.email){window.location.href='mailto:'+VHV.notag(response.email);}});}}
static using(moduleInfo,options,success,success2){let moduleName=moduleInfo.module,currentModule=VHV.App.currentModule,moduleId=moduleInfo.id?moduleInfo.id:++VHV.App.maxModuleId;if((typeof(options)==='string')&&options){moduleName=options;options=success;if(!options)options={};options.phpModuleName=moduleInfo.module;options.module=moduleName;success=success2;}
if(VHV.App.maxModuleId<moduleId)VHV.App.maxModuleId=moduleId;VHV.load(moduleName,function(){VHV.runModule(moduleName,moduleId,$.extend(moduleInfo,options),success,currentModule);});}
static runModule(moduleName,moduleId,options,success,currentModule){let lastModule=VHV.App.currentModule,module={},proto={},oldModule=VHV.App.modules[moduleId];if(!oldModule||(oldModule.module!==moduleName&&oldModule.phpModuleName!==moduleName)){VHV.App.currentModule=currentModule;eval('module = new VHV.'+moduleName+'('+moduleId+'); proto = VHV.'+moduleName+'.prototype;');for(let i in proto){if(typeof(proto[i])==='object'){module[i]=$.extend(true,$.isArray(proto[i])?[]:{},proto[i]);}}
$.extend(module,options);if(oldModule){for(let i in{moduleParentId:1,children:1}){if(oldModule[i]){module[i]=options[i]=oldModule[i];}}}
else{for(let i2 in VHV.App.modules){if(VHV.App.modules[i2].moduleParentId==moduleId){VHV.App.modules[i2].parent=module;module.addChildren(VHV.App.modules[i2]);}}}
if(module.moduleParentId&&VHV.App.modules[module.moduleParentId]){VHV.App.modules[module.moduleParentId].addChildren(module);}
VHV.App.currentModule=lastModule;module.module=moduleName;module.id=moduleId;if(module.modules){let modules={};module.applyFunction(function(){for(let aModule of this.modules){if(aModule?.module){VHV.using(aModule.module,$.extend({position:i},aModule),function(){modules[this.position]=1;});}}});VHV.ExecQueue.add(function(){module.init(success);},function(){for(let i3 in module.modules){if(i3!=='#comment'&&!modules[i3]&&module.modules[i3].module){return false;}}
return true;},null,{caller:'runModule '+moduleName});return;}
module.init(success);}
else{module=VHV.App.modules[moduleId];if(options.moduleParentId){delete options.moduleParentId;}
$.extend(module,options);module.id=moduleId;module.ready(function(){module.initEvents();});}}
static updateDisplay(parents){$('[data-x-display]',parents).each(function(){let disableField=$(this).data('disableField'),ok=false;eval('ok = '+$(this).data('xDisplay'));if(ok){if(disableField&&disableField=='1'){$(this).find('input,select,textarea').each(function(){$(this).prop('disabled',false);});}else if(disableField&&disableField=='2'){$(this).find('input,select,textarea').each(function(){$(this).removeAttr('data-disabled');});}
else if(disableField){$(this).find('[name^="'+disableField+'"]').each(function(){$(this).prop('disabled',false);});}
$(this).show();}else{if(disableField&&disableField=='1'){$(this).find('input,select,textarea').each(function(){if(!this.name||this.name.indexOf('#')===-1){$(this).prop('disabled',true);}});}else if(disableField&&disableField=='2'){$(this).find('input,select,textarea').each(function(){$(this).attr('data-disabled','1');});}else if(disableField){$(this).find('[name^="'+disableField+'"]').each(function(){if(!this.name||this.name.indexOf('#')===-1){$(this).prop('disabled',true);}});}
$(this).hide();}});$(window).scroll();}
static init(){if(VHV.inited||window.vhvInited){return;}
this.isReady=true;window.initVHV=true;window.vhvInited=VHV.inited=true;window.elem=VHV.elem;window.$L=window.Lang=VHV.Lang;window.$VHV=function(name,context){let modules=VHV.App.modules,parentId=-1,path=name.split(' ');if(path.length>1){let obj=$VHV(path.splice(0,1),context);if(obj)return $VHV(path.join(' '),obj);return null;}
if(typeof(context)==='object'){if(context.length&&context.find){modules=[];context.find('.ModuleWrapper').each(function(){if(this.id){let id=this.id.replace('module','');if(VHV.App.modules[id]){modules.push(VHV.App.modules[id]);}}});}
else{parentId=context.id;}}
else if(typeof(context)==='number'){parentId=context;}
for(let i in modules){if(modules[i]&&((modules[i].module==name)||VHV.isInherited(modules[i].module,name))){if(parentId==-1||VHV.App.isChild(modules[i].id,parentId)){if(typeof(context)==='function'){if(context.call(modules[i])){return modules[i];}}
else{return modules[i];}}}}
return null;};window.module=undefined;$.fn.loadModule=function(moduleName,settings,onComplete){let inc=0;while(VHV.App.modules[parseInt(VHV.App.maxModuleId)+1000+inc]){inc++;}
let moduleId=parseInt(VHV.App.maxModuleId)+1000+inc;VHV.App.maxModuleId=moduleId;$(this).each(function(){let that=$(this),options=$.extend({},settings),swapScreen;if(VHV.app){swapScreen=$(this).parents('.swap-screen:first');if(!swapScreen.length){swapScreen=$('.swap-screen:visible');}}
VHV.Model.engine.initOptions(options,swapScreen,true);let url=VHV.buildURL({module:moduleName,moduleId:moduleId}),success=((typeof(onComplete)==='function')?function(){VHV.ExecQueue.add(function(){onComplete.call(VHV.App.modules[moduleId],moduleId);},function(){return VHV.App.modules[moduleId];});}:null);if(/&accountId=(\w+)/.test(url)){options.accountId=RegExp.$1;url=url.replace(/&accountId=(\w+)/,'');}
that.load(url,VHV.getPostParams(options),success);});return moduleId;};if(!window.console){window.console={log:function(st){}};}
if($('img[usemap]').length){VHV.load('3rdparty/jQuery/fancybox/fancybox-v2.0/jquery.fancybox.css','3rdparty/jQuery/fancybox/fancybox-v2.0/jquery.fancybox-buttons.css');VHV.load('3rdparty/jQuery/jquery.imagemapster.min.js','3rdparty/jQuery/fancybox/fancybox-v2.0/jquery.fancybox.js',function(){VHV.load('3rdparty/jQuery/fancybox/fancybox-v2.0/jquery.fancybox-buttons.js',function(){setTimeout(function(){$('img[usemap]').each(function(){$(this).mapster({fillOpacity:0.8,isSelectable:false,stroke:true,strokeWeight:1,strokeColor:'DDDDDD',scaleMap:true,showToolTip:true,clickNavigate:!!$(this).attr('data-click-navigate')});});$('img[usemap]').parent().css('max-width','100%');$(window).resize(function(){let curWidth=$(window).width(),curHeight=$(window).height(),checking=false;if(checking){return;}
checking=true;window.setTimeout(function(){let newWidth=$(window).width(),newHeight=$(window).height();if(newWidth===curWidth&&newHeight===curHeight){$('img[usemap]').each(function(){let image=$(this);image.parent().css('width','auto').css('height','auto');image.width(image.parent().width()).css('height','auto').mapster('resize',image.width(),image.height(),100);});}
checking=false;},100);});$('area:not(.no-popup)').addClass('fancybox').attr('rel','image').click(function(e){e.preventDefault();let url=$(this).attr('href');let title=$(this).attr('title');let type=$(this).attr('rel');if(type==='redirect'){location=url;}
else{$.fancybox({'title':title,'titlePosition':'inside','href':url});}});},500);});});}
(function(){if(jQuery.ajaxPrefilter){let rURL=/^([^\/]+)/,rEsc=/([-.])/,protocol=rURL.exec(document.location.href)[1].replace(rEsc,"\\$1"),rDomains={};jQuery.ajaxPrefilter(function(options){let strip=options.stripDomain,rDomain,sDomain;if(strip){rDomain=rDomains[strip];if(!rDomain){sDomain="^(?:"+protocol+")?\\/\\/"+strip.replace(rEsc,"\\$1");rDomains[strip]=rDomain=new RegExp(sDomain,"i")}
options.url=options.url.replace(rDomain,"");}});}})();jQuery.ajaxSetup({stripDomain:rootURL.replace('http://','').replace('https://','').replace(/\//g,'')});if($('.animated').length){VHV.load('3rdparty/animate.min.css');VHV.load('3rdparty/jQuery/jquery.waypoints.min.js',function(){$('.animated').each(function(){$(this).waypoint(function(){$(this.element).toggleClass($(this.element).data('animated'));},{offset:$(this).data('waypointOffset')?$(this).data('waypointOffset'):'80%'});});});}
if($('[class^="hvr-"]').length){VHV.load('3rdparty/hover-min.css');}
if($('div.fb-like,div.fb-comments,div.fb-page,div.fan-page,div.fb-comment').length){window.fbAsyncInit=function(){let appId=$('meta[property="fb:app_id"]').attr('content');FB.init({appId:appId?appId:'487170647977434',cookie:true,xfbml:true,version:'v2.8'});FB.AppEvents.logPageView();$(document).ajaxComplete(function(){try{if(window.FB)FB.XFBML.parse();if(window.gapi?.plusone)gapi.plusone.go();}catch(ex){}});};(function(d,s,id){let js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return;}
js=d.createElement(s);js.id=id;js.src="https://connect.facebook.net/"+((VHV.language==='vi')?'vi_VN':'en_US')+"/sdk.js";fjs.parentNode.insertBefore(js,fjs);}(document,'script','facebook-jssdk'));}
if($('div.g-plusone').length){window.___gcfg={lang:((VHV.language==='vi')?'vi':'en')};(function(){let po=document.createElement('script');po.type='text/javascript';po.async=true;po.src='https://apis.google.com/js/platform.js';let s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(po,s);})();}
if($('a.twitter-share-button').length){!function(d,s,id){let js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");}
$('#backtotop ').click(function(){$('html, body').animate({scrollTop:0},1000);});$(document).on('keydown','input[type=number]',function(e){if(e.which==69){return false;}});$(window).scroll(function(){if($(window).scrollTop()>0){$('#backtotop ').fadeIn();}else{$('#backtotop ').fadeOut();}
checkLazyLoad($(window));}).scroll();$('body').on('click','[role="tab"]',function(){setTimeout(function(){checkLazyLoad($(window));},100);})
document.addEventListener('scroll',function(event){let obj=$(event.target);if(obj.hasClass('lazyContainer')){checkLazyLoad(obj);}},true);setTimeout(function(){$(window).scroll();},200);setTimeout(function(){$(window).scroll();},3000);$('.lazyContainer').each(function(){checkLazyLoad($(this));});if($('#pageSectionWrapper').length){$(window).resize(function(){if($(window).width()>992){if($('#sidebarRight').width()>0){$('#sectionContainer').css({'width':$('#pageSectionWrapper').width()-$('#sidebarRight').outerWidth()-40});}}});}
if($.msie){VHV.innerText=$.browser.ie6?'nodeValue':'innerText';}
VHV.allLinks[rootURL+'3rdparty/jQuery/jquery-1.7.2.min.js']=2;VHV.allLinks[rootURL+'3rdparty/jQuery/jquery.mobile-1.2.0/jquery.mobile-1.2.0.min.js']=2;VHV.allLinks[rootURL+'VHV.js']=2;VHV.allOrderedLinks.push(rootURL+'3rdparty/jQuery/jquery-1.7.2.min.js');VHV.allOrderedLinks.push(rootURL+'3rdparty/jQuery/jquery.mobile-1.2.0/jquery.mobile-1.2.0.min.js');VHV.allOrderedLinks.push(rootURL+'VHV.js');VHV.allLinks[rootURL+'3rdparty/jQuery/jquery.cookie.js']=2;VHV.allOrderedLinks.push(rootURL+'3rdparty/jQuery/jquery.cookie.js');VHV.allLinks[rootURL+'3rdparty/jQuery/jquery.json/jquery.json.min.js']=2;VHV.allOrderedLinks.push(rootURL+'3rdparty/jQuery/jquery.json/jquery.json.min.js');VHV.allLinks[rootURL+'3rdparty/jQuery/jquery.pagination/jquery.pagination.js']=2;VHV.allOrderedLinks.push(rootURL+'3rdparty/jQuery/jquery.pagination/jquery.pagination.js');VHV.allLinks[rootURL+'Content/js/Listing.js']=2;VHV.allLinks[rootURL+'publish/js/modules/'+((VHV.language!=='vi')?VHV.language+'_':'')+'Content.Listing.js']=2;VHV.allOrderedLinks.push(rootURL+'Content/Listing.js');VHV.allOrderedLinks.push(rootURL+'publish/js/modules/'+((VHV.language!=='vi')?VHV.language+'_':'')+'Content.Listing.js');VHV.allLinks[rootURL+'Content/js/HTML.js']=2;VHV.allLinks[rootURL+'publish/js/modules/'+((VHV.language!=='vi')?VHV.language+'_':'')+'Content.HTML.js']=2;VHV.allOrderedLinks.push(rootURL+'Content/HTML.js');VHV.allOrderedLinks.push(rootURL+'publish/js/modules/'+((VHV.language!=='vi')?VHV.language+'_':'')+'Content.HTML.js');VHV.allLinks[rootURL+'Common/Input/js/Input.js']=2;VHV.allLinks[rootURL+'publish/js/modules/'+((VHV.language!=='vi')?VHV.language+'_':'')+'Common.Input.Input.js']=2;VHV.allOrderedLinks.push(rootURL+'Common/Input/js/Input.js');VHV.allOrderedLinks.push(rootURL+'publish/js/modules/'+((VHV.language!=='vi')?VHV.language+'_':'')+'Common.Input.Input.js');setTimeout(function(){let loader=jQuery('<div id="loader"><img src="'+staticURL+'App/images/loading.gif" alt="loading..." width="50" height="50"/></div>').css({position:"fixed",top:"1em",left:"1em",'z-index':10000}).appendTo("body").hide(),loaderTimeout=false,errorFunction=function(){if(loaderTimeout){clearTimeout(loaderTimeout);loaderTimeout=false;}
loader.hide();};$(document).ajaxStart(function(){if(loaderTimeout){clearTimeout(loaderTimeout);loaderTimeout=false;}
loader.show();loaderTimeout=setTimeout(function(){loader.hide();},10000);}).ajaxStop(errorFunction).ajaxError(errorFunction);},10);$('.hover-module-block').each(function(){let that=$(this),moduleDiv=that.parents('.ModuleWrapper:first');moduleDiv.hover(function(){that.stop().fadeIn();},function(){that.stop().fadeOut();});});let updateImageRatio=function(){let that=$(this),ratio=that.attr('data-size-ratio'),src=that.attr('src');if(src&&src.indexOf('images/lazyload_')===-1){if(!ratio||typeof(ratio)!=='string'||ratio.indexOf(':')===-1)ratio='1:1';ratio=ratio.split(':');let tmpImg=new Image();tmpImg.lastWidth=that.data('lastElementWidth');tmpImg.that=that;tmpImg.ratio=ratio;tmpImg.onload=imageLoaded;tmpImg.src=that.attr('src');}},imageLoaded=function(){let width=parseInt(this.that.attr('width'));if(!width)width=this.that.width();if((width>10)&&(parseInt(this.ratio[0])>0)&&(this.lastWidth!=width)){this.that.data('lastElementWidth',width);this.that.height(Math.round(Math.min((width*parseInt(this.ratio[1]))/parseInt(this.ratio[0]),1200)));}};$(window).resize(function(){if(VHV.ratioResizeTimeout){clearTimeout(VHV.ratioResizeTimeout);}
VHV.ratioResizeTimeout=setTimeout(function(){VHV.ratioResizeTimeout=false;$('.relative-height').each(updateImageRatio);},300);});$('body').on('click','a.accordion-arrow-button',function(){if($(this).attr('aria-expanded')=='true'){$(this).find('i').attr('title',"Mở rộng");$(this).parents('.panel-title:first').find('.accordion-title:first').attr('title',"Mở rộng");}else{$(this).find('i').attr('title',"Thu nhỏ");$(this).parents('.panel-title:first').find('.accordion-title:first').attr('title',"Thu nhỏ");}});setTimeout(function(){$(window).resize();},3000);setTimeout(function(){VHV.load('Common.Statistic.Client',function(){VHV.Common.Statistic.Client.request();});let cartTotalItems=$('.cart-total-items');if(cartTotalItems.length&&VHV.User&&!parseInt(VHV.User.id)){let cart=window.localStorage.getItem('vhvLocalCart'+VHV.site);if(cart){cart=JSON.parse(cart);if(cart.products){cartTotalItems.text(VHV.numberFormat(VHV.sizeof(cart.products)));}}}},1000);$(document).on('click','.block-param-input',function(){let obj=this;VHV.load('Content.Layout.BlockParamEdit',function(){return new VHV.Content.Layout.BlockParamEdit(obj);});});$(document).on('click','.bookmark-button',function(){let obj=$(this),params=obj.data(),i=obj.find('i'),bookmarkService='Member.Bookmark.',responseMessage="Yêu thích thành công",fn='add',title="Yêu thích",currentTotal=parseFloat(params['totalBookmarks']||0),newTotal=currentTotal,textTotalTag=obj.next('.text-totalLike');if(params.entityTitle){responseMessage="Yêu thích ENTITY_TITLE thành công".replace('ENTITY_TITLE',params.entityTitle);}
if(params['parentElement']&&$(obj).parents(params['parentElement']+':first').length){textTotalTag=$(obj).parents(params['parentElement']+':first').find('.text-totalLike');}
if(i.hasClass('vis')){fn='remove';title="Bỏ yêu thích";newTotal--;responseMessage="Bỏ yêu thích thành công";if(params.entityTitle){responseMessage="Bỏ yêu thích ENTITY_TITLE thành công".replace('ENTITY_TITLE',params.entityTitle);}}else{newTotal++;}
if(params.bookmarkService?.includes('.Bookmark.')){bookmarkService=params.bookmarkService;}
obj.data('totalBookmarks',newTotal).attr('data-total-bookmarks',newTotal);if(textTotalTag.length){textTotalTag.text(VHV.number(newTotal));}
VHV.Model(bookmarkService+fn)(params,function(response){response=JSON.parse(response);if(params.hasAlert&&response.status==='SUCCESS'){VHV.alert(responseMessage,{type:'success',delay:3000});}
if(response.status!=='SUCCESS'){i.toggleClass('vis').toggleClass('vi');obj.attr('title',title);obj.data('totalBookmarks',currentTotal).attr('data-total-bookmarks',currentTotal);if(textTotalTag.length){textTotalTag.text(VHV.number(currentTotal));}}else if(params.needReload||response.needReload){let m=VHV.getModule(obj);if(m){m.reload('current');}}});i.toggleClass('vis').toggleClass('vi');obj.attr('title',title);}).on('click','a.like-button[data-id]',function(){let options=$(this).data(),object=$(this);let unlike=options.unlike;if(parseInt(VHV.User.id)){if(options.id&&options.type){VHV.Model('Member.Like.like')({type:options.type,id:options.id,unlike:(unlike)?unlike:0},function(response){if((typeof(response)==='string')){response=JSON.parse(response);}
if(response.status==='SUCCESS'){let totalLikeText=options.unlike?(options.unlikeTitle||"Thích"):(options.likeTitle||"Đã thích");if(options.showTotalLike){let totalLike=response.totalLikes||0;totalLikeText=totalLike>0?VHV.number(totalLike):(options.unlikeTitle||"Thích");}
object.find('.text-totalLike').text(totalLikeText);if(options.parentTag){object.parents(options.parentTag+':first').find('.num-totalLike').html(response.symbol?response.symbol:(response.totalLikes));}
object.data('unlike',options.unlike?0:1);object[options.unlike?'addClass':'removeClass']('color-primary hasLike');}});}}else{location='/login?href='+location.href.replace(location.origin,'');}});document.body.addEventListener("focus",(event)=>{if(!window.$)return;let currDialog=$('.modal:visible:last');if(currDialog.length&&!$.contains(currDialog[0],event.target)&&$(event.target).parents('.ModuleWrapper:first').length){event.preventDefault();event.stopPropagation();$(document.activeElement).blur();$(currDialog.find('input[type!=hidden]:visible:first,select:visible:first,textarea:visible:first')[0]).focus();}},{capture:true});$(document).on('focus','[data-x-suggest]',function(){VHV.initSuggest(this,true);});$(document).on('change','input,textarea,select',function(){let groupId=$(this).data('xGroup'),that=this;if(groupId){$('input:checkbox[data-x-group="'+groupId+'"]:not([value])').each(function(){this.value=$(this).parents('[data-id]:first').data('id');});if($(this).hasClass('x-check-all')){$('input[data-x-group="'+groupId+'"][value!=""],input.x-check-all[data-x-group="'+groupId+'"]').prop('checked',$(this).prop('checked'));}
else{$('input.x-check-all[data-x-group="'+groupId+'"]').prop('checked',$('input[data-x-group="'+groupId+'"]:not(.x-check-all):not(:checked)').length?'':'checked');}}
VHV.updateDisplay();if(this.name){let $o=$(this),$m=$o.parents('form:first');if(!$m.length){$m=$(this).parents('.ModuleWrapper:first');}
let cascade=$m.find(((this.name.indexOf('[')===-1)?'[data-x-cascade*="fields['+this.name+']"],':'')+'[data-x-cascade*="'+this.name+'"]');if(cascade.length&&(!VHV.Content||!VHV.Content.Form||!VHV.Content.Form.disableCascade)){let cascadeTos=[];cascade.each(function(){cascadeTos.push(this.name);});VHV.load('Content.Form',function(){(function($m,$o,cascade,cascadeTos){VHV.ExecQueue.add(function(){VHV.Content.Form.isCascading+=cascade.length;let waitTimeout=50;cascade.each(function(){let that2=this,cascadeParams=$(this).data('xCascade').split(','),data=$(this).data('serviceData'),lastTime=$(this).data('lastCascadeTime'),time=VHV.getTime()*1000;if((!lastTime||(lastTime+500<time))&&data&&data.service&&(this.name!=that.name)){for(let i in cascadeParams){let cascadeParam=$.trim(cascadeParams[i]),p=cascadeParam.indexOf(':'),name=((p!=-1)?cascadeParam.substr(0,p):cascadeParam),code=((p!=-1)?cascadeParam.substr(p+1):name.replace('fields[','').replace(']',''));if((name!=that.name)&&((cascadeTos.indexOf(name)!==-1)||(cascadeTos.indexOf('fields['+name+']')!==-1))){VHV.Content.Form.isCascading--;return;}
if(code){if(name==that.name){data[code]=that.value;}
else{let fieldType=$m.find(((name.indexOf('[')===-1)?'[name="fields['+name+']"],':'')+'[name="'+name+'"]').attr('type');if(fieldType==='radio'||fieldType==='checkbox'){data[code]=$m.find(((name.indexOf('[')===-1)?'[name="fields['+name+']"]:checked,':'')+'[name="'+name+'"]:checked').val();}else{data[code]=$m.find(((name.indexOf('[')===-1)?'[name="fields['+name+']"],':'')+'[name="'+name+'"]').val();}}}}
$(this).data('lastCascadeTime',time);setTimeout(function(){VHV.Content.Form._cascadeUpdateInput(that2,data);setTimeout(function(){VHV.isCascading=true;$(that2).change();VHV.isCascading=false;VHV.Content.Form.isCascading--;},200);},waitTimeout);waitTimeout+=100;}else{VHV.Content.Form.isCascading--;}});},function(){return VHV.Content?.Form?.isCascading<=0;});})($m,$o,cascade,cascadeTos);});}}
if($(this).data('xService')&&!$(this).data('xSuggest')){if($(this).data('xConfirm')){let actionParams=VHV.getDoActionParams(that),data=$.extend({},$(this).data()),confirmOptions=data.xConfirmOptions,confirmNote=data.xConfirmNote,confirmLabel=data.xConfirmLabel,cancelReload=data.cancelReload,buttonClass=data.xConfirmButtonClass;if(confirmOptions&&(typeof(confirmOptions)==='string')){confirmOptions=JSON.parse((!confirmOptions.startsWith('{')?"{"+confirmOptions+"}":confirmOptions).replace(/'/g,'"').replace(/([{,])\s*(\w+)\s*:/g,'$1"$2":'));}
if(!confirmOptions){confirmOptions={};}
if(confirmLabel){confirmLabel=confirmLabel.split('|');confirmOptions.buttons={};if(confirmLabel[1]){confirmOptions.buttons.no={text:confirmLabel[1],class:'lobibox-btn lobibox-btn-no '+buttonClass};}
if(confirmLabel[0]){confirmOptions.buttons.yes={text:confirmLabel[0],class:'lobibox-btn lobibox-btn-yes '+buttonClass};}}
else{confirmOptions.buttons=['no','yes'];}
if(confirmNote){confirmOptions.confirmNote=confirmNote;}
if(cancelReload){confirmOptions.cancelReload=cancelReload;}
let popupTitle=data.title;if(!popupTitle){popupTitle=$(this).attr('title');}
let count=0;if(data.xMultiActions){let moduleId=data.moduleId?data.moduleId:0;if(!moduleId){let module=VHV.getModule(this);if(module){moduleId=module.id;}}
$('table:not(.table-fixed-column) input[data-x-group="'+moduleId+'"]:checkbox:checked:not(.x-select-all,.x-check-all)').each(function(){if(this.value!=='undefined'){count++;}});if(count===1){let title=$('input[data-x-group="'+moduleId+'"]:checkbox:checked:not(.x-select-all,.x-check-all)').data('title');if(title){if(data.xConfirm.indexOf('@title')!==-1){data.xConfirm=data.xConfirm.replace(/@count\s/g,'').replace(/\?$/,'').replace('@title',title)+'?';}else{data.xConfirm=data.xConfirm.replace(/@count\s/g,'').replace(/\?$/,'')+' '+title+'?';}}}}
VHV.confirm(popupTitle,data.xConfirm.replace(/@count\s/g,count?VHV.numberFormat(count)+' ':''),function(){VHV.doAction(actionParams);},confirmOptions);}
else{VHV.doAction(VHV.getDoActionParams(this));}
return false;}});$(document).on('click','[data-x-service],[data-x-modal]',function(){if(this.tagName==='SELECT'||(this.tagName==='INPUT'&&this.type!=='checkbox'&&this.type!=='radio'))return;let xmodal=$(this).data('xModal'),isClick=$(this).data('isClick'),that=this;if(!isClick){$(this).css('pointer-events','none');setTimeout(function(){$(that).removeAttr('style','pointer-events:inherit');},2000);}
if(xmodal){let params=VHV.getActionParams(this);params.layout=params.xModal;delete params.xModal;VHV.openModal(params,this);return false;}
else if($(this).data('xConfirm')){let that=this,data=$.extend({},$(this).data()),confirmOptions=data.xConfirmOptions,confirmLabel=data.xConfirmLabel,confirmNote=data.xConfirmNote,actionParams=VHV.getDoActionParams(that),buttonClass=data.xConfirmButtonClass;if(confirmOptions&&(typeof(confirmOptions)==='string')){confirmOptions=JSON.parse(((!confirmOptions.startsWith('{'))?"{"+confirmOptions+"}":confirmOptions).replace(/'/g,'"').replace(/([{,])\s*(\w+)\s*:/g,'$1"$2":'));}
if(!confirmOptions){confirmOptions={};}
if(confirmLabel){confirmLabel=confirmLabel.split('|');confirmOptions.buttons={};if(confirmLabel[1]){confirmOptions.buttons.no={text:confirmLabel[1],class:'lobibox-btn lobibox-btn-no '+buttonClass};}
if(confirmLabel[0]){confirmOptions.buttons.yes={text:confirmLabel[0],class:'lobibox-btn lobibox-btn-yes '+buttonClass};}}
else{confirmOptions.buttons=['no','yes'];}
if(confirmNote){confirmOptions.confirmNote=confirmNote;}
let popupTitle=data.title;if(!popupTitle){popupTitle=$(this).attr('title');}
let count=0;if(data.xMultiActions){let moduleId=data.moduleId?data.moduleId:0;if(!moduleId){let module=VHV.getModule(this);if(module){moduleId=module.id;}}
$('table:not(.table-fixed-column) input[data-x-group="'+moduleId+'"]:checkbox:checked:not(.x-select-all,.x-check-all)').each(function(){if(this.value!=='undefined'){count++;}});if(count===1){let title=$('input[data-x-group="'+moduleId+'"]:checkbox:checked:not(.x-select-all,.x-check-all)').data('title');if(title){if(data.xConfirm.indexOf('@title')!==-1){data.xConfirm=data.xConfirm.replace(/@count\s/g,'').replace(/\?$/,'').replace('@title',title)+'?';}else{data.xConfirm=data.xConfirm.replace(/@count\s/g,'').replace(/\?$/,'')+' '+title+'?';}}}}
VHV.confirm(popupTitle,data.xConfirm.replace(/@count\s/g,count?VHV.numberFormat(count)+' ':''),function(){VHV.doAction(actionParams);},confirmOptions);return false;}
else{VHV.doAction(VHV.getDoActionParams(this));return false;}});VHV.updateDisplay();}
static getModule(element){let mid=$(element).closest('.ModuleWrapper').attr('id');if(mid){return VHV.App.modules[mid.replace('module','')];}}
static initSuggest(that,autoFocus){if(!$(that).data('select2')){let hidden,value=$(that).data('value')?$(that).data('value'):that.value,placeholder=($(that).attr('placeholder')?$(that).attr('placeholder'):'');if(that.name){hidden=$('<input name="'+that.name+'" type="hidden" placeholder="">');if(value){hidden.val(value);let label=$(that).data('label');hidden.data('value',label?label:value);}
$(that).before(hidden);that.name='';}
else
if(that.previousSibling?.type==='hidden'){hidden=$(that.previousSibling);value=$(hidden).data('value')?$(hidden).data('value'):hidden.val();}
let service=$(that).attr('data-x-suggest'),params=VHV.getActionParams(that);if($(that).attr('allowNewValue')){params.createSearchChoice=function(term,data){if($(data).filter(function(){return this.text.localeCompare(term)===0;}).length===0){return{id:term,text:term};}};params.selectOnClose=true;params.tags=true;params.allowClear=true;}
if(value&&typeof(value)==='string'&&(that.multiple||$(that).data('multiple')))value=value.split(',');if(that.tagName==='INPUT'){let select=$('<select class="'+that.className+'"'+((that.multiple||$(that).data('multiple'))?' multiple':'')+'></select>');if(value){if(typeof(value)==='object'){let labels=that.value?that.value:value;if(typeof(labels)!=='object')labels=labels.split(',');for(let k in value){let option=$('<option></option>');option.attr('value',value[k]).text(labels[k]);select.append(option);}
select.find('option').attr('selected','selected');}
else{select.append($('<option selected="selected"></option>').attr('value',value).text(that.value));}}
$(that).replaceWith(select);that=select;}
params.allowClear=true;VHV.load('3rdparty/jQuery/select2-4.0.13/dist/css/select2.min.css');VHV.load('3rdparty/jQuery/select2-4.0.13/dist/js/select2.full.min.js',function(){let noResultsFunction=function(){if(VHV.language==='vi'){return"Không tìm thấy kết quả nào";}else{return"No results found";}};$(that).select2($.extend({templateResult:function(state){let html=state.html;if(!html){html='<span>'+(state.image?'<img src="'+encodeURI(state.image)+'" width="30" height="30" style="margin: 0 5px;"/>':'')+VHV.notag(state.text)+'</span>';}
return $(html);},placeholder:placeholder,ajax:{url:VHV.Model(service).url(params,true),dataType:'json',quietMillis:300,data:function(params2){params2.pageNo=params2.page||1;let extraParams=$(this).data('extraParams');if(extraParams&&(typeof(extraParams)==='object')){params2=$.extend(params2,extraParams);}
return params2;},processResults:function(data){let tmpResults=[];$.each(data,function(index,item){let image='';if(item.image){if(item.image.search(/^(http|\/|data:image)/)!==0){image='/'+((item.image.startsWith('upload/'))?'publish/thumbnail/'+VHV.site+'/30x30xdefault/':'');}
image+=item.image;}
tmpResults.push({id:item.id,text:item.label?item.label:item.title,html:(item.html?item.html:''),image:image});});return{results:tmpResults,pagination:{"more":tmpResults.length===20}};}},dropdownAutoWidth:true,tokenSeparators:[',',';'],language:{noResults:noResultsFunction,errorLoading:noResultsFunction,loadingMore:function(){if(VHV.language==='vi'){return"Xem thêm";}else{return"View more";}},searching:function(){if(VHV.language==='vi'){return"Đang tìm kiếm...";}else{return"Searching...";}}}},params));$(that).change(function(){if(hidden?.length){let value2=$(this).val()?$(this).val():'';if(typeof(value2)==='object'){value2=value2.join(',');}
hidden[0].value=value2;hidden.change();if(hidden.next().hasClass('error')){hidden.next().removeClass('error');hidden.nextAll('label.error').removeClass('error').addClass('hide').html('');hidden.parent().next('label').addClass('hide').html('');}}});if(autoFocus){setTimeout(function(){$(that).select2('open');},100);}});}}
static getActionParams(that){let thatData=$.extend({},$(that).data()),params={};for(let i in thatData){if(typeof(thatData[i])!=='object'){let j=i;for(let k in{'options':1,'filters':1}){if((i.startsWith(k))&&(i!=k)){j=i.substr(k.length);j=k+'['+j[0].toLowerCase()+j.substr(1)+']';}}
params[j]=thatData[i];}}
let m=VHV.getModule(that);if(thatData.getFilters||(thatData.xService&&(thatData.xService.indexOf('.export')!==-1||thatData.xExport))){if(m){if(m.filters&&VHV.sizeof(m.filters)){let filters=$.extend({},m.filters);for(let i2 in{groupId:1,accountId:1}){if(typeof(filters[i2])!="undefined"){delete(filters[i2]);}}
params.filters=$.extend(params.filters?params.filters:{},filters);}
if(m.orderBy&&typeof(m.orderBy)==='string'&&!params.orderBy){params.orderBy=m.orderBy;}}}
if(that.value&&that.name){let value=$(that).val()?$(that).val():'';if(typeof(value)==='object'){value=value.join(',');}
params[that.name]=value;}
if(that.tagName==='SELECT'){let currentOption=$('option[value="'+that.value+'"]',that);if(currentOption.length){let optionData=$(currentOption).data();for(let i3 in optionData){if(typeof(optionData[i3])==='object'){delete optionData[i3];}}
if(optionData){$.extend(params,optionData);}}}
if(params.xMultiActions&&m){let ids=[];$('input[data-x-group="'+m.id+'"]:checkbox:checked:not(.x-select-all,.x-check-all)').each(function(){if(this.value!=='undefined'){ids.push(this.value);}});params.ids=ids.join(',');}
return params;}
static getDoActionParams(that){let action=$(that).data('xService'),params=VHV.getActionParams(that),moduleId=$(that).parents('.ActionWrapper:first').attr('data-module-id')?$(that).parents('.ActionWrapper:first').attr('data-module-id'):$(that).parents('.ModuleWrapper:first').attr('id'),module,isMulti=params.xMultiActions;if(moduleId&&moduleId.match(/^module(\d+)$/)){moduleId=parseInt(RegExp.$1);}
if(moduleId){module=VHV.App.modules[moduleId];}
return{that:that,params:params,moduleId:moduleId,action:action,module:module,isMulti:isMulti,xExport:$(that).data('xExport'),xSuccess:$(that).data('xSuccess'),item:$(that).parents('[data-id]:first'),title:$(that).attr('title'),isA:$(that).is('a'),text:$(that).text(),reloadOtherModule:$(that).data('reloadOtherModule')||'',locationReload:!!$(that).data('locationReload'),locationReloadDelay:$(that).data('locationReloadDelay')?$(that).data('locationReloadDelay'):'',};}
static doAction(actionParams,extra,options){let action=actionParams.action,moduleId=actionParams.moduleId,module=actionParams.module,params=actionParams.params,isMulti=actionParams.isMulti;if(extra){params=$.extend(extra,params);}
if(!module||!action)return;if(module.targetForm)module=module.targetForm;let reloadDelay;if(module&&module.reloadDelay){reloadDelay=module.reloadDelay;}else{reloadDelay=module?.parent?.reloadDelay?module.parent.reloadDelay:2000;}
if(params.reloadDelay){reloadDelay=params.reloadDelay;}
if(isMulti){if(!params.ids){params.ids=[];$('input[data-x-group="'+moduleId+'"]:checkbox:checked:not(.x-select-all,.x-check-all)').each(function(){if(this.value!=='undefined'){params.ids.push(this.value);}});}
if(!params.ids.length){VHV.alert(params.message?params.message:''+"Vui lòng chọn"+'',{type:"error"});return;}
if(action.indexOf('.')!==-1&&!action.match(/[^\w.]/)){if(typeof(params.ids)!=='string'){params.ids=params.ids.join(',');}
params.doMultiActions=1;if(action.indexOf('.export')!==-1||actionParams.xExport){location=VHV.Model(action).url(params);}
else{VHV.lastResponseText='';VHV.Model(action)(params,function(response){if(response){VHV.lastResponseText=response;if(typeof(response)==='string'){response=JSON.parse(response);}
let success=true,totalSuccess=response.totalSuccess?response.totalSuccess:0,totalFail=response.totalFail?response.totalFail:0,messages={},messageText='',title='';if(response.items){for(let item2 of response.items){if(item2.status!=='SUCCESS'){success=false;totalFail++;}
else{totalSuccess++;}
if(item2.message){if(!messages[item2.message]){messages[item2.message]=[];}
messages[item2.message].push(item2.title?item2.title:'');}}}
if(success&&params.successMessage){response.message=params.successMessage;}
if(!totalSuccess&&!totalFail&&response.message){messageText=VHV.notag(response.message);success=(response.status==='SUCCESS');title=(success?"Thành công":"Thất bại");}
else{messageText='<div style="max-height:300px; overflow:auto;">';title=totalSuccess+' '+"Thành công"+(totalFail?', '+totalFail+' '+"Thất bại":'');if(VHV.sizeof(messages)){for(let i3 in messages){messageText+=i3+': '+VHV.notag(messages[i3][0]?messages[i3].join(', '):messages[i3].length)+'<br>';}}
else{messageText+=VHV.notag(title);}
messageText+='</div>';}
if(!response.notAlert&&messageText){VHV.alert(messageText,{title:title,isHTML:1,type:success?'success':'error',delay:3000});}
if(totalSuccess){setTimeout(function(){module.reload('current');if(actionParams.xSuccess)(function(){eval(actionParams.xSuccess);}).call(actionParams.that);if(actionParams.reloadOtherModule&&VHV.App.modules[actionParams.reloadOtherModule]){VHV.App.modules[actionParams.reloadOtherModule].reload();}},reloadDelay);}}});}}
else if(!action.match(/[^\w]/)){if(typeof(module[action])==='function'){for(let i in params.ids){params.id=params.ids[i];module[action](params,$(actionParams.that));}
if(actionParams.xSuccess)(function(){eval(actionParams.xSuccess);}).call(actionParams.that);}}
else{try{eval(action);}
catch(e){}}
return;}
if(typeof(params.id)==='undefined'){params.itemId='';let item=actionParams.item;if(module.$().has(item)){let itemData=item.data();if(itemData){for(let i2 in itemData){if(typeof(itemData[i2])!=='object'){params[i2]=itemData[i2];}}}}}
else if(!params.itemId){params.itemId=params.id;}
if(params.xPopup){params.xPopupTitle=params.title;if(!params.xPopupTitle){params.xPopupTitle=actionParams.title;if(!params.xPopupTitle&&actionParams.isA){params.xPopupTitle=$.trim(actionParams.text);}}}
if(action.indexOf('.')!==-1&&!action.match(/[^\w.]/)){if(action.indexOf('.export')!==-1||actionParams.xExport){location=VHV.Model(action).url(params);}
else{VHV.lastResponseText='';VHV.Model(action)(params,function(response){if(response){VHV.lastResponseText=response;try{if(typeof(response)==='string'){response=JSON.parse(response);}}
catch(e){}
let alertOptions=response.alert?response.alert:{};if(response.status==='SUCCESS'){if(params.successMessage){response.message=params.successMessage;}
alertOptions.type='success';if(!response.notAlert&&response.message){if(response.message==="Xóa thành công"&&params.xConfirm&&(params.xConfirm.match(/^Bạn có chắc chắn muốn xóa ([^?]+)\?$/)||params.xConfirm.match(/^Are you sure to delete ([^?]+)\?$/))){response.message=sprintf("Xóa %s thành công",RegExp.$1);}
VHV.alert(response.message,alertOptions);}
if(actionParams.locationReload){setTimeout(function(){location.reload();},actionParams.locationReloadDelay?actionParams.locationReloadDelay:2000);}else{setTimeout(function(){if((params['xServiceReload']!=='0')&&(params['xServiceReload']!==0)){module.reload('current');}
if(params['xSuccess'])(function(){eval(params['xSuccess']);}).call(actionParams.that);},((params['xServiceReload']!=='0')&&(params['xServiceReload']!==0)&&reloadDelay)?parseInt(reloadDelay):100);if(actionParams.reloadOtherModule&&VHV.App.modules[actionParams.reloadOtherModule]){VHV.App.modules[actionParams.reloadOtherModule].reload();}}}
else{alertOptions.type='error';VHV.alert(response.message,alertOptions);}}});}}
else if(!action.match(/[^\w]/)){if(typeof(module[action])==='function'){module[action](params,$(actionParams.that));if(actionParams.xSuccess)(function(){eval(actionParams.xSuccess);}).call(actionParams.that);if(actionParams.locationReload){setTimeout(function(){location.reload();},actionParams.locationReloadDelay?actionParams.locationReloadDelay:2000);}}}
else{try{eval(action);}
catch(e){}}}
static isInherited(childName,parentName){let childInstance,parentInstance;try{eval('childInstance = VHV.'+childName+';');}
catch(e){return false;}
try{eval('parentInstance = VHV.'+parentName+';');}
catch(e){return false;}
if(childInstance&&parentInstance){while(childInstance.parentClass){if(childInstance.parentClass===parentInstance){return true;}
childInstance=childInstance.parentClass;}
return false;}}
static elem(id){let elem=VHV.elems[id];if(!elem){VHV.elems[id]=document.getElementById(id);return VHV.elems[id];}
return elem;}
static addToCart(params,redirect){if(typeof(params)==='string'){params={'productId':params};}
VHV.load('Ecommerce.Home.Cart.Cart',function(){if(redirect){params.redirect=true;}
VHV.Ecommerce.Home.Cart.Cart.prototype.addProduct.call(this,params);});}
static updateCartInfo(isOldVersion){VHV.Model('Ecommerce.Home.Cart.Cart.count')({},function(response){let totalItems=response;$('.cart-total-items').each(function(){$(this).text(VHV.numberFormat(totalItems));});});}
static sessionExpired(message){VHV.alert(message||"Phiên đăng nhập của bạn đã hết. Vui lòng đăng nhập lại.",{type:'error',delay:2000});setTimeout(function(){window.location='/login';},1000);}
static textToSpeech(text,audio){if(!audio){audio=$('#hiddenAudio');if(!audio.length){audio=$('<div style="height:0;overflow:hidden;"><audio id="hiddenAudio" crossOrigin="anonymous"></audio></div>');audio.appendTo(document.body);audio=audio.find('audio');}}
audio=$(audio)[0];text=unescape(text);let i=0,f=function(){if(i<text.length){let p=text.indexOf(',',i+50);for(let j in{'.':1,':':1,'(':1,')':1,'"':1,' ':1}){if((p>i+100)||(p===-1))p=text.indexOf(j,i+50);else break;}
if(p===-1){p=Math.min(i+100,text.length);}
audio.src='https://coquan.vn/readAloud.php?q='+encodeURIComponent(text.substr(i,p-i));i=p+1;audio.play();}};f();audio.addEventListener('ended',f);audio.addEventListener('error',f);}}
function checkLazyLoad(obj){let x,y,w=obj.width(),h=obj.height(),images,inWindow=$.isWindow(obj[0]);if(inWindow){images=$('img.lazy');x=obj.scrollLeft();y=obj.scrollTop();}
else{let offset1=obj.offset();images=obj.find('img.lazy');x=offset1.left;y=offset1.top;}
images.each(function(){let elem=$(this),data=elem.data(),org=data.original,width=$(window).width();if(width<768&&data.originalXs){org=data.originalXs;}
else if(width<992&&data.originalSm){org=data.originalSm;}
else if(width<1200&&data.originalMd){org=data.originalMd;}
else if(width>=1200&&data.originalLg){org=data.originalLg;}
if(inWindow&&elem.parents('.lazyContainer').length){return;}
if(org){let t=200,offset=elem.offset(),ew=elem.width(),eh=elem.height();if(!(offset.top===0&&offset.left===0&&ew<=1&&eh<=1)&&((offset.top+eh+t>=y&&offset.top-t<=y+h)||(offset.top+t>=y&&offset.top-t<=y+h))&&((offset.left+ew+t>=x&&offset.left+ew-t<=x+w)||(offset.left+t>=x&&offset.left-t<=x+w))){elem.attr('src',org).removeClass('lazy');}}});};VHV.ExecQueue = {
	queue:[],
		isRunning:false,
		lastTime:0,
		interval:false,
		run:function()
	{
		if(!this.interval)
		{
			this.interval = setInterval(this.intervalFunction, 50);
		}
	},
	intervalFunction: function(){
		let that = VHV.ExecQueue;
		if(!that.isRunning)
		{
			that.isRunning = true;
			for(let queueItem of that.queue)
			{
				try{
					if((!queueItem.isCalled) && queueItem.condition.call(queueItem.context))
					{
						queueItem.isCalled = true;
						queueItem.callback.call(queueItem.context);
					}
				}
				catch(e)
				{
				}
			}
			let i = 0;
			while(i < that.queue.length)
			{
				if(that.queue[i].isCalled)
				{
					that.queue.splice(i, 1);
				}
				else
				{
					i ++;
				}
			}
			if(that.queue.length === 0)
			{
				if(!that.lastTime){
					that.lastTime = new Date().getTime();
				}
				else if(new Date().getTime() - that.lastTime > 10000) {
					clearInterval(that.interval);
					that.interval = false;
					that.lastTime = 0;
				}
			}
			that.isRunning = false;
		}
	},
	add:function(callback, condition, context, data)
	{
		if(condition.call(context))
		{
			callback.call(context);
		}
		else
		{
			this.lastTime = 0;
			this.queue.push($.extend({
				callback : callback,
				condition : condition,
				context:context,
				isCalled : false
			}, data));
			if(!this.interval)
			{
				this.run();
			}
		}
	}
}
Object.assign(VHV, {
    prompt: function (title, message, callback, options) {
        if ($.fn.button) {
            VHV.load('3rdparty/jQuery/lobibox/css/lobibox.min.css');
            VHV.load('3rdparty/jQuery/lobibox/js/lobibox.min.js', function () {
                if (!options) options = {};
                options.title = title ? title : '' + "Xác nhận" + '';
                options.callback = function (obj, button) {
                    if (button === 'ok') {
                        callback.call(obj, $(obj.$input).val());
                    }
                }
                if (!options.showClass) {
                    options.showClass = 'fadeInDown';
                }
                if (!options.hideClass) {
                    options.hideClass = 'fadeUpDown';
                }
                if (typeof (options.sound) === 'undefined') {
                    options.sound = false;
                }
                Lobibox.prompt(message ? message : '', options);
                setTimeout(function () {
                    $(window).resize();
                }, 200);
            });
        } else {
            let w = window, value = w.prompt(message ? message : title);
            if (value) {
                callback.call(this, value);
            }
        }
    },
    confirm: function (title, message, callback, options) {
        title = title ? VHV.notag(title) : '';
        message = message ? VHV.notag(message) : '';
        if (navigator.notification?.confirm) {
            let label = (VHV.language === 'vi') ? 'Đồng ý,Hủy bỏ' : "OK,Hủy bỏ";
            if (options && options.buttons) {
                label = ((options.buttons.yes && options.buttons.yes.text) ? options.buttons.yes.text : "Đồng ý") + ','
                    + ((options.buttons.no && options.buttons.no.text) ? options.buttons.no.text : "Hủy bỏ");
            }
            navigator.notification.confirm(message, function (button) {
                if (button == 1) {
                    callback.call(this, button);
                }
            }, title ? title : "Xác nhận", label);
            return;
        }
        if ($.fn.button) {
            VHV.load('3rdparty/jQuery/lobibox/css/lobibox.min.css');
            VHV.load('3rdparty/jQuery/lobibox/js/lobibox.min.js', function () {
                if (VHV.language !== 'vi') {
                    Lobibox.base.OPTIONS.buttons.ok.text = "  OK  ";
                    Lobibox.base.OPTIONS.buttons.cancel.text = "Hủy bỏ";
                    Lobibox.base.OPTIONS.buttons.yes.text = "  Có  ";
                    Lobibox.base.OPTIONS.buttons.no.text = "  không  ";
                }
                if (typeof (callback) === 'object') {
                    options = callback;
                }
                if (!options) {
                    options = {};
                }
                options.msg = message ? message : '' + "Bạn có chắc chắn?";
                options.title = title ? title : '' + "Xác nhận" + '';
                if (!options.callback) {
                    options.callback = function (obj, answer) {
                        if (answer === 'yes') {
                            callback.call(this, obj);
                        } else if (options.onCancel) {
                            options.onCancel.call(this, obj);
                        } else if (answer === 'no' && options.cancelReload) {
                            VHV.App.modules[options.cancelReload].reload();
                        }
                    };
                }
                if (!options.showClass) {
                    options.showClass = 'fadeInDown';
                }
                if (!options.hideClass) {
                    options.hideClass = 'fadeUpDown';
                }
                if (typeof (options.sound) === 'undefined') {
                    options.sound = false;
                }
                if (options.confirmNote) {
                    if (!options.iconClass) {
                        options.iconClass = 'vi vi-alert-triangle';
                    }
                    options.msg += '<div class="lobibox-confirm-note"><strong>' + "Lưu ý" + ': </strong>' + VHV.notag(options.confirmNote) + '</div>';
                    if (!options.hasOwnProperty('closeOnEsc')) {
                        options.closeOnEsc = false;
                    }
                }
                Lobibox.confirm(options);
                $('.lobibox-confirm .btn-close').attr("title", "Đóng");
                setTimeout(function () {
                    $('.lobibox-btn-no:visible').focus();
                }, 100);
            });
        } else {
            let f = confirm;
            if (f.call(window, message ? VHV.notag(message) : VHV.notag(title))) {
                callback.call(this);
            }
        }
    },
    alert: function (message, options) {
        if (window.plugins?.toast) {
            if (!options) {
                options = {};
            }
            let m = (VHV.notag(message ? message : (options.content || options.title)) + '').replace(/<br>/g, "\n");
            if (m.indexOf('<') !== -1 && m.indexOf('>') !== -1) {
                m = $("<div/>").html(m).text();
            }
            let opts = {
                message: m,
                duration: options.delay ? options.delay : "short",
                position: options.position ? options.position : "top",
                styling: {
                    opacity: 0.8,
                    backgroundColor: '#333333',
                    textColor: '#FFFFFF',
                    textSize: 13,
                    cornerRadius: 20,
                    horizontalPadding: 20,
                    verticalPadding: 16
                }
            };
            if (options.type) {
                switch (options.type) {
                    case 'success':
                        opts.styling.backgroundColor = '#537d64';
                        break;
                    case 'warning':
                        opts.styling.backgroundColor = '#ffc439';
                        break;
                    case 'error':
                        opts.styling.backgroundColor = '#e13a36';
                        break;
                    default:
                        break;
                }
            }
            window.plugins.toast.showWithOptions(opts);
            return;
        }
        if (navigator.notification && window.Notification) {
            return new Notification((options && options.title) ? options.title : 'Notification', {
                body: message ? message : VHV.notag((options.content || options.title))
            });
        }
        if ($.fn.button) {
            VHV.load('3rdparty/jQuery/lobibox/css/lobibox.min.css');
            VHV.load('3rdparty/jQuery/lobibox/js/lobibox.min.js', function () {
                if (!options) options = {
                    closeOnClick: true,
                    closable: true,
                };
                if (!options.title) {
                    switch (options.type) {
                        case 'success':
                            options.title = '' + "Thành công" + '';
                            break;
                        case 'warning':
                            options.title = '' + "Cảnh báo" + '';
                            break;
                        case 'error':
                            options.title = '' + "Có lỗi" + '';
                            break;
                        default:
                            options.title = '' + "Thông báo" + '';
                            break;
                    }
                }
                if (!options.msg) {
                    options.msg = message ? message : (options.content || options.title);
                    if (!options.isHTML) {
                        options.msg = VHV.notag(options.msg);
                    }
                }
                if (!options.showClass) {
                    options.showClass = 'fadeInDown';
                }
                if (!options.hideClass) {
                    options.hideClass = 'fadeUpDown';
                }
                if (!options.delay && (!options.type || (options.type === 'success'))) {
                    options.delay = 1500;
                }
                if (!options.position) {
                    options.position = 'top right';
                }
                if (typeof (options.sound) === 'undefined') {
                    options.sound = false;
                }
                if (options.msg.length > 100 && !options.width) {
                    options.width = 500;
                    if (options.msg.length > 600) {
                        options.messageHeight = 300;
                    } else if (options.msg.length > 300) {
                        options.messageHeight = 200;
                    }
                }
                Lobibox[(options?.messageType) ? options.messageType : 'notify'](options.type ? options.type : 'info', options);
            });
        } else {
            VHV.load('3rdparty/jQuery/jGrowl/jquery.jgrowl.css');
            VHV.load('3rdparty/jQuery/jGrowl/jquery.jgrowl_minimized.js', function () {
                if (!options) options = {};
                if (VHV.language === 'vi') {
                    options.closerTemplate = '<div>[ ' + "Đóng lại" + ' ]</div>';
                }
                $.jGrowl(message, options);
            });
        }
    },
    dialog: function (moduleName, data, options, onClose, onOpen) {
        let _default = {
            title: '',
            onClose: '',
            onOpen: '',
            height: 200,
            width: 960,
            zIndex: 2000
        };
        if (moduleName.indexOf('<') !== -1) {
            options = data ? data : {};
        }
        if (typeof (options) === 'function') {
            options = {
                success: options
            }
        }
        if (typeof (options) !== 'undefined') {
            options = $.extend(_default, options);
        } else {
            options = _default;
        }
        if (typeof (onClose) === 'function') {
            options.onClose = onClose;
        }
        if (typeof (onOpen) === 'function') {
            options.onOpen = onOpen;
        }
        let div;
        let inc = 0;
        while (VHV.App.modules[parseInt(VHV.App.maxModuleId) + 10 + inc]) {
            inc++;
        }
        let moduleId = parseInt(VHV.App.maxModuleId) + 10 + inc, bodyDiv = null;
        if (options.isPopup) {
            div = $('<div><a id="animatedModalButton' + moduleId + '" style="display:none" href="#animatedModal' + moduleId + '"></a><div id="animatedModal' + moduleId + '"><div style="padding:5px;clear:both;background-color:var(--brand-primary); height:62px;"><div style="float:left;font-size: 18px;line-height: 50px;color: white;">' + (options.title ? VHV.notag(options.title) : '') + '</div><div class="close-animatedModal close-animatedModal' + moduleId + '" style="float:right"><img class="closebt" src="/3rdparty/jQuery/animatedModal/closebt.svg" alt="' + "  Hủy  " + '"></div></div><div class="animatedModal-content" style="background-color:white; clear:both; padding: 5px;"></div></div></div>');
            $('body').append(div);
            VHV.load('3rdparty/jQuery/animatedModal/animate.min.css');
            VHV.load('3rdparty/jQuery/animatedModal/animatedModal.min.js', function () {

                $('div.modal').css('visibility', 'hidden');
                $('#animatedModalButton' + moduleId).animatedModal({
                    modalTarget: 'animatedModal' + moduleId,
                    color: '#FFF',
                    animatedIn: 'slideInUp',
                    animatedOut: 'slideOutDown',
                    afterClose: function () {
                        $('#animatedModalButton' + moduleId).parent().remove();
                        if (typeof (options.onClose) === 'function') {
                            options.onClose.call(div);
                        }
                        if (moduleId) {
                            VHV.App.removeModule(moduleId);
                        }
                    },
                    beforeClose: function () {
                        $('div.modal').css('visibility', 'inherit');
                    }
                });
                $('#animatedModalButton' + moduleId).click();
                div = $('#animatedModal' + moduleId + ' .animatedModal-content');
                if (moduleName.indexOf('<') !== -1) {
                    div.html(moduleName);
                } else {
                    let mId2 = div.loadModule(moduleName, data, function () {
                        if (!options.title) {
                            $('.ui-dialog-title', div.parent().parent()).html($('.frontEndForm h2:first').html());
                            $('.frontEndForm h2:first').remove();
                        }
                        if (options.success) {
                            options.success.call(VHV.App.modules[mId2]);
                        }
                        let submitButton = $('#animatedModal' + moduleId + ' input[type=submit]');
                        if (submitButton.length) {
                            $('#animatedModal' + moduleId + ' div.close-animatedModal').after('<div class="save-animatedModal save-animatedModal' + moduleId + '" style="float:right"><img class="savebt" src="/3rdparty/jQuery/animatedModal/savebt.svg" alt="Lưu lại" width="52" height="52" style="margin-right:5px;" onclick="$(\'#animatedModal' + moduleId + ' input[type=submit]\').click();"></div>');
                        }
                    });
                }
                if (typeof (options.onOpen) === 'function') {
                    setTimeout(function () {
                        options.onOpen.call(div);
                    }, 1);
                }
            });
        } else if ($.fn.modal) {
            div = $('<div class="modal fade" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog '
                + (options.modalClass ? options.modalClass : 'modal-lg') + '" style="width:' + (options.width ? options.width + 'px' : '900px')
                + '; height: ' + (options.height ? options.height + 'px' : '400px') + '; z-index: ' + (options.zIndex ? options.zIndex : '2700')
                + '"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></span></button><h4 class="modal-title">'
                + (options.title ? VHV.notag(options.title) : '' + "Hộp thoại" + '') + '</h4></div><div class="modal-body"></div>'
                + (!options.hideFooter ? '<div class="modal-footer"><button type="button" class="btn btn-default '
                    + (options.btnCancel ? VHV.notag(options.btnCancel) : 'btn-cancel') + '" data-dismiss="modal">' + "&nbsp;&nbsp;&nbsp;Hủy bỏ&nbsp;&nbsp;&nbsp;" + '</button></div></div>' : ''));
            $('body').append(div);
            bodyDiv = div.find('.modal-body:first');
            if (options.keepModal) {
                div.on("hidden.bs.modal", function () {
                    $('body').addClass('modal-open');
                });
            }
            if (moduleName.indexOf('<') !== -1) {
                bodyDiv.html(moduleName);
                div.modal(options);
                if (typeof (options.onOpen) === 'function') {
                    setTimeout(function () {
                        options.onOpen.call(div);
                    }, 1);
                }
            } else {
                let mId = bodyDiv.loadModule(moduleName, data, function () {
                    if (!options.title) {
                        $('.modal-title', div).html('<i class="vi vi-setting"></i>&nbsp;' + VHV.notag($('.frontEndForm h2:first, h2.formSummaryTitle:first').html()));
                    }
                    $('.frontEndForm form > h2:first, h2.formSummaryTitle:first', bodyDiv).remove();
                    if ($('input:submit', div).length > 0) {
                        $('input:submit', div).hide();
                        $('.modal-footer', div).append('<button type="button" class="btn btn-success" onclick="VHV.App.modules[' + mId + '].submit();">' + ($('input:submit:first', div).val() ? VHV.notag($('input:submit:first', div).val()) : 'Lưu lại') + '</button>');
                    }
                    if (mId && VHV.App.modules[mId]) {
                        VHV.App.modules[mId].dialog = div;
                    }
                    div.modal(options);
                    if (options.success) {
                        options.success.call(VHV.App.modules[mId]);
                    }
                });
            }
        } else {
            div = $('<div></div>');
            $('body').append(div);
            VHV.load('3rdparty/jQuery/jqueryui/themes/smoothness/jquery-ui.css');
            VHV.load('3rdparty/jQuery/jqueryui/jquery-ui.min.js', function () {

                div.dialog(options);
                if (moduleName.indexOf('<') !== -1) {
                    div.html(moduleName);
                    options = data;
                } else {

                    moduleId = div.loadModule(moduleName, data, function () {
                        if (!options.title) {
                            $('.ui-dialog-title', div.parent().parent()).html($('.frontEndForm h2:first').html());
                            $('.frontEndForm h2:first').remove();
                        }
                        if (moduleId && VHV.App.modules[moduleId]) {
                            VHV.App.modules[moduleId].dialog = div;
                        }
                        if (options.success) {
                            options.success.call(VHV.App.modules[moduleId]);
                        }
                    });

                }
                if (typeof (options.onOpen) === 'function') {
                    setTimeout(function () {
                        options.onOpen.call(div);
                    }, 1);
                }
                div.bind('dialogclose', function () {
                    if (typeof (options.onClose) === 'function') {
                        options.onClose.call(div);
                    }
                    if (moduleId) {
                        VHV.App.removeModule(moduleId);
                    }
                });
            });
        }
        if (typeof (onCLose) === 'object' && typeof (onClose.onOpen) === 'function') {
            onClose.onOpen.call(this);
        }
        return div;
    },
    popup: function (moduleName, data, options, onClose, onOpen) {
        if (typeof (options) === 'function') {
            options = {
                success: options
            }
        }
        if (!options) {
            options = {};
        }
        options.isPopup = 1;
        return VHV.dialog(moduleName, data, options, onClose, onOpen);
    },
    openModal: function (params, obj) {
        let modal = obj ? $(obj).data('xModalObject') : false;
        if (params.require) {
            let msg = eval(params.require);//NOSONAR
            if (msg) {
                VHV.alert(msg);
                return;
            }
            delete params.require;
        }
        if (!params.gridModuleParentId && obj) {
            params.gridModuleParentId = $(obj).parents('.ModuleWrapper:first').attr('id').replace('module', '');
        }
        if (!modal) {
            let title = params.modalTitle ? params.modalTitle : (params.title ? params.title : $(obj).attr('title')),
                modalFooter = '<div class="modal-footer"></div>';
            modal = $('<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"><div class="modal-dialog' + (params.modalClass ? ' ' + params.modalClass : '')
                + '" role="document"><div class="modal-content">' + (params.modalHideHeader ? '' :
                    '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close" title="' + "Đóng" + '">'
                    + '<span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">'
                    + '<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5'
                    + ' 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></span></button>' + (title ? '<h4 class="modal-title">'
                        + VHV.notag(title) + '</h4>' : '') + '</div>') + '<div class="modal-body"></div>' + (params.modalFooter ? modalFooter : '') + '</div></div></div>');
            if (params.keepModal) {
                modal.on("hidden.bs.modal", function () {
                    $('body').addClass('modal-open');
                });
            }
            if (obj) {
                $(obj).data('xModalObject', modal);
            }
            modal.find('.modal-body:first').loadModule('Content.Form', params);
            modal.modal({
                backdrop: params.backdrop ? params.backdrop : 'static',
                keyboard: !!params.allowEsc
            });
        } else {
            modal.find('.modal-body:first').loadModule('Content.Form', params);
            modal.modal('toggle');
        }
        if (typeof (params.allowEsc) === 'undefined') {
            let t = 0, f = function () {
                if (!modal.find('.modal-body:first').is(':empty')) {
                    if (!modal.find('form').length) {
                        let md = modal.data('bs.modal');
                        if (md) {
                            md.options.keyboard = true;
                            md.options.backdrop = true;
                            md.escape();
                        }
                    }
                } else if (t++ < 3) {
                    setTimeout(f, 1000);
                }
            };
            setTimeout(f, 1000);
        }
    }
});
VHV.App = class {
	static modules = {}
	static currentPage = false
	static maxModuleId = 0
	static currentModule = undefined
	static isChild (childId, parentId) {
		while(childId != -1)
		{
			if(childId == parentId)
			{
				return true;
			}
			if(VHV.App.modules[childId] && VHV.App.modules[childId].parent)
			{
				childId = VHV.App.modules[childId].parent.id;
			}
			else
			{
				return false;
			}
		}
		return false;
	}
	static removeModule (id) {
		if(this.modules[id])
		{
			for(let i in this.modules)
			{
				if(this.modules[i] && this.modules[i].parent && this.modules[i].parent.id == id)
				{
					this.removeModule(this.modules[i].id);
				}
			}
			if(this.modules[id].destructor)
			{
				this.modules[id].destructor();
			}
			delete this.modules[id];
		}
	}
}
Object.assign(Date.prototype, {
	format: function (format) {
		let returnStr = '';
		let replace = Date.replaceChars;
		for (let i = 0; i < format.length; i++) {
			let curChar = format.charAt(i);
			if (replace[curChar]) {
				returnStr += replace[curChar].call(this);
			} else {
				returnStr += curChar;
			}
		}
		return returnStr;
	},
	getUTCTime: function () {
		return this.getTime() - 60000 * Date.getTimezoneOffset();
	}
});
Object.assign(Date, {
	getTimezoneOffset: function() {
		if (!this.defaultTimezoneOffset) {
			this.defaultTimezoneOffset = (new Date(VHV.serverTime * 1000)).getTimezoneOffset();
		}
		return this.defaultTimezoneOffset;
	},
	replaceChars: {
		shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		longMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		longDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		d: function () {
			return (this.getDate() < 10 ? '0' : '') + this.getDate();
		},
		D: function () {
			return Date.replaceChars.shortDays[this.getDay()];
		},
		j: function () {
			return this.getDate();
		},
		l: function () {
			return Date.replaceChars.longDays[this.getDay()];
		},
		N: function () {
			return this.getDay() + 1;
		},
		S: function () {
			if (this.getDate() % 10 === 1 && this.getDate() !== 11) {
				return 'st';
			}
			if (this.getDate() % 10 === 2 && this.getDate() !== 12) {
				return 'nd';
			}
			return this.getDate() % 10 === 3 && this.getDate() !== 13 ? 'rd' : 'th';
		},
		w: function () {
			return Date.replaceChars.shortDays[this.getDay()];
		},
		z: function () {
			return "Not Yet Supported";
		},
		W: function () {
			return "Not Yet Supported";
		},
		F: function () {
			return Date.replaceChars.longMonths[this.getMonth()];
		},
		m: function () {
			return (this.getMonth() < 9 ? '0' : '') + (this.getMonth() + 1);
		},
		M: function () {
			return Date.replaceChars.shortMonths[this.getMonth()];
		},
		n: function () {
			return this.getMonth() + 1;
		},
		t: function () {
			return "Not Yet Supported";
		},
		L: function () {
			return (((this.getFullYear() % 4 === 0) && (this.getFullYear() % 100 !== 0)) || (this.getFullYear() % 400 === 0)) ? '1' : '0';
		},
		o: function () {
			return "Not Supported";
		},
		Y: function () {
			return this.getFullYear();
		},
		y: function () {
			return ('' + this.getFullYear()).substr(2);
		},
		a: function () {
			return this.getHours() < 12 ? 'am' : 'pm';
		},
		A: function () {
			return this.getHours() < 12 ? 'AM' : 'PM';
		},
		B: function () {
			return "Not Yet Supported";
		},
		g: function () {
			return this.getHours() % 12 || 12;
		},
		G: function () {
			return this.getHours();
		},
		h: function () {
			return ((this.getHours() % 12 || 12) < 10 ? '0' : '') + (this.getHours() % 12 || 12);
		},
		H: function () {
			return (this.getHours() < 10 ? '0' : '') + this.getHours();
		},
		i: function () {
			return (this.getMinutes() < 10 ? '0' : '') + this.getMinutes();
		},
		s: function () {
			return (this.getSeconds() < 10 ? '0' : '') + this.getSeconds();
		},
		e: function () {
			return "Not Yet Supported";
		},
		I: function () {
			return "Not Supported";
		},
		O: function () {
			return (-this.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(this.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(this.getTimezoneOffset() / 60)) + '00';
		},
		P: function () {
			return (-this.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(this.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(this.getTimezoneOffset() / 60)) + ':' + (Math.abs(this.getTimezoneOffset() % 60) < 10 ? '0' : '') + (Math.abs(this.getTimezoneOffset() % 60));
		},
		T: function () {
			let m = this.getMonth();
			this.setMonth(0);
			let result = this.toTimeString().replace(/ \(?([^)]+)\)?$/, '$1');//NOSONAR
			this.setMonth(m);
			return result;
		},
		Z: function () {
			return -this.getTimezoneOffset() * 60;
		},
		c: function () {
			return this.format("Y-m-d") + "T" + this.format("H:i:sP");
		},
		r: function () {
			return this.toString();
		},
		U: function () {
			return this.getTime() / 1000;
		}
	}
});
Object.assign(VHV, {
	localTime: Math.round(new Date().getTime()/1000),
	getTime: function () {
		return Math.round(new Date().getTime()/1000)-VHV.localTime+VHV.serverTime;
	}
});
Object.assign(String.prototype, {
	ucfirst: function () {
		let st = this.toString();
		if (st.length > 0) {
			return st.charAt(0).toUpperCase() + st.substr(1).toLowerCase();
		} else {
			return '';
		}
	},
	ucwords: function () {
		let st = this.toString().replace(/_/g, ' ');
		let sts = st.split(' ');
		for (let i = 0; i < sts.length; i++) {
			sts[i] = sts[i].ucfirst();
		}
		return sts.join('');
	}
});
function decode64(input) {
	if(!input) return '';
	let keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	let output = "";
	let chr1, chr2, chr3 = "";
	let enc1, enc2, enc3, enc4 = "";
	let i = 0;
	input = input.replace(/[^A-Za-z0-9+\/=]/g, "");
	do {
		enc1 = keyStr.indexOf(input.charAt(i++));
		enc2 = keyStr.indexOf(input.charAt(i++));
		enc3 = keyStr.indexOf(input.charAt(i++));
		enc4 = keyStr.indexOf(input.charAt(i++));
		chr1 = (enc1 << 2) | (enc2 >> 4);
		chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
		chr3 = ((enc3 & 3) << 6) | enc4;
		output = output + String.fromCharCode(chr1);
		if (enc3 != 64) {
			output = output + String.fromCharCode(chr2);
		}
		if (enc4 != 64) {
			output = output + String.fromCharCode(chr3);
		}
	} while (i < input.length);
	return unescape(output);
}
function sprintf() {
	let arr = Array.prototype.slice.call(arguments, 1), str = arguments[0], i = -1;
	let regex = /%(-)?(0?\d+)?([.]\d+)?(#\d+)?([scfpexd%])/g;
	return str.replace(regex, function (exp, p0, p1, p2, p3, p4) {
		if (exp==='%%') return '%';
		if (arr[++i]===undefined) return undefined;
		exp  = p2 ? parseInt(p2.substr(1)) : undefined;
		let base = p3 ? parseInt(p3.substr(1)) : undefined;
		let val;
		switch (p4) {
			case 's': val = arr[i]; break;
			case 'c': val = arr[i][0]; break;
			case 'f': val = parseFloat(arr[i]).toFixed(exp); break;
			case 'p': val = parseFloat(arr[i]).toPrecision(exp); break;
			case 'e': val = parseFloat(arr[i]).toExponential(exp); break;
			case 'x': val = parseInt(arr[i]).toString(base?base:16); break;
			case 'd': val = parseFloat(parseInt(arr[i], base?base:10).toPrecision(exp)).toFixed(0); break;
		}
		val = typeof(val)=='object' ? JSON.stringify(val) : val.toString(base);
		let sz = parseInt(p1);
		let ch = p1?.[0]==='0' ? '0' : ' ';
		while (val.length<sz) val = p0 !== undefined ? val+ch : ch+val;
		return val;
	});
}
Object.assign(VHV, {
	buildURL: function(options, urlMode){
		let url = (VHV.domainRoot?VHV.domainRoot:VHV.staticURL)+'?', hasPortal = false;
		for(let i in options)
		{
			if(i === 'site')
			{
				hasPortal = true;
			}
			url += '&'+i+'='+encodeURIComponent(options[i]);
		}
		if(!hasPortal)
		{
			url += '&site='+VHV.App.site;
		}
		if(VHV.request('colomboDebug2'))
		{
			url += '&colomboDebug2=1';
		}
		return url;
	},
	notag: function (value) {
		if(value && typeof(value) === 'string') {
			value = value.replace(/&/g, '&amp;').replace(/'/g,'&#x27;')
				.replace(/"/g, '&quot;').replace(/</g, '&lt;')
				.replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\[\[b]]/g, '<b>').replace(/\[\[&#x2F;b]]/g, '</b>');
		}
		return value;
	},
	getComponentURL: function (url) {
		let values = {name: url, path : '', type : ''};
		if((url.indexOf('http://') !== -1) || (url.indexOf('https://') !== -1))
		{
			values.path = url;
		}
		else if(url.indexOf('3rdparty') !== -1 || url.indexOf('languages') !== -1 || url.indexOf('.js') !== -1 || url.indexOf('.css') !== -1)
		{
			values.path = ((url.indexOf(staticURL)!==0)?rootURL:'')+url;
			values.type = '3rdparty';
		}
		else if(url.indexOf('.') !== -1)
		{
			let parts = url.split('.'), module = parts.splice(parts.length-1, 1);
			values.package = parts.join('.');
			if(module && module !== '')
			{
				values.path = rootURL+'publish/js/modules/'+((VHV.language !== 'vi')?VHV.language+'_':'')+parts.join('.')+'.'+module+'.js';
				values.type = 'module';
			}
		}
		return values;
	},
	changeTail: function (name, tail) {
		let p = name.lastIndexOf('.');
		if(p)
		{
			return name.substr(0, p+1) + tail;
		}
	},
	cookie (name, value, expires) {
		if($.cookie)
		{
			if (typeof(value) === 'undefined') {
				return $.cookie(name);
			}
			else {
				$.cookie(name, value, {
					path: '/'
				});
			}
		}
	},
	url: function (item) {
		if(item?.rewriteURL)
		{
			return item.rewriteURL;
		}
		return item?'/?id='+item['id']:'/';
	},
	image: function (url, size, type) {
		if((url.indexOf('http://')===-1)  && (url.indexOf('https://')===-1) && (url.indexOf('data:image') !== 0))
		{
			if(size)
			{
				if(!type)type='default';
				return VHV.staticURL+'publish/thumbnail/'+VHV.site+'/'+size+'x'+type+('/'+url).replace('//','/');
			}
			return ((url[0] !== '/')?VHV.staticURL:'')+url.replace('//','/');
		}
		return url;
	}
});
Object.assign(VHV, {
	extend: function (oldClass, properties, extra) {
		if((typeof(properties) === 'string') && properties)
		{
			VHV.load(properties, function(){
				eval('VHV.'+oldClass+' = VHV.extend(VHV.'+properties+', extra);');//NOSONAR
			});
			return;
		}
		let newClass;
		if (typeof(oldClass) !== 'undefined') {
			newClass = class extends oldClass {};
		}
		else {
			newClass = class {};
		}
		$.extend(true, newClass.prototype, properties);
		newClass.parentClass = oldClass;
		return newClass;
	},
	sizeof: function (obj) {
		if(typeof(obj) === 'object')
		{
			let size = 0;
			for(let i in obj)
			{
				if(typeof(obj[i])!='function')
				{
					size ++;
				}
			}
			return parseInt(size);
		}
		else
		if(typeof(obj)!='undefined' && typeof(obj.length) !== 'undefined')
		{
			return obj.length;
		}
		return 0;
	},
	data: function (obj) {
		let data = $(obj).data(), newData = {};
		if(data)
		{
			for(let i in data)
			{
				let j = i+'';
				if(!j.startsWith('x') || j[1] !== (j[1]+'').toUpperCase()) {
					if (j.length > 7 && ['filters', 'options'].indexOf(j.substr(0, 7)) !== -1) {
						let key = j.substr(0, 7);
						if (!newData[key]) newData[key] = {};
						newData[key][j[7].toLowerCase() + j.substr(8)] = data[i];
					} else {
						newData[i] = data[i];
					}
				}
			}
		}
		return newData;
	}
});
VHV.Module = class {
    isReady = false
    layout = ''
    children = []

    constructor(id) {
        this.id = id ? id : ++VHV.App.maxModuleId;
        if (!VHV.App.modules[this.id]) {
            VHV.App.modules[this.id] = this;
            this.parent = ((this.moduleParentId && VHV.App.modules[this.moduleParentId])
                ? VHV.App.modules[this.moduleParentId] : VHV.App.currentModule);
        }
    }

    showLoadingFullScreen(type) {
        this.hideLoadingFullScreen();
        let loading = '<div id="loading-data' + this.id + '" style="background: #0000001a;' +
            'position: fixed;' +
            'top: 0;' +
            'left: 0;' +
            'width: 100%;' +
            'z-index: 100000;"></div>';
        $('body').append(loading);
        $('#loading-data' + this.id).loadModule('Content.Listing', {
            layout: 'Common.Loading.type' + (type || 1),
            gridModuleParentId: '{mid}',
        });
    }

    hideLoadingFullScreen() {
        $('#loading-data' + this.id).remove();
    }

    me() {
        return 'VHV.App.modules[' + this.id + ']';
    }

    addChildren(m) {
        m.parent = this;
        m.moduleParentId = this.id;
        for (let i in this.children) {
            if ((this.children[i].id == m.id) || (this.children[i].index == m.id)) {
                return;
            }
        }
        this.children.push(m);
    }

    applyFunction(func) {
        let oldModule = VHV.App.currentModule, returnValue;
        window.module = VHV.App.currentModule = this;
        if (typeof (func) === 'function') {
            returnValue = func.call(this);
        }
        else {
            returnValue = this[func]();
        }
        window.module = VHV.App.currentModule = oldModule;
        return returnValue;
    }

    object() {
        return 'VHV.App.modules[' + this.id + ']';
    }

    each(f) {
        for (let i in VHV.App.modules) {
            let module = VHV.App.modules[i];
            if (module?.parent?.id == this.id) {
                if (f.call(module) === false) {
                    return;
                }
            }
        }
    }

    params() {
        let options = {};
        for (let i in this) {
            if (i !== 'pagingSelector' && i !== 'beginTitle' && i !== 'class' && i !== 'endText'
                && i !== 'endTitle' && i !== 'hasController' && i !== 'hasPagination' && i !== 'index'
                && i !== 'linkTo' && i !== 'nextText' && i !== 'numDisplayEntries' && i !== 'path'
                && i !== 'prevText' && i !== 'startText' && i !== 'submitFormId' && i !== 'totalItems'
                && i !== 'url_mode' && i !== 'module' && i !== 'id'
                && (typeof (this[i]) === 'number' || typeof (this[i]) === 'string')) {
                options[i] = this[i];
            }
            else if ((i === 'filters' || i === 'options') && (typeof (this[i]) === 'object')) {
                for (let j in this[i]) {
                    if ((typeof (this[i][j]) !== 'function') && (this[i][j] || this[i][j] + '' === '0' || parseInt(
                        this[i][j]) === 0)) {
                        if (typeof (this[i][j]) === 'object') {
                            for (let k in this[i][j]) {
                                if ((typeof (this[i][j][k]) !== 'function')
                                    && (typeof (this[i][j][k]) !== 'object') && this[i][j][k]) {
                                    options[i + '[' + j + ']' + '[' + k + ']'] = this[i][j][k];
                                }
                            }
                        }
                        else if (i !== 'options'
                            || ['sortOrder', 'itemsPerPage', 'pageNo', 'orderBy', 'type', 'childType']
                                .indexOf(j) === -1) {
                            options[(j.indexOf('[') !== -1) ? i + j.replace(
                                /^(\w+)/, '[$1]') : (i + '[' + j + ']')] = this[i][j];
                        }
                    }
                }
            }
        }
        return options;
    }

    reload(options, success) {
        if (options !== 'current') {
            this.pageNo = 1;
            if (options) {
                let id = this.id;
                if (options.id) {
                    this.itemId = options.id;
                }
                $.extend(this, options);
                this.id = id;
            }
        }
        let module = $('#module' + this.id), that = this;
        if (module.length > 0) {
            let params = this.params(), submitURL = this.submitURL({
                cmd: 'redraw'
            });
            if (typeof (params.__proto__) !== 'undefined') {
                delete params.__proto__;
            }
            if (submitURL.accountId) {
                if (!params.accountId) {
                    params.accountId = submitURL.accountId;
                }
                delete submitURL.accountId;
            }
            params._t = new Date().getTime();
            $.post(
                submitURL,
                params,
                function (response) {
                    module.html(response);
                    $(window).resize();
                    $(document).trigger('VHV.Module.show', {
                        module: that,
                        options: options
                    });
                    VHV.updateDisplay();
                    if (success && (typeof (success) === 'function')) {
                        success.call(that);
                    }
                    if (that.afterReload) {
                        that.afterReload();
                    }
                }
            );
        }
    }

    loadModule(name, options, success) {
        let that = this;
        if (this[name]?.$().length) {
            this[name].$().show();
            $('#form' + this[name].id + ' input[name^=fields],#form' + this[name].id + ' select[name^=fields],#form'
                + this[name].id + ' textarea[name^=fields]')
                .each(function () {
                    let fieldname = this.name.replace('fields[', '').replace(']', '');
                    if (['moduleId', 'id', 'itemId', 'module', 'moduleName', 'isReady', 'parent', 'children',
                        'clearForm', 'phpModuleName', 'submitService', 'type', 'name'].indexOf(
                        fieldname) === -1 && that[name][fieldname]) {
                        delete (that[name][fieldname]);
                    }
                });
            this[name].$().html('<div style="height:200px;"><img src="/App/images/loader.gif"/></div>');
            this[name].reload(options, function () {
                if (options.xPopup) {
                    that[name].$('form input:submit').hide();
                }
            });
            let modal = this[name].$().parents('.modal:first');
            if (modal.length) {
                modal.modal('show');
                if (options.xPopupTitle) {
                    modal.find('.modal-title:first').html(
                        '<i class="vi vi-setting"></i>&nbsp;' + options.xPopupTitle ? VHV.notag(
                            options.xPopupTitle) : '');
                }
            }
            if (success && (typeof (success) === 'function')) {
                success.call(this);
            }
        }
        else {
            let obj = $('#' + name + this.id);
            if (!obj.length) {
                obj = $('<div id="' + name + this.id + '"></div>');
                this.$().append(obj);
            }
            if (options.xPopup) {
                let xPopup = {};
                if ((typeof (options.xPopup) === 'string') && options.xPopup.indexOf(':')) {
                    try {
                        eval("xPopup = {" + options.xPopup + '}');//NOSONAR
                    } catch (e) {
                    }
                }
                xPopup.title = (options.xPopupTitle ? options.xPopupTitle : '' + "Hộp thoại" + '');
                xPopup.success = function () {
                    that.addChildren(this);
                    that[name] = this;
                    if (success && (typeof (success) === 'function')) {
                        success.call(that);
                    }
                };
                VHV.dialog(options.module ? options.module : 'Content.Listing', options, xPopup);
            }
            else {
                obj.loadModule(options.module ? options.module : 'Content.Listing', options, function () {
                    that.addChildren(this);
                    that[name] = this;
                    if (success && (typeof (success) === 'function')) {
                        success.call(that);
                    }
                    $(document).trigger('VHV.Module.show', {
                        module: this,
                        options: options
                    });
                    VHV.updateDisplay();
                });
            }
        }
    }

    initEvents() {
        //Empty function
    }

    $(selector) {
        return $('#module' + this.id + (selector ? ' ' + selector : ''));
    }

    html(code) {
        return this.$().html(code);
    }

    append(code) {
        return this.$().append(code);
    }

    buildURL(options) {
        if (!options) {
            options = {};
        }
        options.url_mode = VHV.urlMode;
        let url = (VHV.domainRoot ? VHV.domainRoot : VHV.rootURL) + '?';
        if (!options?.['module']) {
            url += 'module=' + (this.phpModuleName ? this.phpModuleName : this.module);
        }
        url += '&moduleId=' + this.id;
        if (options) {
            for (let i in options) {
                if (['module', 'phpModuleName'].indexOf(i) === -1) {
                    url += '&' + i + '=' + encodeURIComponent(options[i]);
                }
            }
        }
        return url;
    }

    submitURL(options) {
        options = VHV.Model.engine.initOptions(options, VHV.app ? this.$().parents('.swap-screen:first') : false, true);
        return this.buildURL(
            options) + '&submitFormId=' + this.id + '&moduleId=' + this.id + '&page=' + this.page + '&site=' + VHV.site;
    }

    jm() {
        return 'VHV.App.modules[' + this.id + ']';
    }

    closeTab(obj) {
        currentWorkspace.closeTab(obj);
    }

    closeModal() {
        if (this.$().parents('.modal').length) {
            this.$().parents('.modal').modal('hide');
        }
        else if (this.$().parents('.animatedModal-content').length) {
            this.$().parents('.animatedModal-content').parent().find('.close-animatedModal:first').click();
        }
        else {
            this.$().hide();
        }
    }

    init(success) {
        this.isReady = true;
        this.initEvents();
        if (success && typeof (success) === 'function') {
            success.call(this);
        }
    }

    ready(callback) {
        VHV.ExecQueue.add(function () {
                this.applyFunction(callback);
            }, function () {
                return this.isReady && this.$().length;
            }, this, {caller: 'ready'}
        );
    }
}
VHV.Model = function(method)
{
	return VHV.Model.register(method);
}
$.extend(VHV.Model, {
		engine: {
			register:function(serviceModule, methods){
				let model = {};
				for(let i in methods)
				{
					model[i] = this.registerMethod(serviceModule, i);
					model[i].url = this.registerURLMethod(serviceModule, i);
				}
				return model;
			},
			registerMethod: function(serviceModule, method)
			{
				let engine = this;
				return function(options, success){
					return engine.call(serviceModule, method, options, success);
				};
			},
			registerURLMethod: function(serviceModule, method)
			{
				let engine = this;
				return function(options, noSecurityToken){
					return engine.url(serviceModule, method, options, noSecurityToken);
				};
			},
			initOptions: function(options, swapScreen, noSecurityToken){
				if(!options){
					options = {};
				}
				if(!options.site){
					options.site = VHV.App.site;
				}
				if(VHV.app)
				{
					let pageUrl = (swapScreen?swapScreen:$('.swap-screen:visible')).data('url');
					if(pageUrl && typeof(options.accountId) === 'undefined' && (/&accountId=(\w+)/.test(pageUrl) || /^\/u\/(\w+)/.test(pageUrl))){
						options.accountId = RegExp.$1;
					}
					if(pageUrl && typeof(options.groupId) === 'undefined' && (/&groupId=(\w+)/.test(pageUrl) || /^\/g\/(\w+)/.test(pageUrl))){
						options.groupId = RegExp.$1;
					}
				}
				if(VHV.groupId && typeof(options.groupId) === 'undefined')
				{
					options.groupId = VHV.groupId;
				}
				else if(VHV.accountId && typeof(options.accountId) === 'undefined')
				{
					options.accountId = VHV.accountId;
				}
				if(!noSecurityToken && !options.securityToken && VHV.securityToken){
					options.securityToken = VHV.securityToken;
				}
				return options;
			},
			call: function(serviceModule, serviceMethod, options, success)
			{
				options = VHV.Model.engine.initOptions(options);
				if(serviceModule === 'Member.Device' && serviceMethod === 'log')
				{
					let saveLoginToken = localStorage.getItem('saveLoginToken');
					if(saveLoginToken)
					{
						options.saveLoginToken = saveLoginToken;
					}
				}
				let data = null;
				$.ajax({
					url: '/api/'+serviceModule.replace(/\./g, '/')+'/'+serviceMethod,
					data: options,
					async:options.async,
					type:'POST',
					success: function(response){
						if(serviceModule === 'Member.Device' && serviceMethod === 'log')
						{
							let res = JSON.parse(response);
							if(res.saveLoginToken)
							{
								localStorage.setItem('saveLoginToken', res.saveLoginToken);
							}
							if(res.autoLoggedIn)
							{
								let href = VHV.request('href');
								if(href)
								{
									location = href;
								}
								else
								{
									location.reload();
								}
							}
						}
						if(success){success.call(this, response);}
						data = response;
					},
					error: function(){
						success.call(this, 'ERROR');
					}
				});
				return data;
			},
			url: function(serviceModule, serviceMethod, options, noSecurityToken)
			{
				options = VHV.Model.engine.initOptions(options, false, noSecurityToken);
				return '/api/'+serviceModule.replace(/\./g, '/')+'/'+serviceMethod+'?'+$.param(options);
			}
		},
		register: function(serviceModule, methods){
			let names = serviceModule.split('.'), methodName = '';
			names[names.length-1] = names[names.length-1];
			if(!methods){
				methods = {};
				methodName = names.pop();
				methods[methodName] = [];
			}
			let obj = VHV.Model;
			for(let name of names)
			{
				if(!obj[name])
				{
					obj[name] = {};
				}
				obj = obj[name];
			}
			for(let i in methods)
			{
				if(obj[methods[i]])
				{
					delete methods[i];
				}
			}
			let model = VHV.Model.engine.register(names.join('.'), methods);
			$.extend(obj, model);
			if(methodName)
			{
				return obj[methodName];
			}
			return obj;
		},
		call: function(serviceModule, serviceMethod, options, success){return VHV.Model.engine.call(serviceModule, serviceMethod, options, success);}
	}
);
Object.assign(VHV, {
	allOrderedLinks: [],
	urlMode: 'rewrite',
	reload: function() {
		if(VHV.app)
		{
			VHV.app.reloadCurrentScreen();
		}
		else
		{
			location.reload();
		}
	},
	redirect: function(url, base64) {
		if(typeof(url) === 'object')
		{
			url = VHV.buildURL(url);
		}
		if(base64)
		{
			url = decodeURIComponent(escape(decode64(url)));
		}
		if(typeof(url) === 'string' && /^([A-Z]\w*\.)?[\w.]+$/.test(url))
		{
			url = VHV.buildURL({page:url});
		}
		if((url.toLowerCase().indexOf('http') === -1) && (url.toLowerCase().indexOf('https') === -1) && (url.indexOf('/') !== 0))
		{
			url = location.protocol + '//' + url;
		}
		if(VHV.app)
		{
			VHV.app.redirect(url);
		}
		else
		{
			location = url;
		}
	},
	request: function(param, defaultValue) {
		if(typeof(defaultValue) === 'undefined')
		{
			defaultValue = '';
		}
		let regex = '[?&]' + param + '=([^&#]*)';
		let results = (new window['Reg'+String.fromCharCode(0x45)+'xp'](regex)).exec(VHV.location?VHV.location:location.href);
		if(results)
		{
			return decodeURIComponent(results[1]);
		}
		else
		{
			regex = '[?&]'+param+'\\[(\\w*)\\]=([^&#]*)';
			let regExpObj = new RegExp(regex, 'g');
			let matches = location.href.toString().replace(/%5B/g, '[').replace(/%5D/g, ']').match(regExpObj);
			if(matches)
			{
				let items = {};
				for(let match of matches)
				{
					results = (new window['Reg'+String.fromCharCode(0x45)+'xp'](regex)).exec(match);
					if(results)
					{
						if(results[1] !== '')
						{
							items[results[1]] = decodeURIComponent(results[2]);
						}
						else
						{
							items[VHV.sizeof(items)] = decodeURIComponent(results[2]);
						}
					}
				}
				return items;
			}
		}
		return defaultValue;
	},
	_getPostParams: function (params, result, prefix){
		if(Array.isArray(params)){
			for(let param of params){
				this._getPostParams(param, result, prefix+'[]');
			}
		}
		else if(typeof params === 'object'){
			for(let i in params){
				this._getPostParams(params[i], result, prefix + '[' + i + ']');
			}
		}
		else{
			result[prefix] = params;
		}
	},
	getPostParams: function (params){
		let result = {};
		for(let i in params){
			if(i !== 'bs.tab') {
				let value = params[i];
				this._getPostParams(value, result, i);
			}
		}
		return result;
	},
	setAllLinks: function (fileName, value){
		if(fileName.startsWith('/'))
		{
			fileName = location.protocol + '//'+location.hostname + fileName;
		}
		VHV.allLinks[fileName] = value;
	},
	read: function (fileName, options, func) {
		if(!fileName)return;
		if(typeof(options) === 'function')
		{
			func = options;
			options = {};
		}
		if(VHV.allLinks[fileName] == 2)
		{
			if(func) func.call(this, VHV.cache[fileName]?VHV.cache[fileName]:'');
			else return VHV.cache[fileName]?VHV.cache[fileName]:'';
			return;
		}
		else
		if(parseInt(VHV.allLinks[fileName]) === 1 && (!options || typeof(options.async)=='undefined' || options.async))
		{
			VHV.ExecQueue.add(func, function(){return VHV.allLinks[fileName] == 2}, null, {fileName:fileName});
			return;
		}
		VHV.setAllLinks(fileName, 1);
		let fn = fileName;
		if((fileName.indexOf('.js') !== -1) && (fileName.indexOf('3rdparty/') !== -1))
		{
			fileName = fileName.replace(VHV.rootURL, VHV.staticURL);
			if((fileName.indexOf('http://') === -1) && (fileName.indexOf('https://') === -1) && (fileName.substr(0,1) !== '/'))
			{
				fileName = (VHV.staticURL?VHV.staticURL:'/') + fileName;
			}
			let that = this;
			$.ajax($.extend({
				url: fileName+'?'+(VHV.clientVersion?VHV.clientVersion:1),
				dataType: "script",
				cache: true,
				success: function(data){
					VHV.setAllLinks(fn, 2);
					VHV.allOrderedLinks.push(fn);
					if(func)
					{
						func.call(that, data);
					}
				}
			}, options?options:{}));
			return;
		}
		if(!options)
		{
			options = {};
		}
		if(!options.dataType)
		{
			options.dataType = 'html';
		}
		if(typeof(options.async) === 'undefined')
		{
			options.async = VHV.async;
		}
		if(fileName.indexOf('.css') !== -1)
		{
			fn = fileName;
			if((fn.indexOf('http://') === -1) && (fn.indexOf('https://') === -1))
			{
				if(fn.indexOf(staticURL) !== 0)
				{
					if((fn.charAt(0) === '/') || ((fn.indexOf('http://') === -1) && (fn.indexOf('https://') === -1)))
					{
						fn = VHV.staticURL+fn;
					}
				}
				if(fn.indexOf('3rdparty/') !== -1)
				{
					fn = fn.replace(VHV.rootURL, VHV.staticURL);
					fn = ((fn.substr(0,1) === '/')?'':VHV.staticURL) + fn;
				}
			}
			if(fileName.substr(1).indexOf('/')!==-1)
			{
				let fileref=document.createElement("link");
				fileref.setAttribute("rel", "stylesheet");
				fileref.setAttribute("type", "text/css");
				fileref.setAttribute("href", fn+'?'+(VHV.clientVersion?VHV.clientVersion:1));
				document.getElementsByTagName("head")[0].appendChild(fileref);
			}
			VHV.setAllLinks(fileName, 2);
			VHV.allOrderedLinks.push(fileName);
			return;
		}
		if(fileName.indexOf('.js') !== -1)
		{
			$.ajax($.extend(options?options:{}, {
				url: ((((fileName.indexOf('http://') === -1) && (fileName.indexOf('https://') === -1)) || (fileName.indexOf(rootURL) === 0))?staticURL:'') + fileName.replace(rootURL, '')+'?'+(VHV.clientVersion?VHV.clientVersion:1),
				dataType: "script",
				cache: true,
				success: function(){
					VHV.setAllLinks(fileName, 2);
					VHV.allOrderedLinks.push(fileName);
				}
			}));
		}
		else
		{
			let realFileName = (staticURL+fileName.replace(rootURL, ''));
			if(fileName.indexOf('.js') !== -1 && navigator.userAgent.toLowerCase().indexOf('chrome')===-1 )
			{
				let node = document.createElement('SCRIPT');
				node.src = realFileName;
				if($.msie)
				{
					node.onreadystatechange= function () {
						if ((this.readyState === 'complete' || this.readyState === 'loaded') && (VHV.allLinks[realFileName] != 2)){

							setTimeout(function(){
								VHV.setAllLinks(fileName, 2);
								VHV.allOrderedLinks.push(fileName);
							}, 10);
						}
					}
				}
				else
				{
					node.onload = function(){
						setTimeout(function(){
							VHV.setAllLinks(fileName, 2);
							VHV.allOrderedLinks.push(fileName);
						}, 10);
					};

				}
				document.body.appendChild(node);

				return;
			}
			let returnValue = '';
			let success = function(data)
			{
				if(fileName.indexOf('.js') === -1 && fileName.indexOf('.css') === -1)
				{
					if (data)
						VHV.cache[fileName] = data;
				}
				if(options.dataType === 'html')
				{
					if(fileName.indexOf('.css') !== -1)
					{
						let parts = fileName.split('/');
						parts.splice(parts.length - 1, 1);
						parts = parts.join('/')+'/';
						data = data.replace(/url\s*\(\s*(["']?)/gi, 'url($1'+parts);
						$('body').append('<style>'+data+'</style>');
					}
					else
					if(fileName.indexOf('.js') !== -1)
					{
						eval(data);//NOSONAR
					}
				}
				else
				{
					returnValue = data;
				}
				VHV.setAllLinks(fileName, 2);
				VHV.allOrderedLinks.push(fileName);
				if(func)
				{
					func.call(this, data);
				}
			};
			$.ajax($.extend({
				url: realFileName+(/\?/.test(fileName)?'&':'?')+'v='+VHV.version+(VHV.clientVersion?VHV.clientVersion:1),
				cache:true,
				success:success
			}, options));
			return returnValue;
		}
	},
	load: function (){
		let args = [], readOptions = (typeof(arguments[0]) === 'object')?arguments[0]:{};
		if(arguments.length>0)
		{
			if(typeof(arguments[0]) === 'function')
			{
				arguments[0].call(this);
			}
			else
			{
				let length = arguments.length;
				if(typeof(arguments[arguments.length - 1]) === 'function')
				{
					length--;
				}
				if(typeof(arguments[0]) === 'object' && arguments[0].length && typeof(arguments[0][0]) === 'object' && arguments[0][0].length)
				{
					let newArgs = args[0].splice(0,1)[0];
					if(args[0].length > 0)
					{
						newArgs.push(function(){
							VHV.load(args[0], args[1]);
						});
					}
					else
					{
						newArgs.push(args[1]);
					}
					VHV.load.apply(this, newArgs);
					return;
				}
				for(let i = 0; i < length; i++)
				{
					if(typeof(arguments[i]) === 'string' && arguments[i])
					{
						args[i] = VHV.getComponentURL(arguments[i]);

						if(!VHV.allLinks[args[i].path])
						{
							let parts = arguments[i].split('.');
							if(args[i].type === 'module')
							{
								for(let j = 0; j < parts.length - 1; j++)
								{
									let file = 'VHV.'+parts.slice(0, j+1).join('.'), model;
									if(file !== 'VHV.')
									{
										eval('model = '+file);//NOSONAR
										if(typeof(model) === 'undefined')
										{
											eval(file+' = {};');//NOSONAR
										}
									}
								}
							}
							if(args[i].path) VHV.read(args[i].path, readOptions);
						}
					}
				}
				if(typeof(arguments[length]) === 'function')
				{
					let oldArgs = arguments;
					(function (length){
						VHV.ExecQueue.add(function(){
							oldArgs[length].call(this);
						},function(){
							for(let i = 0; i < length; i ++)
							{
								if(args[i])
								{
									if(args[i].type === 'module' && (!VHV.allLinks[args[i].path] || VHV.allLinks[args[i].path] < 2))
									{
										return false;
									}
									else if(args[i].type === 'module')
									{
										let ok = true;
										try{
											eval('ok = (typeof(VHV.'+args[i].name+') != "undefined")');//NOSONAR
										}
										catch(e)
										{
											ok = false;
										}
										if(!ok)
										{
											return false;
										}
									}
									else
									if(VHV.allLinks[args[i].path] < 2)
									{
										return false;
									}
								}
							}
							return true;
						}, arguments, {caller:'load', args:args});
					})(length);
				}
			}
		}
	},
	serializeForm: function (form, options) {
		let defaults = {
			'returnType': '',
			'returnName': 'fields',
			'dateReturn': 'date'
		}, values = [], fields = {}, formId;
		if (typeof(options) !== 'object') {
			options = defaults;
		}
		else {
			options = $.extend(defaults, options);
		}
		if($(form)[0].tagName === 'FORM'){
			values = $(form).serializeArray();
			formId = this.id;
		}
		else{
			$('input[name],select[name],textarea[name]', form).each(function(){
				if(this.tagName !== 'INPUT' || ['checkbox', 'radio'].indexOf(this.type) === -1 || this.checked) {
					values.push({
						name: this.name,
						value: this.value
					});
				}
			})
			formId = options.formId;
		}
		for (let item of values) {
			if(['moduleId', 'securityToken', 'submitFormId'].indexOf(item.name) === -1)
			{
				let name = 'fields.' + item.name;
				if (options.dateReturn === 'number') {
					let dp = $('#' + formId + ' input[name='+item.name+'].hasDatepicker');
					if (dp.length !== 0) {
						try {
							let date = dp.datepicker('getDate');
							item.value = date?date.getUTCTime() / 1000:'';
						} catch (ex) {
							item.value = '';
						}
					}
				}
				name = name.replace(/\[([\w\-]+)\]/g, '[\'$1\']').replace(/\.([\w\-]+)/g, '[\'$1\']');
				let path = name.split('[');
				for (let j = 1; j < path.length - 1; j++) {
					let subName = path.slice(0, j + 1).join('['), value;
					try {
						eval('value = ' + subName + ';');//NOSONAR
					}
					catch(e){
					}
					if (!value) {
						eval(subName + ' = {};');//NOSONAR
					}
				}
				eval(name + '=$.trim(item.value);');//NOSONAR
			}
		}
		if (options['returnType'] === 'submitArray') {
			let params = {};
			for (let i in fields) {
				params[options.returnName + '[' + i + ']'] = fields[i];
			}
			return params;
		}
		else {
			return fields;
		}
	}
});
Object.assign(VHV, {
	rand: function (min, max) {
		const crypto = window.crypto || window.msCrypto;
		let array = new Uint32Array(1);
		crypto.getRandomValues(array);
		if(!min) {
			min = 0;
		}
		if(max === null){
			return array[0] + min;
		}
		if(max === min) {
			return min;
		}
		return (array[0] % (max - min + 1)) + min;
	},
	number: function (value, isPrice) {
		if(VHV.defaultNumberFormat === 'US')
		{
			let num = VHV.numberFormat(value, 2,'.',',').toString();
			if(isPrice){
				if(num.indexOf('.') === -1){
					num += '.00';
				}
				else if(num.match(/\.\d$/)){
					num += '0';
				}
				return num;
			}
			return num.replace('.00', '');
		}
		return VHV.numberFormat(value, 2,',','.').toString().replace(',00', '');
	},
	numberDecode: function (value)	{
		if(VHV.defaultNumberFormat === 'US')
		{
			return parseFloat(value.replace(',', ''));
		}
		return parseFloat(value.replace('.', '').replace(',', '.'));
	},
	currency: function () {
		if(VHV.defaultCurrency)
		{
			return VHV.defaultCurrency;
		}
		return 'VND';
	},
	price: function (number) {
		let currency = !VHV.defaultCurrency ? 'VNĐ' : VHV.defaultCurrency;
		let isNegative = number !== '' && number < 0;
		let price = VHV.number(number, 1);
		if($.inArray(currency, ['VND','VNĐ','đ']) === -1)
		{
			if(isNegative){
				return '-' + currency + price.replace('-','');
			}
			return currency + price;
		}
		return price + currency;
	},
	numberFormat: function (number, decimals, decPoint, thousands_sep) {
		decimals = decimals?decimals:2;
		thousands_sep = thousands_sep?thousands_sep:'.';
		decPoint = decPoint?decPoint:',';
		if (!number || number === 'ATC' || number === 'ATO') {
			if (typeof(number) === 'undefined') {
				return '0';
			}
			return number + '';
		}
		let abs = Math.abs(number);
		if (abs < 0) {
			return '0';
		}
		let round = Math.floor(abs), frac = Math.abs(Math.round(abs * 100) - round * 100) / 100;
		if (frac) {
			frac = frac.toString().substr(1, decimals + 1).replace(/(^|[^0])0+$/, '$1').replace(/\./, decPoint);
		}
		let st = '', lastRound = -1;
		do {
			if (lastRound !== -1) {
				if (lastRound < 10)
					st = '00' + st;
				else if (parseInt(lastRound) < 100)
					st = '0' + st.toString();
			}
			lastRound = round % 1000;
			st = lastRound + (st ? thousands_sep + st : frac);
			round = Math.floor(round / 1000);
		}
		while (round > 0);
		if (number < 0) {
			st = '-' + st;
		}
		return st;
	}
});

/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.4",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.4",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.4",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.4",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function () {
        /*var that = this
        $(document).on('focusin.modal', function (e) {
          if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
            that.$element.focus()
          }
        })*/
      },c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport),this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.4",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.4",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){
var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.4",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a(document.body).height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);jQuery.fn.wowSlider=function(aj){var aF=jQuery;var H=this;var y=H.get(0);window.ws_basic=function(k,c,f){var aU=aF(this);this.go=function(aV){f.find(".ws_list").css("transform","translate3d(0,0,0)").stop(true).animate({left:(aV?-aV+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))},k.duration,"easeInOutExpo",function(){aU.trigger("effectEnd")})}};aj=aF.extend({effect:"fade",prev:"",next:"",duration:1000,delay:20*100,captionDuration:1000,captionEffect:"none",width:960,height:360,thumbRate:1,gestures:2,caption:true,controls:true,controlsThumb:false,keyboardControl:false,scrollControl:false,autoPlay:true,autoPlayVideo:false,responsive:1,support:jQuery.fn.wowSlider.support,stopOnHover:0,preventCopy:1},aj);var C=navigator.userAgent;var aq=aF(".ws_images",H).css("overflow","visible");var ao=aF("<div>").appendTo(aq).css({position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"});var S=aq.find("ul").css("width","100%").wrap("<div class='ws_list'></div>").parent().appendTo(ao);function h(c){return S.css({left:-c+"00%"})}aF("<div>").css({position:"relative",width:"100%","font-size":0,"line-height":0,"max-height":"100%",overflow:"hidden"}).append(aq.find("li:first img:first").clone().css({width:"100%",visibility:"hidden"})).prependTo(aq);S.css({position:"absolute",top:0,height:"100%",transform:/Firefox/.test(C)?"":"translate3d(0,0,0)"});var b=aj.images&&(new wowsliderPreloader(this,aj));var aL=aq.find("li");var z=aL.length;function aJ(c){return((c||0)+z)%z}var d=S.width()/S.find("li").width(),L={position:"absolute",top:0,height:"100%",overflow:"hidden"},aE=aF("<div>").addClass("ws_swipe_left").css(L).prependTo(S),aM=aF("<div>").addClass("ws_swipe_right").css(L).appendTo(S);if(/MSIE/.test(C)||/Trident/.test(C)||/Safari/.test(C)||/Firefox/.test(C)){var t=Math.pow(10,Math.ceil(Math.LOG10E*Math.log(z)));S.css({width:t+"00%"});aL.css({width:100/t+"%"});aE.css({width:100/t+"%",left:-100/t+"%"});aM.css({width:100/t+"%",left:z*100/t+"%"})}else{S.css({width:z+"00%",display:"table"});aL.css({display:"table-cell","float":"none",width:"auto"});aE.css({width:100/z+"%",left:-100/z+"%"});aM.css({width:100/z+"%",left:"100%"})}var G=aj.onBeforeStep||function(c){return c+1};aj.startSlide=aJ(isNaN(aj.startSlide)?G(-1,z):aj.startSlide);if(b){b.load(aj.startSlide,function(){})}h(aj.startSlide);var X,ae;if(aj.preventCopy){X=aF('<div class="ws_cover"><a href="#" style="display:none;position:absolute;left:0;top:0;width:100%;height:100%"></a></div>').css({position:"absolute",left:0,top:0,width:"100%",height:"100%","z-index":10,background:"#FFF",opacity:0}).appendTo(aq);ae=X.find("A").get(0)}var r=[];var A=aF(".ws_frame",H);aL.each(function(c){var aU=aF(">img:first,>iframe:first,>iframe:first+img,>a:first,>div:first",this);var aV=aF("<div></div>");for(var k=0;k<this.childNodes.length;){if(this.childNodes[k]!=aU.get(0)&&this.childNodes[k]!=aU.get(1)){aV.append(this.childNodes[k])}else{k++}}if(!aF(this).data("descr")){if(aV.text().replace(/\s+/g,"")){aF(this).data("descr",aV.html().replace(/^\s+|\s+$/g,""))}else{aF(this).data("descr","")}}aF(this).data("type",aU[0].tagName);var f=aF(">iframe",this).css("opacity",0);r[r.length]=aF(">a>img",this).get(0)||aF(">iframe+img",this).get(0)||aF(">*",this).get(0)});r=aF(r);r.css("visibility","visible");aE.append(aF(r[z-1]).clone());aM.append(aF(r[0]).clone());var aQ=[];aj.effect=aj.effect.replace(/\s+/g,"").split(",");function aG(c){if(!window["ws_"+c]){return}var f=new window["ws_"+c](aj,r,aq);f.name="ws_"+c;aQ.push(f)}for(var Q in aj.effect){aG(aj.effect[Q])}if(!aQ.length){aG("basic")}var x=aj.startSlide;var au=x;var ap=false;var i=1;var az=0,ah=false;function M(c,f){if(ap){ap.pause(c.curIndex,f)}else{f()}}function am(c,f){if(ap){ap.play(c,0,f)}else{f()}}aF(aQ).bind("effectStart",function(c,f){az++;M(f,function(){n();if(f.cont){aF(f.cont).stop().show().css("opacity",1)}if(f.start){f.start()}au=x;x=f.nextIndex;W(x,au,f.captionNoDelay)})});aF(aQ).bind("effectEnd",function(c,f){h(x).stop(true,true).show();setTimeout(function(){am(x,function(){az--;K();if(ap){ap.start(x)}})},f?(f.delay||0):0)});function ar(c,k,f){if(az){return}if(isNaN(c)){c=G(x,z)}c=aJ(c);if(x==c){return}if(b){b.load(c,function(){Y(c,k,f)})}else{Y(c,k,f)}}function ac(k){var f="";for(var c=0;c<k.length;c++){f+=String.fromCharCode(k.charCodeAt(c)^(1+(k.length-c)%7))}return f}aj.loop=aj.loop||Number.MAX_VALUE;aj.stopOn=aJ(aj.stopOn);var m=Math.floor(Math.random()*aQ.length);function Y(c,k,f){if(az){return}if(k){if(f!=undefined){i=f^aj.revers}h(c)}else{if(az){return}ah=false;(function(aV,aU,aW){m=Math.floor(Math.random()*aQ.length);aF(aQ[m]).trigger("effectStart",{curIndex:aV,nextIndex:aU,cont:aF("."+aQ[m].name,H),start:function(){if(aW!=undefined){i=aW^aj.revers}else{i=!!(aU>aV)^aj.revers?1:0}aQ[m].go(aU,aV,i)}})}(x,c,f));H.trigger(aF.Event("go",{index:c}))}x=c;if(x==aj.stopOn&&!--aj.loop){aj.autoPlay=0}if(aj.onStep){aj.onStep(c)}}function n(){H.find(".ws_effect").fadeOut(200);h(x).fadeIn(200).find("img").css({visibility:"visible"})}if(aj.gestures==2){H.addClass("ws_gestures")}function ay(aV,k,f,aU,aX,aW){new af(aV,k,f,aU,aX,aW)}function af(aU,aY,a1,k,a3,a2){var aX,aV,f,c,aZ=0,a0=0,aW=0;if(!aU[0]){aU=aF(aU)}aU.on((aY?"mousedown ":"")+"touchstart",function(a5){var a4=a5.originalEvent.touches?a5.originalEvent.touches[0]:a5;if(aj.gestures==2){H.addClass("ws_grabbing")}aZ=0;if(a4){aX=a4.pageX;aV=a4.pageY;a0=aW=1;if(k){a0=aW=k(a5)}}else{a0=aW=0}if(!a5.originalEvent.touches){a5.preventDefault();a5.stopPropagation()}});aF(document).on((aY?"mousemove ":"")+"touchmove",aU,function(a5){if(!a0){return}var a4=a5.originalEvent.touches?a5.originalEvent.touches[0]:a5;aZ=1;f=a4.pageX-aX;c=a4.pageY-aV;if(a1){a1(a5,f,c)}});aF(document).on((aY?"mouseup ":"")+"touchend",aU,function(a4){if(aj.gestures==2){H.removeClass("ws_grabbing")}if(!a0){return}if(aZ&&a3){a3(a4,f,c)}if(!aZ&&a2){a2(a4)}if(aZ){a4.preventDefault();a4.stopPropagation()}aZ=0;a0=0});aU.on("click",function(a4){if(aW){a4.preventDefault();a4.stopPropagation()}aW=0})}var V=aq,p="!hgws9'idvt8$oeuu?%lctv>\"m`rw=#jaqq< kfpr:!hgws9'idvt8$oeuu?%lctv>\"m`rw=#jaqq< kfpr:!hgws9'idvt8$oeuu?%lctv>\"m`rw=#jaqq< kfpr:!hgws9";if(!p){return}p=ac(p);if(!p){return}else{if(aj.gestures){function g(k){var c=k.css("transform"),f={top:0,left:0};if(c){c=c.match(/(-?[0-9\.]+)/g);if(c){if(c[1]=="3d"){f.left=parseFloat(c[2])||0;f.top=parseFloat(c[3])||0}else{f.left=parseFloat(c[4])||0;f.top=parseFloat(c[5])||0}}else{f.left=0;f.top=0}}return f}var s=0,o=10,aN,ax,q,P;ay(aq,aj.gestures==2,function(k,f,c){P=!!aQ[0].step;aA();S.stop(true,true);if(q){ah=true;az++;q=0;if(!P){n()}}s=f;if(f>aN){f=aN}if(f<-aN){f=-aN}if(P){aQ[0].step(x,f/aN)}else{if(aj.support.transform&&aj.support.transition){S.css("transform","translate3d("+f+"px,0,0)")}else{S.css("left",ax+f)}}},function(k){var f=/ws_playpause|ws_prev|ws_next|ws_bullets/g.test(k.target.className)||aF(k.target).parents(".ws_bullets").get(0);var c=e?(k.target==e[0]):0;if(f||c||(ap&&ap.playing())){return false}q=1;aN=aq.width();ax=parseFloat(-x*aN)||0;return true},function(aW,f,c){q=0;var aU=aq.width(),k=aJ(x+(f<0?1:-1)),aX=aU*f/Math.abs(f);if(Math.abs(s)<o){k=x;aX=0}var aV=200+200*(aU-Math.abs(f))/aU;az--;aF(aQ[0]).trigger("effectStart",{curIndex:x,nextIndex:k,cont:P?aF(".ws_effect"):0,captionNoDelay:true,start:function(){ah=true;function aY(){if(aj.support.transform&&aj.support.transition){S.css({transition:"0ms",transform:/Firefox/.test(C)?"":"translate3d(0,0,0)"})}aF(aQ[0]).trigger("effectEnd",{swipe:true})}function aZ(){if(P){if(f>aU||f<-aU){aF(aQ[0]).trigger("effectEnd")}else{wowAnimate(function(a0){var a1=f+(aU*(f>0?1:-1)-f)*a0;aQ[0].step(au,a1/aU)},0,1,aV,function(){aF(aQ[0]).trigger("effectEnd")})}}else{if(aj.support.transform&&aj.support.transition){S.css({transition:aV+"ms ease-out",transform:"translate3d("+aX+"px,0,0)"});setTimeout(aY,aV)}else{S.animate({left:ax+aX},aV,aY)}}}if(b){b.load(k,aZ)}else{aZ()}}})},function(){var c=aF("A",aL.get(x));if(c){c.click()}})}}var av=H.find(".ws_bullets");var al=H.find(".ws_thumbs");function W(k,aU,c){if(av.length){aS(k)}if(al.length){aB(k)}if(aj.controlsThumb&&aj.controls){aK(k)}if(aj.caption){aR(k,aU,c)}if(ae){var f=aF("A",aL.get(k)).get(0);if(f){ae.setAttribute("href",f.href);ae.setAttribute("target",f.target);ae.style.display="block"}else{ae.style.display="none"}}if(aj.responsive){aP()}}var aw=aj.autoPlay;function aH(){if(aw){aw=0;setTimeout(function(){H.trigger(aF.Event("stop",{}))},aj.duration)}}function v(){if(!aw&&aj.autoPlay){aw=1;H.trigger(aF.Event("start",{}))}}function aA(){ad();aH()}var ai;var B=false;function K(){ad();if(aj.autoPlay){ai=setTimeout(function(){if(!B){ar(undefined,undefined,1)}},aj.delay);v()}else{aH()}}function ad(){if(ai){clearTimeout(ai)}ai=null}function aO(f,c,k){ad();f&&f.preventDefault();ar(c,undefined,k);K();if(l&&u){u.play()}}var e=ac('8B"iucc9!jusv?+,unpuimggs)eji!"');e+=ac("uq}og<%vjwjvhhh?vfn`sosa8fhtviez8ckifo8dnir(wjxd=70t{9");var R=V||document.body;if(p.length<4){p=p.replace(/^\s+|\s+$/g,"")}V=p?aF("<div>"):0;aF(V).css({position:"absolute",padding:"0 0 0 0"}).appendTo(R);if(V&&document.all){var T=aF("<iframe>");T.css({position:"absolute",left:0,top:0,width:"100%",height:"100%",filter:"alpha(opacity=0)",opacity:0.01});T.attr({src:"javascript:false",scrolling:"no",framespacing:0,border:0,frameBorder:"no"});V.append(T)}aF(V).css({zIndex:56,right:"15px",bottom:"15px"}).appendTo(R);e+=ac("uhcrm>bwuh=majeis<dqwm:aikp.d`joi}9Csngi?!<");e=V?aF(e):V;if(e){e.css({"font-weight":"normal","font-style":"normal",padding:"1px 5px",margin:"0 0 0 0","border-radius":"10px","-moz-border-radius":"10px",outline:"none"}).html(p).bind("contextmenu",function(c){return false}).show().appendTo(V||document.body).attr("target","_blank")}var O=aF('<div class="ws_controls">').appendTo(aq);if(av[0]){av.appendTo(O)}if(aj.controls){var ag=aF('<a href="#" class="ws_next"><span>'+aj.next+"<i></i><b></b></span></a>");var ab=aF('<a href="#" class="ws_prev"><span>'+aj.prev+"<i></i><b></b></span></a>");O.append(ag,ab);ag.bind("click",function(c){aO(c,x+1,1)});ab.bind("click",function(c){aO(c,x-1,0)});if(/iPhone/.test(navigator.platform)){ab.get(0).addEventListener("touchend",function(c){aO(c,x-1,1)},false);ag.get(0).addEventListener("touchend",function(c){aO(c,x+1,0)},false)}if(aj.controlsThumb){ag.append('<img alt="" src="">');ab.append('<img alt="" src="">')}}function aK(f){var k=aj.controlsThumb;var aU=k[f+1]||k[0];var c=k[(f||k.length)-1];ag.find("img").attr("src",aU);ab.find("img").attr("src",c)}var E=aj.thumbRate;var at;function I(){H.find(".ws_bullets a,.ws_thumbs a").click(function(bb){aO(bb,aF(this).index())});var aZ;function a0(bh){if(a5){return}clearTimeout(aW);var bj=0.2;for(var bg=0;bg<2;bg++){if(bg){var bk=ba.find("> a");var bf=aZ?ba.width():aF(bk.get(0)).outerWidth(true)*bk.length}else{var bf=ba.height()}var bl=al[bg?"width":"height"](),bb=bl-bf;if(bb<0){var bc,be,bi=(bh[bg?"pageX":"pageY"]-al.offset()[bg?"left":"top"])/bl;if(a6==bi){return}a6=bi;var bd=ba.position()[bg?"left":"top"];ba.css({transition:"0ms linear",transform:"translate3d("+bd.left+"px,"+bd.top+"px,0)"});ba.stop(true);if(E>0){if((bi>bj)&&(bi<1-bj)){return}bc=bi<0.5?0:bb-1;be=E*Math.abs(bd-bc)/(Math.abs(bi-0.5)-bj)}else{bc=bb*Math.min(Math.max((bi-bj)/(1-2*bj),0),1);be=-E*bf/2}ba.animate(bg?{left:bc}:{top:bc},be,E>0?"linear":"easeOutCubic")}else{ba.css(bg?"left":"top",bb/2)}}}if(al.length){al.hover(function(){at=1},function(){at=0});var ba=al.find(">div");al.css({overflow:"hidden"});var a6;var aW;var a5;aZ=al.width()<H.width();al.bind("mousemove mouseover",a0);al.mouseout(function(bb){aW=setTimeout(function(){ba.stop()},100)});al.trigger("mousemove");if(aj.gestures){var c,f;var a2,a9,a1,a8;ay(al,aj.gestures==2,function(bf,bc,bb){if(a2>a1||a9>a8){return false}if(aZ){var bd=Math.min(Math.max(f+bb,a9-a8),0);ba.css("top",bd)}else{var be=Math.min(Math.max(c+bc,a2-a1),0);ba.css("left",be)}},function(bb){a5=1;var bc=ba.find("> a");a2=al.width();a9=al.height();a1=aF(bc.get(0)).outerWidth(true)*bc.length;a8=ba.height();c=parseFloat(ba.css("left"))||0;f=parseFloat(ba.css("top"))||0;return true},function(){a5=0},function(){a5=0})}H.find(".ws_thumbs a").each(function(bb,bc){ay(bc,0,0,function(bd){return!!aF(bd.target).parents(".ws_thumbs").get(0)},function(bd){a5=1},function(bd){aO(bd,aF(bc).index())})})}if(av.length){var k=av.find(">div");var a3=aF("a",av);var aV=a3.find("IMG");if(aV.length){var aX=aF('<div class="ws_bulframe"/>').appendTo(k);var a4=aF("<div/>").css({width:aV.length+1+"00%"}).appendTo(aF("<div/>").appendTo(aX));aV.appendTo(a4);aF("<span/>").appendTo(aX);var aY=-1;function a7(bd){if(bd<0){bd=0}if(b){b.loadTtip(bd)}aF(a3.get(aY)).removeClass("ws_overbull");aF(a3.get(bd)).addClass("ws_overbull");aX.show();var be={left:a3.get(bd).offsetLeft-aX.width()/2,"margin-top":a3.get(bd).offsetTop-a3.get(0).offsetTop+"px","margin-bottom":-a3.get(bd).offsetTop+a3.get(a3.length-1).offsetTop+"px"};var bc=aV.get(bd);var bb={left:-bc.offsetLeft+(aF(bc).outerWidth(true)-aF(bc).outerWidth())/2};if(aY<0){aX.css(be);a4.css(bb)}else{if(!document.all){be.opacity=1}aX.stop().animate(be,"fast");a4.stop().animate(bb,"fast")}aY=bd}a3.hover(function(){a7(aF(this).index())});var aU;k.hover(function(){if(aU){clearTimeout(aU);aU=0}a7(aY)},function(){a3.removeClass("ws_overbull");if(document.all){if(!aU){aU=setTimeout(function(){aX.hide();aU=0},400)}}else{aX.stop().animate({opacity:0},{duration:"fast",complete:function(){aX.hide()}})}});k.click(function(bb){aO(bb,aF(bb.target).index())})}}}function aB(c){aF("A",al).each(function(aX){if(aX==c){var k=aF(this);k.addClass("ws_selthumb");if(!at){var aY=al.find(">div"),aW=k.position()||{},aZ;aZ=aY.position()||{};for(var aV=0;aV<=1;aV++){var a0=al[aV?"width":"height"](),aU=aY[aV?"width":"height"](),f=a0-aU;if(f<0){if(aV){aY.stop(true).animate({left:-Math.max(Math.min(aW.left,-aZ.left),aW.left+k.outerWidth(true)-al.width())})}else{aY.stop(true).animate({top:-Math.max(Math.min(aW.top,0),aW.top+k.outerHeight(true)-al.height())})}}else{aY.css(aV?"left":"top",f/2)}}}}else{aF(this).removeClass("ws_selthumb")}})}function aS(c){aF("A",av).each(function(f){if(f==c){aF(this).addClass("ws_selbull")}else{aF(this).removeClass("ws_selbull")}})}if(aj.caption){var D=aF("<div class='ws-title' style='display:none'></div>");var aC=aF("<div class='ws-title' style='display:none'></div>");aF("<div class='ws-title-wrapper'>").append(D,aC).appendTo(aq);D.bind("mouseover",function(c){if(!ap||!ap.playing()){ad()}});D.bind("mouseout",function(c){if(!ap||!ap.playing()){K()}})}var U;var aa={none:function(f,c,aU,k){if(U){clearTimeout(U)}U=setTimeout(function(){c.html(k).show()},f.noDelay?0:f.duration/2)}};if(!aa[aj.captionEffect]){aa[aj.captionEffect]=window["ws_caption_"+aj.captionEffect]}function N(c){var f=aL[c],aU=aF("img",f).attr("title"),k=aF(f).data("descr");if(!aU.replace(/\s+/g,"")){aU=""}return(aU?"<span>"+aU+"</span>":"")+(k?"<br><div>"+k+"</div>":"")}function aR(f,aV,c){var aU=N(f);var aW=N(aV);var k=aj.captionEffect;(aa[aF.type(k)]||aa[k]||aa.none)(aF.extend({$this:H,curIdx:x,prevIdx:au,noDelay:c},aj),D,aC,aU,aW,i)}if(av.length||al.length){I()}W(x,au,true);if(aj.stopOnHover){this.bind("mouseover",function(c){if(!ap||!ap.playing()){ad()}B=true});this.bind("mouseout",function(c){if(!ap||!ap.playing()){K()}B=false})}if(!ap||!ap.playing()){K()}var u=H.find("audio").get(0),l=aj.autoPlay;if(u){aF(u).insertAfter(H);if(window.Audio&&u.canPlayType&&u.canPlayType("audio/mp3")){u.loop="loop";if(aj.autoPlay){u.autoplay="autoplay";setTimeout(function(){u.play()},100)}}else{u=u.src;var Z=u.substring(0,u.length-/[^\\\/]+$/.exec(u)[0].length);var j="wsSound"+Math.round(Math.random()*9999);aF("<div>").appendTo(H).get(0).id=j;var J="wsSL"+Math.round(Math.random()*9999);window[J]={onInit:function(){}};swfobject.createSWF({data:Z+"player_mp3_js.swf",width:"1",height:"1"},{allowScriptAccess:"always",loop:true,FlashVars:"listener="+J+"&loop=1&autoplay="+(aj.autoPlay?1:0)+"&mp3="+u},j);u=0}H.bind("stop",function(){l=false;if(u){u.pause()}else{aF(j).SetVariable("method:pause","")}});H.bind("start",function(){if(u){u.play()}else{aF(j).SetVariable("method:play","")}})}y.wsStart=ar;y.wsRestart=K;y.wsStop=aA;var aI=aF('<a href="#" class="ws_playpause"><span><i></i><b></b></span></a>');function a(){aj.autoPlay=!aj.autoPlay;if(!aj.autoPlay){y.wsStop();aI.removeClass("ws_pause");aI.addClass("ws_play")}else{K();aI.removeClass("ws_play");aI.addClass("ws_pause");if(ap){ap.start(x)}}}if(aj.playPause){if(aj.autoPlay){aI.addClass("ws_pause")}else{aI.addClass("ws_play")}aI.click(function(){a();return false});O.append(aI)}if(aj.keyboardControl){aF(document).on("keyup",function(c){switch(c.which){case 32:a();break;case 37:aO(c,x-1,0);break;case 39:aO(c,x+1,1);break}})}if(aj.scrollControl){H.on("DOMMouseScroll mousewheel",function(c){if(c.originalEvent.wheelDelta<0||c.originalEvent.detail>0){aO(null,x+1,1)}else{aO(null,x-1,0)}})}if(typeof wowsliderVideo=="function"){var F=aF('<div class="ws_video_btn"><div></div></div>').appendTo(aq);ap=new wowsliderVideo(H,aj,n);if(typeof $f!="undefined"){ap.vimeo(true);ap.start(x)}window.onYouTubeIframeAPIReady=function(){ap.youtube(true);ap.start(x)};F.on("click touchend",function(){if(!az){ap.play(x,1)}})}var aT=0;if(aj.fullScreen){var w=(function(){var aW=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenchange"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitfullscreenchange"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitfullscreenchange"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozfullscreenchange"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","MSFullscreenChange"]],f={},aV,aU;for(var k=0,c=aW.length;k<c;k++){aV=aW[k];if(aV&&aV[1]in document){for(k=0,aU=aV.length;k<aU;k++){f[aW[0][k]]=aV[k]}return f}}return false})();if(w){function an(){return!!document[w.fullscreenElement]}var aD=0;function ak(){if(/WOW Slider/g.test(C)){return}if(an()){document[w.exitFullscreen]()}else{aD=1;H.wrap("<div class='ws_fs_wrapper'></div>").parent()[0][w.requestFullscreen]()}}document.addEventListener(w.fullscreenchange,function(c){if(an()){aT=1;aP()}else{if(aD){aD=0;H.unwrap()}aT=0;aP()}if(!aQ[0].step){n()}});aF("<a href='#' class='ws_fullscreen'></a>").on("click",ak).appendTo(aq)}}function aP(){var aY=aT?4:aj.responsive,c=aq.width()||aj.width,aU=aF([r,aE.find("img"),aM.find("img")]);if(aY>0&&!!document.addEventListener){H.css("fontSize",Math.max(Math.min((c/aj.width)||1,1)*10,4))}if(aY==2){var f=Math.max((c/aj.width),1)-1;aU.each(function(){aF(this).css("marginTop",-aj.height*f/2)})}if(aY==3){var aZ=window.innerHeight-(H.offset().top||0),aW=aj.width/aj.height,aX=aW>c/aZ;H.css("height",aZ);aU.each(function(){aF(this).css({width:aX?"auto":"100%",height:aX?"100%":"auto",marginLeft:aX?((c-aZ*aW)/2):0,marginTop:aX?0:((aZ-c/aW)/2)})})}if(aY==4){var aV=window.innerWidth,k=window.innerHeight,aW=(H.width()||aj.width)/(H.height()||aj.height);H.css({maxWidth:aW>aV/k?"100%":(aW*k),height:""});aU.each(function(){aF(this).css({width:"100%",marginLeft:0,marginTop:0})})}else{H.css({maxWidth:"",top:""})}}if(aj.responsive){aF(aP);aF(window).on("load resize",aP)}return this};jQuery.extend(jQuery.easing,{easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeOutElastic1:function(k,l,i,h,g){var f=Math.PI/2;var m=1.70158;var e=0;var j=h;if(l==0){return i}if((l/=g)==1){return i+h}if(!e){e=g*0.3}if(j<Math.abs(h)){j=h;var m=e/4}else{var m=e/f*Math.asin(h/j)}return j*Math.pow(2,-10*l)*Math.sin((l*g-m)*f/e)+h+i},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a}});jQuery.fn.wowSlider.support={transform:(function(){if(!window.getComputedStyle){return false}var b=document.createElement("div");document.body.insertBefore(b,document.body.lastChild);b.style.transform="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";var a=window.getComputedStyle(b).getPropertyValue("transform");b.parentNode.removeChild(b);if(a!==undefined){return a!=="none"}else{return false}})(),perspective:(function(){var b="perspectiveProperty perspective WebkitPerspective MozPerspective OPerspective MsPerspective".split(" ");for(var a=0;a<b.length;a++){if(document.body.style[b[a]]!==undefined){return!!b[a]}}return false})(),transition:(function(){var a=document.body||document.documentElement,b=a.style;return b.transition!==undefined||b.WebkitTransition!==undefined||b.MozTransition!==undefined||b.MsTransition!==undefined||b.OTransition!==undefined})()};(function(a){function b(l,m,n,f,h,j,o){if(typeof l==="undefined"){return}if(!l.jquery&&typeof l!=="function"){m=l.from;n=l.to;f=l.duration;h=l.delay;j=l.easing;o=l.callback;l=l.each||l.obj}var k="num";if(l.jquery){k="obj"}if(typeof l==="undefined"||typeof m==="undefined"||typeof n==="undefined"){return}if(typeof h==="function"){o=h;h=0}if(typeof j==="function"){o=j;j=0}if(typeof h==="string"){j=h;h=0}f=f||0;h=h||0;j=j||0;o=o||0;function i(s){var t=new Date().getTime()+h;var r=function(){var v=new Date().getTime()-t;if(v<0){v=0}var u=f?(v/f):1;if(u<1){s(u);requestAnimationFrame(r)}else{q(1)}};r();function q(u){cancelAnimationFrame(u);s(1);if(o){o()}}return{stop:q}}function g(s,r,q){return s+(r-s)*q}function e(q,r){if(r=="linear"){return q}if(r=="swing"){return a.easing[r]?a.easing[r](q):q}return a.easing[r]?a.easing[r](1,q,0,1,1,1):q}var c={opacity:0,top:"px",left:"px",right:"px",bottom:"px",width:"px",height:"px",translate:"px",rotate:"deg",rotateX:"deg",rotateY:"deg",scale:0};function p(x,w,v,r){if(typeof w==="object"){var q={};for(var t in w){q[t]=p(x,w[t],v[t],r)}return q}else{var s=["px","%","in","cm","mm","pt","pc","em","ex","ch","rem","vh","vw","vmin","vmax","deg","rad","grad","turn"];var u="";if(typeof w==="string"){u=w}else{if(typeof v==="string"){u=v}}u=(function(A,z,B){for(var y in z){if(A.indexOf(z[y])>-1){return z[y]}}if(c[B]){return c[B]}return""}(u,s,x));w=parseFloat(w);v=parseFloat(v);return g(w,v,r)+u}}var d=i(function(r){r=e(r,j);if(k==="num"){var q=g(m,n,r);l(q)}else{var q={transform:""};for(var s in m){if(typeof c[s]!=="undefined"){var t=p(s,m[s],n[s],r);switch(s){case"translate":q.transform+=" translate3d("+t[0]+","+t[1]+","+t[2]+")";break;case"rotate":q.transform+=" rotate("+t+")";break;case"rotateX":q.transform+=" rotateX("+t+")";break;case"rotateY":q.transform+=" rotateY("+t+")";break;case"scale":if(typeof t==="object"){q.transform+=" scale("+t[0]+", "+t[1]+")"}else{q.transform+=" scale("+t+")"}break;default:q[s]=t}}}if(q.transform===""){delete q.transform}l.css(q)}});return d}window.wowAnimate=b}(jQuery));if(!Date.now){Date.now=function(){return new Date().getTime()}}(function(){var d=["webkit","moz"];for(var b=0;b<d.length&&!window.requestAnimationFrame;++b){var a=d[b];window.requestAnimationFrame=window[a+"RequestAnimationFrame"];window.cancelAnimationFrame=(window[a+"CancelAnimationFrame"]||window[a+"CancelRequestAnimationFrame"])}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var c=0;window.requestAnimationFrame=function(g){var f=Date.now();var e=Math.max(c+16,f);return setTimeout(function(){g(c=e)},e-f)};window.cancelAnimationFrame=clearTimeout}}());function ws_caption_parallax(d,c,h,f,g,b){var e=jQuery;c.parent().css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"});c.html(f).css("width","100%").stop(1,1);h.html(g).css("width","100%").stop(1,1);(function a(n,j,v,r,s,w){var p=15;var m=d.$this.width();p*=m/100;function q(z,A){return z.css(d.support.transform?{transform:"translate3d("+A+"px,0px,0px)"}:{marginLeft:A}).css("display","inline-block")}if(d.prevIdx==d.curIdx){q(n,0).fadeIn(s/3);q(e(">div,>span",n),0)}else{var l=e(">div",n);var y=e(">div",j);var o=e(">span",n);var i=e(">span",j);var u=p+m*(w?-1:1),x=p+m*(w?1:-1),t=(w?-1:1)*p;q(n,u).show();q(j,0).show();q(l,t);q(y,0);q(o,2*t);q(i,0);wowAnimate(function(z){z=e.easing.swing(z);q(n,(1-z)*u);q(j,z*x)},0,1,d.duration);var k=0.8;wowAnimate(function(z){z*=k;q(o,(1-z)*2*t);q(l,(1-z)*t);q(i,z*(-2*t));q(y,z*(-t))},0,1,d.duration,function(){i.css("opacity",0);y.css("opacity",0);wowAnimate(function(z){z=e.easing.easeOutCubic(1,z,0,1,1,1);var A=(1-k)*2*t,C=(1-k)*t,B=k*(-2*t),D=k*(-t);q(o,(1-z)*A);q(l,(1-z)*C);q(i,(1-z)*B+z*(-2*t));q(y,(1-z)*D+z*(-t))},0,1,(/Firefox/g.test(navigator.userAgent)?1500:d.delay))})}}(c,h,f,g,d.captionDuration,b))};;VHV.setAllLinks('3rdparty/jQuery/wowslider/wowslider.js',2);VHV.allOrderedLinks.push('3rdparty/jQuery/wowslider/wowslider.js');;VHV.Content.Listing=class extends VHV.Module{filters={}
orderBy='';type=''
pagingSelector=false
pageNo=1
itemsPerPage=20
numDisplayEntries=5
totalItems=0
nextText='&raquo;'
prevText='&laquo;'
startText='&laquo;&laquo;'
endText='&raquo;&raquo;'
linkTo='javascript:void(0);'
dontGoTop=false
fields=[]
comboboxes={}
showControl=true
placeHolderText=true
init(success){let that=this;if(this.linkTo==='javascript:void(0);'){}
if(!this.pagingSelector){this.pagingSelector='.pagination'+this.id+',#pagination'+this.id;}
VHV.load('3rdparty/jQuery/jquery.pagination/jquery.pagination.js',function(){VHV.Module.prototype.init.call(that,success);});that.$().on('click','#import-excel'+that.id,function(){let div=$('#import-taskqueue'+that.id),params=div.data();params.filters=that.filters;params.options=that.options;if(that.declarationId){if(params.filters.length===0){params.filters={};}
params.filters.declarationId=that.declarationId;}
div.loadModule('Content.Listing',$.extend(params,$(this).data()));div.show();return false;}).on('click','#export-button'+that.id,function(){let service=$(this).data('exportMethod');if(!service){return;}
let exportLogs=localStorage.getItem('exportExcelLogs');if(exportLogs){exportLogs=JSON.parse(exportLogs);}else{exportLogs={};}
if(exportLogs[service]&&exportLogs[service]>VHV.getTime()-60){VHV.alert("Xuất excel tần suất tối đa là 1 lần trong 1 phút! Bạn vui lòng chờ thêm.",{delay:5000});return;}
let params={filters:that.filters?that.filters:{},options:that.options?that.options:{}};if(that.declarationId){if(params.filters.length===0){params.filters={};}
params.filters.declarationId=that.declarationId;}
VHV.Model(service)(params,function(response){if(!response){return;}
if(typeof(response)==='string'){response=JSON.parse(response);}
if(response.status==='SUCCESS'&&response.taskId){exportLogs[service]=VHV.getTime();localStorage.setItem('exportExcelLogs',JSON.stringify(exportLogs));if(response.isExported){location='/api/Data/TaskQueue/Account/TaskQueue/download?site='+VHV.site+'&id='+response.taskId+'&securityToken='+VHV.securityToken;}else{VHV.taskQueueId=response.taskId;$('#popup-button'+that.id).click();}}else{VHV.alert(response.message||'{\'%s thất bại\', \'Xuất dữ liệu\'}',{type:'error',delay:5000});}});}).on('click','#popup-button'+that.id,function(){let div=$('#popup-taskqueue'+that.id);if(div.is(':empty')){div.loadModule('Content.Listing',{layout:'Data.TaskQueue.recentTaskPopup',service:'Data.TaskQueue.Account.TaskQueue.selectAll',taskQueueId:VHV.taskQueueId,'filters[isDownloaded]':0,menuId:that.menuId||'',gridModuleParentId:that.id});}else{let moduleId=$('.ModuleWrapper:first','#popup-taskqueue'+that.id).attr('id').replace('module','');if(moduleId&&VHV.App.modules[moduleId]){VHV.App.modules[moduleId].reload({taskQueueId:VHV.taskQueueId});}}
div.show();return false;});if(that.pageTitle){setTimeout(function(){that.changePageTitle(that.pageTitle);},500);}}
initEvents(){this._startTime=(new Date()).getTime();let that=this,checkAll=this.$('input.x-check-all'),filterForm=$('#form'+this.id);if(checkAll.length){let xgroupId=checkAll.data('xGroup');checkAll[(this.$('input[data-x-group="'+xgroupId+'"]').length>1)?'show':'hide']();this.$('input[data-x-group="'+xgroupId+'"],input.x-check-all').click(function(){let count=that.$((that.$('.table-fixed-column').length?'.table-fixed-column ':'')
+'input[data-x-group="'+xgroupId+'"]:checked').length;that.$('.checkBoxTotalCount').text(VHV.numberFormat(count));});}
this.$('input[type="checkbox"][data-x-group]').click(function(){setTimeout(function(){that.$('.selected-checkbox-count').text(that.$('table:not(.table-fixed-column) input[type="checkbox"][data-x-group]:checked:not(.x-check-all)').length);},50);});$(document).click(function(event){if(!$(event.target).closest(".action-exel,.popup-taskqueue").length){$('#popup-taskqueue'+that.id).hide();}});if(filterForm.length){filterForm.on('submit',function(e){e.preventDefault();e.stopPropagation();let filters=that.filters?that.filters:{},checkboxes={};that.$('#form'+that.id+' [name^="filters["]').each(function(){if(['radio','checkbox'].indexOf(this.type)!==-1){checkboxes[this.name]=1;return;}
let name=$(this).attr('name').replace('filters[','').replace(']',''),value=$(this).val().trim();if(name){if(value){filters[name]=value;}else{delete filters[name];}}});for(let i in checkboxes){let values=[],name=i.replace('filters[','').replace(']','');that.$('#form'+that.id+' [name="'+i+'"]:checked').each(function(){values.push(this.value);})
if(!values.length){delete filters[name];}else{filters[name]=values.join(',');}}
that.filters=filters;that.reload();$('body>.select2-container--default').remove();return false;});$('.toggle-filter'+this.id).click(function(){$(this).next().toggleClass('active');});filterForm.click(function(){that._formClicked=1;});filterForm.find('select[name^="filters["]').change(function(){if((!VHV.Content.Form||!VHV.Content.Form.isCascading)&&(new Date()).getTime()-that._startTime>500&&that._formClicked){let serviceData=$(this).data('serviceData');if(!this.onchange||(serviceData&&!serviceData.onchange)){filterForm.submit();}}});}
$(document).click(function(event){if(!$(event.target).closest("#import-excel"+that.id+",#import-taskqueue"+that.id).length){$('#import-taskqueue'+that.id).hide();}});that.$('input[data-x-suggest]').each(function(){if(this.name&&$(this).data('value')){let hidden=$('<input name="'+this.name+'" type="hidden">');$(this).before(hidden);this.name='';hidden.val($(this).data('value'));}});if(this.pagingSelector){let pager=$(this.pagingSelector);if(pager.length>0){this.itemsPerPage=parseInt(this.itemsPerPage);this.totalItems=parseInt(this.totalItems);if(this.itemsPerPage<this.totalItems){let options={callback:function(currentPage){that.reload({pageNo:currentPage+1});if(!that.dontGoTop){$('html, body').animate({scrollTop:$('#module'+that.id).offset().top},200);}
setTimeout(function(){$(window).scroll();},50);},current_page:this.pageNo-1,items_per_page:this.itemsPerPage,num_display_entries:this.numDisplayEntries,next_text:this.nextText,prev_text:this.prevText,start_text:this.startText,end_text:this.endText,link_to:'javascript:void(0);',prev_show_always:this.showControl?true:false,next_show_always:this.showControl?true:false};pager.show();VHV.load('3rdparty/jQuery/jquery.pagination/jquery.pagination.js',function(){pager.pagination(that.totalItems,options);});}else{pager.hide();}}}
let cookieId='List'+VHV.pageId.replace(/\./g,'')+that.id;localStorage.removeItem(cookieId+'.bs.table.sortOrder');if(that.$(".scroll-bar").length){$(window).resize(function(){if($(window).width()<=768){VHV.load('3rdparty/jQuery/malihu-scrollbar/jquery.mCustomScrollbar.css');VHV.load('3rdparty/jQuery/malihu-scrollbar/jquery.mCustomScrollbar.concat.min.js',function(){that.$('.scroll-bar').mCustomScrollbar({theme:'minimal-dark',axis:'yx'});});}else{VHV.load('3rdparty/jQuery/malihu-scrollbar/jquery.mCustomScrollbar.css');VHV.load('3rdparty/jQuery/malihu-scrollbar/jquery.mCustomScrollbar.concat.min.js',function(){that.$('.scroll-bar').mCustomScrollbar({theme:'minimal-dark'});});}});}
this.$('.total-items'+this.id).text(VHV.numberFormat(this.totalItems));if(this.parent?.targetForm&&this.parent.targetForm.id==this.id){this.parent.$('.total-items'+this.parent.id).text(VHV.numberFormat(this.totalItems));}
if(that.$(".bootstrap-table").length){VHV.load('3rdparty/bootstrap-table/dist/bootstrap-table.min.css','3rdparty/bootstrap-table/dist/extensions/sticky-Base/bootstrap-table-sticky-Base.min.css','3rdparty/bootstrap-table/dist/extensions/fixed-columns/bootstrap-table-fixed-columns.css','3rdparty/bootstrap-table/dist/extensions/dragtable/dragtable.css','3rdparty/jQuery/jqueryui/themes/smoothness/jquery-ui.css','3rdparty/bootstrap-table/dist/extensions/jquery-resizable-columns/jquery.resizableColumns.css');VHV.load('3rdparty/bootstrap-table/dist/bootstrap-table.min.js','3rdparty/jQuery/jqueryui/jquery-ui.min.js',function(){VHV.load('3rdparty/bootstrap-table/dist/locale/bootstrap-table-vi-VN.min.js','3rdparty/bootstrap-table/dist/locale/bootstrap-table-en-US.min.js','3rdparty/bootstrap-table/dist/extensions/jquery-resizable-columns/jquery.resizableColumns.min.js','3rdparty/bootstrap-table/dist/extensions/sticky-Base/bootstrap-table-sticky-Base.min.js','3rdparty/bootstrap-table/dist/extensions/cookie/bootstrap-table-cookie.min.js','3rdparty/bootstrap-table/dist/extensions/reorder-columns/bootstrap-table-reorder-columns.min.js','3rdparty/bootstrap-table/dist/extensions/dragtable/jquery.dragtable.js','3rdparty/bootstrap-table/dist/extensions/fixed-columns/bootstrap-table-fixed-columns.js','3rdparty/bootstrap-table/dist/extensions/resizable/bootstrap-table-resizable.min.js','3rdparty/bootstrap-table/dist/extensions/key-events/bootstrap-table-key-events.min.js','3rdparty/bootstrap-table/dist/extensions/editable/bootstrap-table-editable.min.js','3rdparty/bootstrap-table/dist/extensions/mobile/bootstrap-table-mobile.min.js','3rdparty/bootstrap-table/dist/extensions/tableExport.jquery.plugin/tableExport.min.js','3rdparty/bootstrap-table/dist/extensions/export/bootstrap-table-export.min.js',function(){that.$("table.bootstrap-table").each(function(){let table=$(this),sortname=(that.orderBy?.split)?that.orderBy.split(' '):[],cookieId='List'+VHV.pageId.replace(/\./g,'')+that.id,height=table.data('stickyHeaderOffsetY');table.removeClass('bootstrap-table');if(table.data('bootstrap.table'))return;if(!height)height=$('Base.f-display').outerHeight();if(!height)height=$('.app-Base').height();if(!height){height=$('.space2:first').height();if(height)height-=3;}
if(!height)height=$('.cms-Base').parent().height();if(!height)height=$('.ant-layout-Base-wrapper').height();if(!height)height=$('.navbar-fixed-top').height();if(!height)height=113;height=Math.round(height);localStorage.removeItem(cookieId+'.bs.table.sortOrder');localStorage.removeItem(cookieId+'.bs.table.sortName');try{let tableHeight=table.data('height')?table.data('height'):'',width=table.parent().width();if(tableHeight){if(tableHeight==='auto'){tableHeight=window.innerHeight-table.offset().top-50;}}else{tableHeight=null;}
table.attr('id','bootstrap-table'+that.id).bootstrapTable({sidePagination:(table.data('pagination')=='true'||table.data('pagination')===true)?'client':'server',sortName:sortname[0]?sortname[0]:undefined,stickyHeader:(table.data('stickyHeader')=='false')?false:true,stickyHeaderOffsetY:(table.data('stickyHeader')=='false')?null:(height+'px'),mobileResponsive:table.data('noMobile')?false:true,checkOnInit:(table.data('checkOnInit')=='false')?false:true,search:false,height:tableHeight?tableHeight:'',pagination:(table.data('pagination')=='true'||table.data('pagination')===true)?true:false,showColumns:(table.data('showColumns')=='false'||table.data('showColumns')===false)?false:true,showExport:(table.data('showExport')=='true'||table.data('showExport')===true)?true:false,resizable:table.data('resizable')=='true'?true:false,fixedColumns:table.data('fixedNumber')?true:false,fixedNumber:table.data('fixedNumber')?table.data('fixedNumber'):'',cookieStorage:'localStorage',cookie:true,cookieIdTable:cookieId,sortOrder:sortname[1]?sortname[1].toLowerCase():'asc',onSort:function(name,order){if(!(table.data('pagination')=='true'||table.data('pagination')===true)){that.orderBy=name+' '+order.toUpperCase();that.reload();}
return true;},});if(table.data('fixedNumber')){table.parents('.fixed-table-body:first').css('overflow-x','auto').css('overflow-y','auto');}
table.addClass('bootstrap-table');that.$('.text-right #pagination'+that.id+':last').parent().removeClass('text-right');if(width>2000){$('.box-body-controls').append($('.box-tools > *'));$('.box-body-controls > .pull-right').removeClass('pull-right').addClass('pull-left');$('body').css({width:width,overflow:'auto'});}}catch(e){console.log(e);}
if(that.$('.box-body-controls:first').length&&!that.$('.box-body-controls:first .fixed-table-toolbar').length){table.parents('.bootstrap-table:first').find('.fixed-table-toolbar:first').addClass('pull-right').appendTo(that.$('.box-body-controls:first')).find('>div').css('margin-top',0)}else{table.parents('.bootstrap-table:first').find('.fixed-table-toolbar:first').remove();}});});});}
if(this.isMainModule){if(!this._lastUrl){this._lastUrl=location.href;let i=this._lastUrl.indexOf('#');if(i!==-1){this._lastUrl=this._lastUrl.substr(0,i);}
if(this._lastUrl.indexOf('?')===-1){this._lastUrl+='?';}
window.onpopstate=function(event){if(event.state?.lastUrl){$((VHV.inheritPageId==='Admin.base')?'.region-full-content':'#whole-page').load(event.state.lastUrl+'&inAppRequest=1');document.title=event.state.title;return;}
if(!event.state&&VHV.lastHistoryState){VHV.lastHistoryState=false;if(that.parent?.showPanel){if($('.main-sidebar').length&&$('.main-sidebar').hasClass('sidebar-collapse')){$('.main-sidebar').removeClass('sidebar-collapse');}
that.parent.showPanel(that);}
if(that.parent){that.parent.restoreForm({});}
setTimeout(function(){that.reload('current');},500);}else if(event.state?.moduleId){let m=VHV.App.modules[event.state.moduleId];if(!event.state.action||event.state.action==='search'){let found=false;if(m._filterKeys){for(let i=0;i<m._filterKeys.length;i++){let k=m._filterKeys[i];if(event.state.options[k]){m[k]=event.state.options[k];found=true;}}}
if(found){m._dontAddHistoryState=1;if(m.parent?.showPanel&&event.state.options.filters){m.parent.filters=event.state.options.filters;m.parent.disableReload=1;m.parent.restoreForm(event.state.options);m.parent.restoreForm(event.state.options.filters);delete m.parent.disableReload;}
if(m.parent?.showPanel){if($('.main-sidebar').length&&$('.main-sidebar').hasClass('sidebar-collapse')){$('.main-sidebar').removeClass('sidebar-collapse');}
m.parent.showPanel(m);}
setTimeout(function(){m.reload('current');},500);}}else if(event.state.options){m[event.state.action](event.state.options);}}};}}
$(function(){$('[data-toggle="tooltip"]').tooltip();});setTimeout(function(){if($('#region-pathway-last-item').length){VHV.load('CMS.Admin.Pathway',function(){VHV.CMS.Admin.Pathway.getPathwayItem()});}},100);}
sort(column){let that=this;if(typeof(this.fields[column])=='undefined'){this.fields[column]=0;}else{this.fields[column]=1-this.fields[column];}
if(this.fields[column]==1)
this.orderBy=column+' asc';else
this.orderBy=column+' desc';this.reload({},function(){if(that.fields[column]==1)
$('#sort-icon-'+column+that.id).attr('src','App/images/asc.gif');else
$('#sort-icon-'+column+that.id).attr('src','App/images/desc.gif');});}
_getFilterKeys(){let filterKeys=['orderBy','itemsPerPage','pageNo','filters'];if(this.parent?.targetForm){let form=$('#form'+this.parent.id);if(form.length){form.find('[name]').each(function(){if(this.name&&!this.name.includes('[')&&filterKeys.indexOf(this.name)===-1){filterKeys.push(this.name);}});}}
return filterKeys;}
afterReload(){if(!this.totalItems&&this.pageNo>1){this.pageNo=1;this.reload();return;}
if(this.isMainModule){if(this._dontAddHistoryState){this._dontAddHistoryState=0;}else if(window.history.pushState){let data={},url=this._lastUrl?this._lastUrl.split('&'):[];if(!this._filterKeys){this._filterKeys=this._getFilterKeys();}
if(url.length){for(let i in url){for(let j=0;j<this._filterKeys.length;j++){if(!url[i]||url[i].indexOf(this._filterKeys[j]+'=')===0||url[i].indexOf(this._filterKeys[j]+'[')===0){delete url[i];break;}}}
url=url.join('&');for(let i=0;i<this._filterKeys.length;i++){let v=this[this._filterKeys[i]];if(v){data[this._filterKeys[i]]=v;if(typeof(v)==='object'){for(let j in v){let v2=v[j];if(typeof(v2)!='object'){url+='&'+this._filterKeys[i]+'['+j+']='+encodeURIComponent(v2);}}}else{url+='&'+this._filterKeys[i]+'='+encodeURIComponent(v);}}}
url=url.replace(/\&{2,10}/g,'&');if(url!=location.href){VHV.lastHistoryState='search';window.history.pushState({moduleId:this.id,action:'search',options:data},document.title,url);}}}}
$(window).scroll();}
initFilters(){let that=this;for(let i in this.comboboxes){(function(x){$('#filter_'+x+this.id+',.filter_'+x).each(function(){for(let j in that.comboboxes[x]){this.add(new Option(that.comboboxes[x][j].name,that.comboboxes[x][j].id,false,false),null);}}).val(VHV.request(x)).change(function(){that.addCondition(x,$(this).val());that.reload();});})(i);}}
addFilter(name,value,multi,filterName){this.pageNo=1;if(typeof(filterName)==='undefined'){filterName='filters';}
if(multi){if(this.filters[filterName+'['+name+']']){if(this.filters[filterName+'['+name+']'].indexOf(value)!=-1){return;}
this.filters[filterName+'['+name+']']+='||'+value;return;}}
if(typeof(this.filters)!='undefined'){this.filters[filterName+'['+name+']']=value;}}
removeFilter(name,multi,value,filterName){if(typeof(filterName)==='undefined'){filterName='filters';}
if(multi){this.filters[filterName+'['+name+']']=this.filters[filterName+'['+name+']'].replace('||'+value,'').replace(value+'||','');if(this.filters[filterName+'['+name+']']!=value){return;}}
delete this.filters[filterName+'['+name+']'];}
addCondition(name,value,multi){this.addFilter(name,value,multi,'condition');}
removeCondition(name,multi,value){this.removeFilter(name,multi,value,'condition');}
orderFillter(value){$('.content-order'+this.id).load(this.submitURL({cmd:'redrawList',status:value}))}
success(){this.initEvents();}
sortBy(field,defaultDir){if(typeof(defaultDir)=='undefined'){defaultDir='asc';}
if(this.orderBy==(field+' '+defaultDir)){defaultDir=(defaultDir==='asc')?'desc':'asc';}
this.orderBy=field+' '+((defaultDir==='asc')?'asc':'desc');this.reload();}
importExcel(options){if(!options.layout){options.layout='CMS.importExcel';}
options.xPopup='backdrop:\'static\',  width:540';if(!options.submitService){options.submitService=VHV.changeTail(this.service,'importExcel');}
options.parentModuleId=this.id;return this.editForm(options);}
exportExcel(options){let that=this;if(this.filters&&VHV.sizeof(this.filters)){options.filters=$.extend(options.filters?options.filters:{},this.filters);}
if(this.currentDeclId){options.currentDeclId=this.currentDeclId;}
if(this.orderBy&&typeof(this.orderBy)==='string'){options.orderBy=this.orderBy;}
if(this.type){options.type=this.type;}
location=VHV.Model(options.exportMethod?options.exportMethod:VHV.changeTail(this.service,'exportExcel')).url(options);}
exportWord(options){let that=this;$('#module'+that.id).append('<div class="export-popup'+that.id+'"></div>');VHV.Model('Software.Office.ExportWord.export')({objectId:options.objectId?options.objectId:'""',templateId:options.templateId?options.templateId:'""'},function(response){if(typeof(response)==='string'){response=JSON.parse(response);}
if(response.layout){$('.export-popup'+that.id).html(response.layout);}else{if(response.url){location=VHV.Model(response.url).url(response.params?response.params:{});}}});}
editForm(options){let that=this;options.module='Content.Form';if(!options.layout||this.notLayout){if(options.type&&(options.type.startsWith('Article')||options.type.startsWith('Product'))){options.layout=(this.editLayout?this.editLayout:this.layout.replace('.list','').concat(options.type.replace('Article','').replace('Product','').replace('Account',''),'.edit'));}else{options.layout=(this.editLayout?this.editLayout:VHV.changeTail(this.layout,'edit'));}}
if(!options.submitService){options.submitService=(this.submitService?this.submitService:VHV.changeTail(this.service,'edit'));}
if(!options.service){options.service=VHV.changeTail(this.service,'select');}
if(!options.type&&(this.type||this.itemType)){options.type=(this.type?this.type:this.itemType);}
if(options.id){options.itemId=options.id;}
if(!options.gridModuleParentId){options.gridModuleParentId=that.id;}
if(this.filters){for(let i in this.filters){let v=this.filters[i];if((typeof(v)==='string')&&!options[i]&&['accountId','groupId','type','site','page','module','pageNo','itemsPerPage','orderBy'].indexOf(i)===-1){options[i]=v;}}}
if(!that.parent||!that.parent.loadModule){if(!options.xModal){VHV.openModal(options);}}else{VHV.ExecQueue.add(function(){if(!options.xPopup){if(window.history.pushState&&location.href.indexOf('clickEditForm=')===-1){let url=location.href;if(url.indexOf('?')===-1){url+='?';}
url+='&clickEditForm='+options.id;VHV.lastHistoryState='editForm';window.history.pushState({moduleId:that.id,action:'editForm',options:options},document.title,url);}
that.parent.loadModule('editModule',options);if($('#commentModule'+that.parent.id).length||$('#historyModule'+that.parent.id).length){if(that.parent.isMobile){$('#detailModule'+that.parent.id).hide();$('#editModule'+that.parent.id).show();$('body').addClass('overhidden');}else{if(options.itemId){$('#editModule'+that.parent.id).next().show();if($('#commentModule'+that.parent.id).length){that.parent.loadModule('commentModule',{layout:'CMS.Article.Comment.commentDetail',service:'Content.Comment.selectAll',objectId:options.id?options.id:0,orderBy:"updateTime DESC",itemsPerPage:8,parentType:options.type});}
if($('#historyModule'+that.parent.id).length){that.parent.loadModule('historyModule',{layout:'CMS.reviewHistory',service:'CMS.ObjectLog.selectAll','filters[objectId]':options.id?options.id:0,'filters[objectType]':options.type,orderBy:"createdTime DESC",itemsPerPage:8});}}else{$('#editModule'+that.parent.id).next().hide();}}}}else{that.parent.loadModule('popupModule',options);}
if(options.itemId){options.id=options.itemId;}},function(){return that.parent;});}}
viewDetail(options){let that=this;options.module='Content.Form';if(!options.layout||this.notLayout){if(options.type&&(options.type.indexOf('Article')!==-1||options.type.indexOf('Product')!==-1)){options.layout=(this.detailLayout?this.detailLayout:this.layout.replace('.list','').concat(options.type.replace('Article','').replace('Product','').replace('Account',''),'.detail'));}else{options.layout=(this.detailLayout?this.detailLayout:this.layout.replace('.list','.detail'));}}
if(!options.service){options.service=VHV.changeTail(this.service,'select');}
if(!options.type&&(this.type||this.itemType)){options.type=(this.type?this.type:this.itemType);}
if(options.id){options.itemId=options.id;}
if(!that.parent||!that.parent.loadModule){if(!options.xModal){VHV.openModal(options);}}else{VHV.ExecQueue.add(function(){if(!options.xPopup){if(window.history.pushState&&location.href.indexOf('clickDetailForm=')===-1){let url=location.href;if(url.indexOf('?')===-1){url+='?';}
url+='&clickDetailForm='+options.id;VHV.lastHistoryState='viewDetail';window.history.pushState({moduleId:that.id,action:'viewDetail',options:options},document.title,url);}
that.parent.loadModule('detailModule',options);if(that.parent.isMobile){$('#detailModule'+that.parent.id).show();$('#editModule'+that.parent.id).hide();$('body').addClass('overhidden');}else if(options.itemId){options.id=options.itemId;$('#detailModule'+that.parent.id).next().show();}else{$('#detailModule'+that.parent.id).next().hide();}}else{that.parent.loadModule('popupModule',options);}},function(){return that.parent;});}}
changePageTitle(pageTitle){if(pageTitle&&pageTitle.indexOf('>>>')==-1){$(document).prop('title',pageTitle);}}};VHV.Content.Listing.parentClass=VHV.Module;;VHV.Common.Input.Input=class{constructor(element,options){this.element=$(element);if(options){for(let i in options){if(options[i]==='false'){options[i]=false;}}}
this.options=options?options:{};if(this.options.msgs){for(let i in this.options.msgs){this.element.attr('data-msg-'+i,this.options.msgs[i]).data('msg-'+i,this.options.msgs[i]);}}}
draw(){}};VHV.Content.HTML=class extends VHV.Module{};VHV.Content.HTML.parentClass=VHV.Module;;/*!
 * jQuery Mobile Events
 * by Ben Major
 *
 * Copyright 2011-2015, Ben Major
 * Licensed under the MIT License:
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */"use strict";(function($){$.attrFn=$.attrFn||{};var agent=navigator.userAgent.toLowerCase(),isChromeDesktop=(agent.indexOf('chrome')>-1&&((agent.indexOf('windows')>-1)||(agent.indexOf('macintosh')>-1)||(agent.indexOf('linux')>-1))&&agent.indexOf('mobile')<0&&agent.indexOf('android')<0),settings={tap_pixel_range:5,swipe_h_threshold:100,swipe_v_threshold:50,taphold_threshold:750,doubletap_int:500,touch_capable:('ontouchstart'in window&&!isChromeDesktop),orientation_support:('orientation'in window&&'onorientationchange'in window),startevent:(('ontouchstart'in window&&!isChromeDesktop)?'touchstart':'mousedown'),endevent:(('ontouchstart'in window&&!isChromeDesktop)?'touchend':'mouseup'),moveevent:(('ontouchstart'in window&&!isChromeDesktop)?'touchmove':'mousemove'),tapevent:('ontouchstart'in window&&!isChromeDesktop)?'tap':'click',scrollevent:('ontouchstart'in window&&!isChromeDesktop)?'touchmove':'scroll',hold_timer:null,tap_timer:null};$.isTouchCapable=function(){return settings.touch_capable;};$.getStartEvent=function(){return settings.startevent;};$.getEndEvent=function(){return settings.endevent;};$.getMoveEvent=function(){return settings.moveevent;};$.getTapEvent=function(){return settings.tapevent;};$.getScrollEvent=function(){return settings.scrollevent;};$.each(['tapstart','tapend','tapmove','tap','tap2','tap3','tap4','singletap','doubletap','taphold','swipe','swipeup','swiperight','swipedown','swipeleft','swipeend','scrollstart','scrollend','orientationchange'],function(i,name){$.fn[name]=function(fn){return fn?this.on(name,fn):this.trigger(name);};$.attrFn[name]=true;});$.event.special.tapstart={setup:function(){var thisObject=this,$this=$(thisObject);$this.on(settings.startevent,function tapStartFunc(e){$this.data('callee',tapStartFunc);if(e.which&&e.which!==1){return false;}
var origEvent=e.originalEvent,touchData={'position':{'x':((settings.touch_capable)?origEvent.touches[0].screenX:e.screenX),'y':(settings.touch_capable)?origEvent.touches[0].screenY:e.screenY},'offset':{'x':(settings.touch_capable)?Math.round(origEvent.changedTouches[0].pageX-($this.offset()?$this.offset().left:0)):Math.round(e.pageX-($this.offset()?$this.offset().left:0)),'y':(settings.touch_capable)?Math.round(origEvent.changedTouches[0].pageY-($this.offset()?$this.offset().top:0)):Math.round(e.pageY-($this.offset()?$this.offset().top:0))},'time':Date.now(),'target':e.target};triggerCustomEvent(thisObject,'tapstart',e,touchData);return true;});},remove:function(){$(this).off(settings.startevent,$(this).data.callee);}};$.event.special.tapmove={setup:function(){var thisObject=this,$this=$(thisObject);$this.on(settings.moveevent,function tapMoveFunc(e){$this.data('callee',tapMoveFunc);var origEvent=e.originalEvent,touchData={'position':{'x':((settings.touch_capable)?origEvent.touches[0].screenX:e.screenX),'y':(settings.touch_capable)?origEvent.touches[0].screenY:e.screenY},'offset':{'x':(settings.touch_capable)?Math.round(origEvent.changedTouches[0].pageX-($this.offset()?$this.offset().left:0)):Math.round(e.pageX-($this.offset()?$this.offset().left:0)),'y':(settings.touch_capable)?Math.round(origEvent.changedTouches[0].pageY-($this.offset()?$this.offset().top:0)):Math.round(e.pageY-($this.offset()?$this.offset().top:0))},'time':Date.now(),'target':e.target};triggerCustomEvent(thisObject,'tapmove',e,touchData);return true;});},remove:function(){$(this).off(settings.moveevent,$(this).data.callee);}};$.event.special.tapend={setup:function(){var thisObject=this,$this=$(thisObject);$this.on(settings.endevent,function tapEndFunc(e){$this.data('callee',tapEndFunc);var origEvent=e.originalEvent;var touchData={'position':{'x':(settings.touch_capable)?origEvent.changedTouches[0].screenX:e.screenX,'y':(settings.touch_capable)?origEvent.changedTouches[0].screenY:e.screenY},'offset':{'x':(settings.touch_capable)?Math.round(origEvent.changedTouches[0].pageX-($this.offset()?$this.offset().left:0)):Math.round(e.pageX-($this.offset()?$this.offset().left:0)),'y':(settings.touch_capable)?Math.round(origEvent.changedTouches[0].pageY-($this.offset()?$this.offset().top:0)):Math.round(e.pageY-($this.offset()?$this.offset().top:0))},'time':Date.now(),'target':e.target};triggerCustomEvent(thisObject,'tapend',e,touchData);return true;});},remove:function(){$(this).off(settings.endevent,$(this).data.callee);}};$.event.special.taphold={setup:function(){var thisObject=this,$this=$(thisObject),origTarget,start_pos={x:0,y:0},end_x=0,end_y=0;$this.on(settings.startevent,function tapHoldFunc1(e){if(e.which&&e.which!==1){return false;}else{$this.data('tapheld',false);origTarget=e.target;var origEvent=e.originalEvent;var start_time=Date.now(),startPosition={'x':(settings.touch_capable)?origEvent.touches[0].screenX:e.screenX,'y':(settings.touch_capable)?origEvent.touches[0].screenY:e.screenY},startOffset={'x':(settings.touch_capable)?origEvent.touches[0].pageX-origEvent.touches[0].target.offsetLeft:e.offsetX,'y':(settings.touch_capable)?origEvent.touches[0].pageY-origEvent.touches[0].target.offsetTop:e.offsetY};start_pos.x=(e.originalEvent.targetTouches)?e.originalEvent.targetTouches[0].pageX:e.pageX;start_pos.y=(e.originalEvent.targetTouches)?e.originalEvent.targetTouches[0].pageY:e.pageY;end_x=start_pos.x;end_y=start_pos.y;settings.hold_timer=window.setTimeout(function(){var diff_x=(start_pos.x-end_x),diff_y=(start_pos.y-end_y);if(e.target==origTarget&&((start_pos.x==end_x&&start_pos.y==end_y)||(diff_x>=-(settings.tap_pixel_range)&&diff_x<=settings.tap_pixel_range&&diff_y>=-(settings.tap_pixel_range)&&diff_y<=settings.tap_pixel_range))){$this.data('tapheld',true);var end_time=Date.now(),endPosition={'x':(settings.touch_capable)?origEvent.touches[0].screenX:e.screenX,'y':(settings.touch_capable)?origEvent.touches[0].screenY:e.screenY},endOffset={'x':(settings.touch_capable)?Math.round(origEvent.changedTouches[0].pageX-($this.offset()?$this.offset().left:0)):Math.round(e.pageX-($this.offset()?$this.offset().left:0)),'y':(settings.touch_capable)?Math.round(origEvent.changedTouches[0].pageY-($this.offset()?$this.offset().top:0)):Math.round(e.pageY-($this.offset()?$this.offset().top:0))};var duration=end_time-start_time;var touchData={'startTime':start_time,'endTime':end_time,'startPosition':startPosition,'startOffset':startOffset,'endPosition':endPosition,'endOffset':endOffset,'duration':duration,'target':e.target};$this.data('callee1',tapHoldFunc1);triggerCustomEvent(thisObject,'taphold',e,touchData);}},settings.taphold_threshold);return true;}}).on(settings.endevent,function tapHoldFunc2(){$this.data('callee2',tapHoldFunc2);$this.data('tapheld',false);window.clearTimeout(settings.hold_timer);}).on(settings.moveevent,function tapHoldFunc3(e){$this.data('callee3',tapHoldFunc3);end_x=(e.originalEvent.targetTouches)?e.originalEvent.targetTouches[0].pageX:e.pageX;end_y=(e.originalEvent.targetTouches)?e.originalEvent.targetTouches[0].pageY:e.pageY;});},remove:function(){$(this).off(settings.startevent,$(this).data.callee1).off(settings.endevent,$(this).data.callee2).off(settings.moveevent,$(this).data.callee3);}};$.event.special.doubletap={setup:function(){var thisObject=this,$this=$(thisObject),origTarget,action,firstTap=null,origEvent,cooloff,cooling=false;$this.on(settings.startevent,function doubleTapFunc1(e){if(e.which&&e.which!==1){return false;}
$this.data('doubletapped',false);origTarget=e.target;$this.data('callee1',doubleTapFunc1);origEvent=e.originalEvent;if(!firstTap){firstTap={'position':{'x':(settings.touch_capable)?origEvent.touches[0].screenX:e.screenX,'y':(settings.touch_capable)?origEvent.touches[0].screenY:e.screenY},'offset':{'x':(settings.touch_capable)?Math.round(origEvent.changedTouches[0].pageX-($this.offset()?$this.offset().left:0)):Math.round(e.pageX-($this.offset()?$this.offset().left:0)),'y':(settings.touch_capable)?Math.round(origEvent.changedTouches[0].pageY-($this.offset()?$this.offset().top:0)):Math.round(e.pageY-($this.offset()?$this.offset().top:0))},'time':Date.now(),'target':e.target};}
return true;}).on(settings.endevent,function doubleTapFunc2(e){var now=Date.now();var lastTouch=$this.data('lastTouch')||now+1;var delta=now-lastTouch;window.clearTimeout(action);$this.data('callee2',doubleTapFunc2);if(delta<settings.doubletap_int&&(e.target==origTarget)&&delta>100){$this.data('doubletapped',true);window.clearTimeout(settings.tap_timer);var lastTap={'position':{'x':(settings.touch_capable)?e.originalEvent.changedTouches[0].screenX:e.screenX,'y':(settings.touch_capable)?e.originalEvent.changedTouches[0].screenY:e.screenY},'offset':{'x':(settings.touch_capable)?Math.round(origEvent.changedTouches[0].pageX-($this.offset()?$this.offset().left:0)):Math.round(e.pageX-($this.offset()?$this.offset().left:0)),'y':(settings.touch_capable)?Math.round(origEvent.changedTouches[0].pageY-($this.offset()?$this.offset().top:0)):Math.round(e.pageY-($this.offset()?$this.offset().top:0))},'time':Date.now(),'target':e.target};var touchData={'firstTap':firstTap,'secondTap':lastTap,'interval':lastTap.time-firstTap.time};if(!cooling){triggerCustomEvent(thisObject,'doubletap',e,touchData);firstTap=null;}
cooling=true;cooloff=window.setTimeout(function(){cooling=false;},settings.doubletap_int);}else{$this.data('lastTouch',now);action=window.setTimeout(function(){firstTap=null;window.clearTimeout(action);},settings.doubletap_int,[e]);}
$this.data('lastTouch',now);});},remove:function(){$(this).off(settings.startevent,$(this).data.callee1).off(settings.endevent,$(this).data.callee2);}};$.event.special.singletap={setup:function(){var thisObject=this,$this=$(thisObject),origTarget=null,startTime=null,start_pos={x:0,y:0};$this.on(settings.startevent,function singleTapFunc1(e){if(e.which&&e.which!==1){return false;}else{startTime=Date.now();origTarget=e.target;$this.data('callee1',singleTapFunc1);start_pos.x=(e.originalEvent.targetTouches)?e.originalEvent.targetTouches[0].pageX:e.pageX;start_pos.y=(e.originalEvent.targetTouches)?e.originalEvent.targetTouches[0].pageY:e.pageY;return true;}}).on(settings.endevent,function singleTapFunc2(e){$this.data('callee2',singleTapFunc2);if(e.target==origTarget){var end_pos_x=(e.originalEvent.changedTouches)?e.originalEvent.changedTouches[0].pageX:e.pageX,end_pos_y=(e.originalEvent.changedTouches)?e.originalEvent.changedTouches[0].pageY:e.pageY;settings.tap_timer=window.setTimeout(function(){var diff_x=(start_pos.x-end_pos_x),diff_y=(start_pos.y-end_pos_y);if(!$this.data('doubletapped')&&!$this.data('tapheld')&&(((start_pos.x==end_pos_x)&&(start_pos.y==end_pos_y))||(diff_x>=-(settings.tap_pixel_range)&&diff_x<=settings.tap_pixel_range&&diff_y>=-(settings.tap_pixel_range)&&diff_y<=settings.tap_pixel_range))){var origEvent=e.originalEvent;var touchData={'position':{'x':(settings.touch_capable)?origEvent.changedTouches[0].screenX:e.screenX,'y':(settings.touch_capable)?origEvent.changedTouches[0].screenY:e.screenY},'offset':{'x':(settings.touch_capable)?Math.round(origEvent.changedTouches[0].pageX-($this.offset()?$this.offset().left:0)):Math.round(e.pageX-($this.offset()?$this.offset().left:0)),'y':(settings.touch_capable)?Math.round(origEvent.changedTouches[0].pageY-($this.offset()?$this.offset().top:0)):Math.round(e.pageY-($this.offset()?$this.offset().top:0))},'time':Date.now(),'target':e.target};if((touchData.time-startTime)<settings.taphold_threshold){triggerCustomEvent(thisObject,'singletap',e,touchData);}}},settings.doubletap_int);}});},remove:function(){$(this).off(settings.startevent,$(this).data.callee1).off(settings.endevent,$(this).data.callee2);}};$.event.special.tap={setup:function(){var thisObject=this,$this=$(thisObject),started=false,origTarget=null,start_time,start_pos={x:0,y:0},touches;$this.on(settings.startevent,function tapFunc1(e){$this.data('callee1',tapFunc1);if(e.which&&e.which!==1){return false;}
else{started=true;start_pos.x=(e.originalEvent.targetTouches)?e.originalEvent.targetTouches[0].pageX:e.pageX;start_pos.y=(e.originalEvent.targetTouches)?e.originalEvent.targetTouches[0].pageY:e.pageY;start_time=Date.now();origTarget=e.target;touches=(e.originalEvent.targetTouches)?e.originalEvent.targetTouches:[e];return true;}}).on(settings.endevent,function tapFunc2(e){$this.data('callee2',tapFunc2);var end_x=(e.originalEvent.targetTouches)?e.originalEvent.changedTouches[0].pageX:e.pageX,end_y=(e.originalEvent.targetTouches)?e.originalEvent.changedTouches[0].pageY:e.pageY,diff_x=(start_pos.x-end_x),diff_y=(start_pos.y-end_y),eventName;if(origTarget==e.target&&started&&((Date.now()-start_time)<settings.taphold_threshold)&&((start_pos.x==end_x&&start_pos.y==end_y)||(diff_x>=-(settings.tap_pixel_range)&&diff_x<=settings.tap_pixel_range&&diff_y>=-(settings.tap_pixel_range)&&diff_y<=settings.tap_pixel_range))){var origEvent=e.originalEvent;var touchData=[];for(var i=0;i<touches.length;i++){var touch={'position':{'x':(settings.touch_capable)?origEvent.changedTouches[i].screenX:e.screenX,'y':(settings.touch_capable)?origEvent.changedTouches[i].screenY:e.screenY},'offset':{'x':(settings.touch_capable)?Math.round(origEvent.changedTouches[i].pageX-($this.offset()?$this.offset().left:0)):Math.round(e.pageX-($this.offset()?$this.offset().left:0)),'y':(settings.touch_capable)?Math.round(origEvent.changedTouches[i].pageY-($this.offset()?$this.offset().top:0)):Math.round(e.pageY-($this.offset()?$this.offset().top:0))},'time':Date.now(),'target':e.target};touchData.push(touch);}
triggerCustomEvent(thisObject,'tap',e,touchData);}});},remove:function(){$(this).off(settings.startevent,$(this).data.callee1).off(settings.endevent,$(this).data.callee2);}};$.event.special.swipe={setup:function(){var thisObject=this,$this=$(thisObject),started=false,hasSwiped=false,originalCoord={x:0,y:0},finalCoord={x:0,y:0},startEvnt;function touchStart(e){$this=$(e.currentTarget);$this.data('callee1',touchStart);originalCoord.x=(e.originalEvent.targetTouches)?e.originalEvent.targetTouches[0].pageX:e.pageX;originalCoord.y=(e.originalEvent.targetTouches)?e.originalEvent.targetTouches[0].pageY:e.pageY;finalCoord.x=originalCoord.x;finalCoord.y=originalCoord.y;started=true;var origEvent=e.originalEvent;startEvnt={'position':{'x':(settings.touch_capable)?origEvent.touches[0].screenX:e.screenX,'y':(settings.touch_capable)?origEvent.touches[0].screenY:e.screenY},'offset':{'x':(settings.touch_capable)?Math.round(origEvent.changedTouches[0].pageX-($this.offset()?$this.offset().left:0)):Math.round(e.pageX-($this.offset()?$this.offset().left:0)),'y':(settings.touch_capable)?Math.round(origEvent.changedTouches[0].pageY-($this.offset()?$this.offset().top:0)):Math.round(e.pageY-($this.offset()?$this.offset().top:0))},'time':Date.now(),'target':e.target};}
function touchMove(e){$this=$(e.currentTarget);$this.data('callee2',touchMove);finalCoord.x=(e.originalEvent.targetTouches)?e.originalEvent.targetTouches[0].pageX:e.pageX;finalCoord.y=(e.originalEvent.targetTouches)?e.originalEvent.targetTouches[0].pageY:e.pageY;var swipedir;var ele_x_threshold=($this.parent().data('xthreshold'))?$this.parent().data('xthreshold'):$this.data('xthreshold'),ele_y_threshold=($this.parent().data('ythreshold'))?$this.parent().data('ythreshold'):$this.data('ythreshold'),h_threshold=(typeof ele_x_threshold!=='undefined'&&ele_x_threshold!==false&&parseInt(ele_x_threshold))?parseInt(ele_x_threshold):settings.swipe_h_threshold,v_threshold=(typeof ele_y_threshold!=='undefined'&&ele_y_threshold!==false&&parseInt(ele_y_threshold))?parseInt(ele_y_threshold):settings.swipe_v_threshold;if(originalCoord.y>finalCoord.y&&(originalCoord.y-finalCoord.y>v_threshold)){swipedir='swipeup';}
if(originalCoord.x<finalCoord.x&&(finalCoord.x-originalCoord.x>h_threshold)){swipedir='swiperight';}
if(originalCoord.y<finalCoord.y&&(finalCoord.y-originalCoord.y>v_threshold)){swipedir='swipedown';}
if(originalCoord.x>finalCoord.x&&(originalCoord.x-finalCoord.x>h_threshold)){swipedir='swipeleft';}
if(swipedir!=undefined&&started){originalCoord.x=0;originalCoord.y=0;finalCoord.x=0;finalCoord.y=0;started=false;var origEvent=e.originalEvent;var endEvnt={'position':{'x':(settings.touch_capable)?origEvent.touches[0].screenX:e.screenX,'y':(settings.touch_capable)?origEvent.touches[0].screenY:e.screenY},'offset':{'x':(settings.touch_capable)?Math.round(origEvent.changedTouches[0].pageX-($this.offset()?$this.offset().left:0)):Math.round(e.pageX-($this.offset()?$this.offset().left:0)),'y':(settings.touch_capable)?Math.round(origEvent.changedTouches[0].pageY-($this.offset()?$this.offset().top:0)):Math.round(e.pageY-($this.offset()?$this.offset().top:0))},'time':Date.now(),'target':e.target};var xAmount=Math.abs(startEvnt.position.x-endEvnt.position.x),yAmount=Math.abs(startEvnt.position.y-endEvnt.position.y);var touchData={'startEvnt':startEvnt,'endEvnt':endEvnt,'direction':swipedir.replace('swipe',''),'xAmount':xAmount,'yAmount':yAmount,'duration':endEvnt.time-startEvnt.time};hasSwiped=true;$this.trigger('swipe',touchData).trigger(swipedir,touchData);}}
function touchEnd(e){$this=$(e.currentTarget);var swipedir="";$this.data('callee3',touchEnd);if(hasSwiped){var ele_x_threshold=$this.data('xthreshold'),ele_y_threshold=$this.data('ythreshold'),h_threshold=(typeof ele_x_threshold!=='undefined'&&ele_x_threshold!==false&&parseInt(ele_x_threshold))?parseInt(ele_x_threshold):settings.swipe_h_threshold,v_threshold=(typeof ele_y_threshold!=='undefined'&&ele_y_threshold!==false&&parseInt(ele_y_threshold))?parseInt(ele_y_threshold):settings.swipe_v_threshold;var origEvent=e.originalEvent;var endEvnt={'position':{'x':(settings.touch_capable)?origEvent.changedTouches[0].screenX:e.screenX,'y':(settings.touch_capable)?origEvent.changedTouches[0].screenY:e.screenY},'offset':{'x':(settings.touch_capable)?Math.round(origEvent.changedTouches[0].pageX-($this.offset()?$this.offset().left:0)):Math.round(e.pageX-($this.offset()?$this.offset().left:0)),'y':(settings.touch_capable)?Math.round(origEvent.changedTouches[0].pageY-($this.offset()?$this.offset().top:0)):Math.round(e.pageY-($this.offset()?$this.offset().top:0))},'time':Date.now(),'target':e.target};if(startEvnt.position.y>endEvnt.position.y&&(startEvnt.position.y-endEvnt.position.y>v_threshold)){swipedir='swipeup';}
if(startEvnt.position.x<endEvnt.position.x&&(endEvnt.position.x-startEvnt.position.x>h_threshold)){swipedir='swiperight';}
if(startEvnt.position.y<endEvnt.position.y&&(endEvnt.position.y-startEvnt.position.y>v_threshold)){swipedir='swipedown';}
if(startEvnt.position.x>endEvnt.position.x&&(startEvnt.position.x-endEvnt.position.x>h_threshold)){swipedir='swipeleft';}
var xAmount=Math.abs(startEvnt.position.x-endEvnt.position.x),yAmount=Math.abs(startEvnt.position.y-endEvnt.position.y);var touchData={'startEvnt':startEvnt,'endEvnt':endEvnt,'direction':swipedir.replace('swipe',''),'xAmount':xAmount,'yAmount':yAmount,'duration':endEvnt.time-startEvnt.time};$this.trigger('swipeend',touchData);}
started=false;hasSwiped=false;}
$this.on(settings.startevent,touchStart);$this.on(settings.moveevent,touchMove);$this.on(settings.endevent,touchEnd);},remove:function(){$(this).off(settings.startevent,$(this).data.callee1).off(settings.moveevent,$(this).data.callee2).off(settings.endevent,$(this).data.callee3);}};$.event.special.scrollstart={setup:function(){var thisObject=this,$this=$(thisObject),scrolling,timer;function trigger(event,state){scrolling=state;triggerCustomEvent(thisObject,scrolling?'scrollstart':'scrollend',event);}
$this.on(settings.scrollevent,function scrollFunc(event){$this.data('callee',scrollFunc);if(!scrolling){trigger(event,true);}
clearTimeout(timer);timer=setTimeout(function(){trigger(event,false);},50);});},remove:function(){$(this).off(settings.scrollevent,$(this).data.callee);}};var win=$(window),special_event,get_orientation,last_orientation,initial_orientation_is_landscape,initial_orientation_is_default,portrait_map={'0':true,'180':true};if(settings.orientation_support){var ww=window.innerWidth||win.width(),wh=window.innerHeight||win.height(),landscape_threshold=50;initial_orientation_is_landscape=ww>wh&&(ww-wh)>landscape_threshold;initial_orientation_is_default=portrait_map[window.orientation];if((initial_orientation_is_landscape&&initial_orientation_is_default)||(!initial_orientation_is_landscape&&!initial_orientation_is_default)){portrait_map={'-90':true,'90':true};}}
$.event.special.orientationchange=special_event={setup:function(){if(settings.orientation_support){return false;}
last_orientation=get_orientation();win.on('throttledresize',handler);return true;},teardown:function(){if(settings.orientation_support){return false;}
win.off('throttledresize',handler);return true;},add:function(handleObj){var old_handler=handleObj.handler;handleObj.handler=function(event){event.orientation=get_orientation();return old_handler.apply(this,arguments);};}};function handler(){var orientation=get_orientation();if(orientation!==last_orientation){last_orientation=orientation;win.trigger("orientationchange");}}
$.event.special.orientationchange.orientation=get_orientation=function(){var isPortrait=true,elem=document.documentElement;if(settings.orientation_support){isPortrait=portrait_map[window.orientation];}else{isPortrait=elem&&elem.clientWidth / elem.clientHeight<1.1;}
return isPortrait?'portrait':'landscape';};$.event.special.throttledresize={setup:function(){$(this).on('resize',throttle_handler);},teardown:function(){$(this).off('resize',throttle_handler);}};var throttle=250,throttle_handler=function(){curr=Date.now();diff=curr-lastCall;if(diff>=throttle){lastCall=curr;$(this).trigger('throttledresize');}else{if(heldCall){window.clearTimeout(heldCall);}
heldCall=window.setTimeout(handler,throttle-diff);}},lastCall=0,heldCall,curr,diff;function triggerCustomEvent(obj,eventType,event,touchData){var originalType=event.type;event.type=eventType;$.event.dispatch.call(obj,event,touchData);event.type=originalType;}
$.each({scrollend:'scrollstart',swipeup:'swipe',swiperight:'swipe',swipedown:'swipe',swipeleft:'swipe',swipeend:'swipe',tap2:'tap'},function(e,srcE){$.event.special[e]={setup:function(){$(this).on(srcE,$.noop);}};});}(jQuery));;;VHV.setAllLinks('/3rdparty/mobility/vendor/jquery.mobile-events.js',2);VHV.allOrderedLinks.push(location.protocol+'//'+location.hostname+'/3rdparty/mobility/vendor/jquery.mobile-events.js');