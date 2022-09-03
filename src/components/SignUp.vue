<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="name" type="text" required placeholder="Name" />
    <input v-model="email" type="email" required placeholder="Email" />
    <input v-model="password" type="password" required placeholder="Password" />
    <button>Sign Up</button>
  </form>
</template>

<script setup>
const { ref } = require("@vue/reactivity");

const name = ref("");
const email = ref("");
const password = ref("");

const handleSubmit = () => {
  console.log({
    name: name.value,
    email: email.value,
    password: password.value,
  });
};
</script>

<style>
</style>