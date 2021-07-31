import Vue from 'vue'
import User from '@/view/user.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(User),
}).$mount('#app')
