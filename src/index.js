
import utils from './utils'
import basic from './mockValue/basic'
import name from './mockValue/name'
import text from './mockValue/text'
import web from './mockValue/web'
import id from './mockValue/id'
import date from './mockValue/date'
import image from './mockValue/image'
import color from './mockValue/color'
import address from './mockValue/address'

export default {
  ...utils,
  ...basic,
  ...name,
  ...text,
  ...web,
  ...id,
  ...date,
  ...image,
  ...color,
  ...address,
}

export * from './utils'
export * from './mockValue/basic'
export * from './mockValue/name'
export * from './mockValue/text'
export * from './mockValue/web'
export * from './mockValue/id'
export * from './mockValue/date'
export * from './mockValue/image'
export * from './mockValue/color'
export * from './mockValue/address'
