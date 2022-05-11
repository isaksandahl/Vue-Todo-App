<template>
  <header class="p-4 mb-10 text-center text-orange-600">
    <div class="w-full">
      <p
        class="text-3xl md:text-5xl font-bold mb-3 p-5 uppercase tracking-widest"
      >
        My Vue Todo App
      </p>
      <div class="w-3/4 m-auto border-b border-zinc-500"></div>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Header extends Vue {}
</script>
