<template>
  <div>
    <div class="flex justify-center gap-2 p-8 bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400">
      <div>
        <h1 class="orange-text text-3xl font-bold text-center mb-2" style="color: orange;">PICK A MEAL'S LETTER</h1>
        <div>
          <router-link
            v-for="letter in letters"
            :to="{ name: 'byLetter', params: { letter } }"
            :key="letter"
            class="text-white hover:underline p-0.5"
          >
            {{ letter }}
          </router-link>
        </div>
      </div>
    </div>
    <Meals :meals="meals"/>
  </div>
</template>
<script setup>

import store from '../store';
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { onMounted, watch } from 'vue';
import Meals from '../components/Meals.vue'




const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const meals = computed(()=> store.state.mealsByLetter);

watch(route, ()=> {
  store.dispatch('searchMealsByLetter', route.params.letter)
})
onMounted(()=>{
    store.dispatch('searchMealsByLetter', route.params.letter)
})

</script>