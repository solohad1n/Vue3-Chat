<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="email" type="email" required placeholder="Email" />
    <input v-model="password" type="password" required placeholder="Password" />
    <button>Log in</button>
  </form>
</template>

<script setup>
const { ref } = require("@vue/reactivity");

const email = ref("");
const password = ref("");

const handleSubmit = () => {
  console.log({
    email: email.value,
    password: password.value,
  });
};
</script>

<style>
</style>