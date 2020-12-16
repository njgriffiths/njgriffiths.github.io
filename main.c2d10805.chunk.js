(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(0);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(2);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/vanilla-lazyload/dist/lazyload.min.js
var lazyload_min = __webpack_require__(3);
var lazyload_min_default = /*#__PURE__*/__webpack_require__.n(lazyload_min);

// EXTERNAL MODULE: ./node_modules/photoswipe/dist/photoswipe.js
var photoswipe = __webpack_require__(4);
var photoswipe_default = /*#__PURE__*/__webpack_require__.n(photoswipe);

// EXTERNAL MODULE: ./node_modules/photoswipe/dist/photoswipe-ui-default.js
var photoswipe_ui_default = __webpack_require__(5);
var photoswipe_ui_default_default = /*#__PURE__*/__webpack_require__.n(photoswipe_ui_default);

// EXTERNAL MODULE: ./src/css/normalize.css
var normalize = __webpack_require__(6);

// EXTERNAL MODULE: ./src/css/main.css
var main = __webpack_require__(7);

// EXTERNAL MODULE: ./src/css/PhotoSwipe.css
var PhotoSwipe = __webpack_require__(8);

// EXTERNAL MODULE: ./src/css/default-skin/default-skin.css
var default_skin = __webpack_require__(9);

// CONCATENATED MODULE: ./src/images/print/public-sector-salaries-web.jpg
/* harmony default export */ var public_sector_salaries_web = (__webpack_require__.p + "assets/public-sector-salaries-web.b864ac4f.jpg");
// CONCATENATED MODULE: ./src/images/print/ethnicity-map-web.jpg
/* harmony default export */ var ethnicity_map_web = (__webpack_require__.p + "assets/ethnicity-map-web.c0fc4d2a.jpg");
// CONCATENATED MODULE: ./src/images/print/ballot-data-web.jpg
/* harmony default export */ var ballot_data_web = (__webpack_require__.p + "assets/ballot-data-web.d49f71f0.jpg");
// CONCATENATED MODULE: ./src/images/print/oly-anniversary-web.jpg
/* harmony default export */ var oly_anniversary_web = (__webpack_require__.p + "assets/oly-anniversary-web.5d4dee15.jpg");
// CONCATENATED MODULE: ./src/images/print/poli-tweets-web.jpg
/* harmony default export */ var poli_tweets_web = (__webpack_require__.p + "assets/poli-tweets-web.811a75db.jpg");
// CONCATENATED MODULE: ./src/images/print/isp-complaints-web.jpg
/* harmony default export */ var isp_complaints_web = (__webpack_require__.p + "assets/isp-complaints-web.1770a702.jpg");
// CONCATENATED MODULE: ./src/index.js



// JS


 // CSS




 // VARS

var pswpElement, container; // IMAGES







var src_images = [{
  src: public_sector_salaries_web,
  w: 1600,
  h: 1204
}, {
  src: poli_tweets_web,
  w: 1600,
  h: 1581
}, {
  src: oly_anniversary_web,
  w: 1600,
  h: 1770
}, {
  src: isp_complaints_web,
  w: 1600,
  h: 965
}, {
  src: ethnicity_map_web,
  w: 1600,
  h: 1890
}, {
  src: ballot_data_web,
  w: 1600,
  h: 1469
}]; // photoswipe options (if needed)

var options = {
  bgOpacity: 0.8,
  counterEl: false,
  fullscreenEl: false,
  history: false,
  index: 0,
  // start at first slide
  shareEl: false
};

var init = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(images) {
    var myLazyLoad;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            myLazyLoad = new lazyload_min_default.a(); // images lightbox

            pswpElement = document.querySelectorAll('.pswp')[0];
            container = document.querySelector('#image-container'); // load the lightbox on click

            container.addEventListener('click', initLightbox);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init(_x) {
    return _ref.apply(this, arguments);
  };
}();

function initLightbox() {
  var gallery = new photoswipe_default.a(pswpElement, photoswipe_ui_default_default.a, src_images, options);
  gallery.init();
}

init(src_images);

/***/ })
],[[10,1,2]]]);