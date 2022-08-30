!function(){"use strict";var t,e,n,o=window.location,l=window.document,u=l.getElementById("plausible"),c=u.getAttribute("data-api")||(t=u.src.split("/"),e=t[0],n=t[2],e+"//"+n+"/api/event");function s(t){console.warn("Ignoring Event: "+t)}function r(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return s("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag")}catch(t){}var n={};n.n=t,n.u=e&&e.u?e.u:o.href,n.d=u.getAttribute("data-domain"),n.r=l.referrer||null,n.w=window.innerWidth,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=e.props);var r=u.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),a=n.p||{};r.forEach(function(t){var e=t.replace("event-",""),n=u.getAttribute(t);a[e]=a[e]||n}),n.p=a;var i=new XMLHttpRequest;i.open("POST",c,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(n)),i.onreadystatechange=function(){4===i.readyState&&e&&e.callback&&e.callback()}}}var a=window.plausible&&window.plausible.q||[];window.plausible=r;for(var i=0;i<a.length;i++)r.apply(this,a[i]);var f={},d=!1;function p(t,e,n,r){var a,i,o,l,u,c;o=e,l=!(i=t).target||i.target.match(/^_(self|parent|top)$/i),u="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),c=o.defaultPrevented&&!d,a=l&&u&&!c?(e.preventDefault(),d=!0,w(n,function(){window.location=t.href})):w(n,null),setTimeout(a,5e3),function(t,e,n){if(f[t])return;f[t]=!0,plausible(t,{props:e,callback:n})}(n,r,a)}function w(t,e){return function(){delete f[t],e&&0==Object.keys(f).length&&e()}}function g(t){var e,n=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target);(e=n)&&e.href&&e.host&&e.host!==o.host&&p(n,t,"Outbound Link: Click",{url:n.href})}l.addEventListener("click",g),l.addEventListener("auxclick",g)}();