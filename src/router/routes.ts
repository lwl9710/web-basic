import { RouteRecordRaw } from "vue-router";

export default [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/Home/index.vue")
  },
  {
    path: "/user",
    name: "User",
    component: () => import("@/pages/User/index.vue")
  },
] as RouteRecordRaw[];