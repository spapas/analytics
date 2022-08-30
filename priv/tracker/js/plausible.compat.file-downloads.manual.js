!function(){"use strict";var t,e,n,i=window.location,r=window.document,o=r.getElementById("plausible"),l=o.getAttribute("data-api")||(t=o.src.split("/"),e=t[0],n=t[2],e+"//"+n+"/api/event");function p(t){console.warn("Ignoring Event: "+t)}function a(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(i.hostname)||"file:"===i.protocol)return p("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return p("localStorage flag")}catch(t){}var n={};n.n=t,n.u=e&&e.u?e.u:i.href,n.d=o.getAttribute("data-domain"),n.r=r.referrer||null,n.w=window.innerWidth,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=e.props);var a=new XMLHttpRequest;a.open("POST",l,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(n)),a.onreadystatechange=function(){4===a.readyState&&e&&e.callback&&e.callback()}}}var c=window.plausible&&window.plausible.q||[];window.plausible=a;for(var s=0;s<c.length;s++)a.apply(this,c[s]);var u={},d=!1;function f(t,e,n,a){var i,r,o,l,p,c;o=e,l=!(r=t).target||r.target.match(/^_(self|parent|top)$/i),p="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),c=o.defaultPrevented&&!d,i=l&&p&&!c?(e.preventDefault(),d=!0,w(n,function(){window.location=t.href})):w(n,null),setTimeout(i,5e3),function(t,e,n){if(u[t])return;u[t]=!0,plausible(t,{props:e,callback:n})}(n,a,i)}function w(t,e){return function(){delete u[t],e&&0==Object.keys(u).length&&e()}}var g=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],v=o.getAttribute("file-types"),m=o.getAttribute("add-file-types"),h=v&&v.split(",")||m&&m.split(",").concat(g)||g;function y(t){var e,n,a=function(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}(t.target),i=a&&a.href&&a.href.split("?")[0];n=(e=i)&&e.split(".").pop(),h.some(function(t){return t===n})&&f(a,t,"File Download",{url:i})}r.addEventListener("click",y),r.addEventListener("auxclick",y)}();