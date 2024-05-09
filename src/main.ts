// global css
import './styles/variables.css'
import './styles/global.css'
import './styles/wijmo'

// global polyfills
import './lib/polyfill'

import App from './App.vue'

import { createApp } from 'vue'
import { router } from './routes'
import { pinia } from './store'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
