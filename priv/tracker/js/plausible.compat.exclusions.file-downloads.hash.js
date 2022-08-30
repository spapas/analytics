!function(){"use strict";var e,t,i,s=window.location,c=window.document,u=c.getElementById("plausible"),d=u.getAttribute("data-api")||(e=u.src.split("/"),t=e[0],i=e[2],t+"//"+i+"/api/event");function f(e){console.warn("Ignoring Event: "+e)}function n(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(s.hostname)||"file:"===s.protocol)return f("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(e){}var i=u&&u.getAttribute("data-include"),n=u&&u.getAttribute("data-exclude");if("pageview"===e){var a=!i||i&&i.split(",").some(p),r=n&&n.split(",").some(p);if(!a||r)return f("exclusion rule")}var o={};o.n=e,o.u=s.href,o.d=u.getAttribute("data-domain"),o.r=c.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props),o.h=1;var l=new XMLHttpRequest;l.open("POST",d,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(o)),l.onreadystatechange=function(){4===l.readyState&&t&&t.callback&&t.callback()}}function p(e){return s.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var a=window.plausible&&window.plausible.q||[];window.plausible=n;for(var r,o=0;o<a.length;o++)n.apply(this,a[o]);function l(){r=s.pathname,n("pageview")}window.addEventListener("hashchange",l),"prerender"===c.visibilityState?c.addEventListener("visibilitychange",function(){r||"visible"!==c.visibilityState||l()}):l();var w={},g=!1;function p(e,t,i,n){var a,r,o,l,p,s;o=t,l=!(r=e).target||r.target.match(/^_(self|parent|top)$/i),p="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),s=o.defaultPrevented&&!g,a=l&&p&&!s?(t.preventDefault(),g=!0,v(i,function(){window.location=e.href})):v(i,null),setTimeout(a,5e3),function(e,t,i){if(w[e])return;w[e]=!0,plausible(e,{props:t,callback:i})}(i,n,a)}function v(e,t){return function(){delete w[e],t&&0==Object.keys(w).length&&t()}}var m=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],h=u.getAttribute("file-types"),b=u.getAttribute("add-file-types"),y=h&&h.split(",")||b&&b.split(",").concat(m)||m;function x(e){var t,i,n=function(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}(e.target),a=n&&n.href&&n.href.split("?")[0];i=(t=a)&&t.split(".").pop(),y.some(function(e){return e===i})&&p(n,e,"File Download",{url:a})}c.addEventListener("click",x),c.addEventListener("auxclick",x)}();