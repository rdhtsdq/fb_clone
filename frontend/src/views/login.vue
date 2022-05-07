<template>

  <div class="h-screen bg-[#F0F2F5] grid grid-cols-2 px-14 justify-center align-middle">
    <div class="grid justify-center items-center ">
      <div class="pl-32 pb-28">
        <div class="text-[#1877F2] text-6xl font-bold">facebook</div>
        <div class="text-3xl font-light">Facebook membantu Anda terhubung dan berbagi dengan orang-orang dalam kehidupan Anda.</div>
      </div>
    </div>
    <div class="grid justify-center items-center">
      <div class="h-[380px] w-[420px] bg-white shadow-2xl rounded-lg p-5 flex flex-col">
        <form class="flex flex-col mb-5" @submit.prevent="login()">
        <input v-model="form.email" type="text" name="email" id="email" class="px-5 py-4 border rounded-md focus:border-blue-700 mb-5 focus:outline-blue-500" placeholder="Email atau Nomor Telepon" autofocus>
        <input v-model="form.password" type="password"  name="password" id="password" class="px-5 py-4 border rounded-md mb-5 focus:border-blue-700 focus:outline-blue-500" placeholder="Kata Sandi" >
        <button type="submit" class="bg-[#1877F2] text-white text-lg py-3 rounded-md" @click="login">Masuk</button>
      </form>
      <router-link class="text-[#1877F2] text-center mb-3" to="#">Lupa Kata Sandi?</router-link>
      <hr />
      <router-link to="#" class="bg-[#42B72A] mx-24 px-5 py-3 text-center text-white text-lg font-bold mt-3 rounded-md">Buat Akun Baru</router-link>
      </div>
  </div>
    </div>

</template>
<script setup>
import { useAuthStore } from '../stores/auth.js';
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';
import router from '../router/index.js';

const auth = useAuthStore()
const form = reactive({})

const login = () => {
  auth.getToken(form.email,form.password)
  router.push({url:"/dashboard"})
  }
const logout = () => auth.logout()

try {
  
  const token = JSON.parse(localStorage.getItem('token'))


  if (token) {
    router.push({path:"/dashboard"})
  }
} catch (error) {
  
}



</script>