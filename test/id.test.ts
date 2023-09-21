import { expect, it } from 'vitest';

import { cardno } from '../src';
import { tests } from './helper';

tests('id.cardno(~)', () => {
  it('cardno()', () => {
    expect(cardno()).toBeTypeOf('string');
    expect(cardno()).toMatch(
      /^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
    );
  });

  it('cardno(birthday)', () => {
    expect(cardno()).toBeTypeOf('string');
    expect(cardno(20191212)).toMatch(
      /^([1-6][1-9]|50)\d{4}(20191212)\d{3}[0-9Xx]$/
    );

    expect(cardno(2019)).toMatch(
      /^([1-6][1-9]|50)\d{4}2019((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
    );
  });
});
