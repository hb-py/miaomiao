import Vue from 'vue'
import VueRouter from 'vue-router'
import MoiveRouter from './moive'
import MineRouter from './mine'
import CinemaRouter from './cinema'

Vue.use(VueRouter)

const routes = [
  MoiveRouter,
  MineRouter,
  CinemaRouter,
  {
    path: '/*',
    redirect: '/movie'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
