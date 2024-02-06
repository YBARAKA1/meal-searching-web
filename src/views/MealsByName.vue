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
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8 bg-black">
      <div v-for="meal of meals" :key="meal.idMeal" class="bg-gray-600 shadow rounded-xl" >
        <router-link :to="{name:'mealDetails',params:{id:meal.idMeal}}">
          <img :src="meal.strMealThumb" alt="strMeal" class="rounded-t-2xl w-full h-40 object-cover">

        </router-link>
        <div class="p-3">
          <h3 class = " font-bold text-lg ">{{ meal.strMeal }}</h3>
        <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciboris nisi ut aliquip ex ea commodo consequarure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteu</p>
        <div class="flex items-center justify-between">
          <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>


        </div>
        </div>
      </div>
    </div>
    
  </template>
  
  <script setup>
  import { computed, onMounted } from 'vue';
  import { ref } from 'vue';
  import {useRoute} from 'vue-router';
  import store from '../store';
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

