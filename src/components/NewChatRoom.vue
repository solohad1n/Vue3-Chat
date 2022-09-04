<template>
  <form>
    <textarea
      v-model="message"
      placeholder="Type a message and hit enter to send"
      @keypress.enter="handleSubmitMessage"
    ></textarea>
  </form>
</template>

<script setup>
import { user } from "@/composables/useUser";
import { ref } from "@vue/reactivity";
import { timestamp } from "@/Firebase/config";
import useCollection from "../composables/useCollection";

const message = ref("");

const { addDocument } = useCollection();

const handleSubmitMessage = async () => {
  const chat = {
    name: user.value.displayName,
    message: message.value,
    createdAt: timestamp,
  };

  const { error } = await addDocument(chat);

  if (error.value) {
    console.log(err.message);
  }

  message.value = "";
};
</script>

<style scoped>
form {
  margin: 10px;
  display: flex;
  align-items: center;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
  background-color: #e8e8f5;
  resize: none;
}
.error {
  text-align: center;
  color: #ff2a58;
  font-size: 12px;
  padding: 10px 0;
}

.shareIcon img {
  max-width: 50px;
  max-height: 50px;
}
.shareIcon input {
  display: none;
}
</style>