
import './styles/main.scss';
import preloader from './js/preloader';
import algorithmAnimation from './js/algorithmAnimation';
import caseSwitch from './js/caseSwitch';
import swiper from './js/swiper';

window.addEventListener('DOMContentLoaded', function() {
    preloader();
    algorithmAnimation();
    caseSwitch();
    swiper();
});

// load all images
//каждую подпапку импортируем отдельно (иконки просто копируются в конфиге)
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg|gif)$/));
const slider = importAll(require.context('./images/slider', false, /\.(png|jpe?g|svg|gif)$/));
const bg = importAll(require.context('./images/bg', false, /\.(png|jpe?g|svg|gif)$/));
const figureBg = importAll(require.context('./images/figure-bg', false, /\.(png|jpe?g|svg|gif)$/));
const testimonials = importAll(require.context('./images/testimonials', false, /\.(png|jpe?g|svg|gif)$/));
const benefit = importAll(require.context('./images/benefit', false, /\.(png|jpe?g|svg|gif)$/));

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

