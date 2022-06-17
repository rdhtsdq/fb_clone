 <script setup>
</script>

<template>
<div class="pt-14 h-screen  grid grid-cols-12 gap-2 bg-[#18191A] text-white font-light overflow-y-auto">

    <!-- Side Bar -->

    <div class="col-span-3 flex flex-col bg-[#242526]  border border-[#474646] overflow-hidden p-3">
        <div class="flex flex-row justify-between mb-3">
            <div class="mr-28">
                <h1 class="text-2xl font-medium">Marketplace</h1>
            </div>
            <div class="p-2 rounded-full bg-[#474646]">
                <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 0 1-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 0 1 .947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 0 1 2.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 0 1 2.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 0 1 .947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 0 1-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 0 1-2.287-.947zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" clip-rule="evenodd"/>
                </svg>
            </div>
        </div>

        <input type="text" class="w-full px-2 py-1 rounded-full placeholder:text-sm placeholder:p-2 bg-[#3A3B3C] mb-5" placeholder="Telusuri Marketplace"/>

        <div class="flex flex-col mb-3">
            <div class="px-3 py-2 bg-[#3A3B3C] rounded-lg flex gap-2 align-middle">
                <div class="p-1 bg-[#1877F2] rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" class="h-5 w-5 fill-white"  fill="#B0B3B8"><path d="M16,13a5,5,0,0,1-8,0,4.956,4.956,0,0,1-7,.977V19a5.006,5.006,0,0,0,5,5H18a5.006,5.006,0,0,0,5-5V13.974A4.956,4.956,0,0,1,16,13Z"/><path d="M21.7,3.131A3.975,3.975,0,0,0,17.792,0H17V3a1,1,0,0,1-2,0V0H9V3A1,1,0,0,1,7,3V0H6.208A3.975,3.975,0,0,0,2.3,3.132L1.022,8.9,1,10.02A3,3,0,0,0,7,10a1,1,0,0,1,2,0,3,3,0,1,0,6,0,1,1,0,0,1,2,0,3,3,0,1,0,6,0V9.107Z"/></svg>
                </div>
                <h1 class="mt-2 text-sm">
                    Telusuri Semua
                </h1>
            </div>
            <div class="px-3 py-1 bg-[#242526] hover:bg-[#3A3B3C] rounded-lg flex gap-2 align-middle">
                <div class="p-2 bg-[#414446] rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4 fill-white">
                        <path d="M14.021 6.106 9.793 1.879A2.976 2.976 0 0 0 7.672 1H1a1 1 0 0 0 0 2h6.672a1.006 1.006 0 0 1 .707.293L11.086 6H5a5.006 5.006 0 0 0-5 5v8a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5v-8a5.008 5.008 0 0 0-3.979-4.894ZM22.9 8.955a1.987 1.987 0 0 0-2.092.184l-.8.6v10.522l.8.6a2 2 0 0 0 3.2-1.6v-8.518A1.988 1.988 0 0 0 22.9 8.955Z"/>
                    </svg>
                </div>
                <h1 class="mt-2 text-sm">
                    Live shopping
                </h1>
            </div>
            <div class="px-3 py-1 bg-[#242526] hover:bg-[#3A3B3C] rounded-lg flex gap-2 align-middle">

                <div class="p-2 bg-[#414446] rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                    </svg>
                </div>
                <h1 class="mt-2 text-sm">
                    Notifikasi
                </h1>
            </div>
            <div class="px-3 py-1 bg-[#242526] hover:bg-[#3A3B3C] rounded-lg flex gap-2 align-middle">
                <div class="p-2 bg-[#414446] rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                    </svg>
                </div>
                <h1 class="mt-2 text-sm">
                    Kontak Masuk
                </h1>
            </div>
            <div class="px-3 py-1 bg-[#242526] hover:bg-[#3A3B3C] rounded-lg flex gap-2 align-middle">
                <div class="p-2 bg-[#414446] rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket-fill" viewBox="0 0 16 16">
                        <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z"/>
                    </svg>
                </div>
                <h1 class="mt-2 text-sm">
                    Beli
                </h1>
            </div>
            <div class="px-3 py-1 bg-[#242526] hover:bg-[#3A3B3C] rounded-lg flex gap-2 align-middle">
                <div class="p-2 bg-[#414446] rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tag-fill" viewBox="0 0 16 16">
                        <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    </svg>
                </div>
                <h1 class="mt-2 text-sm">
                    Jual
                </h1>
            </div>

            <div class="flex justify-center rounded-lg py-2 mt-5 bg-blue-900 text-blue-400 font-bold">
                <p>+ Jual Barang</p>
            </div>
        </div>

        <hr class="border-[1px] border-[#3c3b3b]">

        <h1 class="font-bold text-md mt-3">Filter</h1>

        <div class="flex">
            <a href="" class="font-bold text-blue-400">Bandung . Dalam 60 Kilometer</a>
        </div>

        <hr class="border-[1px] my-3 border-[#3c3b3b]">

        <h1 class="font-bold text-md">
            Kategori
        </h1>

        <div class="flex">
                    
        </div>
    </div>

    <!-- Side Bar -->

    <!-- Content -->

    <div class="col-span-9 pt-3 overflow-y-scroll">
        <div class="flex flex-col items-center gap-3">
            <div class="h-fit w-2/3 p-5 bg-[#242526] rounded-lg ">
                
            </div>
            <div class="h-fit w-2/3 p-5 bg-[#242526] rounded-lg ">
            </div>
            <div class="h-fit w-2/3 p-5 bg-[#242526] rounded-lg ">
            </div>
            <div class="h-fit w-2/3 p-5 bg-[#242526] rounded-lg ">
            </div>
            <div class="h-fit w-2/3 p-5 bg-[#242526] rounded-lg ">
            </div>
            <div class="h-fit w-2/3 p-5 bg-[#242526] rounded-lg ">
            </div>
            <div class="h-fit w-2/3 p-5 bg-[#242526] rounded-lg ">
            </div>
            <div class="h-fit w-2/3 p-5 bg-[#242526] rounded-lg ">
            </div>
            <div class="h-fit w-2/3 p-5 bg-[#242526] rounded-lg ">
            </div>
            <div class="h-fit w-2/3 p-5 bg-[#242526] rounded-lg ">
            </div>
            <div class="h-fit w-2/3 p-5 bg-[#242526] rounded-lg ">
            </div>
            <div class="h-fit w-2/3 p-5 bg-[#242526] rounded-lg ">
            </div>
            <div class="h-fit w-2/3 p-5 bg-[#242526] rounded-lg ">
            </div>
            <div class="h-fit w-2/3 p-5 bg-[#242526] rounded-lg ">
            </div>
            <div class="h-fit w-2/3 p-5 bg-[#242526] rounded-lg ">
            </div>
            <div class="h-fit w-2/3 p-5 bg-[#242526] rounded-lg ">
            </div>
            <div class="h-fit w-2/3 p-5 bg-[#242526] rounded-lg ">
            </div>
            <div class="h-fit w-2/3 p-5 bg-[#242526] rounded-lg ">
            </div>
        </div>
    </div>

    <!-- Content -->
</div>
</template>