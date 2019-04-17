import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Teampage from './views/Teampage.vue';
import Ticket from './views/Ticket.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'fabr.iq | Accueil'
      }
    },
    {
      path: '/teampage',
      name: 'teampage',
      component: Teampage,
      meta: {
        title: 'fabr.iq | SOL3'
      }
    },
    {
      path: '/ticket',
      name: 'ticket',
      component: Ticket,
      meta: {
        title: 'fabr.iq | Ticket'
      }
    }
  ]
});
