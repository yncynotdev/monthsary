<script setup lang="ts">
const { userAuth } = useAuthState();
const { data: monthsary } = await useFetch("/api/monthsary");
</script>

<template>
  <h1
    class="text-4xl md:text-5xl lg:text-6xl heading-gradient drop-shadow-latte-primary text-transparent bg-clip-text font-bold text-center">
    Happy {{ monthsary }}th
    <span class="text-transparent bg-clip-text"> Monthsary </span>
    <br>
    <span v-if="!userAuth" class="text-transparent bg-clip-text">
      My Pookie!
    </span>
    <span v-else class="text-transparent bg-clip-text"> My Bebi! </span>
  </h1>
</template>

<style scoped>
.heading-gradient {
  background-image: linear-gradient(to right,
      var(--color-latte-yellow),
      var(--color-latte-primary),
      var(--color-latte-secondary));
}
</style>
