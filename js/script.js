$('.slider').slick({
  dots: false,
  infinite: true,
  arrows:false,
  centerMode: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: '50px',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: false,
        infinite: true,
        arrows:false,
        centerMode: true,
        autoplay: true,
        speed: 300,
        centerPadding: '50px',
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        dots: false,
        infinite: true,
        arrows:false,
        centerMode: true,
        centerPadding: '50px',
        autoplay: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        dots: false,
        infinite: true,
        arrows:false,
        centerMode: true,
        centerPadding: '500px',
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.explore_slider').slick({
  dots: true,
  arrows:false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: false,
        infinite: true,
        arrows:false,
        centerMode: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        dots: false,
        infinite: true,
        arrows:false,
        centerMode: true,
        autoplay: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        dots: false,
        infinite: true,
        arrows:false,
        centerMode: true,
        autoplay: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.testimonial_slider').slick({
  dots: true,
  arrows:false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: false,
        infinite: true,
        arrows:false,
        centerMode: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        dots: false,
        infinite: true,
        arrows:false,
        centerMode: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        dots: false,
        infinite: true,
        arrows:false,
        centerMode: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
		