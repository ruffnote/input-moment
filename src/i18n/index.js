import I18n from 'i18n-js'

import en from './en'
import ja from './ja'

I18n.fallbacks = true

I18n.translations.en = Object.assign({}, I18n.translations.en, en)
I18n.translations.ja = Object.assign({}, I18n.translations.ja, ja)

export default I18n
