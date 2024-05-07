import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginVue from "../views/LoginVue.vue";
import VRFFrom from "../components/VRF-Form.vue";
import DeviceFrom from "../components/Device-Form.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: LoginVue,
    },
    {
      path: "/vrf/:id",
      name: "VRF_Config",
      component: VRFFrom,
      meta: { requiresAuth: true },
    },
    {
      path: "/device/:id",
      name: "Device_Config",
      component: DeviceFrom,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (!auth || !auth.username || !auth.password) {
      next({ name: "login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
