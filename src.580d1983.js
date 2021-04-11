// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"A64P":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var logo = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMTAwIDM1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDp5ZWxsb3c7fQo8L3N0eWxlPgo8Zz4KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iNDAsMzUgNDAsMjUuOSAzMCwyNi44IDMwLDM1IAkiLz4KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iNTUsMjQuNiA0NSwyNS40IDQ1LDM1IDU1LDM1IAkiLz4KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iNDAsMCAzMCwwIDMwLDIxLjcgNDAsMjAuOSAJIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjU1LDAgNDUsMCA0NSwyMC40IDU1LDE5LjYgCSIvPgoJPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI3MCwyMy4zIDYwLDI0LjEgNjAsMzUgNzAsMzUgCSIvPgoJPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI3NSwyMi44IDc1LDM1IDEwMCwzNSAxMDAsMjAuNiAJIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjYwLDAgNjAsMTkuMSA3MCwxOC4yIDcwLDAgCSIvPgoJPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyNSwyNy4yIDAsMjkuNCAwLDM1IDI1LDM1IAkiLz4KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTAwLDEwIDg1LDEwIDg1LDAgNzUsMCA3NSwxNy44IDEwMCwxNS42IAkiLz4KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjUsMjIuMiAyNSwwIDE1LDAgMTUsMTAgMTAsMTAgMTAsMCAwLDAgMCwyNC40IAkiLz4KPC9nPgo8L3N2Zz4K";
var image = new Image();
image.src = logo;
var _default = image;
exports.default = _default;
},{}],"Focm":[function(require,module,exports) {
"use strict";

var _logo = _interopRequireDefault(require("./logo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var imagePixelData = null;
var IMAGE_WIDTH = 100;
var IMAGE_HEIGHT = 35;
var MULTIPLIER = calculateMultipler();
var offsetX = (canvas.width - IMAGE_WIDTH * MULTIPLIER) / 2 / MULTIPLIER;
var offsetY = (canvas.height - IMAGE_HEIGHT * MULTIPLIER) / 2 / MULTIPLIER;

_logo.default.addEventListener("load", function () {
  ctx.drawImage(_logo.default, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);
  imagePixelData = ctx.getImageData(0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);
  init();
  animate();
});

function calculateMultipler() {
  if (canvas.width < 550) return 3;
  if (canvas.width < 750) return 5;
  return 7;
}

var particleArray = [];
var mouse = {
  x: null,
  y: null,
  radius: 75
};
window.addEventListener("mousemove", function (event) {
  mouse.x = event.x - canvas.offsetLeft;
  mouse.y = event.y - canvas.offsetTop;
});
window.addEventListener("touchmove", function (event) {
  handleTouchAndMouseEvent(event);
});

function handleTouchAndMouseEvent(e) {
  if (e.type === "touchstart" || e.type === "touchmove" || e.type === "touchend" || e.type === "touchcancel") {
    var evt = typeof e.originalEvent === "undefined" ? e : e.originalEvent;
    var touch = evt.touches[0] || evt.changedTouches[0];
    mouse.x = touch.pageX;
    mouse.y = touch.pageY;
    mouse.radius = 40;
  } else if (e.type === "mousedown" || e.type === "mouseup" || e.type === "mousemove" || e.type === "mouseover" || e.type === "mouseout" || e.type === "mouseenter" || e.type === "mouseleave") {
    mouse.x = e.clientX - canvas.offsetTop;
    mouse.y = e.clientY - canvas.offsetTop;
  }
}

var Particle = /*#__PURE__*/function () {
  function Particle(x, y) {
    _classCallCheck(this, Particle);

    this.x = x;
    this.y = y;
    this.size = 1;
    this.baseX = x;
    this.baseY = y;
    this.density = Math.random() * 30 + 1;
  }

  _createClass(Particle, [{
    key: "draw",
    value: function draw() {
      ctx.fillStyle = "yellow";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.closePath();
      ctx.fill();
    }
  }, {
    key: "drawText",
    value: function drawText() {
      ctx.fillText("x:".concat(Math.floor(this.x), ", y:").concat(Math.floor(this.y), " "), this.x + this.size + 2, this.y - this.size + 2);
    }
  }, {
    key: "update",
    value: function update() {
      var dx = mouse.x - this.x;
      var dy = mouse.y - this.y;
      var distance = Math.sqrt(dx * dx + dy * dy);
      var forceX = dx / distance;
      var forceY = dy / distance;
      var maxDistance = mouse.radius;
      var force = (maxDistance - distance) / maxDistance;
      var directionX = forceX * force * this.density;
      var directionY = forceY * force * this.density;

      if (distance < maxDistance) {
        this.x -= directionX;
        this.y -= directionY;
      } else {
        if (this.x !== this.baseX) {
          var _dx = this.x - this.baseX;

          this.x -= _dx / 10;
        }

        if (this.y !== this.baseY) {
          var _dy = this.y - this.baseY;

          this.y -= _dy / 10;
        }
      }
    }
  }]);

  return Particle;
}();

function init() {
  particleArray = [];
  var imageWidth = imagePixelData.width;
  var imageHeight = imagePixelData.height;

  for (var y = 0; y < imageHeight; y++) {
    for (var x = 0; x < imageWidth; x++) {
      // 4. value for alpha
      if (imagePixelData.data[y * 4 * imagePixelData.width + x * 4 + 3] > 128) {
        var positionX = x + offsetX;
        var positionY = y + offsetY;
        particleArray.push(new Particle(positionX * MULTIPLIER, positionY * MULTIPLIER));
      }
    }
  }
}

var animationFrame = null;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particleArray.forEach(function (particle, index) {
    particle.draw();
    particle.update();
  });
  animationFrame = window.requestAnimationFrame(animate);
}

window.addEventListener("resize", function () {
  window.cancelAnimationFrame(animationFrame); // canvas.width = window.innerWidth;
  // canvas.height = window.innerHeight;

  MULTIPLIER = calculateMultipler();
  offsetX = (canvas.width - IMAGE_WIDTH * MULTIPLIER) / 2 / MULTIPLIER;
  offsetY = (canvas.height - IMAGE_HEIGHT * MULTIPLIER) / 2 / MULTIPLIER;
  init();
  animate();
});
},{"./logo":"A64P"}]},{},["Focm"], null)
//# sourceMappingURL=src.8b933c72.js.map