import { createRouter, createWebHistory } from "vue-router";

// main components
import login from '../views/login.vue'
import index from '../views/index.vue'

// child components
import home from '../views/components/home.vue'
import watch from '../views/components/watch.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: login,
    },

    {
      path:"/",
      name:"dashboard",
      component:index,
      children:[
        {
          path:"dashboard",
          name:"home",
          component:home
        },
        {
          path:"watch",
          name:"watch",
          component:watch,
        }
      ]
    },
  ],
  linkActiveClass:"active",
  linkExactActiveClass:"exact"
});

export default router;
