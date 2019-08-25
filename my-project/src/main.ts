import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

import BootstrapVue from 'bootstrap-vue'; // added


Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

import 'bootstrap/dist/css/bootstrap.css'; // added
import 'bootstrap-vue/dist/bootstrap-vue.css'; // added
