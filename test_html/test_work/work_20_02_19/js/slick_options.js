 $('.SpecialOfferCarousel').slick({
    infinite: true,
    centerMode: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: true,
    dots: false,
    responsive: [
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1
      }
    }
    ]
  });