// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination, Grid, Autoplay, Thumbs, EffectCards, FreeMode ,EffectCoverflow,EffectFade} from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import 'swiper/css/grid';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
Swiper.use([Navigation, Pagination, Grid, Autoplay, Thumbs, EffectCards, FreeMode ,EffectCoverflow,EffectFade]);
window.Swiper = Swiper
import PureCounter from "@srexi/purecounterjs";
window.PureCounter = PureCounter;

// Alpinejs
import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();




