          // Your existing Owl Carousel initialization
          $('.owl-carousel').owlCarousel({
              loop: true,
              margin: 10,
              nav: true,
              autoplay:true,
              responsive: {
                  0: {
                      items: 1
                  },
                  600: {
                      items: 3
                  },
                  1000: {
                      items: 3
                  }
              }
          });
      $('.owl-carousel-second').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:1
              }
          }
      });

      $('.owl-carousel-third').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:5
              }
          }
      })