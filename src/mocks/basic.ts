import { random, range, repeat } from '..';

// [A-Za-z]
const Alphabet = range(65, 90)
  .concat(range(97, 122))
  .map((code) => String.fromCharCode(code));

// [0-9]
const Numbers = range(0, 9);

function letter() {
  return random(Alphabet);
}

function number() {
  return random(Numbers);
}

function boolean() {
  return random([true, false]);
}

function bool() {
  return boolean();
}

function integer(): number;
function integer(max: number): number;
function integer(form: number, to: number): number;
function integer(arg1?, arg2?) {
  // integer(from, to) 返回from-to范围内的整数
  if (typeof arg2 === 'number') {
    const from = arg1;
    const to = arg2;
    return integer(to - from + 1) + from - 1;
  }

  // integer(max) 返回<=max的整数
  if (typeof arg1 === 'number') {
    const max = arg1;
    return random(max) + 1;
  }

  // integer() 返回任意整数
  return random(Number.MAX_VALUE) + 1;
}

function decimal(length = 2) {
  const from = 10 ** (length - 1);
  const to = 10 ** length - 1;

  return (integer(from, to) * 100 + random(100)) / 100;
}

function symbol() {
  return random('!'.split(''));
}

function string(
  length = 5,
  type: 'string' | 'number' | 'symbol' | 'hex' | 'mix' = 'string'
) {
  const dice = {
    string: () => letter(),
    number: () => number(),
    symbol: () => symbol(),
    hex: () => random('0123456789ABCDEF'.split('')),
    mix: () => random([letter(), number(), symbol()]),
  }[type];

  return repeat(() => dice(), length).join('');
}

export { bool, boolean, decimal, integer, letter, number, string, symbol };
