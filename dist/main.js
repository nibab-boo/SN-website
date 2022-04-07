/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/app.js":
/*!********************!*\
  !*** ./lib/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _super_circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./super_circle */ "./lib/super_circle.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

 // import './../css/style.css

/* Set the width of the side navigation to 250px */

var openClose = document.getElementById("open-close");

var openNav = function openNav() {
  document.getElementById("mySidenav").classList.toggle("working"); // document.querySelector(".menu").display="none";

  document.querySelector(".menu").style.display = "none";
  document.querySelectorAll(".menu-item").forEach(function (item) {
    item.style.display = "none";
  }); // adding class name to links+++

  var movements = document.querySelectorAll(".movement"); // console.log(movements);

  for (var i = 0; i < movements.length; i++) {
    movements.item(i).classList.toggle("nav-link");
  } // close and open button with rotation


  document.querySelector('.flip-card-inner').classList.toggle("flip-card-inner-clicked"); //toggling class on icons

  var icons = document.querySelectorAll(".icons li");
  icons.forEach(function (icon) {
    icon.classList.toggle("x-move");
  }); // image-overshadow width control

  var imageOverShadow = document.querySelector('.image-over-shadow');
  console.log(_typeof(imageOverShadow.style.width));

  if (imageOverShadow.style.width == "0px") {
    console.log(imageOverShadow.style.width);
    imageOverShadow.style.width = "100%";
    imageOverShadow.style.transition = "none";
  } else {
    console.log(imageOverShadow.style.width);
    imageOverShadow.style.width = "0";
    imageOverShadow.style.transition = "width 0.6s 0.8s ease-in-out";
  }
};

openClose.addEventListener("click", openNav); // document.addEventListener("DOMContentLoaded", makingCircle);

Object(_super_circle__WEBPACK_IMPORTED_MODULE_0__["makingCircle"])();
document.querySelector(".nav-button").addEventListener("click", function (event) {
  event.preventDefault();
  openNav();
  var menuItem = document.getElementById("".concat(event.target.dataset.id));
  menuItem.parentElement.parentElement.style.display = "block";
  menuItem.style.display = "block";
  setTimeout(function () {
    menuItem.scrollIntoView({
      behavior: 'smooth'
    });
  }, 1000);
}, false);
document.querySelector(".nav-button").addEventListener("mouseover", function (event) {
  document.querySelector(".main-image").src = event.target.dataset.url;
});
document.querySelector(".floating-menu").addEventListener("click", function (e) {
  this.classList.toggle("clicked");
});

/***/ }),

/***/ "./lib/super_circle.js":
/*!*****************************!*\
  !*** ./lib/super_circle.js ***!
  \*****************************/
/*! exports provided: makingCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makingCircle", function() { return makingCircle; });
var makingCircle = function makingCircle() {
  var curvingThing = document.querySelector(".text");
  curvingThing.innerHTML = curvingThing.textContent.replace(/(\w|\s)/g, "<span>$&</span>");
  var allLetters = document.querySelectorAll("span");
  console.log(allLetters);

  for (var i = 0; i < allLetters.length; i++) {
    allLetters[i].style.transform = "rotate(" + i * 12.5 + "deg)";
  }

  ;
};



/***/ })

/******/ });
//# sourceMappingURL=main.js.map