import 'primevue/resources/themes/fluent-light/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Sidebar from 'primevue/sidebar'

const app = createApp(App)

app.use(PrimeVue).component('Sidebar', Sidebar)

app.mount('#app')
