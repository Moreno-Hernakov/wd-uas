//  =====================[ carousel ]=====================
 var swiper = new Swiper(".swiper", {
        slidesPerView: 3,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        direction: getDirection(),
        on: {
          resize: function () {
            swiper.changeDirection(getDirection());
          },
        },
      });

      function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

        return direction;
      }
//  =====================[ END carousel ]=====================