"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isWindows = exports.isMobile = exports.isMacOs = exports.isIPhoneX = exports.isIPhone = exports.isIPad = exports.isIOS = exports.isAndroid = void 0;
const uaMap = {
  Windows: /Windows/,
  MacOS: /Macintosh/,
  Mobile: /Mobi|iPh|480/,
  Android: /Android|Adr/,
  IOS: /like Mac OS X/,
  IPhone: /iPhone|iPod/,
  IPad: /iPad/,
  WeChat: /MicroMessenger/
};
const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
const userAgent = isBrowser ? window.navigator.userAgent : '';

const uaTest = type => {
  return uaMap[type].test(userAgent);
};

const isWindows = uaTest('Windows');
exports.isWindows = isWindows;
const isMacOs = uaTest('MacOS');
exports.isMacOs = isMacOs;
const isMobile = uaTest('Mobile');
exports.isMobile = isMobile;
const isAndroid = uaTest('Android');
exports.isAndroid = isAndroid;
const isIOS = uaTest('IOS');
exports.isIOS = isIOS;
const isIPhone = uaTest('IPhone');
exports.isIPhone = isIPhone;
const isIPad = uaTest('IPad');
exports.isIPad = isIPad;

const isIPhoneX = () => {
  if (typeof window !== 'undefined' && window) {
    const faultTolerantVal = 10; // 容错值

    return /iphone/gi.test(window.navigator.userAgent) && window.screen.height + faultTolerantVal >= 812;
  }

  return false;
};

exports.isIPhoneX = isIPhoneX;