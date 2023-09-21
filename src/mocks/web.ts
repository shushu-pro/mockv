import { integer, repeat, string } from '..';

function domain() {
  return `${string()}.com`;
}

function url(isHttps = true) {
  return isHttps ? https() : http();
}

function http() {
  return `http://${domain()}`;
}

function https() {
  return `https://${domain()}`;
}

function email() {
  return `${string()}@${domain()}`;
}

function ipv4() {
  return repeat(() => `${integer(0, 255)}.`, 3).join('') + integer(0, 255);
}

function img(option: {
  size?: `${number}x${number}`;
  background?: string;
  color?: string;
  text?: string;
  type?: 'gif' | 'png' | 'jpg';
}): string;

function img(
  size?: `${number}x${number}`,
  background?: string,
  color?: string,
  text?: string,
  type?: string
): string;

function img(size?, background?, color?, text?, type?) {
  if (typeof size === 'object') {
    const option = size;
    size = option.size;
    background = option.background;
    color = option.color;
    text = option.text;
    type = option.type;
  }
  size = size || '100x100';
  background = background ? `/${background.replace(/^#/, '')}` : '';
  color = color ? `/${color.replace(/^#/, '')}` : '';
  text = text ? `&text=${text}` : '';
  type = type ? `.${type}` : '';

  if (color && background === '') {
    background = '/fff';
  }

  // https://dummyimage.com/600x400/cc00cc/470047.png&text=hello

  return ['https://dummyimage.com/', size, background, color, type, text].join(
    ''
  );
}

export { domain, email, http, https, img, ipv4, url };
