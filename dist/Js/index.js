let loadedImages=0;const images=document.querySelectorAll("img"),addLoaded=()=>loadedImages++;function toggleScrolling(e){document.querySelector("html").style.overflowY=e?"hidden":"auto",document.querySelector("body").style.overflowY=e?"hidden":"auto"}function loadPage(){function e(){document.querySelector(".hamburger").classList.toggle("is-active"),document.querySelector(".nav-page").classList.toggle("open"),toggleScrolling(document.querySelector(".hamburger").classList.contains("is-active"))}toggleScrolling(!1),document.querySelector("main").hidden=!1,AOS.init({duration:1e3,once:!0,mirror:!0}),document.querySelector(".hamburger").addEventListener("click",(function(){e()})),document.querySelectorAll(".nav-page a").forEach(o=>o.addEventListener("click",e)),document.querySelector("main").hidden=!1,gsap.from(".header-items span",{duration:1,x:"-100%",stagger:.3,opacity:0}),gsap.from(".square button",{duration:1,x:"-100%",opacity:0}),gsap.from("nav",{duration:1,y:"-100%",opacity:0}),new Waypoint({element:document.getElementById("risk"),handler:function(e){document.querySelector("header").classList.toggle("light"),document.querySelector(".normal-logo").src="Logo.png"===document.querySelector(".normal-logo").src.split("/").splice(-1)[0]?"./dist/images/Logo-white.png":"./dist/images/Logo.png"},offset:200})}toggleScrolling(!0),images.forEach(e=>{e.onload=()=>{loadedImages++,loadedImages===images.length&&(loadPage(),document.querySelector(".loading-page").classList.toggle("loaded")),console.log(loadedImages,images.length)}}),console.log(images);
//# sourceMappingURL=index.js.map
