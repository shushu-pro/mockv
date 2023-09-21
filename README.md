# @shushu.pro/mockv

`@shushu.pro/mockv`是一个模拟生成各种值的类库，比如生成`姓名`，`手机号码`，`随机字母`，`随机数字`等。

这些随机的数据在模拟接口中大大简化了调试数据的生成和让数据看起来不那么重复

### demo

[playground](https://shushu-pro.github.io/mockv/){:target="_blank" rel="noopener"}

### 安装使用

```
yarn add @shushu.pro/mockv
```

> 为了减少体积，关于省市区的 mock 数据采用了纯随机的中文模式，假如需要真实的数据请加载`cn-area-data`

### 安装省市区扩展

```ts
import { getCnAreaData } from 'cn-area-data';
import { load, fullCountry } from '@shushu.pro/mockv';

load({ cnAreaData: getCnAreaData() }); // 加载完成省市区数据后就能无感知的使用真实的省市区mock数据了

console.info(fullCountry());
```

```js
import * as mockv from '@shushu.pro/mockv';

const data = {
  name: mockv.name(), // => 生成随机名字
  age: mockv.integer(1, 100), // => 随机年龄1-100
};
```

### 模拟数据分类

- basic 基础类
- zh 中文类
- web 网络类
- id 标识类
- date 时间类
- color 颜色类
- address 地址类

### 接口列表

#### letter

- letter() 生成随机[a-zA-Z]的字母

#### number

- number() 生成随机[0-9]的数字

#### bool，boolean

- bool() 生成随机(true|false)
- boolean() 同上

#### integer

- integer() 随机正整数，最大值为`Math.pow(2, 53)`
- integer(m) 取值[1, m]之间的整数
- integer(m, n) 取值[m, n]之间的整数

#### decimal

- decimal() 取[0,100]之间的带 2 位小数的数字，例如：`12.87`

#### symbol

- symbol() 取`!@#$%^&*()[]`内的字符

#### string

- string() 取长度为 5 由字母组成的字符串
- string(length) 取长度为 length 由字母组成的字符串
- string(length, type) 取长度为 length，type 可以为['letter', 'number', 'symbol', 'mix', 'hex']组成的字符串，其中 mix 为混合类型，字符包含前面 3 种，'hex'为 16 进制字符串，例如：`AC19AF`

#### name

- name() 返回中文姓名

#### firstName

- firstName() 返回名字

#### familyName

- familyName() 返回姓

#### text

- text() 返回长度为 5 的中文字符串
- text(length) 返回长度为 length 的中文字符串

#### sentence

- sentence() 返回中文句子

#### paragraph

- paragraph() 返回中文段落，由 3 个中文句子组成
- paragraph(length) 返回中文段落，由 length 个中文句子组成

#### domain

- domain() 返回随机域名

#### url

- url() 返回 http 协议的 url
- url(isHttps) 通过 isHttps 控制是否是 https 协议，默认是

#### http

- http() 返回 http 协议 url

#### https

- https() 返回 https 协议 url

#### email

- email() 返回电子邮箱地址

#### ipv4

- ipv4() 返回 ipv4

#### img

- img() 返回 100x100 大小的图片地址
- img(size) 返回对应尺寸的图片地址，例如：`img('200x400')`
- img(size, background, color, text, type) 返回对应尺寸，背景颜色，前景颜色，文本，类型的图片地址，例如：`img('100x222', '#ccc', '#000', '中国', 'png')`
- img(option) 以配置项的形式传入参数，参数名同上

#### cardno

- cardno() 返回身份证号码
- cardno(date) 返回指定年月日的身份证号码，例如：cardno(20191010)
- cardno(year) 返回指定年，月日随机的身份证号码，例如：cardno(2019)

#### guid

- guid() 返回 guid

#### mobile

- mobile() 返回手机号码

#### qq

- qq() 返回 5-13 位 qq 号码
- qq(length) 返回长度为 length 的 qq 号码

#### user

- user() 返回长度为 6 个字母组成的用户名
- user(length) 返回长度为 length 个字母组成的用户名

#### date

- date() 返回年月日，格式例如：`2019-08-12`
- date("yyyy") 返回年，例如：`2019`
- date("MM") 返回月份，例如：`06`
- date('M') 返回月份，例如：`6`
- date('dd') 返回日期，例如：`09`
- date('d') 返回日期，例如：`9`
- date.date("T") 返回时间戳

#### color

- color() 返回 16 进制颜色

#### rgb

- rgb() 返回 rgb 格式颜色

#### rgba

- rgba 返回 rgba 格式颜色

#### region

- region() 返回中国大区，例如：`华北`，`华南`

#### province

- province() 返回省级区域，例如：`浙江省`，`上海市`
- province(type) 返回省级区域对应的值，{code:'返回行政编码',text:'返回名称',data:'返回行政编码和名称 2 个字段组成的对象'}，例如：`{code:10010,name:'北京市'}`

#### city

- city() 市级名称，类同 province
- city(type) 同上

#### fullCity

- fullCity() 由省，市名称组成的数组，例如`['浙江省','杭州市']`
- fullCity(type) 同上

#### county

- county() 县级名称，类同 province
- county(type) 同上

#### fullCounty

- fullCounty() 由省，市，县名称组成的数组
- fullCounty(type) 同上

#### street

- street() 返回街道地址

#### fullStreet

- fullStreet() 返回省市区组成的街道地址字符串

#### zip

- zip() 返回邮编
