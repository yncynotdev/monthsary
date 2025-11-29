<script setup lang="ts" generic="T">
import type { MockRoadmap } from '~/types/types';

const props = defineProps<MockRoadmap>();
</script>

<template>
  <UCard
    class="max-w-screen w-full lg:w-[1000px] bg-mocha-base flex flex-col items-center justify-center text-center mb-14">
    <!-- Header -->
    <template #header>
      <h2 class="text-2xl lg:text-3xl font-bold drop-shadow-latte-primary p-4 lg:p-7">
        {{ props.title }}
      </h2>
    </template>

    <!-- Body -->
    <ImageCard :img="props.img" :date="props.date" :done="props.done" />

    <!-- Footer -->
    <template #footer>
      <p class="text-sm lg:text-lg">{{ props.description }}</p>
    </template>
  </UCard>
</template>
