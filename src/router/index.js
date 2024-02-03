import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MealsByName from '../views/MealsByName.vue';
import MealsByLetter from '../views/MealsByLetter.vue'; // Corrected the typo here
import MealsByIngredient from '../views/MealsByIngredient.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/by-name/:name?',
    name: 'byName',
    component: MealsByName,
  },
  {
    path: '/by-letter/:letter?',
    name: 'byLetter',
    component: MealsByLetter,
  },
  {
    path: '/By-ingredient/:ingredient?',
    name: 'byIngredient',
    component: MealsByIngredient, // Corrected the typo here
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
