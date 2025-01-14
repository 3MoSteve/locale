// website should be _ instead of -
const languages = {};
languages.ar = require('./ar-SA/website.json');
languages.bg = require('./bg-BG/website.json');
languages.ckb = require('./ckb-IR/website.json')
languages.cs = require('./cs-CZ/website.json');
languages.da = require('./da-DK/website.json');
languages.de = require('./de-DE/website.json');
languages.el = require('./el-GR/website.json');
languages.en = require("./en-US/website.json");
languages.es = require('./es-ES/website.json');
languages.fa = require('./fa-IR/website.json');
languages.fi = require('./fi-FI/website.json');
languages.fr = require('./fr-FR/website.json');
languages.hi = require('./hi-IN/website.json');
languages.hr = require('./hr-HR/website.json');
languages.hu = require('./hu-HU/website.json');
languages.it = require('./it-IT/website.json');
languages.ja = require('./ja-JP/website.json');
languages.ko = require('./ko-KR/website.json');
languages.lt = require('./lt-LT/website.json');
languages.nl = require('./nl-NL/website.json');
languages.no = require('./no-NO/website.json');
languages.pl = require('./pl-PL/website.json');
languages["pt_BR"] = require('./pt-BR/website.json');
languages.pt = require('./pt-PT/website.json');
languages.ro = require('./ro-RO/website.json');
languages.ru = require('./ru-RU/website.json');
languages.sk = require('./sk-SK/website.json');
languages.sr = require('./sr-CS/website.json');
languages.sv = require('./sv-SE/website.json');
languages.th = require('./th-TH/website.json');
languages.tr = require('./tr-TR/website.json');
languages.uk = require('./uk-UA/website.json');
languages.vi = require('./vi-VN/website.json');
languages.zh = require('./zh-CN/website.json');
languages["zh_TW"] = require('./zh-TW/website.json');

module.exports = languages;


const botLanguages = {};
botLanguages.ar = require('./ar-SA/bot.json');
botLanguages.bg = require('./bg-BG/bot.json');
botLanguages.ckb = require('./ckb-IR/bot.json')
botLanguages.cs = require('./cs-CZ/bot.json');
botLanguages.da = require('./da-DK/bot.json');
botLanguages.de = require('./de-DE/bot.json');
botLanguages.el = require('./el-GR/bot.json');
botLanguages.en = require("./en-US/bot.json");
botLanguages.es = require('./es-ES/bot.json');
botLanguages.fa = require('./fa-IR/bot.json');
botLanguages.fi = require('./fi-FI/bot.json');
botLanguages.fr = require('./fr-FR/bot.json');
botLanguages.hi = require('./hi-IN/bot.json');
botLanguages.hr = require('./hr-HR/bot.json');
botLanguages.hu = require('./hu-HU/bot.json');
botLanguages.it = require('./it-IT/bot.json');
botLanguages.ja = require('./ja-JP/bot.json');
botLanguages.ko = require('./ko-KR/bot.json');
botLanguages.lt = require('./lt-LT/bot.json');
botLanguages.nl = require('./nl-NL/bot.json');
botLanguages.no = require('./no-NO/bot.json');
botLanguages.pl = require('./pl-PL/bot.json');
botLanguages["pt-BR"] = require('./pt-BR/bot.json');
botLanguages.pt = require('./pt-PT/bot.json');
botLanguages.ro = require('./ro-RO/bot.json');
botLanguages.ru = require('./ru-RU/bot.json');
botLanguages.sk = require('./sk-SK/bot.json');
botLanguages.sr = require('./sr-CS/bot.json');
botLanguages.sv = require('./sv-SE/bot.json');
botLanguages.th = require('./th-TH/bot.json');
botLanguages.tr = require('./tr-TR/bot.json');
botLanguages.uk = require('./uk-UA/bot.json');
botLanguages.vi = require('./vi-VN/bot.json');
botLanguages.zh = require('./zh-CN/bot.json');
botLanguages["zh-TW"] = require('./zh-TW/bot.json');

module.exports.botLangs = botLanguages;
