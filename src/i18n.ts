import { createI18n } from 'vue-i18n'
import fr from './locales/fr-FR.json'
import en from './locales/en-US.json'
import store from "@/store";

// 1. Création dynamique de l'instance i18n
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: store.getters["userPreferencesModule/getLanguage"] || 'fr',
  fallbackLocale: 'fr',
  messages: { fr, en } // Chargement des deux langues
})

// 2. Surveillance des changements de langue
store.watch(
  () => store.getters["userPreferencesModule/getLanguage"],
  (newLang) => {
    i18n.global.locale.value = newLang
  }
)

export default i18n