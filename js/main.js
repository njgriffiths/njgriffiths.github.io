const init = () => {
    new LazyLoad();

    // print gfx
    const imageLightbox = new FsLightbox();
    const openImageLightbox = document.getElementById('image-container');
    imageLightbox.props.sources = [
        './images/print-gfx/public-sector-salaries.jpg',
        './images/print-gfx/poli-tweets.jpg',
        './images/print-gfx/oly-anniversary.jpg',
        './images/print-gfx/ethnicity-map.jpg',
        './images/print-gfx/elxn-map-2025.jpg',
        './images/print-gfx/isp-complaints.jpg',
        './images/print-gfx/ballot-data.jpg'
    ];
    imageLightbox.props.type = 'image';
    openImageLightbox.addEventListener('click', () => {
        imageLightbox.open();
    });
    
    // illos
    const illoLightbox = new FsLightbox();
    const openIlloLightbox = document.getElementById('illo-container');
    illoLightbox.props.sources = [
        './images/illos/blue-kiyoji.jpg',
        './images/print-gfx/public-sector-salaries.jpg',
        './images/illos/rsf-one-pager.jpg',
        './images/illos/cancelled-trip.jpg',
        // './images/illos/covid-01.jpg',
        './images/illos/mary-ann-shad.jpg',
        './images/illos/solitary.jpg'
    ];
    illoLightbox.props.type = 'image';
    openIlloLightbox.addEventListener('click', () => {
        illoLightbox.open();
    });
};

document.addEventListener('DOMContentLoaded', init);
