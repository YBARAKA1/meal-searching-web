<template>
  <div class="flex flex-col p-8">
    <input
      v-model="searchQuery"
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="search for meals"
    />

    <div class="flex justify-center gap-2 mt-2">
      <router-link :to="{ name: 'byletter', params: { letter } }" :key="letter" v-for="letter in letters">
        {{ letter }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axiosClient from '../axiosClient.JS';

const searchQuery = ref('');
const letters = ref('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));

onMounted(async () => {
  try {
    const response = await axiosClient.get('/list.php?i=list');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>

  