import { createRouter, createWebHistory } from "vue-router";

// main components
import login from '../views/login.vue'
import index from '../views/index.vue'

// child components
import home from '../views/components/home.vue'
import watch from '../views/components/watch.vue'
import marketplace from '../views/components/marketplace.vue'
import game from '../views/components/game.vue'
import group from '../views/components/group.vue'


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
        },
        {
          path:"marketplace",
          name:"marketplace",
          component:marketplace
        },
        {
          path:"group",
          name:"group",
          component:group
        },
        {
          path:"game",
          name:"game",
          component:game
        }
      ]
    },
    {
      path:"/",
      redirect:"/dashboard"
    }
  ],
  linkActiveClass:"active",
  linkExactActiveClass:"exact"
});

export default router;
