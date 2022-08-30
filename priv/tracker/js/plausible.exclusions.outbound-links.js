!function(){"use strict";var s=window.location,u=window.document,p=u.currentScript,d=p.getAttribute("data-api")||new URL(p.src).origin+"/api/event";function f(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(s.hostname)||"file:"===s.protocol)return f("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(t){}var n=p&&p.getAttribute("data-include"),i=p&&p.getAttribute("data-exclude");if("pageview"===t){var a=!n||n&&n.split(",").some(c),r=i&&i.split(",").some(c);if(!a||r)return f("exclusion rule")}var o={};o.n=t,o.u=s.href,o.d=p.getAttribute("data-domain"),o.r=u.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props);var l=new XMLHttpRequest;l.open("POST",d,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(o)),l.onreadystatechange=function(){4===l.readyState&&e&&e.callback&&e.callback()}}function c(t){return s.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var n,i=0;i<e.length;i++)t.apply(this,e[i]);function a(){n!==s.pathname&&(n=s.pathname,t("pageview"))}var r,o=window.history;o.pushState&&(r=o.pushState,o.pushState=function(){r.apply(this,arguments),a()},window.addEventListener("popstate",a)),"prerender"===u.visibilityState?u.addEventListener("visibilitychange",function(){n||"visible"!==u.visibilityState||a()}):a();var w={},h=!1;function l(t,e,n,i){var a,r,o,l,c,s;o=e,l=!(r=t).target||r.target.match(/^_(self|parent|top)$/i),c="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),s=o.defaultPrevented&&!h,a=l&&c&&!s?(e.preventDefault(),h=!0,g(n,function(){window.location=t.href})):g(n,null),setTimeout(a,5e3),function(t,e,n){if(w[t])return;w[t]=!0,plausible(t,{props:e,callback:n})}(n,i,a)}function g(t,e){return function(){delete w[t],e&&0==Object.keys(w).length&&e()}}function c(t){var e,n=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target);(e=n)&&e.href&&e.host&&e.host!==s.host&&l(n,t,"Outbound Link: Click",{url:n.href})}u.addEventListener("click",c),u.addEventListener("auxclick",c)}();