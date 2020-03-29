import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/buefy'
import './plugins/vuelidate'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate () {
    this.$store.dispatch('APP_INIT')
  },
  render: h => h(App)
}).$mount('#app')
