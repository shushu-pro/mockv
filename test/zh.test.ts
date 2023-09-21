import { expect, it } from 'vitest';

import { familyName, firstName, name, paragraph, sentence, text } from '../src';
import { tests } from './helper';

tests('zh.text(~)', () => {
  it('text() 返回长度为5的随机中文字符串', () => {
    expect(text()).toBeText();
    expect(text()).toHaveLength(5);
  });

  it('text(length) 返回长度为length的随机中文字符串', () => {
    expect(text(16)).toBeText();
    expect(text(16)).toHaveLength(16);
  });
});

tests('zh.sentence()', () => {
  it('sentence() 返回随机中文句子', () => {
    expect(sentence()).toBeTypeOf('string');
    expect(sentence()).toMatch(/^[\u4e00-\u9fa5]+，[\u4e00-\u9fa5]+。$/);
  });
});

tests('zh.paragraph()', () => {
  it('paragraph()返回3个随机句子组成的中文段落', () => {
    expect(paragraph()).toBeTypeOf('string');
    expect(paragraph()).toMatch(/^([\u4e00-\u9fa5]+，[\u4e00-\u9fa5]+。){3}$/);
  });

  it('paragraph(length) 返回length个随机句子组成的中文段落', () => {
    expect(paragraph(6)).toBeTypeOf('string');
    expect(paragraph(6)).toMatch(/^([\u4e00-\u9fa5]+，[\u4e00-\u9fa5]+。){6}$/);
  });
});

tests('zh.name()', () => {
  it('name() 返回随机中文姓名', () => {
    expect(name()).toBeText();
  });
});

tests('zh.familyName()', () => {
  it('familyName() 返回随机中文姓', () => {
    expect(familyName()).toBeText();
  });
});

tests('zh.firstName()', () => {
  it('firstName() 返回随机中文名字', () => {
    expect(firstName()).toBeText();
  });
});
