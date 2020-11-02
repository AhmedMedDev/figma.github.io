//TESTIMONIAL ADMIN DASHBOARD 
     $('.dashCon .row1:nth-child(1) .testimonial ').slick({
      prevArrow:$(' .row1:nth-child(1) .prev'),
      nextArrow:$(' .row1:nth-child(1) .next'),
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
//      autoplay:true,
      autoplaySpeed:1500,
      centerMode: true,
      responsive: [
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                infinite: true,
              }
            },
          {
                breakpoint: 990,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
              }
            },
            {
                breakpoint: 576,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
              }
            },
          {
                breakpoint: 320,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
              }
            },
          ]


      
  });
     $('.dashCon .row1:nth-child(2) .testimonial ').slick({
      prevArrow:$(' .row1:nth-child(2) .prev'),
      nextArrow:$(' .row1:nth-child(2) .next'),
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
//      autoplay:true,
      autoplaySpeed:1500,
      centerMode: true,
      responsive: [
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                infinite: true,
              }
            },
          {
                breakpoint: 990,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
              }
            },
            {
                breakpoint: 576,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
              }
            },
          {
                breakpoint: 320,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
              }
            },
          ]


      
  });