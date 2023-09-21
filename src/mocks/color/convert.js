/* eslint-disable */
/*
    ## Color Convert

    http://blog.csdn.net/idfaya/article/details/6770414
        颜色空间RGB与HSV(HSL)的转换
*/
// https://github.com/harthur/color-convert/blob/master/conversions.js
export default {
  rgb2hsl,
  rgb2hsv,
  hsl2rgb,
  hsl2hsv,
  hsv2rgb,
  hsv2hsl,
  hsv2hex,
  rgb2hex,
  hex2rgb,
};

function rgb2hsl(rgb) {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const delta = max - min;
  let h;
  let s;
  let l;

  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  }

  h = Math.min(h * 60, 360);

  if (h < 0) {
    h += 360;
  }

  l = (min + max) / 2;

  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = delta / (max + min);
  } else {
    s = delta / (2 - max - min);
  }

  return [h, s * 100, l * 100];
}
function rgb2hsv(rgb) {
  const r = rgb[0];
  const g = rgb[1];
  const b = rgb[2];
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const delta = max - min;
  let h;
  let s;
  let v;

  if (max === 0) {
    s = 0;
  } else {
    s = ((delta / max) * 1000) / 10;
  }

  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  }

  h = Math.min(h * 60, 360);

  if (h < 0) {
    h += 360;
  }

  v = ((max / 255) * 1000) / 10;

  return [h, s, v];
}

function hsl2rgb(hsl) {
  const h = hsl[0] / 360;
  const s = hsl[1] / 100;
  const l = hsl[2] / 100;
  let t1;
  let t2;
  let t3;
  let rgb;
  let val;

  if (s === 0) {
    val = l * 255;
    return [val, val, val];
  }

  if (l < 0.5) {
    t2 = l * (1 + s);
  } else {
    t2 = l + s - l * s;
  }
  t1 = 2 * l - t2;

  rgb = [0, 0, 0];
  for (let i = 0; i < 3; i++) {
    t3 = h + (1 / 3) * -(i - 1);
    if (t3 < 0) t3++;
    if (t3 > 1) t3--;

    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3;
    } else if (2 * t3 < 1) {
      val = t2;
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    } else {
      val = t1;
    }

    rgb[i] = val * 255;
  }

  return rgb;
}

function hsl2hsv(hsl) {
  const h = hsl[0];
  let s = hsl[1] / 100;
  let l = hsl[2] / 100;
  let sv;
  let v;
  l *= 2;
  s *= l <= 1 ? l : 2 - l;
  v = (l + s) / 2;
  sv = (2 * s) / (l + s);
  return [h, sv * 100, v * 100];
}
function hsv2rgb(hsv) {
  const h = hsv[0] / 60;
  const s = hsv[1] / 100;
  let v = hsv[2] / 100;
  const hi = Math.floor(h) % 6;

  const f = h - Math.floor(h);
  const p = Math.round(255 * v * (1 - s));
  const q = Math.round(255 * v * (1 - s * f));
  const t = Math.round(255 * v * (1 - s * (1 - f)));

  v = Math.round(255 * v);

  switch (hi) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
  }
}

function hsv2hsl(hsv) {
  const h = hsv[0];
  const s = hsv[1] / 100;
  const v = hsv[2] / 100;
  let sl;
  let l;

  l = (2 - s) * v;
  sl = s * v;
  sl /= l <= 1 ? l : 2 - l;
  l /= 2;
  return [h, sl * 100, l * 100];
}

function hsv2hex(hsv) {
  return rgb2hex(...hsv2rgb(hsv));
}

// http://www.140byt.es/keywords/color
function rgb2hex(
  a, // red, as a number from 0 to 255
  b, // green, as a number from 0 to 255
  c // blue, as a number from 0 to 255
) {
  return `#${(((((256 + a) << 8) | b) << 8) | c).toString(16).slice(1)}`;
}

function hex2rgb(
  a // take a "#xxxxxx" hex string,
) {
  a = `0x${a.slice(1).replace(a.length > 4 ? a : /./g, '$&$&')}` | 0;
  return [a >> 16, (a >> 8) & 255, a & 255];
}
