import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import ProductsView from "../views/Products.vue";
import PastOrdersView from "../views/PastOrders.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },
  {
    path: "/past-orders",
    name: "past-orders",
    component: PastOrdersView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;