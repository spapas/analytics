!function(){"use strict";var o=window.location,l=window.document,p=l.currentScript,c=p.getAttribute("data-api")||new URL(p.src).origin+"/api/event";function u(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return u("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return u("localStorage flag")}catch(t){}var n={};n.n=t,n.u=e&&e.u?e.u:o.href,n.d=p.getAttribute("data-domain"),n.r=l.referrer||null,n.w=window.innerWidth,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=e.props);var r=p.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),i=n.p||{};r.forEach(function(t){var e=t.replace("event-",""),n=p.getAttribute(t);i[e]=i[e]||n}),n.p=i;var a=new XMLHttpRequest;a.open("POST",c,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(n)),a.onreadystatechange=function(){4===a.readyState&&e&&e.callback&&e.callback()}}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var n=0;n<e.length;n++)t.apply(this,e[n]);var s={},f=!1;function a(t,e,n,r){var i,a,o,l,p,c;o=e,l=!(a=t).target||a.target.match(/^_(self|parent|top)$/i),p="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),c=o.defaultPrevented&&!f,i=l&&p&&!c?(e.preventDefault(),f=!0,d(n,function(){window.location=t.href})):d(n,null),setTimeout(i,5e3),function(t,e,n){if(s[t])return;s[t]=!0,plausible(t,{props:e,callback:n})}(n,r,i)}function d(t,e){return function(){delete s[t],e&&0==Object.keys(s).length&&e()}}var r=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],i=p.getAttribute("file-types"),w=p.getAttribute("add-file-types"),g=i&&i.split(",")||w&&w.split(",").concat(r)||r;function v(t){var e,n,r=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target),i=r&&r.href&&r.href.split("?")[0];n=(e=i)&&e.split(".").pop(),g.some(function(t){return t===n})&&a(r,t,"File Download",{url:i})}l.addEventListener("click",v),l.addEventListener("auxclick",v)}();