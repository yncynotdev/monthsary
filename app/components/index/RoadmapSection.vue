<script setup lang="ts">
import type { Roadmap, MockRoadmap } from "@/types/types"

const fetchedItems = ref<Roadmap[]>([]);
const mockItems = ref<MockRoadmap[]>([])

const { userAuth } = useAuthState();
const { data: roadmap } = await useFetchRoadmapRange("4");

onMounted(async () => {
  mockItems.value = getMockRoadmap()
  fetchedItems.value = roadmap.value
});

const items = computed(() => {
  return !userAuth.value ? mockItems.value : fetchedItems.value;
})
</script>

<template>
  <section id="roadmap" class="flex flex-col items-center justify-center py-10 min-w-full">
    <h2 class="drop-shadow-latte-primary text-3xl lg:text-5xl">Roadmap</h2>
    <p class="text-sm lg:text-lg">Lists of accomplished goals</p>
    <section 
      v-for="(item, index) in items"
      :key="index"
      class="px-6 pt-10 lg:px-10 lg:pt-20 mb-10 w-full max-w-screen flex flex-col"
    >
      <RoadmapStack
        v-if="!userAuth"
        :is-reversed="evenOrOdd(index)"
        :img-source="item.img"
        :title="item.title"
        :description="item.description"
      />
      <RoadmapStack
        v-if="userAuth"
        :is-reversed="evenOrOdd(index)" 
        :img-source="item.images.image_url"
        :title="item.title"
        :description="item.description"
      />
    </section>
    <UButton 
      label="See More..."
      trailing-icon="i-lucide-arrow-right"
      variant="subtle"
      :block="false"
      @click="navigateTo('/roadmap')"
    />
  </section>
</template>
