import { createRouter, createWebHistory } from "vue-router"
import { HomeView } from "@/views/"

export const routes = {
  home: { path: "/", name: "home" },
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      ...routes.home,
      component: HomeView,
    },
  ],
})

export default router
