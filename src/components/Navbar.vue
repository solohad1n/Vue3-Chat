<template>
  <nav>
    <div>
      <p>Добро Пожаловать {{ user.displayName }}</p>
      <p class="email">Вы вошли в аккаунт с почтой {{ user.email }}</p>
    </div>
    <button @click="handleClickLogout">Выйти</button>
  </nav>
</template>

<script setup>
import { watchEffect } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import useLogout from "../composables/useLogout";
import { user } from "../composables/useUser";

console.log(user);

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

watchEffect(() => {
  if (!user.value) {
    router.push("/");
  }
}, user);
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