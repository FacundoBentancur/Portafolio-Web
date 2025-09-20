document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const sections = document.querySelectorAll("main section");
  const hero = document.querySelector("#hero");
  const fotoHero = document.querySelector("#fotoPersonalHero");
  const sideMenu = document.querySelector("#sideMenu");

  // Menú hamburguesa
  if(menuToggle) menuToggle.addEventListener("click", ()=>{ navLinks.classList.toggle("active"); });

  function openSection(sectionId){
    const active = document.querySelector("main section:not(.hidden):not(.fade-out)");
    if(active){
      active.classList.remove("fade-in");
      active.classList.add("fade-out");
      active.addEventListener("animationend", ()=>{
        active.classList.add("hidden");
        active.classList.remove("fade-out");
        show(sectionId);
      }, {once:true});
    } else show(sectionId);
  }

  function show(sectionId){
    hero.classList.add("hidden");
    const target = document.querySelector(sectionId);
    if(target){ target.classList.remove("hidden"); target.classList.add("fade-in"); }
  }

  // Navbar clicks
  document.querySelectorAll(".nav-links a, #sideMenu a").forEach(link=>{
    const target = link.getAttribute("href");
    if(target && target.startsWith("#")){
      link.addEventListener("click", e=>{
        e.preventDefault();
        openSection(target);
        navLinks.classList.remove("active");
      });
    }
  });

  // Hero photo click
  if(fotoHero) fotoHero.addEventListener("click", ()=>{ openSection("#presentacion"); });

  // Scroll: mostrar sideMenu y ocultar nav-links
  window.addEventListener("scroll", ()=>{
    if(window.scrollY > 300){
      sideMenu.classList.remove("hidden");
      navLinks.classList.add("hidden");
    } else {
      sideMenu.classList.add("hidden");
      navLinks.classList.remove("hidden");
    }
  });
});
