<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="name" type="text" required placeholder="Name" />
    <input v-model="email" type="email" required placeholder="Email" />
    <input v-model="password" type="password" required placeholder="Password" />
    <button>Sign Up</button>
  </form>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { signup } from "../composables/useSignup";

const name = ref("");
const email = ref("");
const password = ref("");

const successSignup = defineEmits(["successSignup"]);

const handleSubmit = async () => {
  const { error } = await signup(email.value, password.value, name.value);

  if (!error.value) {
    successSignup("successSignup");
  } else {
    console.log(error.value);
  }
};
</script>

<style>
</style>