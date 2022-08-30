!function(){"use strict";var d=window.location,p=window.document,f=p.currentScript,w=f.getAttribute("data-api")||new URL(f.src).origin+"/api/event";function g(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(d.hostname)||"file:"===d.protocol)return g("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return g("localStorage flag")}catch(e){}var n=f&&f.getAttribute("data-include"),i=f&&f.getAttribute("data-exclude");if("pageview"===e){var r=!n||n&&n.split(",").some(s),a=i&&i.split(",").some(s);if(!r||a)return g("exclusion rule")}var o={};o.n=e,o.u=d.href,o.d=f.getAttribute("data-domain"),o.r=p.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var l=f.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),c=o.p||{};l.forEach(function(e){var t=e.replace("event-",""),n=f.getAttribute(e);c[t]=c[t]||n}),o.p=c,o.h=1;var u=new XMLHttpRequest;u.open("POST",w,!0),u.setRequestHeader("Content-Type","text/plain"),u.send(JSON.stringify(o)),u.onreadystatechange=function(){4===u.readyState&&t&&t.callback&&t.callback()}}function s(e){return d.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var n,i=0;i<t.length;i++)e.apply(this,t[i]);function r(){n=d.pathname,e("pageview")}window.addEventListener("hashchange",r),"prerender"===p.visibilityState?p.addEventListener("visibilitychange",function(){n||"visible"!==p.visibilityState||r()}):r();var s={},v=!1;function a(e,t,n,i){var r,a,o,l,c,u;o=t,l=!(a=e).target||a.target.match(/^_(self|parent|top)$/i),c="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),u=o.defaultPrevented&&!v,r=l&&c&&!u?(t.preventDefault(),v=!0,h(n,function(){window.location=e.href})):h(n,null),setTimeout(r,5e3),function(e,t,n){if(s[e])return;s[e]=!0,plausible(e,{props:t,callback:n})}(n,i,r)}function h(e,t){return function(){delete s[e],t&&0==Object.keys(s).length&&t()}}function o(e){var t,n=function(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}(e.target);(t=n)&&t.href&&t.host&&t.host!==d.host&&a(n,e,"Outbound Link: Click",{url:n.href})}p.addEventListener("click",o),p.addEventListener("auxclick",o)}();