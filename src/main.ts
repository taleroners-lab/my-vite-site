import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css'
import { SpeedInsights } from '@vercel/speed-insights/vue'
import { Analytics } from '@vercel/analytics/vue'

const app = createApp(App)

app.use(router)
app.use(SpeedInsights)
app.use(Analytics)

app.mount('#app')
