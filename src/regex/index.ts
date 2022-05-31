import type { RegExpMap } from '../common';

const regexMap: RegExpMap = {
  digit: /^\d+$/,
  integer: /^\d+$/,
  decimal: /^[+-]?(?:\d+|\d+\.\d*|\.\d+)$/,
  phone: /^((13[0-9])|(14[5,7,9])|(15[0-3,5-9])|(16[0,1,6,7])|(17[0-9])|(18[0-9])|(19[1,5,8,9]))\d{8}$/,
}

const regex = (reg: RegExp, value: string): boolean => reg.test(value);

const isDigit = (value: string | number): boolean => regex(regexMap.digit, String(value));
const isInteger = (value: string | number): boolean => regex(regexMap.integer, String(value));
const isDecimal = (value: string | number): boolean => regex(regexMap.decimal, String(value));
const isPhoneNum = (value: string | number): boolean => regex(regexMap.phone, String(value));

export {
  isDigit,
  isInteger,
  isDecimal,
  isPhoneNum,
}
