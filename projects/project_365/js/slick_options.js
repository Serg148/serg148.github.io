 $('.SliderTop__Slider').slick({
    infinite: true,
    centerMode: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: true,
    dots: false,
    responsive: [
    {
      breakpoint: 1440,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1
      }
    }
    ]
  });
 $('.ToursCarousel').slick({
    infinite: true,
    centerMode: false,
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: true,
    dots: false,
    responsive: [
    {
      breakpoint: 1440,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 3
      }
    },{
      breakpoint: 990,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 2
      }
    },{
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1
      }
    },
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
 $('.HotelsCarousel').slick({
    infinite: true,
    centerMode: false,
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: true,
    dots: false,
    responsive: [
    {
      breakpoint: 1440,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 3
      }
    },{
      breakpoint: 990,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 2
      }
    },{
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1
      }
    },
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