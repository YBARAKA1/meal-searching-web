<template>
  <div class="rounded-xl bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400 shadow-md hover:shadow-lg transition duration-300 ease-in-out hover:scale-105 transition-all">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full h-40 object-cover rounded-t-xl">
    </router-link>
    <div class="bg-gray-600 p-4 rounded-b-xl">
      <h3 class="orange-text text-3xl font-bold text-center mb-2" style="color: orange;">{{ meal.strMeal }}</h3>
      <p class="text-white mb-4"></p>
      <div class="flex items-center justify-between">
        <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
      </div>
    </div>
  </div>
</template>




<script setup>
import YouTubeButton from './YouTubeButton.vue';

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
})
</script>
