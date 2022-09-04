<template>
  <p>Chatroom</p>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatRoom />
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import NewChatRoom from "@/components/NewChatRoom.vue";
import ChatWindow from "@/components/ChatWindow.vue";
</script>

<style>
</style>