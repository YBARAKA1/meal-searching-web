<template >
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8 bg-black">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-if="!meals.length" class="flex justify-center text-orange-800 p-8" style="color: orange;">
    There are no meals
  </div>
</template>

<script setup>
import MealItem from './MealItem.vue';

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
    
  }
})

</script>