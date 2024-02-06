<template>
  <div class="flex flex-col p-8 bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400">
    <input
      v-model="searchQuery"
      type="text"
      class="rounded border-2 border-gray-200 w-full bg-gray-800 px-4 py-2"
      placeholder="Search for meals"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axiosClient from '../axiosClient.JS';

const searchQuery = ref('');

const ingredients = ref([]);

onMounted(async () => {
  try {
    const response = await axiosClient.get('/list.php?i=list');
    console.log(response.data);
    ingredients.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>



  