import { createApp } from 'vue'
import i18n from './i18n'
import App from './Suspenser.vue'

i18n(createApp(App)).mount('#app')
