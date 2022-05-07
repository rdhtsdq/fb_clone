<script setup>

</script>
<template>
<div class="pt-14 h-screen  grid grid-cols-12 gap-2 bg-[#18191A] text-white font-light overflow-y-auto">
    <div class="col-span-3 flex flex-col bg-[#242526] border border-[#474646] overflow-y-auto p-3">
        <div class="flex flex-row justify-between mb-3">
            <div class="mr-48">
                <h1 class="text-2xl font-medium">Watch</h1>
            </div>
            <div class="p-2 rounded-full bg-[#474646]">
                <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 0 1-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 0 1 .947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 0 1 2.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 0 1 2.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 0 1 .947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 0 1-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 0 1-2.287-.947zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" clip-rule="evenodd"/>
                </svg>
            </div>
        </div>
        <input type="text" class="w-full px-2 py-1 rounded-full placeholder:text-sm placeholder:p-2 bg-[#3A3B3C] mb-5" placeholder="Cari Video"/>
        <div class="flex flex-col">
            <div class="px-3 py-3 bg-[#3A3B3C] rounded-lg flex gap-2 align-middle">
                <div class="p-2 bg-[#1877F2] rounded-full">
                    <svg viewBox="0 0 24 24" class="h-5 w-5 fill-white" active-class="h-7 w-7 fill-[#1877F2]" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M14.823 11.708a.325.325 0 0 1 .169.292.314.314 0 0 1-.12.266L9.5 14.954a.337.337 0 0 1-.5-.293V9.339a.327.327 0 0 1 .168-.292.314.314 0 0 1 .157-.042.462.462 0 0 1 .228.068zM24 5v14a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5zm-7.008 7a2.332 2.332 0 0 0-1.226-2.055L10.488 7.31a2.337 2.337 0 0 0-3.5 2.029v5.322a2.313 2.313 0 0 0 1.164 2.021 2.368 2.368 0 0 0 1.186.323 2.2 2.2 0 0 0 1.1-.289l5.376-2.687A2.313 2.313 0 0 0 16.992 12z"/></svg>
                </div>
                <h1 class="mt-2 text-sm">
                    Beranda
                </h1>
            </div>
            <div class="px-3 py-3 bg-[#242526] hover:bg-[#3A3B3C] rounded-lg flex gap-2 align-middle">
                <div class="p-2 bg-[#414446] rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 fill-white">
                        <path d="M14.021 6.106 9.793 1.879A2.976 2.976 0 0 0 7.672 1H1a1 1 0 0 0 0 2h6.672a1.006 1.006 0 0 1 .707.293L11.086 6H5a5.006 5.006 0 0 0-5 5v8a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5v-8a5.008 5.008 0 0 0-3.979-4.894ZM22.9 8.955a1.987 1.987 0 0 0-2.092.184l-.8.6v10.522l.8.6a2 2 0 0 0 3.2-1.6v-8.518A1.988 1.988 0 0 0 22.9 8.955Z"/>
                    </svg>
                </div>
                <h1 class="mt-2 text-sm">
                    Siaran Langsung
                </h1>
            </div>
            <div class="px-3 py-3 bg-[#242526] hover:bg-[#3A3B3C] rounded-lg flex gap-2 align-middle">
                <div class="p-2 bg-[#414446] rounded-full">
                    <svg viewBox="0 0 24 24" class="h-5 w-5 fill-white" active-class="h-7 w-7 fill-[#1877F2]" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M14.823 11.708a.325.325 0 0 1 .169.292.314.314 0 0 1-.12.266L9.5 14.954a.337.337 0 0 1-.5-.293V9.339a.327.327 0 0 1 .168-.292.314.314 0 0 1 .157-.042.462.462 0 0 1 .228.068zM24 5v14a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5zm-7.008 7a2.332 2.332 0 0 0-1.226-2.055L10.488 7.31a2.337 2.337 0 0 0-3.5 2.029v5.322a2.313 2.313 0 0 0 1.164 2.021 2.368 2.368 0 0 0 1.186.323 2.2 2.2 0 0 0 1.1-.289l5.376-2.687A2.313 2.313 0 0 0 16.992 12z"/></svg>
                </div>
                <h1 class="mt-2 text-sm">
                    Beranda
                </h1>
            </div>
            <div class="px-3 py-3 bg-[#242526] hover:bg-[#3A3B3C] rounded-lg flex gap-2 align-middle">
                <div class="p-2 bg-[#414446] rounded-full">
                    <svg viewBox="0 0 24 24" class="h-5 w-5 fill-white" active-class="h-7 w-7 fill-[#1877F2]" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M14.823 11.708a.325.325 0 0 1 .169.292.314.314 0 0 1-.12.266L9.5 14.954a.337.337 0 0 1-.5-.293V9.339a.327.327 0 0 1 .168-.292.314.314 0 0 1 .157-.042.462.462 0 0 1 .228.068zM24 5v14a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5zm-7.008 7a2.332 2.332 0 0 0-1.226-2.055L10.488 7.31a2.337 2.337 0 0 0-3.5 2.029v5.322a2.313 2.313 0 0 0 1.164 2.021 2.368 2.368 0 0 0 1.186.323 2.2 2.2 0 0 0 1.1-.289l5.376-2.687A2.313 2.313 0 0 0 16.992 12z"/></svg>
                </div>
                <h1 class="mt-2 text-sm">
                    Beranda
                </h1>
            </div>
        </div>
    </div>
</div>
</template>