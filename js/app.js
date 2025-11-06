// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination, Grid, Autoplay, Thumbs,Mousewheel, EffectCards, FreeMode ,EffectCoverflow,EffectFade} from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import 'swiper/css/grid';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
Swiper.use([Navigation, Pagination, Grid, Autoplay, Thumbs,Mousewheel, EffectCards, FreeMode ,EffectCoverflow,EffectFade]);
window.Swiper = Swiper
import PureCounter from "@srexi/purecounterjs";
window.PureCounter = PureCounter;

// Alpinejs
import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();

const productSwiper2 = new Swiper('#productSwiper2', {
    modules: [Thumbs,Mousewheel],
    direction: window.innerWidth >= 1024 ? 'vertical' : 'horizontal',
    slidesPerView: 4,
    spaceBetween: 16,
    mousewheel: true,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    
  
    breakpoints: {
      480:  { slidesPerView: 4.5 },
      768:  { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
      1280: { slidesPerView: 6.5, spaceBetween: 30},
    },
  
  
    on: {
      resize(swiper) {
        const newDir = window.innerWidth >= 1024 ? 'vertical' : 'horizontal';
        if (swiper.params.direction !== newDir) {
          swiper.changeDirection(newDir);         
        }
      },
    },
  });
  
  
  
  let productSwiper1 = new Swiper("#productSwiper1", {
    modules: [Navigation, Thumbs],
    slidesPerView: 1,
    spaceBetween: 16,
    centeredSlides: true,
    navigation: {
      nextEl: "#contactSwiperNext",
      prevEl: "#contactSwiperPrev",
    },
    thumbs: {
      swiper: productSwiper2,
    },
  });


