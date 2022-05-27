(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ua"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ua"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ua);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _ua) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.keys(_ua).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (key in _exports && _exports[key] === _ua[key]) return;
    Object.defineProperty(_exports, key, {
      enumerable: true,
      get: function () {
        return _ua[key];
      }
    });
  });
});