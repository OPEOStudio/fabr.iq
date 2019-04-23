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
        title: 'Connexion | fabr.iq',
        requiresAuth: false,
        requiresAnon: true
      }
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Accueil | fabr.iq',
        requiresAuth: true,
        requiresAnon: false
      }
    },
    {
      path: '/teampage',
      name: 'teampage',
      component: Teampage,
      meta: {
        title: 'Équipe | fabr.iq',
        requiresAuth: true,
        requiresAnon: false
      }
    },
    {
      path: '/ticket',
      name: 'ticket',
      component: Ticket,
      meta: {
        title: 'Nouveau ticket | fabr.iq',
        requiresAuth: true,
        requiresAnon: false
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
  const requiresAnon = to.matched.some(record => record.meta.requiresAnon); // fetch eventual route guard to "to" page

  // route guard to check for protected pages
  if (requiresAuth && !requiresAnon) {
    if (!isLoggedIn()) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath // if page requires auth and user is not logged in, push to log-in page and then redirect to page
        }
      });
    } else {
      next(); // otherwise allow access
    }
  } else if (!requiresAuth && requiresAnon) {
    if (isLoggedIn()) {
      next({
        path: '/'
      });
    } else {
      next();
    }
  } else {
    next(); // otherwise allow access
  }
});

export default router;
