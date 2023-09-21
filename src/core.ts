function random<T>(list: Array<T>): T;
function random(max: number): number;
function random(form: number, to: number): number;
function random(arg1, arg2?) {
  // random(list) 从list返回随机值
  if (Array.isArray(arg1)) {
    const list = arg1;
    return list[random(list.length)];
  }

  // random(from,to) 从form-to之间取随机数，不包含to
  if (typeof arg2 === 'number') {
    const list = [];
    const from = arg1;
    const to = arg2;
    for (let i = from; i < to; i++) {
      list.push(i);
    }
    return random(list);
  }

  // random(max)
  const max = arg1;
  return Math.floor(Math.random() * max);
}

function range(from: number, to: number) {
  const list = [];
  for (let i = from; i <= to; i++) {
    list.push(i);
  }
  return list;
}

function repeat<T>(value: (i: number) => T, count = 3): Array<T> {
  if (count > 0) {
    const list = [];
    for (let i = 0; i < count; i++) {
      list.push(value(i));
    }
    return list;
  }
  return [];
}

function capitalize(string: string) {
  return string.replace(/./, (letter) => letter.toUpperCase());
}

export { capitalize, random, range, repeat };
