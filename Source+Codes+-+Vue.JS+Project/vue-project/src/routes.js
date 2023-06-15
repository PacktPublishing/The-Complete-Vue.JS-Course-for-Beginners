import Home from "./components/Home.vue";
import Signup from "./components/Signup.vue";
import Login from "./components/Login.vue";

import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },

  {
    name: "Signup",
    path: "/signup",
    component: Signup,
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
