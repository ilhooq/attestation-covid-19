import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import {
  NavbarPlugin,
  FormSelectPlugin,
  FormGroupPlugin,
  FormInputPlugin,
  ButtonPlugin,
  FormCheckboxPlugin,
} from 'bootstrap-vue'

import './assets/main.scss'

Vue.config.productionTip = false

Vue.use(NavbarPlugin)
Vue.use(FormSelectPlugin)
Vue.use(FormGroupPlugin)
Vue.use(FormInputPlugin)
Vue.use(ButtonPlugin)
Vue.use(FormCheckboxPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
