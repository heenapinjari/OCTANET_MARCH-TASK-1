// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});



//  Video popup  code
var player;

function openPopup(videoId) {
  var modal = document.getElementById("popup");
  var videoFrame = document.getElementById("videoFrame");
  videoFrame.src = "https://www.youtube.com/embed/" + videoId;
  modal.style.display = "block";
}

function closePopup() {
  var modal = document.getElementById("popup");
  var videoFrame = document.getElementById("videoFrame");
  videoFrame.src = "";
  modal.style.display = "none";
}

// swiper js
var swiperOptions2 = {
  loop: true,
  spaceBetween: 10,
  grabCursor: false,
  slidesPerView: 6,
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: true,
  },
  noSwiping: true,
  noSwipingClass: 'swiper-slide',
  speed: 4000,
  freeModeMomentum: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
};

var swiper = new Swiper(".swiper-container2", swiperOptions2);
