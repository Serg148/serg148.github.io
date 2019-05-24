$(document).ready(function(){
  $("#ExamplesOfOurWorkCarousel").owlCarousel({
    items : 3,
    nav : true,
    dots : false,
    loop : true
  });
  $("#ProductsInStockCarousel").owlCarousel({
    nav : true,
    dots : true,
    loop : true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 4
      }
    }
  });
  $(".owl-carousel").owlCarousel({
    items : 1,
    nav : true,
    dots : true,
    loop : true
  });
  
});


