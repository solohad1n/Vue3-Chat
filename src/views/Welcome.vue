<template>
  <div class="welcome container">
    <p>Welcome</p>
    <SignUp />
  </div>
</template>

<script setup>
import SignUp from "@/components/SignUp.vue";
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
</style>