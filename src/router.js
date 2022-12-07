import {
  createRouter,
  createWebHistory,
} from "vue-router";

const Day1 = () => import('./components/Day1.vue')
const Day2 = () => import('./components/Day2.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/day-1", component: Day1 },
    { path: "/day-2", component: Day2 },
  ],
});

export default router;
