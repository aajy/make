import Vue, { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from './plugin/bootstrap'

const app = createApp(App)
  app.use(BootstrapVue3)
  app.mount('#app')
