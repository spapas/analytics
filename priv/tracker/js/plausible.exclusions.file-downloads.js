!function(){"use strict";var s=window.location,c=window.document,u=c.currentScript,d=u.getAttribute("data-api")||new URL(u.src).origin+"/api/event";function f(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(s.hostname)||"file:"===s.protocol)return f("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(t){}var i=u&&u.getAttribute("data-include"),n=u&&u.getAttribute("data-exclude");if("pageview"===t){var a=!i||i&&i.split(",").some(p),r=n&&n.split(",").some(p);if(!a||r)return f("exclusion rule")}var o={};o.n=t,o.u=s.href,o.d=u.getAttribute("data-domain"),o.r=c.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props);var l=new XMLHttpRequest;l.open("POST",d,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(o)),l.onreadystatechange=function(){4===l.readyState&&e&&e.callback&&e.callback()}}function p(t){return s.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var i,n=0;n<e.length;n++)t.apply(this,e[n]);function a(){i!==s.pathname&&(i=s.pathname,t("pageview"))}var r,o=window.history;o.pushState&&(r=o.pushState,o.pushState=function(){r.apply(this,arguments),a()},window.addEventListener("popstate",a)),"prerender"===c.visibilityState?c.addEventListener("visibilitychange",function(){i||"visible"!==c.visibilityState||a()}):a();var w={},g=!1;function l(t,e,i,n){var a,r,o,l,p,s;o=e,l=!(r=t).target||r.target.match(/^_(self|parent|top)$/i),p="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),s=o.defaultPrevented&&!g,a=l&&p&&!s?(e.preventDefault(),g=!0,v(i,function(){window.location=t.href})):v(i,null),setTimeout(a,5e3),function(t,e,i){if(w[t])return;w[t]=!0,plausible(t,{props:e,callback:i})}(i,n,a)}function v(t,e){return function(){delete w[t],e&&0==Object.keys(w).length&&e()}}var p=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],h=u.getAttribute("file-types"),m=u.getAttribute("add-file-types"),y=h&&h.split(",")||m&&m.split(",").concat(p)||p;function b(t){var e,i,n=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target),a=n&&n.href&&n.href.split("?")[0];i=(e=a)&&e.split(".").pop(),y.some(function(t){return t===i})&&l(n,t,"File Download",{url:a})}c.addEventListener("click",b),c.addEventListener("auxclick",b)}();