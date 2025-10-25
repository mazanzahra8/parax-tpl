// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination, Grid, Autoplay, Thumbs, EffectCards, FreeMode ,EffectCoverflow } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import 'swiper/css/grid';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
Swiper.use([Navigation, Pagination, Grid, Autoplay, Thumbs, EffectCards, FreeMode ,EffectCoverflow]);
window.Swiper = Swiper
import PureCounter from "@srexi/purecounterjs";
window.PureCounter = PureCounter;

// Alpinejs
import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach(el => observer.observe(el));



