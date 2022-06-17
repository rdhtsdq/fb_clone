<script setup>
</script>

<template>
<div class="pt-14 h-screen  grid grid-cols-12 gap-2 bg-[#18191A] text-white font-light overflow-y-auto">
    <div class="col-span-3 flex flex-col bg-[#242526]  border border-[#474646] overflow-hidden p-3">
        <div class="flex justify-between">
            <div class="">
                <h1 class="text-2xl font-medium">Grup</h1>
            </div>
            <div class="p-2 rounded-full bg-[#474646]">
                <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 0 1-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 0 1 .947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 0 1 2.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 0 1 2.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 0 1 .947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 0 1-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 0 1-2.287-.947zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" clip-rule="evenodd"/>
                </svg>
            </div>
        </div>

        <input type="text" class="w-full px-2 my-3 py-1 rounded-full placeholder:text-sm placeholder:p-2 bg-[#3A3B3C] mb-5" placeholder="Cari Grup"/>

        <div class="flex rounded-lg  items-center space-x-2 bg-[#3A3B3C] p-2">
            <div class="rounded-full bg-blue-400 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                </svg>
            </div>
            <p class="font-bold">Beranda Anda</p>
        </div>
        <div class="flex rounded-lg items-center space-x-2 p-2 hover:bg-[#3A3B3C]">
            <div class="p-2 rounded-full bg-[#3a3b3c]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-compass-fill" viewBox="0 0 16 16">
                    <path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z"/>
                </svg>
            </div>

            <p class="font-bold">Temukan</p>
        </div>

        <div class="flex justify-center rounded-lg py-2 mt-5 bg-blue-900 text-blue-400 font-bold">
                <p>+ Buat Grup Baru</p>
        </div>

        <hr class="border-[1px] border-[#3c3b3b] my-3">

    </div>
</div>
</template>