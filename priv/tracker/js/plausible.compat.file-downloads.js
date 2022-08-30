!function(){"use strict";var t,e,i,a=window.location,r=window.document,o=r.getElementById("plausible"),l=o.getAttribute("data-api")||(t=o.src.split("/"),e=t[0],i=t[2],e+"//"+i+"/api/event");function p(t){console.warn("Ignoring Event: "+t)}function n(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(a.hostname)||"file:"===a.protocol)return p("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return p("localStorage flag")}catch(t){}var i={};i.n=t,i.u=a.href,i.d=o.getAttribute("data-domain"),i.r=r.referrer||null,i.w=window.innerWidth,e&&e.meta&&(i.m=JSON.stringify(e.meta)),e&&e.props&&(i.p=e.props);var n=new XMLHttpRequest;n.open("POST",l,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(i)),n.onreadystatechange=function(){4===n.readyState&&e&&e.callback&&e.callback()}}}var s=window.plausible&&window.plausible.q||[];window.plausible=n;for(var c,u=0;u<s.length;u++)n.apply(this,s[u]);function d(){c!==a.pathname&&(c=a.pathname,n("pageview"))}var f,w=window.history;w.pushState&&(f=w.pushState,w.pushState=function(){f.apply(this,arguments),d()},window.addEventListener("popstate",d)),"prerender"===r.visibilityState?r.addEventListener("visibilitychange",function(){c||"visible"!==r.visibilityState||d()}):d();var v={},g=!1;function h(t,e,i,n){var a,r,o,l,p,s;o=e,l=!(r=t).target||r.target.match(/^_(self|parent|top)$/i),p="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),s=o.defaultPrevented&&!g,a=l&&p&&!s?(e.preventDefault(),g=!0,m(i,function(){window.location=t.href})):m(i,null),setTimeout(a,5e3),function(t,e,i){if(v[t])return;v[t]=!0,plausible(t,{props:e,callback:i})}(i,n,a)}function m(t,e){return function(){delete v[t],e&&0==Object.keys(v).length&&e()}}var y=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],b=o.getAttribute("file-types"),S=o.getAttribute("add-file-types"),k=b&&b.split(",")||S&&S.split(",").concat(y)||y;function x(t){var e,i,n=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target),a=n&&n.href&&n.href.split("?")[0];i=(e=a)&&e.split(".").pop(),k.some(function(t){return t===i})&&h(n,t,"File Download",{url:a})}r.addEventListener("click",x),r.addEventListener("auxclick",x)}();