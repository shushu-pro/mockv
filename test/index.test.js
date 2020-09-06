import ijest from 'ijest'
import utils from '../src/utils'
import basic from '../src/mockValue/basic'
import name from '../src/mockValue/name'
import text from '../src/mockValue/text'
import web from '../src/mockValue/web'
import id from '../src/mockValue/id'
import date from '../src/mockValue/date'
import image from '../src/mockValue/image'
import color from '../src/mockValue/color'
import address from '../src/mockValue/address'
import exports from '../src'

import utilsTests from './children/utils'
import basicTests from './children/basic'
import nameTests from './children/name'
import textTests from './children/text'
import webTests from './children/web'
import idTests from './children/id'
import dateTests from './children/date'
import imageTests from './children/image'
import colorTests from './children/color'
import addressTests from './children/address'
import exportsTests from './exports'

// document
// https://github.com/sschen86/ijest

ijest({
  context: {
    def: { a: 1, b: 2 },
    utils,
    basic,
    name,
    text,
    web,
    id,
    date,
    image,
    color,
    address,
    exports,
  },
  tests: {
    utils: utilsTests,
    basic: basicTests,
    name: nameTests,
    text: textTests,
    web: webTests,
    id: idTests,
    date: dateTests,
    image: imageTests,
    color: colorTests,
    address: addressTests,
    exports: exportsTests,
  },
  asserts: {
    isText: (value) => { // 判断是否纯中文组成的字符串
      expect(/^[\u4e00-\u9fa5]+$/.test(value)).toBe(true)
    },
    isEmail: (value) => { // 是否email
      expect(/^(\w+\.)*\w+@\w+\.\w+$/.test(value)).toBe(true)
    },
    iscardno: (value) => {
      // eslint-disable-next-line max-len
      expect(/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/.test(value)).toBe(true)
    },
    isNumberString (value) {
      expect(/^\d+$/.test(value)).toBe(true)
    },
  },
  defaultNum: 10,
})
