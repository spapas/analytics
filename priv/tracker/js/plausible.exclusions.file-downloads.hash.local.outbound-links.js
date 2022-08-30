!function(){"use strict";var p=window.location,u=window.document,s=u.currentScript,d=s.getAttribute("data-api")||new URL(s.src).origin+"/api/event";function f(e){console.warn("Ignoring Event: "+e)}function e(e,t){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(e){}var i=s&&s.getAttribute("data-include"),n=s&&s.getAttribute("data-exclude");if("pageview"===e){var a=!i||i&&i.split(",").some(o),r=n&&n.split(",").some(o);if(!a||r)return f("exclusion rule")}function o(e){return p.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var l={};l.n=e,l.u=p.href,l.d=s.getAttribute("data-domain"),l.r=u.referrer||null,l.w=window.innerWidth,t&&t.meta&&(l.m=JSON.stringify(t.meta)),t&&t.props&&(l.p=t.props),l.h=1;var c=new XMLHttpRequest;c.open("POST",d,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(l)),c.onreadystatechange=function(){4===c.readyState&&t&&t.callback&&t.callback()}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var i,n=0;n<t.length;n++)e.apply(this,t[n]);function a(){i=p.pathname,e("pageview")}window.addEventListener("hashchange",a),"prerender"===u.visibilityState?u.addEventListener("visibilitychange",function(){i||"visible"!==u.visibilityState||a()}):a();var g={},v=!1;function r(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}function o(e,t,i,n){var a,r,o,l,c,p;o=t,l=!(r=e).target||r.target.match(/^_(self|parent|top)$/i),c="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),p=o.defaultPrevented&&!v,a=l&&c&&!p?(t.preventDefault(),v=!0,w(i,function(){window.location=e.href})):w(i,null),setTimeout(a,5e3),function(e,t,i){if(g[e])return;g[e]=!0,plausible(e,{props:t,callback:i})}(i,n,a)}function w(e,t){return function(){delete g[e],t&&0==Object.keys(g).length&&t()}}function l(e){var t,i=r(e.target);(t=i)&&t.href&&t.host&&t.host!==p.host&&o(i,e,"Outbound Link: Click",{url:i.href})}u.addEventListener("click",l),u.addEventListener("auxclick",l);var c=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],h=s.getAttribute("file-types"),m=s.getAttribute("add-file-types"),b=h&&h.split(",")||m&&m.split(",").concat(c)||c;function y(e){var t,i,n=r(e.target),a=n&&n.href&&n.href.split("?")[0];i=(t=a)&&t.split(".").pop(),b.some(function(e){return e===i})&&o(n,e,"File Download",{url:a})}u.addEventListener("click",y),u.addEventListener("auxclick",y)}();