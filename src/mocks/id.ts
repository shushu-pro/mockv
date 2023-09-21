// 居民身份证号码：https://baike.baidu.com/item/%E5%B1%85%E6%B0%91%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%8F%B7%E7%A0%81/3400358
// 格式：六位数字地址码，八位数字出生日期码，三位数字顺序码和一位数字校验码。
// https://www.cnblogs.com/xtqg0304/p/9529721.html

import { dateFormat, random, string } from '..';

const Codes = ['110101', '310101'];

function cardno(birthday?: number) {
  const rank = '7 9 10 5 8 4 2 1 6 3 7 9 10 5 8 4 2'.split(' ');
  const last = '1 0 X 9 8 7 6 5 7 3 2'.split(' ');
  let birthdayString;
  if (birthday) {
    // 年月日
    if (String(birthday).length === 8) {
      birthdayString = birthday;
    }
    // 年+随机月日
    else {
      const fullYear = birthday;
      const month = random(12);
      const date = random(new Date(fullYear, month, 0).getDate());
      birthdayString =
        fullYear +
        String(month + 1).padStart(2, '0') +
        String(date + 1).padStart(2, '0');
    }
  } else {
    birthdayString = dateFormat('yyyyMMdd');
  }

  let cardno = random(Codes) + birthdayString + string(3, 'number');
  let sum = 0;
  for (let i = 0; i < 17; i++) {
    sum += Number(cardno[i]) * Number(rank[i]);
  }
  cardno += last[sum % 11];
  return cardno;
}

function guid() {
  return [
    string(8, 'hex'),
    string(4, 'hex'),
    string(4, 'hex'),
    string(4, 'hex'),
    string(12, 'hex'),
  ].join('-');
}

function mobile() {
  return `1${random(3, 10)}${string(9, 'number')}`;
}

function qq(length?: number) {
  return `1${string(
    length >= 5 && length <= 12 ? length - 1 : random(4, 12),
    'number'
  )}`;
}

function user(length = 6) {
  return string(Math.min(length, 16));
}

function password(length = 12) {
  return string(Math.min(length, 32));
}

export { cardno, guid, mobile, password, qq, user };
