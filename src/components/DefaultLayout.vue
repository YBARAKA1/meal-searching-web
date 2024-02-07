<template>
  <div class="bg-black h-full text-white">
    <navbar/>

    <main>
      <div class="max-w-[1700px] mx-auto"><router-view />
      </div>
      <div class="text-gray-500"> 
        
      </div>
    </main>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>
