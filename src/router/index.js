import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView/HomeView.vue"),
    },
    {
      path: "/diet",
      name: "diet",
      component: () => import("@/views/DietView/DietView.vue"),
    },
    {
      path: "/catering",
      name: "catering",
      component: () => import("@/views/CateringView/CateringView.vue"),
    },
    {
      path: "/about-us",
      name: "about-us",
      component: () => import("@/views/AboutView/AboutView.vue"),
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("@/views/FAQView/FAQView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/ContactView/ContactView.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("@/views/CartView/CartView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/RegisterView/RegisterView.vue")
    }
  ],
  linkActiveClass: "active-route",
});

export default router;
