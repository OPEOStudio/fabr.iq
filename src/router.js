import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Teampage from './views/Teampage.vue';
import Ticket from './views/Ticket.vue';
import Login from './views/Login.vue';

Vue.use(Router);

// View declarations
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: 'fabr.iq | Login',
        requiresAuth: false
      }
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'fabr.iq | Accueil',
        requiresAuth: true
      }
    },
    {
      path: '/teampage',
      name: 'teampage',
      component: Teampage,
      meta: {
        title: 'fabr.iq | SOL3',
        requiresAuth: true
      }
    },
    {
      path: '/ticket',
      name: 'ticket',
      component: Ticket,
      meta: {
        title: 'fabr.iq | Nouveau ticket',
        requiresAuth: true
      }
    }
  ]
});

// LOGGED IN CHECK /////////////////////////////////////////////////////
function isLoggedIn() {
  const user = JSON.parse(localStorage.user || 'null');
  return user;
}

// BEFORE EACH ROUTINE  ////////////////////////////////////////////////
router.beforeEach((to, from, next) => {
  document.title = to.meta.title; // set page title
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth); // fetch eventual route guard to "to" page

  // route guard to check for protected pages
  if (requiresAuth) {
    if (!isLoggedIn()) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        } // if page requires auth and user is not logged in, push to log-in page and then redirect to page
      });
    } else {
      next(); // otherwise allow access
    }
  } else {
    next(); // otherwise allow access
  }
});

export default router;
