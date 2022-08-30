!function(){"use strict";var e,t,n,p=window.location,f=window.document,d=f.getElementById("plausible"),g=d.getAttribute("data-api")||(e=d.src.split("/"),t=e[0],n=e[2],t+"//"+n+"/api/event");function v(e){console.warn("Ignoring Event: "+e)}function r(e,t){try{if("true"===window.localStorage.plausible_ignore)return v("localStorage flag")}catch(e){}var n=d&&d.getAttribute("data-include"),r=d&&d.getAttribute("data-exclude");if("pageview"===e){var a=!n||n&&n.split(",").some(o),i=r&&r.split(",").some(o);if(!a||i)return v("exclusion rule")}function o(e){return p.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var l={};l.n=e,l.u=t&&t.u?t.u:p.href,l.d=d.getAttribute("data-domain"),l.r=f.referrer||null,l.w=window.innerWidth,t&&t.meta&&(l.m=JSON.stringify(t.meta)),t&&t.props&&(l.p=t.props);var u=d.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),c=l.p||{};u.forEach(function(e){var t=e.replace("event-",""),n=d.getAttribute(e);c[t]=c[t]||n}),l.p=c;var s=new XMLHttpRequest;s.open("POST",g,!0),s.setRequestHeader("Content-Type","text/plain"),s.send(JSON.stringify(l)),s.onreadystatechange=function(){4===s.readyState&&t&&t.callback&&t.callback()}}var a=window.plausible&&window.plausible.q||[];window.plausible=r;for(var i=0;i<a.length;i++)r.apply(this,a[i]);var s={},w=!1;function o(e,t,n,r){var a,i,o,l,u,c;o=t,l=!(i=e).target||i.target.match(/^_(self|parent|top)$/i),u="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),c=o.defaultPrevented&&!w,a=l&&u&&!c?(t.preventDefault(),w=!0,h(n,function(){window.location=e.href})):h(n,null),setTimeout(a,5e3),function(e,t,n){if(s[e])return;s[e]=!0,plausible(e,{props:t,callback:n})}(n,r,a)}function h(e,t){return function(){delete s[e],t&&0==Object.keys(s).length&&t()}}function l(e){var t,n=function(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}(e.target);(t=n)&&t.href&&t.host&&t.host!==p.host&&o(n,e,"Outbound Link: Click",{url:n.href})}f.addEventListener("click",l),f.addEventListener("auxclick",l)}();