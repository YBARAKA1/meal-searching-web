<template>
  <div class="bg-black h-full">
    <header class="bg-purple-900 shadow-md h-16 text-white flex justify-between items-stretch">
      <router-link
        :to="{ name: 'home' }"
        class="header-link relative inline-flex items-center h-full px-5 transition-transform ease-in-out hover:translate-y-[-2px]"
        @mouseover="setHover('home')"
        @mouseleave="resetHover()"
      >
        Home
        <span class="line-underline" v-if="hoverElement === 'home'"></span>
      </router-link>
      <div class="flex items-center gap-1">
        <router-link
          :to="{ name: 'byName' }"
          class="header-link relative inline-flex items-center px-2 h-full transition-colors ease-in-out transform hover:translate-y-[-2px]"
          @mouseover="setHover('search')"
          @mouseleave="resetHover()"
        >
          Search Meals
          <span class="line-underline" v-if="hoverElement === 'search'"></span>
        </router-link>
        <router-link
          :to="{ name: 'byLetter' }"
          class="header-link relative inline-flex items-center px-2 h-full transition-colors ease-in-out transform hover:translate-y-[-2px]"
          @mouseover="setHover('letters')"
          @mouseleave="resetHover()"
        >
          Meals By Letters
          <span class="line-underline" v-if="hoverElement === 'letters'"></span>
        </router-link>
        <router-link
          :to="{ name: 'byIngredient' }"
          class="header-link relative inline-flex items-center px-2 h-full transition-colors ease-in-out transform hover:translate-y-[-2px]"
          @mouseover="setHover('ingredients')"
          @mouseleave="resetHover()"
        >
          Meals By Ingredients
          <span class="line-underline" v-if="hoverElement === 'ingredients'"></span>
        </router-link>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
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

  
  
  
  
  
  
  
  
  
  
  
  
