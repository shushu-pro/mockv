import { expect, it } from 'vitest';

import { date, dateTime, day, time } from '../src';
import { tests } from './helper';

tests('date.date(~)', () => {
  it('date() 返回当日时间“年月日”字符串', () => {
    expect(date()).toBeTypeOf('string');
    expect(date()).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('date("yyyy") 返回当日“年份”字符串', () => {
    expect(date('yyyy')).toBe(String(new Date().getFullYear()));
  });

  it('date("MM") 返回当日“月份”', () => {
    expect(date('MM')).toBe(String(new Date().getMonth() + 1).padStart(2, '0'));
  });

  it('date("M") 返回当日“月份”', () => {
    expect(date('M')).toBe(String(new Date().getMonth() + 1));
  });

  it('date("dd") 返回当日“日期”', () => {
    expect(date('dd')).toBe(String(new Date().getDate()).padStart(2, '0'));
  });

  it('date("d") 返回当日“日期”', () => {
    expect(date('dd')).toBe(String(new Date().getDate()));
  });

  it('date("HH") 返回当日“小时”，24小时制', () => {
    expect(date('HH')).toBe(String(new Date().getHours()).padStart(2, '0'));
  });

  it('date("H") 返回当日“小时”', () => {
    expect(date('H')).toBe(String(new Date().getHours()));
  });

  it('date("hh") 返回当日“小时”，12小时制', () => {
    expect(date('hh')).toBe(
      String(new Date().getHours() % 12).padStart(2, '0')
    );
  });

  it('date("h") 返回当日“小时”', () => {
    expect(date('h')).toBe(String(new Date().getHours() % 12));
  });

  it('date("mm") 返回当日“分钟”', () => {
    expect(date('mm')).toBe(String(new Date().getMinutes()).padStart(2, '0'));
  });

  it('date("m") 返回当日“分钟”', () => {
    expect(date('m')).toBe(String(new Date().getMinutes()));
  });

  it('date("SS") 返回“秒数”', () => {
    expect(date('SS')).toBeTypeOf('string');
    expect(date('SS')).toMatch(/^\d{4}$/);
  });

  it('date("S") 返回“秒数”', () => {
    expect(date('S')).toBeTypeOf('string');
    expect(date('S')).toMatch(/^\d{1,4}$/);
  });

  it('date("A") 返回“AM/PM”', () => {
    expect(['AM', 'PM']).include(date('A'));
  });

  it('date("a") 返回“am/pm”', () => {
    expect(['am', 'pm']).include(date('a'));
  });

  it('date("C") 返回“上午/下午”', () => {
    expect(['上午', '下午']).include(date('C'));
  });

  it('date("D") 返回“周一 ... 周日”', () => {
    expect(['周一', '周二', '周三', '周四', '周五', '周六', '周日']).include(
      date('D')
    );
  });

  it('date("T") 返回“时间戳”字符串', () => {
    expect(date('T')).toMatch(/^\d{13}$/);
  });

  it('date("\\y\\M\\d\\H\\h\\m\\s\\S\\A\\a\\C\\D\\T") 返回“转义”字符串', () => {
    expect(date('\\y\\M\\d\\H\\h\\m\\s\\S\\A\\a\\C\\D\\T')).toBe(
      'yMdHhmsSAaCDT'
    );
  });
});

tests('date.dateTime(~)', () => {
  it('dateTime()', () => {
    expect(dateTime()).toBe(date(new Date(), 'yyyy-MM-dd HH:mm:ss'));
  });

  it('dateTime(date)', () => {
    expect(dateTime(new Date('2022/03/03'))).toBe(
      date(new Date('2022/03/03'), 'yyyy-MM-dd HH:mm:ss')
    );
  });
});

tests('date.time(~)', () => {
  it('time()', () => {
    expect(time()).toBe(date(new Date(), 'HH:mm:ss'));
  });

  it('time(date)', () => {
    expect(time(new Date('2022/03/03'))).toBe(
      date(new Date('2022/03/03'), 'HH:mm:ss')
    );
  });
});

tests('date.day()', () => {
  it('day()', () => {
    expect(day()).toBe(date(new Date(), 'D'));
  });
});
