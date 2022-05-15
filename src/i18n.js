import I18NextVue from 'i18next-vue'
import i18next from 'i18next'
import Backend from 'i18next-locize-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import LastUsed from 'locize-lastused'
import { locizePlugin } from 'locize'

const isProduction = process.env.NODE_ENV === 'production'

const locizeOptions = {
  projectId: process.env.VUE_APP_LOCIZE_PROJECTID,
  apiKey: process.env.VUE_APP_LOCIZE_APIKEY, // YOU should not expose your apps API key to production!!!
  version: process.env.VUE_APP_LOCIZE_VERSION
}

if (!isProduction) {
  // locize-lastused
  // sets a timestamp of last access on every translation segment on locize
  // -> safely remove the ones not being touched for weeks/months
  // https://github.com/locize/locize-lastused
  i18next.use(LastUsed);
}

export const
  i18nextPromise = i18next
                    // locize-editor
                    // InContext Editor of locize
                    .use(locizePlugin)
                    // i18next-locize-backend
                    // loads translations from your project, saves new keys to it (saveMissing: true)
                    // https://github.com/locize/i18next-locize-backend
                    .use(Backend)
                    // detect user language
                    // learn more: https://github.com/i18next/i18next-browser-languageDetector
                    .use(LanguageDetector)
                    // init i18next
                    // for all options read: https://www.i18next.com/overview/configuration-options
                    .init({
                      debug: !isProduction,
                      fallbackLng: 'en',
                      saveMissing: !isProduction,
                      backend: locizeOptions,
                      locizeLastUsed: locizeOptions
                    })

export default function (app) {
  app.use(I18NextVue, { i18next })
  return app
}