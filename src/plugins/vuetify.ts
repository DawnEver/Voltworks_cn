
// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// import zhHans from '@/locale/zh-Hans';   // 导入简体中文语言
// import en from '@/locale/en';            // 导入English语言

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
//   lang: {
//     locales: { zhHans, en },   // 所有的语言
//     current: 'en',             // 当前语言
//     t: (key, ...params) => i18n.t(key, params)
// }
    theme: {
        defaultTheme: 'dark',
    },
})
