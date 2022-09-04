<template>
  <nav>
    <div>
      <p>Добро Пожаловать</p>
      <p class="email">Вы вошли в аккаунт с почтой ...</p>
    </div>
    <button @click="handleClickLogout">Выйти</button>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
import useLogout from "../composables/useLogout";

const { error, logout } = useLogout();
const router = useRouter();

const handleClickLogout = async () => {
  await logout();

  if (!error.value) {
    router.push("/");
  } else {
    console.log(error.value);
  }
};
</script>

<style>
nav {
  padding: 20px;
  border-radius: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>