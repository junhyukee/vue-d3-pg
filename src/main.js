import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App.vue';
import Airline from '@/components/Airline.vue';

Vue.use(Router);

// eslint-disable-next-line no-new
const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: App },
    { path: '/airline', component: Airline }
  ]
});

// eslint-disable-next-line no-new
new Vue({
  router
}).$mount('#app');
