import Vue from 'vue'
import User from '@/view/User.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(User),
}).$mount('#app')
