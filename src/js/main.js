const init = () => {
    new LazyLoad();

    const lightbox = new FsLightbox();
    const openLightbox = document.getElementById('image-container');
    lightbox.props.sources = [
        './images/print-gfx/public-sector-salaries.jpg',
        './images/print-gfx/poli-tweets.jpg',
        './images/print-gfx/oly-anniversary.jpg',
        './images/print-gfx/ethnicity-map.jpg',
        './images/print-gfx/elxn-map-2025.jpg',
        './images/print-gfx/isp-complaints.jpg',
        './images/print-gfx/ballot-data.jpg'
    ];
    openLightbox.addEventListener('click', () => {
        lightbox.open();
    });
};

document.addEventListener('DOMContentLoaded', init);
