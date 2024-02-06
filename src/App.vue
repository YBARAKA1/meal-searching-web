<template>
  <router-view/>   
</template>

<script setup>
import { ref } from 'vue';

const hoverElement = ref(null);

const setHover = (element) => {
  hoverElement.value = element;
};

const resetHover = () => {
  hoverElement.value = null;
};
</script>

<style scoped>
.line-underline {
  position: absolute;
  bottom: 14px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: black;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-in-out; /* Adjusted transition duration */
}

.header-link:hover .line-underline {
  transform: scaleX(1);
}
</style>

  
  
  
  
  
  
  
  
  
  
  
  
