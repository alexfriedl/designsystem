import Vue from 'vue'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/build/css/mdb.css'
import App from './App.vue'
import store from './store/index'
import router from './router'
import './registerServiceWorker'
import Axios from 'axios'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import VueMq from "vue-mq"
import PerfectScrollbar from "vue2-perfect-scrollbar"

Vue.use(PerfectScrollbar);

Vue.use(VueMq, {
  breakpoints: {
    mobile: 600,
    tablet: 900,
    laptop: 1200,
    desktop: Infinity
  }
});

Vue.use(Vuetify, {
  theme: {
    primary: '#3A3EB7',
    secondary: '#1AB28E',
    accent: '#1AB28E',
    success: '#28a745',
    info: '#17a2b8',
    warning: '#ffc107',
    danger: '#dc3545',
    error: '#dc3545',
    light: '#f8f9fa',
    dark: '#343a40',
    white: '#fff',
    black: '#000'
  },

})

Vue.prototype.$http = Axios;

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
