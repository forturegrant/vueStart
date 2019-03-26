// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
import store from './store'
=======
>>>>>>> c112b4210fd50eea4d48af3d109bb42895c93875
import './config/rem'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
<<<<<<< HEAD
  router,     //将router注入到vue实例
  store,
  components: { App },
  template: '<App/>'
}).$mount("#app")
=======
  router,
  components: { App },
  template: '<App/>'
})
>>>>>>> c112b4210fd50eea4d48af3d109bb42895c93875
