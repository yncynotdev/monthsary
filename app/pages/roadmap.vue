<script setup lang="ts" generic="T">
import type { Roadmap, MockRoadmap } from "@/types/types"

definePageMeta({
  colorMode: "dark"
})

const { userAuth } = useAuthState();

const items = ref<Roadmap[] | MockRoadmap[]>([]);
const { data: roadmap } = await useFetchRoadmap()

onMounted(async () => {
  if (!userAuth.value) {
    items.value = getMockRoadmap();
  } else {
    items.value = roadmap.value
  }
})
</script>

<template>
  <GeneratedStars />

  <section class="text-center gap-5 flex flex-col mb-14 px-5 mt-32">
    <h1 class="text-4xl lg:text-6xl text-latte-primary font-bold drop-shadow-latte-primary">Roadmap</h1>
    <p class="text-sm lg:text-lg">
      A roadmap of our milestones and accomplishments as partner
    </p>
  </section>

  <div v-if="!userAuth">
    <RoadmapCard
      v-for="(item, index) in items"
      :key="index"
      :img="item.img"
      :title="item.title"
      :description="item.description"
      :done="item.done"
    />
  </div>
  <div v-else>
    <RoadmapCard
      v-for="(item, index) in items"
      :key="index"
      :img="item.images.image_url"
      :title="item.title"
      :description="item.description"
      :done="item.done"
      :date="item.date"
    />
  </div>
</template>
