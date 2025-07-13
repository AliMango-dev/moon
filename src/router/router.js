// router.js
import {createRouter, createWebHistory} from "vue-router";
import Auth from "../views/Auth.vue"
import About from "../views/About.vue";
import cart from "../views/cart.vue";
import checkout from "../views/checkout.vue";
import contact from "../views/contact.vue";
import fav from "../views/fav.vue";
import Homepage from "../views/Homepage.vue";
import product from "../views/product.vue";
import profile from "../views/profile.vue";
import shop from "../views/shop.vue";

const routes = [
  {path: "/", component: Homepage},
  {path: "/Authentication", component: Auth},
  {path: "/About", component: About},
  {path: "/cart", component: cart},
  {path: "/checkout", component: checkout},
  {path: "/contact", component: contact},
  {path: "/fav", component: fav},
  {path: "/products", component: product},
  {path: "/profile", component: profile},
  {path: "/shop", component: shop},
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
