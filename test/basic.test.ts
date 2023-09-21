import { expect, it } from 'vitest';

import {
  bool,
  boolean,
  decimal,
  integer,
  letter,
  number,
  string,
  symbol,
} from '../src';
import { tests } from './helper';

tests('basic.letter()', () => {
  it('letter() 返回随机字母[a-zA-Z]', () => {
    const value = letter();
    expect(value).toBeTypeOf('string');
    expect(value).toMatch(/^[a-z]$/i);
  });
});

tests('basic.number()', () => {
  it('number() 返回随机数字[0-9]', () => {
    const value = number();
    expect(value).toBeTypeOf('number');
    expect(value).gte(0);
    expect(value).lt(10);
  });
});

tests('basic.bool() 返回随机布尔值', () => {
  it('bool()', () => {
    expect(bool()).toBeTypeOf('boolean');
    expect(boolean()).toBeTypeOf('boolean');
  });
});

tests('basic.integer(~)', () => {
  it('integer() 返回随机正整数', () => {
    expect(integer()).toBeTypeOf('number');
    expect(integer()).gt(0);
  });

  it('integer(max) 返回<=max的随机正整数', () => {
    expect(integer(100)).toBeTypeOf('number');
    expect(integer(100)).gt(0);
    expect(integer(100)).lte(100);
  });

  it('integer(from,to) 返回区间[from,to]之间的随机整数，from、to可以小于0', () => {
    expect(integer(-200, -100)).toBeTypeOf('number');
    expect(integer(-200, -100)).gte(-200);
    expect(integer(-200, -100)).lte(-100);

    expect(integer(-200, 100)).toBeTypeOf('number');
    expect(integer(-200, 100)).gte(-200);
    expect(integer(-200, 100)).lte(100);

    expect(integer(100, 200)).toBeTypeOf('number');
    expect(integer(100, 200)).gte(100);
    expect(integer(100, 200)).lte(200);
  });
});

tests('basic.decimal(~)', () => {
  it('decimal() 返回2位精度的随机小数', () => {
    expect(decimal()).toBeTypeOf('number');
    expect(decimal()).toMatch(/^\d+(\.\d\d?)?$/);
  });
  it('decimal(length) 返回整数长度为length的2位精度的随机小数', () => {
    expect(decimal(8)).toBeTypeOf('number');
    expect(decimal(8)).toMatch(/^\d{8}(\.\d\d?)?$/);
  });
});

tests('basic.symbol()', () => {
  it('symbol() 返回随机特殊字符串', () => {
    expect(symbol()).toBeTypeOf('string');
    expect(symbol()).toMatch(/^[!]$/);
  });
});

tests('basic.string(~)', () => {
  it('string() 返回长度为5的[a-zA-Z]组成的随机字符串', () => {
    expect(string()).toBeTypeOf('string');
    expect(string()).toMatch(/^[a-z]{5}$/i);
  });

  it('string(length) 返回长度为length的[a-zA-Z]组成的随机字符串', () => {
    expect(string(8)).toBeTypeOf('string');
    expect(string(8)).toMatch(/^[a-z]{8}$/i);
  });

  it('string(length,type) 返回长度为length的指定类型组成的随机字符串', () => {
    expect(string(4, 'number')).toBeTypeOf('string');
    expect(string(4, 'number')).toMatch(/^\d{4}$/);

    expect(string(4, 'hex')).toBeTypeOf('string');
    expect(string(4, 'hex')).toMatch(/^[\dA-Z]{4}$/);

    expect(string(4, 'mix')).toBeTypeOf('string');
  });
});
