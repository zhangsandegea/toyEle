import { createApp } from 'vue'
import App from './App.vue'
import toyEle from 'toyEle'

const app = createApp(App)
app.use(toyEle)
app.mount('#app')
