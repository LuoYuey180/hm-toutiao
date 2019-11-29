import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//  引入vant组件
import Vant from 'vant'
import 'vant/lib/index.css'

//  根据屏幕宽度动态设置rem基准值
import 'amfe-flexible'

//  注册vant组件
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
