<template>
    <div>
      <div class="flex justify-center gap-2 mt-0 p-8 bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400">
         <h1 class="text-4xl font-bold mb-4">INGREDIENTS</h1>
      </div>
  
      <router-link v-for="ingredient of ingredients" :key="ingredient.idIngredient" 
                   :to="{ name: 'byIngredient', 
                   params: { ingredient: ingredient.strIngredient }}" 
                   class=" p-3 mb-3 shadow-grey-200">
        <div>
          <h3 class="bg-gradient-to-r from-red-800 via-pink-600 to-purple-400 text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
          <p>{{ ingredient.strDescription }}</p>
        </div>
      </router-link>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from "vue";
  import axiosClient from "../axiosClient";
  
  const ingredients = ref([]);
  
  onMounted(() => {
   axiosClient.get("list.php?i=list").then(({ data }) => {
      ingredients.value = data.meals;
   });
  });
  </script>
  