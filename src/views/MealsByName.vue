<template>
    
    <div class="text-black-600  p-8 bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400">
      <input
        type="text"
        v-model="keyword"
        class="rounded border-2 border-gray-200 w-full bg-gray-800 px-4 py-2"
        placeholder="Search for meals"
        @change="searchMeals"
      />
    </div>
    <Meals :meals="meals" />
    
  </template>
  
  <script setup>
  import { computed, onMounted } from 'vue';
  import { ref } from 'vue';
  import {useRoute} from 'vue-router';
  import store from '../store';
  import Meals from '../components/Meals.vue'
  import axiosClient from '../axiosClient';
  import YouTubeButton from '../components/YouTubeButton.vue';


  const route =useRoute();
  const keyword = ref('');
  
  const meals = computed(() => store.state.searchedMeals);
  
  function searchMeals() {
      store.dispatch('searchMeals', keyword.value);   
  }
  onMounted(() => {
    keyword.value = route.params.name
    if(keyword.value){
      searchMeals()
    }
  })
  </script>

