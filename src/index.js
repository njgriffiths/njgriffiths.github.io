// JS
require('fslightbox');
import LazyLoad from 'vanilla-lazyload';

// CSS
import './css/main.css';
import './css/normalize.css';
import './css/photoswipe.css';

// IMG - THUMBS
import placeholder from './images/placeholder.png';
import bc_election from './images/bc-election.jpg';
import print_thumbnail from './images/print-thumbnail.jpg';
import brewery_bike from './images/brewery-bike-tour.jpg';
import second_line from './images/second-line.jpg';
import calais from './images/calais.jpg';
// import shrimp_sheds from './images/shrimp-sheds.jpg';
import covid_20k from './images/covid-20k.jpg';
import slave_fishermen from './images/slave-fishermen.jpg';
import daily_360 from './images/daily-360.png';
import suite_life from './images/suite-life.jpg';
import eln_2012 from './images/eln-2012.jpg';
import taser_illo from './images/taser-illo.jpg';
// import energize_bridgewater from './images/energize-bridgewater.jpg';
// import trading_signals from './images/trading-signals.jpg';
// import focus_dprk from './images/focus-dprk.jpg';
import transgender_youth from './images/transgender-youth.jpg';
import honduras from './images/honduras.jpg';
import honor_killings from './images/honor-killings.jpg';
import two_koreas from './images/two-koreas-2.jpg';
import instagram_parks from './images/instagram-parks.jpg';
import uss_gerald from './images/uss-gerald-ford.jpg';
import medal from './images/medal.jpg';
import vpd_budget from './images/vpd-budget.jpg';
import nimrud_riches from './images/nimrud-riches.jpg';
// import wc_goals from './images/wc-goals.jpg';
import old_world from './images/old-world.jpg';
import weegee from './images/weegee.jpg';
import paektu from './images/paektu.jpg';
import worldport from './images/worldport.jpg';
import urban_forest from './images/urban-forest.jpg';
import heat_islands from './images/heat-islands.jpg';
import toxic_drugs from './images/toxic-drug-deaths.jpg';
import iio_charges from './images/iio-charges.jpg';
import seniors_rent from './images/seniors-rent.jpg';
import nonbinary_comic from './images/nonbinary-comic.jpg';


// IMG - PRINT
import oly from './images/print-gfx/oly-anniversary.jpg';
import tweets from './images/print-gfx/poli-tweets.jpg';
import isp from './images/print-gfx/isp-complaints.jpg';
import ballot from './images/print-gfx/ballot-data.jpg';
import map from './images/print-gfx/ethnicity-map.jpg';
import pssdb from './images/print-gfx/public-sector-salaries.jpg';
// IMG – THUMBS
import './images/wildfire-map.jpg';
import './images/urban-forest.jpg';



// JS
const init = async () => {
    const myLazyLoad = new LazyLoad();

    // lightbox for print gfx
    const lightbox = new FsLightbox();
    const openLightbox = document.getElementById('image-container');
    lightbox.props.sources = [pssdb, tweets, map, oly, isp, ballot];
    openLightbox.addEventListener('click', () => {
        lightbox.open();
    });
}

init();