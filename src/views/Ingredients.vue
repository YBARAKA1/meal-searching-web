<template>
  <div>
    <div class="flex justify-center gap-2 mt-0 p-8 bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400">
      <h1 class="text-3xl font-bold mb-4" style="color: orange;">INGREDIENTS</h1>
      <input
        type="text"
        v-model="keyword"
        class="rounded border-2 border-gray-200 w-full bg-gray-800 px-4 py-2"
        placeholder="Search for Ingredients"
      />
    </div>

    <router-link
      v-for="ingredient of computedIngredients"
      :key="ingredient.idIngredient"
      :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }"
      class="p-3 mb-3 shadow-grey-200"
    >
      <div>
        <h3 class="bg-gradient-to-r from-red-800 via-pink-600 to-purple-400 text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
        <p>{{ ingredient.strDescription }}</p>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import axiosClient from "../axiosClient";

const keyword = ref('');
const ingredients = ref([]);

const computedIngredients = computed(() => {
  return ingredients.value.filter((i) => {
    return (i.strDescription || '').toLowerCase().includes(keyword.value.toLowerCase()) ||
           i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase());
  });
});

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
