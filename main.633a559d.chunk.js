(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
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

// EXTERNAL MODULE: ./src/css/normalize.css
var normalize = __webpack_require__(4);

// EXTERNAL MODULE: ./src/css/main.css
var main = __webpack_require__(5);

// CONCATENATED MODULE: ./src/images/placeholder.png
/* harmony default export */ var placeholder = (__webpack_require__.p + "assets/placeholder.bd4ea0b3.png");
// CONCATENATED MODULE: ./src/index.js



// JS
 // CSS


 // assets



var init = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
    var myLazyLoad;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('hello, world');
            myLazyLoad = new lazyload_min_default.a();
            document.addEventListener('DOMContentLoaded', function (ev) {
              // lazyload images
              myLazyLoad.update(); // lazyLoadImages(window, document);
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}(); // const lazyLoadImages = (w,d) => {
// 	// https://www.andreaverlicchi.eu/lazyload/
// 	const b = d.getElementsByTagName('body')[0];
// 	const s = d.createElement('script'); 
// 	const v = !('IntersectionObserver' in w) ? '8.7.0' : '10.5.1';
// 	s.async = true;
// 	s.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanilla-lazyload/' + v + '/lazyload.min.js';
// 	w.lazyLoadOptions = {}; // Your options here. See 'recipes' for more information about async.
// 	b.appendChild(s);
// }


init();

/***/ })
],[[6,1,2]]]);