/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-classlist-cssanimations-csscalc-cssgradients-csspositionsticky-cssremunit-csstransitions-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-flexbox-flexboxlegacy-flexboxtweener-flexwrap-fontface-inlinesvg-placeholder-postmessage-queryselector-requestanimationframe-scrollsnappoints-srcset-supports-svg-svgasimg-target-touchevents-setclasses-shiv !*/
!function(e,t,n){function r(e,t){return typeof e===t}function i(){var e,t,n,i,o,s,a;for(var l in x)if(x.hasOwnProperty(l)){if(e=[],t=x[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],a=s.split("."),1===a.length?Modernizr[a[0]]=i:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=i),T.push((i?"":"no-")+a.join("-"))}}function o(e){var t=C.className,n=Modernizr._config.classPrefix||"";if(b&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),b?C.className.baseVal=t:C.className=t)}function s(e,t){return!!~(""+e).indexOf(t)}function a(){return"function"!==typeof t.createElement?t.createElement(arguments[0]):b?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(){var e=t.body;return e||(e=a(b?"svg":"body"),e.fake=!0),e}function c(e,n,r,i){var o,s,c,d,u="modernizr",f=a("div"),p=l();if(parseInt(r,10))for(;r--;)c=a("div"),c.id=i?i[r]:u+(r+1),f.appendChild(c);return o=a("style"),o.type="text/css",o.id="s"+u,(p.fake?p:f).appendChild(o),p.appendChild(f),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),f.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",d=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),s=n(f,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=d,C.offsetHeight):f.parentNode.removeChild(f),!!s}function d(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function u(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(d(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+d(t[i])+":"+r+")");return o=o.join(" or "),c("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function p(e,t,i,o){function l(){d&&(delete N.style,delete N.modElem)}if(o=r(o,"undefined")?!1:o,!r(i,"undefined")){var c=u(e,i);if(!r(c,"undefined"))return c}for(var d,p,h,m,g,v=["modernizr","tspan"];!N.style;)d=!0,N.modElem=a(v.shift()),N.style=N.modElem.style;for(h=e.length,p=0;h>p;p++)if(m=e[p],g=N.style[m],s(m,"-")&&(m=f(m)),N.style[m]!==n){if(o||r(i,"undefined"))return l(),"pfx"==t?m:!0;try{N.style[m]=i}catch(y){}if(N.style[m]!=g)return l(),"pfx"==t?m:!0}return l(),!1}function h(e,t){return function(){return e.apply(t,arguments)}}function m(e,t,n){var i;for(var o in e)if(e[o]in t)return n===!1?e[o]:(i=t[e[o]],r(i,"function")?h(i,n||t):i);return!1}function g(e,t,n,i,o){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+_.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?p(a,t,i,o):(a=(e+" "+j.join(s+" ")+s).split(" "),m(a,t,n))}function v(e,t,r){return g(e,n,n,t,r)}function y(e,t){return e-1===t||e===t||e+1===t}function w(e,t){if("object"===typeof e)for(var n in e)L(e,n)&&w(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),i=Modernizr[r[0]];if(2==r.length&&(i=i[r[1]]),"undefined"!==typeof i)return Modernizr;t="function"===typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),o([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}var x=[],S={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){x.push({name:e,fn:t,options:n})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr();var T=[],C=t.documentElement,b="svg"===C.nodeName.toLowerCase();b||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=w.elements;return"string"===typeof e?e.split(" "):e}function i(e,t){var n=w.elements;"string"!==typeof n&&(n=n.join(" ")),"string"!==typeof e&&(e=e.join(" ")),w.elements=n+" "+e,c(t)}function o(e){var t=y[e[g]];return t||(t={},v++,e[g]=v,y[v]=t),t}function s(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():m.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||h.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function a(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),s=0,a=r(),l=a.length;l>s;s++)i.createElement(a[s]);return i}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return w.shivMethods?s(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(w,t.frag)}function c(e){e||(e=t);var r=o(e);return!w.shivCSS||d||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||l(e,r),e}var d,u,f="3.7.3",p=e.html5||{},h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",d="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"===typeof e.cloneNode||"undefined"===typeof e.createDocumentFragment||"undefined"===typeof e.createElement}()}catch(n){d=!0,u=!0}}();var w={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:f,shivCSS:p.shivCSS!==!1,supportsUnknownElements:u,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:c,createElement:s,createDocumentFragment:a,addElements:i};e.html5=w,c(t),"object"===typeof module&&module.exports&&(module.exports=w)}("undefined"!==typeof e?e:this,t),Modernizr.addTest("postmessage","postMessage"in e),Modernizr.addTest("queryselector","querySelector"in t&&"querySelectorAll"in t);var E="Moz O ms Webkit",_=S._config.usePrefixes?E.split(" "):[];S._cssomPrefixes=_;var z={elem:a("modernizr")};Modernizr._q.push(function(){delete z.elem});var N={style:z.elem.style};Modernizr._q.unshift(function(){delete N.style});var j=S._config.usePrefixes?E.toLowerCase().split(" "):[];S._domPrefixes=j,S.testAllProps=g;var k=function(t){var r,i=F.length,o=e.CSSRule;if("undefined"===typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var s=0;i>s;s++){var a=F[s],l=a.toUpperCase()+"_"+r;if(l in o)return"@-"+a.toLowerCase()+"-"+t}return!1};S.atRule=k;var I=S.prefixed=function(e,t,n){return 0===e.indexOf("@")?k(e):(-1!=e.indexOf("-")&&(e=f(e)),t?g(e,t,n):g(e,"pfx"))};Modernizr.addTest("requestanimationframe",!!I("requestAnimationFrame",e),{aliases:["raf"]}),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var F=S._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];S._prefixes=F;var R=S.testStyles=c;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",F.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");R(r,function(e){n=9===e.offsetTop})}return n}),S.testAllProps=v,Modernizr.addTest("cssanimations",v("animationName","a",!0)),Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=a("a");return n.style.cssText=e+F.join(t+e),!!n.style.length}),Modernizr.addTest("flexbox",v("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",v("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",v("flexAlign","end",!0)),Modernizr.addTest("flexwrap",v("flexWrap","wrap",!0));var q=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),r=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,i=533>t&&e.match(/android/gi);return n||i||r}();q?Modernizr.addTest("fontface",!1):R('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),i=r.sheet||r.styleSheet,o=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"",s=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",s)}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",i=0,o=F.length-1;o>i;i++)e=0===i?"to ":"",r+=t+F[i]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var s=a("a"),l=s.style;return l.cssText=r,(""+l.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("csspositionsticky",function(){var e="position:",t="sticky",n=a("a"),r=n.style;return r.cssText=e+F.join(t+";"+e).slice(0,-e.length),-1!==r.position.indexOf(t)}),Modernizr.addTest("cssremunit",function(){var e=a("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)}),Modernizr.addTest("scrollsnappoints",v("scrollSnapType"));var P="CSS"in e&&"supports"in e.CSS,A="supportsCSS"in e;Modernizr.addTest("supports",P||A),Modernizr.addTest("target",function(){var t=e.document;if(!("querySelectorAll"in t))return!1;try{return t.querySelectorAll(":target"),!0}catch(n){return!1}}),Modernizr.addTest("csstransitions",v("transition","all",!0)),R("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),r=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);Modernizr.addTest("cssvhunit",r==n)}),R("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(t){var n=t.childNodes[2],r=t.childNodes[1],i=t.childNodes[0],o=parseInt((r.offsetWidth-r.clientWidth)/2,10),s=i.clientWidth/100,a=i.clientHeight/100,l=parseInt(50*Math.max(s,a),10),c=parseInt((e.getComputedStyle?getComputedStyle(n,null):n.currentStyle).width,10);Modernizr.addTest("cssvmaxunit",y(l,c)||y(l,c-o))},3),R("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(t){var n=t.childNodes[2],r=t.childNodes[1],i=t.childNodes[0],o=parseInt((r.offsetWidth-r.clientWidth)/2,10),s=i.clientWidth/100,a=i.clientHeight/100,l=parseInt(50*Math.min(s,a),10),c=parseInt((e.getComputedStyle?getComputedStyle(n,null):n.currentStyle).width,10);Modernizr.addTest("cssvminunit",y(l,c)||y(l,c-o))},3),R("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),r=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvwunit",r==n)}),Modernizr.addTest("classlist","classList"in C),Modernizr.addTest("placeholder","placeholder"in a("input")&&"placeholder"in a("textarea")),Modernizr.addTest("srcset","srcset"in a("img"));var L;!function(){var e={}.hasOwnProperty;L=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),S._l={},S.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},S._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){S.addTest=w}),Modernizr.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")),Modernizr.addTest("inlinesvg",function(){var e=a("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!==typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),i(),o(T),delete S.addTest,delete S.addAsyncTest;for(var M=0;M<Modernizr._q.length;M++)Modernizr._q[M]();e.Modernizr=Modernizr}(window,document)