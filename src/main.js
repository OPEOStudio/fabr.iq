import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import router from './router';
import store from './store';
import Buefy from 'buefy';
// import 'buefy/dist/buefy.css';

Vue.use(Vuex);
Vue.use(Buefy);

Vue.config.productionTip = false;

// Global event bus
// const bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
