import Vue from 'vue'
import Vonic from 'vonic'
import VueRuter from 'vue-router'

// Page Components
import Index from './componentes/Index.vue'
import About from './componentes/About.vue'

// Routes
const routes = [
  { path: '/', component: Index },
  { path: '/about', component: About }
]

Vue.use(Vonic.app, {
  routes: routes
})
