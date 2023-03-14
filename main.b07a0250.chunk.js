(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(16);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(6);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/vanilla-lazyload/dist/lazyload.min.js
var lazyload_min = __webpack_require__(28);
var lazyload_min_default = /*#__PURE__*/__webpack_require__.n(lazyload_min);

// EXTERNAL MODULE: ./src/css/main.css
var main = __webpack_require__(69);

// EXTERNAL MODULE: ./src/css/normalize.css
var normalize = __webpack_require__(70);

// EXTERNAL MODULE: ./src/css/colors.css
var colors = __webpack_require__(71);

// CONCATENATED MODULE: ./src/data/image-list.js
var imageList = ['bc-election.jpg', 'print-thumbnail.jpg', 'brewery-bike-tour.jpg', 'second-line.jpg', 'calais.jpg', 'shrimp-sheds.jpg', 'covid-20k.jpg', 'slave-fishermen.jpg', 'daily-360.png', 'suite-life.jpg', 'eln-2012.jpg', 'taser-illo.jpg', 'energize-bridgewater.jpg', 'trading-signals.jpg', 'focus-dprk.jpg', 'transgender-youth.jpg', 'honduras.jpg', 'two-koreas-1.jpg', 'honor-killings.jpg', 'two-koreas-2.jpg', 'instagram-parks.jpg', 'uss-gerald-ford.jpg', 'medal.jpg', 'vpd-budget.jpg', 'nimrud-riches.jpg', 'wc-goals.jpg', 'old-world.jpg', 'weegee.jpg', 'paektu.jpg', 'worldport.jpg'];
/* harmony default export */ var image_list = (imageList);
// CONCATENATED MODULE: ./src/images/placeholder.png
/* harmony default export */ var placeholder = (__webpack_require__.p + "assets/placeholder.bd4ea0b3.png");
// CONCATENATED MODULE: ./src/index.js




// JS
 // CSS


 // import './css/postmedia.css';

 // import './css/fonts.css';
// IMG


 // JS

var init = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
    var myLazyLoad;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return loadImages(image_list);

          case 2:
            src_loadPlaceholderImages();
            myLazyLoad = new lazyload_min_default.a();

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}();

var loadImages = /*#__PURE__*/function () {
  var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(imgs) {
    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(imgs); // imgs.forEach(d => {
            //     import img from d;
            // });

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function loadImages(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var src_loadPlaceholderImages = function loadPlaceholderImages() {
  var imgs = document.querySelectorAll('img.lazy'); // console.log(imgs)
  // console.log(typeof(imgs))

  var img = new Image();
  img.src = placeholder;
  imgs.forEach(function (d) {
    return d.src = placeholder;
  });
};

init();

/***/ })

},[[72,1,2]]]);