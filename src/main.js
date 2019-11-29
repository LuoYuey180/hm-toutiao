import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//  引入vant组件
import Vant from 'vant'
import 'vant/lib/index.css'

//  注册vant组件
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
