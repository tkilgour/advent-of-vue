import {
  createRouter,
  createWebHistory,
} from "vue-router";

const Day1 = () => import('./components/Day1.vue')
const Day2 = () => import('./components/Day2.vue')
const Day3 = () => import('./components/Day3.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/day-1", component: Day1 },
    { path: "/day-2", component: Day2 },
    { path: "/day-3", component: Day3 },
  ],
});

export default router;
