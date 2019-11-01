$("li.menu-item > a").click(function() {
  $("li.menu-item").removeClass("active");
  $(".toggle-div").hide();
  $(this)
    .parent()
    .toggleClass("active")
    .find(".toggle-div")
    .toggle();
});
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  items: 1,
  nav: true,
  dots: false,
  navText: [
    "<em class='fa fa-chevron-left'></em>",
    "<em class='fa fa-chevron-right'></em>"
  ],
  autoplay: true,
  lazyLoad: true,
  responsiveClass: true
});
