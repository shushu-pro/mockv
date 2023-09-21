import { expect, it } from 'vitest';

import {
  city,
  country,
  fullCity,
  fullCountry,
  fullStreet,
  province,
  street,
  zip,
} from '../src';
import { tests } from './helper';

tests('address.province(~)', () => {
  it('province()', () => {
    expect(province()).toBeTypeOf('string');
  });

  it('province(type)', () => {
    expect(province('text')).toBeTypeOf('string');
    expect(province('code')).toBeTypeOf('string');
    expect(province('data')).toHaveProperty('code');
    expect(province('data')).toHaveProperty('name');
    expect(Number(province('code'))).not.toBeNaN();
  });
});

tests('address.city(~)', () => {
  it('city()', () => {
    expect(province()).toBeTypeOf('string');
  });

  it('city(type)', () => {
    expect(city('text')).toBeTypeOf('string');
    expect(city('code')).toBeTypeOf('string');
    expect(city('data')).toHaveProperty('code');
    expect(city('data')).toHaveProperty('name');
    expect(Number(city('code'))).not.toBeNaN();
  });
});

tests('address.country(~)', () => {
  it('country()', () => {
    expect(country()).toBeTypeOf('string');
  });

  it('country(type)', () => {
    expect(country('text')).toBeTypeOf('string');
    expect(country('code')).toBeTypeOf('string');
    expect(country('data')).toHaveProperty('code');
    expect(country('data')).toHaveProperty('name');
    expect(Number(country('code'))).not.toBeNaN();
  });
});

tests('address.fullCity(~)', () => {
  it('fullCity()', () => {
    expect(fullCity()).toBeTypeOf('string');
  });

  it('country(type)', () => {
    expect(fullCity('text')).toBeTypeOf('string');
    expect(Array.isArray(fullCity('code'))).toBe(true);
    (fullCity('code') as string[]).forEach((code) => {
      expect(Number(code)).not.toBeNaN();
    });

    expect(Array.isArray(fullCity('data'))).toBe(true);
    (fullCity('data') as any[]).forEach((data) => {
      expect(data).toHaveProperty('code');
      expect(data).toHaveProperty('name');
    });
  });
});

tests('address.fullCountry(~)', () => {
  it('fullCountry()', () => {
    expect(fullCountry()).toBeTypeOf('string');
  });

  it('country(type)', () => {
    expect(fullCountry('text')).toBeTypeOf('string');
    expect(Array.isArray(fullCountry('code'))).toBe(true);
    (fullCountry('code') as string[]).forEach((code) => {
      expect(Number(code)).not.toBeNaN();
    });

    expect(Array.isArray(fullCountry('data'))).toBe(true);
    (fullCountry('data') as any[]).forEach((data) => {
      expect(data).toHaveProperty('code');
      expect(data).toHaveProperty('name');
    });
  });
});

tests('address.street()', () => {
  it('street()', () => {
    expect(street()).toBeTypeOf('string');
  });
});

tests('address.fullStreet()', () => {
  it('fullStreet()', () => {
    expect(fullStreet()).toBeTypeOf('string');
  });
});

tests('address.zip()', () => {
  it('zip()', () => {
    expect(zip()).toBeTypeOf('string');
    expect(zip()).toMatch(/\d{6}/);
  });
});
