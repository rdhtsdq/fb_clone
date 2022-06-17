<template>
  <nav class="top-0 z-40 absolute h-14 border-y border-y-[#393A3B] w-full bg-[#242526] p-2 flex mb-14">
    <router-link to="/">
      <img src="@/assets/f_logo_RGB-Blue_58.png" class="ml-3" width="40" />
    </router-link>
    <input type="text" class="ml-3 rounded-full bg-[#3A3B3C] outline-none p-3 text-white " placeholder="cari"/>
    <div class="flex justify-center items-center mx-20 ">
      <router-link 
        to="/dashboard"

        class="border-b-2 py-[12px] px-10 border-transparent hover:bg-[#3A3B3C] hover:rounded-lg " 

        active-class="border-b-2 py-[12px] px-10 border-[#1877F2] fill-[#1877F2]" exact> 

        <svg xmlns="http://www.w3.org/2000/svg" active-class="h-7 w-7 fill-[#1877F2]" class="h-7 w-7 fill-[#B0B3B8]" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 0 0-1.414 0l-7 7a1 1 0 0 0 1.414 1.414L4 10.414V17a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6.586l.293.293a1 1 0 0 0 1.414-1.414l-7-7z"/></svg>
      </router-link>


      <router-link to="/watch" class="border-b-2 py-[12px] px-10 border-transparent hover:bg-[#3A3B3C] hover:rounded-lg " active-class="border-b-2 py-[12px] px-10 border-[#1877F2]" exact>
        <svg viewBox="0 0 24 24" class="h-7 w-7 fill-[#B0B3B8]" active-class="h-7 w-7 fill-[#1877F2]" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M14.823 11.708a.325.325 0 0 1 .169.292.314.314 0 0 1-.12.266L9.5 14.954a.337.337 0 0 1-.5-.293V9.339a.327.327 0 0 1 .168-.292.314.314 0 0 1 .157-.042.462.462 0 0 1 .228.068zM24 5v14a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5zm-7.008 7a2.332 2.332 0 0 0-1.226-2.055L10.488 7.31a2.337 2.337 0 0 0-3.5 2.029v5.322a2.313 2.313 0 0 0 1.164 2.021 2.368 2.368 0 0 0 1.186.323 2.2 2.2 0 0 0 1.1-.289l5.376-2.687A2.313 2.313 0 0 0 16.992 12z"/></svg>
      </router-link>
      <router-link to="/marketplace" class="border-b-2 py-[12px] px-10 border-transparent hover:bg-[#3A3B3C] hover:rounded-lg " active-class="border-b-2 py-[12px] px-10 border-[#1877F2]" exact>
        <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" class="h-7 w-7"  fill="#B0B3B8"><path d="M16,13a5,5,0,0,1-8,0,4.956,4.956,0,0,1-7,.977V19a5.006,5.006,0,0,0,5,5H18a5.006,5.006,0,0,0,5-5V13.974A4.956,4.956,0,0,1,16,13Z"/><path d="M21.7,3.131A3.975,3.975,0,0,0,17.792,0H17V3a1,1,0,0,1-2,0V0H9V3A1,1,0,0,1,7,3V0H6.208A3.975,3.975,0,0,0,2.3,3.132L1.022,8.9,1,10.02A3,3,0,0,0,7,10a1,1,0,0,1,2,0,3,3,0,1,0,6,0,1,1,0,0,1,2,0,3,3,0,1,0,6,0V9.107Z"/></svg>
      </router-link>
      <router-link to="/group" class="border-b-2 py-[12px] px-10 border-transparent hover:bg-[#3A3B3C] hover:rounded-lg " active-class="border-b-2 py-[12px] px-10 border-[#1877F2]" exact>
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" class="h-7 w-7"  fill="#B0B3B8"><path d="M12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM5.683,16H1a1,1,0,0,1-1-1A6.022,6.022,0,0,1,5.131,9.084a1,1,0,0,1,1.1,1.266A6.009,6.009,0,0,0,6,12a5.937,5.937,0,0,0,.586,2.57,1,1,0,0,1-.9,1.43ZM17,24H7a1,1,0,0,1-1-1,6,6,0,0,1,12,0A1,1,0,0,1,17,24ZM18,8a4,4,0,1,1,4-4A4,4,0,0,1,18,8ZM6,8a4,4,0,1,1,4-4A4,4,0,0,1,6,8Zm17,8H18.317a1,1,0,0,1-.9-1.43A5.937,5.937,0,0,0,18,12a6.009,6.009,0,0,0-.236-1.65,1,1,0,0,1,1.105-1.266A6.022,6.022,0,0,1,24,15,1,1,0,0,1,23,16Z"/></svg>
      </router-link>
      <router-link to="/game" class="border-b-2 py-[12px] px-10 border-transparent hover:bg-[#3A3B3C] hover:rounded-lg " active-class="border-b-2 py-[12px] px-10 border-[#1877F2]" exact>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" class="fill-[#B0B3B8]" viewBox="0 0 16 16">
          <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z"/>
          <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z"/>
      </svg>
      </router-link>
    </div>
    <div @click="a" class=" cursor-pointer flex my-auto gap-3 hover:bg-[#3A3B3C] p-1 hover:rounded-full">
      <img src="@/assets/profile.jpg" class="w-[30px] h-[30px] rounded-full mt-1" />
      <span class="mt-2 font-bold text-[#E0E2E6] text-sm ">Radithya</span>
    </div>
    <div class="flex ml-2 gap-2" >
      <div class="rounded-full bg-[#3A3B3C] h-full w-full px-2 py-2">
        <svg xmlns="http://www.w3.o
        rg/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" class="w-5 h-5 fill-[#E4E6EB]">
          <g>
            <path d="M85.333,0h64c47.128,0,85.333,38.205,85.333,85.333v64c0,47.128-38.205,85.333-85.333,85.333h-64   C38.205,234.667,0,196.462,0,149.333v-64C0,38.205,38.205,0,85.333,0z"/>
            <path d="M362.667,0h64C473.795,0,512,38.205,512,85.333v64c0,47.128-38.205,85.333-85.333,85.333h-64   c-47.128,0-85.333-38.205-85.333-85.333v-64C277.333,38.205,315.538,0,362.667,0z"/>
            <path d="M85.333,277.333h64c47.128,0,85.333,38.205,85.333,85.333v64c0,47.128-38.205,85.333-85.333,85.333h-64   C38.205,512,0,473.795,0,426.667v-64C0,315.538,38.205,277.333,85.333,277.333z"/>
            <path d="M362.667,277.333h64c47.128,0,85.333,38.205,85.333,85.333v64C512,473.795,473.795,512,426.667,512h-64   c-47.128,0-85.333-38.205-85.333-85.333v-64C277.333,315.538,315.538,277.333,362.667,277.333z"/>
          </g>
        </svg>
      </div>
      <div class="rounded-full bg-[#3A3B3C] h-full w-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xml:space="preserve" class="w-5 h-5 fill-[#E4E6EB]">
          <path d="M12 0C5.24 0 0 4.952 0 11.64c0 3.498 1.434 6.522 3.769 8.61a.962.962 0 0 1 .323.684l.065 2.134a.96.96 0 0 0 1.347.849l2.382-1.051a.962.962 0 0 1 .641-.047c1.094.301 2.259.461 3.473.461 6.76 0 12-4.952 12-11.64S18.76 0 12 0zm7.206 8.956-3.525 5.593a1.8 1.8 0 0 1-2.603.48l-2.804-2.103a.719.719 0 0 0-.867.003L5.62 15.802c-.505.383-1.165-.221-.827-.758l3.525-5.593a1.8 1.8 0 0 1 2.603-.48l2.804 2.103a.719.719 0 0 0 .867-.003l3.787-2.873c.506-.383 1.165.221.827.758z" fill-rule="evenodd" clip-rule="evenodd"/>
        </svg>
      </div>
      <div class="rounded-full bg-[#3A3B3C] h-full w-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5 fill-[#E4E6Eb]">
          <path d="M7.424 21a4.99 4.99 0 0 0 9.152 0ZM22.392 12.549l-1.736-5.723A9.321 9.321 0 0 0 2.58 7.28l-1.348 5.537A5 5 0 0 0 6.09 19h11.517a5 5 0 0 0 4.785-6.451Z"/>
        </svg>
      </div>
      <div class="rounded-full bg-[#3A3B3C] h-full w-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5 fill-[#E4E6Eb]">
          <path d="M6.41 9h11.18a1 1 0 0 1 .7 1.71l-5.58 5.58a1 1 0 0 1-1.42 0l-5.58-5.58A1 1 0 0 1 6.41 9Z"/>
        </svg>
      </div>
    </div>
  </nav>
  <RouterView />
</template>
<script setup>
import { RouterLink,RouterView } from 'vue-router';

function a() {
  console.log("clicked");
}

</script>