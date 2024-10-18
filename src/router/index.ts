import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FileFormView from "../views/FileFormView.vue";
import ValidatorView from "../views/ValidatorView.vue";
import UserListView from "../views/UserListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/file-form",
      name: "File Form",
      component: FileFormView,
    },
    {
      path: "/validator",
      name: "PESEL Validator",
      component: ValidatorView,
    },
    {
      path: "/userlist",
      name: "Userlist view",
      component: UserListView,
    },
  ],
});

export default router;
