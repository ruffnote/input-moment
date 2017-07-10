'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _i18nJs = require('i18n-js');

var _i18nJs2 = _interopRequireDefault(_i18nJs);

var _en = require('./en');

var _en2 = _interopRequireDefault(_en);

var _ja = require('./ja');

var _ja2 = _interopRequireDefault(_ja);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_i18nJs2.default.fallbacks = true;

_i18nJs2.default.translations.en = Object.assign({}, _i18nJs2.default.translations.en, _en2.default);
_i18nJs2.default.translations.ja = Object.assign({}, _i18nJs2.default.translations.ja, _ja2.default);

exports.default = _i18nJs2.default;