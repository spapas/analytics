!function(){"use strict";var t,e,n,i=window.location,r=window.document,o=r.getElementById("plausible"),l=o.getAttribute("data-api")||(t=o.src.split("/"),e=t[0],n=t[2],e+"//"+n+"/api/event");function a(t,e){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(t){}var n={};n.n=t,n.u=e&&e.u?e.u:i.href,n.d=o.getAttribute("data-domain"),n.r=r.referrer||null,n.w=window.innerWidth,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=e.props),n.h=1;var a=new XMLHttpRequest;a.open("POST",l,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(n)),a.onreadystatechange=function(){4===a.readyState&&e&&e.callback&&e.callback()}}var c=window.plausible&&window.plausible.q||[];window.plausible=a;for(var p=0;p<c.length;p++)a.apply(this,c[p]);var u={},s=!1;function d(t){for(;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;return t}function f(t,e,n,a){var i,r,o,l,c,p;o=e,l=!(r=t).target||r.target.match(/^_(self|parent|top)$/i),c="click"===o.type&&!(o.ctrlKey||o.metaKey||o.shiftKey),p=o.defaultPrevented&&!s,i=l&&c&&!p?(e.preventDefault(),s=!0,g(n,function(){window.location=t.href})):g(n,null),setTimeout(i,5e3),function(t,e,n){if(u[t])return;u[t]=!0,plausible(t,{props:e,callback:n})}(n,a,i)}function g(t,e){return function(){delete u[t],e&&0==Object.keys(u).length&&e()}}function v(t){var e,n=d(t.target);(e=n)&&e.href&&e.host&&e.host!==i.host&&f(n,t,"Outbound Link: Click",{url:n.href})}r.addEventListener("click",v),r.addEventListener("auxclick",v);var w=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],h=o.getAttribute("file-types"),m=o.getAttribute("add-file-types"),y=h&&h.split(",")||m&&m.split(",").concat(w)||w;function b(t){var e,n,a=d(t.target),i=a&&a.href&&a.href.split("?")[0];n=(e=i)&&e.split(".").pop(),y.some(function(t){return t===n})&&f(a,t,"File Download",{url:i})}r.addEventListener("click",b),r.addEventListener("auxclick",b)}();