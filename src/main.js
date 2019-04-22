import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import router from './router';
import store from './store';
import api from '@/api';
import Buefy from 'buefy';
// import 'buefy/dist/buefy.css';
import 'vue-select/dist/vue-select.css';

Vue.use(Vuex);
Vue.use(Buefy);

Vue.config.productionTip = false;

// Global event bus
// const bus = new Vue();

new Vue({
  async created() {
    await api.loadUser(this); // load user to app
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app');
