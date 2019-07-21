import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueRouter from 'vue-router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(BootstrapVue);


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
