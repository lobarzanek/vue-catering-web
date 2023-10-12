import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },

    {
      path: "/diet",
      name: "diet",
      component: () => import("@/views/DietView.vue"),
    },
    {
      path: "/catering",
      name: "catering",
      component: () => import("@/views/CateringView.vue"),
    },
    {
      path: "/about-us",
      name: "about-us",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("@/views/faqView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/ContactView.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("@/views/CartView.vue"),
    },
  ],
  linkActiveClass: "active-route",
});

export default router;
