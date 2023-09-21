import { bool, random, range, repeat } from '..';

const Letters =
  '一乙了人又儿十二力几入八九七刀乃厂丁卜个上大子也之下么小于已与三女己门工口才不中为以心天见方无手开分日文从什长公气他们出可去对生用只发头本主正外打处民白在有她地那会过自好而后多如行成年此当同我这来你时里没还作两把身进声但间走系何的到和国事知所法经其定现实学明话些者使是说要看面前点将种相信很便重给结神统怎家能起都样笑高真部被通特难原爱息展海候着得情理眼做接常据第教象望清脸基深领随道就然等最程提斯量强期集喜落黑答确曾联想意数新解感路像满跟微照错暗群楚楼简置算管模精愿需静境疑慢端察演赛歌舞稳墙鲜题德影增靠篇镇熟震懂趣颜横糊额飘醉撞踪器整嘴操激醒燕默避赞壁凝餐镜薄融磨衡邀藏瞧戴臂繁翼霞擦霜糟骤赢蹈鞠辫燥穗螺糠翻覆鹰鞭蹦镰警颤爆攀疆蹲瓣魔嚷籍耀灌躁嚼壤露霸蠢囊罐'.split(
    ''
  );
const Punctuation = { comma: '，', fullStop: '。' };

const FamilyNameLetters =
  '陈林周张李黄王吴刘蔡杨许郑谢郭洪邱曾廖赖徐周叶苏庄江吕何罗高萧潘朱简锺彭游詹胡施沉余赵卢梁颜柯孙魏翁戴范宋方邓杜傅侯曹温薛丁马蒋唐卓蓝冯姚石董纪欧程连古汪汤姜田康邹白涂尤巫韩龚严袁钟黎金阮陆倪夏童邵柳钱'.split(
    ''
  );
const ManFirstNameLetters =
  '晨轩清睿宝涛华国亮新凯志明伟嘉东洪建文子云杰兴友才振辰航达鹏宇衡佳强宁丰波森学民永翔鸿海飞义生凡连良乐勇辉龙川宏谦锋双霆玉智增名进德聚军兵忠廷先江昌政君泽超信腾恒礼元磊阳月士洋欣升恩迅科富函业胜震福瀚瑞朔津韵荣为诚斌广庆成峰可健英功冬锦立正禾平旭同全豪源安顺帆向雄材利希风林奇易来咏岩启坤昊朋和纪艺昭映威奎帅星春营章高伦庭蔚益城牧钊刚洲家晗迎罡浩景珂策皓栋起棠登越盛语钧亿基理采备纶献维瑜齐凤毅谊贤逸卫万臻儒钢洁霖隆远聪耀誉继珑哲岚舜钦琛金彰亭泓蒙祥意鑫朗晟晓晔融谋宪励璟骏颜焘垒尚镇济雨蕾韬选议曦奕彦虹宣蓝冠谱泰泊跃韦怡骁俊沣骅歌畅与圣铭溓滔溪巩影锐展笑祖时略敖堂崊绍崇悦邦望尧珺然涵博淼琪群驰照传诗靖会力大山之中方仁世梓竹至充亦丞州言佚序宜'.split(
    ''
  );
const WomanFirstNameLetters =
  '婷倩睿瑜嘉君盈男萱雨乐欣悦雯晨珺月雪秀晓然冰新淑玟萌凝文展露静智丹宁颖平佳玲彤芸莉璐云聆芝娟超香英菲涓洁萍蓉潞笑迪敏靓菁慧涵韵琳燕依妙美宜尚诗钰娜仪娇谊语彩清好睻曼蔓茜沁韶舒盛越琪霞艺函迎虹爽瑞珏桐筱苹莹名晗甜晴亭吉玉晶妍凤蒙霖希宣昕丽心可旻阳真蓝畅荣岚乔育芷姿妹姗瑾奕兰航蕾艳怡青珊才小子允加巧冉北朵多羽如帆伶采西贝其春易咏亚明秋泓伦朔哲益轩容玹津启婧晟婉常浩景茗尧雅杰媛诒翔为捷钧毓意琸靖渺渲熙微祺梦赫菡纶铭齐华菏毅瑶品梓国卿振卫叶亿娆漫兴蓓融嫒锦翰科润霏灿忆聪怿蕊谨丰丛璇议馨瀚潇莺珑俪骄骁灵忻昭金昊志辰宇安凡禾竹愉丫珂洺苒若偌珮棋淇群会维影逸娴赏霄辉莲优瑷朦涛识誉巍鑫逦湾中予卉永同州任宏卓'.split(
    ''
  );

function text(length = 5) {
  return repeat(() => random(Letters), length).join('');
}

function sentence() {
  const torrent = range(4, 8);
  return (
    text(random(torrent)) +
    Punctuation.comma +
    text(random(torrent)) +
    Punctuation.fullStop
  );
}

function paragraph(length = 3) {
  return repeat(() => sentence(), length).join('');
}

function name() {
  return random([manName(), womanName()]);
}

function manName() {
  return familyName() + manFirstName();
}

function womanName() {
  return familyName() + womanFirstName();
}

function firstName() {
  return random([manFirstName(), womanFirstName()]);
}

function familyName() {
  return random(FamilyNameLetters);
}

function manFirstName() {
  return (
    random(ManFirstNameLetters) + (bool() ? random(ManFirstNameLetters) : '')
  );
}

function womanFirstName() {
  return (
    random(WomanFirstNameLetters) +
    (bool() ? random(WomanFirstNameLetters) : '')
  );
}

export {
  familyName,
  firstName,
  manName,
  name,
  paragraph,
  sentence,
  text,
  womanName,
};
