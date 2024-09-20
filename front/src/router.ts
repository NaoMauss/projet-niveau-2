import { createMemoryHistory, createRouter } from 'vue-router'
// @ts-ignore
import AddStreamer from './page/AddStreamer.vue'
// @ts-ignore
import Home from './page/Home.vue'
// @ts-ignore
import Login from './page/Login.vue'
import { authGuard } from './auth'

const routes = [
  { path: '/', redirect: '/accueil' },
  { path: '/accueil', component: Home, beforeEnter: authGuard },
  { path: '/login', component: Login },
  { path: '/addStreamer', component: AddStreamer, beforeEnter: authGuard },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router