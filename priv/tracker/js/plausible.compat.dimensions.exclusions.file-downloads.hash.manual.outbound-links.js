!function(){"use strict";var t,e,n,s=window.location,d=window.document,f=d.getElementById("plausible"),g=f.getAttribute("data-api")||(t=f.src.split("/"),e=t[0],n=t[2],e+"//"+n+"/api/event");function w(t){console.warn("Ignoring Event: "+t)}function r(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(s.hostname)||"file:"===s.protocol)return w("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return w("localStorage flag")}catch(t){}var n=f&&f.getAttribute("data-include"),r=f&&f.getAttribute("data-exclude");if("pageview"===t){var i=!n||n&&n.split(",").some(p),a=r&&r.split(",").some(p);if(!i||a)return w("exclusion rule")}var o={};o.n=t,o.u=e&&e.u?e.u:s.href,o.d=f.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props);var l=f.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),u=o.p||{};l.forEach(function(t){var e=t.replace("event-",""),n=f.getAttribute(t);u[e]=u[e]||n}),o.p=u,o.h=1;var c=new XMLHttpRequest;c.open("POST",g,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(o)),c.onreadystatechange=function(){4===c.readyState&&e&&e.callback&&e.callback()}}function p(t){return s.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var i=window.plausible&&window.plausible.q||[];window.plausible=r;for(var a=0;a<i.length;a++)r.apply(this,i[a]);var p={},v=!1;function o(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}function l(t,e,n,r){var i,a,o,l,u,c;o=e,l=!(a=t).target||a.target.match(/^_(self|parent|top)$/i),u="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),c=o.defaultPrevented&&!v,i=l&&u&&!c?(e.preventDefault(),v=!0,m(n,function(){window.location=t.href})):m(n,null),setTimeout(i,5e3),function(t,e,n){if(p[t])return;p[t]=!0,plausible(t,{props:e,callback:n})}(n,r,i)}function m(t,e){return function(){delete p[t],e&&0==Object.keys(p).length&&e()}}function u(t){var e,n=o(t.target);(e=n)&&e.href&&e.host&&e.host!==s.host&&l(n,t,"Outbound Link: Click",{url:n.href})}d.addEventListener("click",u),d.addEventListener("auxclick",u);var c=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],h=f.getAttribute("file-types"),b=f.getAttribute("add-file-types"),y=h&&h.split(",")||b&&b.split(",").concat(c)||c;function k(t){var e,n,r=o(t.target),i=r&&r.href&&r.href.split("?")[0];n=(e=i)&&e.split(".").pop(),y.some(function(t){return t===n})&&l(r,t,"File Download",{url:i})}d.addEventListener("click",k),d.addEventListener("auxclick",k)}();