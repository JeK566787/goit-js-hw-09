const e=document.querySelector("body"),o=document.querySelector("form");let t;function n(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}e.addEventListener("click",(function(){t=setInterval(n,1e3)})),o.addEventListener("click",(function(){clearInterval(t),console.log("click")}));
//# sourceMappingURL=01-color-switcher.375e5479.js.map
