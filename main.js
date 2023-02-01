
$(document).ready(function($) {
  "use strict";
 
 $(".product-list").masonry();

 $("#homepage-slides").owlCarousel({
   items: 1,
   loop: true,
   autoplay: true,
   dots: true,
   nav: true,
 });

 $('.owl-carousel').owlCarousel({
  items: 1,
  autoplay: true,
  margin: 30,
  loop: true,
});

$(".menu-trigger").on("click", function(){
  $(".off-canvar-menu, .off-canvar-overlay").addClass("active");
  return false
});

$(".menu-close, .off-canvar-overlay").on("click", function(){
  $(".off-canvar-menu, .off-canvar-overlay").removeClass("active");
});


  $("*[data-background-image]").each(function () {
    $(this).css({
        "background-image": "url(" + $(this).data("background-image") + ")",
    });
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
    },
});
 
});
