import { expect, it } from 'vitest';

import { color, hex, rgb, rgba } from '../src';
import { tests } from './helper';

tests('color.color(~)', () => {
  it('color() 返回随机16进制颜色', () => {
    expect(color()).toBeTypeOf('string');
    expect(color()).toMatch(/^#[a-z\d]{6}$/);
  });

  it('color(name) 返回指定名称16进制颜色', () => {
    expect(color('red')).toBe('#ff4136');
  });
});

tests('color.hex()', () => {
  it('hex() 返回随机16进制颜色', () => {
    expect(hex()).toBeTypeOf('string');
    expect(hex()).toMatch(/^#[a-z\d]{6}$/);
  });
});

tests('color.rgb()', () => {
  it('color.rgb() 返回随机rgb颜色', () => {
    expect(rgb()).toBeTypeOf('string');
    expect(rgb()).toMatch(/^rgb\(\d{1,3},\d{1,3},\d{1,3}\)/);
  });
});

tests('color.rgba()', () => {
  it('color.rgba() 返回随机rgba颜色', () => {
    expect(rgba()).toBeTypeOf('string');
    expect(rgba()).toMatch(/^rgba\(\d{1,3},\d{1,3},\d{1,3},(1|0(\.\d\d?)?)\)$/);
  });
});
