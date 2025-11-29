<script setup lang="ts">
import type { GalleryCard } from '~/types/types';

const props = defineProps<GalleryCard>();
</script>

<template>
  <UCard class="m-1 lg:h-[560px] bg-mocha-base py-5 lg:py-0">
    <template #header>
      <div class="flex flex-col gap-4">
        <img :src="props.imgSrc" class="rounded-lg h-[320px] lg:size-[320px] object-cover" >

        <h3 class="text-sm font-bold">
          {{ props.header }}
        </h3>
      </div>
    </template>

    <div>
      <p>{{ props.description }}</p>
    </div>
  </UCard>
</template>
