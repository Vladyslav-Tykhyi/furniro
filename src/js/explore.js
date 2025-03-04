import Swiper from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 2.15,
  loop: true,
  keyboard: {
    onlyInViewport: true,
    enabled: true,
  },
  navigation: {
    nextEl: '.button-next',
  },
});
