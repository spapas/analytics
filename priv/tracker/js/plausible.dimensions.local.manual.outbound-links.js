!function(){"use strict";var o=window.location,u=window.document,l=u.currentScript,c=l.getAttribute("data-api")||new URL(l.src).origin+"/api/event";function t(t,e){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(t){}var n={};n.n=t,n.u=e&&e.u?e.u:o.href,n.d=l.getAttribute("data-domain"),n.r=u.referrer||null,n.w=window.innerWidth,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=e.props);var r=l.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),a=n.p||{};r.forEach(function(t){var e=t.replace("event-",""),n=l.getAttribute(t);a[e]=a[e]||n}),n.p=a;var i=new XMLHttpRequest;i.open("POST",c,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(n)),i.onreadystatechange=function(){4===i.readyState&&e&&e.callback&&e.callback()}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var n=0;n<e.length;n++)t.apply(this,e[n]);var s={},f=!1;function r(t,e,n,r){var a,i,o,u,l,c;o=e,u=!(i=t).target||i.target.match(/^_(self|parent|top)$/i),l="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),c=o.defaultPrevented&&!f,a=u&&l&&!c?(e.preventDefault(),f=!0,d(n,function(){window.location=t.href})):d(n,null),setTimeout(a,5e3),function(t,e,n){if(s[t])return;s[t]=!0,plausible(t,{props:e,callback:n})}(n,r,a)}function d(t,e){return function(){delete s[t],e&&0==Object.keys(s).length&&e()}}function a(t){var e,n=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target);(e=n)&&e.href&&e.host&&e.host!==o.host&&r(n,t,"Outbound Link: Click",{url:n.href})}u.addEventListener("click",a),u.addEventListener("auxclick",a)}();