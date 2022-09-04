<template>
  <div class="chat-window">
    <div v-if="documents" class="messages">
      <div v-for="doc in documents" :key="doc.id">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
    <div v-else>Загрузка...</div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import useCollection from "../composables/useCollection";

const { getCollection } = useCollection();

const documents = ref([]);

(async () => {
  const { documents: docs } = await getCollection();
  documents.value = docs.value;
})();
</script>

<style scoped>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 9px;
  margin-bottom: 6px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
.chat__avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-right: 10px;
}
.me.chat__message {
  flex-flow: row-reverse;
}
.me.chat__message img {
  margin-right: 0;
  margin-left: 10px;
}
.me.chat__message .created-at {
  display: flex;
  justify-content: flex-end;
}
.chat__message {
  display: flex;
  margin-bottom: 10px;
}
.chat__image img {
  max-width: 150px;
  max-height: 150px;
  object-fit: cover;
  border-radius: 12px;
}
.chat__image.me {
  display: flex;
  justify-content: flex-end;
}
</style>