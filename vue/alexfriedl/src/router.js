import Vue from "vue";
import Router from "vue-router";

import Overview from "./views/Overview.vue";
import Intro from "./views/Intro.vue";
import Person from "./views/Person.vue";
import Process from "./views/Process.vue";
import Showcase from "./views/Showcase.vue";
import ShowcaseDetail from "./views/ShowcaseDetail.vue";
import Organisms from "./views/Organisms.vue";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Intro
    },
    {
      path: "/showcase",
      name: "showcase",
      component: Showcase,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/showcase/:id",
      name: "showcase",
      component: ShowcaseDetail,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/intro",
      name: "intro",
      component: Intro
    },
    {
      path: "/organisms/:id",
      name: "organisms",
      component: Organisms
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
