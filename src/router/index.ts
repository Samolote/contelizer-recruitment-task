import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FileFormView from "../views/FileFormView.vue";
import ValidatorView from "../views/ValidatorView.vue";
import APIHandlingView from "../views/APIHandlingView.vue";

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
      path: "/api-handling",
      name: "API Handling Example",
      component: APIHandlingView,
    },
  ],
});

export default router;
