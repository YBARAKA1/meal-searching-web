<template>
  <div class="bg-black h-full text-white">
    <navbar/>

    <main>
      <router-view />
      <div class="text-gray-500"> 
        
      </div>
    </main>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>
