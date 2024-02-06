<template >
    <div class="bg-black">
    <div class="text-purple-600">
    <div class="flex justify-center gap-2 mt-0 p-8 bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400">
  <router-link
    v-for="letter in letters"
    :to="{ name: 'byLetter', params: { letter } }"
    :key="letter"
    class="text-white hover:underline"
  >
    {{ letter }}
  </router-link>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8 bg-black">
  <MealItem v-for = "meal of meals" :key="meal.idMeal" :meal="meal"/>
</div>
    </div>
</div>
</template>

<script setup>

import store from '../store';
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import MealItem from '../components/MealItem.vue';


const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const meals = computed(()=> store.state.mealsByLetter);


onMounted(()=>{
    store.dispatch('searchMealsByLetter', route.params.letter)
})

</script>