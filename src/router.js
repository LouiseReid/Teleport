import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Cost from "@/views/Cost.vue";
import Standard from "@/views/Standard.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/cost",
      name: "cost",
      component: Cost
    },
    {
      path: "/standard",
      name: "standard",
      component: Standard
    }
  ]
});
