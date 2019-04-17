import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
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
  },
  actions: {}
});
