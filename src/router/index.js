import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import home from '../components/home'
import city from '../components/city'
import msite from '../components/msite'
=======
import Home from '../components/home'
>>>>>>> c112b4210fd50eea4d48af3d109bb42895c93875

Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
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
=======
      path: '/',
      name: 'home',
      component: Home
    }
>>>>>>> c112b4210fd50eea4d48af3d109bb42895c93875
  ]
})
