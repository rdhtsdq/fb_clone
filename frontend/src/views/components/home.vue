<script setup>
import post from '../partial/post.vue'
import leftbar from '../partial/leftbar.vue'
import rightbar from '../partial/rightbar.vue'
</script>
<template>
    <div class="pt-14 h-screen  grid grid-cols-8 gap-2 bg-[#18191A] text-white font-light overflow-y-auto scrollbar-thin scrollbar-track-inherit">
        <div class="col-span-2 hover:overflow-y-auto overflow-hidden  ">
            <leftbar />
        </div>
        <div class="col-span-4 overflow-auto">
            <post />
        </div>
        <div class="col-span-2 hover:overflow-y-auto overflow-hidden">
            <rightbar />
        </div>
    </div>
</template>