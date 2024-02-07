<template>
  <div class="flex flex-col p-8 bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400">
    <h1 class=" text-3xl text-center font-bold">ALL MEALS</h1>
    </div>
    <Meals :meals="meals" />

</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import Meals from "../components/Meals.vue";
import axiosClient from "../axiosClient.js";

const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>



  