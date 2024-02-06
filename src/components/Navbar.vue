<template>
  
    <header class="bg-purple-900 shadow-md h-16 text-white flex justify-between items-stretch">
      <router-link
        :to="{ name: 'home' }"
        class="header-link relative inline-flex items-center h-full px-5 transition-transform ease-in-out hover:translate-y-[-2px]"
        @mouseover="setHover('home')"
        @mouseleave="resetHover()"
      >
        <span>Home</span>
        <span class="line-underline" v-if="hoverElement === 'home'"></span>
      </router-link>
      <div class="flex items-center gap-1">
        <router-link
          :to="{ name: 'byName' }"
          class="header-link relative inline-flex items-center px-2 h-full transition-colors ease-in-out transform hover:translate-y-[-2px]"
          @mouseover="setHover('search')"
          @mouseleave="resetHover()"
        >
          <span>Search Meals</span>
          <span class="line-underline" v-if="hoverElement === 'search'"></span>
        </router-link>
        <router-link
          :to="{ name: 'byLetter' }"
          class="header-link relative inline-flex items-center px-2 h-full transition-colors ease-in-out transform hover:translate-y-[-2px]"
          @mouseover="setHover('letters')"
          @mouseleave="resetHover()"
        >
          <span>Meals By Letters</span>
          <span class="line-underline" v-if="hoverElement === 'letters'"></span>
        </router-link>
        <router-link
          :to="{ name: 'ingredients' }"
          class="header-link relative inline-flex items-center px-2 h-full transition-colors ease-in-out transform hover:translate-y-[-2px]"
          @mouseover="setHover('ingredients')"
          @mouseleave="resetHover()"
        >
          <span>Meals By Ingredients</span>
          <span class="line-underline" v-if="hoverElement === 'ingredients'"></span>
        </router-link>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        hoverElement: null,
      };
    },
    methods: {
      setHover(element) {
        this.hoverElement = element;
      },
      resetHover() {
        this.hoverElement = null;
      },
    },
  };
  </script>
  