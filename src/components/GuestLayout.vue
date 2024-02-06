<template>
    <div class="login-container">
      <h1>Login Page</h1>
      <form class="login-form" @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
        
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
        
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const username = ref('');
  const password = ref('');
  
  const login = () => {
    // Implement your login logic here
    console.log(`Logging in with username: ${username.value} and password: ${password.value}`);
    // You can make API calls, perform authentication, etc.
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0; /* Light gray background */
  }
  
  .login-form {
    width: 300px;
    padding: 20px;
    background-color: #ffffff; /* White background */
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Light box shadow */
  }
  
  label {
    display: block;
    margin-bottom: 8px;
    color: #333; /* Dark gray text color */
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ddd; /* Light gray border */
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #4caf50; /* Green button color */
    color: #fff; /* White text color */
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049; /* Darker green on hover */
  }
  </style>
  