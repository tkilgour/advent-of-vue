import {
  createRouter,
  createWebHistory,
} from "vue-router";

const days = [1, 2, 3, 7, 8, 9, 11]

const Home = () => import('./views/HomeView.vue')

const routes = days.map(day => {
  return {
    path: `/day-${day}`,
    component: () => import(`./views/Day${day}.vue`)
  }
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    ...routes
  ],
});

export default router;
