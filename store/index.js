export const state = () => ({
  locales: ["en", "fr", "es", "pt", "ru", "ua", "kr", "tr", "pl", "zh-tw", "de"],
  locale: "en",
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
}
