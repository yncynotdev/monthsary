<script setup lang="ts" generic="T">
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import type { IndexMemories, MockGallery } from "~/types/types"

const { userAuth } = useAuthState()

const props = defineProps<{
  items: Array<IndexMemories | MockGallery>
}>();

dayjs.extend(utc);
dayjs.extend(timezone);
</script>

<!--Carousel Template, for more infor visit: https://ui3.nuxt.dev/components/carousel-->
<template>
  <UCarousel
    v-slot="{ item }"
    loop
    dots
    :autoplay="{ delay: 2500 }"
    :items="props.items"
    :ui="{ item: 'basis-full sm:basis-1/2 md:basis-1/3' }"
  >
    <MemoriesCard
      v-if="userAuth"
      :img-src="item.images.image_url"
      :description="item.description"
      :header="dayjs(item.date).tz('Asia/Manila').format('MMMM DD, YYYY')"
    />
    <MemoriesCard
      v-else
      :img-src="item.image_url"
      :description="item.description"
      :header="item.date"
    />
  </UCarousel>
</template>
