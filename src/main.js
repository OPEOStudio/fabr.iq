import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import router from './router';
// import Store from './store';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

Vue.use(Vuex);
Vue.use(Buefy);

Vue.config.productionTip = false;

// Vuex store
const store = new Vuex.Store({
  state: {
    // user: null,
    // userLoaded: null,
    slideOutOpen: false
  },
  mutations: {
    // loadUser: (state, payload) => {
    //   state.user = payload.user;
    //   state.userLoaded = true;
    // },
    // clearUser: state => {
    //   state.user = null;
    //   state.userLoaded = false;
    // },
    closeSlideout: state => (state.slideOutOpen = false),
    openSlideout: state => (state.slideOutOpen = true)
  }
});

// Global event bus
const bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
