import i18next from 'i18next'

import globalEn from './en/global.json'
import globalEs from './es/global.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    es: {
      global: globalEs,
    },
    en: {
      global: globalEn,
    },
  },
})

export default i18next
