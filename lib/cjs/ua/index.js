"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uaReg = require("./uaReg");

Object.keys(_uaReg).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _uaReg[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _uaReg[key];
    }
  });
});