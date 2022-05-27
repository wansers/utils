"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ua = require("./ua");

Object.keys(_ua).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ua[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ua[key];
    }
  });
});