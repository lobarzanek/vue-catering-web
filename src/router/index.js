import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DietView from "../views/DietView.vue";
import CateringView from "../views/CateringView.vue";
import AboutView from "../views/AboutView.vue";
import faqView from "../views/faqView.vue";
import ContactView from "../views/ContactView.vue";
import CartView from "../views/CartView.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/diet",
      name: "diet",
      component: DietView,
    },
    {
      path: "/catering",
      name: "catering",
      component: CateringView,
    },
    {
      path: "/about-us",
      name: "about-us",
      component: AboutView,
    },
    {
      path: "/faq",
      name: "faq",
      component: faqView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
  ],
});

export default router;
