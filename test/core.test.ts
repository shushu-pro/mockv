import { expect, it } from 'vitest';

import { capitalize, random, range, repeat } from '../src';
import { tests } from './helper';

tests('core.random(~)', () => {
  it('random(list)', () => {
    expect(['a', 'b', 'c']).includes(random(['a', 'b', 'c']));
  });

  it('random(from,to)', () => {
    const value = random(5, 20);
    expect(value).toBeTypeOf('number');
    expect(value).gte(5);
    expect(value).lt(20);
  });

  it('random(max)', () => {
    const value = random(10);
    expect(value).toBeTypeOf('number');
    expect(value).gte(0);
    expect(value).lt(10);
  });
});

tests('core.range(~)', () => {
  it('range(from,to)', () => {
    const value = range(10, 15);
    expect(value).toEqual([10, 11, 12, 13, 14, 15]);
  });
});

tests('core.repeat(~)', () => {
  it('range(value)', () => {
    const value = repeat(() => 'a');
    expect(value).toEqual(['a', 'a', 'a']);
  });

  it('range(value,count)', () => {
    const value = repeat((i) => `b${i}`, 5);
    expect(value).toEqual(['b0', 'b1', 'b2', 'b3', 'b4']);
  });
});

tests('core.capitalize(~)', () => {
  it('capitalize(string)', () => {
    const value = capitalize('abcd');
    expect(value).toBe('Abcd');
  });
});
