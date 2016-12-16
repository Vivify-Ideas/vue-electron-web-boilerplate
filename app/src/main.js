import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Electron from 'vue-electron';

import App from './App.vue';
import router from './routes';

Vue.use(Electron);
Vue.use(VueResource);
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');