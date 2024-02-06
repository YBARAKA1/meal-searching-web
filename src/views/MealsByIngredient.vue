<template>
     <Meals :meals="meals" />
  </template>
  
  <script setup>
  import { useRoute } from "vue-router";
  import { computed, onMounted, ref } from "vue";
  import MealItem from '../components/MealItem.vue';
  import store from "../store";
  import Meals from '../components/Meals.vue'

  
  const route = useRoute(); // Corrected variable name to 'route'
  const meals = computed(() => store.state.mealsByIngredient)
  
  onMounted(() => {
   
    store.dispatch('searchMealsByIngredient', route.params.ingredient)
  })
  </script>
  