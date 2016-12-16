import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/home.component.vue';

export const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '', component: Home }
  ]
});

export default router;