// TODO: Modernize
/* eslint-disable */
export const range = function (
  start: number | string,
  end: number | string,
  step: number
) {
  var range = [];
  var typeofStart = typeof start;
  var typeofEnd = typeof end;

  if (step === 0) {
    throw TypeError('Step cannot be zero.');
  }

  if (typeof end === 'undefined' && typeof 'step' === 'undefined') {
    end = start;
    start = 0;
    typeofStart = typeof start;
    typeofEnd = typeof end;
  }

  if (typeofStart == 'undefined' || typeofEnd == 'undefined') {
    throw TypeError('Must pass start and end arguments.');
  } else if (typeofStart != typeofEnd) {
    throw TypeError('Start and end arguments must be of same type.');
  }

  typeof step == 'undefined' && (step = 1);

  if (end < start) {
    step = -step;
  }

  if (typeof start == 'number') {
    while (step > 0 ? end >= start : end <= start) {
      range.push(start);
      start += step;
    }
  } else if (typeof start == 'string' && typeof end == 'string') {
    if (start.length != 1 || end.length != 1) {
      throw TypeError('Only strings with one character are supported.');
    }

    start = start.charCodeAt(0);
    end = end.charCodeAt(0);

    while (step > 0 ? end >= start : end <= start) {
      range.push(String.fromCharCode(start));
      start += step;
    }
  } else {
    throw TypeError('Only string and number types are supported');
  }

  return range;
};
/* eslint-enable */

export const sample = (arr: any[], len = 1) => {
  let output = [];

  for (let i = 0; i < len; i++) {
    output.push(arr[Math.floor(Math.random() * arr.length)]);
  }

  return output;
};

export const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

export const sum = (values: number[]) =>
  values.reduce((sum, value) => sum + value, 0);
export const mean = (values: number[]) => sum(values) / values.length;

export const clamp = (val: number, min = 0, max = 1) =>
  Math.max(min, Math.min(max, val));

export const roundTo = (number: number, places = 0) =>
  Math.round(number * 10 ** places) / 10 ** places;

export const debounce = (
  callback: () => void,
  wait: number,
  timeoutId: any = null
) => (...args: any[]) => {
  window.clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    callback.apply(null, args);
  }, wait);
};

export const throttle = (func: () => void, limit: number) => {
  let lastFunc: number;
  let lastRan: number;
  return function () {
    // @ts-ignore
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

export const isEmpty = (obj: object) => Object.keys(obj).length === 0;

export const pick = (obj: { [key: string]: any }, keys: string | string[]) => {
  var o: { [key: string]: any } = {};
  var i = 0;
  var key;

  keys = Array.isArray(keys) ? keys : [keys];

  while ((key = keys[i++])) {
    if (typeof obj[key] !== 'undefined') {
      o[key] = obj[key];
    }
  }
  return o;
};

export const omit = function (obj: { [key: string]: any }, key: string) {
  var newObj: { [key: string]: any } = {};

  for (var name in obj) {
    if (name !== key) {
      newObj[name] = obj[name];
    }
  }

  return newObj;
};

export const convertArrayToMap = (list: { id: string; [key: string]: any }[]) =>
  list.reduce(
    (acc, item) => ({
      ...acc,
      [item.id]: item,
    }),
    {}
  );

// Either removes or adds an item to an array
// EXAMPLE: toggleInArray([1, 2], 3) -> [1, 2, 3]
// EXAMPLE: toggleInArray([1, 2], 2) -> [1]
export const toggleInArray = (arr: any[], item: any) =>
  arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item];

// Combines 2 arrays, removing duplicates.
// EXAMPLE: mergeUnique([1, 2], [2, 3]) -> [1, 2, 3]
export const mergeUnique = (arr1: any[], arr2: any[]) =>
  arr1.concat(arr2.filter((item) => arr1.indexOf(item) === -1));

export const findRight = (
  arr: any[],
  predicate: (this: void, value: any, index: number, obj: any[]) => value is any
) => arr.slice().reverse().find(predicate);

export function requestAnimationFramePromise() {
  return new Promise((resolve) => window.requestAnimationFrame(resolve));
}

export function setTimeoutPromise(duration: number) {
  return new Promise((resolve) => window.setTimeout(resolve, duration));
}

export const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);

export const convertHexToRGBA = (hex: string, alpha = 1) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const hyphenate = (str: string) =>
  str.replace(/([A-Z])/g, '-$1').toLowerCase();

export const delay = (duration: number) =>
  new Promise((resolve) => window.setTimeout(resolve, duration));

export const getTimeOfDay = () => {
  const now = new Date();
  const hourOfDay = now.getHours();

  if (hourOfDay <= 4) {
    return 'night';
  } else if (hourOfDay <= 11) {
    return 'morning';
  } else if (hourOfDay <= 17) {
    return 'afternoon';
  } else if (hourOfDay <= 21) {
    return 'evening';
  } else {
    return 'night';
  }
};

export const generateId = (len = 4) => {
  // prettier-ignore
  const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  return sample(characters, len).join('');
};

const baseStyles = [
  'color: #F2F2F2',
  'background-color: #262D40',
  'padding: 2px 4px',
  'border-radius: 2px',
].join(';');
const primaryStyles = ['background-color: #C6797E'].join(';');
const secondaryStyles = ['background-color: #969E92'].join(';');

export const log = (msg: string, type?: 'primary' | 'secondary') => {
  let style = baseStyles + ';';
  switch (type) {
    case 'primary':
      style += primaryStyles;
      break;
    case 'secondary':
      style += secondaryStyles;
      break;
    default:
      break;
  }
  console.log(`%c${msg}`, style);
};
