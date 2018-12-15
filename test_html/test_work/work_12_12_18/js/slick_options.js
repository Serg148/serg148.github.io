 $('.carousel__container').slick({
    infinite: true,
    centerMode: false,
    slidesToScroll: 1,
    slidesToShow: 4,
    arrows: true,
    dots: false,
    responsive: [
    {
      breakpoint: 1300,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 4
      }
    },{
      breakpoint: 990,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 3
      }
    },{
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 2
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