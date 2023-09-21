const Days = '周一 周二 周三 周四 周五 周六 周日'.split(' ');
const Formatter = {
  yyyy: (d: Date) => `${d.getFullYear()}`,
  yy: (d: Date) => `${d.getFullYear()}`.substring(0, 2),
  MM: (d: Date) => `${d.getMonth() + 1}`.padStart(2, '0'),
  M: (d: Date) => `${d.getMonth() + 1}`,
  dd: (d: Date) => `${d.getDate()}`.padStart(2, '0'),
  d: (d: Date) => `${d.getDate()}`,
  HH: (d: Date) => `${d.getHours()}`.padStart(2, '0'),
  H: (d: Date) => `${d.getHours()}`,
  hh: (d: Date) => `${d.getHours() % 12 || 12}`.padStart(2, '0'),
  h: (d: Date) => `${d.getHours() % 12 || 12}`,
  mm: (d: Date) => `${d.getMinutes()}`.padStart(2, '0'),
  m: (d: Date) => `${d.getMinutes()}`,
  ss: (d: Date) => `${d.getSeconds()}`.padStart(2, '0'),
  s: (d: Date) => `${d.getSeconds()}`,
  SS: (d: Date) => `${d.getMilliseconds()}`.padStart(4, '0'),
  S: (d: Date) => `${d.getMilliseconds()}`,
  A: (d: Date) => (d.getHours() < 12 ? 'AM' : 'PM'),
  a: (d: Date) => (d.getHours() < 12 ? 'am' : 'pm'),
  C: (d: Date) => (d.getHours() < 12 ? '上午' : '下午'),
  D: (d: Date) => Days[d.getDay()],
  T: (d: Date) => `${d.getTime()}`,
};

const FormatterRegexp = (() => {
  const matches = [];
  for (const key in Formatter) {
    matches.push(key);
  }
  return RegExp(`\\\\([yMmdHhmsSAaTCD])|(${matches.join('|')})`, 'g');
})();

function dateFormat(format: string): string;
function dateFormat(date?: number | Date, format?: string): string;
function dateFormat(arg1?, arg2?) {
  let date: Date;
  let format: string;
  if (typeof arg1 === 'string') {
    format = arg1;
  } else if (typeof arg1 === 'number') {
    date = new Date(arg1);
    format = arg2;
  } else {
    date = arg1;
    format = arg2;
  }

  date = date || new Date();
  format = format || 'yyyy-MM-dd';

  return format.replace(
    FormatterRegexp,
    (all, escapeChar, FormatterKey) =>
      escapeChar || (FormatterKey ? Formatter[FormatterKey](date) : all)
  );
}

function dateTime(date?: Date | number) {
  return dateFormat(date, 'yyyy-MM-dd HH:mm:ss');
}

function time(date?: Date | number) {
  return dateFormat(date, 'HH:mm:ss');
}

function day(date?: Date | number) {
  return dateFormat(date, 'D');
}

export { dateFormat as date, dateFormat, dateTime, day, time };
