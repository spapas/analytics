!function(){"use strict";var u=window.location,p=window.document,s=p.currentScript,d=s.getAttribute("data-api")||new URL(s.src).origin+"/api/event";function f(t){console.warn("Ignoring Event: "+t)}function t(t,e){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(t){}var n=s&&s.getAttribute("data-include"),r=s&&s.getAttribute("data-exclude");if("pageview"===t){var a=!n||n&&n.split(",").some(o),i=r&&r.split(",").some(o);if(!a||i)return f("exclusion rule")}function o(t){return u.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var l={};l.n=t,l.u=e&&e.u?e.u:u.href,l.d=s.getAttribute("data-domain"),l.r=p.referrer||null,l.w=window.innerWidth,e&&e.meta&&(l.m=JSON.stringify(e.meta)),e&&e.props&&(l.p=e.props),l.h=1;var c=new XMLHttpRequest;c.open("POST",d,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(l)),c.onreadystatechange=function(){4===c.readyState&&e&&e.callback&&e.callback()}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var n=0;n<e.length;n++)t.apply(this,e[n]);var g={},v=!1;function i(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}function o(t,e,n,r){var a,i,o,l,c,u;o=e,l=!(i=t).target||i.target.match(/^_(self|parent|top)$/i),c="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),u=o.defaultPrevented&&!v,a=l&&c&&!u?(e.preventDefault(),v=!0,w(n,function(){window.location=t.href})):w(n,null),setTimeout(a,5e3),function(t,e,n){if(g[t])return;g[t]=!0,plausible(t,{props:e,callback:n})}(n,r,a)}function w(t,e){return function(){delete g[t],e&&0==Object.keys(g).length&&e()}}function r(t){var e,n=i(t.target);(e=n)&&e.href&&e.host&&e.host!==u.host&&o(n,t,"Outbound Link: Click",{url:n.href})}p.addEventListener("click",r),p.addEventListener("auxclick",r);var a=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],l=s.getAttribute("file-types"),c=s.getAttribute("add-file-types"),m=l&&l.split(",")||c&&c.split(",").concat(a)||a;function h(t){var e,n,r=i(t.target),a=r&&r.href&&r.href.split("?")[0];n=(e=a)&&e.split(".").pop(),m.some(function(t){return t===n})&&o(r,t,"File Download",{url:a})}p.addEventListener("click",h),p.addEventListener("auxclick",h)}();