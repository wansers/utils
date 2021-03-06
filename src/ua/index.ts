import type { RegExpMap } from '../common';
const uaMap: RegExpMap = {
  Windows: /Windows/,
  MacOS: /Macintosh/,
  Mobile: /Mobi|iPh|480/,
  Android: /Android|Adr/,
  IOS: /like Mac OS X/,
  IPhone: /iPhone|iPod/,
  IPad: /iPad/,
  WeChat: /MicroMessenger/,
}

const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
const userAgent = isBrowser ? window.navigator.userAgent : ''

const uaTest = function(type: string): (ua?: string) => boolean {
  return function(ua: string = userAgent): boolean {
    return uaMap[type].test(ua)
  }
}

const isWindows = uaTest('Windows');
const isMacOs = uaTest('MacOS');
const isMobile = uaTest('Mobile');
const isAndroid = uaTest('Android');
const isIOS = uaTest('IOS');
const isIPhone = uaTest('IPhone');
const isIPad = uaTest('IPad');
const isIPhoneX = () => {
  if (typeof window !== 'undefined' && window) {
    const faultTolerantVal = 10; // 容错值
    return /iphone/gi.test(window.navigator.userAgent) && (window.screen.height + faultTolerantVal) >= 812;
  }
  return false;
}

export {
  isWindows,
  isMacOs,
  isMobile,
  isAndroid,
  isIOS,
  isIPad,
  isIPhone,
  isIPhoneX,
}
