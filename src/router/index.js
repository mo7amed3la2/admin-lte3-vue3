import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";
import UsersDetails from "../views/UsersDetails.vue";
import Charts from "../views/Charts.vue";
import NotFound from "../views/404.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/users/:id",
    name: "UsersDetails",
    component: UsersDetails,
  },
  {
    path: "/charts",
    name: "Charts",
    component: Charts,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
