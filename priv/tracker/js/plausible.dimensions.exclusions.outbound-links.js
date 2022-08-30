!function(){"use strict";var p=window.location,d=window.document,f=d.currentScript,w=f.getAttribute("data-api")||new URL(f.src).origin+"/api/event";function g(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(p.hostname)||"file:"===p.protocol)return g("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return g("localStorage flag")}catch(t){}var n=f&&f.getAttribute("data-include"),i=f&&f.getAttribute("data-exclude");if("pageview"===t){var a=!n||n&&n.split(",").some(s),r=i&&i.split(",").some(s);if(!a||r)return g("exclusion rule")}var o={};o.n=t,o.u=p.href,o.d=f.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props);var l=f.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),u=o.p||{};l.forEach(function(t){var e=t.replace("event-",""),n=f.getAttribute(t);u[e]=u[e]||n}),o.p=u;var c=new XMLHttpRequest;c.open("POST",w,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(o)),c.onreadystatechange=function(){4===c.readyState&&e&&e.callback&&e.callback()}}function s(t){return p.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var n,i=0;i<e.length;i++)t.apply(this,e[i]);function a(){n!==p.pathname&&(n=p.pathname,t("pageview"))}var r,o=window.history;o.pushState&&(r=o.pushState,o.pushState=function(){r.apply(this,arguments),a()},window.addEventListener("popstate",a)),"prerender"===d.visibilityState?d.addEventListener("visibilitychange",function(){n||"visible"!==d.visibilityState||a()}):a();var s={},h=!1;function l(t,e,n,i){var a,r,o,l,u,c;o=e,l=!(r=t).target||r.target.match(/^_(self|parent|top)$/i),u="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),c=o.defaultPrevented&&!h,a=l&&u&&!c?(e.preventDefault(),h=!0,v(n,function(){window.location=t.href})):v(n,null),setTimeout(a,5e3),function(t,e,n){if(s[t])return;s[t]=!0,plausible(t,{props:e,callback:n})}(n,i,a)}function v(t,e){return function(){delete s[t],e&&0==Object.keys(s).length&&e()}}function u(t){var e,n=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target);(e=n)&&e.href&&e.host&&e.host!==p.host&&l(n,t,"Outbound Link: Click",{url:n.href})}d.addEventListener("click",u),d.addEventListener("auxclick",u)}();