const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  const menuicon = document.querySelector(".fa-bars");
  const nav = document.querySelector(".nav-links-container");
  menuicon.addEventListener("click", ()=>{
    nav.classList.toggle("mbl-nav");
  })