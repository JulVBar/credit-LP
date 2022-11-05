
import './styles/main.scss';
import preloader from './js/preloader';
import algorithmAnimation from './js/algorithmAnimation';


window.addEventListener('DOMContentLoaded', function() {
    // preloader();
    algorithmAnimation();
});

// load all images
//каждую подпапку импортируем отдельно (иконки просто копируются в конфиге)
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg|gif)$/));
const slider = importAll(require.context('./images/slider', false, /\.(png|jpe?g|svg|gif)$/));
const bg = importAll(require.context('./images/bg', false, /\.(png|jpe?g|svg|gif)$/));
const figureBg = importAll(require.context('./images/figure-bg', false, /\.(png|jpe?g|svg|gif)$/));

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

