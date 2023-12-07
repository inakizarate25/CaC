
 // Para avanzar al siguiente slide
 $('.next').click(function(){
   $('.carousel-item').slick('slickNext');
 });

 // Para retroceder al slide anterior
 $('.prev').click(function(){
   $('.carousel-item').slick('slickPrev');
 });


$('.carousel-item').slick({
  infinite: true,
  speed: 200,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

