!function(){"use strict";var e,t,n,o=window.location,l=window.document,u=l.getElementById("plausible"),c=u.getAttribute("data-api")||(e=u.src.split("/"),t=e[0],n=e[2],t+"//"+n+"/api/event");function r(e,t){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(e){}var n={};n.n=e,n.u=t&&t.u?t.u:o.href,n.d=u.getAttribute("data-domain"),n.r=l.referrer||null,n.w=window.innerWidth,t&&t.meta&&(n.m=JSON.stringify(t.meta)),t&&t.props&&(n.p=t.props);var r=u.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),a=n.p||{};r.forEach(function(e){var t=e.replace("event-",""),n=u.getAttribute(e);a[t]=a[t]||n}),n.p=a;var i=new XMLHttpRequest;i.open("POST",c,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(n)),i.onreadystatechange=function(){4===i.readyState&&t&&t.callback&&t.callback()}}var a=window.plausible&&window.plausible.q||[];window.plausible=r;for(var i=0;i<a.length;i++)r.apply(this,a[i]);var s={},f=!1;function d(e,t,n,r){var a,i,o,l,u,c;o=t,l=!(i=e).target||i.target.match(/^_(self|parent|top)$/i),u="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),c=o.defaultPrevented&&!f,a=l&&u&&!c?(t.preventDefault(),f=!0,p(n,function(){window.location=e.href})):p(n,null),setTimeout(a,5e3),function(e,t,n){if(s[e])return;s[e]=!0,plausible(e,{props:t,callback:n})}(n,r,a)}function p(e,t){return function(){delete s[e],t&&0==Object.keys(s).length&&t()}}function g(e){var t,n=function(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}(e.target);(t=n)&&t.href&&t.host&&t.host!==o.host&&d(n,e,"Outbound Link: Click",{url:n.href})}l.addEventListener("click",g),l.addEventListener("auxclick",g)}();