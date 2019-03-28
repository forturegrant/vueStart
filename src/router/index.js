import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import city from '../components/city'
import msite from '../components/msite'
import Home from '../components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect:'/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/city/:id',
      component: city
    },
    {
      path: '/msite',
      component: msite
    },
  ]
})
