import { expect, it } from 'vitest';

import { domain, email, http, https, img, ipv4, url } from '../src';
import { tests } from './helper';

tests('web.domain()', () => {
  it('domain()', () => {
    expect(domain()).toBeTypeOf('string');
    expect(domain()).toMatch(/^(\w+\.)+\w+$/);
  });
});

tests('web.url(~)', () => {
  it('url()', () => {
    expect(url()).toBeTypeOf('string');
    expect(url()).toMatch(/^https:\/\/(\w+\.)+\w+$/);
  });
  it('url(isHttps)', () => {
    expect(url(false)).toBeTypeOf('string');
    expect(url(false)).toMatch(/^http:\/\/(\w+\.)+\w+$/);
  });
});

tests('web.http()', () => {
  it('http()', () => {
    expect(http()).toBeTypeOf('string');
    expect(http()).toMatch(/^http:\/\/(\w+\.)+\w+$/);
  });
});

tests('web.https()', () => {
  it('https()', () => {
    expect(https()).toBeTypeOf('string');
    expect(https()).toMatch(/^https:\/\/(\w+\.)+\w+$/);
  });
});

tests('web.email()', () => {
  it('email()', () => {
    expect(email()).toBeTypeOf('string');
    expect(email()).toMatch(/^(\w+\.)*\w+@\w+\.\w+$/);
  });
});

tests('web.ipv4()', () => {
  it('ipv4()', () => {
    expect(ipv4()).toBeTypeOf('string');
    expect(ipv4()).toMatch(/^(\d{1,3}\.){3}\d{1,3}$/);
  });
});

tests('web.img(~)', () => {
  it('img(size)', () => {
    expect(img('100x100')).toBeTypeOf('string');
    expect(img('100x100')).toMatch(/^https:\/\/dummyimage\.com/);
  });
});
